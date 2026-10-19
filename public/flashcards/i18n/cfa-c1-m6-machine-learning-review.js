deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M6 机器学习 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M6 機械学習 · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M6 Apprentissage automatique · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q6-types": {
   "zh": {
    "topic": "学习类型",
    "front": "区分监督学习、无监督学习和强化学习，并各举一个金融例子。",
    "back": "<div class=\"ans\"><ul><li><strong>监督学习</strong>：有标注的结果；预测数值或类别（预测盈利、对违约分类）</li><li><strong>无监督学习</strong>：没有标注；寻找结构或降维（公司分组、构建因子）</li><li><strong>强化学习</strong>：从连续行动中获得奖励；学习一个策略（动态交易、交易执行）</li></ul></div>",
    "gap": "回归（连续目标）和分类（离散类别）都属于监督学习。"
   },
   "ja": {
    "topic": "学習の種類",
    "front": "教師あり学習、教師なし学習、強化学習を区別し、それぞれ金融の例を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>教師あり</strong>：ラベル付きの結果がある；値やクラスを予測（利益予測、デフォルト分類）</li><li><strong>教師なし</strong>：ラベルなし；構造を見つける、次元を削減する（企業のグループ分け、ファクター構築）</li><li><strong>強化学習</strong>：一連の行動から報酬を得る；方策を学ぶ（動的トレーディング、執行）</li></ul></div>",
    "gap": "回帰（連続的な目的変数）も分類（離散的なクラス）も教師あり学習。"
   },
   "fr": {
    "topic": "Types d’apprentissage",
    "front": "Distinguez l’apprentissage supervisé, non supervisé et par renforcement, avec un exemple financier pour chacun.",
    "back": "<div class=\"ans\"><ul><li><strong>Supervisé</strong> : résultats étiquetés ; prédire une valeur ou une classe (prévoir les bénéfices, classer les défauts)</li><li><strong>Non supervisé</strong> : pas d’étiquettes ; trouver une structure ou réduire la dimension (segmenter des entreprises, construire des facteurs)</li><li><strong>Par renforcement</strong> : récompenses issues d’actions successives ; apprendre une politique (trading dynamique, exécution)</li></ul></div>",
    "gap": "La régression (cible continue) et la classification (classe discrète) sont toutes deux supervisées."
   }
  },
  "q6-penalized": {
   "zh": {
    "topic": "监督学习 · 惩罚回归",
    "front": "惩罚回归中的调节参数 \\(\\lambda\\) 起什么作用？为什么要先把特征标准化？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\min\\Big\\{\\sum_i(y_i-\\beta_0-x_i'\\boldsymbol\\beta)^2+\\lambda P(\\boldsymbol\\beta)\\Big\\}$$</div><p>\\(\\lambda=0\\) 就是 OLS；\\(\\lambda\\) 越大，系数收缩越多：<strong>偏差更大、方差更小</strong>，样本外误差往往更低。要标准化，因为惩罚项取决于系数的量纲。</p></div>"
   },
   "ja": {
    "topic": "教師あり · 罰則付き回帰",
    "front": "罰則付き回帰のチューニング・パラメータ \\(\\lambda\\) は何をするか。なぜ先に特徴量を標準化するのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\min\\Big\\{\\sum_i(y_i-\\beta_0-x_i'\\boldsymbol\\beta)^2+\\lambda P(\\boldsymbol\\beta)\\Big\\}$$</div><p>\\(\\lambda=0\\) なら OLS；\\(\\lambda\\) が大きいほど係数を強く縮小する：<strong>バイアスは増え、分散は減る</strong>ので、サンプル外誤差は下がることが多い。罰則は係数のスケールに依存するので標準化する。</p></div>"
   },
   "fr": {
    "topic": "Supervisé · régression pénalisée",
    "front": "Que fait le paramètre de réglage \\(\\lambda\\) dans une régression pénalisée ? Pourquoi standardiser d’abord les variables ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\min\\Big\\{\\sum_i(y_i-\\beta_0-x_i'\\boldsymbol\\beta)^2+\\lambda P(\\boldsymbol\\beta)\\Big\\}$$</div><p>\\(\\lambda=0\\) donne les MCO ; un \\(\\lambda\\) plus grand réduit davantage les coefficients : <strong>plus de biais, moins de variance</strong>, souvent une erreur hors échantillon plus faible. On standardise car la pénalité dépend de l’échelle des coefficients.</p></div>"
   }
  },
  "q6-lasso": {
   "zh": {
    "topic": "监督学习 · LASSO 与岭回归",
    "front": "LASSO 与岭回归有什么不同？",
    "back": "<div class=\"ans\"><ul><li><strong>LASSO</strong>：\\(L_1\\) 惩罚 \\(\\sum|\\beta_j|\\)；可以把系数<strong>恰好压到零</strong>，因此也能<strong>筛选变量</strong></li><li><strong>岭回归</strong>：\\(\\sum\\beta_j^2\\)；把系数向零收缩，但不会到零</li></ul></div>",
    "gap": "惩罚针对的是系数大小，而不是直接针对特征的个数。"
   },
   "ja": {
    "topic": "教師あり · LASSO とリッジ",
    "front": "LASSO はリッジ回帰とどう違うか。",
    "back": "<div class=\"ans\"><ul><li><strong>LASSO</strong>：\\(L_1\\) 罰則 \\(\\sum|\\beta_j|\\)；係数を<strong>ちょうどゼロ</strong>にできるので、<strong>変数選択</strong>も行う</li><li><strong>リッジ</strong>：\\(\\sum\\beta_j^2\\)；係数をゼロに向けて縮めるが、ゼロにはしない</li></ul></div>",
    "gap": "罰則は係数の大きさにかかるもので、特徴量の数に直接かかるわけではない。"
   },
   "fr": {
    "topic": "Supervisé · LASSO ou ridge",
    "front": "En quoi LASSO diffère-t-il de la régression ridge ?",
    "back": "<div class=\"ans\"><ul><li><strong>LASSO</strong> : pénalité \\(L_1\\) \\(\\sum|\\beta_j|\\) ; peut mettre des coefficients <strong>exactement à zéro</strong>, donc <strong>sélectionne aussi les variables</strong></li><li><strong>Ridge</strong> : \\(\\sum\\beta_j^2\\) ; réduit vers zéro, sans l’atteindre</li></ul></div>",
    "gap": "La pénalité porte sur la taille des coefficients, pas directement sur le nombre de variables."
   }
  },
  "q6-svm": {
   "zh": {
    "topic": "监督学习 · SVM",
    "front": "SVM 最大化的是什么？什么是支持向量？更大的 \\(C\\) 有什么作用？",
    "back": "<div class=\"ans\"><p>它寻找类别之间<strong>间隔最宽</strong>的分隔超平面；离边界最近的点就是<strong>支持向量</strong>。</p><p>软间隔允许违例；<strong>\\(C\\) 越大</strong>，对违例的惩罚越重：间隔更窄、拟合更复杂。<strong>核函数</strong>用于处理非线性边界。</p></div>"
   },
   "ja": {
    "topic": "教師あり · SVM",
    "front": "SVM は何を最大化するか。サポートベクターとは何か。\\(C\\) を大きくするとどうなるか。",
    "back": "<div class=\"ans\"><p>クラス間の<strong>マージンが最も広い</strong>分離超平面を求める；境界に最も近い点が<strong>サポートベクター</strong>。</p><p>ソフトマージンは違反を許容する；<strong>\\(C\\) が大きい</strong>ほど違反への罰則が重く、マージンは狭く、当てはめは複雑になる。非線形の境界は<strong>カーネル</strong>で扱う。</p></div>"
   },
   "fr": {
    "topic": "Supervisé · SVM",
    "front": "Que maximise un SVM, que sont les vecteurs de support, et quel est l’effet d’un \\(C\\) plus grand ?",
    "back": "<div class=\"ans\"><p>Il cherche l’hyperplan séparateur avec la <strong>marge la plus large</strong> entre les classes ; les points les plus proches de la frontière sont les <strong>vecteurs de support</strong>.</p><p>Une marge souple tolère des violations ; un <strong>\\(C\\) plus grand</strong> les pénalise davantage : marge plus étroite, ajustement plus complexe. Les <strong>noyaux</strong> traitent les frontières non linéaires.</p></div>"
   }
  },
  "q6-knn": {
   "zh": {
    "topic": "监督学习 · KNN",
    "front": "KNN 如何对一个新点分类？\\(K\\) 的选择如何影响拟合？",
    "back": "<div class=\"ans\"><p>找出最近的 \\(K\\) 个训练点，取<strong>多数类别</strong>（回归则取目标的均值）。属于非参数方法；要先<strong>对特征做缩放</strong>。</p><ul><li>\\(K\\) 小：灵活，偏差低，方差高</li><li>\\(K\\) 大：更平滑，偏差更高</li></ul><p>通过验证来选择 \\(K\\)。</p></div>"
   },
   "ja": {
    "topic": "教師あり · KNN",
    "front": "KNN は新しい点をどう分類するか。\\(K\\) の選び方は当てはまりにどう影響するか。",
    "back": "<div class=\"ans\"><p>最も近い \\(K\\) 個の訓練データを探し、<strong>多数派のクラス</strong>を採る（回帰なら目的変数の平均）。ノンパラメトリック；先に<strong>特徴量のスケールを揃える</strong>。</p><ul><li>\\(K\\) が小さい：柔軟、低バイアス、高分散</li><li>\\(K\\) が大きい：滑らか、バイアスは高め</li></ul><p>\\(K\\) は検証で選ぶ。</p></div>"
   },
   "fr": {
    "topic": "Supervisé · KNN",
    "front": "Comment KNN classe-t-il un nouveau point, et comment le choix de \\(K\\) influe-t-il sur l’ajustement ?",
    "back": "<div class=\"ans\"><p>Trouver les \\(K\\) points d’entraînement les plus proches et prendre la <strong>classe majoritaire</strong> (la moyenne de la cible en régression). Non paramétrique ; <strong>mettre les variables à l’échelle</strong> d’abord.</p><ul><li>\\(K\\) petit : flexible, biais faible, variance élevée</li><li>\\(K\\) grand : plus lisse, biais plus élevé</li></ul><p>Choisir \\(K\\) par validation.</p></div>"
   }
  },
  "q6-cart": {
   "zh": {
    "topic": "监督学习 · CART",
    "front": "分类与回归树如何预测、如何选择分裂、如何避免过拟合？",
    "back": "<div class=\"ans\"><ul><li>叶节点预测<strong>多数类别</strong>（分类）或<strong>均值</strong>（回归）</li><li>分裂用于降低不纯度（<strong>基尼系数</strong>、熵）或平方误差</li><li>控制深度、最小叶节点样本数、叶节点个数；<strong>剪掉</strong>贡献很小的分支</li></ul></div>"
   },
   "ja": {
    "topic": "教師あり · CART",
    "front": "分類・回帰木はどう予測し、分岐をどう選び、過学習をどう避けるか。",
    "back": "<div class=\"ans\"><ul><li>葉は<strong>多数派のクラス</strong>（分類）または<strong>平均</strong>（回帰）を予測する</li><li>分岐は不純度（<strong>ジニ係数</strong>、エントロピー）や二乗誤差を減らすように選ぶ</li><li>深さ、葉の最小サイズ、葉の数を制御し、効果の小さい枝を<strong>剪定</strong>する</li></ul></div>"
   },
   "fr": {
    "topic": "Supervisé · CART",
    "front": "Comment un arbre de classification et de régression prédit-il, choisit-il ses divisions et évite-t-il le surapprentissage ?",
    "back": "<div class=\"ans\"><ul><li>La feuille prédit la <strong>classe majoritaire</strong> (classification) ou la <strong>moyenne</strong> (régression)</li><li>Les divisions réduisent l’impureté (<strong>Gini</strong>, entropie) ou l’erreur quadratique</li><li>Contrôler la profondeur, la taille minimale des feuilles, le nombre de feuilles ; <strong>élaguer</strong> les branches peu utiles</li></ul></div>"
   }
  },
  "q6-ensemble": {
   "zh": {
    "topic": "监督学习 · 集成方法",
    "front": "比较单棵深树、装袋法（bagging）和随机森林。",
    "back": "<div class=\"ans\"><ul><li><strong>深树</strong>：偏差低，<strong>方差高</strong></li><li><strong>装袋法</strong>：在自助抽样样本上建树，把预测取平均 → 方差降低</li><li><strong>随机森林</strong>：装袋法加上<strong>每次分裂时随机选取一部分特征</strong> → 树之间相关性更低，平均的收益更大，但可解释性更差</li></ul></div>"
   },
   "ja": {
    "topic": "教師あり · アンサンブル",
    "front": "1 本の深い木、バギング、ランダムフォレストを比較せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>深い木</strong>：低バイアス、<strong>高分散</strong></li><li><strong>バギング</strong>：ブートストラップ標本ごとに木を作り、予測を平均 → 分散が下がる</li><li><strong>ランダムフォレスト</strong>：バギングに加え、<strong>分岐ごとに特徴量の一部をランダムに選ぶ</strong> → 木どうしの相関が下がり、平均化の効果が大きいが、解釈しにくい</li></ul></div>"
   },
   "fr": {
    "topic": "Supervisé · méthodes d’ensemble",
    "front": "Comparez un arbre profond unique, le bagging et une forêt aléatoire.",
    "back": "<div class=\"ans\"><ul><li><strong>Arbre profond</strong> : biais faible, <strong>variance élevée</strong></li><li><strong>Bagging</strong> : arbres sur des échantillons bootstrap, prédictions moyennées → variance plus faible</li><li><strong>Forêt aléatoire</strong> : bagging plus un <strong>sous-ensemble aléatoire de variables à chaque division</strong> → arbres décorrélés, moyenne plus efficace, moins interprétable</li></ul></div>"
   }
  },
  "q6-pca": {
   "zh": {
    "topic": "无监督学习 · PCA",
    "front": "PCA 产生什么？这里的特征值是什么？它有什么局限？",
    "back": "<div class=\"ans\"><p>标准化特征的互不相关的线性组合 \\(PC_k=\\boldsymbol w_k'x\\)；特征值 \\(\\lambda_k\\) = 所捕捉的方差；解释比例为 \\(\\lambda_k/\\sum\\lambda_j\\)。PC1 是方差最大的方向。</p><p>局限：<strong>线性，且与目标无关</strong>；一个主成分可能解释了很多方差，却无法预测 \\(Y\\)，而且难以解释。</p></div>"
   },
   "ja": {
    "topic": "教師なし · PCA",
    "front": "PCA は何を生み出すか。ここでの固有値は何か。限界は何か。",
    "back": "<div class=\"ans\"><p>標準化した特徴量の互いに無相関な線形結合 \\(PC_k=\\boldsymbol w_k'x\\)；固有値 \\(\\lambda_k\\) = 捉えた分散；説明割合は \\(\\lambda_k/\\sum\\lambda_j\\)。PC1 は分散が最大の方向。</p><p>限界：<strong>線形で、目的変数と無関係</strong>；分散をよく説明しても \\(Y\\) を予測できないことがあり、解釈も難しい。</p></div>"
   },
   "fr": {
    "topic": "Non supervisé · ACP",
    "front": "Que produit l’ACP, que représente ici une valeur propre, et quelle est une limite ?",
    "back": "<div class=\"ans\"><p>Des combinaisons linéaires non corrélées \\(PC_k=\\boldsymbol w_k'x\\) des variables standardisées ; la valeur propre \\(\\lambda_k\\) = variance captée ; part expliquée \\(\\lambda_k/\\sum\\lambda_j\\). PC1 est la direction de variance maximale.</p><p>Limite : <strong>linéaire et indépendante de la cible</strong> ; une composante peut expliquer de la variance sans prédire \\(Y\\), et elle est difficile à interpréter.</p></div>"
   }
  },
  "q6-autoencoder": {
   "zh": {
    "topic": "无监督学习 · 自编码器",
    "front": "什么是自编码器？它与 PCA 相比如何？",
    "back": "<div class=\"ans\"><p>一种训练来<strong>复现自身输入</strong>的神经网络：编码器 \\(z=f(x)\\) 经过瓶颈层，解码器 \\(\\hat x=g(z)\\)，最小化 \\(\\|x-\\hat x\\|^2\\)。</p><p>与 PCA 不同，它能学习<strong>非线性</strong>表示，但需要更多数据和调参，透明度也更低。</p></div>"
   },
   "ja": {
    "topic": "教師なし · オートエンコーダ",
    "front": "オートエンコーダとは何か。PCA と比べてどうか。",
    "back": "<div class=\"ans\"><p><strong>入力を再現する</strong>ように訓練したニューラルネットワーク：エンコーダ \\(z=f(x)\\) がボトルネックを通り、デコーダ \\(\\hat x=g(z)\\) で戻し、\\(\\|x-\\hat x\\|^2\\) を最小化する。</p><p>PCA と違って<strong>非線形</strong>の表現を学べるが、より多くのデータと調整が必要で、透明性は低い。</p></div>"
   },
   "fr": {
    "topic": "Non supervisé · autoencodeur",
    "front": "Qu’est-ce qu’un autoencodeur, et comment se compare-t-il à l’ACP ?",
    "back": "<div class=\"ans\"><p>Un réseau de neurones entraîné à <strong>reproduire son entrée</strong> : encodeur \\(z=f(x)\\) à travers un goulot, décodeur \\(\\hat x=g(z)\\), en minimisant \\(\\|x-\\hat x\\|^2\\).</p><p>Contrairement à l’ACP, il peut apprendre des représentations <strong>non linéaires</strong>, mais demande plus de données et de réglages et il est moins transparent.</p></div>"
   }
  },
  "q6-clustering": {
   "zh": {
    "topic": "无监督学习 · 聚类",
    "front": "K 均值聚类与层次聚类：各自如何运作？哪一种需要事先给定 \\(K\\)？",
    "back": "<div class=\"ans\"><ul><li><strong>K 均值</strong>：<strong>事先设定 \\(K\\)</strong>；交替进行“把点分到最近的质心”和“重新计算质心”。对量纲、异常值和初始质心敏感。</li><li><strong>层次聚类</strong>：凝聚式（合并）或分裂式（拆分），用<strong>树状图</strong>表示；需要一个连接规则（单连接、全连接、平均连接）。在某个高度切开树；<strong>不需要事先给定 \\(K\\)</strong>。</li></ul></div>"
   },
   "ja": {
    "topic": "教師なし · クラスタリング",
    "front": "K 平均法と階層的クラスタリング：それぞれどう動き、どちらが事前に \\(K\\) を必要とするか。",
    "back": "<div class=\"ans\"><ul><li><strong>K 平均法</strong>：<strong>\\(K\\) を事前に決める</strong>；点を最も近い重心に割り当てることと、重心の再計算を交互に行う。スケール、外れ値、初期重心に敏感。</li><li><strong>階層的</strong>：凝集型（併合）または分割型（分割）で、<strong>デンドログラム</strong>で表す；連結法（単連結、完全連結、平均連結）が必要。木をある高さで切る；<strong>\\(K\\) を事前に決める必要はない</strong>。</li></ul></div>"
   },
   "fr": {
    "topic": "Non supervisé · clustering",
    "front": "K-moyennes ou clustering hiérarchique : comment fonctionne chacun, et lequel exige \\(K\\) à l’avance ?",
    "back": "<div class=\"ans\"><ul><li><strong>K-moyennes</strong> : <strong>\\(K\\) fixé à l’avance</strong> ; alterner l’affectation des points au centroïde le plus proche et le recalcul des centroïdes. Sensible à l’échelle, aux valeurs aberrantes et aux centroïdes de départ.</li><li><strong>Hiérarchique</strong> : agglomératif (fusion) ou divisif (division), représenté par un <strong>dendrogramme</strong> ; exige une règle de liaison (simple, complète, moyenne). On coupe l’arbre à une hauteur ; <strong>pas besoin de \\(K\\) à l’avance</strong>.</li></ul></div>"
   }
  },
  "q6-nn": {
   "zh": {
    "topic": "神经网络",
    "front": "神经网络如何学习？说出它的各层，以及反向传播和学习率的作用。",
    "back": "<div class=\"ans\"><p>每个神经元计算 \\(a=g\\big(\\sum w_jx_j+b\\big)\\)，带一个非线性激活函数（如 ReLU）。输入层 → 隐藏层 → 输出层。</p><p><strong>前向传播</strong>得到 \\(\\hat y\\)；<strong>反向传播</strong>用链式法则求梯度；梯度下降更新 \\(\\theta\\leftarrow\\theta-\\eta\\nabla L\\)。\\(\\eta\\) 太大会越过最优点；太小则收敛很慢。</p></div>",
    "gap": "深层网络容易过拟合：用权重惩罚、dropout 或提前停止。"
   },
   "ja": {
    "topic": "ニューラルネットワーク",
    "front": "ニューラルネットワークはどう学習するか。層の名前と、誤差逆伝播法と学習率の役割を述べよ。",
    "back": "<div class=\"ans\"><p>各ニューロンは非線形の活性化関数（例：ReLU）で \\(a=g\\big(\\sum w_jx_j+b\\big)\\) を計算する。入力層 → 隠れ層 → 出力層。</p><p><strong>順伝播</strong>で \\(\\hat y\\) を得て、<strong>誤差逆伝播</strong>で連鎖律により勾配を求め、勾配降下法で \\(\\theta\\leftarrow\\theta-\\eta\\nabla L\\) と更新する。\\(\\eta\\) が大きすぎると行き過ぎ、小さすぎると収束が遅い。</p></div>",
    "gap": "深いネットワークは過学習しやすい：重みの罰則、ドロップアウト、早期終了を使う。"
   },
   "fr": {
    "topic": "Réseaux de neurones",
    "front": "Comment un réseau de neurones apprend-il ? Nommez ses couches et le rôle de la rétropropagation et du taux d’apprentissage.",
    "back": "<div class=\"ans\"><p>Chaque neurone calcule \\(a=g\\big(\\sum w_jx_j+b\\big)\\) avec une activation non linéaire (par ex. ReLU). Couches d’entrée → cachées → de sortie.</p><p>La <strong>propagation avant</strong> donne \\(\\hat y\\) ; la <strong>rétropropagation</strong> applique la règle de dérivation en chaîne pour les gradients ; la descente de gradient met à jour \\(\\theta\\leftarrow\\theta-\\eta\\nabla L\\). Un \\(\\eta\\) trop grand dépasse l’optimum ; trop petit, la convergence est lente.</p></div>",
    "gap": "Les réseaux profonds surapprennent facilement : pénalités sur les poids, dropout ou arrêt précoce."
   }
  },
  "q6-rl": {
   "zh": {
    "topic": "强化学习",
    "front": "强化学习的智能体最大化的是什么？它必须处理什么权衡？",
    "back": "<div class=\"ans\"><p>期望的<strong>折现累计奖励</strong> \\(E\\big[\\sum_k\\gamma^kr_{t+k+1}\\big]\\)，通过策略 \\(\\pi(a\\mid s)\\) 选择行动。</p><p>它要在<strong>探索</strong>（尝试新行动）和<strong>利用</strong>（采用已知最优）之间取得平衡。在金融中，交易成本、市场状态切换和不现实的模拟都会增加模型风险。</p></div>"
   },
   "ja": {
    "topic": "強化学習",
    "front": "強化学習のエージェントは何を最大化し、どんなトレードオフを管理しなければならないか。",
    "back": "<div class=\"ans\"><p>期待される<strong>割引累積報酬</strong> \\(E\\big[\\sum_k\\gamma^kr_{t+k+1}\\big]\\) を最大化し、方策 \\(\\pi(a\\mid s)\\) で行動を選ぶ。</p><p><strong>探索</strong>（新しい行動を試す）と<strong>活用</strong>（既知の最善を使う）のバランスをとる。金融では、取引コスト、レジームの変化、非現実的なシミュレーションがモデル・リスクを高める。</p></div>"
   },
   "fr": {
    "topic": "Apprentissage par renforcement",
    "front": "Que maximise un agent d’apprentissage par renforcement, et quel arbitrage doit-il gérer ?",
    "back": "<div class=\"ans\"><p>La <strong>récompense cumulée actualisée</strong> espérée \\(E\\big[\\sum_k\\gamma^kr_{t+k+1}\\big]\\), en choisissant ses actions via une politique \\(\\pi(a\\mid s)\\).</p><p>Il arbitre entre <strong>exploration</strong> (essayer de nouvelles actions) et <strong>exploitation</strong> (utiliser la meilleure connue). En finance, les coûts, les changements de régime et des simulations irréalistes ajoutent du risque de modèle.</p></div>"
   }
  },
  "q6-samples": {
   "zh": {
    "topic": "评估 · 数据划分",
    "front": "训练集、验证集和测试集各有什么用途？主要的信息泄露风险是什么？",
    "back": "<div class=\"ans\"><ul><li><strong>训练集</strong>：估计参数</li><li><strong>验证集</strong>：选择算法和超参数（\\(\\lambda\\)、\\(K\\)、深度）</li><li><strong>测试集</strong>：在从未用过的数据上做一次最终估计</li></ul><p>不要在测试集上反复调参；对于时间序列，要<strong>按时间顺序</strong>划分，而不是打乱。</p></div>"
   },
   "ja": {
    "topic": "評価 · データ分割",
    "front": "訓練データ、検証データ、テストデータはそれぞれ何のためか。主なリーケージのリスクは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>訓練</strong>：パラメータを推定する</li><li><strong>検証</strong>：アルゴリズムとハイパーパラメータ（\\(\\lambda\\)、\\(K\\)、深さ）を選ぶ</li><li><strong>テスト</strong>：手つかずのデータで最終的な推定を 1 回だけ行う</li></ul><p>テストデータで何度もチューニングしない；時系列はシャッフルせず<strong>時間順</strong>に分割する。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · découpage des données",
    "front": "À quoi servent les ensembles d’entraînement, de validation et de test ? Quel est le principal risque de fuite ?",
    "back": "<div class=\"ans\"><ul><li><strong>Entraînement</strong> : estimer les paramètres</li><li><strong>Validation</strong> : choisir les algorithmes et hyperparamètres (\\(\\lambda\\), \\(K\\), profondeur)</li><li><strong>Test</strong> : une estimation finale unique sur des données intactes</li></ul><p>Ne pas régler à répétition sur l’ensemble de test ; pour les séries temporelles, découper <strong>chronologiquement</strong> plutôt que mélanger.</p></div>"
   }
  },
  "q6-bias-variance": {
   "zh": {
    "topic": "评估 · 过拟合",
    "front": "训练误差和验证误差如何诊断欠拟合和过拟合？",
    "back": "<div class=\"ans\"><ul><li><strong>欠拟合</strong>：训练误差和验证误差都<strong>高</strong>（偏差高）</li><li><strong>过拟合</strong>：训练误差很低，验证误差<strong>高或在上升</strong>（方差高）</li></ul><div class=\"eq-block\">$$E[(Y-\\hat f)^2]=\\text{Bias}^2+\\text{Var}+\\sigma_\\varepsilon^2$$</div><p>复杂度越高，偏差越低、方差越高；\\(\\sigma_\\varepsilon^2\\) 是不可约的基础误差。</p></div>"
   },
   "ja": {
    "topic": "評価 · 過学習",
    "front": "訓練誤差と検証誤差から、過少適合と過学習をどう診断するか。",
    "back": "<div class=\"ans\"><ul><li><strong>過少適合</strong>：訓練誤差も検証誤差も<strong>高い</strong>（高バイアス）</li><li><strong>過学習</strong>：訓練誤差はとても低いが、検証誤差は<strong>高いか上昇中</strong>（高分散）</li></ul><div class=\"eq-block\">$$E[(Y-\\hat f)^2]=\\text{Bias}^2+\\text{Var}+\\sigma_\\varepsilon^2$$</div><p>複雑にするほどバイアスは下がり分散は上がる；\\(\\sigma_\\varepsilon^2\\) は削減できない基礎誤差。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · surapprentissage",
    "front": "Comment les erreurs d’entraînement et de validation diagnostiquent-elles le sous-apprentissage et le surapprentissage ?",
    "back": "<div class=\"ans\"><ul><li><strong>Sous-apprentissage</strong> : erreurs d’entraînement et de validation toutes deux <strong>élevées</strong> (biais élevé)</li><li><strong>Surapprentissage</strong> : erreur d’entraînement très faible, erreur de validation <strong>élevée ou croissante</strong> (variance élevée)</li></ul><div class=\"eq-block\">$$E[(Y-\\hat f)^2]=\\text{Bias}^2+\\text{Var}+\\sigma_\\varepsilon^2$$</div><p>Plus de complexité réduit le biais et augmente la variance ; \\(\\sigma_\\varepsilon^2\\) est l’erreur de base irréductible.</p></div>"
   }
  },
  "q6-cv": {
   "zh": {
    "topic": "评估 · K 折交叉验证",
    "front": "描述 K 折交叉验证。什么时候不适用？",
    "back": "<div class=\"ans\"><p>把训练数据分成 \\(K\\) 折；用 \\(K-1\\) 折训练，用剩下的一折验证；轮换直到每一折都做过验证；<strong>对 \\(K\\) 个误差取平均</strong>来选择超参数。然后重新拟合，并只测试一次。</p><p>当<strong>时间顺序很重要时</strong>，普通的随机 K 折<strong>不适用</strong>。</p></div>"
   },
   "ja": {
    "topic": "評価 · K 分割交差検証",
    "front": "K 分割交差検証を説明せよ。どんなときに不適切か。",
    "back": "<div class=\"ans\"><p>訓練データを \\(K\\) 個に分け、\\(K-1\\) 個で訓練し残り 1 個で検証する；すべての分割が検証に使われるまで入れ替え、<strong>\\(K\\) 個の誤差を平均</strong>してハイパーパラメータを選ぶ。その後再推定し、テストは 1 回だけ行う。</p><p><strong>時間の順序が重要なとき</strong>、通常のランダムな K 分割は<strong>不適切</strong>。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · validation croisée à K plis",
    "front": "Décrivez la validation croisée à K plis. Quand est-elle inadaptée ?",
    "back": "<div class=\"ans\"><p>Diviser les données d’entraînement en \\(K\\) plis ; entraîner sur \\(K-1\\), valider sur le dernier ; tourner jusqu’à ce que chaque pli ait servi à valider ; <strong>moyenner les \\(K\\) erreurs</strong> pour choisir les hyperparamètres. Puis réestimer et tester une seule fois.</p><p>Le K plis aléatoire ordinaire est <strong>inadapté quand l’ordre temporel compte</strong>.</p></div>"
   }
  },
  "q6-metrics": {
   "zh": {
    "topic": "评估 · 分类指标",
    "front": "定义准确率、精确率和召回率。为什么对罕见的违约，准确率可能误导人？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Acc}=\\frac{TP+TN}{\\text{all}}$$</div><div class=\"eq-block\">$$\\text{Prec}=\\frac{TP}{TP+FP}$$</div><div class=\"eq-block\">$$\\text{Rec}=\\frac{TP}{TP+FN}$$</div><p>类别不平衡时，永远预测“不违约”会得到<strong>很高的准确率，但召回率为零</strong>。按每种错误的经济成本来选择指标。</p></div>"
   },
   "ja": {
    "topic": "評価 · 分類の指標",
    "front": "正解率、適合率、再現率を定義せよ。まれなデフォルトでは、なぜ正解率が誤解を招くのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Acc}=\\frac{TP+TN}{\\text{all}}$$</div><div class=\"eq-block\">$$\\text{Prec}=\\frac{TP}{TP+FP}$$</div><div class=\"eq-block\">$$\\text{Rec}=\\frac{TP}{TP+FN}$$</div><p>クラスが不均衡だと、常に「デフォルトしない」と予測するだけで<strong>正解率は高いが再現率はゼロ</strong>になる。各誤りの経済的コストで指標を選ぶ。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · métriques de classification",
    "front": "Définissez l’exactitude, la précision et le rappel. Pourquoi l’exactitude peut-elle tromper pour des défauts rares ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Acc}=\\frac{TP+TN}{\\text{all}}$$</div><div class=\"eq-block\">$$\\text{Prec}=\\frac{TP}{TP+FP}$$</div><div class=\"eq-block\">$$\\text{Rec}=\\frac{TP}{TP+FN}$$</div><p>Avec des classes déséquilibrées, prédire toujours « pas de défaut » donne une <strong>exactitude élevée mais un rappel nul</strong>. Choisir la métrique selon le coût économique de chaque erreur.</p></div>"
   }
  }
 }
});
