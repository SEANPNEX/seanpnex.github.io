<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 594px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Analysis of Active Portfolio Management

The content is from the book *Active Portfolio Management* by Grinold and Kahn.

## Value Added by Active Management

### Active Weights

Recall the active return from [M2](M2%20Multifactor%20Models.md#return-attribution):

$$R_A=R_P-R_B$$

Write the portfolio's weight in asset $i$ as the benchmark's weight plus an **active weight**, $\Delta w_i=w_{P,i}-w_{B,i}$. Then the active return is the sum of the active weights times the asset returns:

$$R_A=\sum_{i=1}^{N}\Delta w_i\,R_i$$

The overall set of active weights sums to **zero**: an overweight in one asset must be funded by underweights in others. So value is added only by **overweighting assets that beat the benchmark** and underweighting those that lag it. Because $\sum\Delta w_i=0$, the formula can also be written with returns relative to the benchmark: $R_A=\sum\Delta w_i\,(R_i-R_B)$.

**Example.** A benchmark holds three stocks at 50%, 30% and 20%; the portfolio holds them at 40%, 40% and 20%. The stocks return 10%, 15% and 5%. Find the active weights and the active return.

<div class="reveal" tabindex="0">

Active weights: $-10\%$, $+10\%$ and $0$, summing to zero.

$$
\begin{aligned}
R_A&=(-0.1)(10\%)+(0.1)(15\%)+0\\
&=0.5\%
\end{aligned}
$$

Check: $R_P=4\%+6\%+1\%=11\%$ and $R_B=5\%+4.5\%+1\%=10.5\%$, a difference of $0.5\%$.

</div>

### Decomposition of Value Added

* For a portfolio with multiple asset classes, the active return can be decomposed into two sources:
  1. **Active asset allocation**: active weights of asset classes against the benchmark portfolio.
  2. **Security selection**: active weights of securities within asset classes, showing up as each class's return beating its benchmark.

$$
\begin{aligned}
R_A={}&\underbrace{\sum_{i=1}^{N}\left(w_i^P-w_i^B\right)R_i^B}_{\text{active asset allocation}}\\
&+\underbrace{\sum_{i=1}^{N}w_i^P\left(R_i^P-R_i^B\right)}_{\text{security selection}}
\end{aligned}
$$

where $i$ is now an asset class, $R_i^B$ is the return of that class's benchmark, and $R_i^P$ is the return of the portfolio's holdings in that class.

**Example.** The benchmark is 60% equities (benchmark return 8%) and 40% bonds (4%). The portfolio holds 70% equities, which return 9%, and 30% bonds, which return 3.5%. Decompose the active return.

<div class="reveal" tabindex="0">

**Asset allocation:**

$$
\begin{aligned}
&(0.7-0.6)(8\%)+(0.3-0.4)(4\%)\\
&=0.8\%-0.4\%=0.4\%
\end{aligned}
$$

**Security selection:**

$$
\begin{aligned}
&0.7(9\%-8\%)+0.3(3.5\%-4\%)\\
&=0.7\%-0.15\%=0.55\%
\end{aligned}
$$

Total active return $=0.95\%$. Check: $R_P=6.3\%+1.05\%=7.35\%$ and $R_B=4.8\%+1.6\%=6.4\%$.

</div>

## Information Ratio

### Sharpe Ratio

The **Sharpe ratio** is the excess return per unit of **total risk**:

$$\text{SR}_P=\frac{R_P-R_f}{\sigma_P}$$

* **Ex ante**: uses expected values, $E(R_P)$ and the expected $\sigma_P$, to choose portfolios.
* **Ex post**: uses realized values, $R_P$ and the realized $\sigma_P$, to evaluate them.

**Efficient frontier.** The **efficient frontier** is the set of risky portfolios with the highest expected return for each level of risk. A **capital allocation line (CAL)** joins the risk-free asset to a risky portfolio; its slope is that portfolio's Sharpe ratio. The **capital market line (CML)** is the steepest CAL: the one tangent to the frontier, at the market (tangency) portfolio.

<iframe
  class="fx-concept-chart"
  src="/charts/efficient-frontier-cml.html"
  title="Efficient frontier with the capital market line and a flatter capital allocation line"
  loading="lazy"
></iframe>

* **Lending or borrowing at $R_f$ does not change the Sharpe ratio**: it only moves the investor along the same line. A cautious investor lends (holds some cash); an aggressive one borrows. So the investor should choose the risky portfolio with the **highest Sharpe ratio**, and then set total risk with cash or leverage.
* **Aggressive active weights do change the Sharpe ratio**: scaling up the active bets adds active risk, which raises or lowers the portfolio's Sharpe ratio depending on how much active risk is taken (see the optimal level below).

### Information Ratio

Recall the information ratio from [M2](M2%20Multifactor%20Models.md#risk-attribution), and active risk, the [tracking error](M1%20ETF.md#tracking-error) from M1. The information ratio is the active return per unit of **active risk**:

$$\text{IR}=\frac{R_P-R_B}{\sigma\left(R_P-R_B\right)}=\frac{R_A}{\sigma_A}$$

* **Ex ante IR**: expected active return over expected active risk; used to choose managers and to size active risk.
* **Ex post IR**: realized active return over realized active risk; used to **evaluate the performance of asset managers**.

The Sharpe ratio is the IR with the risk-free asset as the benchmark.

**Conclusions:**

1. The IR is **not affected by the aggressiveness** of the active weights: scaling all active weights by the same constant scales the active return and the active risk equally. This holds as long as no fees are incurred (a fixed fee is not scaled with the bets).
2. Similarly, **combining the active portfolio with the benchmark** (holding part in the benchmark, or borrowing at the benchmark return to lever the active bets) only scales the active weights, so it does **not** change the IR.
3. The IR **is affected by adding cash or using leverage** (lending or borrowing at $R_f$): the risk-free asset is not the benchmark, so it changes active return and active risk in different proportions.

So the two ratios behave in opposite ways: the **Sharpe ratio** is unchanged by cash or leverage but changed by the aggressiveness of active weights; the **IR** is unchanged by aggressiveness but changed by cash or leverage.

### Construct Optimal Portfolio

When an active portfolio is combined with the benchmark, and the active returns are uncorrelated with the benchmark, the best achievable Sharpe ratio is

$$\text{SR}_P^2=\text{SR}_B^2+\text{IR}^2$$

So investors should **select the manager with the highest IR**: it gives the highest Sharpe ratio for the total portfolio, whatever the investor's risk preference.

The Sharpe ratio is maximized at the **optimal amount of active risk**:

$$\sigma^*\left(R_P-R_B\right)=\frac{\text{IR}}{\text{SR}_B}\,\sigma_{R_B}$$

These are conclusions from the book; the proof is skipped.

**Adjusting active risk.** If a manager's active portfolio has an active risk $\sigma_A$ different from the optimal level, combine it with the benchmark. The weight on the active portfolio is $N/M$, where $N=\dfrac{\text{IR}}{\text{SR}_B}\sigma_{R_B}$ is the optimal active risk and $M=\sigma(R_P-R_B)$ is the portfolio's actual active risk; the rest goes into the benchmark.

**Example.** The benchmark has a Sharpe ratio of 0.40 and a volatility of 18%. A manager has an IR of 0.25 and an active risk of 15%. Find the optimal active risk, the weight on the manager's portfolio, and the best Sharpe ratio.

<div class="reveal" tabindex="0">

$$\sigma_A^*=\frac{0.25}{0.40}\times18\%=11.25\%$$

Weight on the manager $=11.25\%/15\%=75\%$, with 25% in the benchmark. The expected active return is $0.25\times11.25\%=2.81\%$.

$$\text{SR}_P=\sqrt{0.40^2+0.25^2}=0.472$$

</div>

## The Fundamental Law

### Correlation Triangle

The value an active manager adds depends on three relationships, shown as a triangle between three sets of numbers across the assets: the **forecasted active returns** $\mu_i$ (top), the **active weights** $\Delta w_i$ (left) and the **realized active returns** $R_{A,i}$ (right).

<iframe
  class="fx-concept-chart"
  src="/charts/correlation-triangle.html"
  title="Correlation triangle of forecasts, active weights and realized active returns"
  loading="lazy"
></iframe>

* **Signal quality** (top to right): do the forecasts predict what happens? This is the IC.
* **Portfolio construction** (top to left): do the forecasts reach the weights? This is the TC.
* **Value added** (left to right): what the weights actually earned, $R_A=\sum\Delta w_iR_{A,i}$.

**Information coefficient (IC).** Signal quality is measured by the correlation between the forecasted active returns ($\mu_i$) at the top of the triangle and the realized active returns ($R_{A,i}$) at the right corner, commonly called the **information coefficient (IC)**.

The IC is a risk-weighted correlation between the forecasted and the realized active returns:

$$\text{IC}=\rho\left(\frac{R_{A,i}}{\sigma_i},\ \frac{\mu_i}{\sigma_i}\right)$$

* The ex ante IC should be positive: a manager would not act on forecasts expected to be wrong.
* The ex post IC may be positive or negative, depending on how the forecasts turned out.

**Transfer coefficient (TC).** The correlation between the risk-weighted forecasts and the risk-weighted active weights, $\text{TC}=\rho\left(\mu_i/\sigma_i,\ \Delta w_i\sigma_i\right)$. It measures:

* The degree to which the investor's forecasts are translated into active weights.
* The extent to which constraints reduce the expected value added of the investor's forecasting ability.
* For portfolios without any constraints, $\text{TC}=1$.
* For portfolios with constraints (e.g., long-only, position limits), $\text{TC}<1$.

**Breadth (BR).**

* **Breadth** measures the number of independent active decisions the manager makes per year in constructing the portfolio: an indicator of how much effort the manager has put in.
  * "**Independent**" means that the active decisions should not be based on highly correlated (or identical) information sets.
* A practical measure of breadth, for $N$ decisions with an average correlation $\rho$:

$$\text{BR}=\frac{N}{1+(N-1)\rho}$$

  * E.g., 20 decisions with $\rho=0.25$ give $\text{BR}=20/(1+19\times0.25)=3.48$: highly correlated bets are worth only a few independent ones.
  * When using derivatives or other hedging strategies ($\rho<0$), BR may be larger than $N$.

### The Fundamental Law of Active Management

* The **basic** fundamental law, for an unconstrained portfolio:

$$\text{IR}^*=\text{IC}\times\sqrt{\text{BR}}$$

$$E(R_A)=\text{IC}\times\sqrt{\text{BR}}\times\sigma_A$$

* The **full** fundamental law, with constraints:

$$\text{IR}=\text{TC}\times\text{IC}\times\sqrt{\text{BR}}$$

$$E(R_A)=\text{TC}\times\text{IC}\times\sqrt{\text{BR}}\times\sigma_A$$

* When taking TC into consideration, with $\text{IR}^*$ the unconstrained IR from the basic law:

$$\sigma_A^*=\frac{\text{TC}\times\text{IR}^*}{\text{SR}_B}\times\sigma_{R_B}$$

$$\text{SR}_P^2=\text{SR}_B^2+\left(\text{TC}\times\text{IR}^*\right)^2$$

**Example.** A manager has an IC of 0.05, a breadth of 100, a TC of 0.6 and an active risk of 4%. The benchmark's Sharpe ratio is 0.40 and its volatility 15%. Find the IR, the expected active return, the optimal active risk, and the portfolio's best Sharpe ratio.

<div class="reveal" tabindex="0">

Unconstrained: $\text{IR}^*=0.05\times\sqrt{100}=0.50$. With constraints: $\text{IR}=0.6\times0.50=0.30$.

$E(R_A)=0.30\times4\%=1.2\%$.

$$\sigma_A^*=\frac{0.6\times0.50}{0.40}\times15\%=11.25\%$$

$$\text{SR}_P=\sqrt{0.40^2+0.30^2}=0.50$$

</div>

**Approaches to improve the IR:**

* **Improve TC**: relax constraints (e.g., allow short positions), so forecasts reach the weights more fully.
* **Improve IC**: better forecasts.
* **Increase BR**: more independent decisions. But breadth and IC trade off: adding bets helps only if their IC stays reasonable. If the IC on the extra bets is low, a smaller BR with better bets can give a higher IR.

### Applications

**Market timing.** For a manager who makes binary calls (e.g., equities vs cash), the IC follows from the proportion of correct calls:

$$\text{IC}=2\times(\%\text{ correct})-1$$

E.g., a manager who is right 55% of the time has an IC of $2(0.55)-1=0.10$. With four independent calls a year, $\text{BR}=4$ and $\text{IR}=0.10\times\sqrt4=0.20$. A manager right only 50% of the time has an IC of 0: no skill.

**Ex post IC measurement.** After the fact, the realized active return depends on the **realized** IC:

$$
\begin{aligned}
E\left(R_A\mid\text{IC}_R\right)={}&\text{TC}\times\text{IC}_R\\
&\times\sqrt{\text{BR}}\times\sigma_A
\end{aligned}
$$

* $\sigma_A^2$ depends on the volatility of the realized IC and on **noise** from the constraints.
* The share of the active return variance explained by the realized IC (the forecasting) is $\text{TC}^2$; the remaining $1-\text{TC}^2$ is noise. So with tight constraints (low TC), even a skilled manager's results are dominated by noise.

**Limitations.** The parameters cannot be estimated precisely: the ex ante IC is hard to measure, and the true independence of decisions, and so the breadth, is hard to judge. The law also assumes the IC is the same across all decisions.
