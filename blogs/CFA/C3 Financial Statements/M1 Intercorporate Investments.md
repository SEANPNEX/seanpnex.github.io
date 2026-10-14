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

In all accounting standards, long-term equity investment purchase price (PP) should be compared with the fair value and book value of  **identifiable net assets**. However, usually $PP\ge FV\times share\% > BV\times share\%$. The excess part $PV-FV\%$ is **good will**, and $PV-BV\%$ is **Excess Purchase Price (Excess PP)**. $FV\%-BV\%$ is the fair value appreciation. 



<iframe
  class="fx-concept-chart"
  src="/charts/excess-purchase-price.html"
  title="Excess purchase price: FV step-ups plus goodwill"
  loading="lazy"
></iframe>


##### Good will

> [!note]
>
> In some cases like market crash, there might be situations where $PP<FV\%$. In this case, negative good will is recognized through Non-opearting Revenue. 

Goodwill is not amortized because it does not have an identifiable life (not an identifiable asset). A regular impairment test should be carried on. Good will is included in the carrying amout of the investment. 


**Example.** BY pays €100,000 for 30% of SY's outstanding shares. At the acquisition date, SY's recorded assets and liabilities are:

| SY (€) | Book value | Fair value | FV − BV |
|---|---:|---:|---:|
| Current assets | 10,000 | 10,000 | 0 |
| Plant & equipment | 190,000 | 220,000 | 30,000 |
| Land | 120,000 | 140,000 | 20,000 |
| Total assets | 320,000 | 370,000 | 50,000 |
| Liabilities | 100,000 | 100,000 | 0 |
| **Net assets** | **220,000** | **270,000** | **50,000** |

BY carries the investment as a single non-current line item, Investment in SY €100,000, at the acquisition date.

| Allocation of BY's purchase price | € | Chart layer |
|---|---:|---|
| Purchase price | 100,000 | whole column |
| − 30% × BV 220,000 | 66,000 | book value share |
| **Excess purchase price** | **34,000** | top two layers |
| P&E: 30% × 30,000 | 9,000 | fair value appreciation |
| Land: 30% × 20,000 | 6,000 | fair value appreciation |
| **Goodwill (residual)** | **19,000** | goodwill |

$$
\underbrace{66{,}000}_{BV\times30\%}+\underbrace{15{,}000}_{\text{FV appreciation}}=\underbrace{81{,}000}_{FV\times30\%},\qquad 81{,}000+\underbrace{19{,}000}_{\text{goodwill}}=100{,}000=PP
$$

Afterwards, the P&E step-up of 9,000 is amortized over its useful life, reducing BY's equity income. The land step-up of 6,000 is not depreciated, and the goodwill of 19,000 is not amortized but is tested for impairment.

##### Amortization of Fair Value Appreciation

The amortization of Fair Value Appreciation uses same method as the underlying asset. 

**Example** Suppose BY buys 30% of SY. In the assets of SY, PPE has BV of 110 and FV of 120 at purchase. In some year, SY has NI of 1000. SY amortize the PPE use straight-line method, the -11 is included in calculation of NI. For BY, the invesment income confirmed as 300, in its I/S, RE and investment asset increase. However, as the FV at purchase excess BV by 10. The **FV appreciation** should also be amortized, that is -1. The value is extra and in the accounting process of BY, the NI of SY is then 999. All other accounting value should change correspondingly.

<iframe
  class="fx-concept-chart"
  src="/charts/fv-appreciation-amortization.html"
  title="Equity method: amortizing the FV appreciation, 300 to 299.7"
  loading="lazy"
></iframe>

**Step by step.**

1. SY's own books depreciate PPE at book value: $110/10 = 11$ per year (so a 10-year straight-line life). This $-11$ is already inside SY's NI of 1,000.
2. BY paid for the PPE at fair value, so from BY's view the asset should be depreciated on 120: $120/10 = 12$ per year. The extra $(120-110)/10 = 1$ per year is the amortization of the FV appreciation.
3. Restate SY's NI on a fair-value basis, then take BY's share:

$$
\text{Equity income} = 30\%\times(1{,}000-1) = 300 - 0.3 = 299.7
$$

4. BY records I/S equity income $+299.7$, RE $+299.7$, and Investment in SY $+299.7$ (instead of $+300$).

**Later periods.** The $-0.3$ repeats every year for 10 years, until BY's share of the step-up, $30\%\times10 = 3$, is fully amortized ($0.3\times10 = 3$). After that, BY picks up the plain $30\%$ of SY's reported NI. If SY sells the PPE early, the unamortized step-up is written off in that year. A land step-up would never be amortized, and goodwill is only tested for impairment.



> [!note]
>
> The key is that the equity is measured in FV at buyer side. Not limited to amortiation, same applies to COGS


**Example (multi-asset step-ups).** On Jan 10, Y1, BY buys 30% of SY for 3,300 and sends a representative to take part in SY's financial and operating decisions, so BY has significant influence and uses the equity method. At the acquisition date, the FV of SY's identifiable net assets is 9,000. All other assets and liabilities have FV = BV except:

| SY item | Cost | Accum. dep./amort. | BV | FV | Step-up (FV − BV) | Total life |
|---|---:|---:|---:|---:|---:|---:|
| Inventory | – | – | 750 | 1,050 | 300 | – |
| Fixed assets | 1,800 | 360 | 1,440 | 2,400 | 960 | 20 yrs |
| Intangible | 1,050 | 210 | 840 | 1,200 | 360 | 10 yrs |
| **Total** | | | | | **1,620** | |

Assumptions: the inventory is used up 80% in Y1 and 20% in Y2. SY's NI is 900 in Y1 and 965 in Y2. There are no dividends. For simplicity, Y1 is treated as a full year even though the purchase was on Jan 10.

Try each question first, then hover over (or tap) the blurred answer.

**Q1.** How much goodwill is inside BY's investment, and how is it treated afterwards?

<div class="reveal" tabindex="0">

$$
\text{Goodwill} = 3{,}300 - 30\%\times9{,}000 = 3{,}300-2{,}700 = 600
$$

Goodwill is not amortized. It stays inside the investment line and is tested for impairment.

</div>

**Q2.** At SY level (100%), what extra expense does each step-up create each year? Find the remaining lives first.

<div class="reveal" tabindex="0">

- Inventory: the step-up of 300 flows into extra COGS as the goods are sold: $80\%\times300=240$ in Y1 and $20\%\times300=60$ in Y2.
- Fixed assets: depreciation is $1{,}800/20=90$ a year, so $360/90=4$ years are used and $16$ remain. Extra depreciation is $960/16=60$ a year for 16 years.
- Intangible: amortization is $1{,}050/10=105$ a year, so $210/105=2$ years are used and $8$ remain. Extra amortization is $360/8=45$ a year for 8 years.

</div>

**Q3.** What is SY's adjusted NI, and BY's equity income, in Y1 and Y2?

<div class="reveal" tabindex="0">

| | Y1 | Y2 |
|---|---:|---:|
| SY's reported NI | 900 | 965 |
| − Inventory step-up (extra COGS) | −240 | −60 |
| − Fixed-asset extra depreciation | −60 | −60 |
| − Intangible extra amortization | −45 | −45 |
| **Adjusted NI** | **555** | **800** |
| **BY's equity income (× 30%)** | **166.5** | **240** |

</div>

**Q4.** What is BY's 30% share of each step-up (and goodwill) still inside the investment at the end of Y1 and Y2?

<div class="reveal" tabindex="0">

| BY's 30% share | Acquisition | Y1 | Y2 | Pattern after Y2 |
|---|---:|---:|---:|---|
| Inventory (300 × 30% = 90) | 90 | 18 | 0 | gone: 72 in Y1, 18 in Y2 |
| Fixed assets (960 × 30% = 288) | 288 | 270 | 252 | −18 a year until Y16 |
| Intangible (360 × 30% = 108) | 108 | 94.5 | 81 | −13.5 a year until Y8 |
| Goodwill | 600 | 600 | 600 | not amortized; impairment test |
| **Total excess over 30% × BV** | **1,086** | **982.5** | **933** | |

Check: $30\%\times(9{,}000-1{,}620)=2{,}214$ and $3{,}300-2{,}214=1{,}086$ = the step-ups $486$ + goodwill $600$. In Y1, $270-103.5=166.5$ (with $103.5=72+18+13.5$). In Y2, $289.5-49.5=240$.

</div>

**Q5.** What is the carrying amount of Investment in SY at the end of Y1 and Y2?

<div class="reveal" tabindex="0">

$$
3{,}300 + 166.5 = 3{,}466.5 \quad\text{(end Y1)},\qquad 3{,}466.5 + 240 = 3{,}706.5 \quad\text{(end Y2)}
$$

</div>

**Q6.** Over the remaining lives, how much extra amortization does BY book in total for each step-up?

<div class="reveal" tabindex="0">

Fixed assets: $18\times16 = 288$. Intangible: $13.5\times8 = 108$. Inventory: $72+18 = 90$, used up within two years. Goodwill: none (impairment test only).

</div>

**Takeaway:** BY measures SY's income on a fair-value basis. Each step-up leaves BY's equity income at the same pace as the underlying asset leaves SY's books (COGS for inventory, depreciation or amortization for long-lived assets), while goodwill stays put until it is impaired.

#### Transactions with Associates

The key idea is to avoid profit inflation through upstream/downstream transactions.
