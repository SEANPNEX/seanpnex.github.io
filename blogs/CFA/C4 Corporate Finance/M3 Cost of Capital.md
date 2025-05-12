# Cost of capital

**Weighted Average Cost of Capital (WACC)**:
$$
WACC=w_dr_d(1-t)+w_pr_p+w_er_e
$$
where $t$ is tax rate.

* $r_d=r_f+\text{spread}$
* $r_e=r_f+(ERP+IRP)$
  * ERP: equity risk premium
  * IRP: idiosyncratic risk premium

## Cost of capital factors

| **Top-down, External**                            | **Bottom-up, Company specific**                 |
| ------------------------------------------------- | ----------------------------------------------- |
| Capital availability                              | Revenue, earnings and cash flow volatility      |
| Market conditions                                 | Asset nature and liquidity                      |
| Legal and regulatory considerations, country risk | Financial strength, profitability, and leverage |
| Tax jurisdiction                                  | Security features                               |

* Capital avaliability: Lower
* Market condition
  * Inflation: Higher
  * Receession: Higher
  * Expansion: Lower
  * Lower interest rante or exchange volatility: Lower
* Legal and regulatory: Greater, Lower
* Higher marginal income tax rate: Lower (look at formula, greater tax shield effect)

* Revenue, earning, and cash flow volatility:

| Factor                                  | **Cost of Capital** |
| --------------------------------------- | ------------------- |
| Higher stability in sales               | Lower               |
| Higher revenue concentration            | Higher              |
| Higher earnings predictability          | Lower               |
| Higher operating and financial leverage | Higher              |
| Higher ESG risk                         | Higher              |

* Asset nature and liquidity

| Factor                                | **Cost of Capital** |
| ------------------------------------- | ------------------- |
| Higher % of fungible, tangible assets | Lower               |
| Higher % of liquid assets             | Lower               |

* Financial strength

| Factor                              | **Cost of Capital** |
| ----------------------------------- | ------------------- |
| Higher profitability                | Lower               |
| Higher cash flow generation         | Lower               |
| Higher interest coverage, liquidity | Lower               |
| Higher leverage ratios              | Higher              |

* Security features

|                     | **Feature**                      | **Cost of Capital** |
| ------------------- | -------------------------------- | ------------------- |
| **Debt**            | Callability                      | Higher              |
|                     | Putability                       | Lower               |
|                     | Convertibility                   | Lower               |
| **Preferred stock** | Cumulative                       | Lower               |
| **Common stock**    | Inferior cash flow/voting rights | Higher              |

## Cost of Debt

* Traded debt: YTM
* Non-traded debt: Simiilar bond yield or maturity with credit rating. Without credit rating: synthetic credit ratings.

**Synthetic credit rating example**

| **Rating class** | **Interest Coverage Ratio** | **D/E**          |
| ---------------- | --------------------------- | ---------------- |
| AAA              | IC > 10 times               | D/E < 35%        |
| AA               | 8 < IC < 10                 | 35% < D/E < 40%  |
| A                | 5 < IC < 8                  | 40% < D/E < 42%  |
| BBB              | 3 < IC < 5                  | 42% < D/E < 44%  |
| BB               | 2 < IC < 3                  | 44% < D/E < 50%  |
| B                | 1.4 < IC < 2                | 50% < D/E < 60%  |
| CCC              | 1.0 < IC < 1.4              | 60% < D/E < 70%  |
| CC               | 0.6 < IC < 1.0              | 70% < D/E < 80%  |
| C                | 0.3 < IC < 0.6              | 80% < D/E < 100% |
| D                | IC < 0.3                    | D/E > 100%       |

* Bank loans: The latest interest rate. 

> [!note]
>
> Amortizing loans typically have lower cost of debt than non-amortizing

* Leases

  * Rate implicit in the lease (RIIL)

  With the following equation (considering financing lease)
  $$
  \text{PV of lease payment}+\text{PV of residual value to lessor}=\text{Fair value of leasedn asset}+\text{Lessor's direct initial cost}
  $$
  

  * Incremental borrowing rate (IBR): The rate of a collateralized loan over the same term

## Equity Risk Premium (ERP)

### Historical Approach

$$
ERP = r_m-r_f
$$

We can take multiple average from historical data to estimate future ERP.

**Key assumptions **:

* Returns are stationary
* Market are relatively efficient 
* Average return should be an unbiased estimate of expected returns in the long run

**Key decisions**:

* Selection of equity index
  * Typically broad-based, market-value-weighted indexes
* Selection fo time period

| Time Period         | **Advantages**                                   | **Disadvantages**                                            |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| Longer time period  | Fluctuating volatility has less effect           | *Not* representative of the *current market*                 |
| Shorter time period | Representative of the current market environment | Increases the likelihood of *greater noise* (covering only a portion of a business cycle or a period of disruption) |

* Selection of mean type

|                     | **Advantages**                                               | **Disadvantages**                                            |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Arithmetic Mean** | •  *Easy* to calculate  <br> • Considers all observations    | • Sensitive to  *extreme* values  <br> • Overestimates expected terminal value of wealth |
| **Geometric Mean**  | • Considers all observations  <br> •  *Gives outliers less weight* <br> • Estimates expected terminal value of wealth |                                                              |

* Selection of risk-free rate proxy 

|                      | **Advantages**                                  | **Disadvantages**                              |
| -------------------- | ----------------------------------------------- | ---------------------------------------------- |
| Government bond YTM  | *More closely matches* infinite equity duration | *Not* a completely risk-free return            |
| Government bill rate | *Exact* estimate of the risk-free rate          | *Not closely matches* infinite equity duration |

**Limitation**:

* ERP can vary overtime
* Survivorship bias tend to inflate historical estimates of the ERP

### Forward-looking Approach

* Survey-based estimates
* Dividend discount models
* Macroeconomic modeling

#### Survey-based

* Assess expectation by asking people what they expect
* Estimates tend to be sensitive to recent market returns

#### Dividend Discount Models (DDM)

From the Gordon growth model, assuming constant P/E, earnings, dividends, and price will grow at the same rate. 
$$
ERP= E(\frac{D_1}{V_0})+E(g)-r_f
$$

#### Macroeconomic Model

$$
ERP = [DY+\Delta(\frac{P}{E})+i+g-\Delta S]-E(r_f)
$$

> [!note]
>
> Similar to the **growth function** in Economics , where $\Delta S$ is the net change of Buybacks + Relative Dynamism. The idea is identical to that. Simply different notations. 

| **Factors**           |                       |                              | **Symbol**    |
| --------------------- | --------------------- | ---------------------------- | ------------- |
| Dividend yield        |                       |                              | $DY$          |
| Expected capital gain | Expected repricing    |                              | $\Delta(P/E)$ |
|                       | Earnings growth/share | Expected inflation           | $i$           |
|                       |                       | Real economic growth         | $g$           |
|                       |                       | Change in shares outstanding | $\Delta S$    |

> [!note]
>
> Expected inflation $i$ can be estimated from $YTM_{treasury\ bond}-YTM_{TIPS}$

#### Limitations

* Survey
  * Samping and response bias
  * Behavioral biases
* DDM
  * Assumption too strict
* Macroeconomic models
  * Modelling errors from macro data
  * Behavioral biases

## Cost of Equity 

Models

* DDMs
* Bond yield plus risk premium approach (BYPRP)
* CAPM
* Fama-French

### DDM

* Requirements: Publically traded, stable and predictable dividend
* Gordon growth model:
  * $r_e=\frac{D_1}{P_0}+g$
* Multiyear financial forecast:
  * $P_0 = (\sum_{t=1}^n \frac{D_1}{(1+r_e)})+\frac{P_n}{(1+r_e)^n}$, using IRR to calculate $r_e$.

### BYPRP

$$
r_e =r_d+RP
$$

where $RP$ can be exstimated using historical mean difference in returns between euity market index and corporate bond index. 

* Estimating cost of debt provides a starting point estimate of the return demanded by debt investor
* Determination of RP is relatively arbitrary 
* Requires company to have traded debt
* If a company has multiple traded debt with different features, it is hard to select.

### CAPM

$$
r_e = r_f+\beta(ERP)
$$

### Fama-French Models

$$
r_e = r_f +\beta_1ERP + \beta_2 SMB + \beta_3 HML + \beta_4 RMW + \beta_5 CMA
$$

* SMB: Small minus big, size premium
* HML: High(book-to-market) minus low, value premium
* RMW: Robust minus weak, profitability premium
* CMA: Conservative minus aggressive, investment premium

### Extended CAPM

$$
r_e = r_f +\beta_{\text{peer}}(ERP)+SP+SCRP
$$

* $\beta_{\text{peer}}$: Industry $\beta$, from a peer group opf publicly traded companies in the same industry 
* SP: Size premium
* SCRP: Specific company risk premium

### Build-up Approach 

$$
r_e=r_f+ERP+SP+IP+SCRP
$$

>[!note]
>
>When industry $\beta$ cannot found, we assume $\beta=1$.

* IP: Industry risk premium

### Country Risk Premium (CRP)

**CRP** is required by investor for the added risk of investing in emerging market
$$
CRP = \text{Sovereign yield spread}\times \frac{\sigma_{\text{equity}}}{\sigma_{\text{bond}}}
$$

* Soverign yield spread: The yield on emerging market bonds minus the yield on developed market government bonds.
* $\sigma_{\text{equity}}$: Volatility of the local country's equity market 
* $\sigma_{\text{bond}}$: Volatility of the local country's bond market 

### Global CAPM

* Single factor: A global market index as $r_m$
* Assuming no significant risk differences across countries

### International CAPM

$$
E(r_e)=r_f+\beta_G(E(r_{gm})-r_f)+\beta_c(E(r_c)-r_f)
$$

* $r_{gm}$: Global index
* $r_c$: foreign currency index

