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

**Examples.**

* **Thunder Corp.** is owned by non-employee shareholders and run by hired managers, so **principal–agent issues** are the *least* likely difference from a public company.
* **Sun and Moon** (two 35% partners, three 10% partners): per-share value differences come from **concentrated control** (the two 35% holders together control 70%).
* **Privacy Group vs PT Corp.** (identical apart from listing): the difference comes from the **illiquidity of the shares**.

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

**Example (Fyt for Life, FLI).** Reported: revenue SGD50m, COGS 30m, SG&A 5m, D&A 1m, EBIT 14m, tax 17% → operating income after tax **11.62m**.

* CEO pay is 1.5m vs a market rate of 0.5m → SG&A −1.0m.
* A non-operating ranch and condo → SG&A −0.3m, D&A −0.1m.
* Debt is below optimal → use operating income after tax (ignore interest).
* Adjusted: SG&A 3.7m, EBITDA 16.3m, D&A 0.9m, EBIT **15.4m**, tax 2.618m → **12.782m**.
* If the owner (Xin) took the 1.5m as a dividend instead of salary, normalize earnings **down** (deduct a 0.5m market salary). Free use of a family-owned building → deduct a market rent.

**Example (Chandra Consolidated).** The shops use the holding company's ground floor rent-free. Add a market rent as an expense of Chandra Shops (lowering its earnings and value) and as rental income of Chandra Holdings (raising them).

**Cash flow issues.** The interest being valued (a minority stake vs total equity) changes the assumptions. Outcomes may be very uncertain (an IPO, a sale, bankruptcy, approval milestones), so use **scenario analysis**. Management forecasts may be biased: **overstated** for goodwill impairment tests, **understated** for option grants. Check that projections include future capital needs.

**Example (Nano Beta, scenarios).** WACC 15%; 80% chance of preliminary approval, then 40% broad approval, 40% limited, 20% failure (worth 0).

* Broad: 200(1.05)/(0.15 − 0.05) = **€2.1bn**; limited: 50(1.02)/0.13 = **€392.3m** (both values at $t$ = 2).
* Expected value at $t$ = 2: 0.32 × 2,100 + 0.32 × 392.3 = €797.5m → today 797.5/1.15² = **€603.1m**.
* With 60% preliminary, 60% broad and 20% limited: 0.36 × 2,100 + 0.12 × 392.3 = 803.1 → **€607.2m** (+€4.2m).

## Discount Rates

Adjustments to consider:

* **Size premiums** are common (but small-cap premium data may reflect distress that isn't relevant).
* **Debt availability and cost**: less access to debt → more equity → a higher WACC; higher operating risk → a higher cost of debt.
* **Acquisitions**: use the **target's** risk and capital structure. Using the buyer's lower WACC means the buyer pays the seller for value the buyer brings.
* **Projection risk**: less information, or inexperienced management forecasting → a higher, judgmental premium.

| Model | Required return on equity |
| --- | --- |
| CAPM | $r_f+\beta(r_m-r_f)$ |
| Expanded CAPM | CAPM + small-stock premium + company-specific premium |
| Build-up | $r_f$ + ERP + small-stock premium + industry premium (±) + company-specific premium (**implicit β = 1**) |

* The CAPM may not fit: private owners are often undiversified, and small companies aren't comparable to public peers with betas.
* The build-up approach is used when there are no good guideline public companies.

**Example (FLI's discount rate).** $r_f$ 3.8%, ERP 5%, beta 1.1, small-stock premium 3%, company-specific premium 1%, industry premium 0%, pretax cost of debt 7.5%, tax 17% (after-tax 6.225%); debt/capital: peers 20%, optimal 10%, actual 2%.

| Measure | Calculation | Result |
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

**Examples.**

* **Everfloat**: value GBP1.65bn, control premium 15% → DLOC = 1 − 1/1.15 = **13.0%** → GBP1.4355bn. DLOM from Shipline's at-the-money 6-month put (forward 50e^0.025 = 51.27, σ 60%) = 8.40 → 8.40/50 = **16.8%**. Total = 1 − 0.87 × 0.832 = **27.6%**.
* **Starbeam**, valued as 100% management-owned (control, non-marketable): selling a non-controlling stake → apply only **DLOC**; a financial buyer taking control → a **financial control premium**. With a 30% control premium and 20% DLOM: DLOC 23.1%; total 1 − 0.769 × 0.8 = **38.5%**.

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

**Example (Vinuvia).** FCFF BRL15m; $r_e$ 15%; $r_d$ 10%; tax 34%; 10% debt (BRL5m); $g$ 5%. WACC = 0.1 × 0.66 × 10% + 0.9 × 15% = **14.2%** (14.16%). Firm value = 15.75/0.0916 = BRL171.9m → equity **BRL166.9m**. At $g$ = 2%: **BRL120.8m**, over 25% lower: very sensitive to growth.

### Excess Earnings Method

Value the tangible assets at fair value; earnings above their required returns are attributed to intangibles.

$$
RI=NI_{\text{norm}}-WC\cdot r_{WC}-FA\cdot r_{FA}
$$

$$
RV=\frac{RI(1+g)}{r_{RI}-g}
$$

where $NI_{\text{norm}}$ is normalized income, and WC and FA are working capital and fixed assets. Firm value = fair value of tangible assets + RV (the value of intangibles). Required returns rise from working capital (lowest) to fixed assets to intangibles (highest). It's rarely used for whole companies (only very small ones), but widely accepted for valuing **intangible assets** in financial reporting.

**Example (Digigraf).** Working capital €200k at 5%; fixed assets €800k at 11%; normalized income €120k → RI = 120 − 10 − 88 = **€22k**; RV = 22 × 1.03/(0.12 − 0.03) = **€251,778**; firm **€1,251,778**. At 4% and 10%: RI €32k, RV €412k → **€1,412,000**.

The capitalized cash flow method needs **one** discount rate (WACC); excess earnings needs several. Neither needs public comparables.

### Guideline Public Company Method

Choose comparables by industry **and** by size, leverage, life-cycle stage, risk and growth. EV multiples are more common than P/E (they adapt to capital structure changes). Adjust beta for leverage:

$$
\beta_U=\frac{\beta_L}{1+(1-t)(D/E)}
$$

$$
\beta_L^*=\beta_U\left[1+(1-t^*)(D/E)^*\right]
$$

**Example (Quik Chip).** Peers' mean beta 1.21, D/E 50%, tax 21.6% → $\beta_U$ = 1.21/1.392 = **0.8693**. Quik Chip: D/E 25%, tax 18% → β* = 0.8693 × 1.205 = **1.0475**. EV: 17.3 × €35m EBIT = **€605.5m**; 2.0 × €250m sales = **€500m** (its EBIT margin is 14% vs peers' 11.6%).

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

* WACC **12.55%** ($r_e$ = 13%, the average of 13.3% and 12.8%; and the average of the debt-ratio assumptions).
* Base FCFF = 16.3m × 0.83 + 0.9m × 0.17 − 1.2m − 0.5m = **SGD11.982m** (equivalently, EBIT 15.4m × 0.83 + D&A 0.9m − 1.7m).
* Five-year growth of 2% (downside), 5% (base) or 8% (optimistic); terminal growth 3% → TV = FCFF₅ × 1.03/(0.1255 − 0.03).

| SGD m | Downside | Base | Optimistic |
| --- | --- | --- | --- |
| FCFF in year 5 | 13.229 | 15.292 | 17.605 |
| Terminal value | 142.680 | 164.934 | 189.881 |
| EV | 124.027 | 140.202 | 158.161 |
| Equity (− debt 2.5) | 121.527 | 137.702 | 155.661 |
| After 18% DLOM (no DLOC) | **99.653** | **112.916** | **127.642** |

**Example (Macro Associates).** A selling partner's above-market pay → normalize costs **down**, EBIT **up**. With no public comparables → the build-up approach (ERP without beta, implicit β = 1). The capitalized cash flow method's advantage over excess earnings: a single discount rate.

### Market Approach (Everfloat)

Steps: (1) comparables for each business line; (2) gather and weight the multiples; (3) EV from the multiples (a public-equivalent value); (4) apply DLOC and DLOM.

**Example (Everfloat, GBP m).** Revenue 700 / 250 / 50 (marine / logistics / energy); EBITDA 187.5 / 75 / −12.5 (total 250). Peers' EV/sales 2.8 / 1.1 / 8.0; EV/EBITDA 8.2 / 8.1 / 20.0.

* Composite EV/sales = 0.7(2.8) + 0.25(1.1) + 0.05(8.0) = **2.635** → EV **2,635** (segments 1,960 / 275 / 400; logistics is the least valuable).
* Composite EV/EBITDA = 0.75(8.2) + 0.30(8.1) − 0.05(20) = **7.58** → EV **1,895**. A segment with negative EBITDA implies a negative value, so value energy on sales instead.
* After the 27.6% total discount: **1,907.74** (EV/sales) and **1,371.98** (EV/EBITDA); average **1,639.86**.

> [!NOTE]
>
> **Textbook issues.**
>
> * FLI: one example computes the actual-structure WACC as 12.9%, but the recap table lists 12.8%; the chosen WACC of 12.55% is the average of 12.8% and 12.3%. The downside terminal value is first given as SGD141,295,059, then computed as 142,680,302 (the table uses 142.680). The formula is written with "(1 + 0.02)", though the computation grows FCFF₅ at the terminal 3%. The FCFF table labels EBITDA (16.3m) as "EBIT". The EVs in the table reproduce.
> * Vinuvia: the $g$ = 2% formula still shows BRL15,750,000 in the numerator, but the answer of BRL120.8m uses 15m × 1.02 = 15.3m. A later knowledge check describes WACC as 15% and computes RIR = 5%/15% = 33.3%; with the example's 14.2% it would be about 35%.
> * Digigraf: the knowledge check writes residual income as "EUR 32,000,000"; it's EUR32,000.
> * Quik Chip: the solution prints the relevered beta as 0.8693, the same as the unlevered beta; 0.8693 × [1 + 0.82 × 0.25] = 1.0475.
> * Everfloat: one example rounds the composite EV/sales to 2.6; elsewhere it's 2.635.
