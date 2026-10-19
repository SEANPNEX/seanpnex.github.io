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

## Types de rémunération des salariés {#types-of-employee-compensation}

Les normes comptables répartissent la rémunération en 5 grands types, distingués par :

* **Le moment** : combien de temps après le service du salarié le paiement intervient
* **La forme du paiement** : trésorerie, actions ou autres avantages

| Type | Ce qu’il couvre | Exemples |
| --- | --- | --- |
| **Avantages à court terme** | Payés dans les 12 mois suivant la fin de la période au cours de laquelle le service est rendu | Salaires, primes annuelles, congés payés, avantages en nature (soins médicaux, logement) |
| **Avantages à long terme** | Dont le paiement n’est pas attendu dans les 12 mois suivant la fin de la période de service | Congés payés de longue durée (p. ex. congés sabbatiques), prestations d’invalidité de longue durée |
| **[Indemnités de fin de contrat](#accounting-principles)** | Payées parce que l’emploi prend fin, et non en échange d’un service | Indemnités de licenciement, aide au reclassement |
| **[Rémunération en actions](#share-based-compensation)** | Payée en actions de l’employeur, ou en trésorerie en fonction du cours | Actions à cessibilité restreinte, stock-options, droits à l’appréciation d’actions |
| **[Avantages postérieurs à l’emploi](#post-employment-compensation)** | Payés après la fin de l’emploi, en échange du service rendu pendant l’emploi | Retraites, couverture médicale des retraités |

## Terminologie {#terminology}

* **Date d’attribution** : l’employeur et le salarié s’accordent sur les conditions du plan. Pour la rémunération en actions, la juste valeur de l’attribution est évaluée à cette date (voir [Information financière sur la rémunération en actions](#financial-reporting-for-share-based-compensation)).
* **Période d’acquisition des droits** : la période de service que le salarié doit accomplir pour obtenir l’attribution.
* **Date d’acquisition des droits** : les conditions d’acquisition sont remplies. Le salarié acquiert un **droit inconditionnel** à la rémunération ; l’employeur a désormais une obligation.
* **Date de règlement** : la rémunération est payée, en trésorerie ou en actions.

Ce découpage ressemble aux conditions d’une **option** : attribuée, acquise, puis exercée (réglée).

<iframe
  class="fx-concept-chart comp-timeline-chart"
  src="/charts/compensation-vesting-timeline.html"
  title="Calendrier de la rémunération : date d’attribution, période d’acquisition, date d’acquisition et date de règlement"
  loading="lazy"
></iframe>

Le coût de la rémunération est comptabilisé **sur la période d’acquisition des droits**, à mesure que le salarié rend le service qui la lui fait gagner, et non lors du paiement. Le règlement suit l’acquisition.

* **Pendant la période d’acquisition** : l’employeur comptabilise une charge de rémunération à mesure que les droits sont acquis. La contrepartie dépend du mode de règlement :
  * Réglée en trésorerie (salaires, primes en numéraire, retraites, droits à l’appréciation d’actions payés en trésorerie) : un **passif**.
  * [Réglée en instruments de capitaux propres](#equity-settled-share-based-compensation) (actions à cessibilité restreinte, stock-options) : les **capitaux propres** (capital versé ; voir les [écritures](#financial-reporting-for-share-based-compensation)). Aucun passif n’apparaît, car l’employeur doit des actions, pas de la trésorerie.
* **Charge ou actif** : le coût suit la fonction du salarié. La rémunération du personnel qui produit des stocks ou construit des immobilisations corporelles est **incorporée** à cet actif, et atteint le compte de résultat plus tard sous forme de COGS ou d’amortissement. Celle du personnel de direction et administratif est **passée en charges** directement en SG&A.
* **Au règlement** : des actions sont émises, ou le passif est réglé en trésorerie. Pour les attributions réglées en actions, plus rien n’est comptabilisé en charge après l’acquisition, même si les options ne sont jamais exercées (voir l’[exemple d’options](#example-employee-stock-options)).

## Principes comptables {#accounting-principles}

| Catégorie | Avantages à court terme | [Rémunération en actions réglée en instruments de capitaux propres](#equity-settled-share-based-compensation) | [Avantages postérieurs à l’emploi](#post-employment-compensation) |
| --- | --- | --- | --- |
| **Période d’acquisition typique** | Jours ou semaines | Années | Années ou décennies |
| **Forme du paiement** | Trésorerie | Actions | Trésorerie |
| **Montant comptabilisé sur la période d’acquisition** | Salaire non actualisé, etc. | Juste valeur, évaluée à la date d’attribution | Valeur actuelle des prestations futures estimées |

Lecture du tableau :

* **Plus l’attente est longue, plus le montant repose sur des estimations.** Les avantages à court terme sont payés en quelques jours ou semaines ; ils sont donc comptabilisés au montant dû **non actualisé**. Les avantages postérieurs à l’emploi sont payés des décennies plus tard ; ils sont évalués à la **valeur actuelle** des prestations (voir [Obligation de retraite](#pension-obligation)), qui dépend d’hypothèses sur les salaires, la durée de vie et les taux d’actualisation.
* **Les attributions réglées en actions sont figées à la date d’attribution.** Leur juste valeur est évaluée une seule fois, à la date d’attribution, et n’est pas réévaluée en fonction des variations ultérieures du cours. Ce montant est étalé sur la période d’acquisition.

Quelle que soit la forme de la rémunération, la plupart des entreprises regroupent la charge de rémunération et la présentent au compte de résultat selon la **fonction du salarié** (p. ex. en COGS ou en SG&A), plutôt que sur une ligne distincte.

> [!Note]
>
> L’exception concerne les **indemnités de fin de contrat**. Elles sont souvent engagées dans le cadre d’une **restructuration** et présentées dans les coûts de restructuration. Les analystes traitent souvent ces coûts comme non récurrents ; vérifiez qu’ils ne se répètent pas avant de les exclure.

## Rémunération en actions {#share-based-compensation}

La rémunération en actions paie les salariés en actions de l’employeur, ou en trésorerie liée au cours de l’action. Elle est courante pour la direction générale, et dans les jeunes entreprises qui ont peu de trésorerie disponible.

### Avantages et inconvénients {#advantages-and-disadvantages}

Avantages :

1. **Aligne les intérêts.** Les salariés actionnaires gagnent et perdent avec les actionnaires, ce qui réduit les conflits principal–agent.
2. **Favorise la fidélisation.** Une période d’acquisition pluriannuelle donne aux salariés une raison de rester, car les droits non acquis sont perdus en cas de départ (voir [Conditions d’acquisition](#vesting-conditions)).
3. **Préserve la liquidité.** Les attributions réglées en actions n’entraînent aucune sortie de trésorerie, ce qui compte surtout pour les start-up et les entreprises à forte croissance.

Inconvénients :

1. **Lien limité avec l’effort du salarié.** La plupart des salariés ont peu d’influence sur le cours, qui évolue aussi avec le marché ; l’attribution peut donc ne pas changer leur comportement.
2. **Prise de risque faussée.** Elle peut pousser les dirigeants dans un sens comme dans l’autre :
   * Les options ne paient qu’à la hausse ; elles peuvent donc encourager une prise de risque **excessive**.
   * Une forte détention d’actions immobilise le patrimoine du dirigeant dans l’entreprise ; elle peut le rendre **trop averse au risque**.
3. **Risque concentré pour les salariés.** Les salariés dépendent déjà de l’entreprise pour leur salaire. La rémunération en actions fait aussi baisser leur patrimoine avec le cours, et une action peu performante peut les laisser moins bien lotis qu’une rémunération équivalente en numéraire.
4. **Dilution.** L’émission d’actions nouvelles lors de l’acquisition ou de l’exercice réduit la participation et le BPA des actionnaires existants (voir [Nombre d’actions dilué](#diluted-shares-outstanding)).

### Conditions d’acquisition {#vesting-conditions}

1. **Condition de service** : l’attribution est acquise à une date future, à condition que le salarié soit **toujours employé** à ce moment-là.
2. **Condition de performance** : l’attribution n’est acquise que si un objectif de performance est atteint, en général en plus d’une condition de service. Il en existe deux sortes :
   * **Condition de marché** : liée au cours, p. ex. un cours cible ou un rendement total pour l’actionnaire relatif à un indice.
   * **Condition hors marché** : liée aux résultats opérationnels, p. ex. des objectifs de croissance du BPA, de chiffre d’affaires ou de ROE.

> [!Note]
>
> Les deux sortes de conditions de performance sont comptabilisées différemment :
>
> * Une **condition de marché** est intégrée à la juste valeur à la date d’attribution (un objectif de cours la réduit). La charge est comptabilisée dès lors que la condition de service est remplie, **même si l’objectif de marché n’est pas atteint**.
> * Une **condition hors marché** n’entre pas dans la juste valeur. La charge est alors fondée sur le nombre d’attributions **dont l’acquisition est attendue**, réestimé à chaque période (comme dans l’[exemple d’options](#example-employee-stock-options)). Si l’objectif n’est pas atteint, la charge déjà comptabilisée est reprise.
>
> Le même ajustement s’applique à la condition de service : les attributions perdues par les salariés partis avant l’acquisition voient leur charge reprise.

#### Exemple : condition de marché ou hors marché {#example-market-vs-non-market-condition}

**Pourquoi la charge liée à une condition de marché est maintenue.** La charge mesure le **service** reçu par l’entreprise, évalué à la date d’attribution. Avec une condition de marché, le modèle de juste valeur (p. ex. Monte-Carlo) intègre déjà la probabilité que l’objectif de cours ne soit pas atteint ; la juste valeur de 24 M est donc inférieure à ce qu’elle serait sans objectif. Manquer l’objectif est l’un des scénarios que ce prix prévoyait déjà. Reprendre la charge compterait ce risque deux fois. Le cours échappe en outre au contrôle de la direction ; les normes ne laissent donc pas la charge le suivre.

**Données.** Une attribution d’une juste valeur de 24 M à la date d’attribution est acquise après 3 ans de service, avec une charge de $24/3=8$ M par an. Fin de l’année 2, $16$ M ont été comptabilisés.

| Situation à la fin de l’année 3 | Charge de l’année 3 | Charge cumulée |
| --- | --- | --- |
| **Condition de marché** (objectif de cours) manquée, salarié toujours employé | 8 M | **24 M** : rien n’est repris |
| **Condition hors marché** (p. ex. objectif de BPA) manquée | −16 M (reprise) | **0** |
| Le salarié part en année 3 (condition de service non remplie) | −16 M (reprise) | **0** |

Une condition hors marché n’est pas dans la juste valeur ; la charge suit donc le nombre d’attributions dont l’acquisition est attendue et est ajustée au résultat réel. Une condition de marché ne donne lieu à aucun ajustement : une fois le service rendu, les 24 M sont intégralement passés en charges, que l’attribution paie ou non.

### Rémunération en actions réglée en instruments de capitaux propres {#equity-settled-share-based-compensation}

Les attributions réglées en instruments de capitaux propres sont payées en actions. Leur juste valeur est évaluée à la **date d’attribution** et étalée sur la période d’acquisition (voir le [calendrier](#terminology)). Elle n’est pas réévaluée en fonction des variations ultérieures du cours.

| | Actions à cessibilité restreinte | Unités d’actions restreintes (RSU) | Stock-options salariés (ESO) |
| --- | --- | --- | --- |
| **Ce que reçoit le salarié** | Des actions émises à l’attribution, incessibles jusqu’à l’acquisition | Une promesse d’actions, livrées au règlement | Le droit d’acheter des actions à un prix d’exercice fixe |
| **Droits de vote et dividendes avant l’acquisition** | Oui, en général | Non (parfois des équivalents de dividendes) | Non |
| **Valeur pour le salarié** | Le cours entier | Le cours entier | Seulement le gain au-delà du prix d’exercice |
| **Juste valeur à la date d’attribution** | Cours à l’attribution | Cours à l’attribution (moins les dividendes attendus que le porteur ne reçoit pas) | Modèle d’évaluation d’options (p. ex. [Black–Scholes–Merton](../C7%20Derivative/M2%20Options.md#black-scholes-model), [binomial](../C7%20Derivative/M2%20Options.md#binomial-option-valuation)) |

* Les **actions de performance (PSU)** sont des RSU dont le nombre d’actions dépend d’une [condition de performance](#vesting-conditions).
* Les **stock-options salariés** sont en général attribuées **à la monnaie** : le prix d’exercice est égal au cours à la date d’attribution. L’option n’a pas de valeur intrinsèque à l’attribution ; elle n’a de valeur pour le salarié que si le cours monte. Sa juste valeur n’est que valeur temps, d’où la nécessité de l’estimer par un modèle d’évaluation d’options plutôt que de la lire dans le cours.

> [!Important]
>
> La juste valeur d’une option à la date d’attribution, et donc la charge, dépend des paramètres retenus par la direction : volatilité attendue, durée attendue, rendement du dividende et taux sans risque. Une volatilité plus élevée, une durée plus longue ou un taux sans risque plus élevé augmentent la juste valeur ; un rendement du dividende plus élevé la réduit. Vérifiez que les hypothèses publiées dans les [notes](#disclosures-for-share-based-compensation) sont raisonnables : supposer une volatilité plus faible ou une durée attendue plus courte réduit la charge de rémunération.

### Information financière sur la rémunération en actions {#financial-reporting-for-share-based-compensation}

* **La juste valeur est évaluée une seule fois, à la date d’attribution.** Les variations ultérieures du cours n’ont aucun effet sur la charge.
  * **Actions à cessibilité restreinte et RSU** : le cours de marché des actions sous-jacentes à la date d’attribution. Les RSU ne reçoivent en général pas de dividendes avant l’acquisition ; leur prix est donc généralement réduit des dividendes attendus sur la période d’acquisition.
  * **Options** : estimées à la date d’attribution par un modèle d’évaluation d’options, comme Black–Scholes–Merton (la FSA ne demande pas le calcul ; il est traité en [Dérivés](../C7%20Derivative/M2%20Options.md#black-scholes-model)).
* **Le coût est comptabilisé sur la période d’acquisition**, à mesure que le salarié rend le service. Le montant est fondé sur le nombre d’attributions **dont l’acquisition est attendue**, réestimé à chaque période (voir [Conditions d’acquisition](#vesting-conditions)).
* **Règlement** : les RSU sont réglées à l’acquisition. Les options sont réglées plus tard, quand (et si) le salarié les exerce, à tout moment jusqu’à l’échéance.

Pour les attributions réglées en actions, le coût s’accumule dans une **réserve de rémunération en actions** au sein des capitaux propres :

| Quand | Écriture | Effet |
| --- | --- | --- |
| **Date d’attribution** | Aucune écriture | — |
| **Chaque année de la période d’acquisition** | Débit charge de rémunération, crédit réserve de rémunération en actions | RN ↓, donc RE ↓ ; réserve ↑. Total des capitaux propres, actifs et passifs inchangés |
| **Règlement des RSU (à l’acquisition)** | Débit réserve, crédit capital social (nominal) et prime d’émission (APIC) | Transfert au sein des capitaux propres ; pas de trésorerie |
| **Exercice des options** | Débit trésorerie (prix d’exercice × options) et réserve, crédit capital social (nominal) et APIC | Trésorerie ↑ (entrée en CFF) ; capitaux propres ↑ du montant encaissé |

La charge est **non monétaire** ; elle est donc réintégrée au résultat net dans le CFO selon la méthode indirecte (voir [Modélisation des flux de trésorerie et du nombre d’actions](#modeling-cash-flow-and-the-share-count)).

#### Exemple : stock-options salariés {#example-employee-stock-options}

En $T=0$, 120 cadres reçoivent chacun 10 options d’un prix d’exercice de 25 \$, échéant dans 3 ans. La juste valeur à la date d’attribution est de 50 \$ par option, et les options sont acquises après 2 ans de service. Le nominal des actions est de 1 \$.

**Année 1.** 5 cadres partent, et 15 autres devraient partir en année 2. Les options dont l’acquisition est attendue sont $(120-5-15)\times 10=1{,}000$.

$$\text{Expense}_{Y1}=\frac{1{,}000\times \$50}{2}=\$25{,}000$$

La juste valeur de l’option en $T=1$ (35 \$) est ignorée : l’attribution n’est pas réévaluée.

**Année 2.** 12 cadres partent, moins que prévu ; $(120-5-12)\times 10=1{,}030$ options sont donc acquises. La charge de l’année 2 ajuste le coût cumulé au nombre réel (voir la note sous [Conditions d’acquisition](#vesting-conditions)) :

$$\text{Expense}_{Y2}=1{,}030\times \$50-\$25{,}000=\$26{,}500$$

Le cours est de 20 \$ à la fin de l’année 2 : les options sont en dehors de la monnaie, mais la charge **n’est pas reprise**.

**Année 3.** Le cours monte à 30 \$, et les 1 030 options sont toutes exercées.

| | Année 1 | Année 2 | Année 3 (exercice) |
| --- | ---: | ---: | ---: |
| Charge de rémunération (RN, RE ↓) | 25,000 | 26,500 | — |
| Réserve, fin d’année | 25,000 | 51,500 | 0 (−51,500) |
| Trésorerie reçue (CFF) | — | — | $1{,}030\times 25=25{,}750$ |
| Capital social (nominal 1 \$) | — | — | +1,030 |
| APIC | — | — | $25{,}750-1{,}030+51{,}500=+76{,}220$ |

#### Exemple : plans de RSU {#example-rsu-plans}

Une entreprise attribue des RSU dans le cadre de trois plans. Chaque plan est acquis sur 3 ans et réglé à la fin de sa période d’acquisition. Les trois quarts de chaque attribution vont à la direction générale et le quart restant aux salariés de la division R&D. On suppose aucune perte de droits et un nominal de 1 \$.

| Plan | Date d’attribution | RSU attribuées | Cours à la date d’attribution | Juste valeur à l’attribution | Charge annuelle |
| --- | --- | ---: | ---: | ---: | ---: |
| Plan A | 1er janv. A1 | 18 | 60 \$ | 1,080 | 360 (A1–A3) |
| Plan B | 1er janv. A2 | 24 | 93 \$ | 2,232 | 744 (A2–A4) |
| Plan C | 1er janv. A3 | 30 | 117 \$ | 3,510 | 1,170 (A3–A5) |

<iframe
  class="fx-concept-chart comp-rsu-chart"
  src="/charts/rsu-plans-expense.html"
  title="Plans de RSU : charge par plan et par année, et solde de la réserve"
  loading="lazy"
></iframe>

La charge suit la [fonction](#accounting-principles) de chaque salarié : **3/4 en SG&A** (direction générale) et **1/4 en R&D**. Quand un plan est réglé, sa réserve est transférée au capital social (1 \$ × RSU) et à l’APIC (le reste).

| | A1 | A2 | A3 | A4 | A5 | A6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Plan A | 360 | 360 | 360 | | | |
| Plan B | | 744 | 744 | 744 | | |
| Plan C | | | 1,170 | 1,170 | 1,170 | |
| **Charge totale (RE ↓, réserve ↑)** | **360** | **1,104** | **2,274** | **1,914** | **1,170** | **0** |
| dont SG&A (3/4) | 270 | 828 | 1,705.5 | 1,435.5 | 877.5 | 0 |
| dont R&D (1/4) | 90 | 276 | 568.5 | 478.5 | 292.5 | 0 |
| Plan réglé (réserve ↓) | | | A : 1,080 | B : 2,232 | C : 3,510 | |
| Capital social ↑ | | | 18 | 24 | 30 | |
| APIC ↑ | | | 1,062 | 2,208 | 3,480 | |
| **Réserve, fin d’année** | 360 | 1,464 | 2,658 | 2,340 | 0 | 0 |

La charge totale sur les six ans, 6 822, est égale à la somme des justes valeurs à l’attribution des trois plans ($1{,}080+2{,}232+3{,}510$). Chaque unité finit en capital social et en APIC, et la réserve revient à zéro une fois le dernier plan réglé.

### Traitement fiscal {#tax-treatment}

|            | Information financière sur la rémunération en actions | Traitement fiscal de la rémunération en actions |
| ---------- | ----------------------------------------------- | ----------------------------------------- |
| **Moment** | Sur la période d’acquisition | Au règlement |
| **Montant** | Juste valeur à la date d’attribution | Cours à la date de règlement (RSU) ; valeur intrinsèque à l’exercice (options) |

La déduction fiscale diffère donc en général de la charge cumulée :

| Cours au règlement par rapport à la date d’attribution | Déduction fiscale par rapport à la charge cumulée | Nom | Résultat imposable et charge d’impôt |
| --- | --- | --- | --- |
| **Plus élevé** | Plus élevée | **Avantage fiscal excédentaire** (aubaine fiscale) | Réduits |
| **Plus bas** | Plus faible | **Insuffisance fiscale** | Augmentés |

Dans l’[exemple d’options](#example-employee-stock-options), la charge cumulée est de 51 500 \$, mais la déduction fiscale à l’exercice n’est que la valeur intrinsèque, $(\$30-\$25)\times 1{,}030=\$5{,}150$ : une insuffisance fiscale.

Les **IFRS** et les **US GAAP** traitent différemment aubaines et insuffisances dans les états financiers :

|                                        | IFRS | US GAAP |
| -------------------------------------- | ---- | ------- |
| **Avantage fiscal excédentaire (aubaine)** | Gain comptabilisé directement en capitaux propres | Baisse de la charge d’impôt au compte de résultat |
| **Insuffisance fiscale**                      | Perte comptabilisée directement en capitaux propres | Hausse de la charge d’impôt au compte de résultat |

> [!Note]
>
> En US GAAP, aubaines et insuffisances passent par la charge d’impôt ; le **taux d’impôt effectif varie donc avec le cours**. Retirez-les pour prévoir le taux d’impôt.
>
> La ligne IFRS est une simplification du programme. Selon IAS 12, seule la part de la déduction **supérieure** à la charge cumulée va en capitaux propres ; une insuffisance passe en général par le résultat.

### Nombre d’actions dilué {#diluted-shares-outstanding}

Les attributions en actions sont des actions potentielles ; le BPA dilué les intègre selon la **méthode du rachat d’actions** : l’entreprise est supposée émettre les actions et utiliser le produit pour racheter des actions au cours moyen.

$$\text{Diluted shares}=\text{Basic shares}+N-\frac{\text{Assumed proceeds}}{\bar{P}}$$

$$\text{Assumed proceeds}=N\times X+\overline{\text{Unrecognized compensation expense}}$$

* $N$ : actions émises à l’exercice ou au règlement
* $X$ : prix d’exercice ; **0 pour les RSU**
* $\bar{P}$ : cours moyen sur la période
* $\overline{\text{Unrecognized compensation expense}}$ : la charge restant à comptabiliser sur les périodes d’acquisition futures, en moyenne sur la période (la moyenne des deux valeurs de fin de période, publiées dans les [notes](#disclosures-for-share-based-compensation)). Le service que l’entreprise n’a pas encore reçu est compté comme une partie du prix payé pour les actions, comme s’il s’agissait de trésorerie utilisée pour racheter des actions.

#### Dilutif et antidilutif {#dilutive-and-anti-dilutive}

Les attributions ne sont incluses que si elles sont **dilutives**, c’est-à-dire si $N-\text{Assumed proceeds}/\bar{P}>0$, de sorte que le BPA dilué baisse. Les attributions antidilutives sont exclues (et mentionnées).

* Les **options dans la monnaie** peuvent être dilutives, si le cours dépasse le prix d’exercice plus la charge non comptabilisée par option.
* Les **options à la monnaie et en dehors de la monnaie** sont antidilutives : le produit supposé rachète plus d’actions qu’il n’en est émis.
* Les **RSU** sont en général dilutives, car leur prix d’exercice est nul.
* Si l’entreprise publie une **perte nette**, toutes les actions potentielles sont antidilutives.

#### Exemple : nombre d’actions dilué {#example-diluted-shares}

JinSan compte 200 millions d’actions de base en 20X1 et publie un résultat net positif. Ses seules attributions en actions sont :

* 1,8 million de RSU
* 10 millions de stock-options salariés à la monnaie

Toutes les attributions ont une période d’acquisition de trois ans. Le cours à la date d’attribution était de 60 \$, et la juste valeur de chaque option de 15 \$. Le cours moyen en 20X1 est de 55 \$. Au 31 décembre 20X1, la charge de rémunération en actions non comptabilisée est de 72 millions \$ pour les RSU et de 100 millions \$ pour les options.

Calculer le nombre d’actions dilué et identifier les titres antidilutifs.

**Options.** Le prix d’exercice (60 \$) est supérieur au cours moyen (55 \$) : elles sont en dehors de la monnaie, donc clairement antidilutives. Par le calcul :

$$\text{Assumed proceeds}=10\times \$60+\frac{0+100}{2}=\$650\text{ million}$$

$$10-\frac{650}{55}=10-11.82=-1.82\text{ million}<0$$

**RSU.**

$$1.8-\frac{0+(0+72)/2}{\$55}=1.8-0.655=1.145\text{ million}>0$$

**Nombre d’actions dilué** $=200+1.145=201.145$ millions. Les 10 millions d’options sont antidilutives et exclues.

### Modélisation des états financiers {#financial-statement-modeling}

#### Informations publiées sur la rémunération en actions {#disclosures-for-share-based-compensation}

Les IFRS exigent des informations permettant aux utilisateurs de comprendre :

1. La **nature et l’étendue** des accords de paiement en actions au cours de la période
2. La manière dont la **juste valeur** des instruments de capitaux propres attribués a été évaluée
3. L’**effet sur le résultat net** et sur la situation financière

Les US GAAP exigent des informations similaires. Elles figurent en général dans les **notes annexes aux états financiers** et comprennent habituellement ce dont l’analyste a besoin pour modéliser :

* Un **tableau de variation des attributions** : en cours en début d’année, attribuées, acquises ou exercées, perdues, et en cours en fin d’année, avec la juste valeur moyenne pondérée à l’attribution ou le prix d’exercice
* Les **paramètres du modèle d’évaluation d’options** (volatilité, durée attendue, rendement du dividende, taux sans risque), qui déterminent la [juste valeur à la date d’attribution](#equity-settled-share-based-compensation)
* La **charge de rémunération en actions** de l’année, souvent ventilée par ligne du compte de résultat
* La **charge de rémunération non comptabilisée** et la durée moyenne pondérée sur laquelle elle sera comptabilisée, qui donne la charge future des attributions déjà faites et alimente la [méthode du rachat d’actions](#diluted-shares-outstanding)

La **circulaire de procuration (proxy statement)** publie la rémunération de la direction générale et des administrateurs : salaires, primes, attributions et objectifs de performance qui y sont attachés. Elle montre dans quelle mesure les incitations de la direction sont alignées sur celles des actionnaires.

#### Modélisation du compte de résultat {#modeling-the-income-statement}

La rémunération en actions n’est en général **pas une ligne distincte** du compte de résultat. Elle est incluse dans les charges d’exploitation (COGS, SG&A, R&D) selon le rôle de chaque salarié (voir [Principes comptables](#accounting-principles)). Prévoir ces lignes en pourcentage du chiffre d’affaires capte donc indirectement la rémunération en actions.

L’approche courante pour la modéliser explicitement consiste à la prévoir **en pourcentage du chiffre d’affaires**, à partir de l’historique, des indications de la direction ou des pairs. La contrepartie va en capitaux propres (la [réserve de rémunération en actions](#financial-reporting-for-share-based-compensation)).

Pour les **jeunes entreprises**, la rémunération en actions tend à **baisser en pourcentage du chiffre d’affaires** à mesure qu’elles mûrissent ; un pourcentage constant la surestime. Modélisez-la plutôt séparément, par exemple à partir de la charge non comptabilisée sur les attributions existantes (voir [Informations publiées](#disclosures-for-share-based-compensation)) plus les nouvelles attributions attendues.

#### Modélisation des flux de trésorerie et du nombre d’actions {#modeling-cash-flow-and-the-share-count}

* **Tableau des flux de trésorerie** : la rémunération en actions est non monétaire ; elle est donc **réintégrée** au résultat net dans le CFO (méthode indirecte). L’exercice des options fait entrer de la trésorerie (CFF) ; l’acquisition des RSU n’implique en général pas de trésorerie.
* **Attributions en cours** : prévoyez les attributions avec un tableau de variation, cohérent avec la prévision de charge :
  1. **Attributions d’actions, nettes des pertes de droits** : d’après leur croissance historique dans les notes
  2. **Règlements des attributions** (acquisition des RSU, exercice des options) : p. ex. une part fixe des attributions en cours

$$\text{Awards}_{\text{end}}=\text{Awards}_{\text{begin}}+\text{Grants (net of forfeitures)}-\text{Settlements}$$

* **Actions en circulation** : les règlements (RSU acquises, options exercées) deviennent des actions nouvelles.

$$\text{Shares}_{\text{end}}=\text{Shares}_{\text{begin}}+\text{Settlements}+\text{Issuances}-\text{Repurchases}$$

Le nombre d’actions dilué ajoute ensuite les attributions encore en cours, selon la méthode du rachat d’actions (voir [Nombre d’actions dilué](#diluted-shares-outstanding)).

#### Considérations d’évaluation {#valuation-considerations}

1. **Évaluation par les multiples.** Les entreprises publient souvent des indicateurs non GAAP, comme l’EBITDA ajusté ou le BPA ajusté, qui excluent la rémunération en actions. Ils gonflent les bénéfices et font paraître l’entreprise moins chère. Les analystes peuvent les utiliser, en ajustant le dénominateur du multiple, mais doivent être **cohérents et transparents** : comparer l’entreprise et ses pairs sur la même base, GAAP avec GAAP ou le même indicateur non GAAP partout. Ignorer simplement la rémunération en actions est une erreur, car c’est un véritable **transfert de valeur** des actionnaires vers les salariés, payé en actions au lieu de trésorerie.

2. **Évaluation DCF.** Le flux de trésorerie disponible réintègre la rémunération en actions comme charge non monétaire. Si on en reste là, le DCF valorise l’entreprise comme si ses salariés travaillaient gratuitement, alors que le coût arrive en réalité sous forme de dilution. Le modèle doit tenir compte :
   1. **De la dilution due aux attributions en cours mais non acquises** : utiliser le **nombre d’actions dilué** ([méthode du rachat d’actions](#diluted-shares-outstanding)) pour calculer la valeur par action. Un choix plus prudent consiste à prendre les actions de base plus tous les titres potentiellement dilutifs.
   2. **De la dilution due aux attributions futures** : la méthode pratique consiste à **déduire la rémunération en actions du flux de trésorerie disponible**, c’est-à-dire à la traiter comme une charge décaissée et à **ne pas** la réintégrer dans les charges non monétaires (NCC) :

$$\text{FCFF}=\text{NI}+(\text{NCC}-\text{SBC})+\text{Int}(1-t)-\text{FCInv}-\text{WCInv}$$

où SBC est la charge de rémunération en actions.

> [!Note]
>
> Déduire la rémunération en actions du flux de trésorerie disponible n’est pas techniquement exact, mais augmenter le nombre d’actions pour les attributions futures attendues, ou réduire la valeur des capitaux propres, devrait donner le même résultat. N’utilisez qu’une seule de ces méthodes pour les attributions futures ; les compter à la fois dans les flux et dans le nombre d’actions compte la dilution deux fois.

## Rémunération postérieure à l’emploi {#post-employment-compensation}

Les avantages postérieurs à l’emploi sont payés après la fin de l’emploi, en échange du service rendu pendant l’emploi. Ils comprennent des **prestations en trésorerie** (retraites) et des **prestations en nature** (couverture santé des retraités, assurance vie). Les régimes sont classés en **cotisations définies (DC)** ou **prestations définies (DB)** :

| | Cotisations définies (DC) | Prestations définies (DB) |
| --- | --- | --- |
| **Le promoteur promet** | Une cotisation aujourd’hui | Une prestation à la retraite |
| **Qui supporte le risque de placement** | Le salarié | Le promoteur |
| **Obligation après cotisation** | Aucune | Verser les prestations promises, quel que soit le rendement des actifs du régime |
| **Charge** | La cotisation de la période | [Coût périodique total de la retraite (TPPC)](#funded-status), à partir d’estimations actuarielles |
| **Bilan** | Uniquement les cotisations restant dues | [Situation de financement](#funded-status) : passif ou actif net de retraite |

### Cotisations définies {#defined-contribution}

Dans un régime DC, le promoteur verse les cotisations convenues au régime et n’a **aucune autre obligation**. Les salariés choisissent en général le placement des fonds et supportent le risque de placement.

#### Information financière sur les régimes DC {#financial-reporting-for-dc}

* La charge est la cotisation due pour la période. Comme les autres rémunérations, elle est présentée selon la [fonction du salarié](#accounting-principles), sans ligne distincte.
* Les cotisations dues mais non versées en fin de période sont comptabilisées en **passif courant**.

### Prestations définies {#defined-benefit}

Les régimes DB s’engagent à verser un montant défini après la retraite, soit en **capital**, soit sous forme de **pension périodique** jusqu’au décès. L’employeur supporte le risque de placement : si les actifs du régime rapportent moins, l’employeur doit cotiser davantage.

Une formule de prestation typique repose sur le salaire final :

$$\text{Annual benefit}=\text{Final salary}\times N\times x\%$$

$$\text{Final salary}=\text{Current salary}\times(1+g)^{T}$$

où $N$ est le nombre d’années de service, $x\%$ le taux d’acquisition, $g$ la croissance salariale supposée et $T$ le nombre d’années jusqu’à la retraite. Les prestations projetées sont [actualisées](#pension-obligation), et l’obligation s’accumule à mesure que le salarié cumule des années de service.

* Un **régime fermé** n’admet plus de nouveaux salariés ; les membres existants continuent d’acquérir des droits.
* Un **régime gelé** cesse d’acquérir des droits pour le service futur ; les prestations futures des membres actuels sont donc figées.

#### Information financière sur les régimes DB {#financial-reporting-for-db-plans}

> [!note]
>
> Le nouveau programme du CFA demande moins de calculs sur cette partie qu’auparavant.

**Exemple utilisé ci-dessous.** En début d’année, la PBO est de 1 000 et les actifs du régime de 900. Le taux d’actualisation est de 5 % et, en US GAAP, le rendement attendu des actifs du régime de 7 %. Au cours de l’année, le coût des services rendus est de 60, une modification du régime ajoute un coût des services passés de 20, il y a une perte actuarielle de 30, l’employeur cotise 70, les actifs du régime ont un rendement réel de 60, et 40 de prestations sont versées.

##### Obligation de retraite {#pension-obligation}

L’obligation de retraite est un passif de l’employeur. Dans le cadre de leur rémunération totale, les salariés acquièrent des droits à retraite à chaque année de service ; la valeur des droits acquis dans l’année est le **coût des services rendus (CSC)**.

Les US GAAP évaluent l’obligation comme la valeur actuelle des prestations futures acquises par les salariés au titre des services rendus à ce jour, en utilisant le salaire final projeté : l’**obligation au titre des prestations projetées (PBO)**. (Les IFRS parlent d’*obligation au titre des prestations définies*.)

La PBO repose sur des **hypothèses actuarielles** : croissance des salaires, dates de départ à la retraite, rotation du personnel et mortalité. Le **taux d’actualisation** est le rendement des obligations d’entreprises de haute qualité (catégorie investissement), ou des obligations d’État en l’absence de marché profond d’obligations d’entreprises.

$$\begin{aligned}\text{PBO}_{\text{end}}=\ &\text{PBO}_{\text{beg}}+\text{Interest cost}+\text{CSC}+\text{PSC}\\&\pm\text{Actuarial losses (gains)}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-pbo-chart"
  src="/charts/pension-db-accounting.html?view=pbo"
  title="Variation de la PBO : coût financier, coûts des services, perte actuarielle et prestations versées"
  loading="lazy"
></iframe>

| Poste | Définition | Exemple |
| --- | --- | ---: |
| **Coût financier** | $\text{PBO}_{\text{beg}}\times$ taux d’actualisation : l’obligation se rapproche d’un an de son paiement, l’actualisation se dénoue | +50 |
| **Coût des services rendus (CSC)** | La valeur actuelle des droits acquis par les services des salariés cette année | +60 |
| **Coût des services passés (PSC)** | La variation de la PBO due à une modification du régime qui change les prestations au titre de services **déjà rendus** ; négatif si les prestations sont réduites | +20 |
| **Pertes (gains) actuariel(le)s** | Changements d’hypothèses actuarielles, et écarts entre l’expérience et ces hypothèses. Un **taux d’actualisation plus bas**, une croissance salariale plus forte ou une espérance de vie plus longue **augmentent** la PBO (une perte) | +30 |
| **Prestations versées** | Paiements aux retraités, qui éteignent une partie de l’obligation (payés sur les [actifs du régime](#plan-assets)) | −40 |

La façon dont chaque poste atteint le résultat diffère entre IFRS et US GAAP ; voir [Traitements comptables](#financial-treatments).

##### Actifs du régime {#plan-assets}

L’entreprise promotrice doit verser des cotisations au régime, soit pour respecter les niveaux de financement minimaux réglementaires, soit de manière discrétionnaire, afin de garantir le paiement des prestations futures.

Les actifs du régime sont la **propriété du régime, et non de l’entreprise promotrice** ; une fois versés, ils ne peuvent pas être retirés. Le régime est une entité juridique distincte qui établit ses propres états financiers ; ses actifs n’apparaissent pas au bilan de l’entreprise (seule la [situation de financement](#funded-status) nette y figure).

$$\begin{aligned}\text{Plan assets}_{\text{end}}=\ &\text{Plan assets}_{\text{beg}}+\text{Employer contributions}\\&+\text{Actual return}-\text{Benefits paid}\end{aligned}$$

<iframe
  class="fx-concept-chart pen-assets-chart"
  src="/charts/pension-db-accounting.html?view=assets"
  title="Variation des actifs du régime : cotisations, rendement réel et prestations versées"
  loading="lazy"
></iframe>

| Poste | Définition | Exemple |
| --- | --- | ---: |
| **Cotisations de l’employeur** | Trésorerie versée au régime par l’entreprise | +70 |
| **Rendement réel des actifs du régime** | Intérêts, dividendes et plus-values réalisées et latentes des placements du régime ; peut être négatif | +60 |
| **Prestations versées** | Payées aux retraités ; le même montant qui réduit la PBO | −40 |

#### Situation de financement {#funded-status}

$$\text{Funded status}=\text{Fair value of plan assets}-\text{PBO}$$

* Un régime **sous-financé** (déficit) est présenté comme un passif net de retraite, en général dans les autres passifs non courants.
* Un régime **surfinancé** (excédent) est présenté comme un actif net de retraite, en général dans les autres actifs non courants. En IFRS, l’actif est limité par un **plafond d’actif** : la valeur actuelle des avantages économiques que l’entreprise peut tirer de l’excédent, par des remboursements ou des cotisations futures réduites. Les actifs appartiennent au régime ; un excédent ne vaut donc que ce que l’entreprise peut récupérer.

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

Les prestations versées réduisent du même montant les actifs du régime et la PBO ; elles ne modifient donc pas la situation de financement. Tout le reste provient soit de la trésorerie de l’entreprise (cotisations), soit du coût de la retraite pour l’année, le **coût périodique total de la retraite (TPPC)** :

$$\text{TPPC}=\text{Employer contributions}-\Delta\text{Funded status}=70-(-30)=100$$

$$\begin{aligned}\text{TPPC}&=\text{CSC}+\text{PSC}+\text{Interest cost}\pm\text{Actuarial losses (gains)}-\text{Actual return}\\&=60+20+50+30-60=100\end{aligned}$$

Au bilan, l’actif varie de $\Delta$Trésorerie et $\Delta$Situation de financement, et les capitaux propres de $\Delta$RE et $\Delta$AOCI (avant impôt) :

$$\underbrace{\Delta\text{Cash}}_{-70}+\underbrace{\Delta\text{Funded status}}_{-30}=-\text{TPPC}=\underbrace{\Delta\text{RE}}_{\text{via NI}}+\underbrace{\Delta\text{AOCI}}_{\text{via OCI}}$$

Le TPPC est **identique en IFRS et en US GAAP**. Les normes ne diffèrent que par sa répartition entre résultat et OCI :

$$\text{TPPC}=\text{Pension cost in P\&L}+\text{Pension cost in OCI}$$

#### Traitements comptables {#financial-treatments}

**En IFRS**, le TPPC a 3 composantes, 2 comptabilisées en résultat et 1 en OCI :

1. **Coût des services** : coût des services rendus et coût des services passés, tous deux comptabilisés en charge d’exploitation au résultat, classés par fonction. Exemple : $60+20=80$.
2. **Charge (produit) d’intérêts nette** : le taux d’actualisation multiplié par la [situation de financement](#funded-status) en début d’année, comptabilisé en résultat. Un déficit donne une charge ; un excédent un produit. Exemple : $5\%\times 100=5$, soit le coût financier de 50 moins le produit d’intérêts sur les actifs du régime $5\%\times 900=45$.
3. **Réévaluations**, comptabilisées en OCI :
   1. L’écart entre le rendement réel des actifs du régime et le produit d’intérêts retenu dans le calcul des intérêts nets. Exemple : $60-45=15$ de gain.
   2. Les gains et pertes actuariels. Exemple : 30 de perte.

   Perte nette de réévaluation : $30-15=15$.

> [!note]
>
> En IFRS, les réévaluations en OCI ne sont **jamais recyclées** en résultat. Elles peuvent être transférées directement en réserves au sein des capitaux propres.

**En US GAAP**, les cinq éléments sont traités ainsi :

1. **Coût des services rendus** : en résultat, en charge d’exploitation. Exemple : 60.
2. **Coût des services passés** : en OCI, puis **amorti** en résultat sur la durée résiduelle moyenne d’activité des salariés. Exemple : 20 en OCI, dont 2 amortis cette année.
3. **Coût financier moins le rendement attendu des actifs du régime** : en résultat. Le rendement attendu utilise le **taux de rendement attendu** propre à l’entreprise, et non le taux d’actualisation. Exemple : $50-7\%\times 900=50-63=-13$.
4. **L’écart entre rendement réel et rendement attendu** : en OCI, comme partie des gains et pertes actuariels. Exemple : $60-63=-3$, une perte.
5. **Gains et pertes actuariels** : en OCI, et amortis en résultat uniquement selon la **méthode du corridor** : le gain ou la perte net cumulé en AOCI qui dépasse 10 % du plus élevé de la PBO et des actifs du régime (en début d’année) est amorti sur la durée résiduelle moyenne d’activité des salariés. Les entreprises peuvent aussi les comptabiliser plus rapidement. Exemple : 30 de perte, et rien d’amorti cette année puisque l’AOCI partait de 0.

Charge de retraite US GAAP en résultat : $60+50-63+2=49$. OCI : $(20-2)+3+30=51$. En US GAAP, seul le coût des services est présenté dans le résultat d’exploitation ; les autres composantes sont présentées en dehors.

<iframe
  class="fx-concept-chart pen-tppc-chart"
  src="/charts/pension-db-accounting.html?view=tppc"
  title="TPPC en IFRS et en US GAAP : ce qui va en résultat et ce qui va en OCI"
  loading="lazy"
></iframe>

> [!Important]
>
> Le même coût de retraite de 100 apparaît pour 85 dans le résultat IFRS mais pour seulement 49 dans le résultat US GAAP. Le **rendement attendu** des US GAAP (7 %, choisi par la direction, au-dessus du taux d’actualisation de 5 %) et le **différé** du coût des services passés et des pertes actuarielles abaissent tous deux la charge de retraite publiée. Pour comparer des entreprises, regardez le TPPC et les hypothèses, pas seulement la ligne du résultat.

### Autres avantages postérieurs à l’emploi {#other-post-employment-benefits}

Les autres avantages postérieurs à l’emploi, comme la **couverture santé et l’assurance vie des retraités**, sont comptabilisés à peu près comme les [régimes de retraite DB](#financial-reporting-for-db-plans) : l’obligation de l’employeur est estimée à l’aide d’hypothèses actuarielles (dont l’évolution attendue des coûts de santé).

Contrairement aux retraites, les entreprises ne sont en général **pas tenues par la réglementation de préfinancer** ces régimes ; beaucoup ont donc peu ou pas d’actifs, et la [situation de financement](#funded-status) est proche de l’obligation totale.

### Considérations de modélisation financière {#financial-modelling-consideration}

#### Informations publiées sur les régimes postérieurs à l’emploi {#disclosure-for-past-employment-benefits-plans}

Les exigences d’information pour les régimes DC sont minimales.
