# Model Misspecification

* Omitted variables
* Inappropriate form of variables
* Inappropriate variable scaling
* Inappropriate data pooling 

## Vialations of Regesstion Assumtions

### Heteroskedasticity

* Unconditional heteroskedasticity: Heteroskedasticity of the error variance is not correlated with independent variables. Creates no major problems for statistical inference.
* Conditional heteroskedasticity: Heteroskedasticity of the error variance is correlated with the values of independent variables.

In this case, the coefficient esitimates $\hat{b_j}$ are not affected. The standard errors of coefficient $s_{\hat{b_j}}$ are usually unreliable. With financial data, the standard errors are most likely **underestimated ** and the $t$-statistics will be inflated, and tend to find significant relationships where not actually exist (type I error).

To test heteroskedasticity, we can use **Breusch-Pagen $\chi^2$ test**:

$H_0: \text{no heteroskedasticity}$.
$$
BP\chi^2 = n\times R^2_{resid}, df=k
$$
where $n$ is number of observations, $R^2_{resid}$ is $R^2$ of a second regression of the squared residuals from the first regression on the independent variables:
$$
\epsilon_i^2 = a_0 +a_1x_{1i}+a_2x_{2i}+\cdots+e_i
$$
To correct Heteroskedasticity, we use adjusted **robust standard errors** to recalculate $t-$statistics, or use **generalized least squares** to fit the model.

### Serial Correlation

The error term are correlated with another, typically in time series. Positive serial correlation will increase the chance of error term in same sign, vice versa for negative.

* Positive serial correlation: standard errors underestimated and t-statistics inflated
* Negative serial correlation: Overestimated standard errors and underestimated t-statistics

To test serial correlation, we use **Durbin-Watson** test:

* The result is in $(0,4)$. If near 4, negative serial correlation, If near 0, positive, If near 2, no serial correlation.
* It is limited to first order serial correlation.

The **Bresusch-Godfrey test**:

$H_0:p_1=0,H_1:p_1\ne0$.
$$
\hat{\epsilon_t}=a_0+a_1x_{1t}+a_2x_{2t}+\cdots+a_kx_{kt}+p_1\hat{\epsilon_{t-1}}+e^t
$$
or it can be extended with higher orders of $p$. It uses $F$ test with $df = n-p-k-1$.

To correct serial correlation, we use adjusted **Newey-West** standard errors or modify the regression itself.

### Multicolinearity

It refers to cases where 2 or more independent variables are highly but not perfectly correlated to each other. Estimates of correlation become inprecise and reliable. 

* Similar to negative serial correlation, standard errors overestimated.

To test, we use **VIF**:
$$
VIF_j =\frac{1}{1-R_j^2}
$$


* The smaller the better
* If $VIF>5$, further investigation
* If $VIF>10$, multicollinearity

To correct:

* Exclude variables
* Increase sample size

