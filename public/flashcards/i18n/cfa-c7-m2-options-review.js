deckI18n({
 "source": {
  "zh": "CFA 二级 衍生品 · M2 期权 · 单元复习",
  "ja": "CFA レベル II デリバティブ · M2 オプション · 単元の復習",
  "fr": "CFA niveau II Dérivés · M2 Options · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "dv2-binomial": {
   "zh": {
    "topic": "二叉树的一步",
    "front": "写出二叉树上的风险中性上升概率和一步期权价值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\pi_u=\\frac{(1+r_f)^t-D}{U-D}$$</div><div class=\"eq-block\">$$C_0=\\frac{\\pi_uC_u+\\pi_dC_d}{(1+r_f)^t}$$</div></div>",
    "gap": "无套利要求 \\(D&lt;1+r_f&lt;U\\)。连续复利版本：用 \\(e^{r\\Delta t}\\) 代替 \\((1+r_f)^t\\)。"
   },
   "ja": {
    "topic": "二項モデルの 1 ステップ",
    "front": "二項ツリーのリスク中立の上昇確率と、1 ステップのオプション価値を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\pi_u=\\frac{(1+r_f)^t-D}{U-D}$$</div><div class=\"eq-block\">$$C_0=\\frac{\\pi_uC_u+\\pi_dC_d}{(1+r_f)^t}$$</div></div>",
    "gap": "無裁定には \\(D&lt;1+r_f&lt;U\\) が必要。連続版では \\((1+r_f)^t\\) の代わりに \\(e^{r\\Delta t}\\)。"
   },
   "fr": {
    "topic": "Étape binomiale",
    "front": "Écrivez la probabilité risque-neutre de hausse et la valeur d’une option sur une étape d’arbre binomial.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\pi_u=\\frac{(1+r_f)^t-D}{U-D}$$</div><div class=\"eq-block\">$$C_0=\\frac{\\pi_uC_u+\\pi_dC_d}{(1+r_f)^t}$$</div></div>",
    "gap": "L’absence d’arbitrage exige \\(D&lt;1+r_f&lt;U\\). Version continue : \\(e^{r\\Delta t}\\) au lieu de \\((1+r_f)^t\\)."
   }
  },
  "dv2-crr": {
   "zh": {
    "topic": "选择 U 和 D",
    "front": "通常如何由波动率设定 \\(U\\) 和 \\(D\\)？为什么树必须重合？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$U=e^{\\sigma\\sqrt{\\Delta t}},\\quad D=\\frac1U$$</div><p>对数价格每步变动 \\(\\pm\\sigma\\sqrt{\\Delta t}\\)。\\(U\\) 和 \\(D\\) 不变时，先升后降与先降后升终于同一价格，使树保持较小。</p></div>"
   },
   "ja": {
    "topic": "U と D の決め方",
    "front": "\\(U\\) と \\(D\\) は通常ボラティリティからどう決めるか。なぜツリーは再結合しなければならないか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$U=e^{\\sigma\\sqrt{\\Delta t}},\\quad D=\\frac1U$$</div><p>対数価格は各ステップで \\(\\pm\\sigma\\sqrt{\\Delta t}\\) 動く。\\(U\\) と \\(D\\) が一定なら、上→下と下→上が同じ価格に着き、ツリーが小さく保てる。</p></div>"
   },
   "fr": {
    "topic": "Choisir U et D",
    "front": "Comment fixe-t-on généralement \\(U\\) et \\(D\\) à partir de la volatilité, et pourquoi l’arbre doit-il se recombiner ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$U=e^{\\sigma\\sqrt{\\Delta t}},\\quad D=\\frac1U$$</div><p>Le log du prix varie de \\(\\pm\\sigma\\sqrt{\\Delta t}\\) à chaque étape. Avec \\(U\\) et \\(D\\) constants, hausse-baisse et baisse-hausse aboutissent au même prix, ce qui garde l’arbre petit.</p></div>"
   }
  },
  "dv2-risk-neutral": {
   "zh": {
    "topic": "风险中性概率",
    "front": "风险中性概率从何而来？它们是真实世界的概率吗？",
    "back": "<div class=\"ans\"><p>来自无套利：在它们之下，股票的预期价格按 \\(r_f\\) 增长，\\(\\pi_uS_0U+\\pi_dS_0D=S_0(1+r_f)^t\\)。</p><p><strong>不是</strong>：真实概率和股票的预期回报都不进入期权价格。</p></div>"
   },
   "ja": {
    "topic": "リスク中立確率",
    "front": "リスク中立確率はどこから来るか。現実の確率か。",
    "back": "<div class=\"ans\"><p>無裁定から：その確率のもとでは株式の期待価格が \\(r_f\\) で成長する、\\(\\pi_uS_0U+\\pi_dS_0D=S_0(1+r_f)^t\\)。</p><p><strong>違う</strong>：現実の確率も株式の期待リターンもオプション価格には入らない。</p></div>"
   },
   "fr": {
    "topic": "Probabilités risque-neutres",
    "front": "D’où viennent les probabilités risque-neutres, et sont-elles des probabilités réelles ?",
    "back": "<div class=\"ans\"><p>De l’absence d’arbitrage : sous ces probabilités, le prix attendu de l’action croît à \\(r_f\\), \\(\\pi_uS_0U+\\pi_dS_0D=S_0(1+r_f)^t\\).</p><p><strong>Non</strong> : ni les probabilités réelles ni le rendement attendu de l’action n’entrent dans le prix de l’option.</p></div>"
   }
  },
  "dv2-parity": {
   "zh": {
    "topic": "看跌–看涨平价",
    "front": "说明看跌–看涨平价及其背后的两个组合。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$c+\\frac{X}{(1+r_f)^t}=S_0+p$$</div><p><strong>信托看涨</strong>（看涨期权 + 支付 \\(X\\) 的债券）和<strong>保护性看跌</strong>（股票 + 看跌期权）都支付 \\(\\max(S_T,X)\\)。</p></div>"
   },
   "ja": {
    "topic": "プット・コール・パリティ",
    "front": "プット・コール・パリティとその背後にある 2 つのポートフォリオを述べよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$c+\\frac{X}{(1+r_f)^t}=S_0+p$$</div><p><strong>フィデューシャリー・コール</strong>（コール + \\(X\\) を支払う債券）と<strong>プロテクティブ・プット</strong>（株式 + プット）はどちらも \\(\\max(S_T,X)\\) を支払う。</p></div>"
   },
   "fr": {
    "topic": "Parité put–call",
    "front": "Énoncez la parité put–call et les deux portefeuilles qui la sous-tendent.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$c+\\frac{X}{(1+r_f)^t}=S_0+p$$</div><p>Le <strong>call fiduciaire</strong> (call + obligation payant \\(X\\)) et le <strong>put protecteur</strong> (action + put) paient tous deux \\(\\max(S_T,X)\\).</p></div>"
   }
  },
  "dv2-hedge": {
   "zh": {
    "topic": "对冲比率",
    "front": "用股票和卖出的看涨期权构建无风险组合。对冲比率是多少？如何由此得出看涨期权价值？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\delta=\\frac{C_u-C_d}{S_u-S_d}$$</div><p>买入 \\(\\delta\\) 股，卖出一份看涨期权。组合无风险，所以赚取 \\(r_f\\)：</p><div class=\"eq-block\">$$c_0=\\delta S_0-\\frac{\\delta S_u-C_u}{(1+r_f)^t}$$</div></div>",
    "gap": "如果市场价格不同，就用看涨期权与 δ 股股票对做套利。"
   },
   "ja": {
    "topic": "ヘッジ比率",
    "front": "株式とコールの売りで無リスクのポートフォリオをつくれ。ヘッジ比率は何か。それからコール価値をどう求めるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\delta=\\frac{C_u-C_d}{S_u-S_d}$$</div><p>株式を \\(\\delta\\) 株買い、コールを 1 つ売る。無リスクなので \\(r_f\\) を稼ぐ：</p><div class=\"eq-block\">$$c_0=\\delta S_0-\\frac{\\delta S_u-C_u}{(1+r_f)^t}$$</div></div>",
    "gap": "市場価格が違えば、コールと δ 株を売買して裁定する。"
   },
   "fr": {
    "topic": "Ratio de couverture",
    "front": "Construisez un portefeuille sans risque avec des actions et un call vendu. Quel est le ratio de couverture, et comment donne-t-il la valeur du call ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\delta=\\frac{C_u-C_d}{S_u-S_d}$$</div><p>Acheter \\(\\delta\\) actions, vendre un call. Le portefeuille est sans risque, il rapporte donc \\(r_f\\) :</p><div class=\"eq-block\">$$c_0=\\delta S_0-\\frac{\\delta S_u-C_u}{(1+r_f)^t}$$</div></div>",
    "gap": "Si le prix de marché diffère, arbitrez en négociant le call contre δ actions."
   }
  },
  "dv2-two-period": {
   "zh": {
    "topic": "两期例题",
    "front": "\\(S=50\\)，\\(X=50\\)，\\(r=5\\%\\)，\\(U=1.356\\)，\\(D=0.744\\)，两年。求 \\(\\pi_u\\)、看涨期权和看跌期权。",
    "back": "<div class=\"ans\"><p>\\(\\pi_u=(1.05-0.744)/(1.356-0.744)=0.5\\)。</p><ul><li>到期：\\(C^{++}=41.94\\)，\\(C^{+-}=0.44\\)，\\(P^{--}=22.32\\)</li><li>\\(C^+=20.18\\)，\\(C^-=0.21\\)；\\(C_0=9.71\\)</li><li>\\(P^-=10.63\\)；\\(P_0=5.06\\)（平价验证成立）</li></ul></div>"
   },
   "ja": {
    "topic": "2 期間の計算例",
    "front": "\\(S=50\\)、\\(X=50\\)、\\(r=5\\%\\)、\\(U=1.356\\)、\\(D=0.744\\)、2 年。\\(\\pi_u\\)、コール、プットを求めよ。",
    "back": "<div class=\"ans\"><p>\\(\\pi_u=(1.05-0.744)/(1.356-0.744)=0.5\\)。</p><ul><li>満期：\\(C^{++}=41.94\\)、\\(C^{+-}=0.44\\)、\\(P^{--}=22.32\\)</li><li>\\(C^+=20.18\\)、\\(C^-=0.21\\)、\\(C_0=9.71\\)</li><li>\\(P^-=10.63\\)、\\(P_0=5.06\\)（パリティで確認できる）</li></ul></div>"
   },
   "fr": {
    "topic": "Exemple à deux périodes",
    "front": "\\(S=50\\), \\(X=50\\), \\(r=5\\%\\), \\(U=1.356\\), \\(D=0.744\\), deux ans. Trouvez \\(\\pi_u\\), le call et le put.",
    "back": "<div class=\"ans\"><p>\\(\\pi_u=(1.05-0.744)/(1.356-0.744)=0.5\\).</p><ul><li>À l’échéance : \\(C^{++}=41.94\\), \\(C^{+-}=0.44\\), \\(P^{--}=22.32\\)</li><li>\\(C^+=20.18\\), \\(C^-=0.21\\) ; \\(C_0=9.71\\)</li><li>\\(P^-=10.63\\) ; \\(P_0=5.06\\) (la parité est vérifiée)</li></ul></div>"
   }
  },
  "dv2-american": {
   "zh": {
    "topic": "提前行权",
    "front": "美式期权何时可能提前行权？",
    "back": "<div class=\"ans\"><ul><li>不派息股票的看涨期权：<strong>永不</strong>；持有比行权更值钱，所以美式 = 欧式</li><li>派息股票的看涨期权：在除息日之前</li><li>看跌期权：<strong>深度价内</strong>时</li></ul><p>在树上，在<strong>每个</strong>节点取行权价值和持有价值中较高者。</p></div>"
   },
   "ja": {
    "topic": "早期行使",
    "front": "アメリカン・オプションはいつ早期行使されうるか。",
    "back": "<div class=\"ans\"><ul><li>無配株のコール：<strong>決してない</strong>。行使より保有のほうが価値が高いので、アメリカン = ヨーロピアン</li><li>配当株のコール：権利落ち日の直前</li><li>プット：<strong>ディープ・イン・ザ・マネー</strong>のとき</li></ul><p>ツリーでは<strong>すべての</strong>ノードで行使価値と保有価値の大きいほうをとる。</p></div>"
   },
   "fr": {
    "topic": "Exercice anticipé",
    "front": "Quand les options américaines peuvent-elles être exercées par anticipation ?",
    "back": "<div class=\"ans\"><ul><li>Calls sur actions sans dividende : <strong>jamais</strong> ; ils valent plus vivants que morts, donc américain = européen</li><li>Calls sur actions à dividende : juste avant la date de détachement</li><li>Puts : quand ils sont <strong>très dans la monnaie</strong></li></ul><p>Sur un arbre, retenez à <strong>chaque</strong> nœud le plus élevé entre valeur d’exercice et valeur de détention.</p></div>"
   }
  },
  "dv2-american-put": {
   "zh": {
    "topic": "树上的美式看跌期权",
    "front": "在两期例题中，看跌期权在下降节点（\\(S=37.20\\)）是否值得提前行权？美式看跌期权价值多少？",
    "back": "<div class=\"ans\"><p>行权价值 \\(50-37.20=12.80\\) &gt; 持有价值 10.63：行权。</p><p>今天的价值：\\(0.5\\times12.80/1.05=\\) <strong>6.10</strong>，而欧式为 5.06。</p></div>"
   },
   "ja": {
    "topic": "ツリー上のアメリカン・プット",
    "front": "2 期間の例で、下のノード（\\(S=37.20\\)）でプットを早期行使する価値はあるか。アメリカン・プットの価値は。",
    "back": "<div class=\"ans\"><p>行使価値 \\(50-37.20=12.80\\) &gt; 保有価値 10.63：行使する。</p><p>今日の価値：\\(0.5\\times12.80/1.05=\\) <strong>6.10</strong>。ヨーロピアンは 5.06。</p></div>"
   },
   "fr": {
    "topic": "Put américain sur l’arbre",
    "front": "Dans l’exemple à deux périodes, vaut-il la peine d’exercer le put par anticipation au nœud bas (\\(S=37.20\\)) ? Que vaut le put américain ?",
    "back": "<div class=\"ans\"><p>Valeur d’exercice \\(50-37.20=12.80\\) &gt; valeur de détention 10,63 : exercer.</p><p>Valeur aujourd’hui : \\(0.5\\times12.80/1.05=\\) <strong>6,10</strong>, contre 5,06 pour l’européen.</p></div>"
   }
  },
  "dv2-bsm-assumptions": {
   "zh": {
    "topic": "BSM 假设",
    "front": "列出 Black–Scholes–Merton 模型的假设。",
    "back": "<div class=\"ans\"><ul><li>标的遵循几何布朗运动（对数正态价格，连续）</li><li>无风险利率恒定且已知；可按此利率借贷</li><li>波动率恒定</li><li>无摩擦：无成本或税收，连续交易，允许卖空，无套利</li><li>欧式期权</li></ul></div>",
    "gap": "BSM 是步数趋于无穷时二叉树模型的极限。"
   },
   "ja": {
    "topic": "BSM の前提",
    "front": "ブラック・ショールズ・マートン・モデルの前提を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>原資産は幾何ブラウン運動に従う（対数正規の価格、連続）</li><li>無リスク金利は一定で既知、その金利で貸し借りできる</li><li>ボラティリティは一定</li><li>摩擦なし：コストや税金なし、連続取引、空売り可、裁定なし</li><li>ヨーロピアン・オプション</li></ul></div>",
    "gap": "BSM はステップ数を無限大にした二項モデルの極限。"
   },
   "fr": {
    "topic": "Hypothèses du BSM",
    "front": "Énumérez les hypothèses du modèle de Black–Scholes–Merton.",
    "back": "<div class=\"ans\"><ul><li>Le sous-jacent suit un mouvement brownien géométrique (prix lognormaux, continus)</li><li>Taux sans risque constant et connu ; on peut emprunter et prêter à ce taux</li><li>Volatilité constante</li><li>Sans frictions : ni coûts ni impôts, négociation continue, vente à découvert permise, pas d’arbitrage</li><li>Options européennes</li></ul></div>",
    "gap": "Le BSM est la limite du modèle binomial quand le nombre d’étapes tend vers l’infini."
   }
  },
  "dv2-bsm": {
   "zh": {
    "topic": "BSM 公式",
    "front": "写出 BSM 看涨期权价格以及 \\(d_1\\)、\\(d_2\\)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_0=S_0N(d_1)-Xe^{-r_f^cT}N(d_2)$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln\\frac{S_0}{X}+(r_f^c+\\frac{\\sigma^2}{2})T}{\\sigma\\sqrt T}$$</div><p>\\(d_2=d_1-\\sigma\\sqrt T\\)。看跌：\\(Xe^{-r_f^cT}N(-d_2)-S_0N(-d_1)\\)。</p></div>"
   },
   "ja": {
    "topic": "BSM の式",
    "front": "BSM のコール価格と \\(d_1\\)、\\(d_2\\) を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_0=S_0N(d_1)-Xe^{-r_f^cT}N(d_2)$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln\\frac{S_0}{X}+(r_f^c+\\frac{\\sigma^2}{2})T}{\\sigma\\sqrt T}$$</div><p>\\(d_2=d_1-\\sigma\\sqrt T\\)。プット：\\(Xe^{-r_f^cT}N(-d_2)-S_0N(-d_1)\\)。</p></div>"
   },
   "fr": {
    "topic": "Formule BSM",
    "front": "Écrivez le prix du call BSM et \\(d_1\\), \\(d_2\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$C_0=S_0N(d_1)-Xe^{-r_f^cT}N(d_2)$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln\\frac{S_0}{X}+(r_f^c+\\frac{\\sigma^2}{2})T}{\\sigma\\sqrt T}$$</div><p>\\(d_2=d_1-\\sigma\\sqrt T\\). Put : \\(Xe^{-r_f^cT}N(-d_2)-S_0N(-d_1)\\).</p></div>"
   }
  },
  "dv2-replicate": {
   "zh": {
    "topic": "BSM 复制组合",
    "front": "在 BSM 中，什么组合能复制看涨期权和看跌期权？\\(N(d_1)\\) 和 \\(N(d_2)\\) 是什么？",
    "back": "<div class=\"ans\"><ul><li>看涨：做多 \\(N(d_1)\\) 股，借入 \\(N(d_2)Xe^{-r_f^cT}\\)</li><li>看跌：做多 \\(N(-d_2)\\) 份支付 \\(X\\) 的债券，做空 \\(N(-d_1)\\) 股</li><li>\\(N(d_1)\\)：看涨期权 delta；\\(N(d_2)\\)：看涨期权到期处于价内的风险中性概率</li></ul></div>"
   },
   "ja": {
    "topic": "BSM の複製ポートフォリオ",
    "front": "BSM でコールとプットを複製するポートフォリオは何か。\\(N(d_1)\\) と \\(N(d_2)\\) とは何か。",
    "back": "<div class=\"ans\"><ul><li>コール：株式 \\(N(d_1)\\) 株のロング、\\(N(d_2)Xe^{-r_f^cT}\\) の借入</li><li>プット：\\(X\\) を支払う債券 \\(N(-d_2)\\) 単位のロング、株式 \\(N(-d_1)\\) 株のショート</li><li>\\(N(d_1)\\)：コールのデルタ、\\(N(d_2)\\)：コールがイン・ザ・マネーで終わるリスク中立確率</li></ul></div>"
   },
   "fr": {
    "topic": "Portefeuille de réplication BSM",
    "front": "Quels portefeuilles répliquent un call et un put dans le BSM ? Que sont \\(N(d_1)\\) et \\(N(d_2)\\) ?",
    "back": "<div class=\"ans\"><ul><li>Call : acheter \\(N(d_1)\\) actions, emprunter \\(N(d_2)Xe^{-r_f^cT}\\)</li><li>Put : acheter \\(N(-d_2)\\) obligations payant \\(X\\), vendre \\(N(-d_1)\\) actions</li><li>\\(N(d_1)\\) : delta du call ; \\(N(d_2)\\) : probabilité risque-neutre que le call finisse dans la monnaie</li></ul></div>"
   }
  },
  "dv2-carry": {
   "zh": {
    "topic": "含收益率的 BSM",
    "front": "标的的连续收益率 \\(\\gamma\\) 如何改变 BSM 和期权价值？",
    "back": "<div class=\"ans\"><p>用 \\(S_0e^{-\\gamma T}\\) 代替 \\(S_0\\)，并在 \\(d_1\\) 中用 \\(r_f^c-\\gamma\\) 代替 \\(r_f^c\\)。</p><div class=\"eq-block\">$$\\begin{aligned}C_0={}&S_0e^{-\\gamma T}N(d_1)\\\\&-Xe^{-r_f^cT}N(d_2)\\end{aligned}$$</div><p>收益率越高，看涨期权越低，看跌期权越高。</p></div>"
   },
   "ja": {
    "topic": "利回りのある BSM",
    "front": "原資産の連続利回り \\(\\gamma\\) は BSM とオプション価値をどう変えるか。",
    "back": "<div class=\"ans\"><p>\\(S_0\\) を \\(S_0e^{-\\gamma T}\\) に、\\(d_1\\) の \\(r_f^c\\) を \\(r_f^c-\\gamma\\) に置き換える。</p><div class=\"eq-block\">$$\\begin{aligned}C_0={}&S_0e^{-\\gamma T}N(d_1)\\\\&-Xe^{-r_f^cT}N(d_2)\\end{aligned}$$</div><p>利回りが高いほどコールは下がり、プットは上がる。</p></div>"
   },
   "fr": {
    "topic": "BSM avec rendement",
    "front": "Comment un rendement continu \\(\\gamma\\) du sous-jacent modifie-t-il le BSM et la valeur des options ?",
    "back": "<div class=\"ans\"><p>Remplacez \\(S_0\\) par \\(S_0e^{-\\gamma T}\\), et \\(r_f^c\\) par \\(r_f^c-\\gamma\\) dans \\(d_1\\).</p><div class=\"eq-block\">$$\\begin{aligned}C_0={}&S_0e^{-\\gamma T}N(d_1)\\\\&-Xe^{-r_f^cT}N(d_2)\\end{aligned}$$</div><p>Un rendement plus élevé baisse le call et augmente le put.</p></div>"
   }
  },
  "dv2-futopt": {
   "zh": {
    "topic": "期货期权",
    "front": "行使各期权会得到什么期货头寸？各自何时行权？",
    "back": "<div class=\"ans\"><ul><li>多头看涨 → 按 \\(X\\) 的期货多头；若 \\(F_m&gt;X\\) 则行权</li><li>多头看跌 → 按 \\(X\\) 的期货空头；若 \\(F_m&lt;X\\) 则行权</li></ul><p>头寸立即盯市，所以持有人收到 \\(F_m-X\\)（看涨）或 \\(X-F_m\\)（看跌）。</p></div>"
   },
   "ja": {
    "topic": "先物オプション",
    "front": "各オプションを行使するとどんな先物ポジションになるか。それぞれいつ行使するか。",
    "back": "<div class=\"ans\"><ul><li>コールのロング → \\(X\\) での先物ロング。\\(F_m&gt;X\\) なら行使</li><li>プットのロング → \\(X\\) での先物ショート。\\(F_m&lt;X\\) なら行使</li></ul><p>ポジションはすぐに値洗いされるので、保有者は \\(F_m-X\\)（コール）または \\(X-F_m\\)（プット）を受け取る。</p></div>"
   },
   "fr": {
    "topic": "Options sur futures",
    "front": "Quelle position sur future donne l’exercice de chaque option ? Quand chacune est-elle exercée ?",
    "back": "<div class=\"ans\"><ul><li>Call acheté → future acheté à \\(X\\) ; exercé si \\(F_m&gt;X\\)</li><li>Put acheté → future vendu à \\(X\\) ; exercé si \\(F_m&lt;X\\)</li></ul><p>La position est immédiatement réévaluée au marché : le détenteur reçoit \\(F_m-X\\) (call) ou \\(X-F_m\\) (put).</p></div>"
   }
  },
  "dv2-black": {
   "zh": {
    "topic": "Black 模型",
    "front": "写出期货看涨期权的 Black 模型。为什么两项都要折现？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&e^{-r_f^cT}\\\\&\\times[F_0N(d_1)-XN(d_2)]\\end{aligned}$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln(F_0/X)+\\sigma^2T/2}{\\sigma\\sqrt T}$$</div><p>持有期货头寸不花钱，所以其“收益率”等于 \\(r_f\\)：\\(S_0e^{-\\gamma T}\\) 变成 \\(F_0e^{-r_f^cT}\\)。</p></div>"
   },
   "ja": {
    "topic": "ブラック・モデル",
    "front": "先物コールのブラック・モデルを示せ。なぜ両方の項を割り引くのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&e^{-r_f^cT}\\\\&\\times[F_0N(d_1)-XN(d_2)]\\end{aligned}$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln(F_0/X)+\\sigma^2T/2}{\\sigma\\sqrt T}$$</div><p>先物ポジションの保有にはコストがかからないので、その「利回り」は \\(r_f\\) に等しい：\\(S_0e^{-\\gamma T}\\) が \\(F_0e^{-r_f^cT}\\) になる。</p></div>"
   },
   "fr": {
    "topic": "Modèle de Black",
    "front": "Écrivez le modèle de Black pour un call sur future. Pourquoi les deux termes sont-ils actualisés ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&e^{-r_f^cT}\\\\&\\times[F_0N(d_1)-XN(d_2)]\\end{aligned}$$</div><div class=\"eq-block\">$$d_1=\\frac{\\ln(F_0/X)+\\sigma^2T/2}{\\sigma\\sqrt T}$$</div><p>Détenir un future ne coûte rien : son « rendement » égale \\(r_f\\), et \\(S_0e^{-\\gamma T}\\) devient \\(F_0e^{-r_f^cT}\\).</p></div>"
   }
  },
  "dv2-ir-option": {
   "zh": {
    "topic": "利率期权",
    "front": "如何用 Black 模型为利率看涨期权估值？什么是利率上限和下限？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\times\\tfrac{(n-m)30}{360}\\\\&\\times e^{-r n\\frac{30}{360}}\\\\&\\times[FR\\,N(d_1)\\\\&\\quad-X\\,N(d_2)]\\end{aligned}$$</div><p>在 \\(n\\)（支付）上折现；在 \\(n-m\\) 上计息。<strong>利率上限</strong>是一系列看涨期权（caplet），<strong>利率下限</strong>是一系列看跌期权。</p></div>",
    "gap": "相同利率的上限多头 + 下限空头 = 支付固定的互换。"
   },
   "ja": {
    "topic": "金利オプション",
    "front": "金利コールはブラック・モデルでどう評価するか。キャップとフロアとは何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\times\\tfrac{(n-m)30}{360}\\\\&\\times e^{-r n\\frac{30}{360}}\\\\&\\times[FR\\,N(d_1)\\\\&\\quad-X\\,N(d_2)]\\end{aligned}$$</div><p>\\(n\\)（支払）まで割り引き、\\(n-m\\) の期間で利息を計算する。<strong>キャップ</strong>は一連のコール（キャップレット）、<strong>フロア</strong>は一連のプット。</p></div>",
    "gap": "同じレートでキャップのロング + フロアのショート = 固定払いスワップ。"
   },
   "fr": {
    "topic": "Options de taux",
    "front": "Comment évalue-t-on un call de taux avec le modèle de Black ? Que sont les caps et les floors ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\times\\tfrac{(n-m)30}{360}\\\\&\\times e^{-r n\\frac{30}{360}}\\\\&\\times[FR\\,N(d_1)\\\\&\\quad-X\\,N(d_2)]\\end{aligned}$$</div><p>Actualiser sur \\(n\\) (paiement) ; courir les intérêts sur \\(n-m\\). Un <strong>cap</strong> est une série de calls (caplets), un <strong>floor</strong> une série de puts.</p></div>",
    "gap": "Cap acheté + floor vendu au même taux = swap payeur de fixe."
   }
  },
  "dv2-swaption": {
   "zh": {
    "topic": "互换期权",
    "front": "定义支付方和收取方互换期权，并写出支付方互换期权的价值。",
    "back": "<div class=\"ans\"><ul><li><strong>支付方</strong>：支付固定的权利；互换利率的看涨期权</li><li><strong>收取方</strong>：收取固定的权利；看跌期权</li></ul><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\cdot AP\\cdot PVA\\\\&\\times[R_{fix}N(d_1)\\\\&\\quad-R_XN(d_2)]\\end{aligned}$$</div></div>",
    "gap": "PVA：互换各支付日折现因子之和。支付方 − 收取方 = 远期支付固定互换。"
   },
   "ja": {
    "topic": "スワップション",
    "front": "ペイヤーとレシーバーのスワップションを定義し、ペイヤーの価値を示せ。",
    "back": "<div class=\"ans\"><ul><li><strong>ペイヤー</strong>：固定を払う権利。スワップ・レートのコール</li><li><strong>レシーバー</strong>：固定を受け取る権利。プット</li></ul><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\cdot AP\\cdot PVA\\\\&\\times[R_{fix}N(d_1)\\\\&\\quad-R_XN(d_2)]\\end{aligned}$$</div></div>",
    "gap": "PVA：スワップの支払日の割引係数の合計。ペイヤー − レシーバー = フォワードの固定払いスワップ。"
   },
   "fr": {
    "topic": "Swaptions",
    "front": "Définissez les swaptions payeuse et receveuse, et écrivez la valeur de la payeuse.",
    "back": "<div class=\"ans\"><ul><li><strong>Payeuse</strong> : droit de payer le fixe ; un call sur le taux de swap</li><li><strong>Receveuse</strong> : droit de recevoir le fixe ; un put</li></ul><div class=\"eq-block\">$$\\begin{aligned}C_0={}&NP\\cdot AP\\cdot PVA\\\\&\\times[R_{fix}N(d_1)\\\\&\\quad-R_XN(d_2)]\\end{aligned}$$</div></div>",
    "gap": "PVA : somme des facteurs d’actualisation aux dates de paiement du swap. Payeuse − receveuse = swap payeur de fixe à terme."
   }
  },
  "dv2-greeks-def": {
   "zh": {
    "topic": "希腊字母 · 定义",
    "front": "定义 delta、gamma、theta、vega 和 rho。",
    "back": "<div class=\"ans\"><ul><li>\\(\\delta=\\partial C/\\partial S\\)</li><li>\\(\\gamma=\\partial^2C/\\partial S^2\\)</li><li>\\(\\theta=\\partial C/\\partial t\\)（时间流逝）</li><li>\\(\\upsilon=\\partial C/\\partial\\sigma\\)</li><li>\\(\\rho=\\partial C/\\partial r\\)</li></ul></div>"
   },
   "ja": {
    "topic": "グリークス · 定義",
    "front": "デルタ、ガンマ、セータ、ベガ、ローを定義せよ。",
    "back": "<div class=\"ans\"><ul><li>\\(\\delta=\\partial C/\\partial S\\)</li><li>\\(\\gamma=\\partial^2C/\\partial S^2\\)</li><li>\\(\\theta=\\partial C/\\partial t\\)（時間の経過）</li><li>\\(\\upsilon=\\partial C/\\partial\\sigma\\)</li><li>\\(\\rho=\\partial C/\\partial r\\)</li></ul></div>"
   },
   "fr": {
    "topic": "Grecques · définitions",
    "front": "Définissez le delta, le gamma, le thêta, le véga et le rhô.",
    "back": "<div class=\"ans\"><ul><li>\\(\\delta=\\partial C/\\partial S\\)</li><li>\\(\\gamma=\\partial^2C/\\partial S^2\\)</li><li>\\(\\theta=\\partial C/\\partial t\\) (passage du temps)</li><li>\\(\\upsilon=\\partial C/\\partial\\sigma\\)</li><li>\\(\\rho=\\partial C/\\partial r\\)</li></ul></div>"
   }
  },
  "dv2-greeks-signs": {
   "zh": {
    "topic": "希腊字母 · 符号",
    "front": "给出多头看涨和多头看跌期权各希腊字母的符号。",
    "back": "<div class=\"ans\"><ul><li>Delta：看涨 0 到 1；看跌 −1 到 0</li><li>Gamma、vega：两者都为正，平价时最高</li><li>Theta：两者通常为负</li><li>Rho：看涨为正，看跌为负</li></ul></div>"
   },
   "ja": {
    "topic": "グリークス · 符号",
    "front": "コールのロングとプットのロングについて、各グリークの符号を示せ。",
    "back": "<div class=\"ans\"><ul><li>デルタ：コール 0〜1、プット −1〜0</li><li>ガンマ、ベガ：どちらもプラスで、アット・ザ・マネーで最大</li><li>セータ：どちらも通常マイナス</li><li>ロー：コールはプラス、プットはマイナス</li></ul></div>"
   },
   "fr": {
    "topic": "Grecques · signes",
    "front": "Donnez le signe de chaque grecque pour un call acheté et un put acheté.",
    "back": "<div class=\"ans\"><ul><li>Delta : call de 0 à 1 ; put de −1 à 0</li><li>Gamma, véga : positifs pour les deux, maximaux à la monnaie</li><li>Thêta : généralement négatif pour les deux</li><li>Rhô : call positif, put négatif</li></ul></div>"
   }
  },
  "dv2-delta": {
   "zh": {
    "topic": "Delta",
    "front": "写出有无股息率时的看涨和看跌期权 delta。它们之间是什么关系？",
    "back": "<div class=\"ans\"><p>无股息：\\(\\delta_c=N(d_1)\\)，\\(\\delta_p=N(d_1)-1\\)，所以 \\(\\delta_c=\\delta_p+1\\)。</p><div class=\"eq-block\">$$\\Delta_c=e^{-\\delta T}N(d_1)$$</div><div class=\"eq-block\">$$\\Delta_p=-e^{-\\delta T}N(-d_1)$$</div></div>",
    "gap": "Delta 在平价附近变化最剧烈，临近到期时更是如此。"
   },
   "ja": {
    "topic": "デルタ",
    "front": "配当利回りがある場合とない場合のコールとプットのデルタを示せ。両者はどう関係するか。",
    "back": "<div class=\"ans\"><p>配当なし：\\(\\delta_c=N(d_1)\\)、\\(\\delta_p=N(d_1)-1\\) なので \\(\\delta_c=\\delta_p+1\\)。</p><div class=\"eq-block\">$$\\Delta_c=e^{-\\delta T}N(d_1)$$</div><div class=\"eq-block\">$$\\Delta_p=-e^{-\\delta T}N(-d_1)$$</div></div>",
    "gap": "デルタはアット・ザ・マネー付近で最も急に変わり、満期が近いほどその傾向が強い。"
   },
   "fr": {
    "topic": "Delta",
    "front": "Écrivez le delta du call et du put, avec et sans rendement de dividende. Quel est leur lien ?",
    "back": "<div class=\"ans\"><p>Sans dividende : \\(\\delta_c=N(d_1)\\), \\(\\delta_p=N(d_1)-1\\), donc \\(\\delta_c=\\delta_p+1\\).</p><div class=\"eq-block\">$$\\Delta_c=e^{-\\delta T}N(d_1)$$</div><div class=\"eq-block\">$$\\Delta_p=-e^{-\\delta T}N(-d_1)$$</div></div>",
    "gap": "Le delta varie le plus fortement près de la monnaie, et davantage près de l’échéance."
   }
  },
  "dv2-delta-gamma": {
   "zh": {
    "topic": "Delta–gamma 近似",
    "front": "近似计算股价变动时期权价值的变化。如何使组合 delta 中性和 gamma 中性？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta C\\approx\\delta\\,\\Delta S+\\tfrac12\\gamma(\\Delta S)^2$$</div><p>Gamma 中性：组合期权（股票没有 gamma）。然后 delta 中性：加入股票，如每份期权多头做空 \\(\\delta\\) 股。</p></div>",
    "gap": "Delta 和 gamma 相当于期权的久期和凸性。"
   },
   "ja": {
    "topic": "デルタ・ガンマ近似",
    "front": "株価の変動に対するオプション価値の変化を近似せよ。ポートフォリオをデルタ・ニュートラル、ガンマ・ニュートラルにするにはどうするか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta C\\approx\\delta\\,\\Delta S+\\tfrac12\\gamma(\\Delta S)^2$$</div><p>ガンマ・ニュートラル：オプションを組み合わせる（株式にはガンマがない）。次にデルタ・ニュートラル：株式を加える。例：オプションのロング 1 つにつき \\(\\delta\\) 株をショート。</p></div>",
    "gap": "デルタとガンマはオプションのデュレーションとコンベクシティにあたる。"
   },
   "fr": {
    "topic": "Approximation delta–gamma",
    "front": "Approchez la variation de valeur d’une option pour un mouvement de l’action. Comment rendre un portefeuille delta neutre et gamma neutre ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta C\\approx\\delta\\,\\Delta S+\\tfrac12\\gamma(\\Delta S)^2$$</div><p>Gamma neutre : combiner des options (l’action n’a pas de gamma). Puis delta neutre : ajouter des actions, p. ex. vendre \\(\\delta\\) actions par option achetée.</p></div>",
    "gap": "Delta et gamma sont la duration et la convexité des options."
   }
  },
  "dv2-gamma": {
   "zh": {
    "topic": "Gamma 与时间",
    "front": "临近到期时 gamma 如何变化？",
    "back": "<div class=\"ans\"><ul><li><strong>平价</strong>：gamma 上升，临近到期时急升</li><li><strong>深度价内或价外</strong>：gamma 降向 0</li></ul></div>"
   },
   "ja": {
    "topic": "ガンマと時間",
    "front": "満期が近づくとガンマはどう変化するか。",
    "back": "<div class=\"ans\"><ul><li><strong>アット・ザ・マネー</strong>：ガンマは上昇し、満期近くで急騰する</li><li><strong>ディープ・イン／アウト・オブ・ザ・マネー</strong>：ガンマは 0 に近づく</li></ul></div>"
   },
   "fr": {
    "topic": "Gamma et temps",
    "front": "Comment le gamma évolue-t-il à l’approche de l’échéance ?",
    "back": "<div class=\"ans\"><ul><li><strong>À la monnaie</strong> : le gamma augmente et s’envole près de l’échéance</li><li><strong>Très dans ou hors de la monnaie</strong> : le gamma tend vers 0</li></ul></div>"
   }
  },
  "dv2-theta": {
   "zh": {
    "topic": "Theta",
    "front": "为什么 theta 通常为负？例外是什么？",
    "back": "<div class=\"ans\"><p>期权随着到期临近而失去时间价值（时间衰减）。</p><p>例外：<strong>深度价内的欧式看跌期权</strong>可能随着即将收到的行权价越来越近而升值。</p></div>"
   },
   "ja": {
    "topic": "セータ",
    "front": "セータが通常マイナスなのはなぜか。例外は何か。",
    "back": "<div class=\"ans\"><p>オプションは満期が近づくにつれて時間価値を失う（タイム・ディケイ）。</p><p>例外：<strong>ディープ・イン・ザ・マネーのヨーロピアン・プット</strong>は、受け取る行使価格が近づくにつれ価値が上がることがある。</p></div>"
   },
   "fr": {
    "topic": "Thêta",
    "front": "Pourquoi le thêta est-il généralement négatif, et quelle est l’exception ?",
    "back": "<div class=\"ans\"><p>Les options perdent leur valeur temps à l’approche de l’échéance (érosion du temps).</p><p>Exception : les <strong>puts européens très dans la monnaie</strong> peuvent prendre de la valeur à mesure que le prix d’exercice qu’ils recevront se rapproche.</p></div>"
   }
  },
  "dv2-vega-rho": {
   "zh": {
    "topic": "Vega 与 rho",
    "front": "为什么看涨和看跌期权的 vega 都为正？为什么 rho 的符号不同？",
    "back": "<div class=\"ans\"><ul><li><strong>Vega</strong> &gt; 0：波动率越高，出现大额收益的可能性越大，而损失以权利金为限</li><li><strong>Rho</strong>：利率越高，\\(X\\) 的现值越低，看涨持有人支付 \\(X\\)（看涨 ↑），看跌持有人收到 \\(X\\)（看跌 ↓）</li></ul></div>"
   },
   "ja": {
    "topic": "ベガとロー",
    "front": "なぜベガはコールでもプットでもプラスなのか。なぜローの符号は異なるのか。",
    "back": "<div class=\"ans\"><ul><li><strong>ベガ</strong> &gt; 0：ボラティリティが高いほど大きなペイオフの可能性が増え、損失はプレミアムに限られる</li><li><strong>ロー</strong>：金利が上がると \\(X\\) の現在価値が下がる。コールの保有者は \\(X\\) を払い（コール ↑）、プットの保有者は \\(X\\) を受け取る（プット ↓）</li></ul></div>"
   },
   "fr": {
    "topic": "Véga et rhô",
    "front": "Pourquoi le véga est-il positif pour les calls et les puts ? Pourquoi le rhô change-t-il de signe ?",
    "back": "<div class=\"ans\"><ul><li><strong>Véga</strong> &gt; 0 : une volatilité plus forte augmente la probabilité de gros gains, alors que les pertes sont limitées à la prime</li><li><strong>Rhô</strong> : des taux plus élevés réduisent la VA de \\(X\\), que paie le détenteur du call (call ↑) et que reçoit le détenteur du put (put ↓)</li></ul></div>"
   }
  }
 }
});
