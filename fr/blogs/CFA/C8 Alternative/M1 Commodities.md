---
title: Matières premières
---

# Matières premières

## Notions de base sur les matières premières

### Secteurs

* Énergie : pétrole brut, gaz naturel, charbon, essence et fioul domestique
* Métaux industriels/de base : cuivre, aluminium, nickel, zinc, plomb, étain et fer
* Métaux précieux : or, argent et platine
* Céréales : maïs, soja, blé et riz
* Softs : coton, cacao, sucre et café
* Élevage : porcs, bovins, ovins et volailles

| **Principales influences** | **Énergie** | **Métaux de base** | **Métaux précieux** | **Céréales** | **Softs** | **Élevage** |
| ---------------------- | ---------- | --------------- | ------------------- | ---------- | --------- | ------------- |
| PIB                    | ✓          | ✓               | ✓                   |            | ✓         | ✓             |
| Météo                | ✓          |                 |                     | ✓          | ✓         | ✓             |
| Préférences des consommateurs    |            |                 |                     |            | ✓         |               |
| Revenu des consommateurs        |            |                 |                     | ✓          | ✓         | ✓             |
| Croissance démographique      |            |                 |                     | ✓          | ✓         |               |
| Substitution par les biocarburants   |            |                 |                     | ✓          |           |               |
| Politique monétaire        |            |                 |                     |            | ✓         |               |
| Géopolitique            | ✓          |                 | ✓                   |            |           |               |
| Développement industriel |            | ✓               |                     |            |           |               |

### Cycle de vie des matières premières

* Le cycle de production d’une matière première reflète et amplifie les variations des stocks, de la météo et des événements politiques ou économiques qui déplacent l’offre et la demande.
* Un cycle court permet un ajustement relativement rapide aux événements extérieurs ; un cycle long limite généralement la capacité de réaction du marché.
* L’agriculture et l’élevage ont des saisons et des cycles de croissance bien définis, propres à chaque région. L’énergie et les métaux sont extraits toute l’année.

### Principaux acteurs

* Les **opérateurs en couverture** interviennent pour couvrir leur exposition liée à la matière première
* Les **spéculateurs** disposent d’un avantage informationnel et cherchent à faire mieux que les opérateurs en couverture. Ils apportent aussi liquidité et découverte des prix en échange d’un profit
* Les **arbitragistes** cherchent à tirer parti des écarts de prix entre le physique et les contrats à terme
* Les **bourses** (chambres de compensation) fixent les règles de négociation et fournissent l’infrastructure
* Les **analystes** ne sont pas des acteurs du marché ; ils utilisent les informations des bourses pour faire de la recherche, élaborer des politiques et faciliter la participation au marché
* Les **régulateurs** surveillent le marché.

### Caractéristiques qui distinguent les indices de matières premières

* L’étendue de la couverture (nombre de matières premières et de secteurs)
* Les pondérations relatives attribuées à chaque matière première
* La méthode de roulement des contrats vers les échéances suivantes
* La méthode et la fréquence de rééquilibrage des pondérations
* La gouvernance de l’indice

| **Critère**                         | **S&P GSCI**                        | **CRB**                   |
| ------------------------------------ | ----------------------------------- | ------------------------- |
| Date de création                        | 1991                                | 1978                      |
| Nombre de matières premières                | 24                                  | 19                        |
| Méthode de pondération                     | *Pondération par la production*               | *Pondération fixe*          |
| Méthode de roulement                  | Chaque mois vers le contrat proche le plus liquide | Du premier mois au mois suivant |
| Fréquence de rééquilibrage                | Annuelle                            | Mensuelle                   |
| Fonds accessibles aux particuliers ? | Oui                                 | Oui, ainsi que des ETF        |

## Théories du rendement des contrats à terme

**Prix au comptant et prix à terme**

* La base est la différence entre le prix au comptant et le prix à terme
* Le spread calendaire est la différence de prix entre le contrat proche et un contrat plus lointain.
* Le **déport (backwardation)** est la situation où le prix au comptant dépasse le prix à terme ($S>F$), ou où le contrat proche est plus cher que le contrat lointain. La situation inverse est le **report (contango)** ($S<F$).

**Règlement**

* Le règlement en espèces permet une plus forte participation des spéculateurs et des arbitragistes
* La livraison physique garantit la convergence entre prix à terme et prix au comptant, ce qui n’est pas toujours le cas sur un marché réglé en espèces.
* Les prix au comptant sont très locaux et liés à la livraison physique, ce qui limite les possibilités de couverture et de spéculation.

### Théorie de l’assurance

Selon cette théorie, seul le **déport** est possible

* Un producteur est naturellement acheteur du bien physique ; il vend donc des contrats à terme pour couvrir son prix de vente et rendre ses revenus plus prévisibles
* La courbe est normalement en déport parce que les producteurs vendent sans cesse des contrats, ce qui fait baisser les prix à terme
* Le prix à terme doit être inférieur au prix au comptant actuel pour rémunérer les spéculateurs qui prennent le risque de prix.

### Hypothèse de la pression de couverture

Les deux camps ont des positions sur le marché ; $S=F$ est donc l’état normal. Si les vendeurs dominent, $S>F$ ; sinon $S<F$

### Théorie du stockage

$$
\text{Future price}=\text{Spot price}+\text{Storage costs}-\text{Convenience yield}
$$



* Report : le coût de stockage dépasse le rendement d’opportunité (convenience yield)
* Déport : le rendement d’opportunité dépasse le coût de stockage

## Composantes du rendement des contrats à terme

Le rendement d’un contrat à terme comprend 3 parties

* Rendement de prix

$$
\text{Price return}=\frac{\text{current}-\text{previous}}{\text{previous}}
$$

* Rendement du collatéral : rendement de la trésorerie utilisée pour maintenir la position (taux d’intérêt)

* Rendement de roulement : rendement généré par le remplacement des contrats

$$
\text{Roll return}=\frac{\text{Near term closing price}-\text{Farther term future closing price} }{\text{Near term closing price}}\times \text{Percentage of position being rolled}
$$

>[!note]
>
>* Le rendement de roulement est en général positif en déport et négatif en report
>* Il pèse fortement sur le rendement d’une période donnée, mais globalement beaucoup moins que le rendement de prix
>* La diversification permet d’en dépendre moins

| **Déport**               | **Report**                    |
| ------------------------------- | ------------------------------- |
| Comptant ≥ terme                  | Comptant < terme                  |
| Base ≥ 0                       | Base < 0                       |
| Proche ≥ lointain         | Proche < lointain         |
| Spread calendaire ≥ 0             | Spread calendaire < 0             |
| **Rendement de roulement ≥ 0** *(positif)* | **Rendement de roulement < 0** *(négatif)* |
