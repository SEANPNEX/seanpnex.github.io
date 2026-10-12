---
title: Erreurs de spécification
---

# Erreurs de spécification du modèle

Une régression est mal spécifiée lorsque son équation, ses variables ou la structure de ses erreurs ne représentent pas correctement la relation étudiée. Une mauvaise spécification peut biaiser les coefficients estimés, rendre les écarts-types peu fiables ou les prévisions instables.

Avant d’utiliser les tests ci-dessous, revoir les [hypothèses de la régression multiple et les diagnostics des résidus](./M1%20Multiple%20Regression.md#assumptions).

## Formes courantes de mauvaise spécification

| Problème | Exemple | Conséquence principale | Réponse possible |
| --- | --- | --- | --- |
| Variable pertinente omise | Expliquer les rendements par le bêta de marché en omettant un facteur sectoriel corrélé au bêta | Les coefficients inclus peuvent souffrir d’un biais de variable omise | Ajouter la variable ou un indicateur de substitution défendable ; adopter un protocole qui traite l’endogénéité |
| Variable non pertinente incluse | Ajouter un prédicteur sans relation réelle avec $Y$ | Les MCO restent sans biais sous les autres hypothèses, mais les estimations peuvent perdre en précision | La retirer lorsque la théorie et les données le justifient |
| Forme fonctionnelle incorrecte | Modéliser une relation courbe comme purement linéaire | Prévisions biaisées ou systématiquement fausses ; résidus structurés | Transformer les variables ou ajouter des termes polynomiaux et d’interaction |
| Définition ou échelle de variable incorrecte | Utiliser des pourcentages en nombres entiers à un endroit et en décimales à un autre | Coefficients mal interprétés ou problèmes numériques ; un simple changement d’échelle ne modifie ni l’ajustement ni la significativité | Utiliser des unités cohérentes et interpréter les coefficients dans ces unités |
| Regroupement de données inapproprié | Mélanger des entreprises, pays ou périodes ayant des constantes ou des pentes différentes | Différences structurelles cachées et coefficients instables | Utiliser des variables indicatrices, des interactions, des méthodes de panel ou des modèles séparés |
| Variable explicative endogène | Un prédicteur est déterminé conjointement avec $Y$ ou mesuré avec erreur | $E(\varepsilon\mid X)\ne0$, d’où des estimations MCO biaisées et non convergentes | Améliorer le protocole ; si c’est justifié, utiliser des variables instrumentales ou un autre estimateur approprié |

> [!NOTE]
> Des résidus inhabituels n’identifient pas automatiquement la cause. Un motif de résidus courbe, par exemple, peut traduire une variable omise, une transformation incorrecte ou un regroupement inapproprié. Les diagnostics indiquent où chercher ; le raisonnement économique décide de la révision du modèle.

### Biais de variable omise

Omettre une variable biaise un coefficient de pente inclus lorsque deux conditions sont réunies :

1. la variable omise influence la variable dépendante ; et
2. la variable omise est corrélée au prédicteur inclus.

Si une variable pertinente omise n’est pas corrélée aux prédicteurs inclus, elle augmente la variance non expliquée mais ne crée pas le biais de variable omise habituel dans leurs pentes estimées.

### Vérifier la forme fonctionnelle et le regroupement

- Un graphique des résidus en fonction des valeurs ajustées peut révéler une courbure ou une variance changeante. Voir [M1 : graphiques et contrôles de diagnostic](./M1%20Multiple%20Regression.md#diagnostic-plots-and-checks).
- Le test RESET de Ramsey détecte les problèmes généraux de forme fonctionnelle, mais un rejet n’indique pas quel terme manque.
- Un test $F$ contraint permet de juger si un groupe de termes polynomiaux, de termes d’interaction ou d’indicatrices de groupe est conjointement significatif. Voir [M2 : test F contraint](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test).
- Le test de Chow est un test $F$ contraint pour un point de rupture structurelle connu, sous réserve que les hypothèses requises tiennent.

## Problèmes de variance et de dépendance des erreurs

L’hétéroscédasticité et l’autocorrélation concernent la structure de covariance des erreurs. Sous l’hypothèse d’exogénéité, elles ne biaisent pas à elles seules les pentes MCO, mais les écarts-types MCO usuels sont en général invalides et les MCO ne sont plus efficaces.

### Hétéroscédasticité {#heteroskedasticity}

Il y a hétéroscédasticité lorsque la variance conditionnelle de l’erreur n’est pas constante :

$$
\operatorname{Var}(\varepsilon_i\mid X_i)\ne\sigma^2.
$$

- **Hétéroscédasticité inconditionnelle :** la variance varie pour des raisons sans lien systématique avec les variables explicatives. Dans le traitement du CFA, elle ne pose généralement pas de problème d’inférence majeur.
- **Hétéroscédasticité conditionnelle :** la variance de l’erreur est systématiquement liée aux variables explicatives. Les écarts-types MCO usuels deviennent peu fiables.

En présence d’hétéroscédasticité conditionnelle, les coefficients MCO ne restent sans biais que si l’exogénéité et les autres hypothèses requises tiennent toujours. Les écarts-types usuels de $\hat{b_j}$ peuvent être trop petits ou trop grands ; le plus souvent, ils sont **sous-estimés**.

S’ils sont sous-estimés, les statistiques $t$ $\frac{\hat{b_j}-b_{jH}}{s_{\hat{b_j}}}$ sont gonflées et les erreurs de **première espèce** deviennent plus probables.

#### Test de Breusch–Pagan

Les hypothèses sont

$$
H_0:\text{the errors are homoskedastic}
\qquad\text{versus}\qquad
H_a:\text{the error variance depends on at least one predictor}.
$$

Après avoir estimé la régression initiale, on régresse les carrés des résidus MCO sur les $k$ variables explicatives :

$$
\hat{\varepsilon}_i^2
=
\alpha_0+\alpha_1X_{1i}+\cdots+\alpha_kX_{ki}+v_i.
$$

À partir du coefficient de détermination de cette régression auxiliaire, la statistique du multiplicateur de Lagrange est

$$
LM=nR_{\text{aux}}^2\sim\chi_k^2
$$

asymptotiquement sous l’hypothèse nulle. Une statistique suffisamment grande, ou une petite $p$-valeur, plaide pour une hétéroscédasticité conditionnelle.

> [!Note]
>
> L’hypothèse nulle est l’**absence** d’hétéroscédasticité

#### Réponses

- Utiliser des **écarts-types robustes à l’hétéroscédasticité** lorsque les coefficients estimés restent appropriés mais que l’inférence doit être corrigée.
- Utiliser les moindres carrés pondérés ou les **moindres carrés généralisés** lorsque la structure de variance peut être modélisée de façon crédible.
- Réexaminer la forme fonctionnelle, car l’hétéroscédasticité peut aussi signaler une transformation manquante ou une variable omise.

Les écarts-types robustes modifient les écarts-types estimés — pas les coefficients MCO ni les valeurs ajustées.

### Autocorrélation {#serial-correlation}

Il y a autocorrélation lorsque les termes d’erreur de périodes différentes sont corrélés :

$$
\operatorname{Cov}(\varepsilon_t,\varepsilon_{t-j})\ne0.
$$

Une autocorrélation positive d’ordre 1 signifie qu’une erreur positive tend à être suivie d’une autre erreur positive ; une autocorrélation négative produit des changements de signe plus fréquents.

- **Autocorrélation positive ($\rho>0$) :** les résidus adjacents tendent à se ressembler. Les résidus positifs se regroupent avec des résidus positifs et les négatifs avec des négatifs, d’où des séquences persistantes au-dessus ou au-dessous de zéro.
- **Autocorrélation négative ($\rho<0$) :** les résidus adjacents tendent à aller en sens opposé. Un résidu positif a plus de chances d’être suivi d’un résidu négatif, d’où un motif alterné en zigzag autour de zéro.

<iframe
  class="serial-correlation-chart"
  src="/charts/serial-correlation-patterns.html?lang=fr"
  title="Motifs d’autocorrélation positive et négative"
  loading="lazy"
></iframe>

La figure montre des motifs caractéristiques, pas une preuve formelle. Des données aléatoires peuvent produire par hasard de courtes séquences ou des inversions ; il faut donc utiliser un test comme Durbin–Watson ou Breusch–Godfrey avant de conclure à une autocorrélation.

Sous exogénéité stricte, les pentes MCO peuvent rester sans biais, mais elles sont inefficaces et les écarts-types usuels ne sont pas fiables. Une **autocorrélation positive** conduit souvent à **sous-estimer** les écarts-types, et inversement, mais ce n’est pas une règle universelle pour chaque coefficient ou modèle. Lorsqu’une variable dépendante retardée est incluse, l’autocorrélation peut aussi rendre les coefficients MCO non convergents.

#### Statistique de Durbin–Watson

$$
DW
=
\frac{\sum_{t=2}^{n}(\hat{\varepsilon}_t-\hat{\varepsilon}_{t-1})^2}
{\sum_{t=1}^{n}\hat{\varepsilon}_t^2},
\qquad 0\le DW\le4.
$$

En première lecture :

- $DW\approx2$ : peu d’indices d’autocorrélation d’ordre 1 ;
- $DW<2$ : autocorrélation positive ; et
- $DW>2$ : autocorrélation négative.

Le test formel utilise des bornes critiques inférieure et supérieure et peut être non concluant. Il est conçu pour la corrélation d’ordre 1 et n’est pas valide sous sa forme standard lorsqu’une variable dépendante retardée figure parmi les régresseurs.

#### Test de Breusch–Godfrey {#breuschgodfrey-test}

Le test de Breusch–Godfrey examine l’autocorrélation jusqu’à l’ordre $p$. On estime la régression auxiliaire

$$
\hat{\varepsilon}_t
=
\alpha_0+\alpha_1X_{1t}+\cdots+\alpha_kX_{kt}
+\rho_1\hat{\varepsilon}_{t-1}+\cdots
+\rho_p\hat{\varepsilon}_{t-p}+v_t.
$$

Les hypothèses sont

$$
H_0:\rho_1=\rho_2=\cdots=\rho_p=0
$$

contre l’alternative selon laquelle au moins un $\rho_j$ est non nul.

Les régresseurs initiaux $X_{1t},\ldots,X_{kt}$ restent dans la régression auxiliaire pour que le test pose une question précise : **une fois contrôlées les variables du modèle initial, les résidus retardés expliquent-ils encore le résidu courant ?** Sous $H_0$, ils ne le devraient pas.

::: details Complément conceptuel : comprendre la statistique LM (hors programme d’examen)

> [!NOTE]
> Cette dérivation sert uniquement à forger l’intuition. Elle est **hors du périmètre de révision de l’examen** ; concentrez-vous sur les hypothèses de Breusch–Godfrey, la régression auxiliaire et la procédure du test $F$ ci-dessous.

La version LM utilise

$$
LM=n_{\text{aux}}R_{\text{aux}}^2,
$$

où :

- $R_{\text{aux}}^2$ est le $R^2$ de la régression auxiliaire des résidus courants sur les régresseurs initiaux et $p$ résidus retardés ; et
- $n_{\text{aux}}$ est le nombre d’observations utilisables dans cette régression auxiliaire. Les $p$ premières observations sont normalement perdues, faute de retards de résidus disponibles. Certains ouvrages notent simplement ce nombre $n$.

La logique est la suivante :

1. Si $H_0$ est vraie, les résidus retardés n’ajoutent presque aucun pouvoir explicatif, donc $R_{\text{aux}}^2$ doit être proche de zéro.
2. Si les résidus sont autocorrélés, les résidus retardés aident à expliquer le résidu courant, ce qui augmente $R_{\text{aux}}^2$.
3. Multiplier par la taille de l’échantillon transforme cette part expliquée en statistique du multiplicateur de Lagrange. Cette mise à l’échelle compte, car même un $R^2$ modeste peut constituer une preuve solide dans un grand échantillon.

Sous $H_0$ et avec un échantillon suffisamment grand,

$$
LM=n_{\text{aux}}R_{\text{aux}}^2
\overset{a}{\sim}\chi_p^2.
$$

La notation $\overset{a}{\sim}$ signifie **suit approximativement en grand échantillon**. Les degrés de liberté du khi-deux valent $p$ parce que l’hypothèse nulle impose $p$ contraintes :

$$
\rho_1=0,\ldots,\rho_p=0.
$$

On rejette $H_0$ lorsque la statistique LM dépasse la valeur critique du $\chi_p^2$ correspondant ou lorsque sa $p$-valeur est inférieure au seuil choisi.

#### Exemple

Supposons un test de Breusch–Godfrey d’ordre 2 utilisant $p=2$ résidus retardés. La régression auxiliaire compte 120 observations utilisables et donne $R_{\text{aux}}^2=0.08$ :

$$
LM=120(0.08)=9.60.
$$

Au seuil de 5 %, la valeur critique du $\chi_2^2$ vaut environ $5{,}99$. Comme

$$
9.60>5.99,
$$

on rejette $H_0$. Les résidus présentent des signes d’autocorrélation au retard 1, au retard 2 ou aux deux. Le test n’identifie pas le retard en cause ; les coefficients individuels de la régression auxiliaire et le profil d’autocorrélation des résidus aident à le diagnostiquer ensuite.

:::

##### Version test F

Le test $F$ demande si les coefficients des $p$ résidus retardés sont conjointement nuls. Il compare deux régressions auxiliaires emboîtées :

- **Régression auxiliaire contrainte :** inclut les régresseurs initiaux mais exclut tous les résidus retardés, ce qui impose $\rho_1=\cdots=\rho_p=0$.
- **Régression auxiliaire non contrainte :** inclut les régresseurs initiaux et les $p$ résidus retardés.

La statistique est

$$
F
=
\frac{(SSE_R-SSE_U)/p}
{SSE_U/(n_{\text{aux}}-k-p-1)},
$$

où :

- $SSE_R$ est la somme des carrés des erreurs de la régression auxiliaire contrainte ;
- $SSE_U$ est celle de la régression auxiliaire non contrainte ;
- $p$ est à la fois le nombre de retards de résidus et le nombre de contraintes ;
- $k$ est le nombre de variables explicatives initiales, constante exclue ; et
- $n_{\text{aux}}$ est le nombre d’observations utilisables après création des retards de résidus.

Sous $H_0$, la statistique suit une loi $F$ avec

$$
df_1=p
\qquad\text{and}\qquad
df_2=n_{\text{aux}}-k-p-1.
$$

Le numérateur mesure la réduction de la variation non expliquée obtenue en ajoutant les résidus retardés, par contrainte. Le dénominateur est l’erreur quadratique moyenne de la régression auxiliaire non contrainte. Si l’ajout des résidus retardés réduit nettement $SSE$ par rapport au bruit d’estimation ordinaire, la statistique $F$ sera grande.

On rejette $H_0$ lorsque le $F$ calculé dépasse la valeur critique ou que sa $p$-valeur est inférieure au seuil choisi. Le rejet indique une autocorrélation à un ou plusieurs des retards testés ; il ne signifie pas que chaque $\rho_j$ est individuellement non nul.

###### Exemple résolu

Supposons que les régressions auxiliaires donnent :

| Donnée | Valeur |
| --- | ---: |
| Observations utilisables, $n_{\text{aux}}$ | 120 |
| Prédicteurs initiaux, $k$ | 3 |
| Retards de résidus testés, $p$ | 2 |
| Somme des carrés des erreurs contrainte, $SSE_R$ | 110 |
| Somme des carrés des erreurs non contrainte, $SSE_U$ | 96 |

L’amélioration par contrainte est

$$
\frac{SSE_R-SSE_U}{p}
=
\frac{110-96}{2}
=7.
$$

L’erreur quadratique moyenne non contrainte est

$$
\frac{SSE_U}{n_{\text{aux}}-k-p-1}
=
\frac{96}{120-3-2-1}
=
\frac{96}{114}
\approx0.842.
$$

Donc,

$$
F
=
\frac{7}{0.842}
\approx8.31,
$$

avec $(2,114)$ degrés de liberté. La valeur critique à 5 % vaut environ $3{,}08$. Comme $8{,}31>3{,}08$, on rejette $H_0$ et on conclut que les résidus présentent une autocorrélation au retard 1, au retard 2 ou aux deux.

C’est la même logique de modèles emboîtés que dans [M2 : test F contraint](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test). La différence tient à l’application : ici, les contraintes portent spécifiquement sur les coefficients des résidus retardés de la régression auxiliaire de Breusch–Godfrey.

#### Réponses

- Utiliser des écarts-types robustes à l’hétéroscédasticité et à l’autocorrélation, comme ceux de Newey–West, lorsque le problème principal est l’inférence.
- Modéliser explicitement la dynamique de la série en ajoutant des retards justifiés ou toute autre structure manquante.
- Utiliser les moindres carrés généralisés lorsqu’un processus d’erreur approprié peut être spécifié.

Les écarts-types de Newey–West corrigent l’inférence ; ils ne suppriment pas l’autocorrélation des résidus et ne modifient pas les coefficients MCO.

## Multicolinéarité {#multicollinearity}

La multicolinéarité signifie que deux variables explicatives ou plus sont fortement liées linéairement. Une multicolinéarité **parfaite** empêche l’estimation par les MCO. Une multicolinéarité forte mais imparfaite ne viole pas l’exogénéité et ne biaise pas les coefficients MCO, mais elle rend imprécises les estimations concernées.

Symptômes typiques :

- de grands écarts-types des coefficients et de faibles statistiques $t$ en valeur absolue (erreur de deuxième espèce) ;
- des coefficients dont l’ampleur ou le signe varie quand on ajoute ou retire des variables ; et
- un test $F$ global significatif malgré peu de coefficients individuellement significatifs.

Ce n’est pas la même chose qu’une autocorrélation négative. L’autocorrélation concerne les relations entre erreurs ; la multicolinéarité, les relations entre prédicteurs.

### Facteur d’inflation de la variance

Pour le prédicteur $X_j$, on le régresse sur tous les autres prédicteurs et on obtient $R_j^2$. Alors

$$
VIF_j
=
\frac{1}{1-R_j^2}.
$$

- $VIF_j=1$ signifie que $X_j$ n’a aucune relation linéaire avec les autres prédicteurs.
- Des valeurs plus élevées indiquent une plus forte inflation de $\operatorname{Var}(\hat{\beta}_j)$.
- Des seuils comme 5 ou 10 sont des règles d’alerte, pas des seuils de test d’hypothèse formels.

### Réponses

- Ne rien faire lorsque le but du modèle est la prévision et que les performances hors échantillon restent bonnes.
- Collecter des données plus informatives lorsque c’est possible ; augmenter simplement la taille de l’échantillon n’élimine pas une relation presque déterministe entre prédicteurs.
- Combiner ou reparamétrer les variables qui mesurent le même concept sous-jacent.
- Ne retirer un prédicteur redondant que si la théorie le justifie ; supprimer une variable pertinente peut créer un biais de variable omise.

## Synthèse

| Problème | Coefficients MCO | Écarts-types usuels | Diagnostic central |
| --- | --- | --- | --- |
| Variable pertinente omise corrélée aux $X$ inclus | Biaisés et non convergents | Non fiables | Théorie, motifs des résidus, tests de spécification |
| Hétéroscédasticité conditionnelle sous exogénéité | Sans biais mais inefficaces | Non convergents | Graphique des résidus, test de Breusch–Pagan |
| Autocorrélation sous exogénéité stricte | Sans biais mais inefficaces | En général non convergents | Résidus dans l’ordre chronologique, Durbin–Watson, Breusch–Godfrey |
| Multicolinéarité forte mais imparfaite | Sans biais | Correctement estimés mais élevés | VIF, instabilité des coefficients |

Le remède doit correspondre au problème : les écarts-types robustes réparent l’inférence en cas d’hétéroscédasticité, mais pas un biais de variable omise, une forme fonctionnelle incorrecte ni l’endogénéité.

<style>
.serial-correlation-chart {
  display: block;
  width: 100%;
  height: 500px;
  margin: 22px 0 28px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 620px) {
  .serial-correlation-chart { height: 830px; }
}
</style>
