---
title: "Modèles multifactoriels"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 594px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 575px; }
}
</style>

# Modèles multifactoriels

## Théorie de l’évaluation par arbitrage (APT)

### MEDAF

La **frontière efficiente** est l’ensemble des portefeuilles d’actifs risqués offrant le rendement attendu le plus élevé pour chaque niveau de risque. Quand les investisseurs peuvent aussi prêter et emprunter au taux sans risque, les meilleurs portefeuilles combinent l’actif sans risque avec un seul portefeuille risqué, le **portefeuille de marché**, et le **modèle d’évaluation des actifs financiers (MEDAF, CAPM)** en découle :

$$E(R_i)=R_f+\beta_i\left[E(R_M)-R_f\right]$$

Le **bêta** mesure le **risque systématique** d’un actif : la sensibilité de son rendement à celui du marché. Il y a deux façons de le calculer :

1. **À partir de la covariance** :

$$\beta_i=\frac{\text{Cov}(R_i,R_M)}{\sigma_M^2}=\rho_{i,M}\,\frac{\sigma_i}{\sigma_M}$$

2. **Par régression** : la pente de la régression des rendements de l’actif sur ceux du marché (le **modèle de marché**) :

$$R_i=\alpha_i+\beta_i R_M+\varepsilon_i$$

* Le bêta du marché est 1.
* Le bêta d’un portefeuille est la somme pondérée des bêtas de ses actifs : $\beta_p=\sum_i w_i\beta_i$.

**Risque systématique et non systématique.** Le risque total d’un actif se décompose en deux parties :

$$\sigma_i^2=\beta_i^2\sigma_M^2+\sigma_{\varepsilon}^2$$

* Le **risque non systématique** ($\sigma_\varepsilon^2$, propre à l’actif) peut être éliminé par la **diversification**. Les investisseurs ne sont donc pas rémunérés pour le supporter.
* Le **risque systématique** ne peut pas être éliminé par la diversification ; c’est donc le risque qui est rémunéré.

Le MEDAF est un modèle de **rendement attendu** : le rendement que les investisseurs exigent pour le risque systématique d’un actif.

**Hypothèses du MEDAF :**

* Les investisseurs sont averses au risque, et choisissent leurs portefeuilles selon la seule moyenne et la seule variance, sur une période unique.
* Les investisseurs ont des anticipations homogènes.
* Les investisseurs peuvent emprunter et prêter n’importe quel montant au taux sans risque.
* Il n’y a ni impôts ni coûts de transaction, et les actifs sont infiniment divisibles.
* Tous les actifs sont négociables, et les marchés sont parfaitement concurrentiels : les investisseurs sont preneurs de prix.

Ces hypothèses sont largement violées en pratique.

**Droite de marché des titres (SML).** Le MEDAF tracé en fonction du bêta. Comparer le rendement prévu d’un actif à la SML montre s’il est sous- ou surévalué. L’écart vertical est l’**alpha de Jensen** :

$$\alpha_i=R_i-\left[R_f+\beta_i\left(R_M-R_f\right)\right]$$

* **Au-dessus de la SML** ($\alpha>0$) : l’actif offre plus que son rendement exigé ; il est donc **sous-évalué** : **acheter**.
* **Sous la SML** ($\alpha<0$) : **surévalué** : **vendre**.

<iframe
  class="fx-concept-chart"
  src="/charts/security-market-line.html"
  title="Droite de marché des titres avec des actions au-dessus et au-dessous"
  loading="lazy"
></iframe>

### APT

L’APT repose sur moins d’hypothèses que le MEDAF. Ses hypothèses de base :

* Un modèle factoriel décrit les rendements des actifs.
* Il y a assez d’actifs pour que les investisseurs forment des portefeuilles bien diversifiés qui éliminent le risque propre à chaque actif.
* Il n’existe pas d’opportunité d’arbitrage entre portefeuilles bien diversifiés.

L’APT explique le **rendement attendu** d’un portefeuille bien diversifié avec $K$ facteurs :

$$E(R_p)=R_F+\lambda_1\beta_{p,1}+\cdots+\lambda_K\beta_{p,K}$$

* L’ordonnée à l’origine est le taux sans risque $R_F$.
* $\beta_{p,j}$ est la sensibilité du portefeuille au facteur $j$.
* $\lambda_j$ est la **prime de risque attendue du facteur de risque $j$** : le rendement attendu au-delà de $R_F$ d’un portefeuille ayant une sensibilité de 1 au facteur $j$ et de 0 à tous les autres.

La partie combinée $\sum\lambda_j\beta_{p,j}$ est la prime de risque : une combinaison linéaire des rémunérations des risques systématiques. $\lambda$ correspond au fond à la prime de risque de marché du MEDAF, et l’APT peut se voir comme une **version multivariée du MEDAF** : le MEDAF est le cas particulier à un seul facteur, le marché, avec $\lambda=E(R_M)-R_F$.

L’APT ne dit pas quels facteurs utiliser : l’analyste choisit l’ensemble de facteurs, puis estime leurs $\lambda$ pour que le modèle tienne pour les portefeuilles choisis.

Un exercice peut donner les bêtas et rendements attendus de quelques portefeuilles, et demander les $\lambda$ : chaque portefeuille fournit une équation.

**Exemple.** Dans un modèle APT à un facteur, le portefeuille A a un rendement attendu de 11 % et un bêta factoriel de 1,5 ; le portefeuille B, 8 % et 0,75. Tous deux sont bien diversifiés. Trouvez le taux sans risque et la prime de risque du facteur.

<div class="reveal" tabindex="0">

$$11\%=R_F+1.5\,\lambda$$

$$8\%=R_F+0.75\,\lambda$$

Par soustraction, $3\%=0.75\,\lambda$, donc $\lambda=4\%$ et $R_F=11\%-1.5\times4\%=5\%$.

</div>

**Portefeuille factoriel pur.** Un portefeuille ayant une sensibilité de 1 à **un seul** facteur, et de 0 à tous les autres. Son rendement attendu est $R_F+\lambda_j$ ; il isole donc la prime de risque d’un facteur. On peut le construire comme une combinaison linéaire d’autres portefeuilles (et de l’actif sans risque) : choisir les pondérations pour que les sensibilités s’additionnent à 1 pour le facteur visé et à 0 pour chacun des autres.

**Exemple.** Dans un modèle à deux facteurs, le portefeuille A a des sensibilités $(1.0,\ 0.5)$ et le portefeuille B $(0.5,\ 1.0)$. Construisez un portefeuille factoriel pur sur le facteur 1 à partir de A, de B et de l’actif sans risque.

<div class="reveal" tabindex="0">

Choisir les pondérations $w_A$ et $w_B$ pour que la sensibilité au facteur 1 soit 1 et celle au facteur 2 soit 0 :

$$w_A+0.5\,w_B=1$$

$$0.5\,w_A+w_B=0$$

De la seconde, $w_A=-2w_B$ ; en substituant, $-1.5\,w_B=1$, donc $w_B=-2/3$ et $w_A=4/3$. Le reste va dans l’actif sans risque : $w_f=1-4/3+2/3=1/3$.

Vérification : sensibilité au facteur 1 $=4/3-1/3=1$ ; sensibilité au facteur 2 $=2/3-2/3=0$.

</div>

**Opportunités d’arbitrage.** Deux portefeuilles bien diversifiés ayant les **mêmes sensibilités factorielles** doivent avoir le **même rendement attendu**. Sinon, il y a une opportunité d’arbitrage : acheter celui qui a le rendement attendu le plus élevé, vendre l’autre à découvert. La position ne demande aucun investissement net et n’a aucun risque factoriel, mais rapporte un rendement positif.

En termes d’alpha : un portefeuille à **alpha positif** (au-dessus de la droite qu’implique le modèle factoriel) est sous-évalué, donc l’**acheter** ; **vendre** un portefeuille de mêmes sensibilités situé sur la droite.

Dans les questions d’examen, le portefeuille à vendre peut ne pas être donné directement : ce peut être une **combinaison linéaire de deux portefeuilles donnés**, construite pour reproduire les sensibilités du portefeuille mal évalué.

**Exemple.** Dans un modèle à un facteur, le taux sans risque est de 4 %. Trois portefeuilles bien diversifiés :

| Portefeuille | Bêta factoriel | Rendement attendu |
| --- | --- | --- |
| A | 1.0 | 9.0% |
| B | 2.0 | 14.0% |
| C | 1.5 | 12.5% |

Y a-t-il une opportunité d’arbitrage ? Si oui, comment l’exploiter avec 1 million, et quel est le gain ?

<div class="reveal" tabindex="0">

A donne $\lambda=9\%-4\%=5\%$, et B concorde : $4\%+2\times5\%=14\%$.

Le bêta de 1,5 de C peut être répliqué avec 50 % de A et 50 % de B :

* Bêta : $0.5\times1.0+0.5\times2.0=1.5$
* Rendement attendu : $0.5\times9\%+0.5\times14\%=11.5\%$

C offre 12,5 % pour le même risque factoriel ; il a donc un alpha de 1 % et est sous-évalué.

**Opération :** acheter 1 million de C, et vendre 500 000 de A et 500 000 de B. Investissement net 0, bêta factoriel net $1.5-1.5=0$.

**Gain :** $1\text{m}\times(12.5\%-11.5\%)=10{,}000$, sans risque.

</div>

## Modèles multifactoriels

Il existe quatre types de modèles multifactoriels, selon les facteurs :

* **Modèles à facteurs macroéconomiques** : les facteurs sont des **surprises** sur des variables macroéconomiques.
* **Modèles à facteurs fondamentaux** : les facteurs sont liés à des **attributs** des sociétés, comme le PER ou la taille.
* **Modèles à facteurs statistiques** : les facteurs sont trouvés par des méthodes statistiques à partir des rendements eux-mêmes.
* **Modèles à facteurs mixtes** : ils combinent des facteurs de types différents.

### Macroéconomique

Le modèle estime le rendement **réalisé** au lieu du rendement attendu :

$$
\begin{aligned}
R_i={}&E(R_i)+\beta_{i,1}F_1+\cdots\\
&+\beta_{i,K}F_K+\varepsilon_i
\end{aligned}
$$

L’ordonnée à l’origine est maintenant le **rendement attendu** au lieu du taux sans risque. $\beta$ est le vecteur des pentes (sensibilités), et $F$ le vecteur des **surprises**. Les surprises portent sur des variables macroéconomiques, comme la croissance du PIB, les taux d’intérêt, l’inflation et les spreads de crédit : chacune est l’écart entre la valeur réalisée et la valeur attendue de la variable.

Si toutes les surprises sont nulles, l’actif obtient son rendement attendu (plus $\varepsilon_i$, la surprise propre à l’actif).

**Exemple.** Une action a un rendement attendu de 9 %. Sa sensibilité aux surprises de croissance du PIB est de 1,5, et aux surprises d’inflation de −0,8. La croissance du PIB était attendue à 3 % mais a été de 2 % ; l’inflation était attendue à 2 % mais a été de 3 %. Estimez le rendement de l’action, en ignorant $\varepsilon$.

<div class="reveal" tabindex="0">

Surprises : PIB $2\%-3\%=-1\%$ ; inflation $3\%-2\%=+1\%$.

$$
\begin{aligned}
R&=9\%+1.5\times(-1\%)\\
&\quad+(-0.8)\times(1\%)\\
&=9\%-1.5\%-0.8\%=6.7\%
\end{aligned}
$$

Les deux surprises pénalisent cette action : la croissance a été plus faible que prévu, et l’inflation plus forte.

</div>

Le calcul est au fond le même pour ces modèles : ordonnée à l’origine plus la somme des sensibilités multipliées par les facteurs.

### Fondamental

Le modèle estime lui aussi le rendement **réalisé** :

$$
\begin{aligned}
R_i={}&a_i+\beta_{i,1}F_1+\cdots\\
&+\beta_{i,K}F_K+\varepsilon_i
\end{aligned}
$$

* L’ordonnée à l’origine $a_i$ est estimée par régression et n’a pas ici de signification économique importante (en pratique, elle est proche de $E(R_i)$).
* Les **sensibilités** $\beta$ sont les **attributs** de la société qui expliquent les écarts de rendement en coupe transversale, comme le P/B, le PER, la taille ou la croissance des bénéfices.
* Les **facteurs** $F$ sont les **rendements** associés à chaque attribut sur la période (p. ex. le rendement du facteur PER), estimés par une régression en coupe transversale des rendements de toutes les actions sur leurs attributs.

Chaque sensibilité est **standardisée** : de combien d’écarts-types l’attribut de la société s’éloigne de la moyenne de toutes les sociétés.

$$\beta_{i,k}=\frac{x_{i,k}-\mu_k}{\sigma_k}$$

où $x_{i,k}$ est la valeur de l’attribut $k$ pour l’actif $i$, et $\mu_k$ et $\sigma_k$ la moyenne et l’écart-type de l’attribut sur l’ensemble des actifs.

Une sensibilité de 0 désigne donc une société moyenne ; +1, une société un écart-type au-dessus de la moyenne. L’idée de base reste celle d’une pente. (Les facteurs indicateurs, comme l’appartenance sectorielle, valent 0 ou 1 et ne sont pas standardisés.)

**Exemple.** Un modèle fondamental à deux facteurs utilise le PER et la taille. Le PER d’une action est de 20, pour une moyenne de 16 et un écart-type de 8 ; sa capitalisation en log est de 10, pour une moyenne de 9 et un écart-type de 1,25. Sur la période, l’ordonnée à l’origine est de 2,0 %, le rendement du facteur PER de −1,0 % et celui du facteur taille de 1,5 %. Trouvez les sensibilités de l’action et son rendement, en ignorant $\varepsilon$.

<div class="reveal" tabindex="0">

$$\beta_{\text{P/E}}=\frac{20-16}{8}=0.5$$

$$\beta_{\text{size}}=\frac{10-9}{1.25}=0.8$$

$$
\begin{aligned}
R&=2.0\%+0.5\times(-1.0\%)\\
&\quad+0.8\times1.5\%\\
&=2.0\%-0.5\%+1.2\%=2.7\%
\end{aligned}
$$

</div>

### Modèle à facteurs statistiques

Une régression multivariée plus abstraite, sans grande logique économique derrière. Elle ne demande que des hypothèses statistiques : les facteurs sont extraits des rendements historiques, comme dans une [régression multiple](../C1%20Quantity/M1%20Multiple%20Regression.md#multiple-linear-regression-model) dont les facteurs seraient trouvés par les données plutôt que choisis par l’analyste. L’analyse est plus statistique :

* **Modèles d’analyse factorielle** : les facteurs sont les portefeuilles qui expliquent le mieux les **covariances** des rendements des actifs.
* **Modèles en composantes principales** : les facteurs sont les portefeuilles qui expliquent le mieux les **variances** des rendements.

L’avantage est qu’il faut peu d’hypothèses ; l’inconvénient est que les facteurs sont difficiles à interpréter économiquement.

## Comparaison des modèles

1. **L’estimation** : les modèles macroéconomiques estiment les sensibilités de chaque actif par des régressions **en série temporelle** sur les surprises factorielles observées. Les modèles fondamentaux tirent les sensibilités des attributs et estiment les rendements des facteurs par régression **en coupe transversale**. Les modèles statistiques estiment les deux à partir des données de rendement.
2. **Termes résiduels** : dans chacun, $\varepsilon_i$ est le rendement propre à l’actif non expliqué par les facteurs, et il est non corrélé entre actifs.
3. **Ordonnée à l’origine** : le rendement attendu (macroéconomique), une ordonnée de régression (fondamental), ou non interprétée (statistique).
4. **Hypothèses** : la théorie économique choisit les facteurs dans les modèles macroéconomiques et fondamentaux ; les modèles statistiques ne demandent que des hypothèses statistiques.

Différences entre modèles à facteurs fondamentaux et macroéconomiques :

| | Macroéconomique | Fondamental |
| --- | --- | --- |
| **1. Ordonnée à l’origine** | $E(R_i)$ | Ordonnée de régression $a_i$ |
| **2. Facteurs** | **Surprises** sur des variables macro | **Rendements** des attributs |
| **3. Sensibilités (β)** | Pentes issues de la régression | Attributs standardisés |
| **4. Type de données** | Série temporelle | Coupe transversale des attributs |
| **5. Ce qui est estimé** | Les β (les facteurs sont observés) | Les F (les β sont donnés) |

## Attribution de performance {#return-attribution}

Cette partie est surtout traitée au niveau III ; voici juste une brève introduction.

$$\text{Active return}=R_p-R_B$$

Le rendement actif se décompose en deux parties :

$$
\begin{aligned}
\text{Active return}={}&\sum_k\left(\beta_{p,k}-\beta_{B,k}\right)\lambda_k\\
&+\text{Security selection}
\end{aligned}
$$

* **Rendement des inclinaisons factorielles** : les sensibilités du portefeuille diffèrent de celles de l’indice de référence ($\beta$ est l’exposition à chaque facteur). Il reflète le talent en **sélection de classes** (choix des expositions factorielles).
* **Rendement de la sélection de titres** : le reste. Il reflète le talent dans le choix des titres individuels.

## Attribution du risque {#risk-attribution}

Le **risque actif** est l’écart-type des rendements actifs. C’est l’[erreur de suivi](M1%20ETF.md#tracking-error) du module sur les ETF.

$$\text{Active risk}=\sigma\left(R_p-R_B\right)$$

Le **ratio d’information** est le rendement actif par unité de risque actif :

$$\text{IR}=\frac{R_p-R_B}{\sigma\left(R_p-R_B\right)}$$

Rappel sur le ratio de Sharpe : il utilise $R_f$ comme référence. $R_f$ étant constant, $\sigma(R_p-R_f)=\sigma(R_p)$ ; son dénominateur est donc simplement la volatilité du portefeuille.

Le carré du risque actif se décompose en deux parties :

$$
\begin{aligned}
\text{Active risk}^2={}&\text{Active factor risk}\\
&+\text{Active specific risk}
\end{aligned}
$$

* **Risque factoriel actif** : issu des inclinaisons factorielles (sélection de classes) ; systématique.
* **Risque spécifique actif** : issu de la sélection de titres ; non systématique.

Aucun calcul n’est demandé ici.
