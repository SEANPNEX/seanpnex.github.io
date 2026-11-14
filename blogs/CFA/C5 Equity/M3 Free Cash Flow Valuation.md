# Free Cash Flow Valuation

Free cash flow to the firm (FCFF) and to equity (FCFE): how to compute them from net income, CFO, EBIT and EBITDA; how to forecast them; how dividends, buybacks and leverage affect them; and single-, two- and three-stage valuation, including preferred stock, real (inflation-adjusted) models, sensitivity analysis, ESG and non-operating assets.

## FCFF vs FCFE

| | FCFF | FCFE |
| --- | --- | --- |
| Cash flow to | All capital providers (debt, preferred, common) | Common shareholders only |
| After | Operating expenses, taxes, fixed capital (FCInv) and working capital (WCInv) investment | The same, **plus** interest and principal (net of new borrowing) |
| Discount at | **WACC** | **Required return on equity**, $r$ |
| Gives | Firm value → equity = firm value − debt (− preferred) | Equity value directly |

$$\text{Firm value}=\sum_{t=1}^{\infty}\frac{FCFF_t}{(1+WACC)^t}$$

$$\text{Equity value}=\sum_{t=1}^{\infty}\frac{FCFE_t}{(1+r)^t}$$

$$WACC=w_d\,r_d(1-t)+w_e\,r$$

where $w_d=D/(D+E)$ and $w_e=E/(D+E)$. Use **market-value** (or target) weights and the **marginal** tax rate.

**Which to use:**

* A stable capital structure → **FCFE** (simpler, more direct).
* **FCFF** when the company is levered and its FCFE is **negative**, or its **capital structure is changing** (FCFF growth reflects fundamentals, and WACC is less sensitive to leverage than $r$).
* **Adjusted present value** (APV): firm value = the unlevered value (FCFF at the unlevered cost of equity) + the net value of debt (tax shield − distress costs).

**The FCFE ownership perspective.** FCFE is what the company **can** pay out without hurting its value, not what it does pay. A **controlling** owner can redirect it, so FCF models suit a control perspective (or a takeover target).

With constant growth (FCFF and FCFE growth need not be the same):

$$
\text{Firm value}=\frac{FCFF_0(1+g)}{WACC-g}
$$

$$
\text{Equity value}=\frac{FCFE_0(1+g)}{r-g}
$$

**Example (Cagiati).** FCFF CHF700m; $r_d$ 5.7%; $r$ 11.8%; debt/equity weights 20/80; tax 33.33%; $g$ 5%; debt CHF2.2bn; 200m shares.

* WACC = 0.20(5.7%)(0.6667) + 0.80(11.8%) = **10.2%**.
* Firm value = 700(1.05)/(0.102 − 0.05) = 735/0.052 = CHF14,134.6m → equity = 14,134.6 − 2,200 = CHF11,934.6m → **CHF59.67 a share**.

## Computing FCFF and FCFE

> [!IMPORTANT]
> The six formulas to memorize:
>
> $$\begin{aligned}FCFF={}&NI+NCC+Int(1-t)\\&-FCInv-WCInv\end{aligned}$$
>
> $$FCFF=CFO+Int(1-t)-FCInv$$
>
> $$\begin{aligned}FCFF={}&EBIT(1-t)+Dep\\&-FCInv-WCInv\end{aligned}$$
>
> $$\begin{aligned}FCFF={}&EBITDA(1-t)+Dep\cdot t\\&-FCInv-WCInv\end{aligned}$$
>
> $$\begin{aligned}FCFE={}&FCFF-Int(1-t)\\&+\text{Net borrowing}\end{aligned}$$
>
> $$\begin{aligned}FCFE&=NI+NCC-FCInv-WCInv\\&\quad+\text{Net borrowing}\\&=CFO-FCInv+\text{Net borrowing}\end{aligned}$$

The building blocks:

* **NI**: net income to common shareholders (after preferred dividends).
* **NCC**: net noncash charges (depreciation, amortization and the items in the table below).
* **Int(1 − t)**: added back for FCFF because interest belongs to debtholders. FCFF and WACC must be consistent: after-tax interest with an after-tax WACC.
* **FCInv**: capex − proceeds from asset sales. Cash acquisitions count as capex; acquisitions paid in stock or debt don't appear in the cash flow statement, but matter for **forecasts**.
* **WCInv**: the increase in working capital **excluding cash and short-term debt** (notes payable and the current portion of long-term debt are financing).
* **Net borrowing**: new debt − repayments.
* From EBIT, depreciation is added back in full; from EBITDA, only its **tax shield**, $Dep\times t$, is added (depreciation was never subtracted).

**Example (Cane Distribution, \$000).** Tax 30%, interest at 7%.

| | 2018 | 2019 | 2020 |
| --- | --- | --- | --- |
| Net income | 97.52 | 107.28 | 118.00 |
| + Depreciation | 45.00 | 49.50 | 54.45 |
| + Int(1 − t) | 10.98 | 12.08 | 13.28 |
| − FCInv | 0.00 | (50.00) | (55.00) |
| − WCInv | (56.00) | (11.60) | (12.76) |
| **FCFF** | **97.50** | **107.26** | **117.97** |

* From CFO (86.52 / 145.18 / 159.69) + Int(1 − t) − FCInv → the same FCFF.
* FCFE = FCFF − Int(1 − t) + net borrowing (22.40 / 24.64 / 27.10) = **108.92 / 119.82 / 131.79**.

**Example (Pitts Corporation, 2020, \$m).** NI 240, depreciation 300, interest 100, tax 40%, capex 400, CFO 495, EBIT 500, EBITDA 800. WCInv = ΔAR 40 + Δinventory 30 − ΔAP 15 − Δaccrued 10 = **45** (excluding cash and notes payable). Net borrowing = Δnotes payable 50 + Δlong-term debt 25 = **75**.

| Start from | Calculation | Result |
| --- | --- | --- |
| NI → FCFF | 240 + 300 + 60 − 400 − 45 | **155** |
| CFO → FCFF | 495 + 60 − 400 | **155** |
| EBIT → FCFF | 500(0.6) + 300 − 400 − 45 | **155** |
| EBITDA → FCFF | 800(0.6) + 300(0.4) − 400 − 45 | **155** |
| FCFF → FCFE | 155 − 60 + 75 | **170** |
| NI → FCFE | 240 + 300 − 400 − 45 + 75 | **170** |
| CFO → FCFE | 495 − 400 + 75 | **170** |

FCFE exceeds FCFF here only because borrowing was large.

### Interest and Dividends in the Cash Flow Statement

| | IFRS | US GAAP |
| --- | --- | --- |
| Interest received | Operating or investing | Operating |
| Interest paid | Operating **or financing** | Operating |
| Dividends received | Operating or investing | Operating |
| Dividends paid | Operating or financing | Financing |

> [!IMPORTANT]
> FCFF from CFO adds back Int(1 − t) **only if interest paid was deducted in CFO**. If an IFRS company put interest paid in financing, don't add it back. If it put dividends paid in operating, add them back to CFO.

### Noncash Items and Working Capital

| Noncash item | Adjustment from NI |
| --- | --- |
| Depreciation | Add back |
| Amortization and impairment of intangibles | Add back |
| Restructuring charges (expense) | Add back |
| Restructuring charges (income from reversal) | Subtract |
| Amortization of a bond **discount** | Add back |
| Amortization of a bond **premium** | Subtract |
| Losses on non-operating activity | Add back |
| Gains on non-operating activity | Subtract |
| Deferred taxes | Add back, with care |

* **Gain on sale**: equipment with a book value of €60,000 sold for €100,000 → subtract the €40,000 gain from NI; the €100,000 appears in investing (reducing FCInv).
* **Deferred tax liabilities**: don't add back if they will **reverse** soon; add back if a growing company can defer them indefinitely (an acquirer may still owe them later).
* **Deferred tax assets** (e.g., from non-deductible restructuring charges): subtract only if expected to recur.
* **Stock options**: the expense is noncash, but exercise cash and part of the tax benefit go to financing. Don't forecast flows that won't persist, and use the **expected** share count (dilution).
* Remove **non-recurring** items from the base year.

**Example (Duplico, sustainable working capital).** Capex and depreciation went from €997.8m and €235.4m (2020) to €317.6m and €309.2m (2022). Higher depreciation **lowers NI** by Dep(1 − t) but **raises CFO** by Dep × t (the tax shield). Rising inventory and receivables reduce CFO and FCFE; rising payables and accruals add to them. Shrinking assets or growing payables can't continue forever, and a growing company's working capital needs grow too.

### Uses of Free Cash Flow

Uses must equal sources: a consistency check that also shows the capital structure policy.

* Uses of FCFF = Δcash + Int(1 − t) + (repayments − new borrowing) + dividends + (buybacks − issuance).
* Uses of FCFE = Δcash + dividends + (buybacks − issuance).

**Example (Pitts).** FCFF 155 = Δcash 10 + 60 − 75 + dividends 160 + 0; FCFE 170 = 10 + 160 + 0. CFO (495) covered capex (400), so the new debt effectively paid dividends → rising leverage.

## Forecasting FCFF and FCFE

1. **Constant growth** on a (normalized) base. E.g., Pitts at 15%: FCFF 155 → 178.25 → 204.99 → 235.74.
2. **Forecast the components**, usually tied to sales, assuming (FCInv − Dep) and WCInv are constant fractions of the **increase in sales**:

$$
\text{Incremental FC rate}=\frac{\text{Capex}-\text{Dep}}{\Delta\text{Sales}}
$$

$$
\text{Incremental WC rate}=\frac{\Delta WC}{\Delta\text{Sales}}
$$

$$
\begin{aligned}
FCFF={}&EBIT(1-t)\\
&-(FCInv-Dep)\\
&-WCInv
\end{aligned}
$$

If a target debt ratio DR finances net new investment (with depreciation the only noncash charge):

$$
\begin{aligned}
FCFE={}&NI\\
&-(1-DR)(FCInv-Dep)\\
&-(1-DR)\,WCInv
\end{aligned}
$$

**Example (Pitts, sales-based).** Sales \$3,000m (up \$300m last year), EBIT margin 16.67%, tax 40%; incremental FC = (400 − 300)/300 = **33.33%**; incremental WC = 45/300 = **15%**. Next year, sales +10%:

| | FCFF | FCFE (net margin 8%, DR 50%) |
| --- | --- | --- |
| Sales | 3,300 | 3,300 |
| EBIT(1 − t) / NI | 330 | 264 |
| Incremental FC | (100) | (100) |
| Incremental WC | (45) | (45) |
| Net borrowing | | 72.50 |
| **Result** | **185** | **191.50** |

Over five years, with the EBIT margin falling from 16.67% to 14.5%: FCFF 185.00, 188.98, 195.90, 202.31, 208.05. The method is less accurate when there are significant noncash charges other than depreciation.

### What Changes FCF, and What Doesn't

* **Dividends, buybacks and share issues don't change** FCFF or FCFE: they are **uses** of free cash flow.
* **Higher leverage** doesn't change FCFF. FCFE rises by the new debt in the year it's issued, then falls by Int(1 − t) afterward. More debt also raises the interest tax shield.
* **FCFE vs DDM**: with consistent inputs (FCFE = dividends), they give the same value. FCF models are preferred when dividends are zero or low, discretionary (a poor signal of profitability), or the company is a takeover target. The same forces drive both: fast growers have low dividends **and** low FCFE.
* Third-party "free cash flow" figures often aren't built for valuation: check the definition.

> [!IMPORTANT]
> **Net income is not FCFE**: it ignores capex, working capital investment and net borrowing (they're equal only when capex = depreciation, with no working capital investment and no net borrowing). **EBITDA is not FCFF**: it's pretax, and ignores the depreciation tax shield, capex and working capital. It's an even worse proxy for FCFE (it also ignores interest and borrowing); discounting EBITDA would need a pretax rate.

### Preferred Stock

* FCFF from NI: **add back preferred dividends** (like after-tax interest, but not tax-deductible).
* FCFE from NI (already after preferred dividends): no further adjustment; net preferred **issuance** counts like net borrowing.
* Equity value = firm value − debt − preferred.

**Example (Welch Corporation, \$m).** Bonds 400 at 8%, preferred 100 at 8%, common 500 at 12%; NI 110, interest 32, preferred dividends 8, depreciation 40, FCInv 70, WCInv 20, net borrowing 25, tax 30%; FCFF growth 4%, FCFE growth 5.4%.

* WACC = 0.4(8%)(0.7) + 0.1(8%) + 0.5(12%) = **9.04%**.
* FCFF = 110 + 40 + 32(0.7) + 8 − 70 − 20 = **90.4** → firm value = 90.4(1.04)/0.0504 = 1,865.40 → equity = 1,865.40 − 400 − 100 = **1,365.40**.
* FCFE = 110 + 40 − 70 − 20 + 25 = **85** → equity = 85(1.054)/(0.12 − 0.054) = **1,357.42**.

## Single-Stage Models: Variations and Sensitivity

**A real (inflation-adjusted) model** is useful for international stocks, and where inflation is high or volatile:

$$
V_0=\frac{FCFE_0(1+g_{\text{real}})}{r_{\text{real}}-g_{\text{real}}}
$$

The real $r$ is the country's real return adjusted for industry, size and leverage; the real $g$ is benchmarked to the country's real growth.

**Example (Mukamba Ventures, DRC).** FCFE₀ CDF1,400; $r$ = 7.30% + 0.80% − 0.33% − 0.12% = **7.65%**; $g$ = 3.0% − 0.5% = 2.5% → $V_0$ = 1,435/0.0515 = **CDF27,864**.

**Sensitivity analysis** varies one input at a time to see which matters most. Value moves in proportion to the **base-year** FCF.

**Example (Petrobras).** FCFE₀ BRL2.59, $g$ 7%, $r$ = 8.9% + 1.4(5.3%) = 16.32% → $V_0$ = 2.59(1.07)/0.0932 = **BRL29.73**.

| Input | Low → value | High → value |
| --- | --- | --- |
| Beta 1.2 / 1.6 | 33.55 | 26.70 |
| $r_f$ 7.9% / 9.9% | 33.31 | 26.85 |
| ERP 4.3% / 6.3% | 34.99 | 25.85 |
| **FCFE growth 5% / 9%** | **24.02** | **38.57** (widest range) |

## Multistage Models

$$
\begin{aligned}
V_{\text{firm}}={}&\sum_{t=1}^{n}\frac{FCFF_t}{(1+WACC)^t}\\
&+\frac{FCFF_{n+1}}{WACC-g}\\
&\quad\times\frac{1}{(1+WACC)^n}
\end{aligned}
$$

$$
\begin{aligned}
V_{\text{equity}}={}&\sum_{t=1}^{n}\frac{FCFE_t}{(1+r)^t}\\
&+\frac{FCFE_{n+1}}{(r-g)(1+r)^n}
\end{aligned}
$$

* Stage-2 growth is the long-run sustainable rate: slightly below GDP growth for a declining industry, slightly above for a growing one.
* Stage-1 growth can be constant, or **declining** (as in the H-model).
* The "growth rate" may be of sales, net income or FCF itself: check which. The terminal value comes from the GGM on $FCF_{n+1}$ or a multiple (P/E × EPS), and is usually most of the value.

> [!IMPORTANT]
> When growth drops, FCFE can **jump**, because investment needs fall faster than profits. Always compute $FCFE_{n+1}$ from the stage-2 assumptions; don't just grow $FCFE_n$ at $g_L$.

**Example (TechnoSchaft, constant growth in each stage).** Sales per share €25, growing 20% for 3 years then 6%; net margin 10%; net FCInv 50% and WCInv 20% of the sales increase; 40% debt-financed; $r$ = 7% + 1.2(4.5%) = 12.4%.

| Year | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Sales/share | 30.000 | 36.000 | 43.200 | 45.792 |
| EPS | 3.000 | 3.600 | 4.320 | 4.579 |
| Net FCInv | 2.500 | 3.000 | 3.600 | 1.296 |
| WCInv | 1.000 | 1.200 | 1.440 | 0.518 |
| Debt financing | 1.400 | 1.680 | 2.016 | 0.726 |
| **FCFE** | **0.900** | **1.080** | **1.296** | **3.491** (+169%) |

$TV_3$ = 3.491/(0.124 − 0.06) = €54.55, with a PV of 38.415 → **$V_0$ = 0.801 + 0.855 + 0.913 + 38.415 = €40.98** (the terminal value is about 94%).

**Example (Sindhuh, declining EPS growth in stage 1).** EPS₀ \$2.40; growth 30, 18, 12, 9, 7%, then 7%; net capex per share 3.00, 2.50, 2.00, 1.50, 1.00 (then +7%); WCInv = 50% of net capex; 30% debt-financed; $r$ = 6% + 1.1(4%) = 10.4%.

| | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | --- | --- | --- | --- | --- |
| EPS | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | −0.030 | 1.057 | 2.023 | 2.919 | 3.759 |

$V_{2023}$ = 3.759/(0.104 − 0.07) = \$110.56, with a PV of 74.425 → **$V_0$ = \$78.73**. The trailing P/E is 78.73/2.40 = 32.8 now and 110.56/4.494 = 24.6 at the start of 2024: the P/E falls as growth fades.

**Example (Medina Werks, declining sales growth and margin).** Sales C\$600m; growth 20, 16, 12, 10, 8, 7%; net margin 14, 13, 12, 11, 10.5, 10%; net capex 60% and WC 25% of the sales increase; 40% debt; $r$ = 6% + 1.1(4.5%) = 10.95%; 70m shares.

* FCFE in years 1–5: 39.600, 49.824, 61.137, 65.480, 74.703 (PV ≈ 208.57); FCFE₆ = 79.235.
* $TV_5$ = 79.235/0.0395 = C\$2,005.95m, with a PV of 1,193.12.
* Equity = **C\$1,401.69m → C\$20.02 a share**.

**Three-stage models** combine a constant stage 1, a declining (or constant) stage 2 and a stable stage 3: a good approximation when cash flows fluctuate in reality.

**Example (Reliant Home Furnishings, three-stage FCFF).** FCFF₀ \$745m; 309.39m shares; $r$ = 5.04% + 0.9(5.5%) = 9.99%; WACC = 0.2(7.1%)(0.66) + 0.8(9.99%) = **8.93%**; debt \$1.518bn; growth 8.8% (years 1–4), then 7.4%, 6.0%, 4.6%, then 3.2%.

* FCFF: 811, 882, 959, 1,044, 1,121, 1,188, 1,243; 1,283 in year 8.
* PV of years 1–7 = \$5,097m; $TV_7$ = 1,283/(0.0893 − 0.032) = \$22,391m, with a PV of \$12,304m.
* Firm value \$17,401m → equity \$15,883m → **\$51.34 a share**.

**Choosing a model.** Single-stage for stable, mature companies (growth at or below the economy's); two-stage for a period of high growth followed by stability; three-stage for growth → transition → maturity. Compare the value with the market price to judge over- or undervaluation.

## ESG and Non-Operating Assets

* Quantifiable ESG items (fines, extra capex) → adjust the **cash flows**; hard-to-quantify ESG risks → add a judgmental **premium to the cost of equity**.

**Example (American Copper Mining Co., three-stage FCFF with ESG).** Stages: before the new mine operates, while it operates, after it closes. ESG adjustments: the licence is delayed from 3 to 5 years, water capex adds 10% to capex, and labor risk adds **75 bp** to the cost of equity. $r_d$ = 5%(0.75) = 3.75%; $r_e$ = 3% + 1.2(5%) + 0.75% = 9.75%; WACC = 0.5(3.75%) + 0.5(9.75%) = **6.75%**. Total PV of FCFF \$1,936m − debt \$968m = equity \$968m → **\$97 a share** vs a price of \$110 → **sell**.

**Non-operating assets** (excess cash and marketable securities, land held for investment, non-operating financial investments) are valued **separately, at market value**, and added:

$$
\begin{aligned}
V_{\text{firm}}={}&\text{Operating assets}\\
&+\text{Non-operating assets}
\end{aligned}
$$

> [!NOTE]
>
> **Textbook issues.**
>
> * American Copper: the text says the mine runs 2025–2039 (stage 3 from 2040), but the exhibit shows it closing around 2036, with a row labelled "PV of FCFF Years 2016–2035". The final numbers (\$1,936m, \$97 a share) are what matter.
> * The Pitts sales-based example says it "forecasts FCFF for 2013"; it means 2021.
> * Sindhuh's solution says WCInv is "50% of the increase in net capital expenditures", but the numbers use 50% of net capex itself, as in the setup.
