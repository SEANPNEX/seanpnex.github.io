deckI18n({
 "source": {
  "zh": "CFA 二级 固定收益 · M2 无套利估值 · 单元复习",
  "ja": "CFA レベル II 債券 · M2 無裁定評価 · 単元の復習",
  "fr": "CFA niveau II Titres à revenu fixe · M2 Évaluation sans arbitrage · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "fi2-arb-free": {
   "zh": {
    "topic": "无套利估值",
    "front": "无套利估值与传统（YTM）估值有何不同？它基于什么原理？",
    "back": "<div class=\"ans\"><p>传统估值用<strong>同一个利率</strong>（YTM）折现所有现金流。无套利估值用<strong>各自日期的即期利率</strong>折现每笔现金流，因此价格与市场上所有其他债券一致。</p><p>它基于<strong>一价定律</strong>：未来现金流相同的两项资产，今天的价格必须相同。</p></div>",
    "gap": "如果一价定律不成立，就买入便宜的资产、卖出昂贵的资产，锁定无风险利润。"
   },
   "ja": {
    "topic": "無裁定評価",
    "front": "無裁定評価は従来の（YTM による）評価とどう違うか。どんな原理に基づくか。",
    "back": "<div class=\"ans\"><p>従来の評価はすべてのキャッシュフローを<strong>1 つの金利</strong>（YTM）で割り引く。無裁定評価は各キャッシュフローを<strong>その日付のスポット・レート</strong>で割り引くので、価格が市場の他のすべての債券と整合する。</p><p><strong>一物一価の法則</strong>に基づく：将来のキャッシュフローが同じ 2 つの資産は、今日の価格も同じでなければならない。</p></div>",
    "gap": "一物一価が成り立たなければ、安い資産を買い高い資産を売って、無リスクの利益を確定できる。"
   },
   "fr": {
    "topic": "Évaluation sans arbitrage",
    "front": "En quoi l’évaluation sans arbitrage diffère-t-elle de l’évaluation traditionnelle (par le YTM), et sur quel principe repose-t-elle ?",
    "back": "<div class=\"ans\"><p>L’évaluation traditionnelle actualise chaque flux à <strong>un seul taux</strong>, le YTM. L’évaluation sans arbitrage actualise chaque flux au <strong>taux au comptant de sa propre date</strong> : le prix est alors cohérent avec toutes les autres obligations du marché.</p><p>Elle repose sur la <strong>loi du prix unique</strong> : deux actifs aux flux futurs identiques doivent avoir le même prix aujourd’hui.</p></div>",
    "gap": "Si la loi du prix unique est violée, achetez l’actif bon marché, vendez le cher et verrouillez un profit sans risque."
   }
  },
  "fi2-arb-example": {
   "zh": {
    "topic": "套利例题",
    "front": "资产 A 价格 0.952381，一年后支付 1。资产 B 价格 95，一年后支付 105（都无风险）。是否存在套利？如何利用？",
    "back": "<div class=\"ans\"><p>按 A 的 5% 利率，B 值 \\(105\\times0.952381=100\\)：它<strong>被低估了 5</strong>。</p><ul><li><strong>T = 0</strong>：卖空 105 单位 A（收到 100），以 95 买入 B：利润 <strong>5</strong></li><li><strong>T = 1</strong>：B 支付 105，正好覆盖 A 上欠的 105：净额 <strong>0</strong></li></ul></div>",
    "gap": "套利利润要么是今天获得且没有未来现金流，要么是今天无成本而未来收益为正。"
   },
   "ja": {
    "topic": "裁定の例",
    "front": "資産 A は価格 0.952381 で 1 年後に 1 を支払う。資産 B は価格 95 で 1 年後に 105 を支払う（どちらも無リスク）。裁定機会はあるか。どう利用するか。",
    "back": "<div class=\"ans\"><p>A の 5% の金利で評価すると B は \\(105\\times0.952381=100\\)：<strong>5 だけ割安</strong>。</p><ul><li><strong>T = 0</strong>：A を 105 単位空売り（100 を受け取る）、B を 95 で買う：利益 <strong>5</strong></li><li><strong>T = 1</strong>：B が 105 を支払い、A の債務 105 をちょうど賄う：正味 <strong>0</strong></li></ul></div>",
    "gap": "裁定利益は、将来のキャッシュフローなしに今日得るか、今日のコストなしに将来プラスの受取りを得るかのどちらか。"
   },
   "fr": {
    "topic": "Exemple d’arbitrage",
    "front": "L’actif A coûte 0,952381 et paie 1 dans un an. L’actif B coûte 95 et paie 105 dans un an (tous deux sans risque). Y a-t-il un arbitrage, et comment l’exploiter ?",
    "back": "<div class=\"ans\"><p>Au taux de 5 % de A, B vaut \\(105\\times0.952381=100\\) : il est <strong>sous-évalué de 5</strong>.</p><ul><li><strong>T = 0</strong> : vendre à découvert 105 unités de A (recevoir 100), acheter B à 95 : profit <strong>5</strong></li><li><strong>T = 1</strong> : B paie 105, ce qui couvre exactement les 105 dus sur A : net <strong>0</strong></li></ul></div>",
    "gap": "Un profit d’arbitrage s’obtient aujourd’hui sans flux futur, ou sans coût aujourd’hui avec un gain futur positif."
   }
  },
  "fi2-arb-types": {
   "zh": {
    "topic": "套利类型",
    "front": "说出两种套利机会，以及与第一种相关的两种交易商交易。",
    "back": "<div class=\"ans\"><ul><li><strong>价值可加性</strong>：整体必须等于各部分之和。<ul><li><strong>剥离</strong>：当各部分价值高于整体时，把债券拆成零息部分</li><li><strong>重组</strong>：当整体价值更高时，把零息债券重新组合成债券</li></ul></li><li><strong>占优</strong>：未来收益无风险的资产价格必须为正；在每种状态下支付都不少的资产，价格不能更低</li></ul></div>"
   },
   "ja": {
    "topic": "裁定の種類",
    "front": "2 種類の裁定機会と、1 つ目に関連するディーラーの 2 つの取引を挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>価値の加法性</strong>：全体は部分の合計に等しくなければならない。<ul><li><strong>ストリッピング</strong>：部分の価値が全体より高いとき、債券をゼロ・クーポンの部分に分解する</li><li><strong>リコンスティテューション</strong>：全体の価値が高いとき、ゼロを組み直して債券にする</li></ul></li><li><strong>優越</strong>：将来の受取りが無リスクの資産の価格はプラスでなければならない。すべての状態で少なくとも同額を支払う資産が安いことはありえない</li></ul></div>"
   },
   "fr": {
    "topic": "Types d’arbitrage",
    "front": "Citez les deux types d’opportunité d’arbitrage et les deux opérations de courtier liées au premier.",
    "back": "<div class=\"ans\"><ul><li><strong>Additivité des valeurs</strong> : le tout doit égaler la somme de ses parties.<ul><li><strong>Démembrement (stripping)</strong> : découper une obligation en zéro-coupons quand les parties valent plus que le tout</li><li><strong>Reconstitution</strong> : recombiner les zéros en obligation quand le tout vaut plus</li></ul></li><li><strong>Dominance</strong> : un actif au gain futur sans risque doit avoir un prix positif ; un actif qui paie au moins autant dans chaque état ne peut pas coûter moins</li></ul></div>"
   }
  },
  "fi2-why-tree": {
   "zh": {
    "topic": "为什么用二叉树",
    "front": "为什么含嵌入期权的债券不能只用即期利率估值？",
    "back": "<div class=\"ans\"><p>其现金流<strong>取决于利率如何变化</strong>：利率下降时，可赎回债券很可能被赎回。一组即期利率无法提供未来利率路径的信息。</p><p><strong>二叉树利率模型</strong>对可能的路径建模。对不含期权的债券，它给出的价值与按即期利率折现相同。</p></div>"
   },
   "ja": {
    "topic": "なぜ二項ツリーか",
    "front": "組込オプション付き債券をスポット・レートだけで評価できないのはなぜか。",
    "back": "<div class=\"ans\"><p>そのキャッシュフローは<strong>金利がどう変化するかに依存する</strong>：金利が下がればコーラブル債はコールされやすい。1 組のスポット・レートからは将来の金利経路の情報が得られない。</p><p><strong>二項金利ツリー</strong>は起こりうる経路をモデル化する。オプションなしの債券では、スポット・レートで割り引いたのと同じ価値になる。</p></div>"
   },
   "fr": {
    "topic": "Pourquoi un arbre binomial",
    "front": "Pourquoi une obligation à option incorporée ne peut-elle pas être évaluée avec les seuls taux au comptant ?",
    "back": "<div class=\"ans\"><p>Ses flux <strong>dépendent de l’évolution des taux</strong> : une obligation remboursable par anticipation sera probablement remboursée si les taux baissent. Un jeu de taux au comptant ne dit rien des trajectoires futures des taux.</p><p>Un <strong>arbre binomial de taux</strong> modélise les trajectoires possibles. Pour une obligation sans option, il donne la même valeur que l’actualisation aux taux au comptant.</p></div>"
   }
  },
  "fi2-model-form": {
   "zh": {
    "topic": "期限结构模型",
    "front": "期限结构模型的一般形式是什么？\\(dZ\\) 是什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\text{drift}\\,dt+\\text{volatility}\\,dZ$$</div><p>\\(dZ\\) 是<strong>维纳过程</strong>的增量：均值为 0、方差为 \\(dt\\) 的随机冲击。漂移项是短期利率的预期变化；波动率项决定冲击的大小。</p></div>"
   },
   "ja": {
    "topic": "期間構造モデル",
    "front": "期間構造モデルの一般形は何か。\\(dZ\\) とは何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\text{drift}\\,dt+\\text{volatility}\\,dZ$$</div><p>\\(dZ\\) は<strong>ウィーナー過程</strong>の増分：平均 0、分散 \\(dt\\) のランダムなショック。ドリフトは短期金利の期待変化、ボラティリティ項はショックの大きさを決める。</p></div>"
   },
   "fr": {
    "topic": "Modèles de structure par terme",
    "front": "Quelle est la forme générale d’un modèle de structure par terme, et qu’est-ce que \\(dZ\\) ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\text{drift}\\,dt+\\text{volatility}\\,dZ$$</div><p>\\(dZ\\) est l’accroissement d’un <strong>processus de Wiener</strong> : un choc aléatoire de moyenne 0 et de variance \\(dt\\). La dérive est la variation attendue du taux court ; le terme de volatilité fixe la taille des chocs.</p></div>"
   }
  },
  "fi2-eq-vs-af": {
   "zh": {
    "topic": "均衡模型与无套利模型",
    "front": "均衡期限结构模型与无套利期限结构模型有何不同？",
    "back": "<div class=\"ans\"><ul><li><strong>均衡</strong>（CIR、Vasicek）：基于<strong>基本经济变量</strong>构建；设定漂移和波动率的形式；参数来自经济学或历史数据，所以价格<strong>不必与</strong>今天的市场一致</li><li><strong>无套利</strong>（Ho-Lee、KWF）：经过<strong>校准</strong>以再现今天的基准债券价格（\\(V=P\\)），然后用于对其他证券估值，如含期权的债券</li></ul></div>",
    "gap": "均衡模型可以是单因子（只有短期利率）或多因子。"
   },
   "ja": {
    "topic": "均衡モデルと無裁定モデル",
    "front": "均衡型と無裁定型の期間構造モデルはどう違うか。",
    "back": "<div class=\"ans\"><ul><li><strong>均衡</strong>（CIR、バシチェック）：<strong>基礎的な経済変数</strong>から構築。ドリフトとボラティリティの形を特定する。パラメータは経済理論や過去データから得るので、価格は今日の市場と<strong>一致するとは限らない</strong></li><li><strong>無裁定</strong>（ホー・リー、KWF）：今日のベンチマーク債の価格を再現するよう<strong>キャリブレーション</strong>し（\\(V=P\\)）、その後オプション付き債券など他の証券の評価に使う</li></ul></div>",
    "gap": "均衡モデルには 1 ファクター（短期金利のみ）とマルチ・ファクターがある。"
   },
   "fr": {
    "topic": "Modèles d’équilibre ou sans arbitrage",
    "front": "En quoi les modèles de structure par terme d’équilibre et sans arbitrage diffèrent-ils ?",
    "back": "<div class=\"ans\"><ul><li><strong>Équilibre</strong> (CIR, Vasicek) : construits à partir de <strong>variables économiques fondamentales</strong> ; spécifient la dérive et la forme de la volatilité ; les paramètres viennent de l’économie ou de l’historique, donc les prix <strong>ne correspondent pas forcément</strong> au marché actuel</li><li><strong>Sans arbitrage</strong> (Ho-Lee, KWF) : <strong>calibrés</strong> pour reproduire les prix actuels des obligations de référence (\\(V=P\\)), puis utilisés pour évaluer d’autres titres, p. ex. les obligations à option</li></ul></div>",
    "gap": "Les modèles d’équilibre peuvent être à un facteur (le taux court seul) ou multifactoriels."
   }
  },
  "fi2-cir": {
   "zh": {
    "topic": "CIR 模型",
    "front": "写出 Cox-Ingersoll-Ross 模型。为什么其利率永远不会为负？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\sqrt{r_t}\\,dZ$$</div><ul><li>\\(\\theta\\)：长期均衡短期利率；\\(k\\)：<strong>均值回归</strong>的速度</li><li>冲击 \\(\\sigma\\sqrt{r_t}\\) <strong>随利率下降而缩小</strong>：接近零时，漂移会在冲击把利率推到零以下之前将其拉回</li></ul></div>"
   },
   "ja": {
    "topic": "CIR モデル",
    "front": "コックス・インガソル・ロス・モデルを示せ。なぜその金利は決してマイナスにならないのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\sqrt{r_t}\\,dZ$$</div><ul><li>\\(\\theta\\)：長期の均衡短期金利、\\(k\\)：<strong>平均回帰</strong>の速さ</li><li>ショック \\(\\sigma\\sqrt{r_t}\\) は<strong>金利が下がると小さくなる</strong>：ゼロ近くでは、ショックがゼロ未満に押し下げる前にドリフトが金利を引き戻す</li></ul></div>"
   },
   "fr": {
    "topic": "Modèle CIR",
    "front": "Écrivez le modèle de Cox-Ingersoll-Ross. Pourquoi ses taux ne peuvent-ils jamais devenir négatifs ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\sqrt{r_t}\\,dZ$$</div><ul><li>\\(\\theta\\) : taux court d’équilibre de long terme ; \\(k\\) : vitesse de <strong>retour à la moyenne</strong></li><li>Le choc \\(\\sigma\\sqrt{r_t}\\) <strong>diminue quand les taux baissent</strong> : près de zéro, la dérive ramène le taux vers le haut avant qu’un choc ne le pousse sous zéro</li></ul></div>"
   }
  },
  "fi2-vasicek": {
   "zh": {
    "topic": "Vasicek 模型",
    "front": "写出 Vasicek 模型并与 CIR 比较。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\,dZ$$</div><p>与 CIR 有相同的<strong>均值回归</strong>漂移，但波动率 \\(\\sigma\\) <strong>恒定</strong>，与利率水平无关。冲击在接近零时不会缩小，所以<strong>利率可能为负</strong>。</p></div>"
   },
   "ja": {
    "topic": "バシチェック・モデル",
    "front": "バシチェック・モデルを示し、CIR と比較せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\,dZ$$</div><p>CIR と同じ<strong>平均回帰</strong>のドリフトだが、ボラティリティ \\(\\sigma\\) は金利水準によらず<strong>一定</strong>。ゼロ近くでもショックが小さくならないので、<strong>金利はマイナスになりうる</strong>。</p></div>"
   },
   "fr": {
    "topic": "Modèle de Vasicek",
    "front": "Écrivez le modèle de Vasicek et comparez-le au CIR.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=k(\\theta-r_t)\\,dt+\\sigma\\,dZ$$</div><p>Même dérive de <strong>retour à la moyenne</strong> que le CIR, mais une volatilité \\(\\sigma\\) <strong>constante</strong>, indépendante du niveau des taux. Les chocs ne diminuent pas près de zéro : <strong>les taux peuvent devenir négatifs</strong>.</p></div>"
   }
  },
  "fi2-holee": {
   "zh": {
    "topic": "Ho-Lee 模型",
    "front": "写出 Ho-Lee 模型。其漂移有何不同？其利率能否为负？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>\\(\\theta_t\\) 是<strong>随时间变化的漂移</strong>，经校准使模型能准确为每只基准债券定价：一个<strong>无套利</strong>模型。波动率恒定，利率服从<strong>正态</strong>分布，所以<strong>可能为负</strong>。</p></div>",
    "gap": "这里的 \\(\\theta_t\\) 不是 CIR 和 Vasicek 的长期水平 \\(\\theta\\)：没有均值回归。"
   },
   "ja": {
    "topic": "ホー・リー・モデル",
    "front": "ホー・リー・モデルを示せ。ドリフトの何が違うか。金利はマイナスになりうるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>\\(\\theta_t\\) は<strong>時間に依存するドリフト</strong>で、モデルがすべてのベンチマーク債を正確に評価するようキャリブレーションされる：<strong>無裁定</strong>モデル。ボラティリティは一定で金利は<strong>正規分布</strong>なので、<strong>マイナスになりうる</strong>。</p></div>",
    "gap": "ここでの \\(\\theta_t\\) は CIR やバシチェックの長期水準 \\(\\theta\\) ではない：平均回帰はない。"
   },
   "fr": {
    "topic": "Modèle de Ho-Lee",
    "front": "Écrivez le modèle de Ho-Lee. Qu’a de particulier sa dérive, et ses taux peuvent-ils être négatifs ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$dr_t=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>\\(\\theta_t\\) est une <strong>dérive dépendant du temps</strong>, calibrée pour que le modèle valorise exactement chaque obligation de référence : un modèle <strong>sans arbitrage</strong>. Volatilité constante et taux <strong>normaux</strong> : ils <strong>peuvent être négatifs</strong>.</p></div>",
    "gap": "Ici \\(\\theta_t\\) n’est pas le niveau de long terme \\(\\theta\\) du CIR et de Vasicek : il n’y a pas de retour à la moyenne."
   }
  },
  "fi2-kwf": {
   "zh": {
    "topic": "Kalotay-Williams-Fabozzi 模型",
    "front": "写出 KWF 模型。它与 Ho-Lee 和二叉树有何关系？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$d(\\ln r_t)=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>对短期利率的<strong>对数</strong>应用 Ho-Lee。\\(\\ln r\\) 服从正态分布，所以 \\(r\\) 服从<strong>对数正态</strong>分布，<strong>不可能为负</strong>。二叉树利率模型使用同样的对数正态假设。</p></div>"
   },
   "ja": {
    "topic": "カロテイ・ウィリアムズ・ファボッツィ・モデル",
    "front": "KWF モデルを示せ。ホー・リーや二項ツリーとどう関係するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$d(\\ln r_t)=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>短期金利の<strong>対数</strong>にホー・リーを適用したもの。\\(\\ln r\\) は正規分布なので \\(r\\) は<strong>対数正規</strong>で、<strong>マイナスになりえない</strong>。二項金利ツリーも同じ対数正規の前提を使う。</p></div>"
   },
   "fr": {
    "topic": "Modèle de Kalotay-Williams-Fabozzi",
    "front": "Écrivez le modèle KWF. Quel est son lien avec Ho-Lee et avec l’arbre binomial ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$d(\\ln r_t)=\\theta_t\\,dt+\\sigma\\,dZ$$</div><p>Ho-Lee appliqué au <strong>logarithme</strong> du taux court. \\(\\ln r\\) est normal, donc \\(r\\) est <strong>lognormal</strong> et <strong>ne peut pas être négatif</strong>. L’arbre binomial de taux repose sur la même hypothèse lognormale.</p></div>"
   }
  },
  "fi2-model-table": {
   "zh": {
    "topic": "模型 · 负利率",
    "front": "把 CIR、Vasicek、Ho-Lee 和 KWF 分为均衡模型或无套利模型，并说明哪些允许负利率。",
    "back": "<div class=\"ans\"><ul><li><strong>CIR</strong>：均衡；<strong>不会</strong>出现负利率（\\(\\sigma\\sqrt{r}\\)）</li><li><strong>Vasicek</strong>：均衡；负利率<strong>可能</strong></li><li><strong>Ho-Lee</strong>：无套利；负利率<strong>可能</strong></li><li><strong>KWF</strong>：无套利；<strong>不会</strong>出现负利率（对数正态）</li></ul></div>",
    "gap": "均值回归（常数 \\(\\theta\\)）标志着均衡模型；随时间变化的 \\(\\theta_t\\) 标志着无套利模型。"
   },
   "ja": {
    "topic": "モデル · マイナス金利",
    "front": "CIR、バシチェック、ホー・リー、KWF を均衡型と無裁定型に分類し、マイナス金利を許すものを示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>CIR</strong>：均衡。マイナス金利は<strong>ない</strong>（\\(\\sigma\\sqrt{r}\\)）</li><li><strong>バシチェック</strong>：均衡。マイナス金利は<strong>ありうる</strong></li><li><strong>ホー・リー</strong>：無裁定。マイナス金利は<strong>ありうる</strong></li><li><strong>KWF</strong>：無裁定。マイナス金利は<strong>ない</strong>（対数正規）</li></ul></div>",
    "gap": "平均回帰（定数 \\(\\theta\\)）は均衡モデルの印、時間に依存する \\(\\theta_t\\) は無裁定モデルの印。"
   },
   "fr": {
    "topic": "Modèles · taux négatifs",
    "front": "Classez CIR, Vasicek, Ho-Lee et KWF en modèles d’équilibre ou sans arbitrage, et dites lesquels admettent des taux négatifs.",
    "back": "<div class=\"ans\"><ul><li><strong>CIR</strong> : équilibre ; <strong>pas</strong> de taux négatifs (\\(\\sigma\\sqrt{r}\\))</li><li><strong>Vasicek</strong> : équilibre ; taux négatifs <strong>possibles</strong></li><li><strong>Ho-Lee</strong> : sans arbitrage ; taux négatifs <strong>possibles</strong></li><li><strong>KWF</strong> : sans arbitrage ; <strong>pas</strong> de taux négatifs (lognormal)</li></ul></div>",
    "gap": "Le retour à la moyenne (\\(\\theta\\) constant) caractérise les modèles d’équilibre ; un \\(\\theta_t\\) dépendant du temps, les modèles sans arbitrage."
   }
  },
  "fi2-tree-structure": {
   "zh": {
    "topic": "二叉树 · 结构",
    "front": "描述 CFA 固定收益中使用的二叉树利率模型的结构。",
    "back": "<div class=\"ans\"><ul><li>第 \\(n\\) 步有 \\(n+1\\) 个节点；由于波动率保持不变，树是<strong>重合的</strong>（先升后降 = 先降后升）</li><li>考试中步长通常为<strong>一年</strong>；步长越短越精确</li><li>上升和下降<strong>概率相等（各 50%）</strong></li></ul></div>",
    "gap": "50/50 规则只适用于固定收益。在衍生品中，概率是风险中性概率，必须计算。"
   },
   "ja": {
    "topic": "二項ツリー · 構造",
    "front": "CFA の債券で使う二項金利ツリーの構造を説明せよ。",
    "back": "<div class=\"ans\"><ul><li>ステップ \\(n\\) には \\(n+1\\) 個のノードがある。ボラティリティが一定なので、ツリーは<strong>再結合</strong>する（上→下 = 下→上）</li><li>試験ではステップは通常<strong>1 年</strong>。短いステップほど精度が高い</li><li>上昇と下降は<strong>同確率（各 50%）</strong></li></ul></div>",
    "gap": "50/50 のルールは債券だけ。デリバティブではリスク中立確率で、計算が必要。"
   },
   "fr": {
    "topic": "Arbre binomial · structure",
    "front": "Décrivez la structure de l’arbre binomial de taux utilisé en titres à revenu fixe au CFA.",
    "back": "<div class=\"ans\"><ul><li>L’étape \\(n\\) compte \\(n+1\\) nœuds ; l’arbre est <strong>recombinant</strong> (hausse-baisse = baisse-hausse) car la volatilité est constante</li><li>À l’examen, le pas est en général d’<strong>un an</strong> ; un pas plus court est plus précis</li><li>Hausse et baisse sont <strong>équiprobables (50 % chacune)</strong></li></ul></div>",
    "gap": "La règle 50/50 ne vaut qu’en titres à revenu fixe. En dérivés, les probabilités sont risque-neutres et doivent être calculées."
   }
  },
  "fi2-node-spacing": {
   "zh": {
    "topic": "二叉树 · 节点间距",
    "front": "相邻节点之间相距多远？若第 1 年节点为 8% 和 5%，树假设的波动率是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,U}=i_{1,L}\\,e^{2\\sigma}$$</div><p>第 2 步：\\(i_{2,LU}=i_{2,LL}e^{2\\sigma}\\)，\\(i_{2,UU}=i_{2,LL}e^{4\\sigma}\\)。利率遵循<strong>对数正态随机游走</strong>。</p><p>\\(8/5=1.6=e^{2\\sigma}\\)，所以 \\(\\sigma=\\tfrac12\\ln1.6\\approx23.5\\%\\)。</p></div>",
    "gap": "系数是 \\(e^{2\\sigma}\\) 而不是 \\(e^{\\sigma}\\)：每个节点位于中心两侧各 \\(\\sigma\\) 处。"
   },
   "ja": {
    "topic": "二項ツリー · ノードの間隔",
    "front": "隣り合うノードはどれだけ離れているか。1 年目のノードが 8% と 5% なら、ツリーはどんなボラティリティを仮定しているか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,U}=i_{1,L}\\,e^{2\\sigma}$$</div><p>ステップ 2：\\(i_{2,LU}=i_{2,LL}e^{2\\sigma}\\)、\\(i_{2,UU}=i_{2,LL}e^{4\\sigma}\\)。金利は<strong>対数正規のランダム・ウォーク</strong>に従う。</p><p>\\(8/5=1.6=e^{2\\sigma}\\) なので \\(\\sigma=\\tfrac12\\ln1.6\\approx23.5\\%\\)。</p></div>",
    "gap": "係数は \\(e^{\\sigma}\\) ではなく \\(e^{2\\sigma}\\)：各ノードは中心から \\(\\sigma\\) ずつ両側にある。"
   },
   "fr": {
    "topic": "Arbre binomial · écart entre nœuds",
    "front": "Quel écart sépare deux nœuds adjacents ? Avec des nœuds à 8 % et 5 % en année 1, quelle volatilité l’arbre suppose-t-il ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,U}=i_{1,L}\\,e^{2\\sigma}$$</div><p>À l’étape 2 : \\(i_{2,LU}=i_{2,LL}e^{2\\sigma}\\) et \\(i_{2,UU}=i_{2,LL}e^{4\\sigma}\\). Les taux suivent une <strong>marche aléatoire lognormale</strong>.</p><p>\\(8/5=1.6=e^{2\\sigma}\\), donc \\(\\sigma=\\tfrac12\\ln1.6\\approx23.5\\%\\).</p></div>",
    "gap": "Le facteur est \\(e^{2\\sigma}\\), pas \\(e^{\\sigma}\\) : chaque nœud est à \\(\\sigma\\) de part et d’autre du centre."
   }
  },
  "fi2-node-meaning": {
   "zh": {
    "topic": "二叉树 · 节点的含义",
    "front": "利率树的每个节点代表什么？这与传统期限结构理论有何不同？",
    "back": "<div class=\"ans\"><ul><li>每个节点是该日期<strong>可能的一期利率</strong>：某一情景下的一期远期利率，分布在远期利率周围</li><li>因此节点遵循<strong>一级</strong>对远期利率的看法：期限相同，起始日不同</li><li>传统理论讨论的是<strong>预期</strong>的未来利率；树显示的是<strong>可能</strong>的利率及其概率</li></ul></div>"
   },
   "ja": {
    "topic": "二項ツリー · ノードの意味",
    "front": "金利ツリーの各ノードは何を表すか。従来の期間構造理論とどう違うか。",
    "back": "<div class=\"ans\"><ul><li>各ノードはその時点で<strong>起こりうる 1 期間の金利</strong>：あるシナリオでの 1 期間フォワード・レートで、フォワード・レートの周りに分布する</li><li>したがってノードは<strong>レベル I</strong> のフォワードの見方に従う：期間は同じで開始日が異なる</li><li>従来の理論は<strong>期待される</strong>将来金利を論じるが、ツリーは<strong>起こりうる</strong>金利とその確率を示す</li></ul></div>"
   },
   "fr": {
    "topic": "Arbre binomial · sens des nœuds",
    "front": "Que représente chaque nœud de l’arbre de taux, et en quoi cela diffère-t-il des théories traditionnelles de la structure par terme ?",
    "back": "<div class=\"ans\"><ul><li>Chaque nœud est un <strong>taux à une période possible</strong> à cette date : un taux à terme à une période dans un scénario, réparti autour du taux à terme</li><li>Les nœuds suivent donc la vision des taux à terme du <strong>niveau I</strong> : même durée, dates de départ différentes</li><li>Les théories traditionnelles traitent du taux futur <strong>attendu</strong> ; l’arbre montre les taux <strong>possibles</strong> et leur probabilité</li></ul></div>"
   }
  },
  "fi2-backward": {
   "zh": {
    "topic": "对无期权债券估值",
    "front": "给出节点估值规则。树今天为 3%，第 1 年为 8% / 5%。对一只 2 年期 7% 年付息债券（面值 100）估值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{(V_U+C)+(V_D+C)}{2(1+i)}$$</div><p>第 1 年：\\(107/1.08=99.074\\) 和 \\(107/1.05=101.905\\)。</p><p>加上票息：\\(106.074\\) 和 \\(108.905\\)。</p><div class=\"eq-block\">$$\\begin{aligned}V_0&=\\frac{106.074+108.905}{2\\times1.03}\\\\&=104.359\\end{aligned}$$</div></div>",
    "gap": "在每个节点取平均之前先加上票息。每条路径最终都是面值加最后一期票息：债券树在到期时收敛。"
   },
   "ja": {
    "topic": "オプションなし債券の評価",
    "front": "ノードの評価ルールを示せ。ツリーは今日 3%、1 年目 8% / 5%。2 年、年 7% クーポン債（額面 100）を評価せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{(V_U+C)+(V_D+C)}{2(1+i)}$$</div><p>1 年目：\\(107/1.08=99.074\\) と \\(107/1.05=101.905\\)。</p><p>クーポンを加える：\\(106.074\\) と \\(108.905\\)。</p><div class=\"eq-block\">$$\\begin{aligned}V_0&=\\frac{106.074+108.905}{2\\times1.03}\\\\&=104.359\\end{aligned}$$</div></div>",
    "gap": "平均する前に各ノードでクーポンを加える。どの経路も最後は額面 + 最終クーポンになる：債券のツリーは満期で収束する。"
   },
   "fr": {
    "topic": "Évaluer une obligation sans option",
    "front": "Donnez la règle d’évaluation aux nœuds. L’arbre vaut 3 % aujourd’hui et 8 % / 5 % en année 1. Évaluez une obligation à 2 ans à coupon annuel de 7 % (nominal 100).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{(V_U+C)+(V_D+C)}{2(1+i)}$$</div><p>Année 1 : \\(107/1.08=99.074\\) et \\(107/1.05=101.905\\).</p><p>Ajoutez le coupon : \\(106.074\\) et \\(108.905\\).</p><div class=\"eq-block\">$$\\begin{aligned}V_0&=\\frac{106.074+108.905}{2\\times1.03}\\\\&=104.359\\end{aligned}$$</div></div>",
    "gap": "Ajoutez le coupon à chaque nœud avant de faire la moyenne. Chaque trajectoire finit au pair plus le dernier coupon : l’arbre de l’obligation converge à l’échéance."
   }
  },
  "fi2-calibration": {
   "zh": {
    "topic": "校准二叉树",
    "front": "二叉树如何校准？1 年期平价利率 2%，2 年期平价利率 3%，\\(\\sigma=15\\%\\)。第 1 年的节点是多少？",
    "back": "<div class=\"ans\"><p>从<strong>平价曲线</strong>逐步自举：用试错法选定最低节点，其余节点按 \\(e^{2\\sigma}\\) 的倍数设定，直到树对下一只平价债券的定价恰好等于<strong>面值</strong>。</p><p>此处 \\(i_{1,L}=3.442\\%\\)、\\(i_{1,U}=3.442\\%\\times e^{0.30}=4.646\\%\\) 使 2 年期 3% 债券定价为 100。</p></div>",
    "gap": "树必须是无套利的：它必须按市场价格为基准（新发行、无期权）债券定价。"
   },
   "ja": {
    "topic": "ツリーのキャリブレーション",
    "front": "ツリーはどうキャリブレーションするか。1 年のパー・レート 2%、2 年のパー・レート 3%、\\(\\sigma=15\\%\\)。1 年目のノードは。",
    "back": "<div class=\"ans\"><p><strong>パー・カーブ</strong>から 1 ステップずつブートストラップする：最も低いノードを試行錯誤で選び、他のノードを \\(e^{2\\sigma}\\) 倍で決め、次のパー債がちょうど<strong>額面</strong>で評価されるまで繰り返す。</p><p>ここでは \\(i_{1,L}=3.442\\%\\)、\\(i_{1,U}=3.442\\%\\times e^{0.30}=4.646\\%\\) で 2 年 3% 債が 100 になる。</p></div>",
    "gap": "ツリーは無裁定でなければならない：ベンチマーク（オン・ザ・ラン、オプションなし）債を市場価格で評価する必要がある。"
   },
   "fr": {
    "topic": "Calibrer l’arbre",
    "front": "Comment calibre-t-on l’arbre ? Le taux au pair à 1 an est de 2 %, à 2 ans de 3 %, \\(\\sigma=15\\%\\). Quels sont les nœuds de l’année 1 ?",
    "back": "<div class=\"ans\"><p>Par bootstrapping à partir de la <strong>courbe au pair</strong>, une étape à la fois : choisir le nœud le plus bas par tâtonnement, placer les autres à des multiples \\(e^{2\\sigma}\\), jusqu’à ce que l’arbre valorise l’obligation au pair suivante exactement <strong>au pair</strong>.</p><p>Ici \\(i_{1,L}=3.442\\%\\) et \\(i_{1,U}=3.442\\%\\times e^{0.30}=4.646\\%\\) valorisent l’obligation à 2 ans à 3 % à 100.</p></div>",
    "gap": "L’arbre doit être sans arbitrage : il doit valoriser les obligations de référence (on-the-run, sans option) à leur prix de marché."
   }
  },
  "fi2-forward-approx": {
   "zh": {
    "topic": "由远期利率构建二叉树",
    "front": "如何由远期利率近似第 1 年的节点？若 \\(f(1,1)=4.040\\%\\)、\\(\\sigma=15\\%\\)，结果是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,L}\\approx f\\,e^{-\\sigma},\\quad i_{1,U}\\approx f\\,e^{\\sigma}$$</div><p>\\(4.040\\%\\times e^{-0.15}=3.478\\%\\) 和 \\(4.040\\%\\times e^{0.15}=4.694\\%\\)，与校准得到的 3.442% 和 4.646% 接近。</p></div>"
   },
   "ja": {
    "topic": "フォワード・レートからのツリー",
    "front": "1 年目のノードはフォワード・レートからどう近似できるか。\\(f(1,1)=4.040\\%\\)、\\(\\sigma=15\\%\\) なら何が得られるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,L}\\approx f\\,e^{-\\sigma},\\quad i_{1,U}\\approx f\\,e^{\\sigma}$$</div><p>\\(4.040\\%\\times e^{-0.15}=3.478\\%\\) と \\(4.040\\%\\times e^{0.15}=4.694\\%\\) で、キャリブレーション結果の 3.442% と 4.646% に近い。</p></div>"
   },
   "fr": {
    "topic": "Arbre à partir des taux à terme",
    "front": "Comment approcher les nœuds de l’année 1 à partir du taux à terme ? Avec \\(f(1,1)=4.040\\%\\) et \\(\\sigma=15\\%\\), qu’obtient-on ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$i_{1,L}\\approx f\\,e^{-\\sigma},\\quad i_{1,U}\\approx f\\,e^{\\sigma}$$</div><p>\\(4.040\\%\\times e^{-0.15}=3.478\\%\\) et \\(4.040\\%\\times e^{0.15}=4.694\\%\\), proches des valeurs calibrées de 3,442 % et 4,646 %.</p></div>"
   }
  },
  "fi2-pathwise": {
   "zh": {
    "topic": "路径估值",
    "front": "什么是路径估值？\\(N\\) 年期债券有多少条路径？在 3% / 8% / 5% 的树上，对 2 年期 7% 债券得出什么结果？",
    "back": "<div class=\"ans\"><p>沿<strong>每条</strong>利率路径折现现金流，然后对各路径价值<strong>取平均</strong>。按年步长共有 \\(2^{N-1}\\) 条路径（今天的利率已知）。</p><ul><li>上升：\\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.08}=102.985\\)</li><li>下降：\\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.05}=105.733\\)</li></ul><p>平均：<strong>104.359</strong>，与逆向归纳法相同。</p></div>"
   },
   "ja": {
    "topic": "パスワイズ評価",
    "front": "パスワイズ評価とは何か。\\(N\\) 年債には何本の経路があるか。3% / 8% / 5% のツリーで 2 年 7% 債を評価すると何が得られるか。",
    "back": "<div class=\"ans\"><p>金利の<strong>各経路</strong>に沿ってキャッシュフローを割り引き、経路ごとの価値を<strong>平均</strong>する。年ステップなら経路は \\(2^{N-1}\\) 本（今日の金利は既知）。</p><ul><li>上昇：\\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.08}=102.985\\)</li><li>下降：\\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.05}=105.733\\)</li></ul><p>平均：<strong>104.359</strong>。後ろ向き帰納法と同じ。</p></div>"
   },
   "fr": {
    "topic": "Évaluation par trajectoires",
    "front": "Qu’est-ce que l’évaluation par trajectoires, combien de trajectoires compte une obligation à \\(N\\) ans, et que donne-t-elle pour l’obligation à 2 ans à 7 % sur l’arbre 3 % / 8 % / 5 % ?",
    "back": "<div class=\"ans\"><p>Actualiser les flux le long de <strong>chaque trajectoire</strong> de taux, puis faire la <strong>moyenne</strong> des valeurs. Avec des pas annuels, il y a \\(2^{N-1}\\) trajectoires (le taux d’aujourd’hui est connu).</p><ul><li>Hausse : \\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.08}=102.985\\)</li><li>Baisse : \\(\\frac{7}{1.03}+\\frac{107}{1.03\\times1.05}=105.733\\)</li></ul><p>Moyenne : <strong>104,359</strong>, comme par induction à rebours.</p></div>"
   }
  },
  "fi2-monte-carlo": {
   "zh": {
    "topic": "蒙特卡洛",
    "front": "什么时候用蒙特卡洛而不是二叉树？它如何运作？",
    "back": "<div class=\"ans\"><p>用于<strong>路径依赖</strong>的现金流，如 <strong>MBS</strong>：提前偿付取决于之前任何时候利率是否下降到足够程度（再融资、倦怠效应），所以一个节点的价值不只由其利率决定。</p><ul><li>模拟许多条随机的一期利率路径（如用 CIR）</li><li>计算每条路径上的现金流，包括提前偿付</li><li>沿路径折现；价值是各路径现值的<strong>平均</strong></li></ul></div>",
    "gap": "漂移调整使模拟能正确地为基准债券定价，保持无套利。"
   },
   "ja": {
    "topic": "モンテカルロ",
    "front": "二項ツリーの代わりにモンテカルロを使うのはいつか。どう機能するか。",
    "back": "<div class=\"ans\"><p><strong>経路依存</strong>のキャッシュフロー、例えば <strong>MBS</strong>：期限前償還は過去のいずれかの時点で金利が十分に下がったか（借換え、バーンアウト）に依存するので、ノードの価値はその金利だけでは決まらない。</p><ul><li>1 期間金利のランダムな経路を多数シミュレーションする（例：CIR から）</li><li>各経路で期限前償還を含むキャッシュフローを計算する</li><li>経路に沿って割り引く。価値は経路ごとの現在価値の<strong>平均</strong></li></ul></div>",
    "gap": "ドリフト調整によってシミュレーションをベンチマーク債の価格に合わせ、無裁定を保つ。"
   },
   "fr": {
    "topic": "Monte-Carlo",
    "front": "Quand utilise-t-on Monte-Carlo plutôt qu’un arbre binomial, et comment cela fonctionne-t-il ?",
    "back": "<div class=\"ans\"><p>Pour des flux <strong>dépendant de la trajectoire</strong>, p. ex. un <strong>MBS</strong> : les remboursements anticipés dépendent de ce que les taux aient suffisamment baissé à un moment antérieur (refinancement, épuisement), donc la valeur d’un nœud ne dépend pas seulement de son taux.</p><ul><li>Simuler de nombreuses trajectoires aléatoires de taux à une période (p. ex. via CIR)</li><li>Calculer les flux sur chaque trajectoire, remboursements anticipés compris</li><li>Actualiser le long de la trajectoire ; la valeur est la <strong>moyenne</strong> des VA des trajectoires</li></ul></div>",
    "gap": "Un ajustement de dérive calibre la simulation pour valoriser correctement les obligations de référence et la garder sans arbitrage."
   }
  }
 }
});
