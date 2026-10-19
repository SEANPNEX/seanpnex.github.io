deckI18n({
  source: {
    zh: 'CFA 二级 财务报表 · 公司间投资 / 金融资产 · 测验错题',
    ja: 'CFA レベル II 財務諸表 · 企業間投資 / 金融資産 · クイズの間違い',
    fr: 'CFA niveau II États financiers · intersociétés / actifs financiers · Erreurs de quiz',
  },
  cards: {
    'c3-debt-fvoci-impairment-2026-10-14': {
      zh: {
        topic: '债务类 FVOCI 减值',
        front: '债务类 FVOCI：公允价值从 980 降到 960，ECL $15。什么计入利润表，什么计入 AOCI，资产负债表上的账面价值是多少？',
        back: `<div class="ans">
<ul>
<li>利润表 / RE：<strong>−15</strong>（ECL）</li>
<li>AOCI：<strong>−5</strong>（= 公允价值下降 −20 + 已计入盈利的 ECL 15）</li>
<li>资产负债表上的资产保持<strong>公允价值 960</strong>——ECL <strong>不会</strong>再次减记资产（与 AMC 不同）</li>
</ul>
</div>`,
        gap: '把 AMC 式的资产减记和 FVOCI 按公允价值计量的账面价值混淆了；AOCI 的拆分基本正确。',
      },
      ja: {
        topic: '負債性 FVOCI の減損',
        front: '負債性 FVOCI：公正価値が 980→960 に下落、ECL $15。損益計算書と AOCI にはそれぞれ何が計上され、貸借対照表の帳簿価額はいくらか。',
        back: `<div class="ans">
<ul>
<li>損益計算書 / RE：<strong>−15</strong>（ECL）</li>
<li>AOCI：<strong>−5</strong>（= 公正価値の下落 −20 + すでに利益に計上した ECL 15）</li>
<li>貸借対照表の資産は<strong>公正価値 960</strong> のまま——ECL で資産を再び減額することは<strong>ない</strong>（AMC と違う）</li>
</ul>
</div>`,
        gap: 'AMC 型の資産の減額と、公正価値で計上する FVOCI の帳簿価額を混同した；AOCI の分け方はほぼ正しかった。',
      },
      fr: {
        topic: 'Dépréciation d’une dette en FVOCI',
        front: 'Dette en FVOCI : la JV passe de 980 à 960, ECL de 15 $. Qu’est-ce qui touche le compte de résultat, l’AOCI, et quelle valeur comptable au bilan ?',
        back: `<div class="ans">
<ul>
<li>Compte de résultat / RE : <strong>−15</strong> (ECL)</li>
<li>AOCI : <strong>−5</strong> (= baisse de JV de −20 + ECL de 15 déjà en résultat)</li>
<li>L’actif au bilan reste à la <strong>JV de 960</strong> — l’ECL ne déprécie <strong>pas</strong> l’actif une seconde fois (contrairement à l’AMC)</li>
</ul>
</div>`,
        gap: 'confusion entre la dépréciation de l’actif façon AMC et la valeur comptable à la JV en FVOCI ; la répartition de l’AOCI était presque juste.',
      },
    },
    'fsa-2026-10-15-a': {
      zh: {
        topic: '权益法 · 逆流未实现利润',
        front: '逆流：SY 把成本 600 的货物以 1,000 卖给 BY（持股 20% 的投资方）；年末 BY 仍持有。BY 要从权益收益中抵销多少？何时转回？',
        back: `<div class="ans">
<ul>
<li>只抵销 BY 的份额：20% × 400 = <strong>80</strong>，而不是全部 400</li>
<li>等价做法：调整后净利润 = SY 净利润 − 400，再 × 20%</li>
<li>BY 把货物卖给第三方时按比例转回</li>
</ul>
</div>`,
        gap: '抵销了全部 400，而不是投资方 20% 的份额（80）；第三方出售时转回是对的。',
      },
      ja: {
        topic: '持分法 · アップストリームの未実現利益',
        front: 'アップストリーム：SY が原価 600 の商品を BY（20% 投資者）に 1,000 で販売；期末も BY が保有。BY は持分法による投資利益からいくら消去し、それはいつ戻るか。',
        back: `<div class="ans">
<ul>
<li>消去するのは BY の持分だけ：20% × 400 = <strong>80</strong>、400 全額ではない</li>
<li>同じこと：修正後純利益 = SY の純利益 − 400、それに × 20%</li>
<li>BY が商品を第三者に販売したとき、比例して戻る</li>
</ul>
</div>`,
        gap: '投資者の 20% の持分（80）ではなく 400 全額を消去した；第三者への販売で戻る点は正しかった。',
      },
      fr: {
        topic: 'Mise en équivalence · profit latent ascendant',
        front: 'Ascendant : SY vend à BY (investisseur à 20 %) pour 1 000 des biens qui lui ont coûté 600 ; BY les détient encore en fin d’année. Combien BY élimine-t-il de sa quote-part de résultat, et quand cela revient-il ?',
        back: `<div class="ans">
<ul>
<li>N’éliminer que la quote-part de BY : 20 % × 400 = <strong>80</strong>, pas les 400 entiers</li>
<li>Équivalent : RN ajusté = RN de SY − 400, puis × 20 %</li>
<li>Revient au prorata quand BY vend les biens à un tiers</li>
</ul>
</div>`,
        gap: 'les 400 entiers ont été éliminés au lieu de la quote-part de 20 % (80) ; la reprise à la vente à un tiers était juste.',
      },
    },
    'fsa-2026-10-15-b': {
      zh: {
        topic: '权益法 · 固定资产上的未实现利润',
        front: '逆流：EJ 把成本 600 的货物以 900 卖给 DJ（持股 20% 的投资方），DJ 把它作为固定资产使用（10 年，直线法）。这 300 的利润如何转回？每年多少？',
        back: `<div class="ans">
<ul>
<li>通过<strong>折旧</strong>：DJ 每年折旧 90，而按原成本是 60</li>
<li>总额 300 / 10 = 每年 <strong>30</strong>；DJ 的份额 20% × 30 = 每年 <strong>6</strong></li>
<li>2020 年收益：(1,600 − 300 + 30) × 20% = 266</li>
</ul>
</div>`,
        gap: '说成了摊销；固定资产通过折旧转回利润（摊销用于无形资产）。',
      },
      ja: {
        topic: '持分法 · 固定資産に含まれる未実現利益',
        front: 'アップストリーム：EJ が原価 600 の商品を DJ（20% 投資者）に 900 で販売し、DJ はそれを固定資産として使う（10 年、定額法）。利益 300 はどう戻り、毎年いくらか。',
        back: `<div class="ans">
<ul>
<li><strong>減価償却</strong>を通じて：DJ の減価償却費は 90、原価ベースなら 60</li>
<li>総額 300 / 10 = 年 <strong>30</strong>；DJ の持分 20% × 30 = 年 <strong>6</strong></li>
<li>2020 年の利益：(1,600 − 300 + 30) × 20% = 266</li>
</ul>
</div>`,
        gap: '「償却」と答えた；固定資産は減価償却を通じて利益が戻る（償却は無形資産）。',
      },
      fr: {
        topic: 'Mise en équivalence · profit latent sur une immobilisation',
        front: 'Ascendant : EJ vend à DJ (investisseur à 20 %) pour 900 des biens qui lui ont coûté 600, et DJ les utilise comme immobilisation (10 ans, linéaire). Comment les 300 de profit reviennent-ils, et combien par an ?',
        back: `<div class="ans">
<ul>
<li>Par l’<strong>amortissement</strong> : DJ amortit 90 contre 60 sur le coût</li>
<li>Brut 300 / 10 = <strong>30</strong> par an ; quote-part de DJ 20 % × 30 = <strong>6</strong> par an</li>
<li>Résultat 2020 : (1 600 − 300 + 30) × 20 % = 266</li>
</ul>
</div>`,
        gap: 'réponse « amortissement des incorporels » ; une immobilisation corporelle restitue le profit par son amortissement.',
      },
    },
    'fsa-equity-vs-fvo-2026-10-16': {
      zh: {
        topic: '权益法与公允价值选择权',
        front: 'A 以 100 买入 B 的 30%。B 实现净利润 80，支付股息 20；年末该股权价值 112。分别给出权益法和公允价值选择权下 A 的收益和账面价值。',
        back: `<div class="ans">
<ul>
<li><strong>权益法：</strong>收益 = 30% × 80 = <strong>24</strong>；账面价值 = 100 + 24 − 6 = <strong>118</strong>。6 的股息是资本返还：冲减投资，<em>不是</em>收益。</li>
<li><strong>公允价值选择权：</strong>收益 = 股息 6 + 公允价值利得 12 = <strong>18</strong>；账面价值 = <strong>112</strong>。</li>
</ul>
<p>权益法跟随被投资方的<strong>盈利</strong>；公允价值选择权跟随股权的<strong>市场价值</strong>。</p>
</div>`,
        gap: '把股息从净利润中扣掉，给出了 18 作为权益法收益；股息只冲减账面价值。',
      },
      ja: {
        topic: '持分法と公正価値オプション',
        front: 'A は B の 30% を 100 で取得。B は純利益 80、配当 20；期末の持分の価値は 112。持分法と公正価値オプションのそれぞれで、A の利益と帳簿価額を答えよ。',
        back: `<div class="ans">
<ul>
<li><strong>持分法：</strong>利益 = 30% × 80 = <strong>24</strong>；帳簿価額 = 100 + 24 − 6 = <strong>118</strong>。配当 6 は資本の払戻しで、投資を減らすだけで利益<em>ではない</em>。</li>
<li><strong>公正価値オプション：</strong>利益 = 配当 6 + 公正価値の評価益 12 = <strong>18</strong>；帳簿価額 = <strong>112</strong>。</li>
</ul>
<p>持分法は被投資企業の<strong>利益</strong>を追い、FVO は持分の<strong>市場価値</strong>を追う。</p>
</div>`,
        gap: '配当を純利益から差し引き、持分法の利益を 18 とした；配当は帳簿価額を減らすだけ。',
      },
      fr: {
        topic: 'Mise en équivalence ou option juste valeur',
        front: 'A achète 30 % de B pour 100. B dégage un RN de 80 et verse 20 de dividendes ; la participation vaut 112 en fin d’année. Donnez le revenu et la valeur comptable de A selon la mise en équivalence et selon l’option juste valeur.',
        back: `<div class="ans">
<ul>
<li><strong>Mise en équivalence :</strong> revenu = 30 % × 80 = <strong>24</strong> ; valeur comptable = 100 + 24 − 6 = <strong>118</strong>. Les 6 de dividendes sont un remboursement de capital : ils réduisent la participation et ne sont <em>pas</em> un produit.</li>
<li><strong>Option juste valeur :</strong> revenu = 6 de dividendes + 12 de gain de JV = <strong>18</strong> ; valeur comptable = <strong>112</strong>.</li>
</ul>
<p>La mise en équivalence suit les <strong>bénéfices</strong> de l’entité détenue ; l’option juste valeur suit la <strong>valeur de marché</strong> de la participation.</p>
</div>`,
        gap: 'réponse 18 en mise en équivalence en déduisant les dividendes du RN ; les dividendes ne réduisent que la valeur comptable.',
      },
    },
    'fsa-nci-presentation-2026-10-16': {
      zh: {
        topic: '合并 · 非控制性权益',
        front: '母公司持有子公司 80%。在合并报表中，子公司的资产和负债列示多少？NCI 享有的权益和净利润放在哪里？',
        back: `<div class="ans">
<ul>
<li>子公司的资产和负债：按 <strong>100%</strong> 合并，而不是 80%</li>
<li><strong>NCI</strong> 列在<strong>权益</strong>中，与母公司权益分开</li>
<li>合并净利润全额列报，再在母公司和 NCI 之间<strong>分配</strong></li>
</ul>
</div>`,
        gap: 'NCI 的列报：100% 逐行合并，NCI 作为单独的权益项目，净利润要分配。',
      },
      ja: {
        topic: '連結 · 非支配持分',
        front: '親会社が子会社の 80% を保有。連結財務諸表には子会社の資産と負債がどれだけ載り、NCI の資本と純利益の持分はどこに表示されるか。',
        back: `<div class="ans">
<ul>
<li>子会社の資産と負債：80% ではなく <strong>100%</strong> を連結</li>
<li><strong>NCI</strong> は<strong>資本</strong>の中に、親会社の資本とは別に表示</li>
<li>連結純利益は全額を表示し、親会社と NCI に<strong>配分</strong>する</li>
</ul>
</div>`,
        gap: 'NCI の表示：100% の項目ごとの連結、NCI は資本の別の行、純利益は配分する。',
      },
      fr: {
        topic: 'Consolidation · participations ne donnant pas le contrôle',
        front: 'Une mère détient 80 % d’une filiale. Dans les états consolidés, quelle part des actifs et passifs de la filiale apparaît, et où vont la quote-part des NCI dans les capitaux propres et le RN ?',
        back: `<div class="ans">
<ul>
<li>Actifs et passifs de la filiale : consolidés à <strong>100 %</strong>, pas à 80 %</li>
<li>Les <strong>NCI</strong> figurent dans les <strong>capitaux propres</strong>, séparément de ceux de la mère</li>
<li>Le RN consolidé est présenté en entier, puis <strong>réparti</strong> entre la mère et les NCI</li>
</ul>
</div>`,
        gap: 'présentation des NCI : consolidation ligne à ligne à 100 %, NCI sur une ligne distincte des capitaux propres et répartition du RN.',
      },
    },
    'fsa-full-vs-partial-gw-impairment-2026-10-17': {
      zh: {
        topic: '合并 · 完全商誉与部分商誉',
        front: '母公司买入子公司 90%。完全商誉法下商誉为 200，部分商誉法下为 180。如果商誉全部减值，哪种方法的损失更大？合并净利润何时在两种方法下相同？',
        back: `<div class="ans">
<ul>
<li><strong>完全商誉</strong>的损失更大：<strong>200</strong>，部分商誉为 <strong>180</strong></li>
<li>只有<strong>在任何减值之前</strong>，两种方法下合并净利润才相同；商誉一旦减值，完全商誉下净利润更低</li>
<li>完全商誉下资产合计和权益合计也更高（NCI 包含其商誉份额）</li>
</ul>
</div>`,
        gap: '以为完全商誉和部分商誉下净利润总是相同；完全商誉下的减值更大（200 对 180）。',
      },
      ja: {
        topic: '連結 · 全部のれんと部分のれん',
        front: '親会社が子会社の 90% を取得。のれんは全部のれん法で 200、部分のれん法で 180。のれんが全額減損した場合、損失が大きいのはどちらか。連結純利益が両方で同じになるのはいつか。',
        back: `<div class="ans">
<ul>
<li>損失が大きいのは<strong>全部のれん</strong>：<strong>200</strong>、部分のれんは <strong>180</strong></li>
<li>連結純利益が同じなのは<strong>減損が起きる前</strong>だけ；のれんが減損すると、全部のれんのほうが純利益は低い</li>
<li>全部のれんでは資産合計と資本合計も大きい（NCI にのれんの持分が含まれる）</li>
</ul>
</div>`,
        gap: '純利益は全部のれんでも部分のれんでも常に同じだと思った；減損は全部のれんのほうが大きい（200 対 180）。',
      },
      fr: {
        topic: 'Consolidation · goodwill complet ou partiel',
        front: 'Une mère achète 90 % d’une filiale. Le goodwill est de 200 en goodwill complet et de 180 en goodwill partiel. S’il est entièrement déprécié, quelle méthode montre la perte la plus forte, et quand le RN consolidé est-il identique dans les deux ?',
        back: `<div class="ans">
<ul>
<li>Le <strong>goodwill complet</strong> montre la perte la plus forte : <strong>200</strong> contre <strong>180</strong> en goodwill partiel</li>
<li>Le RN consolidé n’est identique dans les deux méthodes qu’<strong>avant toute dépréciation</strong> ; une fois le goodwill déprécié, le RN est plus bas en goodwill complet</li>
<li>Le goodwill complet donne aussi un total de l’actif et des capitaux propres plus élevé (les NCI incluent leur part du goodwill)</li>
</ul>
</div>`,
        gap: 'RN supposé toujours identique en goodwill complet et partiel ; la dépréciation est plus forte en goodwill complet (200 contre 180).',
      },
    },
    'fsa-equity-income-vs-dividends-2026-10-17': {
      zh: {
        topic: '权益法 · 收益与股息',
        front: '投资方持有被投资方 30%，被投资方净利润 300，支付股息 100。投资方的权益法收益是多少？股息起什么作用？',
        back: `<div class="ans">
<ul>
<li>收益 = 30% × 300 = <strong>90</strong>。股息<strong>不</strong>影响收益。</li>
<li>收到的股息（30% × 100 = 30）只<strong>冲减投资的账面价值</strong>：+90 − 30 = 净 <strong>+60</strong></li>
</ul>
</div>`,
        gap: '又从权益法收益中扣了股息；收益 = 持股比例 × 被投资方净利润，股息只冲减账面价值。',
      },
      ja: {
        topic: '持分法 · 利益と配当',
        front: '投資者は被投資企業の 30% を保有。被投資企業の純利益は 300、配当は 100。投資者の持分法による投資利益はいくらか。配当は何に影響するか。',
        back: `<div class="ans">
<ul>
<li>利益 = 30% × 300 = <strong>90</strong>。配当は利益に<strong>関係しない</strong>。</li>
<li>受取配当（30% × 100 = 30）は投資の<strong>帳簿価額を減らす</strong>だけ：+90 − 30 = 正味 <strong>+60</strong></li>
</ul>
</div>`,
        gap: 'また持分法の利益から配当を差し引いた；利益は持分 × 被投資企業の純利益で、配当は帳簿価額を減らすだけ。',
      },
      fr: {
        topic: 'Mise en équivalence · résultat et dividendes',
        front: 'Un investisseur détient 30 % d’une entité qui dégage un RN de 300 et verse 100 de dividendes. Quelle est la quote-part de résultat de l’investisseur, et quel est le rôle des dividendes ?',
        back: `<div class="ans">
<ul>
<li>Revenu = 30 % × 300 = <strong>90</strong>. Les dividendes n’entrent <strong>pas</strong> dans le revenu.</li>
<li>Les dividendes reçus (30 % × 100 = 30) ne font que <strong>réduire la valeur comptable</strong> de la participation : +90 − 30 = net <strong>+60</strong></li>
</ul>
</div>`,
        gap: 'dividendes de nouveau déduits de la quote-part ; le revenu est la quote-part × RN de l’entité, les dividendes ne réduisent que la valeur comptable.',
      },
    },
    'fsa-jv-proportionate-vs-equity-2026-10-17': {
      zh: {
        topic: '合营企业 · 权益法与比例合并',
        front: '一项按权益法核算的合营企业改用比例合并重述。净利润、权益、收入、资产和负债会怎样？',
        back: `<div class="ans">
<ul>
<li><strong>不变：</strong>净利润和股东权益</li>
<li><strong>更高：</strong>收入、资产合计和负债合计（加入合营方享有的每一项份额）</li>
<li>只是列报改变，所以比率变化：净利润率和 ROA 下降，杠杆上升</li>
</ul>
</div>`,
        gap: '以为重述合营企业会改变净利润或权益；比例合并只改变列报。',
      },
      ja: {
        topic: '共同支配企業 · 持分法と比例連結',
        front: '持分法で会計処理していた共同支配企業を比例連結で修正すると、純利益、資本、収益、資産、負債はどうなるか。',
        back: `<div class="ans">
<ul>
<li><strong>変わらない：</strong>純利益と株主資本</li>
<li><strong>増える：</strong>収益、資産合計、負債合計（各項目の共同支配投資者の持分が加わる）</li>
<li>表示が変わるだけなので比率が動く：純利益率と ROA は下がり、レバレッジは上がる</li>
</ul>
</div>`,
        gap: '共同支配企業を修正すると純利益や資本が変わると思った；比例連結で変わるのは表示だけ。',
      },
      fr: {
        topic: 'Coentreprise · mise en équivalence ou intégration proportionnelle',
        front: 'Une coentreprise mise en équivalence est retraitée en intégration proportionnelle. Que deviennent le RN, les capitaux propres, les produits, les actifs et les passifs ?',
        back: `<div class="ans">
<ul>
<li><strong>Inchangés :</strong> résultat net et capitaux propres</li>
<li><strong>Plus élevés :</strong> produits, total de l’actif et total du passif (la quote-part du coentrepreneur dans chaque ligne est ajoutée)</li>
<li>Seule la présentation change, donc les ratios bougent : la marge nette et la ROA baissent, le levier augmente</li>
</ul>
</div>`,
        gap: 'retraiter la coentreprise semblait changer le RN ou les capitaux propres ; l’intégration proportionnelle ne change que la présentation.',
      },
    },
    'fsa-sbc-market-vs-nonmarket-2026-10-17': {
      zh: {
        topic: '以股份为基础的薪酬 · 归属条件',
        front: '以股份为基础的薪酬：如果市场条件（如股价目标）未达成，已确认的费用怎么办？这与服务条件和非市场业绩条件有何不同？',
        back: `<div class="ans">
<ul>
<li><strong>市场条件</strong>未达成：只要提供了服务，费用就<strong>保持已确认</strong>（不转回）。该条件已经反映在授予日公允价值中。</li>
<li><strong>服务条件或非市场业绩条件</strong>：费用按预计可归属的奖励数量<strong>调整</strong>，未归属的奖励转回</li>
</ul>
</div>`,
        gap: '市场条件未达成时转回了费用；只有服务条件和非市场条件才调整。',
      },
      ja: {
        topic: '株式報酬 · 権利確定条件',
        front: '株式報酬：市場条件（株価目標など）が達成されなかった場合、すでに認識した費用はどうなるか。勤務条件や非市場の業績条件とはどう違うか。',
        back: `<div class="ans">
<ul>
<li><strong>市場条件</strong>の未達：勤務が提供されている限り、費用は<strong>認識したまま</strong>（戻し入れなし）。条件はすでに付与日の公正価値に反映されている。</li>
<li><strong>勤務条件や非市場の業績条件</strong>：費用は権利確定が見込まれる数に合わせて<strong>修正</strong>され、確定しない分は戻し入れる</li>
</ul>
</div>`,
        gap: '市場条件の未達で費用を戻し入れた；修正するのは勤務条件と非市場条件だけ。',
      },
      fr: {
        topic: 'Rémunération en actions · conditions d’acquisition',
        front: 'Rémunération en actions : si une condition de marché (p. ex. un objectif de cours) n’est pas remplie, que devient la charge déjà comptabilisée ? En quoi est-ce différent pour les conditions de service et de performance hors marché ?',
        back: `<div class="ans">
<ul>
<li><strong>Condition de marché</strong> manquée : la charge <strong>reste comptabilisée</strong> (pas de reprise) tant que le service est rendu. La condition est déjà intégrée à la juste valeur à l’attribution.</li>
<li><strong>Condition de service ou de performance hors marché</strong> : la charge est <strong>ajustée</strong> au nombre d’attributions dont l’acquisition est attendue, et reprise pour celles qui ne sont pas acquises</li>
</ul>
</div>`,
        gap: 'charge reprise quand une condition de marché était manquée ; seules les conditions de service et hors marché sont ajustées.',
      },
    },
    'fsa-eso-fair-value-drivers-2026-10-17': {
      zh: {
        topic: '以股份为基础的薪酬 · 期权公允价值的输入值',
        front: '无风险利率提高、预期期限延长、波动率提高和股息率提高时，员工股票期权的公允价值（从而薪酬费用）会怎样变化？',
        back: `<div class="ans">
<ul>
<li><strong>无风险利率</strong>提高：公允价值<strong>上升</strong></li>
<li><strong>预期期限</strong>延长：公允价值<strong>上升</strong></li>
<li><strong>波动率</strong>提高：公允价值<strong>上升</strong></li>
<li><strong>股息率</strong>提高：公允价值<strong>下降</strong></li>
</ul>
</div>`,
        gap: '弄混了期权定价输入值的方向；只有股息率提高会降低公允价值。',
      },
      ja: {
        topic: '株式報酬 · オプションの公正価値の入力値',
        front: '無リスク金利の上昇、予想期間の延長、ボラティリティの上昇、配当利回りの上昇に対して、従業員ストック・オプションの公正価値（したがって報酬費用）はどう反応するか。',
        back: `<div class="ans">
<ul>
<li><strong>無リスク金利</strong>が上がる：公正価値は<strong>上がる</strong></li>
<li><strong>予想期間</strong>が長い：公正価値は<strong>上がる</strong></li>
<li><strong>ボラティリティ</strong>が上がる：公正価値は<strong>上がる</strong></li>
<li><strong>配当利回り</strong>が上がる：公正価値は<strong>下がる</strong></li>
</ul>
</div>`,
        gap: 'オプション価格の入力値の方向を取り違えた；公正価値を下げるのは配当利回りの上昇だけ。',
      },
      fr: {
        topic: 'Rémunération en actions · paramètres de la juste valeur des options',
        front: 'Comment la juste valeur d’une stock-option salarié (et donc la charge) réagit-elle à un taux sans risque plus élevé, une durée attendue plus longue, une volatilité plus forte et un rendement du dividende plus élevé ?',
        back: `<div class="ans">
<ul>
<li><strong>Taux sans risque</strong> plus élevé : la juste valeur <strong>augmente</strong></li>
<li><strong>Durée attendue</strong> plus longue : la juste valeur <strong>augmente</strong></li>
<li><strong>Volatilité</strong> plus forte : la juste valeur <strong>augmente</strong></li>
<li><strong>Rendement du dividende</strong> plus élevé : la juste valeur <strong>baisse</strong></li>
</ul>
</div>`,
        gap: 'sens des paramètres d’évaluation des options confondu ; seul un rendement du dividende plus élevé réduit la juste valeur.',
      },
    },
    'fsa-sbc-tax-dta-2026-10-19': {
      zh: {
        topic: '以股份为基础的薪酬 · 税务（DTA）',
        front: '权益结算的以股份为基础的薪酬：预计税前扣除额为 24,000。结算前公司在资产负债表上确认什么？',
        back: `<div class="ans">
<ul>
<li><strong>3,000</strong> 的<strong>递延所得税资产</strong>：未来扣除额的税务价值</li>
<li>税前扣除（在行权或归属时）晚于会计费用，所以是可抵扣暂时性差异</li>
</ul>
</div>`,
        gap: '没有把 24,000 的未来税前扣除转换成 3,000 的 DTA。',
      },
      ja: {
        topic: '株式報酬 · 税務（DTA）',
        front: '持分決済型の株式報酬：予想される損金算入額は 24,000。決済前に会社は貸借対照表に何を認識するか。',
        back: `<div class="ans">
<ul>
<li><strong>3,000</strong> の<strong>繰延税金資産</strong>：将来の損金算入の税効果</li>
<li>損金算入（行使時または権利確定時）は会計上の費用より後なので、将来減算一時差異になる</li>
</ul>
</div>`,
        gap: '将来の損金算入額 24,000 を 3,000 の DTA に換算しなかった。',
      },
      fr: {
        topic: 'Rémunération en actions · impôt (IDA)',
        front: 'Rémunération en actions réglée en instruments de capitaux propres : la déduction fiscale attendue est de 24 000. Que comptabilise l’entreprise au bilan avant le règlement ?',
        back: `<div class="ans">
<ul>
<li>Un <strong>impôt différé actif</strong> de <strong>3 000</strong> : la valeur fiscale de la déduction future</li>
<li>La déduction intervient plus tard (à l’exercice ou à l’acquisition) que la charge comptable : c’est une différence temporelle déductible</li>
</ul>
</div>`,
        gap: 'la déduction fiscale future de 24 000 n’a pas été convertie en un IDA de 3 000.',
      },
    },
    'fsa-sbc-excess-tax-benefit-2026-10-19': {
      zh: {
        topic: '以股份为基础的薪酬 · 超额税收利益',
        front: '结算时的税前扣除额为 180,000，高于累计费用。结果是什么？在 IFRS 和 US GAAP 下分别计入哪里？',
        back: `<div class="ans">
<ul>
<li><strong>7,500</strong> 的<strong>超额税收利益</strong>（税收意外收益）</li>
<li><strong>IFRS：</strong>直接在权益中确认利得</li>
<li><strong>US GAAP：</strong>减少利润表上的所得税费用</li>
</ul>
</div>`,
        gap: '漏了 180,000 扣除额带来的 7,500 超额税收利益。',
      },
      ja: {
        topic: '株式報酬 · 超過税務便益',
        front: '決済時の損金算入額が 180,000 となり、費用累計を上回った。結果は何か。IFRS と US GAAP ではどこに計上されるか。',
        back: `<div class="ans">
<ul>
<li><strong>7,500</strong> の<strong>超過税務便益</strong>（タックス・ウィンドフォール）</li>
<li><strong>IFRS：</strong>資本に直接利得として認識</li>
<li><strong>US GAAP：</strong>損益計算書の法人税等が減少</li>
</ul>
</div>`,
        gap: '損金算入額 180,000 から生じる 7,500 の超過税務便益を見落とした。',
      },
      fr: {
        topic: 'Rémunération en actions · avantage fiscal excédentaire',
        front: 'La déduction fiscale au règlement s’avère être de 180 000, au-dessus de la charge cumulée. Quel est le résultat, et où va-t-il en IFRS et en US GAAP ?',
        back: `<div class="ans">
<ul>
<li>Un <strong>avantage fiscal excédentaire</strong> (aubaine fiscale) de <strong>7 500</strong></li>
<li><strong>IFRS :</strong> gain comptabilisé directement en capitaux propres</li>
<li><strong>US GAAP :</strong> baisse de la charge d’impôt au compte de résultat</li>
</ul>
</div>`,
        gap: 'l’avantage fiscal excédentaire de 7 500 né de la déduction de 180 000 a été oublié.',
      },
    },
    'fsa-antidilutive-options-2026-10-19': {
      zh: {
        topic: '稀释 EPS · 虚值期权',
        front: '期权行权价为 $40；平均市价为 $35。基本 EPS 为 $2.00。稀释 EPS 是多少？',
        back: `<div class="ans">
<ul>
<li>期权处于<strong>虚值</strong>，因此是<strong>反稀释</strong>的，不计入</li>
<li>稀释 EPS = 基本 EPS = <strong>$2.00</strong></li>
<li><strong>绝不</strong>把负的增量股份加入股本数量</li>
</ul>
</div>`,
        gap: '计入了虚值期权；当行权价高于平均价格时，期权不计入。',
      },
      ja: {
        topic: '希薄化後 EPS · アウト・オブ・ザ・マネーのオプション',
        front: 'オプションの行使価格は $40、平均市場価格は $35。基本的 EPS は $2.00。希薄化後 EPS はいくらか。',
        back: `<div class="ans">
<ul>
<li>オプションは<strong>アウト・オブ・ザ・マネー</strong>なので<strong>逆希薄化</strong>であり、除外する</li>
<li>希薄化後 EPS = 基本的 EPS = <strong>$2.00</strong></li>
<li>マイナスの増加株式数を株式数に加えることは<strong>決してない</strong></li>
</ul>
</div>`,
        gap: 'アウト・オブ・ザ・マネーのオプションを数えた；行使価格が平均価格を上回るときは除外する。',
      },
      fr: {
        topic: 'BPA dilué · options en dehors de la monnaie',
        front: 'Des options ont un prix d’exercice de 40 $ ; le cours moyen est de 35 $. Le BPA de base est de 2,00 $. Quel est le BPA dilué ?',
        back: `<div class="ans">
<ul>
<li>Les options sont <strong>en dehors de la monnaie</strong>, donc <strong>antidilutives</strong> et exclues</li>
<li>BPA dilué = BPA de base = <strong>2,00 $</strong></li>
<li>Un nombre négatif d’actions supplémentaires n’est <strong>jamais</strong> ajouté au nombre d’actions</li>
</ul>
</div>`,
        gap: 'des options en dehors de la monnaie ont été comptées ; quand le prix d’exercice dépasse le cours moyen, elles sont exclues.',
      },
    },
    'fsa-sbc-market-condition-repeat-2026-10-19': {
      zh: {
        topic: '以股份为基础的薪酬 · 市场条件（重复）',
        front: '重复的错题：一项附市场条件的奖励公允价值为 24m，股价目标落空时已确认费用 16m。这 16m 怎么处理？',
        back: `<div class="ans">
<ul>
<li>这 <strong>16m 保持</strong>已确认，只要提供了服务，其余部分仍要确认为费用</li>
<li><strong>不调整</strong>：市场条件已经计入授予日公允价值</li>
<li>只有服务条件和非市场条件才调整</li>
</ul>
</div>`,
        gap: '第二次错：市场条件未达成时转回了费用。',
      },
      ja: {
        topic: '株式報酬 · 市場条件（再出）',
        front: '再度の間違い：市場条件付きの報酬の公正価値は 24m、株価目標が未達になった時点で 16m を費用計上済み。この 16m はどうなるか。',
        back: `<div class="ans">
<ul>
<li><strong>16m はそのまま</strong>認識され、勤務が提供されれば残りも費用計上する</li>
<li><strong>修正なし</strong>：市場条件はすでに付与日の公正価値に織り込まれている</li>
<li>修正するのは勤務条件と非市場条件だけ</li>
</ul>
</div>`,
        gap: '2 回目の間違い：市場条件の未達で費用を戻し入れた。',
      },
      fr: {
        topic: 'Rémunération en actions · condition de marché (bis)',
        front: 'Erreur répétée : une attribution avec condition de marché a une juste valeur de 24 M, et 16 M ont été passés en charges quand l’objectif de cours est manqué. Que deviennent les 16 M ?',
        back: `<div class="ans">
<ul>
<li>Les <strong>16 M restent</strong> comptabilisés, et le reste est encore passé en charges si le service est rendu</li>
<li><strong>Aucun ajustement</strong> : la condition de marché est déjà intégrée à la juste valeur à l’attribution</li>
<li>Seules les conditions de service et hors marché sont ajustées</li>
</ul>
</div>`,
        gap: 'deuxième erreur : charge reprise quand une condition de marché a échoué.',
      },
    },
  },
});
