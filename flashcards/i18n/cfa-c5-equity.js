deckI18n({
  source: {
    zh: 'CFA 二级 权益估值 · 测验错题',
    ja: 'CFA レベル II 株式バリュエーション · クイズの間違い',
    fr: 'CFA niveau II Évaluation des actions · Erreurs de quiz',
  },
  cards: {
    'eq-m3-fcfe-from-sales-growth-target-dr-2026-11-16': {
      zh: {
        topic: 'EQ M3 · 由销售额增长与目标负债率求 FCFE',
        front: '目标资本结构为 40% 债务 / 60% 权益。销售额增加 5 亿。增量净固定资本投资为销售额增量的 30%，营运资本投资为 20%。净利润为 10 亿。FCFE 是多少？',
        back: `<div class="ans">
<p><strong>8.5 亿（850 million）。</strong>投资额等于给定比率乘以销售额增量；“净”固定资本投资已经扣除了折旧。在目标负债率下，权益只需承担新增投资的 \\((1-\\text{DR})\\)。（数字为测验数据，非教材例题。）</p>
<ul>
<li>净固定资本投资 \\((\\text{FCInv}-\\text{Dep})=0.30\\times500=150\\)；\\(\\text{WCInv}=0.20\\times500=100\\)；总投资为 250。权益出资 \\((1-\\text{DR})\\times250=0.6\\times250=150\\)。</li>
<li>\\(\\text{FCFE}=\\text{NI}-(1-\\text{DR})(\\text{FCInv}-\\text{Dep})-(1-\\text{DR})\\text{WCInv}=1{,}000-150=850\\)。</li>
</ul>
</div>`,
        gap: '虽然猜对了，但完全是瞎蒙的——不知道如何从销售额增长推算投资额。',
      },
      ja: {
        topic: 'EQ M3 · 売上成長と目標負債比率からの FCFE',
        front: '目標資本構成は負債 40% / 株主資本 60%。売上高が 5 億増加する。増分純固定資本投資は売上増加分の 30%、運転資本投資は 20%。純利益は 10 億。FCFE はいくらか。',
        back: `<div class="ans">
<p><strong>8.5 億（850 million）。</strong>投資額は所与の比率に売上増加分を掛けて求め、「純」固定資本投資はすでに減価償却費を差し引いた後の値である。目標負債比率がある場合、株主資本が負担するのは新規投資の \\((1-\\text{DR})\\) だけ。（数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>純固定資本投資は \\((\\text{FCInv}-\\text{Dep})=0.30\\times500=150\\)、\\(\\text{WCInv}=0.20\\times500=100\\)、総投資は 250。株主資本の負担は \\((1-\\text{DR})\\times250=0.6\\times250=150\\)。</li>
<li>\\(\\text{FCFE}=\\text{NI}-(1-\\text{DR})(\\text{FCInv}-\\text{Dep})-(1-\\text{DR})\\text{WCInv}=1{,}000-150=850\\)。</li>
</ul>
</div>`,
        gap: '勘で正解しただけで全く理解していなかった——売上成長から投資額を逆算する方法が分からなかった。',
      },
      fr: {
        topic: 'EQ M3 · FCFE à partir de la croissance des ventes et du ratio d’endettement cible',
        front: 'La structure financière cible est de 40 % de dette / 60 % de capitaux propres. Les ventes augmentent de 500 millions. L’investissement net incrémental en capital fixe représente 30 % de la hausse des ventes, et l’investissement en fonds de roulement 20 %. Le RN est de 1 000 millions. Quel est le FCFE ?',
        back: `<div class="ans">
<p><strong>850 millions.</strong> L’investissement est le taux donné multiplié par la hausse des ventes ; l’investissement « net » en capital fixe déduit déjà l’amortissement. Avec un ratio d’endettement cible, les capitaux propres ne financent que \\((1-\\text{DR})\\) du nouvel investissement. (Les chiffres proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>FCInv net \\((\\text{FCInv}-\\text{Dep})=0{,}30\\times500=150\\) ; \\(\\text{WCInv}=0{,}20\\times500=100\\) ; investissement total de 250. Les capitaux propres financent \\((1-\\text{DR})\\times250=0{,}6\\times250=150\\).</li>
<li>\\(\\text{FCFE}=\\text{NI}-(1-\\text{DR})(\\text{FCInv}-\\text{Dep})-(1-\\text{DR})\\text{WCInv}=1{,}000-150=850\\).</li>
</ul>
</div>`,
        gap: 'a deviné juste totalement à l’aveugle — ne savait pas déduire l’investissement de la croissance des ventes.',
      },
    },
    'eq-m3-wcinv-fcinv-from-balance-sheet-2026-11-16': {
      zh: {
        topic: 'EQ M3 · 从资产负债表推算 WCInv 与 FCInv',
        front: '如何从资产负债表推算 WCInv 和 FCInv？在测验数据中，不含现金的流动资产为 1,418 对 1,388，不含短期债务的流动负债为 2,581 对 2,657，净利润 1,399，折旧 347，利息 285，税率 32%，资本支出 680。FCFF 是多少？',
        back: `<div class="ans">
<p><strong>1,153.8。</strong>计算自由现金流时，营运资本不包含现金和短期债务（应付票据和长期债务的当期到期部分属于融资项目）。\\(\\text{WCInv}=\\text{WC}_t-\\text{WC}_{t-1}\\)；正的 WCInv 代表现金流出。FCInv 是总资本支出：即固定资产原值的增加额，无处置时等于 \\(\\Delta\\text{Net PP\\&E}+\\text{Dep}\\)，或直接取列示的资本支出——而不是 \\(\\Delta(\\text{总资产}-\\text{流动资产})\\)。（数字为测验数据，非教材例题。）</p>
<ul>
<li>\\(\\text{WC}=(\\text{CA}-\\text{现金})-(\\text{CL}-\\text{短期债务})\\)。即 1,418 对 1,388 减去 2,581 对 2,657，因此 WC 为 \\(-1{,}163\\) 对 \\(-1{,}269\\)，\\(\\text{WCInv}=-1{,}163-(-1{,}269)=106\\)。捷径：经营性流动资产增加是现金使用，经营性流动负债增加是现金来源。流动资产变动净额为 \\(26+51-47=30\\)，经营性流动负债减少 76（现金使用），所以 WCInv 为 \\(30+76=106\\)。</li>
<li>\\(\\text{FCFF}=\\text{NI}+\\text{Dep}+\\text{Int}(1-t)-\\text{FCInv}-\\text{WCInv}=1{,}399+347+285(1-0.32)-680-106=1{,}153.8\\)，因为 \\(285\\times 0.68=193.8\\)。</li>
<li>只有当净借款等于 \\(\\text{Int}(1-t)\\) 时，才有 \\(\\text{FCFF}=\\text{FCFE}\\)。</li>
</ul>
</div>`,
        gap: '不知道如何从资产负债表推算 WCInv，而且把 \\(\\Delta(\\text{total assets}-\\text{current assets})\\) 当成了 FCInv。',
      },
      ja: {
        topic: 'EQ M3 · 貸借対照表から WCInv と FCInv を求める',
        front: '貸借対照表から WCInv と FCInv をどう導くか。クイズの数値では、現金を除く流動資産が 1,418 対 1,388、短期負債を除く流動負債が 2,581 対 2,657、純利益 1,399、減価償却費 347、支払利息 285、税率 32%、設備投資（capex）680 である。FCFF はいくらか。',
        back: `<div class="ans">
<p><strong>1,153.8。</strong>フリー・キャッシュフローでは、運転資本から現金と短期負債（支払手形および長期負債の 1 年以内返済予定額は財務項目）を除く。\\(\\text{WCInv}=\\text{WC}_t-\\text{WC}_{t-1}\\) であり、正の WCInv はキャッシュ・アウトフローとなる。FCInv はグロス設備投資：有形固定資産の取得原価の増加額、売却・除却がなければ \\(\\Delta\\text{Net PP\\&E}+\\text{Dep}\\)、あるいは明示された capex であり、\\(\\Delta(\\text{総資産}-\\text{流動資産})\\) ではない。（数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>\\(\\text{WC}=(\\text{CA}-\\text{現金})-(\\text{CL}-\\text{短期負債})\\)。すなわち 1,418 対 1,388 から 2,581 対 2,657 を引くので、WC は \\(-1{,}163\\) 対 \\(-1{,}269\\) となり、\\(\\text{WCInv}=-1{,}163-(-1{,}269)=106\\)。近道：営業流動資産の増加は資金の使途、営業流動負債の増加は資金の源泉。流動資産の純変化は \\(26+51-47=30\\)、営業流動負債は 76 減少（資金の使途）なので、WCInv は \\(30+76=106\\)。</li>
<li>\\(\\text{FCFF}=\\text{NI}+\\text{Dep}+\\text{Int}(1-t)-\\text{FCInv}-\\text{WCInv}=1{,}399+347+285(1-0.32)-680-106=1{,}153.8\\)（\\(285\\times 0.68=193.8\\)）。</li>
<li>\\(\\text{FCFF}=\\text{FCFE}\\) が成り立つのは、純借入が \\(\\text{Int}(1-t)\\) に等しい場合だけである。</li>
</ul>
</div>`,
        gap: '貸借対照表から WCInv を求める方法が分からず、\\(\\Delta(\\text{total assets}-\\text{current assets})\\) を FCInv として使ってしまった。',
      },
      fr: {
        topic: 'EQ M3 · WCInv et FCInv à partir du bilan',
        front: 'Comment déduit-on WCInv et FCInv du bilan ? Dans les données du quiz, l’actif courant hors trésorerie est de 1 418 contre 1 388, le passif courant hors dette à court terme est de 2 581 contre 2 657, le RN est 1 399, l’amortissement 347, les intérêts 285, le taux d’impôt 32 % et le capex 680. Quel est le FCFF ?',
        back: `<div class="ans">
<p><strong>1 153,8.</strong> Pour le flux de trésorerie disponible, le fonds de roulement exclut la trésorerie et la dette à court terme (les effets à payer et la part à moins d’un an de la dette à long terme relèvent du financement). \\(\\text{WCInv}=\\text{WC}_t-\\text{WC}_{t-1}\\) ; un WCInv positif est une sortie de fonds. Le FCInv est le capex brut : la hausse des immobilisations corporelles brutes, ou \\(\\Delta\\text{Net PP\\&E}+\\text{Dep}\\) sans cessions, ou le capex indiqué — pas \\(\\Delta(\\text{total actif}-\\text{actif courant})\\). (Les chiffres proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>\\(\\text{WC}=(\\text{CA}-\\text{trésorerie})-(\\text{CL}-\\text{dette CT})\\). Soit 1 418 contre 1 388 moins 2 581 contre 2 657, d’où un WC de \\(-1{,}163\\) contre \\(-1{,}269\\) et \\(\\text{WCInv}=-1{,}163-(-1{,}269)=106\\). Raccourci : une hausse d’un actif d’exploitation est un emploi de fonds et une hausse d’un passif d’exploitation est une ressource. Les variations d’actifs courants totalisent \\(26+51-47=30\\), et les passifs courants d’exploitation baissent de 76 (un emploi), donc WCInv vaut \\(30+76=106\\).</li>
<li>\\(\\text{FCFF}=\\text{NI}+\\text{Dep}+\\text{Int}(1-t)-\\text{FCInv}-\\text{WCInv}=1{,}399+347+285(1-0{,}32)-680-106=1{,}153{,}8\\), car \\(285\\times 0{,}68=193{,}8\\).</li>
<li>\\(\\text{FCFF}=\\text{FCFE}\\) uniquement si l’emprunt net est égal à \\(\\text{Int}(1-t)\\).</li>
</ul>
</div>`,
        gap: 'ne savait pas déduire WCInv du bilan et a utilisé \\(\\Delta(\\text{total assets}-\\text{current assets})\\) comme FCInv.',
      },
    },
    'eq-m3-fcfe-from-statements-net-borrowing-2026-11-16': {
      zh: {
        topic: 'EQ M3 · 从财务报表计算 FCFE，净借款',
        front: '在测验数据中，FCFF 为 1,153.8，税后利息为 193.8，长期债务为 2,848 对 2,579，净利润为 1,399，折旧为 347，FCInv 为 680，WCInv 为 106。流动负债中没有单列应付票据或当期到期的长期债务。FCFE 是多少？',
        back: `<div class="ans">
<p><strong>1,229。</strong>净借款是有息债务的变动额。除非单列应付票据或长期债务的当期到期部分，否则流动负债视为经营性项目。这里只有长期债务：\\(\\text{NB}=2{,}848-2{,}579=269\\)。（数字为测验数据，非教材例题。）</p>
<ul>
<li>\\(\\text{FCFE}=\\text{FCFF}-\\text{Int}(1-t)+\\text{NB}=1{,}153.8-193.8+269=1{,}229\\)。直接计算：\\(\\text{FCFE}=\\text{NI}+\\text{Dep}-\\text{FCInv}-\\text{WCInv}+\\text{NB}=1{,}399+347-680-106+269=1{,}229\\)。FCFF（1,154）是上一题留下的干扰项；只有当净借款等于 \\(\\text{Int}(1-t)\\) 时才有 \\(\\text{FCFF}=\\text{FCFE}\\)。</li>
<li>在有目标负债率时按每股计算：\\(\\text{FCFE}=\\text{EPS}-(1-\\text{DR})\\times\\text{净资本支出}-(1-\\text{DR})\\times\\text{WCInv}\\)。“净资本支出”已扣除折旧，且 \\((1-\\text{DR})\\) 只乘以投资项，绝不乘以 EPS。若 2021 年 EPS 为 2.0，净资本支出为 EPS 的 40%，WCInv 为 EPS 的 15%，则 FCFE 为 \\(2.0-0.7\\times0.80-0.7\\times0.30=1.23\\)。FCFE 按权益要求回报率折现，而不是 WACC。估值日为 2020 年末，题干说明 2021 年 EPS 将为 2.0，所以 1.23 已经是 \\(\\text{FCFE}_1\\)，\\(V_0=1.23/(0.135-0.07)=18.92\\)（选 B）。不要再乘以 \\((1+g)\\)。</li>
</ul>
</div>`,
        gap: '误选了 FCFF（1,154）而不是 FCFE。',
      },
      ja: {
        topic: 'EQ M3 · 財務諸表からの FCFE、純借入',
        front: 'クイズの数値では、FCFF が 1,153.8、税引後支払利息が 193.8、長期負債が 2,848 対 2,579、純利益 1,399、減価償却費 347、FCInv 680、WCInv 106 である。流動負債に支払手形や長期負債の 1 年以内返済予定額の内訳はない。FCFE はいくらか。',
        back: `<div class="ans">
<p><strong>1,229。</strong>純借入は有利子負債の変化額である。支払手形や長期負債の 1 年以内返済予定額が別掲されていない限り、流動負債は営業項目とみなす。ここでは長期負債のみ：\\(\\text{NB}=2{,}848-2{,}579=269\\)。（数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>\\(\\text{FCFE}=\\text{FCFF}-\\text{Int}(1-t)+\\text{NB}=1{,}153.8-193.8+269=1{,}229\\)。直接計算では：\\(\\text{FCFE}=\\text{NI}+\\text{Dep}-\\text{FCInv}-\\text{WCInv}+\\text{NB}=1{,}399+347-680-106+269=1{,}229\\)。FCFF（1,154）は前の設問からのひっかけ；\\(\\text{FCFF}=\\text{FCFE}\\) となるのは純借入が \\(\\text{Int}(1-t)\\) と等しいときだけ。</li>
<li>目標負債比率を用いた 1 株当たり計算：\\(\\text{FCFE}=\\text{EPS}-(1-\\text{DR})\\times\\text{純設備投資}-(1-\\text{DR})\\times\\text{WCInv}\\)。「純設備投資」はすでに減価償却費控除後であり、\\((1-\\text{DR})\\) を掛けるのは投資項目だけで、EPS には決して掛けない。2021 年の EPS が 2.0、純設備投資が EPS の 40%、WCInv が EPS の 15% なら、FCFE は \\(2.0-0.7\\times0.80-0.7\\times0.30=1.23\\)。FCFE は WACC ではなく株主資本コスト（要求収益率）で割り引く。評価日が 2020 年末で問題文に 2021 年の EPS が 2.0 とあるため、1.23 はすでに \\(\\text{FCFE}_1\\) であり、\\(V_0=1.23/(0.135-0.07)=18.92\\)（選択肢 B）。再び \\((1+g)\\) を掛けてはいけない。</li>
</ul>
</div>`,
        gap: 'FCFE ではなく FCFF（1,154）を選んでしまった。',
      },
      fr: {
        topic: 'EQ M3 · FCFE à partir des états financiers, emprunt net',
        front: 'Dans les données du quiz, le FCFF est 1 153,8, les intérêts après impôt sont 193,8, la dette à long terme est 2 848 contre 2 579, le RN est 1 399, l’amortissement 347, le FCInv 680 et le WCInv 106. Les passifs courants ne détaillent ni effets à payer ni part courante de la dette LT. Quel est le FCFE ?',
        back: `<div class="ans">
<p><strong>1 229.</strong> L’emprunt net est la variation de la dette portant intérêt. Les passifs courants sont des éléments d’exploitation sauf si les effets à payer ou la part courante de la dette à long terme sont isolés. Ici, il n’y a que la dette à long terme : \\(\\text{NB}=2{,}848-2{,}579=269\\). (Les chiffres proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>\\(\\text{FCFE}=\\text{FCFF}-\\text{Int}(1-t)+\\text{NB}=1{,}153{,}8-193{,}8+269=1{,}229\\). Directement : \\(\\text{FCFE}=\\text{NI}+\\text{Dep}-\\text{FCInv}-\\text{WCInv}+\\text{NB}=1{,}399+347-680-106+269=1{,}229\\). Le FCFF (1 154) est le piège de la question précédente ; \\(\\text{FCFF}=\\text{FCFE}\\) seulement si l’emprunt net égale \\(\\text{Int}(1-t)\\).</li>
<li>Par action avec un ratio d’endettement cible, \\(\\text{FCFE}=\\text{EPS}-(1-\\text{DR})\\times\\text{capex net}-(1-\\text{DR})\\times\\text{WCInv}\\). Le « capex net » déduit déjà l’amortissement, et \\((1-\\text{DR})\\) ne multiplie que les termes d’investissement, jamais le BPA. Avec un BPA 2021 de 2,0, un capex net de 40 % du BPA et un WCInv de 15 % du BPA, le FCFE est \\(2{,}0-0{,}7\\times0{,}80-0{,}7\\times0{,}30=1{,}23\\). Actualisez le FCFE au taux de rendement exigé sur capitaux propres, pas au WACC. La date d’évaluation est fin 2020 et l’énoncé indique un BPA 2021 de 2,0, donc 1,23 est déjà \\(\\text{FCFE}_1\\) et \\(V_0=1{,}23/(0{,}135-0{,}07)=18{,}92\\) (réponse B). Ne multipliez pas à nouveau par \\((1+g)\\).</li>
</ul>
</div>`,
        gap: 'a choisi le FCFF (1 154) au lieu du FCFE.',
      },
    },
    'eq-m3-fcf-vs-ddm-control-2026-11-16': {
      zh: {
        topic: 'EQ M3 · FCF 与 DDM，控制权视角',
        front: '如果发生控制权变更，DDM 是否优于 FCF？什么时候 FCF 优于 DDM，什么时候 FCFF 优于 FCFE？',
        back: `<div class="ans">
<p><strong>不是。当控制权可能发生变更时，FCF 更好。</strong>FCFE 是公司在不损害自身价值的前提下<em>能够</em>向股东派发的现金流，而不是实际派发的现金流。控股股东可以重新支配这笔现金，因此 FCF 模型适合控制权视角（或收购标的）。DDM 估值的则是实际支付的股利。</p>
<ul>
<li>当股利为零或很低、具有随意性，或者与 FCFE 相差很大时，也优先使用 FCF——此时股利无法反映公司的派息能力。</li>
<li>如果资本结构不稳定或正在变化，优先选用 FCFF 而非 FCFE：FCFE 的增长会随净借款剧烈波动，而 FCFF 的增长反映基本面，且 WACC 对杠杆的敏感度低于权益要求回报率。资本结构稳定时则适合用 FCFE（更简单、更直接）。</li>
</ul>
</div>`,
        gap: '错认为“如果发生控制权变更，DDM 优于 FCF”是对的。',
      },
      ja: {
        topic: 'EQ M3 · FCF と DDM、支配権の視点',
        front: '支配権の異動がある場合、DDM は FCF より優れているか。DDM より FCF が好まれるのはいつで、FCFE より FCFF が好まれるのはいつか。',
        back: `<div class="ans">
<p><strong>いいえ。支配権が変わりうる場合は FCF のほうが優れている。</strong>FCFE は企業価値を損なわずに企業が支払<strong>える</strong>キャッシュであり、実際に支払っている額ではない。支配株主はその資金の使途を変えられるため、FCF モデルは支配権の視点（または買収対象）に適している。DDM は実際に支払われる配当を評価する。</p>
<ul>
<li>配当がゼロまたは非常に低い、裁量的である、あるいは FCFE と大きく乖離している場合も FCF が好まれる——そのような配当は支払能力を映さないからである。</li>
<li>資本構成が不安定または変化している場合は、FCFE より FCFF を選ぶ：FCFE の成長率は純借入によって大きく振れる一方、FCFF の成長率はファンダメンタルズを反映し、WACC は株主資本コストよりレバレッジへの感応度が低い。資本構成が安定している場合は FCFE が有利（より単純で直接的）。</li>
</ul>
</div>`,
        gap: '「支配権の異動がある場合、DDM は FCF より優れている」という記述を正しいとしてしまった。',
      },
      fr: {
        topic: 'EQ M3 · FCF contre DDM, perspective de contrôle',
        front: 'Le DDM est-il supérieur au FCF en cas de changement de contrôle ? Quand préfère-t-on le FCF au DDM, et quand préfère-t-on le FCFF au FCFE ?',
        back: `<div class="ans">
<p><strong>Non. Le FCF est meilleur lorsque le contrôle peut changer.</strong> Le FCFE est ce que l’entreprise peut distribuer sans nuire à sa valeur, pas ce qu’elle verse effectivement. Un propriétaire contrôlant peut réorienter cette trésorerie ; les modèles de FCF conviennent donc à une optique de contrôle (ou à une cible d’acquisition). Le DDM valorise les dividendes réellement versés.</p>
<ul>
<li>Le FCF est aussi préférable lorsque les dividendes sont nuls ou faibles, discrétionnaires, ou très différents du FCFE — ils ne reflètent alors pas la capacité de distribution de l’entreprise.</li>
<li>Si la structure financière est instable ou évolutive, préférez le FCFF au FCFE : la croissance du FCFE fluctue avec l’emprunt net, tandis que celle du FCFF reflète les fondamentaux et le WACC est moins sensible au levier que le coût des capitaux propres. Une structure financière stable favorise le FCFE (plus simple et plus direct).</li>
</ul>
</div>`,
        gap: 'a jugé exacte l’affirmation selon laquelle « le DDM est supérieur au FCF s’il y a un changement de contrôle ».',
      },
    },
    'eq-m4-ev-ebitda-vs-ev-fcff-capex-2026-11-15': {
      zh: {
        topic: 'EQ M4 · EV/EBITDA 与 EV/FCFF',
        front: '两家公司具有相同的 EV/EBITDA，但 A 公司的资本支出要求远高于 B 公司。哪家公司更贵，为什么？EV/FCFF 是否存在同样的局限？',
        back: `<div class="ans">
<p><strong>A 公司更贵。</strong>EV/EBITDA 会掩盖资本开支计划的差异，因为 EBITDA 忽略了资本支出（只有当 D&amp;A ≈ capex 时才勉强反映资本支出）。FCFF 则<strong>没有</strong>这个盲区。</p>
<ul>
<li>FCFF 加回非现金的 D&amp;A，但扣除了实际的资本支出（FCInv）和营运资本投资（WCInv）：\\(\\text{FCFF}=\\text{EBITDA}(1-t)+\\text{Dep}\\times t-\\text{FCInv}-\\text{WCInv}\\)。</li>
<li>因此 EV/FCFF 能够揭示资本密集度，而 EV/EBITDA 不能。FCFF“直接反映了公司所需资本支出的金额”，并且比 EBITDA 具有更强的估值理论基础。</li>
</ul>
<p><em>简化示例，非教材例题</em>（忽略税收与 WCInv，故 \\(\\text{FCFF}=\\text{EBITDA}-\\text{FCInv}\\)）：两者 EV 均为 1,000、EBITDA 均为 100（EV/EBITDA 均為 10 倍）。A 的资本支出为 60，B 为 20 → FCFF 分别为 40 对 80 → EV/FCFF 分别为 25 倍对 12.5 倍。</p>
</div>`,
        gap: '选出了 A 更贵但解释不出原因；误以为 FCFF 因为加回了 D&A 也有同样的盲区。',
      },
      ja: {
        topic: 'EQ M4 · EV/EBITDA と EV/FCFF',
        front: '2 社の EV/EBITDA は同じだが、A 社は B 社よりはるかに巨額の設備投資（capex）を必要とする。どちらが割高で、なぜか。EV/FCFF にも同じ限界があるか。',
        back: `<div class="ans">
<p><strong>A 社のほうが割高である。</strong>EBITDA は capex を無視するため（D&amp;A ≈ capex のときにしか反映されない）、EV/EBITDA は設備投資計画の違いを覆い隠す。FCFF にはその盲点が<strong>ない</strong>。</p>
<ul>
<li>FCFF は非現金項目の D&amp;A を足し戻す一方で、実際の設備投資（FCInv）と WCInv を差し引く：\\(\\text{FCFF}=\\text{EBITDA}(1-t)+\\text{Dep}\\times t-\\text{FCInv}-\\text{WCInv}\\)。</li>
<li>したがって EV/FCFF は資本集約度を映し出すが、EV/EBITDA はそうではない。FCFF は「企業に必要な設備投資額を直接反映」し、EBITDA より評価理論との結びつきが強い。</li>
</ul>
<p><em>簡略化した設例（テキストの例題ではない）</em>（税金と WCInv を無視して \\(\\text{FCFF}=\\text{EBITDA}-\\text{FCInv}\\) とする）：両社とも EV 1,000、EBITDA 100（EV/EBITDA は 10 倍）。capex が A は 60、B は 20 → FCFF は 40 対 80 → EV/FCFF は 25 倍対 12.5 倍。</p>
</div>`,
        gap: 'A が割高だとは見抜けたが理由を説明できず、FCFF も D&A を足し戻すから同じ盲点があると思ってしまった。',
      },
      fr: {
        topic: 'EQ M4 · EV/EBITDA contre EV/FCFF',
        front: 'Deux entreprises ont le même EV/EBITDA, mais l’entreprise A nécessite des dépenses d’investissement (capex) bien plus lourdes que l’entreprise B. Laquelle est la plus chère, et pourquoi ? EV/FCFF souffre-t-il de la même limite ?',
        back: `<div class="ans">
<p><strong>L’entreprise A est plus chère.</strong> EV/EBITDA masque les écarts de programmes d’investissement car l’EBITDA ignore le capex (il ne le reflète que si D&amp;A ≈ capex). Le FCFF n’a <strong>pas</strong> ce point aveugle.</p>
<ul>
<li>Le FCFF réintègre les D&amp;A non décaissées mais retranche le capex réel (FCInv) et le WCInv : \\(\\text{FCFF}=\\text{EBITDA}(1-t)+\\text{Dep}\\times t-\\text{FCInv}-\\text{WCInv}\\).</li>
<li>Ainsi, EV/FCFF révèle l’intensité capitalistique, contrairement à EV/EBITDA. Le FCFF « reflète directement le montant des dépenses d’investissement requises » et a un lien plus fort avec la théorie de l’évaluation que l’EBITDA.</li>
</ul>
<p><em>Illustration simplifiée, pas un exemple du manuel</em> (impôts et WCInv ignorés, donc \\(\\text{FCFF}=\\text{EBITDA}-\\text{FCInv}\\)) : EV 1 000 et EBITDA 100 pour les deux (EV/EBITDA 10x). Capex de 60 pour A contre 20 pour B → FCFF de 40 contre 80 → EV/FCFF de 25x contre 12,5x.</p>
</div>`,
        gap: 'a identifié A comme plus chère sans pouvoir l’expliquer ; pensait que le FCFF avait le même angle mort parce qu’il réintègre les D&A.',
      },
    },
    'eq-m4-justified-trailing-pe-payout-2026-11-15': {
      zh: {
        topic: 'EQ M4 · 合理滚动 P/E',
        front: '派息率为 40%，\\(g\\) 为 5%，\\(r\\) 为 9%。合理滚动（历史）P/E 是多少？',
        back: `<div class="ans">
<p><strong>10.5。</strong></p>
<ul>
<li>滚动（Trailing）：\\(\\dfrac{P_0}{E_0}=\\dfrac{(1-b)(1+g)}{r-g}=\\dfrac{0.40\\times1.05}{0.04}=10.5\\)。</li>
<li>预期（Leading / forward）：\\(\\dfrac{P_0}{E_1}=\\dfrac{1-b}{r-g}=\\dfrac{0.40}{0.04}=10\\)。</li>
</ul>
<p>\\(b\\) 是留存比率；分子用的是派息率 \\(1-b\\)。滚动市盈率还包含 \\((1+g)\\)，因为 \\(E_1=E_0(1+g)\\)。</p>
</div>`,
        gap: '分子错用了留存比率 \\(b=0.6\\) 而不是派息率 \\(1-b=0.4\\)，且计算滚动 P/E 时漏掉了 \\((1+g)\\)。',
      },
      ja: {
        topic: 'EQ M4 · 理論実績（トレーリング）P/E',
        front: '配当性向が 40%、\\(g\\) が 5%、\\(r\\) が 9% である。理論トレーリング P/E はいくらか。',
        back: `<div class="ans">
<p><strong>10.5。</strong></p>
<ul>
<li>トレーリング（実績）：\\(\\dfrac{P_0}{E_0}=\\dfrac{(1-b)(1+g)}{r-g}=\\dfrac{0.40\\times1.05}{0.04}=10.5\\)。</li>
<li>リーディング（予想）：\\(\\dfrac{P_0}{E_1}=\\dfrac{1-b}{r-g}=\\dfrac{0.40}{0.04}=10\\)。</li>
</ul>
<p>\\(b\\) は内部留保率であり、分子に使うのは配当性向 \\(1-b\\)。トレーリング倍率には \\(E_1=E_0(1+g)\\) のため \\((1+g)\\) も入る。</p>
</div>`,
        gap: '配当性向 \\(1-b=0.4\\) ではなく内部留保率 \\(b=0.6\\) を使い、さらにトレーリング P/E で \\((1+g)\\) を落とした。',
      },
      fr: {
        topic: 'EQ M4 · P/E historique justifié',
        front: 'Le taux de distribution est de 40 %, \\(g\\) est de 5 % et \\(r\\) est de 9 %. Quel est le P/E historique (trailing) justifié ?',
        back: `<div class="ans">
<p><strong>10,5.</strong></p>
<ul>
<li>Historique (trailing) : \\(\\dfrac{P_0}{E_0}=\\dfrac{(1-b)(1+g)}{r-g}=\\dfrac{0{,}40\\times1{,}05}{0{,}04}=10{,}5\\).</li>
<li>Prévisionnel (leading / forward) : \\(\\dfrac{P_0}{E_1}=\\dfrac{1-b}{r-g}=\\dfrac{0{,}40}{0{,}04}=10\\).</li>
</ul>
<p>\\(b\\) est le taux de rétention ; le numérateur utilise le taux de distribution, \\(1-b\\). Le multiple historique inclut aussi \\((1+g)\\), car \\(E_1=E_0(1+g)\\).</p>
</div>`,
        gap: 'a utilisé le taux de rétention \\(b=0{,}6\\) au lieu du taux de distribution \\(1-b=0{,}4\\), et a omis \\((1+g)\\) pour le P/E historique.',
      },
    },
    'eq-m4-justified-trailing-ps-inferred-inputs-2026-11-16': {
      zh: {
        topic: 'EQ M4 · 合理滚动 P/S',
        front: '净利润为 1,200，ROE 为 16.67%，销售额为 12,000，\\(r\\) 为 12%，留存收益增加额为 720。合理滚动 P/S 是多少？',
        back: `<div class="ans">
<p><strong>2.2。</strong>先推导出输入参数，再套用滚动公式（包含 \\((1+g)\\)）。</p>
<ul>
<li>留存比率为 \\(b=720/1{,}200=0.6\\)，因此派息率为 \\(1-b=0.4\\)。可持续增长率为 \\(g=\\text{ROE}\\times b=16.67\\%\\times0.6=10\\%\\)。净利润率为 \\(\\text{PM}_0=E_0/S_0=1{,}200/12{,}000=10\\%\\)。</li>
<li>\\(\\dfrac{P_0}{S_0}=\\dfrac{\\text{PM}_0(1-b)(1+g)}{r-g}=\\dfrac{0.10\\times0.40\\times1.10}{0.12-0.10}=2.2\\)。</li>
</ul>
</div>`,
        gap: '虽然做对了，但在推算输入参数时卡壳了。',
      },
      ja: {
        topic: 'EQ M4 · 理論トレーリング P/S',
        front: '純利益が 1,200、ROE が 16.67%、売上高が 12,000、\\(r\\) が 12%、利益剰余金の増加額が 720 である。理論トレーリング P/S はいくらか。',
        back: `<div class="ans">
<p><strong>2.2。</strong>まず入力値を導き出し、そのうえで（\\((1+g)\\) を含む）トレーリングの式を使う。</p>
<ul>
<li>内部留保率は \\(b=720/1{,}200=0.6\\) なので、配当性向は \\(1-b=0.4\\)。持続可能成長率は \\(g=\\text{ROE}\\times b=16.67\\%\\times0.6=10\\%\\)。売上高純利益率は \\(\\text{PM}_0=E_0/S_0=1{,}200/12{,}000=10\\%\\)。</li>
<li>\\(\\dfrac{P_0}{S_0}=\\dfrac{\\text{PM}_0(1-b)(1+g)}{r-g}=\\dfrac{0.10\\times0.40\\times1.10}{0.12-0.10}=2.2\\)。</li>
</ul>
</div>`,
        gap: '正解したが、入力値を逆算するところで手間取った。',
      },
      fr: {
        topic: 'EQ M4 · P/S historique justifié',
        front: 'Le RN est de 1 200, le ROE de 16,67 %, le chiffre d’affaires de 12 000, \\(r\\) de 12 %, et la hausse des résultats non distribués est de 720. Quel est le P/S historique justifié ?',
        back: `<div class="ans">
<p><strong>2,2.</strong> Déduisez les paramètres, puis utilisez la forme historique (qui inclut \\((1+g)\\)).</p>
<ul>
<li>La rétention vaut \\(b=720/1{,}200=0{,}6\\), donc le taux de distribution est \\(1-b=0{,}4\\). La croissance soutenable est \\(g=\\text{ROE}\\times b=16{,}67\\%\\times0{,}6=10\\%\\). La marge bénéficiaire est \\(\\text{PM}_0=E_0/S_0=1{,}200/12{,}000=10\\%\\).</li>
<li>\\(\\dfrac{P_0}{S_0}=\\dfrac{\\text{PM}_0(1-b)(1+g)}{r-g}=\\dfrac{0{,}10\\times0{,}40\\times1{,}10}{0{,}12-0{,}10}=2{,}2\\).</li>
</ul>
</div>`,
        gap: 'a trouvé la bonne réponse mais a eu du mal à déduire les paramètres.',
      },
    },
    'eq-m5-multistage-ri-pb-terminal-2026-11-16': {
      zh: {
        topic: 'EQ M5 · 多阶段 RI，P/B 终值',
        front: '\\(B_0\\)（2020 年初）为 10，未来 3 年 ROE 为 20%，派息率为 50%，\\(r\\) 为 12%，预测 2022 年末的 P/B 为 1.5。今天的股票价值是多少？',
        back: `<div class="ans">
<p><strong>16.84。</strong>“今天”是 2020 年初，因此 2022 年末的溢价要折现三年。终值项是高于账面价值的溢价 \\(P_T-B_T\\)，而不是全部股价——\\(B_0\\) 已经计入了账面价值。（数字为测验数据，非教材例题。）</p>
<ul>
<li>留存比率为 50%，故 \\(g=\\text{ROE}\\times b=20\\%\\times50\\%=10\\%\\)。因此 \\(B_1=11\\)，\\(B_2=12.10\\)，\\(B_3=13.31\\)。各期 RI 使用年初账面价值：\\(\\text{RI}_t=(\\text{ROE}-r)B_{t-1}\\) 分别为 0.80、0.88 和 0.968。其现值之和为 \\(0.714+0.702+0.689=2.105\\)。</li>
<li>终期溢价 \\(P_T-B_T=(1.5-1)B_3=0.5\\times13.31=6.655\\)；现值为 \\(6.655/1.12^3=4.737\\)。\\(V_0=B_0+2.105+4.737=16.84\\)。</li>
<li>如果未对 6.655 折现，会得到 \\(10+2.105+6.655=18.76\\)。如果用了完整股价 \\(1.5\\times B_3\\) 而非溢价，则会重复计算账面价值，得出约 26.3。</li>
</ul>
</div>`,
        gap: '没有对终期溢价折现，算成了 18.76。',
      },
      ja: {
        topic: 'EQ M5 · 多段階 RI、P/B ターミナル',
        front: '\\(B_0\\)（2020 年初）が 10、ROE が 3 年間 20%、配当性向が 50%、\\(r\\) が 12%、2022 年末の予想 P/B が 1.5 である。今日の価値はいくらか。',
        back: `<div class="ans">
<p><strong>16.84。</strong>「今日」は 2020 年初なので、2022 年末のプレミアムは 3 年間割り引く。ターミナル項は株価全体ではなく簿価に対するプレミアム \\(P_T-B_T\\) である——\\(B_0\\) がすでに簿価を含んでいるからである。（数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>内部留保率は 50% なので、\\(g=\\text{ROE}\\times b=20\\%\\times50\\%=10\\%\\)。よって \\(B_1=11\\)、\\(B_2=12.10\\)、\\(B_3=13.31\\)。各期の RI は期首簿価を使う：\\(\\text{RI}_t=(\\text{ROE}-r)B_{t-1}\\) は 0.80、0.88、0.968 となる。それらの現在価値は \\(0.714+0.702+0.689=2.105\\)。</li>
<li>ターミナル・プレミアム \\(P_T-B_T=(1.5-1)B_3=0.5\\times13.31=6.655\\)；現在価値は \\(6.655/1.12^3=4.737\\)。\\(V_0=B_0+2.105+4.737=16.84\\)。</li>
<li>6.655 を割り引かないままにすると \\(10+2.105+6.655=18.76\\) になる。プレミアムではなく株価全体 \\(1.5\\times B_3\\) を使うと簿価を二重計上してしまい、約 26.3 になる。</li>
</ul>
</div>`,
        gap: 'ターミナル・プレミアムを割り引かずに使ってしまい、18.76 と答えた。',
      },
      fr: {
        topic: 'EQ M5 · RI à plusieurs étapes, valeur terminale par P/B',
        front: '\\(B_0\\) (début 2020) est de 10, le ROE est de 20 % pendant 3 ans, le taux de distribution est de 50 %, \\(r\\) est de 12 %, et le P/B prévu fin 2022 est de 1,5. Quelle est la valeur aujourd’hui ?',
        back: `<div class="ans">
<p><strong>16,84.</strong> « Aujourd’hui » correspond au début de 2020, donc la prime de fin 2022 est actualisée sur trois ans. Le terme terminal est la prime sur la valeur comptable, \\(P_T-B_T\\), et non le prix total — \\(B_0\\) compte déjà la valeur comptable. (Les chiffres proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>La rétention est de 50 %, donc \\(g=\\text{ROE}\\times b=20\\%\\times50\\%=10\\%\\). Ainsi \\(B_1=11\\), \\(B_2=12{,}10\\), \\(B_3=13{,}31\\). Chaque RI utilise la valeur comptable de début d’année : \\(\\text{RI}_t=(\\text{ROE}-r)B_{t-1}\\) vaut 0,80, 0,88 et 0,968. Leurs VA sont \\(0{,}714+0{,}702+0{,}689=2{,}105\\).</li>
<li>Prime terminale \\(P_T-B_T=(1{,}5-1)B_3=0{,}5\\times13{,}31=6{,}655\\) ; VA \\(=6{,}655/1{,}12^3=4{,}737\\). \\(V_0=B_0+2{,}105+4{,}737=16{,}84\\).</li>
<li>Laisser 6,655 non actualisé donne \\(10+2{,}105+6{,}655=18{,}76\\). Utiliser le prix total \\(1{,}5\\times B_3\\) au lieu de la prime compte deux fois la valeur comptable et donne environ 26,3.</li>
</ul>
</div>`,
        gap: 'a laissé la prime terminale non actualisée et obtenu 18,76.',
      },
    },
    'eq-m6-dloc-from-control-premium-2026-11-15': {
      zh: {
        topic: 'EQ M6 · 由控制权溢价求 DLOC',
        front: '控制权溢价为 25%，DLOM 为 20%。非控股、缺乏市场流动性股权的总折价是多少？',
        back: `<div class="ans">
<p><strong>36%。</strong></p>
<ul>
<li>\\(\\text{DLOC}=1-\\dfrac{1}{1+\\text{控制权溢价}}=1-\\dfrac{1}{1.25}=20\\%\\)。DLOC 并不等于控制权溢价本身。</li>
<li>\\(\\text{总折价}=1-(1-\\text{DLOC})(1-\\text{DLOM})=1-0.8\\times0.8=36\\%\\)。</li>
</ul>
<p>当两个折价都适用时，应依次叠加，总折价是相乘关系而非相加关系。</p>
</div>`,
        gap: '直接把 25% 的控制权溢价当成了 DLOC，算成了 40%。',
      },
      ja: {
        topic: 'EQ M6 · 支配権プレミアムからの DLOC',
        front: '支配権プレミアムが 25%、DLOM が 20% である。市場性のない少数持分に対する合計ディスカウントはいくらか。',
        back: `<div class="ans">
<p><strong>36%。</strong></p>
<ul>
<li>\\(\\text{DLOC}=1-\\dfrac{1}{1+\\text{支配権プレミアム}}=1-\\dfrac{1}{1.25}=20\\%\\)。DLOC は支配権プレミアムそのものではない。</li>
<li>\\(\\text{合計ディスカウント}=1-(1-\\text{DLOC})(1-\\text{DLOM})=1-0.8\\times0.8=36\\%\\)。</li>
</ul>
<p>両方のディスカウントが適用される場合、順に適用されるため合計は加算ではなく乗算になる。</p>
</div>`,
        gap: '25% の支配権プレミアムをそのまま DLOC として使い、40% と答えてしまった。',
      },
      fr: {
        topic: 'EQ M6 · DLOC à partir de la prime de contrôle',
        front: 'La prime de contrôle est de 25 % et la DLOM de 20 %. Quelle est la décote totale pour une participation minoritaire non négociable ?',
        back: `<div class="ans">
<p><strong>36 %.</strong></p>
<ul>
<li>\\(\\text{DLOC}=1-\\dfrac{1}{1+\\text{Prime de contrôle}}=1-\\dfrac{1}{1{,}25}=20\\%\\). La DLOC n’est pas la prime de contrôle elle-même.</li>
<li>\\(\\text{Décote totale}=1-(1-\\text{DLOC})(1-\\text{DLOM})=1-0{,}8\\times0{,}8=36\\%\\).</li>
</ul>
<p>Lorsque les deux décotes s’appliquent, elles le font en séquence et le total est multiplicatif, non additif.</p>
</div>`,
        gap: 'a utilisé directement la prime de contrôle de 25 % comme DLOC, obtenant 40 %.',
      },
    },
    'eq-m6-excess-earnings-intangibles-2026-11-15': {
      zh: {
        topic: 'EQ M6 · 超额收益法',
        front: '超额收益法如何对无形资产估值？',
        back: `<div class="ans">
<p>它将扣除有形资产所要求回报之后剩余的盈利进行资本化——而不是直接从财务报表中取无形资产账面值。</p>
<ul>
<li>先估算正常化盈利。再取营运资本和固定资产的公允市场价值及其要求回报率。要求回报率从营运资本（最低，\\(r_{WC}\\)）到固定资产（\\(r_{FA}\\)），再到无形资产（最高，\\(r_{RI}\\)）依次升高。</li>
<li>\\(\\text{RI}_t=\\text{正常化收益}-(WC\\times r_{WC})-(FA\\times r_{FA})\\)。用无形资产（剩余收益）折现率将超额收益资本化：\\(\\text{RV}_t=\\dfrac{\\text{RI}_t(1+g)}{r_{RI}-g}\\)。</li>
<li>公司价值 = 营运资本 + 固定资产 + 无形资产价值（\\(\\text{RV}_t\\)）。</li>
</ul>
</div>`,
        gap: '错答成了无形资产取自财务报告且通常不计入。',
      },
      ja: {
        topic: 'EQ M6 · 超過収益法',
        front: '超過収益法は無形資産をどのように評価するか。',
        back: `<div class="ans">
<p>有形資産に対する要求収益を差し引いた後に残る利益を資本化する——財務諸表から無形資産の価額を取ってくるのではない。</p>
<ul>
<li>まず正常化利益を見積もる。次に運転資本と有形固定資産の公正市場価値とそれぞれの要求収益率を求める。要求収益率は運転資本（最も低い、\\(r_{WC}\\)）、有形固定資産（\\(r_{FA}\\)）、無形資産（最も高い、\\(r_{RI}\\)）の順に高くなる。</li>
<li>\\(\\text{RI}_t=\\text{正常化利益}-(WC\\times r_{WC})-(FA\\times r_{FA})\\)。無形資産（残余利益）の割引率で超過収益を資本化する：\\(\\text{RV}_t=\\dfrac{\\text{RI}_t(1+g)}{r_{RI}-g}\\)。</li>
<li>企業価値 = 運転資本 + 有形固定資産 + 無形資産の価値（\\(\\text{RV}_t\\)）。</li>
</ul>
</div>`,
        gap: '「無形資産は財務報告から取得され、通常は含めない」と答えてしまった。',
      },
      fr: {
        topic: 'EQ M6 · Méthode des bénéfices excédentaires',
        front: 'Comment la méthode des bénéfices excédentaires valorise-t-elle les actifs incorporels ?',
        back: `<div class="ans">
<p>Elle capitalise les bénéfices qui subsistent après le rendement exigé sur les actifs corporels — elle ne prend pas les incorporels dans les états financiers.</p>
<ul>
<li>Estimez d’abord le bénéfice normalisé. Prenez ensuite la juste valeur marchande du fonds de roulement et des immobilisations corporelles ainsi que leurs rendements exigés. Ces taux exigés augmentent du fonds de roulement (le plus bas, \\(r_{WC}\\)) aux immobilisations corporelles (\\(r_{FA}\\)), puis aux incorporels (le plus élevé, \\(r_{RI}\\)).</li>
<li>\\(\\text{RI}_t=\\text{Résultat normalisé}-(WC\\times r_{WC})-(FA\\times r_{FA})\\). Capitalisez le bénéfice excédentaire au taux d’actualisation des incorporels (bénéfice résiduel) : \\(\\text{RV}_t=\\dfrac{\\text{RI}_t(1+g)}{r_{RI}-g}\\).</li>
<li>Valeur de l’entreprise = fonds de roulement + immobilisations corporelles + valeur des incorporels (\\(\\text{RV}_t\\)).</li>
</ul>
</div>`,
        gap: 'a dit que les incorporels sont tirés des rapports financiers et généralement exclus.',
      },
    },
    'eq-m6-normalize-any-buyer-2026-11-15': {
      zh: {
        topic: 'EQ M6 · 正常化盈利，适用于任何买家',
        front: '所有者薪酬为 USD 600,000，而市场薪酬水平为 USD 350,000。应当如何对盈利进行正常化调整，且该调整适用于哪类买家？',
        back: `<div class="ans">
<p>加回 USD 250,000 的超额薪酬——这是一项<strong>税前</strong> SG&amp;A 调整（随后需重算所得税）。该正常化调整适用于<strong>任何买家</strong>：它将盈利重述为仿佛公司被收购并按市场薪酬水平高效运营下的状态。</p>
<ul>
<li><strong>战略买家</strong>还会在此基础上进一步计入协同效应（投资价值：在当前预期之外增加收入和/或削减成本）。</li>
<li><strong>财务买家</strong>则在独立运营（standalone）的基础上对公司估值，不计入这些协同效应。</li>
</ul>
</div>`,
        gap: '错答成了只针对战略买家进行正常化调整。',
      },
      ja: {
        topic: 'EQ M6 · 利益の正常化、あらゆる買い手',
        front: 'オーナー報酬が USD 600,000 であるのに対し、市場水準は USD 350,000 である。利益をどのように正常化すべきか。また、どのタイプの買い手に対して行うか。',
        back: `<div class="ans">
<p>超過報酬 USD 250,000 を足し戻す——これは<strong>税引前</strong>の販管費（SG&amp;A）調整であり（その後、税金を再計算する）。この正常化は<strong>あらゆる買い手</strong>に対して適用される：企業が買収され、市場水準の報酬で効率的に運営された場合の利益へと修正するものだからである。</p>
<ul>
<li><strong>戦略的買い手</strong>は、さらにシナジーを上乗せする（投資価値：現在の予想を超える増収および／またはコスト削減）。</li>
<li><strong>財務的買い手</strong>は、そうしたシナジーを含めずに単独（スタンドアロン）ベースで企業を評価する。</li>
</ul>
</div>`,
        gap: '戦略的買い手に対してのみ正常化すると答えてしまった。',
      },
      fr: {
        topic: 'EQ M6 · Normaliser les bénéfices, tout acheteur',
        front: 'La rémunération du propriétaire est de 600 000 USD contre un salaire de marché de 350 000 USD. Comment normaliser les bénéfices, et pour quel type d’acheteur ?',
        back: `<div class="ans">
<p>Réintégrer les 250 000 USD de rémunération excédentaire — un ajustement <strong>avant impôt</strong> des frais généraux (SG&amp;A), puis recalculer l’impôt. Cette normalisation s’applique à <strong>tout acheteur</strong> : elle retraite le bénéfice comme si l’entreprise était acquise et gérée efficacement au taux de rémunération du marché.</p>
<ul>
<li>Un acheteur <strong>stratégique</strong> y ajoute en plus des synergies (valeur d’investissement : hausse du chiffre d’affaires et/ou réduction des coûts au-delà des prévisions actuelles).</li>
<li>Un acheteur <strong>financier</strong> valorise l’entreprise sur une base autonome (standalone), sans ces synergies.</li>
</ul>
</div>`,
        gap: 'a répondu de normaliser uniquement pour l’acheteur stratégique.',
      },
    },
    'eq-m6-normalized-operating-income-pretax-2026-11-16': {
      zh: {
        topic: 'EQ M6 · 正常化营业利润，对加回项计税',
        front: '营业收入为 4,200k，营业成本 1,250k，SG&amp;A 为 1,500k（其中管理层薪酬 980k，市场水平为 500k），D&amp;A 为 200k，税率 30%，税后营业利润为 875k。正常化营业利润是多少？',
        back: `<div class="ans">
<p>税后正常化营业利润为 <strong>1,211k</strong>。超额薪酬属于税前 SG&amp;A 加回项；当目标是税后营业利润时，必须对其计税。（数字为测验数据，非教材例题。）</p>
<ul>
<li>正常化 SG&amp;A 为 \\(1{,}500-480=1{,}020\\)k，因此 EBIT 为 \\(4{,}200-1{,}250-1{,}020-200=1{,}730\\)k。按 30% 模拟税率计税后剩余 \\(1{,}730\\times0.7=1{,}211\\)k。等价地，\\(875+480\\times0.7=1{,}211\\)k。</li>
<li>把税前的 480k 直接加到税后金额上（\\(875+480=1{,}355\\)k）会高估利润。D&amp;A 仍保持扣除状态：这里的营业利润是扣除 D&amp;A 后的 EBIT，而不是 EBITDA。按报表原始数据，EBIT 为 \\(4{,}200-1{,}250-1{,}500-200=1{,}250\\)k，且 \\(1{,}250\\times0.7=875\\)k 与题干给出的税后金额一致。</li>
</ul>
</div>`,
        gap: '把税前的 480k 直接加到了税后营业利润上，算成了 1,355k。',
      },
      ja: {
        topic: 'EQ M6 · 正常化営業利益、足し戻しへの課税',
        front: '売上高 4,200k、売上原価 1,250k、販管費（SG&amp;A）1,500k（うち経営陣報酬 980k、市場水準 500k）、D&amp;A 200k、税率 30%、税引後営業利益 875k。正常化営業利益はいくらか。',
        back: `<div class="ans">
<p>税引後の正常化営業利益は <strong>1,211k</strong>。超過報酬は税引前の SG&amp;A の足し戻し項目であるため、目標が税引後営業利益であるときは税引き後の影響に直す。（数値はクイズのデータであり、テキストの例題ではない。）</p>
<ul>
<li>正常化 SG&amp;A は \\(1{,}500-480=1{,}020\\)k なので、EBIT は \\(4{,}200-1{,}250-1{,}020-200=1{,}730\\)k。30% のプロフォーマ税率を適用すると \\(1{,}730\\times0.7=1{,}211\\)k が残る。同じことだが、\\(875+480\\times0.7=1{,}211\\)k。</li>
<li>税引前の 480k を税引後の数値にそのまま足す（\\(875+480=1{,}355\\)k）と利益を過大計上してしまう。D&amp;A は控除したままにする：ここでの営業利益は EBITDA ではなく D&amp;A 控除後の EBIT である。報告ベースでは EBIT が \\(4{,}200-1{,}250-1{,}500-200=1{,}250\\)k で、\\(1{,}250\\times0.7=875\\)k が所与の税引後金額と一致する。</li>
</ul>
</div>`,
        gap: '税引前の 480k をそのまま税引後営業利益に足して、1,355k と答えてしまった。',
      },
      fr: {
        topic: 'EQ M6 · Résultat d’exploitation normalisé, imposer la réintégration',
        front: 'Le chiffre d’affaires est de 4 200k, le coût des ventes de 1 250k, les SG&amp;A de 1 500k (incluant des salaires de direction de 980k contre un taux de marché de 500k), les D&amp;A de 200k, l’impôt de 30 %, et le résultat d’exploitation après impôt de 875k. Quel est le résultat d’exploitation normalisé ?',
        back: `<div class="ans">
<p><strong>1 211k</strong> de résultat d’exploitation normalisé après impôt. La rémunération excédentaire est une réintégration avant impôt des SG&amp;A ; il faut l’imposer lorsque la cible est le résultat d’exploitation après impôt. (Les chiffres proviennent d’un quiz, pas d’un exemple du manuel.)</p>
<ul>
<li>Les SG&amp;A normalisés sont de \\(1{,}500-480=1{,}020\\)k, donc l’EBIT vaut \\(4{,}200-1{,}250-1{,}020-200=1{,}730\\)k. Après impôt pro forma à 30 %, il reste \\(1{,}730\\times0{,}7=1{,}211\\)k. De façon équivalente, \\(875+480\\times0{,}7=1{,}211\\)k.</li>
<li>Ajouter les 480k avant impôt au chiffre après impôt (\\(875+480=1{,}355\\)k) surestime le résultat. Les D&amp;A restent déduites : le résultat d’exploitation ici est l’EBIT après D&amp;A, pas l’EBITDA. Tel que publié, l’EBIT est \\(4{,}200-1{,}250-1{,}500-200=1{,}250\\)k, et \\(1{,}250\\times0{,}7=875\\)k correspond bien au montant après impôt donné.</li>
</ul>
</div>`,
        gap: 'a ajouté les 480k avant impôt au résultat d’exploitation après impôt et obtenu 1 355k.',
      },
    },
  },
});
