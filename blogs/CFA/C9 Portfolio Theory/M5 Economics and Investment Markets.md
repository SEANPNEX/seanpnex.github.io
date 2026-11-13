# Economics and Investment Markets

## Framework of Analysis

The framework is the **discounted cash flow (DCF)** model from Level I: an asset's value is the present value of its expected cash flows. For equities, it is the dividend discount model (DDM).

$$P_0=\sum_{t=1}^{N}\frac{E(CF_t)}{(1+r)^t}$$

* If an economic factor affects an asset's market value, it must affect one or more of the following:
  1. The timing and/or amount of the expected cash flows
  2. One or more of the discount rate components
     1. Default-free interest rate
     2. Expected inflation
     3. Risk premiums
        * Risk premiums are not only determined by the risk magnitude, but also by the investor's perception of risk

The discount rate is built up from these components, each covered below:

| Symbol | Component | Required by |
| --- | --- | --- |
| $\iota$ | Real default-free rate | All assets |
| $\theta$ | Expected inflation | All nominal assets |
| $\pi$ | Inflation (uncertainty) premium | Longer-term nominal assets |
| $\gamma$ | Credit premium | Credit-risky bonds, equities, real estate |
| $\kappa$ | Equity premium over credit-risky bonds | Equities, real estate |
| $\phi$ | Liquidity premium | Illiquid assets, e.g., commercial real estate |

## Real Default-Free Rate of Return

$\iota$ is the **real default-free rate of return**: default-free and unaffected by inflation. It can be observed in the market from inflation-indexed government bonds, such as **TIPS** in the US.

It comes from investors' choice between consumption today and investment for consumption in the future. Investing means giving up consumption today, so investors weigh the **marginal utility** of consumption now against later.

The **inter-temporal rate of substitution** is the ratio of the marginal utilities of consumption:

$$m_t=\frac{\text{MU of consumption at }t}{\text{MU of consumption today}}$$

* Marginal utility is diminishing: the more an investor consumes, the less an extra unit is worth.
* So $m_t$ **decreases in good economic states** (consumption is high, an extra unit is worth little), and increases in bad ones.

Assuming a zero-coupon, inflation-indexed, risk-free bond with a par of 1, its price today is the expected rate of substitution, $P_0=E(m_1)$, so the real rate is

$$\iota=\frac{1}{E(m_1)}-1$$

For example, if $E(m_1)=0.98$, then $\iota=1/0.98-1=2.04\%$.

**Risk-neutral present value plus a covariance term.** For a risky asset with an uncertain payoff $P_1$:

$$P_0=\frac{E(P_1)}{1+\iota}+\text{Cov}(P_1,\ m_1)$$

* The first term is what a risk-neutral investor would pay.
* For most risky assets, $P_1$ is high in good times, when $m_1$ is low, so the **covariance is negative**: the asset sells for less than its risk-neutral value, i.e., it offers a **risk premium**. The larger the negative covariance, the larger the premium.
* When an asset pays off well when the economy goes bad (e.g., a safe government bond in a recession), the covariance may be **positive**: the asset is a hedge, so investors pay more than the risk-neutral value and accept a lower return.

The real default-free rate is positively related to expected real GDP growth: higher expected growth means higher future consumption, a lower future marginal utility, and so a higher rate.

## Inflation Premium

$$(1+r_{\text{nominal}})=(1+r_{\text{real}})\,(1+E(\pi))$$

* In the short term, only the **expected** inflation matters: uncertainty about inflation over a short horizon is small.
* In the long term, investors also require a premium for the **uncertainty** of inflation, $\sigma(\pi)$.

We update the notation here only: $\theta=E(\pi)$ is the expected inflation, and the inflation term $\pi$ now stands for the **inflation risk premium**, the compensation for $\sigma(\pi)$.

* **Short-term (T-bills)**: discount at the real default-free rate plus expected inflation:

$$P_0=\frac{CF}{1+\iota+\theta}$$

* **Longer-term default-free bonds**: add the inflation risk premium:

$$P_0=\sum_t\frac{CF_t}{(1+\iota+\theta+\pi)^t}$$

**Taylor rule.** The short-term rate a central bank should target to balance the risks of inflation and recession:

$$
\begin{aligned}
R={}&(R_{\text{neutral}}+\theta)+0.5\,(\theta-\theta^*)\\
&+0.5\,(Y-Y^*)
\end{aligned}
$$

* $R$ is the central bank policy rate implied by the Taylor rule
* $R_{\text{neutral}}$ is the neutral real policy interest rate
* $\theta$ is the current inflation rate and $\theta^*$ is the target inflation rate
* $Y$ is the growth of actual real GDP and $Y^*$ is the growth of target real GDP

**Example.** The neutral real policy rate is 2%, inflation is 4% against a 2% target, and real GDP is growing at 3% against a 2% target. Find the policy rate the Taylor rule implies.

<div class="reveal" tabindex="0">

$$
\begin{aligned}
R&=(2\%+4\%)+0.5(4\%-2\%)\\
&\quad+0.5(3\%-2\%)\\
&=6\%+1\%+0.5\%=7.5\%
\end{aligned}
$$

Inflation and growth are both above target, so the rule calls for a tight policy, well above the neutral nominal rate of 6%.

</div>

**Recession vs inflation.** When the economy weakens, the central bank cuts the policy rate to support growth; when inflation rises above target, it raises the rate. Short-term rates therefore move with the business cycle much more than long-term rates.

**Break-even inflation rate (BEI).** The difference between the yield on a nominal government bond and an inflation-indexed bond of the same maturity:

$$\text{BEI}=\theta+\pi$$

So the BEI is **not** a pure forecast of inflation: it also includes the inflation risk premium. E.g., with a 10-year nominal yield of 4.0% and a TIPS yield of 1.5%, the BEI is 2.5%; if expected inflation is 2.2%, the inflation risk premium is 0.3%.

**Slope of the yield curve.** The curve reflects the expected path of policy rates and the business cycle:

* In a recession, the central bank cuts short-term rates, and the curve is typically **steep**: short rates are low, and are expected to rise as the economy recovers.
* Late in an expansion, the central bank raises rates to fight inflation, and the curve **flattens**. Tight policy can **invert** the curve (short rates above long rates), and an inverted curve has often preceded a recession.

## Credit Premium

The credit spread ($\gamma$) is the extra return required for credit risk. It is covered in Fixed Income: see [Credit Spreads](../C6%20Fixed%20Income/M4%20Credit%20Analysis%20Models.md#credit-spreads).

* **Bonds**: a credit-risky bond's yield is the default-free yield plus the credit premium, $\iota+\theta+\pi+\gamma$.
* **Economic growth**: the credit premium rises in a weak economy, when defaults are more likely and recoveries lower, and falls in a strong one.
* **Rating**: lower-rated bonds have higher spreads, and their spreads rise much more in downturns; high-grade spreads are more stable.
* **Cycle**: spreads widen ahead of and during recessions and narrow in expansions, so credit-risky bonds, like equities, pay off badly in bad times.
* **Sovereign credit risk**: governments can also default, especially on debt in a foreign currency they cannot print. Sovereign spreads depend on fiscal position, external debt, growth and political risk.

## Equity Risk Premium

The **equity risk premium** $\lambda$ is the extra return required for equities over default-free bonds. Relative to credit-risky bonds, the extra premium is $\kappa$:

$$\lambda=\gamma+\kappa$$

so the required return on equity is $\iota+\theta+\pi+\gamma+\kappa$.

**Consumption hedging property.** Equities have poor consumption hedging properties: earnings and dividends fall in recessions, exactly when investors' marginal utility is highest. Their payoffs covary negatively with $m_t$, so investors require a large premium. Equities are also the residual claim, behind creditors.

**Valuation multiples** are positively related to expected economic (earnings) growth and negatively related to the required rate of return.

* **Leading P/E**: price over next year's expected earnings, $P_0/E_1$.
* **Trailing P/E**: price over the last year's earnings, $P_0/E_0$.
* **Justified P/E**: the P/E implied by the DDM with constant growth.

Where $b$ is the retention ratio (so $1-b$ is the payout ratio), $r$ is the required return on equity, $g=b\times\text{ROE}$ is the growth rate, and $D_1=E_1(1-b)$:

$$\frac{P_0}{E_1}=\frac{D_1/(r-g)}{E_1}=\frac{1-b}{r-g}$$

$$\frac{P_0}{E_0}=\frac{D_1/(r-g)}{E_0}=\frac{(1-b)(1+g)}{r-g}$$

**Justified P/B.** With $D_1=E_1(1-b)$ and $E_1=\text{ROE}\times B_0$ (ROE on beginning book value):

$$
\begin{aligned}
\frac{P_0}{B_0}&=\frac{D_1/(r-g)}{B_0}=\frac{\text{ROE}(1-b)}{r-g}\\
&=\frac{\text{ROE}-g}{r-g}
\end{aligned}
$$

$P/B>1$ $\iff$ $\text{ROE}>r$ $\iff$ residual income $>0$: the company earns more than its required return on equity. If this is satisfied, the valuation multiples are positively related to the earnings growth rate, and negatively related to the required rate of return.

**Example.** A company retains 40% of earnings, earns an ROE of 12.5%, and its required return is 9%. Find its justified leading and trailing P/E, and its justified P/B.

<div class="reveal" tabindex="0">

$g=0.4\times12.5\%=5\%$.

* Leading P/E: $\dfrac{0.6}{9\%-5\%}=15$
* Trailing P/E: $15\times1.05=15.75$
* P/B: $\dfrac{12.5\%-5\%}{9\%-5\%}=1.875$, above 1 because ROE exceeds $r$.

</div>

**Defensive vs cyclical.** Defensive or non-cyclical industries (e.g., utilities, consumer staples) have earnings that are relatively stable across the cycle, so they pay off better in bad times, and investors require a lower premium. Cyclical industries' earnings, and multiples, swing with the economy.

### Investment Strategy

**Growth vs value.**

* Growth stocks
  * Strong earnings growth
  * High P/E and low dividend yield
  * May have low (or no) positive earnings now, with value coming from expected growth
* Value stocks
  * Operate in more mature markets with lower earnings growth
  * Low P/E and high dividend yield

Growth stocks' value lies further in the future, so they are more sensitive to the discount rate (a longer "duration").

**Small cap vs large cap.**

* Small-cap stocks tend to underperform large-cap stocks in difficult economic conditions.
  * Small-cap companies tend to have less diversified businesses.
  * Small-cap companies have more difficulty raising financing, particularly during recessions, and are thus less able to weather an economic storm.
* Investors demand a higher risk premium to invest in small-cap stocks relative to large-cap stocks, due to their higher volatility.

**Sector rotation.**

* During economic expansion:
  * Rotate into growth stocks when they are expected to outperform value stocks.
  * Rotate into small-cap stocks when they are expected to outperform large-cap stocks.
  * Rotate into cyclical stocks when they are expected to outperform countercyclical stocks.

## Liquidity Premium

The **liquidity premium**, denoted $\phi$, compensates for an asset that cannot be sold quickly at a fair price.

**Commercial real estate** is the main example. It is:

* **Illiquid**: properties are large, unique, and slow and costly to sell, so investors require $\phi$.
* **Cyclical**: rents and occupancy fall in recessions, and tenants can default, so it also requires credit and equity premiums.
* A partial **hedge against inflation**, through rents that rise with prices.

So its required return includes most of the components:

$$r_{\text{CRE}}=\iota+\theta+\pi+\gamma+\kappa+\phi$$
