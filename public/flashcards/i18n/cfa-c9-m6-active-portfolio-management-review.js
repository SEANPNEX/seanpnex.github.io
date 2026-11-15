deckI18n({
 "source": {
  "zh": "CFA 二级 投资组合管理 · M6 主动投资组合管理分析 · 单元复习",
  "ja": "CFA レベル II ポートフォリオ運用 · M6 アクティブ・ポートフォリオ運用の分析 · 単元の復習",
  "fr": "CFA niveau II Gestion de portefeuille · M6 Analyse de la gestion active de portefeuille · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "pm6-active-weights": {
   "zh": {
    "topic": "主动权重",
    "front": "用主动权重表示主动回报。主动权重之和是多少？由此得出什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$R_A=\\textstyle\\sum_i\\Delta w_iR_i$$</div><div class=\"eq-block\">$$\\Delta w_i=w_{P,i}-w_{B,i}$$</div><p>它们之和为<strong>零</strong>：超配由低配提供资金。只有超配跑赢基准的资产才能增加价值。</p></div>"
   },
   "ja": {
    "topic": "アクティブ・ウェイト",
    "front": "アクティブ・リターンをアクティブ・ウェイトで表せ。アクティブ・ウェイトの合計はいくらで、そこから何が言えるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$R_A=\\textstyle\\sum_i\\Delta w_iR_i$$</div><div class=\"eq-block\">$$\\Delta w_i=w_{P,i}-w_{B,i}$$</div><p>合計は<strong>ゼロ</strong>：オーバーウェイトはアンダーウェイトで賄われる。価値を生むのは、ベンチマークを上回る資産をオーバーウェイトしたときだけ。</p></div>"
   },
   "fr": {
    "topic": "Pondérations actives",
    "front": "Écrivez le rendement actif à partir des pondérations actives. Quelle est leur somme, et qu’en découle-t-il ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$R_A=\\textstyle\\sum_i\\Delta w_iR_i$$</div><div class=\"eq-block\">$$\\Delta w_i=w_{P,i}-w_{B,i}$$</div><p>Leur somme est <strong>nulle</strong> : les surpondérations sont financées par des sous-pondérations. On ne crée de la valeur qu’en surpondérant des actifs qui battent l’indice de référence.</p></div>"
   }
  },
  "pm6-aw-example": {
   "zh": {
    "topic": "主动权重例题",
    "front": "基准权重 50/30/20，组合 40/40/20；股票回报 10%、15%、5%。求主动回报。",
    "back": "<div class=\"ans\"><p>主动权重：−10%、+10%、0。</p><div class=\"eq-block\">$$\\begin{aligned}R_A&=-0.1(10\\%)+0.1(15\\%)\\\\&=0.5\\%\\end{aligned}$$</div><p>验证：\\(11\\%-10.5\\%\\)。</p></div>"
   },
   "ja": {
    "topic": "アクティブ・ウェイトの計算例",
    "front": "ベンチマークのウェイト 50/30/20、ポートフォリオ 40/40/20。株式のリターン 10%、15%、5%。アクティブ・リターンを求めよ。",
    "back": "<div class=\"ans\"><p>アクティブ・ウェイト：−10%、+10%、0。</p><div class=\"eq-block\">$$\\begin{aligned}R_A&=-0.1(10\\%)+0.1(15\\%)\\\\&=0.5\\%\\end{aligned}$$</div><p>検算：\\(11\\%-10.5\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Exemple de pondérations actives",
    "front": "Pondérations de référence 50/30/20, portefeuille 40/40/20 ; rendements des actions 10 %, 15 %, 5 %. Trouvez le rendement actif.",
    "back": "<div class=\"ans\"><p>Pondérations actives : −10 %, +10 %, 0.</p><div class=\"eq-block\">$$\\begin{aligned}R_A&=-0.1(10\\%)+0.1(15\\%)\\\\&=0.5\\%\\end{aligned}$$</div><p>Vérification : \\(11\\%-10.5\\%\\).</p></div>"
   }
  },
  "pm6-decomp": {
   "zh": {
    "topic": "配置与选择",
    "front": "把多资产组合的主动回报分解为资产配置和证券选择。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\textstyle\\sum_i(w_i^P-w_i^B)R_i^B$$</div><p><strong>配置</strong>：类别主动权重 × 类别基准回报。</p><div class=\"eq-block\">$$\\textstyle\\sum_i w_i^P(R_i^P-R_i^B)$$</div><p><strong>选择</strong>：组合的类别权重 × 各类别的超额表现。</p></div>"
   },
   "ja": {
    "topic": "配分と選択",
    "front": "マルチアセット・ポートフォリオのアクティブ・リターンを資産配分と銘柄選択に分解せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\textstyle\\sum_i(w_i^P-w_i^B)R_i^B$$</div><p><strong>配分</strong>：資産クラスのアクティブ・ウェイト × クラスのベンチマーク・リターン。</p><div class=\"eq-block\">$$\\textstyle\\sum_i w_i^P(R_i^P-R_i^B)$$</div><p><strong>選択</strong>：ポートフォリオのクラス・ウェイト × 各クラスの超過リターン。</p></div>"
   },
   "fr": {
    "topic": "Allocation et sélection",
    "front": "Décomposez le rendement actif d’un portefeuille multi-actifs en allocation d’actifs et sélection de titres.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\textstyle\\sum_i(w_i^P-w_i^B)R_i^B$$</div><p><strong>Allocation</strong> : pondérations actives des classes × rendements de référence des classes.</p><div class=\"eq-block\">$$\\textstyle\\sum_i w_i^P(R_i^P-R_i^B)$$</div><p><strong>Sélection</strong> : pondérations des classes dans le portefeuille × surperformance de chaque classe.</p></div>"
   }
  },
  "pm6-decomp-example": {
   "zh": {
    "topic": "分解例题",
    "front": "基准：60% 股票（8%），40% 债券（4%）。组合：70% 股票回报 9%，30% 债券回报 3.5%。分解主动回报。",
    "back": "<div class=\"ans\"><ul><li>配置：\\(0.1(8\\%)-0.1(4\\%)=0.4\\%\\)</li><li>选择：\\(0.7(1\\%)+0.3(-0.5\\%)=0.55\\%\\)</li></ul><p>合计 <strong>0.95%</strong> \\(=7.35\\%-6.4\\%\\)。</p></div>"
   },
   "ja": {
    "topic": "分解の計算例",
    "front": "ベンチマーク：株式 60%（8%）、債券 40%（4%）。ポートフォリオ：株式 70% でリターン 9%、債券 30% でリターン 3.5%。アクティブ・リターンを分解せよ。",
    "back": "<div class=\"ans\"><ul><li>配分：\\(0.1(8\\%)-0.1(4\\%)=0.4\\%\\)</li><li>選択：\\(0.7(1\\%)+0.3(-0.5\\%)=0.55\\%\\)</li></ul><p>合計 <strong>0.95%</strong> \\(=7.35\\%-6.4\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Exemple de décomposition",
    "front": "Référence : 60 % actions (8 %), 40 % obligations (4 %). Portefeuille : 70 % actions rapportant 9 %, 30 % obligations rapportant 3,5 %. Décomposez le rendement actif.",
    "back": "<div class=\"ans\"><ul><li>Allocation : \\(0.1(8\\%)-0.1(4\\%)=0.4\\%\\)</li><li>Sélection : \\(0.7(1\\%)+0.3(-0.5\\%)=0.55\\%\\)</li></ul><p>Total <strong>0,95 %</strong> \\(=7.35\\%-6.4\\%\\).</p></div>"
   }
  },
  "pm6-sharpe": {
   "zh": {
    "topic": "夏普比率",
    "front": "定义事前和事后夏普比率。为什么按 \\(R_f\\) 借贷不会改变它？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}=\\frac{R_P-R_f}{\\sigma_P}$$</div><p>事前：预期值；事后：实现值。借贷只会让投资者在同一条 <strong>CAL</strong> 上移动，而 CAL 的斜率就是夏普比率。</p></div>",
    "gap": "所以应选择夏普比率最高的风险组合，再用现金或杠杆设定总风险。"
   },
   "ja": {
    "topic": "シャープ・レシオ",
    "front": "事前・事後のシャープ・レシオを定義せよ。\\(R_f\\) での貸し借りでなぜ変わらないのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}=\\frac{R_P-R_f}{\\sigma_P}$$</div><p>事前は期待値、事後は実現値。貸し借りは投資家を同じ <strong>CAL</strong> の上で動かすだけで、CAL の傾きがシャープ・レシオ。</p></div>",
    "gap": "したがって、シャープ・レシオが最も高いリスク・ポートフォリオを選び、現金かレバレッジで総リスクを決める。"
   },
   "fr": {
    "topic": "Ratio de Sharpe",
    "front": "Définissez le ratio de Sharpe ex ante et ex post. Pourquoi prêter ou emprunter à \\(R_f\\) ne le modifie-t-il pas ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}=\\frac{R_P-R_f}{\\sigma_P}$$</div><p>Ex ante : valeurs attendues ; ex post : réalisées. Prêter ou emprunter déplace l’investisseur le long de la même <strong>CAL</strong>, dont la pente est le ratio de Sharpe.</p></div>",
    "gap": "Choisissez donc le portefeuille risqué au ratio de Sharpe le plus élevé, puis réglez le risque total avec de la trésorerie ou du levier."
   }
  },
  "pm6-cal-cml": {
   "zh": {
    "topic": "CAL 与 CML",
    "front": "什么是资本配置线和资本市场线？",
    "back": "<div class=\"ans\"><ul><li><strong>CAL</strong>：从无风险资产穿过某个风险组合的直线；斜率 = 其夏普比率</li><li><strong>CML</strong>：最陡的 CAL，在市场组合处与有效前沿相切</li></ul></div>"
   },
   "ja": {
    "topic": "CAL と CML",
    "front": "資本配分線と資本市場線とは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>CAL</strong>：無リスク資産からリスク・ポートフォリオを通る直線。傾き = そのシャープ・レシオ</li><li><strong>CML</strong>：最も傾きの大きい CAL で、市場ポートフォリオで効率的フロンティアに接する</li></ul></div>"
   },
   "fr": {
    "topic": "CAL et CML",
    "front": "Que sont la droite d’allocation du capital et la droite de marché des capitaux ?",
    "back": "<div class=\"ans\"><ul><li><strong>CAL</strong> : droite partant de l’actif sans risque et passant par un portefeuille risqué ; pente = son ratio de Sharpe</li><li><strong>CML</strong> : la CAL la plus pentue, tangente à la frontière efficiente au portefeuille de marché</li></ul></div>"
   }
  },
  "pm6-ir": {
   "zh": {
    "topic": "信息比率",
    "front": "定义信息比率。事前和事后 IR 的用途有何不同？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_P-R_B}{\\sigma(R_P-R_B)}=\\frac{R_A}{\\sigma_A}$$</div><p>事前：选择管理人并确定主动风险的大小。事后：评价管理人的业绩。</p></div>",
    "gap": "夏普比率就是以无风险资产为基准的 IR。"
   },
   "ja": {
    "topic": "情報レシオ",
    "front": "情報レシオを定義せよ。事前と事後の IR は使い方がどう違うか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_P-R_B}{\\sigma(R_P-R_B)}=\\frac{R_A}{\\sigma_A}$$</div><p>事前：マネジャーの選定とアクティブ・リスクの大きさの決定。事後：マネジャーの成績評価。</p></div>",
    "gap": "シャープ・レシオは無リスク資産をベンチマークとした IR。"
   },
   "fr": {
    "topic": "Ratio d’information",
    "front": "Définissez le ratio d’information. En quoi l’usage de l’IR ex ante et ex post diffère-t-il ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_P-R_B}{\\sigma(R_P-R_B)}=\\frac{R_A}{\\sigma_A}$$</div><p>Ex ante : choisir les gérants et dimensionner le risque actif. Ex post : évaluer la performance des gérants.</p></div>",
    "gap": "Le ratio de Sharpe est l’IR avec l’actif sans risque comme référence."
   }
  },
  "pm6-ir-properties": {
   "zh": {
    "topic": "IR 与夏普比率",
    "front": "哪些变化不改变 IR，哪些会改变？夏普比率又如何表现？",
    "back": "<div class=\"ans\"><ul><li><strong>IR 不变</strong>：按比例调整所有主动权重的激进程度（无费用）；与基准混合</li><li><strong>IR 改变</strong>：按 \\(R_f\\) 加入现金或杠杆</li><li><strong>夏普比率</strong>：正好相反：不受现金或杠杆影响，受激进程度影响</li></ul></div>"
   },
   "ja": {
    "topic": "IR とシャープ・レシオ",
    "front": "IR を変えない変化と変える変化はどれか。シャープ・レシオはどう振る舞うか。",
    "back": "<div class=\"ans\"><ul><li><strong>IR は不変</strong>：すべてのアクティブ・ウェイトの積極度を比例的に変える（報酬なし）、ベンチマークと混ぜる</li><li><strong>IR は変わる</strong>：\\(R_f\\) で現金やレバレッジを加える</li><li><strong>シャープ・レシオ</strong>：その逆。現金やレバレッジでは変わらず、積極度で変わる</li></ul></div>"
   },
   "fr": {
    "topic": "IR et ratio de Sharpe",
    "front": "Quels changements laissent l’IR inchangé, et lesquels le modifient ? Comment se comporte le ratio de Sharpe ?",
    "back": "<div class=\"ans\"><ul><li><strong>IR inchangé</strong> : changer l’agressivité de toutes les pondérations actives dans la même proportion (sans frais) ; combiner avec l’indice de référence</li><li><strong>IR modifié</strong> : ajouter de la trésorerie ou du levier à \\(R_f\\)</li><li><strong>Ratio de Sharpe</strong> : l’inverse : inchangé par la trésorerie ou le levier, modifié par l’agressivité</li></ul></div>"
   }
  },
  "pm6-optimal": {
   "zh": {
    "topic": "最优主动风险",
    "front": "写出把主动组合与基准组合时可达到的最佳夏普比率和最优主动风险。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2$$</div><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{IR}}{\\text{SR}_B}\\,\\sigma_B$$</div><p>所以选择 <strong>IR 最高</strong>的管理人。</p></div>",
    "gap": "假设主动回报与基准不相关。"
   },
   "ja": {
    "topic": "最適アクティブ・リスク",
    "front": "アクティブ・ポートフォリオとベンチマークを組み合わせるときの、達成可能な最大のシャープ・レシオと最適アクティブ・リスクを示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2$$</div><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{IR}}{\\text{SR}_B}\\,\\sigma_B$$</div><p>したがって <strong>IR が最も高い</strong>マネジャーを選ぶ。</p></div>",
    "gap": "アクティブ・リターンがベンチマークと無相関であることを前提とする。"
   },
   "fr": {
    "topic": "Risque actif optimal",
    "front": "Écrivez le meilleur ratio de Sharpe atteignable et le risque actif optimal en combinant un portefeuille actif et l’indice de référence.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2$$</div><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{IR}}{\\text{SR}_B}\\,\\sigma_B$$</div><p>Choisissez donc le gérant au <strong>IR le plus élevé</strong>.</p></div>",
    "gap": "Suppose des rendements actifs non corrélés à l’indice de référence."
   }
  },
  "pm6-optimal-example": {
   "zh": {
    "topic": "最优主动风险例题",
    "front": "\\(\\text{SR}_B=0.40\\)，\\(\\sigma_B=18\\%\\)。某管理人 IR 为 0.25，主动风险 15%。求最优主动风险、对该管理人的权重和最佳夏普比率。",
    "back": "<div class=\"ans\"><p>\\(\\sigma_A^*=(0.25/0.40)\\times18\\%=11.25\\%\\)。</p><p>权重 \\(=11.25/15=75\\%\\) 配给管理人，25% 配给基准。</p><p>\\(\\text{SR}_P=\\sqrt{0.16+0.0625}=0.472\\)。</p></div>"
   },
   "ja": {
    "topic": "最適アクティブ・リスクの計算例",
    "front": "\\(\\text{SR}_B=0.40\\)、\\(\\sigma_B=18\\%\\)。マネジャーの IR は 0.25、アクティブ・リスクは 15%。最適アクティブ・リスク、マネジャーへのウェイト、最大のシャープ・レシオを求めよ。",
    "back": "<div class=\"ans\"><p>\\(\\sigma_A^*=(0.25/0.40)\\times18\\%=11.25\\%\\)。</p><p>ウェイト \\(=11.25/15=75\\%\\) をマネジャーに、25% をベンチマークに。</p><p>\\(\\text{SR}_P=\\sqrt{0.16+0.0625}=0.472\\)。</p></div>"
   },
   "fr": {
    "topic": "Exemple de risque actif optimal",
    "front": "\\(\\text{SR}_B=0.40\\), \\(\\sigma_B=18\\%\\). Un gérant a un IR de 0,25 et un risque actif de 15 %. Trouvez le risque actif optimal, le poids alloué au gérant et le meilleur ratio de Sharpe.",
    "back": "<div class=\"ans\"><p>\\(\\sigma_A^*=(0.25/0.40)\\times18\\%=11.25\\%\\).</p><p>Poids \\(=11.25/15=75\\%\\) chez le gérant, 25 % dans l’indice de référence.</p><p>\\(\\text{SR}_P=\\sqrt{0.16+0.0625}=0.472\\).</p></div>"
   }
  },
  "pm6-triangle": {
   "zh": {
    "topic": "相关性三角形",
    "front": "说出相关性三角形的三个顶点和三条边。",
    "back": "<div class=\"ans\"><ul><li>顶点：<strong>预测的</strong>主动回报 \\(\\mu_i\\)；<strong>主动权重</strong> \\(\\Delta w_i\\)；<strong>实现的</strong>主动回报</li><li>预测–实现：<strong>IC</strong>（信号质量）</li><li>预测–权重：<strong>TC</strong>（组合构建）</li><li>权重–实现：<strong>增加的价值</strong></li></ul></div>"
   },
   "ja": {
    "topic": "相関の三角形",
    "front": "相関の三角形の 3 つの頂点と 3 つの辺を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>頂点：<strong>予想</strong>アクティブ・リターン \\(\\mu_i\\)、<strong>アクティブ・ウェイト</strong> \\(\\Delta w_i\\)、<strong>実現</strong>アクティブ・リターン</li><li>予想–実現：<strong>IC</strong>（シグナルの質）</li><li>予想–ウェイト：<strong>TC</strong>（ポートフォリオ構築）</li><li>ウェイト–実現：<strong>付加価値</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Triangle des corrélations",
    "front": "Nommez les trois sommets et les trois côtés du triangle des corrélations.",
    "back": "<div class=\"ans\"><ul><li>Sommets : rendements actifs <strong>prévus</strong> \\(\\mu_i\\) ; <strong>pondérations actives</strong> \\(\\Delta w_i\\) ; rendements actifs <strong>réalisés</strong></li><li>Prévisions–réalisés : <strong>IC</strong> (qualité du signal)</li><li>Prévisions–pondérations : <strong>TC</strong> (construction du portefeuille)</li><li>Pondérations–réalisés : <strong>valeur ajoutée</strong></li></ul></div>"
   }
  },
  "pm6-ic": {
   "zh": {
    "topic": "信息系数",
    "front": "定义信息系数。它在事前和事后的符号是什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=\\rho\\left(\\frac{R_{A,i}}{\\sigma_i},\\frac{\\mu_i}{\\sigma_i}\\right)$$</div><p>预测与实现主动回报之间经风险加权的相关系数。事前：为正。事后：可正可负。</p></div>"
   },
   "ja": {
    "topic": "情報係数",
    "front": "情報係数を定義せよ。事前と事後での符号はどうか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=\\rho\\left(\\frac{R_{A,i}}{\\sigma_i},\\frac{\\mu_i}{\\sigma_i}\\right)$$</div><p>予想と実現アクティブ・リターンのリスク調整後の相関。事前：プラス。事後：プラスにもマイナスにもなる。</p></div>"
   },
   "fr": {
    "topic": "Coefficient d’information",
    "front": "Définissez le coefficient d’information. Quel est son signe ex ante et ex post ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=\\rho\\left(\\frac{R_{A,i}}{\\sigma_i},\\frac{\\mu_i}{\\sigma_i}\\right)$$</div><p>Une corrélation pondérée par le risque entre prévisions et rendements actifs réalisés. Ex ante : positif. Ex post : positif ou négatif.</p></div>"
   }
  },
  "pm6-tc": {
   "zh": {
    "topic": "转移系数",
    "front": "转移系数衡量什么？对无约束组合它是多少？",
    "back": "<div class=\"ans\"><p>经风险加权的预测与经风险加权的主动权重之间的相关系数：预测在多大程度上转化为权重，以及<strong>约束</strong>削减了多少增加的价值。</p><p>无约束：\\(\\text{TC}=1\\)。有约束（如只做多）：\\(\\text{TC}&lt;1\\)。</p></div>"
   },
   "ja": {
    "topic": "移転係数",
    "front": "移転係数は何を測るか。制約のないポートフォリオではいくらか。",
    "back": "<div class=\"ans\"><p>リスク調整後の予想とリスク調整後のアクティブ・ウェイトの相関：予想がどれだけウェイトに反映されるか、<strong>制約</strong>がどれだけ付加価値を削るか。</p><p>制約なし：\\(\\text{TC}=1\\)。制約あり（例：ロング・オンリー）：\\(\\text{TC}&lt;1\\)。</p></div>"
   },
   "fr": {
    "topic": "Coefficient de transfert",
    "front": "Que mesure le coefficient de transfert ? Que vaut-il pour un portefeuille sans contrainte ?",
    "back": "<div class=\"ans\"><p>La corrélation entre prévisions pondérées par le risque et pondérations actives pondérées par le risque : dans quelle mesure les prévisions deviennent des pondérations, et combien les <strong>contraintes</strong> réduisent la valeur ajoutée.</p><p>Sans contrainte : \\(\\text{TC}=1\\). Avec contraintes (p. ex. long only) : \\(\\text{TC}&lt;1\\).</p></div>"
   }
  },
  "pm6-breadth": {
   "zh": {
    "topic": "广度",
    "front": "定义广度并给出实用公式。求 20 个决策、\\(\\rho=0.25\\) 时的 BR。",
    "back": "<div class=\"ans\"><p>每年<strong>独立</strong>主动决策的数量。</p><div class=\"eq-block\">$$\\text{BR}=\\frac{N}{1+(N-1)\\rho}$$</div><p>\\(20/(1+19\\times0.25)=3.48\\)。</p></div>",
    "gap": "若有对冲（\\(\\rho&lt;0\\)），BR 可以超过 \\(N\\)。"
   },
   "ja": {
    "topic": "ブレス",
    "front": "ブレスを定義し、実務的な式を示せ。20 の判断で \\(\\rho=0.25\\) のとき BR を求めよ。",
    "back": "<div class=\"ans\"><p>1 年当たりの<strong>独立した</strong>アクティブな判断の数。</p><div class=\"eq-block\">$$\\text{BR}=\\frac{N}{1+(N-1)\\rho}$$</div><p>\\(20/(1+19\\times0.25)=3.48\\)。</p></div>",
    "gap": "ヘッジがある（\\(\\rho&lt;0\\)）と、BR は \\(N\\) を超えうる。"
   },
   "fr": {
    "topic": "Ampleur (breadth)",
    "front": "Définissez l’ampleur et donnez la formule pratique. Trouvez BR pour 20 décisions avec \\(\\rho=0.25\\).",
    "back": "<div class=\"ans\"><p>Le nombre de décisions actives <strong>indépendantes</strong> par an.</p><div class=\"eq-block\">$$\\text{BR}=\\frac{N}{1+(N-1)\\rho}$$</div><p>\\(20/(1+19\\times0.25)=3.48\\).</p></div>",
    "gap": "Avec des couvertures (\\(\\rho&lt;0\\)), BR peut dépasser \\(N\\)."
   }
  },
  "pm6-law": {
   "zh": {
    "topic": "基本定律",
    "front": "说明主动管理的基本定律（基础版和完整版），以及预期主动回报。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}^*=\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$\\text{IR}=\\text{TC}\\times\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$E(R_A)=\\text{IR}\\times\\sigma_A$$</div></div>"
   },
   "ja": {
    "topic": "アクティブ運用の基本法則",
    "front": "アクティブ運用の基本法則（基本形と完全形）と、期待アクティブ・リターンを示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}^*=\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$\\text{IR}=\\text{TC}\\times\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$E(R_A)=\\text{IR}\\times\\sigma_A$$</div></div>"
   },
   "fr": {
    "topic": "Loi fondamentale",
    "front": "Énoncez la loi fondamentale de la gestion active, version de base et complète, et le rendement actif attendu.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}^*=\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$\\text{IR}=\\text{TC}\\times\\text{IC}\\sqrt{\\text{BR}}$$</div><div class=\"eq-block\">$$E(R_A)=\\text{IR}\\times\\sigma_A$$</div></div>"
   }
  },
  "pm6-law-tc": {
   "zh": {
    "topic": "含 TC 的基本定律",
    "front": "有约束时，最优主动风险和最佳夏普比率是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{TC}\\times\\text{IR}^*}{\\text{SR}_B}\\,\\sigma_B$$</div><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+(\\text{TC}\\times\\text{IR}^*)^2$$</div><p>\\(\\text{IR}^*\\) 是基础定律得出的无约束 IR。</p></div>"
   },
   "ja": {
    "topic": "TC を含む基本法則",
    "front": "制約があるとき、最適アクティブ・リスクと最大のシャープ・レシオはどうなるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{TC}\\times\\text{IR}^*}{\\text{SR}_B}\\,\\sigma_B$$</div><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+(\\text{TC}\\times\\text{IR}^*)^2$$</div><p>\\(\\text{IR}^*\\) は基本形による制約なしの IR。</p></div>"
   },
   "fr": {
    "topic": "Loi fondamentale avec TC",
    "front": "Avec des contraintes, quels sont le risque actif optimal et le meilleur ratio de Sharpe ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_A^*=\\frac{\\text{TC}\\times\\text{IR}^*}{\\text{SR}_B}\\,\\sigma_B$$</div><div class=\"eq-block\">$$\\text{SR}_P^2=\\text{SR}_B^2+(\\text{TC}\\times\\text{IR}^*)^2$$</div><p>\\(\\text{IR}^*\\) est l’IR sans contrainte de la loi de base.</p></div>"
   }
  },
  "pm6-law-example": {
   "zh": {
    "topic": "基本定律例题",
    "front": "IC 0.05，BR 100，TC 0.6，主动风险 4%；\\(\\text{SR}_B=0.40\\)，\\(\\sigma_B=15\\%\\)。求 IR、\\(E(R_A)\\)、最优主动风险和最佳 SR。",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{IR}^*=0.05\\times10=0.50\\)；\\(\\text{IR}=0.6\\times0.50=0.30\\)</li><li>\\(E(R_A)=0.30\\times4\\%=1.2\\%\\)</li><li>\\(\\sigma_A^*=(0.30/0.40)\\times15\\%=11.25\\%\\)</li><li>\\(\\text{SR}_P=\\sqrt{0.16+0.09}=0.50\\)</li></ul></div>"
   },
   "ja": {
    "topic": "基本法則の計算例",
    "front": "IC 0.05、BR 100、TC 0.6、アクティブ・リスク 4%、\\(\\text{SR}_B=0.40\\)、\\(\\sigma_B=15\\%\\)。IR、\\(E(R_A)\\)、最適アクティブ・リスク、最大の SR を求めよ。",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{IR}^*=0.05\\times10=0.50\\)、\\(\\text{IR}=0.6\\times0.50=0.30\\)</li><li>\\(E(R_A)=0.30\\times4\\%=1.2\\%\\)</li><li>\\(\\sigma_A^*=(0.30/0.40)\\times15\\%=11.25\\%\\)</li><li>\\(\\text{SR}_P=\\sqrt{0.16+0.09}=0.50\\)</li></ul></div>"
   },
   "fr": {
    "topic": "Exemple de loi fondamentale",
    "front": "IC 0,05, BR 100, TC 0,6, risque actif 4 % ; \\(\\text{SR}_B=0.40\\), \\(\\sigma_B=15\\%\\). Trouvez l’IR, \\(E(R_A)\\), le risque actif optimal et le meilleur SR.",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{IR}^*=0.05\\times10=0.50\\) ; \\(\\text{IR}=0.6\\times0.50=0.30\\)</li><li>\\(E(R_A)=0.30\\times4\\%=1.2\\%\\)</li><li>\\(\\sigma_A^*=(0.30/0.40)\\times15\\%=11.25\\%\\)</li><li>\\(\\text{SR}_P=\\sqrt{0.16+0.09}=0.50\\)</li></ul></div>"
   }
  },
  "pm6-improve": {
   "zh": {
    "topic": "提高 IR",
    "front": "管理人如何提高 IR？广度方面有什么陷阱？",
    "back": "<div class=\"ans\"><ul><li><strong>TC</strong>：放松约束</li><li><strong>IC</strong>：更好的预测</li><li><strong>BR</strong>：更多独立的押注</li></ul><p>广度与 IC 此消彼长：只有当额外押注的 IC 仍然合理时才有帮助；更少但更好的押注可能带来更高的 IR。</p></div>"
   },
   "ja": {
    "topic": "IR の改善",
    "front": "マネジャーは IR をどう高められるか。ブレスの落とし穴は何か。",
    "back": "<div class=\"ans\"><ul><li><strong>TC</strong>：制約を緩める</li><li><strong>IC</strong>：よりよい予想</li><li><strong>BR</strong>：より多くの独立した賭け</li></ul><p>ブレスと IC はトレードオフ：追加の賭けが役立つのは IC が妥当な水準を保つ場合だけ。少数のよりよい賭けのほうが IR が高くなることもある。</p></div>"
   },
   "fr": {
    "topic": "Améliorer l’IR",
    "front": "Comment un gérant peut-il augmenter son IR, et quel est le piège de l’ampleur ?",
    "back": "<div class=\"ans\"><ul><li><strong>TC</strong> : assouplir les contraintes</li><li><strong>IC</strong> : de meilleures prévisions</li><li><strong>BR</strong> : plus de paris indépendants</li></ul><p>Ampleur et IC s’arbitrent : des paris supplémentaires n’aident que si leur IC reste raisonnable ; moins de paris, mais meilleurs, peuvent donner un IR plus élevé.</p></div>"
   }
  },
  "pm6-timing": {
   "zh": {
    "topic": "择时的 IC",
    "front": "择时者的 IC 如何衡量？某择时者正确率 55%，每年 4 次独立判断：求 IC 和 IR。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=2(\\%\\text{ correct})-1$$</div><p>\\(\\text{IC}=0.10\\)；\\(\\text{IR}=0.10\\sqrt4=0.20\\)。</p></div>",
    "gap": "正确率 50% 意味着 IC = 0：没有能力。"
   },
   "ja": {
    "topic": "マーケット・タイミングの IC",
    "front": "マーケット・タイマーの IC はどう測るか。正答率 55%、年 4 回の独立した判断：IC と IR を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=2(\\%\\text{ correct})-1$$</div><p>\\(\\text{IC}=0.10\\)、\\(\\text{IR}=0.10\\sqrt4=0.20\\)。</p></div>",
    "gap": "正答率 50% は IC = 0：スキルなし。"
   },
   "fr": {
    "topic": "IC du market timing",
    "front": "Comment mesure-t-on l’IC d’un market timer ? Un timer a raison 55 % du temps avec 4 décisions indépendantes par an : trouvez l’IC et l’IR.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IC}=2(\\%\\text{ correct})-1$$</div><p>\\(\\text{IC}=0.10\\) ; \\(\\text{IR}=0.10\\sqrt4=0.20\\).</p></div>",
    "gap": "Avoir raison 50 % du temps signifie IC = 0 : aucune compétence."
   }
  },
  "pm6-ex-post": {
   "zh": {
    "topic": "事后结果与局限",
    "front": "什么驱动事后主动回报？预测能解释其方差的多大比例？基本定律有哪些局限？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_A\\mid\\text{IC}_R)=\\text{TC}\\,\\text{IC}_R\\sqrt{\\text{BR}}\\,\\sigma_A$$</div><p>实现的 IC 解释了方差的 \\(\\text{TC}^2\\)；\\(1-\\text{TC}^2\\) 是噪声。</p><p>局限：IC 和真正的独立性（广度）无法精确估计；假设各决策的 IC 相同。</p></div>"
   },
   "ja": {
    "topic": "事後の結果と限界",
    "front": "事後のアクティブ・リターンを左右するものは何か。予想はその分散のどれだけを説明するか。基本法則の限界は何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_A\\mid\\text{IC}_R)=\\text{TC}\\,\\text{IC}_R\\sqrt{\\text{BR}}\\,\\sigma_A$$</div><p>実現 IC が分散の \\(\\text{TC}^2\\) を説明し、\\(1-\\text{TC}^2\\) はノイズ。</p><p>限界：IC と真の独立性（ブレス）は正確に推定できない。すべての判断で IC が等しいと仮定している。</p></div>"
   },
   "fr": {
    "topic": "Ex post et limites",
    "front": "Qu’est-ce qui détermine les rendements actifs ex post ? Quelle part de leur variance les prévisions expliquent-elles ? Quelles sont les limites de la loi fondamentale ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_A\\mid\\text{IC}_R)=\\text{TC}\\,\\text{IC}_R\\sqrt{\\text{BR}}\\,\\sigma_A$$</div><p>L’IC réalisé explique \\(\\text{TC}^2\\) de la variance ; \\(1-\\text{TC}^2\\) est du bruit.</p><p>Limites : l’IC et la véritable indépendance (ampleur) ne s’estiment pas avec précision ; l’IC est supposé identique pour toutes les décisions.</p></div>"
   }
  }
 }
});
