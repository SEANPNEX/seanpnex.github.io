deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M3 模型设定错误 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M3 モデルの特定の誤り · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M3 Erreurs de spécification · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q3-forms": {
   "zh": {
    "topic": "设定错误 · 形式",
    "front": "说出模型设定错误的六种常见形式。",
    "back": "<div class=\"ans\"><ul><li>遗漏相关变量</li><li>纳入无关变量</li><li>函数形式错误</li><li>变量定义或尺度错误</li><li>不恰当的数据合并</li><li>内生的解释变量</li></ul></div>"
   },
   "ja": {
    "topic": "特定の誤り · 形態",
    "front": "モデルの特定の誤りでよくある 6 つの形態を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>関連する変数の欠落</li><li>無関係な変数の追加</li><li>誤った関数形</li><li>変数の定義や尺度の誤り</li><li>不適切なデータのプーリング</li><li>内生的な説明変数</li></ul></div>"
   },
   "fr": {
    "topic": "Mauvaise spécification · formes",
    "front": "Citez les six formes courantes de mauvaise spécification d’un modèle.",
    "back": "<div class=\"ans\"><ul><li>Variable pertinente omise</li><li>Variable non pertinente incluse</li><li>Forme fonctionnelle incorrecte</li><li>Définition ou échelle de variable incorrecte</li><li>Regroupement de données inapproprié</li><li>Variable explicative endogène</li></ul></div>"
   }
  },
  "q3-ovb": {
   "zh": {
    "topic": "设定错误 · 遗漏变量",
    "front": "遗漏一个变量在什么情况下会使已纳入的斜率系数产生偏差？",
    "back": "<div class=\"ans\"><p>当以下<strong>两个</strong>条件都成立时：</p><ul><li>被遗漏的变量<strong>影响 \\(Y\\)</strong>，并且</li><li>它<strong>与已纳入的预测变量相关</strong>。</li></ul><p>如果它与已纳入的预测变量不相关，只会增加未解释的方差。</p></div>",
    "gap": "遗漏变量偏差使系数有偏且不一致；稳健标准误无法修正它。"
   },
   "ja": {
    "topic": "特定の誤り · 変数の欠落",
    "front": "変数を欠落させると、含まれている傾きの係数に偏りが生じるのはどんなときか。",
    "back": "<div class=\"ans\"><p>次の<strong>両方</strong>が成り立つとき：</p><ul><li>欠落した変数が <strong>\\(Y\\) に影響する</strong>、かつ</li><li>それが<strong>含まれている説明変数と相関している</strong>。</li></ul><p>含まれている説明変数と無相関なら、説明されない分散が増えるだけ。</p></div>",
    "gap": "欠落変数バイアスで係数は偏りがあり一致性もなくなる；頑健な標準誤差では直らない。"
   },
   "fr": {
    "topic": "Mauvaise spécification · variable omise",
    "front": "Quand l’omission d’une variable biaise-t-elle une pente incluse ?",
    "back": "<div class=\"ans\"><p>Quand les <strong>deux</strong> conditions sont réunies :</p><ul><li>la variable omise <strong>influence \\(Y\\)</strong>, et</li><li>elle est <strong>corrélée au prédicteur inclus</strong>.</li></ul><p>Si elle n’est pas corrélée aux prédicteurs inclus, elle ne fait qu’augmenter la variance non expliquée.</p></div>",
    "gap": "Le biais de variable omise rend les coefficients biaisés et non convergents ; les erreurs-types robustes ne le corrigent pas."
   }
  },
  "q3-irrelevant": {
   "zh": {
    "topic": "设定错误 · 无关变量",
    "front": "纳入一个无关变量对 OLS 估计有什么影响？",
    "back": "<div class=\"ans\"><p>OLS 仍然<strong>无偏</strong>（其他假设成立时），但系数估计可能变得<strong>不那么精确</strong>。</p></div>"
   },
   "ja": {
    "topic": "特定の誤り · 無関係な変数",
    "front": "無関係な変数を含めると、OLS の推定値はどうなるか。",
    "back": "<div class=\"ans\"><p>OLS は<strong>不偏</strong>のまま（他の仮定が成り立てば）だが、係数の推定値の<strong>精度が下がる</strong>ことがある。</p></div>"
   },
   "fr": {
    "topic": "Mauvaise spécification · variable non pertinente",
    "front": "Quel est l’effet de l’inclusion d’une variable non pertinente sur les estimations MCO ?",
    "back": "<div class=\"ans\"><p>Les MCO restent <strong>sans biais</strong> (les autres hypothèses tenant), mais les estimations des coefficients peuvent devenir <strong>moins précises</strong>.</p></div>"
   }
  },
  "q3-pooling-endog": {
   "zh": {
    "topic": "设定错误 · 合并与内生性",
    "front": "(1) 不恰当的合并和 (2) 内生的预测变量分别会带来什么问题？",
    "back": "<div class=\"ans\"><ul><li>把截距或斜率不同的组<strong>合并</strong>，会掩盖结构差异，使系数不稳定。可用指示变量、交互项、面板方法或分别建模来修正。</li><li><strong>内生性</strong>（与 \\(Y\\) 共同决定，或存在测量误差）导致 \\(E(\\varepsilon\\mid X)\\ne0\\)：OLS <strong>有偏且不一致</strong>。可通过更好的设计或工具变量修正。</li></ul></div>"
   },
   "ja": {
    "topic": "特定の誤り · プーリングと内生性",
    "front": "(1) 不適切なプーリングと (2) 内生的な説明変数では、何が問題になるか。",
    "back": "<div class=\"ans\"><ul><li>切片や傾きが異なるグループを<strong>プーリング</strong>すると、構造の違いが隠れ、係数が不安定になる。指標変数、交互作用、パネル手法、別々のモデルで対処する。</li><li><strong>内生性</strong>（\\(Y\\) と同時に決まる、または測定誤差がある）では \\(E(\\varepsilon\\mid X)\\ne0\\) となり、OLS は<strong>偏りがあり一致性もない</strong>。より良い設計や操作変数で対処する。</li></ul></div>"
   },
   "fr": {
    "topic": "Mauvaise spécification · regroupement et endogénéité",
    "front": "Qu’est-ce qui ne va pas avec (1) un regroupement inapproprié et (2) un prédicteur endogène ?",
    "back": "<div class=\"ans\"><ul><li><strong>Regrouper</strong> des groupes aux constantes ou pentes différentes masque les différences structurelles et donne des coefficients instables. Corriger avec des indicatrices, des interactions, des méthodes de panel ou des modèles séparés.</li><li>L’<strong>endogénéité</strong> (déterminé conjointement avec \\(Y\\), ou mesuré avec erreur) donne \\(E(\\varepsilon\\mid X)\\ne0\\) : MCO <strong>biaisés et non convergents</strong>. Corriger par un meilleur protocole ou des variables instrumentales.</li></ul></div>"
   }
  },
  "q3-form-tests": {
   "zh": {
    "topic": "检查 · 函数形式与结构突变",
    "front": "哪些检验分别用于检查函数形式、一组额外项和已知的结构突变？",
    "back": "<div class=\"ans\"><ul><li><strong>Ramsey RESET</strong>：一般的函数形式问题（不会指出缺了哪一项）</li><li><strong>受约束 F 检验</strong>：多项式项、交互项或组别项是否联合显著</li><li><strong>Chow 检验</strong>：针对<strong>已知断点</strong>的受约束 F 检验</li></ul></div>"
   },
   "ja": {
    "topic": "確認 · 関数形と構造変化",
    "front": "関数形、追加項のグループ、既知の構造変化を確認する検定はそれぞれ何か。",
    "back": "<div class=\"ans\"><ul><li><strong>Ramsey RESET</strong>：関数形の一般的な問題（どの項が欠けているかは示さない）</li><li><strong>制約付き F 検定</strong>：多項式・交互作用・グループの項が同時に有意か</li><li><strong>Chow 検定</strong>：<strong>既知の変化点</strong>についての制約付き F 検定</li></ul></div>"
   },
   "fr": {
    "topic": "Contrôles · forme fonctionnelle et ruptures",
    "front": "Quels tests vérifient la forme fonctionnelle, des groupes de termes supplémentaires et une rupture structurelle connue ?",
    "back": "<div class=\"ans\"><ul><li><strong>RESET de Ramsey</strong> : problèmes généraux de forme fonctionnelle (n’indique pas quel terme manque)</li><li><strong>Test F contraint</strong> : si des termes polynomiaux, d’interaction ou de groupe sont conjointement significatifs</li><li><strong>Test de Chow</strong> : un test F contraint pour un <strong>point de rupture connu</strong></li></ul></div>"
   }
  },
  "q3-hetero-types": {
   "zh": {
    "topic": "异方差 · 类型",
    "front": "无条件异方差与条件异方差：哪一种是问题？为什么？",
    "back": "<div class=\"ans\"><ul><li><strong>无条件</strong>：方差变化的原因与 \\(X\\) 无关；一般<strong>不会造成重大的推断问题</strong>。</li><li><strong>条件</strong>：方差与 \\(X\\) 相关；常规标准误变得不可靠，<strong>通常偏小</strong>，使 \\(t\\) 统计量被夸大，更容易犯<strong>第一类错误</strong>。</li></ul></div>",
    "gap": "系数仍然无偏（在外生性下）；受影响的只有标准误和有效性。"
   },
   "ja": {
    "topic": "不均一分散 · 種類",
    "front": "無条件の不均一分散と条件付きの不均一分散：問題になるのはどちらか、なぜか。",
    "back": "<div class=\"ans\"><ul><li><strong>無条件</strong>：分散が \\(X\\) と無関係な理由で変わる；一般に<strong>推論上の大きな問題はない</strong>。</li><li><strong>条件付き</strong>：分散が \\(X\\) と関係する；通常の標準誤差は信頼できなくなり、<strong>たいてい小さすぎる</strong>ので、\\(t\\) 統計量が過大になり<strong>第 1 種の誤り</strong>が起きやすい。</li></ul></div>",
    "gap": "係数は不偏のまま（外生性の下で）；損なわれるのは標準誤差と効率性だけ。"
   },
   "fr": {
    "topic": "Hétéroscédasticité · types",
    "front": "Hétéroscédasticité inconditionnelle ou conditionnelle : laquelle pose problème, et pourquoi ?",
    "back": "<div class=\"ans\"><ul><li><strong>Inconditionnelle</strong> : la variance varie pour des raisons sans lien avec les \\(X\\) ; en général <strong>pas de problème majeur d’inférence</strong>.</li><li><strong>Conditionnelle</strong> : la variance est liée aux \\(X\\) ; les erreurs-types usuelles deviennent peu fiables, <strong>en général trop petites</strong>, si bien que les \\(t\\) sont gonflés et les <strong>erreurs de type I</strong> plus probables.</li></ul></div>",
    "gap": "Les coefficients restent sans biais (sous exogénéité) ; seules les erreurs-types et l’efficacité en souffrent."
   }
  },
  "q3-bp": {
   "zh": {
    "topic": "异方差 · Breusch–Pagan",
    "front": "描述 Breusch–Pagan 检验：原假设、辅助回归和统计量。",
    "back": "<div class=\"ans\"><p>\\(H_0\\)：误差<strong>同方差</strong>（无条件异方差）。</p><p>把<strong>残差的平方</strong>对 \\(k\\) 个预测变量回归，然后</p><div class=\"eq-block\">$$LM=nR^2_{\\text{aux}}\\sim\\chi^2_k$$</div><p>\\(LM\\) 大（\\(p\\) 小）支持存在条件异方差。</p></div>"
   },
   "ja": {
    "topic": "不均一分散 · Breusch–Pagan",
    "front": "Breusch–Pagan 検定を説明せよ：帰無仮説、補助回帰、統計量。",
    "back": "<div class=\"ans\"><p>\\(H_0\\)：誤差は<strong>均一分散</strong>（条件付き不均一分散はない）。</p><p><strong>残差の二乗</strong>を \\(k\\) 個の説明変数に回帰し、</p><div class=\"eq-block\">$$LM=nR^2_{\\text{aux}}\\sim\\chi^2_k$$</div><p>\\(LM\\) が大きい（\\(p\\) が小さい）なら条件付き不均一分散を示す。</p></div>"
   },
   "fr": {
    "topic": "Hétéroscédasticité · Breusch–Pagan",
    "front": "Décrivez le test de Breusch–Pagan : hypothèse nulle, régression auxiliaire, statistique.",
    "back": "<div class=\"ans\"><p>\\(H_0\\) : erreurs <strong>homoscédastiques</strong> (pas d’hétéroscédasticité conditionnelle).</p><p>Régresser les <strong>résidus au carré</strong> sur les \\(k\\) prédicteurs, puis</p><div class=\"eq-block\">$$LM=nR^2_{\\text{aux}}\\sim\\chi^2_k$$</div><p>Un \\(LM\\) élevé (petit \\(p\\)) indique une hétéroscédasticité conditionnelle.</p></div>"
   }
  },
  "q3-hetero-fix": {
   "zh": {
    "topic": "异方差 · 应对",
    "front": "如何应对条件异方差？稳健标准误会改变系数吗？",
    "back": "<div class=\"ans\"><ul><li>用<strong>稳健（White）标准误</strong>修正推断</li><li>如果方差结构可以建模，用<strong>加权 / 广义最小二乘</strong></li><li>重新审视<strong>函数形式</strong>（缺少的变换或变量）</li></ul><p>稳健标准误只改变<strong>标准误</strong>，不改变系数或拟合值。</p></div>"
   },
   "ja": {
    "topic": "不均一分散 · 対処",
    "front": "条件付き不均一分散にはどう対処するか。頑健な標準誤差は係数を変えるか。",
    "back": "<div class=\"ans\"><ul><li>推論を修正するために<strong>頑健（White）標準誤差</strong></li><li>分散の構造をモデル化できるなら<strong>加重 / 一般化最小二乗法</strong></li><li><strong>関数形</strong>を見直す（欠けている変換や変数）</li></ul><p>頑健な標準誤差が変えるのは<strong>標準誤差</strong>だけで、係数や予測値は変わらない。</p></div>"
   },
   "fr": {
    "topic": "Hétéroscédasticité · réponses",
    "front": "Comment réagir à une hétéroscédasticité conditionnelle ? Les erreurs-types robustes changent-elles les coefficients ?",
    "back": "<div class=\"ans\"><ul><li><strong>Erreurs-types robustes (White)</strong> pour corriger l’inférence</li><li><strong>Moindres carrés pondérés / généralisés</strong> si la structure de variance peut être modélisée</li><li>Revoir la <strong>forme fonctionnelle</strong> (transformation ou variable manquante)</li></ul><p>Les erreurs-types robustes ne changent que les <strong>erreurs-types</strong>, pas les coefficients ni les valeurs ajustées.</p></div>"
   }
  },
  "q3-serial-patterns": {
   "zh": {
    "topic": "序列相关 · 形态与影响",
    "front": "正序列相关和负序列相关在残差中是什么样子？对 OLS 有什么影响？",
    "back": "<div class=\"ans\"><ul><li><strong>正</strong>（\\(\\rho>0\\)）：持续地在零上方或下方成串出现</li><li><strong>负</strong>（\\(\\rho<0\\)）：符号交替，呈锯齿状</li></ul><p>在严格外生性下，斜率仍然无偏但<strong>无效</strong>；标准误不可靠（正序列相关通常使其<strong>偏小</strong>）。</p></div>",
    "gap": "如果回归变量中有滞后因变量，序列相关还会使 OLS 系数不一致。"
   },
   "ja": {
    "topic": "系列相関 · パターンと影響",
    "front": "正と負の系列相関は残差でどう見え、OLS にどう影響するか。",
    "back": "<div class=\"ans\"><ul><li><strong>正</strong>（\\(\\rho>0\\)）：ゼロの上または下に連続して並ぶ</li><li><strong>負</strong>（\\(\\rho<0\\)）：符号が交互に変わるジグザグ</li></ul><p>強外生性の下では傾きは不偏のままだが<strong>非効率</strong>；標準誤差は信頼できない（正の系列相関ではたいてい<strong>過小</strong>）。</p></div>",
    "gap": "説明変数にラグ付き従属変数があると、系列相関で OLS の係数も一致性を失う。"
   },
   "fr": {
    "topic": "Autocorrélation · formes et effets",
    "front": "À quoi ressemblent une autocorrélation positive et une négative dans les résidus, et quel est leur effet sur les MCO ?",
    "back": "<div class=\"ans\"><ul><li><strong>Positive</strong> (\\(\\rho>0\\)) : séquences persistantes au-dessus ou en dessous de zéro</li><li><strong>Négative</strong> (\\(\\rho<0\\)) : signes alternés, en zigzag</li></ul><p>Sous exogénéité stricte, les pentes restent sans biais mais sont <strong>inefficaces</strong> ; les erreurs-types sont peu fiables (une autocorrélation positive les <strong>sous-estime</strong> en général).</p></div>",
    "gap": "Avec une variable dépendante retardée parmi les régresseurs, l’autocorrélation rend aussi les coefficients MCO non convergents."
   }
  },
  "q3-dw": {
   "zh": {
    "topic": "序列相关 · Durbin–Watson",
    "front": "如何解读 Durbin–Watson 统计量？什么时候它无效？",
    "back": "<div class=\"ans\"><p>\\(0\\le DW\\le4\\)：\\(DW\\approx2\\) 一阶相关很小；\\(DW<2\\) 为<strong>正</strong>；\\(DW>2\\) 为<strong>负</strong>。正式检验使用上下界，可能得不出结论。</p><p>当<strong>滞后因变量</strong>是回归变量时，标准形式<strong>无效</strong>；而且它只检验一阶。</p></div>"
   },
   "ja": {
    "topic": "系列相関 · Durbin–Watson",
    "front": "Durbin–Watson 統計量はどう読むか。有効でないのはどんなときか。",
    "back": "<div class=\"ans\"><p>\\(0\\le DW\\le4\\)：\\(DW\\approx2\\) なら 1 次の相関はほとんどない；\\(DW<2\\) は<strong>正</strong>；\\(DW>2\\) は<strong>負</strong>。正式な検定は下限と上限を使い、結論が出ないこともある。</p><p><strong>ラグ付き従属変数</strong>が説明変数にあると標準形は<strong>有効でない</strong>。また 1 次しか検定しない。</p></div>"
   },
   "fr": {
    "topic": "Autocorrélation · Durbin–Watson",
    "front": "Comment lire une statistique de Durbin–Watson, et quand n’est-elle pas valide ?",
    "back": "<div class=\"ans\"><p>\\(0\\le DW\\le4\\) : \\(DW\\approx2\\) peu de corrélation d’ordre 1 ; \\(DW<2\\) <strong>positive</strong> ; \\(DW>2\\) <strong>négative</strong>. Le test formel utilise des bornes inférieure et supérieure et peut être non concluant.</p><p><strong>Non valide</strong> sous sa forme standard quand une <strong>variable dépendante retardée</strong> est un régresseur, et il ne teste que l’ordre 1.</p></div>"
   }
  },
  "q3-bg": {
   "zh": {
    "topic": "序列相关 · Breusch–Godfrey",
    "front": "Breusch–Godfrey 检验如何进行？为什么要在辅助回归中保留原来的回归变量？",
    "back": "<div class=\"ans\"><p>把残差对原来的 \\(X\\) <strong>加上 \\(p\\) 个滞后残差</strong>回归；用 F 检验检验 \\(H_0:\\rho_1=\\cdots=\\rho_p=0\\)，\\(df=(p,\\;n_{\\text{aux}}-k-p-1)\\)。</p><p>保留 \\(X\\) 是在问：<strong>控制了模型的变量之后，滞后残差还能解释当期残差吗？</strong></p></div>",
    "gap": "拒绝意味着在所检验的一个或多个滞后阶上存在相关，而不是每个滞后阶都有。"
   },
   "ja": {
    "topic": "系列相関 · Breusch–Godfrey",
    "front": "Breusch–Godfrey 検定はどう行うか。補助回帰に元の説明変数を残すのはなぜか。",
    "back": "<div class=\"ans\"><p>残差を元の \\(X\\) <strong>と \\(p\\) 個のラグ付き残差</strong>に回帰し、F 検定で \\(H_0:\\rho_1=\\cdots=\\rho_p=0\\) を検定する。\\(df=(p,\\;n_{\\text{aux}}-k-p-1)\\)。</p><p>\\(X\\) を残すのは、<strong>モデルの変数をコントロールした後でも、ラグ付き残差が当期の残差を説明するか</strong>を問うため。</p></div>",
    "gap": "棄却は、検定したラグのうち 1 つ以上で相関があるという意味で、すべてのラグで相関があるわけではない。"
   },
   "fr": {
    "topic": "Autocorrélation · Breusch–Godfrey",
    "front": "Comment fonctionne le test de Breusch–Godfrey, et pourquoi garder les régresseurs d’origine dans la régression auxiliaire ?",
    "back": "<div class=\"ans\"><p>Régresser le résidu sur les \\(X\\) d’origine <strong>plus \\(p\\) résidus retardés</strong> ; tester \\(H_0:\\rho_1=\\cdots=\\rho_p=0\\) par un test F, \\(df=(p,\\;n_{\\text{aux}}-k-p-1)\\).</p><p>Garder les \\(X\\) revient à demander : <strong>une fois les variables du modèle contrôlées, les résidus retardés expliquent-ils encore le résidu courant ?</strong></p></div>",
    "gap": "Le rejet signifie une corrélation à au moins un des retards testés, pas à chacun."
   }
  },
  "q3-bg-example": {
   "zh": {
    "topic": "序列相关 · 计算例题",
    "front": "Breusch–Godfrey F 检验：\\(n_{\\text{aux}}=120\\)，\\(k=3\\)，\\(p=2\\)，\\(SSE_R=110\\)，\\(SSE_U=96\\)。计算 \\(F\\)（5% 临界值 ≈ 3.08）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(110-96)/2}{96/(120-3-2-1)}=\\frac{7}{0.842}\\approx8.31$$</div><p>\\(8.31>3.08\\) → <strong>拒绝</strong>：在滞后 1 阶、2 阶或两者上存在序列相关。</p></div>"
   },
   "ja": {
    "topic": "系列相関 · 計算例",
    "front": "Breusch–Godfrey の F 検定：\\(n_{\\text{aux}}=120\\)、\\(k=3\\)、\\(p=2\\)、\\(SSE_R=110\\)、\\(SSE_U=96\\)。\\(F\\) を計算せよ（5% の臨界値 ≈ 3.08）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(110-96)/2}{96/(120-3-2-1)}=\\frac{7}{0.842}\\approx8.31$$</div><p>\\(8.31>3.08\\) → <strong>棄却</strong>：ラグ 1、ラグ 2、またはその両方で系列相関がある。</p></div>"
   },
   "fr": {
    "topic": "Autocorrélation · exemple chiffré",
    "front": "Test F de Breusch–Godfrey : \\(n_{\\text{aux}}=120\\), \\(k=3\\), \\(p=2\\), \\(SSE_R=110\\), \\(SSE_U=96\\). Calculez \\(F\\) (valeur critique à 5 % ≈ 3.08).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(110-96)/2}{96/(120-3-2-1)}=\\frac{7}{0.842}\\approx8.31$$</div><p>\\(8.31>3.08\\) → <strong>rejeter</strong> : autocorrélation au retard 1, au retard 2, ou aux deux.</p></div>"
   }
  },
  "q3-serial-fix": {
   "zh": {
    "topic": "序列相关 · 应对",
    "front": "如何应对序列相关？",
    "back": "<div class=\"ans\"><ul><li>问题在推断时用 <strong>Newey–West</strong>（HAC）标准误；它不消除相关，也不改变系数</li><li><strong>对动态建模</strong>：加入有依据的滞后项或缺失的结构</li><li>误差过程可以设定时用<strong>广义最小二乘</strong></li></ul></div>"
   },
   "ja": {
    "topic": "系列相関 · 対処",
    "front": "系列相関にはどう対処するか。",
    "back": "<div class=\"ans\"><ul><li>問題が推論にあるなら <strong>Newey–West</strong>（HAC）標準誤差；相関を取り除くわけでも係数を変えるわけでもない</li><li><strong>動学をモデル化する</strong>：根拠のあるラグや欠けている構造を加える</li><li>誤差の過程を特定できるなら<strong>一般化最小二乗法</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Autocorrélation · réponses",
    "front": "Comment réagir à une autocorrélation ?",
    "back": "<div class=\"ans\"><ul><li>Erreurs-types de <strong>Newey–West</strong> (HAC) quand le problème est l’inférence ; elles ne suppriment pas la corrélation et ne changent pas les coefficients</li><li><strong>Modéliser la dynamique</strong> : ajouter des retards justifiés ou la structure manquante</li><li><strong>Moindres carrés généralisés</strong> quand le processus d’erreur peut être spécifié</li></ul></div>"
   }
  },
  "q3-mc": {
   "zh": {
    "topic": "多重共线性 · 症状与 VIF",
    "front": "多重共线性有哪些症状？VIF 如何计算？",
    "back": "<div class=\"ans\"><ul><li>标准误大，\\(|t|\\) 小（<strong>第二类</strong>错误）</li><li>系数的大小或符号不稳定</li><li>整体 F 显著，但单个显著的 \\(t\\) 很少</li></ul><div class=\"eq-block\">$$VIF_j=\\frac{1}{1-R_j^2}$$</div><p>\\(R_j^2\\) 来自把 \\(X_j\\) 对其他预测变量回归；1 = 没有共线性；5 或 10 是需要调查的经验阈值。</p></div>",
    "gap": "系数仍然无偏。删掉一个本应在模型中的变量，是用遗漏变量偏差换取精确度。"
   },
   "ja": {
    "topic": "多重共線性 · 症状と VIF",
    "front": "多重共線性の症状は何か。VIF はどう計算するか。",
    "back": "<div class=\"ans\"><ul><li>標準誤差が大きく \\(|t|\\) が小さい（<strong>第 2 種</strong>の誤り）</li><li>係数の大きさや符号が不安定</li><li>全体の F は有意だが、個別に有意な \\(t\\) は少ない</li></ul><div class=\"eq-block\">$$VIF_j=\\frac{1}{1-R_j^2}$$</div><p>\\(R_j^2\\) は \\(X_j\\) を他の説明変数に回帰したもの；1 = 共線性なし；5 や 10 は調べるべき目安。</p></div>",
    "gap": "係数は不偏のまま。モデルに必要な変数を落とすと、精度の悪さの代わりに欠落変数バイアスを抱えることになる。"
   },
   "fr": {
    "topic": "Multicolinéarité · symptômes et VIF",
    "front": "Quels sont les symptômes de la multicolinéarité, et comment calcule-t-on le VIF ?",
    "back": "<div class=\"ans\"><ul><li>Erreurs-types élevées, petits \\(|t|\\) (erreurs de <strong>type II</strong>)</li><li>Taille ou signe des coefficients instables</li><li>F global significatif mais peu de \\(t\\) individuels significatifs</li></ul><div class=\"eq-block\">$$VIF_j=\\frac{1}{1-R_j^2}$$</div><p>\\(R_j^2\\) issu de la régression de \\(X_j\\) sur les autres prédicteurs ; 1 = aucune ; 5 ou 10 sont des seuils empiriques d’alerte.</p></div>",
    "gap": "Les coefficients restent sans biais. Supprimer une variable qui a sa place dans le modèle échange l’imprécision contre un biais de variable omise."
   }
  },
  "q3-summary": {
   "zh": {
    "topic": "小结",
    "front": "下列每个问题下 OLS 系数是否有偏？(1) 相关的遗漏变量，(2) 条件异方差，(3) 序列相关，(4) 多重共线性",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>有偏且不一致</strong></li><li>(2) 无偏但无效；标准误不一致</li><li>(3) 无偏但无效（严格外生性下）；标准误一般不一致</li><li>(4) 无偏；标准误正确但<strong>偏大</strong></li></ul></div>"
   },
   "ja": {
    "topic": "まとめ",
    "front": "次の各問題で、OLS の係数に偏りはあるか。(1) 相関のある欠落変数、(2) 条件付き不均一分散、(3) 系列相関、(4) 多重共線性",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>偏りがあり、一致性もない</strong></li><li>(2) 不偏だが非効率；標準誤差は一致性がない</li><li>(3) 不偏だが非効率（強外生性の下）；標準誤差は一般に一致性がない</li><li>(4) 不偏；標準誤差は正しいが<strong>大きい</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Synthèse",
    "front": "Pour chaque problème, les coefficients MCO sont-ils biaisés ? (1) variable omise corrélée, (2) hétéroscédasticité conditionnelle, (3) autocorrélation, (4) multicolinéarité",
    "back": "<div class=\"ans\"><ul><li>(1) <strong>Biaisés et non convergents</strong></li><li>(2) Sans biais mais inefficaces ; erreurs-types non convergentes</li><li>(3) Sans biais mais inefficaces (exogénéité stricte) ; erreurs-types en général non convergentes</li><li>(4) Sans biais ; erreurs-types correctes mais <strong>élevées</strong></li></ul></div>"
   }
  }
 }
});
