<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 520px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
</style>

# Options

The fundamental logic is **no arbitrage**: an option is priced as the cost of a portfolio of the underlying and a risk-free bond that replicates its payoff.

## Binomial Option Valuation

### Basic Formula

Given risk neutrality, the formula at each step of length $\Delta t$ is:

$$
\begin{align}
S_u &= S_0 \cdot u\\
S_d &= S_0 \cdot d\\
p_u &= \frac{e^{r\Delta t}-d}{u-d}\\
p_d &= 1-p_u\\
C_T &= \max(S_T-X,0)\\
C_0 &= e^{-r\Delta t} \left(p_uC_u + p_dC_d\right)
\end{align}
$$

Here $r$ is continuously compounded; with a discrete rate, replace $e^{r\Delta t}$ by $(1+r)^{\Delta t}$, as in the CFA notation below. For more than one step, apply the last line at every node, from the expiry back to today (**backward induction**).

The code below prices European or American calls and puts on a tree, and reproduces the [two-period example](#example) below. It takes the up and down factors directly; `crr_factors` builds them from a volatility, and `annualized_volatility` estimates that volatility from a price history (e.g., SPY closes over the last 30 trading days).

```python
import math


def binomial_price(S, X, r, u, d, n, option="call", american=False):
    """Price an option on a recombining binomial tree.

    S: spot price; X: exercise price; r: risk-free rate per step (discrete);
    u, d: up and down factors per step; n: number of steps.
    """
    pi_u = (1 + r - d) / (u - d)                 # risk-neutral up probability
    if not 0 < pi_u < 1:
        raise ValueError("no-arbitrage requires d < 1 + r < u")
    payoff = (lambda s: max(s - X, 0.0)) if option == "call" else (lambda s: max(X - s, 0.0))

    # Values at expiry: node j has j down moves.
    values = [payoff(S * u ** (n - j) * d ** j) for j in range(n + 1)]

    # Backward induction: discounted risk-neutral expectation at each node.
    for step in range(n - 1, -1, -1):
        for j in range(step + 1):
            hold = (pi_u * values[j] + (1 - pi_u) * values[j + 1]) / (1 + r)
            if american:                         # exercise early if worth more
                hold = max(hold, payoff(S * u ** (step - j) * d ** j))
            values[j] = hold
    return values[0]


def crr_factors(sigma, dt):
    """Cox-Ross-Rubinstein up/down factors from volatility: U = e^(σ√Δt), D = 1/U."""
    u = math.exp(sigma * math.sqrt(dt))
    return u, 1 / u


def annualized_volatility(close, window=30, periods_per_year=252):
    """Volatility from the last `window` log returns of a pandas Series of prices."""
    import numpy as np
    log_returns = np.log(close / close.shift(1)).dropna()
    return log_returns.iloc[-window:].std() * math.sqrt(periods_per_year)


# The two-period example below: S = 50, X = 50, r = 5%, U = 1.356, D = 0.744
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "call")                 # 9.71
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put")                  # 5.06
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put", american=True)   # 6.10
```

> [!Note]
>
> The volatility is held constant through the tree. If $U$ changed from step to step, an up-then-down path would no longer end at the same price as a down-then-up path, and the tree would stop recombining.

### Components

Basic assumptions of binomial tree:

* Begin at $S_0$.
* Each step, the price moves up by a factor $U$ or down by a factor $D$, with $D<1+r_f<U$ (otherwise there is an arbitrage). By default $D=\frac{1}{U}$.

#### Model one

The usual choice of $U$ and $D$ (Cox, Ross and Rubinstein) assumes the **log** of the price follows a random walk: each step, $\ln S$ moves up or down by $\sigma\sqrt{\Delta t}$. So

$$
U=e^{\sigma\sqrt{\Delta t}},\qquad D=e^{-\sigma\sqrt{\Delta t}}=\frac{1}{U}
$$

and with $\Delta t=1$, $S_u=Se^{\sigma}=SU$ and $S_d=Se^{-\sigma}=SD$. The same idea, applied to interest rates rather than prices ($dr=\sigma\,dw$, where $w$ is a random walk), gives the interest rate trees of [Fixed Income](../C6%20Fixed%20Income/M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model).

### Risk-Neutral Probability

Inferred from no arbitrage: in a risk-neutral world, the stock's expected price must grow at the risk-free rate.

$$
\begin{aligned}
E(S_t)&= \pi_uS_0U+(1-\pi_u)S_0D\\
&=S_0(1+r_f)^t
\end{aligned}
$$

Solving for $\pi_u$:

$$
\begin{align}
\pi_u &= \frac{(1+r_f)^t-D}{U-D}\\
\pi_d &= 1-\pi_u = \frac{U-(1+r_f)^t}{U-D}
\end{align}
$$

These are not the real-world probabilities: they are the probabilities that make discounting at the risk-free rate give the arbitrage-free price. Neither the actual probabilities nor the stock's expected return enter the option price.

### One Period Binomial Model

Now assuming a European option, its payoffs after one step are:

$$
\begin{align}
C_{u,t}&= \max(0, S_u-X)\\
P_{u,t}&=\max(0, X-S_u)\\
C_{d,t}&=\max(0,S_d-X)\\
P_{d,t}&=\max(0,X-S_d)
\end{align}
$$

Then the value today is the risk-neutral expected payoff, discounted:

$$C_0=\frac{\pi_u C_{u,t}+\pi_d C_{d,t}}{(1+r_f)^t}$$

$$P_0 = \frac{\pi_u P_{u,t}+\pi_d P_{d,t}}{(1+r_f)^t}$$

### Put-Call Parity 

A **fiduciary call** (a call plus a risk-free bond paying $X$) and a **protective put** (the stock plus a put) have the same payoff, $\max(S_T,X)$, so they must have the same price:

|              | **Fiduciary call**      | **Protective put** |
| ------------ | ----------------------- | ------------------ |
|              | $c + \frac{X}{(1+r_f)^t}$ | $S+p$              |
| **If S ≤ X** | $0+X=X$                 | $S+(X-S)=X$        |
| **If S ≥ X** | $(S-X)+X=S$             | $S+0=S$            |

Then we have:

$$
c+\frac{X}{(1+r_f)^t}=S_0+p
$$

### Risk-free Portfolio Method

1. Construct a risk-free portfolio by **buying $\delta$ shares** and **selling one call**. Its value at time $0$ is:
   $$
   V_{0}=\delta S_0-c_0
   $$

2. Then at $t$:
   $$
   \begin{align}
   V_{u,t}&=\delta S_u-C_u\\
   V_{d,t}&=\delta S_d-C_d
   \end{align}
   $$

3. Since the portfolio is risk free, $V_{u,t}=V_{d,t}$, then we solve for the **hedge ratio**:
   $$
   \delta = \frac{C_u-C_d}{S_u-S_d}=\frac{C_u-C_d}{S_0(U-D)}
   $$

4. A risk-free portfolio must earn the risk-free rate, $V_{u,t}=(1+r_f)^t V_0$. Substituting $V_0 = \delta S_0-c_0$:
   $$
   c_0 = \delta S_0-\frac{\delta S_u-C_u}{(1+r_f)^t}
   $$
   which gives the same value as the risk-neutral probability method.

> [!Note]
>
> If the market price of the call differs from this value, there is an arbitrage: trade the call against $\delta$ shares per call ($\delta$ is the **hedge ratio**) and borrow or lend the difference.

### Two Period Binomial Model

Same as one period model, $\pi_u$ and $\pi_d$ could be calculated with same method (actually same number, as long as $U$, $D$ and the step length don't change!). Then work backward one step at a time: at each node, the value is the discounted risk-neutral expectation of the two values one step later.

#### Example

Consider a non-dividend-paying stock currently priced at €50. A European-style call option written on this stock has two years until maturity and an exercise price of €50. The risk-free interest rate is assumed to be 5% per annum. Additionally, the up factor (U) is given as 1.356 and the down factor (D) is 0.744. Based on this information, we are tasked with calculating both the current value of the call option and the current value of the corresponding put option.

<div class="reveal" tabindex="0">


To solve the problem, we begin with 

**Step 1**: calculating the stock prices in the binomial tree. The up-up price is $S^{++} = 91.94$, the up-down and down-up price is $S^{+-} = S^{-+} = 50.44$, and the down-down price is $S^{–} = 27.68$.

**Step 2**, we compute the option values at maturity. For the call option, we have $C^{++} = 41.95$, and both $C^{+-} = C^{-+} = 0.44$. The down-down call value is $C^{–} = 0$. For the put option, we get $P^{++} = P^{+-} = P^{-+} = 0$, and $P^{–} = 22.32$.

**Step 3** involves calculating the risk-neutral probability. The up probability is $\pi_U = \frac{(1 + 0.05) - 0.744}{1.356 - 0.744} = 0.5$, and the down probability is $\pi_D = 1 - \pi_U = 0.5$.

Next, we calculate intermediate option values. For the call, $C^{+} = \frac{(0.5 \times 41.94 + 0.5 \times 0.44)}{1.05} = 20.18$, and $C^{-} = \frac{(0.5 \times 0.44 + 0.5 \times 0)}{1.05} = 0.22$. For the put, $P^{+} = \frac{(0.5 \times 0 + 0.5 \times 0)}{1.05} = 0$, and $P^{-} = \frac{(0.5 \times 0 + 0.5 \times 22.32)}{1.05} = 10.63$.

**Step 4**, we calculate the initial values. The call option is worth $C_0 = \frac{(0.5 \times 20.18 + 0.5 \times 0.22)}{1.05} = 9.71$, and the put option is worth $P_0 = \frac{(0.5 \times 0 + 0.5 \times 10.63)}{1.05} = 5.06$.

As an additional tip, using the put-call parity formula, we can verify:

$P_0 = C_0 + PV(X) - S_0 = 9.71 + \frac{50}{(1.05)^2} - 50 = 5.06$.


</div>

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="Binomial interest rate, bond value, stock price and call value trees"
  loading="lazy"
></iframe>

The stock price tree and the call value tree in the chart are this example; the other two are the interest rate trees of Fixed Income.

### Advance Exercise of American Option

* American call options on non-dividend stock will not be exercised early, because the call is worth more than its exercise value, $S-X$: it is *worth more alive than dead*. So an American call on a non-dividend stock is worth the same as a European one.
* An American call on a **dividend-paying** stock may be exercised early, just before the stock goes ex-dividend, to capture the dividend.
* An American **put** may be exercised early when it is **deep in the money**: receiving $X$ now and earning interest on it can be worth more than waiting.

### Two Period Binomial Model of American Option

American option may be exercised early when:

* Exercise value is greater than arbitrage-free value
* Use the higher between exercise value and calculated price at each node.

> [!Note]
>
> Calculate the option value if exercised, at **every** node, not only at expiry.

For example, if the put in the two-period example above were American, at the down node its exercise value would be $50-37.20=12.80$, more than its hold value of 10.63. The put would be exercised there, and its value today would rise from 5.06 to 6.10 (see the code above).

### Interest Rate Option

The valuation process is the same as the standard binomial model, on an interest rate tree, but the payoff is multiplied by the notional principal (and the accrual period), e.g., a call pays $\text{NP}\times\max(0,\ r-X)\times\text{accrual period}$.

## Black-Scholes Model

### Assumption

The Black-Scholes model is the continuous version of the binomial model: the limit as the number of steps $\to\infty$ (so $\Delta t\to0$).

* The underlying asset follows Geometric Brownian Motion: its returns are normally distributed and its price is lognormal, and it moves smoothly from price to price (continuous).
* The continuously compounded risk-free rate is constant and known. Investors can borrow and lend at the risk-free rate.
* The volatility of underlying asset is constant
* The market is frictionless:
  * No transaction costs, no taxes, no regulatory constraints
  * No arbitrage
  * The underlying asset is highly liquid, and continuous trading
  * Short selling of the underlying asset is permitted
* The options are European.

### Basic Formula

The formula for Black-Scholes is:

$$
\begin{align}
C_0 &= S_0 N(d_1) - X e^{-r_f^cT} N(d_2) \\
P_0&= C_0+Xe^{-r_f^cT}-S_0\\
&=-S_0N(-d_1)+Xe^{-r_f^cT}N(-d_2)\\
d_1 &= \frac{\ln(\frac{S_0}{X}) + (r_f^c + \frac{1}{2} \sigma^2)T}{\sigma\sqrt{T}} \\
d_2 &= d_1 - \sigma\sqrt{T}
\end{align}
$$

The code prices calls and puts, with an optional continuous dividend yield $q$ (the next section), and needs no libraries: $N(\cdot)$ comes from the error function.

```python
import math


def norm_cdf(z):
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


def black_scholes(S, X, T, r, sigma, q=0.0, option="call"):
    """BSM price. r and q are continuously compounded; q is the dividend yield."""
    d1 = (math.log(S / X) + (r - q + 0.5 * sigma ** 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    if option == "call":
        return S * math.exp(-q * T) * norm_cdf(d1) - X * math.exp(-r * T) * norm_cdf(d2)
    return X * math.exp(-r * T) * norm_cdf(-d2) - S * math.exp(-q * T) * norm_cdf(-d1)


black_scholes(50, 50, 1, 0.05, 0.3)                # 7.1156
black_scholes(50, 50, 1, 0.05, 0.3, option="put")  # 4.6771 = C - S + X e^(-rT)
```

With 500 steps and `crr_factors(0.3, 1/500)`, `binomial_price` gives 7.1127 for the same call: the tree converges to Black–Scholes.

### Initial Model

Similar to put-call parity, the formula shows the replicating portfolio:

* A **call option** is a leveraged stock investment: long $N(d_1)$ shares, financed by borrowing $N(d_2)Xe^{-r_f^cT}$, i.e., short a risk-free zero-coupon bond.
* A **put option** is long $N(-d_2)$ units of a risk-free zero-coupon bond paying $X$, plus short $N(-d_1)$ shares.

#### Conclusion of $N(d_1)$ and $N(d_2)$

* $N(d_1)$ is the $\delta$ of call option
* $-N(-d_1)$ is the $\delta$ of a put option
* $N(d_2)$ is the risk-neutral probability that a call option will be exercised at expiration (ITM).
* $N(-d_2)$ is the risk-neutral probability that a put option will be exercised at expiration (ITM).
* $N(-d_2)=1-N(d_2)$, and likewise $N(-d_1)=1-N(d_1)$.

### BSM Model with Carrying Benefits or Costs

With a continuous yield $\gamma$ on the underlying (a dividend yield, or a foreign interest rate for currency options), replace $S_0$ by $S_0e^{-\gamma T}$:

$$
\begin{align}
C_0 &= S_0e^{-\gamma T}N(d_1)\\
&\quad-Xe^{-r_f^cT}N(d_2) \\
P_0 &= Xe^{-r_f^c T}N(-d_2)\\
&\quad-S_0e^{-\gamma T}N(-d_1) \\
d_1 &=\frac{\ln(\frac{S_0}{X})+(r_f^c-\gamma+\frac{\sigma^2}{2})T}{\sigma\sqrt{T}}\\
d_2 &= d_1-\sigma\sqrt{T}
\end{align}
$$

A higher yield lowers the call's value and raises the put's: the holder of the option does not receive the yield.

### Options On Future

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=futopt"
  title="Option on futures timeline: option life, then the futures contract"
  loading="lazy"
></iframe>

#### Position

The position in the futures depends on the position in the option:

* Long call $\to$ Long futures position
* Long put $\to$ Short futures position

The strike price $X$ is set in the option. At the option's expiry $m$, with the futures price $F_m(n)$: a long call is exercised if $F_m(n)>X$; a long put is exercised if $F_m(n)<X$. On exercise, the futures position is marked to market at once, so the holder receives $F_m(n)-X$ (call) or $X-F_m(n)$ (put) in cash.

#### Black Model

The Black model is BSM with the futures price in place of the spot price. A futures position costs nothing to hold, so its "yield" equals the risk-free rate, and both terms are discounted:

$$
\begin{align}
C_0 &= e^{-r_f^cT}\left[F_0N(d_1)-XN(d_2)\right]\\
P_0 &= e^{-r_f^cT}\left[XN(-d_2)-F_0N(-d_1)\right]\\
d_1 &= \frac{\ln (\frac{F_0(T)}{X})+\frac{\sigma^2}{2}T}{\sigma\sqrt{T}}\\
d_2&=d_1-\sigma\sqrt{T}
\end{align}
$$

where $F_0=F_0(T)$ is today's futures price and $T$ is the option's time to expiry.

> [!Important]
>
> In practice, options on futures are often American, and the option usually expires on or shortly before the futures' own expiry.

### Interest Rate Option

The contract is similar to an option on futures and to an FRA. The position judgement and exercise case are exactly the same as for options on futures, with the FRA rate as the underlying: an interest rate **call** pays off when the rate rises above $X$ (like a long FRA), a **put** when it falls below.

$$
\begin{align}
C_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^c n \frac{30}{360}}\\
&\quad\times\left(FR_{m\times n} N(d_1)-XN(d_2)\right)\\
P_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^cn\frac{30}{360}}\\
&\quad\times\left(XN(-d_2)-FR_{m\times n}N(-d_1)\right)
\end{align}
$$

* $m$: months until the option expires and the rate is set; $n$: months until the interest is paid. So the payoff is discounted over $n$ months, and the accrual period is $(n-m)$ months.
* $FR_{m\times n}$: today's forward rate for the period from $m$ to $n$; $X$: the exercise rate. In $d_1$, $F_0(T)$ is replaced by $FR_{m\times n}$.
* A **cap** is a series of interest rate calls (caplets) and a **floor** a series of puts (floorlets). Long a cap and short a floor at the same exercise rate is a pay-fixed swap.

### Swaption

A swaption is an option to enter a swap:

1. A **payer** swaption is an option to enter into a swap as the fixed-rate payer (Long). It gains when rates rise: a call on the swap rate.
2. A **receiver** swaption is an option to enter into a swap as the fixed-rate receiver (Short). It gains when rates fall: a put on the swap rate.

$$
\begin{align}
C_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_{fix}N(d_1)-R_XN(d_2)\right)\\
P_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_XN(-d_2)-R_{fix}N(-d_1)\right)
\end{align}
$$

* $R_{fix}$: the forward swap rate today, for a swap starting at the option's expiry; $R_X$: the exercise (fixed) rate.
* AP: the accrual period of each swap payment (e.g., 0.25 for quarterly).
* PVA: the present value annuity factor, the sum of the discount factors for the swap's payment dates.
* Payer minus receiver swaption, at the same exercise rate, is a forward pay-fixed swap (put-call parity).

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=swaption"
  title="Swaption timeline: option life, then the swap's payment dates"
  loading="lazy"
></iframe>

## Greeks

From Black-Scholes model,

$$
C_0 = S_0 N(d_1) - X e^{-r_f^cT} N(d_2) 
$$

We can understand it as a function of five inputs:

$$
C_0 = f(S_0, X, r_f^c, T, \sigma)
$$

The Greeks are its partial derivatives: each measures the option's sensitivity to one input, holding the others constant.

$\delta$ is defined as:

$$
\delta = \frac{\partial C_0}{\partial S_0}
$$

$\gamma$ is defined as:

$$
\gamma = \frac{\partial^2 C_0}{\partial S_0^2}=\frac{\partial \delta}{\partial S_0}
$$

$\theta$ is defined as:

$$
\theta = \frac{\partial C_0}{\partial t}
$$

i.e., the change in value as time passes (as $T$ shrinks).

$\upsilon$ (vega) is defined as:

$$
\upsilon = \frac{\partial C_0}{\partial \sigma}
$$

$\rho$ is defined as:

$$
\rho = \frac{\partial C_0}{\partial r_f^ c}
$$

| Greek | Call | Put | Notes |
| --- | --- | --- | --- |
| Delta $\delta$ | $0$ to $1$ | $-1$ to $0$ | Largest change near the money |
| Gamma $\gamma$ | $>0$ | $>0$ (same as call) | Highest at the money |
| Theta $\theta$ | Usually $<0$ | Usually $<0$ | Time decay |
| Vega $\upsilon$ | $>0$ | $>0$ (same as call) | Highest at the money |
| Rho $\rho$ | $>0$ | $<0$ | Small for short-dated options |

<iframe
  class="fx-concept-chart"
  src="/charts/option-greeks.html"
  title="Delta of a call and a put, and gamma with one year and one month to expiry"
  loading="lazy"
></iframe>

### Delta

For non-dividend paying stock: $\delta_{call}=N(d_1)$, $\delta_{put} = -N(-d_1)=N(d_1)-1$.

> [!Note]
>
> In this case, $\delta_{call}=\delta_{put}+1$

For dividend-paying stock, where $\delta$ here is denoting the dividend rate:

$$\Delta_{call}=e^{-\delta T}N(d_1)$$

$$\Delta_{put}=-e^{-\delta T}N(-d_1)$$

> [!Note]
>
> $\delta$ is between $(0,1)$ for call and $(-1, 0)$ for put. It changes most sharply near the money, and more so as expiration gets closer.

Delta and gamma together approximate the change in the option's value for a change in the stock price:

$$
\Delta C\approx\delta\,\Delta S+\tfrac12\gamma\,(\Delta S)^2
$$

A **delta-neutral** portfolio holds $-\delta$ shares per long option (or $\delta$ shares per short option), so small stock moves leave its value unchanged.

### Gamma

> [!Note]
>
> $\gamma$ and $\delta$ are just convexity and duration in fixed income: the second- and first-order sensitivities to the underlying.

$\gamma$ reaches its max when at the money. For an at-the-money option, $\gamma$ increases as expiration gets closer. For deep in-the-money and out-of-the-money options, $\gamma$ decreases as expiration gets closer.

> [!Note]
>
> **$\gamma$ neutral strategy** can be built by combining positions of options, then further build $\delta$ neutral strategy by add position of underlying stock (since stock has no $\gamma$).

### Theta

Theta is usually negative for both call and put options, as they lose value as time passes (time decay). With:

* **Exception:** deep in-the-money European put options, which can gain value over time, as the strike they will receive gets closer to being paid.

### Vega and Rho

* **Vega** is positive for both calls and puts: higher volatility raises the chance of large payoffs, while the loss is limited to the premium. It is highest at the money, and is the only Greek that needs a forecast (the volatility).
* **Rho** is positive for calls and negative for puts: a higher rate lowers the present value of the exercise price, which the call holder pays and the put holder receives.
