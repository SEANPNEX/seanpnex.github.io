# Real Estate

The features of real estate that matter for valuation (NOI, leverage, coverage, pretax and after-tax returns); how properties are classified; economic value drivers and the real estate cycle; each commercial property type; due diligence; the three valuation approaches (income, cost, sales comparison); and real estate indexes and their biases. Most examples follow three properties: **Wallonia Transit** (a single-tenant warehouse), **Pinebranch Estates** (multi-family) and **Eastmain Plaza** (mixed-use). (2026 title: *Overview of Types of Real Estate Investment*.)

| Term | Meaning |
| --- | --- |
| **NOI** | Effective gross income − operating expenses − property maintenance allowance (before financing and income tax) |
| **Property maintenance allowance** | Capex needed to **maintain** current income (not upgrades that change the property's use) |
| **GPRI** | Gross potential rental income = market rent × rentable space (full occupancy) |
| **Loss to lease** | GPRI − gross rental income (market rent vs current leases) |
| **LTV** | Mortgage debt outstanding ÷ current property value |
| **DSC** | NOI ÷ debt service (interest **and** principal) |
| **Cap rate** | Expected NOI ÷ property value $= r-g$ |
| **Going-in / terminal cap rate** | The cap rate on first-year NOI / on NOI after the expected sale |
| **Stabilized NOI** | Normalized NOI used in direct capitalization when NOI is expected to change |
| **Rollover risk** | The risk of losing a tenant, and its income, when a lease expires |

## Investment Features

Real estate ranges from **core** (stable income, bond-like) to **opportunistic** (development, equity-like). What drives its value and tradability: its current and potential **economic use**, its expected **net cash flows**, and its **capital structure**.

### Net Operating Income

$$
\begin{aligned}
NOI={}&\text{Effective gross income}\\
&-\text{Operating expenses}\\
&-\text{Maintenance allowance}
\end{aligned}
$$

* Gross rent = base rent per unit of area × rentable area.
* Effective gross income = gross rent + other revenue (expense recoveries, pass-throughs, parking) − vacancies and concessions.
* Operating expenses are fixed (taxes, insurance, servicing, repairs) or variable (utilities), borne by the owner or passed through to tenants.
* The maintenance allowance is common in Europe and North America, less so in, e.g., Japan.

#### Example: Wallonia Transit NOI

A 10,000 m² warehouse with one tenant (EUR).

| Input | Value |
| --- | ---: |
| Base rent | 52.50 per m² |
| Recovery of servicing and repairs (fixed) | 10.25 per m² |
| Servicing and repairs, paid by the owner | 120,750 |
| Property tax, passed through to the tenant | 12,500 |
| Insurance, passed through to the tenant | 40,000 |
| Maintenance allowance | 100,000 |

**Step 1. NOI.**

| Wallonia Transit | EUR |
| --- | ---: |
| Gross rent (52.50 × 10,000) | 525,000 |
| Operating expense recovery (10.25 × 10,000) | 102,500 |
| Pass-through property tax + insurance | 52,500 |
| **Effective gross income** | **680,000** |
| Operating expenses (120,750 + 12,500 + 40,000) | (173,250) |
| Property maintenance allowance | (100,000) |
| **NOI** | **406,750** |

**Step 2. Sensitivities.**

* Servicing and repairs run 20% over (144,900): the extra 24,150 is **not** recovered (the recovery is fixed at 102,500) → NOI **382,600**.
* 10% vacancy (if it had several tenants): deduct 10% of gross rent, 52,500 → NOI **354,250**.

NOI is **EUR406,750**. Only lower servicing and repair costs raise it; taxes and insurance are fully passed through.

### Leverage and Coverage

$$
LTV=\frac{\text{Mortgage debt outstanding}}{\text{Current property value}}
$$

$$
DSC=\frac{\text{NOI}}{\text{Debt service}}
$$

* A lower LTV means more owner equity. LTV changes as values move and principal is repaid.
* Debt service = **interest + principal**. Lenders set LTV and DSC limits in covenants.

#### Example: Wallonia Leverage and Coverage

| Input | EUR |
| --- | ---: |
| Price | 3,750,000 |
| Loan (20-year, fully amortizing, 4%) | 3,000,000 |
| Annual payment | 220,745 |
| Interest in year 1 | 120,000 |
| NOI | 406,750 |

**Step 1. Loan balance after year 1.**

$$
\begin{aligned}
\text{Principal}&=220{,}745-120{,}000\\
&=100{,}745\\
\text{Balance}&=3{,}000{,}000-100{,}745\\
&=2{,}899{,}255
\end{aligned}
$$

**Step 2. LTV**, now and if the value rises 10%.

$$
\begin{aligned}
LTV&=\frac{2{,}899{,}255}{3{,}750{,}000}=0.773\\
LTV_{+10\%}&=\frac{2{,}899{,}255}{4{,}125{,}000}=0.703
\end{aligned}
$$

**Step 3. DSC**, with NOI of 406,750 and of 382,600.

$$
\begin{aligned}
DSC&=\frac{406{,}750}{220{,}745}=1.84\\
DSC_{\text{low}}&=\frac{382{,}600}{220{,}745}=1.73
\end{aligned}
$$

LTV is **0.773** and DSC **1.84**.

### Equity Returns

$$
EDR=\frac{NOI-\text{Debt service}}{\text{Price}-\text{Loan}}
$$

EDR is the equity dividend rate; the numerator is the pretax cash flow, and the denominator the equity invested. It's a first-year, cash-only, pretax measure that ignores capital gains and losses.

$$
\text{After-tax CF}=\text{Pretax CF}-\text{Taxes}
$$

$$
\begin{aligned}
\text{Taxes}={}&t\times(NOI-\text{Interest}\\
&-\text{Depreciation})
\end{aligned}
$$

The depreciable base is the cost (plus improvements) minus **land**: land isn't depreciated.

#### Example: Wallonia Equity Returns

The loan above; land is worth 750,000, the building has a 30-year life, and the tax rate is 25%.

**Step 1. EDR.** Equity invested = 3,750,000 − 3,000,000 = 750,000.

$$
\begin{aligned}
EDR&=\frac{406{,}750-220{,}745}{750{,}000}\\
&=\frac{186{,}005}{750{,}000}=24.8\%
\end{aligned}
$$

With NOI of 382,600: 161,855/750,000 = 21.6%.

**Step 2. Taxes.**

$$
\begin{aligned}
\text{Dep.}&=\frac{3{,}750{,}000-750{,}000}{30}\\
&=100{,}000\\
\text{Taxable}&=406{,}750-120{,}000\\
&\quad-100{,}000=186{,}750\\
\text{Taxes}&=0.25\times 186{,}750=46{,}688
\end{aligned}
$$

**Step 3. After-tax cash flow.**

$$
\begin{aligned}
\text{After-tax CF}&=186{,}005-46{,}688\\
&=139{,}317
\end{aligned}
$$

EDR is **24.8%**, and the after-tax cash flow **EUR139,317**.

> [!IMPORTANT]
> Same price and NOI, but a **lower land value** → a larger depreciable base → more depreciation → less tax → a **higher** after-tax cash flow.

## Classification

* **GICS**: **REITs** (diversified, industrial, hotel and resort, office, health care, residential, retail, specialized) and **real estate management and development** (diversified activities, real estate operating companies, development, services). Mortgages and other real estate debt are classified as financial-industry fixed income.
* **Sensitivity to the business cycle**: defensive (e.g., health care REITs, as medical demand is stable) vs cyclical (e.g., industrial and office REITs).
* **Property classes**, by location, age, local incomes, recent appreciation and condition. For multi-family:

| Class | Features |
| --- | --- |
| A | Built in the last 10 years, or substantially renovated; top amenities; best materials |
| B | Within 20 years, or renovated; dated amenities; good quality, little deferred maintenance |
| C | Within 30 years, or renovated; limited, dated amenities; deferred maintenance |
| D | Over 30 years old, in a less desirable location; no amenities; poor condition |

* Higher classes command the highest rents and prices, but have **less** room for appreciation; lower classes are cheaper with more appreciation potential (they may need capex and better local conditions).
* Sustainability certifications, **BREEAM** (UK and Europe) and **LEED** (US; the most recognized globally), raise construction costs but can lower operating costs, raise rents, lower vacancy and bring tax incentives.
* Machine learning on large datasets can help predict home prices, but models struggle when the cycle turns (see Zillow, below).

## Forms of Real Estate Investment

| | Debt | Equity |
| --- | --- | --- |
| **Private** | Mortgages; construction loans; mezzanine debt | **Direct**: sole ownership, joint ventures, limited partnerships. **Indirect**: real estate funds, private REITs |
| **Public** | MBS, CMBS, CMOs; covered bonds; mortgage REITs; mortgage ETFs | Shares of construction, operating or development companies; public REITs; UCITS, mutual funds, ETFs |

* **Real estate operating companies** are taxable corporations with few restrictions. **REITs** mainly own and operate rental property or buy mortgages, and distribute nearly all earnings to avoid corporate tax. REITs exist in 30+ countries (corporations in the US and Europe; externally managed trusts in Australia; China launched infrastructure REITs in 2021 and rental housing REITs in 2022).
* A REIT performance measure: FFO = net income + depreciation + amortization − net gains on property sales (more in M3).
* Property loans are long-term, secured first liens, at floating, fixed or adjustable rates. US and Japanese mortgage investors face **prepayment risk**.
* **Covered bonds**: the loans stay on the bank's balance sheet, with **dual recourse** (bank + pool) and replacement of bad collateral → lower risk and return. **MBS**: the pool moves to a special purpose entity, with tranches of different prepayment exposure.

| Strategy, from lowest to highest risk and return | Characteristics |
| --- | --- |
| Senior debt | First mortgages; debt-like, mostly public |
| Core | Stable income-producing properties |
| Core-plus | Some refurbishment; fairly stable cash flows |
| Value-add | Vacant space, upgrades and repositioning |
| Opportunistic | New development; equity-like returns, mostly private |

## Risks

* **Economic and competitive**: the level and type of economic activity, demographics, relative supply, and the cost and availability of capital → rents, occupancy and prices.
* **Property-specific**: management (maintenance, tenants and leases), obsolescence and technological change, environmental factors (energy-efficiency rules, floods, earthquakes, hurricanes), zoning.
* **Model risk**: overreliance on statistical or ML price models. Zillow Offers (2021) bought homes using a valuation algorithm, couldn't cope with price volatility, and lost about USD1 billion.

## The Real Estate Cycle

**Economic drivers.**

* GDP growth, job creation and wage growth → demand for commercial space and **household formation**.
* Interest rates and credit: real estate is heavily debt-financed, so very rate-sensitive. Low mortgage rates and low house-price-to-income ratios favor **owning** homes over renting multi-family.
* Long construction lags: new supply often arrives after conditions have changed.
* Local factors: business climate, major employers, infrastructure, taxes, zoning, transport links, schools and safety; declining industries or population hurt values.

| | Recovery | Expansion | Oversupply | Recession |
| --- | --- | --- | --- | --- |
| Economy | Business cycle trough | Growth, higher wages and confidence | Growth softens | Slowdown |
| Credit | Tight | Easing | | Tightening |
| Construction | Little or none | New construction and upgrades begin | **Pipeline completes** → property **glut** | Starts at lows |
| Market | Households delay formation; **falling** occupancy; owners cut leases; lower prices and rents | **Rising** occupancy, lease rates, rents and prices | **Falling** occupancy and rents; prices level off, then decline | **Accelerating** fall in occupancy; prices fall; landlords offer favorable terms |

| Phase | Interest rates | NOI | DSC | LTV |
| --- | --- | --- | --- | --- |
| **Recovery** | Bottom, then rising | Bottom, then rising | Bottom, then rising | **Peaks**, then falls |
| **Expansion** | Rising | Rising | Rising | Falling |
| **Oversupply** | Peak, then falling | **Peaks**, then falls | **Peaks**, then falls | **Bottoms**, then rises |
| **Recession** | Low | Falling | Falling | Rising |

> [!IMPORTANT]
> NOI and DSC **peak in oversupply** and bottom in recovery; LTV is the mirror image (peaks in recovery, bottoms in oversupply). Replacement cost exceeds the market price in the **oversupply** phase.

## Role in a Portfolio

Real estate offers current income, capital appreciation, an inflation hedge, diversification and tax benefits.

* **Current income**: lease terms often differ from a fixed rent.
  * **Step-up clauses**: pre-set future rent increases (not contingent, unlike bond step-ups).
  * **Indexed rents**: change with a market variable such as CPI.
  * **Overage rent**: extra rent when a retailer's sales exceed a target (breakeven) level.
  * Expenses: the owner pays all of them, passes some through, or charges increases above a limit; plus common-area charges.
* **Capital appreciation**: measured precisely only when a property sells.
* **Inflation hedge**: rents and prices tend to rise with inflation → a real return over time.
* **Diversification**: low correlation with stocks, bonds and cash; but **public** real estate (REITs, MBS) is more correlated with stocks and bonds in the short to medium term.
* **Tax benefits**: tax depreciation faster than the useful life (e.g., in the US); REITs avoid double taxation.

$$
\begin{aligned}
\text{Rent}={}&\text{Base rent}\times\text{Area}\\
&+\text{Overage rate}\\
&\times(\text{Sales}-\text{Breakeven})
\end{aligned}
$$

#### Example: Chandra Shops Overage Rent

A 500 ft² store with monthly sales of INR1,250,000.

| | Old lease | New lease |
| --- | --- | --- |
| Base rent per ft² a month | INR300 | INR270 (−10%) |
| Overage | None | 8% of sales above INR1,000,000 |

**Step 1. Rent under the new lease.**

$$
\begin{aligned}
\text{Base}&=270\times 500=135{,}000\\
\text{Overage}&=0.08\times 250{,}000\\
&=20{,}000\\
\text{Rent}&=135{,}000+20{,}000\\
&=155{,}000
\end{aligned}
$$

**Step 2. Compare.** The old lease costs 300 × 500 = 150,000.

The new lease costs **INR155,000** a month, 5,000 more. A 9.6% cut with 5.6% overage would cost 135,600 + 14,000 = 149,600, which Chandra would prefer.

## Commercial Property Types

The aim is to earn **rental income**.

* **Residential**: single-family homes (mostly owner-occupied) and **multi-family** properties (most residential commercial real estate), grouped by location, height and amenities. Demand depends on incomes, jobs, local conditions and the affordability of owning. Tenants may be protected (limits on rent increases or evictions), and leases are much **shorter** than for non-residential property.
* **Non-residential** property is tied more closely to an industry's use, so more exposed to **structural** change:
  * **Office**: lower development risk when built for key tenants (e.g., medical offices near a hospital) or when an anchor tenant commits to much of the space. Remote and hybrid work have cut demand.
  * **Industrial and warehouse**: e-commerce raised demand structurally. Often designed for a specific use and **hard to convert** (the least likely to be converted), though well-located ones are adapted.
  * **Retail**: regional malls with anchors, local centers, standalone stores. Online shopping has cut mall demand, driving conversions; nearness to workers and residents drives rents, occupancy and prices.
  * **Hospitality**: business-travel hotels are **cyclical**; small motels for people in transit less so; tourist hotels depend on consumer confidence and disposable income; destination resorts are management-intensive with high fixed costs.
  * **Other**: student and senior housing (senior demand is rising with aging, but so is competition); self-storage (low capex and operating costs, **month-to-month** leases → pricing flexibility but exposure to demand); hospitals, cell towers, data centers, parking.
  * **Mixed-use**: combines tenant types (e.g., office + retail): diversified income, but tied to the local economy and correlated, because the office tenants are often the retailers' customers.

### Cash Flow Analysis

$$
GPRI=\text{Market rent}\times\text{Space}
$$

$$
GRI=\text{Current rent}\times\text{Space}
$$

* **Loss to lease** = GPRI − GRI. Positive: current leases are **below** market rent. Negative: they are above it (e.g., excess supply and falling market rents).
* Net rental income = GRI − vacancy and collection losses − concessions and adjustments.
* Total (effective gross) income = net rental income + other income + expense recoveries.
* NOI = total income − operating and leasing expenses − maintenance allowance.

#### Example: Pinebranch Estates NOI

240 units of 1,200 ft²; the market rent is AUD2.00/ft² a month; the owner pays taxes and insurance.

**Step 1. Gross potential rental income.**

$$
\begin{aligned}
GPRI&=240\times 1{,}200\times 2.00\times 12\\
&=6{,}912{,}000
\end{aligned}
$$

**Step 2. From GPRI to NOI.**

| Pinebranch Estates | AUD |
| --- | ---: |
| Gross potential rental income | 6,912,000 |
| Less: loss to lease | (128,200) |
| **Gross rental income** | 6,783,800 |
| Less: vacancy and collection loss | (791,236) |
| Less: concessions and adjustments | (485,124) |
| **Net rental income** | 5,507,440 |
| Add: other income | 295,211 |
| Add: expense recoveries from tenants | 525,800 |
| **Total income** | 6,327,651 |
| Less: operating and leasing expenses | (2,753,000) |
| Less: maintenance allowance | (655,000) |
| **NOI** | **2,919,651** |

NOI is **AUD2,919,651**. Unlike Wallonia, many tenants and short leases make the rental deductions much more important.

#### Example: Eastmain Plaza Downside Scenario

A 350,000 ft² mixed-use property; current NOI is MYR13,085,217.

| Space | Share | Rent per ft² |
| --- | ---: | ---: |
| Office | 90% | MYR100 |
| Retail | 10% | MYR250 |

**Step 1. Gross rent.**

$$
\begin{aligned}
\text{Office}&=0.9\times 100\times 350{,}000\\
&=31{,}500{,}000\\
\text{Retail}&=0.1\times 250\times 350{,}000\\
&=8{,}750{,}000\\
\text{Total}&=40{,}250{,}000
\end{aligned}
$$

**Step 2. Downside.** New retail nearby costs the overage rent (450,800) and half of the retail rent (4,375,000).

$$
\begin{aligned}
\text{Loss}&=450{,}800+4{,}375{,}000\\
&=4{,}825{,}800\\
NOI&=13{,}085{,}217-4{,}825{,}800\\
&=8{,}259{,}417
\end{aligned}
$$

NOI falls 37%, to **MYR8,259,417**.

#### Practice: GPRI to NOI

In GBP; from earlier notes, not the 2026 textbook.

| Item | GBP |
| --- | --- |
| Gross potential rental income | 5,672,000 |
| Less: loss to lease | (116,500) |
| **Gross rental income** | 5,555,500 |
| Less: vacancy and collection loss | (342,600) |
| Less: concessions and adjustments | (281,000) |
| Add: other income | 134,710 |
| Add: expense recoveries from tenants | 610,300 |
| **Effective gross income** | 5,676,910 |
| Less: operating and leasing expenses | (3,704,510) |
| Less: maintenance allowance | (456,000) |
| **NOI** | **1,516,400** |

## Due Diligence

Real estate is less transparent and standardized than public securities, so due diligence is more detailed:

* **Market review**: macro and local conditions; offer vs actual sale prices (prefer actual sales); environmental exposure (wildfires, floods → insurance); the cost of meeting energy standards.
* **Current leases**: rents vs market, vacancies, lease lengths, the expiry schedule, payment history and tenants' credit.
* **Future leasing**: renewal and re-leasing costs (broker commissions, downtime, free rent, improvement allowances, usually capitalized and amortized over the lease); local supply; legal changes (Berlin's 2020 rent cap cut rents 11%, but the supply of covered units fell about 59%; it was struck down the next year).
* **Financial review**: several years of audited statements and operating bills; check whether NOI was inflated by underinvesting in maintenance or by heavy tenant incentives.
* **Documents**: legal and tax review of title, no liens or tax obligations, zoning and environmental compliance. It matters for the purchase but is the **least likely** to feed the NOI forecast.
* **Inspection and service agreements**: survey; physical, engineering and environmental inspection; assess the property manager; review service contracts.

Discrepancies lead to fixes, a lower price, or walking away.

## Valuation

### Income Approach: Direct Capitalization

$$
\text{Property value}=\frac{\text{Expected NOI}}{\text{Cap rate}}
$$

$$
\text{Cap rate}=r-g=\frac{\text{Expected NOI}}{\text{Property value}}
$$

* $r$ = the risk-free rate + a property-specific risk premium. A higher $r$ (higher benchmark rates, a riskier property, oversupply) → lower value; faster NOI growth (higher $g$) → a lower cap rate → higher value. $g$ < 0 suggests a property near the end of its useful life.
* Cap rates usually come from comparable sales; they compare with a bond's current yield, or the inverse of EV/EBITDA.
* Best when NOI is **stable**; otherwise use **stabilized NOI**.

#### Example: Wallonia Direct Capitalization

$r$ = 12.5% and $g$ = 2%; NOI is 406,750 (382,600 with the cost overrun).

$$
\begin{aligned}
\text{Cap rate}&=12.5\%-2\%=10.5\%\\
V&=\frac{406{,}750}{0.105}=3{,}873{,}810\\
V_{\text{low}}&=\frac{382{,}600}{0.105}=3{,}643{,}810
\end{aligned}
$$

The value is **EUR3,873,810**. The cost overrun would cut it by 6%: include it only if it will recur.

### Income Approach: DCF

$$
\text{Value}=\sum_{i=1}^{n}\frac{NOI_{i}}{(1+r)^i}+\frac{TV}{(1+r)^n}
$$

$$
TV=\frac{NOI_n(1+g)}{r-g}
$$

Better when the analyst can see how NOI will change. The terminal value can also come from capitalizing comparable properties' NOI.

#### Example: Eastmain DCF

A 5-year hold; $r$ = 14%, and NOI grows at $g$ = 3% after year 5 (MYR).

**Step 1. PV of NOI.**

| Year | NOI | PV at 14% |
| ---: | ---: | ---: |
| 1 | 8,259,417 | 7,245,103 |
| 2 | 6,092,385 | 4,687,892 |
| 3 | 13,539,114 | 9,138,516 |
| 4 | 14,020,153 | 8,301,056 |
| 5 | 14,515,622 | 7,538,959 |
| **Total** | | **36,911,526** |

**Step 2. Terminal value.**

$$
\begin{aligned}
TV&=\frac{14{,}515{,}622\times 1.03}{0.14-0.03}\\
&=135{,}919{,}006
\end{aligned}
$$

**Step 3. Value.**

$$
\begin{aligned}
V&=36{,}911{,}526+\frac{135{,}919{,}006}{1.14^5}\\
&=36{,}911{,}526+70{,}592{,}073\\
&=107{,}503{,}599
\end{aligned}
$$

**Step 4. Cap rates.**

$$
\begin{aligned}
\text{Going-in}&=\frac{8{,}259{,}417}{107{,}503{,}599}=7.68\%\\
\text{Terminal}&=14\%-3\%=11\%
\end{aligned}
$$

The value is **MYR107,503,599**. The going-in cap rate is below the terminal one because NOI in years 1–2 is depressed by the downside scenario (the risk, $r$, is the same in every year).

### Cost Approach

$$
\begin{aligned}
\text{Value}={}&\text{Replacement cost}\\
&-\text{Depreciation}\\
&-\text{Other adjustments}
\end{aligned}
$$

* Replacement cost = land + construction + developer profit: the cost of buying land and building a property with the **same economic use**, including soft costs, financing and **developer profit**.
* Adjust down for age, a less ideal location, or the infeasibility of building it today (codes, historical protection); the adjustments can be larger or smaller than accounting depreciation.
* An investor shouldn't pay more than the cost to build a comparable property; replacement cost exceeds market prices in **oversupply**.

#### Example: Wallonia Cost Approach

| Input | EUR |
| --- | ---: |
| Hard costs | 2,675,000 |
| Soft costs, interest and developer profit | 925,000 |
| Land | 750,000 |
| Useful life | 30 years |
| Age | 4 years |

**Step 1. Replacement cost.**

$$
\begin{aligned}
RC&=2{,}675{,}000+925{,}000\\
&\quad+750{,}000=4{,}350{,}000
\end{aligned}
$$

**Step 2. Depreciation** (land isn't depreciated).

$$
\begin{aligned}
\text{Annual}&=\frac{4{,}350{,}000-750{,}000}{30}\\
&=120{,}000\\
\text{4 years}&=4\times 120{,}000=480{,}000
\end{aligned}
$$

**Step 3. Value.**

$$
V=4{,}350{,}000-480{,}000=3{,}870{,}000
$$

The value is **EUR3,870,000**.

### Sales Comparison Approach

* Use recent sales of comparable properties; the unit of comparison is usually **price per m² or ft²** (or price to rent or revenue).
* Adjust for the sale date (an older sale in a rising market → adjust **up**), size (larger → discount), location (a comparable farther from the center is worth less → adjust up) and age (a newer comparable → adjust the subject **down**).
* Average the adjusted unit prices × the subject's size; more recent sales carry more weight.

#### Example: Pinebranch Sales Comparison

The subject has 288,000 ft²; the three comparables' adjusted prices are AUD89.27, 104.23 and 103.60 per ft².

$$
\begin{aligned}
\text{Average}&=\frac{89.27+104.23+103.60}{3}\\
&=99.03\\
V&=99.03\times 288{,}000\\
&=28{,}520{,}640
\end{aligned}
$$

The value is about **AUD28.52 million** (28,521,036 with the unrounded adjusted prices).

| Approach | Most used for |
| --- | --- |
| Income | Large commercial properties with few comparable sales, where income drives the decision |
| Sales comparison | Markets with many similar transactions (single-family homes); appraisers weight it heavily |
| Cost | A check on value; new or special-purpose properties |

## Real Estate Indexes

Private-market indexes (appraisal- or transaction-based) are generally **not investable**; public ones (REITs, MBS, covered bonds) usually are, through funds, ETFs or UCITS.

### Appraisal-Based Indexes

E.g., GREFI (NCREIF + INREV + ANREV): quarterly, cap-weighted.

$$
HPR=\frac{NOI-\text{Capex}+\Delta MV}{MV_{\text{begin}}}
$$

where $\Delta MV=MV_{\text{end}}-MV_{\text{begin}}$, the change in appraised market value. This equals a single-period IRR using appraised values.

#### Example: Wallonia Appraisal-Based Return

| Input | EUR |
| --- | ---: |
| Purchase price two years ago | 3,750,000 |
| INREV return, year 1 / year 2 | +5.6% / +3.2% |
| NOI | 406,750 |
| Capex | 100,000 |

**Step 1. Appraised values** at the start and end of year 2.

$$
\begin{aligned}
MV_{\text{begin}}&=3{,}750{,}000\times 1.056\\
&=3{,}960{,}000\\
MV_{\text{end}}&=3{,}960{,}000\times 1.032\\
&=4{,}086{,}720
\end{aligned}
$$

**Step 2. HPR.**

$$
\begin{aligned}
\text{Income}&=406{,}750-100{,}000\\
&=306{,}750\\
\Delta MV&=4{,}086{,}720-3{,}960{,}000\\
&=126{,}720\\
HPR&=\frac{306{,}750+126{,}720}{3{,}960{,}000}\\
&=10.95\%
\end{aligned}
$$

The holding period return is **10.95%**.

A drawback: the income component (NOI − capex) is **not** what fund or REIT investors receive as distributions.

**Appraisal lag.**

* Appraisals lag transaction prices in both **rising and falling** markets, and not every property is appraised every quarter.
* The result is a **smoothed** index → **underestimated** volatility, **lower** correlation with other assets, and an **overstated** Sharpe ratio → overallocation to private real estate.
* It matters less when comparing managers who all use appraisals, and a lot when comparing with traded assets.
* Fixes: **unsmooth** the index, or use a **transaction-based** index.

**Unsmoothing.** The appraised return $R_t^*$ is a weighted average of the true return and last period's appraised return:

$$
R_t^*=aR_t+(1-a)R_{t-1}^*
$$

$$
R_t=\frac{R_t^*-(1-a)\,R_{t-1}^*}{a}
$$

with $0\le a\le 1$; a higher $a$ means faster adjustment.

#### Example: Unsmoothing Appraisal Returns

$a$ = 0.6.

| Period | Appraised $R_t^*$ | Prior $R_{t-1}^*$ |
| ---: | ---: | ---: |
| 1 | 0.50% | 2.70% |
| 6 | −8.70% | 1.00% |

$$
\begin{aligned}
R_1&=\frac{0.50-0.4\times 2.70}{0.6}\\
&=\frac{-0.58}{0.6}=-0.97\%\\
R_6&=\frac{-8.70-0.4\times 1.00}{0.6}\\
&=\frac{-9.10}{0.6}=-15.17\%
\end{aligned}
$$

The true returns, **−0.97%** and **−15.17%**, are more extreme than the appraised ones: unsmoothed returns are more volatile.

### Transaction-Based Indexes

* **Repeat sales index**: uses properties sold at least **twice**; a regression allocates the value change to each period (e.g., RCA CPPI). One-time sales aren't used; it's more reliable with more transactions.
* **Hedonic index**: no repeat sales needed; a regression controls for size, age, quality and location. Data-hungry, and most reliable at the national level.
* Transaction-based indexes lead appraisal indexes, but add statistical **noise** from quarter to quarter; they're accurate over the long term.

### Other Indexes

* **REIT indexes** (public equity): float-adjusted market value weights tilt, e.g., an Asia-Pacific REIT index toward the largest markets (such as Singapore).
* **MBS indexes**: prepayment risk (contraction when rates fall, extension when they rise → effective duration lengthens); most prevalent in the US.
* **Covered bond indexes**: dual recourse and prepayment penalties → stable, low-risk returns (Denmark is the largest market).

> [!NOTE]
>
> **Textbook and note issues.**
>
> * The Wallonia pro forma table prints gross rent as 525,500, but the calculation (and the 680,000 total) use 525,000.
> * Pinebranch: 5,507,440 + 295,211 + 525,800 = 6,328,451, not the 6,327,651 printed (recoveries of 525,000 would match); the NOI of 2,919,651 follows the printed total.
> * Unsmoothing: earlier versions of these notes **added** the lag term ($R_t^*/a+\frac{1-a}{a}R_{t-1}^*$), giving 2.63% and −13.83%. Solving $R_t^*=aR_t+(1-a)R_{t-1}^*$ for $R_t$ **subtracts** it.
