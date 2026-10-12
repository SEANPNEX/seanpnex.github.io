---
title: 时间序列
---

# 时间序列模型

时间序列是按时间排列的一串观测值。与横截面观测不同，相邻的值可能相互依赖，均值可能有趋势，波动也可能聚集。一个有用的时间序列模型必须先处理这些特征，它的系数检验和预测才值得信赖。

## 确定性趋势模型

趋势模型把时间本身当作解释变量。当序列围绕一条稳定的确定性路径变动、且剩余误差不存在序列相关时，它是合适的。

### 线性趋势

$$
Y_t=\beta_0+\beta_1t+\varepsilon_t.
$$

斜率 $\beta_1$ 是每期预期的**绝对变化量**。例如，$\beta_1=3$ 表示序列每期大约上升三个单位。

### 对数线性趋势

当序列以大致恒定的百分比速度增长时，对其取对数建模：

$$
\ln(Y_t)=\beta_0+\beta_1t+\varepsilon_t.
$$

等价地，

$$
Y_t=\exp(\beta_0+\beta_1t+\varepsilon_t).
$$

连续复利增长率为 $\beta_1$。每期的精确增长率为

$$
g=e^{\beta_1}-1,
$$

当 $\beta_1$ 很小时，它约等于 $\beta_1$。

> [!IMPORTANT]
> 趋势在图上拟合得好还不够。如果趋势模型的残差存在序列相关，常规的 OLS 推断就不可靠，序列中也仍有可预测的动态。参见 [M3：序列相关](./M3%20Model%20Misspecification.md#serial-correlation)。

## 协方差平稳

许多时间序列模型要求协方差平稳。当满足以下条件时，序列 $Y_t$ 是协方差平稳的：

1. 期望值有限且不随时间变化：
   $$E(Y_t)=\mu;$$
2. 方差有限且不随时间变化：
   $$\operatorname{Var}(Y_t)=\sigma^2;$$
3. 与滞后值的协方差只取决于滞后阶数 $j$，而不取决于具体日期：
   $$
   \operatorname{Cov}(Y_t,Y_{t-j})=\gamma_j.
   $$

确定性的上升趋势违反了均值恒定的条件。单位根过程也不是协方差平稳的，因为冲击具有永久影响，且其方差通常随时间变化。

## 自回归模型

自回归模型用因变量的滞后值作为预测变量：

$$
AR(p):\quad
Y_t
=
\beta_0+\phi_1Y_{t-1}+\cdots+\phi_pY_{t-p}+\varepsilon_t.
$$

误差 $\varepsilon_t$ 应为白噪声：均值为零、方差恒定且没有序列相关。

### AR(1) 模型与均值回归

对于

$$
Y_t=\beta_0+\phi Y_{t-1}+\varepsilon_t,
$$

当

$$
|\phi|<1
$$

时，过程是协方差平稳的。其长期水平（均值回归水平）为

$$
\mu=\frac{\beta_0}{1-\phi}.
$$

模型可以改写为

$$
Y_t-\mu=\phi(Y_{t-1}-\mu)+\varepsilon_t.
$$

这种形式让动态一目了然：

- $0<\phi<1$：偏离逐渐衰减，并保持同一符号；
- $-1<\phi<0$：偏离在均值两侧交替并衰减；以及
- $\phi$ 接近 1 意味着均值回归非常缓慢。

### AR 预测

在时刻 $t$，AR(1) 的向前一步预测为

$$
\hat{Y}_{t+1\mid t}
=
\hat{\beta}_0+\hat{\phi}Y_t.
$$

更长期限的预测通过递推得到。对于平稳的 AR(1)，随着预测期延长，预测值收敛到 $\hat\mu=\hat\beta_0/(1-\hat\phi)$。

## 自相关与模型充分性

滞后 $j$ 阶的自相关为

$$
\rho_j
=
\operatorname{Corr}(Y_t,Y_{t-j}).
$$

自相关函数（ACF）图展示多个滞后阶上的样本自相关 $\hat\rho_j$。在观测值为白噪声的近似下，单个样本自相关的标准误约为

$$
SE(\hat\rho_j)\approx\frac{1}{\sqrt{T}}.
$$

因此，近似的 5% 界限为

$$
\pm\frac{1.96}{\sqrt{T}}.
$$

超出这些界限的自相关是该滞后阶存在依赖的证据，而不是证明。检查许多滞后阶会带来多重比较问题，因此整体模式和联合检验同样重要。

### 偏自相关函数

滞后 $j$ 阶的**偏自相关函数（PACF）**衡量在控制滞后 $1$ 到 $j-1$ 阶之后，$Y_t$ 与 $Y_{t-j}$ 之间的相关性。因此它分离出第 $j$ 阶的直接贡献；而 ACF 同时包含直接依赖和经由更短滞后传递的间接依赖。

ACF 和 PACF 为模型阶数提供了有用线索：

| 过程 | ACF | PACF |
| --- | --- | --- |
| AR($p$) | 逐渐拖尾 | 在滞后 $p$ 阶后截尾 |
| MA($q$) | 在滞后 $q$ 阶后截尾 | 逐渐拖尾 |
| ARMA($p,q$) | 拖尾 | 拖尾 |

<iframe
  class="acf-pacf-chart"
  src="/charts/acf-pacf-patterns.html?lang=zh"
  title="AR(1) 与 MA(1) 模型的 ACF 和 PACF 示意模式"
  loading="lazy"
></iframe>

这里的**截尾**描述的是总体函数：超过相应阶数的相关在理论上为零。在有限样本中，截尾之后的估计值通常在零附近波动，因此应借助置信界限和整体模式判断，而不要期待恰好为零。

拟合 AR 模型后，检查**残差**的 ACF。残差存在显著自相关说明模型没有捕捉到全部的序列依赖。Breusch–Godfrey 检验可以联合检验多个残差滞后阶；参见 [M3：Breusch–Godfrey 检验](./M3%20Model%20Misspecification.md#breuschgodfrey-test)。

> [!NOTE]
> 当预测变量中包含因变量的滞后项时，标准的 Durbin–Watson 检验并不适用。对 AR 模型应使用残差自相关或合适的 Breusch–Godfrey 检验。

## 移动平均与 ARIMA 模型

### 移动平均模型

$MA(q)$ 模型使用当期和滞后的白噪声冲击：

$$
MA(q):\quad
Y_t
=
\mu+\varepsilon_t
+\theta_1\varepsilon_{t-1}
+\cdots
+\theta_q\varepsilon_{t-q}.
$$

对于理论上的 $MA(q)$ 过程，滞后 $q$ 阶之后的自相关为零。在有限样本中，$q$ 阶之后的估计自相关不会恰好为零，但在统计上应与零无法区分。

### ARMA 与 ARIMA

- **ARMA$(p,q)$** 为平稳序列组合 $p$ 个自回归项和 $q$ 个移动平均项。
- **ARIMA$(p,d,q)$** 先对非平稳序列做 $d$ 次差分使其平稳，再用 ARMA$(p,q)$ 结构为差分后的序列建模。

因此，单纯组合 AR 项和 MA 项得到的是 **ARMA** 模型。只有加入以差分表示的"积分"时，它才成为 ARIMA。

## 季节性

季节性是以固定日历频率反复出现的模式，例如每月的零售高峰或每季度的纳税。它不同于普通趋势，因为它在更大的周期内重复出现。

可能的处理方式包括：

- 季节虚拟变量；
- 季节性自回归滞后项，例如月度数据中的 $Y_{t-12}$；
- 季节差分，例如 $Y_t-Y_{t-12}$；以及
- 结合常规和季节性 AR 或 MA 项的模型。

处理方式应与模式相匹配。加入一个季节滞后项并不是唯一可能的做法。

## 单位根与随机游走

### 随机游走

当 $\phi=1$ 时，AR(1) 方程变为

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t.
$$

- 若 $\beta_0=0$，这是随机游走。
- 若 $\beta_0\ne0$，这是带漂移的随机游走。

该过程有一个**单位根**。冲击具有永久影响，序列的水平值不是协方差平稳的。对互不相关的单位根序列做普通回归，即使不存在任何有意义的关系，也可能得到很高的 $R^2$ 和显著的 $t$ 统计量——这就是伪回归。

### Dickey–Fuller 检验

在 AR(1) 模型两边同时减去 $Y_{t-1}$：

$$
\Delta Y_t
=
\beta_0+\gamma Y_{t-1}+\varepsilon_t,
\qquad
\gamma=\phi-1.
$$

假设为

$$
H_0:\gamma=0
\quad\text{(unit root)}
$$

对

$$
H_a:\gamma<0
\quad\text{(stationary alternative)}.
$$

在单位根原假设下，通常的 Student $t$ 临界值无效。Dickey–Fuller 统计量服从非标准分布，使用专门的临界值。当统计量足够负——低于相应的 Dickey–Fuller 临界值——时，拒绝单位根原假设。

检验方程必须与数据生成过程保持一致：可以不含确定性项、只含截距，或含截距加时间趋势。增广 Dickey–Fuller 检验加入滞后差分项，以吸收高阶序列相关。

### 一阶差分

对于带漂移的随机游走

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t,
$$

一阶差分得到

$$
\Delta Y_t=Y_t-Y_{t-1}=\beta_0+\varepsilon_t.
$$

只有**不带**漂移的随机游走才会简化为 $\Delta Y_t=\varepsilon_t$。差分可以使单位根序列稳定下来，但不必要的差分会引入本可避免的噪声和移动平均行为。

## 条件异方差

金融收益率序列的水平值可能几乎没有自相关，但其**残差平方**却有很强的自相关。这就是波动聚集：高波动时期往往紧跟着高波动时期。

### ARCH 模型

ARCH$(q)$ 模型把误差的条件方差设定为

$$
\sigma_t^2
=
\alpha_0
+\alpha_1\varepsilon_{t-1}^2
+\cdots
+\alpha_q\varepsilon_{t-q}^2,
$$

并施加 $\alpha_0>0$、$\alpha_j\ge0$ 等约束以保证方差非负。

观测误差可以写成

$$
\varepsilon_t=\sigma_tz_t,
$$

其中 $z_t$ 是标准化的白噪声冲击。ARCH 刻画的是**条件方差**，而不是条件均值。

### GARCH 模型

GARCH$(p,q)$ 模型加入滞后的条件方差：

$$
\sigma_t^2
=
\alpha_0
+\sum_{i=1}^{q}\alpha_i\varepsilon_{t-i}^2
+\sum_{j=1}^{p}\beta_j\sigma_{t-j}^2.
$$

与高阶 ARCH 模型相比，GARCH 能更简约地刻画持续的波动。ARCH 和 GARCH 模型通常用最大似然法估计，而不是自动采用广义最小二乘法。

要检测 ARCH 效应，可检查残差平方的 ACF，或使用 ARCH LM 检验。如果波动动态对预测或风险度量很重要，就应显式地为条件方差建模。如果只需要系数推断，有时异方差一致的标准误就足够了；参见 [M3：异方差](./M3%20Model%20Misspecification.md#heteroskedasticity)。

## 多个时间序列与协整

把一个非平稳序列对另一个非平稳序列做回归，可能产生伪关系。关键的例外是**协整**。

当两个单位根序列的某个线性组合是平稳的时，它们就是协整的。从经济上看，它们各自可能四处游走，却共享一个稳定的长期均衡关系。

### Engle–Granger 步骤

对两个候选序列：

1. 分别检验每个序列是否有单位根。
2. 若两者为同阶单整，用水平值估计所设想的长期回归：
   $$
   Y_t=\beta_0+\beta_1X_t+u_t.
   $$
3. 对 $\hat u_t$ 进行基于残差的 Engle–Granger 单位根检验。
4. 使用 Engle–Granger 临界值；由于残差是估计出来的，这些临界值不同于普通的 Dickey–Fuller 临界值。

如果残差平稳，序列就是协整的，水平值回归代表一种长期关系。如果残差仍有单位根，水平值回归很可能是伪回归，通常应对序列做变换，例如差分。

> [!IMPORTANT]
> 协整并不意味着每个序列本身是平稳的，而是指这些非平稳序列的某个特定线性组合是平稳的。

## 模型选择流程

<iframe
  class="time-series-workflow"
  src="/charts/time-series-model-selection.html?lang=zh"
  title="时间序列模型选择的交互流程"
  loading="lazy"
></iframe>

> [!IMPORTANT]
> 单位根**并不**排除 ARIMA。它排除的是直接对非平稳的水平值拟合平稳的 AR、MA 或 ARMA 模型。只有当序列经过 $d$ 次差分后成为平稳的 ARMA($p,q$) 过程时，ARIMA($p,d,q$) 模型才合适。

对于涉及多个非平稳序列的回归，在解读水平值关系之前先检验协整。

模型选择是迭代的，而不是机械的。应优先选择简约的设定：系数在经济上合理、残差近似白噪声、参数稳定，并且样本外表现可信。

## 小结

| 特征 | 诊断思路 | 典型应对 |
| --- | --- | --- |
| 确定性的水平趋势 | 作图与趋势回归 | 线性或对数线性趋势 |
| 平稳序列中的持续依赖 | ACF 与残差检验 | AR、MA 或 ARMA 项 |
| 单位根 | DF 或 ADF 检验 | 差分，然后为平稳的变换序列建模 |
| 重复的日历模式 | 季节图与滞后结构 | 季节虚拟变量、滞后项或差分 |
| 波动聚集 | 残差平方的 ACF 或 ARCH 检验 | 需要预测方差时使用 ARCH/GARCH |
| 多个非平稳序列 | 基于残差的协整检验 | 仅在协整时使用水平值关系 |

<style>
.time-series-workflow {
  display: block;
  width: 100%;
  height: 1340px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

.acf-pacf-chart {
  display: block;
  width: 100%;
  height: 790px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .time-series-workflow {
    height: 2100px;
  }
  .acf-pacf-chart { height: 1470px; }
}
</style>
