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
@media (max-width: 587px) {
    .fx-concept-chart.comp-timeline-chart { height: 710px; }
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
| **Termination benefits** | Paid because employment ends, not in exchange for service | Severance pay, outplacement support |
| **Share-based compensation** | Paid in the employer's shares, or in cash based on the share price | Restricted stock, stock options, stock appreciation rights |
| **Post-employment benefits** | Paid after employment ends, in exchange for service during employment | Pensions, retiree medical benefits |

## Terminology

* **Grant date**: The employer and the employee agree on the terms of the award. For share-based compensation, the award's fair value is measured on this date.
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
  * Equity-settled (restricted stock, stock options): **equity** (paid-in capital). No liability arises, because the employer owes shares, not cash.
* **Expense or asset**: The cost follows the employee's function. Pay for staff who produce inventory or build PP&E is **capitalized** into that asset, and reaches the income statement later as COGS or depreciation. Pay for management and administrative staff is **expensed** directly in SG&A.
* **At settlement**: Shares are issued, or the liability is paid in cash. For equity-settled awards, nothing more is expensed after vesting, even if the options are never exercised.

## Accounting Principles

| Category | Short-Term Benefits | Equity-Settled Share-Based Compensation | Post-Employment Benefits |
| --- | --- | --- | --- |
| **Typical vesting period** | Days or weeks | Years | Years or decades |
| **Form of payment** | Cash | Shares | Cash |
| **Amount recognized over the vesting period** | Undiscounted salary, wage, etc. | Fair value, measured on the grant date | Present value of estimated future benefits |

Reading the table:

* **The longer the wait, the more the amount relies on estimates.** Short-term benefits are paid within days or weeks, so they are recognized at the **undiscounted** amount owed. Post-employment benefits are paid decades later, so they are measured at the **present value** of benefits that depend on assumptions about salaries, lifetimes and discount rates.
* **Equity-settled awards are fixed at the grant date.** Their fair value is measured once, on the grant date, and is not remeasured for later changes in the share price. That amount is spread over the vesting period.

Regardless of the form of compensation, most companies aggregate compensation expense and report it on the income statement by the **employee's function** (e.g., in COGS or SG&A), rather than as a separate line.

> [!Note]
>
> The exception is **termination benefits**. They are often incurred as part of a corporate **restructuring** and are reported within restructuring costs. Analysts often treat restructuring costs as non-recurring, so check whether they recur before excluding them.
