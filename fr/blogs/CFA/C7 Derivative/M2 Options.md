---
title: "Options"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 520px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
</style>

# Options

La logique fondamentale est l’**absence d’arbitrage** : le prix d’une option est le coût d’un portefeuille composé du sous-jacent et d’une obligation sans risque qui réplique son gain.

## Évaluation binomiale des options {#binomial-option-valuation}

### Formule de base

Sous neutralité au risque, la formule à chaque pas de longueur $\Delta t$ est :

$$
\begin{align}
S_u &= S_0 \cdot u\\
S_d &= S_0 \cdot d\\
p_u &= \frac{e^{r\Delta t}-d}{u-d}\\
p_d &= 1-p_u\\
C_T &= \max(S_T-X,0)\\
C_0 &= e^{-r\Delta t} \left(p_uC_u + p_dC_d\right)
\end{align}
$$

Ici $r$ est en capitalisation continue ; avec un taux discret, remplacez $e^{r\Delta t}$ par $(1+r)^{\Delta t}$, comme dans la notation CFA ci-dessous. Pour plus d’un pas, appliquez la dernière ligne à chaque nœud, de l’échéance jusqu’à aujourd’hui (**récurrence à rebours**).

Le code ci-dessous évalue des calls et des puts européens ou américains sur un arbre, et reproduit l’[exemple à deux périodes](#example) ci-dessous. Il prend directement les facteurs de hausse et de baisse ; `crr_factors` les construit à partir d’une volatilité, et `annualized_volatility` estime cette volatilité à partir d’un historique de prix (p. ex. les clôtures du SPY sur les 30 dernières séances).

```python
import math


def binomial_price(S, X, r, u, d, n, option="call", american=False):
    """Price an option on a recombining binomial tree.

    S: spot price; X: exercise price; r: risk-free rate per step (discrete);
    u, d: up and down factors per step; n: number of steps.
    """
    pi_u = (1 + r - d) / (u - d)                 # risk-neutral up probability
    if not 0 < pi_u < 1:
        raise ValueError("no-arbitrage requires d < 1 + r < u")
    payoff = (lambda s: max(s - X, 0.0)) if option == "call" else (lambda s: max(X - s, 0.0))

    # Values at expiry: node j has j down moves.
    values = [payoff(S * u ** (n - j) * d ** j) for j in range(n + 1)]

    # Backward induction: discounted risk-neutral expectation at each node.
    for step in range(n - 1, -1, -1):
        for j in range(step + 1):
            hold = (pi_u * values[j] + (1 - pi_u) * values[j + 1]) / (1 + r)
            if american:                         # exercise early if worth more
                hold = max(hold, payoff(S * u ** (step - j) * d ** j))
            values[j] = hold
    return values[0]


def crr_factors(sigma, dt):
    """Cox-Ross-Rubinstein up/down factors from volatility: U = e^(σ√Δt), D = 1/U."""
    u = math.exp(sigma * math.sqrt(dt))
    return u, 1 / u


def annualized_volatility(close, window=30, periods_per_year=252):
    """Volatility from the last `window` log returns of a pandas Series of prices."""
    import numpy as np
    log_returns = np.log(close / close.shift(1)).dropna()
    return log_returns.iloc[-window:].std() * math.sqrt(periods_per_year)


# The two-period example below: S = 50, X = 50, r = 5%, U = 1.356, D = 0.744
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "call")                 # 9.71
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put")                  # 5.06
binomial_price(50, 50, 0.05, 1.356, 0.744, 2, "put", american=True)   # 6.10
```

> [!Note]
>
> La volatilité est constante dans tout l’arbre. Si $U$ changeait d’un pas à l’autre, un chemin hausse-puis-baisse n’aboutirait plus au même prix qu’un chemin baisse-puis-hausse, et l’arbre cesserait de se recombiner.

### Composantes

Hypothèses de base de l’arbre binomial :

* On part de $S_0$.
* À chaque pas, le prix monte d’un facteur $U$ ou baisse d’un facteur $D$, avec $D<1+r_f<U$ (sinon il y a arbitrage). Par défaut $D=\frac{1}{U}$.

#### Modèle un

Le choix habituel de $U$ et $D$ (Cox, Ross et Rubinstein) suppose que le **logarithme** du prix suit une marche aléatoire : à chaque pas, $\ln S$ monte ou baisse de $\sigma\sqrt{\Delta t}$. Donc

$$
U=e^{\sigma\sqrt{\Delta t}},\qquad D=e^{-\sigma\sqrt{\Delta t}}=\frac{1}{U}
$$

et avec $\Delta t=1$, $S_u=Se^{\sigma}=SU$ et $S_d=Se^{-\sigma}=SD$. La même idée, appliquée aux taux d’intérêt plutôt qu’aux prix ($dr=\sigma\,dw$, où $w$ est une marche aléatoire), donne les arbres de taux du [Revenu fixe](../C6%20Fixed%20Income/M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model).

### Probabilité risque-neutre {#risk-neutral-probability}

Déduite de l’absence d’arbitrage : dans un monde risque-neutre, le prix attendu de l’action doit croître au taux sans risque.

$$
\begin{aligned}
E(S_t)&= \pi_uS_0U+(1-\pi_u)S_0D\\
&=S_0(1+r_f)^t
\end{aligned}
$$

En résolvant pour $\pi_u$ :

$$
\begin{align}
\pi_u &= \frac{(1+r_f)^t-D}{U-D}\\
\pi_d &= 1-\pi_u = \frac{U-(1+r_f)^t}{U-D}
\end{align}
$$

Ce ne sont pas les probabilités du monde réel : ce sont les probabilités pour lesquelles l’actualisation au taux sans risque donne le prix sans arbitrage. Ni les probabilités réelles ni le rendement attendu de l’action n’entrent dans le prix de l’option.

### Modèle binomial à une période

Pour une option européenne, les gains après un pas sont :

$$
\begin{align}
C_{u,t}&= \max(0, S_u-X)\\
P_{u,t}&=\max(0, X-S_u)\\
C_{d,t}&=\max(0,S_d-X)\\
P_{d,t}&=\max(0,X-S_d)
\end{align}
$$

La valeur actuelle est alors le gain espéré risque-neutre, actualisé :

$$C_0=\frac{\pi_u C_{u,t}+\pi_d C_{d,t}}{(1+r_f)^t}$$

$$P_0 = \frac{\pi_u P_{u,t}+\pi_d P_{d,t}}{(1+r_f)^t}$$

### Parité put-call

Un **call fiduciaire** (un call plus une obligation sans risque payant $X$) et un **put protecteur** (l’action plus un put) ont le même gain, $\max(S_T,X)$ ; ils doivent donc avoir le même prix :

|              | **Call fiduciaire**      | **Put protecteur** |
| ------------ | ----------------------- | ------------------ |
|              | $c + \frac{X}{(1+r_f)^t}$ | $S+p$              |
| **Si S ≤ X** | $0+X=X$                 | $S+(X-S)=X$        |
| **Si S ≥ X** | $(S-X)+X=S$             | $S+0=S$            |

On a alors :

$$
c+\frac{X}{(1+r_f)^t}=S_0+p
$$

### Méthode du portefeuille sans risque

1. Construire un portefeuille sans risque en **achetant $\delta$ actions** et en **vendant un call**. Sa valeur en $0$ est :
   $$
   V_{0}=\delta S_0-c_0
   $$

2. Puis en $t$ :
   $$
   \begin{align}
   V_{u,t}&=\delta S_u-C_u\\
   V_{d,t}&=\delta S_d-C_d
   \end{align}
   $$

3. Le portefeuille étant sans risque, $V_{u,t}=V_{d,t}$ ; on en déduit le **ratio de couverture** :
   $$
   \delta = \frac{C_u-C_d}{S_u-S_d}=\frac{C_u-C_d}{S_0(U-D)}
   $$

4. Un portefeuille sans risque doit rapporter le taux sans risque, $V_{u,t}=(1+r_f)^t V_0$. En substituant $V_0 = \delta S_0-c_0$ :
   $$
   c_0 = \delta S_0-\frac{\delta S_u-C_u}{(1+r_f)^t}
   $$
   ce qui donne la même valeur que la méthode des probabilités risque-neutres.

> [!Note]
>
> Si le prix de marché du call diffère de cette valeur, il y a arbitrage : négocier le call contre $\delta$ actions par call ($\delta$ est le **ratio de couverture**) et emprunter ou prêter la différence.

### Modèle binomial à deux périodes

Comme pour le modèle à une période, $\pi_u$ et $\pi_d$ se calculent de la même manière (et ont en fait la même valeur, tant que $U$, $D$ et la longueur du pas ne changent pas !). On remonte ensuite un pas à la fois : à chaque nœud, la valeur est l’espérance risque-neutre actualisée des deux valeurs du pas suivant.

#### Exemple {#example}

Soit une action sans dividende cotant actuellement 50 €. Un call européen sur cette action a une échéance de deux ans et un prix d’exercice de 50 €. Le taux sans risque est supposé de 5 % par an. Le facteur de hausse (U) est de 1,356 et le facteur de baisse (D) de 0,744. À partir de ces informations, il faut calculer la valeur actuelle du call et celle du put correspondant.

<div class="reveal" tabindex="0">


Pour résoudre le problème, on commence par

**Étape 1** : calculer les cours de l’action dans l’arbre binomial. Le cours hausse-hausse est $S^{++} = 91.94$, les cours hausse-baisse et baisse-hausse sont $S^{+-} = S^{-+} = 50.44$, et le cours baisse-baisse est $S^{–} = 27.68$.

**Étape 2** : calculer les valeurs des options à l’échéance. Pour le call, $C^{++} = 41.95$, et $C^{+-} = C^{-+} = 0.44$. La valeur du call baisse-baisse est $C^{–} = 0$. Pour le put, $P^{++} = P^{+-} = P^{-+} = 0$, et $P^{–} = 22.32$.

**Étape 3** : calculer la probabilité risque-neutre. La probabilité de hausse est $\pi_U = \frac{(1 + 0.05) - 0.744}{1.356 - 0.744} = 0.5$, et celle de baisse $\pi_D = 1 - \pi_U = 0.5$.

On calcule ensuite les valeurs intermédiaires. Pour le call, $C^{+} = \frac{(0.5 \times 41.94 + 0.5 \times 0.44)}{1.05} = 20.18$, et $C^{-} = \frac{(0.5 \times 0.44 + 0.5 \times 0)}{1.05} = 0.22$. Pour le put, $P^{+} = \frac{(0.5 \times 0 + 0.5 \times 0)}{1.05} = 0$, et $P^{-} = \frac{(0.5 \times 0 + 0.5 \times 22.32)}{1.05} = 10.63$.

**Étape 4** : calculer les valeurs initiales. Le call vaut $C_0 = \frac{(0.5 \times 20.18 + 0.5 \times 0.22)}{1.05} = 9.71$, et le put $P_0 = \frac{(0.5 \times 0 + 0.5 \times 10.63)}{1.05} = 5.06$.

En complément, la parité put-call permet de vérifier :

$P_0 = C_0 + PV(X) - S_0 = 9.71 + \frac{50}{(1.05)^2} - 50 = 5.06$.


</div>

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="Arbres binomiaux : taux d’intérêt, valeur de l’obligation, cours de l’action et valeur du call"
  loading="lazy"
></iframe>

L’arbre du cours de l’action et celui de la valeur du call dans le graphique correspondent à cet exemple ; les deux autres sont les arbres de taux du Revenu fixe.

### Exercice anticipé d’une option américaine

* Un call américain sur une action sans dividende ne sera pas exercé de manière anticipée, car le call vaut plus que sa valeur d’exercice, $S-X$ : il *vaut plus vivant que mort*. Un call américain sur une action sans dividende vaut donc autant qu’un call européen.
* Un call américain sur une action **versant un dividende** peut être exercé de manière anticipée, juste avant le détachement, pour capter le dividende.
* Un **put** américain peut être exercé de manière anticipée quand il est **profondément dans la monnaie** : recevoir $X$ maintenant et en tirer des intérêts peut valoir plus qu’attendre.

### Modèle binomial à deux périodes d’une option américaine

Une option américaine peut être exercée de manière anticipée quand :

* La valeur d’exercice est supérieure à la valeur sans arbitrage
* On retient, à chaque nœud, le maximum entre la valeur d’exercice et le prix calculé.

> [!Note]
>
> Calculez la valeur de l’option en cas d’exercice à **chaque** nœud, pas seulement à l’échéance.

Par exemple, si le put de l’exemple à deux périodes ci-dessus était américain, au nœud de baisse sa valeur d’exercice serait $50-37.20=12.80$, supérieure à sa valeur de détention de 10,63. Le put y serait exercé, et sa valeur actuelle passerait de 5,06 à 6,10 (voir le code ci-dessus).

### Option de taux d’intérêt {#interest-rate-option}

La procédure est la même que pour le modèle binomial standard, sur un arbre de taux, mais le gain est multiplié par le principal notionnel (et la période de calcul des intérêts), p. ex. un call paie $\text{NP}\times\max(0,\ r-X)\times\text{accrual period}$.

## Modèle de Black-Scholes {#black-scholes-model}

### Hypothèses

Le modèle de Black-Scholes est la version continue du modèle binomial : la limite quand le nombre de pas $\to\infty$ (donc $\Delta t\to0$).

* Le sous-jacent suit un mouvement brownien géométrique : ses rendements suivent une loi normale et son prix une loi lognormale, et il évolue sans saut d’un prix à l’autre (en continu).
* Le taux sans risque en capitalisation continue est constant et connu. Les investisseurs peuvent emprunter et prêter au taux sans risque.
* La volatilité du sous-jacent est constante
* Le marché est sans frictions :
  * Pas de coûts de transaction, pas d’impôts, pas de contraintes réglementaires
  * Pas d’arbitrage
  * Le sous-jacent est très liquide et se négocie en continu
  * La vente à découvert du sous-jacent est autorisée
* Les options sont européennes.

### Formule de base

La formule de Black-Scholes est :

$$
\begin{align}
C_0 &= S_0 N(d_1) - X e^{-r_f^cT} N(d_2) \\
P_0&= C_0+Xe^{-r_f^cT}-S_0\\
&=-S_0N(-d_1)+Xe^{-r_f^cT}N(-d_2)\\
d_1 &= \frac{\ln(\frac{S_0}{X}) + (r_f^c + \frac{1}{2} \sigma^2)T}{\sigma\sqrt{T}} \\
d_2 &= d_1 - \sigma\sqrt{T}
\end{align}
$$

Le code évalue calls et puts, avec un rendement du dividende continu $q$ optionnel (section suivante), sans aucune bibliothèque : $N(\cdot)$ s’obtient à partir de la fonction d’erreur.

```python
import math


def norm_cdf(z):
    return 0.5 * (1 + math.erf(z / math.sqrt(2)))


def black_scholes(S, X, T, r, sigma, q=0.0, option="call"):
    """BSM price. r and q are continuously compounded; q is the dividend yield."""
    d1 = (math.log(S / X) + (r - q + 0.5 * sigma ** 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    if option == "call":
        return S * math.exp(-q * T) * norm_cdf(d1) - X * math.exp(-r * T) * norm_cdf(d2)
    return X * math.exp(-r * T) * norm_cdf(-d2) - S * math.exp(-q * T) * norm_cdf(-d1)


black_scholes(50, 50, 1, 0.05, 0.3)                # 7.1156
black_scholes(50, 50, 1, 0.05, 0.3, option="put")  # 4.6771 = C - S + X e^(-rT)
```

Avec 500 pas et `crr_factors(0.3, 1/500)`, `binomial_price` donne 7,1127 pour le même call : l’arbre converge vers Black–Scholes.

### Modèle initial

Comme la parité put-call, la formule fait apparaître le portefeuille de réplication :

* Un **call** est un investissement en actions avec effet de levier : long de $N(d_1)$ actions, financé par un emprunt de $N(d_2)Xe^{-r_f^cT}$, c’est-à-dire une position vendeuse sur une obligation zéro-coupon sans risque.
* Un **put** est long de $N(-d_2)$ unités d’une obligation zéro-coupon sans risque payant $X$, plus court de $N(-d_1)$ actions.

#### Conclusions sur $N(d_1)$ et $N(d_2)$

* $N(d_1)$ est le $\delta$ du call
* $-N(-d_1)$ est le $\delta$ du put
* $N(d_2)$ est la probabilité risque-neutre que le call soit exercé à l’échéance (dans la monnaie).
* $N(-d_2)$ est la probabilité risque-neutre que le put soit exercé à l’échéance (dans la monnaie).
* $N(-d_2)=1-N(d_2)$, et de même $N(-d_1)=1-N(d_1)$.

### Modèle BSM avec avantages ou coûts de portage

Avec un rendement continu $\gamma$ sur le sous-jacent (rendement du dividende, ou taux d’intérêt étranger pour les options de change), remplacez $S_0$ par $S_0e^{-\gamma T}$ :

$$
\begin{align}
C_0 &= S_0e^{-\gamma T}N(d_1)\\
&\quad-Xe^{-r_f^cT}N(d_2) \\
P_0 &= Xe^{-r_f^c T}N(-d_2)\\
&\quad-S_0e^{-\gamma T}N(-d_1) \\
d_1 &=\frac{\ln(\frac{S_0}{X})+(r_f^c-\gamma+\frac{\sigma^2}{2})T}{\sigma\sqrt{T}}\\
d_2 &= d_1-\sigma\sqrt{T}
\end{align}
$$

Un rendement plus élevé baisse la valeur du call et augmente celle du put : le détenteur de l’option ne perçoit pas ce rendement.

### Options sur futures

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=futopt"
  title="Frise d’une option sur futures : vie de l’option, puis le contrat futures"
  loading="lazy"
></iframe>

#### Position

La position sur le futures dépend de la position sur l’option :

* Call acheté $\to$ position acheteuse sur le futures
* Put acheté $\to$ position vendeuse sur le futures

Le prix d’exercice $X$ est fixé dans l’option. À l’échéance $m$ de l’option, avec le prix du futures $F_m(n)$ : un call acheté est exercé si $F_m(n)>X$ ; un put acheté est exercé si $F_m(n)<X$. À l’exercice, la position futures est immédiatement réévaluée au marché, si bien que le détenteur reçoit $F_m(n)-X$ (call) ou $X-F_m(n)$ (put) en espèces.

#### Modèle de Black

Le modèle de Black est le BSM avec le prix du futures à la place du prix au comptant. Détenir un futures ne coûte rien ; son « rendement » est donc égal au taux sans risque, et les deux termes sont actualisés :

$$
\begin{align}
C_0 &= e^{-r_f^cT}\left[F_0N(d_1)-XN(d_2)\right]\\
P_0 &= e^{-r_f^cT}\left[XN(-d_2)-F_0N(-d_1)\right]\\
d_1 &= \frac{\ln (\frac{F_0(T)}{X})+\frac{\sigma^2}{2}T}{\sigma\sqrt{T}}\\
d_2&=d_1-\sigma\sqrt{T}
\end{align}
$$

où $F_0=F_0(T)$ est le prix actuel du futures et $T$ la durée jusqu’à l’échéance de l’option.

> [!Important]
>
> En pratique, les options sur futures sont souvent américaines, et l’option expire en général le jour de l’échéance du futures ou peu avant.

### Option de taux d’intérêt

Le contrat ressemble à une option sur futures et à un FRA. Le choix de la position et les cas d’exercice sont exactement les mêmes que pour les options sur futures, avec le taux du FRA comme sous-jacent : un **call** de taux paie quand le taux dépasse $X$ (comme un FRA acheté), un **put** quand il passe en dessous.

$$
\begin{align}
C_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^c n \frac{30}{360}}\\
&\quad\times\left(FR_{m\times n} N(d_1)-XN(d_2)\right)\\
P_0 &= NP\times\frac{(n-m)30}{360}\times e^{-r_f^cn\frac{30}{360}}\\
&\quad\times\left(XN(-d_2)-FR_{m\times n}N(-d_1)\right)
\end{align}
$$

* $m$ : nombre de mois jusqu’à l’expiration de l’option et la fixation du taux ; $n$ : nombre de mois jusqu’au paiement des intérêts. Le gain est donc actualisé sur $n$ mois, et la période de calcul des intérêts est de $(n-m)$ mois.
* $FR_{m\times n}$ : le taux forward actuel pour la période de $m$ à $n$ ; $X$ : le taux d’exercice. Dans $d_1$, $F_0(T)$ est remplacé par $FR_{m\times n}$.
* Un **cap** est une série de calls de taux (caplets) et un **floor** une série de puts (floorlets). Un cap acheté et un floor vendu au même taux d’exercice forment un swap payeur de fixe.

### Swaption {#swaption}

Une swaption est une option d’entrer dans un swap :

1. Une swaption **payeuse** est l’option d’entrer dans un swap comme payeur du taux fixe (position acheteuse). Elle gagne quand les taux montent : un call sur le taux de swap.
2. Une swaption **receveuse** est l’option d’entrer dans un swap comme receveur du taux fixe (position vendeuse). Elle gagne quand les taux baissent : un put sur le taux de swap.

$$
\begin{align}
C_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_{fix}N(d_1)-R_XN(d_2)\right)\\
P_0 &= NP\times\text{AP}\times\text{PVA}\\
&\quad\times\left(R_XN(-d_2)-R_{fix}N(-d_1)\right)
\end{align}
$$

* $R_{fix}$ : le taux de swap forward actuel, pour un swap démarrant à l’échéance de l’option ; $R_X$ : le taux d’exercice (fixe).
* AP : la période de calcul des intérêts de chaque paiement du swap (p. ex. 0,25 pour un paiement trimestriel).
* PVA : le facteur d’annuité en valeur actuelle, somme des facteurs d’actualisation des dates de paiement du swap.
* Une swaption payeuse moins une swaption receveuse, au même taux d’exercice, forme un swap payeur de fixe à terme (parité put-call).

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=swaption"
  title="Frise d’une swaption : vie de l’option, puis les dates de paiement du swap"
  loading="lazy"
></iframe>

## Grecques {#greeks}

D’après le modèle de Black-Scholes,

$$
C_0 = S_0 N(d_1) - X e^{-r_f^cT} N(d_2) 
$$

On peut le voir comme une fonction de cinq variables :

$$
C_0 = f(S_0, X, r_f^c, T, \sigma)
$$

Les grecques sont ses dérivées partielles : chacune mesure la sensibilité de l’option à une variable, les autres étant constantes.

$\delta$ est défini par :

$$
\delta = \frac{\partial C_0}{\partial S_0}
$$

$\gamma$ est défini par :

$$
\gamma = \frac{\partial^2 C_0}{\partial S_0^2}=\frac{\partial \delta}{\partial S_0}
$$

$\theta$ est défini par :

$$
\theta = \frac{\partial C_0}{\partial t}
$$

c’est-à-dire la variation de valeur avec le passage du temps (quand $T$ diminue).

$\upsilon$ (véga) est défini par :

$$
\upsilon = \frac{\partial C_0}{\partial \sigma}
$$

$\rho$ est défini par :

$$
\rho = \frac{\partial C_0}{\partial r_f^ c}
$$

| Grecque | Call | Put | Remarques |
| --- | --- | --- | --- |
| Delta $\delta$ | $0$ à $1$ | $-1$ à $0$ | Variation la plus forte près de la monnaie |
| Gamma $\gamma$ | $>0$ | $>0$ (comme le call) | Maximal à la monnaie |
| Thêta $\theta$ | En général $<0$ | En général $<0$ | Érosion temporelle |
| Véga $\upsilon$ | $>0$ | $>0$ (comme le call) | Maximal à la monnaie |
| Rhô $\rho$ | $>0$ | $<0$ | Faible pour les options courtes |

<iframe
  class="fx-concept-chart"
  src="/charts/option-greeks.html"
  title="Delta d’un call et d’un put, et gamma à un an et à un mois de l’échéance"
  loading="lazy"
></iframe>

### Delta

Pour une action sans dividende : $\delta_{call}=N(d_1)$, $\delta_{put} = -N(-d_1)=N(d_1)-1$.

> [!Note]
>
> Dans ce cas, $\delta_{call}=\delta_{put}+1$

Pour une action versant un dividende, où $\delta$ désigne ici le taux de dividende :

$$\Delta_{call}=e^{-\delta T}N(d_1)$$

$$\Delta_{put}=-e^{-\delta T}N(-d_1)$$

> [!Note]
>
> $\delta$ est compris dans $(0,1)$ pour un call et dans $(-1, 0)$ pour un put. Il varie le plus fortement près de la monnaie, et d’autant plus que l’échéance approche.

Delta et gamma ensemble approchent la variation de valeur de l’option pour une variation du cours de l’action :

$$
\Delta C\approx\delta\,\Delta S+\tfrac12\gamma\,(\Delta S)^2
$$

Un portefeuille **delta neutre** détient $-\delta$ actions par option achetée (ou $\delta$ actions par option vendue), de sorte que de petites variations du cours ne changent pas sa valeur.

### Gamma

> [!Note]
>
> $\gamma$ et $\delta$ sont l’équivalent de la convexité et de la duration en revenu fixe : les sensibilités de second et de premier ordre au sous-jacent.

$\gamma$ atteint son maximum à la monnaie. Pour une option à la monnaie, $\gamma$ augmente à l’approche de l’échéance. Pour les options très dans la monnaie ou très en dehors, $\gamma$ diminue à l’approche de l’échéance.

> [!Note]
>
> Une **stratégie $\gamma$ neutre** se construit en combinant des positions d’options, puis on obtient une stratégie $\delta$ neutre en ajoutant une position sur l’action sous-jacente (l’action n’a pas de $\gamma$).

### Thêta

Le thêta est en général négatif pour les calls comme pour les puts, car ils perdent de la valeur avec le temps (érosion temporelle). Avec :

* **Exception :** les puts européens très dans la monnaie, qui peuvent gagner de la valeur avec le temps, car le prix d’exercice qu’ils recevront se rapproche de son paiement.

### Véga et rhô

* Le **véga** est positif pour les calls comme pour les puts : une volatilité plus élevée augmente la probabilité de gains importants, alors que la perte est limitée à la prime. Il est maximal à la monnaie, et c’est la seule grecque qui demande une prévision (la volatilité).
* Le **rhô** est positif pour les calls et négatif pour les puts : un taux plus élevé réduit la valeur actuelle du prix d’exercice, que le détenteur du call paie et que celui du put reçoit.
