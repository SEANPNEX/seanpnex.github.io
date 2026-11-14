# Free Cash Flow Valuation

This module covers FCFF and FCFE: how to compute them from NI, CFO, EBIT and EBITDA, how to forecast them (sales-based, target debt ratio), how dividends, buybacks and leverage affect them, and single-, two- and three-stage FCF valuation (including preferred stock, real-terms international valuation, sensitivity analysis, ESG and non-operating assets).

* [Learning Outcomes](#learning-outcomes)
* [FCFF vs FCFE](#fcff-vs-fcfe)
* [Computing FCFF and FCFE](#computing-fcff-and-fcfe)
* [Noncash items and working capital](#noncash-items-and-working-capital)
* [Uses of free cash flow](#uses-of-free-cash-flow)
* [Forecasting FCFF and FCFE](#forecasting-fcff-and-fcfe)
* [Dividends, buybacks, leverage, NI and EBITDA](#dividends-buybacks-leverage-ni-and-ebitda)
* [Preferred stock in the capital structure](#preferred-stock-in-the-capital-structure)
* [Single-stage variations and sensitivity](#single-stage-variations-and-sensitivity)
* [Two-stage and three-stage models](#two-stage-and-three-stage-models)
* [ESG and non-operating assets](#esg-and-non-operating-assets)
* [Quick Recall](#quick-recall)

## Learning Outcomes

The candidate should be able to:

* Compare the FCFF and FCFE approaches to valuation
* Explain the ownership perspective implicit in the FCFE approach
* Explain the adjustments to net income, EBIT, EBITDA, and CFO to calculate FCFF and FCFE
* Calculate FCFF and FCFE
* Describe approaches for forecasting FCFF and FCFE
* Explain how dividends, share repurchases, share issues, and changes in leverage may affect future FCFF and FCFE
* Compare the FCFE model and dividend discount models
* Evaluate the use of net income and EBITDA as proxies for cash flow in valuation
* Explain the use of sensitivity analysis in FCFF and FCFE valuations
* Explain the single-stage, two-stage, and three-stage FCFF and FCFE models and justify the selection of the appropriate model
* Estimate a company's value using the appropriate free cash flow model(s)
* Describe approaches for calculating the terminal value in a multistage valuation model
* Evaluate whether a stock is over-, fairly, or undervalued based on a free cash flow valuation model

## FCFF vs FCFE

| | FCFF | FCFE |
| --- | --- | --- |
| Cash flow to | All capital providers (debt, preferred, common) | Common shareholders only |
| After | Operating expenses, taxes, FCInv, WCInv | Same **plus** interest, principal (net of new borrowing) |
| Discount at | **WACC** | **Required return on equity, r** |
| Gives | Firm value → equity = firm − MV debt (− preferred) | Equity value directly |

$$
\text{Firm value}=\sum_{t=1}^{\infty}\frac{FCFF_t}{(1+WACC)^t}\qquad \text{Equity value}=\sum_{t=1}^{\infty}\frac{FCFE_t}{(1+r)^t}
$$

$$
WACC=\frac{MV_D}{MV_D+MV_E}r_d(1-t)+\frac{MV_E}{MV_D+MV_E}r
$$

Use **market-value** (or target) weights and the **marginal** tax rate.

Choosing between them:

* Stable capital structure → **FCFE** (simpler, more direct)
* **FCFF** preferred when the company is levered with **negative FCFE**, or levered with a **changing capital structure** (FCFF growth reflects fundamentals; WACC less sensitive to leverage than r)
* APV: firm value = unlevered value (FCFF at unlevered cost of equity) + NPV of debt effects (tax shield − distress costs)

**FCFE ownership perspective:** FCFE is what the company **can** pay out without impairing value. A **controlling** owner can redirect it, so FCF models suit a control perspective (or a takeover target).

**Textbook example (Cagiati, constant-growth FCFF).** FCFF CHF700m, $r_d$ 5.7%, r 11.8%, 20/80 debt/equity, t 33.33%, g 5%, debt CHF2.2bn, 200m shares.

* WACC = 0.20(5.7%)(0.6667) + 0.80(11.8%) = **10.2%**
* Firm = 700(1.05)/(0.102 − 0.05) = 735/0.052 = CHF14,134.6m → equity = 14,134.6 − 2,200 = CHF11,934.6m → **CHF59.67/share**

$$
\text{Firm value}=\frac{FCFF_0(1+g)}{WACC-g}\qquad \text{Equity value}=\frac{FCFE_0(1+g)}{r-g}
$$

FCFF and FCFE growth rates need not be the same.

## Computing FCFF and FCFE

> [!IMPORTANT]
> The six formulas to memorize:
>
> $$FCFF=NI+NCC+Int(1-t)-FCInv-WCInv$$
> $$FCFF=CFO+Int(1-t)-FCInv$$
> $$FCFF=EBIT(1-t)+Dep-FCInv-WCInv$$
> $$FCFF=EBITDA(1-t)+Dep\cdot t-FCInv-WCInv$$
> $$FCFE=FCFF-Int(1-t)+\text{Net borrowing}$$
> $$FCFE=NI+NCC-FCInv-WCInv+\text{Net borrowing}=CFO-FCInv+\text{Net borrowing}$$

Building blocks:

* **NI** = net income to common (after preferred dividends)
* **NCC** = net noncash charges (depreciation, amortization, ...; see table below)
* **Int(1 − t)** added back for FCFF because interest belongs to debtholders (FCFF and WACC must be defined consistently: after-tax interest with after-tax WACC)
* **FCInv** = capex − proceeds from asset sales. Cash acquisitions count as capex. Non-cash acquisitions (for stock/debt) aren't in the cash flow statement but matter for **forecasts**
* **WCInv** = increase in working capital **excluding cash and short-term debt** (notes payable, current portion of LTD are financing)
* **Net borrowing** = new debt − repayments
* From EBIT: depreciation added back in full. From EBITDA: only the **tax shield** $Dep\times t$ is added (depreciation was never subtracted)

**Textbook example (Cane Distribution, from NI and CFO, \$000).** t = 30%, interest at 7%.

| | 2018 | 2019 | 2020 |
| --- | --- | --- | --- |
| Net income | 97.52 | 107.28 | 118.00 |
| + Depreciation | 45.00 | 49.50 | 54.45 |
| + Int(1 − t) | 10.98 | 12.08 | 13.28 |
| − FCInv | 0.00 | (50.00) | (55.00) |
| − WCInv | (56.00) | (11.60) | (12.76) |
| **FCFF** | **97.50** | **107.26** | **117.97** |

* From CFO: CFO 86.52 / 145.18 / 159.69 + Int(1 − t) − FCInv → same FCFF
* FCFE = FCFF − Int(1 − t) + net borrowing (22.40 / 24.64 / 27.10) = **108.92 / 119.82 / 131.79**

**Textbook example (Pitts Corporation, 2020, \$m).** NI 240, Dep 300, interest 100, t 40%, capex 400, CFO 495, EBIT 500, EBITDA 800. WCInv = ΔAR 40 + ΔInv 30 − ΔAP 15 − Δaccrued 10 = **45** (cash and notes payable excluded). Net borrowing = Δnotes payable 50 + ΔLTD 25 = **75**.

| Start from | Calculation | Result |
| --- | --- | --- |
| NI → FCFF | 240 + 300 + 60 − 400 − 45 | **155** |
| CFO → FCFF | 495 + 60 − 400 | **155** |
| EBIT → FCFF | 500(0.6) + 300 − 400 − 45 | **155** |
| EBITDA → FCFF | 800(0.6) + 300(0.4) − 400 − 45 | **155** |
| FCFF → FCFE | 155 − 60 + 75 | **170** |
| NI → FCFE | 240 + 300 − 400 − 45 + 75 | **170** |
| CFO → FCFE | 495 − 400 + 75 | **170** |

FCFE > FCFF here only because borrowing was large.

### Interest and dividends on the cash flow statement

| | IFRS | US GAAP |
| --- | --- | --- |
| Interest received | Operating or investing | Operating |
| Interest paid | Operating **or financing** | Operating |
| Dividends received | Operating or investing | Operating |
| Dividends paid | Operating or financing | Financing |

> [!IMPORTANT]
> FCFF from CFO adds back Int(1 − t) **only if interest paid was deducted in CFO**. If an IFRS company put interest paid in financing, don't add it back. If dividends paid were put in operating (IFRS), add them back to CFO.

## Noncash items and working capital

| Noncash item | Adjustment to NI → FCFF |
| --- | --- |
| Depreciation | Add back |
| Amortization and impairment of intangibles | Add back |
| Restructuring charges (expense) | Add back |
| Restructuring charges (income from reversal) | Subtract |
| Amortization of bond **discount** | Add back |
| Amortization of bond **premium** | Subtract |
| Losses on non-operating activity | Add back |
| Gains on non-operating activity | Subtract |
| Deferred taxes | Add back, but needs attention |

* Gain on sale: equipment with book value €60,000 sold for €100,000 → subtract the €40,000 gain from NI; the €100,000 shows up in investing (reduces FCInv)
* **Deferred tax liabilities:** don't add back if expected to **reverse** soon; add back if a growing company can defer indefinitely (an acquirer may still owe them later)
* **Deferred tax assets** (e.g. non-deductible restructuring charges): subtract only if expected to recur
* **Stock options:** the expense is noncash, but exercise cash and part of the tax benefit go to financing; don't forecast non-persistent flows; consider **expected** shares outstanding (dilution)
* Strip **non-recurring** items from the base year

**Textbook example (Duplico, sustainability of working capital).** Capex/depreciation fell from €997.8m/€235.4m (2020) to €317.6m/€309.2m (2022). Higher depreciation **lowers NI** by Dep(1 − t) but **raises CFO** by Dep × t (tax shield). Increases in inventory and receivables reduce CFO and FCFE; increases in payables and accruals add to them. Shrinking asset balances or growing payables can't continue forever; a growing company's working capital needs grow too.

## Uses of free cash flow

Uses must equal sources (a consistency check that also shows capital-structure policy).

* Uses of FCFF = Δcash + Int(1 − t) + (repayments − new borrowing) + dividends + (buybacks − issuance)
* Uses of FCFE = Δcash + dividends + (buybacks − issuance)

**Textbook example (Pitts).** FCFF 155 = Δcash 10 + 60 − 75 + 160 + 0. FCFE 170 = 10 + 160 + 0. CFO (495) covered capex (400), so new debt was effectively used to pay dividends → rising leverage.

## Forecasting FCFF and FCFE

1. **Constant growth** on a (normalized) base. Textbook (Pitts, 15%): FCFF 155 → 178.25 → 204.99 → 235.74.
2. **Forecast components**, usually tied to sales. Assume (FCInv − Dep) and WCInv are constant fractions of the **sales increase**:

$$
\text{Incremental FC rate}=\frac{\text{Capex}-\text{Dep}}{\Delta\text{Sales}}\qquad \text{Incremental WC rate}=\frac{\Delta WC}{\Delta\text{Sales}}
$$

$$
FCFF=EBIT(1-t)-(FCInv-Dep)-WCInv
$$

With a target debt ratio DR financing net new investment (depreciation the only NCC):

$$
FCFE=NI-(1-DR)(FCInv-Dep)-(1-DR)WCInv
$$

**Textbook example (Pitts, sales-based).** Sales \$3,000m (+\$300m last year), EBIT margin 16.67%, t 40%; incremental FC = (400 − 300)/300 = **33.33%**, incremental WC = 45/300 = **15%**. Next year, sales +10%:

| | FCFF | FCFE (NPM 8%, DR 50%) |
| --- | --- | --- |
| Sales | 3,300 | 3,300 |
| EBIT(1 − t) / NI | 330 | 264 |
| Incremental FC | (100) | (100) |
| Incremental WC | (45) | (45) |
| Net borrowing | | 72.50 |
| **Result** | **185** | **191.50** |

Five-year version with EBIT margin falling from 16.67% to 14.5%: FCFF 185.00, 188.98, 195.90, 202.31, 208.05.

The method is less accurate when there are significant noncash charges other than depreciation.

## Dividends, buybacks, leverage, NI and EBITDA

* **Dividends, buybacks, share issues: no effect** on FCFF or FCFE (they are **uses** of FCF)
* **Higher leverage:** no effect on FCFF (beyond its calculation). FCFE rises by the new debt in the year issued, then falls by Int(1 − t) afterwards. More debt also raises the interest tax shield
* **FCFE vs DDM:** with consistent inputs (FCFE = dividends) they give the same value. FCF preferred when dividends are zero/low, discretionary (a poor signal of profitability), or the company is a takeover target. Same forces drive both: fast growers have low dividends **and** low FCFE
* Third-party "free cash flow" definitions often aren't built for valuation; know the definition used

> [!IMPORTANT]
> **NI is not FCFE:** it ignores capex, working capital investment and net borrowing (equal only when capex = depreciation, no WC investment, no net borrowing). **EBITDA is not FCFF:** it is pre-tax, ignores the depreciation tax shield, capex and WC; an even worse proxy for FCFE (ignores interest and borrowing). Discounting EBITDA would need a pre-tax rate.

## Preferred stock in the capital structure

* FCFF from NI: **add back preferred dividends** (like after-tax interest, but not tax-deductible)
* FCFE from NI (NI already after preferred dividends): no further adjustment; net preferred **issuance** counts like net borrowing
* Equity = firm value − debt − preferred

**Textbook example (Welch Corporation, \$m).** Bonds 400 at 8%, preferred 100 at 8%, common 500 at 12%; NI 110, interest 32, preferred dividends 8, Dep 40, FCInv 70, WCInv 20, net borrowing 25, t 30%; g(FCFF) 4%, g(FCFE) 5.4%.

* WACC = 0.4(8%)(0.7) + 0.1(8%) + 0.5(12%) = **9.04%**
* FCFF = 110 + 40 + 32(0.7) + 8 − 70 − 20 = **90.4**
* Firm = 90.4(1.04)/0.0504 = 1,865.40 → equity = 1,865.40 − 400 − 100 = **1,365.40**
* FCFE = 110 + 40 − 70 − 20 + 25 = **85** → equity = 85(1.054)/(0.12 − 0.054) = **1,357.42**

## Single-stage variations and sensitivity

**Real (inflation-adjusted) single-stage model**, useful for international stocks and high/volatile inflation:

$$
V_0=\frac{FCFE_0(1+g_{real})}{r_{real}-g_{real}}
$$

Real r = country real return ± industry ± size ± leverage adjustments; real g benchmarked to the country's real growth.

**Textbook example (Mukamba Ventures, DRC).** FCFE₀ CDF1,400; r = 7.30% + 0.80% − 0.33% − 0.12% = **7.65%**; g = 3.0% − 0.5% = 2.5% → $V_0$ = 1,435/0.0515 = **CDF27,864**.

**Sensitivity analysis:** vary one input at a time to see which matters most. Value scales proportionally with the **base-year** FCF.

**Textbook example (Petrobras).** FCFE₀ BRL2.59, g 7%, r = 8.9% + 1.4(5.3%) = 16.32% → $V_0$ = 2.59(1.07)/0.0932 = **BRL29.73**.

| Variable | Low → value | High → value |
| --- | --- | --- |
| Beta 1.2 / 1.6 | 33.55 | 26.70 |
| $r_f$ 7.9% / 9.9% | 33.31 | 26.85 |
| ERP 4.3% / 6.3% | 34.99 | 25.85 |
| **FCFE g 5% / 9%** | **24.02** | **38.57** (widest range) |

## Two-stage and three-stage models

$$
\text{Firm value}=\sum_{t=1}^{n}\frac{FCFF_t}{(1+WACC)^t}+\frac{FCFF_{n+1}}{WACC-g}\cdot\frac{1}{(1+WACC)^n}
$$

$$
\text{Equity value}=\sum_{t=1}^{n}\frac{FCFE_t}{(1+r)^t}+\frac{FCFE_{n+1}}{r-g}\cdot\frac{1}{(1+r)^n}
$$

* Stage-2 growth = long-run sustainable rate: slightly below GDP growth for a declining industry, slightly above for a growing one
* Two versions: constant growth in stage 1, or **declining** growth in stage 1 (H-model-like)
* "Growth rate" may be of sales, NI, or FCF itself; check which. Terminal value: GGM on $FCF_{n+1}$ or a multiple (P/E × EPS). Terminal value is usually most of the value

> [!IMPORTANT]
> When growth drops, FCFE can **jump** because investment needs fall faster than profits. Always compute $FCFE_{n+1}$ from the stage-2 assumptions; don't just grow $FCFE_n$ by $g_L$.

**Textbook example (TechnoSchaft, constant growth in each stage).** Sales/share €25, +20% for 3 years then 6%; NPM 10%; net FCInv 50% and WCInv 20% of the sales increase; 40% debt-financed; r = 7% + 1.2(4.5%) = 12.4%.

| Year | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Sales/share | 30.000 | 36.000 | 43.200 | 45.792 |
| EPS | 3.000 | 3.600 | 4.320 | 4.579 |
| Net FCInv | 2.500 | 3.000 | 3.600 | 1.296 |
| WCInv | 1.000 | 1.200 | 1.440 | 0.518 |
| Debt financing | 1.400 | 1.680 | 2.016 | 0.726 |
| **FCFE** | **0.900** | **1.080** | **1.296** | **3.491** (+169%) |

* $TV_3$ = 3.491/(0.124 − 0.06) = €54.55 → PV 38.415
* **$V_0$ = 0.801 + 0.855 + 0.913 + 38.415 = €40.98** (TV ≈ 94%)

**Textbook example (Sindhuh, declining EPS growth in stage 1).** EPS₀ \$2.40; growth 30, 18, 12, 9, 7% then 7%; net capex/share 3.00, 2.50, 2.00, 1.50, 1.00 (then +7%); WCInv = 50% of net capex; 30% debt-financed; r = 6% + 1.1(4%) = 10.4%.

| | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | --- | --- | --- | --- | --- |
| EPS | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | −0.030 | 1.057 | 2.023 | 2.919 | 3.759 |

* $V_{2023}$ = 3.759/(0.104 − 0.07) = \$110.56 → PV 74.425
* **$V_0$ = \$78.73**; trailing P/E now 78.73/2.40 = 32.8, at start of 2024 110.56/4.494 = 24.6 (P/E falls as growth fades)

**Textbook example (Medina Werks, declining sales growth and margin).** Sales C\$600m; growth 20, 16, 12, 10, 8, 7%; NPM 14, 13, 12, 11, 10.5, 10%; net capex 60% and WC 25% of the sales increase; 40% debt; r = 6% + 1.1(4.5%) = 10.95%; 70m shares.

* FCFE years 1–5: 39.600, 49.824, 61.137, 65.480, 74.703 (PV sum ≈ 208.57); FCFE₆ = 79.235
* $TV_5$ = 79.235/0.0395 = C\$2,005.95m → PV 1,193.12
* Equity = **C\$1,401.69m → C\$20.02/share**

**Three-stage** = constant stage 1, declining (or constant) stage 2, stable stage 3. Good approximation for cash flows that fluctuate in reality.

**Textbook example (Reliant Home Furnishings, three-stage FCFF).** FCFF₀ \$745m; 309.39m shares; r = 5.04% + 0.9(5.5%) = 9.99%; WACC = 0.2(7.1%)(0.66) + 0.8(9.99%) = **8.93%**; debt \$1.518bn; growth 8.8% (years 1–4), 7.4%, 6.0%, 4.6%, then 3.2%.

* FCFF: 811, 882, 959, 1,044, 1,121, 1,188, 1,243, 1,283 (year 8)
* PV years 1–7 = \$5,097m; $TV_7$ = 1,283/(0.0893 − 0.032) = \$22,391m → PV \$12,304m
* Firm \$17,401m → equity \$15,883m → **\$51.34/share**

Model selection: single-stage for stable mature firms (g ≤ economy); two-stage for a period of high growth then stable; three-stage for growth → transition → maturity. Evaluate over/undervaluation by comparing the value with the market price.

## ESG and non-operating assets

* Quantifiable ESG items (fines, extra capex) → adjust **cash flows**; hard-to-quantify ESG risks → add a judgmental **premium to the cost of equity**

**Textbook example (American Copper Mining Co., three-stage FCFF with ESG).** Stages: before the new mine operates, during operation, after closure. ESG: licence delayed 3 → 5 years, water capex +10% of capex, labour-risk premium **+75 bp** on equity. $r_d$ = 5%(0.75) = 3.75%; $r_e$ = 3% + 1.2(5%) + 0.75% = 9.75%; WACC = 0.5(3.75%) + 0.5(9.75%) = **6.75%**. Total PV of FCFF \$1,936m − debt \$968m = equity \$968m → **\$97/share** vs price \$110 → **sell**.

> [!NOTE]
> Textbook issue: in the ACMC exhibit, the text says the mine runs 2025–2039 (stage 3 from 2040), but the exhibit's columns and labels show the closing around 2036 and a row labelled "PV of FCFF Years 2016–2035". The final numbers (\$1,936m, \$97/share) are what matter.

**Non-operating assets:**

$$
\text{Firm value}=\text{Value of operating assets (FCFF)}+\text{Value of non-operating assets}
$$

Excess cash, excess marketable securities, land held for investment, non-operating financial investments: value **separately at market value** and add.

> [!NOTE]
> Textbook issues: (1) the Pitts sales-based example says "forecasts FCFF for 2013"; it means 2021. (2) Sindhuh's solution says WCInv is "50% of the increase in net capital expenditures", but the numbers use 50% of net capital expenditure itself, as in the setup.

## Quick Recall

* FCFF at WACC → firm; minus debt (and preferred) → equity. FCFE at r → equity.
* FCFF over FCFE: negative FCFE with leverage, or a changing capital structure.
* NI route: + NCC + Int(1 − t) − FCInv − WCInv. CFO route: + Int(1 − t) − FCInv.
* EBIT route: EBIT(1 − t) + Dep. EBITDA route: EBITDA(1 − t) + Dep × t.
* FCFE = FCFF − Int(1 − t) + net borrowing.
* WC excludes cash and short-term debt. Gains subtract, losses add back.
* Target DR: FCFE = NI − (1 − DR)(FCInv − Dep) − (1 − DR)WCInv.
* Dividends/buybacks/issues don't change FCF; new debt raises FCFE this year, lowers it later.
* Multistage: compute $FCF_{n+1}$ from stage-2 assumptions; TV discounted n periods.
* Add non-operating assets at market value.
