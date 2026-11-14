# Cost of capital

This module (2026 title: *Cost of Capital: Advanced Topics*) covers what drives a company's cost of capital, how to estimate the cost of debt for traded, non-traded, bank and lease debt, how to estimate the equity risk premium, and how to estimate the required return on equity for public, private and international companies. The two mini-cases put everything together.

* [Learning Outcomes and Key Terms](#learning-outcomes-and-key-terms): what the module asks for, plus core vocabulary
* [WACC](#weighted-average-cost-of-capital-wacc): the formula and why it is hard to estimate
* [Cost of capital factors](#cost-of-capital-factors): top-down vs bottom-up drivers, security features
* [Cost of Debt](#cost-of-debt): traded, non-traded (matrix pricing, synthetic rating), bank debt, leases, country risk
* [Equity Risk Premium (ERP)](#equity-risk-premium-erp): historical vs forward-looking (survey, DDM, Grinold–Kroner)
* [Cost of Equity](#cost-of-equity): DDM, BYPRP, CAPM, Fama–French, private companies, international adjustments
* [Mini-Case 1: Gretna Engines](#mini-case-1-gretna-engines): public company, all methods side by side
* [Mini-Case 2: Precision Irrigation](#mini-case-2-precision-irrigation): private emerging-market company vs peers
* [Quick Recall](#quick-recall): one-line summary of each topic

## Learning Outcomes and Key Terms

The candidate should be able to:

* Explain top-down and bottom-up factors that impact the cost of capital
* Compare methods used to estimate the cost of debt
* Explain historical and forward-looking approaches to estimating an equity risk premium
* Compare methods used to estimate the required return on equity
* Estimate the cost of debt or required return on equity for a public company and a private company
* Evaluate a company's capital structure and cost of capital relative to peers

| Term | Meaning |
| --- | --- |
| **Cost of debt** | After-tax cost to the issuer, based on the return debt investors require |
| **Cost of equity** ($r_e$) | Return equity investors require; **not observable**, must be estimated |
| **ERP** | Expected return on equities minus a benchmark risk-free rate |
| **Synthetic credit rating** | Rating inferred from fundamentals (IC, D/E) when the debt is unrated |
| **Matrix pricing** | Estimating a yield from traded bonds with similar rating, maturity and coupon |
| **RIIL** | Rate implicit in the lease |
| **IBR** | Incremental borrowing rate: rate on a collateralized loan over the same term |
| **SP / IP / SCRP** | Size premium / industry risk premium / specific-company risk premium |
| **CRP** | Country risk premium |

### Weighted Average Cost of Capital (WACC)

$$
WACC=w_dr_d(1-t)+w_pr_p+w_er_e
$$
where $t$ is the **marginal** tax rate and the weights are non-negative and sum to 1.

* $r_d=r_f+\text{credit spread}$ (pre-tax)
* $r_e=r_f+\beta\times ERP$ (CAPM, the most common model in practice)
  * $\beta$ captures the stock's sensitivity to the market; the ERP captures what investors demand for holding equities rather than the risk-free asset
* Preferred equity: stated dividend and higher claim than common → smaller premium → $r_d < r_p < r_e$ (usually)

Why WACC is hard to estimate:

* Many methods for each component; there is no single "right" one
* Needs an assumption about the **long-term target** capital structure, which may differ from the current one
* Needs the **marginal** tax rate, which may differ from the average or effective rate

## Cost of capital factors

| **Top-down, External**                            | **Bottom-up, Company specific**                 |
| ------------------------------------------------- | ----------------------------------------------- |
| Capital availability                              | Revenue, earnings and cash flow volatility      |
| Market conditions                                 | Asset nature and liquidity                      |
| Legal and regulatory considerations, country risk | Financial strength, profitability, and leverage |
| Tax jurisdiction                                  | Security features                               |

Top-down factors are systematic and show up in the **risk-free rate and ERP**; bottom-up factors are company-specific and show up in the **credit spread and beta**.

* Capital availability: greater availability → **Lower** (developed markets: deeper markets, stable currencies, property protection, rule of law). Where corporate debt markets are thin, companies rely on bank loans or **shadow banking** (lending by institutions not regulated as banks)
* Market condition
  * Higher inflation (higher $r_f$): **Higher**
  * Recession (spreads and ERP widen): **Higher**
  * Expansion (spreads tighten): **Lower**; companies borrow more
  * Low interest rates, tight spreads, low rate and exchange-rate volatility: **Lower**. Predictable, transparent monetary policy also lowers it
* Legal and regulatory: stronger investor protection (often **common law**) and more mature regulation → **Lower**; weak systems (often civil law) → higher. Regulated industries (utilities, financials) have capital structure, payout and pricing shaped by regulators
* Higher marginal income tax rate: **Lower** after-tax cost of debt (bigger tax shield), **only if** interest is deductible and the company has taxable income

* Revenue, earning, and cash flow volatility: recurring/subscription revenue (telecoms, streaming) is more stable than cyclical or pay-per-use revenue

| Factor                                  | **Cost of Capital** |
| --------------------------------------- | ------------------- |
| Higher stability in sales               | Lower               |
| Higher revenue concentration            | Higher              |
| Higher earnings predictability          | Lower               |
| Higher operating and financial leverage | Higher              |
| Higher ESG risk                         | Higher              |

ESG risks (carbon footprint without mitigation, employee safety, weak governance, anti-takeover provisions) raise the cost of capital. Alternatively the analyst can adjust the **cash flow forecasts** instead of the discount rate.

* Asset nature and liquidity: tangible assets can be pledged as collateral. Collateralized debt lowers the cost of **debt** but can raise the cost of **equity** (creditors have a prior claim)

| Factor                                | **Cost of Capital** |
| ------------------------------------- | ------------------- |
| Higher % of fungible, tangible assets | Lower               |
| Higher % of liquid assets             | Lower               |

* Financial strength (leverage measured by debt/EBITDA, D/E, interest coverage)

| Factor                              | **Cost of Capital** |
| ----------------------------------- | ------------------- |
| Higher profitability                | Lower               |
| Higher cash flow generation         | Lower               |
| Higher interest coverage, liquidity | Lower               |
| Higher leverage ratios              | Higher              |

* Security features

|                     | **Feature**                      | **Cost of Capital** |
| ------------------- | -------------------------------- | ------------------- |
| **Debt**            | Callability                      | Higher              |
|                     | Putability                       | Lower               |
|                     | Convertibility                   | Lower               |
| **Preferred stock** | Cumulative                       | Lower               |
| **Common stock**    | Inferior cash flow/voting rights | Higher              |

* Call benefits the **issuer** → investors demand a higher yield at issuance (cost may fall later if rates drop and the bond is refinanced)
* Put and conversion benefit the **investor** → lower yield at issuance, but possibly higher cost later (refinancing at higher rates after a put; equity dilution after conversion)
* Cumulative preferred: missed dividends must be paid before common dividends → investors accept a lower return than on non-cumulative

**Textbook example (GW, two countries).** Country A: wide spreads, high rate volatility and inflation, low capital availability, 15% tax. Country B: narrow spreads, low volatility and inflation, high availability, 25% tax → **Country B** has the lower cost of capital. Raising A's tax rate from 15% to 25% lowers the after-tax cost of debt, **assuming** interest is deductible and the company has taxable income.

**Textbook example (GW, two companies).** Company 1: cash + securities 20% vs 17%, intangibles 10% vs 24%, PP&E 46% vs 29%, net debt/EBITDA 2.1 vs 2.5, IC 12.6 vs 7.9, low operating leverage, top-5 customers 15% vs 27%, **putable** debt (Company 2: callable) → **Company 1** has the lower cost of capital on every count.

#### Exam traps

* A higher tax rate **lowers** WACC only through the debt tax shield; no deductibility or no taxable income → no effect.
* Call feature → **higher** cost at issuance; put and conversion → **lower**.
* Collateral lowers the cost of debt but may raise the cost of equity.

## Cost of Debt

Method depends on: type of debt (traded, non-traded, bank, lease), liquidity, whether it is rated, and currency.

* Traded debt: YTM on the company's **straight** (option-free) debt, usually the longest maturity; if shorter bonds are more liquid, their YTM may be more reliable. YTM = current cost of issuing similar new debt
* Non-traded debt (most private, some public companies): a quoted YTM is missing or contains a large **liquidity premium**
  * Rated: **matrix pricing** from bonds of other companies with similar maturity and rating
  * Not rated: **synthetic credit rating** from fundamentals (IC, leverage), then use the YTM on bonds with that rating and maturity, or $r_f$ + that rating's spread
  * The issuer rating can differ from individual issue ratings (collateral, seniority, convertibility)

**Synthetic credit rating example** (Textbook, Brunswix Firm, Exhibit 7)

| **Rating class** | **Interest Coverage Ratio** | **D/E**          |
| ---------------- | --------------------------- | ---------------- |
| AAA              | IC > 10 times               | D/E < 35%        |
| AA               | 8 < IC < 10                 | 35% < D/E < 40%  |
| A                | 5 < IC < 8                  | 40% < D/E < 42%  |
| BBB              | 3 < IC < 5                  | 42% < D/E < 44%  |
| BB               | 2 < IC < 3                  | 44% < D/E < 50%  |
| B                | 1.4 < IC < 2                | 50% < D/E < 60%  |
| CCC              | 1.0 < IC < 1.4              | 60% < D/E < 70%  |
| CC               | 0.6 < IC < 1.0              | 70% < D/E < 80%  |
| C                | 0.3 < IC < 0.6              | 80% < D/E < 100% |
| D                | IC < 0.3                    | D/E > 100%       |

**Textbook example (Gamma Company).** IC 1.5 → **B**; D/E 43% → **BBB**. The ratios conflict, so the rating is not clear-cut: look at the **trend** in the ratios and use judgement (e.g. a rising IC could justify BB).

* Bank loans: the rate on the most recent bank borrowing, if market conditions and the company's risk have not changed materially since. Fixed or floating; fully, partially or non-amortizing

> [!note]
>
> Amortizing loans typically have lower cost of debt than non-amortizing (bullet) loans, because part of the principal is repaid over the term → lower default risk.

* Leases

  * A **finance lease** is like an amortizing secured loan, so it usually costs less than unsecured borrowing. Operating leases are expensed
  * Rate implicit in the lease (RIIL), IFRS 16 / ASC 842:

  $$
  \text{PV of lease payment}+\text{PV of residual value to lessor}=\text{Fair value of leased asset}+\text{Lessor's direct initial cost}
  $$

  * Incremental borrowing rate (IBR): the rate on a collateralized loan over the same term. Use it if the residual value and lessor costs are unknown; if the IBR is also unknown, use the non-traded debt methods. Most public lessees disclose their lease rates
  * Where a finance lease counts as a purchase for tax, interest is deductible → use the after-tax rate

**Textbook example (G&S Airlines lease).** 15 years, PMT €9.0m, FV of aircraft €100m, lessor direct cost €5m, residual €10m. Net cash flows: −105 at $t=0$, +9 a year, +19 in year 15.

* N = 15, PV = −105, PMT = 9, FV = 10 → **RIIL = 4.08%**
* Cheaper than the unsecured IBR (6%) and equity (11%, and dilutive); avoids ownership risks, but **raises leverage**

* International: the cost of debt should reflect the **currency of the cash flows**. For less mature markets, add a country risk premium using a **country risk rating (CRR)** based on economic conditions, political risk, exchange-rate risk and securities market development/regulation. CRP = median rate for the rating class − benchmark country's rate

**Textbook example (Exhibit 8).** Benchmark Country A (rating 1) median 4.0% → CRP 0%. Country C (rating 2) median 4.5% → CRP **0.5%**. Country D (rating 8) 15.5% → **11.5%**.

> [!note]
> Sovereign risk (likelihood a country defaults on its debt) is only **one component** of country risk, which also covers political stability, economic competitiveness and human development.

* Interest deduction limits: if the company has already hit the cap, **don't** tax-adjust the cost of new debt (no further tax benefit).

#### Exam traps

* Use the **marginal** cost of **new** debt, not the coupon on old debt.
* Thinly traded bonds: matrix-priced yields from liquid bonds understate the true cost (add a little for illiquidity).
* Lease RIIL needs: payments, residual value, fair value of the asset, lessor direct costs, lease term.

## Equity Risk Premium (ERP)

Two broad approaches: **historical** (ex post) and **forward-looking** (ex ante). Both are used; both have estimation error.

### Historical Approach

$$
ERP = \overline{r_m-r_f}
$$

Mean difference between a broad equity index return and a government debt return over a sample period.

**Key assumptions**:

* Returns are stationary
* Market are relatively efficient
* Average return should be an unbiased estimate of expected returns in the long run

**Key decisions** (four):

* Selection of equity index
  * Typically broad-based, market-value-weighted indexes (S&P 500, Russell 3000, MSCI EAFE, All Ordinaries, Shanghai Composite)
* Selection of time period

| Time Period         | **Advantages**                                   | **Disadvantages**                                            |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| Longer time period  | Fluctuating volatility has less effect; lower standard error (generally **preferred**) | *Not* representative of the *current market*                 |
| Shorter time period | Representative of the current market environment | Increases the likelihood of *greater noise* (covering only a portion of a business cycle or a period of disruption) |

A run of strong recent returns inflates the historical mean → may **overestimate** the forward ERP.

* Selection of mean type

|                     | **Advantages**                                               | **Disadvantages**                                            |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Arithmetic Mean** | •  *Easy* to calculate  <br> • Considers all observations <br> • Consistent with single-period models (CAPM, multifactor)   | • Sensitive to  *extreme* values  <br> • Overestimates expected terminal value of wealth |
| **Geometric Mean**  | • Considers all observations  <br> •  *Gives outliers less weight* <br> • Estimates expected terminal value of wealth | (none listed)                                                             |

The geometric mean is **generally preferred**; arithmetic ≥ geometric, so the arithmetic ERP is higher.

* Selection of risk-free rate proxy

|                      | **Advantages**                                  | **Disadvantages**                              |
| -------------------- | ----------------------------------------------- | ---------------------------------------------- |
| Government bond YTM  | *More closely matches* infinite equity duration | *Not* a completely risk-free return (unknown coupon reinvestment) |
| Government bill rate | *Exact* estimate of the risk-free rate (zero-coupon, return known up front) | *Not closely matches* infinite equity duration |

Industry practice favors the **long-term bond YTM**. With a normal upward-sloping curve, a bill-based ERP is **higher** than a bond-based one.

**Limitation**:

* ERP can vary over time (a permanent shift makes long histories unrepresentative)
* Survivorship bias tend to inflate historical estimates of the ERP (failed companies drop out of the index; back-filled index history does the same)

**Textbook example (Smith vs Müller).** Smith: Russell 3000, 35 years, 30-year T-bond, arithmetic: 12.96% − 6.25% = **6.71%**. Müller: S&P 500, 65 years, 3-month T-bill, geometric: 11.23% − 3.11% = **8.12%**. Both can be valid: different choices on the four decisions.

### Forward-looking Approach

Based only on expectations for variables that drive future cash flows; less subject to non-stationarity and data biases.

* Survey-based estimates
* Dividend discount models
* Macroeconomic modeling

#### Survey-based

* Assess expectation by asking people (often experts) what they expect
* Surveys show much higher ERPs in developing than developed markets
* Estimates tend to be sensitive to recent market returns

#### Dividend Discount Models (DDM)

From the Gordon growth model $V_0=\frac{D_1}{r_e-g}$, so $r_e=\frac{D_1}{V_0}+g$. Assuming constant P/E, earnings, dividends, and price will grow at the same rate:
$$
ERP= E(\frac{D_1}{V_0})+E(g)-r_f
$$

* If P/E is expected to expand or contract, adjust for it (price can't grow faster than earnings unless P/E rises)
* Some analysts add index **buybacks** to the yield (total payout); then consider how buybacks change growth
* Fast-growing economies: use **three stages** (fast, transition, mature) and solve for the IRR that equates the PV of all stages to the index level, then subtract $r_f$

**Textbook example (FTSE 100).** Yield 1.94%, growth 5.0%, gilt 1.63% → ERP = 1.94 + 5.0 − 1.63 = **5.31%**. Forecast extremes: 1.5 + 4 − 2.5 = **3%** to 3.5 + 6 − 1.5 = **8%** (use for simulation).

#### Macroeconomic Model

Grinold–Kroner (2001):

$$
ERP = [DY+\Delta(\frac{P}{E})+i+g-\Delta S]-E(r_f)
$$

> [!note]
>
> In this module $\Delta S$ is the expected **percent change in shares outstanding** (dilution); it is usually assumed to be 0 unless given. Net buybacks make $\Delta S$ negative, which **adds** to return. The Economics module discusses how to model it. More reliable where public equities are a **large share of the economy** (developed markets).

| **Factors**           |                       |                              | **Symbol**    | **Common proxy** |
| --------------------- | --------------------- | ---------------------------- | ------------- | ---------------- |
| Dividend yield        |                       |                              | $DY$          | Index dividend yield |
| Expected capital gain | Expected repricing    |                              | $\Delta(P/E)$ | Analyst view of over/undervaluation (commonly 0) |
|                       | Earnings growth/share | Expected inflation           | $i$           | Nominal − real yield, similar maturity |
|                       |                       | Real economic growth         | $g$           | Real GDP growth |
|                       |                       | Change in shares outstanding | $\Delta S$    | Depends on market and period |

> [!note]
>
> Expected inflation $i$ can be estimated from $\frac{1+YTM_{treasury\ bond}}{1+YTM_{TIPS}}-1\approx YTM_{treasury\ bond}-YTM_{TIPS}$

**Textbook examples (condensed).**

* 10-year Treasury 2.3%, TIPS 0.66% → $i$ = 1.023/1.0066 − 1 = **1.6%**.
* Scenario 1: $r_f$ 2.5, $i$ 1.6, $g$ 3, $\Delta(P/E)$ 0, DY 2.2, $\Delta S$ −0.7 → {2.2 + 0 + [1.6 + 3.0 − (−0.7)]} − 2.5 = **5.0%**.
* Scenario 2: $r_f$ 3, $i$ 3, $g$ 2, $\Delta(P/E)$ 1, DY 2, $\Delta S$ 0 → {2.0 + 1.0 + [3.0 + 2.0 − 0]} − 3.0 = **5.0%**.
* Higher expected inflation: **no effect** on the ERP ($i$ and $r_f$ rise together). Lower expected income: ERP **falls**.
* Not appropriate where the stock market is a small part of the economy (many developing countries).
* Historical vs forward on the same market: 9.96 − 3.15 = **6.81%** historical; {1.8 − 1.2 + (1.9 + 2.7 − 0)} − 0.96 = **4.24%** Grinold–Kroner.

> [!note]
> Textbook issue: in the Scenario 1 solution the text says "the ERP estimate is 3.6%", but its own calculation (and the inputs) give **5.0%**.

#### Limitations

* Survey
  * Sampling and response bias
  * Behavioral biases: **recency** and **confirmation** bias
* DDM
  * Assumes constant P/E; needs an adjustment when earnings, dividends and prices grow at different rates
* Macroeconomic models
  * Modelling errors from macro data
  * Behavioral biases in forecasting

**Textbook practice problems (new market, 20 years of history).** Index returns back-filled for 4 years before launch using the surviving constituents → **upward** survivorship bias. A 5-year border conflict that depressed returns and won't persist → historical ERP biased **downward**. Inverted curve (short 9%, 10-year 7%): a short-rate-based required return is biased **upward**. Grinold–Kroner with $i$ = 4% (long-term), $g$ = 4%, $\Delta(P/E)$ = 1%, DY 1%, $r_f$ = 7% (10-year) → {1 + 1 + [4 + 4 + 0]} − 7 = **3.0%**; average-risk stocks then require at least 7% + 2% to 3% → **9% or more**.

#### Exam traps

* Grinold–Kroner: use the **long-term** inflation forecast and the **long-term** bond yield; $-\Delta S$ means buybacks add return and dilution subtracts.
* Bill-based or arithmetic-mean ERPs are **higher** than bond-based or geometric ones.
* Survivorship bias pushes historical ERPs **up**; a non-recurring crisis in the sample pushes them **down**.

## Cost of Equity

Models

* DDMs
* Bond yield plus risk premium approach (BYPRP)
* Risk-based models: CAPM, Fama-French
* Private companies: expanded CAPM, build-up
* International: country spread / CRR models, global CAPM, international CAPM

### DDM

* Requirements: Publicly traded, stable and predictable dividend
* Gordon growth model:
  * $r_e=\frac{D_1}{P_0}+g$
* Multiyear financial forecast (solve for the IRR):
  * $P_0 = \left[\sum_{t=1}^n \frac{D_t}{(1+r_e)^t}\right]+\frac{P_n}{(1+r_e)^n}$

**Textbook examples (condensed).**

* Company X: $P_0$ €40, $D_1$ €1.04, $g$ 4% → 1.04/40 + 0.04 = **6.6%**.
* Multiyear: $P_0$ USD40; dividends 1.00, 1.25, 1.35, 1.50; $P_4$ USD45 → cash flows −40, 1, 1.25, 1.35, 46.5 → IRR = **6.015%**.
* $D_0$ USD2.50, $P_0$ USD50, $g$ 5% → 2.625/50 + 0.05 = **10.25%**. Higher $g$ → higher $r_e$ (both $D_1$ and $g$ rise); lower price → higher $r_e$.
* Preferred (perpetuity, $g$ = 0): $r_p = D/P$.

### BYPRP

$$
r_e =r_d+RP
$$

where $r_d$ is usually the YTM on the company's **long-term** debt and $RP$ can be estimated using historical mean difference in returns between equity market index and corporate bond index.

* Estimating cost of debt provides a starting point estimate of the return demanded by debt investor
* Determination of RP is relatively arbitrary
* Requires company to have traded debt
* If a company has multiple traded debt with different features, there is no rule on which yield to use (common practice: long-term bond)

**Textbook example.** Bond yield 4.3% + historical premium 6.1% = **10.40%**. Concerns: non-stationary premiums; no traded debt or several yields.

### CAPM

$$
r_e = r_f+\hat\beta(ERP)
$$

Beta from the **market model** regression of excess returns:
$$
(r_{i,t}-r_{f,t}) = b_0 + b_1(r_{m,t}-r_{f,t}) + \varepsilon_t
$$

Choices to check: the index, the estimation period (enough data vs too old), and the $r_f$ proxy (with an upward-sloping curve a bill rate gives a meaningfully **lower** $r_e$ than a long bond yield). A non-traded company can use a **peer beta, unlevered and relevered** (see Mini-Case 2).

### Fama-French Models

Three-factor: $r_e = r_f +\beta_1ERP + \beta_2 SMB + \beta_3 HML$. Five-factor:
$$
r_e = r_f +\beta_1ERP + \beta_2 SMB + \beta_3 HML + \beta_4 RMW + \beta_5 CMA
$$

* SMB: Small minus big, size premium
* HML: High(book-to-market) minus low, value premium
* RMW: Robust minus weak, profitability premium
* CMA: Conservative minus aggressive, investment premium

Betas come from regressing the company's excess returns on the factors. The market beta in a multifactor model **differs** from the CAPM beta; different models give different answers. Short-term $r_f$ in the regression can understate $r_f$ when the curve slopes up.

**Textbook examples (condensed).**

* FF5: 3.82% + 1.2(6.5%) + 0.10(1.8%) − 0.20(4.0%) + 0.5(2.0%) + 0.2(1.0%) = **12.2%**.
* Three-factor with an intercept: $r_e - r_f$ = 0.003 + 1.2(0.05) − 0.4(0.01) + 0.2(0.04) = 0.067 → $r_e$ = **8.7%** (with $r_f$ 2%).
* CAPM vs FF3 ($r_f$ 6%, market 10%): CAPM 6% + 0.8(4%) = **9.2%**; FF3 6% + 0.01 + 0.75(4%) + 0.15(5%) + 0.05(2%) = **10.85%**. SMB and HML add 0.85%.

### Extended CAPM

The textbook's name for the private-company version is the **expanded CAPM**:

$$
r_e = r_f +\beta_{\text{peer}}(ERP)+SP+SCRP
$$

* $\beta_{\text{peer}}$: Industry $\beta$, from a peer group of publicly traded companies in the same industry
* SP: Size premium, inversely related to size. Based on the lowest market-cap decile → return on an average-risk **micro-cap** stock. Historical SPs may need a **downward** adjustment for a healthy small company (the small-cap sample includes fallen, distressed companies)
* SCRP: Specific company risk premium (geography, key person, other hard-to-diversify risks)

Steps: (1) peer beta, (2) CAPM $r_e$, (3) decide whether size/company premia are warranted, (4) add them.

| SCRP: qualitative factors | SCRP: quantitative factors |
| --- | --- |
| Industry, competitive position, management experience | Financial and operating leverage |
| Customer and supplier concentration, geographic concentration | Cash flow and earnings volatility |
| Governance model, asset type (tangible vs intangible) | Earnings predictability, pricing power |

> [!note]
> Private companies are also **illiquid**, but illiquidity is usually handled as a **discount for lack of marketability** on value, not as a premium in $r_e$.

### Build-up Approach

$$
r_e=r_f+ERP+SP+IP+SCRP
$$

>[!note]
>
>The ERP here is **not beta-adjusted**: a beta of 1 is implicit, so $r_f$ + ERP is the required return on an average-risk **large-cap** stock. Add SP (beta-adjusted, to isolate size) → micro-cap return; then IP and SCRP. Useful when comparable public companies are unavailable or of doubtful comparability.

* IP: Industry risk premium (for riskier industries)

### Country Risk Premium (CRP)

**Country spread model** for an emerging equity market:
$$
ERP = ERP_{\text{developed market}} + \lambda\times CRP
$$
where $\lambda$ is the company's exposure to the local country.

**CRP** is required by investor for the added risk of investing in emerging market (economic conditions, expropriation, political risk). Basic version: sovereign yield spread = yield on the emerging market's bonds **denominated in the developed market's currency** − yield on similar-maturity developed government bonds. Problem: a **bond** spread may not suit an **equity** premium. Damodaran's refinement:
$$
CRP = \text{Sovereign yield spread}\times \frac{\sigma_{\text{equity}}}{\sigma_{\text{bond}}}
$$

* $\sigma_{\text{equity}}$: Volatility of the local country's equity market
* $\sigma_{\text{bond}}$: Volatility of the local country's bond market
* Requires the local country to have both equity and bond return histories

**Textbook example (Makinassi).** HQ Country X spread 1.5%; Country Y (40% of sales) spread 3.2%, $\sigma_E$ 4.0%, $\sigma_B$ 2.5%. Relevant spread 3.2 − 1.5 = 1.7%; CRP = 1.7% × 4.0/2.5 = 2.72%; × 0.40 exposure = **1.088%** added to $r_e$.

### Global CAPM

* Single factor: A global market index as $r_m$
* Assuming no significant risk differences across countries
* Problem: low correlation between emerging and developed returns → low or even **negative** beta. Adding a domestic index factor helps, if local data are reliable

### International CAPM

$$
E(r_e)=r_f+\beta_G(E(r_{gm})-r_f)+\beta_c(E(r_c)-r_f)
$$

* $r_{gm}$: Global index (MSCI ACWI, FTSE All-World)
* $r_c$: **wealth-weighted** foreign currency index (expected FX change + that country's $r_f$)
* $\beta_G$ is lower for companies less connected to the global economy; $\beta_C$ depends on FX sensitivity of cash flows (imports, exports, investments)

Choosing a method: operations global but only in **developed** countries → GCAPM or ICAPM are reasonable. Operations in **developing** countries → less clear; the sovereign-spread CRP may work but is based on historical rates.

**Worked example (added, not from the textbook): WACC with preferred stock and a capped interest deduction.** Target weights: debt 30%, preferred 10%, common 60%. Pre-tax $r_d$ 6%, $r_p$ 7%, $r_e$ 11%, marginal tax 25%.

* Deductible: 0.30 × 6% × 0.75 + 0.10 × 7% + 0.60 × 11% = 1.35% + 0.70% + 6.60% = **8.65%**
* Already at the interest-deduction cap (no tax adjustment on new debt): 0.30 × 6% + 0.70% + 6.60% = **9.10%**

#### Exam traps

* Multiyear DDM: discount **each** $D_t$ at $(1+r_e)^t$ and include $P_n$ in the last year's cash flow.
* BYPRP adds a premium to the company's **own** bond yield, not to $r_f$.
* Build-up uses the ERP **without** beta; expanded CAPM uses a **peer** beta.
* Illiquidity of a private company → valuation discount (DLOM), not an extra premium.
* Country spread model: multiply the CRP by the company's **exposure** $\lambda$; Damodaran scales the spread by $\sigma_{equity}/\sigma_{bond}$ (> 1).

## Mini-Case 1: Gretna Engines

Small-cap, publicly traded engine maker; cyclical, high fixed costs, assets mainly inventory and PP&E. Capital: debt 20% (7% coupon, 7 years, BBB, thinly traded), preferred 15% (7% dividend, par 1,000, price 980, redeemable at par), common 65%. Plan: issue unsecured debt to retire the preferred.

* Higher cost of capital: cyclical, volatile revenue/earnings; illiquid assets; high operating leverage.
* **Cost of debt by matrix pricing** (four liquid BBB bonds, semiannual):

| Bond | Coupon | Maturity | Price | YTM |
| --- | --- | --- | --- | --- |
| 1 | 5% | 4 | 99.50 | 5.140% |
| 2 | 7% | 4 | 106.46 | 5.191% |
| 3 | 6% | 8 | 100.00 | 6.000% |
| 4 | 8% | 8 | 112.42 | 6.021% |

  4-year average **5.166%**, 8-year average **6.011%**; step = (6.011 − 5.166)/4 = 0.211% a year → 5y 5.377%, 6y 5.588%, 7y **5.799% ≈ 5.8%**. Gretna's thin trading means its true yield is slightly higher.
* **Preferred**: 70/980 = **7.14%**.
* After replacing preferred with debt (35% debt / 65% equity): new debt costs more than 5.8% but less than 7.14%.
* Favorable timing (redeeming at par above a 980 price) implies low $r_f$ and/or tight spreads. To cut the cost further: issue **secured**, **putable** or **convertible** debt.
* **Cost of equity**: CAPM 2.1% + 0.91 × 5.5% = **7.11%**; FF5 2.1% + 0.95(5.5) + 0.45(1.8) + 0.14(3.9) − 0.19(3.1) + 0.30(3.7) = **9.20%**; BYPRP 5.8% + 6.2% = **12.0%**.
* CAPM 7.11% is **below** the 7.14% cost of preferred → not credible (common is junior to preferred).
* KM's ERP used a **bill rate** and the **arithmetic** mean → both push the ERP **up**.

## Mini-Case 2: Precision Irrigation

Private software company in a higher-risk emerging market vs public software peers. Precision: total debt 18.4, assets 105.2, EBITDA 12.2, interest 1.6, tax 20%. Industry: debt 296.4, assets 1,276.2, EBITDA 177.4, interest 23.5, beta 1.25, tax 25%. $r_f$ (10-year local) 5.41%; ERP 6%, SP 5%, IP 1%, SCRP 6%, CRP 2%.

* **Cost of debt**: IC = 12.2/1.6 = **7.63**; D/E = 18.4/(105.2 − 18.4) = **0.2120** → synthetic **A**, spread 1.46%. $r_d$ = 5.41 + 1.46 + 2.00 (CRP) = **8.87%**; after tax 8.87% × 0.8 = **7.096%**.
* **SP near the top of the 3–6% range**: Precision's assets are under 1/10 of the industry average.
* **SCRP higher**: intangibles 47% vs 32% and less cash (9% vs 14%); 70% of revenue from five nearby customers (customer and geographic concentration); founder-CEO with no succession plan (key person). **Lower**: 60% subscription revenue; lower leverage (D/E 0.2120 vs 0.3025; IC 7.63 vs 7.55).
* **Beta**: unlever the industry beta at the **industry's** tax rate and D/E, relever at Precision's:

$$
\beta_{asset}=\frac{1.25}{1+(1-0.25)(0.3025)}=1.019 \qquad \beta_{Precision}=1.019\,[1+(1-0.20)(0.2120)]=1.19
$$

* **Expanded CAPM** (with IP and CRP): 5.41 + 1.19(6) + 5 + 1 + 6 + 2 = **26.55%**.
* **Build-up** as computed in the solution (no IP): 5.41 + 6 + 5 + 6 + 2 = **24.41%**.
* **WACC** with $w_d$ = 18.4/105.2 = 0.1749, $w_e$ = 0.8251: 0.1749 × 8.87% × 0.8 + 0.8251 × 24.41% = **21.38%**.

> [!note]
> Textbook issues in Mini-Case 2:
> * Exhibit 19 prints BB as "3 < IC < 1.4"; from the pattern it should read 3 < IC < 5.
> * The unlevering text says "using the marginal tax rate of 20%" but the formula correctly uses the **industry's 25%**.
> * Headline numbers don't match the calculations: expanded CAPM "26.56%" (calc 26.55%), build-up "25.41%" (calc 24.41%; 25.41% would be the result **with** the 1% IP), WACC "21.13%" (calc 21.38%). The WACC uses 24.41%.
> * The expanded CAPM here includes IP although Equation 19 does not; follow the inputs the question gives.

#### Exam traps

* Unlever with the **comparable's** tax rate and D/E; relever with the **subject's**.
* D/E from book data: debt ÷ (assets − debt), not debt ÷ assets.
* A common-equity cost below the preferred cost is a red flag.
* Add the CRP to **both** debt and equity when the case says the country risk applies to both.

## Quick Recall

* WACC = $w_dr_d(1-t)+w_pr_p+w_er_e$, marginal tax rate, target weights.
* Top-down (availability, market conditions, legal/country, tax) vs bottom-up (volatility, asset type, financial strength, security features). Call ↑ cost; put, conversion, cumulative ↓.
* Cost of debt: traded YTM; non-traded → matrix pricing or synthetic rating; bank → latest loan rate; lease → RIIL or IBR; country → CRR premium.
* Historical ERP: four choices (index, period, mean, $r_f$); survivorship bias ↑. Forward: survey, DDM $D_1/V_0+g-r_f$, Grinold–Kroner $DY+\Delta P/E+i+g-\Delta S-r_f$.
* $r_e$: DDM, BYPRP ($r_d$ + RP), CAPM, FF3/FF5; private: expanded CAPM ($\beta_{peer}$ + SP + SCRP), build-up ($r_f$ + ERP + SP + IP + SCRP).
* CRP = spread × $\sigma_E/\sigma_B$, times exposure $\lambda$; GCAPM and ICAPM for developed-market operations.
