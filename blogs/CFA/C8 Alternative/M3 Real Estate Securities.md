# Publicly Traded Real Estate Securities

This module (2026 title: *Investments in Real Estate through Publicly Traded Securities*) covers the types of listed real estate securities (REITs, REOCs, MBS), why NAVPS is used and how to estimate it from cash NOI, FFO and AFFO, valuing a REIT share with NAV, P/FFO and P/AFFO, and dividend discount/DCF models, and the pros and cons of public vs private real estate.

* [Learning Outcomes and Key Terms](#learning-outcomes-and-key-terms)
* [Types of Publicly Traded Real Estate Securities](#types-of-publicly-traded-real-estate-securities): REITs, REOCs, MBS; REIT advantages and disadvantages
* [Valuation: Net Asset Value](#net-asset-value): NAVPS calculation, premium/discount, limitations
* [Valuation: Relative Value](#relative-value-price-multiple): FFO, AFFO, P/FFO, P/AFFO, EV/EBITDA
* [Valuation: Dividend Discount / DCF](#dividend-discount-and-dcf)
* [Mini-Case: Capitol Shopping Center REIT](#mini-case-capitol-shopping-center-reit)
* [Comparison of Private and Public Real Estate Investment](#comparison-of-private-and-public-real-estate-investment)
* [Quick Recall](#quick-recall)

## Learning Outcomes and Key Terms

The candidate should be able to:

* Discuss types of publicly traded real estate securities
* Justify the use of net asset value per share (NAVPS) in valuation of publicly traded real estate securities and estimate NAVPS based on forecasted cash net operating income
* Describe the use of funds from operations (FFO) and adjusted funds from operations (AFFO) in REIT valuation
* Calculate and interpret the value of a REIT share using the net asset value, relative value (price-to-FFO and price-to-AFFO), and discounted cash flow approaches
* Explain advantages and disadvantages of investing in real estate through publicly traded securities compared to private vehicles

| Term | Meaning |
| --- | --- |
| **NAVPS** | (Market value of assets − market value of liabilities) / shares |
| **Cash NOI** | NOI with non-cash (straight-line) rent removed |
| **Non-cash rent** (straight-line rent adjustment) | Straight-line (average contractual) rent booked as revenue − cash rent actually received |
| **FFO** | Net income + depreciation + amortization − net gains on sale of real property |
| **AFFO** (FAD, CAD) | FFO − non-cash rent − recurring (maintenance-type) capex and leasing costs |
| **TRS** | Taxable REIT subsidiary for non-qualifying activities |

## Types of Publicly Traded Real Estate Securities

* **REITs**: companies that own, finance and (to a limited extent) develop income-producing real estate; must distribute **90%–100%** of taxable income. Dividends are deductible (or the REIT is simply exempt), so there is effectively no corporate income tax.
  * **Equity REITs** own property; **mortgage REITs** make or invest in real estate loans
* **REOCs**: ordinary **taxable** real estate companies. A business is a REOC rather than a REIT if it:
  * is in a country without a REIT regime,
  * engages largely in development of **for-sale** property, or
  * offers other non-qualifying services (brokerage, third-party property management)
* **MBS**: securitized rights to cash flows from mortgage pools (CMBS: commercial, ~100 loans down to one large loan; RMBS: residential, thousands of loans). The market value of real estate **debt** securities (especially RMBS) far exceeds that of listed real estate equity.
* Private versions also exist (private REITs and REOCs, private mortgages and debt).

### REITs

In most countries REITs are required to:

* Distribute **90%–100%** of otherwise taxable earnings
* Invest at least **75%** of assets in real estate
* Derive at least **75%** of income from real estate rental income or interest on mortgages

Other possible rules: minimum shareholders, ownership concentration limits (US: at least 100 shareholders and the **5/50 rule**, i.e., five or fewer holders cannot own more than 50%), limits on non-rental income, development, leverage.

* Most US REITs are **self-managed and self-advised** (fewer conflicts). **Externally managed** REITs pay fees to an adviser, which has an incentive to grow assets if fees are asset-based and may push affiliated services.
* REIT structures dominate in North America (98% of listed real estate equity), REOCs are more common in Europe (59%) and Asia Pacific (51%) because of tax regimes.

Benefit of REITs investment (vs private real estate):

* Liquidity
* Transparency
* Diversification of property holdings (type, geography, tenant credit)
* High-quality portfolios
* Active professional management (economies of scale)
* Potentially stable income (sometimes monthly distributions)
* Tax efficiency (single taxation)

Disadvantages:

* Lack of retained earnings: must keep raising external capital to grow
* Regulatory costs of a public company
* Reduced portfolio diversification benefits: share prices partly follow the stock market
* Limited in types of assets owned → non-qualifying activities go into a **TRS**, which pays tax

## Valuation

Three approaches: asset value (NAV), price multiples (P/FFO, P/AFFO, EV/EBITDA), and discounted cash flow (DDM/DCF).

### Net Asset Value

* **BVPS** uses depreciated historical cost; **NAVPS** uses market values and is the relevant measure for REITs and REOCs.
* NAVPS is the **primary** valuation measure in **Europe and Asia**; US analysts more often use P/FFO.
* NAV is the largest component of intrinsic value; it should also reflect non-asset income (fees), non-real-estate assets (cash), contingent liabilities, and value added by management.
* Price < NAVPS suggests undervaluation, price > NAVPS overvaluation, unless justified (management quality, leverage, governance, expected events). REITs below NAV or highly levered find it harder to raise equity; issuing below NAV is **dilutive**.

**Accounting**: under IFRS, investment property can use the **fair value model** (changes go through net income) or the **cost model** (must disclose fair value). Under US GAAP most owners use historical cost, which understates long-held appreciating assets and can overstate depreciation → book values must be replaced by market estimates.

$$
NAVPS=\frac{\text{MV of assets}-\text{MV of liabilities}}{\text{Shares outstanding}}
$$

Steps:

1. Start with NOI (gross rental revenue − vacancy and collection loss − operating expenses; before interest, income tax, depreciation and amortization). Remove **non-cash rent**, add a full year for mid-year acquisitions → pro forma **cash NOI**; grow it one year → next-12-month cash NOI.
2. Value operating real estate by capitalizing: $\text{Value}=\frac{NOI_1}{\text{cap rate}}$, cap rate from comparable transactions.
3. Add other tangible assets at book: cash, accounts receivable, prepaid/other, **land held for development** (usually book, since land is hard to value) → **gross asset value**. Exclude goodwill, deferred financing costs and deferred tax assets.
4. Subtract debt (at market value if materially different) and other liabilities; **exclude deferred tax liabilities** (an accounting provision, not an economic liability).
5. Divide by shares outstanding.

> [!note]
> NAV is a **pre-tax** value: taxes on liquidation are ignored because it's unclear how the company or assets would be sold.

**Textbook example (Exhibit 2, USD thousands):**

| Step | Amount |
| --- | --- |
| Last-12-month NOI | 270,432 |
| Less: non-cash rent | (7,667) |
| Plus: full-year effect of acquisitions | 4,534 |
| Pro forma cash NOI (last 12 months) | 267,299 |
| Plus: next-12-month growth (1.5%) | 4,009 |
| **Next-12-month cash NOI** | **271,308** |
| ÷ Cap rate 7.00% → operating real estate | 3,875,829 |
| + Cash 65,554 + land for development 34,566 + receivables 45,667 + prepaid/other 23,456 | 169,243 |
| **Gross asset value** | **4,045,072** |
| − Total debt 1,010,988 − other liabilities 119,886 | (1,130,874) |
| **NAV** | **2,914,198** |
| ÷ 55,689 shares → **NAVPS** | **$52.33** |

**Textbook practice question:** NOI $115m, book value $1,005m, market value of debt $505m, cap rate 7%, 100m shares → property value $115/0.07=1{,}642.9$m; NAV $=1{,}642.9-505=1{,}137.9$m → **NAVPS $11.38** (not $10.05 book per share, not $16.42 before debt).

> [!IMPORTANT]
> Higher cap rate → lower property value → **lower NAV**. Higher NOI growth → higher NAV. Deferred tax liabilities do **not** reduce NAV. Old land carried at book can be marked up to current value.

Ways to estimate NAV: (1) cap rate × NOI, (2) value per square foot/unit, (3) appraised values disclosed (IFRS), adjusted if the analyst disagrees.

Considerations:

* Cap rates and values per ft² come from private-market transactions; private buyers' discount rates may differ from REIT investors'
* NAV reflects value to a **private market buyer**; stock investors focus on near-term changes in income and asset value, and appraisal-based NAV lags
* REITs have traded at premiums and discounts of more than **25%** to NAV
* NAV implicitly treats the REIT as a **static pool of assets**, not a going concern: it ignores management's ability to add or destroy value (a 10% premium can be justified by a stronger team)
* NAV becomes **subjective** when property markets are illiquid (few transactions) or the REIT owns hundreds of properties; large-portfolio premium or discount; land, unique properties, service businesses and JVs are hard to value

Why REITs **should** trade at a premium to NAV when management creates value: daily liquidity (lower required return than private markets) and the public market attracts above-average management.

In practice NAV is often used as a **relative** tool: buy the REIT with the smallest premium (or sell the one with the smallest discount), or back out **implied cap rates** from the current price to compare similar portfolios.

### Relative Value (Price Multiple)

P/FFO or P/AFFO are used in relative valuation (EV/EBITDA to a lesser extent), usually on year-ahead estimates, vs history, peers in the same property type, or all REITs.

#### FFO

$$
FFO=\text{Net income}+\text{Depreciation}+\text{Amortization}-\text{Net gains on sale of real property}
$$

Fuller (Nareit) definition: GAAP net income + losses (− gains) from property sales + real estate depreciation and amortization + real estate impairments and write-downs.

* Depreciation is added back because real estate tends to hold or gain value; book depreciation doesn't reflect economic reality
* Gains/losses on sales of depreciated property are not sustainable income
* Amortization add-back includes leasing commissions, tenant improvements and allowances
* FFO is **not** cash flow: it ignores capex needed to sustain cash flow and financing flows
* Most common metric in the **US** (growing in Asia Pacific); readily available from data providers

#### AFFO

$$
AFFO=FFO-\text{Non-cash rent}-\text{Recurring maintenance capex and leasing costs}
$$

* Minus non-cash (straight-line) rent: escalating leases make booked rent exceed cash rent in early years
* Minus recurring maintenance capex and leasing costs (leasing commissions, tenant improvement allowances)

> [!note]
>
> AFFO is also known as funds available for distribution (**FAD**) or cash available for distribution (**CAD**). It is a better measure of **economic income** and of **dividend-paying capacity** than FFO, but it is more subjective (capex timing is lumpy), methods vary, and data providers generally **don't compile** AFFO estimates.

**Textbook example (Office Equity REIT, SGD thousands, 55,689 shares):**

| FFO | | AFFO | |
| --- | --- | --- | --- |
| Net income | 160,638 | FFO | 261,738 |
| + Depreciation and amortization | 76,100 | − Non-cash (straight-line) rent | (21,103) |
| + Losses from sale of depreciable real estate | 25,000 | − Recurring maintenance capex and leasing commissions | (55,765) |
| **FFO** | **261,738** | **AFFO** | **184,870** |
| FFO/share | 4.70 | AFFO/share | 3.32 |

**Textbook practice question (working back from AFFO):** AFFO $4,000,000, AFFO/share $5.00, non-cash rent $215,000, recurring capex $700,000, price $80 → shares $=800{,}000$; FFO $=4{,}000{,}000+215{,}000+700{,}000=4{,}915{,}000$ → FFO/share $6.14$ → **P/FFO = 13.0×**. (Do **not** add depreciation back to AFFO.)

Drivers of P/FFO, P/AFFO and EV/EBITDA differences:

1. **Expected growth in FFO/AFFO** → higher multiple (development success, supply-constrained prime markets such as New York or London, management, lease structure)
2. **Risk of the underlying real estate** (asset type, quality, age, leases, location): apartments trade at higher multiples than hotels; young, well-maintained portfolios above older ones needing capex
3. **Capital structure and access to capital**: higher leverage → higher required return → **lower** multiples; may create a stock overhang

> [!IMPORTANT]
> FFO and AFFO are **levered** (after interest), so P/FFO is lower for more levered REITs, all else equal. EV/EBITDA is unlevered, and EBITDA/EV approximates the cap rate (NOI/value). P/FFO is the REIT equivalent of P/E; P/AFFO is a quick "cash flow" multiple.

Advantages of P/FFO and P/AFFO:

* Widely accepted earnings-type multiples, so REITs can be compared with other investments
* FFO estimates are readily available
* Can be combined with growth and leverage to deepen the comparison

Disadvantages:

* Miss value of non-income-producing assets (land held for development, vacant buildings, development projects), underused assets, and below-market rents
* P/FFO ignores recurring capex; P/AFFO includes it but AFFO estimates vary widely
* One-time items and new revenue recognition rules complicate calculation and comparison

### Dividend discount and DCF

REITs pay out most of their income, so dividend discount and DCF models fit well. Use **two- or three-step** DDMs (near-, intermediate- and long-term growth); DCF uses intermediate-term cash flow projections and a terminal value from historical cash flow multiples.

**Textbook practice question (Baldwin REIT, two-step DDM):** CAPM $r=4\%+0.9\times5\%=8.5\%$; $D_1=1.00$, $D_2=1.06$, growth 5% from year 3.

$$
D_3=1.06\times1.05\approx1.11,\quad P_2=\frac{1.11}{0.085-0.05}=31.71,\quad V_0=\frac{1.00}{1.085}+\frac{1.06+31.71}{1.085^2}=\$28.76
$$

> [!note]
> Textbook issue (rounding): the solution rounds $D_3$ to 1.11; with the unrounded $D_3=1.113$, $P_2=31.80$ and $V_0\approx\$28.83$. Pick the closest answer.

**Textbook practice question (REIT C):** $r=8\%$, $D_1=4.00$, growth 4.5% in years 2–3, 4% after → $D_2=4.18$, $D_3=4.37$, $D_4=4.54$; $P_3=4.54/(0.08-0.04)=113.57$; $V_0=\frac{4.00}{1.08}+\frac{4.18}{1.08^2}+\frac{4.37+113.57}{1.08^3}=$ **$100.91**.

**Textbook practice questions (other methods):**

* NAV (REIT A): cash NOI 350,000 / 0.07 = 5,000,000 + cash and receivables 514,500 − debt and liabilities 2,014,000 = 3,500,500 / 56,100 shares = **$62.40**
* P/FFO (REIT B): FFO/share $290{,}612/67{,}900=4.28$ × subsector 13.5× = **$57.78**
* P/AFFO (REIT A): AFFO $=316{,}965-25{,}991-63{,}769=227{,}205$ → $4.05/share × 18.3× = **$74.12**

## Mini-Case: Capitol Shopping Center REIT

Capitol Shopping Center REIT (CSC) owns grocery- and drugstore-anchored shopping centres in the Washington, DC area (defensive tenants, government employment, strict zoning limiting new supply).

| Year 2 (USD thousands) | |
| --- | --- |
| Net income | 124,454 |
| + Depreciation and amortization | 115,110 |
| **FFO** (FFO/share 3.95) | **239,564** |
| − Non-cash rents (change in deferred rent receivable) | (5,112) |
| − Recurring capex | (20,006) |
| **AFFO** (AFFO/share 3.54) | **214,446** |
| Dividend/share 2.80 → payout on FFO 70.9%, on AFFO 79.1% | |

* Balance sheet vs peers: debt/total market cap 40.5% (peers 47.1%), interest coverage 3.38× (peers 2.35×), net debt/EBITDA 5.01× (peers 7.10×) → stronger balance sheet.
* Price $69.85, Yr3E FFO 4.23 → P/FFO **16.5×** vs 14.5× for shopping centre REITs (13.8% premium); P/AFFO 18.6× vs 16.1×.
* Premium is consistent with steadier growth and lower leverage, but CSC may have less "upside" as fundamentals recover because it never saw the decline peers did.
* Different methods give different values: re-examine assumptions, then use the most reliable method, a midpoint, or a weighted average.

> [!IMPORTANT]
> Case-style conclusions from the textbook questions:
> * In a downturn with few transactions, NAV becomes **less** useful (more subjective); a defensive REIT's relative P/FFO may rise vs peers.
> * Land held for development produces no FFO but has value → justifies a **higher** multiple.
> * Higher required going-in cap rates → **lower** NAV.
> * Lower long-term growth (e.g., zoning allows more new supply) → lower DDM value.

## Comparison of Private and Public Real Estate Investment

Both give exposure to property fundamentals, a potential inflation hedge, attractive risk-adjusted returns and some diversification; many institutions hold both. Listed real estate's liquidity allows short-term views and arbitrage between public and private valuations (going private when shares trade well below NAV; IPOs when values are high).

### Advantage

| **Private Real Estate** (direct)            | **Public Real Estate** (equity REITs and REOCs)             |
| ------------------------------------------- | ----------------------------------------------------------- |
| Direct exposure to real estate fundamentals | Tracks real estate fundamentals over the long term          |
| Stable returns / low volatility             | Liquidity                                                   |
| Property performance drives returns         | Access to professional management                           |
| Low correlations with other asset classes   | Potential inflation hedge                                   |
| Potential inflation hedge                   | Potential for strong alignment of interests                 |
| Control (direct real estate and separate accounts) | Tax-efficient structure avoids double taxation (REITs only) |
| Potential to earn illiquidity premium       | Potential for exposure to diversified portfolios            |
| Wide variety of strategies / few restrictions | Access to diverse sectors, including data centers, medical offices, and self-storage |
| Tax benefits (e.g., accelerated depreciation, deferred taxes in some markets when sales are reinvested in other real estate) | Low investment requirements |
|                                             | Low entry/exit costs                                        |
|                                             | No special investor qualifications beyond equity investing generally |
|                                             | Limited liability                                           |
|                                             | Greater regulation and investor protections                 |
|                                             | High transparency                                           |

### Disadvantage

| **Private Real Estate**                                      | **Public Real Estate**                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Low liquidity                                                | High volatility (compared with private real estate)          |
| Difficult-to-exit funds; redemption activity is high         | Equity market correlation is high in short term              |
| High fees and expenses                                       | REIT structure limits possible activities                    |
| Appraisal valuations commonly lag changes in market conditions | Stock prices may not reflect underlying property values (i.e., trade at discount to NAV) |
| Fewer regulations to protect investors                       | Dividends taxed at high current income tax rates             |
| Some managers focus on asset gathering over high profitability | Regulatory compliance costs are prohibitive for small companies |
| High investment minimums and high net-worth requirements     | Poor governance/mis-aligned interests can penalize stock performance |
| Low transparency                                             | Equity markets often penalize companies with high leverage   |
| High returns often derived from leverage                     |                                                              |

> [!IMPORTANT]
> * Most real estate expertise needed: **direct single-property** investment.
> * Most operating and financial flexibility: **REOC** (no payout or activity limits) → best for maximum growth; REITs and REOCs best for liquidity.
> * Advantage of REITs over direct property: diversification of **property holdings**, not of the overall portfolio.

## Quick Recall

* REIT: pay out 90–100%, ≥75% assets in real estate, ≥75% income from rent/mortgage interest; REOC: taxable, flexible, development for sale.
* NAVPS: cash NOI₁ / cap rate + other tangible assets − debt and liabilities (ignore goodwill, DTA, DTL) ÷ shares. Higher cap rate → lower NAV.
* NAV: static, private-market, subjective in illiquid markets; often used relatively (implied cap rates).
* FFO = NI + D&A − gains on property sales; AFFO = FFO − non-cash rent − recurring capex/leasing costs; AFFO = better economic income and dividend capacity.
* Multiples driven by growth, property risk, leverage; FFO is levered.
* DDM: two- or three-step with CAPM discount rate.
