---
title: Évaluation par le revenu résiduel
---

# Évaluation par le revenu résiduel

Le **revenu résiduel** (RI) est le résultat net moins une charge pour le coût des capitaux propres : le bénéfice qui reste une fois que **tout** le capital a été rémunéré. Le modèle RI évalue une action comme sa valeur comptable plus la valeur actuelle des revenus résiduels futurs attendus. Couvre le RI, l’EVA et la MVA ; les modèles RI général, à une phase et à plusieurs phases ; les liens du RI avec le P/B, les modèles de dividendes et de flux de trésorerie disponibles ; et les ajustements comptables dont le modèle a besoin.

## Revenu résiduel, EVA et MVA

Le résultat net déduit déjà le coût de la **dette** (les intérêts), mais pas celui des **capitaux propres** ; un résultat net positif peut donc encore détruire de la valeur.

$$
RI=NI-r_e\times\text{Equity capital}
$$

Du point de vue de tous les apporteurs de capitaux (la charge totale du capital est le WACC en montant) :

$$
\begin{aligned}
RI={}&NOPAT-\text{Total capital charge}\\
={}&(ROIC-\text{Effective charge})\\
&\times\text{Beginning capital}
\end{aligned}
$$

Les deux points de vue coïncident lorsque le coût marginal de la dette est égal à son coût actuel, et que les pondérations du capital sont des pondérations **comptables**.

#### Exemple : Axis Manufacturing

| Donnée | Valeur |
| --- | --- |
| Total de l’actif | €2,000,000 |
| Financement | 50 % dette à 7 % avant impôt, 50 % capitaux propres à 12 % |
| EBIT | €200,000 |
| Taux d’imposition | 30% |
| Actions | 100 000 (valeur comptable €10 chacune) |

**Étape 1. Point de vue des capitaux propres.**

$$
\begin{aligned}
NI&=(200{,}000-\underbrace{70{,}000}_{\text{Int}})\times 0.7\\
&=91{,}000\\
\text{Charge}&=0.12\times 1{,}000{,}000\\
&=120{,}000\\
RI&=91{,}000-120{,}000\\
&=-29{,}000
\end{aligned}
$$

**Étape 2. Le point de vue du capital donne la même réponse.**

$$
\begin{aligned}
NOPAT&=200{,}000\times 0.7=140{,}000\\
\text{Charge}&=120{,}000\\
&\quad+0.07\times 0.7\times 1{,}000{,}000\\
&=169{,}000\\
RI&=140{,}000-169{,}000\\
&=-29{,}000
\end{aligned}
$$

Le ROIC est de $140{,}000/2{,}000{,}000=7\%$, pour une charge effective du capital de $169{,}000/2{,}000{,}000=8.45\%$.

**Étape 3. Valeur.** L’entreprise détruit €0.29 par action chaque année, pour toujours :

$$
\begin{aligned}
V_0&=10-\frac{0.29}{0.12}=10-2.42=7.58\\
P/B&=\frac{7.58}{10}=0.758
\end{aligned}
$$

**€7.58 par action** (E/P = 0.91/7.58 = 12 % = $r$). RI négatif → P/B inférieur à 1.

**Valeur économique ajoutée** (la version commerciale de Stern Stewart) :

$$
EVA=NOPAT-(C\%\times TC)
$$

où $C\%$ est le coût du capital et TC le capital total. Ajustements typiques : immobiliser et amortir la R&D (réintégrer la R&D nette au NOPAT) ; suspendre la charge du capital sur les investissements stratégiques à rendement différé ; utiliser les impôts payés (éliminer les impôts différés) ; ajouter la réserve LIFO au capital et sa hausse au NOPAT ; traiter les locations simples comme des locations-financements ; ajuster les éléments non récurrents.

**Valeur de marché ajoutée :**

$$
\begin{aligned}
MVA={}&\text{Market value of company}\\
&-\text{Book value of capital}
\end{aligned}
$$

Un profit économique positif dans la durée → une valeur de marché supérieure à la valeur comptable du capital. Les études sont partagées : les mesures de valeur ajoutée sont un peu plus corrélées aux rendements que le ROA ou le ROE, mais ne prédisent pas mieux la performance que la croissance des bénéfices.

**Usages.** Les modèles RI évaluent des actions individuelles et des indices (p. ex. le Dow). Les versions commerciales sont surtout vendues pour **mesurer la performance interne** et fixer la **rémunération des dirigeants**, pas pour évaluer les capitaux propres. Autres noms : profit économique, bénéfices anormaux, modèle d’actualisation des bénéfices anormaux, modèle d’Edwards–Bell–Ohlson et, en évaluation fiscale aux États-Unis, **méthode des bénéfices excédentaires**.

## Le modèle RI général

$$
V_0=B_0+\sum_{t=1}^{\infty}\frac{RI_t}{(1+r)^t}
$$

$$
\begin{aligned}
V_0&=B_0+\sum_{t=1}^{\infty}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&=B_0+\sum_{t=1}^{\infty}\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}
\end{aligned}
$$

* RI par action = BPA − $r$ × BVPS **d’ouverture**. Le ROE utilise ici la valeur comptable **d’ouverture**, pas la moyenne.
* Le modèle se déduit du DDM grâce à la **relation de surplus propre** : $B_t=B_{t-1}+E_t-D_t$.
* Si la PV des RI futurs est positive, la valeur dépasse la valeur comptable.

#### Exemple : Canadien National

La BVPS d’ouverture est de CAD24.32 ; le taux sans risque est de 1,75 %, le bêta de 1,02 et l’ERP de 7,5 %.

| | 2019 | 2020 |
| --- | ---: | ---: |
| BPA | 6.23 | 6.96 |
| DPA | 2.15 | 2.32 |

**Étape 1. Rendement exigé.**

$$r=1.75\%+1.02\times 7.5\%=9.40\%$$

**Étape 2. RI, en faisant avancer la valeur comptable par le surplus propre.**

$$
\begin{aligned}
RI_{2019}&=6.23-0.094\times 24.32=3.94\\
B_{2019}&=24.32+6.23-2.15=28.40\\
RI_{2020}&=6.96-0.094\times 28.40=4.29
\end{aligned}
$$

#### Exemple : Bugg Properties (en liquidation)

$B_0$ = \$6.00 et $r$ = 10 %. Bugg liquide après l’année 3.

| Année | 1 | 2 | 3 |
| --- | ---: | ---: | ---: |
| BPA | 2.00 | 2.50 | 4.00 |
| DPA | 1.00 | 1.25 | 12.25 (de liquidation) |

**Étape 1. RI de chaque année.** $RI_t=E_t-0.10\times B_{t-1}$, avec $B_t=B_{t-1}+E_t-D_t$ :

| Année | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Valeur comptable d’ouverture | 6.00 | 7.00 | 8.25 |
| ROE | 33,33 % | 35,71 % | 48,48 % |
| Charge des capitaux propres | 0.60 | 0.70 | 0.825 |
| RI | 1.40 | 1.80 | 3.175 |
| Valeur comptable de clôture | 7.00 | 8.25 | 0.00 |

**Étape 2. Évaluer des deux façons.**

$$
\begin{aligned}
V_{RI}&=6.00+\frac{1.40}{1.10}+\frac{1.80}{1.10^2}\\
&\quad+\frac{3.175}{1.10^3}\\
&=6.00+1.2727\\
&\quad+1.4876+2.3854\\
&=11.15\\
V_{DDM}&=\frac{1.00}{1.10}+\frac{1.25}{1.10^2}+\frac{12.25}{1.10^3}\\
&=0.9091+1.0331+9.2036\\
&=11.15
\end{aligned}
$$

La valeur est la même, **\$11.15**. Mais le modèle RI reconnaît \$6.00 en $t$ = 0, tandis que le DDM tire \$9.20 de la dernière année : **le RI reconnaît la valeur plus tôt**.

#### Exemple : Alphabet (ROE déclinant)

$B_0$ = \$255.40 et $r$ = 8,2 % ; Alphabet ne verse pas de dividendes, et le cours est de \$1,037.39. Le ROE est de 20,2 % en 2019, en baisse de 0,5 point par an jusqu’à 8,2 % en 2043, après quoi le RI est nul.

**Étape 1. La première année.**

$$
\begin{aligned}
EPS_{2019}&=0.202\times 255.40=51.59\\
RI_{2019}&=51.59-\underbrace{0.082\times 255.40}_{20.94}\\
&=30.65\\
\text{PV}&=\frac{30.65}{1.082}=28.33
\end{aligned}
$$

**Étape 2. Répéter jusqu’en 2042 et ajouter $B_0$.** La valeur comptable augmente chaque année du BPA (pas de dividendes) :

$$
\begin{aligned}
V_0&=255.40+\sum_{t=2019}^{2042}\text{PV}(RI_t)\\
&=\$972.25
\end{aligned}
$$

C’est inférieur au cours de \$1,037.39.

## P/B justifié et moteurs du RI

Avec une croissance constante, $g = b\times ROE$ :

$$
\frac{P_0}{B_0}=\frac{ROE-g}{r-g}=1+\frac{ROE-r}{r-g}
$$

$$
V_0=B_0+\frac{ROE-r}{r-g}\,B_0
$$

* Le RI est déterminé par le **ROE par rapport à $r$**, et par la valeur comptable.
* ROE = $r$ → valeur = valeur comptable (P/B = 1) ; ROE < $r$ → P/B inférieur à 1.
* Le modèle RI est le plus étroitement lié au **P/B** : le P/B justifié dépasse 1 exactement quand la PV des RI attendus est positive.
* **q de Tobin** : contrairement au P/B, il rapporte le capital total au total de l’actif, au coût de remplacement (qui reflète l’inflation) plutôt qu’au coût historique. Une productivité des actifs plus forte → un q plus élevé (Tobin s’attendait à un q moyen de 1). Le coût de remplacement est difficile à mesurer.

$$
\text{Tobin's }q=\frac{\text{MV of debt and equity}}{\text{Replacement cost}}
$$

## Modèle RI à une phase

Le modèle à une phase suppose que le ROE et $g$ sont constants **pour toujours**, si bien que les rendements excédentaires persistent indéfiniment. En pratique, le ROE revient vers la moyenne : des concurrents entrent dans les secteurs à ROE élevé, et des sorties relèvent celui des secteurs à ROE faible.

#### Exemple : Philips

$B_0$ = €13.22, cours €35.40, ROE 12 %, $g$ 6,75 %, $r$ 8,5 %.

**Étape 1. Valeur.**

$$
\begin{aligned}
V_0&=13.22+\frac{0.12-0.085}{0.085-0.0675}\times13.22\\
&=13.22+2\times 13.22=39.66
\end{aligned}
$$

**Étape 2. Croissance implicite dans le cours.**

$$
\begin{aligned}
35.40&=13.22\\
&\quad+\frac{0.12-0.085}{0.085-g}\times13.22\\
0.085-g&=\frac{0.035\times 13.22}{22.18}\\
&=0.0209\\
g&=6.41\%
\end{aligned}
$$

Le marché intègre **6,41 %** de croissance. Le cours vaut environ $35.40/13.22=2.7$ fois la valeur comptable, car le ROE dépasse $r$.

## RI à plusieurs phases et revenu résiduel continu

Prévoir explicitement le RI sur $T$ années, puis ajouter une prime terminale au-dessus de la valeur comptable :

$$
\begin{aligned}
V_0={}&B_0+\sum_{t=1}^{T}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&+\frac{P_T-B_T}{(1+r)^T}
\end{aligned}
$$

* La valeur comptable actuelle porte en général une grande part de la valeur totale ; la valeur terminale compte donc **moins** que dans les modèles DDM ou FCF.
* $P_T$ peut provenir de n’importe quel modèle : DDM, P/E ou P/B.
* Le **revenu résiduel continu** est le RI après l’horizon de prévision. Hypothèses courantes :
  1. Le RI se poursuit indéfiniment à un niveau positif (éventuellement en croissant avec l’inflation, c’est-à-dire constant en termes réels).
  2. Le RI est nul à partir de l’année terminale.
  3. Le RI décline jusqu’à zéro à mesure que le ROE revient vers $r$.
  4. Le RI reflète un ROE qui revient vers un niveau moyen (p. ex. le ROE du secteur ; l’atténuation vers la moyenne sectorielle de Lee–Swaminathan).

**Modèle de persistance** (Dechow, Hutton et Sloan) :

$$
\begin{aligned}
V_0={}&B_0+\sum_{t=1}^{T-1}\frac{E_t-rB_{t-1}}{(1+r)^t}\\
&+\frac{E_T-rB_{T-1}}{(1+r-\omega)(1+r)^{T-1}}
\end{aligned}
$$

Le facteur de persistance ω est compris entre 0 et 1 : ω = 1 → le RI se poursuit comme une rente perpétuelle ; ω = 0 → le RI s’arrête après l’année $T$. Un ω plus élevé → une valeur plus élevée. Le ω moyen trouvé était d’environ **0,62** (le RI décroît d’environ 38 % par an).

| Persistance plus faible | Persistance plus forte |
| --- | --- |
| ROE extrême | Faible taux de distribution |
| Éléments spéciaux (non récurrents) extrêmes | Forte persistance historique dans le secteur |
| Accruals comptables extrêmes | |

#### Exemple : Zenlandia Chemical (trois hypothèses terminales)

| Donnée | Valeur |
| --- | --- |
| Cours | ZL\$95.6 |
| $r$ | 12% |
| $B_{2019}$ | ZL\$28.8517 |
| BPA / DPA, 2020 | 7.162 / 2.9995 |
| BPA / DPA, 2021 | 8.356 / 3.2995 |
| ROE après 2021 | 25 % (2022–26), 20 % (2027–39), avec 60 % de rétention |

Le RI en 2039 est de 23,8664. Les trois hypothèses sur le RI après 2039 :

**(1) Le RI est nul après 2039.** En additionnant la PV des RI jusqu’en 2039 : **$V_0$ = ZL\$86.41** : surévaluée.

**(2) Le RI de 2039 se poursuit pour toujours.**

$$
\begin{aligned}
TV_{2039}&=\frac{23.8664}{0.12}=198.8867\\
\text{PV}&=\frac{198.8867}{1.12^{20}}=20.62\\
V_0&=86.41+20.62=107.03
\end{aligned}
$$

**ZL\$107.03** : sous-évaluée.

**(3) Le RI s’estompe avec une persistance ω = 0,60.** Appliquez le terme de persistance au RI de 2039, la somme des RI jusqu’en 2038 étant de 83,93 :

$$
\begin{aligned}
\text{PV}&=\frac{23.8664}{(1+0.12-0.60)\times 1.12^{19}}\\
&=5.33\\
V_0&=83.93+5.33=86.26
\end{aligned}
$$

**ZL\$86.26** : légèrement surévaluée.

#### Exemple : URS Holdings (P/B terminal)

$B_0$ = €15.00 et $r$ = 7,95 %. Le BPA est égal à 25 % de la valeur comptable d’ouverture (ROE 25 %), le taux de distribution est de 30 %, et l’action devrait se vendre à 1,80 × la valeur comptable à la fin de l’année 6.

**Étape 1. RI pour les années 1–6.** La valeur comptable croît de $0.70\times 25\%=17.5\%$ par an :

$$
\begin{aligned}
RI_1&=(0.25-0.0795)\times 15.00\\
&=2.558
\end{aligned}
$$

| Année | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| RI | 2.558 | 3.005 | 3.531 | 4.149 | 4.875 | 5.728 |

Leur PV est de **17,755**, et $B_6=15.00\times 1.175^6=39.475$.

**Étape 2. Prime terminale au-dessus de la valeur comptable.**

$$
\begin{aligned}
P_6-B_6&=(1.80-1)\times 39.475\\
&=31.580\\
\text{PV}&=\frac{31.580}{1.0795^6}=19.956
\end{aligned}
$$

**Étape 3. Additionner.**

$$
\begin{aligned}
V_0&=15.000+17.755+19.956\\
&=52.711
\end{aligned}
$$

**€52.711.** Le DDM confirme : PV des dividendes 7,810 + PV de $P_6$ (71,054) 44,901 = €52.711.

## RI face aux modèles de dividendes et de flux de trésorerie disponibles

* Les trois sont théoriquement cohérents : avec des prévisions cohérentes et le même taux d’actualisation ($r$ pour le DDM, le FCFE et le RI ; le WACC pour le FCFF), ils donnent la même valeur.
* Les modèles DDM et FCF actualisent des flux futurs ; le modèle RI part de la valeur comptable et ajoute la PV des RI : **la valeur est donc reconnue plus tôt**, et le RI est moins sensible à des valeurs terminales incertaines.

#### Exemple : Une rente perpétuelle

Le BPA est de \$1.00 pour toujours, entièrement distribué ; la valeur comptable est de \$6.00 et $r$ = 10 %.

$$
\begin{aligned}
V_{DDM}&=\frac{1.00}{0.10}=\$10.00\\
RI&=1.00-0.10\times 6.00=\$0.40\\
V_{RI}&=6.00+\frac{0.40}{0.10}=\$10.00
\end{aligned}
$$

Les deux donnent **\$10.00**. Dans le modèle RI, la valeur comptable représente déjà 60 % de la valeur ; dans le DDM, les dividendes des cinq premières années ne valent que \$3.79 (environ 38 %).

Les modèles RI peuvent aussi donner des multiples justifiés (valeur RI ÷ BPA = P/E justifié) et servir de contrôle croisé d’autres modèles : s’ils divergent fortement, vérifiez la cohérence des hypothèses.

| Points forts | Points faibles |
| --- | --- |
| La valeur terminale est une petite part de la valeur totale | Les données comptables peuvent être manipulées |
| Utilise des données comptables facilement disponibles | Les données comptables peuvent exiger de gros ajustements |
| Fonctionne pour les entreprises sans dividende et celles au FCF négatif à court terme | Exige que le surplus propre tienne, ou des ajustements |
| Fonctionne quand les flux sont imprévisibles | Suppose que la charge d’intérêts reflète correctement le coût de la dette |
| Met l’accent sur la rentabilité économique | |

| Le plus approprié | Le moins approprié |
| --- | --- |
| Pas de dividendes, ou dividendes imprévisibles | Écarts importants par rapport au surplus propre |
| FCF attendu négatif sur l’horizon de prévision | Valeur comptable et ROE imprévisibles |
| Grande incertitude sur les valeurs terminales des autres modèles | |

Une entreprise au FCF positif et prévisible qui ne verse pas de dividende se prête mieux à un **modèle de FCF**.

#### Pièges d’examen

* La charge des capitaux propres utilise la valeur comptable **d’ouverture**.
* Croissance du RI ≠ croissance du RN : chez Mannistore (ci-dessous), le RN croît de 8 % mais le RI baisse d’environ 2 %.
* Un RI négatif ne signifie pas un résultat net négatif.

## Questions comptables

**L’effet d’équilibrage** (Bauman) : une comptabilité agressive augmente la valeur comptable mais réduit les bénéfices futurs, et les deux se compensent **si le surplus propre tient**. En pratique, ce n’est souvent pas le cas, et les analystes extrapolent les bénéfices passés. P. ex., la valeur comptable est de \$1,000,000 et le bénéfice avant impôt de \$200,000 après passage en charges de \$50,000 :

$$
\begin{aligned}
\text{Expensed}&=\frac{200{,}000}{1{,}000{,}000}=20\%\\
\text{Capitalized}&=\frac{250{,}000}{1{,}050{,}000}=23.81\%
\end{aligned}
$$

Extrapoler naïvement ce ROE plus élevé surestime la valeur.

### 1. Violations du surplus propre (dirty surplus, OCI)

Les éléments qui contournent le compte de résultat :

* Variations latentes de juste valeur de certains instruments financiers (actions à la FVOCI en IFRS ; disponibles à la vente en US GAAP)
* Écarts de conversion
* Certains ajustements de retraite
* Une partie des gains et pertes sur certaines couvertures
* Écart de réévaluation des immobilisations corporelles et incorporelles (**IFRS seulement**)
* Variations de la juste valeur de certains passifs dues au risque de crédit propre (**IFRS seulement**)

La valeur comptable est juste (elle inclut les OCI cumulés), mais **le résultat net et le ROE sont faussés** pour le RI. Il n’y a de biais que si la PV des violations ne s’annule pas. Calculez le ROE historique en agrégé (RN ÷ capitaux propres), car rachats et émissions faussent le ROE par action.

#### Exemple : Prévoir avec les OCI

Cette année, le RN est de \$120 pour des capitaux propres d’ouverture de \$1,000 (ROE 12 %), les OCI sont de −\$100, et tous les bénéfices sont mis en réserve ; $r$ = 10 %.

**Étape 1. RI de l’an prochain.** Les capitaux propres de clôture sont de $1{,}000+120-100=1{,}020$ ; à un ROE de 12 % :

$$
\begin{aligned}
NI_1&=0.12\times 1{,}020=122.40\\
RI_1&=122.40-0.10\times 1{,}020=20.40
\end{aligned}
$$

**Étape 2. La croissance de la valeur comptable l’an prochain** dépend des OCI futurs :

| OCI futurs | Variation de la valeur comptable l’an prochain | Croissance |
| --- | --- | ---: |
| Aucun | Cohérente avec un ROE de 12 % | **12 %** |
| Se répètent (−100) | $(122.40-100)/1{,}020$ | **2,2 %** |
| S’inversent (+100) | $(122.40+100)/1{,}020$ | **21,8 %** |

Si les OCI se répètent et que l’analyste utilise le résultat global, le RI est de $22.40-102=$ **−\$79.60**, et non +\$20.40.

#### Exemple : Mannistore

$r$ = 10 %. L’année 2 comporte −\$1.00 d’OCI qui contourne le résultat net.

| Méthode | Valeur |
| --- | ---: |
| DDM, avec $P_5$ = \$68.40 | **\$43.59** |
| RI à partir du seul résultat net | \$44.42 (faux : ignore les OCI) |
| RI à partir de RN + OCI (RI année 2 à 0,45 au lieu de 1,45) | **\$43.59** |

Seul le RI respectant le surplus propre coïncide avec le DDM.

**Croissance du RI ≠ croissance du RN.** En année 6 :

$$
\begin{aligned}
NI_6&=4.56\times 1.08=4.92\\
RI_6&=4.92-2.204=2.72
\end{aligned}
$$

Le RI baisse d’environ **2 %**, bien que le RN croisse de 8 % : la charge des capitaux propres croît plus vite que les bénéfices.

### 2. Ajustements de juste valeur au bilan

Examinez les stocks (LIFO, interdit en IFRS), les impôts différés, les locations simples (sans effet sur les capitaux propres, mais avec un effet sur les bénéfices futurs), les provisions et dépréciations, et les incorporels.

### 3. Actifs incorporels

Les incorporels générés en interne (p. ex. des marques construites par la publicité) ne sont pas comptabilisés, sauf s’ils sont acquis.

#### Exemple : Alpha rachète Beta

$r$ = 10 %, sans croissance, donc $V=B+\dfrac{ROE-r}{r}B$.

**Étape 1. Évaluer chaque entreprise avant l’opération.**

$$
\begin{aligned}
V_{\text{Alpha}}&=5{,}000+\frac{0.12-0.10}{0.10}\times 5{,}000\\
&=6{,}000\\
V_{\text{Beta}}&=1{,}000+\frac{0.15-0.10}{0.10}\times 1{,}000\\
&=1{,}500
\end{aligned}
$$

Ensemble, elles valent **7 500**.

**Étape 2. Alpha paie €1,500 en espèces.** Les €500 au-dessus de la valeur comptable de Beta correspondent à une licence de 10 ans, amortie de €50 par an. La valeur comptable combinée reste à 5 000.

| Cas | Valeur comptable | RN | ROE | Valeur |
| --- | ---: | ---: | ---: | ---: |
| Espèces, après amortissement | 5 000 | $600+150-50=700$ | 14 % | 7 000 (sous-estimée) |
| Espèces, amortissement réintégré | 5 000 | 750 | 15 % | **7 500** |
| Payée en actions | 6 500 | 750 | 11,538 % | **7 500** |

La forme du paiement ne change pas la valeur.

Comptabiliser un actif omis puis l’amortir n’a **aucun effet** sur la valeur RI (un $B_0$ plus élevé est compensé par l’amortissement plus la charge du capital). Passer la R&D en charges réduit le ROE aujourd’hui mais augmente légèrement le ROE futur, par rapport à son immobilisation ; pour une entreprise mature, le ROE reflète la productivité de la R&D sans ajustement.

### 4. Éléments non récurrents

Prévoyez le RI à partir des bénéfices **récurrents** ; aucun ajustement de la valeur comptable n’est nécessaire. Vérifiez les éléments inhabituels, extraordinaires (US GAAP seulement), les charges de restructuration, les activités abandonnées et les changements de méthode. Des charges de restructuration enregistrées à **chaque** période peuvent être en réalité des charges d’exploitation ordinaires. Méfiez-vous des gains hors exploitation imputés en déduction des SG&A.

### 5. Comptabilité agressive

Accélérer les produits (expédier des marchandises non commandées) ou différer des charges (les immobiliser) gonfle à la fois les bénéfices et la valeur comptable. Provisions « pot à biscuits » : des charges excessives prises tôt, puis reprises pour gonfler le résultat ultérieur.

### 6. Considérations internationales

Frankel et Lee ont constaté que le RI non ajusté explique environ 70 % de la variation transversale des cours dans 20 pays. Les questions clés : les prévisions de bénéfices sont-elles fiables ; existe-t-il des violations systématiques du surplus propre ; la comptabilité est-elle de « mauvaise qualité », avec une comptabilisation tardive ? Là où ces problèmes sont graves, utilisez un modèle moins dépendant de la comptabilité (p. ex. le FCFE).

> [!NOTE]
>
> **Problèmes du manuel.**
>
> * Canadien National : les chiffres de RI ci-dessus sont calculés à partir des données du manuel.
> * Alphabet : la solution écrit « (0.20.2 − 0.082) » ; il faut lire (0.202 − 0.082).
> * Philips : la question parle de « Canon stock », et le dénominateur de la solution imprime 0.085 − 0.675 (il faut lire 0.085 − 0.0675). La réponse de €39.66 est juste.
> * Zenlandia : l’exemple de persistance dit que « le facteur de croissance de 1,12 reflète un taux de croissance de 12 % calculé comme le taux de rétention multiplié par le ROE (0,60 × 20 %) ». Dans la formule, 1,12 est **1 + $r$** ($r$ = 12 %) ; les deux se trouvent être égaux ici. Utilisez $(1+r-\omega)$ et $(1+r)^{T-1}$.
