# Residual Income Valuation

**Residual income** (RI) is net income minus a charge for the cost of equity: the profit left over after **all** capital has been paid for. The RI model values a share as its book value plus the present value of expected future residual income. Covers RI, EVA and MVA; the general, single-stage and multistage RI models; how RI relates to P/B, dividend and free cash flow models; and the accounting adjustments the model needs.

## Residual Income, EVA and MVA

Net income already deducts the cost of **debt** (interest), but not the cost of **equity**, so positive net income can still destroy value.

$$
RI=NI-r_e\times\text{Equity capital}
$$

Seen from all capital providers: RI = NOPAT − total capital charge (WACC in money terms) = (ROIC − effective capital charge) × beginning capital. The two views agree when the marginal cost of debt equals its current cost, and the capital weights are **book** weights.

**Example (Axis Manufacturing).** Assets €2m, financed 50% with debt (7% pretax) and 50% with equity (12%); EBIT €200,000; tax 30%.

* NI = (200,000 − 70,000) × 0.7 = €91,000; equity charge 0.12 × 1,000,000 = €120,000 → **RI = −€29,000**.
* Capital view: NOPAT €140,000 − (120,000 + 0.07 × 0.7 × 1,000,000 = 169,000) = **−€29,000**; ROIC is 7%, against a capital charge of 8.45%.
* Valuation: 100,000 shares with book value €10; value destroyed €0.29 a share a year → PV 0.29/0.12 = €2.42 → price ≈ **€7.58** (E/P = 0.91/7.5833 = 12%), P/B 0.7583. Negative RI → P/B below 1.

**Economic value added** (Stern Stewart's commercial version):

$$
EVA=NOPAT-(C\%\times TC)
$$

where $C\%$ is the cost of capital and TC the total capital. Typical adjustments: capitalize and amortize R&D (add net R&D back to NOPAT); suspend the capital charge on strategic investments with delayed returns; use cash taxes (eliminate deferred taxes); add the LIFO reserve to capital and its increase to NOPAT; treat operating leases as capital leases; adjust non-recurring items.

**Market value added:**

$$
\begin{aligned}
MVA={}&\text{Market value of the company}\\
&-\text{Book value of total capital}
\end{aligned}
$$

Positive economic profit over time → market value above the book value of capital. Research is mixed: value-added measures are slightly more correlated with returns than ROA or ROE, but no better than earnings growth at predicting performance.

**Uses.** RI models value individual stocks and indexes (e.g., the Dow). Commercial versions are marketed mainly for **measuring internal performance** and setting **executive pay**, not for valuing equity. Other names: economic profit, abnormal earnings, the discounted abnormal earnings model, the Edwards–Bell–Ohlson model, and in US tax valuation, the **excess earnings method**.

## The General RI Model

$$
V_0=B_0+\sum_{t=1}^{\infty}\frac{RI_t}{(1+r)^t}
$$

$$
\begin{aligned}
V_0&=B_0+\sum_{t=1}^{\infty}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&=B_0+\sum_{t=1}^{\infty}\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}
\end{aligned}
$$

* Per-share RI = EPS − $r$ × **beginning** BVPS. ROE here uses **beginning** book value, not the average.
* The model is derived from the DDM using the **clean surplus relation**: $B_t=B_{t-1}+E_t-D_t$.
* If the PV of future RI is positive, value exceeds book value.

**Example (Canadian National Railway).** $r$ = 1.75% + 1.02 × 7.5% = **9.40%**; BVPS CAD24.32; EPS 6.23 (2019) and 6.96 (2020); DPS 2.15 and 2.32. RI 2019 = 6.23 − 0.094 × 24.32 = **3.94**; $B_{2019}$ = 24.32 + 6.23 − 2.15 = 28.40; RI 2020 = 6.96 − 0.094 × 28.40 = **4.29**.

**Example (Bugg Properties, liquidating).** EPS 2.00, 2.50, 4.00; DPS 1.00, 1.25, 12.25 (liquidating); $B_0$ \$6.00; $r$ 10%.

| Year | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Beginning book value | 6.00 | 7.00 | 8.25 |
| ROE | 33.33% | 35.71% | 48.48% |
| Equity charge | 0.60 | 0.70 | 0.825 |
| RI | 1.40 | 1.80 | 3.175 |
| Ending book value | 7.00 | 8.25 | 0.00 |

* RI model: 6.00 + 1.2727 + 1.4876 + 2.3854 = **\$11.15**. DDM: 0.9091 + 1.0331 + 9.2036 = **\$11.15**.
* Same value, but the RI model recognizes \$6.00 at $t$ = 0, while the DDM gets \$9.20 from the final year: **RI recognizes value earlier**.

**Example (Alphabet, ROE fading).** $r$ 8.2%; $B_0$ \$255.40; ROE 20.2% in 2019, falling 0.5 points a year to 8.2% in 2043 (RI = 0 from then on); no dividends. In 2019: EPS = 0.202 × 255.40 = \$51.59; charge \$20.94; RI \$30.65; PV \$28.33. Summing to 2042 gives **\$972.25**, against a price of \$1,037.39.

## Justified P/B and the Drivers of RI

With constant growth, $g = b\times ROE$:

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}=1+\frac{ROE-r}{r-g}
$$

$$
V_0=B_0+\frac{ROE-r}{r-g}\,B_0
$$

* RI is driven by **ROE relative to $r$**, and by book value.
* ROE = $r$ → value = book (P/B = 1); ROE < $r$ → P/B below 1.
* The RI model is most closely related to **P/B**: the justified P/B exceeds 1 exactly when the PV of expected RI is positive.
* **Tobin's q** = market value of debt and equity ÷ **replacement cost** of total assets. Unlike P/B, it puts total capital over total assets, at replacement cost (which reflects inflation) instead of historical cost. Higher asset productivity → higher q (Tobin expected q to average 1). Replacement cost is hard to measure.

## Single-Stage RI Model

The single-stage model assumes ROE and $g$ are constant **forever**, so excess returns persist indefinitely. In practice, ROE reverts to the mean: competitors enter high-ROE industries, and exits lift low-ROE ones.

**Example (Philips).** $B_0$ €13.22, price €35.40, ROE 12%, $g$ 6.75%, $r$ 8.5% (values in €):

$$
\begin{aligned}
V_0&=13.22+\frac{0.12-0.085}{0.085-0.0675}\times13.22\\
&=39.66
\end{aligned}
$$

**Implied growth**: solve $35.40=13.22+\frac{0.12-0.085}{0.085-g}\times13.22$ → **$g$ = 6.41%**. The market price is about 2.7 × book because ROE exceeds $r$.

## Multistage RI and Continuing Residual Income

Forecast RI explicitly for $T$ years, then add a terminal premium over book value:

$$
\begin{aligned}
V_0={}&B_0+\sum_{t=1}^{T}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&+\frac{P_T-B_T}{(1+r)^T}
\end{aligned}
$$

* Current book value usually carries much of the total value, so the terminal value matters **less** than in DDM or FCF models.
* $P_T$ can come from any model: DDM, P/E or P/B.
* **Continuing residual income** is RI after the forecast horizon. Common assumptions:
  1. RI continues indefinitely at a positive level (possibly growing with inflation, i.e., constant in real terms).
  2. RI is zero from the terminal year on.
  3. RI declines to zero as ROE reverts to $r$.
  4. RI reflects ROE reverting to a mean level (e.g., the industry ROE; the Lee–Swaminathan fade to the industry mean).

**Persistence model** (Dechow, Hutton and Sloan):

$$
\begin{aligned}
V_0={}&B_0+\sum_{t=1}^{T-1}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&+\frac{E_T-rB_{T-1}}{(1+r-\omega)(1+r)^{T-1}}
\end{aligned}
$$

The persistence factor ω is between 0 and 1: ω = 1 → RI continues as a perpetuity; ω = 0 → RI stops after year $T$. Higher ω → higher value. The average ω found was about **0.62** (RI decays about 38% a year).

| Lower persistence | Higher persistence |
| --- | --- |
| Extreme ROE | Low dividend payout |
| Extreme special (non-recurring) items | High historical persistence in the industry |
| Extreme accounting accruals | |

**Example (Zenlandia Chemical, three terminal assumptions).** Price ZL\$95.6; $r$ 12%; $B_{2019}$ ZL\$28.8517; EPS 7.162 and 8.356, DPS 2.9995 and 3.2995; then ROE 25% (2022–26) and 20% (2027–39), with 60% retention.

| Continuing RI assumption | Value | Conclusion |
| --- | --- | --- |
| RI = 0 after 2039 | **ZL\$86.41** | Overvalued |
| The 2039 RI continues forever: TV = 23.8664/0.12 = 198.8867, PV = 198.8867/1.12²⁰ = 20.6179 | 86.41 + 20.62 = **ZL\$107.03** | Undervalued |
| Persistence ω = 0.60: 23.8664/[(1 + 0.12 − 0.60)(1.12)¹⁹] = 5.33 | 83.93 + 5.33 = **ZL\$86.26** | Modestly overvalued |

**Example (URS Holdings, terminal P/B).** $B_0$ €15.00; $r$ 7.95%; EPS = 25% of beginning book value; payout 30%; $P_6$ = 1.80 × $B_6$.

* RI in years 1–6: 2.558, 3.005, 3.531, 4.149, 4.875, 5.728; PV **17.755**; $B_6$ = 39.475.
* Terminal premium = 0.8 × 39.475 = 31.580, with a PV of **19.956**.
* $V_0$ = 15.000 + 17.755 + 19.956 = **€52.711**.
* DDM check: PV of dividends 7.810 + PV of $P_6$ (71.054) 44.901 = **€52.711**.

## RI vs Dividend and Free Cash Flow Models

* All three are theoretically consistent: with consistent forecasts and the same discount rate ($r$ for DDM, FCFE and RI; WACC for FCFF), they give the same value.
* DDM and FCF models discount future cash flows; the RI model starts from book value and adds the PV of RI, so **value is recognized earlier**, and RI is less sensitive to uncertain terminal values.

**Example (a perpetuity).** EPS \$1.00 forever, 100% payout, book value \$6.00, $r$ 10%. DDM: 1.00/0.10 = **\$10.00**. RI = 1.00 − 0.60 = \$0.40 a year → 6.00 + 0.40/0.10 = **\$10.00**. Book value is 60% of the value in the RI model; the first five years' dividends are only \$3.79 (about 38%) in the DDM.

RI models can also give justified multiples (RI value ÷ EPS = justified P/E) and cross-check other models: if they disagree a lot, check that the assumptions are consistent.

| Strengths | Weaknesses |
| --- | --- |
| The terminal value is a small part of total value | Accounting data can be manipulated |
| Uses readily available accounting data | Accounting inputs may need big adjustments |
| Works for non-payers and companies with negative near-term FCF | Needs clean surplus to hold, or adjustments |
| Works when cash flows are unpredictable | Assumes interest expense correctly reflects the cost of debt |
| Focuses on economic profitability | |

| Most appropriate | Least appropriate |
| --- | --- |
| No dividends, or unpredictable dividends | Significant departures from clean surplus |
| Expected FCF negative within the forecast horizon | Book value and ROE not predictable |
| Great uncertainty in terminal values under other models | |

A company with positive, predictable FCF that pays no dividend suits an **FCF model** better.

#### Exam traps

* The equity charge uses **beginning** book value.
* RI growth ≠ NI growth: in Mannistore (below), NI grows 8% but RI falls about 2%.
* Negative RI doesn't mean negative net income.

## Accounting Issues

**The balancing effect** (Bauman): aggressive accounting raises book value but lowers future earnings, and the two offset **if clean surplus holds**. In practice it often doesn't, and analysts extrapolate past earnings. E.g., book value \$1,000,000 and pretax earnings \$200,000 after expensing \$50,000 → ROE 20%. Capitalizing the \$50,000 instead gives \$250,000/\$1,050,000 = **23.81%**; naively extrapolating that ROE overstates value.

### 1. Clean Surplus Violations (Dirty Surplus, OCI)

Items that bypass the income statement:

* Unrealized fair value changes on some financial instruments (equity at FVOCI under IFRS; available-for-sale under US GAAP)
* Foreign currency translation adjustments
* Certain pension adjustments
* Part of the gains and losses on certain hedges
* Revaluation surplus on PP&E and intangibles (**IFRS only**)
* Changes in the fair value of certain liabilities due to own credit risk (**IFRS only**)

Book value is right (it includes accumulated OCI), but **net income and ROE are misstated** for RI purposes. There is a bias only if the PV of the violations doesn't net to zero. Compute historical ROE in aggregate (NI ÷ equity), because buybacks and issues distort per-share ROE.

**Examples.**

* **Nokia and SAP (2018)**: translation adjustments bypassing income were +€341m (Nokia) and +€887m (SAP, "other components of equity"). Both would have raised income, so an upward ROE adjustment may be warranted if the trend continues (but currencies may reverse).
* **Forecasting with OCI**: NI \$120 on equity \$1,000 (12%), OCI −\$100, $r$ 10%. RI growth next year: **12%** if there's no future OCI (consistent with ROE); **2.2%** if the OCI repeats; **21.8%** if it reverses. Using comprehensive income when it repeats: 22.40 − 102 = **−\$79.60** of RI, instead of +\$20.40.
* **Mannistore**: $r$ 10%; DDM with $P_5$ = \$68.40 → **\$43.59**. RI from NI only → **\$44.42** (wrong: it ignores the −\$1.00 of OCI in year 2); RI from NI + OCI (year-2 RI 0.45 instead of 1.45) → **\$43.59**, matching the DDM. Year 6: NI 4.56 × 1.08 = 4.92; RI 4.92 − 2.204 = 2.72 → RI growth of about **−2%**, although NI grows 8%.

### 2. Fair Value Adjustments to the Balance Sheet

Review inventory (LIFO, not allowed under IFRS), deferred taxes, operating leases (no effect on equity, but they affect future earnings), reserves and allowances, and intangibles.

### 3. Intangible Assets

Internally generated intangibles (e.g., brands built by advertising) aren't recognized unless acquired.

**Example (Alpha buys Beta).** Alpha: book value 5,000, ROE 12% → value = 5,000 + (0.02/0.10)5,000 = **6,000**. Beta: book value 1,000, ROE 15% → **1,500**. Total 7,500. Alpha pays €1,500 in cash; the €500 excess is a 10-year license.

* With €50 of amortization: NI 700, ROE 14% → value **7,000** (understated).
* Adding back the amortization: NI 750, ROE 15% → **7,500**, correct.
* Paying with stock: book value 6,500, ROE 11.538% → **7,500** (the form of payment doesn't change value).

Recognizing and later amortizing an omitted asset has **no effect** on RI value (a higher $B_0$ is offset by amortization plus the capital charge). Expensing R&D lowers ROE now but slightly raises later ROE, compared with capitalizing it; for a mature company, ROE reflects R&D productivity without adjustment.

### 4. Non-Recurring Items

Forecast RI from **recurring** earnings; no book value adjustment is needed. Check unusual items, extraordinary items (US GAAP only), restructuring charges, discontinued operations and accounting changes. Restructuring charges recorded **every** period may really be ordinary operating expenses. Watch for non-operating gains netted against SG&A.

### 5. Aggressive Accounting

Accelerating revenue (shipping goods that weren't ordered) or deferring expenses (capitalizing them) inflates both earnings and book value. "Cookie jar" reserves: excess charges taken early, then released to boost later income.

### 6. International Considerations

Frankel and Lee found that unadjusted RI explains about 70% of the cross-sectional variation in prices across 20 countries. The key questions: are earnings forecasts reliable; are there systematic clean surplus violations; and is accounting "poor quality", with delayed recognition? Where these problems are severe, use a model less dependent on accounting (e.g., FCFE).

> [!NOTE]
>
> **Textbook issues.**
>
> * Canadian National: the RI figures above are computed from the textbook's inputs.
> * Alphabet: the solution writes "(0.20.2 − 0.082)"; it should be (0.202 − 0.082).
> * Philips: the question says "Canon stock", and the solution's denominator prints 0.085 − 0.675 (it should be 0.085 − 0.0675). The answer €39.66 is correct.
> * Zenlandia: the persistence example says "the 1.12 growth factor reflects a 12% growth rate calculated as the retention ratio multiplied by ROE (0.60 × 20%)". In the formula, 1.12 is **1 + $r$** ($r$ = 12%); the two happen to be equal here. Use $(1+r-\omega)$ and $(1+r)^{T-1}$.
