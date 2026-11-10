---
title: Valuation of Bonds with Embedded Options
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 603px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Valuation of Bonds with Embedded Options

> [!Important]
>
> The most important module in Fixed Income.

## Basic Concepts

An **embedded option** is a right written into the bond's terms. Whoever holds it exercises it only when it pays them to, so it changes the bond's cash flows, and its price–yield relationship (its convexity, from Level I):

* **Callable bond**: the **issuer** may redeem the bond early at the call price. The investor is short a call, so $V_{\text{callable}}=V_{\text{straight}}-V_{\text{call}}$. When yields fall, the bond is likely to be called, so its price cannot rise much above the call price: **price compression** and **negative convexity** at low yields.
* **Putable bond**: the **investor** may sell the bond back to the issuer early at the put price. The investor is long a put, so $V_{\text{putable}}=V_{\text{straight}}+V_{\text{put}}$. When yields rise, the investor puts the bond, so its price cannot fall much below the put price: a **price floor**, and more positive convexity at high yields.

<iframe
  id="price-yield-chart"
  class="fx-concept-chart"
  src="/charts/embedded-option-price-yield.html"
  title="Price against yield for a straight, a callable and a putable bond"
  loading="lazy"
></iframe>

Other embedded options:

* **Extendible bond**: the investor has the right to **extend** the bond's maturity for a number of years. It is equivalent to a putable bond with the longer maturity: an extendible 3-year bond with the option to extend 2 more years is worth the same as a 5-year bond putable at year 3.
* **Convertible bond**: the investor may **convert** the bond into a fixed number of the issuer's common shares. Detail in [Convertible Bond](#convertible-bond) below.
* **Bond with an estate put** (survivor's option): the **heirs** of a deceased bondholder may put the bond back to the issuer at par.

## Valuation by Binomial Interest Rate Tree

Valuation is basically the same as for a plain bond, using backward induction through the [binomial interest rate tree](M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model). The only extra step: at each node where the option can be exercised, **compare the bond's value with the exercise price** and apply the option holder's decision:

* **Callable**: the issuer calls when the bond is worth more than the call price, so the node value is $\min(V,\ \text{call price})$.
* **Putable**: the investor puts when the bond is worth less than the put price, so the node value is $\max(V,\ \text{put price})$.

Then value the embedded option as the difference:

$$V_{\text{call}}=V_{\text{straight}}-V_{\text{callable}}$$

$$V_{\text{put}}=V_{\text{putable}}-V_{\text{straight}}$$

**Example.** Use the tree from M2: 3% today, then 8% (up) or 5% (down) in one year, each with probability 50%. A 2-year bond has a par value of 100 and a 7% annual coupon. Its straight value is 104.359. Find the value of (a) the bond callable at 100 in one year, (b) the bond putable at 100 in one year, and (c) the two embedded options.

Try it first, then hover over (or tap) the blurred answer.

<div class="reveal" tabindex="0">

At year 1, the straight values are $107/1.08=99.074$ (up) and $107/1.05=101.905$ (down).

**(a) Callable.** In the down node the bond is worth 101.905, above the call price, so it is called: the node value becomes 100. The up node is unchanged.

$$
\begin{aligned}
V_{\text{callable}}&=\frac{(99.074+7)+(100+7)}{2\times1.03}\\
&=103.434
\end{aligned}
$$

**(b) Putable.** In the up node the bond is worth 99.074, below the put price, so it is put: the node value becomes 100. The down node is unchanged.

$$
\begin{aligned}
V_{\text{putable}}&=\frac{(100+7)+(101.905+7)}{2\times1.03}\\
&=104.808
\end{aligned}
$$

**(c) The options.** $V_{\text{call}}=104.359-103.434=0.925$ and $V_{\text{put}}=104.808-104.359=0.449$.

</div>

**Exercise styles.**

* **European**: exercisable on one date only.
* **Bermudan**: exercisable on a set of dates (e.g., each coupon date). On a tree whose steps are those dates, it is valued the same way as a European option: check exercise at each such node.
* **American**: exercisable at any time. It is not in the exam; in practice, the tree is given many more nodes with smaller intervals (e.g., a step of one day instead of one year) to approximate continuous exercise.

> [!Note]
>
> Here the option value is found as the difference between the straight bond and the bond with the option. In Derivatives, the option is valued directly on its own tree, without valuing the underlying bond; see [Binomial Option Valuation](../C7%20Derivative/M2%20Options.md#binomial-option-valuation) and [Interest Rate Option](../C7%20Derivative/M2%20Options.md#interest-rate-option).

## Effects of Interest Rate Volatility

Recall from M2 that adjacent nodes are a constant factor apart, which for a step of $t$ years is

$$r_U=r_D\,e^{2\sigma\sqrt{t}}$$

With a higher $\sigma$, the tree spreads out more: the rates at each date vary more widely, while the tree is still calibrated to the same benchmark bonds, so its central level is unchanged.

* **Straight bonds**: the spot rates are unchanged, so the DCF value is unchanged. By the arbitrage-free condition, the binomial tree must give the same $V_0$: **volatility does not affect a straight bond's value**.
* **Bonds with options**: the straight part stays the same, but, as for any option (e.g., under BSM), **higher volatility raises the option's value**. So:

$$\sigma\uparrow\ \Longrightarrow\ V_{\text{call}}\uparrow,\ V_{\text{callable}}\downarrow$$

$$\sigma\uparrow\ \Longrightarrow\ V_{\text{put}}\uparrow,\ V_{\text{putable}}\uparrow$$

The level and shape of the yield curve matter too: if the expected future rates fall (e.g., the curve becomes flatter or inverted), the call becomes more valuable and the put less valuable.

## Calculation of Option-Adjusted Spread

The **option-adjusted spread (OAS)** is the constant spread that, **added to every one-period rate in the arbitrage-free binomial tree**, makes the tree value of the bond equal its **market price**.

* Like the [Z-spread](M1%20Term%20and%20Interest%20Rate.md#spread) (a constant spread added to the government spot curve), the OAS is a **parallel** shift, here of all the tree's rates.
* It is found the same way as a bond value: by valuing the bond through the tree, adjusting the spread by trial and error until the value matches the price.
* Because the tree values the option explicitly, the OAS is the yield spread **with the influence of the embedded option removed**.

The difference between the two spreads is the **option cost**, in basis points:

$$\text{OAS}=\text{Z-spread}-\text{Option cost}$$

* **Callable**: the investor is short the call and is compensated for it, so the option cost is **positive** and $\text{OAS}<\text{Z-spread}$.
* **Putable**: the investor is long the put and pays for it, so the option cost is **negative** and $\text{OAS}>\text{Z-spread}$.

## Application of OAS

**What each spread compensates for.** Depending on the benchmark, a spread captures different risks:

| Benchmark | Treasury | Bond sector | Issuer-specific |
| --- | --- | --- | --- |
| **Nominal spread / Z-spread** | Credit, liquidity, option risk | Credit (relative to the sector), liquidity, option risk | Liquidity, option risk |
| **OAS** | Credit, liquidity risk | Credit (relative to the sector), liquidity risk | Liquidity risk |

**Using the OAS to find mispriced bonds.** Compare the bond's actual OAS with the OAS **required** for its risks, i.e., the OAS of comparable bonds:

| Benchmark | Treasury | Bond sector | Issuer-specific (liquidity risk assumed small) |
| --- | --- | --- | --- |
| **Actual OAS > 0** | Undervalued if actual OAS > required OAS; overvalued if actual OAS < required OAS | Undervalued if actual OAS > required OAS; overvalued if actual OAS < required OAS | **Undervalued** |
| **Actual OAS = 0** | **Overvalued**: no compensation for credit and liquidity risk | **Overvalued** | **Fairly valued** |
| **Actual OAS < 0** | **Overvalued** | **Overvalued** | **Overvalued** |

A **higher OAS** than comparable bonds means the bond is **cheap** (undervalued); a lower one means it is **rich** (overvalued).

**OAS and volatility.** For a **given market price**:

* As interest rate volatility **increases**, the **OAS of a callable bond decreases**: the model values the call higher and the callable lower, so a smaller spread is needed to bring the model value down to the price.
* As interest rate volatility **increases**, the **OAS of a putable bond increases**: the model values the put and the putable higher, so a larger spread is needed.

This follows from the definition: the option's value changes, and the spread must offset it. So the OAS depends on the volatility the analyst assumes, and two analysts' OAS figures are comparable only with the same assumptions.

## Interest Rate Risk

Recall from the [price–yield chart](#price-yield-chart) above that an embedded option changes the bond's convexity as yields change. Interest rate risk is therefore measured with **curve durations**, which reprice the bond through the tree, rather than yield durations.

For movements of the yield curve: if the expected future rates move **down**, the **call** becomes more valuable and the **put** less valuable.

## Effective Duration

**Effective duration** is a [curve duration](M1%20Term%20and%20Interest%20Rate.md#key-rate-duration): it reflects the sensitivity of the bond's price to a **parallel shift of the benchmark yield curve**, typically the government par curve, with **no change in the credit spread**.

**For a straight bond**, shift the benchmark curve down and up by $\Delta\text{Curve}$, reprice the bond by discounting its cash flows at the shifted rates, and use

$$\text{EffDur}=\frac{PV_{-}-PV_{+}}{2\times\Delta\text{Curve}\times PV_0}$$

**For a bond with embedded options**, the cash flows change with rates, so each price must come from a new tree. The OAS holds the credit spread fixed:

1. **Step 1:** Calculate the implied **OAS** from the current binomial tree and the market price ($PV_0$).
2. **Step 2:** Shift the benchmark yield curve **down** by $\Delta\text{Curve}$, generate a new interest rate tree, and calculate $PV_{-}$ using the OAS from Step 1.
3. **Step 3:** Shift the benchmark yield curve **up** by $\Delta\text{Curve}$, generate a new tree, and calculate $PV_{+}$ using the same OAS.
4. **Step 4:** Calculate the effective duration:

$$D_{\text{eff}}=\frac{PV_{-}-PV_{+}}{2\times\Delta\text{Curve}\times PV_0}$$

The procedure is for understanding and will not be tested.

**Example (illustrative callable bond).** $PV_0=101.2$; with the curve shifted by $\pm30$ bps, $PV_{-}=102.8$ and $PV_{+}=99.2$:

$$D_{\text{eff}}=\frac{102.8-99.2}{2\times0.003\times101.2}=5.93$$

**Conclusions to be remembered (will be tested):**

- **ED of a zero-coupon bond ≈ maturity of the zero-coupon bond**
- **ED of a fixed-rate bond < maturity of the fixed-rate bond**
- **ED of a floating-rate bond ≈ time (in years) to the next reset**: with coupons paid in arrears, the coupon resets to the market rate, so at a reset date the price returns to par and the duration is about 0.
- **ED of callable and putable bonds ≤ ED of an identical straight bond**
  - A **decrease** in interest rates **decreases** the effective duration of a **callable** bond: the call becomes likely, so the bond behaves like a shorter bond that ends at the call date.
  - An **increase** in interest rates **decreases** the effective duration of a **putable** bond: the put becomes likely, so the bond behaves like a shorter bond that ends at the put date.

## Effective Convexity

**Effective convexity** is the sensitivity of duration to changes in interest rates: the second derivative of the price, as a curve measure. It is estimated from the same three prices:

$$\text{EffCon}=\frac{PV_{-}+PV_{+}-2\,PV_0}{(\Delta\text{Curve})^2\times PV_0}$$

Together with effective duration, it gives the second-order Taylor expansion of the price change:

$$
\begin{aligned}
\frac{\Delta P}{P}\approx&-\text{EffDur}\cdot\Delta\text{Curve}\\
&+\tfrac12\,\text{EffCon}\cdot(\Delta\text{Curve})^2
\end{aligned}
$$

* A **straight** bond has slightly **positive** convexity.
* A **callable** bond has **negative** convexity when rates are low and the call is likely.
* A **putable** bond has **more positive** convexity than a straight bond when rates are high and the put is likely.

In the callable example above: $\text{EffCon}=\dfrac{102.8+99.2-2\times101.2}{0.003^2\times101.2}=-439$, negative, as expected for a callable bond.

## One-Sided Duration

One-sided durations extend effective duration: they are curve durations that use only **one side** of the shift.

$$D_{\text{up}}=\frac{PV_0-PV_{+}}{\Delta\text{Curve}\times PV_0}$$

$$D_{\text{down}}=\frac{PV_{-}-PV_0}{\Delta\text{Curve}\times PV_0}$$

Effective duration is their average. When a bond's price responds **asymmetrically** to rate rises and falls, as it does with an embedded option that is near the money, each one-sided duration is a better estimate of the sensitivity in its direction.

* **Straight** bond: positive convexity makes the price rise slightly more than it falls, so $D_{\text{down}}$ is slightly **above** $D_{\text{up}}$.
* **Callable** bond: when rates fall, the price is capped near the call price, so $D_{\text{down}}<D_{\text{up}}$.
* **Putable** bond: when rates rise, the price is floored near the put price, so $D_{\text{up}}<D_{\text{down}}$.

In the callable example: $D_{\text{up}}=\dfrac{101.2-99.2}{0.003\times101.2}=6.59$ and $D_{\text{down}}=\dfrac{102.8-101.2}{0.003\times101.2}=5.27$; their average is the effective duration of 5.93.

## Key Rate Duration

Recall [key rate duration](M1%20Term%20and%20Interest%20Rate.md#key-rate-duration) from M1.

> [!Note]
>
> The benchmark curve in the curriculum is the **par curve**. Some cases use the spot curve, but the par curve is usual in practice.

Key rate durations help identify a bond's **shaping risk**: its sensitivity to changes in the shape of the yield curve (steepening, flattening, twists).

**Properties:**

1. **Option-free bond trading at par**: the bond's **maturity-matched par rate is the only rate that affects its value**, and all other key rate durations are 0. A bond whose coupon equals the par rate of its maturity is priced at par whatever the other par rates are, so only a change in that one rate moves its price.
2. **Option-free bond not trading at par**: the maturity-matched par rate still has the **greatest** effect, but other key rates also matter.
3. **Bonds with embedded options**: it depends on how likely the option is to be exercised.
   * **Callable** with a **low** coupon: unlikely to be called, so the **maturity-matched** rate has the greatest effect. As the coupon **increases**, a call becomes more likely, and the **time-to-exercise** rate (the par rate for the call date) has the greatest effect.
   * **Putable** with a **high** coupon: unlikely to be put, so the **maturity-matched** rate dominates. With a **lower** coupon, a put becomes more likely, and the **time-to-exercise** rate dominates.
4. **Zero-coupon or very low-coupon bonds**: key rate durations can sometimes be **negative** for maturity points **shorter** than the bond's maturity.

## Capped or Floored Floating Rate Bond

### Floating Rate Bond

A **floating-rate bond** (floater) pays a coupon that resets with a **reference rate**, such as an MRR (SOFR, formerly LIBOR):

$$\text{Coupon}=\text{Reference rate}+\text{Margin}$$

* The quoted margin is **fixed** for the life of the bond.
* Coupons are paid **in arrears**: each coupon is based on the reference rate set at the **start** of the period and paid at its **end**.
* So, if the quoted margin equals the market's required margin, the floater is priced at **par on each reset date**.

> [!Note]
>
> Inflation-linked bonds such as TIPS are related but different: their coupon rate is fixed, and it is the **principal** that is indexed to inflation.

### Floater with Cap or Floor

A cap or a floor **limits the coupon rate**:

* A **cap** sets a **maximum** coupon rate. It protects the **issuer** against rising rates: the issuer holds the cap (like a call option on rates), so

$$V_{\text{capped floater}}=V_{\text{straight floater}}-V_{\text{cap}}$$

* A **floor** sets a **minimum** coupon rate. It protects the **investor** against falling rates: the investor holds the floor (like a put option on rates), so

$$V_{\text{floored floater}}=V_{\text{straight floater}}+V_{\text{floor}}$$

* A floater with **both** a cap and a floor is a **collared** floater.

The calculation follows the binomial tree, in the same way as for bonds with embedded options: at each node, set the coupon paid at the end of the period to the capped or floored rate, then value backward.

**Example.** A 2-year floater pays the one-year rate (quoted margin 0) annually in arrears, on the M2 tree (3% today; 8% or 5% in one year). A straight floater is worth 100. Value it (a) with a **6% cap** and (b) with a **5.5% floor**.

Try it first, then hover over (or tap) the blurred answer.

<div class="reveal" tabindex="0">

Each coupon is set by the rate at the start of its period: the year-1 coupon by today's 3%, the year-2 coupon by the year-1 node's rate.

**(a) 6% cap.** Only the up node's 8% exceeds the cap, so its year-2 coupon is 6 instead of 8.

* Year 1, up: $(100+6)/1.08=98.148$; down: $(100+5)/1.05=100$
* Today (year-1 coupon $=3$, below the cap):

$$
\begin{aligned}
V_0&=\frac{(98.148+3)+(100+3)}{2\times1.03}\\
&=99.101
\end{aligned}
$$

The cap is worth $100-99.101=0.899$ to the issuer.

**(b) 5.5% floor.** Today's 3% and the down node's 5% are below the floor, so those coupons are raised to 5.5.

* Year 1, up: $(100+8)/1.08=100$; down: $(100+5.5)/1.05=100.476$
* Today (year-1 coupon $=5.5$):

$$
\begin{aligned}
V_0&=\frac{(100+5.5)+(100.476+5.5)}{2\times1.03}\\
&=102.658
\end{aligned}
$$

The floor is worth $102.658-100=2.658$ to the investor.

</div>

## Ratchet Bond

A **ratchet bond** is a floater whose coupon can only **decline** at each reset: the coupon cap ratchets down and never goes back up. It has options on **both** sides:

* The **issuer** gets extreme protection: if rates fall, the coupon falls; if rates rise, it does not.
* The **investor** has a **contingent put**: at a reset where the coupon is lowered, the investor may put the bond back at par. If the coupon never resets, the investor cannot put the bond.

## Convertible Bond

The conversion right can be viewed as a **call option on the issuer's shares** held by the investor.

**Definitions:**

* $\text{Conversion price}=\dfrac{\text{Issue price}}{\text{Conversion ratio}}$, and so $\text{Conversion ratio}=\dfrac{\text{Issue price}}{\text{Conversion price}}$
* $\text{Market conversion price}=\dfrac{\text{Convertible bond market price}}{\text{Conversion ratio}}$
* $\text{Market conversion premium per share}=\text{Market conversion price}-\text{Market share price}$
* $\text{Market conversion premium ratio}=\dfrac{\text{Market conversion premium per share}}{\text{Market share price}}$
* $\text{Conversion value}=\text{Market share price}\times\text{Conversion ratio}$
* **Straight value**: the value of the bond without the conversion option
* $\text{Minimum value}=\max(\text{Conversion value},\ \text{Straight value})$

**Example.** A convertible bond with par 1,000 trades at 1,100. It converts into 40 shares, the share price is 25, and the straight value is 950.

* Conversion value $=25\times40=1{,}000$
* Market conversion price $=1{,}100/40=27.50$
* Market conversion premium per share $=27.50-25=2.50$; premium ratio $=2.50/25=10\%$
* Minimum value $=\max(1{,}000,\ 950)=1{,}000$
* Premium over straight value $=1{,}100/950-1=15.8\%$

**Valuation.** The convertible is a straight bond plus a call on the shares; any other embedded options are added or subtracted:

$$
\begin{aligned}
V_{\text{convertible}}={}&V_{\text{straight}}+V_{\text{call on stock}}\\
&-V_{\text{issuer call}}+V_{\text{investor put}}
\end{aligned}
$$

### Analysis

* The **downside risk** is limited by the **straight value**, a floor under the bond's price:

$$
\begin{aligned}
&\text{Premium over straight value}\\
&=\frac{\text{Convertible price}}{\text{Straight value}}-1
\end{aligned}
$$

* The **upside potential** depends on the **underlying share**.

**Performance compared with the shares:**

1. **Share price increases**: the convertible **underperforms** the shares, because the investor paid a conversion premium.
2. **Share price decreases**: the convertible's return **exceeds** the shares', because the straight value limits the fall.
3. **Share price stable**: the convertible's return usually **exceeds** the shares', because its coupons are typically higher than the dividends.
4. **Share price far below the conversion price**: the convertible behaves like a **bond** (a busted convertible). **Far above**: it behaves like the **stock**.
