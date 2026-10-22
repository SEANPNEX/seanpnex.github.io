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
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.ts-forward-chart { height: 555px; }
.fx-concept-chart.ts-calendar-chart { height: 602px; }
.fx-concept-chart.ts-relation-chart { height: 483px; }
.fx-concept-chart.ts-convexity-chart { height: 526px; }
@media (max-width: 587px) {
    .fx-concept-chart { height: 889px; }
    .fx-concept-chart.ts-forward-chart { height: 606px; }
    .fx-concept-chart.ts-calendar-chart { height: 620px; }
    .fx-concept-chart.ts-relation-chart { height: 854px; }
    .fx-concept-chart.ts-convexity-chart { height: 930px; }
}
</style>

# Term Structure and Interest Rate Dynamics

## Rates and Curves

### Spot Rate

> [!Note]
>
> All rates are **annualized** unless specified otherwise.

* A **spot rate** is the rate, observed **today**, for a single payment at a future date. It is the yield on a **zero-coupon** bond of that maturity, so it is also called the **zero rate**. Spot rates are usually taken from default-free (government) bonds.
* $s_n$ is the spot rate for maturity $n$ years.
* The **spot curve** (zero curve) plots the spot rates $s_n$ against maturity $n$.
* Few zero-coupon bonds trade at long maturities, so long-term spot rates are usually **inferred by bootstrapping** from the prices of coupon bonds: solve for $s_1$ from the one-year bond, then use it to solve for $s_2$ from the two-year bond, and so on.
* The spot curve **changes over time**: today's curve is a snapshot, and tomorrow's will differ.

<iframe
  class="fx-concept-chart ts-spot-chart"
  src="/charts/term-structure-curves.html?view=spot"
  title="Spot curve and discount factors"
  loading="lazy"
></iframe>

**Discount factor.** $P(j)$ is the value today of 1 paid in year $j$:

$$P(j)=\frac{1}{(1+s_j)^j}$$

It is fundamentally a transform of the spot rate that turns discounting into a **multiplication**: $\text{PV}=\text{FV}\times P(j)$. Discount factors are below 1 and **fall** as maturity lengthens. In the chart, $s_5=3.30\%$ gives $P(5)=1/1.033^5=0.8502$.

### Forward Rate

#### Forward Rate and Forward Curve

A **forward rate** is the interest rate, **agreed today**, for a loan that **starts at a future date** and runs for a set period. It locks in today the rate for borrowing or lending between two future dates.

* $f(j,k)$ is the forward rate for a loan **starting in year $j$** and running for **$k$ years**, so it ends in year $j+k$.
* Similarly, the **forward discount factor** $F(j,k)$ is the value **at year $j$** of 1 paid in year $j+k$:

$$F(j,k)=\frac{1}{\left(1+f(j,k)\right)^k}$$

The **forward curve** in Level II is the **term structure of forward rates**: forward rates against their tenor $k$, all with the **same initiation date** $j$. The spot curve is the forward curve with $j=0$.

> [!Note]
>
> This definition is different from Level I, which plots a series of forward rates that each have the **same tenor** (e.g., one-year forwards $f(1,1), f(2,1), f(3,1), \dots$) against the year they start or end.

Each initiation date gives its own forward curve:

<iframe
  class="fx-concept-chart ts-forward-chart"
  src="/charts/term-structure-curves.html?view=forward"
  title="Forward curves f(j, k) by initiation date j"
  loading="lazy"
></iframe>

In practice, the bond market usually draws them against **calendar years**: each curve starts at its initiation year, and each point sits at the year its loan ends.

<iframe
  class="fx-concept-chart ts-calendar-chart"
  src="/charts/term-structure-curves.html?view=calendar"
  title="Forward curves on calendar years"
  loading="lazy"
></iframe>

#### Forward Rate Models

Forward rates follow from spot rates (covered in Level I). Investing for two years at $s_2$ must give the same result as investing for one year at $s_1$ and then rolling into the one-year forward rate $f(1,1)$:

$$(1+s_2)^2=(1+s_1)\left(1+f(1,1)\right)$$

In general:

$$(1+s_{j+k})^{j+k}=(1+s_j)^j\left(1+f(j,k)\right)^k$$

The equality is guaranteed by **arbitrage**: if the forward rate were higher, investors would lend forward and borrow spot, and vice versa, until the two routes paid the same.

**Example.** With $s_1=2.00\%$, $s_2=2.40\%$ and $s_3=2.75\%$ (the curve in the charts):

$$f(1,1)=\frac{1.024^2}{1.02}-1=\frac{1.048576}{1.02}-1=2.80\%$$

$$f(1,2)=\left(\frac{1.0275^3}{1.02}\right)^{1/2}-1=\left(\frac{1.084790}{1.02}\right)^{1/2}-1=3.13\%$$

> [!Note]
>
> **A shortcut for calculation.** When $x\to0$, $(1+x)^a\simeq1+ax$. If $(1+r_1)^a=(1+r_2)^b(1+r_3)^c$ with $a=b+c$, then
>
> $$1+ar_1\simeq(1+br_2)(1+cr_3)=1+br_2+cr_3+bc\,r_2r_3\simeq1+br_2+cr_3$$
>
> because the product of two small rates is negligible. So $ar_1\simeq br_2+cr_3$: the longer rate is roughly the **time-weighted average** of the shorter ones. In the example, $f(1,1)\simeq2\times2.40\%-2.00\%=2.80\%$ and $f(1,2)\simeq(3\times2.75\%-2.00\%)/2=3.125\%$, very close to the exact answers.

Given the spot rates, every forward rate, and therefore every forward curve, can be derived. In practice, long-term spot rates are much less accurate, because they are inferred from few, less liquid bonds, so long-dated forwards inherit that error.

The same relationship holds for discount factors, where it is simply multiplication:

$$P(j+k)=P(j)\,F(j,k)\quad\Longrightarrow\quad F(j,k)=\frac{P(j+k)}{P(j)}$$

#### Relationship between Curves

**When the spot curve is increasing, the forward curves lie above it. When it is decreasing, they lie below it.**

*Why.* Apply the shortcut to the forward rate model:

$$(j+k)\,s_{j+k}\simeq j\,s_j+k\,f(j,k)\quad\Longrightarrow\quad f(j,k)\simeq s_{j+k}+\frac{j}{k}\left(s_{j+k}-s_j\right)$$

The long spot rate $s_{j+k}$ is a weighted average of $s_j$ and $f(j,k)$, so the forward rate must lie on the **far side** of it from $s_j$:

* **Increasing** spot curve: $s_{j+k}>s_j$, so $f(j,k)>s_{j+k}\ge s_k$. The forward curve is above the spot curve.
* **Decreasing** spot curve: $s_{j+k}<s_j$, so $f(j,k)<s_{j+k}\le s_k$. The forward curve is below the spot curve.

For example, $f(2,3)\simeq3.30\%+\tfrac{2}{3}(3.30\%-2.40\%)=3.90\%$, above $s_5=3.30\%$, and the exact value is also 3.90%.

<iframe
  class="fx-concept-chart ts-relation-chart"
  src="/charts/term-structure-curves.html?view=relation"
  title="Forward curve above a rising spot curve, below a falling one"
  loading="lazy"
></iframe>

**Whether the forward curve itself rises or falls depends on the convexity of the spot curve**, not just on its slope. With continuous compounding, the spot rate is the average of the instantaneous forward rates, $t\,s(t)=\int_0^t f(u)\,du$. Differentiating:

$$f(t)=s(t)+t\,s'(t),\qquad f'(t)=2\,s'(t)+t\,s''(t)$$

* $f-s=t\,s'$: the forward is above the spot curve exactly when the spot curve is rising, as above.
* **Linear** spot curve ($s''=0$): $f'=2s'$, so the forward curve slopes the same way, twice as steeply.
* **Concave** rising spot curve ($s''<0$): the forward curve rises at first, but **peaks and turns down** where $t\,s''(t)=-2\,s'(t)$, while still staying above the spot curve.
* **Convex** rising spot curve ($s''>0$): the forward curve rises even faster.

The discrete version is the same idea: the one-year forward is $f(n,1)\simeq s_{n+1}+n\,(s_{n+1}-s_n)$, so it falls once the spot curve's increments shrink fast enough.

<iframe
  class="fx-concept-chart ts-convexity-chart"
  src="/charts/term-structure-curves.html?view=convexity"
  title="Spot curve convexity and the shape of the forward curve"
  loading="lazy"
></iframe>

**Shapes of the yield curve.** In developed markets, yield curves are usually **increasing and concave**: yields rise with maturity, but by less and less (a diminishing marginal yield). A rough economic explanation (covered in detail later in Fixed Income):

* Nominal yields include a premium for **expected inflation**, which is associated with relatively strong economic growth.
* Investors demand a **risk premium** for holding longer bonds, which adds to the positive slope.

Other shapes:

* An **inverted** (downward-sloping) curve is uncommon. It may reflect market expectations of **declining future inflation** and policy rates, for example ahead of a recession. The real-world causes are more complex and often policy-related; see the US 10-year minus 3-month spread on [FRED (T10Y3M)](https://fred.stlouisfed.org/series/T10Y3M).
* A **flat** curve typically occurs as a brief **transition** between an upward-sloping and an inverted curve.
* A **humped** curve, with intermediate maturities yielding the most, is rare.

### Par rate



### YTM



### Swap Rate





## Spread



## Traditional Term Structure Theories



## Yield Curve Factor Models



## Active Bond Portfolio Management



## Developing Interest Rate Views Using Macroeconomics

