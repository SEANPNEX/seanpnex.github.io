# Discounted Dividend Valuation

Choosing which cash flow to discount (dividends, free cash flow or residual income); the Gordon growth model, PVGO and justified P/E; multistage dividend discount models (two-stage, H-model, three-stage, spreadsheet); implied growth and implied required return; and sustainable growth.

## Choosing the Cash Flow

| Cash flow | Most suitable when | Problems |
| --- | --- | --- |
| **Dividends** | The company pays dividends; the board's policy has a clear, consistent link to profitability; a **non-control** (minority) perspective | Non-payers; dividends unrelated to earnings |
| **FCFE / FCFF** | No dividends, or dividends far from FCFE; FCF tracks profitability within a comfortable forecast horizon; a **control** perspective (also when a takeover is possible) | Heavy capex → FCF negative for many years |
| **Residual income** | No dividends, and **FCF negative** within the comfortable horizon | Needs detailed accrual accounting; distorted by poor accounting quality |

* **FCFF** = CFO − capex (including working capital): the cash flow before debt. Equity = PV(FCFF) − market value of debt. FCFF is easier when **leverage is expected to change** a lot.
* **FCFE** = FCFF − net payments to debtholders (interest and principal, net of new debt): the cash flow after debt.
* **Residual income** = earnings − required return × beginning book value; value = book value + PV(future RI). RI usually **recognizes value earlier** than FCF models. It relies on **clean surplus**: $B_t=B_{t-1}+E_t-D_t$.

**Example (AB InBev vs Diageo).** AB InBev's payout ranged from 18% to 542% (acquisitions, a 2018 dividend cut) → a DDM is **not** appropriate; use a company-level cash flow. Diageo's EPS and DPS grew at similar rates (6.8% vs 6.3%), with a payout mostly 50–60% → a DDM **is** appropriate.

## Dividend Discount Model

For one period, $n$ periods and forever:

$$V_0=\frac{D_1+P_1}{1+r}$$

$$V_0=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{P_n}{(1+r)^n}$$

$$V_0=\sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}$$

Dividends are assumed to be paid once, at the end of each period. Even an investor with a finite horizon depends on **all** future dividends, through the sale price $P_n$.

**Examples.**

* **Carrefour** (one period): $D_1$ = €0.46, $P_1$ = €23.00, $r$ = 8% → $V_0$ = 23.46/1.08 = **€21.72**.
* **Five-year horizon**: dividends \$2.00, 2.10, 2.20, 3.50, 3.75; $P_5$ = \$40; $r$ = 10% → PV of dividends 9.926 + PV of price 24.837 = **\$34.76**.

There are two ways to make the infinite sum workable: (1) assume a stylized growth pattern (constant, two-stage, H-model, three-stage); or (2) forecast individual dividends for 3–10 years (depending on how **visible** earnings are), then add a terminal value from a growth model or a multiple.

## Gordon Growth Model

$$
V_0=\frac{D_0(1+g)}{r-g}=\frac{D_1}{r-g}\qquad (r>g)
$$

It assumes dividends grow at a constant rate $g$ forever, with long-term $r$ and $g$, and $r>g$. Value, dividends and (with a constant payout) earnings all grow at $g$, so $g$ is also the capital gains yield, and the dividend yield stays constant.

> [!IMPORTANT]
> Use $D_1$, not $D_0$, in the numerator. Use the GGM only when long-run $g$ is at most nominal GDP growth (real growth + expected inflation); if expected growth is well above that, use a **multistage** model.

**Example (Sonoco).** $D_0$ = \$1.64 (4 × \$0.41), $g$ = 4.5%, $r$ = 3% + 0.95(4.5%) = 7.3% → $V_0$ = 1.64(1.045)/0.028 = **\$61.21**. The price is \$59.55 → slightly **undervalued**.

**Example (Middlesex Water).** $D_0$ = \$0.911, $g$ = 4.5%, price \$43.20.

| Estimate of $r$ | $V_0$ | Verdict |
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

* **Perpetual preferred stock** (non-callable, fixed rate): $V_0=D/r$. E.g., a 4% preferred with \$25 par pays \$1.00; at $r$ = 5.5%, $V_0$ = **\$18.18**.
* **Negative growth** works too. E.g., Afton Mines: $D_1$ = \$4.25, $g$ = −4%, $r$ = 9% → 4.25/0.13 = **\$32.69**.

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

**Example.** Beta 1.1, $r_f$ 5.6%, ERP 6% → $r$ = 12.2%. $D_0$ = \$2.00, $g$ = 5% → $V_0$ = 2.10/0.072 = **\$29.17**, below the \$40 price. Implied growth: $40=2(1+g)/(0.122-g)$ → **$g$ = 6.86%**: the market prices in more growth than 5%.

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

**Example (Middlesex Water).** $E_1$ = \$1.52, $r$ = 6.8%, price \$43.20 → $E_1/r$ = 22.42, so **PVGO = \$20.78** (48% of the price). P/E 28.4 = no-growth P/E (1/0.068 = 14.7) + growth component (20.78/1.52 = 13.67).

**Justified P/E** from the GGM, where $b$ is the retention ratio and $1-b$ the payout:

$$
\text{Leading: }\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\text{Trailing: }\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

For multistage models, the justified leading P/E is the model value ÷ $E_1$.

**Example (L'Oréal).** Price €242.70, $E_0$ €7.08, $D_0$ €3.85, $g$ 4.25%, $r$ = 2% + 0.72(5%) = 5.6%, payout 0.5438.

* Leading P/E = 0.5438/(0.056 − 0.0425) = **40.28**; trailing = 0.5438(1.0425)/0.0135 = **42.00**.
* The actual trailing P/E is 242.70/7.08 = 34.3, below 42.0 → **undervalued**; the GGM value of €297.31 is above €242.70.

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

**Example (Carl Zeiss Meditec).** $D_0$ €0.55; growth 9% for 10 years, then 5%; $r$ = 1.2% + 0.9(5.2%) = 5.88%; price €80.55.

* $D_{10}$ = €1.302 and $D_{11}$ = €1.3671, so $V_{10}$ = 1.3671/0.0088 = **€155.36**, with a PV of 155.36/1.0588¹⁰ = €87.74.
* PV of the 10 dividends €6.47 → **$V_0$ = €94.21** (about 93% from the terminal value).

**Terminal value** can come from (1) the GGM on $D_{n+1}$, or (2) a multiple × a forecast fundamental (P/E × EPS, P/B × BVPS).

**Example (P&G, DDM with a P/E terminal value).** $D_0$ \$2.79, growth 4% for 4 years, $r$ 6.5%; at year 4, payout 60% and trailing P/E 22.

* $D_4$ = 2.79(1.04)⁴ = \$3.2639; EPS₄ = 3.2639/0.60 = \$5.4398; $V_4$ = 22 × 5.4398 = \$119.68, with a PV of \$93.03.
* PV of dividends \$10.52 → **$V_0$ = \$103.55** (price \$96.47).

**Example (a company that doesn't pay yet).** First dividend \$1.00 at $t$ = 5, then 5% growth; $r$ = 11%. $V_4=D_5/(r-g)$ = 1.00/0.06 = \$16.67 → $V_0$ = 16.67/1.11⁴ = **\$10.98**.

> [!IMPORTANT]
> $V_n=D_{n+1}/(r-g)$. If the first dividend is at $t$ = 5, the GGM gives the value at **$t$ = 4**, so discount 4 years, not 5.

### H-Model

Growth starts at $g_S$ and declines **linearly** to $g_L$ over $2H$ years:

$$
V_0=\frac{D_0(1+g_L)}{r-g_L}+\frac{D_0H(g_S-g_L)}{r-g_L}
$$

* The first term is the value if growth were $g_L$ from now; the second is the extra value from above-normal growth. It is an **approximation**, less accurate for a large $H$ or a large $g_S-g_L$.
* $H$ is **half** the length of the high-growth period (10 years → $H$ = 5).

**Examples.**

* **Meditec as an H-model** (9% declining to 5% over 10 years): $V_0$ = [0.55(1.05) + 0.55(5)(0.04)]/0.0088 = **€78.13**, against €94.21 from the two-stage model.
* Price €41.70, $D_0$ €1.77, 7% declining to 4% over 10 years, $r$ 8%: $V_0$ = [1.77(1.04) + 1.77(5)(0.03)]/0.04 = (1.84 + 0.27)/0.04 = **€52.75**. Normal growth alone gives 1.84/0.04 = €46, and the above-normal growth adds €6.75. The value is 26% above the price → **undervalued**.

### Three-Stage Model

**Version 1: three constant-growth stages.** Example: $r$ 9%, $D_0$ \$3.30; growth 14% for 2 years, 12% for 5 years, then 6.75%; price \$194.98.

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $g$ | 14% | 14% | 12% | 12% | 12% | 12% | 12% |
| $D_t$ | 3.7620 | 4.2887 | 4.8033 | 5.3797 | 6.0253 | 6.7483 | 7.5581 |

* $V_7$ = $D_7$(1.0675)/(0.09 − 0.0675) = 358.59, with a PV of **196.16**; the PV of the dividends is 26.66.
* **$V_0$ = \$222.82**, more than 14% above the price; the terminal value is about 88% of the value.

**Version 2: a constant first stage, then an H-model for stages 2 and 3.** Steps: (1) PV of the stage-1 dividends; (2) the H-model value at the start of stage 2, using $D_n$; (3) discount that to $t$ = 0; (4) add.

**Example (Rhinestone Energy).** Price \$56.18, $D_0$ \$0.56; growth 11% for 5 years, then declining linearly to 6.5% over 10 years ($H$ = 5); $r$ = 3% + 1.2(4.2%) = 8%; fair-value band ±20%.

* $D_5$ = 0.56(1.11)⁵ = \$0.9436.
* $V_5$ = 0.9436(1.065)/0.015 + 0.9436(5)(0.045)/0.015 = 66.9979 + 14.1545 = **\$81.1524**, with a PV of \$55.2310.
* PV of the stage-1 dividends \$3.0422 → **$V_0$ = \$58.27** (stage 1 is 5.2% of the value; stages 2–3 are 94.8%).
* The band \$46.62–\$69.92 contains \$56.18 → **fairly valued**.
* With a flat dividend in year 2: $D_5$ = \$0.8501, $V_5$ = \$73.1103 → $V_0$ = **\$52.56**.

Bloomberg uses version 2 with growth plus transition fixed at 17 years: explosive 3/14, high 5/12, average 7/10, slow/mature 9/8.

### Choosing a Model

| Model | Use when |
| --- | --- |
| GGM | Mature; growth at or below nominal GDP; stable payout |
| Two-stage | High growth for a set period, then an **abrupt** fall (e.g., patent expiry) |
| H-model | High growth **declining gradually** to maturity |
| Three-stage | Distinct growth, transition and mature phases (younger companies) |
| Spreadsheet | Any irregular pattern (asset sales, special dividends, detailed forecasts) |

**Example (Yang Co., irregular dividends).** $D_1$ \$21; then −10% a year for 3 years (18.90, 17.01, 15.31); \$60 in year 5 (an asset sale); \$40 in years 6–7; then +5%; $r$ 12%.

* $V_7$ = 40(1.05)/0.07 = \$600, with a PV of \$271.41; the PV of the dividends is about \$128.06.
* **$V_0$ = \$399.48**.

Limitations of multistage models: the terminal value is often over 75% of the value and very sensitive to $r$ and $g$, and the life-cycle picture is crude when technology changes fast.

### Spreadsheet Modeling

Forecast sales, margins, interest, tax, payout and the balance sheet → dividends → discount them, with a terminal value from a multiple.

**Example (Hoshino Distributors).** Sales \$100m growing 20%, 15%, 10%, 10%; EBIT margin 20/20/18/16/16%; interest 10% of debt; tax 40%; payout 20/20/30/40/50%; assets 80% of sales; 4m shares; $r$ 15%; terminal P/E 10.

| | Y1 | Y2 | Y3 | Y4 | Y5 |
| --- | --- | --- | --- | --- | --- |
| Net income (\$m) | 9.60 | 11.50 | 11.69 | 11.19 | 12.32 |
| DPS | 0.480 | 0.575 | 0.877 | 1.120 | 1.540 |
| PV at 15% | 0.417 | 0.435 | 0.577 | 0.640 | 0.766 |

EPS₅ = 12.32/4 = \$3.08 → $P_5$ = \$30.80, with a PV of \$15.31 → **$V_0$ = 2.84 + 15.31 = \$18.15**.

## Required Return from a DDM

Given the price, the required return is the IRR the model implies. For the GGM and the H-model:

$$
r=\frac{D_1}{P_0}+g
$$

$$
r=\frac{D_0}{P_0}\left[(1+g_L)+H(g_S-g_L)\right]+g_L
$$

**Examples.**

* **NextEra**: $D_1$ = \$5.00(1.055) = \$5.275, $P_0$ \$169.83, $g$ 5.5% → $r$ = 3.11% + 5.50% = **8.60%**.
* GGM: price \$10, $D_1$ \$0.50, $g$ 8% → **13%**.
* H-model: $D_0$ \$1, price \$20, 10% declining to 6% over 10 years ($H$ = 5): $r$ = (1/20)[1.06 + 5(0.04)] + 0.06 = **12.3%**.

For other multistage models, find $r$ by trial and error (or Goal Seek) so that the PV equals the price.

**Example (J&J).** $D_0$ \$3.60, growth 7% for 6 years then 5%, price \$136.61. The GGM first guess is 3.60(1.07)/136.61 + 0.05 = 7.8%, which must be too low, because early growth is above 5%. At 8%, the value is \$140.07 (above the price); at 8.5%, \$119.92 → **IRR ≈ 8.08%**.

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

**Examples.**

* ROE 25%, $b$ 60% → $g$ = **15%**: equity \$1,000,000 → \$1,150,000; NI 250,000 → 287,500; dividends 100,000 → 115,000 (+15%).
* **Baggai vs Mondale**, both with ROA 10%: Baggai ($b$ 0.30, leverage 1.25) → $g$ = **3.75%**; Mondale ($b$ 2/3, leverage 2.00) → $g$ = **13.33%** (more retention and leverage).
* Mature company: payout 25%, ROE = $r$ = 9% → $g$ = 0.75 × 9% = **6.75%**.
* **IBM**: its 2018 ROE of 52% was driven by leverage of 7.35. Using a benchmark margin of 10.5%, turnover of 0.62 and forecast leverage of 2.0 gives ROE = 13.0%; with a 50% payout, **$g$ = 6.5%**.

To estimate a mature-phase ROE: a DuPont forecast, ROE = $r$ (no excess returns at maturity), or the median industry ROE.

#### Exam traps

* $g = b \times$ ROE uses the **retention** ratio, not the payout.
* An abnormally high historical ROE (often driven by leverage) won't last: forecast mature components.
* Raising dividends faster than the sustainable growth rate needs external financing.

> [!NOTE]
>
> **Textbook typo.** The L'Oréal solution prints the GGM value as 3.85(1.0425)/(0.05 − 0.0425); the result €297.31 only works with $r$ = 0.056 (4.0136/0.0135 = 297.3).
