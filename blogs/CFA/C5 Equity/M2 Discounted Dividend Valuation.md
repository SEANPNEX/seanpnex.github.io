# Discounted Dividend Valuation

Choosing which cash flow to discount (dividends, free cash flow or residual income); the Gordon growth model, PVGO and justified P/E; multistage dividend discount models (two-stage, H-model, three-stage, spreadsheet); implied growth and implied required return; and sustainable growth.

## Choosing the Cash Flow

| Cash flow | Most suitable when | Problems |
| --- | --- | --- |
| **Dividends** | The company pays dividends; the board's policy has a clear, consistent link to profitability; a **non-control** (minority) perspective | Non-payers; dividends unrelated to earnings |
| **FCFE / FCFF** | No dividends, or dividends far from FCFE; FCF tracks profitability within a comfortable forecast horizon; a **control** perspective (also when a takeover is possible) | Heavy capex → FCF negative for many years |
| **Residual income** | No dividends, and **FCF negative** within the comfortable horizon | Needs detailed accrual accounting; distorted by poor accounting quality |

$$
\begin{aligned}
FCFF&=CFO-\text{Capex}\\
\text{Equity}&=\text{PV}(FCFF)-\text{Debt}\\
FCFE&=FCFF\\
&\quad-\text{Net payments to debt}\\
RI_t&=E_t-r\times B_{t-1}\\
V_0&=B_0+\text{PV}(RI_t)\\
B_t&=B_{t-1}+E_t-D_t
\end{aligned}
$$

* **FCFF** is the cash flow before debt (capex includes working capital). It is easier when **leverage is expected to change** a lot.
* **FCFE** is the cash flow after debt; net payments are interest and principal, net of new debt.
* **Residual income** usually **recognizes value earlier** than FCF models, and relies on the **clean surplus** relation.

#### Example: AB InBev vs Diageo

Is a dividend discount model appropriate for each brewer?

| | AB InBev | Diageo |
| --- | --- | --- |
| Payout ratio | 18% to 542% (acquisitions; a dividend cut in 2018) | Mostly 50–60% |
| Dividends vs earnings | No stable link | DPS growth 6.3% tracks EPS growth 6.8% |
| **DDM appropriate?** | **No**: use a company-level cash flow (FCFF or FCFE) | **Yes** |

## Dividend Discount Model

For one period, $n$ periods and forever:

$$V_0=\frac{D_1+P_1}{1+r}$$

$$V_0=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{P_n}{(1+r)^n}$$

$$V_0=\sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}$$

Dividends are assumed to be paid once, at the end of each period. Even an investor with a finite horizon depends on **all** future dividends, through the sale price $P_n$.

#### Example: Carrefour (One Period)

Carrefour is expected to pay a dividend of €0.46 next year and then trade at €23.00. The required return is 8%.

$$
\begin{aligned}
V_0&=\frac{D_1+P_1}{1+r}\\
&=\frac{0.46+23.00}{1.08}=21.72
\end{aligned}
$$

**$V_0$ = €21.72.**

#### Example: Five-Year Horizon

The required return is 10%, and the share is expected to sell for \$40 at the end of Year 5.

| Year | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Dividend (\$) | 2.00 | 2.10 | 2.20 | 3.50 | 3.75 |
| PV at 10% (\$) | 1.818 | 1.736 | 1.653 | 2.391 | 2.328 |

$$
\begin{aligned}
\text{PV of dividends}&=1.818+1.736\\
&\quad+1.653+2.391\\
&\quad+2.328=9.926\\
\text{PV of price}&=\frac{40}{1.10^5}=24.837\\
V_0&=9.926+24.837\\
&=34.76
\end{aligned}
$$

**$V_0$ = \$34.76.**

There are two ways to make the infinite sum workable: (1) assume a stylized growth pattern (constant, two-stage, H-model, three-stage); or (2) forecast individual dividends for 3–10 years (depending on how **visible** earnings are), then add a terminal value from a growth model or a multiple.

## Gordon Growth Model

$$
V_0=\frac{D_0(1+g)}{r-g}=\frac{D_1}{r-g}\qquad (r>g)
$$

It assumes dividends grow at a constant rate $g$ forever, with long-term $r$ and $g$, and $r>g$. Value, dividends and (with a constant payout) earnings all grow at $g$, so $g$ is also the capital gains yield, and the dividend yield stays constant.

> [!IMPORTANT]
> Use $D_1$, not $D_0$, in the numerator. Use the GGM only when long-run $g$ is at most nominal GDP growth (real growth + expected inflation); if expected growth is well above that, use a **multistage** model.

#### Example: Sonoco

Sonoco pays a quarterly dividend of \$0.41, expected to grow at 4.5% a year. The risk-free rate is 3%, beta 0.95 and the equity risk premium 4.5%. The share trades at \$59.55.

**Step 1. Inputs.**

$$
\begin{aligned}
D_0&=4\times 0.41=\$1.64\\
r&=3\%+0.95\times 4.5\%=7.3\%
\end{aligned}
$$

**Step 2. Value.**

$$
\begin{aligned}
V_0&=\frac{1.64\times 1.045}{0.073-0.045}\\
&=\frac{1.7138}{0.028}=\$61.21
\end{aligned}
$$

**$V_0$ = \$61.21** is above the \$59.55 price, so Sonoco is slightly **undervalued**.

#### Example: Middlesex Water (GGM)

Middlesex Water's dividend is $D_0$ = \$0.911, expected to grow at $g$ = 4.5%; the price is \$43.20. Every estimate of $r$ below uses the same next dividend:

$$D_1=0.911\times 1.045=\$0.952$$

| Estimate of $r$ | $V_0=D_1/(r-g)$ | Verdict |
| --- | --- | --- |
| Analyst: 6.8% | **\$41.39** | Within 5% → fairly valued |
| CAPM, adjusted β 0.80: 3% + 0.8(4.5%) = 6.6% | \$45.33 | Fairly valued (about 5% above) |
| Bond yield + premium: 4.8% + 2.5% = 7.3% | \$34.00 | Overvalued (but the premium is arbitrary) |

The GGM fits Middlesex: a stable ROE (a regulated water utility), a consistent 60–70% payout, growth of 4.5% close to US nominal GDP growth (about 4.3%), and no period of abnormal growth. Its beta has an $R^2$ below 20%, so the CAPM $r$ is uncertain.

**Sensitivity.** Moving $r$ and $g$ by ±25 bp gives values from \$33.92 to \$53.02; value explodes as $r-g$ shrinks.

| | $g$ = 4.25% | $g$ = 4.50% | $g$ = 4.75% |
| --- | --- | --- | --- |
| $r$ = 6.55% | 41.29 | 46.44 | 53.02 |
| $r$ = 6.80% | 37.24 | **41.39** | 46.55 |
| $r$ = 7.05% | 33.92 | 37.33 | 41.49 |

**Other uses of the formula.**

* **Perpetual preferred stock** (non-callable, fixed rate): $V_0=D/r$. A 4% preferred with \$25 par pays \$1.00 a year; at $r$ = 5.5%:

$$V_0=\frac{1.00}{0.055}=\$18.18$$

* **Negative growth** works too. Afton Mines: $D_1$ = \$4.25, $g$ = −4%, $r$ = 9%:

$$
\begin{aligned}
V_0&=\frac{4.25}{0.09-(-0.04)}\\
&=\frac{4.25}{0.13}=\$32.69
\end{aligned}
$$

| Strengths | Limitations |
| --- | --- |
| Simple, easy to communicate | Very sensitive to $r$ and $g$ |
| Fits mature, stable dividend payers and broad developed-market indexes | Unusable for non-payers or unpredictable dividends |
| Gives the terminal value in multistage models | Invalid if $g\ge r$; unrealistic for high-growth companies |
| Can back out implied $g$ or $r$ | |

### Implied Growth and Share Repurchases

* Buybacks reduce the share count, but companies don't commit to buyback levels and time them opportunistically, so they're harder to forecast than dividends. At market prices, buybacks are **neutral** for remaining shareholders. A DDM still works if **per-share** dividend growth reflects the buybacks.
* The **implied growth rate** solves $P_0=D_0(1+g)/(r-g)$ for $g$:

$$
g=\frac{rP_0-D_0}{P_0+D_0}
$$

#### Example: Implied Growth

A share trades at \$40. Its beta is 1.1, the risk-free rate 5.6% and the equity risk premium 6%. The last dividend was \$2.00, and the analyst expects 5% growth.

**Step 1. Value at the analyst's growth rate.**

$$
\begin{aligned}
r&=5.6\%+1.1\times 6\%=12.2\%\\
V_0&=\frac{2.00\times 1.05}{0.122-0.05}=\frac{2.10}{0.072}=\$29.17
\end{aligned}
$$

**Step 2. Growth implied by the price.**

$$
\begin{aligned}
g&=\frac{rP_0-D_0}{P_0+D_0}\\
&=\frac{0.122\times 40-2.00}{40+2.00}\\
&=\frac{2.88}{42}=6.86\%
\end{aligned}
$$

The value (\$29.17) is below the price (\$40): the market prices in **6.86%** growth, more than the analyst's 5%.

## PVGO and Justified P/E

A share's value is the value of its assets in place, plus the present value of its growth opportunities:

$$
V_0=\frac{E_1}{r}+PVGO
$$

$$
\frac{P_0}{E_1}=\frac{1}{r}+\frac{PVGO}{E_1}
$$

* $E_1/r$ is the **no-growth value**. A no-growth company has no positive-NPV projects, should pay out all its earnings, and its earnings stay flat.
* Growth adds value only if new investment earns **more than $r$** (ROE > $r$). Reinvesting below $r$ raises EPS but destroys value.
* PVGO comes from investment opportunities and **real options** (timing, scale, abandonment).
* A **negative PVGO** (e.g., Macy's, −\$36.69 in early 2019) means the market expects value-destroying reinvestment, or that $E_1$ is too high or $r$ too low. By contrast, Alphabet's PVGO was 53% of its price and McDonald's 20%.

#### Example: Middlesex Water (PVGO)

Middlesex Water trades at \$43.20, with forecast EPS $E_1$ = \$1.52 and $r$ = 6.8%.

**Step 1. Split the price.**

$$
\begin{aligned}
\frac{E_1}{r}&=\frac{1.52}{0.068}=\$22.42\\
PVGO&=43.20-22.42=\$20.78
\end{aligned}
$$

Growth opportunities are **48%** of the price.

**Step 2. Split the P/E.**

$$
\begin{aligned}
\frac{P_0}{E_1}&=\frac{43.20}{1.52}=28.4\\
&=\underbrace{\frac{1}{0.068}}_{14.7\text{ no growth}}+\underbrace{\frac{20.78}{1.52}}_{13.67\text{ growth}}
\end{aligned}
$$

**Justified P/E** from the GGM, where $b$ is the retention ratio and $1-b$ the payout:

$$
\text{Leading: }\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\text{Trailing: }\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

For multistage models, the justified leading P/E is the model value ÷ $E_1$.

#### Example: L'Oréal

| Input | Value |
| --- | --- |
| Price | €242.70 |
| $E_0$ / $D_0$ | €7.08 / €3.85 |
| Payout $1-b$ | 3.85/7.08 = 0.5438 |
| $g$ | 4.25% |
| $r$ | 2% + 0.72 × 5% = 5.6% |

**Step 1. Justified P/Es.**

$$
\begin{aligned}
\frac{P_0}{E_1}&=\frac{0.5438}{0.056-0.0425}=40.28\\
\frac{P_0}{E_0}&=\frac{0.5438\times 1.0425}{0.0135}=42.00
\end{aligned}
$$

**Step 2. Compare with the market.**

$$
\begin{aligned}
\text{Actual trailing P/E}&=\frac{242.70}{7.08}\\
&=34.3<42.0
\end{aligned}
$$

L'Oréal is **undervalued**: equivalently, the GGM value $3.85\times 1.0425/0.0135$ = €297.31 is above the €242.70 price.

## Multistage Dividend Discount Models

| Phase | Growth and margins | FCFE | Payout |
| --- | --- | --- | --- |
| **Growth** | Rapidly expanding markets, high margins, very high EPS growth | Often **negative** (heavy investment) | Low or zero |
| **Transition** | Growth slows toward the economy's (competition, saturation) | Turns **positive** as capex falls | Rising (or dividends begin) |
| **Mature** | ROE → $r$; stable growth, payout and ROE | Positive | Stable: the **GGM** applies |

### Two-Stage Model

$$
V_0=\sum_{t=1}^{n}\frac{D_0(1+g_S)^t}{(1+r)^t}+\frac{V_n}{(1+r)^n}
$$

$$
V_n=\frac{D_{n+1}}{r-g_L}=\frac{D_0(1+g_S)^n(1+g_L)}{r-g_L}
$$

Steps: (1) list $D_1,\dots,D_n$; (2) $D_{n+1}=D_n(1+g_L)$; (3) $V_n=D_{n+1}/(r-g_L)$; (4) discount everything at $r$. It fits a temporary advantage (a patent, first-mover status); its weakness is the **abrupt** drop in growth.

#### Example: Carl Zeiss Meditec

| Input | Value |
| --- | --- |
| $D_0$ | €0.55 |
| $g_S$ (Years 1–10) / $g_L$ (after) | 9% / 5% |
| $r$ | 1.2% + 0.9 × 5.2% = 5.88% |
| Price | €80.55 |

**Step 1. Terminal value at Year 10.**

$$
\begin{aligned}
D_{10}&=0.55\times 1.09^{10}=1.302\\
D_{11}&=1.302\times 1.05=1.3671\\
V_{10}&=\frac{1.3671}{0.0588-0.05}=155.36
\end{aligned}
$$

**Step 2. Discount to today.**

$$
\begin{aligned}
\text{PV}(V_{10})&=\frac{155.36}{1.0588^{10}}=87.74\\
\text{PV of }D_1\dots D_{10}&=6.47\\
V_0&=6.47+87.74\\
&=94.21
\end{aligned}
$$

**$V_0$ = €94.21**, above the €80.55 price; about 93% of it comes from the terminal value.

**Terminal value** can come from (1) the GGM on $D_{n+1}$, or (2) a multiple × a forecast fundamental (P/E × EPS, P/B × BVPS).

#### Example: P&G with a P/E Terminal Value

P&G's last dividend was \$2.79, expected to grow 4% a year for 4 years; $r$ = 6.5%. At Year 4 the payout ratio is expected to be 60% and the trailing P/E 22. The price is \$96.47.

**Step 1. Terminal value from the P/E.**

$$
\begin{aligned}
D_4&=2.79\times 1.04^4=\$3.2639\\
EPS_4&=\frac{3.2639}{0.60}=\$5.4398\\
V_4&=22\times 5.4398=\$119.68
\end{aligned}
$$

**Step 2. Discount to today.**

$$
\begin{aligned}
\text{PV}(V_4)&=\frac{119.68}{1.065^4}=\$93.03\\
\text{PV of }D_1\dots D_4&=\$10.52\\
V_0&=10.52+93.03\\
&=\$103.55
\end{aligned}
$$

**$V_0$ = \$103.55**, above the \$96.47 price.

#### Example: A Company That Doesn't Pay Yet

The first dividend, \$1.00, is expected at $t$ = 5, growing 5% a year after that; $r$ = 11%.

$$
\begin{aligned}
V_4&=\frac{D_5}{r-g}=\frac{1.00}{0.11-0.05}=\$16.67\\
V_0&=\frac{16.67}{1.11^4}=\$10.98
\end{aligned}
$$

**$V_0$ = \$10.98.**

> [!IMPORTANT]
> $V_n=D_{n+1}/(r-g)$. If the first dividend is at $t$ = 5, the GGM gives the value at **$t$ = 4**, so discount 4 years, not 5.

### H-Model

Growth starts at $g_S$ and declines **linearly** to $g_L$ over $2H$ years:

$$
V_0=\frac{D_0(1+g_L)}{r-g_L}+\frac{D_0H(g_S-g_L)}{r-g_L}
$$

* The first term is the value if growth were $g_L$ from now; the second is the extra value from above-normal growth. It is an **approximation**, less accurate for a large $H$ or a large $g_S-g_L$.
* $H$ is **half** the length of the high-growth period (10 years → $H$ = 5).

#### Example: Meditec as an H-Model

Use the [Meditec](#example-carl-zeiss-meditec) inputs, but let growth decline linearly from 9% to 5% over 10 years ($H$ = 5).

$$
\begin{aligned}
V_0&=\frac{0.55\times 1.05}{0.0588-0.05}\\
&\quad+\frac{0.55\times 5\times(0.09-0.05)}{0.0588-0.05}\\
&=\frac{0.5775+0.1100}{0.0088}\\
&=78.13
\end{aligned}
$$

**$V_0$ = €78.13**, against €94.21 from the two-stage model: growth now fades instead of staying at 9% for all 10 years.

#### Example: H-Model Value vs Price

A share trades at €41.70. $D_0$ = €1.77; growth is 7%, declining linearly to 4% over 10 years ($H$ = 5); $r$ = 8%.

$$
\begin{aligned}
V_0&=\underbrace{\frac{1.77\times 1.04}{0.08-0.04}}_{\text{normal growth}}\\
&\quad+\underbrace{\frac{1.77\times 5\times 0.03}{0.08-0.04}}_{\text{above-normal growth}}\\
&=\frac{1.84}{0.04}+\frac{0.27}{0.04}\\
&=46.00+6.75=52.75
\end{aligned}
$$

**$V_0$ = €52.75**, 26% above the price, so the share is **undervalued**.

### Three-Stage Model

**Version 1: three constant-growth stages.** Grow $D_0$ at $g_1$, then $g_2$, list each dividend, and cap the last stage with the GGM:

$$
\begin{aligned}
V_0={}&\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}\\
&+\frac{D_{n}(1+g_L)/(r-g_L)}{(1+r)^n}
\end{aligned}
$$

#### Example: Three Constant-Growth Stages

$D_0$ = \$3.30 and $r$ = 9%. Dividends grow 14% for 2 years, then 12% for 5 years, then 6.75% forever. The price is \$194.98.

**Step 1. Dividends through Year 7.**

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $g$ | 14% | 14% | 12% | 12% | 12% | 12% | 12% |
| $D_t$ | 3.7620 | 4.2887 | 4.8033 | 5.3797 | 6.0253 | 6.7483 | 7.5581 |

**Step 2. Terminal value at Year 7.**

$$
\begin{aligned}
V_7&=\frac{7.5581\times 1.0675}{0.09-0.0675}=358.59\\
\text{PV}(V_7)&=\frac{358.59}{1.09^7}=196.16
\end{aligned}
$$

**Step 3. Add.**

$$V_0=\underbrace{26.66}_{\text{PV}(D_1\dots D_7)}+196.16=\$222.82$$

**$V_0$ = \$222.82**, more than 14% above the price; the terminal value is about 88% of the value.

**Version 2: a constant first stage, then an H-model for stages 2 and 3.** Steps: (1) PV of the stage-1 dividends; (2) the H-model value at the start of stage 2, using $D_n$; (3) discount that to $t$ = 0; (4) add.

$$
\begin{aligned}
V_n&=\frac{D_n(1+g_L)+D_nH(g_S-g_L)}{r-g_L}\\
V_0&=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{V_n}{(1+r)^n}
\end{aligned}
$$

#### Example: Rhinestone Energy

| Input | Value |
| --- | --- |
| Price | \$56.18 |
| $D_0$ | \$0.56 |
| Stage 1 | 11% for 5 years |
| Stages 2–3 | Declining linearly to 6.5% over 10 years ($H$ = 5) |
| $r$ | 3% + 1.2 × 4.2% = 8% |
| Fair-value band | ±20% of value |

**Step 1. Dividend at the end of stage 1.**

$$D_5=0.56\times 1.11^5=\$0.9436$$

**Step 2. H-model value at Year 5.**

$$
\begin{aligned}
V_5&=\frac{0.9436\times 1.065}{0.08-0.065}\\
&\quad+\frac{0.9436\times 5\times 0.045}{0.08-0.065}\\
&=66.9979+14.1545\\
&=\$81.1524\\
\text{PV}(V_5)&=\frac{81.1524}{1.08^5}\\
&=\$55.2310
\end{aligned}
$$

**Step 3. Add the stage-1 dividends.**

$$V_0=\underbrace{3.0422}_{\text{PV}(D_1\dots D_5)}+55.2310=\$58.27$$

Stage 1 is 5.2% of the value; stages 2–3 are 94.8%.

**Step 4. Compare.** The band \$58.27 × (0.8 to 1.2) = \$46.62–\$69.92 contains the \$56.18 price, so Rhinestone is **fairly valued**.

**What if the Year-2 dividend stays flat?** Then $D_5$ = \$0.8501, $V_5$ = \$73.1103 and **$V_0$ = \$52.56**.

Bloomberg uses version 2 with growth plus transition fixed at 17 years: explosive 3/14, high 5/12, average 7/10, slow/mature 9/8.

### Choosing a Model

| Model | Use when |
| --- | --- |
| GGM | Mature; growth at or below nominal GDP; stable payout |
| Two-stage | High growth for a set period, then an **abrupt** fall (e.g., patent expiry) |
| H-model | High growth **declining gradually** to maturity |
| Three-stage | Distinct growth, transition and mature phases (younger companies) |
| Spreadsheet | Any irregular pattern (asset sales, special dividends, detailed forecasts) |

#### Example: Yang Co. (Irregular Dividends)

$r$ = 12%. Dividends fall 10% a year after Year 1, jump in Year 5 on an asset sale, then grow 5% a year after Year 7.

| Year | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Dividend (\$) | 21.00 | 18.90 | 17.01 | 15.31 | 60.00 | 40.00 | 40.00 |

**Step 1. Terminal value at Year 7.**

$$
\begin{aligned}
V_7&=\frac{40\times 1.05}{0.12-0.05}=\$600\\
\text{PV}(V_7)&=\frac{600}{1.12^7}=\$271.41
\end{aligned}
$$

**Step 2. Add the PV of the seven dividends (\$128.06).**

$$V_0=128.06+271.41=\$399.48$$

Limitations of multistage models: the terminal value is often over 75% of the value and very sensitive to $r$ and $g$, and the life-cycle picture is crude when technology changes fast.

### Spreadsheet Modeling

Forecast sales, margins, interest, tax, payout and the balance sheet → dividends → discount them, with a terminal value from a multiple.

#### Example: Hoshino Distributors

Hoshino has sales of \$100m and 4m shares; $r$ = 15%, and the terminal P/E is 10.

| Assumption | Y1 | Y2 | Y3 | Y4 | Y5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Sales growth | | 20% | 15% | 10% | 10% |
| EBIT margin | 20% | 20% | 18% | 16% | 16% |
| Payout | 20% | 20% | 30% | 40% | 50% |

Interest is 10% of debt, tax 40%, and total assets 80% of sales.

**Step 1. Forecast net income and dividends.**

| | Y1 | Y2 | Y3 | Y4 | Y5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Net income (\$m) | 9.60 | 11.50 | 11.69 | 11.19 | 12.32 |
| DPS (\$) | 0.480 | 0.575 | 0.877 | 1.120 | 1.540 |
| PV at 15% (\$) | 0.417 | 0.435 | 0.577 | 0.640 | 0.766 |

**Step 2. Terminal value from the P/E.**

$$
\begin{aligned}
EPS_5&=\frac{12.32}{4}=\$3.08\\
P_5&=10\times 3.08=\$30.80\\
\text{PV}(P_5)&=\frac{30.80}{1.15^5}=\$15.31
\end{aligned}
$$

**Step 3. Add.**

$$V_0=\underbrace{2.84}_{\text{PV of DPS}}+15.31=\$18.15$$

## Required Return from a DDM

Given the price, the required return is the IRR the model implies. For the GGM and the H-model:

$$
r=\frac{D_1}{P_0}+g
$$

$$
r=\frac{D_0}{P_0}\left[(1+g_L)+H(g_S-g_L)\right]+g_L
$$

#### Examples: Implied Required Return

| Case | Inputs | Required return |
| --- | --- | --- |
| **NextEra** (GGM) | $D_0$ \$5.00, $g$ 5.5%, $P_0$ \$169.83 | $\dfrac{5.00\times 1.055}{169.83}+5.5\%=3.11\%+5.50\%=$ **8.60%** |
| GGM | $D_1$ \$0.50, $g$ 8%, $P_0$ \$10 | $\dfrac{0.50}{10}+8\%=$ **13%** |
| H-model | $D_0$ \$1, $P_0$ \$20, 10% declining to 6% over 10 years ($H$ = 5) | $\dfrac{1}{20}\left[1.06+5\times 0.04\right]+6\%=$ **12.3%** |

For other multistage models, find $r$ by trial and error (or Goal Seek) so that the PV equals the price.

#### Example: J&J (Trial and Error)

J&J's last dividend was \$3.60, growing 7% for 6 years and then 5%; the price is \$136.61.

**Step 1. First guess from the GGM.**

$$r\approx\frac{3.60\times 1.07}{136.61}+5\%=7.8\%$$

This must be too low: early growth is above 5%, so the true IRR is higher.

**Step 2. Bracket the price.**

| $r$ | Two-stage value | vs \$136.61 |
| --- | ---: | --- |
| 8.0% | \$140.07 | Above: $r$ too low |
| 8.5% | \$119.92 | Below: $r$ too high |

**Step 3. Interpolate.** The IRR is just above 8%: **$r$ ≈ 8.08%**.

> [!NOTE]
> The IRR is the market-implied expected return; feeding it back into the DDM as $r$ is circular. If the price differs from value, the expected return also includes the price converging to value.

## Sustainable Growth

$$
g=b\times ROE
$$

The **sustainable growth rate** is the growth that retained earnings alone can fund, with a constant capital structure and **no new equity**. Strictly, use the return on new investment and **beginning** equity. The **PRAT** model splits ROE with DuPont:

$$
\begin{aligned}
g={}&\underbrace{\frac{NI-D}{NI}}_{R}\times\underbrace{\frac{NI}{Sales}}_{P}\\
&\times\underbrace{\frac{Sales}{TA}}_{A}\times\underbrace{\frac{TA}{Equity}}_{T}
\end{aligned}
$$

Profit margin × asset turnover (P × A) = ROA, from operations; retention and leverage (R, T) reflect financial policy.

#### Example: Growth from Retention

ROE is 25%, the retention ratio 60%, and beginning equity \$1,000,000.

$$g=0.60\times 25\%=15\%$$

| | This year | Next year | Growth |
| --- | ---: | ---: | ---: |
| Beginning equity | 1,000,000 | 1,150,000 | 15% |
| Net income (25%) | 250,000 | 287,500 | 15% |
| Dividends (40%) | 100,000 | 115,000 | 15% |

#### Example: Baggai vs Mondale (PRAT)

Both companies have ROA (= P × A) of 10%.

| | Retention $R$ | ROA | Leverage $T$ | $g=R\times ROA\times T$ |
| --- | ---: | ---: | ---: | ---: |
| Baggai | 0.30 | 10% | 1.25 | **3.75%** |
| Mondale | 2/3 | 10% | 2.00 | **13.33%** |

Mondale grows faster only because of its financial policy: more retention and more leverage.

#### Example: Mature-Phase Growth

**Mature company.** The payout is 25%, and ROE = $r$ = 9%:

$$g=(1-0.25)\times 9\%=6.75\%$$

**IBM.** Its 2018 ROE of 52% was driven by leverage of 7.35, which won't last. Rebuild ROE from benchmark components, then apply a 50% payout:

$$
\begin{aligned}
ROE&=\underbrace{10.5\%}_{P}\times\underbrace{0.62}_{A}\times\underbrace{2.0}_{T}=13.0\%\\
g&=0.50\times 13.0\%=6.5\%
\end{aligned}
$$

To estimate a mature-phase ROE: a DuPont forecast, ROE = $r$ (no excess returns at maturity), or the median industry ROE.

#### Exam traps

* $g = b \times$ ROE uses the **retention** ratio, not the payout.
* An abnormally high historical ROE (often driven by leverage) won't last: forecast mature components.
* Raising dividends faster than the sustainable growth rate needs external financing.

> [!NOTE]
>
> **Textbook typo.** The L'Oréal solution prints the GGM value as 3.85(1.0425)/(0.05 − 0.0425); the result €297.31 only works with $r$ = 0.056 (4.0136/0.0135 = 297.3).
