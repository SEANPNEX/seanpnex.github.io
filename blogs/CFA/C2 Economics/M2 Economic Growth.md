<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover {
    filter: none;
}
</style>

# Economic Growth

## Importance of Economic Growth

Developed vs. Developing Countries

* Savings and investment
* Financial markets and intermediaries
* Political stablility, rule of law, and property rights
* Education and health care systems
* Tax and regulatory 
* Free trade and unrestricted capital flows

Potential growth matters to equity investors:
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$
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
The growth rate is obtained by taking log transform of both sides
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
For growth rate per capita, the process is same:
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
To maximize the total output with respect to capital, we take derivative to get marginal product of capital (MPK)
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
MPK maximize when it equals to rental price of capital, denoted as $r$:
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

>[!Note]
>
>The growth function has 2 important features:
>
>* Constant return to scale
>* Diminishing marginal productivity: Extra output obtained from additional input will decline
>* For per capita, smaller $\alpha$ will lead to stronger diminishing marginal productivity effect.
>* Increase $A$ will move the function upwards (reduce marginal productivity effect)

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

### Classical Growth Theory

The key assumption is $L$ will increase and $Y$ will increase. $Y$ increase will further increase $L$: Tech advances $\to$ labor productivity $\uparrow$ $\to$ higher population growth $\to$ diminishing marginal returns of labor $\to$ per capita income.

Therefore, for $y$, in the long run tech advance results in a larger but not richer population. There's no growth in per capita output.

### Neoclassical Growth Theory

In the long run the growth rate of $y$ is related to:

* Saving/Investment rate $s$
* Rate of tech change $\theta$
* population growth rate $n$

Assuming in the long run $\frac{Y}{K}$ stays the same, then $\frac{Y/L}{K/L}$ is the same, then $\frac{y}{k}$ is the same. Then $\frac{dy}{y}=\frac{dk}{k}$. 

From the previous growth formula $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$.

Combining the formulas above: $(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$, $\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$. Denote it as $g*=\frac{\theta}{1-\alpha}$ . 

From $Y=yl$, $G*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$.

Assuming in the closed economy, investment must be funded by domestic savings. Let $s$ be the fraction of $Y$ saved, then $I=sY$. Then $dK = sY-\delta K$, let $\delta$ be the depreciation rate.

From $k=\frac{K}{L}$, $\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$. With $\frac{dk}{k}=\frac{\theta}{1-\alpha}$, we cam have: 
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
Which gives our original assumption: In the long run, $\frac{Y}{K}$ is constant.

Then with $MPK = \alpha\frac{Y}{K}$ is also constant.

Further $\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$. Then $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$. 

Since $sy=sAk^{\alpha}$, we can find the $k$ such that $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ is constant by solving the equation.

> [!Note]
>
> With increasing $s$, $k$ and $y$ will be larger. But $\frac{\theta}{1-\alpha}$ will stay the same.

> [!Important]
>
> Some conclusions of neoclassical growth theory:
>
> * Capital accumulation affects the level of output but not the growth rate in the long run
> * Regardless of its initial capital to labor ratio or initial level of productivity, a growing economy will move to a point of steady-growth rate
> * In a steady state, the growth rate of output is $G*=n+\frac{\theta}{1-\alpha}$
>
> Implications of the model:
>
> * When first begin to accumulate capital (capital deepening), the growth will be higher than steady-state rate. But the growth will slow down.
> * The only way to sustain growth in potential GDP per capital is through tech change or growth in total factor productivity.
>
> Effect of saving:
>
> * Initial impact of higher saving rate is to temporarily raise the growth in the economy. Once an economy achieves steady-state growth, the growth rate does not depend on the percentage of incomee saved or invested.

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





