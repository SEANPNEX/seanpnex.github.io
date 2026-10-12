---
title: Projets big data
---

# Projets big data

Le big data ne désigne pas seulement un grand nombre d’observations, mais aussi des données dont l’échelle, la vitesse, la diversité ou la qualité compliquent le stockage et l’analyse classiques. En gestion d’actifs, sa valeur vient de la transformation de données brutes en informations qui améliorent une décision — pas de la taille en soi.

## Sources et formes des données

Sources courantes :

- **Marchés financiers :** prix, cotations, carnets d’ordres, volumes et historiques de transactions.
- **Entreprises :** états financiers, conférences sur les résultats, transactions clients et données opérationnelles.
- **États :** publications économiques, documents réglementaires, décisions de justice et registres publics.
- **Particuliers :** enquêtes, avis, recherches et activité sur les réseaux sociaux, sous réserve des règles de consentement et de confidentialité.
- **Capteurs et objets connectés :** images satellites, géolocalisation, signaux maritimes et données de l’Internet des objets.

Les données traditionnelles sont en général produites à des fins commerciales ou de reporting établies. Les **données alternatives** naissent hors de ces canaux classiques — par exemple des images satellites de parkings ou des données de paiement anonymisées — et sont réutilisées pour l’analyse d’investissement.

| Forme | Organisation | Exemples |
| --- | --- | --- |
| Structurées | Lignes, colonnes et types de données fixes | Tables SQL, panels de prix de marché, fichiers CSV |
| Semi-structurées | Balises ou clés donnant une certaine organisation | JSON, XML, journaux web |
| Non structurées | Pas de schéma tabulaire prédéfini | Texte, images, audio et vidéo |

### Les quatre V

- **Volume :** la quantité de données.
- **Vélocité :** le rythme auquel les données arrivent et doivent être traitées.
- **Variété :** la diversité des sources, formats et structures.
- **Véracité :** l’exactitude, la crédibilité, la cohérence et la fiabilité des données.

Certains cadres ajoutent la **valeur**, pour souligner que de grands jeux de données ne sont utiles que s’ils génèrent des bénéfices supérieurs aux coûts d’acquisition, de traitement, de conformité et de risque de modèle.

> [!IMPORTANT]
> Plus de données n’élimine pas automatiquement le biais. Un très grand échantillon non représentatif peut produire une estimation précise d’une mauvaise quantité.

## Déroulé d’un projet big data

Un projet solide est itératif plutôt qu’un exercice de modélisation à sens unique.

1. **Formuler le problème.** Définir la décision, le résultat visé, l’utilisateur, l’objectif économique, les contraintes et le critère de succès.
2. **Collecter et organiser les données.** Identifier les sources, obtenir un accès licite, documenter la provenance et étiqueter les observations si un apprentissage supervisé est prévu.
3. **Préparer et mettre en forme les données.** Détecter les erreurs, nettoyer les enregistrements, intégrer les sources et transformer les valeurs en une table d’analyse exploitable.
4. **Explorer les données.** Résumer distributions et relations, examiner les anomalies et vérifier si l’échantillon représente la population visée.
5. **Construire et sélectionner les caractéristiques.** Créer des prédicteurs économiquement pertinents et retirer les entrées inutiles ou redondantes.
6. **Choisir, entraîner et valider un modèle.** Retenir une méthode adaptée, régler les hyperparamètres sans toucher à l’échantillon de test et évaluer la performance hors échantillon.
7. **Déployer et surveiller.** Intégrer le résultat dans un processus de décision, surveiller la dérive des données et du modèle, et fixer des règles d’escalade et de réentraînement.

Avant de collecter des données, l’analyste doit pouvoir répondre :

- Quelle décision le résultat va-t-il changer ?
- La cible est-elle disponible au moment où la prévision serait faite ?
- Qui utilisera le résultat, et comment entrera-t-il dans le processus métier ?
- Quels sont les coûts des faux positifs et des faux négatifs ?
- Quelles restrictions juridiques, de confidentialité, de licence et éthiques s’appliquent ?

## Préparation et mise en forme des données

La **préparation des données** examine les données brutes, repère les problèmes de qualité et les atténue. La **mise en forme (data wrangling)** transforme, combine et restructure les données nettoyées sous une forme adaptée à l’analyse.

### Erreurs de données courantes

| Erreur | Signification | Exemple |
| --- | --- | --- |
| Incomplétude | Des valeurs requises manquent | Pas de code sectoriel pour certaines entreprises |
| Invalidité | Une valeur viole une règle ou une plage admissible | Nombre d’actions négatif |
| Inexactitude | Une valeur plausible est fausse | Prix saisi avec une virgule mal placée |
| Incohérence | Des champs liés se contredisent | Code devise USD mais valeurs en euros |
| Hétérogénéité | Unités, formats ou définitions diffèrent | Milliers mélangés avec des millions |
| Doublon | La même observation économique apparaît plusieurs fois | Un même dépôt ingéré depuis deux flux |
| Obsolescence | Une valeur n’est plus à jour | Ancienne adresse du siège |

Les données manquantes ne doivent pas être traitées mécaniquement. Supprimer les lignes incomplètes peut biaiser l’échantillon lorsque l’absence de données est systématique. L’imputation conserve les observations, mais sous-estime l’incertitude si les valeurs comblées sont traitées comme des faits observés. L’analyste doit chercher pourquoi des valeurs manquent et, si c’est utile, ajouter un indicateur de valeur manquante.

### Transformations de données structurées

Opérations typiques :

- **Extraction :** obtenir un champ ou une sous-chaîne, comme l’année d’une date.
- **Filtrage :** conserver les observations qui satisfont une règle.
- **Sélection :** conserver les colonnes ou caractéristiques pertinentes.
- **Agrégation :** regrouper des enregistrements, par exemple des transactions en totaux mensuels.
- **Conversion :** changer d’unités, de formats ou de types de données.
- **Jointure :** combiner des sources à l’aide d’identifiants d’entité et de dates.
- **Winsorisation ou transformation robuste :** limiter l’effet des observations extrêmes en documentant la règle.

Deux transformations d’échelle courantes :

La **normalisation min–max** ramène une caractéristique dans un intervalle donné, souvent $[0,1]$ :

$$
x_i^*=\frac{x_i-x_{\min}}{x_{\max}-x_{\min}}.
$$

La **standardisation** produit une moyenne nulle et un écart-type égal à un :

$$
z_i=\frac{x_i-\mu}{\sigma}.
$$

Estimer $x_{\min}$, $x_{\max}$, $\mu$ et $\sigma$ **sur l’échantillon d’entraînement uniquement**, puis appliquer ces valeurs aux données de validation, de test et de production. Sinon, de l’information fuit d’un échantillon à l’autre.

> [!WARNING]
> L’alignement temporel (point-in-time) est essentiel en finance. Joindre les fondamentaux retraités d’aujourd’hui aux prix historiques crée un biais d’anticipation, car l’information révisée n’était pas disponible à l’époque. Les horodatages de publication et les compositions historiques d’indices doivent refléter ce qu’un investisseur pouvait réellement savoir.

## Préparer des données textuelles

Les projets textuels suivent le même déroulé général, mais exigent des traitements propres au texte :

1. formuler un objectif fondé sur le texte et définir entrées et sorties ;
2. collecter les documents via des flux sous licence, des API ou une collecte web autorisée ;
3. annoter les étiquettes lorsque l’apprentissage est supervisé ;
4. nettoyer, segmenter, normaliser et représenter numériquement les documents ;
5. explorer les termes et construire des caractéristiques textuelles ;
6. entraîner, valider, déployer et surveiller le modèle.

### Nettoyage et segmentation

Le nettoyage peut retirer les balises HTML, normaliser les espaces, résoudre les problèmes d’encodage et traiter la ponctuation ou les nombres. Faut-il retirer ponctuation et nombres ? Cela dépend de la tâche : `10%`, `$5bn` ou un point d’interrogation peuvent porter un sens important dans un texte financier.

La **segmentation (tokenisation)** découpe le texte en unités d’analyse. Un jeton (token) peut être un mot, un sous-mot, un signe de ponctuation ou un autre symbole ; ce n’est pas forcément un mot.

La normalisation peut comprendre :

- la mise en minuscules lorsque la casse n’est pas informative ;
- la suppression de certains mots vides, en conservant des mots comme `not` lorsqu’ils changent le sens ;
- la **racinisation (stemming)**, qui applique des règles mécaniques pour réduire les formes fléchies et peut créer des non-mots ;
- la **lemmatisation**, qui ramène un mot à sa forme de dictionnaire en tenant compte du contexte linguistique.

Ces étapes sont des choix, pas des obligations universelles. Les modèles de langage modernes conservent souvent l’ordre des mots, la ponctuation et les mots vides, et utilisent une segmentation en sous-mots plutôt qu’une chaîne classique de sac de mots.

### Sac de mots et matrice documents–termes

Une représentation en **sac de mots (BOW)** enregistre la fréquence de chaque terme du vocabulaire dans chaque document. C’est un vecteur de comptes ou de poids — pas simplement un ensemble — même s’il ignore l’ordre des mots et l’essentiel du contexte.

Pour $D$ documents et $V$ termes de vocabulaire, la matrice documents–termes est de dimension $D\times V$. L’élément $(d,t)$ contient le compte ou le poids du terme $t$ dans le document $d$. Cette matrice est souvent de grande dimension et creuse.

### Fréquence des termes et TF–IDF

La fréquence d’un terme $TF(t,d)$ mesure combien de fois le terme $t$ apparaît dans le document $d$, parfois divisée par le nombre de jetons du document. La fréquence documentaire est

$$
DF(t)=\#\{d:t\in d\}.
$$

Avec $N$ documents, la fréquence documentaire inverse peut se définir comme

$$
IDF(t)=\log\left(\frac{N}{DF(t)}\right),
$$

et

$$
TF\text{-}IDF(t,d)=TF(t,d)\times IDF(t).
$$

Les implémentations ajoutent souvent un lissage pour éviter une division par zéro. Le TF–IDF donne moins de poids aux termes présents dans presque tous les documents et davantage aux termes fréquents dans un document donné mais rares dans le corpus.

<iframe
  class="term-frequency-chart"
  src="/charts/text-term-frequency.html?lang=fr"
  title="Exemple de fréquence des termes dans des rapports d’analystes"
  loading="lazy"
></iframe>

Le graphique montre la fréquence brute dans le corpus. Un nuage de mots représente aussi la fréquence, mais des lignes alignées facilitent les comparaisons fines et la lecture des valeurs exactes. Les jetons extrêmement rares peuvent être des erreurs ou du bruit, tandis que les jetons extrêmement courants apportent peu d’information discriminante ; aucun des deux groupes ne doit être retiré sans tenir compte de la tâche.

## Exploration des données et développement des caractéristiques

### Analyse exploratoire des données

L’analyse exploratoire des données (EDA) utilise des résumés numériques et des visualisations pour comprendre les données avant le choix final du modèle.

Pour des données structurées, examiner :

- tendance centrale, dispersion, quantiles, asymétrie, aplatissement et données manquantes ;
- histogrammes, boîtes à moustaches, densités, nuages de points et cartes de chaleur des corrélations ;
- distributions univariées et relations multivariées ;
- stabilité dans le temps, entre secteurs, marchés ou autres groupes économiquement pertinents.

Les données de grande dimension peuvent être explorées à l’aide de techniques de réduction de dimension comme l’ACP, traitée dans [M6 : analyse en composantes principales](./M6%20Machine%20Learning.md#principal-components-analysis).

Pour des données textuelles, l’exploration peut porter sur la longueur des documents, la taille du vocabulaire, la fréquence des termes et des n-grammes, les cooccurrences, l’équilibre des classes, les thèmes, le sentiment et leur évolution dans le temps.

### Sélection des caractéristiques

La sélection conserve les prédicteurs existants utiles. Approches possibles :

- corrélation ou autres mesures d’association ;
- tests du khi-deux de dépendance entre caractéristiques catégorielles et classes ;
- information mutuelle entre une caractéristique et une cible ;
- importance fondée sur un modèle ou régularisation ;
- jugement économique et analyse de stabilité.

Pour des variables discrètes $X$ et $Y$, l’information mutuelle vaut

$$
I(X;Y)=\sum_{x,y}p(x,y)\log\left(\frac{p(x,y)}{p(x)p(y)}\right).
$$

Elle est nulle lorsque les variables sont indépendantes et positive lorsque connaître l’une réduit l’incertitude sur l’autre. L’information mutuelle n’est **pas bornée par 1 en général** ; son échelle dépend de la base du logarithme et des distributions des variables.

La sélection des caractéristiques doit se faire à l’intérieur du processus d’entraînement ou de validation croisée. Sélectionner les caractéristiques sur l’ensemble des données fait fuiter l’information des observations de validation et de test.

### Ingénierie des caractéristiques

L’ingénierie des caractéristiques crée des prédicteurs en transformant, décomposant ou combinant des variables brutes. Exemples :

- convertir le prix et le bénéfice par action en rendement bénéficiaire ou en PER ;
- calculer la croissance des ventes, le levier, la volatilité glissante ou la surprise par rapport au consensus ;
- convertir des horodatages en indicatrices de séance, de jour de la semaine ou de saison de publication ;
- créer des retards en n’utilisant que l’information disponible avant le moment de la prévision.

L’ingénierie de caractéristiques textuelles peut comprendre :

- remplacer les nombres par des jetons typés comme `<PERCENTAGE>` ou conserver leur ordre de grandeur ;
- construire des **n-grammes** comme `going concern` pour préserver des motifs utiles de plusieurs mots ;
- la **reconnaissance d’entités nommées** pour identifier entreprises, personnes, lieux, devises ou produits ;
- l’étiquetage morphosyntaxique ;
- des caractéristiques de sentiment, d’incertitude, de lisibilité ou de thème ;
- des plongements denses appris par des modèles de langage neuronaux.

> [!NOTE]
> Une caractéristique peut être statistiquement prédictive mais inutilisable économiquement si elle arrive trop tard, viole les conditions de licence, ne peut pas être reproduite en production ou reflète la cible par une fuite.

## Choix, entraînement et évaluation du modèle

Le choix de la méthode dépend de l’objectif d’apprentissage, du type de cible, de la forme des données, de la taille de l’échantillon, de la dimension, des relations non linéaires, des besoins d’interprétabilité, des contraintes de calcul et du coût des erreurs.

- Des données tabulaires structurées peuvent convenir à la régression pénalisée, aux arbres, aux forêts aléatoires ou aux réseaux de neurones.
- La classification de textes peut utiliser des caractéristiques BOW ou TF–IDF avec un classifieur linéaire, ou des plongements appris avec un réseau de neurones.
- La découverte de thèmes et le regroupement de documents sont des tâches non supervisées.
- Les images et l’audio exigent en général une extraction de caractéristiques spécialisée ou des architectures d’apprentissage profond.

Les algorithmes détaillés, la partition des échantillons, le contrôle du surapprentissage, la validation croisée et les mesures de performance sont traités dans [M6 : apprentissage automatique](./M6%20Machine%20Learning.md).

### Paramètres et hyperparamètres

- Les **paramètres** sont appris à partir des données d’entraînement, comme les coefficients de régression ou les poids d’un réseau de neurones.
- Les **hyperparamètres** régissent la structure du modèle ou son entraînement et sont choisis par l’analyste, en général à l’aide de données de validation ou d’une validation croisée. Exemples : la pénalité du LASSO, le nombre de voisins, la profondeur d’un arbre et le taux d’apprentissage.

Le **réglage (tuning)** cherche les valeurs d’hyperparamètres qui améliorent la performance en validation. L’échantillon de test final doit rester intact jusqu’à ce que le modèle et ses hyperparamètres aient été choisis.

### Évaluer une classification

| Réel / Prédit | Positif | Négatif |
| --- | ---: | ---: |
| Positif | Vrai positif (TP) | Faux négatif (FN ; erreur de deuxième espèce) |
| Négatif | Faux positif (FP ; erreur de première espèce) | Vrai négatif (TN) |

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\text{TPR}=\frac{TP}{TP+FN},
$$

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
F_1=2\frac{\text{Precision}\times\text{Recall}}
{\text{Precision}+\text{Recall}},
\qquad
FPR=\frac{FP}{FP+TN}.
$$

La courbe ROC (receiver operating characteristic) représente le TPR en fonction du FPR à mesure que le seuil de classification varie. Une courbe plus proche du coin supérieur gauche et une plus grande aire sous la courbe (AUC) indiquent une meilleure capacité de classement. Dire qu’une courbe est « plus convexe » est imprécis ; comparer plutôt la dominance et l’AUC.

L’exactitude peut être trompeuse avec des classes déséquilibrées. Choisir mesures et seuils selon le coût économique des deux types d’erreur, pas selon une convention universelle.

Pour des prévisions continues, les mesures courantes sont la MAE, la MSE et la racine de l’erreur quadratique moyenne :

$$
RMSE=\sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2}.
$$

La RMSE pénalise davantage les grandes erreurs que la MAE et s’exprime dans les mêmes unités que la cible.

## Gouvernance des données et des modèles

Un modèle techniquement exact peut tout de même échouer faute d’une bonne gouvernance. Un processus robuste documente :

- la provenance des sources, la propriété, les licences, le consentement et les usages autorisés ;
- les horodatages de collecte, les révisions et la disponibilité à chaque date ;
- les transformations, exclusions, étiquettes et versions des jeux de données ;
- les contrôles d’accès, les politiques de conservation, la confidentialité et la cybersécurité ;
- les hypothèses du modèle, les résultats de validation, les limites et la supervision humaine ;
- la performance en production, la dérive, les incidents, le réentraînement et les critères de retrait.

### Biais et dérive

- **Biais de sélection :** l’échantillon observé ne représente pas la population visée.
- **Biais du survivant :** les entités défaillantes ou radiées de la cote sont omises.
- **Biais d’anticipation :** une information future ou révisée ultérieurement entre dans des caractéristiques historiques.
- **Biais d’étiquetage :** les étiquettes de la cible contiennent des erreurs humaines ou de processus systématiques.
- **Biais de substitution :** une caractéristique apparemment neutre capte indirectement une caractéristique sensible ou interdite.
- **Dérive des données :** la distribution des entrées change.
- **Dérive de concept :** la relation entre les entrées et la cible change.

La surveillance doit suivre à la fois la performance prédictive et le processus générateur des données. Une exactitude moyenne stable peut masquer une dégradation dans un sous-groupe important ou un régime de marché.

## Liste de contrôle pour l’examen

- Distinguer données structurées, semi-structurées et non structurées.
- Expliquer volume, vélocité, variété et véracité.
- Distinguer préparation, mise en forme, exploration, sélection et ingénierie des caractéristiques.
- Distinguer normalisation et standardisation, et éviter les fuites lors de l’estimation des paramètres d’échelle.
- Expliquer segmentation, racinisation, lemmatisation, BOW, matrices documents–termes, n-grammes et TF–IDF.
- Savoir qu’un jeton n’est pas forcément un mot et qu’un BOW stocke des comptes ou des poids mais perd l’ordre.
- Interpréter le khi-deux et l’information mutuelle comme des mesures d’association, sans en déduire de causalité.
- Distinguer paramètres et hyperparamètres.
- Adapter les mesures de classification et de régression à l’objectif d’analyse.
- Reconnaître les risques liés au point-in-time, à la confidentialité, aux licences, aux biais, à la dérive et à la gouvernance.

<style>
.term-frequency-chart {
  display: block;
  width: 100%;
  height: 470px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .term-frequency-chart { height: 520px; }
}
</style>
