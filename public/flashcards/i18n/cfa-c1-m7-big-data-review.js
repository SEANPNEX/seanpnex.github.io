deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M7 大数据项目 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M7 ビッグデータ · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M7 Big data · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q7-forms": {
   "zh": {
    "topic": "数据 · 形式",
    "front": "区分结构化、半结构化和非结构化数据，并各举一例。什么是另类数据？",
    "back": "<div class=\"ans\"><ul><li><strong>结构化</strong>：固定的行和列（SQL 表、价格面板、CSV）</li><li><strong>半结构化</strong>：带标签或键（JSON、XML、网站日志）</li><li><strong>非结构化</strong>：没有固定模式（文本、图像、音频、视频）</li></ul><p><strong>另类数据</strong>来自常规披露渠道之外，例如停车场的卫星图像或匿名化的支付数据。</p></div>"
   },
   "ja": {
    "topic": "データ · 形式",
    "front": "構造化、半構造化、非構造化データを区別し、それぞれ例を挙げよ。オルタナティブ・データとは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>構造化</strong>：決まった行と列（SQL テーブル、価格パネル、CSV）</li><li><strong>半構造化</strong>：タグやキーがある（JSON、XML、ウェブログ）</li><li><strong>非構造化</strong>：スキーマがない（テキスト、画像、音声、動画）</li></ul><p><strong>オルタナティブ・データ</strong>は通常の開示経路の外から得るデータで、例えば駐車場の衛星画像や匿名化された決済データ。</p></div>"
   },
   "fr": {
    "topic": "Données · formes",
    "front": "Distinguez données structurées, semi-structurées et non structurées, avec un exemple de chacune. Que sont les données alternatives ?",
    "back": "<div class=\"ans\"><ul><li><strong>Structurées</strong> : lignes et colonnes fixes (tables SQL, panels de prix, CSV)</li><li><strong>Semi-structurées</strong> : balises ou clés (JSON, XML, journaux web)</li><li><strong>Non structurées</strong> : pas de schéma (texte, images, audio, vidéo)</li></ul><p>Les <strong>données alternatives</strong> proviennent d’en dehors des canaux de publication habituels, par ex. images satellite de parkings ou paiements anonymisés.</p></div>"
   }
  },
  "q7-four-vs": {
   "zh": {
    "topic": "数据 · 四个 V",
    "front": "大数据的四个 V 是什么？",
    "back": "<div class=\"ans\"><ul><li><strong>Volume（数量）</strong>：数据有多少</li><li><strong>Velocity（速度）</strong>：数据到达以及必须处理的速度</li><li><strong>Variety（多样性）</strong>：来源和格式的多样性</li><li><strong>Veracity（真实性）</strong>：准确性、可信度和可靠性</li></ul><p>有人再加上 <strong>Value（价值）</strong>：收益必须超过获取、处理、合规和模型风险的成本。</p></div>",
    "gap": "数据更多并不能消除偏差：一个巨大但不具代表性的样本，只会精确地估计错误的量。"
   },
   "ja": {
    "topic": "データ · 4 つの V",
    "front": "ビッグデータの 4 つの V とは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>Volume（量）</strong>：データの多さ</li><li><strong>Velocity（速度）</strong>：データが届き、処理しなければならない速さ</li><li><strong>Variety（多様性）</strong>：情報源と形式の多様さ</li><li><strong>Veracity（正確性）</strong>：正確さ、信頼性、確かさ</li></ul><p><strong>Value（価値）</strong>を加えることもある：便益が取得・処理・コンプライアンス・モデル・リスクのコストを上回らなければならない。</p></div>",
    "gap": "データを増やしてもバイアスは消えない：代表性のない巨大な標本は、間違った量を精密に推定するだけ。"
   },
   "fr": {
    "topic": "Données · les quatre V",
    "front": "Quels sont les quatre V du big data ?",
    "back": "<div class=\"ans\"><ul><li><strong>Volume</strong> : quantité de données</li><li><strong>Vélocité</strong> : vitesse à laquelle elles arrivent et doivent être traitées</li><li><strong>Variété</strong> : diversité des sources et des formats</li><li><strong>Véracité</strong> : exactitude, crédibilité et fiabilité</li></ul><p>Certains ajoutent la <strong>valeur</strong> : les bénéfices doivent dépasser les coûts d’acquisition, de traitement, de conformité et de risque de modèle.</p></div>",
    "gap": "Plus de données n’éliminent pas le biais : un immense échantillon non représentatif estime précisément la mauvaise quantité."
   }
  },
  "q7-workflow": {
   "zh": {
    "topic": "项目流程",
    "front": "列出大数据项目的七个步骤。",
    "back": "<div class=\"ans\"><ul><li>把问题概念化</li><li>收集并整理数据</li><li>数据准备与整理（wrangling）</li><li>数据探索</li><li>特征工程与特征选择</li><li>选择、训练并验证模型</li><li>部署与监控</li></ul><p>这个过程是反复迭代的，不是单向的。</p></div>"
   },
   "ja": {
    "topic": "プロジェクトの流れ",
    "front": "ビッグデータ・プロジェクトの 7 つのステップを挙げよ。",
    "back": "<div class=\"ans\"><ul><li>問題を概念化する</li><li>データを収集・整理する</li><li>準備とラングリング</li><li>探索する</li><li>特徴量を作成・選択する</li><li>モデルを選び、訓練し、検証する</li><li>導入して監視する</li></ul><p>この過程は一方通行ではなく反復的。</p></div>"
   },
   "fr": {
    "topic": "Déroulement du projet",
    "front": "Énumérez les sept étapes d’un projet de big data.",
    "back": "<div class=\"ans\"><ul><li>Conceptualiser le problème</li><li>Collecter et organiser les données</li><li>Préparer et transformer (wrangling)</li><li>Explorer</li><li>Construire et sélectionner les variables</li><li>Choisir, entraîner et valider un modèle</li><li>Déployer et surveiller</li></ul><p>Le processus est itératif, pas à sens unique.</p></div>"
   }
  },
  "q7-prep-vs-wrangle": {
   "zh": {
    "topic": "数据准备与数据整理",
    "front": "数据准备（preparation）和数据整理（wrangling）有什么区别？",
    "back": "<div class=\"ans\"><ul><li><strong>准备（清洗）</strong>：检查原始数据，找出并修正<strong>质量问题</strong></li><li><strong>整理（预处理）</strong>：把清洗后的数据<strong>转换、合并和重塑</strong>以便分析（提取、筛选、选择、汇总、转换、连接、缩尾处理）</li></ul></div>"
   },
   "ja": {
    "topic": "準備とラングリング",
    "front": "データ準備とデータ・ラングリングの違いは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>準備（クレンジング）</strong>：生データを調べ、<strong>品質の問題</strong>を見つけて直す</li><li><strong>ラングリング（前処理）</strong>：クリーンにしたデータを分析用に<strong>変換・結合・整形</strong>する（抽出、フィルタ、選択、集計、変換、結合、ウィンザー化）</li></ul></div>"
   },
   "fr": {
    "topic": "Préparation ou wrangling",
    "front": "Quelle est la différence entre la préparation des données et le wrangling ?",
    "back": "<div class=\"ans\"><ul><li><strong>Préparation (nettoyage)</strong> : examiner les données brutes, trouver et corriger les <strong>problèmes de qualité</strong></li><li><strong>Wrangling (prétraitement)</strong> : <strong>transformer, combiner et remodeler</strong> les données nettoyées pour l’analyse (extraire, filtrer, sélectionner, agréger, convertir, joindre, winsoriser)</li></ul></div>"
   }
  },
  "q7-errors": {
   "zh": {
    "topic": "数据错误",
    "front": "说出这些数据错误的名称：(1) 股数为负，(2) 价格小数点错位，(3) 欧元数值标成美元代码，(4) 千和百万混用，(5) 同一份文件来自两个数据源。",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>无效（invalidity）</strong></li><li>(2) <strong>不准确（inaccuracy）</strong></li><li>(3) <strong>不一致（inconsistency）</strong></li><li>(4) <strong>不统一（non-uniformity）</strong></li><li>(5) <strong>重复（duplication）</strong></li></ul><p>还有：不完整（缺失值）和过时（数值已过期）。</p></div>",
    "gap": "如果缺失是系统性的，删除不完整的行会使样本产生偏差；插补则会低估不确定性。"
   },
   "ja": {
    "topic": "データの誤り",
    "front": "次のデータの誤りの名前を答えよ：(1) 株数がマイナス、(2) 価格の小数点の誤り、(3) ユーロの値に USD コード、(4) 千と百万の混在、(5) 2 つのフィードから同じ開示。",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>無効（invalidity）</strong></li><li>(2) <strong>不正確（inaccuracy）</strong></li><li>(3) <strong>不整合（inconsistency）</strong></li><li>(4) <strong>非統一（non-uniformity）</strong></li><li>(5) <strong>重複（duplication）</strong></li></ul><p>他に：不完全（欠損値）と陳腐化（古い値）。</p></div>",
    "gap": "欠損が系統的なら、不完全な行を削除すると標本にバイアスが生じる；補完は不確実性を過小評価する。"
   },
   "fr": {
    "topic": "Erreurs de données",
    "front": "Nommez les erreurs : (1) nombre d’actions négatif, (2) prix avec la mauvaise décimale, (3) code USD sur des valeurs en EUR, (4) milliers mêlés aux millions, (5) un même dépôt issu de deux flux.",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>Invalidité</strong></li><li>(2) <strong>Inexactitude</strong></li><li>(3) <strong>Incohérence</strong></li><li>(4) <strong>Non-uniformité</strong></li><li>(5) <strong>Duplication</strong></li></ul><p>Aussi : incomplétude (valeurs manquantes) et obsolescence (valeurs périmées).</p></div>",
    "gap": "Supprimer les lignes incomplètes biaise l’échantillon si les manques sont systématiques ; l’imputation sous-estime l’incertitude."
   }
  },
  "q7-scaling": {
   "zh": {
    "topic": "缩放 · 归一化与标准化",
    "front": "写出最小–最大归一化和标准化的公式。它们的参数在哪里估计？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$x^*=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}\\in[0,1]$$</div><div class=\"eq-block\">$$z=\\frac{x-\\mu}{\\sigma}$$</div><p><strong>只在训练集上</strong>估计 \\(x_{\\min}, x_{\\max}, \\mu, \\sigma\\)，然后把它们应用到验证集、测试集和实时数据。</p></div>",
    "gap": "归一化对异常值敏感；标准化对取值范围没有任何假设。"
   },
   "ja": {
    "topic": "スケーリング · 正規化と標準化",
    "front": "最小–最大正規化と標準化の式を示せ。それぞれのパラメータはどこで推定するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$x^*=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}\\in[0,1]$$</div><div class=\"eq-block\">$$z=\\frac{x-\\mu}{\\sigma}$$</div><p>\\(x_{\\min}, x_{\\max}, \\mu, \\sigma\\) は<strong>訓練データだけ</strong>で推定し、それを検証・テスト・本番のデータに適用する。</p></div>",
    "gap": "正規化は外れ値に敏感；標準化は値の範囲について何も仮定しない。"
   },
   "fr": {
    "topic": "Mise à l’échelle · normalisation ou standardisation",
    "front": "Donnez les formules de la normalisation min–max et de la standardisation. Où leurs paramètres sont-ils estimés ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$x^*=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}}\\in[0,1]$$</div><div class=\"eq-block\">$$z=\\frac{x-\\mu}{\\sigma}$$</div><p>Estimer \\(x_{\\min}, x_{\\max}, \\mu, \\sigma\\) sur l’<strong>ensemble d’entraînement uniquement</strong>, puis les appliquer aux données de validation, de test et en production.</p></div>",
    "gap": "La normalisation est sensible aux valeurs aberrantes ; la standardisation ne suppose rien sur l’étendue."
   }
  },
  "q7-lookahead": {
   "zh": {
    "topic": "时点数据",
    "front": "为什么把今天重述后的基本面数据连接到历史价格上会有问题？",
    "back": "<div class=\"ans\"><p>这会造成<strong>前视偏差</strong>：修订后的数字在当时并不存在。要使用发布时间戳和历史成分股名单，反映投资者当时真正能知道的信息。</p></div>"
   },
   "ja": {
    "topic": "ポイント・イン・タイムのデータ",
    "front": "今日の修正済みファンダメンタルズを過去の価格に結合すると、なぜ問題なのか。",
    "back": "<div class=\"ans\"><p><strong>ルックアヘッド・バイアス</strong>が生じる：修正後の数字は当時は入手できなかった。公表のタイムスタンプと過去の構成銘柄リストを使い、投資家が実際に知り得たことを反映させる。</p></div>"
   },
   "fr": {
    "topic": "Données à date",
    "front": "Pourquoi est-ce un problème de joindre les fondamentaux retraités d’aujourd’hui aux prix historiques ?",
    "back": "<div class=\"ans\"><p>Cela crée un <strong>biais d’anticipation</strong> : les chiffres révisés n’étaient pas disponibles à l’époque. Utiliser les horodatages de publication et les listes historiques de constituants, qui reflètent ce qu’un investisseur pouvait réellement savoir.</p></div>"
   }
  },
  "q7-text-cleaning": {
   "zh": {
    "topic": "文本 · 词元与规范化",
    "front": "什么是词元（token）？区分词干提取和词形还原。",
    "back": "<div class=\"ans\"><p><strong>词元</strong>是一个分析单位：词、子词、标点或符号，不一定是一个完整的词。</p><ul><li><strong>词干提取</strong>：机械规则；可能产生不是词的形式</li><li><strong>词形还原</strong>：结合语言上下文，映射到词典中的基本形式</li></ul></div>",
    "gap": "删除数字、标点或停用词是一种选择：“10%”、“$5bn” 和 “not” 都可能带有含义。"
   },
   "ja": {
    "topic": "テキスト · トークンと正規化",
    "front": "トークンとは何か。ステミングとレンマ化を区別せよ。",
    "back": "<div class=\"ans\"><p><strong>トークン</strong>は分析の単位：単語、サブワード、句読点、記号であり、必ずしも単語とは限らない。</p><ul><li><strong>ステミング</strong>：機械的なルール；単語でない形ができることがある</li><li><strong>レンマ化</strong>：言語的な文脈を使って辞書の基本形に対応させる</li></ul></div>",
    "gap": "数字、句読点、ストップワードを削除するのは一つの選択：「10%」「$5bn」「not」も意味を持ちうる。"
   },
   "fr": {
    "topic": "Texte · jetons et normalisation",
    "front": "Qu’est-ce qu’un jeton (token) ? Distinguez racinisation et lemmatisation.",
    "back": "<div class=\"ans\"><p>Un <strong>jeton</strong> est une unité d’analyse : un mot, un sous-mot, un signe de ponctuation ou un symbole, pas forcément un mot.</p><ul><li><strong>Racinisation</strong> : règles mécaniques ; peut créer des non-mots</li><li><strong>Lemmatisation</strong> : ramène à la forme de base du dictionnaire en utilisant le contexte linguistique</li></ul></div>",
    "gap": "Supprimer les nombres, la ponctuation ou les mots vides est un choix : « 10% », « $5bn » et « not » peuvent porter du sens."
   }
  },
  "q7-bow": {
   "zh": {
    "topic": "文本 · 词袋",
    "front": "什么是词袋表示？什么是文档–词项矩阵？",
    "back": "<div class=\"ans\"><p><strong>词袋（BOW）</strong>：每篇文档一个由词项<strong>计数或权重</strong>构成的向量；忽略词序和大部分上下文。</p><p><strong>文档–词项矩阵</strong>：\\(D\\) 篇文档 × \\(V\\) 个词项，元素 = 词项 \\(t\\) 在文档 \\(d\\) 中的计数或权重；维度高且<strong>稀疏</strong>。</p></div>",
    "gap": "像 “going concern”（持续经营）这样的 n 元组保留了普通词袋会丢失的有用多词模式。"
   },
   "ja": {
    "topic": "テキスト · BoW",
    "front": "Bag-of-words 表現と文書–単語行列とは何か。",
    "back": "<div class=\"ans\"><p><strong>BOW</strong>：文書ごとの単語の<strong>出現回数や重み</strong>のベクトル；語順や文脈の大半を無視する。</p><p><strong>文書–単語行列</strong>：\\(D\\) 個の文書 × \\(V\\) 個の単語で、要素 = 文書 \\(d\\) における単語 \\(t\\) の回数または重み；高次元で<strong>疎</strong>。</p></div>",
    "gap": "「going concern」（継続企業）のような n-gram は、単純な BOW が失う有用な複数語のパターンを残す。"
   },
   "fr": {
    "topic": "Texte · sac de mots",
    "front": "Qu’est-ce qu’une représentation en sac de mots et une matrice document–terme ?",
    "back": "<div class=\"ans\"><p><strong>Sac de mots (BOW)</strong> : un vecteur de <strong>comptes ou poids</strong> des termes par document ; ignore l’ordre des mots et la plupart du contexte.</p><p><strong>Matrice document–terme</strong> : \\(D\\) documents × \\(V\\) termes, élément = compte ou poids du terme \\(t\\) dans le document \\(d\\) ; de grande dimension et <strong>creuse</strong>.</p></div>",
    "gap": "Les n-grammes comme « going concern » (continuité d’exploitation) préservent des motifs multi-mots utiles que le BOW simple perd."
   }
  },
  "q7-tfidf": {
   "zh": {
    "topic": "文本 · TF–IDF",
    "front": "定义 TF–IDF。哪些词项会得到高权重？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$IDF(t)=\\log\\frac{N}{DF(t)}$$</div><div class=\"eq-block\">$$TF\\text{-}IDF(t,d)=TF(t,d)\\times IDF(t)$$</div><p>高权重：<strong>在某篇文档中频繁出现，但在整个语料库中很少见</strong>的词项。几乎每篇文档都出现的词项权重很小。</p></div>"
   },
   "ja": {
    "topic": "テキスト · TF–IDF",
    "front": "TF–IDF を定義せよ。どの単語が高い重みを得るか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$IDF(t)=\\log\\frac{N}{DF(t)}$$</div><div class=\"eq-block\">$$TF\\text{-}IDF(t,d)=TF(t,d)\\times IDF(t)$$</div><p>高い重み：<strong>その文書では頻出するが、コーパス全体ではまれな</strong>単語。ほぼすべての文書に出る単語の重みは小さい。</p></div>"
   },
   "fr": {
    "topic": "Texte · TF–IDF",
    "front": "Définissez TF–IDF. Quels termes reçoivent un poids élevé ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$IDF(t)=\\log\\frac{N}{DF(t)}$$</div><div class=\"eq-block\">$$TF\\text{-}IDF(t,d)=TF(t,d)\\times IDF(t)$$</div><p>Poids élevé : les termes <strong>fréquents dans un document mais rares dans le corpus</strong>. Les termes présents dans presque tous les documents pèsent peu.</p></div>"
   }
  },
  "q7-feature-selection": {
   "zh": {
    "topic": "特征 · 选择",
    "front": "可以如何选择特征？什么是互信息？",
    "back": "<div class=\"ans\"><p>相关系数、<strong>卡方</strong>检验（类别特征与类别）、<strong>互信息</strong>、基于模型的重要性或正则化，以及经济判断。</p><div class=\"eq-block\">$$I(X;Y)=\\sum p(x,y)\\log\\frac{p(x,y)}{p(x)p(y)}$$</div><p>相互独立时为零；越大 = 共享的信息越多（上限不是 1）。</p></div>",
    "gap": "要在训练或交叉验证过程内部选择特征；用整个数据集来选会泄露信息。"
   },
   "ja": {
    "topic": "特徴量 · 選択",
    "front": "特徴量はどう選べるか。相互情報量とは何か。",
    "back": "<div class=\"ans\"><p>相関、<strong>カイ二乗</strong>検定（カテゴリ特徴量とクラス）、<strong>相互情報量</strong>、モデルに基づく重要度や正則化、そして経済的な判断。</p><div class=\"eq-block\">$$I(X;Y)=\\sum p(x,y)\\log\\frac{p(x,y)}{p(x)p(y)}$$</div><p>独立ならゼロ；大きいほど共有する情報が多い（上限は 1 ではない）。</p></div>",
    "gap": "特徴量の選択は訓練または交差検証の過程の中で行う；データ全体を使うと情報が漏れる。"
   },
   "fr": {
    "topic": "Variables · sélection",
    "front": "Comment sélectionner les variables, et qu’est-ce que l’information mutuelle ?",
    "back": "<div class=\"ans\"><p>Corrélation, tests du <strong>khi-deux</strong> (variable catégorielle vs classe), <strong>information mutuelle</strong>, importance issue d’un modèle ou régularisation, et jugement économique.</p><div class=\"eq-block\">$$I(X;Y)=\\sum p(x,y)\\log\\frac{p(x,y)}{p(x)p(y)}$$</div><p>Nulle en cas d’indépendance ; plus grande = plus d’information partagée (non bornée par 1).</p></div>",
    "gap": "Sélectionner les variables à l’intérieur du processus d’entraînement ou de validation croisée ; utiliser tout le jeu de données provoque une fuite d’information."
   }
  },
  "q7-feature-engineering": {
   "zh": {
    "topic": "特征 · 构造",
    "front": "举例说明结构化数据和文本的特征工程。",
    "back": "<div class=\"ans\"><ul><li><strong>结构化</strong>：由价格和 EPS 得到盈利收益率或市盈率；增长率、杠杆、滚动波动率、相对一致预期的意外；日历指标；只用之前信息构造的滞后项</li><li><strong>文本</strong>：带类型的数字词元、n 元组、命名实体识别、词性标注、情绪或主题特征、嵌入向量</li></ul></div>"
   },
   "ja": {
    "topic": "特徴量 · エンジニアリング",
    "front": "構造化データとテキストについて、特徴量エンジニアリングの例を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>構造化</strong>：株価と EPS から益回りや PER；成長率、レバレッジ、ローリング・ボラティリティ、コンセンサスに対するサプライズ；カレンダー指標；過去の情報だけを使ったラグ</li><li><strong>テキスト</strong>：型付きの数値トークン、n-gram、固有表現抽出、品詞タグ、センチメントやトピックの特徴量、埋め込み</li></ul></div>"
   },
   "fr": {
    "topic": "Variables · construction",
    "front": "Donnez des exemples d’ingénierie des variables pour des données structurées et pour du texte.",
    "back": "<div class=\"ans\"><ul><li><strong>Structurées</strong> : rendement bénéficiaire ou PER à partir du prix et du BPA ; croissance, levier, volatilité glissante, surprise vs consensus ; indicateurs calendaires ; retards n’utilisant que l’information antérieure</li><li><strong>Texte</strong> : jetons numériques typés, n-grammes, reconnaissance d’entités nommées, étiquettes grammaticales, variables de sentiment ou de thème, plongements (embeddings)</li></ul></div>"
   }
  },
  "q7-params": {
   "zh": {
    "topic": "模型训练 · 参数",
    "front": "区分参数和超参数，并举例。",
    "back": "<div class=\"ans\"><ul><li><strong>参数</strong>：从训练数据中学到（回归系数、网络权重）</li><li><strong>超参数</strong>：由分析师设定，并<strong>在验证数据上调节</strong>（LASSO 惩罚、KNN 中的 \\(K\\)、树的深度、学习率）</li></ul></div>"
   },
   "ja": {
    "topic": "モデルの訓練 · パラメータ",
    "front": "パラメータとハイパーパラメータを例とともに区別せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>パラメータ</strong>：訓練データから学習する（回帰係数、ネットワークの重み）</li><li><strong>ハイパーパラメータ</strong>：分析者が設定し、<strong>検証データで調整する</strong>（LASSO の罰則、KNN の \\(K\\)、木の深さ、学習率）</li></ul></div>"
   },
   "fr": {
    "topic": "Entraînement · paramètres",
    "front": "Distinguez paramètres et hyperparamètres, avec des exemples.",
    "back": "<div class=\"ans\"><ul><li><strong>Paramètres</strong> : appris sur les données d’entraînement (coefficients de régression, poids du réseau)</li><li><strong>Hyperparamètres</strong> : fixés par l’analyste et <strong>réglés sur les données de validation</strong> (pénalité LASSO, \\(K\\) de KNN, profondeur d’arbre, taux d’apprentissage)</li></ul></div>"
   }
  },
  "q7-confusion": {
   "zh": {
    "topic": "评估 · 混淆矩阵",
    "front": "混淆矩阵中哪个格子是第一类错误，哪个是第二类错误？定义 \\(F_1\\) 和 FPR。",
    "back": "<div class=\"ans\"><ul><li><strong>假阳性（FP）= 第一类错误</strong>；<strong>假阴性（FN）= 第二类错误</strong></li></ul><div class=\"eq-block\">$$F_1=2\\,\\frac{P\\times R}{P+R}$$</div><div class=\"eq-block\">$$FPR=\\frac{FP}{FP+TN}$$</div><p>其中精确率 \\(P=TP/(TP+FP)\\)，召回率 \\(R=TP/(TP+FN)\\)。</p></div>"
   },
   "ja": {
    "topic": "評価 · 混同行列",
    "front": "混同行列のどのセルが第 1 種の誤りで、どれが第 2 種の誤りか。\\(F_1\\) と FPR を定義せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>偽陽性（FP）＝第 1 種の誤り</strong>；<strong>偽陰性（FN）＝第 2 種の誤り</strong></li></ul><div class=\"eq-block\">$$F_1=2\\,\\frac{P\\times R}{P+R}$$</div><div class=\"eq-block\">$$FPR=\\frac{FP}{FP+TN}$$</div><p>ただし適合率 \\(P=TP/(TP+FP)\\)、再現率 \\(R=TP/(TP+FN)\\)。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · matrice de confusion",
    "front": "Quelle case de la matrice de confusion est l’erreur de type I, et laquelle est de type II ? Définissez \\(F_1\\) et le FPR.",
    "back": "<div class=\"ans\"><ul><li><strong>Faux positif (FP) = type I</strong> ; <strong>faux négatif (FN) = type II</strong></li></ul><div class=\"eq-block\">$$F_1=2\\,\\frac{P\\times R}{P+R}$$</div><div class=\"eq-block\">$$FPR=\\frac{FP}{FP+TN}$$</div><p>avec la précision \\(P=TP/(TP+FP)\\) et le rappel \\(R=TP/(TP+FN)\\).</p></div>"
   }
  },
  "q7-roc": {
   "zh": {
    "topic": "评估 · ROC 与 RMSE",
    "front": "ROC 曲线画的是什么？如何比较两条曲线？为什么用 RMSE 而不是 MAE？",
    "back": "<div class=\"ans\"><p>ROC 随着阈值变化画出 <strong>TPR 对 FPR</strong>；越靠近左上角、<strong>AUC</strong> 越大的曲线越好。</p><p><strong>RMSE</strong> \\(=\\sqrt{\\tfrac1n\\sum(y-\\hat y)^2}\\) 对<strong>大误差</strong>的惩罚比 MAE 更重，且单位与目标变量相同。</p></div>"
   },
   "ja": {
    "topic": "評価 · ROC と RMSE",
    "front": "ROC 曲線は何をプロットし、2 本の曲線をどう比べるか。なぜ MAE ではなく RMSE を使うのか。",
    "back": "<div class=\"ans\"><p>ROC は閾値を変えながら <strong>TPR と FPR</strong> をプロットする；左上に近く、<strong>AUC</strong> が大きい曲線ほど優れている。</p><p><strong>RMSE</strong> \\(=\\sqrt{\\tfrac1n\\sum(y-\\hat y)^2}\\) は MAE より<strong>大きな誤差</strong>を重く罰し、目的変数と同じ単位を持つ。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · ROC et RMSE",
    "front": "Que représente la courbe ROC, et comment comparer deux courbes ? Pourquoi préférer le RMSE au MAE ?",
    "back": "<div class=\"ans\"><p>La ROC trace le <strong>TPR en fonction du FPR</strong> quand le seuil varie ; une courbe plus proche du coin supérieur gauche et une <strong>AUC</strong> plus grande sont meilleures.</p><p>Le <strong>RMSE</strong> \\(=\\sqrt{\\tfrac1n\\sum(y-\\hat y)^2}\\) pénalise davantage les <strong>grandes erreurs</strong> que le MAE et s’exprime dans l’unité de la cible.</p></div>"
   }
  },
  "q7-bias-drift": {
   "zh": {
    "topic": "治理 · 偏差与漂移",
    "front": "说出大数据模型可能出现的五种偏差和两种漂移。",
    "back": "<div class=\"ans\"><ul><li><strong>选择</strong>偏差、<strong>幸存者</strong>偏差、<strong>前视</strong>偏差、<strong>标签</strong>偏差和<strong>代理变量</strong>偏差</li><li><strong>数据漂移</strong>：输入的分布发生变化</li><li><strong>概念漂移</strong>：输入与目标之间的关系发生变化</li></ul><p>既要监控表现，也要监控数据生成过程；平均值可能掩盖某个正在失效的子群体。</p></div>"
   },
   "ja": {
    "topic": "ガバナンス · バイアスとドリフト",
    "front": "ビッグデータ・モデルが抱えうる 5 つのバイアスと 2 種類のドリフトを挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>選択</strong>バイアス、<strong>生存者</strong>バイアス、<strong>ルックアヘッド</strong>・バイアス、<strong>ラベル</strong>・バイアス、<strong>代理変数</strong>バイアス</li><li><strong>データ・ドリフト</strong>：入力の分布が変わる</li><li><strong>コンセプト・ドリフト</strong>：入力と目的変数の関係が変わる</li></ul><p>パフォーマンスとデータ生成過程の両方を監視する；平均値は機能していない部分集団を隠すことがある。</p></div>"
   },
   "fr": {
    "topic": "Gouvernance · biais et dérive",
    "front": "Nommez cinq biais et deux types de dérive dont peut souffrir un modèle de big data.",
    "back": "<div class=\"ans\"><ul><li>Biais de <strong>sélection</strong>, de <strong>survie</strong>, d’<strong>anticipation</strong>, d’<strong>étiquetage</strong> et de <strong>variable de substitution</strong></li><li><strong>Dérive des données</strong> : la distribution des entrées change</li><li><strong>Dérive de concept</strong> : la relation entrées–cible change</li></ul><p>Surveiller à la fois la performance et le processus générateur des données ; les moyennes peuvent masquer un sous-groupe défaillant.</p></div>"
   }
  }
 }
});
