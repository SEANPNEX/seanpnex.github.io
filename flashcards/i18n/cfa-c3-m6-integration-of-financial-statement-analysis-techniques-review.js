deckI18n({
 "source": {
  "zh": "CFA 二级 财务报表分析 · M6 财务报表分析技术的综合运用 · 单元复习",
  "ja": "CFA レベル II 財務諸表分析 · M6 財務諸表分析手法の統合 · 単元の復習",
  "fr": "CFA niveau II Analyse des états financiers · M6 Intégration des techniques d’analyse financière · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "f6-dupont": {
   "zh": {
    "topic": "扩展杜邦分析",
    "front": "写出 ROE 的五因素杜邦分解。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{ROE}={}&\\frac{\\text{NI}}{\\text{EBT}}\\times\\frac{\\text{EBT}}{\\text{EBIT}}\\times\\frac{\\text{EBIT}}{\\text{Rev}}\\\\&\\times\\frac{\\text{Rev}}{\\text{TA}}\\times\\frac{\\text{TA}}{\\text{Equity}}\\end{aligned}$$</div><p>税负 × 利息负担 × EBIT 利润率 × 资产周转率 × 财务杠杆。前三项得出净利润率，前四项得出 ROA。</p></div>",
    "gap": "资产负债表项目使用平均总资产和平均权益。"
   },
   "ja": {
    "topic": "拡張デュポン分析",
    "front": "ROE の 5 要素デュポン分解を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{ROE}={}&\\frac{\\text{NI}}{\\text{EBT}}\\times\\frac{\\text{EBT}}{\\text{EBIT}}\\times\\frac{\\text{EBIT}}{\\text{Rev}}\\\\&\\times\\frac{\\text{Rev}}{\\text{TA}}\\times\\frac{\\text{TA}}{\\text{Equity}}\\end{aligned}$$</div><p>税負担 × 金利負担 × EBIT マージン × 総資産回転率 × 財務レバレッジ。最初の 3 つで純利益率、最初の 4 つで ROA。</p></div>",
    "gap": "貸借対照表の項目には平均総資産と平均資本を使う。"
   },
   "fr": {
    "topic": "DuPont étendu",
    "front": "Écrivez la décomposition DuPont du ROE en cinq facteurs.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{ROE}={}&\\frac{\\text{NI}}{\\text{EBT}}\\times\\frac{\\text{EBT}}{\\text{EBIT}}\\times\\frac{\\text{EBIT}}{\\text{Rev}}\\\\&\\times\\frac{\\text{Rev}}{\\text{TA}}\\times\\frac{\\text{TA}}{\\text{Equity}}\\end{aligned}$$</div><p>Charge fiscale × charge d’intérêts × marge d’EBIT × rotation des actifs × levier financier. Les trois premiers donnent la marge nette, les quatre premiers le ROA.</p></div>",
    "gap": "Utilisez l’actif total moyen et les capitaux propres moyens pour les termes du bilan."
   }
  },
  "f6-associates": {
   "zh": {
    "topic": "杜邦分析 · 剔除联营企业",
    "front": "如何从权益法联营企业中分离出核心业务的 ROE？",
    "back": "<div class=\"ans\"><ul><li>从净利润中减去<strong>联营企业收益</strong></li><li>从总资产中减去<strong>对联营企业的投资</strong></li><li>保持<strong>财务杠杆不变</strong></li></ul></div>",
    "gap": "调整后的资产负债表不再平衡：这是分析工具，而不是会计处理。"
   },
   "ja": {
    "topic": "デュポン分析 · 関連会社の除外",
    "front": "持分法の関連会社から本業の ROE をどう切り分けるか。",
    "back": "<div class=\"ans\"><ul><li>純利益から<strong>関連会社からの利益</strong>を差し引く</li><li>総資産から<strong>関連会社への投資</strong>を差し引く</li><li><strong>財務レバレッジは変えない</strong></li></ul></div>",
    "gap": "調整後の貸借対照表はもはや一致しない：これは分析の道具であり、会計ではない。"
   },
   "fr": {
    "topic": "DuPont · retirer les entreprises associées",
    "front": "Comment isoler le ROE de l’activité principale des entreprises associées mises en équivalence ?",
    "back": "<div class=\"ans\"><ul><li>Retranchez le <strong>résultat des entreprises associées</strong> du résultat net</li><li>Retranchez la <strong>participation dans les entreprises associées</strong> de l’actif total</li><li>Gardez le <strong>levier financier inchangé</strong></li></ul></div>",
    "gap": "Le bilan ajusté n’est plus équilibré : c’est un outil d’analyse, pas de la comptabilité."
   }
  },
  "f6-associates-example": {
   "zh": {
    "topic": "杜邦分析 · 例题",
    "front": "NI 100 包含联营企业收益 9（税后）；EBT 130；总资产 1,250 包含投资 125；杠杆 2.5；收入 1,000。含与不含联营企业的 ROE 分别是多少？",
    "back": "<div class=\"ans\"><ul><li>报告值：\\(100/500=\\) <strong>20.0%</strong></li><li>剔除后：税负 \\(91/130=0.70\\)，周转率 \\(1{,}000/1{,}125=0.889\\) → <strong>20.2%</strong></li></ul><p>联营企业的回报为 \\(9/125=7.2\\%\\)，低于核心业务，因此会<strong>摊薄</strong> ROE。</p></div>",
    "gap": "联营企业收益位于 EBT 之下，因此会抬高报告的税负比率。"
   },
   "ja": {
    "topic": "デュポン分析 · 計算例",
    "front": "NI 100 には関連会社からの利益 9（税引後）が含まれる。EBT 130、総資産 1,250 には投資 125 が含まれる。レバレッジ 2.5、売上高 1,000。関連会社を含む場合と除く場合の ROE を求めよ。",
    "back": "<div class=\"ans\"><ul><li>報告値：\\(100/500=\\) <strong>20.0%</strong></li><li>除外後：税負担 \\(91/130=0.70\\)、回転率 \\(1{,}000/1{,}125=0.889\\) → <strong>20.2%</strong></li></ul><p>関連会社のリターンは \\(9/125=7.2\\%\\) と本業より低いので、ROE を<strong>引き下げて</strong>いる。</p></div>",
    "gap": "関連会社からの利益は EBT より下にあるため、報告上の税負担比率をかさ上げする。"
   },
   "fr": {
    "topic": "DuPont · exemple",
    "front": "Un RN de 100 inclut un résultat des entreprises associées de 9 (après impôt) ; EBT 130 ; l’actif total de 1 250 inclut une participation de 125 ; levier 2,5 ; chiffre d’affaires 1 000. Quel est le ROE avec et sans les entreprises associées ?",
    "back": "<div class=\"ans\"><ul><li>Publié : \\(100/500=\\) <strong>20,0 %</strong></li><li>Hors associées : charge fiscale \\(91/130=0.70\\), rotation \\(1{,}000/1{,}125=0.889\\) → <strong>20,2 %</strong></li></ul><p>Les entreprises associées rapportent \\(9/125=7.2\\%\\), moins que l’activité principale : elles <strong>diluent</strong> le ROE.</p></div>",
    "gap": "Le résultat des entreprises associées se situe sous l’EBT et gonfle donc la charge fiscale publiée."
   }
  },
  "f6-capex": {
   "zh": {
    "topic": "资本配置",
    "front": "如何利用分部数据检验资本配置是否支持战略？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Capex ratio}=\\frac{\\text{Segment capex share}}{\\text{Segment asset share}}$$</div><ul><li><strong>高于 1</strong>：扩张该分部；<strong>低于 1</strong>：收割该分部</li><li>与各分部的<strong>回报</strong>（EBIT / 资产）比较：资本应流向回报最高或前景最好的分部</li></ul></div>",
    "gap": "回报低却仍获得相应资本支出份额的分部，是重组的候选对象。"
   },
   "ja": {
    "topic": "資本配分",
    "front": "セグメント情報を使って、資本配分が戦略を支えているかをどう検証するか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Capex ratio}=\\frac{\\text{Segment capex share}}{\\text{Segment asset share}}$$</div><ul><li><strong>1 超</strong>：セグメントを拡大している、<strong>1 未満</strong>：収穫している</li><li>各セグメントの<strong>リターン</strong>（EBIT / 資産）と比べる：資本は最もリターンの高い、または見通しのよいところへ向かうべき</li></ul></div>",
    "gap": "リターンが低いのに設備投資の配分を受け続けるセグメントは、リストラの候補。"
   },
   "fr": {
    "topic": "Allocation du capital",
    "front": "Comment vérifier, avec les données sectorielles, que l’allocation du capital soutient la stratégie ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{Capex ratio}=\\frac{\\text{Segment capex share}}{\\text{Segment asset share}}$$</div><ul><li><strong>Au-dessus de 1</strong> : le segment se développe ; <strong>en dessous de 1</strong> : il est exploité pour sa trésorerie</li><li>Comparez avec le <strong>rendement</strong> de chaque segment (EBIT / actifs) : le capital doit aller aux rendements ou aux perspectives les plus élevés</li></ul></div>",
    "gap": "Un segment peu rentable qui reçoit toujours sa part d’investissements est candidat à une restructuration."
   }
  },
  "f6-noa": {
   "zh": {
    "topic": "应计项目 · 净经营资产",
    "front": "定义净经营资产。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{NOA}={}&(\\text{TA}-\\text{Cash and ST inv.})\\\\&-(\\text{TL}-\\text{Total debt})\\end{aligned}$$</div><p>经营资产减去经营负债：融资项目（现金和债务）被排除在外。</p></div>"
   },
   "ja": {
    "topic": "発生高 · 純営業資産",
    "front": "純営業資産を定義せよ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{NOA}={}&(\\text{TA}-\\text{Cash and ST inv.})\\\\&-(\\text{TL}-\\text{Total debt})\\end{aligned}$$</div><p>営業資産から営業負債を引いたもの：財務項目（現金と債務）は除く。</p></div>"
   },
   "fr": {
    "topic": "Accruals · actifs opérationnels nets",
    "front": "Définissez les actifs opérationnels nets.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\begin{aligned}\\text{NOA}={}&(\\text{TA}-\\text{Cash and ST inv.})\\\\&-(\\text{TL}-\\text{Total debt})\\end{aligned}$$</div><p>Actifs opérationnels moins passifs opérationnels : les éléments de financement, trésorerie et dette, sont exclus.</p></div>"
   }
  },
  "f6-accruals": {
   "zh": {
    "topic": "应计项目 · 两种方法",
    "front": "给出资产负债表法和现金流量法下的总应计项目。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{AA}_{\\text{B/S}}=\\text{NOA}_t-\\text{NOA}_{t-1}$$</div><div class=\"eq-block\">$$\\text{AA}_{\\text{CF}}=\\text{NI}-(\\text{CFO}+\\text{CFI})$$</div><p>除以平均 NOA 得到<strong>应计比率</strong>；越低表示盈利质量越高。</p></div>",
    "gap": "收购、外币折算和非现金交易会使两种方法结果不同：比较趋势时只用一种方法。"
   },
   "ja": {
    "topic": "発生高 · 2 つのアプローチ",
    "front": "貸借対照表アプローチとキャッシュフロー・アプローチによる総発生高を示せ。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{AA}_{\\text{B/S}}=\\text{NOA}_t-\\text{NOA}_{t-1}$$</div><div class=\"eq-block\">$$\\text{AA}_{\\text{CF}}=\\text{NI}-(\\text{CFO}+\\text{CFI})$$</div><p>平均 NOA で割ると<strong>発生高比率</strong>。低いほど利益の質が高い。</p></div>",
    "gap": "買収、外貨換算、非現金取引により 2 つのアプローチは食い違う。トレンドの比較には 1 つのアプローチを使う。"
   },
   "fr": {
    "topic": "Accruals · deux approches",
    "front": "Donnez le total des accruals selon l’approche bilancielle et l’approche par les flux de trésorerie.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\text{AA}_{\\text{B/S}}=\\text{NOA}_t-\\text{NOA}_{t-1}$$</div><div class=\"eq-block\">$$\\text{AA}_{\\text{CF}}=\\text{NI}-(\\text{CFO}+\\text{CFI})$$</div><p>Divisez par les NOA moyens pour obtenir le <strong>ratio d’accruals</strong> ; plus il est bas, plus la qualité des bénéfices est élevée.</p></div>",
    "gap": "Acquisitions, conversion de change et opérations non monétaires font diverger les deux approches : comparez les tendances avec une seule approche."
   }
  },
  "f6-accruals-example": {
   "zh": {
    "topic": "应计项目 · 例题",
    "front": "NOA 从 1,000 增至 1,200；NI 为 150，CFO 120，CFI −100。计算两种应计比率。",
    "back": "<div class=\"ans\"><ul><li>资产负债表法：\\(200/1{,}100=\\) <strong>18.2%</strong></li><li>现金流量法：\\(150-(120-100)=130\\) → \\(130/1{,}100=\\) <strong>11.8%</strong></li></ul></div>"
   },
   "ja": {
    "topic": "発生高 · 計算例",
    "front": "NOA が 1,000 から 1,200 に増加。NI 150、CFO 120、CFI −100。両方の発生高比率を計算せよ。",
    "back": "<div class=\"ans\"><ul><li>B/S：\\(200/1{,}100=\\) <strong>18.2%</strong></li><li>CF：\\(150-(120-100)=130\\) → \\(130/1{,}100=\\) <strong>11.8%</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Accruals · exemple",
    "front": "Les NOA passent de 1 000 à 1 200 ; le RN est de 150, le CFO de 120 et le CFI de −100. Calculez les deux ratios d’accruals.",
    "back": "<div class=\"ans\"><ul><li>Bilan : \\(200/1{,}100=\\) <strong>18,2 %</strong></li><li>Flux : \\(150-(120-100)=130\\) → \\(130/1{,}100=\\) <strong>11,8 %</strong></li></ul></div>"
   }
  },
  "f6-cfo-ebit": {
   "zh": {
    "topic": "现金流 · CFO 与 EBIT",
    "front": "为什么把 CFO 与 EBIT 比较之前必须调整 CFO？EBIT 150，CFO 100，支付利息 20，支付税款 30。",
    "back": "<div class=\"ans\"><p>CFO 是扣除已付利息和税款<strong>之后</strong>的数字；EBIT 是之前的。把它们加回：</p><div class=\"eq-block\">$$100+20+30=150,\\quad 150/150=1.0$$</div></div>",
    "gap": "在 IFRS 下，如果支付的利息归入 CFF，则不加回。"
   },
   "ja": {
    "topic": "キャッシュフロー · CFO と EBIT",
    "front": "CFO を EBIT と比べる前に、なぜ CFO を調整しなければならないか。EBIT 150、CFO 100、支払利息 20、法人税支払額 30。",
    "back": "<div class=\"ans\"><p>CFO は支払利息と法人税を差し引いた<strong>後</strong>、EBIT はその前。足し戻す：</p><div class=\"eq-block\">$$100+20+30=150,\\quad 150/150=1.0$$</div></div>",
    "gap": "IFRS で支払利息を CFF に分類している場合は足し戻さない。"
   },
   "fr": {
    "topic": "Flux de trésorerie · CFO et EBIT",
    "front": "Pourquoi faut-il ajuster le CFO avant de le comparer à l’EBIT ? EBIT 150, CFO 100, intérêts payés 20, impôts payés 30.",
    "back": "<div class=\"ans\"><p>Le CFO est <strong>après</strong> intérêts et impôts payés ; l’EBIT est avant. Réintégrez-les :</p><div class=\"eq-block\">$$100+20+30=150,\\quad 150/150=1.0$$</div></div>",
    "gap": "En IFRS, si les intérêts payés sont classés en CFF, on ne les réintègre pas."
   }
  },
  "f6-cf-ratios": {
   "zh": {
    "topic": "现金流 · 比率",
    "front": "CFO / EBIT、CFO / 总资产、CFO / 利息、CFO / 债务和 CFO / 资本支出分别说明什么？",
    "back": "<div class=\"ans\"><ul><li><strong>CFO / EBIT</strong>：营业利润的现金转化</li><li><strong>CFO / 总资产</strong>：资产的现金回报</li><li><strong>CFO / 现金利息</strong>：利息保障</li><li><strong>CFO / 债务</strong>：偿债能力</li><li><strong>CFO / 资本支出</strong>：高于 1 = 投资由内部资金支持</li></ul></div>"
   },
   "ja": {
    "topic": "キャッシュフロー · 比率",
    "front": "CFO / EBIT、CFO / 総資産、CFO / 利息、CFO / 債務、CFO / 設備投資はそれぞれ何を示すか。",
    "back": "<div class=\"ans\"><ul><li><strong>CFO / EBIT</strong>：営業利益の現金化</li><li><strong>CFO / 総資産</strong>：資産の現金リターン</li><li><strong>CFO / 現金利息</strong>：インタレスト・カバレッジ</li><li><strong>CFO / 債務</strong>：債務返済能力</li><li><strong>CFO / 設備投資</strong>：1 超 = 投資を内部資金で賄っている</li></ul></div>"
   },
   "fr": {
    "topic": "Flux de trésorerie · ratios",
    "front": "Que montrent CFO / EBIT, CFO / actif total, CFO / intérêts, CFO / dette et CFO / investissements ?",
    "back": "<div class=\"ans\"><ul><li><strong>CFO / EBIT</strong> : conversion en trésorerie du résultat opérationnel</li><li><strong>CFO / actif total</strong> : rendement en trésorerie des actifs</li><li><strong>CFO / intérêts payés</strong> : couverture des intérêts</li><li><strong>CFO / dette</strong> : capacité à rembourser la dette</li><li><strong>CFO / investissements</strong> : au-dessus de 1 = investissement autofinancé</li></ul></div>"
   }
  },
  "f6-mv": {
   "zh": {
    "topic": "市值分解",
    "front": "市值 2,000，NI 100；持有一家上市联营企业 30% 的股权，价值 1,000（应占其盈利 9）。剔除联营企业后隐含的 P/E 是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{2{,}000-300}{100-9}=\\frac{1{,}700}{91}=18.7$$</div><p>该股权的估值为盈利的 \\(300/9=33.3\\times\\)；核心业务只有 18.7 倍，低于表面上的 20 倍 P/E。</p></div>",
    "gap": "表面 P/E 可能高估了市场对公司自身业务的估值。"
   },
   "ja": {
    "topic": "時価総額の分解",
    "front": "時価総額 2,000、NI 100。価値 1,000 の上場関連会社の株式 30% を保有（持分利益 9）。関連会社を除いたインプライド P/E はいくらか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{2{,}000-300}{100-9}=\\frac{1{,}700}{91}=18.7$$</div><p>持分は利益の \\(300/9=33.3\\times\\) で評価されている。本業はわずか 18.7 倍で、見かけの P/E 20 倍を下回る。</p></div>",
    "gap": "見かけの P/E は、市場が自社事業をどう評価しているかを過大に示しうる。"
   },
   "fr": {
    "topic": "Décomposition de la valeur de marché",
    "front": "Valeur de marché 2 000, RN 100 ; une participation de 30 % dans une entreprise associée cotée valant 1 000 (quote-part de ses bénéfices 9). Quel est le P/E implicite hors entreprise associée ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\frac{2{,}000-300}{100-9}=\\frac{1{,}700}{91}=18.7$$</div><p>La participation est valorisée à \\(300/9=33.3\\times\\) les bénéfices ; l’activité principale à seulement 18,7×, sous le P/E affiché de 20.</p></div>",
    "gap": "Le P/E affiché peut surestimer la valeur que le marché attribue aux activités propres de la société."
   }
  },
  "f6-obs": {
   "zh": {
    "topic": "表外融资",
    "front": "IFRS 16 / ASC 842 之后还剩哪些表外义务？如何调整？",
    "back": "<div class=\"ans\"><ul><li>采购承诺（照付不议合同）</li><li>为其他主体的债务提供的担保</li><li>负有大额债务的未合并合营企业和联营企业</li><li>附追索权出售的应收款</li></ul><p>把它们的现值加到债务中，然后重新计算杠杆和保障比率。</p></div>"
   },
   "ja": {
    "topic": "オフバランス・ファイナンス",
    "front": "IFRS 16 / ASC 842 の後も残るオフバランスの債務は何か。どう調整するか。",
    "back": "<div class=\"ans\"><ul><li>購入契約（テイク・オア・ペイ契約）</li><li>他の事業体の債務の保証</li><li>多額の債務を抱える非連結の合弁会社・関連会社</li><li>遡求権付きで売却した売掛金</li></ul><p>それらの現在価値を債務に加え、レバレッジとカバレッジを再計算する。</p></div>"
   },
   "fr": {
    "topic": "Financement hors bilan",
    "front": "Quelles obligations hors bilan subsistent après IFRS 16 / ASC 842, et comment les ajuster ?",
    "back": "<div class=\"ans\"><ul><li>Engagements d’achat (contrats take-or-pay)</li><li>Garanties de la dette d’autres entités</li><li>Coentreprises et entreprises associées non consolidées fortement endettées</li><li>Créances cédées avec recours</li></ul><p>Ajoutez leur valeur actuelle à la dette, puis recalculez levier et couverture.</p></div>"
   }
  },
  "f6-standards": {
   "zh": {
    "topic": "会计准则变更",
    "front": "会计准则变更如何扭曲趋势？分析师应怎么做？",
    "back": "<div class=\"ans\"><p>例：IFRS 16 将租赁纳入资产负债表，资产和债务增加，且<strong>EBITDA 上升</strong>，因为租赁费用变成了折旧和利息。</p><ul><li>阅读<strong>过渡期披露</strong></li><li>检查<strong>以前期间是否已重述</strong></li><li><strong>重述</strong>或调整以前期间，使趋势反映业务本身</li></ul></div>",
    "gap": "采用当年 EBITDA 的跳升可能纯属会计影响。"
   },
   "ja": {
    "topic": "会計基準の変更",
    "front": "会計基準の変更はトレンドをどうゆがめうるか。アナリストは何をすべきか。",
    "back": "<div class=\"ans\"><p>例：IFRS 16 でリースが貸借対照表に載り、資産と債務が増え、リース費用が減価償却と利息に変わったため <strong>EBITDA が増加</strong>した。</p><ul><li><strong>移行時の開示</strong>を読む</li><li><strong>過去の期間が修正再表示されたか</strong>を確認する</li><li>トレンドが事業を反映するよう、過去の期間を<strong>修正再表示</strong>または調整する</li></ul></div>",
    "gap": "適用初年度の EBITDA の急増は、単なる会計上の影響かもしれない。"
   },
   "fr": {
    "topic": "Changements de normes comptables",
    "front": "Comment un changement de normes comptables peut-il fausser une tendance, et que doit faire l’analyste ?",
    "back": "<div class=\"ans\"><p>Exemple : IFRS 16 a inscrit les contrats de location au bilan, d’où une hausse des actifs et de la dette, et une <strong>hausse de l’EBITDA</strong>, car la charge de loyer est devenue amortissement et intérêts.</p><ul><li>Lisez les <strong>informations de transition</strong></li><li>Vérifiez si les <strong>périodes antérieures ont été retraitées</strong></li><li><strong>Retraitez</strong> ou ajustez les périodes antérieures pour que la tendance reflète l’activité</li></ul></div>",
    "gap": "Un bond de l’EBITDA l’année d’adoption peut être un pur effet comptable."
   }
  }
 }
});
