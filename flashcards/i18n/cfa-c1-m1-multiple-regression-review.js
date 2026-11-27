deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M1 多元回归 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M1 重回帰 · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M1 Régression multiple · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q1-slope-meaning": {
   "zh": {
    "topic": "模型 · 斜率系数",
    "front": "在 \\(Y_i=\\beta_0+\\beta_1X_{1i}+\\cdots+\\beta_kX_{ki}+\\varepsilon_i\\) 中，斜率 \\(\\beta_j\\) 衡量什么？",
    "back": "<div class=\"ans\"><p>在<strong>其他所有自变量保持不变</strong>的情况下，<strong>\\(X_j\\) 增加一个单位</strong>时 \\(Y\\) 的预期变化（偏效应）。</p></div>",
    "gap": "它不是 \\(X_j\\) 的总效应，斜率显著也不能证明因果关系。"
   },
   "ja": {
    "topic": "モデル · 傾きの係数",
    "front": "\\(Y_i=\\beta_0+\\beta_1X_{1i}+\\cdots+\\beta_kX_{ki}+\\varepsilon_i\\) において、傾き \\(\\beta_j\\) は何を測るか。",
    "back": "<div class=\"ans\"><p><strong>他のすべての独立変数を一定に保ったまま</strong>、<strong>\\(X_j\\) が 1 単位増えた</strong>ときの \\(Y\\) の期待変化（偏効果）。</p></div>",
    "gap": "\\(X_j\\) の総効果ではなく、傾きが有意でも因果関係の証明にはならない。"
   },
   "fr": {
    "topic": "Modèle · coefficient de pente",
    "front": "Dans \\(Y_i=\\beta_0+\\beta_1X_{1i}+\\cdots+\\beta_kX_{ki}+\\varepsilon_i\\), que mesure une pente \\(\\beta_j\\) ?",
    "back": "<div class=\"ans\"><p>La variation attendue de \\(Y\\) pour une <strong>hausse d’une unité de \\(X_j\\)</strong>, <strong>toutes les autres variables indépendantes étant constantes</strong> (un effet partiel).</p></div>",
    "gap": "Ce n’est pas l’effet total de \\(X_j\\), et une pente significative ne prouve pas la causalité."
   }
  },
  "q1-uses": {
   "zh": {
    "topic": "用途",
    "front": "说出多元线性回归的三种用途。",
    "back": "<div class=\"ans\"><ul><li><strong>识别并量化</strong>变量之间的关系</li><li><strong>检验理论</strong>，例如若干风险因子能否解释收益</li><li>用一组预测变量<strong>预测</strong>因变量</li></ul></div>"
   },
   "ja": {
    "topic": "用途",
    "front": "重回帰の用途を 3 つ挙げよ。",
    "back": "<div class=\"ans\"><ul><li>変数間の関係を<strong>特定し定量化する</strong></li><li><strong>理論を検証する</strong>（例：複数のリスク要因でリターンを説明できるか）</li><li>一組の説明変数から従属変数を<strong>予測する</strong></li></ul></div>"
   },
   "fr": {
    "topic": "Usages",
    "front": "Citez trois usages de la régression linéaire multiple.",
    "back": "<div class=\"ans\"><ul><li><strong>Identifier et quantifier</strong> les relations entre variables</li><li><strong>Tester des théories</strong>, p. ex. si plusieurs facteurs de risque expliquent les rendements</li><li><strong>Prévoir</strong> la variable dépendante à partir d’un ensemble de prédicteurs</li></ul></div>"
   }
  },
  "q1-assumptions": {
   "zh": {
    "topic": "假设",
    "front": "列出多元线性回归的六个经典假设。",
    "back": "<div class=\"ans\"><ul><li>参数<strong>线性</strong></li><li><strong>条件均值为零</strong>：\\(E(\\varepsilon\\mid X)=0\\)（外生性）</li><li><strong>同方差</strong>：\\(\\operatorname{Var}(\\varepsilon\\mid X)=\\sigma^2\\)</li><li>误差<strong>相互独立</strong>（不相关）</li><li><strong>无完全多重共线性</strong></li><li>误差<strong>服从正态分布</strong>，用于小样本下的精确检验</li></ul></div>",
    "gap": "假设针对的是不可观测的误差；实际中用残差 \\(e_i=Y_i-\\hat Y_i\\) 作为替代来检查。"
   },
   "ja": {
    "topic": "仮定",
    "front": "重回帰の 6 つの古典的仮定を挙げよ。",
    "back": "<div class=\"ans\"><ul><li>パラメータについて<strong>線形</strong></li><li><strong>条件付き平均がゼロ</strong>：\\(E(\\varepsilon\\mid X)=0\\)（外生性）</li><li><strong>均一分散</strong>：\\(\\operatorname{Var}(\\varepsilon\\mid X)=\\sigma^2\\)</li><li>誤差が<strong>独立</strong>（無相関）</li><li><strong>完全な多重共線性がない</strong></li><li>誤差が<strong>正規分布</strong>（小標本での正確な検定のため）</li></ul></div>",
    "gap": "仮定は観測できない誤差についてのもので、実際には残差 \\(e_i=Y_i-\\hat Y_i\\) を代わりに調べる。"
   },
   "fr": {
    "topic": "Hypothèses",
    "front": "Citez les six hypothèses classiques de la régression linéaire multiple.",
    "back": "<div class=\"ans\"><ul><li><strong>Linéarité</strong> par rapport aux paramètres</li><li><strong>Espérance conditionnelle nulle</strong> : \\(E(\\varepsilon\\mid X)=0\\) (exogénéité)</li><li><strong>Homoscédasticité</strong> : \\(\\operatorname{Var}(\\varepsilon\\mid X)=\\sigma^2\\)</li><li>Erreurs <strong>indépendantes</strong> (non corrélées)</li><li><strong>Pas de multicolinéarité parfaite</strong></li><li><strong>Erreurs normales</strong>, pour des tests exacts en petit échantillon</li></ul></div>",
    "gap": "Les hypothèses portent sur les erreurs inobservables ; en pratique on examine les résidus \\(e_i=Y_i-\\hat Y_i\\) comme substituts."
   }
  },
  "q1-linearity-curve": {
   "zh": {
    "topic": "假设 · 线性",
    "front": "“参数线性”是否排除了 \\(Y\\) 与 \\(X\\) 之间的曲线关系？",
    "back": "<div class=\"ans\"><p><strong>不排除。</strong>线性针对的是<strong>系数</strong>。可以加入 \\(X^2\\) 或 \\(\\ln X\\) 等变换后的变量来刻画曲线；模型对 \\(\\beta\\) 仍是线性的。</p></div>"
   },
   "ja": {
    "topic": "仮定 · 線形性",
    "front": "「パラメータについて線形」は、\\(Y\\) と \\(X\\) の曲線的な関係を排除するか。",
    "back": "<div class=\"ans\"><p><strong>排除しない。</strong>線形性は<strong>係数</strong>についての条件である。\\(X^2\\) や \\(\\ln X\\) のような変換した変数を加えれば曲線を表せ、モデルは \\(\\beta\\) について線形のまま。</p></div>"
   },
   "fr": {
    "topic": "Hypothèses · linéarité",
    "front": "« Linéaire par rapport aux paramètres » exclut-il une relation courbe entre \\(Y\\) et \\(X\\) ?",
    "back": "<div class=\"ans\"><p><strong>Non.</strong> La linéarité porte sur les <strong>coefficients</strong>. Une courbe se modélise en ajoutant des variables transformées comme \\(X^2\\) ou \\(\\ln X\\) ; le modèle reste linéaire en \\(\\beta\\).</p></div>"
   }
  },
  "q1-multicollinearity": {
   "zh": {
    "topic": "假设 · 多重共线性",
    "front": "两个预测变量之间高度（但非完全）相关，是否违反回归假设？",
    "back": "<div class=\"ans\"><p><strong>不违反。</strong>只有<strong>完全</strong>多重共线性（一个预测变量恰好是其他变量的线性组合）才违反假设。</p><p>高度相关是允许的，但会<strong>放大标准误</strong>，使单个 \\(t\\) 统计量看起来很小。</p></div>",
    "gap": "检查 VIF（容忍度 = 1/VIF）；只看两两相关系数可能漏掉多个预测变量的组合。"
   },
   "ja": {
    "topic": "仮定 · 多重共線性",
    "front": "2 つの説明変数の相関が高い（が完全ではない）場合、回帰の仮定に反するか。",
    "back": "<div class=\"ans\"><p><strong>反しない。</strong>仮定に反するのは<strong>完全な</strong>多重共線性（ある説明変数が他の変数の正確な線形結合）だけ。</p><p>高い相関は許されるが<strong>標準誤差を大きくする</strong>ので、個々の \\(t\\) 統計量が小さく見えることがある。</p></div>",
    "gap": "VIF（許容度 = 1/VIF）を確認する；2 変数間の相関だけでは、複数の説明変数の組合せを見落としうる。"
   },
   "fr": {
    "topic": "Hypothèses · multicolinéarité",
    "front": "Une corrélation élevée (mais pas parfaite) entre deux prédicteurs viole-t-elle les hypothèses de la régression ?",
    "back": "<div class=\"ans\"><p><strong>Non.</strong> Seule la multicolinéarité <strong>parfaite</strong> (un prédicteur combinaison linéaire exacte des autres) viole l’hypothèse.</p><p>Une forte corrélation est permise mais <strong>gonfle les erreurs-types</strong>, si bien que les statistiques \\(t\\) individuelles peuvent paraître faibles.</p></div>",
    "gap": "Vérifiez les VIF (tolérance = 1/VIF) ; les seules corrélations deux à deux peuvent manquer une combinaison de plusieurs prédicteurs."
   }
  },
  "q1-normality": {
   "zh": {
    "topic": "假设 · 正态性",
    "front": "OLS 系数无偏是否需要误差服从正态分布？",
    "back": "<div class=\"ans\"><p><strong>不需要。</strong>无偏性需要的是外生性，而不是正态性。正态性支撑的是<strong>小样本下精确的 \\(t\\) 检验和 \\(F\\) 检验</strong>；大样本下渐近推断仍然有效。</p></div>"
   },
   "ja": {
    "topic": "仮定 · 正規性",
    "front": "OLS 係数が不偏であるために、誤差の正規性は必要か。",
    "back": "<div class=\"ans\"><p><strong>必要ない。</strong>不偏性に必要なのは外生性で、正規性ではない。正規性は<strong>小標本での正確な \\(t\\) 検定と \\(F\\) 検定</strong>を支えるもので、大標本なら漸近的な推論が使える。</p></div>"
   },
   "fr": {
    "topic": "Hypothèses · normalité",
    "front": "La normalité des erreurs est-elle nécessaire pour que les coefficients MCO soient sans biais ?",
    "back": "<div class=\"ans\"><p><strong>Non.</strong> L’absence de biais exige l’exogénéité, pas la normalité. La normalité permet des <strong>tests \\(t\\) et \\(F\\) exacts en petit échantillon</strong> ; en grand échantillon, l’inférence asymptotique fonctionne encore.</p></div>"
   }
  },
  "q1-diagnostics": {
   "zh": {
    "topic": "诊断",
    "front": "以下每种残差形态威胁哪个假设：(1) 残差对拟合值呈曲线，(2) 呈漏斗形，(3) 按时间顺序出现游程或周期，(4) Q–Q 图呈 S 形？",
    "back": "<div class=\"ans\"><ul><li>(1) 曲线 → <strong>线性</strong>：缺少变换、交互项或非线性项</li><li>(2) 漏斗或扇形 → <strong>异方差</strong></li><li>(3) 游程、周期 → <strong>序列相关</strong>（独立性）；检查 ACF 或 Durbin–Watson</li><li>(4) S 形 Q–Q → <strong>非正态的尾部</strong>；一侧尾部弯曲 = 偏态，孤立的点 = 离群值</li></ul></div>"
   },
   "ja": {
    "topic": "診断",
    "front": "次の残差のパターンはそれぞれどの仮定を脅かすか：(1) 残差と予測値の図に曲線、(2) 漏斗形、(3) 時間順に連や周期、(4) Q–Q プロットが S 字形。",
    "back": "<div class=\"ans\"><ul><li>(1) 曲線 → <strong>線形性</strong>：変換、交互作用、非線形項が欠けている</li><li>(2) 漏斗形・扇形 → <strong>不均一分散</strong></li><li>(3) 連・周期 → <strong>系列相関</strong>（独立性）；ACF や Durbin–Watson を確認</li><li>(4) S 字形の Q–Q → <strong>正規でない裾</strong>；片側の裾の曲がり = 歪み、孤立した点 = 外れ値</li></ul></div>"
   },
   "fr": {
    "topic": "Diagnostics",
    "front": "Quelle hypothèse chaque forme de résidus menace-t-elle : (1) une courbure des résidus en fonction des valeurs ajustées, (2) une forme en entonnoir, (3) des séquences ou cycles dans l’ordre temporel, (4) un Q–Q plot en S ?",
    "back": "<div class=\"ans\"><ul><li>(1) Courbure → <strong>linéarité</strong> : transformation, interaction ou terme non linéaire manquant</li><li>(2) Entonnoir ou éventail → <strong>hétéroscédasticité</strong></li><li>(3) Séquences, cycles → <strong>autocorrélation</strong> (indépendance) ; vérifier l’ACF ou Durbin–Watson</li><li>(4) Q–Q en S → <strong>queues non normales</strong> ; une seule queue courbée = asymétrie, points isolés = valeurs aberrantes</li></ul></div>"
   }
  },
  "q1-ols-blue": {
   "zh": {
    "topic": "OLS",
    "front": "OLS 最小化的是什么？什么时候它是 BLUE？",
    "back": "<div class=\"ans\"><p>OLS 选择使<strong>误差平方和</strong>最小的系数：</p><div class=\"eq-block\">$$SSE=\\sum_{i=1}^{n}(Y_i-\\hat Y_i)^2$$</div><p>在 Gauss–Markov 假设下（外生性、同方差、误差不相关、无完全多重共线性），它是<strong>最优线性无偏估计量</strong>：在线性无偏估计量中方差最小。</p></div>"
   },
   "ja": {
    "topic": "OLS",
    "front": "OLS は何を最小化するか。いつ BLUE になるか。",
    "back": "<div class=\"ans\"><p>OLS は<strong>誤差の二乗和</strong>を最小にする係数を選ぶ：</p><div class=\"eq-block\">$$SSE=\\sum_{i=1}^{n}(Y_i-\\hat Y_i)^2$$</div><p>Gauss–Markov の仮定（外生性、均一分散、無相関の誤差、完全な多重共線性がない）の下で、<strong>最良線形不偏推定量</strong>になる：線形不偏推定量の中で分散が最小。</p></div>"
   },
   "fr": {
    "topic": "MCO",
    "front": "Que minimisent les MCO, et quand sont-ils BLUE ?",
    "back": "<div class=\"ans\"><p>Les MCO choisissent les coefficients qui minimisent la <strong>somme des carrés des erreurs</strong> :</p><div class=\"eq-block\">$$SSE=\\sum_{i=1}^{n}(Y_i-\\hat Y_i)^2$$</div><p>Sous les hypothèses de Gauss–Markov (exogénéité, homoscédasticité, erreurs non corrélées, pas de multicolinéarité parfaite), c’est le <strong>meilleur estimateur linéaire sans biais</strong> : la plus faible variance parmi les estimateurs linéaires sans biais.</p></div>"
   }
  },
  "q1-t-test": {
   "zh": {
    "topic": "推断 · t 检验",
    "front": "如何检验单个斜率 \\(\\beta_j\\) 是否显著？给出统计量、自由度和置信区间。",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_j=0\\) 对 \\(H_a:\\beta_j\\ne0\\)</p><div class=\"eq-block\">$$t=\\frac{\\hat\\beta_j}{SE(\\hat\\beta_j)}$$</div><div class=\"eq-block\">$$df=n-k-1$$</div><p>若 \\(|t|>t_{\\alpha/2,\\,n-k-1}\\)（或 \\(p<\\alpha\\)）则拒绝。置信区间：\\(\\hat\\beta_j\\pm t_{\\alpha/2}\\,SE(\\hat\\beta_j)\\)。</p></div>",
    "gap": "统计显著不等于经济上显著。"
   },
   "ja": {
    "topic": "推論 · t 検定",
    "front": "1 つの傾き \\(\\beta_j\\) が有意かどうかはどう検定するか。統計量、自由度、信頼区間を答えよ。",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_j=0\\) 対 \\(H_a:\\beta_j\\ne0\\)</p><div class=\"eq-block\">$$t=\\frac{\\hat\\beta_j}{SE(\\hat\\beta_j)}$$</div><div class=\"eq-block\">$$df=n-k-1$$</div><p>\\(|t|>t_{\\alpha/2,\\,n-k-1}\\)（または \\(p<\\alpha\\)）なら棄却。信頼区間：\\(\\hat\\beta_j\\pm t_{\\alpha/2}\\,SE(\\hat\\beta_j)\\)。</p></div>",
    "gap": "統計的に有意でも、経済的に意味があるとは限らない。"
   },
   "fr": {
    "topic": "Inférence · test t",
    "front": "Comment tester si une pente \\(\\beta_j\\) est significative ? Donnez la statistique, ses degrés de liberté et l’intervalle de confiance.",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_j=0\\) contre \\(H_a:\\beta_j\\ne0\\)</p><div class=\"eq-block\">$$t=\\frac{\\hat\\beta_j}{SE(\\hat\\beta_j)}$$</div><div class=\"eq-block\">$$df=n-k-1$$</div><p>Rejeter si \\(|t|>t_{\\alpha/2,\\,n-k-1}\\) (ou \\(p<\\alpha\\)). IC : \\(\\hat\\beta_j\\pm t_{\\alpha/2}\\,SE(\\hat\\beta_j)\\).</p></div>",
    "gap": "La significativité statistique n’est pas la significativité économique."
   }
  },
  "q1-anova": {
   "zh": {
    "topic": "ANOVA",
    "front": "写出带自由度和均方的 ANOVA 分解。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\underbrace{SST}_{n-1}=\\underbrace{SSR}_{k}+\\underbrace{SSE}_{n-k-1}$$</div><ul><li>\\(SSR\\)：被解释的变动，\\(MSR=SSR/k\\)</li><li>\\(SSE\\)：未被解释的变动，\\(MSE=SSE/(n-k-1)\\)</li></ul></div>"
   },
   "ja": {
    "topic": "ANOVA",
    "front": "自由度と平均平方を含めて ANOVA の分解を書け。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\underbrace{SST}_{n-1}=\\underbrace{SSR}_{k}+\\underbrace{SSE}_{n-k-1}$$</div><ul><li>\\(SSR\\)：説明される変動、\\(MSR=SSR/k\\)</li><li>\\(SSE\\)：説明されない変動、\\(MSE=SSE/(n-k-1)\\)</li></ul></div>"
   },
   "fr": {
    "topic": "ANOVA",
    "front": "Écrivez la décomposition ANOVA avec les degrés de liberté et les carrés moyens.",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\underbrace{SST}_{n-1}=\\underbrace{SSR}_{k}+\\underbrace{SSE}_{n-k-1}$$</div><ul><li>\\(SSR\\) : variation expliquée, \\(MSR=SSR/k\\)</li><li>\\(SSE\\) : variation non expliquée, \\(MSE=SSE/(n-k-1)\\)</li></ul></div>"
   }
  },
  "q1-see-r2": {
   "zh": {
    "topic": "拟合 · SEE 与 R²",
    "front": "定义估计标准误（SEE）和 \\(R^2\\)。高 \\(R^2\\) 不能证明什么？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SEE=\\sqrt{\\frac{SSE}{n-k-1}}=\\sqrt{MSE}$$</div><div class=\"eq-block\">$$R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST}$$</div><p>\\(R^2\\) 是 \\(Y\\) 的样本变动中被解释的比例。它<strong>不能</strong>证明模型设定正确。</p></div>"
   },
   "ja": {
    "topic": "当てはまり · SEE と R²",
    "front": "推定値の標準誤差（SEE）と \\(R^2\\) を定義せよ。高い \\(R^2\\) は何を証明しないか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SEE=\\sqrt{\\frac{SSE}{n-k-1}}=\\sqrt{MSE}$$</div><div class=\"eq-block\">$$R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST}$$</div><p>\\(R^2\\) は \\(Y\\) の標本変動のうち説明される割合。モデルの特定が正しいことは<strong>証明しない</strong>。</p></div>"
   },
   "fr": {
    "topic": "Ajustement · SEE et R²",
    "front": "Définissez l’erreur-type d’estimation (SEE) et \\(R^2\\). Que ne prouve pas un \\(R^2\\) élevé ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SEE=\\sqrt{\\frac{SSE}{n-k-1}}=\\sqrt{MSE}$$</div><div class=\"eq-block\">$$R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST}$$</div><p>\\(R^2\\) est la part de la variation de \\(Y\\) dans l’échantillon qui est expliquée. Il ne prouve <strong>pas</strong> que le modèle est bien spécifié.</p></div>"
   }
  },
  "q1-f-test": {
   "zh": {
    "topic": "推断 · 整体 F 检验",
    "front": "写出整体 F 检验：假设、统计量和自由度。F 显著是否意味着每个斜率都显著？",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_1=\\cdots=\\beta_k=0\\) 对至少一个斜率 \\(\\ne0\\)</p><div class=\"eq-block\">$$F=\\frac{MSR}{MSE}$$</div><div class=\"eq-block\">$$df=(k,\\;n-k-1)$$</div><p><strong>不是。</strong>预测变量可能整体有用，而单个 \\(t\\) 统计量很小，例如由于多重共线性。</p></div>"
   },
   "ja": {
    "topic": "推論 · 全体の F 検定",
    "front": "全体の F 検定を述べよ：仮説、統計量、自由度。F が有意なら、すべての傾きが有意か。",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_1=\\cdots=\\beta_k=0\\) 対 少なくとも 1 つの傾きが \\(\\ne0\\)</p><div class=\"eq-block\">$$F=\\frac{MSR}{MSE}$$</div><div class=\"eq-block\">$$df=(k,\\;n-k-1)$$</div><p><strong>そうとは限らない。</strong>説明変数が全体としては有用でも、多重共線性などのために個々の \\(t\\) 統計量が小さいことがある。</p></div>"
   },
   "fr": {
    "topic": "Inférence · test F global",
    "front": "Énoncez le test F global : hypothèses, statistique et degrés de liberté. Un F significatif signifie-t-il que chaque pente est significative ?",
    "back": "<div class=\"ans\"><p>\\(H_0:\\beta_1=\\cdots=\\beta_k=0\\) contre au moins une pente \\(\\ne0\\)</p><div class=\"eq-block\">$$F=\\frac{MSR}{MSE}$$</div><div class=\"eq-block\">$$df=(k,\\;n-k-1)$$</div><p><strong>Non.</strong> Les prédicteurs peuvent être utiles ensemble alors que les statistiques \\(t\\) individuelles sont faibles, p. ex. à cause de la multicolinéarité.</p></div>"
   }
  }
 }
});
