deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M4 多元回归的扩展 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M4 重回帰の拡張 · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M4 Extensions de la régression multiple · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q4-three-cases": {
   "zh": {
    "topic": "影响 · 三个概念",
    "front": "区分高杠杆点、离群值和强影响观测值，并给出各自的度量。",
    "back": "<div class=\"ans\"><ul><li><strong>高杠杆</strong>：\\(X\\) 取值异常 → 杠杆值 \\(h_{ii}\\)</li><li><strong>离群值</strong>：\\(Y_i\\) 远离其拟合值 → 学生化残差</li><li><strong>强影响</strong>：删除它会显著改变拟合 → Cook 距离</li></ul></div>",
    "gap": "单有高杠杆或大残差，只是有成为强影响点的可能。"
   },
   "ja": {
    "topic": "影響 · 3 つの概念",
    "front": "高レバレッジ点、外れ値、影響の大きい観測値を区別し、それぞれの尺度を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>高レバレッジ</strong>：\\(X\\) の値が異常 → レバレッジ \\(h_{ii}\\)</li><li><strong>外れ値</strong>：\\(Y_i\\) が予測値から大きく離れる → スチューデント化残差</li><li><strong>影響が大きい</strong>：除くと当てはまりが大きく変わる → Cook の距離</li></ul></div>",
    "gap": "レバレッジや大きな残差だけでは、影響が大きくなる可能性があるにすぎない。"
   },
   "fr": {
    "topic": "Influence · trois notions",
    "front": "Distinguez un point à fort levier, une valeur aberrante et une observation influente, et donnez la mesure de chacun.",
    "back": "<div class=\"ans\"><ul><li><strong>Fort levier</strong> : valeurs de \\(X\\) inhabituelles → levier \\(h_{ii}\\)</li><li><strong>Valeur aberrante</strong> : \\(Y_i\\) loin de sa valeur ajustée → résidu studentisé</li><li><strong>Influente</strong> : la retirer change nettement l’ajustement → distance de Cook</li></ul></div>",
    "gap": "Un levier ou un résidu élevé seul ne crée qu’une influence potentielle."
   }
  },
  "q4-leverage": {
   "zh": {
    "topic": "影响 · 杠杆值",
    "front": "杠杆值 \\(h_{ii}\\) 的取值范围是多少？平均值是多少？筛查规则是什么？",
    "back": "<div class=\"ans\"><p>\\(0\\le h_{ii}\\le1\\)，\\(\\sum h_{ii}=k+1\\)，所以平均值为 \\(\\bar h=(k+1)/n\\)。</p><div class=\"eq-block\">$$\\text{investigate if } h_{ii}>3\\left(\\frac{k+1}{n}\\right)$$</div><p>这是筛查指引，不是剔除规则；落在回归线上的高杠杆点影响很小。</p></div>"
   },
   "ja": {
    "topic": "影響 · レバレッジ",
    "front": "レバレッジ \\(h_{ii}\\) の範囲、平均、ふるい分けのルールは何か。",
    "back": "<div class=\"ans\"><p>\\(0\\le h_{ii}\\le1\\)、\\(\\sum h_{ii}=k+1\\) なので、平均は \\(\\bar h=(k+1)/n\\)。</p><div class=\"eq-block\">$$\\text{investigate if } h_{ii}>3\\left(\\frac{k+1}{n}\\right)$$</div><p>ふるい分けの目安であって除外のルールではない；回帰線上にある高レバレッジ点の影響は小さい。</p></div>"
   },
   "fr": {
    "topic": "Influence · levier",
    "front": "Quelles valeurs prend le levier \\(h_{ii}\\), quelle est sa moyenne, et quelle est la règle de repérage ?",
    "back": "<div class=\"ans\"><p>\\(0\\le h_{ii}\\le1\\), \\(\\sum h_{ii}=k+1\\), donc la moyenne est \\(\\bar h=(k+1)/n\\).</p><div class=\"eq-block\">$$\\text{investigate if } h_{ii}>3\\left(\\frac{k+1}{n}\\right)$$</div><p>Un repère de contrôle, pas une règle d’exclusion ; un point à fort levier situé sur la droite a peu d’influence.</p></div>"
   }
  },
  "q4-studentized": {
   "zh": {
    "topic": "影响 · 学生化残差",
    "front": "给出外部学生化（删除）残差及其分布。值大说明什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$t_i^*=\\frac{e_i}{s_{(i)}\\sqrt{1-h_{ii}}}\\sim t_{n-k-2}$$</div><p>\\(s_{(i)}\\) 是删除观测值 \\(i\\) 后的标准误。\\(|t_i^*|\\) 大标志着<strong>可能的离群值</strong>，而不是强影响。</p></div>",
    "gap": "用 |t*| > 2 筛查大量观测值，会碰巧标出一些（多重检验）。"
   },
   "ja": {
    "topic": "影響 · スチューデント化残差",
    "front": "外部スチューデント化（削除）残差とその分布を示せ。値が大きいと何を示すか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$t_i^*=\\frac{e_i}{s_{(i)}\\sqrt{1-h_{ii}}}\\sim t_{n-k-2}$$</div><p>\\(s_{(i)}\\) は観測値 \\(i\\) を除いた標準誤差。\\(|t_i^*|\\) が大きいと<strong>外れ値の可能性</strong>を示すが、影響の大きさは示さない。</p></div>",
    "gap": "多くの点を |t*| > 2 でふるい分けると、偶然に引っかかるものも出る（多重検定）。"
   },
   "fr": {
    "topic": "Influence · résidu studentisé",
    "front": "Donnez le résidu studentisé externe (supprimé) et sa loi. Que signale une valeur élevée ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$t_i^*=\\frac{e_i}{s_{(i)}\\sqrt{1-h_{ii}}}\\sim t_{n-k-2}$$</div><p>\\(s_{(i)}\\) est l’erreur-type sans l’observation \\(i\\). Un \\(|t_i^*|\\) élevé signale une <strong>valeur aberrante potentielle</strong>, pas une influence.</p></div>",
    "gap": "Filtrer de nombreux points avec |t*| > 2 en signalera certains par hasard (tests multiples)."
   }
  },
  "q4-cook": {
   "zh": {
    "topic": "影响 · Cook 距离",
    "front": "写出 Cook 距离。什么使它变大？常用的阈值是什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_i=\\frac{e_i^2}{(k+1)MSE}\\left(\\frac{h_{ii}}{(1-h_{ii})^2}\\right)$$</div><p>随<strong>残差大</strong>、<strong>杠杆高</strong>或两者而增大。\\(D_i>1\\)：强影响；\\(D_i>4/n\\)：需筛查。</p></div>"
   },
   "ja": {
    "topic": "影響 · Cook の距離",
    "front": "Cook の距離を書け。何が大きくするか。通常の基準値は何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_i=\\frac{e_i^2}{(k+1)MSE}\\left(\\frac{h_{ii}}{(1-h_{ii})^2}\\right)$$</div><p><strong>残差が大きい</strong>、<strong>レバレッジが高い</strong>、またはその両方で大きくなる。\\(D_i>1\\)：影響が非常に大きい；\\(D_i>4/n\\)：要確認。</p></div>"
   },
   "fr": {
    "topic": "Influence · distance de Cook",
    "front": "Écrivez la distance de Cook. Qu’est-ce qui la rend élevée, et quels sont les seuils usuels ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_i=\\frac{e_i^2}{(k+1)MSE}\\left(\\frac{h_{ii}}{(1-h_{ii})^2}\\right)$$</div><p>Elle croît avec un <strong>résidu élevé</strong>, un <strong>levier élevé</strong>, ou les deux. \\(D_i>1\\) : fortement influente ; \\(D_i>4/n\\) : à examiner.</p></div>"
   }
  },
  "q4-influence-response": {
   "zh": {
    "topic": "影响 · 应对",
    "front": "你发现了一个强影响观测值。应该做什么（以及不做什么）？",
    "back": "<div class=\"ans\"><ul><li>检查数据录入、测量或单位错误</li><li>考虑它是否属于所建模的总体</li><li>考虑它是否暴露了缺失的变量、交互项、结构突变或错误的函数形式</li><li>比较包含和不包含它的模型；报告敏感性</li></ul><p><strong>不要</strong>仅仅因为一个有效观测值削弱了结果就删除它。</p></div>"
   },
   "ja": {
    "topic": "影響 · 対処",
    "front": "影響の大きい観測値を見つけた。何をすべきか（何をすべきでないか）。",
    "back": "<div class=\"ans\"><ul><li>入力ミス、測定ミス、単位の誤りを確認する</li><li>モデル化している母集団に属するかを考える</li><li>欠けている変数、交互作用、構造変化、誤った関数形を示していないか考える</li><li>その点を含むモデルと含まないモデルを比較し、感応度を報告する</li></ul><p>結果を弱めるからといって、有効な観測値を削除<strong>してはならない</strong>。</p></div>"
   },
   "fr": {
    "topic": "Influence · réponses",
    "front": "Vous trouvez une observation influente. Que faire (et ne pas faire) ?",
    "back": "<div class=\"ans\"><ul><li>Vérifier les erreurs de saisie, de mesure ou d’unité</li><li>Se demander si elle appartient à la population modélisée</li><li>Se demander si elle révèle une variable manquante, une interaction, une rupture ou une mauvaise forme fonctionnelle</li><li>Comparer le modèle avec et sans elle ; présenter la sensibilité</li></ul><p><strong>Ne pas</strong> supprimer une observation valide simplement parce qu’elle affaiblit le résultat.</p></div>"
   }
  },
  "q4-dummies": {
   "zh": {
    "topic": "虚拟变量",
    "front": "一个分类变量有 \\(g\\) 个类别。有截距时用多少个虚拟变量？为什么？",
    "back": "<div class=\"ans\"><p><strong>\\(g-1\\)</strong> 个。被省略的类别是<strong>参照组</strong>；在 \\(X\\) 不变时，每个虚拟变量的系数是与参照组的截距差。</p><p>有截距时用全部 \\(g\\) 个会造成完全多重共线性，即<strong>虚拟变量陷阱</strong>。</p></div>",
    "gap": "改变参照组会改变系数，但不改变拟合值。"
   },
   "ja": {
    "topic": "ダミー変数",
    "front": "カテゴリー変数に \\(g\\) 個のカテゴリーがある。切片があるとき、ダミーはいくつ使うか。なぜか。",
    "back": "<div class=\"ans\"><p><strong>\\(g-1\\)</strong> 個。除いたカテゴリーが<strong>基準</strong>で、各ダミーの係数は \\(X\\) を一定としたときの基準との切片の差。</p><p>切片があるのに \\(g\\) 個すべてを使うと完全な多重共線性になる。これが<strong>ダミー変数の罠</strong>。</p></div>",
    "gap": "基準のカテゴリーを変えると係数は変わるが、予測値は変わらない。"
   },
   "fr": {
    "topic": "Variables indicatrices",
    "front": "Une variable catégorielle a \\(g\\) catégories. Combien d’indicatrices utilise-t-on avec une constante, et pourquoi ?",
    "back": "<div class=\"ans\"><p><strong>\\(g-1\\)</strong>. La catégorie omise est la <strong>référence</strong> ; chaque coefficient d’indicatrice est un écart de constante par rapport à elle, à \\(X\\) constant.</p><p>Utiliser les \\(g\\) avec une constante crée une multicolinéarité parfaite, le <strong>piège des variables indicatrices</strong>.</p></div>",
    "gap": "Changer la catégorie de référence change les coefficients, pas les valeurs ajustées."
   }
  },
  "q4-dummy-example": {
   "zh": {
    "topic": "虚拟变量 · 解读",
    "front": "\\(Y=\\beta_0+\\beta_1X+\\gamma_1D_{Tech}+\\gamma_2D_{Health}+\\varepsilon\\)，以金融公司为参照组。解读 \\(\\beta_0\\)、\\(\\gamma_1\\)、\\(\\gamma_2\\)。",
    "back": "<div class=\"ans\"><ul><li>\\(\\beta_0\\)：<strong>金融</strong>公司的截距</li><li>\\(\\gamma_1\\)：在 \\(X\\) 不变时，<strong>科技与金融</strong>的截距差</li><li>\\(\\gamma_2\\)：<strong>医疗与金融</strong>的截距差</li></ul></div>"
   },
   "ja": {
    "topic": "ダミー変数 · 解釈",
    "front": "\\(Y=\\beta_0+\\beta_1X+\\gamma_1D_{Tech}+\\gamma_2D_{Health}+\\varepsilon\\)、金融会社が基準。\\(\\beta_0\\)、\\(\\gamma_1\\)、\\(\\gamma_2\\) を解釈せよ。",
    "back": "<div class=\"ans\"><ul><li>\\(\\beta_0\\)：<strong>金融</strong>会社の切片</li><li>\\(\\gamma_1\\)：\\(X\\) を一定としたときの、<strong>テック対金融</strong>の切片の差</li><li>\\(\\gamma_2\\)：<strong>ヘルスケア対金融</strong>の切片の差</li></ul></div>"
   },
   "fr": {
    "topic": "Variables indicatrices · interprétation",
    "front": "\\(Y=\\beta_0+\\beta_1X+\\gamma_1D_{Tech}+\\gamma_2D_{Health}+\\varepsilon\\), les sociétés financières en référence. Interprétez \\(\\beta_0\\), \\(\\gamma_1\\), \\(\\gamma_2\\).",
    "back": "<div class=\"ans\"><ul><li>\\(\\beta_0\\) : constante des sociétés <strong>financières</strong></li><li>\\(\\gamma_1\\) : écart de constante <strong>tech / finance</strong>, à \\(X\\) constant</li><li>\\(\\gamma_2\\) : écart de constante <strong>santé / finance</strong></li></ul></div>"
   }
  },
  "q4-interaction": {
   "zh": {
    "topic": "交互项",
    "front": "在 \\(Y=\\beta_0+\\beta_1X+\\gamma D+\\delta(XD)+\\varepsilon\\) 中，每组的截距和斜率是多少？",
    "back": "<div class=\"ans\"><ul><li>\\(D=0\\)：截距 \\(\\beta_0\\)，斜率 \\(\\beta_1\\)</li><li>\\(D=1\\)：截距 \\(\\beta_0+\\gamma\\)，斜率 \\(\\beta_1+\\delta\\)</li></ul><p>\\(\\gamma\\) = 截距差；\\(\\delta\\) = <strong>斜率差</strong>。用受约束 F 检验对它们做联合检验。</p></div>"
   },
   "ja": {
    "topic": "交互作用項",
    "front": "\\(Y=\\beta_0+\\beta_1X+\\gamma D+\\delta(XD)+\\varepsilon\\) で、各グループの切片と傾きは何か。",
    "back": "<div class=\"ans\"><ul><li>\\(D=0\\)：切片 \\(\\beta_0\\)、傾き \\(\\beta_1\\)</li><li>\\(D=1\\)：切片 \\(\\beta_0+\\gamma\\)、傾き \\(\\beta_1+\\delta\\)</li></ul><p>\\(\\gamma\\) = 切片の差；\\(\\delta\\) = <strong>傾きの差</strong>。制約付き F 検定で同時に検定する。</p></div>"
   },
   "fr": {
    "topic": "Termes d’interaction",
    "front": "Dans \\(Y=\\beta_0+\\beta_1X+\\gamma D+\\delta(XD)+\\varepsilon\\), quelles sont la constante et la pente de chaque groupe ?",
    "back": "<div class=\"ans\"><ul><li>\\(D=0\\) : constante \\(\\beta_0\\), pente \\(\\beta_1\\)</li><li>\\(D=1\\) : constante \\(\\beta_0+\\gamma\\), pente \\(\\beta_1+\\delta\\)</li></ul><p>\\(\\gamma\\) = écart de constante ; \\(\\delta\\) = <strong>écart de pente</strong>. Les tester conjointement par un test F contraint.</p></div>"
   }
  },
  "q4-why-logit": {
   "zh": {
    "topic": "二元结果 · 为什么用 logit",
    "front": "为什么不对违约这样的 0/1 因变量使用普通线性回归？",
    "back": "<div class=\"ans\"><p>线性模型可能预测出<strong>小于 0 或大于 1 的概率</strong>，并且会带来<strong>异方差的误差</strong>。logit 通过 logistic 函数把预测变量映射为概率。</p></div>"
   },
   "ja": {
    "topic": "二値の結果 · なぜロジットか",
    "front": "デフォルトのような 0/1 の従属変数に、なぜ通常の線形回帰を使わないのか。",
    "back": "<div class=\"ans\"><p>線形モデルは<strong>0 未満や 1 超の確率</strong>を予測しうるし、<strong>不均一分散の誤差</strong>を伴う。ロジットはロジスティック関数で説明変数を確率に変換する。</p></div>"
   },
   "fr": {
    "topic": "Variable binaire · pourquoi le logit",
    "front": "Pourquoi ne pas utiliser la régression linéaire ordinaire pour une variable dépendante 0/1 comme le défaut ?",
    "back": "<div class=\"ans\"><p>Le modèle linéaire peut prédire des <strong>probabilités inférieures à 0 ou supérieures à 1</strong>, et il impose des <strong>erreurs hétéroscédastiques</strong>. Un logit transforme les prédicteurs en probabilité via la fonction logistique.</p></div>"
   }
  },
  "q4-logit": {
   "zh": {
    "topic": "二元结果 · logit 模型",
    "front": "用对数几率形式和概率形式写出 logit 模型。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\ln\\!\\left(\\frac{p}{1-p}\\right)=\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k$$</div><div class=\"eq-block\">$$p=\\frac{1}{1+e^{-(\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k)}}$$</div><p>给定 \\(X\\) 时 \\(Y\\) 服从 Bernoulli(\\(p\\))；概率方程中没有加性误差项。</p></div>"
   },
   "ja": {
    "topic": "二値の結果 · ロジット・モデル",
    "front": "ロジット・モデルを対数オッズの形と確率の形で書け。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\ln\\!\\left(\\frac{p}{1-p}\\right)=\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k$$</div><div class=\"eq-block\">$$p=\\frac{1}{1+e^{-(\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k)}}$$</div><p>\\(X\\) を所与とした \\(Y\\) は Bernoulli(\\(p\\))；確率の式に加法的な誤差項はない。</p></div>"
   },
   "fr": {
    "topic": "Variable binaire · modèle logit",
    "front": "Écrivez le modèle logit sous forme de log-cote et sous forme de probabilité.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\ln\\!\\left(\\frac{p}{1-p}\\right)=\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k$$</div><div class=\"eq-block\">$$p=\\frac{1}{1+e^{-(\\beta_0+\\beta_1X_1+\\cdots+\\beta_kX_k)}}$$</div><p>\\(Y\\) sachant \\(X\\) suit une Bernoulli(\\(p\\)) ; il n’y a pas de terme d’erreur additif dans l’équation de probabilité.</p></div>"
   }
  },
  "q4-logit-coef": {
   "zh": {
    "topic": "二元结果 · 系数",
    "front": "logit 斜率 \\(\\hat\\beta_j=0.40\\)。\\(X_j\\) 增加 1 时，几率和概率会怎样？",
    "back": "<div class=\"ans\"><p>对数几率增加 0.40；<strong>几率乘以 \\(e^{0.40}\\approx1.49\\)</strong>，即几率约增加 49%。</p><p><strong>概率</strong>并不增加 49%：它的变化取决于初始概率和其他预测变量。</p></div>"
   },
   "ja": {
    "topic": "二値の結果 · 係数",
    "front": "ロジットの傾きが \\(\\hat\\beta_j=0.40\\)。\\(X_j\\) が 1 増えると、オッズと確率はどうなるか。",
    "back": "<div class=\"ans\"><p>対数オッズは 0.40 増え、<strong>オッズは \\(e^{0.40}\\approx1.49\\) 倍</strong>、つまりオッズが約 49% 増える。</p><p><strong>確率</strong>が 49% 増えるわけではない：その変化は元の確率と他の説明変数による。</p></div>"
   },
   "fr": {
    "topic": "Variable binaire · coefficients",
    "front": "Une pente logit vaut \\(\\hat\\beta_j=0.40\\). Que deviennent la cote et la probabilité quand \\(X_j\\) augmente d’une unité ?",
    "back": "<div class=\"ans\"><p>La log-cote augmente de 0.40 ; la <strong>cote est multipliée par \\(e^{0.40}\\approx1.49\\)</strong>, soit environ +49 %.</p><p>La <strong>probabilité</strong> n’augmente pas de 49 % : sa variation dépend de la probabilité de départ et des autres prédicteurs.</p></div>"
   }
  },
  "q4-mle": {
   "zh": {
    "topic": "二元结果 · 估计与拟合",
    "front": "logit 如何估计？如何判断其拟合？",
    "back": "<div class=\"ans\"><ul><li><strong>极大似然</strong>：使观测到的 0 和 1 出现可能性最大的系数</li><li><strong>对数似然</strong>越高（越接近零）= 样本内拟合越好（相同数据和 \\(Y\\)）</li><li><strong>伪 \\(R^2\\)</strong> 与只含截距的模型比较；它<strong>不是</strong>被解释方差的比例，也不能与 OLS 的 \\(R^2\\) 比较</li></ul></div>"
   },
   "ja": {
    "topic": "二値の結果 · 推定と当てはまり",
    "front": "ロジットはどう推定し、当てはまりはどう判断するか。",
    "back": "<div class=\"ans\"><ul><li><strong>最尤法</strong>：観測された 0 と 1 が最も起こりやすくなる係数</li><li><strong>対数尤度</strong>が高い（ゼロに近い）ほど標本内の当てはまりが良い（同じデータと \\(Y\\)）</li><li><strong>疑似 \\(R^2\\)</strong> は切片だけのモデルと比べる；説明される分散の割合<strong>ではなく</strong>、OLS の \\(R^2\\) とは比較できない</li></ul></div>"
   },
   "fr": {
    "topic": "Variable binaire · estimation et ajustement",
    "front": "Comment estime-t-on un logit, et comment juger son ajustement ?",
    "back": "<div class=\"ans\"><ul><li><strong>Maximum de vraisemblance</strong> : les coefficients qui rendent les 0 et 1 observés les plus probables</li><li>Une <strong>log-vraisemblance</strong> plus élevée (plus proche de zéro) = meilleur ajustement dans l’échantillon, mêmes données et même \\(Y\\)</li><li>Le <strong>pseudo-\\(R^2\\)</strong> compare au modèle avec constante seule ; ce n’est <strong>pas</strong> une part de variance expliquée, ni comparable au \\(R^2\\) des MCO</li></ul></div>"
   }
  },
  "q4-lr": {
   "zh": {
    "topic": "二元结果 · 似然比检验",
    "front": "logit：无约束 \\(\\ell_U=-118\\)，受约束（去掉两个行业变量）\\(\\ell_R=-125\\)。在 5% 水平下检验（\\(\\chi^2_2\\) 临界值 ≈ 5.99）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$LR=2(\\ell_U-\\ell_R)\\sim\\chi^2_q$$</div><div class=\"eq-block\">$$LR=2[-118-(-125)]=14$$</div><p>\\(q=2\\)，且 \\(14>5.99\\) → <strong>拒绝</strong>：行业变量联合显著。</p></div>",
    "gap": "LR 检验是 OLS 受约束 F 检验在极大似然中的对应。"
   },
   "ja": {
    "topic": "二値の結果 · 尤度比検定",
    "front": "ロジット：制約なし \\(\\ell_U=-118\\)、制約付き（業種変数を 2 つ除く）\\(\\ell_R=-125\\)。5% 水準で検定せよ（\\(\\chi^2_2\\) の臨界値 ≈ 5.99）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$LR=2(\\ell_U-\\ell_R)\\sim\\chi^2_q$$</div><div class=\"eq-block\">$$LR=2[-118-(-125)]=14$$</div><p>\\(q=2\\)、\\(14>5.99\\) → <strong>棄却</strong>：業種変数は同時に有意。</p></div>",
    "gap": "LR 検定は、OLS の制約付き F 検定に対応する最尤法の検定。"
   },
   "fr": {
    "topic": "Variable binaire · test du rapport de vraisemblance",
    "front": "Logit : non contraint \\(\\ell_U=-118\\), contraint (deux variables sectorielles retirées) \\(\\ell_R=-125\\). Testez à 5 % (valeur critique \\(\\chi^2_2\\) ≈ 5.99).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$LR=2(\\ell_U-\\ell_R)\\sim\\chi^2_q$$</div><div class=\"eq-block\">$$LR=2[-118-(-125)]=14$$</div><p>\\(q=2\\), et \\(14>5.99\\) → <strong>rejeter</strong> : les variables sectorielles sont conjointement significatives.</p></div>",
    "gap": "Le test LR est l’équivalent, en maximum de vraisemblance, du test F contraint des MCO."
   }
  }
 }
});
