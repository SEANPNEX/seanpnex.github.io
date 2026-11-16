# Quantitative Methods — quiz misses

## 2026-10-23 — Multiple regression (M1)

**Q1:** List the assumptions of the multiple regression model.

**My answer:** Left out independence of errors.

**Correct:** Linearity; homoskedasticity; **independence of errors (no serial correlation)**; normality of errors; independence of the Xs (no **perfect** multicollinearity, Xs not random).

**Gap:** Missed the no-serial-correlation assumption.

**Q2:** Interpret a slope coefficient in a multiple regression.

**My answer:** Change in Y for a one-unit change in X_j.

**Correct:** Expected change in Y for a one-unit change in $X_j$, **holding all other Xs constant**, so it is a **partial** regression coefficient. $b_0$ is the expected Y when all Xs are 0.

**Gap:** Left out "holding all other Xs constant".

## 2026-11-15 — Time series (M5)

**Q:** An AR(1) is estimated on the first-differenced series $y_t=x_t-x_{t-1}$: $y_t=b_0+b_1 y_{t-1}+\varepsilon_t$. The slope is 0.052 ($t=0.585$) and the intercept is insignificant ($t=-1.13$). What process does the original series $x_t$ follow?

**My answer:** Covariance stationary.

**Correct:** Random walk (without drift). Neither coefficient in the differenced AR(1) differs significantly from 0, consistent with $b_0=0$ and $b_1=0$: a first-differenced random walk is just $y_t=\varepsilon_t$, so nothing is left to predict. The original series is the levels AR(1) with $b_0=0$ and $b_1=1$, $x_t=x_{t-1}+\varepsilon_t$. It has a unit root, so it is not covariance stationary ($\operatorname{Var}(x_t)=(t-1)\sigma^2$ grows without bound) and its mean-reverting level $b_0/(1-b_1)$ is undefined ($0/0$). The first difference is covariance stationary; that is the evidence that the original series is a random walk, which is not.

**Gap:** Chose covariance stationary.
