---
title: Apprentissage automatique
---

# Apprentissage automatique

L’apprentissage automatique (machine learning, ML) utilise des algorithmes pour apprendre des motifs à partir des données, à des fins de prévision, de classification ou de découverte de structure. Par rapport aux modèles statistiques traditionnels, les méthodes de ML privilégient souvent la **performance prédictive hors échantillon** plutôt que l’interprétation des coefficients, et traitent avec plus de souplesse les relations de grande dimension ou non linéaires. Cette souplesse est utile, mais elle accroît aussi le risque de surapprentissage.

Les trois grands types d’apprentissage sont :

| Type d’apprentissage | Retour disponible | Objectif typique | Exemple |
| --- | --- | --- | --- |
| Supervisé | Résultats étiquetés | Prévoir une valeur numérique ou une classe | Prévoir des bénéfices ; classer des défauts |
| Non supervisé | Aucun résultat étiqueté | Découvrir une structure ou réduire la dimension | Segmenter des entreprises ; construire des facteurs |
| Par renforcement | Récompenses issues d’actions successives | Apprendre une politique qui maximise la récompense cumulée | Trading ou exécution dynamiques |

## Apprentissage supervisé

L’apprentissage supervisé estime une correspondance entre des caractéristiques $X$ et une cible connue $Y$ à partir d’observations étiquetées $(x_i,y_i)$.

- La **régression** prévoit une cible continue, comme un rendement ou un prix.
- La **classification** prévoit une classe discrète, comme défaut ou absence de défaut.

La régression multiple est donc une méthode d’apprentissage supervisé. Ce qui distingue de nombreuses méthodes de ML, c’est l’usage de la régularisation, de structures non linéaires flexibles et d’une sélection de modèle fondée sur la validation.

### Régression pénalisée et LASSO

Les moindres carrés ordinaires minimisent la somme des carrés des erreurs. La régression pénalisée ajoute un coût pour les grands coefficients :

$$
\min_{\beta_0,\boldsymbol\beta}
\left\{
\sum_{i=1}^{n}(y_i-\beta_0-x_i'\boldsymbol\beta)^2
+\lambda P(\boldsymbol\beta)
\right\}.
$$

Le paramètre de réglage $\lambda\geq 0$ contrôle la régularisation. Lorsque $\lambda=0$, le modèle se réduit aux MCO ; augmenter $\lambda$ contracte plus fortement les coefficients, ce qui augmente le biais mais peut réduire la variance et l’erreur hors échantillon. Il faut en général standardiser les caractéristiques avant la pénalisation, car la pénalité dépend de l’échelle des coefficients.

Le **LASSO (least absolute shrinkage and selection operator)** utilise une pénalité $L_1$ :

$$
P(\boldsymbol\beta)=\sum_{j=1}^{p}|\beta_j|.
$$

Le LASSO peut ramener certains coefficients exactement à zéro : il effectue donc une sélection de variables en plus de la régularisation. À l’inverse, la régression ridge utilise $\sum_j\beta_j^2$ et contracte en général les coefficients vers zéro, sans les annuler exactement.

> [!IMPORTANT]
> La pénalité porte sur l’ampleur des coefficients, pas directement sur le nombre de caractéristiques incluses. Le LASSO tend néanmoins à produire des modèles parcimonieux, car la pénalité $L_1$ peut annuler des coefficients.

#### PyTorch : régression LASSO

Les optimiseurs PyTorch n’ont pas besoin d’un estimateur LASSO spécifique : il suffit d’ajouter la pénalité $L_1$ à la perte d’entraînement. Ne pas pénaliser la constante.

```python
import torch
from torch import nn

torch.manual_seed(0)
X = torch.randn(200, 8)
y = X @ torch.tensor([2.0, 0, 0, -1.5, 0, 0, 0.5, 0]) + 0.3 * torch.randn(200)
X = (X - X.mean(0)) / X.std(0)  # scale before penalizing coefficients

model = nn.Linear(X.shape[1], 1)
optimizer = torch.optim.Adam(model.parameters(), lr=0.03)
lam = 0.05

for _ in range(1_000):
    prediction = model(X).squeeze(1)
    mse = (prediction - y).square().mean()
    l1_penalty = model.weight.abs().sum()
    loss = mse + lam * l1_penalty
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

print(model.weight.detach())  # small coefficients are candidates for removal
```

Les méthodes de gradient rendent souvent les coefficients non pertinents très petits plutôt que numériquement nuls. Appliquer une tolérance explicite si un ensemble de caractéristiques exactement parcimonieux est requis.

### Machine à vecteurs de support

Une machine à vecteurs de support (SVM) cherche un hyperplan séparateur

$$
\boldsymbol w'x+b=0
$$

qui maximise la marge entre deux classes. Les observations les plus proches de la frontière sont les **vecteurs de support** ; ce sont elles qui déterminent la frontière ajustée.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=svm&lang=fr" title="Visualisation de la marge d’une machine à vecteurs de support" loading="lazy"></iframe>

Pour des données parfaitement séparables, une SVM à marge rigide résout

$$
\min_{\boldsymbol w,b}\frac{1}{2}\|\boldsymbol w\|^2
\quad\text{subject to}\quad
y_i(\boldsymbol w'x_i+b)\geq 1.
$$

Minimiser $\|\boldsymbol w\|$ revient à maximiser la marge. Une SVM à **marge souple** tolère des violations grâce à des variables d’écart $\xi_i$ :

$$
\min \frac{1}{2}\|\boldsymbol w\|^2+C\sum_i\xi_i,
\qquad
y_i(\boldsymbol w'x_i+b)\geq1-\xi_i.
$$

Un $C$ plus grand pénalise davantage les erreurs d’entraînement, ce qui donne en général une marge plus étroite et un ajustement plus complexe. Un $C$ plus petit accepte davantage de violations en échange d’une marge plus large. Pour une séparation non linéaire, un **noyau** projette implicitement les caractéristiques dans un espace de plus grande dimension ; les noyaux polynomial et à fonction de base radiale sont courants.

#### PyTorch : SVM linéaire à marge souple

Avec des étiquettes codées $-1$ et $+1$, la perte charnière (hinge loss) vaut $\max(0,1-y_if(x_i))$.

```python
class LinearSVM(nn.Module):
    def __init__(self, n_features):
        super().__init__()
        self.linear = nn.Linear(n_features, 1)

    def forward(self, x):
        return self.linear(x).squeeze(1)  # signed decision score

svm = LinearSVM(X_train.shape[1])
optimizer = torch.optim.SGD(svm.parameters(), lr=0.01)
C = 1.0

for _ in range(500):
    scores = svm(X_train)
    hinge = torch.relu(1 - y_train * scores).mean()  # y_train ∈ {-1, +1}
    margin_penalty = 0.5 * svm.linear.weight.square().sum()
    loss = margin_penalty + C * hinge
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

y_pred = torch.where(svm(X_test) >= 0, 1, -1)
```

Ce code implémente une SVM linéaire. L’entraînement d’une SVM à noyau n’est pas un module standard de PyTorch et relève normalement d’un solveur spécialisé.

### K plus proches voisins

La méthode des K plus proches voisins (KNN) est non paramétrique. Pour une nouvelle observation $x_0$, on calcule sa distance aux observations d’entraînement, on retient les $K$ plus proches et on attribue la classe majoritaire :

$$
\hat y(x_0)=\operatorname{mode}\{y_i:i\in N_K(x_0)\}.
$$

Pour la régression, on utilise la moyenne (éventuellement pondérée par la distance) des valeurs cibles des voisins.

Exemple avec $K=3$ : si les observations les plus proches sont `default`, `no default` et `default`, la classe prédite est `default`.

KNN est sensible à l’échelle des caractéristiques ; la standardisation est donc importante. Un petit $K$ produit une frontière flexible, à faible biais mais forte variance ; un grand $K$ produit une frontière plus lisse et plus biaisée. Choisir $K$ par validation ou validation croisée.

#### PyTorch : classification KNN

```python
def knn_predict(X_train, y_train, X_new, k=3):
    # Rows of distances: new observations; columns: training observations.
    distances = torch.cdist(X_new, X_train)
    neighbor_index = distances.topk(k, largest=False).indices
    neighbor_labels = y_train[neighbor_index]
    return torch.mode(neighbor_labels, dim=1).values

mean, std = X_train.mean(0), X_train.std(0).clamp_min(1e-8)
X_train_scaled = (X_train - mean) / std
X_test_scaled = (X_test - mean) / std  # use training statistics only
y_pred = knn_predict(X_train_scaled, y_train, X_test_scaled, k=3)
```

### Arbres de classification et de régression

Un arbre de classification et de régression (CART) partitionne récursivement l’espace des caractéristiques à l’aide de règles comme $x_j<c$. Chaque nœud interne contient une caractéristique et un seuil ; chaque **feuille** terminale fournit une prédiction.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=cart&lang=fr" title="Arbre de classification des hausses de dividende" loading="lazy"></iframe>

Dans un arbre de classification, une feuille prédit normalement sa classe majoritaire ; dans un arbre de régression, la valeur cible moyenne de la feuille. Chaque division est choisie pour réduire l’impureté du nœud ou l’erreur de prédiction. Les critères de classification courants sont l’indice de Gini et l’entropie ; les arbres de régression minimisent en général l’erreur quadratique.

Les arbres profonds peuvent ajuster le bruit. Les leviers de contrôle de la complexité sont la profondeur maximale, le nombre minimal d’observations par nœud ou par feuille et le nombre maximal de feuilles. L’**élagage** supprime les branches dont l’apport prédictif ne justifie pas la complexité.

#### PyTorch : une division CART de classification

La routine pédagogique suivante trouve la caractéristique et le seuil qui minimisent l’impureté de Gini pondérée. L’appliquer récursivement construit un arbre.

```python
def gini(y):
    if y.numel() == 0:
        return torch.tensor(0.0)
    proportions = torch.bincount(y, minlength=2).float() / y.numel()
    return 1 - proportions.square().sum()

def best_split(X, y):
    best = {"impurity": float("inf"), "feature": None, "threshold": None}
    n = y.numel()
    for feature in range(X.shape[1]):
        values = torch.unique(X[:, feature]).sort().values
        thresholds = (values[:-1] + values[1:]) / 2
        for threshold in thresholds:
            left = X[:, feature] <= threshold
            score = (left.sum() * gini(y[left]) + (~left).sum() * gini(y[~left])) / n
            if score.item() < best["impurity"]:
                best = {"impurity": score.item(), "feature": feature,
                        "threshold": threshold.item()}
    return best

root = best_split(X_train, y_train.long())
```

Les arbres utilisés en production implémentent aussi des règles d’arrêt, des nœuds récursifs, la gestion des valeurs manquantes et l’élagage.

### Apprentissage ensembliste

Les méthodes ensemblistes combinent plusieurs modèles :

- Un **classifieur par vote** combine les prédictions de classe, généralement à la majorité.
- L’**agrégation bootstrap (bagging)** entraîne des modèles similaires sur des échantillons bootstrap et agrège leurs prédictions. La moyenne réduit la variance lorsque les modèles ne sont pas parfaitement corrélés.
- Une **forêt aléatoire** ajoute du hasard en ne considérant qu’un sous-ensemble aléatoire de caractéristiques à chaque division. Cela décorrèle les arbres et améliore en général le bénéfice de la moyenne.

> [!NOTE]
> Un arbre de décision unique et profond a un faible biais mais une forte variance. Le bagging et les forêts aléatoires s’attaquent principalement à cette variance. Une forêt aléatoire est en général moins interprétable qu’un arbre unique.

#### PyTorch : prédictions par bagging

Ci-dessous, `fit_model` peut être n’importe quelle fonction d’entraînement qui renvoie un classifieur PyTorch ajusté. Les opérations clés de l’ensemble sont l’échantillonnage bootstrap et la moyenne des probabilités.

```python
def fit_bagged_models(X, y, fit_model, n_models=20):
    models = []
    generator = torch.Generator().manual_seed(0)
    for _ in range(n_models):
        index = torch.randint(len(X), (len(X),), generator=generator)
        models.append(fit_model(X[index], y[index]))
    return models

@torch.no_grad()
def bagged_binary_prediction(models, X):
    probabilities = torch.stack([torch.sigmoid(model(X).squeeze(1)) for model in models])
    return (probabilities.mean(0) >= 0.5).long()
```

Une forêt aléatoire tire en plus, de façon indépendante à chaque division, les caractéristiques candidates ; l’échantillonnage bootstrap seul produit du bagging, pas une forêt aléatoire.

## Apprentissage non supervisé

L’apprentissage non supervisé utilise des caractéristiques sans cible étiquetée. Ses applications principales sont la **réduction de dimension** et le **partitionnement (clustering)**.

### Analyse en composantes principales {#principal-components-analysis}

L’analyse en composantes principales (ACP) transforme des caractéristiques corrélées en combinaisons linéaires mutuellement non corrélées. Pour un vecteur de caractéristiques standardisé $x$, la composante principale $k$ est

$$
PC_k=\boldsymbol w_k'x,
$$

où $\boldsymbol w_k$ est un vecteur propre unitaire de la matrice de covariance ou de corrélation. Sa valeur propre $\lambda_k$ est la variance captée par cette composante. La part de variance expliquée est

$$
\frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}.
$$

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=pca&lang=fr" title="Convergence des caractéristiques en analyse en composantes principales" loading="lazy"></iframe>

La première composante est la direction de variance maximale, c’est-à-dire la droite qui minimise l’erreur de projection orthogonale au carré. Chaque composante suivante maximise la variance restante sous contrainte d’orthogonalité avec les précédentes.

Étapes typiques :

1. Standardiser les caractéristiques lorsque leurs unités ou leurs échelles diffèrent.
2. Calculer la matrice de covariance ou de corrélation.
3. En obtenir les vecteurs propres et les valeurs propres.
4. Classer les composantes par variance expliquée et en retenir assez pour l’objectif d’analyse.
5. Projeter les observations sur les composantes retenues.

#### PyTorch : ACP

```python
mean = X_train.mean(0)
std = X_train.std(0).clamp_min(1e-8)
X_standardized = (X_train - mean) / std

# V contains the principal directions; singular values determine explained variance.
U, singular_values, V = torch.pca_lowrank(
    X_standardized, q=min(X_standardized.shape)
)
eigenvalues = singular_values.square() / (len(X_standardized) - 1)
explained_ratio = eigenvalues / eigenvalues.sum()
n_components = int((explained_ratio.cumsum(0) < 0.90).sum().item() + 1)
components = V[:, :n_components]
X_reduced = X_standardized @ components

# Transform new observations with training-set mean, scale, and components.
X_test_reduced = ((X_test - mean) / std) @ components
```

L’ACP est linéaire et non supervisée : une composante peut expliquer une grande part de la variance des caractéristiques sans être utile pour prévoir une cible donnée. Le signe des composantes est arbitraire, et leur interprétation économique peut être difficile.

### Autoencodeurs

Un autoencodeur est un réseau de neurones entraîné à reproduire son entrée :

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=autoencoder&lang=fr" title="Déroulé de l’entraînement d’un autoencodeur" loading="lazy"></iframe>

L’encodeur compresse $x$ en une représentation de plus faible dimension $z=f_\theta(x)$, et le décodeur la reconstruit en $\hat x=g_\phi(z)$. L’entraînement minimise la perte de reconstruction, par exemple

$$
\min_{\theta,\phi}\sum_i\|x_i-g_\phi(f_\theta(x_i))\|^2.
$$

Un goulot d’étranglement force le réseau à conserver la structure importante. Contrairement à l’ACP, un autoencodeur peut apprendre des représentations non linéaires, mais il demande plus de données et de réglages et il est moins transparent.

#### PyTorch : autoencodeur

```python
class Autoencoder(nn.Module):
    def __init__(self, n_features, latent_dim=3):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(n_features, 16), nn.ReLU(), nn.Linear(16, latent_dim)
        )
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 16), nn.ReLU(), nn.Linear(16, n_features)
        )

    def forward(self, x):
        return self.decoder(self.encoder(x))

autoencoder = Autoencoder(X_train.shape[1])
optimizer = torch.optim.Adam(autoencoder.parameters(), lr=1e-3)

for _ in range(500):
    reconstruction = autoencoder(X_train)
    loss = (reconstruction - X_train).square().mean()
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

latent_features = autoencoder.encoder(X_train).detach()
```

### Partitionnement en K moyennes

Les K moyennes (K-means) répartissent les observations en un nombre $K$ fixé à l’avance de groupes disjoints. La méthode minimise la distance au carré à l’intérieur des groupes :

$$
\min_{C_1,\ldots,C_K}
\sum_{k=1}^{K}\sum_{x_i\in C_k}\|x_i-\boldsymbol\mu_k\|^2,
$$

où $\boldsymbol\mu_k$ est le centroïde du groupe $k$.

L’algorithme alterne deux étapes :

1. Affecter chaque observation au centroïde le plus proche.
2. Recalculer chaque centroïde comme la moyenne des observations qui lui sont affectées.

Répéter jusqu’à ce que les affectations se stabilisent ou que l’objectif ne change presque plus.

#### PyTorch : K moyennes

```python
def kmeans(X, k, max_iterations=100, seed=0):
    generator = torch.Generator(device=X.device).manual_seed(seed)
    centroids = X[torch.randperm(len(X), generator=generator, device=X.device)[:k]].clone()

    for _ in range(max_iterations):
        labels = torch.cdist(X, centroids).argmin(dim=1)
        updated = torch.stack([
            X[labels == cluster].mean(0) if (labels == cluster).any() else centroids[cluster]
            for cluster in range(k)
        ])
        if torch.allclose(updated, centroids, atol=1e-5):
            break
        centroids = updated
    return labels, centroids

X_scaled = (X - X.mean(0)) / X.std(0).clamp_min(1e-8)
clusters, centroids = kmeans(X_scaled, k=3)
```

Les K moyennes sont sensibles à l’échelle, aux valeurs aberrantes, aux centroïdes initiaux et au $K$ choisi. Plusieurs initialisations réduisent le risque d’une mauvaise solution locale. La méthode du coude ou le score de silhouette aident à comparer des valeurs de $K$, mais les groupes doivent aussi avoir un sens économique.

### Classification hiérarchique

La classification hiérarchique produit une suite de groupes emboîtés représentée par un **dendrogramme** :

- La classification **ascendante** (agglomérative) part de groupes d’une seule observation et fusionne à répétition la paire la plus proche.
- La classification **descendante** (divisive) part d’un seul groupe et le scinde à répétition.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=hierarchy&lang=fr" title="Dendrogramme de classification hiérarchique" loading="lazy"></iframe>

Les méthodes ascendantes exigent une mesure de distance et un **critère d’agrégation** qui définit la distance entre groupes. Le lien simple utilise la paire la plus proche, le lien complet la plus éloignée et le lien moyen la distance moyenne entre paires. Couper le dendrogramme à une hauteur choisie détermine les groupes finaux ; contrairement aux K moyennes, l’analyste n’a pas à fixer $K$ avant de construire la hiérarchie.

#### PyTorch : classification ascendante

Cette implémentation compacte utilise le lien moyen et enregistre la séquence des fusions.

```python
def agglomerative_average_linkage(X):
    clusters = [torch.tensor([i], device=X.device) for i in range(len(X))]
    merges = []

    while len(clusters) > 1:
        best_distance, best_pair = float("inf"), None
        for i in range(len(clusters)):
            for j in range(i + 1, len(clusters)):
                distance = torch.cdist(X[clusters[i]], X[clusters[j]]).mean().item()
                if distance < best_distance:
                    best_distance, best_pair = distance, (i, j)
        i, j = best_pair
        merges.append((clusters[i].tolist(), clusters[j].tolist(), best_distance))
        merged = torch.cat((clusters[i], clusters[j]))
        clusters = [c for m, c in enumerate(clusters) if m not in (i, j)] + [merged]
    return merges

merge_history = agglomerative_average_linkage(X_scaled)
```

## Réseaux de neurones et apprentissage profond

Un neurone artificiel calcule une somme pondérée et applique une fonction d’activation :

$$
z=\sum_{j=1}^{p}w_jx_j+b,
\qquad
a=g(z).
$$

Les fonctions d’activation non linéaires — comme l’unité linéaire rectifiée $g(z)=\max(0,z)$ — permettent au réseau d’apprendre des relations non linéaires.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=neural&lang=fr" title="Architecture d’un réseau de neurones à propagation avant" loading="lazy"></iframe>

- La **couche d’entrée** reçoit les caractéristiques.
- Une ou plusieurs **couches cachées** apprennent des représentations intermédiaires.
- La **couche de sortie** produit une prévision numérique ou une probabilité de classe.

Lors de la **propagation avant**, les entrées traversent le réseau pour produire $\hat y$. Une fonction de perte $L(y,\hat y)$ mesure l’erreur. La **rétropropagation** applique la règle de dérivation en chaîne pour calculer le gradient de la perte par rapport à chaque poids. La descente de gradient met ensuite à jour les paramètres :

$$
\theta^{(m+1)}=\theta^{(m)}-\eta\nabla_\theta L(\theta^{(m)}),
$$

où $\eta$ est le taux d’apprentissage. Un taux trop élevé peut dépasser l’optimum ; un taux trop faible peut converger lentement.

L’**apprentissage profond** utilise des réseaux de neurones à plusieurs couches cachées. Il peut servir à des tâches supervisées, à l’apprentissage non supervisé de représentations et à l’apprentissage par renforcement. Les réseaux profonds peuvent approcher des fonctions complexes, mais ils sont gourmands en données et en calcul, difficiles à interpréter et sujets au surapprentissage. Les méthodes de régularisation incluent les pénalités sur les poids, le dropout et l’arrêt précoce.

### PyTorch : réseau de classification à propagation avant

`BCEWithLogitsLoss` combine une transformation sigmoïde et une entropie croisée binaire numériquement stable.

```python
class DefaultClassifier(nn.Module):
    def __init__(self, n_features):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(n_features, 32),
            nn.ReLU(),
            nn.Dropout(0.20),
            nn.Linear(32, 16),
            nn.ReLU(),
            nn.Linear(16, 1),
        )

    def forward(self, x):
        return self.network(x).squeeze(1)

network = DefaultClassifier(X_train.shape[1])
optimizer = torch.optim.AdamW(network.parameters(), lr=1e-3, weight_decay=1e-4)
criterion = nn.BCEWithLogitsLoss()

network.train()
for _ in range(300):
    logits = network(X_train)
    loss = criterion(logits, y_train.float())
    optimizer.zero_grad()
    loss.backward()                 # backpropagation
    optimizer.step()                # gradient-descent update

network.eval()
with torch.no_grad():
    probability = torch.sigmoid(network(X_test))
    y_pred = (probability >= 0.5).long()
```

## Apprentissage par renforcement

L’apprentissage par renforcement (RL) porte sur des décisions séquentielles. Un **agent** observe un état $s_t$, choisit une action $a_t$, reçoit une récompense $r_{t+1}$ et passe à un nouvel état $s_{t+1}$. Une **politique** $\pi(a\mid s)$ précise comment les actions sont choisies.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=rl&lang=fr" title="Boucle de rétroaction de l’apprentissage par renforcement" loading="lazy"></iframe>

L’objectif est de maximiser l’espérance de la récompense cumulée actualisée :

$$
E\left[\sum_{k=0}^{\infty}\gamma^k r_{t+k+1}\right],
\qquad 0\leq\gamma<1.
$$

L’agent doit arbitrer entre l’**exploration** d’actions peu connues et l’**exploitation** des actions jugées les meilleures à ce stade. En finance, le RL peut s’appliquer à l’exécution ou à l’allocation dynamique, mais les coûts de transaction, l’instabilité des régimes de marché, le nombre limité d’observations et les simulations irréalistes créent un risque de modèle important.

### PyTorch : Q-learning tabulaire

Pour un petit environnement discret, un tenseur peut stocker la valeur d’action $Q(s,a)$. L’environnement doit renvoyer `(next_state, reward, terminated)` depuis `step(action)`.

```python
Q = torch.zeros(n_states, n_actions)
alpha, gamma, epsilon = 0.10, 0.95, 0.10
generator = torch.Generator().manual_seed(0)

for episode in range(1_000):
    state = env.reset()
    terminated = False
    while not terminated:
        explore = torch.rand((), generator=generator).item() < epsilon
        action = torch.randint(n_actions, (), generator=generator).item() \
            if explore else Q[state].argmax().item()
        next_state, reward, terminated = env.step(action)

        target = reward if terminated else reward + gamma * Q[next_state].max()
        Q[state, action] += alpha * (target - Q[state, action])
        state = next_state

policy = Q.argmax(dim=1)
```

Le Q-learning profond remplace la table par un réseau de neurones et requiert en outre un rejeu d’expérience et un réseau cible pour stabiliser l’entraînement.

## Évaluer la performance d’un algorithme

### Échantillons d’entraînement, de validation et de test

- L’**échantillon d’entraînement** sert à estimer les paramètres du modèle.
- L’**échantillon de validation** sert à choisir les algorithmes et les hyperparamètres, comme $\lambda$, $K$, la profondeur d’un arbre ou l’architecture d’un réseau.
- L’**échantillon de test** fournit une estimation finale de la performance sur des données jamais utilisées.

#### PyTorch : partition aléatoire des données

```python
generator = torch.Generator().manual_seed(0)
order = torch.randperm(len(X), generator=generator)
n_train, n_valid = int(0.60 * len(X)), int(0.20 * len(X))

train_index = order[:n_train]
valid_index = order[n_train:n_train + n_valid]
test_index = order[n_train + n_valid:]

X_train, y_train = X[train_index], y[train_index]
X_valid, y_valid = X[valid_index], y[valid_index]
X_test, y_test = X[test_index], y[test_index]
```

Pour des observations temporelles, remplacer `randperm` par des plages d’indices consécutives et chronologiques.

> [!WARNING]
> Ne pas régler un modèle à répétition sur l’échantillon de test. Cela fait fuiter de l’information et transforme l’échantillon de test en un autre échantillon de validation. Pour les séries temporelles, un mélange aléatoire peut aussi faire fuiter de l’information future ; utiliser des partitions chronologiques ou une validation à fenêtre glissante.

### Surapprentissage, généralisation et arbitrage biais–variance

La **généralisation** est la capacité à bien fonctionner sur des données inédites. Il y a sous-apprentissage lorsqu’un modèle est trop simple pour apprendre le signal, et surapprentissage lorsqu’il apprend un bruit d’entraînement qui ne se généralise pas.

| Ajustement | Erreur d’entraînement | Erreur de validation/test | Diagnostic typique |
| --- | --- | --- | --- |
| Sous-ajusté | Élevée | Élevée | Biais élevé ; modèle trop simple |
| Ajustement approprié | Assez faible | Proche de son minimum | Bon équilibre biais–variance |
| Surajusté | Très faible | En hausse ou élevée | Variance élevée ; modèle trop complexe |

Pour l’erreur de prédiction quadratique, la décomposition conceptuelle est

$$
E[(Y-\hat f(X))^2]
=\operatorname{Bias}(\hat f(X))^2
+\operatorname{Var}(\hat f(X))
+\sigma_\varepsilon^2.
$$

Le bruit irréductible $\sigma_\varepsilon^2$ est parfois appelé erreur de base. Accroître la complexité du modèle réduit en général le biais et augmente la variance. Les moyens de limiter le surapprentissage incluent la régularisation, la sélection de caractéristiques ou l’ACP, l’élagage des arbres, des architectures moins profondes, davantage de données d’entraînement et l’arrêt précoce.

Une **courbe d’apprentissage** représente les erreurs d’entraînement et de validation en fonction de la taille de l’échantillon d’entraînement. Deux erreurs élevées qui convergent suggèrent un sous-apprentissage. Un écart important et persistant — faible erreur d’entraînement, erreur de validation plus élevée — suggère un surapprentissage. Si la courbe de validation s’améliore encore quand les données augmentent, des observations supplémentaires peuvent aider.

### Validation croisée à K blocs

Dans une validation croisée à $K$ blocs :

1. Diviser les données d’entraînement en $K$ blocs.
2. Entraîner sur $K-1$ blocs et valider sur le bloc restant.
3. Répéter jusqu’à ce que chaque bloc ait servi de données de validation.
4. Faire la moyenne des $K$ erreurs de validation et retenir les hyperparamètres donnant le meilleur résultat.

Après ce choix, réestimer la spécification retenue sur les données d’entraînement et de validation disponibles, puis l’évaluer une seule fois sur l’échantillon de test. La validation à $K$ blocs aléatoire ordinaire ne convient pas lorsque l’ordre temporel compte.

#### PyTorch : indices des K blocs

```python
def kfold_indices(n, k=5, seed=0):
    order = torch.randperm(n, generator=torch.Generator().manual_seed(seed))
    folds = torch.tensor_split(order, k)
    for i in range(k):
        valid_index = folds[i]
        train_index = torch.cat([folds[j] for j in range(k) if j != i])
        yield train_index, valid_index

validation_losses = []
for train_index, valid_index in kfold_indices(len(X_train), k=5):
    model = fit_model(X_train[train_index], y_train[train_index])
    with torch.no_grad():
        validation_losses.append(
            criterion(model(X_train[valid_index]), y_train[valid_index]).item()
        )
mean_cv_loss = sum(validation_losses) / len(validation_losses)
```

### Mesures de performance

En régression, les mesures de perte courantes sont l’erreur quadratique moyenne (MSE) et l’erreur absolue moyenne (MAE) :

$$
MSE=\frac{1}{n}\sum_i(y_i-\hat y_i)^2,
\qquad
MAE=\frac{1}{n}\sum_i|y_i-\hat y_i|.
$$

En classification, une matrice de confusion distingue vrais positifs, faux positifs, vrais négatifs et faux négatifs. Mesures utiles :

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\frac{TP}{TP+FN}.
$$

L’exactitude peut être trompeuse avec des classes déséquilibrées. Pour des défauts rares, par exemple, un modèle qui prédit toujours « pas de défaut » peut afficher une exactitude élevée mais un rappel nul sur les défauts réels. La bonne mesure dépend du coût économique de chaque type d’erreur.

#### PyTorch : mesures de performance

```python
def classification_metrics(y_true, y_pred):
    y_true, y_pred = y_true.bool(), y_pred.bool()
    tp = (y_true & y_pred).sum().float()
    tn = (~y_true & ~y_pred).sum().float()
    fp = (~y_true & y_pred).sum().float()
    fn = (y_true & ~y_pred).sum().float()
    accuracy = (tp + tn) / (tp + tn + fp + fn)
    precision = tp / (tp + fp).clamp_min(1)
    recall = tp / (tp + fn).clamp_min(1)
    return {"accuracy": accuracy, "precision": precision, "recall": recall}

mse = (y_test_regression - prediction).square().mean()
mae = (y_test_regression - prediction).abs().mean()
metrics = classification_metrics(y_test, y_pred)
```

## Guide de choix du modèle

| Objectif et données | Méthodes de départ utiles | Points d’attention |
| --- | --- | --- |
| Cible continue ; nombreuses caractéristiques corrélées | Régression pénalisée | Standardiser ; régler la pénalité ; relativement interprétable |
| Classe binaire ; frontière à peu près séparable | SVM ou classifieur de type logistique | Standardiser ; régler marge/noyau ; les probabilités peuvent nécessiter un calibrage |
| La similarité locale est informative | KNN | Standardiser ; régler $K$ ; prédiction lente en grande dimension |
| Interactions non linéaires et interprétabilité comptent | CART | Facile à expliquer ; instable et à forte variance |
| La prédiction non linéaire puissante est prioritaire | Forêt aléatoire ou réseau de neurones | Plus de souplesse ; moins de transparence et plus de réglages |
| Réduire des caractéristiques corrélées | ACP | Linéaire, sensible à l’échelle, indépendante de la cible |
| Trouver un nombre fixe de groupes compacts | K moyennes | Choisir $K$ ; sensible à l’échelle et aux valeurs aberrantes |
| Explorer une structure de groupes emboîtés | Classification hiérarchique | Choisir distance et agrégation ; le dendrogramme aide à interpréter |
| Apprendre des caractéristiques non linéaires de faible dimension | Autoencodeur | Plus souple que l’ACP ; gourmand en données et moins interprétable |
| Optimiser des actions séquentielles | Apprentissage par renforcement | Exploration, récompenses différées et risque d’environnement/de modèle |

Le choix du modèle ne dépend pas seulement de la non-linéarité. Il doit refléter le type de cible, la taille de l’échantillon, la dimension, les exigences d’interprétabilité, le coût de calcul, la fonction de perte économique et — surtout — une performance hors échantillon crédible.

## Liste de contrôle pour l’examen

- Distinguer apprentissage supervisé, non supervisé et par renforcement.
- Distinguer les cibles de régression des cibles de classification.
- Expliquer comment la régularisation modifie l’arbitrage biais–variance.
- Savoir quelles méthodes exigent une mise à l’échelle des caractéristiques et quels hyperparamètres contrôlent la complexité.
- Comparer un arbre unique, le bagging et une forêt aléatoire.
- Distinguer ACP, autoencodeurs, K moyennes et classification hiérarchique.
- Séparer les rôles d’entraînement, de validation et de test, et repérer les fuites de données.
- Diagnostiquer sous-apprentissage et surapprentissage à partir des performances d’entraînement et de validation.
- Choisir les mesures d’évaluation en fonction du coût économique des erreurs.

<style>
.ml-concept-chart {
  display: block;
  width: 100%;
  height: 455px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .ml-concept-chart { height: 520px; }
}
</style>
