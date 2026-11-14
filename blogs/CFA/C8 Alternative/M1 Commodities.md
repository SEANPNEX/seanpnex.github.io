# Commodities

This module (2026 title: *Introduction to Commodities and Commodity Derivatives*) covers commodity sectors and their life cycles, how commodity valuation differs from stocks and bonds, who trades commodity futures, the spot–futures relationship (contango vs backwardation), the three theories of futures returns, the components of a fully collateralized futures return, commodity swaps, and how index construction drives index returns.

* [Learning Outcomes and Key Terms](#learning-outcomes-and-key-terms)
* [Basics of Commodities](#basics-of-commodities): sectors, life cycle, valuation vs stocks/bonds, participants
* [Spot and Futures Pricing](#spot-and-futures-pricing): basis, calendar spread, contango/backwardation, settlement
* [Theories of Futures Returns](#theories-of-futures-returns): insurance, hedging pressure, storage
* [Components of Futures Returns](#components-of-futures-returns): price, roll, collateral (+ rebalance)
* [Contango, Backwardation and the Roll Return](#contango-backwardation-and-the-roll-return)
* [Commodity Swaps](#commodity-swaps): excess return, total return, basis, variance/volatility
* [Commodity Indexes](#commodity-indexes): breadth, weighting, roll, rebalancing, governance
* [Quick Recall](#quick-recall)

## Learning Outcomes and Key Terms

The candidate should be able to:

* Compare characteristics of commodity sectors
* Compare the life cycle of commodity sectors from production through trading or consumption
* Contrast the valuation of commodities with the valuation of equities and bonds
* Describe types of participants in commodity futures markets
* Analyze the relationship between spot prices and futures prices in markets in contango and markets in backwardation
* Compare theories of commodity futures returns
* Describe, calculate, and interpret the components of total return for a fully collateralized commodity futures contract
* Contrast roll return in markets in contango and markets in backwardation
* Describe how commodity swaps are used to obtain or modify exposure to commodities
* Describe how the construction of commodity indexes affects index returns

| Term | Meaning |
| --- | --- |
| **Basis** | Spot price − futures price |
| **Calendar spread** | Near-term futures price − longer-term futures price (same commodity) |
| **Backwardation** | Spot > futures (or near > far); positive basis and calendar spread |
| **Contango** | Spot < futures (or near < far); negative basis and calendar spread |
| **Convenience yield** | Benefit of holding physical inventory as a buffer against supply disruption; **high when inventories are scarce** |
| **Roll return** | Accounting gain/loss from closing the expiring contract and opening a later one |
| **Collateral return** | Interest earned on the cash/T-bills held against the futures position |
| **Fully collateralized** | Collateral = notional value of the futures → no leverage |

## Basics of Commodities

### Sectors

The textbook uses the Bloomberg Commodity Index split into six sectors:

* **Energy**: crude oil, natural gas, coal, and refined products (gasoline, heating oil)
* **Industrial/Base metals**: copper, aluminum, nickel, zinc, lead, tin, and iron
* **Precious metals**: gold, silver, and platinum (monetary stores of value plus industrial use)
* **Grains**: corn, soy, wheat, and rice (food, feed, and biofuel such as ethanol)
* **Softs (cash crops)**: cotton, cocoa, sugar, and coffee
* **Livestock**: hogs, cattle, sheep, and poultry

Fundamental analysis frames each sector as **stocks** (potential supply/demand: fields, farmland, herd size, smelter capacity) and **flows** (utilization of that stock: weather, pipelines, disease, policy, GDP growth), plus timing (seasonality, logistics, shocks) and money flow (sentiment, interest rates, subsidies).

| **Primary influences** (textbook Exhibit 1) | **Energy** | **Base metals** | **Precious metals** | **Grains** | **Softs** | **Livestock** |
| ---------------------- | ---------- | --------------- | ------------------- | ---------- | --------- | ------------- |
| GDP size / growth      | ✓          | ✓               | ✓                   |            | ✓         | ✓             |
| Weather                | ✓          |                 |                     | ✓          | ✓         | ✓             |
| Consumer preference    |            |                 |                     | ✓          | ✓         | ✓             |
| Consumer income        |            |                 |                     |            | ✓         | ✓             |
| Population growth      |            |                 |                     | ✓          |           |               |
| Biofuel substitution   |            |                 |                     | ✓          | ✓         |               |
| Disease                |            |                 |                     | ✓          | ✓         | ✓             |
| Monetary policy / money supply |    |                 | ✓                   |            |           |               |
| Geopolitics            | ✓          |                 | ✓                   |            |           |               |
| Industrial/environmental policy, infrastructure | ✓ | ✓  |                     |            |           |               |

> [!IMPORTANT]
> Exam favourites from the examples: industrial activity drives **copper** (not natural gas, which is mainly weather; not softs, which are mainly income). Precious metals are **least** affected by short-term weather because they store easily.

### Life cycle of commodities

* The production life cycle reflects and **amplifies** changes in storage, weather, and political/economic events.
* A **short** life cycle allows relatively rapid adjustment to outside events; a **long** life cycle limits the ability of supply or demand to react.
* Agriculture and livestock have well-defined seasons that differ by region (Northern vs Southern Hemisphere); energy and metals are extracted **all year round**, with seasonality coming mostly from demand for products (gasoline in summer, heating oil in winter).

| Sector | Key life-cycle facts |
| --- | --- |
| **Energy** | Natural gas can be consumed almost immediately after extraction (summer gas often injected into storage for winter); crude oil is useless until **refined** ("cracking"). Refineries and pipelines are very costly; pipelines are more often cut off in conflicts |
| **Industrial/precious metals** | Most **flexible** life cycle: ore and metal store for months or years without spoiling. Huge economies of scale in smelting → hard to cut production when supply exceeds demand; new capacity often arrives just as demand falls |
| **Livestock** | Poultry matures in weeks, hogs in ~6 months, cattle in a few years (feeder cattle → live cattle in a feedlot). US livestock historically **least export-oriented** because of spoilage after slaughter (freezing is changing this) |
| **Grains** | Planting → growth → pod/ear/head formation → harvest; stored year round in silos; spoilage risk from mould and pests |
| **Softs** | Example: coffee is harvested somewhere all year near the Equator; robusta trades in London, arabica in New York; contracts are for unroasted "green" beans delivered to bonded warehouses |

### Valuation of commodities vs equities and bonds

| | **Stocks and bonds** | **Commodities** |
| --- | --- | --- |
| Nature | Financial assets: claims on economic output | Almost always **physical** assets (exceptions: electricity, weather) |
| Cash flows | Generate cash flows (dividends, coupons) | **No** cash flows; physical holding **incurs** storage and transport costs |
| Valuation | PV of expected future cash flows | Forecast of future prices from **supply and demand** and expected volatility |
| Main investment route | Own the security | Mostly via **derivatives** (futures, swaps) with finite lives |

Storage and transport costs shape the forward curve: high storage cost → futures prices rise with maturity; strong current demand can push spot above futures. Where some participants cannot make or take delivery, arbitrage only enforces a **range** for spot–futures differences, not an equality.

### Major participants

* **Hedgers** trade to hedge their commodity exposure. Hedging ≠ long and speculating ≠ short: a snack maker hedges by going **long** corn; a gold miner hedges by going **short** gold; an integrated oil company can speculate long; a CTA can speculate short.
* **Traders and investors**, three types:
  * **Informed investors** (hedgers and speculators, including index and institutional investors) believe they have an information advantage
  * **Liquidity providers** step in when producers and consumers are not in the market at the same time → they effectively **provide insurance to hedgers** for an expected profit
  * **Arbitrageurs** with storage capacity (warehouses, silos, feedlots) exploit mispricing between the physical commodity (plus storage and financing) and the futures price
* **Exchanges** (clearing houses) set rules and provide infrastructure: CME and ICE (US), B3 (Brazil), LME (industrial metals, owned by HKEX), Dalian, Shanghai, Tokyo.
* **Analysts** are non-market participants (researchers, product creators, policymakers, brokers who take no position).
* **Regulators**: CFTC (delegating much monitoring to the NFA) in the US; most other countries have a unified regulator (e.g., China Securities Regulatory Commission); ESMA/MiFID II in the EU; IOSCO coordinates internationally.

> [!note]
> Futures markets are **net zero** (longs = shorts), unlike stocks and bonds where investors are net long. Shorting futures is simpler than shorting stocks: no borrow, no dividend reimbursement, same margin as longs.

## Spot and Futures Pricing

* **Spot price**: current price to deliver/receive a physical commodity at a specific location; highly **localized**.
* **Futures price**: price agreed today for delivery of a standardized quantity/quality at a future date; global or regional, standardized, publicly visible.
* **Basis** = spot − futures. **Calendar spread** = near-term futures − longer-term futures.
* **Backwardation**: spot > futures (or near > far) → positive basis and calendar spread. **Contango**: spot < futures (or near < far) → negative.
* Textbook examples: WTI July $65.50 vs December $64.00 → calendar spread **+$1.50** (backwardation). Lean hogs July 95¢ vs August 96¢ → spread **−1¢** (contango).
* Curves can switch between contango and backwardation, especially in stress or structural change.

**Settlement**

* **Cash settlement** brought in more speculators and arbitrageurs and let hedgers transfer price risk without delivery.
* **Physical settlement** ensures convergence of futures and spot; cash-settled markets may not fully converge (trading costs etc.).
* Quality/variety matters: robusta cannot be delivered against arabica; some contracts apply premiums/discounts for origin or warehouse location.

## Theories of Futures Returns

### Insurance theory

Keynes's "**normal backwardation**":

* A producer is naturally long the physical good and **sells futures** to lock in revenue.
* Persistent producer selling pushes futures **below** spot; the discount is the speculator's payment for providing price insurance.
* Under this theory the curve is **backwardated** and long speculators earn a positive excess return as the futures price converges up to spot (textbook: buy October cotton at 74.50¢ with front at 76.75¢ → +2.25¢/lb, ×50,000 lb = $1,125 per contract if front prices are unchanged).
* Evidence: Kolb (1992), "normal backwardation is not normal"; backwardation does not reliably give positive returns, and contango does not reliably give negative returns.

### Hedging pressure hypothesis

Both producers (sell futures) and consumers (buy futures) hedge:

| Hedging pressure | Curve |
| --- | --- |
| Producers = consumers | **Flat**: hedging needs offset; no discount needed to attract speculators |
| Producers > consumers | **Backwardation** (consistent with Keynes): speculators go long only at a discount |
| Consumers > producers | **Contango**: buyers bid up futures to induce speculators to go short |

Limitations: producers usually have more concentrated price exposure than diffuse consumers; both sides sometimes speculate (e.g., Metallgesellschaft 1993); hedging pressure asymmetry is very hard to measure.

### Theory of storage

Kaldor (1939): inventory levels shape the curve.

$$
\text{Futures price}=\text{Spot price}+\text{Direct storage costs}-\text{Convenience yield}
$$

* Regularly stored commodity (supply dominates) → storage costs dominate → **contango**
* Just-in-time, little inventory (demand dominates) → convenience yield dominates → **backwardation**
* Convenience yield is **low when inventories are abundant** and **rises as inventories shrink** (e.g., Libya 2011: near-dated crude convenience yield jumped; deferred months barely moved → backwardation).

> [!IMPORTANT]
> Theory → predicted curve: insurance = backwardation only; hedging pressure = flat, backwardation **or** contango; storage = depends on storage cost vs convenience yield. In practice storage costs and convenience yield are unobservable or volatile, so all three need judgment.

## Components of Futures Returns

Total return on a **fully collateralized** commodity futures position:

$$
\text{Total return}=\text{Price return}+\text{Roll return}+\text{Collateral return}\ \ (+\text{Rebalance return for an index})
$$

* **Price return** (spot yield): change in futures price, usually the front month

$$
\text{Price return}=\frac{\text{Current price}-\text{Previous price}}{\text{Previous price}}
$$

* **Roll return** (roll yield): from closing the near contract and opening a farther one. It cannot be captured on its own; it is an accounting calculation

$$
\text{Roll return}=\frac{\text{Near-term futures closing price}-\text{Farther-term futures closing price}}{\text{Near-term futures closing price}}\times\%\text{ of position rolled}
$$

* **Collateral return** (collateral yield): interest on the cash/bonds backing the position. For indexes, collateral = notional (no leverage), usually T-bills; for long-horizon forecasts use a government bond with a matching term.

**Textbook example (WTI, S&P GSCI roll over five days = 20% per day):** March $52.64, April $53.00

$$
\frac{52.64-53.00}{52.64}=-0.68\%\ \text{gross}\quad\times 20\%=-0.13\%\ \text{net roll return (contango)}
$$

**Textbook example (total return):** price return 5%, roll return 2.5%, collateral 100% at 2% → total return $5\%+2.5\%+2\%=9.5\%$.

**Textbook example (rolling to keep exposure):** $10,000 long, near contract $4.00, far contract $2.50 → sell $10{,}000/4.00=2{,}500$ near contracts and buy $10{,}000/2.50=4{,}000$ far contracts.

| Curve | Far vs near | To keep the same exposure | Roll return |
| --- | --- | --- | --- |
| **Backwardation** | Far cheaper | Buy **more** far contracts (e.g., £110 at £10 → 11 contracts; at £9 → ~12) | **Positive** |
| **Contango** | Far dearer | Buy **fewer** far contracts (e.g., £108 at £9 → 12 contracts; at £10 → ~11) | **Negative** |

**S&P GSCI, Jan 1970–Mar 2019 (textbook Exhibit 12):**

| | Total | Spot | Roll | Collateral |
| --- | --- | --- | --- | --- |
| Annual return | 6.8% | 3.0% | −1.3% | 5.0% |
| Risk (st. dev.) | 19.8% | 19.8% | 4.2% | 1.1% |
| Correlation with total | | 0.97 | −0.11 | −0.14 |

* Volatility of total return comes almost entirely from the **spot (price) return**.
* Over the long run the collateral return was the largest contributor; roll return was a drag.

> [!note]
> The components (3.0 − 1.3 + 5.0 = 6.7%) don't sum exactly to the 6.8% total because the total is geometrically compounded.

**Worked example (added, not from the textbook):** near contract $80.00, far contract $78.40, 100% rolled; price return over the year +4%; T-bill 3% on full collateral.

* Roll return $=(80.00-78.40)/80.00=+2.0\%$ (backwardation)
* Total return $=4\%+2\%+3\%=9\%$

## Contango, Backwardation and the Roll Return

* Contango, backwardation and roll return reflect supply and demand expectations; periods of either **do not persist** indefinitely.
* Correlation between roll return and price return was only about **3%**: roll return is not a reliable predictor of price return.
* Ilmanen (2011) argued roll return ≈ a risk premium, but ~40% of commodities he studied had negative roll return **and** positive total return.
* Sector mean annual roll returns were **negative** for all sectors in the sample (textbook Exhibit 14: total −1.3%, energy −1.5%, industrial metals −1.3%, agriculture −4.5%, livestock −1.1%, precious metals −5.1%, softs −5.5%).
  * Stored commodities (metals, grains, livestock, softs; gold stored perpetually) tend to contango → negative roll
  * Only **energy** had a statistical chance of positive mean roll return (consumed in real time), and that has diminished since 2010 (US shale, China as top importer, OPEC+)
* Roll return can matter a lot in a **single period** but has been **modest** over time relative to price return; it is very **sector dependent**, so sector weights drive a portfolio's roll return.

## Commodity Swaps

A **commodity swap** exchanges payments over multiple dates based on commodity reference prices or indexes (often a series of futures). Benefits: risk management and transfer without managing many futures contracts, plus **customization** (specific grade or blend, changing quantities over time, cash settlement with delivery flexibility). The dealer may hedge with futures, offset with another dealer, buy physical, or keep the exposure.

| Swap | Payment driven by | Typical user |
| --- | --- | --- |
| **Excess return swap** | Change in price of the underlying futures (often vs a fixed level) × notional | Hedgers (e.g., refiner) |
| **Total return swap** | Change in index level = futures price changes **plus** interest on collateral; buyer pays a fee | Institutions wanting long commodity exposure (diversification, inflation hedge, ALM) |
| **Basis swap** | Difference between two related but imperfectly correlated reference prices (liquid vs illiquid, e.g., Brent vs Gulf heavy crude) | Users of a less liquid grade |
| **Variance swap** | Realized variance vs fixed variance; buyer receives if realized > fixed (often capped) | Volatility traders |
| **Volatility swap** | Realized volatility vs expected volatility; seller profits if realized < expected | Volatility traders |

**Textbook example (excess return swap):** a refiner goes long a swap paying the amount above $70/bbl each month-end, January–September, for a $25 premium (effectively a strip of calls). Monthly reference prices 70, 75, 71, 66, 65, 63, 66, 72, 78 → payoffs 5 + 1 + 2 + 8 = $16 → net −$9 (≈ $1/bbl per month extra cost), but the refiner was protected from a price spike and knew its cost up front.

**Textbook example (total return swap):** $100 million notional, monthly reset: index +3% → dealer pays the manager **$3 million**; index −2% → manager pays the dealer **$2 million**. Payments are periodic, not deferred to maturity.

## Commodity Indexes

Roles: benchmark, macro/forecasting indicator, basis for investment products.

Key characteristics that differentiate indexes:

* **Breadth** of coverage (number of commodities and sectors)
* Relative **weightings** and how they are set
* **Rolling methodology**: directly drives roll return
* **Rebalancing** method and frequency: drives rebalance return
* **Governance**: rules-based vs selection-based (committee); independence of asset price, index provider and product provider

| **Criteria** (as of April 2019) | **S&P GSCI** | **BCOM** | **DBLCI** | **TR/CC CRB** | **RICI** |
| --- | --- | --- | --- | --- | --- |
| Adoption date | 1991 | 1998 | 2003 | 2005 (current version) | 1998 |
| Number of commodities | 24 | 23 | 14 | 19 | 38 |
| Weighting method | *Production* weighted | Production **and liquidity** weighted | Fixed weight | Fixed weight | Fixed weight |
| Rolling methodology | Nearby most liquid contract, monthly | Front month to next or second month | **Optimized on roll return** | Front month to next month | Front month to next month |
| Rebalancing frequency | Annually | Annually | Annually | **Monthly** | **Monthly** |
| Individual investor funds? | Yes | Yes | Yes | Yes in some jurisdictions, plus an ETF on a related index | Yes |

* **S&P GSCI**: world production value weights (like market-cap weighting) → concentrated; energy historically up to ~80%.
* **BCOM**: selection-based; sector cap 33%, single-commodity floor 2% → energy ~30%, but natural gas weight (~9%) is higher than in the GSCI (~3%), and natural gas has had a heavy roll cost (~19% a year).
* **DBLCI**: no livestock; rolls to the contract within 12 months that **maximizes backwardation / minimizes contango** per month (active roll decision).
* **TR/CC CRB**: continuation of the first investable index (CRB, 1978); committee sets tiered fixed weights.
* **RICI**: broadest (38, including lumber, oats, rubber); some contracts in non-USD currencies add FX exposure.

**Rebalancing**

* Frequent rebalancing (CRB, RICI) helps in **mean-reverting** markets (sell peaks, buy troughs) but hurts in **trending** markets.
* Production-weighted indexes (GSCI, BCOM) drift with prices, so they rebalance less and can outperform fixed-weight, frequently rebalanced indexes in a trend.

> [!IMPORTANT]
> * A production-weighted index is **more** sensitive to energy than an equal-weighted one.
> * Indexes that hold contracts usually in backwardation tend to have higher returns (positive roll); contango-heavy ones lag.
> * Investing across many exchanges does **not** add much diversification: commodity markets are highly correlated worldwide. The major indexes have been highly correlated (>70%) with each other and ~0% correlated with stocks and bonds. No index methodology dominates.

## Quick Recall

* Valuation: commodities have no cash flows; valued on supply/demand forecasts; mostly accessed through derivatives.
* Backwardation: spot > futures, positive spread, buy more contracts on the roll, positive roll return. Contango: the reverse.
* Insurance theory → backwardation; hedging pressure → flat/backwardation/contango; storage → $F=S+\text{storage}-\text{convenience yield}$.
* Total return = price + roll + collateral (+ rebalance for an index); price return drives volatility.
* Roll return: $(F_{near}-F_{far})/F_{near}\times\%$ rolled; sector dependent, modest over time.
* Swaps: excess return (price change), total return (price + collateral), basis (two related prices), variance/volatility.
* Index returns depend on weighting, roll method and rebalance frequency; DBLCI optimizes the roll; CRB and RICI rebalance monthly.
