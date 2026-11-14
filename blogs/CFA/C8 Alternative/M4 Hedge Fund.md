# Hedge Fund

This module (2026 title: *Hedge Fund Strategies*) covers how hedge funds and their strategies are classified; the investment characteristics, implementation and portfolio role of equity, event-driven, relative value, opportunistic, specialist and multi-manager strategies; the conditional factor model used to uncover hedge fund risk exposures; and what a 20% hedge fund allocation does to a 60/40 portfolio.

* [Learning Outcomes and Key Terms](#learning-outcomes-and-key-terms)
* [Characteristics](#characteristics) and [Classification](#classification)
* [Strategies](#strategies)
  * [Equity Related](#equity-related-strategies): long/short, dedicated short and short-biased, equity market neutral
  * [Event-Driven](#event-driven-strategies): merger arbitrage, distressed securities
  * [Relative Value](#relative-value-strategies): fixed-income arbitrage, convertible bond arbitrage
  * [Opportunistic](#opportunistic-strategies): global macro, managed futures
  * [Specialist](#specialist-strategies): volatility trading, reinsurance/life settlements
  * [Multi-Manager](#multi-manager-strategies): fund-of-funds, multi-strategy
* [Strategy Summary Table](#strategy-summary-table)
* [Conditional Factor Risk Model](#conditional-factor-risk-model)
* [Portfolio contribution of hedge fund strategies](#portfolio-contribution-of-hedge-fund-strategies)
* [Quick Recall](#quick-recall)

## Learning Outcomes and Key Terms

The candidate should be able to:

* Discuss how hedge fund strategies may be classified
* Discuss investment characteristics, strategy implementation, and role in a portfolio of equity-related hedge fund strategies
* Discuss investment characteristics, strategy implementation, and role in a portfolio of event-driven hedge fund strategies
* Discuss investment characteristics, strategy implementation, and role in a portfolio of relative value hedge fund strategies
* Discuss investment characteristics, strategy implementation, and role in a portfolio of opportunistic hedge fund strategies
* Discuss investment characteristics, strategy implementation, and role in a portfolio of specialist hedge fund strategies
* Discuss investment characteristics, strategy implementation, and role in a portfolio of multi-manager hedge fund strategies
* Describe how factor models may be used to understand hedge fund risk exposures
* Evaluate the impact of an allocation to a hedge fund strategy in a traditional investment portfolio

| Term | Meaning |
| --- | --- |
| **Liquid alts** | Mutual funds, closed-end funds, ETFs running hedge fund-like strategies |
| **Soft- vs hard-catalyst** | Event-driven position before an event is announced vs after it is announced (hard is less risky) |
| **Fulcrum security** | Partially-in-the-money claim (not repaid in full) whose holders end up owning the reorganized company |
| **Stub trading** | Long/short a parent vs its subsidiaries, weighted by ownership |
| **TSM / CSM** | Time-series momentum (absolute, can be net long/short) / cross-sectional momentum (relative, ~net zero) |
| **Netting risk** | FoF investor pays incentive fees to winning funds even when the total FoF is flat or down |
| **Sortino ratio** | Like Sharpe but uses **downside** deviation |
| **Rho** | First-order serial autocorrelation; high Rho = smoothed returns = illiquidity |

## Characteristics

The core trade-off: do the extra alpha and diversification justify the high fees?

* **Legal/Regulatory**
  * Limit access to sophisticated investors with minimum income or net worth; US hedge funds are mostly private placements; offshore funds (Cayman, BVI, Bermuda) are stand-alone corporate entities
  * Regulatory constraints are far less than for regulated investment vehicles, **except liquid alts**

  > [!note]
  >
  > **Liquid alts** are mutual funds, closed-end funds, or ETFs that use hedge fund-like strategies (mainly long/short equity and managed futures):
  >
  > * Redeem on a daily basis
  > * More widely marketed to retail investors
  > * Prohibited (in most countries) from charging an incentive fee
  > * Significantly underperform similar-strategy hedge funds (by about **100–200 bps a year**): the illiquidity premium cannot easily be transported into a mutual fund format

* Flexible mandates, few investment constraints (set out in the offering memorandum)
* Large investment universe (private securities, distressed debt, derivatives, life insurance contracts, royalties)
* Aggressive investment styles (shorting, concentrated positions, credit/volatility/liquidity risk premiums)
* Relatively liberal use of leverage (prime broker borrowing or derivatives; hedging derivatives can create high "notional leverage" with lower risk)
* Liquidity constraints: **lock-ups, liquidity gates, and exit windows**
* Relatively high fee structure: management fee (historically 1%+ of AUM) and incentive fee (10%–20% of returns)

## Classification

* **Single manager**: one manager or team, one strategy
* **Multi-manager**
  * **Multi-strategy**: teams running different strategies in the **same fund**
  * **FoF**: allocates to separate underlying hedge funds

Taxonomies combine (1) instruments, (2) trading philosophy (systematic vs discretionary), and (3) types of risk (directional, event-driven, relative value). Data vendors (HFR, Lipper TASS, Morningstar CISDM, Eurekahedge, Credit Suisse) use different categories and methods; **less than 1%** of managers report to all of them, so no index is all-encompassing.

* HFRX (equal-weighted, includes funds closed to new money) regularly outperforms HFRI (open funds only), but isn't replicable in real time.
* Credit Suisse Hedge Fund Index is AUM-weighted → reflects large funds (e.g., multi-strategy).

> [!note]
> Textbook issue: the text says HFR divides funds into "six single strategy groupings", then lists **seven** (equity hedge, event driven, fund-of-funds, macro, relative value, risk parity, blockchain).

| **Category**   | **Strategies**                             | **Main risk** |
| -------------- | ------------------------------------------ | --- |
| Equity related | - Long/short equity                        | Equity market (beta) risk |
|                | - Dedicated short selling and short-biased | |
|                | - Equity market neutral                    | |
| Event-driven   | - Merger arbitrage                         | Event risk |
|                | - Distressed securities                    | |
| Relative value | - Fixed income arbitrage                   | Credit and liquidity risk |
|                | - Convertible bond arbitrage               | |
| Opportunistic  | - Global macro                             | Varies (top-down, multi-asset) |
|                | - Managed futures                          | |
| Specialist     | - Volatility trading                       | Niche/unique risks |
|                | - Reinsurance/Life settlements             | |
| Multi-manager  | - Fund-of-funds (FOF)                      | Mix; manager selection |
|                | - Multi-strategy hedge funds               | |

## Strategies

### Equity Related Strategies

#### Long-short equity

* Buy undervalued, short overvalued stocks; skill is mainly **stock selection**, market timing ("beta tilts") is secondary and most managers do it poorly
* About **30%** of all hedge funds
* Factor exposures depend on focus (small-cap growth: +size, −value; large-cap value: −size, +value)
* Typically **40%–60% net long** (gross 70%–90% long vs 20%–50% short); aim for long-only-like returns with about **50% lower** standard deviation
* Specialist (sector) managers (TMT, financials, health care, biotech) can build an information edge; generalists can reallocate across sectors but may miss industry nuance
* Avoid paying hedge fund fees for **embedded beta** you can get cheaply
* Leverage: **variable**; more market-neutral or quantitative → more leverage
* Vehicle: LP or mutual fund (liquid alts)
* Attractiveness: liquid, diverse, transparent mark-to-market pricing; short side reduces beta and adds alpha

**Long-short construction (kept from the earlier notes, not in the 2026 textbook):**

| Strategy                   | Long Positions | Short Positions | Cash | Gross Exposure | Net Exposure |
| -------------------------- | -------------- | --------------- | ---- | -------------- | ------------ |
| Long Only                  | 100            | 0               | 0    | 100            | 100          |
| 130/30 Long Extension      | 130            | 30              | 0    | 160            | 100          |
| Market-Neutral (low risk)  | 50             | 50              | 100  | 100            | 0            |
| Market-Neutral (high risk) | 100            | 100             | 100  | 200            | 0            |
| Directional (low risk)     | 80             | 40              | 60   | 120            | 40           |
| Net Short                  | 40             | 100             | 160  | 140            | -60          |

Gross = long + short; net = long − short.

#### Dedicated short-selling and short-biased

* **Dedicated**: short-only positions in equities; vary only sizing and cash; **60%–120% short** at all times
* **Short-biased**: short-side stock picking balanced with some value- or index-oriented long exposure; around **30%–60% net short**
* **Activist short selling**: take a short position, then publicly present the research (not manipulation in the US if information is accurate, not sold, and in LPs' interest)
* Targets: failing business models, fraudulent accounting, mismanagement, weak governance, excess leverage, single unproven products. Tools: CDS spreads, bond spreads, put implied vol, technicals, **Altman Z-score** (bankruptcy), **Beneish M-score** (earnings manipulation)
* Difficulties: borrow cost and recall risk, losing positions **grow** (opposite of longs), blocked management access, regulation (US alternative uptick rule after a 10% fall; GFC short-sale bans)
* Return goal lower than other strategies but **negatively correlated**; more volatile than L/S equity; returns historically lumpy and disappointing
* Leverage: **low** (enough natural volatility)
* Vehicle: best as **LP** (operational complexity)
* Benchmark: few managers; compare with inverse of stock index returns

**Textbook example (Generic Inc.):** overvalued (P/E and P/B 50% and 40% above industry, EPS growth 3% vs 18% industry), but short interest 60% and borrow cost 20% → **short-squeeze** risk before trial results → don't short the stock; instead buy puts, a long put calendar spread, buy shares and lend them at 20% with protective puts, or a short risk reversal (sell expensive OTM calls, buy OTM puts).

#### Equity market neutral (EMN)

* Long and short similar equities with divergent valuations, keeping portfolio **beta ≈ 0** (often also sector, size, value neutral); captures alpha without beta
* Types: **pairs trading** (co-integrated pairs; mean reversion), **stub trading** (parent vs subsidiaries by ownership %, e.g., short 1 A, buy 0.90 B and 0.75 C), **multi-class trading** (voting vs non-voting shares), **quantitative market neutral** and **statistical arbitrage** (frequent rebalancing; trading-cost hurdle models)
* Four steps: (1) tradable, liquid, shortable universe; (2) fundamental and/or statistical models for buy/sell signals; (3) construct with beta (and dollar/sector/factor) neutrality; (4) consider availability and cost of leverage and rebalancing costs
* Modest, steady returns with low volatility; useful in **non-trending or declining** markets; sometimes a substitute/complement for fixed income when yields are low or the curve is flat
* Leverage: **high** (up to 300% long vs 300% short with portfolio margining). Key risk: prime broker forces **downsizing** after an excess drawdown; tail risk in stress (quant pairs can be effectively short volatility)
* Vehicle: **LP** (leverage exceeds mutual fund limits)

**Textbook example (pairs trade):** long KO $1,000,000 (β 0.55), short PEP (β 0.65) with equal beta-weighted exposure:

$$
\text{Short PEP}=\frac{1{,}000{,}000}{0.65/0.55}=\$846{,}154
$$

Index weights are irrelevant.

### Event-Driven Strategies

Profit from corporate events (M&A, bankruptcy, issuance, buybacks, restructurings). **Soft-catalyst** (anticipate) is riskier than **hard-catalyst** (react to an announced event).

#### Merger arbitrage

* **Cash-for-stock**: buy the target T. **Stock-for-stock**: buy T and short the acquirer A in the offer ratio. If expecting failure (e.g., antitrust): short T, buy A
* 70%–90% of announced US deals close; spread typically **3%–7%**; deals take 3–4 months, capital recycled with leverage → net annualized returns about **7%–12%**, little correlation with non-deal factors
* Failed deal: losses of **−20% to −40%** → left-tail risk; deals fail more in stress → some market sensitivity
* Payoff = **riskless bond + short put** (selling insurance on the deal); plus a **long call** if a White Knight bids higher
* Cross-border and vertical deals: more regulatory risk, wider spreads; hostile deals: wider spreads
* Implementation: equities, plus preferreds, debt, convertibles (bond floor cushions a failure), options (OTM puts on T, OTM calls on A), CDS (sell protection on T if A's credit is better); index hedges for market risk
* Alpha comes from **choosing which deals** to do
* Leverage: **moderate to high, 3–5×**. Vehicle: mostly LP; some low-leverage liquid alts exist
* Attractiveness: high Sharpe ratio (low double-digit return, mid-single-digit SD) with left-tail risk

**Textbook example:** A at $45 offers 1 A for 2 T; T jumps from $15 to $19, A falls to $42. Buy 20,000 T ($380,000), short 10,000 A (+$420,000).

* Deal closes: net spread **+$40,000**
* Deal fails (prices revert): A short $420{,}000-450{,}000=-30{,}000$; T long $300{,}000-380{,}000=-80{,}000$ → **−$110,000**
* = riskless bond paying $40,000 + short binary put paying out $110,000 on failure

#### Distressed securities

* Firms in or near bankruptcy or under financial stress; securities often dumped by institutions that cannot hold below-investment-grade debt → discounts to workout value
* **Liquidation**: assets sold, claims paid by priority (senior secured → junior secured → unsecured → convertible → preferred → common); buy debt priced below your recovery estimate (e.g., senior secured at 50% of par, recovery estimate 75%), timing risk if the process drags
* **Reorganization**: capital structure renegotiated; debt may become new equity (old equity cancelled). Active managers seek control via **fulcrum securities**, then exit (e.g., via IPO) after the turnaround
* **Capital structure arbitrage**: long securities with good recovery, short those with poor prospects (e.g., 2015–16 energy: long junior unsecured debt, short still-overvalued equity or buy puts)
* Long lock-ups (e.g., two years) and gates; hard-to-value Level 3 assets with **mark-to-model smoothing**
* Returns at the higher end of event-driven but more variable; **long-biased**; lumpy, cyclical; binary outcomes; most attractive **early in an economic recovery** after dislocation
* Leverage: **moderate to low, 1.2–1.7× NAV**

### Relative Value Strategies

Exploit relative mispricing driven by credit quality, liquidity and implied volatility; earn credit, liquidity or volatility premiums in normal times, lose in crises (leverage, credit deterioration, illiquidity, volatility spikes).

#### Fixed-income arbitrage

* Long relatively cheap, short relatively rich debt securities (sovereign, corporate, loans, MBS/ABS); mispricings from duration, credit, liquidity, optionality, issue size; often **duration-neutral** (derivatives to hedge large or non-parallel moves). Taking issuer credit views turns it into L/S credit (more volatile)
* **Yield curve trades** (calendar spreads: flattening/steepening) and **carry trades** (long higher-yield, short lower-yield)
* Classic trade: long **off-the-run**, short duration-matched **on-the-run** Treasuries → rate and credit risk hedged, **liquidity risk** remains; payoff resembles a **short put** (carry + convergence, but losses if the spread widens; margin calls under leverage)
* Mortgage/structured products add negative convexity, default and redemption risks
* Leverage: **high**, typically **4–5×** (up to 12–15× within some multi-strategy funds), via repo with **haircuts**; leverage availability falls as product complexity rises
* Liquidity: US government curve trades are very liquid but have the fewest mispricings; liquidity decreases in other sovereigns, mortgages, and especially corporates

**Textbook example (TIPS vs Treasuries in distress):** buy 5-year TIPS (receive 3.74% + inflation), short 5-year Treasuries (pay 2.56%), inflation swap (receive 1.36% fixed, pay inflation) → net **receive 2.54%** with zero net cost. Near risk-free, but needs repo access to borrow Treasuries and bank credit lines for the swap (both shrink in crises) and risks losing the borrow.

#### Convertible bond arbitrage

* Convertible = straight bond + call on the stock. Conversion value = share price × conversion ratio; conversion price = convertible price / conversion ratio
* Embedded options trade at **low implied volatility** (complex, thinly traded, unrated, few covenants; cheaper when issuance is heavy)
* Classic trade: **long convertible, short delta × shares** (delta near 1 if ITM, near 0 if OTM). The convertible has **positive gamma**, so rebalancing sells stock high and buys low; profit if **realized volatility > implied volatility** (net of costs)
* Hedge or keep other risks: rates (rate derivatives), credit (CDS), equity (short stock or puts). Styles: credit-oriented (unhedged credit), long-biased (underhedge equity), volatility-oriented (overhedge equity)
* Risks: short squeeze or recall of borrowed shares, credit spread moves, time decay and falling implied vol
* Works best with **high issuance, moderate volatility, ample liquidity**; does poorly in credit stress and illiquidity (hedge funds are the natural market makers and face redemptions → left-tail risk)
* Leverage: **high**, typically **300% long vs 200% short** (short is delta-adjusted)

**Textbook example (QXR):** convertible at 120% of par = €1,200, conversion ratio 50 → conversion price **€24** vs share price €30 (stock also 50% rich on P/E, P/BV, P/CF) → buy the convertible, short the shares.

| QXR share price | Long stock via convertible | Short stock | Total |
| --- | --- | --- | --- |
| 24 | 0 | +6 | **+6** |
| 30 | +6 | 0 | **+6** |
| 36 | +12 | −6 | **+6** |

Adding carry: borrow cost €2 + dividend €1 paid = −€3 per share; coupon €50/50 shares = +€1 → profit **€4 per share**.

### Opportunistic Strategies

Top-down, multi-asset. Classified by analysis (fundamental vs technical), implementation (**discretionary**: behavioral biases; **systematic**: struggles with new situations, herding/crowding as trend-following AUM grows), and instruments.

#### Global macro

* Views on economies, central banks, yield curves, inflation, PPP, capital flows, expressed through futures, forwards, swaps and options on currencies, rates, equity indexes, commodities (themes, regions, styles)
* Often **anticipatory and contrarian**, early in positioning (e.g., long CDS on subprime from 2006 paid off in 2007–08); heterogeneous, so less dependable "short alpha" than trend-following managed futures; needs due diligence on current exposures
* Directional or thematic/relative value views
* Returns come from correctly anticipating **trends**; low-volatility, **mean-reverting** markets are the bane (QE era); lumpy returns, higher volatility
* Leverage: high through derivatives; margin-to-equity **15%–25%** controls **6–7×** fund assets. Many positions diversify less than L/S equity because "risk-on/risk-off" makes assets move together

**Textbook example (EM devaluation risk):** buy puts on EM currencies, EM government bond futures and EM equity indexes (ITM for high conviction, OTM for lower conviction; loss capped at premiums), plus calls on DM reserve currencies and highly rated DM bond futures (flight to safety).

#### Managed futures

* Futures, options on futures, forwards, swaps on indexes, rates, commodities, currencies (some exotic: weather, carbon)
* Low correlation with stocks and bonds; **positive skewness** in stress (2007–09: short equity futures, long bond futures) → balances negatively skewed strategies
* Very **cyclical**; hurt in range-bound, mean-reverting markets (2011–2018); near-zero yields change the bond-trend diversification
* Highly liquid (E-mini S&P futures trade 3–4× SPY's dollar volume); margin 0.1%–10% of notional vs 50% for US stocks → inherent leverage; **85%–90%** of capital sits in T-bills/collateral, 10%–15% posted as margin
* Signals: momentum/trend and breakout, volatility; multiple horizons combined (longer-term weighted more); carry and volatility factors for sizing; **higher volatility or higher correlation → smaller position**; exits by price target, momentum reversal, time, trailing stop. Avoid **overfitting**; signals decay as they get crowded
* **TSM**: long assets with positive past returns, short negative → can be **net long or net short**; works when an asset's own past return predicts its future
* **CSM**: long relative winners, short relative losers within an asset class → about **net zero**; works when relative performance persists; limited by number of contracts

| | **Global macro** | **Managed futures** |
| --- | --- | --- |
| Approach | Mostly **discretionary**, fundamental | Mostly **systematic**, trend/technical |
| Liquidity | Highly liquid; less crowding (heterogeneous) | Highly liquid; crowding and slippage as AUM grew |
| Stress behaviour | Diversifies, but heterogeneous outcomes; can be early | **Positive right-tail skew** in stress |
| Volatility | High end of hedge funds; cyclical | High end; volatility rises with time horizon |
| Leverage | High; options add convexity | High; 6–7× notional with 10%–20% margin-to-equity |

**Textbook example (precious metals, 6-month signals):** CSM goes long the top two and short the bottom two of four metals (quasi-hedged, less volatile); TSM goes long those with positive and short those with negative trailing returns (could be all long or all short) → more volatile, more sensitive to sector trends.

### Specialist Strategies

#### Volatility trading

* **Relative value volatility arbitrage**: buy cheap volatility, sell expensive volatility, net out time decay. E.g., **time-zone arbitrage** (yen options cheaper in Asian hours), **cross-asset** volatility (Nikkei implied vol cheaper than S&P 500 despite higher realized vol). Asian structured products make Asian vol cheap; Western investors overpay for OTM protection
* **Long volatility**: equity volatility is about **80% negatively correlated** with equity returns → diversifier, at the cost of premium. **Short volatility** earns the volatility risk premium (selling crisis insurance)
* Instruments:
  * Exchange-traded options (up to ~2 years; longer-dated = more **vega**, shorter-dated = more **gamma**); watch term structure (usually upward, inverts in crisis), smile and skew (OTM puts priciest); require delta hedging of gamma
  * OTC options: custom tenor and strikes, but counterparty and liquidity risk
  * **VIX futures**/options: pure volatility view without delta hedging, but strong **mean reversion** and **roll-down** (upward-sloping vol curve → negative theta accelerates)
  * **Volatility and variance swaps** (forwards on realized vol or variance, strike set so value is zero at inception; "pure" volatility exposure, long-dated, tailored; ISDA/CSA counterparty risk; access often needs ~$100m AUM)
* Long volatility is **convex** (right-skewed payoff, small premium, potential multiples) but suffers roll-down and premium bleed
* Leverage: notionally levered but asymmetric. Benchmarks: hard to benchmark (CBOE Eurekahedge long, short, relative value vol and tail risk indexes)

**Textbook example (long OTM puts):** puts bought at $100 (12% implied vol) fall to $50 three months later as the index rallies 20%; after a crisis (index −10% from start, puts now ATM, implied vol 30%) they show a large gain. If the market then goes sideways, time decay erodes the premium to zero unless the manager delta-hedges actively.

#### Reinsurance/Life settlements

* **Life settlements**: buy life policies from holders (via brokers) for more than the surrender value; fund pays ongoing premiums and receives the death benefit. Look for (1) low surrender value offered, (2) low ongoing premiums, (3) high probability the insured dies earlier than standard actuarial estimates. Success when PV(death benefit) > PV(lump sum + premiums). Needs biometric/actuarial expertise. Returns are **uncorrelated** with financial markets
* **Catastrophe reinsurance**: provide capital to reinsurers for floods, hurricanes, earthquakes; needs geographic and policy diversity, a loss reserve buffer, and enough premium income; cat bonds and cat futures (seasonal issuance before hurricane season)

**Textbook example (SingStar):** a pool of NextLife policies (low premiums, weak underwriting) on insureds with early-onset Alzheimer's (life expectancy ~10 years shorter) → forecast premium outflows and death benefit timing, discount at a risk-adjusted rate, bid below PV.

### Multi-Manager Strategies

Three ways to combine strategies: build your own mix, **fund-of-funds**, or **multi-strategy** fund.

#### Fund-of-funds (FoF)

* Roles: diversification across strategies, tactical reallocation, manager selection and due diligence, monitoring, consolidated reporting; access to closed funds, economies of scale, currency hedging, portfolio-level leverage, better liquidity terms
* Access vehicle for smaller investors: hedge fund minimums $500k–$5m (typically $1m), so 15–20 managers need $15–20m; FoF minimum can be ~$100k
* Size lets FoFs extract fee breaks, better liquidity terms, future capacity rights, added transparency, and a commitment to the best terms offered to any future investor
* Implementation: source managers (databases, capital introduction events) → strategic allocation → screen peer groups, interviews, AIMA DDQs, on-site visits → operational due diligence (offering memorandum, LPA, service providers) → monitor style drift, personnel, regulatory issues
* Disadvantages: **double layer of fees** (historically 1%/10% on top of 1%–2%/10%–20%; now often 50 bps/5% or 1% flat), less transparency, **netting risk**, extra principal–agent layer; liquidity mismatch (FoF offers monthly/quarterly after a 1-year lock-up, underlying funds may gate) → stagger investments, credit line backstop

**Textbook example (Squaw Valley FoF, 1%/10% on two funds at 2%/20%, fees at year-end, no compounding):**

$$
\text{Underlying net}=20\%-2\%-20\%\times(20\%-2\%)=14.4\%
$$

$$
\text{FoF net}=14.4\%-1\%-10\%\times(14.4\%-1\%)=\mathbf{12.06\%}
$$

Fees take $(2+3.6+1+1.34)/20=39.7\%$ of the gross return.

If one fund earns 20% and the other loses 5%:

* PF net 14.4%; UF net $-5\%-2\%-0=-7.0\%$; FoF gross $0.5\times14.4\%+0.5\times(-7.0\%)=3.7\%$
* FoF net $=3.7\%-1\%-10\%\times(3.7\%-1\%)=$ **2.43%**
* Fees take $\{0.5\times(2+3.6+2+0)+(1+0.27)\}/7.5=67.6\%$ of the 7.5% gross return → **netting risk**

> [!IMPORTANT]
> Incentive fees are charged on gains **after** the management fee. A losing underlying fund pays no incentive fee, but the winning fund's incentive fee is still paid, so the FoF investor pays fees on gross gains that are offset elsewhere.

#### Multi-strategy hedge funds

* Teams running different strategies share operations and risk systems under one roof
* Advantages: **faster, more efficient reallocation** of capital and leverage, **full transparency** of positions and interactions, teams focus on investing; fee structure can be investor-friendly: the GP absorbs **netting risk** and investors pay incentive fees only on **total** fund performance (can cause discord and team departures). "Pass-through" model: no management fee, team costs passed through, plus a fund-level incentive fee (investor bears part of netting risk)
* Disadvantages: generally **higher leverage** (left-tail blow-ups, e.g., Ritchie Capital 2005), **operational risk concentrated** in one firm, limited by in-house talent; may be slow to exit in-house strategies

| | **Fund-of-funds** | **Multi-strategy** |
| --- | --- | --- |
| Returns | Lower; steady, low volatility | Generally **higher** but more variance, occasional large losses |
| Tactical reallocation | Slower | **Faster** |
| Transparency | Less | **Full** |
| Fees / netting risk | Two layers; investor bears netting risk | One layer; GP absorbs (most) netting risk |
| Strategy mix | Potentially more diverse | Limited to in-house talent |
| Operational risk | Diversified across funds | Concentrated in one firm |
| Leverage | Modest | Significantly higher |
| Liquidity | Similar lock-ups and redemption periods | Same, plus investor/fund-level gates |

FoF model under pressure since 2008 (fee compression, passive investing, liquid alts); multi-strategy funds have grown.

## Strategy Summary Table

| Strategy | Typical exposure / payoff | Leverage | Best environment | Key risks |
| --- | --- | --- | --- | --- |
| Long/short equity | 40%–60% net long | Variable (higher if quant) | Stock dispersion; rising markets | Embedded beta; poor market timing |
| Dedicated short / short-biased | 60%–120% short / 30%–60% net short | Low | Falling markets | Squeezes, borrow recall; lumpy returns |
| Equity market neutral | Beta ≈ 0; mean reversion | High (up to 300/300) | Non-trending, declining markets | Forced deleveraging; tail risk |
| Merger arbitrage | Bond + short put (+ call on White Knight) | 3–5× | Active M&A, calm markets | Deal failure (−20% to −40%), left tail |
| Distressed securities | Long-biased, binary | 1.2–1.7× | Early economic recovery | Illiquidity, mark-to-model, legal timing |
| Fixed-income arbitrage | Short put (carry + convergence) | 4–5× (12–15× in multi-strats) | Stable, liquid markets | Spread widening, margin calls, liquidity |
| Convertible arbitrage | Long vol (long convert, short delta) | 300% long / 200% short | High issuance, moderate vol, liquidity | Credit stress, borrow, vol compression |
| Global macro | Directional/thematic, anticipatory | 6–7× via derivatives | Trends, regime changes | Mean-reverting low vol; early timing |
| Managed futures | Trend following, positive skew | 6–7× notional | Trending markets, crises | Range-bound markets; crowding |
| Volatility (long) | Convex, right-skewed | Notional, asymmetric | Volatility spikes | Premium bleed, roll-down |
| Life settlements / cat reinsurance | Uncorrelated | — | Independent of markets | Longevity / catastrophe risk |
| FoF / multi-strategy | Diversified | Modest / high | — | Fees and netting / leverage and ops risk |

## Conditional Factor Risk Model

Strategies have unique factor exposures: L/S equity and event-driven → equity beta; arbitrage → credit spread and volatility tail risk; opportunistic → trendiness; relative value → mean reversion. A **conditional** model shows exposures that are insignificant in calm periods but become significant in crises.

$$
R_{i,t}=\alpha_i+\sum_{k=1}^{K}\beta_{i,k}F_{k,t}+\sum_{k=1}^{K}D_t\,\beta^{D}_{i,k}F_{k,t}+\varepsilon_{i,t}
$$

* $\beta_{i,k}$: exposure in **normal** times; $D_t\beta^D_{i,k}$: **incremental** exposure in crises ($D_t=1$ from June 2007 to February 2009, else 0). Total crisis exposure = normal + incremental
* Unexplained return = alpha (skill) + omitted factors + random error
* Candidate factors: SNP500 (equity), BOND (AA corporate bonds), USD (dollar index), CMDTY (GSCI), CREDIT (Baa − Aaa yield), VIX (change in VIX)
* **Stepwise regression** to avoid multicollinearity: (1) identify factors; (2) pairwise correlations in each state (>60% = highly correlated); (3) for a correlated pair, run the regression without each and keep the one giving higher **adjusted $R^2$**; (4) repeat. Result: **BOND and CMDTY dropped**; final factors SNP500, CREDIT, USD, VIX
* Databases (Lipper TASS, Morningstar CISDM, 2000–2016): about 80% of funds are **defunct** → include defunct funds to avoid **survivorship bias**

| Period / factor | Typical trend | Desired exposure | Why |
| --- | --- | --- | --- |
| SNP500 (normal) | Equities rising | **Positive** | Add risk, return |
| CREDIT (normal) | Spreads flat/narrowing | **Positive** | Add risk, return |
| USD (normal) | Flat/depreciating | **Negative** | Sell USD |
| VIX (normal) | Volatility falling | **Negative** | Sell volatility |
| DSNP500 (crisis) | Equities falling sharply | **Negative** | Reduce risk |
| DCREDIT (crisis) | Spreads widening | **Negative** | Reduce risk |
| DUSD (crisis) | USD appreciating | **Positive** | USD is a haven |
| DVIX (crisis) | Volatility rising | **Positive** | Volatility negatively correlated with equities |

**Findings:**

* L/S equity: highest mean return (TASS 11.30%) and highest SD (22.86%), but highest Sortino; EMN has the highest Sharpe. Average equity beta 0.24 (Europe) to 0.58 (US and US small cap); no significant incremental crisis beta, so total crisis beta stays positive (US L/S: $0.58+0.03=0.61$). EMN beta ~0.11
* Heterogeneity: 70%+ of L/S funds have significant positive equity exposure normally; in crises fewer than 40% change it (mixed signs). ~40% of some L/S funds turn **short volatility** (negative DVIX) in crises, which hurts
* Multi-strategy funds beat FoFs (mean 7.85% TASS / 8.52% CISDM; Rho > 20% → less liquid holdings → gates)
* FoFs (except macro/systematic) have positive equity beta (0.14–0.33); multi-manager funds as a group show **no crisis hedging** (no significantly negative DSNP500): diversification across hedge fund strategies did not reduce risk in 2007–09. Many FoF-equity funds went significantly negative on VIX (60%) and USD in crises

**Textbook example (BAM short-biased fund):** SNP500 −0.572 (significant), VIX −0.164 (significant → **short volatility**, perhaps selling puts), DSNP500 +0.236 → crisis equity beta $-0.572+0.236=-0.336$: still short, but **less** short in crises (harvesting shorts into weakness).

**Worked example (added, not from the textbook):** a fund has SNP500 beta 0.45, DSNP500 −0.30, VIX −0.10, DVIX +0.15. Normal: long equity, short volatility. Crisis: equity beta $0.45-0.30=0.15$ (de-risked), VIX $-0.10+0.15=+0.05$ (turns long volatility), which is the desired crisis profile.

## Portfolio contribution of hedge fund strategies

Add a **20%** allocation (equal-weighted funds in one category) to a **60/40** portfolio → **48/32/20**. 60/40 alone (2000–2016): mean 6.96%, SD 8.66%, Sharpe 0.62, Sortino 1.13, max drawdown 14.42%.

* Almost every strategy **lowers SD** and **raises Sharpe and Sortino** → hedge funds act as **risk-adjusted return enhancers and diversifiers**; max drawdown falls in about a third of cases
* Highest mean return: US small-cap L/S equity 7.53% (+57 bps), but SD 8.75% and drawdown 27.02%. Also >7.30%: fixed-income arbitrage (7.50%), distressed (7.40%), systematic futures (7.34%)
* Highest **Sharpe**: **systematic futures 0.83** (also lowest SD 6.94%, Sortino 1.68). High Sharpe also from distressed, FI arbitrage, global macro, EMN
* Best **Sortino**: EMN (TASS, 1.80), systematic futures, L/S equity hedge, event-driven (TASS)
* Lowest **SD** (risk reduction): systematic futures, FoF macro/systematic, EMN (short-biased lower still, but only 6 live funds)
* Smallest **max drawdown**: global macro (~5.1%), systematic futures, merger arbitrage (5.60%), EMN (4.99% CISDM) → little crisis equity/credit exposure and low Rho (liquid)
* Largest drawdowns: convertible arbitrage (31.81% TASS), US small-cap L/S, L/S equity, event-driven/distressed → equity risk plus crisis credit risk; little risk reduction
* FoFs and multi-manager funds **do not** enhance risk-adjusted performance much

> [!IMPORTANT]
> Sharpe uses total SD (penalizes upside and downside); **Sortino** uses downside deviation and is better for strategies with large negative events. Maximum drawdown = largest fall from a high-water mark to a subsequent low.

**Textbook example (Evergreen endowment: maximize risk-adjusted return, limit downside, keep liquidity, avoid fee layering):**

| 48/32/20 with | Mean | SD | Sharpe | Sortino | Max DD |
| --- | --- | --- | --- | --- | --- |
| 60/40 alone | 6.96 | 8.66 | 0.62 | 1.13 | 14.42 |
| US small-cap L/S | 7.53 | 8.75 | 0.68 | 1.23 | 27.02 |
| Event driven | 7.19 | 7.83 | 0.71 | 1.31 | 20.57 |
| Sovereign debt FI arbitrage | 7.50 | 7.82 | **0.75** | **1.39** | **12.68** |
| FoF – equity | 6.39 | 7.76 | 0.62 | 1.11 | 21.63 |

* **Least suitable: FoF–equity** (no Sharpe/Sortino gain, drawdown 50% higher, two layers of lock-ups and fees, netting risk)
* **Most suitable: sovereign debt FI arbitrage** (highest Sharpe and Sortino, lowest drawdown, liquid sovereigns, one fee layer)

## Quick Recall

* Hedge fund traits: light regulation, flexible mandate, wide universe, aggressive styles, leverage, lock-ups/gates, high fees; liquid alts: daily liquidity, no incentive fee, underperform by 100–200 bps.
* Six buckets: equity, event-driven, relative value, opportunistic, specialist, multi-manager.
* Payoffs: merger arb = bond + short put; FI arb = short put; convertible arb = long volatility (realized > implied); long vol = convex; managed futures = positive skew.
* Leverage: L/S variable, short-biased low, EMN high, merger arb 3–5×, distressed 1.2–1.7×, FI arb 4–5×, convert arb 300/200, macro/managed futures 6–7×.
* FoF: double fees, netting risk, access and diversification; multi-strategy: faster, transparent, GP bears netting risk, more leverage and ops risk.
* Conditional model: normal β + crisis dummy β; total crisis β = sum; stepwise regression on adjusted $R^2$; final factors SNP500, CREDIT, USD, VIX.
* 48/32/20: systematic futures best Sharpe and lowest SD; macro, managed futures, merger arb, EMN smallest drawdowns; convertible arb and L/S largest drawdowns; FoFs add little.
