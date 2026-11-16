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

$$
\begin{aligned}
r_d&=r_f+\text{Credit spread}\quad\text{(pretax)}\\
r_e&=r_f+\beta\times ERP\quad\text{(CAPM)}
\end{aligned}
$$

* The CAPM is the most common model in practice: $\beta$ is the stock's sensitivity to the market; the ERP is what investors demand for holding equities rather than the risk-free asset.
* Preferred stock has a stated dividend and a prior claim over common, so usually $r_d < r_p < r_e$.

WACC is hard to estimate because each component can be estimated in many ways, with no single right one; the **long-term target** capital structure may differ from the current one; and the **marginal** tax rate may differ from the average or effective rate.

#### Example: WACC with Preferred Stock and a Capped Interest Deduction

| Component | Target weight | Pretax cost |
| --- | ---: | ---: |
| Debt | 30% | 6% |
| Preferred | 10% | 7% |
| Common | 60% | 11% |

The marginal tax rate is 25%.

**Case 1. Interest is deductible.**

$$
\begin{aligned}
WACC&=0.30\times 6\%\times 0.75+0.10\times 7\%+0.60\times 11\%\\
&=1.35\%+0.70\%+6.60\%=8.65\%
\end{aligned}
$$

**Case 2. The company is already at the interest-deduction cap,** so new debt gets no tax benefit:

$$WACC=0.30\times 6\%+0.70\%+6.60\%=9.10\%$$

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

#### Example: Two Countries

| Factor | Country A | Country B |
| --- | --- | --- |
| Credit spreads | Wide | Narrow |
| Rate volatility and inflation | High | Low |
| Capital availability | Low | High |
| Tax rate | 15% | 25% |
| **Cost of capital** | Higher | **Lower** |

Raising A's tax rate from 15% to 25% would lower its after-tax cost of debt, **if** interest is deductible and the company has taxable income.

#### Example: Two Companies

| Factor | Company 1 | Company 2 | Lower cost |
| --- | ---: | ---: | --- |
| Cash and securities / assets | 20% | 17% | 1 |
| Intangibles / assets | 10% | 24% | 1 |
| PP&E / assets | 46% | 29% | 1 |
| Net debt/EBITDA | 2.1 | 2.5 | 1 |
| Interest coverage | 12.6 | 7.9 | 1 |
| Top-5 customers' share of sales | 15% | 27% | 1 |
| Debt feature | Putable | Callable | 1 |

Both have low operating leverage. **Company 1** has the lower cost of capital on every count.

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

$$IC=\frac{EBIT}{\text{Interest}}\qquad D/E=\frac{\text{Debt}}{\text{Equity}}$$

#### Example: Gamma Company

| Ratio | Gamma | Implied rating |
| --- | ---: | --- |
| Interest coverage | 1.5 | **B** (1.4 < IC < 2) |
| D/E | 43% | **BBB** (42% < D/E < 44%) |

The ratios conflict, so use judgment and look at their **trend**: e.g., a rising IC could justify BB.

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

#### Example: G&S Airlines Lease

| Input | Value |
| --- | --- |
| Term | 15 years |
| Lease payment | €9.0m a year |
| Aircraft fair value | €100m |
| Lessor's direct initial costs | €5m |
| Residual value to the lessor | €10m |

**Step 1. Set up the RIIL equation.**

$$\sum_{t=1}^{15}\frac{9}{(1+RIIL)^t}+\frac{10}{(1+RIIL)^{15}}=100+5$$

**Step 2. Solve.** N = 15, PV = −105, PMT = 9, FV = 10 → **RIIL = 4.08%**.

**Step 3. Compare.** The lease is cheaper than unsecured borrowing (IBR 6%) and equity (11%, and dilutive), and avoids ownership risks, but it **raises leverage**.

* **International**: the cost of debt should be in the **currency of the cash flows**. For less mature markets, add a country risk premium based on a **country risk rating (CRR)** that reflects economic conditions, political risk, exchange-rate risk and the development and regulation of securities markets. Sovereign risk (default on government debt) is only **one part** of country risk, which also covers political stability, economic competitiveness and human development.

$$CRP=\text{Median rate}_{\text{country's rating class}}-\text{Rate}_{\text{benchmark country}}$$

#### Example: Country Risk Premiums

| Country | CRR | Median rate | CRP |
| --- | ---: | ---: | ---: |
| A (benchmark) | 1 | 4.0% | 0% |
| C | 2 | 4.5% | $4.5-4.0=$ **0.5%** |
| D | 8 | 15.5% | $15.5-4.0=$ **11.5%** |

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

#### Example: Smith vs Müller

| Choice | Smith | Müller |
| --- | --- | --- |
| Equity index | Russell 3000 | S&P 500 |
| Period | 35 years | 65 years |
| Risk-free proxy | 30-year T-bond | 3-month T-bill |
| Mean | Arithmetic | Geometric |
| **ERP** | $12.96\%-6.25\%=$ **6.71%** | $11.23\%-3.11\%=$ **8.12%** |

Both can be valid: they made different choices.

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

#### Example: FTSE 100

The dividend yield is 1.94%, expected growth 5.0% and the gilt yield 1.63%.

$$ERP=1.94\%+5.0\%-1.63\%=5.31\%$$

The range of forecasts (useful for simulation):

| | Yield | Growth | $r_f$ | ERP |
| --- | ---: | ---: | ---: | ---: |
| Low | 1.5% | 4% | 2.5% | **3%** |
| High | 3.5% | 6% | 1.5% | **8%** |

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

#### Example: Grinold–Kroner Scenarios

**Step 1. Expected inflation.** The 10-year Treasury yields 2.3% and TIPS 0.66%:

$$i=\frac{1.023}{1.0066}-1=1.6\%$$

**Step 2. ERP in two scenarios** (all in %):

| Input | Scenario 1 | Scenario 2 |
| --- | ---: | ---: |
| DY | 2.2 | 2.0 |
| $\Delta(P/E)$ | 0 | 1.0 |
| $i$ | 1.6 | 3.0 |
| $g$ | 3.0 | 2.0 |
| $\Delta S$ | −0.7 | 0 |
| $r_f$ | 2.5 | 3.0 |
| **ERP** | $2.2+0+(1.6+3.0+0.7)-2.5=$ **5.0** | $2.0+1.0+(3.0+2.0-0)-3.0=$ **5.0** |

* Higher expected inflation has **no effect** on the ERP ($i$ and $r_f$ rise together).
* Lower expected income (DY) makes the ERP **fall**.

#### Example: Same Market, Two Methods

$$
\begin{aligned}
\text{Historical: }ERP&=9.96\%-3.15\%=6.81\%\\
\text{Grinold–Kroner: }ERP&=1.8-1.2+(1.9+2.7-0)-0.96=4.24\%
\end{aligned}
$$

**Limitations of forward-looking estimates:**

* **Surveys**: sampling and response bias; behavioral biases (**recency**, **confirmation**).
* **DDM**: assumes a constant P/E; needs adjusting when earnings, dividends and prices grow at different rates.
* **Macro models**: errors in macro data; behavioral biases in forecasting.

#### Example: A New Market with 20 Years of History

| Issue | Bias in the estimate |
| --- | --- |
| Index returns back-filled for 4 years before launch, from the surviving members | Historical ERP **up** (survivorship) |
| A 5-year border conflict that depressed returns and won't recur | Historical ERP **down** |
| Inverted curve (short rate 9%, 10-year 7%); required return built on the short rate | Required return **up** |

**Grinold–Kroner instead.** Use the long-term inflation forecast and the 10-year yield: $i$ = 4%, $g$ = 4%, $\Delta(P/E)$ = 1%, DY = 1%, $\Delta S$ = 0, $r_f$ = 7%.

$$ERP=1+1+(4+4-0)-7=3.0\%$$

So average-risk stocks require at least 7% + (2% to 3%) = **9% or more**.

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

$$
\begin{aligned}
\text{Gordon growth: }r_e&=\frac{D_1}{P_0}+g\\
\text{Multiyear (solve for the IRR): }P_0&=\sum_{t=1}^n \frac{D_t}{(1+r_e)^t}+\frac{P_n}{(1+r_e)^n}\\
\text{Preferred (}g=0\text{): }r_p&=\frac{D}{P}
\end{aligned}
$$

#### Example: DDM Cost of Equity

| Case | Inputs | $r_e$ |
| --- | --- | --- |
| Company X (Gordon) | $P_0$ €40, $D_1$ €1.04, $g$ 4% | $1.04/40+4\%=$ **6.6%** |
| Gordon from $D_0$ | $P_0$ USD50, $D_0$ USD2.50, $g$ 5% | $2.50\times 1.05/50+5\%=$ **10.25%** |
| Multiyear | $P_0$ USD40; dividends 1.00, 1.25, 1.35, 1.50; $P_4$ USD45 | IRR of −40, 1, 1.25, 1.35, 46.5 = **6.015%** |

A higher $g$ raises $r_e$ (both $D_1$ and $g$ rise); so does a lower price.

### Bond Yield Plus Risk Premium (BYPRP)

$$
r_e =r_d+RP
$$

where $r_d$ is usually the YTM on the company's **long-term** debt, and $RP$ is often the historical average difference between returns on an equity index and a corporate bond index.

* The cost of debt is a natural starting point: equity investors demand more than the company's creditors.
* The premium is fairly arbitrary and may not be stable over time.
* It needs traded debt; if there are several bonds with different features, there's no rule on which yield to use (common practice: the long-term bond).

#### Example: BYPRP

$$r_e=\underbrace{4.3\%}_{\text{bond yield}}+\underbrace{6.1\%}_{\text{historical premium}}=10.40\%$$

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

#### Example: Five-Factor Model

| Factor | Premium | Beta | Contribution |
| --- | ---: | ---: | ---: |
| $r_f$ | | | 3.82% |
| ERP | 6.5% | 1.2 | 7.80% |
| SMB | 1.8% | 0.10 | 0.18% |
| HML | 4.0% | −0.20 | −0.80% |
| RMW | 2.0% | 0.5 | 1.00% |
| CMA | 1.0% | 0.2 | 0.20% |
| **$r_e$** | | | **12.2%** |

#### Example: Three-Factor Model with an Intercept

$r_f$ = 2%; the intercept is 0.3%.

$$
\begin{aligned}
r_e-r_f&=0.003+1.2\times 0.05-0.4\times 0.01+0.2\times 0.04=0.067\\
r_e&=2\%+6.7\%=8.7\%
\end{aligned}
$$

#### Example: CAPM vs Three-Factor

$r_f$ = 6% and the expected market return 10% (ERP 4%).

$$
\begin{aligned}
\text{CAPM: }r_e&=6\%+0.8\times 4\%=9.2\%\\
\text{Three-factor: }r_e&=6\%+1\%+0.75\times 4\%+0.15\times 5\%+0.05\times 2\%\\
&=10.85\%
\end{aligned}
$$

The 1% is the intercept; SMB and HML add 0.85%.

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

#### Example: Makinassi

Makinassi is headquartered in Country X (sovereign spread 1.5%). Country Y, 40% of its sales, has a spread of 3.2%, equity volatility 4.0% and bond volatility 2.5%.

**Step 1. The relevant spread** is Y's over X's:

$$3.2\%-1.5\%=1.7\%$$

**Step 2. Scale to equity.**

$$CRP=1.7\%\times\frac{4.0}{2.5}=2.72\%$$

**Step 3. Apply the exposure.**

$$\lambda\times CRP=0.40\times 2.72\%=1.088\%$$

Add **1.088%** to $r_e$.

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

A small-cap listed engine maker: cyclical, high fixed costs, assets mainly inventory and PP&E. It plans to issue unsecured debt to retire the preferred.

| Capital | Weight | Terms |
| --- | ---: | --- |
| Debt | 20% | 7% coupon, 7 years, BBB, thinly traded |
| Preferred | 15% | 7% dividend, par 1,000, price 980, redeemable at par |
| Common | 65% | Beta 0.91; $r_f$ 2.1%; ERP 5.5% |

**Why its cost of capital is high**: cyclical, volatile revenue and earnings; illiquid assets; high operating leverage.

**Step 1. Cost of debt by matrix pricing** (four liquid BBB bonds, semiannual):

| Bond | Coupon | Maturity | Price | YTM |
| --- | --- | --- | --- | --- |
| 1 | 5% | 4 | 99.50 | 5.140% |
| 2 | 7% | 4 | 106.46 | 5.191% |
| 3 | 6% | 8 | 100.00 | 6.000% |
| 4 | 8% | 8 | 112.42 | 6.021% |

Interpolate linearly between the 4-year and 8-year averages for Gretna's 7-year bond:

$$
\begin{aligned}
\bar y_4&=\frac{5.140+5.191}{2}=5.166\%\\
\bar y_8&=\frac{6.000+6.021}{2}=6.011\%\\
\text{Step per year}&=\frac{6.011-5.166}{4}=0.211\%\\
y_7&=5.166+3\times 0.211=5.799\%\approx 5.8\%
\end{aligned}
$$

Gretna's thin trading means its true yield is slightly higher.

**Step 2. Cost of preferred.**

$$r_p=\frac{0.07\times 1{,}000}{980}=7.14\%$$

After replacing the preferred with debt (35% debt, 65% equity), the new debt will cost more than 5.8% but less than 7.14%. Redeeming at par when the price is 980 implies low $r_f$ and/or tight spreads, i.e., good timing. To cut the cost further, issue **secured**, **putable** or **convertible** debt.

**Step 3. Cost of equity, three ways.**

$$
\begin{aligned}
\text{CAPM: }r_e&=2.1\%+0.91\times 5.5\%=7.11\%\\
\text{Five-factor: }r_e&=2.1+0.95(5.5)+0.45(1.8)+0.14(3.9)\\
&\quad-0.19(3.1)+0.30(3.7)=9.20\%\\
\text{BYPRP: }r_e&=5.8\%+6.2\%=12.0\%
\end{aligned}
$$

**Step 4. Sanity checks.**

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

**Step 1. Cost of debt from a synthetic rating.**

$$
\begin{aligned}
IC&=\frac{12.2}{1.6}=7.63\\
D/E&=\frac{18.4}{105.2-18.4}=0.2120
\end{aligned}
$$

That maps to a synthetic rating of **A**, with a spread of 1.46%. Country risk applies to debt too:

$$
\begin{aligned}
r_d&=5.41\%+1.46\%+\underbrace{2.00\%}_{CRP}=8.87\%\\
r_d(1-t)&=8.87\%\times 0.8=7.096\%
\end{aligned}
$$

**Step 2. Premiums.**

* **Size premium near the top of the 3–6% range**: Precision's assets are under a tenth of the industry average.
* **SCRP higher** because of more intangibles (47% vs 32%) and less cash (9% vs 14%); 70% of revenue from five nearby customers (customer and geographic concentration); a founder-CEO with no succession plan (key person).
* **SCRP lower** because of 60% subscription revenue and lower leverage (D/E 0.2120 vs the industry's 296.4/979.8 = 0.3025; IC 7.63 vs 7.55).

**Step 3. Beta.** Unlever the industry beta with the **industry's** tax rate and D/E, then relever with Precision's:

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

**Step 4. Cost of equity** (in %).

$$
\begin{aligned}
\text{Expanded CAPM (with IP and CRP): }r_e&=5.41+1.19(6)+5+1+6+2\\
&=26.55\%\\
\text{Build-up (as in the solution, no IP): }r_e&=5.41+6+5+6+2\\
&=24.41\%
\end{aligned}
$$

**Step 5. WACC**, with $w_d=18.4/105.2=0.1749$ and $w_e=0.8251$:

$$WACC=0.1749\times 7.096\%+0.8251\times 24.41\%=21.38\%$$

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
