# Private Company Valuation

Valuing a private company uses the same DCF and multiples tools as for a public one. The differences are adjustments in three places: **normalized earnings and cash flow** (numerator), **discount rate** (denominator), and **discounts or premiums** for control and marketability. This module covers those adjustments and the income, market and asset-based approaches.

* [Learning Outcomes](#learning-outcomes)
* [Public vs private company features](#public-vs-private-company-features)
* [Uses of private company valuation and areas of focus](#uses-of-private-company-valuation-and-areas-of-focus)
* [Earnings normalization and cash flow estimation](#earnings-normalization-and-cash-flow-estimation)
* [Discount rates and required return models](#discount-rates-and-required-return-models)
* [Discounts and premiums: DLOC and DLOM](#discounts-and-premiums-dloc-and-dlom)
* [Valuation approaches](#valuation-approaches)
* [Income approach: worked valuation (FLI)](#income-approach-worked-valuation-fli)
* [Market approach: worked valuation (Everfloat)](#market-approach-worked-valuation-everfloat)
* [Quick Recall](#quick-recall)

## Learning Outcomes

The candidate should be able to:

* Contrast important public and private company features for valuation purposes
* Describe uses of private business valuation and explain key areas of focus for financial analysts
* Explain cash flow estimation issues related to private companies and adjustments required to estimate normalized earnings
* Explain factors that require adjustment when estimating the discount rate for private companies
* Compare models used to estimate the required rate of return to private company equity (for example, the CAPM, the expanded CAPM, and the build-up approach)
* Explain and evaluate the effects on private company valuations of discounts and premiums based on control and marketability
* Explain the income, market, and asset-based approaches to private company valuation and factors relevant to the selection of each approach
* Calculate the value of a private company using income-based methods
* Calculate the value of a private company using market-based methods and describe the advantages and disadvantages of each method

## Public vs private company features

| Public company | Private company: company-specific | Private company: stock-specific |
| --- | --- | --- |
| Mature | Early or late life-cycle stage | **Illiquidity** (main factor) |
| Liquid shares | Smaller size → higher required return | **Concentrated control** (can transfer value from minority holders) |
| Greater transparency, standardized disclosure | Concentrated ownership, limited disclosure | Share **sale restrictions** (shareholder agreements) |
| Owner/manager separation | Owner/manager overlap → **fewer principal–agent problems**, longer-term view | |

* Stock-specific factors are generally **negative** for value; company-specific factors can go either way (a founder-led startup may grow faster than public peers)
* The spread of risk and return is wider than for public companies; family firms (e.g. Germany's *Mittelstand*) dominate in many economies

**Textbook examples (knowledge checks).**

* Thunder Corp. is owned by non-employee shareholders and run by hired managers, so **principal–agent issues** are the *least* likely difference from a public company
* Sun and Moon (two 35% partners, three 10% partners): per-share differences come from **concentrated control** (the two 35% holders together control 70%)
* Privacy Group vs PT Corp. (same apart from listing): the difference comes from **illiquidity of shares**

## Uses of private company valuation and areas of focus

| Transactions | Compliance | Litigation |
| --- | --- | --- |
| VC financing (early stage, informal valuations); PE growth (minority) or buyout (control); debt financing; IPO; acquisitions and divestitures; bankruptcy (going concern vs liquidation); **share-based compensation** | Financial reporting (e.g. goodwill impairment testing, fund performance); tax reporting (restructurings, transfer pricing, estate and gift tax) | Damages, lost profits, shareholder disputes, divorce |

* The **standard of value** depends on context: fair market value (reporting/tax) can differ from **investment value** to a buyer with synergies
* Share-based payments are valued in the **transaction** practice area (textbook knowledge check)

Three areas of focus:

1. **Cash flow and earnings adjustments** → numerator
2. **Discount rate and required return adjustments** → denominator
3. **Valuation discounts or premiums** (control, marketability) → applied at the end

## Earnings normalization and cash flow estimation

* Private statements may be **reviewed** (limited assurance) or **compiled** (no auditor opinion), not audited → usually need adjustment
* **Normalized earnings** here means removing non-recurring and non-economic items **and** ongoing anomalies, so results are comparable to a public company run efficiently under new ownership
* Typical adjustments: affiliate sales at non-market terms (revenue); related-party compensation and real estate use (costs); D&A distortions; taxes on adjusted income; owner distributions vs public dividends
* Separate **one-time** events (owner contributes or withdraws assets) from **ongoing** distortions (related-party transactions not at arm's length)
* Watch: above-market owner compensation (lowers taxable income); personal expenses, residences, aircraft and vehicles run through the company; life insurance; shareholder loans. Owners of loss-making firms may **under**-pay themselves → expenses understated
* **Real estate:** strip property revenue and expenses, charge a market rent, and treat the property as a non-operating asset (different risk and growth)

**Textbook example (Fyt for Life, FLI, normalization).** Reported: revenue SGD50m, COGS 30m, SG&A 5m, D&A 1m, EBIT 14m, tax 17% → operating income after tax **11.62m**.

* CEO pay 1.5m vs market 0.5m → SG&A −1.0m
* Non-operating ranch and condo → SG&A −0.3m, D&A −0.1m
* Debt below optimal → use operating income after tax (ignore interest)
* Adjusted: SG&A 3.7m, EBITDA 16.3m, D&A 0.9m, EBIT **15.4m**, tax 2.618m → **12.782m**
* If Xin took the 1.5m as a dividend instead of salary, normalize earnings **down** (deduct a 0.5m market salary). Free use of a family-owned building → deduct a market rent

**Textbook example (Chandra Consolidated).** The shops use the holding company's ground-floor space rent-free. Add a market rent as an expense of Chandra Shops (lower earnings and value) and as rental income of Chandra Holdings (higher).

**Cash flow issues:** the nature of the interest being valued (minority vs total equity) changes the assumptions; outcomes may be widely uncertain (IPO, sale, bankruptcy, approval milestones) → **scenario analysis**. Management forecasts may be biased: **overstated** for goodwill impairment tests, **understated** for option grants. Check that projections include future capital needs.

**Textbook example (Nano Beta, scenario analysis).** WACC 15%; 80% preliminary approval, then 40% broad / 40% limited / 20% fail; value 0 on failure.

* Broad: 200(1.05)/(0.15 − 0.05) = **€2.1bn**; limited: 50(1.02)/(0.13) = **€392.3m** (values at t = 2)
* Expected t = 2 value: 0.32 × 2,100 + 0.32 × 392.3 = €797.5m → today 797.5/1.15² = **€603.1m**
* Knowledge check: preliminary 60%, broad 60%, limited 20% → 0.36 × 2,100 + 0.12 × 392.3 = 803.1 → **€607.2m** (+€4.2m)

## Discount rates and required return models

Factors that need adjustment:

* **Size premiums** are common for private companies (but small-cap premium data may reflect distress that isn't relevant)
* **Debt availability and cost:** less access to debt → more equity → higher WACC; higher operating risk → higher cost of debt
* **Acquisition context:** use the **target's** risk and capital structure. Using the buyer's lower WACC means the buyer pays the seller for value the buyer brings
* **Projection risk:** less information or inexperienced management forecasting → higher, judgmental premium

| Model | Required return on equity |
| --- | --- |
| CAPM | $r_f+\beta(r_m-r_f)$ |
| Expanded CAPM | $r_f+\beta(r_m-r_f)$ + small-stock premium + company-specific premium |
| Build-up | $r_f$ + ERP + small-stock premium + industry premium (±) + company-specific premium (**implicit β = 1**) |

* CAPM may not fit: private owners are often undiversified and small firms aren't comparable to public peers with betas
* Build-up is used when guideline public companies are unavailable or poor comparables

**Textbook example (FLI discount rate).** $r_f$ 3.8%, ERP 5%, β 1.1, small-stock 3%, company-specific 1%, industry 0%, pretax debt 7.5%, tax 17%; D/(D+E): peers 20%, optimal 10%, actual 2%.

| Measure | Calculation | Result |
| --- | --- | --- |
| CAPM | 3.8 + 1.1 × 5 | **9.3%** |
| Expanded CAPM | 3.8 + 5.5 + 3 + 1 | **13.3%** |
| Build-up | 3.8 + 5 + 3 + 0 + 1 | **12.8%** |
| WACC, actual 2% debt ($r_e$ 13%) | 0.02 × 6.225 + 0.98 × 13 | **12.9%** |
| WACC, optimal 10% debt | 0.10 × 6.225 + 0.90 × 13 | **12.3%** |

* Expanded CAPM vs CAPM gap: mostly the **size premium** (3 of the 4 pp)
* Build-up < expanded CAPM even with more factors: industry premium is 0 and the ERP isn't scaled by β = 1.1 (−0.5 pp)
* For a sale, use **optimal** weights (an acquirer would move there). But if the buyer prices off the lower WACC, it pays the seller for changes the **buyer** will make
* Private firms usually can't reach public peers' debt levels

> [!NOTE]
> Textbook inconsistency: Example 4 computes the actual-structure WACC as 12.9%, but the Section 8 recap table lists it as 12.8%. Khan's chosen WACC of 12.55% is the average of 12.8% and 12.3%.

## Discounts and premiums: DLOC and DLOM

Value ladder (highest to lowest):

1. **Strategic control** (strategic buyer, synergies) ← synergistic control premium
2. **Financial control** (financial buyer, no synergies) ← control premium
3. Comparable public company value = marketable minority interest
4. Non-controlling minority interest ← **DLOC**
5. Non-controlling, **non-marketable** minority interest ← **DLOM**

$$
DLOC=1-\frac{1}{1+\text{Control premium}}\qquad \text{Total discount}=1-(1-DLOC)(1-DLOM)
$$

* **DLOC:** without control you can't pick the board or management, pay out cash, buy or sell assets, or finance. Supported when **disproportionate returns** go to controllers. Estimated from public-company acquisition control premiums
* DCF values are usually **controlling** values if the cash flows and discount rate are on a control basis (optimal capital structure); otherwise they already reflect lack of control
* **DLOM:** lack of a liquid market (prospects for liquidity, transfer restrictions, buyer pool, concentration). Usually applies to non-controlling interests. Smaller if an IPO or sale is near; larger if no dividends and no liquidity event in sight
* DLOM evidence: **restricted stock** transactions (soon tradable), **pre-IPO** transactions, **put option** pricing (ATM put premium / share price)
  * Put pros: captures risk directly through **volatility**
  * Put cons: gives price protection but not **liquidity**, and keeps upside, so it doesn't exactly model marketability
* Other discounts: key person, portfolio (non-homogeneous assets), non-voting shares
* Apply discounts **multiplicatively**, in sequence: control first, then marketability

**Textbook example (Everfloat).** Value GBP1.65bn, control premium 15% → DLOC = 1 − 1/1.15 = **13.0%** → GBP1.4355bn. DLOM: Shipline ATM 6-month put (forward 50e^(0.025) = 51.27, σ 60%) = 8.40 → 8.40/50 = **16.8%**. Total = 1 − 0.87 × 0.832 = **27.6%**.

**Textbook example (Starbeam).** Valued as 100% management-owned (control and non-marketable). Selling a non-controlling stake → apply only **DLOC**; a financial buyer taking control → **financial control premium**. Control premium 30%, DLOM 20% → DLOC 23.1%; total 1 − 0.769 × 0.8 = **38.5%**.

#### Exam traps

* DLOC ≠ control premium (30% premium → 23.1% DLOC)
* Discounts multiply; don't add them (13% + 16.8% ≠ 27.6%)

## Valuation approaches

| Approach | Methods | Best for / note |
| --- | --- | --- |
| **Income** (absolute) | DCF (FCFF at WACC, FCFE at $r_e$), capitalized cash flow, excess earnings | Forecastable cash flows; multistage DCF preferred when you can forecast |
| **Market** (relative) | Guideline public company (GPCM), guideline transactions (GTM), prior transaction | Most used; relies on real market data; needs true comparables |
| **Asset-based** (absolute) | FV of assets − FV of liabilities | Asset-heavy, holding or liquidating firms |

Terminal value options: capitalized cash flow, excess earnings (RI/(r − g)), or a market multiple.

**Capitalized cash flow method (CCM).** Single-stage growing perpetuity; useful for stable firms with no projections and little market evidence.

$$
\text{Firm value}=\frac{FCFF_1}{WACC-g}=\frac{EBIT_1(1-t)(1-RIR)}{WACC-g},\quad RIR=\frac{g}{WACC}
\qquad
V_{equity}=\frac{FCFE_1}{r_e-g}
$$

* $r_e-g$ = **capitalization rate**. Equity = firm value − market value of debt (face value is acceptable if debt is small and operations stable)

**Textbook example (Vinuvia, CCM).** FCFF BRL15m, $r_e$ 15%, $r_d$ 10%, tax 34%, 10% debt (BRL5m), g 5%. WACC = 0.1 × 0.66 × 10% + 0.9 × 15% = **14.2%** (14.16%). Firm = 15.75/0.0916 = BRL171.9m → equity **BRL166.9m**. With g 2%: **BRL120.8m** (over 25% lower; very sensitive to g).

> [!NOTE]
> Textbook issues in Vinuvia: the g = 2% formula still shows BRL15,750,000 in the numerator, but the answer BRL120.8m uses 15m × 1.02 = 15.3m. The later knowledge check describes WACC as 15% and computes RIR = 5%/15% = 33.3%; with the example's WACC of 14.2% it would be ≈35%.

**Excess earnings method (EEM).** Value tangible assets at FV; earnings above their required returns are attributed to intangibles.

$$
RI=\text{Normalized income}-WC\times r_{WC}-FA\times r_{FA}\qquad RV=\frac{RI(1+g)}{r_{RI}-g}
$$

Firm value = FV of tangible assets + RV. Required returns rise from working capital (lowest) to fixed assets to intangibles (highest). Used rarely for whole firms (very small ones only); widely accepted for **intangible asset** valuation in financial reporting.

**Textbook example (Digigraf).** WC €200k at 5%, FA €800k at 11%, normalized income €120k → RI = 120 − 10 − 88 = **€22k**; RV = 22 × 1.03/(0.12 − 0.03) = **€251,778**; firm **€1,251,778**. With 4% / 10% / 11%: RI 32k, RV 412k → **€1,412,000**.

> [!NOTE]
> Textbook typo: the Digigraf knowledge check writes residual income as "EUR 32,000,000"; it is EUR 32,000.

CCM vs EEM: CCM needs **one** discount rate (WACC); EEM needs several. Neither requires public comparables.

**Guideline public company method (GPCM).** Choose comparables by industry **and** size, leverage, life-cycle stage, risk and growth. EV multiples are more common than P/E (flexible to capital structure changes). Adjust beta for leverage:

$$
\beta_U=\frac{\beta_L}{1+(1-t)(D/E)}\qquad \beta_L^*=\beta_U\left[1+(1-t^*)(D/E)^*\right]
$$

**Textbook example (Quik Chip).** Peer mean β 1.21, D/E 50%, tax 21.6% → β_U = 1.21/1.392 = **0.8693**. Quik Chip D/E 25%, tax 18% → β* = 0.8693 × 1.205 = **1.0475**. EV: 17.3 × €35m EBIT = **€605.5m**; 2.0 × €250m sales = **€500m** (EBIT margin 14% vs peers' 11.6%).

> [!NOTE]
> Textbook error: the Quik Chip solution prints the relevered beta as 0.8693, the same as the unlevered beta. 0.8693 × [1 + 0.82 × 0.25] = 1.0475.

* Multi-segment firms → **composite** multiple weighted by each segment's share of sales or EBITDA. If peers have the same business mix as the target, use them directly
* GPCM pros: large pool of companies, rich data. Cons: comparability; subjective risk/growth adjustments
* Public trading multiples are generally minority values. Control premium factors: **type** of transaction (strategic > financial), **industry** "in play", **form of consideration** (stock deals are less reliable)
* Comparables are chosen on risk and growth, **not** debt ratio (private firms have less debt access)

**Guideline transactions method (GTM):** multiples from acquisitions of whole companies. All else equal, the most relevant evidence for a **controlling** interest. Consider synergies, contingent consideration (earn-outs, e.g. tied to EMA approval), non-cash consideration, availability of transactions, time between deal and valuation date, and differences in size, country, tax and leverage.

**Prior transaction method:** actual past transactions in the subject company's own stock.

## Income approach: worked valuation (FLI)

Process: (1) WACC; (2) base-year FCFF; (3) EV from FCFF forecast + terminal value; (4) discounts/premiums.

$$
FCFF=EBITDA(1-t)+Dep\times t-\Delta\text{LT assets}-\Delta WC
$$

**Textbook example (FLI, non-controlling view).**

* WACC **12.55%** ($r_e$ = 13%, average of 13.3% and 12.8%; average of the debt-ratio assumptions)
* Base FCFF = 16.3m × 0.83 + 0.9m × 0.17 − 1.2m − 0.5m = **SGD11.982m** (same as EBIT 15.4m × 0.83 + D&A 0.9m − 1.7m)
* 5-year growth: downside 2% / base 5% / optimistic 8%; terminal g 3% → TV = FCFF₅ × 1.03/(0.1255 − 0.03)

| SGD m | Downside | Base | Optimistic |
| --- | --- | --- | --- |
| FCFF Year 5 | 13.229 | 15.292 | 17.605 |
| Terminal value | 142.680 | 164.934 | 189.881 |
| EV | 124.027 | 140.202 | 158.161 |
| Equity (− debt 2.5) | 121.527 | 137.702 | 155.661 |
| After 18% DLOM (no DLOC) | **99.653** | **112.916** | **127.642** |

> [!NOTE]
> Textbook issues in the FLI case: the downside terminal value is first given as SGD141,295,059, then computed as 142,680,302 (the table uses 142.680). The formula is written with "(1 + 0.02)" though the computation grows FCFF₅ at the terminal 3%. The FCFF table labels EBITDA (16.3m) as "EBIT". I re-ran all EVs and they match the table.

**Textbook example (Macro Associates).** Selling partner's above-market pay → normalize costs **down**, EBIT **up**. No public comparables → build-up (ERP without beta, implicit β = 1). CCM advantage over EEM: a single discount rate.

## Market approach: worked valuation (Everfloat)

Process: (1) comparables by business line; (2) gather and composite multiples; (3) EV from multiples (public-equivalent value); (4) apply DLOC/DLOM.

**Textbook example (Everfloat, GBP m).** Revenue 700 / 250 / 50 (marine / logistics / energy), EBITDA 187.5 / 75 / −12.5 (total 250). Peer EV/S 2.8 / 1.1 / 8.0; EV/EBITDA 8.2 / 8.1 / 20.0.

* Composite EV/S = 0.7(2.8) + 0.25(1.1) + 0.05(8.0) = **2.635** → EV **2,635** (segments: 1,960 / 275 / 400; logistics is the least valuable)
* Composite EV/EBITDA = 0.75(8.2) + 0.30(8.1) − 0.05(20) = **7.58** → EV **1,895**. Negative-EBITDA segment implies negative value → value energy on sales instead
* After the 27.6% total discount: **1,907.74** (EV/S) and **1,371.98** (EV/EBITDA); average **1,639.86**

Example 11 rounds the composite EV/S to 2.6; Section 9 uses 2.635.

## Quick Recall

* Private vs public: illiquidity, concentrated control, sale restrictions (stock-specific, negative); size, stage, owner-manager overlap (company-specific, ±).
* Uses: transactions, compliance, litigation. Focus: normalize earnings (numerator), adjust discount rate (denominator), DLOC/DLOM.
* Normalize: market owner pay, remove non-operating assets, market rent, arm's-length related-party terms.
* Expanded CAPM = CAPM + size + company-specific. Build-up = $r_f$ + ERP + size + industry + company-specific (β = 1).
* Use the target's risk and capital structure; optimal weights for a control sale.
* DLOC = 1 − 1/(1 + CP). Total = 1 − (1 − DLOC)(1 − DLOM). DLOM via restricted stock, pre-IPO, put options.
* CCM: FCFF₁/(WACC − g); RIR = g/WACC. EEM: RI after WC and FA charges, capitalized at $r_{RI}$.
* GPCM: unlever/relever beta, composite multiples; GTM best for control; prior transactions in own stock.
