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

#### Example: Cagiati

| Input | Value |
| --- | --- |
| $FCFF_0$ | CHF700m |
| $r_d$ / $r$ | 5.7% / 11.8% |
| Weights $w_d$ / $w_e$ | 20% / 80% |
| Tax rate | 33.33% |
| $g$ | 5% |
| Debt | CHF2,200m |
| Shares | 200m |

**Step 1. WACC.**

$$
\begin{aligned}
WACC&=0.20\times 5.7\%\times(1-0.3333)\\
&\quad+0.80\times 11.8\%\\
&=10.2\%
\end{aligned}
$$

**Step 2. Firm value.**

$$
\begin{aligned}
\text{Firm value}&=\frac{700\times 1.05}{0.102-0.05}\\
&=\frac{735}{0.052}=14{,}134.6
\end{aligned}
$$

**Step 3. Equity per share.**

$$
\begin{aligned}
\text{Equity}&=14{,}134.6-2{,}200\\
&=11{,}934.6\\
\text{Per share}&=\frac{11{,}934.6}{200}=59.67
\end{aligned}
$$

**CHF59.67 a share.**

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

#### Example: Cane Distribution

Amounts are in \$000; the tax rate is 30%, and debt pays 7% interest.

**Step 1. FCFF from net income.**

$$
\begin{aligned}
FCFF={}&NI+NCC+Int(1-t)\\
&-FCInv-WCInv
\end{aligned}
$$

| | 2018 | 2019 | 2020 |
| --- | --- | --- | --- |
| Net income | 97.52 | 107.28 | 118.00 |
| + Depreciation | 45.00 | 49.50 | 54.45 |
| + Int(1 − t) | 10.98 | 12.08 | 13.28 |
| − FCInv | 0.00 | (50.00) | (55.00) |
| − WCInv | (56.00) | (11.60) | (12.76) |
| **FCFF** | **97.50** | **107.26** | **117.97** |

**Step 2. Check from CFO.** The CFO route gives the same result; e.g. 2018:

$$
\begin{aligned}
FCFF&=CFO+Int(1-t)\\
&\quad-FCInv\\
&=86.52+10.98-0=97.50
\end{aligned}
$$

**Step 3. FCFE.**

$$
\begin{aligned}
FCFE={}&FCFF-Int(1-t)\\
&+\text{Net borrowing}
\end{aligned}
$$

| | 2018 | 2019 | 2020 |
| --- | ---: | ---: | ---: |
| FCFF | 97.50 | 107.26 | 117.97 |
| − Int(1 − t) | (10.98) | (12.08) | (13.28) |
| + Net borrowing | 22.40 | 24.64 | 27.10 |
| **FCFE** | **108.92** | **119.82** | **131.79** |

#### Example: Pitts Corporation

Pitts's 2020 figures, in \$m:

| Item | Value | Item | Value |
| --- | ---: | --- | ---: |
| Net income | 240 | CFO | 495 |
| Depreciation | 300 | EBIT | 500 |
| Interest | 100 | EBITDA | 800 |
| Tax rate | 40% | Capex | 400 |

**Step 1. Building blocks.** Working capital excludes cash and notes payable; notes payable count as borrowing.

$$
\begin{aligned}
Int(1-t)&=100\times 0.6=60\\
WCInv&=\underbrace{40}_{\Delta AR}+\underbrace{30}_{\Delta\text{Inv}}\\
&\quad-\underbrace{15}_{\Delta AP}-\underbrace{10}_{\Delta\text{Accr}}=45\\
\text{Borrowing}&=\underbrace{50}_{\Delta\text{Notes}}+\underbrace{25}_{\Delta LTD}=75
\end{aligned}
$$

**Step 2. Every route gives the same answer.**

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
* **Higher depreciation** lowers NI but **raises CFO** by its tax shield:

$$
\begin{aligned}
\Delta NI&=-\Delta Dep\times(1-t)\\
\Delta CFO&=+\Delta Dep\times t
\end{aligned}
$$

* **Working capital**: rising inventory and receivables reduce CFO and FCFE; rising payables and accruals add to them. Shrinking assets or growing payables can't continue forever, and a growing company's working capital needs grow too.

### Uses of Free Cash Flow

Uses must equal sources: a consistency check that also shows the capital structure policy.

$$
\begin{aligned}
FCFF={}&\Delta\text{Cash}+Int(1-t)\\
&+(\text{Repaid}-\text{New debt})\\
&+\text{Dividends}\\
&+(\text{Buybacks}-\text{Issuance})\\
FCFE={}&\Delta\text{Cash}+\text{Dividends}\\
&+(\text{Buybacks}-\text{Issuance})
\end{aligned}
$$

#### Example: Pitts (Uses)

Pitts's cash rose by 10, it paid dividends of 160, and it neither bought back nor issued shares.

$$
\begin{aligned}
FCFF&=10+60-75+160+0\\
&=155\\
FCFE&=10+160+0=170
\end{aligned}
$$

CFO (495) covered capex (400), so the 75 of new debt effectively paid the dividend: **leverage is rising**.

## Forecasting FCFF and FCFE

1. **Constant growth** on a (normalized) base: $FCFF_t=FCFF_0(1+g)^t$. E.g., Pitts at 15%: FCFF 155 → 178.25 → 204.99 → 235.74.
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
FCFE={}&NI-(1-DR)\\
&\times(FCInv-Dep)\\
&-(1-DR)\,WCInv
\end{aligned}
$$

#### Example: Pitts (Sales-Based Forecast)

Pitts's sales were \$3,000m, up \$300m last year, when capex was 400, depreciation 300 and WCInv 45. The EBIT margin is 16.67%, the net margin 8%, the tax rate 40% and the target debt ratio 50%. Sales grow 10% next year.

**Step 1. Incremental rates from last year.**

$$
\begin{aligned}
\text{FC rate}&=\frac{400-300}{300}=33.33\%\\
\text{WC rate}&=\frac{45}{300}=15\%
\end{aligned}
$$

**Step 2. Next year's investment.** Sales rise by 300, to 3,300:

$$
\begin{aligned}
FCInv-Dep&=33.33\%\times 300=100\\
WCInv&=15\%\times 300=45
\end{aligned}
$$

**Step 3. FCFF and FCFE.**

$$
\begin{aligned}
FCFF&=\underbrace{3{,}300\times 16.67\%\times 0.6}_{330}\\
&\quad-100-45=185\\
FCFE&=\underbrace{3{,}300\times 8\%}_{264}-0.5\times 100\\
&\quad-0.5\times 45=191.50
\end{aligned}
$$

Equivalently, FCFE subtracts the full 145 of investment and adds net borrowing of 50% × 145 = 72.50.

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

$$
\begin{aligned}
FCFF={}&NI+NCC+Int(1-t)\\
&+\text{Pref div}\\
&-FCInv-WCInv\\
WACC={}&w_d\,r_d(1-t)+w_p\,r_p\\
&+w_e\,r\\
\text{Equity}={}&\text{Firm value}-\text{Debt}\\
&-\text{Preferred}
\end{aligned}
$$

#### Example: Welch Corporation

Amounts in \$m; the tax rate is 30%.

| Capital | Amount | Weight | Cost |
| --- | ---: | ---: | ---: |
| Bonds | 400 | 40% | 8% |
| Preferred | 100 | 10% | 8% |
| Common | 500 | 50% | 12% |

NI 110, interest 32, preferred dividends 8, depreciation 40, FCInv 70, WCInv 20, net borrowing 25. FCFF grows 4% and FCFE 5.4%.

**Step 1. WACC.**

$$
\begin{aligned}
WACC&=0.4\times 8\%\times 0.7\\
&\quad+0.1\times 8\%+0.5\times 12\%\\
&=9.04\%
\end{aligned}
$$

**Step 2. Value from FCFF.**

$$
\begin{aligned}
FCFF&=110+40+32\times 0.7\\
&\quad+8-70-20=90.4\\
\text{Firm value}&=\frac{90.4\times 1.04}{0.0904-0.04}\\
&=1{,}865.40\\
\text{Equity}&=1{,}865.40-400-100\\
&=1{,}365.40
\end{aligned}
$$

**Step 3. Value from FCFE.**

$$
\begin{aligned}
FCFE&=110+40-70-20+25\\
&=85\\
\text{Equity}&=\frac{85\times 1.054}{0.12-0.054}\\
&=1{,}357.42
\end{aligned}
$$

The two routes give close values (**1,365.40** vs **1,357.42**).

## Single-Stage Models: Variations and Sensitivity

**A real (inflation-adjusted) model** is useful for international stocks, and where inflation is high or volatile:

$$
V_0=\frac{FCFE_0(1+g_{\text{real}})}{r_{\text{real}}-g_{\text{real}}}
$$

The real $r$ is the country's real return adjusted for industry, size and leverage; the real $g$ is benchmarked to the country's real growth.

#### Example: Mukamba Ventures (Real Model)

Mukamba, in the Democratic Republic of the Congo, has $FCFE_0$ = CDF1,400.

**Step 1. Real required return.** Start from the country's real return and adjust for industry, size and leverage:

$$
\begin{aligned}
r_{\text{real}}&=7.30\%+0.80\%\\
&\quad-0.33\%-0.12\%\\
&=7.65\%
\end{aligned}
$$

**Step 2. Real growth.** The country's real growth of 3.0%, less 0.5% for the company:

$$g_{\text{real}}=3.0\%-0.5\%=2.5\%$$

**Step 3. Value.**

$$
\begin{aligned}
V_0&=\frac{1{,}400\times 1.025}{0.0765-0.025}\\
&=\frac{1{,}435}{0.0515}=27{,}864
\end{aligned}
$$

**CDF27,864.**

**Sensitivity analysis** varies one input at a time to see which matters most. Value moves in proportion to the **base-year** FCF.

#### Example: Petrobras (Sensitivity)

$FCFE_0$ = BRL2.59 and $g$ = 7%; the risk-free rate is 8.9%, beta 1.4 and the ERP 5.3%.

$$
\begin{aligned}
r&=8.9\%+1.4\times 5.3\%=16.32\%\\
V_0&=\frac{2.59\times 1.07}{0.1632-0.07}\\
&=\frac{2.7713}{0.0932}=29.73
\end{aligned}
$$

The base value is **BRL29.73**. Changing one input at a time:

| Input (low / high) | Value at low | Value at high |
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

Per share, with a target debt ratio DR financing net investment:

$$
\begin{aligned}
FCFE_t={}&EPS_t-(1-DR)\\
&\times\left[(FCInv-Dep)_t\right.\\
&\quad\left.+\,WCInv_t\right]
\end{aligned}
$$

#### Example: TechnoSchaft (Constant Growth in Each Stage)

| Input | Value |
| --- | --- |
| Sales per share | €25, growing 20% for 3 years, then 6% |
| Net margin | 10% |
| Net FCInv / WCInv | 50% / 20% of the sales increase |
| Debt financing (DR) | 40% |
| $r$ | 7% + 1.2 × 4.5% = 12.4% |

**Step 1. FCFE per share.** E.g. Year 1: sales rise by 5.00, so

$$
\begin{aligned}
FCFE_1&=3.00-0.6\times(2.50+1.00)\\
&=0.90
\end{aligned}
$$

| Year | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Sales/share | 30.000 | 36.000 | 43.200 | 45.792 |
| EPS | 3.000 | 3.600 | 4.320 | 4.579 |
| Net FCInv | 2.500 | 3.000 | 3.600 | 1.296 |
| WCInv | 1.000 | 1.200 | 1.440 | 0.518 |
| Debt financing | 1.400 | 1.680 | 2.016 | 0.726 |
| **FCFE** | **0.900** | **1.080** | **1.296** | **3.491** (+169%) |

FCFE jumps 169% in Year 4: growth falls from 20% to 6%, so investment needs shrink.

**Step 2. Terminal value at Year 3.**

$$
\begin{aligned}
TV_3&=\frac{FCFE_4}{r-g}=\frac{3.491}{0.124-0.06}\\
&=54.55\\
\text{PV}(TV_3)&=\frac{54.55}{1.124^3}=38.415
\end{aligned}
$$

**Step 3. Add.**

$$
\begin{aligned}
V_0&=\underbrace{0.801+0.855+0.913}_{\text{PV of }FCFE_1\dots FCFE_3}\\
&\quad+38.415=40.98
\end{aligned}
$$

**$V_0$ = €40.98**; the terminal value is about 94% of it.

#### Example: Sindhuh (Declining EPS Growth in Stage 1)

| Input | Value |
| --- | --- |
| $EPS_0$ | \$2.40 |
| EPS growth | 30%, 18%, 12%, 9%, 7% (2020–2024), then 7% |
| Net capex per share | 3.00, 2.50, 2.00, 1.50, 1.00, then growing 7% |
| WCInv | 50% of net capex |
| DR | 30% |
| $r$ | 6% + 1.1 × 4% = 10.4% |

**Step 1. FCFE per share.** E.g. 2020:

$$
\begin{aligned}
FCFE_{2020}&=3.120\\
&\quad-0.7\times(3.00+1.50)\\
&=-0.030
\end{aligned}
$$

| | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | --- | --- | --- | --- | --- |
| EPS | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | −0.030 | 1.057 | 2.023 | 2.919 | 3.759 |

**Step 2. Terminal value at the end of 2023.**

$$
\begin{aligned}
V_{2023}&=\frac{FCFE_{2024}}{r-g}\\
&=\frac{3.759}{0.104-0.07}=110.56\\
\text{PV}(V_{2023})&=\frac{110.56}{1.104^4}=74.425
\end{aligned}
$$

**Step 3. Add** the PV of FCFE for 2020–2023 (4.31): **$V_0$ = \$78.73**.

**P/E check.** The trailing P/E is $78.73/2.40=32.8$ now and $110.56/4.494=24.6$ at the start of 2024: the P/E falls as growth fades.

**Three-stage models** combine a constant stage 1, a declining (or constant) stage 2 and a stable stage 3: a good approximation when cash flows fluctuate in reality.

#### Example: Reliant Home Furnishings (Three-Stage FCFF)

| Input | Value |
| --- | --- |
| $FCFF_0$ | \$745m |
| Shares | 309.39m |
| Debt | \$1,518m |
| $r$ | 5.04% + 0.9 × 5.5% = 9.99% |
| Pretax $r_d$, tax rate | 7.1%, 34% |
| Weights $w_d$ / $w_e$ | 20% / 80% |
| Growth | 8.8% (Years 1–4); 7.4%, 6.0%, 4.6% (Years 5–7); then 3.2% |

**Step 1. WACC.**

$$
\begin{aligned}
WACC&=0.2\times 7.1\%\times 0.66\\
&\quad+0.8\times 9.99\%\\
&=8.93\%
\end{aligned}
$$

**Step 2. FCFF forecast.**

| Year | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| FCFF (\$m) | 811 | 882 | 959 | 1,044 | 1,121 | 1,188 | 1,243 | 1,283 |

**Step 3. Terminal value at Year 7.**

$$
\begin{aligned}
TV_7&=\frac{1{,}283}{0.0893-0.032}=22{,}391\\
\text{PV}(TV_7)&=\frac{22{,}391}{1.0893^7}=12{,}304
\end{aligned}
$$

**Step 4. Firm, equity and per share.**

$$
\begin{aligned}
\text{Firm value}&=5{,}097+12{,}304=17{,}401\\
\text{Equity}&=17{,}401-1{,}518=15{,}883\\
\text{Per share}&=\frac{15{,}883}{309.39}=51.34
\end{aligned}
$$

**\$51.34 a share.**

**Choosing a model.** Single-stage for stable, mature companies (growth at or below the economy's); two-stage for a period of high growth followed by stability; three-stage for growth → transition → maturity. Compare the value with the market price to judge over- or undervaluation.

## ESG and Non-Operating Assets

* Quantifiable ESG items (fines, extra capex, a delayed licence) → adjust the **cash flows**; hard-to-quantify ESG risks (e.g., labor relations) → add a judgmental **premium to the cost of equity**.

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
> * The Pitts sales-based example says it "forecasts FCFF for 2013"; it means 2021.
> * Sindhuh's solution says WCInv is "50% of the increase in net capital expenditures", but the numbers use 50% of net capex itself, as in the setup.
