# Equity Valuation

What "value" means and where perceived mispricing comes from; what valuation is used for; and the five-step valuation process, including absolute vs relative models, sum-of-the-parts valuation and how to choose a model. It sets up the rest of Equity.

## Value and Prices

**Valuation** is estimating an asset's value from variables related to its future returns, from comparisons with similar assets, or (when relevant) from what it would fetch in liquidation.

### Intrinsic Value vs Market Price

* **Intrinsic value** (IV) is the value an investor would assign with a complete understanding of the asset's investment characteristics.
* In an efficient market, the price is the best estimate of IV. But by the **Grossman–Stiglitz paradox**, if prices were perfectly efficient, nobody would pay for analysis, so prices couldn't be efficient. The **rational efficient markets** view: investors gather information only if they expect higher returns to cover its cost. Because IV is hard to pin down and trading is costly, prices can diverge from value.
* **Alpha** (abnormal return) is the return above what the risk warrants; a **perceived mispricing** is the estimated IV minus the price.
* A **catalyst** (a market or corporate event) may be needed for the price to converge to value within the investor's horizon.

A perceived mispricing has two sources:

$$
\begin{aligned}
E(IV)-P ={}& \underbrace{(IV-P)}_{\text{true mispricing}}\\
&+\underbrace{(E(IV)-IV)}_{\text{valuation error}}
\end{aligned}
$$

Only the true mispricing earns an abnormal return. To win consistently, an analyst's expectations must **differ from consensus and be right** on average.

### Definitions of Value

| Definition | Meaning |
| --- | --- |
| **Going-concern value** | Value assuming the company keeps operating for the foreseeable future, uses its assets in a value-maximizing way and has access to optimal financing. The focus of these modules |
| **Liquidation value** | Value if the company were dissolved and its assets sold individually. Usually below going-concern value (assets working together, plus human capital, add value), but a persistently unprofitable company can be worth more "dead than alive". An **orderly** liquidation fetches more than a forced, immediate sale |
| **Fair market value** | The price between a willing, informed buyer and seller, neither under compulsion. Used for taxes and private-company buy–sell agreements; long-run market prices should tend toward it if management acts for owners |
| **Fair value** (financial reporting) | The amount exchanged between knowledgeable, willing parties at arm's length, e.g., for impairment tests; related to, but not the same as, fair market value |
| **Investment value** | Value to a **specific** buyer, including that buyer's synergies and requirements |

> [!IMPORTANT]
> For **public equity**, the relevant definition is **intrinsic value under a going-concern assumption**.

## Uses of Equity Valuation

* **Selecting stocks** (the primary use): is a stock fairly priced, overpriced or underpriced, relative to its IV and to comparables?
* **Inferring market expectations**: set a model equal to the price, plug in every input except one, and solve for that one (reverse engineering).
* **Evaluating corporate events**: mergers and acquisitions, divestitures, spin offs, going-private deals (and the value of an acquirer's stock used as currency).
* **Fairness opinions** on merger terms.
* **Evaluating business strategies and models.**
* **Communicating** with analysts and shareholders.
* **Appraising private businesses** (transactions, tax, IPOs).
* **Share-based payment** (compensation).

**Example (Intel, Cornell 2001).** The price fell from \$61.50 to \$43.31 (about 30%) in five days after a revenue-growth shortfall. The price before the announcement implied about 20% growth for 10 years, then 6%; the price after implied well under 15%. To judge whether the fall was an overreaction or a correction, compare the **implied growth** with the company's history, its industry's growth and economic forecasts. Cornell found 20% far above Intel's recent five-year growth: the stock had been overvalued **before** the release, which acted as a catalyst.

## The Valuation Process

1. **Understand the business**: industry and competitive analysis, and quality of earnings.
2. **Forecast** company performance.
3. **Select** the appropriate valuation model.
4. **Convert** forecasts to a valuation.
5. **Apply** the valuation conclusions.

### 1. Understanding the Business

**Industry and competitive analysis** asks three questions:

* How **attractive** are the company's industries (the prospects for sustained profitability)? → industry structure, Porter's five forces.
* What is the company's **relative competitive position** and strategy? → the level and trend of market share; generic strategies.
* How well has it **executed** its strategy, and what are its prospects? → financial reports over time (10 years ago, 5 years ago, the last 2 years) and qualitative factors. Avoid naive extrapolation: over long horizons, growth **regresses toward the mean** (the economy's growth rate).

| Porter's five forces | Favorable for industry profitability when |
| --- | --- |
| Rivalry within the industry | Few competitors and/or strong brands |
| Threat of new entrants | High costs or other barriers to entry |
| Threat of substitutes | Few substitutes, or high switching costs |
| Bargaining power of suppliers | Many suppliers |
| Bargaining power of buyers | Many customers |

Porter's three competitive strategies:

1. **Cost leadership**: be the lowest-cost producer, pricing comparable products at or near the industry average.
2. **Differentiation**: offer unique products that buyers value, at premium prices.
3. **Focus**: win within a target segment, through cost focus or differentiation focus.

A **business model** is how the company makes money (its customers, products, delivery and financing), e.g., a low-cost airline with one class of service and one aircraft type.

**Example (oilfield services: Schlumberger, Halliburton, Baker Hughes, Saipem, NOV, Weatherford).** Demand follows oil and gas exploration and production, which follows oil and gas prices, so research their supply and demand (inventories, OPEC capacity, discoveries, household, commercial and power-generation use, GDP growth, depletion). To spot the **cost leader**, compare the level and trend of profit margins (adjusted for pricing power) and **revenue per employee**.

* For new companies and products, **non-financial measures** matter (clinical trial results, unique visitors).
* Sources: regulatory filings (the 10-K/20-F business description and MD&A; 10-Q/6-K interim reports), earnings releases, conference calls, investor relations and third parties. **Regulation FD** and the CFA Standards bar the use of material non-public information.
* ESG sources (e.g., for US autos): sustainability reports, OSHA, EEOC, SASB, the Carbon Disclosure Project, Ceres.

**Quality of earnings analysis** scrutinizes **all** the statements for (1) how **sustainable** performance is and (2) how accurately the reports reflect economic reality.

* Earnings with large non-recurring parts (litigation wins, temporary tax cuts, gains on selling non-operating assets) are lower quality.
* Start by comparing **net income with operating cash flow**. The accrual component is NI − (CFO + CFI). The cash component is **more persistent**; high accruals predict lower future ROA (Sloan 1996), i.e., lower earnings quality.
* An asset account growing much faster than sales (receivables, deferred costs) may signal aggressive accounting.

| Area | Warning sign | Possible meaning |
| --- | --- | --- |
| Revenue and gains | Early revenue recognition (bill-and-hold; sales before installation and acceptance) | Boosts income, masks declining performance |
| | Non-operating income or gains classified as operating | May be non-recurring; masks declines |
| Expenses and losses | Too much or too little in reserves (restructuring, loan-loss/bad-debt, deferred tax valuation allowance) | Shifts income between periods |
| | Capitalizing expenditures (customer acquisition, product development) | Boosts current income at the expense of future income |
| | Aggressive estimates (impairments, long depreciable lives and amortization periods, a high pension discount rate, low compensation growth, a high expected return on plan assets) | Boosts current income; changes may mask problems |
| Balance sheet | Off-balance-sheet financing (receivable securitization) | Assets and liabilities misstated |
| Operating cash flow | A rise in bank overdrafts classified as operating | CFO inflated |

**Examples.**

* **Buffett on pension assumptions**: S&P companies assumed an 8% return on plan assets; with 28% in cash and bonds earning 5%, equities would need 9.2% after fees. A high assumed return means a bigger "expected return" deduction → pension expense **understated**, net income **overstated**. The assumption is in the **footnotes**.
* **Tangoe** (SEC, 2018): revenue booked from customers unlikely to pay, and an understated bad-debt allowance → inflated revenue, earnings and receivables; NI above CFO. The warning sign: revenue +12% while average receivables +32%; receivables turnover 4.6× → 4.2×; days receivable **79 → 87**.
* **Livent**: capitalized pre-production costs (ads, sets, rehearsal salaries), raising EPS and creating an asset. Adding the amortization back in EBITDA overstated financial strength: 1996 debt/EBITDA was 1.7 as reported but **5.5** without the add-back; 1997 EBITDA was +\$58.3m reported vs **−\$52.6m**. Bankrupt in 1998.

**Fraud risk factors** (incentive, opportunity, attitude): pressure to hit targets plus dominant management; pay tied to profit or the share price; pressure on profitability; covenant or forecast pressure; related-party transactions; a complex structure; high turnover of managers, directors or legal counsel; disputes with or changes of auditors; a history of violations or late filings.

### 2. Forecasting Company Performance

* **Top-down**: from the economy to the industry to the company (e.g., an appliance maker's unit sales from GDP × market share × price).
* **Bottom-up**: aggregate detailed forecasts (e.g., sales per square meter in existing and new stores).

Combine industry analysis with financial statement analysis, and include qualitative factors (management's ability and integrity, accounting transparency).

### 3. Selecting a Valuation Model

**Absolute models** estimate an asset's **intrinsic value** directly, to compare with its price.

* **Present value (DCF) models** (the fundamental approach; "income models" in private appraisal):
  * Dividend discount models: cash flows received by shareholders.
  * Free cash flow: FCFE (after debt payments) and FCFF (before them).
  * Residual income: accrual earnings above the opportunity cost of capital.
* Valuing equity is harder than valuing bonds: the cash flows aren't contractual, there's no maturity, and the discount rate is subjective. So state a **range** of values (Graham and Dodd) and run **sensitivity analysis**.
* **Asset-based valuation**: the market value of the assets controlled. Suits natural-resource companies (e.g., Petrobras: reserves minus extraction costs; Weyerhaeuser: timber), or one division within a sum-of-the-parts (e.g., Occidental).

**Relative models** value an asset relative to others (similar assets should sell at similar prices), using **price multiples** (P/E, P/CF) or **enterprise multiples** (EV/operating earnings): the method of comparables.

* A lower P/E than a comparable stock means **relatively undervalued**, not necessarily undervalued: the comparable may itself be overvalued.
* Conservative uses over- or underweight stocks against a benchmark; aggressive **relative value investing** includes **pairs trading** (long the relatively undervalued stock, short the overvalued one, regardless of market direction).
* Advantages: simple, tied to market prices, economically sound and widely understood. It gives intrinsic value only if the comparison asset is fairly valued.

**Example (Smithson Genomics).** One analyst says it is 15% overvalued against the industry median P/E; another says 10% undervalued against the Russell 3000 median P/E. **Both can be right**: they use different benchmarks, and both are relative (e.g., the whole industry may be cheap relative to the market).

**Choosing a model.** The model should fit:

* **The company's characteristics**: the nature of its assets and how they create value. A bank (mostly marketable assets) suits asset-based or relative valuation (P/B) better than a service company does.
* **The quality and availability of data**: with no dividend history, a "simpler" DDM may be less reliable than FCF; with volatile or negative EPS, P/E comparisons are hard.
* **The purpose of the analysis**, including the analyst's perspective: a **controlling** buyer may use FCF rather than dividends, because it can redirect the cash flows. When reading others' reports, watch for the writer's perspective and biases.

Using **more than one model** adds insight (institutional investors use about 17 factors on average; composite rankings and screens are common). Absolute and relative models both assume a **going concern**.

**Sum-of-the-parts valuation.** Value each business as an independent going concern and add them up: the **breakup value** or **private market value**.

* Most useful when segments are in industries with **different valuation characteristics**, and for restructurings (spin off, split-off, tracking stock, equity carve-out).
* A breakup value above the going-concern value can prompt divestitures or spin offs.

**Example (Donaldson).** Engine Products is larger and growing faster; Industrial Products has the higher 2018 margin (EBT/sales 137.1/885.2 = **15.5%** vs 261.3/1,849.0 = **14.1%**). Management's goal of Industrial reaching 48% of the portfolio by 2021 looks unlikely. Value each segment from its own forecasts, then adjust for corporate items (taxes, overhead, unallocated assets and liabilities).

**Conglomerate discount.** The market values companies in several **unrelated** businesses below focused companies. Explanations:

* Inefficient internal capital allocation (internal capital markets don't maximize shareholder value).
* Endogenous factors (poorly performing companies tend to expand by buying unrelated businesses).
* Research measurement errors (the discount doesn't really exist).

It is most visible when companies divest businesses with few synergies with the core.

### 4. Converting Forecasts to a Valuation

* **Sensitivity analysis**: how value changes with the inputs (growth through sales and margins, the discount rate, competitors' responses).
* **Situational adjustments**:
  * **Control premium**: a controlling stake (board control, redeploying assets, changing the capital structure) is worth more than a generic model value.
  * **Lack of marketability discount**: shares with **no public market** require an extra return.
  * **Illiquidity discount**: publicly traded but **thinly** traded shares.
  * **Blockage factor**: selling a block that is large relative to trading volume (but not a controlling stake) realizes less than the market price for small lots.

### 5. Applying the Valuation Conclusions

* Users: **sell-side** analysts (brokerage research for clients), **buy-side** analysts (reports to portfolio managers or committees; quantitative analysts rank stocks), corporate and investment bank analysts (acquisition targets) and independent research vendors.
* Analysts help clients make better decisions, make markets more efficient (capital flows to its best uses) and **monitor management** (reducing agency costs).
* An effective research report is timely and clear; objective and well researched, with key assumptions identified; **separates fact from opinion**; has internally consistent analysis, forecasts, valuation and recommendation; gives enough information for the reader to critique the valuation; states the key risks; and discloses conflicts of interest.
* A target price needs a basis, a time frame and its uncertainty. Keep "good company" separate from "good investment": price matters.
* **Example (two research notes)**: MXI's is vague and hedged, with no clear valuation; TXI's gives an explicit DDM value of €3.08 vs a €2.25 price (+36.8% upside) and a clear recommendation. TXI's communicates better.
* Relevant CFA Standards: I(B) Independence and Objectivity; I(C) Misrepresentation; V(A) Diligence and Reasonable Basis; V(B) Communication with Clients (process, limitations and risks, important factors, **fact vs opinion**); V(C) Record Retention.
