# Publicly Traded Real Estate Securities

The types of listed real estate securities (REITs, REOCs, MBS); why NAV per share is used and how to estimate it from cash NOI; FFO and AFFO; valuing a REIT share with NAV, P/FFO and P/AFFO, and dividend discount or DCF models; and public vs private real estate. (2026 title: *Investments in Real Estate through Publicly Traded Securities*.)

| Term | Meaning |
| --- | --- |
| **NAVPS** | (Market value of assets − market value of liabilities) ÷ shares |
| **Cash NOI** | NOI with non-cash (straight-line) rent removed |
| **Non-cash rent** | Straight-line (average contractual) rent booked as revenue − cash rent actually received |
| **FFO** | Net income + depreciation + amortization − net gains on sales of real property |
| **AFFO** (FAD, CAD) | FFO − non-cash rent − recurring (maintenance-type) capex and leasing costs |
| **TRS** | Taxable REIT subsidiary, for non-qualifying activities |

## Types of Listed Real Estate Securities

* **REITs** own, finance and (to a limited extent) develop income-producing real estate. They must distribute **90%–100%** of taxable income; dividends are deductible (or the REIT is simply exempt), so there is effectively no corporate income tax. **Equity REITs** own property; **mortgage REITs** make or invest in real estate loans.
* **REOCs** are ordinary **taxable** real estate companies. A business is a REOC rather than a REIT if it is in a country without a REIT regime, mainly develops property **for sale**, or offers other non-qualifying services (brokerage, third-party property management).
* **MBS** are securitized claims on mortgage pools: CMBS (commercial, from about 100 loans down to one large loan) and RMBS (residential, thousands of loans). The market value of real estate **debt** securities (especially RMBS) far exceeds that of listed real estate equity.
* Private versions exist too (private REITs and REOCs, private mortgages and debt).

### REIT Rules

In most countries, a REIT must:

* Distribute **90%–100%** of otherwise taxable earnings.
* Invest at least **75%** of its assets in real estate.
* Earn at least **75%** of its income from rent or mortgage interest.

Other possible rules: a minimum number of shareholders and limits on concentration (in the US, at least 100 shareholders, and the **5/50 rule**: five or fewer holders can't own more than 50%), and limits on non-rental income, development and leverage.

* Most US REITs are **self-managed and self-advised** (fewer conflicts). **Externally managed** REITs pay fees to an adviser, which may want to grow assets if fees are asset-based, and may push affiliated services.
* REITs dominate in North America (98% of listed real estate equity); REOCs are more common in Europe (59%) and Asia Pacific (51%), because of tax regimes.

| Advantages of REITs (vs private real estate) | Disadvantages |
| --- | --- |
| Liquidity | No retained earnings: must keep raising external capital to grow |
| Transparency | Regulatory costs of a public company |
| Diversified property holdings (type, geography, tenant credit) | Less diversification benefit: share prices partly follow the stock market |
| High-quality portfolios | Limited asset types: non-qualifying activities go into a taxed **TRS** |
| Professional management (economies of scale) | |
| Potentially stable income (sometimes monthly) | |
| Tax efficiency (single taxation) | |

## Valuation

Three approaches: asset value (NAV), price multiples (P/FFO, P/AFFO, EV/EBITDA), and discounted cash flow (DDM or DCF).

### Net Asset Value

* **BVPS** uses depreciated historical cost; **NAVPS** uses market values, and is the relevant measure for REITs and REOCs.
* NAVPS is the **primary** valuation measure in **Europe and Asia**; US analysts more often use P/FFO.
* NAV is the largest part of intrinsic value; it should also reflect income not from assets (fees), non-real-estate assets (cash), contingent liabilities, and value added by management.
* A price below NAVPS suggests undervaluation, and above it overvaluation, unless justified (management, leverage, governance, expected events). REITs below NAV, or highly levered, find it harder to raise equity: issuing shares below NAV is **dilutive**.
* **Accounting**: under IFRS, investment property can use the **fair value model** (changes go through net income) or the **cost model** (fair value disclosed). Under US GAAP, most owners use historical cost, which understates long-held appreciating assets and can overstate depreciation, so book values must be replaced with market estimates.

$$
NAVPS=\frac{\text{Assets}-\text{Liabilities}}{\text{Shares}}
$$

with assets and liabilities at market value.

**Steps:**

1. Start with NOI (gross rent − vacancy and collection losses − operating expenses; before interest, tax, depreciation and amortization). Remove **non-cash rent**, and add a full year for mid-year acquisitions → pro forma **cash NOI**; grow it one year → next-12-month cash NOI.
2. Value the operating real estate by capitalizing that NOI: value = $NOI_1$ ÷ cap rate, with the cap rate from comparable transactions.
3. Add other tangible assets at book value: cash, receivables, prepaid and other assets, and **land held for development** (usually at book, as land is hard to value) → **gross asset value**. Exclude goodwill, deferred financing costs and deferred tax assets.
4. Subtract debt (at market value, if materially different) and other liabilities, but **not deferred tax liabilities** (an accounting provision, not an economic liability).
5. Divide by shares outstanding.

NAV is a **pretax** value: taxes on liquidation are ignored, because it's unclear how the company or its assets would be sold.

**Example (USD thousands).**

| Step | Amount |
| --- | --- |
| Last-12-month NOI | 270,432 |
| Less: non-cash rent | (7,667) |
| Plus: full-year effect of acquisitions | 4,534 |
| Pro forma cash NOI (last 12 months) | 267,299 |
| Plus: next-12-month growth (1.5%) | 4,009 |
| **Next-12-month cash NOI** | **271,308** |
| ÷ 7.00% cap rate → operating real estate | 3,875,829 |
| + Cash 65,554, land for development 34,566, receivables 45,667, prepaid and other 23,456 | 169,243 |
| **Gross asset value** | **4,045,072** |
| − Total debt 1,010,988, other liabilities 119,886 | (1,130,874) |
| **NAV** | **2,914,198** |
| ÷ 55,689 shares → **NAVPS** | **USD52.33** |

**Example.** NOI USD115m, book value USD1,005m, market value of debt USD505m, cap rate 7%, 100m shares → property value 115/0.07 = USD1,642.9m; NAV = 1,642.9 − 505 = USD1,137.9m → **NAVPS USD11.38** (not USD10.05, the book value per share, nor USD16.42, before debt).

> [!IMPORTANT]
> A higher cap rate → a lower property value → **lower NAV**. Faster NOI growth → higher NAV. Deferred tax liabilities do **not** reduce NAV. Old land carried at book value can be marked up to its current value.

NAV can be estimated from (1) cap rate and NOI, (2) value per square foot or unit, or (3) appraised values disclosed under IFRS, adjusted if the analyst disagrees.

**Limitations of NAV:**

* Cap rates and values per ft² come from private-market transactions, and private buyers' discount rates may differ from REIT investors'.
* NAV reflects value to a **private buyer**; stock investors focus on near-term changes in income and asset values, and appraisal-based NAV lags.
* REITs have traded at premiums and discounts of more than **25%** to NAV.
* NAV treats the REIT as a **static pool of assets**, not a going concern: it ignores management's ability to add or destroy value (a stronger team can justify a 10% premium).
* NAV becomes **subjective** when property markets are illiquid (few transactions) or the REIT owns hundreds of properties; there may be a premium or discount for a large portfolio; and land, unique properties, service businesses and joint ventures are hard to value.

REITs **should** trade at a premium to NAV when management creates value: daily liquidity lowers the required return relative to private markets, and public markets attract above-average managers. In practice, NAV is often used **relatively**: buy the REIT with the smallest premium (or sell the one with the smallest discount), or back out **implied cap rates** from share prices to compare similar portfolios.

### Price Multiples

P/FFO and P/AFFO (and, less often, EV/EBITDA) are used for relative valuation, usually on next-year estimates, against history, peers of the same property type, or all REITs.

**Funds from operations:**

$$
\begin{aligned}
FFO={}&\text{Net income}+\text{Depreciation}\\
&+\text{Amortization}\\
&-\text{Gains on property sales}
\end{aligned}
$$

The fuller (Nareit) definition: GAAP net income + losses (− gains) on property sales + real estate depreciation and amortization + real estate impairments and write-downs.

* Depreciation is added back because real estate tends to hold or gain value: book depreciation doesn't reflect economic reality.
* Gains or losses on selling depreciated property aren't sustainable income.
* The amortization add-back includes leasing commissions, tenant improvements and allowances.
* FFO is **not** cash flow: it ignores the capex needed to sustain cash flow, and financing flows.
* It's the most common metric in the **US** (and growing in Asia Pacific), and readily available from data providers.

**Adjusted funds from operations:**

$$
\begin{aligned}
AFFO={}&FFO-\text{Non-cash rent}\\
&-\text{Recurring capex}
\end{aligned}
$$

* Recurring capex here includes leasing costs.
* Subtract non-cash (straight-line) rent: with escalating leases, booked rent exceeds cash rent in the early years.
* Subtract recurring maintenance capex and leasing costs (leasing commissions, tenant improvement allowances).
* AFFO (also called funds available for distribution, **FAD**, or cash available for distribution, **CAD**) is a better measure of **economic income** and **dividend-paying capacity** than FFO. But it's more subjective (capex is lumpy), methods vary, and data providers generally **don't compile** AFFO estimates.

**Example (Office Equity REIT, SGD thousands, 55,689 shares).**

| FFO | | AFFO | |
| --- | --- | --- | --- |
| Net income | 160,638 | FFO | 261,738 |
| + Depreciation and amortization | 76,100 | − Non-cash (straight-line) rent | (21,103) |
| + Losses on sales of depreciable real estate | 25,000 | − Recurring maintenance capex and leasing commissions | (55,765) |
| **FFO** | **261,738** | **AFFO** | **184,870** |
| FFO per share | 4.70 | AFFO per share | 3.32 |

**Example (working back from AFFO).** AFFO USD4,000,000; AFFO per share USD5.00; non-cash rent USD215,000; recurring capex USD700,000; price USD80 → 800,000 shares; FFO = 4,000,000 + 215,000 + 700,000 = 4,915,000 → FFO per share USD6.14 → **P/FFO 13.0×**. (Don't add depreciation back to AFFO.)

**What drives differences in P/FFO, P/AFFO and EV/EBITDA:**

1. **Expected growth in FFO or AFFO** → a higher multiple (development success, supply-constrained prime markets such as New York or London, management, lease structure).
2. **Risk of the real estate** (type, quality, age, leases, location): apartments trade at higher multiples than hotels; young, well-maintained portfolios above older ones needing capex.
3. **Capital structure and access to capital**: higher leverage → a higher required return → **lower** multiples; it may also create a stock overhang.

> [!IMPORTANT]
> FFO and AFFO are **levered** (after interest), so P/FFO is lower for a more levered REIT, all else equal. EV/EBITDA is unlevered, and EBITDA/EV approximates the cap rate (NOI ÷ value). P/FFO is the REIT version of P/E; P/AFFO is a quick cash flow multiple.

| Advantages of P/FFO and P/AFFO | Disadvantages |
| --- | --- |
| Widely accepted earnings multiples, so REITs can be compared with other investments | Miss the value of non-income-producing assets (land held for development, vacant buildings, development projects), underused assets and below-market rents |
| FFO estimates are readily available | P/FFO ignores recurring capex; P/AFFO includes it, but AFFO estimates vary widely |
| Can be combined with growth and leverage for a deeper comparison | One-time items and new revenue recognition rules complicate calculation and comparison |

### Dividend Discount and DCF Models

REITs pay out most of their income, so dividend discount and DCF models suit them. Use **two- or three-stage** DDMs (near-, intermediate- and long-term growth); a DCF uses intermediate-term cash flow projections and a terminal value from historical cash flow multiples.

**Example (Baldwin REIT, two-stage DDM).** CAPM: $r$ = 4% + 0.9 × 5% = 8.5%; $D_1$ = 1.00, $D_2$ = 1.06, then 5% growth from year 3.

$$
D_3=1.06\times1.05\approx1.11
$$

$$
P_2=\frac{1.11}{0.085-0.05}=31.71
$$

$$
V_0=\frac{1.00}{1.085}+\frac{1.06+31.71}{1.085^2}=28.76
$$

**Example (REIT C).** $r$ = 8%; $D_1$ = 4.00; growth 4.5% in years 2–3, then 4% → $D_2$ = 4.18, $D_3$ = 4.37, $D_4$ = 4.54; $P_3$ = 4.54/(0.08 − 0.04) = 113.57.

$$
\begin{aligned}
V_0&=\frac{4.00}{1.08}+\frac{4.18}{1.08^2}+\frac{4.37+113.57}{1.08^3}\\
&=100.91
\end{aligned}
$$

**Examples (other methods).**

* NAV (REIT A): cash NOI 350,000 ÷ 0.07 = 5,000,000, + cash and receivables 514,500, − debt and liabilities 2,014,000 = 3,500,500, ÷ 56,100 shares = **USD62.40**.
* P/FFO (REIT B): FFO per share 290,612/67,900 = 4.28 × the subsector's 13.5× = **USD57.78**.
* P/AFFO (REIT A): AFFO = 316,965 − 25,991 − 63,769 = 227,205 → USD4.05 a share × 18.3× = **USD74.12**.

## Mini-Case: Capitol Shopping Center REIT

Capitol Shopping Center REIT (CSC) owns grocery- and drugstore-anchored shopping centers around Washington, DC (defensive tenants, government employment, strict zoning that limits new supply).

| Year 2 (USD thousands) | |
| --- | --- |
| Net income | 124,454 |
| + Depreciation and amortization | 115,110 |
| **FFO** (3.95 a share) | **239,564** |
| − Non-cash rent (change in deferred rent receivable) | (5,112) |
| − Recurring capex | (20,006) |
| **AFFO** (3.54 a share) | **214,446** |
| Dividend 2.80 a share → payout 70.9% of FFO, 79.1% of AFFO | |

* Balance sheet vs peers: debt/total market cap 40.5% (peers 47.1%), interest coverage 3.38× (2.35×), net debt/EBITDA 5.01× (7.10×) → a stronger balance sheet.
* Price USD69.85 and year-3 FFO estimate 4.23 → P/FFO **16.5×**, vs 14.5× for shopping center REITs (a 13.8% premium); P/AFFO 18.6× vs 16.1×.
* The premium fits its steadier growth and lower leverage, but CSC may have less upside as fundamentals recover, because it never fell as far as its peers.
* Different methods give different values: re-examine the assumptions, then use the most reliable method, a midpoint, or a weighted average.

> [!IMPORTANT]
>
> * In a downturn with few transactions, NAV becomes **less** useful (more subjective), and a defensive REIT's P/FFO may rise relative to peers.
> * Land held for development produces no FFO but has value, which justifies a **higher** multiple.
> * Higher required going-in cap rates → **lower** NAV.
> * Lower long-term growth (e.g., zoning that allows more new supply) → a lower DDM value.

## Public vs Private Real Estate

Both give exposure to property fundamentals, a potential inflation hedge, attractive risk-adjusted returns and some diversification, and many institutions hold both. Listed real estate's liquidity allows short-term views, and arbitrage between public and private values (going private when shares trade well below NAV; IPOs when values are high).

| Advantages of private (direct) real estate | Advantages of public real estate (equity REITs and REOCs) |
| --- | --- |
| Direct exposure to real estate fundamentals | Tracks real estate fundamentals over the long term |
| Stable returns, low volatility | Liquidity |
| Property performance drives returns | Professional management |
| Low correlation with other assets | Potential inflation hedge |
| Potential inflation hedge | Potential for strong alignment of interests |
| Control (direct holdings, separate accounts) | Tax-efficient structure, no double taxation (REITs only) |
| Potential illiquidity premium | Exposure to diversified portfolios |
| Wide range of strategies, few restrictions | Access to diverse sectors (data centers, medical offices, self-storage) |
| Tax benefits (accelerated depreciation; tax deferral when sale proceeds are reinvested, in some markets) | Low minimum investment and entry/exit costs |
| | No special investor qualifications |
| | Limited liability |
| | More regulation and investor protection; high transparency |

| Disadvantages of private real estate | Disadvantages of public real estate |
| --- | --- |
| Low liquidity; funds hard to exit; heavy redemptions | Higher volatility than private real estate |
| High fees and expenses | High short-term correlation with equities |
| Appraisals lag market conditions | The REIT structure limits activities |
| Less investor protection; low transparency | Share prices may not reflect property values (discounts to NAV) |
| Some managers focus on gathering assets over profitability | Dividends taxed at high income tax rates |
| High minimums and wealth requirements | Compliance costs prohibitive for small companies |
| High returns often come from leverage | Poor governance or misaligned interests can hurt performance |
| | Equity markets often penalize high leverage |

> [!IMPORTANT]
>
> * The most real estate expertise is needed for **direct single-property** investment.
> * The most operating and financial flexibility: **REOCs** (no payout or activity limits) → best for maximum growth; REITs and REOCs are best for liquidity.
> * The advantage of REITs over direct property is diversification of **property holdings**, not of the overall portfolio.

> [!NOTE]
>
> **Textbook rounding.** The Baldwin solution rounds $D_3$ to 1.11; unrounded ($D_3$ = 1.113), $P_2$ = 31.80 and $V_0$ ≈ USD28.83. Pick the closest answer.
