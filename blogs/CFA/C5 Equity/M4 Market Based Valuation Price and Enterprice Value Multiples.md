---
title: "Market-Based Valuation: Price and Enterprise Value Multiples"
---

# Market-Based Valuation: Price and Enterprise Value Multiples

This module covers valuing a stock with multiples, either by comparing with similar assets (method of comparables) or by deriving the multiple from forecast fundamentals (justified multiples). It goes through P/E, P/B, P/S, price to cash flow, dividend yield, EV/EBITDA and other EV multiples, then cross-border issues, momentum indicators and how to average multiples.

* [Learning Outcomes](#learning-outcomes)
* [Two methods: comparables vs fundamentals](#two-methods-comparables-vs-fundamentals)
* [P/E: definitions and EPS adjustments](#pe-definitions-and-eps-adjustments)
* [Justified P/E and predicted P/E](#justified-pe-and-predicted-pe)
* [P/E with comparables, PEG, market models](#pe-with-comparables-peg-market-models)
* [Terminal value from multiples](#terminal-value-from-multiples)
* [Price to book](#price-to-book)
* [Price to sales](#price-to-sales)
* [Price to cash flow](#price-to-cash-flow)
* [Dividend yield](#dividend-yield)
* [EV/EBITDA and other EV multiples](#evebitda-and-other-ev-multiples)
* [Justified multiples summary](#justified-multiples-summary)
* [Cross-border comparisons](#cross-border-comparisons)
* [Momentum indicators](#momentum-indicators)
* [Averaging multiples and using several indicators](#averaging-multiples-and-using-several-indicators)
* [Quick Recall](#quick-recall)

## Learning Outcomes

The candidate should be able to:

* Contrast the method of comparables and the method based on forecasted fundamentals, and explain the economic rationale for each
* Calculate and interpret a justified price multiple
* Describe rationales for and drawbacks of alternative price multiples and dividend yield
* Calculate and interpret alternative price multiples and dividend yield
* Calculate and interpret underlying earnings, explain methods of normalizing EPS, and calculate normalized EPS
* Explain and justify the use of earnings yield (E/P)
* Describe fundamental factors that influence alternative price multiples and dividend yield
* Calculate and interpret a predicted P/E from a cross-sectional regression, and explain its limitations
* Calculate and interpret the justified P/E, P/B, and P/S based on forecasted fundamentals
* Calculate and interpret the PEG ratio and explain its use in relative valuation
* Calculate and explain the use of price multiples in determining terminal value in a multistage DCF model
* Evaluate whether a stock is over-, fairly, or undervalued based on comparisons of multiples
* Evaluate a stock by the method of comparables and explain the importance of fundamentals in using it
* Explain alternative definitions of cash flow used in price and EV multiples and the limitations of each
* Calculate and interpret EV multiples and evaluate the use of EV/EBITDA
* Explain sources of differences in cross-border valuation comparisons
* Describe momentum indicators and their use in valuation
* Explain the use of the arithmetic mean, harmonic mean, weighted harmonic mean, and median for a group of multiples

## Two methods: comparables vs fundamentals

| | Method of comparables | Method based on forecasted fundamentals |
| --- | --- | --- |
| Idea | Value from multiples of similar assets (comps, guideline companies) | Multiple derived from a DCF/RI model of the company itself |
| Economic rationale | **Law of one price**: similar assets sell at similar prices | Value = PV of future cash flows driven by profitability, growth, risk |
| Conclusion | **Relative** valuation (the comps may themselves be mispriced) | Absolute (intrinsic) valuation |

* **Justified multiple** = the multiple's fair value, from either method. Justified > actual → undervalued
* Use the peer **median** to limit outliers. Textbook: peer median P/B 2.2 × BVPS \$23 = \$50.60; an RI value of \$46 → justified P/B = 46/23 = **2.0**

**Textbook example (simplest comparables).** A's EPS \$1.50, competitor B's P/E 22. At \$37.50, A's P/E = 25 > 22 → A **overvalued** relative to B; at B's P/E, A is worth 1.50 × 22 = **\$33**.

## P/E: definitions and EPS adjustments

| Rationales | Drawbacks |
| --- | --- |
| Earning power is the main driver of value | EPS can be zero, negative or tiny → P/E meaningless |
| Most widely used and recognized multiple | Hard to separate recurring from transient earnings |
| P/E differences relate to long-run returns | Management discretion can distort EPS, hurting comparability |

* **Trailing P/E** = price / last four quarters' EPS (TTM)
* **Forward (leading) P/E** = price / next year's expected EPS: next four quarters, NTM, or next fiscal year (FY1 / FY2). Use the **same definition** for every company. Rising earnings → forward P/E < trailing P/E
* Forward P/E preferred when forecasts exist or after a major acquisition / leverage change; trailing when earnings aren't predictable
* **NTM EPS** = time-weighted mix of fiscal-year estimates, e.g. (10/12) × FY1 + (2/12) × FY2

Adjustments to trailing EPS:

1. **Dilution:** prefer diluted EPS for comparisons. Textbook (Siemens): basic €7.12, diluted €7.01, price €95.94 → P/E 13.47 vs **13.69**
2. **Nonrecurring items → underlying (core, persistent) earnings.** Company-reported "core EPS" is a non-IFRS/non-GAAP concept with no rules; make your own judgment. Income statement classification alone isn't enough
3. **Business cycle → normalized EPS** (mid-cycle earnings). P/Es of cyclicals are high at the bottom of the cycle and low at the top (**Molodovsky effect**)
4. **Comparability:** adjust for accounting differences (e.g. LIFO vs FIFO)

**Textbook example (Evergreen, nonrecurring items).** Price £50.11. Reported TTM EPS £4.52 → P/E **11.1**; company core EPS £6.01 → **8.3**; analyst view (only the legal provision is nonrecurring; amortization and repeated restructuring are ongoing) EPS £4.60 → **10.9**.

Normalizing methods:

| Method | Normalized EPS | Note |
| --- | --- | --- |
| Historical average EPS | Average EPS over the last full cycle | Ignores changes in company **size** |
| Average ROE | Average ROE over the cycle × **current** BVPS | Reflects size; usually preferred |

Also: long-run ROA × total assets or long-run ROE × equity (useful when the company reported a loss).

**Textbook example (Zenlandia Chemical ADR).** Price \$18.21; EPS 2014–20: 0.74, 0.63, 0.61, 0.54, 1.07, 0.88, 1.08; average ROE 22.6%; current BVPS \$4.82.

* Average EPS = \$0.79 → P/E = **23.1**
* Average ROE: 0.226 × 4.82 = \$1.09 → P/E = **16.7** (BVPS grew 61%, so the ROE method reflects the larger company → looks cheaper)

**Negative or tiny earnings:** report P/E as NM. Use normalized or forward EPS, or rank by **earnings yield E/P** (price is never negative, so ranking is consistent; less skewed by outliers). Textbook (Exhibit 2): Tesla EPS −7.72 → P/E NM, E/P −2.51%.

| Price ratio | Inverse ratio | Comment |
| --- | --- | --- |
| P/E | E/P (earnings yield) | Both common |
| P/B | B/P (book to market) | Book value rarely negative; B/M favoured in research |
| P/S | S/P | Rarely used |
| P/CF | CF/P (cash flow yield) | Both common |
| P/D | D/P (dividend yield) | D/P far more common (P/D undefined for non-payers) |

**Textbook example (forward P/E).** IBM \$137.90: FY1 \$13.91 → **9.9**; FY2 \$14.17 → **9.7**.

**Textbook example (Selene Gaming, volatile EPS).** Price \$12.20 on 9 Aug 2020.

| Definition | EPS | P/E |
| --- | --- | --- |
| Next four quarters (−0.10 − 0.50 + 0.70 + 0.80) | 0.90 | **13.6** |
| NTM: (5/12)(−0.50) + (7/12)(1.50) | 0.67 | **18.2** |
| FY2020 | (0.50) | −24.4 → NM |
| FY2021 | 1.50 | **8.1** |

Volatile, procyclical earnings → normalize.

## Justified P/E and predicted P/E

From the GGM:

$$
\frac{P_0}{E_1}=\frac{1-b}{r-g}\qquad\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

Justified P/E falls with **r** (risk) and rises with **g** (in any DCF model). For complex models: justified P/E = DCF value / EPS.

**Textbook example (BP).** b = 40%, g = 3.5%, r = 7.6% → $P_0/E_1$ = 0.60/0.041 = **14.6**.

**Textbook example (Toyota).** FCFE value ¥6,980, FY2020 EPS ¥720 → justified forward P/E **9.7** vs market 6,688/720 = 9.3 → ≈4% undervalued.

**Predicted P/E (cross-sectional regression)** on fundamentals (payout, beta, growth). Textbook (food company): predicted P/E = 12.12 + 2.25(0.45) − 0.20(0.9) + 14.43(0.08) = **14.1** < actual 18 → **overvalued**.

Limitations of the regression approach:

* Valid only for that sample and period; predictive power elsewhere unknown
* Coefficients and explanatory power change over time
* **Multicollinearity** makes individual coefficients hard to interpret

## P/E with comparables, PEG, market models

Steps for any multiple: (1) select and compute the multiple; (2) pick comparables and compute the **benchmark** (median or mean); (3) apply the benchmark, possibly adjusted for fundamentals; (4) check whether differences are explained by fundamentals.

* Benchmarks: peer group, industry/sector, equity index, the stock's **own history**
* Comparables start from the narrowest GICS (sub-industry) or ICB (subsector) group, then filter by size and markets served
* All else equal: **higher growth → higher justified P/E; higher risk → lower justified P/E**

**Textbook example (Verizon, peer P/E).** Trailing P/Es: AT&T 13.20, Comcast 16.23, CenturyLink NMF, China Telecom 13.14, Charter 70.67, Verizon 15.03, Windstream 19.01. Mean (ex CenturyLink) 24.55 is distorted by Charter → use **median 15.03**. Verizon = median → fairly valued; AT&T, China Telecom, CenturyLink look undervalued. Check cash flow too: telecoms have large noncash charges.

**PEG ratio** = P/E ÷ expected EPS growth (in percent). Lower is more attractive; some treat < 1 as attractive.

Limitations: assumes a **linear** P/E–growth relationship; ignores **risk**; ignores the **duration** of growth.

**Textbook example (telecoms with fundamentals).** CenturyLink: forward P/E 8.89, growth 8.52%, PEG 1.04 (lowest among the low-P/E names) → relatively undervalued. AT&T: forward EPS \$3.63 × peer median 11.99 adjusted up to 13.0 (superior profitability, below-average risk) = **\$47.19** vs price \$33.98 → undervalued.

**Industry/market comparisons.** Larger groups cancel individual mispricings but are less similar. Cap-weighted index P/Es are dominated by the largest stocks → use the **median** for mid-caps.

**Textbook example (valuation vs S&P 500).** Index P/E 21.8. Stock A P/E 15.2, historically 80% of the index (→ 17.4); Stock C P/E 15.2, historically 105% → **C is undervalued**. B: P/E 30 vs historical 120% (26.2) → expensive. Assumes the past is relevant (stable relationships).

**Fed model:** the market is overvalued when its forward E/P < 10-year T-bond yield; justified P/E = 1/T-bond yield. Textbook: yield 2.72% → justified P/E 36.8 vs trailing 18.9.

* Criticisms: ignores the ERP and growth; handles inflation poorly; non-linear at low rates; very sensitive to small changes in rates

**Yardeni model:** CEY = CBY − b × LTEG + residual, so

$$
\frac{P}{E}=\frac{1}{CBY-b\times LTEG}
$$

CBY = A-rated corporate bond yield; LTEG = consensus 5-year growth; b historically 0.10 (later 0.10/0.20/0.25). Higher CBY → lower P/E; higher growth → higher P/E.

**Own historical P/E:** justified price = benchmark own historical P/E × most recent (or normalized) EPS. Breaks down if business mix, leverage, rates or inflation have changed.

**Textbook example (Honda).** 5-year P/Es 6.9, 10.0, 10.9, 10.8, 9.7: median **10.0**, mean 9.7. EPS ¥381.93 → justified ¥3,819 (median) / ¥3,704 (mean). Recent price ≈ ¥2,817–2,837 → ~24–26% below → possibly undervalued.

> [!NOTE]
> Textbook issue: Honda's price is given as ¥2,837, but the solution computes with ¥2,817 (2,817/3,819 − 1 = −26.2%). With ¥2,837 the gaps are −25.7% and −23.4%. The conclusion is the same.

**Inflation and P/E.** No real growth, full payout, pass-through rate λ of cost inflation I, real required return ρ = r − I:

$$
\frac{P_0}{E_1}=\frac{1}{\rho+(1-\lambda)I}
$$

λ = 1 → P/E = 1/ρ; λ = 0 → 1/r. With incomplete pass-through, **higher inflation → lower P/E**; at equal inflation, **higher pass-through → higher P/E**.

**Textbook example.** ρ = 3%. λ = 75%: I = 6% → **22.2**; I = 2% → **28.6**. I = 6%: λ = 90% → **27.8**; λ = 70% → **20.8**.

## Terminal value from multiples

$$
V_n=\text{trailing terminal P/E}\times E_n\quad\text{or}\quad V_n=\text{forward terminal P/E}\times E_{n+1}
$$

* **Fundamentals-based** terminal multiple: the GGM restated as a multiple (sensitive to r, payout, g)
* **Comparables-based** (median/average industry P/E, own past P/E): grounded in market data, but carries any market mispricing into the terminal value

**Textbook example (oil exploration company).** r 10%, mature payout 45%, industry ROE 13%, $E_3$ \$3.00, industry P/E 14.3.

* Comparables: 14.3 × 3.00 = **\$42.90**
* GGM: $D_3$ = 1.35, g = 0.55 × 13% = 7.15% → $V_3$ = 1.35(1.0715)/(0.10 − 0.0715) = **\$50.76** (18.3% higher)

## Price to book

| Rationales | Drawbacks |
| --- | --- |
| Book value usually positive when EPS ≤ 0 | Ignores off-balance-sheet value: human capital, reputation, internally generated brands/R&D |
| BVPS more stable than EPS | Misleading when asset intensity / business models differ |
| Fits companies with mostly liquid assets (banks, insurers, investment firms) | Accounting: historical cost vs fair value, inflation, technology, asset age |
| Fits companies not expected to be going concerns | **Share repurchases** distort historical comparisons |
| P/B differences relate to long-run returns | |

* Colgate-Palmolive (textbook): over five years P/E rose 5.5% but P/B rose 125.9%, mostly because buybacks above book cut book value (\$2.48bn → \$1.53bn)
* Bank P/Bs differ by business model (textbook: Citigroup 0.69, Wells Fargo 1.21, US Bancorp 1.63)

Book value per share = (shareholders' equity − senior claims such as preferred stock and preferred dividends in arrears) / common shares outstanding.

**Textbook example (TD Bank).** 2018 BVPS = (80,040 − 5,000)/1,830.4 = **CAD41.00** (2017: 38.23; 2016: 37.58); price CAD73.03 → **P/B = 1.78**.

Adjustments: **tangible book value** (exclude goodwill at least; separable intangibles like patents may stay), LIFO → FIFO, off-balance-sheet items, fair-value restatements.

**Textbook example (Barclays 2012).** Price £2.4239, 12,614m diluted shares, equity £62,957m, goodwill and intangibles £7,915m; fair value of financial assets £17,333m below carrying amount, of liabilities £399m below.

* BVPS £4.9910 → P/B **0.49**; tangible BVPS £4.3636 → **0.56**
* Adjusted BVPS = (62,957 − 7,915 − 17,333 + 399)/12,614 = £3.0211 → **0.80**

> [!NOTE]
> The Barclays example uses total equity including £9,371m of non-controlling interests. Strictly, common book value should exclude NCI (£53,586m). The textbook keeps NCI; follow its numbers if asked about this example.

Justified P/B (GGM with g = b × ROE, based on $B_0$):

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}\qquad\frac{P_0}{B_0}=1+\frac{PV(\text{expected residual earnings})}{B_0}
$$

* Textbook: ROE 12%, r 10%, g 7% → (0.12 − 0.07)/(0.10 − 0.07) = **1.67**
* Driven by **ROE relative to r**: ROE = r → P/B = 1; with g = 0, P/B = ROE/r. Same P/B → the higher-ROE stock is cheaper

**Textbook example (brokers, P/B comparables).** ETFC P/B 0.65 (< 30% of SCHW 2.31 or AMTD 2.53; < 60% of its own mean 1.14), but lower forecast book value and revenue growth (1.5%, −1.0%) and higher beta (1.65) explain it.

## Price to sales

| Rationales | Drawbacks |
| --- | --- |
| Sales are harder to manipulate | Sales growth without profit/cash isn't value |
| Sales positive when EPS ≤ 0 | P/S compares a post-financing price with a **pre-financing** flow (use EV/S) |
| More stable than P/E | Ignores cost-structure differences |
| Fits mature, cyclical, zero-income companies | Revenue recognition can still distort |
| P/S differences relate to long-run returns | |

Link: P/S = P/E × net profit margin.

**Textbook example (Stora Enso).** Sales €10,486m, ≈788.5m shares → sales/share €13.30; price €10.34 → **P/S 0.778**.

Revenue recognition red flags (textbook cases): **barter** of advertising between internet companies (1998–2000), **bill-and-hold** sales (Diebold, \$25m SEC settlement), **gross vs net** revenue (Groupon restated, cutting sales > 50%). If manipulation is suspected, assign a higher risk premium (lower justified P/S) or avoid.

Justified P/S:

$$
\frac{P_0}{S_1}=\frac{(E_1/S_1)(1-b)}{r-g}\qquad\frac{P_0}{S_0}=\frac{(E_0/S_0)(1-b)(1+g)}{r-g}
$$

Increases with profit margin, both directly and through $g=b\times PM\times\frac{Sales}{TA}\times\frac{TA}{Equity}$.

**Textbook example (Getinge).** r 9%, forecast margin 9%, payout 35%, g 7% → $P_0/S_1$ = 0.09 × 0.35/0.02 = **1.575**; 2019 sales/share SEK94.3 → value **SEK148.52** > price SEK133.70 → undervalued.

**Textbook example (P/S comparables).** GETI P/S 1.54 (lowest) vs CMD 3.96, NEO 8.79 → looks cheapest; GETI's margin (−2.49%), leverage and EV/revenue (1.88) are closer to CMD's than to NEO's (margin 14.53%), so CMD is the better comparable.

## Price to cash flow

| Rationales | Drawbacks |
| --- | --- |
| Cash flow harder to manipulate than earnings | CF = EPS + noncash charges ignores noncash revenue and WC changes |
| More stable than P/E | Theory favours FCFE, which is more volatile and often negative |
| Avoids differences in accounting conservatism | CFO can be managed (receivable securitization, payables outsourcing) |
| Relates to long-run returns | IFRS vs GAAP classification of interest/dividends differs |

Cash flow definitions:

| Definition | Note |
| --- | --- |
| **CF** = EPS + depreciation, amortization, depletion | Simple approximation |
| **CFO** (cash flow statement) | Adjust for non-recurring items and IFRS/GAAP differences |
| **FCFE** | Strongest link to theory; volatile (capex timing); use average FCFE or the DCF value |
| **EBITDA** | Pre-interest → pair with **EV**, not price |

**Textbook example (depreciation methods).** Same cash flows, A uses straight-line (EPS flat \$10), B accelerated (EPS grows 29% a year, 7.50 → 12.50); CF is \$15/share for both. EPS growth can be an accounting artefact.

**Textbook example (Philips).** EPS €1.41 + D&A/share €1.17 = CF €2.58; price €36.31 → **P/CF 14.1**.

**Textbook example (Colgate, justified multiples).** FCFE₀ \$2.66, CF \$3.26, r 7.4%, g 3.2% → $V_0$ = 1.032(2.66)/0.042 = **\$65.36**; justified P/CF = 65.36/3.26 = **20.05**; P/FCFE = **24.57**.

**Textbook example (two companies).** A's P/CF 9.8 vs B's 11.4, yet A's growth forecast is 280 bp higher and its FCFE is positive (B's negative) → A relatively undervalued.

## Dividend yield

* Rationales: a component of total return; a less risky component
* Drawbacks: only part of return; **dividend displacement of earnings** (paying now lowers future growth, though payout may correlate with future profitability); the "safer" argument assumes markets misprice risk
* **Trailing D/P** = dividend rate (4 × latest quarterly dividend, or the latest annual total for uneven semiannual payers) / price. **Leading D/P** = next year's forecast dividends / price

**Textbook example (BCE, BT).** BCE: 4 × 0.58 = \$2.32 / \$39.53 = **5.87%**. BT ADR (uneven semiannual): \$0.976/\$15.20 = **6.42%**.

> [!NOTE]
> Textbook issue: the BT solution prints "0.0642, or 6.52%". 0.976/15.20 = 6.42%.

Justified dividend yield (GGM):

$$
\frac{D_0}{P_0}=\frac{r-g}{1+g}
$$

Higher g → lower yield (high-yield screens are value-oriented); higher r → higher yield. Check dividend **safety**: payout ratio, interest coverage, net debt/EBITDA.

**Textbook example (utilities).** Duke yields 4.24% but payout 89% (risk to the dividend); PPL 5.37% but growth 0.60%; Portland General 2.76% + 5.20% growth ≈ **7.96%** expected return, no strong negatives → focus there.

## EV/EBITDA and other EV multiples

$$
EV=\text{MV equity}+\text{MV preferred}+\text{minority interest}+\text{MV debt}-\text{cash and short-term investments}
$$

* Cash is subtracted because the acquirer gets it (net purchase price). Use market values of debt; if unavailable, book or matrix-priced values
* **TIC** (total invested capital) = equity + debt, **without** subtracting cash

| Rationales for EV/EBITDA | Drawbacks |
| --- | --- |
| Better than P/E for companies with different **leverage** (EBITDA is pre-interest) | Overstates CFO when working capital is growing; ignores revenue recognition effects |
| Controls for D&A differences → capital-intensive firms (cable, steel) | FCFF links better to value; EBITDA reflects capex only if D&A ≈ capex |
| EBITDA often positive when EPS is negative | |

EV multiples take a **control** perspective and are less sensitive to leverage than price multiples.

**Textbook example (Colgate-Palmolive EV/EBITDA, \$m).** Market cap 863 × \$66.48 = 57,372; debt (LTD 6,354 + current LTD 0 + other non-current liabilities 2,269) = 8,623; NCI 299; cash 726 → **EV 65,034**. EBITDA = NI 2,400 + interest 143 + tax 906 + D&A 511 = **3,960** → **EV/EBITDA 16.6**.

> [!NOTE]
> The textbook counts "other non-current liabilities" (\$2,269m) as debt in Colgate's EV. Normally only interest-bearing debt goes in. Follow the textbook's numbers for this example.

* With preferred stock, EBITDA starts from NI available to **both** preferred and common
* Justified EV/EBITDA rises with expected **FCFF growth** and **ROIC** (after-tax operating profit / invested capital) and falls with **WACC**
* Lower EV/EBITDA than peers → relatively undervalued (one input among several)

**Textbook example (household products, EV/EBITDA).** CL 16.9, KMB 14.7, CLX 17.6, CHD 22.5 (TIC/EBITDA ranks the same; rankings could differ only if cash holdings vary materially). CL is cheaper than CLX and CHD (lower growth than CHD) and dearer than KMB (CL margin 14.8% vs 9.8%).

Other EV denominators:

| Measure | = NI + Int | + Taxes | + Dep | + Amort | Other |
| --- | --- | --- | --- | --- | --- |
| FCFF | + Int − tax saving on interest | | + | + | − WCInv − FCInv |
| EBITDA | + | + | + | + | |
| EBITA | + | + | | + | (amortization is major, depreciation isn't) |
| EBIT | + | + | | | (neither is major) |

Also industry-specific: EV/EBITDAR (airlines), EV/subscribers, EV/reserves.

**EV/Sales** fixes P/S's mismatch for companies with different capital structures. Textbook (Stora Enso): equity €8,154m + debt €2,970m − cash €1,130m = **€9,994m** → EV/S = **0.953**.

> [!NOTE]
> Textbook issues in Stora Enso: shares are given as 788.4m in one place and 788.6m in another, and the EV line prints equity as €8,145m though €8,154m is the figure that gives €9,994m.

## Justified multiples summary

| Multiple | Justified (GGM-based) | Rises with | Falls with |
| --- | --- | --- | --- |
| Leading P/E | $(1-b)/(r-g)$ | g, payout | r |
| Trailing P/E | $(1-b)(1+g)/(r-g)$ | g, payout | r |
| P/B | $(ROE-g)/(r-g)$ | ROE − r | r |
| Leading P/S | $PM_1(1-b)/(r-g)$ | margin, g | r |
| Trailing P/S | $PM_0(1-b)(1+g)/(r-g)$ | margin, g | r |
| D/P | $(r-g)/(1+g)$ | r | g |
| P/CF, P/FCFE | DCF value / CF | g | r |
| EV/EBITDA | (qualitative) | FCFF growth, ROIC | WACC |

## Cross-border comparisons

Differences come from accounting standards, culture, economics, risk and growth opportunities; P/Es of the same industry and of whole markets vary widely across countries.

Typical IFRS → US GAAP reconciliation effects (Harris and Muller):

| Category | Earnings | Equity |
| --- | --- | --- |
| Goodwill | − | + |
| Deferred income taxes | + | + |
| Foreign exchange adjustments | + | − |
| R&D costs | − | − |
| Pension expense | − | + |
| Tangible asset revaluations | + | − |
| Other | − | − |

Most frequent adjustments: pensions; largest by value: goodwill. **P/CFO and P/FCFE are least affected** by accounting differences; P/B, P/E and EBITDA multiples are **most affected**. Inflation and pass-through differences also distort P/Es (see above).

## Momentum indicators

| Indicator | Formula |
| --- | --- |
| Unexpected earnings (surprise) | $UE_t=EPS_t-E(EPS_t)$; % surprise = UE / expected EPS |
| Scaled earnings surprise | UE / std dev of **analysts' forecasts** (dispersion) |
| SUE | $SUE_t=\dfrac{EPS_t-E(EPS_t)}{\sigma[EPS_t-E(EPS_t)]}$ (std dev of **past surprises**, e.g. 20 quarters) |
| Relative strength | Stock's compound return over a period (price momentum), or stock / index, often scaled to 1.0 at the start |

Rationale: positive surprises may be followed by persistent abnormal returns; returns may show persistence or reversal. Caveats: data snooping and hindsight bias; technical rules tend to self-destruct once widely used. Momentum can hint **when** price will converge to intrinsic value.

**Textbook example (BP scaled surprise).** Consensus \$3.26, high \$3.74, std dev \$0.29 → (3.74 − 3.26)/0.29 = **1.66**.

**Textbook example (SUE).** Surprise \$0.05: std dev of past surprises \$0.20 → SUE 0.25; \$0.07 → 0.71. Exxon Sep 2013: (1.79 − 1.77)/0.1250 = **0.16**. VW had bigger % surprises but Exxon had wider SUE swings (smaller std dev), so "accuracy" depends on the measure.

**Textbook example (relative strength vs S&P 500, Mar 2018 = 1.0).** Aug 2019: TLT **1.067** (+6.7% vs index), FEU **0.847** (−15.3%), EEM **0.743** (−25.7%). In December 2018, EEM's RSTR rose 0.852 → 0.872 while FEU's fell 0.909 → 0.885.

> [!NOTE]
> Textbook issues: the SUE solution says VW's SUE ranged "−3.57 to +1.13", but the table's maximum is 1.97. The relative-strength solution calls it the "December 2019 RSTR" when it means December 2018.

## Averaging multiples and using several indicators

$$
X_H=\frac{n}{\sum_{i=1}^{n}1/X_i}\qquad X_{WH}=\frac{1}{\sum_{i=1}^{n}w_i/X_i}
$$

* **Weighted harmonic mean** with market-value weights = the portfolio's true aggregate multiple (used by index providers)
* Harmonic mean < arithmetic mean (unless all values equal); it gives less weight to high multiples, so it reduces the effect of **large** outliers but can amplify **small** ones (bounded by zero)
* **Median** limits outliers in both directions

**Textbook example (two-stock portfolio).** €715m cap / €71.5m earnings (P/E 10) and €585m / €29.25m (P/E 20). Portfolio P/E = 1,300/100.75 = **12.90**.

| Measure | Calculation | P/E |
| --- | --- | --- |
| Arithmetic mean | (10 + 20)/2 | 15.00 |
| Weighted mean | 0.55(10) + 0.45(20) | 14.50 |
| Harmonic mean | 1/[0.5(0.1) + 0.5(0.05)] | 13.33 |
| **Weighted harmonic** | 1/[0.55(0.1) + 0.45(0.05)] | **12.90** |

**Textbook example (telecom P/Es).** With Charter's 70.67: arithmetic 25.30, median 15.23, harmonic 17.70 (closer to the median). Without outliers: 16.43, 15.03, 15.39.

> [!NOTE]
> Textbook issue: Exhibit 28 lists Windstream at 24.55 (the earlier group mean) instead of its P/E of 19.01, and its summary statistics don't exactly reproduce from either input set. Know the concept: the harmonic mean pulls the average toward the median when there is a large outlier.

**Using several indicators:** analysts combine DCF with multiples (P/E, EV/EBITDA, dividend yield). Watch for **look-ahead bias** in backtests (using data not yet reported at the time).

**Screening** narrows the universe by criteria. Limitations: no control over how inputs like EPS are computed; no qualitative factors.

**Textbook example (Larsen's screen).** P/E < 20, P/B < 2, PEG < 1, yield ≥ 3%, cap > \$10bn → 10 stocks. She is a **large-cap value** investor; no momentum indicators. Limitations: no profitability or risk criteria (low P/E may reflect low profitability or high risk), unadjusted database inputs, no qualitative factors.

## Quick Recall

* Comparables = law of one price → relative value; fundamentals = DCF → justified multiple.
* Trailing vs forward P/E; same definition for all; diluted EPS; strip nonrecurring items; normalize cyclicals (average ROE × current BVPS is better than average EPS).
* Negative EPS → NM; rank by E/P.
* Justified: P/E $(1-b)/(r-g)$; P/B $(ROE-g)/(r-g)$; P/S $PM(1-b)/(r-g)$; D/P $(r-g)/(1+g)$.
* PEG = P/E ÷ growth %: assumes linearity, ignores risk and growth duration.
* Fed model: E/P vs T-bond yield; Yardeni: P/E = 1/(CBY − b × LTEG).
* Inflation: P/E = 1/[ρ + (1 − λ)I].
* EV = equity + preferred + minority + debt − cash; EV/EBITDA for leverage and capital-intensity differences.
* Cross-border: P/CFO, P/FCFE least affected; P/B, P/E, EBITDA most.
* SUE scales by past surprise volatility; scaled surprise by forecast dispersion.
* Weighted harmonic mean = true portfolio multiple.
