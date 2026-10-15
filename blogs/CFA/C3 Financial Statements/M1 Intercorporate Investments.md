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

<iframe
  class="fx-concept-chart"
  src="/charts/upstream-downstream-profit.html"
  title="Upstream vs downstream: eliminating A's 30% share of unrealized profit"
  loading="lazy"
></iframe>

*Illustrative: whichever way the goods move, A eliminates $30\%\times40=12$ of unrealized profit and recognizes it only when the goods are sold to a third party.*

The accounting standards therefore specified the internal sales gain are unrealized. If it is to sell, realize when sold to independent third party. If is to use, realize based on amortization. Note the the unrealized case is often directly recognized as realized (the standard say depend on case, if due to quality issue, recognize the loss).

Same as prev sections, the unrealized part on NI should be adjusted. The profit is added when realized

##### Upstream

The profit recorded on associates' I/S. The investor's I/S adjust the NI as specified above.


> [!note]
>
> **Unrealized vs realized.** Intercompany profit is *unrealized* while the goods are still held inside the investor–associate pair: no outside party has paid for them. It becomes *realized* when the goods are sold to an independent third party, or, for assets used in operations, as they are depreciated or amortized.

**Eliminate your share.** Only the investor's ownership share of the unrealized profit is removed:

$$
\text{Elimination} = \text{investor }\%\times\text{unrealized profit}
$$

The textbook adjusts the associate's NI by the full unrealized profit and then multiplies by the ownership %. That gives the same result: $\%\times(NI-\text{unrealized}) = \%\times NI - \%\times\text{unrealized}$.

- **Upstream** (associate → investor): the profit sits in the associate's NI, so the investor's equity income is reduced.
- **Downstream** (investor → associate): the profit sits in the investor's own sales, and the same $\%\times$ unrealized profit is eliminated (through equity income / the investment account). The treatment is symmetric.
- **Release.** The deferred amount is recognized pro rata as the buyer sells the goods outside: if a fraction $s$ is sold in a later year, add back $s\times$ unrealized profit (times % at the investor level) in that year.

**Example (upstream).** Amounts are in 10k. In Jan 2017, BY acquires 20% of SY's voting shares and has significant influence. At acquisition, the FV of SY's net assets equals BV. In Aug 2017, SY sells goods costing 600 to BY for 1,000, and BY holds them as inventory. At 12/31/2017, BY has not sold any to outsiders. In 2018, BY sells 60% of the goods to an independent third party. SY's NI is 3,200 in 2017 and 4,000 in 2018.

| | 2017 | 2018 |
|---|---:|---:|
| SY's reported NI | 3,200 | 4,000 |
| Unrealized profit adjustment | $-(1{,}000-600)\times100\% = -400$ | $+(1{,}000-600)\times60\% = +240$ |
| **Adjusted NI** | **2,800** | **4,240** |
| **BY's investment income (× 20%)** | **560** | **848** |

Assuming no dividends, the investment account moves as follows: $\text{Cost} \to \text{Cost}+560 \to \text{Cost}+560+848 = \text{Cost}+1{,}408$.

Check: $400\times20\%=80$ is deferred in 2017. Of that, $80\times60\%=48$ is released in 2018, and $80-48=32$ is still unrealized (the 40% of goods still held by BY).

**Example (upstream, asset used by the buyer).** Amounts are in 10k. On 12/31/2019, DJ acquires 20% of EJ's voting shares and has significant influence. At acquisition, the FV of EJ's net assets equals BV. On the same day, EJ sells goods costing 600 to DJ for 900. DJ uses them as a fixed asset: 10-year life, straight-line, residual value 0. At 12/31/2020, DJ has not sold the asset to outsiders. EJ's NI for 2020 is 1,600.

Because DJ uses the asset rather than reselling it, the profit is realized through depreciation. DJ depreciates $900/10=90$ a year, versus $600/10=60$ on the original cost, so the extra $30$ a year is the share of the profit realized each year.

1. Intercompany profit: $900-600=300$.
2. Realized each year: $300/10=30$.
3. Unrealized at 12/31/2020: $300-30=270$.

| 2020 | Amount |
|---|---:|
| EJ's reported NI | 1,600 |
| Eliminate the full intercompany profit | −300 |
| Add back the part realized via depreciation | +30 |
| **Adjusted NI** | **1,330** |
| **DJ's investment income (× 20%)** | **266** |

Check: $20\%\times300=60$ is deferred. Of that, $6$ a year is released through depreciation (2020–2029), so $60-6=54$ is still deferred at the end of 2020.

*Extension beyond the slide:* in 2021–2029, if the asset isn't sold, adjusted NI $=$ reported NI $+30$, so DJ recognizes $20\%\times NI+6$ each year.

##### Downstream Transactions

Under accounting standards, downstream transaction is processed same as upstream. 

### Other Issues

Two loose ends complete the equity method: what happens when the investment loses value, and the option to skip the equity method altogether and carry the investment at fair value.

#### Impairment

An equity-method investment is carried at cost, plus the investor's share of earnings, minus dividends. Nothing in that formula looks at the market, so the carrying amount can drift well above what the stake is really worth. Both IFRS and US GAAP therefore require a **periodic impairment review**.

> [!note]
>
> **Recall from Level I** (long-lived assets): under IFRS an asset is impaired when its carrying amount exceeds its **recoverable amount**, the higher of
>
> - **fair value less costs to sell**, and
> - **value in use** (the present value of the cash flows the asset is expected to generate).
>
> Net realizable value (NRV) is the inventory version of the same idea; for investments the yardstick is recoverable amount.

**When to test (the trigger).** The two standards set different bars:

- **IFRS:** there must be **objective evidence** of one or more **loss events**, such as the investee's financial difficulty, a breach of contract or a likely bankruptcy, and the event must affect the investment's **future cash flows** in a way that can be **reliably estimated**. A drop in fair value alone is not automatically enough.
- **US GAAP:** the investment's **fair value falls below its carrying amount** and the decline is judged **other than temporary** (in effect, permanent).

**What is tested.** The **whole carrying amount** of the investment is tested as one asset. Goodwill sits inside that carrying amount (see *Good will* above) and is never recognized separately, so it is **not tested on its own**. Its impairment is simply part of the single impairment loss on the investment.

**How it is recorded.** The loss equals the carrying amount minus the recoverable amount (IFRS) or minus fair value (US GAAP):

$$
\text{Impairment loss} = \text{Carrying amount} - \text{Recoverable amount (IFRS) or Fair value (US GAAP)}
$$

- **I/S:** the loss is recognized in profit or loss, so it reduces RE.
- **B/S:** the investment is written down, either **directly** or through an **allowance account** (a contra account).
- Later equity-method pickups start from the **new, lower** carrying amount.

**Can it be reversed?**

- **US GAAP:** **no.** Reversal is prohibited, even if fair value later recovers.
- **IFRS:** **yes**, if the recoverable amount increases. The reversal is capped at the carrying amount the investment would have had without the impairment. Because the goodwill inside the investment is not a separate asset, the cap applies to the investment as a whole.

**Example (impairment, illustrative).** Continue the multi-asset BY/SY example above: at the end of Y2 BY's investment in SY is carried at $3{,}706.5$. Early in Y3, SY loses its largest customer. BY estimates fair value less costs to sell of its stake at $3{,}150$ and value in use at $3{,}250$.

1. **IFRS.** The loss of a major customer is objective evidence of a loss event. Recoverable amount $=\max(3{,}150,\ 3{,}250)=3{,}250$, so the impairment is $3{,}706.5-3{,}250=456.5$.
2. **Entries.** I/S impairment loss $-456.5$ (RE $-456.5$); Investment in SY $-456.5$, to $3{,}250$.
3. **Later.** Equity income is added to the $3{,}250$ base. If the stake's value recovers in Y4, US GAAP keeps the write-down, while IFRS may reverse it, but never above the carrying amount the investment would have had without the impairment.

#### Fair Value Option

Here *option* means an **accounting election**, not a derivative contract. Instead of applying the equity method, the investor may measure an investment in an associate at **fair value through profit or loss (FVPL)**, the same treatment as a trading security.

**Who can elect it.**

- **US GAAP:** available to **all entities**.
- **IFRS:** restricted to **venture capital organizations, mutual funds, unit trusts and similar entities**, including investment-linked insurance funds. These are investors that manage a portfolio on a fair-value basis.

**When.** The election is made **at initial recognition** ($t=0$) and is **irrevocable**: the investor cannot switch methods later to manage earnings.

**What changes once it is elected.**

- **B/S:** the investment is carried at **fair value** each period. It **no longer reflects the investor's proportionate share** of the investee's equity.
- **I/S:** income is the **unrealized fair-value gain or loss** plus **dividends and interest received**. Dividends are income again, as under the cost method, rather than a return of capital.
- **No equity-method mechanics:** there is no share of the investee's NI and no amortization of excess purchase price (step-up depreciation, see *Amortization of Fair Value Appreciation* above). There is also no elimination of unrealized intercompany profit and no separate impairment test, because every change in value already runs through profit or loss.

| | Equity method | Fair value option |
|---|---|---|
| B/S carrying amount | Cost + share of NI − dividends | Fair value |
| Income | Share of investee's NI, after step-up amortization and intercompany eliminations | Fair-value change + dividends and interest |
| Dividends received | Reduce the investment (return of capital) | Income |
| Excess purchase price amortization | Yes | No |
| Unrealized intercompany profit | Eliminated | Not adjusted |
| Impairment test | Yes | Not needed |

**Example (equity method vs fair value option).** Take the basic example from *Basic Principles*: Company A buys 30% of B for $100$, B earns NI of $80$ and pays dividends of $20$. Suppose the stake is worth $112$ at year end.

| | Equity method | Fair value option |
|---|---:|---:|
| Investment at year end | $100+24-6=118$ | $112$ |
| Income for the year | $30\%\times80=24$ | dividend $6$ + FV gain $(112-100)=12$, total $18$ |
| Cash received | $6$ | $6$ |

The two methods report different income ($24$ vs $18$) and different carrying amounts ($118$ vs $112$). The equity method follows the investee's **earnings**; the fair value option follows the **market price** of the stake.

**Quick check.** Try each question first, then hover over (or tap) the blurred answer.

**Q1.** A US GAAP reporter wrote down an equity-method investment last year. This year the investee's share price has fully recovered. What happens to the write-down?

<div class="reveal" tabindex="0">

Nothing. US GAAP prohibits reversing an impairment loss on an equity-method investment, so the lower carrying amount stays. Under IFRS, a reversal would be allowed up to the carrying amount the investment would have had without the impairment.

</div>

**Q2.** An industrial company reporting under IFRS holds 25% of a supplier. Can it choose the fair value option two years after buying the stake, because the supplier's shares have risen?

<div class="reveal" tabindex="0">

No, for two reasons. Under IFRS the option is limited to venture capital organizations, mutual funds, unit trusts and similar entities, which an industrial company is not. And under either standard the election must be made at initial recognition and cannot be changed later.

</div>



# Business Combinations

## Basic Concepts

### Controls

**Control** is what makes an investment a business combination: the investor (the **parent**) consolidates the investee (the **subsidiary**) line by line instead of carrying it as one investment. The two standards define control differently.

**IFRS: one model for every investee.** Control is the power to govern an entity's financial and operating policies so as to obtain benefits from its activities. IFRS 10 tests it with three elements, all of which must be present:

1. **Power** over the investee's relevant activities, the ones that drive its returns;
2. **Exposure, or rights, to variable returns** from the involvement;
3. **The ability to use that power** to affect those returns.

**US GAAP: two models.**

- **Voting interest model:** control is a **controlling financial interest**, normally owning **more than 50% of the voting shares**.
- **Variable interest model:** for a **variable interest entity (VIE)**, voting shares do not decide control. A VIE is an entity whose equity at risk is too small to fund it, or whose equity holders lack real decision rights. Instead, the **primary beneficiary** consolidates: the party that directs the activities that most affect the VIE's performance **and** absorbs its losses or receives its benefits.

**Equity investors vs debt investors.**

- **Equity investors** normally gain control through **voting rights**, usually a majority of the votes. Under IFRS a smaller stake can still give control: for example, agreements with other shareholders or exercisable potential voting rights (options, convertibles) can give the investor power.
- **Debt investors** have no votes, so a lender ordinarily **does not control** the borrower. Covenants and collateral are **protective rights**: they guard the lender's claim but give no power over the business.
- **The exception is a structured entity or special purpose entity (SPE).** Here the contracts, not the shares, decide who has power and who bears the risk. If a lender, guarantor or sponsor directs the entity's key activities and carries most of its variable returns, that party has control even without owning a voting share. Under US GAAP it is the **primary beneficiary** of a VIE; under IFRS it passes the same three-element test as any equity owner.

> [!note]
>
> *Example.* A company moves its receivables into an SPE. Outside investors hold a thin slice of equity, and the SPE is funded mostly by debt that the company guarantees, while the company keeps collecting the receivables. The equity holders do not control the SPE. The company directs its main activity and bears its losses through the guarantee, so it consolidates the SPE and the debt comes back onto its balance sheet.

### Business Combinations

A **business combination** brings two separate businesses under one control: two entities become one economic unit. What changes from one form to the next is which legal entities survive. US GAAP names three forms; IFRS does not distinguish between them, and all three are accounted for the same way (the acquisition method below).

| Form | Shorthand | What happens | Entities after the deal |
|---|---|---|---|
| **Merger** | $A + B = A$ | A absorbs B's assets and liabilities; B ceases to exist | A only |
| **Acquisition** | $A + B = (A + B)$ | A buys a controlling interest in B; both keep their legal identity | A (parent) and B (subsidiary) |
| **Consolidation** | $A + B = C$ | A new entity C takes over both; A and B cease to exist | C only |

A fourth case in the curriculum is the **special purpose / variable interest entity**. As shown under *Controls* above, the sponsor that controls it consolidates it, even without a majority of the votes.

> [!note]
>
> **Check for a common controller before the deal.** If A and B are already controlled by the same party, such as two subsidiaries of one parent, the combination does not change who controls the business. It is outside the acquisition method and is accounted for differently (see below).

**Q: In the three forms, who prepares individual and consolidated statements? What if A and B have a common controller?**

| Form | Individual (separate) statements | Consolidated statements |
|---|---|---|
| Merger | A only; B's assets and liabilities now sit directly in A's books | Not needed: there is only one entity |
| Acquisition | A **and** B each keep preparing their own | **A, as the parent**, consolidates B line by line |
| Consolidation | C only | Not needed: C is a single new entity |

Only the **acquisition** form leaves a parent and a subsidiary side by side, so it is the form that needs **consolidated statements**. Merger and consolidation leave a single legal entity, whose own books already contain everything.

**Common control.** When the same party controls A and B before and after the deal, nothing is really bought from an outsider, so there is no new basis for fair values:

- assets and liabilities are carried over at their **existing carrying amounts**, not stepped up to fair value;
- **no new goodwill** arises; any difference between the price paid and the book value goes to **equity**;
- US GAAP presents the combined entities **as if they had always been combined**. IFRS has no specific standard, and in practice this book-value ("predecessor") approach is common.

### Acquisition Method

**From pooling to purchase to acquisition.** Combinations used to be accounted for in one of two ways:

- **Pooling of interests** (IFRS: *uniting of interests*): treated as a merger of equals. The two companies' **book values** were simply added together, with **no fair-value step-ups and no goodwill**. Prior periods were restated as if the companies had always been combined.
- **Purchase method:** treated as one company buying the other, with the target recorded at what was paid for it.

Pooling flattered later earnings: with no step-ups and no goodwill there was less depreciation and amortization. It also made otherwise similar deals hard to compare. US GAAP abolished it in 2001 (SFAS 141) and IFRS in 2004 (IFRS 3). The purchase method was then refined into today's **acquisition method** (SFAS 141R and revised IFRS 3, effective 2009). **Pooling now survives only, in substance, for combinations under common control**, as described above.

**The acquisition method in four steps.**

1. **Identify the acquirer**, the entity that obtains control. This is usually the one that pays cash or issues shares, or the larger entity.
2. **Determine the acquisition date**, the day control passes. Fair values are measured on this date.
3. **Recognize and measure the identifiable assets and liabilities at fair value.** This includes items the target never recorded, such as brand names, customer lists and patents developed internally, as well as contingent liabilities. Contingent consideration (an earn-out) is also measured at fair value.
4. **Recognize goodwill, or a bargain purchase gain.**

$$
\text{Goodwill} = \text{Consideration transferred} + \text{Noncontrolling interest} - \text{Fair value of identifiable net assets}
$$

- **Goodwill** is not amortized; it is tested for impairment.
- If the result is negative, it is a **bargain purchase**: the gain goes straight to **profit or loss** after the fair values have been rechecked.
- **Acquisition-related costs** (advisers, lawyers) are **expensed**, not added to the price.
- With less than 100% ownership, the noncontrolling interest and the full vs partial goodwill choice come into play. They are covered in *Consolidation Process*.

**Example (pooling vs acquisition, illustrative).** A issues shares worth 1,000 for 100% of B. Pooling applied only to share-for-share deals like this one. B's identifiable net assets have a book value of 600 and a fair value of 800.

| | Pooling of interests (old) | Acquisition method (now) |
|---|---:|---:|
| B's net assets recorded at | 600 (book value) | 800 (fair value) |
| Goodwill | none | $1{,}000 - 800 = 200$ |
| Later depreciation and amortization of the step-up | none | the 200 step-up from book to fair value |
| Comparable to buying the assets one by one? | no | yes |

Under the acquisition method the combined balance sheet shows what A actually paid: 800 of identifiable net assets plus 200 of goodwill, or 1,000 in total. Pooling would have recorded both B's net assets and A's new shares at 600, so the other 400 of the price would never have appeared.

## Consolidation Process

Once A controls B, A still keeps one line on its own books, *Investment in B*. The group's **consolidated statements**, however, show B line by line, as if A owned B's assets and owed B's liabilities directly. Consolidation is the process of replacing that one investment line with everything behind it.

**The big map.**

1. **Restate B at fair value.** Step B's identifiable assets and liabilities up (or down) to their fair values at the acquisition date.
2. **Add A and B together**, line by line: A at **book value** (the parent's own balance sheet is never revalued), B at **fair value**.
3. **Eliminate A's investment against B's equity.** A's *Investment in B* and B's (fair-value) equity are two views of the same thing, so both are removed. Whatever the investment exceeds B's net assets by is **goodwill**; if A owns less than 100%, B's equity that A did not buy becomes the **noncontrolling interest (NCI)**.

$$
\underbrace{\text{Investment in B}}_{\text{price paid}} - \underbrace{\text{FV of B's identifiable net assets}}_{\text{B's equity at FV}} = \text{Goodwill}
$$

B's pre-acquisition retained earnings and share capital **never appear** in consolidated equity. They were bought, not earned by the group.

All the cases below use the same two companies. **Before the deal:**

| | A (book value) | B (book value) | B (fair value) |
|---|---:|---:|---:|
| Cash | 1,500 | – | – |
| Other assets | 3,000 | 1,000 | 1,200 |
| **Total assets** | **4,500** | **1,000** | **1,200** |
| Liabilities | 1,500 | 400 | 400 |
| Equity | 3,000 | 600 | 800 |

B's identifiable net assets are 600 at book value and 800 at fair value: a **step-up of 200** on B's other assets.

### Case 1: buy 100% for cash

A pays **1,000 cash** for all of B.

**On A's own books.** One asset is swapped for another: cash −1,000, *Investment in B* +1,000. A's liabilities and equity do not change. Nothing changes on B's books either; B simply has a new owner.

**Consolidation worksheet.**

| | A | B at FV | Eliminate | Consolidated |
|---|---:|---:|---:|---:|
| Cash | 500 | – | | 500 |
| Other assets | 3,000 | 1,200 | | 4,200 |
| Investment in B | 1,000 | – | −1,000 | 0 |
| Goodwill | – | – | +200 | 200 |
| **Total assets** | **4,500** | **1,200** | | **4,900** |
| Liabilities | 1,500 | 400 | | 1,900 |
| Equity | 3,000 | 800 | −800 | 3,000 |
| **Total L + E** | **4,500** | **1,200** | | **4,900** |

- **Goodwill** $=1{,}000-800=200$: the part of the price not explained by B's identifiable net assets.
- **Consolidated equity is A's equity only**, 3,000. B's equity of 800 is eliminated against the investment.
- **A's own assets stay at book value.** Only B's are restated to fair value.

### Case 1b: buy 100% with new shares

Same deal, but A **issues shares** worth 1,000 (par 100) instead of paying cash.

**On A's own books.** *Investment in B* +1,000 and equity +1,000: common stock +100 and additional paid-in capital +900. Retained earnings do not change, because issuing shares is not income. Cash stays at 1,500.

**Consolidated.** Steps 2 and 3 are unchanged, so goodwill is again $1{,}000-800=200$.

| | Consolidated |
|---|---:|
| Cash + other assets | $1{,}500+3{,}000+1{,}200=5{,}700$ |
| Goodwill | 200 |
| **Total assets** | **5,900** |
| Liabilities | 1,900 |
| Equity | $3{,}000+1{,}000=4{,}000$ |

Compared with Case 1, the group has 1,000 more cash and 1,000 more equity. Paying in shares grows the balance sheet; paying in cash only reshuffles it.

### Case 2: buy less than 100% (noncontrolling interest)

When A buys less than all of B, consolidation still adds **100%** of B's assets and liabilities, because A controls all of them. The part of B's equity that belongs to the other owners is shown as **noncontrolling interest (NCI)**, a separate line **within equity**, not a liability.

The goodwill figure depends on how NCI is measured:

| | Full goodwill | Partial goodwill |
|---|---|---|
| NCI measured at | **Fair value** of the NCI's shares | NCI's share of B's **identifiable net assets** at FV |
| Goodwill | FV of **all of B** − FV of identifiable net assets | Price paid − A's share of FV of identifiable net assets |
| Allowed under | US GAAP (required) and IFRS | IFRS only |

**Example (90% acquired).** A pays **900 cash for 90%** of B. The price implies that all of B is worth $900/90\%=1{,}000$, so the other owners' 10% is worth 100.

| | Full goodwill | Partial goodwill |
|---|---:|---:|
| Goodwill | $1{,}000-800=200$ | $900-90\%\times800=180$ |
| NCI | $10\%\times1{,}000=100$ | $10\%\times800=80$ |
| Cash ($1{,}500-900$) + other assets ($3{,}000+1{,}200$) | 4,800 | 4,800 |
| **Total assets** | **5,000** | **4,980** |
| Liabilities | 1,900 | 1,900 |
| Equity of A's shareholders | 3,000 | 3,000 |
| NCI | 100 | 80 |
| **Total L + E** | **5,000** | **4,980** |

The only difference is the 20 of goodwill that belongs to the NCI: full goodwill recognizes it, partial goodwill does not. Total assets, equity and therefore ROA and ROE all differ slightly between the two methods.

### Income Statement

1. **Add 100% of A's and B's revenues and expenses**, even when A owns less than 100%.
2. **Eliminate intercompany transactions.** A sale from A to B is not a sale for the group, so both the revenue and the matching cost are removed, along with any profit still unrealized in the buyer's inventory.
3. **Adjust for the fair-value step-up.** B's books depreciate its assets at book value; the group must depreciate them at fair value, so the extra depreciation on the step-up is an expense of the group.
4. **Split consolidated NI** between A's shareholders and the NCI. The NCI share is an **allocation of profit, not an expense**.

**Example (90% acquired, year 1).** Continue Case 2. During the year:

- A's own revenue is 2,000 and its expenses are 1,600, so A's NI is 400 (before any income from B).
- B's revenue is 800 and its expenses are 600, so B's NI is 200.
- A sold goods to B for 100, and B resold all of them to outside customers within the year.
- The 200 step-up is on equipment with a remaining life of 10 years, so the group depreciates an extra 20 a year.

| | A | B | Adjust | Consolidated |
|---|---:|---:|---:|---:|
| Revenue | 2,000 | 800 | drop 100 intercompany | 2,700 |
| Expenses | (1,600) | (600) | drop 100 intercompany; add 20 step-up depr. | (2,120) |
| **Consolidated NI** | | | | **580** |
| Attributable to NCI | | | 10% of B's 180 | 18 |
| **Attributable to A's shareholders** | | | 400 + 90% of 180 | **562** |

- The intercompany sale **does not change profit** here, because B resold all the goods. It only removes 100 of double-counted revenue and cost. Had B still held some of the goods, the unrealized profit in them would also have been eliminated.
- The NCI's share is based on B's NI **after** the step-up depreciation, $200-20=180$: the step-up belongs to all of B's owners.
- At year end, NCI on the balance sheet is $100+18=118$ (full goodwill, no dividends).

### Contingent Consideration

Part of the price is often **contingent**: an **earn-out** paid only if the target hits a target, such as a revenue or profit level, after the deal.

- **At acquisition:** the contingent payment is measured at **fair value** and included in the consideration transferred, so it **increases goodwill**.
- **Classification:** it is a **liability** if it will be settled in cash or in a variable number of shares, or **equity** if it is a fixed number of shares.
- **Afterwards:**
  - **Liability:** remeasured at fair value every period, with changes in **profit or loss**. **Goodwill does not change.**
  - **Equity:** **not remeasured**; the settlement is recorded within equity.
- **Measurement period:** for up to **one year** after the acquisition date, new information about **facts that existed at the acquisition date** adjusts the provisional amounts, and therefore goodwill. Changes caused by events **after** the acquisition (such as the target beating its forecast) go to profit or loss.

**Example.** In Case 1, A also agrees to pay 100 more in cash if B's revenue exceeds 1,000 within two years. At acquisition the earn-out's fair value is 40, so the consideration is $1{,}000+40=1{,}040$ and goodwill is $1{,}040-800=240$. A year later B is doing better than expected and the earn-out's fair value rises to 70: A recognizes a **loss of 30** in profit or loss and the liability rises to 70, while goodwill stays at 240.

## Accounting Treatment of Goodwill

