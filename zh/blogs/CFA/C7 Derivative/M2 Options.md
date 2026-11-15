---
title: "期权"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 520px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
</style>

# 期权

基本逻辑是**无套利**：期权的价格等于复制其收益的、由标的和无风险债券组成的组合的成本。

## 二叉树期权估值 {#binomial-option-valuation}

### 基本公式

在风险中性下，每一步（长度为 $\Delta t$）的公式为：

$$
\begin{align}
S_u &= S_0 \cdot u\\
S_d &= S_0 \cdot d\\
p_u &= \frac{e^{r\Delta t}-d}{u-d}\\
p_d &= 1-p_u\\
C_T &= \max(S_T-X,0)\\
C_0 &= e^{-r\Delta t} \left(p_uC_u + p_dC_d\right)
\end{align}
$$

这里 $r$ 是连续复利；若用离散利率，把 $e^{r\Delta t}$ 换成 $(1+r)^{\Delta t}$，与下面的 CFA 记法一致。多于一步时，在每个节点应用最后一行，从到期日倒推到今天（**逆向归纳**）。

下面的代码在树上为欧式或美式看涨、看跌期权定价，并重现下面的[两期例子](#example)。它直接接受上升和下降因子；`crr_factors` 由波动率构造这两个因子，`annualized_volatility` 由价格历史（如 SPY 最近 30 个交易日的收盘价）估计该波动率。

```python
import math


def binomial_price(S, X, r, u, d, n, option="call", american=False):
    """Price an option on a recombining binomial tree.

    S: spot price; X: exercise price; r: risk-free rate per step (discrete);
    u, d: up and down factors per step; n: number of steps.
    """
    pi_u = (1 + r - d) / (u - d)                 # risk-neutral up probability
    if not 0 < pi_u < 1:
        raise ValueError("no-arbitrage requires d < 1 + r < u")
    payoff = (lambda s: max(s - X, 0.0)) if option == "call" else (lambda s: max(X - s, 0.0))

    # Values at expiry: node j has j down moves.
    values = [payoff(S * u ** (n - j) * d ** j) for j in range(n + 1)]

    # Backward induction: discounted risk-neutral expectation at each node.
    for step in range(n - 1, -1, -1):
        for j in range(step + 1):
            hold = (pi_u * values[j] + (1 - pi_u) * values[j + 1]) / (1 + r)
            if american:                         # exercise early if worth more
                hold = max(hold, payoff(S * u ** (step - j) * d ** j))
            values[j] = hold
    return values[0]


def crr_factors(sigma, dt):
    """Cox-Ross-Rubinstein up/down factors from volatility: U = e^(σ√Δt), D = 1/U."""
    u = math.exp(sigma * math.sqrt(dt))
    return u, 1 / u


def annualized_volatility(close, window=30, periods_per_year=252):
    """Volatility from the last `window` log returns of a pandas Series of prices."""
    import numpy as np
    log_returns = np.log(close / close.shift(1)).dropna()
    return log_returns.iloc[-window:].std() * math.sqrt(periods_per_year)


# The two-period example below: S = 50, X = 50, r = 5%, U = 1.356, D = 0.744
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "call")                 # 9.71
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put")                  # 5.06
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put", american=True)   # 6.10
```

> [!Note]
>
> 波动率在整棵树中保持不变。如果 $U$ 每一步都变化，先升后降的路径就不再与先降后升的路径终于同一价格，树也就不再重合。

### 组成部分

二叉树的基本假设：

* 从 $S_0$ 开始。
* 每一步，价格按因子 $U$ 上升或按因子 $D$ 下降，且 $D<1+r_f<U$（否则存在套利）。默认 $D=\frac{1}{U}$。

#### 模型一

$U$ 和 $D$ 的常用取法（Cox、Ross 和 Rubinstein）假设价格的**对数**服从随机游走：每一步 $\ln S$ 上升或下降 $\sigma\sqrt{\Delta t}$。因此

$$
U=e^{\sigma\sqrt{\Delta t}},\qquad D=e^{-\sigma\sqrt{\Delta t}}=\frac{1}{U}
$$

且当 $\Delta t=1$ 时，$S_u=Se^{\sigma}=SU$，$S_d=Se^{-\sigma}=SD$。把同样的思路用于利率而非价格（$dr=\sigma\,dw$，其中 $w$ 是随机游走），就得到[固定收益](../C6%20Fixed%20Income/M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model)中的利率树。

### 风险中性概率 {#risk-neutral-probability}

由无套利推出：在风险中性世界中，股票的预期价格必须以无风险利率增长。

$$
\begin{aligned}
E(S_t)&= \pi_uS_0U+(1-\pi_u)S_0D\\
&=S_0(1+r_f)^t
\end{aligned}
$$

解出 $\pi_u$：

$$
\begin{align}
\pi_u &= \frac{(1+r_f)^t-D}{U-D}\\
\pi_d &= 1-\pi_u = \frac{U-(1+r_f)^t}{U-D}
\end{align}
$$

这些不是现实世界的概率：它们是使按无风险利率折现得到无套利价格的概率。实际概率和股票的预期回报都不进入期权价格。

### 单期二叉树模型

现在假设一份欧式期权，一步之后的收益为：

$$
\begin{align}
C_{u,t}&= \max(0, S_u-X)\\
P_{u,t}&=\max(0, X-S_u)\\
C_{d,t}&=\max(0,S_d-X)\\
P_{d,t}&=\max(0,X-S_d)
\end{align}
$$

今天的价值就是风险中性预期收益的折现值：

$$C_0=\frac{\pi_u C_{u,t}+\pi_d C_{d,t}}{(1+r_f)^t}$$

$$P_0 = \frac{\pi_u P_{u,t}+\pi_d P_{d,t}}{(1+r_f)^t}$$

### 看跌—看涨平价

**信托看涨**（看涨期权加一只支付 $X$ 的无风险债券）和**保护性看跌**（股票加看跌期权）收益相同，都是 $\max(S_T,X)$，因此价格必须相同：

|              | **信托看涨**      | **保护性看跌** |
| ------------ | ----------------------- | ------------------ |
|              | $c + \frac{X}{(1+r_f)^t}$ | $S+p$              |
| **若 S ≤ X** | $0+X=X$                 | $S+(X-S)=X$        |
| **若 S ≥ X** | $(S-X)+X=S$             | $S+0=S$            |

于是有：

$$
c+\frac{X}{(1+r_f)^t}=S_0+p
$$

### 无风险组合法

1. **买入 $\delta$ 股**并**卖出一份看涨期权**，构造一个无风险组合。它在时间 $0$ 的价值为：
   $$
   V_{0}=\delta S_0-c_0
   $$

2. 在 $t$ 时：
   $$
   \begin{align}
   V_{u,t}&=\delta S_u-C_u\\
   V_{d,t}&=\delta S_d-C_d
   \end{align}
   $$

3. 由于组合无风险，$V_{u,t}=V_{d,t}$，由此解出**对冲比率**：
   $$
   \delta = \frac{C_u-C_d}{S_u-S_d}=\frac{C_u-C_d}{S_0(U-D)}
   $$

4. 无风险组合必须获得无风险利率，$V_{u,t}=(1+r_f)^t V_0$。代入 $V_0 = \delta S_0-c_0$：
   $$
   c_0 = \delta S_0-\frac{\delta S_u-C_u}{(1+r_f)^t}
   $$
   得到与风险中性概率法相同的价值。

> [!Note]
>
> 如果看涨期权的市场价格与这个价值不同，就存在套利：以每份看涨期权对应 $\delta$ 股（$\delta$ 即**对冲比率**）交易该看涨期权，并借入或贷出差额。

### 两期二叉树模型

与单期模型相同，$\pi_u$ 和 $\pi_d$ 可用同样方法计算（只要 $U$、$D$ 和步长不变，实际上数值也相同！）。然后一次一步地向后推：在每个节点，价值是下一步两个价值的风险中性期望的折现值。

#### 例子 {#example}

考虑一只不支付股息的股票，当前价格为 €50。以该股票为标的的欧式看涨期权距到期两年，行权价为 €50。假设无风险利率为每年 5%。另外，上升因子（U）为 1.356，下降因子（D）为 0.744。根据这些信息，要求计算该看涨期权的当前价值以及相应看跌期权的当前价值。

<div class="reveal" tabindex="0">


为求解，我们先

**第 1 步**：计算二叉树中的股价。上升—上升价格为 $S^{++} = 91.94$，上升—下降和下降—上升价格为 $S^{+-} = S^{-+} = 50.44$，下降—下降价格为 $S^{–} = 27.68$。

**第 2 步**，计算到期时的期权价值。看涨期权有 $C^{++} = 41.95$，以及 $C^{+-} = C^{-+} = 0.44$。下降—下降的看涨价值为 $C^{–} = 0$。看跌期权有 $P^{++} = P^{+-} = P^{-+} = 0$，以及 $P^{–} = 22.32$。

**第 3 步**计算风险中性概率。上升概率为 $\pi_U = \frac{(1 + 0.05) - 0.744}{1.356 - 0.744} = 0.5$，下降概率为 $\pi_D = 1 - \pi_U = 0.5$。

接着计算中间节点的期权价值。看涨期权 $C^{+} = \frac{(0.5 \times 41.94 + 0.5 \times 0.44)}{1.05} = 20.18$，$C^{-} = \frac{(0.5 \times 0.44 + 0.5 \times 0)}{1.05} = 0.22$。看跌期权 $P^{+} = \frac{(0.5 \times 0 + 0.5 \times 0)}{1.05} = 0$，$P^{-} = \frac{(0.5 \times 0 + 0.5 \times 22.32)}{1.05} = 10.63$。

**第 4 步**，计算初始价值。看涨期权价值 $C_0 = \frac{(0.5 \times 20.18 + 0.5 \times 0.22)}{1.05} = 9.71$，看跌期权价值 $P_0 = \frac{(0.5 \times 0 + 0.5 \times 10.63)}{1.05} = 5.06$。

另外一个提示，用看跌—看涨平价公式可以验证：

$P_0 = C_0 + PV(X) - S_0 = 9.71 + \frac{50}{(1.05)^2} - 50 = 5.06$.


</div>

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="二叉树：利率、债券价值、股价和看涨期权价值"
  loading="lazy"
></iframe>

图中的股价树和看涨期权价值树就是这个例子；另外两棵是固定收益中的利率树。

### 美式期权的提前行权

* 不支付股息股票的美式看涨期权不会被提前行权，因为看涨期权的价值高于其行权价值 $S-X$：*活着比死了更值钱*。因此不支付股息股票的美式看涨期权与欧式看涨期权价值相同。
* **支付股息**股票的美式看涨期权可能被提前行权，在股票除息之前行权以获得股息。
* 美式**看跌**期权在**深度价内**时可能被提前行权：现在收到 $X$ 并赚取利息可能比等待更值钱。

### 美式期权的两期二叉树模型

美式期权可能在以下情况提前行权：

* 行权价值大于无套利价值
* 在每个节点取行权价值与计算价格中较高者。

> [!Note]
>
> 要在**每个**节点计算行权时的期权价值，而不只是在到期时。

例如，如果上面两期例子中的看跌期权是美式的，在下降节点其行权价值为 $50-37.20=12.80$，高于其持有价值 10.63。看跌期权会在那里行权，其今天的价值从 5.06 升至 6.10（见上面的代码）。

### 利率期权 {#interest-rate-option}

估值过程与标准二叉树模型相同，只是在利率树上进行，且收益要乘以名义本金（和计息期），如看涨期权支付 $\text{NP}\times\max(0,\ r-X)\times\text{accrual period}$。

## Black-Scholes 模型 {#black-scholes-model}

### 假设

Black-Scholes 模型是二叉树模型的连续版本：步数 $\to\infty$（因此 $\Delta t\to0$）时的极限。

* 标的资产服从几何布朗运动：其回报服从正态分布，价格服从对数正态分布，价格平滑地（连续地）变动。
* 连续复利无风险利率不变且已知。投资者可以按无风险利率借贷。
* 标的资产的波动率不变
* 市场无摩擦：
  * 没有交易成本、没有税收、没有监管限制
  * 没有套利
  * 标的资产流动性很高，可以连续交易
  * 允许卖空标的资产
* 期权是欧式的。

### 基本公式

Black-Scholes 公式为：

$$
\begin{align}
C_0 &= S_0 N(d_1) - X e^{-r_f^cT} N(d_2) \\
P_0&= C_0+Xe^{-r_f^cT}-S_0\\
&=-S_0N(-d_1)+Xe^{-r_f^cT}N(-d_2)\\
d_1 &= \frac{\ln(\frac{S_0}{X}) + (r_f^c + \frac{1}{2} \sigma^2)T}{\sigma\sqrt{T}} \\
d_2 &= d_1 - \sigma\sqrt{T}
\end{align}
$$

下面的代码为看涨和看跌期权定价，可选连续股息率 $q$（见下一节），且不需要任何库：$N(\cdot)$ 由误差函数得到。

```python
import math


def norm_cdf(z):
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


def black_scholes(S, X, T, r, sigma, q=0.0, option="call"):
    """BSM price. r and q are continuously compounded; q is the dividend yield."""
    d1 = (math.log(S / X) + (r - q + 0.5 * sigma ** 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    if option == "call":
        return S * math.exp(-q * T) * norm_cdf(d1) - X * math.exp(-r * T) * norm_cdf(d2)
    return X * math.exp(-r * T) * norm_cdf(-d2) - S * math.exp(-q * T) * norm_cdf(-d1)


black_scholes(50, 50, 1, 0.05, 0.3)                # 7.1156
black_scholes(50, 50, 1, 0.05, 0.3, option="put")  # 4.6771 = C - S + X e^(-rT)
```

用 500 步和 `crr_factors(0.3, 1/500)`，`binomial_price` 对同一看涨期权给出 7.1127：二叉树收敛于 Black–Scholes。

### 初始模型

与看跌—看涨平价类似，公式显示了复制组合：

* **看涨期权**是带杠杆的股票投资：做多 $N(d_1)$ 股，通过借入 $N(d_2)Xe^{-r_f^cT}$ 融资，即做空一只无风险零息债券。
* **看跌期权**是做多 $N(-d_2)$ 单位支付 $X$ 的无风险零息债券，加上做空 $N(-d_1)$ 股。

#### $N(d_1)$ 和 $N(d_2)$ 的结论

* $N(d_1)$ 是看涨期权的 $\delta$
* $-N(-d_1)$ 是看跌期权的 $\delta$
* $N(d_2)$ 是看涨期权在到期时被行权（价内）的风险中性概率。
* $N(-d_2)$ 是看跌期权在到期时被行权（价内）的风险中性概率。
* $N(-d_2)=1-N(d_2)$，同样 $N(-d_1)=1-N(d_1)$。

### 含持有收益或成本的 BSM 模型

当标的有连续收益率 $\gamma$（股息率，或货币期权的外国利率）时，把 $S_0$ 换成 $S_0e^{-\gamma T}$：

$$
\begin{align}
C_0 &= S_0e^{-\gamma T}N(d_1)\\
&\quad-Xe^{-r_f^cT}N(d_2) \\
P_0 &= Xe^{-r_f^c T}N(-d_2)\\
&\quad-S_0e^{-\gamma T}N(-d_1) \\
d_1 &=\frac{\ln(\frac{S_0}{X})+(r_f^c-\gamma+\frac{\sigma^2}{2})T}{\sigma\sqrt{T}}\\
d_2 &= d_1-\sigma\sqrt{T}
\end{align}
$$

收益率越高，看涨期权价值越低、看跌期权价值越高：期权持有人得不到这部分收益。

### 期货期权

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=futopt"
  title="期货期权时间线：期权存续期，然后是期货合约"
  loading="lazy"
></iframe>

#### 头寸

期货头寸取决于期权头寸：

* 多头看涨 $\to$ 期货多头
* 多头看跌 $\to$ 期货空头

行权价 $X$ 在期权中确定。在期权到期日 $m$，期货价格为 $F_m(n)$：若 $F_m(n)>X$，多头看涨期权行权；若 $F_m(n)<X$，多头看跌期权行权。行权时，期货头寸立即盯市，因此持有人以现金收到 $F_m(n)-X$（看涨）或 $X-F_m(n)$（看跌）。

#### Black 模型

Black 模型就是用期货价格代替现货价格的 BSM。持有期货头寸没有成本，因此其“收益率”等于无风险利率，两项都要折现：

$$
\begin{align}
C_0 &= e^{-r_f^cT}\left[F_0N(d_1)-XN(d_2)\right]\\
P_0 &= e^{-r_f^cT}\left[XN(-d_2)-F_0N(-d_1)\right]\\
d_1 &= \frac{\ln (\frac{F_0(T)}{X})+\frac{\sigma^2}{2}T}{\sigma\sqrt{T}}\\
d_2&=d_1-\sigma\sqrt{T}
\end{align}
$$

其中 $F_0=F_0(T)$ 是今天的期货价格，$T$ 是期权的到期时间。

> [!Important]
>
> 实践中，期货期权通常是美式的，且期权通常在期货本身到期之日或稍早到期。

### 利率期权

该合约类似于期货期权和 FRA。头寸判断和行权情形与期货期权完全相同，以 FRA 利率为标的：利率**看涨**期权在利率升至 $X$ 以上时获得收益（类似 FRA 多头），**看跌**期权在利率跌至 $X$ 以下时获得收益。

$$
\begin{align}
C_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^c n \frac{30}{360}}\\
&\quad\times\left(FR_{m\times n} N(d_1)-XN(d_2)\right)\\
P_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^cn\frac{30}{360}}\\
&\quad\times\left(XN(-d_2)-FR_{m\times n}N(-d_1)\right)
\end{align}
$$

* $m$：距期权到期、利率确定的月数；$n$：距支付利息的月数。因此收益按 $n$ 个月折现，计息期为 $(n-m)$ 个月。
* $FR_{m\times n}$：今天从 $m$ 到 $n$ 期间的远期利率；$X$：行权利率。在 $d_1$ 中，$F_0(T)$ 换成 $FR_{m\times n}$。
* **利率上限（cap）**是一系列利率看涨期权（caplet），**利率下限（floor）**是一系列看跌期权（floorlet）。在相同行权利率下做多上限、做空下限，就是一份付固定互换。

### 互换期权 {#swaption}

互换期权是进入一份互换的期权：

1. **付方**互换期权是作为固定利率支付方（多头）进入互换的期权。利率上升时获利：互换利率的看涨期权。
2. **收方**互换期权是作为固定利率收取方（空头）进入互换的期权。利率下降时获利：互换利率的看跌期权。

$$
\begin{align}
C_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_{fix}N(d_1)-R_XN(d_2)\right)\\
P_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_XN(-d_2)-R_{fix}N(-d_1)\right)
\end{align}
$$

* $R_{fix}$：今天的远期互换利率，对应从期权到期日开始的互换；$R_X$：行权（固定）利率。
* AP：每次互换支付的计息期（如按季度为 0.25）。
* PVA：现值年金因子，即互换各支付日折现因子之和。
* 相同行权利率下，付方互换期权减去收方互换期权，就是一份远期付固定互换（看跌—看涨平价）。

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=swaption"
  title="互换期权时间线：期权存续期，然后是互换的支付日"
  loading="lazy"
></iframe>

## 希腊字母 {#greeks}

由 Black-Scholes 模型，

$$
C_0 = S_0 N(d_1) - X e^{-r_f^cT} N(d_2) 
$$

可以把它理解为五个输入的函数：

$$
C_0 = f(S_0, X, r_f^c, T, \sigma)
$$

希腊字母是它的偏导数：每一个都衡量在其他输入不变时，期权对某一个输入的敏感度。

$\delta$ 定义为：

$$
\delta = \frac{\partial C_0}{\partial S_0}
$$

$\gamma$ 定义为：

$$
\gamma = \frac{\partial^2 C_0}{\partial S_0^2}=\frac{\partial \delta}{\partial S_0}
$$

$\theta$ 定义为：

$$
\theta = \frac{\partial C_0}{\partial t}
$$

即随着时间流逝（$T$ 缩短）价值的变化。

$\upsilon$（vega）定义为：

$$
\upsilon = \frac{\partial C_0}{\partial \sigma}
$$

$\rho$ 定义为：

$$
\rho = \frac{\partial C_0}{\partial r_f^ c}
$$

| 希腊字母 | 看涨 | 看跌 | 说明 |
| --- | --- | --- | --- |
| Delta $\delta$ | $0$ 到 $1$ | $-1$ 到 $0$ | 在平价附近变化最大 |
| Gamma $\gamma$ | $>0$ | $>0$（与看涨相同） | 平价时最高 |
| Theta $\theta$ | 通常 $<0$ | 通常 $<0$ | 时间衰减 |
| Vega $\upsilon$ | $>0$ | $>0$（与看涨相同） | 平价时最高 |
| Rho $\rho$ | $>0$ | $<0$ | 短期期权较小 |

<iframe
  class="fx-concept-chart"
  src="/charts/option-greeks.html"
  title="看涨和看跌期权的 Delta，以及距到期一年和一个月时的 Gamma"
  loading="lazy"
></iframe>

### Delta

对于不支付股息的股票：$\delta_{call}=N(d_1)$，$\delta_{put} = -N(-d_1)=N(d_1)-1$。

> [!Note]
>
> 此时 $\delta_{call}=\delta_{put}+1$

对于支付股息的股票，这里的 $\delta$ 表示股息率：

$$\Delta_{call}=e^{-\delta T}N(d_1)$$

$$\Delta_{put}=-e^{-\delta T}N(-d_1)$$

> [!Note]
>
> 看涨期权的 $\delta$ 在 $(0,1)$ 之间，看跌期权在 $(-1, 0)$ 之间。它在平价附近变化最剧烈，越接近到期越如此。

Delta 和 gamma 一起近似股价变化引起的期权价值变化：

$$
\Delta C\approx\delta\,\Delta S+\tfrac12\gamma\,(\Delta S)^2
$$

**Delta 中性**组合每持有一份多头期权就持有 $-\delta$ 股（或每份空头期权持有 $\delta$ 股），因此股价的小幅变动不改变其价值。

### Gamma

> [!Note]
>
> $\gamma$ 和 $\delta$ 就是固定收益中的凸性和久期：对标的的二阶和一阶敏感度。

$\gamma$ 在平价时达到最大。对于平价期权，越接近到期 $\gamma$ 越大。对于深度价内和价外期权，越接近到期 $\gamma$ 越小。

> [!Note]
>
> 可以通过组合期权头寸构建 **$\gamma$ 中性策略**，再加入标的股票头寸进一步构建 $\delta$ 中性策略（因为股票没有 $\gamma$）。

### Theta

看涨和看跌期权的 theta 通常都为负，因为它们随时间流逝而贬值（时间衰减）。不过：

* **例外：** 深度价内的欧式看跌期权可能随时间增值，因为它们将收到的行权价越来越接近支付。

### Vega 和 Rho

* **Vega** 对看涨和看跌期权都为正：波动率越高，获得大额收益的机会越大，而损失仅限于期权费。它在平价时最高，也是唯一需要预测（波动率）的希腊字母。
* **Rho** 对看涨期权为正，对看跌期权为负：利率越高，行权价的现值越低，而行权价由看涨期权持有人支付、由看跌期权持有人收取。
