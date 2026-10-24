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
.fx-concept-chart.ts-par-chart { height: 572px; }
.fx-concept-chart.ts-z-chart { height: 600px; }
.fx-concept-chart.ts-factor-chart { height: 744px; }
.fx-concept-chart.ts-shape-chart { height: 509px; }
@media (max-width: 587px) {
    .fx-concept-chart { height: 889px; }
    .fx-concept-chart.ts-forward-chart { height: 606px; }
    .fx-concept-chart.ts-calendar-chart { height: 620px; }
    .fx-concept-chart.ts-relation-chart { height: 854px; }
    .fx-concept-chart.ts-convexity-chart { height: 930px; }
    .fx-concept-chart.ts-par-chart { height: 569px; }
    .fx-concept-chart.ts-z-chart { height: 619px; }
    .fx-concept-chart.ts-factor-chart { height: 1377px; }
    .fx-concept-chart.ts-shape-chart { height: 898px; }
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

$$
\begin{aligned}
f(1,1)&=\frac{1.024^2}{1.02}-1\\
&=\frac{1.048576}{1.02}-1=2.80\%
\end{aligned}
$$

$$
\begin{aligned}
f(1,2)&=\left(\frac{1.0275^3}{1.02}\right)^{1/2}-1\\
&=\left(\frac{1.084790}{1.02}\right)^{1/2}-1=3.13\%
\end{aligned}
$$

> [!Note]
>
> **A shortcut for calculation.** When $x\to0$, $(1+x)^a\simeq1+ax$. If $(1+r_1)^a=(1+r_2)^b(1+r_3)^c$ with $a=b+c$, then
>
> $$
> \begin{aligned}
> 1+ar_1&\simeq(1+br_2)(1+cr_3)\\
> &=1+br_2+cr_3+bc\,r_2r_3\\
> &\simeq1+br_2+cr_3
> \end{aligned}
> $$
>
> because the product of two small rates is negligible. So $ar_1\simeq br_2+cr_3$: the longer rate is roughly the **time-weighted average** of the shorter ones. In the example, $f(1,1)\simeq2\times2.40\%-2.00\%=2.80\%$ and $f(1,2)\simeq(3\times2.75\%-2.00\%)/2=3.125\%$, very close to the exact answers.

Given the spot rates, every forward rate, and therefore every forward curve, can be derived. In practice, long-term spot rates are much less accurate, because they are inferred from few, less liquid bonds, so long-dated forwards inherit that error.

The same relationship holds for discount factors, where it is simply multiplication:

$$P(j+k)=P(j)\,F(j,k)$$

$$F(j,k)=\frac{P(j+k)}{P(j)}$$

#### Relationship between Curves

**When the spot curve is increasing, the forward curves lie above it. When it is decreasing, they lie below it.**

*Why.* Apply the shortcut to the forward rate model:

$$(j+k)\,s_{j+k}\simeq j\,s_j+k\,f(j,k)$$

$$f(j,k)\simeq s_{j+k}+\frac{j}{k}\left(s_{j+k}-s_j\right)$$

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

$$f(t)=s(t)+t\,s'(t)$$

$$f'(t)=2\,s'(t)+t\,s''(t)$$

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

### Par Rate

The **par rate** for maturity $n$ is the **coupon rate** that makes an $n$-year bond **priced at par**, when its cash flows are discounted at the spot rates. Writing $\text{par}_n$ for that coupon rate, with a par value of 1:

$$\frac{\text{par}_n}{1+s_1}+\frac{\text{par}_n}{(1+s_2)^2}+\cdots+\frac{1+\text{par}_n}{(1+s_n)^n}=1$$

In discount factors, $\text{par}_n\sum_{i=1}^{n}P(i)+P(n)=1$, so

$$\text{par}_n=\frac{1-P(n)}{\sum_{i=1}^{n}P(i)}$$

When a bond is priced at par, its **YTM = coupon rate = par rate**.

The **par curve** plots the par rates against maturity $n$. A par bond's yield is an average of the spot rates up to its maturity, so when the spot curve **rises**, the par curve sits slightly **below** it (and above it when the spot curve falls).

<iframe
  class="fx-concept-chart ts-par-chart"
  src="/charts/term-structure-curves.html?view=par"
  title="Par curve and spot curve"
  loading="lazy"
></iframe>

**Example.** With $s_1=2.00\%$ and $s_2=2.40\%$: $P(1)=0.98039$ and $P(2)=0.95367$, so

$$\text{par}_2=\frac{1-0.95367}{0.98039+0.95367}=2.395\%$$

**Bootstrapping.** Spot rates can be obtained from the par curve by bootstrapping (see [Spot Rate](#spot-rate)), one maturity at a time:

* $\text{par}_1=s_1$: a one-year par bond has a single cash flow.
* Each later spot rate is inferred from $\text{par}_n$ and the spot rates already found. For $n=2$:

$$\frac{0.02395}{1.02}+\frac{1.02395}{(1+s_2)^2}=1$$

which gives $s_2=2.40\%$.

### YTM

The **yield to maturity (YTM)** is the single discount rate that sets the present value of a bond's cash flows equal to its price:

$$P=\sum_{t=1}^{N}\frac{CF_t}{(1+y)^t}$$

* It is the discount rate used in ordinary bond calculations.
* It can be viewed as a kind of **average** of the spot rates, weighted by the bond's cash flows.
* If the spot curve is **flat**, the YTM equals the spot rate.

For example, a 3-year 5% annual-coupon government bond, discounted at $s_1=2.00\%$, $s_2=2.40\%$ and $s_3=2.75\%$, is priced at 106.46. Its YTM is **2.73%**: between $s_1$ and $s_3$, and close to $s_3$, because most of the cash flow comes in year 3.

**The YTM is the expected return only under three assumptions:**

* All coupon and principal payments are made **in full and on time**.
* The bond is **held until maturity**.
* All cash flows are **reinvested at the YTM**.

The **expected return** is the ex-ante return an investor expects to earn; the **realized return** is the return actually earned. The YTM is often a **poor estimate** of either, because in real life:

* **Interest rates are volatile**, so reinvestment rates and selling prices change.
* When the yield curve is **steeply sloped**, coupons cannot all be reinvested at the YTM.
* There is a **risk of default**.
* The bond may have **embedded options**, which change its cash flows.

### Swap Rate

> [!Note]
>
> Swaps are covered mostly in Derivatives: see [Interest Rate Swap](../C7%20Derivative/M1%20Futures.md#interest-rate-swap), including how the swap rate is priced and a worked example.

The **swap rate** is the interest rate of the **fixed-rate leg** of an interest rate swap. In a **plain vanilla swap**, one side pays the fixed swap rate and the other pays a **floating** market reference rate (MRR, such as SOFR; formerly LIBOR), on the same notional.

**Pricing.** At initiation the swap has zero value, so $\text{PV}(\text{fixed leg})=\text{PV}(\text{floating leg})$. Add a hypothetical exchange of the notional at the end (it cancels out): the two legs become a **fixed-rate bond** and a **floating-rate bond**, and $V_{\text{swap}}=V_{\text{fixed}}-V_{\text{float}}=0$.

* A floating-rate bond's coupon resets to the market rate, the same rate used to discount it, so it is priced at **par** on each reset date: $V_{\text{float}}=\text{par}$.
* Therefore $V_{\text{fixed}}=\text{par}$ too. The swap rate is the coupon that prices a fixed-rate bond at par: the **par rate** on the swap curve.

$$\text{Swap rate}_N=\frac{1-P(N)}{\sum_{i=1}^{N}P(i)}$$

where the discount factors come from the MRR (swap) curve.

The yield curve of swap rates is the **swap rate curve** (swap curve). It is simply an application of the [par curve](#par-rate) to swaps; there is no fundamental difference.

**Why investors often prefer the swap curve to the government spot curve as a benchmark:**

* The swap market offers **more maturities**.
* The swap market is **highly liquid**, unlike many bond markets, and swaps are one of the most efficient ways to hedge interest rate risk.
* Swap rates reflect the **credit risk of commercial banks**, which use swaps the most, rather than of the government, so they are closer to private-sector borrowing costs.
* The swap market is **not regulated by any government** (swaps trade OTC, while government bond markets are shaped by each government), so swap rates are **more comparable across countries**.

## Spread

> [!Note]
>
> Less important than the previous parts.

A yield spread is the difference between a bond's yield and a benchmark yield: $\text{Spread}=y_A-y_B$. The main types:

| Spread | Definition |
| --- | --- |
| **G-spread** (nominal) | Bond yield − government bond yield of the same maturity |
| **I-spread** (nominal) | Bond yield − swap rate of the same maturity |
| **Z-spread** | Constant spread over the government **spot** curve that prices the bond |
| **OAS** (option-adjusted spread) | Z-spread adjusted for embedded options (covered later) |

**Swap spread** (calculation required):

$$\text{Swap spread}_N=\text{Swap rate}_N-y_{\text{gov},N}$$

where $y_{\text{gov},N}$ is the yield on the **on-the-run** government bond of the same maturity $N$.

It reflects mainly the extra **credit risk** of the banks behind swap rates over the government, together with differences in **liquidity** between the two markets.

**I-spread**:

$$\text{I-spread}_N=y_{\text{bond},N}-\text{Swap rate}_N$$

The I-spread reflects the bond's **credit and liquidity risk** relative to swaps: swaps carry bank credit risk and are more liquid than most corporate bonds. "I" stands for **interpolated**, because the swap rate for the bond's exact maturity is often interpolated between quoted maturities.

The spreads add up: $\text{G-spread}=\text{Swap spread}+\text{I-spread}$, i.e., government → swap → corporate.

**Example (I-spread).** A 6-year corporate bond yields 4.80%. Swap rates are 3.60% for 5 years and 3.90% for 7 years; government bonds yield 3.20% for 5 years and 3.40% for 7 years.

* Interpolated 6-year swap rate $=3.60\%+\tfrac{6-5}{7-5}(3.90\%-3.60\%)=3.75\%$
* I-spread $=4.80\%-3.75\%=1.05\%$, or **105 bps**
* Interpolated 6-year government yield $=3.30\%$, so the G-spread is 150 bps and the swap spread $3.75\%-3.30\%=45$ bps: $45+105=150$

**TED spread** $=$ 3-month MRR (LIBOR) $-$ 3-month T-bill rate.

* It reflects **credit risk in the general economy**: an increase in the TED spread signals that lenders (banks) believe the risk of default is increasing.
* It can be thought of as a measure of **counterparty risk** between banks.
* Because it compares bank borrowing with government borrowing, it is a widely used gauge of **risk in the banking system**.

**MRR–OIS spread** (LIBOR–OIS) $=$ MRR $-$ OIS rate.

The **OIS rate** is the fixed rate of an **overnight indexed swap**, whose floating leg is the **geometric average** of an overnight rate over every day of the payment period:

$$1+r_{\text{float}}\cdot\frac{D}{360}=\prod_{i=1}^{D}\left(1+r_i\cdot\frac{1}{360}\right)$$

The overnight rate carries almost no credit risk, so the spread measures the **credit and liquidity risk** of bank lending over the term; it widened sharply in the 2008 crisis.

> [!Note]
>
> LIBOR has been phased out (2021–2023) and replaced by rates such as SOFR. The curriculum's spreads still work with any MRR.

**Z-spread.** The **zero-volatility spread** is the constant spread $Z$ that, added to **every** government spot rate, discounts a risky bond's cash flows to its price:

$$P=\sum_{t=1}^{N}\frac{CF_t}{(1+s_t+Z)^t}$$

The **parallel** shift of the spot curve is an assumption: in reality, credit spreads usually differ by maturity.

<iframe
  class="fx-concept-chart ts-z-chart"
  src="/charts/term-structure-curves.html?view=zspread"
  title="Z-spread as a parallel shift of the spot curve"
  loading="lazy"
></iframe>

**Example.** A 3-year 5% annual-coupon corporate bond is priced at 102.14, with spot rates of 2.00%, 2.40% and 2.75%. Try $Z=1.50\%$:

$$
\begin{aligned}
&\frac{5}{1.035}+\frac{5}{1.039^2}+\frac{105}{1.0425^3}\\
&=4.831+4.632+92.675=102.14
\end{aligned}
$$

So the Z-spread is **150 bps**. If the bond has an embedded option, use the **OAS** instead, covered later.

## Traditional Term Structure Theories

> [!Important]
>
> This part is important.

These theories explain the **economic factors** that determine the **shape** of the yield curve. Write $E[s_k(j)]$ for today's expectation of the $k$-year spot rate in year $j$.

### Pure Expectations Theory

The **forward rate is an unbiased predictor of the future spot rate**:

$$f(j,k)=E[s_k(j)]$$

For example, $f(1,1)=E[s_1(1)]$: the one-year forward rate starting in one year equals the one-year spot rate expected in one year.

So the shape of the curve shows only expected future rates:

* **Upward-sloping** spot curve: short rates are expected to **rise**
* **Flat**: expected to **stay the same**
* **Downward-sloping**: expected to **fall**

The theory assumes investors are **risk neutral**. In real life, investors are risk averse. An equivalent interpretation is that bonds of any maturity are **perfect substitutes**: every strategy over the same horizon (a 2-year bond, or two 1-year bonds rolled over, or a 10-year bond sold after 2 years) has the same expected return.

### Local Expectations Theory

This theory relaxes the risk-neutral assumption: it requires risk neutrality only over **short holding periods**. Over a short period, every default-free bond, whatever its maturity, is expected to earn the **risk-free short rate**. Over longer periods, risk premiums are allowed. The other conclusions are the same as under the pure expectations theory.

> [!Note]
>
> In practice the theory does not hold either: over short periods, long-term bonds tend to earn more than short-term bonds, which suggests a premium for holding them.

### Liquidity Preference Theory

Investors demand a **liquidity premium** to compensate for the added risk of longer-maturity bonds. The theory adds this premium to the pure expectations theory:

$$f(j,k)=E[s_k(j)]+\text{LP}(j,k),\qquad\text{LP}>0$$

The liquidity premium is positive and **increases with maturity**. The conclusions are those of the pure expectations theory, adjusted for the premium:

* **Upward-sloping** curve: **uncertain**. Rates may be expected to rise, stay flat, or even fall slightly, if the premium is large enough.
* **Flat** curve: rates are expected to **fall** slightly, because the positive premium must be offset by a lower expected rate.
* **Downward-sloping** curve: rates are expected to **fall** significantly.

### Segmented Market Theory

Yields in each maturity segment are set by the **supply and demand** for funds in that segment, **independently** of the yields in other segments.

* It is consistent with a world of **asset–liability management constraints** (e.g., regulation, or different investment policy statements) that tie investors to certain maturities.
* Yields are **not** a reflection of expected spot rates or liquidity premiums.

### Preferred Habitat Theory

Investors and borrowers **prefer** certain maturities (their habitats), but **will deviate** from them if the premium is high enough.

* The premium is **not directly related to maturity**: it depends on supply and demand in each segment, so the theory can explain any curve shape, including a humped one.
* Investors will accept additional risk for additional return.

> [!Note]
>
> The key difference from the segmented market theory: there, markets **cannot** influence each other; here, a high enough premium draws investors across segments.

| Theory | Forward rate | An upward-sloping curve means |
| --- | --- | --- |
| Pure expectations | $=E[\text{future spot}]$ | Rates expected to rise |
| Local expectations | Same, over short horizons | Rates expected to rise |
| Liquidity preference | $=E[\text{future spot}]+\text{LP}$, LP rising with maturity | Uncertain |
| Segmented markets | Not related to expectations | Supply and demand in each segment |
| Preferred habitat | $=E[\text{future spot}]+$ premium, not tied to maturity | Depends on supply and demand |

## Yield Curve Factor Models

### Yield Curve Movement

Yield curve movements can be decomposed into three factors:

* **Level**, a parallel shift: $\Delta X_L$
* **Steepness**, a change in the slope: $\Delta X_S$
* **Curvature**, a change in the bend: $\Delta X_C$

Each factor has a fixed **shape** across maturities, and a move scales it. The change in the yield at maturity $t$ is approximately

$$\Delta y(t)\approx\Delta X_L+\Delta X_S\,\sigma(t)+\Delta X_C\,\kappa(t)$$

where $\sigma(t)$ rises with maturity (short end down, long end up) and $\kappa(t)$ is U-shaped (ends up, middle down).

<iframe
  class="fx-concept-chart ts-factor-chart"
  src="/charts/term-structure-curves.html?view=factors"
  title="Yield curve move decomposed into level, steepness and curvature"
  loading="lazy"
></iframe>

The decomposition is useful because the first factor, or the first two, usually explain most of a curve move: the **level** factor explains most of the variation in yields (it has the highest $R^2$), and steepness and curvature most of the rest. For a **parallel** shift, effective duration alone is enough, which is much easier than key rate durations.

#### Review: Duration and Convexity (Level I)

* **Macaulay duration** is the weighted-average time to the bond's cash flows, weighted by their present values:

$$\text{MacDur}=\sum_{t=1}^{N}t\cdot\frac{PV(CF_t)}{P}$$

* **Modified duration** converts it into a price sensitivity to the bond's own yield, with $r$ the yield per period:

$$\text{ModDur}=\frac{\text{MacDur}}{1+r}$$

$$\frac{\Delta P}{P}\approx-\text{ModDur}\cdot\Delta y$$

* **Approximate modified duration**, from prices at yields $\pm\Delta y$:

$$\text{ApproxModDur}=\frac{PV_{-}-PV_{+}}{2\cdot\Delta y\cdot PV_0}$$

* **Effective duration** uses the same formula, but shifts the **benchmark yield curve** by $\pm\Delta\text{Curve}$ and reprices the bond with a model. It is the measure for bonds with **embedded options**, whose cash flows change with rates:

$$\text{EffDur}=\frac{PV_{-}-PV_{+}}{2\cdot\Delta\text{Curve}\cdot PV_0}$$

* **Money (dollar) duration** $=\text{ModDur}\times P$, the change in value in currency units; the **price value of a basis point** is $\text{PVBP}=\frac{PV_{-}-PV_{+}}{2}$ for a 1 bp shift.
* **Convexity** captures the curvature of the price–yield relationship:

$$\text{ApproxCon}=\frac{PV_{-}+PV_{+}-2\,PV_0}{(\Delta y)^2\cdot PV_0}$$

* Together:

$$
\begin{aligned}
\frac{\Delta P}{P}\approx&-\text{ModDur}\cdot\Delta y\\
&+\tfrac{1}{2}\,\text{Convexity}\cdot(\Delta y)^2
\end{aligned}
$$

**Example.** A 5-year zero-coupon bond yields 4%. Its Macaulay duration is 5, so $\text{ModDur}=5/1.04=4.808$; its convexity is $\frac{n(n+1)}{(1+y)^2}=\frac{30}{1.04^2}=27.74$. If the yield rises by 1%:

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-4.808\times0.01+\tfrac{1}{2}\times27.74\times0.01^2\\
&=-4.669\%
\end{aligned}
$$

The exact change is $(1.04/1.05)^5-1=-4.672\%$.

> [!Note]
>
> All the Level I conclusions, including the $\Delta P/P$ formula, assume a **parallel** shift of a flat yield curve. In Level II we also study **non-parallel** movements.

**Key rate duration** measures a bond's sensitivity to a small change in the benchmark yield curve at **one specific maturity** (a key rate), holding the other key rates constant.

### Key Rate Duration

> [!Important]
>
> The most important part of M1.

$$\text{KeyRateDur}_k=-\frac{1}{PV}\cdot\frac{\Delta PV}{\Delta r_k}$$

where $\Delta r_k$ is a shift of the $k$-th key rate of the benchmark curve only.

**Key rate duration is a curve duration, not a yield duration.**

* A **yield duration** (Macaulay, modified, approximate modified) measures the sensitivity of the price to the bond's **own YTM**. It treats the bond as if all its cash flows were discounted at that one yield, so it cannot say what happens when different parts of the curve move differently.
* A **curve duration** (effective duration, key rate duration) measures the sensitivity to a shift in the **benchmark yield curve**, repricing every cash flow at its own rate. Effective duration shifts the whole curve; a key rate duration shifts one point of it.
* For an option-free bond and a flat curve, the two give almost the same number. They differ when the curve is not flat, when it moves in a non-parallel way, or when the bond has embedded options.

**Example.** A portfolio of two zero-coupon bonds, worth 100 in total: bond 1 is worth 40 and matures in 3 years; bond 2 is worth 60 and matures in 5 years. For simplicity take each bond's duration as its maturity (modified duration would be slightly lower, $n/(1+y)$).

* **3-year rate up 1%**, all other rates unchanged: only bond 1 changes, by $-3\%\times40=-1.2$, or $-1.2\%$ of the portfolio. $\text{KRD}_3=1.2$.
* **5-year rate up 1%**: only bond 2 changes, by $-5\%\times60=-3.0$. $\text{KRD}_5=3.0$.

Generally, for a portfolio of zero-coupon bonds, $\text{KRD}_i=w_i D_i$, where $w_i$ is the weight of bond $i$ and $D_i$ its modified duration.

* **The whole curve up 1%** (a parallel shift): $\Delta P/P=-(1.2+3.0)\times1\%=-4.2\%$. The effective duration is $\sum w_iD_i=4.2$.

This is the key result: the **sum of the key rate durations equals the effective duration**,

$$\text{EffDur}=\sum_k\text{KRD}_k$$

because a parallel shift is all the key rates moving together. It holds for any portfolio, not only zero-coupon bonds.

* **The curve steepens**: the 3-year rate falls 1% and the 5-year rate rises 1%. In general,

$$\frac{\Delta P}{P}\approx-\sum_k\text{KRD}_k\cdot\Delta r_k$$

so here $\Delta P/P\approx-\left[1.2\times(-1\%)+3.0\times(+1\%)\right]=-1.8\%$: the portfolio loses 1.8, even though its effective duration says nothing about a twist.

Any portfolio can be decomposed this way: each cash flow is a zero-coupon bond at its own date, so a coupon bond's key rate durations come from its cash flows near each key rate.

### Managing Yield Curve

> [!Note]
>
> Less important than KRD, but useful in practice.

In Level I, for a parallel shift: $\dfrac{\Delta P}{P}\approx-D\cdot\Delta y+\dfrac{1}{2}C\cdot(\Delta y)^2$.

With the three-factor decomposition above, Level II extends this to:

$$\frac{\Delta P}{P}\approx-D_L\,\Delta X_L-D_S\,\Delta X_S-D_C\,\Delta X_C$$

The first term is the Level I parallel part; $D_S$ and $D_C$ are the sensitivities to steepness and curvature. All three are related to the KRDs, though not equal to any one of them.

**Where $D_S$ and $D_C$ come from (mathematically).** Let $\ell_k$, $\sigma_k$ and $\kappa_k$ be the change in key rate $k$ per unit of level, steepness and curvature. A factor move changes each key rate by

$$\Delta r_k=\ell_k\,\Delta X_L+\sigma_k\,\Delta X_S+\kappa_k\,\Delta X_C$$

Substitute into the key rate formula and collect terms by factor:

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-\sum_k\text{KRD}_k\,\Delta r_k\\
&=-\Big(\sum_k\text{KRD}_k\,\ell_k\Big)\Delta X_L\\
&\quad-\Big(\sum_k\text{KRD}_k\,\sigma_k\Big)\Delta X_S\\
&\quad-\Big(\sum_k\text{KRD}_k\,\kappa_k\Big)\Delta X_C
\end{aligned}
$$

So each factor duration is the **KRDs weighted by that factor's shape**:

$$
\begin{aligned}
D_L&=\sum_k\text{KRD}_k\,\ell_k\\
D_S&=\sum_k\text{KRD}_k\,\sigma_k\\
D_C&=\sum_k\text{KRD}_k\,\kappa_k
\end{aligned}
$$

With $\ell_k=1$ at every key rate, $D_L$ is just the sum of the KRDs, the effective duration. This is only the mathematics: neither the exam nor practice asks you to derive it. In practice the factor shapes are estimated statistically from past curve movements, and $D_S$ and $D_C$ are modeled as linear combinations of KRDs in exactly this way.

**Example.** A portfolio holds 1-year, 5-year and 10-year zero-coupon bonds, 100 in each position. With modified duration ≈ Macaulay duration = maturity, the weights are $1/3$ each, so

$$\text{KRD}_1=\tfrac{1}{3},\quad\text{KRD}_5=\tfrac{5}{3},\quad\text{KRD}_{10}=\tfrac{10}{3}$$

The factor shapes at the three key rates:

| Year | 1 | 5 | 10 |
| --- | --- | --- | --- |
| Parallel ($\ell_k$) | +1 unit | +1 unit | +1 unit |
| Steepness ($\sigma_k$) | −1 unit | 0 | +1 unit |
| Curvature ($\kappa_k$) | +1 unit | 0 | +1 unit |

<iframe
  class="fx-concept-chart ts-shape-chart"
  src="/charts/term-structure-curves.html?view=shapes"
  title="Factor shapes at the key rates and the example's curve move"
  loading="lazy"
></iframe>

Then $D_L$, $D_S$ and $D_C$ follow by weighting the KRDs with each row:

$$D_L=\frac{1}{3}+\frac{5}{3}+\frac{10}{3}=\frac{16}{3}=5.33$$

$$D_S=-\frac{1}{3}+0+\frac{10}{3}=\frac{9}{3}=3.00$$

$$D_C=\frac{1}{3}+0+\frac{10}{3}=\frac{11}{3}=3.67$$

Suppose the curve moves by $\Delta X_L=+0.50\%$, $\Delta X_S=+0.20\%$ and $\Delta X_C=-0.10\%$:

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-5.33\times0.50\%-3.00\times0.20\%\\
&\quad-3.67\times(-0.10\%)\\
&=-2.90\%
\end{aligned}
$$

Check with the key rates directly. The move changes them by $\Delta r_1=0.50-0.20-0.10=+0.20\%$, $\Delta r_5=+0.50\%$ and $\Delta r_{10}=0.50+0.20-0.10=+0.60\%$, so

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-\big(\tfrac{1}{3}\times0.20\%+\tfrac{5}{3}\times0.50\%\\
&\qquad+\tfrac{10}{3}\times0.60\%\big)\\
&=-2.90\%
\end{aligned}
$$

### Interest Rate Volatilities



## Active Bond Portfolio Management



## Developing Interest Rate Views Using Macroeconomics

