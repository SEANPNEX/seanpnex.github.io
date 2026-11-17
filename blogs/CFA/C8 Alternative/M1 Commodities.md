# Commodities

Commodity sectors and their life cycles; how commodity valuation differs from stocks and bonds; who trades commodity futures; the spot–futures relationship (contango and backwardation); three theories of futures returns; the components of a fully collateralized futures return; commodity swaps; and how index construction drives index returns. (2026 title: *Introduction to Commodities and Commodity Derivatives*.)

| Term | Meaning |
| --- | --- |
| **Basis** | Spot price − futures price |
| **Calendar spread** | Near-term futures price − longer-term futures price (same commodity) |
| **Backwardation** | Spot above futures (or near above far): positive basis and calendar spread |
| **Contango** | Spot below futures (or near below far): negative basis and calendar spread |
| **Convenience yield** | The benefit of holding physical inventory as a buffer against supply disruptions; **high when inventories are scarce** |
| **Roll return** | The gain or loss from closing an expiring contract and opening a later one |
| **Collateral return** | Interest earned on the cash or T-bills held against a futures position |
| **Fully collateralized** | Collateral = the futures' notional value: no leverage |

## Commodity Basics

### Sectors

The Bloomberg Commodity Index splits commodities into six sectors:

* **Energy**: crude oil, natural gas, coal, and refined products (gasoline, heating oil).
* **Industrial (base) metals**: copper, aluminum, nickel, zinc, lead, tin, iron.
* **Precious metals**: gold, silver, platinum (stores of value plus industrial use).
* **Grains**: corn, soybeans, wheat, rice (food, feed and biofuels such as ethanol).
* **Softs** (cash crops): cotton, cocoa, sugar, coffee.
* **Livestock**: hogs, cattle, sheep, poultry.

Fundamental analysis frames each sector in terms of **stocks** (potential supply and demand: fields, farmland, herd size, smelter capacity) and **flows** (how that stock is used: weather, pipelines, disease, policy, GDP growth), plus timing (seasons, logistics, shocks) and money flows (sentiment, interest rates, subsidies).

| Main influences | Energy | Base metals | Precious metals | Grains | Softs | Livestock |
| --- | --- | --- | --- | --- | --- | --- |
| GDP size and growth | ✓ | ✓ | ✓ | | ✓ | ✓ |
| Weather | ✓ | | | ✓ | ✓ | ✓ |
| Consumer preferences | | | | ✓ | ✓ | ✓ |
| Consumer income | | | | | ✓ | ✓ |
| Population growth | | | | ✓ | | |
| Biofuel substitution | | | | ✓ | ✓ | |
| Disease | | | | ✓ | ✓ | ✓ |
| Monetary policy, money supply | | | ✓ | | | |
| Geopolitics | ✓ | | ✓ | | | |
| Industrial and environmental policy, infrastructure | ✓ | ✓ | | | | |

> [!IMPORTANT]
> Exam favorites: industrial activity drives **copper** (natural gas is driven mainly by weather, softs mainly by income). Precious metals are the **least** affected by short-term weather, because they store easily.

### Life Cycles

* The production life cycle reflects, and **amplifies**, changes in storage, weather, and political or economic events.
* A **short** life cycle allows fairly quick adjustment to outside events; a **long** one limits how fast supply or demand can react.
* Agriculture and livestock have well-defined seasons that differ by region (Northern vs Southern Hemisphere). Energy and metals are extracted **all year round**; their seasonality comes mostly from demand for products (gasoline in summer, heating oil in winter).

| Sector | Key life-cycle facts |
| --- | --- |
| **Energy** | Natural gas can be used almost immediately after extraction (summer gas is often stored for winter); crude oil is useless until **refined** ("cracking"). Refineries and pipelines are very costly, and pipelines are often cut off in conflicts |
| **Metals** | The most **flexible** life cycle: ore and metal store for months or years without spoiling. Huge economies of scale in smelting make it hard to cut production when supply exceeds demand; new capacity often arrives just as demand falls |
| **Livestock** | Poultry matures in weeks, hogs in about 6 months, cattle in a few years (feeder cattle → live cattle in a feedlot). US livestock has historically been the **least export-oriented**, because meat spoils after slaughter (freezing is changing this) |
| **Grains** | Planting → growth → pod, ear or head formation → harvest; stored year round in silos, at risk from mold and pests |
| **Softs** | E.g., coffee is harvested somewhere all year near the equator; robusta trades in London and arabica in New York, as unroasted "green" beans delivered to bonded warehouses |

### Valuation vs Stocks and Bonds

| | Stocks and bonds | Commodities |
| --- | --- | --- |
| Nature | Financial assets: claims on economic output | Almost always **physical** assets (exceptions: electricity, weather) |
| Cash flows | Dividends, coupons | **None**; holding them physically **costs** storage and transport |
| Valuation | PV of expected cash flows | Forecast prices from **supply and demand** and expected volatility |
| Main route for investors | Own the security | Mostly **derivatives** (futures, swaps) with finite lives |

Storage and transport costs shape the forward curve: high storage costs → futures prices rise with maturity; strong current demand can push spot above futures. Where some participants can't make or take delivery, arbitrage only keeps the spot–futures difference within a **range**, not at a fixed level.

### Market Participants

* **Hedgers** trade to hedge their commodity exposure. Hedging doesn't mean long, nor speculating short: a snack maker hedges by going **long** corn; a gold miner by going **short** gold; an integrated oil company can speculate long, and a CTA short.
* **Traders and investors**:
  * **Informed investors** (hedgers and speculators, including index and institutional investors) believe they have an information advantage.
  * **Liquidity providers** step in when producers and consumers aren't in the market at the same time; they effectively **insure hedgers**, for an expected profit.
  * **Arbitrageurs** with storage (warehouses, silos, feedlots) exploit mispricing between the physical commodity (plus storage and financing costs) and the futures price.
* **Exchanges** (with clearing houses) set rules and provide infrastructure: CME and ICE (US), B3 (Brazil), LME (industrial metals, owned by HKEX), Dalian, Shanghai, Tokyo.
* **Analysts** don't take positions (researchers, product creators, policymakers, brokers).
* **Regulators**: the CFTC in the US (delegating much monitoring to the NFA); most other countries have a single regulator (e.g., the China Securities Regulatory Commission); ESMA and MiFID II in the EU; IOSCO coordinates internationally.

> [!NOTE]
> Futures markets are **net zero** (longs = shorts), unlike stock and bond markets, where investors are net long. Shorting futures is simpler than shorting stocks: no borrowing, no dividends to reimburse, and the same margin as a long.

## Spot and Futures Prices

* The **spot price** is the current price to deliver or receive a physical commodity at a specific place: highly **local**.
* The **futures price** is agreed today for delivering a standard quantity and quality on a future date: global or regional, standardized and public.
* **Basis** = spot − futures; **calendar spread** = near-term futures − longer-term futures. **Backwardation** (spot or near above futures or far) gives a positive basis and spread; **contango** a negative one.
* E.g., WTI at USD65.50 for July and USD64.00 for December → calendar spread **+USD1.50** (backwardation). Lean hogs at 95¢ for July and 96¢ for August → spread **−1¢** (contango).
* Curves can switch between contango and backwardation, especially under stress or structural change.

**Settlement.**

* **Cash settlement** brought in more speculators and arbitrageurs, and let hedgers transfer price risk without delivery.
* **Physical settlement** makes futures converge to spot; cash-settled markets may not fully converge (because of trading costs).
* Quality and variety matter: robusta can't be delivered against an arabica contract, and some contracts apply premiums or discounts for origin or warehouse location.

## Theories of Futures Returns

### Insurance Theory

Keynes's **normal backwardation**:

* A producer is naturally long the physical good, so it **sells futures** to lock in revenue.
* Persistent selling by producers pushes futures **below** spot; the discount is the speculator's payment for providing price insurance.
* So the curve is **backwardated**, and long speculators earn a positive excess return as the futures price rises toward spot. E.g., buying October cotton at 74.50¢ with the front month at 76.75¢ → +2.25¢ a pound, × 50,000 pounds = USD1,125 per contract, if front prices don't change.
* The evidence is weak: Kolb (1992) found "normal backwardation is not normal". Backwardation doesn't reliably give positive returns, and contango doesn't reliably give negative ones.

### Hedging Pressure Hypothesis

Both producers (selling futures) and consumers (buying futures) hedge:

| Hedging pressure | Curve |
| --- | --- |
| Producers = consumers | **Flat**: the hedging needs offset, so no discount is needed to attract speculators |
| Producers > consumers | **Backwardation** (as in Keynes): speculators go long only at a discount |
| Consumers > producers | **Contango**: buyers bid futures up to induce speculators to go short |

Limitations: producers usually have more concentrated price exposure than scattered consumers; both sides sometimes speculate (e.g., Metallgesellschaft, 1993); and hedging pressure is very hard to measure.

### Theory of Storage

Kaldor (1939): inventory levels shape the curve.

$$
\begin{aligned}
\text{Futures price}={}&\text{Spot price}\\
&+\text{Storage costs}\\
&-\text{Convenience yield}
\end{aligned}
$$

* A commodity that is regularly stored (supply dominates) → storage costs dominate → **contango**.
* Just-in-time, little inventory (demand dominates) → convenience yield dominates → **backwardation**.
* The convenience yield is **low when inventories are abundant** and **rises as they shrink**. E.g., in Libya in 2011, the convenience yield on near-dated crude jumped while deferred months barely moved → backwardation.

> [!IMPORTANT]
> The insurance theory predicts backwardation only; hedging pressure predicts a flat curve, backwardation **or** contango; the storage theory depends on storage costs vs convenience yield. In practice, storage costs and convenience yields are unobservable or volatile, so all three need judgment.

## Components of Futures Returns

The total return on a **fully collateralized** commodity futures position:

$$
\begin{aligned}
\text{Total return}={}&\text{Price return}\\
&+\text{Roll return}\\
&+\text{Collateral return}
\end{aligned}
$$

plus a **rebalance return** for an index.

* **Price return** (spot yield): the change in the futures price, usually the front month:

$$
\text{Price return}=\frac{P_{\text{now}}-P_{\text{before}}}{P_{\text{before}}}
$$

* **Roll return** (roll yield): from closing the near contract and opening a later one. It can't be captured on its own; it's an accounting calculation:

$$
\text{Roll return}=\frac{F_{\text{near}}-F_{\text{far}}}{F_{\text{near}}}\times\%\text{ rolled}
$$

* **Collateral return** (collateral yield): interest on the cash or bonds backing the position. For indexes, collateral = notional (no leverage), usually in T-bills; for long-horizon forecasts, use a government bond of matching term.

#### Example: WTI Roll in the S&P GSCI

The S&P GSCI rolls over five days, moving 20% of the position each day.

| Contract | Price |
| --- | ---: |
| Near (March) | USD52.64 |
| Far (April) | USD53.00 |

**Step 1. Gross roll return.**

$$
\begin{aligned}
\text{Gross}&=\frac{52.64-53.00}{52.64}\\
&=-0.68\%
\end{aligned}
$$

**Step 2. Scale by the share rolled.**

$$
\text{Net}=-0.68\%\times 20\%=-0.13\%
$$

The far contract is dearer (contango), so each day's roll **costs 0.13%**.

#### Example: Total Return in Backwardation

| Input | Value |
| --- | ---: |
| Near contract | USD80.00 |
| Far contract | USD78.40 |
| Share rolled | 100% |
| Price return over the year | +4% |
| Collateral (full, in T-bills) | 3% |

**Step 1. Roll return.**

$$
\begin{aligned}
\text{Roll}&=\frac{80.00-78.40}{80.00}\times 100\%\\
&=2.0\%
\end{aligned}
$$

**Step 2. Total return.**

$$
\begin{aligned}
\text{Total}&=4\%+2\%+3\%\\
&=9\%
\end{aligned}
$$

The far contract is cheaper (backwardation), so the roll **adds** 2%, and the total return is **9%**.

#### Example: Rolling to Keep the Same Exposure

A USD10,000 long position; the near contract is at USD4.00 and the far one at USD2.50.

$$
\begin{aligned}
\text{Near sold}&=\frac{10{,}000}{4.00}=2{,}500\\
\text{Far bought}&=\frac{10{,}000}{2.50}=4{,}000
\end{aligned}
$$

The far contract is cheaper (backwardation), so it takes **more** contracts (4,000 vs 2,500) to keep USD10,000 of exposure.

| Curve | Far vs near | To keep the same exposure | Roll return |
| --- | --- | --- | --- |
| **Backwardation** | Far is cheaper | Buy **more** far contracts (e.g., £110 at £10 → 11 contracts; at £9 → about 12) | **Positive** |
| **Contango** | Far is dearer | Buy **fewer** far contracts (e.g., £108 at £9 → 12 contracts; at £10 → about 11) | **Negative** |

**S&P GSCI, January 1970 – March 2019:**

| | Total | Spot | Roll | Collateral |
| --- | --- | --- | --- | --- |
| Annual return | 6.8% | 3.0% | −1.3% | 5.0% |
| Risk (standard deviation) | 19.8% | 19.8% | 4.2% | 1.1% |
| Correlation with total | | 0.97 | −0.11 | −0.14 |

* The volatility of the total return comes almost entirely from the **price** return.
* Over the long run, the collateral return contributed most; the roll return was a drag. (The components sum to 6.7%, not 6.8%, because the total is compounded geometrically.)

### Roll Return in Practice

* Contango, backwardation and roll returns reflect supply and demand expectations; neither state **lasts** indefinitely.
* Roll return and price return had a correlation of only about **3%**: roll return doesn't reliably predict price return.
* Ilmanen (2011) argued roll return is roughly a risk premium, but about 40% of the commodities he studied had a negative roll return **and** a positive total return.
* Average annual roll returns were **negative** for every sector in the sample: total −1.3%, energy −1.5%, industrial metals −1.3%, agriculture −4.5%, livestock −1.1%, precious metals −5.1%, softs −5.5%.
  * Stored commodities (metals, grains, livestock, softs; gold is stored indefinitely) tend toward contango → negative roll.
  * Only **energy** (consumed in real time) had a statistical chance of a positive average roll, and that has faded since 2010 (US shale, China as the top importer, OPEC+).
* Roll return can matter a lot in a **single period** but has been **modest** over time relative to price return. It depends heavily on the **sector**, so sector weights drive a portfolio's roll return.

## Commodity Swaps

A **commodity swap** exchanges payments on several dates, based on commodity reference prices or indexes (often a series of futures). It transfers risk without managing many futures contracts, and can be **customized** (a specific grade or blend, quantities changing over time, cash settlement with delivery flexibility). The dealer may hedge with futures, offset with another dealer, buy the physical commodity, or keep the exposure.

| Swap | Payment driven by | Typical user |
| --- | --- | --- |
| **Excess return swap** | The change in the underlying futures price (often vs a fixed level) × notional | Hedgers (e.g., a refiner) |
| **Total return swap** | The change in an index level: futures price changes **plus** interest on collateral; the buyer pays a fee | Institutions wanting long commodity exposure (diversification, inflation hedging, asset–liability management) |
| **Basis swap** | The difference between two related but imperfectly correlated prices (liquid vs illiquid, e.g., Brent vs Gulf heavy crude) | Users of a less liquid grade |
| **Variance swap** | Realized vs fixed variance; the buyer receives if realized exceeds fixed (often capped) | Volatility traders |
| **Volatility swap** | Realized vs expected volatility; the seller profits if realized is below expected | Volatility traders |

$$
\begin{aligned}
\text{TRS payment}&=\text{Notional}\\
&\quad\times\text{Index return}\\
\text{Call-style ERS}&=\max(0,\ P-\text{Strike})
\end{aligned}
$$

where TRS is a total return swap and ERS an excess return swap structured as a strip of calls (payoff per unit on each settlement date).

#### Example: Refiner's Excess Return Swap

A refiner goes long a swap that pays the amount by which oil exceeds USD70 a barrel at each month-end, January to September, for a premium of USD25 a barrel.

| Month | Price | Payoff |
| --- | ---: | ---: |
| Jan | 70 | 0 |
| Feb | 75 | 5 |
| Mar | 71 | 1 |
| Apr | 66 | 0 |
| May | 65 | 0 |
| Jun | 63 | 0 |
| Jul | 66 | 0 |
| Aug | 72 | 2 |
| Sep | 78 | 8 |

**Step 1. Net result.**

$$
\begin{aligned}
\text{Payoffs}&=5+1+2+8=16\\
\text{Net}&=16-25=-9
\end{aligned}
$$

The refiner lost **USD9 a barrel** (about USD1 a month), but it was protected from a price spike and knew its cost up front.

#### Example: Total Return Swap

USD100 million notional, reset monthly.

| Index move | Payment |
| --- | --- |
| +3% | Dealer pays the manager $0.03\times 100\text{m}=$ **USD3 million** |
| −2% | Manager pays the dealer $0.02\times 100\text{m}=$ **USD2 million** |

Payments are made each month, not deferred to maturity.

## Commodity Indexes

Indexes serve as benchmarks, as macro and forecasting indicators, and as the basis for investment products. They differ in:

* **Breadth**: the number of commodities and sectors.
* **Weightings**, and how they're set.
* **Roll method**: directly drives the roll return.
* **Rebalancing** method and frequency: drives the rebalance return.
* **Governance**: rules-based vs committee selection; independence of the asset price, index provider and product provider.

| As of April 2019 | S&P GSCI | BCOM | DBLCI | TR/CC CRB | RICI |
| --- | --- | --- | --- | --- | --- |
| Launched | 1991 | 1998 | 2003 | 2005 (current version) | 1998 |
| Commodities | 24 | 23 | 14 | 19 | 38 |
| Weighting | *Production* | Production **and liquidity** | Fixed | Fixed | Fixed |
| Roll | Nearby most liquid contract, monthly | Front month to next or second month | **Optimized for roll return** | Front month to next | Front month to next |
| Rebalancing | Annual | Annual | Annual | **Monthly** | **Monthly** |
| Funds for individuals | Yes | Yes | Yes | In some places, plus an ETF on a related index | Yes |

* **S&P GSCI**: weighted by world production value (like market-cap weighting) → concentrated; energy historically up to about 80%.
* **BCOM**: committee-selected; sector cap 33%, single-commodity floor 2% → energy about 30%, but a higher natural gas weight (about 9%, vs about 3% in the GSCI), and natural gas has had a heavy roll cost (about 19% a year).
* **DBLCI**: no livestock; rolls to the contract within 12 months that **maximizes backwardation or minimizes contango** (an active roll decision).
* **TR/CC CRB**: continues the first investable index (CRB, 1978); a committee sets tiered fixed weights.
* **RICI**: the broadest (38, including lumber, oats and rubber); some contracts are in non-USD currencies, adding currency exposure.

**Rebalancing.** Frequent rebalancing (CRB, RICI) helps in **mean-reverting** markets (selling peaks, buying troughs) but hurts in **trending** ones. Production-weighted indexes (GSCI, BCOM) drift with prices, so they rebalance less, and can outperform fixed-weight, frequently rebalanced indexes in a trend.

> [!IMPORTANT]
>
> * A production-weighted index is **more** sensitive to energy than an equal-weighted one.
> * Indexes holding contracts usually in backwardation tend to return more (positive roll); contango-heavy ones lag.
> * Investing across many exchanges adds little diversification: commodity markets are highly correlated worldwide. The major indexes have been highly correlated (above 70%) with each other, and about 0% correlated with stocks and bonds. No index methodology dominates.
