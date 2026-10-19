---
title: 経済成長
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover,
.blur-hover:focus-within {
    filter: none;
}
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
.fx-concept-chart.dmp-chart { height: 420px; }
.fx-concept-chart.alpha-chart { height: 420px; }
.fx-concept-chart.tfp-chart { height: 480px; }
.fx-concept-chart.solow-chart { height: 500px; }
.fx-concept-chart.solow-s-chart { height: 500px; }
.fx-concept-chart.solow-n-chart { height: 500px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.tfp-chart { height: 520px; }
    .fx-concept-chart.solow-chart { height: 520px; }
    .fx-concept-chart.solow-s-chart { height: 520px; }
    .fx-concept-chart.solow-n-chart { height: 530px; }
}
/* The two-panel charts stack their panels on phones. */
@media (max-width: 587px) {
    .fx-concept-chart.dmp-chart { height: 760px; }
    .fx-concept-chart.alpha-chart { height: 770px; }
}
</style>

# 経済成長

## 経済成長の重要性

先進国と途上国の比較

| 要因 | 先進国 | 途上国 |
|--------|-----------|------------|
| 貯蓄と投資 | 貯蓄が多く、投資の経路が厚い | 貯蓄が少なく、投資が限られる |
| 金融市場と金融仲介機関 | 発達し、流動性の高い市場 | 未発達で厚みのない市場 |
| 政治の安定、法の支配、財産権 | 強固で執行力がある | 弱く、予測しにくい |
| 教育と医療の制度 | 充実し、人的資本が高い | 弱く、人的資本が低い |
| 税制と規制 | 効率的で成長に好意的 | 非効率で、負担が重いことが多い |
| 自由貿易と制約のない資本移動 | 開かれた貿易と資本移動 | 貿易・資本移動が制限されがち |

潜在成長率は株式投資家にとって重要である：
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$

各行の読み方：

* 1 行目：株式の期待リターンは、インカム（配当）と値上がり益の合計。
* 2 行目：値上がり益は、バリュエーションの変化（$P/E$ の再評価）と利益成長に分かれる。
* 3〜4 行目：EPS の成長はマクロの経路——インフレ $i$ と実質成長 $g$——に結びつき、これに株式数・利益構成の項 $\Delta S$（自社株買いと相対的な活力、つまり企業利益が経済全体より速く伸びるか遅く伸びるか）が加わる。

したがって、倍率が変わらなくても、潜在実質成長率 $g$ が高いほど $E(Re)$ の利益部分は大きくなる。



潜在成長率は債券投資家にとっても重要である：

* 成長率が高いほど金利と期待リターンが高くなる
* 一般に信用の質がよくなる
* 信用リスクが下がる
* 政府の政策と財政収支に影響する

## 生産関数

生産関数は次のように定義される：
$$
\begin{align}
Y&=Af(K,L)\\
&=AK^{\alpha}L^{1-\alpha}
\end{align}
$$
ここで $K$ は資本、$L$ は労働。$A$ は全要素生産性で、通常は技術を表す。$Y$ は総産出量。$\alpha$ は GDP のうち資本の提供者に支払われる割合である。

1 人当たり GDP については、
$$
\begin{align}
y&=\frac{Y}{L}\\
&=AK^{\alpha}L^{-\alpha}\\
&=A(\frac{K}{L})^{\alpha}\\
&=Ak^{\alpha}
\end{align}
$$
> [!Note]
> $$
> Y = \frac{Y}{L}L = yL
> $$

両辺の対数をとると成長率が得られる：
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
> [!Note]
>
> この手順は数学的には厳密ではない。経済学上の表現として受け取ればよい。

1 人当たりの成長率も同じ手順で求められる：
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
> [!note]
>
> 同様に、3 つ目の式に同じ手順を当てはめると：
> $$
> =\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}
> $$

### $\alpha$ の計算

資本について総産出量を最大化するには、微分して資本の限界生産力（MPK）を求めるのだった：
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
MPK が資本のレンタル価格（限界費用）$r$ に等しいとき最適になる：
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

### 生産関数の特徴

生産関数には 2 つの重要な特徴がある：

* 規模に関して収穫一定
* 限界生産力の逓減：投入を増やして得られる追加の産出は減っていく
* 1 人当たりで見ると、$\alpha$ が小さいほど限界生産力逓減の効果が強い。
* $A$ が上がると関数全体が上にシフトする（限界生産力逓減の効果を弱める）

#### 規模に関して収穫一定

両方の投入を同じ倍率で増やす（ここでは $K$ と $L$ を 2 倍にする）：
$$
K \to 2K,\quad L \to 2L
$$
すると
$$
\begin{align}
A(2K)^{\alpha}(2L)^{1-\alpha}
&= 2^{\alpha}\,2^{1-\alpha}\,AK^{\alpha}L^{1-\alpha}\\
&= 2^{\alpha+(1-\alpha)}AK^{\alpha}L^{1-\alpha}\\
&= 2AK^{\alpha}L^{1-\alpha}\\
&= 2Y.
\end{align}
$$
投入を 2 倍にすると産出も 2 倍になるので、この生産関数は規模に関して収穫一定である。
#### 限界生産力の逓減

<iframe
  class="fx-concept-chart dmp-chart"
  src="/charts/diminishing-marginal-productivity.html"
  loading="lazy"
  title="限界生産力の逓減"
></iframe>
労働を一定にすると、資本を 1 単位追加するごとの産出の増え方は前の 1 単位より小さくなる：生産曲線は平らになり、$\mathrm{MPK}=\alpha A k^{\alpha-1}$ は $k$ の上昇とともに低下する。労働についても同じで、資本を一定にすると $\mathrm{MPL}=(1-\alpha)A(K/L)^{\alpha}$ は $L$ の上昇とともに低下し、労働者を 1 人増やすごとの追加の産出は前の 1 人より少なくなる。だからこそ、$A$ の伸びがなければ、資本深化だけでは 1 人当たり産出の長期的な成長を維持できない。

#### 1 人当たりで見ると、$\alpha$ が小さいほど限界生産力逓減の効果が強い。

$y = Ak^{\alpha}$ を思い出そう。

上の 1 人当たり生産関数から、

$$
y = Ak^{\alpha}.
$$

資本装備率で微分すると、労働者 1 人当たりの資本の限界生産力が得られる（「限界生産力の逓減」の MPK のグラフと同じ考え方）：

$$
\frac{dy}{dk} = \alpha A k^{\alpha-1}.
$$

対数をとって微分すると、このノートですでに見た成長の分解に戻る：

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k}.
$$

したがって $k$ に対する $y$ の弾力性はちょうど $\alpha$ である：$k$ が 1% 上がると $y$ は $\alpha\%$ 上がる。傾き $\alpha A k^{\alpha-1}$ の指数は $\alpha-1<0$ で、$\alpha$ が小さいほど $\alpha-1$ はより負になり、$k$ の上昇につれて傾きはより速く低下する。

つまり $\alpha$ が小さいほど、資本深化の成長への寄与は小さく（$\alpha\,dk/k$ が小さい）、$y(k)$ 曲線はより凹で MPK が早く衰える——資本装備率の限界生産力逓減がより強くなる。

<iframe
  class="fx-concept-chart alpha-chart"
  src="/charts/alpha-diminishing-productivity.html"
  loading="lazy"
  title="α が小さいほど生産曲線は早く曲がる"
></iframe>
#### $A$ が上がると関数全体が上にシフトする

同じ 1 人当たり関数 $y = Ak^{\alpha}$ と成長の分解

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k},
$$

から、$\alpha$ が一定のまま、1 人当たり産出は 2 つの異なる方法で増えうる。ある曲線に沿って動く（$k$ が高く、$A$ は同じ）のが資本深化で、$\alpha\,dk/k$ の項にあたる。曲線全体が平行に上へシフトする（$A$ が高く、$k$ は同じ）のが TFP の上昇で、$dA/A$ の項にあたる。このシフトはどの資本装備率でも $y$ を引き上げるので、資本深化だけによる成長を限界生産力の逓減が制約する速さを和らげる。

<iframe
  class="fx-concept-chart tfp-chart"
  src="/charts/tfp-shift-capital-deepening.html"
  loading="lazy"
  title="資本深化と TFP の上昇の比較"
></iframe>

>[!Important]
>
>* 資本深化：$k=\frac{K}{L}$ を高めること。
>* $MPK=r$ のとき、資本深化はもはや役に立たない。

生産関数の拡張：

* 天然資源：再生可能なものと再生不能なもの。高い所得水準に達するのに、天然資源を保有・生産している必要は必ずしもない。**オランダ病**：資源の輸出需要が強いために通貨が上昇し、経済のほかの部門が競争力を失う現象。

* 労働供給：

  * 人口増加（出生率、死亡率、年齢構成）
  * 労働参加率
  * 移民の純流入
  * 平均労働時間

* 人的資本：

  * 教育、訓練、生活経験
  * 教育には波及効果（外部性）がある
  * 教育はイノベーションを通じて成長を促す（$A$ を高める）。

* ICT 資本と非 ICT 資本：

  * 情報・コンピュータ・通信機器への支出はネットワーク外部性を生み、生産性を高める。
  * 非 ICT：非住宅建設、輸送機器、機械を含む。
* 技術：人的資本 + ICT・非 ICT 資本
* 公共インフラ

## 成長理論

成長理論は $\frac{dy}{y}$、つまり 1 人当たり GDP の成長速度を研究する。

上の式を思い出そう：
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha\frac{dk}{k},\qquad \frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
$$

> [!note]
>
> 上の式から、$\alpha$ の 2 つ目の意味は、資本に対する産出の弾力性である。

### 古典派成長理論（マルサス）

重要な仮定は、$L$ が増え、$Y$ も増えること。$Y$ の増加はさらに $L$ を増やす：技術進歩 $\to$ 労働生産性 $\uparrow$ $\to$ 人口増加の加速 $\to$ 労働の限界収益の逓減 $\to$ 1 人当たり所得の低下。

したがって $y$ について見ると、長期的には技術進歩は人口を増やすだけで、人々を豊かにはしない。1 人当たりの産出は成長しない。

### 新古典派成長理論（ロバート・ソロー）

以下の仮定はすべて経済の**長期均衡**の状態についてのものである。モデルの目的は、その状態に達したときの $(k,y)$ を求めることである。

長期的な $y$ の成長率は次に関係する：

* 貯蓄率・投資率 $s$
* 技術進歩率 $\theta=\frac{dA}{A}$
* 人口増加率 $n=\frac{dL}{L}$

**長期的に $\frac{Y}{K}$ が一定だと仮定する**と、$\frac{Y/L}{K/L}$ も一定、したがって $\frac{y}{k}$ も一定となる。すると $\frac{dy}{y}=\frac{dk}{k}$。

先の成長の式は $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$。

これらを組み合わせると、$(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$、$\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$。これを $g^*=\frac{\theta}{1-\alpha}$ と書く。

$Y=yL$ より、$G^*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$。

**閉鎖経済では、投資は国内の貯蓄でまかなわれなければならないと仮定する**。$s$ を $Y$ のうち貯蓄される割合とすると $I=sY$（$I$ は総投資）。さらに $\delta$ を減価償却率とすると、$dK = sY-\delta K$。

$k=\frac{K}{L}$ より、$\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$。$\frac{dk}{k}=\frac{\theta}{1-\alpha}$ とあわせると：
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
すべてのパラメータ $s, \theta, \alpha,\delta,n$ が変わらないと仮定すれば、$\varphi$ はある定数になる。

これは最初の仮定を与える：**長期的に $\frac{Y}{K}$ は一定である。**

次に $MPK = \alpha\frac{Y}{K}$ を思い出そう。$\frac{Y}{K}$ は一定と仮定しており、$\alpha$ も一定なので、$MPK$ も一定になる。

さらに $\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$。したがって $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$。$\frac{sY}{L}=\frac{I}{L}$ なので、$sy$ はおおよそ労働者 1 人当たりの総投資である。この式から、新しい投資は 3 つの部分に分かれる：

* 資本深化
* 減価償却に見合う固定資産の更新
* 新しい労働者への資本の提供

$sy=sAk^{\alpha}$（これは仮定なしに定義から成り立つ）と、$sy = (\frac{\theta}{1-\alpha}+\delta+n)k$（均衡状態の仮定から得た式）を連立して解けば、$\frac{dy}{y}=\frac{\theta}{1-\alpha}$ が一定となる $k$ とそれに対応する $y$ を求められる。

<iframe
  class="fx-concept-chart solow-chart"
  src="/charts/solow-steady-state.html"
  loading="lazy"
  title="ソローの定常状態：貯蓄と必要投資"
></iframe>

<iframe
  class="fx-concept-chart solow-s-chart"
  src="/charts/solow-saving-rate-shift.html"
  loading="lazy"
  title="貯蓄率の上昇による定常状態の移動"
></iframe>

貯蓄率 $s$ が上がると、貯蓄曲線 $sy = sAk^{\alpha}$ は $s_1 f(k)$ から $s_2 f(k)$ へ上にシフトし、固定された必要投資の直線 $[\delta + n + \theta/(1-\alpha)]k$ との交点は定常状態 A から B へ移る——$k^*$ と $y^*$ は高くなる——が、長期の成長率 $\theta/(1-\alpha)$ は変わらない。$s \in [0,1]$ なので、$s$ を上げて均衡の $y$ と $k$ を引き上げるのには限界がある：$s$ は 1 を超えられない。

<iframe
  class="fx-concept-chart solow-n-chart"
  src="/charts/solow-labor-growth-shift.html"
  loading="lazy"
  title="労働力の伸びの上昇による定常状態の低下"
></iframe>

労働力の伸び $n$ が上がると、必要投資の直線は $[\delta + n_1 + \theta/(1-\alpha)]k$ からより急な $[\delta + n_2 + \theta/(1-\alpha)]k$ へと上に回転し、固定された貯蓄曲線 $sy = sAk^{\alpha}$ との交点は A から B へ移る——$k^*$ と $y^*$ は低くなる——が、長期の 1 人当たり成長率 $\theta/(1-\alpha)$ は変わらない（経済全体の成長率 $G^*=n+\theta/(1-\alpha)$ は $n$ とともに上がる）。

> [!Note]
>
> $s$ が高まると $k$ と $y$ は大きくなるが、$\frac{\theta}{1-\alpha}$ は変わらない。

> [!Important]
>
> 新古典派成長理論のいくつかの結論：
>
> * 長期的に、資本蓄積は産出の水準に影響するが、成長率には影響しない
> * 当初の資本・労働比率や生産性の水準にかかわらず、成長する経済は定常成長率の状態に向かう
> * 定常状態での産出の成長率は $G^*=n+\frac{\theta}{1-\alpha}$
>
> モデルの含意：
>
> * 資本の蓄積（資本深化）を始めた当初は、成長率が定常成長率を上回るが、やがて減速する。
> * 1 人当たり潜在 GDP の成長を持続させる唯一の方法は、技術進歩か全要素生産性の伸びである。
>
> 貯蓄の効果：
>
> * 貯蓄率の上昇は、当初は一時的に経済成長を高める。経済が定常成長に達すると、成長率は所得のうち貯蓄・投資に回す割合に依存しなくなる。

#### 例題

新古典派モデルから、A 国と B 国の定常成長率を計算せよ。

| 国 | 要素費用全体に占める労働費用（%） | TFP 成長率（%） | 労働力の伸び（%） |
| ------- | ----------------------------------- | -------------- | ---------------------- |
| A | 56.1 | 2.9 | 1.2 |
| B | 53.8 | 0.2 | 0 |

$G^*=\Delta Y/Y=\frac{\theta}{1-\alpha}+n$ を思い出そう。要素費用全体に占める労働費用 $=1-\alpha$、TFP 成長率 $=\theta$、労働力の伸び $=n$ である。

<span class="blur-hover" tabindex="0">

**A 国：**

$$
G^*=\frac{2.9\%}{56.1\%}+1.2\%=6.37\%
$$

**B 国：**

$$
G^*=\frac{0.2\%}{53.8\%}+0\%=0.37\%
$$

</span>

#### 例題

A 国の潜在 GDP 成長率の推計は 8.5%、B 国は 0.5% である。前の例題より、A 国は $G^*=6.37\%$、B 国は $G^*=0.37\%$。

定常成長率と潜在 GDP 成長率を比較し、結果を説明せよ。

<span class="blur-hover" tabindex="0">

**A 国：** 潜在 GDP 成長率 $8.5\% > G^*=6.37\%$ なので、経済はまだ収束の途中にある。物的資本ストックは定常状態を下回っており、資本深化が生産性の伸びと潜在 GDP 成長の重要な原動力になっている。

**B 国：** 潜在 GDP 成長率 $0.5\%$ と $G^*=0.37\%$——ほぼ定常状態にある。資本投資は成長率に大きな影響を与えない。潜在 GDP 成長に影響するのは、TFP の伸び、労働力の伸び、産出に占める労働分配率の変化だけである。

</span>

### 内生的成長理論

新古典派モデルと違い、内生的成長モデルでは、経済全体として資本の限界収益は逓減しないと仮定する。

* 資本蓄積が長期的な成長を説明する主な要因である
* 研究開発支出には大きな正の外部性（波及効果）がある

そのため経済は定常成長率に到達しない。むしろ貯蓄と投資によって、恒久的に高い率で自律的な成長が生まれうる。

### 収束をめぐる議論

**絶対的収束**：途上国はいずれ追いつき、1 人当たりの産出が先進国と同じ水準になる。

* 新古典派モデルはすべての国が同じ技術を利用できると仮定するので、各国の 1 人当たり成長率は収束することになる
* 新古典派モデルは絶対的収束を意味しない。

**条件付き収束**：貯蓄率、人口増加率、生産関数が同じなら、$y$ の水準も成長率 $\frac{dy}{y}$ も同じになる。

**クラブ収束**：「クラブ」の一員である富裕国と中所得国だけが、最も豊かな国の所得水準に収束していく。貧しい国も制度改革をすればクラブに加われる。必要な制度改革を行わない国は、収束しない罠に陥る。

収束は次によって起こりうる：

* 技術進歩
* 資本深化

内生的成長モデルでは、先進国のほうが資本深化を進めやすいので、収束が起こるという予測はない。
