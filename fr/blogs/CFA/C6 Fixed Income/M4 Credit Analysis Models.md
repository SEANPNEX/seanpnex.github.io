---
title: "Modèles d’analyse du crédit"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 603px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Modèles d’analyse du crédit

## Ajustement de valeur pour risque de crédit (CVA)

Le **risque de crédit** est le risque de perte dû à un emprunteur qui ne paie pas intégralement et à temps les intérêts ou le principal. Il se mesure à l’aide des éléments suivants, chacun pour une date de défaut possible $t$ :

* **Exposition attendue** ($\text{EE}_t$) : ce que l’investisseur risque de perdre si le défaut survient en $t$. C’est la valeur de l’obligation en $t$, c’est-à-dire ses flux restants actualisés au taux sans risque, **plus** le coupon dû en $t$.
* **Taux de recouvrement** (RR) : la part de l’exposition récupérée après le défaut ; le **montant recouvré** est donc $\text{EE}_t\times\text{RR}$.
* **Perte en cas de défaut** ($\text{LGD}_t$) : la part non recouvrée :

$$
\begin{aligned}
\text{LGD}_t&=\text{EE}_t-\text{Recovery}_t\\
&=\text{EE}_t\times(1-\text{RR})
\end{aligned}
$$

En pourcentage de l’exposition, $\text{LGD}=100\%-\text{RR}$.

* **Probabilité de défaut** ($\text{POD}_t$) : la probabilité que l’obligation fasse défaut en $t$ (section suivante).

La perte attendue à chaque date est

$$\text{EL}_t=\text{POD}_t\times\text{LGD}_t$$

Ces pertes surviennent dans le futur ; on actualise donc chacune au taux sans risque. L’**ajustement de valeur pour risque de crédit (CVA)** est la somme des valeurs actuelles des pertes attendues : la valeur du risque de crédit en termes actuels.

$$\text{CVA}=\sum_{t=1}^{N}\text{EL}_t\times\text{DF}_t$$

La juste valeur de l’obligation risquée est sa valeur sans risque de crédit, $V_{\text{ND}}$ (ses flux actualisés aux taux sans risque), moins la CVA :

$$\text{Fair value}=V_{\text{ND}}-\text{CVA}$$

### Probabilité de défaut {#probability-of-default}

Dans l’évaluation obligataire, le risque de crédit peut entrer par le numérateur ou par le dénominateur :

* **Numérateur** : remplacer les flux promis par leurs valeurs attendues après pertes de défaut, et actualiser au taux sans risque. C’est ce que fait la CVA.
* **Dénominateur** : garder les flux promis, et actualiser à un taux plus élevé, le taux sans risque plus un spread de crédit.

Les POD utilisées pour l’évaluation sont des probabilités **risque-neutres**, déduites des prix de marché, au même sens que la [probabilité risque-neutre](../C7%20Derivative/M2%20Options.md#risk-neutral-probability) de l’évaluation des options. Elles sont **supérieures aux POD réelles (historiques)**, car le prix de marché inclut aussi une rémunération de l’aversion au risque, de la liquidité et de l’incertitude sur la perte en cas de défaut, et la POD risque-neutre absorbe tout cela.

Le **taux de hasard** (HR) est la probabilité de défaut à une date **sachant qu’aucun défaut n’est survenu avant** : une POD conditionnelle. Avec un taux de hasard constant, l’obligation doit survivre à chaque date jusqu’à $t-1$, puis faire défaut en $t$ :

$$\text{POD}_t=(1-\text{HR})^{t-1}\times\text{HR}$$

La **probabilité de survie** est la probabilité (non conditionnelle) qu’aucun défaut ne soit survenu jusqu’à la date $t$ incluse :

$$\text{POS}_t=(1-\text{HR})^{t}$$

La POD de chaque année est la baisse de la survie, $\text{POD}_t=\text{POS}_{t-1}-\text{POS}_t$ ; la POD cumulée jusqu’en $t$ est donc

$$\sum_{i=1}^{t}\text{POD}_i=1-\text{POS}_t$$

**Exemple.** Le taux de hasard d’une obligation est de 2 % par an. Trouvez la POD et la POS de chacune des trois prochaines années, et la POD cumulée sur trois ans.

<div class="reveal" tabindex="0">

| Année | POD | POS |
| --- | --- | --- |
| 1 | $2\%$ | $98\%$ |
| 2 | $0.98\times2\%=1.96\%$ | $0.98^2=96.04\%$ |
| 3 | $0.98^2\times2\%=1.9208\%$ | $0.98^3=94.1192\%$ |

La POD cumulée est $2\%+1.96\%+1.9208\%=5.8808\%=1-94.1192\%$. Elle est légèrement inférieure à $3\times2\%=6\%$, car une obligation ne peut faire défaut qu’une fois : le défaut de chaque année ne s’applique qu’aux obligations encore en vie.

</div>

## Évaluer des obligations risquées

**Exemple.**

- Soit une **obligation d’entreprise zéro-coupon à 5 ans** avec les hypothèses suivantes :
  - Une courbe des obligations d’État plate à 3,00 %.
  - La POD initiale est de 1,25 % ; on l’appelle **taux de hasard**.
  - Le défaut ne survient qu’en fin d’année (dates 1, 2, 3, 4, 5), et jamais en date 0.
  - Le nominal est de 100.
  - Le taux de recouvrement est de 40 %.

- À déterminer :
  1. La juste valeur compte tenu du risque de crédit.
  2. Le taux de rendement.
  3. Le spread par rapport à une obligation d’État de même maturité.

Les colonnes se calculent ainsi :

* **Exposition** : la valeur du zéro-coupon en $t$ au taux sans risque, $100/1.03^{5-t}$.
* **Recouvrement** : $40\%$ de l’exposition ; **LGD** : exposition − recouvrement.
* **POD** et **POS** : à partir du taux de hasard de 1,25 %, comme ci-dessus.
* **EL** : $\text{LGD}\times\text{POD}$ ; **DF** : $1/1.03^{t}$ ; **PVEL** : $\text{EL}\times\text{DF}$.

| Date      | Exposition | Recouvrement | LGD   | POD       | POS    | EL    | DF    | PVEL           |
| --------- | -------- | -------- | ----- | --------- | ------ | ----- | ----- | -------------- |
| 1         | 88.85    | 35.54    | 53.31 | 1.25%     | 98.75% | 0.666 | 0.971 | 0.647          |
| 2         | 91.51    | 36.61    | 54.91 | 1.23%     | 97.52% | 0.678 | 0.943 | 0.639          |
| 3         | 94.26    | 37.70    | 56.56 | 1.22%     | 96.30% | 0.689 | 0.915 | 0.631          |
| 4         | 97.09    | 38.84    | 58.25 | 1.20%     | 95.09% | 0.701 | 0.888 | 0.623          |
| 5         | 100      | 40       | 60    | 1.19%     | 93.90% | 0.713 | 0.863 | 0.615          |
| **Total** |          |          |       | **6.10%** |        |       |       | **CVA ≈ 3.15** |

Cherchez d’abord les trois réponses, puis survolez (ou touchez) la réponse floutée.

<div class="reveal" tabindex="0">

**1. Juste valeur.** Sans risque de crédit, l’obligation vaut

$$V_{\text{ND}}=\frac{100}{1.03^5}=86.261$$

La juste valeur est donc

$$86.261-3.155=83.106$$

**2. Taux de rendement.** Le rendement qui actualise les 100 promis à la juste valeur :

$$
\begin{aligned}
\text{YTM}&=\left(\frac{100}{83.106}\right)^{1/5}-1\\
&=3.77\%
\end{aligned}
$$

**3. Spread de crédit.** $3.77\%-3.00\%=0.77\%$, soit **77 pb**.

**Vérification.** Chaque année, la perte attendue représente environ $\text{POD}\times\text{LGD}=1.25\%\times60\%=0.75\%$ de la valeur, proche du spread de 77 pb. On en tire une approximation rapide :

$$\text{Credit spread}\approx\text{POD}\times\text{LGD}$$

</div>

**Exemple.**

- Un négociateur obligataire observe une **obligation d’entreprise à 3 ans et coupon annuel de 5 %** qui cote **104 pour 100 de nominal**.
- Il estime que la **POD conditionnelle** (le taux de hasard) de l’obligation à chaque date est de **1,50 %**, avec un **taux de recouvrement de 40 %**.
- La courbe des obligations d’État est plate à **2,50 %**.

1. Sur la base de ces hypothèses, le négociateur juge-t-il l’obligation surévaluée ou sous-évaluée ?
2. De combien ?
3. S’il achète l’obligation à 104, quels sont les taux de rendement annuels attendus ?

Avec des coupons, l’exposition à chaque date est la valeur des flux restants plus le coupon versé à cette date. En date 1 :

$$
\begin{aligned}
\text{EE}_1&=5+\frac{5}{1.025}+\frac{105}{1.025^2}\\
&=109.819
\end{aligned}
$$

En date 2, $\text{EE}_2=5+105/1.025=107.439$, et en date 3, $\text{EE}_3=105$.

| Date      | Exposition | Recouvrement | LGD   | POD       | POS    | EL    | DF    | PVEL           |
| --------- | -------- | -------- | ----- | --------- | ------ | ----- | ----- | -------------- |
| 1         | 109.819  | 43.927   | 65.89 | 1.50%     | 98.50% | 0.988 | 0.976 | 0.964          |
| 2         | 107.439  | 42.976   | 64.46 | 1.48%     | 97.02% | 0.952 | 0.952 | 0.907          |
| 3         | 105      | 42       | 63    | 1.46%     | 95.57% | 0.917 | 0.929 | 0.851          |
| **Total** |          |          |       | **4.43%** |        |       |       | **CVA = 2.72** |

<div class="reveal" tabindex="0">

**1. Surévaluée ou sous-évaluée.** Sans risque de crédit, l’obligation vaut

$$
\begin{aligned}
V_{\text{ND}}&=\frac{5}{1.025}+\frac{5}{1.025^2}+\frac{105}{1.025^3}\\
&=107.140
\end{aligned}
$$

La juste valeur est donc $107.140-2.722=104.418$. L’obligation cote 104, sous sa juste valeur : le négociateur la juge **sous-évaluée**.

**2. De combien.** $104.418-104=0.418$ pour 100 de nominal.

**3. Taux de rendement attendus.** Chacun est le TRI du prix payé, 104, face aux flux reçus dans ce scénario.

* **Pas de défaut** (probabilité $\text{POS}_3=95.57\%$) : coupons et principal en totalité. C’est le rendement actuariel :

$$104=\frac{5}{1+r}+\frac{5}{(1+r)^2}+\frac{105}{(1+r)^3}$$

$$r=3.57\%$$

* **Défaut en date 1** (1,50 %) : seulement le recouvrement en date 1 :

$$104=\frac{43.927}{1+r}$$

$$r=-57.76\%$$

* **Défaut en date 2** (1,48 %) : le coupon de la date 1, puis le recouvrement :

$$104=\frac{5}{1+r}+\frac{42.976}{(1+r)^2}$$

$$r=-33.27\%$$

* **Défaut en date 3** (1,46 %) : deux coupons, puis le recouvrement :

$$104=\frac{5}{1+r}+\frac{5}{(1+r)^2}+\frac{42}{(1+r)^3}$$

$$r=-22.23\%$$

Sur une calculatrice : CF0 = −104, puis les flux du scénario, et calculer le TRI.

Le rendement actuariel de 3,57 %, 107 pb au-dessus du rendement d’État de 2,50 %, n’est obtenu que si l’obligation ne fait pas défaut : le rendement promis surestime le rendement attendu.

</div>

## Spreads de crédit {#credit-spreads}

Le rendement d’une obligation risquée a deux parties, chacune rémunérant l’investisseur pour autre chose :

$$
\begin{aligned}
\text{Yield}={}&\text{Benchmark yield}\\
&+\text{Spread over the benchmark}
\end{aligned}
$$

| Partie | Rémunère |
| --- | --- |
| **Rendement de référence** (obligation d’État) | Le taux de rendement réel attendu, le taux d’inflation attendu et l’aversion au risque : une prime pour l’incertitude sur les deux |
| **Spread au-dessus de la référence** | La perte attendue (POD et LGD, il baisse donc quand le taux de recouvrement monte), la liquidité (les obligations risquées se négocient moins et avec des fourchettes plus larges), la fiscalité (écarts de traitement fiscal des revenus) et l’aversion au risque : une prime pour l’incertitude sur la perte de défaut |

L’aversion au risque apparaît donc deux fois : dans le rendement de référence pour l’incertitude sur les taux réels et l’inflation, et dans le spread pour l’incertitude sur les pertes de crédit.

Principaux déterminants des spreads de crédit :

1. **Qualité de crédit, cycle du crédit** : en récession, les POD augmentent et les taux de recouvrement baissent ; les spreads s’élargissent, surtout pour les émetteurs moins bien notés ; en expansion, ils se resserrent.
2. **Conditions financières** : l’économie et les marchés dans leur ensemble. Quand les conditions financières se durcissent (p. ex. baisse des actions, hausse de la volatilité, accès plus difficile au financement), les investisseurs exigent davantage pour porter du risque, et les spreads s’élargissent.
3. **Offre et demande du marché** : de fortes émissions nouvelles, ou une demande faible des investisseurs et des intermédiaires, élargissent les spreads. L’effet est plus marqué pour les obligations à haut rendement moins liquides.
4. **Modèle de valeur de l’entreprise** : des facteurs propres à l’émetteur, vus à travers le modèle structurel ci-dessous. Tout ce qui rapproche la valeur des actifs de l’entreprise de sa dette (baisse de la valeur des actifs, levier plus élevé, actifs plus volatils) augmente la POD et élargit le spread.

## Analyse du crédit de la dette titrisée

Les ABS ne font pas défaut en tant que tels, mais ils peuvent perdre de la valeur quand le pool d’actifs titrisés de l’entité ad hoc (SPE) subit des défauts. L’analyse regarde donc au-delà de l’obligation : le pool, la partie qui le gère et la structure qui l’entoure :

* **Granularité du portefeuille** : le nombre d’actifs du pool. Un pool **granulaire** comprend de nombreux petits prêts (p. ex. des créances de cartes de crédit) ; aucun défaut isolé ne compte beaucoup, et ses pertes peuvent être modélisées statistiquement. Un pool de quelques gros prêts (p. ex. certains prêts immobiliers commerciaux) doit être analysé prêt par prêt.
* **Homogénéité** : les actifs sont-ils semblables (même type, mêmes conditions, même profil d’emprunteur) ? Un pool homogène s’analyse avec un modèle commun ; un pool hétérogène demande un travail plus fin, actif par actif.
* **Gestionnaire (servicer)** : la partie qui encaisse les paiements et gère le pool (y compris défauts et recouvrements). Sa qualité et ses antécédents influent sur les pertes du pool ; il fait donc partie de l’analyse du crédit.
* **Structure** : le découpage en tranches et le rehaussement de crédit (subordination, surdimensionnement, comptes de réserve) qui déterminent quelle tranche absorbe les pertes en premier. Deux obligations sur le même pool peuvent avoir des risques de crédit très différents.

Une **obligation sécurisée (covered bond)** est une dette senior d’une banque, adossée à un pool d’actifs ségrégé (le **pool de couverture**, p. ex. des prêts immobiliers) qui reste au bilan de la banque. Par rapport aux ABS, son risque de crédit est plus faible :

* **Double recours** : si la banque fait défaut, les investisseurs ont une créance à la fois sur le pool de couverture et sur les autres actifs de la banque.
* **Pool dynamique** : la banque doit remplacer les actifs du pool de couverture qui cessent d’être performants.

**Scores de crédit et notations** classent les emprunteurs selon leur qualité de crédit :

* Les **scores de crédit** (p. ex. **FICO** aux États-Unis) servent pour les particuliers et les petites entreprises, comme les emprunteurs d’un pool d’ABS à la consommation. Ils sont ordinaux : un score plus élevé signifie un risque de crédit plus faible, mais le score n’est pas en soi une POD.
* Les **notations** d’agences comme **Moody’s, S&P et Fitch** servent pour les entreprises, les États et les tranches titrisées. Elles sont aussi ordinales, de AAA/Aaa vers le bas ; BBB−/Baa3 et au-dessus relève de la catégorie investissement. Les notations visent la stabilité sur le cycle ; elles changent donc lentement et peuvent être en retard sur les prix de marché.

## Modèles de crédit

> [!Note]
>
> Cette partie ne demande aucun calcul à l’examen.

### Modèles structurels

Les modèles structurels ont été développés pour comprendre le défaut à partir du bilan de l’entreprise, en s’appuyant sur la théorie de l’évaluation des options (le [modèle de Black–Scholes](../C7%20Derivative/M2%20Options.md#black-scholes-model)). Dans la version la plus simple, l’entreprise a des actifs $A$ et une dette zéro-coupon de nominal $K$ échéant en $T$. En $T$, l’entreprise fait défaut si ses actifs valent moins que la dette.

**Analogie de la dette avec un call et un put.** En $T$, actionnaires et créanciers se partagent les actifs :

* Les **capitaux propres** sont un **call** sur les actifs de l’entreprise de prix d’exercice $K$ : les actionnaires reçoivent ce qui reste après le paiement de la dette, et rien si l’entreprise fait défaut (responsabilité limitée).

$$E_T=\max(A_T-K,\ 0)$$

* La **dette** est une **obligation sans risque moins un put** sur les actifs de prix d’exercice $K$ : les créanciers reçoivent $K$, sauf si les actifs valent moins, auquel cas ils prennent les actifs.

$$
\begin{aligned}
D_T&=\min(A_T,\ K)\\
&=K-\max(K-A_T,\ 0)
\end{aligned}
$$

La valeur actuelle de la dette risquée est donc celle d’un zéro-coupon sans risque de nominal $K$ moins la valeur du put : le put est le risque de crédit, et joue le rôle de la CVA.

<iframe
  class="fx-concept-chart"
  src="/charts/structural-model-payoffs.html"
  title="Gains des capitaux propres et de la dette selon la valeur des actifs à l’échéance"
  loading="lazy"
></iframe>

- **Points forts**
  - Éclaire la nature du risque de crédit.
    - L’entreprise fait défaut quand la valeur de ses actifs passe sous la barrière de défaut (ici, le nominal de la dette).
  - Fournit une analogie avec les options pour comprendre la probabilité de défaut et le taux de recouvrement d’une entreprise.
  - Peut être estimé à partir des seuls prix de marché actuels (p. ex. la valeur des actifs et sa volatilité se déduisent du cours de l’action et de sa volatilité).

- **Points faibles**
  - Les hypothèses d’un bilan simple et d’actifs négociés ne sont pas réalistes.
  - Les procédures d’estimation ne tiennent pas compte du cycle économique.

### Modèles à forme réduite

Les modèles à forme réduite n’expliquent pas pourquoi une entreprise fait défaut. Ils modélisent **quand** : le défaut est un événement aléatoire dont la probabilité, le **taux de hasard**, dépend de variables observables comme l’état de l’économie et la situation financière de l’entreprise. Le taux de hasard constant des [exemples de CVA](#probability-of-default) en est la version la plus simple.

- **Hypothèses des modèles à forme réduite**
  - Le zéro-coupon de l’entreprise se négocie sur des marchés sans frictions et sans arbitrage.
  - Le taux sans risque ($r$) est stochastique.
  - L’économie et le taux de recouvrement sont stochastiques.
    - La probabilité de défaut n’est pas constante et varie avec l’état de l’économie.
    - Les modèles à forme réduite traitent le défaut comme une variable **exogène** (externe) qui survient aléatoirement.

- **Points forts**
  - Les données du modèle sont observables ; des procédures d’estimation historique peuvent être utilisées.
  - Le risque de crédit peut fluctuer avec le cycle économique.
  - Ne nécessitent pas de spécifier la structure du bilan de l’entreprise.

- **Points faibles**
  - N’expliquent pas les raisons économiques du défaut.
  - Si le modèle n’a pas été correctement formulé et testé rétrospectivement, l’estimation du taux de hasard peut ne pas être valable.
