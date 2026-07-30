# Basics of Multiple Regression and Its Assumptions

## Uses of Multiple Linear Regression

Multiple linear regression can be used to:

- identify and quantify relationships between variables;
- test economic or financial theories, such as whether several risk factors explain returns; and
- forecast a dependent variable from a set of predictors.

## Multiple Linear Regression Model

For observation $i$, a model with $k$ independent variables is

$$
Y_i = \beta_0 + \beta_1X_{1i} + \beta_2X_{2i} + \cdots + \beta_kX_{ki} + \varepsilon_i.
$$

- $Y_i$ is the dependent variable.
- $X_{ji}$ is the value of independent variable $j$ for observation $i$.
- $\beta_0$ is the intercept and $\beta_j$ is a population slope coefficient.
- $\varepsilon_i$ is the unobserved error term.

The coefficient $\beta_j$ measures the expected change in $Y$ from a one-unit increase in $X_j$, **holding all other independent variables constant**.

## Assumptions

The classical multiple linear regression assumptions are:

1. **Linearity in the parameters:** the conditional mean of $Y$ is a linear function of the coefficients. A curved relationship can still be modeled by adding transformed variables such as $X^2$.
2. **Zero conditional mean (exogeneity):** $E(\varepsilon_i\mid X_{1i},\ldots,X_{ki})=0$. The predictors must not be systematically related to omitted influences contained in the error term.
3. **Homoskedasticity:** the conditional variance of the error term is constant:
   $$
   \operatorname{Var}(\varepsilon_i\mid X)=\sigma^2.
   $$
4. **Independence of errors:** error terms are uncorrelated across observations. This assumption is especially important for time-series data, where serial correlation may occur.
5. **No perfect multicollinearity:** no independent variable is an exact linear combination of the others. High—but imperfect—correlation does not violate this assumption, although it can inflate standard errors.
6. **Normality of errors for exact small-sample inference:** the errors are normally distributed conditional on $X$. Normality is not required for OLS coefficients to be unbiased, but it supports exact $t$- and $F$-tests in small samples.

> [!IMPORTANT]
> These assumptions concern the **error terms**, which are unobservable. In practice, we inspect the estimated residuals $e_i=Y_i-\hat{Y}_i$ as proxies.

### Diagnostic Plots and Checks

<iframe
  class="lieflat-regression-chart"
  src="/charts/multiple-regression-diagnostics.html"
  title="Interactive examples of residual diagnostic plots"
  loading="lazy"
></iframe>

| Assumption or issue | Useful diagnostic | What to look for |
| --- | --- | --- |
| Linearity | Residuals versus fitted values; partial residual plots | A random horizontal band around zero supports linearity. Curvature suggests a missing transformation, interaction, or nonlinear term. |
| Homoskedasticity | Residuals versus fitted values | Roughly constant vertical spread supports homoskedasticity. A funnel or fan shape suggests heteroskedasticity. |
| Normality | Normal Q–Q plot of residuals | Points close to the reference line support normality. Systematic tail departures suggest skewness, heavy tails, or outliers. |
| Independence | Residuals plotted in time order; autocorrelation function; Durbin–Watson test | Runs, cycles, or clusters suggest serial correlation. |
| Multicollinearity | Correlation matrix, variance inflation factor (VIF), and tolerance $=1/\text{VIF}$ | Large VIFs indicate inflated coefficient variance. Pairwise correlations alone can miss relationships involving several predictors. |
| Outliers and influence | Studentized residuals, leverage, and Cook's distance | Investigate observations that combine an unusual predictor value with a large residual or that materially change the fitted model. |

#### Reading a Normal Q–Q Plot

A Q–Q plot compares the ordered residuals with the quantiles expected from a normal distribution:

- points close to a straight line: residual normality is plausible;
- an S-shaped pattern: the residual distribution may have heavier or lighter tails than a normal distribution;
- one tail bending strongly away from the line: possible skewness; and
- one or two isolated points far from the line: possible outliers.

A Q–Q plot is a diagnostic, not a pass/fail test. With a large sample, even small deviations may be visible while asymptotic inference remains useful.

## Fitting the Model with OLS

Ordinary least squares (OLS) chooses the estimated coefficients to minimize the **sum of squared errors**:

$$
SSE=\sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2.
$$

The fitted regression is

$$
\hat{Y}_i=\hat{\beta}_0+\hat{\beta}_1X_{1i}+\cdots+\hat{\beta}_kX_{ki}.
$$

Under the full Gauss–Markov assumptions—including exogeneity, homoskedasticity, uncorrelated errors, and no perfect multicollinearity—OLS is the best linear unbiased estimator: it has the smallest variance among linear unbiased estimators.

## Testing an Individual Coefficient

To test whether independent variable $j$ has explanatory power after controlling for the other predictors:

$$
H_0:\beta_j=0
\qquad\text{versus}\qquad
H_a:\beta_j\ne0.
$$

The test statistic is

$$
t=\frac{\hat{\beta}_j-0}{SE(\hat{\beta}_j)},
\qquad df=n-k-1.
$$

For a two-sided test at significance level $\alpha$, reject $H_0$ when

$$
|t|>t_{\alpha/2,\,n-k-1},
$$

or equivalently when the $p$-value is below $\alpha$. The corresponding confidence interval is

$$
\hat{\beta}_j\pm t_{\alpha/2,\,n-k-1}SE(\hat{\beta}_j).
$$

Statistical significance does not by itself establish causality or economic significance.

## Analysis of Variance

The total variation in $Y$ can be decomposed as

$$
\underbrace{\sum_{i=1}^{n}(Y_i-\bar{Y})^2}_{SST}
=
\underbrace{\sum_{i=1}^{n}(\hat{Y}_i-\bar{Y})^2}_{SSR}
+
\underbrace{\sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2}_{SSE}.
$$

Here, $SSR$ is the regression sum of squares (explained variation) and $SSE$ is the error sum of squares (unexplained variation).

| Source | Degrees of freedom | Sum of squares | Mean square |
| --- | ---: | ---: | ---: |
| Regression | $k$ | $SSR$ | $MSR=SSR/k$ |
| Error | $n-k-1$ | $SSE$ | $MSE=SSE/(n-k-1)$ |
| Total | $n-1$ | $SST$ | — |

The **standard error of the regression** (also called the standard error of estimate) is

$$
SEE=\sqrt{\frac{SSE}{n-k-1}}=\sqrt{MSE}.
$$

The coefficient of determination is

$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST},
\qquad 0\le R^2\le1
$$

when the model includes an intercept. $R^2$ measures the proportion of sample variation in $Y$ explained by the regression; it does not prove that the model is correctly specified.

## Overall F-Test

The overall $F$-test asks whether the independent variables jointly explain variation in $Y$:

$$
H_0:\beta_1=\beta_2=\cdots=\beta_k=0
$$

against the alternative that at least one slope coefficient is nonzero. The test statistic is

$$
F=\frac{MSR}{MSE},
$$

with $k$ and $n-k-1$ degrees of freedom. Reject the null for a sufficiently large $F$-statistic or a $p$-value below the chosen significance level.

> [!TIP]
> A significant overall $F$-test does not imply that every individual coefficient is significant. Multicollinearity can make individual $t$-statistics small even when the predictors are jointly useful.

The overall test restricts **all** slope coefficients to zero. To test whether only a selected group of coefficients is jointly zero, see [M2: Restricted F-Test](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test), including a worked calculation.

<style>
.lieflat-regression-chart {
  display: block;
  width: 100%;
  height: 770px;
  margin: 24px 0 32px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 620px) {
  .lieflat-regression-chart { height: 1510px; }
}
</style>
