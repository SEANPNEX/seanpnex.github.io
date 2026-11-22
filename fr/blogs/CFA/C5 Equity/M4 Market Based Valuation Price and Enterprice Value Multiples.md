---
title: "Évaluation par le marché : multiples de cours et de valeur d’entreprise"
---

# Évaluation par le marché : multiples de cours et de valeur d’entreprise

Évaluer une action à l’aide de multiples, soit en la comparant à des actifs semblables (la méthode des comparables), soit en dérivant le multiple des fondamentaux prévus (multiples justifiés). Couvre le P/E, le P/B, le P/S, le cours sur flux de trésorerie, le rendement du dividende et les multiples d’EV, puis les comparaisons internationales, les indicateurs de momentum et la façon de faire la moyenne des multiples.

## Deux méthodes

| | Méthode des comparables | Méthode fondée sur les fondamentaux prévus |
| --- | --- | --- |
| Idée | La valeur à partir des multiples d’actifs semblables (comparables, « sociétés de référence ») | Dériver le multiple d’un modèle DCF ou de revenu résiduel de l’entreprise elle-même |
| Justification | **Loi du prix unique** : des actifs semblables se vendent à des prix semblables | Valeur = PV des flux futurs, déterminée par la rentabilité, la croissance et le risque |
| Conclusion | Valeur **relative** (les comparables peuvent eux-mêmes être mal évalués) | Valeur absolue (intrinsèque) |

* Un **multiple justifié** est la juste valeur du multiple, par l’une ou l’autre méthode. Justifié > effectif → sous-évalué.
* Utilisez la **médiane** des pairs pour limiter les valeurs aberrantes.

$$
\begin{aligned}
\text{Value}={}&\text{Benchmark multiple}\\
&\times\text{Fundamental}\\
\text{Justified}={}&\frac{\text{Intrinsic value}}{\text{Fundamental}}
\end{aligned}
$$

P. ex., avec une BVPS de \$23 : un P/B médian des pairs de 2,2 donne $2.2\times 23=\$50.60$ ; une valeur par le revenu résiduel de \$46 implique un P/B justifié de $46/23=$ **2,0**.

#### Exemple : La comparaison la plus simple

Le BPA de l’entreprise A est de \$1.50 et son cours de \$37.50 ; le P/E du concurrent B est de 22.

$$
\begin{aligned}
P/E_A&=\frac{37.50}{1.50}=25>22\\
\text{Value at B's P/E}&=22\times 1.50=\$33
\end{aligned}
$$

A est **surévaluée** par rapport à B.

## Cours sur bénéfice (P/E)

| Justifications | Inconvénients |
| --- | --- |
| La capacité bénéficiaire est le principal moteur de la valeur | Le BPA peut être nul, négatif ou minuscule → P/E sans signification |
| Le multiple le plus utilisé et le plus reconnu | Difficile de séparer bénéfices récurrents et transitoires |
| Les écarts de P/E sont liés aux rendements de long terme | La latitude de la direction peut fausser le BPA, nuisant à la comparabilité |

### P/E historique et prospectif

$$
\begin{aligned}
\text{Trailing P/E}&=\frac{P_0}{EPS_{\text{last 4 quarters}}}\\
\text{Forward P/E}&=\frac{P_0}{E(EPS_{\text{next year}})}\\
EPS_{NTM}&=\tfrac{m}{12}\,FY1+\tfrac{12-m}{12}\,FY2
\end{aligned}
$$

où $m$ est le nombre de mois restant dans l’exercice en cours.

* Le **P/E prospectif** peut utiliser les quatre prochains trimestres, les douze prochains mois (NTM), ou le prochain exercice (FY1, FY2). Utilisez la **même définition** pour toutes les entreprises. Quand les bénéfices augmentent, le P/E prospectif est inférieur au P/E historique.
* Le P/E prospectif est préféré lorsqu’il existe des prévisions, ou après une grosse acquisition ou un changement de levier ; l’historique lorsque les bénéfices ne sont pas prévisibles.

#### Exemple : IBM

À \$137.90, avec un BPA FY1 de \$13.91 et un BPA FY2 de \$14.17 :

$$\frac{137.90}{13.91}=9.9\qquad\frac{137.90}{14.17}=9.7$$

#### Exemple : Selene Gaming (BPA volatil)

Le cours est de \$12.20 le 9 août 2020 ; l’exercice se termine en décembre, il reste donc 5 mois de FY2020.

| Définition | BPA | P/E |
| --- | --- | --- |
| Quatre prochains trimestres (−0,10 − 0,50 + 0,70 + 0,80) | 0.90 | **13,6** |
| NTM : (5/12)(−0,50) + (7/12)(1,50) | 0.67 | **18,2** |
| FY2020 | (0.50) | −24,4 → sans signification |
| FY2021 | 1.50 | **8,1** |

Avec des bénéfices aussi volatils et procycliques, normalisez-les.

### Ajuster le BPA

1. **Dilution** : préférez le BPA dilué pour les comparaisons. P. ex. Siemens à €95.94 : $95.94/7.12=13.47$ sur le BPA de base contre $95.94/7.01=$ **13,69** sur le BPA dilué.
2. **Éléments non récurrents** → bénéfices **sous-jacents** (récurrents, persistants). Le « BPA courant » publié par l’entreprise est un indicateur non IFRS/non GAAP sans règles : exercez votre propre jugement. Le classement au compte de résultat ne suffit pas.
3. **Cycle économique** → BPA **normalisé** (de milieu de cycle). Les P/E des valeurs cycliques sont élevés au creux du cycle et bas au sommet (l’**effet Molodovsky**).
4. **Comparabilité** : ajustez les différences comptables (p. ex. LIFO contre FIFO).

#### Exemple : Evergreen (éléments non récurrents)

Le cours est de £50.11. L’analyste ne considère que la provision pour litige comme non récurrente ; l’amortissement et les charges de restructuration répétées sont permanents.

| Définition du BPA | BPA | P/E |
| --- | ---: | ---: |
| TTM publié | £4.52 | $50.11/4.52=$ **11,1** |
| « BPA courant » de l’entreprise | £6.01 | **8,3** |
| BPA sous-jacent de l’analyste | £4.60 | **10,9** |

Le BPA courant de l’entreprise flatte l’action ; le P/E de l’analyste est proche du P/E publié.

$$
\begin{aligned}
\text{Historical: }EPS_N&=\overline{EPS}_{\text{cycle}}\\
\text{ROE: }EPS_N&=\overline{ROE}_{\text{cycle}}\\
&\quad\times BVPS_{\text{current}}
\end{aligned}
$$

| Méthode de normalisation | BPA normalisé | Remarque |
| --- | --- | --- |
| BPA moyen historique | BPA moyen sur le dernier cycle complet | Ignore l’évolution de la **taille** de l’entreprise |
| ROE moyen | ROE moyen sur le cycle × BVPS **actuelle** | Reflète la taille ; en général préférée |

Le ROA de long terme × total de l’actif, ou le ROE de long terme × capitaux propres, fonctionnent aussi (utile si l’entreprise a publié une perte).

#### Exemple : Zenlandia Chemical

Le cours est de \$18.21, le ROE moyen sur le cycle de 22,6 %, et la BVPS actuelle de \$4.82.

| Année | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| BPA (\$) | 0.74 | 0.63 | 0.61 | 0.54 | 1.07 | 0.88 | 1.08 |

| Méthode | BPA normalisé | P/E |
| --- | --- | ---: |
| Moyenne historique | $5.55/7=\$0.79$ | $18.21/0.79=$ **23,1** |
| ROE moyen | $0.226\times 4.82=\$1.09$ | $18.21/1.09=$ **16,7** |

La BVPS a augmenté de 61 % sur le cycle ; la méthode du ROE reflète donc une entreprise plus grande, qui paraît **moins chère**.

**Bénéfices négatifs ou minuscules.** Publiez le P/E comme sans signification (NM). Utilisez un BPA normalisé ou prospectif, ou classez par **rendement des bénéfices** (E/P) : le cours n’est jamais négatif, si bien que le classement reste cohérent, et E/P est moins faussé par les valeurs aberrantes. P. ex. le BPA de −7,72 de Tesla donne un P/E NM et un E/P de −2,51 %.

| Ratio de cours | Inverse | Commentaire |
| --- | --- | --- |
| P/E | E/P (rendement des bénéfices) | Tous deux courants |
| P/B | B/P (valeur comptable sur cours) | La valeur comptable est rarement négative ; B/M privilégié en recherche |
| P/S | S/P | Rarement utilisé |
| P/CF | CF/P (rendement des flux de trésorerie) | Tous deux courants |
| P/D | D/P (rendement du dividende) | D/P bien plus courant (P/D non défini pour les entreprises sans dividende) |

### P/E justifié et P/E prédit

D’après le modèle de croissance de Gordon :

$$
\frac{P_0}{E_1}=\frac{1-b}{r-g}
$$

$$
\frac{P_0}{E_0}=\frac{(1-b)(1+g)}{r-g}
$$

Le P/E justifié baisse avec $r$ (le risque) et augmente avec $g$, dans tout modèle DCF. Pour des modèles plus complexes, P/E justifié = valeur DCF ÷ BPA.

#### Exemple : BP et Toyota

**BP** (GGM) : rétention 40 %, $g$ 3,5 %, $r$ 7,6 %.

$$\frac{P_0}{E_1}=\frac{1-0.40}{0.076-0.035}=\frac{0.60}{0.041}=14.6$$

**Toyota** (modèle FCFE) : valeur ¥6,980, cours ¥6,688, BPA FY2020 ¥720.

$$
\begin{aligned}
\text{Justified}&=\frac{6{,}980}{720}=9.7\\
\text{Actual}&=\frac{6{,}688}{720}=9.3
\end{aligned}
$$

Toyota s’échange environ **4 % en dessous** de son P/E justifié : sous-évaluée.

Le **P/E prédit** provient d’une régression transversale sur des fondamentaux (distribution, bêta, croissance) :

$$
\begin{aligned}
\widehat{P/E}={}&12.12+2.25\times\underbrace{0.45}_{\text{payout}}\\
&-0.20\times\underbrace{0.9}_{\beta}+14.43\times\underbrace{0.08}_{g}\\
={}&14.1
\end{aligned}
$$

C’est inférieur au P/E effectif de 18 ; l’action est donc **surévaluée**. Limites : la régression n’est valable que pour son échantillon et sa période ; coefficients et pouvoir explicatif changent dans le temps ; et la **multicolinéarité** rend les coefficients individuels difficiles à interpréter.

### Comparer des P/E

Les étapes pour tout multiple : (1) choisir et calculer le multiple ; (2) choisir des comparables et calculer la **référence** (médiane ou moyenne) ; (3) appliquer la référence, éventuellement ajustée des fondamentaux ; (4) vérifier si les écarts s’expliquent par les fondamentaux.

* Références : un groupe de pairs, le secteur, un indice actions, ou l’**historique propre** de l’action.
* Les comparables partent du groupe GICS (sous-secteur) ou ICB (sous-secteur) le plus étroit, puis sont filtrés par taille et marchés servis.
* Toutes choses égales par ailleurs : **croissance plus forte → P/E justifié plus élevé ; risque plus élevé → P/E justifié plus bas**.

$$
PEG=\frac{P/E}{\text{EPS growth (in percent)}}
$$

Plus bas est plus attrayant ; certains jugent attrayant un PEG inférieur à 1. Limites : il suppose une relation **linéaire** entre P/E et croissance, et ignore le **risque** et la durée de la croissance.

#### Exemple : Télécoms avec les fondamentaux

**CenturyLink.** Son PEG est le plus bas parmi les titres à faible P/E ; elle est donc relativement sous-évaluée :

$$PEG=\frac{8.89}{8.52}=1.04$$

**AT&T.** Partez du P/E prospectif médian des pairs de 11,99, et relevez-le à 13,0 pour une rentabilité supérieure et un risque inférieur à la moyenne :

$$\text{Value}=13.0\times 3.63=\$47.19$$

C’est bien au-dessus du cours de \$33.98 : **sous-évaluée**.

**Comparaisons sectorielles et de marché.** Des groupes plus larges compensent les erreurs de valorisation individuelles mais sont moins semblables. Les P/E d’indices pondérés par la capitalisation sont dominés par les plus grosses valeurs ; utilisez donc la **médiane** pour les moyennes capitalisations.

#### Exemple : Actions face au S&P 500

Le P/E de l’indice est de 21,8. Le P/E de référence de chaque action est son ratio historique à l’indice × 21,8.

| Action | P/E effectif | Ratio historique à l’indice | P/E de référence | Verdict |
| --- | ---: | ---: | ---: | --- |
| A | 15.2 | 80 % | 17.4 | Assez bon marché |
| B | 30.0 | 120 % | 26.2 | Chère |
| C | 15.2 | 105 % | 22.9 | **La plus sous-évaluée** |

Cela suppose que les relations historiques tiennent toujours.

**Modèles au niveau du marché.**

* **Modèle de la Fed** : le marché est surévalué quand son E/P prospectif est inférieur au rendement des Treasuries à 10 ans :

$$\text{Justified P/E}=\frac{1}{y_{\text{10-year Treasury}}}$$

  P. ex., un rendement de 2,72 % donne $1/0.0272=36.8$, contre un P/E historique de 18,9. Critiques : il ignore l’ERP et la croissance, traite mal l’inflation, n’est pas linéaire à taux bas, et est très sensible à de petites variations de taux.
* **Modèle de Yardeni** : le rendement des bénéfices = CBY − b × LTEG + résidu, donc

$$
\frac{P}{E}=\frac{1}{CBY-b\times LTEG}
$$

  où CBY est le rendement des obligations d’entreprise notées A, LTEG la croissance des bénéfices à 5 ans selon le consensus, et $b$ historiquement 0,10 (puis 0,10, 0,20, 0,25). CBY plus élevé → P/E plus bas ; croissance plus forte → P/E plus élevé.

**L’historique propre de l’action.** La méthode échoue si le mix d’activités, le levier, les taux ou l’inflation ont changé.

$$
\begin{aligned}
\text{Price}={}&\overline{P/E}_{\text{own history}}\\
&\times EPS_{\text{recent or normalized}}
\end{aligned}
$$

#### Exemple : Honda

Les P/E de Honda sur cinq ans étaient 6,9, 10,0, 10,9, 10,8 et 9,7 ; le BPA est de ¥381.93 et le cours d’environ ¥2,837.

| Référence | P/E | Prix justifié | Cours vs justifié |
| --- | ---: | ---: | ---: |
| Médiane | 10.0 | $10.0\times 381.93=$ ¥3,819 | −26 % |
| Moyenne | 9.7 | $9.7\times 381.93=$ ¥3,704 | −23 % |

Le cours est inférieur d’environ 23 à 26 % à l’une comme à l’autre valeur : **peut-être sous-évaluée**.

**Inflation et P/E.** Sans croissance réelle, avec distribution totale, un taux de répercussion λ de l’inflation des coûts $I$, et un rendement exigé réel $\rho=r-I$ :

$$
\frac{P_0}{E_1}=\frac{1}{\rho+(1-\lambda)I}
$$

Avec une répercussion totale (λ = 1), P/E = 1/ρ ; sans aucune (λ = 0), 1/$r$. Avec une répercussion incomplète, **inflation plus forte → P/E plus bas** ; à inflation égale, **plus de répercussion → P/E plus élevé**. Avec ρ = 3 % :

| λ | $I$ | $1/[\rho+(1-\lambda)I]$ | P/E |
| ---: | ---: | --- | ---: |
| 75 % | 6 % | $1/(0.03+0.25\times 0.06)$ | **22,2** |
| 75 % | 2 % | $1/(0.03+0.25\times 0.02)$ | **28,6** |
| 90 % | 6 % | $1/(0.03+0.10\times 0.06)$ | **27,8** |
| 70 % | 6 % | $1/(0.03+0.30\times 0.06)$ | **20,8** |

### Valeur terminale par les multiples

$$
V_n=\text{Trailing P/E}\times E_n
$$

$$
V_n=\text{Forward P/E}\times E_{n+1}
$$

* Un multiple terminal **fondé sur les fondamentaux** est le GGM réécrit sous forme de multiple (sensible à $r$, à la distribution et à $g$).
* Un multiple **fondé sur les comparables** (P/E médian ou moyen du secteur, P/E passé de l’action) repose sur des données de marché, mais transporte toute erreur de valorisation du marché dans la valeur terminale.

#### Exemple : Entreprise d’exploration pétrolière

Trouver la valeur terminale à l’année 3. $E_3$ = \$3.00, $r$ = 10 %, distribution de maturité 45 %, ROE du secteur 13 %, P/E du secteur 14,3.

**Fondée sur les comparables.**

$$V_3=14.3\times 3.00=\$42.90$$

**Fondée sur les fondamentaux (GGM).**

$$
\begin{aligned}
D_3&=0.45\times 3.00=\$1.35\\
g&=(1-0.45)\times 13\%=7.15\%\\
V_3&=\frac{1.35\times 1.0715}{0.10-0.0715}=\$50.76
\end{aligned}
$$

La valeur fondée sur les fondamentaux est **18,3 % plus élevée**.

## Cours sur valeur comptable (P/B)

| Justifications | Inconvénients |
| --- | --- |
| La valeur comptable est en général positive quand le BPA ne l’est pas | Ignore la valeur absente du bilan : capital humain, réputation, marques et R&D générées en interne |
| La BVPS est plus stable que le BPA | Trompeur quand l’intensité capitalistique ou les modèles économiques diffèrent |
| Convient aux entreprises aux actifs surtout liquides (banques, assureurs, sociétés d’investissement) | Comptabilité : coût historique ou juste valeur, inflation, technologie, âge des actifs |
| Convient aux entreprises dont on n’attend pas la continuité d’exploitation | Les **rachats d’actions** faussent les comparaisons historiques |
| Les écarts de P/B sont liés aux rendements de long terme | |

* P. ex. sur cinq ans, le P/E de Colgate-Palmolive a augmenté de 5,5 % mais son P/B de 125,9 %, surtout parce que des rachats au-dessus de la valeur comptable ont réduit celle-ci (\$2.48bn → \$1.53bn).
* Les P/B des banques diffèrent selon le modèle économique (Citigroup 0,69, Wells Fargo 1,21, US Bancorp 1,63).

$$
BVPS=\frac{\text{Equity}-\text{Preferred}}{\text{Common shares}}
$$

Les actions de préférence incluent les éventuels dividendes préférentiels arriérés.

#### Exemple : TD Bank

En 2018, les capitaux propres de TD étaient de CAD80,040m, dont CAD5,000m d’actions de préférence, avec 1 830,4m d’actions ordinaires ; le cours est de CAD73.03.

$$
\begin{aligned}
BVPS&=\frac{80{,}040-5{,}000}{1{,}830.4}=41.00\\
P/B&=\frac{73.03}{41.00}=1.78
\end{aligned}
$$

**P/B = 1,78** (la BVPS était de 38,23 en 2017 et 37,58 en 2016).

**Ajustements** : utiliser la **valeur comptable tangible** (au moins retirer le goodwill ; des incorporels séparables comme les brevets peuvent rester) ; convertir le LIFO en FIFO ; inclure les éléments hors bilan ; retraiter à la juste valeur.

#### Exemple : Barclays (2012)

| Donnée | £m |
| --- | ---: |
| Capitaux propres | 62,957 |
| Goodwill et incorporels | 7,915 |
| Juste valeur des actifs financiers inférieure à la valeur comptable | 17,333 |
| Juste valeur des passifs inférieure à la valeur comptable | 399 |
| Actions diluées | 12,614m |
| Cours | £2.4239 |

Une juste valeur plus faible des actifs réduit la valeur comptable ; une juste valeur plus faible des passifs l’augmente.

| Valeur comptable | Par action | P/B |
| --- | ---: | ---: |
| Publiée : $62{,}957/12{,}614$ | £4.9910 | **0,49** |
| Tangible : $(62{,}957-7{,}915)/12{,}614$ | £4.3636 | **0,56** |
| Ajustée : $(62{,}957-7{,}915-17{,}333+399)/12{,}614$ | £3.0211 | **0,80** |

**P/B justifié** (GGM avec $g$ = $b$ × ROE, sur la base de $B_0$) :

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}
$$

$$
\frac{P_0}{B_0}=1+\frac{PV(RI)}{B_0}
$$

où $PV(RI)$ est la valeur actuelle des revenus résiduels attendus.

* P. ex., ROE 12 %, $r$ 10 %, $g$ 7 % :

$$\frac{P_0}{B_0}=\frac{0.12-0.07}{0.10-0.07}=1.67$$

* Le P/B est déterminé par le **ROE par rapport à $r$** : si ROE = $r$, P/B = 1 ; avec $g$ = 0, P/B = ROE/$r$. À P/B égal, l’action au ROE le plus élevé est la moins chère.

## Cours sur chiffre d’affaires (P/S)

| Justifications | Inconvénients |
| --- | --- |
| Le chiffre d’affaires est plus difficile à manipuler | Une croissance des ventes sans bénéfice ni trésorerie n’est pas de la valeur |
| Le chiffre d’affaires est positif même quand le BPA ne l’est pas | Le P/S compare un prix (après financement) à un flux **avant** financement ; utilisez EV/chiffre d’affaires |
| Plus stable que le P/E | Ignore les différences de structure de coûts |
| Convient aux entreprises matures, cycliques et déficitaires | La comptabilisation des produits peut encore le fausser |
| Les écarts de P/S sont liés aux rendements de long terme | |

$$
\begin{aligned}
\frac{P}{S}&=\frac{P}{E}\times\frac{E}{S}\\
&=P/E\times\text{Net margin}
\end{aligned}
$$

#### Exemple : Stora Enso {#example-stora-enso}

Le chiffre d’affaires est de €10,486m, avec environ 788,5m d’actions ; le cours est de €10.34.

$$
\begin{aligned}
\text{Sales per share}&=\frac{10{,}486}{788.5}=13.30\\
P/S&=\frac{10.34}{13.30}=0.778
\end{aligned}
$$

Signaux d’alerte sur la comptabilisation des produits : **troc** publicitaire entre entreprises internet (1998–2000), ventes **bill-and-hold** (Diebold : transaction de \$25m avec la SEC), produits **bruts ou nets** (le retraitement de Groupon a réduit son chiffre d’affaires de plus de moitié). En cas de soupçon de manipulation, utilisez une prime de risque plus élevée (un P/S justifié plus faible), ou évitez l’action.

**P/S justifié :**

$$
\frac{P_0}{S_1}=\frac{(E_1/S_1)(1-b)}{r-g}
$$

$$
\frac{P_0}{S_0}=\frac{(E_0/S_0)(1-b)(1+g)}{r-g}
$$

Il augmente avec la marge, directement et via la croissance : $g=b\times PM\times\frac{Sales}{TA}\times\frac{TA}{Equity}$.

#### Exemple : Getinge

**P/S justifié.** $r$ = 9 %, marge prévue 9 %, distribution 35 %, $g$ = 7 % ; chiffre d’affaires 2019 par action SEK94.3 ; cours SEK133.70.

$$
\begin{aligned}
\frac{P_0}{S_1}&=\frac{0.09\times 0.35}{0.09-0.07}=1.575\\
V_0&=1.575\times 94.3=148.52
\end{aligned}
$$

**SEK148.52** dépasse le cours de SEK133.70 : **sous-évaluée**.

## Cours sur flux de trésorerie

| Justifications | Inconvénients |
| --- | --- |
| Les flux de trésorerie sont plus difficiles à manipuler que les bénéfices | CF = BPA + charges non monétaires ignore les produits non monétaires et les variations du fonds de roulement |
| Plus stable que le P/E | La théorie privilégie le FCFE, plus volatil et souvent négatif |
| Évite les différences de prudence comptable | Le CFO peut être géré (titrisation de créances, externalisation des dettes fournisseurs) |
| Les écarts de P/CF sont liés aux rendements de long terme | IFRS et US GAAP classent différemment intérêts et dividendes |

| Mesure de flux | Remarque |
| --- | --- |
| **CF** = BPA + amortissements, dépréciations, épuisement | Approximation simple |
| **CFO** (du tableau des flux) | Ajuster des éléments non récurrents et des écarts IFRS/GAAP |
| **FCFE** | Lien le plus fort avec la théorie ; volatil (calendrier des investissements), d’où l’usage d’une moyenne ou de la valeur DCF |
| **EBITDA** | Avant intérêts → à associer à l’**EV**, pas au cours |

$$
\begin{aligned}
CF={}&EPS+\text{Depreciation}\\
&+\text{Amortization}+\text{Depletion}
\end{aligned}
$$

Le CF n’est pas affecté par la méthode d’amortissement ; le P/CF voit donc au-delà d’une croissance du BPA qui n’est qu’un artefact comptable (p. ex. amortissement accéléré).

#### Exemple : Philips

$$
\begin{aligned}
CF&=\underbrace{1.41}_{EPS}+\underbrace{1.17}_{\mathrm{D\&A}}=2.58\\
P/CF&=\frac{36.31}{2.58}=14.1
\end{aligned}
$$

#### Exemple : Colgate (multiples justifiés)

$FCFE_0$ = \$2.66, CF = \$3.26, $r$ = 7,4 %, $g$ = 3,2 %.

$$
\begin{aligned}
V_0&=\frac{2.66\times 1.032}{0.074-0.032}\\
&=\$65.36\\
\text{P/CF}&=\frac{65.36}{3.26}=20.05\\
\text{P/FCFE}&=\frac{65.36}{2.66}=24.57
\end{aligned}
$$

## Rendement du dividende

* **Justifications** : une composante du rendement total, et une composante moins risquée.
* **Inconvénients** : seulement une partie du rendement ; **substitution du dividende aux bénéfices** (distribuer maintenant réduit la croissance future, même si la distribution peut être corrélée à la rentabilité future) ; l’argument de « sécurité » suppose que les marchés évaluent mal le risque.

$$
\begin{aligned}
\text{Trailing yield}&=\frac{\text{Dividend rate}}{P_0}\\
\text{Leading yield}&=\frac{\text{Next year's }E(D)}{P_0}
\end{aligned}
$$

Le **taux de dividende** est égal à 4 × le dernier dividende trimestriel, ou au dernier total annuel pour les payeurs semestriels irréguliers.

#### Exemple : BCE et BT

$$
\begin{aligned}
\text{BCE}&=\frac{4\times 0.58}{39.53}=\frac{2.32}{39.53}\\
&=5.87\%\\
\text{BT}&=\frac{0.976}{15.20}=6.42\%
\end{aligned}
$$

**Rendement du dividende justifié** (GGM) :

$$
\frac{D_0}{P_0}=\frac{r-g}{1+g}
$$

Croissance plus forte → rendement plus bas (les filtres de haut rendement sont orientés « value ») ; $r$ plus élevé → rendement plus élevé. Vérifiez la **sécurité** du dividende : taux de distribution, couverture des intérêts, dette nette/EBITDA. Le rendement le plus élevé n’est pas forcément le meilleur choix : comparez rendement attendu ≈ rendement du dividende + $g$.

## Multiples de valeur d’entreprise

$$
\begin{aligned}
EV={}&\text{Equity}+\text{Preferred}\\
&+\text{Minority interest}+\text{Debt}\\
&-\text{Cash and ST investments}
\end{aligned}
$$

(le tout en valeur de marché). La trésorerie est soustraite car l’acquéreur la récupère : l’EV est le prix d’achat net. Utilisez la valeur de marché de la dette ; à défaut, la valeur comptable ou matricielle. Le **capital total investi** (TIC) = capitaux propres + dette, **sans** soustraire la trésorerie.

| Justifications de l’EV/EBITDA | Inconvénients |
| --- | --- |
| Meilleur que le P/E pour des entreprises au **levier** différent (l’EBITDA est avant intérêts) | Surestime le CFO quand le fonds de roulement augmente ; ignore les effets de la comptabilisation des produits |
| Neutralise les écarts de D&A → entreprises capitalistiques (câble, acier) | Le FCFF est mieux lié à la valeur ; l’EBITDA ne reflète les investissements que si D&A ≈ investissements |
| L’EBITDA est souvent positif quand le BPA est négatif | |

Les multiples d’EV adoptent un point de vue de **contrôle** et sont moins sensibles au levier que les multiples de cours.

#### Exemple : EV/EBITDA de Colgate-Palmolive

Montants en \$m ; 863m d’actions à \$66.48.

**Étape 1. Valeur d’entreprise.** La dette comprend la dette à long terme, sa partie courante et les autres passifs non courants (NCL) ; NCI désigne les participations ne donnant pas le contrôle.

$$
\begin{aligned}
\text{Market cap}&=863\times 66.48\\
&=57{,}372\\
\text{Debt}&=\underbrace{6{,}354}_{\text{LT}}+\underbrace{0}_{\text{current}}+\underbrace{2{,}269}_{\text{other}}\\
&=8{,}623\\
EV&=57{,}372+8{,}623\\
&\quad+\underbrace{299}_{\text{NCI}}-\underbrace{726}_{\text{cash}}\\
&=65{,}568
\end{aligned}
$$

**Étape 2. EBITDA.**

$$
\begin{aligned}
EBITDA&=\underbrace{2{,}400}_{NI}+\underbrace{143}_{\text{Int}}\\
&\quad+\underbrace{906}_{\text{Tax}}+\underbrace{511}_{\mathrm{D\&A}}\\
&=3{,}960
\end{aligned}
$$

**Étape 3. Multiple.**

$$\frac{EV}{EBITDA}=\frac{65{,}568}{3{,}960}=16.6$$

* Avec des actions de préférence, partez de l’EBITDA à partir du résultat net revenant **à la fois** aux actionnaires de préférence et ordinaires.
* L’EV/EBITDA justifié augmente avec la **croissance attendue du FCFF** et le **ROIC** (résultat d’exploitation après impôt ÷ capital investi), et baisse avec le **WACC**.
* Un EV/EBITDA inférieur à celui des pairs → relativement sous-évalué (un indicateur parmi d’autres). Le TIC/EBITDA classe en général les pairs de la même façon ; les classements ne diffèrent que si les trésoreries varient beaucoup.

**Autres dénominateurs de l’EV**, construits à partir du résultat net :

| Mesure | Intérêts | Impôts | Amortissement | Dépréciation des incorporels | Autres |
| --- | --- | --- | --- | --- | --- |
| FCFF | + (après impôt) | | + | + | − WCInv − FCInv |
| EBITDA | + | + | + | + | |
| EBITA | + | + | | + | Quand l’amortissement des incorporels est important, mais pas celui des corporels |
| EBIT | + | + | | | Quand aucun des deux n’est important |

Les mesures sectorielles comprennent l’EV/EBITDAR (compagnies aériennes), l’EV/abonnés et l’EV/réserves. L’**EV/chiffre d’affaires** corrige l’incohérence du P/S pour des entreprises aux structures du capital différentes. P. ex., [Stora Enso](#example-stora-enso) :

$$
\begin{aligned}
EV&=8{,}154+2{,}970-1{,}130\\
&=9{,}994\\
EV/\text{Sales}&=\frac{9{,}994}{10{,}486}=0.953
\end{aligned}
$$

## Multiples justifiés : synthèse

| Multiple | Justifié (fondé sur le GGM) | Augmente avec | Baisse avec |
| --- | --- | --- | --- |
| P/E prospectif | $(1-b)/(r-g)$ | $g$, distribution | $r$ |
| P/E historique | $(1-b)(1+g)/(r-g)$ | $g$, distribution | $r$ |
| P/B | $(ROE-g)/(r-g)$ | ROE − $r$ | $r$ |
| P/S prospectif | $PM_1(1-b)/(r-g)$ | Marge, $g$ | $r$ |
| P/S historique | $PM_0(1-b)(1+g)/(r-g)$ | Marge, $g$ | $r$ |
| D/P | $(r-g)/(1+g)$ | $r$ | $g$ |
| P/CF, P/FCFE | Valeur DCF ÷ CF | $g$ | $r$ |
| EV/EBITDA | (qualitatif) | Croissance du FCFF, ROIC | WACC |

## Comparaisons internationales

Les écarts proviennent des normes comptables, de la culture, de l’économie, du risque et des opportunités de croissance ; les P/E d’un même secteur, et de marchés entiers, varient fortement d’un pays à l’autre.

Effets typiques du rapprochement des IFRS avec les US GAAP (Harris et Muller) :

| Catégorie | Bénéfices | Capitaux propres |
| --- | --- | --- |
| Goodwill | − | + |
| Impôts différés | + | + |
| Ajustements de change | + | − |
| Coûts de R&D | − | − |
| Charge de retraite | − | + |
| Réévaluation des actifs corporels | + | − |
| Autres | − | − |

L’ajustement le plus fréquent concerne les retraites ; le plus important en valeur, le goodwill. **Le P/CFO et le P/FCFE sont les moins affectés** par les différences comptables ; les multiples P/B, P/E et d’EBITDA sont **les plus affectés**. Les écarts d’inflation et de répercussion faussent aussi les P/E.

## Indicateurs de momentum

| Indicateur | Définition |
| --- | --- |
| Bénéfice inattendu (surprise) | BPA effectif moins BPA attendu |
| Surprise de bénéfice normalisée | UE ÷ écart type des **prévisions des analystes** (leur dispersion) |
| Bénéfice inattendu standardisé | UE ÷ écart type des **surprises passées** (p. ex. 20 trimestres) |
| Force relative | Le rendement composé de l’action sur une période (momentum de cours), ou action ÷ indice, souvent ramené à 1,0 au départ |

$$
\begin{aligned}
UE_t&=EPS_t-E(EPS_t)\\
\text{Scaled}&=\frac{UE_t}{\sigma_{\text{forecasts}}}\\
SUE_t&=\frac{EPS_t-E(EPS_t)}{\sigma\left[EPS_t-E(EPS_t)\right]}\\
RS_t&=\frac{P_{\text{stock},t}/P_{\text{stock},0}}{P_{\text{index},t}/P_{\text{index},0}}
\end{aligned}
$$

La justification : des surprises positives peuvent être suivies de rendements anormaux persistants, et les rendements peuvent montrer de la persistance ou un retournement. Mises en garde : sur-exploitation des données et biais rétrospectif, et les règles techniques tendent à cesser de fonctionner une fois largement utilisées. Le momentum peut indiquer **quand** un cours convergera vers la valeur intrinsèque.

#### Exemple : Surprise normalisée de BP

Le consensus est de \$3.26, l’estimation haute de \$3.74, et l’écart type des prévisions de \$0.29. Si le BPA ressort à l’estimation haute :

$$\text{Scaled surprise}=\frac{3.74-3.26}{0.29}=1.66$$

#### Exemple : SUE

| Cas | Surprise | σ des surprises passées | SUE |
| --- | ---: | ---: | ---: |
| Historique volatil | \$0.05 | \$0.20 | 0.25 |
| Même surprise, historique plus régulier | \$0.05 | \$0.07 | **0,71** |
| Exxon, sept. 2013 | $1.79-1.77=0.02$ | \$0.1250 | **0,16** |

La même surprise compte davantage pour une entreprise dont les bénéfices sont habituellement prévisibles. VW avait des surprises plus fortes en %, mais le SUE d’Exxon variait davantage (son σ est plus petit) ; la « précision » dépend donc de la mesure.

## Faire la moyenne des multiples

$$
X_H=\frac{n}{\sum_{i=1}^{n}1/X_i}
$$

$$
X_{WH}=\frac{1}{\sum_{i=1}^{n}w_i/X_i}
$$

* La **moyenne harmonique pondérée**, avec des pondérations en valeur de marché, est le vrai multiple agrégé du portefeuille (utilisée par les fournisseurs d’indices).
* La moyenne harmonique est inférieure à la moyenne arithmétique (sauf si toutes les valeurs sont égales). Elle donne moins de poids aux multiples élevés ; elle réduit donc l’effet des **grandes** valeurs aberrantes, mais peut amplifier les **petites** (elle est bornée par zéro).
* La **médiane** limite les valeurs aberrantes dans les deux sens.

#### Exemple : Un portefeuille de deux actions

| Action | Capitalisation (€m) | Bénéfices (€m) | P/E | Pondération |
| --- | ---: | ---: | ---: | ---: |
| 1 | 715 | 71.50 | 10 | 55 % |
| 2 | 585 | 29.25 | 20 | 45 % |
| **Portefeuille** | **1 300** | **100.75** | $1{,}300/100.75=$ **12,90** | |

Seule la moyenne harmonique pondérée reproduit le vrai P/E du portefeuille :

| Mesure | Calcul | P/E |
| --- | --- | --- |
| Moyenne arithmétique | (10 + 20)/2 | 15.00 |
| Moyenne pondérée | 0.55(10) + 0.45(20) | 14.50 |
| Moyenne harmonique | 1/[0.5(0.1) + 0.5(0.05)] | 13.33 |
| **Harmonique pondérée** | 1/[0.55(0.1) + 0.45(0.05)] | **12,90** |

**Utiliser plusieurs indicateurs.** Les analystes combinent valeurs DCF et multiples (P/E, EV/EBITDA, rendement du dividende). Dans les tests rétrospectifs, méfiez-vous du **biais d’anticipation** (utiliser des données qui n’étaient pas encore publiées à l’époque).

Le **filtrage** réduit l’univers selon des critères. Limites : aucun contrôle sur le calcul des données comme le BPA, et pas de facteurs qualitatifs. Un filtre ne comportant que des critères de multiples faibles et de rendement élevé (p. ex., P/E < 20, P/B < 2, rendement ≥ 3 %) n’a aucun filtre de rentabilité ni de risque ; un P/E faible peut donc simplement refléter une faible rentabilité ou un risque élevé.

> [!NOTE]
>
> **Problèmes du manuel.**
>
> * Honda : le cours est donné à ¥2,837, mais la solution calcule avec ¥2,817 (2 817/3 819 − 1 = −26,2 %). Avec ¥2,837, les écarts sont de −25,7 % et −23,4 % ; la conclusion est la même.
> * Barclays utilise des capitaux propres totaux incluant £9,371m de participations ne donnant pas le contrôle. En toute rigueur, la valeur comptable ordinaire devrait les exclure (£53,586m) ; suivez les chiffres du manuel pour cet exemple.
> * BT : la solution imprime « 0,0642, soit 6,52 % » ; 0.976/15.20 = 6,42 %.
> * L’EV de Colgate compte les « autres passifs non courants » (\$2,269m) comme dette ; normalement, seule la dette portant intérêt est incluse. Ses composantes totalisent \$65,568m, ce qui donne le multiple de 16,6.
> * Stora Enso : le nombre d’actions est donné à 788,4m à un endroit et 788,6m à un autre, et la ligne d’EV imprime des capitaux propres de €8,145m, alors que €8,154m donne €9,994m.
> * SUE : la solution dit que le SUE de VW allait « de −3,57 à +1,13 », mais le maximum du tableau est 1,97.
