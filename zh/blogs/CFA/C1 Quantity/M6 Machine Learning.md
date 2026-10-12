---
title: 机器学习
---

# 机器学习

机器学习（ML）利用算法从数据中学习模式，用于预测、分类或发现结构。与传统统计模型相比，ML 方法往往更看重**样本外预测表现**而非系数解读，并且能更灵活地处理高维或非线性关系。这种灵活性很有用，但也增加了过拟合的风险。

三大学习类型是：

| 学习类型 | 可获得的反馈 | 典型目标 | 例子 |
| --- | --- | --- | --- |
| 监督学习 | 带标签的结果 | 预测数值或类别 | 预测盈利；对违约进行分类 |
| 无监督学习 | 没有标签结果 | 发现结构或降维 | 公司分群；构建因子 |
| 强化学习 | 连续行动带来的奖励 | 学习使累计奖励最大化的策略 | 动态交易或执行 |

## 监督学习

监督学习利用带标签的观测值 $(x_i,y_i)$，估计从特征 $X$ 到已知目标 $Y$ 的映射。

- **回归**预测连续目标，例如收益率或价格。
- **分类**预测离散类别，例如违约与不违约。

因此，多元回归本身就是一种监督学习方法。许多 ML 方法的不同之处在于使用正则化、灵活的非线性结构以及基于验证的模型选择。

### 惩罚回归与 LASSO

普通最小二乘法使误差平方和最小。惩罚回归对过大的系数施加成本：

$$
\min_{\beta_0,\boldsymbol\beta}
\left\{
\sum_{i=1}^{n}(y_i-\beta_0-x_i'\boldsymbol\beta)^2
+\lambda P(\boldsymbol\beta)
\right\}.
$$

调节参数 $\lambda\geq 0$ 控制正则化强度。当 $\lambda=0$ 时，模型退化为 OLS；增大 $\lambda$ 会更强地压缩系数，增加偏差，但可能降低方差和样本外误差。由于惩罚取决于系数的量纲，惩罚之前通常应先对特征做标准化。

**最小绝对收缩与选择算子（LASSO）**使用 $L_1$ 惩罚：

$$
P(\boldsymbol\beta)=\sum_{j=1}^{p}|\beta_j|.
$$

LASSO 可以把一些系数恰好压缩为零，因此在正则化的同时完成变量选择。相比之下，岭回归使用 $\sum_j\beta_j^2$，通常把系数向零压缩，但不会恰好为零。

> [!IMPORTANT]
> 惩罚基于系数的大小，而不是直接基于纳入的特征个数。不过，由于 $L_1$ 惩罚能把系数设为零，LASSO 往往会得到稀疏、简约的模型。

#### PyTorch：LASSO 回归

PyTorch 的优化器不需要专门的 LASSO 估计器：只需把 $L_1$ 惩罚加到训练损失上。不要惩罚截距。

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

梯度方法通常会把无关系数变得非常小，而不是在数值上恰好等于零。如果需要精确的稀疏特征集，请设定一个明确的容差。

### 支持向量机

支持向量机（SVM）寻找一个分隔超平面

$$
\boldsymbol w'x+b=0
$$

使两类之间的间隔最大。最靠近边界的观测值是**支持向量**；它们决定了拟合出的边界。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=svm&lang=zh" title="支持向量机间隔示意图" loading="lazy"></iframe>

对于完全可分的数据，硬间隔 SVM 求解

$$
\min_{\boldsymbol w,b}\frac{1}{2}\|\boldsymbol w\|^2
\quad\text{subject to}\quad
y_i(\boldsymbol w'x_i+b)\geq 1.
$$

最小化 $\|\boldsymbol w\|$ 就是最大化间隔。**软间隔** SVM 通过松弛变量 $\xi_i$ 允许违反约束：

$$
\min \frac{1}{2}\|\boldsymbol w\|^2+C\sum_i\xi_i,
\qquad
y_i(\boldsymbol w'x_i+b)\geq1-\xi_i.
$$

$C$ 越大，对训练误差的惩罚越重，通常得到更窄的间隔和更复杂的拟合。$C$ 越小，则以接受更多违反为代价换取更宽的间隔。对于非线性分隔，**核函数**会把特征隐式映射到更高维的空间；常见的核包括多项式核和径向基函数核。

#### PyTorch：线性软间隔 SVM

当标签编码为 $-1$ 和 $+1$ 时，合页损失为 $\max(0,1-y_if(x_i))$。

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

这实现的是线性 SVM。核 SVM 的训练不是 PyTorch 的标准模块，通常交给专门的求解器处理。

### K 近邻

K 近邻（KNN）是一种非参数方法。对于新观测值 $x_0$，计算它与训练观测值的距离，选出最近的 $K$ 个，并指定多数类别：

$$
\hat y(x_0)=\operatorname{mode}\{y_i:i\in N_K(x_0)\}.
$$

对于回归，则使用近邻目标值的均值（或按距离加权的均值）。

$K=3$ 的例子：如果最近的观测值是 `default`、`no default` 和 `default`，预测类别就是 `default`。

KNN 对特征的量纲很敏感，因此标准化很重要。$K$ 小会产生灵活、低偏差但高方差的边界；$K$ 大则产生更平滑、偏差更高的边界。用验证或交叉验证来选择 $K$。

#### PyTorch：KNN 分类

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

### 分类与回归树

分类与回归树（CART）用 $x_j<c$ 之类的规则递归地划分特征空间。每个内部节点包含一个特征和一个切分点；每个终端**叶节点**给出一个预测。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=cart&lang=zh" title="股息提高的分类树" loading="lazy"></iframe>

对于分类树，叶节点通常预测其中的多数类别；对于回归树，则预测该叶节点中目标值的均值。选择切分是为了降低节点的不纯度或预测误差。常见的分类准则包括基尼指数和熵；回归树通常最小化平方误差。

很深的树可能拟合噪声。复杂度控制包括最大深度、每个节点或叶节点的最少观测数，以及最大叶节点数。**剪枝**会删除那些增量预测价值不足以抵消其复杂度的分支。

#### PyTorch：一次 CART 分类切分

下面这段教学用的程序找出加权基尼不纯度最低的特征和阈值。递归地应用它就能构建一棵树。

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

生产环境中的决策树还需实现停止规则、递归节点、缺失值处理和剪枝。

### 集成学习

集成方法把多个学习器结合起来：

- **投票分类器**结合各类别预测，通常采用多数投票。
- **自助聚合（bagging）**在自助样本上训练相似的学习器并聚合其预测。当学习器之间并非完全相关时，平均可以降低方差。
- **随机森林**在每次切分时只考虑随机选取的一部分特征，从而增加随机性。这降低了树与树之间的相关性，通常能提高平均带来的好处。

> [!NOTE]
> 单棵很深的决策树偏差低但方差高。Bagging 和随机森林主要解决的正是这种方差。随机森林通常比单棵树更难解释。

#### PyTorch：Bagging 预测

下面的 `fit_model` 可以是任何返回已拟合 PyTorch 分类器的训练函数。集成的关键操作是自助抽样和概率平均。

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

随机森林还会在每次切分时独立地抽取候选特征；仅靠自助抽样得到的是 bagging，而不是随机森林。

## 无监督学习

无监督学习使用没有标签目标的特征。它的主要应用是**降维**和**聚类**。

### 主成分分析 {#principal-components-analysis}

主成分分析（PCA）把相关的特征转换为彼此不相关的线性组合。对于标准化的特征向量 $x$，第 $k$ 个主成分为

$$
PC_k=\boldsymbol w_k'x,
$$

其中 $\boldsymbol w_k$ 是协方差矩阵或相关矩阵的单位长度特征向量。其特征值 $\lambda_k$ 是该成分所捕获的方差。解释方差比为

$$
\frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}.
$$

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=pca&lang=zh" title="主成分分析的特征汇聚" loading="lazy"></iframe>

第一主成分是方差最大的方向，等价于使正交投影误差平方最小的那条直线。之后的每个成分在与之前各成分正交的约束下，使剩余方差最大。

典型步骤如下：

1. 当特征的单位或量纲不同时，对其标准化。
2. 计算协方差矩阵或相关矩阵。
3. 求出其特征向量和特征值。
4. 按解释方差对成分排序，保留足以满足分析目标的成分。
5. 把观测值投影到保留的成分上。

#### PyTorch：PCA

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

PCA 是线性的、无监督的：一个成分可能解释了特征的大量方差，却对预测某个特定目标毫无用处。成分的符号是任意的，经济含义也可能难以解释。

### 自编码器

自编码器是一种被训练来重现其输入的神经网络：

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=autoencoder&lang=zh" title="自编码器训练流程" loading="lazy"></iframe>

编码器把 $x$ 压缩为低维表示 $z=f_\theta(x)$，解码器再把它重建为 $\hat x=g_\phi(z)$。训练最小化重建损失，例如

$$
\min_{\theta,\phi}\sum_i\|x_i-g_\phi(f_\theta(x_i))\|^2.
$$

瓶颈迫使网络保留重要的结构。与 PCA 不同，自编码器可以学习非线性表示，但需要更多数据和调参，透明度也更低。

#### PyTorch：自编码器

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

### K 均值聚类

K 均值把观测值划分为预先指定数量 $K$ 个互不重叠的簇。它最小化簇内的平方距离：

$$
\min_{C_1,\ldots,C_K}
\sum_{k=1}^{K}\sum_{x_i\in C_k}\|x_i-\boldsymbol\mu_k\|^2,
$$

其中 $\boldsymbol\mu_k$ 是第 $k$ 个簇的质心。

算法在两个步骤之间交替：

1. 把每个观测值分配给最近的质心。
2. 把每个质心重新计算为其所分配观测值的均值。

重复直到分配稳定，或目标函数变化很小。

#### PyTorch：K 均值

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

K 均值对量纲、异常值、初始质心和所选的 $K$ 都很敏感。多次随机初始化可以降低陷入较差局部解的风险。肘部法则或轮廓系数有助于比较不同的 $K$，但簇本身也应当具有经济意义。

### 层次聚类

层次聚类生成一系列嵌套的簇，用**树状图**表示：

- **凝聚式**聚类从每个观测值各自成簇开始，反复合并最近的一对。
- **分裂式**聚类从一个簇开始，反复对其进行拆分。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=hierarchy&lang=zh" title="层次聚类树状图" loading="lazy"></iframe>

凝聚式方法需要一个距离度量，以及定义簇间距离的**连接规则**。单连接使用最近的一对，全连接使用最远的一对，平均连接使用两两距离的平均值。在选定的高度切割树状图就决定了最终的簇；与 K 均值不同，分析师无需在拟合层次结构之前指定 $K$。

#### PyTorch：凝聚式聚类

这个精简实现使用平均连接，并记录合并顺序。

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

## 神经网络与深度学习

人工神经元先计算加权和，再应用激活函数：

$$
z=\sum_{j=1}^{p}w_jx_j+b,
\qquad
a=g(z).
$$

非线性激活函数——例如修正线性单元 $g(z)=\max(0,z)$——让网络能够学习非线性关系。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=neural&lang=zh" title="前馈神经网络结构" loading="lazy"></iframe>

- **输入层**接收特征。
- 一个或多个**隐藏层**学习中间表示。
- **输出层**给出数值预测或类别概率。

在**前向传播**中，输入经过网络得到 $\hat y$。损失函数 $L(y,\hat y)$ 衡量误差。**反向传播**运用链式法则，计算损失对每个权重的梯度。然后用梯度下降更新参数：

$$
\theta^{(m+1)}=\theta^{(m)}-\eta\nabla_\theta L(\theta^{(m)}),
$$

其中 $\eta$ 是学习率。学习率过大可能越过最优点；过小则可能收敛缓慢。

**深度学习**使用含多个隐藏层的神经网络。它可以支持监督任务、无监督的表示学习和强化学习。深度网络能逼近复杂函数，但对数据和算力要求高、难以解释，并且容易过拟合。正则化方法包括权重惩罚、dropout 和早停。

### PyTorch：前馈分类网络

`BCEWithLogitsLoss` 把 sigmoid 变换与数值稳定的二元交叉熵结合在一起。

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

## 强化学习

强化学习（RL）研究序贯决策。**智能体**观察状态 $s_t$，选择行动 $a_t$，获得奖励 $r_{t+1}$，并转移到新状态 $s_{t+1}$。**策略** $\pi(a\mid s)$ 规定如何选择行动。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=rl&lang=zh" title="强化学习反馈回路" loading="lazy"></iframe>

目标是最大化预期折现累计奖励：

$$
E\left[\sum_{k=0}^{\infty}\gamma^k r_{t+k+1}\right],
\qquad 0\leq\gamma<1.
$$

智能体必须在**探索**陌生行动与**利用**当前认为最优的行动之间取得平衡。在金融领域，RL 可用于交易执行或动态配置，但交易成本、不稳定的市场状态、有限的观测数据和不现实的模拟都会带来显著的模型风险。

### PyTorch：表格型 Q 学习

对于小型离散环境，可以用一个张量存储行动价值 $Q(s,a)$。环境的 `step(action)` 应返回 `(next_state, reward, terminated)`。

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

深度 Q 学习用神经网络取代表格，并且还需要经验回放和目标网络来稳定训练。

## 评估算法表现

### 训练集、验证集与测试集

- **训练集**用于估计模型参数。
- **验证集**用于选择算法和超参数，例如 $\lambda$、$K$、树深或网络结构。
- **测试集**给出模型在未接触过的数据上表现的最终估计。

#### PyTorch：随机划分数据

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

对于时间序列观测值，用连续的、按时间顺序排列的索引区间代替 `randperm`。

> [!WARNING]
> 不要反复针对测试集调参。这样做会泄露信息，让测试集沦为另一个验证集。在时间序列应用中，随机打乱也可能泄露未来信息；应使用按时间顺序的划分或滚动窗口验证。

### 过拟合、泛化与偏差–方差权衡

**泛化**是在未见过的数据上表现良好的能力。当模型过于简单而学不到信号时，出现欠拟合；当模型学到了无法泛化的训练噪声时，出现过拟合。

| 拟合情况 | 训练误差 | 验证/测试误差 | 典型诊断 |
| --- | --- | --- | --- |
| 欠拟合 | 高 | 高 | 高偏差；模型过于简单 |
| 拟合适度 | 足够低 | 接近最小值 | 偏差与方差的平衡较好 |
| 过拟合 | 非常低 | 上升或很高 | 高方差；模型过于复杂 |

对于平方预测误差，概念上的分解为

$$
E[(Y-\hat f(X))^2]
=\operatorname{Bias}(\hat f(X))^2
+\operatorname{Var}(\hat f(X))
+\sigma_\varepsilon^2.
$$

不可约噪声 $\sigma_\varepsilon^2$ 有时被称为基础误差。增加模型复杂度通常会降低偏差、提高方差。控制过拟合的手段包括正则化、特征选择或 PCA、树剪枝、更浅的网络结构、更多训练数据和早停。

**学习曲线**描绘训练误差和验证误差随训练集规模的变化。两条误差都很高且已收敛，说明欠拟合。持续存在的较大差距——训练误差低、验证误差更高——说明过拟合。如果数据增加时验证曲线仍在改善，增加观测值可能有帮助。

### K 折交叉验证

在 $K$ 折交叉验证中：

1. 把训练数据分成 $K$ 折。
2. 在 $K-1$ 折上训练，在剩下的一折上验证。
3. 重复，直到每一折都当过验证数据。
4. 对 $K$ 个验证误差取平均，选出结果最好的超参数。

选定之后，用可用的训练数据和验证数据重新拟合所选的设定，然后在测试集上只评估一次。当时间顺序很重要时，普通的随机 $K$ 折验证并不适用。

#### PyTorch：K 折索引

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

### 表现度量

对于回归，常见的损失度量包括均方误差（MSE）和平均绝对误差（MAE）：

$$
MSE=\frac{1}{n}\sum_i(y_i-\hat y_i)^2,
\qquad
MAE=\frac{1}{n}\sum_i|y_i-\hat y_i|.
$$

对于分类，混淆矩阵区分真阳性、假阳性、真阴性和假阴性。常用的度量包括

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\frac{TP}{TP+FN}.
$$

在类别不平衡时，准确率可能具有误导性。例如对于罕见的违约，一个总是预测"不违约"的模型可能准确率很高，但对实际违约的召回率为零。合适的度量取决于每种错误的经济成本。

#### PyTorch：表现度量

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

## 模型选择指南

| 目标与数据 | 适合起步的方法 | 主要考虑 |
| --- | --- | --- |
| 连续目标；许多相关特征 | 惩罚回归 | 标准化特征；调节惩罚；相对容易解释 |
| 二元类别；边界近似可分 | SVM 或逻辑类分类器 | 标准化特征；调节间隔/核；概率可能需要校准 |
| 局部相似性有信息量 | KNN | 标准化特征；调节 $K$；高维下预测可能很慢 |
| 非线性交互与可解释性都重要 | CART | 易于解释；不稳定且方差往往较高 |
| 以强大的非线性预测为先 | 随机森林或神经网络 | 灵活性更好；透明度更低、调参更多 |
| 精简相关特征 | PCA | 线性、对量纲敏感、与目标无关 |
| 发现固定数量的紧凑簇 | K 均值 | 必须选择 $K$；对量纲和异常值敏感 |
| 探索嵌套的簇结构 | 层次聚类 | 选择距离和连接方式；树状图便于解读 |
| 学习非线性的低维特征 | 自编码器 | 比 PCA 更灵活；需要大量数据且难以解释 |
| 优化序贯行动 | 强化学习 | 探索、延迟奖励以及环境/模型风险 |

模型选择并不只由非线性决定。它应反映目标类型、样本量、维度、可解释性要求、计算成本、经济损失函数，以及——最重要的——可信的样本外表现。

## 考试清单

- 区分监督学习、无监督学习和强化学习。
- 区分回归目标与分类目标。
- 解释正则化如何改变偏差–方差权衡。
- 知道哪些方法需要特征缩放，以及哪些超参数控制复杂度。
- 比较单棵树、bagging 和随机森林。
- 区分 PCA、自编码器、K 均值和层次聚类。
- 区分训练、验证和测试的作用，并识别数据泄露。
- 根据训练和验证表现诊断欠拟合与过拟合。
- 让评估度量与错误的经济成本相匹配。

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
