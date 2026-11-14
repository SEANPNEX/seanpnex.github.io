---
title: "Market-Based Valuation: Price and Enterprise Value Multiples"
---

# Market-Based Valuation: Price and Enterprise Value Multiples

Valuing a stock with multiples, either by comparing it with similar assets (the method of comparables) or by deriving the multiple from forecast fundamentals (justified multiples). Covers P/E, P/B, P/S, price to cash flow, dividend yield and EV multiples, then cross-border comparisons, momentum indicators and how to average multiples.

## Two Methods

| | Method of comparables | Method based on forecast fundamentals |
| --- | --- | --- |
| Idea | Value from the multiples of similar assets (comparables, "guideline companies") | Derive the multiple from a DCF or residual income model of the company itself |
| Rationale | **Law of one price**: similar assets sell at similar prices | Value = PV of future cash flows, driven by profitability, growth and risk |
| Conclusion | **Relative** value (the comparables may themselves be mispriced) | Absolute (intrinsic) value |

* A **justified multiple** is the multiple's fair value, from either method. Justified > actual → undervalued.
* Use the peers' **median** to limit outliers. E.g., peer median P/B 2.2 × BVPS \$23 = \$50.60; a residual income value of \$46 implies a justified P/B of 46/23 = **2.0**.

**Example (the simplest comparison).** A's EPS is \$1.50; competitor B's P/E is 22. At \$37.50, A's P/E is 25 > 22 → A is **overvalued** relative to B; at B's P/E, A is worth 1.50 × 22 = **\$33**.

## Price to Earnings

| Rationales | Drawbacks |
| --- | --- |
| Earning power is the main driver of value | EPS can be zero, negative or tiny → P/E meaningless |
| The most widely used and recognized multiple | Hard to separate recurring from transient earnings |
| P/E differences relate to long-run returns | Management discretion can distort EPS, hurting comparability |

### Trailing and Forward P/E

* **Trailing P/E** = price ÷ EPS over the last four quarters (TTM).
* **Forward (leading) P/E** = price ÷ next year's expected EPS: the next four quarters, the next twelve months (NTM), or the next fiscal year (FY1, FY2). Use the **same definition** for every company. When earnings are rising, the forward P/E is below the trailing P/E.
* Forward P/E is preferred when forecasts exist, or after a major acquisition or change in leverage; trailing when earnings aren't predictable.
* **NTM EPS** is a time-weighted mix of fiscal-year estimates, e.g., (10/12) × FY1 + (2/12) × FY2.

**Examples.**

* **IBM** at \$137.90: FY1 EPS \$13.91 → **9.9**; FY2 EPS \$14.17 → **9.7**.
* **Selene Gaming** (volatile EPS), price \$12.20 on 9 Aug 2020:

| Definition | EPS | P/E |
| --- | --- | --- |
| Next four quarters (−0.10 − 0.50 + 0.70 + 0.80) | 0.90 | **13.6** |
| NTM: (5/12)(−0.50) + (7/12)(1.50) | 0.67 | **18.2** |
| FY2020 | (0.50) | −24.4 → not meaningful |
| FY2021 | 1.50 | **8.1** |

With earnings this volatile and procyclical, normalize them.

### Adjusting EPS

1. **Dilution**: prefer diluted EPS for comparisons. E.g., Siemens: basic €7.12, diluted €7.01, price €95.94 → P/E 13.47 vs **13.69**.
2. **Nonrecurring items** → **underlying** (core, persistent) earnings. Company-reported "core EPS" is a non-IFRS/non-GAAP measure with no rules: use your own judgment. Income statement classification alone isn't enough.
3. **The business cycle** → **normalized** (mid-cycle) EPS. Cyclicals' P/Es are high at the bottom of the cycle and low at the top (the **Molodovsky effect**).
4. **Comparability**: adjust for accounting differences (e.g., LIFO vs FIFO).

**Example (Evergreen, nonrecurring items).** Price £50.11. Reported TTM EPS £4.52 → P/E **11.1**; the company's core EPS £6.01 → **8.3**; the analyst's view (only the legal provision is nonrecurring; amortization and repeated restructuring are ongoing) gives EPS £4.60 → **10.9**.

| Normalizing method | Normalized EPS | Note |
| --- | --- | --- |
| Historical average EPS | Average EPS over the last full cycle | Ignores changes in the company's **size** |
| Average ROE | Average ROE over the cycle × **current** BVPS | Reflects size; usually preferred |

Long-run ROA × total assets, or long-run ROE × equity, also work (useful when the company reported a loss).

**Example (Zenlandia Chemical).** Price \$18.21; EPS 2014–20: 0.74, 0.63, 0.61, 0.54, 1.07, 0.88, 1.08; average ROE 22.6%; current BVPS \$4.82.

* Average EPS = \$0.79 → P/E = **23.1**.
* Average ROE: 0.226 × 4.82 = \$1.09 → P/E = **16.7**. BVPS grew 61%, so the ROE method reflects the larger company, which looks cheaper.

**Negative or tiny earnings.** Report the P/E as not meaningful (NM). Use normalized or forward EPS, or rank by **earnings yield** (E/P): price is never negative, so the ranking stays consistent, and E/P is less skewed by outliers. E.g., Tesla's EPS of −7.72 gives P/E NM, E/P −2.51%.

| Price ratio | Inverse | Comment |
| --- | --- | --- |
| P/E | E/P (earnings yield) | Both common |
| P/B | B/P (book to market) | Book value rarely negative; B/M favored in research |
| P/S | S/P | Rarely used |
| P/CF | CF/P (cash flow yield) | Both common |
| P/D | D/P (dividend yield) | D/P far more common (P/D is undefined for non-payers) |

### Justified and Predicted P/E

From the Gordon growth model:

$$
\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

The justified P/E falls with $r$ (risk) and rises with $g$, in any DCF model. For more complex models, justified P/E = DCF value ÷ EPS.

**Examples.**

* **BP**: retention 40%, $g$ 3.5%, $r$ 7.6% → $P_0/E_1$ = 0.60/0.041 = **14.6**.
* **Toyota**: FCFE value ¥6,980, FY2020 EPS ¥720 → justified forward P/E **9.7** vs the market's 6,688/720 = 9.3 → about 4% undervalued.

**Predicted P/E** comes from a cross-sectional regression on fundamentals (payout, beta, growth). E.g., predicted P/E = 12.12 + 2.25(0.45) − 0.20(0.9) + 14.43(0.08) = **14.1**, below the actual 18 → **overvalued**. Limitations: the regression is valid only for its sample and period; coefficients and explanatory power change over time; and **multicollinearity** makes individual coefficients hard to interpret.

### Comparing P/Es

The steps for any multiple: (1) choose and compute the multiple; (2) choose comparables and compute the **benchmark** (median or mean); (3) apply the benchmark, possibly adjusted for fundamentals; (4) check whether differences are explained by fundamentals.

* Benchmarks: a peer group, the industry or sector, an equity index, or the stock's **own history**.
* Comparables start from the narrowest GICS (sub-industry) or ICB (subsector) group, then filter by size and markets served.
* All else equal: **higher growth → higher justified P/E; higher risk → lower justified P/E**.

**Example (Verizon vs peers).** Trailing P/Es: AT&T 13.20, Comcast 16.23, CenturyLink NM, China Telecom 13.14, Charter 70.67, Verizon 15.03, Windstream 19.01. The mean (excluding CenturyLink), 24.55, is distorted by Charter, so use the **median, 15.03**. Verizon is at the median → fairly valued; AT&T, China Telecom and CenturyLink look undervalued. Check cash flow too: telecoms have large noncash charges.

**PEG ratio** = P/E ÷ expected EPS growth (in percent). Lower is more attractive; some treat below 1 as attractive. Limitations: it assumes a **linear** P/E–growth relationship, and ignores **risk** and how long growth lasts.

**Example (telecoms, with fundamentals).** CenturyLink: forward P/E 8.89, growth 8.52%, PEG 1.04 (the lowest among the low-P/E names) → relatively undervalued. AT&T: forward EPS \$3.63 × peer median 11.99, adjusted up to 13.0 (superior profitability, below-average risk) = **\$47.19** vs a price of \$33.98 → undervalued.

**Industry and market comparisons.** Larger groups cancel out individual mispricings but are less similar. Cap-weighted index P/Es are dominated by the largest stocks, so use the **median** for mid-caps.

**Example (vs the S&P 500).** Index P/E 21.8. Stock A: P/E 15.2, historically 80% of the index (→ 17.4). Stock C: P/E 15.2, historically 105% (→ 22.9) → **C is undervalued**. Stock B: P/E 30 vs a historical 120% (26.2) → expensive. This assumes the historical relationships still hold.

**Market-level models.**

* **Fed model**: the market is overvalued when its forward E/P is below the 10-year Treasury yield; the justified P/E = 1 ÷ the Treasury yield. E.g., a yield of 2.72% → justified P/E 36.8 vs a trailing P/E of 18.9. Criticisms: it ignores the ERP and growth, handles inflation poorly, is nonlinear at low rates, and is very sensitive to small rate changes.
* **Yardeni model**: the earnings yield = CBY − b × LTEG + residual, so

$$
\frac{P}{E}=\frac{1}{CBY-b\times LTEG}
$$

  where CBY is the A-rated corporate bond yield, LTEG the consensus 5-year earnings growth, and $b$ historically 0.10 (later 0.10, 0.20, 0.25). Higher CBY → lower P/E; higher growth → higher P/E.

**The stock's own history.** Justified price = benchmark own-history P/E × the most recent (or normalized) EPS. It breaks down if the business mix, leverage, interest rates or inflation have changed.

**Example (Honda).** Five-year P/Es 6.9, 10.0, 10.9, 10.8, 9.7: median **10.0**, mean 9.7. EPS ¥381.93 → justified ¥3,819 (median) or ¥3,704 (mean). The recent price, about ¥2,817–2,837, is about 24–26% below → possibly undervalued.

**Inflation and P/E.** With no real growth, full payout, a pass-through rate λ of cost inflation $I$, and a real required return $\rho=r-I$:

$$
\frac{P_0}{E_1}=\frac{1}{\rho+(1-\lambda)I}
$$

With full pass-through (λ = 1), P/E = 1/ρ; with none (λ = 0), 1/$r$. With incomplete pass-through, **higher inflation → lower P/E**; at the same inflation, **more pass-through → higher P/E**. E.g., ρ = 3%: at λ = 75%, $I$ = 6% → **22.2** and $I$ = 2% → **28.6**; at $I$ = 6%, λ = 90% → **27.8** and λ = 70% → **20.8**.

### Terminal Value from Multiples

$$
V_n=\text{Trailing P/E}\times E_n
$$

$$
V_n=\text{Forward P/E}\times E_{n+1}
$$

* A **fundamentals-based** terminal multiple is the GGM restated as a multiple (sensitive to $r$, payout and $g$).
* A **comparables-based** multiple (median or average industry P/E, the stock's own past P/E) is grounded in market data, but carries any market mispricing into the terminal value.

**Example (oil exploration company).** $r$ 10%, mature payout 45%, industry ROE 13%, $E_3$ \$3.00, industry P/E 14.3.

* Comparables: 14.3 × 3.00 = **\$42.90**.
* GGM: $D_3$ = 1.35, $g$ = 0.55 × 13% = 7.15% → $V_3$ = 1.35(1.0715)/(0.10 − 0.0715) = **\$50.76** (18.3% higher).

## Price to Book

| Rationales | Drawbacks |
| --- | --- |
| Book value is usually positive when EPS isn't | Ignores value not on the balance sheet: human capital, reputation, internally generated brands and R&D |
| BVPS is more stable than EPS | Misleading when asset intensity or business models differ |
| Fits companies with mostly liquid assets (banks, insurers, investment firms) | Accounting: historical cost vs fair value, inflation, technology, asset age |
| Fits companies not expected to continue as going concerns | **Share buybacks** distort historical comparisons |
| P/B differences relate to long-run returns | |

* E.g., over five years, Colgate-Palmolive's P/E rose 5.5% but its P/B rose 125.9%, mostly because buybacks above book value cut its book value (\$2.48bn → \$1.53bn).
* Bank P/Bs differ by business model (Citigroup 0.69, Wells Fargo 1.21, US Bancorp 1.63).

$$
BVPS=\frac{\text{Equity}-\text{Preferred and arrears}}{\text{Common shares outstanding}}
$$

**Example (TD Bank).** 2018 BVPS = (80,040 − 5,000)/1,830.4 = **CAD41.00** (2017: 38.23; 2016: 37.58); price CAD73.03 → **P/B 1.78**.

**Adjustments**: use **tangible book value** (at least remove goodwill; separable intangibles such as patents may stay); convert LIFO to FIFO; include off-balance-sheet items; restate to fair value.

**Example (Barclays, 2012).** Price £2.4239; 12,614m diluted shares; equity £62,957m; goodwill and intangibles £7,915m; the fair value of financial assets is £17,333m below their carrying amount, and of liabilities £399m below.

* BVPS £4.9910 → P/B **0.49**; tangible BVPS £4.3636 → **0.56**.
* Adjusted BVPS = (62,957 − 7,915 − 17,333 + 399)/12,614 = £3.0211 → **0.80**.

**Justified P/B** (GGM with $g$ = $b$ × ROE, based on $B_0$):

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}
$$

$$
\frac{P_0}{B_0}=1+\frac{PV(\text{expected residual earnings})}{B_0}
$$

* E.g., ROE 12%, $r$ 10%, $g$ 7% → (0.12 − 0.07)/(0.10 − 0.07) = **1.67**.
* P/B is driven by **ROE relative to $r$**: if ROE = $r$, P/B = 1; with $g$ = 0, P/B = ROE/$r$. At the same P/B, the higher-ROE stock is cheaper.

**Example (brokers).** E\*TRADE's P/B of 0.65 is under 30% of Schwab's (2.31) or TD Ameritrade's (2.53), and under 60% of its own mean (1.14). But its lower forecast growth in book value and revenue (1.5%, −1.0%) and higher beta (1.65) explain it.

## Price to Sales

| Rationales | Drawbacks |
| --- | --- |
| Sales are harder to manipulate | Sales growth without profit or cash isn't value |
| Sales are positive even when EPS isn't | P/S compares a price (after financing) with a flow **before** financing; use EV/sales |
| More stable than P/E | Ignores differences in cost structure |
| Fits mature, cyclical and loss-making companies | Revenue recognition can still distort it |
| P/S differences relate to long-run returns | |

P/S = P/E × net profit margin.

**Example (Stora Enso).** Sales €10,486m, about 788.5m shares → sales per share €13.30; price €10.34 → **P/S 0.778**.

Revenue recognition red flags: **barter** of advertising between internet companies (1998–2000), **bill-and-hold** sales (Diebold: a \$25m SEC settlement), **gross vs net** revenue (Groupon's restatement cut its sales by more than half). If manipulation is suspected, use a higher risk premium (a lower justified P/S), or avoid the stock.

**Justified P/S:**

$$
\frac{P_0}{S_1}=\frac{(E_1/S_1)(1-b)}{r-g}
$$

$$
\frac{P_0}{S_0}=\frac{(E_0/S_0)(1-b)(1+g)}{r-g}
$$

It rises with the profit margin, both directly and through growth: $g=b\times PM\times\frac{Sales}{TA}\times\frac{TA}{Equity}$.

**Examples.**

* **Getinge**: $r$ 9%, forecast margin 9%, payout 35%, $g$ 7% → $P_0/S_1$ = 0.09 × 0.35/0.02 = **1.575**. With 2019 sales per share of SEK94.3, the value is **SEK148.52**, above the SEK133.70 price → undervalued.
* **Comparables**: Getinge's P/S of 1.54 is the lowest (CMD 3.96, NEO 8.79), so it looks cheapest. But its margin (−2.49%), leverage and EV/revenue (1.88) are closer to CMD's than to NEO's (margin 14.53%), so CMD is the better comparable.

## Price to Cash Flow

| Rationales | Drawbacks |
| --- | --- |
| Cash flow is harder to manipulate than earnings | CF = EPS + noncash charges ignores noncash revenue and working capital changes |
| More stable than P/E | Theory favors FCFE, which is more volatile and often negative |
| Avoids differences in accounting conservatism | CFO can be managed (receivables securitization, outsourcing payables) |
| P/CF differences relate to long-run returns | IFRS and US GAAP classify interest and dividends differently |

| Cash flow measure | Note |
| --- | --- |
| **CF** = EPS + depreciation, amortization, depletion | Simple approximation |
| **CFO** (from the cash flow statement) | Adjust for non-recurring items and IFRS/GAAP differences |
| **FCFE** | Strongest link to theory; volatile (capex timing), so use an average or the DCF value |
| **EBITDA** | Before interest → pair with **EV**, not price |

**Examples.**

* **Depreciation methods**: same cash flows, but A uses straight-line (flat EPS of \$10) and B accelerated (EPS growing 29% a year, 7.50 → 12.50); CF is \$15 a share for both. EPS growth can be an accounting artifact.
* **Philips**: EPS €1.41 + D&A per share €1.17 = CF €2.58; price €36.31 → **P/CF 14.1**.
* **Colgate, justified multiples**: FCFE₀ \$2.66, CF \$3.26, $r$ 7.4%, $g$ 3.2% → $V_0$ = 1.032(2.66)/0.042 = **\$65.36**; justified P/CF = 65.36/3.26 = **20.05**; P/FCFE = **24.57**.
* **Two companies**: A's P/CF is 9.8 vs B's 11.4, but A's growth forecast is 280 bp higher and its FCFE is positive (B's is negative) → A is relatively undervalued.

## Dividend Yield

* **Rationales**: a component of total return, and a less risky one.
* **Drawbacks**: only part of the return; **dividend displacement of earnings** (paying now lowers future growth, though payout may correlate with future profitability); the "safer" argument assumes markets misprice risk.
* **Trailing yield** = the dividend rate (4 × the latest quarterly dividend, or the latest annual total for uneven semiannual payers) ÷ price. **Leading yield** = next year's forecast dividends ÷ price.

**Example (BCE, BT).** BCE: 4 × 0.58 = \$2.32 ÷ \$39.53 = **5.87%**. BT (uneven semiannual): \$0.976/\$15.20 = **6.42%**.

**Justified dividend yield** (GGM):

$$
\frac{D_0}{P_0}=\frac{r-g}{1+g}
$$

Higher growth → lower yield (high-yield screens are value-oriented); a higher $r$ → higher yield. Check dividend **safety**: the payout ratio, interest coverage, net debt/EBITDA.

**Example (utilities).** Duke yields 4.24%, but its payout is 89% (the dividend is at risk); PPL yields 5.37%, but growth is only 0.60%; Portland General yields 2.76% plus 5.20% growth ≈ **7.96%** expected return, with no strong negatives → focus there.

## Enterprise Value Multiples

$$
\begin{aligned}
EV={}&\text{Equity}+\text{Preferred}+\text{Minority interest}\\
&+\text{Debt}-\text{Cash and short-term investments}
\end{aligned}
$$

(all at market value). Cash is subtracted because the acquirer gets it: EV is the net purchase price. Use the market value of debt; if unavailable, book or matrix-priced values. **Total invested capital** (TIC) = equity + debt, **without** subtracting cash.

| Rationales for EV/EBITDA | Drawbacks |
| --- | --- |
| Better than P/E for companies with different **leverage** (EBITDA is before interest) | Overstates CFO when working capital is growing; ignores revenue recognition effects |
| Controls for D&A differences → capital-intensive companies (cable, steel) | FCFF links better to value; EBITDA reflects capex only if D&A ≈ capex |
| EBITDA is often positive when EPS is negative | |

EV multiples take a **control** perspective and are less sensitive to leverage than price multiples.

**Example (Colgate-Palmolive EV/EBITDA, \$m).** Market cap 863 × \$66.48 = 57,372; debt (long-term debt 6,354 + current portion 0 + other non-current liabilities 2,269) = 8,623; non-controlling interest 299; cash 726 → **EV 65,034**. EBITDA = NI 2,400 + interest 143 + tax 906 + D&A 511 = **3,960** → **EV/EBITDA 16.6**.

* With preferred stock, start EBITDA from net income available to **both** preferred and common shareholders.
* The justified EV/EBITDA rises with expected **FCFF growth** and **ROIC** (after-tax operating profit ÷ invested capital), and falls with **WACC**.
* A lower EV/EBITDA than peers → relatively undervalued (one input among several).

**Example (household products).** EV/EBITDA: Colgate 16.9, Kimberly-Clark 14.7, Clorox 17.6, Church & Dwight 22.5 (TIC/EBITDA ranks them the same; rankings could differ only if cash holdings varied a lot). Colgate is cheaper than Clorox and Church & Dwight (it grows more slowly than Church & Dwight), and dearer than Kimberly-Clark (margin 14.8% vs 9.8%).

**Other EV denominators**, built up from net income:

| Measure | Interest | Taxes | Depreciation | Amortization | Other |
| --- | --- | --- | --- | --- | --- |
| FCFF | + (after tax) | | + | + | − WCInv − FCInv |
| EBITDA | + | + | + | + | |
| EBITA | + | + | | + | When amortization is large, depreciation isn't |
| EBIT | + | + | | | When neither is large |

Industry-specific measures include EV/EBITDAR (airlines), EV/subscribers and EV/reserves. **EV/sales** fixes P/S's mismatch for companies with different capital structures: e.g., Stora Enso's equity €8,154m + debt €2,970m − cash €1,130m = **€9,994m** → EV/sales = **0.953**.

## Justified Multiples: Summary

| Multiple | Justified (GGM-based) | Rises with | Falls with |
| --- | --- | --- | --- |
| Leading P/E | $(1-b)/(r-g)$ | $g$, payout | $r$ |
| Trailing P/E | $(1-b)(1+g)/(r-g)$ | $g$, payout | $r$ |
| P/B | $(ROE-g)/(r-g)$ | ROE − $r$ | $r$ |
| Leading P/S | $PM_1(1-b)/(r-g)$ | Margin, $g$ | $r$ |
| Trailing P/S | $PM_0(1-b)(1+g)/(r-g)$ | Margin, $g$ | $r$ |
| D/P | $(r-g)/(1+g)$ | $r$ | $g$ |
| P/CF, P/FCFE | DCF value ÷ CF | $g$ | $r$ |
| EV/EBITDA | (qualitative) | FCFF growth, ROIC | WACC |

## Cross-Border Comparisons

Differences come from accounting standards, culture, economics, risk and growth opportunities; P/Es of the same industry, and of whole markets, vary widely across countries.

Typical effects of reconciling IFRS to US GAAP (Harris and Muller):

| Category | Earnings | Equity |
| --- | --- | --- |
| Goodwill | − | + |
| Deferred income taxes | + | + |
| Foreign exchange adjustments | + | − |
| R&D costs | − | − |
| Pension expense | − | + |
| Tangible asset revaluations | + | − |
| Other | − | − |

The most frequent adjustment is pensions; the largest by value is goodwill. **P/CFO and P/FCFE are least affected** by accounting differences; P/B, P/E and EBITDA multiples are **most affected**. Differences in inflation and pass-through also distort P/Es.

## Momentum Indicators

| Indicator | Definition |
| --- | --- |
| Unexpected earnings (surprise) | $UE_t=EPS_t-E(EPS_t)$; % surprise = UE ÷ expected EPS |
| Scaled earnings surprise | UE ÷ standard deviation of **analysts' forecasts** (their dispersion) |
| Standardized unexpected earnings | $SUE_t=\dfrac{EPS_t-E(EPS_t)}{\sigma[EPS_t-E(EPS_t)]}$, using the standard deviation of **past surprises** (e.g., 20 quarters) |
| Relative strength | The stock's compound return over a period (price momentum), or stock ÷ index, often scaled to 1.0 at the start |

The rationale: positive surprises may be followed by persistent abnormal returns, and returns may show persistence or reversal. Caveats: data snooping and hindsight bias, and technical rules tend to stop working once widely used. Momentum can hint at **when** a price will converge to intrinsic value.

**Examples.**

* **BP scaled surprise**: consensus \$3.26, high estimate \$3.74, standard deviation of forecasts \$0.29 → (3.74 − 3.26)/0.29 = **1.66**.
* **SUE**: a \$0.05 surprise with a \$0.20 standard deviation of past surprises → SUE 0.25; with a \$0.07 standard deviation → 0.71. Exxon, September 2013: (1.79 − 1.77)/0.1250 = **0.16**. VW had larger % surprises, but Exxon's SUE swung more (smaller standard deviation), so "accuracy" depends on the measure.
* **Relative strength vs the S&P 500** (March 2018 = 1.0): by August 2019, TLT **1.067** (+6.7% vs the index), FEU **0.847** (−15.3%), EEM **0.743** (−25.7%). In December 2018, EEM's relative strength rose from 0.852 to 0.872 while FEU's fell from 0.909 to 0.885.

## Averaging Multiples

$$
X_H=\frac{n}{\sum_{i=1}^{n}1/X_i}
$$

$$
X_{WH}=\frac{1}{\sum_{i=1}^{n}w_i/X_i}
$$

* The **weighted harmonic mean**, with market-value weights, is the portfolio's true aggregate multiple (used by index providers).
* The harmonic mean is below the arithmetic mean (unless all values are equal). It gives less weight to high multiples, so it reduces the effect of **large** outliers, but can amplify **small** ones (it's bounded by zero).
* The **median** limits outliers in both directions.

**Example (a two-stock portfolio).** €715m market cap with €71.5m of earnings (P/E 10), and €585m with €29.25m (P/E 20). Portfolio P/E = 1,300/100.75 = **12.90**.

| Measure | Calculation | P/E |
| --- | --- | --- |
| Arithmetic mean | (10 + 20)/2 | 15.00 |
| Weighted mean | 0.55(10) + 0.45(20) | 14.50 |
| Harmonic mean | 1/[0.5(0.1) + 0.5(0.05)] | 13.33 |
| **Weighted harmonic** | 1/[0.55(0.1) + 0.45(0.05)] | **12.90** |

**Example (telecom P/Es).** Including Charter's 70.67: arithmetic mean 25.30, median 15.23, harmonic mean 17.70 (closer to the median). Without outliers: 16.43, 15.03, 15.39.

**Using several indicators.** Analysts combine DCF values with multiples (P/E, EV/EBITDA, dividend yield). In backtests, watch for **look-ahead bias** (using data not yet reported at the time).

**Screening** narrows the universe by criteria. Limitations: no control over how inputs such as EPS are computed, and no qualitative factors.

**Example (Larsen's screen).** P/E < 20, P/B < 2, PEG < 1, yield ≥ 3%, market cap > \$10bn → 10 stocks. She is a **large-cap value** investor, using no momentum indicators. Limitations: no profitability or risk criteria (a low P/E may reflect low profitability or high risk), unadjusted database inputs, no qualitative factors.

> [!NOTE]
>
> **Textbook issues.**
>
> * Honda: the price is given as ¥2,837, but the solution computes with ¥2,817 (2,817/3,819 − 1 = −26.2%). With ¥2,837, the gaps are −25.7% and −23.4%; the conclusion is the same.
> * Barclays uses total equity including £9,371m of non-controlling interests. Strictly, common book value should exclude them (£53,586m); follow the textbook's numbers for this example.
> * BT: the solution prints "0.0642, or 6.52%"; 0.976/15.20 = 6.42%.
> * Colgate's EV counts "other non-current liabilities" (\$2,269m) as debt; normally only interest-bearing debt is included.
> * Stora Enso: shares are given as 788.4m in one place and 788.6m in another, and the EV line prints equity as €8,145m, though €8,154m gives €9,994m.
> * SUE: the solution says VW's SUE ranged "−3.57 to +1.13", but the table's maximum is 1.97. The relative strength solution says "December 2019" when it means December 2018.
> * Exhibit 28 lists Windstream at 24.55 (the earlier group mean) instead of its P/E of 19.01, and its summary statistics don't exactly reproduce from either input. The concept: the harmonic mean pulls the average toward the median when there is a large outlier.
