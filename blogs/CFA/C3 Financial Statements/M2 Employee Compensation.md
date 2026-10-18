<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 440px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.comp-timeline-chart { height: 545px; }
.fx-concept-chart.comp-rsu-chart { height: 575px; }
.fx-concept-chart.pen-pbo-chart { height: 530px; }
.fx-concept-chart.pen-assets-chart { height: 515px; }
.fx-concept-chart.pen-status-chart { height: 585px; }
.fx-concept-chart.pen-tppc-chart { height: 670px; }
@media (max-width: 587px) {
    .fx-concept-chart.comp-timeline-chart { height: 710px; }
    .fx-concept-chart.comp-rsu-chart { height: 690px; }
    .fx-concept-chart.pen-pbo-chart { height: 640px; }
    .fx-concept-chart.pen-assets-chart { height: 620px; }
    .fx-concept-chart.pen-status-chart { height: 670px; }
    .fx-concept-chart.pen-tppc-chart { height: 900px; }
}
</style>

# Employee Compensation

## Types of Employee Compensation

Accounting standards divide compensation into 5 general types, distinguished by:

* **Timing**: how long after the employee's service the payment is made
* **Form of payment**: cash, shares, or other benefits

| Type | What it covers | Examples |
| --- | --- | --- |
| **Short-term benefits** | Paid within 12 months after the end of the period in which the service is rendered | Salaries, annual bonuses, paid vacation, non-monetary benefits (medical care, housing) |
| **Long-term benefits** | Not expected to be paid within 12 months after the end of the service period | Long-term paid leave (e.g., sabbaticals), long-term disability benefits |
| **[Termination benefits](#accounting-principles)** | Paid because employment ends, not in exchange for service | Severance pay, outplacement support |
| **[Share-based compensation](#share-based-compensation)** | Paid in the employer's shares, or in cash based on the share price | Restricted stock, stock options, stock appreciation rights |
| **[Post-employment benefits](#post-employment-compensation)** | Paid after employment ends, in exchange for service during employment | Pensions, retiree medical benefits |

## Terminology

* **Grant date**: The employer and the employee agree on the terms of the award. For share-based compensation, the award's fair value is measured on this date (see [Financial Reporting for Share-Based Compensation](#financial-reporting-for-share-based-compensation)).
* **Vesting period**: The period of service the employee must complete to earn the award.
* **Vesting date**: The vesting conditions are met. The employee becomes **unconditionally entitled** to the compensation, so the employer now has an obligation.
* **Settlement date**: The compensation is paid, in cash or in shares.

The division of periods is similar to the terms of an **option**: granted, vested, then exercised (settled).

<iframe
  class="fx-concept-chart comp-timeline-chart"
  src="/charts/compensation-vesting-timeline.html"
  title="Employee compensation timeline: grant date, vesting period, vesting date and settlement date"
  loading="lazy"
></iframe>

The cost of compensation is recognized **over the vesting period**, as the employee renders the service that earns it, not when it is paid. Vesting is followed by settlement.

* **During the vesting period**: The employer recognizes compensation expense as the compensation vests. The other side of the entry depends on how the award will be settled:
  * Cash-settled (salaries, cash bonuses, pensions, stock appreciation rights paid in cash): a **liability**.
  * [Equity-settled](#equity-settled-share-based-compensation) (restricted stock, stock options): **equity** (paid-in capital; see the [journal entries](#financial-reporting-for-share-based-compensation)). No liability arises, because the employer owes shares, not cash.
* **Expense or asset**: The cost follows the employee's function. Pay for staff who produce inventory or build PP&E is **capitalized** into that asset, and reaches the income statement later as COGS or depreciation. Pay for management and administrative staff is **expensed** directly in SG&A.
* **At settlement**: Shares are issued, or the liability is paid in cash. For equity-settled awards, nothing more is expensed after vesting, even if the options are never exercised (see the [option example](#example-employee-stock-options)).

## Accounting Principles

| Category | Short-Term Benefits | [Equity-Settled Share-Based Compensation](#equity-settled-share-based-compensation) | [Post-Employment Benefits](#post-employment-compensation) |
| --- | --- | --- | --- |
| **Typical vesting period** | Days or weeks | Years | Years or decades |
| **Form of payment** | Cash | Shares | Cash |
| **Amount recognized over the vesting period** | Undiscounted salary, wage, etc. | Fair value, measured on the grant date | Present value of estimated future benefits |

Reading the table:

* **The longer the wait, the more the amount relies on estimates.** Short-term benefits are paid within days or weeks, so they are recognized at the **undiscounted** amount owed. Post-employment benefits are paid decades later, so they are measured at the **present value** of benefits (see [Pension Obligation](#pension-obligation)) that depend on assumptions about salaries, lifetimes and discount rates.
* **Equity-settled awards are fixed at the grant date.** Their fair value is measured once, on the grant date, and is not remeasured for later changes in the share price. That amount is spread over the vesting period.

Regardless of the form of compensation, most companies aggregate compensation expense and report it on the income statement by the **employee's function** (e.g., in COGS or SG&A), rather than as a separate line.

> [!Note]
>
> The exception is **termination benefits**. They are often incurred as part of a corporate **restructuring** and are reported within restructuring costs. Analysts often treat restructuring costs as non-recurring, so check whether they recur before excluding them.

## Share-Based Compensation

Share-based compensation pays employees in the employer's shares, or in cash linked to the share price. It is common for senior management, and for early-stage companies that have little cash to spare.

### Advantages and Disadvantages

Advantages:

1. **Aligns interests.** Employees who own shares gain and lose with shareholders, which reduces principal–agent conflicts.
2. **Improves retention.** A multi-year vesting period gives employees a reason to stay, because unvested awards are forfeited when they leave (see [Vesting Conditions](#vesting-conditions)).
3. **Preserves liquidity.** Equity-settled awards require no cash outflow, which matters most for start-ups and high-growth companies.

Disadvantages:

1. **Limited link to the employee's own effort.** Most employees have little influence over the share price, which also moves with the market, so the award may not change how they act.
2. **Distorted risk-taking.** It can push managers either way:
   * Options pay off only on the upside, so they can encourage **excessive** risk-taking.
   * A large holding of shares ties up the manager's own wealth in the company, so it can make them **too risk-averse**.
3. **Concentrated risk for employees.** Employees already depend on the company for their salary. Share-based pay makes their wealth fall with the share price as well, and an underperforming share may leave them worse off than equivalent cash pay.
4. **Dilution.** Issuing new shares on vesting or exercise reduces existing shareholders' ownership and EPS (see [Diluted Shares Outstanding](#diluted-shares-outstanding)).

### Vesting Conditions

1. **Service condition**: The award vests on a future date, as long as the employee is **still employed** then.
2. **Performance condition**: The award vests only if a performance target is met, usually in addition to a service condition. There are two kinds:
   * **Market condition**: tied to the share price, e.g., a target share price or total shareholder return relative to an index.
   * **Non-market condition**: tied to operating results, e.g., EPS growth, revenue or ROE targets.

> [!Note]
>
> The two kinds of performance condition are accounted for differently:
>
> * A **market condition** is built into the grant-date fair value (a share-price target lowers it). The expense is recognized as long as the service condition is met, **even if the market target is missed**.
> * A **non-market condition** is not part of the fair value. Instead, the expense is based on the number of awards **expected to vest**, re-estimated each period (as in the [option example](#example-employee-stock-options)). If the target is missed, the expense recognized so far is reversed.
>
> The same true-up applies to a service condition: awards forfeited by employees who leave before vesting reverse their expense.

#### Example: Market vs Non-Market Condition

**Why the market-condition expense stays.** The expense measures the employee **service** the company received, valued at the grant date. With a market condition, the fair-value model (e.g., Monte Carlo) already prices in the chance that the share-price target is missed, so the 24m fair value is lower than it would be without the target. Missing the target is one of the outcomes that price already allowed for. Reversing the expense would count that risk twice. The share price is also outside management's control, so the standards don't let the expense follow it.

**Setup.** An award with a grant-date fair value of 24m vests after 3 years of service, with an expense of $24/3=8$m a year. At the end of year 2, $16$m has been recognized.

| Outcome at the end of year 3 | Year 3 expense | Cumulative expense |
| --- | --- | --- |
| **Market condition** (share-price target) missed, employee still employed | 8m | **24m**: nothing reversed |
| **Non-market condition** (e.g., EPS target) missed | −16m (reversal) | **0** |
| Employee leaves in year 3 (service condition fails) | −16m (reversal) | **0** |

A non-market condition is not in the fair value, so the expense follows the number of awards expected to vest and is trued up to the actual result. A market condition gives no true-up: once the service is rendered, the full 24m is expensed whether or not the award ever pays out.

### Equity-Settled Share-Based Compensation

Equity-settled awards are paid in shares. Their fair value is measured on the **grant date** and spread over the vesting period (see the [timeline](#terminology)). It is not remeasured for later changes in the share price.

| | Restricted Stock | Restricted Stock Units (RSUs) | Employee Stock Options (ESOs) |
| --- | --- | --- | --- |
| **What the employee gets** | Shares issued at grant, which cannot be sold or transferred until they vest | A promise of shares, delivered at settlement | The right to buy shares at a fixed exercise price |
| **Voting and dividends before vesting** | Yes, usually | No (sometimes dividend equivalents) | No |
| **Value to the employee** | Full share price | Full share price | Only the gain above the exercise price |
| **Grant-date fair value** | Share price at grant | Share price at grant (less expected dividends the holder does not receive) | Option-pricing model (e.g., [Black–Scholes–Merton](../C7%20Derivative/M2%20Options.md#black-scholes-model), [binomial](../C7%20Derivative/M2%20Options.md#binomial-option-valuation)) |

* **Performance shares (PSUs)** are RSUs whose number of shares depends on a [performance condition](#vesting-conditions).
* **Employee stock options** are typically granted **at the money**: the exercise price equals the share price on the grant date. The option has no intrinsic value at grant, so it is worth something to the employee only if the share price rises. Its fair value is time value alone, which is why it must be estimated with an option-pricing model rather than read from the share price.

> [!Important]
>
> An option's grant-date fair value, and therefore the expense, depends on management's inputs: expected volatility, expected term, dividend yield and the risk-free rate. A higher volatility, longer term or higher risk-free rate raises the fair value; a higher dividend yield lowers it. Check whether the assumptions, disclosed in the [notes](#disclosures-for-share-based-compensation), are reasonable: assuming a lower volatility or a shorter expected term reduces compensation expense.

### Financial Reporting for Share-Based Compensation

* **Fair value is measured once, on the grant date.** Later changes in the share price have no effect on the expense.
  * **Restricted stock and RSUs**: the market price of the underlying shares on the grant date. RSUs usually receive no dividends before they vest, so their price is typically adjusted downward for the dividends expected over the vesting period.
  * **Options**: estimated on the grant date with an option-pricing model, such as Black–Scholes–Merton (FSA does not ask for the calculation; it is covered in [Derivatives](../C7%20Derivative/M2%20Options.md#black-scholes-model)).
* **The cost is recognized over the vesting period**, as the employee provides the service. The amount is based on the number of awards **expected to vest**, re-estimated each period (see [Vesting Conditions](#vesting-conditions)).
* **Settlement**: RSUs settle when they vest. Options settle later, when (and if) the employee exercises them, at any time until expiry.

For equity-settled awards, the cost builds up in a **share-based compensation reserve** within equity:

| When | Entry | Effect |
| --- | --- | --- |
| **Grant date** | No entry | — |
| **Each year of the vesting period** | Dr compensation expense, Cr share-based compensation reserve | NI ↓, so RE ↓; reserve ↑. Total equity, assets and liabilities are unchanged |
| **RSUs settle (at vesting)** | Dr reserve, Cr share capital (par) and additional paid-in capital (APIC) | A transfer within equity; no cash |
| **Options exercised** | Dr cash (exercise price × options) and reserve, Cr share capital (par) and APIC | Cash ↑ (a CFF inflow); equity ↑ by the cash received |

The expense is **non-cash**, so it is added back to net income in CFO under the indirect method (see [Modeling Cash Flow and the Share Count](#modeling-cash-flow-and-the-share-count)).

#### Example: Employee Stock Options

At $T=0$, 120 managers are each granted 10 options with an exercise price of \$25, expiring in 3 years. The grant-date fair value is \$50 per option, and the options vest after 2 years of service. Shares have a par value of \$1.

**Year 1.** 5 managers leave, and 15 more are expected to leave in Year 2. The options expected to vest are $(120-5-15)\times 10=1{,}000$.

$$\text{Expense}_{Y1}=\frac{1{,}000\times \$50}{2}=\$25{,}000$$

The option's fair value at $T=1$ (\$35) is ignored: the award is not remeasured.

**Year 2.** 12 managers leave, fewer than expected, so $(120-5-12)\times 10=1{,}030$ options vest. Year 2 expense trues the cumulative cost up to the actual number (see the note under [Vesting Conditions](#vesting-conditions)):

$$\text{Expense}_{Y2}=1{,}030\times \$50-\$25{,}000=\$26{,}500$$

The share price is \$20 at the end of Year 2, so the options are out of the money, but the expense is **not reversed**.

**Year 3.** The share price rises to \$30, and all 1,030 options are exercised.

| | Year 1 | Year 2 | Year 3 (exercise) |
| --- | ---: | ---: | ---: |
| Compensation expense (NI, RE ↓) | 25,000 | 26,500 | — |
| Reserve, year-end | 25,000 | 51,500 | 0 (−51,500) |
| Cash received (CFF) | — | — | $1{,}030\times 25=25{,}750$ |
| Share capital (par \$1) | — | — | +1,030 |
| APIC | — | — | $25{,}750-1{,}030+51{,}500=+76{,}220$ |

#### Example: RSU Plans

A company grants RSUs under three plans. Each plan vests over 3 years and settles at the end of its vesting period. Three-quarters of each grant goes to executive management and the remaining quarter to employees in the R&D division. Assume no forfeitures and a par value of \$1.

| Plan | Grant date | RSUs granted | Share price on the grant date | Grant-date fair value | Expense per year |
| --- | --- | ---: | ---: | ---: | ---: |
| Plan A | Jan. 1, Y1 | 18 | \$60 | 1,080 | 360 (Y1–Y3) |
| Plan B | Jan. 1, Y2 | 24 | \$93 | 2,232 | 744 (Y2–Y4) |
| Plan C | Jan. 1, Y3 | 30 | \$117 | 3,510 | 1,170 (Y3–Y5) |

<iframe
  class="fx-concept-chart comp-rsu-chart"
  src="/charts/rsu-plans-expense.html"
  title="RSU plans: expense by plan and year, and the reserve balance"
  loading="lazy"
></iframe>

The expense follows each employee's [function](#accounting-principles): **3/4 in SG&A** (executive management) and **1/4 in R&D**. When a plan settles, its reserve is moved to share capital (\$1 × RSUs) and APIC (the rest).

| | Y1 | Y2 | Y3 | Y4 | Y5 | Y6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Plan A | 360 | 360 | 360 | | | |
| Plan B | | 744 | 744 | 744 | | |
| Plan C | | | 1,170 | 1,170 | 1,170 | |
| **Total expense (RE ↓, reserve ↑)** | **360** | **1,104** | **2,274** | **1,914** | **1,170** | **0** |
| in SG&A (3/4) | 270 | 828 | 1,705.5 | 1,435.5 | 877.5 | 0 |
| in R&D (1/4) | 90 | 276 | 568.5 | 478.5 | 292.5 | 0 |
| Plan settled (reserve ↓) | | | A: 1,080 | B: 2,232 | C: 3,510 | |
| Share capital ↑ | | | 18 | 24 | 30 | |
| APIC ↑ | | | 1,062 | 2,208 | 3,480 | |
| **Reserve, year-end** | 360 | 1,464 | 2,658 | 2,340 | 0 | 0 |

The total expense over the six years, 6,822, equals the three plans' grant-date fair values ($1{,}080+2{,}232+3{,}510$). Every unit of it ends up in share capital and APIC, and the reserve returns to zero once the last plan settles.

### Tax Treatment

|            | Financial Reporting of Share-Based Compensation | Tax Treatment of Share-Based Compensation |
| ---------- | ----------------------------------------------- | ----------------------------------------- |
| **Timing** | Over the vesting period | At settlement |
| **Amount** | Grant-date fair value | Share price on the settlement date (RSUs); intrinsic value at exercise (options) |

The tax deduction is therefore usually different from the cumulative expense:

| Share price at settlement vs the grant date | Tax deduction vs cumulative expense | Name | Taxable income and tax expense |
| --- | --- | --- | --- |
| **Higher** | Higher | **Excess tax benefit** (tax windfall) | Reduced |
| **Lower** | Lower | **Tax shortfall** | Increased |

In the [option example](#example-employee-stock-options), the cumulative expense is \$51,500, but the tax deduction at exercise is only the intrinsic value, $(\$30-\$25)\times 1{,}030=\$5{,}150$: a tax shortfall.

**IFRS** and **US GAAP** treat tax windfalls and shortfalls differently on the financial statements:

|                                        | IFRS | US GAAP |
| -------------------------------------- | ---- | ------- |
| **Excess tax benefit (tax windfall)** | Gain recognized directly in shareholders' equity | Decrease in income tax expense on the income statement |
| **Tax shortfall**                      | Loss recognized directly in shareholders' equity | Increase in income tax expense on the income statement |

> [!Note]
>
> Under US GAAP, windfalls and shortfalls pass through income tax expense, so the **effective tax rate moves with the share price**. Strip them out when forecasting the tax rate.
>
> The IFRS row is the curriculum's simplification. Under IAS 12, only the part of the deduction **above** the cumulative expense goes to equity; a shortfall generally goes through profit or loss.

### Diluted Shares Outstanding

Share-based awards are potential shares, so diluted EPS counts them with the **treasury stock method**: the company is assumed to issue the shares and use the proceeds to buy back shares at the average market price.

$$\text{Diluted shares}=\text{Basic shares}+N-\frac{\text{Assumed proceeds}}{\bar{P}}$$

$$\text{Assumed proceeds}=N\times X+\overline{\text{Unrecognized compensation expense}}$$

* $N$: shares issued on exercise or settlement
* $X$: exercise price; **0 for RSUs**
* $\bar{P}$: average share price during the period
* $\overline{\text{Unrecognized compensation expense}}$: the expense still to be recognized over future vesting periods, averaged over the period (the average of the two period-end values, which are disclosed in the [notes](#disclosures-for-share-based-compensation)). The service the company has yet to receive counts as part of what it is paid for the shares, as if it were cash used to buy back shares.

#### Dilutive and Anti-Dilutive

The awards are included only if they are **dilutive**, i.e., if $N-\text{Assumed proceeds}/\bar{P}>0$, so that diluted EPS falls. Anti-dilutive awards are excluded (and disclosed).

* **In-the-money options** may be dilutive, if the share price exceeds the exercise price plus the unrecognized expense per option.
* **At-the-money and out-of-the-money options** are anti-dilutive: the assumed proceeds buy back more shares than are issued.
* **RSUs** are usually dilutive, because their exercise price is zero.
* If the company reports a **net loss**, all potential shares are anti-dilutive.

#### Example: Diluted Shares

JinSan has 200 million basic shares outstanding in 20X1 and reports positive net income. Its only share-based awards are:

* 1.8 million RSUs
* 10 million at-the-money employee stock options

All awards have a three-year vesting period. The share price on the grant date was \$60, and each option's fair value was \$15. The average share price during 20X1 is \$55. As of Dec. 31, 20X1, unrecognized share-based compensation expense is \$72 million for the RSUs and \$100 million for the options.

Calculate diluted shares outstanding, and identify any anti-dilutive securities.

**Options.** The exercise price (\$60) is above the average price (\$55), so they are out of the money and clearly anti-dilutive. By calculation:

$$\text{Assumed proceeds}=10\times \$60+\frac{0+100}{2}=\$650\text{ million}$$

$$10-\frac{650}{55}=10-11.82=-1.82\text{ million}<0$$

**RSUs.**

$$1.8-\frac{0+(0+72)/2}{\$55}=1.8-0.655=1.145\text{ million}>0$$

**Diluted shares outstanding** $=200+1.145=201.145$ million. The 10 million options are anti-dilutive and excluded.

### Financial Statement Modeling

#### Disclosures for Share-Based Compensation

IFRS requires disclosures so that users understand:

1. The **nature and extent** of share-based payment arrangements during the period
2. How the **fair value** of the equity instruments granted was measured
3. The **effect on net income** and on the financial position

US GAAP requires similar disclosures. They are typically made in the **notes to the financial statements**, and usually include the information an analyst needs for modeling:

* A **roll-forward of awards**: outstanding at the beginning of the year, granted, vested or exercised, forfeited, and outstanding at the end, with the weighted-average grant-date fair value or exercise price
* The **inputs to the option-pricing model** (volatility, expected term, dividend yield, risk-free rate), which drive the [grant-date fair value](#equity-settled-share-based-compensation)
* **Share-based compensation expense** for the year, often split by income-statement line
* **Unrecognized compensation expense** and the weighted-average period over which it will be recognized, which gives the future expense on awards already granted, and feeds the [treasury stock method](#diluted-shares-outstanding)

The **proxy statement** discloses the compensation of executive management and directors: salaries, bonuses, awards granted and the performance targets attached to them. It shows how well management's incentives are aligned with shareholders'.

#### Modeling the Income Statement

Share-based compensation is typically **not a separate line item** on the income statement. It is included in operating expenses (COGS, SG&A, R&D) according to each employee's role (see [Accounting Principles](#accounting-principles)). Forecasting those lines as a percentage of revenue therefore captures share-based compensation indirectly.

The common approach to modeling it explicitly is to forecast share-based compensation **as a percentage of revenue**, based on history, management guidance or industry peers. The other side of the entry goes to equity (the [share-based compensation reserve](#financial-reporting-for-share-based-compensation)).

For **early-stage companies**, share-based compensation tends to **decline as a percentage of revenue** as the company matures, so a constant percentage overstates it. Model it discretely instead, for example from the unrecognized expense on existing awards (see [Disclosures](#disclosures-for-share-based-compensation)) plus expected new grants.

#### Modeling Cash Flow and the Share Count

* **Cash flow statement**: Share-based compensation is non-cash, so it is **added back** to net income in CFO (indirect method). Option exercises bring in cash (CFF); RSU vesting usually involves no cash.
* **Awards outstanding**: Forecast the awards with a roll-forward, consistent with the expense forecast:
  1. **Grants of share-based awards, net of forfeitures**: from their historical growth in the notes
  2. **Settlements of awards** (RSUs vesting, options exercised): e.g., as a fixed portion of the awards outstanding

$$\text{Awards}_{\text{end}}=\text{Awards}_{\text{begin}}+\text{Grants (net of forfeitures)}-\text{Settlements}$$

* **Shares outstanding**: Settlements (RSUs vested, options exercised) become new shares.

$$\text{Shares}_{\text{end}}=\text{Shares}_{\text{begin}}+\text{Settlements}+\text{Issuances}-\text{Repurchases}$$

Diluted shares then add the awards still outstanding, using the treasury stock method (see [Diluted Shares Outstanding](#diluted-shares-outstanding)).

#### Valuation Considerations

1. **Multiples-based valuation.** Companies often report non-GAAP measures, such as adjusted EBITDA or adjusted EPS, that exclude share-based compensation. These inflate profits and make the company look cheaper. Analysts can use them, adjusting the denominator of the multiple, but must be **consistent and transparent**: compare the company and its peers on the same basis, GAAP with GAAP or the same non-GAAP measure throughout. Simply ignoring share-based compensation is flawed, because it is a real **transfer of value** from shareholders to employees, paid in shares instead of cash.

2. **DCF valuation.** Free cash flow adds back share-based compensation as a non-cash charge. Left there, the DCF values the company as if its employees worked for free, while the cost really arrives as dilution. The model must account for:
   1. **Dilution from awards outstanding but unvested**: use **diluted shares** ([treasury stock method](#diluted-shares-outstanding)) to compute value per share. A more conservative choice is basic shares plus all potentially dilutive securities.
   2. **Dilution from future awards**: the practical method is to **deduct share-based compensation from free cash flow**, i.e., treat it as a cash expense and **not** add it back to non-cash charges (NCC):

$$\text{FCFF}=\text{NI}+(\text{NCC}-\text{SBC})+\text{Int}(1-t)-\text{FCInv}-\text{WCInv}$$

where SBC is share-based compensation expense.

> [!Note]
>
> Deducting share-based compensation from free cash flow is not technically exact, but increasing the share count for expected future grants, or reducing the equity value, should give the same result. Use only one of these for future awards; counting them in both the cash flows and the share count double-counts the dilution.

## Post-Employment Compensation

Post-employment benefits are paid after employment ends, in exchange for service during employment. They include **cash benefits** (pensions) and **non-monetary benefits** (retiree health care, life insurance). Plans are classified as either **defined contribution (DC)** or **defined benefit (DB)**:

| | Defined Contribution (DC) | Defined Benefit (DB) |
| --- | --- | --- |
| **The sponsor promises** | A contribution today | A benefit at retirement |
| **Who bears investment risk** | The employee | The sponsor |
| **Obligation after contributing** | None | Pay the promised benefits, whatever the plan's assets earn |
| **Expense** | The contribution for the period | [Total periodic pension cost (TPPC)](#funded-status), from actuarial estimates |
| **Balance sheet** | Only contributions still unpaid | [Funded status](#funded-status): net pension liability or asset |

### Defined Contribution

In a DC plan, the sponsor makes agreed-upon contributions to the plan and has **no further obligation**. Employees usually choose how the money is invested, and bear the investment risk.

#### Financial Reporting for DC

* The expense is the contribution owed for the period. Like other compensation, it is reported by the [employee's function](#accounting-principles), with no discrete line item.
* Contributions owed but not yet paid at period-end are recognized as a **current liability**.

### Defined Benefit

DB plans are commitments to pay a defined amount after retirement, either as a **lump sum** or as **periodic pension payments** until death. The employer bears the investment risk: if plan assets earn less, the employer must contribute more.

A typical benefit formula is based on the final salary:

$$\text{Annual benefit}=\text{Final salary}\times N\times x\%$$

$$\text{Final salary}=\text{Current salary}\times(1+g)^{T}$$

where $N$ is the years of service, $x\%$ the accrual rate, $g$ the assumed salary growth and $T$ the years to retirement. The projected benefits are [discounted to the present](#pension-obligation), and the obligation builds up as the employee accumulates years of service.

* A **closed plan** no longer admits new employees; existing members continue to accrue benefits.
* A **frozen plan** stops accruing benefits for further service, so current members' future benefit payments are fixed.

#### Financial Reporting for DB Plans

> [!note]
>
> The new CFA curriculum requires less calculation for this part than before.

**Example used below.** At the start of the year, the PBO is 1,000 and plan assets are 900. The discount rate is 5% and, for US GAAP, the expected return on plan assets is 7%. During the year, current service cost is 60, a plan amendment adds past service cost of 20, there is an actuarial loss of 30, the employer contributes 70, plan assets earn an actual return of 60, and benefits of 40 are paid.

##### Pension Obligation

The pension obligation is a liability of the employer. As part of their total compensation, employees earn pension benefits with each year of service; the value of the benefits earned in the year is the **current service cost (CSC)**.

US GAAP measures the obligation as the present value of future benefits earned by employees for service to date, using the projected final salary: the **projected benefit obligation (PBO)**. (IFRS calls it the *defined benefit obligation*.)

The PBO relies on **actuarial assumptions**: salary growth, retirement dates, employee turnover and mortality. The **discount rate** is the yield on high-quality (investment-grade) corporate bonds, or on government bonds where there is no deep market in corporate bonds.

$$\begin{aligned}\text{PBO}_{\text{end}}=\ &\text{PBO}_{\text{beg}}+\text{Interest cost}+\text{CSC}+\text{PSC}\\&\pm\text{Actuarial losses (gains)}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-pbo-chart"
  src="/charts/pension-db-accounting.html?view=pbo"
  title="PBO roll-forward: interest cost, service costs, actuarial loss and benefits paid"
  loading="lazy"
></iframe>

| Term | What it is | Example |
| --- | --- | ---: |
| **Interest cost** | $\text{PBO}_{\text{beg}}\times$ discount rate: the obligation is a year closer to payment, so the discounting unwinds | +50 |
| **Current service cost (CSC)** | The present value of benefits earned by employees' service this year | +60 |
| **Past service cost (PSC)** | The change in the PBO from a plan amendment that changes benefits for service **already given**; negative if benefits are cut | +20 |
| **Actuarial losses (gains)** | Changes in actuarial assumptions, and experience differing from them. A **lower discount rate**, higher salary growth or longer life expectancy **increases** the PBO (a loss) | +30 |
| **Benefits paid** | Payments to retirees, which settle part of the obligation (paid from [plan assets](#plan-assets)) | −40 |

How each term reaches profit or loss differs between IFRS and US GAAP; see [Financial Treatments](#financial-treatments).

##### Plan Assets

The sponsoring company is responsible for making contributions to the plan, either to meet regulatory minimum funding levels or on a discretionary basis, to ensure that future benefits can be paid.

Plan assets are the **property of the plan, not of the sponsoring company**, so once contributed they cannot be withdrawn. The plan is a separate legal entity that prepares its own financial statements; its assets do not appear on the company's balance sheet (only the net [funded status](#funded-status) does).

$$\begin{aligned}\text{Plan assets}_{\text{end}}=\ &\text{Plan assets}_{\text{beg}}+\text{Employer contributions}\\&+\text{Actual return}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-assets-chart"
  src="/charts/pension-db-accounting.html?view=assets"
  title="Plan assets roll-forward: contributions, actual return and benefits paid"
  loading="lazy"
></iframe>

| Term | What it is | Example |
| --- | --- | ---: |
| **Employer contributions** | Cash paid into the plan by the company | +70 |
| **Actual return on plan assets** | Interest, dividends and realized and unrealized gains on the plan's investments; can be negative | +60 |
| **Benefits paid** | Paid to retirees; the same amount that reduces the PBO | −40 |

#### Funded Status

$$\text{Funded status}=\text{Fair value of plan assets}-\text{PBO}$$

* An **underfunded** plan (deficit) is reported as a net pension liability, usually in other non-current liabilities.
* An **overfunded** plan (surplus) is reported as a net pension asset, usually in other non-current assets. Under IFRS, the asset is capped by an **asset ceiling**: the present value of the economic benefits the company can get from the surplus, through refunds or lower future contributions. Plan assets belong to the plan, so a surplus is worth only what the company can recover.

> [!note]
>
> Different plans cannot be netted: a surplus in one plan does not offset a deficit in another.

In the [example](#financial-reporting-for-db-plans), the deficit widens from −100 ($900-1{,}000$) to −130 ($990-1{,}120$):

<iframe
  class="fx-concept-chart pen-status-chart"
  src="/charts/pension-db-accounting.html?view=status"
  title="Funded status bridge from the beginning to the end of the year, and TPPC"
  loading="lazy"
></iframe>

Benefits paid reduce plan assets and the PBO by the same amount, so they do not change the funded status. Everything else either comes from the company's cash (contributions) or is the cost of the pension for the year, the **total periodic pension cost (TPPC)**:

$$\text{TPPC}=\text{Employer contributions}-\Delta\text{Funded status}=70-(-30)=100$$

$$\begin{aligned}\text{TPPC}&=\text{CSC}+\text{PSC}+\text{Interest cost}\pm\text{Actuarial losses (gains)}-\text{Actual return}\\&=60+20+50+30-60=100\end{aligned}$$

On the balance sheet, the asset side changes by $\Delta$Cash and $\Delta$Funded status, and the equity side by $\Delta$RE and $\Delta$AOCI (before tax):

$$\underbrace{\Delta\text{Cash}}_{-70}+\underbrace{\Delta\text{Funded status}}_{-30}=-\text{TPPC}=\underbrace{\Delta\text{RE}}_{\text{via NI}}+\underbrace{\Delta\text{AOCI}}_{\text{via OCI}}$$

TPPC is the **same under IFRS and US GAAP**. The standards differ only in how they split it between profit or loss and OCI:

$$\text{TPPC}=\text{Pension cost in P\&L}+\text{Pension cost in OCI}$$

#### Financial Treatments

**Under IFRS**, TPPC has 3 components, 2 recognized in P&L and 1 in OCI:

1. **Service cost**: current service cost and past service cost, both recognized as an operating expense in P&L, classified by employee function. Example: $60+20=80$.
2. **Net interest expense (income)**: the discount rate times the [funded status](#funded-status) at the start of the year, recognized in P&L. A deficit gives an expense; a surplus gives income. Example: $5\%\times 100=5$, which is interest cost 50 less interest income on plan assets $5\%\times 900=45$.
3. **Remeasurements**, recognized in OCI:
   1. The difference between the actual return on plan assets and the interest income assumed in the net interest calculation. Example: $60-45=15$ gain.
   2. Actuarial gains and losses. Example: 30 loss.

   Net remeasurement loss: $30-15=15$.

> [!note]
>
> Under IFRS, remeasurements in OCI are **never reclassified** to P&L. They may be transferred directly to retained earnings within equity.

**Under US GAAP**, the five items are treated as follows:

1. **Current service cost**: in P&L, as an operating expense. Example: 60.
2. **Past service cost**: in OCI, then **amortized** into P&L over the employees' average remaining service period. Example: 20 in OCI, of which 2 is amortized this year.
3. **Interest cost less the expected return on plan assets**: in P&L. The expected return uses the company's own **expected rate of return**, not the discount rate. Example: $50-7\%\times 900=50-63=-13$.
4. **The difference between the actual and expected return**: in OCI, as part of the actuarial gains and losses. Example: $60-63=-3$, a loss.
5. **Actuarial gains and losses**: in OCI, and amortized into P&L only under the **corridor approach**: the net cumulative gain or loss in AOCI that exceeds 10% of the greater of the PBO and plan assets (at the start of the year) is amortized over the employees' average remaining service period. Companies may also recognize them faster. Example: 30 loss, and nothing amortized this year since AOCI started at 0.

US GAAP pension expense in P&L: $60+50-63+2=49$. OCI: $(20-2)+3+30=51$. Under US GAAP, only the service cost is reported in operating income; the other components are presented outside it.

<iframe
  class="fx-concept-chart pen-tppc-chart"
  src="/charts/pension-db-accounting.html?view=tppc"
  title="TPPC under IFRS and US GAAP: what goes to P&L and what goes to OCI"
  loading="lazy"
></iframe>

> [!Important]
>
> The same pension cost of 100 shows up as 85 in IFRS P&L but only 49 in US GAAP P&L. US GAAP's **expected return** (7%, chosen by management, above the 5% discount rate) and its **deferral** of past service cost and actuarial losses both lower reported pension expense. When comparing companies, look at the TPPC and the assumptions, not only the P&L line.

### Other Post-Employment Benefits

Other post-employment benefits, such as **retiree health care and life insurance**, are accounted for much like [DB pension plans](#financial-reporting-for-db-plans): the employer's obligation is estimated with actuarial assumptions (including the expected trend in health care costs).

Unlike pensions, companies are generally **not required by regulation to pre-fund** these plans, so many have few or no plan assets, and the [funded status](#funded-status) is close to the full obligation.

### Financial Modelling Consideration
