# Residual Income Valuation

**Residual income** (RI) is net income minus a charge for the cost of equity: the profit left over after **all** capital has been paid for. The RI model values a share as its book value plus the present value of expected future residual income. Covers RI, EVA and MVA; the general, single-stage and multistage RI models; how RI relates to P/B, dividend and free cash flow models; and the accounting adjustments the model needs.

## Residual Income, EVA and MVA

Net income already deducts the cost of **debt** (interest), but not the cost of **equity**, so positive net income can still destroy value.

$$
RI=NI-r_e\times\text{Equity capital}
$$

Seen from all capital providers (the total capital charge is WACC in money terms):

$$
\begin{aligned}
RI&=NOPAT-\text{Total capital charge}\\
&=(ROIC-\text{Effective capital charge})\times\text{Beginning capital}
\end{aligned}
$$

The two views agree when the marginal cost of debt equals its current cost, and the capital weights are **book** weights.

#### Example: Axis Manufacturing

| Input | Value |
| --- | --- |
| Total assets | €2,000,000 |
| Financing | 50% debt at 7% pretax, 50% equity at 12% |
| EBIT | €200,000 |
| Tax rate | 30% |
| Shares | 100,000 (book value €10 each) |

**Step 1. Equity view.**

$$
\begin{aligned}
NI&=(200{,}000-\underbrace{70{,}000}_{\text{Interest}})\times 0.7=91{,}000\\
\text{Equity charge}&=0.12\times 1{,}000{,}000=120{,}000\\
RI&=91{,}000-120{,}000=-29{,}000
\end{aligned}
$$

**Step 2. Capital view gives the same answer.**

$$
\begin{aligned}
NOPAT&=200{,}000\times 0.7=140{,}000\\
\text{Capital charge}&=120{,}000+0.07\times 0.7\times 1{,}000{,}000=169{,}000\\
RI&=140{,}000-169{,}000=-29{,}000
\end{aligned}
$$

ROIC is $140{,}000/2{,}000{,}000=7\%$, against an effective capital charge of $169{,}000/2{,}000{,}000=8.45\%$.

**Step 3. Value.** The company destroys €0.29 a share every year, forever:

$$
\begin{aligned}
V_0&=10-\frac{0.29}{0.12}=10-2.42=7.58\\
P/B&=\frac{7.58}{10}=0.758
\end{aligned}
$$

**€7.58 a share** (E/P = 0.91/7.58 = 12% = $r$). Negative RI → P/B below 1.

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

#### Example: Canadian National Railway

Beginning BVPS is CAD24.32; the risk-free rate is 1.75%, beta 1.02 and the ERP 7.5%.

| | 2019 | 2020 |
| --- | ---: | ---: |
| EPS | 6.23 | 6.96 |
| DPS | 2.15 | 2.32 |

**Step 1. Required return.**

$$r=1.75\%+1.02\times 7.5\%=9.40\%$$

**Step 2. RI, rolling book value forward with clean surplus.**

$$
\begin{aligned}
RI_{2019}&=6.23-0.094\times 24.32=3.94\\
B_{2019}&=24.32+6.23-2.15=28.40\\
RI_{2020}&=6.96-0.094\times 28.40=4.29
\end{aligned}
$$

#### Example: Bugg Properties (Liquidating)

$B_0$ = \$6.00 and $r$ = 10%. Bugg liquidates after Year 3.

| Year | 1 | 2 | 3 |
| --- | ---: | ---: | ---: |
| EPS | 2.00 | 2.50 | 4.00 |
| DPS | 1.00 | 1.25 | 12.25 (liquidating) |

**Step 1. RI each year.** $RI_t=E_t-0.10\times B_{t-1}$, with $B_t=B_{t-1}+E_t-D_t$:

| Year | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Beginning book value | 6.00 | 7.00 | 8.25 |
| ROE | 33.33% | 35.71% | 48.48% |
| Equity charge | 0.60 | 0.70 | 0.825 |
| RI | 1.40 | 1.80 | 3.175 |
| Ending book value | 7.00 | 8.25 | 0.00 |

**Step 2. Value both ways.**

$$
\begin{aligned}
V_{RI}&=6.00+\frac{1.40}{1.10}+\frac{1.80}{1.10^2}+\frac{3.175}{1.10^3}\\
&=6.00+1.2727+1.4876+2.3854=11.15\\
V_{DDM}&=\frac{1.00}{1.10}+\frac{1.25}{1.10^2}+\frac{12.25}{1.10^3}\\
&=0.9091+1.0331+9.2036=11.15
\end{aligned}
$$

The value is the same, **\$11.15**. But the RI model recognizes \$6.00 at $t$ = 0, while the DDM gets \$9.20 from the final year: **RI recognizes value earlier**.

#### Example: Alphabet (ROE Fading)

$B_0$ = \$255.40 and $r$ = 8.2%; Alphabet pays no dividends, and the price is \$1,037.39. ROE is 20.2% in 2019, falling 0.5 points a year to 8.2% in 2043, after which RI is zero.

**Step 1. The first year.**

$$
\begin{aligned}
EPS_{2019}&=0.202\times 255.40=51.59\\
RI_{2019}&=51.59-\underbrace{0.082\times 255.40}_{20.94}=30.65\\
\text{PV}&=\frac{30.65}{1.082}=28.33
\end{aligned}
$$

**Step 2. Repeat to 2042 and add $B_0$.** Book value grows by each year's EPS (no dividends):

$$V_0=255.40+\sum_{t=2019}^{2042}\text{PV}(RI_t)=\$972.25$$

That is below the \$1,037.39 price.

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
* **Tobin's q**: unlike P/B, it puts total capital over total assets, at replacement cost (which reflects inflation) instead of historical cost. Higher asset productivity → higher q (Tobin expected q to average 1). Replacement cost is hard to measure.

$$\text{Tobin's }q=\frac{\text{Market value of debt and equity}}{\text{Replacement cost of total assets}}$$

## Single-Stage RI Model

The single-stage model assumes ROE and $g$ are constant **forever**, so excess returns persist indefinitely. In practice, ROE reverts to the mean: competitors enter high-ROE industries, and exits lift low-ROE ones.

#### Example: Philips

$B_0$ = €13.22, price €35.40, ROE 12%, $g$ 6.75%, $r$ 8.5%.

**Step 1. Value.**

$$
\begin{aligned}
V_0&=13.22+\frac{0.12-0.085}{0.085-0.0675}\times13.22\\
&=13.22+2\times 13.22=39.66
\end{aligned}
$$

**Step 2. Growth implied by the price.**

$$
\begin{aligned}
35.40&=13.22+\frac{0.12-0.085}{0.085-g}\times13.22\\
0.085-g&=\frac{0.035\times 13.22}{22.18}=0.0209\\
g&=6.41\%
\end{aligned}
$$

The market prices in **6.41%** growth. The price is about $35.40/13.22=2.7$ × book because ROE exceeds $r$.

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

#### Example: Zenlandia Chemical (Three Terminal Assumptions)

| Input | Value |
| --- | --- |
| Price | ZL\$95.6 |
| $r$ | 12% |
| $B_{2019}$ | ZL\$28.8517 |
| EPS / DPS, 2020 | 7.162 / 2.9995 |
| EPS / DPS, 2021 | 8.356 / 3.2995 |
| ROE after 2021 | 25% (2022–26), 20% (2027–39), with 60% retention |

RI in 2039 is 23.8664. The three assumptions about RI after 2039:

**(1) RI is zero after 2039.** Summing the PV of RI to 2039: **$V_0$ = ZL\$86.41**: overvalued.

**(2) The 2039 RI continues forever.**

$$
\begin{aligned}
TV_{2039}&=\frac{23.8664}{0.12}=198.8867\\
\text{PV}&=\frac{198.8867}{1.12^{20}}=20.62\\
V_0&=86.41+20.62=107.03
\end{aligned}
$$

**ZL\$107.03**: undervalued.

**(3) RI fades with persistence ω = 0.60.** Apply the persistence term to the 2039 RI, with RI to 2038 summing to 83.93:

$$
\begin{aligned}
\text{PV of the fading RI}&=\frac{23.8664}{(1+0.12-0.60)\times 1.12^{19}}=5.33\\
V_0&=83.93+5.33=86.26
\end{aligned}
$$

**ZL\$86.26**: modestly overvalued.

#### Example: URS Holdings (Terminal P/B)

$B_0$ = €15.00 and $r$ = 7.95%. EPS is 25% of beginning book value (ROE 25%), the payout is 30%, and the share is expected to sell at 1.80 × book at the end of Year 6.

**Step 1. RI for Years 1–6.** Book value grows at $0.70\times 25\%=17.5\%$ a year:

$$RI_1=(0.25-0.0795)\times 15.00=2.558$$

| Year | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| RI | 2.558 | 3.005 | 3.531 | 4.149 | 4.875 | 5.728 |

Their PV is **17.755**, and $B_6=15.00\times 1.175^6=39.475$.

**Step 2. Terminal premium over book.**

$$
\begin{aligned}
P_6-B_6&=(1.80-1)\times 39.475=31.580\\
\text{PV}&=\frac{31.580}{1.0795^6}=19.956
\end{aligned}
$$

**Step 3. Add.**

$$V_0=15.000+17.755+19.956=52.711$$

**€52.711.** The DDM agrees: PV of dividends 7.810 + PV of $P_6$ (71.054) 44.901 = €52.711.

## RI vs Dividend and Free Cash Flow Models

* All three are theoretically consistent: with consistent forecasts and the same discount rate ($r$ for DDM, FCFE and RI; WACC for FCFF), they give the same value.
* DDM and FCF models discount future cash flows; the RI model starts from book value and adds the PV of RI, so **value is recognized earlier**, and RI is less sensitive to uncertain terminal values.

#### Example: A Perpetuity

EPS is \$1.00 forever, all paid out; book value is \$6.00 and $r$ = 10%.

$$
\begin{aligned}
V_{DDM}&=\frac{1.00}{0.10}=\$10.00\\
RI&=1.00-0.10\times 6.00=\$0.40\\
V_{RI}&=6.00+\frac{0.40}{0.10}=\$10.00
\end{aligned}
$$

Both give **\$10.00**. In the RI model, book value is already 60% of the value; in the DDM, the first five years' dividends are only \$3.79 (about 38%).

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

**The balancing effect** (Bauman): aggressive accounting raises book value but lowers future earnings, and the two offset **if clean surplus holds**. In practice it often doesn't, and analysts extrapolate past earnings. E.g., book value is \$1,000,000 and pretax earnings \$200,000 after expensing \$50,000:

$$
\begin{aligned}
\text{Expensed: }ROE&=\frac{200{,}000}{1{,}000{,}000}=20\%\\
\text{Capitalized: }ROE&=\frac{250{,}000}{1{,}050{,}000}=23.81\%
\end{aligned}
$$

Naively extrapolating the higher ROE overstates value.

### 1. Clean Surplus Violations (Dirty Surplus, OCI)

Items that bypass the income statement:

* Unrealized fair value changes on some financial instruments (equity at FVOCI under IFRS; available-for-sale under US GAAP)
* Foreign currency translation adjustments
* Certain pension adjustments
* Part of the gains and losses on certain hedges
* Revaluation surplus on PP&E and intangibles (**IFRS only**)
* Changes in the fair value of certain liabilities due to own credit risk (**IFRS only**)

Book value is right (it includes accumulated OCI), but **net income and ROE are misstated** for RI purposes. There is a bias only if the PV of the violations doesn't net to zero. Compute historical ROE in aggregate (NI ÷ equity), because buybacks and issues distort per-share ROE.

#### Example: Nokia and SAP (2018)

| | Translation adjustments bypassing income |
| --- | ---: |
| Nokia | +€341m |
| SAP ("other components of equity") | +€887m |

Both would have **raised** income, so an upward ROE adjustment may be warranted if the trend continues (but currencies may reverse).

#### Example: Forecasting with OCI

This year NI is \$120 on beginning equity of \$1,000 (ROE 12%), OCI is −\$100, and all earnings are retained; $r$ = 10%.

**Step 1. Next year's RI.** Ending equity is $1{,}000+120-100=1{,}020$; at a 12% ROE:

$$
\begin{aligned}
NI_1&=0.12\times 1{,}020=122.40\\
RI_1&=122.40-0.10\times 1{,}020=20.40
\end{aligned}
$$

**Step 2. Book value growth next year** depends on future OCI:

| Future OCI | Next year's change in book value | Growth |
| --- | --- | ---: |
| None | Consistent with a 12% ROE | **12%** |
| Repeats (−100) | $(122.40-100)/1{,}020$ | **2.2%** |
| Reverses (+100) | $(122.40+100)/1{,}020$ | **21.8%** |

If the OCI repeats and the analyst uses comprehensive income, RI is $22.40-102=$ **−\$79.60**, not +\$20.40.

#### Example: Mannistore

$r$ = 10%. Year 2 has −\$1.00 of OCI that bypasses net income.

| Method | Value |
| --- | ---: |
| DDM, with $P_5$ = \$68.40 | **\$43.59** |
| RI from net income only | \$44.42 (wrong: ignores the OCI) |
| RI from NI + OCI (Year-2 RI 0.45 instead of 1.45) | **\$43.59** |

Only the clean-surplus RI matches the DDM.

**RI growth ≠ NI growth.** In Year 6:

$$
\begin{aligned}
NI_6&=4.56\times 1.08=4.92\\
RI_6&=4.92-2.204=2.72
\end{aligned}
$$

RI falls about **2%**, although NI grows 8%: the equity charge grows faster than earnings.

### 2. Fair Value Adjustments to the Balance Sheet

Review inventory (LIFO, not allowed under IFRS), deferred taxes, operating leases (no effect on equity, but they affect future earnings), reserves and allowances, and intangibles.

### 3. Intangible Assets

Internally generated intangibles (e.g., brands built by advertising) aren't recognized unless acquired.

#### Example: Alpha Buys Beta

$r$ = 10%, with no growth, so $V=B+\dfrac{ROE-r}{r}B$.

**Step 1. Value each company before the deal.**

$$
\begin{aligned}
V_{\text{Alpha}}&=5{,}000+\frac{0.12-0.10}{0.10}\times 5{,}000=6{,}000\\
V_{\text{Beta}}&=1{,}000+\frac{0.15-0.10}{0.10}\times 1{,}000=1{,}500
\end{aligned}
$$

Together they are worth **7,500**.

**Step 2. Alpha pays €1,500 in cash.** The €500 above Beta's book value is a 10-year license, amortized at €50 a year. Combined book value stays at 5,000.

| Case | Book value | NI | ROE | Value |
| --- | ---: | ---: | ---: | ---: |
| Cash, after amortization | 5,000 | $600+150-50=700$ | 14% | 7,000 (understated) |
| Cash, amortization added back | 5,000 | 750 | 15% | **7,500** |
| Paid in stock | 6,500 | 750 | 11.538% | **7,500** |

The form of payment doesn't change the value.

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
