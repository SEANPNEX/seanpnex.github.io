deckI18n({
 "source": {
  "zh": "CFA 二级 固定收益 · M3 含嵌入期权债券的估值 · 单元复习",
  "ja": "CFA レベル II 債券 · M3 組込オプション付き債券の評価 · 単元の復習",
  "fr": "CFA niveau II Titres à revenu fixe · M3 Évaluation des obligations à options incorporées · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "fi3-callable-putable": {
   "zh": {
    "topic": "可赎回与可回售债券",
    "front": "可赎回债券和可回售债券中，谁持有期权？用普通债券表示每种债券的价值。",
    "back": "<div class=\"ans\"><ul><li><strong>可赎回</strong>：<strong>发行人</strong>持有看涨期权；投资者做空它</li><li><strong>可回售</strong>：<strong>投资者</strong>持有看跌期权</li></ul><div class=\"eq-block\">$$V_{\\text{callable}}=V_{\\text{straight}}-V_{\\text{call}}$$</div><div class=\"eq-block\">$$V_{\\text{putable}}=V_{\\text{straight}}+V_{\\text{put}}$$</div></div>",
    "gap": "可赎回：低收益率时价格压缩、负凸性。可回售：高收益率时有价格下限。"
   },
   "ja": {
    "topic": "コーラブル債とプッタブル債",
    "front": "コーラブル債とプッタブル債では、誰がオプションを持つか。それぞれの価値を普通社債で表せ。",
    "back": "<div class=\"ans\"><ul><li><strong>コーラブル</strong>：<strong>発行体</strong>がコールを持ち、投資家はそれを売っている</li><li><strong>プッタブル</strong>：<strong>投資家</strong>がプットを持つ</li></ul><div class=\"eq-block\">$$V_{\\text{callable}}=V_{\\text{straight}}-V_{\\text{call}}$$</div><div class=\"eq-block\">$$V_{\\text{putable}}=V_{\\text{straight}}+V_{\\text{put}}$$</div></div>",
    "gap": "コーラブル：低利回りで価格が頭打ちになり、コンベクシティはマイナス。プッタブル：高利回りで価格に下限。"
   },
   "fr": {
    "topic": "Obligations remboursables et à option de vente",
    "front": "Qui détient l’option dans une obligation remboursable par anticipation (callable) et dans une obligation à option de vente (putable) ? Écrivez la valeur de chacune à partir de l’obligation classique.",
    "back": "<div class=\"ans\"><ul><li><strong>Callable</strong> : l’<strong>émetteur</strong> détient un call ; l’investisseur en est vendeur</li><li><strong>Putable</strong> : l’<strong>investisseur</strong> détient un put</li></ul><div class=\"eq-block\">$$V_{\\text{callable}}=V_{\\text{straight}}-V_{\\text{call}}$$</div><div class=\"eq-block\">$$V_{\\text{putable}}=V_{\\text{straight}}+V_{\\text{put}}$$</div></div>",
    "gap": "Callable : compression du prix et convexité négative à faibles rendements. Putable : un prix plancher à rendements élevés."
   }
  },
  "fi3-extendible": {
   "zh": {
    "topic": "可延期债券 · 其他期权",
    "front": "可延期债券等同于什么？什么是遗产回售权？",
    "back": "<div class=\"ans\"><ul><li><strong>可延期</strong>：投资者可以延长期限。它等同于期限较长的<strong>可回售</strong>债券：可延期 2 年的 3 年期债券 = 可在第 3 年回售的 5 年期债券</li><li><strong>遗产回售权</strong>（幸存者期权）：已故持有人的继承人可按面值回售债券</li></ul></div>"
   },
   "ja": {
    "topic": "延長可能債 · その他のオプション",
    "front": "延長可能債は何と同等か。エステート・プットとは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>延長可能債</strong>：投資家が満期を延長できる。より長い満期の<strong>プッタブル</strong>債と同等：2 年延長可能な 3 年債 = 3 年目にプット可能な 5 年債</li><li><strong>エステート・プット</strong>（サバイバーズ・オプション）：死亡した保有者の相続人が額面で債券をプットできる</li></ul></div>"
   },
   "fr": {
    "topic": "Obligation prorogeable · autres options",
    "front": "À quoi équivaut une obligation prorogeable ? Qu’est-ce qu’un put successoral ?",
    "back": "<div class=\"ans\"><ul><li><strong>Prorogeable</strong> : l’investisseur peut prolonger l’échéance. Elle équivaut à une obligation <strong>putable</strong> d’échéance plus longue : une obligation à 3 ans prorogeable de 2 ans = une obligation à 5 ans putable en année 3</li><li><strong>Put successoral</strong> (option du survivant) : les héritiers d’un détenteur décédé peuvent revendre l’obligation au pair</li></ul></div>"
   }
  },
  "fi3-tree-rule": {
   "zh": {
    "topic": "在二叉树上为期权估值",
    "front": "可赎回或可回售债券在树的每个行权节点需要什么额外步骤？之后如何为期权估值？",
    "back": "<div class=\"ans\"><ul><li><strong>可赎回</strong>：节点价值 \\(=\\min(V,\\ \\text{call price})\\)</li><li><strong>可回售</strong>：节点价值 \\(=\\max(V,\\ \\text{put price})\\)</li></ul><div class=\"eq-block\">$$V_{\\text{call}}=V_{\\text{straight}}-V_{\\text{callable}}$$</div><div class=\"eq-block\">$$V_{\\text{put}}=V_{\\text{putable}}-V_{\\text{straight}}$$</div></div>"
   },
   "ja": {
    "topic": "ツリー上でのオプションの評価",
    "front": "コーラブル債やプッタブル債では、ツリーの各行使ノードでどんな追加の手順が必要か。その後オプションはどう評価するか。",
    "back": "<div class=\"ans\"><ul><li><strong>コーラブル</strong>：ノードの価値 \\(=\\min(V,\\ \\text{call price})\\)</li><li><strong>プッタブル</strong>：ノードの価値 \\(=\\max(V,\\ \\text{put price})\\)</li></ul><div class=\"eq-block\">$$V_{\\text{call}}=V_{\\text{straight}}-V_{\\text{callable}}$$</div><div class=\"eq-block\">$$V_{\\text{put}}=V_{\\text{putable}}-V_{\\text{straight}}$$</div></div>"
   },
   "fr": {
    "topic": "Évaluer les options sur l’arbre",
    "front": "Quelle étape supplémentaire une obligation callable ou putable demande-t-elle à chaque nœud d’exercice ? Comment évalue-t-on ensuite l’option ?",
    "back": "<div class=\"ans\"><ul><li><strong>Callable</strong> : valeur du nœud \\(=\\min(V,\\ \\text{call price})\\)</li><li><strong>Putable</strong> : valeur du nœud \\(=\\max(V,\\ \\text{put price})\\)</li></ul><div class=\"eq-block\">$$V_{\\text{call}}=V_{\\text{straight}}-V_{\\text{callable}}$$</div><div class=\"eq-block\">$$V_{\\text{put}}=V_{\\text{putable}}-V_{\\text{straight}}$$</div></div>"
   }
  },
  "fi3-tree-example": {
   "zh": {
    "topic": "可赎回与可回售例题",
    "front": "在 3% / 8% / 5% 的树上，一只 2 年期 7% 普通债券价值 104.359。分别对一年后可按 100 赎回、可按 100 回售的情形估值，并对各期权估值。",
    "back": "<div class=\"ans\"><p>第 1 年普通债券价值：99.074（上），101.905（下）。</p><ul><li><strong>可赎回</strong>：在下降节点被赎回（101.905 → 100）：\\(\\frac{106.074+107}{2.06}=103.434\\)；看涨期权 \\(=0.925\\)</li><li><strong>可回售</strong>：在上升节点被回售（99.074 → 100）：\\(\\frac{107+108.905}{2.06}=104.808\\)；看跌期权 \\(=0.449\\)</li></ul></div>",
    "gap": "发行人在利率低时（下降节点）赎回；投资者在利率高时（上升节点）回售。"
   },
   "ja": {
    "topic": "コーラブルとプッタブルの計算例",
    "front": "3% / 8% / 5% のツリーで、2 年 7% の普通社債の価値は 104.359。1 年後に 100 でコール可能な場合と 100 でプット可能な場合を評価し、各オプションを評価せよ。",
    "back": "<div class=\"ans\"><p>1 年目の普通社債の価値：99.074（上）、101.905（下）。</p><ul><li><strong>コーラブル</strong>：下のノードでコールされる（101.905 → 100）：\\(\\frac{106.074+107}{2.06}=103.434\\)、コール \\(=0.925\\)</li><li><strong>プッタブル</strong>：上のノードでプットされる（99.074 → 100）：\\(\\frac{107+108.905}{2.06}=104.808\\)、プット \\(=0.449\\)</li></ul></div>",
    "gap": "発行体は金利が低いとき（下のノード）にコールし、投資家は金利が高いとき（上のノード）にプットする。"
   },
   "fr": {
    "topic": "Exemple callable et putable",
    "front": "Sur l’arbre 3 % / 8 % / 5 %, une obligation classique à 2 ans à 7 % vaut 104,359. Évaluez-la remboursable à 100 dans un an, puis putable à 100 dans un an, et évaluez chaque option.",
    "back": "<div class=\"ans\"><p>Valeurs classiques en année 1 : 99,074 (haut), 101,905 (bas).</p><ul><li><strong>Callable</strong> : remboursée au nœud bas (101,905 → 100) : \\(\\frac{106.074+107}{2.06}=103.434\\) ; call \\(=0.925\\)</li><li><strong>Putable</strong> : revendue au nœud haut (99,074 → 100) : \\(\\frac{107+108.905}{2.06}=104.808\\) ; put \\(=0.449\\)</li></ul></div>",
    "gap": "L’émetteur rembourse quand les taux sont bas (nœud bas) ; l’investisseur revend quand ils sont hauts (nœud haut)."
   }
  },
  "fi3-exercise": {
   "zh": {
    "topic": "行权方式",
    "front": "区分欧式、百慕大式和美式行权。在树上分别如何处理？",
    "back": "<div class=\"ans\"><ul><li><strong>欧式</strong>：一个行权日</li><li><strong>百慕大式</strong>：一组日期（如每个付息日）；与欧式一样，在每个这样的节点检查是否行权</li><li><strong>美式</strong>：任何时候；用更多、更短的步长近似（不考）</li></ul></div>"
   },
   "ja": {
    "topic": "行使のスタイル",
    "front": "ヨーロピアン、バミューダン、アメリカンの行使を区別せよ。それぞれツリー上でどう扱うか。",
    "back": "<div class=\"ans\"><ul><li><strong>ヨーロピアン</strong>：行使日は 1 つ</li><li><strong>バミューダン</strong>：複数の日付（例：各利払日）。ヨーロピアンと同様に、そうした各ノードで行使を確認する</li><li><strong>アメリカン</strong>：いつでも。はるかに多くの短いステップで近似する（試験範囲外）</li></ul></div>"
   },
   "fr": {
    "topic": "Styles d’exercice",
    "front": "Distinguez l’exercice européen, bermudien et américain. Comment chacun est-il traité sur l’arbre ?",
    "back": "<div class=\"ans\"><ul><li><strong>Européen</strong> : une seule date d’exercice</li><li><strong>Bermudien</strong> : un ensemble de dates (p. ex. chaque date de coupon) ; on vérifie l’exercice à chacun de ces nœuds, comme pour l’européen</li><li><strong>Américain</strong> : à tout moment ; approché par beaucoup plus de pas, plus courts (hors examen)</li></ul></div>"
   }
  },
  "fi3-volatility": {
   "zh": {
    "topic": "波动率的影响",
    "front": "利率波动率上升如何影响普通债券、可赎回债券和可回售债券？",
    "back": "<div class=\"ans\"><ul><li><strong>普通债券</strong>：<strong>没有影响</strong>；树仍被校准到相同的即期利率</li><li><strong>可赎回</strong>：看涨期权价值 ↑，所以可赎回债券价值 ↓</li><li><strong>可回售</strong>：看跌期权价值 ↑，所以可回售债券价值 ↑</li></ul></div>",
    "gap": "曲线形状也有影响：若预期未来利率下降（曲线更平或倒挂），看涨期权更值钱，看跌期权更不值钱。"
   },
   "ja": {
    "topic": "ボラティリティの影響",
    "front": "金利ボラティリティの上昇は、普通社債、コーラブル債、プッタブル債にどう影響するか。",
    "back": "<div class=\"ans\"><ul><li><strong>普通社債</strong>：<strong>影響なし</strong>。ツリーは同じスポット・レートにキャリブレーションされたまま</li><li><strong>コーラブル</strong>：コールの価値 ↑、よってコーラブル債の価値 ↓</li><li><strong>プッタブル</strong>：プットの価値 ↑、よってプッタブル債の価値 ↑</li></ul></div>",
    "gap": "カーブの形も影響する：将来金利の低下が予想される（フラット化や逆イールド）と、コールの価値は上がりプットの価値は下がる。"
   },
   "fr": {
    "topic": "Effet de la volatilité",
    "front": "Comment une volatilité des taux plus élevée affecte-t-elle une obligation classique, callable et putable ?",
    "back": "<div class=\"ans\"><ul><li><strong>Classique</strong> : <strong>aucun effet</strong> ; l’arbre reste calibré sur les mêmes taux au comptant</li><li><strong>Callable</strong> : valeur du call ↑, donc valeur de la callable ↓</li><li><strong>Putable</strong> : valeur du put ↑, donc valeur de la putable ↑</li></ul></div>",
    "gap": "La forme de la courbe compte aussi : si les taux futurs attendus baissent (courbe plus plate ou inversée), le call vaut plus et le put moins."
   }
  },
  "fi3-oas-def": {
   "zh": {
    "topic": "期权调整利差",
    "front": "定义期权调整利差（OAS）。它如何求得？",
    "back": "<div class=\"ans\"><p>加在无套利树中<strong>每个一期利率上的固定利差</strong>，使树得出的价值等于债券的<strong>市场价格</strong>。</p><p>通过在树上为债券估值、反复试错求得。由于树明确地为期权估值，OAS 是<strong>剔除期权后</strong>的利差。</p></div>",
    "gap": "与 Z 利差一样是平行移动，但移动的是树上的利率，而不是即期曲线。"
   },
   "ja": {
    "topic": "オプション調整後スプレッド",
    "front": "オプション調整後スプレッド（OAS）を定義せよ。どう求めるか。",
    "back": "<div class=\"ans\"><p>無裁定ツリーの<strong>すべての 1 期間金利に加える一定のスプレッド</strong>で、ツリーの価値を債券の<strong>市場価格</strong>に一致させるもの。</p><p>ツリーで債券を評価しながら試行錯誤で求める。ツリーがオプションを明示的に評価するので、OAS は<strong>オプションを除いた</strong>スプレッドになる。</p></div>",
    "gap": "Z スプレッドと同じく平行移動だが、動かすのはスポット・カーブではなくツリーの金利。"
   },
   "fr": {
    "topic": "Spread ajusté de l’option",
    "front": "Définissez le spread ajusté de l’option (OAS). Comment le trouve-t-on ?",
    "back": "<div class=\"ans\"><p>Le <strong>spread constant ajouté à chaque taux à une période</strong> de l’arbre sans arbitrage qui égalise la valeur de l’arbre et le <strong>prix de marché</strong> de l’obligation.</p><p>On le trouve par tâtonnement, en évaluant l’obligation dans l’arbre. Comme l’arbre valorise explicitement l’option, l’OAS est le spread <strong>une fois l’option retirée</strong>.</p></div>",
    "gap": "Comme le Z-spread, c’est un déplacement parallèle, mais des taux de l’arbre et non de la courbe au comptant."
   }
  },
  "fi3-oas-zspread": {
   "zh": {
    "topic": "OAS 与 Z 利差",
    "front": "写出 OAS 与 Z 利差的关系。对可赎回债券和可回售债券，哪个更大？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{OAS}=\\text{Z-spread}-\\text{Option cost}$$</div><ul><li><strong>可赎回</strong>：投资者做空看涨期权并为此获得补偿：期权成本 &gt; 0，所以 \\(\\text{OAS}&lt;\\text{Z-spread}\\)</li><li><strong>可回售</strong>：投资者为看跌期权付费：期权成本 &lt; 0，所以 \\(\\text{OAS}&gt;\\text{Z-spread}\\)</li></ul></div>",
    "gap": "“OAS = Z 利差 − 期权价值”只对可赎回债券成立；对可回售债券，期权成本为负。"
   },
   "ja": {
    "topic": "OAS と Z スプレッド",
    "front": "OAS と Z スプレッドの関係を示せ。コーラブル債とプッタブル債では、それぞれどちらが大きいか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{OAS}=\\text{Z-spread}-\\text{Option cost}$$</div><ul><li><strong>コーラブル</strong>：投資家はコールを売っており、その補償を受ける：オプション・コスト &gt; 0、よって \\(\\text{OAS}&lt;\\text{Z-spread}\\)</li><li><strong>プッタブル</strong>：投資家はプットの対価を払う：オプション・コスト &lt; 0、よって \\(\\text{OAS}&gt;\\text{Z-spread}\\)</li></ul></div>",
    "gap": "「OAS = Z スプレッド − オプション価値」はコーラブル債にだけ成り立つ。プッタブル債ではオプション・コストがマイナス。"
   },
   "fr": {
    "topic": "OAS et Z-spread",
    "front": "Reliez l’OAS au Z-spread. Lequel est le plus grand pour une callable, et pour une putable ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{OAS}=\\text{Z-spread}-\\text{Option cost}$$</div><ul><li><strong>Callable</strong> : l’investisseur est vendeur du call et en est rémunéré : coût de l’option &gt; 0, donc \\(\\text{OAS}&lt;\\text{Z-spread}\\)</li><li><strong>Putable</strong> : l’investisseur paie le put : coût de l’option &lt; 0, donc \\(\\text{OAS}&gt;\\text{Z-spread}\\)</li></ul></div>",
    "gap": "« OAS = Z-spread − valeur de l’option » ne vaut que pour une callable ; pour une putable, le coût de l’option est négatif."
   }
  },
  "fi3-spread-risks": {
   "zh": {
    "topic": "各利差补偿什么",
    "front": "相对国债基准，Z 利差补偿哪些风险？OAS 补偿哪些风险？",
    "back": "<div class=\"ans\"><ul><li><strong>Z 利差 / 名义利差</strong>：信用、流动性和<strong>期权</strong>风险</li><li><strong>OAS</strong>：只有信用和流动性风险</li></ul><p>相对行业基准时，“信用”变成相对该行业的信用；相对发行人自身的曲线时，只剩流动性（对 Z 利差还有期权风险）。</p></div>"
   },
   "ja": {
    "topic": "各スプレッドが補償するもの",
    "front": "国債ベンチマークに対して、Z スプレッドはどのリスクを、OAS はどのリスクを補償するか。",
    "back": "<div class=\"ans\"><ul><li><strong>Z スプレッド / 名目スプレッド</strong>：信用、流動性、<strong>オプション</strong>のリスク</li><li><strong>OAS</strong>：信用と流動性のリスクのみ</li></ul><p>セクターのベンチマークに対しては「信用」がセクター比の信用になり、発行体自身のカーブに対しては流動性（Z スプレッドではオプション・リスクも）だけが残る。</p></div>"
   },
   "fr": {
    "topic": "Ce que couvre chaque spread",
    "front": "Face à une référence d’État, quels risques le Z-spread rémunère-t-il, et lesquels l’OAS ?",
    "back": "<div class=\"ans\"><ul><li><strong>Z-spread / spread nominal</strong> : risques de crédit, de liquidité et d’<strong>option</strong></li><li><strong>OAS</strong> : risques de crédit et de liquidité seulement</li></ul><p>Face à une référence sectorielle, le « crédit » devient le crédit relatif au secteur ; face à la courbe propre de l’émetteur, seule la liquidité (et le risque d’option pour le Z-spread) subsiste.</p></div>"
   }
  },
  "fi3-oas-mispricing": {
   "zh": {
    "topic": "OAS · 贵或便宜",
    "front": "OAS 如何识别定价错误的债券？相对国债曲线 OAS 为 0 意味着什么？",
    "back": "<div class=\"ans\"><p>把债券的实际 OAS 与可比债券的<strong>要求</strong> OAS 比较：<strong>更高</strong> → <strong>便宜</strong>（被低估）；<strong>更低</strong> → <strong>贵</strong>（被高估）。</p><p>相对国债 OAS = 0：没有对信用和流动性风险的补偿，所以<strong>被高估</strong>。相对任何基准，负的 OAS 都是被高估。</p></div>"
   },
   "ja": {
    "topic": "OAS · 割高か割安か",
    "front": "OAS はどうやってミスプライスされた債券を見つけるか。国債カーブに対する OAS が 0 とはどういう意味か。",
    "back": "<div class=\"ans\"><p>債券の実際の OAS を類似債券の<strong>要求</strong> OAS と比べる：<strong>高い</strong> → <strong>割安</strong>、<strong>低い</strong> → <strong>割高</strong>。</p><p>国債に対して OAS = 0：信用リスクと流動性リスクへの補償がないので<strong>割高</strong>。マイナスの OAS はどのベンチマークに対しても割高。</p></div>"
   },
   "fr": {
    "topic": "OAS · cher ou bon marché",
    "front": "Comment l’OAS repère-t-il les obligations mal évaluées ? Que signifie un OAS de 0 face à la courbe d’État ?",
    "back": "<div class=\"ans\"><p>Comparez l’OAS réel de l’obligation à l’OAS <strong>exigé</strong> d’obligations comparables : <strong>plus élevé</strong> → <strong>bon marché</strong> (sous-évaluée) ; <strong>plus bas</strong> → <strong>chère</strong> (surévaluée).</p><p>OAS = 0 face aux emprunts d’État : aucune rémunération du risque de crédit et de liquidité, donc <strong>surévaluée</strong>. Un OAS négatif est surévalué face à toute référence.</p></div>"
   }
  },
  "fi3-oas-vol": {
   "zh": {
    "topic": "OAS 与波动率",
    "front": "在市场价格给定时，假设的波动率提高会如何改变可赎回债券和可回售债券的 OAS？",
    "back": "<div class=\"ans\"><ul><li><strong>可赎回</strong>：模型中看涨期权价值 ↑，债券价值 ↓，所以只需<strong>更小的 OAS</strong> 就能使其等于价格：OAS ↓</li><li><strong>可回售</strong>：模型中看跌期权和债券价值 ↑，所以需要<strong>更大的 OAS</strong>：OAS ↑</li></ul></div>",
    "gap": "只有在相同的波动率假设下，OAS 数字才可比。"
   },
   "ja": {
    "topic": "OAS とボラティリティ",
    "front": "市場価格が一定のとき、仮定するボラティリティが上がると、コーラブル債とプッタブル債の OAS はどう変わるか。",
    "back": "<div class=\"ans\"><ul><li><strong>コーラブル</strong>：モデル上のコール価値 ↑、債券価値 ↓、よって価格に合わせるには<strong>小さい OAS</strong> で済む：OAS ↓</li><li><strong>プッタブル</strong>：モデル上のプットと債券の価値 ↑、よって<strong>大きい OAS</strong> が必要：OAS ↑</li></ul></div>",
    "gap": "OAS の数値は、同じボラティリティの前提のもとでしか比較できない。"
   },
   "fr": {
    "topic": "OAS et volatilité",
    "front": "Pour un prix de marché donné, comment une volatilité supposée plus forte modifie-t-elle l’OAS d’une callable et d’une putable ?",
    "back": "<div class=\"ans\"><ul><li><strong>Callable</strong> : valeur modèle du call ↑, valeur de l’obligation ↓, donc un <strong>OAS plus petit</strong> la ramène au prix : OAS ↓</li><li><strong>Putable</strong> : valeur modèle du put et de l’obligation ↑, donc un <strong>OAS plus grand</strong> est nécessaire : OAS ↑</li></ul></div>",
    "gap": "Les OAS ne sont comparables qu’avec la même hypothèse de volatilité."
   }
  },
  "fi3-effdur": {
   "zh": {
    "topic": "有效久期",
    "front": "给出有效久期公式。对于含嵌入期权的债券，\\(PV_-\\) 和 \\(PV_+\\) 如何求得？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{eff}}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta\\text{Curve}\\,PV_0}$$</div><ul><li>由今天的树和价格求出债券的 <strong>OAS</strong></li><li>把基准曲线下移和上移 \\(\\Delta\\text{Curve}\\)，各建一棵新树</li><li>用<strong>相同的 OAS</strong> 重新定价：信用利差保持不变</li></ul></div>",
    "gap": "它是曲线久期（基准曲线移动），不是收益率久期：期权的现金流随利率变化。"
   },
   "ja": {
    "topic": "実効デュレーション",
    "front": "実効デュレーションの式を示せ。組込オプション付き債券では \\(PV_-\\) と \\(PV_+\\) をどう求めるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{eff}}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta\\text{Curve}\\,PV_0}$$</div><ul><li>今日のツリーと価格から債券の <strong>OAS</strong> を求める</li><li>ベンチマーク・カーブを \\(\\Delta\\text{Curve}\\) だけ下げたものと上げたもので、それぞれ新しいツリーをつくる</li><li><strong>同じ OAS</strong> で評価し直す：信用スプレッドは固定する</li></ul></div>",
    "gap": "これは利回りデュレーションではなくカーブ・デュレーション（ベンチマーク・カーブのシフト）：オプションのキャッシュフローは金利で変わる。"
   },
   "fr": {
    "topic": "Duration effective",
    "front": "Donnez la formule de la duration effective. Comment trouve-t-on \\(PV_-\\) et \\(PV_+\\) pour une obligation à option incorporée ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{eff}}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta\\text{Curve}\\,PV_0}$$</div><ul><li>Trouver l’<strong>OAS</strong> de l’obligation à partir de l’arbre et du prix actuels</li><li>Déplacer la courbe de référence vers le bas et le haut de \\(\\Delta\\text{Curve}\\), construire un nouvel arbre pour chacune</li><li>Revaloriser avec le <strong>même OAS</strong> : le spread de crédit est maintenu</li></ul></div>",
    "gap": "C’est une duration de courbe (déplacement de la courbe de référence), pas de rendement : les flux de l’option changent avec les taux."
   }
  },
  "fi3-effdur-example": {
   "zh": {
    "topic": "有效久期例题",
    "front": "一只可赎回债券 \\(PV_0=101.2\\)。曲线移动 ±30 bp 时，\\(PV_-=102.8\\)、\\(PV_+=99.2\\)。求有效久期和有效凸性。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}D_{\\text{eff}}&=\\frac{102.8-99.2}{2\\times0.003\\times101.2}\\\\&=5.93\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}C_{\\text{eff}}&=\\frac{102.8+99.2-202.4}{0.003^2\\times101.2}\\\\&=-439\\end{aligned}$$</div><p>负凸性，正如可赎回债券所预期的那样。</p></div>"
   },
   "ja": {
    "topic": "実効デュレーションの計算例",
    "front": "コーラブル債の \\(PV_0=101.2\\)。カーブを ±30 bp 動かすと \\(PV_-=102.8\\)、\\(PV_+=99.2\\)。実効デュレーションと実効コンベクシティを求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}D_{\\text{eff}}&=\\frac{102.8-99.2}{2\\times0.003\\times101.2}\\\\&=5.93\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}C_{\\text{eff}}&=\\frac{102.8+99.2-202.4}{0.003^2\\times101.2}\\\\&=-439\\end{aligned}$$</div><p>コーラブル債で予想されるとおり、コンベクシティはマイナス。</p></div>"
   },
   "fr": {
    "topic": "Exemple de duration effective",
    "front": "Une obligation callable a \\(PV_0=101.2\\). Avec la courbe déplacée de ±30 pb, \\(PV_-=102.8\\) et \\(PV_+=99.2\\). Trouvez la duration et la convexité effectives.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}D_{\\text{eff}}&=\\frac{102.8-99.2}{2\\times0.003\\times101.2}\\\\&=5.93\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}C_{\\text{eff}}&=\\frac{102.8+99.2-202.4}{0.003^2\\times101.2}\\\\&=-439\\end{aligned}$$</div><p>Convexité négative, comme attendu pour une callable.</p></div>"
   }
  },
  "fi3-ed-rules": {
   "zh": {
    "topic": "有效久期 · 规则",
    "front": "说出零息债券、固定利率债券、浮息债券和含嵌入期权债券的有效久期。",
    "back": "<div class=\"ans\"><ul><li>零息：≈ 其<strong>期限</strong></li><li>固定利率：&lt; 其期限</li><li>浮息：≈ <strong>距下次重置的时间</strong>（重置日 ≈ 0）</li><li>可赎回或可回售：≤ 相同的<strong>普通</strong>债券</li></ul></div>"
   },
   "ja": {
    "topic": "実効デュレーション · ルール",
    "front": "ゼロ・クーポン債、固定利付債、変動利付債、組込オプション付き債券の実効デュレーションを述べよ。",
    "back": "<div class=\"ans\"><ul><li>ゼロ・クーポン：≈ その<strong>満期</strong></li><li>固定利付：&lt; その満期</li><li>変動利付：≈ <strong>次の金利更改までの期間</strong>（更改日には ≈ 0）</li><li>コーラブルまたはプッタブル：≤ 同条件の<strong>普通</strong>社債</li></ul></div>"
   },
   "fr": {
    "topic": "Duration effective · règles",
    "front": "Indiquez la duration effective d’un zéro-coupon, d’une obligation à taux fixe, d’une obligation à taux variable et d’une obligation à option incorporée.",
    "back": "<div class=\"ans\"><ul><li>Zéro-coupon : ≈ son <strong>échéance</strong></li><li>Taux fixe : &lt; son échéance</li><li>Taux variable : ≈ <strong>temps jusqu’à la prochaine refixation</strong> (≈ 0 à une date de refixation)</li><li>Callable ou putable : ≤ l’obligation <strong>classique</strong> identique</li></ul></div>"
   }
  },
  "fi3-ed-direction": {
   "zh": {
    "topic": "有效久期 · 方向",
    "front": "利率下降如何影响可赎回债券的有效久期？利率上升如何影响可回售债券的有效久期？",
    "back": "<div class=\"ans\"><ul><li>利率<strong>下降</strong> → 可能被赎回 → 可赎回债券表现得像在赎回日到期的债券：久期 <strong>↓</strong></li><li>利率<strong>上升</strong> → 可能被回售 → 可回售债券表现得像在回售日到期的债券：久期 <strong>↓</strong></li></ul></div>",
    "gap": "两种情况下，期权进入价内时久期都会缩短。"
   },
   "ja": {
    "topic": "実効デュレーション · 方向",
    "front": "金利の低下はコーラブル債の実効デュレーションにどう影響するか。金利の上昇はプッタブル債ではどうか。",
    "back": "<div class=\"ans\"><ul><li>金利が<strong>低下</strong> → コールされやすい → コーラブル債はコール日に終わる債券のように振る舞う：デュレーション <strong>↓</strong></li><li>金利が<strong>上昇</strong> → プットされやすい → プッタブル債はプット日に終わる債券のように振る舞う：デュレーション <strong>↓</strong></li></ul></div>",
    "gap": "どちらの場合も、オプションがイン・ザ・マネーになるとデュレーションは短くなる。"
   },
   "fr": {
    "topic": "Duration effective · sens",
    "front": "Comment une baisse des taux affecte-t-elle la duration effective d’une callable ? Et une hausse, celle d’une putable ?",
    "back": "<div class=\"ans\"><ul><li>Taux en <strong>baisse</strong> → remboursement probable → la callable se comporte comme une obligation finissant à la date de remboursement : duration <strong>↓</strong></li><li>Taux en <strong>hausse</strong> → revente probable → la putable se comporte comme une obligation finissant à la date du put : duration <strong>↓</strong></li></ul></div>",
    "gap": "Dans les deux cas, la duration raccourcit quand l’option entre dans la monnaie."
   }
  },
  "fi3-effcon": {
   "zh": {
    "topic": "有效凸性",
    "front": "给出有效凸性公式、二阶价格变动，以及普通、可赎回和可回售债券的符号。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_{\\text{eff}}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta\\text{Curve})^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\begin{aligned}\\tfrac{\\Delta P}{P}\\approx&-D_{\\text{eff}}\\,\\Delta\\text{Curve}\\\\&+\\tfrac12 C_{\\text{eff}}(\\Delta\\text{Curve})^2\\end{aligned}$$</div><ul><li>普通：略为正</li><li>可赎回：低利率时为<strong>负</strong></li><li>可回售：高利率时<strong>更正</strong></li></ul></div>"
   },
   "ja": {
    "topic": "実効コンベクシティ",
    "front": "実効コンベクシティの式、2 次の価格変化、普通社債・コーラブル債・プッタブル債の符号を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_{\\text{eff}}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta\\text{Curve})^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\begin{aligned}\\tfrac{\\Delta P}{P}\\approx&-D_{\\text{eff}}\\,\\Delta\\text{Curve}\\\\&+\\tfrac12 C_{\\text{eff}}(\\Delta\\text{Curve})^2\\end{aligned}$$</div><ul><li>普通社債：わずかにプラス</li><li>コーラブル：低金利で<strong>マイナス</strong></li><li>プッタブル：高金利で<strong>よりプラス</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Convexité effective",
    "front": "Donnez la formule de la convexité effective, la variation de prix au second ordre et le signe pour les obligations classiques, callables et putables.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_{\\text{eff}}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta\\text{Curve})^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\begin{aligned}\\tfrac{\\Delta P}{P}\\approx&-D_{\\text{eff}}\\,\\Delta\\text{Curve}\\\\&+\\tfrac12 C_{\\text{eff}}(\\Delta\\text{Curve})^2\\end{aligned}$$</div><ul><li>Classique : légèrement positive</li><li>Callable : <strong>négative</strong> à faibles taux</li><li>Putable : <strong>plus positive</strong> à taux élevés</li></ul></div>"
   }
  },
  "fi3-one-sided": {
   "zh": {
    "topic": "单侧久期",
    "front": "写出 \\(D_{\\text{up}}\\) 和 \\(D_{\\text{down}}\\)。对 \\(PV_0=101.2\\)、\\(PV_+=99.2\\)、\\(PV_-=102.8\\)（±30 bp）的可赎回债券，计算两者。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{up}}=\\frac{PV_0-PV_{+}}{\\Delta\\text{Curve}\\,PV_0}$$</div><div class=\"eq-block\">$$D_{\\text{down}}=\\frac{PV_{-}-PV_0}{\\Delta\\text{Curve}\\,PV_0}$$</div><p>\\(D_{\\text{up}}=\\frac{2.0}{0.3036}=6.59\\)，\\(D_{\\text{down}}=\\frac{1.6}{0.3036}=5.27\\)；两者的平均就是有效久期 5.93。</p></div>"
   },
   "ja": {
    "topic": "片側デュレーション",
    "front": "\\(D_{\\text{up}}\\) と \\(D_{\\text{down}}\\) を示せ。\\(PV_0=101.2\\)、\\(PV_+=99.2\\)、\\(PV_-=102.8\\)（±30 bp）のコーラブル債について両方を計算せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{up}}=\\frac{PV_0-PV_{+}}{\\Delta\\text{Curve}\\,PV_0}$$</div><div class=\"eq-block\">$$D_{\\text{down}}=\\frac{PV_{-}-PV_0}{\\Delta\\text{Curve}\\,PV_0}$$</div><p>\\(D_{\\text{up}}=\\frac{2.0}{0.3036}=6.59\\)、\\(D_{\\text{down}}=\\frac{1.6}{0.3036}=5.27\\)。その平均が実効デュレーション 5.93。</p></div>"
   },
   "fr": {
    "topic": "Durations unilatérales",
    "front": "Écrivez \\(D_{\\text{up}}\\) et \\(D_{\\text{down}}\\). Pour la callable avec \\(PV_0=101.2\\), \\(PV_+=99.2\\), \\(PV_-=102.8\\) (±30 pb), calculez les deux.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$D_{\\text{up}}=\\frac{PV_0-PV_{+}}{\\Delta\\text{Curve}\\,PV_0}$$</div><div class=\"eq-block\">$$D_{\\text{down}}=\\frac{PV_{-}-PV_0}{\\Delta\\text{Curve}\\,PV_0}$$</div><p>\\(D_{\\text{up}}=\\frac{2.0}{0.3036}=6.59\\), \\(D_{\\text{down}}=\\frac{1.6}{0.3036}=5.27\\) ; leur moyenne est la duration effective, 5,93.</p></div>"
   }
  },
  "fi3-one-sided-dir": {
   "zh": {
    "topic": "单侧久期 · 哪个更大",
    "front": "比较普通、可赎回和可回售债券的 \\(D_{\\text{up}}\\) 与 \\(D_{\\text{down}}\\)。",
    "back": "<div class=\"ans\"><ul><li><strong>普通</strong>：\\(D_{\\text{down}}\\) 略 &gt; \\(D_{\\text{up}}\\)（正凸性）</li><li><strong>可赎回</strong>：\\(D_{\\text{down}}&lt;D_{\\text{up}}\\)：利率下降时价格在赎回价附近封顶</li><li><strong>可回售</strong>：\\(D_{\\text{up}}&lt;D_{\\text{down}}\\)：利率上升时价格在回售价附近有下限</li></ul></div>",
    "gap": "当期权接近平价、价格反应不对称时，单侧久期很重要。"
   },
   "ja": {
    "topic": "片側デュレーション · どちらが大きいか",
    "front": "普通社債、コーラブル債、プッタブル債について \\(D_{\\text{up}}\\) と \\(D_{\\text{down}}\\) を比較せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>普通社債</strong>：\\(D_{\\text{down}}\\) がわずかに &gt; \\(D_{\\text{up}}\\)（プラスのコンベクシティ）</li><li><strong>コーラブル</strong>：\\(D_{\\text{down}}&lt;D_{\\text{up}}\\)：金利が下がると価格はコール価格付近で頭打ち</li><li><strong>プッタブル</strong>：\\(D_{\\text{up}}&lt;D_{\\text{down}}\\)：金利が上がると価格はプット価格付近で下げ止まる</li></ul></div>",
    "gap": "オプションがアット・ザ・マネーに近く、価格の反応が非対称なときに片側デュレーションが重要になる。"
   },
   "fr": {
    "topic": "Durations unilatérales · laquelle est la plus grande",
    "front": "Comparez \\(D_{\\text{up}}\\) et \\(D_{\\text{down}}\\) pour une obligation classique, callable et putable.",
    "back": "<div class=\"ans\"><ul><li><strong>Classique</strong> : \\(D_{\\text{down}}\\) légèrement &gt; \\(D_{\\text{up}}\\) (convexité positive)</li><li><strong>Callable</strong> : \\(D_{\\text{down}}&lt;D_{\\text{up}}\\) : le prix est plafonné près du prix de remboursement quand les taux baissent</li><li><strong>Putable</strong> : \\(D_{\\text{up}}&lt;D_{\\text{down}}\\) : le prix a un plancher près du prix du put quand les taux montent</li></ul></div>",
    "gap": "Les durations unilatérales comptent quand l’option est proche de la monnaie et que le prix réagit de façon asymétrique."
   }
  },
  "fi3-krd-plain": {
   "zh": {
    "topic": "关键利率久期 · 无期权",
    "front": "对按面值交易的无期权债券、不按面值交易的债券，以及零息债券，分别是哪些关键利率起作用？",
    "back": "<div class=\"ans\"><ul><li><strong>按面值</strong>：只有<strong>期限匹配的平价利率</strong>；其他 KRD 都为 0（票面利率等于该平价利率的债券，无论其他利率如何都按面值定价）</li><li><strong>不按面值</strong>：期限匹配的利率仍影响最大，但其他利率也有作用</li><li><strong>零息或票息极低</strong>：较短期限的 KRD 可能为<strong>负</strong></li></ul></div>",
    "gap": "KRD 衡量形状风险：以平价曲线为基准，对变陡、变平和扭转的敏感性。"
   },
   "ja": {
    "topic": "キーレート・デュレーション · オプションなし",
    "front": "パーで取引されるオプションなし債券、パーでない債券、ゼロ・クーポン債では、それぞれどのキーレートが効くか。",
    "back": "<div class=\"ans\"><ul><li><strong>パー</strong>：<strong>満期の一致するパー・レート</strong>だけ。他の KRD はすべて 0（クーポンがそのパー・レートに等しい債券は、他の金利にかかわらずパーで評価される）</li><li><strong>パーでない</strong>：満期の一致する金利が依然として最も大きく効くが、他の金利も効く</li><li><strong>ゼロまたは非常に低いクーポン</strong>：短い満期の KRD が<strong>マイナス</strong>になりうる</li></ul></div>",
    "gap": "KRD は形状リスクを測る：パー・カーブをベンチマークとして、スティープ化、フラット化、ねじれへの感応度。"
   },
   "fr": {
    "topic": "Durations de taux clé · sans option",
    "front": "Quels taux clés pilotent une obligation sans option cotant au pair, une ne cotant pas au pair, et une zéro-coupon ?",
    "back": "<div class=\"ans\"><ul><li><strong>Au pair</strong> : seul le <strong>taux au pair de même échéance</strong> ; toutes les autres KRD sont nulles (une obligation dont le coupon égale ce taux au pair cote au pair quels que soient les autres taux)</li><li><strong>Pas au pair</strong> : le taux de même échéance a toujours le plus d’effet, mais les autres comptent</li><li><strong>Zéro ou coupon très faible</strong> : les KRD des échéances plus courtes peuvent être <strong>négatives</strong></li></ul></div>",
    "gap": "Les KRD mesurent le risque de déformation : sensibilité à la pentification, à l’aplatissement et aux torsions, avec la courbe au pair comme référence."
   }
  },
  "fi3-krd-options": {
   "zh": {
    "topic": "关键利率久期 · 含期权",
    "front": "对低票息与高票息的可赎回债券、高票息与低票息的可回售债券，分别是哪个关键利率占主导？",
    "back": "<div class=\"ans\"><ul><li><strong>可赎回</strong>：低票息（不太可能被赎回）→ <strong>到期</strong>利率；高票息（可能被赎回）→ <strong>行权时间</strong>利率</li><li><strong>可回售</strong>：高票息（不太可能被回售）→ <strong>到期</strong>利率；低票息（可能被回售）→ <strong>行权时间</strong>利率</li></ul></div>",
    "gap": "预期债券在哪个日期结束，哪个平价利率就占主导。"
   },
   "ja": {
    "topic": "キーレート・デュレーション · オプション付き",
    "front": "低クーポンと高クーポンのコーラブル債、高クーポンと低クーポンのプッタブル債では、それぞれどのキーレートが支配的か。",
    "back": "<div class=\"ans\"><ul><li><strong>コーラブル</strong>：低クーポン（コールされにくい）→ <strong>満期</strong>の金利、高クーポン（コールされやすい）→ <strong>行使までの期間</strong>の金利</li><li><strong>プッタブル</strong>：高クーポン（プットされにくい）→ <strong>満期</strong>の金利、低クーポン（プットされやすい）→ <strong>行使までの期間</strong>の金利</li></ul></div>",
    "gap": "債券がどの日に終わると予想されるか、その日のパー・レートが支配的になる。"
   },
   "fr": {
    "topic": "Durations de taux clé · options",
    "front": "Quel taux clé domine une callable à coupon faible ou élevé, et une putable à coupon élevé ou faible ?",
    "back": "<div class=\"ans\"><ul><li><strong>Callable</strong> : coupon faible (peu de chances d’être remboursée) → taux de l’<strong>échéance</strong> ; coupon élevé (remboursement probable) → taux de la <strong>date d’exercice</strong></li><li><strong>Putable</strong> : coupon élevé (peu de chances d’être revendue) → taux de l’<strong>échéance</strong> ; coupon faible (revente probable) → taux de la <strong>date d’exercice</strong></li></ul></div>",
    "gap": "Le taux au pair de la date à laquelle l’obligation devrait se terminer domine."
   }
  },
  "fi3-floater": {
   "zh": {
    "topic": "浮息债券",
    "front": "浮息债的票息如何确定？为什么它在重置日按面值定价？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Coupon}={}&\\text{Reference rate}\\\\&+\\text{Margin}\\end{aligned}$$</div><p>报价利差固定。票息<strong>后付</strong>：按期间<strong>开始</strong>时的利率确定，在期末支付。若报价利差等于要求利差，浮息债<strong>在每个重置日都按面值</strong>定价。</p></div>",
    "gap": "TIPS 不是浮息债：其票面利率固定，本金与通胀挂钩。"
   },
   "ja": {
    "topic": "変動利付債",
    "front": "変動利付債のクーポンはどう決まるか。なぜ金利更改日にはパーで評価されるのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Coupon}={}&\\text{Reference rate}\\\\&+\\text{Margin}\\end{aligned}$$</div><p>クォーテッド・マージンは固定。クーポンは<strong>後払い</strong>：期間の<strong>初め</strong>の金利で決まり、期末に支払われる。クォーテッド・マージンが要求マージンと等しければ、変動利付債は<strong>各更改日にパー</strong>になる。</p></div>",
    "gap": "TIPS は変動利付債ではない：クーポン・レートは固定で、元本がインフレに連動する。"
   },
   "fr": {
    "topic": "Obligations à taux variable",
    "front": "Comment le coupon d’une obligation à taux variable est-il fixé, et pourquoi cote-t-elle au pair aux dates de refixation ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{Coupon}={}&\\text{Reference rate}\\\\&+\\text{Margin}\\end{aligned}$$</div><p>La marge cotée est fixe. Les coupons sont payés <strong>à terme échu</strong> : fixés au taux du <strong>début</strong> de la période, payés à sa fin. Si la marge cotée égale la marge exigée, l’obligation est <strong>au pair à chaque date de refixation</strong>.</p></div>",
    "gap": "Les TIPS ne sont pas à taux variable : leur taux de coupon est fixe et leur principal est indexé sur l’inflation."
   }
  },
  "fi3-cap-floor": {
   "zh": {
    "topic": "上限与下限",
    "front": "浮息债的利率上限和下限分别对谁有利？写出每种债券的价值。",
    "back": "<div class=\"ans\"><ul><li><strong>上限</strong>（最高票息）：保护<strong>发行人</strong>免受利率上升影响</li><li><strong>下限</strong>（最低票息）：保护<strong>投资者</strong>免受利率下降影响</li></ul><div class=\"eq-block\">$$V_{\\text{capped}}=V_{\\text{straight}}-V_{\\text{cap}}$$</div><div class=\"eq-block\">$$V_{\\text{floored}}=V_{\\text{straight}}+V_{\\text{floor}}$$</div></div>",
    "gap": "同时有上限和下限的浮息债是领式浮息债。"
   },
   "ja": {
    "topic": "キャップとフロア",
    "front": "変動利付債のキャップとフロアは、それぞれ誰に有利か。各債券の価値を示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>キャップ</strong>（クーポンの上限）：金利上昇から<strong>発行体</strong>を守る</li><li><strong>フロア</strong>（クーポンの下限）：金利低下から<strong>投資家</strong>を守る</li></ul><div class=\"eq-block\">$$V_{\\text{capped}}=V_{\\text{straight}}-V_{\\text{cap}}$$</div><div class=\"eq-block\">$$V_{\\text{floored}}=V_{\\text{straight}}+V_{\\text{floor}}$$</div></div>",
    "gap": "キャップとフロアの両方をもつ変動利付債はカラー付き変動利付債。"
   },
   "fr": {
    "topic": "Caps et floors",
    "front": "À qui profitent un cap et un floor sur une obligation à taux variable ? Écrivez la valeur de chaque obligation.",
    "back": "<div class=\"ans\"><ul><li><strong>Cap</strong> (coupon maximum) : protège l’<strong>émetteur</strong> contre la hausse des taux</li><li><strong>Floor</strong> (coupon minimum) : protège l’<strong>investisseur</strong> contre la baisse des taux</li></ul><div class=\"eq-block\">$$V_{\\text{capped}}=V_{\\text{straight}}-V_{\\text{cap}}$$</div><div class=\"eq-block\">$$V_{\\text{floored}}=V_{\\text{straight}}+V_{\\text{floor}}$$</div></div>",
    "gap": "Une obligation à taux variable avec cap et floor est une obligation à taux variable avec collar."
   }
  },
  "fi3-cap-example": {
   "zh": {
    "topic": "带上限和下限的浮息债例题",
    "front": "一只 2 年期浮息债在 3% / 8% / 5% 的树上按一年期利率（利差 0）每年后付。分别对 6% 上限和 5.5% 下限的情形估值。",
    "back": "<div class=\"ans\"><p>每期票息由该期开始时的利率决定。</p><ul><li><strong>6% 上限</strong>：上升节点支付 6 而不是 8：\\(106/1.08=98.148\\)；下降 \\(=100\\)。\\(V_0=\\frac{101.148+103}{2.06}=99.101\\)；上限 \\(=0.899\\)</li><li><strong>5.5% 下限</strong>：今天和下降节点的票息升至 5.5：上升 \\(=100\\)，下降 \\(105.5/1.05=100.476\\)。\\(V_0=\\frac{105.5+105.976}{2.06}=102.658\\)；下限 \\(=2.658\\)</li></ul></div>",
    "gap": "记住第 1 年的票息由今天的 3% 决定，所以下限也会把它抬高。"
   },
   "ja": {
    "topic": "キャップ付き・フロア付き変動利付債の計算例",
    "front": "2 年の変動利付債が、3% / 8% / 5% のツリーで 1 年金利（マージン 0）を年 1 回後払いで支払う。6% キャップ付き、5.5% フロア付きでそれぞれ評価せよ。",
    "back": "<div class=\"ans\"><p>各クーポンはその期間の初めの金利で決まる。</p><ul><li><strong>6% キャップ</strong>：上のノードは 8 ではなく 6 を支払う：\\(106/1.08=98.148\\)、下 \\(=100\\)。\\(V_0=\\frac{101.148+103}{2.06}=99.101\\)、キャップ \\(=0.899\\)</li><li><strong>5.5% フロア</strong>：今日と下のノードのクーポンが 5.5 に上がる：上 \\(=100\\)、下 \\(105.5/1.05=100.476\\)。\\(V_0=\\frac{105.5+105.976}{2.06}=102.658\\)、フロア \\(=2.658\\)</li></ul></div>",
    "gap": "1 年目のクーポンは今日の 3% で決まるので、フロアはそれも引き上げることを忘れない。"
   },
   "fr": {
    "topic": "Exemple d’obligation à taux variable avec cap et floor",
    "front": "Une obligation à taux variable à 2 ans paie le taux à un an (marge 0) annuellement à terme échu sur l’arbre 3 % / 8 % / 5 %. Évaluez-la avec un cap à 6 %, puis avec un floor à 5,5 %.",
    "back": "<div class=\"ans\"><p>Chaque coupon est fixé au taux du début de sa période.</p><ul><li><strong>Cap à 6 %</strong> : le nœud haut paie 6 au lieu de 8 : \\(106/1.08=98.148\\) ; bas \\(=100\\). \\(V_0=\\frac{101.148+103}{2.06}=99.101\\) ; cap \\(=0.899\\)</li><li><strong>Floor à 5,5 %</strong> : les coupons d’aujourd’hui et du nœud bas passent à 5,5 : haut \\(=100\\), bas \\(105.5/1.05=100.476\\). \\(V_0=\\frac{105.5+105.976}{2.06}=102.658\\) ; floor \\(=2.658\\)</li></ul></div>",
    "gap": "Le coupon de l’année 1 est fixé par le taux actuel de 3 % : le floor le relève donc aussi."
   }
  },
  "fi3-ratchet": {
   "zh": {
    "topic": "棘轮债券",
    "front": "什么是棘轮债券？发行人和投资者各持有什么期权？",
    "back": "<div class=\"ans\"><p>一种在每次重置时票息只能<strong>下降</strong>的浮息债：上限只降不升。</p><ul><li><strong>发行人</strong>：极强的保护；票息随利率下降，但永不上升</li><li><strong>投资者</strong>：按面值的<strong>或有回售权</strong>，只能在票息被下调的重置日行使</li></ul></div>"
   },
   "ja": {
    "topic": "ラチェット債",
    "front": "ラチェット債とは何か。発行体と投資家はそれぞれどんなオプションを持つか。",
    "back": "<div class=\"ans\"><p>各更改日にクーポンが<strong>下がる</strong>ことしかない変動利付債：キャップは下がる一方で、上がることはない。</p><ul><li><strong>発行体</strong>：非常に強い保護。クーポンは金利とともに下がるが決して上がらない</li><li><strong>投資家</strong>：額面での<strong>条件付きプット</strong>。クーポンが引き下げられる更改日にだけ行使できる</li></ul></div>"
   },
   "fr": {
    "topic": "Obligation à cliquet",
    "front": "Qu’est-ce qu’une obligation à cliquet (ratchet), et quelles options détiennent l’émetteur et l’investisseur ?",
    "back": "<div class=\"ans\"><p>Une obligation à taux variable dont le coupon ne peut que <strong>baisser</strong> à chaque refixation : le cap descend par crans et ne remonte jamais.</p><ul><li><strong>Émetteur</strong> : protection extrême ; le coupon baisse avec les taux mais ne monte jamais</li><li><strong>Investisseur</strong> : un <strong>put conditionnel</strong> au pair, exerçable seulement à une refixation où le coupon est abaissé</li></ul></div>"
   }
  },
  "fi3-conv-defs": {
   "zh": {
    "topic": "可转换债券 · 定义",
    "front": "定义转换价格、市场转换价格、市场转换溢价率、转换价值和最低价值。",
    "back": "<div class=\"ans\"><ul><li>转换价格 \\(=\\) 发行价 / 转换比率</li><li>市场转换价格 \\(=\\) 债券价格 / 转换比率</li><li>每股溢价 \\(=\\) 市场转换价格 − 股价；溢价率 \\(=\\) 溢价 / 股价</li><li>转换价值 \\(=\\) 股价 × 转换比率</li><li>最低价值 \\(=\\max(\\)转换价值，普通债券价值\\()\\)</li></ul></div>"
   },
   "ja": {
    "topic": "転換社債 · 定義",
    "front": "転換価格、市場転換価格、市場転換プレミアム率、転換価値、最低価値を定義せよ。",
    "back": "<div class=\"ans\"><ul><li>転換価格 \\(=\\) 発行価格 / 転換比率</li><li>市場転換価格 \\(=\\) 債券価格 / 転換比率</li><li>1 株当たりプレミアム \\(=\\) 市場転換価格 − 株価、プレミアム率 \\(=\\) プレミアム / 株価</li><li>転換価値 \\(=\\) 株価 × 転換比率</li><li>最低価値 \\(=\\max(\\)転換価値、普通社債の価値\\()\\)</li></ul></div>"
   },
   "fr": {
    "topic": "Obligation convertible · définitions",
    "front": "Définissez le prix de conversion, le prix de conversion de marché, le ratio de prime de conversion de marché, la valeur de conversion et la valeur minimale.",
    "back": "<div class=\"ans\"><ul><li>Prix de conversion \\(=\\) prix d’émission / ratio de conversion</li><li>Prix de conversion de marché \\(=\\) prix de l’obligation / ratio de conversion</li><li>Prime par action \\(=\\) prix de conversion de marché − cours de l’action ; ratio de prime \\(=\\) prime / cours</li><li>Valeur de conversion \\(=\\) cours × ratio de conversion</li><li>Valeur minimale \\(=\\max(\\)valeur de conversion, valeur obligataire classique\\()\\)</li></ul></div>"
   }
  },
  "fi3-conv-example": {
   "zh": {
    "topic": "可转换债券例题",
    "front": "一只可转债（面值 1,000）交易价 1,100，可转换为 40 股，股价 25，普通债券价值 950。求转换价值、市场转换价格、溢价率、最低价值和相对普通债券价值的溢价。",
    "back": "<div class=\"ans\"><ul><li>转换价值 \\(=25\\times40=1{,}000\\)</li><li>市场转换价格 \\(=1{,}100/40=27.50\\)</li><li>溢价 \\(=2.50\\)；溢价率 \\(=2.50/25=10\\%\\)</li><li>最低价值 \\(=\\max(1{,}000,\\ 950)=1{,}000\\)</li><li>相对普通债券价值的溢价 \\(=1{,}100/950-1=15.8\\%\\)</li></ul></div>"
   },
   "ja": {
    "topic": "転換社債の計算例",
    "front": "転換社債（額面 1,000）の価格は 1,100、40 株に転換でき、株価は 25、普通社債としての価値は 950。転換価値、市場転換価格、プレミアム率、最低価値、普通社債価値に対するプレミアムを求めよ。",
    "back": "<div class=\"ans\"><ul><li>転換価値 \\(=25\\times40=1{,}000\\)</li><li>市場転換価格 \\(=1{,}100/40=27.50\\)</li><li>プレミアム \\(=2.50\\)、プレミアム率 \\(=2.50/25=10\\%\\)</li><li>最低価値 \\(=\\max(1{,}000,\\ 950)=1{,}000\\)</li><li>普通社債価値に対するプレミアム \\(=1{,}100/950-1=15.8\\%\\)</li></ul></div>"
   },
   "fr": {
    "topic": "Exemple d’obligation convertible",
    "front": "Une convertible (nominal 1 000) cote 1 100, se convertit en 40 actions, l’action cote 25 et la valeur obligataire classique est de 950. Trouvez la valeur de conversion, le prix de conversion de marché, le ratio de prime, la valeur minimale et la prime sur la valeur classique.",
    "back": "<div class=\"ans\"><ul><li>Valeur de conversion \\(=25\\times40=1{,}000\\)</li><li>Prix de conversion de marché \\(=1{,}100/40=27.50\\)</li><li>Prime \\(=2.50\\) ; ratio de prime \\(=2.50/25=10\\%\\)</li><li>Valeur minimale \\(=\\max(1{,}000,\\ 950)=1{,}000\\)</li><li>Prime sur la valeur classique \\(=1{,}100/950-1=15.8\\%\\)</li></ul></div>"
   }
  },
  "fi3-conv-value": {
   "zh": {
    "topic": "可转换债券 · 估值",
    "front": "写出同时可由发行人赎回、可由投资者回售的可转债的价值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{conv}}={}&V_{\\text{straight}}\\\\&+V_{\\text{call on stock}}\\\\&-V_{\\text{issuer call}}\\\\&+V_{\\text{investor put}}\\end{aligned}$$</div><p>转换权是投资者持有的<strong>对发行人股票的看涨期权</strong>。下行受普通债券价值限制；上行取决于股票。</p></div>"
   },
   "ja": {
    "topic": "転換社債 · 評価",
    "front": "発行体がコールでき、投資家がプットできる転換社債の価値を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{conv}}={}&V_{\\text{straight}}\\\\&+V_{\\text{call on stock}}\\\\&-V_{\\text{issuer call}}\\\\&+V_{\\text{investor put}}\\end{aligned}$$</div><p>転換権は投資家が持つ<strong>発行体株式へのコール</strong>。下値は普通社債の価値で限定され、上値は株式に依存する。</p></div>"
   },
   "fr": {
    "topic": "Obligation convertible · évaluation",
    "front": "Écrivez la valeur d’une convertible également remboursable par l’émetteur et revendable par l’investisseur.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{\\text{conv}}={}&V_{\\text{straight}}\\\\&+V_{\\text{call on stock}}\\\\&-V_{\\text{issuer call}}\\\\&+V_{\\text{investor put}}\\end{aligned}$$</div><p>Le droit de conversion est un <strong>call sur les actions de l’émetteur</strong> détenu par l’investisseur. La baisse est limitée par la valeur classique ; la hausse dépend de l’action.</p></div>"
   }
  },
  "fi3-conv-perf": {
   "zh": {
    "topic": "可转债与股票",
    "front": "股价上涨、下跌或稳定时，可转债相对股票表现如何？什么是破发的可转债？",
    "back": "<div class=\"ans\"><ul><li><strong>上涨</strong>：跑输（支付了转换溢价）</li><li><strong>下跌</strong>：跑赢（普通债券价值限制了跌幅）</li><li><strong>稳定</strong>：通常跑赢（票息高于股利）</li></ul><p>股价远低于转换价格：可转债表现得像<strong>债券</strong>（破发可转债）。远高于时：像<strong>股票</strong>。</p></div>"
   },
   "ja": {
    "topic": "転換社債と株式",
    "front": "株価が上昇、下落、横ばいのとき、転換社債は株式に比べてどうなるか。バステッド・コンバーティブルとは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>上昇</strong>：アンダーパフォーム（転換プレミアムを払っている）</li><li><strong>下落</strong>：アウトパフォーム（普通社債の価値が下落を限定する）</li><li><strong>横ばい</strong>：通常アウトパフォーム（クーポンが配当を上回る）</li></ul><p>株価が転換価格を大きく下回る：転換社債は<strong>債券</strong>のように振る舞う（バステッド・コンバーティブル）。大きく上回る：<strong>株式</strong>のように振る舞う。</p></div>"
   },
   "fr": {
    "topic": "Convertible ou actions",
    "front": "Comment une convertible se comporte-t-elle par rapport aux actions quand le cours monte, baisse ou reste stable ? Qu’est-ce qu’une convertible « cassée » ?",
    "back": "<div class=\"ans\"><ul><li><strong>Hausse</strong> : sous-performe (la prime de conversion a été payée)</li><li><strong>Baisse</strong> : surperforme (la valeur classique limite la chute)</li><li><strong>Stable</strong> : surperforme en général (les coupons dépassent les dividendes)</li></ul><p>Cours très inférieur au prix de conversion : la convertible se comporte comme une <strong>obligation</strong> (convertible cassée). Très supérieur : comme l’<strong>action</strong>.</p></div>"
   }
  }
 }
});
