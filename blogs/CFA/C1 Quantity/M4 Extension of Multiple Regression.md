# Extensions of Multiple Regression

This module extends ordinary multiple regression in two directions:

1. **Influence analysis:** identifying observations that may materially affect the fitted model.
2. **Qualitative information:** representing categorical explanatory variables and modeling a binary dependent variable.

## Influence Analysis

An observation may be unusual because of its explanatory-variable values, its dependent-variable value, or both. These cases must be distinguished:

| Concept | What is unusual? | Primary measure |
| --- | --- | --- |
| High leverage | The observation's $X$ values | Leverage, $h_{ii}$ |
| Outlier | The observed $Y_i$ is far from its fitted value | Studentized residual |
| Influential observation | Removing the observation materially changes the fitted regression | Cook's distance or deletion diagnostics |

High leverage or a large residual creates the **potential** for influence. Neither one alone proves that an observation materially changes the regression.

<iframe
  class="influence-analysis-chart"
  src="/charts/influence-analysis-cases.html"
  title="Graphical comparison of leverage, outliers, and influential observations"
  loading="lazy"
></iframe>

Read the three cases from left to right:

1. **High leverage without a large residual:** the point is far from the sample in the horizontal $X$ direction but agrees with the existing relationship. It extends the data range without rotating the fitted line much.
2. **Outlier without high leverage:** the point is far from the line vertically but lies near the center of the $X$ distribution. It has a large residual, but surrounding observations limit its ability to rotate the slope.
3. **Influential observation:** the point is both horizontally remote and vertically inconsistent with the original relationship. With few nearby observations to counterbalance it, the point pulls the fitted line toward itself.

The dashed line in each panel is fitted without the labeled observation; the solid line includes it. Their separation makes influence directly visible.

### Leverage

Leverage measures how unusual an observation's independent-variable values are relative to those of the sample. It is the $i$th diagonal element of the OLS hat matrix:

$$
H=X(X'X)^{-1}X',
\qquad h_{ii}=H_{ii}.
$$

The fitted values satisfy $\hat{Y}=HY$, which is why $H$ is called the hat matrix.

Important properties are

$$
0\le h_{ii}\le1,
\qquad
\sum_{i=1}^{n}h_{ii}=k+1,
$$

when the model contains $k$ predictors and an intercept. Therefore, average leverage is

$$
\bar{h}=\frac{k+1}{n}.
$$

A commonly used investigation rule is

$$
h_{ii}>3\left(\frac{k+1}{n}\right).
$$

This is a screening guideline, not a formal rejection threshold. A high-leverage observation can lie close to the fitted regression and therefore have little influence.

### Outliers and Studentized Residuals

An outlier has an unusually large residual relative to its estimated variability. The ordinary residual is

$$
e_i=Y_i-\hat{Y}_i.
$$

Residual variance differs across observations because leverage differs. Studentization places residuals on a comparable scale. The **externally studentized residual**, also called the studentized deleted residual, is

$$
t_i^*
=
\frac{e_i}{s_{(i)}\sqrt{1-h_{ii}}},
$$

where $s_{(i)}$ is the regression standard error estimated after deleting observation $i$.

Under normally distributed errors and the null hypothesis that observation $i$ follows the same regression model as the other observations,

$$
t_i^*\sim t_{n-k-2}.
$$

A large absolute value, $|t_i^*|$, indicates a potential outlier. The relevant null is **not** that the observation is influential; studentized residuals detect unusual conditional $Y$ values, whereas influence also depends on leverage.

> [!NOTE]
> Inspecting many observations creates a multiple-testing problem. A simple cutoff such as $|t_i^*|>2$ is useful for screening but will flag some observations by chance, especially in a large sample.

### Cook's Distance

Cook's distance combines residual size and leverage to estimate how much the fitted regression would change if observation $i$ were removed:

$$
D_i
=
\frac{e_i^2}{(k+1)MSE}
\left(\frac{h_{ii}}{(1-h_{ii})^2}\right).
$$

Cook's distance grows when an observation has:

- a large residual;
- high leverage; or
- both.

Larger $D_i$ means greater potential influence. Values above 1 are often treated as strongly influential, while rules such as $D_i>4/n$ are used for screening. These are investigation rules rather than automatic deletion criteria.

### How to Respond to an Influential Observation

1. Check for data-entry, measurement, and unit errors.
2. Decide whether the observation belongs to the population represented by the model.
3. Examine whether it reveals a missing variable, interaction, structural break, or incorrect functional form. See [M3: Model Misspecification](./M3%20Model%20Misspecification.md).
4. Compare the model with and without the observation and report material sensitivity.
5. Do not remove a valid observation solely because it weakens the desired result.

## Categorical Explanatory Variables

### Dummy Variables

A dummy variable represents category membership using values of 0 and 1. If a categorical predictor has $g$ categories and the regression includes an intercept, use $g-1$ dummy variables. The omitted category becomes the **reference category**.

Using all $g$ dummies with an intercept creates perfect multicollinearity—the dummy-variable trap discussed in [M3: Multicollinearity](./M3%20Model%20Misspecification.md#multicollinearity).

#### Example: Different Intercepts

Suppose firms belong to the financial, technology, or healthcare sector. Define

$$
D_{Tech}=1\text{ for a technology firm, otherwise }0,
$$

and similarly define $D_{Health}$. If financial firms are the reference group,

$$
Y_i
=
\beta_0+\beta_1X_i
+\gamma_1D_{Tech,i}
+\gamma_2D_{Health,i}
+\varepsilon_i.
$$

- $\beta_0$ is the intercept for financial firms.
- $\gamma_1$ is the intercept difference between technology and financial firms, holding $X$ constant.
- $\gamma_2$ is the intercept difference between healthcare and financial firms, holding $X$ constant.

Changing the reference category changes the coefficient representation but not the fitted values.

### Interaction Terms

To allow the slope on $X$ to differ between two groups, interact $X$ with a dummy variable:

$$
Y_i
=
\beta_0+\beta_1X_i
+\gamma D_i
+\delta(X_iD_i)
+\varepsilon_i.
$$

| Group | Intercept | Slope on $X$ |
| --- | ---: | ---: |
| Reference group, $D=0$ | $\beta_0$ | $\beta_1$ |
| Comparison group, $D=1$ | $\beta_0+\gamma$ | $\beta_1+\delta$ |

Therefore:

- $\gamma$ measures the difference in intercepts; and
- $\delta$ measures the difference in slopes.

A [restricted F-test](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test) can determine whether a set of category and interaction terms is jointly significant.

## Binary Dependent Variables

When the dependent variable takes only two values—such as default/no default or success/failure—ordinary linear regression can produce probabilities below 0 or above 1 and imposes heteroskedastic errors. A logit model instead connects the predictors to a probability through the logistic function.

### Logit Model

Let

$$
p_i=P(Y_i=1\mid X_i).
$$

The logit model specifies the **log odds** as a linear function of the predictors:

$$
\ln\left(\frac{p_i}{1-p_i}\right)
=
\beta_0+\beta_1X_{1i}+\cdots+\beta_kX_{ki}.
$$

Solving for the probability gives

$$
p_i
=
\frac{1}
{1+\exp[-(\beta_0+\beta_1X_{1i}+\cdots+\beta_kX_{ki})]}.
$$

There is no additive $\varepsilon_i$ inside this probability equation. Conditional on the predictors, $Y_i$ follows a Bernoulli distribution with probability $p_i$.

### Interpreting Logit Coefficients

A one-unit increase in $X_j$, holding the other variables constant:

- changes the log odds by $\beta_j$; and
- multiplies the odds by $e^{\beta_j}$.

For example, if $\hat{\beta}_j=0.40$, the estimated odds multiply by

$$
e^{0.40}\approx1.49,
$$

which is approximately a 49% increase in the odds—not necessarily a 49% increase in probability. The change in probability depends on the starting probability and the values of all predictors.

## Estimation and Model Evaluation

Logit coefficients are estimated using **maximum likelihood estimation (MLE)** rather than OLS. MLE chooses the coefficients that make the observed sequence of zeros and ones most likely.

### Log-Likelihood

The log-likelihood for independent binary observations is

$$
\ell(\beta)
=
\sum_{i=1}^{n}
\left[Y_i\ln(p_i)+(1-Y_i)\ln(1-p_i)\right].
$$

A higher maximized log-likelihood indicates better in-sample fit for models estimated on the same observations and dependent variable. Because log-likelihood values are usually negative, “higher” generally means **closer to zero**.

### Pseudo R-Squared

Pseudo $R^2$ measures compare the fitted model with a benchmark such as an intercept-only model. They are not interpreted as the proportion of variation explained and are not directly comparable with OLS $R^2$.

### Likelihood-Ratio Test

The likelihood-ratio (LR) test determines whether $q$ coefficient restrictions are jointly supported. It compares:

- a **restricted model**, estimated under $H_0$; and
- an **unrestricted model**, which allows the tested coefficients to vary.

The statistic is

$$
LR
=
2(\ell_U-\ell_R),
$$

where $\ell_U$ and $\ell_R$ are the maximized log-likelihoods. Because the unrestricted model fits at least as well, $\ell_U\ge\ell_R$ and $LR\ge0$.

Under $H_0$ and standard regularity conditions,

$$
LR\overset{a}{\sim}\chi_q^2,
$$

where $q$ is the number of restrictions. Reject $H_0$ for a sufficiently large LR statistic or a $p$-value below the selected significance level.

#### Worked Example

Suppose the unrestricted logit model includes two industry variables being tested jointly and has $\ell_U=-118$. The restricted model excludes them and has $\ell_R=-125$:

$$
LR
=
2[-118-(-125)]
=14.
$$

There are $q=2$ restrictions. At the 5% level, the $\chi_2^2$ critical value is approximately 5.99. Since $14>5.99$, reject the null: the two industry variables are jointly significant.

The LR test plays a role for maximum-likelihood models similar to the [restricted F-test](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test) for OLS models, although their reference distributions and estimation frameworks differ.

## Summary

| Task | Model or diagnostic | Key interpretation |
| --- | --- | --- |
| Find unusual predictor values | Leverage | High leverage means unusual $X$, not necessarily influence |
| Find unusual outcomes conditional on $X$ | Studentized deleted residual | Large $|t_i^*|$ indicates a potential outlier |
| Measure overall influence | Cook's distance | Combines residual size and leverage |
| Include a categorical predictor | $g-1$ dummy variables | Coefficients are interpreted relative to a reference category |
| Allow group-specific slopes | Dummy-variable interaction | Interaction coefficient is the slope difference |
| Model a binary outcome | Logit | Coefficients change log odds; $e^{\beta_j}$ is an odds ratio |
| Test restrictions in a logit model | LR test | Compare restricted and unrestricted log-likelihoods |

<style>
.influence-analysis-chart {
  display: block;
  width: 100%;
  height: 425px;
  margin: 22px 0 26px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 720px) {
  .influence-analysis-chart { height: 1250px; }
}
</style>
