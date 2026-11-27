deckI18n({
 "source": {
  "zh": "CFA 二级 权益 · M2 股利折现估值 · 单元复习",
  "ja": "CFA レベル II 株式 · M2 配当割引評価 · 単元の復習",
  "fr": "CFA niveau II Actions · M2 Évaluation par actualisation des dividendes · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "eq2-which-cf": {
   "zh": {
    "topic": "选择哪种现金流",
    "front": "股利、自由现金流、剩余收益各适用于什么情况？",
    "back": "<div class=\"ans\"><ul><li><strong>股利</strong>：派息政策与盈利挂钩的派息公司；少数股东视角</li><li><strong>FCFE/FCFF</strong>：不派息或股利与盈利无关；FCF 跟随利润；<strong>控制权</strong>视角</li><li><strong>剩余收益</strong>：预测期内不派息且 <strong>FCF 为负</strong></li></ul></div>",
    "gap": "当杠杆预计大幅变化时，FCFF 比 FCFE 更容易使用。"
   },
   "ja": {
    "topic": "どのキャッシュフローを使うか",
    "front": "配当、フリー・キャッシュフロー、残余利益はそれぞれどんなときに適しているか。",
    "back": "<div class=\"ans\"><ul><li><strong>配当</strong>：収益性に連動した配当方針をもつ配当支払企業。少数株主の視点</li><li><strong>FCFE/FCFF</strong>：無配または配当が利益と無関係。FCF が利益に連動。<strong>支配</strong>の視点</li><li><strong>残余利益</strong>：予測期間に無配で、<strong>FCF がマイナス</strong></li></ul></div>",
    "gap": "レバレッジが大きく変わる見込みなら、FCFE より FCFF のほうが扱いやすい。"
   },
   "fr": {
    "topic": "Quel flux utiliser",
    "front": "Quand chacun convient-il : dividendes, flux de trésorerie disponible, bénéfice résiduel ?",
    "back": "<div class=\"ans\"><ul><li><strong>Dividendes</strong> : société distributrice dont la politique est liée à la rentabilité ; point de vue minoritaire</li><li><strong>FCFE/FCFF</strong> : pas de dividende ou dividende sans lien avec le bénéfice ; le FCF suit le profit ; point de vue du <strong>contrôle</strong></li><li><strong>Bénéfice résiduel</strong> : pas de dividende et <strong>FCF négatif</strong> sur l’horizon de prévision</li></ul></div>",
    "gap": "Le FCFF est plus simple que le FCFE quand le levier doit beaucoup changer."
   }
  },
  "eq2-ddm": {
   "zh": {
    "topic": "有限期 DDM",
    "front": "某股票五年内支付 \\$2.00、2.10、2.20、3.50、3.75，\\(P_5=\\$40\\)，\\(r=10\\%\\)。求其价值。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\sum_{t=1}^{n}\\frac{D_t}{(1+r)^t}+\\frac{P_n}{(1+r)^n}$$</div><p>股利现值 9.926 + 价格现值 24.837 = <strong>\\$34.76</strong>。</p></div>",
    "gap": "即使是有限期投资者，也通过 \\(P_n\\) 依赖于所有未来股利。"
   },
   "ja": {
    "topic": "有限期間の DDM",
    "front": "5 年間に \\$2.00、2.10、2.20、3.50、3.75 を支払い、\\(P_5=\\$40\\)、\\(r=10\\%\\) の株式を評価せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\sum_{t=1}^{n}\\frac{D_t}{(1+r)^t}+\\frac{P_n}{(1+r)^n}$$</div><p>配当の現在価値 9.926 + 価格の現在価値 24.837 = <strong>\\$34.76</strong>。</p></div>",
    "gap": "有限期間の投資家でも、\\(P_n\\) を通じてすべての将来配当に依存している。"
   },
   "fr": {
    "topic": "DDM sur un horizon",
    "front": "Évaluez une action qui verse \\$2.00, 2,10, 2,20, 3,50, 3,75 sur cinq ans, avec \\(P_5=\\$40\\) et \\(r=10\\%\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\sum_{t=1}^{n}\\frac{D_t}{(1+r)^t}+\\frac{P_n}{(1+r)^n}$$</div><p>VA des dividendes 9,926 + VA du prix 24,837 = <strong>\\$34.76</strong>.</p></div>",
    "gap": "Même un investisseur à horizon fini dépend de tous les dividendes futurs, via \\(P_n\\)."
   }
  },
  "eq2-ggm": {
   "zh": {
    "topic": "戈登增长模型",
    "front": "写出 GGM 及其假设。\\(D_0=\\$1.64\\)，\\(g=4.5\\%\\)，\\(r=7.3\\%\\)：价值是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{D_0(1+g)}{r-g}=\\frac{D_1}{r-g}$$</div><p>\\(g\\) 永远不变，\\(r&gt;g\\)，两者都是长期值。</p><p>\\(1.64(1.045)/0.028=\\) <strong>\\$61.21</strong>。</p></div>",
    "gap": "用 \\(D_1\\)，不是 \\(D_0\\)。只有当 \\(g\\) 不超过名义 GDP 增长时才使用。"
   },
   "ja": {
    "topic": "ゴードン成長モデル",
    "front": "GGM とその前提を示せ。\\(D_0=\\$1.64\\)、\\(g=4.5\\%\\)、\\(r=7.3\\%\\)：価値は。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{D_0(1+g)}{r-g}=\\frac{D_1}{r-g}$$</div><p>\\(g\\) は永久に一定、\\(r&gt;g\\)、どちらも長期の値。</p><p>\\(1.64(1.045)/0.028=\\) <strong>\\$61.21</strong>。</p></div>",
    "gap": "\\(D_0\\) ではなく \\(D_1\\) を使う。\\(g\\) が名目 GDP 成長率以下の場合にだけ使う。"
   },
   "fr": {
    "topic": "Modèle de Gordon",
    "front": "Écrivez le GGM et ses hypothèses. \\(D_0=\\$1.64\\), \\(g=4.5\\%\\), \\(r=7.3\\%\\) : valeur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{D_0(1+g)}{r-g}=\\frac{D_1}{r-g}$$</div><p>\\(g\\) constant à perpétuité, \\(r&gt;g\\), tous deux à long terme.</p><p>\\(1.64(1.045)/0.028=\\) <strong>\\$61.21</strong>.</p></div>",
    "gap": "Utilisez \\(D_1\\), pas \\(D_0\\). À n’employer que si \\(g\\) ne dépasse pas la croissance du PIB nominal."
   }
  },
  "eq2-ggm-sw": {
   "zh": {
    "topic": "GGM 的优点与局限",
    "front": "GGM 的优点和局限是什么？",
    "back": "<div class=\"ans\"><ul><li><strong>优点</strong>：简单；适合成熟的派息公司和宽基指数；可给出终值；可倒推隐含 \\(g\\) 或 \\(r\\)</li><li><strong>局限</strong>：对 \\(r-g\\) 非常敏感；对不派息公司无用；若 \\(g\\ge r\\) 则失效</li></ul></div>",
    "gap": "Middlesex：\\(r\\) 和 \\(g\\) 各变动 ±25 bp，价值就在 \\$33.92 到 \\$53.02 之间变动。"
   },
   "ja": {
    "topic": "GGM の長所と限界",
    "front": "GGM の長所と限界は何か。",
    "back": "<div class=\"ans\"><ul><li><strong>長所</strong>：単純。成熟した配当支払企業や広範な指数に合う。ターミナル・バリューを出せる。インプライドの \\(g\\) や \\(r\\) を逆算できる</li><li><strong>限界</strong>：\\(r-g\\) に非常に敏感。無配企業には使えない。\\(g\\ge r\\) なら成り立たない</li></ul></div>",
    "gap": "Middlesex：\\(r\\) と \\(g\\) を ±25 bp 動かすと、価値は \\$33.92 から \\$53.02 まで動く。"
   },
   "fr": {
    "topic": "Forces et limites du GGM",
    "front": "Quelles sont les forces et les limites du GGM ?",
    "back": "<div class=\"ans\"><ul><li><strong>Forces</strong> : simple ; adapté aux sociétés matures distributrices et aux indices larges ; fournit des valeurs terminales ; permet de déduire \\(g\\) ou \\(r\\) implicite</li><li><strong>Limites</strong> : très sensible à \\(r-g\\) ; inutile pour les non-distributrices ; invalide si \\(g\\ge r\\)</li></ul></div>",
    "gap": "Middlesex : ±25 pb sur \\(r\\) et \\(g\\) font varier la valeur de \\$33.92 à \\$53.02."
   }
  },
  "eq2-preferred": {
   "zh": {
    "topic": "优先股与负增长",
    "front": "对一只 4% 的永续优先股（面值 \\$25）在 \\(r=5.5\\%\\) 下估值，并对一只 \\(D_1=\\$4.25\\)、\\(g=-4\\%\\)、\\(r=9\\%\\) 的股票估值。",
    "back": "<div class=\"ans\"><p>优先股：\\(V_0=D/r=1.00/0.055=\\) <strong>\\$18.18</strong>。</p><p>负增长：\\(4.25/0.13=\\) <strong>\\$32.69</strong>。</p></div>"
   },
   "ja": {
    "topic": "優先株とマイナス成長",
    "front": "4% の永久優先株（額面 \\$25）を \\(r=5.5\\%\\) で、\\(D_1=\\$4.25\\)、\\(g=-4\\%\\)、\\(r=9\\%\\) の株式を評価せよ。",
    "back": "<div class=\"ans\"><p>優先株：\\(V_0=D/r=1.00/0.055=\\) <strong>\\$18.18</strong>。</p><p>マイナス成長：\\(4.25/0.13=\\) <strong>\\$32.69</strong>。</p></div>"
   },
   "fr": {
    "topic": "Actions de préférence et croissance négative",
    "front": "Évaluez une action de préférence perpétuelle à 4 % (nominal \\$25) à \\(r=5.5\\%\\), et une action avec \\(D_1=\\$4.25\\), \\(g=-4\\%\\), \\(r=9\\%\\).",
    "back": "<div class=\"ans\"><p>Préférence : \\(V_0=D/r=1.00/0.055=\\) <strong>\\$18.18</strong>.</p><p>Croissance négative : \\(4.25/0.13=\\) <strong>\\$32.69</strong>.</p></div>"
   }
  },
  "eq2-implied-g": {
   "zh": {
    "topic": "隐含增长率",
    "front": "写出由 GGM 得出的隐含增长率。价格 \\$40，\\(D_0=\\$2\\)，\\(r=12.2\\%\\)：求 \\(g\\)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=\\frac{rP_0-D_0}{P_0+D_0}$$</div><p>\\((0.122\\times40-2)/42=\\) <strong>6.86%</strong>：市场定价所含的增长高于 5% 的预测。</p></div>"
   },
   "ja": {
    "topic": "インプライド成長率",
    "front": "GGM からインプライド成長率を示せ。株価 \\$40、\\(D_0=\\$2\\)、\\(r=12.2\\%\\)：\\(g\\) を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=\\frac{rP_0-D_0}{P_0+D_0}$$</div><p>\\((0.122\\times40-2)/42=\\) <strong>6.86%</strong>：市場は予測の 5% より高い成長を織り込んでいる。</p></div>"
   },
   "fr": {
    "topic": "Croissance implicite",
    "front": "Écrivez le taux de croissance implicite tiré du GGM. Prix \\$40, \\(D_0=\\$2\\), \\(r=12.2\\%\\) : trouvez \\(g\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=\\frac{rP_0-D_0}{P_0+D_0}$$</div><p>\\((0.122\\times40-2)/42=\\) <strong>6,86 %</strong> : le marché intègre plus de croissance que la prévision de 5 %.</p></div>"
   }
  },
  "eq2-pvgo": {
   "zh": {
    "topic": "PVGO",
    "front": "把价值拆分为现有资产和增长。\\(E_1=\\$1.52\\)，\\(r=6.8\\%\\)，价格 \\$43.20：求 PVGO。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{E_1}{r}+PVGO$$</div><p>\\(E_1/r=22.42\\)，所以 <strong>PVGO = \\$20.78</strong>（占价格的 48%）。</p></div>",
    "gap": "只有新投资的回报高于 \\(r\\) 时，增长才增加价值。PVGO 为负表示再投资在毁灭价值。"
   },
   "ja": {
    "topic": "PVGO",
    "front": "価値を既存資産と成長に分けよ。\\(E_1=\\$1.52\\)、\\(r=6.8\\%\\)、株価 \\$43.20：PVGO を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{E_1}{r}+PVGO$$</div><p>\\(E_1/r=22.42\\) なので <strong>PVGO = \\$20.78</strong>（株価の 48%）。</p></div>",
    "gap": "成長が価値を生むのは、新規投資が \\(r\\) を上回るリターンを稼ぐときだけ。マイナスの PVGO は価値を壊す再投資を示す。"
   },
   "fr": {
    "topic": "PVGO",
    "front": "Décomposez la valeur entre actifs en place et croissance. \\(E_1=\\$1.52\\), \\(r=6.8\\%\\), prix \\$43.20 : trouvez la PVGO.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=\\frac{E_1}{r}+PVGO$$</div><p>\\(E_1/r=22.42\\), donc <strong>PVGO = \\$20.78</strong> (48 % du prix).</p></div>",
    "gap": "La croissance n’ajoute de la valeur que si le nouvel investissement rapporte plus que \\(r\\). Une PVGO négative signale un réinvestissement destructeur de valeur."
   }
  },
  "eq2-pe-pvgo": {
   "zh": {
    "topic": "P/E 与 PVGO",
    "front": "PVGO 如何进入预期 P/E？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1}{r}+\\frac{PVGO}{E_1}$$</div><p>无增长 P/E 加上增长部分。Middlesex：28.4 = 14.7 + 13.67。</p></div>"
   },
   "ja": {
    "topic": "P/E と PVGO",
    "front": "PVGO は予想 P/E にどう入るか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1}{r}+\\frac{PVGO}{E_1}$$</div><p>成長ゼロの P/E に成長部分を足したもの。Middlesex：28.4 = 14.7 + 13.67。</p></div>"
   },
   "fr": {
    "topic": "P/E et PVGO",
    "front": "Comment la PVGO entre-t-elle dans le P/E prévisionnel ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1}{r}+\\frac{PVGO}{E_1}$$</div><p>Le P/E sans croissance plus une composante de croissance. Middlesex : 28,4 = 14,7 + 13,67.</p></div>"
   }
  },
  "eq2-justified-pe": {
   "zh": {
    "topic": "合理 P/E",
    "front": "写出合理的预期 P/E 和追溯 P/E。派息率 0.5438，\\(r=5.6\\%\\)，\\(g=4.25\\%\\)：求两者。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1-b}{r-g}$$</div><div class=\"eq-block\">$$\\frac{P_0}{E_0}=\\frac{(1-b)(1+g)}{r-g}$$</div><p>预期 <strong>40.28</strong>；追溯 <strong>42.00</strong>。实际追溯 P/E 为 34.3 → 被低估。</p></div>"
   },
   "ja": {
    "topic": "理論 P/E",
    "front": "理論的な予想 P/E と実績 P/E を示せ。配当性向 0.5438、\\(r=5.6\\%\\)、\\(g=4.25\\%\\)：両方を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1-b}{r-g}$$</div><div class=\"eq-block\">$$\\frac{P_0}{E_0}=\\frac{(1-b)(1+g)}{r-g}$$</div><p>予想 <strong>40.28</strong>、実績 <strong>42.00</strong>。実際の実績 P/E が 34.3 → 割安。</p></div>"
   },
   "fr": {
    "topic": "P/E justifié",
    "front": "Écrivez les P/E justifiés prévisionnel et historique. Taux de distribution 0,5438, \\(r=5.6\\%\\), \\(g=4.25\\%\\) : trouvez les deux.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{E_1}=\\frac{1-b}{r-g}$$</div><div class=\"eq-block\">$$\\frac{P_0}{E_0}=\\frac{(1-b)(1+g)}{r-g}$$</div><p>Prévisionnel <strong>40,28</strong> ; historique <strong>42,00</strong>. Un P/E historique réel de 34,3 → sous-évaluée.</p></div>"
   }
  },
  "eq2-phases": {
   "zh": {
    "topic": "生命周期阶段",
    "front": "描述增长期、过渡期和成熟期的增长、派息和 FCFE。",
    "back": "<div class=\"ans\"><ul><li><strong>增长期</strong>：高增长、高利润率；FCFE 常为负；很少或不派息</li><li><strong>过渡期</strong>：增长放缓；FCFE 转正；派息率上升</li><li><strong>成熟期</strong>：ROE → \\(r\\)；派息稳定；适用 GGM</li></ul></div>"
   },
   "ja": {
    "topic": "ライフサイクルの段階",
    "front": "成長期、移行期、成熟期の成長、配当、FCFE を説明せよ。",
    "back": "<div class=\"ans\"><ul><li><strong>成長期</strong>：高成長・高利益率。FCFE はしばしばマイナス。配当はほとんどないかゼロ</li><li><strong>移行期</strong>：成長が鈍化。FCFE がプラスに転じる。配当性向が上昇</li><li><strong>成熟期</strong>：ROE → \\(r\\)。安定した配当。GGM が使える</li></ul></div>"
   },
   "fr": {
    "topic": "Phases du cycle de vie",
    "front": "Décrivez croissance, distribution et FCFE dans les phases de croissance, de transition et de maturité.",
    "back": "<div class=\"ans\"><ul><li><strong>Croissance</strong> : forte croissance et marges élevées ; FCFE souvent négatif ; peu ou pas de distribution</li><li><strong>Transition</strong> : la croissance ralentit ; le FCFE devient positif ; la distribution augmente</li><li><strong>Maturité</strong> : ROE → \\(r\\) ; distribution stable ; le GGM s’applique</li></ul></div>"
   }
  },
  "eq2-two-stage": {
   "zh": {
    "topic": "两阶段 DDM",
    "front": "描述两阶段 DDM 的步骤。Meditec：\\(D_{11}=€1.3671\\)，\\(r=5.88\\%\\)，\\(g_L=5\\%\\)：求 \\(V_{10}\\)。",
    "back": "<div class=\"ans\"><p>列出 \\(D_1\\dots D_n\\)；\\(D_{n+1}=D_n(1+g_L)\\)；\\(V_n=D_{n+1}/(r-g_L)\\)；全部按 \\(r\\) 折现。</p><p>\\(V_{10}=1.3671/0.0088=\\) <strong>€155.36</strong>；\\(V_0=€94.21\\)。</p></div>",
    "gap": "终值往往占价值的大部分（此处为 93%）。"
   },
   "ja": {
    "topic": "2 段階 DDM",
    "front": "2 段階 DDM の手順を説明せよ。Meditec：\\(D_{11}=€1.3671\\)、\\(r=5.88\\%\\)、\\(g_L=5\\%\\)：\\(V_{10}\\) を求めよ。",
    "back": "<div class=\"ans\"><p>\\(D_1\\dots D_n\\) を並べ、\\(D_{n+1}=D_n(1+g_L)\\)、\\(V_n=D_{n+1}/(r-g_L)\\)、すべて \\(r\\) で割り引く。</p><p>\\(V_{10}=1.3671/0.0088=\\) <strong>€155.36</strong>、\\(V_0=€94.21\\)。</p></div>",
    "gap": "ターミナル・バリューが価値の大部分を占めることが多い（ここでは 93%）。"
   },
   "fr": {
    "topic": "DDM à deux étapes",
    "front": "Décrivez les étapes du DDM à deux étapes. Meditec : \\(D_{11}=€1.3671\\), \\(r=5.88\\%\\), \\(g_L=5\\%\\) : trouvez \\(V_{10}\\).",
    "back": "<div class=\"ans\"><p>Listez \\(D_1\\dots D_n\\) ; \\(D_{n+1}=D_n(1+g_L)\\) ; \\(V_n=D_{n+1}/(r-g_L)\\) ; actualisez le tout à \\(r\\).</p><p>\\(V_{10}=1.3671/0.0088=\\) <strong>155,36 €</strong> ; \\(V_0=€94.21\\).</p></div>",
    "gap": "La valeur terminale représente souvent l’essentiel de la valeur (93 % ici)."
   }
  },
  "eq2-timing": {
   "zh": {
    "topic": "终值的时点",
    "front": "一家公司在 \\(t=5\\) 首次派发 \\$1 股利，增长 5%，\\(r=11\\%\\)。今天的价值是多少？",
    "back": "<div class=\"ans\"><p>\\(V_4=D_5/(r-g)=1/0.06=\\$16.67\\)，即 \\(t=4\\) 时的价值。</p><p>\\(V_0=16.67/1.11^4=\\) <strong>\\$10.98</strong>。</p></div>",
    "gap": "用 \\(D_5\\) 套 GGM 得到的是 \\(t=4\\) 的价值：折现 4 年，不是 5 年。"
   },
   "ja": {
    "topic": "ターミナル・バリューの時点",
    "front": "ある企業が \\(t=5\\) に初めて \\$1 の配当を支払い、5% で成長、\\(r=11\\%\\)。今日の価値は。",
    "back": "<div class=\"ans\"><p>\\(V_4=D_5/(r-g)=1/0.06=\\$16.67\\) は \\(t=4\\) 時点の価値。</p><p>\\(V_0=16.67/1.11^4=\\) <strong>\\$10.98</strong>。</p></div>",
    "gap": "\\(D_5\\) に GGM を使うと \\(t=4\\) の価値が出る：割り引くのは 5 年ではなく 4 年。"
   },
   "fr": {
    "topic": "Date de la valeur terminale",
    "front": "Une société verse son premier dividende de \\$1 en \\(t=5\\), en croissance de 5 %, \\(r=11\\%\\). Valeur aujourd’hui ?",
    "back": "<div class=\"ans\"><p>\\(V_4=D_5/(r-g)=1/0.06=\\$16.67\\), la valeur en \\(t=4\\).</p><p>\\(V_0=16.67/1.11^4=\\) <strong>\\$10.98</strong>.</p></div>",
    "gap": "Le GGM appliqué à \\(D_5\\) donne la valeur en \\(t=4\\) : actualisez sur 4 ans, pas 5."
   }
  },
  "eq2-h": {
   "zh": {
    "topic": "H 模型",
    "front": "写出 H 模型。\\(D_0=€1.77\\)，增长率在 10 年内从 7% 降至 4%，\\(r=8\\%\\)：价值是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&\\frac{D_0(1+g_L)}{r-g_L}\\\\&+\\frac{D_0H(g_S-g_L)}{r-g_L}\\end{aligned}$$</div><p>\\(H=5\\)：\\((1.84+0.27)/0.04=\\) <strong>€52.75</strong>。</p></div>",
    "gap": "\\(H\\) 是高增长期的一半；该模型是近似。"
   },
   "ja": {
    "topic": "H モデル",
    "front": "H モデルを示せ。\\(D_0=€1.77\\)、10 年で 7% から 4% に低下、\\(r=8\\%\\)：価値は。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&\\frac{D_0(1+g_L)}{r-g_L}\\\\&+\\frac{D_0H(g_S-g_L)}{r-g_L}\\end{aligned}$$</div><p>\\(H=5\\)：\\((1.84+0.27)/0.04=\\) <strong>€52.75</strong>。</p></div>",
    "gap": "\\(H\\) は高成長期間の半分。このモデルは近似。"
   },
   "fr": {
    "topic": "Modèle H",
    "front": "Écrivez le modèle H. \\(D_0=€1.77\\), croissance de 7 % ramenée à 4 % sur 10 ans, \\(r=8\\%\\) : valeur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&\\frac{D_0(1+g_L)}{r-g_L}\\\\&+\\frac{D_0H(g_S-g_L)}{r-g_L}\\end{aligned}$$</div><p>\\(H=5\\) : \\((1.84+0.27)/0.04=\\) <strong>52,75 €</strong>.</p></div>",
    "gap": "\\(H\\) est la moitié de la période de forte croissance ; le modèle est une approximation."
   }
  },
  "eq2-three-stage": {
   "zh": {
    "topic": "三阶段 DDM",
    "front": "第二种三阶段模型如何运作？",
    "back": "<div class=\"ans\"><ul><li>第一阶段股利按固定增长计算现值</li><li>用 \\(D_n\\) 计算第二阶段开始时的 H 模型价值</li><li>将其折现到 \\(t=0\\) 并相加</li></ul></div>",
    "gap": "Rhinestone：第一阶段占价值的 5.2%；第二、三阶段占 94.8%。"
   },
   "ja": {
    "topic": "3 段階 DDM",
    "front": "バージョン 2 の 3 段階モデルはどう機能するか。",
    "back": "<div class=\"ans\"><ul><li>第 1 段階の配当を一定成長で現在価値にする</li><li>\\(D_n\\) を使って第 2 段階開始時点の H モデル価値を求める</li><li>それを \\(t=0\\) に割り引いて足す</li></ul></div>",
    "gap": "Rhinestone：第 1 段階は価値の 5.2%、第 2–3 段階が 94.8%。"
   },
   "fr": {
    "topic": "DDM à trois étapes",
    "front": "Comment fonctionne la version 2 du modèle à trois étapes ?",
    "back": "<div class=\"ans\"><ul><li>VA des dividendes de l’étape 1 à croissance constante</li><li>Valeur du modèle H au début de l’étape 2, à partir de \\(D_n\\)</li><li>Actualiser à \\(t=0\\) et additionner</li></ul></div>",
    "gap": "Rhinestone : l’étape 1 représente 5,2 % de la valeur ; les étapes 2–3, 94,8 %."
   }
  },
  "eq2-choose": {
   "zh": {
    "topic": "选择 DDM",
    "front": "把各模型与用途对应起来：GGM、两阶段、H 模型、三阶段、电子表格。",
    "back": "<div class=\"ans\"><ul><li>GGM：成熟，增长 ≤ GDP</li><li>两阶段：先高增长再骤降（专利到期）</li><li>H 模型：增长逐步下降</li><li>三阶段：增长期、过渡期、成熟期分明</li><li>电子表格：不规则的模式</li></ul></div>"
   },
   "ja": {
    "topic": "DDM の選択",
    "front": "各モデルを用途と対応させよ：GGM、2 段階、H モデル、3 段階、スプレッドシート。",
    "back": "<div class=\"ans\"><ul><li>GGM：成熟、成長率 ≤ GDP</li><li>2 段階：高成長の後に急落（特許切れ）</li><li>H モデル：成長率が徐々に低下</li><li>3 段階：成長、移行、成熟の段階がはっきりしている</li><li>スプレッドシート：不規則なパターン</li></ul></div>"
   },
   "fr": {
    "topic": "Choisir un DDM",
    "front": "Associez chaque modèle à son usage : GGM, deux étapes, modèle H, trois étapes, tableur.",
    "back": "<div class=\"ans\"><ul><li>GGM : mature, croissance ≤ PIB</li><li>Deux étapes : forte croissance puis chute brutale (expiration d’un brevet)</li><li>Modèle H : croissance en baisse progressive</li><li>Trois étapes : phases distinctes de croissance, transition, maturité</li><li>Tableur : profils irréguliers</li></ul></div>"
   }
  },
  "eq2-implied-r": {
   "zh": {
    "topic": "隐含要求回报率",
    "front": "写出 GGM 和 H 模型隐含的要求回报率。\\(D_0=\\$1\\)，价格 \\$20，增长在 10 年内从 10% 降至 6%：求 \\(r\\)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$r=\\frac{D_1}{P_0}+g$$</div><div class=\"eq-block\">$$\\begin{aligned}r={}&\\frac{D_0}{P_0}[(1+g_L)\\\\&+H(g_S-g_L)]+g_L\\end{aligned}$$</div><p>\\((1/20)(1.06+0.20)+0.06=\\) <strong>12.3%</strong>。</p></div>",
    "gap": "其他多阶段模型须用试错法求 IRR。"
   },
   "ja": {
    "topic": "インプライド要求収益率",
    "front": "GGM と H モデルが示す要求収益率を示せ。\\(D_0=\\$1\\)、株価 \\$20、10 年で 10%→6%：\\(r\\) を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$r=\\frac{D_1}{P_0}+g$$</div><div class=\"eq-block\">$$\\begin{aligned}r={}&\\frac{D_0}{P_0}[(1+g_L)\\\\&+H(g_S-g_L)]+g_L\\end{aligned}$$</div><p>\\((1/20)(1.06+0.20)+0.06=\\) <strong>12.3%</strong>。</p></div>",
    "gap": "ほかの多段階モデルでは、試行錯誤で IRR を求める。"
   },
   "fr": {
    "topic": "Rendement exigé implicite",
    "front": "Écrivez le rendement exigé implicite du GGM et du modèle H. \\(D_0=\\$1\\), prix \\$20, 10 %→6 % sur 10 ans : trouvez \\(r\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$r=\\frac{D_1}{P_0}+g$$</div><div class=\"eq-block\">$$\\begin{aligned}r={}&\\frac{D_0}{P_0}[(1+g_L)\\\\&+H(g_S-g_L)]+g_L\\end{aligned}$$</div><p>\\((1/20)(1.06+0.20)+0.06=\\) <strong>12,3 %</strong>.</p></div>",
    "gap": "Pour les autres modèles à plusieurs étapes, trouvez le TRI par tâtonnement."
   }
  },
  "eq2-sustainable": {
   "zh": {
    "topic": "可持续增长与 PRAT",
    "front": "写出可持续增长率和 PRAT 分解。ROE 25%，留存率 60%：求 \\(g\\)。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=b\\times ROE$$</div><p>PRAT：留存率 × 利润率 × 周转率 × 杠杆。</p><p>\\(0.60\\times25\\%=\\) <strong>15%</strong>。</p></div>",
    "gap": "用留存率，不是派息率。由杠杆驱动的 ROE（IBM 的 52%）不会持久：预测成熟后的各组成部分。"
   },
   "ja": {
    "topic": "サステナブル成長率と PRAT",
    "front": "サステナブル成長率と PRAT 分解を示せ。ROE 25%、内部留保率 60%：\\(g\\) を求めよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=b\\times ROE$$</div><p>PRAT：内部留保率 × 利益率 × 回転率 × レバレッジ。</p><p>\\(0.60\\times25\\%=\\) <strong>15%</strong>。</p></div>",
    "gap": "配当性向ではなく内部留保率を使う。レバレッジによる ROE（IBM の 52%）は続かない：成熟後の構成要素を予測する。"
   },
   "fr": {
    "topic": "Croissance soutenable et PRAT",
    "front": "Écrivez la croissance soutenable et la décomposition PRAT. ROE 25 %, taux de rétention 60 % : trouvez \\(g\\).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$g=b\\times ROE$$</div><p>PRAT : rétention × marge × rotation × levier.</p><p>\\(0.60\\times25\\%=\\) <strong>15 %</strong>.</p></div>",
    "gap": "Utilisez le taux de rétention, pas le taux de distribution. Un ROE tiré par le levier (52 % chez IBM) ne durera pas : prévoyez des composantes de maturité."
   }
  }
 }
});
