# Backtesting and Simulation

**Backtesting** uses historical data to test a model or an investment strategy: it simulates how the strategy would have performed had it been followed in the past.

- Steps in backtesting an investment strategy:
  1. **Strategy design**
     - Specify investment hypothesis and goal(s).
     - Determine investment rules, process and key parameters.
  2. **Historical investment simulation**
     - Form and rebalance investment portfolios for each period according to the investment rules.
     - Usually done with a **rolling window**: at each rebalancing date, use only the data available up to that date to form the portfolio, hold it over the next period (out of sample), then roll forward and repeat.
  3. **Analysis of backtesting output**
     - Calculate portfolio performance statistics.

Check:

* **Average return**, and risk-adjusted measures such as the Sharpe ratio.
* **Volatility**: the standard deviation of returns.
* **Downside risk**: returns are often not normal (negative skew, fat tails), so volatility is not enough:
  * [VaR](M3%20Managing%20Market%20Risk.md#value-at-risk-var) and [CVaR](M3%20Managing%20Market%20Risk.md#extensions-of-var): the tail losses.
  * **Maximum drawdown**: the largest fall from a peak in portfolio value to a later trough. E.g., a portfolio that rises to 120 and then falls to 90 before recovering has a drawdown of $90/120-1=-25\%$.

Three common problems can make a backtest look better than the strategy really is:

* **Survivorship bias**: the data include only companies that still exist today; failed, delisted or acquired companies are missing. Because the losers are dropped, returns are **overstated** and risk understated. Fix: use a database that keeps all companies, including the dead ones.
* **Look-ahead bias**: using information that was **not available** at the time of the decision, e.g., annual earnings that were reported months after the year end, or data that were later restated. Fix: use **point-in-time** data, and lag the data by the reporting delay.
* **Data snooping**: testing many strategies or parameters on the same data until one works by chance, then reporting only that one. Fix: test the strategy on data not used to design it (**out-of-sample** testing, cross-validation), and demand a higher hurdle for significance (e.g., a $t$-statistic above 3).

## Simulation

A backtest shows only **one path**, the one history happened to take. Simulation generates many possible scenarios to see how the strategy would do across them, including scenarios worse than history.

* **Historical simulation**: select randomly from the historical data, e.g., draw past months' returns, with replacement, to build many new paths (**sampling**, **bootstrapping**).
  * Keeps the real distribution of returns, including fat tails and the correlations between assets.
  * Cannot produce outcomes that never happened, and assumes the past is representative.
* **Monte Carlo simulation**: assign a statistical distribution, typically a **multivariate distribution** with the assets' means, volatilities and correlations, and draw random scenarios from it.
  * Flexible: can model scenarios beyond history, and distributions with fat tails or skew.
  * The results depend on the assumed distribution and its parameters (model risk).

**Sensitivity analysis** reruns the simulation with different assumptions, e.g., a fat-tailed distribution instead of a normal one, to check whether the strategy's results hold up.
