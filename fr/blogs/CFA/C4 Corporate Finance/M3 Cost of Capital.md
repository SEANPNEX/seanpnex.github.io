---
title: Coût du capital
---

# Coût du capital

Ce qui détermine le coût du capital d’une entreprise ; comment estimer le coût de la dette négociée, non négociée, bancaire et locative ; comment estimer la prime de risque actions ; et comment estimer le rendement exigé des capitaux propres pour les entreprises cotées, non cotées et internationales. Deux mini-cas rassemblent le tout. (Titre 2026 : *Cost of Capital: Advanced Topics*.)

| Terme | Signification |
| --- | --- |
| **Coût de la dette** | Coût après impôt pour l’émetteur, fondé sur le rendement exigé par les créanciers |
| **Coût des capitaux propres** ($r_e$) | Le rendement exigé par les actionnaires ; **non observable**, il doit donc être estimé |
| **ERP** | Rendement attendu des actions moins un taux de référence sans risque |
| **Notation synthétique** | Une note déduite des fondamentaux (couverture des intérêts, D/E) lorsque la dette n’est pas notée |
| **Évaluation matricielle** | Estimer un rendement à partir d’obligations négociées de notation, d’échéance et de coupon semblables |
| **RIIL** | Taux implicite du contrat de location |
| **IBR** | Taux d’emprunt marginal : le taux d’un prêt garanti sur la même durée |
| **SP / IP / SCRP** | Prime de taille / prime de risque sectorielle / prime de risque spécifique à l’entreprise |
| **CRP** | Prime de risque pays |

## Coût moyen pondéré du capital (WACC)

$$
WACC=w_dr_d(1-t)+w_pr_p+w_er_e
$$

où $t$ est le taux d’imposition **marginal** et les pondérations (positives, de somme 1) correspondent à la structure du capital **cible**.

$$
\begin{aligned}
r_d&=r_f+\text{Credit spread}\quad\text{(pretax)}\\
r_e&=r_f+\beta\times ERP\quad\text{(CAPM)}
\end{aligned}
$$

* Le MEDAF (CAPM) est le modèle le plus utilisé en pratique : $\beta$ est la sensibilité de l’action au marché ; l’ERP est ce que les investisseurs exigent pour détenir des actions plutôt que l’actif sans risque.
* Les actions de préférence ont un dividende fixé et une priorité sur les actions ordinaires, donc en général $r_d < r_p < r_e$.

Le WACC est difficile à estimer, car chaque composante peut l’être de nombreuses façons, sans méthode unique ; la structure du capital **cible à long terme** peut différer de l’actuelle ; et le taux d’imposition **marginal** peut différer du taux moyen ou effectif.

#### Exemple : WACC avec actions de préférence et plafonnement de la déduction des intérêts

| Composante | Pondération cible | Coût avant impôt |
| --- | ---: | ---: |
| Dette | 30 % | 6 % |
| Actions de préférence | 10 % | 7 % |
| Actions ordinaires | 60 % | 11 % |

Le taux d’imposition marginal est de 25 %.

**Cas 1. Les intérêts sont déductibles.**

$$
\begin{aligned}
WACC&=0.30\times 6\%\times 0.75\\
&\quad+0.10\times 7\%+0.60\times 11\%\\
&=1.35\%+0.70\%+6.60\%\\
&=8.65\%
\end{aligned}
$$

**Cas 2. L’entreprise est déjà au plafond de déduction des intérêts,** de sorte que la dette nouvelle n’obtient aucun avantage fiscal :

$$
\begin{aligned}
WACC&=0.30\times 6\%+0.70\%\\
&\quad+6.60\%=9.10\%
\end{aligned}
$$

## Ce qui détermine le coût du capital

| **Descendant (externe)** | **Ascendant (propre à l’entreprise)** |
| --- | --- |
| Disponibilité des capitaux | Volatilité du chiffre d’affaires, des bénéfices et des flux de trésorerie |
| Conditions de marché | Nature et liquidité des actifs |
| Environnement juridique et réglementaire, risque pays | Solidité financière, rentabilité et levier |
| Juridiction fiscale | Caractéristiques des titres |

Les facteurs descendants sont systématiques et apparaissent dans le **taux sans risque et l’ERP** ; les facteurs ascendants sont propres à l’entreprise et apparaissent dans le **spread de crédit et le bêta**.

### Facteurs descendants

* **Disponibilité des capitaux** : plus de capitaux disponibles → coût **plus faible**. Les marchés développés ont des marchés de capitaux plus profonds, des monnaies stables, une protection de la propriété et un État de droit. Là où les marchés de dette d’entreprise sont étroits, les entreprises dépendent des prêts bancaires ou du **shadow banking** (prêteurs non régulés comme des banques).
* **Conditions de marché** : inflation plus forte ($r_f$ plus élevé) → **plus élevé** ; récession (spreads et ERP plus larges) → **plus élevé** ; expansion (spreads plus serrés) → **plus faible**, et les entreprises empruntent davantage. Des taux bas, des spreads serrés, une faible volatilité des taux et des changes, et une politique monétaire prévisible et transparente l’abaissent tous.
* **Juridique et réglementaire** : une meilleure protection des investisseurs (souvent la **common law**) et une réglementation mature → **plus faible** ; des systèmes faibles (souvent de droit civil) → plus élevé. Dans les secteurs réglementés (services publics, finance), les régulateurs façonnent la structure du capital, la distribution et les prix.
* **Fiscalité** : un taux marginal plus élevé → coût de la dette après impôt **plus faible** (un bouclier fiscal plus grand), **mais seulement si** les intérêts sont déductibles et que l’entreprise a un revenu imposable.

### Facteurs ascendants

| Facteur | Coût du capital |
| --- | --- |
| Ventes plus stables (p. ex. revenus récurrents ou d’abonnement) | Plus faible |
| Concentration accrue du chiffre d’affaires | Plus élevé |
| Bénéfices plus prévisibles | Plus faible |
| Levier opérationnel et financier plus élevé | Plus élevé |
| Risque ESG plus élevé | Plus élevé |
| Actifs plus fongibles et tangibles | Plus faible |
| Actifs plus liquides | Plus faible |
| Rentabilité, flux de trésorerie, couverture des intérêts, liquidité plus élevés | Plus faible |
| Levier plus élevé (dette/EBITDA, D/E) | Plus élevé |

* Les **risques ESG** (empreinte carbone non maîtrisée, sécurité des salariés, gouvernance faible, dispositifs anti-OPA) augmentent le coût du capital. L’analyste peut aussi ajuster les **prévisions de flux de trésorerie** plutôt que le taux d’actualisation.
* **Sûretés** : des actifs tangibles peuvent être donnés en garantie, ce qui abaisse le coût de la **dette** mais peut augmenter celui des **capitaux propres** (les créanciers ont une priorité).

**Caractéristiques des titres :**

| Titre | Caractéristique | Coût du capital |
| --- | --- | --- |
| Dette | Remboursable par anticipation (call) | Plus élevé |
| | Avec option de vente (put) | Plus faible |
| | Convertible | Plus faible |
| Actions de préférence | Cumulatives | Plus faible |
| Actions ordinaires | Droits aux flux ou de vote inférieurs | Plus élevé |

* Un **call** profite à l’émetteur ; les investisseurs exigent donc un rendement plus élevé à l’émission (le coût peut baisser plus tard si les taux baissent et que l’obligation est refinancée).
* Une **option de vente** ou de **conversion** profite à l’investisseur ; le rendement à l’émission est donc plus faible, mais le coût peut augmenter plus tard (refinancement à des taux plus élevés après un put ; dilution après conversion).
* Actions de préférence **cumulatives** : les dividendes non versés doivent être payés avant tout dividende ordinaire ; les investisseurs acceptent donc un rendement plus faible que pour des actions non cumulatives.

#### Pièges d’examen

* Un taux d’imposition plus élevé **abaisse** le WACC seulement via le bouclier fiscal de la dette ; sans déductibilité ou sans revenu imposable, aucun effet.
* Une clause de remboursement anticipé → coût **plus élevé** à l’émission ; option de vente et conversion → **plus faible**.
* Les sûretés abaissent le coût de la dette mais peuvent augmenter celui des capitaux propres.

## Coût de la dette

La méthode dépend du type de dette (négociée, non négociée, bancaire, locative), de sa liquidité, de sa notation éventuelle et de sa devise.

* **Dette négociée** : le rendement actuariel (YTM) de la dette **classique** (sans option) de l’entreprise, en général l’échéance la plus longue ; si les obligations plus courtes sont plus liquides, leur YTM peut être plus fiable. Le YTM est le coût actuel d’émission d’une dette nouvelle semblable.
* **Dette non négociée** (la plupart des entreprises non cotées, certaines cotées) : il n’y a pas de YTM coté, ou il comprend une forte **prime de liquidité**.
  * **Notée** : utiliser l’**évaluation matricielle**, à partir des obligations d’autres entreprises d’échéance et de notation semblables.
  * **Non notée** : estimer une **notation synthétique** à partir des fondamentaux (couverture des intérêts, levier), puis utiliser le YTM des obligations de cette notation et de cette échéance, ou $r_f$ plus le spread de cette notation.
  * La notation de l’émetteur peut différer de celle des émissions individuelles (sûretés, rang, convertibilité).

**Grille de notation synthétique (Brunswix Firm) :**

| Notation | Couverture des intérêts (IC) | D/E |
| --- | --- | --- |
| AAA | IC > 10 | D/E < 35% |
| AA | 8 < IC < 10 | 35% < D/E < 40% |
| A | 5 < IC < 8 | 40% < D/E < 42% |
| BBB | 3 < IC < 5 | 42% < D/E < 44% |
| BB | 2 < IC < 3 | 44% < D/E < 50% |
| B | 1.4 < IC < 2 | 50% < D/E < 60% |
| CCC | 1.0 < IC < 1.4 | 60% < D/E < 70% |
| CC | 0.6 < IC < 1.0 | 70% < D/E < 80% |
| C | 0.3 < IC < 0.6 | 80% < D/E < 100% |
| D | IC < 0.3 | D/E > 100% |

$$IC=\frac{EBIT}{\text{Interest}}\qquad D/E=\frac{\text{Debt}}{\text{Equity}}$$

Si les deux ratios impliquent des notations différentes (p. ex. IC 1,5 → B mais D/E 43 % → BBB), exercez votre jugement et regardez leur **tendance**.

* **Prêts bancaires** : utiliser le taux de l’emprunt le plus récent, si les conditions de marché et le risque de l’entreprise n’ont pas sensiblement changé depuis. Les prêts peuvent être à taux fixe ou variable, et amortissables totalement, partiellement ou in fine. Les prêts **amortissables** coûtent en général moins que les prêts in fine, car le capital est remboursé au fil de la durée (risque de défaut plus faible).
* **Contrats de location** : un **contrat de location-financement** ressemble à un prêt garanti amortissable ; il coûte donc en général moins qu’un emprunt non garanti (les locations simples sont passées en charges). Selon IFRS 16 / ASC 842, le **taux implicite du contrat de location** (RIIL) résout :

$$
\begin{aligned}
&\text{PV of lease payments}\\
&+\text{PV of residual value to lessor}\\
&=\text{Fair value of the asset}\\
&+\text{Lessor's direct initial costs}
\end{aligned}
$$

  * Si la valeur résiduelle et les coûts du bailleur sont inconnus, utiliser le **taux d’emprunt marginal** (IBR) ; si l’IBR est aussi inconnu, utiliser les méthodes de la dette non négociée. La plupart des preneurs cotés publient leurs taux de location.
  * Lorsqu’un contrat de location-financement vaut achat sur le plan fiscal, les intérêts sont déductibles → utiliser le taux après impôt.

#### Exemple : contrat de location de G&S Airlines

| Donnée | Valeur |
| --- | --- |
| Durée | 15 ans |
| Loyer | €9.0m par an |
| Juste valeur de l’avion | €100m |
| Coûts initiaux directs du bailleur | €5m |
| Valeur résiduelle pour le bailleur | €10m |

**Étape 1. Poser l’équation du RIIL.**

$$
\begin{aligned}
&\sum_{t=1}^{15}\frac{9}{(1+RIIL)^t}+\frac{10}{(1+RIIL)^{15}}\\
&=100+5
\end{aligned}
$$

**Étape 2. Résoudre.** N = 15, PV = −105, PMT = 9, FV = 10 → **RIIL = 4,08 %**.

**Étape 3. Comparer.** La location est moins chère que l’emprunt non garanti (IBR 6 %) et les capitaux propres (11 %, et dilutifs), et évite les risques de propriété, mais elle **augmente le levier**.

* **International** : le coût de la dette doit être exprimé dans la **devise des flux de trésorerie**. Pour les marchés moins matures, ajouter une prime de risque pays fondée sur une **notation du risque pays (CRR)** qui reflète la situation économique, le risque politique, le risque de change, ainsi que le développement et la réglementation des marchés de titres. Le risque souverain (défaut sur la dette publique) n’est qu’**une partie** du risque pays, qui couvre aussi la stabilité politique, la compétitivité économique et le développement humain.

$$
\begin{aligned}
CRP={}&\text{Median rate of the class}\\
&-\text{Benchmark's rate}
\end{aligned}
$$

#### Exemple : primes de risque pays

| Pays | CRR | Taux médian | CRP |
| --- | ---: | ---: | ---: |
| A (référence) | 1 | 4,0 % | 0 % |
| C | 2 | 4,5 % | $4.5-4.0=$ **0,5 %** |
| D | 8 | 15,5 % | $15.5-4.0=$ **11,5 %** |

* **Plafonds de déduction des intérêts** : si l’entreprise a déjà atteint le plafond, **ne pas** ajuster le coût de la dette nouvelle pour l’impôt (il n’y a plus d’avantage fiscal).

#### Pièges d’examen

* Utiliser le coût **marginal** de la dette **nouvelle**, pas le coupon de l’ancienne dette.
* Pour des obligations peu négociées, les rendements tirés de l’évaluation matricielle d’obligations liquides sous-estiment le vrai coût : ajouter un peu pour l’illiquidité.
* Le RIIL demande les loyers, la valeur résiduelle, la juste valeur de l’actif, les coûts directs du bailleur et la durée du contrat.

## Prime de risque actions (ERP)

Il existe deux grandes approches, **historique** (ex post) et **prospective** (ex ante). Les deux sont utilisées, et toutes deux comportent une erreur d’estimation.

### Approche historique

L’ERP est la différence moyenne entre les rendements d’un large indice actions et ceux de la dette publique sur une période d’échantillon :

$$
ERP = \overline{r_m-r_f}
$$

Elle suppose que les rendements sont **stationnaires**, que les marchés sont raisonnablement **efficients** et que le rendement moyen est une estimation sans biais du rendement attendu à long terme. Quatre choix déterminent le résultat :

**1. Indice actions** : en général un indice large, pondéré par la capitalisation (S&P 500, Russell 3000, MSCI EAFE, All Ordinaries, Shanghai Composite).

**2. Période** :

| Période | Avantages | Inconvénients |
| --- | --- | --- |
| Plus longue (en général **préférée**) | La volatilité changeante pèse moins ; erreur type plus faible | Peut ne pas représenter le marché **actuel** |
| Plus courte | Représente l’environnement actuel | Plus de bruit (peut ne couvrir qu’une partie d’un cycle, ou une perturbation) |

Une série de forts rendements récents gonfle la moyenne historique ; elle peut donc **surestimer** l’ERP prospective.

**3. Moyenne** :

| Moyenne | Avantages | Inconvénients |
| --- | --- | --- |
| **Arithmétique** | Simple ; utilise toutes les observations ; cohérente avec les modèles à une période (MEDAF, multifactoriels) | Sensible aux valeurs extrêmes ; surestime la richesse terminale attendue |
| **Géométrique** (en général **préférée**) | Utilise toutes les observations ; donne moins de poids aux valeurs aberrantes ; estime la richesse terminale attendue | |

La moyenne arithmétique est toujours au moins égale à la moyenne géométrique ; une ERP arithmétique est donc **plus élevée**.

**4. Indicateur du taux sans risque** :

| Indicateur | Avantages | Inconvénients |
| --- | --- | --- |
| YTM des obligations d’État à long terme (pratique du secteur) | Plus proche de la duration infinie des actions | Pas totalement sans risque (réinvestissement des coupons inconnu) |
| Taux des bons du Trésor | Exactement sans risque (zéro-coupon, rendement connu d’avance) | Duration bien plus courte que celle des actions |

Avec une courbe des taux normalement croissante, une ERP fondée sur les bons est **plus élevée** qu’une ERP fondée sur les obligations.

**Limites.** L’ERP peut varier dans le temps (un changement permanent rend les longues séries peu représentatives), et le **biais du survivant** gonfle les estimations historiques (les entreprises défaillantes sortent de l’indice, et les historiques d’indices reconstitués a posteriori font de même).

### Approche prospective

Les estimations prospectives n’utilisent que des anticipations sur les variables qui déterminent les flux futurs ; elles souffrent donc moins de la non-stationnarité et des biais de données.

**Enquêtes.** Demander aux gens (souvent des experts) ce qu’ils attendent. Les enquêtes montrent des ERP bien plus élevées dans les marchés en développement que dans les marchés développés, et les réponses tendent à suivre les rendements récents du marché.

**Modèle d’actualisation des dividendes.** D’après le modèle de croissance de Gordon, $r_e=D_1/V_0+g$. Si le P/E est constant, de sorte que bénéfices, dividendes et cours progressent au même rythme :

$$
ERP= E\left(\frac{D_1}{V_0}\right)+E(g)-r_f
$$

* Si le P/E devrait changer, il faut l’ajuster (les cours ne peuvent croître plus vite que les bénéfices que si le P/E augmente).
* Certains analystes ajoutent les **rachats** de l’indice au rendement (distribution totale), puis examinent comment les rachats modifient la croissance.
* Pour les économies à croissance rapide, utiliser **trois phases** (croissance rapide, transition, maturité) et trouver le taux qui égalise la valeur actuelle de toutes les phases au niveau de l’indice, puis soustraire $r_f$.

#### Exemple : FTSE 100

Le rendement du dividende est de 1,94 %, la croissance attendue de 5,0 % et le rendement des gilts de 1,63 %.

$$
\begin{aligned}
ERP&=1.94\%+5.0\%-1.63\%\\
&=5.31\%
\end{aligned}
$$

Fourchette de prévisions (utile pour la simulation) :

| | Rendement | Croissance | $r_f$ | ERP |
| --- | ---: | ---: | ---: | ---: |
| Basse | 1,5 % | 4 % | 2,5 % | **3 %** |
| Haute | 3,5 % | 6 % | 1,5 % | **8 %** |

**Modèle macroéconomique (Grinold–Kroner, 2001).**

$$
\begin{aligned}
ERP ={}& DY+\Delta\left(\tfrac{P}{E}\right)+i+g-\Delta S\\
&-E(r_f)
\end{aligned}
$$

| Terme | Signification | Indicateur courant |
| --- | --- | --- |
| $DY$ | Rendement du dividende | Rendement du dividende de l’indice |
| $\Delta(P/E)$ | Réévaluation attendue | Avis de l’analyste sur la surévaluation ou la sous-évaluation (souvent 0) |
| $i$ | Inflation attendue | Rendement nominal − rendement réel (indexé), échéance semblable |
| $g$ | Croissance réelle des bénéfices | Croissance du PIB réel |
| $\Delta S$ | Variation attendue en % du nombre d’actions | Dépend du marché et de la période ; en général 0 sauf indication |

* $DY+\Delta(P/E)$ est le rendement de revenu et de réévaluation ; $i+g-\Delta S$ la croissance nominale des bénéfices par action. Les **rachats** nets rendent $\Delta S$ négatif, ce qui **ajoute** au rendement ; la dilution le réduit.
* Inflation attendue, à partir de rendements nominaux et indexés (TIPS) d’échéance semblable :

$$
\begin{aligned}
i&=\frac{1+YTM_{\text{nominal}}}{1+YTM_{\text{TIPS}}}-1\\
&\approx YTM_{\text{nominal}}-YTM_{\text{TIPS}}
\end{aligned}
$$

* Plus fiable là où les actions cotées représentent une **grande part de l’économie** (marchés développés) ; inadapté là où le marché boursier est petit (beaucoup de pays en développement).

#### Exemple : scénarios Grinold–Kroner

**Étape 1. Inflation attendue.** Le Trésor à 10 ans rapporte 2,3 % et les TIPS 0,66 % :

$$i=\frac{1.023}{1.0066}-1=1.6\%$$

**Étape 2. ERP dans deux scénarios** (tout en %) :

| Donnée | Scénario 1 | Scénario 2 |
| --- | ---: | ---: |
| DY | 2.2 | 2.0 |
| $\Delta(P/E)$ | 0 | 1.0 |
| $i$ | 1.6 | 3.0 |
| $g$ | 3.0 | 2.0 |
| $\Delta S$ | −0.7 | 0 |
| $r_f$ | 2.5 | 3.0 |
| **ERP** | $2.2+0+(1.6+3.0+0.7)-2.5=$ **5.0** | $2.0+1.0+(3.0+2.0-0)-3.0=$ **5.0** |

* Une inflation attendue plus forte n’a **aucun effet** sur l’ERP ($i$ et $r_f$ augmentent ensemble).
* Un revenu attendu plus faible (DY) fait **baisser** l’ERP.

**Limites des estimations prospectives :**

* **Enquêtes** : biais d’échantillonnage et de réponse ; biais comportementaux (**récence**, **confirmation**).
* **DDM** : suppose un P/E constant ; doit être ajusté lorsque bénéfices, dividendes et cours progressent à des rythmes différents.
* **Modèles macroéconomiques** : erreurs dans les données macroéconomiques ; biais comportementaux dans les prévisions.

#### Pièges d’examen

* Grinold–Kroner : utiliser la prévision d’inflation **à long terme** et le rendement obligataire **à long terme** ; les rachats ($-\Delta S$) ajoutent du rendement, la dilution en retire.
* Les ERP fondées sur les bons et sur la moyenne arithmétique sont **plus élevées** que celles fondées sur les obligations et la moyenne géométrique.
* Le biais du survivant pousse les ERP historiques **à la hausse** ; une crise ponctuelle dans l’échantillon les pousse **à la baisse**.

## Coût des capitaux propres

| Situation | Modèles |
| --- | --- |
| Entreprise cotée | DDM, rendement obligataire plus prime de risque (BYPRP), MEDAF, Fama–French |
| Entreprise non cotée | MEDAF étendu, méthode par addition |
| International | Modèle du spread pays, MEDAF mondial, MEDAF international |

### Modèle d’actualisation des dividendes

Pour une entreprise cotée aux dividendes stables et prévisibles :

$$
\text{Gordon growth: }r_e=\frac{D_1}{P_0}+g
$$

Prévision pluriannuelle (résoudre pour le TRI $r_e$), et actions de préférence ($g$ = 0) :

$$
\begin{aligned}
P_0&=\sum_{t=1}^n \frac{D_t}{(1+r_e)^t}+\frac{P_n}{(1+r_e)^n}\\
r_p&=\frac{D}{P}
\end{aligned}
$$

#### Exemple : coût des capitaux propres par le DDM

| Cas | Données | $r_e$ |
| --- | --- | --- |
| Entreprise X (Gordon) | $P_0$ €40, $D_1$ €1.04, $g$ 4 % | $1.04/40+4\%=$ **6,6 %** |
| Gordon à partir de $D_0$ | $P_0$ USD50, $D_0$ USD2.50, $g$ 5 % | $2.50\times 1.05/50+5\%=$ **10,25 %** |
| Pluriannuel | $P_0$ USD40 ; dividendes 1.00, 1.25, 1.35, 1.50 ; $P_4$ USD45 | TRI de −40, 1, 1.25, 1.35, 46.5 = **6,015 %** |

Un $g$ plus élevé augmente $r_e$ ($D_1$ et $g$ augmentent tous deux) ; un cours plus bas l’augmente aussi.

### Rendement obligataire plus prime de risque (BYPRP)

$$
r_e =r_d+RP
$$

où $r_d$ est en général le YTM de la dette **à long terme** de l’entreprise, et $RP$ souvent l’écart moyen historique entre les rendements d’un indice actions et d’un indice d’obligations d’entreprise.

* Le coût de la dette est un point de départ naturel : les actionnaires exigent plus que les créanciers de l’entreprise.
* La prime est assez arbitraire et peut ne pas être stable dans le temps.
* Elle suppose une dette négociée ; s’il existe plusieurs obligations aux caractéristiques différentes, aucune règle ne dit quel rendement utiliser (pratique courante : l’obligation à long terme).

### MEDAF (CAPM)

$$
r_e = r_f+\hat\beta\,(ERP)
$$

Le bêta provient du **modèle de marché**, une régression des rendements excédentaires de l’action sur ceux du marché :

$$
(r_{i,t}-r_{f,t}) = b_0 + b_1(r_{m,t}-r_{f,t}) + \varepsilon_t
$$

Vérifiez l’indice, la période d’estimation (assez de données ou données trop anciennes) et l’indicateur de $r_f$ : avec une courbe croissante, un taux des bons donne un $r_e$ sensiblement **plus faible** qu’un rendement obligataire long. Une entreprise non cotée peut utiliser un **bêta de pairs, désendetté puis réendetté** (voir le mini-cas 2).

### Modèles de Fama–French

$$
\begin{aligned}
r_e = r_f &+\beta_1ERP + \beta_2 SMB\\
&+ \beta_3 HML+ \beta_4 RMW\\
&+ \beta_5 CMA
\end{aligned}
$$

Le modèle à trois facteurs n’utilise que les trois premiers facteurs.

* **SMB** (small minus big) : prime de taille
* **HML** (high minus low book-to-market) : prime de valeur
* **RMW** (robust minus weak) : prime de rentabilité
* **CMA** (conservative minus aggressive) : prime d’investissement

Les bêtas proviennent de la régression des rendements excédentaires de l’entreprise sur les facteurs. Le bêta de marché d’un modèle multifactoriel **diffère** du bêta du MEDAF, et des modèles différents donnent des réponses différentes. Un $r_f$ de court terme dans la régression peut sous-estimer $r_f$ quand la courbe est croissante.

#### Exemple : modèle à cinq facteurs

| Facteur | Prime | Bêta | Contribution |
| --- | ---: | ---: | ---: |
| $r_f$ | | | 3,82 % |
| ERP | 6,5 % | 1,2 | 7,80 % |
| SMB | 1,8 % | 0,10 | 0,18 % |
| HML | 4,0 % | −0,20 | −0,80 % |
| RMW | 2,0 % | 0,5 | 1,00 % |
| CMA | 1,0 % | 0,2 | 0,20 % |
| **$r_e$** | | | **12,2 %** |

#### Exemple : MEDAF contre trois facteurs

$r_f$ = 6 % et le rendement attendu du marché est de 10 % (ERP 4 %).

$$
\begin{aligned}
r_e^{\text{CAPM}}={}&6\%+0.8\times 4\%=9.2\%\\
r_e^{\text{3F}}={}&6\%+1\%+0.75\times 4\%\\
&+0.15\times 5\%+0.05\times 2\%\\
={}&10.85\%
\end{aligned}
$$

Le 1 % est la constante ; SMB et HML ajoutent 0,85 %.

### Entreprises non cotées

**MEDAF étendu :**

$$
r_e = r_f +\beta_{\text{peer}}(ERP)+SP+SCRP
$$

* $\beta_{\text{peer}}$ : bêta d’un groupe de pairs cotés du même secteur.
* **Prime de taille (SP)** : inversement liée à la taille ; fondée sur le décile des plus petites capitalisations, c’est-à-dire le rendement d’une **micro-capitalisation** de risque moyen. Les SP historiques peuvent devoir être ajustées **à la baisse** pour une petite entreprise saine (l’échantillon des petites capitalisations comprend des entreprises déchues et en difficulté).
* **Prime de risque spécifique (SCRP)** : géographie, personne clé et autres risques difficiles à diversifier.

Étapes : (1) trouver le bêta des pairs ; (2) calculer le $r_e$ du MEDAF ; (3) décider si des primes de taille et spécifique se justifient ; (4) les ajouter.

| SCRP : facteurs qualitatifs | SCRP : facteurs quantitatifs |
| --- | --- |
| Secteur, position concurrentielle, expérience de la direction | Levier financier et opérationnel |
| Concentration des clients, des fournisseurs et géographique | Volatilité des flux de trésorerie et des bénéfices |
| Gouvernance, type d’actifs (tangibles ou incorporels) | Prévisibilité des bénéfices, pouvoir de fixation des prix |

Les entreprises non cotées sont aussi **illiquides**, mais l’illiquidité se traite en général par une **décote pour défaut de négociabilité** sur la valeur, pas par une prime dans $r_e$.

**Méthode par addition (build-up) :**

$$
r_e=r_f+ERP+SP+IP+SCRP
$$

Ici l’ERP **n’est pas ajustée par le bêta** (un bêta de 1 est implicite) : $r_f$ + ERP est le rendement exigé d’une **grande capitalisation** de risque moyen. Ajouter SP donne le rendement d’une micro-capitalisation ; on ajoute ensuite la **prime de risque sectorielle** (IP, pour les secteurs plus risqués) et la SCRP. Utile lorsqu’il n’existe pas d’entreprises cotées comparables, ou que leur comparabilité est douteuse.

### Entreprises internationales

**Modèle du spread pays** pour un marché actions émergent :

$$
ERP = ERP_{\text{developed}} + \lambda\times CRP
$$

où $\lambda$ est l’exposition de l’entreprise au pays local. La **CRP** rémunère le risque supplémentaire d’investir dans un marché émergent (situation économique, expropriation, risque politique). Dans sa forme de base, c’est le **spread souverain** : le rendement des obligations d’État du marché émergent libellées dans la devise du marché développé, moins le rendement des obligations d’État du marché développé de même échéance. Un spread **obligataire** peut ne pas convenir à une prime **actions** ; Damodaran le met donc à l’échelle :

$$
CRP = \text{Sovereign spread}\times \frac{\sigma_{\text{equity}}}{\sigma_{\text{bond}}}
$$

où $\sigma_{\text{equity}}$ et $\sigma_{\text{bond}}$ sont les volatilités des marchés locaux des actions et des obligations. Cela suppose des historiques de rendements pour les deux.

#### Exemple : Makinassi

Makinassi a son siège dans le pays X (spread souverain 1,5 %). Le pays Y, qui représente 40 % de ses ventes, a un spread de 3,2 %, une volatilité des actions de 4,0 % et une volatilité des obligations de 2,5 %.

**Étape 1. Le spread pertinent** est celui de Y par rapport à X :

$$3.2\%-1.5\%=1.7\%$$

**Étape 2. Mettre à l’échelle des actions.**

$$CRP=1.7\%\times\frac{4.0}{2.5}=2.72\%$$

**Étape 3. Appliquer l’exposition.**

$$\lambda\times CRP=0.40\times 2.72\%=1.088\%$$

Ajouter **1,088 %** à $r_e$.

**MEDAF mondial.** Un seul facteur : un indice de marché mondial comme $r_m$, en supposant qu’il n’existe pas de différences de risque notables entre pays. Problème : les rendements émergents et développés sont peu corrélés, ce qui donne des bêtas faibles voire **négatifs**. Ajouter un facteur d’indice national aide, si les données locales sont fiables.

**MEDAF international.**

$$
\begin{aligned}
E(r_e)={}&r_f+\beta_G\left[E(r_{gm})-r_f\right]\\
&+\beta_c\left[E(r_c)-r_f\right]
\end{aligned}
$$

* $r_{gm}$ : un indice mondial (MSCI ACWI, FTSE All-World) ; $\beta_G$ est plus faible pour les entreprises moins liées à l’économie mondiale.
* $r_c$ : un indice de devises étrangères **pondéré par la richesse** (variation de change attendue plus le $r_f$ du pays) ; $\beta_c$ dépend de la sensibilité des flux de trésorerie aux taux de change (importations, exportations, investissements).

**Choisir une méthode.** Pour des activités uniquement dans des pays **développés**, le MEDAF mondial ou international est raisonnable. Pour des activités dans des pays **en développement**, c’est moins clair ; la CRP fondée sur le spread souverain peut fonctionner, mais elle repose sur des taux historiques.

#### Pièges d’examen

* DDM pluriannuel : actualiser **chaque** $D_t$ par $(1+r_e)^t$, et inclure $P_n$ dans le flux de la dernière année.
* Le BYPRP ajoute la prime au rendement obligataire **propre** à l’entreprise, pas à $r_f$.
* La méthode par addition utilise l’ERP **sans** bêta ; le MEDAF étendu utilise un bêta **de pairs**.
* L’illiquidité d’une entreprise non cotée → une décote d’évaluation (DLOM), pas une prime supplémentaire.
* Modèle du spread pays : multiplier la CRP par l’**exposition** $\lambda$ de l’entreprise ; Damodaran met le spread à l’échelle par $\sigma_{\text{equity}}/\sigma_{\text{bond}}$ (> 1).

## Mini-cas 1 : Gretna Engines

Un fabricant de moteurs coté de petite capitalisation : cyclique, coûts fixes élevés, actifs surtout composés de stocks et d’immobilisations. Elle prévoit d’émettre de la dette non garantie pour rembourser les actions de préférence.

| Capital | Pondération | Modalités |
| --- | ---: | --- |
| Dette | 20 % | Coupon 7 %, 7 ans, BBB, peu négociée |
| Actions de préférence | 15 % | Dividende 7 %, nominal 1 000, cours 980, remboursables au pair |
| Actions ordinaires | 65 % | Bêta 0,91 ; $r_f$ 2,1 % ; ERP 5,5 % |

**Pourquoi son coût du capital est élevé** : chiffre d’affaires et bénéfices cycliques et volatils ; actifs illiquides ; fort levier opérationnel.

**Étape 1. Coût de la dette par évaluation matricielle** (quatre obligations BBB liquides, semestrielles) :

| Obligation | Coupon | Échéance | Cours | YTM |
| --- | --- | --- | --- | --- |
| 1 | 5% | 4 | 99.50 | 5.140% |
| 2 | 7% | 4 | 106.46 | 5.191% |
| 3 | 6% | 8 | 100.00 | 6.000% |
| 4 | 8% | 8 | 112.42 | 6.021% |

Interpoler linéairement entre les moyennes à 4 ans et à 8 ans pour l’obligation à 7 ans de Gretna :

$$
\begin{aligned}
\bar y_4&=\frac{5.140+5.191}{2}=5.166\%\\
\bar y_8&=\frac{6.000+6.021}{2}=6.011\%\\
\text{Step}&=\frac{6.011-5.166}{4}=0.211\%\\
y_7&=5.166+3\times 0.211\\
&=5.799\%\approx 5.8\%
\end{aligned}
$$

La faible négociation de Gretna signifie que son vrai rendement est un peu plus élevé.

**Étape 2. Coût des actions de préférence.**

$$r_p=\frac{0.07\times 1{,}000}{980}=7.14\%$$

Après le remplacement des actions de préférence par de la dette (35 % de dette, 65 % de capitaux propres), la nouvelle dette coûtera plus de 5,8 % mais moins de 7,14 %. Rembourser au pair quand le cours est de 980 implique un $r_f$ bas et/ou des spreads serrés, donc un bon moment. Pour réduire encore le coût, émettre de la dette **garantie**, **avec option de vente** ou **convertible**.

**Étape 3. Coût des capitaux propres, trois méthodes.**

$$
\begin{aligned}
r_e^{\text{CAPM}}={}&2.1\%+0.91\times 5.5\%\\
={}&7.11\%\\
r_e^{\text{5F}}={}&2.1+0.95(5.5)+0.45(1.8)\\
&+0.14(3.9)-0.19(3.1)\\
&+0.30(3.7)=9.20\%\\
r_e^{\text{BYPRP}}={}&5.8\%+6.2\%=12.0\%
\end{aligned}
$$

**Étape 4. Contrôles de cohérence.**

* Les 7,11 % du MEDAF sont **inférieurs** aux 7,14 % du coût des actions de préférence ; ce n’est donc pas crédible : les actions ordinaires sont subordonnées aux actions de préférence.
* L’ERP a été estimée avec un **taux des bons** et la moyenne **arithmétique**, deux choix qui la poussent **à la hausse**.

## Mini-cas 2 : Precision Irrigation

Une entreprise de logiciels non cotée dans un marché émergent plus risqué, comparée à des pairs cotés du logiciel.

| | Precision | Secteur |
| --- | --- | --- |
| Dette totale | 18.4 | 296.4 |
| Total de l’actif | 105.2 | 1,276.2 |
| EBITDA | 12.2 | 177.4 |
| Intérêts | 1.6 | 23.5 |
| Taux d’imposition | 20% | 25% |
| Bêta | | 1.25 |

$r_f$ local à 10 ans 5,41 % ; ERP 6 %, SP 5 %, IP 1 %, SCRP 6 %, CRP 2 %.

**Étape 1. Coût de la dette à partir d’une notation synthétique.**

$$
\begin{aligned}
IC&=\frac{12.2}{1.6}=7.63\\
D/E&=\frac{18.4}{105.2-18.4}=0.2120
\end{aligned}
$$

Cela correspond à une notation synthétique **A**, avec un spread de 1,46 %. Le risque pays s’applique aussi à la dette :

$$
\begin{aligned}
r_d&=5.41\%+1.46\%+\underbrace{2.00\%}_{CRP}\\
&=8.87\%\\
r_d(1-t)&=8.87\%\times 0.8=7.096\%
\end{aligned}
$$

**Étape 2. Primes.**

* **Prime de taille proche du haut de la fourchette de 3 à 6 %** : les actifs de Precision représentent moins d’un dixième de la moyenne du secteur.
* **SCRP plus élevée** en raison de davantage d’incorporels (47 % contre 32 %) et de moins de trésorerie (9 % contre 14 %) ; 70 % du chiffre d’affaires provient de cinq clients proches (concentration des clients et géographique) ; un fondateur-PDG sans plan de succession (personne clé).
* **SCRP plus faible** grâce à 60 % de revenus d’abonnement et à un levier plus faible (D/E 0,2120 contre 296,4/979,8 = 0,3025 pour le secteur ; IC 7,63 contre 7,55).

**Étape 3. Bêta.** Désendetter le bêta du secteur avec le taux d’imposition et le D/E **du secteur**, puis le réendetter avec ceux de Precision :

$$
\begin{aligned}
\beta_{\text{asset}}&=\frac{1.25}{1+(1-0.25)(0.3025)}\\
&=1.019
\end{aligned}
$$

$$
\begin{aligned}
\beta_{\text{Precision}}&=1.019\\
&\quad\times[1+(1-0.20)(0.2120)]\\
&=1.19
\end{aligned}
$$

**Étape 4. Coût des capitaux propres** (en %). Le MEDAF étendu inclut IP et CRP ; la méthode par addition suit la solution, sans IP.

$$
\begin{aligned}
r_e^{\text{expanded}}&=5.41+1.19(6)+5\\
&\quad+1+6+2\\
&=26.55\%\\
r_e^{\text{build-up}}&=5.41+6+5+6+2\\
&=24.41\%
\end{aligned}
$$

**Étape 5. WACC**, avec $w_d=18.4/105.2=0.1749$ et $w_e=0.8251$ :

$$
\begin{aligned}
WACC&=0.1749\times 7.096\%\\
&\quad+0.8251\times 24.41\%\\
&=21.38\%
\end{aligned}
$$

#### Pièges d’examen

* Désendetter avec le taux d’imposition et le D/E du **comparable** ; réendetter avec ceux de l’entreprise **étudiée**.
* Le D/E tiré de données comptables est dette ÷ (actifs − dette), pas dette ÷ actifs.
* Un coût des actions ordinaires inférieur à celui des actions de préférence est un signal d’alarme.
* Ajouter la CRP **à la fois** à la dette et aux capitaux propres quand le cas indique que le risque pays s’applique aux deux.

> [!NOTE]
>
> **Coquilles du manuel.**
>
> * Grinold–Kroner, scénario 1 : le texte de la solution indique « l’ERP estimée est de 3,6 % », mais son propre calcul donne **5,0 %**.
> * Mini-cas 2 : l’annexe 19 imprime BB comme « 3 < IC < 1.4 » (il faut lire 3 < IC < 5). Le texte du désendettement dit « en utilisant le taux marginal de 20 % », mais la formule utilise correctement les 25 % du secteur. Les chiffres principaux ne correspondent pas aux calculs : MEDAF étendu « 26,56 % » (26,55 %), méthode par addition « 25,41 % » (24,41 % ; 25,41 % inclurait l’IP de 1 %), WACC « 21,13 % » (21,38 %, avec 24,41 %). Le MEDAF étendu y inclut l’IP alors que la formule générale ne le fait pas ; suivez les données fournies par la question.
