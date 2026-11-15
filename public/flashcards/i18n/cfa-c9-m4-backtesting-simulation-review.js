deckI18n({
 "source": {
  "zh": "CFA 二级 投资组合管理 · M4 回测与模拟 · 单元复习",
  "ja": "CFA レベル II ポートフォリオ運用 · M4 バックテストとシミュレーション · 単元の復習",
  "fr": "CFA niveau II Gestion de portefeuille · M4 Backtesting et simulation · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "pm4-def": {
   "zh": {
    "topic": "回测 · 定义与步骤",
    "front": "什么是回测？列出其三个步骤。",
    "back": "<div class=\"ans\"><p>使用历史数据检验模型或策略，就好像过去一直在执行它一样。</p><ul><li><strong>策略设计</strong>：假设、目标、规则、参数</li><li><strong>历史投资模拟</strong>：每期构建并再平衡组合</li><li><strong>结果分析</strong>：业绩统计</li></ul></div>"
   },
   "ja": {
    "topic": "バックテスト · 定義と手順",
    "front": "バックテストとは何か。3 つの手順を挙げよ。",
    "back": "<div class=\"ans\"><p>過去のデータを使い、あたかも過去にそれに従っていたかのようにモデルや戦略を検証すること。</p><ul><li><strong>戦略の設計</strong>：仮説、目標、ルール、パラメータ</li><li><strong>過去の投資のシミュレーション</strong>：各期にポートフォリオを構築・リバランス</li><li><strong>結果の分析</strong>：パフォーマンス統計</li></ul></div>"
   },
   "fr": {
    "topic": "Backtesting · définition et étapes",
    "front": "Qu’est-ce que le backtesting ? Citez ses trois étapes.",
    "back": "<div class=\"ans\"><p>Utiliser des données historiques pour tester un modèle ou une stratégie, comme si on l’avait suivi dans le passé.</p><ul><li><strong>Conception de la stratégie</strong> : hypothèse, objectifs, règles, paramètres</li><li><strong>Simulation historique de l’investissement</strong> : constituer et rééquilibrer les portefeuilles à chaque période</li><li><strong>Analyse des résultats</strong> : statistiques de performance</li></ul></div>"
   }
  },
  "pm4-rolling": {
   "zh": {
    "topic": "滚动窗口",
    "front": "滚动窗口回测如何运作？",
    "back": "<div class=\"ans\"><p>在每个再平衡日，只用截至该日可得的数据构建组合，在下一（样本外）期间持有，然后向前滚动并重复。</p></div>"
   },
   "ja": {
    "topic": "ローリング・ウィンドウ",
    "front": "ローリング・ウィンドウによるバックテストはどう機能するか。",
    "back": "<div class=\"ans\"><p>各リバランス日に、その日までに入手できたデータだけでポートフォリオを構築し、次の（アウト・オブ・サンプルの）期間保有し、前に進めて繰り返す。</p></div>"
   },
   "fr": {
    "topic": "Fenêtre glissante",
    "front": "Comment fonctionne un backtest à fenêtre glissante ?",
    "back": "<div class=\"ans\"><p>À chaque date de rééquilibrage, on ne construit le portefeuille qu’avec les données disponibles à cette date, on le détient sur la période suivante (hors échantillon), puis on avance la fenêtre et on recommence.</p></div>"
   }
  },
  "pm4-metrics": {
   "zh": {
    "topic": "回测指标",
    "front": "除平均回报和波动率外，回测还应报告什么？为什么？定义最大回撤。",
    "back": "<div class=\"ans\"><p><strong>下行风险</strong>：回报常常偏斜且肥尾，所以要报告 VaR、CVaR 和最大回撤。</p><p><strong>最大回撤</strong>：从峰值到谷底的最大跌幅，例如 120 → 90 为 \\(-25\\%\\)。</p></div>"
   },
   "ja": {
    "topic": "バックテストの指標",
    "front": "バックテストでは平均リターンとボラティリティ以外に何を報告すべきか。なぜか。最大ドローダウンを定義せよ。",
    "back": "<div class=\"ans\"><p><strong>下方リスク</strong>：リターンは歪みがあり裾が厚いことが多いので、VaR、CVaR、最大ドローダウンを報告する。</p><p><strong>最大ドローダウン</strong>：高値から安値までの最大の下落。例：120 → 90 は \\(-25\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Indicateurs d’un backtest",
    "front": "Que doit indiquer un backtest au-delà du rendement moyen et de la volatilité, et pourquoi ? Définissez la perte maximale (maximum drawdown).",
    "back": "<div class=\"ans\"><p>Le <strong>risque de baisse</strong> : les rendements sont souvent asymétriques et à queues épaisses ; indiquez la VaR, la CVaR et la perte maximale.</p><p><strong>Perte maximale</strong> : la plus forte baisse d’un sommet à un creux, p. ex. 120 → 90 donne \\(-25\\%\\).</p></div>"
   }
  },
  "pm4-survivorship": {
   "zh": {
    "topic": "幸存者偏差",
    "front": "回测中的幸存者偏差是什么？如何修正？",
    "back": "<div class=\"ans\"><p>数据只包括仍然存在的公司；失败和退市的公司缺失，所以回报被<strong>高估</strong>，风险被低估。</p><p>修正：使用保留所有公司（包括已消亡公司）的数据库。</p></div>"
   },
   "ja": {
    "topic": "生存者バイアス",
    "front": "バックテストにおける生存者バイアスとは何か。どう修正するか。",
    "back": "<div class=\"ans\"><p>データに現存する企業しか含まれず、破綻や上場廃止の企業が抜けているため、リターンが<strong>過大</strong>に、リスクが過小に示される。</p><p>修正：消滅した企業も含めすべての企業を保持するデータベースを使う。</p></div>"
   },
   "fr": {
    "topic": "Biais du survivant",
    "front": "Qu’est-ce que le biais du survivant dans un backtest, et comment le corriger ?",
    "back": "<div class=\"ans\"><p>Les données n’incluent que les sociétés qui existent encore ; les sociétés défaillantes et radiées manquent, d’où des rendements <strong>surestimés</strong> et un risque sous-estimé.</p><p>Correction : une base de données qui conserve toutes les sociétés, y compris disparues.</p></div>"
   }
  },
  "pm4-lookahead": {
   "zh": {
    "topic": "前视偏差",
    "front": "什么是前视偏差？如何修正？",
    "back": "<div class=\"ans\"><p>使用在决策日尚不可得的信息，例如年末后数月才公布的年度盈利，或之后重述的数据。</p><p>修正：使用<strong>时点</strong>数据，并按报告延迟做滞后处理。</p></div>"
   },
   "ja": {
    "topic": "先読みバイアス",
    "front": "先読みバイアスとは何か。どう修正するか。",
    "back": "<div class=\"ans\"><p>意思決定日にはまだ入手できない情報を使うこと。例：期末から数か月後に公表される年次利益や、後で修正再表示されたデータ。</p><p>修正：<strong>ポイント・イン・タイム</strong>のデータを、報告の遅れだけずらして使う。</p></div>"
   },
   "fr": {
    "topic": "Biais d’anticipation",
    "front": "Qu’est-ce que le biais d’anticipation (look-ahead), et comment le corriger ?",
    "back": "<div class=\"ans\"><p>Utiliser une information indisponible à la date de décision, p. ex. des bénéfices annuels publiés des mois après la clôture, ou des données retraitées ultérieurement.</p><p>Correction : des données <strong>à date</strong> (point-in-time), décalées du délai de publication.</p></div>"
   }
  },
  "pm4-snooping": {
   "zh": {
    "topic": "数据窥探",
    "front": "什么是数据窥探？如何防范？",
    "back": "<div class=\"ans\"><p>在同一数据上测试许多策略或参数，直到某个偶然奏效，然后只报告那一个。</p><p>修正：<strong>样本外</strong>测试、交叉验证，以及更高的显著性门槛（如 \\(t&gt;3\\)）。</p></div>"
   },
   "ja": {
    "topic": "データ・スヌーピング",
    "front": "データ・スヌーピングとは何か。どう防ぐか。",
    "back": "<div class=\"ans\"><p>同じデータで多くの戦略やパラメータを試し、偶然うまくいったものだけを報告すること。</p><p>修正：<strong>アウト・オブ・サンプル</strong>での検証、交差検証、より高い有意性の基準（例：\\(t&gt;3\\)）。</p></div>"
   },
   "fr": {
    "topic": "Data snooping",
    "front": "Qu’est-ce que le data snooping, et comment s’en prémunir ?",
    "back": "<div class=\"ans\"><p>Tester de nombreuses stratégies ou paramètres sur les mêmes données jusqu’à ce que l’un fonctionne par hasard, et ne présenter que celui-là.</p><p>Correction : tests <strong>hors échantillon</strong>, validation croisée, et un seuil de significativité plus exigeant (p. ex. \\(t&gt;3\\)).</p></div>"
   }
  },
  "pm4-why-sim": {
   "zh": {
    "topic": "为什么要模拟",
    "front": "模拟为回测增加了什么？",
    "back": "<div class=\"ans\"><p>回测只显示历史走过的<strong>一条路径</strong>。模拟生成许多情景，包括比历史更糟的情景，以观察结果的范围。</p></div>"
   },
   "ja": {
    "topic": "なぜシミュレーションか",
    "front": "シミュレーションはバックテストに何を加えるか。",
    "back": "<div class=\"ans\"><p>バックテストは歴史がたどった<strong>1 つの経路</strong>しか示さない。シミュレーションは歴史より悪いものも含む多くのシナリオを生成し、結果の幅を見る。</p></div>"
   },
   "fr": {
    "topic": "Pourquoi simuler",
    "front": "Qu’apporte la simulation à un backtest ?",
    "back": "<div class=\"ans\"><p>Un backtest ne montre qu’<strong>une seule trajectoire</strong>, celle de l’histoire. La simulation génère de nombreux scénarios, y compris pires que l’histoire, pour voir l’éventail des résultats.</p></div>"
   }
  },
  "pm4-hist-vs-mc": {
   "zh": {
    "topic": "历史模拟与蒙特卡洛模拟",
    "front": "比较历史模拟（自助法）与蒙特卡洛模拟。",
    "back": "<div class=\"ans\"><ul><li><strong>历史</strong>：有放回地随机抽取过去的回报；保留真实的肥尾和相关性，但无法产生从未发生过的结果</li><li><strong>蒙特卡洛</strong>：从假设的<strong>多元分布</strong>中抽取；可以超出历史，但带有模型风险</li></ul></div>",
    "gap": "敏感性分析在其他假设下重新运行模拟，例如用肥尾代替正态。"
   },
   "ja": {
    "topic": "ヒストリカル・シミュレーションとモンテカルロ",
    "front": "ヒストリカル・シミュレーション（ブートストラップ）とモンテカルロ・シミュレーションを比較せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>ヒストリカル</strong>：過去のリターンを復元抽出でランダムに引く。実際のファット・テールと相関を保つが、起きたことのない結果はつくれない</li><li><strong>モンテカルロ</strong>：仮定した<strong>多変量分布</strong>から引く。歴史を超えられるが、モデル・リスクを伴う</li></ul></div>",
    "gap": "感応度分析では、正規分布の代わりにファット・テールにするなど別の前提でシミュレーションをやり直す。"
   },
   "fr": {
    "topic": "Simulation historique ou Monte-Carlo",
    "front": "Comparez la simulation historique (bootstrap) et la simulation de Monte-Carlo.",
    "back": "<div class=\"ans\"><ul><li><strong>Historique</strong> : tirer au hasard des rendements passés, avec remise ; garde les vraies queues épaisses et corrélations, mais ne peut produire des issues jamais survenues</li><li><strong>Monte-Carlo</strong> : tirer dans une <strong>distribution multivariée</strong> supposée ; peut dépasser l’histoire, mais comporte un risque de modèle</li></ul></div>",
    "gap": "L’analyse de sensibilité relance la simulation sous d’autres hypothèses, p. ex. des queues épaisses au lieu de la loi normale."
   }
  }
 }
});
