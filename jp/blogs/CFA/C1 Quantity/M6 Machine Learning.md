---
title: 機械学習
---

# 機械学習

機械学習（ML）は、アルゴリズムを使ってデータからパターンを学び、予測、分類、構造の発見を行う。伝統的な統計モデルと比べて、ML の手法は係数の解釈よりも**標本外の予測性能**を重視することが多く、高次元や非線形の関係をより柔軟に扱える。この柔軟性は有用だが、過学習のリスクも高める。

大きく分けて 3 つの学習タイプがある：

| 学習タイプ | 得られるフィードバック | 典型的な目的 | 例 |
| --- | --- | --- | --- |
| 教師あり | ラベル付きの結果 | 数値やクラスを予測する | 利益を予測する、デフォルトを分類する |
| 教師なし | ラベル付きの結果なし | 構造を見つける、次元を削減する | 企業をセグメント化する、ファクターを構築する |
| 強化 | 連続した行動に対する報酬 | 累積報酬を最大化する方策を学ぶ | 動的なトレーディングや執行 |

## 教師あり学習

教師あり学習は、ラベル付きの観測値 $(x_i,y_i)$ を使って、特徴量 $X$ から既知のターゲット $Y$ への写像を推定する。

- **回帰**は、リターンや価格のような連続的なターゲットを予測する。
- **分類**は、デフォルトする/しないのような離散的なクラスを予測する。

したがって重回帰分析は教師あり学習の手法の 1 つである。多くの ML 手法を特徴づけるのは、正則化、柔軟な非線形構造、検証に基づくモデル選択の利用である。

### 罰則付き回帰と LASSO

最小二乗法は誤差平方和を最小にする。罰則付き回帰は、大きな係数にコストを加える：

$$
\min_{\beta_0,\boldsymbol\beta}
\left\{
\sum_{i=1}^{n}(y_i-\beta_0-x_i'\boldsymbol\beta)^2
+\lambda P(\boldsymbol\beta)
\right\}.
$$

チューニング・パラメータ $\lambda\geq 0$ が正則化の強さを決める。$\lambda=0$ ならモデルは OLS に戻る。$\lambda$ を大きくすると係数がより強く縮小され、バイアスは増えるが、分散と標本外の誤差は減る可能性がある。罰則は係数の尺度に依存するので、罰則をかける前に通常は特徴量を標準化する。

**LASSO（least absolute shrinkage and selection operator）**は $L_1$ 罰則を使う：

$$
P(\boldsymbol\beta)=\sum_{j=1}^{p}|\beta_j|.
$$

LASSO は一部の係数をちょうどゼロまで縮小できるので、正則化と同時に変数選択も行う。これに対しリッジ回帰は $\sum_j\beta_j^2$ を使い、一般に係数をゼロに近づけるが、ちょうどゼロにはしない。

> [!IMPORTANT]
> 罰則は係数の大きさに基づくもので、含める特徴量の数に直接基づくものではない。それでも $L_1$ 罰則は係数をゼロにできるため、LASSO は疎で簡潔なモデルを生みやすい。

#### PyTorch：LASSO 回帰

PyTorch のオプティマイザに専用の LASSO 推定量は要らない。学習の損失に $L_1$ 罰則を加えればよい。切片には罰則をかけない。

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

勾配法では、無関係な係数は数値的にちょうどゼロになるのではなく、非常に小さくなるだけのことが多い。厳密に疎な特徴量の集合が必要なら、許容誤差を明示して適用する。

### サポートベクターマシン

サポートベクターマシン（SVM）は、2 つのクラス間のマージンを最大にする分離超平面

$$
\boldsymbol w'x+b=0
$$

を見つける。境界に最も近い観測値が**サポートベクター**であり、これらが推定される境界を決める。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=svm&lang=ja" title="サポートベクターマシンのマージンの図解" loading="lazy"></iframe>

完全に分離可能なデータでは、ハードマージン SVM は次を解く：

$$
\min_{\boldsymbol w,b}\frac{1}{2}\|\boldsymbol w\|^2
\quad\text{subject to}\quad
y_i(\boldsymbol w'x_i+b)\geq 1.
$$

$\|\boldsymbol w\|$ の最小化はマージンの最大化と同じである。**ソフトマージン** SVM は、スラック変数 $\xi_i$ によって制約違反を許す：

$$
\min \frac{1}{2}\|\boldsymbol w\|^2+C\sum_i\xi_i,
\qquad
y_i(\boldsymbol w'x_i+b)\geq1-\xi_i.
$$

$C$ が大きいほど学習データの誤りを重く罰し、通常はマージンが狭く複雑な当てはめになる。$C$ が小さいと、違反を多く受け入れる代わりにマージンが広くなる。非線形な分離には、**カーネル**が特徴量を暗黙のうちに高次元空間へ写す。代表的なカーネルに多項式カーネルと RBF（動径基底関数）カーネルがある。

#### PyTorch：線形ソフトマージン SVM

ラベルを $-1$ と $+1$ で表すと、ヒンジ損失は $\max(0,1-y_if(x_i))$ となる。

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

これは線形 SVM の実装である。カーネル SVM の学習は PyTorch の標準モジュールにはなく、通常は専用のソルバーで行う。

### k 近傍法

k 近傍法（KNN）はノンパラメトリックな手法である。新しい観測値 $x_0$ について、学習データの観測値との距離を計算し、最も近い $K$ 個を選んで、多数派のクラスを割り当てる：

$$
\hat y(x_0)=\operatorname{mode}\{y_i:i\in N_K(x_0)\}.
$$

回帰では、近傍のターゲット値の平均（または距離で重み付けした平均）を使う。

$K=3$ の例：最も近い観測値が `default`、`no default`、`default` なら、予測クラスは `default` になる。

KNN は特徴量の尺度に敏感なので、標準化が重要である。$K$ が小さいと、柔軟でバイアスは低いが分散の大きい境界になる。$K$ が大きいと、より滑らかでバイアスの高い境界になる。$K$ は検証や交差検証で選ぶ。

#### PyTorch：KNN による分類

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

### 分類木と回帰木

分類・回帰木（CART）は、$x_j<c$ のようなルールで特徴量空間を再帰的に分割する。各内部ノードには特徴量と分割点があり、末端の**葉**が予測を与える。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=cart&lang=ja" title="増配を予測する分類木" loading="lazy"></iframe>

分類木では葉はふつう多数派のクラスを予測し、回帰木ではその葉のターゲットの平均値を予測する。分割は、ノードの不純度や予測誤差を減らすように選ばれる。分類の基準にはジニ係数やエントロピーがよく使われ、回帰木はふつう二乗誤差を最小化する。

深い木はノイズまで当てはめてしまう。複雑さを抑える手段には、最大の深さ、ノードや葉あたりの最小観測数、葉の最大数がある。**枝刈り**は、予測上の追加価値が複雑さに見合わない枝を取り除く。

#### PyTorch：CART による分類の 1 回の分割

次の学習用のルーチンは、加重ジニ不純度が最も低い特徴量と閾値を見つける。これを再帰的に適用すると木ができる。

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

実運用の木では、停止ルール、再帰的なノード、欠損値の処理、枝刈りも実装する。

### アンサンブル学習

アンサンブル手法は複数の学習器を組み合わせる：

- **投票分類器**はクラスの予測を組み合わせる。多くは多数決による。
- **ブートストラップ集約（バギング）**は、ブートストラップ標本で似た学習器を学習させ、予測を集約する。学習器どうしが完全には相関していないとき、平均化によって分散が減る。
- **ランダムフォレスト**は、木の分割ごとに特徴量の一部だけをランダムに検討することで、ランダム性を加える。これにより木どうしの相関が下がり、ふつうは平均化の効果が高まる。

> [!NOTE]
> 1 本の深い決定木は、バイアスは低いが分散が大きい。バギングとランダムフォレストは主にその分散に対処する。ランダムフォレストは、1 本の木よりも解釈しにくいのが普通である。

#### PyTorch：バギングによる予測

下の `fit_model` は、学習済みの PyTorch 分類器を返す任意の学習関数でよい。アンサンブルの要となる操作は、ブートストラップ標本の抽出と確率の平均化である。

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

ランダムフォレストでは、さらに木の分割ごとに候補の特徴量を独立に抽出する。ブートストラップ標本だけならバギングであって、ランダムフォレストではない。

## 教師なし学習

教師なし学習は、ラベル付きのターゲットなしに特徴量を使う。主な用途は**次元削減**と**クラスタリング**である。

### 主成分分析 {#principal-components-analysis}

主成分分析（PCA）は、相関のある特徴量を互いに無相関な線形結合に変換する。標準化した特徴量ベクトル $x$ について、第 $k$ 主成分は

$$
PC_k=\boldsymbol w_k'x,
$$

ここで $\boldsymbol w_k$ は共分散行列または相関行列の長さ 1 の固有ベクトル。その固有値 $\lambda_k$ が、その成分のとらえる分散である。寄与率は

$$
\frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}.
$$

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=pca&lang=ja" title="主成分分析による特徴量の集約" loading="lazy"></iframe>

第 1 主成分は分散が最大となる方向であり、直交射影の二乗誤差を最小にする直線と同じである。以降の各成分は、それまでの成分と直交するという条件のもとで、残りの分散を最大化する。

典型的な手順：

1. 単位や尺度が異なる場合は特徴量を標準化する。
2. 共分散行列または相関行列を計算する。
3. その固有ベクトルと固有値を求める。
4. 寄与率で成分を順位づけし、分析の目的に足りるだけ残す。
5. 観測値を残した成分に射影する。

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

PCA は線形かつ教師なしの手法である。ある成分が特徴量の分散を大きく説明していても、特定のターゲットの予測には役に立たないことがある。成分の符号は任意であり、経済的な解釈が難しい場合もある。

### オートエンコーダ

オートエンコーダは、入力を再現するように学習するニューラルネットワークである：

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=autoencoder&lang=ja" title="オートエンコーダの学習の流れ" loading="lazy"></iframe>

エンコーダは $x$ を低次元の表現 $z=f_\theta(x)$ に圧縮し、デコーダはそれを $\hat x=g_\phi(z)$ として再構成する。学習では、たとえば次の再構成損失を最小化する：

$$
\min_{\theta,\phi}\sum_i\|x_i-g_\phi(f_\theta(x_i))\|^2.
$$

ボトルネックがあることで、ネットワークは重要な構造を保持せざるを得なくなる。PCA と違ってオートエンコーダは非線形の表現を学べるが、より多くのデータとチューニングが必要で、透明性も低い。

#### PyTorch：オートエンコーダ

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

### k 平均法

k 平均法は、観測値をあらかじめ決めた数 $K$ 個の重ならないクラスターに分割する。クラスター内の二乗距離を最小化する：

$$
\min_{C_1,\ldots,C_K}
\sum_{k=1}^{K}\sum_{x_i\in C_k}\|x_i-\boldsymbol\mu_k\|^2,
$$

ここで $\boldsymbol\mu_k$ はクラスター $k$ の重心。

アルゴリズムは 2 つのステップを交互に繰り返す：

1. 各観測値を最も近い重心に割り当てる。
2. 各重心を、割り当てられた観測値の平均として計算し直す。

割り当てが安定するか、目的関数がほとんど変わらなくなるまで繰り返す。

#### PyTorch：k 平均法

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

k 平均法は、尺度、外れ値、初期の重心、選んだ $K$ に敏感である。初期値を変えて何度も実行すると、悪い局所解に陥るリスクを減らせる。エルボー法やシルエット係数は $K$ の比較に役立つが、クラスターは経済的にも意味のあるものであるべきだ。

### 階層的クラスタリング

階層的クラスタリングは、**樹形図（デンドログラム）**で表される入れ子状のクラスターの列を作る：

- **凝集型**クラスタリングは、各観測値をそれぞれ 1 つのクラスターとして始め、最も近いペアを繰り返し統合する。
- **分割型**クラスタリングは、1 つのクラスターから始めて繰り返し分割する。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=hierarchy&lang=ja" title="階層的クラスタリングの樹形図" loading="lazy"></iframe>

凝集型の手法には、距離の尺度と、クラスター間の距離を定める**連結法**が必要である。単連結法は最も近いペア、完全連結法は最も遠いペア、群平均法はペア間距離の平均を使う。選んだ高さで樹形図を切ると最終的なクラスターが決まる。k 平均法と違い、階層を作る前に $K$ を決めておく必要はない。

#### PyTorch：凝集型クラスタリング

この簡潔な実装は群平均法を使い、統合の順序を記録する。

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

## ニューラルネットワークとディープラーニング

人工ニューロンは加重和をとり、活性化関数を適用する：

$$
z=\sum_{j=1}^{p}w_jx_j+b,
\qquad
a=g(z).
$$

正規化線形関数 $g(z)=\max(0,z)$ のような非線形の活性化関数によって、ネットワークは非線形の関係を学べる。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=neural&lang=ja" title="順伝播型ニューラルネットワークの構造" loading="lazy"></iframe>

- **入力層**は特徴量を受け取る。
- 1 つ以上の**隠れ層**が中間的な表現を学ぶ。
- **出力層**は数値の予測やクラスの確率を出す。

**順伝播**では、入力がネットワークを通って $\hat y$ を生む。損失関数 $L(y,\hat y)$ が誤差を測る。**誤差逆伝播法**は連鎖律を使って、各重みに関する損失の勾配を計算する。その後、勾配降下法でパラメータを更新する：

$$
\theta^{(m+1)}=\theta^{(m)}-\eta\nabla_\theta L(\theta^{(m)}),
$$

ここで $\eta$ は学習率。大きすぎると行き過ぎ、小さすぎると収束が遅くなる。

**ディープラーニング**は、複数の隠れ層をもつニューラルネットワークを使う。教師ありのタスク、教師なしの表現学習、強化学習のいずれにも使える。深いネットワークは複雑な関数を近似できるが、データと計算資源を大量に必要とし、解釈が難しく、過学習しやすい。正則化の方法には、重みの罰則、ドロップアウト、早期終了がある。

### PyTorch：順伝播型の分類ネットワーク

`BCEWithLogitsLoss` は、シグモイド変換と数値的に安定した 2 値交差エントロピーを組み合わせたもの。

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

## 強化学習

強化学習（RL）は逐次的な意思決定を扱う。**エージェント**は状態 $s_t$ を観測し、行動 $a_t$ を選び、報酬 $r_{t+1}$ を受け取り、新しい状態 $s_{t+1}$ に移る。**方策** $\pi(a\mid s)$ は行動の選び方を定める。

<iframe class="ml-concept-chart" src="/charts/machine-learning-concepts.html?view=rl&lang=ja" title="強化学習のフィードバックループ" loading="lazy"></iframe>

目的は、割り引いた累積報酬の期待値を最大化することである：

$$
E\left[\sum_{k=0}^{\infty}\gamma^k r_{t+k+1}\right],
\qquad 0\leq\gamma<1.
$$

エージェントは、なじみのない行動の**探索**と、いま最善と考える行動の**活用**のバランスをとらなければならない。金融では、RL は執行や動的な資産配分に応用されうるが、取引コスト、不安定な市場環境、限られた観測数、非現実的なシミュレーションがかなりのモデルリスクを生む。

### PyTorch：表形式の Q 学習

小さな離散環境では、テンソルに行動価値 $Q(s,a)$ を格納できる。環境の `step(action)` は `(next_state, reward, terminated)` を返すものとする。

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

深層 Q 学習は表をニューラルネットワークに置き換え、学習を安定させるために経験再生とターゲットネットワークも必要とする。

## アルゴリズムの性能評価

### 学習用・検証用・テスト用の標本

- **学習用データ**でモデルのパラメータを推定する。
- **検証用データ**で、アルゴリズムや、$\lambda$、$K$、木の深さ、ネットワーク構造などのハイパーパラメータを選ぶ。
- **テスト用データ**で、手を付けていないデータでの性能を最終的に見積もる。

#### PyTorch：ランダムなデータ分割

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

時系列の観測値では、`randperm` の代わりに時間順に連続したインデックスの範囲を使う。

> [!WARNING]
> テスト用データに対して何度もモデルを調整してはならない。情報が漏れ、テスト用データがもう 1 つの検証用データになってしまう。時系列の応用では、ランダムなシャッフルも将来の情報を漏らしうる。時間順の分割やローリング・ウィンドウでの検証を使うこと。

### 過学習、汎化、バイアスと分散のトレードオフ

**汎化**とは、見たことのないデータでもうまく機能する能力である。モデルが単純すぎてシグナルを学べないのが過少適合、汎化しない学習データのノイズまで学んでしまうのが過学習である。

| 当てはまり | 学習誤差 | 検証・テスト誤差 | 典型的な診断 |
| --- | --- | --- | --- |
| 過少適合 | 高い | 高い | バイアスが大きい。モデルが単純すぎる |
| 適切な当てはまり | 十分に低い | 最小値付近 | バイアスと分散のバランスがよい |
| 過学習 | 非常に低い | 上昇または高い | 分散が大きい。モデルが複雑すぎる |

二乗予測誤差については、概念的に次のように分解できる：

$$
E[(Y-\hat f(X))^2]
=\operatorname{Bias}(\hat f(X))^2
+\operatorname{Var}(\hat f(X))
+\sigma_\varepsilon^2.
$$

削減できないノイズ $\sigma_\varepsilon^2$ は、ベース誤差と呼ばれることもある。モデルを複雑にすると、ふつうはバイアスが減って分散が増える。過学習を抑える手段には、正則化、特徴量選択や PCA、木の枝刈り、浅いネットワーク構造、学習データの追加、早期終了がある。

**学習曲線**は、学習データのサイズに対して学習誤差と検証誤差をプロットしたものである。2 つの誤差がともに高い水準で収束していれば過少適合を示す。学習誤差が低く検証誤差が高い大きな差が続くなら過学習を示す。データを増やしても検証曲線がまだ改善しているなら、観測値を増やすことが役立つかもしれない。

### k 分割交差検証

$K$ 分割交差検証では：

1. 学習データを $K$ 個のフォールドに分ける。
2. $K-1$ 個のフォールドで学習し、残りの 1 個で検証する。
3. すべてのフォールドが検証用データになるまで繰り返す。
4. $K$ 個の検証誤差を平均し、最もよい結果のハイパーパラメータを選ぶ。

選んだあとは、利用できる学習用データと検証用データで選んだ定式化を推定し直し、テスト用データで 1 回だけ評価する。時間の順序が重要な場合、通常のランダムな $K$ 分割検証は適さない。

#### PyTorch：k 分割のインデックス

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

### 性能の尺度

回帰では、平均二乗誤差（MSE）と平均絶対誤差（MAE）がよく使われる：

$$
MSE=\frac{1}{n}\sum_i(y_i-\hat y_i)^2,
\qquad
MAE=\frac{1}{n}\sum_i|y_i-\hat y_i|.
$$

分類では、混同行列が真陽性、偽陽性、真陰性、偽陰性を区別する。有用な尺度は

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\frac{TP}{TP+FN}.
$$

クラスが不均衡なとき、正解率は誤解を招きうる。たとえばデフォルトがまれな場合、常に「デフォルトしない」と予測するモデルは正解率が高くても、実際のデフォルトに対する再現率はゼロになる。適切な尺度は、誤りの種類ごとの経済的コストによって決まる。

#### PyTorch：性能の尺度

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

## モデル選択ガイド

| 目的とデータ | 出発点として有用な手法 | 主な考慮点 |
| --- | --- | --- |
| 連続的なターゲット、相関した多数の特徴量 | 罰則付き回帰 | 特徴量を標準化、罰則を調整、比較的解釈しやすい |
| 2 値のクラス、ほぼ分離可能な境界 | SVM またはロジスティック系の分類器 | 特徴量を標準化、マージン・カーネルを調整、確率の較正が必要なことも |
| 局所的な類似性に情報がある | KNN | 特徴量を標準化、$K$ を調整、高次元では予測が遅いことも |
| 非線形の交互作用と解釈しやすさが重要 | CART | 説明しやすい。不安定で分散が大きくなりやすい |
| 強力な非線形の予測が最優先 | ランダムフォレストまたはニューラルネットワーク | 柔軟性は高いが透明性は低く、調整も多い |
| 相関した特徴量を減らす | PCA | 線形、尺度に敏感、ターゲットに依存しない |
| 決まった数のまとまったクラスターを見つける | k 平均法 | $K$ を選ぶ必要あり。尺度と外れ値に敏感 |
| 入れ子のクラスター構造を探る | 階層的クラスタリング | 距離と連結法を選ぶ。樹形図が解釈を助ける |
| 非線形の低次元特徴量を学ぶ | オートエンコーダ | PCA より柔軟。データを多く要し、解釈しにくい |
| 逐次的な行動を最適化する | 強化学習 | 探索、遅れて来る報酬、環境・モデルのリスク |

モデル選択は非線形性だけで決まるものではない。ターゲットの種類、標本サイズ、次元、解釈可能性の要件、計算コスト、経済的な損失関数、そして何より信頼できる標本外の性能を反映すべきである。

## 試験チェックリスト

- 教師あり学習、教師なし学習、強化学習を区別する。
- 回帰のターゲットと分類のターゲットを区別する。
- 正則化がバイアスと分散のトレードオフをどう変えるかを説明する。
- どの手法に特徴量のスケーリングが必要か、どのハイパーパラメータが複雑さを制御するかを知る。
- 1 本の木、バギング、ランダムフォレストを比較する。
- PCA、オートエンコーダ、k 平均法、階層的クラスタリングを区別する。
- 学習・検証・テストの役割を分け、データの漏洩に気づく。
- 学習と検証の性能から過少適合と過学習を診断する。
- 評価指標を誤りの経済的コストに合わせる。

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
