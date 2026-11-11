<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 583px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Exchange-Traded Funds (ETF)

## Mechanics of ETF

An **exchange-traded fund (ETF)** is a type of fund: a collection of securities, which often **tracks an underlying index**, whose shares trade on an exchange throughout the day.

The key difference between the two traditional fund types is **who the investor trades with**:

* **Open-end (mutual) fund**: investors buy and redeem shares **directly with the fund company**, at the NAV computed at the end of the day. The fund creates new shares or cancels them as money comes in or goes out.
* **Closed-end fund**: the number of shares is fixed at issue. Investors trade the shares **with each other on an exchange**, and the price can move well away from the NAV.

ETFs have features of both, because they trade in two markets:

* **Primary market (open-end side)**: only **authorized participants (APs)**, large broker-dealers under contract with the ETF sponsor, deal with the fund. They **create** ETF shares in large blocks (**creation units**, e.g., 50,000 shares) by delivering the **creation basket** of securities to the fund, and **redeem** them by handing creation units back for the basket. These exchanges are usually **in kind**: securities for shares, not cash.
* **Secondary market (closed-end side)**: all other investors, and the APs, **trade ETF shares on the exchange**, at market prices, throughout the day. Most ETF trading happens here and never touches the fund.

| | Open-end fund | Closed-end fund | ETF |
| --- | --- | --- | --- |
| **Investors trade with** | The fund | Other investors, on an exchange | Other investors, on an exchange; APs also with the fund |
| **Number of shares** | Changes daily | Fixed | Changes as APs create or redeem |
| **Price** | NAV, once a day | Market price, intraday | Market price, intraday |
| **Price vs NAV** | Equal | Can be a large premium or discount | Kept close by AP arbitrage |

**AP arbitrage** keeps the ETF price close to its NAV:

* **ETF at a premium** (price > NAV): the AP buys the underlying basket, delivers it to **create** ETF shares, and sells them on the exchange. The extra supply pushes the ETF price down.
* **ETF at a discount** (price < NAV): the AP buys ETF shares on the exchange, **redeems** them for the basket, and sells the securities. The extra demand pushes the ETF price up.

Arbitrage only pays when the gap exceeds the AP's costs (creation/redemption fees, trading costs in the underlying), so the price can drift within that band.

## Trading Cost

**Bid–ask spread.** An ETF's spread reflects what it costs the market maker or AP to provide liquidity, mainly through the underlying:

* **Creation/redemption fees** and other trading costs, such as commissions.
* **Bid–ask spreads and liquidity of the underlying** securities: an ETF on liquid large-cap stocks has a narrow spread; one on high-yield bonds or small caps has a wider one.
* **Risk of carrying and hedging** the position until it can be offset.
* The market maker's **profit**, which falls with competition.
* **Less**: the ETF's own **on-exchange liquidity**. When buyers and sellers of the ETF itself match on the exchange, no creation or redemption is needed, so a heavily traded ETF can have a spread narrower than its underlying.

**Time zone differences.** For international stocks, the underlying market may be **closed** while the ETF trades (e.g., Japanese stocks during US hours). The dealer cannot trade or hedge the basket, and its prices are stale, so spreads widen.

### Premium/Discount to NAV

$$\text{Premium}=\frac{\text{ETF price}-\text{NAV}}{\text{NAV}}$$

A negative premium is a discount.

* **NAV** is published once a day, at the **close**, from the closing prices of the holdings.
* The **secondary market** has a **real-time ETF price**.
* The **end-of-day premium/discount** compares the ETF's closing price with that day's NAV.
* For **intraday trading**, sponsors publish an **indicated NAV (iNAV)** every 15 seconds, based on the last traded prices of the holdings.

A premium or discount is not always mispricing. The NAV and iNAV can be **stale**:

* **Timing differences**: for an ETF on foreign stocks, the NAV uses prices from a market that closed hours earlier. The ETF price already reflects news since then, and the NAV catches up the next day.
* **Illiquid holdings**: many bonds don't trade every day, so the NAV relies on estimated (matrix) prices, while the ETF price shows where investors will actually trade, especially under market stress.

**Example.** An ETF on Japanese equities closes in New York at 25.30; its NAV, from that morning's Tokyo closing prices, is 25.00. Find the premium, and explain whether it signals mispricing.

<div class="reveal" tabindex="0">

$$\frac{25.30-25.00}{25.00}=+1.2\%$$

Not necessarily mispricing. Tokyo closed before New York opened, so the NAV is stale: if good news arrived during US hours, the ETF price reflects it and the NAV will only catch up at the next Tokyo close. An AP could not buy the basket in Tokyo at the stale prices anyway.

</div>

## Tracking Error

ETFs are mostly **passive investments**, so the investor wants the ETF's return to stay close to its index.

* **Tracking difference**: the ETF's return minus the index's return over a period.
* **Tracking error**: the **standard deviation** of the tracking differences (usually annualized).

$$\text{Tracking error}=\sigma\left(R_{\text{ETF}}-R_{\text{index}}\right)$$

The tracking error measures how **variable** the gap is, not its **direction or size**: an ETF that lags its index by exactly 0.5% every year has a tracking error of zero. So we cannot know the absolute difference from the tracking error alone; look at the (mean) tracking difference too.

**Example.** Two ETFs track the same index. Their yearly tracking differences over five years are:

| Year | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **ETF A** | −0.50% | −0.50% | −0.50% | −0.50% | −0.50% |
| **ETF B** | +0.40% | −0.30% | +0.20% | −0.50% | +0.20% |

Find each ETF's mean tracking difference and tracking error. Which tracks the index better?

<div class="reveal" tabindex="0">

* **ETF A**: mean tracking difference −0.50%; every difference is the same, so the tracking error is **0**.
* **ETF B**: mean tracking difference $0$. The squared deviations sum to $0.16+0.09+0.04+0.25+0.04=0.58$, so

$$\text{TE}_B=\sqrt{\frac{0.58}{5-1}}=0.38\%$$

ETF A has the lower tracking error but loses 0.50% a year to the index, most likely from its fees. ETF B's gap varies more but costs nothing on average. A full comparison needs both measures.

</div>

**Sources of tracking difference:**

* **Fees and expenses**: the biggest, steady drag.
* **Representative sampling or optimization**: holding a subset of the index's securities instead of all of them (full replication).
* **Index changes**: timing and trading costs when the index rebalances.
* **Regulatory and tax requirements**, e.g., diversification limits that stop the fund from matching a concentrated index.
* **Cash drag**: dividends and other cash held until reinvested.
* **Depositary receipts**: holding ADRs/GDRs instead of the local shares, whose prices and trading hours may differ from those the index uses.
* **Securities lending**: lending holdings to short sellers earns income that **adds** to the ETF's return.
* **Foreign dividend recapture**: the index typically assumes the full foreign withholding tax; if the fund recovers part of it through tax treaties, its return **exceeds** the index.

## Tax Issues

### Tax Fairness

* **Open-end mutual funds**: fairness is not guaranteed. When investors **redeem**, the fund may have to **sell securities**, realizing capital gains that are distributed, and taxed, to **all remaining holders**, who did not sell. The trading costs of the redemption are borne by the remaining holders too.
* **ETFs**: most trading is between investors on the **secondary market**, so it does not touch the fund, and each investor is taxed only on their own sale. When APs redeem, the fund hands over securities **in kind** rather than selling them, so **nothing is taxed** inside the fund. ETF taxation is therefore fair.

### Tax Efficiency

On an in-kind redemption, the fund chooses which **lots** of each security to hand to the AP, and hands over those with the **lowest cost basis** (largest embedded gains). The gains leave the portfolio **without being realized** by the fund, so fewer capital gains are distributed to holders, and their tax is deferred until they sell their ETF shares.

> [!Note]
>
> The gains are not passed on to the AP to pay: the AP's cost is what it paid for the ETF shares it redeemed. The benefit comes from the in-kind exemption, so it is smaller for ETFs that create and redeem in cash (common in some international or bond ETFs) or in jurisdictions without the exemption.

## Other Costs

ETFs generally charge **lower** fees than mutual funds: most are index based, and they don't bear the costs of shareholder accounting and distribution that open-end funds do.

Costs vary by:

* **Portfolio complexity**: niche, international, or actively managed portfolios cost more to run than broad domestic indexes.
* **Issuer size**: large sponsors have economies of scale.
* **Competitive landscape**: competition has pushed fees on broad index ETFs close to zero.

The **total cost of ownership** combines the cost of trading in and out with the cost of holding:

$$\text{RT}=2\times\left(\text{Commission}+\tfrac12\,\text{Spread}\right)$$

$$\text{Total cost}=\text{RT}+\text{Expense ratio}\times T$$

where RT is the round-trip trading cost, the commission is one way, and $T$ is the holding period in years.

Trading costs are paid once; the expense ratio is paid every year. So **short-term** traders should favor ETFs with low **trading costs**, and **long-term** holders those with low **expense ratios**.

**Example.** Two ETFs track the same index. Both have a one-way commission of 0.05%. ETF A has a bid–ask spread of 0.10% and an expense ratio of 0.20%; ETF B has a spread of 0.30% and an expense ratio of 0.09%. Which is cheaper for a holding period of (a) 9 months, (b) 5 years? (c) At what holding period do they cost the same?

<div class="reveal" tabindex="0">

Round-trip trading costs: A $=2\times(0.05\%+0.05\%)=0.20\%$; B $=2\times(0.05\%+0.15\%)=0.40\%$.

**(a) 9 months.** A $=0.20\%+0.20\%\times0.75=0.35\%$; B $=0.40\%+0.09\%\times0.75=0.4675\%$. **ETF A** is cheaper.

**(b) 5 years.** A $=0.20\%+0.20\%\times5=1.20\%$; B $=0.40\%+0.09\%\times5=0.85\%$. **ETF B** is cheaper.

**(c) Break-even.**

$$0.20\%+0.20\%\,t=0.40\%+0.09\%\,t$$

$$t=\frac{0.20\%}{0.11\%}=1.82\text{ years}$$

</div>

<iframe
  class="fx-concept-chart"
  src="/charts/etf-holding-cost.html"
  title="Total cost of two ETFs against holding period"
  loading="lazy"
></iframe>

## ETF in Portfolio Management

**Efficient portfolio management.**

* **Liquidity management**:
  * **Cash equitization**: put cash (from inflows or dividends) into ETFs so the fund stays **fully invested** and avoids cash drag.
  * **Rebalancing**: use ETFs to adjust exposures quickly and cheaply, then trade the underlying later if needed.
  * **Managing redemptions**: hold a sleeve of liquid ETFs that can be sold to meet outflows.
* **Completion strategy**: use ETFs to fill gaps, e.g., a sector, region or factor that the active managers leave underweight, so the total portfolio matches its target exposures.
* **Transition management**: when replacing a manager, hold ETFs for the asset class while the new manager is chosen and funded, so the exposure is kept during the gap.

**Asset class exposure.** ETFs give fast, low-cost exposure for **core** holdings and for **tactical** or **strategic** shifts in asset allocation, including asset classes that are hard to access directly, such as international equities, bonds and commodities.

**Active and factor investment.** Factor (smart beta) ETFs target exposures such as value, momentum or low volatility; thematic, ESG and actively managed ETFs give access to specific strategies, and some ETFs are used to hedge or manage risk.

**For large asset owners, ETFs have drawbacks** compared with a **separately managed account (SMA)**:

1. **Fees**: ETF fees are fixed and less negotiable; a large investor can negotiate lower fees on an SMA.
2. **Customization**: an SMA can be tailored to the investor's goals, e.g., ESG exclusions or tax-loss harvesting.
3. **Transparency**: regulators require ETFs to **disclose their holdings** (often daily), which can expose an active strategy to front-running; an SMA's holdings stay private.
