---
title: Intégration des techniques d’analyse financière
---

# Intégration des techniques d’analyse financière

Cette unité applique pas à pas les outils d’analyse des unités précédentes à une entreprise, pour répondre à une question d’investissement. Les principales techniques sont :

* [L’équation de DuPont étendue](#extended-dupont-equation) : ce qui détermine le ROE
* [Les décisions d’allocation du capital](#capital-allocation-decisions) : où l’entreprise investit
* [La qualité des bénéfices](#earnings-quality) : quelle part des bénéfices est adossée à de la trésorerie
* [L’analyse des flux de trésorerie](#cash-flow-analysis) : dans quelle mesure le résultat d’exploitation se convertit en trésorerie
* [La décomposition de la valeur de marché](#market-value-decomposition) : ce que le marché paie pour chaque partie de l’activité
* [Le financement hors bilan](#off-balance-sheet-financing) : les obligations absentes du bilan
* [Les changements de normes comptables](#changes-in-accounting-standards) : les ruptures de comparabilité dans le temps

## Équation de DuPont étendue {#extended-dupont-equation}

La décomposition **DuPont à cinq facteurs (étendue)** sépare le ROE en cinq moteurs :

$$
\text{ROE}=\frac{\text{NI}}{\text{EBT}}\times\frac{\text{EBT}}{\text{EBIT}}\times\frac{\text{EBIT}}{\text{Revenue}}\times\frac{\text{Revenue}}{\text{Average total assets}}\times\frac{\text{Average total assets}}{\text{Average equity}}
$$

$$
=\text{Tax burden}\times\text{Interest burden}\times\text{EBIT margin}\times\text{Asset turnover}\times\text{Financial leverage}
$$

Le produit des trois premiers facteurs donne la **marge nette** (RN / chiffre d’affaires), celui des quatre premiers le **ROA**. La décomposition montre si une variation du ROE vient de l’exploitation (marge, rotation), du financement (charge d’intérêts, levier) ou de l’impôt.

**Isoler les entreprises associées.** Le résultat des entreprises associées (la [mise en équivalence](M1%20Intercorporate%20Investments.md#equity-method-of-accounting)) est généré par des actifs que l’entreprise ne dirige pas ; il peut donc fausser l’image du cœur de métier. Pour voir le ROE des activités propres de l’entreprise, retirez les entreprises associées à la fois du résultat et des actifs :

* Soustrayez le **résultat des entreprises associées** du résultat net.
* Soustrayez la **participation dans les entreprises associées** du total de l’actif.
* Gardez le **levier financier inchangé**, c’est-à-dire supposez que les entreprises associées sont financées avec la même répartition dette/capitaux propres que le reste de l’entreprise.

Cet ajustement ne suit pas la logique comptable : le bilan n’est plus équilibré après. C’est seulement un outil d’analyse.

**Exemple.** Une entreprise publie un chiffre d’affaires de 1 000, un EBIT de 150, une charge d’intérêts de 20 et un EBT de 130. L’impôt à 30 % est de 39 ; le résultat net avant entreprises associées est donc de 91. Sa quote-part du résultat des entreprises associées, publiée après impôt, est de 9 ; le résultat net est donc de 100. L’actif total moyen est de 1 250, dont une participation dans les entreprises associées de 125, et les capitaux propres moyens de 500.

| Facteur | Publié | Hors entreprises associées |
| --- | ---: | ---: |
| Charge fiscale (RN / EBT) | $100/130=0.769$ | $91/130=0.700$ |
| Charge d’intérêts (EBT / EBIT) | $130/150=0.867$ | 0.867 |
| Marge d’EBIT (EBIT / chiffre d’affaires) | $150/1{,}000=0.150$ | 0.150 |
| Rotation de l’actif (chiffre d’affaires / actifs) | $1{,}000/1{,}250=0.800$ | $1{,}000/1{,}125=0.889$ |
| Levier financier (actifs / capitaux propres) | $1{,}250/500=2.50$ | 2,50 (inchangé) |
| **ROE** | **20,0 %** | **20,2 %** |

* Le résultat des entreprises associées est après impôt ; il se situe donc **sous l’EBT** : il porte la charge fiscale publiée au-dessus de $1-30\%=0.70$, ce qui fait paraître l’entreprise plus efficace fiscalement qu’elle ne l’est.
* Hors entreprises associées, la rotation de l’actif augmente et le ROE progresse légèrement, à 20,2 %. Les entreprises associées ne rapportent que $9/125=7.2\%$ sur la participation, moins que le cœur de métier ; elles **diluent** donc le ROE.

## Décisions d’allocation du capital {#capital-allocation-decisions}

L’**allocation du capital** d’une entreprise (où elle dépense son capital) doit être cohérente avec la **stratégie** de la direction et la soutenir. L’information sectorielle permet à l’analyste de le vérifier, en comparant la part de chaque secteur dans les investissements avec sa part dans les actifs :

$$\text{Capex ratio}=\frac{\text{Segment capex}\,/\,\text{Total capex}}{\text{Segment assets}\,/\,\text{Total assets}}$$

* **Au-dessus de 1** : l’entreprise alloue **plus** de ressources au secteur que sa taille actuelle, c’est-à-dire qu’elle le développe.
* **En dessous de 1** : elle en alloue moins, c’est-à-dire qu’elle l’exploite ou le réduit.

Comparez le ratio avec la **rentabilité** de chaque secteur (p. ex. EBIT / actifs du secteur). Le capital doit aller vers les secteurs aux rendements les plus élevés, ou aux meilleures perspectives de croissance.

**Exemple.**

| Secteur | Part des actifs | Part des investissements | Ratio d’investissement | EBIT / actifs |
| --- | ---: | ---: | ---: | ---: |
| A | 50% | 40% | 0.80 | 15% |
| B | 30% | 25% | 0.83 | 8% |
| C | 20% | 35% | **1.75** | 12% |

L’entreprise développe le plus vite le secteur C, alors que A a le rendement le plus élevé. Ce n’est raisonnable que si C a de meilleures perspectives de croissance, ce que l’analyste doit vérifier au regard de la stratégie annoncée par la direction. B a le rendement le plus faible mais reçoit encore à peu près sa part des investissements : un candidat à la restructuration ou à la cession.

## Qualité des bénéfices {#earnings-quality}

La qualité des bénéfices est traitée plus en détail dans [M5 Évaluer la qualité de l’information financière](M5%20Evaluating%20Quality%20of%20Financial%20Reports.md#quality-of-earnings). Ici, l’accent est mis sur la mesure de la composante d’**accruals** des bénéfices.

Les **accruals agrégés** sont la part des bénéfices non adossée à de la trésorerie :

$$\text{Aggregate accruals}=\text{Accrual-based earnings}-\text{Cash earnings}$$

Rapportés aux actifs nets d’exploitation moyens, ils donnent le **ratio d’accruals**. Un **ratio d’accruals plus faible** signifie une **qualité des bénéfices plus élevée**, car les accruals sont moins persistants que les flux de trésorerie.

Les bénéfices peuvent être séparés en flux de trésorerie et accruals par :

1. **L’approche bilancielle**, ou
2. **L’approche par le tableau des flux de trésorerie**.

Les **actifs nets d’exploitation (NOA)** sont les actifs d’exploitation moins les passifs d’exploitation. « D’exploitation » exclut ici les éléments de financement, la trésorerie et la dette :

$$\text{NOA}=(\text{Total assets}-\text{Cash and short-term investments})-(\text{Total liabilities}-\text{Total debt})$$

**Approche bilancielle.** Les accruals sont la variation des NOA :

$$\text{AA}_{\text{B/S}}=\text{NOA}_t-\text{NOA}_{t-1},\qquad\text{Accruals ratio}_{\text{B/S}}=\frac{\text{AA}_{\text{B/S}}}{\overline{\text{NOA}}}$$

**Approche par les flux de trésorerie.** Les accruals sont la part du résultat net non expliquée par les flux d’exploitation et d’investissement :

$$\text{AA}_{\text{CF}}=\text{NI}_t-(\text{CFO}_t+\text{CFI}_t),\qquad\text{Accruals ratio}_{\text{CF}}=\frac{\text{AA}_{\text{CF}}}{\overline{\text{NOA}}}$$

**Exemple.** Les NOA passent de 1 000 à 1 200 ; les NOA moyens sont donc de 1 100. Le résultat net est de 150, le CFO de 120 et le CFI de −100.

* Approche bilancielle : $\text{AA}=1{,}200-1{,}000=200$, ratio d’accruals $=200/1{,}100=18.2\%$
* Approche par les flux : $\text{AA}=150-(120-100)=130$, ratio d’accruals $=130/1{,}100=11.8\%$

Les deux approches donnent rarement le même chiffre : acquisitions, conversion des devises et opérations non monétaires modifient les NOA sans passer par le tableau des flux de trésorerie. Ce qui compte, c’est la **tendance** dans le temps et la comparaison avec les pairs, en utilisant toujours la même approche.

## Analyse des flux de trésorerie {#cash-flow-analysis}

**Comparer le CFO au résultat d’exploitation** teste la conversion des bénéfices en trésorerie. Ils ne se mesurent pas de la même façon :

* Le CFO a déjà **déduit les intérêts et impôts payés**, alors que le résultat d’exploitation (EBIT) est avant intérêts et impôts.
* Pour comparer ce qui est comparable, **réintégrez les intérêts et impôts payés en trésorerie** au CFO.

$$\text{Adjusted CFO}=\text{CFO}+\text{Cash interest paid}+\text{Cash taxes paid}$$

> [!Note]
>
> En IFRS, une entreprise peut classer les intérêts payés en **CFF**. Dans ce cas, ils n’ont jamais été déduits du CFO ; **ne les réintégrez donc pas**. Vérifiez le classement avant d’ajuster.

**Ratios** (avec le CFO ajusté lorsque la comparaison porte sur une mesure avant intérêts et impôts) :

| Ratio | Ce qu’il montre |
| --- | --- |
| **CFO / EBIT** | La conversion en trésorerie du résultat d’exploitation ; nettement inférieur à 1, il signale des bénéfices qui ne se transforment pas en trésorerie |
| **CFO / total de l’actif** | Le rendement en trésorerie des actifs, version trésorerie du ROA |
| **CFO / intérêts payés** | La couverture des intérêts par les flux de trésorerie |
| **CFO / dette** | La capacité à rembourser la dette avec le flux d’exploitation |
| **CFO / investissements** | La capacité à autofinancer l’investissement ; au-dessus de 1, les investissements peuvent être payés sans nouveau financement |

**Exemple.** L’EBIT est de 150 et le CFO publié de 100, après des intérêts payés de 20 et des impôts payés de 30. Le CFO ajusté est de $100+20+30=150$, donc CFO / EBIT $=150/150=1.0$ : le résultat d’exploitation est entièrement adossé à de la trésorerie. Utiliser le CFO non ajusté donnerait $100/150=0.67$ et suggérerait à tort un manque de trésorerie.

## Décomposition de la valeur de marché {#market-value-decomposition}

Lorsqu’une entreprise associée est **cotée**, le marché la valorise séparément. Soustraire la valeur de marché de la participation de l’entreprise dans celle-ci de la valeur de marché de l’entreprise donne la valeur que le marché attribue à l’**activité propre de la mère** :

$$\text{Implied P/E of the parent excluding associates}=\frac{\text{Market value of the parent}-\text{Market value of the stake in associates}}{\text{NI}-\text{Share of associates' earnings}}$$

**Exemple.** L’entreprise de l’exemple DuPont a une valeur de marché de 2 000 et un résultat net de 100, soit un P/E de 20. Son entreprise associée est cotée pour une valeur de marché de 1 000, et l’entreprise en détient 30 % : une participation valant 300. Sa quote-part du résultat de l’entreprise associée est de 9.

$$\text{P/E excluding associates}=\frac{2{,}000-300}{100-9}=\frac{1{,}700}{91}=18.7$$

Le marché valorise la participation à $300/9=33.3$ fois les bénéfices, mais le cœur de métier à seulement 18,7 fois. Le P/E affiché de 20 surestime l’estime du marché pour les activités propres de l’entreprise.

## Autres questions

### Financement hors bilan {#off-balance-sheet-financing}

Le **financement hors bilan (OBS)** désigne toute obligation qui fonctionne comme une dette sans apparaître au passif. Depuis qu’IFRS 16 et ASC 842 ont fait entrer la plupart des contrats de location au bilan, les principales sources restantes sont :

* Les **engagements d’achat**, comme les contrats take-or-pay
* Les **garanties** de la dette d’autres entités
* Les **entités non consolidées**, comme des coentreprises et entreprises associées lourdement endettées (voir [M1](M1%20Intercorporate%20Investments.md#joint-venture-and-spes-vies))
* Les **créances cédées avec recours**, pour lesquelles l’entreprise supporte encore le risque de crédit

L’analyste les trouve dans les notes, ajoute la valeur actuelle des obligations à la dette et recalcule les ratios de levier et de couverture avant de comparer l’entreprise à ses pairs.

### Changements de normes comptables {#changes-in-accounting-standards}

Une nouvelle norme comptable peut modifier les chiffres publiés sans aucun changement dans l’activité, ce qui rompt les comparaisons dans le temps. Par exemple, après IFRS 16, les contrats de location sont entrés au bilan : actifs et dette ont augmenté, et l’**EBITDA a progressé**, car la charge de location simple a été remplacée par un amortissement et des intérêts, situés sous l’EBITDA.

Lorsqu’une norme change, l’analyste doit :

* Lire les **informations de transition** dans les notes pour voir l’effet sur chaque ligne
* Vérifier si **les périodes antérieures ont été retraitées** ou si le changement ne s’applique qu’à partir de la date d’adoption
* **Retraiter** les périodes antérieures, ou ajuster les ratios, pour que la tendance reflète l’activité et non la comptabilité
