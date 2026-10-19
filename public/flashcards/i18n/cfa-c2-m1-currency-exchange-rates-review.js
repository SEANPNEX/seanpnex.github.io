deckI18n({
 "source": {
  "zh": "CFA 二级 经济学 · M1 货币汇率 · 单元复习",
  "ja": "CFA レベル II 経済学 · M1 為替レート · 単元の復習",
  "fr": "CFA niveau II Économie · M1 Taux de change · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "e1-bid-ask": {
   "zh": {
    "topic": "报价 · 买价与卖价",
    "front": "对于报价 \\(A/B\\) = 买价–卖价，客户卖出 \\(B\\) 时适用哪个价格？买入 \\(B\\) 时呢？",
    "back": "<div class=\"ans\"><p>\\(A/B\\) = 每一单位<strong>基准货币 \\(B\\)</strong> 对应的 \\(A\\) 的数量。</p><ul><li>客户<strong>卖出 \\(B\\)</strong> → 交易商买入基准货币 → <strong>买价</strong>（“打买价”）</li><li>客户<strong>买入 \\(B\\)</strong> → 交易商卖出基准货币 → <strong>卖价</strong>（“付卖价”）</li></ul></div>",
    "gap": "买价和卖价始终针对基准货币（分母上的那个货币）。"
   },
   "ja": {
    "topic": "気配値 · ビッドとアスク",
    "front": "気配値 \\(A/B\\) = ビッド–アスク のとき、顧客が \\(B\\) を売る場合と買う場合、それぞれどのレートが適用されるか。",
    "back": "<div class=\"ans\"><p>\\(A/B\\) = <strong>基準通貨 \\(B\\)</strong> 1 単位当たりの \\(A\\) の数量。</p><ul><li>顧客が <strong>\\(B\\) を売る</strong> → ディーラーが基準通貨を買う → <strong>ビッド</strong>（「ビッドを叩く」）</li><li>顧客が <strong>\\(B\\) を買う</strong> → ディーラーが基準通貨を売る → <strong>アスク</strong>（「アスクを払う」）</li></ul></div>",
    "gap": "ビッドとアスクは常に基準通貨（分母の通貨）についての値。"
   },
   "fr": {
    "topic": "Cotations · cours acheteur et vendeur",
    "front": "Pour une cotation \\(A/B\\) = bid–ask, quel cours obtient un client qui vend \\(B\\), et un client qui achète \\(B\\) ?",
    "back": "<div class=\"ans\"><p>\\(A/B\\) = unités de \\(A\\) pour une unité de la <strong>devise de base \\(B\\)</strong>.</p><ul><li>Le client <strong>vend \\(B\\)</strong> → le cambiste achète la devise de base → <strong>bid</strong> (« taper le bid »)</li><li>Le client <strong>achète \\(B\\)</strong> → le cambiste vend la devise de base → <strong>ask</strong> (« payer l’ask »)</li></ul></div>",
    "gap": "Le bid et l’ask se rapportent toujours à la devise de base (celle du dénominateur)."
   }
  },
  "e1-conversion": {
   "zh": {
    "topic": "报价 · 金额换算",
    "front": "AUD/GBP = 1.5060–1.5067。把 100 万英镑换成澳元，再把 100 万澳元换成英镑。",
    "back": "<div class=\"ans\"><ul><li>以<strong>买价</strong>卖出 GBP（基准货币）：\\(1{,}000{,}000\\times1.5060=\\) <strong>AUD 1,506,000</strong></li><li>以<strong>卖价</strong>买入 GBP：\\(1{,}000{,}000/1.5067=\\) <strong>GBP 663,702.13</strong></li></ul></div>"
   },
   "ja": {
    "topic": "気配値 · 金額の換算",
    "front": "AUD/GBP = 1.5060–1.5067。100 万ポンドを豪ドルに、100 万豪ドルをポンドに換算せよ。",
    "back": "<div class=\"ans\"><ul><li>GBP（基準通貨）を<strong>ビッド</strong>で売る：\\(1{,}000{,}000\\times1.5060=\\) <strong>AUD 1,506,000</strong></li><li>GBP を<strong>アスク</strong>で買う：\\(1{,}000{,}000/1.5067=\\) <strong>GBP 663,702.13</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Cotations · conversion de montants",
    "front": "AUD/GBP = 1,5060–1,5067. Convertissez 1 million de GBP en AUD, et 1 million d’AUD en GBP.",
    "back": "<div class=\"ans\"><ul><li>Vendre des GBP (base) au <strong>bid</strong> : \\(1{,}000{,}000\\times1.5060=\\) <strong>AUD 1 506 000</strong></li><li>Acheter des GBP à l’<strong>ask</strong> : \\(1{,}000{,}000/1.5067=\\) <strong>GBP 663 702,13</strong></li></ul></div>"
   }
  },
  "e1-spread": {
   "zh": {
    "topic": "报价 · 价差",
    "front": "买卖价差补偿交易商的是什么？交易越大价差一定越宽吗？",
    "back": "<div class=\"ans\"><p>运营成本、存货风险、逆向选择和市场风险。价差以<strong>点（pip）</strong>报价（0.0001；许多日元货币对为 0.01）。</p><p><strong>不一定</strong>：客户价差取决于流动性、交易规模、客户关系、交易时段和波动率；市场深度以及交易商对冲的能力也有影响。</p></div>"
   },
   "ja": {
    "topic": "気配値 · スプレッド",
    "front": "ビッド・アスク・スプレッドはディーラーの何を補償するか。取引が大きいほど常にスプレッドは広がるか。",
    "back": "<div class=\"ans\"><p>運営コスト、在庫リスク、逆選択、市場リスク。スプレッドは<strong>ピップ</strong>（0.0001；多くの円通貨ペアでは 0.01）で表す。</p><p><strong>いいえ</strong>：顧客向けスプレッドは流動性、取引規模、取引関係、時間帯、ボラティリティで決まり、市場の厚みやディーラーのヘッジ能力も影響する。</p></div>"
   },
   "fr": {
    "topic": "Cotations · écarts",
    "front": "Que rémunère l’écart bid–ask pour le cambiste, et une transaction plus grosse implique-t-elle toujours un écart plus large ?",
    "back": "<div class=\"ans\"><p>Les coûts d’exploitation, le risque de stock, l’antisélection et le risque de marché. Les écarts se cotent en <strong>pips</strong> (0,0001 ; 0,01 pour de nombreuses paires en JPY).</p><p><strong>Non</strong> : les écarts clients dépendent de la liquidité, de la taille, de la relation, de l’heure et de la volatilité ; la profondeur du marché et la capacité du cambiste à se couvrir comptent aussi.</p></div>"
   }
  },
  "e1-invert": {
   "zh": {
    "topic": "报价 · 倒数",
    "front": "把报价 \\(A/B\\) 倒过来成为 \\(B/A\\) 时，买价和卖价如何变化？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(B/A)_{bid}=\\frac{1}{(A/B)_{ask}}$$</div><div class=\"eq-block\">$$(B/A)_{ask}=\\frac{1}{(A/B)_{bid}}$$</div><p>两边互换，使买价仍低于卖价。</p></div>"
   },
   "ja": {
    "topic": "気配値 · 逆数",
    "front": "気配値 \\(A/B\\) を \\(B/A\\) に逆転させると、ビッドとアスクはどう変わるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(B/A)_{bid}=\\frac{1}{(A/B)_{ask}}$$</div><div class=\"eq-block\">$$(B/A)_{ask}=\\frac{1}{(A/B)_{bid}}$$</div><p>ビッドがアスクより低いままになるように、両側が入れ替わる。</p></div>"
   },
   "fr": {
    "topic": "Cotations · inversion",
    "front": "Comment le bid et l’ask changent-ils quand on inverse une cotation \\(A/B\\) en \\(B/A\\) ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(B/A)_{bid}=\\frac{1}{(A/B)_{ask}}$$</div><div class=\"eq-block\">$$(B/A)_{ask}=\\frac{1}{(A/B)_{bid}}$$</div><p>Les côtés s’échangent pour que le bid reste inférieur à l’ask.</p></div>"
   }
  },
  "e1-cross": {
   "zh": {
    "topic": "交叉汇率",
    "front": "CHF/USD = 1.5960–1.5970，AUD/USD = 1.7225–1.7235。求 AUD/CHF 的买价和卖价。",
    "back": "<div class=\"ans\"><p>\\(AUD/CHF=\\frac{AUD}{USD}\\times\\frac{USD}{CHF}\\)；CHF/USD 报价要取倒数，所以它的两边互换。</p><div class=\"eq-block\">$$\\text{bid}=\\frac{1.7225}{1.5970}=1.0786$$</div><div class=\"eq-block\">$$\\text{ask}=\\frac{1.7235}{1.5960}=1.0799$$</div></div>",
    "gap": "写出货币单位并检查它们能否约掉；不需要取倒数时，买价 × 买价、卖价 × 卖价。"
   },
   "ja": {
    "topic": "クロスレート",
    "front": "CHF/USD = 1.5960–1.5970、AUD/USD = 1.7225–1.7235。AUD/CHF のビッドとアスクを求めよ。",
    "back": "<div class=\"ans\"><p>\\(AUD/CHF=\\frac{AUD}{USD}\\times\\frac{USD}{CHF}\\)；CHF/USD の気配値は逆数にするので、両側が入れ替わる。</p><div class=\"eq-block\">$$\\text{bid}=\\frac{1.7225}{1.5970}=1.0786$$</div><div class=\"eq-block\">$$\\text{ask}=\\frac{1.7235}{1.5960}=1.0799$$</div></div>",
    "gap": "通貨単位を書き、打ち消し合うか確認する；逆数が不要なら、ビッド × ビッド、アスク × アスク。"
   },
   "fr": {
    "topic": "Taux croisés",
    "front": "CHF/USD = 1,5960–1,5970 et AUD/USD = 1,7225–1,7235. Trouvez le bid et l’ask AUD/CHF.",
    "back": "<div class=\"ans\"><p>\\(AUD/CHF=\\frac{AUD}{USD}\\times\\frac{USD}{CHF}\\) ; la cotation CHF/USD est inversée, donc ses côtés s’échangent.</p><div class=\"eq-block\">$$\\text{bid}=\\frac{1.7225}{1.5970}=1.0786$$</div><div class=\"eq-block\">$$\\text{ask}=\\frac{1.7235}{1.5960}=1.0799$$</div></div>",
    "gap": "Écrire les unités monétaires et vérifier qu’elles s’annulent ; sans inversion, multiplier bid × bid et ask × ask."
   }
  },
  "e1-triangular": {
   "zh": {
    "topic": "三角套利",
    "front": "JPY/USD = 105.39–105.41，CAD/USD = 1.3199–1.3200；某交易商报 JPY/CAD = 79.81–79.83。是否存在套利？",
    "back": "<div class=\"ans\"><p>隐含 JPY/CAD：买价 \\(105.39/1.3200=79.8409\\)，卖价 \\(105.41/1.3199=79.8621\\)。</p><p>交易商的<strong>卖价 79.83 &lt; 市场买价 79.8409</strong>：以 79.83 从交易商买入 CAD，在市场以 79.8409 卖出 → 扣除成本前<strong>每 CAD 赚 JPY 0.0109</strong>。</p></div>",
    "gap": "始终用买价对比卖价（可成交的价格），绝不要用中间价对比中间价。"
   },
   "ja": {
    "topic": "三角裁定",
    "front": "JPY/USD = 105.39–105.41、CAD/USD = 1.3199–1.3200；あるディーラーが JPY/CAD = 79.81–79.83 を提示。裁定機会はあるか。",
    "back": "<div class=\"ans\"><p>理論上の JPY/CAD：ビッド \\(105.39/1.3200=79.8409\\)、アスク \\(105.41/1.3199=79.8621\\)。</p><p>ディーラーの<strong>アスク 79.83 &lt; 市場のビッド 79.8409</strong>：ディーラーから 79.83 で CAD を買い、市場で 79.8409 で売る → コスト控除前で <strong>1 CAD 当たり JPY 0.0109</strong>。</p></div>",
    "gap": "常にビッドとアスク（執行可能な価格）を比べ、仲値どうしでは比べない。"
   },
   "fr": {
    "topic": "Arbitrage triangulaire",
    "front": "JPY/USD = 105,39–105,41, CAD/USD = 1,3199–1,3200 ; un cambiste cote JPY/CAD = 79,81–79,83. Y a-t-il un arbitrage ?",
    "back": "<div class=\"ans\"><p>JPY/CAD implicite : bid \\(105.39/1.3200=79.8409\\), ask \\(105.41/1.3199=79.8621\\).</p><p>L’<strong>ask du cambiste 79,83 &lt; bid du marché 79,8409</strong> : acheter des CAD au cambiste à 79,83, les revendre sur le marché à 79,8409 → <strong>JPY 0,0109 par CAD</strong> avant coûts.</p></div>",
    "gap": "Toujours comparer un bid à un ask (prix exécutables), jamais un cours moyen à un cours moyen."
   }
  },
  "e1-forward-premium": {
   "zh": {
    "topic": "远期 · 升水与贴水",
    "front": "若 \\(F_{A/B}>S_{A/B}\\)，哪个货币处于远期升水？写出 \\(n\\) 天的年化升水。",
    "back": "<div class=\"ans\"><p><strong>基准货币 \\(B\\)</strong> 处于<strong>远期升水</strong>（\\(A\\) 处于贴水）。</p><div class=\"eq-block\">$$\\text{premium}\\approx\\left(\\frac{F_{A/B}}{S_{A/B}}-1\\right)\\frac{360}{n}$$</div><p>远期点数加到（或从）即期买价和卖价上（减去）。</p></div>"
   },
   "ja": {
    "topic": "先渡 · プレミアムとディスカウント",
    "front": "\\(F_{A/B}>S_{A/B}\\) なら、どちらの通貨が先渡プレミアムか。\\(n\\) 日間の年率プレミアムを示せ。",
    "back": "<div class=\"ans\"><p><strong>基準通貨 \\(B\\)</strong> が<strong>先渡プレミアム</strong>（\\(A\\) はディスカウント）。</p><div class=\"eq-block\">$$\\text{premium}\\approx\\left(\\frac{F_{A/B}}{S_{A/B}}-1\\right)\\frac{360}{n}$$</div><p>フォワード・ポイントは直物のビッドとアスクに加える（または差し引く）。</p></div>"
   },
   "fr": {
    "topic": "Contrats à terme · report et déport",
    "front": "Si \\(F_{A/B}>S_{A/B}\\), quelle devise est en report (prime à terme) ? Donnez la prime annualisée sur \\(n\\) jours.",
    "back": "<div class=\"ans\"><p>La <strong>devise de base \\(B\\)</strong> est en <strong>report</strong> (et \\(A\\) en déport).</p><div class=\"eq-block\">$$\\text{premium}\\approx\\left(\\frac{F_{A/B}}{S_{A/B}}-1\\right)\\frac{360}{n}$$</div><p>Les points de terme s’ajoutent au (ou se retranchent du) bid et de l’ask au comptant.</p></div>"
   }
  },
  "e1-mtm": {
   "zh": {
    "topic": "远期 · 按市值计价",
    "front": "在到期前，如何对一份货币远期按市值计价？",
    "back": "<div class=\"ans\"><ul><li>确定原合约的交割现金流</li><li>就剩余期限签一份<strong>金额相等、方向相反的远期</strong>，使用当前正确的买价或卖价</li><li>把两笔交割金额<strong>轧差</strong></li><li>用<strong>该金额所属货币</strong>在剩余期限的利率对净额<strong>折现</strong></li></ul></div>"
   },
   "ja": {
    "topic": "先渡 · 時価評価",
    "front": "満期前の通貨先渡をどう時価評価するか。",
    "back": "<div class=\"ans\"><ul><li>元の決済キャッシュフローを確認する</li><li>残存期間について、現在の正しいビッドまたはアスクで<strong>同額・反対方向の先渡</strong>を締結する</li><li>2 つの決済金額を<strong>相殺</strong>する</li><li>差額を<strong>その金額の通貨</strong>の残存期間の金利で<strong>割り引く</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Contrats à terme · valorisation au marché",
    "front": "Comment valoriser au marché un contrat de change à terme avant l’échéance ?",
    "back": "<div class=\"ans\"><ul><li>Identifier les flux de règlement d’origine</li><li>Conclure un <strong>contrat à terme égal et de sens opposé</strong> pour la durée restante, au bon bid ou ask actuel</li><li><strong>Compenser</strong> les deux montants de règlement</li><li><strong>Actualiser</strong> le montant net au taux d’intérêt de <strong>sa propre devise</strong> sur la durée restante</li></ul></div>"
   }
  },
  "e1-mtm-example": {
   "zh": {
    "topic": "远期 · 例题",
    "front": "以 AUD/USD 1.05358 远期买入 100 万美元（90 天）。30 天后：即期 1.0612/1.0614，60 天点数 +8.6/+9.0，60 天澳元利率 1.16%。以澳元计价值多少？",
    "back": "<div class=\"ans\"><p>以买价<strong>卖出 60 天远期 USD</strong> 来对冲：\\(1.0612+0.00086=1.06206\\)。</p><p>交割时的澳元净额：\\(1{,}062{,}060-1{,}053{,}580=8{,}480\\)。</p><div class=\"eq-block\">$$V=\\frac{8{,}480}{1+0.0116\\times60/360}=\\text{AUD }8{,}463.64$$</div></div>"
   },
   "ja": {
    "topic": "先渡 · 計算例",
    "front": "AUD/USD 1.05358 で 100 万米ドルを先渡で購入（90 日）。30 日後：直物 1.0612/1.0614、60 日物ポイント +8.6/+9.0、60 日の豪ドル金利 1.16%。豪ドル建ての価値は？",
    "back": "<div class=\"ans\"><p>60 日先渡で<strong>USD をビッドで売って</strong>相殺：\\(1.0612+0.00086=1.06206\\)。</p><p>決済時の豪ドル差額：\\(1{,}062{,}060-1{,}053{,}580=8{,}480\\)。</p><div class=\"eq-block\">$$V=\\frac{8{,}480}{1+0.0116\\times60/360}=\\text{AUD }8{,}463.64$$</div></div>"
   },
   "fr": {
    "topic": "Contrats à terme · exemple chiffré",
    "front": "Achat à terme d’1 M USD à AUD/USD 1,05358 (90 jours). Après 30 jours : comptant 1,0612/1,0614, points à 60 jours +8,6/+9,0, taux AUD à 60 jours 1,16 %. Valeur en AUD ?",
    "back": "<div class=\"ans\"><p>Compenser en <strong>vendant des USD</strong> à 60 jours au bid : \\(1.0612+0.00086=1.06206\\).</p><p>AUD net au règlement : \\(1{,}062{,}060-1{,}053{,}580=8{,}480\\).</p><div class=\"eq-block\">$$V=\\frac{8{,}480}{1+0.0116\\times60/360}=\\text{AUD }8{,}463.64$$</div></div>"
   }
  },
  "e1-cirp": {
   "zh": {
    "topic": "平价 · 抛补利率平价",
    "front": "用 \\(S_{f/d}\\)（每单位本币兑外币）写出抛补利率平价。若 \\(i_f>i_d\\)，远期汇率高于还是低于即期？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_{f/d}=S_{f/d}\\,\\frac{1+i_f}{1+i_d}$$</div><p>完全对冲的外国投资必须赚取本国利率；由<strong>套利</strong>保证成立。若 \\(i_f>i_d\\)，则 \\(F_{f/d}>S_{f/d}\\)：本币处于远期升水。</p></div>",
    "gap": "期限不足一年时，要把利率按期限缩放（例如 × n/360）。"
   },
   "ja": {
    "topic": "パリティ · カバー付き金利平価",
    "front": "\\(S_{f/d}\\)（自国通貨 1 単位当たりの外貨）でカバー付き金利平価を示せ。\\(i_f>i_d\\) なら先渡レートは直物より上か下か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_{f/d}=S_{f/d}\\,\\frac{1+i_f}{1+i_d}$$</div><p>完全にヘッジした外国投資は自国金利を稼ぐはずで、<strong>裁定</strong>によって成り立つ。\\(i_f>i_d\\) なら \\(F_{f/d}>S_{f/d}\\)：自国通貨が先渡プレミアム。</p></div>",
    "gap": "1 年未満の期間では、金利を期間に合わせて調整する（例：× n/360）。"
   },
   "fr": {
    "topic": "Parité · PTIC",
    "front": "Énoncez la parité des taux d’intérêt couverte avec \\(S_{f/d}\\) (devise étrangère par devise nationale). Si \\(i_f>i_d\\), le terme est-il au-dessus ou en dessous du comptant ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_{f/d}=S_{f/d}\\,\\frac{1+i_f}{1+i_d}$$</div><p>Un placement étranger entièrement couvert doit rapporter le taux national ; c’est imposé par l’<strong>arbitrage</strong>. Si \\(i_f>i_d\\), \\(F_{f/d}>S_{f/d}\\) : la devise nationale est en report.</p></div>",
    "gap": "Pour des échéances de moins d’un an, ajuster les taux à l’horizon (par ex. × n/360)."
   }
  },
  "e1-uirp": {
   "zh": {
    "topic": "平价 · 非抛补利率平价与套息交易",
    "front": "写出非抛补利率平价。为什么套息交易不是套利？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(\\%\\Delta S_{f/d})\\approx i_f-i_d$$</div><p>高收益货币预期会按利差<strong>贬值</strong>。非抛补利率平价是均衡下的预期，不是套利条件，在短期内经常不成立。</p><p><strong>套息交易</strong>（借入低息货币、投资高息货币、不对冲）只有在非抛补利率平价不成立时才赚钱；融资货币相对投资货币的贬值可能抹掉全部收益，所以它是<strong>有风险的</strong>。</p></div>"
   },
   "ja": {
    "topic": "パリティ · カバーなし金利平価とキャリー・トレード",
    "front": "カバーなし金利平価を示せ。キャリー・トレードはなぜ裁定ではないのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(\\%\\Delta S_{f/d})\\approx i_f-i_d$$</div><p>高金利通貨は金利差の分だけ<strong>減価</strong>すると予想される。これは均衡における期待であって裁定条件ではなく、短期ではしばしば成り立たない。</p><p><strong>キャリー・トレード</strong>（低金利で借り、高金利で運用し、ヘッジしない）は UIRP が成り立たないときにしか儲からない；投資通貨の調達通貨に対する減価で利益が消えうるので、<strong>リスクがある</strong>。</p></div>"
   },
   "fr": {
    "topic": "Parité · PTINC et carry trade",
    "front": "Énoncez la PTINC. Pourquoi un carry trade n’est-il pas un arbitrage ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(\\%\\Delta S_{f/d})\\approx i_f-i_d$$</div><p>La devise à rendement élevé devrait se <strong>déprécier</strong> de l’écart de taux. La PTINC est une anticipation d’équilibre, pas une condition d’arbitrage, et échoue souvent à court terme.</p><p>Un <strong>carry trade</strong> (emprunter à taux bas, placer à taux élevé, sans couverture) ne gagne que si la PTINC échoue ; une dépréciation de la devise de placement face à la devise de financement peut tout effacer, il est donc <strong>risqué</strong>.</p></div>"
   }
  },
  "e1-carry-example": {
   "zh": {
    "topic": "平价 · 套息交易例题",
    "front": "一年内 USD/GBP 从 1.50 变为 1.49；英国利率 3%，美国利率 1%。借美元投资英镑的利润是多少？",
    "back": "<div class=\"ans\"><p>借入 USD 1.50 → GBP 1.00 → GBP 1.03 → \\(1.03\\times1.49=\\) USD 1.5347。偿还 \\(1.50\\times1.01=\\) USD 1.5150。</p><p>利润 <strong>USD 0.0197</strong>，即所借 USD 1.50 的 <strong>1.31%</strong>。</p></div>"
   },
   "ja": {
    "topic": "パリティ · キャリー・トレードの例",
    "front": "1 年で USD/GBP が 1.50 → 1.49；英国金利 3%、米国金利 1%。米ドルで借りてポンドで運用したときの利益は？",
    "back": "<div class=\"ans\"><p>USD 1.50 を借りる → GBP 1.00 → GBP 1.03 → \\(1.03\\times1.49=\\) USD 1.5347。返済 \\(1.50\\times1.01=\\) USD 1.5150。</p><p>利益 <strong>USD 0.0197</strong>、借入額 USD 1.50 の <strong>1.31%</strong>。</p></div>"
   },
   "fr": {
    "topic": "Parité · exemple de carry trade",
    "front": "USD/GBP passe de 1,50 à 1,49 en un an ; taux britannique 3 %, taux américain 1 %. Gain en empruntant des USD pour placer en GBP ?",
    "back": "<div class=\"ans\"><p>Emprunter USD 1,50 → GBP 1,00 → GBP 1,03 → \\(1.03\\times1.49=\\) USD 1,5347. Rembourser \\(1.50\\times1.01=\\) USD 1,5150.</p><p>Gain <strong>USD 0,0197</strong>, soit <strong>1,31 %</strong> des USD 1,50 empruntés.</p></div>"
   }
  },
  "e1-frp-ppp": {
   "zh": {
    "topic": "平价 · 远期汇率平价与购买力平价",
    "front": "远期汇率什么时候是未来即期汇率的无偏预测？写出绝对和相对购买力平价。",
    "back": "<div class=\"ans\"><p><strong>远期汇率平价</strong> \\(F_{f/d}=E(S_T)\\) 在<strong>抛补和非抛补利率平价</strong>都成立时成立；由于抛补利率平价总是成立，它取决于非抛补利率平价。</p><ul><li><strong>绝对购买力平价</strong>：\\(S_{f/d}=P_f/P_d\\)（一篮子商品的一价定律）</li><li><strong>相对购买力平价</strong>：\\(\\%\\Delta S_{f/d}\\approx\\pi_f-\\pi_d\\)</li></ul><p>本国通胀更低 → \\(S_{f/d}\\) 上升 → 本币<strong>升值</strong>。</p></div>"
   },
   "ja": {
    "topic": "パリティ · 先渡レート平価と購買力平価",
    "front": "先渡レートが将来の直物レートの不偏予測になるのはいつか。絶対的・相対的購買力平価を示せ。",
    "back": "<div class=\"ans\"><p><strong>先渡レート平価</strong> \\(F_{f/d}=E(S_T)\\) は <strong>CIRP と UIRP</strong> の両方が成り立つときに成り立つ；CIRP は常に成り立つので、UIRP 次第。</p><ul><li><strong>絶対的 PPP</strong>：\\(S_{f/d}=P_f/P_d\\)（バスケットについての一物一価）</li><li><strong>相対的 PPP</strong>：\\(\\%\\Delta S_{f/d}\\approx\\pi_f-\\pi_d\\)</li></ul><p>自国のインフレ率が低い → \\(S_{f/d}\\) が上昇 → 自国通貨が<strong>増価</strong>。</p></div>"
   },
   "fr": {
    "topic": "Parité · parité des taux à terme et PPA",
    "front": "Quand le cours à terme est-il un prédicteur sans biais du comptant futur ? Énoncez la PPA absolue et relative.",
    "back": "<div class=\"ans\"><p>La <strong>parité des taux à terme</strong> \\(F_{f/d}=E(S_T)\\) tient si la <strong>PTIC et la PTINC</strong> tiennent toutes deux ; la PTIC tenant toujours, elle dépend de la PTINC.</p><ul><li><strong>PPA absolue</strong> : \\(S_{f/d}=P_f/P_d\\) (loi du prix unique pour un panier)</li><li><strong>PPA relative</strong> : \\(\\%\\Delta S_{f/d}\\approx\\pi_f-\\pi_d\\)</li></ul><p>Inflation nationale plus faible → \\(S_{f/d}\\) monte → la devise nationale s’<strong>apprécie</strong>.</p></div>"
   }
  },
  "e1-fisher-rirp": {
   "zh": {
    "topic": "平价 · 费雪效应与实际利率平价",
    "front": "什么是国际费雪效应？实际利率平价需要什么条件？",
    "back": "<div class=\"ans\"><p>费雪：\\(i\\approx r+E\\pi\\)。<strong>国际费雪效应</strong>：\\(i_f-i_d=E\\pi_f-E\\pi_d\\)。</p><p><strong>实际利率平价</strong> \\(r_f\\approx r_d\\) 只有在<strong>非抛补利率平价与事前购买力平价都成立</strong>时（加上费雪关系）才成立：此时两者对汇率的预期一致。</p></div>",
    "gap": "非抛补利率平价和事前购买力平价是两个独立的假设；不能只凭其中一个推出实际利率平价。"
   },
   "ja": {
    "topic": "パリティ · フィッシャー効果と実質金利平価",
    "front": "国際フィッシャー効果とは何か。実質金利平価には何が必要か。",
    "back": "<div class=\"ans\"><p>フィッシャー：\\(i\\approx r+E\\pi\\)。<strong>国際フィッシャー効果</strong>：\\(i_f-i_d=E\\pi_f-E\\pi_d\\)。</p><p><strong>実質金利平価</strong> \\(r_f\\approx r_d\\) は、<strong>UIRP と事前の PPP の両方が成り立つ</strong>とき（フィッシャー関係とあわせて）に限り成り立つ：そのとき両者の為替予想が一致する。</p></div>",
    "gap": "UIRP と事前の PPP は別々の仮定；片方だけから実質金利平価を導いてはいけない。"
   },
   "fr": {
    "topic": "Parité · effet Fisher et parité des taux réels",
    "front": "Qu’est-ce que l’effet Fisher international, et que faut-il pour la parité des taux d’intérêt réels ?",
    "back": "<div class=\"ans\"><p>Fisher : \\(i\\approx r+E\\pi\\). <strong>Effet Fisher international</strong> : \\(i_f-i_d=E\\pi_f-E\\pi_d\\).</p><p>La <strong>parité des taux réels</strong> \\(r_f\\approx r_d\\) ne découle que si <strong>la PTINC et la PPA ex ante tiennent toutes deux</strong> (avec les relations de Fisher) : leurs anticipations de change coïncident alors.</p></div>",
    "gap": "La PTINC et la PPA ex ante sont des hypothèses distinctes ; on ne déduit pas la parité des taux réels d’une seule."
   }
  },
  "e1-bop": {
   "zh": {
    "topic": "国际收支",
    "front": "经常账户赤字会机械地导致货币贬值吗？说出两个长期渠道。",
    "back": "<div class=\"ans\"><p><strong>不会。</strong>赤字必须由金融流入或储备来弥补；影响取决于赤字的成因以及融资是否可持续。</p><ul><li><strong>资产组合平衡渠道</strong>：失衡会转移全球财富和意愿持有的资产</li><li><strong>债务可持续性渠道</strong>：不断上升的外债最终可能需要更高的风险溢价或货币贬值</li></ul></div>"
   },
   "ja": {
    "topic": "国際収支",
    "front": "経常赤字は機械的に通貨安を引き起こすか。長期の 2 つの経路を挙げよ。",
    "back": "<div class=\"ans\"><p><strong>いいえ。</strong>赤字は金融収支の流入か外貨準備で賄われる必要があり、影響は赤字の原因と、資金調達が持続可能かどうかで決まる。</p><ul><li><strong>ポートフォリオ・バランス経路</strong>：不均衡が世界の富と望ましい保有を動かす</li><li><strong>債務の持続可能性の経路</strong>：対外債務の増加はいずれリスク・プレミアムの上昇や通貨安を必要としうる</li></ul></div>"
   },
   "fr": {
    "topic": "Balance des paiements",
    "front": "Un déficit courant provoque-t-il mécaniquement une dépréciation ? Nommez les deux canaux de plus long terme.",
    "back": "<div class=\"ans\"><p><strong>Non.</strong> Il doit être financé par des entrées financières ou des réserves ; l’effet dépend de sa cause et de la soutenabilité du financement.</p><ul><li><strong>Canal de l’équilibre de portefeuille</strong> : les déséquilibres déplacent la richesse mondiale et les détentions désirées</li><li><strong>Canal de la soutenabilité de la dette</strong> : une dette extérieure croissante peut finir par exiger des primes de risque plus élevées ou une dépréciation</li></ul></div>"
   }
  },
  "e1-mundell-fleming": {
   "zh": {
    "topic": "政策 · 蒙代尔–弗莱明",
    "front": "浮动汇率、资本高度流动：扩张性货币政策、扩张性财政政策以及两者同时实施，对货币有什么影响？",
    "back": "<div class=\"ans\"><ul><li><strong>货币扩张</strong>：利率下降 → 资本流出 → <strong>贬值</strong></li><li><strong>财政扩张</strong>：利率上升 → 资本流入 → <strong>升值</strong></li><li><strong>扩张性财政 + 紧缩性货币</strong>：升值；相反组合：贬值；同方向：<strong>不确定</strong></li></ul></div>",
    "gap": "资本流动性低时以贸易流为主：财政与货币都扩张 → 贬值；都紧缩 → 升值。"
   },
   "ja": {
    "topic": "政策 · マンデル＝フレミング",
    "front": "変動相場制で資本移動性が高いとき、拡張的金融政策、拡張的財政政策、その両方は通貨にどう作用するか。",
    "back": "<div class=\"ans\"><ul><li><strong>金融緩和</strong>：金利低下 → 資本流出 → <strong>減価</strong></li><li><strong>財政拡張</strong>：金利上昇 → 資本流入 → <strong>増価</strong></li><li><strong>拡張的財政 + 引締め的金融</strong>：増価；逆の組合せ：減価；同じ方向：<strong>不確定</strong></li></ul></div>",
    "gap": "資本移動性が低いと貿易フローが支配的：財政も金融も拡張 → 減価；両方引締め → 増価。"
   },
   "fr": {
    "topic": "Politique · Mundell–Fleming",
    "front": "Change flottant, forte mobilité des capitaux : quel est l’effet sur la devise d’une politique monétaire expansionniste, d’une politique budgétaire expansionniste, et des deux ensemble ?",
    "back": "<div class=\"ans\"><ul><li><strong>Expansion monétaire</strong> : taux plus bas → sorties de capitaux → <strong>dépréciation</strong></li><li><strong>Expansion budgétaire</strong> : taux plus hauts → entrées de capitaux → <strong>appréciation</strong></li><li><strong>Budget expansionniste + monnaie restrictive</strong> : appréciation ; combinaison inverse : dépréciation ; même sens : <strong>indéterminé</strong></li></ul></div>",
    "gap": "Avec une faible mobilité des capitaux, les flux commerciaux dominent : budget + monnaie expansionnistes → dépréciation ; tous deux restrictifs → appréciation."
   }
  },
  "e1-monetary-overshoot": {
   "zh": {
    "topic": "政策 · 货币分析法与超调",
    "front": "货币分析法对货币增长加快有什么预测？什么是超调？",
    "back": "<div class=\"ans\"><p>由 \\(MV=PY\\)，且 \\(V\\) 和 \\(Y\\) 稳定：货币增长加快推高国内价格 → 根据相对购买力平价，<strong>长期贬值</strong>。</p><p><strong>超调</strong>（多恩布什）：商品价格有黏性，而金融市场调整很快，所以意外的货币扩张会让货币<strong>贬值到超过其购买力平价水平</strong>，随后随着价格上涨再回升。</p></div>"
   },
   "ja": {
    "topic": "政策 · マネタリー・アプローチとオーバーシュート",
    "front": "マネタリー・アプローチは貨幣供給の伸びの加速について何を予測するか。オーバーシュートとは何か。",
    "back": "<div class=\"ans\"><p>\\(V\\) と \\(Y\\) が安定した \\(MV=PY\\) から：貨幣の伸びが速まると国内物価が上がる → 相対的 PPP により<strong>長期的に減価</strong>。</p><p><strong>オーバーシュート</strong>（ドーンブッシュ）：財の価格は硬直的だが金融市場はすばやく動くため、予想外の緩和で通貨は <strong>PPP 水準を超えて減価</strong>し、その後物価の上昇とともに増価して戻る。</p></div>"
   },
   "fr": {
    "topic": "Politique · approche monétaire et surréaction",
    "front": "Que prédit l’approche monétaire pour une croissance monétaire plus rapide, et qu’est-ce que la surréaction ?",
    "back": "<div class=\"ans\"><p>À partir de \\(MV=PY\\) avec \\(V\\) et \\(Y\\) stables : une croissance monétaire plus rapide fait monter les prix intérieurs → par la PPA relative, <strong>dépréciation à long terme</strong>.</p><p><strong>Surréaction</strong> (Dornbusch) : les prix des biens sont rigides mais les marchés financiers réagissent vite, donc une expansion inattendue fait <strong>se déprécier la devise au-delà de son niveau de PPA</strong>, puis elle se réapprécie à mesure que les prix montent.</p></div>"
   }
  },
  "e1-portfolio-balance": {
   "zh": {
    "topic": "政策 · 资产组合平衡法",
    "front": "按照资产组合平衡法，持续的财政扩张随时间推移会对货币产生什么影响？",
    "back": "<div class=\"ans\"><p>本国和外国债券不是完全替代品，所以更多的政府债务需要更高的风险溢价。</p><ul><li><strong>短期</strong>：利率上升吸引资本 → <strong>升值</strong></li><li><strong>长期</strong>：对债务可持续性、货币化或通胀的担忧 → <strong>贬值</strong></li></ul></div>"
   },
   "ja": {
    "topic": "政策 · ポートフォリオ・バランス・アプローチ",
    "front": "ポートフォリオ・バランス・アプローチでは、持続的な財政拡張は時間とともに通貨にどう作用するか。",
    "back": "<div class=\"ans\"><p>自国債と外国債は完全な代替物ではないので、政府債務が増えるとより高いリスク・プレミアムが必要になる。</p><ul><li><strong>短期</strong>：金利上昇が資本を引き寄せる → <strong>増価</strong></li><li><strong>長期</strong>：債務の持続可能性、マネタイゼーション、インフレへの懸念 → <strong>減価</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Politique · approche de l’équilibre de portefeuille",
    "front": "Selon l’approche de l’équilibre de portefeuille, quel est l’effet dans le temps d’une expansion budgétaire durable sur la devise ?",
    "back": "<div class=\"ans\"><p>Les obligations nationales et étrangères sont des substituts imparfaits, donc plus de dette publique exige une prime de risque plus élevée.</p><ul><li><strong>Court terme</strong> : des taux plus élevés attirent les capitaux → <strong>appréciation</strong></li><li><strong>Long terme</strong> : inquiétudes sur la soutenabilité de la dette, la monétisation ou l’inflation → <strong>dépréciation</strong></li></ul></div>"
   }
  }
 }
});
