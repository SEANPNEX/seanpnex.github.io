deckI18n({
  source: {
    zh: 'CFA 二级 经济增长 · 新古典 / 索洛 · 测验 2026-10-13',
    ja: 'CFA レベル II 経済成長 · 新古典派 / ソロー · クイズ 2026-10-13',
    fr: 'CFA niveau II Croissance économique · néoclassique / Solow · Quiz 2026-10-13',
  },
  gapLabel: { zh: '重点', ja: 'ポイント', fr: 'À retenir' },
  cards: {
    'c2-m2-steady-state-2026-10-13': {
      zh: {
        topic: '稳态',
        front: '资本深化何时停止？把 \\(sy\\) 与所需投资联系起来。',
        back: `<div class="ans">
<p>稳态是储蓄等于所需投资的地方：</p>
<div class="eq-block">$$sy = sAk^{\\alpha} = \\left(\\frac{\\theta}{1-\\alpha}+\\delta+n\\right)k$$</div>
<p>资本深化<strong>在 \\(k^*\\) 处停止</strong>，对应的产出为 \\(y^*\\)。</p>
</div>`,
        gap: '说出等式的两边——储蓄曲线和所需投资射线——资本深化在两者交点 \\(k^*\\) 处停止。',
      },
      ja: {
        topic: '定常状態',
        front: '資本深化はいつ止まるか。\\(sy\\) と必要投資を結びつけて答えよ。',
        back: `<div class="ans">
<p>定常状態は、貯蓄が必要投資に等しくなるところ：</p>
<div class="eq-block">$$sy = sAk^{\\alpha} = \\left(\\frac{\\theta}{1-\\alpha}+\\delta+n\\right)k$$</div>
<p>資本深化は<strong>\\(k^*\\) で止まる</strong>。対応する産出は \\(y^*\\)。</p>
</div>`,
        gap: '等式の両辺——貯蓄曲線と必要投資の直線——を挙げ、その交点 \\(k^*\\) で資本深化が止まると言うこと。',
      },
      fr: {
        topic: 'État stationnaire',
        front: 'Quand l’approfondissement du capital s’arrête-t-il ? Reliez \\(sy\\) à l’investissement requis.',
        back: `<div class="ans">
<p>L’état stationnaire est là où l’épargne égale l’investissement requis :</p>
<div class="eq-block">$$sy = sAk^{\\alpha} = \\left(\\frac{\\theta}{1-\\alpha}+\\delta+n\\right)k$$</div>
<p>L’approfondissement du capital <strong>s’arrête en \\(k^*\\)</strong>. La production correspondante est \\(y^*\\).</p>
</div>`,
        gap: 'nommer les deux membres de l’égalité — la courbe d’épargne et la droite d’investissement requis — et arrêter l’approfondissement à leur intersection \\(k^*\\).',
      },
    },
    'c2-m2-saving-rate-2026-10-13': {
      zh: {
        topic: '储蓄率',
        front: '储蓄率提高对稳态的 \\(k\\) 和 \\(y\\) 以及 \\(y\\) 的长期增长有什么影响？',
        back: `<div class="ans">
<p><strong>\\(\\uparrow s \\rightarrow\\) \\(k^*\\) 和 \\(y^*\\) 更高</strong>——只是<strong>水平</strong>效应。</p>
<ul>
<li>\\(y\\) 的长期增长<strong>不会永久提高</strong>。</li>
<li>\\(s \\in [0, 1]\\)，所以均衡 \\(k\\) 和 \\(y\\) 的提高<strong>有上限</strong>。</li>
</ul>
</div>`,
        gap: '水平与增长率之分。更高的 \\(s\\) 抬高稳态水平，但不会永远提高 \\(y\\) 的长期增长，而且 \\(s\\) 不能超过 1。',
      },
      ja: {
        topic: '貯蓄率',
        front: '貯蓄率が上がると、定常状態の \\(k\\) と \\(y\\)、そして \\(y\\) の長期成長率はどうなるか。',
        back: `<div class="ans">
<p><strong>\\(\\uparrow s \\rightarrow\\) \\(k^*\\) と \\(y^*\\) が上がる</strong>——<strong>水準</strong>への効果だけ。</p>
<ul>
<li>\\(y\\) の長期成長率は<strong>恒久的には上がらない</strong>。</li>
<li>\\(s \\in [0, 1]\\) なので、均衡の \\(k\\) と \\(y\\) の上昇には<strong>限界</strong>がある。</li>
</ul>
</div>`,
        gap: '水準と成長率の区別。\\(s\\) が高いと定常状態の水準は上がるが、\\(y\\) の長期成長率が永久に上がるわけではなく、\\(s\\) は 1 を超えられない。',
      },
      fr: {
        topic: 'Taux d’épargne',
        front: 'Quel est l’effet d’un taux d’épargne plus élevé sur \\(k\\) et \\(y\\) à l’état stationnaire, et sur la croissance de long terme de \\(y\\) ?',
        back: `<div class="ans">
<p><strong>\\(\\uparrow s \\rightarrow\\) \\(k^*\\) et \\(y^*\\) plus élevés</strong> — un effet de <strong>niveau</strong> seulement.</p>
<ul>
<li>La croissance de long terme de \\(y\\) n’est <strong>pas durablement plus forte</strong>.</li>
<li>\\(s \\in [0, 1]\\), donc la hausse de \\(k\\) et \\(y\\) d’équilibre a une <strong>limite</strong>.</li>
</ul>
</div>`,
        gap: 'niveau ou taux de croissance. Un \\(s\\) plus élevé relève le niveau stationnaire ; il n’augmente pas indéfiniment la croissance de \\(y\\), et \\(s\\) ne peut pas dépasser 1.',
      },
    },
    'c2-m2-convergence-2026-10-13': {
      zh: {
        topic: '趋同',
        front: 'A 国的潜在 GDP 增长率远高于 \\(G^*\\)；B 国接近 \\(G^*\\)。两国的增长各自来自哪里？',
        back: `<div class="ans">
<ul>
<li><strong>A（\\(G &gt; G^*\\)）</strong>仍在<strong>通过资本深化趋同</strong>。</li>
<li><strong>B（接近 \\(G^*\\)）</strong>的增长主要来自 <strong>TFP</strong>（和劳动），<strong>而不是</strong>资本投资。</li>
</ul>
</div>`,
        gap: '高于稳态增长意味着资本深化仍在起作用；增长接近 \\(G^*\\) 后，进一步的增长来自 TFP 和劳动，而不是对 \\(k\\) 的投资。',
      },
      ja: {
        topic: '収束',
        front: 'A 国の潜在 GDP 成長率は \\(G^*\\) を大きく上回り、B 国は \\(G^*\\) に近い。それぞれの成長はどこから来るか。',
        back: `<div class="ans">
<ul>
<li><strong>A（\\(G &gt; G^*\\)）</strong>はまだ<strong>資本深化によって収束の途中</strong>。</li>
<li><strong>B（\\(G^*\\) に近い）</strong>の成長は主に <strong>TFP</strong>（と労働）によるもので、資本投資<strong>ではない</strong>。</li>
</ul>
</div>`,
        gap: '定常成長率を上回るのは資本深化がまだ働いているから。成長率が \\(G^*\\) に近づくと、それ以上の成長は \\(k\\) への投資ではなく TFP と労働による。',
      },
      fr: {
        topic: 'Convergence',
        front: 'La croissance potentielle du pays A est bien au-dessus de \\(G^*\\) ; le pays B est proche de \\(G^*\\). D’où vient la croissance de chacun ?',
        back: `<div class="ans">
<ul>
<li><strong>A (\\(G &gt; G^*\\))</strong> <strong>converge encore par l’approfondissement du capital</strong>.</li>
<li><strong>B (proche de \\(G^*\\))</strong> tire sa croissance surtout de la <strong>PGF</strong> (et du travail), <strong>pas</strong> de l’investissement en capital.</li>
</ul>
</div>`,
        gap: 'une croissance supérieure à l’état stationnaire signifie que l’approfondissement du capital agit encore ; près de \\(G^*\\), la croissance supplémentaire vient de la PGF et du travail, pas de l’investissement en \\(k\\).',
      },
    },
    'c2-m2-labor-growth-2026-10-13': {
      zh: {
        topic: '劳动力增长',
        front: '劳动力增长率 \\(n\\) 提高时，稳态的 \\(k\\) 和 \\(y\\) 会怎样？',
        back: `<div class="ans">
<p><strong>\\(\\uparrow n\\) 使所需投资线更陡</strong>（斜率 \\(\\frac{\\theta}{1-\\alpha} + \\delta + n\\)）。</p>
<p>交点左移：<strong>\\(k^*\\) 和 \\(y^*\\) 都更低</strong>。</p>
</div>`,
        gap: '\\(n\\) 改变的是射线，而不是储蓄曲线。更陡的射线在更小的 \\(k^*\\) 处与 \\(sy\\) 相交。',
      },
      ja: {
        topic: '労働力の伸び',
        front: '労働力の伸び \\(n\\) が上がると、定常状態の \\(k\\) と \\(y\\) はどうなるか。',
        back: `<div class="ans">
<p><strong>\\(\\uparrow n\\) は必要投資の直線を急にする</strong>（傾き \\(\\frac{\\theta}{1-\\alpha} + \\delta + n\\)）。</p>
<p>交点は左に移る：<strong>\\(k^*\\) も \\(y^*\\) も低くなる</strong>。</p>
</div>`,
        gap: '\\(n\\) が変えるのは直線で、貯蓄曲線ではない。急な直線はより小さい \\(k^*\\) で \\(sy\\) と交わる。',
      },
      fr: {
        topic: 'Croissance de la population active',
        front: 'Que deviennent \\(k\\) et \\(y\\) à l’état stationnaire quand la croissance de la population active \\(n\\) augmente ?',
        back: `<div class="ans">
<p><strong>\\(\\uparrow n\\) rend plus pentue la droite d’investissement requis</strong> (pente \\(\\frac{\\theta}{1-\\alpha} + \\delta + n\\)).</p>
<p>L’intersection se déplace vers la gauche : <strong>\\(k^*\\) et \\(y^*\\) plus bas</strong>.</p>
</div>`,
        gap: '\\(n\\) modifie la droite, pas la courbe d’épargne. Une droite plus pentue coupe \\(sy\\) en un \\(k^*\\) plus petit.',
      },
    },
    'c2-m2-tfp-vs-deepening-2026-10-13': {
      zh: {
        topic: 'TFP 与资本深化',
        front: '什么会移动生产曲线 \\(y = Ak^{\\alpha}\\)？什么只是沿着曲线移动？',
        back: `<div class="ans">
<ul>
<li>更高的 <strong>\\(A\\)（TFP）</strong>和 <strong>\\(\\alpha\\)</strong> 会<strong>改变或移动</strong>生产曲线。</li>
<li><strong>资本深化</strong>是<strong>沿着</strong>给定曲线移动——\\(A\\) 不变，\\(k\\) 更高。</li>
</ul>
</div>`,
        gap: 'TFP 的变动改变曲线；资本深化是沿着已有曲线的移动。',
      },
      ja: {
        topic: 'TFP と資本深化',
        front: '生産曲線 \\(y = Ak^{\\alpha}\\) を動かすのは何か。曲線に沿って動くだけなのは何か。',
        back: `<div class="ans">
<ul>
<li><strong>\\(A\\)（TFP）</strong>や <strong>\\(\\alpha\\)</strong> が上がると、生産曲線の<strong>形が変わるかシフトする</strong>。</li>
<li><strong>資本深化</strong>は与えられた曲線に<strong>沿った</strong>動き——\\(A\\) は同じで \\(k\\) が高い。</li>
</ul>
</div>`,
        gap: 'TFP の変化は曲線を変える；資本深化はすでにある曲線に沿った動き。',
      },
      fr: {
        topic: 'PGF ou approfondissement',
        front: 'Qu’est-ce qui déplace la courbe de production \\(y = Ak^{\\alpha}\\), et qu’est-ce qui ne fait que se déplacer le long de celle-ci ?',
        back: `<div class="ans">
<ul>
<li>Un <strong>\\(A\\) (PGF)</strong> et un <strong>\\(\\alpha\\)</strong> plus élevés <strong>modifient ou déplacent</strong> la courbe de production.</li>
<li>L’<strong>approfondissement du capital</strong> se déplace <strong>le long</strong> d’une courbe donnée — même \\(A\\), \\(k\\) plus élevé.</li>
</ul>
</div>`,
        gap: 'un choc de PGF change la courbe ; l’approfondissement du capital est un mouvement le long de la courbe existante.',
      },
    },
  },
});
