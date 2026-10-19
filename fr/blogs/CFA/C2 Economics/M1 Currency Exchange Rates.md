---
title: Taux de change
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover,
.blur-hover:focus-within {
    filter: none;
}
.fx-concept-chart {
    display: block;
    width: 100%;
    height: 480px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.parity-chart { height: 550px; }
.fx-concept-chart.overshoot-chart { height: 620px; }
.fx-concept-chart.portfolio-chart { height: 400px; }
.fx-concept-chart.models-chart { height: 500px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.parity-chart { height: 770px; }
    .fx-concept-chart.overshoot-chart { height: 1170px; }
    .fx-concept-chart.portfolio-chart { height: 530px; }
    .fx-concept-chart.models-chart { height: 840px; }
}
</style>

# Taux de change

Un problème de change devient bien plus simple dès que la convention de cotation est fixée. Dans tout ce module,

$$
A/B
$$

signifie **unités de la devise de cotation $A$ pour une unité de la devise de base $B$**. Ainsi, CNY/USD = 7,00 signifie qu’un dollar coûte 7,00 yuans.

## Calculs de change

### Notations de base

- Le **taux au comptant** est le taux de change pour une livraison immédiate selon la convention de marché.
- Un **taux à terme** est convenu aujourd’hui pour échanger des devises à une date future déterminée.
- La cotation d’un teneur de marché s’écrit **acheteur–vendeur** (bid–ask). Le cours acheteur est toujours inférieur au cours vendeur.
- Au cours acheteur, le teneur de marché achète la devise de base ; au cours vendeur, il la vend.
- Un client qui vend la devise de base **traite au cours acheteur**. Un client qui achète la devise de base **paie le cours vendeur**.

Pour une cotation $A/B=b-a$ :

| Action du client | Action du teneur de marché | Taux utilisé |
| --- | --- | --- |
| Vendre $B$, recevoir $A$ | Le teneur de marché achète la devise de base $B$ | Acheteur $b$ |
| Acheter $B$, payer $A$ | Le teneur de marché vend la devise de base $B$ | Vendeur $a$ |

L’écart acheteur–vendeur rémunère le teneur de marché pour ses coûts d’exploitation, son risque de stock, l’antisélection et le risque de marché. Les écarts de change s’expriment couramment en **pips**. Pour la plupart des paires, un pip vaut 0,0001 ; pour de nombreuses paires en yen, 0,01. La convention applicable dépend de la manière dont la paire est cotée.

Les écarts proposés aux clients sont en général plus larges que les écarts interbancaires et dépendent de la liquidité, de la taille de l’opération, de la relation client, de l’heure et de la volatilité du marché. Une opération plus importante n’implique pas mécaniquement un écart plus large en pourcentage : la profondeur du marché et la capacité du teneur de marché à se couvrir comptent aussi.

### Inverser une cotation

Lorsqu’on inverse une cotation, les cours acheteur et vendeur changent de côté :

$$
(B/A)_{bid}=\frac{1}{(A/B)_{ask}},
\qquad
(B/A)_{ask}=\frac{1}{(A/B)_{bid}}.
$$

On préserve ainsi la règle selon laquelle le cours acheteur reste inférieur au cours vendeur.

### Taux croisés

Disposer les rapports de devises de sorte que la devise indésirable s’annule. Par exemple,

$$
\frac{KRW}{CNY}
=
\frac{KRW}{USD}\times\frac{USD}{CNY}.
$$

Si aucune cotation ne doit être inversée, multiplier acheteur par acheteur et vendeur par vendeur :

$$
(A/B)_{bid}=(A/C)_{bid}(C/B)_{bid},
$$

$$
(A/B)_{ask}=(A/C)_{ask}(C/B)_{ask}.
$$

Si une cotation doit être inversée, appliquer d’abord la règle d’inversion ci-dessus. La méthode la plus sûre à l’examen consiste à écrire explicitement les unités monétaires et à vérifier qu’elles s’annulent.

#### Exemple

$CHF/USD=1.5960\text{–}1.5970$ et $AUD/USD=1.7225\text{–}1.7235$. Calculer $AUD/CHF$.

<span class="blur-hover" tabindex="0">

Comme

$$
\frac{AUD}{CHF}
=
\frac{AUD}{USD}\times\frac{USD}{CHF},
$$

il faut inverser la cotation CHF/USD. Pour le cours acheteur croisé, on vend des CHF et on reçoit des AUD : on utilise donc le cours acheteur AUD/USD et le cours vendeur CHF/USD :

$$
(AUD/CHF)_{bid}
=\frac{1.7225}{1.5970}
=1.0786.
$$

Pour le cours vendeur, on utilise le cours vendeur AUD/USD et le cours acheteur CHF/USD :

$$
(AUD/CHF)_{ask}
=\frac{1.7235}{1.5960}
=1.0799.
$$

Donc,

$$
AUD/CHF=1.0786\text{–}1.0799.
$$

</span>

#### Exemple

Un teneur de marché cote $AUD/GBP=1.5060\text{–}1.5067$. Calculer le produit de la conversion d’un million de livres en dollars australiens, puis d’un million de dollars australiens en livres.

<span class="blur-hover" tabindex="0">

La livre est la devise de base. Un client qui convertit des GBP en AUD vend des GBP au teneur de marché et reçoit le cours acheteur :

$$
GBP\ 1{,}000{,}000\times1.5060
=AUD\ 1{,}506{,}000.
$$

Un client qui convertit des AUD en GBP achète des GBP au teneur de marché et paie donc le cours vendeur :

$$
\frac{AUD\ 1{,}000{,}000}{1.5067}
=GBP\ 663{,}702.13.
$$

</span>

### Arbitrage triangulaire

Un arbitrage triangulaire est possible lorsque la cotation croisée directe d’un teneur de marché est incompatible avec le taux croisé de non-arbitrage implicite dans deux autres paires de devises. L’opération doit être vérifiée avec des cours acheteur et vendeur exécutables, pas avec des cours moyens.

Pour une même paire de devises :

- si le cours vendeur d’un teneur de marché est inférieur au cours acheteur d’un autre marché, acheter la devise de base au teneur de marché et la revendre sur l’autre marché ;
- si le cours acheteur d’un teneur de marché est supérieur au cours vendeur d’un autre marché, acheter la devise de base sur l’autre marché et la revendre au teneur de marché.

#### Exemple

Les taux au comptant sont $JPY/USD=105.39\text{–}105.41$ et $CAD/USD=1.3199\text{–}1.3200$. Un teneur de marché cote $JPY/CAD=79.81\text{–}79.83$. Existe-t-il un arbitrage triangulaire ?

<span class="blur-hover" tabindex="0">

Le taux croisé implicite est

$$
\frac{JPY}{CAD}
=
\frac{JPY/USD}{CAD/USD}.
$$

Donc,

$$
(JPY/CAD)_{bid}=\frac{105.39}{1.3200}=79.8409,
$$

$$
(JPY/CAD)_{ask}=\frac{105.41}{1.3199}=79.8621.
$$

Le teneur de marché vend le dollar canadien à 79,83 yens, tandis que le marché interbancaire l’achète à 79,8409 yens. Comme

$$
79.83<79.8409,
$$

un arbitrage existe : acheter des CAD au teneur de marché à 79,83 yens par CAD et les revendre immédiatement au cours acheteur interbancaire de 79,8409 yens par CAD. Le gain brut est de 0,0109 yen par CAD avant coûts de transaction et contraintes de taille de position.

</span>

### Taux de change à terme

Les points de terme s’ajoutent aux cours acheteur et vendeur au comptant correspondants, ou s’en retranchent. L’écart doit rester valide après l’ajustement.

Pour une cotation $A/B$ :

- si $F_{A/B}>S_{A/B}$, la devise de base $B$ cote avec un report (prime à terme) et la devise de cotation $A$ avec un déport (décote à terme) ;
- si $F_{A/B}<S_{A/B}$, la devise de base cote avec un déport et la devise de cotation avec un report.

La prime à terme en pourcentage sur la devise de base, pour un contrat de $n$ jours, vaut approximativement

$$
\left(\frac{F_{A/B}}{S_{A/B}}-1\right)\frac{360}{n}.
$$

### Valeur de marché d’un contrat à terme

La valeur de marché est la valeur actuelle du flux net créé en dénouant le contrat à terme initial au taux à terme actuel pour l’échéance restante. C’est une **valeur**, pas seulement un rendement.

Étapes :

1. Identifier les flux en devises du contrat initial à l’échéance.
2. Conclure un contrat à terme de même montant et de sens opposé pour l’échéance restante.
3. Utiliser le bon cours acheteur ou vendeur à terme actuel pour cette opération de dénouement.
4. Faire la somme nette des deux flux de règlement.
5. Actualiser le montant net au taux d’intérêt de la devise dans laquelle ce flux est libellé.

#### Exemple

**Ted Black a initialement acheté 1 million USD à terme à AUD/USD 1,05358.** Le contrat avait à l’origine une échéance de 90 jours. Après 30 jours, on dispose des informations suivantes :

| Échéance | Taux AUD/USD | Taux d’intérêt en $t=30$ |
| --- | --- | --- |
| Comptant | 1.0612 / 1.0614 | Taux AUD à 60 jours : 1,16 % |
| 60 jours | +8,6 / +9,0 points | — |

Quelle est la valeur de marché du contrat à terme de Black en AUD ?

<span class="blur-hover" tabindex="0">

Selon le contrat initial, Black recevra des USD et paiera des AUD. Pour le dénouer, il doit vendre des USD à terme et recevoir des AUD : il utilise donc le cours **acheteur** à terme actuel à 60 jours :

$$
1.0612+0.00086=1.06206.
$$

Les flux de règlement sont :

- contrat initial : recevoir 1 million USD et payer 1,05358 million AUD ;
- contrat de dénouement : payer 1 million USD et recevoir 1,06206 million AUD ;
- encaissement net au règlement : AUD $1{,}062{,}060-1{,}053{,}580=8{,}480$.

Actualiser ce flux en AUD sur les 60 jours restants :

$$
V_{t=30}
=\frac{8{,}480}{1+0.0116(60/360)}
=AUD\ 8{,}463.64.
$$

La valeur est positive parce que le marché à terme actuel permet à Black de vendre les USD qu’il recevra contre plus d’AUD qu’il ne s’était engagé à payer.

</span>

## Facteurs qui influencent les taux de change

Les taux de change réagissent aux conditions économiques relatives, et non à celles d’un pays pris isolément. Les effets ci-dessous supposent les autres facteurs pertinents constants et peuvent varier selon l’horizon.

## Conditions de parité internationale

<iframe
  class="fx-concept-chart"
  src="/charts/currency-exchange-concepts.html?view=parity"
  title="Liens entre les conditions de parité internationale"
  loading="lazy"
></iframe>

<iframe
  class="fx-concept-chart parity-chart"
  src="/charts/international-parity-conditions.html"
  title="Carte des relations entre les conditions de parité internationale"
  loading="lazy"
></iframe>

| Condition | Relie | Implication centrale |
| --- | --- | --- |
| Parité couverte des taux d’intérêt (CIRP) | Comptant, terme et taux d’intérêt | Pas d’arbitrage pour un placement entièrement couvert |
| Parité non couverte des taux d’intérêt (UIRP) | Variation attendue du comptant et taux d’intérêt | La variation attendue de la devise compense l’écart de rendement |
| Parité des taux à terme | Terme et comptant futur attendu | Découle de la CIRP et de l’UIRP réunies |
| Parité des pouvoirs d’achat (PPA) | Taux de change et niveaux de prix/inflation | La valeur des devises s’ajuste au pouvoir d’achat relatif |
| Effet Fisher | Taux nominaux, taux réels et inflation anticipée | Les taux nominaux rémunèrent le rendement réel et l’inflation |
| Parité des taux d’intérêt réels | Taux réels entre pays | Découle conjointement de l’UIRP, de la PPA ex ante et des relations de Fisher |

### Parité couverte des taux d’intérêt

Soit $S_{f/d}$ et $F_{f/d}$ les unités de devise étrangère par unité de monnaie nationale. Un placement monétaire national et un placement étranger entièrement couvert doivent rapporter le même montant en monnaie nationale :

$$
1+i_d
=
\frac{S_{f/d}(1+i_f)}{F_{f/d}}.
$$

Donc,

$$
F_{f/d}
=S_{f/d}\frac{1+i_f}{1+i_d}.
$$

Pour des échéances inférieures à un an, utiliser des taux ramenés à l’horizon pertinent. Si $i_f>i_d$, alors $F_{f/d}>S_{f/d}$ : une unité de monnaie nationale achète davantage de devise étrangère à terme, donc la monnaie nationale cote avec un report.

### Parité non couverte des taux d’intérêt

L’UIRP affirme que l’avantage de rendement attendu d’une devise à taux élevé est compensé par sa dépréciation attendue. Avec la convention actuelle, la relation approchée est

$$
E(\%\Delta S_{f/d})
\approx i_f-i_d.
$$

Ainsi, lorsque le taux étranger dépasse le taux national, on s’attend à une hausse de $S_{f/d}$ : la monnaie nationale (devise de base) devrait s’apprécier et la devise étrangère à rendement élevé (devise de cotation) se déprécier.

Pour un horizon de $n$ jours avec des taux monétaires annualisés,

$$
E(\%\Delta S_{f/d})
\approx \frac{n}{360}(i_f-i_d).
$$

L’UIRP est une anticipation d’équilibre, pas une condition d’arbitrage sans risque. Elle est souvent mise en défaut sur des horizons courts.

### Carry trade

Un carry trade emprunte dans une devise à faible rendement et place dans une devise à rendement élevé sans couvrir entièrement le risque de change. L’avantage de taux apparent peut disparaître, voire s’inverser, si la devise de placement se déprécie. C’est donc une opération risquée, pas un arbitrage.

#### Exemple

Le taux USD/GBP vaut **1,50 aujourd’hui** et **1,49 un an plus tard**. Le taux à un an est de **3 % au Royaume-Uni** et de **1 % aux États-Unis**. Calculer le gain d’un emprunt aux États-Unis placé au Royaume-Uni.

<span class="blur-hover" tabindex="0">

Emprunter 1,50 USD et les convertir en 1,00 GBP. Placer à 3 % pour recevoir 1,03 GBP. Au taux USD/GBP final, reconvertir en

$$
GBP\ 1.03\times1.49=USD\ 1.5347.
$$

Rembourser

$$
USD\ 1.50\times1.01=USD\ 1.5150.
$$

Le gain est de 0,0197 USD, et le rendement sur les 1,50 USD empruntés au départ est de

$$
\frac{0.0197}{1.50}=1.31\%.
$$

De façon équivalente, le placement britannique non couvert rapporte

$$
(1.03)\left(\frac{1.49}{1.50}\right)-1=2.313\%
$$

en USD, soit environ 1,31 % de plus que le coût de financement de 1 % en USD.

</span>

### Parité des taux à terme

Si la CIRP et l’UIRP tiennent toutes deux pour le même horizon et la même convention de cotation, alors

$$
F_{f/d}=E(S_{f/d,T}).
$$

Le taux à terme est alors un prédicteur sans biais du taux au comptant futur **sous ces hypothèses**. C’est une affirmation sur l’espérance ; une réalisation donnée du taux au comptant futur différera presque certainement du taux à terme.

### Parité des pouvoirs d’achat

La **PPA absolue** applique la loi du prix unique à un panier représentatif. Avec $S_{f/d}$ coté en devise étrangère par unité de monnaie nationale,

$$
S_{f/d}=\frac{P_f}{P_d}.
$$

La PPA absolue a peu de chances de tenir exactement, à cause des coûts de transport, des droits de douane, des biens non échangeables, de la segmentation des marchés et des différences de paniers de consommation.

La **PPA relative** prévoit les variations de change à partir des écarts d’inflation :

$$
\frac{S_{1,f/d}}{S_{0,f/d}}-1
=
\frac{1+\pi_f}{1+\pi_d}-1
=
\frac{\pi_f-\pi_d}{1+\pi_d}
\approx \pi_f-\pi_d.
$$

Si l’inflation nationale est inférieure à l’inflation étrangère, $S_{f/d}$ augmente et la monnaie nationale (devise de base) s’apprécie. La **PPA ex ante** remplace l’inflation réalisée par l’inflation anticipée.

### Relations de Fisher et parité des taux d’intérêt réels

La relation de Fisher exacte est

$$
1+i=(1+r)(1+E\pi),
$$

soit, approximativement,

$$
i\approx r+E\pi.
$$

Entre pays,

$$
i_f-i_d
\approx(r_f-r_d)+(E\pi_f-E\pi_d).
$$

Si l’UIRP et la PPA ex ante tiennent toutes deux, leurs anticipations de change sont égales, ce qui implique

$$
r_f\approx r_d.
$$

> [!IMPORTANT]
> L’UIRP et la PPA ex ante ne sont pas automatiquement équivalentes. C’est leur validité conjointe, avec les relations de Fisher, qui implique la parité des taux d’intérêt réels.

## Canaux de la balance des paiements

La balance des paiements enregistre les opérations entre résidents et non-résidents :

- le **compte courant** comprend les échanges de biens et services, les revenus primaires et les transferts ;
- le **compte de capital** est en général modeste et comprend les transferts en capital et certains actifs non produits ;
- le **compte financier** enregistre les investissements directs, les investissements de portefeuille, les autres investissements et les avoirs de réserve.

Un déficit courant doit être financé par des entrées financières nettes ou par des variations de réserves. Il ne provoque pas mécaniquement une dépréciation immédiate : l’effet sur le change dépend de l’origine du déficit, de la façon dont les investisseurs perçoivent les créances correspondantes et de la soutenabilité du financement.

Deux canaux de plus long terme :

- **Canal de l’équilibre de portefeuille :** des déséquilibres courants persistants modifient la répartition de la richesse mondiale et les portefeuilles désirés, ce qui peut influencer les taux de change.
- **Canal de la soutenabilité de la dette :** des engagements extérieurs croissants peuvent finir par exiger des primes de risque plus élevées, un ajustement des dépenses ou une dépréciation si les investisseurs doutent de la capacité de remboursement.

## Politique monétaire et budgétaire

<iframe
  class="fx-concept-chart models-chart"
  src="/charts/monetary-fiscal-policy-models.html"
  loading="lazy"
  title="Comparaison des modèles de politique monétaire et budgétaire"
></iframe>


### Cadre de Mundell–Fleming

Le cadre de Mundell–Fleming étend l’analyse macroéconomique de court terme à une économie ouverte. Ses conclusions dépendent de manière cruciale de la mobilité des capitaux et du caractère flottant ou fixe du taux de change.

<iframe
  class="fx-concept-chart"
  src="/charts/currency-exchange-concepts.html?view=policy"
  title="Transmission de court terme des politiques monétaire et budgétaire au taux de change"
  loading="lazy"
></iframe>

Avec un **change flottant et une forte mobilité des capitaux** :

- une politique monétaire expansionniste abaisse les taux nationaux, crée des pressions à la sortie de capitaux et déprécie la monnaie ; la dépréciation soutient les exportations nettes, ce qui rend la politique monétaire relativement puissante ;
- une politique budgétaire expansionniste augmente la production et les taux, attire des capitaux et apprécie la monnaie ; l’appréciation évince une partie des exportations nettes, ce qui affaiblit l’effet sur la production.

Lorsque les deux politiques bougent ensemble, l’effet sur la monnaie dépend de ce que les pressions sur les taux se renforcent ou se compensent :

|  | Politique monétaire expansionniste | Politique monétaire restrictive |
| --- | --- | --- |
| **Politique budgétaire expansionniste** | Indéterminé | La monnaie nationale s’apprécie |
| **Politique budgétaire restrictive** | La monnaie nationale se déprécie | Indéterminé |

Avec un **change flottant et une faible mobilité des capitaux**, les flux commerciaux l’emportent sur les flux de capitaux sensibles aux taux. Une politique expansionniste qui augmente la production tend à accroître les importations et à faire pression à la baisse sur la monnaie :

|  | Politique monétaire expansionniste | Politique monétaire restrictive |
| --- | --- | --- |
| **Politique budgétaire expansionniste** | La monnaie nationale se déprécie | Indéterminé |
| **Politique budgétaire restrictive** | Indéterminé | La monnaie nationale s’apprécie |

Avec un **change fixe crédible et une forte mobilité des capitaux** :

- une expansion monétaire autonome est inefficace, car la banque centrale doit l’annuler pour défendre l’ancrage ;
- l’expansion budgétaire est plus puissante, car la banque centrale accompagne la pression qui en résulte sur l’ancrage.

Avec une **mobilité des capitaux restreinte**, les flux commerciaux comptent davantage que les flux de capitaux sensibles aux taux. Une politique expansionniste peut accroître les importations et créer une pression à la dépréciation, mais le résultat dépend toujours du régime de change, de la réaction de la production et des taux, et de la crédibilité de la politique.

### Approche monétaire

L’approche monétaire part de

$$
MV=PY,
$$

où $M$ est la masse monétaire, $V$ la vitesse de circulation, $P$ le niveau des prix et $Y$ la production réelle.

L’étape intermédiaire se réécrit
$$
\frac{M}{P} = \frac{Y}{V}
$$


Si la vitesse (V) et la production réelle (Y) sont stables à **long terme**, une croissance monétaire nationale plus rapide élève le niveau des prix national. La PPA relative implique alors, toutes choses égales par ailleurs, une dépréciation de long terme de la monnaie nationale.

> [!note]
>
> Le membre de gauche $\frac{M}{P}$ peut être appelé **masse monétaire réelle**

Lorsque les prix des biens s’ajustent lentement mais que les marchés financiers s’ajustent vite, une expansion monétaire inattendue (la **masse monétaire réelle** augmente, l’argent devient moins cher) fait déprécier la monnaie au-delà de son niveau de PPA de long terme. La monnaie s’apprécie ensuite vers ce niveau à mesure que les prix nationaux montent progressivement. C’est la **surréaction du taux de change (overshooting)**.

<iframe
  class="fx-concept-chart overshoot-chart"
  src="/charts/exchange-rate-overshooting.html"
  loading="lazy"
  title="Surréaction du taux de change après une expansion monétaire"
></iframe>

### Approche par l’équilibre de portefeuille

<iframe
  class="fx-concept-chart portfolio-chart"
  src="/charts/portfolio-balance-approach.html"
  loading="lazy"
  title="Approche par l’équilibre de portefeuille : trajectoires d’une expansion budgétaire"
></iframe>

Les obligations nationales et étrangères ne sont pas forcément des substituts parfaits. Les investisseurs exigent des rendements attendus qui compensent la quantité et le risque de chaque actif qu’ils doivent détenir. Un déficit budgétaire qui accroît l’offre de dette publique peut donc relever la prime de risque exigée.

L’effet d’une expansion budgétaire sur le change n’est pas inconditionnellement une dépréciation :

- des taux plus élevés peuvent d’abord attirer des capitaux et soutenir la monnaie ;
- des inquiétudes sur la soutenabilité de la dette, sa monétisation, l’inflation ou le risque de défaut peuvent affaiblir la monnaie ;
- le résultat net dépend des préférences des investisseurs, de la crédibilité de la politique et du degré de substituabilité des actifs.

## Liste de contrôle pour l’examen

- Lire chaque cotation comme des unités de devise de cotation pour une unité de devise de base.
- Au cours acheteur du teneur de marché, on vend la devise de base ; au cours vendeur, on l’achète.
- Pour inverser une cotation, inverser le cours vendeur pour obtenir le nouvel acheteur, et l’acheteur pour le nouveau vendeur.
- Construire les taux croisés en annulant les unités monétaires et en utilisant les côtés exécutables de la cotation.
- Tester l’arbitrage triangulaire acheteur contre vendeur, jamais cours moyen contre cours moyen.
- Évaluer un contrat à terme en dénouant l’exposition restante et en actualisant le flux de règlement net dans sa devise.
- Garder la convention $S_{f/d}$ cohérente pour la CIRP, l’UIRP et la PPA.
- Distinguer l’arbitrage sans risque de la CIRP des anticipations risquées de l’UIRP et du carry trade.
- Ne pas déduire la parité des taux réels sans les hypothèses de parité conjointes nécessaires.
- Distinguer le compte financier du compte de capital, beaucoup plus modeste.
- Préciser le régime de change et l’hypothèse de mobilité des capitaux avant d’appliquer les conclusions de Mundell–Fleming.
