---
title: "Fonds indiciels cotés (ETF)"
---

<style>
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 583px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
@media (max-width: 587px) {
    .fx-concept-chart { height: 615px; }
}
</style>

# Fonds indiciels cotés (ETF)

## Fonctionnement des ETF

Un **fonds indiciel coté (ETF)** est un type de fonds : un ensemble de titres, qui **réplique** souvent **un indice sous-jacent**, dont les parts se négocient en bourse toute la journée.

La différence clé entre les deux types de fonds traditionnels tient à **la contrepartie de l’investisseur** :

* **Fonds ouvert (OPC)** : les investisseurs souscrivent et rachètent des parts **directement auprès de la société de gestion**, à la VL calculée en fin de journée. Le fonds crée ou annule des parts au gré des entrées et sorties d’argent.
* **Fonds fermé** : le nombre de parts est fixé à l’émission. Les investisseurs s’échangent les parts **entre eux en bourse**, et le prix peut s’éloigner nettement de la VL.

Les ETF ont des traits des deux, car ils se négocient sur deux marchés :

* **Marché primaire (côté fonds ouvert)** : seuls les **participants autorisés (AP)**, de grands courtiers liés par contrat au promoteur de l’ETF, traitent avec le fonds. Ils **créent** des parts d’ETF par gros blocs (**unités de création**, p. ex. 50 000 parts) en livrant au fonds le **panier de création** de titres, et les **rachètent** en rendant des unités de création contre le panier. Ces échanges se font en général **en nature** : des titres contre des parts, pas de l’argent.
* **Marché secondaire (côté fonds fermé)** : tous les autres investisseurs, et les AP, **négocient les parts d’ETF en bourse**, aux prix de marché, toute la journée. L’essentiel des échanges d’ETF a lieu ici et ne touche jamais le fonds.

| | Fonds ouvert | Fonds fermé | ETF |
| --- | --- | --- | --- |
| **Contrepartie des investisseurs** | Le fonds | D’autres investisseurs, en bourse | D’autres investisseurs, en bourse ; les AP aussi avec le fonds |
| **Nombre de parts** | Change chaque jour | Fixe | Change au gré des créations et rachats des AP |
| **Prix** | VL, une fois par jour | Prix de marché, en continu | Prix de marché, en continu |
| **Prix vs VL** | Égaux | Peut avoir une forte prime ou décote | Maintenus proches par l’arbitrage des AP |

L’**arbitrage des AP** maintient le prix de l’ETF proche de sa VL :

* **ETF avec prime** (prix > VL) : l’AP achète le panier sous-jacent, le livre pour **créer** des parts d’ETF, et les vend en bourse. L’offre supplémentaire fait baisser le prix de l’ETF.
* **ETF avec décote** (prix < VL) : l’AP achète des parts d’ETF en bourse, les **rachète** contre le panier, et vend les titres. La demande supplémentaire fait monter le prix de l’ETF.

L’arbitrage n’est rentable que si l’écart dépasse les coûts de l’AP (frais de création/rachat, coûts de transaction sur le sous-jacent) ; le prix peut donc fluctuer dans cette fourchette.

## Coûts de transaction

**Fourchette achat-vente.** La fourchette d’un ETF reflète ce que coûte au teneur de marché ou à l’AP la fourniture de liquidité, surtout via le sous-jacent :

* Les **frais de création/rachat** et les autres coûts de transaction, comme les commissions.
* Les **fourchettes et la liquidité des titres sous-jacents** : un ETF sur de grandes capitalisations liquides a une fourchette étroite ; un ETF sur des obligations à haut rendement ou des petites capitalisations, une fourchette plus large.
* Le **risque de porter et de couvrir** la position jusqu’à ce qu’elle puisse être compensée.
* Le **profit** du teneur de marché, qui baisse avec la concurrence.
* **Moins** : la **liquidité en bourse** de l’ETF lui-même. Quand acheteurs et vendeurs de l’ETF se rencontrent en bourse, aucune création ni aucun rachat n’est nécessaire ; un ETF très échangé peut donc avoir une fourchette plus étroite que son sous-jacent.

**Décalages horaires.** Pour les actions étrangères, le marché sous-jacent peut être **fermé** pendant que l’ETF se négocie (p. ex. les actions japonaises pendant les heures américaines). Le courtier ne peut ni négocier ni couvrir le panier, dont les prix sont périmés, et les fourchettes s’élargissent.

### Prime/décote par rapport à la VL

$$\text{Premium}=\frac{\text{ETF price}-\text{NAV}}{\text{NAV}}$$

Une prime négative est une décote.

* La **VL** est publiée une fois par jour, à la **clôture**, à partir des cours de clôture des titres détenus.
* Le **marché secondaire** affiche un **prix d’ETF en temps réel**.
* La **prime/décote de fin de journée** compare le cours de clôture de l’ETF à la VL du jour.
* Pour la **négociation en séance**, les promoteurs publient une **VL indicative (iNAV)** toutes les 15 secondes, fondée sur les derniers cours des titres détenus.

Une prime ou une décote n’est pas toujours une erreur de prix. La VL et l’iNAV peuvent être **périmées** :

* **Décalages horaires** : pour un ETF sur actions étrangères, la VL utilise les prix d’un marché fermé depuis des heures. Le prix de l’ETF reflète déjà les nouvelles depuis, et la VL ne rattrape que le lendemain.
* **Titres peu liquides** : beaucoup d’obligations ne s’échangent pas tous les jours ; la VL repose donc sur des prix estimés (matriciels), alors que le prix de l’ETF montre où les investisseurs traiteront réellement, surtout en période de tension.

**Exemple.** Un ETF sur actions japonaises clôture à New York à 25,30 ; sa VL, tirée des cours de clôture de Tokyo du matin, est de 25,00. Calculez la prime, et dites si elle signale une erreur de prix.

<div class="reveal" tabindex="0">

$$\frac{25.30-25.00}{25.00}=+1.2\%$$

Pas forcément une erreur de prix. Tokyo a fermé avant l’ouverture de New York ; la VL est donc périmée : si une bonne nouvelle est tombée pendant les heures américaines, le prix de l’ETF la reflète et la VL ne la rattrapera qu’à la prochaine clôture de Tokyo. De toute façon, un AP ne pourrait pas acheter le panier à Tokyo aux prix périmés.

</div>

## Erreur de suivi {#tracking-error}

Les ETF sont surtout des **investissements passifs** ; l’investisseur veut donc que le rendement de l’ETF reste proche de celui de son indice.

* **Écart de suivi** : le rendement de l’ETF moins celui de l’indice sur une période.
* **Erreur de suivi** : l’**écart-type** des écarts de suivi (en général annualisé).

$$\text{Tracking error}=\sigma\left(R_{\text{ETF}}-R_{\text{index}}\right)$$

L’erreur de suivi mesure la **variabilité** de l’écart, pas son **sens ni sa taille** : un ETF qui fait exactement 0,5 % de moins que son indice chaque année a une erreur de suivi nulle. On ne peut donc pas connaître l’écart absolu à partir de la seule erreur de suivi ; il faut aussi regarder l’écart de suivi (moyen).

**Exemple.** Deux ETF répliquent le même indice. Leurs écarts de suivi annuels sur cinq ans sont :

| Année | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| **ETF A** | −0.50% | −0.50% | −0.50% | −0.50% | −0.50% |
| **ETF B** | +0.40% | −0.30% | +0.20% | −0.50% | +0.20% |

Calculez l’écart de suivi moyen et l’erreur de suivi de chaque ETF. Lequel réplique le mieux l’indice ?

<div class="reveal" tabindex="0">

* **ETF A** : écart de suivi moyen −0,50 % ; tous les écarts sont identiques, donc l’erreur de suivi est **0**.
* **ETF B** : écart de suivi moyen $0$. La somme des carrés des écarts vaut $0.16+0.09+0.04+0.25+0.04=0.58$, donc

$$\text{TE}_B=\sqrt{\frac{0.58}{5-1}}=0.38\%$$

L’ETF A a l’erreur de suivi la plus faible mais perd 0,50 % par an face à l’indice, très probablement à cause de ses frais. L’écart de l’ETF B varie davantage mais ne coûte rien en moyenne. Une comparaison complète demande les deux mesures.

</div>

**Sources de l’écart de suivi :**

* **Frais et charges** : le frein le plus important et le plus constant.
* **Échantillonnage représentatif ou optimisation** : détenir une partie des titres de l’indice au lieu de tous (réplication complète).
* **Modifications de l’indice** : calendrier et coûts de transaction lors des rééquilibrages.
* **Exigences réglementaires et fiscales**, p. ex. des limites de diversification qui empêchent le fonds de suivre un indice concentré.
* **Frein de la trésorerie** : dividendes et autres liquidités conservés jusqu’à leur réinvestissement.
* **Certificats de dépôt** : détenir des ADR/GDR au lieu des actions locales, dont les prix et horaires de négociation peuvent différer de ceux qu’utilise l’indice.
* **Prêt de titres** : prêter des titres aux vendeurs à découvert procure un revenu qui **s’ajoute** au rendement de l’ETF.
* **Récupération des retenues sur dividendes étrangers** : l’indice suppose en général la retenue à la source étrangère complète ; si le fonds en récupère une partie grâce aux conventions fiscales, son rendement **dépasse** celui de l’indice.

## Questions fiscales

### Équité fiscale

* **Fonds ouverts** : l’équité n’est pas garantie. Quand des investisseurs **rachètent**, le fonds peut devoir **vendre des titres**, réalisant des plus-values distribuées, et imposées, à **tous les porteurs restants**, qui n’ont rien vendu. Les coûts de transaction du rachat sont aussi supportés par les porteurs restants.
* **ETF** : l’essentiel des échanges a lieu entre investisseurs sur le **marché secondaire** ; il ne touche donc pas le fonds, et chaque investisseur n’est imposé que sur sa propre vente. Quand les AP rachètent, le fonds remet des titres **en nature** au lieu de les vendre ; **rien n’est imposé** dans le fonds. La fiscalité des ETF est donc équitable.

### Efficacité fiscale

Lors d’un rachat en nature, le fonds choisit quels **lots** de chaque titre remettre à l’AP, et remet ceux qui ont le **prix de revient le plus bas** (les plus-values latentes les plus fortes). Les plus-values sortent du portefeuille **sans être réalisées** par le fonds ; moins de plus-values sont donc distribuées aux porteurs, et leur impôt est différé jusqu’à la vente de leurs parts d’ETF.

> [!Note]
>
> Les plus-values ne sont pas transmises à l’AP pour qu’il paie l’impôt : le coût de l’AP est ce qu’il a payé pour les parts d’ETF rachetées. L’avantage vient de l’exonération des échanges en nature ; il est donc moindre pour les ETF qui créent et rachètent en espèces (fréquent pour certains ETF internationaux ou obligataires) ou dans les juridictions sans cette exonération.

## Autres coûts

Les ETF prélèvent en général des frais **plus faibles** que les fonds ouverts : la plupart sont indiciels, et ils ne supportent pas les coûts de tenue des comptes des porteurs et de distribution des fonds ouverts.

Les coûts varient selon :

* La **complexité du portefeuille** : des portefeuilles de niche, internationaux ou gérés activement coûtent plus cher à gérer que de larges indices domestiques.
* La **taille de l’émetteur** : les grands promoteurs ont des économies d’échelle.
* Le **paysage concurrentiel** : la concurrence a poussé les frais des ETF sur indices larges près de zéro.

Le **coût total de détention** combine le coût d’entrée et de sortie et le coût de détention :

$$\text{RT}=2\times\left(\text{Commission}+\tfrac12\,\text{Spread}\right)$$

$$\text{Total cost}=\text{RT}+\text{Expense ratio}\times T$$

où RT est le coût de transaction aller-retour, la commission est pour un seul sens, et $T$ est la durée de détention en années.

Les coûts de transaction sont payés une fois ; le ratio de frais l’est chaque année. Les négociateurs **à court terme** devraient donc privilégier les ETF aux faibles **coûts de transaction**, et les détenteurs **à long terme** ceux aux faibles **ratios de frais**.

**Exemple.** Deux ETF répliquent le même indice. Tous deux ont une commission de 0,05 % par sens. L’ETF A a une fourchette de 0,10 % et un ratio de frais de 0,20 % ; l’ETF B une fourchette de 0,30 % et un ratio de frais de 0,09 %. Lequel est le moins cher pour une durée de détention de (a) 9 mois, (b) 5 ans ? (c) Pour quelle durée coûtent-ils la même chose ?

<div class="reveal" tabindex="0">

Coûts de transaction aller-retour : A $=2\times(0.05\%+0.05\%)=0.20\%$ ; B $=2\times(0.05\%+0.15\%)=0.40\%$.

**(a) 9 mois.** A $=0.20\%+0.20\%\times0.75=0.35\%$ ; B $=0.40\%+0.09\%\times0.75=0.4675\%$. L’**ETF A** est moins cher.

**(b) 5 ans.** A $=0.20\%+0.20\%\times5=1.20\%$ ; B $=0.40\%+0.09\%\times5=0.85\%$. L’**ETF B** est moins cher.

**(c) Point mort.**

$$0.20\%+0.20\%\,t=0.40\%+0.09\%\,t$$

$$t=\frac{0.20\%}{0.11\%}=1.82\text{ years}$$

</div>

<iframe
  class="fx-concept-chart"
  src="/charts/etf-holding-cost.html"
  title="Coût total de deux ETF selon la durée de détention"
  loading="lazy"
></iframe>

## Les ETF dans la gestion de portefeuille

**Gestion efficace du portefeuille.**

* **Gestion de la liquidité** :
  * **Investissement de la trésorerie (cash equitization)** : placer la trésorerie (souscriptions ou dividendes) en ETF pour que le fonds reste **entièrement investi** et évite le frein de la trésorerie.
  * **Rééquilibrage** : utiliser des ETF pour ajuster les expositions vite et à bas coût, puis négocier le sous-jacent plus tard si nécessaire.
  * **Gestion des rachats** : détenir une poche d’ETF liquides à vendre pour faire face aux sorties.
* **Stratégie de complément** : utiliser des ETF pour combler les manques, p. ex. un secteur, une région ou un facteur que les gérants actifs sous-pondèrent, afin que le portefeuille total corresponde à ses expositions cibles.
* **Gestion de transition** : lors du remplacement d’un gérant, détenir des ETF sur la classe d’actifs pendant que le nouveau gérant est choisi et doté, pour conserver l’exposition dans l’intervalle.

**Exposition aux classes d’actifs.** Les ETF donnent une exposition rapide et peu coûteuse pour les positions **cœur** et pour les ajustements **tactiques** ou **stratégiques** de l’allocation d’actifs, y compris sur des classes d’actifs difficiles d’accès en direct, comme les actions internationales, les obligations et les matières premières.

**Investissement actif et factoriel.** Les ETF factoriels (smart beta) ciblent des expositions comme la value, le momentum ou la faible volatilité ; les ETF thématiques, ESG et gérés activement donnent accès à des stratégies précises, et certains ETF servent à couvrir ou gérer le risque.

**Pour les grands détenteurs d’actifs, les ETF ont des inconvénients** par rapport à un **mandat de gestion séparé (SMA)** :

1. **Frais** : les frais d’ETF sont fixes et peu négociables ; un grand investisseur peut négocier des frais plus bas sur un SMA.
2. **Personnalisation** : un SMA peut être adapté aux objectifs de l’investisseur, p. ex. des exclusions ESG ou la récolte de pertes fiscales.
3. **Transparence** : les régulateurs imposent aux ETF de **publier leurs positions** (souvent chaque jour), ce qui peut exposer une stratégie active au front-running ; les positions d’un SMA restent privées.
