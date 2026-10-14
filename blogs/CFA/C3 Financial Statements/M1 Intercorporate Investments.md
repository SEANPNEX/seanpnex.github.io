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
.fx-concept-chart.fsa-tree-chart { height: 455px; }
.fx-concept-chart.fsa-own-chart { height: 355px; }
.fx-concept-chart.fsa-classify-chart { height: 625px; }
.fx-concept-chart.fsa-measure-chart { height: 670px; }
.fx-concept-chart.fsa-timeline-chart { height: 475px; }
.fx-concept-chart.fsa-impair-chart { height: 455px; }
.fx-concept-chart.fsa-equity-ex-chart { height: 375px; }
/* Phones: the two-column charts stack. */
@media (max-width: 587px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.fsa-tree-chart { height: 560px; }
    .fx-concept-chart.fsa-own-chart { height: 495px; }
    .fx-concept-chart.fsa-classify-chart { height: 1000px; }
    .fx-concept-chart.fsa-measure-chart { height: 760px; }
    .fx-concept-chart.fsa-timeline-chart { height: 885px; }
    .fx-concept-chart.fsa-impair-chart { height: 730px; }
    .fx-concept-chart.fsa-equity-ex-chart { height: 435px; }
}
</style>

# Intercorporate Investment

## Basic Corporate Investment Categories

### Catagories

The following graph describes the catagories of investment in terms of accounting.

<iframe
  class="fx-concept-chart fsa-tree-chart"
  src="/charts/intercorporate-investment-tree.html"
  title="Intercorporate investment categories (tree)"
  loading="lazy"
></iframe>

#### Long-Term Equity

As noted above, there are 4 catgories of Long-term equity investment, depending on power of control:

* **Investments in financial assets**: No significant control or influence 
* **Investments in Associates**: Exert significant influence 
* **Joint Venture**: Control is shared
* **Business Combinations**: Obtains a controlling interst.

**Percentage of ownership** is typically used to determine the appropriate category:

<iframe
  class="fx-concept-chart fsa-own-chart"
  src="/charts/intercorporate-ownership-control.html"
  title="Ownership percentage and power of control"
  loading="lazy"
></iframe>


> [!Note]
>
> The distinction between the categories depends on the actual level of control.



|                            | Financial Assets         | Associates            | Joint Ventures | Business Combination |
| -------------------------- | ------------------------ | --------------------- | -------------- | -------------------- |
| **Degree of Influence**    | no significant influence | significant influence | shared control | control              |
| **Percentage of Interest** | < 20%                    | 20% - 50%             | varies         | > 50%                |
| **Term of Investee**       | -                        | associate             | -              | subsidiary           |
| **Accounting Treatment**   | AMC, FVOCI, FVPL         | Equity Method         | Equity Method  | Acquisition Method   |

> 
>


> [!Important]
>
> In acquisition case, note if the companies have common controllers, i.e, 2 or more entities controlled by one common controller.



## Investment in Financial Assets

### Classification of Financial Assets

<iframe
  class="fx-concept-chart fsa-classify-chart"
  src="/charts/financial-asset-classification.html"
  title="Financial asset classification decision flow"
  loading="lazy"
></iframe>

> [!note]
>
> Financial Assets is a subcategory under Financial Instruments. It also includes Financial Liabilities, which is not covered in CFA curriculum.

Now the categorization of Financial Assets are based on **Objective** cash flow of the asset, and the **Subjective** purpose of investment. Therefore, 2 criteria in the classificaiton:

1. Cash flow characteristics test: Whether the contractual cash flows are solely payments of principal and interest on principal.
2. Business Model test: How an entity mananges its financial assets in order to generate cash flows, by collecting contractual cash flows, selling the assets, or mixed.

If Financial Assets meet the following 2 criteria are generally measured at **Amortized Cost (AMC)**:

1. The contractual cash flows are solely payments of principal and interest on principal 
2. The financial assets are being held to collect contractual cash flows

If Financial Assets meets the first criteria, but may be sold in a "hold-to-collect + sell" mode. It may be measured at **Fair Value Through Other Comprehensive Income (FVOCI)**

All oother remaining assets are classified into **Fair Value Profit or Loss (FVPL)**

> [!note]
>
> Some examples:
>
> * **Account Receivable** is AMC
> * **Mortgage** in banks is AMC
> * **Other Debt Financing** is FVOCI
> * **Account Receivable Financing** is FVOCI
> * **Derivatives** are FVPL (except for hedging instruments)
> * **Embedded derivatives** like convertible bond, the asset as a whole is FVPL

#### Designated FVPL

Only debt investment can be classified as *designated* FVPL (as equity investment mostly already fell into FVPL). 

The purpose is to avoid accounting mismatch. In some cases, there are liabilities (in B/S) noted as FVPL. There is an corresponding financial investment in some bond to match the duration of the liability. Then this investment should be **Designated FVPL**. 

#### Designated FVOCI

This category is to manage non-tradable financial assets investment in equity. In this case only dividend income is recognized as profit or loss. If terminated, the past recognition only transfer to retained earning.

### Measurement of Financial Assets

All financial assets are measured at **fair value** when initially acquired, which generally equals the cost on the day of acquisition.

Let's explain by case. At $T=0$, a company buys a bond at **951.96**: 3-year, 10% coupon rate, par = 1000.

Assume the fair value of the bond is 980 at $T=1$, 999 at $T=2$, and 1000 at $T=3$.

First get the effective `rate` of the investment from the calculator, with the three known inputs: **12%**.

<iframe
  class="fx-concept-chart fsa-measure-chart"
  src="/charts/financial-asset-measurement-bs.html"
  title="Financial asset measurement balance-sheet paths (AMC, FVOCI, FVPL)"
  loading="lazy"
></iframe>

<iframe
  class="fx-concept-chart fsa-timeline-chart"
  src="/charts/financial-asset-measurement-timeline.html"
  title="Financial asset measurement three-story timeline (AMC, FVOCI, FVPL)"
  loading="lazy"
></iframe>

**AMC.** Amortized cost at $T=0$ is 951.96. In the calculator, set $n=2$ to get carrying amount at $T=1$: 966.2. At $T=2$, simply discount 1100 once to get 982.14. Later fair value does not influence AMC accounting.

Balance-sheet steps:

- $T=0$: cash $-951.96$, AMC $+951.96$
- $T=1$: cash $+100$; RE $+114.24$ ($=951.96 \times 12\%$); AMC $+14.24$ → 966.2
- $T=2$: cash $+100$; RE $+115.94$ ($=966.2 \times 12\%$); AMC $+15.94$ → 982.14
- $T=3$: cash $+1000+100$; RE $+117.86$ ($=982.14 \times 12\%$); AMC $+17.86-1000$

**FVOCI.** Same interest in RE as AMC; fair-value moves go to AOCI.

- $T=0$: cash $-951.96$, FVOCI $+951.96$
- $T=1$: cash $+100$; FVOCI $+28.04$ (to FV 980); RE $+114.24$ as in AMC; AOCI $+13.8$ to balance
- $T=2$: cash $+100$; FVOCI $+19$ (to FV 999); RE $+100+15.94$; AOCI $+3.06$
- $T=3$: cash $+1000+100$; FVOCI $+1$ then clear $-1000$; RE $+17.86+100$; AOCI $-16.86$ (cumulative AOCI nets to 0)

**FVPL.** Coupon and fair-value change both go through RE.

- $T=0$: cash $-951.96$, FVPL $+951.96$
- $T=1$: cash $+100$; FVPL $+28.04$ (same FV path as FVOCI); RE $+100+28.04$
- $T=2$: cash $+100$; FVPL $+19$; RE $+119$
- $T=3$: cash $+1000+100$; FVPL $+1-1000$; RE $+100+1$ (coupon + FV bump)

**Total I/S.** No matter how it is classified, total income over the life is the same:

$$114.24 + 115.94 + 117.86 = 128.04 + 119 + 101 = 348.04$$

That 348.04 is the economic profit implied at purchase: time value of money $300$ (coupons) + price discount $38.04$ ($=1000-951.96$).



####  Impairment of Financial Assets

The new standard moves the recognition criteria from an "incurred loss" model to an **"expected loss" model.**

> [!note]
>
> The **expected loss model** name only is everything needed to know for CFA exam. Following content will not be tested.

In the **Financial Instruments**, for Financial Liabilities, only Financial Guarantee Commitments and Loan Agreements can be impaired. For Financial Assets, FVPL will never be impaired because the whole mark-to-market move already hits P&L. There’s nothing left for a separate impairment test.

The measurement of AMC impairment is same as how inventory impairment is done.

<iframe
  class="fx-concept-chart fsa-impair-chart"
  src="/charts/financial-asset-impairment-bs.html"
  title="AMC vs FVOCI impairment: B/S and I/S two stories"
  loading="lazy"
></iframe>


**How impairment is measured (chart example).**

Expected credit loss (ECL) is the impairment amount. Only **AMC** and **debt FVOCI** run this test — FVPL does not.

**AMC.** Carrying amount is amortized cost. ECL reduces the asset (allowance / direct write-down) and hits I/S in one step — same shape as inventory impairment.

- Carrying amount $960$, ECL $15$
- Asset: $960 - 15$
- RE (I/S): $-15$

**FVOCI (debt).** The asset is always reported at **fair value**. ECL still goes to I/S, but it does **not** change carrying amount again — it splits the total fair-value move into two stories:

1. **Credit loss → I/S / RE** (impairment)
2. **Other FV move → AOCI** (rates, liquidity, etc.)

In the chart: FV falls $980 \to 960$ (total $-20$), ECL $=15$.

- Asset stays at FV $960$
- RE (I/S): $-15$
- AOCI: $-20 + 15 = -5$

So AMC and debt FVOCI put the **same $15$** through earnings; FVOCI also parks the leftover $-5$ in OCI because the balance sheet already shows full fair value.

### Reclassification of Financial Assets

Equity Investment are not allowed to reclassification. It is only permitted if in the business model for finnancial assets has changed in a way that significantly affects operations.

> [!note]
>
> The reclassification date is the beginning of next accounting cycle. Past accounting cannot be changed. Future change start at classification date.

## Investments in Associates

### Equity Method of Accounting

#### Basic Principles

Remember when a company holds 20% to 50% of the voting rights of an invested, *either directly or indirectly*, it is presumed that the company has significant influence but not control. 

> [!note]
>
> When considering **influence**, under IFRS, current exersicable or convertible warrants, call options, or convertible securities will also be accounted, Under US GAAP, only consider the voting shares owned.

The accounting standards note that the significant influence may be evidenced by:

* Represenation on the Board of Directors 
* Participation in the policy-making process
* Material Transactions
* Interchange of managerial personnel.
* Technological Dependency

The Equity method is often referred as "one-line consolidation": The investees portional net asset is disclosed in one line "equity investment in associate" on its balance sheet. On I/S, equity income is after operation income.

Under equity method, the equity investment is initially recorded on B/S at the value of the **cost**. In subsequent periods, the carrying amount of the investment is adjusted to recognize investors' proportionate share of the investee's earnings or losses, and these earnings or losses are reported in its income sheet.

**Example.** A buys 30% of B for $100. After one year B earns net income $80. A recognizes $24 (= 30% × 80) as equity income on the I/S (into RE) and increases the associate investment on the B/S from 100 to 124. Dividends or other distributions received from investees are treated as return of capital and reduce the carrying amount of the investment and are not reported in the investor's profit. If B then distributes $20, A’s 30% share is $6: Cash +6, Inv. 124 → 118 (−6); RE and I/S are unchanged — the dividend is not income under the equity method.

<iframe
  class="fx-concept-chart fsa-equity-ex-chart"
  src="/charts/equity-method-basic-example.html"
  title="Equity method: NI pickup then dividend to Inv. 118"
  loading="lazy"
></iframe>


> [!note]
>
> For the case under **cost method**, dividend will be accounted as cash +6; RE +6. Cost method only recognizes actual income. Therefore, it is less misleading for cost method than equity method from this perspective.

> [!note]
>
> In extreme cases, if the subsidiary losses more than its equity value. The max value deducted to the equity investment is its book value. Exceeding value will be internally documented to deduct potential future earnings.



#### Excess Purchase Price

In all accounting standards, long-term equity investment purchase price (PP) should be compared with the fair value and book value of  **identifiable net assets**. However, usually $PP\ge FV\times share\% > BV\times share\%$. The excess part $PV-FV\%$ is **good will**, and $PV-BV\%$ is **Excess Purchase Price (Excess PP)**. 

<iframe
  class="fx-concept-chart"
  src="/charts/excess-purchase-price.html"
  title="Excess purchase price: FV step-ups plus goodwill"
  loading="lazy"
></iframe>



