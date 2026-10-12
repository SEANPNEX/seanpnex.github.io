<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover,
.blur-hover:focus-within {
    filter: none;
}
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 480px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
.fx-concept-chart.parity-chart { height: 600px; }
.fx-concept-chart.overshoot-chart { height: 820px; }
.fx-concept-chart.portfolio-chart { height: 680px; }
.fx-concept-chart.models-chart { height: 560px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 540px; }
    .fx-concept-chart.parity-chart { height: 790px; }
    .fx-concept-chart.overshoot-chart { height: 1180px; }
    .fx-concept-chart.portfolio-chart { height: 980px; }
    .fx-concept-chart.models-chart { height: 900px; }
}
</style>

# Currency Exchange Rates

An exchange-rate problem becomes much easier once the quote convention is fixed. Throughout this module,

$$
A/B
$$

means **units of price currency $A$ per one unit of base currency $B$**. Thus, CNY/USD = 7.00 means USD 1 costs CNY 7.00.

## Exchange-Rate Calculations

### Basic FX Notation

- The **spot rate** is the exchange rate for immediate delivery under market convention.
- A **forward rate** is agreed today for exchanging currencies at a specified future date.
- A dealer's quote is written **bid–ask**. The bid is always below the ask.
- At the bid, the dealer buys the base currency; at the ask, the dealer sells the base currency.
- A customer who sells the base currency **hits the bid**. A customer who buys the base currency **pays the ask**.

For a quote $A/B=b-a$:

| Customer action | Dealer action | Rate used |
| --- | --- | --- |
| Sell $B$, receive $A$ | Dealer buys base currency $B$ | Bid $b$ |
| Buy $B$, pay $A$ | Dealer sells base currency $B$ | Ask $a$ |

The bid–ask spread compensates the dealer for operating costs, inventory risk, adverse selection, and market risk. FX spreads are commonly stated in **pips**. For most currency pairs, one pip is 0.0001; for many JPY pairs, it is 0.01. The applicable convention depends on how the pair is quoted.

Client spreads are generally wider than interbank spreads and depend on liquidity, transaction size, client relationship, time of day, and market volatility. A larger trade does not mechanically imply a wider percentage spread: market depth and the dealer's ability to hedge also matter.

### Inverting a Quote

When a quote is inverted, the bid and ask switch sides:

$$
(B/A)_{bid}=\frac{1}{(A/B)_{ask}},
\qquad
(B/A)_{ask}=\frac{1}{(A/B)_{bid}}.
$$

This preserves the rule that the bid remains below the ask.

### Cross Rates

Arrange the currency ratios so that the unwanted currency cancels. For example,

$$
\frac{KRW}{CNY}
=
\frac{KRW}{USD}\times\frac{USD}{CNY}.
$$

If no quote must be inverted, multiply bid by bid and ask by ask:

$$
(A/B)_{bid}=(A/C)_{bid}(C/B)_{bid},
$$

$$
(A/B)_{ask}=(A/C)_{ask}(C/B)_{ask}.
$$

If a quote is inverted, first apply the reciprocal bid–ask rule above. The safest exam method is to write the currency units explicitly and check that they cancel.

#### Example

$CHF/USD=1.5960\text{–}1.5970$ and $AUD/USD=1.7225\text{–}1.7235$. Calculate $AUD/CHF$.

<span class="blur-hover" tabindex="0">

Because

$$
\frac{AUD}{CHF}
=
\frac{AUD}{USD}\times\frac{USD}{CHF},
$$

the CHF/USD quote must be inverted. For the cross-rate bid, sell CHF and receive AUD, so use the AUD/USD bid and CHF/USD ask:

$$
(AUD/CHF)_{bid}
=\frac{1.7225}{1.5970}
=1.0786.
$$

For the ask, use the AUD/USD ask and CHF/USD bid:

$$
(AUD/CHF)_{ask}
=\frac{1.7235}{1.5960}
=1.0799.
$$

Therefore,

$$
AUD/CHF=1.0786\text{–}1.0799.
$$

</span>

#### Example

A dealer quotes $AUD/GBP=1.5060\text{–}1.5067$. Compute the proceeds from converting GBP 1 million into AUD and from converting AUD 1 million into GBP.

<span class="blur-hover" tabindex="0">

GBP is the base currency. A customer converting GBP into AUD sells GBP to the dealer and receives the bid:

$$
GBP\ 1{,}000{,}000\times1.5060
=AUD\ 1{,}506{,}000.
$$

A customer converting AUD into GBP buys GBP from the dealer and therefore pays the ask:

$$
\frac{AUD\ 1{,}000{,}000}{1.5067}
=GBP\ 663{,}702.13.
$$

</span>

### Triangular Arbitrage

Triangular arbitrage is possible when a dealer's direct cross-rate quote is inconsistent with the no-arbitrage cross rate implied by two other currency pairs. The trade must be checked using executable bid and ask prices, not mid-market rates.

For the same currency pair:

- if a dealer's ask is below another market's bid, buy the base currency from the dealer and sell it in the other market;
- if a dealer's bid is above another market's ask, buy the base currency in the other market and sell it to the dealer.

#### Example

The spot rates are $JPY/USD=105.39\text{–}105.41$ and $CAD/USD=1.3199\text{–}1.3200$. A dealer quotes $JPY/CAD=79.81\text{–}79.83$. Does triangular arbitrage exist?

<span class="blur-hover" tabindex="0">

The implied cross rate is

$$
\frac{JPY}{CAD}
=
\frac{JPY/USD}{CAD/USD}.
$$

Therefore,

$$
(JPY/CAD)_{bid}=\frac{105.39}{1.3200}=79.8409,
$$

$$
(JPY/CAD)_{ask}=\frac{105.41}{1.3199}=79.8621.
$$

The dealer will sell CAD at JPY 79.83, while the interbank market will buy CAD at JPY 79.8409. Because

$$
79.83<79.8409,
$$

an arbitrage exists: buy CAD from the dealer for JPY 79.83 per CAD and immediately sell CAD at the interbank bid of JPY 79.8409 per CAD. The gross profit is JPY 0.0109 per CAD before transaction costs and position-size constraints.

</span>

### Forward Exchange Rates

Forward points are added to or subtracted from the corresponding spot bid and ask. Maintain a valid spread after the adjustment.

For a quote $A/B$:

- if $F_{A/B}>S_{A/B}$, the base currency $B$ trades at a forward premium and the price currency $A$ at a forward discount;
- if $F_{A/B}<S_{A/B}$, the base currency trades at a forward discount and the price currency at a forward premium.

The percentage forward premium on the base currency for a contract of $n$ days is approximately

$$
\left(\frac{F_{A/B}}{S_{A/B}}-1\right)\frac{360}{n}.
$$

### Mark-to-Market Value of a Forward

The mark-to-market value is the present value of the net cash flow created by offsetting the original forward at the current forward rate for the remaining maturity. It is a **value**, not merely a return.

Steps:

1. Identify the original currency cash flows at settlement.
2. Enter an equal and opposite forward for the remaining maturity.
3. Use the correct current forward bid or ask for that offsetting transaction.
4. Net the two settlement cash flows.
5. Discount the net amount using the interest rate of the currency in which that cash flow is denominated.

#### Example

**Ted Black originally bought USD 1 million forward at AUD/USD 1.05358.** The contract originally had 90 days to maturity. After 30 days, the following information is available:

| Maturity | AUD/USD rates | Interest rate at $t=30$ |
| --- | --- | --- |
| Spot | 1.0612 / 1.0614 | 60-day AUD rate: 1.16% |
| 60-day | +8.6 / +9.0 points | — |

What is the mark-to-market value of Black's forward contract in AUD?

<span class="blur-hover" tabindex="0">

Black will receive USD and pay AUD under the original contract. To offset it, he must sell USD forward and receive AUD, so he uses the current 60-day forward **bid**:

$$
1.0612+0.00086=1.06206.
$$

The settlement cash flows are:

- original contract: receive USD 1 million and pay AUD 1.05358 million;
- offsetting contract: pay USD 1 million and receive AUD 1.06206 million;
- net settlement inflow: AUD $1{,}062{,}060-1{,}053{,}580=8{,}480$.

Discount the AUD cash flow for the remaining 60 days:

$$
V_{t=30}
=\frac{8{,}480}{1+0.0116(60/360)}
=AUD\ 8{,}463.64.
$$

The value is positive because the current forward market allows Black to sell the USD he will receive for more AUD than he originally agreed to pay.

</span>

## Factors Affecting Exchange Rates

Exchange rates respond to relative—not standalone—economic conditions. The effects below assume other relevant factors are held constant and can differ across horizons.

## International Parity Conditions

<iframe
  class="fx-concept-chart"
  src="/charts/currency-exchange-concepts.html?view=parity"
  title="Connections among international parity conditions"
  loading="lazy"
></iframe>

<iframe
  class="fx-concept-chart parity-chart"
  src="/charts/international-parity-conditions.html"
  title="Relationship map of international parity conditions"
  loading="lazy"
></iframe>

| Condition | Links | Central implication |
| --- | --- | --- |
| Covered interest-rate parity (CIRP) | Spot, forward, and interest rates | No arbitrage for a fully hedged investment |
| Uncovered interest-rate parity (UIRP) | Expected spot change and interest rates | Expected currency change offsets the yield differential |
| Forward-rate parity | Forward and expected future spot | Follows if CIRP and UIRP both hold |
| Purchasing power parity (PPP) | Exchange rates and price levels/inflation | Currency values adjust to relative purchasing power |
| Fisher effect | Nominal rates, real rates, and expected inflation | Nominal rates compensate for real returns and inflation |
| Real interest-rate parity | Real rates across countries | Follows jointly from UIRP, ex-ante PPP, and Fisher relations |

### Covered Interest-Rate Parity

**CIRP** states that an investment in a foreign money market instrument that is completely hedged against exchange rate tisk should yield exactly the same return as an otherwise identical domestic money market investment. 

Let $S_{f/d}$ and $F_{f/d}$ be units of foreign currency per unit of domestic currency. A domestic money-market investment and a fully hedged foreign investment must provide the same domestic-currency payoff:

$$
1+i_d
=
\frac{S_{f/d}(1+i_f)}{F_{f/d}}.
$$

Therefore,
$$
F_{f/d}
=S_{f/d}\frac{1+i_f}{1+i_d}.
$$

> [!Note]
>
> For maturities shorter than one year, use rates scaled to the appropriate horizon. 

**Lemma** If $i_f>i_d$, then $F_{f/d}>S_{f/d}$.

It is inferred from:
$$
\begin{align}
&F_{f/d} = S_{f/d}(\frac{1+i_f}{1+1_d})\\
&\frac{F_{f/d}}{S_{f_d}}-1=(\frac{1+i_f}{1+i_d})-1\\
&\frac{F_{f/d}-S_{f/d}}{S_{f/d}} = \frac{i_f-i_d}{1+1_d}
\end{align}
$$
From this formula we can learn that the change rate in exchange rate $\Delta {f/d}\%$ is nearly equals to the change in interest rate $\Delta i$. Then the lemma can be inferred. 

### Uncovered Interest-Rate Parity

**UIRP** states that the expected return advantage of a higher-yielding currency is offset by its expected depreciation. It is basically the same formula as **CIRP**, replacing the covered forward rate $F_{f/d}$ with a expectation value.

In the current convention, the approximate relation is
$$
E(\%\Delta S_{f/d})
\approx i_f-i_d.
$$

Thus, when the foreign interest rate exceeds the domestic rate, $S_{f/d}$ is expected to rise: the domestic base currency is expected to appreciate and the higher-yielding foreign price currency to depreciate.

For an $n$-day horizon using annualized money-market rates,

$$
E(\%\Delta S_{f/d})
\approx \frac{n}{360}(i_f-i_d).
$$

**UIRP** is an equilibrium expectation, not a riskless arbitrage condition. It often fails over shorter horizons.

**Lemma** In domestic currency term, the investment return on an uncovered foreign currency denominated investment is equal to:
$$
(1+i_f)(1-\%\Delta S_{f/d}^e)-1=i_d\\\simeq i_f-\%\Delta S_{f/d}^e = i_d
$$

### Carry Trade

If **UIRP** breaks, there is a carry trade opportunity.

A carry trade borrows in a low-yield currency and invests in a high-yield currency without fully hedging the exchange-rate exposure. Its apparent interest advantage can be eliminated or reversed if the investment currency depreciates. It is therefore risky, not arbitrage.

#### Example

The USD/GBP exchange rate is **1.50 today** and **1.49 one year later**. The one-year interest rate is **3% in the United Kingdom** and **1% in the United States**. Calculate the profit from borrowing in the United States and investing in the United Kingdom.

<span class="blur-hover" tabindex="0">

Borrow USD 1.50 and convert it into GBP 1.00. Invest at 3% to receive GBP 1.03. At the ending USD/GBP rate, convert back to

$$
GBP\ 1.03\times1.49=USD\ 1.5347.
$$

Repay

$$
USD\ 1.50\times1.01=USD\ 1.5150.
$$

The profit is USD 0.0197 and the return on the USD 1.50 initially borrowed is

$$
\frac{0.0197}{1.50}=1.31\%.
$$

Equivalently, the unhedged UK investment earns

$$
(1.03)\left(\frac{1.49}{1.50}\right)-1=2.313\%
$$

in USD terms, exceeding the 1% USD financing cost by approximately 1.31%.

</span>

### Forward-Rate Parity

If both CIRP and UIRP hold for the same horizon and quote convention, then

$$
F_{f/d}=E(S_{f/d,T}).
$$

The forward rate is then an unbiased predictor of the future spot rate **under those assumptions**.

> [!Note]
>
> **CIRP** must hold because it is enforced by **arbitrrage**. Therefore **FRP** depends on **UIRP**.

### Purchasing Power Parity

**Absolute PPP** applies the law of one price to a representative basket. It is a extension to **One Price Law**. With $S_{f/d}$ quoted as foreign currency per domestic currency,
$$
S_{f/d}=\frac{P_f}{P_d}.
$$

Absolute PPP is unlikely to hold exactly because of transportation costs, tariffs, non-traded goods, market segmentation, and differences in consumption baskets.

**Relative PPP** predicts exchange-rate changes from inflation differentials:

$$
\frac{S_{1,f/d}}{S_{0,f/d}}-1
=
\frac{P_{1,f}/P_{1,d}}{P_{0,f}/P_{0,d}}-1=\frac{P_{1,f}/P_{0,f}}{P_{1,d}/P_{0,d}}=
=
\frac{1+\pi_f}{1+\pi_d}-1
=
\frac{\pi_f-\pi_d}{1+\pi_d}
\approx \pi_f-\pi_d.
$$

> [!note]
>
> $\pi$ is inflation with $\pi = \frac{p_1}{p_0}-1$.

If domestic inflation is lower than foreign inflation, $S_{f/d}$ rises and the domestic base currency appreciates. **Ex-ante PPP** replaces realized inflation with expected inflation.

### Fisher Relations and Real Interest-Rate Parity

The exact Fisher relation is

$$
1+i=(1+r)(1+E\pi),
$$

or approximately

$$
i\approx r+E\pi.
$$

Across countries,

$$
i_f-i_d
\approx(r_f-r_d)+(E\pi_f-E\pi_d).
$$

If both UIRP and ex-ante PPP hold (**The International Fisher Effect** $i_f-i_d = \pi_f-\pi_d = \%\Delta S_{f/d}$) , their exchange-rate expectations are equal, implying **RIRP**

$$
r_f\approx r_d.
$$

> [!IMPORTANT]
> UIRP and ex-ante PPP are not automatically equivalent. Together with the Fisher relations, their joint validity implies real interest-rate parity.

## Balance-of-Payments Channels

The balance of payments records transactions between residents and non-residents:

- the **current account** includes trade in goods and services, primary income, and transfers;
- the **capital account** is usually small and includes capital transfers and certain non-produced assets;
- the **financial account** records direct investment, portfolio investment, other investment, and reserve assets.

A current-account deficit must be financed by net financial inflows or reserve changes. It does not mechanically cause immediate depreciation: the exchange-rate effect depends on why the deficit exists, how investors view the associated claims, and whether financing remains sustainable.

Two longer-run channels are:

- **Portfolio-balance channel:** persistent current-account imbalances change the distribution of global wealth and desired portfolio holdings, which can affect exchange rates.
- **Debt-sustainability channel:** rising external liabilities may eventually require higher risk premiums, expenditure adjustment, or currency depreciation if investors doubt repayment capacity.

## Monetary and Fiscal Policy

<iframe
  class="fx-concept-chart models-chart"
  src="/charts/monetary-fiscal-policy-models.html"
  loading="lazy"
  title="Monetary and fiscal policy models compared"
></iframe>


### Mundell–Fleming Framework

The Mundell–Fleming framework extends short-run macroeconomic analysis to an open economy. Its conclusions depend critically on capital mobility and whether the exchange rate floats or is fixed.

<iframe
  class="fx-concept-chart"
  src="/charts/currency-exchange-concepts.html?view=policy"
  title="Short-run exchange-rate transmission of monetary and fiscal policy"
  loading="lazy"
></iframe>

Under a **floating exchange rate with high capital mobility**:

- expansionary monetary policy lowers domestic interest rates, creates capital outflow pressure, and depreciates the currency; the depreciation supports net exports, making monetary policy relatively powerful;
- expansionary fiscal policy raises output and interest rates, attracts capital inflows, and appreciates the currency; the appreciation crowds out some net exports, weakening the output effect.

When both policies move together, the currency effect depends on whether the interest-rate pressures reinforce or offset:

|  | Expansionary monetary policy | Restrictive monetary policy |
| --- | --- | --- |
| **Expansionary fiscal policy** | Indeterminate | Domestic currency appreciates |
| **Restrictive fiscal policy** | Domestic currency depreciates | Indeterminate |

Under a **floating exchange rate with low capital mobility**, trade flows dominate interest-sensitive capital flows. Expansionary policy that raises output tends to increase imports and put depreciation pressure on the currency:

|  | Expansionary monetary policy | Restrictive monetary policy |
| --- | --- | --- |
| **Expansionary fiscal policy** | Domestic currency depreciates | Indeterminate |
| **Restrictive fiscal policy** | Indeterminate | Domestic currency appreciates |

Under a **credible fixed exchange rate with high capital mobility**:

- independent monetary expansion is ineffective because the central bank must reverse it to maintain the peg;
- fiscal expansion is more powerful because the central bank accommodates the resulting pressure on the peg.

With **restricted capital mobility**, trade flows matter more relative to interest-sensitive capital flows. Expansionary policy can increase imports and create depreciation pressure, but the outcome still depends on the exchange-rate regime, the response of output and rates, and policy credibility.

### Monetary Approach

The monetary approach begins with

$$
MV=PY,
$$

where $M$ is money supply, $V$ is velocity, $P$ is the price level, and $Y$ is real output. 

In the middle step, change it to 
$$
\frac{M}{P} = \frac{Y}{V}
$$


If velocity (V) and real output (Y) are stable in the **long run**, faster domestic money growth raises the domestic price level. Relative PPP then implies long-run domestic-currency depreciation, all else equal.

> [!note]
>
> The left side of the equation $\frac{M}{P}$ can be called as **Real money supply**

When goods prices adjust slowly but financial markets adjust quickly, an unexpected monetary expansion **real money supply** increase makes money cheaper) and cause the currency to depreciate beyond its long-run PPP level. The currency later appreciates toward that level as domestic prices gradually rise. This is **exchange-rate overshooting**.

<iframe
  class="fx-concept-chart overshoot-chart"
  src="/charts/exchange-rate-overshooting.html"
  loading="lazy"
  title="Exchange-rate overshooting after monetary expansion"
></iframe>

### Portfolio-Balance Approach

<iframe
  class="fx-concept-chart portfolio-chart"
  src="/charts/portfolio-balance-approach.html"
  loading="lazy"
  title="Portfolio balance approach: fiscal expansion paths"
></iframe>

Domestic and foreign bonds need not be perfect substitutes. Investors require expected returns that compensate for the quantity and risk of each asset they must hold. A fiscal deficit that increases the supply of government debt can therefore raise the required risk premium.

The exchange-rate effect of fiscal expansion is not unconditionally depreciation:

- higher interest rates can initially attract capital and support the currency;
- concern about debt sustainability, monetization, inflation, or default risk can weaken the currency;
- the net result depends on investor preferences, policy credibility, and the degree of asset substitutability.

## Exam Checklist

- Read every quote as price currency per one unit of base currency.
- At the dealer bid, sell the base; at the ask, buy the base.
- When inverting a quote, invert the ask for the new bid and the bid for the new ask.
- Construct cross rates by cancelling currency units and using executable sides of the quote.
- Test triangular arbitrage with bid against ask, never midpoint against midpoint.
- Value a forward by offsetting the remaining exposure and discounting the net settlement cash flow in its currency.
- Keep the $S_{f/d}$ convention consistent across CIRP, UIRP, and PPP.
- Distinguish riskless CIRP arbitrage from risky UIRP and carry-trade expectations.
- Do not infer real interest-rate parity without the required joint parity assumptions.
- Distinguish the financial account from the much smaller capital account.
- State the exchange-rate regime and capital-mobility assumption before applying Mundell–Fleming conclusions.
