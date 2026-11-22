deckI18n({
  source: {
    zh: 'CFA 二级 固定收益 · 测验错题',
    ja: 'CFA レベル II 債券 · クイズの間違い',
    fr: 'CFA niveau II Titres à revenu fixe · Erreurs de quiz',
  },
  cards: {
    'fi-m1-local-vs-pure-expectations-2026-10-25': {
      zh: {
        topic: 'FI M1 · 局部预期理论与纯预期理论',
        front: '局部预期理论与纯预期理论有何不同？',
        back: `<div class="ans">
<ul>
<li><strong>纯预期理论：</strong>远期利率是未来即期利率的无偏预测，且所有债券在<strong>任何持有期</strong>都赚取相同的回报：完全的风险中性。</li>
<li><strong>局部预期理论：</strong>风险中性仅在<strong>短期持有期</strong>内成立：所有债券在短期内都赚取无风险利率。在更长久期上，可能存在风险溢价。</li>
</ul>
</div>`,
        gap: '没有点明“短期持有期”与“任何持有期”的区别。',
      },
      ja: {
        topic: 'FI M1 · 局所的期待仮説と純粋期待仮説',
        front: '局所的期待仮説は純粋期待仮説とどう異なるか。',
        back: `<div class="ans">
<ul>
<li><strong>純粋期待仮説：</strong>フォワード・レートは将来のスポット・レートの不偏予測値であり、すべての債券が<strong>あらゆる保有期間</strong>で同じリターンを得る——完全なリスク中立性。</li>
<li><strong>局所的期待仮説：</strong>リスク中立性が成り立つのは<strong>短期の保有期間</strong>のみであり、短期的にはどの債券も無リスク金利を稼ぐ。より長い期間ではリスク・プレミアムが存在しうる。</li>
</ul>
</div>`,
        gap: '「短期のみ」対「あらゆる保有期間」という違いを明確に言えなかった。',
      },
      fr: {
        topic: 'FI M1 · Théorie des anticipations locales contre anticipations pures',
        front: 'En quoi la théorie des anticipations locales diffère-t-elle de la théorie des anticipations pures ?',
        back: `<div class="ans">
<ul>
<li><strong>Anticipations pures :</strong> les taux à terme sont des prédicteurs sans biais des futurs taux au comptant, et chaque obligation rapporte le même rendement sur <strong>tout horizon</strong> — neutralité totale au risque.</li>
<li><strong>Anticipations locales :</strong> la neutralité au risque ne vaut que sur de <strong>courts horizons de détention</strong> — à court terme, toute obligation rapporte le taux sans risque. Sur des horizons plus longs, des primes de risque peuvent exister.</li>
</ul>
</div>`,
        gap: 'n’a pas précisé la différence entre horizon court et tout horizon.',
      },
    },
    'fi-m1-krd-single-shift-2026-10-25': {
      zh: {
        topic: 'FI M1 · 关键利率久期',
        front: '关键利率久期（KRD）分别为 0.8（2 年期）、1.5（5 年期）和 3.0（10 年期）。有效久期是多少？如果只有 5 年期利率上升 20bp，价格变动是多少？',
        back: `<div class="ans">
<p>有效久期 \\(=0.8+1.5+3.0=5.3\\)。价格变动 \\(\\approx-1.5\\times0.20\\%=\\mathbf{-0.30\\%}\\)。</p>
<ul>
<li>当仅有<strong>一个关键利率</strong>发生移动时，只使用该期限对应的 KRD。</li>
<li>总久期（5.3）仅适用于<strong>平行</strong>移动：\\(-5.3\\times0.20\\%=-1.06\\%\\)。</li>
</ul>
</div>`,
        gap: '在单个利率移动时错用了总久期，算成了 −1.06%。',
      },
      ja: {
        topic: 'FI M1 · キーレート・デュレーション',
        front: 'KRD が 0.8（2 年）、1.5（5 年）、3.0（10 年）である。実効デュレーションはいくらか。5 年金利だけが 20bp 上昇した場合の価格変化はいくらか。',
        back: `<div class="ans">
<p>実効デュレーション \\(=0.8+1.5+3.0=5.3\\)。価格変化 \\(\\approx-1.5\\times0.20\\%=\\mathbf{-0.30\\%}\\)。</p>
<ul>
<li><strong>1 つのキーレート</strong>だけが動く場合は、その金利の KRD だけを使う。</li>
<li>合計（5.3）を使うのは<strong>平行</strong>シフトのときだけ：\\(-5.3\\times0.20\\%=-1.06\\%\\)。</li>
</ul>
</div>`,
        gap: '単一金利のシフトに対して合計デュレーションを使い、−1.06% と答えてしまった。',
      },
      fr: {
        topic: 'FI M1 · Duration de taux clé',
        front: 'Les KRD sont de 0,8 (2 ans), 1,5 (5 ans) et 3,0 (10 ans). Quelle est la duration effective ? Quelle est la variation de prix si seul le taux à 5 ans monte de 20 pb ?',
        back: `<div class="ans">
<p>Duration effective \\(=0{,}8+1{,}5+3{,}0=5{,}3\\). Variation de prix \\(\\approx-1{,}5\\times0{,}20\\%=\\mathbf{-0{,}30\\%}\\).</p>
<ul>
<li>Pour un déplacement sur <strong>un seul taux clé</strong>, n’utilisez que la KRD de ce taux.</li>
<li>Le total (5,3) ne s’applique qu’à un déplacement <strong>parallèle</strong> : \\(-5{,}3\\times0{,}20\\%=-1{,}06\\%\\).</li>
</ul>
</div>`,
        gap: 'a utilisé la duration totale pour un déplacement d’un seul taux et obtenu −1,06 %.',
      },
    },
    'fi-m1-flattening-barbell-2026-10-25': {
      zh: {
        topic: 'FI M1 · 曲线变平：杠铃型与子弹型',
        front: '你预期收益率曲线将会变平。在久期相同的情况下，选择杠铃型还是子弹型？',
        back: `<div class="ans">
<p><strong>杠铃型。</strong></p>
<ul>
<li>当曲线变平时，长端利率相对于短端利率下降，因此杠铃型中的长端债券会获利。</li>
<li>在相同久期下，杠铃型还具有<strong>更高的凸性</strong>（相比子弹型）。</li>
<li>子弹型适用于预期曲线<strong>变陡</strong>，或观点集中在曲线中段的情形。</li>
</ul>
</div>`,
        gap: '错选了子弹型。',
      },
      ja: {
        topic: 'FI M1 · フラット化：バーベル対ブレット',
        front: 'イールド・カーブがフラット化すると予想している。同じデュレーションなら、バーベル型とブレット型のどちらを選ぶか。',
        back: `<div class="ans">
<p><strong>バーベル型。</strong></p>
<ul>
<li>カーブがフラット化するとき、長期金利が短期金利に対して低下するため、バーベル型の長期側の債券が値上がりする。</li>
<li>また、同じデュレーションのブレット型と比べて、バーベル型のほうが<strong>コンベクシティが大きい</strong>。</li>
<li>ブレット型が適するのは、カーブの<strong>スティープ化</strong>を予想する場合や、カーブの中期ゾーンにビューが集中している場合である。</li>
</ul>
</div>`,
        gap: 'ブレット型を選んでしまった。',
      },
      fr: {
        topic: 'FI M1 · Aplatissement : barbell contre bullet',
        front: 'Vous anticipez un aplatissement de la courbe. À duration égale, choisissez-vous un portefeuille barbell ou bullet ?',
        back: `<div class="ans">
<p><strong>Barbell.</strong></p>
<ul>
<li>Lorsque la courbe s’aplatit, les taux longs baissent par rapport aux taux courts, de sorte que les obligations de l’extrémité longue du barbell gagnent en valeur.</li>
<li>Le barbell offre aussi <strong>plus de convexité</strong> qu’un bullet de même duration.</li>
<li>Un bullet convient à une anticipation de <strong>pentification</strong>, ou à une vue centrée sur le milieu de la courbe.</li>
</ul>
</div>`,
        gap: 'a choisi le bullet.',
      },
    },
    'fi-m1-rate-volatility-term-2026-10-25': {
      zh: {
        topic: 'FI M1 · 不同期限的利率波动率',
        front: '为什么短期利率的波动率通常高于长期利率？',
        back: `<div class="ans">
<ul>
<li><strong>短期利率</strong>随<strong>货币政策</strong>变动，因此对央行行动的不确定性使其波动较大。</li>
<li><strong>长期利率</strong>受长期<strong>通胀与实际经济增长</strong>预期的锚定，而这些预期变化缓慢。</li>
</ul>
</div>`,
        gap: '只说出了现象形态，没有给出两条原因。',
      },
      ja: {
        topic: 'FI M1 · 満期別の金利ボラティリティ',
        front: 'なぜ通常、短期金利のほうが長期金利よりボラティリティが高いのか。',
        back: `<div class="ans">
<ul>
<li><strong>短期金利</strong>は<strong>金融政策</strong>に連動するため、中央銀行の行動に関する不確実性がボラティリティを高める。</li>
<li><strong>長期金利</strong>は長期的な<strong>インフレと実質成長率</strong>の期待にアンカーされており、これらの変化は緩やかである。</li>
</ul>
</div>`,
        gap: 'パターンのみ答え、2 つの理由の両方を挙げられなかった。',
      },
      fr: {
        topic: 'FI M1 · Volatilité selon les échéances',
        front: 'Pourquoi les taux à court terme sont-ils généralement plus volatils que les taux à long terme ?',
        back: `<div class="ans">
<ul>
<li>Les <strong>taux courts</strong> évoluent avec la <strong>politique monétaire</strong> ; l’incertitude quant aux décisions de la banque centrale les rend donc volatils.</li>
<li>Les <strong>taux longs</strong> sont ancrés par les anticipations d’<strong>inflation et de croissance réelle</strong> à long terme, qui évoluent lentement.</li>
</ul>
</div>`,
        gap: 'a décrit le profil sans donner les deux raisons.',
      },
    },
    'fi-m1-riding-curve-2026-10-25': {
      zh: {
        topic: 'FI M1 · 骑乘收益率曲线',
        front: '骑乘收益率曲线什么时候有效，它的风险是什么？',
        back: `<div class="ans">
<ul>
<li><strong>条件：</strong><strong>向上倾斜</strong>且<strong>保持稳定</strong>的收益率曲线。买入期限长于投资期的债券；随着债券沿曲线向下滚落至更低收益率，价格上涨，从而获得高于期限匹配债券的回报。</li>
<li><strong>风险：</strong>曲线发生移动、利率上升或曲线变平，从而抹去滚降收益。</li>
</ul>
</div>`,
        gap: '漏掉了曲线必须保持稳定的前提，或漏掉了其风险。',
      },
      ja: {
        topic: 'FI M1 · イールド・カーブのロールダウン',
        front: 'イールド・カーブのロールダウン（ライディング）が機能するのはいつで、リスクは何か。',
        back: `<div class="ans">
<ul>
<li><strong>条件：</strong><strong>右上がり</strong>で<strong>安定して動かない</strong>イールド・カーブ。投資期間より満期の長い債券を買い、時間の経過とともに低い利回りへとロールダウンするにつれて価格が上昇し、満期を一致させた債券を上回るリターンが得られる。</li>
<li><strong>リスク：</strong>カーブがシフトする、金利が上昇する、あるいはカーブがフラット化してロールダウン益が消えてしまうこと。</li>
</ul>
</div>`,
        gap: 'カーブが安定している必要がある点、またはリスクを落とした。',
      },
      fr: {
        topic: 'FI M1 · Chevaucher la courbe des taux',
        front: 'Quand la stratégie consistant à chevaucher la courbe des taux fonctionne-t-elle, et quel en est le risque ?',
        back: `<div class="ans">
<ul>
<li><strong>Condition :</strong> une courbe <strong>croissante</strong> qui <strong>reste stable</strong>. Achetez des obligations plus longues que votre horizon ; à mesure qu’elles glissent vers des rendements plus bas, leur prix monte, offrant un rendement supérieur à celui d’une obligation adossée à l’échéance.</li>
<li><strong>Risque :</strong> la courbe se déplace, les taux montent ou la courbe s’aplatit, ce qui efface le gain de roll-down.</li>
</ul>
</div>`,
        gap: 'a oublié que la courbe doit rester stable, ou omis le risque.',
      },
    },
  },
});
