<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 470px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
</style>

# Futures

Common things to remember:

* A forward or futures contract is priced so that its value at $t_0$ is $0$ for both sides: neither side pays to enter.
* After that, a **forward**'s value moves with the underlying, and is only realized at maturity. A **futures** contract is **marked to market** daily: gains and losses are settled in cash each day, so its value resets to $0$ after every settlement.
* The two sides always sum to zero: what the long gains, the short loses.

## Forward

* No-arbitrage principle: the law of one price. Two ways of owning the asset at $T$ (buy it now and carry it, or agree today to buy it at $T$) must cost the same.

### Pricing

The forward price is the spot price carried forward at the risk-free rate:

$$F_0(T)=S_0(1+r_f)^T$$

or, with continuous compounding, $F_0(T)=S_0e^{r_f^cT}$, where $S_0$ is today's spot price of the underlying and $T$ is the time to maturity in years.

### Carry Arbitrage Model

If the forward price differs from the no-arbitrage price, either borrow money or borrow the asset to lock in a riskless profit:

* $F_0(T)>S_0(1+r_f)^T$: **cash-and-carry**. Borrow $S_0$ at $r_f$ and buy the asset at $t_0$, and sell it forward. At $T$, deliver the asset at $F_0(T)$ and repay $S_0(1+r_f)^T$, keeping the difference.
* $F_0(T)<S_0(1+r_f)^T$: **reverse cash-and-carry**. Borrow the asset and sell it short, invest the proceeds at $r_f$, and buy forward. At $T$, buy the asset at $F_0(T)$ to return it, and keep $S_0(1+r_f)^T-F_0(T)$.

### Valuation 

Zero Sum Game (Fundamental of Future): $V_{l,t}+V_{s,t}=0$

For the forward, at time $t$ between $0$ and $T$:

* $V_{l,t}=S_t-\dfrac{F_0(T)}{(1+r_f)^{T-t}}$: the asset is worth $S_t$, and the long owes $F_0(T)$ at $T$. Equivalently, $V_{l,t}=\dfrac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}$, since $S_t=\dfrac{F_t(T)}{(1+r_f)^{T-t}}$ (see [pricing](#pricing)).
* $V_{s,t}=\dfrac{F_0(T)}{(1+r_f)^{T-t}}-S_t$

Update the [pricing](#pricing) with benefits and costs of holding the asset (e.g., dividends or coupons are benefits; storage is a cost):

$$
\begin{aligned}
F_0(T)={}&(S_0-PVB+PVC)\\
&\times(1+r_f)^T
\end{aligned}
$$

Equivalently, with the benefits and costs carried forward to $T$:

$$F_0(T)=S_0(1+r_f)^{T}-FVB+FVC$$

Generally, at time $t$ between $0$ and $T$:

$$
\begin{aligned}
V_{l,t}={}&(S_t-PVB+PVC)\\
&-\frac{F_0(T)}{(1+r_f)^{T-t}}
\end{aligned}
$$

$$
\begin{aligned}
V_{s,t}={}&\frac{F_0(T)}{(1+r_f)^{T-t}}\\
&-(S_t-PVB+PVC)
\end{aligned}
$$

Note that only the costs and benefits from time $t$ to $T$ should be considered, discounted to $t$.

#### Example

Assuming a forward contract 100 days until maturity on a stock, the stock price is $\$45$ and expected to pay dividends of $\$0.3$ in 20 days, and $\$0.5$ in 75 days. The risk free rate is $4\%$. After 40 days, the stock price is $\$48$.

<div class="reveal" tabindex="0">


1. Calculate the no arbitrage price of forward using the updated pricing formula:
   $$
   F_0(T)=(45-\frac{0.3}{1.04^{\frac{20}{365}}}-\frac{0.5}{1.04^{\frac{75}{365} }})\times1.04^{\frac{100}{365} }=\$44.68.
   $$
   
2. Calculte the value for long:
   $$
   S_T-F_0(T)=\$3.11
   $$
   


</div>

## Fixed-Income Forwards and Equity Forwards

### Fixed Income

#### Pricing

For a bond, the benefit is its coupons:

$$
\begin{aligned}
F_0(T)={}&(S_0-\text{PVCoupon})\\
&\times(1+r_f)^T
\end{aligned}
$$

$$F_0(T)=S_0\times(1+r_f)^T-\text{FVCoupon}$$

#### Valuation

$$
\begin{aligned}
V_{l,t}={}&(S_t-\text{PVCoupon})\\
&-\frac{F_0(T)}{(1+r_f)^{T-t}}
\end{aligned}
$$

$$
\begin{aligned}
V_{s,t}={}&\frac{F_0(T)}{(1+r_f)^{T-t}}\\
&-(S_t-\text{PVCoupon})
\end{aligned}
$$

> [!Note]
>
> $S_t-\text{PVCoupon}=\dfrac{F_t(T)}{(1+r_f)^{T-t}}$, similarly by the original formula for forward pricing. So the value can also be written from the change in the forward price: $V_{l,t}=\dfrac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}$.

##### Example

One month ago, BM had a short position for **five** euro-bond forward contracts with 2 months to expiration and a contract notional of $\euro 100,000$ each at price $145$. The euro-bond forward contract now is 148. The risk-free rate is $0.1\%$. Calculate the value of BM's position. 

* Judge first: Short position and price rise $\to$ negative value

<div class="reveal" tabindex="0">


* $V_{s,t}=\frac{(F_0(T)-F_t(T))}{(1+r_f)^{T-r}}=\frac{145-148}{1.001^{\frac{1}{12} }}=-2.9997$
* $V_{BM}=V_{s,t}\times 100,100\times 5=-14998.5$.


</div>

### Equity

#### Pricing

For a stock, the benefit is its dividends:

* $F_0(T)=(S_0-\text{PVDiv})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+r_f)^T-\text{FVDiv}$.

> [!Note]
>
> Dividends are less certain than coupons: they are forecasts, not contractual payments.

Specifically, for **equity index futures**, we use continuous compounding for the pricing formula above, with the index's dividends as a continuous yield:

$$F_0(T)=S_0\times e^{(r_f^c-\delta^c)T}$$

where $\delta^c$ is the continuously compounded dividend yield.

> [!TIP]
>
> $r_f^c=\ln(1+r_f)$, so $e^{r_f^cT}=(1+r_f)^T$.

> [!NOTE]
>
> When $r_f^c>\delta^c$, we have $F_0(T)>S_0$, and the futures curve is in **contango**; when $r_f^c<\delta^c$, $F_0(T)<S_0$ and it is in **backwardation**.

#### Valuation

In general case at time $t$, the valuation is: 

* $V_{l,t}=S_te^{-\delta^c(T-t)}-F_0(T)e^{-r_f^c(T-t)}$.
* $V_{s,t}=F_0(T)e^{-r_f^c(T-t)}-S_te^{-\delta^c(T-t)}$. 

Both $r_f^c$ and $\delta^c$ are the same continuously compounded rates throughout the formula.

> [!NOTE]
>
> $S_te^{-\delta^c(T-t)}=F_t(T)e^{-r_f^c(T-t)}$

##### Example

Assume a future contract on DJIA index with 100 days, Currently, DJIA is at $21000$ with continuous dividend yield is $2\%$,The continuous compounded risk free rate is $3.2\%$. After $75$ days, DJIA is at $20,050$. Calculate the valuation of the futures contract to the long position.

<div class="reveal" tabindex="0">


1. Calculate the no-arbitrage price of the future contract:
   $$
   F_0(T)=S_0e^{(r_f^c-\delta^c)T}=21000e^{1.2\%\frac{100}{365}}=21069.15
   $$
   
2. Discount to time $t$ to calculate the value. 
   $$
   \begin{align}
   V_{l,t}&=S_t\times e^{-\delta(T-t)}-F_0(T)e^{-r_f^C(T-t)}\\
   &=20,050e^{-2\%\frac{25}{365}}-21,069.15e^{-3.2\%\frac{25}{365}}\\
   &=-1004.8
   \end{align}
   $$
   


</div>

## Forward Rate Agreement

> [!WARNING]
>
> In the context of FRA, we are using **simple interest** instead of compounding.

**Def**: A forward rate agreement (FRA) is an OTC forward contract whose underlying is a floating interest rate, such as MRR (formerly Libor). The long side effectively locks in a fixed rate to borrow at in the future.

* Long: Pay Fix, Receive Float. Gains if the rate rises.
* Short: Pay Float, Receive Fix. Gains if the rate falls.

**Notation:** The notation of FRA is $a\times b$ FRA, where $a$ is the number of months until the contract expires (the floating rate is set and the FRA settles), and $b$ is the number of months until the underlying notional loan matures. The underlying rate covers $b-a$ months.

**Use**: FRAs are used to hedge the risk of future borrowing or lending. The side depends on the natural position: a future **borrower** fears rising rates and goes **long**; a future **lender** fears falling rates and goes **short**.

### Pricing 

The FRA rate is the forward rate implied by today's spot rates:

$$
\begin{aligned}
1+S_b\frac{b}{12}={}&\left(1+S_a\frac{a}{12}\right)\\
&\times\left(1+FR\,\frac{b-a}{12}\right)
\end{aligned}
$$

where $S_a, S_b$ are the spot rates for $a$ and $b$ months, observed now.

#### Example

The 6-month spot rate is $1.5\%$ and 9-month is $1.75\%$. Calculate the $6\times9\text{FRA}$ rate.

<div class="reveal" tabindex="0">


* $(1+1.5\%\times 0.5)(1+\frac{r}{4})=1+1.75\%\times0.75$
* $r=2.22\%$


</div>

### Valuation

> [!NOTE]
>
> The interest saving due to FRA position comes at time $b$ but is settled at time $a$. **Always draw timeline when calculating valuation.**

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=fra"
  title="FRA timeline: agreement, valuation date, rate setting and loan maturity"
  loading="lazy"
></iframe>

* **At expiration ($t=a$)**: the floating rate $r_{\text{float}}$ for the loan from $a$ to $b$ is now known. The interest difference is earned at $b$, so discount it back over $b-a$ at that same rate:

$$
V_{l,a}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{fix}})\times\frac{b-a}{12}}{1+r_{\text{float}}\times\frac{b-a}{12}}
$$

where $r_{\text{fix}}$ is the forward rate in the contract.

* **Common case, at time $t$ between $0$ and $a$**: replace $r_{\text{float}}$ with the forward rate from $a$ to $b$ observed at $t$, $FR_t$, to get the gain at time $b$. Then discount it to $t$ with the spot rate $S_{b-t}$ for the $b-t$ months remaining:

$$
V_{l,t}=\frac{\text{NP}\times(FR_t-r_{\text{fix}})\times\frac{b-a}{12}}{1+S_{b-t}\times\frac{b-t}{12}}
$$

#### Example

For $1\times 4 \text{FRA}$, NP is $1$m, underlying rate is 90-day LIBOR. The forward rate is $7\%$.

At $t=30$ days, underlying rate is $8\%$. Calculate the payment value of this FRA. 

<div class="reveal" tabindex="0">


The time is already at settlement (1 month). We can directly use the formula to calculate:
$$
V_{l,t}=\frac{1\times 1\%\times0.25 }{1+0.25\times8\%}=2450.98
$$

</div>

## Fixed Income Futures

### Accrued Interest

The price of a bond is quoted as a clean price (flat price), without accrued interest. The buyer pays the full (dirty) price, which adds the accrued interest:

$$
AI = \frac{t}{T}PMT
$$

where $t$ is the number of days since the last coupon, $T$ the number of days in the coupon period, and $PMT$ the coupon payment.

### Delivery

> [!Important]
>
> This part should be focused for the exam

A fixed-income futures contract allows the short to deliver any bond from a **basket** of eligible bonds (the **delivery option**). Allowing a basket prevents squeezes in any single, possibly illiquid, issue.

The futures price is quoted for a hypothetical **standard bond**, since what is actually delivered is one of a basket of bonds. For US Treasury bond futures, the standard bond has a 6% coupon.

### Pricing

Since the underlying asset is hypothetical, a **conversion factor** (CF) adjusts each deliverable bond's price, in an effort to make all deliverable bonds roughly equal in price. On delivery, the short receives:

$$
\begin{aligned}
\text{Invoice price}={}&\underbrace{\text{Futures price}\times CF}_{\text{principal invoice amount}}\\
&+AI
\end{aligned}
$$

The adjustment is not exact, so one bond is the **cheapest-to-deliver** (CTD): the one that costs the short least to buy and deliver, relative to what it receives. The futures price follows the CTD bond.

Setting the invoice price equal to the forward price of the CTD bond (no arbitrage), where $S_0$ is the bond's **full** price today (clean price plus $AI_0$) and $AI_T$ is the accrued interest at the futures' maturity:

$$
\text{Futures price}=\frac{\text{FV}-AI_T}{CF}
$$

where FV is the forward value of the bond:

$$
\begin{aligned}
\text{FV}&=(S_0-PVC)(1+r_f)^T\\
&=S_0(1+r_f)^T-FVC
\end{aligned}
$$

#### Example

The underlying asset is now $\$108$ and the AI now is $\$0.083$, The bond futures contract matures in 1 month. At expiration, AI will be $\$0.25$. Assume $CF=0.729535$ and current one-month risk-frese rate is $0.1\%$. Calculate the price of the bond futures

<div class="reveal" tabindex="0">


Given formula above, it is 
$$
\frac{(108.083\times(1+0.1\%)^{1/12}-0.25)}{0.729535}=147.82
$$



</div>

## Interest Rate Swap

> [!Note]
>
> In financial markets, the interest rate swap has the largest trading volume of any derivative.

In this context, we are discussing the **plain vanilla interest rate swap**: fixed for floating, in one currency, on a notional principal that is never exchanged. Similar to the FRA:

* Long position (payer swap): Paying fix, receiving float
* Short position (receiver swap): Paying float, receiving fixed

The floating rate payments are made **in arrears**: each rate is determined at the start of its period and paid at the end.

### Relationship with previous instruments 

* **Forwards**: a swap is a series of forward contracts, all in the same direction, all at the same fixed rate. Because one rate is used for every date, each forward on its own is **off-market** (non-zero value); only the sum is worth zero at initiation.
* **Bonds**: taking a swap as a combination of bonds is the fundamental view of swap pricing. The long position (pay fixed) is a **short position in a fixed-rate bond** plus a **long position in a floating-rate bond**.
* **FRA**: a swap is like a series of FRAs, one per period, all at the same fixed rate.

### Pricing 

> [!Warning]
>
> The swap rate needs to be annualized using simple interest.

Same as all futures and forwards, the value of the contract at time $0$ should be $0$ for both sides, and all pricing and valuation use **simple interest**.

**Pricing** a swap means finding its fixed rate: the one fixed side of the obligation.

> [!Important]
>
> **Assumption:** The floating rate bond's coupon rate is equal to the market rate, and the pay in arrears mode is applied. 
>
> Then **on each reset day and initial day, the floating bond price is equal to its par**

By the note above, since $V_0=0$, $PV_{fix}=PV_{float}=Par$.

Assume $F$ is the periodic coupon of a fixed-rate bond with a par of $1$. Then

$$1=\sum_{i=1}^n F\,D_i+1\times D_n$$

$$F=\frac{1-D_n}{\sum_{i=1}^nD_i}$$

where $D_i$ is the discount factor for payment $i$ under **simple interest**, $\dfrac{1}{1+r_i\times\frac{\text{days}_i}{360}}$. $F$ is a periodic rate; multiply by the number of periods per year to annualize it.

#### Example  

Price the quarterly-pay plain vanilla swaps. The LIBOR spot rates are $R_{\text{90-days}}=2.5\%, R_{\text{180-days}}=3\%, R_{\text{270-days}}=3.5\%,R_{\text{90-days}}=4\%$. 

<div class="reveal" tabindex="0">


First we calculate all discount factors under simple interest:
$$
\begin{align}
D_1 &= \frac{1}{1+2.5\%\times\frac{90}{360}}=0.9938\\
D_2 &= \frac{1}{1+3\%\times\frac{180}{360}}=0.9852\\
D_3 &= \frac{1}{1+3.5\%\times\frac{270}{360}}=0.9744\\
D_4 &= \frac{1}{1+4\%\times\frac{360}{360}}=0.962
\end{align}
$$
Now, getting $F$ with the formula above:
$$
F=\frac{1-D_4}{D_1+D_2+D_3+D_4}=0.98\%
$$
The swap rate should be annualized by:
$$
r=0.98\%\times 4 = 3.92\%
$$

</div>

#### Usage

Swap for hedging: a borrower paying a floating rate can enter a pay-fixed swap: the floating payments cancel, and the borrower is left paying a fixed rate. A lender receiving floating can likewise enter a receive-fixed swap.

> [!Note]
>
> The swap must match the exposure: if the floating exposure doubles, the swap's notional principal must double too.

### Valuation

* $V_{l,t}=PV_{float}-PV_{fix}$
* $V_{s,t}=-V_{l,t}$

First we calculate the fixed rate $F$ with the formula above, then:

* For the fixed side, discount the remaining fixed coupons $F$ and the par to $t$.
* For the floating side, the bond returns to par at the next reset date, so discount the par plus the **next floating coupon**, which was already set at the last reset, from the next reset date to $t$.

#### Example

Following example in pricing above, let the Libor at $T=30$ to be:
$$
R_{\text{60-days}}=3\%, R_{\text{150-days}}=3.5\%, R_{\text{240-days}}=4\%,R_{\text{330-days}}=4.5\%
$$
Calculate the value for long position

<div class="reveal" tabindex="0">


We first calculate discount factors:
$$
\begin{align}
D_a &= \frac{1}{1+3\%\times\frac{60}{360}}=0.9950\\
D_b &= \frac{1}{1+3.5\%\times\frac{150}{360}}=0.9856\\
D_c &= \frac{1}{1+4\%\times\frac{240}{360}}=0.9740\\
D_d &= \frac{1}{1+4.5\%\times\frac{330}{360}}=0.9604
\end{align}
$$
Then discount them to $t$ with simple interest:
$$
V_{fix}=0.98\%(D_a+D_b+D_c+D_d)+1\times D_d
$$
The discount the par and the pre-determined float rate at $90$ days to get the float value:
$$
V_{float}=(1+\frac{90}{360}2.5\%)\times D_a=1.001219
$$
> [!Note]
>
> Here we use the rate of the previous example ($2.5\%$) because swap is **pay in arrear**, which means rate is determined at the beginning of each period.

The value is then $NP\times(V_{float}-V_{fix})$.


</div>

### Valuation Method 2

Imagine at time $t$ signing a new, offsetting swap at today's fixed rate. The floating legs cancel, leaving the difference in fixed rates on the remaining dates. So the value of the long position is:

$$
V_{l,t} =\text{NP}\times(F_{t}-F_0)\times\sum_{i}D_i
$$

where $F_0$ is the fixed rate in the contract, $F_t$ the fixed rate of a new swap with the same remaining maturity at $t$ (as periodic rates), and $D_i$ the discount factors for the remaining payment dates.

This valuation rests on the floating legs being identical: the future floating cash flows are the same for both swaps, and the new swap's value is $0$, so $F_t$ prices the floating leg.

> [!Note]
>
> This formula is the same as for a forward: the change in the price (here, the fixed rate), discounted.

#### Example

2 years ago, we entered an annual-reset $\$100m$ 7-year receive-fixed interest rate swap, with fixed swap rate of $2\%$.

The estimated PV factors are given in the following table. Calculate the value for the party receiving fixed rate:

| Maturity (years) | PV Factors |
| ---------------- | ---------- |
| 1                | 0.990      |
| 2                | 0.978      |
| 3                | 0.965      |
| 4                | 0.952      |
| 5                | 0.938      |

<div class="reveal" tabindex="0">


Now, making clear that we are calculating value for short position, which is:
$$
V_{s,t} = \sum PV (F_0-F_t)
$$
Then, calculate $F_t$ with the pricing formula;
$$
F_t=\frac{1-D_n}{\sum_{i=1}^n D_i}=1.29\%
$$
Then the value is:
$$
V_{s,t}=((2\%-1.29\%)\sum_{i=1}^nD_i)NP
$$
where $NP$ is $\$100m$.


</div>

## Currency Swap 

A currency swap is another form of interest rate swap, but each leg uses the interest rate of its own currency. It involves:

* Exchanging the principals at the beginning, at the spot exchange rate, and returning them at termination
* On settlement dates, interest payments are not netted, because they are in different currencies
* Floating rate payments are typically made in arrears

> [!Important]
>
> The **currency exchange rate** used for the principals is the exchange rate at the beginning; the same principals are exchanged back at termination.

### Pricing

For currency swaps, there are 4 potential modes:

* Pay fixed, Receive fixed
* Pay float, Receive fix
* Pay fix, Receive float
* Pay float, receive float

For the **Fix/Float** pattern, we still use $V_{fix}=V_{float}$: consider each bond to be $1$ at par, and use the same formula as for interest rate swaps, $F = \frac{1-D_n}{\sum D_i}$, with that currency's discount factors.

For the **Fix/Fix** pattern, set the principal of each side to $1$ and use the same formula, once per currency (since we are calculating rates, the principal can be set at any value).

For the **Float/Float** pattern, there is no fixed rate to solve for.

### Valuation

Take the contract as long one bond and short another, in different currencies. Value each bond in its own currency, then convert one to the other's currency at the **current spot** exchange rate. The rest is the same as the first method for interest rate swaps.

## Equity Swap

An equity swap is another form of swap, exchanging the return of a stock or an index (dividends and price changes) for a fixed or floating rate, or for the return of another equity.

Exchanging all returns, dividends included, is called a **Total Return Swap**.

### Usage

* Speculating
* Asset Allocation
* Leveraging (Borrow money and enter an Equity Swap)
* Change position (gain exposure when unable to buy the stock or its options)

### Pricing

The fixed rate is priced with the same formula as for an interest rate swap: the equity leg, like a floating leg, is worth par at each reset.

### Valuation

Let $S_{t-1}$ be the equity price at the last reset date. For the side receiving fixed rate and paying the equity return:

$$
V_{t}=PV_{\text{fixed bond}}-\frac{S_t}{S_{t-1}}NP
$$

For the side receiving float rate and paying the equity return:

$$
V_{t}=PV_{\text{float bond}}-\frac{S_t}{S_{t-1}}NP
$$

For the side receiving one equity return and paying another:

$$
V_{t}=(R_1-R_2)NP
$$

where $R_1$ and $R_2$ are the two equities' returns since the last reset.
