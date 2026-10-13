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
.fx-concept-chart.fsa-tree-chart { height: 560px; }
.fx-concept-chart.fsa-own-chart { height: 420px; }
.fx-concept-chart.fsa-classify-chart { height: 700px; }
.fx-concept-chart.fsa-measure-chart { height: 820px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.fsa-tree-chart { height: 620px; }
    .fx-concept-chart.fsa-own-chart { height: 480px; }
    .fx-concept-chart.fsa-classify-chart { height: 780px; }
    .fx-concept-chart.fsa-measure-chart { height: 920px; }
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


