---
title: 经济增长
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover,
.blur-hover:focus-within {
    filter: none;
}
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 440px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.dmp-chart { height: 420px; }
.fx-concept-chart.alpha-chart { height: 420px; }
.fx-concept-chart.tfp-chart { height: 480px; }
.fx-concept-chart.solow-chart { height: 500px; }
.fx-concept-chart.solow-s-chart { height: 500px; }
.fx-concept-chart.solow-n-chart { height: 500px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.tfp-chart { height: 520px; }
    .fx-concept-chart.solow-chart { height: 520px; }
    .fx-concept-chart.solow-s-chart { height: 520px; }
    .fx-concept-chart.solow-n-chart { height: 530px; }
}
/* The two-panel charts stack their panels on phones. */
@media (max-width: 587px) {
    .fx-concept-chart.dmp-chart { height: 760px; }
    .fx-concept-chart.alpha-chart { height: 770px; }
}
</style>

# 经济增长

## 经济增长的重要性

发达国家与发展中国家的区别

| 因素 | 发达国家 | 发展中国家 |
|--------|-----------|------------|
| 储蓄与投资 | 储蓄高；投资渠道深 | 储蓄较低；投资有限 |
| 金融市场与金融中介 | 发达、流动性好的市场 | 欠发达、深度不足的市场 |
| 政治稳定、法治与产权 | 健全且可执行 | 较弱，可预期性差 |
| 教育与医疗体系 | 完善；人力资本高 | 较弱；人力资本低 |
| 税收与监管 | 高效、有利于增长 | 低效，往往负担沉重 |
| 自由贸易与不受限制的资本流动 | 贸易开放、资本自由流动 | 贸易和资本流动常受限制 |

潜在增长对股票投资者很重要：
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$

如何读这几行：

* 第 1 行：股票的预期收益 = 收入（股息）+ 价格上涨。
* 第 2 行：价格上涨又分为估值变化（$P/E$ 的重新定价）和盈利增长。
* 第 3–4 行：EPS 增长与宏观路径挂钩——通胀 $i$ 和实际增长 $g$——再加上股本数量 / 盈利结构项 $\Delta S$（回购和相对活力，即企业盈利比整体经济增长得更快还是更慢）。

因此，即使估值倍数不变，更高的潜在实际增长 $g$ 也会提高 $E(Re)$ 中的盈利部分。



潜在增长对固定收益投资者也很重要：

* 更高的增长转化为更高的利率和预期收益
* 信用质量通常更好
* 信用风险降低
* 影响政府政策与预算平衡

## 生产函数

生产函数定义为
$$
\begin{align}
Y&=Af(K,L)\\
&=AK^{\alpha}L^{1-\alpha}
\end{align}
$$
其中 $K$ 是资本要素，$L$ 是劳动要素。$A$ 是全要素生产率，通常代表技术。$Y$ 是总产出。$\alpha$ 是 GDP 中支付给资本提供者的份额。

对于人均 GDP，
$$
\begin{align}
y&=\frac{Y}{L}\\
&=AK^{\alpha}L^{-\alpha}\\
&=A(\frac{K}{L})^{\alpha}\\
&=Ak^{\alpha}
\end{align}
$$
> [!Note]
> $$
> Y = \frac{Y}{L}L = yL
> $$

对两边取对数即可得到增长率：
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
> [!Note]
>
> 这一步在数学上并不严谨，把它当作经济学上的表述即可。

人均增长率的推导过程相同：
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
> [!note]
>
> 同理，对第三个式子做同样的处理可得：
> $$
> =\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}
> $$

### 计算 $\alpha$

回顾一下：为了相对资本使总产出最大，求导得到资本的边际产出（MPK）：
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
当 MPK 等于资本的租赁价格（边际成本）$r$ 时达到最优：
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

### 生产函数的特征

生产函数有两个重要特征：

* 规模报酬不变
* 边际生产率递减：增加投入所带来的额外产出会逐渐下降
* 就人均而言，$\alpha$ 越小，边际生产率递减的效应越强。
* 提高 $A$ 会使函数整体上移（减弱边际生产率递减的效应）

#### 规模报酬不变

把两种投入按同一倍数放大（这里把 $K$ 和 $L$ 都翻倍）：
$$
K \to 2K,\quad L \to 2L
$$
于是
$$
\begin{align}
A(2K)^{\alpha}(2L)^{1-\alpha}
&= 2^{\alpha}\,2^{1-\alpha}\,AK^{\alpha}L^{1-\alpha}\\
&= 2^{\alpha+(1-\alpha)}AK^{\alpha}L^{1-\alpha}\\
&= 2AK^{\alpha}L^{1-\alpha}\\
&= 2Y.
\end{align}
$$
投入翻倍，产出也翻倍，所以该生产函数是规模报酬不变的。
#### 边际生产率递减

<iframe
  class="fx-concept-chart dmp-chart"
  src="/charts/diminishing-marginal-productivity.html"
  loading="lazy"
  title="边际生产率递减"
></iframe>
保持劳动不变时，每多投入一单位资本，产出的增加都比上一单位少：生产曲线逐渐变平，$\mathrm{MPK}=\alpha A k^{\alpha-1}$ 随 $k$ 上升而下降。劳动也是同样的逻辑：保持资本不变时，$\mathrm{MPL}=(1-\alpha)A(K/L)^{\alpha}$ 随 $L$ 上升而下降，每多一名工人带来的产出都比上一名少。这就是为什么没有 $A$ 的增长，单靠资本深化无法维持人均产出的长期增长。

#### 就人均而言，$\alpha$ 越小，边际生产率递减的效应越强。

回顾 $y = Ak^{\alpha}$，

由上面的人均生产函数，

$$
y = Ak^{\alpha}.
$$

对资本密集度求导，得到每名工人的资本边际产出（与“边际生产率递减”下的 MPK 图是同一个概念）：

$$
\frac{dy}{dk} = \alpha A k^{\alpha-1}.
$$

取对数再求导，就回到了本笔记前面已有的增长分解：

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k}.
$$

所以 $y$ 对 $k$ 的弹性恰好是 $\alpha$：$k$ 上升 1%，$y$ 上升 $\alpha\%$。斜率 $\alpha A k^{\alpha-1}$ 的指数 $\alpha-1<0$；$\alpha$ 越小，$\alpha-1$ 越负，斜率随 $k$ 上升下降得越快。

因此，$\alpha$ 越小，资本深化对增长的贡献越小（$\alpha\,dk/k$ 更小），$y(k)$ 曲线也越凹、MPK 衰减得越早——资本密集度的边际生产率递减效应更强。

<iframe
  class="fx-concept-chart alpha-chart"
  src="/charts/alpha-diminishing-productivity.html"
  loading="lazy"
  title="α 越小，生产曲线越早弯曲"
></iframe>
#### 提高 $A$ 会使函数整体上移

由同一个人均函数 $y = Ak^{\alpha}$ 和增长分解

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k},
$$

在 $\alpha$ 不变时，人均产出可以通过两种不同的方式提高。沿着给定曲线移动（$k$ 更高、$A$ 不变）是资本深化——对应 $\alpha\,dk/k$ 项。整条曲线平行上移（$A$ 更高、$k$ 不变）是全要素生产率（TFP）的提高——对应 $dA/A$ 项。这种上移在每一个资本密集度上都提高了 $y$，从而缓解了边际生产率递减对单靠资本深化实现增长的制约。

<iframe
  class="fx-concept-chart tfp-chart"
  src="/charts/tfp-shift-capital-deepening.html"
  loading="lazy"
  title="资本深化与 TFP 提高的对比"
></iframe>

>[!Important]
>
>* 资本深化：提高 $k=\frac{K}{L}$。
>* 当 $MPK=r$ 时，资本深化不再有用。

扩展生产函数：

* 自然资源：可再生与不可再生。一个国家要达到高收入水平，并不一定需要拥有和生产自然资源。**荷兰病**：对资源出口的强劲需求推动本币升值，使经济中的其他部门失去竞争力。

* 劳动供给：

  * 人口增长（生育率、死亡率、年龄结构）
  * 劳动参与率
  * 净移民
  * 平均工作时长

* 人力资本：

  * 教育、培训或生活经验
  * 教育具有溢出效应或外部性
  * 教育通过创新促进增长（提高 $A$）。

* ICT 与非 ICT 资本：

  * 在信息、计算机和电信设备上的支出会产生网络外部性，提高生产率。
  * 非 ICT：包括非住宅建筑、运输设备和机械。
* 技术：人力资本 + ICT/非 ICT 资本
* 公共基础设施

## 增长理论

增长理论研究 $\frac{dy}{y}$，即人均 GDP 的增长速度。

回顾上文：
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha\frac{dk}{k},\qquad \frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
$$

> [!note]
>
> 由上式可知，$\alpha$ 的第二层含义是产出对资本的弹性。

### 古典增长理论（马尔萨斯）

关键假设是 $L$ 会增加、$Y$ 会增加，而 $Y$ 的增加又会进一步提高 $L$：技术进步 $\to$ 劳动生产率 $\uparrow$ $\to$ 人口增长加快 $\to$ 劳动的边际报酬递减 $\to$ 人均收入回落。

因此就 $y$ 而言，长期来看技术进步带来的是更多的人口，而不是更富裕的人口。人均产出没有增长。

### 新古典增长理论（罗伯特·索洛）

下面所有假设都针对经济的**长期均衡**状态。模型的目标是求出达到该状态时的 $(k,y)$。

长期内 $y$ 的增长率与以下因素有关：

* 储蓄/投资率 $s$
* 技术进步速度 $\theta=\frac{dA}{A}$
* 人口增长率 $n=\frac{dL}{L}$

**假设长期内 $\frac{Y}{K}$ 保持不变**，那么 $\frac{Y/L}{K/L}$ 不变，从而 $\frac{y}{k}$ 不变。于是 $\frac{dy}{y}=\frac{dk}{k}$。

由前面的增长公式 $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$。

把上面的公式结合起来：$(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$，$\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$。记作 $g^*=\frac{\theta}{1-\alpha}$。

由 $Y=yL$，$G^*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$。

**假设在封闭经济中，投资必须由国内储蓄提供资金**。设 $s$ 为 $Y$ 中被储蓄的比例，则 $I=sY$，其中 $I$ 为总投资。再设 $\delta$ 为折旧率，则 $dK = sY-\delta K$。

由 $k=\frac{K}{L}$，$\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$。结合 $\frac{dk}{k}=\frac{\theta}{1-\alpha}$，可得：
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
假设所有参数 $s, \theta, \alpha,\delta,n$ 保持不变，$\varphi$ 就是某个常数。

这正好给出了我们最初的假设：**长期内 $\frac{Y}{K}$ 为常数。**

再回顾 $MPK = \alpha\frac{Y}{K}$。$\frac{Y}{K}$ 假设为常数，$\alpha$ 也是常数，所以 $MPK$ 是常数。

进一步，$\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$。于是 $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$。由于 $\frac{sY}{L}=\frac{I}{L}$，$sy$ 大致就是每名工人的总投资。由该式可知，新投资分为三部分：

* 资本深化
* 补偿折旧、更新固定资产
* 为新增工人提供资本

由于 $sy=sAk^{\alpha}$（这由定义直接成立，不需要任何假设），把它与 $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$（由均衡状态假设得到的式子）联立求解，就能找到使 $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ 保持不变的 $k$ 及其对应的 $y$。

<iframe
  class="fx-concept-chart solow-chart"
  src="/charts/solow-steady-state.html"
  loading="lazy"
  title="索洛稳态：储蓄与所需投资"
></iframe>

<iframe
  class="fx-concept-chart solow-s-chart"
  src="/charts/solow-saving-rate-shift.html"
  loading="lazy"
  title="储蓄率提高使稳态移动"
></iframe>

储蓄率 $s$ 提高时，储蓄曲线 $sy = sAk^{\alpha}$ 从 $s_1 f(k)$ 上移到 $s_2 f(k)$，它与固定的所需投资射线 $[\delta + n + \theta/(1-\alpha)]k$ 的交点从稳态 A 移到 B——$k^*$ 和 $y^*$ 更高——而长期增长率 $\theta/(1-\alpha)$ 不变。由于 $s \in [0,1]$，靠提高 $s$ 来抬高均衡 $y$ 和 $k$ 是有上限的：$s$ 不能超过 1。

<iframe
  class="fx-concept-chart solow-n-chart"
  src="/charts/solow-labor-growth-shift.html"
  loading="lazy"
  title="劳动力增长加快使稳态下降"
></iframe>

劳动力增长率 $n$ 提高时，所需投资射线从 $[\delta + n_1 + \theta/(1-\alpha)]k$ 向上旋转为更陡的 $[\delta + n_2 + \theta/(1-\alpha)]k$，它与固定的储蓄曲线 $sy = sAk^{\alpha}$ 的交点从 A 移到 B——$k^*$ 和 $y^*$ 更低——而长期人均增长率 $\theta/(1-\alpha)$ 不变（总增长率 $G^*=n+\theta/(1-\alpha)$ 随 $n$ 上升）。

> [!Note]
>
> 随着 $s$ 提高，$k$ 和 $y$ 会更大，但 $\frac{\theta}{1-\alpha}$ 保持不变。

> [!Important]
>
> 新古典增长理论的一些结论：
>
> * 长期内，资本积累影响产出的水平，但不影响增长率
> * 无论初始的资本劳动比或初始生产率水平如何，一个增长中的经济都会走向稳定增长率的状态
> * 在稳态下，产出的增长率为 $G^*=n+\frac{\theta}{1-\alpha}$
>
> 模型的含义：
>
> * 刚开始积累资本（资本深化）时，增长会高于稳态增长率，但随后会放缓。
> * 维持潜在人均 GDP 增长的唯一途径是技术进步或全要素生产率的提高。
>
> 储蓄的作用：
>
> * 储蓄率提高的初始影响是暂时提高经济增长。一旦经济达到稳态增长，增长率就不再取决于收入中用于储蓄或投资的比例。

#### 例题

用新古典模型计算 A 国和 B 国的稳态增长率。

| 国家 | 劳动成本占要素总成本（%） | TFP 增长率（%） | 劳动力增长率（%） |
| ------- | ----------------------------------- | -------------- | ---------------------- |
| A | 56.1 | 2.9 | 1.2 |
| B | 53.8 | 0.2 | 0 |

回顾 $G^*=\Delta Y/Y=\frac{\theta}{1-\alpha}+n$，其中劳动成本占要素总成本 $=1-\alpha$，TFP 增长率 $=\theta$，劳动力增长率 $=n$。

<span class="blur-hover" tabindex="0">

**A 国：**

$$
G^*=\frac{2.9\%}{56.1\%}+1.2\%=6.37\%
$$

**B 国：**

$$
G^*=\frac{0.2\%}{53.8\%}+0\%=0.37\%
$$

</span>

#### 例题

估计 A 国潜在 GDP 增长率为 8.5%，B 国为 0.5%。由上一题，A 国 $G^*=6.37\%$，B 国 $G^*=0.37\%$。

比较稳态增长率与潜在 GDP 增长率，并解释结果。

<span class="blur-hover" tabindex="0">

**A 国：** 潜在 GDP 增长率 $8.5\% > G^*=6.37\%$，说明经济仍在趋同过程中。实物资本存量低于稳态水平；资本深化是生产率增长和潜在 GDP 增长的重要驱动力。

**B 国：** 潜在 GDP 增长率 $0.5\%$ 对比 $G^*=0.37\%$——基本处于稳态。资本投资对增长率没有显著影响。只有 TFP 增长、劳动力增长和劳动在产出中所占份额的变化才会影响潜在 GDP 增长。

</span>

### 内生增长理论

与新古典模型不同，内生增长模型假设对整个经济而言，资本的边际报酬不会递减。

* 资本积累是解释长期增长的主要因素
* 研发支出具有很大的正外部性或溢出效应

因此，经济不会达到稳定的增长率。相反，储蓄和投资可以带来在永久更高水平上自我维持的增长。

### 趋同之争

**绝对趋同**：发展中国家最终会赶上发达国家，人均产出达到相同水平。

* 新古典模型假设所有国家都能获得相同的技术，这意味着各国的人均增长率会趋同
* 新古典模型并不意味着绝对趋同。

**条件趋同**：假设储蓄率、人口增长率和生产函数相同，就会有相同水平的 $y$ 和相同的增长率 $\frac{dy}{y}$。

**俱乐部趋同**：只有作为"俱乐部"成员的富裕国家和中等收入国家，才会向最富裕国家的收入水平趋同。穷国如果进行制度变革，就可以加入俱乐部。不实施必要制度改革的国家会陷入不趋同的陷阱。

趋同可以通过以下途径发生：

* 技术进步
* 资本深化

在内生增长模型中，并没有趋同一定会发生的预测，因为发达国家更容易实现资本深化。
