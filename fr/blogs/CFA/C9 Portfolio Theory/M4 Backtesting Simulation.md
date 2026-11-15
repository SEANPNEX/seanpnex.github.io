---
title: "Backtesting et simulation"
---

# Backtesting et simulation

Le **backtesting** utilise des données historiques pour tester un modèle ou une stratégie d’investissement : il simule la performance qu’aurait eue la stratégie si elle avait été suivie dans le passé.

- Étapes du backtesting d’une stratégie d’investissement :
  1. **Conception de la stratégie**
     - Préciser l’hypothèse d’investissement et le ou les objectifs.
     - Définir les règles d’investissement, le processus et les paramètres clés.
  2. **Simulation historique de l’investissement**
     - Constituer et rééquilibrer les portefeuilles à chaque période selon les règles d’investissement.
     - En général avec une **fenêtre glissante** : à chaque date de rééquilibrage, n’utiliser que les données disponibles jusqu’à cette date pour constituer le portefeuille, le détenir sur la période suivante (hors échantillon), puis avancer et recommencer.
  3. **Analyse des résultats du backtest**
     - Calculer les statistiques de performance du portefeuille.

À vérifier :

* Le **rendement moyen**, et des mesures ajustées du risque comme le ratio de Sharpe.
* La **volatilité** : l’écart-type des rendements.
* Le **risque de baisse** : les rendements ne sont souvent pas normaux (asymétrie négative, queues épaisses) ; la volatilité ne suffit donc pas :
  * [VaR](M3%20Managing%20Market%20Risk.md#value-at-risk-var) et [CVaR](M3%20Managing%20Market%20Risk.md#extensions-of-var) : les pertes extrêmes.
  * **Perte maximale (maximum drawdown)** : la plus forte baisse de la valeur du portefeuille d’un sommet à un creux ultérieur. P. ex. un portefeuille qui monte à 120 puis tombe à 90 avant de se redresser a une perte maximale de $90/120-1=-25\%$.

Trois problèmes courants peuvent faire paraître un backtest meilleur que la stratégie ne l’est vraiment :

* **Biais du survivant** : les données n’incluent que les sociétés qui existent encore aujourd’hui ; les sociétés défaillantes, radiées de la cote ou rachetées manquent. Les perdants étant écartés, les rendements sont **surestimés** et le risque sous-estimé. Remède : utiliser une base qui conserve toutes les sociétés, y compris disparues.
* **Biais d’anticipation** : utiliser une information **non disponible** au moment de la décision, p. ex. des résultats annuels publiés des mois après la clôture, ou des données révisées par la suite. Remède : utiliser des données **à date** (point-in-time), et décaler les données du délai de publication.
* **Fouille de données (data snooping)** : tester de nombreuses stratégies ou paramètres sur les mêmes données jusqu’à ce qu’une fonctionne par hasard, puis ne publier que celle-là. Remède : tester la stratégie sur des données non utilisées pour la concevoir (test **hors échantillon**, validation croisée), et exiger un seuil de significativité plus élevé (p. ex. une statistique $t$ supérieure à 3).

## Simulation

Un backtest ne montre qu’**une seule trajectoire**, celle que l’histoire a suivie. La simulation génère de nombreux scénarios possibles pour voir comment la stratégie se comporterait dans chacun, y compris des scénarios pires que l’histoire.

* **Simulation historique** : tirer au hasard dans les données historiques, p. ex. tirer avec remise des rendements mensuels passés pour construire de nombreuses nouvelles trajectoires (**échantillonnage**, **bootstrap**).
  * Conserve la vraie distribution des rendements, y compris les queues épaisses et les corrélations entre actifs.
  * Ne peut pas produire des résultats qui ne se sont jamais produits, et suppose que le passé est représentatif.
* **Simulation de Monte-Carlo** : choisir une loi statistique, en général une **loi multivariée** avec les moyennes, volatilités et corrélations des actifs, et en tirer des scénarios aléatoires.
  * Souple : peut modéliser des scénarios au-delà de l’histoire, et des lois à queues épaisses ou asymétriques.
  * Les résultats dépendent de la loi supposée et de ses paramètres (risque de modèle).

L’**analyse de sensibilité** relance la simulation avec d’autres hypothèses, p. ex. une loi à queues épaisses au lieu d’une loi normale, pour vérifier si les résultats de la stratégie tiennent.
