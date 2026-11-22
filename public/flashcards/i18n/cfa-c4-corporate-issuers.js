deckI18n({
  source: {
    zh: 'CFA 二级 公司发行人 · 测验错题',
    ja: 'CFA レベル II 発行体 · クイズの間違い',
    fr: 'CFA niveau II Émetteurs · Erreurs de quiz',
  },
  cards: {
    'ci-m1-buyback-debt-eps-2026-10-25': {
      zh: {
        topic: 'CI M1 · 举债回购，EPS',
        front: '净利润 1,000 万，500 万股，股价 $40。公司以 6% 的税后利率借入 $4,000 万用于回购 100 万股。新的 EPS 是多少？',
        back: `<div class="ans">
<p>净利润 \\(=10-40\\times6\\%=7.6\\) 百万；股数 \\(=4\\) 百万；<strong>EPS \\(=1.90\\)</strong>，低于原来的 2.00。</p>
<ul>
<li>从净利润中减去新债务的<strong>税后利息</strong>。</li>
<li>速算规律：盈利收益率 \\(E/P=2/40=5\\%\\) 低于税后债务成本（6%），因此 EPS 下降。如果 E/P 高于该成本，EPS 就会上升。</li>
</ul>
</div>`,
        gap: '忽略了新债务的税后利息。',
      },
      ja: {
        topic: 'CI M1 · 借入による自社株買い、EPS',
        front: '純利益 10m、株式数 5m 株、株価 $40。同社は税引後金利 6% で $40m を借り入れ、1m 株を買い戻す。新しい EPS はいくらか。',
        back: `<div class="ans">
<p>純利益 \\(=10-40\\times6\\%=7.6\\)m；株数 \\(=4\\)m；<strong>EPS \\(=1.90\\)</strong>（元の 2.00 から低下）。</p>
<ul>
<li>純利益から新たな借入の<strong>税引後利息</strong>を差し引く。</li>
<li>近道：益回り \\(E/P=2/40=5\\%\\) が税引後負債コスト（6%）を下回るため、EPS は下がる。E/P がそれを上回っていれば EPS は上がる。</li>
</ul>
</div>`,
        gap: '新たな借入の税引後利息を無視した。',
      },
      fr: {
        topic: 'CI M1 · Rachat par dette, BPA',
        front: 'RN 10m, 5m d’actions, cours 40 $. La société emprunte 40m $ à 6 % après impôt pour racheter 1m d’actions. Quel est le nouveau BPA ?',
        back: `<div class="ans">
<p>RN \\(=10-40\\times6\\%=7{,}6\\)m ; actions \\(=4\\)m ; <strong>BPA \\(=1{,}90\\)</strong>, en baisse par rapport à 2,00.</p>
<ul>
<li>Retrancher du RN les <strong>intérêts après impôt</strong> de la nouvelle dette.</li>
<li>Raccourci : le rendement des bénéfices \\(E/P=2/40=5\\%\\) est inférieur au coût de la dette après impôt (6 %), donc le BPA baisse. Si E/P lui était supérieur, le BPA augmenterait.</li>
</ul>
</div>`,
        gap: 'a ignoré les intérêts après impôt de la nouvelle dette.',
      },
    },
    'ci-m1-cash-dividend-leverage-2026-10-25': {
      zh: {
        topic: 'CI M1 · 现金股利与股票股利的影响',
        front: '现金股利如何影响股东财富和公司杠杆？股票股利与之有何不同？',
        back: `<div class="ans">
<ul>
<li><strong>现金股利：</strong>股东财富不变（不考虑税收），因为股价会按股利金额下跌。但<strong>现金和权益减少</strong>，因此 D/A 和 D/E <strong>上升</strong>，流动性比率下降。</li>
<li><strong>股票股利：</strong>财富不变；总资产和总权益不变，因此<strong>杠杆没有变化</strong>。只有股数增加，EPS 和股价下降。</li>
</ul>
</div>`,
        gap: '答对了财富效应，但漏掉了现金股利会提高杠杆这一点。',
      },
      ja: {
        topic: 'CI M1 · 現金配当と株式配当の影響',
        front: '現金配当は株主の富と企業のレバレッジにどう影響するか。株式配当はどう違うか。',
        back: `<div class="ans">
<ul>
<li><strong>現金配当：</strong>富は不変（税金を無視した場合。株価が配当分だけ下落するため）。ただし<strong>現金と資本が減る</strong>ため、D/A と D/E は<strong>上昇</strong>し、流動性比率は低下する。</li>
<li><strong>株式配当：</strong>富は不変；総資産と総資本も不変なので、<strong>レバレッジは変わらない</strong>。株数が増え、EPS と株価が下がるだけ。</li>
</ul>
</div>`,
        gap: '富への効果は合っていたが、現金配当がレバレッジを高める点を見落とした。',
      },
      fr: {
        topic: 'CI M1 · Effets du dividende en numéraire ou en actions',
        front: 'Comment un dividende en numéraire affecte-t-il la richesse des actionnaires et le levier de l’entreprise ? En quoi un dividende en actions diffère-t-il ?',
        back: `<div class="ans">
<ul>
<li><strong>Dividende en numéraire :</strong> richesse inchangée (hors impôts), car le cours baisse du montant du dividende. Mais <strong>la trésorerie et les capitaux propres diminuent</strong>, donc D/A et D/E <strong>augmentent</strong> et les ratios de liquidité baissent.</li>
<li><strong>Dividende en actions :</strong> richesse inchangée ; total de l’actif et total des capitaux propres inchangés, donc <strong>aucun changement de levier</strong>. Seul le nombre d’actions augmente, et le BPA comme le cours diminuent.</li>
</ul>
</div>`,
        gap: 'avait l’effet sur la richesse mais a manqué le fait qu’un dividende en numéraire augmente le levier.',
      },
    },
    'ci-m1-repurchase-methods-2026-10-25': {
      zh: {
        topic: 'CI M1 · 回购方式',
        front: '说出四种股票回购方式。哪一种最灵活？',
        back: `<div class="ans">
<ul>
<li><strong>公开市场回购：</strong>在时间和数量上<strong>最灵活</strong>；没有必须买入的承诺。</li>
<li><strong>固定价格要约回购：</strong>以固定价格回购固定数量股份，通常有溢价；速度快。</li>
<li><strong>荷兰式拍卖：</strong>以能够买足目标股数的最低出清价格成交。</li>
<li><strong>直接协商：</strong>与某位大股东协商回购，通常带有溢价。</li>
</ul>
</div>`,
        gap: '错答成了直接协商最灵活。',
      },
      ja: {
        topic: 'CI M1 · 自社株買いの方法',
        front: '4 つの自社株買いの方法を挙げよ。最も柔軟なのはどれか。',
        back: `<div class="ans">
<ul>
<li><strong>市場買付：</strong>時期と数量の面で<strong>最も柔軟</strong>；買い取る義務はない。</li>
<li><strong>固定価格での公開買付：</strong>一定の株数を一定の価格（通常はプレミアム付き）で買い取る；速い。</li>
<li><strong>ダッチ・オークション：</strong>目標株数を買い取れる最も低い清算価格で成立する。</li>
<li><strong>相対取引（直接交渉）：</strong>特定の大株主と交渉して買い取る；多くの場合プレミアム付き。</li>
</ul>
</div>`,
        gap: '「相対取引（直接交渉）が最も柔軟」と答えてしまった。',
      },
      fr: {
        topic: 'CI M1 · Méthodes de rachat',
        front: 'Citez les quatre méthodes de rachat d’actions. Laquelle est la plus flexible ?',
        back: `<div class="ans">
<ul>
<li><strong>Sur le marché :</strong> la <strong>plus flexible</strong> quant au calendrier et au montant ; aucun engagement d’achat.</li>
<li><strong>Offre publique à prix fixe :</strong> un nombre fixe d’actions à un prix fixe, généralement avec une prime ; rapide.</li>
<li><strong>Enchère hollandaise :</strong> le plus bas prix d’équilibre permettant de racheter le nombre cible d’actions.</li>
<li><strong>Négociation directe :</strong> avec un grand actionnaire, souvent avec une prime.</li>
</ul>
</div>`,
        gap: 'a répondu que la négociation directe est la plus flexible.',
      },
    },
  },
});
