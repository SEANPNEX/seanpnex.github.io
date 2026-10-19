deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M5 时间序列 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M5 時系列 · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M5 Séries temporelles · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q5-trends": {
   "zh": {
    "topic": "趋势模型",
    "front": "线性趋势与对数线性趋势：各在什么时候使用？斜率是什么意思？",
    "back": "<div class=\"ans\"><ul><li><strong>线性</strong> \\(Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\)：每期<strong>绝对变化</strong>恒定</li><li><strong>对数线性</strong> \\(\\ln Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\)：<strong>百分比增长</strong>恒定；精确增长率 \\(g=e^{\\beta_1}-1\\approx\\beta_1\\)</li></ul></div>",
    "gap": "趋势拟合看起来好还不够：残差序列相关会使 OLS 推断不可靠。"
   },
   "ja": {
    "topic": "トレンド・モデル",
    "front": "線形トレンドと対数線形トレンド：それぞれいつ使い、傾きは何を意味するか。",
    "back": "<div class=\"ans\"><ul><li><strong>線形</strong> \\(Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\)：1 期当たりの<strong>絶対的な変化</strong>が一定</li><li><strong>対数線形</strong> \\(\\ln Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\)：<strong>成長率</strong>が一定；正確な成長率 \\(g=e^{\\beta_1}-1\\approx\\beta_1\\)</li></ul></div>",
    "gap": "トレンドの当てはまりが良く見えても不十分：残差に系列相関があると OLS の推論は信頼できない。"
   },
   "fr": {
    "topic": "Modèles de tendance",
    "front": "Tendance linéaire ou log-linéaire : quand utiliser chacune, et que signifie la pente ?",
    "back": "<div class=\"ans\"><ul><li><strong>Linéaire</strong> \\(Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\) : <strong>variation absolue</strong> constante par période</li><li><strong>Log-linéaire</strong> \\(\\ln Y_t=\\beta_0+\\beta_1t+\\varepsilon_t\\) : <strong>croissance en pourcentage</strong> constante ; croissance exacte \\(g=e^{\\beta_1}-1\\approx\\beta_1\\)</li></ul></div>",
    "gap": "Un bel ajustement de tendance ne suffit pas : des résidus autocorrélés rendent l’inférence MCO peu fiable."
   }
  },
  "q5-stationarity": {
   "zh": {
    "topic": "协方差平稳",
    "front": "写出协方差平稳的三个条件。",
    "back": "<div class=\"ans\"><ul><li><strong>均值</strong>恒定且有限：\\(E(Y_t)=\\mu\\)</li><li><strong>方差</strong>恒定且有限：\\(\\operatorname{Var}(Y_t)=\\sigma^2\\)</li><li><strong>协方差只取决于滞后阶数</strong>：\\(\\operatorname{Cov}(Y_t,Y_{t-j})=\\gamma_j\\)</li></ul><p>确定性趋势破坏均值恒定；单位根也破坏平稳性。</p></div>"
   },
   "ja": {
    "topic": "共分散定常",
    "front": "共分散定常の 3 つの条件を述べよ。",
    "back": "<div class=\"ans\"><ul><li><strong>平均</strong>が一定で有限：\\(E(Y_t)=\\mu\\)</li><li><strong>分散</strong>が一定で有限：\\(\\operatorname{Var}(Y_t)=\\sigma^2\\)</li><li><strong>共分散はラグだけに依存</strong>：\\(\\operatorname{Cov}(Y_t,Y_{t-j})=\\gamma_j\\)</li></ul><p>確定的トレンドは平均の一定性を崩し、単位根も定常性を崩す。</p></div>"
   },
   "fr": {
    "topic": "Stationnarité en covariance",
    "front": "Énoncez les trois conditions de la stationnarité en covariance.",
    "back": "<div class=\"ans\"><ul><li><strong>Moyenne</strong> constante et finie : \\(E(Y_t)=\\mu\\)</li><li><strong>Variance</strong> constante et finie : \\(\\operatorname{Var}(Y_t)=\\sigma^2\\)</li><li><strong>La covariance ne dépend que du retard</strong> : \\(\\operatorname{Cov}(Y_t,Y_{t-j})=\\gamma_j\\)</li></ul><p>Une tendance déterministe brise la moyenne constante ; une racine unitaire brise aussi la stationnarité.</p></div>"
   }
  },
  "q5-ar1": {
   "zh": {
    "topic": "AR(1) · 均值回归",
    "front": "对于 \\(Y_t=\\beta_0+\\phi Y_{t-1}+\\varepsilon_t\\)：何时平稳？均值回归水平是多少？",
    "back": "<div class=\"ans\"><p>\\(|\\phi|<1\\) 时平稳；均值回归水平为</p><div class=\"eq-block\">$$\\mu=\\frac{\\beta_0}{1-\\phi}$$</div><ul><li>\\(0<\\phi<1\\)：偏离逐渐衰减，符号不变</li><li>\\(-1<\\phi<0\\)：偏离逐渐衰减，符号交替</li><li>\\(\\phi\\) 接近 1：回归非常慢</li></ul></div>"
   },
   "ja": {
    "topic": "AR(1) · 平均回帰",
    "front": "\\(Y_t=\\beta_0+\\phi Y_{t-1}+\\varepsilon_t\\) について：いつ定常か。平均回帰水準はいくらか。",
    "back": "<div class=\"ans\"><p>\\(|\\phi|<1\\) なら定常；平均回帰水準は</p><div class=\"eq-block\">$$\\mu=\\frac{\\beta_0}{1-\\phi}$$</div><ul><li>\\(0<\\phi<1\\)：乖離は同じ符号のまま減衰</li><li>\\(-1<\\phi<0\\)：乖離は符号を交互に変えながら減衰</li><li>\\(\\phi\\) が 1 に近い：回帰がとても遅い</li></ul></div>"
   },
   "fr": {
    "topic": "AR(1) · retour à la moyenne",
    "front": "Pour \\(Y_t=\\beta_0+\\phi Y_{t-1}+\\varepsilon_t\\) : quand est-il stationnaire, et quel est son niveau de retour à la moyenne ?",
    "back": "<div class=\"ans\"><p>Stationnaire si \\(|\\phi|<1\\) ; niveau de retour à la moyenne</p><div class=\"eq-block\">$$\\mu=\\frac{\\beta_0}{1-\\phi}$$</div><ul><li>\\(0<\\phi<1\\) : les écarts s’amortissent, même signe</li><li>\\(-1<\\phi<0\\) : les écarts s’amortissent en alternant</li><li>\\(\\phi\\) proche de 1 : retour très lent</li></ul></div>"
   }
  },
  "q5-ar-forecast": {
   "zh": {
    "topic": "AR(1) · 预测",
    "front": "\\(\\hat\\beta_0=1.2\\)，\\(\\hat\\phi=0.6\\)，\\(Y_t=5\\)。给出一步预测，以及长期预测收敛到哪里。",
    "back": "<div class=\"ans\"><p>\\(\\hat Y_{t+1}=1.2+0.6\\times5=4.2\\)。之后各步递推得出，并收敛到</p><div class=\"eq-block\">$$\\hat\\mu=\\frac{1.2}{1-0.6}=3$$</div></div>"
   },
   "ja": {
    "topic": "AR(1) · 予測",
    "front": "\\(\\hat\\beta_0=1.2\\)、\\(\\hat\\phi=0.6\\)、\\(Y_t=5\\)。1 期先の予測と、長期の予測が収束する値を答えよ。",
    "back": "<div class=\"ans\"><p>\\(\\hat Y_{t+1}=1.2+0.6\\times5=4.2\\)。その先は逐次的に計算し、次の値に収束する</p><div class=\"eq-block\">$$\\hat\\mu=\\frac{1.2}{1-0.6}=3$$</div></div>"
   },
   "fr": {
    "topic": "AR(1) · prévision",
    "front": "\\(\\hat\\beta_0=1.2\\), \\(\\hat\\phi=0.6\\), \\(Y_t=5\\). Donnez la prévision à un pas et la valeur vers laquelle convergent les prévisions à long horizon.",
    "back": "<div class=\"ans\"><p>\\(\\hat Y_{t+1}=1.2+0.6\\times5=4.2\\). Les pas suivants se calculent récursivement et convergent vers</p><div class=\"eq-block\">$$\\hat\\mu=\\frac{1.2}{1-0.6}=3$$</div></div>"
   }
  },
  "q5-acf-bounds": {
   "zh": {
    "topic": "自相关 · ACF",
    "front": "样本自相关的近似标准误是多少？5% 的界限是多少？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SE(\\hat\\rho_j)\\approx\\frac{1}{\\sqrt T}$$</div><div class=\"eq-block\">$$\\text{bounds}\\approx\\pm\\frac{1.96}{\\sqrt T}$$</div><p>超出界限的值是该滞后阶存在相关的证据，而不是证明；滞后阶很多时，还要看整体形态。</p></div>"
   },
   "ja": {
    "topic": "自己相関 · ACF",
    "front": "標本自己相関のおおよその標準誤差と 5% の境界は何か。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SE(\\hat\\rho_j)\\approx\\frac{1}{\\sqrt T}$$</div><div class=\"eq-block\">$$\\text{bounds}\\approx\\pm\\frac{1.96}{\\sqrt T}$$</div><p>境界の外の値はそのラグでの依存の証拠であって証明ではない；ラグが多いときは全体のパターンも見る。</p></div>"
   },
   "fr": {
    "topic": "Autocorrélation · ACF",
    "front": "Quelle est l’erreur-type approximative d’une autocorrélation empirique, et les bornes à 5 % ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$SE(\\hat\\rho_j)\\approx\\frac{1}{\\sqrt T}$$</div><div class=\"eq-block\">$$\\text{bounds}\\approx\\pm\\frac{1.96}{\\sqrt T}$$</div><p>Les valeurs hors bornes sont un indice, pas une preuve, de dépendance à ce retard ; avec beaucoup de retards, regardez aussi la forme d’ensemble.</p></div>"
   }
  },
  "q5-acf-pacf": {
   "zh": {
    "topic": "识别 · ACF 与 PACF",
    "front": "ACF 和 PACF 如何识别 AR(p)、MA(q) 和 ARMA 模型？",
    "back": "<div class=\"ans\"><ul><li><strong>AR(p)</strong>：ACF 拖尾；PACF <strong>在滞后 p 阶后截尾</strong></li><li><strong>MA(q)</strong>：ACF <strong>在滞后 q 阶后截尾</strong>；PACF 拖尾</li><li><strong>ARMA(p,q)</strong>：两者都拖尾</li></ul><p>滞后 \\(j\\) 阶的 PACF 是控制了 1 到 \\(j-1\\) 阶滞后之后的相关。</p></div>",
    "gap": "“截尾”是总体层面的概念：截尾点之后的样本值只是落在界限之内。"
   },
   "ja": {
    "topic": "識別 · ACF と PACF",
    "front": "ACF と PACF で AR(p)、MA(q)、ARMA をどう識別するか。",
    "back": "<div class=\"ans\"><ul><li><strong>AR(p)</strong>：ACF は減衰；PACF は<strong>ラグ p の後で切断</strong></li><li><strong>MA(q)</strong>：ACF は<strong>ラグ q の後で切断</strong>；PACF は減衰</li><li><strong>ARMA(p,q)</strong>：どちらも減衰</li></ul><p>ラグ \\(j\\) の PACF は、ラグ 1〜\\(j-1\\) をコントロールした後の相関。</p></div>",
    "gap": "「切断」は母集団の概念：切断点より先の標本値は境界の内側にとどまるだけ。"
   },
   "fr": {
    "topic": "Identification · ACF et PACF",
    "front": "Comment l’ACF et la PACF identifient-elles les modèles AR(p), MA(q) et ARMA ?",
    "back": "<div class=\"ans\"><ul><li><strong>AR(p)</strong> : l’ACF décroît progressivement ; la PACF <strong>s’annule après le retard p</strong></li><li><strong>MA(q)</strong> : l’ACF <strong>s’annule après le retard q</strong> ; la PACF décroît progressivement</li><li><strong>ARMA(p,q)</strong> : les deux décroissent progressivement</li></ul><p>La PACF au retard \\(j\\) est la corrélation une fois contrôlés les retards 1 à \\(j-1\\).</p></div>",
    "gap": "« S’annule » est une notion de population : les valeurs empiriques au-delà restent simplement dans les bornes."
   }
  },
  "q5-ar-adequacy": {
   "zh": {
    "topic": "模型充分性",
    "front": "你拟合了一个 AR 模型。如何检查它是否捕捉了序列依赖？应避免哪个检验？",
    "back": "<div class=\"ans\"><p>检查<strong>残差的 ACF</strong>；用 <strong>Breusch–Godfrey</strong> 对多个残差滞后阶做联合检验。残差存在显著自相关意味着模型不完整。</p><p><strong>避免用 Durbin–Watson</strong>：有滞后因变量时它无效。</p></div>"
   },
   "ja": {
    "topic": "モデルの妥当性",
    "front": "AR モデルを推定した。系列依存を捉えたかどうかはどう確認するか。避けるべき検定はどれか。",
    "back": "<div class=\"ans\"><p><strong>残差の ACF</strong> を確認し、<strong>Breusch–Godfrey</strong> で複数の残差ラグを同時に検定する。残差に有意な自己相関があればモデルは不完全。</p><p><strong>Durbin–Watson は避ける</strong>：ラグ付き従属変数があると有効でない。</p></div>"
   },
   "fr": {
    "topic": "Adéquation du modèle",
    "front": "Vous estimez un modèle AR. Comment vérifier qu’il capte la dépendance sérielle, et quel test éviter ?",
    "back": "<div class=\"ans\"><p>Examiner l’<strong>ACF des résidus</strong> ; tester plusieurs retards de résidus conjointement avec <strong>Breusch–Godfrey</strong>. Une autocorrélation significative des résidus signifie que le modèle est incomplet.</p><p><strong>Éviter Durbin–Watson</strong> : il n’est pas valide avec une variable dépendante retardée.</p></div>"
   }
  },
  "q5-ma-arima": {
   "zh": {
    "topic": "MA、ARMA 与 ARIMA",
    "front": "什么是 MA(q) 模型？ARIMA 与 ARMA 有何不同？",
    "back": "<div class=\"ans\"><p>\\(MA(q)\\)：\\(Y_t=\\mu+\\varepsilon_t+\\theta_1\\varepsilon_{t-1}+\\cdots+\\theta_q\\varepsilon_{t-q}\\)；滞后 \\(q\\) 阶以外的自相关为零。</p><p><strong>ARMA(p,q)</strong> 对平稳序列建模。<strong>ARIMA(p,d,q)</strong> 先<strong>差分 \\(d\\) 次</strong>，使非平稳序列变得平稳。</p></div>"
   },
   "ja": {
    "topic": "MA、ARMA、ARIMA",
    "front": "MA(q) モデルとは何か。ARIMA は ARMA とどう違うか。",
    "back": "<div class=\"ans\"><p>\\(MA(q)\\)：\\(Y_t=\\mu+\\varepsilon_t+\\theta_1\\varepsilon_{t-1}+\\cdots+\\theta_q\\varepsilon_{t-q}\\)；ラグ \\(q\\) より先の自己相関はゼロ。</p><p><strong>ARMA(p,q)</strong> は定常な系列をモデル化する。<strong>ARIMA(p,d,q)</strong> はまず <strong>\\(d\\) 回差分をとって</strong>非定常な系列を定常にする。</p></div>"
   },
   "fr": {
    "topic": "MA, ARMA et ARIMA",
    "front": "Qu’est-ce qu’un modèle MA(q), et en quoi l’ARIMA diffère-t-il de l’ARMA ?",
    "back": "<div class=\"ans\"><p>\\(MA(q)\\) : \\(Y_t=\\mu+\\varepsilon_t+\\theta_1\\varepsilon_{t-1}+\\cdots+\\theta_q\\varepsilon_{t-q}\\) ; les autocorrélations sont nulles au-delà du retard \\(q\\).</p><p><strong>ARMA(p,q)</strong> modélise une série stationnaire. <strong>ARIMA(p,d,q)</strong> <strong>différencie d’abord \\(d\\) fois</strong> pour rendre stationnaire une série qui ne l’est pas.</p></div>"
   }
  },
  "q5-seasonality": {
   "zh": {
    "topic": "季节性",
    "front": "如何处理月度季节性？",
    "back": "<div class=\"ans\"><ul><li>季节<strong>虚拟变量</strong></li><li>季节性 AR 滞后项，如 \\(Y_{t-12}\\)</li><li>季节<strong>差分</strong>：\\(Y_t-Y_{t-12}\\)</li><li>常规与季节性 AR 或 MA 项的组合</li></ul><p>处理方法要与形态匹配；一个季节滞后项并不是唯一的选择。</p></div>"
   },
   "ja": {
    "topic": "季節性",
    "front": "月次の季節性はどう扱えるか。",
    "back": "<div class=\"ans\"><ul><li>季節<strong>ダミー変数</strong></li><li>\\(Y_{t-12}\\) のような季節 AR ラグ</li><li>季節<strong>差分</strong>：\\(Y_t-Y_{t-12}\\)</li><li>通常と季節の AR 項や MA 項の組合せ</li></ul><p>パターンに合った扱い方を選ぶ；季節ラグ 1 つだけが選択肢ではない。</p></div>"
   },
   "fr": {
    "topic": "Saisonnalité",
    "front": "Comment traiter une saisonnalité mensuelle ?",
    "back": "<div class=\"ans\"><ul><li><strong>Indicatrices</strong> saisonnières</li><li>Un retard AR saisonnier comme \\(Y_{t-12}\\)</li><li><strong>Différenciation</strong> saisonnière : \\(Y_t-Y_{t-12}\\)</li><li>Une combinaison de termes AR ou MA ordinaires et saisonniers</li></ul><p>Adapter le traitement à la forme observée ; un seul retard saisonnier n’est pas la seule option.</p></div>"
   }
  },
  "q5-random-walk": {
   "zh": {
    "topic": "单位根 · 随机游走",
    "front": "什么是（带漂移的）随机游走？为什么用一个随机游走对另一个回归很危险？",
    "back": "<div class=\"ans\"><p>\\(\\phi=1\\)：\\(Y_t=\\beta_0+Y_{t-1}+\\varepsilon_t\\)（\\(\\beta_0\\ne0\\) 时带漂移）。它有<strong>单位根</strong>：冲击是永久的，水平值不平稳，均值回归水平 \\(\\beta_0/(1-\\phi)\\) 没有定义。</p><p>用互不相关的单位根序列做回归会得到<strong>伪回归</strong>：\\(R^2\\) 高、\\(t\\) 显著，但并没有真实关系。</p></div>"
   },
   "ja": {
    "topic": "単位根 · ランダムウォーク",
    "front": "（ドリフト付き）ランダムウォークとは何か。ある系列を別の系列に回帰するのはなぜ危険か。",
    "back": "<div class=\"ans\"><p>\\(\\phi=1\\)：\\(Y_t=\\beta_0+Y_{t-1}+\\varepsilon_t\\)（\\(\\beta_0\\ne0\\) ならドリフト付き）。<strong>単位根</strong>を持つ：ショックは恒久的で、水準は定常でなく、平均回帰水準 \\(\\beta_0/(1-\\phi)\\) は定義されない。</p><p>無関係な単位根系列どうしを回帰すると<strong>見せかけの回帰</strong>になる：実際の関係がないのに \\(R^2\\) が高く \\(t\\) が有意。</p></div>"
   },
   "fr": {
    "topic": "Racines unitaires · marche aléatoire",
    "front": "Qu’est-ce qu’une marche aléatoire (avec dérive), et pourquoi est-il dangereux de régresser l’une sur une autre ?",
    "back": "<div class=\"ans\"><p>\\(\\phi=1\\) : \\(Y_t=\\beta_0+Y_{t-1}+\\varepsilon_t\\) (dérive si \\(\\beta_0\\ne0\\)). Elle a une <strong>racine unitaire</strong> : les chocs sont permanents, le niveau n’est pas stationnaire et le niveau de retour à la moyenne \\(\\beta_0/(1-\\phi)\\) n’est pas défini.</p><p>Régresser des séries à racine unitaire sans lien donne une <strong>régression fallacieuse</strong> : \\(R^2\\) élevé et \\(t\\) significatifs sans relation réelle.</p></div>"
   }
  },
  "q5-df": {
   "zh": {
    "topic": "单位根 · Dickey–Fuller",
    "front": "建立 Dickey–Fuller 检验。假设是什么？适用哪种临界值？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta Y_t=\\beta_0+\\gamma Y_{t-1}+\\varepsilon_t$$</div><div class=\"eq-block\">$$\\gamma=\\phi-1$$</div><p>\\(H_0:\\gamma=0\\)（<strong>单位根</strong>）对 \\(H_a:\\gamma<0\\)（平稳）。使用 <strong>Dickey–Fuller 临界值</strong>，而不是 Student \\(t\\)；统计量足够负时拒绝。</p></div>",
    "gap": "未能拒绝说明单位根仍可能存在；差分后重新检验。ADF 加入滞后差分项以处理高阶相关。"
   },
   "ja": {
    "topic": "単位根 · Dickey–Fuller",
    "front": "Dickey–Fuller 検定を設定せよ。仮説は何で、どの臨界値を使うか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta Y_t=\\beta_0+\\gamma Y_{t-1}+\\varepsilon_t$$</div><div class=\"eq-block\">$$\\gamma=\\phi-1$$</div><p>\\(H_0:\\gamma=0\\)（<strong>単位根</strong>）対 \\(H_a:\\gamma<0\\)（定常）。Student の \\(t\\) ではなく <strong>Dickey–Fuller の臨界値</strong>を使い、統計量が十分に負なら棄却。</p></div>",
    "gap": "棄却できなければ単位根の可能性が残る；差分をとって再検定する。ADF は高次の相関に対応するためラグ付き差分を加える。"
   },
   "fr": {
    "topic": "Racines unitaires · Dickey–Fuller",
    "front": "Posez le test de Dickey–Fuller. Quelles sont les hypothèses, et quelles valeurs critiques s’appliquent ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\Delta Y_t=\\beta_0+\\gamma Y_{t-1}+\\varepsilon_t$$</div><div class=\"eq-block\">$$\\gamma=\\phi-1$$</div><p>\\(H_0:\\gamma=0\\) (<strong>racine unitaire</strong>) contre \\(H_a:\\gamma<0\\) (stationnaire). Utiliser les <strong>valeurs critiques de Dickey–Fuller</strong>, pas celles de Student ; rejeter si la statistique est assez négative.</p></div>",
    "gap": "Ne pas rejeter laisse une racine unitaire plausible ; différencier et retester. L’ADF ajoute des différences retardées pour la corrélation d’ordre supérieur."
   }
  },
  "q5-differencing": {
   "zh": {
    "topic": "单位根 · 差分",
    "front": "对带漂移的随机游走做一阶差分得到什么？不必要的差分无害吗？",
    "back": "<div class=\"ans\"><p>\\(\\Delta Y_t=\\beta_0+\\varepsilon_t\\)：围绕漂移项平稳（只有不带漂移的游走才得到 \\(\\Delta Y_t=\\varepsilon_t\\)）。</p><p><strong>并非无害</strong>：过度差分会增加噪声和移动平均特征。</p></div>"
   },
   "ja": {
    "topic": "単位根 · 差分",
    "front": "ドリフト付きランダムウォークの 1 階差分をとると何になるか。不要な差分は無害か。",
    "back": "<div class=\"ans\"><p>\\(\\Delta Y_t=\\beta_0+\\varepsilon_t\\)：ドリフトの周りで定常（ドリフトのないウォークだけが \\(\\Delta Y_t=\\varepsilon_t\\) になる）。</p><p><strong>無害ではない</strong>：過剰な差分はノイズと移動平均的な性質を加える。</p></div>"
   },
   "fr": {
    "topic": "Racines unitaires · différenciation",
    "front": "Que donne la différence première d’une marche aléatoire avec dérive ? Une différenciation inutile est-elle sans danger ?",
    "back": "<div class=\"ans\"><p>\\(\\Delta Y_t=\\beta_0+\\varepsilon_t\\) : stationnaire autour de la dérive (seule une marche sans dérive donne \\(\\Delta Y_t=\\varepsilon_t\\)).</p><p><strong>Pas sans danger</strong> : sur-différencier ajoute du bruit et un comportement de moyenne mobile.</p></div>"
   }
  },
  "q5-arch": {
   "zh": {
    "topic": "波动率 · ARCH 与 GARCH",
    "front": "ARCH(q) 和 GARCH(p,q) 对什么建模？如何发现 ARCH 效应？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_t^2=\\alpha_0+\\sum_{i=1}^{q}\\alpha_i\\varepsilon_{t-i}^2+\\sum_{j=1}^{p}\\beta_j\\sigma_{t-j}^2$$</div><p>它们对<strong>条件方差</strong>（波动率聚集）建模，而不是均值；GARCH 加入滞后方差来刻画持续性。用<strong>残差平方</strong>的 ACF 或 ARCH LM 检验来发现。用极大似然估计。</p></div>"
   },
   "ja": {
    "topic": "ボラティリティ · ARCH と GARCH",
    "front": "ARCH(q) と GARCH(p,q) は何をモデル化するか。ARCH 効果はどう見つけるか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_t^2=\\alpha_0+\\sum_{i=1}^{q}\\alpha_i\\varepsilon_{t-i}^2+\\sum_{j=1}^{p}\\beta_j\\sigma_{t-j}^2$$</div><p>平均ではなく<strong>条件付き分散</strong>（ボラティリティ・クラスタリング）をモデル化する；GARCH は持続性のためにラグ付き分散を加える。<strong>残差の二乗</strong>の ACF や ARCH LM 検定で見つける。最尤法で推定する。</p></div>"
   },
   "fr": {
    "topic": "Volatilité · ARCH et GARCH",
    "front": "Que modélisent ARCH(q) et GARCH(p,q), et comment détecter des effets ARCH ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\sigma_t^2=\\alpha_0+\\sum_{i=1}^{q}\\alpha_i\\varepsilon_{t-i}^2+\\sum_{j=1}^{p}\\beta_j\\sigma_{t-j}^2$$</div><p>Ils modélisent la <strong>variance conditionnelle</strong> (regroupement de volatilité), pas la moyenne ; le GARCH ajoute des variances retardées pour la persistance. Détecter avec l’ACF des <strong>résidus au carré</strong> ou un test LM ARCH. Estimation par maximum de vraisemblance.</p></div>"
   }
  },
  "q5-cointegration": {
   "zh": {
    "topic": "协整 · Engle–Granger",
    "front": "一个单位根序列对另一个单位根序列的回归什么时候不是伪回归？如何检验？",
    "back": "<div class=\"ans\"><p>当序列<strong>协整</strong>时：它们的某个线性组合是平稳的（长期均衡）。</p><ul><li>对每个序列做单位根检验（单整阶数相同）</li><li>做水平值回归 \\(Y_t=\\beta_0+\\beta_1X_t+u_t\\)</li><li>用 <strong>Engle–Granger</strong> 临界值对残差做单位根检验</li></ul><p>残差平稳 → 协整；否则水平值回归很可能是伪回归。</p></div>",
    "gap": "协整并不使每个序列平稳；平稳的只是它们的组合。"
   },
   "ja": {
    "topic": "共和分 · Engle–Granger",
    "front": "単位根系列を別の単位根系列に回帰しても見せかけにならないのはいつか。どう検定するか。",
    "back": "<div class=\"ans\"><p>系列が<strong>共和分</strong>しているとき：ある線形結合が定常（長期均衡）。</p><ul><li>各系列の単位根を検定する（和分の次数が同じ）</li><li>水準の回帰 \\(Y_t=\\beta_0+\\beta_1X_t+u_t\\) を行う</li><li><strong>Engle–Granger</strong> の臨界値で残差の単位根を検定する</li></ul><p>残差が定常 → 共和分；そうでなければ水準の回帰はおそらく見せかけ。</p></div>",
    "gap": "共和分しても各系列が定常になるわけではない；定常なのは組合せだけ。"
   },
   "fr": {
    "topic": "Cointégration · Engle–Granger",
    "front": "Quand la régression d’une série à racine unitaire sur une autre n’est-elle pas fallacieuse, et comment le tester ?",
    "back": "<div class=\"ans\"><p>Quand les séries sont <strong>cointégrées</strong> : une combinaison linéaire est stationnaire (un équilibre de long terme).</p><ul><li>Tester une racine unitaire pour chaque série (même ordre d’intégration)</li><li>Estimer la régression en niveaux \\(Y_t=\\beta_0+\\beta_1X_t+u_t\\)</li><li>Tester la racine unitaire des résidus avec les valeurs critiques d’<strong>Engle–Granger</strong></li></ul><p>Résidus stationnaires → cointégrées ; sinon, la régression en niveaux est probablement fallacieuse.</p></div>",
    "gap": "La cointégration ne rend pas chaque série stationnaire ; seule la combinaison l’est."
   }
  },
  "q5-workflow": {
   "zh": {
    "topic": "模型选择",
    "front": "一个序列有单位根。还能用 ARIMA 吗？什么样的最终模型才可以接受？",
    "back": "<div class=\"ans\"><p><strong>可以。</strong>单位根排除的是对<em>水平值</em>拟合平稳的 AR、MA 或 ARMA；只要差分 \\(d\\) 次后得到平稳的 ARMA，ARIMA 就可用。</p><p>偏好简约的模型：系数合理、残差为白噪声、参数稳定、样本外表现可信。</p></div>"
   },
   "ja": {
    "topic": "モデルの選択",
    "front": "系列に単位根がある。それでも ARIMA は使えるか。最終的なモデルはどんな条件なら受け入れられるか。",
    "back": "<div class=\"ans\"><p><strong>使える。</strong>単位根があると<em>水準</em>に定常な AR、MA、ARMA を当てはめられないが、\\(d\\) 回差分をとって定常な ARMA になれば ARIMA は使える。</p><p>係数が妥当で、残差がホワイトノイズで、パラメータが安定し、標本外の結果も信頼できる、簡潔なモデルを選ぶ。</p></div>"
   },
   "fr": {
    "topic": "Choix du modèle",
    "front": "Une série a une racine unitaire. Peut-on encore utiliser un ARIMA ? Qu’est-ce qui rend un modèle final acceptable ?",
    "back": "<div class=\"ans\"><p><strong>Oui.</strong> Une racine unitaire interdit d’ajuster un AR, MA ou ARMA stationnaire au <em>niveau</em> ; l’ARIMA fonctionne si \\(d\\) différenciations donnent un ARMA stationnaire.</p><p>Préférer un modèle parcimonieux aux coefficients sensés, aux résidus de bruit blanc, aux paramètres stables et aux performances hors échantillon crédibles.</p></div>"
   }
  }
 }
});
