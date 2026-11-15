deckI18n({
 "source": {
  "zh": "CFA 二级 固定收益 · M4 信用分析模型 · 单元复习",
  "ja": "CFA レベル II 債券 · M4 信用分析モデル · 単元の復習",
  "fr": "CFA niveau II Titres à revenu fixe · M4 Modèles d’analyse du crédit · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "fi4-building-blocks": {
   "zh": {
    "topic": "信用风险的基本组成",
    "front": "对于在日期 \\(t\\) 发生的违约，定义预期敞口、回收率和违约损失。",
    "back": "<div class=\"ans\"><ul><li><strong>预期敞口</strong> \\(\\text{EE}_t\\)：债券在 \\(t\\) 时的价值（剩余现金流按无风险利率折现）<strong>加上 \\(t\\) 时到期的票息</strong></li><li><strong>回收率</strong> RR：敞口中可回收的比例；回收额 \\(=\\text{EE}_t\\times\\text{RR}\\)</li><li><strong>LGD</strong>：未能回收的部分</li></ul><div class=\"eq-block\">$$\\text{LGD}_t=\\text{EE}_t\\times(1-\\text{RR})$$</div></div>",
    "gap": "不要忘了把违约日到期的票息计入敞口。"
   },
   "ja": {
    "topic": "信用リスクの構成要素",
    "front": "時点 \\(t\\) のデフォルトについて、期待エクスポージャー、回収率、デフォルト時損失を定義せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>期待エクスポージャー</strong> \\(\\text{EE}_t\\)：\\(t\\) 時点の債券の価値（残りのキャッシュフローを無リスク金利で評価）<strong>に \\(t\\) 時点に支払期日のクーポンを加えたもの</strong></li><li><strong>回収率</strong> RR：エクスポージャーのうち回収される割合。回収額 \\(=\\text{EE}_t\\times\\text{RR}\\)</li><li><strong>LGD</strong>：回収されない部分</li></ul><div class=\"eq-block\">$$\\text{LGD}_t=\\text{EE}_t\\times(1-\\text{RR})$$</div></div>",
    "gap": "デフォルト日に支払期日のクーポンをエクスポージャーに含めるのを忘れない。"
   },
   "fr": {
    "topic": "Briques du risque de crédit",
    "front": "Définissez l’exposition attendue, le taux de recouvrement et la perte en cas de défaut pour un défaut à la date \\(t\\).",
    "back": "<div class=\"ans\"><ul><li><strong>Exposition attendue</strong> \\(\\text{EE}_t\\) : la valeur de l’obligation en \\(t\\) (flux restants au taux sans risque) <strong>plus le coupon dû en \\(t\\)</strong></li><li><strong>Taux de recouvrement</strong> RR : part de l’exposition récupérée ; recouvrement \\(=\\text{EE}_t\\times\\text{RR}\\)</li><li><strong>LGD</strong> : la part non récupérée</li></ul><div class=\"eq-block\">$$\\text{LGD}_t=\\text{EE}_t\\times(1-\\text{RR})$$</div></div>",
    "gap": "N’oubliez pas le coupon dû à la date de défaut dans l’exposition."
   }
  },
  "fi4-cva": {
   "zh": {
    "topic": "预期损失与 CVA",
    "front": "定义预期损失、CVA 和有风险债券的公允价值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{EL}_t=\\text{POD}_t\\times\\text{LGD}_t$$</div><div class=\"eq-block\">$$\\text{CVA}=\\sum_{t=1}^{N}\\text{EL}_t\\times\\text{DF}_t$$</div><div class=\"eq-block\">$$\\text{Fair value}=V_{\\text{ND}}-\\text{CVA}$$</div><p>CVA 是信用风险的现值；\\(V_{\\text{ND}}\\) 是按无风险利率计算、无违约时的价值。</p></div>"
   },
   "ja": {
    "topic": "期待損失と CVA",
    "front": "期待損失、CVA、リスクのある債券の公正価値を定義せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{EL}_t=\\text{POD}_t\\times\\text{LGD}_t$$</div><div class=\"eq-block\">$$\\text{CVA}=\\sum_{t=1}^{N}\\text{EL}_t\\times\\text{DF}_t$$</div><div class=\"eq-block\">$$\\text{Fair value}=V_{\\text{ND}}-\\text{CVA}$$</div><p>CVA は信用リスクの現在価値。\\(V_{\\text{ND}}\\) は無リスク金利で評価したデフォルトなしの価値。</p></div>"
   },
   "fr": {
    "topic": "Perte attendue et CVA",
    "front": "Définissez la perte attendue, la CVA et la juste valeur d’une obligation risquée.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{EL}_t=\\text{POD}_t\\times\\text{LGD}_t$$</div><div class=\"eq-block\">$$\\text{CVA}=\\sum_{t=1}^{N}\\text{EL}_t\\times\\text{DF}_t$$</div><div class=\"eq-block\">$$\\text{Fair value}=V_{\\text{ND}}-\\text{CVA}$$</div><p>La CVA est la valeur actuelle du risque de crédit ; \\(V_{\\text{ND}}\\) est la valeur sans défaut, aux taux sans risque.</p></div>"
   }
  },
  "fi4-num-denom": {
   "zh": {
    "topic": "为信用风险定价 · 两种方法",
    "front": "把信用风险纳入债券价格有哪两种方法？",
    "back": "<div class=\"ans\"><ul><li><strong>分子法</strong>：扣除违约损失后的预期现金流，按<strong>无风险</strong>利率折现（CVA 方法）</li><li><strong>分母法</strong>：承诺的现金流，按无风险利率<strong>加信用利差</strong>折现</li></ul></div>"
   },
   "ja": {
    "topic": "信用リスクの価格付け · 2 つの方法",
    "front": "信用リスクを債券価格に織り込む 2 つの方法は何か。",
    "back": "<div class=\"ans\"><ul><li><strong>分子</strong>：デフォルト損失控除後の期待キャッシュフローを<strong>無リスク</strong>金利で割り引く（CVA アプローチ）</li><li><strong>分母</strong>：約定キャッシュフローを無リスク金利<strong>＋信用スプレッド</strong>で割り引く</li></ul></div>"
   },
   "fr": {
    "topic": "Intégrer le risque de crédit · deux façons",
    "front": "Quelles sont les deux façons d’intégrer le risque de crédit dans le prix d’une obligation ?",
    "back": "<div class=\"ans\"><ul><li><strong>Numérateur</strong> : flux attendus après pertes de défaut, actualisés au taux <strong>sans risque</strong> (approche CVA)</li><li><strong>Dénominateur</strong> : flux promis, actualisés au taux sans risque <strong>plus un spread de crédit</strong></li></ul></div>"
   }
  },
  "fi4-risk-neutral": {
   "zh": {
    "topic": "风险中性 POD",
    "front": "用于定价的 POD 比实际违约率高还是低？为什么？",
    "back": "<div class=\"ans\"><p><strong>更高</strong>。定价用的 POD 是从市场价格隐含出来的<strong>风险中性</strong>概率。价格还补偿了风险厌恶、流动性和损失的不确定性，风险中性 POD 把这些都吸收了。</p></div>",
    "gap": "历史违约率会低估市场价格隐含的 POD。"
   },
   "ja": {
    "topic": "リスク中立 POD",
    "front": "価格付けに使う POD は実際のデフォルト率より高いか低いか。なぜか。",
    "back": "<div class=\"ans\"><p><strong>高い</strong>。価格付けの POD は市場価格から導かれる<strong>リスク中立</strong>確率。価格はリスク回避、流動性、損失の不確実性も補償しており、リスク中立 POD はそれらすべてを吸収する。</p></div>",
    "gap": "過去のデフォルト率は市場価格が示す POD を過小評価する。"
   },
   "fr": {
    "topic": "POD risque-neutre",
    "front": "Les POD utilisées pour la valorisation sont-elles plus élevées ou plus faibles que les taux de défaut réels ? Pourquoi ?",
    "back": "<div class=\"ans\"><p><strong>Plus élevées</strong>. Les POD de valorisation sont <strong>risque-neutres</strong>, implicites dans les prix de marché. Le prix rémunère aussi l’aversion au risque, la liquidité et l’incertitude sur la perte, et la POD risque-neutre absorbe tout cela.</p></div>",
    "gap": "Les taux de défaut historiques sous-estiment les POD implicites dans les prix de marché."
   }
  },
  "fi4-hazard": {
   "zh": {
    "topic": "风险率、POD 与 POS",
    "front": "什么是风险率？在风险率恒定时，写出 \\(\\text{POD}_t\\)、\\(\\text{POS}_t\\) 和累计 POD。",
    "back": "<div class=\"ans\"><p>在<strong>此前未违约的条件下</strong>某一日期违约的概率：条件 POD。</p><div class=\"eq-block\">$$\\text{POD}_t=(1-\\text{HR})^{t-1}\\,\\text{HR}$$</div><div class=\"eq-block\">$$\\text{POS}_t=(1-\\text{HR})^{t}$$</div><div class=\"eq-block\">$$\\textstyle\\sum_{i\\le t}\\text{POD}_i=1-\\text{POS}_t$$</div></div>",
    "gap": "风险率是条件概率；POD<sub>t</sub> 和 POS<sub>t</sub> 是无条件概率。"
   },
   "ja": {
    "topic": "ハザード・レート、POD、POS",
    "front": "ハザード・レートとは何か。ハザード・レートが一定のとき、\\(\\text{POD}_t\\)、\\(\\text{POS}_t\\)、累積 POD を示せ。",
    "back": "<div class=\"ans\"><p><strong>それ以前にデフォルトしていないことを条件とする</strong>、ある時点でのデフォルト確率：条件付き POD。</p><div class=\"eq-block\">$$\\text{POD}_t=(1-\\text{HR})^{t-1}\\,\\text{HR}$$</div><div class=\"eq-block\">$$\\text{POS}_t=(1-\\text{HR})^{t}$$</div><div class=\"eq-block\">$$\\textstyle\\sum_{i\\le t}\\text{POD}_i=1-\\text{POS}_t$$</div></div>",
    "gap": "ハザード・レートは条件付き。POD<sub>t</sub> と POS<sub>t</sub> は無条件。"
   },
   "fr": {
    "topic": "Taux de hasard, POD et POS",
    "front": "Qu’est-ce que le taux de hasard ? Avec un taux de hasard constant, écrivez \\(\\text{POD}_t\\), \\(\\text{POS}_t\\) et la POD cumulée.",
    "back": "<div class=\"ans\"><p>La probabilité de défaut à une date <strong>sachant qu’il n’y a pas eu de défaut avant</strong> : une POD conditionnelle.</p><div class=\"eq-block\">$$\\text{POD}_t=(1-\\text{HR})^{t-1}\\,\\text{HR}$$</div><div class=\"eq-block\">$$\\text{POS}_t=(1-\\text{HR})^{t}$$</div><div class=\"eq-block\">$$\\textstyle\\sum_{i\\le t}\\text{POD}_i=1-\\text{POS}_t$$</div></div>",
    "gap": "Le taux de hasard est conditionnel ; POD<sub>t</sub> et POS<sub>t</sub> sont inconditionnelles."
   }
  },
  "fi4-hazard-example": {
   "zh": {
    "topic": "风险率例题",
    "front": "一只债券的风险率为 2%。求第 1–3 年每年的 POD、3 年 POS 和累计 POD。",
    "back": "<div class=\"ans\"><ul><li>POD：2%，\\(0.98\\times2\\%=1.96\\%\\)，\\(0.98^2\\times2\\%=1.9208\\%\\)</li><li>\\(\\text{POS}_3=0.98^3=94.1192\\%\\)</li><li>累计 POD \\(=5.8808\\%=1-94.1192\\%\\)</li></ul></div>",
    "gap": "低于 \\(3\\times2\\%=6\\%\\)：债券只能违约一次，所以每年只适用于仍存续的债券。"
   },
   "ja": {
    "topic": "ハザード・レートの計算例",
    "front": "債券のハザード・レートは 2%。1–3 年目の各年の POD、3 年 POS、累積 POD を求めよ。",
    "back": "<div class=\"ans\"><ul><li>POD：2%、\\(0.98\\times2\\%=1.96\\%\\)、\\(0.98^2\\times2\\%=1.9208\\%\\)</li><li>\\(\\text{POS}_3=0.98^3=94.1192\\%\\)</li><li>累積 POD \\(=5.8808\\%=1-94.1192\\%\\)</li></ul></div>",
    "gap": "\\(3\\times2\\%=6\\%\\) を下回る：債券がデフォルトするのは 1 回だけなので、各年の確率は存続している債券にしか適用されない。"
   },
   "fr": {
    "topic": "Exemple de taux de hasard",
    "front": "Le taux de hasard d’une obligation est de 2 %. Trouvez la POD de chacune des années 1–3, la POS à 3 ans et la POD cumulée.",
    "back": "<div class=\"ans\"><ul><li>POD : 2 %, \\(0.98\\times2\\%=1.96\\%\\), \\(0.98^2\\times2\\%=1.9208\\%\\)</li><li>\\(\\text{POS}_3=0.98^3=94.1192\\%\\)</li><li>POD cumulée \\(=5.8808\\%=1-94.1192\\%\\)</li></ul></div>",
    "gap": "Inférieure à \\(3\\times2\\%=6\\%\\) : une obligation ne fait défaut qu’une fois, chaque année ne s’applique donc qu’aux obligations encore en vie."
   }
  },
  "fi4-exposure": {
   "zh": {
    "topic": "计算敞口",
    "front": "求第 1 期的敞口：(a) 在平坦 3% 曲线上的 5 年期零息债券（面值 100），(b) 在平坦 2.5% 曲线上的 3 年期 5% 年付息债券。",
    "back": "<div class=\"ans\"><ul><li>(a) \\(100/1.03^{4}=88.85\\)</li><li>(b) 到期票息加上剩余部分的价值：</li></ul><div class=\"eq-block\">$$\\begin{aligned}\\text{EE}_1&=5+\\frac{5}{1.025}+\\frac{105}{1.025^2}\\\\&=109.819\\end{aligned}$$</div></div>"
   },
   "ja": {
    "topic": "エクスポージャーの計算",
    "front": "時点 1 のエクスポージャーを求めよ：(a) フラット 3% カーブ上の 5 年ゼロ（額面 100）、(b) フラット 2.5% カーブ上の 3 年、年 5% クーポン債。",
    "back": "<div class=\"ans\"><ul><li>(a) \\(100/1.03^{4}=88.85\\)</li><li>(b) 支払期日のクーポンに残りの価値を加える：</li></ul><div class=\"eq-block\">$$\\begin{aligned}\\text{EE}_1&=5+\\frac{5}{1.025}+\\frac{105}{1.025^2}\\\\&=109.819\\end{aligned}$$</div></div>"
   },
   "fr": {
    "topic": "Calculer l’exposition",
    "front": "Trouvez l’exposition en date 1 pour (a) un zéro à 5 ans (nominal 100) sur une courbe plate à 3 %, et (b) une obligation à 3 ans à coupon annuel de 5 % sur une courbe plate à 2,5 %.",
    "back": "<div class=\"ans\"><ul><li>(a) \\(100/1.03^{4}=88.85\\)</li><li>(b) le coupon dû plus la valeur du reste :</li></ul><div class=\"eq-block\">$$\\begin{aligned}\\text{EE}_1&=5+\\frac{5}{1.025}+\\frac{105}{1.025^2}\\\\&=109.819\\end{aligned}$$</div></div>"
   }
  },
  "fi4-zero-example": {
   "zh": {
    "topic": "有风险零息债券的估值",
    "front": "一只 5 年期零息债券（面值 100），政府曲线平坦为 3%，风险率 1.25%，回收率 40%。CVA 为 3.155。求公允价值、YTM 和信用利差。",
    "back": "<div class=\"ans\"><p>\\(V_{\\text{ND}}=100/1.03^5=86.261\\)，所以公允价值 \\(=86.261-3.155=83.106\\)。</p><div class=\"eq-block\">$$\\begin{aligned}\\text{YTM}&=\\left(\\tfrac{100}{83.106}\\right)^{1/5}-1\\\\&=3.77\\%\\end{aligned}$$</div><p>利差 \\(=3.77\\%-3.00\\%=\\) <strong>77 bp</strong>。</p></div>"
   },
   "ja": {
    "topic": "リスクのあるゼロの評価",
    "front": "5 年ゼロ（額面 100）、国債カーブはフラット 3%、ハザード・レート 1.25%、回収率 40%。CVA は 3.155。公正価値、YTM、信用スプレッドを求めよ。",
    "back": "<div class=\"ans\"><p>\\(V_{\\text{ND}}=100/1.03^5=86.261\\) なので、公正価値 \\(=86.261-3.155=83.106\\)。</p><div class=\"eq-block\">$$\\begin{aligned}\\text{YTM}&=\\left(\\tfrac{100}{83.106}\\right)^{1/5}-1\\\\&=3.77\\%\\end{aligned}$$</div><p>スプレッド \\(=3.77\\%-3.00\\%=\\) <strong>77 bp</strong>。</p></div>"
   },
   "fr": {
    "topic": "Évaluer un zéro risqué",
    "front": "Un zéro à 5 ans (nominal 100), courbe d’État plate à 3 %, taux de hasard 1,25 %, recouvrement 40 %. La CVA vaut 3,155. Trouvez la juste valeur, le YTM et le spread de crédit.",
    "back": "<div class=\"ans\"><p>\\(V_{\\text{ND}}=100/1.03^5=86.261\\), donc juste valeur \\(=86.261-3.155=83.106\\).</p><div class=\"eq-block\">$$\\begin{aligned}\\text{YTM}&=\\left(\\tfrac{100}{83.106}\\right)^{1/5}-1\\\\&=3.77\\%\\end{aligned}$$</div><p>Spread \\(=3.77\\%-3.00\\%=\\) <strong>77 pb</strong>.</p></div>"
   }
  },
  "fi4-spread-approx": {
   "zh": {
    "topic": "利差近似",
    "front": "信用利差的快速近似是什么？用 HR = 1.25%、RR = 40% 的零息债券验证。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Credit spread}\\approx\\text{POD}\\times\\text{LGD}$$</div><p>\\(1.25\\%\\times60\\%=0.75\\%\\)，接近精确值 77 bp。</p></div>"
   },
   "ja": {
    "topic": "スプレッドの近似",
    "front": "信用スプレッドの簡便な近似は何か。HR = 1.25%、RR = 40% のゼロで確かめよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Credit spread}\\approx\\text{POD}\\times\\text{LGD}$$</div><p>\\(1.25\\%\\times60\\%=0.75\\%\\) で、厳密な 77 bp に近い。</p></div>"
   },
   "fr": {
    "topic": "Approximation du spread",
    "front": "Quelle est l’approximation rapide d’un spread de crédit ? Vérifiez-la sur le zéro avec HR = 1,25 % et RR = 40 %.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Credit spread}\\approx\\text{POD}\\times\\text{LGD}$$</div><p>\\(1.25\\%\\times60\\%=0.75\\%\\), proche des 77 pb exacts.</p></div>"
   }
  },
  "fi4-coupon-example": {
   "zh": {
    "topic": "贵还是便宜",
    "front": "一只 3 年期 5% 债券交易价 104。政府曲线平坦为 2.5%，风险率 1.5%，回收率 40%；CVA 为 2.722。债券被高估还是低估，差多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{ND}}&=\\tfrac{5}{1.025}+\\tfrac{5}{1.025^2}+\\tfrac{105}{1.025^3}\\\\&=107.140\\end{aligned}$$</div><p>公允价值 \\(=107.140-2.722=104.418\\) &gt; 104：每 100 面值<strong>被低估 0.418</strong>。</p></div>"
   },
   "ja": {
    "topic": "割高か割安か",
    "front": "3 年 5% 債の価格は 104。国債カーブはフラット 2.5%、ハザード・レート 1.5%、回収率 40%、CVA は 2.722。債券は割高か割安か、いくらか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{ND}}&=\\tfrac{5}{1.025}+\\tfrac{5}{1.025^2}+\\tfrac{105}{1.025^3}\\\\&=107.140\\end{aligned}$$</div><p>公正価値 \\(=107.140-2.722=104.418\\) &gt; 104：額面 100 当たり <strong>0.418 割安</strong>。</p></div>"
   },
   "fr": {
    "topic": "Cher ou bon marché",
    "front": "Une obligation à 3 ans à 5 % cote 104. Courbe d’État plate à 2,5 %, taux de hasard 1,5 %, recouvrement 40 % ; la CVA vaut 2,722. L’obligation est-elle sur- ou sous-évaluée, et de combien ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{ND}}&=\\tfrac{5}{1.025}+\\tfrac{5}{1.025^2}+\\tfrac{105}{1.025^3}\\\\&=107.140\\end{aligned}$$</div><p>Juste valeur \\(=107.140-2.722=104.418\\) &gt; 104 : <strong>sous-évaluée de 0,418</strong> pour 100 de nominal.</p></div>"
   }
  },
  "fi4-scenario-returns": {
   "zh": {
    "topic": "各情景下的回报率",
    "front": "上述债券以 104 买入。第 1–3 期的回收额分别为 43.927、42.976 和 42。无违约及在各日期违约时的回报率分别是多少？",
    "back": "<div class=\"ans\"><ul><li>无违约（95.57%）：YTM <strong>3.57%</strong></li><li>第 1 期违约（1.50%）：\\(43.927/104-1=-57.76\\%\\)</li><li>第 2 期违约（1.48%）：5、42.976 的 IRR：\\(-33.27\\%\\)</li><li>第 3 期违约（1.46%）：5、5、42 的 IRR：\\(-22.23\\%\\)</li></ul></div>",
    "gap": "承诺的 3.57% 收益率只有在无违约时才能获得：它高估了预期回报。"
   },
   "ja": {
    "topic": "シナリオ別のリターン",
    "front": "上の債券を 104 で買う。時点 1–3 の回収額は 43.927、42.976、42。デフォルトなしの場合と、各時点でデフォルトした場合のリターンは。",
    "back": "<div class=\"ans\"><ul><li>デフォルトなし（95.57%）：YTM <strong>3.57%</strong></li><li>時点 1 でデフォルト（1.50%）：\\(43.927/104-1=-57.76\\%\\)</li><li>時点 2 でデフォルト（1.48%）：5、42.976 の IRR：\\(-33.27\\%\\)</li><li>時点 3 でデフォルト（1.46%）：5、5、42 の IRR：\\(-22.23\\%\\)</li></ul></div>",
    "gap": "約定利回り 3.57% が得られるのはデフォルトなしの場合だけ：期待リターンを過大に示す。"
   },
   "fr": {
    "topic": "Rendements par scénario",
    "front": "L’obligation ci-dessus est achetée à 104. Les recouvrements sont de 43,927, 42,976 et 42 aux dates 1–3. Quels sont les rendements sans défaut et avec défaut à chaque date ?",
    "back": "<div class=\"ans\"><ul><li>Sans défaut (95,57 %) : YTM <strong>3,57 %</strong></li><li>Défaut en 1 (1,50 %) : \\(43.927/104-1=-57.76\\%\\)</li><li>Défaut en 2 (1,48 %) : TRI de 5, 42,976 : \\(-33.27\\%\\)</li><li>Défaut en 3 (1,46 %) : TRI de 5, 5, 42 : \\(-22.23\\%\\)</li></ul></div>",
    "gap": "Le rendement promis de 3,57 % n’est obtenu que sans défaut : il surestime le rendement attendu."
   }
  },
  "fi4-yield-parts": {
   "zh": {
    "topic": "收益率的组成",
    "front": "把有风险债券的收益率分为两部分。每部分补偿什么？",
    "back": "<div class=\"ans\"><ul><li><strong>基准收益率</strong>：预期实际利率、预期通胀和风险厌恶（对两者的不确定性）</li><li><strong>利差</strong>：预期损失（POD、LGD）、流动性、税收和风险厌恶（对违约损失的不确定性）</li></ul></div>",
    "gap": "风险厌恶在两部分中都出现，针对的是不同的不确定性。"
   },
   "ja": {
    "topic": "利回りの構成要素",
    "front": "リスクのある債券の利回りを 2 つの部分に分けよ。それぞれ何を補償するか。",
    "back": "<div class=\"ans\"><ul><li><strong>ベンチマーク利回り</strong>：期待実質金利、期待インフレ、リスク回避（両者の不確実性）</li><li><strong>スプレッド</strong>：期待損失（POD、LGD）、流動性、税、リスク回避（デフォルト損失の不確実性）</li></ul></div>",
    "gap": "リスク回避は両方の部分に現れるが、対象となる不確実性が違う。"
   },
   "fr": {
    "topic": "Composantes d’un rendement",
    "front": "Décomposez le rendement d’une obligation risquée en deux parties. Que rémunère chacune ?",
    "back": "<div class=\"ans\"><ul><li><strong>Rendement de référence</strong> : taux réel attendu, inflation attendue et aversion au risque (incertitude sur les deux)</li><li><strong>Spread</strong> : perte attendue (POD, LGD), liquidité, fiscalité et aversion au risque (incertitude sur la perte de défaut)</li></ul></div>",
    "gap": "L’aversion au risque apparaît dans les deux parties, pour des incertitudes différentes."
   }
  },
  "fi4-spread-drivers": {
   "zh": {
    "topic": "信用利差的驱动因素",
    "front": "说出信用利差的四个关键驱动因素。",
    "back": "<div class=\"ans\"><ul><li><strong>信用质量、信用周期</strong>：经济下行提高 POD、降低回收率，使利差扩大（低评级最明显）</li><li><strong>金融状况</strong>：状况收紧（股市下跌、波动率上升）使利差扩大</li><li><strong>市场供求</strong>：发行量大或需求弱使利差扩大，尤其是高收益债</li><li><strong>公司价值模型</strong>：资产越接近债务（价值较低、杠杆较高、资产波动较大）→ POD 越高 → 利差越宽</li></ul></div>"
   },
   "ja": {
    "topic": "信用スプレッドの要因",
    "front": "信用スプレッドの主要な要因を 4 つ挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>信用の質、信用サイクル</strong>：景気後退は POD を上げ回収率を下げ、スプレッドを拡大させる（低格付ほど大きい）</li><li><strong>金融環境</strong>：環境の引き締まり（株価下落、ボラティリティ上昇）でスプレッドは拡大</li><li><strong>市場の需給</strong>：大量の発行や弱い需要でスプレッドは拡大。特にハイイールド</li><li><strong>企業価値モデル</strong>：資産が負債に近い（価値が低い、レバレッジが高い、資産の変動が大きい）→ POD が高い → スプレッドが広い</li></ul></div>"
   },
   "fr": {
    "topic": "Moteurs des spreads de crédit",
    "front": "Citez quatre moteurs clés des spreads de crédit.",
    "back": "<div class=\"ans\"><ul><li><strong>Qualité de crédit, cycle du crédit</strong> : les ralentissements augmentent les POD et réduisent les recouvrements, élargissant les spreads (surtout pour les faibles notations)</li><li><strong>Conditions financières</strong> : des conditions plus tendues (actions en baisse, volatilité en hausse) élargissent les spreads</li><li><strong>Offre et demande</strong> : une forte émission ou une demande faible élargit les spreads, surtout en high yield</li><li><strong>Modèle de valeur de la société</strong> : actifs plus proches de la dette (valeur plus faible, levier plus élevé, actifs plus volatils) → POD plus élevée → spread plus large</li></ul></div>"
   }
  },
  "fi4-abs": {
   "zh": {
    "topic": "证券化债务",
    "front": "ABS 会违约吗？哪四个特征驱动证券化债务的信用分析？",
    "back": "<div class=\"ans\"><p>ABS 本身不会违约，但当 SPE 资产池发生违约时会损失价值。</p><ul><li><strong>颗粒度</strong>：大量小额贷款可用统计方法建模；少数大额贷款需要逐笔分析</li><li><strong>同质性</strong>：资产相似，可用同一模型</li><li><strong>服务商</strong>：催收质量和过往记录</li><li><strong>结构</strong>：分层和信用增级决定谁先吸收损失</li></ul></div>"
   },
   "ja": {
    "topic": "証券化債務",
    "front": "ABS はデフォルトするか。証券化債務の信用分析を左右する 4 つの特徴は何か。",
    "back": "<div class=\"ans\"><p>ABS 自体はデフォルトしないが、SPE の資産プールでデフォルトが起きると価値を失う。</p><ul><li><strong>粒度</strong>：多数の小口ローンは統計的にモデル化できる。少数の大口ローンは個別分析が必要</li><li><strong>同質性</strong>：資産が似ていれば共通のモデルを使える</li><li><strong>サービサー</strong>：回収の質と実績</li><li><strong>ストラクチャー</strong>：トランチングと信用補完で、誰が先に損失を負うかが決まる</li></ul></div>"
   },
   "fr": {
    "topic": "Dette titrisée",
    "front": "Les ABS font-ils défaut ? Quelles quatre caractéristiques guident l’analyse crédit de la dette titrisée ?",
    "back": "<div class=\"ans\"><p>Les ABS ne font pas défaut en tant que tels, mais perdent de la valeur quand le portefeuille d’actifs de la SPE subit des défauts.</p><ul><li><strong>Granularité</strong> : de nombreux petits prêts se modélisent statistiquement ; quelques gros prêts exigent une analyse prêt par prêt</li><li><strong>Homogénéité</strong> : des actifs similaires permettent un modèle commun</li><li><strong>Gestionnaire (servicer)</strong> : qualité du recouvrement et historique</li><li><strong>Structure</strong> : le découpage en tranches et le rehaussement de crédit décident qui absorbe les pertes en premier</li></ul></div>"
   }
  },
  "fi4-covered": {
   "zh": {
    "topic": "担保债券",
    "front": "什么是担保债券？为什么其信用风险低于 ABS？",
    "back": "<div class=\"ans\"><p>一种由隔离的<strong>担保池</strong>（如抵押贷款）支持的银行优先债券，担保池保留在银行资产负债表上。</p><ul><li><strong>双重追索</strong>：对担保池和银行其他资产都有求偿权</li><li><strong>动态资产池</strong>：银行必须替换不良资产</li></ul></div>"
   },
   "ja": {
    "topic": "カバード・ボンド",
    "front": "カバード・ボンドとは何か。なぜその信用リスクは ABS より低いのか。",
    "back": "<div class=\"ans\"><p>分別管理された<strong>カバー・プール</strong>（例：住宅ローン）に裏付けられた銀行のシニア債で、プールは銀行の貸借対照表に残る。</p><ul><li><strong>二重の遡求</strong>：カバー・プールと銀行の他の資産の両方に請求権</li><li><strong>動的なプール</strong>：銀行は不良資産を入れ替えなければならない</li></ul></div>"
   },
   "fr": {
    "topic": "Obligations sécurisées",
    "front": "Qu’est-ce qu’une obligation sécurisée (covered bond), et pourquoi son risque de crédit est-il plus faible que celui d’un ABS ?",
    "back": "<div class=\"ans\"><p>Une obligation bancaire senior adossée à un <strong>portefeuille de couverture</strong> distinct (p. ex. des prêts immobiliers) qui reste au bilan de la banque.</p><ul><li><strong>Double recours</strong> : créances sur le portefeuille de couverture et sur les autres actifs de la banque</li><li><strong>Portefeuille dynamique</strong> : la banque doit remplacer les actifs non performants</li></ul></div>"
   }
  },
  "fi4-scores-ratings": {
   "zh": {
    "topic": "信用评分与信用评级",
    "front": "比较信用评分和信用评级。",
    "back": "<div class=\"ans\"><ul><li><strong>信用评分</strong>（如 FICO）：个人和小企业；<strong>序数</strong>，越高越好，但不是 POD</li><li><strong>信用评级</strong>（穆迪、标普、惠誉）：公司、主权、分层证券；序数；BBB−/Baa3 及以上为投资级</li></ul></div>",
    "gap": "评级力求穿越周期保持稳定，所以变化慢，可能滞后于市场价格。"
   },
   "ja": {
    "topic": "信用スコアと信用格付",
    "front": "信用スコアと信用格付を比較せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>信用スコア</strong>（例：FICO）：個人と小企業。<strong>序数的</strong>で高いほどよいが、POD ではない</li><li><strong>信用格付</strong>（ムーディーズ、S&amp;P、フィッチ）：企業、ソブリン、トランシェ。序数的。BBB−/Baa3 以上が投資適格</li></ul></div>",
    "gap": "格付はサイクルを通じた安定を目指すので変化が遅く、市場価格に遅れることがある。"
   },
   "fr": {
    "topic": "Scores et notations de crédit",
    "front": "Comparez scores de crédit et notations de crédit.",
    "back": "<div class=\"ans\"><ul><li><strong>Scores de crédit</strong> (p. ex. FICO) : particuliers et petites entreprises ; <strong>ordinaux</strong>, plus c’est haut mieux c’est, mais ce n’est pas une POD</li><li><strong>Notations de crédit</strong> (Moody’s, S&amp;P, Fitch) : entreprises, souverains, tranches ; ordinales ; BBB−/Baa3 et au-dessus = investment grade</li></ul></div>",
    "gap": "Les notations visent la stabilité sur le cycle : elles changent lentement et peuvent être en retard sur les prix de marché."
   }
  },
  "fi4-structural": {
   "zh": {
    "topic": "结构模型 · 期权类比",
    "front": "在结构模型中，股东持有什么期权？债权人处于什么头寸？写出 \\(T\\) 时的收益。",
    "back": "<div class=\"ans\"><p>权益是对资产的<strong>看涨期权</strong>，行权价 \\(K\\) 为债务面值：</p><div class=\"eq-block\">$$E_T=\\max(A_T-K,\\ 0)$$</div><p>债务是<strong>无风险债券减去对资产的看跌期权</strong>：</p><div class=\"eq-block\">$$\\begin{aligned}D_T&=\\min(A_T,\\ K)\\\\&=K-\\max(K-A_T,\\ 0)\\end{aligned}$$</div></div>",
    "gap": "看跌期权就是信用风险：有风险的债务 = PV(K) − 看跌期权。当资产价值低于 K 时发生违约。"
   },
   "ja": {
    "topic": "構造モデル · オプションとの類似",
    "front": "構造モデルで株主はどんなオプションを持ち、債権者はどんなポジションにいるか。\\(T\\) 時点のペイオフを示せ。",
    "back": "<div class=\"ans\"><p>株主資本は資産に対する<strong>コール</strong>で、行使価格 \\(K\\) は負債の額面：</p><div class=\"eq-block\">$$E_T=\\max(A_T-K,\\ 0)$$</div><p>負債は<strong>無リスク債から資産に対するプットを引いたもの</strong>：</p><div class=\"eq-block\">$$\\begin{aligned}D_T&=\\min(A_T,\\ K)\\\\&=K-\\max(K-A_T,\\ 0)\\end{aligned}$$</div></div>",
    "gap": "プットが信用リスク：リスクのある負債 = PV(K) − プット。資産価値が K を下回るとデフォルトする。"
   },
   "fr": {
    "topic": "Modèle structurel · analogie optionnelle",
    "front": "Dans le modèle structurel, quelle option détiennent les actionnaires, et quelle est la position des créanciers ? Écrivez les gains en \\(T\\).",
    "back": "<div class=\"ans\"><p>Les capitaux propres sont un <strong>call</strong> sur les actifs, de prix d’exercice \\(K\\), le nominal de la dette :</p><div class=\"eq-block\">$$E_T=\\max(A_T-K,\\ 0)$$</div><p>La dette est une <strong>obligation sans risque moins un put</strong> sur les actifs :</p><div class=\"eq-block\">$$\\begin{aligned}D_T&=\\min(A_T,\\ K)\\\\&=K-\\max(K-A_T,\\ 0)\\end{aligned}$$</div></div>",
    "gap": "Le put est le risque de crédit : dette risquée = VA(K) − put. Le défaut survient quand les actifs valent moins que K."
   }
  },
  "fi4-structural-sw": {
   "zh": {
    "topic": "结构模型 · 优缺点",
    "front": "给出结构信用模型的优点和缺点。",
    "back": "<div class=\"ans\"><ul><li><strong>优点</strong>：揭示信用风险的本质（资产跌破门槛时违约）；为 POD 和回收提供期权类比；可从当前市场价格估计</li><li><strong>缺点</strong>：简单的资产负债表和可交易的资产不现实；估计忽略了经济周期</li></ul></div>"
   },
   "ja": {
    "topic": "構造モデル · 長所と短所",
    "front": "構造型信用モデルの長所と短所を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>長所</strong>：信用リスクの本質がわかる（資産が閾値を下回るとデフォルト）。POD と回収をオプションになぞらえられる。現在の市場価格から推定できる</li><li><strong>短所</strong>：単純な貸借対照表や取引可能な資産という前提は非現実的。推定が景気循環を無視する</li></ul></div>"
   },
   "fr": {
    "topic": "Modèles structurels · forces et faiblesses",
    "front": "Donnez les forces et les faiblesses des modèles de crédit structurels.",
    "back": "<div class=\"ans\"><ul><li><strong>Forces</strong> : éclairent la nature du risque de crédit (défaut quand les actifs passent sous la barrière) ; analogie optionnelle pour la POD et le recouvrement ; estimables à partir des prix de marché actuels</li><li><strong>Faiblesses</strong> : un bilan simple et des actifs négociables sont irréalistes ; l’estimation ignore le cycle économique</li></ul></div>"
   }
  },
  "fi4-reduced": {
   "zh": {
    "topic": "简约式模型",
    "front": "简约式模型如何处理违约？给出其主要假设、优点和缺点。",
    "back": "<div class=\"ans\"><p>违约是<strong>外生的</strong>：一个随机事件，其<strong>风险率</strong>随可观察变量（经济、公司财务）变化。</p><ul><li><strong>假设</strong>：零息债券在无摩擦、无套利的市场中交易；\\(r\\)、经济和回收率都是随机的</li><li><strong>优点</strong>：输入可观察；信用风险随周期变化；无须资产负债表</li><li><strong>缺点</strong>：没有违约的经济原因；风险率只有经过适当回测才有效</li></ul></div>",
    "gap": "结构模型解释公司<em>为什么</em>违约；简约式模型只对<em>何时</em>违约建模。"
   },
   "ja": {
    "topic": "誘導型モデル",
    "front": "誘導型モデルはデフォルトをどう扱うか。主な前提、長所、短所を挙げよ。",
    "back": "<div class=\"ans\"><p>デフォルトは<strong>外生的</strong>：<strong>ハザード・レート</strong>が観察可能な変数（経済、企業の財務）とともに変わるランダムな事象。</p><ul><li><strong>前提</strong>：ゼロは摩擦のない無裁定市場で取引される。\\(r\\)、経済、回収率は確率的</li><li><strong>長所</strong>：インプットが観察可能。信用リスクがサイクルとともに変わる。貸借対照表が不要</li><li><strong>短所</strong>：デフォルトの経済的理由がない。ハザード・レートは適切にバックテストされて初めて有効</li></ul></div>",
    "gap": "構造モデルは企業が<em>なぜ</em>デフォルトするかを説明し、誘導型モデルは<em>いつ</em>かだけをモデル化する。"
   },
   "fr": {
    "topic": "Modèles sous forme réduite",
    "front": "Comment les modèles sous forme réduite traitent-ils le défaut ? Donnez leurs principales hypothèses, forces et faiblesses.",
    "back": "<div class=\"ans\"><p>Le défaut est <strong>exogène</strong> : un événement aléatoire avec un <strong>taux de hasard</strong> qui varie selon des variables observables (l’économie, les données financières de la société).</p><ul><li><strong>Hypothèses</strong> : le zéro se négocie sur des marchés sans frictions et sans arbitrage ; \\(r\\), l’économie et le recouvrement sont stochastiques</li><li><strong>Forces</strong> : données observables ; le risque de crédit varie avec le cycle ; pas besoin de bilan</li><li><strong>Faiblesses</strong> : pas de raison économique au défaut ; les taux de hasard ne valent que s’ils sont correctement testés a posteriori</li></ul></div>",
    "gap": "Les modèles structurels expliquent <em>pourquoi</em> une société fait défaut ; les modèles réduits ne modélisent que <em>quand</em>."
   }
  }
 }
});
