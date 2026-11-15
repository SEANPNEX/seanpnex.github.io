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

Du point de vue de tous les apporteurs de capitaux : RI = NOPAT − charge totale du capital (le WACC en montant) = (ROIC − taux de charge effectif du capital) × capital d’ouverture. Les deux points de vue coïncident lorsque le coût marginal de la dette est égal à son coût actuel, et que les pondérations du capital sont des pondérations **comptables**.

**Exemple (Axis Manufacturing).** Actifs de €2m, financés à 50 % par dette (7 % avant impôt) et à 50 % par capitaux propres (12 %) ; EBIT €200,000 ; impôt 30 %.

* RN = (200 000 − 70 000) × 0,7 = €91,000 ; charge des capitaux propres 0,12 × 1 000 000 = €120,000 → **RI = −€29,000**.
* Point de vue du capital : NOPAT €140,000 − (120 000 + 0,07 × 0,7 × 1 000 000 = 169 000) = **−€29,000** ; le ROIC est de 7 %, pour un taux de charge du capital de 8,45 %.
* Évaluation : 100 000 actions d’une valeur comptable de €10 ; valeur détruite de €0.29 par action et par an → PV 0.29/0.12 = €2.42 → cours ≈ **€7.58** (E/P = 0.91/7.5833 = 12 %), P/B 0,7583. RI négatif → P/B inférieur à 1.

**Valeur économique ajoutée** (la version commerciale de Stern Stewart) :

$$
EVA=NOPAT-(C\%\times TC)
$$

où $C\%$ est le coût du capital et TC le capital total. Ajustements typiques : immobiliser et amortir la R&D (réintégrer la R&D nette au NOPAT) ; suspendre la charge du capital sur les investissements stratégiques à rendement différé ; utiliser les impôts payés (éliminer les impôts différés) ; ajouter la réserve LIFO au capital et sa hausse au NOPAT ; traiter les locations simples comme des locations-financements ; ajuster les éléments non récurrents.

**Valeur de marché ajoutée :**

$$
\begin{aligned}
MVA={}&\text{Market value of the company}\\
&-\text{Book value of total capital}
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

**Exemple (Canadien National).** $r$ = 1,75 % + 1,02 × 7,5 % = **9,40 %** ; BVPS CAD24.32 ; BPA 6,23 (2019) et 6,96 (2020) ; DPA 2,15 et 2,32. RI 2019 = 6.23 − 0.094 × 24.32 = **3,94** ; $B_{2019}$ = 24.32 + 6.23 − 2.15 = 28,40 ; RI 2020 = 6.96 − 0.094 × 28.40 = **4,29**.

**Exemple (Bugg Properties, en liquidation).** BPA 2,00, 2,50, 4,00 ; DPA 1,00, 1,25, 12,25 (de liquidation) ; $B_0$ \$6.00 ; $r$ 10 %.

| Année | 1 | 2 | 3 |
| --- | --- | --- | --- |
| Valeur comptable d’ouverture | 6.00 | 7.00 | 8.25 |
| ROE | 33,33 % | 35,71 % | 48,48 % |
| Charge des capitaux propres | 0.60 | 0.70 | 0.825 |
| RI | 1.40 | 1.80 | 3.175 |
| Valeur comptable de clôture | 7.00 | 8.25 | 0.00 |

* Modèle RI : 6.00 + 1.2727 + 1.4876 + 2.3854 = **\$11.15**. DDM : 0.9091 + 1.0331 + 9.2036 = **\$11.15**.
* Même valeur, mais le modèle RI reconnaît \$6.00 en $t$ = 0, tandis que le DDM tire \$9.20 de la dernière année : **le RI reconnaît la valeur plus tôt**.

**Exemple (Alphabet, ROE déclinant).** $r$ 8,2 % ; $B_0$ \$255.40 ; ROE de 20,2 % en 2019, en baisse de 0,5 point par an jusqu’à 8,2 % en 2043 (RI = 0 à partir de là) ; pas de dividendes. En 2019 : BPA = 0,202 × 255,40 = \$51.59 ; charge \$20.94 ; RI \$30.65 ; PV \$28.33. La somme jusqu’en 2042 donne **\$972.25**, pour un cours de \$1,037.39.

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
* Le **q de Tobin** = valeur de marché de la dette et des capitaux propres ÷ **coût de remplacement** du total de l’actif. Contrairement au P/B, il rapporte le capital total au total de l’actif, au coût de remplacement (qui reflète l’inflation) plutôt qu’au coût historique. Une productivité des actifs plus forte → un q plus élevé (Tobin s’attendait à un q moyen de 1). Le coût de remplacement est difficile à mesurer.

## Modèle RI à une phase

Le modèle à une phase suppose que le ROE et $g$ sont constants **pour toujours**, si bien que les rendements excédentaires persistent indéfiniment. En pratique, le ROE revient vers la moyenne : des concurrents entrent dans les secteurs à ROE élevé, et des sorties relèvent celui des secteurs à ROE faible.

**Exemple (Philips).** $B_0$ €13.22, cours €35.40, ROE 12 %, $g$ 6,75 %, $r$ 8,5 % (valeurs en €) :

$$
\begin{aligned}
V_0&=13.22+\frac{0.12-0.085}{0.085-0.0675}\times13.22\\
&=39.66
\end{aligned}
$$

**Croissance implicite** : résoudre $35.40=13.22+\frac{0.12-0.085}{0.085-g}\times13.22$ → **$g$ = 6,41 %**. Le cours vaut environ 2,7 fois la valeur comptable, car le ROE dépasse $r$.

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

**Exemple (Zenlandia Chemical, trois hypothèses terminales).** Cours ZL\$95.6 ; $r$ 12 % ; $B_{2019}$ ZL\$28.8517 ; BPA 7,162 et 8,356, DPA 2,9995 et 3,2995 ; puis ROE de 25 % (2022–26) et de 20 % (2027–39), avec une rétention de 60 %.

| Hypothèse de RI continu | Valeur | Conclusion |
| --- | --- | --- |
| RI = 0 après 2039 | **ZL\$86.41** | Surévaluée |
| Le RI de 2039 se poursuit pour toujours : TV = 23.8664/0.12 = 198,8867, PV = 198.8867/1.12²⁰ = 20,6179 | 86,41 + 20,62 = **ZL\$107.03** | Sous-évaluée |
| Persistance ω = 0,60 : 23.8664/[(1 + 0.12 − 0.60)(1.12)¹⁹] = 5,33 | 83,93 + 5,33 = **ZL\$86.26** | Légèrement surévaluée |

**Exemple (URS Holdings, P/B terminal).** $B_0$ €15.00 ; $r$ 7,95 % ; BPA = 25 % de la valeur comptable d’ouverture ; distribution 30 % ; $P_6$ = 1,80 × $B_6$.

* RI des années 1–6 : 2,558, 3,005, 3,531, 4,149, 4,875, 5,728 ; PV **17,755** ; $B_6$ = 39,475.
* Prime terminale = 0,8 × 39,475 = 31,580, d’une PV de **19,956**.
* $V_0$ = 15,000 + 17,755 + 19,956 = **€52.711**.
* Vérification par le DDM : PV des dividendes 7,810 + PV de $P_6$ (71,054) 44,901 = **€52.711**.

## RI face aux modèles de dividendes et de flux de trésorerie disponibles

* Les trois sont théoriquement cohérents : avec des prévisions cohérentes et le même taux d’actualisation ($r$ pour le DDM, le FCFE et le RI ; le WACC pour le FCFF), ils donnent la même valeur.
* Les modèles DDM et FCF actualisent des flux futurs ; le modèle RI part de la valeur comptable et ajoute la PV des RI : **la valeur est donc reconnue plus tôt**, et le RI est moins sensible à des valeurs terminales incertaines.

**Exemple (une rente perpétuelle).** BPA de \$1.00 pour toujours, distribution de 100 %, valeur comptable \$6.00, $r$ 10 %. DDM : 1.00/0.10 = **\$10.00**. RI = 1,00 − 0,60 = \$0.40 par an → 6.00 + 0.40/0.10 = **\$10.00**. La valeur comptable représente 60 % de la valeur dans le modèle RI ; les dividendes des cinq premières années ne valent que \$3.79 (environ 38 %) dans le DDM.

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

**L’effet d’équilibrage** (Bauman) : une comptabilité agressive augmente la valeur comptable mais réduit les bénéfices futurs, et les deux se compensent **si le surplus propre tient**. En pratique, ce n’est souvent pas le cas, et les analystes extrapolent les bénéfices passés. P. ex. valeur comptable \$1,000,000 et bénéfice avant impôt de \$200,000 après passage en charges de \$50,000 → ROE 20 %. Immobiliser plutôt ces \$50,000 donne \$250,000/\$1,050,000 = **23,81 %** ; extrapoler naïvement ce ROE surestime la valeur.

### 1. Violations du surplus propre (dirty surplus, OCI)

Les éléments qui contournent le compte de résultat :

* Variations latentes de juste valeur de certains instruments financiers (actions à la FVOCI en IFRS ; disponibles à la vente en US GAAP)
* Écarts de conversion
* Certains ajustements de retraite
* Une partie des gains et pertes sur certaines couvertures
* Écart de réévaluation des immobilisations corporelles et incorporelles (**IFRS seulement**)
* Variations de la juste valeur de certains passifs dues au risque de crédit propre (**IFRS seulement**)

La valeur comptable est juste (elle inclut les OCI cumulés), mais **le résultat net et le ROE sont faussés** pour le RI. Il n’y a de biais que si la PV des violations ne s’annule pas. Calculez le ROE historique en agrégé (RN ÷ capitaux propres), car rachats et émissions faussent le ROE par action.

**Exemples.**

* **Nokia et SAP (2018)** : les écarts de conversion contournant le résultat ont été de +€341m (Nokia) et +€887m (SAP, « autres composantes des capitaux propres »). Les deux auraient augmenté le résultat ; un ajustement à la hausse du ROE peut donc se justifier si la tendance se poursuit (mais les devises peuvent se retourner).
* **Prévoir avec les OCI** : RN \$120 pour des capitaux propres de \$1,000 (12 %), OCI −\$100, $r$ 10 %. Croissance du RI l’an prochain : **12 %** s’il n’y a pas d’OCI futurs (cohérent avec le ROE) ; **2,2 %** si les OCI se répètent ; **21,8 %** s’ils s’inversent. En utilisant le résultat global quand ils se répètent : 22.40 − 102 = **−\$79.60** de RI, au lieu de +\$20.40.
* **Mannistore** : $r$ 10 % ; DDM avec $P_5$ = \$68.40 → **\$43.59**. RI à partir du seul RN → **\$44.42** (faux : il ignore les −\$1.00 d’OCI de l’année 2) ; RI à partir du RN + OCI (RI de l’année 2 de 0,45 au lieu de 1,45) → **\$43.59**, égal au DDM. Année 6 : RN 4,56 × 1,08 = 4,92 ; RI 4,92 − 2,204 = 2,72 → croissance du RI d’environ **−2 %**, alors que le RN croît de 8 %.

### 2. Ajustements de juste valeur au bilan

Examinez les stocks (LIFO, interdit en IFRS), les impôts différés, les locations simples (sans effet sur les capitaux propres, mais avec un effet sur les bénéfices futurs), les provisions et dépréciations, et les incorporels.

### 3. Actifs incorporels

Les incorporels générés en interne (p. ex. des marques construites par la publicité) ne sont pas comptabilisés, sauf s’ils sont acquis.

**Exemple (Alpha rachète Beta).** Alpha : valeur comptable 5 000, ROE 12 % → valeur = 5,000 + (0.02/0.10)5,000 = **6 000**. Beta : valeur comptable 1 000, ROE 15 % → **1 500**. Total 7 500. Alpha paie €1,500 en espèces ; l’excédent de €500 est une licence de 10 ans.

* Avec €50 d’amortissement : RN 700, ROE 14 % → valeur **7 000** (sous-estimée).
* En réintégrant l’amortissement : RN 750, ROE 15 % → **7 500**, correct.
* Paiement en actions : valeur comptable 6 500, ROE 11,538 % → **7 500** (la forme de paiement ne change pas la valeur).

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
