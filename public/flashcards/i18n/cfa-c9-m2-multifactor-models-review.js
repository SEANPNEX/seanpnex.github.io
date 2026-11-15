deckI18n({
 "source": {
  "zh": "CFA 二级 投资组合管理 · M2 多因子模型 · 单元复习",
  "ja": "CFA レベル II ポートフォリオ運用 · M2 マルチファクター・モデル · 単元の復習",
  "fr": "CFA niveau II Gestion de portefeuille · M2 Modèles multifactoriels · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "pm2-beta": {
   "zh": {
    "topic": "CAPM · 贝塔",
    "front": "写出 CAPM 和计算贝塔的两种方法。市场和组合的贝塔分别是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_i)=R_f+\\beta_i[E(R_M)-R_f]$$</div><div class=\"eq-block\">$$\\beta_i=\\frac{\\text{Cov}(R_i,R_M)}{\\sigma_M^2}=\\rho_{i,M}\\frac{\\sigma_i}{\\sigma_M}$$</div><p>或回归 \\(R_i=\\alpha_i+\\beta_iR_M+\\varepsilon_i\\) 的斜率。\\(\\beta_M=1\\)；\\(\\beta_p=\\sum w_i\\beta_i\\)。</p></div>"
   },
   "ja": {
    "topic": "CAPM · ベータ",
    "front": "CAPM と、ベータを計算する 2 つの方法を示せ。市場とポートフォリオのベータはいくらか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_i)=R_f+\\beta_i[E(R_M)-R_f]$$</div><div class=\"eq-block\">$$\\beta_i=\\frac{\\text{Cov}(R_i,R_M)}{\\sigma_M^2}=\\rho_{i,M}\\frac{\\sigma_i}{\\sigma_M}$$</div><p>または回帰 \\(R_i=\\alpha_i+\\beta_iR_M+\\varepsilon_i\\) の傾き。\\(\\beta_M=1\\)、\\(\\beta_p=\\sum w_i\\beta_i\\)。</p></div>"
   },
   "fr": {
    "topic": "CAPM · bêta",
    "front": "Écrivez le CAPM et deux façons de calculer le bêta. Quel est le bêta du marché et celui d’un portefeuille ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_i)=R_f+\\beta_i[E(R_M)-R_f]$$</div><div class=\"eq-block\">$$\\beta_i=\\frac{\\text{Cov}(R_i,R_M)}{\\sigma_M^2}=\\rho_{i,M}\\frac{\\sigma_i}{\\sigma_M}$$</div><p>Ou la pente de la régression \\(R_i=\\alpha_i+\\beta_iR_M+\\varepsilon_i\\). \\(\\beta_M=1\\) ; \\(\\beta_p=\\sum w_i\\beta_i\\).</p></div>"
   }
  },
  "pm2-risk": {
   "zh": {
    "topic": "系统性与非系统性风险",
    "front": "拆分资产的总风险。哪部分获得回报？为什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_i^2=\\beta_i^2\\sigma_M^2+\\sigma_\\varepsilon^2$$</div><p>非系统性（资产特有）风险可以<strong>被分散掉</strong>，所以没有回报。只有<strong>系统性</strong>风险被定价。</p></div>"
   },
   "ja": {
    "topic": "システマティック・リスクとアンシステマティック・リスク",
    "front": "資産の総リスクを分解せよ。報われるのはどの部分で、なぜか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_i^2=\\beta_i^2\\sigma_M^2+\\sigma_\\varepsilon^2$$</div><p>アンシステマティック（資産固有）リスクは<strong>分散で消せる</strong>ので報われない。価格に織り込まれるのは<strong>システマティック</strong>・リスクだけ。</p></div>"
   },
   "fr": {
    "topic": "Risque systématique et spécifique",
    "front": "Décomposez le risque total d’un actif. Quelle partie est rémunérée, et pourquoi ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_i^2=\\beta_i^2\\sigma_M^2+\\sigma_\\varepsilon^2$$</div><p>Le risque spécifique peut être <strong>éliminé par la diversification</strong> : il n’est pas rémunéré. Seul le risque <strong>systématique</strong> a un prix.</p></div>"
   }
  },
  "pm2-capm-assumptions": {
   "zh": {
    "topic": "CAPM 假设",
    "front": "列出 CAPM 的主要假设。",
    "back": "<div class=\"ans\"><ul><li>风险厌恶、均值–方差投资者；单期</li><li>同质预期</li><li>可按 \\(R_f\\) 无限借贷</li><li>无税收或交易成本；资产无限可分</li><li>所有资产可交易；完全竞争市场（价格接受者）</li></ul></div>",
    "gap": "这些假设在实践中大多不成立；APT 需要的假设少得多。"
   },
   "ja": {
    "topic": "CAPM の前提",
    "front": "CAPM の主な前提を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>リスク回避的で平均・分散に基づく投資家、単一期間</li><li>同質的な期待</li><li>\\(R_f\\) で無制限に貸し借りできる</li><li>税金や取引コストがない。資産は無限に分割可能</li><li>すべての資産が市場性をもつ。完全競争市場（プライス・テイカー）</li></ul></div>",
    "gap": "実際にはほとんど成り立たない。APT が必要とする前提ははるかに少ない。"
   },
   "fr": {
    "topic": "Hypothèses du CAPM",
    "front": "Énumérez les principales hypothèses du CAPM.",
    "back": "<div class=\"ans\"><ul><li>Investisseurs averses au risque, raisonnant en moyenne–variance ; une seule période</li><li>Anticipations homogènes</li><li>Emprunt et prêt illimités à \\(R_f\\)</li><li>Ni impôts ni coûts de transaction ; actifs infiniment divisibles</li><li>Tous les actifs sont négociables ; marchés parfaitement concurrentiels (preneurs de prix)</li></ul></div>",
    "gap": "Elles sont largement violées en pratique ; l’APT en exige beaucoup moins."
   }
  },
  "pm2-sml": {
   "zh": {
    "topic": "SML 与詹森 alpha",
    "front": "\\(R_f=3\\%\\)，\\(E(R_M)=8\\%\\)。股票 A 的 \\(\\beta=1.2\\)，预测回报 10%。求其 alpha。它被低估还是高估？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\alpha=R_i-[R_f+\\beta(R_M-R_f)]$$</div><p>要求回报 \\(=3\\%+1.2\\times5\\%=9\\%\\)，所以 \\(\\alpha=+1\\%\\)：位于 SML 上方，<strong>被低估</strong>：买入。</p></div>",
    "gap": "在 SML 上方 = 正 alpha = 定价过低；在下方 = 定价过高。"
   },
   "ja": {
    "topic": "SML とジェンセンのアルファ",
    "front": "\\(R_f=3\\%\\)、\\(E(R_M)=8\\%\\)。株式 A は \\(\\beta=1.2\\)、予想リターン 10%。アルファを求めよ。割安か割高か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\alpha=R_i-[R_f+\\beta(R_M-R_f)]$$</div><p>要求収益率 \\(=3\\%+1.2\\times5\\%=9\\%\\) なので \\(\\alpha=+1\\%\\)：SML より上で<strong>割安</strong>：買い。</p></div>",
    "gap": "SML より上 = プラスのアルファ = 割安、下 = 割高。"
   },
   "fr": {
    "topic": "SML et alpha de Jensen",
    "front": "\\(R_f=3\\%\\), \\(E(R_M)=8\\%\\). L’action A a \\(\\beta=1.2\\) et un rendement prévu de 10 %. Trouvez son alpha. Est-elle sous- ou surévaluée ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\alpha=R_i-[R_f+\\beta(R_M-R_f)]$$</div><p>Rendement exigé \\(=3\\%+1.2\\times5\\%=9\\%\\), donc \\(\\alpha=+1\\%\\) : au-dessus de la SML, <strong>sous-évaluée</strong> : acheter.</p></div>",
    "gap": "Au-dessus de la SML = alpha positif = sous-évalué ; en dessous = surévalué."
   }
  },
  "pm2-apt-assumptions": {
   "zh": {
    "topic": "APT · 假设",
    "front": "说出 APT 的三个假设。",
    "back": "<div class=\"ans\"><ul><li>资产回报由<strong>因子模型</strong>描述</li><li>有足够多的资产，可构建消除资产特有风险的<strong>充分分散</strong>组合</li><li>充分分散的组合之间<strong>没有套利</strong></li></ul></div>"
   },
   "ja": {
    "topic": "APT · 前提",
    "front": "APT の 3 つの前提を述べよ。",
    "back": "<div class=\"ans\"><ul><li><strong>ファクター・モデル</strong>が資産のリターンを表す</li><li>資産固有のリスクを除く<strong>十分に分散された</strong>ポートフォリオをつくれるだけの資産がある</li><li>十分に分散されたポートフォリオの間に<strong>裁定機会がない</strong></li></ul></div>"
   },
   "fr": {
    "topic": "APT · hypothèses",
    "front": "Énoncez les trois hypothèses de l’APT.",
    "back": "<div class=\"ans\"><ul><li>Un <strong>modèle factoriel</strong> décrit les rendements des actifs</li><li>Assez d’actifs pour former des portefeuilles <strong>bien diversifiés</strong> qui éliminent le risque spécifique</li><li><strong>Pas d’arbitrage</strong> entre portefeuilles bien diversifiés</li></ul></div>"
   }
  },
  "pm2-apt-formula": {
   "zh": {
    "topic": "APT · 公式",
    "front": "写出 APT 方程并定义 \\(\\lambda_j\\)。它与 CAPM 有何关系？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_p)=R_F+\\textstyle\\sum_j\\lambda_j\\beta_{p,j}$$</div><p>\\(\\lambda_j\\)：因子 \\(j\\) 的预期<strong>风险溢价</strong>：对因子 \\(j\\) 敏感度为 1、对其他因子为 0 的组合的超额回报。</p><p>CAPM 是单因子情形：因子 = 市场，\\(\\lambda=E(R_M)-R_F\\)。</p></div>",
    "gap": "APT 没有指定因子：由分析师选择。"
   },
   "ja": {
    "topic": "APT · 式",
    "front": "APT の式を示し、\\(\\lambda_j\\) を定義せよ。CAPM とどう関係するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_p)=R_F+\\textstyle\\sum_j\\lambda_j\\beta_{p,j}$$</div><p>\\(\\lambda_j\\)：ファクター \\(j\\) の期待<strong>リスク・プレミアム</strong>。ファクター \\(j\\) への感応度が 1、他が 0 のポートフォリオの超過リターン。</p><p>CAPM は 1 ファクターの場合：ファクター = 市場、\\(\\lambda=E(R_M)-R_F\\)。</p></div>",
    "gap": "APT はファクターを特定しない：アナリストが選ぶ。"
   },
   "fr": {
    "topic": "APT · formule",
    "front": "Écrivez l’équation de l’APT et définissez \\(\\lambda_j\\). Quel est le lien avec le CAPM ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$E(R_p)=R_F+\\textstyle\\sum_j\\lambda_j\\beta_{p,j}$$</div><p>\\(\\lambda_j\\) : la <strong>prime de risque</strong> attendue du facteur \\(j\\) : le rendement excédentaire d’un portefeuille de sensibilité 1 au facteur \\(j\\) et 0 aux autres.</p><p>Le CAPM est le cas à un facteur : facteur = marché, \\(\\lambda=E(R_M)-R_F\\).</p></div>",
    "gap": "L’APT ne nomme pas les facteurs : c’est l’analyste qui les choisit."
   }
  },
  "pm2-lambda": {
   "zh": {
    "topic": "求解 λ",
    "front": "单因子 APT：组合 A 的 \\(E(R)=11\\%\\)，\\(\\beta=1.5\\)；B 为 8%，\\(\\beta=0.75\\)。求 \\(R_F\\) 和 \\(\\lambda\\)。",
    "back": "<div class=\"ans\"><p>\\(11\\%=R_F+1.5\\lambda\\)，\\(8\\%=R_F+0.75\\lambda\\)。</p><p>相减：\\(3\\%=0.75\\lambda\\)，所以 \\(\\lambda=4\\%\\)，\\(R_F=5\\%\\)。</p></div>"
   },
   "ja": {
    "topic": "λ を解く",
    "front": "1 ファクター APT：ポートフォリオ A は \\(E(R)=11\\%\\)、\\(\\beta=1.5\\)、B は 8%、\\(\\beta=0.75\\)。\\(R_F\\) と \\(\\lambda\\) を求めよ。",
    "back": "<div class=\"ans\"><p>\\(11\\%=R_F+1.5\\lambda\\) と \\(8\\%=R_F+0.75\\lambda\\)。</p><p>差をとると \\(3\\%=0.75\\lambda\\)、よって \\(\\lambda=4\\%\\)、\\(R_F=5\\%\\)。</p></div>"
   },
   "fr": {
    "topic": "Trouver λ",
    "front": "APT à un facteur : le portefeuille A a \\(E(R)=11\\%\\), \\(\\beta=1.5\\) ; B a 8 %, \\(\\beta=0.75\\). Trouvez \\(R_F\\) et \\(\\lambda\\).",
    "back": "<div class=\"ans\"><p>\\(11\\%=R_F+1.5\\lambda\\) et \\(8\\%=R_F+0.75\\lambda\\).</p><p>Par différence : \\(3\\%=0.75\\lambda\\), donc \\(\\lambda=4\\%\\) et \\(R_F=5\\%\\).</p></div>"
   }
  },
  "pm2-pure": {
   "zh": {
    "topic": "纯因子组合",
    "front": "什么是纯因子组合？双因子敏感度：A \\((1.0, 0.5)\\)，B \\((0.5, 1.0)\\)。构建因子 1 的纯因子组合。",
    "back": "<div class=\"ans\"><p>对一个因子敏感度为 1、对其他所有因子为 0；其回报为 \\(R_F+\\lambda_j\\)。</p><p>\\(w_A+0.5w_B=1\\)，\\(0.5w_A+w_B=0\\)：\\(w_A=4/3\\)，\\(w_B=-2/3\\)，无风险资产 \\(1/3\\)。</p></div>"
   },
   "ja": {
    "topic": "純粋ファクター・ポートフォリオ",
    "front": "純粋ファクター・ポートフォリオとは何か。2 ファクターの感応度：A \\((1.0, 0.5)\\)、B \\((0.5, 1.0)\\)。ファクター 1 の純粋ファクター・ポートフォリオをつくれ。",
    "back": "<div class=\"ans\"><p>1 つのファクターへの感応度が 1、他のすべてが 0。リターンは \\(R_F+\\lambda_j\\)。</p><p>\\(w_A+0.5w_B=1\\)、\\(0.5w_A+w_B=0\\)：\\(w_A=4/3\\)、\\(w_B=-2/3\\)、無リスク資産 \\(1/3\\)。</p></div>"
   },
   "fr": {
    "topic": "Portefeuille factoriel pur",
    "front": "Qu’est-ce qu’un portefeuille factoriel pur ? Sensibilités à deux facteurs : A \\((1.0, 0.5)\\), B \\((0.5, 1.0)\\). Construisez un portefeuille pur sur le facteur 1.",
    "back": "<div class=\"ans\"><p>Sensibilité 1 à un facteur et 0 à tous les autres ; il rapporte \\(R_F+\\lambda_j\\).</p><p>\\(w_A+0.5w_B=1\\) et \\(0.5w_A+w_B=0\\) : \\(w_A=4/3\\), \\(w_B=-2/3\\), sans risque \\(1/3\\).</p></div>"
   }
  },
  "pm2-arbitrage": {
   "zh": {
    "topic": "APT 套利",
    "front": "\\(R_F=4\\%\\)。A：\\(\\beta=1.0\\)，9%。B：\\(\\beta=2.0\\)，14%。C：\\(\\beta=1.5\\)，12.5%。用 100 万找出并利用套利。",
    "back": "<div class=\"ans\"><p>50% A + 50% B 的 \\(\\beta=1.5\\)，\\(E(R)=11.5\\%\\)。C 在相同风险下多赚 1%。</p><p>买入 100 万 C；做空 50 万 A 和 50 万 B。零投资、零贝塔，利润 <strong>10,000</strong>。</p></div>",
    "gap": "被错误定价组合的“孪生”组合，常常是两个给定组合的组合。"
   },
   "ja": {
    "topic": "APT の裁定",
    "front": "\\(R_F=4\\%\\)。A：\\(\\beta=1.0\\)、9%。B：\\(\\beta=2.0\\)、14%。C：\\(\\beta=1.5\\)、12.5%。100 万で裁定を見つけて利用せよ。",
    "back": "<div class=\"ans\"><p>A 50% + B 50% は \\(\\beta=1.5\\)、\\(E(R)=11.5\\%\\)。C は同じリスクで 1% 多く稼ぐ。</p><p>C を 100 万買い、A と B を 50 万ずつショート。投資ゼロ、ベータ・ゼロで利益 <strong>10,000</strong>。</p></div>",
    "gap": "ミスプライスされたポートフォリオの「双子」は、与えられた 2 つのポートフォリオの組み合わせであることが多い。"
   },
   "fr": {
    "topic": "Arbitrage APT",
    "front": "\\(R_F=4\\%\\). A : \\(\\beta=1.0\\), 9 %. B : \\(\\beta=2.0\\), 14 %. C : \\(\\beta=1.5\\), 12,5 %. Trouvez et exploitez l’arbitrage avec 1 million.",
    "back": "<div class=\"ans\"><p>50 % A + 50 % B a \\(\\beta=1.5\\) et \\(E(R)=11.5\\%\\). C rapporte 1 % de plus pour le même risque.</p><p>Acheter 1m de C ; vendre 0,5m de A et 0,5m de B. Investissement nul, bêta nul, profit <strong>10 000</strong>.</p></div>",
    "gap": "Le jumeau du portefeuille mal évalué est souvent une combinaison de deux portefeuilles donnés."
   }
  },
  "pm2-types": {
   "zh": {
    "topic": "多因子模型的类型",
    "front": "说出四种多因子模型及其因子。",
    "back": "<div class=\"ans\"><ul><li><strong>宏观经济</strong>：宏观变量的意外</li><li><strong>基本面</strong>：公司属性（P/E、规模）的回报</li><li><strong>统计</strong>：从回报中提取的因子（因子分析、主成分）</li><li><strong>混合</strong>：以上的组合</li></ul></div>"
   },
   "ja": {
    "topic": "マルチファクター・モデルの種類",
    "front": "4 種類のマルチファクター・モデルとそのファクターを挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>マクロ経済</strong>：マクロ変数のサプライズ</li><li><strong>ファンダメンタル</strong>：企業属性（P/E、規模）へのリターン</li><li><strong>統計的</strong>：リターンから抽出したファクター（因子分析、主成分）</li><li><strong>混合</strong>：これらの組み合わせ</li></ul></div>"
   },
   "fr": {
    "topic": "Types de modèles multifactoriels",
    "front": "Citez les quatre types de modèles multifactoriels et leurs facteurs.",
    "back": "<div class=\"ans\"><ul><li><strong>Macroéconomiques</strong> : surprises sur des variables macro</li><li><strong>Fondamentaux</strong> : rendements associés à des caractéristiques des sociétés (P/E, taille)</li><li><strong>Statistiques</strong> : facteurs extraits des rendements (analyse factorielle, composantes principales)</li><li><strong>Mixtes</strong> : combinaisons des précédents</li></ul></div>"
   }
  },
  "pm2-macro": {
   "zh": {
    "topic": "宏观经济因子模型",
    "front": "写出宏观经济因子模型。截距和因子分别是什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_i={}&E(R_i)+\\textstyle\\sum_k\\beta_{i,k}F_k\\\\&+\\varepsilon_i\\end{aligned}$$</div><p>它对<strong>实际</strong>回报建模。截距是<strong>预期回报</strong>；每个 \\(F_k\\) 是一个<strong>意外</strong>：宏观变量（GDP、通胀、利率、信用利差）的实际值减预期值。</p></div>",
    "gap": "没有意外时，资产获得其预期回报。"
   },
   "ja": {
    "topic": "マクロ経済ファクター・モデル",
    "front": "マクロ経済ファクター・モデルを示せ。切片とファクターは何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_i={}&E(R_i)+\\textstyle\\sum_k\\beta_{i,k}F_k\\\\&+\\varepsilon_i\\end{aligned}$$</div><p><strong>実際の</strong>リターンをモデル化する。切片は<strong>期待リターン</strong>、各 \\(F_k\\) は<strong>サプライズ</strong>：マクロ変数（GDP、インフレ、金利、信用スプレッド）の実績値 − 予想値。</p></div>",
    "gap": "サプライズがなければ、資産は期待リターンを稼ぐ。"
   },
   "fr": {
    "topic": "Modèle factoriel macroéconomique",
    "front": "Écrivez le modèle factoriel macroéconomique. Que sont l’ordonnée à l’origine et les facteurs ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_i={}&E(R_i)+\\textstyle\\sum_k\\beta_{i,k}F_k\\\\&+\\varepsilon_i\\end{aligned}$$</div><p>Il modélise le rendement <strong>réel</strong>. L’ordonnée est le <strong>rendement attendu</strong> ; chaque \\(F_k\\) est une <strong>surprise</strong> : valeur réalisée moins valeur attendue d’une variable macro (PIB, inflation, taux, spreads de crédit).</p></div>",
    "gap": "Sans surprise, l’actif obtient son rendement attendu."
   }
  },
  "pm2-macro-example": {
   "zh": {
    "topic": "宏观模型例题",
    "front": "\\(E(R)=9\\%\\)；对 GDP 意外的敏感度 1.5，对通胀意外 −0.8。GDP：预期 3%，实际 2%。通胀：预期 2%，实际 3%。回报是多少？",
    "back": "<div class=\"ans\"><p>意外：GDP −1%，通胀 +1%。</p><div class=\"eq-block\">$$\\begin{aligned}R&=9\\%-1.5\\%-0.8\\%\\\\&=6.7\\%\\end{aligned}$$</div></div>"
   },
   "ja": {
    "topic": "マクロ・モデルの計算例",
    "front": "\\(E(R)=9\\%\\)。GDP のサプライズへの感応度 1.5、インフレのサプライズへの感応度 −0.8。GDP：予想 3%、実績 2%。インフレ：予想 2%、実績 3%。リターンは。",
    "back": "<div class=\"ans\"><p>サプライズ：GDP −1%、インフレ +1%。</p><div class=\"eq-block\">$$\\begin{aligned}R&=9\\%-1.5\\%-0.8\\%\\\\&=6.7\\%\\end{aligned}$$</div></div>"
   },
   "fr": {
    "topic": "Exemple de modèle macro",
    "front": "\\(E(R)=9\\%\\) ; sensibilité 1,5 aux surprises de PIB et −0,8 aux surprises d’inflation. PIB : attendu 3 %, réel 2 %. Inflation : attendue 2 %, réelle 3 %. Rendement ?",
    "back": "<div class=\"ans\"><p>Surprises : PIB −1 %, inflation +1 %.</p><div class=\"eq-block\">$$\\begin{aligned}R&=9\\%-1.5\\%-0.8\\%\\\\&=6.7\\%\\end{aligned}$$</div></div>"
   }
  },
  "pm2-fundamental": {
   "zh": {
    "topic": "基本面因子模型",
    "front": "在基本面因子模型中，敏感度和因子分别是什么？敏感度如何标准化？",
    "back": "<div class=\"ans\"><p><strong>敏感度</strong>是经标准化的公司属性（P/E、规模……）；<strong>因子</strong>是这些属性的回报，由横截面回归得出。</p><div class=\"eq-block\">$$\\beta_{i,k}=\\frac{x_{i,k}-\\mu_k}{\\sigma_k}$$</div></div>",
    "gap": "截距是回归截距，不是预期回报。行业虚拟变量为 0/1，不做标准化。"
   },
   "ja": {
    "topic": "ファンダメンタル・ファクター・モデル",
    "front": "ファンダメンタル・ファクター・モデルで、感応度とファクターは何か。感応度はどう標準化するか。",
    "back": "<div class=\"ans\"><p><strong>感応度</strong>は標準化した企業属性（P/E、規模など）、<strong>ファクター</strong>はそれらの属性へのリターンで、クロスセクション回帰から求める。</p><div class=\"eq-block\">$$\\beta_{i,k}=\\frac{x_{i,k}-\\mu_k}{\\sigma_k}$$</div></div>",
    "gap": "切片は回帰の切片で、期待リターンではない。業種ダミーは 0/1 で標準化しない。"
   },
   "fr": {
    "topic": "Modèle factoriel fondamental",
    "front": "Dans un modèle factoriel fondamental, que sont les sensibilités et les facteurs ? Comment standardise-t-on une sensibilité ?",
    "back": "<div class=\"ans\"><p>Les <strong>sensibilités</strong> sont des caractéristiques des sociétés (P/E, taille, ...), standardisées ; les <strong>facteurs</strong> sont les rendements associés à ces caractéristiques, obtenus par régression en coupe transversale.</p><div class=\"eq-block\">$$\\beta_{i,k}=\\frac{x_{i,k}-\\mu_k}{\\sigma_k}$$</div></div>",
    "gap": "L’ordonnée est celle de la régression, pas le rendement attendu. Les indicatrices sectorielles valent 0/1 et ne sont pas standardisées."
   }
  },
  "pm2-fund-example": {
   "zh": {
    "topic": "基本面模型例题",
    "front": "P/E 20（均值 16，σ 8）；对数规模 10（均值 9，σ 1.25）。截距 2.0%，P/E 因子 −1.0%，规模因子 1.5%。回报是多少？",
    "back": "<div class=\"ans\"><p>\\(\\beta_{\\text{P/E}}=0.5\\)，\\(\\beta_{\\text{size}}=0.8\\)。</p><div class=\"eq-block\">$$\\begin{aligned}R&=2.0\\%-0.5\\%+1.2\\%\\\\&=2.7\\%\\end{aligned}$$</div></div>"
   },
   "ja": {
    "topic": "ファンダメンタル・モデルの計算例",
    "front": "P/E 20（平均 16、σ 8）、対数規模 10（平均 9、σ 1.25）。切片 2.0%、P/E ファクター −1.0%、規模ファクター 1.5%。リターンは。",
    "back": "<div class=\"ans\"><p>\\(\\beta_{\\text{P/E}}=0.5\\)、\\(\\beta_{\\text{size}}=0.8\\)。</p><div class=\"eq-block\">$$\\begin{aligned}R&=2.0\\%-0.5\\%+1.2\\%\\\\&=2.7\\%\\end{aligned}$$</div></div>"
   },
   "fr": {
    "topic": "Exemple de modèle fondamental",
    "front": "P/E 20 (moyenne 16, σ 8) ; log de la taille 10 (moyenne 9, σ 1,25). Ordonnée 2,0 %, facteur P/E −1,0 %, facteur taille 1,5 %. Rendement ?",
    "back": "<div class=\"ans\"><p>\\(\\beta_{\\text{P/E}}=0.5\\), \\(\\beta_{\\text{size}}=0.8\\).</p><div class=\"eq-block\">$$\\begin{aligned}R&=2.0\\%-0.5\\%+1.2\\%\\\\&=2.7\\%\\end{aligned}$$</div></div>"
   }
  },
  "pm2-statistical": {
   "zh": {
    "topic": "统计因子模型",
    "front": "区分因子分析模型和主成分模型。统计模型的主要缺点是什么？",
    "back": "<div class=\"ans\"><ul><li><strong>因子分析</strong>：因子最好地解释回报的<strong>协方差</strong></li><li><strong>主成分</strong>：因子最好地解释<strong>方差</strong></li></ul><p>需要的假设少，但因子难以从经济上解释。</p></div>"
   },
   "ja": {
    "topic": "統計的ファクター・モデル",
    "front": "因子分析モデルと主成分モデルを区別せよ。統計的モデルの主な欠点は何か。",
    "back": "<div class=\"ans\"><ul><li><strong>因子分析</strong>：ファクターがリターンの<strong>共分散</strong>を最もよく説明する</li><li><strong>主成分</strong>：ファクターが<strong>分散</strong>を最もよく説明する</li></ul><p>必要な前提は少ないが、ファクターを経済的に解釈するのが難しい。</p></div>"
   },
   "fr": {
    "topic": "Modèles factoriels statistiques",
    "front": "Distinguez l’analyse factorielle et les modèles en composantes principales. Quel est le principal inconvénient des modèles statistiques ?",
    "back": "<div class=\"ans\"><ul><li><strong>Analyse factorielle</strong> : les facteurs expliquent au mieux les <strong>covariances</strong> des rendements</li><li><strong>Composantes principales</strong> : les facteurs expliquent au mieux les <strong>variances</strong></li></ul><p>Peu d’hypothèses nécessaires, mais les facteurs sont difficiles à interpréter économiquement.</p></div>"
   }
  },
  "pm2-macro-vs-fund": {
   "zh": {
    "topic": "宏观模型与基本面模型",
    "front": "从截距、因子、敏感度、数据和估计对象对比宏观经济因子模型和基本面因子模型。",
    "back": "<div class=\"ans\"><ul><li>截距：\\(E(R_i)\\) 对回归 \\(a_i\\)</li><li>因子：<strong>意外</strong>对<strong>属性的回报</strong></li><li>敏感度：回归斜率对标准化属性</li><li>数据：时间序列对横截面</li><li>估计对象：\\(\\beta\\)（宏观）对 \\(F\\)（基本面）</li></ul></div>"
   },
   "ja": {
    "topic": "マクロ・モデルとファンダメンタル・モデル",
    "front": "マクロ経済ファクター・モデルとファンダメンタル・ファクター・モデルを、切片、ファクター、感応度、データ、推定対象で対比せよ。",
    "back": "<div class=\"ans\"><ul><li>切片：\\(E(R_i)\\) 対 回帰の \\(a_i\\)</li><li>ファクター：<strong>サプライズ</strong> 対 <strong>属性へのリターン</strong></li><li>感応度：回帰の傾き 対 標準化した属性</li><li>データ：時系列 対 クロスセクション</li><li>推定対象：\\(\\beta\\)（マクロ）対 \\(F\\)（ファンダメンタル）</li></ul></div>"
   },
   "fr": {
    "topic": "Modèles macro ou fondamentaux",
    "front": "Opposez modèles macroéconomiques et fondamentaux : ordonnée, facteurs, sensibilités, données et ce qui est estimé.",
    "back": "<div class=\"ans\"><ul><li>Ordonnée : \\(E(R_i)\\) contre \\(a_i\\) de régression</li><li>Facteurs : <strong>surprises</strong> contre <strong>rendements des caractéristiques</strong></li><li>Sensibilités : pentes de régression contre caractéristiques standardisées</li><li>Données : séries temporelles contre coupe transversale</li><li>Estimé : les \\(\\beta\\) (macro) contre les \\(F\\) (fondamental)</li></ul></div>"
   }
  },
  "pm2-return-attr": {
   "zh": {
    "topic": "回报归因",
    "front": "把主动回报拆分为两个来源。各自反映什么能力？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_p-R_B={}&\\textstyle\\sum_k(\\beta_{p,k}-\\beta_{B,k})\\lambda_k\\\\&+\\text{Selection}\\end{aligned}$$</div><ul><li><strong>因子倾斜</strong>：类别（因子）选择的能力</li><li><strong>证券选择</strong>：挑选个别证券的能力</li></ul></div>"
   },
   "ja": {
    "topic": "リターンの要因分析",
    "front": "アクティブ・リターンを 2 つの源泉に分けよ。それぞれどんなスキルを反映するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_p-R_B={}&\\textstyle\\sum_k(\\beta_{p,k}-\\beta_{B,k})\\lambda_k\\\\&+\\text{Selection}\\end{aligned}$$</div><ul><li><strong>ファクター・ティルト</strong>：クラス（ファクター）選択のスキル</li><li><strong>銘柄選択</strong>：個別証券を選ぶスキル</li></ul></div>"
   },
   "fr": {
    "topic": "Attribution de performance",
    "front": "Décomposez le rendement actif en ses deux sources. Quelle compétence chacune reflète-t-elle ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}R_p-R_B={}&\\textstyle\\sum_k(\\beta_{p,k}-\\beta_{B,k})\\lambda_k\\\\&+\\text{Selection}\\end{aligned}$$</div><ul><li><strong>Inclinaisons factorielles</strong> : compétence de sélection de classes (facteurs)</li><li><strong>Sélection de titres</strong> : compétence à choisir les titres individuels</li></ul></div>"
   }
  },
  "pm2-risk-attr": {
   "zh": {
    "topic": "主动风险与信息比率",
    "front": "定义主动风险和信息比率。主动风险如何拆分？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_p-R_B}{\\sigma(R_p-R_B)}$$</div><p>主动风险 \\(=\\sigma(R_p-R_B)\\)，即跟踪误差。主动风险² = 主动<strong>因子</strong>风险（倾斜，系统性）+ 主动<strong>特有</strong>风险（选择，非系统性）。</p></div>",
    "gap": "夏普比率以 \\(R_f\\) 为基准；由于 \\(R_f\\) 恒定，\\(\\sigma(R_p-R_f)=\\sigma(R_p)\\)。"
   },
   "ja": {
    "topic": "アクティブ・リスクと情報レシオ",
    "front": "アクティブ・リスクと情報レシオを定義せよ。アクティブ・リスクはどう分解されるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_p-R_B}{\\sigma(R_p-R_B)}$$</div><p>アクティブ・リスク \\(=\\sigma(R_p-R_B)\\)、つまりトラッキング・エラー。アクティブ・リスク² = アクティブ<strong>ファクター</strong>・リスク（ティルト、システマティック）+ アクティブ<strong>固有</strong>リスク（選択、アンシステマティック）。</p></div>",
    "gap": "シャープ・レシオは \\(R_f\\) をベンチマークとする。\\(R_f\\) は一定なので \\(\\sigma(R_p-R_f)=\\sigma(R_p)\\)。"
   },
   "fr": {
    "topic": "Risque actif et ratio d’information",
    "front": "Définissez le risque actif et le ratio d’information. Comment le risque actif se décompose-t-il ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{IR}=\\frac{R_p-R_B}{\\sigma(R_p-R_B)}$$</div><p>Risque actif \\(=\\sigma(R_p-R_B)\\), la tracking error. Risque actif² = risque actif <strong>factoriel</strong> (inclinaisons, systématique) + risque actif <strong>spécifique</strong> (sélection, non systématique).</p></div>",
    "gap": "Le ratio de Sharpe prend \\(R_f\\) comme référence ; \\(R_f\\) étant constant, \\(\\sigma(R_p-R_f)=\\sigma(R_p)\\)."
   }
  }
 }
});
