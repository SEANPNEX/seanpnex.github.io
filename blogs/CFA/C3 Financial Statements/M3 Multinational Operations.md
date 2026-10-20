# Multinational Operations

## Foreign Currency Transactions

A multinational company is likely to have two types of foreign currency activities that require special accounting treatment:

* **Foreign currency transactions**: the company makes sales, purchases, loans or borrowings **denominated in a foreign currency**.
* **Foreign currency translation**: the company invests in **foreign subsidiaries** that keep their books in a foreign currency, and must translate their statements to consolidate them (see [Foreign Currency Translation](#foreign-currency-translation)).

A foreign currency transaction occurs when a company makes an import purchase or an export sale that is **denominated in a foreign currency**, or borrows or lends funds in a foreign currency. The company records the transaction in its own currency, but it will pay or receive a fixed amount of foreign currency.

Because exchange rates fluctuate, the value of foreign currency **payables and receivables** in the company's own currency also fluctuates until they are settled. This is **transaction exposure**:

| Transaction | Foreign currency item | Loss if the foreign currency | Gain if the foreign currency |
| --- | --- | --- | --- |
| **Import** (buy on credit) | Payable | **Appreciates**: more home currency is needed to pay | Depreciates |
| **Export** (sell on credit) | Receivable | **Depreciates**: the receipt is worth less in home currency | Appreciates |

The transaction is first recorded at the **spot rate on the transaction date**. What happens next depends on whether it is settled before the balance sheet date:

1. **Settled before the balance sheet date.** The difference between the spot rate on the transaction date and the rate on the settlement date gives a **realized** foreign exchange gain or loss, in net income for the period.
2. **Still outstanding at the balance sheet date.** The foreign currency receivable or payable is **remeasured at the spot rate on the balance sheet date**, and the change since the transaction date is an **unrealized** gain or loss in this period's net income. At settlement in the next period, the change from the balance sheet date to the settlement date is a further **realized** gain or loss in that period.

Either way, the **total** gain or loss over the life of the transaction is the difference between the transaction-date rate and the settlement-date rate. A balance sheet date in between only splits it across two periods. Only the **monetary** item (the receivable or payable) is remeasured: the sale already recorded as revenue, or the inventory bought, stays at the transaction-date amount.

**Example (settled in the same period).** A US company, reporting in USD, sells goods to a European customer for EUR 100,000 on March 1, payable on May 1.

| Date | Rate | Entry |
| --- | --- | --- |
| March 1 | USD 1.10 per EUR | Revenue and receivable: $100{,}000\times1.10=$ USD 110,000 |
| May 1 | USD 1.08 per EUR | Cash received: $100{,}000\times1.08=$ USD 108,000 |

The euro **depreciated** while the company held a euro receivable (an export), so it recognizes a **realized FX loss** of $110{,}000-108{,}000=$ USD 2,000. Revenue stays at USD 110,000.

**Example (a balance sheet date in between).** The same company imports goods for EUR 100,000 on November 15, Y1, payable on February 15, Y2. Its fiscal year ends on December 31.

| Date | Rate | Payable in USD | Gain (loss) in NI |
| --- | --- | ---: | ---: |
| Nov. 15, Y1 (transaction) | USD 1.10 per EUR | 110,000 | — |
| Dec. 31, Y1 (balance sheet date) | USD 1.13 per EUR | 113,000 | **(3,000)** unrealized, in Y1 |
| Feb. 15, Y2 (settlement) | USD 1.12 per EUR | 112,000 paid | **1,000** realized, in Y2 |

* **Y1:** the euro appreciated while the company owed euros (an import), so the payable rises to USD 113,000 and Y1 net income includes an **unrealized loss of 3,000**. The inventory stays at USD 110,000.
* **Y2:** the euro falls back slightly before payment, so the company pays USD 112,000 and recognizes a **realized gain of 1,000**.
* **Total:** a net loss of $112{,}000-110{,}000=$ USD 2,000, split as $-3{,}000$ in Y1 and $+1{,}000$ in Y2.

> [!Note]
>
> Neither IFRS nor US GAAP specifies **where** transaction gains and losses are reported on the income statement: in operating income (e.g., within other operating income) or in non-operating income (e.g., with finance costs). Two companies with identical exposures can therefore report different operating profit and **operating margins**. Check the notes, which disclose the net FX gain or loss included in net income, before comparing them.

## Foreign Currency Translation

### Concepts

**Background.** Companies with operations in foreign countries usually have those operations keep their records and prepare their statements in the local currency. To consolidate them, the parent must first **translate** their statements into its own presentation currency.

Three currencies are involved:

* **Presentation currency**: the currency in which the parent's (consolidated) financial statements are presented.
* **Functional currency**: the currency of the **primary economic environment** in which the entity operates, normally the one in which it mainly generates and spends cash.
* **Local currency**: the currency of the country where the entity is located, in which it usually keeps its books.

**Deciding the functional currency.** Management judges which currency mainly:

* Influences the **sales prices** of its goods and services
* Influences **labor, material and other costs**
* Is used to **raise funds** (debt and equity financing)
* Is used to **retain receipts** from operating activities

The functional currency then decides the method:

| Case | Typical subsidiary | Method | Translation adjustment goes to |
| --- | --- | --- | --- |
| **Functional = local ≠ presentation** | Self-contained: operates independently of the parent | [Current rate method](#current-rate-method) (functional → presentation) | **OCI**, as the cumulative translation adjustment (CTA) in equity |
| **Functional = presentation ≠ local** | Well integrated with the parent: e.g., sells the parent's goods and remits cash to it | [Temporal method](#temporal-method) (local → functional) | **Net income**, as a remeasurement gain or loss |
| **Local ≠ functional ≠ presentation** | Keeps its books in a currency it doesn't mainly operate in | Temporal method (local → functional), **then** current rate method (functional → presentation) | Both: NI for the first step, OCI for the second |

* **Current rate method**: functional → presentation (*translation*)
* **Temporal method**: local → functional (*remeasurement*)

### Translation Methods

#### Current Rate Method

Three exchange rates are used:

* **Current rate**: the spot rate on the balance sheet date
* **Average rate**: the average over the period, a practical approximation of the rates on the dates revenues and expenses were recognized
* **Historical rate**: the spot rate when an item first arose (e.g., when shares were issued or dividends declared)

| Item | Rate |
| --- | --- |
| **All assets and liabilities** | Current rate |
| **Common stock and paid-in capital** | Historical rate when issued |
| **Revenues and expenses** | Average rate (or the rate on the date each is recognized) |
| **Dividends** | Historical rate when declared |
| **Retained earnings** | Not translated directly: built up from its parts (below) |

**Retained earnings** follow the BASE rule (beginning + additions − subtractions = ending), in the presentation currency:

$$\text{RE}_{\text{end}}=\text{RE}_{\text{beg}}+\text{NI (translated)}-\text{Dividends (translated)}$$

$\text{RE}_{\text{beg}}$ is last year's translated ending balance, so it reflects every past year's rates.

Assets and liabilities at the current rate, and equity at a mix of historical and average rates, do not balance. The difference is the **cumulative translation adjustment (CTA)**, a separate line in equity, through OCI:

$$\text{CTA}=\text{Assets}-\text{Liabilities}-\text{Common stock}-\text{RE}$$

**Order of work:** translate the **I/S** first (to get NI), then the **RE** statement, then the **assets and liabilities** on the B/S; the **CTA** is the plug that balances the B/S.

* **Exposure is the subsidiary's net assets.** All assets and liabilities are at the current rate, so if the foreign currency **appreciates**, a subsidiary with net assets gives a **positive** translation adjustment; if it **depreciates**, a negative one.
* The CTA **accumulates** in equity and is reclassified to net income only when the foreign subsidiary is **sold or liquidated**.

**Example (current rate method, all three statements).** On January 1, a US parent (presentation currency USD) sets up a European subsidiary whose functional currency is the euro, with share capital of EUR 1,000. The euro **depreciates** during the year:

| Rate | USD per EUR |
| --- | ---: |
| Historical, January 1 (shares issued) | 1.20 |
| Average for the year | 1.15 |
| When dividends are declared | 1.12 |
| Current, December 31 | 1.10 |

*Income statement:*

| | EUR | Rate | USD |
| --- | ---: | ---: | ---: |
| Revenue | 1,000 | 1.15 | 1,150 |
| Expenses | (800) | 1.15 | (920) |
| **Net income** | **200** | | **230** |

*Retained earnings:*

| | EUR | Rate | USD |
| --- | ---: | ---: | ---: |
| Beginning RE (first year) | 0 | | 0 |
| + Net income | 200 | from the I/S | 230 |
| − Dividends | (50) | 1.12 | (56) |
| **Ending RE** | **150** | | **174** |

*Balance sheet, December 31:*

| | EUR | Rate | USD |
| --- | ---: | ---: | ---: |
| Cash | 300 | 1.10 | 330 |
| Inventory | 400 | 1.10 | 440 |
| PP&E (net) | 900 | 1.10 | 990 |
| **Total assets** | **1,600** | | **1,760** |
| Liabilities | 450 | 1.10 | 495 |
| Common stock | 1,000 | 1.20 | 1,200 |
| Retained earnings | 150 | from the RE statement | 174 |
| **CTA** (plug) | — | | **(109)** |
| **Total liabilities and equity** | **1,600** | | **1,760** |

**Check the CTA from the net assets.** Each change in net assets is translated at one rate but carried at the current rate of 1.10:

* Opening net assets: $1{,}000\times(1.10-1.20)=-100$
* Net income: $200\times(1.10-1.15)=-10$
* Dividends: $-50\times(1.10-1.12)=+1$
* Total: $-109$

The subsidiary has **net assets** and the euro **depreciated**, so the translation adjustment is **negative**. It reduces equity through OCI; net income is unaffected.

#### Temporal Method

The temporal method separates **monetary** from **non-monetary** items:

* **Monetary items** are cash, and rights or obligations to receive or pay a **fixed number of currency units**.
* **Non-monetary items** are everything else. They are carried either at **historical cost** or at a **current value**.

| | Monetary | Non-monetary |
| --- | --- | --- |
| **Assets** | Cash, accounts receivable | At current value: marketable securities (FVPL). At historical cost: inventory, PP&E, intangible assets |
| **Liabilities** | Accounts payable, accrued expenses, long-term debt, deferred tax liabilities | Deferred revenue (almost every other liability is monetary) |

It is used when the **functional currency is the same as the presentation currency, but different from the local currency**: the subsidiary is an extension of the parent, so its statements are remeasured as if the parent had made each transaction itself.

**Rates under the temporal method.**

1. **Assets and liabilities**
   1. **Monetary** assets and liabilities: the **current** rate.
   2. **Non-monetary** items measured at **historical cost**: the **historical** rate when the item was acquired.
   3. **Non-monetary** items measured at **current value**: the rate on the date that **current value was determined**.
2. **Stockholders' equity**: the **historical** rate, **except retained earnings**, which is built up from net income and dividends.
3. **Revenues and expenses**
   1. Most revenues and expenses: the **average** rate.
   2. Expenses related to **non-monetary assets**, such as **COGS, depreciation and amortization**: the rate used to translate the **related asset** (its historical rate).

**The remeasurement gain or loss goes to net income**, not to equity. The B/S is remeasured first and retained earnings is the balancing figure. The net income it implies, less the income from the remeasured I/S, gives the remeasurement gain or loss.

**Exposure is the net monetary position.** Only monetary items are at the current rate, so a subsidiary with **net monetary liabilities** gains when the foreign currency **depreciates**, and one with **net monetary assets** loses.

The historical rates used for **inventory and COGS** depend on the cost-flow assumption:

* **FIFO**: ending inventory is the newest purchases, so it is at **more recent** rates; COGS is at **older** rates.
* **LIFO**: the reverse. Ending inventory is at **older** rates, and COGS at more recent rates.
* **Weighted average**: both at the weighted-average rate of the purchases.

**Example (temporal method, same subsidiary).** Suppose instead that the subsidiary's functional currency is the **USD**. Its EUR statements are as above, with expenses of EUR 800 made up of COGS 500, depreciation 100 and other expenses 200. The PP&E was bought on January 1 (rate 1.20), the goods sold were bought at an average of 1.18, and the ending inventory at 1.12.

| Balance sheet | EUR | Rate | USD |
| --- | ---: | ---: | ---: |
| Cash (monetary) | 300 | 1.10 current | 330 |
| Inventory (historical cost) | 400 | 1.12 historical | 448 |
| PP&E (historical cost) | 900 | 1.20 historical | 1,080 |
| **Total assets** | **1,600** | | **1,858** |
| Liabilities (monetary) | 450 | 1.10 current | 495 |
| Common stock | 1,000 | 1.20 historical | 1,200 |
| **Retained earnings** (plug) | 150 | | **163** |

| Income statement | EUR | Rate | USD |
| --- | ---: | ---: | ---: |
| Revenue | 1,000 | 1.15 average | 1,150 |
| COGS | (500) | 1.18 historical | (590) |
| Depreciation | (100) | 1.20 historical | (120) |
| Other expenses | (200) | 1.15 average | (230) |
| Income before remeasurement | | | 210 |
| **Remeasurement gain** | | | **9** |
| **Net income** | **200** | | **219** |

Net income must be $163+56=219$ (ending RE plus dividends, since beginning RE is zero), so the remeasurement gain is $219-210=9$. The subsidiary has **net monetary liabilities** ($300-450=-150$ euros) and the euro **depreciated**, so the remeasurement is a **gain**, and it goes to **net income**.

| | Current rate method | Temporal method |
| --- | ---: | ---: |
| Net income | 230 | 219 |
| Total assets | 1,760 | 1,858 |
| Translation adjustment | CTA $-109$, in OCI | Remeasurement gain $+9$, in NI |
| Exposure | Net assets (EUR 1,150) | Net monetary liabilities (EUR 150) |

The same subsidiary and the same exchange rates give a **loss in equity** under the current rate method and a **gain in net income** under the temporal method. The functional currency, a management judgment, decides which one the parent reports.

#### Balance Sheet Exposure

Items translated at the **current** exchange rate are revalued every reporting period as the rate moves, so they are **exposed** to translation adjustments. Items translated at **historical** rates are not: their translated amount never changes. Balance sheet (translation) exposure is the difference between the exposed assets and the exposed liabilities:

* **Net asset exposure**: exposed assets exceed exposed liabilities.
* **Net liability exposure**: exposed liabilities exceed exposed assets.

This is the translation counterpart of the [transaction exposure](#foreign-currency-transactions) on a single receivable or payable:

| Balance sheet exposure | Foreign currency (FC) strengthens | Foreign currency (FC) weakens |
| --- | --- | --- |
| **Net asset** | Positive translation adjustment | Negative translation adjustment |
| **Net liability** | Negative translation adjustment | Positive translation adjustment |

**Which items are exposed depends on the method:**

| | Current rate method | Temporal method |
| --- | --- | --- |
| **Exposed items** | **All** assets and liabilities | Only **monetary** assets and liabilities (and non-monetary items at current value) |
| **Usual exposure** | **Net asset**: assets − liabilities = equity, which is positive for any solvent subsidiary | Usually **net liability**: monetary liabilities (payables, debt) tend to exceed monetary assets (cash, receivables), because inventory and PP&E are at historical rates |
| **FC strengthens** | Positive adjustment: the **CTA increases** (OCI) | Usually a **remeasurement loss** (NI) |
| **FC weakens** | Negative adjustment: the CTA decreases | Usually a **remeasurement gain** (NI) |

In the euro example above, the euro **weakened**: under the current rate method the net asset exposure of EUR 1,150 gave a CTA of $-109$, while under the temporal method the net monetary liability exposure of EUR 150 gave a remeasurement **gain** of $+9$.

> [!Note]
>
> The method can **reverse the sign** of the effect. A parent can reduce its exposure by matching the subsidiary's exposed assets with exposed liabilities, e.g., by financing it with debt in the foreign currency: a **balance sheet hedge**.

### Highly Inflationary Environment

**Definition.** US GAAP defines a **highly inflationary** economy as one with **cumulative inflation of about 100% or more over three years** (roughly 26% a year). IFRS has no bright line: it lists indicators, such as people preferring to hold their wealth in a stable foreign currency, with a three-year cumulative rate approaching or exceeding 100% as one of them.

**The problem.** In a highly inflationary economy the local currency loses value quickly against stable currencies. If the subsidiary's historical-cost assets were simply translated at the **current rate**, they would shrink in the parent's currency every year, even though the assets themselves are unchanged: the **"disappearing plant" problem**. For this reason, the functional currency **no longer decides** the method, and translating directly with the current rate method is **not allowed**.

| | IFRS (IAS 29) | US GAAP |
| --- | --- | --- |
| **Step 1** | **Restate** the local-currency statements for local inflation, using a general price index | No restatement for inflation |
| **Step 2** | **Translate** all items at the **current** exchange rate | **Temporal method**, as if the parent's currency were the functional currency |
| **Gain or loss** | **Net purchasing power gain or loss**, in net income | Remeasurement gain or loss, in net income |

**How the IFRS restatement works.**

* **Non-monetary items** (inventory, PP&E, equity) are restated by the change in the price index from the **date they were acquired** (or contributed) to the **balance sheet date**.
* **Monetary items** (cash, receivables, payables, debt) are **not restated**: they are already in current purchasing power.
* **Income statement items** are restated from the date of each transaction to the balance sheet date.
* Holding monetary **assets** during inflation loses purchasing power; owing monetary **liabilities** gains it. The net amount is the **purchasing power gain or loss**, in net income.

This is why the restatement is **similar to the temporal method**: in both, non-monetary items keep their value and only the net monetary position produces a gain or loss.

**Example (restatement, illustrative).** On January 1, a US parent sets up a subsidiary in a highly inflationary economy with share capital of LC 1,500, invested in land (LC 1,000) and cash (LC 500). There are no transactions during the year. The general price index doubles from 100 to 200, and the local currency halves in value, from USD 1.00 to USD 0.50 per LC.

IFRS restates the non-monetary items by $200/100=2$ and translates everything at the current rate of 0.50. US GAAP uses the temporal method: cash at the current rate (0.50), land and share capital at the historical rate (1.00).

| December 31 | LC | IFRS: restated LC | IFRS: USD | US GAAP: USD |
| --- | ---: | ---: | ---: | ---: |
| Cash (monetary) | 500 | 500 | 250 | 250 |
| Land (non-monetary) | 1,000 | 2,000 | 1,000 | 1,000 |
| **Total assets** | **1,500** | **2,500** | **1,250** | **1,250** |
| Share capital | 1,500 | 3,000 | 1,500 | 1,500 |
| **Loss in NI** | — | **(500)** | **(250)** | **(250)** |

* **Land keeps its value**: USD 1,000 under both standards. Translating the unrestated LC 1,000 at the current rate would have shown only USD 500, the disappearing plant.
* **Cash loses value**: holding LC 500 while prices double loses LC 500 of purchasing power, which is USD 250 at the current rate. The temporal method gives the same loss, because the exchange rate fell in line with inflation.

### Analytical Issues

Translation changes the **ratios** an analyst computes from the consolidated statements. The effect depends on whether a ratio's numerator and denominator are translated at the **same** rate.

**Under the current rate method**, every B/S item is at the current rate and every I/S item at the average rate:

| Ratio type | Ratio | Formula | Effect when the LC depreciates | Why |
| --- | --- | --- | --- | --- |
| Pure B/S | **Current ratio** | Current assets / current liabilities | Same | Both at the current rate |
| Pure B/S | **Financial leverage** | Total assets / equity, or debt / equity | Same | Equity is the plug, so it equals net assets at the current rate |
| Pure I/S | **Net profit margin** | NI / revenue | Same | Both at the average rate |
| Mixed | **Asset turnover** | Revenue / total assets | **Higher** | I/S item at the average rate over a B/S item at the lower current rate |
| Mixed | **ROA** | NI / total assets | **Higher** | Same reason |
| Mixed | **ROE** | NI / equity | **Higher** | Same reason |

A mixed ratio is the LC ratio scaled by $\frac{\text{Average rate}}{\text{Current rate}}$. When the LC **depreciates** over the year, the current rate is below the average rate, so mixed ratios rise; when it **appreciates**, they fall. In the [euro example](#current-rate-method) (average 1.15, current 1.10), asset turnover rises from $1{,}000/1{,}600=0.625$ in EUR to $1{,}150/1{,}760=0.653$ in USD, while the net profit margin stays at $200/1{,}000=230/1{,}150=20\%$.

**Under the temporal method** each item uses its own rate, so the effect on each ratio must be **worked out case by case**. Comparing the two methods when the **LC depreciates** (historical rates above the average rate, above the current rate):

| Ratio | Formula | Which method gives the higher ratio | Why |
| --- | --- | --- | --- |
| **Current ratio** | Current assets / current liabilities | **Temporal** | Inventory is at the higher historical rate under the temporal method; everything else is at the current rate under both |
| **Quick ratio** | (Cash + receivables + marketable securities) / current liabilities | Same | All monetary, so at the current rate under both |
| **Receivables turnover** | Revenue / receivables | Same | Revenue at the average rate and receivables at the current rate under both |
| **Fixed asset turnover** | Revenue / fixed assets | **Current rate** | Fixed assets are at the higher historical rate under the temporal method, so the denominator is larger |
| **Gross profit margin** | (Revenue − COGS) / revenue | Uncertain | COGS is at historical rates under the temporal method; which rates depends on FIFO, LIFO or average cost |
| **Inventory turnover** | COGS / inventory | Uncertain | Both are at historical rates under the temporal method, but from different periods |
| **Interest coverage** | EBIT / interest expense | Uncertain | EBIT includes COGS and depreciation at historical rates under the temporal method |
| **Net margin, ROA, ROE** | NI / revenue, assets or equity | Uncertain | Temporal NI includes the remeasurement gain or loss, which can go either way |

In the euro example, with all liabilities taken as current: the current ratio is $770/495=1.56$ under the current rate method and $778/495=1.57$ under the temporal method; fixed asset turnover is $1{,}150/990=1.16$ versus $1{,}150/1{,}080=1.06$; and the gross margin is $50.0\%$ versus $48.7\%$ (COGS 575 at the average rate vs 590 at historical rates).

> [!Note]
>
> When the LC **appreciates**, every "higher" in the comparison above becomes "lower". Before comparing a multinational with a domestic peer, check which method each subsidiary uses and which way its currency moved.

#### Effective Tax Rates

A multinational pays tax in several jurisdictions, so its **effective tax rate** (income tax expense / pre-tax income) is a weighted average of the rates it faces. The **tax rate reconciliation** in the notes explains the gap between the parent's statutory rate and the effective rate, including the effect of foreign tax rates.

Changes in the effective tax rate due to foreign taxes can come from:

* **Changes in the applicable tax rates** in the jurisdictions where the company operates
* **Changes in the mix of profits** earned in different jurisdictions: more profit in low-tax countries lowers the effective rate even if no tax rate changes

When forecasting the tax rate, forecast **where** the profits will be earned, not only how much. A falling effective rate driven by a shift of profits to low-tax jurisdictions may not be sustainable, for example if tax rules change.

#### Disclosure Related to Sales Growth

Reported sales growth of a multinational mixes two things: the change in sales in local currencies, and the change in the exchange rates used to translate them. Companies therefore often disclose growth **excluding** the currency effect, as **organic** or **constant-currency** growth:

$$(1+\text{Reported growth})=(1+\text{Growth in local currency})\times(1+\text{Currency effect})$$

**Example.** Sales grow 5% in local currency, and the foreign currencies strengthen 3% against the presentation currency: reported growth is $1.05\times1.03-1=8.15\%$. Of that, only the 5% reflects **real performance** (volume and price); the rest is outside management's control and can reverse next year.

Analysts should base forecasts and comparisons on growth **net of exchange rate effects**, and treat the currency effect separately. Some companies also disclose sales growth split into **volume, price and currency**; companies with a strong currency tailwind may stress reported growth instead.
