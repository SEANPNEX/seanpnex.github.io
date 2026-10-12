---
title: Régression multiple
---

# Bases de la régression multiple et ses hypothèses

## Usages de la régression linéaire multiple

La régression linéaire multiple permet de :

- identifier et quantifier les relations entre variables ;
- tester des théories économiques ou financières, par exemple si plusieurs facteurs de risque expliquent les rendements ; et
- prévoir une variable dépendante à partir d’un ensemble de prédicteurs.

## Modèle de régression linéaire multiple

Pour l’observation $i$, un modèle à $k$ variables indépendantes s’écrit

$$
Y_i = \beta_0 + \beta_1X_{1i} + \beta_2X_{2i} + \cdots + \beta_kX_{ki} + \varepsilon_i.
$$

- $Y_i$ est la variable dépendante.
- $X_{ji}$ est la valeur de la variable indépendante $j$ pour l’observation $i$.
- $\beta_0$ est la constante et $\beta_j$ un coefficient de pente de la population.
- $\varepsilon_i$ est le terme d’erreur, non observé.

Le coefficient $\beta_j$ mesure la variation attendue de $Y$ pour une hausse d’une unité de $X_j$, **toutes les autres variables indépendantes étant maintenues constantes**.

## Hypothèses {#assumptions}

Les hypothèses classiques de la régression linéaire multiple sont :

1. **Linéarité dans les paramètres :** l’espérance conditionnelle de $Y$ est une fonction linéaire des coefficients. Une relation courbe peut tout de même être modélisée en ajoutant des variables transformées comme $X^2$.
2. **Espérance conditionnelle nulle (exogénéité) :** $E(\varepsilon_i\mid X_{1i},\ldots,X_{ki})=0$. Les prédicteurs ne doivent pas être systématiquement liés aux influences omises contenues dans le terme d’erreur.
3. **Homoscédasticité :** la variance conditionnelle du terme d’erreur est constante :
   $$
   \operatorname{Var}(\varepsilon_i\mid X)=\sigma^2.
   $$
4. **Indépendance des erreurs :** les termes d’erreur ne sont pas corrélés d’une observation à l’autre. Cette hypothèse compte particulièrement pour les séries temporelles, où une autocorrélation peut apparaître.
5. **Absence de multicolinéarité parfaite :** aucune variable indépendante n’est une combinaison linéaire exacte des autres. Une corrélation forte mais imparfaite ne viole pas cette hypothèse, même si elle peut gonfler les écarts-types.
6. **Normalité des erreurs pour l’inférence exacte en petit échantillon :** les erreurs suivent une loi normale conditionnellement à $X$. La normalité n’est pas nécessaire pour que les coefficients MCO soient sans biais, mais elle permet des tests $t$ et $F$ exacts en petit échantillon.

> [!IMPORTANT]
> Ces hypothèses portent sur les **termes d’erreur**, qui ne sont pas observables. En pratique, on examine les résidus estimés $e_i=Y_i-\hat{Y}_i$ à leur place.

### Graphiques et contrôles de diagnostic {#diagnostic-plots-and-checks}

<iframe
  class="lieflat-regression-chart"
  src="/charts/multiple-regression-diagnostics.html?lang=fr"
  title="Exemples interactifs de graphiques de diagnostic des résidus"
  loading="lazy"
></iframe>

| Hypothèse ou problème | Diagnostic utile | Ce qu’il faut regarder |
| --- | --- | --- |
| Linéarité | Résidus en fonction des valeurs ajustées ; graphiques de résidus partiels | Une bande horizontale aléatoire autour de zéro soutient la linéarité. Une courbure suggère une transformation, une interaction ou un terme non linéaire manquant. |
| Homoscédasticité | Résidus en fonction des valeurs ajustées | Une dispersion verticale à peu près constante soutient l’homoscédasticité. Une forme d’entonnoir ou d’éventail suggère de l’hétéroscédasticité. |
| Normalité | Graphique Q–Q normal des résidus | Des points proches de la droite de référence soutiennent la normalité. Des écarts systématiques dans les queues suggèrent une asymétrie, des queues épaisses ou des valeurs aberrantes. |
| Indépendance | Résidus dans l’ordre chronologique ; fonction d’autocorrélation ; test de Durbin–Watson | Des séquences, des cycles ou des grappes suggèrent une autocorrélation. |
| Multicolinéarité | Matrice de corrélation, facteur d’inflation de la variance (VIF) et tolérance $=1/\text{VIF}$ | Des VIF élevés indiquent une variance des coefficients gonflée. Les corrélations deux à deux peuvent manquer des relations impliquant plusieurs prédicteurs. |
| Valeurs aberrantes et influence | Résidus studentisés, effet de levier et distance de Cook | Examiner les observations qui combinent une valeur inhabituelle d’un prédicteur et un grand résidu, ou qui modifient sensiblement le modèle ajusté. |

#### Lire un graphique Q–Q normal

Un graphique Q–Q compare les résidus ordonnés aux quantiles attendus d’une loi normale :

- points proches d’une droite : la normalité des résidus est plausible ;
- forme en S : la distribution des résidus peut avoir des queues plus épaisses ou plus fines qu’une loi normale ;
- une queue qui s’écarte fortement de la droite : asymétrie possible ; et
- un ou deux points isolés loin de la droite : valeurs aberrantes possibles.

Un graphique Q–Q est un diagnostic, pas un test réussi/échoué. Avec un grand échantillon, même de petits écarts peuvent se voir alors que l’inférence asymptotique reste utile.

## Estimer le modèle par les MCO

Les moindres carrés ordinaires (MCO) choisissent les coefficients estimés qui minimisent la **somme des carrés des erreurs** :

$$
SSE=\sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2.
$$

La régression ajustée est

$$
\hat{Y}_i=\hat{\beta}_0+\hat{\beta}_1X_{1i}+\cdots+\hat{\beta}_kX_{ki}.
$$

Sous l’ensemble des hypothèses de Gauss–Markov — exogénéité, homoscédasticité, erreurs non corrélées et absence de multicolinéarité parfaite — les MCO sont le meilleur estimateur linéaire sans biais : ils ont la plus petite variance parmi les estimateurs linéaires sans biais.

## Tester un coefficient individuel {#testing-an-individual-coefficient}

Pour tester si la variable indépendante $j$ a un pouvoir explicatif une fois les autres prédicteurs pris en compte :

$$
H_0:\beta_j=0
\qquad\text{versus}\qquad
H_a:\beta_j\ne0.
$$

La statistique de test est

$$
t=\frac{\hat{\beta}_j-0}{SE(\hat{\beta}_j)},
\qquad df=n-k-1.
$$

Pour un test bilatéral au seuil $\alpha$, on rejette $H_0$ lorsque

$$
|t|>t_{\alpha/2,\,n-k-1},
$$

ou, de façon équivalente, lorsque la $p$-valeur est inférieure à $\alpha$. L’intervalle de confiance correspondant est

$$
\hat{\beta}_j\pm t_{\alpha/2,\,n-k-1}SE(\hat{\beta}_j).
$$

La significativité statistique n’établit pas à elle seule la causalité ni l’importance économique.

## Analyse de la variance {#analysis-of-variance}

La variation totale de $Y$ se décompose en

$$
\underbrace{\sum_{i=1}^{n}(Y_i-\bar{Y})^2}_{SST}
=
\underbrace{\sum_{i=1}^{n}(\hat{Y}_i-\bar{Y})^2}_{SSR}
+
\underbrace{\sum_{i=1}^{n}(Y_i-\hat{Y}_i)^2}_{SSE}.
$$

Ici, $SSR$ est la somme des carrés de la régression (variation expliquée) et $SSE$ la somme des carrés des erreurs (variation non expliquée).

| Source | Degrés de liberté | Somme des carrés | Carré moyen |
| --- | ---: | ---: | ---: |
| Régression | $k$ | $SSR$ | $MSR=SSR/k$ |
| Erreur | $n-k-1$ | $SSE$ | $MSE=SSE/(n-k-1)$ |
| Total | $n-1$ | $SST$ | — |

L’**écart-type de la régression** (aussi appelé erreur type d’estimation) est

$$
SEE=\sqrt{\frac{SSE}{n-k-1}}=\sqrt{MSE}.
$$

Le coefficient de détermination est

$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST},
\qquad 0\le R^2\le1
$$

lorsque le modèle comporte une constante. $R^2$ mesure la part de la variation de $Y$ dans l’échantillon expliquée par la régression ; il ne prouve pas que le modèle est correctement spécifié.

## Test F global {#overall-f-test}

Le test $F$ global demande si les variables indépendantes expliquent conjointement la variation de $Y$ :

$$
H_0:\beta_1=\beta_2=\cdots=\beta_k=0
$$

contre l’alternative selon laquelle au moins un coefficient de pente est non nul. La statistique de test est

$$
F=\frac{MSR}{MSE},
$$

avec $k$ et $n-k-1$ degrés de liberté. On rejette l’hypothèse nulle pour une statistique $F$ suffisamment grande ou une $p$-valeur inférieure au seuil choisi.

> [!TIP]
> Un test $F$ global significatif n’implique pas que chaque coefficient soit significatif. La multicolinéarité peut rendre les statistiques $t$ individuelles faibles même quand les prédicteurs sont utiles ensemble.

Le test global contraint **tous** les coefficients de pente à zéro. Pour tester si seul un groupe choisi de coefficients est conjointement nul, voir [M2 : test F contraint](./M2%20Regression%20Model%20Evaluation.md#restricted-f-test), avec un calcul détaillé.

<style>
.lieflat-regression-chart {
  display: block;
  width: 100%;
  height: 770px;
  margin: 24px 0 32px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 620px) {
  .lieflat-regression-chart { height: 1510px; }
}
</style>
