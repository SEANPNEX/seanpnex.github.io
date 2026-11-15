---
title: 财务报表分析技术的综合运用
---

# 财务报表分析技术的综合运用

本单元把前面各单元的分析工具一步步应用到一家公司上，以回答一个投资问题。主要技术有：

* [扩展杜邦分析](#extended-dupont-equation)：是什么驱动了 ROE
* [资本配置决策](#capital-allocation-decisions)：公司把钱投向哪里
* [盈利质量](#earnings-quality)：盈利中有多少有现金支撑
* [现金流分析](#cash-flow-analysis)：营业利润转化为现金的程度
* [市值分解](#market-value-decomposition)：市场为业务的每一部分付了多少钱
* [表外融资](#off-balance-sheet-financing)：资产负债表上缺失的义务
* [会计准则变更](#changes-in-accounting-standards)：跨期可比性的中断

## 扩展杜邦分析 {#extended-dupont-equation}

**五因素（扩展）杜邦**分解把 ROE 拆为五个驱动因素：

$$
\text{ROE}=\frac{\text{NI}}{\text{EBT}}\times\frac{\text{EBT}}{\text{EBIT}}\times\frac{\text{EBIT}}{\text{Revenue}}\times\frac{\text{Revenue}}{\text{Average total assets}}\times\frac{\text{Average total assets}}{\text{Average equity}}
$$

$$
=\text{Tax burden}\times\text{Interest burden}\times\text{EBIT margin}\times\text{Asset turnover}\times\text{Financial leverage}
$$

前三个因素相乘得到**净利润率**（NI / 收入），前四个相乘得到 **ROA**。这一分解显示 ROE 的变化来自经营（利润率、周转率）、融资（利息负担、杠杆）还是税收。

**剥离联营企业。** 联营企业的收益（[权益法](M1%20Intercorporate%20Investments.md#equity-method-of-accounting)）由公司并不经营的资产赚取，可能扭曲对核心业务的判断。要看公司自身经营的 ROE，需从收益和资产两方面剔除联营企业：

* 从净利润中减去**联营企业收益**。
* 从总资产中减去**对联营企业的投资**。
* 保持**财务杠杆不变**，即假设联营企业的融资结构与公司其余部分相同。

这一调整不符合会计逻辑：调整后资产负债表不再平衡。它只是一种分析工具。

**例子。** 一家公司报告收入 1,000、EBIT 150、利息费用 20、EBT 130。按 30% 计税 39，因此联营企业前的净利润为 91。其应享联营企业收益（税后报告）为 9，因此净利润为 100。平均总资产为 1,250，其中对联营企业的投资为 125，平均权益为 500。

| 因素 | 报告值 | 剔除联营企业 |
| --- | ---: | ---: |
| 税负（NI / EBT） | $100/130=0.769$ | $91/130=0.700$ |
| 利息负担（EBT / EBIT） | $130/150=0.867$ | 0.867 |
| EBIT 利润率（EBIT / 收入） | $150/1{,}000=0.150$ | 0.150 |
| 资产周转率（收入 / 资产） | $1{,}000/1{,}250=0.800$ | $1{,}000/1{,}125=0.889$ |
| 财务杠杆（资产 / 权益） | $1{,}250/500=2.50$ | 2.50（不变） |
| **ROE** | **20.0%** | **20.2%** |

* 联营企业收益是税后的，因此位于 **EBT 之下**：它使报告的税负高于 $1-30\%=0.70$，让公司看起来比实际更具税收效率。
* 剔除联营企业后，资产周转率上升，ROE 小幅升至 20.2%。联营企业的投资回报只有 $9/125=7.2\%$，低于核心业务，因此它们**稀释**了 ROE。

## 资本配置决策 {#capital-allocation-decisions}

公司的**资本配置**（把资本花在哪里）必须与管理层的**战略**一致并为之服务。分部披露让分析师可以检验这一点，方法是比较每个分部在资本支出中的占比与其在资产中的占比：

$$\text{Capex ratio}=\frac{\text{Segment capex}\,/\,\text{Total capex}}{\text{Segment assets}\,/\,\text{Total assets}}$$

* **大于 1**：公司向该分部配置的资源**多于**其当前规模，即在扩张它。
* **小于 1**：配置得更少，即在收割或收缩它。

把该比率与各分部的**盈利能力**（如 EBIT / 分部资产）比较。资本应流向回报最高或增长前景最好的分部。

**例子。**

| 分部 | 资产占比 | 资本支出占比 | 资本支出比率 | EBIT / 资产 |
| --- | ---: | ---: | ---: | ---: |
| A | 50% | 40% | 0.80 | 15% |
| B | 30% | 25% | 0.83 | 8% |
| C | 20% | 35% | **1.75** | 12% |

公司扩张最快的是分部 C，尽管 A 的回报最高。只有当 C 的增长前景更好时这才合理，分析师应对照管理层公布的战略加以核实。B 的回报最低，但仍获得接近其占比的资本支出：它是重组或出售的候选对象。

## 盈利质量 {#earnings-quality}

盈利质量在 [M5 财务报告质量评估](M5%20Evaluating%20Quality%20of%20Financial%20Reports.md#quality-of-earnings)中有更深入的讨论。这里重点是衡量盈利中的**应计**部分。

**总应计项目**是盈利中没有现金支撑的部分：

$$\text{Aggregate accruals}=\text{Accrual-based earnings}-\text{Cash earnings}$$

用平均净经营资产标准化，就得到**应计比率**。**应计比率越低**，**盈利质量越高**，因为应计项目的持续性低于现金流。

可以用以下任一方法把盈利拆分为现金流和应计项目：

1. **资产负债表法**，或
2. **现金流量表法**。

**净经营资产（NOA）**是经营资产减去经营负债。这里的"经营"不包括融资项目，即现金和债务：

$$\text{NOA}=(\text{Total assets}-\text{Cash and short-term investments})-(\text{Total liabilities}-\text{Total debt})$$

**资产负债表法。** 应计项目是 NOA 的变化：

$$\text{AA}_{\text{B/S}}=\text{NOA}_t-\text{NOA}_{t-1},\qquad\text{Accruals ratio}_{\text{B/S}}=\frac{\text{AA}_{\text{B/S}}}{\overline{\text{NOA}}}$$

**现金流量法。** 应计项目是净利润中不能由经营和投资现金流解释的部分：

$$\text{AA}_{\text{CF}}=\text{NI}_t-(\text{CFO}_t+\text{CFI}_t),\qquad\text{Accruals ratio}_{\text{CF}}=\frac{\text{AA}_{\text{CF}}}{\overline{\text{NOA}}}$$

**例子。** NOA 从 1,000 升至 1,200，因此平均 NOA 为 1,100。净利润为 150，CFO 为 120，CFI 为 −100。

* 资产负债表法：$\text{AA}=1{,}200-1{,}000=200$，应计比率 $=200/1{,}100=18.2\%$
* 现金流量法：$\text{AA}=150-(120-100)=130$，应计比率 $=130/1{,}100=11.8\%$

两种方法很少得出相同的数字：收购、外币折算和非现金交易会改变 NOA，却不经过现金流量表。重要的是随时间变化的**趋势**以及与同行的比较，并始终使用同一种方法。

## 现金流分析 {#cash-flow-analysis}

**比较 CFO 与营业利润**可以检验利润转化为现金的程度。两者的计量方式不同：

* CFO 已经**扣除了支付的利息和税款**，而营业利润（EBIT）是息税前的。
* 为了同口径比较，要把**支付的现金利息和现金税款加回**到 CFO 中。

$$\text{Adjusted CFO}=\text{CFO}+\text{Cash interest paid}+\text{Cash taxes paid}$$

> [!Note]
>
> 在 IFRS 下，公司可以把支付的利息归入 **CFF**。这种情况下它从未从 CFO 中扣除，因此**不要加回**。调整之前先检查分类。

**比率**（与息税前指标比较时使用调整后 CFO）：

| 比率 | 显示什么 |
| --- | --- |
| **CFO / EBIT** | 营业利润的现金转化率；远低于 1 表明盈利没有转化为现金 |
| **CFO / 总资产** | 资产的现金回报，即现金版 ROA |
| **CFO / 支付的现金利息** | 以现金流计的利息保障倍数 |
| **CFO / 债务** | 以经营现金流偿还债务的能力 |
| **CFO / 资本支出** | 内部为投资融资的能力；大于 1 表示无需新融资即可支付资本支出 |

**例子。** EBIT 为 150，报告的 CFO 为 100，已扣除现金利息 20 和现金税款 30。调整后 CFO 为 $100+20+30=150$，因此 CFO / EBIT $=150/150=1.0$：营业利润完全有现金支撑。若使用未调整的 CFO，会得到 $100/150=0.67$，错误地暗示现金短缺。

## 市值分解 {#market-value-decomposition}

当联营企业**上市**时，市场会对它单独定价。从公司自身市值中减去其所持联营企业股份的市值，就得到市场对**母公司自身业务**的估值：

$$\text{Implied P/E of the parent excluding associates}=\frac{\text{Market value of the parent}-\text{Market value of the stake in associates}}{\text{NI}-\text{Share of associates' earnings}}$$

**例子。** 杜邦例子中的公司市值为 2,000，净利润为 100，P/E 为 20。其联营企业上市，市值 1,000，公司持股 30%：股份价值 300。其应享联营企业收益为 9。

$$\text{P/E excluding associates}=\frac{2{,}000-300}{100-9}=\frac{1{,}700}{91}=18.7$$

市场对联营企业股份的估值是盈利的 $300/9=33.3$ 倍，而对核心业务只有 18.7 倍。表面上 20 的 P/E 夸大了市场对公司自身经营的估值。

## 其他问题

### 表外融资 {#off-balance-sheet-financing}

**表外（OBS）融资**是任何像债务一样运作、却不作为负债出现的义务。自 IFRS 16 和 ASC 842 把大多数租赁纳入资产负债表以来，剩下的主要来源是：

* **采购承诺**，如照付不议合同
* 对其他主体债务的**担保**
* **未合并主体**，如负债沉重的合营企业和联营企业（见 [M1](M1%20Intercorporate%20Investments.md#joint-venture-and-spes-vies)）
* **附追索权出售的应收款**，公司仍承担信用风险

分析师在附注中找到这些项目，把义务的现值加到债务上，并在与同行比较之前重新计算杠杆和保障比率。

### 会计准则变更 {#changes-in-accounting-standards}

新的会计准则可能在业务毫无变化的情况下改变报告数字，从而破坏跨期比较。例如 IFRS 16 之后租赁进入资产负债表：资产和债务增加，**EBITDA 上升**，因为经营租赁费用被折旧和利息取代，而这两者都位于 EBITDA 之下。

当准则变更时，分析师应当：

* 阅读附注中的**过渡披露**，了解对各项目的影响
* 检查**以前期间是否重述**，还是变更只从采用日起适用
* **重述**以前期间或调整比率，使趋势反映业务而不是会计处理
