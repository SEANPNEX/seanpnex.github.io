# Private Company Valuation

Valuing a private company uses the same DCF and multiples tools as for a public one. The differences are adjustments in three places: **normalized earnings and cash flow** (the numerator), the **discount rate** (the denominator), and **discounts or premiums** for control and marketability. Covers those adjustments and the income, market and asset-based approaches.

## Public vs Private Companies

| Public company | Private: company-specific | Private: stock-specific |
| --- | --- | --- |
| Mature | Early or late life-cycle stage | **Illiquid** shares (the main factor) |
| Liquid shares | Smaller → higher required return | **Concentrated control** (can transfer value from minority holders) |
| More transparency, standardized disclosure | Concentrated ownership, limited disclosure | **Restrictions on selling** shares (shareholder agreements) |
| Owners separate from managers | Owners often manage → **fewer principal–agent problems**, longer-term view | |

* Stock-specific factors generally **lower** value; company-specific factors can go either way (a founder-led start-up may grow faster than public peers).
* Risk and return vary more widely than among public companies; family firms (e.g., Germany's *Mittelstand*) dominate many economies.

#### Examples: Which Difference Applies?

| Case | Facts | Main difference from a public company |
| --- | --- | --- |
| **Thunder Corp.** | Owned by non-employee shareholders, run by hired managers | **Principal–agent issues** are the *least* likely difference: like a public company, owners and managers are separate |
| **Sun and Moon** | Two 35% partners and three 10% partners | **Concentrated control**: the two 35% holders together control 70% |
| **Privacy Group vs PT Corp.** | Identical apart from listing | **Illiquidity of the shares** |

## Uses and Areas of Focus

| Transactions | Compliance | Litigation |
| --- | --- | --- |
| Venture capital (early stage, informal valuations); private equity growth (minority) or buyout (control); debt financing; IPOs; acquisitions and divestitures; bankruptcy (going concern vs liquidation); **share-based compensation** | Financial reporting (e.g., goodwill impairment testing, fund performance); tax reporting (restructurings, transfer pricing, estate and gift tax) | Damages, lost profits, shareholder disputes, divorce |

The **standard of value** depends on the context: fair market value (for reporting and tax) can differ from **investment value** to a buyer with synergies.

Three areas of focus:

1. **Cash flow and earnings adjustments** → the numerator
2. **Discount rate and required return adjustments** → the denominator
3. **Discounts or premiums** (control, marketability) → applied at the end

## Normalizing Earnings and Cash Flow

* Private companies' statements may be **reviewed** (limited assurance) or **compiled** (no auditor opinion) rather than audited, so they usually need adjusting.
* **Normalized earnings** here remove non-recurring and non-economic items **and** ongoing anomalies, so results are comparable to a public company run efficiently under new ownership.
* Typical adjustments: sales to affiliates on non-market terms (revenue); related-party pay and use of real estate (costs); distorted D&A; taxes on the adjusted income; owner distributions vs public-company dividends.
* Separate **one-time** events (an owner contributes or withdraws assets) from **ongoing** distortions (related-party transactions not at arm's length).
* Watch for above-market owner pay (which lowers taxable income); personal expenses, homes, aircraft and vehicles run through the company; life insurance; shareholder loans. Owners of loss-making companies may **under**pay themselves, understating expenses.
* **Real estate**: strip out the property's revenue and expenses, charge a market rent, and treat the property as a non-operating asset (with different risk and growth).

$$
\begin{aligned}
EBIT_{\text{norm}}={}&\text{Reported EBIT}\\
&+\text{Excess owner pay}\\
&+\text{Non-operating costs}\\
&-\text{Market rent owed}
\end{aligned}
$$

#### Example: Fyt for Life (FLI)

Debt is below optimal, so normalize **operating income after tax** (ignore interest). The tax rate is 17%.

**Step 1. Adjustments.**

* CEO pay is 1.5m against a market rate of 0.5m → SG&A −1.0m.
* A non-operating ranch and condo → SG&A −0.3m, D&A −0.1m.

**Step 2. Normalized income statement.**

| SGD m | Reported | Adjustment | Normalized |
| --- | ---: | ---: | ---: |
| Revenue | 50.0 | | 50.0 |
| COGS | (30.0) | | (30.0) |
| SG&A | (5.0) | +1.3 | (3.7) |
| EBITDA | 15.0 | | 16.3 |
| D&A | (1.0) | +0.1 | (0.9) |
| **EBIT** | **14.0** | | **15.4** |
| Tax at 17% | (2.38) | | (2.618) |
| **Operating income after tax** | **11.62** | | **12.782** |

**What if the facts differ?**

* If the owner (Xin) took the 1.5m as a **dividend** instead of salary, normalize earnings **down**: deduct a 0.5m market salary.
* Free use of a family-owned building → deduct a market rent.

#### Example: Chandra Consolidated

Chandra Shops uses the holding company's ground floor rent-free. Charge a market rent on both sides:

| Entity | Adjustment | Effect on earnings and value |
| --- | --- | --- |
| Chandra Shops | Market rent as an **expense** | Lower |
| Chandra Holdings | Market rent as **rental income** | Higher |

**Cash flow issues.** The interest being valued (a minority stake vs total equity) changes the assumptions. Outcomes may be very uncertain (an IPO, a sale, bankruptcy, approval milestones), so use **scenario analysis**. Management forecasts may be biased: **overstated** for goodwill impairment tests, **understated** for option grants. Check that projections include future capital needs.

$$V_0=\frac{\sum_i p_i\,V_{i,T}}{(1+r)^T}$$

#### Example: Nano Beta (Scenarios)

WACC is 15%. Preliminary approval has an 80% chance; after it, final approval is broad (40%), limited (40%) or fails (20%, worth 0). Values are at $t$ = 2, when the outcome is known.

**Step 1. Value each scenario at $t$ = 2** (€m; the cash flows grow at 5% and 2%):

$$
\begin{aligned}
V_{\text{broad}}&=\frac{200\times 1.05}{0.15-0.05}=2{,}100\\
V_{\text{limited}}&=\frac{50\times 1.02}{0.15-0.02}=392.3
\end{aligned}
$$

**Step 2. Probability-weight and discount.**

$$
\begin{aligned}
E(V_2)&=\underbrace{0.8\times 0.4}_{0.32}\times 2{,}100\\
&\quad+0.32\times 392.3\\
&=797.5\\
V_0&=\frac{797.5}{1.15^2}=603.1
\end{aligned}
$$

**€603.1m.**

**Sensitivity.** With 60% preliminary, 60% broad and 20% limited:

$$
\begin{aligned}
E(V_2)&=0.36\times 2{,}100+0.12\times 392.3\\
&=803.1\\
V_0&=\frac{803.1}{1.15^2}=607.2
\end{aligned}
$$

That is only €4.2m more.

## Discount Rates

Adjustments to consider:

* **Size premiums** are common (but small-cap premium data may reflect distress that isn't relevant).
* **Debt availability and cost**: less access to debt → more equity → a higher WACC; higher operating risk → a higher cost of debt.
* **Acquisitions**: use the **target's** risk and capital structure. Using the buyer's lower WACC means the buyer pays the seller for value the buyer brings.
* **Projection risk**: less information, or inexperienced management forecasting → a higher, judgmental premium.

$$
\begin{aligned}
\text{CAPM: }r_e={}&r_f+\beta\times ERP\\
\text{Expanded: }r_e={}&r_f+\beta\times ERP\\
&+SP+SCRP\\
\text{Build-up: }r_e={}&r_f+ERP+SP\\
&\pm IP+SCRP
\end{aligned}
$$

where SP is the small-stock premium, SCRP the company-specific risk premium and IP the industry premium. The build-up approach has an **implicit β = 1**.

* The CAPM may not fit: private owners are often undiversified, and small companies aren't comparable to public peers with betas.
* The build-up approach is used when there are no good guideline public companies.

#### Example: FLI's Discount Rate

| Input | Value |
| --- | --- |
| $r_f$ / ERP / beta | 3.8% / 5% / 1.1 |
| Small-stock / company-specific / industry premium | 3% / 1% / 0% |
| Cost of debt | 7.5% pretax; $7.5\%\times 0.83=6.225\%$ after 17% tax |
| Debt/capital | Peers 20%, optimal 10%, actual 2% |

| Measure | Calculation (%) | Result |
| --- | --- | --- |
| CAPM | 3.8 + 1.1 × 5 | **9.3%** |
| Expanded CAPM | 3.8 + 5.5 + 3 + 1 | **13.3%** |
| Build-up | 3.8 + 5 + 3 + 0 + 1 | **12.8%** |
| WACC at actual 2% debt ($r_e$ 13%) | 0.02 × 6.225 + 0.98 × 13 | **12.9%** |
| WACC at optimal 10% debt | 0.10 × 6.225 + 0.90 × 13 | **12.3%** |

* The gap between the expanded CAPM and the CAPM is mostly the **size premium** (3 of the 4 points).
* The build-up result is below the expanded CAPM despite more factors: the industry premium is 0, and the ERP isn't scaled by the 1.1 beta (−0.5 points).
* For a sale, use **optimal** weights (an acquirer would move there). But pricing off that lower WACC pays the seller for changes the **buyer** will make. Private companies usually can't reach public peers' debt levels.

## Discounts and Premiums

From the highest value to the lowest:

1. **Strategic control** (a strategic buyer, with synergies) ← synergistic control premium
2. **Financial control** (a financial buyer, no synergies) ← control premium
3. Comparable public company value = a marketable minority interest
4. A non-controlling minority interest ← **discount for lack of control (DLOC)**
5. A non-controlling, **non-marketable** minority interest ← **discount for lack of marketability (DLOM)**

$$
DLOC=1-\frac{1}{1+\text{Control premium}}
$$

$$
\begin{aligned}
\text{Total}&=1-(1-DLOC)\\
&\quad\times(1-DLOM)
\end{aligned}
$$

* **DLOC**: without control, an investor can't choose the board or management, pay out cash, buy or sell assets, or arrange financing. It's justified when controlling holders get **disproportionate returns**, and is estimated from control premiums paid in public-company acquisitions.
* DCF values are usually **controlling** values if the cash flows and discount rate are on a control basis (optimal capital structure); otherwise they already reflect a lack of control.
* **DLOM**: the lack of a liquid market (depending on the prospects for liquidity, transfer restrictions, the pool of buyers, concentration). It usually applies to non-controlling interests. It is smaller if an IPO or sale is near, and larger if there are no dividends and no liquidity event in sight.
* Evidence for DLOM: **restricted stock** transactions (soon tradable), **pre-IPO** transactions, and **put option** pricing (at-the-money put premium ÷ share price). A put captures risk directly through **volatility**, but it gives price protection, not **liquidity**, and keeps the upside, so it doesn't model marketability exactly.
* Other discounts: key person, portfolio (non-homogeneous assets), non-voting shares.
* Apply discounts **multiplicatively**, in sequence: control first, then marketability.

#### Example: Everfloat (DLOC and DLOM)

Everfloat's control value is GBP1.65bn, and the control premium is 15%. The DLOM is estimated from an at-the-money 6-month put on Shipline (price 50, σ 60%, forward $50e^{0.025}=51.27$), which costs 8.40.

**Step 1. DLOC.**

$$
\begin{aligned}
DLOC&=1-\frac{1}{1.15}=13.0\%\\
\text{Minority}&=1.65\times(1-0.13)\\
&=1.4355
\end{aligned}
$$

**Step 2. DLOM.**

$$
\begin{aligned}
DLOM&=\frac{\text{Put premium}}{\text{Share price}}\\
&=\frac{8.40}{50}=16.8\%
\end{aligned}
$$

**Step 3. Combine multiplicatively.**

$$
\begin{aligned}
\text{Total}&=1-(1-0.13)(1-0.168)\\
&=1-0.87\times 0.832\\
&=27.6\%
\end{aligned}
$$

**27.6%**, not $13\%+16.8\%=29.8\%$.

#### Example: Starbeam

Starbeam is valued as if 100% management-owned: a **controlling, non-marketable** interest.

| Transaction | Adjustment |
| --- | --- |
| Selling a non-controlling stake | Apply only **DLOC** (the value is already non-marketable) |
| A financial buyer taking control | Add a **financial control premium** |

With a 30% control premium and a 20% DLOM:

$$
\begin{aligned}
DLOC&=1-\frac{1}{1.30}=23.1\%\\
\text{Total}&=1-(1-0.231)(1-0.20)\\
&=38.5\%
\end{aligned}
$$

#### Exam traps

* DLOC ≠ the control premium (a 30% premium → 23.1% DLOC).
* Discounts multiply; don't add them (13% + 16.8% ≠ 27.6%).

## Valuation Approaches

| Approach | Methods | Best for |
| --- | --- | --- |
| **Income** (absolute) | DCF (FCFF at WACC, FCFE at $r_e$), capitalized cash flow, excess earnings | Forecastable cash flows; multistage DCF is preferred when you can forecast |
| **Market** (relative) | Guideline public companies, guideline transactions, prior transactions | The most used; relies on real market data, but needs true comparables |
| **Asset-based** (absolute) | Fair value of assets − fair value of liabilities | Asset-heavy, holding or liquidating companies |

Terminal value options: capitalized cash flow, excess earnings (RI/($r$ − $g$)), or a market multiple.

### Capitalized Cash Flow Method

A single-stage growing perpetuity, useful for stable companies with no projections and little market evidence:

$$
\begin{aligned}
V_{\text{firm}}&=\frac{FCFF_1}{WACC-g}\\
&=\frac{EBIT_1(1-t)(1-RIR)}{WACC-g}
\end{aligned}
$$

$$
RIR=\frac{g}{WACC}
$$

$$
V_{\text{equity}}=\frac{FCFE_1}{r_e-g}
$$

where RIR is the reinvestment rate and $r_e-g$ the **capitalization rate**. Equity = firm value − market value of debt (face value is acceptable if debt is small and operations stable).

#### Example: Vinuvia

| Input | Value |
| --- | --- |
| $FCFF_0$ | BRL15m |
| $r_e$ / pretax $r_d$ | 15% / 10% |
| Tax rate | 34% |
| Debt | 10% of capital (BRL5m) |
| $g$ | 5% |

**Step 1. WACC.**

$$
\begin{aligned}
WACC&=0.1\times 10\%\times 0.66\\
&\quad+0.9\times 15\%\\
&=14.16\%
\end{aligned}
$$

**Step 2. Firm and equity value.**

$$
\begin{aligned}
V_{\text{firm}}&=\frac{15\times 1.05}{0.1416-0.05}\\
&=\frac{15.75}{0.0916}=171.9\\
V_{\text{equity}}&=171.9-5=166.9
\end{aligned}
$$

**BRL166.9m.**

**Sensitivity.** At $g$ = 2%:

$$
\begin{aligned}
V_{\text{equity}}&=\frac{15\times 1.02}{0.1416-0.02}-5\\
&=125.8-5=120.8
\end{aligned}
$$

**BRL120.8m**, over 25% lower: the method is very sensitive to growth.

### Excess Earnings Method

Value the tangible assets at fair value; earnings above their required returns are attributed to intangibles.

$$
RI=NI_{\text{norm}}-WC\cdot r_{WC}-FA\cdot r_{FA}
$$

$$
RV=\frac{RI(1+g)}{r_{RI}-g}
$$

where $NI_{\text{norm}}$ is normalized income, and WC and FA are working capital and fixed assets. Firm value = fair value of tangible assets + RV (the value of intangibles). Required returns rise from working capital (lowest) to fixed assets to intangibles (highest). It's rarely used for whole companies (only very small ones), but widely accepted for valuing **intangible assets** in financial reporting.

#### Example: Digigraf

| Input | Value | Required return |
| --- | ---: | ---: |
| Working capital | €200k | 5% |
| Fixed assets | €800k | 11% |
| Intangibles (residual income) | | 12% |
| Normalized income | €120k | |
| Growth of RI | 3% | |

**Step 1. Residual income.**

$$
\begin{aligned}
RI&=120-\underbrace{0.05\times 200}_{10}-\underbrace{0.11\times 800}_{88}\\
&=22
\end{aligned}
$$

**Step 2. Value of the intangibles.**

$$RV=\frac{22\times 1.03}{0.12-0.03}=251.778$$

**Step 3. Firm value.**

$$V=\underbrace{200+800}_{\text{tangible}}+251.778=1{,}251.778$$

**€1,251,778.**

**Sensitivity.** With required returns of 4%, 10% and 11%: RI = 120 − 8 − 80 = €32k and RV = 32 × 1.03/0.08 = €412k, so the firm is worth **€1,412,000**.

The capitalized cash flow method needs **one** discount rate (WACC); excess earnings needs several. Neither needs public comparables.

### Guideline Public Company Method

Choose comparables by industry **and** by size, leverage, life-cycle stage, risk and growth. EV multiples are more common than P/E (they adapt to capital structure changes). Adjust beta for leverage:

$$
\beta_U=\frac{\beta_L}{1+(1-t)(D/E)}
$$

$$
\beta_L^*=\beta_U\left[1+(1-t^*)(D/E)^*\right]
$$

#### Example: Quik Chip

Peers' mean beta is 1.21, with D/E 50% and tax 21.6%. Quik Chip has D/E 25% and tax 18%; its EBIT is €35m on sales of €250m.

**Step 1. Unlever the peers' beta.**

$$
\begin{aligned}
\beta_U&=\frac{1.21}{1+(1-0.216)\times 0.50}\\
&=\frac{1.21}{1.392}=0.8693
\end{aligned}
$$

**Step 2. Relever at Quik Chip's structure.**

$$
\begin{aligned}
\beta^*&=0.8693\times\left[1+(1-0.18)\times 0.25\right]\\
&=0.8693\times 1.205\\
&=1.0475
\end{aligned}
$$

**Step 3. EV from peers' multiples.**

| Multiple | Peers | × Quik Chip | EV |
| --- | ---: | ---: | ---: |
| EV/EBIT | 17.3 | €35m | **€605.5m** |
| EV/sales | 2.0 | €250m | **€500m** |

EV/sales gives less, because Quik Chip's EBIT margin (14%) is above the peers' (11.6%).

* For multi-segment companies, use a **composite** multiple, weighted by each segment's share of sales or EBITDA (or peers with the same business mix).
* Pros: a large pool of companies and rich data. Cons: comparability; subjective adjustments for risk and growth.
* Public trading multiples are generally minority values. A control premium depends on the **type** of buyer (strategic > financial), whether the **industry** is "in play", and the **form of payment** (stock deals are less reliable).
* Choose comparables on risk and growth, **not** on debt ratios (private companies have less access to debt).

**Guideline transactions method**: multiples from acquisitions of whole companies; all else equal, the most relevant evidence for a **controlling** interest. Consider synergies; contingent consideration (earn-outs, e.g., tied to regulatory approval); non-cash payment; how many transactions there are; the time between the deal and the valuation date; and differences in size, country, tax and leverage.

**Prior transaction method**: actual past transactions in the company's own shares.

## Worked Valuations

### Income Approach (FLI)

Steps: (1) WACC; (2) base-year FCFF; (3) EV from forecast FCFF plus a terminal value; (4) discounts and premiums.

$$
\begin{aligned}
FCFF={}&EBITDA(1-t)+Dep\times t\\
&-\Delta\text{LT assets}-\Delta WC
\end{aligned}
$$

From a non-controlling perspective:

**Step 1. WACC = 12.55%.** $r_e$ = 13% (the average of 13.3% and 12.8%), and the WACC averages the debt-ratio assumptions.

**Step 2. Base-year FCFF** (SGD m; ΔLT assets 1.2, ΔWC 0.5):

$$
\begin{aligned}
FCFF&=16.3\times 0.83+0.9\times 0.17\\
&\quad-1.2-0.5\\
&=11.982
\end{aligned}
$$

Equivalently, $15.4\times 0.83+0.9-1.7=11.982$.

**Step 3. EV and equity.** FCFF grows 2% (downside), 5% (base) or 8% (optimistic) for five years, then 3%:

$$TV_5=\frac{FCFF_5\times 1.03}{0.1255-0.03}$$

| SGD m | Downside | Base | Optimistic |
| --- | --- | --- | --- |
| FCFF in year 5 | 13.229 | 15.292 | 17.605 |
| Terminal value | 142.680 | 164.934 | 189.881 |
| EV | 124.027 | 140.202 | 158.161 |
| Equity (− debt 2.5) | 121.527 | 137.702 | 155.661 |
| After 18% DLOM (no DLOC) | **99.653** | **112.916** | **127.642** |

**Step 4.** Apply the 18% DLOM (no DLOC: the cash flows are already on a non-controlling basis), as in the last row of the table.

#### Example: Macro Associates

| Issue | Answer |
| --- | --- |
| A selling partner's above-market pay | Normalize costs **down**, so EBIT goes **up** |
| No public comparables | The **build-up** approach (ERP without beta, implicit β = 1) |
| Capitalized cash flow vs excess earnings | The capitalized cash flow method needs only **one** discount rate |

### Market Approach (Everfloat)

Steps: (1) comparables for each business line; (2) gather and weight the multiples; (3) EV from the multiples (a public-equivalent value); (4) apply DLOC and DLOM.

$$
\text{Composite}=\sum_i w_i\times\text{Multiple}_i
$$

#### Example: Everfloat (Composite Multiples)

| GBP m | Marine | Logistics | Energy | Total |
| --- | ---: | ---: | ---: | ---: |
| Revenue | 700 | 250 | 50 | 1,000 |
| EBITDA | 187.5 | 75 | −12.5 | 250 |
| Peers' EV/sales | 2.8 | 1.1 | 8.0 | |
| Peers' EV/EBITDA | 8.2 | 8.1 | 20.0 | |

**Step 1. EV/sales,** weighted by revenue:

$$
\begin{aligned}
\text{Composite}&=0.70\times 2.8+0.25\times 1.1\\
&\quad+0.05\times 8.0\\
&=2.635\\
EV&=2.635\times 1{,}000=2{,}635
\end{aligned}
$$

By segment: 1,960 / 275 / 400 (logistics is the least valuable).

**Step 2. EV/EBITDA,** weighted by EBITDA:

$$
\begin{aligned}
\text{Composite}&=0.75\times 8.2+0.30\times 8.1\\
&\quad-0.05\times 20.0\\
&=7.58\\
EV&=7.58\times 250=1{,}895
\end{aligned}
$$

Energy's negative EBITDA implies a negative value, so value energy on sales instead.

**Step 3. Apply the 27.6% total discount** ([above](#example-everfloat-dloc-and-dlom)):

| | EV/sales | EV/EBITDA |
| --- | ---: | ---: |
| Public-equivalent EV | 2,635 | 1,895 |
| × (1 − 0.276) | **1,907.74** | **1,371.98** |

The average is **GBP1,639.86m**.

> [!NOTE]
>
> **Textbook issues.**
>
> * FLI: one example computes the actual-structure WACC as 12.9%, but the recap table lists 12.8%; the chosen WACC of 12.55% is the average of 12.8% and 12.3%. The downside terminal value is first given as SGD141,295,059, then computed as 142,680,302 (the table uses 142.680). The formula is written with "(1 + 0.02)", though the computation grows FCFF₅ at the terminal 3%. The FCFF table labels EBITDA (16.3m) as "EBIT". The EVs in the table reproduce.
> * Vinuvia: the $g$ = 2% formula still shows BRL15,750,000 in the numerator, but the answer of BRL120.8m uses 15m × 1.02 = 15.3m. A later knowledge check describes WACC as 15% and computes RIR = 5%/15% = 33.3%; with the example's 14.2% it would be about 35%.
> * Digigraf: the knowledge check writes residual income as "EUR 32,000,000"; it's EUR32,000.
> * Quik Chip: the solution prints the relevered beta as 0.8693, the same as the unlevered beta; 0.8693 × [1 + 0.82 × 0.25] = 1.0475.
> * Everfloat: one example rounds the composite EV/sales to 2.6; elsewhere it's 2.635.
