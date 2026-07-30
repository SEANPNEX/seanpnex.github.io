# Evaluating a Multiple Regression Model

Model evaluation asks three different questions:

1. **Fit:** How much of the sample variation does the model explain?
2. **Parsimony:** Is the improvement in fit worth the additional complexity?
3. **Inference:** Are individual variables, all variables, or a selected group of variables statistically significant?

These questions are related, but none of them alone proves that a model is correctly specified or economically useful.

## Review: Fit and the ANOVA Decomposition

The definitions and derivations of $SST$, $SSR$, $SSE$, $MSE$, the standard error of estimate, and $R^2$ are covered in [M1: Analysis of Variance](./M1%20Multiple%20Regression.md#analysis-of-variance).

The overall test that all slope coefficients are simultaneously zero is covered in [M1: Overall F-Test](./M1%20Multiple%20Regression.md#overall-f-test).

> [!IMPORTANT]
> A high $R^2$ means that the model explains a large proportion of the **sample variation** in the dependent variable. It does not establish causality, guarantee good out-of-sample forecasts, or show that the assumptions are satisfied.

## Adjusted R-Squared

Adding another independent variable cannot reduce ordinary $R^2$, even when the new variable has little genuine explanatory value. Adjusted $R^2$ introduces a penalty for the number of predictors:

$$
\bar{R}^2
=
1-\left(\frac{n-1}{n-k-1}\right)(1-R^2),
$$

where:

- $n$ is the number of observations; and
- $k$ is the number of independent variables, excluding the intercept.

Unlike ordinary $R^2$, adjusted $R^2$ can decrease when an unhelpful predictor is added. It can also be negative when the model fits worse than an intercept-only model after the complexity penalty.

When comparing candidate models, adjusted $R^2$ is meaningful only when the models use the **same dependent variable and estimation sample**. A higher value is preferred, all else equal.

## Information Criteria

Adjusted $R^2$ is not the only way to balance fit and complexity. Information criteria explicitly add a penalty to a measure of unexplained variation.

### Akaike Information Criterion

For an OLS model under the convention used here:

$$
AIC
=
n\ln\left(\frac{SSE}{n}\right)+2(k+1).
$$

The first term rewards fit through a smaller $SSE$; the second penalizes the $k$ slopes plus the intercept. Among models estimated on the same dependent variable and sample, a **lower AIC is preferred**.

### Bayesian Information Criterion

$$
BIC
=
n\ln\left(\frac{SSE}{n}\right)+\ln(n)(k+1).
$$

A lower BIC is preferred. When $n>e^2\approx7.39$, the BIC penalty per parameter, $\ln(n)$, is greater than the AIC penalty of $2$. BIC therefore usually penalizes additional variables more heavily in practical sample sizes and tends to select more parsimonious models.

> [!NOTE]
> The absolute AIC or BIC value has little standalone meaning. Use it to rank models fitted to the same observations and dependent variable. Different sources may include additional constants or count the error variance as another parameter; these conventions can change the reported level without changing rankings when applied consistently.

## Review: Individual and Overall Significance

Testing a single slope coefficient with a $t$-test is covered in [M1: Testing an Individual Coefficient](./M1%20Multiple%20Regression.md#testing-an-individual-coefficient).

Testing whether all slope coefficients are jointly zero is covered in [M1: Overall F-Test](./M1%20Multiple%20Regression.md#overall-f-test).

Remember that:

- an individually significant coefficient does not establish economic significance or causality;
- a significant overall $F$-test does not mean every coefficient is significant; and
- failure to reject a null hypothesis is not proof that the null is true.

## Restricted F-Test

A restricted $F$-test evaluates whether a **subset of coefficients** satisfies a set of joint restrictions. A common example is

$$
H_0:\beta_2=\beta_3=0
\qquad\text{versus}\qquad
H_a:\text{at least one restriction is false}.
$$

Estimate two nested models:

- the **unrestricted model**, which contains all $k$ independent variables; and
- the **restricted model**, which imposes the null restrictions—for example, by excluding $X_2$ and $X_3$ when their coefficients are hypothesized to be zero.

The test statistic is

$$
F
=
\frac{(SSE_R-SSE_U)/q}{SSE_U/(n-k-1)},
$$

where:

- $SSE_R$ is the restricted model's sum of squared errors;
- $SSE_U$ is the unrestricted model's sum of squared errors;
- $q$ is the number of independent restrictions;
- $k$ is the number of predictors in the unrestricted model; and
- the degrees of freedom are $q$ and $n-k-1$.

Because the unrestricted model has more flexibility, $SSE_U\le SSE_R$. Reject the null hypothesis when the calculated $F$ is sufficiently large or its $p$-value is below the chosen significance level.

### Worked Example

Suppose an analyst models stock returns using four independent variables. The analyst wants to determine whether the last two variables are jointly useful:

$$
H_0:\beta_3=\beta_4=0.
$$

The regression results are:

| Input | Value |
| --- | ---: |
| Number of observations, $n$ | 100 |
| Predictors in the unrestricted model, $k$ | 4 |
| Number of restrictions, $q$ | 2 |
| Restricted-model error sum of squares, $SSE_R$ | 480 |
| Unrestricted-model error sum of squares, $SSE_U$ | 400 |

First, measure the reduction in error per restriction:

$$
\frac{SSE_R-SSE_U}{q}
=
\frac{480-400}{2}
=40.
$$

Next, calculate the unrestricted model's mean squared error:

$$
\frac{SSE_U}{n-k-1}
=
\frac{400}{100-4-1}
=
\frac{400}{95}
\approx4.21.
$$

Therefore,

$$
F
=
\frac{40}{4.21}
\approx9.50,
$$

with degrees of freedom $(2,95)$. At the 5% significance level, the critical value is approximately $3.09$. Because $9.50>3.09$, reject $H_0$: the evidence indicates that $X_3$ and $X_4$ are **jointly significant**.

> [!NOTE]
> This conclusion does not imply that both coefficients are individually significant. The restricted $F$-test only establishes that at least one of the two restrictions is inconsistent with the data.

> [!TIP]
> When $q=1$, the restricted $F$-test is equivalent to the corresponding two-sided coefficient test: $F=t^2$.

## Model-Comparison Checklist

Before preferring one model over another, ask:

1. Do the models use the same dependent variable and observations?
2. Does the more complex model improve adjusted $R^2$, AIC, or BIC enough to justify the added variables?
3. Are the added coefficients individually or jointly significant?
4. Are the signs and magnitudes economically plausible?
5. Do the residual diagnostics support the regression assumptions? See [M1: Diagnostic Plots and Checks](./M1%20Multiple%20Regression.md#diagnostic-plots-and-checks).
6. Does the model perform well on data not used for estimation?

Fit statistics help compare models; they do not replace economic reasoning, assumption checks, or out-of-sample validation.
