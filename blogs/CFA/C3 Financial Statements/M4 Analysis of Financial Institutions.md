# Analysis of Financial Institutions

## Classification

Financial institutions take in money from depositors, policyholders or investors and put it to work in financial assets. The main types are:

* **Banks**: take **deposits** and make **loans**, earning the spread between the two
* **Insurance companies**: collect **premiums** and pay **claims**
  * **Life and health**: long-term policies (life insurance, annuities, health cover)
  * **Property and casualty (P&C)**: mostly short-term policies (property damage, liability)
* **Other**: investment banks, broker-dealers, asset managers, credit card companies

### Feature: Systemic Importance

A distinctive feature of financial institutions is their **systemic importance**: the failure of one can threaten the whole financial system and the wider economy.

Banks are the most likely to be systemically important, because they create **linkages across all types of entities**: other banks, companies, households and governments, through loans, deposits, payments and interbank exposures.

**Financial contagion** is how a problem at one institution spreads to others. When a bank fails, its counterparties take losses on what they lent it, depositors at other banks may lose confidence and withdraw funds, and banks under stress sell assets at fire-sale prices, pushing down the value of every other bank's holdings. The largest and most connected banks are identified as **global systemically important banks (G-SIBs)** and must hold extra capital.

### Heavily Regulated

Because the cost of a failure falls on the whole system, financial institutions are **heavily regulated**. International bodies set the standards that national regulators apply:

| Body | Role |
| --- | --- |
| **Basel Committee on Banking Supervision** | Sets the global standards for bank capital, liquidity and funding (**Basel III**) |
| **Financial Stability Board (FSB)** | Monitors the global financial system and coordinates national regulators; identifies G-SIBs |
| **International Association of Deposit Insurers (IADI)** | Sets standards for deposit insurance systems |
| **International Association of Insurance Supervisors (IAIS)** | Sets standards for insurance supervision |
| **International Organization of Securities Commissions (IOSCO)** | Sets standards for securities markets regulation |

### Assets and Liabilities

Financial institutions' balance sheets look very different from those of other companies:

* **Assets** are predominantly **financial assets**, such as **loans and securities**, rather than inventory and PP&E. Many are measured at **fair value**, or at amortized cost close to it, so the balance sheet is closer to market value, and more exposed to credit, market and liquidity risk.
* **Liabilities** of most banks are made up primarily of **deposits**, which customers can withdraw at short notice, while the loans they fund are long-term. This **maturity mismatch** is the core risk of banking.
* **Leverage** is high: equity is typically a small slice of total assets, so a small loss on assets can wipe out a large part of capital. This is why capital and liquidity are at the center of the analysis.

## Analysis of Banks

### Capital Adequacy

The Basel Committee developed the international regulatory framework for banks known as **Basel III**, after the 2008 financial crisis. Its aims are to:

* Improve banks' ability to **absorb shocks** arising from financial and economic stress, whatever the source
* Improve **risk management** and governance
* Strengthen banks' **transparency and disclosure**

It sets three kinds of requirement:

1. **Minimum capital requirements**: enough capital, relative to the riskiness of the assets, to absorb losses
2. **Minimum liquidity**: enough liquid assets to survive a short period of stress (the [LCR](#liquidity-position))
3. **Stable funding**: enough long-term funding for the bank's longer-term assets (the [NSFR](#liquidity-position))

#### CAMELS Approach

**CAMELS** is a widely used framework for analyzing a bank, originally developed by US regulators. It covers six components:

| Letter | Component | Key question |
| --- | --- | --- |
| **C** | Capital adequacy | Is there enough capital to absorb losses? |
| **A** | Asset quality | How risky are the loans and securities, and are losses provided for? |
| **M** | Management capabilities | Are risks identified, controlled and reported well? |
| **E** | Earnings sufficiency | Are earnings high enough, and sustainable? |
| **L** | Liquidity position | Can the bank meet its obligations under stress? |
| **S** | Sensitivity to market risk | How much do changes in rates and prices affect earnings and capital? |

##### Capital Adequacy

Capital adequacy is described in terms of the **proportion of the bank's assets funded with capital**. Because assets differ in risk, capital is compared with **risk-weighted assets (RWA)**, not total assets:

$$\text{Capital adequacy ratio}=\frac{\text{Capital}}{\text{Risk-weighted assets}}$$

**Risk-weighted assets.** Each asset (and off-balance-sheet exposure) is multiplied by a **risk weight** set by the regulator, or estimated by the bank's own approved models:

$$\text{RWA}=\sum_i \text{Exposure}_i\times\text{Risk weight}_i$$

Safer assets get lower weights: cash and highly rated government bonds have a weight of **0%**, while corporate loans are typically **100%**, and riskier exposures can be weighted above 100%. RWA also include charges for **market risk** and **operational risk**.

**Tiers of capital (Basel III).** Capital is split by how well it absorbs losses:

| Tier | What it includes | Absorbs losses |
| --- | --- | --- |
| **Common Equity Tier 1 (CET1)** | Common shares, retained earnings and AOCI, **less deductions** such as goodwill, other intangibles and deferred tax assets | First, while the bank is a **going concern** |
| **Additional Tier 1 (AT1)** | Instruments with **no maturity** and **discretionary, non-cumulative** payments, e.g., perpetual non-cumulative preferred shares and contingent convertible bonds | Also while a going concern, after CET1 |
| **Tier 1 = CET1 + AT1** | | |
| **Tier 2** | **Subordinated debt** with an original maturity of at least five years, and certain loan-loss allowances | Only when the bank fails (**gone concern**), before depositors and senior creditors |
| **Total capital = Tier 1 + Tier 2** | | |

**Minimum requirements**, as a percentage of RWA:

| Ratio | Minimum |
| --- | ---: |
| CET1 / RWA | ≥ 4.5% |
| Tier 1 / RWA | ≥ 6% |
| Total capital / RWA | ≥ 8% |

On top of the minimums, Basel III adds a **capital conservation buffer** of 2.5% of CET1 (so 7% CET1 in practice), a **countercyclical buffer** of up to 2.5% when credit grows too fast, and a surcharge for **G-SIBs**. A non-risk-based **leverage ratio** (Tier 1 capital / total exposure ≥ 3%) backs up the risk weights, which banks' own models could understate.

**Example (illustrative risk weights).**

| Asset | Exposure | Risk weight | RWA |
| --- | ---: | ---: | ---: |
| Cash | 100 | 0% | 0 |
| Government bonds | 300 | 0% | 0 |
| Residential mortgages | 400 | 35% | 140 |
| Corporate loans | 200 | 100% | 200 |
| **Total** | **1,000** | | **340** |

With CET1 of 25, AT1 of 5 and Tier 2 of 8:

* CET1 ratio $=25/340=7.4\%$ (minimum 4.5%, or 7% with the conservation buffer)
* Tier 1 ratio $=(25+5)/340=8.8\%$ (minimum 6%)
* Total capital ratio $=(25+5+8)/340=11.2\%$ (minimum 8%)

Total assets are 1,000, but only 340 count toward the requirement. Shifting the same 1,000 from mortgages and government bonds into corporate loans would raise RWA, and the capital needed, without any change in total assets.

##### Asset Quality

**Asset quality** pertains to the amount of **existing and potential credit risk** in the bank's assets. The analyst looks at:

1. **The mix of assets**: the proportion of highly liquid assets (cash, government securities) versus loans and riskier securities, and how the securities are measured (amortized cost, FVOCI, FVPL; and Level 1, 2 or 3 of the fair value hierarchy)
2. **The creditworthiness of the loans** and the **adequacy of the allowance** for expected losses on them

**Loans are measured at amortized cost**, net of an allowance:

* The **allowance for loan losses** is a **B/S** contra-asset account for expected credit losses (impairment).
* The **provision for loan losses** is an **I/S** expense that **increases** the allowance.
* **Actual loan losses** (charge-offs, net of recoveries) **reduce** the allowance.

$$\text{Allowance}_{\text{end}}=\text{Allowance}_{\text{beg}}+\text{Provision}-\text{Net charge-offs}$$

Because the provision is a management estimate, it is a lever on earnings: under-providing raises profit now and leaves losses for later. Three ratios test the allowance:

| Ratio | What it shows |
| --- | --- |
| **Allowance / non-performing loans** | How much of the loans already in trouble is covered (the coverage ratio) |
| **Allowance / net charge-offs** | How many years of actual losses the allowance would absorb |
| **Provision / net charge-offs** | Whether the bank is adding to the allowance as fast as losses use it up: below 1 means the allowance is being drawn down |

A falling ratio, or one well below peers, suggests the bank may be **under-reserving**.

##### Management Capabilities

**Effective management** shows in sound **internal controls**, **transparent** communication by management, high **financial reporting quality**, and the overall effectiveness of risk management and governance. It is hard to measure directly; signs of weakness include restatements, regulatory penalties and frequent changes in key estimates.

##### Earnings Sufficiency

**High-quality earnings** are **sustainable** rather than non-recurring, and high enough to cover the bank's cost of capital and build capital. Bank income has three main sources:

1. **Net interest income**: interest earned on loans and securities less interest paid on deposits and borrowings
2. **Service income**: fees and commissions (accounts, payments, asset management)
3. **Trading income**: gains on securities and derivatives held for trading

A greater proportion of **net interest income and service income** is typically **more sustainable** than trading income, which is volatile and hard to forecast. **Lower volatility** within net interest income is also desirable.

Earnings quality also depends on the **estimates** behind them: the loan-loss provision, and the fair values of Level 3 assets, which rely on the bank's own models.

##### Liquidity Position

The CFA curriculum focuses on the two Basel III liquidity ratios:

$$\text{LCR}=\frac{\text{High-quality liquid assets}}{\text{Net cash outflows over 30 days under stress}}\ge100\%$$

$$\text{NSFR}=\frac{\text{Available stable funding}}{\text{Required stable funding}}\ge100\%$$

* The **liquidity coverage ratio (LCR)** is **short-term**: can the bank survive a 30-day stress scenario on the liquid assets it holds?
* The **net stable funding ratio (NSFR)** is **structural**, over one year: is the bank's **asset base** funded by stable **funding sources** (equity, long-term debt, stable retail deposits)? Illiquid assets such as long-term loans require more stable funding.

Analysts also look at:

* **Concentration of funding**: reliance on a few large depositors or on short-term wholesale funding, which can disappear quickly
* **Contractual maturity mismatch**: the gap between when assets mature and when liabilities fall due

##### Sensitivity to Market Risk

**Market risk** is the risk of losses from changes in interest rates, exchange rates, equity and commodity prices. Analysts look at:

* **Value at risk (VaR)** of the trading book, and **trading revenue per unit of VaR**
* **Mismatches** in the maturity, **repricing frequency** and **reference rates** of assets and liabilities, which drive how net interest income and the value of equity respond to changes in interest rates
* Currency exposures

## Analysis of Insurance Companies

Insurers collect premiums up front and pay claims later. In the meantime they invest the premiums (the **float**), so they earn both an **underwriting** result and an **investment** result.

**Property and casualty (P&C)** insurers cover property damage and liability. Their business is:

* **Cyclical**: the **underwriting cycle**. Strong profits attract competition, premiums fall, and losses rise until capacity leaves the market and premiums recover.
* Dependent on **loss reserves**: claims are reported and settled after the premium is earned, so the insurer must estimate future claims. The **management of loss reserves** is the main source of discretion: under-reserving raises current profit, and later adjustments to past reserves (**reserve development**) reveal how good the estimates were.

**Underwriting ratios:**

| Ratio | Formula | What it shows |
| --- | --- | --- |
| **Loss and loss adjustment expense ratio** | (Loss expense + loss adjustment expense) / net premiums **earned** | Success in estimating the risks insured; lower is better |
| **Underwriting expense ratio** | Underwriting expense / net premiums **written** | Efficiency of the money spent to obtain new premiums; lower is better |
| **Combined ratio** | Loss and LAE ratio + underwriting expense ratio | Overall efficiency of the underwriting operation; **below 100%** means an underwriting profit |
| **Dividends to policyholders (shareholders) ratio** | Dividends to policyholders (shareholders) / net premiums earned | The share of premiums returned as dividends |
| **Combined ratio after dividends** | Combined ratio **+** dividends to policyholders ratio | Underwriting efficiency after the cash returned to policyholders |

**Example.** A P&C insurer has net premiums written of 1,000 and net premiums earned of 980. Losses and loss adjustment expenses are 640, underwriting expenses are 300, and dividends to policyholders are 20.

* Loss and LAE ratio $=640/980=65.3\%$
* Underwriting expense ratio $=300/1{,}000=30.0\%$
* Combined ratio $=65.3\%+30.0\%=95.3\%$: an underwriting profit
* Dividends to policyholders ratio $=20/980=2.0\%$
* Combined ratio after dividends $=95.3\%+2.0\%=97.3\%$

> [!Note]
>
> A combined ratio **above 100%** is not necessarily a loss: the insurer can still be profitable overall if its **investment income** on the float covers the underwriting loss.

**Investments.** P&C insurers invest the collected premiums **conservatively**, mostly in high-quality bonds, because claims can arrive at short notice and must be paid. Analysts look at the mix of investments, their liquidity, and the investment yield.

**Capital.** There are **no global capital adequacy requirements** for insurers, unlike Basel III for banks. Requirements are set nationally, e.g., risk-based capital in the US and **Solvency II** in the EU, so capital ratios are hard to compare across countries.
