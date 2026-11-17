# Hedge Funds

How hedge funds and their strategies are classified; the characteristics, implementation and portfolio role of equity, event-driven, relative value, opportunistic, specialist and multi-manager strategies; the conditional factor model used to uncover hedge fund risk exposures; and what a 20% hedge fund allocation does to a 60/40 portfolio. (2026 title: *Hedge Fund Strategies*.)

| Term | Meaning |
| --- | --- |
| **Liquid alts** | Mutual funds, closed-end funds and ETFs running hedge fund-like strategies |
| **Soft vs hard catalyst** | An event-driven position taken before an event is announced vs after (hard is less risky) |
| **Fulcrum security** | A partially in-the-money claim (not repaid in full) whose holders end up owning the reorganized company |
| **Stub trading** | Long or short a parent vs its subsidiaries, weighted by ownership |
| **TSM / CSM** | Time-series momentum (absolute; can be net long or short) / cross-sectional momentum (relative; about net zero) |
| **Netting risk** | A fund-of-funds investor pays incentive fees to winning funds even when the fund-of-funds as a whole is flat or down |
| **Sortino ratio** | Like the Sharpe ratio, but using **downside** deviation |
| **Rho** | First-order serial correlation; high Rho = smoothed returns = illiquid holdings |

## Characteristics

The core question: do the extra alpha and diversification justify the high fees?

* **Legal and regulatory**: access is limited to sophisticated investors with minimum income or wealth; US hedge funds are mostly private placements; offshore funds (Cayman, BVI, Bermuda) are stand-alone companies. They face far less regulation than regulated investment vehicles, **except liquid alts**.
* **Flexible mandates**, with few constraints (set out in the offering memorandum).
* **A large investment universe** (private securities, distressed debt, derivatives, life insurance contracts, royalties).
* **Aggressive styles** (shorting, concentrated positions, credit, volatility and liquidity risk premiums).
* **Fairly liberal leverage** (prime broker borrowing or derivatives; hedging derivatives can create high "notional leverage" with lower risk).
* **Liquidity constraints**: **lock-ups, liquidity gates and exit windows**.
* **High fees**: a management fee (historically 1%+ of AUM) and an incentive fee (10%–20% of returns).

> [!NOTE]
> **Liquid alts** (mainly long/short equity and managed futures) redeem daily, are marketed more widely to retail investors, and in most countries can't charge an incentive fee. They significantly **underperform** similar hedge funds (by about **100–200 bp a year**): the illiquidity premium doesn't carry over easily into a mutual fund format.

## Classification

* **Single manager**: one manager or team, one strategy.
* **Multi-manager**: **multi-strategy** funds (teams running different strategies in the **same fund**) and **funds-of-funds** (allocating to separate hedge funds).

Taxonomies combine (1) instruments, (2) trading philosophy (systematic vs discretionary), and (3) types of risk (directional, event-driven, relative value). Data vendors (HFR, Lipper TASS, Morningstar CISDM, Eurekahedge, Credit Suisse) use different categories and methods, and **less than 1%** of managers report to all of them, so no index covers everything.

* HFRX (equal-weighted, including funds closed to new money) regularly outperforms HFRI (open funds only), but can't be replicated in real time.
* The Credit Suisse Hedge Fund Index is AUM-weighted, so it reflects large funds (e.g., multi-strategy).

| Category | Strategies | Main risk |
| --- | --- | --- |
| Equity-related | Long/short equity; dedicated short and short-biased; equity market neutral | Equity market (beta) risk |
| Event-driven | Merger arbitrage; distressed securities | Event risk |
| Relative value | Fixed-income arbitrage; convertible bond arbitrage | Credit and liquidity risk |
| Opportunistic | Global macro; managed futures | Varies (top-down, multi-asset) |
| Specialist | Volatility trading; reinsurance and life settlements | Niche, unique risks |
| Multi-manager | Funds-of-funds; multi-strategy funds | A mix; manager selection |

## Equity-Related Strategies

### Long/Short Equity

* Buy undervalued and short overvalued stocks. The skill is mainly **stock selection**; market timing ("beta tilts") is secondary, and most managers do it poorly.
* About **30%** of all hedge funds.
* Factor exposures depend on focus (small-cap growth: +size, −value; large-cap value: −size, +value).
* Typically **40%–60% net long** (gross 70%–90% long vs 20%–50% short), aiming for long-only-like returns with about **50% less** volatility.
* Sector specialists (TMT, financials, health care, biotech) can build an information edge; generalists can reallocate across sectors but may miss industry nuances.
* Don't pay hedge fund fees for **embedded beta** you can get cheaply.
* Leverage: **variable**; the more market-neutral or quantitative, the more leverage.
* Vehicle: limited partnership, or a mutual fund (liquid alt).
* Attractions: liquid, diverse, transparent market prices; the short side reduces beta and adds alpha.

**Practice table (from earlier notes, not the 2026 textbook).** Gross exposure = long + short; net = long − short.

| Strategy | Long | Short | Cash | Gross | Net |
| --- | --- | --- | --- | --- | --- |
| Long only | 100 | 0 | 0 | 100 | 100 |
| 130/30 long extension | 130 | 30 | 0 | 160 | 100 |
| Market neutral (low risk) | 50 | 50 | 100 | 100 | 0 |
| Market neutral (high risk) | 100 | 100 | 100 | 200 | 0 |
| Directional (low risk) | 80 | 40 | 60 | 120 | 40 |
| Net short | 40 | 100 | 160 | 140 | −60 |

### Dedicated Short Selling and Short-Biased

* **Dedicated short**: short positions only, varying just the sizing and cash; **60%–120% short** at all times.
* **Short-biased**: short-side stock picking, balanced with some value- or index-oriented long exposure; about **30%–60% net short**.
* **Activist short selling**: take a short position, then publish the research (not manipulation in the US if the information is accurate, not sold, and in the LPs' interest).
* Targets: failing business models, fraudulent accounting, mismanagement, weak governance, excess leverage, single unproven products. Tools: CDS and bond spreads, put implied volatility, technicals, the **Altman Z-score** (bankruptcy) and the **Beneish M-score** (earnings manipulation).
* Difficulties: borrowing costs and recall risk; losing positions **grow** (the opposite of longs); management may block access; regulation (the US alternative uptick rule after a 10% fall; short-sale bans in the GFC).
* A lower return goal than other strategies, but **negatively correlated** with markets; more volatile than long/short equity; returns historically lumpy and disappointing.
* When short interest and borrowing costs are high, a squeeze is a risk: express the bearish view with puts or a short risk reversal instead of a short sale.
* Leverage: **low** (there's enough natural volatility). Vehicle: best as an **LP** (operationally complex). Benchmark: few managers; compare with the inverse of stock index returns.

### Equity Market Neutral

* Long and short similar stocks with divergent valuations, keeping portfolio **beta ≈ 0** (often also sector, size and value neutral): alpha without beta.
* Types: **pairs trading** (co-integrated pairs; mean reversion); **stub trading** (parent vs subsidiaries by ownership, e.g., short 1 A, buy 0.90 B and 0.75 C); **multi-class trading** (voting vs non-voting shares); **quantitative market neutral** and **statistical arbitrage** (frequent rebalancing, with models for the trading-cost hurdle).
* Four steps: (1) a tradable, liquid, shortable universe; (2) fundamental and/or statistical models for buy and sell signals; (3) construct the portfolio with beta (and dollar, sector, factor) neutrality; (4) consider the availability and cost of leverage, and rebalancing costs.
* Modest, steady returns with low volatility; useful in **non-trending or falling** markets; sometimes a substitute for or complement to fixed income when yields are low or the curve flat.
* Leverage: **high** (up to 300% long vs 300% short with portfolio margining). Key risk: the prime broker forces **downsizing** after a large drawdown; tail risk in stress (quant pairs can effectively be short volatility).
* Vehicle: **LP** (the leverage exceeds mutual fund limits).

**Example (pairs trade).** Long USD1,000,000 of Coca-Cola (beta 0.55), short PepsiCo (beta 0.65) with equal beta-weighted exposure:

$$
\text{Short PEP}=\frac{1{,}000{,}000}{0.65/0.55}=846{,}154
$$

Index weights don't matter.

## Event-Driven Strategies

These profit from corporate events (M&A, bankruptcy, issuance, buybacks, restructurings). A **soft-catalyst** position (anticipating an event) is riskier than a **hard-catalyst** one (reacting to an announced event).

### Merger Arbitrage

* **Cash deal**: buy the target. **Stock-for-stock**: buy the target and short the acquirer in the offer ratio. If expecting the deal to fail (e.g., antitrust): short the target, buy the acquirer.
* 70%–90% of announced US deals close; the spread is typically **3%–7%**; deals take 3–4 months, and capital is recycled with leverage → net annualized returns of about **7%–12%**, with little correlation to other factors.
* A failed deal loses **20%–40%** → left-tail risk; deals fail more often in stress → some market sensitivity.
* Payoff = a **riskless bond + a short put** (selling insurance on the deal), plus a **long call** if a white knight bids higher.
* Cross-border and vertical deals have more regulatory risk and wider spreads; hostile deals have wider spreads.
* Instruments: equities, plus preferreds, debt, convertibles (the bond floor cushions a failure), options (OTM puts on the target, OTM calls on the acquirer), and CDS (sell protection on the target if the acquirer's credit is better); index hedges for market risk.
* Alpha comes from **choosing which deals** to do.
* Leverage: **moderate to high, 3–5×**. Vehicle: mostly LPs; some low-leverage liquid alts exist.
* Attraction: a high Sharpe ratio (low double-digit return, mid-single-digit volatility), with left-tail risk.

**Example.** Acquirer A, trading at USD45, offers 1 A share for 2 target T shares; T jumps from USD15 to USD19, and A falls to USD42. Buy 20,000 T (USD380,000) and short 10,000 A (+USD420,000).

* The deal closes: net spread **+USD40,000**.
* The deal fails (prices revert): the A short loses 420,000 − 450,000 = −30,000; the T long loses 300,000 − 380,000 = −80,000 → **−USD110,000**.
* So the position = a riskless bond paying USD40,000 + a short binary put paying out USD110,000 if the deal fails.

### Distressed Securities

* Companies in or near bankruptcy, or under financial stress. Their securities are often dumped by institutions that can't hold below-investment-grade debt → discounts to their workout value.
* **Liquidation**: assets are sold and claims paid by priority (senior secured → junior secured → unsecured → convertible → preferred → common). Buy debt priced below your recovery estimate (e.g., senior secured at 50% of par, with an expected 75% recovery); there's timing risk if the process drags.
* **Reorganization**: the capital structure is renegotiated; debt may become new equity (the old equity is canceled). Active managers seek control through **fulcrum securities**, then exit (e.g., by IPO) after the turnaround.
* **Capital structure arbitrage**: long securities with good recovery prospects, short those with poor ones (e.g., in 2015–16 energy: long junior unsecured debt, short still-overvalued equity, or buy puts).
* Long lock-ups (e.g., two years) and gates; hard-to-value Level 3 assets with **mark-to-model smoothing**.
* Returns at the higher end of event-driven, but more variable; **long-biased**, lumpy and cyclical, with binary outcomes; most attractive **early in an economic recovery**.
* Leverage: **moderate to low, 1.2–1.7× NAV**.

## Relative Value Strategies

These exploit relative mispricing driven by credit quality, liquidity and implied volatility. They earn credit, liquidity or volatility premiums in normal times, and lose in crises (leverage, credit deterioration, illiquidity, volatility spikes).

### Fixed-Income Arbitrage

* Long relatively cheap and short relatively rich debt securities (sovereigns, corporates, loans, MBS and ABS); mispricings come from duration, credit, liquidity, optionality and issue size. Often **duration-neutral** (derivatives hedge large or non-parallel moves); taking issuer credit views turns it into long/short credit (more volatile).
* **Yield curve trades** (flattening or steepening) and **carry trades** (long higher-yielding, short lower-yielding).
* The classic trade: long **off-the-run** and short duration-matched **on-the-run** Treasuries → rate and credit risk hedged, **liquidity risk** left. The payoff resembles a **short put**: carry plus convergence, but losses (and margin calls under leverage) if the spread widens.
* Mortgages and structured products add negative convexity, default and prepayment risk.
* Leverage: **high**, typically **4–5×** (up to 12–15× in some multi-strategy funds), through repo with **haircuts**; available leverage falls as product complexity rises.
* Liquidity: US government curve trades are very liquid but have the fewest mispricings; liquidity falls in other sovereigns, mortgages and especially corporates.

**Example (TIPS vs Treasuries in distress).** Buy 5-year TIPS (receive 3.74% + inflation), short 5-year Treasuries (pay 2.56%), and enter an inflation swap (receive 1.36% fixed, pay inflation) → net **receive 2.54%**, at zero net cost. Nearly risk-free, but it needs repo access to borrow the Treasuries and bank credit lines for the swap (both shrink in crises), and the borrowed bonds could be recalled.

### Convertible Bond Arbitrage

* A convertible = a straight bond + a call on the stock. Conversion value = share price × conversion ratio; conversion price = convertible price ÷ conversion ratio.
* The embedded options are cheap (**low implied volatility**): convertibles are complex, thinly traded, often unrated, with few covenants, and cheaper when issuance is heavy.
* The classic trade: **long the convertible, short delta × shares** (delta is near 1 if in the money, near 0 if out). The convertible has **positive gamma**, so rebalancing sells stock high and buys it low; the trade profits if **realized volatility exceeds implied volatility** (net of costs).
* Other risks can be hedged or kept: rates (rate derivatives), credit (CDS), equity (short stock or puts). Styles: credit-oriented (credit unhedged), long-biased (equity underhedged), volatility-oriented (equity overhedged).
* Risks: a short squeeze or recall of borrowed shares, credit spread moves, time decay, falling implied volatility.
* Works best with **heavy issuance, moderate volatility and ample liquidity**; does poorly in credit stress and illiquidity (hedge funds are the natural market makers, and face redemptions → left-tail risk).
* Leverage: **high**, typically **300% long vs 200% short** (the short is delta-adjusted).

**Example (QXR).** The convertible trades at 120% of par = €1,200, with a conversion ratio of 50 → conversion price **€24**, vs a share price of €30 (the stock is also 50% rich on P/E, P/BV and P/CF) → buy the convertible, short the shares.

| QXR share price | Long stock via the convertible | Short stock | Total |
| --- | --- | --- | --- |
| 24 | 0 | +6 | **+6** |
| 30 | +6 | 0 | **+6** |
| 36 | +12 | −6 | **+6** |

Adding carry: borrowing cost €2 + dividend paid €1 = −€3 per share; coupon €50 ÷ 50 shares = +€1 → profit **€4 per share**.

## Opportunistic Strategies

Top-down and multi-asset. Classified by analysis (fundamental vs technical), implementation (**discretionary**, prone to behavioral biases, vs **systematic**, which struggles with new situations and crowding as trend-following AUM grows) and instruments.

### Global Macro

* Views on economies, central banks, yield curves, inflation, PPP and capital flows, expressed through futures, forwards, swaps and options on currencies, rates, equity indexes and commodities (by theme, region or style).
* Often **anticipatory and contrarian**, positioning early (e.g., long CDS on subprime from 2006 paid off in 2007–08). Managers are heterogeneous, so it's less dependable "short alpha" than trend-following managed futures, and needs due diligence on current exposures.
* Directional, or thematic and relative value views.
* Returns come from correctly anticipating **trends**; low-volatility, **mean-reverting** markets are its bane (the QE era). Lumpy returns, higher volatility.
* Leverage: high, through derivatives: a margin-to-equity ratio of **15%–25%** controls **6–7×** the fund's assets. Many positions diversify less than in long/short equity, because "risk-on/risk-off" makes assets move together.

### Managed Futures

* Futures, options on futures, forwards and swaps on indexes, rates, commodities and currencies (some exotic: weather, carbon).
* Low correlation with stocks and bonds, and **positive skew** in stress (2007–09: short equity futures, long bond futures), which balances negatively skewed strategies.
* Very **cyclical**: hurt in range-bound, mean-reverting markets (2011–2018); near-zero yields change how bond trends diversify.
* Highly liquid (E-mini S&P futures trade 3–4× SPY's dollar volume). Margin is 0.1%–10% of notional, vs 50% for US stocks → built-in leverage; **85%–90%** of capital sits in T-bills as collateral, 10%–15% posted as margin.
* Signals: momentum or trend and breakouts, plus volatility; several horizons combined (longer ones weighted more); carry and volatility factors for sizing; **higher volatility or higher correlation → smaller positions**. Exits by price target, momentum reversal, time, or trailing stop. Avoid **overfitting**; signals decay as they get crowded.
* **Time-series momentum** (TSM): long assets with positive past returns, short those with negative → can be **net long or net short**; works when an asset's own past predicts its future.
* **Cross-sectional momentum** (CSM): long relative winners, short relative losers within an asset class → about **net zero**; works when relative performance persists; limited by the number of contracts.

| | Global macro | Managed futures |
| --- | --- | --- |
| Approach | Mostly **discretionary**, fundamental | Mostly **systematic**, trend-following, technical |
| Liquidity | Highly liquid; less crowding (heterogeneous) | Highly liquid; crowding and slippage as AUM grew |
| In stress | Diversifies, but outcomes vary; can be early | **Positive right-tail skew** |
| Volatility | High end of hedge funds; cyclical | High end; rises with the time horizon |
| Leverage | High; options add convexity | High; 6–7× notional with 10%–20% margin-to-equity |

## Specialist Strategies

### Volatility Trading

* **Relative value volatility arbitrage**: buy cheap volatility, sell expensive volatility, net out time decay. E.g., **time-zone arbitrage** (yen options are cheaper during Asian hours) and **cross-asset** volatility (Nikkei implied volatility cheaper than the S&P 500's despite higher realized volatility). Asian structured products make Asian volatility cheap; Western investors overpay for OTM protection.
* **Long volatility**: equity volatility is about **80% negatively correlated** with equity returns → a diversifier, at the cost of the premium. **Short volatility** earns the volatility risk premium (selling crisis insurance).
* Instruments:
  * **Exchange-traded options** (up to about 2 years; longer-dated → more **vega**, shorter-dated → more **gamma**). Watch the term structure (usually upward-sloping; inverts in a crisis), smile and skew (OTM puts are priciest). Gamma requires delta hedging.
  * **OTC options**: custom tenors and strikes, but counterparty and liquidity risk.
  * **VIX futures and options**: a pure volatility view without delta hedging, but strong **mean reversion** and **roll-down** (an upward-sloping volatility curve → accelerating negative theta).
  * **Volatility and variance swaps**: forwards on realized volatility or variance, struck so that their value is zero at inception; "pure", long-dated, tailored exposure, with ISDA/CSA counterparty risk; access often needs about USD100m of AUM.
* Long volatility is **convex** (a right-skewed payoff: a small premium for potential multiples), but suffers roll-down and premium bleed.
* Leverage: notionally levered, but asymmetric. Hard to benchmark (CBOE Eurekahedge long, short, relative value and tail risk volatility indexes).

### Reinsurance and Life Settlements

* **Life settlements**: buy life insurance policies from their holders (through brokers) for more than the surrender value; the fund pays the ongoing premiums and receives the death benefit. Look for (1) a low surrender value offered, (2) low ongoing premiums and (3) a high probability that the insured dies earlier than standard actuarial estimates. It succeeds when PV(death benefit) > PV(lump sum + premiums). It needs biometric and actuarial expertise, and returns are **uncorrelated** with financial markets.
* **Catastrophe reinsurance**: provide capital to reinsurers against floods, hurricanes and earthquakes. Needs geographic and policy diversity, a loss reserve buffer and enough premium income; uses cat bonds and cat futures (issued seasonally before the hurricane season).

## Multi-Manager Strategies

There are three ways to combine strategies: build your own mix, a **fund-of-funds**, or a **multi-strategy** fund.

### Funds-of-Funds

* Roles: diversification across strategies, tactical reallocation, manager selection and due diligence, monitoring and consolidated reporting; access to closed funds, economies of scale, currency hedging, portfolio-level leverage and better liquidity terms.
* An access vehicle for smaller investors: hedge fund minimums are USD500k–5m (typically USD1m), so 15–20 managers need USD15–20m, while a fund-of-funds minimum can be about USD100k.
* Its size lets a fund-of-funds negotiate fee breaks, better liquidity terms, rights to future capacity, more transparency, and a commitment to the best terms offered to any future investor.
* Process: source managers (databases, capital introduction events) → strategic allocation → screen peer groups, interviews, AIMA due diligence questionnaires, on-site visits → operational due diligence (offering memorandum, LPA, service providers) → monitor style drift, personnel and regulatory issues.
* Disadvantages: a **double layer of fees** (historically 1%/10% on top of 1%–2%/10%–20%; now often 50 bp/5% or 1% flat); less transparency; **netting risk**; an extra principal–agent layer; a liquidity mismatch (the fund-of-funds offers monthly or quarterly liquidity after a 1-year lock-up, while underlying funds may gate) → stagger investments, and keep a credit line as backstop.

**Example (Squaw Valley fund-of-funds, 1%/10% on two funds charging 2%/20%; fees at year-end; no compounding).** Both funds earn 20% gross:

$$
\begin{aligned}
\text{Underlying net}&=20\%-2\%\\
&\quad-20\%(20\%-2\%)\\
&=14.4\%
\end{aligned}
$$

$$
\begin{aligned}
\text{FoF net}&=14.4\%-1\%\\
&\quad-10\%(14.4\%-1\%)\\
&=12.06\%
\end{aligned}
$$

Fees take (2 + 3.6 + 1 + 1.34)/20 = **39.7%** of the gross return.

If one fund earns 20% and the other loses 5%:

* The winner nets 14.4%; the loser nets −5% − 2% − 0 = −7.0%; the fund-of-funds gross return = 0.5 × 14.4% + 0.5 × (−7.0%) = 3.7%.
* Fund-of-funds net = 3.7% − 1% − 10% × (3.7% − 1%) = **2.43%**.
* Fees take {0.5 × (2 + 3.6 + 2 + 0) + (1 + 0.27)}/7.5 = **67.6%** of the 7.5% gross return → **netting risk**.

> [!IMPORTANT]
> Incentive fees are charged on gains **after** the management fee. A losing fund pays no incentive fee, but the winning fund's incentive fee is still paid, so the fund-of-funds investor pays fees on gains that are offset elsewhere.

### Multi-Strategy Funds

* Teams running different strategies share operations and risk systems under one roof.
* Advantages: **faster, more efficient reallocation** of capital and leverage; **full transparency** of positions and how they interact; teams can focus on investing. Fees can be investor-friendly: the GP absorbs **netting risk**, and investors pay incentive fees only on **total** fund performance (which can cause friction and team departures). Under the "pass-through" model, there's no management fee, team costs are passed through, plus a fund-level incentive fee (investors bear part of the netting risk).
* Disadvantages: generally **higher leverage** (left-tail blow-ups, e.g., Ritchie Capital, 2005); **operational risk concentrated** in one firm; limited to in-house talent; may be slow to exit in-house strategies.

| | Fund-of-funds | Multi-strategy |
| --- | --- | --- |
| Returns | Lower; steady, low volatility | Generally **higher**, more variable, occasional large losses |
| Tactical reallocation | Slower | **Faster** |
| Transparency | Less | **Full** |
| Fees and netting risk | Two layers; investor bears netting risk | One layer; the GP absorbs (most) netting risk |
| Strategy mix | Potentially more diverse | Limited to in-house talent |
| Operational risk | Diversified across funds | Concentrated in one firm |
| Leverage | Modest | Significantly higher |
| Liquidity | Similar lock-ups and redemption periods | The same, plus investor- and fund-level gates |

The fund-of-funds model has been under pressure since 2008 (fee compression, passive investing, liquid alts), while multi-strategy funds have grown.

## Strategy Summary

| Strategy | Typical exposure or payoff | Leverage | Best environment | Key risks |
| --- | --- | --- | --- | --- |
| Long/short equity | 40%–60% net long | Variable (higher if quant) | Stock dispersion; rising markets | Embedded beta; poor market timing |
| Dedicated short / short-biased | 60%–120% short / 30%–60% net short | Low | Falling markets | Squeezes, borrow recall; lumpy returns |
| Equity market neutral | Beta ≈ 0; mean reversion | High (up to 300/300) | Non-trending or falling markets | Forced deleveraging; tail risk |
| Merger arbitrage | Bond + short put (+ call on a white knight) | 3–5× | Active M&A, calm markets | Deal failure (−20% to −40%); left tail |
| Distressed securities | Long-biased, binary | 1.2–1.7× | Early recovery | Illiquidity, mark-to-model, legal timing |
| Fixed-income arbitrage | Short put (carry + convergence) | 4–5× (12–15× in multi-strategy funds) | Stable, liquid markets | Spread widening, margin calls, liquidity |
| Convertible arbitrage | Long volatility (long convertible, short delta) | 300% long / 200% short | Heavy issuance, moderate volatility, liquidity | Credit stress, borrow, falling volatility |
| Global macro | Directional or thematic; anticipatory | 6–7× through derivatives | Trends, regime changes | Low-volatility, mean-reverting markets; early timing |
| Managed futures | Trend-following; positive skew | 6–7× notional | Trending markets, crises | Range-bound markets; crowding |
| Long volatility | Convex, right-skewed | Notional, asymmetric | Volatility spikes | Premium bleed, roll-down |
| Life settlements / cat reinsurance | Uncorrelated | — | Independent of markets | Longevity / catastrophe risk |
| Fund-of-funds / multi-strategy | Diversified | Modest / high | — | Fees and netting / leverage and operational risk |

## Conditional Factor Risk Model

Each strategy has its own factor exposures: long/short equity and event-driven → equity beta; arbitrage → credit spreads and volatility tail risk; opportunistic → trendiness; relative value → mean reversion. A **conditional** model reveals exposures that are insignificant in calm periods but become significant in crises:

$$
\begin{aligned}
R_{i,t}={}&\alpha_i+\sum_{k=1}^{K}\beta_{i,k}F_{k,t}\\
&+\sum_{k=1}^{K}D_t\,\beta^{D}_{i,k}F_{k,t}+\varepsilon_{i,t}
\end{aligned}
$$

* $\beta_{i,k}$ is the exposure in **normal** times; $D_t\beta^D_{i,k}$ the **extra** exposure in crises ($D_t$ = 1 from June 2007 to February 2009, else 0). Total crisis exposure = normal + extra.
* The unexplained return = alpha (skill) + omitted factors + random error.
* Candidate factors: SNP500 (equities), BOND (AA corporate bonds), USD (dollar index), CMDTY (GSCI), CREDIT (Baa − Aaa yield), VIX (change in the VIX).
* **Stepwise regression** avoids multicollinearity: (1) identify factors; (2) check pairwise correlations in each state (above 60% = highly correlated); (3) for a correlated pair, run the regression without each, and keep the one giving the higher **adjusted $R^2$**; (4) repeat. Result: **BOND and CMDTY were dropped**; the final factors are SNP500, CREDIT, USD and VIX.
* In the databases (Lipper TASS, Morningstar CISDM, 2000–2016), about 80% of funds are **defunct**; include them to avoid **survivorship bias**.

| Factor and period | Typical trend | Desired exposure | Why |
| --- | --- | --- | --- |
| SNP500 (normal) | Equities rising | **Positive** | Add risk and return |
| CREDIT (normal) | Spreads flat or narrowing | **Positive** | Add risk and return |
| USD (normal) | Flat or falling | **Negative** | Sell USD |
| VIX (normal) | Volatility falling | **Negative** | Sell volatility |
| DSNP500 (crisis) | Equities falling sharply | **Negative** | Reduce risk |
| DCREDIT (crisis) | Spreads widening | **Negative** | Reduce risk |
| DUSD (crisis) | USD rising | **Positive** | The USD is a haven |
| DVIX (crisis) | Volatility rising | **Positive** | Volatility is negatively correlated with equities |

**Findings.**

* Long/short equity had the highest mean return (TASS 11.30%) and volatility (22.86%), but the highest Sortino ratio; equity market neutral had the highest Sharpe ratio. Average equity betas ranged from 0.24 (Europe) to 0.58 (US and US small cap), with no significant extra crisis beta, so the total crisis beta stayed positive (US long/short: 0.58 + 0.03 = 0.61). Equity market neutral's beta was about 0.11.
* Funds differ: over 70% of long/short funds have significant positive equity exposure in normal times; in crises, fewer than 40% change it (with mixed signs). About 40% of some long/short funds turn **short volatility** (negative DVIX) in crises, which hurts.
* Multi-strategy funds beat funds-of-funds (mean 7.85% TASS, 8.52% CISDM), though Rho above 20% signals less liquid holdings → gates.
* Funds-of-funds (except macro or systematic) have positive equity betas (0.14–0.33), and multi-manager funds as a group show **no crisis hedging** (no significantly negative DSNP500): diversifying across hedge fund strategies didn't reduce risk in 2007–09. Many equity funds-of-funds turned significantly negative on VIX (60%) and USD in crises.

**Example (BAM short-biased fund).** SNP500 −0.572 (significant); VIX −0.164 (significant → **short volatility**, perhaps from selling puts); DSNP500 +0.236 → crisis equity beta = −0.572 + 0.236 = **−0.336**: still short, but **less** short in crises (taking profits on shorts into weakness). The desired crisis profile: equity beta falls (negative DSNP500) and volatility exposure turns positive (positive DVIX).

## Adding Hedge Funds to a Portfolio

Add a **20%** allocation (equal-weighted funds in one category) to a **60/40** portfolio → **48/32/20**. The 60/40 portfolio alone (2000–2016): mean 6.96%, volatility 8.66%, Sharpe 0.62, Sortino 1.13, maximum drawdown 14.42%.

* Almost every strategy **lowers volatility** and **raises the Sharpe and Sortino ratios** → hedge funds act as **risk-adjusted return enhancers and diversifiers**; maximum drawdown falls in about a third of cases.
* Highest mean return: US small-cap long/short equity, 7.53% (+57 bp), but with volatility of 8.75% and a 27.02% drawdown. Also above 7.30%: fixed-income arbitrage (7.50%), distressed (7.40%), systematic futures (7.34%).
* Highest **Sharpe ratio**: **systematic futures, 0.83** (also the lowest volatility, 6.94%, and a Sortino of 1.68). High Sharpe ratios also from distressed, fixed-income arbitrage, global macro and equity market neutral.
* Best **Sortino ratio**: equity market neutral (TASS, 1.80), systematic futures, long/short equity hedge, event-driven (TASS).
* Lowest **volatility**: systematic futures, macro or systematic funds-of-funds, equity market neutral (short-biased was lower still, but with only 6 live funds).
* Smallest **maximum drawdowns**: global macro (about 5.1%), systematic futures, merger arbitrage (5.60%), equity market neutral (4.99% CISDM) → little crisis equity or credit exposure, and low Rho (liquid).
* Largest drawdowns: convertible arbitrage (31.81% TASS), US small-cap long/short, long/short equity, event-driven and distressed → equity risk plus crisis credit risk; little risk reduction.
* Funds-of-funds and multi-manager funds **don't** improve risk-adjusted performance much.

> [!IMPORTANT]
> The Sharpe ratio uses total volatility (penalizing upside and downside alike); the **Sortino** ratio uses downside deviation, so it's better for strategies with large negative events. Maximum drawdown is the largest fall from a high-water mark to a later low.

> [!NOTE]
>
> **Textbook issue.** The text says HFR divides funds into "six single strategy groupings", then lists **seven** (equity hedge, event driven, fund-of-funds, macro, relative value, risk parity, blockchain).
