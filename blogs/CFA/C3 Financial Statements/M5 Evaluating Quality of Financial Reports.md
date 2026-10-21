# Evaluating Quality of Financial Reports

> [!Note]
>
> Very low importance in the exam. Focus on the concepts, the warning signs and how to read the two models; the formulas do not need to be memorized.

## Dimensions

Financial report quality has two separate dimensions:

* **Reporting quality**: is the information **decision-useful**, i.e., **relevant** and **faithfully represented** (complete, neutral and free from error)? It concerns the **reports**.
* **Earnings (results) quality**: are the earnings **sustainable**, and do they give an **adequate level of return** on the capital invested? It concerns the **underlying business**.

The two are linked: earnings quality can be judged only if the reporting quality is high. A company can report faithfully and still have low earnings quality, e.g., when it honestly reports a return below its cost of capital.

**The quality spectrum**, from best to worst:

| | Reporting | Earnings |
| --- | --- | --- |
| 1 | GAAP-compliant, decision-useful | Sustainable, adequate level of return |
| 2 | GAAP-compliant, decision-useful | **Low earnings quality**: not sustainable, or not an adequate return |
| 3 | GAAP-compliant, but **biased** accounting choices (aggressive or conservative) | |
| 4 | GAAP-compliant, but earnings **management** through real actions (e.g., timing sales or cutting R&D to hit a target) | |
| 5 | **Departures from GAAP**: non-compliant accounting | |
| 6 | **Fictitious** transactions: fraud | |

Below the first two rows the reports are no longer decision-useful, so earnings quality cannot be assessed.

### Aggressive vs Conservative Reporting

Both are **biased** choices, and both reduce reporting quality:

* **Aggressive** choices increase reported earnings or the financial position **in the current period**, e.g., recognizing revenue early, capitalizing costs that should be expensed, or using long useful lives.
* **Conservative** choices decrease them **now**, e.g., large provisions or early write-downs, and often **inflate later periods** when the reserves are released ("**cookie jar**" reserves).

Conservatism is not neutral either: it moves earnings between periods and smooths them, which hides volatility. Some conservatism is built into the standards themselves, e.g., impairment losses are recognized but most unrealized gains on non-financial assets are not.

### Classification Choices

Even when the amounts are correct, **where** an item is reported changes the picture:

* **On the income statement**: moving recurring expenses into "non-recurring" or non-operating items raises **operating** income, which analysts often focus on.
* **On the balance sheet**: classifying receivables as non-current, or debt as long-term, changes liquidity ratios.
* **On the cash flow statement**: IFRS lets interest and dividends paid be classified in CFO or CFF, and capitalizing a cost moves its cash outflow from CFO to CFI. Both raise CFO without changing total cash flow.

### Mergers and Acquisitions Issues

Acquisitions provide both **opportunities and motivations** to manage financial results:

* **Motivation**: a company whose organic growth is slowing may make acquisitions to **mask the decline**, and to make reported results hard to compare across years.
* **Purchase price allocation**: allocating more of the price to **goodwill**, which is **not amortized**, and less to identifiable assets that are depreciated or amortized (PP&E, customer lists) **lowers future expenses**. Goodwill that is overstated this way shows up later as an **impairment**.
* **Cash flow**: the cash paid for an acquisition is in **CFI**, while the acquired working capital later converts to cash in **CFO**, so buying companies can boost CFO.
* **The target's numbers**: a target may manage its earnings upward before the deal to raise its price, and acquired companies' misreporting comes onto the acquirer's books.

## 2 Models

Two statistical models use financial ratios to flag risks. There is no need to understand their math or the economics behind them, only what the score means.

**Beneish model: the probability of earnings manipulation.** A **probit** model combines eight variables into an **M-score**:

| Variable | What it captures |
| --- | --- |
| **DSR** index: days sales receivable | Receivables growing faster than sales (revenue inflation) |
| **GM** index: gross margin | A falling margin (pressure to manipulate) |
| **AQ** index: asset quality | More costs being capitalized |
| **SG** index: sales growth | Growth companies face more pressure to keep it up |
| **DEP** index: depreciation | A slower depreciation rate |
| **SGA** index: SG&A | Rising SG&A relative to sales |
| **LVG** index: leverage | Rising leverage (covenant pressure) |
| **TATA**: total accruals to total assets | Earnings not backed by cash |

* A **higher M-score** means a **higher probability of earnings manipulation**.
* The M-score is a z-value: the probability is $N(M)$, the standard normal probability.
* **M > −1.78** is treated as a signal of likely manipulation; −1.78 corresponds to a probability of about 3.8%.

**Example.** A company's M-score is −1.50. It is above −1.78, so it is flagged. Its probability of manipulation is $N(-1.50)=6.7\%$.

**Altman model: the probability of filing for bankruptcy.** Discriminant analysis gives the **Z-score**:

$$Z=1.2\,A+1.4\,B+3.3\,C+0.6\,D+1.0\,E$$

| | Ratio | What it captures |
| --- | --- | --- |
| A | Working capital / total assets | Liquidity |
| B | Retained earnings / total assets | Cumulative profitability |
| C | EBIT / total assets | Current profitability |
| D | Market value of equity / book value of liabilities | Solvency, as seen by the market |
| E | Sales / total assets | Asset turnover |

A **higher Z-score** means a **lower probability of bankruptcy**:

| Z-score | Probability of bankruptcy |
| --- | --- |
| Above **3.0** | Low |
| Between **1.81** and 3.0 | Grey zone |
| Below **1.81** | High |

**Example.** A has a ratio of 0.10, B 0.20, C 0.08, D 0.90 and E 1.10:

$$Z=1.2(0.10)+1.4(0.20)+3.3(0.08)+0.6(0.90)+1.0(1.10)=2.30$$

The company is in the **grey zone**.

> [!Note]
>
> **Limitations of both models.** They are estimated on **past data** from specific samples of companies, so they may not fit other industries (the Altman model was built on manufacturers, not financial companies) or other periods. They use a single period's data. And because the models are known, managers who expect to be screened can **manage the ratios** themselves.

## Quality of Earnings

**Recurring earnings** are the starting point: strip out non-recurring items (restructuring charges, gains on asset sales, discontinued operations) to find the earnings that can be expected to continue. Watch for "non-recurring" items that recur every year.

**Earnings persistence.** Earnings are of high quality if they persist into the future. Regress next year's earnings on this year's:

$$\text{Earnings}_{t+1}=\alpha+\beta_1\,\text{Earnings}_t+\varepsilon$$

A higher $\beta_1$ means more persistent earnings. Splitting earnings into a **cash** and an **accrual** component, with a separate beta for each:

$$\text{Earnings}_{t+1}=\alpha+\beta_1\,\text{Cash flow}_t+\beta_2\,\text{Accruals}_t+\varepsilon$$

Studies find $\beta_2<\beta_1$: the **accrual component is less persistent** than the cash component, because accruals involve more estimates and reverse over time. Earnings with a larger share of accruals are therefore of **lower quality**.

**Example.** With $\alpha=0$, $\beta_1=0.8$ and $\beta_2=0.5$, two companies each earn 100 this year:

* A: cash flow 90 and accruals 10. Expected next year: $0.8(90)+0.5(10)=77$
* B: cash flow 40 and accruals 60. Expected next year: $0.8(40)+0.5(60)=62$

Same earnings this year, but B's are less likely to last.

**Accruals ratios** measure the accrual component, scaled by average net operating assets (NOA):

$$\text{Accruals ratio (balance sheet)}=\frac{\text{NOA}_{\text{end}}-\text{NOA}_{\text{beg}}}{\overline{\text{NOA}}}$$

$$\text{Accruals ratio (cash flow)}=\frac{\text{NI}-\text{CFO}-\text{CFI}}{\overline{\text{NOA}}}$$

A **higher accruals ratio** means **lower earnings quality**. For example, NOA rising from 1,000 to 1,200 gives a balance-sheet accruals ratio of $200/1{,}100=18.2\%$.

**Other warning signs** for earnings quality:

* Consistently **meeting or just beating** analyst forecasts or other benchmarks by small amounts
* **External indicators** of poor quality: enforcement actions by regulators, restatements
* **Revenue**: receivables growing faster than revenue (rising days sales outstanding), bill-and-hold sales, channel stuffing, reporting revenue gross instead of net
* **Expenses**: capitalizing costs, lengthening useful lives, inventory growing faster than sales (rising days of inventory on hand)
* **NI consistently above CFO**

## Mean Reversion

Earnings at extreme levels, high or low, tend to **revert toward the industry mean** over time: competition erodes unusually high returns, and companies with poor returns restructure, are acquired or exit.

* An analyst should **not extrapolate** unusually high or low earnings; forecast them moving back toward normal levels.
* Earnings driven by **accruals** revert **faster** than earnings backed by cash.

## Cash Flow Quality

CFO is the main criterion, because it is **less subject to accounting estimates** than net income. High-quality operating cash flow is:

* **Positive**
* From **sustainable sources**: the core business, not one-off working capital reductions or asset sales
* **Adequate** to cover capital expenditure, dividends and debt repayments
* **Low in volatility** relative to peers

CFO is less subject to manipulation, but it can still be managed:

* **Timing**: stretching payables, collecting receivables early or selling them (factoring, securitization), and cutting inventory raise CFO for one period without improving the business.
* **Classification**: capitalizing operating costs moves the outflow to CFI, and under IFRS interest and dividends paid can be moved out of CFO.

A company with CFO above NI is usually higher quality, but check why: CFO boosted by working capital reductions that cannot repeat is not sustainable.

## Quality of B/S

A high-quality balance sheet has:

1. **Completeness**: all obligations are on the balance sheet. Look for **off-balance-sheet** items in the notes, such as purchase commitments (take-or-pay contracts), guarantees, and investments in joint ventures or unconsolidated entities.
2. **Unbiased measurement**: assets and liabilities measured fairly. Judgment matters most for **goodwill** and other intangibles, **Level 3 fair values**, pension obligations and inventory. A large goodwill impairment suggests the company **overpaid** for past acquisitions.
3. **Clear presentation**: items are classified properly and disaggregated enough to be understood.

## Sources of Information about Risk

* **Financial statements**: leverage, liquidity and profitability ratios, and the results of models such as the Altman Z-score.
* **Auditor's report**: an **unqualified** (clean) opinion, or a qualified opinion, an adverse opinion or a disclaimer. Look for a **going-concern** paragraph, and the **key (critical) audit matters**. The report gives only limited, often **late**, warning: it comes after the period, and a clean opinion does not rule out fraud.
* **Notes to the statements**: accounting policies and estimates, contingencies, commitments, related-party transactions and risk disclosures.
* **MD&A**: management's view of the principal risks, trends and uncertainties.
* **SEC filings** (US):
  * **Form NT 10-K** (or NT 10-Q): notice that a filing will be **late**, often a warning sign of accounting problems
  * **Form 8-K**: material events, such as a **change of auditor**, the departure of senior executives or a restatement
  * **Form 144**: notice of planned **sales of shares by insiders**
  * The **proxy statement**: executive compensation and related-party transactions
* **Financial press**: investigative journalism can uncover problems before regulators or auditors do.
