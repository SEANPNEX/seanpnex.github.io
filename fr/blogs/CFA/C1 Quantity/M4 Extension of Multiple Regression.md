---
title: Extensions de la régression multiple
---

# Extensions de la régression multiple

Ce module prolonge la régression multiple ordinaire dans deux directions :

1. **Analyse d’influence :** repérer les observations susceptibles de modifier sensiblement le modèle ajusté.
2. **Information qualitative :** représenter des variables explicatives catégorielles et modéliser une variable dépendante binaire.

## Analyse d’influence

Une observation peut être inhabituelle à cause des valeurs de ses variables explicatives, de la valeur de sa variable dépendante, ou des deux. Il faut distinguer ces cas :

| Concept | Qu’est-ce qui est inhabituel ? | Mesure principale |
| --- | --- | --- |
| Effet de levier élevé | Les valeurs de $X$ de l’observation | Levier, $h_{ii}$ |
| Valeur aberrante | Le $Y_i$ observé est loin de sa valeur ajustée | Résidu studentisé |
| Observation influente | Retirer l’observation modifie sensiblement la régression ajustée | Distance de Cook ou diagnostics de suppression |

Un levier élevé ou un grand résidu crée un **potentiel** d’influence. Aucun des deux, à lui seul, ne prouve qu’une observation modifie sensiblement la régression.

<iframe
  class="influence-analysis-chart"
  src="/charts/influence-analysis-cases.html?lang=fr"
  title="Comparaison graphique du levier, des valeurs aberrantes et des observations influentes"
  loading="lazy"
></iframe>

Lire les trois cas de gauche à droite :

1. **Levier élevé sans grand résidu :** le point est éloigné de l’échantillon dans la direction horizontale $X$, mais il respecte la relation existante. Il étend la plage des données sans faire beaucoup pivoter la droite ajustée.
2. **Valeur aberrante sans levier élevé :** le point est loin de la droite verticalement, mais proche du centre de la distribution de $X$. Son résidu est grand, mais les observations voisines limitent sa capacité à faire pivoter la pente.
3. **Observation influente :** le point est à la fois éloigné horizontalement et incohérent verticalement avec la relation initiale. Avec peu d’observations proches pour le contrebalancer, il attire la droite ajustée vers lui.

Dans chaque panneau, la ligne pointillée est ajustée sans l’observation signalée ; la ligne pleine l’inclut. Leur écart rend l’influence directement visible.

### Levier

Le levier mesure à quel point les valeurs des variables indépendantes d’une observation sont inhabituelles par rapport à l’échantillon. C’est le $i$-ième élément diagonal de la matrice chapeau des MCO :

$$
H=X(X'X)^{-1}X',
\qquad h_{ii}=H_{ii}.
$$

Les valeurs ajustées vérifient $\hat{Y}=HY$, d’où le nom de matrice chapeau.

Propriétés importantes, pour un modèle à $k$ prédicteurs avec constante :

$$
0\le h_{ii}\le1,
\qquad
\sum_{i=1}^{n}h_{ii}=k+1,
$$

Le levier moyen vaut donc

$$
\bar{h}=\frac{k+1}{n}.
$$

Une règle d’alerte courante est

$$
h_{ii}>3\left(\frac{k+1}{n}\right).
$$

C’est un critère de repérage, pas un seuil de rejet formel. Une observation à fort levier peut se trouver près de la régression ajustée et n’avoir donc que peu d’influence.

### Valeurs aberrantes et résidus studentisés

Une valeur aberrante a un résidu anormalement grand au regard de sa variabilité estimée. Le résidu ordinaire est

$$
e_i=Y_i-\hat{Y}_i.
$$

La variance des résidus diffère d’une observation à l’autre parce que le levier diffère. La studentisation place les résidus sur une échelle comparable. Le **résidu studentisé externe**, aussi appelé résidu studentisé supprimé, est

$$
t_i^*
=
\frac{e_i}{s_{(i)}\sqrt{1-h_{ii}}},
$$

où $s_{(i)}$ est l’écart-type de la régression estimé après suppression de l’observation $i$.

Avec des erreurs normales et sous l’hypothèse nulle que l’observation $i$ suit le même modèle de régression que les autres,

$$
t_i^*\sim t_{n-k-2}.
$$

Une grande valeur absolue $|t_i^*|$ signale une valeur aberrante potentielle. L’hypothèse nulle pertinente n’est **pas** que l’observation est influente : les résidus studentisés détectent des valeurs conditionnelles de $Y$ inhabituelles, alors que l’influence dépend aussi du levier.

> [!NOTE]
> Examiner de nombreuses observations crée un problème de tests multiples. Un seuil simple comme $|t_i^*|>2$ est utile pour le repérage, mais signalera certaines observations par hasard, surtout dans un grand échantillon.

### Distance de Cook

La distance de Cook combine la taille du résidu et le levier pour estimer à quel point la régression ajustée changerait si l’observation $i$ était retirée :

$$
D_i
=
\frac{e_i^2}{(k+1)MSE}
\left(\frac{h_{ii}}{(1-h_{ii})^2}\right).
$$

La distance de Cook augmente lorsqu’une observation a :

- un grand résidu ;
- un levier élevé ; ou
- les deux.

Plus $D_i$ est grand, plus l’influence potentielle est forte. Des valeurs supérieures à 1 sont souvent considérées comme très influentes, tandis que des règles comme $D_i>4/n$ servent au repérage. Ce sont des règles d’examen, pas des critères de suppression automatique.

### Que faire face à une observation influente

1. Vérifier les erreurs de saisie, de mesure et d’unité.
2. Décider si l’observation appartient à la population représentée par le modèle.
3. Examiner si elle révèle une variable manquante, une interaction, une rupture structurelle ou une forme fonctionnelle incorrecte. Voir [M3 : erreurs de spécification](./M3%20Model%20Misspecification.md).
4. Comparer le modèle avec et sans l’observation et signaler toute sensibilité importante.
5. Ne pas retirer une observation valide au seul motif qu’elle affaiblit le résultat souhaité.

## Variables explicatives catégorielles

### Variables indicatrices

Une variable indicatrice (dummy) représente l’appartenance à une catégorie par les valeurs 0 et 1. Si un prédicteur catégoriel compte $g$ catégories et que la régression comporte une constante, on utilise $g-1$ indicatrices. La catégorie omise devient la **catégorie de référence**.

Utiliser les $g$ indicatrices avec une constante crée une multicolinéarité parfaite — le piège des variables indicatrices évoqué dans [M3 : multicolinéarité](./M3%20Model%20Misspecification.md#multicollinearity).

#### Exemple : des constantes différentes

Supposons que des entreprises appartiennent aux secteurs financier, technologique ou de la santé. On définit

$$
D_{Tech}=1\text{ for a technology firm, otherwise }0,
$$

et de même $D_{Health}$. Si les entreprises financières forment le groupe de référence,

$$
Y_i
=
\beta_0+\beta_1X_i
+\gamma_1D_{Tech,i}
+\gamma_2D_{Health,i}
+\varepsilon_i.
$$

- $\beta_0$ est la constante des entreprises financières.
- $\gamma_1$ est l’écart de constante entre entreprises technologiques et financières, à $X$ constant.
- $\gamma_2$ est l’écart de constante entre entreprises de santé et financières, à $X$ constant.

Changer de catégorie de référence modifie l’écriture des coefficients, mais pas les valeurs ajustées.

### Termes d’interaction

Pour que la pente de $X$ diffère entre deux groupes, on fait interagir $X$ avec une indicatrice :

$$
Y_i
=
\beta_0+\beta_1X_i
+\gamma D_i
+\delta(X_iD_i)
+\varepsilon_i.
$$

| Groupe | Constante | Pente de $X$ |
| --- | ---: | ---: |
| Groupe de référence, $D=0$ | $\beta_0$ | $\beta_1$ |
| Groupe de comparaison, $D=1$ | $\beta_0+\gamma$ | $\beta_1+\delta$ |

Par conséquent :

- $\gamma$ mesure l’écart de constantes ; et
- $\delta$ mesure l’écart de pentes.

Un [test F contraint](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test) permet de déterminer si un ensemble de termes de catégorie et d’interaction est conjointement significatif.

## Variables dépendantes binaires

Lorsque la variable dépendante ne prend que deux valeurs — défaut/absence de défaut, succès/échec —, la régression linéaire ordinaire peut produire des probabilités inférieures à 0 ou supérieures à 1 et impose des erreurs hétéroscédastiques. Un modèle logit relie plutôt les prédicteurs à une probabilité via la fonction logistique.

### Modèle logit

Soit

$$
p_i=P(Y_i=1\mid X_i).
$$

Le modèle logit spécifie le **logarithme de la cote** comme fonction linéaire des prédicteurs :

$$
\ln\left(\frac{p_i}{1-p_i}\right)
=
\beta_0+\beta_1X_{1i}+\cdots+\beta_kX_{ki}.
$$

En résolvant pour la probabilité, on obtient

$$
p_i
=
\frac{1}
{1+\exp[-(\beta_0+\beta_1X_{1i}+\cdots+\beta_kX_{ki})]}.
$$

Cette équation de probabilité ne contient pas de $\varepsilon_i$ additif. Conditionnellement aux prédicteurs, $Y_i$ suit une loi de Bernoulli de probabilité $p_i$.

### Interpréter les coefficients logit

Une hausse d’une unité de $X_j$, les autres variables étant constantes :

- modifie le logarithme de la cote de $\beta_j$ ; et
- multiplie la cote par $e^{\beta_j}$.

Par exemple, si $\hat{\beta}_j=0.40$, la cote estimée est multipliée par

$$
e^{0.40}\approx1.49,
$$

soit une hausse d’environ 49 % de la cote — pas nécessairement une hausse de 49 % de la probabilité. La variation de probabilité dépend de la probabilité de départ et des valeurs de tous les prédicteurs.

## Estimation et évaluation du modèle

Les coefficients logit sont estimés par **maximum de vraisemblance (MV)** plutôt que par les MCO. Le MV choisit les coefficients qui rendent la plus probable la séquence observée de zéros et de uns.

### Log-vraisemblance

La log-vraisemblance pour des observations binaires indépendantes est

$$
\ell(\beta)
=
\sum_{i=1}^{n}
\left[Y_i\ln(p_i)+(1-Y_i)\ln(1-p_i)\right].
$$

Une log-vraisemblance maximisée plus élevée indique un meilleur ajustement en échantillon, pour des modèles estimés sur les mêmes observations et la même variable dépendante. Comme les log-vraisemblances sont en général négatives, « plus élevée » signifie le plus souvent **plus proche de zéro**.

### Pseudo-R²

Les mesures de pseudo-$R^2$ comparent le modèle ajusté à une référence, comme un modèle réduit à la constante. Elles ne s’interprètent pas comme une part de variation expliquée et ne sont pas directement comparables au $R^2$ des MCO.

### Test du rapport de vraisemblance

Le test du rapport de vraisemblance (LR) détermine si $q$ contraintes sur les coefficients sont conjointement compatibles avec les données. Il compare :

- un **modèle contraint**, estimé sous $H_0$ ; et
- un **modèle non contraint**, qui laisse varier les coefficients testés.

La statistique est

$$
LR
=
2(\ell_U-\ell_R),
$$

où $\ell_U$ et $\ell_R$ sont les log-vraisemblances maximisées. Comme le modèle non contraint s’ajuste au moins aussi bien, $\ell_U\ge\ell_R$ et $LR\ge0$.

Sous $H_0$ et les conditions de régularité habituelles,

$$
LR\overset{a}{\sim}\chi_q^2,
$$

où $q$ est le nombre de contraintes. On rejette $H_0$ pour une statistique LR suffisamment grande ou une $p$-valeur inférieure au seuil choisi.

#### Exemple résolu

Supposons que le modèle logit non contraint comprenne deux variables sectorielles testées conjointement, avec $\ell_U=-118$. Le modèle contraint les exclut et donne $\ell_R=-125$ :

$$
LR
=
2[-118-(-125)]
=14.
$$

Il y a $q=2$ contraintes. Au seuil de 5 %, la valeur critique du $\chi_2^2$ vaut environ 5,99. Comme $14>5{,}99$, on rejette l’hypothèse nulle : les deux variables sectorielles sont conjointement significatives.

Le test LR joue pour les modèles estimés par maximum de vraisemblance un rôle comparable à celui du [test F contraint](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test) pour les modèles MCO, même si leurs lois de référence et leurs cadres d’estimation diffèrent.

## Synthèse

| Tâche | Modèle ou diagnostic | Interprétation clé |
| --- | --- | --- |
| Repérer des valeurs de prédicteurs inhabituelles | Levier | Un levier élevé signifie un $X$ inhabituel, pas forcément de l’influence |
| Repérer des résultats inhabituels conditionnellement à $X$ | Résidu studentisé supprimé | Un grand $|t_i^*|$ signale une valeur aberrante potentielle |
| Mesurer l’influence globale | Distance de Cook | Combine taille du résidu et levier |
| Inclure un prédicteur catégoriel | $g-1$ indicatrices | Les coefficients s’interprètent par rapport à une catégorie de référence |
| Permettre des pentes propres à chaque groupe | Interaction avec une indicatrice | Le coefficient d’interaction est l’écart de pentes |
| Modéliser un résultat binaire | Logit | Les coefficients modifient le log de la cote ; $e^{\beta_j}$ est un rapport de cotes |
| Tester des contraintes dans un modèle logit | Test LR | Comparer les log-vraisemblances contrainte et non contrainte |

<style>
.influence-analysis-chart {
  display: block;
  width: 100%;
  height: 425px;
  margin: 22px 0 26px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 720px) {
  .influence-analysis-chart { height: 1250px; }
}
</style>
