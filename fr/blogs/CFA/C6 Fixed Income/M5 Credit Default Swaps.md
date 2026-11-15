---
title: "Credit default swaps"
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

# Credit default swap

## Notions de base

Un **credit default swap (CDS)** est un dérivé de crédit dont le sous-jacent est la **qualité de crédit** d’un emprunteur, l’**entité de référence**. Il fonctionne comme une assurance :

* L’**acheteur de protection** verse des **paiements périodiques** au vendeur tant qu’aucun défaut ne survient. L’acheteur gagne quand la qualité de crédit se dégrade : c’est le côté **vendeur** (short sur le risque de crédit).
* Le **vendeur de protection** verse une **indemnité en cas de défaut** (événement de crédit). Le vendeur gagne quand la qualité de crédit s’améliore : c’est le côté **acheteur** (long sur le risque de crédit).

Termes clés :

* **Montant notionnel** : le montant couvert, sur lequel se calculent l’indemnité et les paiements.
* **Spread du CDS** : ce que l’acheteur paie pour la protection, en taux annuel sur le notionnel. Il rémunère le vendeur pour la perte attendue et dépend donc :
  * du **taux de hasard** : la probabilité de défaut, sachant qu’aucun défaut n’est survenu avant (voir [Probabilité de défaut](M4%20Credit%20Analysis%20Models.md#probability-of-default) au M4) ;
  * de la **perte en cas de défaut** : $1-\text{Recovery rate}$.

$$\text{CDS spread}\approx\text{Hazard rate}\times\text{LGD}$$

Par exemple, un taux de hasard de 2 % et un taux de recouvrement de 40 % donnent un spread d’environ $2\%\times60\%=1.2\%$ par an.

### Événements de crédit

Le contrat définit les événements qui déclenchent l’indemnité :

* **Faillite** : l’entité de référence demande la protection contre ses créanciers.
* **Défaut de paiement** : elle manque un paiement prévu d’intérêts ou de principal (après le délai de grâce éventuel).
* **Restructuration** : une modification involontaire des conditions de sa dette au détriment des créanciers, p. ex. un coupon plus bas ou une maturité plus longue. Elle est en général **exclue** des CDS standard sur entreprises nord-américaines, mais incluse dans de nombreux CDS européens.

La survenance d’un événement de crédit est décidée par un **comité de détermination** d’intermédiaires et d’investisseurs, mis en place par l’ISDA ; les deux parties sont donc liées par la même décision.

### Règlement

Modes de règlement :

* **Règlement physique** : l’acheteur livre la dette en défaut (valeur nominale = notionnel) au vendeur et reçoit le **notionnel** en espèces.
* **Règlement en espèces** : le vendeur verse le **montant de l’indemnité** ; la plupart des CDS se règlent ainsi. Le taux de recouvrement est fixé par une **enchère** sur la dette en défaut.

$$
\begin{aligned}
\text{Payout}&=\text{Notional}\\
&\quad\times(1-\text{Recovery rate})
\end{aligned}
$$

Le **ratio d’indemnisation** est $1-\text{Recovery rate}$, c’est-à-dire la LGD. Dans les deux cas, l’acheteur finit avec le notionnel, et le vendeur supporte la perte.

## Types de CDS

### CDS sur signature unique

Un **CDS sur signature unique** couvre **une seule entité de référence** et désigne une **obligation de référence**, l’instrument désigné. Il s’agit en général d’une dette **senior non garantie**.

* L’obligation de référence n’est pas le seul instrument couvert : **toute dette de rang égal ou supérieur** (séniorité) est couverte.
* L’indemnité est déterminée par l’obligation **la moins chère à livrer (CTD)** : la dette la moins chère au rang couvert. En cas de défaut, les dettes de même séniorité ont la même créance juridique mais peuvent coter à des prix différents ; l’acheteur livre la moins chère, et l’indemnité en espèces utilise son prix.

**Exemple.** Un acheteur détient 10 millions de protection sur une entreprise qui fait défaut. Deux de ses obligations senior non garanties cotent maintenant 38 et 42 pour 100. Que reçoit l’acheteur ?

<div class="reveal" tabindex="0">

L’obligation CTD cote 38 ; le taux de recouvrement est donc de 38 % :

$$10\text{m}\times(1-38\%)=6.2\text{ million}$$

En règlement physique, l’acheteur livrerait 10 millions de nominal de l’obligation à 38 (coût 3,8 millions) et recevrait 10 millions : le même montant net de 6,2 millions.

</div>

### CDS indiciel

Un **CDS indiciel** couvre **plusieurs emprunteurs**, p. ex. les 125 signatures du **CDX** (Amérique du Nord) ou de l’**iTraxx** (Europe, Asie).

* La couverture est **répartie également entre les emprunteurs** : chaque signature porte $1/125$ du notionnel.
* Quand une signature fait défaut, le vendeur paie sur la part de cette signature, et le contrat continue avec un notionnel réduit de cette part.
* La valeur d’un CDS indiciel dépend de la **corrélation de crédit** : la probabilité que les signatures fassent défaut ensemble. Une corrélation plus forte rend plusieurs défauts plus probables, et la protection sur l’indice plus précieuse.

**Exemple.** Un investisseur achète une protection sur le CDX pour un notionnel de 100 millions. Une des 125 signatures fait défaut, avec un taux de recouvrement de 40 %. Trouvez l’indemnité et le notionnel restant.

<div class="reveal" tabindex="0">

La part de chaque signature est $100\text{m}/125=0.8$ million.

$$0.8\text{m}\times(1-40\%)=480{,}000$$

Le notionnel tombe à $100\text{m}-0.8\text{m}=99.2$ million, et l’acheteur continue de payer le spread sur ce montant.

</div>

### CDS sur tranche

Un **CDS sur tranche** ne couvre qu’une tranche des pertes d’un indice, p. ex. les premiers 0–3 % de pertes ou la couche 3–7 %, comme les tranches d’un CDO.

### Options sur CDS

Une **swaption sur CDS** est une option d’acheter ou de vendre une protection à un spread fixé dans le futur : la version crédit de la [swaption](../C7%20Derivative/M2%20Options.md#swaption) de taux vue en Dérivés.

## Évaluation des CDS

Le marché négocie les CDS avec des **coupons standardisés** : **1 % pour la catégorie investissement** et **5 % pour le haut rendement**. Il faut les retenir : ils ne sont pas donnés à l’examen.

L’écart, propre à chaque cas, entre le coupon standard et le spread que le marché exige réellement (le **spread de crédit**) se règle par un **paiement initial (upfront)** au démarrage du contrat :

$$
\begin{aligned}
\text{Upfront}={}&\text{PV(protection leg)}\\
&-\text{PV(premium leg)}
\end{aligned}
$$

* **Jambe de protection** : les indemnités attendues en cas de défaut, soit $\sum \text{POD}_t\times\text{LGD}\times\text{DF}_t$, la CVA du M4.
* **Jambe de prime** : les paiements de coupon attendus, versés seulement tant que l’entité survit, soit $\sum \text{POS}_t\times\text{Coupon}\times\text{DF}_t$.

Une bonne approximation de la prime initiale, en pourcentage du notionnel :

$$
\begin{aligned}
\text{Upfront}\approx{}&(\text{Credit spread}\\
&-\text{Fixed coupon})\\
&\times\text{CDS duration}
\end{aligned}
$$

* Positive : l’**acheteur** paie le vendeur d’avance (le coupon est trop bas pour le risque).
* Négative : le **vendeur** paie l’acheteur (le coupon est trop élevé).

Les CDS sont cotés en **prix** pour 100 de notionnel :

$$\text{CDS price}=100-\text{Upfront premium}$$

avec la prime initiale en pourcentage du notionnel.

**Exemple.** Trouvez la prime initiale et le prix du CDS, et dites qui paie, pour 10 millions de protection à 5 ans sur :

1. Une entreprise de catégorie investissement : spread de crédit 1,80 %, duration du CDS 4,5.
2. Une entreprise à haut rendement : spread de crédit 3,20 %, duration du CDS 4,2.

<div class="reveal" tabindex="0">

**1. Catégorie investissement** (coupon 1 %) :

$$(1.80\%-1\%)\times4.5=3.60\%$$

L’acheteur paie d’avance $3.60\%\times10\text{m}=360{,}000$ ; le prix est $100-3.60=96.40$.

**2. Haut rendement** (coupon 5 %) :

$$(3.20\%-5\%)\times4.2=-7.56\%$$

Le vendeur paie d’avance à l’acheteur $7.56\%\times10\text{m}=756{,}000$ ; le prix est $100+7.56=107.56$.

</div>

### Gain sur CDS

Une fois le contrat en place, sa valeur varie avec le spread de crédit, comme le prix d’une obligation varie avec son rendement :

$$
\begin{aligned}
\text{Profit}\approx{}&\Delta\text{Spread}\times\text{CDS duration}\\
&\times\text{Notional}
\end{aligned}
$$

* L’**acheteur** de protection gagne quand le spread **s’élargit** (le crédit se dégrade).
* Le **vendeur** gagne quand le spread **se resserre**.

Sans le notionnel, la formule donne le gain en pourcentage du notionnel. Le gain peut être réalisé avant l’échéance en concluant un CDS inverse.

**Exemple.** Un investisseur a acheté 10 millions de protection avec une duration de CDS de 4,5. Le spread de crédit passe de 1,80 % à 2,40 %. Trouvez le gain.

<div class="reveal" tabindex="0">

$$0.60\%\times4.5\times10\text{m}=270{,}000$$

Un gain pour l’acheteur de protection, et une perte du même montant pour le vendeur.

</div>

## Utilisations des CDS

Les CDS servent à **spéculer** sur l’évolution de la qualité de crédit et à **couvrir** une exposition de crédit. Stratégies courantes :

1. **Ajustement de l’exposition de crédit** : un prêteur ou un porteur d’obligations **achète une protection** pour réduire son exposition à un emprunteur sans vendre le prêt ou l’obligation ; un investisseur **vend une protection** pour ajouter de l’exposition sans acheter d’obligations.
2. **CDS nu** : acheter une protection **sans détenir** l’obligation de référence : un pur pari sur la dégradation du crédit de l’entité.
3. **Position longue/courte entre CDS** : acheter une protection sur une entité (ou un secteur) et en vendre sur une autre, en pariant sur leur qualité de crédit **relative**.
4. **Opération sur la courbe** : une vue sur la **forme** de la **courbe de crédit**, les spreads de CDS d’une entité de référence selon les maturités.
5. **Opération de base** : exploiter un écart entre le spread de crédit sur le **marché obligataire** et le **spread du CDS** pour la même entité. Si le spread de l’obligation est supérieur à celui du CDS, **acheter l’obligation et acheter une protection** : le CDS couvre le risque de crédit, et l’investisseur garde la différence jusqu’à ce que les deux spreads convergent.
6. **Arbitrage, p. ex. CDO synthétique** : une obligation sans risque plus une protection **vendue** (CDS long, au sens long crédit ci-dessus) réplique une obligation risquée. Un pool de telles positions est un **CDO synthétique**. Si le synthétique est moins cher qu’un CDO réel (cash) de même exposition, acheter le CDO réel et vendre le synthétique, ou l’inverse.
7.

### Opération sur la courbe

La courbe de crédit est en général croissante : une protection plus longue coûte plus cher, car le crédit a plus de temps pour se dégrader.

* **Pentification (steepener)** : l’investisseur pense que la courbe de crédit va devenir **plus pentue** ; il **achète une protection longue** et **vend une protection courte**. Le spread long monte (la protection achetée gagne) et le spread court baisse (la protection vendue gagne).
* **Aplatissement (flattener)** : la vue inverse ; **vendre une protection longue** et **acheter une protection courte**.

<iframe
  class="fx-concept-chart"
  src="/charts/credit-curve-trade.html"
  title="Courbe de crédit aujourd’hui et après pentification, avec les deux jambes d’un steepener"
  loading="lazy"
></iframe>

**Exemple.** Un investisseur met en place un steepener : il achète 10 millions de protection à 10 ans (duration du CDS 8,5) et vend 10 millions de protection à 2 ans (duration du CDS 1,9). La courbe se pentifie comme sur le graphique : le spread à 10 ans s’élargit de 30 pb et celui à 2 ans se resserre de 18 pb. Trouvez le gain.

<div class="reveal" tabindex="0">

* 10 ans, protection achetée, spread élargi : $0.30\%\times8.5\times10\text{m}=255{,}000$
* 2 ans, protection vendue, spread resserré : $0.18\%\times1.9\times10\text{m}=34{,}200$

Gain total : **289 200**.

</div>

À notionnels égaux, la jambe longue a la plus grande duration ; l’opération est donc aussi nette **short crédit** : elle gagne si tous les spreads s’élargissent en parallèle. Pour parier sur la seule forme, dimensionnez les notionnels de sorte que les durations des deux jambes se compensent (ici environ $8.5/1.9\approx4.5$ fois plus de protection à 2 ans).

> [!Note]
>
> C’est différent de [chevaucher la courbe des taux](M1%20Term%20and%20Interest%20Rate.md#riding-the-yield-curve) au M1. Chevaucher la courbe tire profit d’une obligation qui descend, avec le temps, une courbe croissante **stable**. Une opération sur la courbe de crédit tire profit d’un **changement de forme** de la courbe.
