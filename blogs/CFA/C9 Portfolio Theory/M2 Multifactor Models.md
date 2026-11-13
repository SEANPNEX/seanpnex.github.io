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
    .fx-concept-chart { height: 575px; }
}
</style>

# Multifactor Models

## Arbitrage Pricing Theory (APT)

### CAPM

The **efficient frontier** is the set of portfolios of risky assets with the highest expected return for each level of risk. When investors can also lend and borrow at the risk-free rate, the best portfolios combine the risk-free asset with one risky portfolio, the **market portfolio**, and the **capital asset pricing model (CAPM)** follows:

$$E(R_i)=R_f+\beta_i\left[E(R_M)-R_f\right]$$

**Beta** measures an asset's **systematic risk**: the sensitivity of its return to the market's return. There are two ways to calculate it:

1. **From covariance**:

$$\beta_i=\frac{\text{Cov}(R_i,R_M)}{\sigma_M^2}=\rho_{i,M}\,\frac{\sigma_i}{\sigma_M}$$

2. **By regression**: the slope of the regression of the asset's returns on the market's returns (the **market model**):

$$R_i=\alpha_i+\beta_i R_M+\varepsilon_i$$

* The beta of the market is 1.
* The beta of a portfolio is the weighted sum of its assets' betas: $\beta_p=\sum_i w_i\beta_i$.

**Systematic and unsystematic risk.** An asset's total risk splits into two parts:

$$\sigma_i^2=\beta_i^2\sigma_M^2+\sigma_{\varepsilon}^2$$

* **Unsystematic risk** ($\sigma_\varepsilon^2$, asset-specific) can be removed by **diversifying**. So investors will not be rewarded for bearing unsystematic risk.
* **Systematic risk** cannot be removed by diversifying, so it is the risk that is priced.

The CAPM is a model for **expected return**: the return investors require for an asset's systematic risk.

**Assumptions of CAPM:**

* Investors are risk averse, and choose portfolios by mean and variance only, over a single period.
* Investors have homogeneous expectations.
* Investors can borrow and lend any amount at the risk-free rate.
* There are no taxes or transaction costs, and assets are infinitely divisible.
* All assets are marketable, and markets are perfectly competitive: investors are price takers.

The assumptions are largely violated in practice.

**Security market line (SML).** The CAPM plotted against beta. Comparing an asset's forecast return with the SML shows whether it is under- or overpriced. The vertical gap is **Jensen's alpha**:

$$\alpha_i=R_i-\left[R_f+\beta_i\left(R_M-R_f\right)\right]$$

* **Above the SML** ($\alpha>0$): the asset offers more than its required return, so it is **underpriced** (undervalued): **buy**.
* **Below the SML** ($\alpha<0$): **overpriced**: **sell**.

<iframe
  class="fx-concept-chart"
  src="/charts/security-market-line.html"
  title="Security market line with stocks above and below it"
  loading="lazy"
></iframe>

### APT

APT uses fewer assumptions than CAPM. The basic assumptions of APT:

* A factor model describes asset returns.
* There are enough assets so investors can form well-diversified portfolios that eliminate asset-specific risk.
* No arbitrage opportunities exist among well-diversified portfolios.

The APT explains the **expected return** of a well-diversified portfolio with $K$ factors:

$$E(R_p)=R_F+\lambda_1\beta_{p,1}+\cdots+\lambda_K\beta_{p,K}$$

* The intercept is the risk-free rate $R_F$.
* $\beta_{p,j}$ is the portfolio's sensitivity to factor $j$.
* $\lambda_j$ is the **expected risk premium for risk factor $j$**: the expected return above $R_F$ of a portfolio with a sensitivity of 1 to factor $j$ and 0 to all other factors.

The combination part $\sum\lambda_j\beta_{p,j}$ is the risk premium: a linear combination of compensations for systematic risks. $\lambda$ is basically the market risk premium of CAPM, and the APT can be seen as a **multivariable version of CAPM**: CAPM is the special case with one factor, the market, and $\lambda=E(R_M)-R_F$.

The APT does not say which factors to use: the analyst picks the set of factors, then estimates their $\lambda$s so that the model holds for the chosen portfolios.

A calculation problem can give the betas and expected returns of some portfolios, and ask for the $\lambda$s: each portfolio gives one equation.

**Example.** In a one-factor APT model, portfolio A has an expected return of 11% and a factor beta of 1.5; portfolio B has 8% and 0.75. Both are well diversified. Find the risk-free rate and the factor risk premium.

<div class="reveal" tabindex="0">

$$11\%=R_F+1.5\,\lambda$$

$$8\%=R_F+0.75\,\lambda$$

Subtracting, $3\%=0.75\,\lambda$, so $\lambda=4\%$ and $R_F=11\%-1.5\times4\%=5\%$.

</div>

**Pure factor portfolio.** A portfolio with a sensitivity of 1 to **only one** factor, and 0 to all the others. Its expected return is $R_F+\lambda_j$, so it isolates one factor's risk premium. It can be built as a linear combination of other portfolios (and the risk-free asset): choose the weights so the sensitivities add up to 1 for the target factor and 0 for every other factor.

**Example.** In a two-factor model, portfolio A has sensitivities $(1.0,\ 0.5)$ and portfolio B $(0.5,\ 1.0)$. Build a pure factor 1 portfolio from A, B and the risk-free asset.

<div class="reveal" tabindex="0">

Choose weights $w_A$ and $w_B$ so that the factor 1 sensitivity is 1 and the factor 2 sensitivity is 0:

$$w_A+0.5\,w_B=1$$

$$0.5\,w_A+w_B=0$$

From the second, $w_A=-2w_B$; substituting, $-1.5\,w_B=1$, so $w_B=-2/3$ and $w_A=4/3$. The rest goes into the risk-free asset: $w_f=1-4/3+2/3=1/3$.

Check: factor 1 sensitivity $=4/3-1/3=1$; factor 2 sensitivity $=2/3-2/3=0$.

</div>

**Arbitrage opportunities.** Two well-diversified portfolios with the **same factor sensitivities** must have the **same expected return**. If they don't, there is an arbitrage opportunity: buy the one with the higher expected return, short the other. The position needs no net investment and has no factor risk, yet earns a positive return.

In alpha terms: a portfolio with **positive alpha** (above the line the factor model implies) is underpriced, so **long** it; **short** a portfolio with the same sensitivities that lies on the line.

In test questions, the portfolio to short might not be given directly: it can be a **linear combination of two given portfolios**, built to match the sensitivities of the mispriced one.

**Example.** In a one-factor model, the risk-free rate is 4%. Three well-diversified portfolios:

| Portfolio | Factor beta | Expected return |
| --- | --- | --- |
| A | 1.0 | 9.0% |
| B | 2.0 | 14.0% |
| C | 1.5 | 12.5% |

Is there an arbitrage opportunity? If so, how would you exploit it with 1 million, and what is the profit?

<div class="reveal" tabindex="0">

A gives $\lambda=9\%-4\%=5\%$, and B agrees: $4\%+2\times5\%=14\%$.

C's beta of 1.5 can be replicated with 50% A and 50% B:

* Beta: $0.5\times1.0+0.5\times2.0=1.5$
* Expected return: $0.5\times9\%+0.5\times14\%=11.5\%$

C offers 12.5% for the same factor risk, so it has an alpha of 1% and is underpriced.

**Trade:** buy 1 million of C, and short 500,000 of A and 500,000 of B. Net investment 0, net factor beta $1.5-1.5=0$.

**Profit:** $1\text{m}\times(12.5\%-11.5\%)=10{,}000$, riskless.

</div>

## Multifactor Models

There are four types of multifactor models, depending on the factors:

* **Macroeconomic factor models**: factors are **surprises** in macroeconomic variables.
* **Fundamental factor models**: factors are tied to company **attributes**, such as P/E or size.
* **Statistical factor models**: factors are found by statistical methods from the returns themselves.
* **Mixed factor models**: combine factors of the different types.

### Macroeconomic

The model estimates the **actual** return instead of the expected return:

$$
\begin{aligned}
R_i={}&E(R_i)+\beta_{i,1}F_1+\cdots\\
&+\beta_{i,K}F_K+\varepsilon_i
\end{aligned}
$$

The intercept is now the **expected return** instead of the risk-free rate. $\beta$ is the vector of slopes (sensitivities), and $F$ is the **surprise** vector. The surprises are in macroeconomic variables, like GDP growth, interest rates, inflation and credit spreads: each is the difference between the realized and the expected value of the variable.

If every surprise is zero, the asset earns its expected return (plus $\varepsilon_i$, the asset-specific surprise).

**Example.** A stock has an expected return of 9%. Its sensitivity to GDP growth surprises is 1.5, and to inflation surprises −0.8. GDP growth was expected at 3% but came in at 2%; inflation was expected at 2% but came in at 3%. Estimate the stock's return, ignoring $\varepsilon$.

<div class="reveal" tabindex="0">

Surprises: GDP $2\%-3\%=-1\%$; inflation $3\%-2\%=+1\%$.

$$
\begin{aligned}
R&=9\%+1.5\times(-1\%)\\
&\quad+(-0.8)\times(1\%)\\
&=9\%-1.5\%-0.8\%=6.7\%
\end{aligned}
$$

Both surprises hurt this stock: growth was weaker than expected, and inflation higher.

</div>

The calculation is the same in essence across these models: intercept plus the sum of sensitivities times factors.

### Fundamental

The model also estimates the **actual** return:

$$
\begin{aligned}
R_i={}&a_i+\beta_{i,1}F_1+\cdots\\
&+\beta_{i,K}F_K+\varepsilon_i
\end{aligned}
$$

* The intercept $a_i$ is estimated by regression and has no important economic meaning here (it is close to $E(R_i)$ in practice).
* The **sensitivities** $\beta$ are the company's **attributes** that explain cross-sectional differences in returns, like P/B, P/E, size or earnings growth.
* The **factors** $F$ are the **returns** associated with each attribute in that period (e.g., the return to the P/E factor), estimated by a cross-sectional regression of all the stocks' returns on their attributes.

Each sensitivity is **standardized**: how many standard deviations the company's attribute is from the average of all companies.

$$\beta_{i,k}=\frac{x_{i,k}-\mu_k}{\sigma_k}$$

where $x_{i,k}$ is the value of attribute $k$ for asset $i$, and $\mu_k$ and $\sigma_k$ are the attribute's mean and standard deviation across all assets.

So a sensitivity of 0 means an average company; +1 means one standard deviation above average. The basic understanding is still the slope term. (Dummy factors, such as industry membership, are 0 or 1 and are not standardized.)

**Example.** A two-factor fundamental model uses P/E and size. A stock's P/E is 20, against an average of 16 with a standard deviation of 8; its log market cap is 10, against an average of 9 with a standard deviation of 1.25. This period, the intercept is 2.0%, the P/E factor return is −1.0%, and the size factor return is 1.5%. Find the stock's sensitivities and its return, ignoring $\varepsilon$.

<div class="reveal" tabindex="0">

$$\beta_{\text{P/E}}=\frac{20-16}{8}=0.5$$

$$\beta_{\text{size}}=\frac{10-9}{1.25}=0.8$$

$$
\begin{aligned}
R&=2.0\%+0.5\times(-1.0\%)\\
&\quad+0.8\times1.5\%\\
&=2.0\%-0.5\%+1.2\%=2.7\%
\end{aligned}
$$

</div>

### Statistical Factor Model

A more abstract multivariable regression, without much economic logic behind it. It only requires statistical assumptions: the factors are extracted from historical returns, as in [multiple regression](../C1%20Quantity/M1%20Multiple%20Regression.md#multiple-linear-regression-model) with the factors found by the data rather than chosen by the analyst. The analysis is more on the statistical side:

* **Factor analysis models**: the factors are portfolios that best explain the **covariances** of the assets' returns.
* **Principal components models**: the factors are portfolios that best explain the **variances** of the returns.

The advantage is that few assumptions are needed; the disadvantage is that the factors are hard to interpret economically.

## Comparison Between Models

1. **The estimation**: macroeconomic models estimate each asset's sensitivities by **time-series** regressions on observed factor surprises. Fundamental models take the sensitivities from attributes and estimate the factor returns by **cross-sectional** regression. Statistical models estimate both from the return data.
2. **Residual terms**: in each, $\varepsilon_i$ is the asset-specific return not explained by the factors, and it is uncorrelated across assets.
3. **Intercept**: the expected return (macroeconomic), a regression intercept (fundamental), or not interpreted (statistical).
4. **Assumptions**: economic theory picks the factors in macroeconomic and fundamental models; statistical models only need statistical assumptions.

Differences between fundamental and macroeconomic factor models:

| | Macroeconomic | Fundamental |
| --- | --- | --- |
| **1. Intercept** | $E(R_i)$ | Regression intercept $a_i$ |
| **2. Factors** | **Surprises** in macro variables | **Returns** to attributes |
| **3. Sensitivities (β)** | Slopes from regression | Standardized attributes |
| **4. Data type** | Time series | Cross-section of attributes |
| **5. What is estimated** | The β (factors are observed) | The F (β are given) |

## Return Attribution

This part is mostly covered in Level III; here is just a brief introduction.

$$\text{Active return}=R_p-R_B$$

The active return splits into two parts:

$$
\begin{aligned}
\text{Active return}={}&\sum_k\left(\beta_{p,k}-\beta_{B,k}\right)\lambda_k\\
&+\text{Security selection}
\end{aligned}
$$

* **Return from factor tilts**: the portfolio's sensitivities differ from the benchmark's ($\beta$ is the exposure to each factor). It reflects skill in **class selection** (choosing factor exposures).
* **Return from security selection**: the rest. It reflects skill in selecting individual securities.

## Risk Attribution

**Active risk** is the standard deviation of active returns. It is the [tracking error](M1%20ETF.md#tracking-error) from the ETF module.

$$\text{Active risk}=\sigma\left(R_p-R_B\right)$$

The **information ratio** is the active return per unit of active risk:

$$\text{IR}=\frac{R_p-R_B}{\sigma\left(R_p-R_B\right)}$$

Recall the Sharpe ratio: it uses $R_f$ as the benchmark. Since $R_f$ is constant, $\sigma(R_p-R_f)=\sigma(R_p)$, so its denominator is just the portfolio's volatility.

Active risk squared splits into two parts:

$$
\begin{aligned}
\text{Active risk}^2={}&\text{Active factor risk}\\
&+\text{Active specific risk}
\end{aligned}
$$

* **Active factor risk**: from the factor tilts (class selection); systematic.
* **Active specific risk**: from security selection; unsystematic.

No calculation is required here.
