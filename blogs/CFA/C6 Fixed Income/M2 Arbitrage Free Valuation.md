<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 671px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 1190px; }
}
</style>

# Arbitrage Free Valuation

Traditional bond valuation discounts every cash flow at a single rate, the YTM. **Arbitrage-free valuation** instead prices a security so that **no arbitrage is possible**: each cash flow is discounted at the spot rate for its own date, so the value is consistent with the prices of every other bond in the market.

**Arbitrage** is a violation of the **law of one price**: two assets (or portfolios) with the same future cash flows must have the same price today. If they do not, an investor can buy the cheap one, sell the expensive one, and lock in a riskless profit.

**Example.** Four risk-free assets:

| Asset | Price today | Payoff in one year |
| ----- | ----------: | -----------------: |
| A     | 0.952381    | 1                  |
| B     | 95          | 105                |
| C     | 100         | 105                |
| D     | 200         | 220                |

Asset A prices 1 paid in one year at 0.952381, a 5% rate. At that price, a payoff of 105 is worth $105\times0.952381=100$, and a payoff of 220 is worth $220\times0.952381=209.52$:

* **C** is priced at 100: **fair**.
* **B** is priced at 95, below 100: **underpriced** by 5.
* **D** is priced at 200, below 209.52: **underpriced** by 9.52.

To exploit B:

* **T = 0**: short 105 units of A (receive $105\times0.952381=100$) and buy B for 95. Profit today: **5**.
* **T = 1**: B pays 105, which exactly covers the 105 owed on the short position in A. Net cash flow: **0**.

There are two types of arbitrage opportunities:

* **Value additivity**: the value of the whole must equal the sum of the values of its parts. When it does not, dealers trade the difference:
  * **Stripping**: separating a bond's individual cash flows and trading them as zero-coupon securities (when the parts are worth more than the whole).
  * **Reconstitution**: recombining the zero-coupon securities to reproduce the underlying coupon bond (when the whole is worth more than the parts).
* **Dominance**: a financial asset with a **risk-free payoff** in the future must have a **positive price** today. More generally, an asset that pays at least as much in every state cannot cost less.

For an **option-free** bond, the arbitrage-free value is simply the PV of its cash flows, each discounted at its own **spot rate**.

For a bond with **embedded options**, the expected future cash flows **depend on how interest rates change** (a callable bond is likely to be called if rates fall), so a single set of spot rates is not enough. We use a **binomial interest rate tree** to value it. The tree can also value ordinary option-free bonds, and gives the same answer as discounting at spot rates.

## Term Structure Models

Term structure models describe how the short-term interest rate $r_t$ evolves over time. They have the general form

$$dr_t=\underbrace{\text{drift}}_{\text{expected change}}\,dt+\underbrace{\text{volatility}}_{\text{size of shocks}}\,dZ$$

where $dZ$ is the increment of a **Wiener process** (a continuous-time random walk): a random shock with mean 0 and variance $dt$. There are two families.

**Equilibrium term structure models** describe the dynamics of the term structure using **fundamental economic variables** that are assumed to affect interest rates.

* They can be **one-factor** (only the short rate) or **multi-factor** models.
* They require a specification of the **drift** term and an assumption about the **functional form of interest rate volatility**.
* Their parameters come from economic assumptions or history, so their prices need not match today's market prices exactly.

### Cox-Ingersoll-Ross Model

The CIR model assumes the economy has a **long-run equilibrium short rate**, and the short rate **reverts toward it** (mean reversion): when $r_t$ is above $\theta$ the drift is negative, and when it is below, positive.

$$dr_t=k(\theta-r_t)\,dt+\sigma\sqrt{r_t}\,dZ$$

* $\theta$: the long-run value of the short-term interest rate (the equilibrium value)
* $k$: a positive number, the **speed of mean reversion**
* $\sigma$: interest rate volatility
* $dZ$: the random shock, normally distributed with mean 0 and variance $dt$

The volatility term $\sigma\sqrt{r_t}$ **shrinks as rates fall**: near zero the shocks become tiny while the drift pulls the rate back up, so **interest rates cannot become negative**.

### Vasicek Model

$$dr_t=k(\theta-r_t)\,dt+\sigma\,dZ$$

The drift is the same mean reversion as in CIR, but the volatility $\sigma$ is **constant**, independent of the level of rates.

In comparison with the CIR model:

* In CIR, the $\sqrt{r_t}$ factor makes the size of the shocks depend on the level of $r_t$; in Vasicek it does not.
* Because Vasicek's shocks do not shrink near zero, **interest rates can become negative**. CIR's level-dependent volatility makes negative rates impossible.

### Ho-Lee Model

**Arbitrage-free term structure models** start from the other direction: the model must **reproduce today's market prices** of benchmark bonds ($V=P$). Their parameters are **calibrated** to the current term structure, and the model is then used to value other securities, such as bonds with embedded options.

$$dr_t=\theta_t\,dt+\sigma\,dZ$$

* $\theta_t$ is a **time-dependent drift**, chosen so that the model prices every benchmark bond exactly. It is different from the constant equilibrium level $\theta$ in CIR and Vasicek.
* Volatility $\sigma$ is constant, and rates are **normally** distributed, so they **can become negative**.

### Kalotay-Williams-Fabozzi Model

$$d(\ln r_t)=\theta_t\,dt+\sigma\,dZ$$

The KWF model is the Ho-Lee model applied to the **logarithm** of the short rate. The log of the short rate is normally distributed, so the rate itself is **lognormal** and **cannot become negative**. The binomial interest rate tree below follows the same lognormal assumption.

| Model | Type | Drift | Volatility | Negative rates? |
| --- | --- | --- | --- | --- |
| CIR | Equilibrium | Mean-reverting, $k(\theta-r_t)$ | $\sigma\sqrt{r_t}$ | No |
| Vasicek | Equilibrium | Mean-reverting, $k(\theta-r_t)$ | Constant $\sigma$ | Yes |
| Ho-Lee | Arbitrage-free | Time-dependent $\theta_t$ | Constant $\sigma$ | Yes |
| KWF | Arbitrage-free | Time-dependent $\theta_t$, on $\ln r_t$ | Constant $\sigma$ on $\ln r_t$ | No |

## Binomial Tree Model

A binomial tree branches **forward** through time, one up and one down move per step, and then **values backward** from the final nodes. The same idea underlies the interest rate tree used here and the stock and option trees in Derivatives:

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="Binomial interest rate, bond value, stock price and call value trees"
  loading="lazy"
></iframe>

> [!Note]
>
> For the stock and option trees, see [Binomial Option Valuation](../C7%20Derivative/M2%20Options.md#binomial-option-valuation) in Derivatives.

**Structure.**

* At step $n$ there are $n+1$ nodes. The tree **recombines** (up-then-down reaches the same node as down-then-up) because volatility is held unchanged; in reality volatility changes, but recombining keeps the tree small.
* The shorter the time step, the more precise the tree. In the exam, the step is usually **one year**.
* In CFA Level II **Fixed Income** only, the up and down moves are assumed to be **equally likely (50% each)**. In Derivatives, the probabilities must be calculated as risk-neutral probabilities; see [Risk-Neutral Probability](../C7%20Derivative/M2%20Options.md#risk-neutral-probability).

**Node spacing.** One-period rates are assumed to follow a **lognormal random walk**, so adjacent nodes differ by a constant factor that depends only on the interest rate volatility $\sigma$:

$$i_{1,U}=i_{1,L}\,e^{2\sigma}$$

At later steps, each node is the node below it times $e^{2\sigma}$: for example, $i_{2,LU}=i_{2,LL}\,e^{2\sigma}$ and $i_{2,UU}=i_{2,LL}\,e^{4\sigma}$. A higher volatility spreads the nodes further apart.

**What the nodes mean.**

* Each node is a **possible one-period rate** at that future date: a one-period forward rate in one scenario. The rates at each date are spread around the corresponding forward rate.
* So the nodes line up with the **Level I** view of forward rates: the same tenor (one period), starting at different times.
* The **traditional term structure theories** discuss the **expected** future rate; the binomial tree describes the **possible** future rates and how likely each is.
* The **modern term structure models** above are more specific than a binomial tree: they describe the full random process. Each node of the tree can be viewed as one possible outcome of their stochastic term.

### Valuing the Option-Free Bond

The bond value at any node is the **average of the two possible values one period later**, each **plus the coupon** paid then, discounted at the node's rate:

$$V=\frac{1}{1+i}\cdot\frac{(V_U+C)+(V_D+C)}{2}$$

**Example.** The tree has 3% today, and 8% (up) or 5% (down) in one year. A 2-year bond has a par value of 100 and a 7% annual coupon.

* Year 1, up node: $V_{1,U}=107/1.08=99.074$
* Year 1, down node: $V_{1,D}=107/1.05=101.905$
* Today:

$$
\begin{aligned}
V_0&=\frac{1}{1.03}\cdot\frac{(99.074+7)+(101.905+7)}{2}\\
&=\frac{107.490}{1.03}=104.359
\end{aligned}
$$

Don't forget to **add the coupon** at each step before averaging.

Unlike other trees, the bond value tree **converges at maturity**: every path ends at par (plus the final coupon), because the bond pays the same amount whatever rates have done.

### Construct Binomial Interest Rate Tree

The tree must be **arbitrage-free**: it must price the benchmark (on-the-run, option-free) bonds at their market prices. It is built one step at a time from the **par curve** (or the spot curve), by bootstrapping, with adjacent nodes a factor $e^{2\sigma}$ apart. There are two ways to set the nodes.

**1. Calibration (exact).** At each step, choose the lowest node by trial and error, with the others at $e^{2\sigma}$ multiples, until the tree prices the next par bond at exactly par.

**Example.** The 1-year par rate is 2%, the 2-year par rate is 3%, and $\sigma=15\%$. Today's node is 2%. Find the year-1 nodes $i_{1,L}$ and $i_{1,U}=i_{1,L}e^{0.30}$ that price the 2-year 3% bond at 100. The solution is $i_{1,L}=3.442\%$ and $i_{1,U}=4.646\%$:

$$
\begin{aligned}
&\frac{1}{1.02}\cdot\frac{\left(\frac{103}{1.04646}+3\right)+\left(\frac{103}{1.03442}+3\right)}{2}\\
&=\frac{102.000}{1.02}=100.00
\end{aligned}
$$

**2. Approximation from forward rates.** Centre the nodes on the forward rate, $\pm\sigma$ around it:

$$i_{1,L}\approx f(1,1)\,e^{-\sigma},\qquad i_{1,U}\approx f(1,1)\,e^{\sigma}$$

In the example, the spot rates are $s_1=2\%$ and $s_2=3.015\%$, so $f(1,1)=4.040\%$, which gives $4.040\%\times e^{-0.15}=3.478\%$ and $4.040\%\times e^{0.15}=4.694\%$, close to the calibrated values.

### Pathwise Valuation

Instead of working backward through the tree, **discount the cash flows along each possible path** of rates, then take the **average** of the path values.

* With annual steps, an $N$-year bond has $2^{N-1}$ paths (the first rate is known today).
* The result is **the same** as backward induction through the tree.

**Example (the 2-year bond above).** There are $2^{2-1}=2$ paths:

* Path up (3%, 8%): $\dfrac{7}{1.03}+\dfrac{107}{1.03\times1.08}=102.985$
* Path down (3%, 5%): $\dfrac{7}{1.03}+\dfrac{107}{1.03\times1.05}=105.733$
* Average: $\dfrac{102.985+105.733}{2}=104.359$, the same as the tree.

## Monte Carlo

Some fixed income products have **path-dependent** cash flows: what they pay at a date depends on the **whole history** of interest rates up to that date, not just on the rate at that date. A binomial tree cannot value them, because backward induction assumes the value at a node depends only on the rate at that node. A **mortgage-backed security (MBS)** is the standard example, so we use **simulation** to model the rates.

**Why MBS cash flows are path dependent.** Homeowners can **prepay** their mortgages, and they usually do so when they can **refinance** at a lower rate. Whether a borrower has prepaid by a given date therefore depends on whether rates **fell enough at any time before then**, not only on today's rate. Prepayments also show **burnout**: once rates have been low for a while, the borrowers most likely to refinance have already done so, and the pool prepays more slowly than the same rate level would otherwise suggest. So two paths that end at the same rate can leave very different pools, and very different cash flows.

**The method.**

1. Simulate a large number of **random paths** of one-period interest rates, e.g., from one of the term structure models above, such as CIR.
2. Calculate the **cash flows along each path**, including any path-dependent prepayments.
3. Discount them along the path to get a **present value** for each path.
4. The security's value is the **average** of the path values.

The model is calibrated so that it prices benchmark bonds correctly (a **drift adjustment**), which keeps it arbitrage-free.

The exam does not require an exact implementation of Monte Carlo: knowing when to use it and the definition is enough. My past projects contain a real implementation, such as the risk control module in testbot_tg: https://github.com/SEANPNEX/testbot_tg/blob/main/plugins/stock_monitor/risk.py

The modern term structure models above, such as the CIR model, can be simulated with Monte Carlo.
