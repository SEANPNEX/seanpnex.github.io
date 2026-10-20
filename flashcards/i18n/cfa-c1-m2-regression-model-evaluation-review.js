deckI18n({
 "source": {
  "zh": "CFA 二级 数量方法 · M2 回归模型评价 · 单元复习",
  "ja": "CFA レベル II 数量分析 · M2 回帰モデルの評価 · 単元の復習",
  "fr": "CFA niveau II Méthodes quantitatives · M2 Évaluation du modèle de régression · Révision de l’unité"
 },
 "gapLabel": {
  "zh": "考试陷阱",
  "ja": "試験の落とし穴",
  "fr": "Piège d’examen"
 },
 "cards": {
  "q2-three-questions": {
   "zh": {
    "topic": "评价 · 三个问题",
    "front": "模型评价要回答三个不同的问题。分别是什么？",
    "back": "<div class=\"ans\"><ul><li><strong>拟合</strong>：模型解释了多少样本变动？</li><li><strong>简约</strong>：增加的拟合度值得增加的复杂度吗？</li><li><strong>推断</strong>：单个变量、全部变量或选定的一组变量是否显著？</li></ul><p>任何一个单独都不能证明模型设定正确或在经济上有用。</p></div>"
   },
   "ja": {
    "topic": "評価 · 3 つの問い",
    "front": "モデルの評価では 3 つの異なる問いを立てる。それは何か。",
    "back": "<div class=\"ans\"><ul><li><strong>当てはまり</strong>：モデルは標本の変動をどれだけ説明するか</li><li><strong>簡潔さ</strong>：当てはまりの改善は複雑さの増加に見合うか</li><li><strong>推論</strong>：個々の変数、全変数、選んだ変数群は有意か</li></ul><p>どれも単独では、モデルの特定が正しいことや経済的に有用であることを証明しない。</p></div>"
   },
   "fr": {
    "topic": "Évaluation · trois questions",
    "front": "L’évaluation d’un modèle pose trois questions différentes. Lesquelles ?",
    "back": "<div class=\"ans\"><ul><li><strong>Ajustement</strong> : quelle part de la variation de l’échantillon le modèle explique-t-il ?</li><li><strong>Parcimonie</strong> : le gain d’ajustement vaut-il la complexité ajoutée ?</li><li><strong>Inférence</strong> : les variables individuelles, toutes, ou un groupe choisi sont-elles significatives ?</li></ul><p>Aucune ne prouve seule que le modèle est bien spécifié ou économiquement utile.</p></div>"
   }
  },
  "q2-high-r2": {
   "zh": {
    "topic": "拟合 · R²",
    "front": "一个模型的 \\(R^2\\) 很高。说出它不能证明的三件事。",
    "back": "<div class=\"ans\"><ul><li><strong>因果关系</strong></li><li><strong>良好的样本外预测</strong></li><li>回归<strong>假设已得到满足</strong></li></ul></div>",
    "gap": "普通 R² 在加入预测变量时从不下降，即使是无用的变量。"
   },
   "ja": {
    "topic": "当てはまり · R²",
    "front": "あるモデルの \\(R^2\\) が高い。これでは確かめられないことを 3 つ挙げよ。",
    "back": "<div class=\"ans\"><ul><li><strong>因果関係</strong></li><li><strong>標本外での良い予測</strong></li><li>回帰の<strong>仮定が満たされている</strong>こと</li></ul></div>",
    "gap": "通常の R² は、役に立たない変数であっても、説明変数を加えると下がることがない。"
   },
   "fr": {
    "topic": "Ajustement · R²",
    "front": "Un modèle a un \\(R^2\\) élevé. Citez trois choses que cela n’établit pas.",
    "back": "<div class=\"ans\"><ul><li>La <strong>causalité</strong></li><li>De <strong>bonnes prévisions hors échantillon</strong></li><li>Que les <strong>hypothèses de la régression sont satisfaites</strong></li></ul></div>",
    "gap": "Le R² ordinaire ne baisse jamais quand on ajoute un prédicteur, même inutile."
   }
  },
  "q2-adj-r2": {
   "zh": {
    "topic": "拟合 · 调整后 R²",
    "front": "给出调整后 \\(R^2\\) 的公式。它与 \\(R^2\\) 有何不同？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\bar R^2=1-\\left(\\frac{n-1}{n-k-1}\\right)(1-R^2)$$</div><ul><li>惩罚多余的预测变量：加入无用变量时<strong>可能下降</strong></li><li>它<strong>可以为负</strong></li><li>只比较<strong>因变量和样本相同</strong>的模型；越高越好</li></ul></div>"
   },
   "ja": {
    "topic": "当てはまり · 自由度調整済み R²",
    "front": "自由度調整済み \\(R^2\\) の式を示せ。\\(R^2\\) とどう違うか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\bar R^2=1-\\left(\\frac{n-1}{n-k-1}\\right)(1-R^2)$$</div><ul><li>余分な説明変数にペナルティを課す：役に立たない変数を加えると<strong>下がりうる</strong></li><li><strong>マイナスにもなりうる</strong></li><li>比較するのは<strong>従属変数と標本が同じ</strong>モデルだけ；高いほうが良い</li></ul></div>"
   },
   "fr": {
    "topic": "Ajustement · R² ajusté",
    "front": "Donnez la formule du \\(R^2\\) ajusté. En quoi diffère-t-il du \\(R^2\\) ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$\\bar R^2=1-\\left(\\frac{n-1}{n-k-1}\\right)(1-R^2)$$</div><ul><li>Pénalise les prédicteurs supplémentaires : il <strong>peut baisser</strong> quand on ajoute une variable inutile</li><li>Il <strong>peut être négatif</strong></li><li>Ne comparer que des modèles ayant <strong>la même variable dépendante et le même échantillon</strong> ; plus élevé est préférable</li></ul></div>"
   }
  },
  "q2-aic": {
   "zh": {
    "topic": "简约 · AIC",
    "front": "写出 OLS 模型的 AIC。越高越好还是越低越好？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$AIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+2(k+1)$$</div><p>第一项奖励拟合（SSE 越小越好）；第二项惩罚 \\(k\\) 个斜率加截距。<strong>AIC 越低越好。</strong></p></div>"
   },
   "ja": {
    "topic": "簡潔さ · AIC",
    "front": "OLS モデルの AIC を書け。高いほうが良いか、低いほうが良いか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$AIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+2(k+1)$$</div><p>第 1 項は当てはまりを評価し（SSE が小さいほど良い）、第 2 項は \\(k\\) 個の傾きと切片にペナルティを課す。<strong>AIC は低いほうが良い。</strong></p></div>"
   },
   "fr": {
    "topic": "Parcimonie · AIC",
    "front": "Écrivez l’AIC d’un modèle MCO. Plus élevé ou plus bas, lequel est meilleur ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$AIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+2(k+1)$$</div><p>Le premier terme récompense l’ajustement (SSE plus faible) ; le second pénalise les \\(k\\) pentes plus la constante. <strong>Un AIC plus bas est préférable.</strong></p></div>"
   }
  },
  "q2-bic": {
   "zh": {
    "topic": "简约 · BIC",
    "front": "写出 BIC。为什么它通常比 AIC 选出更小的模型？",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$BIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+\\ln(n)(k+1)$$</div><p>它对每个参数的惩罚是 \\(\\ln(n)\\)，当 \\(n>e^2\\approx7.39\\) 时就超过 AIC 的 2。因此 BIC 对多余变量的惩罚更重，偏好<strong>更简约</strong>的模型。越低越好。</p></div>",
    "gap": "CFA 的用法：目标是预测时偏好 AIC，目标是最佳拟合优度时偏好 BIC。"
   },
   "ja": {
    "topic": "簡潔さ · BIC",
    "front": "BIC を書け。なぜ通常 AIC より小さいモデルを選ぶのか。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$BIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+\\ln(n)(k+1)$$</div><p>パラメータ 1 つ当たりのペナルティは \\(\\ln(n)\\) で、\\(n>e^2\\approx7.39\\) なら AIC の 2 を上回る。そのため BIC は余分な変数により重いペナルティを課し、<strong>より簡潔な</strong>モデルを好む。低いほうが良い。</p></div>",
    "gap": "CFA での使い分け：予測が目的なら AIC、最良の当てはまりが目的なら BIC。"
   },
   "fr": {
    "topic": "Parcimonie · BIC",
    "front": "Écrivez le BIC. Pourquoi choisit-il en général des modèles plus petits que l’AIC ?",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$BIC=n\\ln\\!\\left(\\frac{SSE}{n}\\right)+\\ln(n)(k+1)$$</div><p>Sa pénalité par paramètre est \\(\\ln(n)\\), qui dépasse le 2 de l’AIC dès que \\(n>e^2\\approx7.39\\). Le BIC pénalise donc davantage les variables supplémentaires et favorise des modèles <strong>plus parcimonieux</strong>. Plus bas est préférable.</p></div>",
    "gap": "Usage CFA : l’AIC est préféré quand le but est la prévision, le BIC quand le but est la meilleure qualité d’ajustement."
   }
  },
  "q2-ic-level": {
   "zh": {
    "topic": "简约 · 解读 AIC 和 BIC",
    "front": "单独一个 −312 的 AIC：好还是不好？",
    "back": "<div class=\"ans\"><p><strong>都谈不上。</strong>绝对值本身几乎没有意义。AIC 和 BIC 只用来<strong>给</strong>基于<strong>相同观测值和因变量</strong>拟合的<strong>模型排序</strong>。</p></div>"
   },
   "ja": {
    "topic": "簡潔さ · AIC と BIC の読み方",
    "front": "AIC が −312 というだけで、良いか悪いか。",
    "back": "<div class=\"ans\"><p><strong>どちらでもない。</strong>絶対値だけではほとんど意味がない。AIC と BIC は、<strong>同じ観測値と従属変数</strong>で推定した<strong>モデルの順位付け</strong>にしか使えない。</p></div>"
   },
   "fr": {
    "topic": "Parcimonie · lire l’AIC et le BIC",
    "front": "Un AIC de −312 à lui seul : bon ou mauvais ?",
    "back": "<div class=\"ans\"><p><strong>Ni l’un ni l’autre.</strong> La valeur absolue n’a guère de sens isolément. L’AIC et le BIC servent seulement à <strong>classer des modèles</strong> estimés sur <strong>les mêmes observations et la même variable dépendante</strong>.</p></div>"
   }
  },
  "q2-restricted-f": {
   "zh": {
    "topic": "推断 · 受约束 F 检验",
    "front": "如何检验一部分系数（例如 \\(\\beta_2=\\beta_3=0\\)）是否联合为零？",
    "back": "<div class=\"ans\"><p>估计<strong>无约束</strong>模型（全部 \\(k\\) 个预测变量）和<strong>受约束</strong>模型（去掉被检验的变量），然后</p><div class=\"eq-block\">$$F=\\frac{(SSE_R-SSE_U)/q}{SSE_U/(n-k-1)}$$</div><div class=\"eq-block\">$$df=(q,\\;n-k-1)$$</div><p>\\(q\\) = 约束条件的个数。\\(F\\) 大则拒绝。</p></div>",
    "gap": "总有 SSE_U ≤ SSE_R：无约束模型更灵活。分母用无约束模型的 k。"
   },
   "ja": {
    "topic": "推論 · 制約付き F 検定",
    "front": "係数の一部（例：\\(\\beta_2=\\beta_3=0\\)）が同時にゼロかどうかはどう検定するか。",
    "back": "<div class=\"ans\"><p><strong>制約なし</strong>モデル（\\(k\\) 個すべての説明変数）と<strong>制約付き</strong>モデル（検定する変数を除く）を推定し、</p><div class=\"eq-block\">$$F=\\frac{(SSE_R-SSE_U)/q}{SSE_U/(n-k-1)}$$</div><div class=\"eq-block\">$$df=(q,\\;n-k-1)$$</div><p>\\(q\\) = 制約の数。\\(F\\) が大きければ棄却。</p></div>",
    "gap": "常に SSE_U ≤ SSE_R：制約なしモデルのほうが柔軟。分母には制約なしモデルの k を使う。"
   },
   "fr": {
    "topic": "Inférence · test F contraint",
    "front": "Comment tester si un sous-ensemble de coefficients, p. ex. \\(\\beta_2=\\beta_3=0\\), est conjointement nul ?",
    "back": "<div class=\"ans\"><p>Estimer le modèle <strong>non contraint</strong> (les \\(k\\) prédicteurs) et le modèle <strong>contraint</strong> (sans les variables testées), puis</p><div class=\"eq-block\">$$F=\\frac{(SSE_R-SSE_U)/q}{SSE_U/(n-k-1)}$$</div><div class=\"eq-block\">$$df=(q,\\;n-k-1)$$</div><p>\\(q\\) = nombre de contraintes. Rejeter pour un \\(F\\) élevé.</p></div>",
    "gap": "Toujours SSE_U ≤ SSE_R : le modèle non contraint est plus flexible. Utiliser le k du modèle non contraint au dénominateur."
   }
  },
  "q2-restricted-example": {
   "zh": {
    "topic": "推断 · 计算例题",
    "front": "\\(n=100\\)，\\(k=4\\)，检验 \\(\\beta_3=\\beta_4=0\\)。\\(SSE_R=480\\)，\\(SSE_U=400\\)。计算 \\(F\\)，并在 5% 水平下得出结论（临界值 ≈ 3.09）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(480-400)/2}{400/95}=\\frac{40}{4.21}\\approx9.50$$</div><p>\\(9.50>3.09\\) → <strong>拒绝</strong> \\(H_0\\)：\\(X_3\\) 和 \\(X_4\\) <strong>联合显著</strong>。</p></div>",
    "gap": "联合显著并不意味着两个系数各自都显著。"
   },
   "ja": {
    "topic": "推論 · 計算例",
    "front": "\\(n=100\\)、\\(k=4\\)、\\(\\beta_3=\\beta_4=0\\) を検定する。\\(SSE_R=480\\)、\\(SSE_U=400\\)。\\(F\\) を計算し、5% 水準で結論を出せ（臨界値 ≈ 3.09）。",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(480-400)/2}{400/95}=\\frac{40}{4.21}\\approx9.50$$</div><p>\\(9.50>3.09\\) → \\(H_0\\) を<strong>棄却</strong>：\\(X_3\\) と \\(X_4\\) は<strong>同時に有意</strong>。</p></div>",
    "gap": "同時に有意でも、2 つの係数がそれぞれ個別に有意とは限らない。"
   },
   "fr": {
    "topic": "Inférence · exemple chiffré",
    "front": "\\(n=100\\), \\(k=4\\), on teste \\(\\beta_3=\\beta_4=0\\). \\(SSE_R=480\\), \\(SSE_U=400\\). Calculez \\(F\\) et concluez à 5 % (valeur critique ≈ 3.09).",
    "back": "<div class=\"ans\"><div class=\"eq-block\">$$F=\\frac{(480-400)/2}{400/95}=\\frac{40}{4.21}\\approx9.50$$</div><p>\\(9.50>3.09\\) → <strong>rejeter</strong> \\(H_0\\) : \\(X_3\\) et \\(X_4\\) sont <strong>conjointement significatives</strong>.</p></div>",
    "gap": "La significativité conjointe ne signifie pas que chacun des deux coefficients est significatif isolément."
   }
  },
  "q2-f-t": {
   "zh": {
    "topic": "推断 · 单个约束",
    "front": "只有一个约束（\\(q=1\\)）时，受约束 F 检验与 t 检验是什么关系？",
    "back": "<div class=\"ans\"><p>两者等价：对于相应的双侧系数检验，\\(F=t^2\\)。</p></div>"
   },
   "ja": {
    "topic": "推論 · 制約が 1 つ",
    "front": "制約が 1 つ（\\(q=1\\)）のとき、制約付き F 検定と t 検定はどう関係するか。",
    "back": "<div class=\"ans\"><p>同等である：対応する両側の係数検定について \\(F=t^2\\)。</p></div>"
   },
   "fr": {
    "topic": "Inférence · une seule contrainte",
    "front": "Avec une seule contrainte (\\(q=1\\)), quel est le lien entre le test F contraint et le test t ?",
    "back": "<div class=\"ans\"><p>Ils sont équivalents : \\(F=t^2\\) pour le test bilatéral correspondant sur le coefficient.</p></div>"
   }
  },
  "q2-fail-reject": {
   "zh": {
    "topic": "推断 · 解读",
    "front": "你未能拒绝“系数为零”的 H₀。这证明了系数为零吗？",
    "back": "<div class=\"ans\"><p><strong>没有。</strong>未能拒绝不等于证明原假设为真；只是数据不足以构成反驳它的有力证据。</p></div>"
   },
   "ja": {
    "topic": "推論 · 解釈",
    "front": "係数がゼロという H₀ を棄却できなかった。係数がゼロであることを示したことになるか。",
    "back": "<div class=\"ans\"><p><strong>ならない。</strong>棄却できないことは帰無仮説が正しい証明ではなく、データがそれに反する十分な証拠にならないというだけ。</p></div>"
   },
   "fr": {
    "topic": "Inférence · interprétation",
    "front": "Vous ne rejetez pas H₀ selon laquelle un coefficient est nul. Avez-vous montré que le coefficient est nul ?",
    "back": "<div class=\"ans\"><p><strong>Non.</strong> Ne pas rejeter n’est pas une preuve que l’hypothèse nulle est vraie ; les données ne sont simplement pas une preuve assez forte contre elle.</p></div>"
   }
  },
  "q2-checklist": {
   "zh": {
    "topic": "模型比较",
    "front": "在偏好更复杂的模型之前，应该检查什么？",
    "back": "<div class=\"ans\"><ul><li>因变量和观测值相同吗？</li><li>调整后 R²、AIC 或 BIC 更好吗？</li><li>新增的系数单独或联合显著吗？</li><li>符号和大小在经济上合理吗？</li><li>残差诊断支持各项假设吗？</li><li>在未用于估计的数据上表现好吗？</li></ul></div>"
   },
   "ja": {
    "topic": "モデルの比較",
    "front": "より複雑なモデルを選ぶ前に、何を確認すべきか。",
    "back": "<div class=\"ans\"><ul><li>従属変数と観測値は同じか</li><li>自由度調整済み R²、AIC、BIC は改善したか</li><li>加えた係数は個別に、または同時に有意か</li><li>符号と大きさは経済的に妥当か</li><li>残差の診断は仮定を支持するか</li><li>推定に使っていないデータでも良い結果か</li></ul></div>"
   },
   "fr": {
    "topic": "Comparaison de modèles",
    "front": "Avant de préférer un modèle plus complexe, que faut-il vérifier ?",
    "back": "<div class=\"ans\"><ul><li>Même variable dépendante et mêmes observations ?</li><li>Meilleurs R² ajusté, AIC ou BIC ?</li><li>Coefficients ajoutés significatifs individuellement ou conjointement ?</li><li>Signes et ordres de grandeur économiquement plausibles ?</li><li>Les diagnostics des résidus confirment-ils les hypothèses ?</li><li>Bonnes performances sur des données non utilisées pour l’estimation ?</li></ul></div>"
   }
  }
 }
});
