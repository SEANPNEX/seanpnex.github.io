---
title: "Contrats à terme"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 470px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
</style>

# Contrats à terme

Points communs à retenir :

* Un contrat forward ou futures est évalué de sorte que sa valeur en $t_0$ soit $0$ pour les deux parties : aucune ne paie pour y entrer.
* Ensuite, la valeur d’un **forward** évolue avec le sous-jacent et n’est réalisée qu’à l’échéance. Un **futures** est **réévalué chaque jour au prix du marché** : gains et pertes sont réglés en espèces chaque jour, donc sa valeur revient à $0$ après chaque règlement.
* Les deux parties s’additionnent toujours à zéro : ce que gagne l’acheteur, le vendeur le perd.

## Forward {#forward}

* Principe d’absence d’arbitrage : la loi du prix unique. Deux façons de détenir l’actif en $T$ (l’acheter maintenant et le porter, ou convenir aujourd’hui de l’acheter en $T$) doivent coûter la même chose.

### Évaluation du prix {#pricing}

Le prix forward est le prix au comptant porté vers l’avant au taux sans risque :

$$F_0(T)=S_0(1+r_f)^T$$

ou, en capitalisation continue, $F_0(T)=S_0e^{r_f^cT}$, où $S_0$ est le prix au comptant actuel du sous-jacent et $T$ la durée jusqu’à l’échéance en années.

### Modèle d’arbitrage de portage

Si le prix forward s’écarte du prix sans arbitrage, on emprunte de l’argent ou l’actif pour verrouiller un gain sans risque :

* $F_0(T)>S_0(1+r_f)^T$ : **cash-and-carry**. Emprunter $S_0$ à $r_f$ et acheter l’actif en $t_0$, et le vendre à terme. En $T$, livrer l’actif à $F_0(T)$ et rembourser $S_0(1+r_f)^T$, en gardant la différence.
* $F_0(T)<S_0(1+r_f)^T$ : **reverse cash-and-carry**. Emprunter l’actif et le vendre à découvert, placer le produit à $r_f$, et acheter à terme. En $T$, acheter l’actif à $F_0(T)$ pour le rendre, et garder $S_0(1+r_f)^T-F_0(T)$.

### Valorisation

Jeu à somme nulle (fondement des futures) : $V_{l,t}+V_{s,t}=0$

Pour le forward, à une date $t$ entre $0$ et $T$ :

* $V_{l,t}=S_t-\dfrac{F_0(T)}{(1+r_f)^{T-t}}$ : l’actif vaut $S_t$, et l’acheteur doit $F_0(T)$ en $T$. De façon équivalente, $V_{l,t}=\dfrac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}$, puisque $S_t=\dfrac{F_t(T)}{(1+r_f)^{T-t}}$ (voir [l’évaluation du prix](#pricing)).
* $V_{s,t}=\dfrac{F_0(T)}{(1+r_f)^{T-t}}-S_t$

Mettre à jour [l’évaluation du prix](#pricing) avec les avantages et les coûts de détention de l’actif (p. ex. dividendes ou coupons sont des avantages ; le stockage est un coût) :

$$
\begin{aligned}
F_0(T)={}&(S_0-PVB+PVC)\\
&\times(1+r_f)^T
\end{aligned}
$$

De façon équivalente, avec les avantages et les coûts portés jusqu’en $T$ :

$$F_0(T)=S_0(1+r_f)^{T}-FVB+FVC$$

En général, à une date $t$ entre $0$ et $T$ :

$$
\begin{aligned}
V_{l,t}={}&(S_t-PVB+PVC)\\
&-\frac{F_0(T)}{(1+r_f)^{T-t}}
\end{aligned}
$$

$$
\begin{aligned}
V_{s,t}={}&\frac{F_0(T)}{(1+r_f)^{T-t}}\\
&-(S_t-PVB+PVC)
\end{aligned}
$$

Notez que seuls les coûts et avantages entre $t$ et $T$ sont à prendre en compte, actualisés en $t$.

#### Exemple {#example}

Soit un contrat forward sur une action, à 100 jours de l’échéance ; le cours est de $\$45$ et l’action devrait verser des dividendes de $\$0.3$ dans 20 jours et de $\$0.5$ dans 75 jours. Le taux sans risque est de $4\%$. Après 40 jours, le cours est de $\$48$.

<div class="reveal" tabindex="0">


1. Calculer le prix forward sans arbitrage avec la formule mise à jour :
   $$
   F_0(T)=(45-\frac{0.3}{1.04^{\frac{20}{365}}}-\frac{0.5}{1.04^{\frac{75}{365} }})\times1.04^{\frac{100}{365} }=\$44.68.
   $$
   
2. Calculer la valeur pour l’acheteur :
   $$
   S_T-F_0(T)=\$3.11
   $$
   


</div>

## Forwards obligataires et forwards sur actions {#fixed-income-forwards-and-equity-forwards}

### Obligations

#### Évaluation du prix

Pour une obligation, l’avantage est constitué de ses coupons :

$$
\begin{aligned}
F_0(T)={}&(S_0-\text{PVCoupon})\\
&\times(1+r_f)^T
\end{aligned}
$$

$$F_0(T)=S_0\times(1+r_f)^T-\text{FVCoupon}$$

#### Valorisation

$$
\begin{aligned}
V_{l,t}={}&(S_t-\text{PVCoupon})\\
&-\frac{F_0(T)}{(1+r_f)^{T-t}}
\end{aligned}
$$

$$
\begin{aligned}
V_{s,t}={}&\frac{F_0(T)}{(1+r_f)^{T-t}}\\
&-(S_t-\text{PVCoupon})
\end{aligned}
$$

> [!Note]
>
> De même, par la formule d’origine du prix forward, $S_t-\text{PVCoupon}=\dfrac{F_t(T)}{(1+r_f)^{T-t}}$. La valeur peut donc aussi s’écrire à partir de la variation du prix forward : $V_{l,t}=\dfrac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}$.

##### Exemple

Il y a un mois, BM a pris une position vendeuse sur **cinq** contrats forward sur euro-obligations, à 2 mois de l’échéance, d’un notionnel de €100,000 chacun, au prix de $145$. Le contrat forward cote maintenant 148. Le taux sans risque est de $0.1\%$. Calculez la valeur de la position de BM.

* Jugez d’abord : position vendeuse et prix en hausse $\to$ valeur négative

<div class="reveal" tabindex="0">


* $V_{s,t}=\frac{(F_0(T)-F_t(T))}{(1+r_f)^{T-t}}=\frac{145-148}{1.001^{\frac{1}{12} }}=-2.9997$
* $V_{BM}=V_{s,t}\times \frac{100{,}000}{100}\times 5=-14{,}998.5$.


</div>

### Actions

#### Évaluation du prix

Pour une action, l’avantage est constitué de ses dividendes :

* $F_0(T)=(S_0-\text{PVDiv})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+r_f)^T-\text{FVDiv}$.

> [!Note]
>
> Les dividendes sont moins certains que les coupons : ce sont des prévisions, pas des paiements contractuels.

En particulier, pour les **futures sur indice boursier**, on utilise la capitalisation continue dans la formule ci-dessus, avec les dividendes de l’indice comme rendement continu :

$$F_0(T)=S_0\times e^{(r_f^c-\delta^c)T}$$

où $\delta^c$ est le rendement du dividende en capitalisation continue.

> [!TIP]
>
> $r_f^c=\ln(1+r_f)$, donc $e^{r_f^cT}=(1+r_f)^T$.

> [!NOTE]
>
> Quand $r_f^c>\delta^c$, on a $F_0(T)>S_0$ et la courbe des futures est en **contango** ; quand $r_f^c<\delta^c$, $F_0(T)<S_0$ et elle est en **backwardation** (déport).

#### Valorisation

Dans le cas général, à la date $t$, la valorisation est :

* $V_{l,t}=S_te^{-\delta^c(T-t)}-F_0(T)e^{-r_f^c(T-t)}$.
* $V_{s,t}=F_0(T)e^{-r_f^c(T-t)}-S_te^{-\delta^c(T-t)}$. 

$r_f^c$ et $\delta^c$ sont les mêmes taux en capitalisation continue dans toute la formule.

> [!NOTE]
>
> $S_te^{-\delta^c(T-t)}=F_t(T)e^{-r_f^c(T-t)}$

##### Exemple

Soit un contrat futures sur l’indice DJIA à 100 jours. Actuellement, le DJIA est à $21000$ avec un rendement du dividende continu de $2\%$ ; le taux sans risque en capitalisation continue est de $3.2\%$. Après $75$ jours, le DJIA est à $20,050$. Calculez la valeur du contrat futures pour l’acheteur.

<div class="reveal" tabindex="0">


1. Calculer le prix sans arbitrage du contrat futures :
   $$
   F_0(T)=S_0e^{(r_f^c-\delta^c)T}=21000e^{1.2\%\frac{100}{365}}=21069.15
   $$
   
2. Actualiser à la date $t$ pour calculer la valeur.
   $$
   \begin{align}
   V_{l,t}&=S_t\times e^{-\delta(T-t)}-F_0(T)e^{-r_f^C(T-t)}\\
   &=20,050e^{-2\%\frac{25}{365}}-21,069.15e^{-3.2\%\frac{25}{365}}\\
   &=-1004.8
   \end{align}
   $$
   


</div>

## Accord de taux futur (FRA)

> [!WARNING]
>
> Dans le cadre du FRA, on utilise des **intérêts simples** et non composés.

**Déf.** : un accord de taux futur (FRA) est un contrat forward de gré à gré dont le sous-jacent est un taux variable, comme le MRR (anciennement Libor). L’acheteur verrouille en fait un taux fixe pour un emprunt futur.

* Acheteur : paie le fixe, reçoit le variable. Gagne si le taux monte.
* Vendeur : paie le variable, reçoit le fixe. Gagne si le taux baisse.

**Notation :** le FRA se note $a\times b$ FRA, où $a$ est le nombre de mois jusqu’à l’échéance du contrat (le taux variable est fixé et le FRA est réglé), et $b$ le nombre de mois jusqu’à l’échéance du prêt notionnel sous-jacent. Le taux sous-jacent couvre $b-a$ mois.

**Usage** : les FRA servent à couvrir le risque d’un emprunt ou d’un prêt futur. Le sens dépend de la position naturelle : un futur **emprunteur** craint une hausse des taux et se met **acheteur** ; un futur **prêteur** craint une baisse et se met **vendeur**.

### Évaluation du prix

Le taux du FRA est le taux forward implicite dans les taux au comptant actuels :

$$
\begin{aligned}
1+S_b\frac{b}{12}={}&\left(1+S_a\frac{a}{12}\right)\\
&\times\left(1+FR\,\frac{b-a}{12}\right)
\end{aligned}
$$

où $S_a, S_b$ sont les taux au comptant à $a$ et $b$ mois, observés aujourd’hui.

#### Exemple

Le taux au comptant à 6 mois est de $1.5\%$ et celui à 9 mois de $1.75\%$. Calculez le taux du $6\times9\text{FRA}$.

<div class="reveal" tabindex="0">


* $(1+1.5\%\times 0.5)(1+\frac{r}{4})=1+1.75\%\times0.75$
* $r=2.22\%$


</div>

### Valorisation

> [!NOTE]
>
> L’économie d’intérêts due à la position FRA survient en $b$ mais est réglée en $a$. **Dessinez toujours une frise chronologique pour calculer la valeur.**

<iframe
  class="fx-concept-chart"
  src="/charts/derivative-timelines.html?view=fra"
  title="Frise du FRA : conclusion, date de valorisation, fixation du taux et échéance du prêt"
  loading="lazy"
></iframe>

* **À l’échéance ($t=a$)** : le taux variable $r_{\text{float}}$ du prêt de $a$ à $b$ est maintenant connu. L’écart d’intérêts est perçu en $b$ ; on l’actualise donc sur $b-a$ à ce même taux :

$$
V_{l,a}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{fix}})\times\frac{b-a}{12}}{1+r_{\text{float}}\times\frac{b-a}{12}}
$$

où $r_{\text{fix}}$ est le taux forward du contrat.

* **Cas courant, à une date $t$ entre $0$ et $a$** : remplacer $r_{\text{float}}$ par le taux forward de $a$ à $b$ observé en $t$, $FR_t$, pour obtenir le gain en $b$. Puis l’actualiser en $t$ avec le taux au comptant $S_{b-t}$ pour les $b-t$ mois restants :

$$
V_{l,t}=\frac{\text{NP}\times(FR_t-r_{\text{fix}})\times\frac{b-a}{12}}{1+S_{b-t}\times\frac{b-t}{12}}
$$

#### Exemple

Pour un $1\times 4 \text{FRA}$, NP vaut $1$m, le taux sous-jacent est le LIBOR 90 jours. Le taux forward est de $7\%$.

En $t=30$ jours, le taux sous-jacent est de $8\%$. Calculez la valeur du paiement de ce FRA.

<div class="reveal" tabindex="0">


On est déjà à la date de règlement (1 mois). On peut utiliser directement la formule :
$$
V_{l,t}=\frac{1\times 1\%\times0.25 }{1+0.25\times8\%}=2450.98
$$

</div>

## Futures obligataires

### Intérêts courus

Le prix d’une obligation est coté en prix pied de coupon (clean), sans les intérêts courus. L’acheteur paie le prix plein (dirty), qui ajoute les intérêts courus :

$$
AI = \frac{t}{T}PMT
$$

où $t$ est le nombre de jours depuis le dernier coupon, $T$ le nombre de jours de la période de coupon et $PMT$ le paiement du coupon.

### Livraison

> [!Important]
>
> Cette partie est à privilégier pour l’examen

Un futures obligataire permet au vendeur de livrer n’importe quelle obligation d’un **panier** d’obligations éligibles (l’**option de livraison**). Autoriser un panier évite les squeezes sur une émission unique, éventuellement peu liquide.

Le prix du futures est coté pour une **obligation notionnelle standard** hypothétique, puisque ce qui est réellement livré est l’une des obligations du panier. Pour les futures sur bons du Trésor américain, l’obligation standard a un coupon de 6 %.

### Évaluation du prix

Le sous-jacent étant hypothétique, un **facteur de conversion** (CF) ajuste le prix de chaque obligation livrable, pour rendre toutes les obligations livrables à peu près équivalentes en prix. À la livraison, le vendeur reçoit :

$$
\begin{aligned}
\text{Invoice price}={}&\underbrace{\text{Futures price}\times CF}_{\text{principal invoice amount}}\\
&+AI
\end{aligned}
$$

L’ajustement n’est pas exact ; une obligation est donc **la moins chère à livrer** (CTD) : celle qui coûte le moins au vendeur à acheter et livrer, par rapport à ce qu’il reçoit. Le prix du futures suit l’obligation CTD.

En égalant le prix de facturation au prix forward de l’obligation CTD (absence d’arbitrage), où $S_0$ est le prix **plein** actuel de l’obligation (prix pied de coupon plus $AI_0$) et $AI_T$ les intérêts courus à l’échéance du futures :

$$
\text{Futures price}=\frac{\text{FV}-AI_T}{CF}
$$

où FV est la valeur forward de l’obligation :

$$
\begin{aligned}
\text{FV}&=(S_0-PVC)(1+r_f)^T\\
&=S_0(1+r_f)^T-FVC
\end{aligned}
$$

#### Exemple

Le sous-jacent vaut maintenant $\$108$ et les AI actuels sont de $\$0.083$ ; le futures obligataire arrive à échéance dans 1 mois. À l’échéance, les AI seront de $\$0.25$. On suppose $CF=0.729535$ et un taux sans risque à un mois de $0.1\%$. Calculez le prix du futures obligataire.

<div class="reveal" tabindex="0">


D’après la formule ci-dessus :
$$
\frac{(108.083\times(1+0.1\%)^{1/12}-0.25)}{0.729535}=147.82
$$



</div>

## Swap de taux d’intérêt {#interest-rate-swap}

> [!Note]
>
> Sur les marchés financiers, le swap de taux est le dérivé dont le volume de transactions est le plus élevé.

On traite ici du **swap de taux vanille** : fixe contre variable, dans une seule devise, sur un principal notionnel jamais échangé. Comme pour le FRA :

* Position acheteuse (swap payeur) : paie le fixe, reçoit le variable
* Position vendeuse (swap receveur) : paie le variable, reçoit le fixe

Les paiements à taux variable se font **à terme échu** : chaque taux est fixé au début de sa période et payé à la fin.

### Lien avec les instruments précédents

* **Forwards** : un swap est une série de contrats forward, tous dans le même sens, tous au même taux fixe. Comme un seul taux sert pour toutes les dates, chaque forward pris isolément est **hors marché** (valeur non nulle) ; seule la somme vaut zéro au départ.
* **Obligations** : voir le swap comme une combinaison d’obligations est l’approche de base de son évaluation. La position acheteuse (payer le fixe) est une **position vendeuse sur une obligation à taux fixe** plus une **position acheteuse sur une obligation à taux variable**.
* **FRA** : un swap ressemble à une série de FRA, un par période, tous au même taux fixe.

### Évaluation du prix

> [!Warning]
>
> Le taux du swap doit être annualisé en intérêts simples.

Comme pour tous les futures et forwards, la valeur du contrat en $0$ doit être $0$ pour les deux parties, et toute l’évaluation utilise des **intérêts simples**.

**Évaluer le prix** d’un swap, c’est trouver son taux fixe : le seul côté fixe de l’obligation.

> [!Important]
>
> **Hypothèse :** le taux de coupon de l’obligation à taux variable est égal au taux de marché, et le paiement à terme échu s’applique.
>
> Alors **à chaque date de refixation et à la date initiale, le prix de l’obligation à taux variable est égal au pair**

D’après la remarque ci-dessus, puisque $V_0=0$, $PV_{fix}=PV_{float}=Par$.

Soit $F$ le coupon périodique d’une obligation à taux fixe de pair $1$. Alors

$$1=\sum_{i=1}^n F\,D_i+1\times D_n$$

$$F=\frac{1-D_n}{\sum_{i=1}^nD_i}$$

où $D_i$ est le facteur d’actualisation du paiement $i$ en **intérêts simples**, $\dfrac{1}{1+r_i\times\frac{\text{days}_i}{360}}$. $F$ est un taux périodique ; multipliez par le nombre de périodes par an pour l’annualiser.

#### Exemple

Évaluez le prix de swaps vanille à paiement trimestriel. Les taux LIBOR au comptant sont $R_{\text{90-days}}=2.5\%, R_{\text{180-days}}=3\%, R_{\text{270-days}}=3.5\%,R_{\text{90-days}}=4\%$.

<div class="reveal" tabindex="0">


On calcule d’abord tous les facteurs d’actualisation en intérêts simples :
$$
\begin{align}
D_1 &= \frac{1}{1+2.5\%\times\frac{90}{360}}=0.9938\\
D_2 &= \frac{1}{1+3\%\times\frac{180}{360}}=0.9852\\
D_3 &= \frac{1}{1+3.5\%\times\frac{270}{360}}=0.9744\\
D_4 &= \frac{1}{1+4\%\times\frac{360}{360}}=0.962
\end{align}
$$
Puis on obtient $F$ avec la formule ci-dessus :
$$
F=\frac{1-D_4}{D_1+D_2+D_3+D_4}=0.98\%
$$
Le taux du swap s’annualise ainsi :
$$
r=0.98\%\times 4 = 3.92\%
$$

</div>

#### Usage

Swap de couverture : un emprunteur qui paie un taux variable peut conclure un swap payeur de fixe : les paiements variables s’annulent, et l’emprunteur paie finalement un taux fixe. Un prêteur qui reçoit du variable peut de même conclure un swap receveur de fixe.

> [!Note]
>
> Le swap doit correspondre à l’exposition : si l’exposition variable double, le principal notionnel du swap doit doubler aussi.

### Valorisation

* $V_{l,t}=PV_{float}-PV_{fix}$
* $V_{s,t}=-V_{l,t}$

On calcule d’abord le taux fixe $F$ avec la formule ci-dessus, puis :

* Pour le côté fixe, actualiser en $t$ les coupons fixes $F$ restants et le pair.
* Pour le côté variable, l’obligation revient au pair à la prochaine date de refixation ; actualiser donc le pair plus le **prochain coupon variable**, déjà fixé lors de la dernière refixation, de la prochaine date de refixation jusqu’à $t$.

#### Exemple

En reprenant l’exemple d’évaluation du prix ci-dessus, soit le Libor en $T=30$ :
$$
R_{\text{60-days}}=3\%, R_{\text{150-days}}=3.5\%, R_{\text{240-days}}=4\%,R_{\text{330-days}}=4.5\%
$$
Calculez la valeur pour la position acheteuse

<div class="reveal" tabindex="0">


On calcule d’abord les facteurs d’actualisation :
$$
\begin{align}
D_a &= \frac{1}{1+3\%\times\frac{60}{360}}=0.9950\\
D_b &= \frac{1}{1+3.5\%\times\frac{150}{360}}=0.9856\\
D_c &= \frac{1}{1+4\%\times\frac{240}{360}}=0.9740\\
D_d &= \frac{1}{1+4.5\%\times\frac{330}{360}}=0.9604
\end{align}
$$
Puis on actualise en $t$ en intérêts simples :
$$
V_{fix}=0.98\%(D_a+D_b+D_c+D_d)+1\times D_d
$$
On actualise le pair et le taux variable déjà fixé à $90$ jours pour obtenir la valeur du côté variable :
$$
V_{float}=(1+\frac{90}{360}2.5\%)\times D_a=1.001219
$$
> [!Note]
>
> On utilise ici le taux de l’exemple précédent ($2.5\%$), car le swap est **payé à terme échu** : le taux est fixé au début de chaque période.

La valeur est alors $NP\times(V_{float}-V_{fix})$.


</div>

### Méthode de valorisation 2

Imaginez conclure en $t$ un nouveau swap inverse au taux fixe du jour. Les jambes variables s’annulent, et il reste l’écart des taux fixes sur les dates restantes. La valeur de la position acheteuse est donc :

$$
V_{l,t} =\text{NP}\times(F_{t}-F_0)\times\sum_{i}D_i
$$

où $F_0$ est le taux fixe du contrat, $F_t$ le taux fixe d’un nouveau swap de même durée restante en $t$ (en taux périodiques), et $D_i$ les facteurs d’actualisation des dates de paiement restantes.

Cette valorisation repose sur des jambes variables identiques : les flux variables futurs sont les mêmes pour les deux swaps, et la valeur du nouveau swap est $0$ ; $F_t$ donne donc le prix de la jambe variable.

> [!Note]
>
> Cette formule est la même que pour un forward : la variation du prix (ici, le taux fixe), actualisée.

#### Exemple

Il y a 2 ans, nous avons conclu un swap de taux receveur de fixe à 7 ans, refixé annuellement, de $\$100m$, avec un taux fixe de $2\%$.

Les facteurs d’actualisation estimés figurent dans le tableau suivant. Calculez la valeur pour la partie qui reçoit le taux fixe :

| Échéance (années) | Facteurs d’actualisation |
| ---------------- | ---------- |
| 1                | 0.990      |
| 2                | 0.978      |
| 3                | 0.965      |
| 4                | 0.952      |
| 5                | 0.938      |

<div class="reveal" tabindex="0">


Précisons d’abord que l’on calcule la valeur de la position vendeuse, soit :
$$
V_{s,t} = \sum PV (F_0-F_t)
$$
Puis on calcule $F_t$ avec la formule d’évaluation du prix :
$$
F_t=\frac{1-D_n}{\sum_{i=1}^n D_i}=1.29\%
$$
La valeur est alors :
$$
V_{s,t}=((2\%-1.29\%)\sum_{i=1}^nD_i)NP
$$
où $NP$ vaut $\$100m$.


</div>

## Swap de devises

Un swap de devises est une autre forme de swap de taux, mais chaque jambe utilise le taux d’intérêt de sa propre devise. Il comprend :

* L’échange des principaux au début, au taux de change au comptant, et leur restitution à la fin
* Aux dates de règlement, les paiements d’intérêts ne sont pas compensés, car ils sont dans des devises différentes
* Les paiements à taux variable se font en général à terme échu

> [!Important]
>
> Le **taux de change** utilisé pour les principaux est celui du début ; les mêmes principaux sont échangés en retour à la fin.

### Évaluation du prix

Un swap de devises peut prendre 4 formes :

* Payer fixe, recevoir fixe
* Payer variable, recevoir fixe
* Payer fixe, recevoir variable
* Payer variable, recevoir variable

Pour la forme **fixe/variable**, on utilise toujours $V_{fix}=V_{float}$ : chaque obligation vaut $1$ au pair, et on applique la même formule que pour les swaps de taux, $F = \frac{1-D_n}{\sum D_i}$, avec les facteurs d’actualisation de cette devise.

Pour la forme **fixe/fixe**, on fixe le principal de chaque côté à $1$ et on applique la même formule, une fois par devise (comme on calcule des taux, le principal peut prendre n’importe quelle valeur).

Pour la forme **variable/variable**, il n’y a pas de taux fixe à déterminer.

### Valorisation

Voir le contrat comme l’achat d’une obligation et la vente d’une autre, dans des devises différentes. Valoriser chaque obligation dans sa devise, puis convertir l’une dans la devise de l’autre au taux de change **au comptant actuel**. Le reste est identique à la première méthode pour les swaps de taux.

## Equity swap

Un equity swap est une autre forme de swap, qui échange le rendement d’une action ou d’un indice (dividendes et variations de cours) contre un taux fixe ou variable, ou contre le rendement d’une autre action.

Échanger tous les rendements, dividendes compris, s’appelle un **swap de rendement total**.

### Usage

* Spéculation
* Allocation d’actifs
* Effet de levier (emprunter et conclure un equity swap)
* Modifier une position (obtenir une exposition quand on ne peut pas acheter l’action ou ses options)

### Évaluation du prix

Le taux fixe s’évalue avec la même formule que pour un swap de taux : la jambe actions, comme une jambe variable, vaut le pair à chaque refixation.

### Valorisation

Soit $S_{t-1}$ le cours de l’action à la dernière date de refixation. Pour la partie qui reçoit un taux fixe et paie le rendement de l’action :

$$
V_{t}=PV_{\text{fixed bond}}-\frac{S_t}{S_{t-1}}NP
$$

Pour la partie qui reçoit un taux variable et paie le rendement de l’action :

$$
V_{t}=PV_{\text{float bond}}-\frac{S_t}{S_{t-1}}NP
$$

Pour la partie qui reçoit le rendement d’une action et paie celui d’une autre :

$$
V_{t}=(R_1-R_2)NP
$$

où $R_1$ et $R_2$ sont les rendements des deux actions depuis la dernière refixation.
