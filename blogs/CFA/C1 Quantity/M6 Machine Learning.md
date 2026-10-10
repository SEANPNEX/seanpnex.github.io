# Machine Learning

Machine learning (ML) uses algorithms to learn patterns from data for prediction, classification, or structure discovery. Compared with traditional statistical models, ML methods often emphasize **out-of-sample predictive performance** over coefficient interpretation and can handle high-dimensional or nonlinear relationships more flexibly. This flexibility is useful, but it also increases the risk of overfitting.

The three broad learning types are:

| Learning type | Feedback available | Typical objective | Example |
| --- | --- | --- | --- |
| Supervised | Labeled outcomes | Predict a numeric value or class | Forecast earnings; classify defaults |
| Unsupervised | No labeled outcome | Discover structure or reduce dimension | Segment companies; construct factors |
| Reinforcement | Rewards from sequential actions | Learn a policy that maximizes cumulative reward | Dynamic trading or execution |

## Supervised Learning

Supervised learning estimates a mapping from features $X$ to a known target $Y$ using labeled observations $(x_i,y_i)$.

- **Regression** predicts a continuous target, such as a return or price.
- **Classification** predicts a discrete class, such as default versus no default.

Multiple regression is therefore a supervised-learning method. What distinguishes many ML methods is their use of regularization, flexible nonlinear structures, and validation-based model selection.

### Penalized Regression and LASSO

Ordinary least squares minimizes the sum of squared errors. Penalized regression adds a cost for large coefficients:

$$
\min_{\beta_0,\boldsymbol\beta}
\left\{
\sum_{i=1}^{n}(y_i-\beta_0-x_i'\boldsymbol\beta)^2
+\lambda P(\boldsymbol\beta)
\right\}.
$$

The tuning parameter $\lambda\geq 0$ controls regularization. When $\lambda=0$, the model reduces to OLS; increasing $\lambda$ shrinks coefficients more strongly, increasing bias but potentially reducing variance and out-of-sample error. Features should usually be standardized before penalization because the penalty depends on coefficient scale.

The **least absolute shrinkage and selection operator (LASSO)** uses an $L_1$ penalty:

$$
P(\boldsymbol\beta)=\sum_{j=1}^{p}|\beta_j|.
$$

LASSO can shrink some coefficients exactly to zero, so it performs variable selection as well as regularization. By contrast, ridge regression uses $\sum_j\beta_j^2$ and generally shrinks coefficients toward—but not exactly to—zero.

> [!IMPORTANT]
> The penalty is based on coefficient magnitudes, not directly on the number of included features. LASSO nevertheless tends to produce sparse, parsimonious models because the $L_1$ penalty can set coefficients to zero.

#### PyTorch: LASSO Regression

PyTorch optimizers do not need a special LASSO estimator: add the $L_1$ penalty to the training loss. Do not penalize the intercept.

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

Gradient methods often make irrelevant coefficients very small rather than numerically equal to zero. Apply a stated tolerance if an exact sparse feature set is required.

### Support Vector Machine

A support vector machine (SVM) finds a separating hyperplane

$$
\boldsymbol w'x+b=0
$$

that maximizes the margin between two classes. The observations closest to the boundary are the **support vectors**; they determine the fitted boundary.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=svm" title="Support vector machine margin visualization" loading="lazy"></iframe>

For perfectly separable data, a hard-margin SVM solves

$$
\min_{\boldsymbol w,b}\frac{1}{2}\|\boldsymbol w\|^2
\quad\text{subject to}\quad
y_i(\boldsymbol w'x_i+b)\geq 1.
$$

Minimizing $\|\boldsymbol w\|$ maximizes the margin. A **soft-margin** SVM permits violations through slack variables $\xi_i$:

$$
\min \frac{1}{2}\|\boldsymbol w\|^2+C\sum_i\xi_i,
\qquad
y_i(\boldsymbol w'x_i+b)\geq1-\xi_i.
$$

A larger $C$ penalizes training errors more heavily, usually producing a narrower margin and a more complex fit. A smaller $C$ accepts more violations in exchange for a wider margin. For nonlinear separation, a **kernel** implicitly maps features into a higher-dimensional space; common kernels include polynomial and radial basis function kernels.

#### PyTorch: Linear Soft-Margin SVM

With labels encoded as $-1$ and $+1$, the hinge loss is $\max(0,1-y_if(x_i))$.

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

This implements a linear SVM. Kernel SVM training is not a standard PyTorch module and is normally handled by a specialized solver.

### K-Nearest Neighbors

K-nearest neighbors (KNN) is a non-parametric method. For a new observation $x_0$, calculate its distance from the training observations, select the $K$ nearest, and assign the majority class:

$$
\hat y(x_0)=\operatorname{mode}\{y_i:i\in N_K(x_0)\}.
$$

For regression, use the mean (or a distance-weighted mean) of the neighbors' target values.

Example with $K=3$: if the nearest observations are `default`, `no default`, and `default`, the predicted class is `default`.

KNN is sensitive to feature scale, so standardization is important. A small $K$ creates a flexible, low-bias but high-variance boundary; a large $K$ creates a smoother, higher-bias boundary. Choose $K$ using validation or cross-validation.

#### PyTorch: KNN Classification

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

### Classification and Regression Trees

A classification and regression tree (CART) recursively splits the feature space using rules such as $x_j<c$. Each internal node contains a feature and cutoff; each terminal **leaf** gives a prediction.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=cart" title="Classification tree for dividend increases" loading="lazy"></iframe>

For a classification tree, a leaf normally predicts its majority class; for a regression tree, it predicts the mean target value in that leaf. A split is selected to reduce node impurity or prediction error. Common classification criteria include the Gini index and entropy; regression trees commonly minimize squared error.

Deep trees can fit noise. Complexity controls include maximum depth, minimum observations per node or leaf, and maximum number of leaves. **Pruning** removes branches whose incremental predictive value does not justify their complexity.

#### PyTorch: One CART Classification Split

The following educational routine finds the feature and threshold with the lowest weighted Gini impurity. Recursively applying it builds a tree.

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

Production trees also implement stopping rules, recursive nodes, missing-value handling, and pruning.

### Ensemble Learning

Ensemble methods combine several learners:

- A **voting classifier** combines class predictions, commonly by majority vote.
- **Bootstrap aggregating (bagging)** trains similar learners on bootstrap samples and aggregates their predictions. Averaging reduces variance when the learners are not perfectly correlated.
- A **random forest** adds randomness by considering only a random subset of features at each tree split. This decorrelates the trees and usually improves the benefit from averaging.

> [!NOTE]
> A single deep decision tree has low bias but high variance. Bagging and random forests primarily address that variance. Random forests are usually less interpretable than a single tree.

#### PyTorch: Bagging Predictions

`fit_model` below can be any training function that returns a fitted PyTorch classifier. The key ensemble operations are bootstrap sampling and probability averaging.

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

A random forest additionally samples candidate features independently at each tree split; bootstrap sampling alone produces bagging, not a random forest.

## Unsupervised Learning

Unsupervised learning uses features without a labeled target. Its principal applications are **dimension reduction** and **clustering**.

### Principal Components Analysis

Principal components analysis (PCA) transforms correlated features into mutually uncorrelated linear combinations. For standardized feature vector $x$, principal component $k$ is

$$
PC_k=\boldsymbol w_k'x,
$$

where $\boldsymbol w_k$ is a unit-length eigenvector of the covariance or correlation matrix. Its eigenvalue $\lambda_k$ is the variance captured by that component. The explained-variance ratio is

$$
\frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}.
$$

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=pca" title="Principal components analysis feature convergence" loading="lazy"></iframe>

The first component is the direction of maximum variance, equivalently the line that minimizes squared orthogonal projection error. Each later component maximizes the remaining variance subject to being orthogonal to earlier components.

Typical steps are:

1. Standardize features when their units or scales differ.
2. Compute the covariance or correlation matrix.
3. Obtain its eigenvectors and eigenvalues.
4. Rank components by explained variance and retain enough for the analytical objective.
5. Project observations onto the retained components.

#### PyTorch: PCA

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

PCA is linear and unsupervised: a component can explain substantial feature variance without being useful for predicting a particular target. Component signs are arbitrary, and economic interpretation may be difficult.

### Autoencoders

An autoencoder is a neural network trained to reproduce its input:

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=autoencoder" title="Autoencoder training flow" loading="lazy"></iframe>

The encoder compresses $x$ to a lower-dimensional representation $z=f_\theta(x)$, and the decoder reconstructs it as $\hat x=g_\phi(z)$. Training minimizes reconstruction loss, for example

$$
\min_{\theta,\phi}\sum_i\|x_i-g_\phi(f_\theta(x_i))\|^2.
$$

A bottleneck forces the network to retain important structure. Unlike PCA, an autoencoder can learn nonlinear representations, but it requires more data and tuning and is less transparent.

#### PyTorch: Autoencoder

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

### K-Means Clustering

K-means partitions observations into a pre-specified number $K$ of non-overlapping clusters. It minimizes within-cluster squared distance:

$$
\min_{C_1,\ldots,C_K}
\sum_{k=1}^{K}\sum_{x_i\in C_k}\|x_i-\boldsymbol\mu_k\|^2,
$$

where $\boldsymbol\mu_k$ is cluster $k$'s centroid.

The algorithm alternates between two steps:

1. Assign each observation to its nearest centroid.
2. Recalculate every centroid as the mean of its assigned observations.

Repeat until assignments stabilize or the objective changes very little.

#### PyTorch: K-Means

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

K-means is sensitive to scale, outliers, initial centroids, and the selected $K$. Multiple starts reduce the risk of a poor local solution. The elbow method or silhouette score can help compare values of $K$, but the clusters should also be economically meaningful.

### Hierarchical Clustering

Hierarchical clustering creates a nested sequence of clusters represented by a **dendrogram**:

- **Agglomerative** clustering begins with each observation in its own cluster and repeatedly merges the closest pair.
- **Divisive** clustering begins with one cluster and repeatedly splits it.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=hierarchy" title="Hierarchical clustering dendrogram" loading="lazy"></iframe>

Agglomerative methods require a distance measure and a **linkage rule** defining distance between clusters. Single linkage uses the nearest pair, complete linkage the farthest pair, and average linkage the average pairwise distance. Cutting the dendrogram at a chosen height determines the final clusters; unlike K-means, the analyst need not specify $K$ before fitting the hierarchy.

#### PyTorch: Agglomerative Clustering

This compact implementation uses average linkage and records the merge sequence.

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

## Neural Networks and Deep Learning

An artificial neuron forms a weighted sum and applies an activation function:

$$
z=\sum_{j=1}^{p}w_jx_j+b,
\qquad
a=g(z).
$$

Nonlinear activation functions—such as the rectified linear unit $g(z)=\max(0,z)$—allow the network to learn nonlinear relationships.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=neural" title="Feedforward neural network architecture" loading="lazy"></iframe>

- The **input layer** receives features.
- One or more **hidden layers** learn intermediate representations.
- The **output layer** produces a numeric forecast or class probability.

During **forward propagation**, inputs move through the network to produce $\hat y$. A loss function $L(y,\hat y)$ measures error. **Backpropagation** applies the chain rule to calculate the gradient of the loss with respect to each weight. Gradient descent then updates parameters:

$$
\theta^{(m+1)}=\theta^{(m)}-\eta\nabla_\theta L(\theta^{(m)}),
$$

where $\eta$ is the learning rate. A rate that is too large may overshoot; one that is too small may converge slowly.

**Deep learning** uses neural networks with multiple hidden layers. It can support supervised tasks, unsupervised representation learning, and reinforcement learning. Deep networks can approximate complex functions but are data- and computation-intensive, difficult to interpret, and prone to overfitting. Regularization methods include weight penalties, dropout, and early stopping.

### PyTorch: Feedforward Classification Network

`BCEWithLogitsLoss` combines a sigmoid transformation with numerically stable binary cross-entropy.

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

## Reinforcement Learning

Reinforcement learning (RL) concerns sequential decisions. An **agent** observes a state $s_t$, chooses an action $a_t$, receives a reward $r_{t+1}$, and moves to a new state $s_{t+1}$. A **policy** $\pi(a\mid s)$ specifies how actions are chosen.

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=rl" title="Reinforcement learning feedback loop" loading="lazy"></iframe>

The objective is to maximize expected discounted cumulative reward:

$$
E\left[\sum_{k=0}^{\infty}\gamma^k r_{t+k+1}\right],
\qquad 0\leq\gamma<1.
$$

The agent must balance **exploration** of unfamiliar actions against **exploitation** of actions currently believed to be best. In finance, RL may be applied to execution or dynamic allocation, but transaction costs, unstable market regimes, limited observations, and unrealistic simulations create substantial model risk.

### PyTorch: Tabular Q-Learning

For a small discrete environment, a tensor can store the action value $Q(s,a)$. The environment is expected to return `(next_state, reward, terminated)` from `step(action)`.

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

Deep Q-learning replaces the table with a neural network and additionally requires experience replay and a target network for more stable training.

## Evaluating Algorithm Performance

### Training, Validation, and Test Samples

- The **training set** estimates model parameters.
- The **validation set** selects algorithms and hyperparameters such as $\lambda$, $K$, tree depth, or network architecture.
- The **test set** provides a final estimate of performance on untouched data.

#### PyTorch: Random Data Split

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

For time-series observations, replace `randperm` with consecutive chronological index ranges.

> [!WARNING]
> Do not repeatedly tune a model against the test set. Doing so leaks information and turns the test set into another validation set. In time-series applications, random shuffling can also leak future information; use chronological splits or rolling-window validation.

### Overfitting, Generalization, and the Bias–Variance Trade-Off

**Generalization** is the ability to perform well on unseen data. Underfitting occurs when a model is too simple to learn the signal; overfitting occurs when it learns training noise that does not generalize.

| Fit | Training error | Validation/test error | Typical diagnosis |
| --- | --- | --- | --- |
| Underfit | High | High | High bias; model too simple |
| Appropriate fit | Low enough | Near its minimum | Useful bias–variance balance |
| Overfit | Very low | Rising or high | High variance; model too complex |

For squared prediction error, the conceptual decomposition is

$$
E[(Y-\hat f(X))^2]
=\operatorname{Bias}(\hat f(X))^2
+\operatorname{Var}(\hat f(X))
+\sigma_\varepsilon^2.
$$

The irreducible noise $\sigma_\varepsilon^2$ is sometimes called base error. Increasing model complexity usually reduces bias and raises variance. Controls for overfitting include regularization, feature selection or PCA, tree pruning, shallower architectures, more training data, and early stopping.

A **learning curve** plots training and validation error against training-set size. Two high, converged errors suggest underfitting. A persistent large gap—with low training error and higher validation error—suggests overfitting. If the validation curve is still improving as data increase, additional observations may help.

### K-Fold Cross-Validation

In $K$-fold cross-validation:

1. Divide the training data into $K$ folds.
2. Train on $K-1$ folds and validate on the remaining fold.
3. Repeat until every fold has served as validation data.
4. Average the $K$ validation errors and select the hyperparameters with the best result.

After selection, refit the chosen specification using the available training and validation data, then evaluate it once on the test set. Ordinary random $K$-fold validation is unsuitable when time order matters.

#### PyTorch: K-Fold Indices

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

### Performance Measures

For regression, common loss measures include mean squared error (MSE) and mean absolute error (MAE):

$$
MSE=\frac{1}{n}\sum_i(y_i-\hat y_i)^2,
\qquad
MAE=\frac{1}{n}\sum_i|y_i-\hat y_i|.
$$

For classification, a confusion matrix distinguishes true positives, false positives, true negatives, and false negatives. Useful measures include

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\frac{TP}{TP+FN}.
$$

Accuracy can be misleading with imbalanced classes. For rare defaults, for example, a model that always predicts “no default” may have high accuracy but zero recall for actual defaults. The appropriate metric depends on the economic cost of each error type.

#### PyTorch: Performance Measures

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

## Model-Selection Guide

| Objective and data | Useful starting methods | Main considerations |
| --- | --- | --- |
| Continuous target; many correlated features | Penalized regression | Scale features; tune penalty; relatively interpretable |
| Binary class; approximately separable boundary | SVM or logistic-type classifier | Scale features; tune margin/kernel; probabilities may need calibration |
| Local similarity is informative | KNN | Scale features; tune $K$; prediction can be slow in large dimensions |
| Nonlinear interactions and interpretability matter | CART | Easy to explain; unstable and prone to high variance |
| Strong nonlinear prediction is the priority | Random forest or neural network | Better flexibility; lower transparency and more tuning |
| Reduce correlated features | PCA | Linear, scale-sensitive, target-independent |
| Discover a fixed number of compact clusters | K-means | Must select $K$; scale- and outlier-sensitive |
| Explore nested cluster structure | Hierarchical clustering | Choose distance and linkage; dendrogram supports interpretation |
| Learn nonlinear low-dimensional features | Autoencoder | More flexible than PCA; data-intensive and less interpretable |
| Optimize sequential actions | Reinforcement learning | Exploration, delayed rewards, and environment/model risk |

Model selection is not determined by nonlinearity alone. It should reflect the target type, sample size, dimensionality, interpretability requirements, computational cost, economic loss function, and—most importantly—credible out-of-sample performance.

## Exam Checklist

- Distinguish supervised, unsupervised, and reinforcement learning.
- Distinguish regression targets from classification targets.
- Explain how regularization changes the bias–variance trade-off.
- Know which methods require feature scaling and which hyperparameters control complexity.
- Compare a single tree, bagging, and a random forest.
- Distinguish PCA, autoencoders, K-means, and hierarchical clustering.
- Separate training, validation, and test functions and recognize data leakage.
- Diagnose underfitting and overfitting from training and validation performance.
- Match evaluation metrics to the economic cost of errors.

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
