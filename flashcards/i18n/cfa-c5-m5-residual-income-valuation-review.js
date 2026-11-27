deckI18n({
 "source": {
  "zh": "CFA 二级 权益 · M5 剩余收益估值 · 单元复习",
  "ja": "CFA レベル II 株式 · M5 残余利益評価 · 単元の復習",
  "fr": "CFA niveau II Actions · M5 Évaluation par le bénéfice résiduel · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "eq5-ri": {
   "zh": {
    "topic": "剩余收益",
    "front": "定义剩余收益。为什么净利润为正仍可能毁灭价值？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$RI=NI-r_e\\times B_{t-1}$$</div><p>净利润扣除了债务成本（利息），但没有扣除权益成本。若 ROE &lt; \\(r_e\\)，RI 为负。</p></div>"
   },
   "ja": {
    "topic": "残余利益",
    "front": "残余利益を定義せよ。純利益がプラスでも価値を壊しうるのはなぜか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$RI=NI-r_e\\times B_{t-1}$$</div><p>純利益は負債コスト（利息）を差し引いているが、株主資本コストは差し引いていない。ROE &lt; \\(r_e\\) なら RI はマイナス。</p></div>"
   },
   "fr": {
    "topic": "Bénéfice résiduel",
    "front": "Définissez le bénéfice résiduel. Pourquoi un résultat net positif peut-il malgré tout détruire de la valeur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$RI=NI-r_e\\times B_{t-1}$$</div><p>Le résultat net déduit le coût de la dette (intérêts) mais pas celui des capitaux propres. Si ROE &lt; \\(r_e\\), le RI est négatif.</p></div>"
   }
  },
  "eq5-axis": {
   "zh": {
    "topic": "剩余收益例题",
    "front": "资产 €2m，一半是 7% 的债务，一半是要求回报 12% 的权益，EBIT €200,000，税率 30%。求 RI。",
    "back": "<div class=\"ans\"><p>NI =（200,000 − 70,000）× 0.7 = 91,000；权益费用 120,000。</p><p><strong>RI = −€29,000</strong>：ROIC 7% 低于 8.45% 的资本费用，所以 P/B &lt; 1。</p></div>"
   },
   "ja": {
    "topic": "残余利益の計算例",
    "front": "資産 €2m のうち半分は 7% の負債、半分は要求収益率 12% の資本。EBIT €200,000、税率 30%。RI を求めよ。",
    "back": "<div class=\"ans\"><p>NI =（200,000 − 70,000）× 0.7 = 91,000、資本コスト 120,000。</p><p><strong>RI = −€29,000</strong>：ROIC 7% が資本コスト 8.45% を下回るので、P/B &lt; 1。</p></div>"
   },
   "fr": {
    "topic": "Exemple de bénéfice résiduel",
    "front": "Actifs de 2m €, moitié dette à 7 % et moitié capitaux propres à 12 %, EBIT 200 000 €, impôt 30 %. Trouvez le RI.",
    "back": "<div class=\"ans\"><p>RN = (200 000 − 70 000) × 0,7 = 91 000 ; charge des capitaux propres 120 000.</p><p><strong>RI = −29 000 €</strong> : le ROIC de 7 % est inférieur à la charge de capital de 8,45 %, donc P/B &lt; 1.</p></div>"
   }
  },
  "eq5-eva": {
   "zh": {
    "topic": "EVA 与 MVA",
    "front": "定义 EVA 和 MVA。说出一些 EVA 调整。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$EVA=NOPAT-C\\%\\times TC$$</div><p>MVA = 公司市场价值 − 总资本账面价值。</p><ul><li>研发费用资本化</li><li>使用现金税（剔除递延所得税）</li><li>加回 LIFO 准备</li><li>把经营租赁视同融资租赁</li></ul></div>"
   },
   "ja": {
    "topic": "EVA と MVA",
    "front": "EVA と MVA を定義せよ。EVA の調整をいくつか挙げよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$EVA=NOPAT-C\\%\\times TC$$</div><p>MVA = 企業の市場価値 − 総資本の簿価。</p><ul><li>研究開発費を資本化する</li><li>現金ベースの税金（繰延税金を除く）</li><li>LIFO 準備金を加える</li><li>オペレーティング・リースをファイナンス・リースとして扱う</li></ul></div>"
   },
   "fr": {
    "topic": "EVA et MVA",
    "front": "Définissez l’EVA et la MVA. Citez quelques ajustements de l’EVA.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$EVA=NOPAT-C\\%\\times TC$$</div><p>MVA = valeur de marché de la société − valeur comptable du capital total.</p><ul><li>Capitaliser la R&amp;D</li><li>Impôts décaissés (retirer les impôts différés)</li><li>Ajouter la réserve LIFO</li><li>Traiter les locations simples comme des locations-financements</li></ul></div>"
   }
  },
  "eq5-model": {
   "zh": {
    "topic": "RI 模型",
    "front": "写出剩余收益估值模型。它是从什么关系推导出来的？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0\\\\&+\\sum_{t=1}^{\\infty}\\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}\\end{aligned}$$</div><p>由 DDM 推导，使用<strong>干净盈余</strong>关系：\\(B_t=B_{t-1}+E_t-D_t\\)。</p></div>",
    "gap": "ROE 和权益费用都使用期初账面价值。"
   },
   "ja": {
    "topic": "RI モデル",
    "front": "残余利益評価モデルを示せ。どの関係から導かれるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0\\\\&+\\sum_{t=1}^{\\infty}\\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}\\end{aligned}$$</div><p>DDM から<strong>クリーン・サープラス</strong>関係 \\(B_t=B_{t-1}+E_t-D_t\\) を使って導く。</p></div>",
    "gap": "ROE と資本コストの両方に期首の簿価を使う。"
   },
   "fr": {
    "topic": "Le modèle du RI",
    "front": "Écrivez le modèle d’évaluation par le bénéfice résiduel. De quelle relation est-il tiré ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0\\\\&+\\sum_{t=1}^{\\infty}\\frac{(ROE_t-r)B_{t-1}}{(1+r)^t}\\end{aligned}$$</div><p>Du DDM, via la relation de <strong>surplus propre</strong> : \\(B_t=B_{t-1}+E_t-D_t\\).</p></div>",
    "gap": "Utilisez la valeur comptable d’ouverture pour le ROE comme pour la charge des capitaux propres."
   }
  },
  "eq5-earlier": {
   "zh": {
    "topic": "更早确认价值",
    "front": "用 RI 模型和 DDM 计算，Bugg Properties 的价值都是 \\$11.15。两者在时间上有何不同？",
    "back": "<div class=\"ans\"><p>RI 在 \\(t=0\\) 就确认了 \\$6.00（账面价值）；DDM 则从最后一笔清算股利中得到 \\$9.20。</p><p><strong>RI 更早确认价值</strong>，因此对终值的依赖较小。</p></div>"
   },
   "ja": {
    "topic": "価値の早期認識",
    "front": "Bugg Properties の価値は RI モデルでも DDM でも \\$11.15。時間的にどう違うか。",
    "back": "<div class=\"ans\"><p>RI は \\(t=0\\) で \\$6.00（簿価）を認識する。DDM は最後の清算配当から \\$9.20 を得る。</p><p><strong>RI は価値を早く認識する</strong>ので、ターミナル・バリューへの依存が小さい。</p></div>"
   },
   "fr": {
    "topic": "Reconnaissance plus précoce de la valeur",
    "front": "Bugg Properties vaut \\$11.15 selon le modèle du RI comme selon le DDM. En quoi diffèrent-ils dans le temps ?",
    "back": "<div class=\"ans\"><p>Le RI reconnaît \\$6.00 (valeur comptable) en \\(t=0\\) ; le DDM tire \\$9.20 du dividende final de liquidation.</p><p><strong>Le RI reconnaît la valeur plus tôt</strong> et dépend donc moins de la valeur terminale.</p></div>"
   }
  },
  "eq5-pb": {
   "zh": {
    "topic": "RI 与合理 P/B",
    "front": "写出由 RI 模型得出的合理 P/B。P/B 何时高于 1？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{B_0}=1+\\frac{ROE-r}{r-g}$$</div><p>恰好在 ROE &gt; \\(r\\) 时 P/B &gt; 1（预期 RI 的现值 &gt; 0）。ROE = \\(r\\) → P/B = 1。</p></div>"
   },
   "ja": {
    "topic": "RI と理論 P/B",
    "front": "RI モデルから理論 P/B を示せ。P/B が 1 を超えるのはいつか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{B_0}=1+\\frac{ROE-r}{r-g}$$</div><p>ROE &gt; \\(r\\)（予想 RI の現在価値 &gt; 0）のときにちょうど P/B &gt; 1。ROE = \\(r\\) → P/B = 1。</p></div>"
   },
   "fr": {
    "topic": "RI et P/B justifié",
    "front": "Écrivez le P/B justifié tiré du modèle du RI. Quand le P/B dépasse-t-il 1 ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{P_0}{B_0}=1+\\frac{ROE-r}{r-g}$$</div><p>P/B &gt; 1 exactement quand ROE &gt; \\(r\\) (VA du RI attendu &gt; 0). ROE = \\(r\\) → P/B = 1.</p></div>"
   }
  },
  "eq5-tobin": {
   "zh": {
    "topic": "托宾 q",
    "front": "定义托宾 q 并与 P/B 对比。",
    "back": "<div class=\"ans\"><p>债务和权益的市场价值 ÷ 总资产的<strong>重置成本</strong>。</p><p>与 P/B 不同：是总资本对总资产，按重置成本（反映通胀）而非历史成本计算。难以计量。</p></div>"
   },
   "ja": {
    "topic": "トービンの q",
    "front": "トービンの q を定義し、P/B と対比せよ。",
    "back": "<div class=\"ans\"><p>負債と資本の市場価値 ÷ 総資産の<strong>再調達原価</strong>。</p><p>P/B と違い、総資本を総資産で割り、取得原価ではなく再調達原価（インフレを反映）を使う。測定が難しい。</p></div>"
   },
   "fr": {
    "topic": "q de Tobin",
    "front": "Définissez le q de Tobin et opposez-le au P/B.",
    "back": "<div class=\"ans\"><p>Valeur de marché de la dette et des capitaux propres ÷ <strong>coût de remplacement</strong> de l’actif total.</p><p>Contrairement au P/B : capital total sur actif total, au coût de remplacement (qui reflète l’inflation) et non au coût historique. Difficile à mesurer.</p></div>"
   }
  },
  "eq5-single": {
   "zh": {
    "topic": "单阶段 RI 模型",
    "front": "对 Philips 估值：\\(B_0\\) €13.22，ROE 12%，\\(r\\) 8.5%，\\(g\\) 6.75%。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=B_0+\\frac{ROE-r}{r-g}B_0$$</div><p>\\(13.22+(0.035/0.0175)\\times13.22=\\) <strong>€39.66</strong>。</p></div>",
    "gap": "它假设 ROE 永远高于 \\(r\\)；实际上 ROE 会均值回归。"
   },
   "ja": {
    "topic": "1 段階 RI モデル",
    "front": "Philips を評価せよ：\\(B_0\\) €13.22、ROE 12%、\\(r\\) 8.5%、\\(g\\) 6.75%。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=B_0+\\frac{ROE-r}{r-g}B_0$$</div><p>\\(13.22+(0.035/0.0175)\\times13.22=\\) <strong>€39.66</strong>。</p></div>",
    "gap": "ROE が永久に \\(r\\) を上回ると仮定している。実際には ROE は平均に回帰する。"
   },
   "fr": {
    "topic": "Modèle du RI à une étape",
    "front": "Évaluez Philips : \\(B_0\\) 13,22 €, ROE 12 %, \\(r\\) 8,5 %, \\(g\\) 6,75 %.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$V_0=B_0+\\frac{ROE-r}{r-g}B_0$$</div><p>\\(13.22+(0.035/0.0175)\\times13.22=\\) <strong>39,66 €</strong>.</p></div>",
    "gap": "Il suppose un ROE supérieur à \\(r\\) à perpétuité ; en pratique, le ROE revient vers la moyenne."
   }
  },
  "eq5-implied-g": {
   "zh": {
    "topic": "隐含增长率",
    "front": "如何用 RI 模型求市场隐含的增长率？",
    "back": "<div class=\"ans\"><p>令单阶段模型等于价格，求解 \\(g\\)。Philips 股价 €35.40 → <strong>6.41%</strong>。</p></div>"
   },
   "ja": {
    "topic": "インプライド成長率",
    "front": "RI モデルで市場が織り込む成長率をどう求めるか。",
    "back": "<div class=\"ans\"><p>1 段階モデルを株価と等しくおき、\\(g\\) を解く。Philips の株価 €35.40 → <strong>6.41%</strong>。</p></div>"
   },
   "fr": {
    "topic": "Croissance implicite",
    "front": "Comment trouver le taux de croissance implicite du marché avec le modèle du RI ?",
    "back": "<div class=\"ans\"><p>Égalez le modèle à une étape au prix et résolvez pour \\(g\\). Philips à 35,40 € → <strong>6,41 %</strong>.</p></div>"
   }
  },
  "eq5-multistage": {
   "zh": {
    "topic": "多阶段 RI",
    "front": "写出带有终期账面溢价的多阶段 RI 模型。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0+\\sum_{t=1}^{T}\\frac{E_t-rB_{t-1}}{(1+r)^t}\\\\&+\\frac{P_T-B_T}{(1+r)^T}\\end{aligned}$$</div><p>\\(P_T\\) 可以来自 DDM、P/E 或 P/B。</p></div>"
   },
   "ja": {
    "topic": "多段階 RI",
    "front": "簿価に対するターミナル・プレミアムを含む多段階 RI モデルを示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0+\\sum_{t=1}^{T}\\frac{E_t-rB_{t-1}}{(1+r)^t}\\\\&+\\frac{P_T-B_T}{(1+r)^T}\\end{aligned}$$</div><p>\\(P_T\\) は DDM、P/E、P/B から求められる。</p></div>"
   },
   "fr": {
    "topic": "RI à plusieurs étapes",
    "front": "Écrivez le modèle du RI à plusieurs étapes avec une prime terminale sur la valeur comptable.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}V_0={}&B_0+\\sum_{t=1}^{T}\\frac{E_t-rB_{t-1}}{(1+r)^t}\\\\&+\\frac{P_T-B_T}{(1+r)^T}\\end{aligned}$$</div><p>\\(P_T\\) peut venir d’un DDM, d’un P/E ou d’un P/B.</p></div>"
   }
  },
  "eq5-continuing": {
   "zh": {
    "topic": "持续剩余收益",
    "front": "列出关于持续剩余收益的常见假设。",
    "back": "<div class=\"ans\"><ul><li>以正的水平永续</li><li>从终期年份起为零</li><li>随 ROE 回归 \\(r\\) 而降至零</li><li>反映 ROE 回归到某个均值（如行业）水平</li></ul></div>"
   },
   "ja": {
    "topic": "継続残余利益",
    "front": "継続残余利益に関する一般的な前提を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>プラスの水準で永久に続く</li><li>ターミナル年度からゼロ</li><li>ROE が \\(r\\) に回帰するにつれてゼロに減る</li><li>ROE が平均（例：業界）水準に回帰することを反映する</li></ul></div>"
   },
   "fr": {
    "topic": "Bénéfice résiduel continu",
    "front": "Énumérez les hypothèses courantes pour le bénéfice résiduel continu.",
    "back": "<div class=\"ans\"><ul><li>Se poursuit indéfiniment à un niveau positif</li><li>Nul à partir de l’année terminale</li><li>Décroît jusqu’à zéro à mesure que le ROE revient vers \\(r\\)</li><li>Reflète un ROE qui revient vers un niveau moyen (p. ex. sectoriel)</li></ul></div>"
   }
  },
  "eq5-persistence": {
   "zh": {
    "topic": "持续性模型",
    "front": "写出持续性模型的终期项。\\(\\omega\\) 是什么意思？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{E_T-rB_{T-1}}{(1+r-\\omega)(1+r)^{T-1}}$$</div><p>\\(\\omega=1\\)：RI 永续；\\(\\omega=0\\)：在 \\(T\\) 之后停止。平均约 0.62。</p></div>",
    "gap": "持续性较低：极端 ROE、特殊项目、应计项目。较高：低派息率、持续性强的行业。"
   },
   "ja": {
    "topic": "持続性モデル",
    "front": "持続性モデルのターミナル項を示せ。\\(\\omega\\) は何を意味するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{E_T-rB_{T-1}}{(1+r-\\omega)(1+r)^{T-1}}$$</div><p>\\(\\omega=1\\)：RI は永久に続く、\\(\\omega=0\\)：\\(T\\) の後に止まる。平均は約 0.62。</p></div>",
    "gap": "持続性が低い：極端な ROE、特別項目、発生高。高い：低い配当性向、持続性の高い業界。"
   },
   "fr": {
    "topic": "Modèle de persistance",
    "front": "Écrivez le terme terminal du modèle de persistance. Que signifie \\(\\omega\\) ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{E_T-rB_{T-1}}{(1+r-\\omega)(1+r)^{T-1}}$$</div><p>\\(\\omega=1\\) : le RI se poursuit indéfiniment ; \\(\\omega=0\\) : il s’arrête après \\(T\\). Moyenne ≈ 0,62.</p></div>",
    "gap": "Persistance plus faible : ROE extrême, éléments exceptionnels, accruals. Plus forte : faible distribution, secteur à rentabilité persistante."
   }
  },
  "eq5-consistency": {
   "zh": {
    "topic": "RI 与 DDM、FCF 的一致性",
    "front": "RI、DDM 和 FCF 模型何时给出相同的价值？",
    "back": "<div class=\"ans\"><p>预测一致且折现率相匹配时（DDM、FCFE、RI 用 \\(r\\)；FCFF 用 WACC）。</p><p>永续例子：DDM 1.00/0.10 = \\$10；RI 6.00 + 0.40/0.10 = \\$10。</p></div>"
   },
   "ja": {
    "topic": "RI と DDM・FCF",
    "front": "RI、DDM、FCF モデルが同じ価値を与えるのはいつか。",
    "back": "<div class=\"ans\"><p>予測が一貫し、割引率が対応しているとき（DDM、FCFE、RI は \\(r\\)、FCFF は WACC）。</p><p>永久の例：DDM 1.00/0.10 = \\$10、RI 6.00 + 0.40/0.10 = \\$10。</p></div>"
   },
   "fr": {
    "topic": "RI, DDM et FCF",
    "front": "Quand les modèles du RI, du DDM et des FCF donnent-ils la même valeur ?",
    "back": "<div class=\"ans\"><p>Avec des prévisions cohérentes et des taux d’actualisation appariés (\\(r\\) pour le DDM, le FCFE et le RI ; WACC pour le FCFF).</p><p>Exemple de perpétuité : DDM 1,00/0,10 = \\$10 ; RI 6,00 + 0,40/0,10 = \\$10.</p></div>"
   }
  },
  "eq5-when": {
   "zh": {
    "topic": "何时使用 RI",
    "front": "RI 模型在什么情况下最适用、最不适用？",
    "back": "<div class=\"ans\"><ul><li><strong>最适用</strong>：不派息或股利不可预测；近期 FCF 为负；终值不确定</li><li><strong>最不适用</strong>：严重违反干净盈余关系；账面价值和 ROE 不可预测</li></ul></div>",
    "gap": "FCF 为正且可预测但不派息 → FCF 模型更合适。"
   },
   "ja": {
    "topic": "RI を使うとき",
    "front": "RI モデルが最も適するのはいつか、最も適さないのはいつか。",
    "back": "<div class=\"ans\"><ul><li><strong>最も適する</strong>：無配または配当が予測できない、近い将来の FCF がマイナス、ターミナル・バリューが不確実</li><li><strong>最も適さない</strong>：クリーン・サープラスからの大きな乖離、簿価と ROE が予測できない</li></ul></div>",
    "gap": "FCF がプラスで予測可能だが無配 → FCF モデルのほうが合う。"
   },
   "fr": {
    "topic": "Quand utiliser le RI",
    "front": "Quand le modèle du RI est-il le plus et le moins approprié ?",
    "back": "<div class=\"ans\"><ul><li><strong>Le plus</strong> : pas de dividende ou dividendes imprévisibles ; FCF négatif à court terme ; valeurs terminales incertaines</li><li><strong>Le moins</strong> : fortes violations du surplus propre ; valeur comptable et ROE imprévisibles</li></ul></div>",
    "gap": "FCF positif et prévisible mais pas de dividende → un modèle de FCF convient mieux."
   }
  },
  "eq5-dirty": {
   "zh": {
    "topic": "违反干净盈余",
    "front": "哪些项目绕过利润表，它们会扭曲什么？",
    "back": "<div class=\"ans\"><ul><li>FVOCI / AFS 的公允价值变动</li><li>外币折算调整</li><li>部分养老金和套期项目</li><li>仅 IFRS：重估盈余；负债自身信用变动</li></ul><p>账面价值是对的，但 <strong>NI 和 ROE 被错报</strong>。</p></div>"
   },
   "ja": {
    "topic": "クリーン・サープラスからの乖離",
    "front": "損益計算書を経由しない項目は何か。それらは何をゆがめるか。",
    "back": "<div class=\"ans\"><ul><li>FVOCI / AFS の公正価値の変動</li><li>為替換算調整</li><li>一部の年金・ヘッジ項目</li><li>IFRS のみ：再評価剰余金、負債の自己の信用リスクの変動</li></ul><p>簿価は正しいが、<strong>NI と ROE がゆがむ</strong>。</p></div>"
   },
   "fr": {
    "topic": "Violations du surplus propre",
    "front": "Quels éléments contournent le compte de résultat, et que faussent-ils ?",
    "back": "<div class=\"ans\"><ul><li>Variations de juste valeur FVOCI / AFS</li><li>Écarts de conversion</li><li>Certains éléments de retraite et de couverture</li><li>IFRS seulement : écart de réévaluation ; variations du risque de crédit propre sur les passifs</li></ul><p>La valeur comptable est juste, mais <strong>le RN et le ROE sont faussés</strong>.</p></div>"
   }
  },
  "eq5-intangibles": {
   "zh": {
    "topic": "无形资产与 RI 模型",
    "front": "确认一项此前遗漏的无形资产并在之后摊销，会改变 RI 价值吗？所收购无形资产的摊销应如何处理？",
    "back": "<div class=\"ans\"><p><strong>不会</strong>：更高的 \\(B_0\\) 被摊销加上资本费用所抵消。</p><p>加回所收购无形资产的摊销（Alpha/Beta：低估的 7,000 → 7,500）。</p></div>"
   },
   "ja": {
    "topic": "無形資産と RI モデル",
    "front": "計上漏れの無形資産を認識し、後に償却すると RI 価値は変わるか。取得した無形資産の償却はどう扱うべきか。",
    "back": "<div class=\"ans\"><p><strong>変わらない</strong>：\\(B_0\\) の増加分は、償却と資本コストで相殺される。</p><p>取得した無形資産の償却は足し戻す（Alpha/Beta：過小な 7,000 → 7,500）。</p></div>"
   },
   "fr": {
    "topic": "Incorporels et modèle du RI",
    "front": "Comptabiliser un incorporel omis puis l’amortir change-t-il la valeur par le RI ? Comment traiter l’amortissement des incorporels acquis ?",
    "back": "<div class=\"ans\"><p><strong>Non</strong> : la hausse de \\(B_0\\) est compensée par l’amortissement et la charge de capital.</p><p>Réintégrez l’amortissement des incorporels acquis (Alpha/Beta : 7 000 sous-estimé → 7 500).</p></div>"
   }
  },
  "eq5-other-adj": {
   "zh": {
    "topic": "其他会计调整",
    "front": "如何处理非经常性项目和激进的会计处理？",
    "back": "<div class=\"ans\"><ul><li>根据<strong>经常性</strong>盈利预测 RI；反复发生的重组可能是经营成本</li><li>激进会计（提前确认收入、费用资本化、饼干罐准备）会虚增盈利和账面价值</li></ul></div>"
   },
   "ja": {
    "topic": "その他の会計上の調整",
    "front": "非経常項目と積極的な会計処理はどう扱うべきか。",
    "back": "<div class=\"ans\"><ul><li><strong>経常的な</strong>利益から RI を予測する。繰り返すリストラは営業費用かもしれない</li><li>積極的な会計（収益の前倒し、費用の資本化、クッキー・ジャー引当金）は利益と簿価をかさ上げする</li></ul></div>"
   },
   "fr": {
    "topic": "Autres ajustements comptables",
    "front": "Comment traiter les éléments non récurrents et une comptabilité agressive ?",
    "back": "<div class=\"ans\"><ul><li>Prévoyez le RI à partir des bénéfices <strong>récurrents</strong> ; une restructuration récurrente peut être un coût opérationnel</li><li>Une comptabilité agressive (chiffre d’affaires anticipé, charges capitalisées, réserves « cookie jar ») gonfle les bénéfices et la valeur comptable</li></ul></div>"
   }
  }
 }
});
