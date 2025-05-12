# Extensions of Multiple Regression

## Influence Analysis

### High leverage point

High leverage point: An extreme value of independent variable 

**Leverage** measures the distance. It is usually between $0$ and $1$, the higher, the more influence on some observation. 

* **Rule of Thumb**: Exceeds $3(\frac{k+1}{n})$ poentially influential observation.

### Outlier

An extreme point in dependent variable

**Studentized residual $t_{i*}$** Compare the observed $y$ with the predicted $y$ from the restricted model with some observation deleted.

* t-test with degree of $df=n-k-2$. $H_0:$ potentially influential observation

### Cook's Distance

* Higher, more problematic
* Higher, more likely influentgial 

## Qualitative Variables

 ### Dummy Variables

Dummy variables can be used to represet qualitative variables in regression analysis, to represent categories. 

> [!Note]
>
> We use $n-1$ dummy variables to represent $n$ categories to avoid multicollinearity

### Logit Model

Studying the odds for win or loss (0 or 1): $\ln (\frac{p}{1-p})=b_0+b_1x_1+\cdots+\epsilon$ with $p =\frac{1}{1+e^{-(b_0+b_1+\cdots+\epsilon)}}$.

To fit the model, we use **maximum likelihood estimation (MLE)** and use pseudo $R^2$ to evaluate. Similarly, **log likelihood** can be used to evaluate, higher better.

Similar to joint F-test, we use **Likelihood Ratio (LR) test** to test if some variables are significant. $LR$ larger means the variable are significant (reject $H_0$).

