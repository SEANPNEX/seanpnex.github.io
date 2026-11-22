---
title: Évaluation par l’actualisation des dividendes
---

# Évaluation par l’actualisation des dividendes

Choisir le flux à actualiser (dividendes, flux de trésorerie disponible ou revenu résiduel) ; le modèle de croissance de Gordon, la PVGO et le P/E justifié ; les modèles d’actualisation des dividendes à plusieurs phases (deux phases, modèle H, trois phases, tableur) ; la croissance implicite et le rendement exigé implicite ; et la croissance soutenable.

## Choisir le flux de trésorerie

| Flux | Le plus adapté lorsque | Problèmes |
| --- | --- | --- |
| **Dividendes** | L’entreprise verse des dividendes ; la politique du conseil a un lien clair et constant avec la rentabilité ; point de vue **minoritaire** (sans contrôle) | Entreprises qui ne versent rien ; dividendes sans rapport avec les bénéfices |
| **FCFE / FCFF** | Pas de dividendes, ou des dividendes très éloignés du FCFE ; le FCF suit la rentabilité sur un horizon de prévision confortable ; point de vue de **contrôle** (aussi lorsqu’une prise de contrôle est possible) | Investissements lourds → FCF négatif pendant de nombreuses années |
| **Revenu résiduel** | Pas de dividendes, et **FCF négatif** sur l’horizon confortable | Exige une comptabilité d’engagement détaillée ; faussé par une mauvaise qualité comptable |

$$
\begin{aligned}
FCFF&=CFO-\text{Capex}\\
\text{Equity}&=\text{PV}(FCFF)-\text{Debt}\\
FCFE&=FCFF\\
&\quad-\text{Net payments to debt}\\
RI_t&=E_t-r\times B_{t-1}\\
V_0&=B_0+\text{PV}(RI_t)\\
B_t&=B_{t-1}+E_t-D_t
\end{aligned}
$$

* Le **FCFF** est le flux avant la dette (les investissements incluent le fonds de roulement). Il est plus commode quand **le levier devrait beaucoup changer**.
* Le **FCFE** est le flux après la dette ; les paiements nets sont les intérêts et le principal, nets de la nouvelle dette.
* Le **revenu résiduel** **reconnaît en général la valeur plus tôt** que les modèles de FCF, et repose sur la relation de **surplus propre**.

## Modèle d’actualisation des dividendes

Pour une période, $n$ périodes et à l’infini :

$$V_0=\frac{D_1+P_1}{1+r}$$

$$V_0=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{P_n}{(1+r)^n}$$

$$V_0=\sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}$$

On suppose les dividendes versés une fois, à la fin de chaque période. Même un investisseur à horizon fini dépend de **tous** les dividendes futurs, à travers le prix de vente $P_n$.

#### Exemple : Carrefour (une période)

Carrefour devrait verser un dividende de €0.46 l’an prochain puis s’échanger à €23.00. Le rendement exigé est de 8 %.

$$
\begin{aligned}
V_0&=\frac{D_1+P_1}{1+r}\\
&=\frac{0.46+23.00}{1.08}=21.72
\end{aligned}
$$

**$V_0$ = €21.72.**

#### Exemple : Horizon de cinq ans

Le rendement exigé est de 10 %, et l’action devrait se vendre \$40 à la fin de l’année 5.

| Année | 1 | 2 | 3 | 4 | 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Dividende (\$) | 2.00 | 2.10 | 2.20 | 3.50 | 3.75 |
| PV à 10 % (\$) | 1.818 | 1.736 | 1.653 | 2.391 | 2.328 |

$$
\begin{aligned}
\text{PV of dividends}&=1.818+1.736\\
&\quad+1.653+2.391\\
&\quad+2.328=9.926\\
\text{PV of price}&=\frac{40}{1.10^5}=24.837\\
V_0&=9.926+24.837\\
&=34.76
\end{aligned}
$$

**$V_0$ = \$34.76.**

Il y a deux façons de rendre la somme infinie maniable : (1) supposer un profil de croissance stylisé (constant, deux phases, modèle H, trois phases) ; ou (2) prévoir les dividendes un par un sur 3 à 10 ans (selon la **visibilité** des bénéfices), puis ajouter une valeur terminale tirée d’un modèle de croissance ou d’un multiple.

## Modèle de croissance de Gordon

$$
V_0=\frac{D_0(1+g)}{r-g}=\frac{D_1}{r-g}\qquad (r>g)
$$

Il suppose que les dividendes croissent à un taux constant $g$ pour toujours, avec $r$ et $g$ de long terme, et $r>g$. La valeur, les dividendes et (avec un taux de distribution constant) les bénéfices croissent tous à $g$ ; $g$ est donc aussi le rendement en plus-value, et le rendement du dividende reste constant.

> [!IMPORTANT]
> Utilisez $D_1$, et non $D_0$, au numérateur. N’utilisez le GGM que si le $g$ de long terme est au plus égal à la croissance du PIB nominal (croissance réelle + inflation attendue) ; si la croissance attendue est nettement supérieure, utilisez un modèle **à plusieurs phases**.

#### Exemple : Sonoco

Sonoco verse un dividende trimestriel de \$0.41, qui devrait croître de 4,5 % par an. Le taux sans risque est de 3 %, le bêta de 0,95 et la prime de risque actions de 4,5 %. L’action s’échange à \$59.55.

**Étape 1. Données.**

$$
\begin{aligned}
D_0&=4\times 0.41=\$1.64\\
r&=3\%+0.95\times 4.5\%=7.3\%
\end{aligned}
$$

**Étape 2. Valeur.**

$$
\begin{aligned}
V_0&=\frac{1.64\times 1.045}{0.073-0.045}\\
&=\frac{1.7138}{0.028}=\$61.21
\end{aligned}
$$

**$V_0$ = \$61.21** est au-dessus du cours de \$59.55 ; Sonoco est donc légèrement **sous-évaluée**.

#### Exemple : Middlesex Water (GGM)

Le dividende de Middlesex Water est de $D_0$ = \$0.911, avec une croissance attendue $g$ = 4,5 % ; le cours est de \$43.20. Chaque estimation de $r$ ci-dessous utilise le même dividende suivant :

$$D_1=0.911\times 1.045=\$0.952$$

| Estimation de $r$ | $V_0=D_1/(r-g)$ | Verdict |
| --- | --- | --- |
| Analyste : 6,8 % | **\$41.39** | À moins de 5 % → correctement évaluée |
| MEDAF, β ajusté 0,80 : 3 % + 0,8(4,5 %) = 6,6 % | \$45.33 | Correctement évaluée (environ 5 % au-dessus) |
| Rendement obligataire + prime : 4,8 % + 2,5 % = 7,3 % | \$34.00 | Surévaluée (mais la prime est arbitraire) |

Le GGM convient à Middlesex : un ROE stable (un service des eaux réglementé), un taux de distribution constant de 60 à 70 %, une croissance de 4,5 % proche de la croissance du PIB nominal américain (environ 4,3 %), et aucune période de croissance anormale. Son bêta a un $R^2$ inférieur à 20 % ; le $r$ du MEDAF est donc incertain.

**Sensibilité.** Faire varier $r$ et $g$ de ±25 pb donne des valeurs de \$33.92 à \$53.02 ; la valeur s’envole à mesure que $r-g$ se réduit.

| | $g$ = 4,25 % | $g$ = 4,50 % | $g$ = 4,75 % |
| --- | --- | --- | --- |
| $r$ = 6,55 % | 41.29 | 46.44 | 53.02 |
| $r$ = 6,80 % | 37.24 | **41.39** | 46.55 |
| $r$ = 7,05 % | 33.92 | 37.33 | 41.49 |

**Autres usages de la formule.**

* **Actions de préférence perpétuelles** (non remboursables, taux fixe) : $V_0=D/r$. Une action de préférence à 4 % de nominal \$25 verse \$1.00 par an ; à $r$ = 5,5 % :

$$V_0=\frac{1.00}{0.055}=\$18.18$$

* Une **croissance négative** fonctionne aussi. Afton Mines : $D_1$ = \$4.25, $g$ = −4 %, $r$ = 9 % :

$$
\begin{aligned}
V_0&=\frac{4.25}{0.09-(-0.04)}\\
&=\frac{4.25}{0.13}=\$32.69
\end{aligned}
$$

| Points forts | Limites |
| --- | --- |
| Simple, facile à communiquer | Très sensible à $r$ et $g$ |
| Convient aux entreprises matures versant des dividendes stables et aux grands indices des marchés développés | Inutilisable pour les entreprises sans dividende ou aux dividendes imprévisibles |
| Donne la valeur terminale des modèles à plusieurs phases | Invalide si $g\ge r$ ; irréaliste pour les entreprises à forte croissance |
| Permet de déduire $g$ ou $r$ implicites | |

### Croissance implicite et rachats d’actions

* Les rachats réduisent le nombre d’actions, mais les entreprises ne s’engagent pas sur leur niveau et les placent de façon opportuniste ; ils sont donc plus difficiles à prévoir que les dividendes. Aux prix du marché, les rachats sont **neutres** pour les actionnaires restants. Un DDM fonctionne encore si la croissance du dividende **par action** reflète les rachats.
* Le **taux de croissance implicite** résout $P_0=D_0(1+g)/(r-g)$ en $g$ :

$$
g=\frac{rP_0-D_0}{P_0+D_0}
$$

#### Exemple : Croissance implicite

Une action s’échange à \$40. Son bêta est de 1,1, le taux sans risque de 5,6 % et la prime de risque actions de 6 %. Le dernier dividende était de \$2.00, et l’analyste anticipe une croissance de 5 %.

**Étape 1. Valeur au taux de croissance de l’analyste.**

$$
\begin{aligned}
r&=5.6\%+1.1\times 6\%=12.2\%\\
V_0&=\frac{2.00\times 1.05}{0.122-0.05}=\frac{2.10}{0.072}=\$29.17
\end{aligned}
$$

**Étape 2. Croissance implicite dans le cours.**

$$
\begin{aligned}
g&=\frac{rP_0-D_0}{P_0+D_0}\\
&=\frac{0.122\times 40-2.00}{40+2.00}\\
&=\frac{2.88}{42}=6.86\%
\end{aligned}
$$

La valeur (\$29.17) est inférieure au cours (\$40) : le marché intègre **6,86 %** de croissance, plus que les 5 % de l’analyste.

## PVGO et P/E justifié

La valeur d’une action est la valeur de ses actifs en place, plus la valeur actuelle de ses opportunités de croissance :

$$
V_0=\frac{E_1}{r}+PVGO
$$

$$
\frac{P_0}{E_1}=\frac{1}{r}+\frac{PVGO}{E_1}
$$

* $E_1/r$ est la **valeur sans croissance**. Une entreprise sans croissance n’a pas de projets à VAN positive, devrait distribuer tous ses bénéfices, et ses bénéfices restent stables.
* La croissance n’ajoute de la valeur que si le nouvel investissement rapporte **plus que $r$** (ROE > $r$). Réinvestir sous $r$ augmente le BPA mais détruit de la valeur.
* La PVGO provient des opportunités d’investissement et des **options réelles** (calendrier, taille, abandon).
* Une **PVGO négative** (p. ex. Macy’s, −\$36.69 début 2019) signifie que le marché anticipe un réinvestissement destructeur de valeur, ou que $E_1$ est trop élevé ou $r$ trop bas. À l’inverse, la PVGO d’Alphabet représentait 53 % de son cours et celle de McDonald’s 20 %.

#### Exemple : Middlesex Water (PVGO)

Middlesex Water s’échange à \$43.20, avec un BPA prévu $E_1$ = \$1.52 et $r$ = 6,8 %.

**Étape 1. Décomposer le cours.**

$$
\begin{aligned}
\frac{E_1}{r}&=\frac{1.52}{0.068}=\$22.42\\
PVGO&=43.20-22.42=\$20.78
\end{aligned}
$$

Les opportunités de croissance représentent **48 %** du cours.

**Étape 2. Décomposer le P/E.**

$$
\begin{aligned}
\frac{P_0}{E_1}&=\frac{43.20}{1.52}=28.4\\
&=\underbrace{\frac{1}{0.068}}_{14.7\text{ no growth}}+\underbrace{\frac{20.78}{1.52}}_{13.67\text{ growth}}
\end{aligned}
$$

**P/E justifié** tiré du GGM, où $b$ est le taux de rétention et $1-b$ le taux de distribution :

$$
\text{Leading: }\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\text{Trailing: }\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

Pour les modèles à plusieurs phases, le P/E prospectif justifié est la valeur du modèle ÷ $E_1$.

#### Exemple : L’Oréal

| Donnée | Valeur |
| --- | --- |
| Cours | €242.70 |
| $E_0$ / $D_0$ | €7.08 / €3.85 |
| Taux de distribution $1-b$ | 3.85/7.08 = 0,5438 |
| $g$ | 4,25 % |
| $r$ | 2 % + 0,72 × 5 % = 5,6 % |

**Étape 1. P/E justifiés.**

$$
\begin{aligned}
\frac{P_0}{E_1}&=\frac{0.5438}{0.056-0.0425}=40.28\\
\frac{P_0}{E_0}&=\frac{0.5438\times 1.0425}{0.0135}=42.00
\end{aligned}
$$

**Étape 2. Comparer avec le marché.**

$$
\begin{aligned}
\text{Actual trailing P/E}&=\frac{242.70}{7.08}\\
&=34.3<42.0
\end{aligned}
$$

L’Oréal est **sous-évaluée** : de manière équivalente, la valeur GGM $3.85\times 1.0425/0.0135$ = €297.31 dépasse le cours de €242.70.

## Modèles d’actualisation des dividendes à plusieurs phases

| Phase | Croissance et marges | FCFE | Taux de distribution |
| --- | --- | --- | --- |
| **Croissance** | Marchés en forte expansion, marges élevées, croissance du BPA très forte | Souvent **négatif** (investissements lourds) | Faible ou nul |
| **Transition** | La croissance ralentit vers celle de l’économie (concurrence, saturation) | Devient **positif** à mesure que les investissements baissent | En hausse (ou début des dividendes) |
| **Maturité** | ROE → $r$ ; croissance, distribution et ROE stables | Positif | Stable : le **GGM** s’applique |

### Modèle à deux phases

$$
V_0=\sum_{t=1}^{n}\frac{D_0(1+g_S)^t}{(1+r)^t}+\frac{V_n}{(1+r)^n}
$$

$$
V_n=\frac{D_{n+1}}{r-g_L}=\frac{D_0(1+g_S)^n(1+g_L)}{r-g_L}
$$

Étapes : (1) lister $D_1,\dots,D_n$ ; (2) $D_{n+1}=D_n(1+g_L)$ ; (3) $V_n=D_{n+1}/(r-g_L)$ ; (4) tout actualiser à $r$. Il convient à un avantage temporaire (un brevet, une position de pionnier) ; sa faiblesse est la chute **brutale** de la croissance.

#### Exemple : Carl Zeiss Meditec

| Donnée | Valeur |
| --- | --- |
| $D_0$ | €0.55 |
| $g_S$ (années 1–10) / $g_L$ (ensuite) | 9 % / 5 % |
| $r$ | 1,2 % + 0,9 × 5,2 % = 5,88 % |
| Cours | €80.55 |

**Étape 1. Valeur terminale à l’année 10.**

$$
\begin{aligned}
D_{10}&=0.55\times 1.09^{10}=1.302\\
D_{11}&=1.302\times 1.05=1.3671\\
V_{10}&=\frac{1.3671}{0.0588-0.05}=155.36
\end{aligned}
$$

**Étape 2. Actualiser à aujourd’hui.**

$$
\begin{aligned}
\text{PV}(V_{10})&=\frac{155.36}{1.0588^{10}}=87.74\\
\text{PV of }D_1\dots D_{10}&=6.47\\
V_0&=6.47+87.74\\
&=94.21
\end{aligned}
$$

**$V_0$ = €94.21**, au-dessus du cours de €80.55 ; environ 93 % provient de la valeur terminale.

La **valeur terminale** peut provenir (1) du GGM appliqué à $D_{n+1}$, ou (2) d’un multiple × un fondamental prévu (P/E × BPA, P/B × BVPS).

#### Exemple : P&G avec une valeur terminale par le P/E

Le dernier dividende de P&G était de \$2.79, attendu en hausse de 4 % par an pendant 4 ans ; $r$ = 6,5 %. À l’année 4, le taux de distribution attendu est de 60 % et le P/E historique de 22. Le cours est de \$96.47.

**Étape 1. Valeur terminale tirée du P/E.**

$$
\begin{aligned}
D_4&=2.79\times 1.04^4=\$3.2639\\
EPS_4&=\frac{3.2639}{0.60}=\$5.4398\\
V_4&=22\times 5.4398=\$119.68
\end{aligned}
$$

**Étape 2. Actualiser à aujourd’hui.**

$$
\begin{aligned}
\text{PV}(V_4)&=\frac{119.68}{1.065^4}=\$93.03\\
\text{PV of }D_1\dots D_4&=\$10.52\\
V_0&=10.52+93.03\\
&=\$103.55
\end{aligned}
$$

**$V_0$ = \$103.55**, au-dessus du cours de \$96.47.

#### Exemple : Une entreprise qui ne verse pas encore de dividende

Le premier dividende, \$1.00, est attendu en $t$ = 5, puis croît de 5 % par an ; $r$ = 11 %.

$$
\begin{aligned}
V_4&=\frac{D_5}{r-g}=\frac{1.00}{0.11-0.05}=\$16.67\\
V_0&=\frac{16.67}{1.11^4}=\$10.98
\end{aligned}
$$

**$V_0$ = \$10.98.**

> [!IMPORTANT]
> $V_n=D_{n+1}/(r-g)$. Si le premier dividende est en $t$ = 5, le GGM donne la valeur en **$t$ = 4** : actualisez donc sur 4 ans, pas 5.

### Modèle H

La croissance part de $g_S$ et décroît **linéairement** jusqu’à $g_L$ sur $2H$ années :

$$
V_0=\frac{D_0(1+g_L)}{r-g_L}+\frac{D_0H(g_S-g_L)}{r-g_L}
$$

* Le premier terme est la valeur si la croissance était $g_L$ dès maintenant ; le second est la valeur supplémentaire due à une croissance supérieure à la normale. C’est une **approximation**, moins précise pour un $H$ élevé ou un écart $g_S-g_L$ important.
* $H$ est la **moitié** de la durée de la période de forte croissance (10 ans → $H$ = 5).

#### Exemple : Valeur du modèle H contre cours

Une action s’échange à €41.70. $D_0$ = €1.77 ; la croissance est de 7 %, décroissant linéairement jusqu’à 4 % sur 10 ans ($H$ = 5) ; $r$ = 8 %.

$$
\begin{aligned}
V_0&=\underbrace{\frac{1.77\times 1.04}{0.08-0.04}}_{\text{normal growth}}\\
&\quad+\underbrace{\frac{1.77\times 5\times 0.03}{0.08-0.04}}_{\text{above-normal growth}}\\
&=\frac{1.84}{0.04}+\frac{0.27}{0.04}\\
&=46.00+6.75=52.75
\end{aligned}
$$

**$V_0$ = €52.75**, 26 % au-dessus du cours ; l’action est donc **sous-évaluée**.

### Modèle à trois phases

**Version 1 : trois phases à croissance constante.** Faites croître $D_0$ à $g_1$, puis à $g_2$, listez chaque dividende, et clôturez la dernière phase avec le GGM :

$$
\begin{aligned}
V_0={}&\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}\\
&+\frac{D_{n}(1+g_L)/(r-g_L)}{(1+r)^n}
\end{aligned}
$$

#### Exemple : Trois phases à croissance constante

$D_0$ = \$3.30 et $r$ = 9 %. Les dividendes croissent de 14 % pendant 2 ans, puis de 12 % pendant 5 ans, puis de 6,75 % pour toujours. Le cours est de \$194.98.

**Étape 1. Dividendes jusqu’à l’année 7.**

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $g$ | 14% | 14% | 12% | 12% | 12% | 12% | 12% |
| $D_t$ | 3.7620 | 4.2887 | 4.8033 | 5.3797 | 6.0253 | 6.7483 | 7.5581 |

**Étape 2. Valeur terminale à l’année 7.**

$$
\begin{aligned}
V_7&=\frac{7.5581\times 1.0675}{0.09-0.0675}=358.59\\
\text{PV}(V_7)&=\frac{358.59}{1.09^7}=196.16
\end{aligned}
$$

**Étape 3. Additionner.**

$$V_0=\underbrace{26.66}_{\text{PV}(D_1\dots D_7)}+196.16=\$222.82$$

**$V_0$ = \$222.82**, plus de 14 % au-dessus du cours ; la valeur terminale représente environ 88 % de la valeur.

**Version 2 : une première phase constante, puis un modèle H pour les phases 2 et 3.** Étapes : (1) PV des dividendes de la phase 1 ; (2) valeur du modèle H au début de la phase 2, à partir de $D_n$ ; (3) l’actualiser en $t$ = 0 ; (4) additionner.

$$
\begin{aligned}
V_n&=\frac{D_n(1+g_L)+D_nH(g_S-g_L)}{r-g_L}\\
V_0&=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{V_n}{(1+r)^n}
\end{aligned}
$$

#### Exemple : Rhinestone Energy

| Donnée | Valeur |
| --- | --- |
| Cours | \$56.18 |
| $D_0$ | \$0.56 |
| Phase 1 | 11 % pendant 5 ans |
| Phases 2–3 | Baisse linéaire jusqu’à 6,5 % sur 10 ans ($H$ = 5) |
| $r$ | 3 % + 1,2 × 4,2 % = 8 % |
| Fourchette de juste valeur | ±20 % de la valeur |

**Étape 1. Dividende à la fin de la phase 1.**

$$D_5=0.56\times 1.11^5=\$0.9436$$

**Étape 2. Valeur du modèle H à l’année 5.**

$$
\begin{aligned}
V_5&=\frac{0.9436\times 1.065}{0.08-0.065}\\
&\quad+\frac{0.9436\times 5\times 0.045}{0.08-0.065}\\
&=66.9979+14.1545\\
&=\$81.1524\\
\text{PV}(V_5)&=\frac{81.1524}{1.08^5}\\
&=\$55.2310
\end{aligned}
$$

**Étape 3. Ajouter les dividendes de la phase 1.**

$$V_0=\underbrace{3.0422}_{\text{PV}(D_1\dots D_5)}+55.2310=\$58.27$$

La phase 1 représente 5,2 % de la valeur ; les phases 2–3, 94,8 %.

**Étape 4. Comparer.** La fourchette \$58.27 × (0,8 à 1,2) = \$46.62–\$69.92 contient le cours de \$56.18 ; Rhinestone est donc **correctement évaluée**.

**Et si le dividende de l’année 2 reste stable ?** Alors $D_5$ = \$0.8501, $V_5$ = \$73.1103 et **$V_0$ = \$52.56**.

Bloomberg utilise la version 2 avec croissance plus transition fixées à 17 ans : explosive 3/14, forte 5/12, moyenne 7/10, lente/mature 9/8.

### Choisir un modèle

| Modèle | À utiliser lorsque |
| --- | --- |
| GGM | Maturité ; croissance au plus égale au PIB nominal ; distribution stable |
| Deux phases | Forte croissance pendant une période donnée, puis chute **brutale** (p. ex. expiration d’un brevet) |
| Modèle H | Forte croissance **déclinant progressivement** jusqu’à la maturité |
| Trois phases | Phases distinctes de croissance, de transition et de maturité (entreprises plus jeunes) |
| Tableur | Tout profil irrégulier (cessions d’actifs, dividendes exceptionnels, prévisions détaillées) |

#### Exemple : Yang Co. (dividendes irréguliers)

$r$ = 12 %. Les dividendes baissent de 10 % par an après l’année 1, bondissent en année 5 lors d’une cession d’actifs, puis croissent de 5 % par an après l’année 7.

| Année | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Dividende (\$) | 21.00 | 18.90 | 17.01 | 15.31 | 60.00 | 40.00 | 40.00 |

**Étape 1. Valeur terminale à l’année 7.**

$$
\begin{aligned}
V_7&=\frac{40\times 1.05}{0.12-0.05}=\$600\\
\text{PV}(V_7)&=\frac{600}{1.12^7}=\$271.41
\end{aligned}
$$

**Étape 2. Ajouter la PV des sept dividendes (\$128.06).**

$$V_0=128.06+271.41=\$399.48$$

Limites des modèles à plusieurs phases : la valeur terminale représente souvent plus de 75 % de la valeur et est très sensible à $r$ et $g$, et l’image du cycle de vie est grossière quand la technologie évolue vite.

### Modélisation sur tableur

Prévoir les ventes, les marges, les intérêts, l’impôt, la distribution et le bilan → les dividendes → les actualiser, avec une valeur terminale tirée d’un multiple.

#### Exemple : Hoshino Distributors

Hoshino réalise un chiffre d’affaires de \$100m avec 4m d’actions ; $r$ = 15 %, et le P/E terminal est de 10.

| Hypothèse | A1 | A2 | A3 | A4 | A5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Croissance des ventes | | 20% | 15% | 10% | 10% |
| Marge d’EBIT | 20% | 20% | 18% | 16% | 16% |
| Distribution | 20% | 20% | 30% | 40% | 50% |

Les intérêts sont de 10 % de la dette, l’impôt de 40 %, et le total de l’actif de 80 % des ventes.

**Étape 1. Prévoir le résultat net et les dividendes.**

| | A1 | A2 | A3 | A4 | A5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Résultat net (\$m) | 9.60 | 11.50 | 11.69 | 11.19 | 12.32 |
| DPA (\$) | 0.480 | 0.575 | 0.877 | 1.120 | 1.540 |
| PV à 15 % (\$) | 0.417 | 0.435 | 0.577 | 0.640 | 0.766 |

**Étape 2. Valeur terminale tirée du P/E.**

$$
\begin{aligned}
EPS_5&=\frac{12.32}{4}=\$3.08\\
P_5&=10\times 3.08=\$30.80\\
\text{PV}(P_5)&=\frac{30.80}{1.15^5}=\$15.31
\end{aligned}
$$

**Étape 3. Additionner.**

$$V_0=\underbrace{2.84}_{\text{PV of DPS}}+15.31=\$18.15$$

## Rendement exigé tiré d’un DDM

Étant donné le cours, le rendement exigé est le TRI que le modèle implique. Pour le GGM et le modèle H :

$$
r=\frac{D_1}{P_0}+g
$$

$$
r=\frac{D_0}{P_0}\left[(1+g_L)+H(g_S-g_L)\right]+g_L
$$

#### Exemples : Rendement exigé implicite

| Cas | Données | Rendement exigé |
| --- | --- | --- |
| **NextEra** (GGM) | $D_0$ \$5.00, $g$ 5,5 %, $P_0$ \$169.83 | $\dfrac{5.00\times 1.055}{169.83}+5.5\%=3.11\%+5.50\%=$ **8,60 %** |
| GGM | $D_1$ \$0.50, $g$ 8 %, $P_0$ \$10 | $\dfrac{0.50}{10}+8\%=$ **13 %** |
| Modèle H | $D_0$ \$1, $P_0$ \$20, 10 % déclinant à 6 % sur 10 ans ($H$ = 5) | $\dfrac{1}{20}\left[1.06+5\times 0.04\right]+6\%=$ **12,3 %** |

Pour les autres modèles à plusieurs phases, trouvez $r$ par tâtonnement (ou valeur cible) de sorte que la PV égale le cours.

#### Exemple : J&J (tâtonnement)

Le dernier dividende de J&J était de \$3.60, en croissance de 7 % pendant 6 ans puis de 5 % ; le cours est de \$136.61.

**Étape 1. Première estimation tirée du GGM.**

$$r\approx\frac{3.60\times 1.07}{136.61}+5\%=7.8\%$$

Cette estimation est forcément trop basse : la croissance initiale dépasse 5 %, donc le vrai TRI est plus élevé.

**Étape 2. Encadrer le cours.**

| $r$ | Valeur à deux phases | vs \$136.61 |
| --- | ---: | --- |
| 8.0% | \$140.07 | Au-dessus : $r$ trop bas |
| 8.5% | \$119.92 | En dessous : $r$ trop élevé |

**Étape 3. Interpoler.** Le TRI est juste au-dessus de 8 % : **$r$ ≈ 8,08 %**.

> [!NOTE]
> Le TRI est le rendement attendu implicite du marché ; le réinjecter dans le DDM comme $r$ est circulaire. Si le cours diffère de la valeur, le rendement attendu inclut aussi la convergence du cours vers la valeur.

## Croissance soutenable

$$
g=b\times ROE
$$

Le **taux de croissance soutenable** est la croissance que les seuls bénéfices mis en réserve peuvent financer, avec une structure du capital constante et **sans nouvelles actions**. En toute rigueur, utilisez le rendement des nouveaux investissements et les capitaux propres **d’ouverture**. Le modèle **PRAT** décompose le ROE selon DuPont :

$$
\begin{aligned}
g={}&\underbrace{\frac{NI-D}{NI}}_{R}\times\underbrace{\frac{NI}{Sales}}_{P}\\
&\times\underbrace{\frac{Sales}{TA}}_{A}\times\underbrace{\frac{TA}{Equity}}_{T}
\end{aligned}
$$

Marge × rotation de l’actif (P × A) = ROA, issu de l’exploitation ; la rétention et le levier (R, T) reflètent la politique financière.

#### Exemple : Croissance par la rétention

Le ROE est de 25 %, le taux de rétention de 60 %, et les capitaux propres d’ouverture de \$1,000,000.

$$g=0.60\times 25\%=15\%$$

| | Cette année | L’an prochain | Croissance |
| --- | ---: | ---: | ---: |
| Capitaux propres d’ouverture | 1,000,000 | 1,150,000 | 15 % |
| Résultat net (25 %) | 250,000 | 287,500 | 15 % |
| Dividendes (40 %) | 100,000 | 115,000 | 15 % |

#### Exemple : Baggai contre Mondale (PRAT)

Les deux entreprises ont un ROA (= P × A) de 10 %.

| | Rétention $R$ | ROA | Levier $T$ | $g=R\times ROA\times T$ |
| --- | ---: | ---: | ---: | ---: |
| Baggai | 0.30 | 10% | 1.25 | **3,75 %** |
| Mondale | 2/3 | 10% | 2.00 | **13,33 %** |

Mondale croît plus vite uniquement en raison de sa politique financière : davantage de rétention et davantage de levier.

#### Exemple : Croissance en phase de maturité

**Entreprise mature.** Le taux de distribution est de 25 %, et ROE = $r$ = 9 % :

$$g=(1-0.25)\times 9\%=6.75\%$$

**IBM.** Son ROE de 52 % en 2018 provenait d’un levier de 7,35, qui ne durera pas. Reconstruisez le ROE à partir des composantes de référence, puis appliquez une distribution de 50 % :

$$
\begin{aligned}
ROE&=\underbrace{10.5\%}_{P}\times\underbrace{0.62}_{A}\times\underbrace{2.0}_{T}=13.0\%\\
g&=0.50\times 13.0\%=6.5\%
\end{aligned}
$$

Pour estimer un ROE de phase mature : une prévision DuPont, ROE = $r$ (pas de rendements excédentaires à maturité), ou le ROE médian du secteur.

#### Pièges d’examen

* $g = b \times$ ROE utilise le taux de **rétention**, pas le taux de distribution.
* Un ROE historique anormalement élevé (souvent dû au levier) ne durera pas : prévoyez des composantes de maturité.
* Augmenter les dividendes plus vite que le taux de croissance soutenable exige un financement externe.

> [!NOTE]
>
> **Coquille du manuel.** La solution L’Oréal imprime la valeur GGM comme 3.85(1.0425)/(0.05 − 0.0425) ; le résultat de €297.31 ne fonctionne qu’avec $r$ = 0,056 (4.0136/0.0135 = 297,3).
