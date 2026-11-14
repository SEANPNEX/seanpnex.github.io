# Residual Income Valuation

Residual income (RI) is net income minus a charge for the cost of equity capital: the profit left over after **all** capital has been paid for. The RI model values a share as book value plus the present value of expected future RI. This module covers RI, EVA and MVA, the general, single-stage and multistage RI models, how RI relates to P/B, DDM and FCF models, and the accounting adjustments the model needs.

* [Learning Outcomes](#learning-outcomes)
* [Residual income, EVA and MVA](#residual-income-eva-and-mva)
* [Uses of residual income models](#uses-of-residual-income-models)
* [The general RI model](#the-general-ri-model)
* [Fundamental determinants and justified P/B](#fundamental-determinants-and-justified-pb)
* [Single-stage RI model and implied growth](#single-stage-ri-model-and-implied-growth)
* [Multistage RI and continuing residual income](#multistage-ri-and-continuing-residual-income)
* [RI vs DDM and FCF models](#ri-vs-ddm-and-fcf-models)
* [Strengths, weaknesses and when to use RI](#strengths-weaknesses-and-when-to-use-ri)
* [Accounting issues](#accounting-issues)
* [Quick Recall](#quick-recall)

## Learning Outcomes

The candidate should be able to:

* Calculate and interpret residual income, economic value added, and market value added
* Describe the uses of residual income models
* Calculate the intrinsic value of a common stock using the residual income model and compare value recognition in residual income and other present value models
* Explain fundamental determinants of residual income
* Explain the relation between residual income valuation and the justified price-to-book ratio based on forecasted fundamentals
* Calculate and interpret the intrinsic value of a common stock using single-stage (constant-growth) and multistage residual income models
* Calculate the implied growth rate in residual income, given the market price-to-book ratio and an estimate of the required rate of return on equity
* Explain continuing residual income and justify an estimate of continuing residual income at the forecast horizon, given company and industry prospects
* Compare residual income models to dividend discount and free cash flow models
* Explain strengths and weaknesses of residual income models and justify the selection of a residual income model to value a company's common stock
* Describe accounting issues in applying residual income models

## Residual income, EVA and MVA

Net income already deducts the cost of **debt** (interest) but not the cost of **equity**. Positive net income can still destroy value.

$$
RI=NI-\text{Equity charge}=NI-r_e\times\text{Equity capital}
$$

Equivalent capital-provider view: RI = NOPAT − total capital charge (WACC in money terms) = (ROIC − effective capital charge) × beginning capital. The two views agree when the marginal cost of debt equals the current cost of debt and the capital weights are **book** weights.

**Textbook example (Axis Manufacturing, AXCI).** Assets €2m, 50% debt (7% pretax) / 50% equity (12%), EBIT €200,000, tax 30%.

* NI = (200,000 − 70,000) × 0.7 = €91,000; equity charge 0.12 × 1,000,000 = €120,000 → **RI = −€29,000**
* Capital view: NOPAT €140,000 − (120,000 + 0.07 × 0.7 × 1,000,000 = 169,000) = **−€29,000**; ROIC 7% vs capital charge 8.45%
* Valuation: 100,000 shares at book €10; value destroyed €0.29/share a year → PV 0.29/0.12 = €2.42 → price ≈ **€7.58** (E/P = 0.91/7.5833 = 12%), P/B 0.7583. Negative RI → P/B < 1

**Economic value added** (Stern Stewart's commercial version):

$$
EVA=NOPAT-(C\%\times TC)
$$

Typical EVA adjustments: capitalize and amortize R&D (add back net R&D to NOPAT); suspend the capital charge on strategic investments with delayed returns; cash taxes only (eliminate deferred taxes); add the LIFO reserve to capital and its increase to NOPAT; treat operating leases as capital leases; adjust non-recurring items.

**Market value added:**

$$
MVA=\text{Market value of the company}-\text{Accounting book value of total capital}
$$

Positive economic profit over time → market value above book value of capital. Research is mixed: value-added measures are slightly more correlated with returns than ROA/ROE, but no better than earnings growth at predicting performance.

## Uses of residual income models

* Equity valuation of individual stocks and indexes (e.g. the Dow)
* Commercial versions are marketed mainly for **measuring internal corporate performance** and setting **executive compensation**, not for equity valuation
* Other names: economic profit, abnormal earnings, discounted abnormal earnings model, Edwards–Bell–Ohlson model; in US tax valuation, the **excess earnings method**

## The general RI model

$$
V_0=B_0+\sum_{t=1}^{\infty}\frac{RI_t}{(1+r)^t}=B_0+\sum_{t=1}^{\infty}\frac{E_t-rB_{t-1}}{(1+r)^t}=B_0+\sum_{t=1}^{\infty}\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}
$$

* Per-share RI = EPS − r × **beginning** BVPS. ROE here uses **beginning** book value (not average)
* Derived from the DDM using the **clean surplus relation**: $B_t=B_{t-1}+E_t-D_t$
* PV of future RI > 0 → value > book

**Textbook example (Canadian National Railway, per-share RI).** r = 1.75% + 1.02 × 7.5% = **9.40%**; BVPS CAD24.32; EPS 6.23 (2019), 6.96 (2020); DPS 2.15, 2.32. RI 2019 = 6.23 − 0.094 × 24.32 = **3.94**; B₂₀₁₉ = 24.32 + 6.23 − 2.15 = 28.40; RI 2020 = 6.96 − 0.094 × 28.40 = **4.29**. (The textbook's Exhibit 1 table didn't render in my source; these figures are computed from its inputs.)

**Textbook example (Bugg Properties, liquidating).** EPS 2.00, 2.50, 4.00; DPS 1.00, 1.25, 12.25 (liquidating); B₀ \$6.00; r 10%.

| Year | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Beginning BV | 6.00 | 7.00 | 8.25 |
| ROE | 33.33% | 35.71% | 48.48% |
| Equity charge | 0.60 | 0.70 | 0.825 |
| RI | 1.40 | 1.80 | 3.175 |
| Ending BV | 7.00 | 8.25 | 0.00 |

* RI: 6.00 + 1.2727 + 1.4876 + 2.3854 = **\$11.15**; DDM: 0.9091 + 1.0331 + 9.2036 = **\$11.15**
* Same value, but RI recognizes \$6.00 at t = 0, while the DDM gets \$9.20 from the final year → **RI recognizes value earlier**

**Textbook example (Alphabet, ROE fading).** r 8.2%, B₀ \$255.40, ROE 20.2% in 2019 falling 0.5 pp a year to 8.2% in 2043 (RI = 0 from then on), no dividends. 2019: EPS = 0.202 × 255.40 = \$51.59; charge \$20.94; RI \$30.65; PV \$28.33. Summing to 2042 → **\$972.25** vs price \$1,037.39.

> [!NOTE]
> Textbook typo: the Alphabet solution writes "(0.20.2 − 0.082)"; it should be (0.202 − 0.082).

## Fundamental determinants and justified P/B

With constant growth, g = b × ROE (GGM):

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}=1+\frac{ROE-r}{r-g}
\qquad
V_0=B_0+\frac{ROE-r}{r-g}B_0
$$

* Drivers of RI: **ROE (relative to r) and book value**
* ROE = r → V = B (P/B = 1); ROE < r → P/B < 1
* The RI model is most closely related to **P/B**: justified P/B > 1 exactly when PV of expected RI > 0
* **Tobin's q** = market value of debt and equity / **replacement cost** of total assets. Unlike P/B: total capital in the numerator, total assets in the denominator, replacement cost (reflects inflation) instead of historical cost. Higher asset productivity → higher q (Tobin expected q to average 1). Hard to measure replacement cost

## Single-stage RI model and implied growth

The single-stage model assumes ROE and g are constant **forever**, so excess returns persist indefinitely. In practice ROE mean-reverts (competition enters high-ROE industries; exits lift low-ROE ones).

**Textbook example (Philips).** B₀ €13.22, price €35.40, ROE 12%, g 6.75%, r 8.5% (result in €):

$$
V_0=13.22+\frac{0.12-0.085}{0.085-0.0675}\times13.22=39.66
$$

**Implied growth:** solve $35.40=13.22+\frac{0.12-0.085}{0.085-g}\times13.22$ → **g = 6.41%**. Market price ≈ 2.7 × book because ROE > r.

> [!NOTE]
> Textbook typos in the Philips example: the question says "Canon stock", and the solution's denominator prints 0.085 − 0.675 (it should be 0.085 − 0.0675). The answer €39.66 is correct.

## Multistage RI and continuing residual income

Forecast RI explicitly for T years, then add a terminal premium over book:

$$
V_0=B_0+\sum_{t=1}^{T}\frac{E_t-rB_{t-1}}{(1+r)^t}+\frac{P_T-B_T}{(1+r)^T}
$$

* Current book value usually carries a large share of total value; the terminal value matters **less** than in DDM/FCF models
* **Continuing residual income** = RI after the forecast horizon. Common assumptions:
  1. RI continues indefinitely at a positive level (possibly growing at inflation, i.e. constant in real terms)
  2. RI is zero from the terminal year forward
  3. RI declines to zero as ROE reverts to r
  4. RI reflects ROE reverting to some mean level (e.g. industry ROE; Lee–Swaminathan fade to the industry mean)
* Terminal price $P_T$ can come from any model: DDM, P/E or P/B

**Persistence model (Dechow, Hutton and Sloan):**

$$
V_0=B_0+\sum_{t=1}^{T-1}\frac{E_t-rB_{t-1}}{(1+r)^t}+\frac{E_T-rB_{T-1}}{(1+r-\omega)(1+r)^{T-1}}
$$

* ω (0 to 1): ω = 1 → RI continues as a perpetuity; ω = 0 → RI stops after T. Higher ω → higher value. Average ω found ≈ **0.62** (RI decays ≈ 38% a year)

| Lower persistence | Higher persistence |
| --- | --- |
| Extreme ROE | Low dividend payout |
| Extreme levels of special (non-recurring) items | High historical persistence in the industry |
| Extreme accounting accruals | |

**Textbook example (Zenlandia Chemical, three terminal assumptions).** Price ZL\$95.6, r 12%, B₂₀₁₉ ZL\$28.8517, EPS 7.162 / 8.356, DPS 2.9995 / 3.2995; then ROE 25% (2022–26), 20% (2027–39), retention 60%.

| Continuing RI assumption | Value | Conclusion |
| --- | --- | --- |
| RI = 0 after 2039 | **ZL\$86.41** | Overvalued |
| Perpetuity of 2039 RI: TV = 23.8664/0.12 = 198.8867; PV = 198.8867/1.12²⁰ = 20.6179 | 86.41 + 20.62 = **ZL\$107.03** | Undervalued |
| Persistence ω = 0.60: 23.8664/[(1 + 0.12 − 0.60)(1.12)¹⁹] = 5.33 | 83.93 + 5.33 = **ZL\$86.26** | Modestly overvalued |

> [!NOTE]
> Textbook issue: the ω example says "the 1.12 growth factor reflects a 12% growth rate calculated as the retention ratio multiplied by ROE (0.60 × 20%)". In the formula, 1.12 is **1 + r** (r = 12%). The two numbers happen to be equal here. Use (1 + r − ω) and (1 + r)^(T−1).

**Textbook example (URS Holdings, terminal P/B).** B₀ €15.00, r 7.95%, EPS = 25% of beginning BV, payout 30%, $P_6$ = 1.80 × $B_6$.

* RI years 1–6: 2.558, 3.005, 3.531, 4.149, 4.875, 5.728; PV sum **17.755**; $B_6$ = 39.475
* Terminal premium = 0.8 × 39.475 = 31.580 → PV **19.956**
* V₀ = 15.000 + 17.755 + 19.956 = **€52.711**
* DDM check: PV of dividends 7.810 + PV of $P_6$ (71.054) 44.901 = **€52.711**

## RI vs DDM and FCF models

* All three are theoretically consistent: with consistent pro forma forecasts and the same discount rate (r for DDM/FCFE/RI; WACC for FCFF), they give the same value
* DDM/FCF discount future cash flows; RI starts from the balance sheet (book value) and adds PV of RI → **value is recognized earlier**, so RI is less sensitive to uncertain terminal values

**Textbook example (perpetuity).** EPS \$1.00 forever, 100% payout, B \$6.00, r 10%. DDM: 1.00/0.10 = **\$10.00**. RI = 1.00 − 0.60 = \$0.40 a year → 6.00 + 0.40/0.10 = **\$10.00**. Book value is 60% of value in RI; the first five years' dividends are only \$3.79 (≈38%) in the DDM.

* RI models can also produce justified multiples (RI value / EPS = justified P/E) and cross-check other models: large disagreement → check that assumptions are mutually consistent

## Strengths, weaknesses and when to use RI

| Strengths | Weaknesses |
| --- | --- |
| Terminal value is a small part of total value | Accounting data can be manipulated |
| Uses readily available accounting data | Accounting inputs may need big adjustments |
| Works for non-payers and companies with negative near-term FCF | Needs clean surplus to hold, or adjustments |
| Works when cash flows are unpredictable | Assumes interest expense correctly reflects the cost of debt |
| Focus on economic profitability | |

| Most appropriate | Least appropriate |
| --- | --- |
| No dividends, or unpredictable dividends | Significant departures from clean surplus |
| Expected FCF negative within the forecast horizon | Book value and ROE not predictable |
| Great uncertainty in terminal values under other models | |

A company with positive, predictable FCF that pays no dividend suits a **FCF model** better.

#### Exam traps

* The equity charge uses **beginning** book value
* RI ≠ NI growth: in Mannistore, NI grows 8% but RI falls ≈2%
* Negative RI does not mean negative NI

## Accounting issues

Balancing effect (Bauman): aggressive accounting → higher book value but lower future earnings, which offset **if clean surplus holds**. In practice it often doesn't, and analysts extrapolate past earnings.

**Capitalization example (textbook).** BV \$1,000,000, pretax earnings \$200,000 after expensing \$50,000 → ROE 20%. Capitalize instead → \$250,000/\$1,050,000 = **23.81%**. Naively extrapolating that ROE overstates value.

**1. Clean surplus violations (dirty surplus / OCI).** Items that bypass the income statement:

* Unrealized fair value changes on some financial instruments (FVOCI equity under IFRS / AFS under US GAAP)
* Foreign currency translation adjustments
* Certain pension adjustments
* Part of gains/losses on certain hedging instruments
* Revaluation surplus on PP&E/intangibles (**IFRS only**)
* Change in fair value of certain liabilities due to own credit risk (**IFRS only**)

Book value is right (it includes AOCI), but **net income and ROE are misstated** for RI purposes. Bias arises only if the PV of the violations does not net to zero. Compute historical ROE at the aggregate level (NI / equity) because buybacks and issuance distort per-share ROE.

**Textbook example (Nokia and SAP 2018).** Translation adjustments bypassing income: Nokia +€341m, SAP "other components of equity" +€887m. Both would have raised income → an upward ROE adjustment may be warranted if the trend continues (but FX may reverse).

**Textbook example (OCI forecasts, Exhibit 13).** NI \$120 on equity \$1,000 (12%), OCI −\$100, r 10%. Year t + 1 RI growth: A (no future OCI) **12%** (consistent with ROE); B (OCI repeats) **2.2%**; C (OCI reverses) **21.8%**. Using comprehensive income in B: 22.40 − 102 = **−\$79.60** RI vs +\$20.40.

**Textbook example (Mannistore).** r 10%; DDM with $P_5$ \$68.40 → **\$43.59**. RI from NI only → **\$44.42** (wrong: ignores the −\$1.00 OCI in Year 2); RI from NI + OCI (Year 2 RI 0.45 instead of 1.45) → **\$43.59** = DDM. Year 6: NI 4.56 × 1.08 = 4.92; RI 4.92 − 2.204 = 2.72 → RI growth ≈ **−2%** although NI grows 8%.

**2. Balance sheet adjustments to fair value.** Review inventory (LIFO; not allowed under IFRS), deferred taxes, operating leases (no effect on equity but affect future earnings), reserves and allowances, and intangibles.

**3. Intangible assets.** Internally generated intangibles (brands from advertising) aren't recognized unless acquired.

**Textbook example (Alpha acquires Beta).** Alpha B 5,000, ROE 12% → V = 5,000 + (0.02/0.10)5,000 = **6,000**; Beta B 1,000, ROE 15% → **1,500**; total 7,500. Alpha pays €1,500 cash; the €500 excess is a 10-year license.

* With €50 amortization: NI 700, ROE 14% → V = **7,000** (understated)
* Adding back amortization: NI 750, ROE 15% → **7,500** ✓
* Paying with stock: B 6,500, ROE 11.538% → **7,500** (form of payment doesn't change value)

Including and later amortizing an omitted asset has **no effect** on RI value (higher B₀ offset by amortization plus capital charge). Expensing R&D lowers ROE now but slightly raises later ROE vs capitalizing; for a mature company, ROE reflects R&D productivity without adjustment.

**4. Non-recurring items.** Forecast RI from **recurring** earnings; no book value adjustment is needed. Check unusual items, extraordinary items (US GAAP only), restructuring charges, discontinued operations and accounting changes. Restructuring charges recorded **every** period may be ordinary operating expenses. Watch non-operating gains netted against SG&A.

**5. Aggressive accounting.** Accelerating revenue (shipping unordered goods) or deferring expenses (capitalizing) inflates both earnings and book value. "Cookie jar" reserves: excess charges taken early, then released to boost later income.

**6. International.** Frankel and Lee: unadjusted RI explains ~70% of cross-sectional price variation across 20 countries. Key considerations: reliable earnings forecasts, systematic clean surplus violations, and "poor quality" accounting with delayed recognition. Where those problems are severe, use a less accounting-dependent model (e.g. FCFE).

## Quick Recall

* RI = NI − r × beginning equity = (ROE − r) × B₍t−1₎. EVA = NOPAT − WACC × TC. MVA = market value − book value of capital.
* V₀ = B₀ + Σ PV(RI). Clean surplus: B₁ = B₀ + E − D.
* Single-stage: V₀ = B₀ + (ROE − r)B₀/(r − g); P/B = (ROE − g)/(r − g).
* Implied g: solve the single-stage model at the market price.
* Multistage terminal: (P_T − B_T)/(1 + r)^T, or the persistence term (E_T − rB_{T−1})/[(1 + r − ω)(1 + r)^{T−1}].
* Low persistence: extreme ROE, special items, accruals. High: low payout, persistent industry.
* RI recognizes value earlier → less terminal-value risk.
* Use RI for non-payers, negative FCF, uncertain TV; avoid with dirty surplus or unpredictable ROE/BV.
* Adjust for OCI, fair value, intangibles, non-recurring items, aggressive accounting.
