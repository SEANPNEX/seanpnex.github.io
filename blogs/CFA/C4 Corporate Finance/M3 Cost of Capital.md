# Cost of Capital

What drives a company's cost of capital; how to estimate the cost of debt for traded, non-traded, bank and lease debt; how to estimate the equity risk premium; and how to estimate the required return on equity for public, private and international companies. Two mini-cases put it all together. (2026 title: *Cost of Capital: Advanced Topics*.)

| Term | Meaning |
| --- | --- |
| **Cost of debt** | After-tax cost to the issuer, based on the return debt investors require |
| **Cost of equity** ($r_e$) | The return equity investors require; **not observable**, so it must be estimated |
| **ERP** | Expected return on equities minus a risk-free benchmark rate |
| **Synthetic credit rating** | A rating inferred from fundamentals (interest coverage, D/E) when the debt is unrated |
| **Matrix pricing** | Estimating a yield from traded bonds with a similar rating, maturity and coupon |
| **RIIL** | Rate implicit in the lease |
| **IBR** | Incremental borrowing rate: the rate on a collateralized loan over the same term |
| **SP / IP / SCRP** | Size premium / industry risk premium / specific-company risk premium |
| **CRP** | Country risk premium |

## Weighted Average Cost of Capital (WACC)

$$
WACC=w_dr_d(1-t)+w_pr_p+w_er_e
$$

where $t$ is the **marginal** tax rate and the weights (non-negative, summing to 1) are the **target** capital structure.

* $r_d=r_f+\text{credit spread}$ (pretax).
* $r_e=r_f+\beta\times ERP$ (CAPM, the most common model in practice): $\beta$ is the stock's sensitivity to the market; the ERP is what investors demand for holding equities rather than the risk-free asset.
* Preferred stock has a stated dividend and a prior claim over common, so usually $r_d < r_p < r_e$.

WACC is hard to estimate because each component can be estimated in many ways, with no single right one; the **long-term target** capital structure may differ from the current one; and the **marginal** tax rate may differ from the average or effective rate.

**Example (WACC with preferred stock and a capped interest deduction).** Target weights: debt 30%, preferred 10%, common 60%. Pretax $r_d$ 6%, $r_p$ 7%, $r_e$ 11%; marginal tax 25%.

* Interest deductible: 0.30 × 6% × 0.75 + 0.10 × 7% + 0.60 × 11% = 1.35% + 0.70% + 6.60% = **8.65%**.
* Already at the interest-deduction cap (no tax benefit on new debt): 0.30 × 6% + 0.70% + 6.60% = **9.10%**.

## What Drives the Cost of Capital

| **Top-down (external)** | **Bottom-up (company-specific)** |
| --- | --- |
| Capital availability | Revenue, earnings and cash flow volatility |
| Market conditions | Asset nature and liquidity |
| Legal and regulatory environment, country risk | Financial strength, profitability and leverage |
| Tax jurisdiction | Security features |

Top-down factors are systematic and show up in the **risk-free rate and ERP**; bottom-up factors are company-specific and show up in the **credit spread and beta**.

### Top-Down Factors

* **Capital availability**: more available capital → **lower** cost. Developed markets have deeper capital markets, stable currencies, property protection and the rule of law. Where corporate debt markets are thin, companies rely on bank loans or **shadow banking** (lenders not regulated as banks).
* **Market conditions**: higher inflation (higher $r_f$) → **higher**; recession (wider spreads and ERP) → **higher**; expansion (tighter spreads) → **lower**, and companies borrow more. Low rates, tight spreads, low rate and currency volatility, and predictable, transparent monetary policy all lower it.
* **Legal and regulatory**: stronger investor protection (often **common law**) and mature regulation → **lower**; weak systems (often civil law) → higher. In regulated industries (utilities, financials), regulators shape the capital structure, payout and pricing.
* **Tax**: a higher marginal tax rate → **lower** after-tax cost of debt (a bigger tax shield), **but only if** interest is deductible and the company has taxable income.

### Bottom-Up Factors

| Factor | Cost of capital |
| --- | --- |
| More stable sales (e.g., recurring or subscription revenue) | Lower |
| More revenue concentration | Higher |
| More predictable earnings | Lower |
| Higher operating and financial leverage | Higher |
| Higher ESG risk | Higher |
| More fungible, tangible assets | Lower |
| More liquid assets | Lower |
| Higher profitability, cash flow, interest coverage, liquidity | Lower |
| Higher leverage (debt/EBITDA, D/E) | Higher |

* **ESG risks** (an unmitigated carbon footprint, employee safety, weak governance, anti-takeover provisions) raise the cost of capital. Alternatively, the analyst can adjust the **cash flow forecasts** instead of the discount rate.
* **Collateral**: tangible assets can be pledged, which lowers the cost of **debt** but can raise the cost of **equity** (creditors have a prior claim).

**Security features:**

| Security | Feature | Cost of capital |
| --- | --- | --- |
| Debt | Callable | Higher |
| | Putable | Lower |
| | Convertible | Lower |
| Preferred stock | Cumulative | Lower |
| Common stock | Inferior cash flow or voting rights | Higher |

* A **call** benefits the issuer, so investors demand a higher yield at issue (the cost may fall later if rates drop and the bond is refinanced).
* A **put** or **conversion** option benefits the investor, so the yield at issue is lower, though the cost may rise later (refinancing at higher rates after a put; dilution after conversion).
* **Cumulative** preferred: missed dividends must be paid before any common dividend, so investors accept a lower return than on non-cumulative preferred.

**Example (two countries).** Country A: wide spreads, high rate volatility and inflation, low capital availability, 15% tax. Country B: narrow spreads, low volatility and inflation, high availability, 25% tax → **Country B** has the lower cost of capital. Raising A's tax rate from 15% to 25% lowers the after-tax cost of debt, **if** interest is deductible and the company has taxable income.

**Example (two companies).** Company 1 vs Company 2: cash and securities 20% vs 17%; intangibles 10% vs 24%; PP&E 46% vs 29%; net debt/EBITDA 2.1 vs 2.5; interest coverage 12.6 vs 7.9; low operating leverage; top-5 customers 15% vs 27%; **putable** debt (Company 2's is callable) → **Company 1** has the lower cost of capital on every count.

#### Exam traps

* A higher tax rate **lowers** WACC only through the debt tax shield; with no deductibility or no taxable income, there's no effect.
* A call feature → **higher** cost at issue; put and conversion → **lower**.
* Collateral lowers the cost of debt but may raise the cost of equity.

## Cost of Debt

The method depends on the type of debt (traded, non-traded, bank, lease), its liquidity, whether it is rated, and its currency.

* **Traded debt**: the YTM on the company's **straight** (option-free) debt, usually the longest maturity; if shorter bonds are more liquid, their YTM may be more reliable. The YTM is the current cost of issuing similar new debt.
* **Non-traded debt** (most private companies, some public ones): there's no quoted YTM, or it includes a large **liquidity premium**.
  * **Rated**: use **matrix pricing**, from other companies' bonds with similar maturity and rating.
  * **Unrated**: estimate a **synthetic credit rating** from fundamentals (interest coverage, leverage), then use the YTM on bonds with that rating and maturity, or $r_f$ plus that rating's spread.
  * The issuer's rating can differ from the ratings of individual issues (collateral, seniority, convertibility).

**Synthetic rating grid (Brunswix Firm):**

| Rating | Interest coverage (IC) | D/E |
| --- | --- | --- |
| AAA | IC > 10 | D/E < 35% |
| AA | 8 < IC < 10 | 35% < D/E < 40% |
| A | 5 < IC < 8 | 40% < D/E < 42% |
| BBB | 3 < IC < 5 | 42% < D/E < 44% |
| BB | 2 < IC < 3 | 44% < D/E < 50% |
| B | 1.4 < IC < 2 | 50% < D/E < 60% |
| CCC | 1.0 < IC < 1.4 | 60% < D/E < 70% |
| CC | 0.6 < IC < 1.0 | 70% < D/E < 80% |
| C | 0.3 < IC < 0.6 | 80% < D/E < 100% |
| D | IC < 0.3 | D/E > 100% |

**Example (Gamma Company).** IC 1.5 → **B**; D/E 43% → **BBB**. The ratios conflict, so use judgment and look at their **trend** (e.g., a rising IC could justify BB).

* **Bank loans**: use the rate on the most recent borrowing, if market conditions and the company's risk haven't changed materially since. Loans can be fixed or floating, and fully, partly or non-amortizing. **Amortizing** loans usually cost less than bullet loans, because principal is repaid over the term (lower default risk).
* **Leases**: a **finance lease** is like an amortizing secured loan, so it usually costs less than unsecured borrowing (operating leases are expensed). Under IFRS 16 / ASC 842, the **rate implicit in the lease** (RIIL) solves:

$$
\begin{aligned}
&\text{PV of lease payments}\\
&+\text{PV of residual value to lessor}\\
&=\text{Fair value of the asset}\\
&+\text{Lessor's direct initial costs}
\end{aligned}
$$

  * If the residual value and lessor costs are unknown, use the **incremental borrowing rate** (IBR); if the IBR is also unknown, use the non-traded debt methods. Most public lessees disclose their lease rates.
  * Where a finance lease counts as a purchase for tax, interest is deductible → use the after-tax rate.

**Example (G&S Airlines lease).** 15 years, payment €9.0m a year, aircraft fair value €100m, lessor direct cost €5m, residual €10m. Net cash flows: −105 at $t=0$, +9 a year, +19 in year 15.

* N = 15, PV = −105, PMT = 9, FV = 10 → **RIIL = 4.08%**.
* Cheaper than the unsecured IBR (6%) and equity (11%, and dilutive); avoids ownership risks, but **raises leverage**.

* **International**: the cost of debt should be in the **currency of the cash flows**. For less mature markets, add a country risk premium based on a **country risk rating (CRR)** that reflects economic conditions, political risk, exchange-rate risk and the development and regulation of securities markets: CRP = the median rate for the country's rating class − the benchmark country's rate. Sovereign risk (default on government debt) is only **one part** of country risk, which also covers political stability, economic competitiveness and human development.

**Example (country risk premiums).** Benchmark Country A (rating 1), median rate 4.0% → CRP 0%. Country C (rating 2), 4.5% → CRP **0.5%**. Country D (rating 8), 15.5% → CRP **11.5%**.

* **Interest deduction limits**: if the company has already hit the cap, **don't** tax-adjust the cost of new debt (there's no further tax benefit).

#### Exam traps

* Use the **marginal** cost of **new** debt, not the coupon on old debt.
* For thinly traded bonds, yields matrix-priced from liquid bonds understate the true cost: add a little for illiquidity.
* The RIIL needs the payments, residual value, asset fair value, lessor direct costs and lease term.

## Equity Risk Premium (ERP)

There are two broad approaches, **historical** (ex post) and **forward-looking** (ex ante). Both are used, and both have estimation error.

### Historical Approach

The ERP is the mean difference between the returns on a broad equity index and on government debt over a sample period:

$$
ERP = \overline{r_m-r_f}
$$

It assumes returns are **stationary**, markets are reasonably **efficient**, and the average return is an unbiased estimate of the expected return over the long run. Four choices drive the result:

**1. Equity index**: typically a broad, market-value-weighted index (S&P 500, Russell 3000, MSCI EAFE, All Ordinaries, Shanghai Composite).

**2. Time period**:

| Period | Advantages | Disadvantages |
| --- | --- | --- |
| Longer (generally **preferred**) | Changing volatility matters less; lower standard error | May not represent the **current** market |
| Shorter | Represents the current environment | More noise (may cover only part of a cycle, or a disruption) |

A run of strong recent returns inflates the historical mean, so it may **overestimate** the forward ERP.

**3. Mean**:

| Mean | Advantages | Disadvantages |
| --- | --- | --- |
| **Arithmetic** | Easy; uses all observations; consistent with single-period models (CAPM, multifactor) | Sensitive to extreme values; overestimates expected terminal wealth |
| **Geometric** (generally **preferred**) | Uses all observations; gives outliers less weight; estimates expected terminal wealth | |

The arithmetic mean is always at least the geometric mean, so an arithmetic ERP is **higher**.

**4. Risk-free proxy**:

| Proxy | Advantages | Disadvantages |
| --- | --- | --- |
| Long-term government bond YTM (industry practice) | Closer to the infinite duration of equity | Not fully risk-free (unknown coupon reinvestment) |
| Government bill rate | Exactly risk-free (zero-coupon, return known up front) | Duration far shorter than equity's |

With a normal upward-sloping yield curve, a bill-based ERP is **higher** than a bond-based one.

**Limitations.** The ERP can vary over time (a permanent shift makes long histories unrepresentative), and **survivorship bias** inflates historical estimates (failed companies drop out of the index, and back-filled index histories do the same).

**Example (Smith vs Müller).** Smith: Russell 3000, 35 years, 30-year T-bond, arithmetic mean: 12.96% − 6.25% = **6.71%**. Müller: S&P 500, 65 years, 3-month T-bill, geometric mean: 11.23% − 3.11% = **8.12%**. Both can be valid: they made different choices.

### Forward-Looking Approach

Forward-looking estimates use only expectations for the variables that drive future cash flows, so they suffer less from non-stationarity and data biases.

**Surveys.** Ask people (often experts) what they expect. Surveys show much higher ERPs in developing than in developed markets, and the answers tend to follow recent market returns.

**Dividend discount model.** From the Gordon growth model, $r_e=D_1/V_0+g$. If the P/E is constant, so that earnings, dividends and prices grow at the same rate:

$$
ERP= E\left(\frac{D_1}{V_0}\right)+E(g)-r_f
$$

* If the P/E is expected to change, adjust for it (prices can't outgrow earnings unless the P/E rises).
* Some analysts add index **buybacks** to the yield (total payout), and then consider how buybacks change growth.
* For fast-growing economies, use **three stages** (fast growth, transition, mature) and solve for the rate that equates the PV of all stages to the index level, then subtract $r_f$.

**Example (FTSE 100).** Yield 1.94%, growth 5.0%, gilt yield 1.63% → ERP = 1.94 + 5.0 − 1.63 = **5.31%**. The range of forecasts runs from 1.5 + 4 − 2.5 = **3%** to 3.5 + 6 − 1.5 = **8%** (useful for simulation).

**Macroeconomic model (Grinold–Kroner, 2001).**

$$
\begin{aligned}
ERP ={}& DY+\Delta\left(\tfrac{P}{E}\right)+i+g-\Delta S\\
&-E(r_f)
\end{aligned}
$$

| Term | Meaning | Common proxy |
| --- | --- | --- |
| $DY$ | Dividend yield | Index dividend yield |
| $\Delta(P/E)$ | Expected repricing | Analyst's view of over- or undervaluation (commonly 0) |
| $i$ | Expected inflation | Nominal − real (inflation-indexed) yield, similar maturity |
| $g$ | Real earnings growth | Real GDP growth |
| $\Delta S$ | Expected % change in shares outstanding | Depends on market and period; usually 0 unless given |

* $DY+\Delta(P/E)$ is the income and repricing return; $i+g-\Delta S$ is nominal earnings growth per share. Net **buybacks** make $\Delta S$ negative, which **adds** to return; dilution subtracts.
* Expected inflation, from nominal and inflation-indexed (TIPS) yields of similar maturity:

$$
\begin{aligned}
i&=\frac{1+YTM_{\text{nominal}}}{1+YTM_{\text{TIPS}}}-1\\
&\approx YTM_{\text{nominal}}-YTM_{\text{TIPS}}
\end{aligned}
$$

* More reliable where listed equities are a **large share of the economy** (developed markets); not appropriate where the stock market is small (many developing countries).

**Examples.**

* 10-year Treasury 2.3%, TIPS 0.66% → $i$ = 1.023/1.0066 − 1 = **1.6%**.
* Scenario 1: $r_f$ 2.5, $i$ 1.6, $g$ 3, $\Delta(P/E)$ 0, DY 2.2, $\Delta S$ −0.7 → {2.2 + 0 + [1.6 + 3.0 − (−0.7)]} − 2.5 = **5.0%**.
* Scenario 2: $r_f$ 3, $i$ 3, $g$ 2, $\Delta(P/E)$ 1, DY 2, $\Delta S$ 0 → {2.0 + 1.0 + [3.0 + 2.0 − 0]} − 3.0 = **5.0%**.
* Higher expected inflation: **no effect** on the ERP ($i$ and $r_f$ rise together). Lower expected income: the ERP **falls**.
* Same market, two methods: historical 9.96 − 3.15 = **6.81%**; Grinold–Kroner {1.8 − 1.2 + (1.9 + 2.7 − 0)} − 0.96 = **4.24%**.

**Limitations of forward-looking estimates:**

* **Surveys**: sampling and response bias; behavioral biases (**recency**, **confirmation**).
* **DDM**: assumes a constant P/E; needs adjusting when earnings, dividends and prices grow at different rates.
* **Macro models**: errors in macro data; behavioral biases in forecasting.

**Example (a new market with 20 years of history).** Index returns back-filled for 4 years before launch from the surviving members → **upward** survivorship bias. A 5-year border conflict that depressed returns and won't recur → historical ERP biased **downward**. Inverted curve (short rate 9%, 10-year 7%): a required return built on the short rate is biased **upward**. Grinold–Kroner with $i$ = 4% (long-term), $g$ = 4%, $\Delta(P/E)$ = 1%, DY 1%, $r_f$ = 7% (10-year) → {1 + 1 + [4 + 4 + 0]} − 7 = **3.0%**; so average-risk stocks require at least 7% + 2% to 3% = **9% or more**.

#### Exam traps

* Grinold–Kroner: use the **long-term** inflation forecast and the **long-term** bond yield; buybacks ($-\Delta S$) add return, dilution subtracts.
* Bill-based and arithmetic-mean ERPs are **higher** than bond-based and geometric ones.
* Survivorship bias pushes historical ERPs **up**; a one-off crisis in the sample pushes them **down**.

## Cost of Equity

| Situation | Models |
| --- | --- |
| Listed company | DDM, bond yield plus risk premium (BYPRP), CAPM, Fama–French |
| Private company | Expanded CAPM, build-up |
| International | Country spread model, global CAPM, international CAPM |

### Dividend Discount Model

For a listed company with stable, predictable dividends:

* **Gordon growth**: $r_e=\dfrac{D_1}{P_0}+g$
* **Multiyear forecast**: solve for the IRR, $P_0 = \sum_{t=1}^n \dfrac{D_t}{(1+r_e)^t}+\dfrac{P_n}{(1+r_e)^n}$

**Examples.**

* Company X: $P_0$ €40, $D_1$ €1.04, $g$ 4% → 1.04/40 + 0.04 = **6.6%**.
* Multiyear: $P_0$ USD40; dividends 1.00, 1.25, 1.35, 1.50; $P_4$ USD45 → cash flows −40, 1, 1.25, 1.35, 46.5 → IRR = **6.015%**.
* $D_0$ USD2.50, $P_0$ USD50, $g$ 5% → 2.625/50 + 0.05 = **10.25%**. A higher $g$ raises $r_e$ (both $D_1$ and $g$ rise); a lower price raises $r_e$.
* Preferred stock (a perpetuity, $g$ = 0): $r_p = D/P$.

### Bond Yield Plus Risk Premium (BYPRP)

$$
r_e =r_d+RP
$$

where $r_d$ is usually the YTM on the company's **long-term** debt, and $RP$ is often the historical average difference between returns on an equity index and a corporate bond index.

* The cost of debt is a natural starting point: equity investors demand more than the company's creditors.
* The premium is fairly arbitrary and may not be stable over time.
* It needs traded debt; if there are several bonds with different features, there's no rule on which yield to use (common practice: the long-term bond).

**Example.** Bond yield 4.3% + historical premium 6.1% = **10.40%**.

### CAPM

$$
r_e = r_f+\hat\beta\,(ERP)
$$

Beta comes from the **market model**, a regression of the stock's excess returns on the market's:

$$
(r_{i,t}-r_{f,t}) = b_0 + b_1(r_{m,t}-r_{f,t}) + \varepsilon_t
$$

Check the index, the estimation period (enough data vs too old) and the $r_f$ proxy: with an upward-sloping curve, a bill rate gives a meaningfully **lower** $r_e$ than a long bond yield. A non-traded company can use a **peer beta, unlevered and relevered** (see Mini-Case 2).

### Fama–French Models

$$
\begin{aligned}
r_e = r_f &+\beta_1ERP + \beta_2 SMB\\
&+ \beta_3 HML+ \beta_4 RMW\\
&+ \beta_5 CMA
\end{aligned}
$$

The three-factor model uses only the first three factors.

* **SMB** (small minus big): size premium
* **HML** (high minus low book-to-market): value premium
* **RMW** (robust minus weak): profitability premium
* **CMA** (conservative minus aggressive): investment premium

The betas come from regressing the company's excess returns on the factors. The market beta in a multifactor model **differs** from the CAPM beta, and different models give different answers. A short-term $r_f$ in the regression can understate $r_f$ when the curve slopes up.

**Examples.**

* Five-factor: 3.82% + 1.2(6.5%) + 0.10(1.8%) − 0.20(4.0%) + 0.5(2.0%) + 0.2(1.0%) = **12.2%**.
* Three-factor with an intercept: $r_e - r_f$ = 0.003 + 1.2(0.05) − 0.4(0.01) + 0.2(0.04) = 0.067 → $r_e$ = **8.7%** (with $r_f$ 2%).
* CAPM vs three-factor ($r_f$ 6%, market 10%): CAPM 6% + 0.8(4%) = **9.2%**; three-factor 6% + 0.01 + 0.75(4%) + 0.15(5%) + 0.05(2%) = **10.85%**. SMB and HML add 0.85%.

### Private Companies

**Expanded CAPM:**

$$
r_e = r_f +\beta_{\text{peer}}(ERP)+SP+SCRP
$$

* $\beta_{\text{peer}}$: beta from a peer group of listed companies in the same industry.
* **Size premium (SP)**: inversely related to size; based on the smallest market-cap decile, i.e., the return on an average-risk **micro-cap** stock. Historical SPs may need adjusting **down** for a healthy small company (the small-cap sample includes fallen, distressed companies).
* **Specific-company risk premium (SCRP)**: geography, key person and other hard-to-diversify risks.

Steps: (1) find the peer beta; (2) compute the CAPM $r_e$; (3) decide whether size and company premiums are warranted; (4) add them.

| SCRP: qualitative factors | SCRP: quantitative factors |
| --- | --- |
| Industry, competitive position, management experience | Financial and operating leverage |
| Customer, supplier and geographic concentration | Cash flow and earnings volatility |
| Governance, asset type (tangible vs intangible) | Earnings predictability, pricing power |

Private companies are also **illiquid**, but illiquidity is usually handled as a **discount for lack of marketability** on the value, not as a premium in $r_e$.

**Build-up approach:**

$$
r_e=r_f+ERP+SP+IP+SCRP
$$

Here the ERP is **not beta-adjusted** (a beta of 1 is implied): $r_f$ + ERP is the required return on an average-risk **large-cap** stock. Adding SP gives a micro-cap return; then add the **industry risk premium** (IP, for riskier industries) and the SCRP. Useful when there are no comparable listed companies, or their comparability is doubtful.

### International Companies

**Country spread model** for an emerging equity market:

$$
ERP = ERP_{\text{developed}} + \lambda\times CRP
$$

where $\lambda$ is the company's exposure to the local country. The **CRP** compensates for the extra risk of investing in an emerging market (economic conditions, expropriation, political risk). In its basic form, it is the **sovereign yield spread**: the yield on the emerging market's government bonds denominated in the developed market's currency, minus the yield on similar-maturity developed-market government bonds. A **bond** spread may not suit an **equity** premium, so Damodaran scales it:

$$
CRP = \text{Sovereign spread}\times \frac{\sigma_{\text{equity}}}{\sigma_{\text{bond}}}
$$

where $\sigma_{\text{equity}}$ and $\sigma_{\text{bond}}$ are the volatilities of the local equity and bond markets. This needs return histories for both.

**Example (Makinassi).** Headquarters in Country X (spread 1.5%); Country Y (40% of sales) has a spread of 3.2%, $\sigma_E$ 4.0% and $\sigma_B$ 2.5%. The relevant spread is 3.2 − 1.5 = 1.7%; CRP = 1.7% × 4.0/2.5 = 2.72%; times the 40% exposure = **1.088%** added to $r_e$.

**Global CAPM.** A single factor: a global market index as $r_m$, assuming no significant risk differences across countries. Problem: emerging and developed returns have low correlation, which gives low or even **negative** betas. Adding a domestic index factor helps, if local data are reliable.

**International CAPM.**

$$
\begin{aligned}
E(r_e)={}&r_f+\beta_G\left[E(r_{gm})-r_f\right]\\
&+\beta_c\left[E(r_c)-r_f\right]
\end{aligned}
$$

* $r_{gm}$: a global index (MSCI ACWI, FTSE All-World); $\beta_G$ is lower for companies less connected to the global economy.
* $r_c$: a **wealth-weighted** foreign currency index (expected currency change plus that country's $r_f$); $\beta_c$ depends on how sensitive the cash flows are to exchange rates (imports, exports, investments).

**Choosing a method.** For operations only in **developed** countries, the global or international CAPM is reasonable. For operations in **developing** countries, it's less clear; the sovereign-spread CRP may work, but it relies on historical rates.

#### Exam traps

* Multiyear DDM: discount **each** $D_t$ at $(1+r_e)^t$, and include $P_n$ in the last year's cash flow.
* BYPRP adds the premium to the company's **own** bond yield, not to $r_f$.
* The build-up approach uses the ERP **without** beta; the expanded CAPM uses a **peer** beta.
* A private company's illiquidity → a valuation discount (DLOM), not an extra premium.
* Country spread model: multiply the CRP by the company's **exposure** $\lambda$; Damodaran scales the spread by $\sigma_{\text{equity}}/\sigma_{\text{bond}}$ (> 1).

## Mini-Case 1: Gretna Engines

A small-cap listed engine maker: cyclical, high fixed costs, assets mainly inventory and PP&E. Capital: debt 20% (7% coupon, 7 years, BBB, thinly traded), preferred 15% (7% dividend, par 1,000, price 980, redeemable at par), common 65%. It plans to issue unsecured debt to retire the preferred.

* **Why its cost of capital is high**: cyclical, volatile revenue and earnings; illiquid assets; high operating leverage.
* **Cost of debt by matrix pricing** (four liquid BBB bonds, semiannual):

| Bond | Coupon | Maturity | Price | YTM |
| --- | --- | --- | --- | --- |
| 1 | 5% | 4 | 99.50 | 5.140% |
| 2 | 7% | 4 | 106.46 | 5.191% |
| 3 | 6% | 8 | 100.00 | 6.000% |
| 4 | 8% | 8 | 112.42 | 6.021% |

  The 4-year average is **5.166%** and the 8-year average **6.011%**, a step of (6.011 − 5.166)/4 = 0.211% a year → 5 years 5.377%, 6 years 5.588%, 7 years **5.799% ≈ 5.8%**. Gretna's thin trading means its true yield is slightly higher.
* **Cost of preferred**: 70/980 = **7.14%**.
* After replacing the preferred with debt (35% debt, 65% equity), the new debt will cost more than 5.8% but less than 7.14%. Redeeming at par when the price is 980 implies low $r_f$ and/or tight spreads, i.e., good timing. To cut the cost further, issue **secured**, **putable** or **convertible** debt.
* **Cost of equity**: CAPM 2.1% + 0.91 × 5.5% = **7.11%**; five-factor 2.1% + 0.95(5.5) + 0.45(1.8) + 0.14(3.9) − 0.19(3.1) + 0.30(3.7) = **9.20%**; BYPRP 5.8% + 6.2% = **12.0%**.
* The CAPM's 7.11% is **below** the 7.14% cost of preferred, so it isn't credible: common stock is junior to preferred.
* The ERP was estimated with a **bill rate** and the **arithmetic** mean, both of which push it **up**.

## Mini-Case 2: Precision Irrigation

A private software company in a higher-risk emerging market, compared with listed software peers.

| | Precision | Industry |
| --- | --- | --- |
| Total debt | 18.4 | 296.4 |
| Total assets | 105.2 | 1,276.2 |
| EBITDA | 12.2 | 177.4 |
| Interest | 1.6 | 23.5 |
| Tax rate | 20% | 25% |
| Beta | | 1.25 |

Local 10-year $r_f$ 5.41%; ERP 6%, SP 5%, IP 1%, SCRP 6%, CRP 2%.

* **Cost of debt**: IC = 12.2/1.6 = **7.63**; D/E = 18.4/(105.2 − 18.4) = **0.2120** → synthetic rating **A**, spread 1.46%. $r_d$ = 5.41 + 1.46 + 2.00 (CRP) = **8.87%**; after tax, 8.87% × 0.8 = **7.096%**.
* **Size premium near the top of the 3–6% range**: Precision's assets are under a tenth of the industry average.
* **SCRP**: **higher** because of more intangibles (47% vs 32%) and less cash (9% vs 14%); 70% of revenue from five nearby customers (customer and geographic concentration); a founder-CEO with no succession plan (key person). **Lower** because of 60% subscription revenue and lower leverage (D/E 0.2120 vs 0.3025; IC 7.63 vs 7.55).
* **Beta**: unlever the industry beta with the **industry's** tax rate and D/E, then relever with Precision's:

$$
\begin{aligned}
\beta_{\text{asset}}&=\frac{1.25}{1+(1-0.25)(0.3025)}\\
&=1.019
\end{aligned}
$$

$$
\begin{aligned}
\beta_{\text{Precision}}&=1.019\\
&\quad\times[1+(1-0.20)(0.2120)]\\
&=1.19
\end{aligned}
$$

* **Expanded CAPM** (including IP and CRP): 5.41 + 1.19(6) + 5 + 1 + 6 + 2 = **26.55%**.
* **Build-up** (as computed in the solution, without IP): 5.41 + 6 + 5 + 6 + 2 = **24.41%**.
* **WACC** with $w_d$ = 18.4/105.2 = 0.1749 and $w_e$ = 0.8251: 0.1749 × 8.87% × 0.8 + 0.8251 × 24.41% = **21.38%**.

#### Exam traps

* Unlever with the **comparable's** tax rate and D/E; relever with the **subject's**.
* D/E from book data is debt ÷ (assets − debt), not debt ÷ assets.
* A cost of common equity below the cost of preferred is a red flag.
* Add the CRP to **both** debt and equity when the case says country risk applies to both.

> [!NOTE]
>
> **Textbook typos.**
>
> * Grinold–Kroner Scenario 1: the solution text says "the ERP estimate is 3.6%", but its own calculation gives **5.0%**.
> * Mini-Case 2: Exhibit 19 prints BB as "3 < IC < 1.4" (it should read 3 < IC < 5). The unlevering text says "using the marginal tax rate of 20%", but the formula correctly uses the industry's 25%. The headline numbers don't match the calculations: expanded CAPM "26.56%" (26.55%), build-up "25.41%" (24.41%; 25.41% would include the 1% IP), WACC "21.13%" (21.38%, using 24.41%). The expanded CAPM there includes IP although the general formula doesn't; follow the inputs a question gives.
