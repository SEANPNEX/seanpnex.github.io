deckI18n({
  source: {
    zh: 'CFA 二级 投资组合管理 · 测验错题',
    ja: 'CFA レベル II ポートフォリオ運用 · クイズの間違い',
    fr: 'CFA niveau II Gestion de portefeuille · Erreurs de quiz',
  },
  cards: {
    'pm-m3-position-vs-scenario-limit-2026-11-15': {
      zh: {
        topic: 'PM M3 · 头寸限额与情景限额',
        front: '分析师预计会出现经济衰退，并建议限制公司债券的风险敞口。这属于哪种约束？',
        back: `<div class="ans">
<p><strong>头寸限额（Position limit）。</strong></p>
<ul>
<li><strong>头寸限额：</strong>限制某项敞口的规模（证券、资产类别、行业、发行人或国家）。</li>
<li><strong>情景限额：</strong>限制在给定情景或压力测试下允许的估计损失。</li>
<li><strong>止损限额：</strong>当某段时期内的损失超过触发阈值时，要求减仓或平仓。</li>
</ul>
<p>设定限额背后的原因（此处为经济衰退观点）不会改变限额的类型。如果限制的是某个特定危机重演时的估计损失，才是情景限额，而不是止损限额。</p>
</div>`,
        gap: '错答成了情景限额。',
      },
      ja: {
        topic: 'PM M3 · ポジション限度とシナリオ限度',
        front: 'あるアナリストは景気後退を予想し、社債へのエクスポージャーを制限することを提案している。これはどの種類の制約か。',
        back: `<div class="ans">
<p><strong>ポジション限度（Position limit）。</strong></p>
<ul>
<li><strong>ポジション限度：</strong>エクスポージャーの大きさ（銘柄、資産クラス、セクター、発行体、国など）に上限を設けるもの。</li>
<li><strong>シナリオ限度：</strong>特定のシナリオやストレス・テストのもとで許容される推定損失に上限を設けるもの。</li>
<li><strong>ストップロス限度：</strong>一定期間の損失がトリガー水準を超えた場合に、ポジションの縮小や解消を義務づけるもの。</li>
</ul>
<p>限度を設ける理由（ここでは景気後退の見通し）によって限度の種類が変わるわけではない。特定の危機が再発した場合の推定損失に上限を設けるものはシナリオ限度であり、ストップロス限度ではない。</p>
</div>`,
        gap: '「シナリオ限度」と答えてしまった。',
      },
      fr: {
        topic: 'PM M3 · Limite de position contre limite de scénario',
        front: 'Un analyste anticipe une récession et suggère de limiter l’exposition aux obligations d’entreprises. De quel type de contrainte s’agit-il ?',
        back: `<div class="ans">
<p><strong>Limite de position.</strong></p>
<ul>
<li><strong>Limite de position :</strong> plafonne la taille d’une exposition (titre, classe d’actifs, secteur, émetteur ou pays).</li>
<li><strong>Limite de scénario :</strong> plafonne la perte estimée autorisée dans un scénario ou un test de résistance donné.</li>
<li><strong>Limite de stop-loss :</strong> impose une réduction ou une liquidation de position dès qu’une perte sur une période dépasse un seuil déclencheur.</li>
</ul>
<p>La raison qui motive une limite (ici, une anticipation de récession) ne change pas sa nature. Un plafond sur la perte estimée en cas de répétition d’une crise donnée est une limite de scénario, pas un stop-loss.</p>
</div>`,
        gap: 'a répondu limite de scénario.',
      },
    },
    'pm-m3-scenario-vs-stop-loss-2026-11-15': {
      zh: {
        topic: 'PM M3 · 情景限额与止损限额',
        front: '某项规则规定，如果重演类似 2008 年的信贷危机，投资组合损失不得超过 10%。这属于哪种约束？',
        back: `<div class="ans">
<p><strong>情景限额（Scenario limit）。</strong></p>
<ul>
<li><strong>情景限额：</strong>针对给定假设或历史情景或压力测试（此处为 2008 年信贷危机重演）的估计损失上限。该情景下的损失容忍度在事件发生前设定。</li>
<li><strong>止损限额：</strong>当在规定期间内发生特定规模的损失时，要求减仓或平仓——针对的是已经发生的实际损失。</li>
<li><strong>头寸限额：</strong>限制敞口的规模。即使出于危机或衰退担忧而设定的规模上限，依然属于头寸限额。</li>
</ul>
<p>假设或历史路径（如果重演类似 2008 年的危机）属于情景限额；止损限额只有在损失已经发生之后才会被触发。</p>
</div>`,
        gap: '错答成了止损限额。',
      },
      ja: {
        topic: 'PM M3 · シナリオ限度とストップロス限度',
        front: '2008 年型の信用危機が再び起きた場合、ポートフォリオの損失が 10% を超えてはならないというルールがある。これはどの種類の制約か。',
        back: `<div class="ans">
<p><strong>シナリオ限度（Scenario limit）。</strong></p>
<ul>
<li><strong>シナリオ限度：</strong>特定の仮想・歴史的シナリオやストレス・テスト（ここでは 2008 年の信用危機の再来）における推定損失の上限。そのシナリオに対する損失許容度は事象が起きる前に設定される。</li>
<li><strong>ストップロス限度：</strong>指定期間内に一定規模の損失が生じたときに縮小または手仕舞いを義務づけるもの——すでに発生した実現損失に対する制約である。</li>
<li><strong>ポジション限度：</strong>エクスポージャーの大きさの上限。危機や景気後退への見方に基づく規模の上限であっても、ポジション限度に該当する。</li>
</ul>
<p>仮想または歴史的な経路（2008 年型の危機が再発したら）はシナリオ限度であり、ストップロスはすでに損失が発生した後にのみ発動する。</p>
</div>`,
        gap: '「ストップロス限度」と答えてしまった。',
      },
      fr: {
        topic: 'PM M3 · Limite de scénario contre limite de stop-loss',
        front: 'Une règle stipule que la perte du portefeuille ne doit pas dépasser 10 % si une crise du crédit de type 2008 se reproduit. De quel type de contrainte s’agit-il ?',
        back: `<div class="ans">
<p><strong>Limite de scénario.</strong></p>
<ul>
<li><strong>Limite de scénario :</strong> un plafond sur la perte estimée pour un scénario hypothétique ou historique donné, ou un test de résistance (ici, une répétition de la crise du crédit de 2008). La tolérance à la perte pour ce scénario est fixée avant l’événement.</li>
<li><strong>Limite de stop-loss :</strong> impose une réduction ou une clôture lorsqu’une perte d’une certaine ampleur survient sur une période donnée — des pertes réalisées qui se sont déjà produites.</li>
<li><strong>Limite de position :</strong> plafonne la taille d’une exposition. Un plafond de taille, même motivé par une crainte de crise ou de récession, reste une limite de position.</li>
</ul>
<p>Une trajectoire hypothétique ou historique (si une crise de type 2008 se répète) relève d’une limite de scénario ; un stop-loss n’est déclenché qu’une fois les pertes déjà survenues.</p>
</div>`,
        gap: 'a répondu limite de stop-loss.',
      },
    },
    'pm-m6-ir-vs-sharpe-2026-11-15': {
      zh: {
        topic: 'PM M6 · 信息比率与夏普比率',
        front: '信息比率（IR）最不适用于以下哪种情形？',
        back: `<div class="ans">
<p><strong>量化相对于无风险利率的超额回报。</strong>那是夏普比率的用途：单位总风险下超过无风险利率的超额回报，\\(\\text{SR}_P=\\dfrac{R_P-R_f}{\\sigma_P}\\)。</p>
<ul>
<li><strong>IR</strong> \\(=\\dfrac{R_A}{\\sigma_A}=\\dfrac{R_P-R_B}{\\sigma(R_P-R_B)}\\)：相对于基准、单位主动风险所获得的主动回报。</li>
<li>IR <strong>确实</strong>用于组合构建：\\(\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2\\)，且最优主动风险为 \\(\\sigma_A^*=\\dfrac{\\text{IR}}{\\text{SR}_B}\\sigma_B\\)。</li>
<li>事后 IR 也用于评价过去业绩。</li>
</ul>
</div>`,
        gap: '错选了“构建主动管理型投资组合”。',
      },
      ja: {
        topic: 'PM M6 · 情報レシオ（IR）対シャープ・レシオ',
        front: '情報レシオ（IR）が最も適さないのはどの場面か。',
        back: `<div class="ans">
<p><strong>無リスク金利を上回る超過リターンを定量化すること。</strong>それはシャープ・レシオの役割である：総リスク 1 単位当たりの無リスク金利超過リターン、\\(\\text{SR}_P=\\dfrac{R_P-R_f}{\\sigma_P}\\)。</p>
<ul>
<li><strong>IR</strong> \\(=\\dfrac{R_A}{\\sigma_A}=\\dfrac{R_P-R_B}{\\sigma(R_P-R_B)}\\)：ベンチマーク対比で測ったアクティブ・リスク 1 単位当たりのアクティブ・リターン。</li>
<li>IR はポートフォリオ構築に<strong>用いられる</strong>：\\(\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2\\)、最適アクティブ・リスクは \\(\\sigma_A^*=\\dfrac{\\text{IR}}{\\text{SR}_B}\\sigma_B\\)。</li>
<li>事後 IR は過去の運用実績の評価にも使われる。</li>
</ul>
</div>`,
        gap: '「アクティブ運用ポートフォリオの構築」を選んでしまった。',
      },
      fr: {
        topic: 'PM M6 · Ratio d’information contre ratio de Sharpe',
        front: 'Dans quel cas le ratio d’information est-il le moins approprié ?',
        back: `<div class="ans">
<p><strong>Pour quantifier le rendement au-delà du taux sans risque.</strong> C’est le rôle du ratio de Sharpe : le rendement excédentaire par rapport au taux sans risque par unité de risque total, \\(\\text{SR}_P=\\dfrac{R_P-R_f}{\\sigma_P}\\).</p>
<ul>
<li><strong>IR</strong> \\(=\\dfrac{R_A}{\\sigma_A}=\\dfrac{R_P-R_B}{\\sigma(R_P-R_B)}\\) : rendement actif par unité de risque actif, mesuré par rapport à l’indice de référence.</li>
<li>L’IR <strong>est bien</strong> utilisé dans la construction de portefeuille : \\(\\text{SR}_P^2=\\text{SR}_B^2+\\text{IR}^2\\), avec un risque actif optimal \\(\\sigma_A^*=\\dfrac{\\text{IR}}{\\text{SR}_B}\\sigma_B\\).</li>
<li>L’IR ex post sert également à évaluer la performance passée.</li>
</ul>
</div>`,
        gap: 'a choisi la construction d’un portefeuille géré activement.',
      },
    },
    'pm-m6-low-active-risk-passive-2026-11-15': {
      zh: {
        topic: 'PM M6 · 低主动风险 / 被动管理',
        front: '某投资组合回报为 6.5%，风险为 10.9%，主动回报为 0.15%，主动风险为 0.25%，IR 为 0.6。基准回报为 6.35%，风险为 11.0%。关于该组合的管理方式，最恰当的结论是什么？',
        back: `<div class="ans">
<p><strong>可能是被动管理的，因为主动风险接近于零。</strong></p>
<ul>
<li>0.25% 的主动风险（跟踪误差）接近于零，指向指数基金或“伪主动基金”（closet indexer）：即对外标榜为主动管理、实际上接近指数基金的基金。</li>
<li>正的 IR（此处为 0.6）并不能证明该组合就是主动管理的。伪主动基金由于主动风险极低，其 IR 可能难以确定，且扣费后往往接近零或略微为负；小幅的正主动回报依然能算出正的 IR。</li>
<li>总风险接近基准（10.9% 对 11.0%）并不能衡量组合的主动程度。跟踪误差和主动份额（active share）才可以。</li>
</ul>
</div>`,
        gap: '错选了“因为 IR 为正，所以必然是主动管理的”。',
      },
      ja: {
        topic: 'PM M6 · 低いアクティブ・リスク / パッシブ運用',
        front: 'あるポートフォリオのリターンは 6.5%、リスクは 10.9%、アクティブ・リターンは 0.15%、アクティブ・リスクは 0.25%、IR は 0.6 である。ベンチマークのリターンは 6.35%、リスクは 11.0% である。このポートフォリオの運用方法について最も適切な結論は何か。',
        back: `<div class="ans">
<p><strong>アクティブ・リスクがゼロに近いため、パッシブ運用されている可能性がある。</strong></p>
<ul>
<li>0.25% というアクティブ・リスク（トラッキング・エラー）はほぼゼロであり、インデックス・ファンドまたはクローゼット・インデクサー（アクティブ運用を標榜しながら実質的にはインデックス・ファンドに近いファンド）を示唆する。</li>
<li>IR がプラス（ここでは 0.6）であっても、そのポートフォリオがアクティブ運用されている証明にはならない。クローゼット・インデックスの IR はアクティブ・リスクが極めて低いため不安定になりやすく、報酬控除後ではゼロ付近かわずかにマイナスになることが多いが、わずかなプラスのアクティブ・リターンでもプラスの IR になりうる。</li>
<li>総リスクがベンチマークに近いこと（10.9% 対 11.0%）は、ポートフォリオがどれだけアクティブかを測るものではない。それを測るのはトラッキング・エラーとアクティブ・シェアである。</li>
</ul>
</div>`,
        gap: '「IR がプラスだからアクティブ運用に違いない」を選んでしまった。',
      },
      fr: {
        topic: 'PM M6 · Faible risque actif / gestion passive',
        front: 'Un portefeuille affiche un rendement de 6,5 %, un risque de 10,9 %, un rendement actif de 0,15 %, un risque actif de 0,25 % et un IR de 0,6. L’indice de référence a un rendement de 6,35 % et un risque de 11,0 %. Quelle est la conclusion la plus appropriée quant à la façon dont le portefeuille est géré ?',
        back: `<div class="ans">
<p><strong>Il pourrait être géré passivement, car le risque actif est proche de zéro.</strong></p>
<ul>
<li>Un risque actif (tracking error) de 0,25 % est proche de zéro, ce qui évoque un fonds indiciel ou un faux fonds actif (closet indexer) : un fonds qui se présente comme actif mais est en réalité proche d’un fonds indiciel.</li>
<li>Un IR positif (ici 0,6) ne prouve pas que le portefeuille est géré activement. L’IR d’un closet indexer peut être indéterminé tant le risque actif est faible, et il est souvent proche de zéro ou légèrement négatif après frais ; un faible rendement actif positif peut tout de même produire un IR positif.</li>
<li>Un risque total proche de celui de l’indice de référence (10,9 % contre 11,0 %) ne mesure pas le caractère actif du portefeuille. C’est le rôle de la tracking error et de l’active share.</li>
</ul>
</div>`,
        gap: 'a choisi qu’il doit être géré activement parce que l’IR est positif.',
      },
    },
    'pm-m2-apt-assumptions-2026-11-15': {
      zh: {
        topic: 'PM M2 · APT 假设',
        front: '哪一项不是套利定价理论（APT）的假设？',
        back: `<div class="ans">
<p><strong>套利会把系统性风险的风险溢价压至零。</strong></p>
<p>APT 的三个核心假设是：</p>
<ul>
<li>因子模型描述资产回报。</li>
<li>可供选择的资产数量充足，投资者能够构建出消除资产特有风险（特质风险）的充分分散投资组合。</li>
<li>充分分散的投资组合之间不存在套利机会。</li>
</ul>
<p>套利会消除充分分散组合之间的错误定价，但不会把系统性因子的风险溢价压至零。这些风险溢价 \\(\\lambda_j\\) 是承担因子 \\(j\\) 风险的预期报酬。资产特有风险会被分散掉，不会出现在预期回报中。</p>
</div>`,
        gap: '错选了“特质风险可以通过分散化消除”。',
      },
      ja: {
        topic: 'PM M2 · APT の前提',
        front: 'APT（裁定価格理論）の前提でないものはどれか。',
        back: `<div class="ans">
<p><strong>裁定によってシステマティック・リスクのリスク・プレミアムがゼロになる。</strong></p>
<p>APT の 3 つの主要な前提は次のとおり：</p>
<ul>
<li>ファクター・モデルが資産のリターンを記述する。</li>
<li>選択可能な資産が多数あるため、投資家は資産固有（非システマティック／イディオシンクラティック）リスクを排除する十分に分散されたポートフォリオを構築できる。</li>
<li>十分に分散されたポートフォリオの間に裁定機会は存在しない。</li>
</ul>
<p>裁定は十分に分散されたポートフォリオ間のミスプライスを取り除くが、システマティック・ファクターのリスク・プレミアムをゼロに押し下げるわけではない。これらのプレミアム \\(\\lambda_j\\) はファクター \\(j\\) のリスクを負担することに対する期待報酬である。資産固有リスクは分散によって消滅し、期待リターンには現れない。</p>
</div>`,
        gap: '「固有リスクは分散投資によって排除できる」を選んでしまった。',
      },
      fr: {
        topic: 'PM M2 · Hypothèses de l’APT',
        front: 'Laquelle n’est pas une hypothèse de l’APT ?',
        back: `<div class="ans">
<p><strong>L’arbitrage ramènera à zéro la prime de risque sur le risque systématique.</strong></p>
<p>Les trois hypothèses clés de l’APT sont :</p>
<ul>
<li>Un modèle factoriel décrit les rendements des actifs.</li>
<li>Avec de nombreux actifs disponibles, les investisseurs peuvent constituer des portefeuilles bien diversifiés qui éliminent le risque spécifique à l’actif (idiosyncratique).</li>
<li>Il n’existe aucune opportunité d’arbitrage entre portefeuilles bien diversifiés.</li>
</ul>
<p>L’arbitrage élimine les erreurs de valorisation entre portefeuilles bien diversifiés ; il ne ramène pas à zéro les primes de risque des facteurs systématiques. Ces primes, \\(\\lambda_j\\), sont la rémunération attendue pour le portage du risque du facteur \\(j\\). Le risque spécifique à l’actif est éliminé par diversification et n’apparaît pas dans le rendement attendu.</p>
</div>`,
        gap: 'a choisi que le risque idiosyncratique peut être éliminé par diversification.',
      },
    },
  },
});
