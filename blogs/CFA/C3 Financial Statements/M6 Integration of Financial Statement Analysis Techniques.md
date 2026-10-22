# Integration of Financial Statements Analysis Techniques

This unit applies the analysis tools from the earlier units to one company, step by step, to answer an investment question. The main techniques are:

* [Extended DuPont Equation](#extended-dupont-equation): what drives ROE
* [Capital Allocation Decisions](#capital-allocation-decisions): where the company invests
* [Earnings Quality](#earnings-quality): how much of earnings is backed by cash
* [Cash Flow Analysis](#cash-flow-analysis): how well operating income converts to cash
* [Market Value Decomposition](#market-value-decomposition): what the market pays for each part of the business
* [Off-Balance-Sheet Financing](#off-balance-sheet-financing): obligations missing from the balance sheet
* [Changes in Accounting Standards](#changes-in-accounting-standards): breaks in comparability over time

## Extended DuPont Equation

The **five-factor (extended) DuPont** decomposition splits ROE into five drivers:

$$
\text{ROE}=\frac{\text{NI}}{\text{EBT}}\times\frac{\text{EBT}}{\text{EBIT}}\times\frac{\text{EBIT}}{\text{Revenue}}\times\frac{\text{Revenue}}{\text{Average total assets}}\times\frac{\text{Average total assets}}{\text{Average equity}}
$$

$$
=\text{Tax burden}\times\text{Interest burden}\times\text{EBIT margin}\times\text{Asset turnover}\times\text{Financial leverage}
$$

The first three factors multiply to the **net profit margin** (NI / revenue), and the first four to **ROA**. The decomposition shows whether a change in ROE comes from operations (margin, turnover), from financing (interest burden, leverage) or from taxes.

**Isolating the associates.** Income from associates (the [equity method](M1%20Intercorporate%20Investments.md#equity-method-of-accounting)) is earned by assets the company does not run, so it can distort the picture of the core business. To see the ROE of the company's own operations, remove the associates from both the income and the assets:

* Subtract the **income from associates** from net income.
* Subtract the **investment in associates** from total assets.
* Keep **financial leverage unchanged**, i.e., assume the associates were financed with the same mix of debt and equity as the rest of the company.

This adjustment does not follow accounting logic: the balance sheet no longer balances after it. It is only an analytical tool.

**Example.** A company reports revenue of 1,000, EBIT of 150, interest expense of 20 and EBT of 130. Tax at 30% is 39, so net income before associates is 91. Its share of associates' income, reported after tax, is 9, so net income is 100. Average total assets are 1,250, including an investment in associates of 125, and average equity is 500.

| Factor | Reported | Excluding associates |
| --- | ---: | ---: |
| Tax burden (NI / EBT) | $100/130=0.769$ | $91/130=0.700$ |
| Interest burden (EBT / EBIT) | $130/150=0.867$ | 0.867 |
| EBIT margin (EBIT / revenue) | $150/1{,}000=0.150$ | 0.150 |
| Asset turnover (revenue / assets) | $1{,}000/1{,}250=0.800$ | $1{,}000/1{,}125=0.889$ |
| Financial leverage (assets / equity) | $1{,}250/500=2.50$ | 2.50 (unchanged) |
| **ROE** | **20.0%** | **20.2%** |

* The associates' income is after tax, so it sits **below EBT**: it raises the reported tax burden above $1-30\%=0.70$, which makes the company look more tax-efficient than it is.
* Excluding the associates, asset turnover rises and ROE goes up slightly, to 20.2%. The associates earn only $9/125=7.2\%$ on the investment, less than the core business, so they **dilute** ROE.

## Capital Allocation Decisions

A company's **capital allocation** (where it spends its capital) must be consistent with, and support, management's **strategy**. Segment disclosures let the analyst test this, by comparing each segment's share of capital expenditure with its share of assets:

$$\text{Capex ratio}=\frac{\text{Segment capex}\,/\,\text{Total capex}}{\text{Segment assets}\,/\,\text{Total assets}}$$

* **Above 1**: the company is allocating **more** resources to the segment than its current size, i.e., growing it.
* **Below 1**: it is allocating less, i.e., harvesting or shrinking it.

Compare the ratio with each segment's **profitability** (e.g., EBIT / segment assets). Capital should flow to segments with the highest returns, or the best growth prospects.

**Example.**

| Segment | Share of assets | Share of capex | Capex ratio | EBIT / assets |
| --- | ---: | ---: | ---: | ---: |
| A | 50% | 40% | 0.80 | 15% |
| B | 30% | 25% | 0.83 | 8% |
| C | 20% | 35% | **1.75** | 12% |

The company is growing segment C fastest, even though A earns the highest return. That is reasonable only if C has better growth prospects, which the analyst should check against management's stated strategy. B earns the lowest return but still gets nearly its share of capex: a candidate for restructuring or disposal.

## Earnings Quality

Earnings quality is covered in more depth in [M5 Evaluating Quality of Financial Reports](M5%20Evaluating%20Quality%20of%20Financial%20Reports.md#quality-of-earnings). Here the focus is on measuring the **accrual** component of earnings.

**Aggregate accruals** are the part of earnings not backed by cash:

$$\text{Aggregate accruals}=\text{Accrual-based earnings}-\text{Cash earnings}$$

Scaled by average net operating assets, this gives the **accruals ratio**. A **lower accruals ratio** means **higher earnings quality**, because accruals are less persistent than cash flows.

Earnings can be split into cash flow and accruals with either:

1. The **balance sheet approach**, or
2. The **cash flow statement approach**.

**Net operating assets (NOA)** are operating assets minus operating liabilities. "Operating" here excludes the financing items, cash and debt:

$$\text{NOA}=(\text{Total assets}-\text{Cash and short-term investments})-(\text{Total liabilities}-\text{Total debt})$$

**Balance sheet approach.** The accruals are the change in NOA:

$$\text{AA}_{\text{B/S}}=\text{NOA}_t-\text{NOA}_{t-1},\qquad\text{Accruals ratio}_{\text{B/S}}=\frac{\text{AA}_{\text{B/S}}}{\overline{\text{NOA}}}$$

**Cash flow approach.** The accruals are the part of net income not explained by operating and investing cash flows:

$$\text{AA}_{\text{CF}}=\text{NI}_t-(\text{CFO}_t+\text{CFI}_t),\qquad\text{Accruals ratio}_{\text{CF}}=\frac{\text{AA}_{\text{CF}}}{\overline{\text{NOA}}}$$

**Example.** NOA rises from 1,000 to 1,200, so average NOA is 1,100. Net income is 150, CFO is 120 and CFI is −100.

* Balance sheet approach: $\text{AA}=1{,}200-1{,}000=200$, accruals ratio $=200/1{,}100=18.2\%$
* Cash flow approach: $\text{AA}=150-(120-100)=130$, accruals ratio $=130/1{,}100=11.8\%$

The two approaches rarely give the same number: acquisitions, currency translation and non-cash transactions change NOA without passing through the cash flow statement. What matters is the **trend** over time and the comparison with peers, using the same approach throughout.

## Cash Flow Analysis

**Comparing CFO with operating income** tests how well profits turn into cash. They are measured differently:

* CFO has already **deducted interest paid and taxes paid**, while operating income (EBIT) is before interest and taxes.
* To compare like with like, **add back cash interest paid and cash taxes paid** to CFO.

$$\text{Adjusted CFO}=\text{CFO}+\text{Cash interest paid}+\text{Cash taxes paid}$$

> [!Note]
>
> Under IFRS, a company may classify interest paid in **CFF**. In that case it was never deducted from CFO, so **do not add it back**. Check the classification before adjusting.

**Ratios** (using adjusted CFO where the comparison is with a pre-interest, pre-tax measure):

| Ratio | What it shows |
| --- | --- |
| **CFO / EBIT** | Cash conversion of operating income; well below 1 suggests earnings that are not turning into cash |
| **CFO / total assets** | Cash return on assets, a cash version of ROA |
| **CFO / cash interest paid** | Interest coverage from cash flow |
| **CFO / debt** | Ability to repay debt from operating cash flow |
| **CFO / capex** | Ability to fund investment internally; above 1 means capex can be paid without new financing |

**Example.** EBIT is 150 and reported CFO is 100, after cash interest of 20 and cash taxes of 30. Adjusted CFO is $100+20+30=150$, so CFO / EBIT $=150/150=1.0$: operating income is fully backed by cash. Using the unadjusted CFO would give $100/150=0.67$ and wrongly suggest a cash shortfall.

## Market Value Decomposition

When an associate is **listed**, the market prices it separately. Subtracting the market value of the company's stake in it from the company's own market value gives the value the market puts on the **parent's own business**:

$$\text{Implied P/E of the parent excluding associates}=\frac{\text{Market value of the parent}-\text{Market value of the stake in associates}}{\text{NI}-\text{Share of associates' earnings}}$$

**Example.** The company in the DuPont example has a market value of 2,000 and net income of 100, a P/E of 20. Its associate is listed with a market value of 1,000, and the company owns 30%: a stake worth 300. Its share of the associate's earnings is 9.

$$\text{P/E excluding associates}=\frac{2{,}000-300}{100-9}=\frac{1{,}700}{91}=18.7$$

The market values the associate stake at $300/9=33.3$ times earnings, but the core business at only 18.7 times. The headline P/E of 20 overstates how highly the market values the company's own operations.

## Other Issues

### Off-Balance-Sheet Financing

**Off-balance-sheet (OBS) financing** is any obligation that works like debt but does not appear as a liability. Since IFRS 16 and ASC 842 brought most leases onto the balance sheet, the main remaining sources are:

* **Purchase commitments**, such as take-or-pay contracts
* **Guarantees** of other entities' debt
* **Unconsolidated entities**, such as joint ventures and associates with large debts (see [M1](M1%20Intercorporate%20Investments.md#joint-venture-and-spes-vies))
* **Receivables sold with recourse**, where the company still bears the credit risk

The analyst finds them in the notes, adds the present value of the obligations to debt and recomputes leverage and coverage ratios before comparing the company with peers.

### Changes in Accounting Standards

A new accounting standard can change reported numbers without any change in the business, which breaks comparisons over time. For example, after IFRS 16 leases came onto the balance sheet: assets and debt increased, and **EBITDA rose** because the operating lease expense was replaced by depreciation and interest, which sit below EBITDA.

When a standard changes, the analyst should:

* Read the **transition disclosures** in the notes to see the effect on each line
* Check whether **prior periods were restated** or whether the change applies only from the adoption date
* **Restate** the earlier periods, or adjust the ratios, so the trend reflects the business rather than the accounting
