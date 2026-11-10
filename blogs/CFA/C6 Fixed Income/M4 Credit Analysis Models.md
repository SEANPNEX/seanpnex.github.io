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

# Credit Analysis Models

## Credit Valuation Adjustment (CVA)

**Credit risk** is the risk of loss from a borrower failing to pay interest or principal in full and on time. It is measured with these building blocks, each for a possible default date $t$:

* **Expected exposure** ($\text{EE}_t$): what the investor stands to lose if default happens at $t$. It is the bond's value at $t$, i.e. its remaining cash flows discounted at the risk-free rate, **plus** the coupon due at $t$.
* **Recovery rate** (RR): the share of the exposure recovered after default, so the **recovery amount** is $\text{EE}_t\times\text{RR}$.
* **Loss given default** ($\text{LGD}_t$): the part that is not recovered:

$$
\begin{aligned}
\text{LGD}_t&=\text{EE}_t-\text{Recovery}_t\\
&=\text{EE}_t\times(1-\text{RR})
\end{aligned}
$$

As a percentage of the exposure, $\text{LGD}=100\%-\text{RR}$.

* **Probability of default** ($\text{POD}_t$): the probability that the bond defaults at $t$ (next section).

The expected loss at each date is

$$\text{EL}_t=\text{POD}_t\times\text{LGD}_t$$

These losses happen in the future, so discount each at the risk-free rate. The **credit valuation adjustment (CVA)** is the sum of the present values of the expected losses: the value of the credit risk in present terms.

$$\text{CVA}=\sum_{t=1}^{N}\text{EL}_t\times\text{DF}_t$$

The fair value of the risky bond is its value with no credit risk, $V_{\text{ND}}$ (its cash flows discounted at the risk-free rates), less the CVA:

$$\text{Fair value}=V_{\text{ND}}-\text{CVA}$$

### Probability of Default

In bond pricing, credit risk can enter through either the numerator or the denominator:

* **Numerator**: replace the promised cash flows with their expected values after default losses, and discount at the risk-free rate. The CVA does this.
* **Denominator**: keep the promised cash flows, and discount at a higher rate, the risk-free rate plus a credit spread.

The PODs used for pricing are **risk-neutral** probabilities, implied from market prices, in the same sense as the [risk-neutral probability](../C7%20Derivative/M2%20Options.md#risk-neutrual-probability) of option pricing. They are **higher than the actual (historical) PODs**, because the market price also includes compensation for risk aversion, liquidity and uncertainty about the default loss, and the risk-neutral POD absorbs all of it.

The **hazard rate** (HR) is the probability of default at a date **given that no default has occurred before**: a conditional POD. With a constant hazard rate, the bond must survive every date up to $t-1$ and then default at $t$:

$$\text{POD}_t=(1-\text{HR})^{t-1}\times\text{HR}$$

The **probability of survival** is the (unconditional) probability that no default has occurred up to and including date $t$:

$$\text{POS}_t=(1-\text{HR})^{t}$$

Each year's POD is the drop in survival, $\text{POD}_t=\text{POS}_{t-1}-\text{POS}_t$, so the cumulative POD up to $t$ is

$$\sum_{i=1}^{t}\text{POD}_i=1-\text{POS}_t$$

**Example.** A bond's hazard rate is 2% per year. Find the POD and POS for each of the next three years, and the cumulative POD over the three years.

<div class="reveal" tabindex="0">

| Year | POD | POS |
| --- | --- | --- |
| 1 | $2\%$ | $98\%$ |
| 2 | $0.98\times2\%=1.96\%$ | $0.98^2=96.04\%$ |
| 3 | $0.98^2\times2\%=1.9208\%$ | $0.98^3=94.1192\%$ |

The cumulative POD is $2\%+1.96\%+1.9208\%=5.8808\%=1-94.1192\%$. It is slightly below $3\times2\%=6\%$, because a bond can only default once: each year's default applies only to the bonds still alive.

</div>

## Valuing Risky Bonds

**Example.**

- Consider a **5-year zero-coupon corporate bond** with the following assumptions:
  - A flat government bond yield curve at 3.00%.
  - The initial POD is 1.25%, which is called the **hazard rate**.
  - Default occurs only at year-end (on dates 1, 2, 3, 4, 5), and default will not occur on date 0.
  - The par value is 100.
  - The recovery rate is 40%.

- To determine:
  1. Fair value given the credit risk.
  2. The rate of return.
  3. The spread over a maturity-matching government bond.

The columns are computed as follows:

* **Exposure**: the zero's value at $t$ at the risk-free rate, $100/1.03^{5-t}$.
* **Recovery**: $40\%$ of the exposure; **LGD**: exposure − recovery.
* **POD** and **POS**: from the hazard rate of 1.25%, as above.
* **EL**: $\text{LGD}\times\text{POD}$; **DF**: $1/1.03^{t}$; **PVEL**: $\text{EL}\times\text{DF}$.

| Date      | Exposure | Recovery | LGD   | POD       | POS    | EL    | DF    | PVEL           |
| --------- | -------- | -------- | ----- | --------- | ------ | ----- | ----- | -------------- |
| 1         | 88.85    | 35.54    | 53.31 | 1.25%     | 98.75% | 0.666 | 0.971 | 0.647          |
| 2         | 91.51    | 36.61    | 54.91 | 1.23%     | 97.52% | 0.678 | 0.943 | 0.639          |
| 3         | 94.26    | 37.70    | 56.56 | 1.22%     | 96.30% | 0.689 | 0.915 | 0.631          |
| 4         | 97.09    | 38.84    | 58.25 | 1.20%     | 95.09% | 0.701 | 0.888 | 0.623          |
| 5         | 100      | 40       | 60    | 1.19%     | 93.90% | 0.713 | 0.863 | 0.615          |
| **Total** |          |          |       | **6.10%** |        |       |       | **CVA ≈ 3.15** |

Try the three answers first, then hover over (or tap) the blurred answer.

<div class="reveal" tabindex="0">

**1. Fair value.** With no credit risk, the bond is worth

$$V_{\text{ND}}=\frac{100}{1.03^5}=86.261$$

So the fair value is

$$86.261-3.155=83.106$$

**2. Rate of return.** The yield that discounts the promised 100 to the fair value:

$$
\begin{aligned}
\text{YTM}&=\left(\frac{100}{83.106}\right)^{1/5}-1\\
&=3.77\%
\end{aligned}
$$

**3. Credit spread.** $3.77\%-3.00\%=0.77\%$, or **77 bp**.

**Check.** Each year the expected loss is about $\text{POD}\times\text{LGD}=1.25\%\times60\%=0.75\%$ of the value, close to the 77 bp spread. This gives a quick approximation:

$$\text{Credit spread}\approx\text{POD}\times\text{LGD}$$

</div>

**Example.**

- A fixed-income trader observes a **3-year, 5% annual-payment corporate bond** trading at **104 per 100 of par value**.
- The trader determines that the **conditional POD** (the hazard rate) for each date for the bond is **1.50%**, given a **recovery rate of 40%**.
- The government bond yield curve is flat at **2.50%**.

1. Based on these assumptions, does the trader deem the corporate bond to be overvalued or undervalued?
2. By how much?
3. If the trader buys the bond at 104, what are the projected annual rates of return?

With coupons, the exposure at each date is the value of the remaining cash flows plus the coupon paid that date. At date 1:

$$
\begin{aligned}
\text{EE}_1&=5+\frac{5}{1.025}+\frac{105}{1.025^2}\\
&=109.819
\end{aligned}
$$

At date 2, $\text{EE}_2=5+105/1.025=107.439$, and at date 3, $\text{EE}_3=105$.

| Date      | Exposure | Recovery | LGD   | POD       | POS    | EL    | DF    | PVEL           |
| --------- | -------- | -------- | ----- | --------- | ------ | ----- | ----- | -------------- |
| 1         | 109.819  | 43.927   | 65.89 | 1.50%     | 98.50% | 0.988 | 0.976 | 0.964          |
| 2         | 107.439  | 42.976   | 64.46 | 1.48%     | 97.02% | 0.952 | 0.952 | 0.907          |
| 3         | 105      | 42       | 63    | 1.46%     | 95.57% | 0.917 | 0.929 | 0.851          |
| **Total** |          |          |       | **4.43%** |        |       |       | **CVA = 2.72** |

<div class="reveal" tabindex="0">

**1. Over- or undervalued.** With no credit risk, the bond is worth

$$
\begin{aligned}
V_{\text{ND}}&=\frac{5}{1.025}+\frac{5}{1.025^2}+\frac{105}{1.025^3}\\
&=107.140
\end{aligned}
$$

So the fair value is $107.140-2.722=104.418$. The bond trades at 104, below its fair value: the trader deems it **undervalued**.

**2. By how much.** $104.418-104=0.418$ per 100 of par value.

**3. Projected rates of return.** Each is the IRR of the price paid, 104, against the cash flows received in that scenario.

* **No default** (probability $\text{POS}_3=95.57\%$): the full coupons and principal. This is the yield to maturity:

$$104=\frac{5}{1+r}+\frac{5}{(1+r)^2}+\frac{105}{(1+r)^3}$$

$$r=3.57\%$$

* **Default at date 1** (1.50%): only the recovery at date 1:

$$104=\frac{43.927}{1+r}$$

$$r=-57.76\%$$

* **Default at date 2** (1.48%): the date-1 coupon, then the recovery:

$$104=\frac{5}{1+r}+\frac{42.976}{(1+r)^2}$$

$$r=-33.27\%$$

* **Default at date 3** (1.46%): two coupons, then the recovery:

$$104=\frac{5}{1+r}+\frac{5}{(1+r)^2}+\frac{42}{(1+r)^3}$$

$$r=-22.23\%$$

On a calculator: CF0 = −104, then the scenario's cash flows, and compute IRR.

The 3.57% yield to maturity, 107 bp over the 2.50% government yield, is earned only if the bond does not default: the promised yield overstates the expected return.

</div>

## Credit Spreads

The yield on a risky bond has two parts, and each compensates the investor for something different:

$$
\begin{aligned}
\text{Yield}={}&\text{Benchmark yield}\\
&+\text{Spread over the benchmark}
\end{aligned}
$$

| Part | Compensates for |
| --- | --- |
| **Benchmark yield** (government bond) | Expected real rate of return, expected inflation rate, and risk aversion: a premium for the uncertainty about both |
| **Spread over the benchmark** | Expected loss (POD and LGD, so it falls as the recovery rate rises), liquidity (risky bonds trade less and with wider bid–ask spreads), taxation (differences in the tax treatment of the bonds' income), and risk aversion: a premium for the uncertainty about the default loss |

So risk aversion appears twice: in the benchmark yield for the uncertainty about real rates and inflation, and in the spread for the uncertainty about credit losses.

Key drivers of credit spreads:

1. **Credit quality, credit cycle**: in a downturn, PODs rise and recovery rates fall, so spreads widen, most for lower-rated issuers; in an expansion they narrow.
2. **Financial conditions**: the broader economy and markets. When financial conditions tighten (e.g., falling equity prices, higher volatility, harder access to funding), investors demand more for bearing risk, and spreads widen.
3. **Market supply and demand**: heavy new issuance, or weak demand from investors and dealers, widens spreads. The effect is stronger for less liquid, high-yield bonds.
4. **Company value model**: issuer-specific factors, seen through the structural model below. Anything that brings the value of the company's assets closer to its debt (lower asset value, higher leverage, more volatile assets) raises the POD and widens the spread.

## Credit Analysis for Securitized Debt

ABS do not default as such, but they can lose value as the special purpose entity's (SPE's) pool of securitized assets incurs defaults. So the analysis looks through the bond to the pool, the party running it and the structure around it:

* **Granularity of the portfolio**: the number of assets in the pool. A **granular** pool has many small loans (e.g., credit card receivables), so no single default matters much and its losses can be modeled statistically. A pool of a few large loans (e.g., some commercial mortgages) has to be analyzed loan by loan.
* **Homogeneity**: whether the assets are similar (same type, terms and borrower profile). A homogeneous pool can be analyzed with a common model; a heterogeneous one needs closer, asset-by-asset work.
* **Servicer**: the party that collects the payments and manages the pool (including defaults and recoveries). Its quality and track record affect the pool's losses, so it is part of the credit analysis.
* **Structure**: the tranching and credit enhancement (subordination, overcollateralization, reserve accounts) that decide which tranche absorbs losses first. Two bonds on the same pool can have very different credit risk.

A **covered bond** is a senior debt obligation of a bank, backed by a segregated pool of assets (the **cover pool**, e.g., mortgages) that stays on the bank's balance sheet. Compared with ABS, it has lower credit risk:

* **Dual recourse**: if the bank defaults, investors have a claim on both the cover pool and the bank's other assets.
* **Dynamic pool**: the bank must replace assets in the cover pool that stop performing.

**Credit scores and credit ratings** rank borrowers by credit quality:

* **Credit scores** (e.g., **FICO** in the US) are used for individuals and small businesses, such as the borrowers in a consumer ABS pool. They are ordinal: a higher score means lower credit risk, but the score is not itself a POD.
* **Credit ratings** from agencies such as **Moody's, S&P and Fitch** are used for corporates, sovereigns and securitized tranches. They are also ordinal, from AAA/Aaa down; BBB−/Baa3 and above is investment grade. Ratings aim to be stable through the business cycle, so they change slowly and can lag market prices.

## Credit Models

> [!Note]
>
> This part requires no calculation in the exam.

### Structural Models

Structural models were developed to understand default from the company's balance sheet, building on insights of option pricing theory (the [Black–Scholes model](../C7%20Derivative/M2%20Options.md#black-scholes-model)). In the simplest version, the company has assets $A$ and a zero-coupon debt with face value $K$ due at $T$. At $T$, the company defaults if its assets are worth less than the debt.

**Call and put analogy of debt.** At $T$, shareholders and debtholders split the assets:

* **Equity** is a **call** on the company's assets with strike $K$: shareholders get what is left after paying the debt, and nothing if the company defaults (limited liability).

$$E_T=\max(A_T-K,\ 0)$$

* **Debt** is a **risk-free bond less a put** on the assets with strike $K$: debtholders get $K$ unless the assets are worth less, in which case they take the assets.

$$
\begin{aligned}
D_T&=\min(A_T,\ K)\\
&=K-\max(K-A_T,\ 0)
\end{aligned}
$$

So the value of the risky debt today is the value of a risk-free zero with face value $K$ less the value of the put: the put is the credit risk, playing the role of the CVA.

<iframe
  class="fx-concept-chart"
  src="/charts/structural-model-payoffs.html"
  title="Equity and debt payoffs against the company's asset value at maturity"
  loading="lazy"
></iframe>

- **Strengths**
  - Provides insight into the nature of credit risk.
    - The company defaults when the value of its assets falls below the default barrier (here, the face value of the debt).
  - Provides an option analogy for understanding a company's default probability and recovery rate.
  - Can be estimated using only current market prices (e.g., the asset value and its volatility are implied from the share price and its volatility).

- **Weaknesses**
  - Model assumptions of a simple balance sheet and traded assets are not realistic.
  - Estimation procedures do not consider the business cycle.

### Reduced-Form Models

Reduced-form models do not explain why a company defaults. They model **when**: default is a random event whose probability, the **hazard rate**, depends on observable variables such as the state of the economy and the company's own financials. The constant hazard rate in the [CVA examples](#probability-of-default) is the simplest version.

- **Assumptions of reduced-form models**
  - The company's zero-coupon bond trades in frictionless markets that are arbitrage-free.
  - Risk-free interest rate ($r$) is stochastic.
  - Economy and recovery rate are stochastic.
    - Probability of default is not constant and varies with the state of the economy.
    - Reduced-form models treat default as an **exogenous** (external) variable that occurs randomly.

- **Strengths**
  - Model inputs are observable; historical estimation procedures can be used.
  - Credit risk is allowed to fluctuate with the business cycle.
  - Do not require specification of the company's balance sheet (BS) structure.

- **Weaknesses**
  - Do not explain the economic reasons for default.
  - Unless the model has been formulated and backtested properly, the hazard rate estimation may not be valid.
