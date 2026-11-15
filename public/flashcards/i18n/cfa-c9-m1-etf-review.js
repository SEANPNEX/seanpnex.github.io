deckI18n({
 "source": {
  "zh": "CFA 二级 投资组合管理 · M1 交易所交易基金 · 单元复习",
  "ja": "CFA レベル II ポートフォリオ運用 · M1 上場投資信託（ETF）· 単元の復習",
  "fr": "CFA niveau II Gestion de portefeuille · M1 Fonds indiciels cotés (ETF) · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "pm1-etf-def": {
   "zh": {
    "topic": "ETF · 定义",
    "front": "什么是 ETF？就投资者与谁交易而言，它与开放式基金和封闭式基金有何不同？",
    "back": "<div class=\"ans\"><p>持有一篮子证券、通常<strong>跟踪某个指数</strong>的基金，其份额全天在交易所交易。</p><ul><li><strong>开放式</strong>：投资者<strong>直接与基金</strong>交易，按日终 NAV</li><li><strong>封闭式</strong>：份额固定，在交易所<strong>投资者之间</strong>交易；价格可能大幅偏离 NAV</li><li><strong>ETF</strong>：投资者在交易所交易；只有 AP 与基金打交道</li></ul></div>"
   },
   "ja": {
    "topic": "ETF · 定義",
    "front": "ETF とは何か。投資家の取引相手という点で、オープンエンド型やクローズドエンド型のファンドとどう違うか。",
    "back": "<div class=\"ans\"><p>多くは<strong>指数に連動</strong>する証券の集合を保有するファンドで、その受益証券は取引所で終日取引される。</p><ul><li><strong>オープンエンド型</strong>：投資家は<strong>ファンドと直接</strong>、日末の NAV で取引する</li><li><strong>クローズドエンド型</strong>：口数は固定で、取引所で<strong>投資家同士</strong>が取引する。価格は NAV から大きく乖離しうる</li><li><strong>ETF</strong>：投資家は取引所で取引する。ファンドと取引するのは AP だけ</li></ul></div>"
   },
   "fr": {
    "topic": "ETF · définition",
    "front": "Qu’est-ce qu’un ETF, et en quoi diffère-t-il d’un fonds ouvert et d’un fonds fermé quant à la contrepartie de l’investisseur ?",
    "back": "<div class=\"ans\"><p>Un fonds détenant un ensemble de titres, souvent <strong>répliquant un indice</strong>, dont les parts se négocient en bourse toute la journée.</p><ul><li><strong>Fonds ouvert</strong> : les investisseurs traitent <strong>directement avec le fonds</strong>, à la NAV de fin de journée</li><li><strong>Fonds fermé</strong> : nombre de parts fixe, négociées <strong>entre investisseurs</strong> en bourse ; le prix peut beaucoup s’écarter de la NAV</li><li><strong>ETF</strong> : les investisseurs traitent en bourse ; seuls les AP traitent avec le fonds</li></ul></div>"
   }
  },
  "pm1-two-markets": {
   "zh": {
    "topic": "一级市场与二级市场",
    "front": "描述 ETF 的一级市场和二级市场。哪一面是“开放式”，哪一面是“封闭式”？",
    "back": "<div class=\"ans\"><ul><li><strong>一级（开放式一面）</strong>：<strong>授权参与者</strong>交付申购篮子，以<strong>申购单位</strong>（如 50,000 份）创设 ETF 份额，并赎回换取篮子，通常为<strong>实物</strong></li><li><strong>二级（封闭式一面）</strong>：所有人（包括 AP）按市场价格在交易所交易 ETF 份额；大部分交易发生在这里</li></ul></div>",
    "gap": "二级市场交易不触及基金：份额数量只通过 AP 变化。"
   },
   "ja": {
    "topic": "発行市場と流通市場",
    "front": "ETF の発行市場と流通市場を説明せよ。どちらが「オープンエンド」で、どちらが「クローズドエンド」か。",
    "back": "<div class=\"ans\"><ul><li><strong>発行市場（オープンエンド側）</strong>：<strong>指定参加者</strong>が設定バスケットを拠出して<strong>設定単位</strong>（例：50,000 口）で ETF を設定し、バスケットと引き換えに交換する。通常は<strong>現物</strong></li><li><strong>流通市場（クローズドエンド側）</strong>：AP を含む全員が取引所で市場価格で売買する。取引の大部分はここで行われる</li></ul></div>",
    "gap": "流通市場の取引はファンドに触れない：口数が変わるのは AP を通じてだけ。"
   },
   "fr": {
    "topic": "Marchés primaire et secondaire",
    "front": "Décrivez les marchés primaire et secondaire de l’ETF. Quel côté est « ouvert » et lequel « fermé » ?",
    "back": "<div class=\"ans\"><ul><li><strong>Primaire (côté ouvert)</strong> : les <strong>participants autorisés</strong> créent des parts par <strong>unités de création</strong> (p. ex. 50 000 parts) en livrant le panier de création, et les rachètent contre le panier, généralement <strong>en nature</strong></li><li><strong>Secondaire (côté fermé)</strong> : tout le monde, AP compris, négocie les parts en bourse au prix de marché ; l’essentiel des échanges a lieu ici</li></ul></div>",
    "gap": "Les échanges sur le marché secondaire ne touchent jamais le fonds : le nombre de parts ne change que via les AP."
   }
  },
  "pm1-arbitrage": {
   "zh": {
    "topic": "AP 套利",
    "front": "ETF 相对 NAV 溢价和折价时，AP 分别怎么做？为什么小的差距可能持续存在？",
    "back": "<div class=\"ans\"><ul><li><strong>溢价</strong>：买入篮子，<strong>申购</strong> ETF 份额并卖出：ETF 价格 ↓</li><li><strong>折价</strong>：买入 ETF 份额，<strong>赎回</strong>换取篮子并卖出证券：ETF 价格 ↑</li></ul><p>只有当差距超过 AP 的成本（申购/赎回费、标的交易成本）时套利才划算，所以价格在这个区间内波动。</p></div>"
   },
   "ja": {
    "topic": "AP の裁定",
    "front": "ETF が NAV に対してプレミアムのとき、ディスカウントのとき、AP は何をするか。小さな乖離が残りうるのはなぜか。",
    "back": "<div class=\"ans\"><ul><li><strong>プレミアム</strong>：バスケットを買い、ETF を<strong>設定</strong>して売る：ETF 価格 ↓</li><li><strong>ディスカウント</strong>：ETF を買い、バスケットと<strong>交換</strong>して証券を売る：ETF 価格 ↑</li></ul><p>裁定は乖離が AP のコスト（設定・交換手数料、原資産の取引コスト）を上回るときだけ割に合うので、価格はその幅の中で動く。</p></div>"
   },
   "fr": {
    "topic": "Arbitrage des AP",
    "front": "Que fait un AP quand l’ETF cote avec une prime sur la NAV, puis avec une décote ? Pourquoi un petit écart peut-il persister ?",
    "back": "<div class=\"ans\"><ul><li><strong>Prime</strong> : acheter le panier, <strong>créer</strong> des parts d’ETF, les vendre : prix de l’ETF ↓</li><li><strong>Décote</strong> : acheter des parts, les <strong>racheter</strong> contre le panier, vendre les titres : prix de l’ETF ↑</li></ul><p>L’arbitrage ne paie que si l’écart dépasse les coûts de l’AP (frais de création/rachat, coûts de transaction du sous-jacent) : le prix évolue donc dans cette bande.</p></div>"
   }
  },
  "pm1-spread": {
   "zh": {
    "topic": "ETF 买卖价差",
    "front": "ETF 的买卖价差由什么组成？什么会使其收窄？",
    "back": "<div class=\"ans\"><ul><li>申购/赎回费和其他交易成本（佣金）</li><li>标的的买卖价差和<strong>流动性</strong></li><li>持有和对冲头寸的风险</li><li>做市商利润（随竞争下降）</li><li><strong>减去</strong>：场内流动性；当 ETF 买卖双方能撮合时，无须申购</li></ul></div>",
    "gap": "交易活跃的 ETF，其价差可能比标的证券更窄。"
   },
   "ja": {
    "topic": "ETF のビッド・アスク・スプレッド",
    "front": "ETF のビッド・アスク・スプレッドは何で構成され、何によって縮小するか。",
    "back": "<div class=\"ans\"><ul><li>設定・交換手数料その他の取引コスト（手数料）</li><li>原資産のビッド・アスク・スプレッドと<strong>流動性</strong></li><li>ポジションを保有しヘッジするリスク</li><li>マーケット・メーカーの利益（競争で減る）</li><li><strong>差し引き</strong>：取引所での流動性。ETF の買い手と売り手がマッチすれば設定は不要</li></ul></div>",
    "gap": "活発に取引される ETF は、原資産の証券よりスプレッドが狭いことがある。"
   },
   "fr": {
    "topic": "Fourchette d’un ETF",
    "front": "De quoi se compose la fourchette achat-vente d’un ETF, et qu’est-ce qui la resserre ?",
    "back": "<div class=\"ans\"><ul><li>Frais de création/rachat et autres coûts de transaction (commissions)</li><li>Fourchettes et <strong>liquidité du sous-jacent</strong></li><li>Risque de porter et de couvrir la position</li><li>Marge du teneur de marché (baisse avec la concurrence)</li><li><strong>Moins</strong> : la liquidité en bourse ; quand acheteurs et vendeurs d’ETF se rencontrent, aucune création n’est nécessaire</li></ul></div>",
    "gap": "Un ETF très échangé peut avoir une fourchette plus étroite que ses titres sous-jacents."
   }
  },
  "pm1-time-zone": {
   "zh": {
    "topic": "国际 ETF · 时区",
    "front": "为什么在外国股票所在市场休市期间，投资这些股票的 ETF 的价差会扩大？",
    "back": "<div class=\"ans\"><p>交易商在该市场休市时无法交易或对冲篮子，且篮子价格已<strong>过时</strong>，所以要为风险收取更多费用。</p></div>"
   },
   "ja": {
    "topic": "海外 ETF · 時差",
    "front": "外国株の ETF のスプレッドが、その国の市場が閉まっている間に広がるのはなぜか。",
    "back": "<div class=\"ans\"><p>市場が閉まっている間はディーラーがバスケットを売買・ヘッジできず、バスケットの価格も<strong>古く</strong>なっているので、リスクに対してより多くを請求する。</p></div>"
   },
   "fr": {
    "topic": "ETF internationaux · fuseaux horaires",
    "front": "Pourquoi les fourchettes s’élargissent-elles sur un ETF d’actions étrangères quand leur marché d’origine est fermé ?",
    "back": "<div class=\"ans\"><p>Le courtier ne peut ni négocier ni couvrir le panier tant que ce marché est fermé, et les prix du panier sont <strong>périmés</strong> : il facture donc plus cher le risque.</p></div>"
   }
  },
  "pm1-premium": {
   "zh": {
    "topic": "相对 NAV 的溢价/折价",
    "front": "溢价或折价如何衡量？区分 NAV、日终溢价/折价和 iNAV。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Premium}=\\frac{\\text{ETF price}-\\text{NAV}}{\\text{NAV}}$$</div><ul><li><strong>NAV</strong>：每天一次，根据持仓的收盘价计算</li><li><strong>日终</strong>：ETF 收盘价对比当日 NAV</li><li><strong>iNAV</strong>（指示性 NAV）：每 15 秒根据持仓的最新成交价发布，用于日内交易</li></ul></div>"
   },
   "ja": {
    "topic": "NAV に対するプレミアム・ディスカウント",
    "front": "プレミアム・ディスカウントはどう測るか。NAV、日末のプレミアム・ディスカウント、iNAV を区別せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Premium}=\\frac{\\text{ETF price}-\\text{NAV}}{\\text{NAV}}$$</div><ul><li><strong>NAV</strong>：1 日 1 回、保有銘柄の終値から計算</li><li><strong>日末</strong>：ETF の終値とその日の NAV の比較</li><li><strong>iNAV</strong>（推定 NAV）：保有銘柄の直近の約定価格から 15 秒ごとに公表され、日中の取引に使う</li></ul></div>"
   },
   "fr": {
    "topic": "Prime/décote sur la NAV",
    "front": "Comment mesure-t-on la prime ou la décote ? Distinguez la NAV, la prime/décote de fin de journée et l’iNAV.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Premium}=\\frac{\\text{ETF price}-\\text{NAV}}{\\text{NAV}}$$</div><ul><li><strong>NAV</strong> : une fois par jour, à partir des cours de clôture des titres détenus</li><li><strong>Fin de journée</strong> : cours de clôture de l’ETF contre la NAV du jour</li><li><strong>iNAV</strong> (NAV indicative) : publiée toutes les 15 secondes à partir des derniers cours des titres, pour la négociation intrajournalière</li></ul></div>"
   }
  },
  "pm1-stale": {
   "zh": {
    "topic": "溢价 ≠ 错误定价",
    "front": "一只日本股票 ETF 在纽约收于 25.30；其根据东京收盘计算的 NAV 为 25.00。溢价是多少？这是错误定价吗？",
    "back": "<div class=\"ans\"><p>\\((25.30-25.00)/25.00=+1.2\\%\\)。</p><p>不一定：NAV 已<strong>过时</strong>。ETF 价格反映了东京收盘后的消息；NAV 次日才会跟上。</p></div>",
    "gap": "过时的 NAV 也来自流动性差的持仓，如按矩阵定价的债券，尤其在压力时期。"
   },
   "ja": {
    "topic": "プレミアム ≠ ミスプライシング",
    "front": "日本株の ETF がニューヨークで 25.30 で引け、東京の終値による NAV は 25.00。プレミアムはいくらか。ミスプライシングか。",
    "back": "<div class=\"ans\"><p>\\((25.30-25.00)/25.00=+1.2\\%\\)。</p><p>そうとは限らない：NAV が<strong>古い</strong>。ETF 価格は東京の引け後のニュースを反映しており、NAV は翌日に追いつく。</p></div>",
    "gap": "古い NAV は、流動性の低い保有銘柄、例えばマトリックス・プライシングされる債券からも生じる。特にストレス時。"
   },
   "fr": {
    "topic": "Prime ≠ mauvaise évaluation",
    "front": "Un ETF d’actions japonaises clôture à New York à 25,30 ; sa NAV, issue de la clôture de Tokyo, vaut 25,00. Quelle est la prime, et est-ce une mauvaise évaluation ?",
    "back": "<div class=\"ans\"><p>\\((25.30-25.00)/25.00=+1.2\\%\\).</p><p>Pas forcément : la NAV est <strong>périmée</strong>. Le prix de l’ETF reflète les nouvelles depuis la clôture de Tokyo ; la NAV rattrape le lendemain.</p></div>",
    "gap": "Des NAV périmées viennent aussi de titres illiquides, p. ex. des obligations évaluées par matrice, surtout en période de tension."
   }
  },
  "pm1-tracking": {
   "zh": {
    "topic": "跟踪差异与跟踪误差",
    "front": "定义跟踪差异和跟踪误差。跟踪误差不能告诉你什么？",
    "back": "<div class=\"ans\"><ul><li><strong>跟踪差异</strong>：一段时期内 ETF 回报 − 指数回报</li><li><strong>跟踪误差</strong>：跟踪差异的<strong>标准差</strong></li></ul><p>它衡量差距的波动程度，而不是差距的<strong>方向或大小</strong>：每年恰好落后 0.5% 的 ETF，跟踪误差为 0。</p></div>",
    "gap": "评价 ETF 时，既要看平均跟踪差异，也要看跟踪误差。"
   },
   "ja": {
    "topic": "トラッキング・ディファレンスとトラッキング・エラー",
    "front": "トラッキング・ディファレンスとトラッキング・エラーを定義せよ。トラッキング・エラーからわからないことは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>トラッキング・ディファレンス</strong>：一定期間の ETF リターン − 指数リターン</li><li><strong>トラッキング・エラー</strong>：トラッキング・ディファレンスの<strong>標準偏差</strong></li></ul><p>差のばらつきを測るもので、差の<strong>方向や大きさ</strong>ではない：毎年ちょうど 0.5% 遅れる ETF のトラッキング・エラーは 0。</p></div>",
    "gap": "ETF は平均トラッキング・ディファレンスとトラッキング・エラーの両方で判断する。"
   },
   "fr": {
    "topic": "Écart de suivi et tracking error",
    "front": "Définissez l’écart de suivi (tracking difference) et la tracking error. Que la tracking error ne dit-elle pas ?",
    "back": "<div class=\"ans\"><ul><li><strong>Écart de suivi</strong> : rendement de l’ETF − rendement de l’indice sur une période</li><li><strong>Tracking error</strong> : l’<strong>écart-type</strong> des écarts de suivi</li></ul><p>Elle mesure la variabilité de l’écart, pas son <strong>sens ni sa taille</strong> : un ETF qui retarde exactement de 0,5 % par an a une tracking error de 0.</p></div>",
    "gap": "Jugez un ETF à la fois sur son écart de suivi moyen et sur sa tracking error."
   }
  },
  "pm1-te-example": {
   "zh": {
    "topic": "跟踪误差例题",
    "front": "ETF A 连续 5 年每年落后指数 0.50%。ETF B 各年差异为 +0.40%、−0.30%、+0.20%、−0.50%、+0.20%。求各自的平均跟踪差异和跟踪误差。",
    "back": "<div class=\"ans\"><ul><li><strong>A</strong>：均值 −0.50%；跟踪误差 <strong>0</strong></li><li><strong>B</strong>：均值 0；离差平方和为 0.58</li></ul><div class=\"eq-block\">$$\\text{TE}_B=\\sqrt{0.58/4}=0.38\\%$$</div><p>A 的跟踪误差更低，但每年损失 0.50%，很可能是费用造成的。</p></div>"
   },
   "ja": {
    "topic": "トラッキング・エラーの計算例",
    "front": "ETF A は 5 年間毎年指数を 0.50% 下回る。ETF B の各年の差は +0.40%、−0.30%、+0.20%、−0.50%、+0.20%。それぞれの平均トラッキング・ディファレンスとトラッキング・エラーを求めよ。",
    "back": "<div class=\"ans\"><ul><li><strong>A</strong>：平均 −0.50%、トラッキング・エラー <strong>0</strong></li><li><strong>B</strong>：平均 0、偏差の 2 乗和は 0.58</li></ul><div class=\"eq-block\">$$\\text{TE}_B=\\sqrt{0.58/4}=0.38\\%$$</div><p>A はトラッキング・エラーが低いが、毎年 0.50% を失っている。おそらく報酬のため。</p></div>"
   },
   "fr": {
    "topic": "Exemple de tracking error",
    "front": "L’ETF A retarde de 0,50 % sur son indice chaque année pendant 5 ans. Les écarts annuels de l’ETF B sont +0,40 %, −0,30 %, +0,20 %, −0,50 %, +0,20 %. Trouvez pour chacun l’écart de suivi moyen et la tracking error.",
    "back": "<div class=\"ans\"><ul><li><strong>A</strong> : moyenne −0,50 % ; tracking error <strong>0</strong></li><li><strong>B</strong> : moyenne 0 ; somme des carrés des écarts 0,58</li></ul><div class=\"eq-block\">$$\\text{TE}_B=\\sqrt{0.58/4}=0.38\\%$$</div><p>A a la tracking error la plus faible mais perd 0,50 % par an, très probablement à cause des frais.</p></div>"
   }
  },
  "pm1-te-sources": {
   "zh": {
    "topic": "跟踪差异的来源",
    "front": "列出跟踪差异的主要来源。哪些可能使 ETF 跑赢指数？",
    "back": "<div class=\"ans\"><ul><li><strong>费用和开支</strong>（最大且持续的拖累）</li><li>代表性抽样 / 优化而非完全复制</li><li>指数变动和再平衡成本</li><li>监管和税收要求（如分散化限制）</li><li>现金拖累；用存托凭证代替当地股票</li><li><strong>证券借贷</strong>收入和<strong>境外股息税收回</strong>：这些会<strong>增加</strong>回报</li></ul></div>",
    "gap": "股息税收回会增加回报，因为指数通常假设承担全额的境外预扣税。"
   },
   "ja": {
    "topic": "トラッキング・ディファレンスの要因",
    "front": "トラッキング・ディファレンスの主な要因を挙げよ。ETF が指数を上回る原因になりうるのはどれか。",
    "back": "<div class=\"ans\"><ul><li><strong>報酬と費用</strong>（最大で恒常的なマイナス要因）</li><li>完全法ではなく層化抽出・最適化法</li><li>指数の変更とリバランスのコスト</li><li>規制・税制上の要件（例：分散の制限）</li><li>キャッシュ・ドラッグ、現地株の代わりの預託証券</li><li><strong>貸株</strong>収入と<strong>外国配当の源泉税の回収</strong>：これらはリターンを<strong>上乗せ</strong>する</li></ul></div>",
    "gap": "指数は通常、外国源泉税を全額負担すると仮定しているので、配当税の回収はリターンを上乗せする。"
   },
   "fr": {
    "topic": "Sources d’écart de suivi",
    "front": "Citez les principales sources d’écart de suivi. Lesquelles peuvent faire battre l’indice à un ETF ?",
    "back": "<div class=\"ans\"><ul><li><strong>Frais et dépenses</strong> (le frein le plus important et constant)</li><li>Échantillonnage représentatif / optimisation au lieu d’une réplication complète</li><li>Changements d’indice et coûts de rééquilibrage</li><li>Contraintes réglementaires et fiscales (p. ex. limites de diversification)</li><li>Poids de la trésorerie ; certificats de dépôt au lieu des actions locales</li><li>Revenus de <strong>prêt de titres</strong> et <strong>récupération de retenues à la source étrangères</strong> : ils <strong>ajoutent</strong> du rendement</li></ul></div>",
    "gap": "La récupération de retenue ajoute du rendement, car l’indice suppose en général la retenue étrangère entière."
   }
  },
  "pm1-tax-fair": {
   "zh": {
    "topic": "税收公平",
    "front": "为什么 ETF 的征税比共同基金更公平？",
    "back": "<div class=\"ans\"><ul><li><strong>共同基金</strong>：赎回迫使基金卖出，实现的收益向<strong>所有剩余持有人</strong>征税，他们还要承担交易成本</li><li><strong>ETF</strong>：大部分交易在交易所投资者之间进行，所以每人只为自己的卖出纳税；AP 赎回是<strong>实物</strong>形式，因此基金内部没有应税事项</li></ul></div>"
   },
   "ja": {
    "topic": "税の公平性",
    "front": "ETF の課税が投資信託より公平なのはなぜか。",
    "back": "<div class=\"ans\"><ul><li><strong>投資信託</strong>：解約によりファンドが売却を迫られ、実現益が<strong>残るすべての保有者</strong>に課税され、取引コストも負担させられる</li><li><strong>ETF</strong>：取引の大半は取引所での投資家同士なので、各自は自分の売却分だけに課税される。AP の交換は<strong>現物</strong>なので、ファンド内では課税されない</li></ul></div>"
   },
   "fr": {
    "topic": "Équité fiscale",
    "front": "Pourquoi la fiscalité des ETF est-elle plus équitable que celle des fonds communs de placement ?",
    "back": "<div class=\"ans\"><ul><li><strong>Fonds commun</strong> : les rachats forcent le fonds à vendre, réalisant des plus-values imposées à <strong>tous les porteurs restants</strong>, qui supportent aussi les coûts de transaction</li><li><strong>ETF</strong> : la plupart des échanges se font entre investisseurs en bourse, chacun n’est donc imposé que sur sa propre vente ; les rachats des AP sont <strong>en nature</strong>, rien n’est donc imposé dans le fonds</li></ul></div>"
   }
  },
  "pm1-tax-eff": {
   "zh": {
    "topic": "税收效率",
    "front": "实物赎回如何使 ETF 具有税收效率？",
    "back": "<div class=\"ans\"><p>赎回时，基金把<strong>成本基础最低</strong>的批次交给 AP。内含的收益<strong>未经实现</strong>就离开了组合，所以分配的资本利得更少，持有人的税负递延到他们卖出时。</p></div>",
    "gap": "收益并没有转给 AP 去纳税。对以现金申购赎回的 ETF，这一好处会缩小。"
   },
   "ja": {
    "topic": "税効率",
    "front": "現物での交換は、どのように ETF の税効率を高めるか。",
    "back": "<div class=\"ans\"><p>交換の際、ファンドは<strong>取得原価が最も低い</strong>ロットを AP に渡す。含み益は<strong>実現されないまま</strong>ポートフォリオから出ていくので、分配されるキャピタル・ゲインが減り、保有者の課税は売却時まで繰り延べられる。</p></div>",
    "gap": "益が AP に移って AP が税を払うわけではない。現金で設定・交換する ETF ではこの利点は小さくなる。"
   },
   "fr": {
    "topic": "Efficacité fiscale",
    "front": "Comment les rachats en nature rendent-ils les ETF fiscalement efficaces ?",
    "back": "<div class=\"ans\"><p>Lors d’un rachat, le fonds remet à l’AP les lots au <strong>prix de revient le plus bas</strong>. Les plus-values latentes sortent du portefeuille <strong>sans être réalisées</strong> : moins de plus-values sont distribuées et l’impôt des porteurs est différé jusqu’à leur vente.</p></div>",
    "gap": "La plus-value n’est pas transmise à l’AP pour qu’il paie l’impôt. L’avantage diminue pour les ETF qui créent et rachètent en espèces."
   }
  },
  "pm1-fees": {
   "zh": {
    "topic": "ETF 费用",
    "front": "为什么 ETF 费用一般低于共同基金？是什么让不同 ETF 的费用不同？",
    "back": "<div class=\"ans\"><p>大多数 ETF 基于指数，且不承担股东账户和分销成本。</p><ul><li><strong>组合复杂度</strong>：利基、国际和主动型成本更高</li><li><strong>发行人规模</strong>：规模经济</li><li><strong>竞争格局</strong>：宽基指数 ETF 的费率战</li></ul></div>"
   },
   "ja": {
    "topic": "ETF の報酬",
    "front": "ETF の報酬が一般に投資信託より低いのはなぜか。ETF 間で報酬が異なるのはなぜか。",
    "back": "<div class=\"ans\"><p>ほとんどの ETF は指数ベースで、受益者の口座管理や販売のコストを負担しない。</p><ul><li><strong>ポートフォリオの複雑さ</strong>：ニッチ、海外、アクティブはコストが高い</li><li><strong>発行体の規模</strong>：規模の経済</li><li><strong>競争環境</strong>：広範な指数の ETF での報酬引き下げ競争</li></ul></div>"
   },
   "fr": {
    "topic": "Frais des ETF",
    "front": "Pourquoi les frais des ETF sont-ils généralement plus bas que ceux des fonds communs, et qu’est-ce qui les fait varier d’un ETF à l’autre ?",
    "back": "<div class=\"ans\"><p>La plupart des ETF sont indiciels et ne supportent pas les coûts de tenue des comptes des porteurs ni de distribution.</p><ul><li><strong>Complexité du portefeuille</strong> : niche, international et actif coûtent plus</li><li><strong>Taille de l’émetteur</strong> : économies d’échelle</li><li><strong>Paysage concurrentiel</strong> : guerre des frais sur les ETF d’indices larges</li></ul></div>"
   }
  },
  "pm1-total-cost": {
   "zh": {
    "topic": "总持有成本",
    "front": "写出往返交易成本和持有 ETF 的总成本。对短线交易者而言哪项成本更重要？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{RT}=2\\left(\\text{Commission}+\\tfrac12\\,\\text{Spread}\\right)$$</div><div class=\"eq-block\">$$\\begin{aligned}\\text{Total}={}&\\text{RT}\\\\&+\\text{Expense ratio}\\times T\\end{aligned}$$</div><p>交易成本只付一次，费用率每年都付：短期持有偏好低<strong>交易成本</strong>，长期持有偏好低<strong>费用率</strong>。</p></div>",
    "gap": "每次单边交易用买卖价差的一半。"
   },
   "ja": {
    "topic": "保有の総コスト",
    "front": "往復の取引コストと ETF 保有の総コストを示せ。短期売買の投資家にとって重要なのはどちらのコストか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{RT}=2\\left(\\text{Commission}+\\tfrac12\\,\\text{Spread}\\right)$$</div><div class=\"eq-block\">$$\\begin{aligned}\\text{Total}={}&\\text{RT}\\\\&+\\text{Expense ratio}\\times T\\end{aligned}$$</div><p>取引コストは 1 回、経費率は毎年かかる：短期保有なら低い<strong>取引コスト</strong>、長期保有なら低い<strong>経費率</strong>が有利。</p></div>",
    "gap": "片道の取引ごとにビッド・アスク・スプレッドの半分を使う。"
   },
   "fr": {
    "topic": "Coût total de détention",
    "front": "Écrivez le coût de transaction aller-retour et le coût total de détention d’un ETF. Quel coût compte le plus pour un investisseur à court terme ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{RT}=2\\left(\\text{Commission}+\\tfrac12\\,\\text{Spread}\\right)$$</div><div class=\"eq-block\">$$\\begin{aligned}\\text{Total}={}&\\text{RT}\\\\&+\\text{Expense ratio}\\times T\\end{aligned}$$</div><p>Les coûts de transaction se paient une fois, les frais courants chaque année : une détention courte favorise de faibles <strong>coûts de transaction</strong>, une détention longue de faibles <strong>frais courants</strong>.</p></div>",
    "gap": "Utilisez la moitié de la fourchette par transaction simple."
   }
  },
  "pm1-cost-example": {
   "zh": {
    "topic": "总成本例题",
    "front": "单边佣金 0.05%。ETF A：价差 0.10%，费用率 0.20%。ETF B：价差 0.30%，费用率 0.09%。9 个月和 5 年哪个更便宜？盈亏平衡点在哪里？",
    "back": "<div class=\"ans\"><p>往返成本：A \\(=0.20\\%\\)，B \\(=0.40\\%\\)。</p><ul><li>9 个月：A \\(=0.35\\%\\)，B \\(=0.4675\\%\\)：<strong>A</strong></li><li>5 年：A \\(=1.20\\%\\)，B \\(=0.85\\%\\)：<strong>B</strong></li></ul><div class=\"eq-block\">$$t=\\frac{0.40\\%-0.20\\%}{0.20\\%-0.09\\%}=1.82\\text{ yrs}$$</div></div>"
   },
   "ja": {
    "topic": "総コストの計算例",
    "front": "片道手数料 0.05%。ETF A：スプレッド 0.10%、経費率 0.20%。ETF B：スプレッド 0.30%、経費率 0.09%。9 か月と 5 年ではどちらが安いか。損益分岐はどこか。",
    "back": "<div class=\"ans\"><p>往復：A \\(=0.20\\%\\)、B \\(=0.40\\%\\)。</p><ul><li>9 か月：A \\(=0.35\\%\\)、B \\(=0.4675\\%\\)：<strong>A</strong></li><li>5 年：A \\(=1.20\\%\\)、B \\(=0.85\\%\\)：<strong>B</strong></li></ul><div class=\"eq-block\">$$t=\\frac{0.40\\%-0.20\\%}{0.20\\%-0.09\\%}=1.82\\text{ yrs}$$</div></div>"
   },
   "fr": {
    "topic": "Exemple de coût total",
    "front": "Commission de 0,05 % par sens. ETF A : fourchette 0,10 %, frais courants 0,20 %. ETF B : fourchette 0,30 %, frais 0,09 %. Lequel est le moins cher sur 9 mois et sur 5 ans ? Où est le point mort ?",
    "back": "<div class=\"ans\"><p>Allers-retours : A \\(=0.20\\%\\), B \\(=0.40\\%\\).</p><ul><li>9 mois : A \\(=0.35\\%\\), B \\(=0.4675\\%\\) : <strong>A</strong></li><li>5 ans : A \\(=1.20\\%\\), B \\(=0.85\\%\\) : <strong>B</strong></li></ul><div class=\"eq-block\">$$t=\\frac{0.40\\%-0.20\\%}{0.20\\%-0.09\\%}=1.82\\text{ yrs}$$</div></div>"
   }
  },
  "pm1-liquidity": {
   "zh": {
    "topic": "高效的组合管理",
    "front": "给出 ETF 在流动性管理、补缺和过渡管理中的用途。",
    "back": "<div class=\"ans\"><ul><li><strong>现金股票化</strong>：使基金保持满仓，避免现金拖累</li><li>快速、低成本地<strong>再平衡</strong>；作为应对<strong>赎回</strong>的流动性部分</li><li><strong>补缺</strong>：填补主动管理人留下的空缺（行业、地区、因子）</li><li><strong>过渡管理</strong>：在更换管理人期间保持对该资产类别的敞口</li></ul></div>"
   },
   "ja": {
    "topic": "効率的なポートフォリオ運用",
    "front": "流動性管理、補完、移行管理における ETF の用途を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>キャッシュのエクイティ化</strong>：ファンドをフル・インベストに保ち、キャッシュ・ドラッグを避ける</li><li>迅速かつ低コストな<strong>リバランス</strong>。<strong>解約</strong>に備えた流動性の部分</li><li><strong>補完</strong>：アクティブ・マネジャーが残すギャップ（セクター、地域、ファクター）を埋める</li><li><strong>移行管理</strong>：マネジャー交代の間、資産クラスへのエクスポージャーを保つ</li></ul></div>"
   },
   "fr": {
    "topic": "Gestion efficace du portefeuille",
    "front": "Donnez les usages des ETF pour la gestion de la liquidité, la complétion et la gestion de transition.",
    "back": "<div class=\"ans\"><ul><li><strong>Investissement de la trésorerie</strong> : garder le fonds entièrement investi, sans poids de la trésorerie</li><li><strong>Rééquilibrer</strong> vite et à peu de frais ; une poche liquide pour faire face aux <strong>rachats</strong></li><li><strong>Complétion</strong> : combler les manques (secteur, région, facteur) laissés par les gérants actifs</li><li><strong>Gestion de transition</strong> : conserver l’exposition à la classe d’actifs pendant le remplacement d’un gérant</li></ul></div>"
   }
  },
  "pm1-exposure": {
   "zh": {
    "topic": "资产类别、主动与因子用途",
    "front": "ETF 在组合管理中还有哪些用途？",
    "back": "<div class=\"ans\"><ul><li><strong>资产类别敞口</strong>：快速、低成本的核心持仓，以及战术或战略配置调整，包括难以进入的资产类别（国际股票、债券、大宗商品）</li><li><strong>主动与因子投资</strong>：聪明贝塔（价值、动量、低波动）、主题、ESG 和主动 ETF；对冲与风险管理</li></ul></div>"
   },
   "ja": {
    "topic": "資産クラス、アクティブ、ファクターでの活用",
    "front": "ETF はポートフォリオ運用で他にどう使われるか。",
    "back": "<div class=\"ans\"><ul><li><strong>資産クラスへのエクスポージャー</strong>：迅速で低コストなコア保有と、戦術的・戦略的な配分変更。投資しにくい資産クラス（海外株式、債券、コモディティ）も含む</li><li><strong>アクティブ投資とファクター投資</strong>：スマート・ベータ（バリュー、モメンタム、低ボラティリティ）、テーマ、ESG、アクティブ ETF。ヘッジとリスク管理</li></ul></div>"
   },
   "fr": {
    "topic": "Usages par classe d’actifs, actifs et factoriels",
    "front": "À quoi d’autre servent les ETF en gestion de portefeuille ?",
    "back": "<div class=\"ans\"><ul><li><strong>Exposition aux classes d’actifs</strong> : positions cœur rapides et peu coûteuses, et ajustements d’allocation tactiques ou stratégiques, y compris pour des classes difficiles d’accès (actions internationales, obligations, matières premières)</li><li><strong>Gestion active et factorielle</strong> : smart beta (value, momentum, faible volatilité), thématiques, ESG et ETF actifs ; couverture et gestion des risques</li></ul></div>"
   }
  },
  "pm1-sma": {
   "zh": {
    "topic": "ETF 与独立管理账户",
    "front": "为什么大型资产所有者可能更喜欢独立管理账户（SMA）而不是 ETF？",
    "back": "<div class=\"ans\"><ul><li><strong>费用</strong>：SMA 费用可以协商；ETF 费用是固定的</li><li><strong>定制</strong>：SMA 可以定制（ESG 排除、税损收割）</li><li><strong>透明度</strong>：ETF 必须<strong>披露持仓</strong>（常为每日），使主动策略面临被抢先交易的风险</li></ul></div>",
    "gap": "必须披露的是持仓，而不只是策略。"
   },
   "ja": {
    "topic": "ETF と SMA",
    "front": "大口の資産保有者が ETF より SMA（ラップ口座などの個別運用口座）を好むことがあるのはなぜか。",
    "back": "<div class=\"ans\"><ul><li><strong>報酬</strong>：SMA の報酬は交渉できる。ETF の報酬は固定</li><li><strong>カスタマイズ</strong>：SMA は個別に調整できる（ESG による除外、タックス・ロス・ハーベスティング）</li><li><strong>透明性</strong>：ETF は<strong>保有銘柄を開示</strong>しなければならず（多くは毎日）、アクティブ戦略がフロントランニングにさらされる</li></ul></div>",
    "gap": "開示しなければならないのは戦略だけでなく保有銘柄。"
   },
   "fr": {
    "topic": "ETF ou mandat de gestion",
    "front": "Pourquoi un grand détenteur d’actifs pourrait-il préférer un compte géré séparément (SMA) à un ETF ?",
    "back": "<div class=\"ans\"><ul><li><strong>Frais</strong> : les frais d’un SMA sont négociables ; ceux d’un ETF sont fixes</li><li><strong>Personnalisation</strong> : un SMA peut être adapté (exclusions ESG, récolte de moins-values fiscales)</li><li><strong>Transparence</strong> : les ETF doivent <strong>publier leurs positions</strong> (souvent chaque jour), exposant les stratégies actives au front-running</li></ul></div>",
    "gap": "Ce sont les positions qui doivent être publiées, pas seulement la stratégie."
   }
  }
 }
});
