---
title: Séries temporelles
---

# Modèles de séries temporelles

Une série temporelle est une suite d’observations indexées dans le temps. Contrairement aux observations en coupe transversale, des valeurs proches peuvent être dépendantes, la moyenne peut suivre une tendance et la volatilité peut se regrouper. Un modèle de série temporelle utile doit traiter ces caractéristiques avant que ses tests de coefficients et ses prévisions ne soient fiables.

## Modèles à tendance déterministe

Les modèles de tendance utilisent le temps lui-même comme variable explicative. Ils conviennent lorsque la série évolue autour d’un sentier déterministe stable et que les erreurs restantes ne sont pas autocorrélées.

### Tendance linéaire

$$
Y_t=\beta_0+\beta_1t+\varepsilon_t.
$$

La pente $\beta_1$ est la **variation absolue attendue par période**. Par exemple, $\beta_1=3$ signifie que la série augmente d’environ trois unités par période.

### Tendance log-linéaire

Lorsqu’une série croît à un taux à peu près constant en pourcentage, on modélise son logarithme :

$$
\ln(Y_t)=\beta_0+\beta_1t+\varepsilon_t.
$$

De façon équivalente,

$$
Y_t=\exp(\beta_0+\beta_1t+\varepsilon_t).
$$

Le taux de croissance en capitalisation continue est $\beta_1$. Le taux de croissance exact par période est

$$
g=e^{\beta_1}-1,
$$

qui vaut approximativement $\beta_1$ lorsque $\beta_1$ est petit.

> [!IMPORTANT]
> Un bon ajustement visuel de la tendance ne suffit pas. Si les résidus du modèle de tendance sont autocorrélés, l’inférence MCO usuelle n’est pas fiable et la série contient encore une dynamique prévisible. Voir [M3 : autocorrélation](./M3%20Model%20Misspecification.md#serial-correlation).

## Stationnarité en covariance

De nombreux modèles de séries temporelles exigent la stationnarité en covariance. Une série $Y_t$ est stationnaire en covariance lorsque :

1. son espérance est finie et constante dans le temps :
   $$E(Y_t)=\mu;$$
2. sa variance est finie et constante dans le temps :
   $$\operatorname{Var}(Y_t)=\sigma^2;$$
3. sa covariance avec une valeur retardée ne dépend que du retard $j$, et non de la date :
   $$
   \operatorname{Cov}(Y_t,Y_{t-j})=\gamma_j.
   $$

Une tendance déterministe à la hausse viole la condition de moyenne constante. Un processus à racine unitaire n’est pas non plus stationnaire en covariance, car les chocs ont des effets permanents et sa variance change en général au fil du temps.

## Modèles autorégressifs

Un modèle autorégressif utilise des valeurs retardées de la variable dépendante comme prédicteurs :

$$
AR(p):\quad
Y_t
=
\beta_0+\phi_1Y_{t-1}+\cdots+\phi_pY_{t-p}+\varepsilon_t.
$$

L’erreur $\varepsilon_t$ doit être un bruit blanc : moyenne nulle, variance constante et absence d’autocorrélation.

### Modèle AR(1) et retour à la moyenne

Pour

$$
Y_t=\beta_0+\phi Y_{t-1}+\varepsilon_t,
$$

le processus est stationnaire en covariance lorsque

$$
|\phi|<1.
$$

Son niveau de long terme, ou niveau de retour à la moyenne, est

$$
\mu=\frac{\beta_0}{1-\phi}.
$$

Le modèle peut se réécrire

$$
Y_t-\mu=\phi(Y_{t-1}-\mu)+\varepsilon_t.
$$

Cette forme rend la dynamique lisible :

- $0<\phi<1$ : les écarts s’atténuent progressivement en gardant le même signe ;
- $-1<\phi<0$ : les écarts s’atténuent en alternant autour de la moyenne ; et
- un $\phi$ proche de 1 implique un retour à la moyenne très lent.

### Prévisions AR

La prévision AR(1) à un pas faite en $t$ est

$$
\hat{Y}_{t+1\mid t}
=
\hat{\beta}_0+\hat{\phi}Y_t.
$$

Les prévisions à plus long horizon s’obtiennent de manière récursive. Pour un AR(1) stationnaire, elles convergent vers $\hat\mu=\hat\beta_0/(1-\hat\phi)$ à mesure que l’horizon s’allonge.

## Autocorrélation et adéquation du modèle

L’autocorrélation au retard $j$ est

$$
\rho_j
=
\operatorname{Corr}(Y_t,Y_{t-j}).
$$

Un graphique de la fonction d’autocorrélation (ACF) affiche les autocorrélations empiriques $\hat\rho_j$ sur plusieurs retards. En supposant que les observations forment un bruit blanc, l’écart-type d’une autocorrélation empirique est approximativement

$$
SE(\hat\rho_j)\approx\frac{1}{\sqrt{T}}.
$$

Les bornes approximatives à 5 % sont donc

$$
\pm\frac{1.96}{\sqrt{T}}.
$$

Les autocorrélations hors de ces bornes sont un indice — pas une preuve — de dépendance à ce retard. Examiner de nombreux retards pose un problème de comparaisons multiples ; le profil d’ensemble et les tests conjoints comptent donc aussi.

### Fonction d’autocorrélation partielle

La **fonction d’autocorrélation partielle (PACF)** au retard $j$ mesure la corrélation entre $Y_t$ et $Y_{t-j}$ après avoir contrôlé les retards $1$ à $j-1$. Elle isole ainsi la contribution directe du retard $j$, alors que l’ACF inclut à la fois la dépendance directe et la dépendance indirecte transmise par les retards plus courts.

L’ACF et la PACF fournissent des indices utiles sur l’ordre du modèle :

| Processus | ACF | PACF |
| --- | --- | --- |
| AR($p$) | Décroît progressivement | S’annule après le retard $p$ |
| MA($q$) | S’annule après le retard $q$ | Décroît progressivement |
| ARMA($p,q$) | Décroît | Décroît |

<iframe
  class="acf-pacf-chart"
  src="/charts/acf-pacf-patterns.html?lang=fr"
  title="Profils ACF et PACF illustratifs pour des modèles AR(1) et MA(1)"
  loading="lazy"
></iframe>

Ici, **s’annule** décrit la fonction de population : les corrélations au-delà de l’ordre pertinent sont théoriquement nulles. Dans un échantillon fini, les estimations au-delà de ce seuil fluctuent généralement autour de zéro ; il faut donc s’appuyer sur les bornes de confiance et le profil d’ensemble plutôt que d’attendre des zéros exacts.

Après avoir ajusté un modèle AR, examiner l’ACF des **résidus**. Une autocorrélation significative des résidus indique que le modèle n’a pas capté toute la dépendance temporelle. Le test de Breusch–Godfrey permet de tester plusieurs retards de résidus conjointement ; voir [M3 : test de Breusch–Godfrey](./M3%20Model%20Misspecification.md#breuschgodfrey-test).

> [!NOTE]
> Le test de Durbin–Watson standard ne convient pas lorsqu’une variable dépendante retardée figure parmi les prédicteurs. Pour un modèle AR, utiliser les autocorrélations des résidus ou un test de Breusch–Godfrey adapté.

## Modèles à moyenne mobile et ARIMA

### Modèle à moyenne mobile

Un modèle $MA(q)$ utilise les chocs de bruit blanc courants et retardés :

$$
MA(q):\quad
Y_t
=
\mu+\varepsilon_t
+\theta_1\varepsilon_{t-1}
+\cdots
+\theta_q\varepsilon_{t-q}.
$$

Pour un processus $MA(q)$ théorique, les autocorrélations sont nulles au-delà du retard $q$. Dans un échantillon fini, les autocorrélations estimées au-delà de $q$ ne seront pas exactement nulles, mais devraient être statistiquement indiscernables de zéro.

### ARMA et ARIMA

- **ARMA$(p,q)$** combine $p$ termes autorégressifs et $q$ termes de moyenne mobile pour une série stationnaire.
- **ARIMA$(p,d,q)$** différencie $d$ fois une série non stationnaire pour la rendre stationnaire, puis modélise la série différenciée par une structure ARMA$(p,q)$.

Combiner simplement des termes AR et MA produit donc un modèle **ARMA**. Il ne devient ARIMA que lorsque l’intégration — représentée par la différenciation — est incluse.

## Saisonnalité

La saisonnalité est un motif récurrent à une fréquence calendaire fixe, comme les pics mensuels du commerce de détail ou les paiements d’impôts trimestriels. Elle diffère d’une tendance ordinaire parce qu’elle se répète au sein d’un cycle plus large.

Traitements possibles :

- des indicatrices saisonnières ;
- des retards autorégressifs saisonniers, comme $Y_{t-12}$ pour des données mensuelles ;
- une différenciation saisonnière, comme $Y_t-Y_{t-12}$ ; et
- des modèles combinant des termes AR ou MA réguliers et saisonniers.

Le traitement doit correspondre au motif. Ajouter un retard saisonnier n’est pas la seule réponse possible.

## Racines unitaires et marches aléatoires

### Marche aléatoire

Lorsque $\phi=1$, l’équation AR(1) devient

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t.
$$

- Si $\beta_0=0$, c’est une marche aléatoire.
- Si $\beta_0\ne0$, c’est une marche aléatoire avec dérive.

Le processus a une **racine unitaire**. Les chocs ont des effets permanents et le niveau de la série n’est pas stationnaire en covariance. Régresser l’une sur l’autre des séries à racine unitaire sans lien entre elles peut produire un $R^2$ élevé et des statistiques $t$ significatives même en l’absence de toute relation réelle — c’est une régression fallacieuse.

### Test de Dickey–Fuller

On soustrait $Y_{t-1}$ des deux côtés du modèle AR(1) :

$$
\Delta Y_t
=
\beta_0+\gamma Y_{t-1}+\varepsilon_t,
\qquad
\gamma=\phi-1.
$$

Les hypothèses sont

$$
H_0:\gamma=0
\quad\text{(unit root)}
$$

contre

$$
H_a:\gamma<0
\quad\text{(stationary alternative)}.
$$

Les valeurs critiques usuelles du $t$ de Student ne sont pas valides sous l’hypothèse nulle de racine unitaire. La statistique de Dickey–Fuller suit une loi non standard avec des valeurs critiques spécifiques. On rejette l’hypothèse de racine unitaire lorsque la statistique est suffisamment négative — inférieure à la valeur critique de Dickey–Fuller pertinente.

L’équation de test doit être spécifiée en cohérence avec le processus générateur des données : sans terme déterministe, avec une constante, ou avec une constante et une tendance temporelle. Le test de Dickey–Fuller augmenté ajoute des différences retardées pour absorber l’autocorrélation d’ordre supérieur.

### Différence première

Pour une marche aléatoire avec dérive,

$$
Y_t=\beta_0+Y_{t-1}+\varepsilon_t,
$$

la différence première donne

$$
\Delta Y_t=Y_t-Y_{t-1}=\beta_0+\varepsilon_t.
$$

Seule une marche aléatoire **sans** dérive se réduit à $\Delta Y_t=\varepsilon_t$. La différenciation peut stabiliser une série à racine unitaire, mais une différenciation inutile peut introduire un bruit évitable et un comportement de moyenne mobile.

## Hétéroscédasticité conditionnelle

Les séries de rendements financiers peuvent présenter peu d’autocorrélation dans leurs niveaux, mais une forte autocorrélation de leurs **résidus au carré**. C’est le regroupement de volatilité : les périodes de forte volatilité tendent à suivre des périodes de forte volatilité.

### Modèle ARCH

Un modèle ARCH$(q)$ spécifie la variance conditionnelle de l’erreur comme

$$
\sigma_t^2
=
\alpha_0
+\alpha_1\varepsilon_{t-1}^2
+\cdots
+\alpha_q\varepsilon_{t-q}^2,
$$

avec des contraintes comme $\alpha_0>0$ et $\alpha_j\ge0$ pour garder une variance positive.

L’erreur d’observation peut s’écrire

$$
\varepsilon_t=\sigma_tz_t,
$$

où $z_t$ est un choc de bruit blanc standardisé. ARCH modélise la **variance conditionnelle**, pas l’espérance conditionnelle.

### Modèle GARCH

Un modèle GARCH$(p,q)$ ajoute les variances conditionnelles retardées :

$$
\sigma_t^2
=
\alpha_0
+\sum_{i=1}^{q}\alpha_i\varepsilon_{t-i}^2
+\sum_{j=1}^{p}\beta_j\sigma_{t-j}^2.
$$

GARCH capte une volatilité persistante de façon plus parcimonieuse qu’un modèle ARCH d’ordre élevé. Les modèles ARCH et GARCH sont en général estimés par maximum de vraisemblance — pas automatiquement par les moindres carrés généralisés.

Pour détecter des effets ARCH, examiner l’ACF des résidus au carré ou utiliser un test ARCH LM. Si la dynamique de la volatilité compte pour la prévision ou la mesure du risque, modéliser explicitement la variance conditionnelle. Si seule l’inférence sur les coefficients est nécessaire, des écarts-types robustes à l’hétéroscédasticité peuvent parfois suffire ; voir [M3 : hétéroscédasticité](./M3%20Model%20Misspecification.md#heteroskedasticity).

## Séries multiples et cointégration

Régresser une série non stationnaire sur une autre peut créer une relation fallacieuse. L’exception essentielle est la **cointégration**.

Deux séries à racine unitaire sont cointégrées lorsqu’une combinaison linéaire de ces séries est stationnaire. Économiquement, elles peuvent errer chacune de leur côté tout en partageant une relation d’équilibre de long terme stable.

### Procédure d’Engle–Granger

Pour deux séries candidates :

1. Tester la présence d’une racine unitaire dans chaque série.
2. Si les deux sont intégrées du même ordre, estimer en niveaux la relation de long terme envisagée :
   $$
   Y_t=\beta_0+\beta_1X_t+u_t.
   $$
3. Appliquer à $\hat u_t$ un test de racine unitaire d’Engle–Granger fondé sur les résidus.
4. Utiliser les valeurs critiques d’Engle–Granger, différentes des valeurs critiques de Dickey–Fuller ordinaires parce que les résidus sont estimés.

Si les résidus sont stationnaires, les séries sont cointégrées et la régression en niveaux représente une relation de long terme. Si les résidus gardent une racine unitaire, la régression en niveaux est probablement fallacieuse et les séries doivent en général être transformées, par exemple par différenciation.

> [!IMPORTANT]
> La cointégration ne signifie pas que chaque série prise isolément est stationnaire. Elle signifie qu’une combinaison linéaire particulière des séries non stationnaires est stationnaire.

## Démarche de choix du modèle

<iframe
  class="time-series-workflow"
  src="/charts/time-series-model-selection.html?lang=fr"
  title="Démarche interactive de choix d’un modèle de série temporelle"
  loading="lazy"
></iframe>

> [!IMPORTANT]
> Une racine unitaire n’exclut **pas** un ARIMA. Elle exclut d’ajuster directement un modèle AR, MA ou ARMA stationnaire sur le niveau non stationnaire. Un modèle ARIMA($p,d,q$) ne convient que si différencier la série $d$ fois produit un processus ARMA($p,q$) stationnaire.

Pour une régression portant sur plusieurs séries non stationnaires, tester la cointégration avant d’interpréter une relation en niveaux.

Le choix du modèle est itératif, pas mécanique. Préférer une spécification parcimonieuse aux coefficients économiquement sensés, aux résidus proches d’un bruit blanc, aux paramètres stables et aux performances hors échantillon crédibles.

## Synthèse

| Caractéristique | Idée de diagnostic | Réponse typique |
| --- | --- | --- |
| Tendance déterministe du niveau | Graphique et régression de tendance | Tendance linéaire ou log-linéaire |
| Dépendance persistante dans une série stationnaire | ACF et tests sur les résidus | Termes AR, MA ou ARMA |
| Racine unitaire | Test DF ou ADF | Différencier, puis modéliser la transformation stationnaire |
| Motif calendaire répété | Graphique saisonnier et structure des retards | Indicatrices, retards ou différenciation saisonniers |
| Regroupement de volatilité | ACF des résidus au carré ou test ARCH | ARCH/GARCH lorsque la prévision de la variance compte |
| Plusieurs séries non stationnaires | Test de cointégration fondé sur les résidus | Relation en niveaux seulement en cas de cointégration |

<style>
.time-series-workflow {
  display: block;
  width: 100%;
  height: 1340px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

.acf-pacf-chart {
  display: block;
  width: 100%;
  height: 790px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 18px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .time-series-workflow {
    height: 2100px;
  }
  .acf-pacf-chart { height: 1470px; }
}
</style>
