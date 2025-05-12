# Evaluating Regression Model

## Goodness of Fit

| Source     | df        | SS   | MS                      |
| ---------- | --------- | ---- | ----------------------- |
| Regression | k         | RSS  | MSR = RSS / k           |
| Error      | n - k - 1 | SSE  | MSE = SSE / (n - k - 1) |
| Total      | n - 1     | SST  |                         |

* Starndard error of estimate: $SSE=\sqrt{MSE}$. 
* $F$ statistics $=MSR/MSE$
* $R^2=RSS/SST$

> [!Note]
>
> Model $R^2$ will always increase with increasing model complexity, leading to overfitting problem. Therefore we need to make **Adjusted $R^2$** to punish complexity:
> $$
> \bar{R^2}=1-(\frac{n-1}{n-k-1}(1-R^2))
> $$

Based on the idea, a stricter standard is **AIC**:
$$
AIC =n\ln(\frac{SSE}{n})2(k+1)
$$
AIC is better when lower. $2(k+1)$ is penalty for complexity

An adjusted standard is **BIC** (stricter):
$$
BIC = n\ln (\frac{SSE}{n})+\ln n(k+1 )
$$

## Hypothesis Testing

To test whether an independent variable is significant to the dependent variable, we use $t$ statistics:

$H_0: b_i = 0, H_1:b_1\ne0$
$$
t=\frac{\hat{b_i}}{s_{\hat{b_i}}}
$$
To include correlations between independent variables and view the model as a whole, we use $F$ test:

$H_0: b_i=0\forall i, H_1: \exists i, b_i=0$.
$$
F = \frac{MSR}{MSE}
$$

> [!Note]
>
> **Restricted F-test** is used to test if part of variables are significant. The method is to exclude the tested variables from the original model to create a restricted model:
>
> $H_0:b_k=0 \forall k, H_1:\exists k, b_k\ne0$.
> $$
> F = \frac{(SSE_{restricted}-SSE_{unrestricted})/q}{SSE_{unrestricted}/(n-k-1)}
> $$

## 