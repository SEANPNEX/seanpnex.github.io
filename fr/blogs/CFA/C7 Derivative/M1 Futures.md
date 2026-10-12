---
title: Contrats à terme
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover {
    filter: none;
}
</style>

# Contrats à terme

Points communs à retenir :

* La valeur nette d’un contrat à terme est toujours $0$.
* En $t_0$, la valeur du contrat doit être $0$ pour les deux parties.



## Forward (contrat à terme de gré à gré)

* Principe d’absence d’arbitrage : loi du prix unique.

### Prix {#pricing}

$F_0(T)=S_0(1+r_f)^T, F_0(T)=S_0e^{r_fT}$, où $S_0$ est le prix au comptant

### Modèle d’arbitrage cash-and-carry

* Si $F_0(T)>S_0(1+r_f)^T$, on peut arbitrer en **empruntant $S_0$ au taux $r_f$ et en achetant l’actif en $t_0$**, puis en $t_1$ **en vendant l’actif à $F_0(T)$**.
* Si $F_0(T)<S_0(1+r_f)^T$, acheter l’actif sans risque et vendre l’actif au comptant à découvert.

Achat et vente à découvert $\to$ financement sur titres (emprunter des fonds ou des titres)

### Valorisation

Jeu à somme nulle (principe fondamental des contrats à terme) : $V_{l,t}+V_{s,t}=0$

Pour le forward :

* $V_{l,t}=S_t-\frac{F_0(T)}{(1+r_f)^{T-t}}$, où $S_t=\frac{F_t(T)}{(1+r_f)^{T-t}}$ ; voir le [prix](#pricing).
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-S_t$

Mettre à jour le [prix](#pricing) avec les revenus et les coûts :

* $F_0(T)=(S_0-PVB+PVC)\times(1+t_f)^T$
* $F_0(T)=S_0(1+r_f)^{T}-PVB+PVC$

En général, à une date $t$ comprise entre $0$ et $T$ :

* $V_{l,t}=(S_t-PVB+PVC)-\frac{F_0(T)}{(1+r_f)^{T-t}}$
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-(S_t-PVB+PVC)$

Noter que seuls les coûts et revenus entre $t$ et $T$ doivent être pris en compte.

#### Exemple

Soit un forward sur une action, d’échéance 100 jours. Le cours est de $\$45$ et l’action doit verser des dividendes de $\$0.3$ dans 20 jours et de $\$0.5$ dans 75 jours. Le taux sans risque est de $4\%$. Après 40 jours, le cours est de $\$48$.

<span class="blur-hover">

1. Calculer le prix de non-arbitrage du forward avec la formule mise à jour :
   $$
   F_0(T)=(45-\frac{0.3}{1.04^{\frac{20}{365}}}-\frac{0.5}{1.04^{\frac{75}{365} }})\times1.04^{\frac{100}{365} }=\$44.68.
   $$
   
2. Calculer la valeur de la position acheteuse :
   $$
   S_T-F_0(T)=\$3.11
   $$
   

</span>



## Forwards obligataires et forwards sur actions

### Obligataires

#### Prix

* $F_0(T)=(S_0-\text{PVCoupon})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+t_f)^T-\text{FVCoupon}$.

#### Valorisation

* $V_{l,t}=(S_t-\text{PVCoupon})-\frac{F_0(T)}{(1+r_f)^{T-t}}$.
* $V_{s,t}=\frac{F_0(T)}{(1+r_f)^{T-t}}-(S_t-\text{PVCoupon})$

> [!Note]
>
> $S_t-\text{PVCoupon}=\frac{F_t(T)}{(1+r_f)^T}$, de même que dans la formule initiale du prix d’un forward.

##### Exemple

Il y a un mois, BM a pris une position vendeuse sur **cinq** forwards sur obligations en euros, d’échéance 2 mois et de nominal $\texteuro 100,000$ chacun, au prix de $145$. Le forward vaut maintenant 148. Le taux sans risque est de $0.1\%$. Calculer la valeur de la position de BM.

* Raisonner d’abord : position vendeuse et prix en hausse $\to$ valeur négative

<span class="blur-hover">

* $V_{s,t}=\frac{(F_0(T)-F_t(T))}{(1+r_f)^{T-r}}=\frac{145-148}{1.001^{\frac{1}{12} }}=-2.9997$
* $V_{BM}=V_{s,t}\times 100,100\times 5=-14998.5$.

</span>

### Actions

#### Prix

* $F_0(T)=(S_0-\text{PVDiv})\times(1+r_f)^T$.
* $F_0(T)=S_0\times(1+t_f)^T-\text{FVDiv}$.

> [!Note]
>
> Le dividende est plus volatil que le coupon.

En particulier, pour les **futures sur indice actions**, on utilise la capitalisation continue dans la formule ci-dessus :

* $F_0(T)=S_0\times e^{(r_f^c-\delta^c)T}$,

où $\delta$ est le rendement du dividende.

> [!TIP]
>
> $r_f^c=\ln(1+r_f)$, $e^{r_f^cT}=(1+r_f)^T$.

> [!NOTE]
>
>Lorsque $r_f^c>\delta^c$, on a $F_0(T)>S_0$ : le future est en **report (contango)** ; sinon il est en **déport (backwardation)**.

#### Valorisation

En général, à la date $t$, la valeur est :

* $V_{l,t}=S_te^{-\delta(T-t)}-F_0(T)e^{-r_f^c(T-t)}$.
* $V_{s,t}=F_0(T)e^{-r_f^c(T-t)}-S_te^{-\delta(T-t)}$.

$r_f^c$ et $\delta^c$ restent les mêmes dans toute la formule.

> [!NOTE]
>
> $S_te^{-\delta(T-t)}=F_t(T)e^{-r_f^c(T-t)}$

##### Exemple

Soit un future sur l’indice DJIA d’échéance 100 jours. L’indice vaut actuellement $21000$, avec un rendement du dividende continu de $2\%$ ; le taux sans risque en capitalisation continue est de $3.2\%$. Après $75$ jours, l’indice vaut $20,050$. Calculer la valeur du future pour la position acheteuse.

<span class="blur-hover">

1. Calculer le prix de non-arbitrage du future :
   $$
   F_0(T)=S_0e^{(r_f^c-\delta^c)T}=21000e^{1.2\%\frac{100}{365}}=21069.15
   $$
   
2. Actualiser jusqu’en $t$ pour obtenir la valeur.
   $$
   \begin{align}
   V_{l,t}&=S_t\times e^{-\delta(T-t)}-F_0(T)e^{-r_f^C(T-t)}\\
   &=20,050e^{-2\%\frac{25}{365}}-21,069.15e^{-3.2\%\frac{25}{365}}\\
   &=-1004.8
   \end{align}
   $$
   

</span>



## Accord de taux futur (FRA)

> [!WARNING]
>
> Pour les FRA, on utilise des **intérêts simples** et non composés.

**Définition** : un accord de taux futur (FRA) est un forward de gré à gré dont le sous-jacent est un taux variable comme le Libor. L’acheteur peut emprunter à taux fixe dans le futur.

* Acheteur : paie le fixe, reçoit le variable.
* Vendeur : paie le variable, reçoit le fixe.

**Notation :** un FRA se note $a\times b \text{FRA}$, où $a$ est le nombre de mois jusqu’à l’échéance du contrat et $b$ le nombre de mois jusqu’au règlement du prêt sous-jacent.

**Usage** : le FRA sert à couvrir le risque d’un emprunt ou d’un prêt. Le côté choisi dépend de la position naturelle.

### Prix

Les taux à terme se calculent à partir des modèles de prix :
$$
1+S_b\frac{b}{12}=(1+S_a\frac{a}{12})(1+FR\frac{b-a}{12})
$$
où $S_a, S_b$ sont les taux au comptant observés aujourd’hui pour $a$ et $b$.

#### Exemple

Le taux au comptant à 6 mois est de $1.5\%$ et celui à 9 mois de $1.75\%$. Calculer le taux du $6\times9\text{FRA}$.

<span class="blur-hover">

* $(1+1.5\%\times 0.5)(1+\frac{r}{4})=1+1.75\%\times0.75$
* $r=2.22\%$

</span>

### Valorisation

> [!NOTE]
>
> L’économie d’intérêts procurée par la position FRA intervient en $b$ mais est réglée en $a$. **Toujours tracer une frise chronologique pour la valorisation.**

* $V_{l,t}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{ix}})\times\frac{b}{12}}{1+r_{\text{float}}\times (\frac{\text{b}}{12})}$, où $r_{\text{fix}}$ est le taux à terme du contrat et $r_{\text{float}}$ le taux au comptant de marché en $a$ (taux sous-jacent).

* Cas courant : à une date $t$ entre $0$ et $a$, on utilise comme $r_{\text{float}}$ le taux à terme de $a$ à $b$ observé en $t$ pour calculer la valeur de la position en $b$, puis on actualise jusqu’en $t$ au taux au comptant jusqu’à $b$ observé en $t$. Soit :
  $$
  V_{l,t}=\frac{\text{NP}\times(r_{\text{float}}-r_{\text{ix}})\times\frac{b}{12}}{1+r_{\text{float}}\times (\frac{\text{b+a-t}}{12})}
  $$
  

#### Exemple

Pour un $1\times 4 \text{FRA}$, le nominal est de $1$ million et le taux sous-jacent est le LIBOR à 90 jours. Le taux à terme est de $7\%$.

En $t=30$ jours, le taux sous-jacent est de $8\%$. Calculer la valeur du paiement de ce FRA.

<span class="blur-hover">

On est déjà à la date de règlement (1 mois). On peut appliquer directement la formule :
$$
V_{l,t}=\frac{1\times 1\%\times0.25 }{1+0.25\times8\%}=2450.98
$$
</span>

## Futures obligataires

### Intérêts courus

Le prix des obligations est coté pied de coupon (prix net), sans intérêts courus ; pour compenser, on ajoute :
$$
AI = \frac{t}{T}PMT
$$

### Livraison

> [!Important]
>
> Cette partie est à privilégier pour l’examen

Un future obligataire permet au vendeur de livrer plus d’une obligation (option de livraison : choisir dans un panier, ce qui évite les problèmes de liquidité comme les corners).

Le sous-jacent est une obligation fictive servant à la cotation (puisqu’en réalité il s’agit d’un panier). Sur le marché, c’est en général un T-bond à 30 ans avec un coupon semestriel de 6 %.

### Prix

Comme le sous-jacent est fictif, on utilise un **facteur de conversion** (CF) pour rendre les prix de toutes les obligations livrables à peu près comparables.
$$
\text{Principal invoice amount}= \text{Quoted futures price}\times CF+AI
$$
Le vendeur a le droit de livrer l’obligation **la moins chère à livrer** (CTD).

De la formule ci-dessus, on déduit :
$$
\begin{align}
\text{Quoted future price}&= \frac{((S_0-PVC)(1+r_f)^T-AI_T)}{CF}\\
&= \frac{(S_0(1+r_f)^T-AI_T-FVC)}{CF}
\end{align}
$$

#### Exemple

Le sous-jacent vaut actuellement $\$108$ et les intérêts courus $\$0.083$. Le future obligataire arrive à échéance dans 1 mois ; à l’échéance, les intérêts courus seront de $\$0.25$. On suppose $CF=0.729535$ et un taux sans risque à un mois de $0.1\%$. Calculer le prix du future obligataire.

<span class="blur-hover">

D’après la formule ci-dessus :
$$
\frac{(108.083\times(1+0.1\%)^{1/12}-0.25)}{0.729535}=147.82
$$


</span>



## Swap de taux d’intérêt

> [!Note]
>
> Sur les marchés financiers, le swap de taux est l’instrument au plus fort volume d’échanges

On traite ici du **swap de taux standard (plain vanilla)**. Comme pour le FRA :

* Position acheteuse : paie le fixe, reçoit le variable
* Position vendeuse : paie le variable, reçoit le fixe

Les paiements à taux variable sont effectués **à terme échu** (taux fixé en début de période, payé en fin de période).

### Liens avec les instruments précédents

* Forwards : un swap peut s’analyser comme une combinaison de forwards de même sens. Comme le principe d’**absence d’arbitrage** pourrait être violé, ces forwards sont hors marché (off-market).
* **Obligations** : voir le swap comme une combinaison d’obligations est l’approche fondamentale de sa valorisation. Une position acheteuse sur swap équivaut à vendre à découvert une obligation à taux fixe et à acheter une obligation à taux variable.
* FRA : un swap est un FRA sur plusieurs périodes.

### Prix

> [!Warning]
>
> Le taux de swap doit être annualisé en intérêts simples.

Comme pour tous les contrats à terme, la valeur du contrat en $0$ doit être nulle pour les deux parties, et tous les prix et valorisations utilisent des **intérêts simples**.

Le **prix** d’un swap n’est possible que si l’une des jambes est fixe.

> [!Important]
>
> **Hypothèse :** le coupon de l’obligation à taux variable est égal au taux de marché, et le paiement se fait à terme échu.
>
> Alors **à chaque date de refixation et à la date initiale, l’obligation à taux variable vaut le pair**

D’après la remarque ci-dessus, comme $V_0=0$, $PV_{fix}=PV_{float}=Par$.

Soit $F$ le coupon d’une obligation à taux fixe de nominal $1$.

Alors $1=\sum_{i=1}^n FD_i+1D_n$, $F=\frac{1-D_n}{\sum_{i=1}^nD_i}$, où $D_i$ est le facteur d’actualisation en **intérêts simples**, soit $\frac{1}{1+ri}$.

#### Exemple

Déterminer le prix d’un swap standard à paiements trimestriels. Les taux LIBOR au comptant sont $R_{\text{90-days}}=2.5\%, R_{\text{180-days}}=3\%, R_{\text{270-days}}=3.5\%,R_{\text{90-days}}=4\%$.

<span class="blur-hover">

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
Le taux de swap annualisé est :
$$
r=0.98\%\times 4 = 3.92\%
$$
</span>

#### Usage

Swap de couverture : lorsqu’on emprunte ou prête à taux variable, un swap permet de construire un portefeuille qui reçoit un taux fixe.

> [!Note]
>
> Si le taux variable est doublé, le nominal et le taux fixe doivent tous deux être doublés.

### Valorisation

* $V_{l,t}=PV_{float}-PV_{fix}$
* $V_{s,t}=-V{l,t}$

On calcule d’abord le prix $F$ avec la formule ci-dessus, puis :

* Jambe fixe : actualiser $F$ et $NP$ jusqu’en $t$
* Jambe variable : actualiser jusqu’en $t$ le pair le plus proche et une valeur de $F$.

#### Exemple

En reprenant l’exemple de prix ci-dessus, on suppose qu’en $T=30$ le Libor vaut :
$$
R_{\text{60-days}}=3\%, R_{\text{150-days}}=3.5\%, R_{\text{240-days}}=4\%,R_{\text{330-days}}=4.5\%
$$
Calculer la valeur de la position acheteuse

<span class="blur-hover">

On calcule d’abord les facteurs d’actualisation :
$$
\begin{align}
D_a &= \frac{1}{1+3\%\times\frac{60}{360}}=0.9950\\
D_b &= \frac{1}{1+3.5\%\times\frac{150}{360}}=0.9856\\
D_c &= \frac{1}{1+4\%\times\frac{240}{360}}=0.9740\\
D_d &= \frac{1}{1+4.5\%\times\frac{330}{360}}=0.9604
\end{align}
$$
Puis on actualise jusqu’en $t$ en intérêts simples :
$$
V_{fix}=0.98\%(D_a+D_b+D_c+D_d)+1\times D_d
$$
On actualise ensuite le pair et le taux variable déjà fixé à $90$ jours pour obtenir la valeur de la jambe variable :
$$
V_{float}=(1+\frac{90}{360}2.5\%)\times D_a=1.001219
$$
> [!Note]
>
> On utilise ici le taux de l’exemple précédent ($2.5\%$) parce que le swap est payé **à terme échu** : le taux de chaque période est fixé en début de période.

La valeur est alors $NP\times(V_{float}-V_{fix})$.

</span>

### Méthode de valorisation 2

Imaginons qu’en $t$ on signe un nouveau contrat avec un nouveau taux fixe. La valeur de la position acheteuse est alors :
$$
V_{l,t} =\sum PV(F_{t}-F_0)
$$
où $F$ est le taux fixe du contrat.

Cette valorisation repose sur l’homogénéité des taux variables futurs. Comme les flux variables futurs sont identiques, $F_t$ représente la valeur actuelle des flux variables futurs (la valeur du nouveau contrat est $0$).

> [!Note]
>
> Cette formule est la même que pour un forward

  

#### Exemple

Il y a 2 ans, nous avons conclu un swap receveur du taux fixe, de nominal $\$100m$, d’une durée de 7 ans avec refixation annuelle, au taux de swap fixe de $2\%$.

Les facteurs d’actualisation estimés figurent dans le tableau suivant. Calculer la valeur pour la partie qui reçoit le taux fixe :

| Échéance (années) | Facteur d’actualisation |
| ---------------- | ---------- |
| 1                | 0.990      |
| 2                | 0.978      |
| 3                | 0.965      |
| 4                | 0.952      |
| 5                | 0.938      |

<span class="blur-hover">

Précisons d’abord que l’on calcule la valeur de la position vendeuse :
$$
V_{s,t} = \sum PV (F_0-F_t)
$$
Puis on calcule $F_t$ avec la formule de prix :
$$
F_t=\frac{1-D_n}{\sum_{i=1}^n D_i}=1.29\%
$$
La valeur est alors :
$$
V_{s,t}=((2\%-1.29\%)\sum_{i=1}^nD_i)NP
$$
où $NP$ vaut $\$100m$.

</span>



## Swap de devises

Le swap de devises est une autre forme de swap de taux, mais avec les taux d’intérêt des devises concernées. Il comprend :

* L’échange des nominaux au départ selon le taux de change, puis leur restitution à l’échéance
* Aux dates de règlement, les paiements d’intérêts ne sont pas compensés
* Les paiements à taux variable sont en général effectués à terme échu

> [!Important]
>
> Le **taux de change** utilisé doit être celui de la date de départ.

### Prix

Un swap de devises peut prendre 4 formes :

* Payer fixe, recevoir fixe
* Payer variable, recevoir fixe
* Payer fixe, recevoir variable
* Payer variable, recevoir variable

Pour le schéma **fixe/variable**, on utilise toujours $V_{fix}=V_{float}$, on considère l’obligation à taux fixe au pair de $1$ et on applique la même formule que pour le swap de taux : $F = \frac{1-D_n}{\sum D_i}$.

Pour le schéma **fixe/fixe**, on fixe le nominal des deux jambes à $1$ et on applique la même formule (comme on calcule un taux, le nominal peut prendre n’importe quelle valeur).

Pour le schéma **variable/variable**, le calcul d’un prix est impossible.

### Valorisation

On considère le contrat comme l’achat d’une obligation et la vente à découvert d’une autre dans une devise différente, puis on convertit leurs valeurs actuelles dans une même devise au taux de change au comptant. La valorisation est identique à la première méthode du swap de taux.



## Swap sur actions

Le swap sur actions est une autre forme de swap de taux, qui échange le rendement d’une action (dividendes, rendement sur le marché secondaire).

L’échange de l’ensemble des rendements s’appelle un **total return swap**.

### Usage

* Spéculation
* Allocation d’actifs
* Effet de levier (emprunter et conclure un swap sur actions)
* Changement d’exposition (lorsqu’on ne peut pas acheter l’action ou ses options)

### Prix

Pour la jambe fixe, même formule que pour le swap de taux

### Valorisation

Pour la partie qui reçoit le taux fixe et paie le rendement de l’action :
$$
V_{t}=PV_{\text{fixed bond}}-\frac{S_t}{S_{t-1}}NP
$$
Pour la partie qui reçoit le taux variable et paie le rendement de l’action :
$$
V_{t}=PV_{\text{float bond}}-\frac{S_t}{S_{t-1}}NP
$$
Pour la partie qui reçoit le rendement d’une action et paie celui d’une autre :
$$
V_{t}=(R_1-R_2)NP
$$
