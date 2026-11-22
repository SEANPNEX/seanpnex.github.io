---
title: Évaluation par les flux de trésorerie disponibles
---

# Évaluation par les flux de trésorerie disponibles

Le flux de trésorerie disponible pour l’entreprise (FCFF) et pour les actionnaires (FCFE) : comment les calculer à partir du résultat net, du CFO, de l’EBIT et de l’EBITDA ; comment les prévoir ; comment dividendes, rachats et levier les affectent ; et l’évaluation à une, deux et trois phases, y compris actions de préférence, modèles réels (corrigés de l’inflation), analyse de sensibilité, ESG et actifs hors exploitation.

## FCFF et FCFE

| | FCFF | FCFE |
| --- | --- | --- |
| Flux destiné à | Tous les apporteurs de capitaux (dette, préférence, ordinaires) | Les seuls actionnaires ordinaires |
| Après | Charges d’exploitation, impôts, investissements en capital fixe (FCInv) et en fonds de roulement (WCInv) | Les mêmes, **plus** intérêts et principal (nets des nouveaux emprunts) |
| Actualisé au | **WACC** | **Rendement exigé des capitaux propres**, $r$ |
| Donne | La valeur de l’entreprise → capitaux propres = valeur de l’entreprise − dette (− préférence) | Directement la valeur des capitaux propres |

$$\text{Firm value}=\sum_{t=1}^{\infty}\frac{FCFF_t}{(1+WACC)^t}$$

$$\text{Equity value}=\sum_{t=1}^{\infty}\frac{FCFE_t}{(1+r)^t}$$

$$WACC=w_d\,r_d(1-t)+w_e\,r$$

où $w_d=D/(D+E)$ et $w_e=E/(D+E)$. Utilisez des pondérations en **valeur de marché** (ou cibles) et le taux d’imposition **marginal**.

**Lequel utiliser :**

* Une structure du capital stable → **FCFE** (plus simple, plus direct).
* **FCFF** lorsque l’entreprise est endettée et que son FCFE est **négatif**, ou que sa **structure du capital change** (la croissance du FCFF reflète les fondamentaux, et le WACC est moins sensible au levier que $r$).
* **Valeur actuelle ajustée** (APV) : valeur de l’entreprise = valeur non endettée (FCFF au coût des capitaux propres non endetté) + valeur nette de la dette (bouclier fiscal − coûts de détresse).

**Le point de vue du propriétaire dans le FCFE.** Le FCFE est ce que l’entreprise **peut** distribuer sans nuire à sa valeur, pas ce qu’elle distribue effectivement. Un propriétaire **qui contrôle** peut le réorienter ; les modèles de FCF conviennent donc au point de vue du contrôle (ou à une cible d’acquisition).

Avec une croissance constante (les croissances du FCFF et du FCFE ne sont pas forcément égales) :

$$
\text{Firm value}=\frac{FCFF_0(1+g)}{WACC-g}
$$

$$
\text{Equity value}=\frac{FCFE_0(1+g)}{r-g}
$$

#### Exemple : Cagiati

| Donnée | Valeur |
| --- | --- |
| $FCFF_0$ | CHF700m |
| $r_d$ / $r$ | 5,7 % / 11,8 % |
| Pondérations $w_d$ / $w_e$ | 20 % / 80 % |
| Taux d’imposition | 33,33 % |
| $g$ | 5 % |
| Dette | CHF2,200m |
| Actions | 200m |

**Étape 1. WACC.**

$$
\begin{aligned}
WACC&=0.20\times 5.7\%\times(1-0.3333)\\
&\quad+0.80\times 11.8\%\\
&=10.2\%
\end{aligned}
$$

**Étape 2. Valeur de l’entreprise.**

$$
\begin{aligned}
\text{Firm value}&=\frac{700\times 1.05}{0.102-0.05}\\
&=\frac{735}{0.052}=14{,}134.6
\end{aligned}
$$

**Étape 3. Capitaux propres par action.**

$$
\begin{aligned}
\text{Equity}&=14{,}134.6-2{,}200\\
&=11{,}934.6\\
\text{Per share}&=\frac{11{,}934.6}{200}=59.67
\end{aligned}
$$

**CHF59.67 par action.**

## Calculer le FCFF et le FCFE

> [!IMPORTANT]
> Les six formules à mémoriser :
>
> $$\begin{aligned}FCFF={}&NI+NCC+Int(1-t)\\&-FCInv-WCInv\end{aligned}$$
>
> $$FCFF=CFO+Int(1-t)-FCInv$$
>
> $$\begin{aligned}FCFF={}&EBIT(1-t)+Dep\\&-FCInv-WCInv\end{aligned}$$
>
> $$\begin{aligned}FCFF={}&EBITDA(1-t)+Dep\cdot t\\&-FCInv-WCInv\end{aligned}$$
>
> $$\begin{aligned}FCFE={}&FCFF-Int(1-t)\\&+\text{Net borrowing}\end{aligned}$$
>
> $$\begin{aligned}FCFE&=NI+NCC-FCInv-WCInv\\&\quad+\text{Net borrowing}\\&=CFO-FCInv+\text{Net borrowing}\end{aligned}$$

Les composantes :

* **NI** : résultat net revenant aux actionnaires ordinaires (après dividendes préférentiels).
* **NCC** : charges non monétaires nettes (amortissements, dépréciations et éléments du tableau ci-dessous).
* **Int(1 − t)** : réintégré pour le FCFF, car les intérêts reviennent aux créanciers. FCFF et WACC doivent être cohérents : intérêts après impôt avec un WACC après impôt.
* **FCInv** : investissements − produits de cession d’actifs. Les acquisitions en espèces comptent comme investissements ; celles payées en actions ou en dette n’apparaissent pas au tableau des flux, mais comptent pour les **prévisions**.
* **WCInv** : la hausse du fonds de roulement **hors trésorerie et dette à court terme** (effets à payer et partie courante de la dette à long terme relèvent du financement).
* **Emprunts nets** : nouvelle dette − remboursements.
* À partir de l’EBIT, l’amortissement est réintégré en totalité ; à partir de l’EBITDA, seul son **bouclier fiscal** $Dep\times t$ est ajouté (l’amortissement n’a jamais été retranché).

#### Exemple : Cane Distribution

Les montants sont en \$000 ; le taux d’imposition est de 30 %, et la dette paie 7 % d’intérêts.

**Étape 1. FCFF à partir du résultat net.**

$$
\begin{aligned}
FCFF={}&NI+NCC+Int(1-t)\\
&-FCInv-WCInv
\end{aligned}
$$

| | 2018 | 2019 | 2020 |
| --- | --- | --- | --- |
| Résultat net | 97.52 | 107.28 | 118.00 |
| + Amortissement | 45.00 | 49.50 | 54.45 |
| + Int(1 − t) | 10.98 | 12.08 | 13.28 |
| − FCInv | 0.00 | (50.00) | (55.00) |
| − WCInv | (56.00) | (11.60) | (12.76) |
| **FCFF** | **97.50** | **107.26** | **117.97** |

**Étape 2. Vérification à partir du CFO.** L’approche par le CFO donne le même résultat ; p. ex. 2018 :

$$
\begin{aligned}
FCFF&=CFO+Int(1-t)\\
&\quad-FCInv\\
&=86.52+10.98-0=97.50
\end{aligned}
$$

**Étape 3. FCFE.**

$$
\begin{aligned}
FCFE={}&FCFF-Int(1-t)\\
&+\text{Net borrowing}
\end{aligned}
$$

| | 2018 | 2019 | 2020 |
| --- | ---: | ---: | ---: |
| FCFF | 97.50 | 107.26 | 117.97 |
| − Int(1 − t) | (10.98) | (12.08) | (13.28) |
| + Emprunts nets | 22.40 | 24.64 | 27.10 |
| **FCFE** | **108.92** | **119.82** | **131.79** |

#### Exemple : Pitts Corporation

Chiffres de Pitts en 2020, en \$m :

| Poste | Valeur | Poste | Valeur |
| --- | ---: | --- | ---: |
| Résultat net | 240 | CFO | 495 |
| Amortissement | 300 | EBIT | 500 |
| Intérêts | 100 | EBITDA | 800 |
| Taux d’imposition | 40% | Investissements | 400 |

**Étape 1. Composantes.** Le fonds de roulement exclut la trésorerie et les effets à payer ; les effets à payer comptent comme emprunts.

$$
\begin{aligned}
Int(1-t)&=100\times 0.6=60\\
WCInv&=\underbrace{40}_{\Delta AR}+\underbrace{30}_{\Delta\text{Inv}}\\
&\quad-\underbrace{15}_{\Delta AP}-\underbrace{10}_{\Delta\text{Accr}}=45\\
\text{Borrowing}&=\underbrace{50}_{\Delta\text{Notes}}+\underbrace{25}_{\Delta LTD}=75
\end{aligned}
$$

**Étape 2. Chaque voie donne la même réponse.**

| À partir de | Calcul | Résultat |
| --- | --- | --- |
| RN → FCFF | 240 + 300 + 60 − 400 − 45 | **155** |
| CFO → FCFF | 495 + 60 − 400 | **155** |
| EBIT → FCFF | 500(0.6) + 300 − 400 − 45 | **155** |
| EBITDA → FCFF | 800(0.6) + 300(0.4) − 400 − 45 | **155** |
| FCFF → FCFE | 155 − 60 + 75 | **170** |
| RN → FCFE | 240 + 300 − 400 − 45 + 75 | **170** |
| CFO → FCFE | 495 − 400 + 75 | **170** |

Le FCFE dépasse ici le FCFF uniquement parce que les emprunts étaient importants.

### Intérêts et dividendes au tableau des flux de trésorerie

| | IFRS | US GAAP |
| --- | --- | --- |
| Intérêts reçus | Exploitation ou investissement | Exploitation |
| Intérêts versés | Exploitation **ou financement** | Exploitation |
| Dividendes reçus | Exploitation ou investissement | Exploitation |
| Dividendes versés | Exploitation ou financement | Financement |

> [!IMPORTANT]
> Le FCFF à partir du CFO réintègre Int(1 − t) **seulement si les intérêts versés ont été déduits dans le CFO**. Si une entreprise IFRS a classé les intérêts versés en financement, ne les réintégrez pas. Si elle a classé les dividendes versés en exploitation, réintégrez-les au CFO.

### Éléments non monétaires et fonds de roulement

| Élément non monétaire | Ajustement à partir du RN |
| --- | --- |
| Amortissement | Réintégrer |
| Amortissement et dépréciation des incorporels | Réintégrer |
| Charges de restructuration (charge) | Réintégrer |
| Charges de restructuration (produit de reprise) | Retrancher |
| Amortissement d’une **décote** obligataire | Réintégrer |
| Amortissement d’une **prime** obligataire | Retrancher |
| Pertes sur activités hors exploitation | Réintégrer |
| Gains sur activités hors exploitation | Retrancher |
| Impôts différés | Réintégrer, avec prudence |

* **Plus-value de cession** : un équipement d’une valeur comptable de €60,000 vendu €100,000 → retrancher la plus-value de €40,000 du RN ; les €100,000 apparaissent en investissement (réduisant FCInv).
* **Impôts différés passifs** : ne pas réintégrer s’ils vont bientôt **se retourner** ; réintégrer si une entreprise en croissance peut les différer indéfiniment (un acquéreur pourrait quand même les devoir plus tard).
* **Impôts différés actifs** (p. ex. issus de charges de restructuration non déductibles) : ne retrancher que s’ils doivent se reproduire.
* **Stock-options** : la charge est non monétaire, mais la trésorerie de l’exercice et une partie de l’avantage fiscal vont en financement. Ne prévoyez pas de flux qui ne dureront pas, et utilisez le nombre d’actions **attendu** (dilution).
* Retirez les éléments **non récurrents** de l’année de base.
* **Un amortissement plus élevé** réduit le RN mais **augmente le CFO** de son bouclier fiscal :

$$
\begin{aligned}
\Delta NI&=-\Delta Dep\times(1-t)\\
\Delta CFO&=+\Delta Dep\times t
\end{aligned}
$$

* **Fonds de roulement** : la hausse des stocks et des créances réduit CFO et FCFE ; celle des dettes fournisseurs et charges à payer les augmente. Des actifs qui diminuent ou des dettes fournisseurs qui augmentent ne peuvent pas durer éternellement, et les besoins en fonds de roulement d’une entreprise en croissance augmentent aussi.

### Emplois du flux de trésorerie disponible

Les emplois doivent égaler les ressources : un contrôle de cohérence qui révèle aussi la politique de structure du capital.

$$
\begin{aligned}
FCFF={}&\Delta\text{Cash}+Int(1-t)\\
&+(\text{Repaid}-\text{New debt})\\
&+\text{Dividends}\\
&+(\text{Buybacks}-\text{Issuance})\\
FCFE={}&\Delta\text{Cash}+\text{Dividends}\\
&+(\text{Buybacks}-\text{Issuance})
\end{aligned}
$$

#### Exemple : Pitts (emplois)

La trésorerie de Pitts a augmenté de 10, l’entreprise a versé 160 de dividendes, et n’a ni racheté ni émis d’actions.

$$
\begin{aligned}
FCFF&=10+60-75+160+0\\
&=155\\
FCFE&=10+160+0=170
\end{aligned}
$$

Le CFO (495) a couvert les investissements (400) ; les 75 de nouvelle dette ont donc en fait payé le dividende : **le levier augmente**.

## Prévoir le FCFF et le FCFE

1. **Croissance constante** sur une base (normalisée) : $FCFF_t=FCFF_0(1+g)^t$. P. ex. Pitts à 15 % : FCFF 155 → 178,25 → 204,99 → 235,74.
2. **Prévoir les composantes**, en général liées aux ventes, en supposant que (FCInv − Dep) et WCInv sont des fractions constantes de la **hausse des ventes** :

$$
\text{Incremental FC rate}=\frac{\text{Capex}-\text{Dep}}{\Delta\text{Sales}}
$$

$$
\text{Incremental WC rate}=\frac{\Delta WC}{\Delta\text{Sales}}
$$

$$
\begin{aligned}
FCFF={}&EBIT(1-t)\\
&-(FCInv-Dep)\\
&-WCInv
\end{aligned}
$$

Si un ratio d’endettement cible DR finance l’investissement net nouveau (l’amortissement étant la seule charge non monétaire) :

$$
\begin{aligned}
FCFE={}&NI-(1-DR)\\
&\times(FCInv-Dep)\\
&-(1-DR)\,WCInv
\end{aligned}
$$

#### Exemple : Pitts (prévision fondée sur les ventes)

Les ventes de Pitts étaient de \$3,000m, en hausse de \$300m l’an dernier, lorsque les investissements étaient de 400, l’amortissement de 300 et WCInv de 45. La marge d’EBIT est de 16,67 %, la marge nette de 8 %, le taux d’imposition de 40 % et le ratio d’endettement cible de 50 %. Les ventes croissent de 10 % l’an prochain.

**Étape 1. Taux incrémentaux de l’an dernier.**

$$
\begin{aligned}
\text{FC rate}&=\frac{400-300}{300}=33.33\%\\
\text{WC rate}&=\frac{45}{300}=15\%
\end{aligned}
$$

**Étape 2. Investissement de l’an prochain.** Les ventes augmentent de 300, à 3 300 :

$$
\begin{aligned}
FCInv-Dep&=33.33\%\times 300=100\\
WCInv&=15\%\times 300=45
\end{aligned}
$$

**Étape 3. FCFF et FCFE.**

$$
\begin{aligned}
FCFF&=\underbrace{3{,}300\times 16.67\%\times 0.6}_{330}\\
&\quad-100-45=185\\
FCFE&=\underbrace{3{,}300\times 8\%}_{264}-0.5\times 100\\
&\quad-0.5\times 45=191.50
\end{aligned}
$$

De façon équivalente, le FCFE soustrait la totalité des 145 d’investissement et ajoute des emprunts nets de 50 % × 145 = 72,50.

Sur cinq ans, avec une marge d’EBIT passant de 16,67 % à 14,5 % : FCFF 185,00, 188,98, 195,90, 202,31, 208,05. La méthode est moins précise lorsqu’il existe des charges non monétaires significatives autres que l’amortissement.

### Ce qui modifie le FCF, et ce qui ne le modifie pas

* **Dividendes, rachats et émissions d’actions ne modifient pas** le FCFF ni le FCFE : ce sont des **emplois** du flux de trésorerie disponible.
* **Un levier plus élevé** ne modifie pas le FCFF. Le FCFE augmente du montant de la nouvelle dette l’année de son émission, puis baisse de Int(1 − t) ensuite. Plus de dette augmente aussi le bouclier fiscal des intérêts.
* **FCFE contre DDM** : avec des données cohérentes (FCFE = dividendes), ils donnent la même valeur. Les modèles de FCF sont préférés quand les dividendes sont nuls ou faibles, discrétionnaires (un mauvais signal de rentabilité), ou que l’entreprise est une cible d’acquisition. Les mêmes forces jouent sur les deux : les entreprises à croissance rapide ont des dividendes faibles **et** un FCFE faible.
* Les chiffres de « flux de trésorerie disponible » de tiers ne sont souvent pas conçus pour l’évaluation : vérifiez la définition.

> [!IMPORTANT]
> **Le résultat net n’est pas le FCFE** : il ignore investissements, investissement en fonds de roulement et emprunts nets (ils ne sont égaux que si investissements = amortissement, sans investissement en fonds de roulement ni emprunts nets). **L’EBITDA n’est pas le FCFF** : il est avant impôt, et ignore le bouclier fiscal de l’amortissement, les investissements et le fonds de roulement. C’est un indicateur encore pire du FCFE (il ignore aussi intérêts et emprunts) ; actualiser l’EBITDA exigerait un taux avant impôt.

### Actions de préférence

* FCFF à partir du RN : **réintégrer les dividendes préférentiels** (comme des intérêts après impôt, mais non déductibles).
* FCFE à partir du RN (déjà après dividendes préférentiels) : aucun ajustement supplémentaire ; les **émissions** nettes d’actions de préférence comptent comme des emprunts nets.

$$
\begin{aligned}
FCFF={}&NI+NCC+Int(1-t)\\
&+\text{Pref div}\\
&-FCInv-WCInv\\
WACC={}&w_d\,r_d(1-t)+w_p\,r_p\\
&+w_e\,r\\
\text{Equity}={}&\text{Firm value}-\text{Debt}\\
&-\text{Preferred}
\end{aligned}
$$

#### Exemple : Welch Corporation

Montants en \$m ; le taux d’imposition est de 30 %.

| Capital | Montant | Pondération | Coût |
| --- | ---: | ---: | ---: |
| Obligations | 400 | 40% | 8% |
| Préférence | 100 | 10% | 8% |
| Ordinaires | 500 | 50% | 12% |

RN 110, intérêts 32, dividendes préférentiels 8, amortissement 40, FCInv 70, WCInv 20, emprunts nets 25. Le FCFF croît de 4 % et le FCFE de 5,4 %.

**Étape 1. WACC.**

$$
\begin{aligned}
WACC&=0.4\times 8\%\times 0.7\\
&\quad+0.1\times 8\%+0.5\times 12\%\\
&=9.04\%
\end{aligned}
$$

**Étape 2. Valeur à partir du FCFF.**

$$
\begin{aligned}
FCFF&=110+40+32\times 0.7\\
&\quad+8-70-20=90.4\\
\text{Firm value}&=\frac{90.4\times 1.04}{0.0904-0.04}\\
&=1{,}865.40\\
\text{Equity}&=1{,}865.40-400-100\\
&=1{,}365.40
\end{aligned}
$$

**Étape 3. Valeur à partir du FCFE.**

$$
\begin{aligned}
FCFE&=110+40-70-20+25\\
&=85\\
\text{Equity}&=\frac{85\times 1.054}{0.12-0.054}\\
&=1{,}357.42
\end{aligned}
$$

Les deux voies donnent des valeurs proches (**1 365,40** contre **1 357,42**).

## Modèles à une phase : variantes et sensibilité

**Un modèle réel (corrigé de l’inflation)** est utile pour les actions internationales, et là où l’inflation est forte ou volatile :

$$
V_0=\frac{FCFE_0(1+g_{\text{real}})}{r_{\text{real}}-g_{\text{real}}}
$$

Le $r$ réel est le rendement réel du pays ajusté du secteur, de la taille et du levier ; le $g$ réel est calé sur la croissance réelle du pays.

#### Exemple : Mukamba Ventures (modèle réel)

Mukamba, en République démocratique du Congo, a $FCFE_0$ = CDF1,400.

**Étape 1. Rendement exigé réel.** Partir du rendement réel du pays et ajuster du secteur, de la taille et du levier :

$$
\begin{aligned}
r_{\text{real}}&=7.30\%+0.80\%\\
&\quad-0.33\%-0.12\%\\
&=7.65\%
\end{aligned}
$$

**Étape 2. Croissance réelle.** La croissance réelle du pays de 3,0 %, moins 0,5 % pour l’entreprise :

$$g_{\text{real}}=3.0\%-0.5\%=2.5\%$$

**Étape 3. Valeur.**

$$
\begin{aligned}
V_0&=\frac{1{,}400\times 1.025}{0.0765-0.025}\\
&=\frac{1{,}435}{0.0515}=27{,}864
\end{aligned}
$$

**CDF27,864.**

L’**analyse de sensibilité** fait varier une donnée à la fois pour voir laquelle compte le plus. La valeur varie proportionnellement au FCF de l’**année de base**.

#### Exemple : Petrobras (sensibilité)

$FCFE_0$ = BRL2.59 et $g$ = 7 % ; le taux sans risque est de 8,9 %, le bêta de 1,4 et l’ERP de 5,3 %.

$$
\begin{aligned}
r&=8.9\%+1.4\times 5.3\%=16.32\%\\
V_0&=\frac{2.59\times 1.07}{0.1632-0.07}\\
&=\frac{2.7713}{0.0932}=29.73
\end{aligned}
$$

La valeur de base est **BRL29.73**. En modifiant une donnée à la fois :

| Donnée (basse / haute) | Valeur basse | Valeur haute |
| --- | --- | --- |
| Bêta 1,2 / 1,6 | 33.55 | 26.70 |
| $r_f$ 7,9 % / 9,9 % | 33.31 | 26.85 |
| ERP 4,3 % / 6,3 % | 34.99 | 25.85 |
| **Croissance du FCFE 5 % / 9 %** | **24.02** | **38.57** (écart le plus large) |

## Modèles à plusieurs phases

$$
\begin{aligned}
V_{\text{firm}}={}&\sum_{t=1}^{n}\frac{FCFF_t}{(1+WACC)^t}\\
&+\frac{FCFF_{n+1}}{WACC-g}\\
&\quad\times\frac{1}{(1+WACC)^n}
\end{aligned}
$$

$$
\begin{aligned}
V_{\text{equity}}={}&\sum_{t=1}^{n}\frac{FCFE_t}{(1+r)^t}\\
&+\frac{FCFE_{n+1}}{(r-g)(1+r)^n}
\end{aligned}
$$

* La croissance de la phase 2 est le taux soutenable à long terme : légèrement inférieure à la croissance du PIB pour un secteur en déclin, légèrement supérieure pour un secteur en croissance.
* La croissance de la phase 1 peut être constante, ou **décroissante** (comme dans le modèle H).
* Le « taux de croissance » peut porter sur les ventes, le résultat net ou le FCF lui-même : vérifiez lequel. La valeur terminale provient du GGM appliqué à $FCF_{n+1}$ ou d’un multiple (P/E × BPA), et représente en général l’essentiel de la valeur.

> [!IMPORTANT]
> Quand la croissance chute, le FCFE peut **bondir**, car les besoins d’investissement baissent plus vite que les bénéfices. Calculez toujours $FCFE_{n+1}$ à partir des hypothèses de la phase 2 ; ne vous contentez pas de faire croître $FCFE_n$ au taux $g_L$.

Par action, avec un ratio d’endettement cible DR finançant l’investissement net :

$$
\begin{aligned}
FCFE_t={}&EPS_t-(1-DR)\\
&\times\left[(FCInv-Dep)_t\right.\\
&\quad\left.+\,WCInv_t\right]
\end{aligned}
$$

#### Exemple : TechnoSchaft (croissance constante dans chaque phase)

| Donnée | Valeur |
| --- | --- |
| Ventes par action | €25, en hausse de 20 % pendant 3 ans, puis 6 % |
| Marge nette | 10% |
| FCInv nette / WCInv | 50 % / 20 % de la hausse des ventes |
| Financement par dette (DR) | 40% |
| $r$ | 7 % + 1,2 × 4,5 % = 12,4 % |

**Étape 1. FCFE par action.** P. ex. année 1 : les ventes augmentent de 5,00, donc

$$
\begin{aligned}
FCFE_1&=3.00-0.6\times(2.50+1.00)\\
&=0.90
\end{aligned}
$$

| Année | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Ventes/action | 30.000 | 36.000 | 43.200 | 45.792 |
| BPA | 3.000 | 3.600 | 4.320 | 4.579 |
| FCInv nette | 2.500 | 3.000 | 3.600 | 1.296 |
| WCInv | 1.000 | 1.200 | 1.440 | 0.518 |
| Financement par dette | 1.400 | 1.680 | 2.016 | 0.726 |
| **FCFE** | **0.900** | **1.080** | **1.296** | **3.491** (+169 %) |

Le FCFE bondit de 169 % en année 4 : la croissance passe de 20 % à 6 %, réduisant ainsi les besoins d’investissement.

**Étape 2. Valeur terminale à l’année 3.**

$$
\begin{aligned}
TV_3&=\frac{FCFE_4}{r-g}=\frac{3.491}{0.124-0.06}\\
&=54.55\\
\text{PV}(TV_3)&=\frac{54.55}{1.124^3}=38.415
\end{aligned}
$$

**Étape 3. Additionner.**

$$
\begin{aligned}
V_0&=\underbrace{0.801+0.855+0.913}_{\text{PV of }FCFE_1\dots FCFE_3}\\
&\quad+38.415=40.98
\end{aligned}
$$

**$V_0$ = €40.98** ; la valeur terminale en représente environ 94 %.

#### Exemple : Sindhuh (croissance du BPA décroissante en phase 1)

| Donnée | Valeur |
| --- | --- |
| $EPS_0$ | \$2.40 |
| Croissance du BPA | 30 %, 18 %, 12 %, 9 %, 7 % (2020–2024), puis 7 % |
| Investissement net par action | 3.00, 2.50, 2.00, 1.50, 1.00, puis +7 % |
| WCInv | 50 % de l’investissement net |
| DR | 30% |
| $r$ | 6 % + 1,1 × 4 % = 10,4 % |

**Étape 1. FCFE par action.** P. ex. 2020 :

$$
\begin{aligned}
FCFE_{2020}&=3.120\\
&\quad-0.7\times(3.00+1.50)\\
&=-0.030
\end{aligned}
$$

| | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | --- | --- | --- | --- | --- |
| BPA | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | −0.030 | 1.057 | 2.023 | 2.919 | 3.759 |

**Étape 2. Valeur terminale à la fin de 2023.**

$$
\begin{aligned}
V_{2023}&=\frac{FCFE_{2024}}{r-g}\\
&=\frac{3.759}{0.104-0.07}=110.56\\
\text{PV}(V_{2023})&=\frac{110.56}{1.104^4}=74.425
\end{aligned}
$$

**Étape 3. Ajouter** la PV du FCFE pour 2020–2023 (4,31) : **$V_0$ = \$78.73**.

**Vérification par le P/E.** Le P/E historique est de $78.73/2.40=32.8$ aujourd’hui et de $110.56/4.494=24.6$ début 2024 : le P/E baisse à mesure que la croissance s’estompe.

**Les modèles à trois phases** combinent une phase 1 constante, une phase 2 décroissante (ou constante) et une phase 3 stable : une bonne approximation quand les flux fluctuent en réalité.

#### Exemple : Reliant Home Furnishings (FCFF à trois phases)

| Donnée | Valeur |
| --- | --- |
| $FCFF_0$ | \$745m |
| Actions | 309.39m |
| Dette | \$1,518m |
| $r$ | 5,04 % + 0,9 × 5,5 % = 9,99 % |
| $r_d$ avant impôt, taux d’imposition | 7,1 %, 34 % |
| Pondérations $w_d$ / $w_e$ | 20 % / 80 % |
| Croissance | 8,8 % (années 1–4) ; 7,4 %, 6,0 %, 4,6 % (années 5–7) ; puis 3,2 % |

**Étape 1. WACC.**

$$
\begin{aligned}
WACC&=0.2\times 7.1\%\times 0.66\\
&\quad+0.8\times 9.99\%\\
&=8.93\%
\end{aligned}
$$

**Étape 2. Prévision de FCFF.**

| Année | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| FCFF (\$m) | 811 | 882 | 959 | 1,044 | 1,121 | 1,188 | 1,243 | 1,283 |

**Étape 3. Valeur terminale à l’année 7.**

$$
\begin{aligned}
TV_7&=\frac{1{,}283}{0.0893-0.032}=22{,}391\\
\text{PV}(TV_7)&=\frac{22{,}391}{1.0893^7}=12{,}304
\end{aligned}
$$

**Étape 4. Entreprise, capitaux propres et par action.**

$$
\begin{aligned}
\text{Firm value}&=5{,}097+12{,}304=17{,}401\\
\text{Equity}&=17{,}401-1{,}518=15{,}883\\
\text{Per share}&=\frac{15{,}883}{309.39}=51.34
\end{aligned}
$$

**\$51.34 par action.**

**Choisir un modèle.** Une phase pour les entreprises stables et matures (croissance au plus égale à celle de l’économie) ; deux phases pour une période de forte croissance suivie d’une stabilité ; trois phases pour croissance → transition → maturité. Comparez la valeur au cours pour juger d’une sur- ou sous-évaluation.

## ESG et actifs hors exploitation

* Éléments ESG quantifiables (amendes, investissements supplémentaires, licence retardée) → ajuster les **flux de trésorerie** ; risques ESG difficiles à quantifier (p. ex. relations sociales) → ajouter une **prime au coût des capitaux propres**, fondée sur le jugement.

Les **actifs hors exploitation** (trésorerie et titres négociables excédentaires, terrains détenus pour placement, placements financiers hors exploitation) sont évalués **séparément, à leur valeur de marché**, et ajoutés :

$$
\begin{aligned}
V_{\text{firm}}={}&\text{Operating assets}\\
&+\text{Non-operating assets}
\end{aligned}
$$

> [!NOTE]
>
> **Problèmes du manuel.**
>
> * L’exemple Pitts fondé sur les ventes dit qu’il « prévoit le FCFF de 2013 » ; il s’agit de 2021.
> * La solution Sindhuh dit que WCInv représente « 50 % de la hausse de l’investissement net », mais les chiffres utilisent 50 % de l’investissement net lui-même, comme dans l’énoncé.
