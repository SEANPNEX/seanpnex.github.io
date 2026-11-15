---
title: "Structure par terme et dynamique des taux"
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
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.ts-forward-chart { height: 555px; }
.fx-concept-chart.ts-calendar-chart { height: 602px; }
.fx-concept-chart.ts-relation-chart { height: 483px; }
.fx-concept-chart.ts-convexity-chart { height: 526px; }
.fx-concept-chart.ts-par-chart { height: 572px; }
.fx-concept-chart.ts-z-chart { height: 600px; }
.fx-concept-chart.ts-factor-chart { height: 744px; }
.fx-concept-chart.ts-shape-chart { height: 509px; }
.fx-concept-chart.ts-macro-chart { height: 791px; }
@media (max-width: 587px) {
    .fx-concept-chart { height: 889px; }
    .fx-concept-chart.ts-forward-chart { height: 606px; }
    .fx-concept-chart.ts-calendar-chart { height: 620px; }
    .fx-concept-chart.ts-relation-chart { height: 854px; }
    .fx-concept-chart.ts-convexity-chart { height: 930px; }
    .fx-concept-chart.ts-par-chart { height: 569px; }
    .fx-concept-chart.ts-z-chart { height: 619px; }
    .fx-concept-chart.ts-factor-chart { height: 1377px; }
    .fx-concept-chart.ts-shape-chart { height: 898px; }
    .fx-concept-chart.ts-macro-chart { height: 1400px; }
}
</style>

# Structure par terme et dynamique des taux

## Taux et courbes

### Taux au comptant {#spot-rate}

> [!Note]
>
> Tous les taux sont **annualisés** sauf mention contraire.

* Un **taux au comptant** (taux spot) est le taux, observé **aujourd’hui**, pour un paiement unique à une date future. C’est le rendement d’une obligation **zéro-coupon** de cette échéance ; on l’appelle donc aussi **taux zéro**. Les taux au comptant se tirent en général d’obligations sans risque de défaut (d’État).
* $s_n$ est le taux au comptant de maturité $n$ ans.
* La **courbe au comptant** (courbe zéro) trace les taux $s_n$ en fonction de la maturité $n$.
* Peu de zéro-coupons longs se négocient ; les taux au comptant longs sont donc en général **déduits par bootstrapping** des prix d’obligations à coupons : on résout $s_1$ avec l’obligation à un an, puis on l’utilise pour résoudre $s_2$ avec l’obligation à deux ans, et ainsi de suite.
* La courbe au comptant **change avec le temps** : celle d’aujourd’hui n’est qu’un instantané.

<iframe
  class="fx-concept-chart ts-spot-chart"
  src="/charts/term-structure-curves.html?view=spot"
  title="Courbe au comptant et facteurs d’actualisation"
  loading="lazy"
></iframe>

**Facteur d’actualisation.** $P(j)$ est la valeur aujourd’hui de 1 payé en année $j$ :

$$P(j)=\frac{1}{(1+s_j)^j}$$

C’est au fond une transformation du taux au comptant qui fait de l’actualisation une **multiplication** : $\text{PV}=\text{FV}\times P(j)$. Les facteurs d’actualisation sont inférieurs à 1 et **diminuent** quand la maturité s’allonge. Sur le graphique, $s_5=3.30\%$ donne $P(5)=1/1.033^5=0.8502$.

### Taux à terme

#### Taux à terme et courbe à terme

Un **taux à terme** (taux forward) est le taux, **convenu aujourd’hui**, d’un prêt qui **commence à une date future** et dure une période donnée. Il fixe dès aujourd’hui le taux d’emprunt ou de prêt entre deux dates futures.

* $f(j,k)$ est le taux à terme d’un prêt **commençant en année $j$** et durant **$k$ ans** ; il se termine donc en année $j+k$.
* De même, le **facteur d’actualisation à terme** $F(j,k)$ est la valeur **en année $j$** de 1 payé en année $j+k$ :

$$F(j,k)=\frac{1}{\left(1+f(j,k)\right)^k}$$

Au niveau II, la **courbe à terme** est la **structure par terme des taux à terme** : les taux à terme en fonction de leur durée $k$, tous avec la **même date de départ** $j$. La courbe au comptant est la courbe à terme pour $j=0$.

> [!Note]
>
> Cette définition diffère de celle du niveau I, qui trace une série de taux à terme de **même durée** (p. ex. les taux à un an $f(1,1), f(2,1), f(3,1), \dots$) en fonction de l’année où ils commencent ou finissent.

Chaque date de départ a sa propre courbe à terme :

<iframe
  class="fx-concept-chart ts-forward-chart"
  src="/charts/term-structure-curves.html?view=forward"
  title="Courbes à terme f(j, k) par date de départ j"
  loading="lazy"
></iframe>

En pratique, le marché obligataire les trace en général en **années calendaires** : chaque courbe commence à son année de départ, et chaque point se place à l’année où son prêt se termine.

<iframe
  class="fx-concept-chart ts-calendar-chart"
  src="/charts/term-structure-curves.html?view=calendar"
  title="Courbes à terme en années calendaires"
  loading="lazy"
></iframe>

#### Modèles de taux à terme {#forward-rate-models}

Les taux à terme découlent des taux au comptant (vu au niveau I). Placer pendant deux ans à $s_2$ doit rapporter autant que placer un an à $s_1$ puis réinvestir au taux à terme à un an $f(1,1)$ :

$$(1+s_2)^2=(1+s_1)\left(1+f(1,1)\right)$$

En général :

$$(1+s_{j+k})^{j+k}=(1+s_j)^j\left(1+f(j,k)\right)^k$$

L’égalité est garantie par l’**arbitrage** : si le taux à terme était plus élevé, les investisseurs prêteraient à terme et emprunteraient au comptant (et inversement) jusqu’à ce que les deux chemins rapportent autant.

**Exemple.** Avec $s_1=2.00\%$, $s_2=2.40\%$ et $s_3=2.75\%$ (la courbe des graphiques) :

$$
\begin{aligned}
f(1,1)&=\frac{1.024^2}{1.02}-1\\
&=\frac{1.048576}{1.02}-1=2.80\%
\end{aligned}
$$

$$
\begin{aligned}
f(1,2)&=\left(\frac{1.0275^3}{1.02}\right)^{1/2}-1\\
&=\left(\frac{1.084790}{1.02}\right)^{1/2}-1=3.13\%
\end{aligned}
$$

> [!Note]
>
> **Un raccourci de calcul.** Quand $x\to0$, $(1+x)^a\simeq1+ax$. Si $(1+r_1)^a=(1+r_2)^b(1+r_3)^c$ avec $a=b+c$, alors
>
> $$
> \begin{aligned}
> 1+ar_1&\simeq(1+br_2)(1+cr_3)\\
> &=1+br_2+cr_3+bc\,r_2r_3\\
> &\simeq1+br_2+cr_3
> \end{aligned}
> $$
>
> car le produit de deux petits taux est négligeable. Donc $ar_1\simeq br_2+cr_3$ : le taux le plus long est à peu près la **moyenne pondérée par le temps** des taux plus courts. Dans l’exemple, $f(1,1)\simeq2\times2.40\%-2.00\%=2.80\%$ et $f(1,2)\simeq(3\times2.75\%-2.00\%)/2=3.125\%$, très proches des réponses exactes.

Avec les taux au comptant, on peut déduire tous les taux à terme, donc toutes les courbes à terme. En pratique, les taux au comptant longs sont bien moins précis, car déduits de peu d’obligations, moins liquides ; les taux à terme lointains héritent de cette erreur.

La même relation vaut pour les facteurs d’actualisation, où elle devient une simple multiplication :

$$P(j+k)=P(j)\,F(j,k)$$

$$F(j,k)=\frac{P(j+k)}{P(j)}$$

#### Relation entre les courbes

**Quand la courbe au comptant est croissante, les courbes à terme sont au-dessus. Quand elle est décroissante, elles sont en dessous.**

*Pourquoi.* Appliquez le raccourci au modèle de taux à terme :

$$(j+k)\,s_{j+k}\simeq j\,s_j+k\,f(j,k)$$

$$f(j,k)\simeq s_{j+k}+\frac{j}{k}\left(s_{j+k}-s_j\right)$$

Le taux long $s_{j+k}$ est une moyenne pondérée de $s_j$ et de $f(j,k)$ ; le taux à terme doit donc se trouver **de l’autre côté** par rapport à $s_j$ :

* Courbe au comptant **croissante** : $s_{j+k}>s_j$, donc $f(j,k)>s_{j+k}\ge s_k$. La courbe à terme est au-dessus de la courbe au comptant.
* Courbe au comptant **décroissante** : $s_{j+k}<s_j$, donc $f(j,k)<s_{j+k}\le s_k$. La courbe à terme est en dessous.

Par exemple, $f(2,3)\simeq3.30\%+\tfrac{2}{3}(3.30\%-2.40\%)=3.90\%$, au-dessus de $s_5=3.30\%$ ; la valeur exacte est aussi 3,90 %.

<iframe
  class="fx-concept-chart ts-relation-chart"
  src="/charts/term-structure-curves.html?view=relation"
  title="Courbe à terme au-dessus d’une courbe au comptant croissante, en dessous d’une décroissante"
  loading="lazy"
></iframe>

**Que la courbe à terme elle-même monte ou baisse dépend de la convexité de la courbe au comptant**, pas seulement de sa pente. En composition continue, le taux au comptant est la moyenne des taux à terme instantanés, $t\,s(t)=\int_0^t f(u)\,du$. En dérivant :

$$f(t)=s(t)+t\,s'(t)$$

$$f'(t)=2\,s'(t)+t\,s''(t)$$

* $f-s=t\,s'$ : le taux à terme est au-dessus de la courbe au comptant exactement quand celle-ci monte, comme ci-dessus.
* Courbe au comptant **linéaire** ($s''=0$) : $f'=2s'$, la courbe à terme penche dans le même sens, deux fois plus fortement.
* Courbe au comptant croissante **concave** ($s''<0$) : la courbe à terme monte d’abord, puis **atteint un sommet et redescend** là où $t\,s''(t)=-2\,s'(t)$, tout en restant au-dessus de la courbe au comptant.
* Courbe au comptant croissante **convexe** ($s''>0$) : la courbe à terme monte encore plus vite.

La version discrète repose sur la même idée : le taux à terme à un an est $f(n,1)\simeq s_{n+1}+n\,(s_{n+1}-s_n)$ ; il baisse donc dès que les hausses de la courbe au comptant rétrécissent assez vite.

<iframe
  class="fx-concept-chart ts-convexity-chart"
  src="/charts/term-structure-curves.html?view=convexity"
  title="Convexité de la courbe au comptant et forme de la courbe à terme"
  loading="lazy"
></iframe>

**Formes de la courbe des taux.** Sur les marchés développés, les courbes sont en général **croissantes et concaves** : les rendements montent avec la maturité, mais de moins en moins (un rendement marginal décroissant). Une explication économique sommaire (détaillée plus loin dans le domaine obligataire) :

* Les rendements nominaux incluent une prime pour l’**inflation attendue**, associée à une croissance économique relativement forte.
* Les investisseurs exigent une **prime de risque** pour détenir des obligations plus longues, ce qui accentue la pente positive.

Autres formes :

* Une courbe **inversée** (décroissante) est rare. Elle peut refléter des anticipations de **baisse future de l’inflation** et des taux directeurs, par exemple avant une récession. Les causes réelles sont plus complexes et souvent liées aux politiques publiques ; voir l’écart américain 10 ans moins 3 mois sur [FRED (T10Y3M)](https://fred.stlouisfed.org/series/T10Y3M).
* Une courbe **plate** apparaît en général comme une brève **transition** entre une courbe croissante et une courbe inversée.
* Une courbe **en bosse**, où les maturités intermédiaires rapportent le plus, est rare.

### Taux au pair {#par-rate}

Le **taux au pair** de maturité $n$ est le **taux de coupon** qui fait **coter au pair** une obligation à $n$ ans quand ses flux sont actualisés aux taux au comptant. En notant $\text{par}_n$ ce taux de coupon, avec un nominal de 1 :

$$\frac{\text{par}_n}{1+s_1}+\frac{\text{par}_n}{(1+s_2)^2}+\cdots+\frac{1+\text{par}_n}{(1+s_n)^n}=1$$

En facteurs d’actualisation, $\text{par}_n\sum_{i=1}^{n}P(i)+P(n)=1$, donc

$$\text{par}_n=\frac{1-P(n)}{\sum_{i=1}^{n}P(i)}$$

Quand une obligation cote au pair, son **YTM = taux de coupon = taux au pair**.

La **courbe au pair** trace les taux au pair en fonction de la maturité $n$. Le rendement d’une obligation au pair est une moyenne des taux au comptant jusqu’à son échéance ; quand la courbe au comptant **monte**, la courbe au pair est donc légèrement **en dessous** (et au-dessus quand elle baisse).

<iframe
  class="fx-concept-chart ts-par-chart"
  src="/charts/term-structure-curves.html?view=par"
  title="Courbe au pair et courbe au comptant"
  loading="lazy"
></iframe>

**Exemple.** Avec $s_1=2.00\%$ et $s_2=2.40\%$ : $P(1)=0.98039$ et $P(2)=0.95367$, donc

$$\text{par}_2=\frac{1-0.95367}{0.98039+0.95367}=2.395\%$$

**Bootstrapping.** On obtient les taux au comptant à partir de la courbe au pair par bootstrapping (voir [Taux au comptant](#spot-rate)), une maturité à la fois :

* $\text{par}_1=s_1$ : une obligation au pair à un an n’a qu’un seul flux.
* Chaque taux au comptant suivant se déduit de $\text{par}_n$ et des taux déjà trouvés. Pour $n=2$ :

$$\frac{0.02395}{1.02}+\frac{1.02395}{(1+s_2)^2}=1$$

ce qui donne $s_2=2.40\%$.

### YTM

Le **rendement actuariel (YTM)** est le taux d’actualisation unique qui égalise la valeur actuelle des flux d’une obligation à son prix :

$$P=\sum_{t=1}^{N}\frac{CF_t}{(1+y)^t}$$

* C’est le taux d’actualisation des calculs obligataires ordinaires.
* On peut le voir comme une sorte de **moyenne** des taux au comptant, pondérée par les flux de l’obligation.
* Si la courbe au comptant est **plate**, le YTM est égal au taux au comptant.

Par exemple, une obligation d’État à 3 ans et coupon annuel de 5 %, actualisée à $s_1=2.00\%$, $s_2=2.40\%$ et $s_3=2.75\%$, vaut 106,46. Son YTM est de **2,73 %** : entre $s_1$ et $s_3$, et proche de $s_3$, car l’essentiel des flux arrive en année 3.

**Le YTM n’est le rendement attendu que sous trois hypothèses :**

* Tous les coupons et le principal sont payés **intégralement et à temps**.
* L’obligation est **détenue jusqu’à l’échéance**.
* Tous les flux sont **réinvestis au YTM**.

Le **rendement attendu** est le rendement ex ante qu’un investisseur espère obtenir ; le **rendement réalisé** est celui effectivement obtenu. Le YTM est souvent une **mauvaise estimation** de l’un comme de l’autre, car en réalité :

* **Les taux sont volatils**, si bien que les taux de réinvestissement et les prix de vente changent.
* Quand la courbe est **très pentue**, les coupons ne peuvent pas tous être réinvestis au YTM.
* Il existe un **risque de défaut**.
* L’obligation peut comporter des **options incorporées**, qui modifient ses flux.

### Taux de swap

> [!Note]
>
> Les swaps sont surtout traités en Produits dérivés : voir [Swap de taux d’intérêt](../C7%20Derivative/M1%20Futures.md#interest-rate-swap), y compris l’évaluation du taux de swap et un exemple chiffré.

Le **taux de swap** est le taux de la **jambe fixe** d’un swap de taux d’intérêt. Dans un **swap vanille**, une partie paie le taux de swap fixe et l’autre un taux de référence **variable** (MRR, comme le SOFR ; autrefois le LIBOR), sur le même nominal.

**Évaluation.** À l’origine, le swap vaut zéro : $\text{PV}(\text{fixed leg})=\text{PV}(\text{floating leg})$. Ajoutez un échange fictif du nominal à la fin (il s’annule) : les deux jambes deviennent une **obligation à taux fixe** et une **obligation à taux variable**, et $V_{\text{swap}}=V_{\text{fixed}}-V_{\text{float}}=0$.

* Le coupon d’une obligation à taux variable se réajuste au taux du marché, celui-là même qui sert à l’actualiser ; elle cote donc **au pair** à chaque date de réajustement : $V_{\text{float}}=\text{par}$.
* Donc $V_{\text{fixed}}=\text{par}$ aussi. Le taux de swap est le coupon qui fait coter au pair une obligation à taux fixe : le **taux au pair** de la courbe des swaps.

$$\text{Swap rate}_N=\frac{1-P(N)}{\sum_{i=1}^{N}P(i)}$$

où les facteurs d’actualisation proviennent de la courbe MRR (swap).

La courbe des taux de swap est la **courbe des swaps**. C’est simplement l’application de la [courbe au pair](#par-rate) aux swaps ; il n’y a pas de différence de fond.

**Pourquoi les investisseurs préfèrent souvent la courbe des swaps à la courbe au comptant d’État comme référence :**

* Le marché des swaps offre **plus de maturités**.
* Il est **très liquide**, contrairement à beaucoup de marchés obligataires, et les swaps sont l’un des moyens les plus efficaces de couvrir le risque de taux.
* Les taux de swap reflètent le **risque de crédit des banques commerciales**, principales utilisatrices des swaps, plutôt que celui de l’État ; ils sont donc plus proches des coûts d’emprunt du secteur privé.
* Le marché des swaps **n’est réglementé par aucun État** (les swaps se négocient de gré à gré, alors que chaque État façonne son marché obligataire) ; les taux de swap sont donc **plus comparables d’un pays à l’autre**.

## Spreads {#spread}

> [!Note]
>
> Moins important que les parties précédentes.

Un écart de rendement est la différence entre le rendement d’une obligation et un rendement de référence : $\text{Spread}=y_A-y_B$. Les principaux types :

| Spread | Définition |
| --- | --- |
| **G-spread** (nominal) | Rendement de l’obligation − rendement de l’obligation d’État de même maturité |
| **I-spread** (nominal) | Rendement de l’obligation − taux de swap de même maturité |
| **Z-spread** | Écart constant au-dessus de la courbe **au comptant** d’État qui explique le prix de l’obligation |
| **OAS** (spread ajusté des options) | Z-spread ajusté des options incorporées (vu plus loin) |

**Spread de swap** (calcul demandé) :

$$\text{Swap spread}_N=\text{Swap rate}_N-y_{\text{gov},N}$$

où $y_{\text{gov},N}$ est le rendement de l’obligation d’État **de référence la plus récente (on-the-run)** de même maturité $N$.

Il reflète surtout le **risque de crédit** supplémentaire des banques derrière les taux de swap par rapport à l’État, ainsi que les écarts de **liquidité** entre les deux marchés.

**I-spread** :

$$\text{I-spread}_N=y_{\text{bond},N}-\text{Swap rate}_N$$

L’I-spread reflète le **risque de crédit et de liquidité** de l’obligation par rapport aux swaps : les swaps portent un risque de crédit bancaire et sont plus liquides que la plupart des obligations d’entreprise. « I » signifie **interpolé**, car le taux de swap de la maturité exacte de l’obligation est souvent interpolé entre maturités cotées.

Les spreads s’additionnent : $\text{G-spread}=\text{Swap spread}+\text{I-spread}$, c’est-à-dire État → swap → entreprise.

**Exemple (I-spread).** Une obligation d’entreprise à 6 ans rapporte 4,80 %. Les taux de swap sont de 3,60 % à 5 ans et 3,90 % à 7 ans ; les obligations d’État rapportent 3,20 % à 5 ans et 3,40 % à 7 ans.

* Taux de swap à 6 ans interpolé $=3.60\%+\tfrac{6-5}{7-5}(3.90\%-3.60\%)=3.75\%$
* I-spread $=4.80\%-3.75\%=1.05\%$, soit **105 pb**
* Rendement d’État à 6 ans interpolé $=3.30\%$ ; le G-spread est donc de 150 pb et le spread de swap de $3.75\%-3.30\%=45$ pb : $45+105=150$

**Spread TED** $=$ MRR (LIBOR) à 3 mois $-$ taux des bons du Trésor à 3 mois.

* Il reflète le **risque de crédit dans l’économie** : une hausse du spread TED signale que les prêteurs (les banques) jugent le risque de défaut en hausse.
* On peut le voir comme une mesure du **risque de contrepartie** entre banques.
* Comme il compare l’emprunt bancaire à l’emprunt d’État, c’est un indicateur très utilisé du **risque du système bancaire**.

**Spread MRR–OIS** (LIBOR–OIS) $=$ MRR $-$ taux OIS.

Le **taux OIS** est le taux fixe d’un **swap indexé sur le taux au jour le jour**, dont la jambe variable est la **moyenne géométrique** d’un taux au jour le jour sur chaque jour de la période de paiement :

$$1+r_{\text{float}}\cdot\frac{D}{360}=\prod_{i=1}^{D}\left(1+r_i\cdot\frac{1}{360}\right)$$

Le taux au jour le jour ne porte presque aucun risque de crédit ; le spread mesure donc le **risque de crédit et de liquidité** des prêts bancaires sur la durée. Il s’est fortement élargi lors de la crise de 2008.

> [!Note]
>
> Le LIBOR a été progressivement abandonné (2021–2023) et remplacé par des taux comme le SOFR. Les spreads du programme fonctionnent avec n’importe quel MRR.

**Z-spread.** Le **spread de volatilité nulle** est l’écart constant $Z$ qui, ajouté à **chaque** taux au comptant d’État, actualise les flux d’une obligation risquée à son prix :

$$P=\sum_{t=1}^{N}\frac{CF_t}{(1+s_t+Z)^t}$$

Le déplacement **parallèle** de la courbe au comptant est une hypothèse : en réalité, les spreads de crédit varient en général selon la maturité.

<iframe
  class="fx-concept-chart ts-z-chart"
  src="/charts/term-structure-curves.html?view=zspread"
  title="Le Z-spread comme déplacement parallèle de la courbe au comptant"
  loading="lazy"
></iframe>

**Exemple.** Une obligation d’entreprise à 3 ans et coupon annuel de 5 % cote 102,14, avec des taux au comptant de 2,00 %, 2,40 % et 2,75 %. Essayons $Z=1.50\%$ :

$$
\begin{aligned}
&\frac{5}{1.035}+\frac{5}{1.039^2}+\frac{105}{1.0425^3}\\
&=4.831+4.632+92.675=102.14
\end{aligned}
$$

Le Z-spread est donc de **150 pb**. Si l’obligation comporte une option incorporée, utilisez plutôt l’**OAS**, vu plus loin.

## Théories traditionnelles de la structure par terme

> [!Important]
>
> Cette partie est importante.

Ces théories expliquent les **facteurs économiques** qui déterminent la **forme** de la courbe des taux. Notons $E[s_k(j)]$ l’anticipation actuelle du taux au comptant à $k$ ans en année $j$.

### Théorie des anticipations pures {#pure-expectations-theory}

**Le taux à terme est un prédicteur sans biais du taux au comptant futur** :

$$f(j,k)=E[s_k(j)]$$

Par exemple, $f(1,1)=E[s_1(1)]$ : le taux à terme à un an commençant dans un an est égal au taux au comptant à un an attendu dans un an.

La forme de la courbe ne montre donc que les taux futurs attendus :

* Courbe au comptant **croissante** : les taux courts devraient **monter**
* **Plate** : ils devraient **rester stables**
* **Décroissante** : ils devraient **baisser**

La théorie suppose des investisseurs **neutres au risque**. En réalité, ils sont averses au risque. Une interprétation équivalente : les obligations de toutes maturités sont des **substituts parfaits** ; toute stratégie sur le même horizon (une obligation à 2 ans, deux obligations à 1 an successives, ou une obligation à 10 ans revendue après 2 ans) a le même rendement attendu.

### Théorie des anticipations locales

Cette théorie assouplit l’hypothèse de neutralité au risque : elle ne l’exige que sur de **courtes périodes de détention**. Sur une courte période, toute obligation sans risque de défaut, quelle que soit sa maturité, devrait rapporter le **taux court sans risque**. Sur des périodes plus longues, des primes de risque sont admises. Les autres conclusions sont celles de la théorie des anticipations pures.

> [!Note]
>
> En pratique, la théorie ne tient pas non plus : sur de courtes périodes, les obligations longues tendent à rapporter plus que les courtes, ce qui suggère une prime pour les détenir.

### Théorie de la préférence pour la liquidité

Les investisseurs exigent une **prime de liquidité** pour compenser le risque supplémentaire des obligations plus longues. La théorie ajoute cette prime aux anticipations pures :

$$f(j,k)=E[s_k(j)]+\text{LP}(j,k),\qquad\text{LP}>0$$

La prime de liquidité est positive et **croît avec la maturité**. Les conclusions sont celles des anticipations pures, ajustées de la prime :

* Courbe **croissante** : **incertain**. Les taux peuvent devoir monter, rester stables, voire baisser légèrement si la prime est assez grande.
* Courbe **plate** : les taux devraient **baisser** légèrement, car la prime positive doit être compensée par un taux attendu plus bas.
* Courbe **décroissante** : les taux devraient **baisser** nettement.

### Théorie de la segmentation des marchés {#segmented-market-theory}

Les rendements de chaque segment de maturité sont fixés par **l’offre et la demande** de fonds dans ce segment, **indépendamment** des rendements des autres segments.

* Elle est cohérente avec un monde de **contraintes de gestion actif-passif** (p. ex. réglementation, ou politiques d’investissement différentes) qui lient les investisseurs à certaines maturités.
* Les rendements ne reflètent **pas** les taux au comptant attendus ni des primes de liquidité.

### Théorie de l’habitat préféré

Investisseurs et emprunteurs **préfèrent** certaines maturités (leur habitat), mais **s’en écartent** si la prime est assez élevée.

* La prime **n’est pas directement liée à la maturité** : elle dépend de l’offre et de la demande de chaque segment ; la théorie peut donc expliquer toute forme de courbe, y compris en bosse.
* Les investisseurs acceptent un risque supplémentaire pour un rendement supplémentaire.

> [!Note]
>
> La différence clé avec la segmentation des marchés : là, les marchés **ne peuvent pas** s’influencer ; ici, une prime assez élevée attire les investisseurs d’un segment à l’autre.

| Théorie | Taux à terme | Une courbe croissante signifie |
| --- | --- | --- |
| Anticipations pures | $=E[\text{future spot}]$ | Hausse attendue des taux |
| Anticipations locales | Idem, sur des horizons courts | Hausse attendue des taux |
| Préférence pour la liquidité | $=E[\text{future spot}]+\text{LP}$, LP croissante avec la maturité | Incertain |
| Segmentation des marchés | Sans lien avec les anticipations | Offre et demande de chaque segment |
| Habitat préféré | $=E[\text{future spot}]+$ prime, sans lien avec la maturité | Dépend de l’offre et de la demande |

## Modèles factoriels de la courbe des taux

### Mouvements de la courbe

Les mouvements de la courbe des taux se décomposent en trois facteurs :

* **Niveau**, un déplacement parallèle : $\Delta X_L$
* **Pente**, une variation de l’inclinaison : $\Delta X_S$
* **Courbure**, une variation de la courbure : $\Delta X_C$

Chaque facteur a une **forme** fixe selon les maturités, et un mouvement la met à l’échelle. La variation du rendement à la maturité $t$ est environ

$$\Delta y(t)\approx\Delta X_L+\Delta X_S\,\sigma(t)+\Delta X_C\,\kappa(t)$$

où $\sigma(t)$ croît avec la maturité (le court baisse, le long monte) et $\kappa(t)$ est en U (les extrémités montent, le milieu baisse).

<iframe
  class="fx-concept-chart ts-factor-chart"
  src="/charts/term-structure-curves.html?view=factors"
  title="Mouvement de la courbe décomposé en niveau, pente et courbure"
  loading="lazy"
></iframe>

La décomposition est utile car le premier facteur, ou les deux premiers, expliquent en général l’essentiel d’un mouvement : le **niveau** explique la plus grande part de la variation des rendements (le $R^2$ le plus élevé), la pente et la courbure l’essentiel du reste. Pour un déplacement **parallèle**, la duration effective suffit, ce qui est bien plus simple que les durations par taux clés.

#### Rappel : duration et convexité (niveau I) {#review-duration-and-convexity-level-i}

* La **duration de Macaulay** est le temps moyen jusqu’aux flux de l’obligation, pondéré par leurs valeurs actuelles :

$$\text{MacDur}=\sum_{t=1}^{N}t\cdot\frac{PV(CF_t)}{P}$$

* La **duration modifiée** la convertit en sensibilité du prix au rendement propre de l’obligation, $r$ étant le rendement par période :

$$\text{ModDur}=\frac{\text{MacDur}}{1+r}$$

$$\frac{\Delta P}{P}\approx-\text{ModDur}\cdot\Delta y$$

* La **duration modifiée approchée**, à partir des prix aux rendements $\pm\Delta y$ :

$$\text{ApproxModDur}=\frac{PV_{-}-PV_{+}}{2\cdot\Delta y\cdot PV_0}$$

* La **duration effective** utilise la même formule, mais déplace la **courbe de référence** de $\pm\Delta\text{Curve}$ et réévalue l’obligation avec un modèle. C’est la mesure des obligations à **options incorporées**, dont les flux changent avec les taux :

$$\text{EffDur}=\frac{PV_{-}-PV_{+}}{2\cdot\Delta\text{Curve}\cdot PV_0}$$

* La **duration monétaire** $=\text{ModDur}\times P$, la variation de valeur en unités monétaires ; la **valeur d’un point de base** est $\text{PVBP}=\frac{PV_{-}-PV_{+}}{2}$ pour un déplacement de 1 pb.
* La **convexité** capte la courbure de la relation prix–rendement :

$$\text{ApproxCon}=\frac{PV_{-}+PV_{+}-2\,PV_0}{(\Delta y)^2\cdot PV_0}$$

* Ensemble :

$$
\begin{aligned}
\frac{\Delta P}{P}\approx&-\text{ModDur}\cdot\Delta y\\
&+\tfrac{1}{2}\,\text{Convexity}\cdot(\Delta y)^2
\end{aligned}
$$

**Duration modifiée et convexité exactes.** Ce sont toutes deux des taux de variation du prix, rapportés au prix :

$$\text{ModDur}=-\frac{1}{P}\cdot\frac{dP}{dy}$$

$$\text{Convexity}=\frac{1}{P}\cdot\frac{d^2P}{dy^2}$$

Les formules approchées ci-dessus sont des estimations numériques (différences centrées) de ces dérivées : $\frac{PV_{-}-PV_{+}}{2\Delta y}$ estime $-\frac{dP}{dy}$, et $\frac{PV_{-}+PV_{+}-2PV_0}{(\Delta y)^2}$ estime $\frac{d^2P}{dy^2}$.

Pour une **obligation zéro-coupon**, elles ont une forme fermée, car il n’y a qu’un flux. Avec un nominal $F$, une maturité $n$ et un rendement $y$ par période :

$$P=F(1+y)^{-n}$$

Chaque dérivée fait descendre l’exposant et ajoute une puissance de $(1+y)$ au dénominateur :

$$\frac{dP}{dy}=-nF(1+y)^{-(n+1)}$$

$$\frac{d^2P}{dy^2}=n(n+1)F(1+y)^{-(n+2)}$$

Diviser par le prix supprime le $(1+y)^{-n}$ qu’il contient, ne laissant que les puissances ajoutées par la dérivation, une pour la duration et deux pour la convexité :

$$\text{ModDur}=\frac{nF(1+y)^{-(n+1)}}{F(1+y)^{-n}}=\frac{n}{1+y}$$

$$\text{Convexity}=\frac{n(n+1)F(1+y)^{-(n+2)}}{F(1+y)^{-n}}=\frac{n(n+1)}{(1+y)^2}$$

Le dénominateur est donc $(1+y)^2$ quelle que soit la maturité : celle-ci n’apparaît que dans $n(n+1)$. La duration de Macaulay d’un zéro-coupon est sa maturité $n$, ce qui est cohérent avec $\text{ModDur}=\text{MacDur}/(1+y)$.

Pour un zéro-coupon à 5 ans à 4 % (prix 82,193 pour 100), les formules approchées convergent vers les valeurs exactes, $5/1.04=4.808$ et $30/1.04^2=27.737$, quand $\Delta y$ diminue :

| $\Delta y$ | $PV_{-}$ | $PV_{+}$ | ModDur | Convexity |
| --- | ---: | ---: | ---: | ---: |
| 1% | 86.261 | 78.353 | 4.811 | 27.749 |
| 0.1% | 82.589 | 81.799 | 4.808 | 27.737 |
| 0.01% | 82.232 | 82.153 | 4.808 | 27.737 |
| **Exact** | | | **4.808** | **27.737** |

> [!Note]
>
> À l’examen, utilisez les formules approchées avec $PV_{-}$ et $PV_{+}$. La forme fermée n’est qu’un raccourci pour les zéro-coupons ; une obligation à coupons a plusieurs flux, et sa convexité exacte est donc une somme sur ceux-ci, $\frac{1}{P}\sum_t \frac{t(t+1)\,CF_t}{(1+y)^{t+2}}$.

**Exemple.** Un zéro-coupon à 5 ans rapporte 4 %. D’après les formes fermées, sa duration de Macaulay est 5, $\text{ModDur}=5/1.04=4.808$ et sa convexité $30/1.04^2=27.74$. Si le rendement augmente de 1 % :

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-4.808\times0.01+\tfrac{1}{2}\times27.74\times0.01^2\\
&=-4.669\%
\end{aligned}
$$

La variation exacte est $(1.04/1.05)^5-1=-4.672\%$.

> [!Note]
>
> Toutes les conclusions du niveau I, y compris la formule de $\Delta P/P$, supposent un déplacement **parallèle** d’une courbe plate. Au niveau II, on étudie aussi les mouvements **non parallèles**.

La **duration par taux clé** mesure la sensibilité d’une obligation à une petite variation de la courbe de référence à **une maturité précise** (un taux clé), les autres taux clés restant constants.

### Duration par taux clé {#key-rate-duration}

> [!Important]
>
> La partie la plus importante de M1.

$$\text{KeyRateDur}_k=-\frac{1}{PV}\cdot\frac{\Delta PV}{\Delta r_k}$$

où $\Delta r_k$ est un déplacement du seul $k$-ième taux clé de la courbe de référence.

**La duration par taux clé est une duration de courbe, pas une duration de rendement.**

* Une **duration de rendement** (Macaulay, modifiée, modifiée approchée) mesure la sensibilité du prix au **YTM propre** de l’obligation. Elle traite l’obligation comme si tous ses flux étaient actualisés à ce seul rendement ; elle ne peut donc pas dire ce qui se passe quand différentes parties de la courbe bougent différemment.
* Une **duration de courbe** (duration effective, duration par taux clé) mesure la sensibilité à un déplacement de la **courbe de référence**, en réévaluant chaque flux à son propre taux. La duration effective déplace toute la courbe ; une duration par taux clé en déplace un point.
* Pour une obligation sans option et une courbe plate, les deux donnent presque le même chiffre. Elles diffèrent quand la courbe n’est pas plate, quand elle bouge de façon non parallèle, ou quand l’obligation comporte des options incorporées.

**Exemple.** Un portefeuille de deux zéro-coupons, valant 100 au total : l’obligation 1 vaut 40 et échoit dans 3 ans ; l’obligation 2 vaut 60 et échoit dans 5 ans. Par simplicité, prenez la duration de chaque obligation égale à sa maturité (la duration modifiée serait un peu plus faible, $n/(1+y)$).

* **Taux à 3 ans en hausse de 1 %**, les autres inchangés : seule l’obligation 1 varie, de $-3\%\times40=-1.2$, soit $-1.2\%$ du portefeuille. $\text{KRD}_3=1.2$.
* **Taux à 5 ans en hausse de 1 %** : seule l’obligation 2 varie, de $-5\%\times60=-3.0$. $\text{KRD}_5=3.0$.

En général, pour un portefeuille de zéro-coupons, $\text{KRD}_i=w_i D_i$, où $w_i$ est le poids de l’obligation $i$ et $D_i$ sa duration modifiée.

* **Toute la courbe en hausse de 1 %** (déplacement parallèle) : $\Delta P/P=-(1.2+3.0)\times1\%=-4.2\%$. La duration effective est $\sum w_iD_i=4.2$.

C’est le résultat clé : la **somme des durations par taux clé est égale à la duration effective**,

$$\text{EffDur}=\sum_k\text{KRD}_k$$

car un déplacement parallèle, c’est tous les taux clés qui bougent ensemble. Cela vaut pour tout portefeuille, pas seulement les zéro-coupons.

* **La courbe se pentifie** : le taux à 3 ans baisse de 1 % et celui à 5 ans monte de 1 %. En général,

$$\frac{\Delta P}{P}\approx-\sum_k\text{KRD}_k\cdot\Delta r_k$$

donc ici $\Delta P/P\approx-\left[1.2\times(-1\%)+3.0\times(+1\%)\right]=-1.8\%$ : le portefeuille perd 1,8, alors que sa duration effective ne dit rien d’une torsion.

Tout portefeuille se décompose ainsi : chaque flux est un zéro-coupon à sa propre date ; les durations par taux clé d’une obligation à coupons proviennent donc de ses flux proches de chaque taux clé.

### Gérer la courbe des taux

> [!Note]
>
> Moins important que les KRD, mais utile en pratique.

Au niveau I, pour un déplacement parallèle : $\dfrac{\Delta P}{P}\approx-D\cdot\Delta y+\dfrac{1}{2}C\cdot(\Delta y)^2$.

Avec la décomposition en trois facteurs ci-dessus, le niveau II l’étend à :

$$\frac{\Delta P}{P}\approx-D_L\,\Delta X_L-D_S\,\Delta X_S-D_C\,\Delta X_C$$

Le premier terme est la partie parallèle du niveau I ; $D_S$ et $D_C$ sont les sensibilités à la pente et à la courbure. Toutes trois sont liées aux KRD, sans être égales à l’une d’elles.

**D’où viennent $D_S$ et $D_C$ (mathématiquement).** Soient $\ell_k$, $\sigma_k$ et $\kappa_k$ la variation du taux clé $k$ par unité de niveau, de pente et de courbure. Un mouvement factoriel modifie chaque taux clé de

$$\Delta r_k=\ell_k\,\Delta X_L+\sigma_k\,\Delta X_S+\kappa_k\,\Delta X_C$$

En substituant dans la formule des taux clés et en regroupant par facteur :

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-\sum_k\text{KRD}_k\,\Delta r_k\\
&=-\Big(\sum_k\text{KRD}_k\,\ell_k\Big)\Delta X_L\\
&\quad-\Big(\sum_k\text{KRD}_k\,\sigma_k\Big)\Delta X_S\\
&\quad-\Big(\sum_k\text{KRD}_k\,\kappa_k\Big)\Delta X_C
\end{aligned}
$$

Chaque duration factorielle est donc la **somme des KRD pondérées par la forme de ce facteur** :

$$
\begin{aligned}
D_L&=\sum_k\text{KRD}_k\,\ell_k\\
D_S&=\sum_k\text{KRD}_k\,\sigma_k\\
D_C&=\sum_k\text{KRD}_k\,\kappa_k
\end{aligned}
$$

Avec $\ell_k=1$ à chaque taux clé, $D_L$ est simplement la somme des KRD, la duration effective. Ce ne sont que des mathématiques : ni l’examen ni la pratique ne demandent de les dériver. En pratique, les formes des facteurs sont estimées statistiquement à partir des mouvements passés de la courbe, et $D_S$ et $D_C$ sont modélisées comme des combinaisons linéaires de KRD exactement de cette façon.

**Exemple.** Un portefeuille détient des zéro-coupons à 1, 5 et 10 ans, 100 par position. Avec duration modifiée ≈ duration de Macaulay = maturité, les poids sont de $1/3$ chacun, donc

$$\text{KRD}_1=\tfrac{1}{3},\quad\text{KRD}_5=\tfrac{5}{3},\quad\text{KRD}_{10}=\tfrac{10}{3}$$

Les formes des facteurs aux trois taux clés :

| Année | 1 | 5 | 10 |
| --- | --- | --- | --- |
| Parallèle ($\ell_k$) | +1 unité | +1 unité | +1 unité |
| Pente ($\sigma_k$) | −1 unité | 0 | +1 unité |
| Courbure ($\kappa_k$) | +1 unité | 0 | +1 unité |

<iframe
  class="fx-concept-chart ts-shape-chart"
  src="/charts/term-structure-curves.html?view=shapes"
  title="Formes des facteurs aux taux clés et mouvement de courbe de l’exemple"
  loading="lazy"
></iframe>

On obtient $D_L$, $D_S$ et $D_C$ en pondérant les KRD par chaque ligne :

$$D_L=\frac{1}{3}+\frac{5}{3}+\frac{10}{3}=\frac{16}{3}=5.33$$

$$D_S=-\frac{1}{3}+0+\frac{10}{3}=\frac{9}{3}=3.00$$

$$D_C=\frac{1}{3}+0+\frac{10}{3}=\frac{11}{3}=3.67$$

Supposons que la courbe bouge de $\Delta X_L=+0.50\%$, $\Delta X_S=+0.20\%$ et $\Delta X_C=-0.10\%$ :

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-5.33\times0.50\%-3.00\times0.20\%\\
&\quad-3.67\times(-0.10\%)\\
&=-2.90\%
\end{aligned}
$$

Vérification directe avec les taux clés. Le mouvement les modifie de $\Delta r_1=0.50-0.20-0.10=+0.20\%$, $\Delta r_5=+0.50\%$ et $\Delta r_{10}=0.50+0.20-0.10=+0.60\%$, donc

$$
\begin{aligned}
\frac{\Delta P}{P}&\approx-\big(\tfrac{1}{3}\times0.20\%+\tfrac{5}{3}\times0.50\%\\
&\qquad+\tfrac{10}{3}\times0.60\%\big)\\
&=-2.90\%
\end{aligned}
$$

### Volatilité des taux

La **structure par terme de la volatilité des taux** trace la volatilité des rendements en fonction de la maturité. Elle est en général **décroissante** : les rendements courts sont plus volatils que les longs.

L’écart de volatilité s’explique ainsi :

* Les taux **courts** réagissent à la **politique monétaire**, qui change souvent.
* Les taux **longs** sont liés à **l’économie réelle et aux anticipations d’inflation de long terme**, qui évoluent plus lentement.

L’incertitude sur les taux se mesure par **l’écart type annualisé de la variation proportionnelle d’un rendement obligataire** sur un intervalle donné. Elle compte surtout pour les obligations à **options incorporées**, dont la valeur dépend directement de la volatilité.

> [!Note]
>
> Si les variations de périodes successives ne sont pas corrélées (l’hypothèse habituelle des modèles), la variance croît proportionnellement au temps ; la volatilité croît donc comme la racine carrée du temps :
>
> $$\sigma_{T}=\sigma_{\text{annual}}\sqrt{T},\qquad\sigma_{\text{month}}=\sigma_{\text{annual}}\sqrt{\tfrac{1}{12}}$$
>
> Par exemple, une volatilité annuelle de 20 % correspond à une volatilité mensuelle de $20\%\times\sqrt{1/12}=5.77\%$.

## Gestion active d’un portefeuille obligataire

### Stratégie par contrats à terme

> [!Note]
>
> Pour les notions de base sur les contrats à terme, voir [Forward](../C7%20Derivative/M1%20Futures.md#forward) et [Contrats à terme sur taux](../C7%20Derivative/M1%20Futures.md#fixed-income-forwards-and-equity-forwards) en Produits dérivés.

Rappelez-vous la [théorie des anticipations pures](#pure-expectations-theory) : le taux à terme est l’estimation du marché du taux au comptant futur, $f(1,1)=E[s_1(1)]$. Un investisseur dont l’avis **diffère** du taux à terme peut en tirer parti avec un contrat à terme.

Prenons un contrat à terme, conclu en $T=0$, pour acheter en $T=1$ un zéro-coupon à un an. Son prix à terme est fixé par le taux à terme :

$$F_0=\frac{100}{1+f(1,1)}$$

En $T=1$, l’obligation vaut $100/(1+s_1')$, où $s_1'$ est le taux au comptant à un an qui prévaut alors :

* $s_1'=f(1,1)$ : l’obligation vaut exactement le prix à terme ; le contrat **ne vaut rien**.
* $s_1'>f(1,1)$ : le prix de l’obligation est **inférieur** au prix à terme ; la position **vendeuse** gagne et l’**acheteuse** perd : $V_{\text{short}}>0$, $V_{\text{long}}<0$.
* $s_1'<f(1,1)$ : le prix de l’obligation est **supérieur** au prix à terme ; l’**acheteur** gagne et le **vendeur** perd : $V_{\text{long}}>0$, $V_{\text{short}}<0$.

Un investisseur qui s’attend à des taux futurs **plus bas** que ceux qu’impliquent les taux à terme achète donc à terme (ou des obligations plus longues), et celui qui les attend **plus hauts** vend à terme.

**Exemple.** Avec $f(1,1)=2.80\%$ (tiré de l’[exemple de taux à terme](#forward-rate-models)), le prix à terme est $F_0=100/1.028=97.275$.

* Si $s_1'=2.00\%$ : l’obligation vaut $100/1.02=98.039$, et l’acheteur gagne $98.039-97.275=0.764$.
* Si $s_1'=3.50\%$ : l’obligation vaut $100/1.035=96.618$, et l’acheteur perd $97.275-96.618=0.657$.

### Chevaucher la courbe des taux {#riding-the-yield-curve}

**Chevaucher la courbe des taux** (« rolling down the yield curve ») consiste à acheter une obligation d’une maturité **plus longue que l’horizon de placement** et à la vendre à l’horizon. Cela fonctionne quand :

* La courbe est **croissante**, et
* On s’attend à ce qu’elle **ne change pas** sur l’horizon.

Avec le temps, l’obligation « glisse » vers une maturité plus courte au **rendement plus faible**, et son prix monte. Acheter une obligation plus longue que l’horizon procure alors un rendement total **supérieur** à une stratégie d’adossement des maturités.

**Exemple.** Une courbe croissante, avec les prix d’obligations à coupon annuel de 3 % (nominal 100) de différentes maturités :

| Maturité (ans) | Rendement | Prix |
| ---: | ---: | ---: |
| 5 | 3.0% | 100.00 |
| 15 | 4.0% | 88.88 |
| 25 | 5.0% | 71.81 |
| 30 | 5.5% | 63.67 |

L’horizon de placement est de 5 ans. On ignore le réinvestissement des coupons :

1. **Adossement des maturités** : acheter l’obligation à 5 ans à 100 et la garder jusqu’à l’échéance.
   * Ni plus-value ni moins-value : l’obligation est remboursée au pair.
   * Seulement un risque de crédit et de réinvestissement.
   * Rendement : coupons de $5\times3=15$ sur 100, soit $15\%$ sur 5 ans, environ **2,8 %** par an.
2. **Chevaucher la courbe** : acheter l’obligation à 30 ans à 63,67 et la vendre après 5 ans. C’est alors une obligation à 25 ans ; si la courbe est inchangée, son rendement a glissé de 5,5 % à 5,0 %.
   * Plus-value $=71.81-63.67=8.14$
   * Rendement : $\dfrac{71.81+15-63.67}{63.67}=36.3\%$ sur 5 ans, environ **6,4 %** par an, plus que le rendement propre de l’obligation à 30 ans (5,5 %), grâce au gain de glissement.

> [!Note]
>
> Le rendement supplémentaire n’est pas gratuit. L’obligation à 30 ans porte bien plus de **risque de taux** : si la courbe monte ou s’aplatit sur l’horizon, le gain de glissement se réduit ou devient une perte. La stratégie parie sur une courbe qui reste croissante et stable.

## Former des vues sur les taux à partir de la macroéconomie

> [!Note]
>
> Le détail de cette partie est traité au niveau III. Au niveau II, connaître les concepts suffit.

**Ce qui fait bouger les rendements.**

* **L’inflation** (et les anticipations d’inflation) explique l’essentiel de la variation des rendements d’État **courts et intermédiaires** ; le reste tient surtout à la **croissance économique** et à la **politique monétaire**.
* **La politique monétaire** fait aussi bouger les rendements **longs** : via la trajectoire attendue des taux courts futurs, et via les achats d’obligations par la banque centrale (assouplissement quantitatif), qui abaissent les rendements longs.

**Mouvements baissiers et haussiers.** Un mouvement **baissier** (bear) signifie que les rendements **montent** (les prix des obligations baissent) ; un mouvement **haussier** (bull) qu’ils **baissent**. **L’aplatissement** signifie que l’écart entre rendements longs et courts se réduit ; la **pentification** qu’il s’élargit.

* **Aplatissement baissier** : les rendements courts montent **plus** que les longs. Typique quand la banque centrale **resserre** sa politique pour refroidir l’économie.
* **Pentification haussière** : les rendements courts baissent **plus** que les longs. Typique **pendant les récessions**, quand la banque centrale baisse les taux courts pour stimuler l’économie.

<iframe
  class="fx-concept-chart ts-macro-chart"
  src="/charts/term-structure-curves.html?view=macro"
  title="Aplatissement baissier, pentification haussière, aplatissement haussier et pentification baissière"
  loading="lazy"
></iframe>

| | Rendements courts | Rendements longs | Cause typique |
| --- | --- | --- | --- |
| **Aplatissement baissier** | Montent plus | Montent moins | Resserrement monétaire |
| **Pentification haussière** | Baissent plus | Baissent moins | Assouplissement monétaire en récession |
| **Aplatissement haussier** | Baissent moins | Baissent plus | Fuite vers la qualité |
| **Pentification baissière** | Montent moins | Montent plus | Déficits budgétaires, craintes d’inflation |

**Politique budgétaire : effets d’offre.** Les rendements tendent à **monter quand les déficits budgétaires augmentent**, car l’État doit émettre davantage d’obligations. C’est en fait un facteur de [segmentation des marchés](#segmented-market-theory) : l’offre accrue d’obligations longues augmente le rendement de ce segment de maturité.

**Demande des investisseurs.**

* La **demande des investisseurs nationaux** est un moteur clé : une demande plus forte (p. ex. des fonds de pension et assureurs) fait monter les prix des obligations et **réduit la prime de risque obligataire**.
* La **demande des investisseurs étrangers** (p. ex. banques centrales et gestionnaires de réserves étrangers) agit de même : la demande extérieure fait monter les prix et **réduit la prime de risque obligataire**.

**Fuite vers la qualité.** Lors des périodes de forte incertitude, les investisseurs se ruent sur les obligations d’État : c’est la **fuite vers la qualité**. Elle s’accompagne souvent d’un **aplatissement haussier** : la courbe s’aplatit, les rendements longs baissant plus que les courts.

Un investisseur qui anticipe un aplatissement haussier peut chercher à en profiter en passant d’un portefeuille **bullet** (concentré sur les maturités intermédiaires) à un portefeuille **barbell** (maturités courtes et longues, de même duration). L’extrémité longue du barbell gagne le plus quand les rendements longs baissent, et sa convexité plus élevée accroît le gain.
