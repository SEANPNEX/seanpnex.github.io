# Model Misspecification

A regression is misspecified when its equation, variables, or error structure does not adequately represent the relationship being studied. Misspecification can make coefficient estimates biased, standard errors unreliable, or forecasts unstable.

Before using the tests below, review the [multiple-regression assumptions and residual diagnostics](./M1%20Multiple%20Regression.md#assumptions).

## Common Forms of Misspecification

| Problem | Example | Main consequence | Possible response |
| --- | --- | --- | --- |
| Omitted relevant variable | Explaining returns with market beta while omitting an industry factor correlated with beta | Included coefficients may suffer omitted-variable bias | Add the variable or a defensible proxy; use a research design that addresses endogeneity |
| Irrelevant included variable | Adding a predictor with no true relationship to $Y$ | OLS remains unbiased under the other assumptions, but coefficient estimates may become less precise | Remove it when theory and evidence support doing so |
| Incorrect functional form | Modeling a curved relationship as purely linear | Biased or systematically incorrect predictions; patterned residuals | Transform variables or add polynomial and interaction terms |
| Incorrect variable definition or scaling | Using percentages as whole numbers in one place and decimals in another | Misinterpreted coefficients or numerical problems; rescaling alone does not change fit or significance | Use consistent units and interpret coefficients in those units |
| Improper data pooling | Combining firms, countries, or time periods that have different intercepts or slopes | Hidden structural differences and unstable coefficients | Use indicator variables, interactions, panel methods, or separate models |
| Endogenous explanatory variable | A predictor is jointly determined with $Y$ or measured with error | $E(\varepsilon\mid X)\ne0$, producing biased and inconsistent OLS estimates | Improve the design; where justified, use instrumental variables or another appropriate estimator |

> [!NOTE]
> Unusual residuals do not automatically identify the cause. A curved residual pattern, for example, may reflect an omitted variable, an incorrect transformation, or inappropriate pooling. Diagnostics indicate where to investigate; economic reasoning determines the model revision.

### Omitted-Variable Bias

Omitting a variable biases an included slope coefficient when both conditions hold:

1. the omitted variable affects the dependent variable; and
2. the omitted variable is correlated with the included predictor.

If a relevant omitted variable is uncorrelated with the included predictors, it increases unexplained variance but does not create the standard omitted-variable bias in their slope estimates.

### Functional Form and Pooling Checks

- A residual-versus-fitted plot can expose curvature or changing variance. See [M1: Diagnostic Plots and Checks](./M1%20Multiple%20Regression.md#diagnostic-plots-and-checks).
- The Ramsey RESET test can detect general functional-form problems, although rejection does not identify the missing term.
- A restricted $F$-test can assess whether a group of polynomial terms, interaction terms, or group indicators is jointly significant. See [M2: Restricted F-Test](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test).
- A Chow test is a restricted $F$-test for a known structural-break point, provided the relevant assumptions hold.

## Error-Variance and Dependence Problems

Heteroskedasticity and serial correlation concern the covariance structure of the errors. Under exogeneity, they do not by themselves bias OLS slope estimates, but ordinary OLS standard errors are generally invalid and OLS is no longer efficient.

### Heteroskedasticity

Heteroskedasticity means that the conditional error variance is not constant:

$$
\operatorname{Var}(\varepsilon_i\mid X_i)\ne\sigma^2.
$$

- **Unconditional heteroskedasticity:** the variance changes for reasons not systematically related to the explanatory variables. In the CFA treatment, this generally creates no major inference problem.
- **Conditional heteroskedasticity:** the error variance is systematically related to the explanatory variables. Conventional OLS standard errors become unreliable.

With conditional heteroskedasticity, OLS coefficients remain unbiased only if exogeneity and the other required assumptions continue to hold. The conventional standard errors of $\hat{b_j}$ may be too small or too large. Most likely the standard errors are **underestimated**.

If they are underestimated, $t$-statistics $\frac{\hat{b_j}-b_{jH}}{s_{\hat{b_j}}}$ are inflated and **Type I** errors become more likely.

#### Breusch–Pagan Test

The hypotheses are

$$
H_0:\text{the errors are homoskedastic}
\qquad\text{versus}\qquad
H_a:\text{the error variance depends on at least one predictor}.
$$

After estimating the original regression, regress the squared OLS residuals on the $k$ explanatory variables:

$$
\hat{\varepsilon}_i^2
=
\alpha_0+\alpha_1X_{1i}+\cdots+\alpha_kX_{ki}+v_i.
$$

Using the auxiliary regression's coefficient of determination, the Lagrange multiplier statistic is

$$
LM=nR_{\text{aux}}^2\sim\chi_k^2
$$

under the null asymptotically. A sufficiently large statistic, or a small $p$-value, supports conditional heteroskedasticity.

#### Responses

- Use heteroskedasticity-robust standard errors when the coefficient estimates remain appropriate but inference needs correction.
- Use weighted least squares or generalized least squares when the variance structure can be modeled credibly.
- Revisit the functional form because heteroskedasticity can also signal a missing transformation or omitted variable.

Robust standard errors change the estimated standard errors—not the OLS coefficients or fitted values.

### Serial Correlation

Serial correlation occurs when error terms from different time periods are correlated:

$$
\operatorname{Cov}(\varepsilon_t,\varepsilon_{t-j})\ne0.
$$

Positive first-order serial correlation means a positive error tends to be followed by another positive error; negative serial correlation produces more frequent sign reversals.

Under strict exogeneity, OLS slopes may remain unbiased, but they are inefficient and conventional standard errors are unreliable. Positive serial correlation often causes standard errors to be underestimated, but this is not a universal rule for every coefficient or model. When a lagged dependent variable is included, serial correlation can also make OLS coefficient estimates inconsistent.

#### Durbin–Watson Statistic

$$
DW
=
\frac{\sum_{t=2}^{n}(\hat{\varepsilon}_t-\hat{\varepsilon}_{t-1})^2}
{\sum_{t=1}^{n}\hat{\varepsilon}_t^2},
\qquad 0\le DW\le4.
$$

As a rough interpretation:

- $DW\approx2$: little evidence of first-order serial correlation;
- $DW<2$: positive serial correlation; and
- $DW>2$: negative serial correlation.

The formal test uses lower and upper critical bounds and may be inconclusive. It is designed for first-order correlation and is not valid in its standard form when a lagged dependent variable is included among the regressors.

#### Breusch–Godfrey Test

The Breusch–Godfrey test can examine serial correlation through order $p$. Estimate the auxiliary regression

$$
\hat{\varepsilon}_t
=
\alpha_0+\alpha_1X_{1t}+\cdots+\alpha_kX_{kt}
+\rho_1\hat{\varepsilon}_{t-1}+\cdots
+\rho_p\hat{\varepsilon}_{t-p}+v_t.
$$

The hypotheses are

$$
H_0:\rho_1=\rho_2=\cdots=\rho_p=0
$$

against the alternative that at least one $\rho_j$ is nonzero. The LM version uses

$$
LM=nR_{\text{aux}}^2\sim\chi_p^2
$$

asymptotically; an equivalent finite-sample $F$ formulation is also commonly reported.

#### Responses

- Use heteroskedasticity-and-autocorrelation-consistent standard errors, such as Newey–West, when the main issue is inference.
- Model the time-series dynamics explicitly by adding justified lags or other missing structure.
- Use generalized least squares when an appropriate error process can be specified.

Newey–West standard errors correct inference; they do not remove serial correlation from the residuals or change the OLS coefficient estimates.

## Multicollinearity

Multicollinearity means that two or more explanatory variables are highly linearly related. **Perfect** multicollinearity prevents OLS estimation. High but imperfect multicollinearity does not violate exogeneity and does not bias OLS coefficients, but it makes the affected coefficient estimates imprecise.

Typical symptoms include:

- large coefficient standard errors and small absolute $t$-statistics;
- unstable coefficient magnitudes or signs when variables are added or removed; and
- a significant overall $F$-test despite few individually significant coefficients.

This is not the same as negative serial correlation. Serial correlation concerns relationships among errors; multicollinearity concerns relationships among predictors.

### Variance Inflation Factor

For predictor $X_j$, regress it on all the other predictors and obtain $R_j^2$. Then

$$
VIF_j
=
\frac{1}{1-R_j^2}.
$$

- $VIF_j=1$ means that $X_j$ has no linear relationship with the other predictors.
- Larger values indicate greater inflation in $\operatorname{Var}(\hat{\beta}_j)$.
- Thresholds such as 5 or 10 are investigation rules, not formal hypothesis-test cutoffs.

### Responses

- Do nothing when the model's purpose is prediction and out-of-sample performance remains strong.
- Collect more informative data when feasible; simply increasing the sample size does not eliminate a nearly deterministic relationship among predictors.
- Combine or reparameterize variables that measure the same underlying concept.
- Remove a redundant predictor only when theory supports the choice; deleting a relevant variable can create omitted-variable bias.

## Summary

| Problem | OLS coefficients | Conventional standard errors | Central diagnostic |
| --- | --- | --- | --- |
| Omitted relevant variable correlated with included $X$ | Biased and inconsistent | Not trustworthy | Theory, residual patterns, specification tests |
| Conditional heteroskedasticity under exogeneity | Unbiased but inefficient | Inconsistent | Residual plot, Breusch–Pagan test |
| Serial correlation under strict exogeneity | Unbiased but inefficient | Generally inconsistent | Residual order plot, Durbin–Watson, Breusch–Godfrey |
| High imperfect multicollinearity | Unbiased | Correctly estimated but large | VIF, coefficient instability |

The remedy must match the problem: robust standard errors repair inference under heteroskedasticity, but they do not repair omitted-variable bias, an incorrect functional form, or endogeneity.
