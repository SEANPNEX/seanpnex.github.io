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

# Managing Market Risk

## Value at Risk (VaR)

**Value at Risk** is an estimate of the minimum loss, at a specified probability, over a specified time period. Equivalently, it is the maximum loss at a specified level of confidence. Both describe the same cut on the distribution of returns:

* At confidence $1-\alpha$ (e.g., 95%): the **maximum** loss, i.e., the loss is at most the VaR.
* At probability $\alpha$ (e.g., 5%): the **minimum** loss, i.e., in the worst $\alpha$ of outcomes, the loss is at least the VaR.

<iframe
  class="fx-concept-chart"
  src="/charts/var-distribution.html"
  title="Return distribution with the VaR cut and the conditional VaR"
  loading="lazy"
></iframe>

**Example.** A portfolio's 1% one-day VaR is 2 million.

* We are 99% confident that the portfolio will lose no more than 2 million in a day.
* There is a 1% chance that it will lose 2 million or more in a day.

VaR always needs three things stated: the **amount**, the **probability** (or confidence level), and the **time period**.

### Parametric Estimate of VaR

The parametric (variance–covariance) method assumes a distribution for returns, usually normal, and estimates its mean and standard deviation. The VaR is found where the area of the left tail under the probability density equals $\alpha$:

$$\text{VaR}=-\left[E(R)-z_\alpha\,\sigma\right]$$

$$\text{VaR}=z_\alpha\,\sigma-E(R)$$

$E(R)-z_\alpha\sigma$ is the cut-off **return**; VaR is the loss, so its sign is flipped. In money:

$$\text{VaR value}=\text{VaR}\times\text{Asset value}$$

| Probability $\alpha$ | Confidence | $z_\alpha$ |
| --- | --- | --- |
| 5% | 95% | 1.65 |
| 2.5% | 97.5% | 1.96 |
| 1% | 99% | 2.33 |

When the mean is 0 (often assumed for short periods), $\text{VaR}=z_\alpha\,\sigma$.

**VaR for a portfolio** of assets A and B follows the rule for the variance of a sum, so correlation matters:

$$
\begin{aligned}
\sigma_p^2={}&w_A^2\sigma_A^2+w_B^2\sigma_B^2\\
&+2w_Aw_B\rho_{AB}\sigma_A\sigma_B
\end{aligned}
$$

**Square root rule.** To convert between periods, scale the standard deviation by $\sqrt{T}$:

$$\text{VaR}_T=\text{VaR}_1\times\sqrt{T}$$

This needs returns that are i.i.d. (no serial correlation) and a mean of 0. In reality returns are not i.i.d., and serial correlation is not 0.

**Example.** A 10 million portfolio holds 60% in A (expected return 10%, standard deviation 20%) and 40% in B (6%, 10%), with a correlation of 0.3. Using 250 trading days a year, find (a) the annual and (b) the daily 5% VaR.

<div class="reveal" tabindex="0">

$E(R_p)=0.6\times10\%+0.4\times6\%=8.4\%$.

$$
\begin{aligned}
\sigma_p^2&=0.36(0.04)+0.16(0.01)\\
&\quad+2(0.6)(0.4)(0.3)(0.2)(0.1)\\
&=0.01888
\end{aligned}
$$

So $\sigma_p=13.74\%$.

**(a) Annual.** $1.65\times13.74\%-8.4\%=14.27\%$, or about **1.43 million**.

**(b) Daily.** $\mu=8.4\%/250=0.034\%$ and $\sigma=13.74\%/\sqrt{250}=0.869\%$:

$$1.65\times0.869\%-0.034\%=1.40\%$$

or about **140,000**.

</div>

### Historical Simulation Estimate of VaR

- Given the historical returns, sort the results from largest loss to greatest gain to find VaR.
  1. Imagine that the returns from a portfolio over the past 300 days have been computed and ranked in order from best to worst.
  2. We can say that on only 5% of the days was the return worse than or equal to the return placed in the 286th position: positions 286 to 300 are 15 days, or 5% of 300.
  3. Hence, the one-day VaR estimate will be the return placed 286th in the list, i.e., the 15th worst (multiplied by the current portfolio value if we want the absolute dollar VaR).

The method applies **today's portfolio weights** to the historical returns of its assets. It needs no distribution assumption and captures fat tails and the real correlations in the data, but it assumes the past period is representative of the future.

### Monte Carlo to Estimate VaR

More flexible: specify a distribution for each risk factor (not necessarily normal) and their correlations, simulate thousands of outcomes for the portfolio, and build the return distribution (pdf) from the simulation. The VaR is read off as the $\alpha$ percentile, as in historical simulation.

* It handles non-normal distributions and non-linear positions, such as options.
* It is computationally heavy, and the result is only as good as the assumed distributions.

Understanding the properties is enough for the exam.

## Extensions of VaR

**Advantages and disadvantages of VaR.**

* **Advantages**: simple, one number that is easy to understand and communicate; comparable across portfolios and business units; useful for **risk budgeting** and capital allocation; can be verified by backtesting; widely accepted by regulators.
* **Disadvantages**:
  * **Subjective**: the confidence level, time period and estimation method are choices.
  * **Underestimates the frequency of extreme events**, especially under the normal assumption (fat tails).
  * Says nothing about **how large** the loss is beyond the VaR.
  * Ignores **liquidity**, and correlations rise in a crisis (**correlation risk**).
  * Focuses on the **left tail** only, and can oversimplify the risk picture.

Extensions of VaR address some of these:

* **Conditional VaR (CVaR)**, or **expected shortfall**: the **average loss** given that the loss exceeds the VaR. It measures the size of the tail loss. For a normal distribution, the 5% CVaR is $2.06\sigma$, compared with a VaR of $1.65\sigma$.
* **Incremental VaR**: the **change in the portfolio's VaR** from adding, removing or changing a position: VaR with the change minus VaR without it.
* **Marginal VaR**: the change in VaR for a **small change** in a position, per unit of the position. It shows each position's contribution to the total VaR.
* **Liquidity-adjusted VaR (LVaR)**: adds the cost of liquidating positions, $\text{LVaR}=\text{VaR}+f(\text{liquidity})$, e.g., half the bid–ask spread times the position.
* **Cash flow at risk (CFaR)**: the minimum shortfall in **cash flow** at a given probability over a period; used by companies, whose risk is in operating cash flows rather than marked-to-market assets.
* **Earnings at risk (EaR)**: the same idea applied to **earnings**.
* **Credit VaR**: the minimum **credit loss** (from defaults and downgrades) at a given probability over a period.

## Other Risk Measures

### Sensitivity

A sensitivity measure is a partial derivative: it examines the change in value for a **small change** in one risk factor, holding the others constant.

* For equities (CAPM), it is **beta**: the change in return for a change in the market return.
* For fixed income, it is the Taylor expansion of the price change, $\Delta P/P\approx-D\,\Delta y+\tfrac12 C(\Delta y)^2$, with **duration** and **convexity** (see the [Level I review](../C6%20Fixed%20Income/M1%20Term%20and%20Interest%20Rate.md#review-duration-and-convexity-level-i) in Fixed Income).
* For options, they are the [Greeks](../C7%20Derivative/M2%20Options.md#greeks): delta, gamma, vega and so on.

Sensitivities say how much value changes, but not how likely the change is, and they are accurate only for small changes.

### Scenario

A **scenario** measure estimates the portfolio's loss under a set of **significant changes in multiple risk factors** at once.

* **Historical scenarios**: replay a past event, such as the 2008 crisis, on today's portfolio.
* **Hypothetical scenarios**: changes that have not happened, but could.
* **Stress tests**: extreme scenarios: low probability but extreme loss. They often assume **correlations increase**, as they do in a crisis, and focus on **negative outcomes**.
* **Reverse stress testing**: start from an unacceptable loss and find the scenarios that would cause it.

Scenarios complement VaR: they show the size of extreme losses, but give no probability for them.

## Choice of Risk Measures

This part overlaps with the analysis of banks in FSA: see [Sensitivity to Market Risk](../C3%20Financial%20Statements/M4%20Analysis%20of%20Financial%20Institutions.md#sensitivity-to-market-risk) in M4.

Banks need to balance a number of competing aspects of risk to manage their business and meet the expectations of equity investors, analysts, bond investors, credit rating agencies, depositors and regulators.

Typical risk measures:

* **Liquidity**: liquidity gaps and the ability to meet outflows.
* **Economic capital**: the capital needed to absorb unexpected losses at a chosen confidence level.
* **VaR**: of the trading book.
* **Sensitivity**: e.g., duration of assets and liabilities.
* **Scenario**: stress tests, many required by regulators.
* **Leverage**: total assets relative to equity, including off-balance-sheet exposures.

Recall the [CAMELS](../C3%20Financial%20Statements/M4%20Analysis%20of%20Financial%20Institutions.md#camels-approach) framework, which covers many of the same areas.

Other users choose measures that fit their risks:

* **Asset managers**: redemption risk (the need for liquidity to meet withdrawals) and **tracking error** VaR against the benchmark, plus position limits.
* **Pension funds (DB plans)**: **surplus at risk** (the VaR of assets minus liabilities), and **interest rate and curve risk**, because the liabilities behave like long-duration bonds.
* **Insurers**: asset and liability matching, sensitivities, and scenario analysis of catastrophic losses.

## Market Risk

Risk measures are used to set constraints on the business:

* **Risk budgeting**: allocate the total risk the organization accepts across units or strategies. VaRs need to be added following the variance rule, considering correlation: with $\rho<1$, the total VaR is **less** than the sum of the units' VaRs. In the example above, at a mean of 0, A's VaR is $1.65\times20\%\times6\text{m}=1.98\text{m}$ and B's $1.65\times10\%\times4\text{m}=0.66\text{m}$, a sum of 2.64m, but the portfolio's is only 2.27m.
* **Capital allocation**: assign capital to activities in proportion to their risk (e.g., economic capital), and judge each by its return per unit of capital.
* **Position limits**: maximum size of a position, e.g., in one security, sector or country.
* **Scenario limits**: maximum loss allowed in a given scenario or stress test.
* **Stop-loss limits**: reduce or close a position when its loss over a period exceeds a set amount.
