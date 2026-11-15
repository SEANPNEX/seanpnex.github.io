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

* **FCFF** = CFO − investissements (y compris le fonds de roulement) : le flux avant la dette. Capitaux propres = PV(FCFF) − valeur de marché de la dette. Le FCFF est plus commode quand **le levier devrait beaucoup changer**.
* **FCFE** = FCFF − paiements nets aux créanciers (intérêts et principal, nets de la nouvelle dette) : le flux après la dette.
* **Revenu résiduel** = bénéfice − rendement exigé × valeur comptable d’ouverture ; valeur = valeur comptable + PV(RI futurs). Le RI **reconnaît en général la valeur plus tôt** que les modèles de FCF. Il repose sur le **surplus propre** : $B_t=B_{t-1}+E_t-D_t$.

**Exemple (AB InBev contre Diageo).** Le taux de distribution d’AB InBev est allé de 18 % à 542 % (acquisitions, baisse du dividende en 2018) → un DDM n’est **pas** approprié ; utilisez un flux au niveau de l’entreprise. Le BPA et le DPA de Diageo ont progressé à des rythmes semblables (6,8 % contre 6,3 %), avec un taux de distribution surtout entre 50 et 60 % → un DDM **est** approprié.

## Modèle d’actualisation des dividendes

Pour une période, $n$ périodes et à l’infini :

$$V_0=\frac{D_1+P_1}{1+r}$$

$$V_0=\sum_{t=1}^{n}\frac{D_t}{(1+r)^t}+\frac{P_n}{(1+r)^n}$$

$$V_0=\sum_{t=1}^{\infty}\frac{D_t}{(1+r)^t}$$

On suppose les dividendes versés une fois, à la fin de chaque période. Même un investisseur à horizon fini dépend de **tous** les dividendes futurs, à travers le prix de vente $P_n$.

**Exemples.**

* **Carrefour** (une période) : $D_1$ = €0.46, $P_1$ = €23.00, $r$ = 8 % → $V_0$ = 23.46/1.08 = **€21.72**.
* **Horizon de cinq ans** : dividendes \$2.00, 2.10, 2.20, 3.50, 3.75 ; $P_5$ = \$40 ; $r$ = 10 % → PV des dividendes 9,926 + PV du prix 24,837 = **\$34.76**.

Il y a deux façons de rendre la somme infinie maniable : (1) supposer un profil de croissance stylisé (constant, deux phases, modèle H, trois phases) ; ou (2) prévoir les dividendes un par un sur 3 à 10 ans (selon la **visibilité** des bénéfices), puis ajouter une valeur terminale tirée d’un modèle de croissance ou d’un multiple.

## Modèle de croissance de Gordon

$$
V_0=\frac{D_0(1+g)}{r-g}=\frac{D_1}{r-g}\qquad (r>g)
$$

Il suppose que les dividendes croissent à un taux constant $g$ pour toujours, avec $r$ et $g$ de long terme, et $r>g$. La valeur, les dividendes et (avec un taux de distribution constant) les bénéfices croissent tous à $g$ ; $g$ est donc aussi le rendement en plus-value, et le rendement du dividende reste constant.

> [!IMPORTANT]
> Utilisez $D_1$, et non $D_0$, au numérateur. N’utilisez le GGM que si le $g$ de long terme est au plus égal à la croissance du PIB nominal (croissance réelle + inflation attendue) ; si la croissance attendue est nettement supérieure, utilisez un modèle **à plusieurs phases**.

**Exemple (Sonoco).** $D_0$ = \$1.64 (4 × \$0.41), $g$ = 4,5 %, $r$ = 3 % + 0,95(4,5 %) = 7,3 % → $V_0$ = 1.64(1.045)/0.028 = **\$61.21**. Le cours est de \$59.55 → légèrement **sous-évaluée**.

**Exemple (Middlesex Water).** $D_0$ = \$0.911, $g$ = 4,5 %, cours \$43.20.

| Estimation de $r$ | $V_0$ | Verdict |
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

* **Actions de préférence perpétuelles** (non remboursables, taux fixe) : $V_0=D/r$. P. ex. une action de préférence à 4 % de nominal \$25 verse \$1.00 ; à $r$ = 5,5 %, $V_0$ = **\$18.18**.
* Une **croissance négative** fonctionne aussi. P. ex. Afton Mines : $D_1$ = \$4.25, $g$ = −4 %, $r$ = 9 % → 4.25/0.13 = **\$32.69**.

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

**Exemple.** Bêta 1,1, $r_f$ 5,6 %, ERP 6 % → $r$ = 12,2 %. $D_0$ = \$2.00, $g$ = 5 % → $V_0$ = 2.10/0.072 = **\$29.17**, sous le cours de \$40. Croissance implicite : $40=2(1+g)/(0.122-g)$ → **$g$ = 6,86 %** : le marché intègre plus de 5 % de croissance.

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

**Exemple (Middlesex Water).** $E_1$ = \$1.52, $r$ = 6,8 %, cours \$43.20 → $E_1/r$ = 22,42, donc **PVGO = \$20.78** (48 % du cours). P/E 28,4 = P/E sans croissance (1/0.068 = 14,7) + composante de croissance (20.78/1.52 = 13,67).

**P/E justifié** tiré du GGM, où $b$ est le taux de rétention et $1-b$ le taux de distribution :

$$
\text{Leading: }\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\text{Trailing: }\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

Pour les modèles à plusieurs phases, le P/E prospectif justifié est la valeur du modèle ÷ $E_1$.

**Exemple (L’Oréal).** Cours €242.70, $E_0$ €7.08, $D_0$ €3.85, $g$ 4,25 %, $r$ = 2 % + 0,72(5 %) = 5,6 %, taux de distribution 0,5438.

* P/E prospectif = 0.5438/(0.056 − 0.0425) = **40,28** ; P/E historique = 0.5438(1.0425)/0.0135 = **42,00**.
* Le P/E historique effectif est de 242.70/7.08 = 34,3, sous 42,0 → **sous-évaluée** ; la valeur GGM de €297.31 dépasse €242.70.

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

**Exemple (Carl Zeiss Meditec).** $D_0$ €0.55 ; croissance de 9 % pendant 10 ans, puis 5 % ; $r$ = 1,2 % + 0,9(5,2 %) = 5,88 % ; cours €80.55.

* $D_{10}$ = €1.302 et $D_{11}$ = €1.3671, donc $V_{10}$ = 1.3671/0.0088 = **€155.36**, d’une PV de 155.36/1.0588¹⁰ = €87.74.
* PV des 10 dividendes €6.47 → **$V_0$ = €94.21** (environ 93 % provenant de la valeur terminale).

La **valeur terminale** peut provenir (1) du GGM appliqué à $D_{n+1}$, ou (2) d’un multiple × un fondamental prévu (P/E × BPA, P/B × BVPS).

**Exemple (P&G, DDM avec une valeur terminale par le P/E).** $D_0$ \$2.79, croissance de 4 % pendant 4 ans, $r$ 6,5 % ; en année 4, taux de distribution 60 % et P/E historique 22.

* $D_4$ = 2.79(1.04)⁴ = \$3.2639 ; BPA₄ = 3.2639/0.60 = \$5.4398 ; $V_4$ = 22 × 5.4398 = \$119.68, d’une PV de \$93.03.
* PV des dividendes \$10.52 → **$V_0$ = \$103.55** (cours \$96.47).

**Exemple (une entreprise qui ne verse pas encore).** Premier dividende de \$1.00 en $t$ = 5, puis croissance de 5 % ; $r$ = 11 %. $V_4=D_5/(r-g)$ = 1.00/0.06 = \$16.67 → $V_0$ = 16.67/1.11⁴ = **\$10.98**.

> [!IMPORTANT]
> $V_n=D_{n+1}/(r-g)$. Si le premier dividende est en $t$ = 5, le GGM donne la valeur en **$t$ = 4** : actualisez donc sur 4 ans, pas 5.

### Modèle H

La croissance part de $g_S$ et décroît **linéairement** jusqu’à $g_L$ sur $2H$ années :

$$
V_0=\frac{D_0(1+g_L)}{r-g_L}+\frac{D_0H(g_S-g_L)}{r-g_L}
$$

* Le premier terme est la valeur si la croissance était $g_L$ dès maintenant ; le second est la valeur supplémentaire due à une croissance supérieure à la normale. C’est une **approximation**, moins précise pour un $H$ élevé ou un écart $g_S-g_L$ important.
* $H$ est la **moitié** de la durée de la période de forte croissance (10 ans → $H$ = 5).

**Exemples.**

* **Meditec en modèle H** (de 9 % à 5 % sur 10 ans) : $V_0$ = [0.55(1.05) + 0.55(5)(0.04)]/0.0088 = **€78.13**, contre €94.21 avec le modèle à deux phases.
* Cours €41.70, $D_0$ €1.77, de 7 % à 4 % sur 10 ans, $r$ 8 % : $V_0$ = [1.77(1.04) + 1.77(5)(0.03)]/0.04 = (1.84 + 0.27)/0.04 = **€52.75**. La croissance normale seule donne 1.84/0.04 = €46, et la croissance supérieure à la normale ajoute €6.75. La valeur dépasse le cours de 26 % → **sous-évaluée**.

### Modèle à trois phases

**Version 1 : trois phases à croissance constante.** Exemple : $r$ 9 %, $D_0$ \$3.30 ; croissance de 14 % pendant 2 ans, 12 % pendant 5 ans, puis 6,75 % ; cours \$194.98.

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $g$ | 14% | 14% | 12% | 12% | 12% | 12% | 12% |
| $D_t$ | 3.7620 | 4.2887 | 4.8033 | 5.3797 | 6.0253 | 6.7483 | 7.5581 |

* $V_7$ = $D_7$(1.0675)/(0.09 − 0.0675) = 358,59, d’une PV de **196,16** ; la PV des dividendes est de 26,66.
* **$V_0$ = \$222.82**, plus de 14 % au-dessus du cours ; la valeur terminale représente environ 88 % de la valeur.

**Version 2 : une première phase constante, puis un modèle H pour les phases 2 et 3.** Étapes : (1) PV des dividendes de la phase 1 ; (2) valeur du modèle H au début de la phase 2, à partir de $D_n$ ; (3) l’actualiser en $t$ = 0 ; (4) additionner.

**Exemple (Rhinestone Energy).** Cours \$56.18, $D_0$ \$0.56 ; croissance de 11 % pendant 5 ans, puis baisse linéaire jusqu’à 6,5 % sur 10 ans ($H$ = 5) ; $r$ = 3 % + 1,2(4,2 %) = 8 % ; fourchette de juste valeur ±20 %.

* $D_5$ = 0.56(1.11)⁵ = \$0.9436.
* $V_5$ = 0.9436(1.065)/0.015 + 0.9436(5)(0.045)/0.015 = 66.9979 + 14.1545 = **\$81.1524**, d’une PV de \$55.2310.
* PV des dividendes de la phase 1 \$3.0422 → **$V_0$ = \$58.27** (la phase 1 représente 5,2 % de la valeur ; les phases 2–3, 94,8 %).
* La fourchette \$46.62–\$69.92 contient \$56.18 → **correctement évaluée**.
* Avec un dividende stable en année 2 : $D_5$ = \$0.8501, $V_5$ = \$73.1103 → $V_0$ = **\$52.56**.

Bloomberg utilise la version 2 avec croissance plus transition fixées à 17 ans : explosive 3/14, forte 5/12, moyenne 7/10, lente/mature 9/8.

### Choisir un modèle

| Modèle | À utiliser lorsque |
| --- | --- |
| GGM | Maturité ; croissance au plus égale au PIB nominal ; distribution stable |
| Deux phases | Forte croissance pendant une période donnée, puis chute **brutale** (p. ex. expiration d’un brevet) |
| Modèle H | Forte croissance **déclinant progressivement** jusqu’à la maturité |
| Trois phases | Phases distinctes de croissance, de transition et de maturité (entreprises plus jeunes) |
| Tableur | Tout profil irrégulier (cessions d’actifs, dividendes exceptionnels, prévisions détaillées) |

**Exemple (Yang Co., dividendes irréguliers).** $D_1$ \$21 ; puis −10 % par an pendant 3 ans (18,90, 17,01, 15,31) ; \$60 en année 5 (cession d’actifs) ; \$40 en années 6–7 ; puis +5 % ; $r$ 12 %.

* $V_7$ = 40(1.05)/0.07 = \$600, d’une PV de \$271.41 ; la PV des dividendes est d’environ \$128.06.
* **$V_0$ = \$399.48**.

Limites des modèles à plusieurs phases : la valeur terminale représente souvent plus de 75 % de la valeur et est très sensible à $r$ et $g$, et l’image du cycle de vie est grossière quand la technologie évolue vite.

### Modélisation sur tableur

Prévoir les ventes, les marges, les intérêts, l’impôt, la distribution et le bilan → les dividendes → les actualiser, avec une valeur terminale tirée d’un multiple.

**Exemple (Hoshino Distributors).** Ventes de \$100m progressant de 20 %, 15 %, 10 %, 10 % ; marge d’EBIT 20/20/18/16/16 % ; intérêts de 10 % de la dette ; impôt 40 % ; distribution 20/20/30/40/50 % ; actifs à 80 % des ventes ; 4m d’actions ; $r$ 15 % ; P/E terminal 10.

| | A1 | A2 | A3 | A4 | A5 |
| --- | --- | --- | --- | --- | --- |
| Résultat net (\$m) | 9.60 | 11.50 | 11.69 | 11.19 | 12.32 |
| DPA | 0.480 | 0.575 | 0.877 | 1.120 | 1.540 |
| PV à 15 % | 0.417 | 0.435 | 0.577 | 0.640 | 0.766 |

BPA₅ = 12.32/4 = \$3.08 → $P_5$ = \$30.80, d’une PV de \$15.31 → **$V_0$ = 2.84 + 15.31 = \$18.15**.

## Rendement exigé tiré d’un DDM

Étant donné le cours, le rendement exigé est le TRI que le modèle implique. Pour le GGM et le modèle H :

$$
r=\frac{D_1}{P_0}+g
$$

$$
r=\frac{D_0}{P_0}\left[(1+g_L)+H(g_S-g_L)\right]+g_L
$$

**Exemples.**

* **NextEra** : $D_1$ = \$5.00(1.055) = \$5.275, $P_0$ \$169.83, $g$ 5,5 % → $r$ = 3,11 % + 5,50 % = **8,60 %**.
* GGM : cours \$10, $D_1$ \$0.50, $g$ 8 % → **13 %**.
* Modèle H : $D_0$ \$1, cours \$20, de 10 % à 6 % sur 10 ans ($H$ = 5) : $r$ = (1/20)[1.06 + 5(0.04)] + 0.06 = **12,3 %**.

Pour les autres modèles à plusieurs phases, trouvez $r$ par tâtonnement (ou valeur cible) de sorte que la PV égale le cours.

**Exemple (J&J).** $D_0$ \$3.60, croissance de 7 % pendant 6 ans puis 5 %, cours \$136.61. La première estimation par le GGM est 3.60(1.07)/136.61 + 0.05 = 7,8 %, forcément trop basse, car la croissance initiale dépasse 5 %. À 8 %, la valeur est de \$140.07 (au-dessus du cours) ; à 8,5 %, \$119.92 → **TRI ≈ 8,08 %**.

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

**Exemples.**

* ROE 25 %, $b$ 60 % → $g$ = **15 %** : capitaux propres \$1,000,000 → \$1,150,000 ; RN 250 000 → 287 500 ; dividendes 100 000 → 115 000 (+15 %).
* **Baggai contre Mondale**, toutes deux avec un ROA de 10 % : Baggai ($b$ 0,30, levier 1,25) → $g$ = **3,75 %** ; Mondale ($b$ 2/3, levier 2,00) → $g$ = **13,33 %** (plus de rétention et de levier).
* Entreprise mature : distribution 25 %, ROE = $r$ = 9 % → $g$ = 0,75 × 9 % = **6,75 %**.
* **IBM** : son ROE de 52 % en 2018 provenait d’un levier de 7,35. Avec une marge de référence de 10,5 %, une rotation de 0,62 et un levier prévu de 2,0, on obtient un ROE de 13,0 % ; avec une distribution de 50 %, **$g$ = 6,5 %**.

Pour estimer un ROE de phase mature : une prévision DuPont, ROE = $r$ (pas de rendements excédentaires à maturité), ou le ROE médian du secteur.

#### Pièges d’examen

* $g = b \times$ ROE utilise le taux de **rétention**, pas le taux de distribution.
* Un ROE historique anormalement élevé (souvent dû au levier) ne durera pas : prévoyez des composantes de maturité.
* Augmenter les dividendes plus vite que le taux de croissance soutenable exige un financement externe.

> [!NOTE]
>
> **Coquille du manuel.** La solution L’Oréal imprime la valeur GGM comme 3.85(1.0425)/(0.05 − 0.0425) ; le résultat de €297.31 ne fonctionne qu’avec $r$ = 0,056 (4.0136/0.0135 = 297,3).
