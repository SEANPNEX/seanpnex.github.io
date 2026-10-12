<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover,
.blur-hover:focus-within {
    filter: none;
}
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 440px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
.fx-concept-chart.dmp-chart { height: 560px; }
.fx-concept-chart.alpha-chart { height: 560px; }
.fx-concept-chart.tfp-chart { height: 560px; }
.fx-concept-chart.solow-chart { height: 560px; }
.fx-concept-chart.solow-s-chart { height: 560px; }
.fx-concept-chart.solow-n-chart { height: 560px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.dmp-chart { height: 980px; }
    .fx-concept-chart.alpha-chart { height: 980px; }
    .fx-concept-chart.tfp-chart { height: 720px; }
    .fx-concept-chart.solow-chart { height: 720px; }
    .fx-concept-chart.solow-s-chart { height: 720px; }
    .fx-concept-chart.solow-n-chart { height: 720px; }
}
</style>

# Economic Growth

## Importance of Economic Growth

Developed vs. Developing Countries

| Factor | Developed | Developing |
|--------|-----------|------------|
| Savings and investment | High savings; deep investment channels | Lower savings; limited investment |
| Financial markets and intermediaries | Well-developed, liquid markets | Less developed, shallow markets |
| Political stablility, rule of law, and property rights | Strong and enforceable | Weaker, less predictable |
| Education and health care systems | Strong; high human capital | Weaker; lower human capital |
| Tax and regulatory | Efficient, growth-friendly | Inefficient, often burdensome |
| Free trade and unrestricted capital flows | Open trade and capital mobility | Often restricted trade/capital flows |

Potential growth matters to equity investors:
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$

How to read the stack:

* Line 1: expected equity return is income plus price appreciation.
* Line 2: that price appreciation splits into a valuation change (repricing of $P/E$) and earnings growth.
* Line 3–4: EPS growth is tied to the macro path — inflation $i$ and real growth $g$ — plus a share-count / earnings-mix term $\Delta S$ (buybacks and relative dynamism, i.e. whether corporate earnings grow faster or slower than the broad economy).

So higher potential real growth $g$ raises the earnings component of $E(Re)$, even before any change in multiples.



Potential growth matters to fixed income investor:

* Higher growth translate into higher interest rate and expected return
* Generally better credit quality
* Credit risk reduced
* Government policy and bugetary balance.

## Production Function

Production function is defined as
$$
\begin{align}
Y&=Af(K,L)\\
&=AK^{\alpha}L^{1-\alpha}
\end{align}
$$
where $K$ is capital factor and $L$ is labor factor. $A$ is total factor productivity, usually technology. $Y$ is the total output. $\alpha$ is the share of GDP paid out to the supplier of capital. 

For GDP per capita, 
$$
\begin{align}
y&=\frac{Y}{L}\\
&=AK^{\alpha}L^{-\alpha}\\
&=A(\frac{K}{L})^{\alpha}\\
&=Ak^{\alpha}
\end{align}
$$
> [!Note]
> $$
> Y = \frac{Y}{L}L = yL
> $$

The growth rate is obtained by taking log transform of both sides
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
> [!Note]
>
> This step is not mathematical plausible. SImply take it as economic term.

For growth rate per capita, the process is same:
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
> [!note]
>
> Similarly, take the same step on the third formula yields:
> $$
> =\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}
> $$

### Calculation of $\alpha$

Recall that to maximize the total output with respect to capital, we take derivative to get marginal product of capital (MPK)
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
MPK maximize when it equals to rental price of capital (marginal cost), denoted as $r$:
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

### Features of growth function

The growth function has 2 important features:

* Constant return to scale
* Diminishing marginal productivity: Extra output obtained from additional input will decline
* For per capita, smaller $\alpha$ will lead to stronger diminishing marginal productivity effect.
* Increase $A$ will move the function upwards (reduce marginal productivity effect)

#### Constant return to Scale

Scale both inputs by the same factor (here, double $K$ and $L$):
$$
K \to 2K,\quad L \to 2L
$$
Then
$$
\begin{align}
A(2K)^{\alpha}(2L)^{1-\alpha}
&= 2^{\alpha}\,2^{1-\alpha}\,AK^{\alpha}L^{1-\alpha}\\
&= 2^{\alpha+(1-\alpha)}AK^{\alpha}L^{1-\alpha}\\
&= 2AK^{\alpha}L^{1-\alpha}\\
&= 2Y.
\end{align}
$$
Doubling inputs doubles output, so the production function has constant returns to scale.
#### Diminishing marginal productivity 

<iframe
  class="fx-concept-chart dmp-chart"
  src="/charts/diminishing-marginal-productivity.html"
  loading="lazy"
  title="Diminishing marginal productivity"
></iframe>
Holding labor fixed, each extra unit of capital raises output by less than the last one: the production curve flattens and $\mathrm{MPK}=\alpha A k^{\alpha-1}$ falls as $k$ rises. The same logic applies to labor: holding capital fixed, $\mathrm{MPL}=(1-\alpha)A(K/L)^{\alpha}$ declines as $L$ rises, so each extra worker adds less output than the last. That is why capital deepening alone cannot sustain long-run growth in per-capita output without growth in $A$.

#### For per capita, smaller $\alpha$ will lead to stronger diminishing marginal productivity effect.

Recall $y = Ak^{\alpha}$,

From the per-capita production function above,

$$
y = Ak^{\alpha}.
$$

Differentiating with respect to capital intensity gives the marginal product of capital per worker (same idea as the MPK chart under Diminishing marginal productivity):

$$
\frac{dy}{dk} = \alpha A k^{\alpha-1}.
$$

Taking logs and differentiating recovers the growth decomposition already in this note:

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k}.
$$

So the elasticity of $y$ with respect to $k$ is exactly $\alpha$: a 1% rise in $k$ raises $y$ by $\alpha\%$. The slope $\alpha A k^{\alpha-1}$ has exponent $\alpha-1<0$; when $\alpha$ is smaller, $\alpha-1$ is more negative, so that slope falls faster as $k$ rises.

A smaller $\alpha$ therefore means a flatter contribution of capital deepening to growth ($\alpha\,dk/k$ is smaller) and a more concave $y(k)$ curve whose MPK fades sooner — stronger diminishing marginal productivity of capital intensity.

<iframe
  class="fx-concept-chart alpha-chart"
  src="/charts/alpha-diminishing-productivity.html"
  loading="lazy"
  title="Smaller alpha bends the production curve sooner"
></iframe>
#### Increase $A$ will move the function upwards

From the same per-capita function $y = Ak^{\alpha}$ and growth decomposition

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k},
$$

output per worker can rise in two distinct ways while $\alpha$ stays fixed. Moving along a given curve (higher $k$, same $A$) is capital deepening — the $\alpha\,dk/k$ term. A parallel upward shift of the whole curve (higher $A$, same $k$) is an increase in TFP — the $dA/A$ term. That shift raises $y$ at every capital intensity and therefore softens how quickly diminishing marginal productivity constrains growth from capital deepening alone.

<iframe
  class="fx-concept-chart tfp-chart"
  src="/charts/tfp-shift-capital-deepening.html"
  loading="lazy"
  title="Capital deepening versus increase in TFP"
></iframe>

>[!Important]
>
>* Capital deeping: increase $k=\frac{K}{L}$.
>* Capital deepening is useless when $MPK=r$.

Extending the production function:

* Natrual Resource: Renewable and Non-renewable. Ownership and production of natural resources is not necessay for a country to achieve a high level of income. **Dutch disease**: where currency appreciation driven by strong export demand for resources makes other segmentsment of the economy uncompetitive.

* Labor supply:

  * Population growth (Fertility, Mortality, Age structure)
  * Labor force participation
  * Net immigration 
  * Average hours worked

* Human capital:

  * Education, training, or life experience 
  * Education have a spillover or externality impact 
  * Education encourages growth through innovation (increase $A$).

* ICT and Non-ICT capital: 

  * Spending on Information, Computers and Telecommunications equipment will generate a Network externalities, increasing productivity.
  * Non-ICT: includes non-residential construction, transport equipment, and machinery.
* Technology: Human capital + ICT/Non-ICT capital
* Public infrastrure

## Growth Theory

Growth theory studies $\frac{dy}{y}$, the growth speed of GDP per capita.

Recall from above:
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha\frac{dk}{k},\qquad \frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
$$

> [!note]
>
> The second meaning of $\alpha$ is the elasticity of output with respect to capital from the formula above.

### Classical Growth Theory (Malthus)

The key assumption is $L$ will increase and $Y$ will increase. $Y$ increase will further increase $L$: Tech advances $\to$ labor productivity $\uparrow$ $\to$ higher population growth $\to$ diminishing marginal returns of labor $\to$ per capita income.

Therefore, for $y$, in the long run tech advance results in a larger but not richer population. There's no growth in per capita output.

### Neoclassical Growth Theory (Robert Solow)

All assumptions below are in **long term equilibrium **status of economy. The goal of the model is to find $(k,y)$ when the status is reached.

In the long run the growth rate of $y$ is related to:

* Saving/Investment rate $s$
* Rate of tech change $\theta=\frac{dA}{A}$
* population growth rate $n=\frac{dL}{L}$

**Assuming in the long run $\frac{Y}{K}$ stays the same**, then $\frac{Y/L}{K/L}$ is the same, then $\frac{y}{k}$ is the same. Then $\frac{dy}{y}=\frac{dk}{k}$. 

From the previous growth formula $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$.

Combining the formulas above: $(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$, $\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$. Denote it as $g^*=\frac{\theta}{1-\alpha}$ . 

From $Y=yL$, $G^*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$.

**Assuming in the closed economy, investment must be funded by domestic savings**. Let $s$ be the fraction of $Y$ saved, then $I=sY$, where $I$ is the total investment. Then let $\delta$ be the depreciation rate, $dK = sY-\delta K$. 

From $k=\frac{K}{L}$, $\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$. With $\frac{dk}{k}=\frac{\theta}{1-\alpha}$, we can have: 
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
Assuming all parameters $s, \theta, \alpha,\delta,n$ holds unchanged, $\varphi$ is some constant value.

Which gives our original assumption: **In the long run, $\frac{Y}{K}$ is constant.**

Then recall that $MPK = \alpha\frac{Y}{K}$. $\frac{Y}{K}$ is assumed to be constant, same as $\alpha$. $MPK$ is then a constant.

Further $\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$. Then $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$. $sy$ is roughly the gross investment per worker since $\frac{sY}{L}=\frac{I}{L}$. The new investment becomes three parts from the formula:

* Capital deepening
* Replace fixed assets against depreciation 
* Provide capital for new workers

Since $sy=sAk^{\alpha}$ (this holds from the definition without assumptions), combining $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$ (the formula obtained from equilibrium status assumptions), we can find the $k$ and its corresponding $y$ such that $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ is constant by solving the equation.

<iframe
  class="fx-concept-chart solow-chart"
  src="/charts/solow-steady-state.html"
  loading="lazy"
  title="Solow steady-state savings vs required investment"
></iframe>

<iframe
  class="fx-concept-chart solow-s-chart"
  src="/charts/solow-saving-rate-shift.html"
  loading="lazy"
  title="Increase in saving rate shifts steady state"
></iframe>

An increase in the saving rate $s$ shifts the savings curve $sy = sAk^{\alpha}$ upward from $s_1 f(k)$ to $s_2 f(k)$, so the intersection with the fixed required-investment ray $[\delta + n + \theta/(1-\alpha)]k$ moves from steady state A to B — higher $k^*$ and $y^*$ — while the long-run growth rate $\theta/(1-\alpha)$ is unchanged. Because $s \in [0,1]$, raising $s$ to lift equilibrium $y$ and $k$ has a limit: $s$ cannot exceed 1.

<iframe
  class="fx-concept-chart solow-n-chart"
  src="/charts/solow-labor-growth-shift.html"
  loading="lazy"
  title="Increase in labor force growth lowers steady state"
></iframe>

An increase in labor-force growth $n$ rotates the required-investment ray upward from $[\delta + n_1 + \theta/(1-\alpha)]k$ to the steeper $[\delta + n_2 + \theta/(1-\alpha)]k$, so the intersection with the fixed savings curve $sy = sAk^{\alpha}$ moves from A to B — lower $k^*$ and $y^*$ — while the long-run per-capita growth rate $\theta/(1-\alpha)$ stays the same (aggregate growth $G^*=n+\theta/(1-\alpha)$ rises with $n$).

> [!Note]
>
> With increasing $s$, $k$ and $y$ will be larger. But $\frac{\theta}{1-\alpha}$ will stay the same.

> [!Important]
>
> Some conclusions of neoclassical growth theory:
>
> * Capital accumulation affects the level of output but not the growth rate in the long run 
> * Regardless of its initial capital to labor ratio or initial level of productivity, a growing economy will move to a point of steady-growth rate
> * In a steady state, the growth rate of output is $G^*=n+\frac{\theta}{1-\alpha}$
>
> Implications of the model:
>
> * When first begin to accumulate capital (capital deepening), the growth will be higher than steady-state rate. But the growth will slow down.
> * The only way to sustain growth in potential GDP per capital is through tech change or growth in total factor productivity.
>
> Effect of saving:
>
> * Initial impact of higher saving rate is to temporarily raise the growth in the economy. Once an economy achieves steady-state growth, the growth rate does not depend on the percentage of incomee saved or invested.

#### Example

Calculate the steady-state growth rates from the neoclassical model for Country A and B.

| Country | Labor Cost in Total Factor Cost (%) | TFP Growth (%) | Labor Force Growth (%) |
| ------- | ----------------------------------- | -------------- | ---------------------- |
| A | 56.1 | 2.9 | 1.2 |
| B | 53.8 | 0.2 | 0 |

Recall $G^*=\Delta Y/Y=\frac{\theta}{1-\alpha}+n$, with Labor Cost in Total Factor Cost $=1-\alpha$, TFP Growth $=\theta$, and Labor Force Growth $=n$.

<span class="blur-hover" tabindex="0">

**Country A:**

$$
G^*=\frac{2.9\%}{56.1\%}+1.2\%=6.37\%
$$

**Country B:**

$$
G^*=\frac{0.2\%}{53.8\%}+0\%=0.37\%
$$

</span>

#### Example

The growth rate of potential GDP estimated for country A is 8.5% and for country B is 0.5%. From the prior example, $G^*=6.37\%$ for A and $G^*=0.37\%$ for B.

Compare the steady-state growth rates to the growth rates in potential GDP and explain the results.

<span class="blur-hover" tabindex="0">

**Country A:** Potential GDP growth $8.5\% > G^*=6.37\%$, so the economy is still converging. Physical capital stock is below the steady state; capital deepening is a significant driver of productivity growth and potential GDP growth.

**Country B:** Potential GDP growth $0.5\%$ vs $G^*=0.37\%$ — essentially at the steady state. Capital investment has no significant effect on the growth rate. Only changes in TFP growth, labor growth, and the labor share of output affect potential GDP growth.

</span>

### Endogenous growth theory

Unlike neoclassical model, assume there are no diminishing marginal returns to capital for the economy as a whole in the endogenous growth model. 

* Capital accumulation is the main factor accounting for long run growth
* R&D expenditure have large possitive externalities or spillover effects

Therefore, the economy does not reach a steady growth rate. Instead, saving and investment can generate self-sustaining growth at a permanently higher rate.

### Convergence Debate

**Absolute convergence**: Developing countries will eventually catch up and match them in per capita output. 

* The neoclassical model assumes all countries have access to the same tech, this implies convergence of per capital growth rate among all countries
* The neoclassical model does not imply absolute convergence.

**Conditional convergence**: Assume same saving rate, population growth rate, and production function, we will have same level of $y$ and the growth rate $\frac{dy}{y}$.

**Club convergence**: Only rich and middle-income countries that are members of the club are converging to the income level of the richest country. Poor countries can join the club if they make institutional change. Countries fall into a non-convergence trap if they do not implement necessary institutional reforms.

Convergence can occur with:

* Tech advances
* Capital deepening

For endogenous growth model, there is no prediction that convergence will occur since capital deepening is easier for developed countries.





