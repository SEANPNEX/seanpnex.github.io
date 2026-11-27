deckI18n({
 "source": {
  "zh": "CFA 二级 固定收益 · M1 利率期限结构与利率动态 · 单元复习",
  "ja": "CFA レベル II 債券 · M1 金利の期間構造と金利の変動 · 単元の復習",
  "fr": "CFA niveau II Titres à revenu fixe · M1 Structure par terme et dynamique des taux · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "fi1-spot": {
   "zh": {
    "topic": "即期利率 · 折现因子",
    "front": "什么是即期利率？它如何给出折现因子 \\(P(n)\\)？若 \\(s_5=3.30\\%\\)，\\(P(5)\\) 是多少？",
    "back": "<div class=\"ans\"><p><strong>今天</strong>观察到的、针对第 \\(n\\) 年单笔支付的利率：即 \\(n\\) 年期<strong>零息</strong>债券的收益率（零息利率）。</p><div class=\"eq-block\">$$P(n)=\\frac{1}{(1+s_n)^n}$$</div><p>\\(P(5)=1/1.033^5=0.8502\\)：PV = FV × \\(P(n)\\)，折现变成乘法。</p></div>",
    "gap": "长期即期利率通常由附息债券自举得出，而不是直接观察到的。"
   },
   "ja": {
    "topic": "スポット・レート · 割引係数",
    "front": "スポット・レートとは何か。割引係数 \\(P(n)\\) はどう求まるか。\\(s_5=3.30\\%\\) のとき \\(P(5)\\) はいくらか。",
    "back": "<div class=\"ans\"><p><strong>今日</strong>観察される、\\(n\\) 年目の単一の支払いに対する金利：\\(n\\) 年<strong>ゼロ・クーポン</strong>債の利回り（ゼロ・レート）。</p><div class=\"eq-block\">$$P(n)=\\frac{1}{(1+s_n)^n}$$</div><p>\\(P(5)=1/1.033^5=0.8502\\)：PV = FV × \\(P(n)\\) なので、割引が掛け算になる。</p></div>",
    "gap": "長期のスポット・レートは直接観察されるのではなく、通常クーポン債からブートストラップで求める。"
   },
   "fr": {
    "topic": "Taux au comptant · facteurs d’actualisation",
    "front": "Qu’est-ce qu’un taux au comptant, et comment donne-t-il le facteur d’actualisation \\(P(n)\\) ? Avec \\(s_5=3.30\\%\\), que vaut \\(P(5)\\) ?",
    "back": "<div class=\"ans\"><p>Le taux, observé <strong>aujourd’hui</strong>, pour un paiement unique en année \\(n\\) : le rendement d’une obligation <strong>zéro-coupon</strong> à \\(n\\) ans (le taux zéro).</p><div class=\"eq-block\">$$P(n)=\\frac{1}{(1+s_n)^n}$$</div><p>\\(P(5)=1/1.033^5=0.8502\\) : VA = VF × \\(P(n)\\), l’actualisation devient une multiplication.</p></div>",
    "gap": "Les taux au comptant longs sont en général obtenus par bootstrapping à partir d’obligations à coupon, pas observés directement."
   }
  },
  "fi1-forward-def": {
   "zh": {
    "topic": "远期利率 · 定义",
    "front": "定义 \\(f(j,k)\\) 和远期折现因子 \\(F(j,k)\\)。\\(F\\) 与即期折现因子是什么关系？",
    "back": "<div class=\"ans\"><p>\\(f(j,k)\\)：<strong>今天</strong>约定的、从第 \\(j\\) 年开始、期限 \\(k\\) 年（在 \\(j+k\\) 结束）的贷款利率。</p><div class=\"eq-block\">$$F(j,k)=\\frac{1}{(1+f(j,k))^k}=\\frac{P(j+k)}{P(j)}$$</div></div>"
   },
   "ja": {
    "topic": "フォワード・レート · 定義",
    "front": "\\(f(j,k)\\) とフォワード割引係数 \\(F(j,k)\\) を定義せよ。\\(F\\) はスポットの割引係数とどう関係するか。",
    "back": "<div class=\"ans\"><p>\\(f(j,k)\\)：\\(j\\) 年目に始まり \\(k\\) 年間（\\(j+k\\) に終わる）の貸出に対して<strong>今日</strong>合意される金利。</p><div class=\"eq-block\">$$F(j,k)=\\frac{1}{(1+f(j,k))^k}=\\frac{P(j+k)}{P(j)}$$</div></div>"
   },
   "fr": {
    "topic": "Taux à terme · définition",
    "front": "Définissez \\(f(j,k)\\) et le facteur d’actualisation à terme \\(F(j,k)\\). Quel est le lien entre \\(F\\) et les facteurs d’actualisation au comptant ?",
    "back": "<div class=\"ans\"><p>\\(f(j,k)\\) : le taux convenu <strong>aujourd’hui</strong> pour un prêt commençant en année \\(j\\) et d’une durée de \\(k\\) ans (fin en \\(j+k\\)).</p><div class=\"eq-block\">$$F(j,k)=\\frac{1}{(1+f(j,k))^k}=\\frac{P(j+k)}{P(j)}$$</div></div>"
   }
  },
  "fi1-forward-curve": {
   "zh": {
    "topic": "远期曲线 · 二级与一级",
    "front": "二级对远期曲线的定义与一级有何不同？",
    "back": "<div class=\"ans\"><ul><li><strong>二级</strong>：远期利率 \\(f(j,k)\\) 对期限 \\(k\\) 的期限结构，全部具有<strong>相同的起始日</strong> \\(j\\)。即期曲线是 \\(j=0\\) 的情形</li><li><strong>一级</strong>：<strong>期限相同</strong>的远期利率（如一年期远期 \\(f(1,1), f(2,1),\\dots\\)），按其起始或结束年份作图</li></ul></div>",
    "gap": "在市场上，远期曲线常按日历年份作图，每个都从各自的起始年份开始。"
   },
   "ja": {
    "topic": "フォワード・カーブ · レベル II とレベル I",
    "front": "レベル II のフォワード・カーブの定義はレベル I とどう違うか。",
    "back": "<div class=\"ans\"><ul><li><strong>レベル II</strong>：フォワード・レート \\(f(j,k)\\) を期間 \\(k\\) に対して描いた期間構造で、すべて<strong>同じ開始日</strong> \\(j\\)。スポット・カーブは \\(j=0\\) の場合</li><li><strong>レベル I</strong>：<strong>期間が同じ</strong>フォワード（例：1 年物フォワード \\(f(1,1), f(2,1),\\dots\\)）を開始年または終了年に対して描く</li></ul></div>",
    "gap": "市場では、フォワード・カーブは暦年ベースで描かれ、それぞれが自分の開始年から始まることが多い。"
   },
   "fr": {
    "topic": "Courbes à terme · niveau II et niveau I",
    "front": "En quoi la définition d’une courbe à terme au niveau II diffère-t-elle de celle du niveau I ?",
    "back": "<div class=\"ans\"><ul><li><strong>Niveau II</strong> : la structure par terme des taux à terme \\(f(j,k)\\) en fonction de la durée \\(k\\), tous avec la <strong>même date de départ</strong> \\(j\\). La courbe au comptant correspond à \\(j=0\\)</li><li><strong>Niveau I</strong> : des taux à terme de <strong>même durée</strong> (p. ex. à un an \\(f(1,1), f(2,1),\\dots\\)) tracés selon leur année de début ou de fin</li></ul></div>",
    "gap": "Sur le marché, les courbes à terme sont souvent tracées en années civiles, chacune partant de sa propre année de départ."
   }
  },
  "fi1-forward-model": {
   "zh": {
    "topic": "远期利率模型",
    "front": "给出即期利率与远期利率之间的无套利关系。若 \\(s_1=2.00\\%\\)、\\(s_2=2.40\\%\\)，求 \\(f(1,1)\\)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(1+s_{j+k})^{j+k}=(1+s_j)^j\\,(1+f(j,k))^k$$</div><div class=\"eq-block\">$$f(1,1)=\\frac{1.024^2}{1.02}-1=2.80\\%$$</div><p>套利迫使两条路径的收益相同。</p></div>",
    "gap": "简便算法：\\((j+k)s_{j+k}\\simeq j s_j+k f(j,k)\\)，所以 \\(f(1,1)\\simeq2(2.40\\%)-2.00\\%=2.80\\%\\)。"
   },
   "ja": {
    "topic": "フォワード・レート・モデル",
    "front": "スポット・レートとフォワード・レートの無裁定の関係を示せ。\\(s_1=2.00\\%\\)、\\(s_2=2.40\\%\\) のとき \\(f(1,1)\\) を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(1+s_{j+k})^{j+k}=(1+s_j)^j\\,(1+f(j,k))^k$$</div><div class=\"eq-block\">$$f(1,1)=\\frac{1.024^2}{1.02}-1=2.80\\%$$</div><p>裁定により、2 つのルートの受取額は等しくなる。</p></div>",
    "gap": "近似：\\((j+k)s_{j+k}\\simeq j s_j+k f(j,k)\\) なので、\\(f(1,1)\\simeq2(2.40\\%)-2.00\\%=2.80\\%\\)。"
   },
   "fr": {
    "topic": "Modèle des taux à terme",
    "front": "Donnez la relation d’absence d’arbitrage entre taux au comptant et taux à terme. Avec \\(s_1=2.00\\%\\) et \\(s_2=2.40\\%\\), trouvez \\(f(1,1)\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$(1+s_{j+k})^{j+k}=(1+s_j)^j\\,(1+f(j,k))^k$$</div><div class=\"eq-block\">$$f(1,1)=\\frac{1.024^2}{1.02}-1=2.80\\%$$</div><p>L’arbitrage oblige les deux voies à rapporter la même chose.</p></div>",
    "gap": "Raccourci : \\((j+k)s_{j+k}\\simeq j s_j+k f(j,k)\\), donc \\(f(1,1)\\simeq2(2.40\\%)-2.00\\%=2.80\\%\\)."
   }
  },
  "fi1-above-below": {
   "zh": {
    "topic": "即期曲线与远期曲线",
    "front": "远期曲线何时位于即期曲线之上？为什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)\\simeq s_{j+k}+\\frac{j}{k}\\,(s_{j+k}-s_j)$$</div><ul><li>即期曲线<strong>向上</strong>：\\(f(j,k)>s_{j+k}\\ge s_k\\)：远期在<strong>上方</strong></li><li>即期曲线<strong>向下</strong>：远期在<strong>下方</strong></li></ul><p>长期即期利率大致是 \\(s_j\\) 与 \\(f(j,k)\\) 的平均，所以远期利率位于它的另一侧。</p></div>",
    "gap": "例：\\(f(2,3)\\simeq3.30\\%+\\tfrac23(3.30\\%-2.40\\%)=3.90\\%\\)，高于 \\(s_5=3.30\\%\\)。"
   },
   "ja": {
    "topic": "スポット・カーブとフォワード・カーブ",
    "front": "フォワード・カーブがスポット・カーブより上にあるのはいつか。なぜか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)\\simeq s_{j+k}+\\frac{j}{k}\\,(s_{j+k}-s_j)$$</div><ul><li>スポット・カーブが<strong>右上がり</strong>：\\(f(j,k)>s_{j+k}\\ge s_k\\)：フォワードは<strong>上</strong></li><li>スポット・カーブが<strong>右下がり</strong>：フォワードは<strong>下</strong></li></ul><p>長期のスポット・レートはおおよそ \\(s_j\\) と \\(f(j,k)\\) の平均なので、フォワードはその反対側に位置する。</p></div>",
    "gap": "例：\\(f(2,3)\\simeq3.30\\%+\\tfrac23(3.30\\%-2.40\\%)=3.90\\%\\) で、\\(s_5=3.30\\%\\) を上回る。"
   },
   "fr": {
    "topic": "Courbes au comptant et à terme",
    "front": "Quand la courbe à terme est-elle au-dessus de la courbe au comptant, et pourquoi ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)\\simeq s_{j+k}+\\frac{j}{k}\\,(s_{j+k}-s_j)$$</div><ul><li>Courbe au comptant <strong>croissante</strong> : \\(f(j,k)>s_{j+k}\\ge s_k\\) : taux à terme <strong>au-dessus</strong></li><li>Courbe au comptant <strong>décroissante</strong> : taux à terme <strong>en dessous</strong></li></ul><p>Le taux au comptant long est à peu près la moyenne de \\(s_j\\) et de \\(f(j,k)\\) : le taux à terme se situe donc de l’autre côté.</p></div>",
    "gap": "Exemple : \\(f(2,3)\\simeq3.30\\%+\\tfrac23(3.30\\%-2.40\\%)=3.90\\%\\), au-dessus de \\(s_5=3.30\\%\\)."
   }
  },
  "fi1-convexity-shape": {
   "zh": {
    "topic": "即期曲线形状 → 远期曲线形状",
    "front": "在连续复利下，即期曲线的形状如何决定远期曲线是上升还是下降？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(t)=s(t)+t\\,s'(t)$$</div><div class=\"eq-block\">$$f'(t)=2s'(t)+t\\,s''(t)$$</div><ul><li><strong>线性</strong>即期曲线（\\(s''=0\\)）：远期曲线上升的斜率是两倍</li><li><strong>凹形</strong>上升的即期曲线：远期曲线在 \\(t\\,s''=-2s'\\) 处<strong>见顶</strong>，然后下降，但仍位于即期曲线之上</li></ul></div>",
    "gap": "即期曲线上升并不保证远期曲线上升：凹性可以使其向下弯。"
   },
   "ja": {
    "topic": "スポット・カーブの形 → フォワードの形",
    "front": "連続複利のとき、スポット・カーブの形状はフォワード・カーブが上がるか下がるかをどう決めるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(t)=s(t)+t\\,s'(t)$$</div><div class=\"eq-block\">$$f'(t)=2s'(t)+t\\,s''(t)$$</div><ul><li><strong>直線</strong>のスポット（\\(s''=0\\)）：フォワードは 2 倍の傾きで上がる</li><li><strong>凹型</strong>で右上がりのスポット：フォワードは \\(t\\,s''=-2s'\\) で<strong>ピーク</strong>をつけて下がるが、スポット・カーブより上にとどまる</li></ul></div>",
    "gap": "スポット・カーブが右上がりでもフォワード・カーブが右上がりとは限らない：凹性で下に曲がりうる。"
   },
   "fr": {
    "topic": "Forme de la courbe au comptant → forme à terme",
    "front": "En taux continus, comment la forme de la courbe au comptant détermine-t-elle si la courbe à terme monte ou baisse ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(t)=s(t)+t\\,s'(t)$$</div><div class=\"eq-block\">$$f'(t)=2s'(t)+t\\,s''(t)$$</div><ul><li>Courbe au comptant <strong>linéaire</strong> (\\(s''=0\\)) : la courbe à terme monte deux fois plus vite</li><li>Courbe au comptant croissante <strong>concave</strong> : la courbe à terme atteint un <strong>pic</strong> où \\(t\\,s''=-2s'\\), puis baisse, tout en restant au-dessus de la courbe au comptant</li></ul></div>",
    "gap": "Une courbe au comptant croissante ne garantit pas une courbe à terme croissante : la concavité peut l’infléchir vers le bas."
   }
  },
  "fi1-shapes": {
   "zh": {
    "topic": "收益率曲线形状",
    "front": "收益率曲线可能呈现哪些形状？各自通常如何解释？",
    "back": "<div class=\"ans\"><ul><li><strong>向上且凹</strong>（发达市场常见）：随增长而来的通胀溢价，加上长期债券的风险溢价</li><li><strong>倒挂</strong>：不常见；可能反映预期通胀和政策利率下降，如衰退之前</li><li><strong>平坦</strong>：向上与倒挂之间的短暂过渡</li><li><strong>驼峰</strong>：中期最高；罕见</li></ul></div>"
   },
   "ja": {
    "topic": "イールド・カーブの形状",
    "front": "イールド・カーブはどんな形状をとりうるか。それぞれ通常どう説明されるか。",
    "back": "<div class=\"ans\"><ul><li><strong>右上がりで凹型</strong>（先進国市場で一般的）：成長に伴うインフレ・プレミアムと、長期債のリスク・プレミアム</li><li><strong>逆イールド</strong>：まれ。インフレ率と政策金利の低下予想を反映しうる。例：景気後退の前</li><li><strong>フラット</strong>：右上がりと逆イールドの間の短い移行期</li><li><strong>こぶ型</strong>：中期が最も高い。まれ</li></ul></div>"
   },
   "fr": {
    "topic": "Formes de la courbe des taux",
    "front": "Quelles formes la courbe des taux peut-elle prendre, et qu’est-ce qui explique généralement chacune ?",
    "back": "<div class=\"ans\"><ul><li><strong>Croissante et concave</strong> (habituelle sur les marchés développés) : prime d’inflation liée à la croissance, plus une prime de risque sur les obligations longues</li><li><strong>Inversée</strong> : peu fréquente ; peut refléter une baisse attendue de l’inflation et des taux directeurs, p. ex. avant une récession</li><li><strong>Plate</strong> : une brève transition entre croissante et inversée</li><li><strong>En bosse</strong> : maturités intermédiaires les plus hautes ; rare</li></ul></div>"
   }
  },
  "fi1-par": {
   "zh": {
    "topic": "平价利率",
    "front": "定义平价利率并给出公式。为什么平价曲线位于上升的即期曲线之下？已知 \\(P(1)=0.98039\\)、\\(P(2)=0.95367\\)，求 \\(\\text{par}_2\\)。",
    "back": "<div class=\"ans\"><p>按即期利率折现时，使 \\(n\\) 年期债券定价为<strong>面值</strong>的票面利率：</p><div class=\"eq-block\">$$\\text{par}_n=\\frac{1-P(n)}{\\sum_{i=1}^{n}P(i)}$$</div><p>\\(\\text{par}_2=0.04633/1.93406=2.395\\%\\)。平价债券的收益率是到 \\(n\\) 为止各即期利率的平均，所以当曲线上升时它低于 \\(s_n\\)。</p></div>",
    "gap": "平价时：YTM = 票面利率 = 平价利率，且 \\(\\text{par}_1=s_1\\)。"
   },
   "ja": {
    "topic": "パー・レート",
    "front": "パー・レートを定義し、式を示せ。なぜパー・カーブは右上がりのスポット・カーブより下にあるのか。\\(P(1)=0.98039\\)、\\(P(2)=0.95367\\) のとき \\(\\text{par}_2\\) を求めよ。",
    "back": "<div class=\"ans\"><p>スポット・レートで割り引いたとき、\\(n\\) 年債の価格を<strong>額面</strong>にするクーポン・レート：</p><div class=\"eq-block\">$$\\text{par}_n=\\frac{1-P(n)}{\\sum_{i=1}^{n}P(i)}$$</div><p>\\(\\text{par}_2=0.04633/1.93406=2.395\\%\\)。パー債の利回りは \\(n\\) までのスポット・レートの平均なので、カーブが右上がりなら \\(s_n\\) を下回る。</p></div>",
    "gap": "パーでは YTM = クーポン・レート = パー・レート、そして \\(\\text{par}_1=s_1\\)。"
   },
   "fr": {
    "topic": "Taux au pair",
    "front": "Définissez le taux au pair et donnez sa formule. Pourquoi la courbe au pair est-elle sous une courbe au comptant croissante ? Trouvez \\(\\text{par}_2\\) avec \\(P(1)=0.98039\\), \\(P(2)=0.95367\\).",
    "back": "<div class=\"ans\"><p>Le taux de coupon qui valorise une obligation à \\(n\\) ans <strong>au pair</strong>, en actualisant aux taux au comptant :</p><div class=\"eq-block\">$$\\text{par}_n=\\frac{1-P(n)}{\\sum_{i=1}^{n}P(i)}$$</div><p>\\(\\text{par}_2=0.04633/1.93406=2.395\\%\\). Le rendement d’une obligation au pair est une moyenne des taux au comptant jusqu’à \\(n\\) : il est donc sous \\(s_n\\) quand la courbe monte.</p></div>",
    "gap": "Au pair : YTM = taux du coupon = taux au pair, et \\(\\text{par}_1=s_1\\)."
   }
  },
  "fi1-ytm": {
   "zh": {
    "topic": "到期收益率",
    "front": "什么是 YTM？它何时等于投资者的实现回报？",
    "back": "<div class=\"ans\"><p>使债券现金流现值等于其价格的单一折现率：即期利率按现金流加权的<strong>平均</strong>（曲线平坦时等于即期利率）。</p><ul><li>仅当：支付<strong>足额且按时</strong>，债券<strong>持有至到期</strong>，且票息<strong>按 YTM 再投资</strong></li></ul></div>",
    "gap": "当利率波动大、曲线陡峭、存在违约风险或债券含嵌入期权时，YTM 是很差的估计。"
   },
   "ja": {
    "topic": "YTM",
    "front": "YTM とは何か。投資家の実現リターンと一致するのはいつか。",
    "back": "<div class=\"ans\"><p>債券のキャッシュフローの現在価値を価格と等しくする単一の割引率：スポット・レートのキャッシュフロー加重<strong>平均</strong>（カーブがフラットならスポット・レートと等しい）。</p><ul><li>条件：支払いが<strong>全額かつ期日どおり</strong>、債券を<strong>満期まで保有</strong>、クーポンを <strong>YTM で再投資</strong></li></ul></div>",
    "gap": "金利の変動が大きい、カーブが急、デフォルト・リスクがある、組込オプションがある場合、YTM はよい推定値ではない。"
   },
   "fr": {
    "topic": "Rendement à l’échéance",
    "front": "Qu’est-ce que le YTM, et quand correspond-il au rendement réalisé par l’investisseur ?",
    "back": "<div class=\"ans\"><p>Le taux d’actualisation unique qui égale la VA des flux de l’obligation à son prix : une <strong>moyenne</strong> des taux au comptant pondérée par les flux (égale au taux au comptant si la courbe est plate).</p><ul><li>Seulement si : paiements <strong>complets et à l’heure</strong>, obligation <strong>détenue jusqu’à l’échéance</strong>, coupons <strong>réinvestis au YTM</strong></li></ul></div>",
    "gap": "Le YTM est une mauvaise estimation si les taux sont volatils, la courbe pentue, s’il existe un risque de défaut ou une option incorporée."
   }
  },
  "fi1-swap-rate": {
   "zh": {
    "topic": "互换利率",
    "front": "为什么互换利率是平价利率？",
    "back": "<div class=\"ans\"><ul><li>起始时 \\(V_{\\text{swap}}=0\\)，所以 PV(固定腿) = PV(浮动腿)</li><li>在期末加上名义本金：两条腿变成固定利率债券和浮动利率债券</li><li>浮息债重置为市场利率，所以定价为<strong>面值</strong> → 固定利率债券也在面值</li></ul><div class=\"eq-block\">$$\\text{Swap rate}_N=\\frac{1-P(N)}{\\sum_{i=1}^{N}P(i)}$$</div></div>",
    "gap": "在普通互换中，固定腿支付互换利率；浮动腿支付 MRR（SOFR，以前是 LIBOR）。"
   },
   "ja": {
    "topic": "スワップ・レート",
    "front": "なぜスワップ・レートはパー・レートなのか。",
    "back": "<div class=\"ans\"><ul><li>開始時 \\(V_{\\text{swap}}=0\\) なので、PV（固定レグ）= PV（変動レグ）</li><li>最後に想定元本を加えると、2 つのレグは固定利付債と変動利付債になる</li><li>変動利付債は市場金利にリセットされるので<strong>額面</strong>で評価される → 固定利付債も額面</li></ul><div class=\"eq-block\">$$\\text{Swap rate}_N=\\frac{1-P(N)}{\\sum_{i=1}^{N}P(i)}$$</div></div>",
    "gap": "プレーン・バニラ・スワップでは、固定レグがスワップ・レートを、変動レグが MRR（SOFR、以前は LIBOR）を支払う。"
   },
   "fr": {
    "topic": "Taux de swap",
    "front": "Pourquoi le taux de swap est-il un taux au pair ?",
    "back": "<div class=\"ans\"><ul><li>À l’initiation \\(V_{\\text{swap}}=0\\), donc VA(jambe fixe) = VA(jambe variable)</li><li>Ajoutez un notionnel à la fin : les jambes deviennent une obligation à taux fixe et une obligation à taux variable</li><li>Une obligation à taux variable se refixe au taux de marché, elle vaut donc le <strong>pair</strong> → l’obligation à taux fixe aussi</li></ul><div class=\"eq-block\">$$\\text{Swap rate}_N=\\frac{1-P(N)}{\\sum_{i=1}^{N}P(i)}$$</div></div>",
    "gap": "Dans un swap standard, la jambe fixe paie le taux de swap ; la jambe variable paie le MRR (SOFR, autrefois LIBOR)."
   }
  },
  "fi1-swap-curve": {
   "zh": {
    "topic": "以互换曲线为基准",
    "front": "为什么投资者常常更喜欢用互换曲线而不是政府即期曲线作为基准？",
    "back": "<div class=\"ans\"><ul><li>更多<strong>期限</strong></li><li><strong>流动性</strong>高，对冲利率风险效率高</li><li>反映<strong>银行信用风险</strong>，更接近私人部门的借款成本</li><li><strong>不受政府监管</strong>（场外），因此跨国可比</li></ul></div>"
   },
   "ja": {
    "topic": "ベンチマークとしてのスワップ・カーブ",
    "front": "なぜ投資家はベンチマークとして国債スポット・カーブよりスワップ・カーブを好むことが多いのか。",
    "back": "<div class=\"ans\"><ul><li>より多くの<strong>満期</strong></li><li><strong>流動性</strong>が高く、金利リスクのヘッジに効率的</li><li><strong>銀行の信用リスク</strong>を反映し、民間の借入コストに近い</li><li><strong>政府の規制を受けない</strong>（OTC）ので、国をまたいで比較できる</li></ul></div>"
   },
   "fr": {
    "topic": "La courbe des swaps comme référence",
    "front": "Pourquoi les investisseurs préfèrent-ils souvent la courbe des swaps à la courbe au comptant des emprunts d’État comme référence ?",
    "back": "<div class=\"ans\"><ul><li>Davantage d’<strong>échéances</strong></li><li>Très <strong>liquide</strong>, et efficace pour couvrir le risque de taux</li><li>Reflète le <strong>risque de crédit bancaire</strong>, plus proche du coût d’emprunt du secteur privé</li><li><strong>Non réglementée par l’État</strong> (de gré à gré), donc comparable d’un pays à l’autre</li></ul></div>"
   }
  },
  "fi1-spreads": {
   "zh": {
    "topic": "利差 · G、I、互换",
    "front": "定义 G 利差、I 利差和互换利差，以及它们如何相加。",
    "back": "<div class=\"ans\"><ul><li><strong>G 利差</strong> = 债券收益率 − 政府债券收益率（相同期限）</li><li><strong>I 利差</strong> = 债券收益率 − 互换利率（I = interpolated，插值）</li><li><strong>互换利差</strong> = 互换利率 − 新发行政府债券收益率</li></ul><div class=\"eq-block\">$$\\text{G-spread}=\\text{Swap spread}+\\text{I-spread}$$</div></div>"
   },
   "ja": {
    "topic": "スプレッド · G、I、スワップ",
    "front": "G スプレッド、I スプレッド、スワップ・スプレッドを定義し、どう足し合わさるかを示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>G スプレッド</strong> = 債券利回り − 国債利回り（同じ満期）</li><li><strong>I スプレッド</strong> = 債券利回り − スワップ・レート（I = interpolated、補間）</li><li><strong>スワップ・スプレッド</strong> = スワップ・レート − オン・ザ・ラン国債の利回り</li></ul><div class=\"eq-block\">$$\\text{G-spread}=\\text{Swap spread}+\\text{I-spread}$$</div></div>"
   },
   "fr": {
    "topic": "Spreads · G, I, swap",
    "front": "Définissez le G-spread, l’I-spread et le spread de swap, et comment ils s’additionnent.",
    "back": "<div class=\"ans\"><ul><li><strong>G-spread</strong> = rendement de l’obligation − rendement de l’emprunt d’État (même échéance)</li><li><strong>I-spread</strong> = rendement de l’obligation − taux de swap (I = interpolé)</li><li><strong>Spread de swap</strong> = taux de swap − rendement de l’emprunt d’État de référence (on-the-run)</li></ul><div class=\"eq-block\">$$\\text{G-spread}=\\text{Swap spread}+\\text{I-spread}$$</div></div>"
   }
  },
  "fi1-ispread-example": {
   "zh": {
    "topic": "I 利差 · 例题",
    "front": "一只 6 年期公司债收益率 4.80%。互换利率：5 年 3.60%，7 年 3.90%。政府债券收益率：5 年 3.20%，7 年 3.40%。求 I 利差、互换利差和 G 利差。",
    "back": "<div class=\"ans\"><ul><li>6 年互换 \\(=3.60\\%+\\tfrac12(0.30\\%)=3.75\\%\\) → I 利差 <strong>105 bps</strong></li><li>6 年政府债券 \\(=3.30\\%\\) → G 利差 <strong>150 bps</strong></li><li>互换利差 \\(=3.75\\%-3.30\\%=\\) <strong>45 bps</strong>：\\(45+105=150\\)</li></ul></div>"
   },
   "ja": {
    "topic": "I スプレッド · 計算例",
    "front": "6 年社債の利回りは 4.80%。スワップ・レート：5 年 3.60%、7 年 3.90%。国債利回り：5 年 3.20%、7 年 3.40%。I スプレッド、スワップ・スプレッド、G スプレッドを求めよ。",
    "back": "<div class=\"ans\"><ul><li>6 年スワップ \\(=3.60\\%+\\tfrac12(0.30\\%)=3.75\\%\\) → I スプレッド <strong>105 bps</strong></li><li>6 年国債 \\(=3.30\\%\\) → G スプレッド <strong>150 bps</strong></li><li>スワップ・スプレッド \\(=3.75\\%-3.30\\%=\\) <strong>45 bps</strong>：\\(45+105=150\\)</li></ul></div>"
   },
   "fr": {
    "topic": "I-spread · exemple",
    "front": "Une obligation d’entreprise à 6 ans rapporte 4,80 %. Taux de swap : 5 ans 3,60 %, 7 ans 3,90 %. Rendements d’État : 5 ans 3,20 %, 7 ans 3,40 %. Trouvez l’I-spread, le spread de swap et le G-spread.",
    "back": "<div class=\"ans\"><ul><li>Swap 6 ans \\(=3.60\\%+\\tfrac12(0.30\\%)=3.75\\%\\) → I-spread <strong>105 pb</strong></li><li>État 6 ans \\(=3.30\\%\\) → G-spread <strong>150 pb</strong></li><li>Spread de swap \\(=3.75\\%-3.30\\%=\\) <strong>45 pb</strong> : \\(45+105=150\\)</li></ul></div>"
   }
  },
  "fi1-ted-ois": {
   "zh": {
    "topic": "TED 利差与 MRR–OIS 利差",
    "front": "TED 利差和 MRR–OIS 利差衡量什么？",
    "back": "<div class=\"ans\"><ul><li><strong>TED</strong> = 3 个月 MRR（LIBOR）− 3 个月国库券：银行体系的信用和交易对手风险；扩大 = 感知的违约风险上升</li><li><strong>MRR–OIS</strong>：OIS 的浮动腿是隔夜利率的几何平均，几乎没有信用风险，所以该利差衡量整个期限内银行的信用和流动性风险</li></ul></div>",
    "gap": "LIBOR 已于 2021–2023 年退出；同样的利差可用于任何 MRR，如 SOFR。"
   },
   "ja": {
    "topic": "TED スプレッドと MRR–OIS スプレッド",
    "front": "TED スプレッドと MRR–OIS スプレッドは何を測るか。",
    "back": "<div class=\"ans\"><ul><li><strong>TED</strong> = 3 か月 MRR（LIBOR）− 3 か月 T-bill：銀行システムの信用リスクとカウンターパーティ・リスク。拡大 = 認識されたデフォルト・リスクの上昇</li><li><strong>MRR–OIS</strong>：OIS の変動レグは翌日物金利の幾何平均でほぼ信用リスクがないので、このスプレッドは期間中の銀行の信用リスクと流動性リスクを測る</li></ul></div>",
    "gap": "LIBOR は 2021–2023 年に廃止された。同じスプレッドは SOFR など任意の MRR で使える。"
   },
   "fr": {
    "topic": "Spreads TED et MRR–OIS",
    "front": "Que mesurent le spread TED et le spread MRR–OIS ?",
    "back": "<div class=\"ans\"><ul><li><strong>TED</strong> = MRR (LIBOR) à 3 mois − bon du Trésor à 3 mois : risque de crédit et de contrepartie du système bancaire ; élargissement = hausse du risque de défaut perçu</li><li><strong>MRR–OIS</strong> : la jambe variable de l’OIS est la moyenne géométrique d’un taux au jour le jour, quasiment sans risque de crédit ; le spread mesure donc le risque de crédit et de liquidité bancaire sur la durée</li></ul></div>",
    "gap": "Le LIBOR a été abandonné en 2021–2023 ; les mêmes spreads fonctionnent avec tout MRR comme le SOFR."
   }
  },
  "fi1-zspread": {
   "zh": {
    "topic": "Z 利差",
    "front": "定义 Z 利差。一只 3 年期、5% 年付息债券价格为 102.14，即期利率为 2.00%、2.40%、2.75%。证明 Z = 150 bps。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=\\sum_{t=1}^{N}\\frac{CF_t}{(1+s_t+Z)^t}$$</div><div class=\"eq-block\">$$\\begin{aligned}&\\frac{5}{1.035}+\\frac{5}{1.039^2}+\\frac{105}{1.0425^3}\\\\&=4.831+4.632+92.675=102.14\\end{aligned}$$</div></div>",
    "gap": "平行移动是一个假设；含嵌入期权时改用 OAS。"
   },
   "ja": {
    "topic": "Z スプレッド",
    "front": "Z スプレッドを定義せよ。3 年、年 5% クーポンの債券の価格が 102.14、スポット・レートが 2.00%、2.40%、2.75%。Z = 150 bps を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=\\sum_{t=1}^{N}\\frac{CF_t}{(1+s_t+Z)^t}$$</div><div class=\"eq-block\">$$\\begin{aligned}&\\frac{5}{1.035}+\\frac{5}{1.039^2}+\\frac{105}{1.0425^3}\\\\&=4.831+4.632+92.675=102.14\\end{aligned}$$</div></div>",
    "gap": "平行移動は仮定にすぎない。組込オプションがあるなら代わりに OAS を使う。"
   },
   "fr": {
    "topic": "Z-spread",
    "front": "Définissez le Z-spread. Une obligation à 3 ans à coupon annuel de 5 % cote 102,14, avec des taux au comptant de 2,00 %, 2,40 %, 2,75 %. Montrez que Z = 150 pb.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=\\sum_{t=1}^{N}\\frac{CF_t}{(1+s_t+Z)^t}$$</div><div class=\"eq-block\">$$\\begin{aligned}&\\frac{5}{1.035}+\\frac{5}{1.039^2}+\\frac{105}{1.0425^3}\\\\&=4.831+4.632+92.675=102.14\\end{aligned}$$</div></div>",
    "gap": "Le déplacement parallèle est une hypothèse ; avec une option incorporée, utilisez plutôt l’OAS."
   }
  },
  "fi1-pure-exp": {
   "zh": {
    "topic": "纯预期理论",
    "front": "说明纯预期理论以及各种曲线形状的含义。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]$$</div><ul><li>向上 → 预期利率<strong>上升</strong>；平坦 → <strong>不变</strong>；向下 → <strong>下降</strong></li><li>假设<strong>风险中性</strong>：各期限债券完全可替代，在任何期限内预期回报都相同</li></ul></div>"
   },
   "ja": {
    "topic": "純粋期待仮説",
    "front": "純粋期待仮説と、各カーブ形状が示すことを述べよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]$$</div><ul><li>右上がり → 金利<strong>上昇</strong>を予想、フラット → <strong>不変</strong>、右下がり → <strong>低下</strong></li><li><strong>リスク中立</strong>を仮定：すべての満期の債券は完全代替で、どの期間でも期待リターンは同じ</li></ul></div>"
   },
   "fr": {
    "topic": "Théorie des anticipations pures",
    "front": "Énoncez la théorie des anticipations pures et ce qu’implique chaque forme de courbe.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]$$</div><ul><li>Croissante → taux attendus en <strong>hausse</strong> ; plate → <strong>inchangés</strong> ; décroissante → en <strong>baisse</strong></li><li>Suppose la <strong>neutralité au risque</strong> : les obligations de toutes échéances sont parfaitement substituables, avec le même rendement attendu sur tout horizon</li></ul></div>"
   }
  },
  "fi1-local-exp": {
   "zh": {
    "topic": "局部预期理论",
    "front": "局部预期理论与纯预期理论有何不同？",
    "back": "<div class=\"ans\"><p>只要求在<strong>短持有期</strong>内风险中性：在短期内，每只无违约风险债券的预期回报都是无风险短期利率。较长期限内允许存在风险溢价。</p></div>",
    "gap": "在实践中，即使在短期内，长期债券的回报也往往高于短期债券。"
   },
   "ja": {
    "topic": "局所期待仮説",
    "front": "局所期待仮説は純粋期待仮説とどう違うか。",
    "back": "<div class=\"ans\"><p>リスク中立を求めるのは<strong>短い保有期間</strong>だけ：短期間では、デフォルト・リスクのないすべての債券が無リスクの短期金利を稼ぐと期待される。より長い期間ではリスク・プレミアムを認める。</p></div>",
    "gap": "実際には、短期間でも長期債のリターンは短期債を上回りがち。"
   },
   "fr": {
    "topic": "Théorie des anticipations locales",
    "front": "En quoi la théorie des anticipations locales diffère-t-elle de celle des anticipations pures ?",
    "back": "<div class=\"ans\"><p>La neutralité au risque n’est exigée que sur des <strong>périodes de détention courtes</strong> : sur une courte période, toute obligation sans risque de défaut doit rapporter le taux court sans risque. Des primes de risque sont admises sur des horizons plus longs.</p></div>",
    "gap": "En pratique, les obligations longues tendent à rapporter plus que les courtes, même sur de courtes périodes."
   }
  },
  "fi1-liquidity": {
   "zh": {
    "topic": "流动性偏好理论",
    "front": "说明流动性偏好理论以及各种曲线形状的含义。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]+\\text{LP},\\quad\\text{LP}>0$$</div><ul><li>溢价<strong>随期限上升</strong></li><li><strong>向上</strong>的曲线：<strong>不确定</strong>，利率可能上升、持平甚至略降</li><li><strong>平坦</strong>：预期利率略<strong>降</strong></li><li><strong>向下</strong>：预期利率显著<strong>下降</strong></li></ul></div>",
    "gap": "向上倾斜的曲线并不能证明利率会上升：可能只是溢价造成的。"
   },
   "ja": {
    "topic": "流動性選好仮説",
    "front": "流動性選好仮説と、各カーブ形状が示すことを述べよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]+\\text{LP},\\quad\\text{LP}>0$$</div><ul><li>プレミアムは<strong>満期とともに上がる</strong></li><li><strong>右上がり</strong>のカーブ：<strong>不確定</strong>。金利は上がるかもしれないし、横ばいや小幅な低下もありうる</li><li><strong>フラット</strong>：金利は小幅に<strong>低下</strong>すると予想</li><li><strong>右下がり</strong>：金利は大きく<strong>低下</strong>すると予想</li></ul></div>",
    "gap": "右上がりのカーブは金利上昇の証拠ではない：プレミアムだけでそうなりうる。"
   },
   "fr": {
    "topic": "Théorie de la préférence pour la liquidité",
    "front": "Énoncez la théorie de la préférence pour la liquidité et ce qu’implique chaque forme de courbe.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$f(j,k)=E[s_k(j)]+\\text{LP},\\quad\\text{LP}>0$$</div><ul><li>La prime <strong>augmente avec l’échéance</strong></li><li>Courbe <strong>croissante</strong> : <strong>incertain</strong>, les taux peuvent monter, rester stables ou même baisser légèrement</li><li><strong>Plate</strong> : taux attendus en légère <strong>baisse</strong></li><li><strong>Décroissante</strong> : taux attendus en nette <strong>baisse</strong></li></ul></div>",
    "gap": "Une courbe croissante ne prouve pas que les taux vont monter : elle peut ne refléter que la prime."
   }
  },
  "fi1-segmented": {
   "zh": {
    "topic": "市场分割与优先偏好",
    "front": "对比市场分割理论与优先偏好理论。",
    "back": "<div class=\"ans\"><ul><li><strong>市场分割</strong>：每个期限的收益率只由该细分市场的供求决定（如资产负债管理约束）；各市场<strong>互不</strong>影响</li><li><strong>优先偏好</strong>：投资者偏好某些期限，但溢价足够高时<strong>会转移</strong>；溢价与期限无关，所以任何形状（包括驼峰）都可能出现</li></ul></div>"
   },
   "ja": {
    "topic": "市場分断仮説と特定期間選好仮説",
    "front": "市場分断仮説と特定期間選好仮説を対比せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>市場分断</strong>：各満期の利回りはそのセグメント内の需給だけで決まる（例：ALM の制約）。市場は互いに影響<strong>しない</strong></li><li><strong>特定期間選好</strong>：投資家は特定の満期を好むが、十分なプレミアムがあれば<strong>移動する</strong>。プレミアムは満期と結びつかないので、こぶ型を含めどんな形もありうる</li></ul></div>"
   },
   "fr": {
    "topic": "Marchés segmentés ou habitat préféré",
    "front": "Opposez la théorie des marchés segmentés à celle de l’habitat préféré.",
    "back": "<div class=\"ans\"><ul><li><strong>Marchés segmentés</strong> : le rendement de chaque échéance est fixé par l’offre et la demande de ce seul segment (p. ex. contraintes ALM) ; les marchés ne s’influencent <strong>pas</strong></li><li><strong>Habitat préféré</strong> : les investisseurs préfèrent certaines échéances mais <strong>en changeront</strong> contre une prime suffisante ; les primes ne sont pas liées à l’échéance, donc toute forme, y compris en bosse, est possible</li></ul></div>"
   }
  },
  "fi1-factors": {
   "zh": {
    "topic": "收益率曲线因子模型",
    "front": "收益率曲线的三个因子是什么？为什么要把曲线变动分解为这些因子？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta y(t)\\approx\\Delta X_L+\\Delta X_S\\,\\sigma(t)+\\Delta X_C\\,\\kappa(t)$$</div><ul><li><strong>水平</strong>：平行移动；解释大部分变动</li><li><strong>陡峭度</strong>：短端下降，长端上升</li><li><strong>曲率</strong>：两端上升，中段下降</li></ul></div>",
    "gap": "对于纯平行移动，只用有效久期就够了。"
   },
   "ja": {
    "topic": "イールド・カーブのファクター・モデル",
    "front": "イールド・カーブの 3 つのファクターは何か。なぜカーブの変化をそれらに分解するのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta y(t)\\approx\\Delta X_L+\\Delta X_S\\,\\sigma(t)+\\Delta X_C\\,\\kappa(t)$$</div><ul><li><strong>水準</strong>：平行移動。変動の大部分を説明する</li><li><strong>傾き</strong>：短期側が下がり、長期側が上がる</li><li><strong>曲率</strong>：両端が上がり、中央が下がる</li></ul></div>",
    "gap": "純粋な平行移動なら、実効デュレーションだけで十分。"
   },
   "fr": {
    "topic": "Modèle factoriel de la courbe",
    "front": "Quels sont les trois facteurs de la courbe des taux, et pourquoi décomposer un mouvement de courbe en ces facteurs ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta y(t)\\approx\\Delta X_L+\\Delta X_S\\,\\sigma(t)+\\Delta X_C\\,\\kappa(t)$$</div><ul><li><strong>Niveau</strong> : déplacement parallèle ; explique l’essentiel de la variation</li><li><strong>Pente</strong> : partie courte en baisse, partie longue en hausse</li><li><strong>Courbure</strong> : extrémités en hausse, milieu en baisse</li></ul></div>",
    "gap": "Pour un déplacement purement parallèle, la duration effective suffit."
   }
  },
  "fi1-duration": {
   "zh": {
    "topic": "久期与凸性（一级复习）",
    "front": "给出近似修正久期、近似凸性和 \\(\\Delta P/P\\) 的公式。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{ApproxModDur}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta y\\,PV_0}$$</div><div class=\"eq-block\">$$\\text{ApproxCon}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta y)^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D\\,\\Delta y+\\tfrac12C(\\Delta y)^2$$</div></div>",
    "gap": "有效久期移动的是基准曲线而不是收益率：含嵌入期权的债券应使用它。"
   },
   "ja": {
    "topic": "デュレーションとコンベクシティ（レベル I の復習）",
    "front": "近似修正デュレーション、近似コンベクシティ、\\(\\Delta P/P\\) の式を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{ApproxModDur}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta y\\,PV_0}$$</div><div class=\"eq-block\">$$\\text{ApproxCon}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta y)^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D\\,\\Delta y+\\tfrac12C(\\Delta y)^2$$</div></div>",
    "gap": "実効デュレーションは利回りではなくベンチマーク・カーブを動かす：組込オプション付きの債券に使う。"
   },
   "fr": {
    "topic": "Duration et convexité (rappel du niveau I)",
    "front": "Donnez la duration modifiée approchée, la convexité approchée et la formule de \\(\\Delta P/P\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{ApproxModDur}=\\frac{PV_{-}-PV_{+}}{2\\,\\Delta y\\,PV_0}$$</div><div class=\"eq-block\">$$\\text{ApproxCon}=\\frac{PV_{-}+PV_{+}-2PV_0}{(\\Delta y)^2\\,PV_0}$$</div><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D\\,\\Delta y+\\tfrac12C(\\Delta y)^2$$</div></div>",
    "gap": "La duration effective déplace la courbe de référence au lieu du rendement : utilisez-la pour les obligations à option incorporée."
   }
  },
  "fi1-zero-exact": {
   "zh": {
    "topic": "零息债券的精确久期与凸性",
    "front": "推导零息债券的修正久期和凸性。为什么无论期限多长，凸性的分母都是 \\((1+y)^2\\)？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=F(1+y)^{-n}$$</div><div class=\"eq-block\">$$\\text{ModDur}=-\\frac{1}{P}\\frac{dP}{dy}=\\frac{n}{1+y}$$</div><div class=\"eq-block\">$$\\text{Convexity}=\\frac{1}{P}\\frac{d^2P}{dy^2}=\\frac{n(n+1)}{(1+y)^2}$$</div><p>每求一次导数就增加一次 \\((1+y)\\) 的幂；除以 \\(P\\) 后 \\((1+y)^{-n}\\) 被抵消。4% 的 5 年期零息债券：4.808 和 27.74。</p></div>",
    "gap": "考试中用近似公式；闭式解只适用于零息债券。"
   },
   "ja": {
    "topic": "ゼロ・クーポン債の厳密なデュレーションとコンベクシティ",
    "front": "ゼロ・クーポン債の修正デュレーションとコンベクシティを導出せよ。なぜ満期にかかわらずコンベクシティの分母は \\((1+y)^2\\) なのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=F(1+y)^{-n}$$</div><div class=\"eq-block\">$$\\text{ModDur}=-\\frac{1}{P}\\frac{dP}{dy}=\\frac{n}{1+y}$$</div><div class=\"eq-block\">$$\\text{Convexity}=\\frac{1}{P}\\frac{d^2P}{dy^2}=\\frac{n(n+1)}{(1+y)^2}$$</div><p>微分するたびに \\((1+y)\\) のべきが 1 つ増え、\\(P\\) で割ると \\((1+y)^{-n}\\) が消える。4% の 5 年ゼロ：4.808 と 27.74。</p></div>",
    "gap": "試験では近似式を使う。閉じた式が使えるのはゼロ・クーポン債だけ。"
   },
   "fr": {
    "topic": "Duration et convexité exactes d’un zéro-coupon",
    "front": "Dérivez la duration modifiée et la convexité d’une obligation zéro-coupon. Pourquoi le dénominateur de la convexité est-il \\((1+y)^2\\) quelle que soit l’échéance ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$P=F(1+y)^{-n}$$</div><div class=\"eq-block\">$$\\text{ModDur}=-\\frac{1}{P}\\frac{dP}{dy}=\\frac{n}{1+y}$$</div><div class=\"eq-block\">$$\\text{Convexity}=\\frac{1}{P}\\frac{d^2P}{dy^2}=\\frac{n(n+1)}{(1+y)^2}$$</div><p>Chaque dérivée ajoute une puissance de \\((1+y)\\) ; diviser par \\(P\\) annule le \\((1+y)^{-n}\\). Zéro à 5 ans à 4 % : 4,808 et 27,74.</p></div>",
    "gap": "À l’examen, utilisez les formules approchées ; la forme fermée ne vaut que pour les zéro-coupons."
   }
  },
  "fi1-krd-def": {
   "zh": {
    "topic": "关键利率久期 · 定义",
    "front": "定义关键利率久期。为什么它是曲线久期而不是收益率久期？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{KRD}_k=-\\frac{1}{PV}\\cdot\\frac{\\Delta PV}{\\Delta r_k}$$</div><ul><li>只移动<strong>基准曲线</strong>上第 \\(k\\) 个关键利率，其他保持不变</li><li><strong>收益率久期</strong>（麦考利、修正）：对债券<strong>自身 YTM</strong> 的敏感性</li><li><strong>曲线久期</strong>（有效、KRD）：对<strong>基准曲线</strong>的敏感性，每笔现金流按其自身利率重新定价</li></ul></div>",
    "gap": "M1 中最重要的部分。"
   },
   "ja": {
    "topic": "キーレート・デュレーション · 定義",
    "front": "キーレート・デュレーションを定義せよ。なぜそれは利回りデュレーションではなくカーブ・デュレーションなのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{KRD}_k=-\\frac{1}{PV}\\cdot\\frac{\\Delta PV}{\\Delta r_k}$$</div><ul><li><strong>ベンチマーク・カーブ</strong>の \\(k\\) 番目のキーレートだけを動かし、他は固定する</li><li><strong>利回りデュレーション</strong>（マコーレー、修正）：債券<strong>自身の YTM</strong> に対する感応度</li><li><strong>カーブ・デュレーション</strong>（実効、KRD）：<strong>ベンチマーク・カーブ</strong>に対する感応度で、各キャッシュフローをそれぞれの金利で評価し直す</li></ul></div>",
    "gap": "M1 で最も重要な部分。"
   },
   "fr": {
    "topic": "Duration de taux clé · définition",
    "front": "Définissez la duration de taux clé. Pourquoi est-ce une duration de courbe et non de rendement ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{KRD}_k=-\\frac{1}{PV}\\cdot\\frac{\\Delta PV}{\\Delta r_k}$$</div><ul><li>On ne déplace que le \\(k\\)-ième taux clé de la <strong>courbe de référence</strong>, les autres restant constants</li><li><strong>Duration de rendement</strong> (Macaulay, modifiée) : sensibilité au <strong>propre YTM</strong> de l’obligation</li><li><strong>Duration de courbe</strong> (effective, KRD) : sensibilité à la <strong>courbe de référence</strong>, chaque flux étant revalorisé à son propre taux</li></ul></div>",
    "gap": "La partie la plus importante de M1."
   }
  },
  "fi1-krd-example": {
   "zh": {
    "topic": "关键利率久期 · 例题",
    "front": "组合持有价值 40 的 3 年期零息债券和价值 60 的 5 年期零息债券（久期 ≈ 期限）。求各 KRD、有效久期，以及 3 年期利率下降 1%、5 年期上升 1% 时的变动。",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{KRD}_3=0.4\\times3=1.2\\)，\\(\\text{KRD}_5=0.6\\times5=3.0\\)</li><li>有效久期 \\(=\\sum\\text{KRD}=4.2\\)</li></ul><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-\\sum_k\\text{KRD}_k\\Delta r_k$$</div><p>\\(=-[1.2(-1\\%)+3.0(+1\\%)]=-1.8\\%\\)。</p></div>",
    "gap": "对任何组合，KRD 之和 = 有效久期，因为平行移动会让所有关键利率一起变动。"
   },
   "ja": {
    "topic": "キーレート・デュレーション · 計算例",
    "front": "ポートフォリオは価値 40 の 3 年ゼロと価値 60 の 5 年ゼロを保有（デュレーション ≈ 満期）。KRD、実効デュレーション、3 年金利が 1% 下がり 5 年金利が 1% 上がったときの変化を求めよ。",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{KRD}_3=0.4\\times3=1.2\\)、\\(\\text{KRD}_5=0.6\\times5=3.0\\)</li><li>実効デュレーション \\(=\\sum\\text{KRD}=4.2\\)</li></ul><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-\\sum_k\\text{KRD}_k\\Delta r_k$$</div><p>\\(=-[1.2(-1\\%)+3.0(+1\\%)]=-1.8\\%\\)。</p></div>",
    "gap": "どんなポートフォリオでも KRD の合計 = 実効デュレーション。平行移動ではすべてのキーレートが一緒に動くから。"
   },
   "fr": {
    "topic": "Duration de taux clé · exemple",
    "front": "Un portefeuille détient un zéro à 3 ans valant 40 et un zéro à 5 ans valant 60 (durations ≈ échéance). Trouvez les KRD, la duration effective et la variation si le taux à 3 ans baisse de 1 % et celui à 5 ans monte de 1 %.",
    "back": "<div class=\"ans\"><ul><li>\\(\\text{KRD}_3=0.4\\times3=1.2\\), \\(\\text{KRD}_5=0.6\\times5=3.0\\)</li><li>Duration effective \\(=\\sum\\text{KRD}=4.2\\)</li></ul><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-\\sum_k\\text{KRD}_k\\Delta r_k$$</div><p>\\(=-[1.2(-1\\%)+3.0(+1\\%)]=-1.8\\%\\).</p></div>",
    "gap": "Somme des KRD = duration effective pour tout portefeuille, car un déplacement parallèle fait bouger tous les taux clés ensemble."
   }
  },
  "fi1-factor-durations": {
   "zh": {
    "topic": "由 KRD 得到因子久期",
    "front": "如何由 KRD 得到 \\(D_L\\)、\\(D_S\\) 和 \\(D_C\\)？对 1 年、5 年、10 年各 100 的零息债券计算，形状为水平 (1,1,1)、陡峭度 (−1,0,1)、曲率 (1,0,1)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D_L\\Delta X_L-D_S\\Delta X_S-D_C\\Delta X_C$$</div><p>每个因子久期 = 按该因子形状加权的 KRD。KRD：\\(\\tfrac13,\\tfrac53,\\tfrac{10}3\\)。</p><ul><li>\\(D_L=\\tfrac{16}{3}=5.33\\)</li><li>\\(D_S=-\\tfrac13+\\tfrac{10}3=3.00\\)</li><li>\\(D_C=\\tfrac13+\\tfrac{10}3=3.67\\)</li></ul></div>",
    "gap": "验证：\\(\\Delta X_L=+0.5\\%\\)、\\(\\Delta X_S=+0.2\\%\\)、\\(\\Delta X_C=-0.1\\%\\) 得出 −2.90%，与 KRD × 关键利率变动之和相同。"
   },
   "ja": {
    "topic": "KRD からのファクター・デュレーション",
    "front": "\\(D_L\\)、\\(D_S\\)、\\(D_C\\) は KRD からどう求めるか。1 年・5 年・10 年のゼロ各 100、形状は水準 (1,1,1)、傾き (−1,0,1)、曲率 (1,0,1) で計算せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D_L\\Delta X_L-D_S\\Delta X_S-D_C\\Delta X_C$$</div><p>各ファクター・デュレーション = そのファクターの形状で加重した KRD。KRD：\\(\\tfrac13,\\tfrac53,\\tfrac{10}3\\)。</p><ul><li>\\(D_L=\\tfrac{16}{3}=5.33\\)</li><li>\\(D_S=-\\tfrac13+\\tfrac{10}3=3.00\\)</li><li>\\(D_C=\\tfrac13+\\tfrac{10}3=3.67\\)</li></ul></div>",
    "gap": "検算：\\(\\Delta X_L=+0.5\\%\\)、\\(\\Delta X_S=+0.2\\%\\)、\\(\\Delta X_C=-0.1\\%\\) で −2.90%。KRD × キーレート変化の合計と同じ。"
   },
   "fr": {
    "topic": "Durations factorielles à partir des KRD",
    "front": "Comment obtient-on \\(D_L\\), \\(D_S\\) et \\(D_C\\) à partir des KRD ? Calculez-les pour des zéros à 1, 5 et 10 ans de 100 chacun, avec les formes niveau (1,1,1), pente (−1,0,1), courbure (1,0,1).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{\\Delta P}{P}\\approx-D_L\\Delta X_L-D_S\\Delta X_S-D_C\\Delta X_C$$</div><p>Chaque duration factorielle = KRD pondérées par la forme du facteur. KRD : \\(\\tfrac13,\\tfrac53,\\tfrac{10}3\\).</p><ul><li>\\(D_L=\\tfrac{16}{3}=5.33\\)</li><li>\\(D_S=-\\tfrac13+\\tfrac{10}3=3.00\\)</li><li>\\(D_C=\\tfrac13+\\tfrac{10}3=3.67\\)</li></ul></div>",
    "gap": "Vérification : \\(\\Delta X_L=+0.5\\%\\), \\(\\Delta X_S=+0.2\\%\\), \\(\\Delta X_C=-0.1\\%\\) donne −2,90 %, comme la somme des KRD × variations de taux clés."
   }
  },
  "fi1-vol": {
   "zh": {
    "topic": "利率波动率",
    "front": "利率波动率的期限结构通常是什么样子？为什么？如何把波动率换算到月度？",
    "back": "<div class=\"ans\"><p>通常<strong>向下倾斜</strong>：短期利率对频繁的<strong>货币政策</strong>变动作出反应；长期利率跟随变化较慢的实体经济和长期通胀。</p><div class=\"eq-block\">$$\\sigma_{\\text{month}}=\\sigma_{\\text{annual}}\\sqrt{\\tfrac{1}{12}}$$</div><p>年化 20% → 每月 \\(20\\%\\times\\sqrt{1/12}=5.77\\%\\)。</p></div>",
    "gap": "按时间平方根换算假设相邻期间的变动不相关。"
   },
   "ja": {
    "topic": "金利のボラティリティ",
    "front": "金利ボラティリティの期間構造は通常どんな形か。なぜか。ボラティリティを月次に換算するにはどうするか。",
    "back": "<div class=\"ans\"><p>通常は<strong>右下がり</strong>：短期金利は頻繁な<strong>金融政策</strong>の変更に反応し、長期金利はゆっくり動く実体経済と長期インフレに従う。</p><div class=\"eq-block\">$$\\sigma_{\\text{month}}=\\sigma_{\\text{annual}}\\sqrt{\\tfrac{1}{12}}$$</div><p>年 20% → 月 \\(20\\%\\times\\sqrt{1/12}=5.77\\%\\)。</p></div>",
    "gap": "時間の平方根による換算は、連続する期間の変化が無相関であることを前提とする。"
   },
   "fr": {
    "topic": "Volatilité des taux",
    "front": "À quoi ressemble généralement la structure par terme de la volatilité des taux, et pourquoi ? Comment ramener la volatilité au mois ?",
    "back": "<div class=\"ans\"><p>En général <strong>décroissante</strong> : les taux courts réagissent aux fréquents changements de <strong>politique monétaire</strong> ; les taux longs suivent l’économie réelle et l’inflation de long terme, qui évoluent plus lentement.</p><div class=\"eq-block\">$$\\sigma_{\\text{month}}=\\sigma_{\\text{annual}}\\sqrt{\\tfrac{1}{12}}$$</div><p>20 % par an → \\(20\\%\\times\\sqrt{1/12}=5.77\\%\\) par mois.</p></div>",
    "gap": "La règle de la racine du temps suppose que les variations de périodes successives sont non corrélées."
   }
  },
  "fi1-forward-strategy": {
   "zh": {
    "topic": "远期合约策略",
    "front": "投资者持有远期多头，一年后以 \\(F_0=100/(1+f(1,1))\\) 买入 1 年期零息债券。未来即期利率 \\(s_1'\\) 高于或低于 \\(f(1,1)\\) 时，谁获利？",
    "back": "<div class=\"ans\"><ul><li>\\(s_1'=f(1,1)\\)：合约没有价值</li><li>\\(s_1'&gt;f(1,1)\\)：债券价格低于 \\(F_0\\) → <strong>空头获利</strong>，多头亏损</li><li>\\(s_1'&lt;f(1,1)\\)：债券价格高于 \\(F_0\\) → <strong>多头获利</strong></li></ul><p>若 \\(f(1,1)=2.80\\%\\)，\\(F_0=97.275\\)；若 \\(s_1'=2.00\\%\\)，多头获利 \\(98.039-97.275=0.764\\)。</p></div>",
    "gap": "预期利率低于远期利率 → 做多；高于 → 做空。"
   },
   "ja": {
    "topic": "フォワード契約の戦略",
    "front": "投資家は 1 年後に 1 年ゼロを \\(F_0=100/(1+f(1,1))\\) で買うフォワードのロングを持つ。将来のスポット・レート \\(s_1'\\) が \\(f(1,1)\\) を上回るとき、下回るとき、誰が得をするか。",
    "back": "<div class=\"ans\"><ul><li>\\(s_1'=f(1,1)\\)：契約の価値はゼロ</li><li>\\(s_1'&gt;f(1,1)\\)：債券価格は \\(F_0\\) を下回る → <strong>ショートが得</strong>、ロングは損</li><li>\\(s_1'&lt;f(1,1)\\)：債券価格は \\(F_0\\) を上回る → <strong>ロングが得</strong></li></ul><p>\\(f(1,1)=2.80\\%\\) なら \\(F_0=97.275\\)。\\(s_1'=2.00\\%\\) ならロングの利益は \\(98.039-97.275=0.764\\)。</p></div>",
    "gap": "金利がフォワードを下回ると予想 → ロング、上回ると予想 → ショート。"
   },
   "fr": {
    "topic": "Stratégie sur contrat à terme",
    "front": "Un investisseur est acheteur d’un contrat à terme pour acheter un zéro à 1 an dans un an à \\(F_0=100/(1+f(1,1))\\). Qui gagne si le futur taux au comptant \\(s_1'\\) est au-dessus ou en dessous de \\(f(1,1)\\) ?",
    "back": "<div class=\"ans\"><ul><li>\\(s_1'=f(1,1)\\) : le contrat ne vaut rien</li><li>\\(s_1'&gt;f(1,1)\\) : prix de l’obligation sous \\(F_0\\) → le <strong>vendeur gagne</strong>, l’acheteur perd</li><li>\\(s_1'&lt;f(1,1)\\) : prix de l’obligation au-dessus de \\(F_0\\) → l’<strong>acheteur gagne</strong></li></ul><p>Avec \\(f(1,1)=2.80\\%\\), \\(F_0=97.275\\) ; si \\(s_1'=2.00\\%\\), l’acheteur gagne \\(98.039-97.275=0.764\\).</p></div>",
    "gap": "Taux attendus sous les taux à terme → position acheteuse ; au-dessus → vendeuse."
   }
  },
  "fi1-riding": {
   "zh": {
    "topic": "骑乘收益率曲线",
    "front": "骑乘收益率曲线何时胜过期限匹配？投资期 5 年：按面值买入 5 年期债券（3%），或以 63.67（5.5%）买入 30 年期 3% 债券，5 年后作为 25 年期债券以 71.81（5.0%）卖出。",
    "back": "<div class=\"ans\"><ul><li>当曲线<strong>向上倾斜</strong>且预期<strong>不变</strong>时有效</li><li>期限匹配：100 上的 15 票息 → 约每年 <strong>2.8%</strong></li><li>骑乘：\\((71.81+15-63.67)/63.67=36.3\\%\\) → 约每年 <strong>6.4%</strong>，高于 30 年期收益率，来自 8.14 的滚降收益</li></ul></div>",
    "gap": "额外回报伴随着大得多的利率风险：曲线上移会抹去滚降收益。"
   },
   "ja": {
    "topic": "イールド・カーブのロールダウン",
    "front": "ロールダウン戦略が満期マッチングを上回るのはいつか。投資期間 5 年：5 年債をパー（3%）で買う、または 30 年 3% 債を 63.67（5.5%）で買い、25 年債として 71.81（5.0%）で売る。",
    "back": "<div class=\"ans\"><ul><li>カーブが<strong>右上がり</strong>で、<strong>変わらない</strong>と予想されるときに有効</li><li>満期マッチング：100 に対しクーポン 15 → 年約 <strong>2.8%</strong></li><li>ロールダウン：\\((71.81+15-63.67)/63.67=36.3\\%\\) → 年約 <strong>6.4%</strong>。ロールダウン益 8.14 により 30 年利回りを上回る</li></ul></div>",
    "gap": "追加のリターンにははるかに大きな金利リスクが伴う：カーブが上方シフトするとロールダウン益は消える。"
   },
   "fr": {
    "topic": "Chevaucher la courbe des taux",
    "front": "Quand « chevaucher la courbe » bat-il l’adossement des échéances ? Horizon de 5 ans : obligation à 5 ans au pair (3 %), ou achat de l’obligation à 30 ans à 3 % à 63,67 (5,5 %) revendue comme obligation à 25 ans à 71,81 (5,0 %).",
    "back": "<div class=\"ans\"><ul><li>Fonctionne si la courbe est <strong>croissante</strong> et censée <strong>ne pas changer</strong></li><li>Adossement : 15 de coupons sur 100 → environ <strong>2,8 %</strong> par an</li><li>Chevauchement : \\((71.81+15-63.67)/63.67=36.3\\%\\) → environ <strong>6,4 %</strong> par an, au-dessus du rendement à 30 ans, grâce au gain de roll-down de 8,14</li></ul></div>",
    "gap": "Le rendement supplémentaire s’accompagne d’un risque de taux bien plus grand : un déplacement vers le haut efface le gain de roll-down."
   }
  },
  "fi1-bear-bull": {
   "zh": {
    "topic": "熊市与牛市变动",
    "front": "定义熊平、牛陡、牛平和熊陡，并给出各自的典型原因。",
    "back": "<div class=\"ans\"><ul><li><strong>熊平</strong>：短端收益率上升更多；货币紧缩</li><li><strong>牛陡</strong>：短端收益率下降更多；衰退中的宽松</li><li><strong>牛平</strong>：长端收益率下降更多；避险需求</li><li><strong>熊陡</strong>：长端收益率上升更多；赤字、通胀担忧</li></ul></div>",
    "gap": "熊 = 收益率上升（价格下跌）；牛 = 收益率下降。"
   },
   "ja": {
    "topic": "ベアとブルの動き",
    "front": "ベア・フラット、ブル・スティープ、ブル・フラット、ベア・スティープを定義し、それぞれの典型的な原因を示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>ベア・フラット</strong>：短期利回りが大きく上昇。金融引き締め</li><li><strong>ブル・スティープ</strong>：短期利回りが大きく低下。景気後退時の緩和</li><li><strong>ブル・フラット</strong>：長期利回りが大きく低下。質への逃避</li><li><strong>ベア・スティープ</strong>：長期利回りが大きく上昇。財政赤字、インフレ懸念</li></ul></div>",
    "gap": "ベア = 利回り上昇（価格下落）、ブル = 利回り低下。"
   },
   "fr": {
    "topic": "Mouvements baissiers et haussiers",
    "front": "Définissez l’aplatissement baissier, la pentification haussière, l’aplatissement haussier et la pentification baissière, avec une cause typique de chacun.",
    "back": "<div class=\"ans\"><ul><li><strong>Aplatissement baissier</strong> : les rendements courts montent davantage ; resserrement monétaire</li><li><strong>Pentification haussière</strong> : les rendements courts baissent davantage ; assouplissement en récession</li><li><strong>Aplatissement haussier</strong> : les rendements longs baissent davantage ; fuite vers la qualité</li><li><strong>Pentification baissière</strong> : les rendements longs montent davantage ; déficits, craintes d’inflation</li></ul></div>",
    "gap": "Baissier (bear) = rendements en hausse (prix en baisse) ; haussier (bull) = rendements en baisse."
   }
  },
  "fi1-macro": {
   "zh": {
    "topic": "收益率的宏观驱动因素",
    "front": "通胀、财政政策和投资者需求如何影响收益率？投资者如何利用预期的牛平？",
    "back": "<div class=\"ans\"><ul><li><strong>通胀</strong>解释了短期和中期收益率的大部分变动</li><li><strong>赤字</strong>增加债券供给并推高收益率，尤其是长期：一种市场分割效应</li><li><strong>国内外需求</strong>推高价格，降低债券风险溢价</li><li><strong>避险</strong> → 牛平：从<strong>子弹型</strong>转为相同久期的<strong>杠铃型</strong></li></ul></div>",
    "gap": "长期收益率下降时，杠铃型的长端获益最多，其更高的凸性也增加收益。"
   },
   "ja": {
    "topic": "利回りのマクロ要因",
    "front": "インフレ、財政政策、投資家の需要は利回りにどう影響するか。予想されるブル・フラットに投資家はどう対応できるか。",
    "back": "<div class=\"ans\"><ul><li><strong>インフレ</strong>は短期・中期の利回りの変動の大部分を説明する</li><li><strong>財政赤字</strong>は債券の供給と利回りを、特に長期で押し上げる：市場分断の効果</li><li><strong>国内外の需要</strong>は価格を押し上げ、債券のリスク・プレミアムを下げる</li><li><strong>質への逃避</strong> → ブル・フラット：<strong>ブレット</strong>から同じデュレーションの<strong>バーベル</strong>へ移す</li></ul></div>",
    "gap": "長期利回りが下がるとバーベルの長期側が最も得をし、高いコンベクシティも利益を上乗せする。"
   },
   "fr": {
    "topic": "Moteurs macroéconomiques des rendements",
    "front": "Comment l’inflation, la politique budgétaire et la demande des investisseurs affectent-elles les rendements ? Comment jouer un aplatissement haussier attendu ?",
    "back": "<div class=\"ans\"><ul><li>L’<strong>inflation</strong> explique l’essentiel de la variation des rendements courts et intermédiaires</li><li>Les <strong>déficits</strong> augmentent l’offre d’obligations et les rendements, surtout longs : un effet de marchés segmentés</li><li>La <strong>demande intérieure et étrangère</strong> fait monter les prix et baisser la prime de risque obligataire</li><li><strong>Fuite vers la qualité</strong> → aplatissement haussier : passer d’un <strong>bullet</strong> à un <strong>barbell</strong> de même duration</li></ul></div>",
    "gap": "L’extrémité longue du barbell gagne le plus quand les rendements longs baissent, et sa convexité plus forte ajoute au gain."
   }
  }
 }
});
