# Analysis of Dividends and Share Repurchases

How companies pay out cash (dividends and buybacks), the theories of why payout policy might matter, what buybacks do to EPS and book value, and how to tell whether a dividend is safe.

| Term | Meaning |
| --- | --- |
| **Dividend** | A distribution declared by the board (shareholders must also approve in most of Europe, not in the US). It is **discretionary**, unlike bond interest |
| **Ex-dividend date** | The first day the share trades **without** the right to the dividend; the price drops by about the dividend |
| **Payout policy** | How a company distributes cash: dividends **and** share repurchases |
| **Dividend payout ratio** | Common dividends ÷ net income available to common shareholders |

Dividends are a large part of total return: the S&P 500 returned 10.0% a year from 1926 to 2018 with dividends reinvested, against 5.9% from price changes alone.

## Forms of Dividends

**Cash dividends**

* **Regular**: paid on a schedule (quarterly in the US and Canada, semiannually in Japan and Australia, annually in Germany). Companies try to keep or raise them and avoid cutting for temporary problems; an unexpected increase is usually good news.
* **Special (extra)**: paid on top of regular dividends, or by a company that doesn't pay regularly, after a strong year or a one-off event (e.g., Tencent after the Tencent Music IPO). Common for **cyclical** companies: a small regular dividend plus an extra one in good years.
* **Liquidating**: paid when a company winds up, sells part of its business and pays out the proceeds, or pays more than its accumulated retained earnings. It is a **return of capital**, not a distribution of earnings.

**Stock dividends, splits and reverse splits**

* **Stock dividend** (bonus issue): extra shares instead of cash, typically 2–10% of shares outstanding.
* **Stock split**: e.g., 2-for-1. **Reverse split**: e.g., 1-for-20.

$$
\begin{aligned}
\text{Payout ratio}&=\frac{DPS}{EPS}\\
\text{Extra dividend}&=DPS-\text{Minimum payout}\times EPS
\end{aligned}
$$

#### Example: AfriSage (Extra Dividend)

AfriSage's policy is an ordinary dividend of at least 35% of net income.

| | 2017 | 2018 |
| --- | ---: | ---: |
| EPS (ZAR) | 12.65 | 14.23 |
| DPS (ZAR) | 10.68 | 7.61 |
| Payout | $10.68/12.65=$ **84.4%** | $7.61/14.23=$ **53.5%** |

**Extra dividend in 2018.**

$$
\begin{aligned}
\text{Minimum ordinary}&=0.35\times 14.23=4.98\\
\text{Extra}&=7.61-4.98=2.63
\end{aligned}
$$

**ZAR2.63** of the 2018 dividend is extra.

### Effect on Shareholder Wealth

* **Cash dividend**: the share price falls by the dividend, but the shareholder's wealth (share + cash) is unchanged, all else equal.
* **Stock dividend**: more shares, same wealth. The total cost basis is unchanged, so the cost **per share** falls: 100 shares at US\$10 become 105 shares after a 5% stock dividend, at $1{,}000/105=$ **US\$9.52** each. Generally not taxable. Claimed benefits: a larger float, better liquidity, and a price in an "optimal" trading range (often US\$20–80 in the US).
* **Split**: all per-share figures fall in proportion; P/E, dividend yield and market value are unchanged. A 2-for-1 split is economically a 100% stock dividend; only the accounting differs.
* **Reverse split**: fewer shares at a higher price, market value unchanged. Used to bring the price into a marketable range (listing minimums; institutions avoid stocks below US\$5); most common in or after financial distress.

| | Stock dividend | Stock split |
| --- | --- | --- |
| Total equity | Unchanged | Unchanged |
| Equity accounts | Retained earnings → contributed capital (new shares × price) | No change |
| Typical size | 2–10% | 2-for-1, 3-for-1 |

With a stock dividend of $d$ (e.g., 3%), or a split of $k$-for-1:

$$
\begin{aligned}
N_{\text{after}}&=N(1+d)&P_{\text{after}}&=\frac{P}{1+d}\\
N_{\text{after}}&=kN&P_{\text{after}}&=\frac{P}{k}
\end{aligned}
$$

#### Example: 3% Stock Dividend

A shareholder owns 10% of a company with 1,000,000 shares, EPS of US\$1.00 and a P/E of 20 (price US\$20).

| | Before | After a 3% stock dividend |
| --- | ---: | ---: |
| Shares outstanding | 1,000,000 | 1,030,000 |
| EPS | US\$1.00 | $1.00/1.03=$ US\$0.97 |
| Price (P/E 20) | US\$20.00 | $20/1.03=$ US\$19.42 |
| Holder's shares | 100,000 | 103,000 |
| **Holder's wealth** | **US\$2,000,000** | **US\$2,000,000** |

#### Example: 2-for-1 Split

| | Before | After |
| --- | ---: | ---: |
| Shares | 4m | 8m |
| Price | €40 | €20 |
| EPS | €1.50 | €0.75 |
| DPS | €0.50 | €0.25 |
| Dividend yield | $0.50/40=$ **1.25%** | $0.25/20=$ **1.25%** |
| P/E | $40/1.50=$ **26.7** | $20/0.75=$ **26.7** |

#### Example: Globus Maritime 1-for-10 Reverse Split

$$P_{\text{after}}=4.25\times 10=\text{US\$}42.50$$

The reverse split doesn't destroy wealth by itself: market cap is unchanged.

### Effect on Financial Ratios

A **cash** dividend takes cash out: assets and equity fall, so liquidity ratios fall and leverage ratios (D/A, D/E) rise. A **stock** dividend or split moves nothing out of the company: total assets and equity are unchanged; only the number of shares, the price and EPS change.

| | After a cash dividend | After a stock dividend / split |
| --- | --- | --- |
| Assets (cash) | Lower | Same |
| Equity | Lower | Same |
| Price | Lower | Lower |
| EPS | Same | Lower |
| P/E | Lower | Same |
| Liquidity ratios | Lower | Same |
| Leverage ratios | Higher | Same |

#### Example: Cash vs Stock Dividend

In US\$ millions: cash 200, other current assets 300, current liabilities 250, total assets 1,000, debt 400, equity 600; 100m shares at US\$20.

| Ratio | Before | After US\$100m cash dividend | After 5% stock dividend |
| --- | --- | --- | --- |
| Current ratio | 500/250 = 2.00 | 400/250 = **1.60** | 2.00 |
| Cash ratio | 200/250 = 0.80 | 100/250 = **0.40** | 0.80 |
| Debt/Equity | 400/600 = 0.67 | 400/500 = **0.80** | 0.67 |
| Debt/Assets | 400/1,000 = 0.40 | 400/900 = **0.44** | 0.40 |

The stock dividend moves 5m × US\$20 = US\$100m from retained earnings to contributed capital; equity stays 600. The price falls to 20/1.05 = US\$19.05, and market cap (105m × 19.05 ≈ US\$2,000m) is unchanged.

> [!IMPORTANT]
> Only **cash** dividends take cash out of the company. Stock dividends, splits and reverse splits cut the same pie into different slices: no change in wealth, total equity, liquidity or leverage (ignoring signaling).

#### Exam traps

* A stock dividend changes equity **accounts** but not **total** equity; a split changes no account.
* A stock dividend lowers the cost basis **per share**, not the total cost basis.
* Any dividend above accumulated retained earnings is a liquidating dividend (return of capital).

## Dividend Policy Theories

One theory says dividend policy doesn't matter (Miller–Modigliani); the others say it does.

| Theory | Claim | Effect of a higher dividend on value |
| --- | --- | --- |
| **MM irrelevance** | Perfect markets; investors can make "homemade" dividends | None |
| **Bird in the hand** | A dividend today is less risky than a future gain | Lower cost of equity → price ↑ |
| **Tax argument** | Dividends are taxed more than capital gains | Taxable investors prefer low payout or buybacks → price ↓ |

### Miller–Modigliani (1961)

MM assume **no taxes, no transaction costs, symmetric information**, and a given capital budget and capital structure. Then the dividend decision is independent of investment and financing decisions:

#### Example: MM Irrelevance

A company has 10,000 shares, free cash flow of A\$10,000 this year, and future cash flows worth A\$190,000.

$$P_0=\frac{10{,}000+190{,}000}{10{,}000}=\text{A\$}20$$

| Payout choice | Calculation | Holder's wealth per share |
| --- | --- | ---: |
| A\$1 dividend | Ex-dividend price $=190{,}000/10{,}000=$ A\$19, plus A\$1 cash | A\$20 |
| Repurchase | Buys $10{,}000/20=500$ shares; price $=190{,}000/9{,}500=$ A\$20 | A\$20 |
| **Homemade dividend** (none paid) | A holder of 1,000 shares wanting A\$1,000 sells $1{,}000/20=50$ shares | A\$20 |

MM say dividend **policy** is irrelevant, not dividends themselves. Real-world frictions break the argument: flotation costs (often 4–10% of capital raised), investors' transaction costs, and taxes.

### Bird in the Hand and Taxes

* **Bird in the hand**: a dividend today is worth more than an uncertain gain, so dividend payers have a lower cost of equity. MM's reply: paying a dividend doesn't change the risk of future cash flows.
* **Taxes**: where dividends are taxed more than capital gains, taxable investors prefer a low payout or buybacks (in the extreme, no dividends). In the US since 2012, qualified dividends and long-term gains are taxed at a maximum of 20%. In mainland China, there is no capital gains tax on shares, and dividends are taxed at 20%, 10% or 0% for holding periods under 1 month, 1 month to 1 year, and over 1 year.

### Signaling

Managers know more than investors, so dividends convey information.

* A cash signal is credible because it is **costly to mimic**: a company without rising cash flow can't keep raising its dividend (except briefly, by borrowing).
* **Initiation or increase** → positive: future earnings growth, excess returns on announcement. **Cut or omission** → negative. Keeping the dividend under stress signals that problems are temporary.
* Exceptions: a cut can be positive if the cash is reinvested or the cut looks prudent (Telstra 2017; BT 2018, shares +6.9%). A first dividend can signal confidence or maturity (eBay 2019).
* Consistent dividend raisers tend to have niche positions, less volatile earnings, high ROA and low debt.

#### Examples: Signaling

* **Oracle (2009)** initiated a dividend of about US\$1bn a year against US\$8bn of operating cash flow: read as a sign it could ride out the downturn.
* **A company with poor prospects** that raises its dividend to look good must later cut it or raise costly capital: the signal is costly to fake.

### Agency Costs

* **Managers vs shareholders**: dividends take free cash flow away from managers, who might overinvest in negative-NPV projects (empire building): Jensen's **free cash flow hypothesis**. The market reacts more to dividend changes where the risk of overinvestment is greater.
* **Shareholders vs bondholders**: large dividends move wealth to shareholders and raise default risk, which can lead to underinvestment. Bond covenants cap cumulative distributions and set coverage or leverage limits.

#### Examples: Agency Costs

* **Two all-equity rivals**, both with about a 35% payout: the one with weaker governance (CEO = chair) and fewer good projects is pressed to pay more, to curb **overinvestment**.
* **Utilities** pay high dividends and then issue equity: costly, but the equity market then monitors managers and regulators.

> [!IMPORTANT]
> Dividends **reduce** the manager–shareholder agency cost (overinvestment) but **increase** the shareholder–bondholder conflict (underinvestment, default risk). Don't swap them.

#### Exam traps

* MM assume no taxes, no transaction costs and symmetric information; they don't assume investors prefer dividends.
* The tax argument favors **low** payout when dividends are taxed more than gains.
* A cut is usually, but not always, negative.

In theory, reinvestment opportunities should drive payout: young, fast-growing companies pay little and mature ones pay more. The evidence on whether payout affects value is inconclusive, so the analyst should at least check that a company's policy fits its opportunities and its legal and financial environment.

## Factors Affecting Dividend Policy in Practice

Once markets are imperfect, investment, financing and dividend decisions are no longer independent.

| Factor | Effect on payout |
| --- | --- |
| **Investment opportunities** | More profitable projects → **lower** payout (internal funds are cheaper). Fast-moving industries (tech) pay little; companies with few opportunities (utilities) pay more |
| **Volatility of future earnings** | More volatile earnings → smaller, less frequent increases |
| **Financial flexibility** | A need for cash → lower dividends, or buybacks (no commitment) |
| **Taxes** | See [Tax Considerations](#tax-considerations) |
| **Flotation costs** | New equity costs more than retained earnings, so avoid dividends that force share issues; worse for small companies |
| **Contractual and legal restrictions** | Mandatory dividends (Brazil), impairment-of-capital rules (US, Canada), bond covenants, preferred dividends (cumulative arrears first) |

Surveys show that managers set a target payout on **long-run sustainable earnings**, focus on **changes** rather than levels, and avoid increases they might have to reverse: **dividend smoothing**. Skanska made a 30% "precautionary" cut in 2019 to keep flexibility; its shares fell 9%, then rose to 7% above the pre-announcement level within two months.

#### Examples: Policy Factors

| Company | Facts | Decision and main factors |
| --- | --- | --- |
| **Boar's Head** | Operating cash flow £500m vs £800m of positive-NPV projects; debt already above average | **No dividend initiation**: investment opportunities come first, and it wouldn't issue shares just to pay dividends |
| **Makinasi Appliances** | Expected losses, falling sales, a US\$50m bond issue and a downgrade | Cuts the quarterly dividend from US\$1.60 to US\$0.70: **earnings volatility** and **financial flexibility**, plus flotation costs |

## Tax Considerations

### Double Taxation

Corporate earnings are taxed at the company, and then again at the shareholder when paid out as dividends:

$$
\begin{aligned}
Div_{net} ={}& EBT\times \text{payout}\\
&\times(1-t_{c})(1-t_{i})
\end{aligned}
$$

$$
t_{\text{eff}} = 1-(1-t_{c})(1-t_{i})
$$

where $t_c$ is the corporate rate, $t_i$ the individual's dividend tax rate, and $t_{\text{eff}}$ the effective tax rate. For example, US\$100 pretax, all paid out, at 35% corporate and 15% personal tax:

$$
\begin{aligned}
Div_{net}&=100\times(1-0.35)(1-0.15)=55.25\\
t_{\text{eff}}&=1-0.65\times 0.85=44.75\%
\end{aligned}
$$

### Dividend Imputation

Distributed profits are taxed only once, at the **shareholder's** rate (Australia, New Zealand). The shareholder receives a **franking credit** for the corporate tax already paid, so the effective tax rate is just $t_i$:

$$
\begin{aligned}
Div_{net}&=EBT\times \text{payout}\times(1-t_{i})\\
\text{Personal tax due}&=t_i\times EBT-\text{Franking credit}
\end{aligned}
$$

For example, A\$100 pretax at 30% corporate tax, with the 70 paid out and a franking credit of 30:

| Shareholder's rate | Tax due | Effective rate |
| ---: | --- | ---: |
| 15% | $15-30=$ **(15)**, a refund | **15%** |
| 47% | $47-30=$ **17** | **47%** |

### Split-Rate

Earnings paid out as dividends are taxed at a **lower** corporate rate than retained earnings, then taxed again as ordinary income: still double taxation, but with $t_{c,\text{dist}}<t_{c,\text{retained}}$:

$$
t_{\text{eff}} = t_{c,\text{dist}}+(1-t_{c,\text{dist}})\,t_{i}
$$

For example, earnings paid out are taxed at 20% (retained at 35%), and the shareholder's rate is 35%:

$$
\begin{aligned}
Div&=100\times(1-0.20)=80\\
Div_{net}&=80\times(1-0.35)=52\\
t_{\text{eff}}&=0.20+0.80\times 0.35=48\%
\end{aligned}
$$

#### Example: The Three Systems with the Same Inputs

€100 pretax, all paid out; the corporate rate is 30% (20% on distributed earnings under split-rate), and the shareholder's dividend rate is 40%.

| System | Corporate tax | Dividend | Personal tax | Investor keeps | Effective rate |
| --- | --- | --- | --- | --- | --- |
| Double taxation | 30 | 70 | 0.40 × 70 = 28 | 42 | **58%** |
| Imputation | 30 | 70 | 0.40 × 100 − 30 credit = 10 | 60 | **40%** |
| Split-rate (20% paid out / 30% retained) | 20 | 80 | 0.40 × 80 = 32 | 48 | **52%** |

### Shareholder Preferences

* Investors want a lower tax **rate** on dividends; whether they prefer a higher or lower **payout** depends on dividend vs capital gains tax rates.
* Capital gains tax can be **deferred** until the sale; dividend tax is due when received, even if reinvested. A step-up in basis at death (US, Australia) also favors gains.
* **Tax-exempt** investors (pension funds, endowments) are indifferent; high-payout shares may sit in tax-exempt accounts.
* Global investors also face foreign withholding taxes (usually creditable at home under a tax treaty).

#### Exam traps

* Double taxation: the personal tax applies to the **after-corporate-tax** dividend.
* Imputation: the effective rate is the shareholder's rate; low-bracket investors can get a **refund**.
* Split-rate: use the **lower** corporate rate on distributed earnings.

## Dividend Payout Policy

### Stable Dividend Policy

The **most common** policy: dividends follow long-term sustainable earnings and ignore short-term swings (e.g., Gruppo Hera raised its DPS steadily while its payout ranged from about 52% to 125%). Lintner (1956) found that companies set a **target payout ratio** on sustainable earnings, care about dividend **changes**, and cut only in extreme cases. The **target payout adjustment model**:

$$
E(Div) = Div_{t-1}+\Delta Div
$$

$$
\Delta Div=\frac{E(EPS)\times \text{Target}-Div_{t-1}}{N}
$$

where Target is the target payout ratio, and $N$ is the number of years over which the dividend moves to its target, so the adjustment factor is $1/N$.

#### Example: Target Payout Adjustment

Last year's dividend was US\$0.40; the target payout is 50% and the adjustment factor 0.2 (5 years).

| Year | EPS | Target dividend | Increase | Dividend |
| --- | ---: | ---: | --- | ---: |
| 1 | 1.50 | $0.50\times 1.50=0.75$ | $(0.75-0.40)\times 0.2=$ **0.07** | 0.47 |
| 2 | 1.34 | $0.50\times 1.34=0.67$ | $(0.67-0.47)\times 0.2=$ **0.04** | 0.51 |

In Year 2, EPS falls but the dividend still rises, because it is below target.

#### Example: Luna Inc.

Last year's dividend was US\$0.40 (a 20% payout). Expected EPS is US\$2.80, the target payout 30%, and the adjustment period 4 years.

$$
\begin{aligned}
E(Div)&=0.40+\frac{0.30\times 2.80-0.40}{4}=0.40+\frac{0.44}{4}=0.51\\
\text{Payout}&=\frac{0.51}{2.80}=18.2\%
\end{aligned}
$$

The dividend rises to **US\$0.51**, but the payout **falls** to 18.2%: earnings grew faster than the dividend.

### Constant Payout Ratio Policy

Pay a fixed share of earnings. It is used infrequently, because the dividend then swings with earnings.

$$Div=\text{Payout ratio}\times NI$$

#### Example: Pampas Fertilizer

Pampas switched from a fixed ARS1.50 a quarter to 25% of quarterly earnings. In 2019:Q4, EPS was 9.32:

$$DPS=0.25\times 9.32=\text{ARS}2.33$$

#### Example: Same Earnings, Two Policies

Last year EPS was US\$2.00 and DPS US\$0.80. The payout (or target) is 40%, and the adjustment factor 0.5.

| Year | EPS | Constant payout | Stable (target adjustment) | Stable payout |
| --- | --- | --- | --- | --- |
| 1 | 3.00 | 1.20 | 0.80 + (1.20 − 0.80) × 0.5 = **1.00** | 33.3% |
| 2 | 2.60 | 1.04 | 1.00 + (1.04 − 1.00) × 0.5 = **1.02** | 39.2% |
| 3 | 3.40 | 1.36 | 1.02 + (1.36 − 1.02) × 0.5 = **1.19** | 35.0% |

The constant-payout dividend falls in year 2; the stable dividend rises every year, even when EPS falls.

| | Stable dividend | Constant payout ratio |
| --- | --- | --- |
| Based on | Long-term sustainable earnings | Current earnings |
| Dividend volatility | Low | High |
| Payout ratio | Varies | Fixed |
| Use in practice | **Most common** | Infrequent |

#### Exam traps

* Apply the adjustment factor to the **gap** (target − last dividend), then add it to the last dividend. Factor = **1/years**.
* If the target is below the last dividend, the formula cuts it, though in practice companies prefer to hold the dividend.

### Global Trends

* The **share of companies paying** dividends has declined over the long term in most developed markets (US, Canada, EU, UK, Japan); US indexes have fewer payers than European ones.
* **Total** dividends and payout ratios have generally risen: dividends are concentrated in fewer, larger, more profitable companies with fewer growth opportunities. Asia-Pacific dividends tripled from 2009 to 2019.
* **Repurchases** are rising: in the US since the early 1980s, in the UK and Europe since the early 1990s, and in Asia (China, Japan) in the late 2010s.
* Better governance and disclosure (IFRS, investor protection) → **fewer** initiations and less generous payouts, because dividends matter less as a signal and as an agency control.

## Share Repurchases

A **share repurchase** is a company buying back its own shares. Shares held by the company are **treasury shares** (they can be reissued; canceled shares are retired); they get no dividends and no votes, and are excluded from EPS.

| | Cash dividend | Share repurchase |
| --- | --- | --- |
| Commitment | Declaration **commits** the company | Authorization **doesn't** commit it |
| Distribution | **Pro rata** to all holders | Only sellers get cash |
| Expected to continue | Yes (regular) | Generally no |

Many markets limit buybacks more than the US (shareholder approval, often a 10% cap). US buybacks grew after SEC Rule 10b-18 (1982).

### Repurchase Methods

* **Open market**: buy shares on the market; flexible in timing and amount.
* **Fixed price tender offer**: offer to buy a fixed number of shares at a fixed price, usually at a premium; if oversubscribed, shares are bought pro rata.
* **Dutch auction**: shareholders bid prices; the company finds the **lowest** price at which it can buy the target number of shares, and pays that same clearing price to every accepted bid.
* **Direct negotiation**: buy from a specific large holder, often at a premium (or at a discount if the seller needs liquidity).

| Method | Cost | Flexibility | Speed |
| --- | --- | --- | --- |
| **Open market** (most common; almost the only method outside the US and Canada) | Low if well timed | **Highest**: no obligation to finish | Slow |
| **Fixed price tender** | Higher (premium; may be a positive signal) | Low | **Fastest** |
| **Dutch auction** | Usually **lower** than a fixed price tender | Low | Fast, usually a bit slower than fixed price |
| **Direct negotiation** (remove a large holder, block an activist, greenmail) | A premium **transfers wealth** from remaining holders | n/a | n/a |

#### Example: BCII

BCII wants to buy back 5m shares; the price is C\$37.

| Method | Price paid | Cost |
| --- | ---: | ---: |
| Fixed price tender | C\$40 | $5\text{m}\times 40=$ **C\$200m** |
| Dutch auction | C\$38 (clearing price) | $5\text{m}\times 38=$ **C\$190m** |

The Dutch auction saves **C\$10m**.

### Effect on EPS

$$
EPS_{\text{after}} = \frac{E - C}{N_{\text{after}}}
$$

where $E$ is earnings before the buyback, $C$ the after-tax cost of the funds used (interest on new debt, or interest income given up on cash), and $N_{\text{after}}$ the shares outstanding after the buyback.

* **Funded with surplus cash**: assets and equity fall, so leverage rises. EPS rises only if the cash would not have earned its cost of capital (e.g., idle cash).
* **Funded with debt**: debt rises and equity falls, so leverage rises more. EPS **rises if the earnings yield (E/P) exceeds the after-tax cost of debt**, and falls otherwise. Note $E/P = 1/(P/E)$.

#### Example: Takemiya (Surplus Cash)

Takemiya has 10m shares, NI ¥100m and a price of ¥120. It uses ¥240m of surplus cash, earning about 0, to buy back shares at ¥140.

$$
\begin{aligned}
N_{\text{bought}}&=\frac{240}{140}=1.714\text{m}\\
EPS_{\text{after}}&=\frac{100-0}{10-1.714}=\frac{100}{8.286}=12.07
\end{aligned}
$$

EPS rises from ¥10.00 to about **¥12.07** (+20%).

#### Example: Selamat (Debt-Funded)

Selamat has 2.2m shares at MYR60 and earnings of MYR6.6m (EPS MYR3, E/P = 3/60 = 5%). It borrows MYR12m to buy back $12/60=0.2$m shares, leaving 2.0m.

| After-tax cost of debt | Calculation | EPS after | vs E/P |
| ---: | --- | ---: | --- |
| 5% | $(6.6-0.05\times 12)/2.0$ | **MYR3.00** (unchanged) | Equal |
| 6% | $(6.6-0.06\times 12)/2.0$ | **MYR2.94** (lower) | Above E/P |

#### Example: Surplus Cash That Earns Interest

NI is US\$50m on 10m shares (EPS US\$5.00); at US\$50 a share, E/P is 10%. The company spends US\$100m of cash to buy back 2m shares, leaving 8m, and gives up the interest the cash was earning.

| After-tax return on the cash | Interest lost | EPS after | Effect |
| ---: | ---: | ---: | --- |
| 4% | 4 | $46/8=$ **US\$5.75** | Up |
| 10% | 10 | $40/8=$ **US\$5.00** | Unchanged |
| 12% | 12 | $38/8=$ **US\$4.75** | Down |

The E/P test works for cash too: EPS rises when the after-tax return given up is below E/P.

> [!IMPORTANT]
> **Higher EPS ≠ higher shareholder wealth.** The same cash could be paid as a dividend, and any capital gain may just replace the dividend given up. More leverage also raises the required return.

### Effect on Book Value per Share

$$
BVPS_{\text{after}} = \frac{\text{Book equity} - \text{Buyback}}{N - N_{\text{bought}}}
$$

BVPS **falls** if the repurchase price is above the current BVPS, is unchanged if equal, and **rises** if below.

#### Example: Buyback Above and Below Book Value

Companies A and B each have 10m shares at US\$20 and spend US\$5m on a buyback: $5\text{m}/20=250{,}000$ shares, leaving 9.75m.

| | Book equity | BVPS before | BVPS after | Price vs BVPS |
| --- | ---: | ---: | --- | --- |
| A | US\$100m | 10 | $(100-5)/9.75=$ **US\$9.74** (down) | Above |
| B | US\$300m | 30 | $(300-5)/9.75=$ **US\$30.26** (up) | Below |

#### Exam traps

* Compare the **after-tax** cost of debt with **E/P**, not with the pretax rate or with P/E.
* Use shares **after** the buyback, and base the number of shares bought on the **repurchase price** (including any premium).
* Dutch auction: every accepted bidder receives the **same** clearing price.
* Open market = most flexible; fixed price tender = fastest; Dutch auction usually cheaper than a fixed price tender.

### Dividends and Buybacks Are Equivalent in Value

A repurchase is equivalent to a cash dividend of the **same amount** in its effect on shareholder wealth, all else equal (same **taxes** and same **information content**).

#### Example: Rohit Chemical

Rohit has 10m shares at Rs200 (market cap Rs2,000m) and distributes Rs500m.

| | Special dividend of Rs50 | Repurchase at Rs200 |
| --- | --- | --- |
| Shares after | 10m | $10-500/200=7.5$m |
| Price after | $(2{,}000-500)/10=$ **Rs150** | $1{,}500/7.5=$ **Rs200** |
| Wealth per share | $150+50=$ **Rs200** | **Rs200**, whether or not you sell |

#### Example: AfriCitrus (Buyback at a Premium)

AfriCitrus has 10m shares at ZAR200. It buys ZAR500m of shares from one holder at ZAR250: $500/250=2$m shares.

$$P_{\text{after}}=\frac{2{,}000-500}{10-2}=\frac{1{,}500}{8}=187.50$$

The remaining holders lose $200-187.50=$ **ZAR12.50** a share, transferred to the seller.

## Dividends vs Share Repurchases

Repurchase announcements are followed by positive excess returns, at announcement and for two (some studies say five) years, consistent with managers buying when shares are undervalued.

| Reason to repurchase | Explanation |
| --- | --- |
| **Tax advantages** | Where dividends are taxed more than gains; even at equal rates, gains tax can be deferred |
| **Price support / signaling** | Management can buy when shares look undervalued. Counter-view: may signal **no good investment opportunities** |
| **Flexibility** | No expectation of continuing, no obligation to finish; shareholders choose whether to sell |
| **Offset dilution from options** | Buy back the shares issued when options are exercised |
| **Raise leverage** | Debt-funded buybacks raise leverage more than cash-funded ones |

Raising EPS is a weak reason: the required return rises with leverage, and fewer shares don't change total free cash flow.

#### Example: Deira Oasis

In AED millions, debt is 30 and equity 70. Deira Oasis buys back AED7m of shares, funded by cash or by debt.

| | Before | All cash | All debt |
| --- | --- | --- | --- |
| Debt | 30 (30%) | 30 (32%) | 37 (37%) |
| Equity | 70 (70%) | 63 (68%) | 63 (63%) |
| Total | 100 | 93 | 100 |

Funded by cash, EPS rises, so equity is likely worth more than AED63m. Funded by debt with an after-tax cost above E/P, EPS falls, so equity is worth less than AED63m; with a downgrade, the debt's value also falls below 37, so the new weights are uncertain.

#### Example: ITOCHU (2018–19)

ITOCHU bought back 34,121,400 shares at an average ¥1,993, about ¥68bn, to reach an ROE of at least 13%.

#### Example: Buybacks Are Pro-Cyclical

| Russell 1000 | Dividends | Buybacks |
| --- | ---: | ---: |
| 2007 | US\$286bn | US\$680bn |
| 4Q08–3Q09 | US\$262bn | US\$223bn |

In the crisis, buybacks were cut much more than dividends: they substitute for special dividends.

#### Example: Shenzhen Medical Devices

After three years of buybacks, Shenzhen initiates a ¥0.40 dividend on EPS of ¥3.20, with a 25% target payout:

$$\text{Payout}=\frac{0.40}{3.20}=12.5\%$$

* The policy is a **stable dividend** with target payout adjustment.
* Reading the initiation as "we are no longer a growth company" is wrong: initiations are linked to **higher** future growth.
* A 2% stock dividend instead would not change wealth.

#### Exam traps

* Shareholders prefer buybacks when the capital gains tax rate is **below** the dividend tax rate.
* A buyback at the market price leaves the price unchanged; a cash dividend lowers it by the dividend; a premium buyback from one holder transfers wealth.
* Buybacks can signal undervaluation (positive) or a lack of opportunities (negative).

## Dividend Safety

$$
\begin{aligned}
\text{Payout ratio}&=\frac{\text{Dividends}}{\text{Net income}}\\
\text{Dividend coverage}&=\frac{\text{Net income}}{\text{Dividends}}\\
\text{FCFE coverage}&=\frac{FCFE}{\text{Dividends}+\text{Repurchases}}\\
FCFE&=CFO-FCInv+\text{Net borrowing}
\end{aligned}
$$

* A higher payout (lower coverage) means a higher risk of a cut. Large mature companies often target a **40–60%** payout, i.e., coverage of about **1.7×–2.5×**. Coverage near **1.0×** puts the dividend in jeopardy, unless the dip is a one-off.
* FCFE, not net income, funds dividends, and buybacks count as payout:

| FCFE coverage | Meaning |
| --- | --- |
| = 1 | Paying out all available cash |
| ≫ 1 | Building liquidity |
| ≪ 1 | **Not sustainable**: running down cash; will need equity or capex cuts |

#### Example: Mature European SA

NI is €100m and dividends €40m.

$$\text{Payout}=\frac{40}{100}=40\%\qquad\text{Coverage}=\frac{100}{40}=2.5\times$$

#### Example: Lygon Resources

In A\$ millions. E.g. 2015: FCFE = 837 − 554 − 120 = 163, and FCFE coverage = 163/(121 + 0) = 1.35×.

| | 2015 | 2016 | 2017 | 2018 |
| --- | --- | --- | --- | --- |
| Net income | 540 | 458 | 399 | 341 |
| CFO | 837 | 824 | 679 | 628 |
| FCInv | 554 | 417 | 296 | 327 |
| Net borrowing | (120) | (39) | 79 | (7) |
| Dividends | 121 | 256 | 277 | 323 |
| Repurchases | 0 | 105 | 277 | 0 |
| Payout | 22.4% | 55.9% | 69.4% | 94.7% |
| Coverage | 4.46× | 1.79× | 1.44× | 1.06× |
| FCFE | 163 | 368 | 462 | 294 |
| FCFE/(Div + Rep) | 1.35× | 1.02× | 0.83× | 0.91× |

Coverage fell to 1.06×, and FCFE coverage was below 1 in 2017–2018 (even with positive net borrowing in 2017) → stop buybacks and consider **cutting the dividend**.

**Warning signs** that a company may not sustain its dividend:

* A high payout (coverage near 1×) that is worsening, and high relative to peers or its history
* FCFE coverage below 1; payouts funded by **borrowing** or by **cutting productive capex**
* Above-average leverage
* A very high dividend yield relative to its own history (StarHub: 9.4% before its 2019 cut): a high yield is a warning, not a bargain; market prices may already signal an expected cut
* A record of past cuts (a record of stable or rising dividends is a plus)

#### Exam traps

* Coverage = NI/Div, the inverse of the payout ratio.
* FCFE coverage includes **repurchases** in the denominator; net borrowing is added (negative = repayment).
* Positive net borrowing raises FCFE, but it isn't a sustainable source of payouts.

> [!NOTE]
>
> **Textbook typos.** The Rohit Chemical solution once calls the company "WCII" (it means RCII). The ITOCHU exhibit prints the average price as "1.997" for ¥1,997. The split-rate exhibit is labeled "per €100" but starts from €200 pretax (€100 retained, €100 distributed); the 48% is per €100 allocated to dividends.
