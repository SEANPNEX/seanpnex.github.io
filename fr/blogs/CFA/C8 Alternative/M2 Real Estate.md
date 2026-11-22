---
title: "Immobilier"
---

# Immobilier

Les caractéristiques de l’immobilier qui comptent pour l’évaluation (NOI, levier, couverture, rendements avant et après impôt) ; la classification des biens ; les moteurs économiques de la valeur et le cycle immobilier ; chaque type d’immobilier commercial ; la due diligence ; les trois approches d’évaluation (revenu, coût, comparaison des ventes) ; et les indices immobiliers et leurs biais. La plupart des exemples suivent trois biens : **Wallonia Transit** (un entrepôt mono-locataire), **Pinebranch Estates** (résidentiel collectif) et **Eastmain Plaza** (usage mixte). (Titre 2026 : *Overview of Types of Real Estate Investment*.)

| Terme | Signification |
| --- | --- |
| **NOI** | Revenu brut effectif − charges d’exploitation − provision pour entretien (avant financement et impôt sur le revenu) |
| **Provision pour entretien** | Les dépenses d’investissement nécessaires pour **maintenir** le revenu actuel (pas les améliorations qui changent l’usage du bien) |
| **GPRI** | Revenu locatif brut potentiel = loyer de marché × surface louable (occupation complète) |
| **Perte sur baux** | GPRI − revenu locatif brut (loyer de marché vs baux en cours) |
| **LTV** | Encours du prêt hypothécaire ÷ valeur actuelle du bien |
| **DSC** | NOI ÷ service de la dette (intérêts **et** principal) |
| **Taux de capitalisation** | NOI attendu ÷ valeur du bien $= r-g$ |
| **Taux de capitalisation d’entrée / de sortie** | Le taux de capitalisation sur le NOI de la première année / sur le NOI après la vente prévue |
| **NOI stabilisé** | NOI normalisé utilisé dans la capitalisation directe quand le NOI doit évoluer |
| **Risque de renouvellement** | Le risque de perdre un locataire, et son revenu, à l’expiration d’un bail |

## Caractéristiques de l’investissement

L’immobilier va du **core** (revenu stable, proche d’une obligation) à l’**opportuniste** (développement, proche des actions). Ce qui détermine sa valeur et sa négociabilité : son **usage économique** actuel et potentiel, ses **flux nets** attendus et sa **structure de capital**.

### Revenu net d’exploitation

$$
\begin{aligned}
NOI={}&\text{Effective gross income}\\
&-\text{Operating expenses}\\
&-\text{Maintenance allowance}
\end{aligned}
$$

* Loyer brut = loyer de base par unité de surface × surface louable.
* Revenu brut effectif = loyer brut + autres revenus (récupération de charges, refacturations, parking) − vacance et concessions.
* Les charges d’exploitation sont fixes (taxes, assurance, services, réparations) ou variables (énergie et fluides), supportées par le propriétaire ou refacturées aux locataires.
* La provision pour entretien est courante en Europe et en Amérique du Nord, moins par exemple au Japon.

#### Exemple : NOI de Wallonia Transit

Un entrepôt de 10 000 m² avec un seul locataire (EUR).

| Donnée | Valeur |
| --- | ---: |
| Loyer de base | 52,50 par m² |
| Récupération des services et réparations (fixe) | 10,25 par m² |
| Services et réparations, payés par le propriétaire | 120 750 |
| Taxe foncière, refacturée au locataire | 12 500 |
| Assurance, refacturée au locataire | 40 000 |
| Provision pour entretien | 100 000 |

**Étape 1. NOI.**

| Wallonia Transit | EUR |
| --- | ---: |
| Loyer brut (52.50 × 10,000) | 525,000 |
| Récupération des charges d’exploitation (10.25 × 10,000) | 102,500 |
| Taxe foncière + assurance refacturées | 52,500 |
| **Revenu brut effectif** | **680,000** |
| Charges d’exploitation (120,750 + 12,500 + 40,000) | (173,250) |
| Provision pour entretien | (100,000) |
| **NOI** | **406,750** |

**Étape 2. Sensibilités.**

* Services et réparations dépassent de 20 % (144 900) : le surplus de 24 150 n’est **pas** récupéré (la récupération est fixée à 102 500) → NOI **382 600**.
* 10 % de vacance (s’il y avait plusieurs locataires) : déduire 10 % du loyer brut, 52 500 → NOI **354 250**.

Le NOI est de **406 750 EUR**. Seule une baisse des coûts de services et de réparations l’augmente ; taxes et assurance sont entièrement refacturées.

### Levier et couverture

$$
LTV=\frac{\text{Mortgage debt outstanding}}{\text{Current property value}}
$$

$$
DSC=\frac{\text{NOI}}{\text{Debt service}}
$$

* Un LTV plus bas signifie plus de fonds propres pour le propriétaire. Le LTV varie avec les valeurs et le remboursement du principal.
* Service de la dette = **intérêts + principal**. Les prêteurs fixent des limites de LTV et de DSC dans les covenants.

#### Exemple : levier et couverture de Wallonia

| Donnée | EUR |
| --- | ---: |
| Prix | 3,750,000 |
| Prêt (20 ans, entièrement amortissable, 4 %) | 3,000,000 |
| Annuité | 220,745 |
| Intérêts de la 1re année | 120,000 |
| NOI | 406,750 |

**Étape 1. Solde du prêt après la 1re année.**

$$
\begin{aligned}
\text{Principal}&=220{,}745-120{,}000\\
&=100{,}745\\
\text{Balance}&=3{,}000{,}000-100{,}745\\
&=2{,}899{,}255
\end{aligned}
$$

**Étape 2. LTV**, aujourd’hui et si la valeur augmente de 10 %.

$$
\begin{aligned}
LTV&=\frac{2{,}899{,}255}{3{,}750{,}000}=0.773\\
LTV_{+10\%}&=\frac{2{,}899{,}255}{4{,}125{,}000}=0.703
\end{aligned}
$$

**Étape 3. DSC**, avec un NOI de 406 750 et de 382 600.

$$
\begin{aligned}
DSC&=\frac{406{,}750}{220{,}745}=1.84\\
DSC_{\text{low}}&=\frac{382{,}600}{220{,}745}=1.73
\end{aligned}
$$

Le LTV est de **0,773** et le DSC de **1,84**.

### Rendements des fonds propres

$$
EDR=\frac{NOI-\text{Debt service}}{\text{Price}-\text{Loan}}
$$

L’EDR est le taux de dividende des fonds propres ; le numérateur est le flux avant impôt, le dénominateur les fonds propres investis. C’est une mesure de première année, en trésorerie seulement, avant impôt, qui ignore plus et moins-values.

$$
\text{After-tax CF}=\text{Pretax CF}-\text{Taxes}
$$

$$
\begin{aligned}
\text{Taxes}={}&t\times(NOI-\text{Interest}\\
&-\text{Depreciation})
\end{aligned}
$$

La base amortissable est le coût (plus les améliorations) moins le **terrain** : le terrain n’est pas amorti.

#### Exemple : rendements des fonds propres de Wallonia

Le prêt ci-dessus ; le terrain vaut 750 000, le bâtiment a une durée de vie de 30 ans, et le taux d’imposition est de 25 %.

**Étape 1. EDR.** Fonds propres investis = 3 750 000 − 3 000 000 = 750 000.

$$
\begin{aligned}
EDR&=\frac{406{,}750-220{,}745}{750{,}000}\\
&=\frac{186{,}005}{750{,}000}=24.8\%
\end{aligned}
$$

Avec un NOI de 382 600 : 161,855/750,000 = 21,6 %.

**Étape 2. Impôts.**

$$
\begin{aligned}
\text{Dep.}&=\frac{3{,}750{,}000-750{,}000}{30}\\
&=100{,}000\\
\text{Taxable}&=406{,}750-120{,}000\\
&\quad-100{,}000=186{,}750\\
\text{Taxes}&=0.25\times 186{,}750=46{,}688
\end{aligned}
$$

**Étape 3. Flux après impôt.**

$$
\begin{aligned}
\text{After-tax CF}&=186{,}005-46{,}688\\
&=139{,}317
\end{aligned}
$$

L’EDR est de **24,8 %**, et le flux après impôt de **139 317 EUR**.

> [!IMPORTANT]
> Même prix et même NOI, mais une **valeur du terrain plus faible** → une base amortissable plus grande → plus d’amortissement → moins d’impôt → un flux après impôt **plus élevé**.

## Classification

* **GICS** : **REIT** (diversifiées, industrielles, hôtels et loisirs, bureaux, santé, résidentielles, commerces, spécialisées) et **gestion et développement immobiliers** (activités diversifiées, sociétés d’exploitation immobilière, développement, services). Les prêts hypothécaires et autres dettes immobilières sont classés en titres à revenu fixe du secteur financier.
* **Sensibilité au cycle économique** : défensif (p. ex. REIT de santé, la demande médicale étant stable) ou cyclique (p. ex. REIT industrielles et de bureaux).
* **Catégories de biens**, selon l’emplacement, l’âge, les revenus locaux, l’appréciation récente et l’état. Pour le résidentiel collectif :

| Catégorie | Caractéristiques |
| --- | --- |
| A | Construit au cours des 10 dernières années, ou rénové en profondeur ; équipements haut de gamme ; meilleurs matériaux |
| B | Moins de 20 ans, ou rénové ; équipements datés ; bonne qualité, peu d’entretien différé |
| C | Moins de 30 ans, ou rénové ; équipements limités et datés ; entretien différé |
| D | Plus de 30 ans, dans un emplacement moins recherché ; pas d’équipements ; mauvais état |

* Les catégories supérieures obtiennent les loyers et les prix les plus élevés, mais ont **moins** de marge d’appréciation ; les catégories inférieures sont moins chères avec plus de potentiel (elles peuvent nécessiter des investissements et une amélioration des conditions locales).
* Les certifications de durabilité, **BREEAM** (Royaume-Uni et Europe) et **LEED** (États-Unis ; la plus reconnue au monde), augmentent les coûts de construction mais peuvent réduire les coûts d’exploitation, augmenter les loyers, réduire la vacance et apporter des avantages fiscaux.
* L’apprentissage automatique sur de grandes bases de données peut aider à prévoir les prix des logements, mais les modèles peinent quand le cycle se retourne (voir Zillow, ci-dessous).

## Formes d’investissement immobilier

| | Dette | Fonds propres |
| --- | --- | --- |
| **Privé** | Prêts hypothécaires ; prêts à la construction ; dette mezzanine | **Direct** : propriété exclusive, coentreprises, sociétés en commandite. **Indirect** : fonds immobiliers, REIT privées |
| **Public** | MBS, CMBS, CMO ; obligations sécurisées ; REIT hypothécaires ; ETF hypothécaires | Actions de sociétés de construction, d’exploitation ou de développement ; REIT cotées ; OPCVM (UCITS), fonds communs, ETF |

* Les **sociétés d’exploitation immobilière** sont des sociétés imposables, avec peu de restrictions. Les **REIT** détiennent et exploitent surtout des biens locatifs ou achètent des prêts hypothécaires, et distribuent presque tous leurs bénéfices pour éviter l’impôt sur les sociétés. Les REIT existent dans plus de 30 pays (sociétés aux États-Unis et en Europe ; trusts gérés de l’extérieur en Australie ; la Chine a lancé des REIT d’infrastructure en 2021 et des REIT de logements locatifs en 2022).
* Une mesure de performance des REIT : FFO = résultat net + amortissements + dépréciations − plus-values nettes de cession (plus de détails au M3).
* Les prêts immobiliers sont à long terme, garantis en premier rang, à taux variable, fixe ou révisable. Les investisseurs hypothécaires aux États-Unis et au Japon font face au **risque de remboursement anticipé**.
* **Obligations sécurisées** : les prêts restent au bilan de la banque, avec **double recours** (banque + pool) et remplacement des garanties défaillantes → risque et rendement plus faibles. **MBS** : le pool est transféré à une entité ad hoc, avec des tranches d’exposition différente au remboursement anticipé.

| Stratégie, du risque et rendement le plus faible au plus élevé | Caractéristiques |
| --- | --- |
| Dette senior | Premières hypothèques ; proche de la dette, surtout publique |
| Core | Biens générant un revenu stable |
| Core-plus | Quelques rénovations ; flux assez stables |
| Value-add | Surfaces vacantes, améliorations et repositionnement |
| Opportuniste | Nouveaux développements ; rendements proches des actions, surtout privés |

## Risques

* **Économiques et concurrentiels** : le niveau et le type d’activité économique, la démographie, l’offre relative, et le coût et la disponibilité du capital → loyers, occupation et prix.
* **Propres au bien** : gestion (entretien, locataires et baux), obsolescence et changement technologique, facteurs environnementaux (règles d’efficacité énergétique, inondations, séismes, ouragans), urbanisme.
* **Risque de modèle** : dépendance excessive aux modèles de prix statistiques ou d’apprentissage automatique. Zillow Offers (2021) achetait des logements grâce à un algorithme d’évaluation, n’a pas su faire face à la volatilité des prix, et a perdu environ 1 milliard USD.

## Le cycle immobilier

**Moteurs économiques.**

* Croissance du PIB, créations d’emplois et hausse des salaires → demande de surfaces commerciales et **formation des ménages**.
* Taux d’intérêt et crédit : l’immobilier est fortement financé par la dette, donc très sensible aux taux. Des taux hypothécaires bas et un faible ratio prix des logements/revenus favorisent l’**achat** d’un logement plutôt que la location en résidentiel collectif.
* Longs délais de construction : la nouvelle offre arrive souvent après que les conditions ont changé.
* Facteurs locaux : climat des affaires, grands employeurs, infrastructures, fiscalité, urbanisme, transports, écoles et sécurité ; des industries ou une population en déclin pèsent sur les valeurs.

| | Reprise | Expansion | Suroffre | Récession |
| --- | --- | --- | --- | --- |
| Économie | Creux du cycle | Croissance, hausse des salaires et de la confiance | La croissance ralentit | Ralentissement |
| Crédit | Restreint | Assouplissement | | Resserrement |
| Construction | Peu ou pas | Début des constructions neuves et des améliorations | **Les projets en cours s’achèvent** → **excédent** de biens | Mises en chantier au plus bas |
| Marché | Les ménages retardent leur formation ; occupation en **baisse** ; les propriétaires baissent les loyers ; prix et loyers plus bas | Occupation, loyers et prix en **hausse** | Occupation et loyers en **baisse** ; les prix se stabilisent puis baissent | Baisse de l’occupation qui **s’accélère** ; les prix baissent ; les bailleurs offrent des conditions favorables |

| Phase | Taux d’intérêt | NOI | DSC | LTV |
| --- | --- | --- | --- | --- |
| **Reprise** | Au plus bas, puis en hausse | Au plus bas, puis en hausse | Au plus bas, puis en hausse | **Pic**, puis baisse |
| **Expansion** | En hausse | En hausse | En hausse | En baisse |
| **Suroffre** | Pic, puis baisse | **Pic**, puis baisse | **Pic**, puis baisse | **Au plus bas**, puis hausse |
| **Récession** | Bas | En baisse | En baisse | En hausse |

> [!IMPORTANT]
> Le NOI et le DSC **culminent en phase de suroffre** et touchent leur plus bas en reprise ; le LTV en est l’image inversée (pic en reprise, plus bas en suroffre). Le coût de remplacement dépasse le prix de marché en phase de **suroffre**.

## Rôle dans un portefeuille

L’immobilier offre un revenu courant, une plus-value en capital, une couverture contre l’inflation, de la diversification et des avantages fiscaux.

* **Revenu courant** : les conditions des baux diffèrent souvent d’un loyer fixe.
  * **Clauses de paliers** : hausses de loyer futures fixées à l’avance (non conditionnelles, contrairement aux paliers obligataires).
  * **Loyers indexés** : ils varient avec une variable de marché comme l’IPC.
  * **Loyer variable** : un loyer supplémentaire quand les ventes d’un commerçant dépassent un niveau cible (seuil).
  * Charges : le propriétaire les paie toutes, en refacture une partie, ou facture les hausses au-delà d’un plafond ; plus les charges des parties communes.
* **Plus-value en capital** : mesurée précisément seulement à la vente du bien.
* **Couverture contre l’inflation** : loyers et prix tendent à augmenter avec l’inflation → un rendement réel dans le temps.
* **Diversification** : faible corrélation avec les actions, les obligations et la trésorerie ; mais l’immobilier **coté** (REIT, MBS) est plus corrélé aux actions et aux obligations à court et moyen terme.
* **Avantages fiscaux** : amortissement fiscal plus rapide que la durée de vie utile (p. ex. aux États-Unis) ; les REIT évitent la double imposition.

$$
\begin{aligned}
\text{Rent}={}&\text{Base rent}\times\text{Area}\\
&+\text{Overage rate}\\
&\times(\text{Sales}-\text{Breakeven})
\end{aligned}
$$

#### Exemple : loyer variable de Chandra Shops

Un magasin de 500 ft² avec des ventes mensuelles de 1 250 000 INR.

| | Ancien bail | Nouveau bail |
| --- | --- | --- |
| Loyer de base au ft² par mois | 300 INR | 270 INR (−10 %) |
| Loyer variable | Aucun | 8 % des ventes au-delà de 1 000 000 INR |

**Étape 1. Loyer avec le nouveau bail.**

$$
\begin{aligned}
\text{Base}&=270\times 500=135{,}000\\
\text{Overage}&=0.08\times 250{,}000\\
&=20{,}000\\
\text{Rent}&=135{,}000+20{,}000\\
&=155{,}000
\end{aligned}
$$

**Étape 2. Comparer.** L’ancien bail coûte 300 × 500 = 150 000.

Le nouveau bail coûte **155 000 INR** par mois, soit 5 000 de plus. Une baisse de 9,6 % avec 5,6 % de loyer variable coûterait 135 600 + 14 000 = 149 600, ce que Chandra préférerait.

## Types d’immobilier commercial

L’objectif est de percevoir un **revenu locatif**.

* **Résidentiel** : maisons individuelles (surtout occupées par leurs propriétaires) et immeubles **collectifs** (la majeure partie de l’immobilier commercial résidentiel), regroupés selon l’emplacement, la hauteur et les équipements. La demande dépend des revenus, de l’emploi, des conditions locales et de l’accessibilité à la propriété. Les locataires peuvent être protégés (limites aux hausses de loyer ou aux expulsions), et les baux sont bien plus **courts** que pour le non-résidentiel.
* L’immobilier **non résidentiel** est plus étroitement lié à l’usage d’une industrie, donc plus exposé aux changements **structurels** :
  * **Bureaux** : risque de développement plus faible quand ils sont construits pour des locataires clés (p. ex. des cabinets médicaux près d’un hôpital) ou quand un locataire principal s’engage sur une grande partie de la surface. Le télétravail et le travail hybride ont réduit la demande.
  * **Industriel et entrepôts** : le commerce en ligne a structurellement accru la demande. Souvent conçus pour un usage précis et **difficiles à reconvertir** (les moins susceptibles d’être reconvertis), même si les mieux situés sont adaptés.
  * **Commerce** : centres commerciaux régionaux avec locomotives, centres de proximité, magasins indépendants. Les achats en ligne ont réduit la demande des centres commerciaux, ce qui pousse aux reconversions ; la proximité des actifs et des résidents détermine loyers, occupation et prix.
  * **Hôtellerie** : les hôtels d’affaires sont **cycliques** ; les petits motels pour les voyageurs de passage le sont moins ; les hôtels touristiques dépendent de la confiance des consommateurs et du revenu disponible ; les complexes de destination demandent une gestion intensive avec des coûts fixes élevés.
  * **Autres** : logements étudiants et seniors (la demande des seniors augmente avec le vieillissement, mais la concurrence aussi) ; garde-meubles (faibles dépenses d’investissement et d’exploitation, baux **au mois** → souplesse tarifaire mais exposition à la demande) ; hôpitaux, antennes-relais, centres de données, parkings.
  * **Usage mixte** : combine des types de locataires (p. ex. bureaux + commerces) : revenu diversifié, mais lié à l’économie locale et corrélé, car les locataires des bureaux sont souvent les clients des commerces.

### Analyse des flux {#cash-flow-analysis}

$$
GPRI=\text{Market rent}\times\text{Space}
$$

$$
GRI=\text{Current rent}\times\text{Space}
$$

* **Perte sur baux** = GPRI − GRI. Positive : les baux en cours sont **inférieurs** au loyer de marché. Négative : ils lui sont supérieurs (p. ex. offre excédentaire et loyers de marché en baisse).
* Revenu locatif net = GRI − vacance et impayés − concessions et ajustements.
* Revenu total (brut effectif) = revenu locatif net + autres revenus + récupération de charges.
* NOI = revenu total − charges d’exploitation et de location − provision pour entretien.

#### Exemple : NOI de Pinebranch Estates

240 logements de 1 200 ft² ; le loyer de marché est de 2,00 AUD/ft² par mois ; le propriétaire paie taxes et assurance.

**Étape 1. Revenu locatif brut potentiel.**

$$
\begin{aligned}
GPRI&=240\times 1{,}200\times 2.00\times 12\\
&=6{,}912{,}000
\end{aligned}
$$

**Étape 2. Du GPRI au NOI.**

| Pinebranch Estates | AUD |
| --- | ---: |
| Revenu locatif brut potentiel | 6,912,000 |
| Moins : perte sur baux | (128,200) |
| **Revenu locatif brut** | 6,783,800 |
| Moins : vacance et impayés | (791,236) |
| Moins : concessions et ajustements | (485,124) |
| **Revenu locatif net** | 5,507,440 |
| Plus : autres revenus | 295,211 |
| Plus : charges récupérées auprès des locataires | 525,800 |
| **Revenu total** | 6,327,651 |
| Moins : charges d’exploitation et de location | (2,753,000) |
| Moins : provision pour entretien | (655,000) |
| **NOI** | **2,919,651** |

Le NOI est de **2 919 651 AUD**. Contrairement à Wallonia, les nombreux locataires et les baux courts rendent les déductions locatives bien plus importantes.

#### Exemple : scénario défavorable d’Eastmain Plaza

Un bien à usage mixte de 350 000 ft² ; le NOI actuel est de 13 085 217 MYR.

| Surface | Part | Loyer par ft² |
| --- | ---: | ---: |
| Bureaux | 90 % | 100 MYR |
| Commerces | 10 % | 250 MYR |

**Étape 1. Loyer brut.**

$$
\begin{aligned}
\text{Office}&=0.9\times 100\times 350{,}000\\
&=31{,}500{,}000\\
\text{Retail}&=0.1\times 250\times 350{,}000\\
&=8{,}750{,}000\\
\text{Total}&=40{,}250{,}000
\end{aligned}
$$

**Étape 2. Scénario défavorable.** De nouveaux commerces à proximité font perdre le loyer variable (450 800) et la moitié des loyers commerciaux (4 375 000).

$$
\begin{aligned}
\text{Loss}&=450{,}800+4{,}375{,}000\\
&=4{,}825{,}800\\
NOI&=13{,}085{,}217-4{,}825{,}800\\
&=8{,}259{,}417
\end{aligned}
$$

Le NOI baisse de 37 %, à **8 259 417 MYR**.

#### Entraînement : du GPRI au NOI

En GBP ; tiré de notes antérieures, pas du manuel 2026.

| Poste | GBP |
| --- | --- |
| Revenu locatif brut potentiel | 5,672,000 |
| Moins : perte sur baux | (116,500) |
| **Revenu locatif brut** | 5,555,500 |
| Moins : vacance et impayés | (342,600) |
| Moins : concessions et ajustements | (281,000) |
| Plus : autres revenus | 134,710 |
| Plus : charges récupérées auprès des locataires | 610,300 |
| **Revenu brut effectif** | 5,676,910 |
| Moins : charges d’exploitation et de location | (3,704,510) |
| Moins : provision pour entretien | (456,000) |
| **NOI** | **1,516,400** |

## Due diligence

L’immobilier est moins transparent et standardisé que les titres cotés ; la due diligence est donc plus détaillée :

* **Revue du marché** : conditions macroéconomiques et locales ; prix demandés vs prix de vente effectifs (privilégier les ventes effectives) ; exposition environnementale (incendies, inondations → assurance) ; le coût de mise aux normes énergétiques.
* **Baux en cours** : loyers vs marché, vacance, durées des baux, calendrier des échéances, historique de paiement et solvabilité des locataires.
* **Location future** : coûts de renouvellement et de relocation (commissions d’agents, périodes de vacance, loyers gratuits, participations aux aménagements, en général capitalisées et amorties sur la durée du bail) ; offre locale ; changements juridiques (le plafonnement des loyers de Berlin en 2020 a fait baisser les loyers de 11 %, mais l’offre de logements concernés a chuté d’environ 59 % ; il a été annulé l’année suivante).
* **Revue financière** : plusieurs années d’états audités et de factures d’exploitation ; vérifier si le NOI a été gonflé par un sous-investissement dans l’entretien ou par de fortes incitations aux locataires.
* **Documents** : revue juridique et fiscale du titre de propriété, absence de privilèges ou d’obligations fiscales, conformité à l’urbanisme et aux règles environnementales. Elle compte pour l’achat, mais c’est la **moins susceptible** d’alimenter la prévision du NOI.
* **Inspection et contrats de services** : arpentage ; inspection physique, technique et environnementale ; évaluation du gestionnaire du bien ; revue des contrats de services.

Les écarts conduisent à des corrections, à une baisse du prix ou à l’abandon de l’opération.

## Évaluation

### Approche par le revenu : capitalisation directe

$$
\text{Property value}=\frac{\text{Expected NOI}}{\text{Cap rate}}
$$

$$
\text{Cap rate}=r-g=\frac{\text{Expected NOI}}{\text{Property value}}
$$

* $r$ = taux sans risque + prime de risque propre au bien. Un $r$ plus élevé (taux de référence plus élevés, bien plus risqué, suroffre) → valeur plus faible ; une croissance plus rapide du NOI ($g$ plus élevé) → taux de capitalisation plus bas → valeur plus élevée. $g$ < 0 suggère un bien en fin de vie utile.
* Les taux de capitalisation viennent en général de ventes comparables ; ils se comparent au rendement courant d’une obligation, ou à l’inverse de EV/EBITDA.
* Idéal quand le NOI est **stable** ; sinon utiliser le **NOI stabilisé**.

#### Exemple : capitalisation directe de Wallonia

$r$ = 12,5 % et $g$ = 2 % ; le NOI est de 406 750 (382 600 avec le dépassement de coûts).

$$
\begin{aligned}
\text{Cap rate}&=12.5\%-2\%=10.5\%\\
V&=\frac{406{,}750}{0.105}=3{,}873{,}810\\
V_{\text{low}}&=\frac{382{,}600}{0.105}=3{,}643{,}810
\end{aligned}
$$

La valeur est de **3 873 810 EUR**. Le dépassement de coûts la réduirait de 6 % : ne l’intégrer que s’il doit se répéter.

### Approche par le revenu : DCF

$$
\text{Value}=\sum_{i=1}^{n}\frac{NOI_{i}}{(1+r)^i}+\frac{TV}{(1+r)^n}
$$

$$
TV=\frac{NOI_n(1+g)}{r-g}
$$

Préférable quand l’analyste peut voir comment le NOI va évoluer. La valeur terminale peut aussi venir de la capitalisation du NOI de biens comparables.

#### Exemple : DCF d’Eastmain

Détention de 5 ans ; $r$ = 14 %, et le NOI croît à $g$ = 3 % après l’année 5 (MYR).

**Étape 1. VA du NOI.**

| Année | NOI | VA à 14 % |
| ---: | ---: | ---: |
| 1 | 8,259,417 | 7,245,103 |
| 2 | 6,092,385 | 4,687,892 |
| 3 | 13,539,114 | 9,138,516 |
| 4 | 14,020,153 | 8,301,056 |
| 5 | 14,515,622 | 7,538,959 |
| **Total** | | **36,911,526** |

**Étape 2. Valeur terminale.**

$$
\begin{aligned}
TV&=\frac{14{,}515{,}622\times 1.03}{0.14-0.03}\\
&=135{,}919{,}006
\end{aligned}
$$

**Étape 3. Valeur.**

$$
\begin{aligned}
V&=36{,}911{,}526+\frac{135{,}919{,}006}{1.14^5}\\
&=36{,}911{,}526+70{,}592{,}073\\
&=107{,}503{,}599
\end{aligned}
$$

**Étape 4. Taux de capitalisation.**

$$
\begin{aligned}
\text{Going-in}&=\frac{8{,}259{,}417}{107{,}503{,}599}=7.68\%\\
\text{Terminal}&=14\%-3\%=11\%
\end{aligned}
$$

La valeur est de **107 503 599 MYR**. Le taux de capitalisation d’entrée est inférieur au taux de sortie car le NOI des années 1–2 est déprimé par le scénario défavorable (le risque, $r$, est le même chaque année).

### Approche par le coût

$$
\begin{aligned}
\text{Value}={}&\text{Replacement cost}\\
&-\text{Depreciation}\\
&-\text{Other adjustments}
\end{aligned}
$$

* Coût de remplacement = terrain + construction + marge du promoteur : le coût d’acheter un terrain et de construire un bien de **même usage économique**, y compris les coûts annexes, le financement et la **marge du promoteur**.
* Ajuster à la baisse pour l’âge, un emplacement moins idéal ou l’impossibilité de le construire aujourd’hui (normes, protection patrimoniale) ; les ajustements peuvent être supérieurs ou inférieurs à l’amortissement comptable.
* Un investisseur ne devrait pas payer plus que le coût de construction d’un bien comparable ; le coût de remplacement dépasse les prix de marché en **suroffre**.

#### Exemple : approche par le coût de Wallonia

| Donnée | EUR |
| --- | ---: |
| Coûts de construction (hard costs) | 2,675,000 |
| Coûts annexes (soft costs), intérêts et marge du promoteur | 925,000 |
| Terrain | 750,000 |
| Durée de vie utile | 30 ans |
| Âge | 4 ans |

**Étape 1. Coût de remplacement.**

$$
\begin{aligned}
RC&=2{,}675{,}000+925{,}000\\
&\quad+750{,}000=4{,}350{,}000
\end{aligned}
$$

**Étape 2. Amortissement** (le terrain n’est pas amorti).

$$
\begin{aligned}
\text{Annual}&=\frac{4{,}350{,}000-750{,}000}{30}\\
&=120{,}000\\
\text{4 years}&=4\times 120{,}000=480{,}000
\end{aligned}
$$

**Étape 3. Valeur.**

$$
V=4{,}350{,}000-480{,}000=3{,}870{,}000
$$

La valeur est de **3 870 000 EUR**.

### Approche par comparaison des ventes

* Utiliser les ventes récentes de biens comparables ; l’unité de comparaison est en général le **prix au m² ou au ft²** (ou le prix rapporté au loyer ou au revenu).
* Ajuster pour la date de vente (une vente plus ancienne sur un marché en hausse → ajuster **à la hausse**), la taille (plus grand → décote), l’emplacement (un comparable plus éloigné du centre vaut moins → ajuster à la hausse) et l’âge (un comparable plus récent → ajuster le bien évalué **à la baisse**).
* Faire la moyenne des prix unitaires ajustés × la surface du bien évalué ; les ventes plus récentes pèsent davantage.

#### Exemple : comparaison des ventes de Pinebranch

Le bien évalué fait 288 000 ft² ; les prix ajustés des trois comparables sont de 89,27, 104,23 et 103,60 AUD par ft².

$$
\begin{aligned}
\text{Average}&=\frac{89.27+104.23+103.60}{3}\\
&=99.03\\
V&=99.03\times 288{,}000\\
&=28{,}520{,}640
\end{aligned}
$$

La valeur est d’environ **28,52 millions AUD** (28 521 036 avec les prix ajustés non arrondis).

| Approche | Surtout utilisée pour |
| --- | --- |
| Revenu | Grands biens commerciaux avec peu de ventes comparables, où le revenu guide la décision |
| Comparaison des ventes | Marchés avec beaucoup de transactions similaires (maisons individuelles) ; les experts lui accordent un poids important |
| Coût | Vérification de la valeur ; biens neufs ou à usage spécifique |

## Indices immobiliers

Les indices du marché privé (fondés sur les expertises ou les transactions) ne sont en général **pas investissables** ; les indices publics (REIT, MBS, obligations sécurisées) le sont en général, via des fonds, des ETF ou des OPCVM.

### Indices fondés sur les expertises

P. ex. GREFI (NCREIF + INREV + ANREV) : trimestriel, pondéré par la capitalisation.

$$
HPR=\frac{NOI-\text{Capex}+\Delta MV}{MV_{\text{begin}}}
$$

où $\Delta MV=MV_{\text{end}}-MV_{\text{begin}}$, la variation de la valeur de marché expertisée. Cela équivaut à un TRI sur une période calculé avec les valeurs d’expertise.

#### Exemple : rendement fondé sur les expertises de Wallonia

| Donnée | EUR |
| --- | ---: |
| Prix d’achat il y a deux ans | 3,750,000 |
| Rendement INREV, année 1 / année 2 | +5,6 % / +3,2 % |
| NOI | 406,750 |
| Capex | 100,000 |

**Étape 1. Valeurs d’expertise** au début et à la fin de l’année 2.

$$
\begin{aligned}
MV_{\text{begin}}&=3{,}750{,}000\times 1.056\\
&=3{,}960{,}000\\
MV_{\text{end}}&=3{,}960{,}000\times 1.032\\
&=4{,}086{,}720
\end{aligned}
$$

**Étape 2. HPR.**

$$
\begin{aligned}
\text{Income}&=406{,}750-100{,}000\\
&=306{,}750\\
\Delta MV&=4{,}086{,}720-3{,}960{,}000\\
&=126{,}720\\
HPR&=\frac{306{,}750+126{,}720}{3{,}960{,}000}\\
&=10.95\%
\end{aligned}
$$

Le rendement sur la période de détention est de **10,95 %**.

Un inconvénient : la composante de revenu (NOI − dépenses d’investissement) n’est **pas** ce que les investisseurs de fonds ou de REIT reçoivent en distributions.

**Retard des expertises.**

* Les expertises sont en retard sur les prix de transaction sur les marchés **haussiers comme baissiers**, et tous les biens ne sont pas expertisés chaque trimestre.
* Il en résulte un indice **lissé** → volatilité **sous-estimée**, corrélation **plus faible** avec les autres actifs, et ratio de Sharpe **surestimé** → surallocation à l’immobilier privé.
* Cela compte peu pour comparer des gérants qui utilisent tous des expertises, et beaucoup pour comparer avec des actifs cotés.
* Remèdes : **délisser** l’indice, ou utiliser un indice **fondé sur les transactions**.

**Délissage.** Le rendement d’expertise $R_t^*$ est une moyenne pondérée du vrai rendement et du rendement d’expertise de la période précédente :

$$
R_t^*=aR_t+(1-a)R_{t-1}^*
$$

$$
R_t=\frac{R_t^*-(1-a)\,R_{t-1}^*}{a}
$$

avec $0\le a\le 1$ ; un $a$ plus élevé signifie un ajustement plus rapide.

#### Exemple : délissage des rendements d’expertise

$a$ = 0,6.

| Période | Expertise $R_t^*$ | Précédent $R_{t-1}^*$ |
| ---: | ---: | ---: |
| 1 | 0.50% | 2.70% |
| 6 | −8.70% | 1.00% |

$$
\begin{aligned}
R_1&=\frac{0.50-0.4\times 2.70}{0.6}\\
&=\frac{-0.58}{0.6}=-0.97\%\\
R_6&=\frac{-8.70-0.4\times 1.00}{0.6}\\
&=\frac{-9.10}{0.6}=-15.17\%
\end{aligned}
$$

Les vrais rendements, **−0,97 %** et **−15,17 %**, sont plus extrêmes que les rendements d’expertise : les rendements délissés sont plus volatils.

### Indices fondés sur les transactions

* **Indice de ventes répétées** : utilise les biens vendus au moins **deux fois** ; une régression répartit la variation de valeur entre les périodes (p. ex. RCA CPPI). Les ventes uniques ne sont pas utilisées ; l’indice est plus fiable avec plus de transactions.
* **Indice hédonique** : pas besoin de ventes répétées ; une régression contrôle la taille, l’âge, la qualité et l’emplacement. Gourmand en données, et le plus fiable au niveau national.
* Les indices fondés sur les transactions précèdent les indices d’expertise, mais ajoutent un **bruit** statistique d’un trimestre à l’autre ; ils sont exacts sur le long terme.

### Autres indices

* **Indices de REIT** (fonds propres cotés) : les pondérations par capitalisation flottante orientent par exemple un indice de REIT Asie-Pacifique vers les plus grands marchés (comme Singapour).
* **Indices de MBS** : risque de remboursement anticipé (contraction quand les taux baissent, extension quand ils montent → la duration effective s’allonge) ; surtout répandus aux États-Unis.
* **Indices d’obligations sécurisées** : double recours et pénalités de remboursement anticipé → rendements stables et peu risqués (le Danemark est le plus grand marché).

> [!NOTE]
>
> **Problèmes du manuel et des notes.**
>
> * Le tableau prévisionnel de Wallonia indique un loyer brut de 525 500, mais le calcul (et le total de 680 000) utilise 525 000.
> * Pinebranch : 5 507 440 + 295 211 + 525 800 = 6 328 451, et non 6 327 651 comme imprimé (des récupérations de charges de 525 000 correspondraient) ; le NOI de 2 919 651 suit le total imprimé.
> * Délissage : les versions antérieures de ces notes **ajoutaient** le terme retardé ($R_t^*/a+\frac{1-a}{a}R_{t-1}^*$), donnant 2,63 % et −13,83 %. Résoudre $R_t^*=aR_t+(1-a)R_{t-1}^*$ pour $R_t$ le **soustrait**.
