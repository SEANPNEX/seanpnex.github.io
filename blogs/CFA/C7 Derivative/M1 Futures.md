


<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover {
    filter: none;
}
</style>

# Futures

Common things to remember:

* Future contract net value is always $0$.
* Future contract value at $t_0$ should be $0$ for both sides. 



## Forward

* No arbitrage principle: One price law.

### Pricing

$F_0(T)=S_0(1+r_f)^T, F_0(T)=S_0e^{r_fT}$, where $S_0$

### Carry Arbitrage Model

* $F_0(T)>S_0(1+r_f)^T$, then arbitrage can be done by **borrow fund $S_0$ at $r_f$ and buy asset at $t_0$**, then at $t_1$, **sell the asset at $F_0(T)$**.
* $F_0(T)<S_0(1+r_f)^T$,  buy riskfree asset and sell short spot asset. 

买空卖空$\to$融资融券(borrow money or borrow asset)

### Valuation 

Zero Sum Game (Fundamental of Future): $V_{l,t}+V_{s,t}=0$

For the forward:

* $V_{l,t}=S_t-\frac{F_0(T)}{(1+r_f)^{T-t}}$, where $S_t=\frac{F_t(T)}{(1+r_f)^{T-t}}$, think about [pricing](###Pricing).
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-S_t$

Update the [pricing](###Pricing) with benefits and Costs:

* $F_0(T)=(S_0-PVB+PVC)\times(1+t_f)^T$
* $F_0(T)=S_0(1+r_f)^{T}-PVB+PVC$

Generally, at time $t$ between $0$ and $T$:

* $V_{l,t}=(S_t-PVB+PVC)-\frac{F_0(T)}{(1+r_f)^{T-t}}$
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-(S_t-PVB+PVC)$

Not that only cost and benefit from time $t$ to $T$ should be considered.

#### Example

Assuming a forward contract 100 days until maturity on a stock, the stock price is $\$45$ and expected to pay dividends of $\$0.3$ in 20 days, and $\$0.5$ in 75 days. The risk free rate is $4\%$. After 40 days, the stock price is $\$48$.

<span class="blur-hover">

1. Calculate the no arbitrage price of forward using the updated pricing formula:
   $$
   F_0(T)=(45-\frac{0.3}{1.04^{\frac{20}{365}}}-\frac{0.5}{1.04^{\frac{75}{365} }})\times1.04^{\frac{100}{365} }=\$44.68.
   $$
   
2. Calculte the value for long:
   $$
   S_T-F_0(T)=\$3.11
   $$
   

</span>



## Fixed-Income Forwards and Equity Forwards

### Fixed Income

#### Pricing

* $F_0(T)=(S_0-\text{PVCoupon})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+t_f)^T-\text{FVCoupon}$.

#### Valuation

* $V_{l,t}=(S_t-\text{PVCoupon})-\frac{F_0(T)}{(1+r_f)^{T-t}}$.
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-(S_t-\text{PVCoupon})$

> [!Note]
>
> $S_t-\text{PVCoupon}=\frac{F_t(T)}{(1+r_f)^T}$, similarly by the original formula for forward pricing.

##### Example

One month ago, BM had a short position for **five** euro-bond forward contracts with 2 months to expiration and a contract notional of $\texteuro 100,000$ each at price $145$. The euro-bond forward contract now is 148. The risk-free rate is $0.1\%$. Calculate the value of BM's position. 

* Judge first: Short position and price rise $\to$ negative value

<span class="blur-hover">

* $V_{s,t}=\frac{(F_0(T)-F_t(T))}{(1+r_f)^{T-r}}=\frac{145-148}{1.001^{\frac{1}{12} }}=-2.9997$
* $V_{BM}=V_{s,t}\times 100,100\times 5=-14998.5$.

</span>

### Equity

#### Pricing

* $F_0(T)=(S_0-\text{PVDiv})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+t_f)^T-\text{FVDiv}$.

> [!Note]
>
> The dividend has more volatility than coupon.

Specifically, for **Equity Index futures**, we use continuous compounding for the pricing formula above, that is 

* $F_0(T)=S_0\times e^{(r_f^c-\delta^c)T}$,

where $\delta$ is the dividend yield.

> [!TIP]
>
> $r_f^c=\ln(1+r_f)$, $e^{r_f^cT}=(1+r_f)^T$.

> [!NOTE]
>
>When $r_f^c>\delta^c$, we have $F_0(T)>S_0$, the future is **contango**, else is **backwardation**.

#### Valuation

In general case at time $t$, the valuation is: 

* $V_{l,t}=S_te^{-\delta(T-t)}-F_0(T)e^{-r_f^c(T-t)}$.
* $V_{s,t}=F_0(T)e^{-r_f^c(T-t)}-S_te^{-\delta(T-t)}$. 

Both $r_f^c$ and $\delta^c$ same through the formula. 

> [!NOTE]
>
> $S_te^{-\delta(T-t)}=F_t(T)e^{-r_f^c(T-t)}$

##### Example

Assume a future contract on DJIA index with 100 days, Currently, DJIA is at $21000$ with continuous dividend yield is $2\%$,The continuous compounded risk free rate is $3.2\%$. After $75$ days, DJIA is at $20,050$. Calculate the valuation of the futures contract to the long position.

<span class="blur-hover">

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
   

</span>



## Forward Rate Agreement

> [!WARNING]
>
> In the context of FRA, we are using **simple interest** instead of compounding.

**Def**: Forward rate agreement(FRA) is an OTC forwards contract in which underlying is floating interest rate like Libor. The long side could borrow at fix rate in the future.

*  Long: Pay Fix, Receive Float.
* Short: Pay Float, Receive Fix.

**Notation:** The notation of FRA is $a\times b \text{FRA}$, where $a$ is the number of months until the contract expiress and $b$ is the number of months until the underlying loan is settled.

**Use**: FRA is used to hedge the risk of borrowing or lending. The side depends on the natural position.

### Pricing 

Forward rates are calculated from pricing models:
$$
1+S_b\frac{b}{12}=(1+S_a\frac{a}{12})(1+FR\frac{b-a}{12})
$$
where $S_a, S_b$ are the spot rate at $a,b$ observing now.

#### Example

The 6-month spot rate is $1.5\%$ and 9-month is $1.75\%$. Calculate the $6\times9\text{FRA}$ rate.

<span class="blur-hover">

* $(1+1.5\%\times 0.5)(1+\frac{r}{4})=1+1.75\%\times0.75$
* $r=2.22\%$

</span>

### Valuation

> [!NOTE]
>
> The interest saving due to FRA position comes at time $b$ but is settled at time $a$. **Always draw timeline when calculating valuation.**

* $V_{l,t}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{ix}})\times\frac{b}{12}}{1+r_{\text{float}}\times (\frac{\text{b}}{12})}$, where $r_{\text{fix}}$ is the forward rate in contract, and $r_{\text{float}}$ is the market spot rate at time $a$ (underlying rate).

* Common case: at time $t$ between $0$ and $a$, we use the forward rate from $a$ to $b$ ovserving at time $t$ as $r_{\text{float}}$ to calculate the value of position at time $b$. Then, we discount to $t$ using spot rate to $b$ at $t$. That is:
  $$
  V_{l,t}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{ix}})\times\frac{b}{12}}{1+r_{\text{float}}\times (\frac{\text{b+a-t}}{12})}
  $$
  

#### Example

For $1\times 4 \text{FRA}$, NP is $1$m, underlying rate is 90-day LIBOR. The forward rate is $7\%$.

At $t=30$ days, underlying rate is $8\%$. Calculate the payment value of this FRA. 

<span class="blur-hover">

The time is already at settlement (1 month). We can directly use the formula to calculate:
$$
V_{l,t}=\frac{1\times 1\%\times0.25 }{1+0.25\times8\%}=2450.98
$$
</span>

## Fixed Income Futures

### Accured Interes

The price of bond is quoted in clean price (flat price) without accured interest,  to compensate, it is given in:
$$
AI = \frac{t}{T}PMT
$$

### Delivery

> [!Important]
>
> This part should be focuesed for the exam

A fixed-income futures has more than one bond that can be delivered by the short(delivery option-choose to deliver from a basket-preventing liquid issues 多方逼空).

The underlying asset is a hypothetical bond to give the quote (since actual is a basket of bonds). In market, it is usually 30 year T-bond of 6% semiannual coupon.

### Pricing

Since the underlying asset is a hypothetical asset, we need a **Conversion Factor**(CF) is used in an effort to make all deliverable bonds roughly in price.
$$
\text{Principal invoice amount}= \text{Quoted futures price}\times CF+AI
$$
The short side has right to deliver  **cheapest-to-deliver**(CTD) bond. 

 From the formual above, we will know:
$$
\begin{align}
\text{Quoted future price}&= \frac{((S_0-PVC)(1+r_f)^T-AI_T)}{CF}\\
&= \frac{(S_0(1+r_f)^T-AI_T-FVC)}{CF}
\end{align}
$$

#### Example

The underlying asset is now $\$108$ and the AI now is $\$0.083$, The bond futures contract matures in 1 month. At expiration, AI will be $\$0.25$. Assume $CF=0.729535$ and current one-month risk-frese rate is $0.1\%$. Calculate the price of the bond futures

<span class="blur-hover">

Given formula above, it is 
$$
\frac{(108.083\times(1+0.1\%)^{1/12}-0.25)}{0.729535}=147.82
$$


</span>



## Interest Rate Swap

> [!Note]
>
> In financial market, the interest rate swap has largest trading volume

In this context, we are discussing the **Plain vanilla interest swap**. Similar as the FRA:

* Long position: Paying fix, receiving float
* Short position: Paying float, receiving fixed

The floating rate payments are make **in arrears** (determined at start and pay in the end)

### Relationship with previous instruments 

* Forwards:  Swap can simply be combination of forwards, position in the same direction.  Since **no-arbitrage** principle could be violated, the forwards are off-market.
* **Bond**: Taking swap as combination of bonds are fundamental views of swap pricing. For long position of swap, it can be viewed as a combination of short selling fixed bond and long buying a float bond. 
* FRA: Swap is FRA of multiple periods.

### Pricing 

> [!Warning]
>
> Swap rate need to be annualized using simple interest.

Same as all futures and forwards, value of the contract at time $0$ should be $0$ for both sides, and all pricing and valuation are using **simple interest**.

**Pricing** of swap is possible only when one side of obligation is fixed.

> [!Important]
>
> **Assumption:** The floating rate bond's coupon rate is equal to the market rate, and the pay in arrears mode is applied. 
>
> Then **on each reset day and initial day, the floating bond price is equal to its par**

By the note above, since $V_0=0$, $PV_{fix}=PV_{float}=Par$.

Assume $F$ is the coupon for fixed-rate bond with par of $1$.

Then $1=\sum_{i=1}^n FD_i+1D_n$, $F=\frac{1-D_n}{\sum_{i=1}^nD_i}$, where $D_i$ is the discount factor under **simple interest**, which is $\frac{1}{1+ri}$.

#### Example  

Price the quarterly-pay plain vanilla swaps. The LIBOR spot rates are $R_{\text{90-days}}=2.5\%, R_{\text{180-days}}=3\%, R_{\text{270-days}}=3.5\%,R_{\text{90-days}}=4\%$. 

<span class="blur-hover">

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
</span>

#### Usage

Swap for hedging: When borrowing or lending at float rate, swap can be used to combine and make portfolio receiving fixed rate.

> [!Note]
>
> If float rate is doubled, both nominal principal and fixed rate should be doubled.

### Valuation

* $V_{l,t}=PV_{float}-PV_{fix}$
* $V_{s,t}=-V{l,t}$

First we calculate pricing $F$ with formula above, then:

* For fixed, we discount $F, NP$ to $t$
* For float, we discount the nearest par and one $F$ value to $t$.

#### Example

Following example in pricing above, let the Libor at $T=30$ to be:
$$
R_{\text{60-days}}=3\%, R_{\text{150-days}}=3.5\%, R_{\text{240-days}}=4\%,R_{\text{330-days}}=4.5\%
$$
Calculate the value for long position

<span class="blur-hover">

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

</span>

### Valuation Mathod 2

Imagine at time $t$, signing a new contract with a new fixed rate, Then the value of long position is:
$$
V_{l,t} =\sum PV(F_{t}-F_0)
$$
where $F$ is the fixed rate in the contract. 

This valuation is established from the homogenity of future floating rate. Since the future floating cash flow is same, $F_t$ represents the present value of future floating cash flow (value of new contract is $0$).

> [!Note]
>
> This formula is same as forward

  

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

<span class="blur-hover">

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

</span>



## Currency Swap 

Currency swap is another form opf interest swap rate, but using interest rate of coresponding currency. It involves:

* Exchange principal at the beginning accoring to the exchange rate, and returned at termination
* On settlement dates, interest payments are not netted
* Floating rate payments are typically made in arrears

> [!Important]
>
> The **currency exchange rate** used should be the exchange rate at the beginning.

### Pricing

For currency swaps, there are 4 potential modes:

* Pay fixed, Receive fixed
* Pay float, Receive fix,
* Pay fix, Receive float
* Pay float, receive float

For the **Fix/Float** pattern, we still use $V_{fix}=V_{float}$, always consider the fixed bond to be $1$ at par, and using the same formula for interest rate swaps: $F = \frac{1-D_n}{\sum D_i}$.

For the **Fix/Fix** pattern, let principal for both side to be $1$ at par, then use the same formula to calculate (Since we are calculating the rate, we can set principal at any value).

For the **Float/Float** pattern, pricing is impossible.

### Valuation

Take the contract as long a bond and short another in different currency, and exchange them to PV of the same currency with spot currency exchange rate. The valuation is all same as first method of Interest Rate Swap.



## Equity Swap

Equity swap is another form of Interest Rate Swap, exchanging the return of some stock (Dividend, Secondary market returns).

Exchanging all returns is called **Total Return Swap**.

### Usage

* Speculating
* Asset Allocation
* Leveraging (Borrow money and enter an Equity Swap)
* Change position (unable to buy stock or its option)

### Pricing

For the fixed side, same as the formula of Interest Rate Swap

### Valuation

For the side receiving fixed rate and pay equity returns:
$$
V_{t}=PV_{\text{fixed bond}}-\frac{S_t}{S_{t-1}}NP
$$
For the side receiving float rate and pay equity returns:
$$
V_{t}=PV_{\text{float bond}}-\frac{S_t}{S_{t-1}}NP
$$
For the side receiving equity returns and pay equity returns:
$$
V_{t}=(R_1-R_2)NP
$$
