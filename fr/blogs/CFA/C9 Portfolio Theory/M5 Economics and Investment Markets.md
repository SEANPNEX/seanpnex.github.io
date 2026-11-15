---
title: "Économie et marchés financiers"
---

# Économie et marchés financiers

## Cadre d’analyse

Le cadre est le modèle d’**actualisation des flux (DCF)** du niveau I : la valeur d’un actif est la valeur actuelle de ses flux attendus. Pour les actions, c’est le modèle d’actualisation des dividendes (DDM).

$$P_0=\sum_{t=1}^{N}\frac{E(CF_t)}{(1+r)^t}$$

* Si un facteur économique influe sur la valeur de marché d’un actif, il doit influer sur l’un ou plusieurs des éléments suivants :
  1. Le calendrier et/ou le montant des flux attendus
  2. Une ou plusieurs composantes du taux d’actualisation
     1. Taux d’intérêt sans risque de défaut
     2. Inflation attendue
     3. Primes de risque
        * Les primes de risque ne dépendent pas seulement de l’ampleur du risque, mais aussi de la perception du risque par l’investisseur

Le taux d’actualisation se construit à partir de ces composantes, traitées chacune ci-dessous :

| Symbole | Composante | Exigée pour |
| --- | --- | --- |
| $\iota$ | Taux réel sans risque de défaut | Tous les actifs |
| $\theta$ | Inflation attendue | Tous les actifs nominaux |
| $\pi$ | Prime d’inflation (incertitude) | Actifs nominaux à plus long terme |
| $\gamma$ | Prime de crédit | Obligations à risque de crédit, actions, immobilier |
| $\kappa$ | Prime des actions sur les obligations à risque de crédit | Actions, immobilier |
| $\phi$ | Prime de liquidité | Actifs illiquides, p. ex. l’immobilier commercial |

## Taux de rendement réel sans risque de défaut

$\iota$ est le **taux de rendement réel sans risque de défaut** : sans risque de défaut et non affecté par l’inflation. On peut l’observer sur le marché à partir des emprunts d’État indexés sur l’inflation, comme les **TIPS** aux États-Unis.

Il vient du choix des investisseurs entre consommer aujourd’hui et investir pour consommer plus tard. Investir, c’est renoncer à consommer aujourd’hui ; les investisseurs comparent donc l’**utilité marginale** de la consommation maintenant et plus tard.

Le **taux de substitution intertemporel** est le rapport des utilités marginales de la consommation :

$$m_t=\frac{\text{MU of consumption at }t}{\text{MU of consumption today}}$$

* L’utilité marginale est décroissante : plus un investisseur consomme, moins une unité supplémentaire vaut.
* Donc $m_t$ **diminue dans les bons états de l’économie** (la consommation est élevée, une unité de plus vaut peu), et augmente dans les mauvais.

Pour une obligation zéro-coupon sans risque, indexée sur l’inflation, de nominal 1, son prix aujourd’hui est le taux de substitution attendu, $P_0=E(m_1)$ ; le taux réel est donc

$$\iota=\frac{1}{E(m_1)}-1$$

Par exemple, si $E(m_1)=0.98$, alors $\iota=1/0.98-1=2.04\%$.

**Valeur actuelle risque-neutre plus un terme de covariance.** Pour un actif risqué au gain incertain $P_1$ :

$$P_0=\frac{E(P_1)}{1+\iota}+\text{Cov}(P_1,\ m_1)$$

* Le premier terme est ce que paierait un investisseur neutre au risque.
* Pour la plupart des actifs risqués, $P_1$ est élevé dans les bonnes périodes, quand $m_1$ est faible ; la **covariance est donc négative** : l’actif se vend moins cher que sa valeur risque-neutre, c’est-à-dire qu’il offre une **prime de risque**. Plus la covariance négative est forte, plus la prime est élevée.
* Quand un actif rapporte bien quand l’économie se dégrade (p. ex. un emprunt d’État sûr en récession), la covariance peut être **positive** : l’actif est une couverture ; les investisseurs paient donc plus que sa valeur risque-neutre et acceptent un rendement plus faible.

Le taux réel sans risque de défaut est positivement lié à la croissance attendue du PIB réel : une croissance attendue plus forte signifie une consommation future plus élevée, une utilité marginale future plus faible, et donc un taux plus élevé.

## Prime d’inflation

$$(1+r_{\text{nominal}})=(1+r_{\text{real}})\,(1+E(\pi))$$

* À court terme, seule l’inflation **attendue** compte : l’incertitude sur l’inflation est faible sur un horizon court.
* À long terme, les investisseurs exigent aussi une prime pour l’**incertitude** de l’inflation, $\sigma(\pi)$.

On modifie ici seulement la notation : $\theta=E(\pi)$ est l’inflation attendue, et le terme d’inflation $\pi$ désigne désormais la **prime de risque d’inflation**, la rémunération de $\sigma(\pi)$.

* **Court terme (bons du Trésor)** : actualiser au taux réel sans risque de défaut plus l’inflation attendue :

$$P_0=\frac{CF}{1+\iota+\theta}$$

* **Obligations sans risque de défaut à plus long terme** : ajouter la prime de risque d’inflation :

$$P_0=\sum_t\frac{CF_t}{(1+\iota+\theta+\pi)^t}$$

**Règle de Taylor.** Le taux court qu’une banque centrale devrait viser pour équilibrer les risques d’inflation et de récession :

$$
\begin{aligned}
R={}&(R_{\text{neutral}}+\theta)+0.5\,(\theta-\theta^*)\\
&+0.5\,(Y-Y^*)
\end{aligned}
$$

* $R$ est le taux directeur de la banque centrale impliqué par la règle de Taylor
* $R_{\text{neutral}}$ est le taux directeur réel neutre
* $\theta$ est le taux d’inflation actuel et $\theta^*$ le taux d’inflation cible
* $Y$ est la croissance du PIB réel effectif et $Y^*$ la croissance cible du PIB réel

**Exemple.** Le taux directeur réel neutre est de 2 %, l’inflation est de 4 % pour une cible de 2 %, et le PIB réel croît de 3 % pour une cible de 2 %. Trouvez le taux directeur impliqué par la règle de Taylor.

<div class="reveal" tabindex="0">

$$
\begin{aligned}
R&=(2\%+4\%)+0.5(4\%-2\%)\\
&\quad+0.5(3\%-2\%)\\
&=6\%+1\%+0.5\%=7.5\%
\end{aligned}
$$

Inflation et croissance sont toutes deux au-dessus de leur cible ; la règle appelle donc une politique restrictive, bien au-dessus du taux nominal neutre de 6 %.

</div>

**Récession et inflation.** Quand l’économie faiblit, la banque centrale baisse son taux directeur pour soutenir la croissance ; quand l’inflation dépasse la cible, elle relève son taux. Les taux courts évoluent donc bien plus avec le cycle économique que les taux longs.

**Taux d’inflation point mort (BEI).** L’écart entre le rendement d’un emprunt d’État nominal et celui d’une obligation indexée sur l’inflation de même maturité :

$$\text{BEI}=\theta+\pi$$

Le BEI n’est donc **pas** une pure prévision d’inflation : il inclut aussi la prime de risque d’inflation. P. ex. avec un rendement nominal à 10 ans de 4,0 % et un rendement de TIPS de 1,5 %, le BEI est de 2,5 % ; si l’inflation attendue est de 2,2 %, la prime de risque d’inflation est de 0,3 %.

**Pente de la courbe des taux.** La courbe reflète la trajectoire attendue des taux directeurs et le cycle économique :

* En récession, la banque centrale baisse les taux courts, et la courbe est en général **pentue** : les taux courts sont bas, et devraient remonter avec la reprise.
* En fin d’expansion, la banque centrale relève ses taux pour lutter contre l’inflation, et la courbe **s’aplatit**. Une politique restrictive peut **inverser** la courbe (taux courts au-dessus des taux longs), et une courbe inversée a souvent précédé une récession.

## Prime de crédit

Le spread de crédit ($\gamma$) est le rendement supplémentaire exigé pour le risque de crédit. Il est traité en Revenu fixe : voir [Spreads de crédit](../C6%20Fixed%20Income/M4%20Credit%20Analysis%20Models.md#credit-spreads).

* **Obligations** : le rendement d’une obligation à risque de crédit est le rendement sans risque de défaut plus la prime de crédit, $\iota+\theta+\pi+\gamma$.
* **Croissance économique** : la prime de crédit augmente quand l’économie est faible, que les défauts sont plus probables et les recouvrements plus faibles, et baisse quand elle est forte.
* **Notation** : les obligations moins bien notées ont des spreads plus élevés, qui montent bien plus dans les retournements ; les spreads de la catégorie investissement sont plus stables.
* **Cycle** : les spreads s’élargissent avant et pendant les récessions et se resserrent en expansion ; les obligations à risque de crédit, comme les actions, rapportent donc peu dans les mauvaises périodes.
* **Risque de crédit souverain** : les États peuvent aussi faire défaut, surtout sur une dette en devise étrangère qu’ils ne peuvent pas imprimer. Les spreads souverains dépendent de la situation budgétaire, de la dette extérieure, de la croissance et du risque politique.

## Prime de risque des actions

La **prime de risque des actions** $\lambda$ est le rendement supplémentaire exigé des actions par rapport aux obligations sans risque de défaut. Par rapport aux obligations à risque de crédit, la prime supplémentaire est $\kappa$ :

$$\lambda=\gamma+\kappa$$

donc le rendement exigé des actions est $\iota+\theta+\pi+\gamma+\kappa$.

**Propriété de couverture de la consommation.** Les actions couvrent mal la consommation : bénéfices et dividendes baissent en récession, précisément quand l’utilité marginale des investisseurs est la plus élevée. Leurs gains covarient négativement avec $m_t$ ; les investisseurs exigent donc une prime importante. Les actions sont aussi la créance résiduelle, derrière les créanciers.

Les **multiples de valorisation** sont positivement liés à la croissance économique (des bénéfices) attendue et négativement liés au rendement exigé.

* **PER prévisionnel** : le cours rapporté aux bénéfices attendus de l’année suivante, $P_0/E_1$.
* **PER historique** : le cours rapporté aux bénéfices de l’année écoulée, $P_0/E_0$.
* **PER justifié** : le PER impliqué par le DDM à croissance constante.

Où $b$ est le taux de rétention (donc $1-b$ est le taux de distribution), $r$ le rendement exigé des fonds propres, $g=b\times\text{ROE}$ le taux de croissance, et $D_1=E_1(1-b)$ :

$$\frac{P_0}{E_1}=\frac{D_1/(r-g)}{E_1}=\frac{1-b}{r-g}$$

$$\frac{P_0}{E_0}=\frac{D_1/(r-g)}{E_0}=\frac{(1-b)(1+g)}{r-g}$$

**P/B justifié.** Avec $D_1=E_1(1-b)$ et $E_1=\text{ROE}\times B_0$ (ROE sur la valeur comptable d’ouverture) :

$$
\begin{aligned}
\frac{P_0}{B_0}&=\frac{D_1/(r-g)}{B_0}=\frac{\text{ROE}(1-b)}{r-g}\\
&=\frac{\text{ROE}-g}{r-g}
\end{aligned}
$$

$P/B>1$ $\iff$ $\text{ROE}>r$ $\iff$ revenu résiduel $>0$ : la société gagne plus que le rendement exigé de ses fonds propres. Si cette condition est remplie, les multiples de valorisation sont positivement liés au taux de croissance des bénéfices, et négativement liés au rendement exigé.

**Exemple.** Une société conserve 40 % de ses bénéfices, a un ROE de 12,5 %, et son rendement exigé est de 9 %. Trouvez ses PER justifiés prévisionnel et historique, et son P/B justifié.

<div class="reveal" tabindex="0">

$g=0.4\times12.5\%=5\%$.

* PER prévisionnel : $\dfrac{0.6}{9\%-5\%}=15$
* PER historique : $15\times1.05=15.75$
* P/B : $\dfrac{12.5\%-5\%}{9\%-5\%}=1.875$, supérieur à 1 car le ROE dépasse $r$.

</div>

**Défensif et cyclique.** Les secteurs défensifs ou non cycliques (p. ex. services aux collectivités, biens de consommation de base) ont des bénéfices relativement stables sur le cycle ; ils rapportent donc mieux dans les mauvaises périodes, et les investisseurs exigent une prime plus faible. Les bénéfices, et les multiples, des secteurs cycliques varient fortement avec l’économie.

### Stratégie d’investissement

**Croissance et value.**

* Actions de croissance
  * Forte croissance des bénéfices
  * PER élevé et faible rendement du dividende
  * Peuvent avoir aujourd’hui des bénéfices positifs faibles (ou nuls), leur valeur venant de la croissance attendue
* Actions value
  * Opèrent sur des marchés plus matures, avec une croissance des bénéfices plus faible
  * PER faible et rendement du dividende élevé

La valeur des actions de croissance se situe plus loin dans l’avenir ; elles sont donc plus sensibles au taux d’actualisation (une « duration » plus longue).

**Petites et grandes capitalisations.**

* Les petites capitalisations tendent à faire moins bien que les grandes dans des conditions économiques difficiles.
  * Les petites sociétés ont en général des activités moins diversifiées.
  * Les petites sociétés ont plus de mal à se financer, surtout en récession, et résistent donc moins bien à une tempête économique.
* Les investisseurs exigent une prime de risque plus élevée pour investir dans les petites capitalisations que dans les grandes, en raison de leur plus forte volatilité.

**Rotation sectorielle.**

* En phase d’expansion économique :
  * Passer aux actions de croissance quand on s’attend à ce qu’elles fassent mieux que les actions value.
  * Passer aux petites capitalisations quand on s’attend à ce qu’elles fassent mieux que les grandes.
  * Passer aux valeurs cycliques quand on s’attend à ce qu’elles fassent mieux que les valeurs contracycliques.

## Prime de liquidité

La **prime de liquidité**, notée $\phi$, rémunère un actif qui ne peut pas être vendu rapidement à un juste prix.

L’**immobilier commercial** en est le principal exemple. Il est :

* **Illiquide** : les biens sont importants, uniques, et lents et coûteux à vendre ; les investisseurs exigent donc $\phi$.
* **Cyclique** : loyers et taux d’occupation baissent en récession, et les locataires peuvent faire défaut ; il exige donc aussi des primes de crédit et d’actions.
* Une **couverture partielle contre l’inflation**, grâce à des loyers qui augmentent avec les prix.

Son rendement exigé comprend donc la plupart des composantes :

$$r_{\text{CRE}}=\iota+\theta+\pi+\gamma+\kappa+\phi$$
