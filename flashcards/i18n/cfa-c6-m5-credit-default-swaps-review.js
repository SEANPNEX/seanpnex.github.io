deckI18n({
 "source": {
  "zh": "CFA 二级 固定收益 · M5 信用违约互换 · 单元复习",
  "ja": "CFA レベル II 債券 · M5 クレジット・デフォルト・スワップ · 単元の復習",
  "fr": "CFA niveau II Titres à revenu fixe · M5 Credit default swaps · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "fi5-def": {
   "zh": {
    "topic": "CDS · 买方与卖方",
    "front": "什么是信用违约互换？哪一方是“多头”，哪一方是“空头”？为什么？",
    "back": "<div class=\"ans\"><p>一种以参考实体<strong>信用质量</strong>为标的的信用衍生品，作用类似保险。</p><ul><li><strong>保护买方</strong>：定期支付保费；信用恶化时获利：<strong>做空</strong>信用风险</li><li><strong>保护卖方</strong>：发生信用事件时补偿买方；信用改善时获利：<strong>做多</strong>信用风险</li></ul></div>",
    "gap": "“买入 CDS”意味着买入保护，也就是空头一方。"
   },
   "ja": {
    "topic": "CDS · 買い手と売り手",
    "front": "クレジット・デフォルト・スワップとは何か。どちらが「ロング」でどちらが「ショート」か。なぜか。",
    "back": "<div class=\"ans\"><p>参照企業の<strong>信用力</strong>を対象とするクレジット・デリバティブで、保険のように機能する。</p><ul><li><strong>プロテクションの買い手</strong>：定期的にプレミアムを払う。信用が悪化すると得をする：信用リスクを<strong>ショート</strong></li><li><strong>プロテクションの売り手</strong>：信用事由が起きたら買い手に補償する。信用が改善すると得をする：信用リスクを<strong>ロング</strong></li></ul></div>",
    "gap": "「CDS を買う」とはプロテクションを買うことで、ショート側になる。"
   },
   "fr": {
    "topic": "CDS · acheteur et vendeur",
    "front": "Qu’est-ce qu’un credit default swap ? Quel côté est « long » et lequel « court », et pourquoi ?",
    "back": "<div class=\"ans\"><p>Un dérivé de crédit portant sur la <strong>qualité de crédit</strong> d’une entité de référence, qui fonctionne comme une assurance.</p><ul><li><strong>Acheteur de protection</strong> : paie des primes périodiques ; gagne si le crédit se dégrade : <strong>court</strong> sur le risque de crédit</li><li><strong>Vendeur de protection</strong> : indemnise l’acheteur en cas d’événement de crédit ; gagne si le crédit s’améliore : <strong>long</strong> sur le risque de crédit</li></ul></div>",
    "gap": "« Acheter un CDS » signifie acheter une protection, c’est-à-dire le côté court."
   }
  },
  "fi5-spread": {
   "zh": {
    "topic": "CDS 利差",
    "front": "CDS 利差补偿卖方什么？如何近似？求风险率 2%、回收率 40% 时的利差。",
    "back": "<div class=\"ans\"><p>预期损失，取决于<strong>风险率</strong>和<strong>违约损失率</strong>。</p><div class=\"eq-block\">$$\\text{Spread}\\approx\\text{Hazard rate}\\times\\text{LGD}$$</div><p>\\(2\\%\\times60\\%=1.2\\%\\)，按名义本金每年计。</p></div>"
   },
   "ja": {
    "topic": "CDS スプレッド",
    "front": "CDS スプレッドは売り手に何を補償するか。どう近似するか。ハザード・レート 2%、回収率 40% で求めよ。",
    "back": "<div class=\"ans\"><p>期待損失で、<strong>ハザード・レート</strong>と<strong>デフォルト時損失率</strong>で決まる。</p><div class=\"eq-block\">$$\\text{Spread}\\approx\\text{Hazard rate}\\times\\text{LGD}$$</div><p>想定元本に対して年 \\(2\\%\\times60\\%=1.2\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Spread de CDS",
    "front": "Que rémunère le spread de CDS pour le vendeur, et comment l’approcher ? Calculez-le pour un taux de hasard de 2 % et un recouvrement de 40 %.",
    "back": "<div class=\"ans\"><p>La perte attendue, qui dépend du <strong>taux de hasard</strong> et de la <strong>perte en cas de défaut</strong>.</p><div class=\"eq-block\">$$\\text{Spread}\\approx\\text{Hazard rate}\\times\\text{LGD}$$</div><p>\\(2\\%\\times60\\%=1.2\\%\\) par an sur le notionnel.</p></div>"
   }
  },
  "fi5-credit-events": {
   "zh": {
    "topic": "信用事件",
    "front": "说出三种信用事件，以及由谁判定是否发生。",
    "back": "<div class=\"ans\"><ul><li><strong>破产</strong></li><li>未能支付利息或本金（宽限期后）的<strong>违约支付</strong></li><li><strong>重组</strong>：损害债权人利益的非自愿条款变更</li></ul><p>由交易商和投资者组成的 ISDA <strong>判定委员会</strong>决定。</p></div>",
    "gap": "标准北美公司 CDS 通常不包括重组，但许多欧洲 CDS 包括。"
   },
   "ja": {
    "topic": "信用事由",
    "front": "3 つの信用事由と、それが起きたかを誰が判断するかを挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>破産</strong></li><li>利息または元本の<strong>支払不履行</strong>（猶予期間後）</li><li><strong>リストラクチャリング</strong>：債権者に不利な、非自発的な条件変更</li></ul><p>ディーラーと投資家からなる ISDA の<strong>決定委員会</strong>が判断する。</p></div>",
    "gap": "北米の標準的な社債 CDS では通常リストラクチャリングは除外されるが、欧州の多くでは含まれる。"
   },
   "fr": {
    "topic": "Événements de crédit",
    "front": "Citez les trois événements de crédit et qui décide s’ils se sont produits.",
    "back": "<div class=\"ans\"><ul><li><strong>Faillite</strong></li><li><strong>Défaut de paiement</strong> des intérêts ou du principal (après l’éventuel délai de grâce)</li><li><strong>Restructuration</strong> : modification involontaire des conditions au détriment des créanciers</li></ul><p>Un <strong>Determinations Committee</strong> de l’ISDA, composé de courtiers et d’investisseurs, décide.</p></div>",
    "gap": "La restructuration est généralement exclue des CDS d’entreprise nord-américains standard, mais incluse dans beaucoup de CDS européens."
   }
  },
  "fi5-settlement": {
   "zh": {
    "topic": "结算",
    "front": "比较实物结算和现金结算。写出赔付金额。",
    "back": "<div class=\"ans\"><ul><li><strong>实物</strong>：买方交付违约债务，收取<strong>名义本金</strong></li><li><strong>现金</strong>（最常见）：卖方支付赔付金额；回收率由<strong>拍卖</strong>确定</li></ul><div class=\"eq-block\">$$\\text{Payout}=\\text{Notional}\\times(1-\\text{RR})$$</div></div>",
    "gap": "赔付比例 1 − 回收率就是 LGD。两种方式下买方最终都得到名义本金。"
   },
   "ja": {
    "topic": "決済",
    "front": "現物決済と現金決済を比較せよ。支払額を示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>現物</strong>：買い手がデフォルトした債務を引き渡し、<strong>想定元本</strong>を受け取る</li><li><strong>現金</strong>（最も一般的）：売り手が支払額を払う。回収率は<strong>オークション</strong>で決まる</li></ul><div class=\"eq-block\">$$\\text{Payout}=\\text{Notional}\\times(1-\\text{RR})$$</div></div>",
    "gap": "支払比率 1 − 回収率が LGD。どちらの方法でも買い手の手元には想定元本が残る。"
   },
   "fr": {
    "topic": "Règlement",
    "front": "Comparez règlement physique et règlement en espèces. Écrivez le montant versé.",
    "back": "<div class=\"ans\"><ul><li><strong>Physique</strong> : l’acheteur livre la dette en défaut et reçoit le <strong>notionnel</strong></li><li><strong>En espèces</strong> (le plus courant) : le vendeur verse le montant dû ; le recouvrement est fixé par une <strong>enchère</strong></li></ul><div class=\"eq-block\">$$\\text{Payout}=\\text{Notional}\\times(1-\\text{RR})$$</div></div>",
    "gap": "Le ratio de paiement, 1 − taux de recouvrement, est la LGD. Les deux méthodes laissent l’acheteur avec le notionnel."
   }
  },
  "fi5-single-name": {
   "zh": {
    "topic": "单一名称 CDS · 覆盖范围",
    "front": "在单一名称 CDS 中，除参考债务外还覆盖哪些债务？什么是最便宜可交割债务？",
    "back": "<div class=\"ans\"><ul><li>参考债务通常是<strong>优先无担保</strong>债务</li><li><strong>同级或更高优先级的任何债务</strong>都被覆盖</li><li>赔付由<strong>最便宜可交割</strong>债务决定：被覆盖级别中价格最低、由买方交付的债务</li></ul></div>"
   },
   "ja": {
    "topic": "シングルネーム CDS · カバー範囲",
    "front": "シングルネーム CDS では参照債務以外にどの債務がカバーされるか。最割安受渡債務とは何か。",
    "back": "<div class=\"ans\"><ul><li>参照債務は通常<strong>シニア無担保</strong></li><li><strong>同順位以上のあらゆる債務</strong>がカバーされる</li><li>ペイオフは<strong>最割安受渡</strong>債務で決まる：カバーされる順位で最も価格の低い債務で、買い手が引き渡す</li></ul></div>"
   },
   "fr": {
    "topic": "CDS mono-entité · couverture",
    "front": "Dans un CDS mono-entité, quelle dette est couverte au-delà de l’obligation de référence, et qu’est-ce que l’obligation la moins chère à livrer ?",
    "back": "<div class=\"ans\"><ul><li>L’obligation de référence est généralement <strong>senior non garantie</strong></li><li><strong>Toute dette de rang égal ou supérieur</strong> est couverte</li><li>Le paiement dépend de la <strong>moins chère à livrer</strong> : la dette au prix le plus bas au rang couvert, que l’acheteur livre</li></ul></div>"
   }
  },
  "fi5-ctd-example": {
   "zh": {
    "topic": "最便宜可交割债务例题",
    "front": "买入 1,000 万的保护；公司违约，两只优先无担保债券分别交易于 38 和 42。买方得到多少？",
    "back": "<div class=\"ans\"><p>最便宜可交割债务为 38，所以回收率为 38%：</p><div class=\"eq-block\">$$10\\text{m}\\times(1-38\\%)=6.2\\text{m}$$</div><p>实物结算：交付面值 1,000 万的 38 债券（价值 380 万），收取 1,000 万：净额同样是 620 万。</p></div>"
   },
   "ja": {
    "topic": "最割安受渡債務の計算例",
    "front": "1,000 万のプロテクション。企業がデフォルトし、2 本のシニア無担保債が 38 と 42 で取引されている。買い手はいくら受け取るか。",
    "back": "<div class=\"ans\"><p>最割安受渡は 38 なので回収率は 38%：</p><div class=\"eq-block\">$$10\\text{m}\\times(1-38\\%)=6.2\\text{m}$$</div><p>現物決済：額面 1,000 万の 38 の債券（価値 380 万）を渡し、1,000 万を受け取る：正味は同じ 620 万。</p></div>"
   },
   "fr": {
    "topic": "Exemple de la moins chère à livrer",
    "front": "10 millions de protection ; la société fait défaut et deux obligations senior non garanties cotent 38 et 42. Que reçoit l’acheteur ?",
    "back": "<div class=\"ans\"><p>La moins chère à livrer cote 38 : le recouvrement est de 38 % :</p><div class=\"eq-block\">$$10\\text{m}\\times(1-38\\%)=6.2\\text{m}$$</div><p>Physique : livrer 10m de nominal de l’obligation à 38 (valeur 3,8m), recevoir 10m : le même 6,2m net.</p></div>"
   }
  },
  "fi5-index": {
   "zh": {
    "topic": "指数 CDS",
    "front": "指数 CDS（CDX、iTraxx）如何分配覆盖？其价值取决于什么？",
    "back": "<div class=\"ans\"><ul><li>覆盖<strong>平均</strong>分配：125 个名称各占名义本金的 1/125</li><li>发生违约时，卖方按该名称的份额赔付；合约在<strong>名义本金减少</strong>后继续</li><li>价值取决于<strong>信用相关性</strong>：相关性越高，联合违约及保护越有价值</li></ul></div>"
   },
   "ja": {
    "topic": "インデックス CDS",
    "front": "インデックス CDS（CDX、iTraxx）はカバーをどう配分するか。その価値は何に依存するか。",
    "back": "<div class=\"ans\"><ul><li>カバーは<strong>均等</strong>に配分：125 銘柄がそれぞれ想定元本の 1/125</li><li>デフォルトが起きると売り手はその銘柄の持分について支払い、契約は<strong>想定元本を減らして</strong>継続する</li><li>価値は<strong>信用相関</strong>に依存：相関が高いほど同時デフォルト、したがってプロテクションの価値が高い</li></ul></div>"
   },
   "fr": {
    "topic": "CDS sur indice",
    "front": "Comment un CDS sur indice (CDX, iTraxx) répartit-il la couverture, et de quoi dépend sa valeur ?",
    "back": "<div class=\"ans\"><ul><li>Couverture répartie <strong>uniformément</strong> : chacune des 125 entités porte 1/125 du notionnel</li><li>En cas de défaut, le vendeur paie sur la part de cette entité ; le contrat continue avec un <strong>notionnel réduit</strong></li><li>La valeur dépend de la <strong>corrélation de crédit</strong> : plus elle est forte, plus les défauts conjoints, et donc la protection, valent cher</li></ul></div>"
   }
  },
  "fi5-index-example": {
   "zh": {
    "topic": "指数 CDS 例题",
    "front": "对 CDX（125 个名称）买入保护，名义本金 1 亿。其中一个名称违约，回收率 40%。求赔付和剩余名义本金。",
    "back": "<div class=\"ans\"><p>每个名称的份额：\\(100\\text{m}/125=0.8\\text{m}\\)。</p><div class=\"eq-block\">$$0.8\\text{m}\\times(1-40\\%)=480{,}000$$</div><p>名义本金降至 9,920 万。</p></div>"
   },
   "ja": {
    "topic": "インデックス CDS の計算例",
    "front": "CDX（125 銘柄）でプロテクションを買う。想定元本 1 億。1 銘柄が回収率 40% でデフォルト。支払額と残りの想定元本を求めよ。",
    "back": "<div class=\"ans\"><p>1 銘柄の持分：\\(100\\text{m}/125=0.8\\text{m}\\)。</p><div class=\"eq-block\">$$0.8\\text{m}\\times(1-40\\%)=480{,}000$$</div><p>想定元本は 9,920 万に減る。</p></div>"
   },
   "fr": {
    "topic": "Exemple de CDS sur indice",
    "front": "Protection sur le CDX (125 entités), notionnel 100 millions. Une entité fait défaut avec 40 % de recouvrement. Trouvez le paiement et le notionnel restant.",
    "back": "<div class=\"ans\"><p>Part de chaque entité : \\(100\\text{m}/125=0.8\\text{m}\\).</p><div class=\"eq-block\">$$0.8\\text{m}\\times(1-40\\%)=480{,}000$$</div><p>Le notionnel tombe à 99,2 millions.</p></div>"
   }
  },
  "fi5-other-types": {
   "zh": {
    "topic": "分层 CDS 与 CDS 期权",
    "front": "什么是分层 CDS 和 CDS 互换期权？",
    "back": "<div class=\"ans\"><ul><li><strong>分层 CDS</strong>：只覆盖指数损失的一部分（如 0–3%），类似 CDO 分层</li><li><strong>CDS 互换期权</strong>：在未来以固定利差买入或卖出保护的期权</li></ul></div>"
   },
   "ja": {
    "topic": "トランシェ CDS と CDS オプション",
    "front": "トランシェ CDS と CDS スワップションとは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>トランシェ CDS</strong>：インデックスの損失の一部（例：0–3%）だけをカバーする。CDO のトランシェに似る</li><li><strong>CDS スワップション</strong>：将来、固定スプレッドでプロテクションを買うまたは売るオプション</li></ul></div>"
   },
   "fr": {
    "topic": "CDS sur tranche et options sur CDS",
    "front": "Que sont un CDS sur tranche et une swaption sur CDS ?",
    "back": "<div class=\"ans\"><ul><li><strong>CDS sur tranche</strong> : ne couvre qu’une tranche des pertes d’un indice (p. ex. 0–3 %), comme une tranche de CDO</li><li><strong>Swaption sur CDS</strong> : une option d’acheter ou de vendre une protection à un spread fixe à l’avenir</li></ul></div>"
   }
  },
  "fi5-standard": {
   "zh": {
    "topic": "标准票息与预付款",
    "front": "CDS 的标准票息是多少？与市场利差的差额如何结算？",
    "back": "<div class=\"ans\"><p>投资级为 <strong>1%</strong>，高收益为 <strong>5%</strong>。与要求信用利差的差额通过<strong>预付款</strong>结算：</p><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}={}&\\text{PV(protection)}\\\\&-\\text{PV(premium)}\\end{aligned}$$</div></div>",
    "gap": "考试中不会给出 1% 和 5% 的票息：要记住。"
   },
   "ja": {
    "topic": "標準クーポンとアップフロント",
    "front": "CDS の標準クーポンは何か。市場スプレッドとの差はどう決済されるか。",
    "back": "<div class=\"ans\"><p>投資適格は <strong>1%</strong>、ハイイールドは <strong>5%</strong>。要求される信用スプレッドとの差は<strong>アップフロント</strong>で決済する：</p><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}={}&\\text{PV(protection)}\\\\&-\\text{PV(premium)}\\end{aligned}$$</div></div>",
    "gap": "試験では 1% と 5% のクーポンは与えられない：覚えておく。"
   },
   "fr": {
    "topic": "Coupons standard et paiement initial",
    "front": "Quels sont les coupons standard des CDS, et comment l’écart avec le spread de marché est-il réglé ?",
    "back": "<div class=\"ans\"><p><strong>1 %</strong> pour l’investment grade, <strong>5 %</strong> pour le high yield. L’écart avec le spread de crédit exigé est réglé par un <strong>paiement initial (upfront)</strong> :</p><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}={}&\\text{PV(protection)}\\\\&-\\text{PV(premium)}\\end{aligned}$$</div></div>",
    "gap": "Les coupons de 1 % et 5 % ne sont pas fournis à l’examen : retenez-les."
   }
  },
  "fi5-legs": {
   "zh": {
    "topic": "保护腿与保费腿",
    "front": "保护腿和保费腿分别如何估值？",
    "back": "<div class=\"ans\"><ul><li><strong>保护腿</strong>：预期赔付，\\(\\sum\\text{POD}_t\\times\\text{LGD}\\times\\text{DF}_t\\)（即 CVA）</li><li><strong>保费腿</strong>：只在实体存续时支付的票息，\\(\\sum\\text{POS}_t\\times\\text{Coupon}\\times\\text{DF}_t\\)</li></ul></div>"
   },
   "ja": {
    "topic": "プロテクション・レグとプレミアム・レグ",
    "front": "プロテクション・レグとプレミアム・レグはそれぞれどう評価するか。",
    "back": "<div class=\"ans\"><ul><li><strong>プロテクション・レグ</strong>：期待支払額、\\(\\sum\\text{POD}_t\\times\\text{LGD}\\times\\text{DF}_t\\)（CVA）</li><li><strong>プレミアム・レグ</strong>：企業が存続している間だけ支払うクーポン、\\(\\sum\\text{POS}_t\\times\\text{Coupon}\\times\\text{DF}_t\\)</li></ul></div>"
   },
   "fr": {
    "topic": "Jambes protection et prime",
    "front": "Comment évalue-t-on la jambe de protection et la jambe de prime ?",
    "back": "<div class=\"ans\"><ul><li><strong>Jambe de protection</strong> : paiements attendus, \\(\\sum\\text{POD}_t\\times\\text{LGD}\\times\\text{DF}_t\\) (la CVA)</li><li><strong>Jambe de prime</strong> : coupons versés seulement tant que l’entité survit, \\(\\sum\\text{POS}_t\\times\\text{Coupon}\\times\\text{DF}_t\\)</li></ul></div>"
   }
  },
  "fi5-upfront": {
   "zh": {
    "topic": "预付保费与价格",
    "front": "写出预付保费的近似式和 CDS 价格。卖方何时向买方付款？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}\\approx{}&(\\text{Spread}-\\text{Coupon})\\\\&\\times\\text{CDS duration}\\end{aligned}$$</div><div class=\"eq-block\">$$\\text{Price}=100-\\text{Upfront (\\%)}$$</div><p>为正：<strong>买方</strong>付款。为负（票息高于利差）：<strong>卖方</strong>向买方付款，价格高于 100。</p></div>"
   },
   "ja": {
    "topic": "アップフロント・プレミアムと価格",
    "front": "アップフロント・プレミアムの近似式と CDS 価格を示せ。売り手が買い手に支払うのはいつか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}\\approx{}&(\\text{Spread}-\\text{Coupon})\\\\&\\times\\text{CDS duration}\\end{aligned}$$</div><div class=\"eq-block\">$$\\text{Price}=100-\\text{Upfront (\\%)}$$</div><p>プラス：<strong>買い手</strong>が支払う。マイナス（クーポンがスプレッドを上回る）：<strong>売り手</strong>が買い手に支払い、価格は 100 を上回る。</p></div>"
   },
   "fr": {
    "topic": "Prime initiale et prix",
    "front": "Écrivez l’approximation de la prime initiale et le prix du CDS. Quand le vendeur paie-t-il l’acheteur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Upfront}\\approx{}&(\\text{Spread}-\\text{Coupon})\\\\&\\times\\text{CDS duration}\\end{aligned}$$</div><div class=\"eq-block\">$$\\text{Price}=100-\\text{Upfront (\\%)}$$</div><p>Positive : l’<strong>acheteur</strong> paie. Négative (coupon supérieur au spread) : le <strong>vendeur</strong> paie l’acheteur, et le prix dépasse 100.</p></div>"
   }
  },
  "fi5-upfront-example": {
   "zh": {
    "topic": "预付保费例题",
    "front": "买入 1,000 万的 5 年期保护。(1) 投资级：利差 1.80%，久期 4.5。(2) 高收益：利差 3.20%，久期 4.2。求各自的预付保费和价格。",
    "back": "<div class=\"ans\"><ul><li>(1) \\((1.80\\%-1\\%)\\times4.5=3.60\\%\\)：买方支付 360,000；价格 96.40</li><li>(2) \\((3.20\\%-5\\%)\\times4.2=-7.56\\%\\)：卖方支付 756,000；价格 107.56</li></ul></div>"
   },
   "ja": {
    "topic": "アップフロント・プレミアムの計算例",
    "front": "5 年プロテクション 1,000 万。(1) 投資適格：スプレッド 1.80%、デュレーション 4.5。(2) ハイイールド：スプレッド 3.20%、デュレーション 4.2。それぞれのアップフロントと価格を求めよ。",
    "back": "<div class=\"ans\"><ul><li>(1) \\((1.80\\%-1\\%)\\times4.5=3.60\\%\\)：買い手が 360,000 を支払う、価格 96.40</li><li>(2) \\((3.20\\%-5\\%)\\times4.2=-7.56\\%\\)：売り手が 756,000 を支払う、価格 107.56</li></ul></div>"
   },
   "fr": {
    "topic": "Exemple de prime initiale",
    "front": "10 millions de protection à 5 ans. (1) Investment grade : spread 1,80 %, duration 4,5. (2) High yield : spread 3,20 %, duration 4,2. Trouvez chaque prime initiale et prix.",
    "back": "<div class=\"ans\"><ul><li>(1) \\((1.80\\%-1\\%)\\times4.5=3.60\\%\\) : l’acheteur paie 360 000 ; prix 96,40</li><li>(2) \\((3.20\\%-5\\%)\\times4.2=-7.56\\%\\) : le vendeur paie 756 000 ; prix 107,56</li></ul></div>"
   }
  },
  "fi5-profit": {
   "zh": {
    "topic": "CDS 的损益",
    "front": "利差变化时，CDS 头寸如何盈亏？一位买入 1,000 万保护（久期 4.5）的买方看到利差从 1.80% 扩大到 2.40%。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Profit}\\approx{}&\\Delta\\text{Spread}\\times D\\\\&\\times\\text{Notional}\\end{aligned}$$</div><p>买方获利 \\(0.60\\%\\times4.5\\times10\\text{m}=270{,}000\\)；卖方损失相同金额。</p></div>",
    "gap": "利差扩大时买方获利，收窄时卖方获利。可通过反向 CDS 提前实现收益。"
   },
   "ja": {
    "topic": "CDS の損益",
    "front": "スプレッドが変わると CDS のポジションはどう損益が出るか。1,000 万のプロテクション（デュレーション 4.5）の買い手が、スプレッドが 1.80% から 2.40% に拡大するのを見る。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Profit}\\approx{}&\\Delta\\text{Spread}\\times D\\\\&\\times\\text{Notional}\\end{aligned}$$</div><p>買い手の利益 \\(0.60\\%\\times4.5\\times10\\text{m}=270{,}000\\)。売り手は同額の損失。</p></div>",
    "gap": "スプレッドが拡大すれば買い手、縮小すれば売り手が得をする。反対の CDS で利益を早めに確定できる。"
   },
   "fr": {
    "topic": "Gain sur un CDS",
    "front": "Comment une position de CDS gagne-t-elle ou perd-elle quand le spread varie ? Un acheteur de 10m de protection (duration 4,5) voit le spread passer de 1,80 % à 2,40 %.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Profit}\\approx{}&\\Delta\\text{Spread}\\times D\\\\&\\times\\text{Notional}\\end{aligned}$$</div><p>\\(0.60\\%\\times4.5\\times10\\text{m}=270{,}000\\) de gain pour l’acheteur ; le vendeur perd autant.</p></div>",
    "gap": "Les acheteurs gagnent quand les spreads s’élargissent, les vendeurs quand ils se resserrent. On réalise le gain tôt avec un CDS de sens inverse."
   }
  },
  "fi5-applications": {
   "zh": {
    "topic": "CDS 的应用",
    "front": "描述调整信用敞口、裸 CDS 和多空 CDS 交易。",
    "back": "<div class=\"ans\"><ul><li><strong>调整敞口</strong>：买入保护以对冲贷款或债券而不必出售；卖出保护以增加敞口而不必买债券</li><li><strong>裸 CDS</strong>：不持有债务而买入保护：押注信用恶化</li><li><strong>多空</strong>：对一个实体买入保护、对另一个卖出保护：押注<strong>相对</strong>信用质量</li></ul></div>"
   },
   "ja": {
    "topic": "CDS の活用",
    "front": "信用エクスポージャーの調整、ネイキッド CDS、ロング・ショートの CDS 取引を説明せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>エクスポージャーの調整</strong>：貸出や債券を売らずにプロテクションを買ってヘッジする。債券を買わずにプロテクションを売ってエクスポージャーを増やす</li><li><strong>ネイキッド CDS</strong>：債務を持たずにプロテクションを買う：信用悪化に賭ける</li><li><strong>ロング・ショート</strong>：ある企業のプロテクションを買い、別の企業のプロテクションを売る：<strong>相対的な</strong>信用力に賭ける</li></ul></div>"
   },
   "fr": {
    "topic": "Usages des CDS",
    "front": "Décrivez l’ajustement de l’exposition au crédit, le CDS nu et l’opération long/short sur CDS.",
    "back": "<div class=\"ans\"><ul><li><strong>Ajuster l’exposition</strong> : acheter une protection pour couvrir un prêt ou une obligation sans les vendre ; vendre une protection pour ajouter de l’exposition sans acheter d’obligations</li><li><strong>CDS nu</strong> : acheter une protection sans détenir la dette : un pari sur la dégradation du crédit</li><li><strong>Long/short</strong> : acheter une protection sur une entité, en vendre sur une autre : un pari sur la qualité de crédit <strong>relative</strong></li></ul></div>"
   }
  },
  "fi5-curve-trade": {
   "zh": {
    "topic": "曲线交易",
    "front": "什么是信用曲线？如何交易预期的变陡和变平？",
    "back": "<div class=\"ans\"><p>同一参考实体在不同期限上的 CDS 利差，通常向上倾斜。</p><ul><li><strong>变陡交易</strong>：<strong>买入长期</strong>保护，<strong>卖出短期</strong>保护</li><li><strong>变平交易</strong>：卖出长期保护，买入短期保护</li></ul></div>",
    "gap": "名义本金相等时，变陡交易同时净做空信用（长期腿久期更大）；若只想押注形状，应按久期配置两条腿。"
   },
   "ja": {
    "topic": "カーブ取引",
    "front": "クレジット・カーブとは何か。予想されるスティープ化とフラット化をどう取引するか。",
    "back": "<div class=\"ans\"><p>同じ参照企業の満期ごとの CDS スプレッドで、通常は右上がり。</p><ul><li><strong>スティープナー</strong>：<strong>長期のプロテクションを買い</strong>、<strong>短期を売る</strong></li><li><strong>フラットナー</strong>：長期を売り、短期を買う</li></ul></div>",
    "gap": "想定元本が同じなら、スティープナーは信用のネット・ショートにもなる（長期レグのデュレーションが大きい）。形状だけに賭けるならデュレーションでレグの大きさを調整する。"
   },
   "fr": {
    "topic": "Opération sur la courbe",
    "front": "Qu’est-ce que la courbe de crédit ? Comment jouer une pentification attendue, et un aplatissement ?",
    "back": "<div class=\"ans\"><p>Les spreads de CDS d’une même entité de référence selon l’échéance, en général croissants.</p><ul><li><strong>Pentification</strong> : <strong>acheter la protection longue</strong>, <strong>vendre la courte</strong></li><li><strong>Aplatissement</strong> : vendre la protection longue, acheter la courte</li></ul></div>",
    "gap": "À notionnels égaux, une pentification est aussi nette courte sur le crédit (la jambe longue a plus de duration) ; dimensionnez les jambes selon la duration pour ne parier que sur la forme."
   }
  },
  "fi5-curve-example": {
   "zh": {
    "topic": "曲线交易例题",
    "front": "买入 1,000 万 10 年期保护（久期 8.5），卖出 1,000 万 2 年期保护（久期 1.9）。10 年期利差扩大 30 bp，2 年期收窄 18 bp。损益是多少？",
    "back": "<div class=\"ans\"><ul><li>10 年期：\\(0.30\\%\\times8.5\\times10\\text{m}=255{,}000\\)</li><li>2 年期：\\(0.18\\%\\times1.9\\times10\\text{m}=34{,}200\\)</li></ul><p>合计 <strong>289,200</strong>。</p></div>",
    "gap": "与骑乘收益率曲线（曲线稳定）不同，曲线交易押注的是曲线形状的变化。"
   },
   "ja": {
    "topic": "カーブ取引の計算例",
    "front": "10 年のプロテクション 1,000 万（デュレーション 8.5）を買い、2 年 1,000 万（デュレーション 1.9）を売る。10 年スプレッドが 30 bp 拡大し、2 年が 18 bp 縮小。損益は。",
    "back": "<div class=\"ans\"><ul><li>10 年：\\(0.30\\%\\times8.5\\times10\\text{m}=255{,}000\\)</li><li>2 年：\\(0.18\\%\\times1.9\\times10\\text{m}=34{,}200\\)</li></ul><p>合計 <strong>289,200</strong>。</p></div>",
    "gap": "カーブが安定していることに賭けるロールダウンと違い、カーブ取引はカーブの形の変化に賭ける。"
   },
   "fr": {
    "topic": "Exemple d’opération sur la courbe",
    "front": "Acheter 10m de protection à 10 ans (duration 8,5), vendre 10m à 2 ans (duration 1,9). Le spread à 10 ans s’élargit de 30 pb et celui à 2 ans se resserre de 18 pb. Gain ?",
    "back": "<div class=\"ans\"><ul><li>10 ans : \\(0.30\\%\\times8.5\\times10\\text{m}=255{,}000\\)</li><li>2 ans : \\(0.18\\%\\times1.9\\times10\\text{m}=34{,}200\\)</li></ul><p>Total <strong>289 200</strong>.</p></div>",
    "gap": "Contrairement au chevauchement de la courbe (courbe stable), une opération sur la courbe parie sur un changement de forme."
   }
  },
  "fi5-basis": {
   "zh": {
    "topic": "基差交易",
    "front": "什么是 CDS 基差交易？若债券的信用利差高于 CDS 利差，该怎么做？",
    "back": "<div class=\"ans\"><p>利用同一实体在债券市场的信用利差与 CDS 利差之间的差距。</p><p>债券利差 &gt; CDS 利差：<strong>买入债券并买入保护</strong>。CDS 对冲信用风险；持有差额直到利差收敛。</p></div>"
   },
   "ja": {
    "topic": "ベーシス取引",
    "front": "CDS ベーシス取引とは何か。債券の信用スプレッドが CDS スプレッドを上回るときはどうするか。",
    "back": "<div class=\"ans\"><p>同じ企業について、債券市場の信用スプレッドと CDS スプレッドの差を利用する。</p><p>債券スプレッド &gt; CDS スプレッド：<strong>債券を買い、プロテクションを買う</strong>。CDS が信用リスクをヘッジし、スプレッドが収束するまで差を得る。</p></div>"
   },
   "fr": {
    "topic": "Opération de base",
    "front": "Qu’est-ce qu’une opération de base sur CDS ? Que faire si le spread de crédit d’une obligation dépasse le spread du CDS ?",
    "back": "<div class=\"ans\"><p>Elle exploite un écart entre le spread de crédit du marché obligataire et le spread de CDS pour la même entité.</p><p>Spread obligataire &gt; spread de CDS : <strong>acheter l’obligation et acheter la protection</strong>. Le CDS couvre le risque de crédit ; on conserve l’écart jusqu’à la convergence des spreads.</p></div>"
   }
  },
  "fi5-synthetic": {
   "zh": {
    "topic": "合成 CDO 套利",
    "front": "CDS 如何复制有风险的债券？如何将其用于套利？",
    "back": "<div class=\"ans\"><p><strong>无风险债券 + 卖出保护</strong>（做多信用）可复制有风险的债券。由这些组成的资产池就是<strong>合成 CDO</strong>。</p><p>若合成 CDO 比具有相同敞口的现金 CDO 便宜，就买入真实 CDO 并做空合成 CDO，反之亦然。</p></div>"
   },
   "ja": {
    "topic": "シンセティック CDO の裁定",
    "front": "CDS はどうやってリスクのある債券を複製できるか。それをどう裁定に使うか。",
    "back": "<div class=\"ans\"><p><strong>無リスク債 + プロテクションの売り</strong>（信用のロング）でリスクのある債券を複製できる。これらのプールが<strong>シンセティック CDO</strong>。</p><p>シンセティックが同じエクスポージャーのキャッシュ CDO より安ければ、本物の CDO を買いシンセティックを売る。逆も同様。</p></div>"
   },
   "fr": {
    "topic": "Arbitrage de CDO synthétique",
    "front": "Comment les CDS peuvent-ils répliquer une obligation risquée, et comment s’en sert-on pour l’arbitrage ?",
    "back": "<div class=\"ans\"><p>Une <strong>obligation sans risque + une protection vendue</strong> (long crédit) réplique une obligation risquée. Un portefeuille de ces positions est un <strong>CDO synthétique</strong>.</p><p>Si le synthétique est moins cher qu’un CDO cash de même exposition, achetez le vrai CDO et vendez le synthétique, ou l’inverse.</p></div>"
   }
  }
 }
});
