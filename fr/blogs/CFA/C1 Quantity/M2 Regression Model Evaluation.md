---
title: Évaluation d’un modèle de régression
---

# Évaluer un modèle de régression multiple

L’évaluation d’un modèle répond à trois questions distinctes :

1. **Ajustement :** quelle part de la variation de l’échantillon le modèle explique-t-il ?
2. **Parcimonie :** l’amélioration de l’ajustement vaut-elle la complexité supplémentaire ?
3. **Inférence :** les variables prises individuellement, toutes ensemble ou en groupe choisi sont-elles statistiquement significatives ?

Ces questions sont liées, mais aucune ne prouve à elle seule qu’un modèle est correctement spécifié ou utile économiquement.

## Rappel : ajustement et décomposition de l’ANOVA

Les définitions et dérivations de $SST$, $SSR$, $SSE$, $MSE$, de l’erreur type d’estimation et de $R^2$ figurent dans [M1 : analyse de la variance](./M1%20Multiple%20Regression.md#analysis-of-variance).

Le test global selon lequel tous les coefficients de pente sont simultanément nuls figure dans [M1 : test F global](./M1%20Multiple%20Regression.md#overall-f-test).

> [!IMPORTANT]
> Un $R^2$ élevé signifie que le modèle explique une grande part de la **variation de l’échantillon** de la variable dépendante. Il n’établit pas la causalité, ne garantit pas de bonnes prévisions hors échantillon et ne montre pas que les hypothèses sont satisfaites.

## R² ajusté

Ajouter une variable indépendante ne peut pas faire baisser le $R^2$ ordinaire, même si la nouvelle variable n’apporte presque aucun pouvoir explicatif réel. Le $R^2$ ajusté introduit une pénalité liée au nombre de prédicteurs :

$$
\bar{R}^2
=
1-\left(\frac{n-1}{n-k-1}\right)(1-R^2),
$$

où :

- $n$ est le nombre d’observations ; et
- $k$ est le nombre de variables indépendantes, constante exclue.

Contrairement au $R^2$ ordinaire, le $R^2$ ajusté peut diminuer lorsqu’on ajoute un prédicteur inutile. Il peut même être négatif si, après pénalité de complexité, le modèle s’ajuste moins bien qu’un modèle réduit à la constante.

Pour comparer des modèles candidats, le $R^2$ ajusté n’a de sens que si les modèles utilisent **la même variable dépendante et le même échantillon d’estimation**. Toutes choses égales par ailleurs, la valeur la plus élevée est préférée.

## Critères d’information

Le $R^2$ ajusté n’est pas le seul moyen d’arbitrer entre ajustement et complexité. Les critères d’information ajoutent explicitement une pénalité à une mesure de la variation non expliquée.

### Critère d’information d’Akaike

Pour un modèle MCO, selon la convention retenue ici :

$$
AIC
=
n\ln\left(\frac{SSE}{n}\right)+2(k+1).
$$

Le premier terme récompense l’ajustement via un $SSE$ plus faible ; le second pénalise les $k$ pentes plus la constante. Parmi les modèles estimés sur la même variable dépendante et le même échantillon, **l’AIC le plus bas est préféré**.

### Critère d’information bayésien

$$
BIC
=
n\ln\left(\frac{SSE}{n}\right)+\ln(n)(k+1).
$$

Le BIC le plus bas est préféré. Lorsque $n>e^2\approx7{,}39$, la pénalité du BIC par paramètre, $\ln(n)$, dépasse celle de l’AIC, égale à $2$. Pour des tailles d’échantillon courantes, le BIC pénalise donc davantage les variables supplémentaires et tend à retenir des modèles plus parcimonieux.

> [!NOTE]
> La valeur absolue de l’AIC ou du BIC n’a guère de sens en soi. On l’utilise pour classer des modèles ajustés sur les mêmes observations et la même variable dépendante. Certaines sources ajoutent des constantes ou comptent la variance de l’erreur comme un paramètre ; appliquées de façon cohérente, ces conventions modifient le niveau affiché sans changer le classement.

## Rappel : significativité individuelle et globale

Le test d’un seul coefficient de pente par un test $t$ figure dans [M1 : tester un coefficient individuel](./M1%20Multiple%20Regression.md#testing-an-individual-coefficient).

Le test de nullité conjointe de tous les coefficients de pente figure dans [M1 : test F global](./M1%20Multiple%20Regression.md#overall-f-test).

À retenir :

- un coefficient individuellement significatif n’établit ni l’importance économique ni la causalité ;
- un test $F$ global significatif ne signifie pas que chaque coefficient l’est ; et
- ne pas rejeter une hypothèse nulle ne prouve pas qu’elle est vraie.

## Test F contraint {#restricted-f-test}

Un test $F$ contraint évalue si un **sous-ensemble de coefficients** satisfait un ensemble de contraintes conjointes. Exemple courant :

$$
H_0:\beta_2=\beta_3=0
\qquad\text{versus}\qquad
H_a:\text{at least one restriction is false}.
$$

On estime deux modèles emboîtés :

- le **modèle non contraint**, qui contient les $k$ variables indépendantes ; et
- le **modèle contraint**, qui impose les contraintes de l’hypothèse nulle — par exemple en excluant $X_2$ et $X_3$ lorsque leurs coefficients sont supposés nuls.

La statistique de test est

$$
F
=
\frac{(SSE_R-SSE_U)/q}{SSE_U/(n-k-1)},
$$

où :

- $SSE_R$ est la somme des carrés des erreurs du modèle contraint ;
- $SSE_U$ est celle du modèle non contraint ;
- $q$ est le nombre de contraintes indépendantes ;
- $k$ est le nombre de prédicteurs du modèle non contraint ; et
- les degrés de liberté sont $q$ et $n-k-1$.

Comme le modèle non contraint est plus flexible, $SSE_U\le SSE_R$. On rejette l’hypothèse nulle lorsque le $F$ calculé est suffisamment grand ou que sa $p$-valeur est inférieure au seuil choisi.

### Exemple résolu

Un analyste modélise des rendements d’actions avec quatre variables indépendantes et veut savoir si les deux dernières sont conjointement utiles :

$$
H_0:\beta_3=\beta_4=0.
$$

Les résultats de régression sont :

| Donnée | Valeur |
| --- | ---: |
| Nombre d’observations, $n$ | 100 |
| Prédicteurs du modèle non contraint, $k$ | 4 |
| Nombre de contraintes, $q$ | 2 |
| Somme des carrés des erreurs du modèle contraint, $SSE_R$ | 480 |
| Somme des carrés des erreurs du modèle non contraint, $SSE_U$ | 400 |

D’abord, mesurer la réduction de l’erreur par contrainte :

$$
\frac{SSE_R-SSE_U}{q}
=
\frac{480-400}{2}
=40.
$$

Ensuite, calculer l’erreur quadratique moyenne du modèle non contraint :

$$
\frac{SSE_U}{n-k-1}
=
\frac{400}{100-4-1}
=
\frac{400}{95}
\approx4.21.
$$

Donc,

$$
F
=
\frac{40}{4.21}
\approx9.50,
$$

avec $(2,95)$ degrés de liberté. Au seuil de 5 %, la valeur critique vaut environ $3{,}09$. Comme $9{,}50>3{,}09$, on rejette $H_0$ : les données indiquent que $X_3$ et $X_4$ sont **conjointement significatives**.

> [!NOTE]
> Cette conclusion n’implique pas que les deux coefficients soient significatifs individuellement. Le test $F$ contraint établit seulement qu’au moins une des deux contraintes est incompatible avec les données.

> [!TIP]
> Lorsque $q=1$, le test $F$ contraint équivaut au test bilatéral du coefficient correspondant : $F=t^2$.

## Liste de contrôle pour comparer des modèles

Avant de préférer un modèle à un autre, se demander :

1. Les modèles utilisent-ils la même variable dépendante et les mêmes observations ?
2. Le modèle plus complexe améliore-t-il assez le $R^2$ ajusté, l’AIC ou le BIC pour justifier les variables ajoutées ?
3. Les coefficients ajoutés sont-ils significatifs individuellement ou conjointement ?
4. Les signes et les ordres de grandeur sont-ils plausibles économiquement ?
5. Les diagnostics des résidus soutiennent-ils les hypothèses de la régression ? Voir [M1 : graphiques et contrôles de diagnostic](./M1%20Multiple%20Regression.md#diagnostic-plots-and-checks).
6. Le modèle fonctionne-t-il bien sur des données non utilisées pour l’estimation ?

Les statistiques d’ajustement aident à comparer des modèles ; elles ne remplacent ni le raisonnement économique, ni la vérification des hypothèses, ni la validation hors échantillon.
