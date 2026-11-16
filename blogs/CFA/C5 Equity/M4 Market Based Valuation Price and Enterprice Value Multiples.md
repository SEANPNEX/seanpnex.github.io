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
* Use the peers' **median** to limit outliers.

$$
\begin{aligned}
\text{Value}={}&\text{Benchmark multiple}\\
&\times\text{Fundamental}\\
\text{Justified}={}&\frac{\text{Intrinsic value}}{\text{Fundamental}}
\end{aligned}
$$

E.g., with BVPS of \$23: a peer median P/B of 2.2 gives $2.2\times 23=\$50.60$; a residual income value of \$46 implies a justified P/B of $46/23=$ **2.0**.

#### Example: The Simplest Comparison

Company A's EPS is \$1.50 and its price \$37.50; competitor B's P/E is 22.

$$
\begin{aligned}
P/E_A&=\frac{37.50}{1.50}=25>22\\
\text{Value at B's P/E}&=22\times 1.50=\$33
\end{aligned}
$$

A is **overvalued** relative to B.

## Price to Earnings

| Rationales | Drawbacks |
| --- | --- |
| Earning power is the main driver of value | EPS can be zero, negative or tiny → P/E meaningless |
| The most widely used and recognized multiple | Hard to separate recurring from transient earnings |
| P/E differences relate to long-run returns | Management discretion can distort EPS, hurting comparability |

### Trailing and Forward P/E

$$
\begin{aligned}
\text{Trailing P/E}&=\frac{P_0}{EPS_{\text{last 4 quarters}}}\\
\text{Forward P/E}&=\frac{P_0}{E(EPS_{\text{next year}})}\\
EPS_{NTM}&=\tfrac{m}{12}\,FY1+\tfrac{12-m}{12}\,FY2
\end{aligned}
$$

where $m$ is the number of months left in the current fiscal year.

* **Forward (leading) P/E** can use the next four quarters, the next twelve months (NTM), or the next fiscal year (FY1, FY2). Use the **same definition** for every company. When earnings are rising, the forward P/E is below the trailing P/E.
* Forward P/E is preferred when forecasts exist, or after a major acquisition or change in leverage; trailing when earnings aren't predictable.

#### Example: IBM

At \$137.90, with FY1 EPS \$13.91 and FY2 EPS \$14.17:

$$\frac{137.90}{13.91}=9.9\qquad\frac{137.90}{14.17}=9.7$$

#### Example: Selene Gaming (Volatile EPS)

The price is \$12.20 on 9 Aug 2020; the fiscal year ends in December, so 5 months of FY2020 remain.

| Definition | EPS | P/E |
| --- | --- | --- |
| Next four quarters (−0.10 − 0.50 + 0.70 + 0.80) | 0.90 | **13.6** |
| NTM: (5/12)(−0.50) + (7/12)(1.50) | 0.67 | **18.2** |
| FY2020 | (0.50) | −24.4 → not meaningful |
| FY2021 | 1.50 | **8.1** |

With earnings this volatile and procyclical, normalize them.

### Adjusting EPS

1. **Dilution**: prefer diluted EPS for comparisons. E.g., Siemens at €95.94: $95.94/7.12=13.47$ on basic EPS vs $95.94/7.01=$ **13.69** on diluted EPS.
2. **Nonrecurring items** → **underlying** (core, persistent) earnings. Company-reported "core EPS" is a non-IFRS/non-GAAP measure with no rules: use your own judgment. Income statement classification alone isn't enough.
3. **The business cycle** → **normalized** (mid-cycle) EPS. Cyclicals' P/Es are high at the bottom of the cycle and low at the top (the **Molodovsky effect**).
4. **Comparability**: adjust for accounting differences (e.g., LIFO vs FIFO).

#### Example: Evergreen (Nonrecurring Items)

The price is £50.11. The analyst treats only the legal provision as nonrecurring; amortization and repeated restructuring charges are ongoing.

| EPS definition | EPS | P/E |
| --- | ---: | ---: |
| Reported TTM | £4.52 | $50.11/4.52=$ **11.1** |
| Company's "core" EPS | £6.01 | **8.3** |
| Analyst's underlying EPS | £4.60 | **10.9** |

The company's core EPS flatters the stock; the analyst's P/E is close to the reported one.

$$
\begin{aligned}
\text{Historical: }EPS_N&=\overline{EPS}_{\text{cycle}}\\
\text{ROE: }EPS_N&=\overline{ROE}_{\text{cycle}}\\
&\quad\times BVPS_{\text{current}}
\end{aligned}
$$

| Normalizing method | Normalized EPS | Note |
| --- | --- | --- |
| Historical average EPS | Average EPS over the last full cycle | Ignores changes in the company's **size** |
| Average ROE | Average ROE over the cycle × **current** BVPS | Reflects size; usually preferred |

Long-run ROA × total assets, or long-run ROE × equity, also work (useful when the company reported a loss).

#### Example: Zenlandia Chemical

The price is \$18.21, average ROE over the cycle 22.6%, and current BVPS \$4.82.

| Year | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| EPS (\$) | 0.74 | 0.63 | 0.61 | 0.54 | 1.07 | 0.88 | 1.08 |

| Method | Normalized EPS | P/E |
| --- | --- | ---: |
| Historical average | $5.55/7=\$0.79$ | $18.21/0.79=$ **23.1** |
| Average ROE | $0.226\times 4.82=\$1.09$ | $18.21/1.09=$ **16.7** |

BVPS grew 61% over the cycle, so the ROE method reflects the larger company, which looks **cheaper**.

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

#### Example: BP and Toyota

**BP** (GGM): retention 40%, $g$ 3.5%, $r$ 7.6%.

$$\frac{P_0}{E_1}=\frac{1-0.40}{0.076-0.035}=\frac{0.60}{0.041}=14.6$$

**Toyota** (FCFE model): value ¥6,980, price ¥6,688, FY2020 EPS ¥720.

$$
\begin{aligned}
\text{Justified}&=\frac{6{,}980}{720}=9.7\\
\text{Actual}&=\frac{6{,}688}{720}=9.3
\end{aligned}
$$

Toyota trades about **4% below** its justified P/E: undervalued.

**Predicted P/E** comes from a cross-sectional regression on fundamentals (payout, beta, growth):

$$
\begin{aligned}
\widehat{P/E}={}&12.12+2.25\times\underbrace{0.45}_{\text{payout}}\\
&-0.20\times\underbrace{0.9}_{\beta}+14.43\times\underbrace{0.08}_{g}\\
={}&14.1
\end{aligned}
$$

That is below the actual 18, so the stock is **overvalued**. Limitations: the regression is valid only for its sample and period; coefficients and explanatory power change over time; and **multicollinearity** makes individual coefficients hard to interpret.

### Comparing P/Es

The steps for any multiple: (1) choose and compute the multiple; (2) choose comparables and compute the **benchmark** (median or mean); (3) apply the benchmark, possibly adjusted for fundamentals; (4) check whether differences are explained by fundamentals.

* Benchmarks: a peer group, the industry or sector, an equity index, or the stock's **own history**.
* Comparables start from the narrowest GICS (sub-industry) or ICB (subsector) group, then filter by size and markets served.
* All else equal: **higher growth → higher justified P/E; higher risk → lower justified P/E**.

$$
PEG=\frac{P/E}{\text{EPS growth (in percent)}}
$$

Lower is more attractive; some treat below 1 as attractive. Limitations: it assumes a **linear** P/E–growth relationship, and ignores **risk** and how long growth lasts.

#### Example: Telecoms with Fundamentals

**CenturyLink.** Its PEG is the lowest among the low-P/E names, so it is relatively undervalued:

$$PEG=\frac{8.89}{8.52}=1.04$$

**AT&T.** Start from the peer median forward P/E of 11.99, and adjust it up to 13.0 for superior profitability and below-average risk:

$$\text{Value}=13.0\times 3.63=\$47.19$$

That is well above the \$33.98 price: **undervalued**.

**Industry and market comparisons.** Larger groups cancel out individual mispricings but are less similar. Cap-weighted index P/Es are dominated by the largest stocks, so use the **median** for mid-caps.

#### Example: Stocks vs the S&P 500

The index P/E is 21.8. Each stock's benchmark P/E is its historical ratio to the index × 21.8.

| Stock | Actual P/E | Historical ratio to the index | Benchmark P/E | Verdict |
| --- | ---: | ---: | ---: | --- |
| A | 15.2 | 80% | 17.4 | Somewhat cheap |
| B | 30.0 | 120% | 26.2 | Expensive |
| C | 15.2 | 105% | 22.9 | **Most undervalued** |

This assumes the historical relationships still hold.

**Market-level models.**

* **Fed model**: the market is overvalued when its forward E/P is below the 10-year Treasury yield:

$$\text{Justified P/E}=\frac{1}{y_{\text{10-year Treasury}}}$$

  E.g., a yield of 2.72% gives $1/0.0272=36.8$, against a trailing P/E of 18.9. Criticisms: it ignores the ERP and growth, handles inflation poorly, is nonlinear at low rates, and is very sensitive to small rate changes.
* **Yardeni model**: the earnings yield = CBY − b × LTEG + residual, so

$$
\frac{P}{E}=\frac{1}{CBY-b\times LTEG}
$$

  where CBY is the A-rated corporate bond yield, LTEG the consensus 5-year earnings growth, and $b$ historically 0.10 (later 0.10, 0.20, 0.25). Higher CBY → lower P/E; higher growth → higher P/E.

**The stock's own history.** It breaks down if the business mix, leverage, interest rates or inflation have changed.

$$
\begin{aligned}
\text{Price}={}&\overline{P/E}_{\text{own history}}\\
&\times EPS_{\text{recent or normalized}}
\end{aligned}
$$

#### Example: Honda

Honda's P/Es over five years were 6.9, 10.0, 10.9, 10.8 and 9.7; EPS is ¥381.93 and the price about ¥2,837.

| Benchmark | P/E | Justified price | Price vs justified |
| --- | ---: | ---: | ---: |
| Median | 10.0 | $10.0\times 381.93=$ ¥3,819 | −26% |
| Mean | 9.7 | $9.7\times 381.93=$ ¥3,704 | −23% |

The price is about 23–26% below either value: **possibly undervalued**.

**Inflation and P/E.** With no real growth, full payout, a pass-through rate λ of cost inflation $I$, and a real required return $\rho=r-I$:

$$
\frac{P_0}{E_1}=\frac{1}{\rho+(1-\lambda)I}
$$

With full pass-through (λ = 1), P/E = 1/ρ; with none (λ = 0), 1/$r$. With incomplete pass-through, **higher inflation → lower P/E**; at the same inflation, **more pass-through → higher P/E**. With ρ = 3%:

| λ | $I$ | $1/[\rho+(1-\lambda)I]$ | P/E |
| ---: | ---: | --- | ---: |
| 75% | 6% | $1/(0.03+0.25\times 0.06)$ | **22.2** |
| 75% | 2% | $1/(0.03+0.25\times 0.02)$ | **28.6** |
| 90% | 6% | $1/(0.03+0.10\times 0.06)$ | **27.8** |
| 70% | 6% | $1/(0.03+0.30\times 0.06)$ | **20.8** |

### Terminal Value from Multiples

$$
V_n=\text{Trailing P/E}\times E_n
$$

$$
V_n=\text{Forward P/E}\times E_{n+1}
$$

* A **fundamentals-based** terminal multiple is the GGM restated as a multiple (sensitive to $r$, payout and $g$).
* A **comparables-based** multiple (median or average industry P/E, the stock's own past P/E) is grounded in market data, but carries any market mispricing into the terminal value.

#### Example: Oil Exploration Company

Find the terminal value at Year 3. $E_3$ = \$3.00, $r$ = 10%, mature payout 45%, industry ROE 13%, industry P/E 14.3.

**Comparables-based.**

$$V_3=14.3\times 3.00=\$42.90$$

**Fundamentals-based (GGM).**

$$
\begin{aligned}
D_3&=0.45\times 3.00=\$1.35\\
g&=(1-0.45)\times 13\%=7.15\%\\
V_3&=\frac{1.35\times 1.0715}{0.10-0.0715}=\$50.76
\end{aligned}
$$

The fundamentals-based value is **18.3% higher**.

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
BVPS=\frac{\text{Equity}-\text{Preferred}}{\text{Common shares}}
$$

Preferred includes any preferred dividends in arrears.

#### Example: TD Bank

In 2018, TD's equity was CAD80,040m, including CAD5,000m of preferred, with 1,830.4m common shares; the price is CAD73.03.

$$
\begin{aligned}
BVPS&=\frac{80{,}040-5{,}000}{1{,}830.4}=41.00\\
P/B&=\frac{73.03}{41.00}=1.78
\end{aligned}
$$

**P/B = 1.78** (BVPS was 38.23 in 2017 and 37.58 in 2016).

**Adjustments**: use **tangible book value** (at least remove goodwill; separable intangibles such as patents may stay); convert LIFO to FIFO; include off-balance-sheet items; restate to fair value.

#### Example: Barclays (2012)

| Input | £m |
| --- | ---: |
| Equity | 62,957 |
| Goodwill and intangibles | 7,915 |
| Fair value of financial assets below carrying amount | 17,333 |
| Fair value of liabilities below carrying amount | 399 |
| Diluted shares | 12,614m |
| Price | £2.4239 |

A lower fair value of assets cuts book value; a lower fair value of liabilities raises it.

| Book value | Per share | P/B |
| --- | ---: | ---: |
| Reported: $62{,}957/12{,}614$ | £4.9910 | **0.49** |
| Tangible: $(62{,}957-7{,}915)/12{,}614$ | £4.3636 | **0.56** |
| Adjusted: $(62{,}957-7{,}915-17{,}333+399)/12{,}614$ | £3.0211 | **0.80** |

**Justified P/B** (GGM with $g$ = $b$ × ROE, based on $B_0$):

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}
$$

$$
\frac{P_0}{B_0}=1+\frac{PV(RI)}{B_0}
$$

where $PV(RI)$ is the present value of expected residual earnings.

* E.g., ROE 12%, $r$ 10%, $g$ 7%:

$$\frac{P_0}{B_0}=\frac{0.12-0.07}{0.10-0.07}=1.67$$

* P/B is driven by **ROE relative to $r$**: if ROE = $r$, P/B = 1; with $g$ = 0, P/B = ROE/$r$. At the same P/B, the higher-ROE stock is cheaper.

## Price to Sales

| Rationales | Drawbacks |
| --- | --- |
| Sales are harder to manipulate | Sales growth without profit or cash isn't value |
| Sales are positive even when EPS isn't | P/S compares a price (after financing) with a flow **before** financing; use EV/sales |
| More stable than P/E | Ignores differences in cost structure |
| Fits mature, cyclical and loss-making companies | Revenue recognition can still distort it |
| P/S differences relate to long-run returns | |

$$
\begin{aligned}
\frac{P}{S}&=\frac{P}{E}\times\frac{E}{S}\\
&=P/E\times\text{Net margin}
\end{aligned}
$$

#### Example: Stora Enso

Sales are €10,486m, with about 788.5m shares; the price is €10.34.

$$
\begin{aligned}
\text{Sales per share}&=\frac{10{,}486}{788.5}=13.30\\
P/S&=\frac{10.34}{13.30}=0.778
\end{aligned}
$$

Revenue recognition red flags: **barter** of advertising between internet companies (1998–2000), **bill-and-hold** sales (Diebold: a \$25m SEC settlement), **gross vs net** revenue (Groupon's restatement cut its sales by more than half). If manipulation is suspected, use a higher risk premium (a lower justified P/S), or avoid the stock.

**Justified P/S:**

$$
\frac{P_0}{S_1}=\frac{(E_1/S_1)(1-b)}{r-g}
$$

$$
\frac{P_0}{S_0}=\frac{(E_0/S_0)(1-b)(1+g)}{r-g}
$$

It rises with the profit margin, both directly and through growth: $g=b\times PM\times\frac{Sales}{TA}\times\frac{TA}{Equity}$.

#### Example: Getinge

**Justified P/S.** $r$ = 9%, forecast margin 9%, payout 35%, $g$ = 7%; 2019 sales per share SEK94.3; price SEK133.70.

$$
\begin{aligned}
\frac{P_0}{S_1}&=\frac{0.09\times 0.35}{0.09-0.07}=1.575\\
V_0&=1.575\times 94.3=148.52
\end{aligned}
$$

**SEK148.52** is above the SEK133.70 price: **undervalued**.

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

$$
\begin{aligned}
CF={}&EPS+\text{Depreciation}\\
&+\text{Amortization}+\text{Depletion}
\end{aligned}
$$

CF is unaffected by the depreciation method, so P/CF sees through EPS growth that is only an accounting artifact (e.g., accelerated depreciation).

#### Example: Philips

$$
\begin{aligned}
CF&=\underbrace{1.41}_{EPS}+\underbrace{1.17}_{\mathrm{D\&A}}=2.58\\
P/CF&=\frac{36.31}{2.58}=14.1
\end{aligned}
$$

#### Example: Colgate (Justified Multiples)

$FCFE_0$ = \$2.66, CF = \$3.26, $r$ = 7.4%, $g$ = 3.2%.

$$
\begin{aligned}
V_0&=\frac{2.66\times 1.032}{0.074-0.032}\\
&=\$65.36\\
\text{P/CF}&=\frac{65.36}{3.26}=20.05\\
\text{P/FCFE}&=\frac{65.36}{2.66}=24.57
\end{aligned}
$$

## Dividend Yield

* **Rationales**: a component of total return, and a less risky one.
* **Drawbacks**: only part of the return; **dividend displacement of earnings** (paying now lowers future growth, though payout may correlate with future profitability); the "safer" argument assumes markets misprice risk.

$$
\begin{aligned}
\text{Trailing yield}&=\frac{\text{Dividend rate}}{P_0}\\
\text{Leading yield}&=\frac{\text{Next year's }E(D)}{P_0}
\end{aligned}
$$

The **dividend rate** is 4 × the latest quarterly dividend, or the latest annual total for uneven semiannual payers.

#### Example: BCE and BT

$$
\begin{aligned}
\text{BCE}&=\frac{4\times 0.58}{39.53}=\frac{2.32}{39.53}\\
&=5.87\%\\
\text{BT}&=\frac{0.976}{15.20}=6.42\%
\end{aligned}
$$

**Justified dividend yield** (GGM):

$$
\frac{D_0}{P_0}=\frac{r-g}{1+g}
$$

Higher growth → lower yield (high-yield screens are value-oriented); a higher $r$ → higher yield. Check dividend **safety**: the payout ratio, interest coverage, net debt/EBITDA. The highest yield isn't necessarily the best pick: compare expected return ≈ yield + $g$.

## Enterprise Value Multiples

$$
\begin{aligned}
EV={}&\text{Equity}+\text{Preferred}\\
&+\text{Minority interest}+\text{Debt}\\
&-\text{Cash and ST investments}
\end{aligned}
$$

(all at market value). Cash is subtracted because the acquirer gets it: EV is the net purchase price. Use the market value of debt; if unavailable, book or matrix-priced values. **Total invested capital** (TIC) = equity + debt, **without** subtracting cash.

| Rationales for EV/EBITDA | Drawbacks |
| --- | --- |
| Better than P/E for companies with different **leverage** (EBITDA is before interest) | Overstates CFO when working capital is growing; ignores revenue recognition effects |
| Controls for D&A differences → capital-intensive companies (cable, steel) | FCFF links better to value; EBITDA reflects capex only if D&A ≈ capex |
| EBITDA is often positive when EPS is negative | |

EV multiples take a **control** perspective and are less sensitive to leverage than price multiples.

#### Example: Colgate-Palmolive EV/EBITDA

Amounts in \$m; 863m shares at \$66.48.

**Step 1. Enterprise value.** Debt is long-term debt, its current portion and other non-current liabilities (NCL); NCI is the non-controlling interest.

$$
\begin{aligned}
\text{Market cap}&=863\times 66.48\\
&=57{,}372\\
\text{Debt}&=\underbrace{6{,}354}_{\text{LT}}+\underbrace{0}_{\text{current}}+\underbrace{2{,}269}_{\text{other}}\\
&=8{,}623\\
EV&=57{,}372+8{,}623\\
&\quad+\underbrace{299}_{\text{NCI}}-\underbrace{726}_{\text{cash}}\\
&=65{,}568
\end{aligned}
$$

**Step 2. EBITDA.**

$$
\begin{aligned}
EBITDA&=\underbrace{2{,}400}_{NI}+\underbrace{143}_{\text{Int}}\\
&\quad+\underbrace{906}_{\text{Tax}}+\underbrace{511}_{\mathrm{D\&A}}\\
&=3{,}960
\end{aligned}
$$

**Step 3. Multiple.**

$$\frac{EV}{EBITDA}=\frac{65{,}568}{3{,}960}=16.6$$

* With preferred stock, start EBITDA from net income available to **both** preferred and common shareholders.
* The justified EV/EBITDA rises with expected **FCFF growth** and **ROIC** (after-tax operating profit ÷ invested capital), and falls with **WACC**.
* A lower EV/EBITDA than peers → relatively undervalued (one input among several). TIC/EBITDA usually ranks peers the same way; rankings differ only if cash holdings vary a lot.

**Other EV denominators**, built up from net income:

| Measure | Interest | Taxes | Depreciation | Amortization | Other |
| --- | --- | --- | --- | --- | --- |
| FCFF | + (after tax) | | + | + | − WCInv − FCInv |
| EBITDA | + | + | + | + | |
| EBITA | + | + | | + | When amortization is large, depreciation isn't |
| EBIT | + | + | | | When neither is large |

Industry-specific measures include EV/EBITDAR (airlines), EV/subscribers and EV/reserves. **EV/sales** fixes P/S's mismatch for companies with different capital structures. E.g., [Stora Enso](#example-stora-enso):

$$
\begin{aligned}
EV&=8{,}154+2{,}970-1{,}130\\
&=9{,}994\\
EV/\text{Sales}&=\frac{9{,}994}{10{,}486}=0.953
\end{aligned}
$$

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
| Unexpected earnings (surprise) | The actual EPS minus the expected EPS |
| Scaled earnings surprise | UE ÷ standard deviation of **analysts' forecasts** (their dispersion) |
| Standardized unexpected earnings | UE ÷ standard deviation of **past surprises** (e.g., 20 quarters) |
| Relative strength | The stock's compound return over a period (price momentum), or stock ÷ index, often scaled to 1.0 at the start |

$$
\begin{aligned}
UE_t&=EPS_t-E(EPS_t)\\
\text{Scaled}&=\frac{UE_t}{\sigma_{\text{forecasts}}}\\
SUE_t&=\frac{EPS_t-E(EPS_t)}{\sigma\left[EPS_t-E(EPS_t)\right]}\\
RS_t&=\frac{P_{\text{stock},t}/P_{\text{stock},0}}{P_{\text{index},t}/P_{\text{index},0}}
\end{aligned}
$$

The rationale: positive surprises may be followed by persistent abnormal returns, and returns may show persistence or reversal. Caveats: data snooping and hindsight bias, and technical rules tend to stop working once widely used. Momentum can hint at **when** a price will converge to intrinsic value.

#### Example: BP Scaled Surprise

The consensus is \$3.26, the high estimate \$3.74, and the standard deviation of forecasts \$0.29. If EPS comes in at the high estimate:

$$\text{Scaled surprise}=\frac{3.74-3.26}{0.29}=1.66$$

#### Example: SUE

| Case | Surprise | σ of past surprises | SUE |
| --- | ---: | ---: | ---: |
| Volatile history | \$0.05 | \$0.20 | 0.25 |
| Same surprise, steadier history | \$0.05 | \$0.07 | **0.71** |
| Exxon, Sept 2013 | $1.79-1.77=0.02$ | \$0.1250 | **0.16** |

The same surprise matters more for a company whose earnings are usually predictable. VW had larger % surprises, but Exxon's SUE swung more (its σ is smaller), so "accuracy" depends on the measure.

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

#### Example: A Two-Stock Portfolio

| Stock | Market cap (€m) | Earnings (€m) | P/E | Weight |
| --- | ---: | ---: | ---: | ---: |
| 1 | 715 | 71.50 | 10 | 55% |
| 2 | 585 | 29.25 | 20 | 45% |
| **Portfolio** | **1,300** | **100.75** | $1{,}300/100.75=$ **12.90** | |

Only the weighted harmonic mean reproduces the portfolio's true P/E:

| Measure | Calculation | P/E |
| --- | --- | --- |
| Arithmetic mean | (10 + 20)/2 | 15.00 |
| Weighted mean | 0.55(10) + 0.45(20) | 14.50 |
| Harmonic mean | 1/[0.5(0.1) + 0.5(0.05)] | 13.33 |
| **Weighted harmonic** | 1/[0.55(0.1) + 0.45(0.05)] | **12.90** |

**Using several indicators.** Analysts combine DCF values with multiples (P/E, EV/EBITDA, dividend yield). In backtests, watch for **look-ahead bias** (using data not yet reported at the time).

**Screening** narrows the universe by criteria. Limitations: no control over how inputs such as EPS are computed, and no qualitative factors. A screen with only low-multiple, high-yield criteria (e.g., P/E < 20, P/B < 2, yield ≥ 3%) has no profitability or risk filter, so a low P/E may just reflect low profitability or high risk.

> [!NOTE]
>
> **Textbook issues.**
>
> * Honda: the price is given as ¥2,837, but the solution computes with ¥2,817 (2,817/3,819 − 1 = −26.2%). With ¥2,837, the gaps are −25.7% and −23.4%; the conclusion is the same.
> * Barclays uses total equity including £9,371m of non-controlling interests. Strictly, common book value should exclude them (£53,586m); follow the textbook's numbers for this example.
> * BT: the solution prints "0.0642, or 6.52%"; 0.976/15.20 = 6.42%.
> * Colgate's EV counts "other non-current liabilities" (\$2,269m) as debt; normally only interest-bearing debt is included. Its components sum to \$65,568m, which gives the 16.6 multiple.
> * Stora Enso: shares are given as 788.4m in one place and 788.6m in another, and the EV line prints equity as €8,145m, though €8,154m gives €9,994m.
> * SUE: the solution says VW's SUE ranged "−3.57 to +1.13", but the table's maximum is 1.97.
