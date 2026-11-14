<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 594px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Credit Default Swap

## Basic Concepts

A **credit default swap (CDS)** is a credit derivative whose underlying is the **credit quality** of a borrower, the **reference entity**. It works like insurance:

* The **protection buyer** makes **periodic payments** to the seller as long as no default occurs. The buyer gains when credit quality worsens, so it is the **short** side (short credit risk).
* The **protection seller** pays **compensation if a default** (credit event) occurs. The seller gains when credit quality improves, so it is the **long** side (long credit risk).

Key terms:

* **Notional amount (principal)**: the amount of coverage, on which the compensation and the payments are computed.
* **CDS spread**: what the buyer pays for protection, as an annual rate on the notional. It compensates the seller for the expected loss, so it depends on the:
  * **Hazard rate**: the probability of default, given no earlier default (see [Probability of Default](M4%20Credit%20Analysis%20Models.md#probability-of-default) in M4).
  * **Loss given default**: $1-\text{Recovery rate}$.

$$\text{CDS spread}\approx\text{Hazard rate}\times\text{LGD}$$

For example, a hazard rate of 2% and a recovery rate of 40% give a spread of about $2\%\times60\%=1.2\%$ a year.

### Credit Events

The contract defines which events trigger the compensation:

* **Bankruptcy**: the reference entity files for protection from its creditors.
* **Failure to pay**: it misses a scheduled interest or principal payment (after any grace period).
* **Restructuring**: an involuntary change in the terms of its debt that hurts creditors, e.g., a lower coupon or a longer maturity. It is usually **excluded** from standard North American corporate CDS, but included in many European ones.

Whether a credit event has occurred is decided by a **Determinations Committee** of dealers and investors, set up by ISDA, so both sides are bound by the same decision.

### Settlement

Settlement protocols:

* **Physical settlement**: the buyer delivers the defaulted debt (face value = notional) to the seller and receives the **notional** in cash.
* **Cash settlement**: the seller pays the **payout amount**; most CDS settle this way. The recovery rate is set by an **auction** of the defaulted debt.

$$
\begin{aligned}
\text{Payout}&=\text{Notional}\\
&\quad\times(1-\text{Recovery rate})
\end{aligned}
$$

The **payout ratio** is $1-\text{Recovery rate}$, i.e., the LGD. Either way, the buyer ends up with the notional, and the seller bears the loss.

## Types of CDS

### Single-Name CDS

A **single-name CDS** covers **one reference entity**, and names a **reference obligation**, the designated instrument. It is usually a **senior unsecured** obligation.

* The reference obligation is not the only instrument covered: **any debt of the same or higher ranking** (seniority) is covered.
* The payoff is determined by the **cheapest-to-deliver (CTD)** obligation: the cheapest debt at the covered level. On default, debts of the same seniority have the same legal claim but can trade at different prices; the buyer delivers the cheapest one, and the cash payout uses its price.

**Example.** A buyer holds 10 million of protection on a company that defaults. Two of its senior unsecured bonds now trade at 38 and 42 per 100. What does the buyer receive?

<div class="reveal" tabindex="0">

The CTD bond trades at 38, so the recovery rate is 38%:

$$10\text{m}\times(1-38\%)=6.2\text{ million}$$

Under physical settlement, the buyer would deliver 10 million face value of the 38 bond (cost 3.8 million) and receive 10 million: the same 6.2 million net.

</div>

### Index CDS

An **index CDS** covers **multiple borrowers**, e.g., the 125 names in **CDX** (North America) or **iTraxx** (Europe, Asia).

* The coverage is **allocated to the borrowers evenly**: each name carries $1/125$ of the notional.
* When one name defaults, the seller pays on that name's share, and the contract continues with the notional reduced by that share.
* The value of an index CDS depends on **credit correlation**: how likely the names are to default together. Higher correlation makes multiple defaults more likely, and the index protection more valuable.

**Example.** An investor buys protection on CDX with a notional of 100 million. One of the 125 names defaults, with a recovery rate of 40%. Find the payout and the notional left.

<div class="reveal" tabindex="0">

Each name's share is $100\text{m}/125=0.8$ million.

$$0.8\text{m}\times(1-40\%)=480{,}000$$

The notional falls to $100\text{m}-0.8\text{m}=99.2$ million, and the buyer keeps paying the spread on that.

</div>

### Tranche CDS

A **tranche CDS** covers only a slice of the losses on an index, e.g., the first 0–3% of losses or the 3–7% layer, in the same way as tranches of a CDO.

### Options on CDS

A **CDS swaption** is an option to buy or sell protection at a fixed spread in the future: the credit version of the interest rate [swaption](../C7%20Derivative/M2%20Options.md#swaption) in Derivatives.

## Pricing of CDS

The market trades CDS with **standardized coupons**: **1% for investment grade** and **5% for high yield**. These need to be remembered: they will not be given in the exam.

The case-by-case difference between the standard coupon and the spread the market actually requires (the **credit spread**) is settled by an **upfront payment** when the contract starts:

$$
\begin{aligned}
\text{Upfront}={}&\text{PV(protection leg)}\\
&-\text{PV(premium leg)}
\end{aligned}
$$

* **Protection leg**: the expected payouts if defaults occur, i.e., $\sum \text{POD}_t\times\text{LGD}\times\text{DF}_t$, the CVA from M4.
* **Premium leg**: the expected coupon payments, made only while the entity survives, i.e., $\sum \text{POS}_t\times\text{Coupon}\times\text{DF}_t$.

A good approximation of the upfront premium, as a percentage of the notional:

$$
\begin{aligned}
\text{Upfront}\approx{}&(\text{Credit spread}\\
&-\text{Fixed coupon})\\
&\times\text{CDS duration}
\end{aligned}
$$

* Positive: the **buyer** pays the seller upfront (the coupon is too low for the risk).
* Negative: the **seller** pays the buyer (the coupon is too high).

CDS are quoted as a **price** per 100 of notional:

$$\text{CDS price}=100-\text{Upfront premium}$$

with the upfront premium in percent of the notional.

**Example.** Find the upfront premium and the CDS price, and say who pays, for 10 million of 5-year protection on:

1. An investment-grade company: credit spread 1.80%, CDS duration 4.5.
2. A high-yield company: credit spread 3.20%, CDS duration 4.2.

<div class="reveal" tabindex="0">

**1. Investment grade** (coupon 1%):

$$(1.80\%-1\%)\times4.5=3.60\%$$

The buyer pays $3.60\%\times10\text{m}=360{,}000$ upfront; the price is $100-3.60=96.40$.

**2. High yield** (coupon 5%):

$$(3.20\%-5\%)\times4.2=-7.56\%$$

The seller pays the buyer $7.56\%\times10\text{m}=756{,}000$ upfront; the price is $100+7.56=107.56$.

</div>

### Profit of CDS

Once the contract is in place, its value changes with the credit spread, in the same way as a bond's price changes with its yield:

$$
\begin{aligned}
\text{Profit}\approx{}&\Delta\text{Spread}\times\text{CDS duration}\\
&\times\text{Notional}
\end{aligned}
$$

* The **buyer** of protection gains when the spread **widens** (credit worsens).
* The **seller** gains when the spread **narrows**.

Without the notional, the formula gives the profit as a percentage of the notional. The gain can be realized before maturity by entering an offsetting CDS.

**Example.** An investor bought 10 million of protection with a CDS duration of 4.5. The credit spread widens from 1.80% to 2.40%. Find the profit.

<div class="reveal" tabindex="0">

$$0.60\%\times4.5\times10\text{m}=270{,}000$$

A gain to the protection buyer, and a loss of the same amount to the seller.

</div>

## Application of CDS

CDS are used for **speculating** on changes in credit quality and for **hedging** credit exposure. Common strategies:

1. **Adjustment of credit exposure**: a lender or bondholder **buys protection** to reduce its exposure to a borrower without selling the loan or bond; an investor **sells protection** to add exposure without buying bonds.
2. **Naked CDS**: buying protection **without owning** the reference obligation: a pure bet that the entity's credit will worsen.
3. **Long/short trade between CDS**: buy protection on one entity (or sector) and sell protection on another, betting on their **relative** credit quality.
4. **Curve trade**: a view on the **shape** of the **credit curve**, the CDS spreads of one reference entity across maturities.
5. **Basis trade**: exploit a gap between the credit spread in the **bond market** and the **CDS spread** for the same entity. If the bond's spread is higher than the CDS spread, **buy the bond and buy protection**: the CDS hedges the credit risk, and the investor keeps the difference until the two spreads converge.
6. **Arbitrage, e.g., synthetic CDO**: a risk-free bond plus **sold** protection (long CDS, in the long-credit sense above) replicates a risky bond. A pool of such positions is a **synthetic CDO**. If the synthetic is cheaper than a real (cash) CDO with the same exposure, buy the real CDO and short the synthetic, or the reverse.
7.

### Curve Trade

The credit curve is usually upward sloping: longer protection costs more, because there is more time for the credit to deteriorate.

* **Steepener**: the investor believes the credit curve will become **steeper**, so they **buy long-term** protection and **sell short-term** protection. The long-term spread rises (the bought protection gains) and the short-term spread falls (the sold protection gains).
* **Flattener**: the opposite view; **sell long-term** protection and **buy short-term** protection.

<iframe
  class="fx-concept-chart"
  src="/charts/credit-curve-trade.html"
  title="Credit curve today and after steepening, with a steepener's two legs"
  loading="lazy"
></iframe>

**Example.** An investor enters a steepener: buys 10 million of 10-year protection (CDS duration 8.5) and sells 10 million of 2-year protection (CDS duration 1.9). The curve steepens as in the chart: the 10-year spread widens 30 bp and the 2-year narrows 18 bp. Find the profit.

<div class="reveal" tabindex="0">

* 10-year, bought protection, spread widens: $0.30\%\times8.5\times10\text{m}=255{,}000$
* 2-year, sold protection, spread narrows: $0.18\%\times1.9\times10\text{m}=34{,}200$

Total profit: **289,200**.

</div>

With equal notionals, the long leg has the larger duration, so the trade is also net **short credit**: it gains if all spreads widen in parallel. To bet on the shape alone, size the notionals so the two legs' durations offset (here about $8.5/1.9\approx4.5$ times as much 2-year protection).

> [!Note]
>
> This is different from [riding the yield curve](M1%20Term%20and%20Interest%20Rate.md#riding-the-yield-curve) in M1. Riding the yield curve profits from a bond rolling down a **stable**, upward-sloping curve as time passes. A credit curve trade profits from a **change in the shape** of the curve.
