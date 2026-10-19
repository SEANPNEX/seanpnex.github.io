---
title: Investissements intersociétés
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
.fx-concept-chart.fsa-tree-chart { height: 455px; }
.fx-concept-chart.fsa-own-chart { height: 355px; }
.fx-concept-chart.fsa-classify-chart { height: 625px; }
.fx-concept-chart.fsa-measure-chart { height: 670px; }
.fx-concept-chart.fsa-timeline-chart { height: 475px; }
.fx-concept-chart.fsa-impair-chart { height: 455px; }
.fx-concept-chart.fsa-equity-ex-chart { height: 375px; }
.fx-concept-chart.fsa-methods-chart { height: 630px; }
.fx-concept-chart.fsa-ni-eq-chart { height: 520px; }
.fx-concept-chart.fsa-ratio-chart { height: 390px; }
/* Phones: the two-column charts stack. */
@media (max-width: 587px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.fsa-tree-chart { height: 560px; }
    .fx-concept-chart.fsa-own-chart { height: 495px; }
    .fx-concept-chart.fsa-classify-chart { height: 1000px; }
    .fx-concept-chart.fsa-measure-chart { height: 760px; }
    .fx-concept-chart.fsa-timeline-chart { height: 885px; }
    .fx-concept-chart.fsa-impair-chart { height: 730px; }
    .fx-concept-chart.fsa-equity-ex-chart { height: 435px; }
    .fx-concept-chart.fsa-methods-chart { height: 1060px; }
    .fx-concept-chart.fsa-ni-eq-chart { height: 595px; }
    .fx-concept-chart.fsa-ratio-chart { height: 455px; }
}
</style>

# Investissements intersociétés

## Catégories de base des investissements d’entreprise {#basic-corporate-investment-categories}

### Catégories {#catagories}

Le schéma suivant présente les catégories d’investissement du point de vue comptable.

<iframe
  class="fx-concept-chart fsa-tree-chart"
  src="/charts/intercorporate-investment-tree.html"
  title="Catégories d’investissements intersociétés (arbre)"
  loading="lazy"
></iframe>

#### Participations à long terme {#long-term-equity}

Comme indiqué ci-dessus, il existe 4 catégories de participations à long terme, selon le pouvoir de contrôle :

* **Investissements dans des actifs financiers** : ni contrôle ni influence notable
* **Participations dans des entreprises associées** : influence notable
* **Coentreprises** : contrôle partagé
* **Regroupements d’entreprises** : prise d’une participation de contrôle.

Le **pourcentage de détention** sert généralement à déterminer la catégorie appropriée :

<iframe
  class="fx-concept-chart fsa-own-chart"
  src="/charts/intercorporate-ownership-control.html"
  title="Pourcentage de détention et pouvoir de contrôle"
  loading="lazy"
></iframe>


> [!Note]
>
> La distinction entre les catégories dépend du niveau réel de contrôle.



|                            | Actifs financiers         | Entreprises associées            | Coentreprises | Regroupement d’entreprises |
| -------------------------- | ------------------------ | --------------------- | -------------- | -------------------- |
| **Degré d’influence**    | pas d’influence notable | influence notable | contrôle partagé | contrôle              |
| **Pourcentage de détention** | < 20%                    | 20% - 50%             | variable         | > 50%                |
| **Nom de l’entité détenue**       | -                        | entreprise associée             | -              | filiale           |
| **Traitement comptable**   | AMC, FVOCI, FVPL         | Mise en équivalence         | Mise en équivalence  | Méthode de l’acquisition   |

> 
>


> [!Important]
>
> En cas d’acquisition, vérifiez si les sociétés ont un contrôleur commun, c’est-à-dire deux entités ou plus contrôlées par une même partie.



## Investissements dans des actifs financiers {#investment-in-financial-assets}

### Classement des actifs financiers {#classification-of-financial-assets}

<iframe
  class="fx-concept-chart fsa-classify-chart"
  src="/charts/financial-asset-classification.html"
  title="Arbre de décision du classement des actifs financiers"
  loading="lazy"
></iframe>

> [!note]
>
> Les actifs financiers sont une sous-catégorie des instruments financiers, qui comprennent aussi les passifs financiers, non traités dans le programme du CFA.

Le classement des actifs financiers repose désormais sur les flux de trésorerie **objectifs** de l’actif et sur l’intention **subjective** de l’investissement. Il y a donc 2 critères :

1. Test des caractéristiques des flux : les flux contractuels sont-ils uniquement des remboursements de principal et des intérêts sur le principal restant dû ?
2. Test du modèle économique : comment l’entité gère ses actifs financiers pour générer des flux — en encaissant les flux contractuels, en vendant les actifs, ou les deux.

Les actifs financiers qui remplissent les 2 critères suivants sont en général évalués au **coût amorti (AMC)** :

1. Les flux contractuels sont uniquement des remboursements de principal et des intérêts sur le principal restant dû
2. Les actifs financiers sont détenus pour encaisser les flux contractuels

Si l’actif financier remplit le premier critère mais peut être vendu selon un modèle « encaisser + vendre », il peut être évalué à la **juste valeur par les autres éléments du résultat global (FVOCI)**

Tous les autres actifs sont classés à la **juste valeur par le résultat (FVPL)**

> [!note]
>
> Quelques exemples :
>
> * Les **créances clients** sont en AMC
> * Les **prêts hypothécaires** des banques sont en AMC
> * Les **autres financements par dette** sont en FVOCI
> * Le **financement de créances clients** est en FVOCI
> * Les **dérivés** sont en FVPL (sauf les instruments de couverture)
> * Pour les **dérivés incorporés**, comme une obligation convertible, l’actif dans son ensemble est en FVPL

#### FVPL sur option {#designated-fvpl}

Seuls les investissements en dette peuvent être *désignés* en FVPL (les investissements en actions relèvent déjà pour la plupart de la FVPL).

Le but est d’éviter une non-concordance comptable. Il arrive qu’un passif soit évalué en FVPL au bilan, avec en face un investissement obligataire choisi pour égaler la duration de ce passif. Cet investissement doit alors être **désigné en FVPL**.

#### FVOCI sur option {#designated-fvoci}

Cette catégorie sert aux participations en actions non détenues à des fins de transaction. Seuls les dividendes sont alors comptabilisés en résultat. À la décomptabilisation, les montants cumulés ne sont transférés qu’en résultats non distribués.

### Évaluation des actifs financiers {#measurement-of-financial-assets}

Tous les actifs financiers sont évalués à la **juste valeur** lors de leur acquisition, qui correspond en général au coût le jour de l’acquisition.

Prenons un exemple. En $T=0$, une entreprise achète une obligation à **951.96** : échéance 3 ans, coupon de 10 %, nominal 1000.

Supposons que la juste valeur de l’obligation soit de 980 en $T=1$, 999 en $T=2$ et 1000 en $T=3$.

On calcule d’abord le taux effectif `rate` de l’investissement à la calculatrice, à partir des trois données connues : **12 %**.

<iframe
  class="fx-concept-chart fsa-measure-chart"
  src="/charts/financial-asset-measurement-bs.html"
  title="Évolution au bilan selon l’évaluation de l’actif financier (AMC, FVOCI, FVPL)"
  loading="lazy"
></iframe>

<iframe
  class="fx-concept-chart fsa-timeline-chart"
  src="/charts/financial-asset-measurement-timeline.html"
  title="Les trois chronologies de l’évaluation des actifs financiers (AMC, FVOCI, FVPL)"
  loading="lazy"
></iframe>

**AMC.** Le coût amorti en $T=0$ est de 951.96. À la calculatrice, avec $n=2$, on obtient la valeur comptable en $T=1$ : 966.2. En $T=2$, il suffit d’actualiser 1100 sur une période pour obtenir 982.14. Les justes valeurs ultérieures n’influencent pas la comptabilisation au coût amorti.

Étapes au bilan :

- $T=0$ : trésorerie $-951.96$, AMC $+951.96$
- $T=1$ : trésorerie $+100$ ; RE $+114.24$ ($=951.96 \times 12\%$) ; AMC $+14.24$ → 966.2
- $T=2$ : trésorerie $+100$ ; RE $+115.94$ ($=966.2 \times 12\%$) ; AMC $+15.94$ → 982.14
- $T=3$ : trésorerie $+1000+100$ ; RE $+117.86$ ($=982.14 \times 12\%$) ; AMC $+17.86-1000$

**FVOCI.** Les intérêts en RE sont les mêmes qu’en AMC ; les variations de juste valeur vont en AOCI.

- $T=0$ : trésorerie $-951.96$, FVOCI $+951.96$
- $T=1$ : trésorerie $+100$ ; FVOCI $+28.04$ (jusqu’à la JV 980) ; RE $+114.24$ comme en AMC ; AOCI $+13.8$ pour équilibrer
- $T=2$ : trésorerie $+100$ ; FVOCI $+19$ (jusqu’à la JV 999) ; RE $+100+15.94$ ; AOCI $+3.06$
- $T=3$ : trésorerie $+1000+100$ ; FVOCI $+1$ puis solde $-1000$ ; RE $+17.86+100$ ; AOCI $-16.86$ (l’AOCI cumulé revient à 0)

**FVPL.** Le coupon et la variation de juste valeur passent tous deux par RE.

- $T=0$ : trésorerie $-951.96$, FVPL $+951.96$
- $T=1$ : trésorerie $+100$ ; FVPL $+28.04$ (même trajectoire de JV qu’en FVOCI) ; RE $+100+28.04$
- $T=2$ : trésorerie $+100$ ; FVPL $+19$ ; RE $+119$
- $T=3$ : trésorerie $+1000+100$ ; FVPL $+1-1000$ ; RE $+100+1$ (coupon + hausse de JV)

**Total au compte de résultat.** Quel que soit le classement, le résultat total sur la durée de vie est le même :

$$114.24 + 115.94 + 117.86 = 128.04 + 119 + 101 = 348.04$$

Ces 348.04 sont le profit économique implicite à l’achat : valeur temps de l’argent $300$ (coupons) + décote $38.04$ ($=1000-951.96$).



#### Dépréciation des actifs financiers {#impairment-of-financial-assets}

La nouvelle norme fait passer le critère de comptabilisation d’un modèle de « pertes subies » à un modèle de **« pertes attendues ».**

> [!note]
>
> Pour l’examen du CFA, il suffit de connaître le nom du **modèle des pertes attendues**. La suite ne sera pas testée.

Parmi les **instruments financiers**, seuls les engagements de garantie financière et les engagements de prêt peuvent être dépréciés côté passifs. Côté actifs, la FVPL n’est jamais dépréciée, car toute la variation de valeur de marché passe déjà par le résultat. Il ne reste rien pour un test de dépréciation séparé.

La dépréciation en AMC s’évalue comme celle des stocks.

<iframe
  class="fx-concept-chart fsa-impair-chart"
  src="/charts/financial-asset-impairment-bs.html"
  title="Dépréciation en AMC et en FVOCI : deux lectures, bilan et compte de résultat"
  loading="lazy"
></iframe>


**Comment la dépréciation est évaluée (exemple du graphique).**

La perte de crédit attendue (ECL) est le montant de la dépréciation. Seuls l’**AMC** et la **FVOCI de dette** font ce test — pas la FVPL.

**AMC.** La valeur comptable est le coût amorti. L’ECL réduit l’actif (provision / réduction directe) et touche le compte de résultat en une seule étape — comme une dépréciation de stocks.

- Valeur comptable $960$, ECL $15$
- Actif : $960 - 15$
- RE (compte de résultat) : $-15$

**FVOCI (dette).** L’actif est toujours présenté à la **juste valeur**. L’ECL passe toujours au compte de résultat, mais elle **ne** modifie **pas** à nouveau la valeur comptable — elle répartit la variation totale de juste valeur en deux :

1. **Perte de crédit → compte de résultat / RE** (dépréciation)
2. **Autre variation de JV → AOCI** (taux, liquidité, etc.)

Sur le graphique : la JV passe de $980 \to 960$ (total $-20$), ECL $=15$.

- L’actif reste à la JV $960$
- RE (compte de résultat) : $-15$
- AOCI : $-20 + 15 = -5$

L’AMC et la FVOCI de dette font donc passer **les mêmes $15$** en résultat ; la FVOCI loge en plus le reliquat de $-5$ en OCI, car le bilan montre déjà la juste valeur complète.

### Reclassement des actifs financiers {#reclassification-of-financial-assets}

Les investissements en actions ne peuvent pas être reclassés. Un reclassement n’est permis que si le modèle économique de gestion des actifs financiers a changé d’une manière qui affecte significativement les opérations.

> [!note]
>
> La date de reclassement est le début de l’exercice comptable suivant. La comptabilisation passée ne peut pas être modifiée ; les changements futurs commencent à la date de reclassement.

## Participations dans des entreprises associées {#investments-in-associates}

### Mise en équivalence {#equity-method-of-accounting}

#### Principes de base {#basic-principles}

Rappelons que lorsqu’une entreprise détient, *directement ou indirectement*, 20 % à 50 % des droits de vote d’une entité, elle est présumée avoir une influence notable mais pas le contrôle.



> [!note]
>
> Pour apprécier l’**influence**, les IFRS tiennent aussi compte des bons de souscription, options d’achat ou titres convertibles actuellement exerçables ou convertibles ; les US GAAP ne considèrent que les actions avec droit de vote détenues.

Selon les normes comptables, l’influence notable peut se manifester par :

* Une représentation au conseil d’administration
* La participation au processus d’élaboration des politiques
* Des transactions significatives
* L’échange de personnel de direction
* Une dépendance technologique

La mise en équivalence est souvent appelée « consolidation sur une ligne » : la quote-part de l’actif net de l’entité détenue figure sur une seule ligne du bilan, « participation dans l’entreprise associée ». Au compte de résultat, la quote-part de résultat est présentée après le résultat d’exploitation.

Selon la mise en équivalence, la participation est d’abord inscrite au bilan à son **coût**. Lors des périodes suivantes, sa valeur comptable est ajustée pour refléter la quote-part de l’investisseur dans les bénéfices ou pertes de l’entité détenue, quote-part qui est présentée dans son compte de résultat.

**Exemple.** A achète 30 % de B pour 100 \$. Au bout d’un an, B dégage un résultat net de 80 \$. A comptabilise 24 \$ (= 30 % × 80) de quote-part de résultat au compte de résultat (en RE) et porte la participation au bilan de 100 à 124. Les dividendes ou autres distributions reçus de l’entité détenue sont traités comme un remboursement de capital : ils réduisent la valeur comptable de la participation et ne sont pas présentés dans le résultat de l’investisseur. Si B distribue ensuite 20 \$, la quote-part de A est de 6 \$ : trésorerie +6, participation 124 → 118 (−6) ; RE et compte de résultat inchangés — le dividende n’est pas un produit selon la mise en équivalence.

<iframe
  class="fx-concept-chart fsa-equity-ex-chart"
  src="/charts/equity-method-basic-example.html"
  title="Mise en équivalence : quote-part de résultat puis dividende, participation à 118"
  loading="lazy"
></iframe>


> [!note]
>
> Avec la **méthode du coût**, le dividende est comptabilisé en trésorerie +6 ; RE +6. La méthode du coût ne comptabilise que le revenu effectif. Sous cet angle, elle est donc moins trompeuse que la mise en équivalence.

> [!note]
>
> Dans les cas extrêmes, si l’entité détenue perd plus que la valeur de ses capitaux propres, la déduction maximale sur la participation est sa valeur comptable. L’excédent est suivi en interne pour être imputé sur les bénéfices futurs éventuels.



#### Excédent du prix d’acquisition {#excess-purchase-price}

Dans toutes les normes comptables, le prix d’acquisition (PP) d’une participation à long terme doit être comparé à la juste valeur et à la valeur comptable de l’**actif net identifiable**. En général, $PP\ge FV\times share\% > BV\times share\%$. L’excédent $PV-FV\%$ est le **goodwill**, et $PV-BV\%$ est l’**excédent du prix d’acquisition (Excess PP)**. $FV\%-BV\%$ est la réévaluation à la juste valeur.



<iframe
  class="fx-concept-chart"
  src="/charts/excess-purchase-price.html"
  title="Excédent du prix d’acquisition : réévaluations à la juste valeur plus goodwill"
  loading="lazy"
></iframe>


##### Goodwill {#good-will}

> [!note]
>
> Dans certains cas, comme un krach, on peut avoir $PP<FV\%$. Un goodwill négatif est alors comptabilisé en produits hors exploitation.

Le goodwill n’est pas amorti, car il n’a pas de durée de vie déterminable (ce n’est pas un actif identifiable). Il doit faire l’objet de tests de dépréciation réguliers. Le goodwill est inclus dans la valeur comptable de la participation.


**Exemple.** BY paie 100 000 € pour 30 % des actions de SY. À la date d’acquisition, les actifs et passifs comptabilisés de SY sont :

| SY (€) | Valeur comptable | Juste valeur | FV − BV |
|---|---:|---:|---:|
| Actifs courants | 10,000 | 10,000 | 0 |
| Installations et équipements | 190,000 | 220,000 | 30,000 |
| Terrains | 120,000 | 140,000 | 20,000 |
| Total actif | 320,000 | 370,000 | 50,000 |
| Passifs | 100,000 | 100,000 | 0 |
| **Actif net** | **220,000** | **270,000** | **50,000** |

À la date d’acquisition, BY inscrit la participation sur une seule ligne d’actif non courant : participation dans SY, 100 000 €.

| Affectation du prix payé par BY | € | Couche du graphique |
|---|---:|---|
| Prix d’acquisition | 100,000 | colonne entière |
| − 30 % × VC 220 000 | 66,000 | quote-part de valeur comptable |
| **Excédent du prix d’acquisition** | **34,000** | deux couches supérieures |
| Installations : 30 % × 30 000 | 9,000 | réévaluation à la juste valeur |
| Terrains : 30 % × 20 000 | 6,000 | réévaluation à la juste valeur |
| **Goodwill (résiduel)** | **19,000** | goodwill |

$$
\underbrace{66{,}000}_{BV\times30\%}+\underbrace{15{,}000}_{\text{FV appreciation}}=\underbrace{81{,}000}_{FV\times30\%},\qquad 81{,}000+\underbrace{19{,}000}_{\text{goodwill}}=100{,}000=PP
$$

Ensuite, la réévaluation de 9 000 des installations est amortie sur leur durée d’utilité, ce qui réduit la quote-part de résultat de BY. La réévaluation de 6 000 des terrains n’est pas amortie, et le goodwill de 19 000 n’est pas amorti mais testé pour dépréciation.

##### Amortissement de la réévaluation à la juste valeur {#amortization-of-fair-value-appreciation}

La réévaluation à la juste valeur est amortie selon la même méthode que l’actif sous-jacent.

**Exemple** Supposons que BY achète 30 % de SY. Parmi les actifs de SY, les immobilisations corporelles ont une VC de 110 et une JV de 120 à l’achat. Une année, SY dégage un résultat net de 1000. SY amortit ces immobilisations en linéaire ; le −11 est inclus dans le calcul du résultat net. Pour BY, le revenu de participation constaté est de 300 au compte de résultat ; RE et la participation augmentent. Mais comme la JV dépassait la VC de 10 à l’achat, la **réévaluation à la juste valeur** doit aussi être amortie, soit −1. Ce montant est supplémentaire : dans la comptabilité de BY, le résultat net de SY devient 999. Toutes les autres valeurs comptables changent en conséquence.

<iframe
  class="fx-concept-chart"
  src="/charts/fv-appreciation-amortization.html"
  title="Mise en équivalence : amortir la réévaluation à la juste valeur, de 300 à 299.7"
  loading="lazy"
></iframe>

**Étape par étape.**

1. Dans ses propres comptes, SY amortit les immobilisations sur leur valeur comptable : $110/10 = 11$ par an (soit une durée de 10 ans en linéaire). Ce $-11$ est déjà inclus dans le résultat net de 1 000 de SY.
2. BY a payé les immobilisations à leur juste valeur ; de son point de vue, l’actif doit donc être amorti sur 120 : $120/10 = 12$ par an. L’écart de $(120-110)/10 = 1$ par an est l’amortissement de la réévaluation.
3. On retraite le résultat net de SY sur une base de juste valeur, puis on prend la quote-part de BY :

$$
\text{Equity income} = 30\%\times(1{,}000-1) = 300 - 0.3 = 299.7
$$

4. BY comptabilise une quote-part de résultat de $+299.7$ au compte de résultat, RE $+299.7$ et participation dans SY $+299.7$ (au lieu de $+300$).

**Périodes suivantes.** Le $-0.3$ se répète chaque année pendant 10 ans, jusqu’à ce que la quote-part de BY dans la réévaluation, $30\%\times10 = 3$, soit entièrement amortie ($0.3\times10 = 3$). Ensuite, BY reprend simplement $30\%$ du résultat publié par SY. Si SY vend l’immobilisation plus tôt, la réévaluation non amortie est sortie cette année-là. Une réévaluation de terrain ne serait jamais amortie, et le goodwill n’est que testé pour dépréciation.



> [!note]
>
> L’essentiel est que les capitaux propres sont évalués à la juste valeur du côté de l’acheteur. Cela ne se limite pas à l’amortissement : le même principe vaut pour le COGS.


**Exemple (réévaluations de plusieurs actifs).** Le 10 janvier A1, BY achète 30 % de SY pour 3 300 et envoie un représentant participer aux décisions financières et opérationnelles de SY ; BY a donc une influence notable et applique la mise en équivalence. À la date d’acquisition, la JV de l’actif net identifiable de SY est de 9 000. Tous les autres actifs et passifs ont JV = VC, sauf :

| Poste de SY | Coût | Amort. cumulé | VC | JV | Réévaluation (FV − BV) | Durée totale |
|---|---:|---:|---:|---:|---:|---:|
| Stocks | – | – | 750 | 1,050 | 300 | – |
| Immobilisations corporelles | 1,800 | 360 | 1,440 | 2,400 | 960 | 20 ans |
| Incorporel | 1,050 | 210 | 840 | 1,200 | 360 | 10 ans |
| **Total** | | | | | **1,620** | |

Hypothèses : les stocks sont consommés à 80 % en A1 et 20 % en A2. Le résultat net de SY est de 900 en A1 et 965 en A2. Pas de dividendes. Par simplicité, A1 est traité comme une année pleine, même si l’achat date du 10 janvier.

Essayez chaque question, puis survolez (ou touchez) la réponse floutée.

**Q1.** Quel goodwill la participation de BY contient-elle, et comment est-il traité ensuite ?

<div class="reveal" tabindex="0">

$$
\text{Goodwill} = 3{,}300 - 30\%\times9{,}000 = 3{,}300-2{,}700 = 600
$$

Le goodwill n’est pas amorti. Il reste dans la ligne de participation et fait l’objet d’un test de dépréciation.

</div>

**Q2.** Au niveau de SY (100 %), quelle charge supplémentaire chaque réévaluation crée-t-elle chaque année ? Trouvez d’abord les durées résiduelles.

<div class="reveal" tabindex="0">

- Stocks : la réévaluation de 300 devient du COGS supplémentaire à mesure que les biens sont vendus : $80\%\times300=240$ en A1 et $20\%\times300=60$ en A2.
- Immobilisations corporelles : l’amortissement est de $1{,}800/20=90$ par an ; $360/90=4$ ans sont écoulés et il en reste $16$. L’amortissement supplémentaire est de $960/16=60$ par an pendant 16 ans.
- Incorporel : l’amortissement est de $1{,}050/10=105$ par an ; $210/105=2$ ans sont écoulés et il en reste $8$. L’amortissement supplémentaire est de $360/8=45$ par an pendant 8 ans.

</div>

**Q3.** Quels sont le résultat net ajusté de SY et la quote-part de résultat de BY en A1 et A2 ?

<div class="reveal" tabindex="0">

| | A1 | A2 |
|---|---:|---:|
| Résultat net publié de SY | 900 | 965 |
| − Réévaluation des stocks (COGS supplémentaire) | −240 | −60 |
| − Amortissement supplémentaire des immobilisations | −60 | −60 |
| − Amortissement supplémentaire de l’incorporel | −45 | −45 |
| **Résultat net ajusté** | **555** | **800** |
| **Quote-part de résultat de BY (× 30 %)** | **166.5** | **240** |

</div>

**Q4.** Quelle est la quote-part de 30 % de BY dans chaque réévaluation (et le goodwill) encore incluse dans la participation fin A1 et fin A2 ?

<div class="reveal" tabindex="0">

| Quote-part de 30 % de BY | Acquisition | A1 | A2 | Évolution après A2 |
|---|---:|---:|---:|---|
| Stocks (300 × 30 % = 90) | 90 | 18 | 0 | épuisée : 72 en A1, 18 en A2 |
| Immobilisations (960 × 30 % = 288) | 288 | 270 | 252 | −18 par an jusqu’en A16 |
| Incorporel (360 × 30 % = 108) | 108 | 94.5 | 81 | −13.5 par an jusqu’en A8 |
| Goodwill | 600 | 600 | 600 | non amorti ; test de dépréciation |
| **Total au-delà de 30 % × VC** | **1,086** | **982.5** | **933** | |

Vérification : $30\%\times(9{,}000-1{,}620)=2{,}214$ et $3{,}300-2{,}214=1{,}086$ = réévaluations $486$ + goodwill $600$. En A1, $270-103.5=166.5$ (avec $103.5=72+18+13.5$). En A2, $289.5-49.5=240$.

</div>

**Q5.** Quelle est la valeur comptable de la participation dans SY fin A1 et fin A2 ?

<div class="reveal" tabindex="0">

$$
3{,}300 + 166.5 = 3{,}466.5 \quad\text{(end Y1)},\qquad 3{,}466.5 + 240 = 3{,}706.5 \quad\text{(end Y2)}
$$

</div>

**Q6.** Sur les durées résiduelles, quel amortissement supplémentaire total BY comptabilise-t-il pour chaque réévaluation ?

<div class="reveal" tabindex="0">

Immobilisations : $18\times16 = 288$. Incorporel : $13.5\times8 = 108$. Stocks : $72+18 = 90$, épuisés en deux ans. Goodwill : aucun (test de dépréciation uniquement).

</div>

**À retenir :** BY mesure le résultat de SY sur une base de juste valeur. Chaque réévaluation sort de la quote-part de résultat de BY au même rythme que l’actif sous-jacent sort des comptes de SY (COGS pour les stocks, amortissement pour les actifs à long terme), tandis que le goodwill reste en place jusqu’à sa dépréciation.

#### Transactions avec les entreprises associées {#transactions-with-associates}

L’idée clé est d’éviter de gonfler les bénéfices par des transactions ascendantes ou descendantes.

<iframe
  class="fx-concept-chart"
  src="/charts/upstream-downstream-profit.html"
  title="Ascendant ou descendant : éliminer la quote-part de 30 % de A dans le profit latent"
  loading="lazy"
></iframe>

*Illustration : quel que soit le sens des biens, A élimine $30\%\times40=12$ de profit latent et ne le comptabilise qu’à la vente à un tiers.*

Les normes comptables précisent donc que le gain sur ventes internes est latent. S’il s’agit de revendre, il est réalisé lors de la vente à un tiers indépendant ; s’il s’agit d’utiliser, il est réalisé au fil de l’amortissement. Notez qu’une perte latente est souvent comptabilisée directement comme réalisée (la norme dit que cela dépend du cas : si elle est due à un problème de qualité, la perte est comptabilisée).

Comme dans les sections précédentes, la partie latente du résultat net doit être ajustée. Le profit est rajouté lorsqu’il est réalisé.

##### Transactions ascendantes {#upstream}

Le profit figure au compte de résultat de l’entreprise associée. Le compte de résultat de l’investisseur ajuste le résultat net comme indiqué ci-dessus.


> [!note]
>
> **Latent ou réalisé.** Le profit intragroupe est *latent* tant que les biens restent au sein du couple investisseur–entreprise associée : aucun tiers ne les a payés. Il devient *réalisé* lorsque les biens sont vendus à un tiers indépendant ou, pour les actifs utilisés dans l’exploitation, au fil de leur amortissement.

**Éliminez votre quote-part.** Seule la quote-part de l’investisseur dans le profit latent est éliminée :

$$
\text{Elimination} = \text{investor }\%\times\text{unrealized profit}
$$

Le manuel ajuste le résultat net de l’entreprise associée de la totalité du profit latent, puis multiplie par le pourcentage de détention. Le résultat est le même : $\%\times(NI-\text{unrealized}) = \%\times NI - \%\times\text{unrealized}$.

- **Ascendante** (entreprise associée → investisseur) : le profit est dans le résultat net de l’entreprise associée ; la quote-part de résultat de l’investisseur est donc réduite.
- **Descendante** (investisseur → entreprise associée) : le profit est dans les ventes de l’investisseur, et le même $\%\times$ profit latent est éliminé (via la quote-part de résultat / le compte de participation). Le traitement est symétrique.
- **Reprise.** Le montant différé est comptabilisé au prorata des ventes de l’acheteur à l’extérieur : si une fraction $s$ est vendue une année ultérieure, on rajoute $s\times$ profit latent (fois le pourcentage au niveau de l’investisseur) cette année-là.

**Exemple (ascendant).** Montants en dizaines de milliers. En janvier 2017, BY acquiert 20 % des actions avec droit de vote de SY et a une influence notable. À l’acquisition, la JV de l’actif net de SY est égale à sa VC. En août 2017, SY vend à BY pour 1 000 des biens qui lui ont coûté 600, et BY les garde en stock. Au 31/12/2017, BY n’en a vendu aucun à l’extérieur. En 2018, BY vend 60 % des biens à un tiers indépendant. Le résultat net de SY est de 3 200 en 2017 et de 4 000 en 2018.

| | 2017 | 2018 |
|---|---:|---:|
| Résultat net publié de SY | 3,200 | 4,000 |
| Ajustement du profit latent | $-(1{,}000-600)\times100\% = -400$ | $+(1{,}000-600)\times60\% = +240$ |
| **Résultat net ajusté** | **2,800** | **4,240** |
| **Revenu de participation de BY (× 20 %)** | **560** | **848** |

En l’absence de dividendes, le compte de participation évolue ainsi : $\text{Cost} \to \text{Cost}+560 \to \text{Cost}+560+848 = \text{Cost}+1{,}408$.

Vérification : $400\times20\%=80$ est différé en 2017. Sur ce montant, $80\times60\%=48$ est repris en 2018, et $80-48=32$ reste latent (les 40 % de biens encore détenus par BY).

**Exemple (ascendant, actif utilisé par l’acheteur).** Montants en dizaines de milliers. Le 31/12/2019, DJ acquiert 20 % des actions avec droit de vote d’EJ et a une influence notable. À l’acquisition, la JV de l’actif net d’EJ est égale à sa VC. Le même jour, EJ vend à DJ pour 900 des biens qui lui ont coûté 600. DJ les utilise comme immobilisation : durée de 10 ans, linéaire, valeur résiduelle 0. Au 31/12/2020, DJ n’a pas vendu l’actif à l’extérieur. Le résultat net d’EJ pour 2020 est de 1 600.

Comme DJ utilise l’actif au lieu de le revendre, le profit est réalisé par l’amortissement. DJ amortit $900/10=90$ par an, contre $600/10=60$ sur le coût d’origine ; l’écart de $30$ par an est la part du profit réalisée chaque année.

1. Profit intragroupe : $900-600=300$.
2. Réalisé chaque année : $300/10=30$.
3. Latent au 31/12/2020 : $300-30=270$.

| 2020 | Montant |
|---|---:|
| Résultat net publié d’EJ | 1,600 |
| Élimination de tout le profit intragroupe | −300 |
| Reprise de la part réalisée par l’amortissement | +30 |
| **Résultat net ajusté** | **1,330** |
| **Revenu de participation de DJ (× 20 %)** | **266** |

Vérification : $20\%\times300=60$ est différé. Sur ce montant, $6$ par an est repris par l’amortissement (2020–2029), donc $60-6=54$ reste différé fin 2020.

*Au-delà de la diapositive :* en 2021–2029, si l’actif n’est pas vendu, résultat net ajusté $=$ résultat net publié $+30$, donc DJ comptabilise $20\%\times NI+6$ chaque année.

##### Transactions descendantes {#downstream-transactions}

Selon les normes comptables, une transaction descendante est traitée comme une transaction ascendante.

### Autres questions {#other-issues}

Deux points complètent la mise en équivalence : ce qui se passe quand la participation perd de la valeur, et la possibilité de renoncer à la mise en équivalence pour comptabiliser la participation à la juste valeur.

#### Dépréciation {#impairment}

Une participation mise en équivalence est comptabilisée au coût, plus la quote-part de résultat de l’investisseur, moins les dividendes. Rien dans cette formule ne regarde le marché ; la valeur comptable peut donc dériver bien au-dessus de la valeur réelle de la participation. Les IFRS comme les US GAAP exigent donc un **examen périodique de dépréciation**.

> [!note]
>
> **Rappel du niveau I** (actifs à long terme) : en IFRS, un actif est déprécié lorsque sa valeur comptable dépasse sa **valeur recouvrable**, la plus élevée de
>
> - la **juste valeur diminuée des coûts de la vente**, et
> - la **valeur d’utilité** (la valeur actuelle des flux que l’actif devrait générer).
>
> La valeur nette de réalisation (NRV) est la version « stocks » de la même idée ; pour les participations, la référence est la valeur recouvrable.

**Quand tester (le déclencheur).** Les deux normes fixent des seuils différents :

- **IFRS :** il doit exister une **indication objective** d’un ou plusieurs **événements générateurs de pertes**, comme des difficultés financières de l’entité détenue, une rupture de contrat ou une faillite probable, et l’événement doit affecter les **flux futurs** de la participation d’une manière **estimable de façon fiable**. Une baisse de juste valeur seule ne suffit pas automatiquement.
- **US GAAP :** la **juste valeur** de la participation **passe sous sa valeur comptable** et la baisse est jugée **autre que temporaire** (en pratique, durable).

**Ce qui est testé.** La **valeur comptable totale** de la participation est testée comme un seul actif. Le goodwill est inclus dans cette valeur (voir *Goodwill* ci-dessus) et n’est jamais comptabilisé séparément ; il **n’est donc pas testé isolément**. Sa dépréciation fait simplement partie de la perte de valeur unique de la participation.

**Comment la comptabiliser.** La perte est égale à la valeur comptable moins la valeur recouvrable (IFRS) ou moins la juste valeur (US GAAP) :

$$
\text{Impairment loss} = \text{Carrying amount} - \text{Recoverable amount (IFRS) or Fair value (US GAAP)}
$$

- **Compte de résultat :** la perte est comptabilisée en résultat, elle réduit donc RE.
- **Bilan :** la participation est dépréciée, soit **directement**, soit via un **compte de provision** (compte correcteur).
- Les quotes-parts ultérieures partent de la **nouvelle valeur comptable, plus basse**.

**Peut-on reprendre la dépréciation ?**

- **US GAAP :** **non.** La reprise est interdite, même si la juste valeur remonte ensuite.
- **IFRS :** **oui**, si la valeur recouvrable augmente. La reprise est plafonnée à la valeur comptable qu’aurait eue la participation sans dépréciation. Comme le goodwill inclus n’est pas un actif distinct, le plafond s’applique à la participation dans son ensemble.

**Exemple (dépréciation, illustratif).** Reprenons l’exemple BY/SY à plusieurs actifs : fin A2, la participation de BY dans SY vaut $3{,}706.5$ en comptabilité. Début A3, SY perd son principal client. BY estime la juste valeur diminuée des coûts de la vente de sa participation à $3{,}150$ et sa valeur d’utilité à $3{,}250$.

1. **IFRS.** La perte d’un client majeur est une indication objective d’un événement générateur de pertes. Valeur recouvrable $=\max(3{,}150,\ 3{,}250)=3{,}250$ ; la dépréciation est donc de $3{,}706.5-3{,}250=456.5$.
2. **Écritures.** Perte de valeur au compte de résultat $-456.5$ (RE $-456.5$) ; participation dans SY $-456.5$, à $3{,}250$.
3. **Ensuite.** La quote-part de résultat s’ajoute à la base de $3{,}250$. Si la valeur de la participation remonte en A4, les US GAAP maintiennent la dépréciation, tandis que les IFRS peuvent la reprendre, mais jamais au-delà de la valeur comptable qu’aurait eue la participation sans dépréciation.

#### Option juste valeur {#fair-value-option}

Ici, *option* signifie un **choix comptable**, et non un contrat dérivé. Au lieu d’appliquer la mise en équivalence, l’investisseur peut évaluer une participation dans une entreprise associée à la **juste valeur par le résultat (FVPL)**, comme un titre de transaction.

**Qui peut la choisir.**

- **US GAAP :** **toutes les entités**.
- **IFRS :** réservée aux **sociétés de capital-risque, fonds communs de placement, unit trusts et entités similaires**, y compris les fonds d’assurance en unités de compte. Ce sont des investisseurs qui gèrent un portefeuille sur la base de la juste valeur.

**Quand.** Le choix se fait **lors de la comptabilisation initiale** ($t=0$) et est **irrévocable** : l’investisseur ne peut pas changer de méthode plus tard pour piloter son résultat.

**Ce qui change une fois l’option retenue.**

- **Bilan :** la participation est inscrite à la **juste valeur** à chaque période. Elle **ne reflète plus la quote-part de l’investisseur** dans les capitaux propres de l’entité détenue.
- **Compte de résultat :** le revenu est le **gain ou la perte latent(e) de juste valeur** plus les **dividendes et intérêts reçus**. Les dividendes redeviennent un produit, comme dans la méthode du coût, au lieu d’un remboursement de capital.
- **Aucun mécanisme de mise en équivalence :** pas de quote-part du résultat net de l’entité détenue ni d’amortissement de l’excédent du prix d’acquisition (amortissement des réévaluations, voir *Amortissement de la réévaluation à la juste valeur* ci-dessus). Pas non plus d’élimination des profits intragroupe latents ni de test de dépréciation séparé, puisque chaque variation de valeur passe déjà par le résultat.

| | Mise en équivalence | Option juste valeur |
|---|---|---|
| Valeur comptable au bilan | Coût + quote-part de RN − dividendes | Juste valeur |
| Revenu | Quote-part du RN de l’entité détenue, après amortissement des réévaluations et éliminations intragroupe | Variation de juste valeur + dividendes et intérêts |
| Dividendes reçus | Réduisent la participation (remboursement de capital) | Produit |
| Amortissement de l’excédent du prix d’acquisition | Oui | Non |
| Profit intragroupe latent | Éliminé | Non ajusté |
| Test de dépréciation | Oui | Inutile |

**Exemple (mise en équivalence ou option juste valeur).** Reprenons l’exemple de base des *Principes de base* : la société A achète 30 % de B pour $100$, B dégage un résultat net de $80$ et verse $20$ de dividendes. Supposons que la participation vaille $112$ en fin d’année.

| | Mise en équivalence | Option juste valeur |
|---|---:|---:|
| Participation en fin d’année | $100+24-6=118$ | $112$ |
| Revenu de l’année | $30\%\times80=24$ | dividende $6$ + gain de JV $(112-100)=12$, total $18$ |
| Trésorerie reçue | $6$ | $6$ |

Les deux méthodes donnent un revenu différent ($24$ contre $18$) et une valeur comptable différente ($118$ contre $112$). La mise en équivalence suit les **bénéfices** de l’entité détenue ; l’option juste valeur suit le **prix de marché** de la participation.

**Vérification rapide.** Essayez chaque question, puis survolez (ou touchez) la réponse floutée.

**Q1.** Une société qui publie en US GAAP a déprécié l’an dernier une participation mise en équivalence. Cette année, le cours de l’entité détenue s’est entièrement redressé. Que devient la dépréciation ?

<div class="reveal" tabindex="0">

Rien. Les US GAAP interdisent de reprendre une perte de valeur sur une participation mise en équivalence ; la valeur comptable réduite est maintenue. En IFRS, une reprise serait permise jusqu’à la valeur comptable qu’aurait eue la participation sans dépréciation.

</div>

**Q2.** Une société industrielle qui publie en IFRS détient 25 % d’un fournisseur. Peut-elle choisir l’option juste valeur deux ans après l’achat, parce que le cours du fournisseur a monté ?

<div class="reveal" tabindex="0">

Non, pour deux raisons. En IFRS, l’option est réservée aux sociétés de capital-risque, fonds communs de placement, unit trusts et entités similaires, ce qu’une société industrielle n’est pas. Et dans les deux référentiels, le choix doit être fait lors de la comptabilisation initiale et ne peut pas être modifié ensuite.

</div>



# Regroupements d’entreprises

## Notions de base {#basic-concepts}

### Contrôle {#controls}

C’est le **contrôle** qui fait d’un investissement un regroupement d’entreprises : l’investisseur (la **société mère**) consolide l’entité détenue (la **filiale**) ligne à ligne au lieu de la présenter comme une seule participation. Les deux normes définissent le contrôle différemment.

**IFRS : un seul modèle pour toutes les entités.** Le contrôle est le pouvoir de diriger les politiques financières et opérationnelles d’une entité afin de tirer avantage de ses activités. IFRS 10 le teste par trois éléments, qui doivent tous être présents :

1. Le **pouvoir** sur les activités pertinentes de l’entité, celles qui déterminent ses rendements ;
2. L’**exposition, ou les droits, à des rendements variables** du fait de cette implication ;
3. La **capacité d’utiliser ce pouvoir** pour influer sur ces rendements.

**US GAAP : deux modèles.**

- **Modèle des droits de vote :** le contrôle est une **participation financière de contrôle**, normalement la détention de **plus de 50 % des actions avec droit de vote**.
- **Modèle des droits variables :** pour une **entité à droits variables (VIE)**, les actions avec droit de vote ne décident pas du contrôle. Une VIE est une entité dont les capitaux propres à risque sont trop faibles pour la financer, ou dont les actionnaires n’ont pas de véritable pouvoir de décision. C’est alors le **principal bénéficiaire** qui consolide : la partie qui dirige les activités ayant le plus d’effet sur la performance de la VIE **et** qui absorbe ses pertes ou reçoit ses avantages.

**Investisseurs en actions et investisseurs en dette.**

- Les **investisseurs en actions** obtiennent normalement le contrôle par les **droits de vote**, en général une majorité des voix. En IFRS, une participation plus faible peut quand même donner le contrôle : par exemple, des accords avec d’autres actionnaires ou des droits de vote potentiels exerçables (options, convertibles) peuvent conférer le pouvoir à l’investisseur.
- Les **investisseurs en dette** n’ont pas de droit de vote ; un prêteur **ne contrôle** donc normalement **pas** l’emprunteur. Les covenants et les sûretés sont des **droits protecteurs** : ils protègent la créance du prêteur mais ne donnent aucun pouvoir sur l’activité.
- **L’exception est l’entité structurée ou l’entité ad hoc (SPE).** Ici, ce sont les contrats, et non les actions, qui décident qui a le pouvoir et qui porte le risque. Si un prêteur, un garant ou un promoteur dirige les activités clés de l’entité et porte l’essentiel de ses rendements variables, cette partie a le contrôle même sans détenir une seule action avec droit de vote. En US GAAP, c’est le **principal bénéficiaire** d’une VIE ; en IFRS, elle satisfait au même test à trois éléments que n’importe quel actionnaire.

> [!note]
>
> *Exemple.* Une entreprise transfère ses créances à une SPE. Des investisseurs extérieurs détiennent une fine tranche de capitaux propres, et la SPE est surtout financée par une dette que l’entreprise garantit, tandis que l’entreprise continue de recouvrer les créances. Les actionnaires ne contrôlent pas la SPE. L’entreprise dirige son activité principale et supporte ses pertes via la garantie ; elle consolide donc la SPE, et la dette revient à son bilan.

### Regroupements d’entreprises {#business-combinations-1}

Un **regroupement d’entreprises** place deux activités distinctes sous un même contrôle : deux entités deviennent une seule unité économique. Ce qui change d’une forme à l’autre, c’est quelles entités juridiques subsistent. Les US GAAP distinguent trois formes ; les IFRS ne les distinguent pas, et toutes trois sont comptabilisées de la même façon (la méthode de l’acquisition ci-dessous).

| Forme | Notation | Ce qui se passe | Entités après l’opération |
|---|---|---|---|
| **Fusion-absorption** | $A + B = A$ | A reprend les actifs et passifs de B ; B disparaît | A seule |
| **Acquisition** | $A + B = (A + B)$ | A achète une participation de contrôle dans B ; les deux gardent leur personnalité juridique | A (mère) et B (filiale) |
| **Fusion-création** | $A + B = C$ | Une nouvelle entité C reprend les deux ; A et B disparaissent | C seule |

Un quatrième cas du programme est l’**entité ad hoc / entité à droits variables**. Comme vu sous *Contrôle* ci-dessus, le promoteur qui la contrôle la consolide, même sans majorité des voix.

> [!note]
>
> **Vérifiez l’existence d’un contrôleur commun avant l’opération.** Si A et B sont déjà contrôlées par la même partie, par exemple deux filiales d’une même mère, le regroupement ne change pas qui contrôle l’activité. Il sort du champ de la méthode de l’acquisition et se comptabilise autrement (voir ci-dessous).

**Q : Dans les trois formes, qui établit des états individuels et des états consolidés ? Et si A et B ont un contrôleur commun ?**

| Forme | États individuels (séparés) | États consolidés |
|---|---|---|
| Fusion-absorption | A seule ; les actifs et passifs de B sont désormais directement dans les comptes de A | Inutiles : il n’y a qu’une entité |
| Acquisition | A **et** B continuent chacune d’établir les leurs | **A, en tant que mère**, consolide B ligne à ligne |
| Fusion-création | C seule | Inutiles : C est une seule entité nouvelle |

Seule la forme **acquisition** laisse côte à côte une mère et une filiale ; c’est donc elle qui exige des **états consolidés**. La fusion-absorption et la fusion-création ne laissent qu’une entité juridique, dont les comptes contiennent déjà tout.

**Contrôle commun.** Quand la même partie contrôle A et B avant et après l’opération, rien n’est vraiment acheté à un tiers ; il n’y a donc pas de nouvelle base de juste valeur :

- les actifs et passifs sont repris à leur **valeur comptable existante**, sans réévaluation à la juste valeur ;
- **aucun nouveau goodwill** n’apparaît ; l’écart entre le prix payé et la valeur comptable va en **capitaux propres** ;
- les US GAAP présentent les entités regroupées **comme si elles l’avaient toujours été**. Les IFRS n’ont pas de norme spécifique, et en pratique cette approche à la valeur comptable (« du prédécesseur ») est courante.

### Méthode de l’acquisition {#acquisition-method}

**De la mise en commun à l’achat, puis à l’acquisition.** Les regroupements étaient autrefois comptabilisés de deux façons :

- **Mise en commun d’intérêts** (IFRS : *uniting of interests*) : traitée comme une fusion entre égaux. Les **valeurs comptables** des deux sociétés étaient simplement additionnées, **sans réévaluation ni goodwill**. Les périodes antérieures étaient retraitées comme si les sociétés avaient toujours été regroupées.
- **Méthode de l’achat :** traitée comme l’achat d’une société par l’autre, la cible étant inscrite au prix payé.

La mise en commun flattait les résultats ultérieurs : sans réévaluations ni goodwill, il y avait moins d’amortissements. Elle rendait aussi difficile la comparaison d’opérations par ailleurs similaires. Les US GAAP l’ont abolie en 2001 (SFAS 141) et les IFRS en 2004 (IFRS 3). La méthode de l’achat a ensuite été affinée pour devenir l’actuelle **méthode de l’acquisition** (SFAS 141R et IFRS 3 révisée, en vigueur en 2009). **La mise en commun ne subsiste aujourd’hui, en substance, que pour les regroupements sous contrôle commun**, comme décrit ci-dessus.

**La méthode de l’acquisition en quatre étapes.**

1. **Identifier l’acquéreur**, l’entité qui obtient le contrôle. C’est généralement celle qui paie en trésorerie ou émet des actions, ou la plus grande.
2. **Déterminer la date d’acquisition**, le jour où le contrôle est transféré. Les justes valeurs sont évaluées à cette date.
3. **Comptabiliser et évaluer les actifs et passifs identifiables à la juste valeur.** Y compris des éléments que la cible n’avait jamais comptabilisés, comme des marques, fichiers clients et brevets développés en interne, ainsi que les passifs éventuels. La contrepartie éventuelle (complément de prix) est aussi évaluée à la juste valeur.
4. **Comptabiliser le goodwill, ou un profit sur acquisition à des conditions avantageuses.**

$$
\text{Goodwill} = \text{Consideration transferred} + \text{Noncontrolling interest} - \text{Fair value of identifiable net assets}
$$

- Le **goodwill** n’est pas amorti ; il est testé pour dépréciation.
- Si le résultat est négatif, c’est une **acquisition à des conditions avantageuses** : le profit va directement en **résultat** après revérification des justes valeurs.
- Les **coûts liés à l’acquisition** (conseils, avocats) sont **passés en charges**, et non ajoutés au prix.
- En deçà de 100 % de détention, les participations ne donnant pas le contrôle et le choix entre goodwill complet et partiel entrent en jeu. Ils sont traités dans *Processus de consolidation*.

**Exemple (mise en commun ou acquisition, illustratif).** A émet des actions d’une valeur de 1 000 pour 100 % de B. La mise en commun ne s’appliquait qu’aux échanges d’actions comme celui-ci. L’actif net identifiable de B a une valeur comptable de 600 et une juste valeur de 800.

| | Mise en commun d’intérêts (ancienne) | Méthode de l’acquisition (actuelle) |
|---|---:|---:|
| Actif net de B inscrit à | 600 (valeur comptable) | 800 (juste valeur) |
| Goodwill | aucun | $1{,}000 - 800 = 200$ |
| Amortissement ultérieur de la réévaluation | aucun | la réévaluation de 200 de la valeur comptable à la juste valeur |
| Comparable à l’achat des actifs un par un ? | non | oui |

Avec la méthode de l’acquisition, le bilan regroupé montre ce que A a réellement payé : 800 d’actif net identifiable plus 200 de goodwill, soit 1 000 au total. La mise en commun aurait inscrit à la fois l’actif net de B et les nouvelles actions de A à 600 ; les 400 restants du prix ne seraient jamais apparus.

## Processus de consolidation {#consolidation-process}

Une fois que A contrôle B, A garde dans ses propres comptes une seule ligne, *Participation dans B*. Les **états consolidés** du groupe, eux, présentent B ligne à ligne, comme si A détenait directement les actifs de B et devait directement ses passifs. La consolidation consiste à remplacer cette ligne de participation par tout ce qu’elle recouvre.

**La vue d’ensemble.**

1. **Retraiter B à la juste valeur.** Réévaluer (à la hausse ou à la baisse) les actifs et passifs identifiables de B à leur juste valeur à la date d’acquisition.
2. **Additionner A et B**, ligne à ligne : A à la **valeur comptable** (le bilan propre de la mère n’est jamais réévalué), B à la **juste valeur**.
3. **Éliminer la participation de A contre les capitaux propres de B.** La *Participation dans B* de A et les capitaux propres (à la juste valeur) de B sont deux vues de la même chose ; les deux sont donc supprimés. Ce dont la participation dépasse l’actif net de B est le **goodwill** ; si A détient moins de 100 %, les capitaux propres de B que A n’a pas achetés deviennent les **participations ne donnant pas le contrôle (NCI)**.

$$
\underbrace{\text{Investment in B}}_{\text{price paid}} - \underbrace{\text{FV of B's identifiable net assets}}_{\text{B's equity at FV}} = \text{Goodwill}
$$

Les résultats non distribués et le capital social de B antérieurs à l’acquisition **n’apparaissent jamais** dans les capitaux propres consolidés. Ils ont été achetés, non gagnés par le groupe.

Tous les cas ci-dessous utilisent les deux mêmes sociétés. **Avant l’opération :**

| | A (valeur comptable) | B (valeur comptable) | B (juste valeur) |
|---|---:|---:|---:|
| Trésorerie | 1,500 | – | – |
| Autres actifs | 3,000 | 1,000 | 1,200 |
| **Total actif** | **4,500** | **1,000** | **1,200** |
| Passifs | 1,500 | 400 | 400 |
| Capitaux propres | 3,000 | 600 | 800 |

L’actif net identifiable de B est de 600 en valeur comptable et de 800 en juste valeur : une **réévaluation de 200** sur les autres actifs de B.

### Cas 1 : achat de 100 % en trésorerie {#case-1-buy-100-for-cash}

A paie **1 000 en trésorerie** pour la totalité de B.

**Dans les comptes de A.** Un actif est échangé contre un autre : trésorerie −1 000, *Participation dans B* +1 000. Les passifs et capitaux propres de A ne changent pas. Rien ne change non plus dans les comptes de B ; B a simplement un nouveau propriétaire.

**Feuille de consolidation.**

| | A | B à la JV | Élimination | Consolidé |
|---|---:|---:|---:|---:|
| Trésorerie | 500 | – | | 500 |
| Autres actifs | 3,000 | 1,200 | | 4,200 |
| Participation dans B | 1,000 | – | −1,000 | 0 |
| Goodwill | – | – | +200 | 200 |
| **Total actif** | **4,500** | **1,200** | | **4,900** |
| Passifs | 1,500 | 400 | | 1,900 |
| Capitaux propres | 3,000 | 800 | −800 | 3,000 |
| **Total passif + capitaux propres** | **4,500** | **1,200** | | **4,900** |

- **Goodwill** $=1{,}000-800=200$ : la part du prix non expliquée par l’actif net identifiable de B.
- **Les capitaux propres consolidés sont ceux de A uniquement**, 3 000. Les capitaux propres de B, 800, sont éliminés contre la participation.
- **Les actifs propres de A restent à la valeur comptable.** Seuls ceux de B sont retraités à la juste valeur.

### Cas 1b : achat de 100 % en actions nouvelles {#case-1b-buy-100-with-new-shares}

Même opération, mais A **émet des actions** d’une valeur de 1 000 (nominal 100) au lieu de payer en trésorerie.

**Dans les comptes de A.** *Participation dans B* +1 000 et capitaux propres +1 000 : capital social +100 et prime d’émission +900. Les résultats non distribués ne changent pas, car émettre des actions n’est pas un produit. La trésorerie reste à 1 500.

**Consolidé.** Les étapes 2 et 3 sont inchangées ; le goodwill est donc encore de $1{,}000-800=200$.

| | Consolidé |
|---|---:|
| Trésorerie + autres actifs | $1{,}500+3{,}000+1{,}200=5{,}700$ |
| Goodwill | 200 |
| **Total actif** | **5,900** |
| Passifs | 1,900 |
| Capitaux propres | $3{,}000+1{,}000=4{,}000$ |

Par rapport au cas 1, le groupe a 1 000 de trésorerie et 1 000 de capitaux propres en plus. Payer en actions fait grossir le bilan ; payer en trésorerie ne fait que le réorganiser.

### Cas 2 : achat de moins de 100 % (participations ne donnant pas le contrôle) {#case-2-buy-less-than-100-noncontrolling-interest}

Quand A achète moins de la totalité de B, la consolidation ajoute quand même **100 %** des actifs et passifs de B, car A les contrôle tous. La part des capitaux propres de B qui revient aux autres propriétaires est présentée en **participations ne donnant pas le contrôle (NCI)**, une ligne distincte **au sein des capitaux propres**, et non un passif.

Le montant du goodwill dépend de la manière dont les NCI sont évaluées :

| | Goodwill complet | Goodwill partiel |
|---|---|---|
| NCI évaluées à | La **juste valeur** des actions des NCI | La quote-part des NCI dans l’**actif net identifiable** de B à la JV |
| Goodwill | JV de **la totalité de B** − JV de l’actif net identifiable | Prix payé − quote-part de A dans la JV de l’actif net identifiable |
| Autorisé en | US GAAP (obligatoire) et IFRS | IFRS uniquement |

**Exemple (90 % acquis).** A paie **900 en trésorerie pour 90 %** de B. Le prix implique que la totalité de B vaut $900/90\%=1{,}000$ ; les 10 % des autres propriétaires valent donc 100.

| | Goodwill complet | Goodwill partiel |
|---|---:|---:|
| Goodwill | $1{,}000-800=200$ | $900-90\%\times800=180$ |
| NCI | $10\%\times1{,}000=100$ | $10\%\times800=80$ |
| Trésorerie ($1{,}500-900$) + autres actifs ($3{,}000+1{,}200$) | 4,800 | 4,800 |
| **Total actif** | **5,000** | **4,980** |
| Passifs | 1,900 | 1,900 |
| Capitaux propres des actionnaires de A | 3,000 | 3,000 |
| NCI | 100 | 80 |
| **Total passif + capitaux propres** | **5,000** | **4,980** |

La seule différence est les 20 de goodwill qui reviennent aux NCI : le goodwill complet les comptabilise, le goodwill partiel non. Le total de l’actif, les capitaux propres et donc la ROA et la ROE diffèrent légèrement entre les deux méthodes.

### Compte de résultat {#income-statement}

1. **Additionner 100 % des produits et charges de A et de B**, même si A détient moins de 100 %.
2. **Éliminer les transactions intragroupe.** Une vente de A à B n’est pas une vente pour le groupe ; le produit et le coût correspondant sont donc supprimés, ainsi que tout profit encore latent dans les stocks de l’acheteur.
3. **Ajuster pour la réévaluation à la juste valeur.** Les comptes de B amortissent ses actifs sur leur valeur comptable ; le groupe doit les amortir sur leur juste valeur, et l’amortissement supplémentaire de la réévaluation est donc une charge du groupe.
4. **Répartir le résultat net consolidé** entre les actionnaires de A et les NCI. La part des NCI est une **affectation du résultat, et non une charge**.

**Exemple (90 % acquis, année 1).** Suite du cas 2. Au cours de l’année :

- Les produits propres de A sont de 2 000 et ses charges de 1 600 ; le résultat net de A est donc de 400 (hors tout revenu provenant de B).
- Les produits de B sont de 800 et ses charges de 600 ; le résultat net de B est donc de 200.
- A a vendu des biens à B pour 100, et B les a tous revendus à des clients extérieurs dans l’année.
- La réévaluation de 200 porte sur un équipement d’une durée résiduelle de 10 ans ; le groupe amortit donc 20 de plus par an.

| | A | B | Ajustement | Consolidé |
|---|---:|---:|---:|---:|
| Produits | 2,000 | 800 | retirer 100 d’intragroupe | 2,700 |
| Charges | (1,600) | (600) | retirer 100 d’intragroupe ; ajouter 20 d’amort. de réévaluation | (2,120) |
| **Résultat net consolidé** | | | | **580** |
| Attribuable aux NCI | | | 10 % des 180 de B | 18 |
| **Attribuable aux actionnaires de A** | | | 400 + 90 % de 180 | **562** |

- La vente intragroupe **ne change pas le résultat** ici, car B a revendu tous les biens. Elle ne fait que retirer 100 de produit et de coût comptés deux fois. Si B avait encore détenu une partie des biens, le profit latent qu’ils contiennent aurait aussi été éliminé.
- La part des NCI repose sur le résultat net de B **après** l’amortissement de la réévaluation, $200-20=180$ : la réévaluation appartient à tous les propriétaires de B.
- En fin d’année, les NCI au bilan s’élèvent à $100+18=118$ (goodwill complet, pas de dividendes).

### Contrepartie éventuelle {#contingent-consideration}

Une partie du prix est souvent **éventuelle** : un **complément de prix (earn-out)** versé seulement si la cible atteint un objectif, comme un niveau de chiffre d’affaires ou de bénéfice, après l’opération.

- **À l’acquisition :** le paiement éventuel est évalué à la **juste valeur** et inclus dans la contrepartie transférée ; il **augmente donc le goodwill**.
- **Classement :** c’est un **passif** s’il sera réglé en trésorerie ou en un nombre variable d’actions, ou des **capitaux propres** s’il s’agit d’un nombre fixe d’actions.
- **Ensuite :**
  - **Passif :** réévalué à la juste valeur à chaque période, avec les variations en **résultat**. **Le goodwill ne change pas.**
  - **Capitaux propres :** **pas de réévaluation** ; le règlement est comptabilisé au sein des capitaux propres.
- **Période d’évaluation :** pendant au plus **un an** après la date d’acquisition, les informations nouvelles sur des **faits existant à la date d’acquisition** ajustent les montants provisoires, et donc le goodwill. Les variations dues à des événements **postérieurs** à l’acquisition (par exemple la cible qui dépasse ses prévisions) vont en résultat.

**Exemple.** Dans le cas 1, A s’engage aussi à payer 100 de plus en trésorerie si le chiffre d’affaires de B dépasse 1 000 dans les deux ans. À l’acquisition, la juste valeur du complément de prix est de 40 ; la contrepartie est donc de $1{,}000+40=1{,}040$ et le goodwill de $1{,}040-800=240$. Un an plus tard, B fait mieux que prévu et la juste valeur du complément monte à 70 : A comptabilise une **perte de 30** en résultat et le passif passe à 70, tandis que le goodwill reste à 240.

## Traitement comptable du goodwill {#accounting-treatment-of-goodwill}

Le goodwill est la part du prix d’acquisition qui ne peut être rattachée à aucun actif ou passif identifiable : synergies, équipe constituée, position de marché. Il n’est comptabilisé que lors d’une acquisition. Une entreprise ne comptabilise jamais le goodwill qu’elle crée elle-même.

### Goodwill complet ou partiel {#full-vs-partial-goodwill}

Quand la mère achète **moins de 100 %**, le goodwill peut être évalué de deux façons. La différence est de savoir si le goodwill est comptabilisé pour la **totalité** de la filiale ou seulement pour la **quote-part de la mère**.

$$
\text{Partial goodwill} = \text{Purchase price} - \text{Parent's \% share} \times \text{FV of identifiable net assets}
$$

$$
\text{Full goodwill} = \text{FV of the subsidiary as a whole} - \text{FV of identifiable net assets}
$$

L’*actif net identifiable* comprend tous les actifs corporels et incorporels identifiables, moins les passifs et passifs éventuels, à la juste valeur.

- Le **goodwill partiel** ne compte que le goodwill payé par la mère. Le goodwill des sections sur la mise en équivalence ci-dessus (*Excédent du prix d’acquisition*) est de ce type : la seule quote-part de l’investisseur, au sein d’une seule ligne de participation.
- Le **goodwill complet** compte aussi le goodwill attribuable aux **participations ne donnant pas le contrôle (NCI)** ; les NCI sont donc évaluées à la **juste valeur**.
- À **100 % de détention**, les deux sont identiques.

| | Goodwill complet | Goodwill partiel |
|---|---|---|
| US GAAP | **Obligatoire** | Non autorisé |
| IFRS | Autorisé (choix à chaque acquisition) | Autorisé |
| NCI évaluées à | Juste valeur des NCI | Quote-part des NCI dans la JV de l’actif net identifiable |

**Exemple (tiré du cas 2 ci-dessus).** A paie 900 pour 90 % de B ; la totalité de B vaut donc 1 000. L’actif net identifiable de B a une juste valeur de 800.

| | Goodwill complet | Goodwill partiel |
|---|---:|---:|
| Goodwill | $1{,}000-800=200$ | $900-90\%\times800=180$ |
| NCI | $10\%\times1{,}000=100$ | $10\%\times800=80$ |
| Total actif | 5,000 | 4,980 |
| Total capitaux propres (3 000 de A + NCI) | 3,100 | 3,080 |

**Effet sur les ratios.** Le goodwill complet ajoute les 20 de goodwill des NCI à l’**actif** et aux **capitaux propres** (via les NCI). Le résultat net étant le même dans les deux méthodes, le goodwill complet donne une **ROA et une ROE légèrement plus faibles**. Une dépréciation ultérieure du goodwill est aussi **plus importante** avec le goodwill complet, puisqu’il y a plus de goodwill à déprécier. Gardez-le en tête pour comparer une société IFRS ayant choisi le goodwill partiel et une société US GAAP.

### Dépréciation du goodwill {#impairment-of-goodwill}

Le goodwill **n’est pas amorti**. Il est **testé pour dépréciation au moins une fois par an**, et dès que des événements suggèrent une baisse de sa valeur. À l’acquisition, le goodwill est affecté aux unités censées en bénéficier : les **unités génératrices de trésorerie (UGT)** en IFRS, les **unités de reporting** en US GAAP.

**IFRS : une étape.**

1. Comparer la **valeur comptable de l’UGT, goodwill compris**, à sa **valeur recouvrable** (la plus élevée de la juste valeur diminuée des coûts de la vente et de la valeur d’utilité).
2. Si la valeur comptable est plus élevée, l’écart est la perte de valeur. Elle est imputée **d’abord au goodwill** ; le reliquat réduit les autres actifs de l’UGT au prorata de leur valeur comptable.

**US GAAP : deux étapes** (selon le programme).

1. **Test de dépréciation.** Le goodwill est déprécié si la **valeur comptable** de l’unité de reporting, goodwill compris, dépasse sa **juste valeur**.
2. **Évaluation de la perte.** Calculer le **goodwill implicite** : la juste valeur de l’unité de reporting moins la juste valeur de son actif net identifiable. La perte est la valeur comptable du goodwill moins le goodwill implicite.

> [!note]
>
> Depuis l’ASU 2017-04, les US GAAP ont supprimé l’étape 2 : la perte est simplement la valeur comptable de l’unité de reporting moins sa juste valeur, **plafonnée au goodwill** qui lui est affecté. C’est proche de l’approche IFRS. L’examen peut encore utiliser la version en deux étapes.

**Dans les deux référentiels :** la perte de valeur va au **compte de résultat** (en général sur une ligne distincte du résultat d’exploitation), et la dépréciation du goodwill **ne peut jamais être reprise**.

**Exemple (dépréciation du goodwill, illustratif).** Reprenons l’acquisition de 90 % avec goodwill complet. Un an plus tard, B (UGT ou unité de reporting à elle seule) est comptabilisée pour **1 000** : actif net identifiable de 800 plus goodwill de 200. L’activité se dégrade, et B dans son ensemble ne vaut plus que **900**. Son actif net identifiable vaut désormais **760**.

| | IFRS (une étape) | US GAAP (deux étapes) |
|---|---|---|
| Test | Valeur comptable 1 000 > valeur recouvrable 900 | Étape 1 : valeur comptable 1 000 > JV 900 → dépréciation |
| Évaluation | Perte $=1{,}000-900=100$, entièrement sur le goodwill | Étape 2 : goodwill implicite $=900-760=140$ ; perte $=200-140=60$ |
| Goodwill après | 100 | 140 |

La perte IFRS est ici plus importante, car elle compare l’unité entière et pas seulement le goodwill : une partie de la baisse de 100 reflète la perte de valeur des actifs identifiables (800 → 760). Avec la nouvelle règle US GAAP en une étape, la perte serait aussi de $1{,}000-900=100$, dans la limite du plafond de 200.

Si la valeur recouvrable de B était tombée à **700** en IFRS, la perte de 300 effacerait la totalité des 200 de goodwill, et les 100 restants réduiraient les autres actifs de B au prorata de leur valeur comptable.

### Goodwill négatif (acquisition à des conditions avantageuses) {#negative-goodwill-bargain-purchase}

Si le prix payé est **inférieur** à la juste valeur de l’actif net identifiable, l’acquéreur **revérifie** d’abord que chaque actif et passif a été correctement identifié et évalué. L’excédent qui subsiste est un **profit sur acquisition à des conditions avantageuses**, comptabilisé **immédiatement en résultat** en IFRS comme en US GAAP. Il n’est pas inscrit à l’actif ni différé.

### Notes pour l’analyste {#analyst-notes}

- **Les dépréciations de goodwill sont non monétaires**, et les entreprises les excluent souvent des bénéfices « ajustés ». Elles montrent pourtant que l’entreprise a **trop payé**, ou que l’acquisition fait moins bien que prévu.
- **Les dépréciations peuvent être choisies dans le temps.** Les prévisions de flux et les taux d’actualisation qui sous-tendent le test relèvent du jugement de la direction ; les dépréciations arrivent donc souvent tard, quand la mauvaise nouvelle est déjà dans le cours.
- **Pour comparer des entreprises**, envisagez de retirer le goodwill de l’actif et des capitaux propres, ou au moins d’utiliser la même méthode des deux côtés (goodwill complet ou partiel), avant de comparer ROA, ROE ou levier. Sinon, les entreprises qui ont grandi par acquisitions et celles qui ont grandi organiquement peuvent paraître très différentes pour des raisons sans rapport avec l’exploitation.

# Coentreprises et SPE/VIE

Les regroupements d’entreprises portent sur le **contrôle par une seule partie**. Ce chapitre traite de deux autres façons dont une entreprise peut être liée à une autre entité : le **contrôle conjoint** partagé avec des partenaires, et le **contrôle par les contrats** plutôt que par les votes.

## Coentreprises {#joint-ventures}

Une **coentreprise** est une entité **contrôlée conjointement par deux parties ou plus** (les *coentrepreneurs*), généralement pour partager le coût et le risque d’un grand projet : un gisement pétrolier, un nouveau marché, une usine.

Le **contrôle conjoint** signifie que les coentrepreneurs sont convenus par contrat que les décisions sur les activités pertinentes de la coentreprise exigent le **consentement unanime** des parties qui partagent le contrôle. Aucun coentrepreneur ne contrôle seul la coentreprise ; aucun ne la consolide donc.

**Comptabilisation.**

- **Les IFRS et les US GAAP imposent toutes deux la mise en équivalence** (voir [Mise en équivalence](#equity-method-of-accounting) ci-dessus). Chaque coentrepreneur présente sa quote-part de la coentreprise sur une ligne de participation au bilan et sa quote-part du résultat net de la coentreprise sur une ligne du compte de résultat.
- L’**intégration proportionnelle** n’est autorisée que **dans de rares cas**. En US GAAP, il s’agit surtout d’entités non constituées en société dans des secteurs où c’est une pratique établie, comme le pétrole et le gaz ou la construction. IFRS 11 distingue plutôt les **activités conjointes** : des accords où chaque partie a des droits directs sur les actifs et des obligations au titre des passifs. Chaque partie y comptabilise **sa propre quote-part** des actifs, passifs, produits et charges, ce qui a à peu près le même effet.

L’**intégration proportionnelle** ajoute aux états du coentrepreneur sa **quote-part en pourcentage de chaque poste** de la coentreprise, au lieu de la ligne unique de la mise en équivalence. Il n’y a pas de participations ne donnant pas le contrôle, puisque seule la quote-part propre du coentrepreneur est intégrée.

**Exemple (coentreprise à 50 %, illustratif).** A et un partenaire créent JV, chacun apportant 300 pour 50 %. En année 1, JV dégage un résultat net de 200 et ne verse pas de dividendes. En fin d’année :

| JV (100 %) | |
|---|---:|
| Actifs | 1,600 |
| Passifs | 800 |
| Capitaux propres ($600+200$) | 800 |
| Produits | 1,000 |
| Charges | 800 |
| **Résultat net** | **200** |

Activité propre de A, hors JV : actifs 2 000, passifs 1 000, produits 3 000, charges 2 700.

| États de A | Mise en équivalence | Intégration proportionnelle |
|---|---:|---:|
| Participation dans JV | $300+50\%\times200=400$ | – |
| Autres actifs | 2,000 | $2{,}000+50\%\times1{,}600=2{,}800$ |
| **Total actif** | **2,400** | **2,800** |
| Passifs | 1,000 | $1{,}000+50\%\times800=1{,}400$ |
| **Capitaux propres** | **1,400** | **1,400** |
| Produits | 3,000 | $3{,}000+50\%\times1{,}000=3{,}500$ |
| Charges | (2,700) | $(2{,}700+50\%\times800)=(3{,}100)$ |
| Quote-part de résultat de JV | $50\%\times200=100$ | – |
| **Résultat net** | **400** | **400** |

**Même résultat net et mêmes capitaux propres ; taille différente.** L’intégration proportionnelle fait entrer la quote-part de A dans les actifs, passifs, produits et charges de JV ; les ratios bougent donc :

| Ratio | Mise en équivalence | Intégration proportionnelle |
|---|---:|---:|
| Marge nette (RN / produits) | $400/3{,}000=13.3\%$ | $400/3{,}500=11.4\%$ |
| ROA (RN / total actif) | $400/2{,}400=16.7\%$ | $400/2{,}800=14.3\%$ |
| Levier (passifs / capitaux propres) | $1{,}000/1{,}400=0.71$ | $1{,}400/1{,}400=1.00$ |

Avec la mise en équivalence, la quote-part de A dans la **dette de JV reste hors de son bilan**, et les produits de JV sont invisibles. A paraît moins endettée et plus rentable par unité de ventes et d’actifs. Les analystes retraitent souvent les coentreprises d’une société en intégration proportionnelle pour voir l’ampleur réelle de son activité et de sa dette.

## Entités ad hoc {#special-purpose-entities}

Une **entité ad hoc (SPE)** est une entité juridique, souvent un trust, une société de personnes ou une société, créée par un **promoteur** dans un **but étroit et précis**, par exemple :

- la **titrisation de créances** (achat des prêts ou créances du promoteur, financé par de la dette) ;
- la **location** d’actifs au promoteur ;
- le financement de **recherche et développement** ou d’un projet unique ;
- la **détention d’actifs** à l’écart des autres risques du promoteur.

Caractéristiques typiques : **peu de capitaux propres**, si bien que l’essentiel du financement est de la dette, souvent soutenue par une garantie du promoteur ; peu de salariés ; et des activités fixées à l’avance par contrat plutôt que décidées par des actionnaires votants.

Comme le promoteur détient souvent peu ou pas de capitaux propres de la SPE, les SPE ont historiquement servi à sortir des actifs, et surtout de la **dette, du bilan du promoteur**, Enron étant l’abus le plus connu. Les règles actuelles comblent cette brèche : **une SPE que le promoteur contrôle doit être consolidée par lui**, quelle que soit sa part des capitaux propres avec droit de vote.

- Les **IFRS** n’ont pas de règle distincte pour les SPE. Le même test de contrôle que pour toute filiale s’applique (pouvoir, exposition aux rendements variables, et lien entre les deux ; voir [Contrôle](#controls)). Les IFRS appellent ces entités **entités structurées** et exigent des informations supplémentaires à leur sujet.
- Les **US GAAP** les traitent par le modèle des **entités à droits variables** ci-dessous.

## Entités à droits variables {#variable-interest-entities}

Une **entité à droits variables (VIE)** est le terme US GAAP pour une entité dont le contrôle **ne peut pas être apprécié par les actions avec droit de vote**. Une entité est une VIE si :

1. ses **capitaux propres à risque sont insuffisants** pour financer ses activités sans soutien financier subordonné supplémentaire ; ou
2. ses actionnaires, pris collectivement, **n’ont pas les caractéristiques d’une participation financière de contrôle** : le pouvoir de diriger ses activités par les droits de vote, l’obligation d’absorber ses pertes attendues, ou le droit de recevoir ses rendements résiduels attendus.

Un **droit variable** est tout intérêt contractuel, de propriété ou autre dont la valeur **varie avec la performance de la VIE**. Capitaux propres, dette subordonnée et garanties en font tous partie.

**Qui consolide : le principal bénéficiaire.** La partie dont le droit variable lui confère **à la fois**

- le **pouvoir de diriger les activités** qui influent le plus sur la performance économique de la VIE, **et**
- l’**obligation d’absorber des pertes ou le droit de recevoir des avantages** potentiellement significatifs pour la VIE

est le **principal bénéficiaire**, et elle **doit consolider la VIE**, qu’elle détienne ou non des actions avec droit de vote.

**SPE et VIE.** La plupart des SPE répondent à la définition d’une VIE : capitaux propres minces et fonctionnement par contrats ; la plupart des SPE sont donc des VIE, consolidées par leur principal bénéficiaire, en général le promoteur. Les deux termes ne sont pourtant pas identiques. Une SPE dotée de capitaux propres suffisants, réellement contrôlée par ses actionnaires, n’est pas une VIE.

**Exemple (titrisation de créances, illustratif).** Le promoteur S cède 1 000 de créances à une SPE contre 1 000 en trésorerie. La SPE finance l’achat avec 950 de dette bancaire, garantie par S, et 50 de capitaux propres apportés par des investisseurs extérieurs. S continue de gérer le recouvrement des créances.

S dirige l’activité clé de la SPE (le recouvrement des créances) et absorbe ses pertes via la garantie ; S est donc le **principal bénéficiaire** et doit consolider.

| Variation du bilan de S | Non consolidée (ancien résultat hors bilan) | Consolidée (obligatoire) |
|---|---:|---:|
| Créances | −1,000 (cédées) | 0 (toujours dans le groupe) |
| Trésorerie | +1,000 | +1,000 |
| **Total actif** | **0** | **+1,000** |
| Passifs : dette bancaire de la SPE | – | +950 |
| Participations ne donnant pas le contrôle (capitaux propres externes de la SPE) | – | +50 |

La consolidation montre l’opération pour ce qu’elle est : un **emprunt garanti par des créances**, et non une vente. L’actif et le passif de S sont tous deux plus élevés ; ses ratios de levier augmentent. Dans le tableau des flux de trésorerie, les 1 000 relèvent surtout du **financement** (emprunt) plutôt que d’un encaissement d’exploitation lié au recouvrement des créances.

# Investissements intersociétés

<iframe
  class="fx-concept-chart fsa-methods-chart"
  src="/charts/intercorporate-accounting-methods.html"
  title="Degré d’influence et traitement comptable : consolidation sur une ligne ou ligne à ligne"
  loading="lazy"
></iframe>


## Résultat net et capitaux propres {#net-income-and-sharholder-s-equity}

Le résultat net est le même quelle que soit la méthode utilisée pour comptabiliser la participation :

* Mise en équivalence
* Intégration proportionnelle
* Méthode de l’acquisition

**Exemple (illustratif).** Reprenons la coentreprise à 50 % de *Coentreprises* ci-dessus. A et son partenaire apportent chacun 300 ; JV dégage un résultat net de 200 (produits 1 000, charges 800) et termine l’année avec des actifs de 1 600, des passifs de 800 et des capitaux propres de 800. L’activité propre de A a des actifs de 2 000, des passifs de 1 000, des produits de 3 000 et des charges de 2 700. Pour comparaison, la colonne acquisition montre ce que seraient les états de A si A contrôlait JV et la consolidait intégralement, les 50 % du partenaire devenant des NCI.

| États de A | Mise en équivalence | Intégration proportionnelle | Méthode de l’acquisition |
|---|---:|---:|---:|
| Produits | 3,000 | 3,500 | 4,000 |
| Charges | (2,700) | (3,100) | (3,500) |
| Quote-part de résultat de JV | 100 | – | – |
| Résultat net consolidé | 400 | 400 | 500 |
| RN attribuable aux NCI | – | – | (100) |
| **RN attribuable aux actionnaires de A** | **400** | **400** | **400** |
| Total actif | 2,400 | 2,800 | 3,600 |
| Passifs | 1,000 | 1,400 | 1,800 |
| **Capitaux propres des actionnaires de A** | **1,400** | **1,400** | **1,400** |
| NCI | – | – | 400 |
| Total capitaux propres | 1,400 | 1,400 | 1,800 |

Le total des capitaux propres de l’investisseur est le même en mise en équivalence et en intégration proportionnelle

* Capitaux propres en acquisition = capitaux propres des autres méthodes + NCI

<iframe
  class="fx-concept-chart fsa-ni-eq-chart"
  src="/charts/method-ni-equity.html"
  title="Résultat net et capitaux propres selon les trois méthodes"
  loading="lazy"
></iframe>

Les méthodes ne diffèrent que par **la part de JV qu’elles font entrer dans les états de A** : une seule ligne (mise en équivalence), 50 % de chaque poste (intégration proportionnelle) ou 100 % de chaque poste (acquisition). Ce qui revient aux autres propriétaires dans la méthode de l’acquisition est mis à part en NCI ; les actionnaires de A obtiennent donc dans tous les cas les mêmes 400 de résultat net et 1 400 de capitaux propres.



## Consolidation sur une ligne ou ligne à ligne {#one-line-consolidation-vs-line-by-line-consolidation}

<iframe
  class="fx-concept-chart fsa-ratio-chart"
  src="/charts/method-ratios.html"
  title="Marge nette, ROA et ROE selon les trois méthodes"
  loading="lazy"
></iframe>

**Pourquoi les ratios se classent ainsi.** Le numérateur, le RN attribuable aux actionnaires de A, vaut **400 dans toutes les méthodes** ; chaque ratio ne varie donc qu’avec son **dénominateur** : plus une méthode fait entrer de JV dans les états de A, plus le dénominateur est grand et plus le ratio est faible.

- **Marge nette** (RN / produits) : la mise en équivalence n’ajoute **aucun** produit de JV (son bénéfice arrive sur une ligne de quote-part de résultat), l’intégration proportionnelle en ajoute **50 %**, la méthode de l’acquisition **100 %**. La marge est donc la plus élevée en mise en équivalence (13.3 %), intermédiaire en intégration proportionnelle (11.4 %) et la plus faible en acquisition (10.0 %).
- **ROA** (RN / total actif) : même logique pour les actifs. La mise en équivalence montre une ligne de participation de 400, l’intégration proportionnelle 50 % des actifs de JV, l’acquisition la totalité : 16.7 % contre 14.3 % contre 11.1 %.
- **ROE** (RN / capitaux propres) : les capitaux propres valent **1 400 dans les deux cas**, mise en équivalence et intégration proportionnelle ; la ROE est donc la même (28.6 %). Seule la méthode de l’acquisition ajoute les **NCI** (400) au total des capitaux propres, ce qui ramène la ROE à 22.2 %.

**Ce que cela implique pour l’analyse.** La mise en équivalence laisse les produits, actifs et **dettes** de l’entité détenue hors des états de l’investisseur ; celui-ci paraît donc plus rentable par unité de ventes et d’actifs et moins endetté qu’il ne l’est réellement. Pour comparer une société qui applique la mise en équivalence et une société qui consolide, retraitez l’une des deux (souvent en intégration proportionnelle) avant de comparer marges, ROA ou levier.

## Goodwill complet et partiel {#full-and-partial-goodwill}

Le choix entre goodwill complet et partiel (voir *Goodwill complet ou partiel* ci-dessus) **ne change pas le résultat net** tant qu’il n’y a pas de dépréciation : le goodwill n’est pas amorti, aucune des deux méthodes ne fait donc passer de charge au compte de résultat. Ce qui change, c’est le **bilan**. Le goodwill complet ajoute la quote-part de goodwill des NCI à l’actif, et le même montant aux capitaux propres via les NCI ; tout ratio qui divise par l’actif ou les capitaux propres ressort donc légèrement **plus faible** avec le goodwill complet.

**Exemple (l’acquisition de 90 % ci-dessus).** Le résultat net consolidé est de 580 dans les deux méthodes.

| | Goodwill complet | Goodwill partiel |
|---|---:|---:|
| Goodwill | 200 | 180 |
| Total actif | 5,000 | 4,980 |
| NCI | 100 | 80 |
| Total capitaux propres | 3,100 | 3,080 |
| Passifs | 1,900 | 1,900 |
| **ROA** (RN / total actif) | $580/5{,}000=11.6\%$ | $580/4{,}980=11.65\%$ |
| **ROE** (RN / total capitaux propres) | $580/3{,}100=18.7\%$ | $580/3{,}080=18.8\%$ |
| **Levier** (passifs / capitaux propres) | $1{,}900/3{,}100=0.61$ | $1{,}900/3{,}080=0.62$ |

| Poste | Goodwill complet par rapport au goodwill partiel |
|---|---|
| Résultat net | Identique (pas de dépréciation) |
| Total actif, total capitaux propres | Plus élevés |
| ROA, ROE | Plus faibles |
| Passifs / capitaux propres | Plus faible |
| Une perte de valeur ultérieure | **Plus importante**, car il y a plus de goodwill à déprécier |

L’écart est faible ici car les NCI ne détiennent que 10 %. Il augmente avec la taille des NCI et avec la part du prix constituée de goodwill. **C’est par la dépréciation que le choix atteint le résultat net** : si tout le goodwill de B était déprécié plus tard, la perte serait de 200 avec le goodwill complet mais de seulement 180 avec le goodwill partiel.

## Limites de la mise en équivalence {#issues-for-equity-method}

La mise en équivalence est simple à appliquer, mais elle laisse à l’analyste moins d’information que la consolidation et plus de place au jugement de la direction.

- **La méthode dépend d’un jugement sur l’influence, pas seulement du pourcentage.** La fourchette de 20–50 % n’est qu’une présomption. Sièges au conseil, participation aux politiques, transactions significatives, échange de dirigeants et dépendance technologique (voir *Principes de base*) peuvent créer une influence notable sous 20 %, ou l’exclure au-dessus de 20 %. La direction peut aussi **calibrer une participation** pour tomber d’un côté de la ligne : par exemple, détenir un peu moins de 50 % d’une entité très endettée garde sa dette hors bilan.
- **La mise en équivalence embellit les ratios.** Comme l’entité détenue apparaît sur une seule ligne, ses produits, actifs et **passifs** sont laissés de côté (voir *Consolidation sur une ligne ou ligne à ligne* ci-dessus). L’investisseur affiche une marge et une ROA plus élevées et un levier plus faible que si l’activité était consolidée, même s’il dépend fortement de l’entité détenue.
- **La quote-part de résultat n’est pas de la trésorerie.** L’investisseur comptabilise sa quote-part du RN de l’entité détenue, mais ne reçoit de trésorerie que sous forme de **dividendes**. Un écart important et persistant d’année en année entre quote-part de résultat et dividendes reçus signifie que les bénéfices publiés pourraient ne jamais se transformer en trésorerie, surtout si l’investisseur ne peut pas imposer une distribution.
- **La qualité des bénéfices de l’entité détenue devient celle de l’investisseur.** La quote-part de résultat hérite des choix comptables, éléments exceptionnels et estimations de l’entité détenue, sur lesquels l’investisseur n’a qu’une visibilité limitée. Une hausse de la quote-part peut refléter une comptabilité agressive de l’entité détenue plutôt qu’une meilleure exploitation.
- **Des obligations cachées.** Les garanties de la dette de l’entité détenue, les engagements de la financer, ou les pertes au-delà de la valeur comptable (non comptabilisées une fois la participation ramenée à zéro, sauf obligation de l’investisseur) n’apparaissent que dans les notes.

**Comment évaluer la qualité des bénéfices mis en équivalence.**

1. Comparer les **dividendes reçus** et la **quote-part de résultat** sur plusieurs années.
2. Lire les états financiers résumés de l’entité détenue dans les notes : son levier, ses marges et ses méthodes comptables.
3. Retraiter les entités détenues significatives en **intégration proportionnelle**, en ajoutant la quote-part de l’investisseur dans leurs produits, actifs et dettes, avant de comparer les ratios avec les pairs.
4. Vérifier dans les notes les **garanties et engagements** envers l’entité détenue.
5. Se demander si le niveau de détention semble **calibré** pour éviter la consolidation.
