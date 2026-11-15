deckI18n({
 "source": {
  "zh": "CFA 二级 衍生品 · M1 远期、期货与互换 · 单元复习",
  "ja": "CFA レベル II デリバティブ · M1 フォワード、先物、スワップ · 単元の復習",
  "fr": "CFA niveau II Dérivés · M1 Contrats à terme, futures et swaps · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "dv1-value-zero": {
   "zh": {
    "topic": "远期与期货的价值",
    "front": "远期或期货合约在初始时价值多少？之后期货合约的价值与远期有何不同？",
    "back": "<div class=\"ans\"><p>在 \\(t_0\\) 时对双方都为<strong>零</strong>：价格的设定使任何一方都无须付费进入。</p><ul><li><strong>远期</strong>：价值随标的变动，在到期时实现</li><li><strong>期货</strong>：每日<strong>盯市</strong>，所以每次结算后价值重置为 0</li></ul></div>",
    "gap": "双方之和永远为零：\\(V_{l,t}+V_{s,t}=0\\)。"
   },
   "ja": {
    "topic": "フォワードと先物の価値",
    "front": "フォワードや先物契約の開始時の価値はいくらか。その後、先物の価値はフォワードとどう違うか。",
    "back": "<div class=\"ans\"><p>\\(t_0\\) では両者とも<strong>ゼロ</strong>：どちらも支払わずに契約できるよう価格が決まる。</p><ul><li><strong>フォワード</strong>：価値は原資産とともに動き、満期に実現する</li><li><strong>先物</strong>：毎日<strong>値洗い</strong>されるので、各決済後に価値は 0 に戻る</li></ul></div>",
    "gap": "両サイドの合計は常にゼロ：\\(V_{l,t}+V_{s,t}=0\\)。"
   },
   "fr": {
    "topic": "Valeur d’un forward et d’un future",
    "front": "Que vaut un contrat forward ou future à l’initiation ? En quoi la valeur d’un future diffère-t-elle ensuite de celle d’un forward ?",
    "back": "<div class=\"ans\"><p><strong>Zéro</strong> pour les deux parties en \\(t_0\\) : le prix est fixé pour que personne ne paie pour entrer.</p><ul><li><strong>Forward</strong> : la valeur suit le sous-jacent et se réalise à l’échéance</li><li><strong>Future</strong> : <strong>réévalué au marché</strong> chaque jour, sa valeur revient donc à 0 après chaque règlement</li></ul></div>",
    "gap": "Les deux côtés s’annulent toujours : \\(V_{l,t}+V_{s,t}=0\\)."
   }
  },
  "dv1-price": {
   "zh": {
    "topic": "远期定价",
    "front": "写出离散复利和连续复利下的无套利远期价格。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0(1+r_f)^T$$</div><div class=\"eq-block\">$$F_0(T)=S_0e^{r_f^cT}$$</div><p>现在买入并持有资产的成本，必须等于今天约定在 \\(T\\) 买入的成本。</p></div>"
   },
   "ja": {
    "topic": "フォワードの価格付け",
    "front": "離散複利と連続複利で、無裁定のフォワード価格を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0(1+r_f)^T$$</div><div class=\"eq-block\">$$F_0(T)=S_0e^{r_f^cT}$$</div><p>今買って資産を持ち続けるコストは、今日 \\(T\\) に買うと約束するコストと同じでなければならない。</p></div>"
   },
   "fr": {
    "topic": "Prix d’un forward",
    "front": "Écrivez le prix à terme sans arbitrage, en composition discrète et continue.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0(1+r_f)^T$$</div><div class=\"eq-block\">$$F_0(T)=S_0e^{r_f^cT}$$</div><p>Acheter maintenant et porter l’actif doit coûter autant que convenir aujourd’hui d’acheter en \\(T\\).</p></div>"
   }
  },
  "dv1-carry": {
   "zh": {
    "topic": "持有套利",
    "front": "描述当 \\(F_0(T)\\) 高于和低于 \\(S_0(1+r_f)^T\\) 时的套利。",
    "back": "<div class=\"ans\"><ul><li><strong>过高</strong>（现货持有套利）：借入 \\(S_0\\)，买入资产，卖出远期；在 \\(T\\) 交付并偿还贷款</li><li><strong>过低</strong>（反向）：卖空资产，把所得按 \\(r_f\\) 投资，买入远期；在 \\(T\\) 按 \\(F_0\\) 买入以归还</li></ul></div>"
   },
   "ja": {
    "topic": "キャリー裁定",
    "front": "\\(F_0(T)\\) が \\(S_0(1+r_f)^T\\) を上回るとき、下回るときの裁定を説明せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>高すぎる</strong>（キャッシュ・アンド・キャリー）：\\(S_0\\) を借りて資産を買い、フォワードを売る。\\(T\\) に受け渡してローンを返済</li><li><strong>低すぎる</strong>（リバース）：資産を空売りし、代金を \\(r_f\\) で運用し、フォワードを買う。\\(T\\) に \\(F_0\\) で買って返却</li></ul></div>"
   },
   "fr": {
    "topic": "Arbitrage de portage",
    "front": "Décrivez l’arbitrage quand \\(F_0(T)\\) est supérieur, puis inférieur, à \\(S_0(1+r_f)^T\\).",
    "back": "<div class=\"ans\"><ul><li><strong>Trop élevé</strong> (cash-and-carry) : emprunter \\(S_0\\), acheter l’actif, vendre à terme ; livrer en \\(T\\) et rembourser le prêt</li><li><strong>Trop bas</strong> (inverse) : vendre l’actif à découvert, placer le produit à \\(r_f\\), acheter à terme ; acheter à \\(F_0\\) en \\(T\\) pour le restituer</li></ul></div>"
   }
  },
  "dv1-carry-benefits": {
   "zh": {
    "topic": "持有收益与持有成本",
    "front": "持有收益和成本如何改变远期价格？给出两种形式。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-PVB+PVC)\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&S_0(1+r_f)^T\\\\&-FVB+FVC\\end{aligned}$$</div></div>",
    "gap": "收益（股利、票息）降低远期价格；成本（仓储）提高远期价格。"
   },
   "ja": {
    "topic": "キャリーの便益とコスト",
    "front": "キャリーの便益とコストはフォワード価格をどう変えるか。2 つの形で示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-PVB+PVC)\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&S_0(1+r_f)^T\\\\&-FVB+FVC\\end{aligned}$$</div></div>",
    "gap": "便益（配当、クーポン）はフォワード価格を下げ、コスト（保管）は上げる。"
   },
   "fr": {
    "topic": "Avantages et coûts de portage",
    "front": "Comment les avantages et coûts de portage modifient-ils le prix à terme ? Donnez les deux formes.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-PVB+PVC)\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&S_0(1+r_f)^T\\\\&-FVB+FVC\\end{aligned}$$</div></div>",
    "gap": "Les avantages (dividendes, coupons) abaissent le prix à terme ; les coûts (stockage) l’augmentent."
   }
  },
  "dv1-value": {
   "zh": {
    "topic": "远期估值",
    "front": "写出远期多头在时间 \\(t\\) 的价值，包括有无持有收益和成本的情形。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=S_t-\\frac{F_0(T)}{(1+r_f)^{T-t}}$$</div><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&(S_t-PVB+PVC)\\\\&-\\frac{F_0(T)}{(1+r_f)^{T-t}}\\end{aligned}$$</div><p>等价于 \\(\\frac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}\\)。只计算 \\(t\\) 到 \\(T\\) 之间的收益和成本。</p></div>"
   },
   "ja": {
    "topic": "フォワードの評価",
    "front": "キャリーの便益・コストがある場合とない場合について、\\(t\\) 時点のフォワードのロングの価値を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=S_t-\\frac{F_0(T)}{(1+r_f)^{T-t}}$$</div><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&(S_t-PVB+PVC)\\\\&-\\frac{F_0(T)}{(1+r_f)^{T-t}}\\end{aligned}$$</div><p>同値な形は \\(\\frac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}\\)。\\(t\\) から \\(T\\) の間の便益とコストだけを数える。</p></div>"
   },
   "fr": {
    "topic": "Valorisation d’un forward",
    "front": "Écrivez la valeur d’un forward acheteur en \\(t\\), avec et sans avantages et coûts de portage.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=S_t-\\frac{F_0(T)}{(1+r_f)^{T-t}}$$</div><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&(S_t-PVB+PVC)\\\\&-\\frac{F_0(T)}{(1+r_f)^{T-t}}\\end{aligned}$$</div><p>Ou encore \\(\\frac{F_t(T)-F_0(T)}{(1+r_f)^{T-t}}\\). Ne comptez que les avantages et coûts entre \\(t\\) et \\(T\\).</p></div>"
   }
  },
  "dv1-fi-fwd": {
   "zh": {
    "topic": "固定收益远期",
    "front": "债券远期如何定价和估值？远期价格上升时，空头价值朝哪个方向变动？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-\\text{PVCoupon})\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$V_{s,t}=\\frac{F_0(T)-F_t(T)}{(1+r_f)^{T-t}}$$</div><p>远期价格上升使空头价值<strong>为负</strong>。</p></div>"
   },
   "ja": {
    "topic": "債券フォワード",
    "front": "債券フォワードはどう価格付け・評価するか。フォワード価格が上がると、ショートの価値はどちらに動くか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-\\text{PVCoupon})\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$V_{s,t}=\\frac{F_0(T)-F_t(T)}{(1+r_f)^{T-t}}$$</div><p>フォワード価格の上昇でショートの価値は<strong>マイナス</strong>になる。</p></div>"
   },
   "fr": {
    "topic": "Forwards sur titres à revenu fixe",
    "front": "Comment évalue-t-on les forwards obligataires ? Dans quel sens évolue la valeur d’une position vendeuse quand le prix à terme monte ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F_0(T)={}&(S_0-\\text{PVCoupon})\\\\&\\times(1+r_f)^T\\end{aligned}$$</div><div class=\"eq-block\">$$V_{s,t}=\\frac{F_0(T)-F_t(T)}{(1+r_f)^{T-t}}$$</div><p>Un prix à terme en hausse rend la valeur du vendeur <strong>négative</strong>.</p></div>"
   }
  },
  "dv1-index": {
   "zh": {
    "topic": "股指期货",
    "front": "写出连续股息率下的股指期货价格。曲线何时处于升水（contango）？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0e^{(r_f^c-\\delta^c)T}$$</div><p>\\(r_f^c&gt;\\delta^c\\Rightarrow F_0&gt;S_0\\)：<strong>升水</strong>；否则为<strong>贴水</strong>。</p><p>使用 \\(r_f^c=\\ln(1+r_f)\\)。</p></div>"
   },
   "ja": {
    "topic": "株価指数先物",
    "front": "連続配当利回りのもとで株価指数先物の価格を示せ。カーブがコンタンゴになるのはいつか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0e^{(r_f^c-\\delta^c)T}$$</div><p>\\(r_f^c&gt;\\delta^c\\Rightarrow F_0&gt;S_0\\)：<strong>コンタンゴ</strong>。そうでなければ<strong>バックワーデーション</strong>。</p><p>\\(r_f^c=\\ln(1+r_f)\\) を使う。</p></div>"
   },
   "fr": {
    "topic": "Futures sur indice actions",
    "front": "Écrivez le prix d’un future sur indice actions avec un rendement de dividende continu. Quand la courbe est-elle en contango ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F_0(T)=S_0e^{(r_f^c-\\delta^c)T}$$</div><p>\\(r_f^c&gt;\\delta^c\\Rightarrow F_0&gt;S_0\\) : <strong>contango</strong> ; sinon <strong>déport</strong>.</p><p>Utilisez \\(r_f^c=\\ln(1+r_f)\\).</p></div>"
   }
  },
  "dv1-index-value": {
   "zh": {
    "topic": "股指期货估值",
    "front": "写出股指远期多头在 \\(t\\) 时的价值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&S_te^{-\\delta^c(T-t)}\\\\&-F_0(T)e^{-r_f^c(T-t)}\\end{aligned}$$</div><p>由于 \\(S_te^{-\\delta^c(T-t)}=F_t(T)e^{-r_f^c(T-t)}\\)，这就是期货价格变动的折现值。</p></div>"
   },
   "ja": {
    "topic": "株価指数先物の評価",
    "front": "\\(t\\) 時点の株価指数フォワードのロングの価値を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&S_te^{-\\delta^c(T-t)}\\\\&-F_0(T)e^{-r_f^c(T-t)}\\end{aligned}$$</div><p>\\(S_te^{-\\delta^c(T-t)}=F_t(T)e^{-r_f^c(T-t)}\\) なので、これは先物価格の変化を割り引いたもの。</p></div>"
   },
   "fr": {
    "topic": "Valorisation d’un future sur indice",
    "front": "Écrivez la valeur d’un forward acheteur sur indice actions en \\(t\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_{l,t}={}&S_te^{-\\delta^c(T-t)}\\\\&-F_0(T)e^{-r_f^c(T-t)}\\end{aligned}$$</div><p>Comme \\(S_te^{-\\delta^c(T-t)}=F_t(T)e^{-r_f^c(T-t)}\\), c’est la variation actualisée du prix à terme.</p></div>"
   }
  },
  "dv1-fra-def": {
   "zh": {
    "topic": "FRA 基础",
    "front": "什么是 FRA？双方各支付什么？\\(a\\times b\\) 是什么意思？",
    "back": "<div class=\"ans\"><ul><li>以浮动利率（如 MRR）为标的、使用<strong>单利</strong>的场外远期</li><li><strong>多头</strong>：支付固定、收取浮动（利率上升时获利）；<strong>空头</strong>：相反</li><li>\\(a\\)：到期月数（确定利率、结算）；\\(b\\)：到贷款到期的月数；利率覆盖 \\(b-a\\) 个月</li></ul></div>",
    "gap": "未来借款人做多对冲；未来贷款人做空对冲。"
   },
   "ja": {
    "topic": "FRA の基礎",
    "front": "FRA とは何か。各サイドは何を支払うか。\\(a\\times b\\) は何を意味するか。",
    "back": "<div class=\"ans\"><ul><li>変動金利（例：MRR）を対象とする OTC のフォワードで、<strong>単利</strong>を使う</li><li><strong>ロング</strong>：固定を払い変動を受け取る（金利上昇で得をする）。<strong>ショート</strong>：その逆</li><li>\\(a\\)：満期（金利決定、決済）までの月数、\\(b\\)：貸出満期までの月数。金利は \\(b-a\\) か月分</li></ul></div>",
    "gap": "将来の借り手はロングで、将来の貸し手はショートでヘッジする。"
   },
   "fr": {
    "topic": "Bases du FRA",
    "front": "Qu’est-ce qu’un FRA ? Que paie chaque partie, et que signifie \\(a\\times b\\) ?",
    "back": "<div class=\"ans\"><ul><li>Un forward de gré à gré sur un taux variable (p. ex. MRR), en <strong>intérêts simples</strong></li><li><strong>Acheteur</strong> : paie le fixe, reçoit le variable (gagne si les taux montent) ; <strong>vendeur</strong> : l’inverse</li><li>\\(a\\) : mois jusqu’à l’expiration (fixation du taux, règlement) ; \\(b\\) : mois jusqu’à l’échéance du prêt ; le taux couvre \\(b-a\\) mois</li></ul></div>",
    "gap": "Un futur emprunteur se couvre à l’achat ; un futur prêteur, à la vente."
   }
  },
  "dv1-fra-price": {
   "zh": {
    "topic": "FRA 定价",
    "front": "FRA 利率如何求得？6 个月即期利率 1.5%，9 个月 1.75%：求 6×9 FRA 利率。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}1+S_b\\tfrac{b}{12}={}&(1+S_a\\tfrac{a}{12})\\\\&\\times(1+FR\\tfrac{b-a}{12})\\end{aligned}$$</div><p>\\((1.0075)(1+FR/4)=1.013125\\Rightarrow FR\\approx2.22\\%\\)。</p></div>"
   },
   "ja": {
    "topic": "FRA の価格付け",
    "front": "FRA レートはどう求めるか。6 か月スポット 1.5%、9 か月 1.75%：6×9 FRA レートを求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}1+S_b\\tfrac{b}{12}={}&(1+S_a\\tfrac{a}{12})\\\\&\\times(1+FR\\tfrac{b-a}{12})\\end{aligned}$$</div><p>\\((1.0075)(1+FR/4)=1.013125\\Rightarrow FR\\approx2.22\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Prix d’un FRA",
    "front": "Comment trouve-t-on le taux du FRA ? Taux au comptant 6 mois 1,5 %, 9 mois 1,75 % : trouvez le taux du FRA 6×9.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}1+S_b\\tfrac{b}{12}={}&(1+S_a\\tfrac{a}{12})\\\\&\\times(1+FR\\tfrac{b-a}{12})\\end{aligned}$$</div><p>\\((1.0075)(1+FR/4)=1.013125\\Rightarrow FR\\approx2.22\\%\\).</p></div>"
   }
  },
  "dv1-fra-value": {
   "zh": {
    "topic": "FRA 到期时的估值",
    "front": "写出 FRA 多头在到期 \\(a\\) 时的价值。3 个月利率定为 8% 时，对 1×4 FRA（名义本金 1m，固定 7%）估值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{NP(r_{fl}-r_{fix})\\frac{b-a}{12}}{1+r_{fl}\\frac{b-a}{12}}$$</div><p>\\(\\frac{1\\text{m}\\times1\\%\\times0.25}{1.02}=2{,}450.98\\)。</p></div>",
    "gap": "收益在 \\(b\\) 赚得，却在 \\(a\\) 结算：要在 \\(b-a\\) 期间折现。画出时间线。"
   },
   "ja": {
    "topic": "満期時の FRA の評価",
    "front": "満期 \\(a\\) における FRA ロングの価値を示せ。3 か月金利が 8% に決まったとき、1×4 FRA（想定元本 1m、固定 7%）を評価せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{NP(r_{fl}-r_{fix})\\frac{b-a}{12}}{1+r_{fl}\\frac{b-a}{12}}$$</div><p>\\(\\frac{1\\text{m}\\times1\\%\\times0.25}{1.02}=2{,}450.98\\)。</p></div>",
    "gap": "利益は \\(b\\) で生じるが \\(a\\) で決済する：\\(b-a\\) の期間で割り引く。タイムラインを描く。"
   },
   "fr": {
    "topic": "Valorisation d’un FRA à l’expiration",
    "front": "Écrivez la valeur d’un FRA acheteur à l’expiration \\(a\\). Évaluez un FRA 1×4 (NP 1m, fixe 7 %) quand le taux à 3 mois est fixé à 8 %.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V=\\frac{NP(r_{fl}-r_{fix})\\frac{b-a}{12}}{1+r_{fl}\\frac{b-a}{12}}$$</div><p>\\(\\frac{1\\text{m}\\times1\\%\\times0.25}{1.02}=2{,}450.98\\).</p></div>",
    "gap": "Le gain est acquis en \\(b\\) mais réglé en \\(a\\) : actualisez-le sur \\(b-a\\). Dessinez la frise temporelle."
   }
  },
  "dv1-fra-before": {
   "zh": {
    "topic": "FRA 到期前的估值",
    "front": "在到期 \\(a\\) 之前的 \\(t\\) 时，FRA 如何估值？",
    "back": "<div class=\"ans\"><p>用今天 \\(a\\) 到 \\(b\\) 的远期利率 \\(FR_t\\)，再用 \\(b-t\\) 的即期利率从 \\(b\\) 折现到 \\(t\\)：</p><div class=\"eq-block\">$$V_{l,t}=\\frac{NP(FR_t-r_{fix})\\frac{b-a}{12}}{1+S_{b-t}\\frac{b-t}{12}}$$</div></div>"
   },
   "ja": {
    "topic": "満期前の FRA の評価",
    "front": "満期 \\(a\\) より前の \\(t\\) で、FRA はどう評価するか。",
    "back": "<div class=\"ans\"><p>今日の \\(a\\) から \\(b\\) のフォワード・レート \\(FR_t\\) を使い、\\(b-t\\) のスポット・レートで \\(b\\) から \\(t\\) へ割り引く：</p><div class=\"eq-block\">$$V_{l,t}=\\frac{NP(FR_t-r_{fix})\\frac{b-a}{12}}{1+S_{b-t}\\frac{b-t}{12}}$$</div></div>"
   },
   "fr": {
    "topic": "Valorisation d’un FRA avant l’expiration",
    "front": "Comment évalue-t-on un FRA en \\(t\\), avant son expiration \\(a\\) ?",
    "back": "<div class=\"ans\"><p>Utilisez le taux à terme actuel \\(FR_t\\) de \\(a\\) à \\(b\\), puis actualisez de \\(b\\) à \\(t\\) avec le taux au comptant pour \\(b-t\\) :</p><div class=\"eq-block\">$$V_{l,t}=\\frac{NP(FR_t-r_{fix})\\frac{b-a}{12}}{1+S_{b-t}\\frac{b-t}{12}}$$</div></div>"
   }
  },
  "dv1-bond-fut": {
   "zh": {
    "topic": "债券期货交割",
    "front": "为什么债券期货允许一篮子可交割债券？转换因子有什么用？",
    "back": "<div class=\"ans\"><ul><li>一篮子债券（空头的交割选择权）防止在任何单一、可能流动性差的债券上被逼仓</li><li>价格按假想的标准债券报价（美国国债期货为 6% 票息）</li><li><strong>转换因子</strong>调整每只债券的价格，使可交割债券大致可比</li></ul></div>"
   },
   "ja": {
    "topic": "債券先物の受渡し",
    "front": "なぜ債券先物では受渡適格債のバスケットが認められるのか。コンバージョン・ファクターは何のためか。",
    "back": "<div class=\"ans\"><ul><li>バスケット（ショートの受渡しオプション）は、流動性の低いかもしれない単一銘柄での締め上げを防ぐ</li><li>価格は仮想の標準物（米国 T-bond 先物ではクーポン 6%）で建てられる</li><li><strong>コンバージョン・ファクター</strong>は各債券の価格を調整し、受渡適格債をおおよそ比較可能にする</li></ul></div>"
   },
   "fr": {
    "topic": "Livraison des futures obligataires",
    "front": "Pourquoi les futures obligataires admettent-ils un panier d’obligations livrables ? À quoi sert le facteur de concordance ?",
    "back": "<div class=\"ans\"><ul><li>Le panier (option de livraison du vendeur) empêche les squeezes sur une émission unique, peut-être illiquide</li><li>Les prix sont cotés pour une obligation standard fictive (coupon de 6 % pour les futures sur T-bonds américains)</li><li>Le <strong>facteur de concordance</strong> ajuste le prix de chaque obligation pour rendre les livrables à peu près comparables</li></ul></div>"
   }
  },
  "dv1-invoice": {
   "zh": {
    "topic": "发票价格与 CTD",
    "front": "空头在交割时收到什么？什么是最便宜可交割债券？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Invoice}=\\text{Futures}\\times CF+AI$$</div><p>期货 × CF 是<strong>本金发票金额</strong>。CF 的调整并不完美，所以有一只债券是<strong>最便宜可交割</strong>的；期货价格跟随它。</p></div>"
   },
   "ja": {
    "topic": "受渡価格と CTD",
    "front": "ショートは受渡しで何を受け取るか。最割安受渡銘柄とは何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Invoice}=\\text{Futures}\\times CF+AI$$</div><p>先物 × CF が<strong>元本の受渡金額</strong>。CF の調整は完全ではないので、1 つの債券が<strong>最割安受渡銘柄</strong>になり、先物価格はそれに連動する。</p></div>"
   },
   "fr": {
    "topic": "Prix de facturation et CTD",
    "front": "Que reçoit le vendeur à la livraison ? Qu’est-ce que l’obligation la moins chère à livrer ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Invoice}=\\text{Futures}\\times CF+AI$$</div><p>Future × CF est le <strong>montant facturé en principal</strong>. L’ajustement par le CF est imparfait : une obligation est la <strong>moins chère à livrer</strong>, et le prix du future la suit.</p></div>"
   }
  },
  "dv1-bond-fut-price": {
   "zh": {
    "topic": "债券期货定价",
    "front": "写出债券期货报价。全价 108.083，\\(AI_T=0.25\\)，\\(CF=0.729535\\)，1 个月利率 0.1%：求其值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F\\times CF={}&S_0(1+r_f)^T\\\\&-AI_T-FVC\\end{aligned}$$</div><p>\\(S_0\\) 是<strong>全价</strong>。\\((108.083\\times1.001^{1/12}-0.25)/0.729535=147.82\\)。</p></div>"
   },
   "ja": {
    "topic": "債券先物の価格付け",
    "front": "債券先物の気配値を示せ。フル・プライス 108.083、\\(AI_T=0.25\\)、\\(CF=0.729535\\)、1 か月金利 0.1%：求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F\\times CF={}&S_0(1+r_f)^T\\\\&-AI_T-FVC\\end{aligned}$$</div><p>\\(S_0\\) は<strong>フル・プライス</strong>。\\((108.083\\times1.001^{1/12}-0.25)/0.729535=147.82\\)。</p></div>"
   },
   "fr": {
    "topic": "Prix des futures obligataires",
    "front": "Écrivez le prix coté d’un future obligataire. Prix plein 108,083, \\(AI_T=0.25\\), \\(CF=0.729535\\), taux à 1 mois 0,1 % : calculez-le.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}F\\times CF={}&S_0(1+r_f)^T\\\\&-AI_T-FVC\\end{aligned}$$</div><p>\\(S_0\\) est le prix <strong>plein</strong>. \\((108.083\\times1.001^{1/12}-0.25)/0.729535=147.82\\).</p></div>"
   }
  },
  "dv1-swap-basics": {
   "zh": {
    "topic": "利率互换基础",
    "front": "定义普通互换的多头和空头。浮动支付如何确定？",
    "back": "<div class=\"ans\"><ul><li><strong>多头</strong>（支付方）：支付固定，收取浮动</li><li><strong>空头</strong>（收取方）：支付浮动，收取固定</li><li>浮动支付<strong>后付</strong>：在每期开始时确定，在期末支付</li></ul></div>"
   },
   "ja": {
    "topic": "金利スワップの基礎",
    "front": "プレーン・バニラ・スワップのロングとショートを定義せよ。変動の支払いはどう決まるか。",
    "back": "<div class=\"ans\"><ul><li><strong>ロング</strong>（ペイヤー）：固定を払い、変動を受け取る</li><li><strong>ショート</strong>（レシーバー）：変動を払い、固定を受け取る</li><li>変動の支払いは<strong>後払い</strong>：各期間の初めに決まり、期末に支払われる</li></ul></div>"
   },
   "fr": {
    "topic": "Bases du swap de taux",
    "front": "Définissez les côtés acheteur et vendeur d’un swap standard. Comment sont fixés les paiements variables ?",
    "back": "<div class=\"ans\"><ul><li><strong>Acheteur</strong> (payeur) : paie le fixe, reçoit le variable</li><li><strong>Vendeur</strong> (receveur) : paie le variable, reçoit le fixe</li><li>Les paiements variables sont <strong>à terme échu</strong> : fixés au début de chaque période, payés à sa fin</li></ul></div>"
   }
  },
  "dv1-swap-equiv": {
   "zh": {
    "topic": "互换与其他工具的等价",
    "front": "支付固定的互换如何视为债券、远期和 FRA？",
    "back": "<div class=\"ans\"><ul><li><strong>债券</strong>：做空固定利率债券 + 做多浮动利率债券</li><li><strong>远期</strong>：一系列同一固定利率的远期；每个都偏离市场，只有总和价值为 0</li><li><strong>FRA</strong>：一系列相同固定利率的 FRA</li></ul></div>"
   },
   "ja": {
    "topic": "他の商品としてのスワップ",
    "front": "固定払いスワップは債券、フォワード、FRA としてどう見られるか。",
    "back": "<div class=\"ans\"><ul><li><strong>債券</strong>：固定利付債のショート + 変動利付債のロング</li><li><strong>フォワード</strong>：1 つの固定レートでの一連のフォワード。個々はオフ・マーケットで、合計だけが 0</li><li><strong>FRA</strong>：同じ固定レートの一連の FRA</li></ul></div>"
   },
   "fr": {
    "topic": "Les swaps vus comme d’autres instruments",
    "front": "Comment un swap payeur de fixe peut-il être vu comme des obligations, des forwards et des FRA ?",
    "back": "<div class=\"ans\"><ul><li><strong>Obligations</strong> : vendeur d’une obligation à taux fixe + acheteur d’une obligation à taux variable</li><li><strong>Forwards</strong> : une série de forwards à un même taux fixe ; chacun est hors marché, seule la somme vaut 0</li><li><strong>FRA</strong> : une série de FRA au même taux fixe</li></ul></div>"
   }
  },
  "dv1-swap-price": {
   "zh": {
    "topic": "互换利率",
    "front": "推导每期互换利率。折现因子 0.9938、0.9852、0.9744、0.9615（按季度）：求年化互换利率。",
    "back": "<div class=\"ans\"><p>浮动债券在重置日按面值，所以固定债券也必须按面值：</p><div class=\"eq-block\">$$F=\\frac{1-D_n}{\\sum_{i=1}^nD_i}$$</div><p>\\(F=0.0385/3.9149\\approx0.98\\%\\)；年化 \\(\\times4=3.92\\%\\)。</p></div>",
    "gap": "折现因子使用单利：\\(1/(1+r\\times\\text{days}/360)\\)。"
   },
   "ja": {
    "topic": "スワップ・レート",
    "front": "期間ごとのスワップ・レートを導け。割引係数 0.9938、0.9852、0.9744、0.9615（四半期）：年率のスワップ・レートを求めよ。",
    "back": "<div class=\"ans\"><p>変動利付債は更改日にパーなので、固定利付債もパーでなければならない：</p><div class=\"eq-block\">$$F=\\frac{1-D_n}{\\sum_{i=1}^nD_i}$$</div><p>\\(F=0.0385/3.9149\\approx0.98\\%\\)、年率 \\(\\times4=3.92\\%\\)。</p></div>",
    "gap": "割引係数は単利：\\(1/(1+r\\times\\text{days}/360)\\)。"
   },
   "fr": {
    "topic": "Taux de swap",
    "front": "Dérivez le taux de swap périodique. Facteurs d’actualisation 0,9938, 0,9852, 0,9744, 0,9615 (trimestriels) : trouvez le taux de swap annuel.",
    "back": "<div class=\"ans\"><p>L’obligation variable est au pair aux dates de refixation, donc l’obligation fixe doit l’être aussi :</p><div class=\"eq-block\">$$F=\\frac{1-D_n}{\\sum_{i=1}^nD_i}$$</div><p>\\(F=0.0385/3.9149\\approx0.98\\%\\) ; annualisé \\(\\times4=3.92\\%\\).</p></div>",
    "gap": "Les facteurs d’actualisation utilisent les intérêts simples : \\(1/(1+r\\times\\text{days}/360)\\)."
   }
  },
  "dv1-swap-value": {
   "zh": {
    "topic": "互换估值",
    "front": "在两个重置日之间，支付固定的互换如何估值？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=PV_{float}-PV_{fix}$$</div><ul><li>固定：折现剩余票息和面值</li><li>浮动：把面值加上<strong>已确定的下一期票息</strong>从下一个重置日折现</li></ul></div>"
   },
   "ja": {
    "topic": "スワップの評価",
    "front": "更改日の間で、固定払いスワップはどう評価するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=PV_{float}-PV_{fix}$$</div><ul><li>固定：残りのクーポンと額面を割り引く</li><li>変動：額面と<strong>すでに決まった次のクーポン</strong>を次の更改日から割り引く</li></ul></div>"
   },
   "fr": {
    "topic": "Valorisation d’un swap",
    "front": "Comment évalue-t-on un swap payeur de fixe entre deux dates de refixation ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=PV_{float}-PV_{fix}$$</div><ul><li>Fixe : actualiser les coupons restants et le nominal</li><li>Variable : actualiser le nominal plus le <strong>prochain coupon déjà fixé</strong> depuis la prochaine date de refixation</li></ul></div>"
   }
  },
  "dv1-swap-method2": {
   "zh": {
    "topic": "互换估值：对冲互换",
    "front": "以按今天利率签订的对冲互换来估值。收取固定 2%，1 亿，剩 5 年，\\(\\sum D=4.823\\)，新利率 1.29%：价值是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=NP(F_t-F_0)\\textstyle\\sum D_i$$</div><p>收取方：\\((2\\%-1.29\\%)\\times4.823\\times100\\text{m}\\approx3.4\\text{m}\\)。</p></div>",
    "gap": "与远期相同：固定利率的变动，在剩余日期上折现。"
   },
   "ja": {
    "topic": "スワップの評価：反対スワップ",
    "front": "今日のレートでの反対スワップとして評価せよ。固定受け 2%、1 億、残り 5 年、\\(\\sum D=4.823\\)、新レート 1.29%：価値は。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=NP(F_t-F_0)\\textstyle\\sum D_i$$</div><p>レシーバー：\\((2\\%-1.29\\%)\\times4.823\\times100\\text{m}\\approx3.4\\text{m}\\)。</p></div>",
    "gap": "フォワードと同じ：固定レートの変化を残りの支払日で割り引く。"
   },
   "fr": {
    "topic": "Valorisation d’un swap : swap inverse",
    "front": "Évaluez un swap comme un swap inverse au taux actuel. Receveur de fixe à 2 %, 100m, 5 ans restants, \\(\\sum D=4.823\\), nouveau taux 1,29 % : valeur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_{l,t}=NP(F_t-F_0)\\textstyle\\sum D_i$$</div><p>Receveur : \\((2\\%-1.29\\%)\\times4.823\\times100\\text{m}\\approx3.4\\text{m}\\).</p></div>",
    "gap": "Comme pour un forward : la variation du taux fixe, actualisée sur les dates restantes."
   }
  },
  "dv1-currency": {
   "zh": {
    "topic": "货币互换",
    "front": "货币互换与利率互换有何不同？如何定价和估值？",
    "back": "<div class=\"ans\"><ul><li>本金在开始时（按即期汇率）交换，在结束时换回；利息不轧差</li><li>每个固定利率在各自货币中用 \\(F=(1-D_n)/\\sum D_i\\) 定价；浮动对浮动没有要求解的固定利率</li><li>估值：每条腿按其货币作为债券估值，再按<strong>当前即期</strong>汇率换算</li></ul></div>"
   },
   "ja": {
    "topic": "通貨スワップ",
    "front": "通貨スワップは金利スワップとどう違うか。どう価格付け・評価するか。",
    "back": "<div class=\"ans\"><ul><li>元本を開始時（直物レート）に交換し、終了時に戻す。利息は相殺しない</li><li>各固定レートはそれぞれの通貨で \\(F=(1-D_n)/\\sum D_i\\) により求める。変動対変動では解くべき固定レートはない</li><li>評価：各レグをその通貨の債券として評価し、<strong>現在の直物</strong>レートで換算する</li></ul></div>"
   },
   "fr": {
    "topic": "Swaps de devises",
    "front": "En quoi les swaps de devises diffèrent-ils des swaps de taux ? Comment les évalue-t-on ?",
    "back": "<div class=\"ans\"><ul><li>Les principaux sont échangés au départ (cours au comptant) et restitués à la fin ; les intérêts ne sont pas compensés</li><li>Chaque taux fixe se calcule avec \\(F=(1-D_n)/\\sum D_i\\) dans sa devise ; variable contre variable n’a pas de taux fixe à résoudre</li><li>Valeur : chaque jambe comme une obligation dans sa devise, convertie au cours <strong>au comptant actuel</strong></li></ul></div>"
   }
  },
  "dv1-equity-swap": {
   "zh": {
    "topic": "股权互换",
    "front": "股权互换如何定价和估值？给出收取固定、支付股权回报一方的价值。",
    "back": "<div class=\"ans\"><p>固定利率：与利率互换相同的公式（股权腿在每个重置日按面值）。</p><div class=\"eq-block\">$$V_t=PV_{\\text{fixed}}-\\frac{S_t}{S_{t-1}}NP$$</div><p>\\(S_{t-1}\\)：上一次重置时的价格。用途：投机、资产配置、杠杆、无须持有即可获得敞口。</p></div>"
   },
   "ja": {
    "topic": "エクイティ・スワップ",
    "front": "エクイティ・スワップはどう価格付け・評価するか。固定を受け取り株式リターンを払う側の価値を示せ。",
    "back": "<div class=\"ans\"><p>固定レート：金利スワップと同じ式（株式レグは各更改日にパー）。</p><div class=\"eq-block\">$$V_t=PV_{\\text{fixed}}-\\frac{S_t}{S_{t-1}}NP$$</div><p>\\(S_{t-1}\\)：前回の更改日の価格。用途：投機、資産配分、レバレッジ、保有せずにエクスポージャーを得る。</p></div>"
   },
   "fr": {
    "topic": "Swaps sur actions",
    "front": "Comment évalue-t-on un swap sur actions ? Donnez la valeur pour la partie qui reçoit le fixe et paie la performance de l’action.",
    "back": "<div class=\"ans\"><p>Taux fixe : même formule que pour un swap de taux (la jambe actions est au pair à chaque refixation).</p><div class=\"eq-block\">$$V_t=PV_{\\text{fixed}}-\\frac{S_t}{S_{t-1}}NP$$</div><p>\\(S_{t-1}\\) : le prix à la dernière refixation. Usages : spéculation, allocation d’actifs, levier, exposition sans détention.</p></div>"
   }
  }
 }
});
