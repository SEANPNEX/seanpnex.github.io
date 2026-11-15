---
title: "Valorisation sans arbitrage"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 671px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 1190px; }
}
</style>

# Valorisation sans arbitrage

L’évaluation obligataire traditionnelle actualise chaque flux à un taux unique, le YTM. La **valorisation sans arbitrage** fixe au contraire le prix d’un titre de sorte qu’**aucun arbitrage ne soit possible** : chaque flux est actualisé au taux au comptant de sa propre date, si bien que la valeur est cohérente avec les prix de toutes les autres obligations du marché.

L’**arbitrage** est une violation de la **loi du prix unique** : deux actifs (ou portefeuilles) ayant les mêmes flux futurs doivent avoir le même prix aujourd’hui. Sinon, un investisseur peut acheter le moins cher, vendre le plus cher et verrouiller un profit sans risque.

**Exemple.** Quatre actifs sans risque :

| Actif | Prix aujourd’hui | Paiement dans un an |
| ----- | ----------: | -----------------: |
| A     | 0.952381    | 1                  |
| B     | 95          | 105                |
| C     | 100         | 105                |
| D     | 200         | 220                |

L’actif A évalue 1 payé dans un an à 0,952381, soit un taux de 5 %. À ce prix, un paiement de 105 vaut $105\times0.952381=100$, et un paiement de 220 vaut $220\times0.952381=209.52$ :

* **C** cote 100 : **juste**.
* **B** cote 95, sous 100 : **sous-évalué** de 5.
* **D** cote 200, sous 209,52 : **sous-évalué** de 9,52.

Pour exploiter B :

* **T = 0** : vendre à découvert 105 unités de A (recevoir $105\times0.952381=100$) et acheter B pour 95. Profit aujourd’hui : **5**.
* **T = 1** : B paie 105, ce qui couvre exactement les 105 dus sur la position courte en A. Flux net : **0**.

Il existe deux types d’occasions d’arbitrage :

* **Additivité des valeurs** : la valeur du tout doit être égale à la somme des valeurs de ses parties. Sinon, les intermédiaires négocient l’écart :
  * **Démembrement (stripping)** : séparer les flux d’une obligation et les négocier comme des titres zéro-coupon (quand les parties valent plus que le tout).
  * **Reconstitution** : recombiner les zéro-coupons pour reproduire l’obligation à coupons sous-jacente (quand le tout vaut plus que les parties).
* **Dominance** : un actif financier au **paiement futur sans risque** doit avoir un **prix positif** aujourd’hui. Plus généralement, un actif qui paie au moins autant dans chaque état ne peut pas coûter moins.

Pour une obligation **sans option**, la valeur sans arbitrage est simplement la valeur actuelle de ses flux, chacun actualisé à son propre **taux au comptant**.

Pour une obligation à **options incorporées**, les flux futurs attendus **dépendent de l’évolution des taux** (une obligation remboursable par anticipation sera probablement remboursée si les taux baissent) ; un seul jeu de taux au comptant ne suffit donc pas. On utilise un **arbre binomial de taux** pour l’évaluer. L’arbre évalue aussi les obligations ordinaires sans option, et donne la même réponse que l’actualisation aux taux au comptant.

## Modèles de structure par terme

Les modèles de structure par terme décrivent l’évolution du taux court $r_t$ dans le temps. Leur forme générale est

$$dr_t=\underbrace{\text{drift}}_{\text{expected change}}\,dt+\underbrace{\text{volatility}}_{\text{size of shocks}}\,dZ$$

où $dZ$ est l’incrément d’un **processus de Wiener** (une marche aléatoire en temps continu) : un choc aléatoire de moyenne 0 et de variance $dt$. Il existe deux familles.

Les **modèles d’équilibre** décrivent la dynamique de la structure par terme à partir de **variables économiques fondamentales** censées influer sur les taux.

* Ils peuvent être à **un facteur** (le seul taux court) ou **multifactoriels**.
* Ils exigent de spécifier le terme de **dérive** et une hypothèse sur la **forme fonctionnelle de la volatilité des taux**.
* Leurs paramètres viennent d’hypothèses économiques ou de l’historique ; leurs prix ne correspondent donc pas forcément exactement aux prix de marché actuels.

### Modèle de Cox-Ingersoll-Ross

Le modèle CIR suppose que l’économie a un **taux court d’équilibre de long terme**, vers lequel le taux court **revient** (retour à la moyenne) : quand $r_t$ est au-dessus de $\theta$, la dérive est négative, et positive quand il est en dessous.

$$dr_t=k(\theta-r_t)\,dt+\sigma\sqrt{r_t}\,dZ$$

* $\theta$ : la valeur de long terme du taux court (la valeur d’équilibre)
* $k$ : un nombre positif, la **vitesse de retour à la moyenne**
* $\sigma$ : la volatilité des taux
* $dZ$ : le choc aléatoire, de loi normale de moyenne 0 et de variance $dt$

Le terme de volatilité $\sigma\sqrt{r_t}$ **diminue quand les taux baissent** : près de zéro, les chocs deviennent minuscules tandis que la dérive ramène le taux vers le haut ; **les taux ne peuvent donc pas devenir négatifs**.

### Modèle de Vasicek

$$dr_t=k(\theta-r_t)\,dt+\sigma\,dZ$$

La dérive est le même retour à la moyenne que dans CIR, mais la volatilité $\sigma$ est **constante**, indépendante du niveau des taux.

Par rapport au modèle CIR :

* Dans CIR, le facteur $\sqrt{r_t}$ fait dépendre la taille des chocs du niveau de $r_t$ ; pas dans Vasicek.
* Comme les chocs de Vasicek ne diminuent pas près de zéro, **les taux peuvent devenir négatifs**. La volatilité de CIR, dépendante du niveau, rend les taux négatifs impossibles.

### Modèle de Ho-Lee

Les **modèles sans arbitrage** partent dans l’autre sens : le modèle doit **reproduire les prix de marché actuels** des obligations de référence ($V=P$). Leurs paramètres sont **calibrés** sur la structure par terme actuelle, puis le modèle sert à évaluer d’autres titres, comme les obligations à options incorporées.

$$dr_t=\theta_t\,dt+\sigma\,dZ$$

* $\theta_t$ est une **dérive dépendant du temps**, choisie pour que le modèle évalue exactement chaque obligation de référence. Elle diffère du niveau d’équilibre constant $\theta$ de CIR et de Vasicek.
* La volatilité $\sigma$ est constante, et les taux suivent une loi **normale** ; ils **peuvent donc devenir négatifs**.

### Modèle de Kalotay-Williams-Fabozzi

$$d(\ln r_t)=\theta_t\,dt+\sigma\,dZ$$

Le modèle KWF est le modèle de Ho-Lee appliqué au **logarithme** du taux court. Le logarithme du taux court suit une loi normale ; le taux lui-même est donc **log-normal** et **ne peut pas devenir négatif**. L’arbre binomial ci-dessous repose sur la même hypothèse log-normale.

| Modèle | Type | Dérive | Volatilité | Taux négatifs ? |
| --- | --- | --- | --- | --- |
| CIR | Équilibre | Retour à la moyenne, $k(\theta-r_t)$ | $\sigma\sqrt{r_t}$ | Non |
| Vasicek | Équilibre | Retour à la moyenne, $k(\theta-r_t)$ | $\sigma$ constant | Oui |
| Ho-Lee | Sans arbitrage | $\theta_t$ dépendant du temps | $\sigma$ constant | Oui |
| KWF | Sans arbitrage | $\theta_t$ dépendant du temps, sur $\ln r_t$ | $\sigma$ constant sur $\ln r_t$ | Non |

## Modèle de l’arbre binomial {#binomial-tree-model}

Un arbre binomial se ramifie **vers l’avant** dans le temps, avec un mouvement de hausse et un de baisse à chaque pas, puis **évalue à rebours** depuis les nœuds finaux. La même idée sous-tend l’arbre de taux utilisé ici et les arbres d’actions et d’options en Produits dérivés :

<iframe
  class="fx-concept-chart"
  src="/charts/binomial-trees.html"
  title="Arbres binomiaux : taux, valeur de l’obligation, cours de l’action et valeur du call"
  loading="lazy"
></iframe>

> [!Note]
>
> Pour les arbres d’actions et d’options, voir [Évaluation binomiale des options](../C7%20Derivative/M2%20Options.md#binomial-option-valuation) en Produits dérivés.

**Structure.**

* Au pas $n$, il y a $n+1$ nœuds. L’arbre est **recombinant** (hausse puis baisse mène au même nœud que baisse puis hausse) car la volatilité est maintenue constante ; en réalité elle change, mais la recombinaison garde un arbre de petite taille.
* Plus le pas de temps est court, plus l’arbre est précis. À l’examen, le pas est en général d’**un an**.
* Dans la seule partie **Obligations** du niveau II, on suppose les mouvements de hausse et de baisse **équiprobables (50 % chacun)**. En Produits dérivés, les probabilités doivent être calculées comme probabilités risque-neutres ; voir [Probabilité risque-neutre](../C7%20Derivative/M2%20Options.md#risk-neutral-probability).

**Espacement des nœuds.** Les taux à une période sont supposés suivre une **marche aléatoire log-normale** ; des nœuds adjacents diffèrent donc d’un facteur constant qui ne dépend que de la volatilité des taux $\sigma$ :

$$i_{1,U}=i_{1,L}\,e^{2\sigma}$$

Aux pas suivants, chaque nœud est le nœud inférieur multiplié par $e^{2\sigma}$ : par exemple $i_{2,LU}=i_{2,LL}\,e^{2\sigma}$ et $i_{2,UU}=i_{2,LL}\,e^{4\sigma}$. Une volatilité plus forte écarte davantage les nœuds.

**Ce que signifient les nœuds.**

* Chaque nœud est un **taux à une période possible** à cette date future : un taux à terme à une période dans un scénario. Les taux de chaque date se répartissent autour du taux à terme correspondant.
* Les nœuds rejoignent donc la vision des taux à terme du **niveau I** : même durée (une période), départs à des dates différentes.
* Les **théories traditionnelles de la structure par terme** parlent du taux futur **attendu** ; l’arbre binomial décrit les taux futurs **possibles** et leur probabilité.
* Les **modèles modernes** ci-dessus sont plus précis qu’un arbre binomial : ils décrivent tout le processus aléatoire. Chaque nœud de l’arbre peut être vu comme une réalisation possible de leur terme stochastique.

### Évaluer l’obligation sans option

La valeur de l’obligation à un nœud est la **moyenne des deux valeurs possibles une période plus tard**, chacune **augmentée du coupon** alors versé, actualisée au taux du nœud :

$$V=\frac{1}{1+i}\cdot\frac{(V_U+C)+(V_D+C)}{2}$$

**Exemple.** L’arbre a 3 % aujourd’hui, et 8 % (hausse) ou 5 % (baisse) dans un an. Une obligation à 2 ans a un nominal de 100 et un coupon annuel de 7 %.

* Année 1, nœud haut : $V_{1,U}=107/1.08=99.074$
* Année 1, nœud bas : $V_{1,D}=107/1.05=101.905$
* Aujourd’hui :

$$
\begin{aligned}
V_0&=\frac{1}{1.03}\cdot\frac{(99.074+7)+(101.905+7)}{2}\\
&=\frac{107.490}{1.03}=104.359
\end{aligned}
$$

N’oubliez pas d’**ajouter le coupon** à chaque pas avant de faire la moyenne.

Contrairement aux autres arbres, l’arbre des valeurs de l’obligation **converge à l’échéance** : chaque chemin finit au pair (plus le dernier coupon), car l’obligation paie le même montant quelle que soit l’évolution des taux.

### Construire l’arbre binomial de taux

L’arbre doit être **sans arbitrage** : il doit évaluer les obligations de référence (on-the-run, sans option) à leurs prix de marché. Il se construit pas à pas à partir de la **courbe au pair** (ou au comptant), par bootstrapping, les nœuds adjacents étant espacés d’un facteur $e^{2\sigma}$. Il y a deux façons de fixer les nœuds.

**1. Calibrage (exact).** À chaque pas, choisir le nœud le plus bas par tâtonnement, les autres étant des multiples $e^{2\sigma}$, jusqu’à ce que l’arbre évalue l’obligation au pair suivante exactement au pair.

**Exemple.** Le taux au pair à 1 an est de 2 %, celui à 2 ans de 3 %, et $\sigma=15\%$. Le nœud d’aujourd’hui est 2 %. Trouver les nœuds de l’année 1, $i_{1,L}$ et $i_{1,U}=i_{1,L}e^{0.30}$, qui évaluent l’obligation à 2 ans et 3 % à 100. La solution est $i_{1,L}=3.442\%$ et $i_{1,U}=4.646\%$ :

$$
\begin{aligned}
&\frac{1}{1.02}\cdot\frac{\left(\frac{103}{1.04646}+3\right)+\left(\frac{103}{1.03442}+3\right)}{2}\\
&=\frac{102.000}{1.02}=100.00
\end{aligned}
$$

**2. Approximation à partir des taux à terme.** Centrer les nœuds sur le taux à terme, à $\pm\sigma$ autour :

$$i_{1,L}\approx f(1,1)\,e^{-\sigma},\qquad i_{1,U}\approx f(1,1)\,e^{\sigma}$$

Dans l’exemple, les taux au comptant sont $s_1=2\%$ et $s_2=3.015\%$, donc $f(1,1)=4.040\%$, ce qui donne $4.040\%\times e^{-0.15}=3.478\%$ et $4.040\%\times e^{0.15}=4.694\%$, proches des valeurs calibrées.

### Évaluation par les chemins

Au lieu de remonter l’arbre, **actualiser les flux le long de chaque chemin de taux possible**, puis prendre la **moyenne** des valeurs des chemins.

* Avec des pas annuels, une obligation à $N$ ans a $2^{N-1}$ chemins (le premier taux est connu aujourd’hui).
* Le résultat est **le même** qu’avec l’induction à rebours dans l’arbre.

**Exemple (l’obligation à 2 ans ci-dessus).** Il y a $2^{2-1}=2$ chemins :

* Chemin haut (3 %, 8 %) : $\dfrac{7}{1.03}+\dfrac{107}{1.03\times1.08}=102.985$
* Chemin bas (3 %, 5 %) : $\dfrac{7}{1.03}+\dfrac{107}{1.03\times1.05}=105.733$
* Moyenne : $\dfrac{102.985+105.733}{2}=104.359$, comme avec l’arbre.

## Monte-Carlo

Certains produits de taux ont des flux **dépendants du chemin** : ce qu’ils paient à une date dépend de **tout l’historique** des taux jusqu’à cette date, pas seulement du taux à cette date. Un arbre binomial ne peut pas les évaluer, car l’induction à rebours suppose que la valeur à un nœud ne dépend que du taux à ce nœud. Un **titre adossé à des créances hypothécaires (MBS)** est l’exemple type ; on utilise donc la **simulation** pour modéliser les taux.

**Pourquoi les flux d’un MBS dépendent du chemin.** Les propriétaires peuvent **rembourser par anticipation** leur prêt, et le font en général quand ils peuvent **refinancer** à un taux plus bas. Qu’un emprunteur ait remboursé avant une date donnée dépend donc du fait que les taux aient **suffisamment baissé à un moment quelconque auparavant**, pas seulement du taux du jour. Les remboursements anticipés montrent aussi un **effet d’épuisement (burnout)** : après une période de taux bas, les emprunteurs les plus enclins à refinancer l’ont déjà fait, et le pool rembourse plus lentement que ce niveau de taux ne le laisserait penser. Deux chemins qui finissent au même taux peuvent donc laisser des pools, et des flux, très différents.

**La méthode.**

1. Simuler un grand nombre de **chemins aléatoires** de taux à une période, p. ex. à partir d’un des modèles de structure par terme ci-dessus, comme CIR.
2. Calculer les **flux le long de chaque chemin**, y compris les remboursements anticipés dépendants du chemin.
3. Les actualiser le long du chemin pour obtenir une **valeur actuelle** par chemin.
4. La valeur du titre est la **moyenne** des valeurs des chemins.

Le modèle est calibré pour évaluer correctement les obligations de référence (un **ajustement de dérive**), ce qui le garde sans arbitrage.

L’examen n’exige pas d’implémentation exacte de Monte-Carlo : savoir quand l’utiliser et sa définition suffit. Mes projets passés en contiennent une implémentation réelle, comme le module de contrôle des risques de testbot_tg : https://github.com/SEANPNEX/testbot_tg/blob/main/plugins/stock_monitor/risk.py

Les modèles modernes de structure par terme ci-dessus, comme le modèle CIR, peuvent être simulés par Monte-Carlo.
