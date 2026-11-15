---
title: Évaluer la qualité de l’information financière
---

# Évaluer la qualité de l’information financière

> [!Note]
>
> Très peu d’importance à l’examen. Concentrez-vous sur les concepts, les signaux d’alerte et la lecture des deux modèles ; les formules n’ont pas à être mémorisées.

## Dimensions

La qualité de l’information financière a deux dimensions distinctes :

* **La qualité de l’information publiée** : l’information est-elle **utile à la décision**, c’est-à-dire **pertinente** et **fidèlement présentée** (complète, neutre et exempte d’erreurs) ? Elle concerne les **états publiés**.
* **La qualité des bénéfices (des résultats)** : les bénéfices sont-ils **durables**, et procurent-ils un **niveau de rendement suffisant** sur le capital investi ? Elle concerne l’**activité sous-jacente**.

Les deux sont liées : la qualité des bénéfices ne peut être jugée que si la qualité de l’information est élevée. Une entreprise peut publier fidèlement et avoir pourtant des bénéfices de faible qualité, p. ex. lorsqu’elle publie honnêtement un rendement inférieur à son coût du capital.

**Le spectre de qualité**, du meilleur au pire :

| | Information publiée | Bénéfices |
| --- | --- | --- |
| 1 | Conforme aux GAAP, utile à la décision | Durables, rendement suffisant |
| 2 | Conforme aux GAAP, utile à la décision | **Bénéfices de faible qualité** : non durables, ou rendement insuffisant |
| 3 | Conforme aux GAAP, mais choix comptables **biaisés** (agressifs ou prudents) | |
| 4 | Conforme aux GAAP, mais **gestion** des résultats par des actions réelles (p. ex. décaler des ventes ou couper la R&D pour atteindre un objectif) | |
| 5 | **Écarts par rapport aux GAAP** : comptabilité non conforme | |
| 6 | Transactions **fictives** : fraude | |

En dessous des deux premières lignes, l’information n’est plus utile à la décision ; la qualité des bénéfices ne peut donc plus être évaluée.

### Information agressive ou prudente

Les deux sont des choix **biaisés**, et les deux réduisent la qualité de l’information :

* Les choix **agressifs** augmentent les bénéfices publiés ou la situation financière **de la période courante**, p. ex. comptabiliser des revenus trop tôt, immobiliser des coûts qui devraient être passés en charges ou retenir de longues durées d’utilité.
* Les choix **prudents** les réduisent **maintenant**, p. ex. de fortes provisions ou des dépréciations anticipées, et **gonflent souvent les périodes suivantes** lorsque les provisions sont reprises (provisions « **pot à biscuits** »).

La prudence n’est pas neutre non plus : elle déplace les bénéfices d’une période à l’autre et les lisse, ce qui masque la volatilité. Une part de prudence est inscrite dans les normes elles-mêmes, p. ex. les pertes de valeur sont comptabilisées mais la plupart des plus-values latentes sur actifs non financiers ne le sont pas.

### Choix de classement

Même lorsque les montants sont justes, l’**endroit** où un élément est présenté change l’image :

* **Au compte de résultat** : déplacer des charges récurrentes vers des éléments « non récurrents » ou hors exploitation augmente le résultat **d’exploitation**, sur lequel les analystes se concentrent souvent.
* **Au bilan** : classer des créances en non courant, ou de la dette en long terme, modifie les ratios de liquidité.
* **Au tableau des flux de trésorerie** : les IFRS permettent de classer les intérêts et dividendes versés en CFO ou en CFF, et immobiliser un coût déplace sa sortie de trésorerie du CFO vers le CFI. Les deux augmentent le CFO sans changer le flux de trésorerie total.

### Questions liées aux fusions-acquisitions

Les acquisitions offrent à la fois des **occasions et des motivations** de gérer les résultats financiers :

* **Motivation** : une entreprise dont la croissance organique ralentit peut faire des acquisitions pour **masquer le déclin**, et rendre les résultats publiés difficiles à comparer d’une année à l’autre.
* **Affectation du prix d’acquisition** : affecter une plus grande part du prix au **goodwill**, qui **n’est pas amorti**, et une plus faible part aux actifs identifiables amortis (immobilisations, listes de clients) **réduit les charges futures**. Un goodwill ainsi surévalué apparaît plus tard sous forme de **dépréciation**.
* **Flux de trésorerie** : la trésorerie payée pour une acquisition figure en **CFI**, tandis que le fonds de roulement acquis se transforme ensuite en trésorerie dans le **CFO** ; une entreprise qui achète peut donc gonfler son CFO.
* **Les chiffres de la cible** : une cible peut gérer ses bénéfices à la hausse avant l’opération pour en relever le prix, et les erreurs de publication des sociétés acquises passent dans les comptes de l’acquéreur.

## Deux modèles

Deux modèles statistiques utilisent des ratios financiers pour signaler des risques. Inutile de comprendre leurs mathématiques ou l’économie qui les sous-tend ; seule compte la signification du score.

**Modèle de Beneish : la probabilité de manipulation des résultats.** Un modèle **probit** combine huit variables en un **M-score** :

| Variable | Ce qu’elle capte |
| --- | --- |
| Indice **DSR** : délai de recouvrement des créances | Créances qui croissent plus vite que les ventes (gonflement du chiffre d’affaires) |
| Indice **GM** : marge brute | Une marge en baisse (pression à manipuler) |
| Indice **AQ** : qualité des actifs | Davantage de coûts immobilisés |
| Indice **SG** : croissance des ventes | Les entreprises en croissance subissent plus de pression pour la maintenir |
| Indice **DEP** : amortissement | Un rythme d’amortissement plus lent |
| Indice **SGA** : SG&A | Des SG&A en hausse par rapport aux ventes |
| Indice **LVG** : levier | Un levier en hausse (pression des covenants) |
| **TATA** : total des accruals / total de l’actif | Des bénéfices non adossés à de la trésorerie |

* Un **M-score plus élevé** signifie une **probabilité de manipulation plus élevée**.
* Le M-score est une valeur z : la probabilité est $N(M)$, la probabilité normale standard.
* **M > −1,78** est considéré comme un signal de manipulation probable ; −1,78 correspond à une probabilité d’environ 3,8 %.

**Exemple.** Le M-score d’une entreprise est de −1,50. Il est supérieur à −1,78 ; elle est donc signalée. Sa probabilité de manipulation est $N(-1.50)=6.7\%$.

**Modèle d’Altman : la probabilité de dépôt de bilan.** L’analyse discriminante donne le **Z-score** :

$$Z=1.2\,A+1.4\,B+3.3\,C+0.6\,D+1.0\,E$$

| | Ratio | Ce qu’il capte |
| --- | --- | --- |
| A | Fonds de roulement / total de l’actif | Liquidité |
| B | Résultats non distribués / total de l’actif | Rentabilité cumulée |
| C | EBIT / total de l’actif | Rentabilité courante |
| D | Valeur de marché des capitaux propres / valeur comptable des passifs | Solvabilité, vue par le marché |
| E | Ventes / total de l’actif | Rotation de l’actif |

Un **Z-score plus élevé** signifie une **probabilité de faillite plus faible** :

| Z-score | Probabilité de faillite |
| --- | --- |
| Au-dessus de **3,0** | Faible |
| Entre **1,81** et 3,0 | Zone grise |
| En dessous de **1,81** | Élevée |

**Exemple.** Le ratio A vaut 0,10, B 0,20, C 0,08, D 0,90 et E 1,10 :

$$Z=1.2(0.10)+1.4(0.20)+3.3(0.08)+0.6(0.90)+1.0(1.10)=2.30$$

L’entreprise est dans la **zone grise**.

> [!Note]
>
> **Limites des deux modèles.** Ils sont estimés sur des **données passées** issues d’échantillons particuliers d’entreprises ; ils peuvent donc ne pas convenir à d’autres secteurs (le modèle d’Altman a été construit sur des industriels, pas sur des sociétés financières) ou à d’autres périodes. Ils utilisent les données d’une seule période. Et comme les modèles sont connus, des dirigeants qui s’attendent à être filtrés peuvent eux-mêmes **gérer les ratios**.

## Qualité des bénéfices {#quality-of-earnings}

Les **bénéfices récurrents** sont le point de départ : retirez les éléments non récurrents (coûts de restructuration, plus-values de cession d’actifs, activités abandonnées) pour trouver les bénéfices dont on peut attendre la continuité. Méfiez-vous des éléments « non récurrents » qui reviennent chaque année.

**Persistance des bénéfices.** Les bénéfices sont de haute qualité s’ils persistent à l’avenir. On régresse les bénéfices de l’année suivante sur ceux de l’année :

$$\text{Earnings}_{t+1}=\alpha+\beta_1\,\text{Earnings}_t+\varepsilon$$

Un $\beta_1$ plus élevé signifie des bénéfices plus persistants. En séparant les bénéfices en une composante de **trésorerie** et une composante d’**accruals**, avec un bêta pour chacune :

$$\text{Earnings}_{t+1}=\alpha+\beta_1\,\text{Cash flow}_t+\beta_2\,\text{Accruals}_t+\varepsilon$$

Les études trouvent $\beta_2<\beta_1$ : la **composante d’accruals est moins persistante** que la composante de trésorerie, car les accruals impliquent plus d’estimations et s’inversent avec le temps. Les bénéfices comportant une plus grande part d’accruals sont donc de **moindre qualité**.

**Exemple.** Avec $\alpha=0$, $\beta_1=0.8$ et $\beta_2=0.5$, deux entreprises gagnent chacune 100 cette année :

* A : flux de trésorerie 90 et accruals 10. Attendu l’an prochain : $0.8(90)+0.5(10)=77$
* B : flux de trésorerie 40 et accruals 60. Attendu l’an prochain : $0.8(40)+0.5(60)=62$

Mêmes bénéfices cette année, mais ceux de B ont moins de chances de durer.

Les **ratios d’accruals** mesurent la composante d’accruals, rapportée aux actifs nets d’exploitation (NOA) moyens :

$$\text{Accruals ratio (balance sheet)}=\frac{\text{NOA}_{\text{end}}-\text{NOA}_{\text{beg}}}{\overline{\text{NOA}}}$$

$$\text{Accruals ratio (cash flow)}=\frac{\text{NI}-\text{CFO}-\text{CFI}}{\overline{\text{NOA}}}$$

Un **ratio d’accruals plus élevé** signifie une **qualité des bénéfices plus faible**. Par exemple, des NOA qui passent de 1 000 à 1 200 donnent un ratio d’accruals bilanciel de $200/1{,}100=18.2\%$.

**Autres signaux d’alerte** sur la qualité des bénéfices :

* **Atteindre ou dépasser de justesse**, de façon répétée et de peu, les prévisions des analystes ou d’autres repères
* **Indicateurs externes** de mauvaise qualité : sanctions des régulateurs, retraitements
* **Chiffre d’affaires** : des créances qui croissent plus vite que le chiffre d’affaires (délai de recouvrement en hausse), ventes avec livraison différée (bill-and-hold), gavage des canaux de distribution, chiffre d’affaires publié en brut plutôt qu’en net
* **Charges** : immobilisation de coûts, allongement des durées d’utilité, stocks qui croissent plus vite que les ventes (durée de stockage en hausse)
* **RN durablement supérieur au CFO**

## Retour à la moyenne

Les bénéfices à des niveaux extrêmes, hauts ou bas, tendent à **revenir vers la moyenne du secteur** avec le temps : la concurrence érode les rendements anormalement élevés, et les entreprises peu rentables se restructurent, sont rachetées ou disparaissent.

* L’analyste ne doit **pas extrapoler** des bénéfices anormalement élevés ou faibles ; il doit prévoir leur retour vers des niveaux normaux.
* Les bénéfices tirés par des **accruals** reviennent à la moyenne **plus vite** que ceux adossés à de la trésorerie.

## Qualité des flux de trésorerie

Le CFO est le critère principal, car il est **moins soumis aux estimations comptables** que le résultat net. Un flux de trésorerie d’exploitation de qualité est :

* **Positif**
* Issu de **sources durables** : le cœur de métier, pas des réductions ponctuelles du fonds de roulement ou des cessions d’actifs
* **Suffisant** pour couvrir les investissements, les dividendes et les remboursements de dette
* **Peu volatil** par rapport aux pairs

Le CFO est moins exposé à la manipulation, mais il peut encore être géré :

* **Calendrier** : allonger les délais fournisseurs, encaisser les créances plus tôt ou les céder (affacturage, titrisation) et réduire les stocks augmentent le CFO sur une période sans améliorer l’activité.
* **Classement** : immobiliser des coûts d’exploitation déplace la sortie vers le CFI, et en IFRS les intérêts et dividendes versés peuvent être sortis du CFO.

Une entreprise dont le CFO dépasse le RN est en général de meilleure qualité, mais vérifiez pourquoi : un CFO dopé par des réductions du fonds de roulement non reproductibles n’est pas durable.

## Qualité du bilan

Un bilan de qualité présente :

1. **L’exhaustivité** : toutes les obligations sont au bilan. Cherchez dans les notes les éléments **hors bilan**, comme les engagements d’achat (contrats take-or-pay), les garanties et les participations dans des coentreprises ou des entités non consolidées.
2. **Une évaluation non biaisée** : actifs et passifs évalués équitablement. Le jugement compte le plus pour le **goodwill** et les autres incorporels, les **justes valeurs de niveau 3**, les obligations de retraite et les stocks. Une forte dépréciation du goodwill laisse penser que l’entreprise a **trop payé** ses acquisitions passées.
3. **Une présentation claire** : éléments correctement classés et suffisamment détaillés pour être compris.

## Sources d’information sur le risque

* **États financiers** : ratios de levier, de liquidité et de rentabilité, et résultats de modèles comme le Z-score d’Altman.
* **Rapport de l’auditeur** : une opinion **sans réserve** (propre), ou avec réserve, défavorable, ou une impossibilité d’exprimer une opinion. Cherchez un paragraphe sur la **continuité d’exploitation**, et les **points clés de l’audit**. Le rapport ne donne qu’une alerte limitée, souvent **tardive** : il intervient après la période, et une opinion propre n’exclut pas la fraude.
* **Notes annexes** : méthodes et estimations comptables, passifs éventuels, engagements, transactions avec des parties liées et informations sur les risques.
* **Rapport de gestion (MD&A)** : la vision de la direction sur les principaux risques, tendances et incertitudes.
* **Documents déposés auprès de la SEC** (États-Unis) :
  * **Form NT 10-K** (ou NT 10-Q) : avis de dépôt **tardif**, souvent signe de problèmes comptables
  * **Form 8-K** : événements significatifs, comme un **changement d’auditeur**, le départ de dirigeants ou un retraitement
  * **Form 144** : avis de **ventes d’actions prévues par des initiés**
  * La **circulaire de procuration (proxy statement)** : rémunération des dirigeants et transactions avec des parties liées
* **Presse financière** : le journalisme d’investigation peut révéler des problèmes avant les régulateurs ou les auditeurs.
