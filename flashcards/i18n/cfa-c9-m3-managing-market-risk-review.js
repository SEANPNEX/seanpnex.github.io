deckI18n({
 "source": {
  "zh": "CFA 二级 投资组合管理 · M3 管理市场风险 · 单元复习",
  "ja": "CFA レベル II ポートフォリオ運用 · M3 市場リスクの管理 · 単元の復習",
  "fr": "CFA niveau II Gestion de portefeuille · M3 Gestion du risque de marché · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "pm3-var-def": {
   "zh": {
    "topic": "VaR · 定义",
    "front": "定义风险价值。VaR 表述必须包括哪三项？",
    "back": "<div class=\"ans\"><p>在给定概率和给定期间内预期的<strong>最小损失</strong>；等价地说，在给定置信水平下的<strong>最大损失</strong>。</p><p>一个<strong>金额</strong>、一个<strong>概率</strong>（或置信水平）和一个<strong>时间段</strong>。</p></div>"
   },
   "ja": {
    "topic": "VaR · 定義",
    "front": "バリュー・アット・リスクを定義せよ。VaR の表明に含めるべき 3 つは何か。",
    "back": "<div class=\"ans\"><p>一定の確率・一定の期間で予想される<strong>最小の損失</strong>。言い換えれば、一定の信頼水準での<strong>最大の損失</strong>。</p><p><strong>金額</strong>、<strong>確率</strong>（または信頼水準）、<strong>期間</strong>。</p></div>"
   },
   "fr": {
    "topic": "VaR · définition",
    "front": "Définissez la valeur à risque. Quels sont les trois éléments que doit comporter un énoncé de VaR ?",
    "back": "<div class=\"ans\"><p>La <strong>perte minimale</strong> attendue avec une probabilité donnée sur une période donnée ; ou encore la <strong>perte maximale</strong> à un niveau de confiance donné.</p><p>Un <strong>montant</strong>, une <strong>probabilité</strong> (ou un niveau de confiance) et une <strong>période</strong>.</p></div>"
   }
  },
  "pm3-var-read": {
   "zh": {
    "topic": "解读 VaR",
    "front": "某组合的 1% 一日 VaR 为 200 万。用两种方式表述。",
    "back": "<div class=\"ans\"><ul><li>有 99% 的把握组合一天内损失<strong>不超过</strong> 200 万</li><li>有 1% 的概率组合一天内损失 <strong>200 万或更多</strong></li></ul></div>",
    "gap": "VaR 没有说明损失可能超出 200 万多少。"
   },
   "ja": {
    "topic": "VaR の読み方",
    "front": "ポートフォリオの 1% の 1 日 VaR は 200 万。2 通りで述べよ。",
    "back": "<div class=\"ans\"><ul><li>99% の確信で、1 日の損失は 200 万<strong>以下</strong></li><li>1% の確率で、1 日に <strong>200 万以上</strong>を失う</li></ul></div>",
    "gap": "VaR は損失が 200 万をどれだけ超えうるかについては何も言わない。"
   },
   "fr": {
    "topic": "Lire une VaR",
    "front": "La VaR à 1 % sur un jour d’un portefeuille est de 2 millions. Formulez-la des deux façons.",
    "back": "<div class=\"ans\"><ul><li>Confiance de 99 % que le portefeuille ne perde <strong>pas plus</strong> de 2m en un jour</li><li>1 % de probabilité qu’il perde <strong>2m ou plus</strong> en un jour</li></ul></div>",
    "gap": "La VaR ne dit rien de l’ampleur de la perte au-delà de 2m."
   }
  },
  "pm3-parametric": {
   "zh": {
    "topic": "参数法 VaR",
    "front": "写出参数法 VaR，以及 5%、2.5% 和 1% 对应的 \\(z\\) 值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}=z_\\alpha\\sigma-E(R)$$</div><ul><li>5%：1.65</li><li>2.5%：1.96</li><li>1%：2.33</li></ul><p>乘以组合价值得到金额 VaR；均值为零时，VaR \\(=z_\\alpha\\sigma\\)。</p></div>"
   },
   "ja": {
    "topic": "パラメトリック法の VaR",
    "front": "パラメトリック法の VaR と、5%、2.5%、1% の \\(z\\) 値を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}=z_\\alpha\\sigma-E(R)$$</div><ul><li>5%：1.65</li><li>2.5%：1.96</li><li>1%：2.33</li></ul><p>ポートフォリオの価値を掛けると金額の VaR。平均がゼロなら VaR \\(=z_\\alpha\\sigma\\)。</p></div>"
   },
   "fr": {
    "topic": "VaR paramétrique",
    "front": "Écrivez la VaR paramétrique et les valeurs de \\(z\\) pour 5 %, 2,5 % et 1 %.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}=z_\\alpha\\sigma-E(R)$$</div><ul><li>5 % : 1,65</li><li>2,5 % : 1,96</li><li>1 % : 2,33</li></ul><p>Multipliez par la valeur du portefeuille pour la VaR en montant ; avec une moyenne nulle, VaR \\(=z_\\alpha\\sigma\\).</p></div>"
   }
  },
  "pm3-portfolio-var": {
   "zh": {
    "topic": "组合 VaR",
    "front": "1,000 万：60% A（μ 10%，σ 20%），40% B（μ 6%，σ 10%），ρ = 0.3。求年度 5% VaR。",
    "back": "<div class=\"ans\"><p>\\(\\mu_p=8.4\\%\\)；\\(\\sigma_p^2=0.0144+0.0016+0.00288=0.01888\\)，所以 \\(\\sigma_p=13.74\\%\\)。</p><div class=\"eq-block\">$$\\begin{aligned}&1.65\\times13.74\\%-8.4\\%\\\\&=14.27\\%\\end{aligned}$$</div><p>约 <strong>143 万</strong>。</p></div>"
   },
   "ja": {
    "topic": "ポートフォリオの VaR",
    "front": "1,000 万：A 60%（μ 10%、σ 20%）、B 40%（μ 6%、σ 10%）、ρ = 0.3。年間 5% VaR を求めよ。",
    "back": "<div class=\"ans\"><p>\\(\\mu_p=8.4\\%\\)、\\(\\sigma_p^2=0.0144+0.0016+0.00288=0.01888\\) なので \\(\\sigma_p=13.74\\%\\)。</p><div class=\"eq-block\">$$\\begin{aligned}&1.65\\times13.74\\%-8.4\\%\\\\&=14.27\\%\\end{aligned}$$</div><p>約 <strong>143 万</strong>。</p></div>"
   },
   "fr": {
    "topic": "VaR d’un portefeuille",
    "front": "10m : 60 % A (μ 10 %, σ 20 %), 40 % B (μ 6 %, σ 10 %), ρ = 0,3. Trouvez la VaR annuelle à 5 %.",
    "back": "<div class=\"ans\"><p>\\(\\mu_p=8.4\\%\\) ; \\(\\sigma_p^2=0.0144+0.0016+0.00288=0.01888\\), donc \\(\\sigma_p=13.74\\%\\).</p><div class=\"eq-block\">$$\\begin{aligned}&1.65\\times13.74\\%-8.4\\%\\\\&=14.27\\%\\end{aligned}$$</div><p>Environ <strong>1,43 million</strong>.</p></div>"
   }
  },
  "pm3-sqrt": {
   "zh": {
    "topic": "平方根法则",
    "front": "如何把 VaR 换算到不同期限？这需要什么条件？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}_T=\\text{VaR}_1\\sqrt{T}$$</div><p>要求回报独立同分布（无序列相关）且均值为零。</p></div>",
    "gap": "现实中回报并非独立同分布，所以换算后的 VaR 只是近似。"
   },
   "ja": {
    "topic": "平方根ルール",
    "front": "VaR は別の期間にどう換算するか。何が必要か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}_T=\\text{VaR}_1\\sqrt{T}$$</div><p>リターンが i.i.d.（系列相関なし）で、平均がゼロであることが必要。</p></div>",
    "gap": "実際のリターンは i.i.d. ではないので、換算した VaR は近似にすぎない。"
   },
   "fr": {
    "topic": "Règle de la racine carrée",
    "front": "Comment transpose-t-on une VaR à un autre horizon, et que faut-il pour cela ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{VaR}_T=\\text{VaR}_1\\sqrt{T}$$</div><p>Des rendements i.i.d. (sans autocorrélation) et une moyenne nulle.</p></div>",
    "gap": "En réalité, les rendements ne sont pas i.i.d. : la VaR transposée n’est qu’une approximation."
   }
  },
  "pm3-historical": {
   "zh": {
    "topic": "历史模拟法 VaR",
    "front": "使用 300 天回报，哪个排序的回报是一日 5% VaR？该方法的优缺点是什么？",
    "back": "<div class=\"ans\"><p>300 的 5% = 15 天，所以是<strong>第 15 差</strong>（第 286 好）的回报，应用于今天的权重。</p><ul><li>无须分布假设；包含真实的肥尾和相关性</li><li>假设过去具有代表性</li></ul></div>"
   },
   "ja": {
    "topic": "ヒストリカル・シミュレーション法の VaR",
    "front": "300 日分のリターンを使うとき、何番目のリターンが 1 日 5% VaR か。この方法の長所と短所は。",
    "back": "<div class=\"ans\"><p>300 の 5% = 15 日なので、<strong>15 番目に悪い</strong>（286 番目に良い）リターンを今日のウェイトに当てはめる。</p><ul><li>分布の仮定が不要。実際のファット・テールと相関を含む</li><li>過去が代表的であると仮定する</li></ul></div>"
   },
   "fr": {
    "topic": "VaR par simulation historique",
    "front": "Avec 300 jours de rendements, quel rendement classé correspond à la VaR à 5 % sur un jour ? Avantages et limites de la méthode ?",
    "back": "<div class=\"ans\"><p>5 % de 300 = 15 jours : c’est le <strong>15e pire</strong> (286e meilleur) rendement, appliqué aux pondérations actuelles.</p><ul><li>Aucune hypothèse de distribution ; queues épaisses et corrélations réelles</li><li>Suppose que le passé est représentatif</li></ul></div>"
   }
  },
  "pm3-monte-carlo": {
   "zh": {
    "topic": "蒙特卡洛 VaR",
    "front": "蒙特卡洛如何估计 VaR？其优缺点是什么？",
    "back": "<div class=\"ans\"><p>设定风险因子的分布和相关性，模拟大量结果，读取 \\(\\alpha\\) 分位数。</p><ul><li>灵活：可用非正态分布，处理期权和非线性头寸</li><li>计算量大；好坏取决于假设的模型</li></ul></div>"
   },
   "ja": {
    "topic": "モンテカルロ法の VaR",
    "front": "モンテカルロ法は VaR をどう推定するか。長所と短所は。",
    "back": "<div class=\"ans\"><p>リスク・ファクターの分布と相関を設定し、多数の結果をシミュレーションして \\(\\alpha\\) パーセンタイルを読む。</p><ul><li>柔軟：非正規分布、オプションや非線形のポジションも扱える</li><li>計算負荷が大きい。仮定したモデル次第</li></ul></div>"
   },
   "fr": {
    "topic": "VaR Monte-Carlo",
    "front": "Comment la méthode de Monte-Carlo estime-t-elle la VaR ? Quelles sont ses forces et faiblesses ?",
    "back": "<div class=\"ans\"><p>Spécifier les distributions et corrélations des facteurs de risque, simuler de nombreux scénarios, lire le percentile \\(\\alpha\\).</p><ul><li>Flexible : distributions non normales, options et positions non linéaires</li><li>Lourde en calcul ; ne vaut que ce que vaut le modèle supposé</li></ul></div>"
   }
  },
  "pm3-var-pros-cons": {
   "zh": {
    "topic": "VaR · 优缺点",
    "front": "给出 VaR 的主要优点和缺点。",
    "back": "<div class=\"ans\"><ul><li><strong>优点</strong>：单一数字，简单；可跨部门比较；用于风险预算；可回测；被监管机构接受</li><li><strong>缺点</strong>：选择主观；低估极端事件（肥尾）；忽略尾部损失的大小；忽略流动性；危机中相关性上升；只看左尾</li></ul></div>"
   },
   "ja": {
    "topic": "VaR · 長所と短所",
    "front": "VaR の主な長所と短所を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>長所</strong>：単純な 1 つの数値。部門間で比較できる。リスク・バジェッティング。バックテスト可能。規制当局に受け入れられている</li><li><strong>短所</strong>：選択が主観的。極端な事象を過小評価（ファット・テール）。テール損失の大きさを無視。流動性を無視。危機時に相関が上がる。左のテールだけ</li></ul></div>"
   },
   "fr": {
    "topic": "VaR · avantages et limites",
    "front": "Donnez les principaux avantages et inconvénients de la VaR.",
    "back": "<div class=\"ans\"><ul><li><strong>Avantages</strong> : un chiffre unique et simple ; comparable entre unités ; budget de risque ; testable a posteriori ; acceptée par les régulateurs</li><li><strong>Inconvénients</strong> : choix subjectifs ; sous-estime les événements extrêmes (queues épaisses) ; ignore l’ampleur des pertes extrêmes ; ignore la liquidité ; les corrélations montent en crise ; queue gauche seulement</li></ul></div>"
   }
  },
  "pm3-cvar": {
   "zh": {
    "topic": "条件 VaR",
    "front": "什么是 CVaR（预期短缺）？对正态分布，比较 5% CVaR 与 5% VaR。",
    "back": "<div class=\"ans\"><p><strong>损失超过 VaR 时的平均损失</strong>：衡量尾部的大小。</p><p>正态：VaR \\(=1.65\\sigma\\)，CVaR \\(=2.06\\sigma\\)。</p></div>"
   },
   "ja": {
    "topic": "条件付き VaR",
    "front": "CVaR（期待ショートフォール）とは何か。正規分布で 5% CVaR と 5% VaR を比較せよ。",
    "back": "<div class=\"ans\"><p><strong>損失が VaR を超えたときの平均損失</strong>：テールの大きさを測る。</p><p>正規分布：VaR \\(=1.65\\sigma\\)、CVaR \\(=2.06\\sigma\\)。</p></div>"
   },
   "fr": {
    "topic": "VaR conditionnelle",
    "front": "Qu’est-ce que la CVaR (expected shortfall) ? Pour une loi normale, comparez la CVaR à 5 % et la VaR à 5 %.",
    "back": "<div class=\"ans\"><p>La <strong>perte moyenne sachant que la perte dépasse la VaR</strong> : elle mesure la taille de la queue.</p><p>Normale : VaR \\(=1.65\\sigma\\), CVaR \\(=2.06\\sigma\\).</p></div>"
   }
  },
  "pm3-incremental": {
   "zh": {
    "topic": "增量 VaR 与边际 VaR",
    "front": "区分增量 VaR 和边际 VaR。",
    "back": "<div class=\"ans\"><ul><li><strong>增量</strong>：增加、移除或改变某头寸导致的组合 VaR 变化（有该头寸的 VaR − 无该头寸的 VaR）</li><li><strong>边际</strong>：头寸<strong>微小</strong>变化时 VaR 的单位变化；显示每个头寸的贡献</li></ul></div>"
   },
   "ja": {
    "topic": "インクリメンタル VaR とマージナル VaR",
    "front": "インクリメンタル VaR とマージナル VaR を区別せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>インクリメンタル</strong>：ポジションの追加・削除・変更によるポートフォリオ VaR の変化（あり − なし）</li><li><strong>マージナル</strong>：ポジションの<strong>わずかな</strong>変化に対する単位当たりの VaR の変化。各ポジションの寄与を示す</li></ul></div>"
   },
   "fr": {
    "topic": "VaR incrémentale et marginale",
    "front": "Distinguez la VaR incrémentale et la VaR marginale.",
    "back": "<div class=\"ans\"><ul><li><strong>Incrémentale</strong> : variation de la VaR du portefeuille due à l’ajout, au retrait ou à la modification d’une position (VaR avec − VaR sans)</li><li><strong>Marginale</strong> : variation de la VaR pour une <strong>petite</strong> variation d’une position, par unité ; montre la contribution de chaque position</li></ul></div>"
   }
  },
  "pm3-other-var": {
   "zh": {
    "topic": "LVaR、CFaR、EaR、信用 VaR",
    "front": "定义流动性调整 VaR、风险现金流、风险盈利和信用 VaR。",
    "back": "<div class=\"ans\"><ul><li><strong>LVaR</strong>：VaR 加上清算头寸的成本</li><li><strong>CFaR</strong>：在某概率下的最小现金流缺口；用于公司</li><li><strong>EaR</strong>：同样的概念用于盈利</li><li><strong>信用 VaR</strong>：在某概率下的最小信用损失（违约、降级）</li></ul></div>"
   },
   "ja": {
    "topic": "LVaR、CFaR、EaR、信用 VaR",
    "front": "流動性調整後 VaR、キャッシュフロー・アット・リスク、アーニング・アット・リスク、信用 VaR を定義せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>LVaR</strong>：VaR にポジションを解消するコストを加えたもの</li><li><strong>CFaR</strong>：一定確率でのキャッシュフロー不足の最小額。事業会社向け</li><li><strong>EaR</strong>：同じことを利益について</li><li><strong>信用 VaR</strong>：一定確率での信用損失（デフォルト、格下げ）の最小額</li></ul></div>"
   },
   "fr": {
    "topic": "LVaR, CFaR, EaR, VaR crédit",
    "front": "Définissez la VaR ajustée de la liquidité, le cash-flow at risk, l’earnings at risk et la VaR crédit.",
    "back": "<div class=\"ans\"><ul><li><strong>LVaR</strong> : la VaR plus le coût de liquidation des positions</li><li><strong>CFaR</strong> : insuffisance minimale de flux de trésorerie à une probabilité donnée ; pour les entreprises</li><li><strong>EaR</strong> : la même chose pour les bénéfices</li><li><strong>VaR crédit</strong> : perte de crédit minimale (défauts, dégradations) à une probabilité donnée</li></ul></div>"
   }
  },
  "pm3-sensitivity": {
   "zh": {
    "topic": "敏感性指标",
    "front": "什么是敏感性风险指标？给出股票、债券和期权的指标，以及其局限。",
    "back": "<div class=\"ans\"><p>偏导数：某一因子<strong>微小</strong>变动时价值的变化。</p><ul><li>股票：<strong>贝塔</strong></li><li>债券：<strong>久期和凸性</strong></li><li>期权：<strong>希腊字母</strong></li></ul><p>没有概率，且只对小变动准确。</p></div>"
   },
   "ja": {
    "topic": "感応度指標",
    "front": "感応度によるリスク指標とは何か。株式、債券、オプションの指標と、その限界を示せ。",
    "back": "<div class=\"ans\"><p>偏微分：1 つのファクターの<strong>小さな</strong>変化に対する価値の変化。</p><ul><li>株式：<strong>ベータ</strong></li><li>債券：<strong>デュレーションとコンベクシティ</strong></li><li>オプション：<strong>グリークス</strong></li></ul><p>確率がなく、小さな変化に対してしか正確でない。</p></div>"
   },
   "fr": {
    "topic": "Mesures de sensibilité",
    "front": "Que sont les mesures de risque par sensibilité ? Donnez la mesure pour les actions, les obligations et les options, et la limite.",
    "back": "<div class=\"ans\"><p>Des dérivées partielles : la variation de valeur pour une <strong>petite</strong> variation d’un facteur.</p><ul><li>Actions : le <strong>bêta</strong></li><li>Obligations : <strong>duration et convexité</strong></li><li>Options : les <strong>grecques</strong></li></ul><p>Aucune probabilité, et précises seulement pour de petites variations.</p></div>"
   }
  },
  "pm3-scenario": {
   "zh": {
    "topic": "情景分析与压力测试",
    "front": "描述历史情景、假设情景、压力情景和反向压力测试。",
    "back": "<div class=\"ans\"><ul><li><strong>历史</strong>：在今天的组合上重演过去的危机</li><li><strong>假设</strong>：可能发生的变化</li><li><strong>压力测试</strong>：极端、低概率的情景，常伴随相关性上升</li><li><strong>反向压力测试</strong>：从不可接受的损失出发，找出其原因</li></ul></div>",
    "gap": "情景显示极端损失的大小，但不提供概率。"
   },
   "ja": {
    "topic": "シナリオ分析とストレス・テスト",
    "front": "ヒストリカル・シナリオ、仮想シナリオ、ストレス・シナリオ、リバース・ストレス・テストを説明せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>ヒストリカル</strong>：過去の危機を今日のポートフォリオで再現する</li><li><strong>仮想</strong>：起こりうる変化</li><li><strong>ストレス・テスト</strong>：極端で確率の低いシナリオ。相関の上昇を伴うことが多い</li><li><strong>リバース・ストレス・テスト</strong>：許容できない損失から出発し、その原因を探す</li></ul></div>",
    "gap": "シナリオは極端な損失の大きさを示すが、確率は与えない。"
   },
   "fr": {
    "topic": "Scénarios et tests de résistance",
    "front": "Décrivez les scénarios historiques, hypothétiques, de stress et le test de résistance inversé.",
    "back": "<div class=\"ans\"><ul><li><strong>Historique</strong> : rejouer une crise passée sur le portefeuille actuel</li><li><strong>Hypothétique</strong> : des changements qui pourraient survenir</li><li><strong>Test de résistance</strong> : scénarios extrêmes et peu probables, souvent avec des corrélations en hausse</li><li><strong>Test de résistance inversé</strong> : partir d’une perte inacceptable et chercher ce qui la provoque</li></ul></div>",
    "gap": "Les scénarios montrent l’ampleur des pertes extrêmes mais ne donnent aucune probabilité."
   }
  },
  "pm3-users": {
   "zh": {
    "topic": "风险指标的选择",
    "front": "哪些风险指标适合银行、资产管理人、DB 养老基金和保险公司？",
    "back": "<div class=\"ans\"><ul><li><strong>银行</strong>：流动性、经济资本、VaR、敏感性、情景、杠杆</li><li><strong>资产管理人</strong>：赎回风险、跟踪误差 VaR、头寸限额</li><li><strong>DB 养老金</strong>：风险盈余；利率和曲线风险</li><li><strong>保险公司</strong>：资产负债匹配、敏感性、情景</li></ul></div>"
   },
   "ja": {
    "topic": "リスク指標の選択",
    "front": "銀行、資産運用会社、DB 年金基金、保険会社にはそれぞれどのリスク指標が合うか。",
    "back": "<div class=\"ans\"><ul><li><strong>銀行</strong>：流動性、経済資本、VaR、感応度、シナリオ、レバレッジ</li><li><strong>資産運用会社</strong>：解約リスク、トラッキング・エラー VaR、ポジション限度</li><li><strong>DB 年金</strong>：サープラス・アット・リスク、金利とカーブのリスク</li><li><strong>保険会社</strong>：資産・負債のマッチング、感応度、シナリオ</li></ul></div>"
   },
   "fr": {
    "topic": "Choix des mesures de risque",
    "front": "Quelles mesures de risque conviennent aux banques, aux gérants d’actifs, aux fonds de pension à prestations définies et aux assureurs ?",
    "back": "<div class=\"ans\"><ul><li><strong>Banques</strong> : liquidité, capital économique, VaR, sensibilité, scénarios, levier</li><li><strong>Gérants d’actifs</strong> : risque de rachat, VaR de tracking error, limites de position</li><li><strong>Fonds de pension PD</strong> : surplus at risk ; risque de taux et de courbe</li><li><strong>Assureurs</strong> : adossement actif–passif, sensibilités, scénarios</li></ul></div>"
   }
  },
  "pm3-constraints": {
   "zh": {
    "topic": "市场风险约束",
    "front": "说出用风险指标约束市场风险的方式。",
    "back": "<div class=\"ans\"><ul><li><strong>风险预算</strong>：分配总风险；VaR 按方差规则相加，所以 \\(\\rho<1\\) 时总和小于各部分之和</li><li>按风险进行<strong>资本配置</strong>；每单位资本的回报</li><li><strong>头寸限额</strong>；<strong>情景限额</strong>；<strong>止损限额</strong></li></ul></div>",
    "gap": "在 A/B 例子中，单独的 VaR 1.98m 和 0.66m 之和为 2.64m，但组合的 VaR 为 2.27m。"
   },
   "ja": {
    "topic": "市場リスクの制約",
    "front": "リスク指標を使って市場リスクを制約する方法を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>リスク・バジェッティング</strong>：総リスクを配分する。VaR は分散のルールで足し合わさるので、\\(\\rho<1\\) なら合計は個々の和より小さい</li><li>リスクに基づく<strong>資本配分</strong>。資本 1 単位当たりのリターン</li><li><strong>ポジション限度</strong>、<strong>シナリオ限度</strong>、<strong>ストップロス限度</strong></li></ul></div>",
    "gap": "A/B の例では、個別の VaR 1.98m と 0.66m の合計は 2.64m だが、ポートフォリオの VaR は 2.27m。"
   },
   "fr": {
    "topic": "Contraintes de risque de marché",
    "front": "Citez les façons d’utiliser les mesures de risque pour encadrer le risque de marché.",
    "back": "<div class=\"ans\"><ul><li><strong>Budget de risque</strong> : répartir le risque total ; les VaR s’additionnent selon la règle de variance, le total est donc inférieur à la somme quand \\(\\rho<1\\)</li><li><strong>Allocation du capital</strong> selon le risque ; rendement par unité de capital</li><li><strong>Limites de position</strong> ; <strong>limites de scénario</strong> ; <strong>limites de stop-loss</strong></li></ul></div>",
    "gap": "Dans l’exemple A/B, les VaR individuelles de 1,98m et 0,66m font 2,64m au total, mais celle du portefeuille est de 2,27m."
   }
  }
 }
});
