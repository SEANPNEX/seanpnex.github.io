deckI18n({
  source: {
    zh: 'CFA 二级 数量方法 · 测验错题',
    ja: 'CFA レベル II 数量分析 · クイズの間違い',
    fr: 'CFA niveau II Méthodes quantitatives · Erreurs de quiz',
  },
  cards: {
    'quant-m1-regression-assumptions-2026-10-23': {
      zh: {
        topic: 'M1 多元回归 · 假设',
        front: '列出多元线性回归模型的假设。',
        back: `<div class="ans">
<ol>
<li><strong>线性</strong>：Y 与回归系数之间呈线性关系</li>
<li><strong>同方差</strong>：不同观测值的误差方差恒定</li>
<li><strong>误差独立性</strong>：残差之间不存在序列相关</li>
<li><strong>正态性</strong>：误差服从正态分布</li>
<li><strong>自变量独立性</strong>：各自变量之间不存在<strong>完全</strong>线性关系，且自变量不是随机变量</li>
</ol>
<p>注意：该假设仅排除<strong>完全</strong>多重共线性。高度但不完全的多重共线性并不违反假设，但会放大标准误。</p>
</div>`,
        gap: '漏掉了误差独立性（无序列相关）；关于 X 的假设是不存在<em>完全</em>多重共线性。',
      },
      ja: {
        topic: 'M1 重回帰 · 仮定',
        front: '重回帰モデルの仮定を列挙せよ。',
        back: `<div class="ans">
<ol>
<li><strong>線形性</strong>：Y は回帰係数について線形である</li>
<li><strong>均一分散</strong>：観測値を通じて誤差分散が一定である</li>
<li><strong>誤差の独立性</strong>：残差間に系列相関がない</li>
<li><strong>正規性</strong>：誤差は正規分布に従う</li>
<li><strong>説明変数の独立性</strong>：独立変数間に<strong>完全な</strong>線形関係がなく、独立変数は確率変数ではない</li>
</ol>
<p>注：この仮定が排除するのは<strong>完全な</strong>多重共線性のみ。高度でも不完全な多重共線性は仮定に反しないが、標準誤差を大きくする。</p>
</div>`,
        gap: '誤差の独立性（系列相関がないこと）を落とした；X に関する仮定は<em>完全な</em>多重共線性がないこと。',
      },
      fr: {
        topic: 'M1 Régression multiple · Hypothèses',
        front: 'Énumérez les hypothèses du modèle de régression linéaire multiple.',
        back: `<div class="ans">
<ol>
<li><strong>Linéarité</strong> : Y est linéaire par rapport aux coefficients</li>
<li><strong>Homoscédasticité</strong> : variance des erreurs constante entre observations</li>
<li><strong>Indépendance des erreurs</strong> : pas d’autocorrélation entre résidus</li>
<li><strong>Normalité</strong> : les erreurs suivent une loi normale</li>
<li><strong>Indépendance des X</strong> : aucune relation linéaire <strong>parfaite</strong> entre les variables indépendantes, et celles-ci ne sont pas aléatoires</li>
</ol>
<p>Remarque : l’hypothèse n’exclut que la multicolinéarité <strong>parfaite</strong>. Une multicolinéarité forte mais imparfaite ne viole aucune hypothèse ; elle gonfle les erreurs-types.</p>
</div>`,
        gap: 'oubli de l’indépendance des erreurs (absence d’autocorrélation) ; l’hypothèse sur les X est l’absence de multicolinéarité <em>parfaite</em>.',
      },
    },
    'quant-m1-slope-interpretation-2026-10-23': {
      zh: {
        topic: 'M1 多元回归 · 系数解释',
        front: '在多元回归中，如何解释斜率系数 \\(b_j\\) 和截距 \\(b_0\\)？',
        back: `<div class="ans">
<ul>
<li>\\(b_j\\)：在<strong>保持其他所有 X 不变</strong>的情况下，\\(X_j\\) 每变动 1 个单位时 Y 的预期变化</li>
<li>因此它被称为<strong>偏</strong>回归（斜率）系数</li>
<li>\\(b_0\\)：当<strong>所有</strong> X 都等于 0 时 Y 的期望值</li>
</ul>
</div>`,
        gap: '漏掉了“保持其他所有 X 不变”这一句，而这正是它被称为偏系数的原因。',
      },
      ja: {
        topic: 'M1 重回帰 · 係数の解釈',
        front: '重回帰において、傾き係数 \\(b_j\\) と切片 \\(b_0\\) をどのように解釈するか。',
        back: `<div class="ans">
<ul>
<li>\\(b_j\\)：<strong>他のすべての X を一定に保ったまま</strong>、\\(X_j\\) が 1 単位変化したときの Y の期待変化</li>
<li>そのため<strong>偏</strong>回帰（傾き）係数と呼ばれる</li>
<li>\\(b_0\\)：<strong>すべての</strong> X が 0 に等しいときの Y の期待値</li>
</ul>
</div>`,
        gap: 'これを偏係数たらしめている「他のすべての X を一定に保ったまま」という部分を落とした。',
      },
      fr: {
        topic: 'M1 Régression multiple · Interprétation des coefficients',
        front: 'Comment interprète-t-on un coefficient de pente \\(b_j\\) et l’ordonnée à l’origine \\(b_0\\) dans une régression multiple ?',
        back: `<div class="ans">
<ul>
<li>\\(b_j\\) : la variation attendue de Y pour une variation d’une unité de \\(X_j\\), <strong>tous les autres X étant maintenus constants</strong></li>
<li>C’est pourquoi on l’appelle un coefficient de régression (de pente) <strong>partiel</strong></li>
<li>\\(b_0\\) : la valeur attendue de Y lorsque <strong>tous</strong> les X sont égaux à 0</li>
</ul>
</div>`,
        gap: 'oubli de « tous les autres X étant maintenus constants », ce qui en fait précisément un coefficient partiel.',
      },
    },
    'quant-ts-differenced-random-walk-2026-11-15': {
      zh: {
        topic: 'M5 时间序列 · 随机游走',
        front: '对一阶差分序列 \\(y_t=x_t-x_{t-1}\\) 估计 AR(1) 模型：\\(y_t=b_0+b_1 y_{t-1}+\\varepsilon_t\\)。斜率为 0.052（\\(t=0.585\\)），截距不显著（\\(t=-1.13\\)）。原序列 \\(x_t\\) 服从什么过程？',
        back: `<div class="ans">
<p><strong>随机游走</strong>（无漂移项）。</p>
<ul>
<li>在差分后的 AR(1) 中，截距与一阶差分的滞后项均不显著异于 0，与 \\(b_0=0\\) 且 \\(b_1=0\\) 一致。一阶差分后的随机游走就是 \\(y_t=\\varepsilon_t\\)：没有任何可预测成分，因此得出原序列是随机游走的结论。</li>
<li>原水平序列的 AR(1) 由此为 \\(x_t=x_{t-1}+\\varepsilon_t\\)，即 \\(b_0=0\\)、\\(b_1=1\\) 的特例。它存在单位根，因此<strong>不是</strong>协方差平稳的：\\(\\operatorname{Var}(x_t)=(t-1)\\sigma^2\\) 会无界增长。</li>
<li>原序列的均值回归水平 \\(b_0/(1-b_1)\\) 为 \\(0/0\\)，无定义。</li>
</ul>
<p>一阶差分序列是协方差平稳的；这正说明原序列是随机游走，而非协方差平稳。</p>
</div>`,
        gap: '错选了协方差平稳。',
      },
      ja: {
        topic: 'M5 時系列 · ランダム・ウォーク',
        front: '1 階階差系列 \\(y_t=x_t-x_{t-1}\\) に対して AR(1) モデル \\(y_t=b_0+b_1 y_{t-1}+\\varepsilon_t\\) を推定した。傾きは 0.052（\\(t=0.585\\)）、切片は有意でない（\\(t=-1.13\\)）。元の系列 \\(x_t\\) はどのような過程に従うか。',
        back: `<div class="ans">
<p><strong>ランダム・ウォーク</strong>（ドリフトなし）。</p>
<ul>
<li>階差をとった AR(1) で、切片も 1 階階差のラグも 0 と有意に異ならず、\\(b_0=0\\) かつ \\(b_1=0\\) と整合的である。ランダム・ウォークの 1 階階差は \\(y_t=\\varepsilon_t\\) にすぎず、予測できるものが残らないため、元の系列はランダム・ウォークであると結論づける。</li>
<li>このとき水準の AR(1) は \\(x_t=x_{t-1}+\\varepsilon_t\\) となり、\\(b_0=0\\)、\\(b_1=1\\) の特殊ケースにあたる。単位根をもつため共分散定常では<strong>ない</strong>：\\(\\operatorname{Var}(x_t)=(t-1)\\sigma^2\\) は限りなく増大する。</li>
<li>元の系列の平均回帰水準 \\(b_0/(1-b_1)\\) は \\(0/0\\) となり定義されない。</li>
</ul>
<p>1 階階差は共分散定常である；それこそが、元の系列が（共分散定常ではない）ランダム・ウォークであることの証拠である。</p>
</div>`,
        gap: '「共分散定常」を選んでしまった。',
      },
      fr: {
        topic: 'M5 Séries temporelles · Marche aléatoire',
        front: 'Un modèle AR(1) est estimé sur la série différenciée au premier ordre \\(y_t=x_t-x_{t-1}\\) : \\(y_t=b_0+b_1 y_{t-1}+\\varepsilon_t\\). La pente est de 0,052 (\\(t=0{,}585\\)) et l’ordonnée à l’origine est non significative (\\(t=-1{,}13\\)). Quel processus suit la série d’origine \\(x_t\\) ?',
        back: `<div class="ans">
<p><strong>Une marche aléatoire</strong> (sans dérive).</p>
<ul>
<li>Ni l’ordonnée à l’origine ni le retard de la différence première ne diffèrent significativement de 0, ce qui est cohérent avec \\(b_0=0\\) et \\(b_1=0\\) dans l’AR(1) différencié. Une marche aléatoire différenciée au premier ordre se réduit à \\(y_t=\\varepsilon_t\\) : il ne reste rien à prévoir, d’où la conclusion que la série d’origine est une marche aléatoire.</li>
<li>L’AR(1) en niveau s’écrit alors \\(x_t=x_{t-1}+\\varepsilon_t\\), cas particulier \\(b_0=0\\), \\(b_1=1\\). Elle possède une racine unitaire et n’est donc <strong>pas</strong> stationnaire en covariance : \\(\\operatorname{Var}(x_t)=(t-1)\\sigma^2\\) croît sans borne.</li>
<li>Le niveau de retour à la moyenne de la série d’origine, \\(b_0/(1-b_1)\\), vaut \\(0/0\\) et n’est pas défini.</li>
</ul>
<p>La différence première est stationnaire en covariance ; c’est précisément la preuve que la série d’origine est une marche aléatoire, laquelle ne l’est pas.</p>
</div>`,
        gap: 'a choisi stationnaire en covariance.',
      },
    },
  },
});
