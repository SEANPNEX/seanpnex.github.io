---
title: "Analyse de la gestion active de portefeuille"
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

# Analyse de la gestion active de portefeuille

Le contenu est tiré de l’ouvrage *Active Portfolio Management* de Grinold et Kahn.

## Valeur ajoutée par la gestion active

### Pondérations actives

Rappel du rendement actif vu au [M2](M2%20Multifactor%20Models.md#return-attribution) :

$$R_A=R_P-R_B$$

Écrivons la pondération du portefeuille sur l’actif $i$ comme la pondération de l’indice de référence plus une **pondération active**, $\Delta w_i=w_{P,i}-w_{B,i}$. Le rendement actif est alors la somme des pondérations actives multipliées par les rendements des actifs :

$$R_A=\sum_{i=1}^{N}\Delta w_i\,R_i$$

L’ensemble des pondérations actives a une somme **nulle** : une surpondération sur un actif doit être financée par des sous-pondérations sur d’autres. On n’ajoute donc de la valeur qu’en **surpondérant les actifs qui battent l’indice de référence** et en sous-pondérant ceux qui sont en retard. Comme $\sum\Delta w_i=0$, la formule peut aussi s’écrire avec les rendements relatifs à l’indice : $R_A=\sum\Delta w_i\,(R_i-R_B)$.

**Exemple.** Un indice de référence détient trois actions à 50 %, 30 % et 20 % ; le portefeuille les détient à 40 %, 40 % et 20 %. Les actions rapportent 10 %, 15 % et 5 %. Trouvez les pondérations actives et le rendement actif.

<div class="reveal" tabindex="0">

Pondérations actives : $-10\%$, $+10\%$ et $0$, de somme nulle.

$$
\begin{aligned}
R_A&=(-0.1)(10\%)+(0.1)(15\%)+0\\
&=0.5\%
\end{aligned}
$$

Vérification : $R_P=4\%+6\%+1\%=11\%$ et $R_B=5\%+4.5\%+1\%=10.5\%$, soit un écart de $0.5\%$.

</div>

### Décomposition de la valeur ajoutée

* Pour un portefeuille comprenant plusieurs classes d’actifs, le rendement actif se décompose en deux sources :
  1. **Allocation d’actifs active** : les pondérations actives des classes d’actifs par rapport au portefeuille de référence.
  2. **Sélection de titres** : les pondérations actives des titres au sein des classes d’actifs, qui se traduisent par un rendement de chaque classe supérieur à son indice de référence.

$$
\begin{aligned}
R_A={}&\underbrace{\sum_{i=1}^{N}\left(w_i^P-w_i^B\right)R_i^B}_{\text{active asset allocation}}\\
&+\underbrace{\sum_{i=1}^{N}w_i^P\left(R_i^P-R_i^B\right)}_{\text{security selection}}
\end{aligned}
$$

où $i$ est maintenant une classe d’actifs, $R_i^B$ le rendement de l’indice de cette classe, et $R_i^P$ le rendement des positions du portefeuille dans cette classe.

**Exemple.** L’indice de référence comprend 60 % d’actions (rendement de référence 8 %) et 40 % d’obligations (4 %). Le portefeuille détient 70 % d’actions, qui rapportent 9 %, et 30 % d’obligations, qui rapportent 3,5 %. Décomposez le rendement actif.

<div class="reveal" tabindex="0">

**Allocation d’actifs :**

$$
\begin{aligned}
&(0.7-0.6)(8\%)+(0.3-0.4)(4\%)\\
&=0.8\%-0.4\%=0.4\%
\end{aligned}
$$

**Sélection de titres :**

$$
\begin{aligned}
&0.7(9\%-8\%)+0.3(3.5\%-4\%)\\
&=0.7\%-0.15\%=0.55\%
\end{aligned}
$$

Rendement actif total $=0.95\%$. Vérification : $R_P=6.3\%+1.05\%=7.35\%$ et $R_B=4.8\%+1.6\%=6.4\%$.

</div>

## Ratio d’information

### Ratio de Sharpe

Le **ratio de Sharpe** est le rendement excédentaire par unité de **risque total** :

$$\text{SR}_P=\frac{R_P-R_f}{\sigma_P}$$

* **Ex ante** : utilise les valeurs attendues, $E(R_P)$ et le $\sigma_P$ attendu, pour choisir les portefeuilles.
* **Ex post** : utilise les valeurs réalisées, $R_P$ et le $\sigma_P$ réalisé, pour les évaluer.

**Frontière efficiente.** La **frontière efficiente** est l’ensemble des portefeuilles risqués offrant le rendement attendu le plus élevé pour chaque niveau de risque. Une **droite d’allocation du capital (CAL)** relie l’actif sans risque à un portefeuille risqué ; sa pente est le ratio de Sharpe de ce portefeuille. La **droite de marché des capitaux (CML)** est la CAL la plus pentue : celle qui est tangente à la frontière, au portefeuille de marché (de tangence).

<iframe
  class="fx-concept-chart"
  src="/charts/efficient-frontier-cml.html"
  title="Frontière efficiente avec la droite de marché des capitaux et une droite d’allocation du capital moins pentue"
  loading="lazy"
></iframe>

* **Prêter ou emprunter à $R_f$ ne change pas le ratio de Sharpe** : cela déplace seulement l’investisseur le long de la même droite. Un investisseur prudent prête (détient un peu de trésorerie) ; un investisseur audacieux emprunte. L’investisseur doit donc choisir le portefeuille risqué au **ratio de Sharpe le plus élevé**, puis fixer son risque total avec de la trésorerie ou du levier.
* **Des pondérations actives plus agressives changent le ratio de Sharpe** : amplifier les paris actifs ajoute du risque actif, ce qui augmente ou réduit le ratio de Sharpe du portefeuille selon la quantité de risque actif prise (voir le niveau optimal ci-dessous).

### Ratio d’information

Rappel du ratio d’information vu au [M2](M2%20Multifactor%20Models.md#risk-attribution), et du risque actif, l’[erreur de suivi](M1%20ETF.md#tracking-error) du M1. Le ratio d’information est le rendement actif par unité de **risque actif** :

$$\text{IR}=\frac{R_P-R_B}{\sigma\left(R_P-R_B\right)}=\frac{R_A}{\sigma_A}$$

* **IR ex ante** : rendement actif attendu sur risque actif attendu ; sert à choisir les gérants et à dimensionner le risque actif.
* **IR ex post** : rendement actif réalisé sur risque actif réalisé ; sert à **évaluer la performance des gérants d’actifs**.

Le ratio de Sharpe est l’IR avec l’actif sans risque comme indice de référence.

**Conclusions :**

1. L’IR **n’est pas affecté par l’agressivité** des pondérations actives : multiplier toutes les pondérations actives par une même constante multiplie dans la même proportion le rendement actif et le risque actif. Cela vaut tant qu’aucun frais n’est prélevé (un frais fixe n’augmente pas avec les paris).
2. De même, **combiner le portefeuille actif avec l’indice de référence** (en détenir une partie en indice, ou emprunter au rendement de l’indice pour amplifier les paris actifs) ne fait que changer l’échelle des pondérations actives ; cela **ne** change donc **pas** l’IR.
3. L’IR **est affecté par l’ajout de trésorerie ou l’usage du levier** (prêter ou emprunter à $R_f$) : l’actif sans risque n’est pas l’indice de référence ; il modifie donc rendement actif et risque actif dans des proportions différentes.

Les deux ratios se comportent donc de façon opposée : le **ratio de Sharpe** est inchangé par la trésorerie ou le levier mais modifié par l’agressivité des pondérations actives ; l’**IR** est inchangé par l’agressivité mais modifié par la trésorerie ou le levier.

### Construire le portefeuille optimal

Quand un portefeuille actif est combiné avec l’indice de référence, et que les rendements actifs sont non corrélés à l’indice, le meilleur ratio de Sharpe atteignable est

$$\text{SR}_P^2=\text{SR}_B^2+\text{IR}^2$$

Les investisseurs doivent donc **choisir le gérant ayant l’IR le plus élevé** : il donne le ratio de Sharpe le plus élevé pour le portefeuille total, quelle que soit la préférence de risque de l’investisseur.

Le ratio de Sharpe est maximisé pour le **niveau optimal de risque actif** :

$$\sigma^*\left(R_P-R_B\right)=\frac{\text{IR}}{\text{SR}_B}\,\sigma_{R_B}$$

Ce sont des conclusions de l’ouvrage ; la démonstration est omise.

**Ajuster le risque actif.** Si le portefeuille actif d’un gérant a un risque actif $\sigma_A$ différent du niveau optimal, on le combine avec l’indice de référence. La pondération du portefeuille actif est $N/M$, où $N=\dfrac{\text{IR}}{\text{SR}_B}\sigma_{R_B}$ est le risque actif optimal et $M=\sigma(R_P-R_B)$ le risque actif effectif du portefeuille ; le reste va dans l’indice de référence.

**Exemple.** L’indice de référence a un ratio de Sharpe de 0,40 et une volatilité de 18 %. Un gérant a un IR de 0,25 et un risque actif de 15 %. Trouvez le risque actif optimal, la pondération du portefeuille du gérant et le meilleur ratio de Sharpe.

<div class="reveal" tabindex="0">

$$\sigma_A^*=\frac{0.25}{0.40}\times18\%=11.25\%$$

Pondération du gérant $=11.25\%/15\%=75\%$, avec 25 % dans l’indice de référence. Le rendement actif attendu est $0.25\times11.25\%=2.81\%$.

$$\text{SR}_P=\sqrt{0.40^2+0.25^2}=0.472$$

</div>

## La loi fondamentale

### Triangle des corrélations

La valeur ajoutée par un gérant actif dépend de trois relations, représentées par un triangle entre trois séries de nombres sur les actifs : les **rendements actifs prévus** $\mu_i$ (en haut), les **pondérations actives** $\Delta w_i$ (à gauche) et les **rendements actifs réalisés** $R_{A,i}$ (à droite).

<iframe
  class="fx-concept-chart"
  src="/charts/correlation-triangle.html"
  title="Triangle des corrélations entre prévisions, pondérations actives et rendements actifs réalisés"
  loading="lazy"
></iframe>

* **Qualité du signal** (du haut vers la droite) : les prévisions prédisent-elles ce qui se produit ? C’est l’IC.
* **Construction du portefeuille** (du haut vers la gauche) : les prévisions se retrouvent-elles dans les pondérations ? C’est le TC.
* **Valeur ajoutée** (de la gauche vers la droite) : ce que les pondérations ont réellement rapporté, $R_A=\sum\Delta w_iR_{A,i}$.

**Coefficient d’information (IC).** La qualité du signal se mesure par la corrélation entre les rendements actifs prévus ($\mu_i$) en haut du triangle et les rendements actifs réalisés ($R_{A,i}$) à l’angle droit, couramment appelée **coefficient d’information (IC)**.

L’IC est une corrélation pondérée par le risque entre rendements actifs prévus et réalisés :

$$\text{IC}=\rho\left(\frac{R_{A,i}}{\sigma_i},\ \frac{\mu_i}{\sigma_i}\right)$$

* L’IC ex ante doit être positif : un gérant n’agirait pas sur des prévisions qu’il s’attend à voir fausses.
* L’IC ex post peut être positif ou négatif, selon la façon dont les prévisions se sont réalisées.

**Coefficient de transfert (TC).** La corrélation entre les prévisions pondérées par le risque et les pondérations actives pondérées par le risque, $\text{TC}=\rho\left(\mu_i/\sigma_i,\ \Delta w_i\sigma_i\right)$. Il mesure :

* Le degré auquel les prévisions de l’investisseur se traduisent en pondérations actives.
* La mesure dans laquelle les contraintes réduisent la valeur ajoutée attendue de la capacité de prévision de l’investisseur.
* Pour les portefeuilles sans contrainte, $\text{TC}=1$.
* Pour les portefeuilles avec contraintes (p. ex. achat seul, limites de position), $\text{TC}<1$.

**Étendue (BR).**

* L’**étendue** mesure le nombre de décisions actives indépendantes que le gérant prend chaque année pour construire le portefeuille : un indicateur de l’effort qu’il y consacre.
  * « **Indépendantes** » signifie que les décisions actives ne doivent pas reposer sur des informations fortement corrélées (ou identiques).
* Une mesure pratique de l’étendue, pour $N$ décisions de corrélation moyenne $\rho$ :

$$\text{BR}=\frac{N}{1+(N-1)\rho}$$

  * P. ex. 20 décisions avec $\rho=0.25$ donnent $\text{BR}=20/(1+19\times0.25)=3.48$ : des paris très corrélés ne valent que quelques paris indépendants.
  * Avec des dérivés ou d’autres stratégies de couverture ($\rho<0$), BR peut être supérieure à $N$.

### La loi fondamentale de la gestion active

* La loi fondamentale **de base**, pour un portefeuille sans contrainte :

$$\text{IR}^*=\text{IC}\times\sqrt{\text{BR}}$$

$$E(R_A)=\text{IC}\times\sqrt{\text{BR}}\times\sigma_A$$

* La loi fondamentale **complète**, avec contraintes :

$$\text{IR}=\text{TC}\times\text{IC}\times\sqrt{\text{BR}}$$

$$E(R_A)=\text{TC}\times\text{IC}\times\sqrt{\text{BR}}\times\sigma_A$$

* En tenant compte du TC, avec $\text{IR}^*$ l’IR sans contrainte de la loi de base :

$$\sigma_A^*=\frac{\text{TC}\times\text{IR}^*}{\text{SR}_B}\times\sigma_{R_B}$$

$$\text{SR}_P^2=\text{SR}_B^2+\left(\text{TC}\times\text{IR}^*\right)^2$$

**Exemple.** Un gérant a un IC de 0,05, une étendue de 100, un TC de 0,6 et un risque actif de 4 %. Le ratio de Sharpe de l’indice de référence est de 0,40 et sa volatilité de 15 %. Trouvez l’IR, le rendement actif attendu, le risque actif optimal et le meilleur ratio de Sharpe du portefeuille.

<div class="reveal" tabindex="0">

Sans contrainte : $\text{IR}^*=0.05\times\sqrt{100}=0.50$. Avec contraintes : $\text{IR}=0.6\times0.50=0.30$.

$E(R_A)=0.30\times4\%=1.2\%$.

$$\sigma_A^*=\frac{0.6\times0.50}{0.40}\times15\%=11.25\%$$

$$\text{SR}_P=\sqrt{0.40^2+0.30^2}=0.50$$

</div>

**Moyens d’améliorer l’IR :**

* **Améliorer le TC** : assouplir les contraintes (p. ex. autoriser la vente à découvert), pour que les prévisions se retrouvent mieux dans les pondérations.
* **Améliorer l’IC** : de meilleures prévisions.
* **Augmenter la BR** : plus de décisions indépendantes. Mais étendue et IC s’arbitrent : ajouter des paris n’aide que si leur IC reste raisonnable. Si l’IC des paris supplémentaires est faible, une BR plus petite avec de meilleurs paris peut donner un IR plus élevé.

### Applications

**Market timing.** Pour un gérant qui fait des choix binaires (p. ex. actions ou trésorerie), l’IC découle de la proportion de choix justes :

$$\text{IC}=2\times(\%\text{ correct})-1$$

P. ex. un gérant qui a raison 55 % du temps a un IC de $2(0.55)-1=0.10$. Avec quatre choix indépendants par an, $\text{BR}=4$ et $\text{IR}=0.10\times\sqrt4=0.20$. Un gérant qui n’a raison que 50 % du temps a un IC de 0 : aucun talent.

**Mesure de l’IC ex post.** Après coup, le rendement actif réalisé dépend de l’IC **réalisé** :

$$
\begin{aligned}
E\left(R_A\mid\text{IC}_R\right)={}&\text{TC}\times\text{IC}_R\\
&\times\sqrt{\text{BR}}\times\sigma_A
\end{aligned}
$$

* $\sigma_A^2$ dépend de la volatilité de l’IC réalisé et du **bruit** dû aux contraintes.
* La part de la variance du rendement actif expliquée par l’IC réalisé (la prévision) est $\text{TC}^2$ ; le reste, $1-\text{TC}^2$, est du bruit. Avec des contraintes serrées (TC faible), même les résultats d’un gérant talentueux sont donc dominés par le bruit.

**Limites.** Les paramètres ne peuvent pas être estimés précisément : l’IC ex ante est difficile à mesurer, et la véritable indépendance des décisions, donc l’étendue, est difficile à juger. La loi suppose aussi que l’IC est le même pour toutes les décisions.
