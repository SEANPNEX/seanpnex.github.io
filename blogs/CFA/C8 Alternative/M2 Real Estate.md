# Real Estate

This module (2026 title: *Overview of Types of Real Estate Investment*) covers the features of real estate that matter for valuation (NOI, leverage, coverage, pre- and after-tax returns), how properties are classified, economic value drivers and the real estate cycle, the characteristics of each commercial property type, due diligence, the three valuation approaches (income, cost, sales comparison), and real estate indexes and their biases. Most worked examples follow three properties: **Wallonia Transit** (single-tenant warehouse), **Pinebranch Estates** (multi-family) and **Eastmain Plaza** (mixed-use).

* [Learning Outcomes and Key Terms](#learning-outcomes-and-key-terms)
* [Real Estate Investment Features](#real-estate-investment-features): NOI, LTV, DSC, equity dividend rate, after-tax cash flow
* [Classification](#classification) and [Real Estate Investment Forms](#real-estate-investment-forms)
* [Risk of Real Estate](#risk-of-real-estate)
* [Real Estate Cycle](#real-estate-cycle) and [Benefit of Real Estate](#benefit-of-real-estate) (portfolio role)
* [Investment Characteristics of Commercial Property](#investment-characteristics-of-commercial-property): residential, office, industrial, retail, hospitality, mixed-use
* [Due Diligence](#due-diligence)
* [Valuation](#valuation): direct capitalization, DCF, cost, sales comparison
* [Real Estate Indexes](#real-estate-indexes): appraisal vs transaction, unsmoothing
* [Quick Recall](#quick-recall)

## Learning Outcomes and Key Terms

The candidate should be able to:

* Compare important real estate investment features for valuation purposes
* Explain economic value drivers of real estate investments and their role in a portfolio
* Discuss the distinctive investment characteristics of commercial property types
* Explain the due diligence process and valuation approaches for real estate investments
* Discuss real estate investment indexes, including their construction and potential biases

| Term | Meaning |
| --- | --- |
| **NOI** | Effective gross income − operating expenses − property maintenance allowance (before financing and income tax) |
| **Property maintenance allowance** | Capex needed to **maintain** current income (not upgrades that change economic use) |
| **GPRI** | Gross potential rental income = market rent × rentable space (full occupancy) |
| **Loss to lease** | GPRI − gross rental income (market rent vs current leases) |
| **LTV** | Mortgage debt outstanding / current property value |
| **DSC** | NOI / debt service (interest **and** principal) |
| **Cap rate** | Expected NOI / property value $= r-g$ |
| **Going-in / terminal cap rate** | Cap rate on first-year NOI / on NOI after the expected sale |
| **Stabilized NOI** | Normalized NOI used in direct capitalization when NOI is expected to change |
| **Rollover risk** | Risk of losing a tenant and income when a lease expires |

## Real Estate Investment Features

Real estate ranges from **core** (stable income, bond-like) to **opportunistic** (development, equity-like). Key features that drive tradability and return: current and potential **economic use**, expected **net cash flows**, and **capital structure**.

### Net operating income

$$
NOI=\text{Effective gross income}-\text{Operating expenses}-\text{Property maintenance allowance}
$$

* Gross rent = base rent per unit area × rentable area
* Effective gross income = gross rent + other revenue (expense recoveries, pass-throughs, parking, etc.) − vacancies and concessions
* Operating expenses: fixed (taxes, insurance, service, repairs) and variable (utilities); may be borne by the owner or passed through to tenants
* The maintenance allowance is common in Europe and North America, less so in, e.g., Japan

**Textbook example (Wallonia Transit):** 10,000 m² warehouse, single tenant, base rent EUR52.50/m²; tenant pays property tax (12,500) and insurance (40,000); owner recovers EUR10.25/m² for servicing and repairs; servicing and repairs cost 120,750; maintenance allowance 100,000.

| Wallonia Transit | EUR |
| --- | --- |
| Gross rent (52.50 × 10,000) | 525,000 |
| Operating expense recovery (10.25 × 10,000) | 102,500 |
| Pass-through property tax + insurance | 52,500 |
| **Effective gross income** | **680,000** |
| Operating expenses (120,750 + 12,500 + 40,000) | (173,250) |
| Property maintenance allowance | (100,000) |
| **NOI** | **406,750** |

* If servicing and repairs run 20% over (144,900), the extra 24,150 is **not** recovered (recovery is fixed at 102,500) → NOI falls to **382,600**.
* With 10% vacancy (multi-tenant), deduct 10% of gross rent (52,500) → NOI **354,250**.
* Only lowering servicing and repair costs raises NOI; taxes and insurance are fully passed through.

> [!note]
> Textbook issue: the pro forma table prints gross rent as **525,500**, but the calculation (and the 680,000 total) use **525,000**.

### Leverage and coverage

$$
LTV=\frac{\text{Mortgage debt outstanding}}{\text{Current property value}}\qquad DSC=\frac{\text{Net operating income}}{\text{Debt service}}
$$

* Lower LTV = more owner equity. LTV changes as values move and principal amortizes.
* Debt service = **interest + principal**. Lenders put LTV and DSC limits in covenants.

**Textbook example (Wallonia):** price 3,750,000; 20-year fully amortizing loan 3,000,000 at 4%, annual payment 220,745 (year 1 interest 120,000).

* LTV after year 1 $=\frac{3{,}000{,}000-(220{,}745-120{,}000)}{3{,}750{,}000}=\frac{2{,}899{,}255}{3{,}750{,}000}=0.773$
* Property value +10% → LTV $=2{,}899{,}255/4{,}125{,}000=0.703$
* DSC $=406{,}750/220{,}745=1.84$; with NOI 382,600 → 1.73

### Equity returns

$$
\text{Equity dividend rate}=\frac{\text{Pre-tax cash flow}}{\text{Property purchase price}-\text{Mortgage loan}},\qquad \text{Pre-tax cash flow}=NOI-\text{Debt service}
$$

A first-year, cash-only, pre-tax measure that ignores capital gains or losses.

* Wallonia: $(406{,}750-220{,}745)/750{,}000=186{,}005/750{,}000=24.8\%$; with NOI 382,600 → $161{,}855/750{,}000=21.6\%$

$$
\text{After-tax cash flow}=\text{Pre-tax cash flow}-\text{Taxes},\qquad \text{Taxes}=t\times(NOI-\text{Interest}-\text{Depreciation})
$$

* Depreciable base = cost (plus improvements) − **land** (land is not depreciated)
* Wallonia: land 750,000, 30-year life → depreciation $3{,}000{,}000/30=100{,}000$; taxes $=0.25\times(406{,}750-120{,}000-100{,}000)=46{,}688$; after-tax cash flow $=186{,}005-46{,}688=139{,}317$

> [!IMPORTANT]
> Same price and NOI, **lower land value** → larger depreciable base → more depreciation → lower tax → **higher** after-tax cash flow.

## Classification

### Global Industry Classification Standard (GICS)

* **REITs**: diversified, industrial, hotel and resort, office, health care, residential, retail, specialized
* **Real estate management and development**: diversified activities, real estate operating companies (REOCs), development, services
* Mortgages and other debt investments are classified as financial-industry fixed income

### Sensitivity To Business Cycle

* Defensive (e.g., health care REITs: medical demand is stable)
* Cyclical (e.g., industrial and office REITs)

### Statistical Factors

* **Property classes**: ranking by location, age, local income levels, recent appreciation, and condition. Multi-family example:

| Class | Features |
| --- | --- |
| A | Built within 10 years or substantially renovated; top amenities; best materials |
| B | Within 20 years or renovated; dated amenities; good quality, limited deferred maintenance |
| C | Within 30 years or renovated; limited, dated amenities; deferred maintenance |
| D | Over 30 years old, less desirable location; no amenities; poor condition |

* Higher classes: highest rents and prices, **less** capital appreciation potential; lower classes: cheaper with more appreciation potential (may need capex and better local conditions).
* Sustainability certifications **BREEAM** (UK/Europe) and **LEED** (US, most recognized globally): higher construction cost, but potentially lower operating costs, higher rents, lower vacancy, tax incentives.
* Machine learning on large datasets can help predict home prices, but cycle changes are hard for models (see Zillow below).

## Real Estate Investment Forms

|             | **Debt**             | **Equity**                                                   |
| ----------- | -------------------- | ------------------------------------------------------------ |
| **Private** | - Mortgage debt      | **Direct ownership**                                         |
|             | - Construction loans | • Sole ownership                                             |
|             | - Mezzanine debt     | • Joint ventures                                             |
|             |                      | • Limited partnerships                                       |
|             |                      | **Indirect ownership**                                       |
|             |                      | • Real estate funds                                          |
|             |                      | • Private REITs                                              |
| **Public**  | - MBS / CMBS / CMOs  | - Publicly traded shares of construction, operating, or development companies |
|             | - Covered bonds      | - Public REITs                                               |
|             | - Mortgage REITs     | - UCITS / Mutual funds / ETFs                                |
|             | - Mortgage ETFs      |                                                              |

* **REOCs**: taxable corporations with few restrictions. **REITs**: mainly own/operate rental property or buy mortgages, and distribute nearly all earnings to avoid corporate tax. REITs exist in 30+ countries (corporate form in the US/Europe; externally managed trust in Australia; China launched infrastructure REITs in 2021 and rental housing REITs in 2022).
* REIT performance measure: $FFO=\text{Net income}+\text{Depreciation}+\text{Amortization}-\text{Net gains from property sales}$ (more in M3).
* Property loans: long-term, secured, first lien; floating, fixed or adjustable rate. US and Japanese mortgage investors face **prepayment risk**.
* **Covered bonds**: loans stay on the bank's balance sheet; **dual recourse** (bank + pool), substitution of bad collateral → lower risk and return. **MBS**: pool moved to an SPE; tranches with different prepayment exposure.

Risk/return spectrum (textbook Exhibit 1, low to high):

| **Strategies** | **Characteristics**                                          |
| -------------- | ------------------------------------------------------------ |
| Senior debt    | ✓ First mortgages; debt-like, mostly public                   |
| Core           | ✓ Stable income-producing properties                          |
| Core-plus      | ✓ Some refurbishing; relatively stable cash flows             |
| Value-add      | ✓ Vacant space, upgrades and repositioning                    |
| Opportunistic  | ✓ New development; equity-like return, mostly private         |

## Risk of Real Estate

* **Economic/competitive**: level and type of economic activity, demographics, relative supply, cost and availability of capital → rents, occupancy, prices
* **Property-specific**: management (maintenance, tenant and lease management), obsolescence and technological change, environmental factors (energy-efficiency rules, floods, earthquakes, hurricanes), zoning
* **Model risk**: overreliance on statistical/ML price models. Zillow Offers (2021) bought homes using a valuation algorithm, could not handle price volatility, and lost about USD1 billion.

## Real Estate Cycle

### Economic Drivers

* GDP growth, job creation and wage growth → demand for commercial space and **household formation**
* Interest rates and credit: real estate is heavily debt financed, so it is highly rate-sensitive; low mortgage rates and low house-price-to-income ratios favour **owner-occupied** housing over multi-family rentals
* Long construction lags → new supply often arrives after conditions have changed
* Local factors: business climate, major employers, infrastructure, taxes, zoning, transport links, schools and safety; declining industries or population hurt values

| **Phases**   | **Recovery**                             | **Expansion**                                              | **Oversupply**                                   | **Recession**                                  |
| ------------ | ---------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| **Features** | Business cycle trough                    | Economic growth, higher wages and confidence               | Economic growth softens                          | Economic slowdown                              |
|              | Tight credit conditions                  | Easing credit conditions                                   | **Pipeline construction continues to completion** | Tightening credit                              |
|              | Little or no new construction            | New construction and upgrades start                        | **Property glut**                                | Construction starts at lows                    |
|              | Households delay formation               | **Rising** occupancy, lease rates, rents, prices           | **Falling** occupancy and rents; prices level off then decline | **Accelerating** decline in occupancy; prices fall |
|              | **Falling** occupancy; owners cut leases; lower prices and rents |                                     |                                                  | Landlords offer favourable terms to keep tenants |

| **Phase / Measure** | **Interest rates**               | **NOI**                          | **DSC**                          | **LTV**                          |
| ------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| **Recovery**        | Reach a bottom and begin to rise | Reaches bottom and begins to rise | Reaches bottom and begins to rise | **Peaks** and begins to fall     |
| **Expansion**       | Rising                           | Rising                           | Increase                         | Decrease                         |
| **Oversupply**      | Peak and begin to fall           | **Peaks** and begins to fall     | **Peaks** and begins to fall     | Reaches **bottom** and begins to rise |
| **Recession**       | Low                              | Falling                          | Decrease                         | Increase                         |

> [!IMPORTANT]
> NOI and DSC **peak in oversupply** and bottom in recovery; LTV is the mirror image (peaks in recovery, bottoms in oversupply). Replacement cost exceeds market price in the **oversupply** phase.

## Benefit of Real Estate

Portfolio characteristics: current income, capital appreciation, inflation hedge, diversification, tax benefits.

* **Current income**: lease terms often differ from fixed rent
  * **Step-up clauses**: pre-specified future rent increases (not contingent, unlike bond step-ups)
  * **Indexed rents**: change with a market variable such as CPI
  * **Overage rent clauses**: extra rent when a retailer's sales exceed a target/breakeven level
  * Expense terms: owner pays all, passes some through, or charges increases above an expense limit; common-area charges
* **Capital appreciation**: precisely measured only when a property sells
* **Inflation hedge**: rents and prices tend to rise with inflation → real return over time
* **Diversification**: low correlation with stocks, bonds and cash; but **public** real estate (REITs, MBS) is more correlated with stocks and bonds in the short to medium term
* **Tax benefits**: tax depreciation faster than useful life (e.g., US); REIT pass-through avoids double taxation

**Textbook example (Chandra Shops overage rent):** 500 ft² store; base rent cut 10% from INR300 to INR270/ft² per month; 8% overage on monthly sales above INR1,000,000. With sales INR1,250,000: base $270\times500=135{,}000$ + overage $0.08\times250{,}000=20{,}000$ = **INR155,000** vs INR150,000 under the old lease. (A 9.6% cut with 5.6% overage gives INR149,600, which Chandra would prefer.)

## Investment Characteristics of Commercial Property

The root purpose is to earn **rental income**.

* **Residential use**
  * Single-family homes (mostly owner-occupied) and **multi-family** properties (the bulk of residential in commercial real estate), categorized by location, height and amenities
  * Demand: personal income, jobs, local conditions, affordability of owner-occupied alternatives
  * Tenants may enjoy protections (limits on rent increases or evictions), and leases are much **shorter** than for non-residential properties
* **Non-residential use**: more closely tied to economic use in an industry; more exposed to **structural** change
  * **Office**: lower development risk when built for key tenants (e.g., medical office near a hospital) or when an anchor tenant commits to a large share. Remote/hybrid work has reduced demand
  * **Industrial and warehouse**: e-commerce raised demand structurally; often designed for a specific use and **hard to convert** (least likely to be converted), though well-located ones are adapted
  * **Retail**: regional malls with anchors, local centres, standalone stores; online shopping has cut mall demand, driving conversions; proximity to workers and residents drives rents, occupancy and prices
  * **Hospitality**: business-travel hotels are **cyclical**; small motels for people in transit are less cyclical; tourist hotels depend on consumer confidence and disposable income; destination resorts are management-intensive with high fixed costs
  * **Other**: student and senior housing (senior demand rising with aging, but competition too), self-storage (low capex and operating costs, **month-to-month** leases → pricing flexibility but demand exposure), hospitals, cell towers, data centres, parking
  * **Mixed-use**: combines tenant types (e.g., office + retail); diversified income, but tied to the local economy and correlated, because tenants are often the retailers' customers

### Cash flow analysis

$$
GPRI=\text{Market rent}\times\text{Rentable space}\qquad GRI=\text{Current rent}\times\text{Rentable space}
$$

* **Loss to lease** = GPRI − GRI
  * Positive: current leases are **below** market rent
  * Negative: current leases are above market rent (e.g., excess supply and falling market rents)
* Net rental income = GRI − vacancy and collection loss − concessions and adjustments
* Total (effective gross) income = net rental income + other income + expense recoveries
* NOI = total income − operating and leasing expenses − property maintenance allowance

**Textbook example (Pinebranch Estates):** 240 units × 1,200 ft², market rent AUD2.00/ft² per month; owner absorbs taxes and insurance.

| **Pinebranch Estates** | **AUD** |
| --- | --- |
| Gross potential rent income (240 × 1,200 × 2.00 × 12) | 6,912,000 |
| Less: Loss to lease | (128,200) |
| **Gross rental income** | 6,783,800 |
| Less: Vacancy & collection cost | (791,236) |
| Less: Concessions & adjustments | (485,124) |
| **Net rental income** | 5,507,440 |
| Add: Other income | 295,211 |
| Add: Expense recovery from tenants | 525,800 |
| **Total income** | 6,327,651 |
| Less: Operating & leasing expenses | (2,753,000) |
| Less: Property maintenance allowance | (655,000) |
| **Net operating income** | **2,919,651** |

Contrast with Wallonia: multiple tenants and short leases make rental deductions much more important.

**Textbook example (Eastmain Plaza, mixed-use):** 350,000 ft²; 90% office at MYR100/ft², 10% retail at MYR250/ft² → gross rent $=0.9\times100\times350{,}000+0.1\times250\times350{,}000=$ **MYR40,250,000**; current NOI 13,085,217. Downside (new nearby retail): lose overage rent 450,800 and half of retail rent 4,375,000 → NOI falls 4,825,800 (37%) to **8,259,417**.

**Older practice table (kept from the earlier notes, not from the 2026 textbook):**

| **Description**                      | **GBP**       |
| ------------------------------------ | ------------- |
| Gross potential rent income          | 5,672,000     |
| Less: Loss to lease                  | -116,500      |
| **Gross rental income**              | 5,555,500     |
| Less: Vacancy & collection cost      | -342,600      |
| Less: Concession & adjustments       | -281,000      |
| Add: Other income                    | 134,710       |
| Add: Expense recovery from tenants   | 610,300       |
| **Effective gross rental income**    | 5,676,910     |
| Less: Operating & leasing expenses   | -3,704,510    |
| Less: Property maintenance allowance | -456,000      |
| **Net operating income**             | **1,516,400** |

## Due Diligence

Real estate is less transparent and standardized than public securities, so due diligence is more detailed:

* **Market review and outlook**: macro and local conditions, offer vs actual sale prices (prefer actual sales), environmental exposure (wildfire, flood → insurance), cost of upgrading to energy standards
* **Current lease review**: tenant rents vs market, vacancies, lease lengths, lease expiration schedule, payment history and tenant credit
* **Future lease outlook**: renewal and re-leasing costs (broker commissions, downtime, free rent, improvement allowances; usually capitalized and amortized over the lease), local supply, legal changes (Berlin rent cap 2020: rents −11% but supply of covered units fell ~59%; struck down the next year)
* **Financial review**: several years of audited statements and operating bills; check whether NOI was inflated by underinvesting in maintenance or by heavy tenant incentives
* **Documentation review**: legal/tax review of title, no liens or tax obligations, zoning and environmental compliance. Matters for the purchase but is **least likely** to feed the NOI forecast
* **Property inspection and service agreements**: survey; physical, engineering and environmental inspection; assess the property manager; review service contracts

Discrepancies lead to remediation, a price cut, or walking away.

## Valuation

### Income approach: Direct Capitalization (GGM)

$$
\text{Property value}=\frac{\text{Expected NOI}}{\text{Cap rate}},\qquad \text{Cap rate}=r-g=\frac{\text{Expected NOI}}{\text{Property value}}
$$

* $r$ = risk-free rate + property-specific risk premium. Higher $r$ (higher benchmark rates, riskier property, oversupply) → lower value; faster NOI growth (higher $g$) → lower cap rate → higher value. $g<0$ suggests a property near the end of its useful life.
* Cap rates usually come from comparable sales; comparable to a bond's current yield or the inverse of EV/EBITDA.
* Best when NOI is **stable**; otherwise use **stabilized NOI**.

**Textbook example (Wallonia):** $r=12.5\%$, $g=2\%$: value $=406{,}750/0.105=$ **EUR3,873,810**; with NOI 382,600 → EUR3,643,810 (−6%). Include higher costs only if they will recur.

### DCF

$$
\text{Property value}=\sum_{i=1}^{n}\frac{NOI_{t+i}}{(1+r)^i}+\frac{\text{Terminal value}}{(1+r)^n},\qquad \text{Terminal value}=\frac{NOI_n(1+g)}{r-g}
$$

Better when the analyst has visibility into changing NOI. Terminal value can also come from capitalizing comparable properties' NOI.

**Textbook example (Eastmain, 5-year hold, $r=14\%$, $g=3\%$ after year 5):** NOI 8,259,417; 6,092,385; 13,539,114; 14,020,153; 14,515,622.

* PV of NOI = **MYR36,911,526**
* Terminal value $=14{,}515{,}622\times1.03/0.11=$ **MYR135,919,006**
* Value $=36{,}911{,}526+135{,}919{,}006/1.14^5=$ **MYR107,503,599**
* Going-in cap rate $=8{,}259{,}417/107{,}503{,}599=7.68\%$, below the terminal cap rate of $14\%-3\%=11\%$ because year 1–2 NOI is depressed by the downside scenario (risk, i.e., $r$, is the same in every year).

### Cost approach

$$
\text{Value}=\text{Replacement cost (land + construction + developer profit)}-\text{Depreciation and other adjustments}
$$

* Replacement cost: buy land and build a property with the **same economic use** as the subject property, including soft costs, financing and **developer/contractor profit**
* Adjust down for age, less ideal location, or infeasibility of building today (codes, historical protection); adjustments can be larger or smaller than accounting depreciation
* An investor should not pay more than the cost to build a comparable property; replacement cost > market price in **oversupply**

**Textbook example (Wallonia):** cost estimate 4,350,000 (hard costs 2,675,000 + soft costs, interest and profit 925,000 + land 750,000); depreciable base $4{,}350{,}000-750{,}000=3{,}600{,}000$; 30-year life → 120,000 a year; 4 years old → value $4{,}350{,}000-480{,}000=$ **EUR3,870,000**.

### Sales Comparison approach

* Use recent sales of comparables; unit of comparison usually **price per m²/ft²** (also price to rent or revenue)
* Adjust for sale date (older sale in a rising market → adjust **up**), size (larger → discount), location (farther from centre → comparable worth less → adjust up), age (newer comparable → adjust subject **down**)
* Average the adjusted unit prices × subject size; more recent sales carry more weight

**Textbook example (Pinebranch, 288,000 ft²):** adjusted price/ft² 89.27, 104.23, 103.60 → average **AUD99.03** → value ≈ **AUD28.52 million** (table 28,520,640 using 99.03; text 28,521,036 using the unrounded average).

| Approach | Most used for |
| --- | --- |
| Income | Large commercial properties with few comparable sales, where income drives the decision |
| Sales comparison | Markets with many similar transactions (single-family homes); appraisers weight it heavily |
| Cost | Check on value; new or special-purpose property |

## Real Estate Indexes

Private market indexes (appraisal- or transaction-based) are generally **not investable**; public indexes (REITs, MBS, covered bonds) usually are (via funds, ETFs, UCITS).

### Appraisal-based indexes

Example: GREFI (NCREIF + INREV + ANREV), quarterly, cap-weighted.

$$
HPR=\frac{NOI-\text{Capital expenditures}+(MV_{end}-MV_{begin})}{MV_{begin}}
$$

Equivalent to a single-period IRR using appraised values.

**Textbook example (Wallonia):** bought at 3,750,000 two years ago; INREV returns +5.6% then +3.2% → $MV_{begin}=3{,}960{,}000$, $MV_{end}=4{,}086{,}720$; NOI 406,750, capex 100,000:

$$
HPR=\frac{406{,}750-100{,}000+(4{,}086{,}720-3{,}960{,}000)}{3{,}960{,}000}=10.95\%
$$

Drawback: the income component (NOI − capex) is **not** what fund or REIT investors receive as distributions.

**Appraisal lag**

* Appraisals lag transaction prices in both **rising and falling** markets, and not all properties are appraised every quarter
* Result: **smoothed** index → **underestimated** volatility, **lower** correlation with other assets, **overstated** Sharpe ratio → overallocation to private real estate
* Less of a problem when comparing managers who all use appraisals; a real problem when comparing with traded assets
* Fixes: **unsmooth** the index, or use a **transaction-based** index

**Unsmoothing** (appraised return $R_t^*$ is a weighted average of the true return and last period's appraised return):

$$
R_t^*=aR_t+(1-a)R_{t-1}^*\quad\Rightarrow\quad R_t=\frac{R_t^*}{a}+\left(\frac{1-a}{a}\right)R_{t-1}^*,\qquad 0\le a\le 1
$$

Higher $a$ = faster adjustment. **Textbook example** ($a=0.6$): $R_1^*=0.50\%$, $R_0^*=2.70\%$ → $R_1=0.50/0.6+(0.4/0.6)\times2.70=$ **2.63%**; period 6: $-8.70/0.6+(0.4/0.6)\times1.00=$ **−13.83%**. Unsmoothed returns are more volatile.

### Transaction-based indexes

* **Repeat sales index**: uses properties that sold at least **twice**; regression allocates value change to each period (e.g., RCA CPPI). One-time sales are not used; more reliable with more transactions
* **Hedonic index**: no repeat sales needed; regression controls for size, age, quality, location; data hungry, most reliable at national level
* Lead appraisal indexes but add statistical **noise** quarter to quarter; correct over the long term

### Other indexes

* **REIT indexes** (public equity): e.g., float-adjusted market value weights skew an Asia-Pacific REIT index toward the largest markets (e.g., Singapore)
* **MBS indexes**: prepayment risk (contraction when rates fall, extension when rates rise → effective duration lengthens), most prevalent in the US
* **Covered bond indexes**: dual recourse + prepayment penalties → stable, low-risk returns (Denmark is the largest market)

## Quick Recall

* NOI = EGI − opex − maintenance allowance; DSC = NOI / debt service; LTV = debt / value; equity dividend rate = (NOI − debt service) / equity.
* After-tax CF = pre-tax CF − $t$(NOI − interest − depreciation); land is not depreciated.
* NOI and DSC peak in oversupply, bottom in recovery; LTV the reverse.
* Value = NOI₁ / cap rate, cap rate = $r-g$; DCF with TV = NOI$_n(1+g)/(r-g)$; going-in vs terminal cap rate.
* Cost approach: land + construction + profit − depreciation. Sales comparison: adjust price/ft² for date, size, location, age.
* Appraisal indexes lag and smooth → understate volatility and correlation, overstate Sharpe; unsmooth with $R_t=R_t^*/a+\frac{1-a}{a}R_{t-1}^*$.
* Repeat sales = same property sold twice; hedonic = regression on characteristics.
