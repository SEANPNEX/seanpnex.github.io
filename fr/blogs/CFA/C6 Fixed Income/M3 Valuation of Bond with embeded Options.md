---
title: "Obligations à options incorporées"
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

# Évaluation des obligations à options incorporées

> [!Important]
>
> Le module le plus important du domaine obligataire.

## Notions de base

Une **option incorporée** est un droit inscrit dans les conditions de l’obligation. Son détenteur ne l’exerce que lorsque cela lui profite ; elle modifie donc les flux de l’obligation et sa relation prix–rendement (sa convexité, vue au niveau I) :

* **Obligation remboursable par anticipation (callable)** : l’**émetteur** peut rembourser l’obligation par anticipation au prix de remboursement. L’investisseur est vendeur d’un call, donc $V_{\text{callable}}=V_{\text{straight}}-V_{\text{call}}$. Quand les rendements baissent, l’obligation risque d’être remboursée ; son prix ne peut donc guère dépasser le prix de remboursement : **compression du prix** et **convexité négative** aux rendements bas.
* **Obligation avec option de vente (putable)** : l’**investisseur** peut revendre l’obligation à l’émetteur par anticipation au prix de revente. L’investisseur est acheteur d’un put, donc $V_{\text{putable}}=V_{\text{straight}}+V_{\text{put}}$. Quand les rendements montent, l’investisseur exerce le put ; le prix ne peut donc guère tomber sous le prix de revente : un **plancher de prix**, et une convexité plus positive aux rendements élevés.

<iframe
  id="price-yield-chart"
  class="fx-concept-chart"
  src="/charts/embedded-option-price-yield.html"
  title="Prix en fonction du rendement pour une obligation classique, callable et putable"
  loading="lazy"
></iframe>

Autres options incorporées :

* **Obligation prorogeable** : l’investisseur a le droit de **prolonger** l’échéance de l’obligation de quelques années. Elle équivaut à une obligation putable de maturité plus longue : une obligation prorogeable à 3 ans avec l’option de prolonger 2 ans de plus vaut autant qu’une obligation à 5 ans putable en année 3.
* **Obligation convertible** : l’investisseur peut **convertir** l’obligation en un nombre fixe d’actions ordinaires de l’émetteur. Détails dans [Obligation convertible](#convertible-bond) ci-dessous.
* **Obligation avec put successoral** (option du survivant) : les **héritiers** d’un porteur décédé peuvent revendre l’obligation à l’émetteur au pair.

## Évaluation par l’arbre binomial de taux

L’évaluation est en gros la même que pour une obligation classique, par induction à rebours dans l’[arbre binomial de taux](M2%20Arbitrage%20Free%20Valuation.md#binomial-tree-model). La seule étape supplémentaire : à chaque nœud où l’option peut être exercée, **comparer la valeur de l’obligation au prix d’exercice** et appliquer la décision du détenteur de l’option :

* **Callable** : l’émetteur rembourse quand l’obligation vaut plus que le prix de remboursement ; la valeur du nœud est donc $\min(V,\ \text{call price})$.
* **Putable** : l’investisseur exerce quand l’obligation vaut moins que le prix de revente ; la valeur du nœud est donc $\max(V,\ \text{put price})$.

On évalue ensuite l’option incorporée comme la différence :

$$V_{\text{call}}=V_{\text{straight}}-V_{\text{callable}}$$

$$V_{\text{put}}=V_{\text{putable}}-V_{\text{straight}}$$

**Exemple.** Reprenons l’arbre de M2 : 3 % aujourd’hui, puis 8 % (hausse) ou 5 % (baisse) dans un an, avec une probabilité de 50 % chacun. Une obligation à 2 ans a un nominal de 100 et un coupon annuel de 7 %. Sa valeur classique est de 104,359. Trouvez la valeur (a) de l’obligation remboursable à 100 dans un an, (b) de l’obligation revendable à 100 dans un an, et (c) des deux options incorporées.

Essayez d’abord, puis survolez (ou touchez) la réponse floutée.

<div class="reveal" tabindex="0">

En année 1, les valeurs classiques sont $107/1.08=99.074$ (haut) et $107/1.05=101.905$ (bas).

**(a) Callable.** Au nœud bas, l’obligation vaut 101,905, au-dessus du prix de remboursement ; elle est donc remboursée : la valeur du nœud devient 100. Le nœud haut est inchangé.

$$
\begin{aligned}
V_{\text{callable}}&=\frac{(99.074+7)+(100+7)}{2\times1.03}\\
&=103.434
\end{aligned}
$$

**(b) Putable.** Au nœud haut, l’obligation vaut 99,074, sous le prix de revente ; elle est donc revendue : la valeur du nœud devient 100. Le nœud bas est inchangé.

$$
\begin{aligned}
V_{\text{putable}}&=\frac{(100+7)+(101.905+7)}{2\times1.03}\\
&=104.808
\end{aligned}
$$

**(c) Les options.** $V_{\text{call}}=104.359-103.434=0.925$ et $V_{\text{put}}=104.808-104.359=0.449$.

</div>

**Styles d’exercice.**

* **Européen** : exerçable à une seule date.
* **Bermudéen** : exerçable à un ensemble de dates (p. ex. chaque date de coupon). Sur un arbre dont les pas sont ces dates, il s’évalue comme une option européenne : on vérifie l’exercice à chacun de ces nœuds.
* **Américain** : exerçable à tout moment. Hors examen ; en pratique, on donne à l’arbre beaucoup plus de nœuds, plus rapprochés (p. ex. un pas d’un jour au lieu d’un an), pour approcher l’exercice continu.

> [!Note]
>
> Ici, la valeur de l’option est obtenue comme la différence entre l’obligation classique et l’obligation avec option. En Produits dérivés, l’option s’évalue directement sur son propre arbre, sans évaluer l’obligation sous-jacente ; voir [Évaluation binomiale des options](../C7%20Derivative/M2%20Options.md#binomial-option-valuation) et [Option de taux](../C7%20Derivative/M2%20Options.md#interest-rate-option).

## Effets de la volatilité des taux

Comme vu en M2, des nœuds adjacents sont séparés d’un facteur constant, qui pour un pas de $t$ ans vaut

$$r_U=r_D\,e^{2\sigma\sqrt{t}}$$

Avec un $\sigma$ plus élevé, l’arbre s’étale davantage : les taux de chaque date varient plus largement, tandis que l’arbre reste calibré sur les mêmes obligations de référence, si bien que son niveau central est inchangé.

* **Obligations classiques** : les taux au comptant sont inchangés, donc la valeur DCF aussi. Par la condition d’absence d’arbitrage, l’arbre binomial doit donner le même $V_0$ : **la volatilité n’affecte pas la valeur d’une obligation classique**.
* **Obligations avec options** : la partie classique reste la même, mais, comme pour toute option (p. ex. selon BSM), **une volatilité plus forte augmente la valeur de l’option**. Donc :

$$\sigma\uparrow\ \Longrightarrow\ V_{\text{call}}\uparrow,\ V_{\text{callable}}\downarrow$$

$$\sigma\uparrow\ \Longrightarrow\ V_{\text{put}}\uparrow,\ V_{\text{putable}}\uparrow$$

Le niveau et la forme de la courbe comptent aussi : si les taux futurs attendus baissent (p. ex. la courbe s’aplatit ou s’inverse), le call prend de la valeur et le put en perd.

## Calcul du spread ajusté des options

Le **spread ajusté des options (OAS)** est l’écart constant qui, **ajouté à chaque taux à une période de l’arbre binomial sans arbitrage**, rend la valeur de l’obligation sur l’arbre égale à son **prix de marché**.

* Comme le [Z-spread](M1%20Term%20and%20Interest%20Rate.md#spread) (un écart constant ajouté à la courbe au comptant d’État), l’OAS est un déplacement **parallèle**, ici de tous les taux de l’arbre.
* On le trouve comme une valeur d’obligation : en évaluant l’obligation dans l’arbre et en ajustant l’écart par tâtonnement jusqu’à ce que la valeur égale le prix.
* Comme l’arbre évalue explicitement l’option, l’OAS est l’écart de rendement **débarrassé de l’influence de l’option incorporée**.

La différence entre les deux spreads est le **coût de l’option**, en points de base :

$$\text{OAS}=\text{Z-spread}-\text{Option cost}$$

* **Callable** : l’investisseur est vendeur du call et en est rémunéré ; le coût de l’option est donc **positif** et $\text{OAS}<\text{Z-spread}$.
* **Putable** : l’investisseur est acheteur du put et le paie ; le coût de l’option est donc **négatif** et $\text{OAS}>\text{Z-spread}$.

## Applications de l’OAS

**Ce que rémunère chaque spread.** Selon la référence, un spread capte des risques différents :

| Référence | Trésor | Secteur obligataire | Propre à l’émetteur |
| --- | --- | --- | --- |
| **Spread nominal / Z-spread** | Risques de crédit, de liquidité, d’option | Crédit (par rapport au secteur), liquidité, option | Risques de liquidité et d’option |
| **OAS** | Risques de crédit et de liquidité | Crédit (par rapport au secteur), liquidité | Risque de liquidité |

**Utiliser l’OAS pour repérer des obligations mal évaluées.** Comparez l’OAS effectif de l’obligation à l’OAS **exigé** pour ses risques, c’est-à-dire celui d’obligations comparables :

| Référence | Trésor | Secteur obligataire | Propre à l’émetteur (risque de liquidité supposé faible) |
| --- | --- | --- | --- |
| **OAS effectif > 0** | Sous-évaluée si OAS effectif > OAS exigé ; surévaluée si OAS effectif < OAS exigé | Sous-évaluée si OAS effectif > OAS exigé ; surévaluée si OAS effectif < OAS exigé | **Sous-évaluée** |
| **OAS effectif = 0** | **Surévaluée** : aucune rémunération des risques de crédit et de liquidité | **Surévaluée** | **Correctement évaluée** |
| **OAS effectif < 0** | **Surévaluée** | **Surévaluée** | **Surévaluée** |

Un **OAS plus élevé** que celui d’obligations comparables signifie que l’obligation est **bon marché** (sous-évaluée) ; un OAS plus faible, qu’elle est **chère** (surévaluée).

**OAS et volatilité.** Pour un **prix de marché donné** :

* Quand la volatilité des taux **augmente**, l’**OAS d’une obligation callable diminue** : le modèle valorise davantage le call et moins la callable ; un écart plus faible suffit donc à ramener la valeur du modèle au prix.
* Quand la volatilité des taux **augmente**, l’**OAS d’une obligation putable augmente** : le modèle valorise davantage le put et la putable ; il faut donc un écart plus grand.

Cela découle de la définition : la valeur de l’option change, et l’écart doit la compenser. L’OAS dépend donc de la volatilité supposée par l’analyste, et les OAS de deux analystes ne sont comparables qu’avec les mêmes hypothèses.

## Risque de taux

Comme le montre le [graphique prix–rendement](#price-yield-chart) ci-dessus, une option incorporée modifie la convexité de l’obligation quand les rendements changent. Le risque de taux se mesure donc avec des **durations de courbe**, qui réévaluent l’obligation dans l’arbre, plutôt qu’avec des durations de rendement.

Pour les mouvements de la courbe : si les taux futurs attendus **baissent**, le **call** prend de la valeur et le **put** en perd.

## Duration effective

La **duration effective** est une [duration de courbe](M1%20Term%20and%20Interest%20Rate.md#key-rate-duration) : elle reflète la sensibilité du prix de l’obligation à un **déplacement parallèle de la courbe de référence**, en général la courbe au pair d’État, **sans variation du spread de crédit**.

**Pour une obligation classique**, déplacez la courbe de référence vers le bas et vers le haut de $\Delta\text{Curve}$, réévaluez l’obligation en actualisant ses flux aux taux déplacés, et utilisez

$$\text{EffDur}=\frac{PV_{-}-PV_{+}}{2\times\Delta\text{Curve}\times PV_0}$$

**Pour une obligation à options incorporées**, les flux changent avec les taux ; chaque prix doit donc provenir d’un nouvel arbre. L’OAS maintient le spread de crédit constant :

1. **Étape 1 :** calculer l’**OAS** implicite à partir de l’arbre binomial actuel et du prix de marché ($PV_0$).
2. **Étape 2 :** déplacer la courbe de référence **vers le bas** de $\Delta\text{Curve}$, générer un nouvel arbre de taux, et calculer $PV_{-}$ avec l’OAS de l’étape 1.
3. **Étape 3 :** déplacer la courbe de référence **vers le haut** de $\Delta\text{Curve}$, générer un nouvel arbre, et calculer $PV_{+}$ avec le même OAS.
4. **Étape 4 :** calculer la duration effective :

$$D_{\text{eff}}=\frac{PV_{-}-PV_{+}}{2\times\Delta\text{Curve}\times PV_0}$$

La procédure sert à comprendre et ne sera pas testée.

**Exemple (obligation callable illustrative).** $PV_0=101.2$ ; avec la courbe déplacée de $\pm30$ pb, $PV_{-}=102.8$ et $PV_{+}=99.2$ :

$$D_{\text{eff}}=\frac{102.8-99.2}{2\times0.003\times101.2}=5.93$$

**Conclusions à retenir (seront testées) :**

- **ED d’un zéro-coupon ≈ maturité du zéro-coupon**
- **ED d’une obligation à taux fixe < maturité de l’obligation à taux fixe**
- **ED d’une obligation à taux variable ≈ temps (en années) jusqu’au prochain réajustement** : les coupons étant payés à terme échu, le coupon se réajuste au taux du marché ; à une date de réajustement, le prix revient au pair et la duration est d’environ 0.
- **ED des obligations callable et putable ≤ ED d’une obligation classique identique**
  - Une **baisse** des taux **raccourcit** la duration effective d’une obligation **callable** : le remboursement devient probable, et l’obligation se comporte comme une obligation plus courte qui s’arrête à la date de remboursement.
  - Une **hausse** des taux **raccourcit** la duration effective d’une obligation **putable** : l’exercice du put devient probable, et l’obligation se comporte comme une obligation plus courte qui s’arrête à la date du put.

## Convexité effective

La **convexité effective** est la sensibilité de la duration aux variations de taux : la dérivée seconde du prix, comme mesure de courbe. On l’estime à partir des trois mêmes prix :

$$\text{EffCon}=\frac{PV_{-}+PV_{+}-2\,PV_0}{(\Delta\text{Curve})^2\times PV_0}$$

Avec la duration effective, elle donne le développement de Taylor d’ordre deux de la variation de prix :

$$
\begin{aligned}
\frac{\Delta P}{P}\approx&-\text{EffDur}\cdot\Delta\text{Curve}\\
&+\tfrac12\,\text{EffCon}\cdot(\Delta\text{Curve})^2
\end{aligned}
$$

* Une obligation **classique** a une convexité légèrement **positive**.
* Une obligation **callable** a une convexité **négative** quand les taux sont bas et le remboursement probable.
* Une obligation **putable** a une convexité **plus positive** qu’une obligation classique quand les taux sont élevés et le put probable.

Dans l’exemple callable ci-dessus : $\text{EffCon}=\dfrac{102.8+99.2-2\times101.2}{0.003^2\times101.2}=-439$, négative, comme attendu pour une obligation callable.

## Durations unilatérales

Les durations unilatérales prolongent la duration effective : ce sont des durations de courbe qui n’utilisent qu’**un seul côté** du déplacement.

$$D_{\text{up}}=\frac{PV_0-PV_{+}}{\Delta\text{Curve}\times PV_0}$$

$$D_{\text{down}}=\frac{PV_{-}-PV_0}{\Delta\text{Curve}\times PV_0}$$

La duration effective est leur moyenne. Quand le prix d’une obligation réagit de façon **asymétrique** aux hausses et aux baisses de taux, comme avec une option incorporée proche de la monnaie, chaque duration unilatérale estime mieux la sensibilité dans sa direction.

* Obligation **classique** : la convexité positive fait monter le prix un peu plus qu’il ne baisse ; $D_{\text{down}}$ est donc légèrement **supérieure** à $D_{\text{up}}$.
* Obligation **callable** : quand les taux baissent, le prix est plafonné près du prix de remboursement, donc $D_{\text{down}}<D_{\text{up}}$.
* Obligation **putable** : quand les taux montent, le prix a un plancher près du prix de revente, donc $D_{\text{up}}<D_{\text{down}}$.

Dans l’exemple callable : $D_{\text{up}}=\dfrac{101.2-99.2}{0.003\times101.2}=6.59$ et $D_{\text{down}}=\dfrac{102.8-101.2}{0.003\times101.2}=5.27$ ; leur moyenne est la duration effective de 5,93.

## Duration par taux clé {#key-rate-duration}

Rappelez-vous la [duration par taux clé](M1%20Term%20and%20Interest%20Rate.md#key-rate-duration) de M1.

> [!Note]
>
> La courbe de référence du programme est la **courbe au pair**. Certains cas utilisent la courbe au comptant, mais la courbe au pair est l’usage en pratique.

Les durations par taux clé aident à identifier le **risque de forme** d’une obligation : sa sensibilité aux changements de forme de la courbe (pentification, aplatissement, torsions).

**Propriétés :**

1. **Obligation sans option cotant au pair** : le **taux au pair de sa maturité est le seul taux qui affecte sa valeur**, et toutes les autres durations par taux clé sont nulles. Une obligation dont le coupon égale le taux au pair de sa maturité cote au pair quels que soient les autres taux au pair ; seule une variation de ce taux fait bouger son prix.
2. **Obligation sans option ne cotant pas au pair** : le taux au pair de sa maturité a toujours le **plus grand** effet, mais d’autres taux clés comptent aussi.
3. **Obligations à options incorporées** : cela dépend de la probabilité d’exercice de l’option.
   * **Callable** à coupon **faible** : peu de chances d’être remboursée ; le taux **de sa maturité** a donc le plus grand effet. Quand le coupon **augmente**, le remboursement devient plus probable, et le taux **à la date d’exercice** (le taux au pair de la date de remboursement) a le plus grand effet.
   * **Putable** à coupon **élevé** : peu de chances d’être revendue ; le taux **de sa maturité** domine. Avec un coupon **plus faible**, le put devient plus probable, et le taux **à la date d’exercice** domine.
4. **Zéro-coupons ou obligations à très faible coupon** : les durations par taux clé peuvent parfois être **négatives** pour des points de maturité **plus courts** que celle de l’obligation.

## Obligations à taux variable plafonnées ou planchers

### Obligation à taux variable

Une **obligation à taux variable** verse un coupon qui se réajuste selon un **taux de référence**, comme un MRR (SOFR, autrefois LIBOR) :

$$\text{Coupon}=\text{Reference rate}+\text{Margin}$$

* La marge cotée est **fixe** sur toute la vie de l’obligation.
* Les coupons sont payés **à terme échu** : chaque coupon repose sur le taux de référence fixé au **début** de la période et payé à sa **fin**.
* Si la marge cotée égale la marge exigée par le marché, l’obligation cote donc **au pair à chaque date de réajustement**.

> [!Note]
>
> Les obligations indexées sur l’inflation comme les TIPS sont liées mais différentes : leur taux de coupon est fixe, et c’est le **principal** qui est indexé sur l’inflation.

### Obligation à taux variable avec plafond ou plancher

Un plafond ou un plancher **limite le taux du coupon** :

* Un **plafond (cap)** fixe un taux de coupon **maximal**. Il protège l’**émetteur** contre la hausse des taux : l’émetteur détient le cap (comme un call sur les taux), donc

$$V_{\text{capped floater}}=V_{\text{straight floater}}-V_{\text{cap}}$$

* Un **plancher (floor)** fixe un taux de coupon **minimal**. Il protège l’**investisseur** contre la baisse des taux : l’investisseur détient le floor (comme un put sur les taux), donc

$$V_{\text{floored floater}}=V_{\text{straight floater}}+V_{\text{floor}}$$

* Une obligation à taux variable avec **à la fois** un plafond et un plancher est un floater à **tunnel (collar)**.

Le calcul suit l’arbre binomial, comme pour les obligations à options incorporées : à chaque nœud, fixer le coupon payé en fin de période au taux plafonné ou planché, puis évaluer à rebours.

**Exemple.** Un floater à 2 ans verse annuellement à terme échu le taux à un an (marge cotée nulle), sur l’arbre de M2 (3 % aujourd’hui ; 8 % ou 5 % dans un an). Un floater classique vaut 100. Évaluez-le (a) avec un **cap à 6 %** et (b) avec un **floor à 5,5 %**.

Essayez d’abord, puis survolez (ou touchez) la réponse floutée.

<div class="reveal" tabindex="0">

Chaque coupon est fixé par le taux au début de sa période : le coupon de l’année 1 par les 3 % d’aujourd’hui, celui de l’année 2 par le taux du nœud de l’année 1.

**(a) Cap à 6 %.** Seuls les 8 % du nœud haut dépassent le cap ; son coupon de l’année 2 est donc de 6 au lieu de 8.

* Année 1, haut : $(100+6)/1.08=98.148$ ; bas : $(100+5)/1.05=100$
* Aujourd’hui (coupon de l’année 1 $=3$, sous le cap) :

$$
\begin{aligned}
V_0&=\frac{(98.148+3)+(100+3)}{2\times1.03}\\
&=99.101
\end{aligned}
$$

Le cap vaut $100-99.101=0.899$ pour l’émetteur.

**(b) Floor à 5,5 %.** Les 3 % d’aujourd’hui et les 5 % du nœud bas sont sous le floor ; ces coupons sont donc relevés à 5,5.

* Année 1, haut : $(100+8)/1.08=100$ ; bas : $(100+5.5)/1.05=100.476$
* Aujourd’hui (coupon de l’année 1 $=5.5$) :

$$
\begin{aligned}
V_0&=\frac{(100+5.5)+(100.476+5.5)}{2\times1.03}\\
&=102.658
\end{aligned}
$$

Le floor vaut $102.658-100=2.658$ pour l’investisseur.

</div>

## Obligation à cliquet

Une **obligation à cliquet (ratchet)** est un floater dont le coupon ne peut que **baisser** à chaque réajustement : le plafond du coupon descend par crans et ne remonte jamais. Elle comporte des options **des deux côtés** :

* L’**émetteur** obtient une protection extrême : si les taux baissent, le coupon baisse ; s’ils montent, il ne monte pas.
* L’**investisseur** dispose d’un **put conditionnel** : à un réajustement où le coupon est abaissé, il peut revendre l’obligation au pair. Si le coupon n’est jamais réajusté, il ne peut pas l’exercer.

## Obligation convertible {#convertible-bond}

Le droit de conversion peut être vu comme un **call sur les actions de l’émetteur** détenu par l’investisseur.

**Définitions :**

* $\text{Conversion price}=\dfrac{\text{Issue price}}{\text{Conversion ratio}}$, et donc $\text{Conversion ratio}=\dfrac{\text{Issue price}}{\text{Conversion price}}$
* $\text{Market conversion price}=\dfrac{\text{Convertible bond market price}}{\text{Conversion ratio}}$
* $\text{Market conversion premium per share}=\text{Market conversion price}-\text{Market share price}$
* $\text{Market conversion premium ratio}=\dfrac{\text{Market conversion premium per share}}{\text{Market share price}}$
* $\text{Conversion value}=\text{Market share price}\times\text{Conversion ratio}$
* **Valeur obligataire pure** : la valeur de l’obligation sans l’option de conversion
* $\text{Minimum value}=\max(\text{Conversion value},\ \text{Straight value})$

**Exemple.** Une obligation convertible de nominal 1 000 cote 1 100. Elle se convertit en 40 actions, le cours de l’action est de 25 et la valeur obligataire pure de 950.

* Valeur de conversion $=25\times40=1{,}000$
* Prix de conversion de marché $=1{,}100/40=27.50$
* Prime de conversion de marché par action $=27.50-25=2.50$ ; taux de prime $=2.50/25=10\%$
* Valeur minimale $=\max(1{,}000,\ 950)=1{,}000$
* Prime sur la valeur obligataire pure $=1{,}100/950-1=15.8\%$

**Évaluation.** La convertible est une obligation classique plus un call sur les actions ; toute autre option incorporée s’ajoute ou se retranche :

$$
\begin{aligned}
V_{\text{convertible}}={}&V_{\text{straight}}+V_{\text{call on stock}}\\
&-V_{\text{issuer call}}+V_{\text{investor put}}
\end{aligned}
$$

### Analyse

* Le **risque de baisse** est limité par la **valeur obligataire pure**, un plancher sous le prix de l’obligation :

$$
\begin{aligned}
&\text{Premium over straight value}\\
&=\frac{\text{Convertible price}}{\text{Straight value}}-1
\end{aligned}
$$

* Le **potentiel de hausse** dépend de l’**action sous-jacente**.

**Performance comparée à celle des actions :**

1. **Le cours de l’action monte** : la convertible **fait moins bien** que les actions, car l’investisseur a payé une prime de conversion.
2. **Le cours baisse** : le rendement de la convertible **dépasse** celui des actions, car la valeur obligataire pure limite la chute.
3. **Le cours est stable** : le rendement de la convertible **dépasse** en général celui des actions, car ses coupons sont en général supérieurs aux dividendes.
4. **Cours très inférieur au prix de conversion** : la convertible se comporte comme une **obligation** (convertible « busted »). **Très supérieur** : elle se comporte comme l’**action**.
