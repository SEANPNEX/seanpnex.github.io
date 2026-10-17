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

## Share-Based Compensation

Share-based compensation pays employees in the employer's shares, or in cash linked to the share price. It is common for senior management, and for early-stage companies that have little cash to spare.

### Advantages and Disadvantages

Advantages:

1. **Aligns interests.** Employees who own shares gain and lose with shareholders, which reduces principal–agent conflicts.
2. **Improves retention.** A multi-year vesting period gives employees a reason to stay, because unvested awards are forfeited when they leave.
3. **Preserves liquidity.** Equity-settled awards require no cash outflow, which matters most for start-ups and high-growth companies.

Disadvantages:

1. **Limited link to the employee's own effort.** Most employees have little influence over the share price, which also moves with the market, so the award may not change how they act.
2. **Distorted risk-taking.** It can push managers either way:
   * Options pay off only on the upside, so they can encourage **excessive** risk-taking.
   * A large holding of shares ties up the manager's own wealth in the company, so it can make them **too risk-averse**.
3. **Concentrated risk for employees.** Employees already depend on the company for their salary. Share-based pay makes their wealth fall with the share price as well, and an underperforming share may leave them worse off than equivalent cash pay.
4. **Dilution.** Issuing new shares on vesting or exercise reduces existing shareholders' ownership and EPS.

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
> * A **non-market condition** is not part of the fair value. Instead, the expense is based on the number of awards **expected to vest**, re-estimated each period. If the target is missed, the expense recognized so far is reversed.
>
> The same true-up applies to a service condition: awards forfeited by employees who leave before vesting reverse their expense.

### Equity-Settled Share-Based Compensation

Equity-settled awards are paid in shares. Their fair value is measured on the **grant date** and spread over the vesting period (see the timeline above). It is not remeasured for later changes in the share price.

| | Restricted Stock | Restricted Stock Units (RSUs) | Employee Stock Options (ESOs) |
| --- | --- | --- | --- |
| **What the employee gets** | Shares issued at grant, which cannot be sold or transferred until they vest | A promise of shares, delivered at settlement | The right to buy shares at a fixed exercise price |
| **Voting and dividends before vesting** | Yes, usually | No (sometimes dividend equivalents) | No |
| **Value to the employee** | Full share price | Full share price | Only the gain above the exercise price |
| **Grant-date fair value** | Share price at grant | Share price at grant (less expected dividends the holder does not receive) | Option-pricing model (e.g., Black–Scholes–Merton, binomial) |

* **Performance shares (PSUs)** are RSUs whose number of shares depends on a performance condition.
* **Employee stock options** are typically granted **at the money**: the exercise price equals the share price on the grant date. The option has no intrinsic value at grant, so it is worth something to the employee only if the share price rises. Its fair value is time value alone, which is why it must be estimated with an option-pricing model rather than read from the share price.

> [!Important]
>
> An option's grant-date fair value, and therefore the expense, depends on management's inputs: expected volatility, expected term, dividend yield and the risk-free rate. A higher volatility, longer term or higher risk-free rate raises the fair value; a higher dividend yield lowers it. Check whether the assumptions are reasonable: assuming a lower volatility or a shorter expected term reduces compensation expense.
