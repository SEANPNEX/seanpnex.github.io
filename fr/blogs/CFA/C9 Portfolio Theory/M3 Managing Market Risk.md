---
title: "Gestion du risque de marché"
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
    .fx-concept-chart { height: 615px; }
}
</style>

# Gestion du risque de marché

## Valeur à risque (VaR) {#value-at-risk-var}

La **valeur à risque** est une estimation de la perte minimale, avec une probabilité donnée, sur une période donnée. De façon équivalente, c’est la perte maximale à un niveau de confiance donné. Les deux décrivent la même coupure dans la distribution des rendements :

* Au niveau de confiance $1-\alpha$ (p. ex. 95 %) : la perte **maximale**, c’est-à-dire que la perte est au plus égale à la VaR.
* À la probabilité $\alpha$ (p. ex. 5 %) : la perte **minimale**, c’est-à-dire que dans les $\alpha$ pires cas, la perte est au moins égale à la VaR.

<iframe
  class="fx-concept-chart"
  src="/charts/var-distribution.html"
  title="Distribution des rendements avec la coupure de la VaR et la VaR conditionnelle"
  loading="lazy"
></iframe>

**Exemple.** La VaR à 1 % sur un jour d’un portefeuille est de 2 millions.

* Nous sommes confiants à 99 % que le portefeuille ne perdra pas plus de 2 millions en un jour.
* Il y a 1 % de probabilité qu’il perde 2 millions ou plus en un jour.

La VaR exige toujours de préciser trois éléments : le **montant**, la **probabilité** (ou le niveau de confiance) et la **période**.

### Estimation paramétrique de la VaR

La méthode paramétrique (variance–covariance) suppose une loi pour les rendements, en général normale, et estime sa moyenne et son écart-type. La VaR se situe là où l’aire de la queue gauche sous la densité est égale à $\alpha$ :

$$\text{VaR}=-\left[E(R)-z_\alpha\,\sigma\right]$$

$$\text{VaR}=z_\alpha\,\sigma-E(R)$$

$E(R)-z_\alpha\sigma$ est le **rendement** seuil ; la VaR est une perte, donc son signe est inversé. En montant :

$$\text{VaR value}=\text{VaR}\times\text{Asset value}$$

| Probabilité $\alpha$ | Confiance | $z_\alpha$ |
| --- | --- | --- |
| 5% | 95% | 1.65 |
| 2.5% | 97.5% | 1.96 |
| 1% | 99% | 2.33 |

Quand la moyenne est nulle (hypothèse fréquente sur de courtes périodes), $\text{VaR}=z_\alpha\,\sigma$.

La **VaR d’un portefeuille** composé des actifs A et B suit la règle de la variance d’une somme ; la corrélation compte donc :

$$
\begin{aligned}
\sigma_p^2={}&w_A^2\sigma_A^2+w_B^2\sigma_B^2\\
&+2w_Aw_B\rho_{AB}\sigma_A\sigma_B
\end{aligned}
$$

**Règle de la racine carrée.** Pour passer d’une période à une autre, multiplier l’écart-type par $\sqrt{T}$ :

$$\text{VaR}_T=\text{VaR}_1\times\sqrt{T}$$

Cela suppose des rendements i.i.d. (sans autocorrélation) et une moyenne nulle. En réalité, les rendements ne sont pas i.i.d., et l’autocorrélation n’est pas nulle.

**Exemple.** Un portefeuille de 10 millions est investi à 60 % dans A (rendement attendu 10 %, écart-type 20 %) et à 40 % dans B (6 %, 10 %), avec une corrélation de 0,3. Avec 250 jours de bourse par an, trouvez la VaR à 5 % (a) annuelle et (b) quotidienne.

<div class="reveal" tabindex="0">

$E(R_p)=0.6\times10\%+0.4\times6\%=8.4\%$.

$$
\begin{aligned}
\sigma_p^2&=0.36(0.04)+0.16(0.01)\\
&\quad+2(0.6)(0.4)(0.3)(0.2)(0.1)\\
&=0.01888
\end{aligned}
$$

Donc $\sigma_p=13.74\%$.

**(a) Annuelle.** $1.65\times13.74\%-8.4\%=14.27\%$, soit environ **1,43 million**.

**(b) Quotidienne.** $\mu=8.4\%/250=0.034\%$ et $\sigma=13.74\%/\sqrt{250}=0.869\%$ :

$$1.65\times0.869\%-0.034\%=1.40\%$$

soit environ **140 000**.

</div>

### Estimation de la VaR par simulation historique

- À partir des rendements historiques, classer les résultats de la plus forte perte au plus fort gain pour trouver la VaR.
  1. Imaginons que les rendements d’un portefeuille sur les 300 derniers jours ont été calculés et classés du meilleur au pire.
  2. On peut dire que seuls 5 % des jours ont eu un rendement inférieur ou égal à celui classé en 286e position : les positions 286 à 300 représentent 15 jours, soit 5 % de 300.
  3. L’estimation de la VaR sur un jour est donc le rendement classé 286e, c’est-à-dire le 15e pire (multiplié par la valeur actuelle du portefeuille si l’on veut la VaR en montant absolu).

La méthode applique les **pondérations actuelles du portefeuille** aux rendements historiques de ses actifs. Elle ne demande aucune hypothèse de loi et capte les queues épaisses et les vraies corrélations des données, mais elle suppose que la période passée est représentative de l’avenir.

### Monte-Carlo pour estimer la VaR

Plus souple : spécifier une loi pour chaque facteur de risque (pas forcément normale) et leurs corrélations, simuler des milliers de résultats pour le portefeuille, et construire la distribution des rendements (densité) à partir de la simulation. La VaR se lit au percentile $\alpha$, comme dans la simulation historique.

* Elle traite les lois non normales et les positions non linéaires, comme les options.
* Elle est lourde en calcul, et le résultat ne vaut que ce que valent les lois supposées.

Comprendre ses propriétés suffit pour l’examen.

## Extensions de la VaR {#extensions-of-var}

**Avantages et inconvénients de la VaR.**

* **Avantages** : simple, un seul chiffre facile à comprendre et à communiquer ; comparable entre portefeuilles et unités ; utile pour la **budgétisation du risque** et l’allocation du capital ; vérifiable par backtesting ; largement acceptée par les régulateurs.
* **Inconvénients** :
  * **Subjective** : le niveau de confiance, la période et la méthode d’estimation sont des choix.
  * **Sous-estime la fréquence des événements extrêmes**, surtout sous l’hypothèse normale (queues épaisses).
  * Ne dit rien de l’**ampleur** de la perte au-delà de la VaR.
  * Ignore la **liquidité**, et les corrélations augmentent en crise (**risque de corrélation**).
  * Ne regarde que la **queue gauche**, et peut simplifier à l’excès le profil de risque.

Les extensions de la VaR répondent à certains de ces points :

* **VaR conditionnelle (CVaR)**, ou **expected shortfall** : la **perte moyenne** sachant que la perte dépasse la VaR. Elle mesure l’ampleur de la perte extrême. Pour une loi normale, la CVaR à 5 % vaut $2.06\sigma$, contre une VaR de $1.65\sigma$.
* **VaR incrémentale** : la **variation de la VaR du portefeuille** due à l’ajout, au retrait ou à la modification d’une position : VaR avec la modification moins VaR sans elle.
* **VaR marginale** : la variation de la VaR pour une **petite variation** d’une position, par unité de position. Elle montre la contribution de chaque position à la VaR totale.
* **VaR ajustée de la liquidité (LVaR)** : ajoute le coût de liquidation des positions, $\text{LVaR}=\text{VaR}+f(\text{liquidity})$, p. ex. la moitié de la fourchette achat-vente multipliée par la position.
* **Flux de trésorerie à risque (CFaR)** : le déficit minimal de **flux de trésorerie** à une probabilité donnée sur une période ; utilisé par les entreprises, dont le risque porte sur les flux d’exploitation plutôt que sur des actifs évalués au marché.
* **Résultat à risque (EaR)** : la même idée appliquée aux **résultats**.
* **VaR de crédit** : la **perte de crédit** minimale (défauts et dégradations) à une probabilité donnée sur une période.

## Autres mesures de risque

### Sensibilité

Une mesure de sensibilité est une dérivée partielle : elle examine la variation de valeur pour une **petite variation** d’un facteur de risque, les autres étant constants.

* Pour les actions (MEDAF), c’est le **bêta** : la variation du rendement pour une variation du rendement du marché.
* Pour les obligations, c’est le développement de Taylor de la variation de prix, $\Delta P/P\approx-D\,\Delta y+\tfrac12 C(\Delta y)^2$, avec la **duration** et la **convexité** (voir le [rappel du niveau I](../C6%20Fixed%20Income/M1%20Term%20and%20Interest%20Rate.md#review-duration-and-convexity-level-i) en Revenu fixe).
* Pour les options, ce sont les [grecques](../C7%20Derivative/M2%20Options.md#greeks) : delta, gamma, véga, etc.

Les sensibilités disent de combien la valeur change, mais pas avec quelle probabilité, et elles ne sont exactes que pour de petites variations.

### Scénario

Une mesure par **scénario** estime la perte du portefeuille sous un ensemble de **variations importantes de plusieurs facteurs de risque** à la fois.

* **Scénarios historiques** : rejouer un événement passé, comme la crise de 2008, sur le portefeuille actuel.
* **Scénarios hypothétiques** : des variations qui ne se sont pas produites, mais pourraient se produire.
* **Tests de résistance** : des scénarios extrêmes : faible probabilité mais perte extrême. Ils supposent souvent une **hausse des corrélations**, comme en crise, et se concentrent sur les **issues défavorables**.
* **Tests de résistance inversés** : partir d’une perte inacceptable et trouver les scénarios qui la provoqueraient.

Les scénarios complètent la VaR : ils montrent l’ampleur des pertes extrêmes, mais ne leur attribuent aucune probabilité.

## Choix des mesures de risque

Cette partie recoupe l’analyse des banques en Analyse financière : voir [Sensibilité au risque de marché](../C3%20Financial%20Statements/M4%20Analysis%20of%20Financial%20Institutions.md#sensitivity-to-market-risk) au M4.

Les banques doivent concilier plusieurs aspects concurrents du risque pour gérer leur activité et répondre aux attentes des actionnaires, analystes, investisseurs obligataires, agences de notation, déposants et régulateurs.

Mesures de risque types :

* **Liquidité** : écarts de liquidité et capacité à faire face aux sorties.
* **Capital économique** : le capital nécessaire pour absorber les pertes inattendues à un niveau de confiance choisi.
* **VaR** : du portefeuille de négociation.
* **Sensibilité** : p. ex. la duration des actifs et des passifs.
* **Scénario** : tests de résistance, dont beaucoup sont exigés par les régulateurs.
* **Levier** : total des actifs rapporté aux fonds propres, y compris les expositions hors bilan.

Rappelez-vous le cadre [CAMELS](../C3%20Financial%20Statements/M4%20Analysis%20of%20Financial%20Institutions.md#camels-approach), qui couvre beaucoup des mêmes domaines.

Les autres utilisateurs choisissent des mesures adaptées à leurs risques :

* **Gérants d’actifs** : risque de rachat (besoin de liquidité pour faire face aux retraits) et VaR de **l’erreur de suivi** par rapport à l’indice de référence, plus des limites de position.
* **Fonds de pension (régimes à prestations définies)** : **surplus à risque** (la VaR des actifs moins les passifs), et **risque de taux et de courbe**, car les passifs se comportent comme des obligations de longue duration.
* **Assureurs** : adossement actif-passif, sensibilités et analyse par scénario des pertes catastrophiques.

## Risque de marché

Les mesures de risque servent à fixer des contraintes à l’activité :

* **Budgétisation du risque** : répartir le risque total accepté par l’organisation entre unités ou stratégies. Les VaR s’additionnent selon la règle de la variance, en tenant compte de la corrélation : avec $\rho<1$, la VaR totale est **inférieure** à la somme des VaR des unités. Dans l’exemple ci-dessus, avec une moyenne nulle, la VaR de A est $1.65\times20\%\times6\text{m}=1.98\text{m}$ et celle de B $1.65\times10\%\times4\text{m}=0.66\text{m}$, soit 2,64m au total, mais celle du portefeuille n’est que de 2,27m.
* **Allocation du capital** : attribuer le capital aux activités en proportion de leur risque (p. ex. le capital économique), et juger chacune sur son rendement par unité de capital.
* **Limites de position** : taille maximale d’une position, p. ex. sur un titre, un secteur ou un pays.
* **Limites par scénario** : perte maximale admise dans un scénario ou un test de résistance donné.
* **Limites de stop-loss** : réduire ou clôturer une position quand sa perte sur une période dépasse un montant fixé.
