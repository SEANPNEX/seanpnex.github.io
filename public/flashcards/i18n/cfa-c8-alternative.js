deckI18n({
  source: {
    zh: 'CFA 二级 另类投资 · 测验错题',
    ja: 'CFA レベル II オルタナティブ投資 · クイズの間違い',
    fr: 'CFA niveau II Investissements alternatifs · Erreurs de quiz',
  },
  cards: {
    'alt-m1-basis-swap-vs-total-return-2026-11-17': {
      zh: {
        topic: 'ALT M1 · 基差互换与总回报互换',
        front: '你需要对一种流动性较差的实物商品（重质原油）用流动性高的基准（布伦特原油）进行对冲。这属于哪种互换？它与总回报互换、超额回报互换、方差互换或波动率互换有何不同？',
        back: `<div class="ans">
<p><strong>基差互换（Basis swap）。</strong>双方定期交换基于两个相关但不完全相关的商品参考价格的支付。这类互换用于调整高流动性期货合约与相关性较高但流动性差的实物商品之间的价差（即基差）——例如，布伦特原油（流动性极高）与墨西哥湾交割的重质原油。</p>
<ul>
<li><strong>总回报互换（Total return swap）</strong>提供指数敞口，收益等于期货价格变动<em>加上</em>为这些期货交存的现金抵押品所赚取的利息。</li>
<li><strong>超额回报互换（Excess return swap）</strong>仅支付期货价格的净变动（即“超额”回报）乘以名义本金，不包含抵押品利息。</li>
<li><strong>方差互换（Variance swap）</strong>基于观察到的（实际）方差与期初设定的固定方差之间的差额交换支付。<strong>波动率互换（Volatility swap）</strong>同理，只是比较实际波动率与预期波动率：双方并不是在押注价格水平或方向。如果实现波动率低于预期，波动率卖方获利。</li>
</ul>
</div>`,
        gap: '错选了总回报互换而不是基差互换。',
      },
      ja: {
        topic: 'ALT M1 · ベーシス・スワップとトータル・リターン・スワップ',
        front: '流動性の低い現物コモディティ（重質原油）を流動性の高い指標（ブレント原油）に対してヘッジする必要がある。これはどのスワップか。トータル・リターン・スワップ、エクセス・リターン・スワップ、分散スワップ、ボラティリティ・スワップとどう違うか。',
        back: `<div class="ans">
<p><strong>ベーシス・スワップ。</strong>関連性はあるが完全には相関しない 2 つのコモディティ参照価格に基づいて定期的な支払いを交換する。流動性の非常に高い先物契約と、それに関連するが流動性の低い現物との差（ベーシス）を調整する——たとえば、ブレント原油（極めて流動性が高い）とメキシコ湾渡しの重質原油の差である。</p>
<ul>
<li><strong>トータル・リターン・スワップ</strong>は、先物価格の変化に先物取引の現金担保から得られる利息を<em>加えた</em>指数エクスポージャーを提供する。</li>
<li><strong>エクセス・リターン・スワップ</strong>は、先物価格の純変化（「エクセス」リターン）に想定元本を掛けた額のみを支払い、担保利息は含まない。</li>
<li><strong>分散スワップ</strong>は、観測された（実際の）分散と当初設定された固定分散との差に基づいて支払いを交換する。<strong>ボラティリティ・スワップ</strong>は期待ボラティリティに対して同様のことを行う：両当事者は価格の水準や方向性に賭けているわけではない。実現ボラティリティが期待を下回れば、ボラティリティの売り手が利益を得る。</li>
</ul>
</div>`,
        gap: 'ベーシス・スワップではなくトータル・リターン・スワップを選んでしまった。',
      },
      fr: {
        topic: 'ALT M1 · Swap de base contre swap de rendement total',
        front: 'Vous devez couvrir une matière première physique illiquide (pétrole brut lourd) contre une référence liquide (Brent). De quel swap s’agit-il ? En quoi diffère-t-il d’un swap de rendement total, d’excess return, de variance ou de volatilité ?',
        back: `<div class="ans">
<p><strong>Un swap de base (basis swap).</strong> Des paiements périodiques sont échangés sur la base de deux prix de référence de matières premières liés mais imparfaitement corrélés. Ces swaps ajustent l’écart (la base) entre un contrat à terme très liquide et une matière première liée mais illiquide — par exemple, le pétrole Brent (très liquide) contre du brut lourd livré dans le golfe du Mexique.</p>
<ul>
<li>Un <strong>swap de rendement total (total return swap)</strong> offre une exposition à un indice égale à la variation des prix à terme <em>plus</em> les intérêts gagnés sur le collatéral en espèces déposé pour ces contrats à terme.</li>
<li>Un <strong>swap d’excess return</strong> ne paie que la variation nette des prix à terme (le rendement « excédentaire ») multipliée par le notionnel ; il n’inclut pas les intérêts du collatéral.</li>
<li>Un <strong>swap de variance</strong> échange des paiements fondés sur l’écart entre la variance observée (réelle) et un niveau fixe de variance fixé au départ. Un <strong>swap de volatilité</strong> fait de même par rapport à la volatilité attendue : les deux parties ne parient ni sur le niveau ni sur la direction des prix. Le vendeur de volatilité gagne si la volatilité réalisée est inférieure aux attentes.</li>
</ul>
</div>`,
        gap: 'a choisi un swap de rendement total au lieu d’un swap de base.',
      },
    },
    'alt-m1-roll-contango-fewer-contracts-2026-11-17': {
      zh: {
        topic: 'ALT M1 · 升水市场展期：合约数量减少',
        front: '在期货升水（contango）市场中，为了保持相同的美元敞口而对期货多头展期后，你持有的合约数量是更多还是更少？在测验数据中，敞口为 120，近月合约价格为 10，远月合约价格为 12。合约数量会怎样变化，展期回报的符号是什么？如果市场处于贴水（backwardation）呢？',
        back: `<div class="ans">
<p><strong>合约数量更少，且展期回报为负。</strong>在升水市场中，远月合约更贵，因此为了保持相同的美元敞口，你买入的合约数量少于卖出的合约数量。（120 / 10 / 12 为测验数据，非教材例题。）</p>
<ul>
<li>近月：\\(120/10=12\\) 份合约。远月：\\(120/12=10\\) 份合约。</li>
<li>\\(\\text{展期回报}=\\dfrac{\\text{近月收盘价}-\\text{远月收盘价}}{\\text{近月收盘价}}\\times\\text{展期头寸比例}\\)。此处近月减远月为负，因此展期回报为负。</li>
<li>在贴水市场中，远月合约更便宜，因此你会买入更多合约，展期回报通常为正。</li>
</ul>
</div>`,
        gap: '误以为在升水市场展期后会持有更多合约。',
      },
      ja: {
        topic: 'ALT M1 · コンタンゴでのロール：契約数は減少',
        front: 'コンタンゴの市場で、同じドル・エクスポージャーを保つためにロングの先物ポジションをロールした後、保有する契約数は増えるか減るか。クイズの数値では、エクスポージャーが 120、期近限月が 10、期先限月が 12 である。契約数はどうなり、ロール・リターンの符号はどうなるか。市場がバックワーデーションの場合はどうか。',
        back: `<div class="ans">
<p><strong>契約数は減り、ロール・リターンはマイナスになる。</strong>コンタンゴでは期先限月のほうが高いため、同じドル・エクスポージャーを維持するには、売却した契約数より少ない契約数を買うことになる。（120 / 10 / 12 の数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>期近：\\(120/10=12\\) 契約。期先：\\(120/12=10\\) 契約。</li>
<li>\\(\\text{ロール・リターン}=\\dfrac{\\text{期近終値}-\\text{期先終値}}{\\text{期近終値}}\\times\\text{ロールするポジションの割合}\\)。ここでは期近と期先の差が負であるため、ロール・リターンはマイナスになる。</li>
<li>バックワーデーションでは期先限月のほうが安いため、より多くの契約を買うことになり、ロール・リターンは通常プラスになる。</li>
</ul>
</div>`,
        gap: 'コンタンゴではロール後に保有する契約数が増えると思ってしまった。',
      },
      fr: {
        topic: 'ALT M1 · Roll en contango : moins de contrats',
        front: 'En contango, après avoir roulé une position acheteuse sur contrats à terme pour conserver la même exposition en dollars, détenez-vous plus ou moins de contrats ? Dans les données du quiz, l’exposition est de 120, le contrat proche vaut 10 et le contrat éloigné vaut 12. Qu’advient-il du nombre de contrats, et quel est le signe du rendement de roll ? Qu’en est-il si le marché est en déport ?',
        back: `<div class="ans">
<p><strong>Moins de contrats, et le rendement de roll est négatif.</strong> En contango, le contrat à échéance plus éloignée est plus cher ; vous achetez donc moins de contrats que vous n’en vendez pour garder la même exposition en dollars. (Les chiffres 120 / 10 / 12 proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>Proche : \\(120/10=12\\) contrats. Éloigné : \\(120/12=10\\) contrats.</li>
<li>\\(\\text{Rendement de roll}=\\dfrac{\\text{Cours de clôture proche}-\\text{Cours de clôture éloigné}}{\\text{Cours de clôture proche}}\\times\\text{Pourcentage roulé de la position}\\). Ici, l’écart proche moins éloigné est négatif, donc le rendement de roll est négatif.</li>
<li>En déport (backwardation), le contrat éloigné est moins cher : vous achetez donc plus de contrats et le rendement de roll est généralement positif.</li>
</ul>
</div>`,
        gap: 'pensait qu’en contango on détient plus de contrats après le roll.',
      },
    },
    'alt-m2-noi-before-dep-interest-tax-2026-11-17': {
      zh: {
        topic: 'ALT M2 · NOI 在折旧、利息和税收之前计算',
        front: 'NOI 如何计量，是否扣除折旧或利息？如果预期 NOI 为 500k，\\(r\\) 为 9%，\\(g\\) 为 3%，物业价值是多少？如果额外扣除 80k 折旧和 120k 利息会怎样？',
        back: `<div class="ans">
<p><strong>8,333,333。</strong>\\(\\text{NOI}=\\text{有效总收入}-\\text{运营费用}-\\text{物业维护准备}\\)。NOI 是在融资成本、折旧和所得税之前计量的。（500k、9%、3%、80k 和 120k 为测验数据，非教材例题。）</p>
<ul>
<li>物业维护准备需要扣除。它包括维持物业当前经济用途所需的资本支出，但不包括显著升级或改变该用途的资本支出。</li>
<li>直接资本化法：\\(\\text{物业价值}=\\dfrac{\\text{预期 NOI}}{\\text{资本化率}}\\)，且资本化率为 \\(r-g\\)。因此 \\(500{,}000/(0.09-0.03)=8{,}333{,}333\\)。</li>
<li>折旧和利息在之后才扣除，即应税所得 \\(=\\text{NOI}-\\text{利息}-\\text{折旧}\\)。如果错误地从 NOI 中扣除 80k 和 120k，会得到 300k 除以 6%，即 5,000,000——这就是陷阱。</li>
</ul>
</div>`,
        gap: '错误地扣除了 80k 折旧和 120k 利息，算成了 5,000,000。',
      },
      ja: {
        topic: 'ALT M2 · NOI は減価償却費・支払利息・税金控除前',
        front: 'NOI はどのように測定され、減価償却費や支払利息を差し引くか。予想 NOI が 500k、\\(r\\) が 9%、\\(g\\) が 3% のとき、物件価値はいくらか。さらに減価償却費 80k と支払利息 120k を差し引くとどうなるか。',
        back: `<div class="ans">
<p><strong>8,333,333。</strong>\\(\\text{NOI}=\\text{実効総収入}-\\text{運営費}-\\text{物件維持引当金}\\)。NOI は資金調達コスト、減価償却費、法人所得税の控除前で測定される。（500k、9%、3%、80k、120k の数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>物件維持引当金は差し引かれる。ここには物件の現在の経済的用途を維持するために必要な設備投資が含まれるが、用途を大きくグレードアップしたり変更したりする設備投資は含まれない。</li>
<li>直接還元法：\\(\\text{物件価値}=\\dfrac{\\text{予想 NOI}}{\\text{キャップレート}}\\)、キャップレートは \\(r-g\\)。したがって \\(500{,}000/(0.09-0.03)=8{,}333{,}333\\)。</li>
<li>減価償却費と支払利息は後の段階で差し引かれ、課税所得は \\(\\text{NOI}-\\text{支払利息}-\\text{減価償却費}\\) となる。NOI から 80k と 120k を引くと 300k ÷ 6% = 5,000,000 となり、これがひっかけである。</li>
</ul>
</div>`,
        gap: '減価償却費 80k と支払利息 120k を差し引いてしまい、5,000,000 と答えた。',
      },
      fr: {
        topic: 'ALT M2 · NOI avant amortissement, intérêts et impôt',
        front: 'Comment mesure-t-on le NOI, et retranche-t-on l’amortissement ou les intérêts ? Si le NOI attendu est de 500k, \\(r\\) de 9 % et \\(g\\) de 3 %, quelle est la valeur du bien ? Et si vous retranchez en plus 80k d’amortissement et 120k d’intérêts ?',
        back: `<div class="ans">
<p><strong>8 333 333.</strong> \\(\\text{NOI}=\\text{Revenu brut effectif}-\\text{Charges d’exploitation}-\\text{Provision de maintenance du bien}\\). Le NOI est mesuré avant frais financiers, amortissement et impôt sur le revenu. (Les chiffres 500k, 9 %, 3 %, 80k et 120k proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>La provision de maintenance du bien est déduite. Elle inclut les dépenses d’investissement nécessaires pour maintenir l’usage économique actuel du bien, pas les capex qui l’améliorent fortement ou en changent l’usage.</li>
<li>Capitalisation directe : \\(\\text{Valeur du bien}=\\dfrac{\\text{NOI attendu}}{\\text{Taux de capitalisation}}\\), et le taux de capitalisation vaut \\(r-g\\). D’où \\(500{,}000/(0{,}09-0{,}03)=8{,}333{,}333\\).</li>
<li>L’amortissement et les intérêts interviennent plus tard, lorsque le revenu imposable est \\(\\text{NOI}-\\text{Intérêts}-\\text{Amortissement}\\). Retrancher les 80k et 120k du NOI laisse 300k divisés par 6 %, soit 5 000 000 — le piège.</li>
</ul>
</div>`,
        gap: 'a retranché les 80k d’amortissement et les 120k d’intérêts et obtenu 5 000 000.',
      },
    },
    'alt-m2-cost-approach-oversupply-replacement-2026-11-17': {
      zh: {
        topic: 'ALT M2 · 成本法：供给过剩与扩张阶段',
        front: '在房地产周期的供给过剩阶段，重置成本高于还是低于市场价值？在扩张阶段又会发生什么？',
        back: `<div class="ans">
<p><strong>在供给过剩阶段，重置成本超过市场价格。</strong>随着物业供应过剩加剧，市场价格走弱；而材料和人工成本依然居高不下，因为已经在建的项目会继续完工。</p>
<ul>
<li>新开工并不会在供给过剩阶段就简单“停止”：新开工量在衰退阶段才降至谷底，而复苏阶段几乎没有或完全没有新开工。</li>
<li>在扩张阶段，物业价格的上涨速度往往快于成本，因为新增供给尚未进入市场，而上涨的价格会刺激新的建设活动。</li>
<li>成本法认为，投资者为某物业支付的价格不应高于购买空地并开发一处可比物业的成本；重置成本与市场价格之间的巨大差距可能反映了供求失衡。</li>
</ul>
</div>`,
        gap: '把供给过剩阶段和扩张阶段中重置成本与市场价值的关系弄反了。',
      },
      ja: {
        topic: 'ALT M2 · 原価法：供給過剰期対拡大期',
        front: '不動産サイクルの供給過剰局面では、再調達原価は市場価値を上回るか、それとも下回るか。拡大局面ではどうなるか。',
        back: `<div class="ans">
<p><strong>供給過剰期には、再調達原価が市場価格を上回る。</strong>物件の供給過剰が積み上がるにつれて市場価格は下落する一方、すでに着工済みの建設は完成まで続くため、資材費や人件費は高いまま維持される。</p>
<ul>
<li>新規建設は供給過剰期にすぐ「止まる」わけではない：着工数が底を打つのは景気後退期であり、回復期には新規建設がほとんど、あるいは全くない。</li>
<li>拡大期には、新たな供給がまだ市場に出てきていないため物件価格がコストより速く上昇しやすく、その価格上昇が新規建設を刺激する。</li>
<li>原価法は、投資家は空地を購入して同等の物件を開発するコスト以上を支払うべきではないという考え方に基づき、再調達原価と市場価格の大きな乖離は需給の不均衡を反映しうる。</li>
</ul>
</div>`,
        gap: '供給過剰期と拡大期における再調達原価と市場価値の関係を取り違えた。',
      },
      fr: {
        topic: 'ALT M2 · Approche par les coûts : suroffre contre expansion',
        front: 'Dans la phase de suroffre du cycle immobilier, le coût de remplacement est-il supérieur ou inférieur à la valeur de marché ? Que se passe-t-il en phase d’expansion ?',
        back: `<div class="ans">
<p><strong>En suroffre, le coût de remplacement dépasse les prix de marché.</strong> Les prix de marché fléchissent à mesure qu’un excès d’offre immobilière s’accumule, tandis que les coûts des matériaux et de la main-d’œuvre restent élevés parce que les chantiers déjà lancés se poursuivent jusqu’à leur achèvement.</p>
<ul>
<li>Les nouvelles constructions ne s’« arrêtent » pas simplement en suroffre : les mises en chantier atteignent leurs plus bas en phase de récession, et la phase de reprise ne connaît que peu ou pas de nouvelles constructions.</li>
<li>En expansion, les prix de l’immobilier tendent à monter plus vite que les coûts car la nouvelle offre n’est pas encore arrivée sur le marché, et la hausse des prix stimule de nouvelles constructions.</li>
<li>L’approche par les coûts stipule qu’un investisseur ne doit pas payer pour un bien plus que le coût d’achat d’un terrain nu et de développement d’un bien comparable ; un écart important entre le coût de remplacement et le prix de marché peut refléter des déséquilibres entre l’offre et la demande.</li>
</ul>
</div>`,
        gap: 'a inversé la relation entre coût de remplacement et valeur de marché en phase de suroffre et d’expansion.',
      },
    },
  },
});
