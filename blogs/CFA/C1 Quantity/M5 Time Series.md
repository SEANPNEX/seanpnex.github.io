# Time-Series Models

A time series is a sequence of observations indexed through time. Unlike cross-sectional observations, nearby values may be dependent, the mean may trend, and volatility may cluster. A useful time-series model must address these features before its coefficient tests and forecasts can be trusted.

## Deterministic Trend Models

Trend models treat time itself as an explanatory variable. They are appropriate when the series moves around a stable deterministic path and the remaining errors are not serially correlated.

### Linear Trend

$$
Y_t=\beta_0+\beta_1t+\varepsilon_t.
$$

The slope $\beta_1$ is the expected **absolute change per period**. For example, $\beta_1=3$ means the series rises by approximately three units each period.

### Log-Linear Trend

When a series grows at an approximately constant percentage rate, model its logarithm:

$$
\ln(Y_t)=\beta_0+\beta_1t+\varepsilon_t.
$$

Equivalently,

$$
Y_t=\exp(\beta_0+\beta_1t+\varepsilon_t).
$$

The continuously compounded growth rate is $\beta_1$. The exact growth rate per period is

$$
g=e^{\beta_1}-1,
$$

which is approximately $\beta_1$ when $\beta_1$ is small.

> [!IMPORTANT]
> A visually good trend fit is insufficient. If the trend-model residuals are serially correlated, conventional OLS inference is unreliable and the series still contains predictable dynamics. See [M3: Serial Correlation](./M3%20Model%20Misspecification.md#serial-correlation).

## Covariance Stationarity

Many time-series models require covariance stationarity. A series $Y_t$ is covariance stationary when:

1. its expected value is finite and constant through time:
   $$E(Y_t)=\mu;$$
2. its variance is finite and constant through time:
   $$\operatorname{Var}(Y_t)=\sigma^2;$$
3. its covariance with a lagged value depends only on the lag $j$, not on calendar time:
   $$
   \operatorname{Cov}(Y_t,Y_{t-j})=\gamma_j.
   $$

A deterministic upward trend violates the constant-mean condition. A unit-root process also fails to be covariance stationary because shocks have permanent effects and its variance generally changes over time.

## Autoregressive Models

An autoregressive model uses lagged values of the dependent variable as predictors:

$$
AR(p):\quad
Y_t
=
\beta_0+\phi_1Y_{t-1}+\cdots+\phi_pY_{t-p}+\varepsilon_t.
$$

The error $\varepsilon_t$ should be white noise: it has mean zero, constant variance, and no serial correlation.

### AR(1) Model and Mean Reversion

For

$$
Y_t=\beta_0+\phi Y_{t-1}+\varepsilon_t,
$$

the process is covariance stationary when

$$
|\phi|<1.
$$

Its long-run or mean-reverting level is

$$
\mu=\frac{\beta_0}{1-\phi}.
$$

The model can be rewritten as

$$
Y_t-\mu=\phi(Y_{t-1}-\mu)+\varepsilon_t.
$$

This form makes the dynamics clear:

- $0<\phi<1$: deviations decay gradually while keeping the same sign;
- $-1<\phi<0$: deviations decay while alternating around the mean; and
- a $\phi$ close to 1 implies very slow mean reversion.

### AR Forecasts

The one-step-ahead AR(1) forecast at time $t$ is

$$
\hat{Y}_{t+1\mid t}
=
\hat{\beta}_0+\hat{\phi}Y_t.
$$

Longer-horizon forecasts are produced recursively. For a stationary AR(1), forecasts converge toward $\hat\mu=\hat\beta_0/(1-\hat\phi)$ as the horizon increases.

## Autocorrelation and Model Adequacy

The lag-$j$ autocorrelation is

$$
\rho_j
=
\operatorname{Corr}(Y_t,Y_{t-j}).
$$

An autocorrelation function (ACF) plot displays the sample autocorrelations $\hat\rho_j$ across several lags. Under the approximation that observations are white noise, the standard error of an individual sample autocorrelation is approximately

$$
SE(\hat\rho_j)\approx\frac{1}{\sqrt{T}}.
$$

Therefore, approximate 5% bounds are

$$
\pm\frac{1.96}{\sqrt{T}}.
$$

Autocorrelations outside these bounds are evidence—not proof—of dependence at that lag. Examining many lags raises a multiple-comparison issue, so the overall pattern and joint tests also matter.

### Partial Autocorrelation Function

The **partial autocorrelation function (PACF)** at lag $j$ measures the correlation between $Y_t$ and $Y_{t-j}$ after controlling for lags $1$ through $j-1$. It therefore isolates the direct contribution of lag $j$, whereas the ACF includes both direct and indirect dependence transmitted through shorter lags.

The ACF and PACF provide useful clues about model order:

| Process | ACF | PACF |
| --- | --- | --- |
| AR($p$) | Tails off gradually | Cuts off after lag $p$ |
| MA($q$) | Cuts off after lag $q$ | Tails off gradually |
| ARMA($p,q$) | Tails off | Tails off |

<iframe
  class="acf-pacf-chart"
  src="/charts/acf-pacf-patterns.html"
  title="Illustrative ACF and PACF patterns for AR(1) and MA(1) models"
  loading="lazy"
></iframe>

Here, **cuts off** describes the population function: correlations beyond the relevant order are theoretically zero. In a finite sample, estimates beyond the cutoff usually fluctuate around zero, so use the confidence bounds and the overall pattern rather than expecting exact zeros.

After fitting an AR model, inspect the **residual** ACF. Significant residual autocorrelation indicates that the model has not captured all serial dependence. The Breusch–Godfrey test can test several residual lags jointly; see [M3: Breusch–Godfrey Test](./M3%20Model%20Misspecification.md#breuschgodfrey-test).

> [!NOTE]
> The standard Durbin–Watson test is not appropriate when a lagged dependent variable appears among the predictors. Use residual autocorrelations or a suitable Breusch–Godfrey test for an AR model.

## Moving-Average and ARIMA Models

### Moving-Average Model

An $MA(q)$ model uses current and lagged white-noise shocks:

$$
MA(q):\quad
Y_t
=
\mu+\varepsilon_t
+\theta_1\varepsilon_{t-1}
+\cdots
+\theta_q\varepsilon_{t-q}.
$$

For a theoretical $MA(q)$ process, autocorrelations are zero beyond lag $q$. In a finite sample, estimated autocorrelations beyond $q$ will not be exactly zero but should be statistically indistinguishable from zero.

### ARMA and ARIMA

- **ARMA$(p,q)$** combines $p$ autoregressive terms and $q$ moving-average terms for a stationary series.
- **ARIMA$(p,d,q)$** applies differencing $d$ times to make a nonstationary series stationary, then models the differenced series with an ARMA$(p,q)$ structure.

Therefore, simply combining AR and MA terms produces an **ARMA** model. It becomes ARIMA only when integration—represented by differencing—is included.

## Seasonality

Seasonality is a recurring pattern at a fixed calendar frequency, such as monthly retail peaks or quarterly tax payments. It differs from an ordinary trend because it repeats within a larger cycle.

Possible treatments include:

- seasonal dummy variables;
- seasonal autoregressive lags, such as $Y_{t-12}$ for monthly data;
- seasonal differencing, such as $Y_t-Y_{t-12}$; and
- models that combine regular and seasonal AR or MA terms.

The treatment should match the pattern. Adding one seasonal lag is not the only possible response.

## Unit Roots and Random Walks

### Random Walk

When $\phi=1$, the AR(1) equation becomes

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t.
$$

- If $\beta_0=0$, this is a random walk.
- If $\beta_0\ne0$, this is a random walk with drift.

The process has a **unit root**. Shocks have permanent effects, and the level of the series is not covariance stationary. Running ordinary regressions on unrelated unit-root series can produce high $R^2$ and significant $t$-statistics even when no meaningful relationship exists—a spurious regression.

### Dickey–Fuller Test

Subtract $Y_{t-1}$ from both sides of the AR(1) model:

$$
\Delta Y_t
=
\beta_0+\gamma Y_{t-1}+\varepsilon_t,
\qquad
\gamma=\phi-1.
$$

The hypotheses are

$$
H_0:\gamma=0
\quad\text{(unit root)}
$$

against

$$
H_a:\gamma<0
\quad\text{(stationary alternative)}.
$$

The usual Student's $t$ critical values are invalid under the unit-root null. The Dickey–Fuller statistic uses a nonstandard distribution with special critical values. Reject the unit-root null when the statistic is sufficiently negative—below the relevant Dickey–Fuller critical value.

The test equation must be specified consistently with the data-generating process: it may contain no deterministic term, an intercept, or an intercept plus a time trend. The augmented Dickey–Fuller test adds lagged differences to absorb higher-order serial correlation.

### First Differencing

For a random walk with drift,

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t,
$$

first differencing gives

$$
\Delta Y_t=Y_t-Y_{t-1}=\beta_0+\varepsilon_t.
$$

Only a random walk **without** drift reduces to $\Delta Y_t=\varepsilon_t$. Differencing can stabilize a unit-root series, but unnecessary differencing can introduce avoidable noise and moving-average behavior.

## Conditional Heteroskedasticity

Financial return series may have little autocorrelation in their levels but strong autocorrelation in their **squared residuals**. This is volatility clustering: high-volatility periods tend to follow high-volatility periods.

### ARCH Model

An ARCH$(q)$ model specifies the conditional error variance as

$$
\sigma_t^2
=
\alpha_0
+\alpha_1\varepsilon_{t-1}^2
+\cdots
+\alpha_q\varepsilon_{t-q}^2,
$$

with restrictions such as $\alpha_0>0$ and $\alpha_j\ge0$ to keep the variance nonnegative.

The observation error can be written as

$$
\varepsilon_t=\sigma_tz_t,
$$

where $z_t$ is a standardized white-noise shock. ARCH models the **conditional variance**, not the conditional mean.

### GARCH Model

A GARCH$(p,q)$ model adds lagged conditional variances:

$$
\sigma_t^2
=
\alpha_0
+\sum_{i=1}^{q}\alpha_i\varepsilon_{t-i}^2
+\sum_{j=1}^{p}\beta_j\sigma_{t-j}^2.
$$

GARCH captures persistent volatility more parsimoniously than a high-order ARCH model. ARCH and GARCH models are generally estimated using maximum likelihood—not automatically by generalized least squares.

To detect ARCH effects, examine the ACF of squared residuals or use an ARCH LM test. If volatility dynamics matter for forecasting or risk measurement, model the conditional variance explicitly. If only coefficient inference is required, heteroskedasticity-consistent standard errors may sometimes be sufficient; see [M3: Heteroskedasticity](./M3%20Model%20Misspecification.md#heteroskedasticity).

## Multiple Time Series and Cointegration

Regressing one nonstationary series on another can create a spurious relationship. The key exception is **cointegration**.

Two unit-root series are cointegrated when a linear combination of them is stationary. Economically, they may wander individually but share a stable long-run equilibrium relationship.

### Engle–Granger Procedure

For two candidate series:

1. Test each series for a unit root.
2. If both are integrated of the same order, estimate the proposed long-run regression in levels:
   $$
   Y_t=\beta_0+\beta_1X_t+u_t.
   $$
3. Apply an Engle–Granger residual-based unit-root test to $\hat u_t$.
4. Use the Engle–Granger critical values, which differ from ordinary Dickey–Fuller critical values because the residuals are estimated.

If the residuals are stationary, the series are cointegrated and the levels regression represents a long-run relationship. If the residuals retain a unit root, the levels regression is likely spurious and the series should generally be transformed, such as through differencing.

> [!IMPORTANT]
> Cointegration does not mean that each individual series is stationary. It means that a particular linear combination of the nonstationary series is stationary.

## Model-Selection Workflow

<iframe
  class="time-series-workflow"
  src="/charts/time-series-model-selection.html"
  title="Interactive time-series model-selection workflow"
  loading="lazy"
></iframe>

> [!IMPORTANT]
> A unit root does **not** rule out ARIMA. It rules out fitting a stationary AR, MA, or ARMA model directly to the nonstationary level. An ARIMA($p,d,q$) model is appropriate only when differencing the series $d$ times produces a stationary ARMA($p,q$) process.

For a regression involving multiple nonstationary series, test for cointegration before interpreting a levels relationship.

Model selection is iterative rather than mechanical. Prefer a parsimonious specification that has economically sensible coefficients, approximately white-noise residuals, stable parameters, and credible out-of-sample performance.

## Summary

| Feature | Diagnostic idea | Typical response |
| --- | --- | --- |
| Deterministic level trend | Plot and trend regression | Linear or log-linear trend |
| Persistent dependence in a stationary series | ACF and residual tests | AR, MA, or ARMA terms |
| Unit root | DF or ADF test | Difference, then model the stationary transformation |
| Repeating calendar pattern | Seasonal plot and lag structure | Seasonal dummies, lags, or differencing |
| Volatility clustering | ACF of squared residuals or ARCH test | ARCH/GARCH when variance forecasting matters |
| Several nonstationary series | Residual-based cointegration test | Levels relation only if cointegrated |

<style>
.time-series-workflow {
  display: block;
  width: 100%;
  height: 1340px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

.acf-pacf-chart {
  display: block;
  width: 100%;
  height: 790px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .time-series-workflow {
    height: 2100px;
  }
  .acf-pacf-chart { height: 1470px; }
}
</style>
