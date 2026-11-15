---
title: Rémunération des salariés
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 440px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.comp-timeline-chart { height: 545px; }
.fx-concept-chart.comp-rsu-chart { height: 575px; }
.fx-concept-chart.pen-pbo-chart { height: 530px; }
.fx-concept-chart.pen-assets-chart { height: 515px; }
.fx-concept-chart.pen-status-chart { height: 585px; }
.fx-concept-chart.pen-tppc-chart { height: 670px; }
@media (max-width: 587px) {
    .fx-concept-chart.comp-timeline-chart { height: 710px; }
    .fx-concept-chart.comp-rsu-chart { height: 690px; }
    .fx-concept-chart.pen-pbo-chart { height: 640px; }
    .fx-concept-chart.pen-assets-chart { height: 620px; }
    .fx-concept-chart.pen-status-chart { height: 670px; }
    .fx-concept-chart.pen-tppc-chart { height: 900px; }
}
</style>

# Rémunération des salariés

## Types de rémunération des salariés

Les normes comptables classent la rémunération en 5 grands types, qui se distinguent par :

* **Le moment** : combien de temps après le service du salarié le paiement intervient
* **La forme de paiement** : espèces, actions ou autres avantages

| Type | Ce qu’il couvre | Exemples |
| --- | --- | --- |
| **Avantages à court terme** | Payés dans les 12 mois suivant la fin de la période où le service est rendu | Salaires, primes annuelles, congés payés, avantages en nature (soins médicaux, logement) |
| **Avantages à long terme** | Dont le paiement n’est pas attendu dans les 12 mois suivant la fin de la période de service | Congés payés de longue durée (p. ex. congés sabbatiques), prestations d’invalidité de longue durée |
| **[Indemnités de fin de contrat](#accounting-principles)** | Payées parce que l’emploi prend fin, et non en échange d’un service | Indemnités de licenciement, aide au reclassement |
| **[Rémunération en actions](#share-based-compensation)** | Payée en actions de l’employeur, ou en espèces selon le cours de l’action | Actions restreintes, stock-options, droits à l’appréciation d’actions |
| **[Avantages postérieurs à l’emploi](#post-employment-compensation)** | Payés après la fin de l’emploi, en échange des services rendus pendant l’emploi | Retraites, couverture médicale des retraités |

## Terminologie {#terminology}

* **Date d’attribution** : l’employeur et le salarié conviennent des conditions du plan. Pour la rémunération en actions, la juste valeur de l’attribution est évaluée à cette date (voir [Information financière sur la rémunération en actions](#financial-reporting-for-share-based-compensation)).
* **Période d’acquisition** : la période de service que le salarié doit accomplir pour obtenir l’attribution.
* **Date d’acquisition** : les conditions d’acquisition sont remplies. Le salarié a un **droit inconditionnel** à la rémunération, si bien que l’employeur a désormais une obligation.
* **Date de règlement** : la rémunération est payée, en espèces ou en actions.

Le découpage des périodes ressemble aux termes d’une **option** : attribuée, acquise, puis exercée (réglée).

<iframe
  class="fx-concept-chart comp-timeline-chart"
  src="/charts/compensation-vesting-timeline.html"
  title="Calendrier de la rémunération : date d’attribution, période d’acquisition, date d’acquisition et date de règlement"
  loading="lazy"
></iframe>

Le coût de la rémunération est comptabilisé **sur la période d’acquisition**, à mesure que le salarié rend le service qui la lui vaut, et non au moment du paiement. L’acquisition est suivie du règlement.

* **Pendant la période d’acquisition** : l’employeur comptabilise la charge de rémunération à mesure que les droits s’acquièrent. La contrepartie dépend du mode de règlement :
  * Réglée en espèces (salaires, primes en espèces, retraites, droits à l’appréciation d’actions payés en espèces) : un **passif**.
  * [Réglée en actions](#equity-settled-share-based-compensation) (actions restreintes, stock-options) : des **capitaux propres** (capital apporté ; voir les [écritures](#financial-reporting-for-share-based-compensation)). Aucun passif ne naît, car l’employeur doit des actions, pas de la trésorerie.
* **Charge ou actif** : le coût suit la fonction du salarié. La rémunération du personnel qui produit des stocks ou construit des immobilisations corporelles est **incorporée** dans cet actif, et atteint le compte de résultat plus tard sous forme de coût des ventes ou d’amortissement. La rémunération de la direction et du personnel administratif est **passée en charges** directement en SG&A.
* **Au règlement** : des actions sont émises, ou le passif est payé en espèces. Pour les attributions réglées en actions, plus rien n’est passé en charges après l’acquisition, même si les options ne sont jamais exercées (voir l’[exemple d’options](#example-employee-stock-options)).

## Principes comptables {#accounting-principles}

| Catégorie | Avantages à court terme | [Rémunération en actions réglée en instruments de capitaux propres](#equity-settled-share-based-compensation) | [Avantages postérieurs à l’emploi](#post-employment-compensation) |
| --- | --- | --- | --- |
| **Période d’acquisition typique** | Quelques jours ou semaines | Plusieurs années | Des années, voire des décennies |
| **Forme de paiement** | Espèces | Actions | Espèces |
| **Montant comptabilisé sur la période d’acquisition** | Salaire, traitement, etc., non actualisé | Juste valeur, évaluée à la date d’attribution | Valeur actuelle des prestations futures estimées |

Lecture du tableau :

* **Plus l’attente est longue, plus le montant repose sur des estimations.** Les avantages à court terme sont payés en quelques jours ou semaines, et sont donc comptabilisés au montant dû **non actualisé**. Les avantages postérieurs à l’emploi sont payés des décennies plus tard ; ils sont donc évalués à la **valeur actuelle** des prestations (voir [Obligation de retraite](#pension-obligation)), qui dépendent d’hypothèses sur les salaires, la durée de vie et les taux d’actualisation.
* **Les attributions réglées en actions sont figées à la date d’attribution.** Leur juste valeur est évaluée une seule fois, à la date d’attribution, et n’est pas réévaluée selon l’évolution ultérieure du cours. Ce montant est étalé sur la période d’acquisition.

Quelle que soit la forme de rémunération, la plupart des entreprises regroupent la charge de rémunération et la présentent au compte de résultat selon la **fonction du salarié** (p. ex. dans le coût des ventes ou les SG&A), plutôt que sur une ligne distincte.

> [!Note]
>
> L’exception concerne les **indemnités de fin de contrat**. Elles sont souvent engagées dans le cadre d’une **restructuration** et présentées dans les coûts de restructuration. Les analystes traitent souvent ces coûts comme non récurrents ; vérifiez donc qu’ils ne se répètent pas avant de les exclure.

## Rémunération en actions {#share-based-compensation}

La rémunération en actions paie les salariés en actions de l’employeur, ou en espèces liées au cours de l’action. Elle est courante pour la direction générale et pour les jeunes entreprises qui ont peu de trésorerie disponible.

### Avantages et inconvénients

Avantages :

1. **Aligne les intérêts.** Les salariés actionnaires gagnent et perdent avec les actionnaires, ce qui réduit les conflits principal–agent.
2. **Améliore la fidélisation.** Une période d’acquisition pluriannuelle donne aux salariés une raison de rester, car les droits non acquis sont perdus en cas de départ (voir [Conditions d’acquisition](#vesting-conditions)).
3. **Préserve la liquidité.** Les attributions réglées en actions n’entraînent aucune sortie de trésorerie, ce qui compte surtout pour les start-up et les entreprises à forte croissance.

Inconvénients :

1. **Lien limité avec l’effort du salarié.** La plupart des salariés influent peu sur le cours de l’action, qui suit aussi le marché ; l’attribution peut donc ne rien changer à leur comportement.
2. **Prise de risque faussée.** Elle peut pousser les dirigeants dans un sens ou dans l’autre :
   * Les options ne paient qu’à la hausse ; elles peuvent donc encourager une prise de risque **excessive**.
   * Une forte détention d’actions immobilise le patrimoine du dirigeant dans l’entreprise ; elle peut donc le rendre **trop averse au risque**.
3. **Risque concentré pour les salariés.** Les salariés dépendent déjà de l’entreprise pour leur salaire. Avec la rémunération en actions, leur patrimoine baisse aussi avec le cours, et une action peu performante peut les laisser moins bien lotis qu’une rémunération équivalente en espèces.
4. **Dilution.** L’émission d’actions nouvelles à l’acquisition ou à l’exercice réduit la part de détention et le BPA des actionnaires existants (voir [Nombre d’actions dilué](#diluted-shares-outstanding)).

### Conditions d’acquisition {#vesting-conditions}

1. **Condition de service** : l’attribution est acquise à une date future, à condition que le salarié soit **toujours employé** à ce moment-là.
2. **Condition de performance** : l’attribution n’est acquise que si un objectif de performance est atteint, en général en plus d’une condition de service. Il en existe deux sortes :
   * **Condition de marché** : liée au cours de l’action, p. ex. un cours cible ou un rendement total pour l’actionnaire relatif à un indice.
   * **Condition hors marché** : liée aux résultats opérationnels, p. ex. des objectifs de croissance du BPA, de chiffre d’affaires ou de ROE.

> [!Note]
>
> Les deux sortes de condition de performance sont comptabilisées différemment :
>
> * Une **condition de marché** est intégrée dans la juste valeur à la date d’attribution (un cours cible la réduit). La charge est comptabilisée dès lors que la condition de service est remplie, **même si l’objectif de marché est manqué**.
> * Une **condition hors marché** ne fait pas partie de la juste valeur. La charge repose plutôt sur le nombre d’attributions **dont l’acquisition est attendue**, réestimé à chaque période (comme dans l’[exemple d’options](#example-employee-stock-options)). Si l’objectif est manqué, la charge déjà comptabilisée est reprise.
>
> Le même ajustement s’applique à une condition de service : les attributions perdues par les salariés qui partent avant l’acquisition voient leur charge reprise.

#### Exemple : condition de marché ou hors marché

**Pourquoi la charge liée à une condition de marché demeure.** La charge mesure le **service** des salariés reçu par l’entreprise, valorisé à la date d’attribution. Avec une condition de marché, le modèle de juste valeur (p. ex. Monte-Carlo) intègre déjà la possibilité que le cours cible soit manqué ; la juste valeur de 24m est donc inférieure à ce qu’elle serait sans objectif. Manquer l’objectif est l’un des scénarios que ce prix prévoyait déjà. Reprendre la charge compterait ce risque deux fois. Le cours de l’action échappe aussi au contrôle de la direction ; les normes ne laissent donc pas la charge le suivre.

**Hypothèses.** Une attribution d’une juste valeur à la date d’attribution de 24m est acquise après 3 ans de service, soit une charge de $24/3=8$m par an. À la fin de l’année 2, $16$m ont été comptabilisés.

| Situation à la fin de l’année 3 | Charge de l’année 3 | Charge cumulée |
| --- | --- | --- |
| **Condition de marché** (cours cible) manquée, salarié toujours employé | 8m | **24m** : rien n’est repris |
| **Condition hors marché** (p. ex. objectif de BPA) manquée | −16m (reprise) | **0** |
| Le salarié part au cours de l’année 3 (condition de service non remplie) | −16m (reprise) | **0** |

Une condition hors marché n’est pas dans la juste valeur ; la charge suit donc le nombre d’attributions dont l’acquisition est attendue et est ajustée au résultat réel. Une condition de marché ne donne lieu à aucun ajustement : une fois le service rendu, la totalité des 24m est passée en charges, que l’attribution rapporte ou non.

### Rémunération en actions réglée en instruments de capitaux propres {#equity-settled-share-based-compensation}

Les attributions réglées en instruments de capitaux propres sont payées en actions. Leur juste valeur est évaluée à la **date d’attribution** et étalée sur la période d’acquisition (voir le [calendrier](#terminology)). Elle n’est pas réévaluée selon l’évolution ultérieure du cours.

| | Actions restreintes | Unités d’actions restreintes (RSU) | Stock-options des salariés (ESO) |
| --- | --- | --- | --- |
| **Ce que reçoit le salarié** | Des actions émises à l’attribution, incessibles jusqu’à l’acquisition | Une promesse d’actions, livrées au règlement | Le droit d’acheter des actions à un prix d’exercice fixe |
| **Droits de vote et dividendes avant l’acquisition** | Oui, en général | Non (parfois des équivalents de dividendes) | Non |
| **Valeur pour le salarié** | Le cours entier | Le cours entier | Seulement le gain au-dessus du prix d’exercice |
| **Juste valeur à la date d’attribution** | Cours à l’attribution | Cours à l’attribution (moins les dividendes attendus que le détenteur ne perçoit pas) | Modèle d’évaluation d’options (p. ex. [Black–Scholes–Merton](../C7%20Derivative/M2%20Options.md#black-scholes-model), [binomial](../C7%20Derivative/M2%20Options.md#binomial-option-valuation)) |

* Les **actions de performance (PSU)** sont des RSU dont le nombre d’actions dépend d’une [condition de performance](#vesting-conditions).
* Les **stock-options des salariés** sont généralement attribuées **à la monnaie** : le prix d’exercice est égal au cours à la date d’attribution. L’option n’a pas de valeur intrinsèque à l’attribution ; elle ne vaut donc quelque chose pour le salarié que si le cours monte. Sa juste valeur se limite à la valeur temps, c’est pourquoi elle doit être estimée avec un modèle d’évaluation d’options plutôt que lue sur le cours.

> [!Important]
>
> La juste valeur d’une option à la date d’attribution, et donc la charge, dépend des paramètres retenus par la direction : volatilité attendue, durée attendue, rendement du dividende et taux sans risque. Une volatilité plus forte, une durée plus longue ou un taux sans risque plus élevé augmentent la juste valeur ; un rendement du dividende plus élevé la réduit. Vérifiez que les hypothèses, publiées dans les [notes](#disclosures-for-share-based-compensation), sont raisonnables : supposer une volatilité plus faible ou une durée attendue plus courte réduit la charge de rémunération.

### Information financière sur la rémunération en actions {#financial-reporting-for-share-based-compensation}

* **La juste valeur est évaluée une seule fois, à la date d’attribution.** L’évolution ultérieure du cours n’a aucun effet sur la charge.
  * **Actions restreintes et RSU** : le cours des actions sous-jacentes à la date d’attribution. Les RSU ne perçoivent généralement pas de dividendes avant l’acquisition ; leur prix est donc en général réduit des dividendes attendus sur la période d’acquisition.
  * **Options** : estimées à la date d’attribution avec un modèle d’évaluation d’options, comme Black–Scholes–Merton (l’analyse financière ne demande pas le calcul ; il est traité en [Produits dérivés](../C7%20Derivative/M2%20Options.md#black-scholes-model)).
* **Le coût est comptabilisé sur la période d’acquisition**, à mesure que le salarié rend le service. Le montant repose sur le nombre d’attributions **dont l’acquisition est attendue**, réestimé à chaque période (voir [Conditions d’acquisition](#vesting-conditions)).
* **Règlement** : les RSU sont réglées à l’acquisition. Les options sont réglées plus tard, lorsque (et si) le salarié les exerce, à tout moment jusqu’à l’échéance.

Pour les attributions réglées en actions, le coût s’accumule dans une **réserve de rémunération en actions** au sein des capitaux propres :

| Quand | Écriture | Effet |
| --- | --- | --- |
| **Date d’attribution** | Aucune écriture | — |
| **Chaque année de la période d’acquisition** | Débit charge de rémunération, crédit réserve de rémunération en actions | RN ↓, donc RE ↓ ; réserve ↑. Capitaux propres totaux, actifs et passifs inchangés |
| **Règlement des RSU (à l’acquisition)** | Débit réserve, crédit capital social (nominal) et prime d’émission (APIC) | Un transfert au sein des capitaux propres ; pas de trésorerie |
| **Exercice des options** | Débit trésorerie (prix d’exercice × options) et réserve, crédit capital social (nominal) et APIC | Trésorerie ↑ (un flux entrant de CFF) ; capitaux propres ↑ de la trésorerie reçue |

La charge est **non monétaire** ; elle est donc réintégrée au résultat net dans le CFO selon la méthode indirecte (voir [Modélisation des flux de trésorerie et du nombre d’actions](#modeling-cash-flow-and-the-share-count)).

#### Exemple : stock-options des salariés {#example-employee-stock-options}

En $T=0$, 120 cadres reçoivent chacun 10 options d’un prix d’exercice de \$25, à échéance de 3 ans. La juste valeur à la date d’attribution est de \$50 par option, et les options sont acquises après 2 ans de service. Les actions ont une valeur nominale de \$1.

**Année 1.** 5 cadres partent, et 15 autres devraient partir en année 2. Les options dont l’acquisition est attendue sont $(120-5-15)\times 10=1{,}000$.

$$\text{Expense}_{Y1}=\frac{1{,}000\times \$50}{2}=\$25{,}000$$

La juste valeur de l’option en $T=1$ (\$35) est ignorée : l’attribution n’est pas réévaluée.

**Année 2.** 12 cadres partent, moins que prévu, si bien que $(120-5-12)\times 10=1{,}030$ options sont acquises. La charge de l’année 2 ajuste le coût cumulé au nombre réel (voir la note sous [Conditions d’acquisition](#vesting-conditions)) :

$$\text{Expense}_{Y2}=1{,}030\times \$50-\$25{,}000=\$26{,}500$$

Le cours est de \$20 à la fin de l’année 2 ; les options sont donc en dehors de la monnaie, mais la charge n’est **pas reprise**.

**Année 3.** Le cours monte à \$30, et les 1 030 options sont toutes exercées.

| | Année 1 | Année 2 | Année 3 (exercice) |
| --- | ---: | ---: | ---: |
| Charge de rémunération (RN, RE ↓) | 25 000 | 26 500 | — |
| Réserve, fin d’année | 25 000 | 51 500 | 0 (−51 500) |
| Trésorerie reçue (CFF) | — | — | $1{,}030\times 25=25{,}750$ |
| Capital social (nominal \$1) | — | — | +1 030 |
| APIC | — | — | $25{,}750-1{,}030+51{,}500=+76{,}220$ |

#### Exemple : plans de RSU

Une entreprise attribue des RSU dans le cadre de trois plans. Chaque plan est acquis sur 3 ans et réglé à la fin de sa période d’acquisition. Les trois quarts de chaque attribution vont à la direction générale et le quart restant aux salariés de la division R&D. On suppose aucune renonciation et une valeur nominale de \$1.

| Plan | Date d’attribution | RSU attribuées | Cours à la date d’attribution | Juste valeur à l’attribution | Charge par an |
| --- | --- | ---: | ---: | ---: | ---: |
| Plan A | 1er janv. A1 | 18 | \$60 | 1 080 | 360 (A1–A3) |
| Plan B | 1er janv. A2 | 24 | \$93 | 2 232 | 744 (A2–A4) |
| Plan C | 1er janv. A3 | 30 | \$117 | 3 510 | 1 170 (A3–A5) |

<iframe
  class="fx-concept-chart comp-rsu-chart"
  src="/charts/rsu-plans-expense.html"
  title="Plans de RSU : charge par plan et par année, et solde de la réserve"
  loading="lazy"
></iframe>

La charge suit la [fonction](#accounting-principles) de chaque salarié : **3/4 en SG&A** (direction générale) et **1/4 en R&D**. Lorsqu’un plan est réglé, sa réserve est transférée au capital social (\$1 × RSU) et à l’APIC (le reste).

| | A1 | A2 | A3 | A4 | A5 | A6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Plan A | 360 | 360 | 360 | | | |
| Plan B | | 744 | 744 | 744 | | |
| Plan C | | | 1 170 | 1 170 | 1 170 | |
| **Charge totale (RE ↓, réserve ↑)** | **360** | **1 104** | **2 274** | **1 914** | **1 170** | **0** |
| dont SG&A (3/4) | 270 | 828 | 1 705,5 | 1 435,5 | 877,5 | 0 |
| dont R&D (1/4) | 90 | 276 | 568,5 | 478,5 | 292,5 | 0 |
| Plan réglé (réserve ↓) | | | A : 1 080 | B : 2 232 | C : 3 510 | |
| Capital social ↑ | | | 18 | 24 | 30 | |
| APIC ↑ | | | 1 062 | 2 208 | 3 480 | |
| **Réserve, fin d’année** | 360 | 1 464 | 2 658 | 2 340 | 0 | 0 |

La charge totale sur les six années, 6 822, est égale à la somme des justes valeurs à l’attribution des trois plans ($1{,}080+2{,}232+3{,}510$). Chaque unité finit dans le capital social et l’APIC, et la réserve revient à zéro une fois le dernier plan réglé.

### Traitement fiscal

|            | Information financière sur la rémunération en actions | Traitement fiscal de la rémunération en actions |
| ---------- | ----------------------------------------------- | ----------------------------------------- |
| **Moment** | Sur la période d’acquisition | Au règlement |
| **Montant** | Juste valeur à la date d’attribution | Cours à la date de règlement (RSU) ; valeur intrinsèque à l’exercice (options) |

La déduction fiscale diffère donc en général de la charge cumulée :

| Cours au règlement par rapport à la date d’attribution | Déduction fiscale par rapport à la charge cumulée | Nom | Revenu imposable et charge d’impôt |
| --- | --- | --- | --- |
| **Plus élevé** | Plus élevée | **Avantage fiscal excédentaire** (aubaine fiscale) | Réduits |
| **Plus bas** | Plus faible | **Insuffisance fiscale** | Augmentés |

Dans l’[exemple d’options](#example-employee-stock-options), la charge cumulée est de \$51 500, mais la déduction fiscale à l’exercice n’est que la valeur intrinsèque, $(\$30-\$25)\times 1{,}030=\$5{,}150$ : une insuffisance fiscale.

Les **IFRS** et les **US GAAP** traitent différemment les aubaines et insuffisances fiscales dans les états financiers :

|                                        | IFRS | US GAAP |
| -------------------------------------- | ---- | ------- |
| **Avantage fiscal excédentaire (aubaine)** | Gain comptabilisé directement en capitaux propres | Baisse de la charge d’impôt au compte de résultat |
| **Insuffisance fiscale**                      | Perte comptabilisée directement en capitaux propres | Hausse de la charge d’impôt au compte de résultat |

> [!Note]
>
> En US GAAP, les aubaines et insuffisances passent par la charge d’impôt ; le **taux d’imposition effectif varie donc avec le cours**. Retirez-les pour prévoir le taux d’imposition.
>
> La ligne IFRS est une simplification du programme. Selon IAS 12, seule la part de la déduction **supérieure** à la charge cumulée va en capitaux propres ; une insuffisance passe en général en résultat.

### Nombre d’actions dilué {#diluted-shares-outstanding}

Les attributions d’actions sont des actions potentielles ; le BPA dilué les intègre donc selon la **méthode du rachat d’actions** : on suppose que l’entreprise émet les actions et utilise le produit pour racheter des actions au cours moyen du marché.

$$\text{Diluted shares}=\text{Basic shares}+N-\frac{\text{Assumed proceeds}}{\bar{P}}$$

$$\text{Assumed proceeds}=N\times X+\overline{\text{Unrecognized compensation expense}}$$

* $N$ : actions émises à l’exercice ou au règlement
* $X$ : prix d’exercice ; **0 pour les RSU**
* $\bar{P}$ : cours moyen de la période
* $\overline{\text{Unrecognized compensation expense}}$ : la charge restant à comptabiliser sur les futures périodes d’acquisition, moyennée sur la période (la moyenne des deux valeurs de clôture, publiées dans les [notes](#disclosures-for-share-based-compensation)). Le service que l’entreprise n’a pas encore reçu compte comme une partie de ce qu’elle perçoit pour les actions, comme s’il s’agissait de trésorerie servant à racheter des actions.

#### Dilutif et antidilutif

Les attributions ne sont incluses que si elles sont **dilutives**, c’est-à-dire si $N-\text{Assumed proceeds}/\bar{P}>0$, de sorte que le BPA dilué baisse. Les attributions antidilutives sont exclues (et publiées).

* Les **options dans la monnaie** peuvent être dilutives, si le cours dépasse le prix d’exercice augmenté de la charge non comptabilisée par option.
* Les **options à la monnaie et en dehors de la monnaie** sont antidilutives : le produit supposé rachète plus d’actions qu’il n’en est émis.
* Les **RSU** sont généralement dilutives, car leur prix d’exercice est nul.
* Si l’entreprise publie une **perte nette**, toutes les actions potentielles sont antidilutives.

#### Exemple : nombre d’actions dilué

JinSan compte 200 millions d’actions de base en circulation en 20X1 et publie un résultat net positif. Ses seules attributions d’actions sont :

* 1,8 million de RSU
* 10 millions de stock-options des salariés à la monnaie

Toutes les attributions ont une période d’acquisition de trois ans. Le cours à la date d’attribution était de \$60, et la juste valeur de chaque option de \$15. Le cours moyen en 20X1 est de \$55. Au 31 déc. 20X1, la charge de rémunération en actions non comptabilisée est de 72 millions USD pour les RSU et de 100 millions USD pour les options.

Calculez le nombre d’actions dilué et identifiez les titres antidilutifs.

**Options.** Le prix d’exercice (\$60) est supérieur au cours moyen (\$55) ; elles sont donc en dehors de la monnaie et clairement antidilutives. Par le calcul (en millions) :

$$\text{Assumed proceeds}=10\times \$60+\frac{0+100}{2}=\$650\text{ million}$$

$$10-\frac{650}{55}=10-11.82=-1.82\text{ million}<0$$

**RSU.**

$$1.8-\frac{0+(0+72)/2}{\$55}=1.8-0.655=1.145\text{ million}>0$$

**Nombre d’actions dilué** $=200+1.145=201.145$ millions. Les 10 millions d’options sont antidilutives et exclues.

### Modélisation des états financiers

#### Informations à fournir sur la rémunération en actions {#disclosures-for-share-based-compensation}

Les IFRS exigent des informations permettant aux utilisateurs de comprendre :

1. La **nature et l’étendue** des accords de paiement en actions au cours de la période
2. La manière dont la **juste valeur** des instruments de capitaux propres attribués a été évaluée
3. L’**effet sur le résultat net** et sur la situation financière

Les US GAAP exigent des informations similaires. Elles figurent en général dans les **notes annexes aux états financiers**, et comprennent souvent ce dont l’analyste a besoin pour modéliser :

* Un **tableau de variation des attributions** : en circulation à l’ouverture, attribuées, acquises ou exercées, perdues, et en circulation à la clôture, avec la juste valeur moyenne pondérée à l’attribution ou le prix d’exercice
* Les **paramètres du modèle d’évaluation d’options** (volatilité, durée attendue, rendement du dividende, taux sans risque), qui déterminent la [juste valeur à la date d’attribution](#equity-settled-share-based-compensation)
* La **charge de rémunération en actions** de l’exercice, souvent ventilée par ligne du compte de résultat
* La **charge de rémunération non comptabilisée** et la durée moyenne pondérée sur laquelle elle sera comptabilisée, ce qui donne la charge future des attributions déjà consenties et alimente la [méthode du rachat d’actions](#diluted-shares-outstanding)

La **circulaire de procuration (proxy statement)** publie la rémunération de la direction générale et des administrateurs : salaires, primes, attributions consenties et objectifs de performance qui y sont attachés. Elle montre à quel point les incitations de la direction sont alignées sur celles des actionnaires.

#### Modélisation du compte de résultat {#modeling-the-income-statement}

La rémunération en actions n’est généralement **pas une ligne distincte** du compte de résultat. Elle est incluse dans les charges d’exploitation (coût des ventes, SG&A, R&D) selon le rôle de chaque salarié (voir [Principes comptables](#accounting-principles)). Prévoir ces lignes en pourcentage du chiffre d’affaires intègre donc indirectement la rémunération en actions.

L’approche courante pour la modéliser explicitement consiste à prévoir la rémunération en actions **en pourcentage du chiffre d’affaires**, à partir de l’historique, des indications de la direction ou des pairs. La contrepartie va en capitaux propres (la [réserve de rémunération en actions](#financial-reporting-for-share-based-compensation)).

Pour les **jeunes entreprises**, la rémunération en actions tend à **baisser en pourcentage du chiffre d’affaires** à mesure que l’entreprise mûrit ; un pourcentage constant la surestime donc. Modélisez-la plutôt de façon discrète, par exemple à partir de la charge non comptabilisée sur les attributions existantes (voir [Informations à fournir](#disclosures-for-share-based-compensation)) plus les nouvelles attributions attendues.

#### Modélisation des flux de trésorerie et du nombre d’actions {#modeling-cash-flow-and-the-share-count}

* **Tableau des flux de trésorerie** : la rémunération en actions est non monétaire ; elle est donc **réintégrée** au résultat net dans le CFO (méthode indirecte). Les exercices d’options apportent de la trésorerie (CFF) ; l’acquisition de RSU n’implique en général pas de trésorerie.
* **Attributions en circulation** : prévoyez les attributions avec un tableau de variation, cohérent avec la prévision de la charge :
  1. **Attributions d’actions, nettes des renonciations** : d’après leur croissance historique dans les notes
  2. **Règlements des attributions** (acquisition des RSU, exercice des options) : p. ex. une part fixe des attributions en circulation

$$\text{Awards}_{\text{end}}=\text{Awards}_{\text{begin}}+\text{Grants (net of forfeitures)}-\text{Settlements}$$

* **Actions en circulation** : les règlements (RSU acquises, options exercées) deviennent des actions nouvelles.

$$\text{Shares}_{\text{end}}=\text{Shares}_{\text{begin}}+\text{Settlements}+\text{Issuances}-\text{Repurchases}$$

Le nombre d’actions dilué ajoute ensuite les attributions encore en circulation, selon la méthode du rachat d’actions (voir [Nombre d’actions dilué](#diluted-shares-outstanding)).

#### Considérations d’évaluation {#valuation-considerations}

1. **Évaluation par les multiples.** Les entreprises publient souvent des indicateurs non GAAP, comme l’EBITDA ajusté ou le BPA ajusté, qui excluent la rémunération en actions. Ils gonflent les bénéfices et font paraître l’entreprise moins chère. Les analystes peuvent les utiliser, en ajustant le dénominateur du multiple, mais doivent être **cohérents et transparents** : comparer l’entreprise et ses pairs sur la même base, GAAP avec GAAP ou le même indicateur non GAAP partout. Ignorer simplement la rémunération en actions est une erreur, car il s’agit d’un véritable **transfert de valeur** des actionnaires vers les salariés, payé en actions au lieu d’espèces.

2. **Évaluation DCF.** Le flux de trésorerie disponible réintègre la rémunération en actions comme charge non monétaire. Si on la laisse ainsi, le DCF valorise l’entreprise comme si ses salariés travaillaient gratuitement, alors que le coût arrive en réalité sous forme de dilution. Le modèle doit tenir compte :
   1. **De la dilution due aux attributions en circulation mais non acquises** : utilisez le **nombre d’actions dilué** ([méthode du rachat d’actions](#diluted-shares-outstanding)) pour calculer la valeur par action. Un choix plus prudent consiste à prendre les actions de base plus tous les titres potentiellement dilutifs.
   2. **De la dilution due aux attributions futures** : la méthode pratique consiste à **déduire la rémunération en actions du flux de trésorerie disponible**, c’est-à-dire à la traiter comme une charge monétaire et à **ne pas** la réintégrer dans les charges non monétaires (NCC) :

$$\text{FCFF}=\text{NI}+(\text{NCC}-\text{SBC})+\text{Int}(1-t)-\text{FCInv}-\text{WCInv}$$

où SBC est la charge de rémunération en actions.

> [!Note]
>
> Déduire la rémunération en actions du flux de trésorerie disponible n’est pas techniquement exact, mais augmenter le nombre d’actions pour les attributions futures attendues, ou réduire la valeur des capitaux propres, devrait donner le même résultat. N’utilisez qu’une seule de ces méthodes pour les attributions futures ; les compter à la fois dans les flux de trésorerie et dans le nombre d’actions compte deux fois la dilution.

## Rémunération postérieure à l’emploi {#post-employment-compensation}

Les avantages postérieurs à l’emploi sont payés après la fin de l’emploi, en échange des services rendus pendant l’emploi. Ils comprennent des **prestations en espèces** (retraites) et des **prestations en nature** (couverture médicale des retraités, assurance vie). Les régimes sont classés en **cotisations définies (DC)** ou **prestations définies (DB)** :

| | Cotisations définies (DC) | Prestations définies (DB) |
| --- | --- | --- |
| **L’employeur promet** | Une cotisation aujourd’hui | Une prestation à la retraite |
| **Qui supporte le risque de placement** | Le salarié | L’employeur |
| **Obligation après cotisation** | Aucune | Payer les prestations promises, quel que soit le rendement des actifs du régime |
| **Charge** | La cotisation de la période | [Coût total périodique des retraites (TPPC)](#funded-status), selon des estimations actuarielles |
| **Bilan** | Seulement les cotisations restant dues | [Situation de financement](#funded-status) : passif ou actif net de retraite |

### Cotisations définies

Dans un régime DC, l’employeur verse au régime les cotisations convenues et n’a **aucune autre obligation**. Les salariés choisissent en général le placement des fonds et supportent le risque de placement.

#### Information financière pour les régimes DC

* La charge est la cotisation due pour la période. Comme les autres rémunérations, elle est présentée selon la [fonction du salarié](#accounting-principles), sans ligne distincte.
* Les cotisations dues mais non encore payées à la clôture sont comptabilisées en **passif courant**.

### Prestations définies

Les régimes DB sont des engagements de verser un montant défini après la retraite, soit sous forme de **capital**, soit sous forme de **rentes périodiques** jusqu’au décès. L’employeur supporte le risque de placement : si les actifs du régime rapportent moins, l’employeur doit cotiser davantage.

Une formule de prestation typique repose sur le salaire de fin de carrière :

$$\text{Annual benefit}=\text{Final salary}\times N\times x\%$$

$$\text{Final salary}=\text{Current salary}\times(1+g)^{T}$$

où $N$ est le nombre d’années de service, $x\%$ le taux d’acquisition, $g$ la croissance supposée des salaires et $T$ le nombre d’années jusqu’à la retraite. Les prestations projetées sont [actualisées](#pension-obligation), et l’obligation se constitue à mesure que le salarié accumule des années de service.

* Un **régime fermé** n’admet plus de nouveaux salariés ; les membres existants continuent d’acquérir des droits.
* Un **régime gelé** cesse d’acquérir des droits pour les services futurs ; les prestations futures des membres actuels sont donc figées.

#### Information financière pour les régimes DB {#financial-reporting-for-db-plans}

> [!note]
>
> Le nouveau programme CFA demande moins de calculs sur cette partie qu’auparavant.

**Exemple utilisé ci-dessous.** En début d’année, la PBO est de 1 000 et les actifs du régime de 900. Le taux d’actualisation est de 5 % et, pour les US GAAP, le rendement attendu des actifs du régime est de 7 %. Au cours de l’année, le coût des services rendus est de 60, une modification du régime ajoute un coût des services passés de 20, il y a une perte actuarielle de 30, l’employeur cotise 70, les actifs du régime obtiennent un rendement réel de 60 et des prestations de 40 sont versées.

##### Obligation de retraite {#pension-obligation}

L’obligation de retraite est un passif de l’employeur. Dans le cadre de leur rémunération totale, les salariés acquièrent des droits à retraite à chaque année de service ; la valeur des droits acquis dans l’année est le **coût des services rendus de la période (CSC)**.

Les US GAAP évaluent l’obligation comme la valeur actuelle des prestations futures acquises par les salariés pour les services rendus à ce jour, à partir du salaire final projeté : l’**obligation au titre des prestations projetées (PBO)**. (Les IFRS l’appellent *obligation au titre des prestations définies*.)

La PBO repose sur des **hypothèses actuarielles** : croissance des salaires, dates de départ en retraite, rotation du personnel et mortalité. Le **taux d’actualisation** est le rendement des obligations d’entreprise de haute qualité (catégorie investissement), ou des obligations d’État là où il n’existe pas de marché profond d’obligations d’entreprise.

$$\begin{aligned}\text{PBO}_{\text{end}}=\ &\text{PBO}_{\text{beg}}+\text{Interest cost}+\text{CSC}+\text{PSC}\\&\pm\text{Actuarial losses (gains)}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-pbo-chart"
  src="/charts/pension-db-accounting.html?view=pbo"
  title="Variation de la PBO : coût financier, coûts des services, perte actuarielle et prestations versées"
  loading="lazy"
></iframe>

| Terme | Ce que c’est | Exemple |
| --- | --- | ---: |
| **Coût financier** | $\text{PBO}_{\text{beg}}\times$ taux d’actualisation : l’obligation est plus proche d’un an de son paiement, l’actualisation se dénoue | +50 |
| **Coût des services rendus (CSC)** | La valeur actuelle des droits acquis par les services des salariés cette année | +60 |
| **Coût des services passés (PSC)** | La variation de la PBO due à une modification du régime qui change les prestations pour des services **déjà rendus** ; négative si les prestations sont réduites | +20 |
| **Pertes (gains) actuariel(le)s** | Changements d’hypothèses actuarielles, et écarts d’expérience par rapport à celles-ci. Un **taux d’actualisation plus bas**, une croissance des salaires plus forte ou une espérance de vie plus longue **augmentent** la PBO (une perte) | +30 |
| **Prestations versées** | Paiements aux retraités, qui éteignent une partie de l’obligation (payés à partir des [actifs du régime](#plan-assets)) | −40 |

La façon dont chaque terme atteint le résultat diffère entre IFRS et US GAAP ; voir [Traitements comptables](#financial-treatments).

##### Actifs du régime {#plan-assets}

L’entreprise qui parraine le régime est tenue d’y verser des cotisations, soit pour respecter les niveaux de financement minimaux réglementaires, soit de façon discrétionnaire, afin que les prestations futures puissent être payées.

Les actifs du régime sont la **propriété du régime, et non de l’entreprise**, et ne peuvent donc plus être retirés une fois versés. Le régime est une entité juridique distincte qui établit ses propres états financiers ; ses actifs n’apparaissent pas au bilan de l’entreprise (seule la [situation de financement](#funded-status) nette y figure).

$$\begin{aligned}\text{Plan assets}_{\text{end}}=\ &\text{Plan assets}_{\text{beg}}+\text{Employer contributions}\\&+\text{Actual return}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-assets-chart"
  src="/charts/pension-db-accounting.html?view=assets"
  title="Variation des actifs du régime : cotisations, rendement réel et prestations versées"
  loading="lazy"
></iframe>

| Terme | Ce que c’est | Exemple |
| --- | --- | ---: |
| **Cotisations de l’employeur** | Trésorerie versée au régime par l’entreprise | +70 |
| **Rendement réel des actifs du régime** | Intérêts, dividendes et plus-values réalisées et latentes sur les placements du régime ; peut être négatif | +60 |
| **Prestations versées** | Payées aux retraités ; le même montant qui réduit la PBO | −40 |

#### Situation de financement {#funded-status}

$$\text{Funded status}=\text{Fair value of plan assets}-\text{PBO}$$

* Un régime **sous-financé** (déficit) est présenté comme un passif net de retraite, en général dans les autres passifs non courants.
* Un régime **surfinancé** (excédent) est présenté comme un actif net de retraite, en général dans les autres actifs non courants. En IFRS, l’actif est limité par un **plafond d’actif** : la valeur actuelle des avantages économiques que l’entreprise peut tirer de l’excédent, par des remboursements ou des cotisations futures plus faibles. Les actifs appartiennent au régime ; un excédent ne vaut donc que ce que l’entreprise peut récupérer.

> [!note]
>
> Des régimes différents ne peuvent pas être compensés : l’excédent d’un régime ne compense pas le déficit d’un autre.

Dans l’[exemple](#financial-reporting-for-db-plans), le déficit se creuse de −100 ($900-1{,}000$) à −130 ($990-1{,}120$) :

<iframe
  class="fx-concept-chart pen-status-chart"
  src="/charts/pension-db-accounting.html?view=status"
  title="Passage de la situation de financement du début à la fin de l’année, et TPPC"
  loading="lazy"
></iframe>

Les prestations versées réduisent les actifs du régime et la PBO du même montant ; elles ne changent donc pas la situation de financement. Tout le reste provient soit de la trésorerie de l’entreprise (les cotisations), soit du coût des retraites de l’année, le **coût total périodique des retraites (TPPC)** :

$$\text{TPPC}=\text{Employer contributions}-\Delta\text{Funded status}=70-(-30)=100$$

$$\begin{aligned}\text{TPPC}&=\text{CSC}+\text{PSC}+\text{Interest cost}\pm\text{Actuarial losses (gains)}-\text{Actual return}\\&=60+20+50+30-60=100\end{aligned}$$

Au bilan, l’actif varie de $\Delta$Trésorerie et de $\Delta$Situation de financement, et les capitaux propres de $\Delta$RE et de $\Delta$AOCI (avant impôt) :

$$\underbrace{\Delta\text{Cash}}_{-70}+\underbrace{\Delta\text{Funded status}}_{-30}=-\text{TPPC}=\underbrace{\Delta\text{RE}}_{\text{via NI}}+\underbrace{\Delta\text{AOCI}}_{\text{via OCI}}$$

Le TPPC est **le même en IFRS et en US GAAP**. Les normes ne diffèrent que par sa répartition entre le résultat et les OCI :

$$\text{TPPC}=\text{Pension cost in P\&L}+\text{Pension cost in OCI}$$

#### Traitements comptables {#financial-treatments}

**En IFRS**, le TPPC a 3 composantes, 2 comptabilisées en résultat et 1 en OCI :

1. **Coût des services** : coût des services rendus et coût des services passés, tous deux comptabilisés en charge d’exploitation en résultat, classés selon la fonction des salariés. Exemple : $60+20=80$.
2. **Charge (produit) d’intérêts nette** : le taux d’actualisation multiplié par la [situation de financement](#funded-status) en début d’année, comptabilisée en résultat. Un déficit donne une charge ; un excédent un produit. Exemple : $5\%\times 100=5$, soit le coût financier de 50 moins le produit d’intérêts sur les actifs du régime $5\%\times 900=45$.
3. **Réévaluations**, comptabilisées en OCI :
   1. L’écart entre le rendement réel des actifs du régime et le produit d’intérêts supposé dans le calcul de l’intérêt net. Exemple : un gain de $60-45=15$.
   2. Les gains et pertes actuariels. Exemple : une perte de 30.

   Perte nette de réévaluation : $30-15=15$.

> [!note]
>
> En IFRS, les réévaluations en OCI ne sont **jamais recyclées** en résultat. Elles peuvent être transférées directement en résultats non distribués au sein des capitaux propres.

**En US GAAP**, les cinq éléments sont traités ainsi :

1. **Coût des services rendus** : en résultat, en charge d’exploitation. Exemple : 60.
2. **Coût des services passés** : en OCI, puis **amorti** en résultat sur la durée résiduelle moyenne de service des salariés. Exemple : 20 en OCI, dont 2 amortis cette année.
3. **Coût financier moins le rendement attendu des actifs du régime** : en résultat. Le rendement attendu utilise le **taux de rendement attendu** propre à l’entreprise, et non le taux d’actualisation. Exemple : $50-7\%\times 900=50-63=-13$.
4. **L’écart entre rendement réel et rendement attendu** : en OCI, comme partie des gains et pertes actuariels. Exemple : $60-63=-3$, une perte.
5. **Gains et pertes actuariels** : en OCI, et amortis en résultat uniquement selon la **méthode du corridor** : le gain ou la perte cumulé(e) net(te) en AOCI qui dépasse 10 % du plus élevé de la PBO et des actifs du régime (en début d’année) est amorti sur la durée résiduelle moyenne de service des salariés. Les entreprises peuvent aussi les comptabiliser plus vite. Exemple : perte de 30, et rien d’amorti cette année puisque l’AOCI partait de 0.

Charge de retraite en résultat selon les US GAAP : $60+50-63+2=49$. OCI : $(20-2)+3+30=51$. En US GAAP, seul le coût des services est présenté dans le résultat d’exploitation ; les autres composantes sont présentées en dehors.

<iframe
  class="fx-concept-chart pen-tppc-chart"
  src="/charts/pension-db-accounting.html?view=tppc"
  title="TPPC en IFRS et en US GAAP : ce qui va en résultat et ce qui va en OCI"
  loading="lazy"
></iframe>

> [!Important]
>
> Le même coût de retraite de 100 apparaît pour 85 dans le résultat IFRS, mais pour 49 seulement dans le résultat US GAAP. Le **rendement attendu** des US GAAP (7 %, choisi par la direction, au-dessus du taux d’actualisation de 5 %) et le **report** du coût des services passés et des pertes actuarielles abaissent tous deux la charge de retraite publiée. Pour comparer des entreprises, regardez le TPPC et les hypothèses, pas seulement la ligne du compte de résultat.

### Autres avantages postérieurs à l’emploi

Les autres avantages postérieurs à l’emploi, comme la **couverture médicale et l’assurance vie des retraités**, sont comptabilisés à peu près comme les [régimes de retraite DB](#financial-reporting-for-db-plans) : l’obligation de l’employeur est estimée avec des hypothèses actuarielles (dont la tendance attendue des coûts de santé).

Contrairement aux retraites, les entreprises ne sont en général **pas tenues par la réglementation de préfinancer** ces régimes ; beaucoup n’ont donc que peu ou pas d’actifs, et la [situation de financement](#funded-status) est proche de l’obligation totale.

### Considérations de modélisation financière

#### Informations à fournir sur les régimes postérieurs à l’emploi

Les **régimes DC** demandent peu d’informations : la charge de la période est la cotisation, et il ne reste rien à estimer.

Les **régimes DB** en demandent beaucoup plus. Les IFRS exigent des informations qui :

1. Expliquent les **caractéristiques des régimes** et les **risques** qui y sont associés
2. Identifient et expliquent les **montants des états financiers** issus des régimes
3. Décrivent comment les régimes peuvent affecter le **montant, le calendrier et l’incertitude des flux de trésorerie futurs**

Les US GAAP exigent des informations similaires. Dans les notes, elles comprennent en général ce dont l’analyste a besoin pour modéliser :

* Des **tableaux de variation** de la [PBO](#pension-obligation) et des [actifs du régime](#plan-assets), qui donnent la situation de financement aux deux bornes de l’année
* Les **composantes du coût des retraites**, et où chacune est présentée (charge d’exploitation, charge financière, OCI)
* Les **hypothèses actuarielles** : taux d’actualisation, croissance des salaires, espérance de vie, inflation, tendance des coûts de santé pour les OPEB et, en US GAAP, rendement attendu des actifs du régime
* Une **analyse de sensibilité** de l’obligation à chaque hypothèse clé (exigée en IFRS)
* Les **cotisations attendues** pour l’année suivante et les **prestations attendues** pour les années suivantes
* La **répartition des actifs du régime** (actions, obligations, immobilier, etc.), qui montre le risque de placement supporté par l’employeur

**Les hypothèses sont le domaine où la direction dispose d’une marge d’appréciation.** Chaque hypothèse ci-dessous abaisse l’obligation publiée ou la charge de retraite ; une entreprise qui se situe du côté favorable de ses pairs sur plusieurs d’entre elles publie donc de façon agressive :

| Hypothèse | Choix agressif | Effet |
| --- | --- | --- |
| **Taux d’actualisation** | Plus élevé | PBO plus faible ; en général coût des services plus faible |
| **Croissance des salaires** | Plus faible | PBO, coût des services et coût financier plus faibles |
| **Espérance de vie** | Plus courte | PBO plus faible : les prestations sont versées moins d’années |
| **Inflation** | Plus faible | PBO plus faible lorsque prestations ou salaires sont indexés sur l’inflation |
| **Tendance des coûts de santé** (OPEB) | Plus faible | Obligation et coût OPEB plus faibles |
| **Rendement attendu des actifs du régime** (US GAAP seulement) | Plus élevé | Charge de retraite plus faible en résultat ; **aucun effet sur la PBO** ni sur la situation de financement |

> [!Note]
>
> Comparez les hypothèses avec celles des pairs et avec l’historique de l’entreprise. Un changement d’hypothèse apparaît comme un gain ou une perte actuariel(le) en OCI ; il peut donc modifier la situation de financement sans toucher le résultat. Utilisez l’analyse de sensibilité IFRS pour recalculer l’obligation avec le taux d’actualisation d’un pair.

#### Modélisation des avantages postérieurs à l’emploi

Les **régimes DC** sont simples. Les cotisations font partie du coût de chaque salarié ; elles sont donc prévues **implicitement** dans les charges d’exploitation (coût des ventes, SG&A, R&D), comme la [rémunération en actions](#modeling-the-income-statement).

Les **régimes DB** se modélisent par les composantes du coût des retraites et les cotisations en trésorerie :

| Élément | Comment le prévoir | Où il va |
| --- | --- | --- |
| **Coût des services** | D’après l’historique et les notes, p. ex. en hausse avec les effectifs et les salaires ; nul pour un régime gelé | Charge d’exploitation, par fonction |
| **Charge (produit) d’intérêts nette** | Taux d’actualisation × situation de financement en début d’année | Charge financière (IFRS) ; hors résultat d’exploitation (US GAAP, qui utilise le rendement attendu) |
| **Réévaluations** | En général **supposées nulles** : les gains et pertes actuariels et le rendement excédentaire des actifs ne se prévoient pas | OCI |
| **Cotisations** | La cotisation attendue publiée pour l’année suivante, puis un plan de financement ou le minimum réglementaire | Sortie de trésorerie (CFO) |

La situation de financement est ensuite reportée. Les prestations versées disparaissent, car elles réduisent les actifs et la PBO du même montant (voir [Situation de financement](#funded-status)) :

$$\text{Funded status}_{\text{end}}=\text{Funded status}_{\text{beg}}-\text{Service cost}-\text{Net interest}\pm\text{Remeasurements}+\text{Contributions}$$

**Exemple (IFRS, suite de l’[exemple](#financial-reporting-for-db-plans) ci-dessus).** Le régime commence l’année suivante avec un déficit de 130 (actifs 990, PBO 1 120). Le taux d’actualisation reste de 5 %. Le coût des services est prévu à 64, les notes publient une cotisation attendue de 75, et les réévaluations sont supposées nulles.

* Charge d’intérêts nette $=5\%\times130=6.5$, une charge financière
* Coût des retraites en résultat $=64+6.5=70.5$, dont 64 en charges d’exploitation
* Situation de financement à la fin de l’année suivante $=-130-64-6.5+75=-125.5$

La cotisation de 75 dépasse le coût des retraites de 70,5 ; le déficit se réduit donc de 4,5.

#### Ajustements d’évaluation pour les régimes DB

La même logique s’applique aux retraites DB et aux OPEB :

1. **Partir de la situation de financement.** Un régime **sous-financé** est une **créance assimilable à une dette** : l’entreprise doit l’apurer par des cotisations futures. Déduisez-le de la valeur d’entreprise, avec la dette, pour obtenir la valeur des capitaux propres. Il est souvent déduit **après impôt**, car les cotisations sont en général déductibles. Un régime **surfinancé** est en général **ignoré** : l’excédent appartient au régime, et l’entreprise ne peut le récupérer que par des remboursements ou des cotisations futures plus faibles (voir le [plafond d’actif](#funded-status)).
2. **Traiter le coût des services futurs comme un coût d’exploitation monétaire**, comme pour la [rémunération en actions](#valuation-considerations) : déduisez-le dans le flux de trésorerie disponible, et **ne le réintégrez pas** comme charge non monétaire. C’est le coût des droits à retraite que les salariés acquièrent chaque année, au même titre que leurs salaires.
3. **Laisser l’intérêt net hors du FCFF.** Une fois le déficit compté comme dette, son intérêt est un coût de financement, comme l’intérêt d’une dette. L’inclure aussi dans les flux compterait le déficit deux fois. Pour la même raison, les cotisations supérieures au coût des services s’apparentent à un **remboursement de dette**, et non à une sortie d’exploitation.
4. **Ignorer les réévaluations** dans la prévision : elles ne sont pas prévisibles, et leur effet est déjà dans la dernière situation de financement.

Dans l’exemple, le déficit de 130 est déduit de la valeur d’entreprise : 130, ou $130\times(1-25\%)=97.5$ après impôt à un taux de 25 %. Le FCFF inclut le coût des services de 64 comme coût d’exploitation, et exclut les 11 de cotisations au-delà du coût des services ($75-64$) : ils paient l’intérêt du déficit (6,5) et réduisent le déficit lui-même (4,5), comme le ferait le service d’une dette.

> [!Note]
>
> Ne déduisez pas le déficit de la valeur d’entreprise **et** ne modélisez pas en plus les cotisations qui le remboursent dans le flux de trésorerie disponible. Cela compterait deux fois la même obligation, comme l’avertissement sur la dilution pour la [rémunération en actions](#valuation-considerations).
