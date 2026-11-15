---
title: "オプション"
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

# オプション

基本の論理は**無裁定**である。オプションの価格は、そのペイオフを複製する原資産と無リスク債のポートフォリオのコストに等しい。

## 二項モデルによるオプション評価 {#binomial-option-valuation}

### 基本公式

リスク中立の下で、長さ $\Delta t$ の各ステップの式は：

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

ここで $r$ は連続複利である。離散的な金利なら、下の CFA の表記のように $e^{r\Delta t}$ を $(1+r)^{\Delta t}$ に置き換える。2 ステップ以上なら、最後の行を各ノードに適用し、満期から今日へと戻っていく（**後ろ向き帰納法**）。

下のコードは、ツリー上でヨーロピアンまたはアメリカンのコールとプットを価格付けし、下の[2 期間の例](#example)を再現する。上昇・下落の係数を直接受け取る。`crr_factors` はボラティリティから係数を作り、`annualized_volatility` は価格の履歴（例：SPY の直近 30 営業日の終値）からそのボラティリティを推定する。

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
> ボラティリティはツリー全体で一定に保たれる。$U$ がステップごとに変わると、上昇→下落の経路と下落→上昇の経路が同じ価格に行き着かなくなり、ツリーは再結合しなくなる。

### 構成要素

二項ツリーの基本的な前提：

* $S_0$ から始める。
* 各ステップで、価格は係数 $U$ で上昇するか係数 $D$ で下落し、$D<1+r_f<U$ である（そうでなければ裁定が生じる）。既定では $D=\frac{1}{U}$。

#### モデル 1

$U$ と $D$ の通常の選び方（Cox、Ross、Rubinstein）は、価格の**対数**がランダム・ウォークに従うと仮定する。各ステップで $\ln S$ は $\sigma\sqrt{\Delta t}$ だけ上下する。したがって

$$
U=e^{\sigma\sqrt{\Delta t}},\qquad D=e^{-\sigma\sqrt{\Delta t}}=\frac{1}{U}
$$

で、$\Delta t=1$ なら $S_u=Se^{\sigma}=SU$、$S_d=Se^{-\sigma}=SD$。同じ考え方を価格ではなく金利に当てはめると（$dr=\sigma\,dw$、$w$ はランダム・ウォーク）、[債券](../C6%20Fixed%20Income/M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model)の金利ツリーになる。

### リスク中立確率 {#risk-neutral-probability}

無裁定から導かれる。リスク中立の世界では、株式の期待価格は無リスク金利で成長しなければならない。

$$
\begin{aligned}
E(S_t)&= \pi_uS_0U+(1-\pi_u)S_0D\\
&=S_0(1+r_f)^t
\end{aligned}
$$

$\pi_u$ について解くと：

$$
\begin{align}
\pi_u &= \frac{(1+r_f)^t-D}{U-D}\\
\pi_d &= 1-\pi_u = \frac{U-(1+r_f)^t}{U-D}
\end{align}
$$

これらは現実の確率ではない。無リスク金利で割り引くと無裁定価格になるような確率である。実際の確率も株式の期待リターンも、オプション価格には入ってこない。

### 1 期間二項モデル

ヨーロピアン・オプションを考えると、1 ステップ後のペイオフは：

$$
\begin{align}
C_{u,t}&= \max(0, S_u-X)\\
P_{u,t}&=\max(0, X-S_u)\\
C_{d,t}&=\max(0,S_d-X)\\
P_{d,t}&=\max(0,X-S_d)
\end{align}
$$

今日の価値は、リスク中立の期待ペイオフを割り引いたものである。

$$C_0=\frac{\pi_u C_{u,t}+\pi_d C_{d,t}}{(1+r_f)^t}$$

$$P_0 = \frac{\pi_u P_{u,t}+\pi_d P_{d,t}}{(1+r_f)^t}$$

### プット・コール・パリティ

**フィデューシャリー・コール**（コールと、$X$ を支払う無リスク債）と**プロテクティブ・プット**（株式とプット）は同じペイオフ $\max(S_T,X)$ をもつので、価格も同じでなければならない。

|              | **フィデューシャリー・コール**      | **プロテクティブ・プット** |
| ------------ | ----------------------- | ------------------ |
|              | $c + \frac{X}{(1+r_f)^t}$ | $S+p$              |
| **S ≤ X のとき** | $0+X=X$                 | $S+(X-S)=X$        |
| **S ≥ X のとき** | $(S-X)+X=S$             | $S+0=S$            |

したがって：

$$
c+\frac{X}{(1+r_f)^t}=S_0+p
$$

### 無リスク・ポートフォリオ法

1. **株式を $\delta$ 株買い**、**コールを 1 単位売って**無リスク・ポートフォリオを作る。時点 $0$ の価値は：
   $$
   V_{0}=\delta S_0-c_0
   $$

2. 時点 $t$ では：
   $$
   \begin{align}
   V_{u,t}&=\delta S_u-C_u\\
   V_{d,t}&=\delta S_d-C_d
   \end{align}
   $$

3. ポートフォリオは無リスクなので $V_{u,t}=V_{d,t}$ で、ここから**ヘッジ比率**を解く。
   $$
   \delta = \frac{C_u-C_d}{S_u-S_d}=\frac{C_u-C_d}{S_0(U-D)}
   $$

4. 無リスク・ポートフォリオは無リスク金利を稼がなければならないので、$V_{u,t}=(1+r_f)^t V_0$。$V_0 = \delta S_0-c_0$ を代入すると：
   $$
   c_0 = \delta S_0-\frac{\delta S_u-C_u}{(1+r_f)^t}
   $$
   これはリスク中立確率法と同じ価値を与える。

> [!Note]
>
> コールの市場価格がこの価値と異なれば裁定が生じる。コール 1 単位あたり $\delta$ 株（$\delta$ は**ヘッジ比率**）に対してコールを取引し、差額を借りるか貸す。

### 2 期間二項モデル

1 期間モデルと同じく、$\pi_u$ と $\pi_d$ は同じ方法で計算できる（$U$、$D$、ステップの長さが変わらない限り、実際に同じ値になる！）。あとは 1 ステップずつ後ろへ戻る。各ノードの価値は、1 ステップ後の 2 つの価値のリスク中立期待値を割り引いたものである。

#### 例 {#example}

現在 €50 の無配当株式を考える。この株式を原資産とするヨーロピアン・コールは満期まで 2 年、行使価格は €50。無リスク金利は年 5% とする。さらに、上昇係数（U）は 1.356、下落係数（D）は 0.744。これらの情報から、コールの現在価値と、対応するプットの現在価値を計算する。

<div class="reveal" tabindex="0">


解くために、まず

**ステップ 1**：二項ツリーの株価を計算する。上昇→上昇の価格は $S^{++} = 91.94$、上昇→下落と下落→上昇の価格は $S^{+-} = S^{-+} = 50.44$、下落→下落の価格は $S^{–} = 27.68$。

**ステップ 2**：満期のオプション価値を計算する。コールは $C^{++} = 41.95$、$C^{+-} = C^{-+} = 0.44$。下落→下落のコールの価値は $C^{–} = 0$。プットは $P^{++} = P^{+-} = P^{-+} = 0$、$P^{–} = 22.32$。

**ステップ 3** ではリスク中立確率を計算する。上昇確率は $\pi_U = \frac{(1 + 0.05) - 0.744}{1.356 - 0.744} = 0.5$、下落確率は $\pi_D = 1 - \pi_U = 0.5$。

次に中間のオプション価値を計算する。コールは $C^{+} = \frac{(0.5 \times 41.94 + 0.5 \times 0.44)}{1.05} = 20.18$、$C^{-} = \frac{(0.5 \times 0.44 + 0.5 \times 0)}{1.05} = 0.22$。プットは $P^{+} = \frac{(0.5 \times 0 + 0.5 \times 0)}{1.05} = 0$、$P^{-} = \frac{(0.5 \times 0 + 0.5 \times 22.32)}{1.05} = 10.63$。

**ステップ 4**：当初の価値を計算する。コールの価値は $C_0 = \frac{(0.5 \times 20.18 + 0.5 \times 0.22)}{1.05} = 9.71$、プットの価値は $P_0 = \frac{(0.5 \times 0 + 0.5 \times 10.63)}{1.05} = 5.06$。

補足として、プット・コール・パリティで確認できる。

$P_0 = C_0 + PV(X) - S_0 = 9.71 + \frac{50}{(1.05)^2} - 50 = 5.06$.


</div>

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="二項ツリー：金利、債券価値、株価、コールの価値"
  loading="lazy"
></iframe>

図の株価ツリーとコール価値ツリーがこの例である。残りの 2 つは債券の金利ツリーである。

### アメリカン・オプションの早期行使

* 無配当株式のアメリカン・コールは早期行使されない。コールの価値は行使価値 $S-X$ より大きいからである。*生きているほうが死ぬより価値がある*。したがって無配当株式のアメリカン・コールの価値はヨーロピアンと同じである。
* **配当を支払う**株式のアメリカン・コールは、配当を得るために、権利落ちの直前に早期行使されることがある。
* アメリカン・**プット**は**ディープ・イン・ザ・マネー**のとき早期行使されることがある。今 $X$ を受け取って利息を稼ぐほうが、待つより価値があることがある。

### アメリカン・オプションの 2 期間二項モデル

アメリカン・オプションは次のとき早期行使されうる。

* 行使価値が無裁定価値より大きい
* 各ノードで、行使価値と計算した価格の大きいほうを使う。

> [!Note]
>
> 行使した場合のオプション価値を、満期だけでなく**すべての**ノードで計算すること。

たとえば上の 2 期間の例のプットがアメリカンなら、下落ノードでの行使価値は $50-37.20=12.80$ で、保有価値 10.63 より大きい。プットはそこで行使され、今日の価値は 5.06 から 6.10 に上がる（上のコードを参照）。

### 金利オプション {#interest-rate-option}

評価の手順は標準的な二項モデルと同じで、金利ツリー上で行うが、ペイオフに想定元本（と利息計算期間）を掛ける。たとえばコールは $\text{NP}\times\max(0,\ r-X)\times\text{accrual period}$ を支払う。

## ブラック・ショールズ・モデル {#black-scholes-model}

### 前提

ブラック・ショールズ・モデルは二項モデルの連続版で、ステップ数 $\to\infty$（したがって $\Delta t\to0$）の極限である。

* 原資産は幾何ブラウン運動に従う。リターンは正規分布、価格は対数正規分布に従い、価格はなめらかに（連続的に）動く。
* 連続複利の無リスク金利は一定で既知。投資家は無リスク金利で借りたり貸したりできる。
* 原資産のボラティリティは一定
* 市場には摩擦がない：
  * 取引コスト、税金、規制上の制約がない
  * 裁定がない
  * 原資産は流動性が高く、連続的に取引できる
  * 原資産の空売りが認められる
* オプションはヨーロピアンである。

### 基本公式

ブラック・ショールズの式は：

$$
\begin{align}
C_0 &= S_0 N(d_1) - X e^{-r_f^cT} N(d_2) \\
P_0&= C_0+Xe^{-r_f^cT}-S_0\\
&=-S_0N(-d_1)+Xe^{-r_f^cT}N(-d_2)\\
d_1 &= \frac{\ln(\frac{S_0}{X}) + (r_f^c + \frac{1}{2} \sigma^2)T}{\sigma\sqrt{T}} \\
d_2 &= d_1 - \sigma\sqrt{T}
\end{align}
$$

コードはコールとプットを価格付けし、連続配当利回り $q$（次節）も指定でき、ライブラリは不要である。$N(\cdot)$ は誤差関数から求める。

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

500 ステップと `crr_factors(0.3, 1/500)` を使うと、`binomial_price` は同じコールに 7.1127 を与える。ツリーはブラック・ショールズに収束する。

### 初期モデル

プット・コール・パリティと同様に、式は複製ポートフォリオを示している。

* **コール**はレバレッジをかけた株式投資である。$N(d_1)$ 株をロングし、$N(d_2)Xe^{-r_f^cT}$ を借りて資金を賄う。つまり無リスクのゼロクーポン債のショートである。
* **プット**は、$X$ を支払う無リスクのゼロクーポン債を $N(-d_2)$ 単位ロングし、株式を $N(-d_1)$ 株ショートしたものである。

#### $N(d_1)$ と $N(d_2)$ のまとめ

* $N(d_1)$ はコールの $\delta$
* $-N(-d_1)$ はプットの $\delta$
* $N(d_2)$ は、コールが満期に行使される（ITM）リスク中立確率。
* $N(-d_2)$ は、プットが満期に行使される（ITM）リスク中立確率。
* $N(-d_2)=1-N(d_2)$、同様に $N(-d_1)=1-N(d_1)$。

### 保有の便益やコストを含む BSM モデル

原資産に連続的な利回り $\gamma$（配当利回り、または通貨オプションでは外国金利）があれば、$S_0$ を $S_0e^{-\gamma T}$ に置き換える。

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

利回りが高いほどコールの価値は下がり、プットの価値は上がる。オプションの保有者はその利回りを受け取らないからである。

### 先物オプション

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=futopt"
  title="先物オプションのタイムライン：オプションの期間、その後の先物契約"
  loading="lazy"
></iframe>

#### ポジション

先物のポジションはオプションのポジションで決まる。

* コールのロング $\to$ 先物のロング
* プットのロング $\to$ 先物のショート

行使価格 $X$ はオプションで決まる。オプションの満期 $m$ に先物価格が $F_m(n)$ なら、$F_m(n)>X$ のときコールのロングが行使され、$F_m(n)<X$ のときプットのロングが行使される。行使すると先物ポジションはただちに値洗いされるので、保有者は現金で $F_m(n)-X$（コール）または $X-F_m(n)$（プット）を受け取る。

#### ブラック・モデル

ブラック・モデルは、現物価格の代わりに先物価格を使う BSM である。先物ポジションの保有にはコストがかからないので、その「利回り」は無リスク金利に等しく、両方の項が割り引かれる。

$$
\begin{align}
C_0 &= e^{-r_f^cT}\left[F_0N(d_1)-XN(d_2)\right]\\
P_0 &= e^{-r_f^cT}\left[XN(-d_2)-F_0N(-d_1)\right]\\
d_1 &= \frac{\ln (\frac{F_0(T)}{X})+\frac{\sigma^2}{2}T}{\sigma\sqrt{T}}\\
d_2&=d_1-\sigma\sqrt{T}
\end{align}
$$

ここで $F_0=F_0(T)$ は今日の先物価格、$T$ はオプションの満期までの期間である。

> [!Important]
>
> 実務では、先物オプションはアメリカンであることが多く、オプションは通常、先物自体の満期日かその少し前に満期を迎える。

### 金利オプション

この契約は先物オプションや FRA に似ている。ポジションの判断と行使のケースは先物オプションとまったく同じで、FRA レートが原資産である。金利**コール**は金利が $X$ を上回るとペイオフが生じ（FRA のロングのように）、**プット**は下回ると生じる。

$$
\begin{align}
C_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^c n \frac{30}{360}}\\
&\quad\times\left(FR_{m\times n} N(d_1)-XN(d_2)\right)\\
P_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^cn\frac{30}{360}}\\
&\quad\times\left(XN(-d_2)-FR_{m\times n}N(-d_1)\right)
\end{align}
$$

* $m$：オプションの満期で金利が決まるまでの月数。$n$：利息が支払われるまでの月数。したがってペイオフは $n$ か月で割り引き、利息計算期間は $(n-m)$ か月である。
* $FR_{m\times n}$：$m$ から $n$ までの期間の今日のフォワード・レート。$X$：行使レート。$d_1$ では $F_0(T)$ を $FR_{m\times n}$ に置き換える。
* **キャップ**は一連の金利コール（キャップレット）、**フロア**は一連のプット（フロアレット）である。同じ行使レートでキャップをロングしフロアをショートすると、固定払いのスワップになる。

### スワップション {#swaption}

スワップションはスワップに入るオプションである。

1. **ペイヤー**・スワップションは、固定金利の支払側（ロング）としてスワップに入るオプション。金利が上がると利益が出る。スワップ・レートのコールである。
2. **レシーバー**・スワップションは、固定金利の受取側（ショート）としてスワップに入るオプション。金利が下がると利益が出る。スワップ・レートのプットである。

$$
\begin{align}
C_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_{fix}N(d_1)-R_XN(d_2)\right)\\
P_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_XN(-d_2)-R_{fix}N(-d_1)\right)
\end{align}
$$

* $R_{fix}$：オプションの満期に始まるスワップについての今日のフォワード・スワップ・レート。$R_X$：行使（固定）レート。
* AP：各スワップ支払の利息計算期間（例：四半期なら 0.25）。
* PVA：現在価値年金係数で、スワップの支払日の割引係数の合計。
* 同じ行使レートのペイヤー・スワップションからレシーバー・スワップションを引くと、フォワードの固定払いスワップになる（プット・コール・パリティ）。

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=swaption"
  title="スワップションのタイムライン：オプションの期間、その後のスワップの支払日"
  loading="lazy"
></iframe>

## グリークス {#greeks}

ブラック・ショールズ・モデルから、

$$
C_0 = S_0 N(d_1) - X e^{-r_f^cT} N(d_2) 
$$

これは 5 つの入力の関数とみなせる。

$$
C_0 = f(S_0, X, r_f^c, T, \sigma)
$$

グリークスはその偏微分である。それぞれ、ほかの入力を一定にしたときの、1 つの入力に対するオプションの感応度を測る。

$\delta$ の定義：

$$
\delta = \frac{\partial C_0}{\partial S_0}
$$

$\gamma$ の定義：

$$
\gamma = \frac{\partial^2 C_0}{\partial S_0^2}=\frac{\partial \delta}{\partial S_0}
$$

$\theta$ の定義：

$$
\theta = \frac{\partial C_0}{\partial t}
$$

つまり時間の経過（$T$ の縮小）による価値の変化である。

$\upsilon$（ベガ）の定義：

$$
\upsilon = \frac{\partial C_0}{\partial \sigma}
$$

$\rho$ の定義：

$$
\rho = \frac{\partial C_0}{\partial r_f^ c}
$$

| グリーク | コール | プット | 備考 |
| --- | --- | --- | --- |
| デルタ $\delta$ | $0$ から $1$ | $-1$ から $0$ | アット・ザ・マネー付近で最も変化 |
| ガンマ $\gamma$ | $>0$ | $>0$（コールと同じ） | アット・ザ・マネーで最大 |
| セータ $\theta$ | 通常 $<0$ | 通常 $<0$ | 時間価値の減少 |
| ベガ $\upsilon$ | $>0$ | $>0$（コールと同じ） | アット・ザ・マネーで最大 |
| ロー $\rho$ | $>0$ | $<0$ | 短期のオプションでは小さい |

<iframe
  class="fx-concept-chart"
  src="/charts/option-greeks.html"
  title="コールとプットのデルタ、および満期まで 1 年と 1 か月のガンマ"
  loading="lazy"
></iframe>

### デルタ

無配当株式では：$\delta_{call}=N(d_1)$、$\delta_{put} = -N(-d_1)=N(d_1)-1$。

> [!Note]
>
> この場合、$\delta_{call}=\delta_{put}+1$

配当を支払う株式では（ここでの $\delta$ は配当利回りを表す）：

$$\Delta_{call}=e^{-\delta T}N(d_1)$$

$$\Delta_{put}=-e^{-\delta T}N(-d_1)$$

> [!Note]
>
> $\delta$ はコールでは $(0,1)$、プットでは $(-1, 0)$ の間にある。アット・ザ・マネー付近で最も急に変化し、満期が近づくほどその傾向が強まる。

デルタとガンマを合わせると、株価の変化に対するオプション価値の変化を近似できる。

$$
\Delta C\approx\delta\,\Delta S+\tfrac12\gamma\,(\Delta S)^2
$$

**デルタ・ニュートラル**のポートフォリオは、ロングのオプション 1 単位につき $-\delta$ 株（ショートのオプション 1 単位につき $\delta$ 株）を持つので、株価の小さな動きでは価値が変わらない。

### ガンマ

> [!Note]
>
> $\gamma$ と $\delta$ は、債券のコンベクシティとデュレーションにあたる。原資産に対する 2 次と 1 次の感応度である。

$\gamma$ はアット・ザ・マネーで最大になる。アット・ザ・マネーのオプションでは、満期が近づくほど $\gamma$ は大きくなる。ディープ・イン・ザ・マネーやアウト・オブ・ザ・マネーのオプションでは、満期が近づくほど $\gamma$ は小さくなる。

> [!Note]
>
> オプションのポジションを組み合わせて **$\gamma$ ニュートラル戦略**を作り、さらに原資産の株式のポジションを加えて $\delta$ ニュートラル戦略にできる（株式には $\gamma$ がないため）。

### セータ

コールとプットのセータは、時間の経過とともに価値を失う（時間価値の減少）ので、通常どちらもマイナスである。ただし：

* **例外：** ディープ・イン・ザ・マネーのヨーロピアン・プットは、受け取る行使価格の支払が近づくにつれて、時間とともに価値が上がることがある。

### ベガとロー

* **ベガ**はコールとプットのどちらでもプラスである。ボラティリティが高いほど大きなペイオフの可能性が高まり、損失はプレミアムに限られる。アット・ザ・マネーで最大で、予測（ボラティリティ）を必要とする唯一のグリークである。
* **ロー**はコールでプラス、プットでマイナスである。金利が高いほど行使価格の現在価値が下がり、行使価格はコールの保有者が払い、プットの保有者が受け取るからである。
