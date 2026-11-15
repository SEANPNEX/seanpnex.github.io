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

**Exemple (Cagiati).** FCFF CHF700m ; $r_d$ 5,7 % ; $r$ 11,8 % ; pondérations dette/capitaux propres 20/80 ; impôt 33,33 % ; $g$ 5 % ; dette CHF2.2bn ; 200m d’actions.

* WACC = 0.20(5.7%)(0.6667) + 0.80(11.8%) = **10,2 %**.
* Valeur de l’entreprise = 700(1.05)/(0.102 − 0.05) = 735/0.052 = CHF14,134.6m → capitaux propres = 14 134,6 − 2 200 = CHF11,934.6m → **CHF59.67 par action**.

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

**Exemple (Cane Distribution, \$000).** Impôt 30 %, intérêts à 7 %.

| | 2018 | 2019 | 2020 |
| --- | --- | --- | --- |
| Résultat net | 97.52 | 107.28 | 118.00 |
| + Amortissement | 45.00 | 49.50 | 54.45 |
| + Int(1 − t) | 10.98 | 12.08 | 13.28 |
| − FCInv | 0.00 | (50.00) | (55.00) |
| − WCInv | (56.00) | (11.60) | (12.76) |
| **FCFF** | **97.50** | **107.26** | **117.97** |

* À partir du CFO (86,52 / 145,18 / 159,69) + Int(1 − t) − FCInv → le même FCFF.
* FCFE = FCFF − Int(1 − t) + emprunts nets (22,40 / 24,64 / 27,10) = **108,92 / 119,82 / 131,79**.

**Exemple (Pitts Corporation, 2020, \$m).** RN 240, amortissement 300, intérêts 100, impôt 40 %, investissements 400, CFO 495, EBIT 500, EBITDA 800. WCInv = Δcréances 40 + Δstocks 30 − Δfournisseurs 15 − Δcharges à payer 10 = **45** (hors trésorerie et effets à payer). Emprunts nets = Δeffets à payer 50 + Δdette à long terme 25 = **75**.

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

**Exemple (Duplico, fonds de roulement soutenable).** Investissements et amortissements sont passés de €997.8m et €235.4m (2020) à €317.6m et €309.2m (2022). Un amortissement plus élevé **réduit le RN** de Dep(1 − t) mais **augmente le CFO** de Dep × t (le bouclier fiscal). La hausse des stocks et des créances réduit CFO et FCFE ; celle des dettes fournisseurs et charges à payer les augmente. Des actifs qui diminuent ou des dettes fournisseurs qui augmentent ne peuvent pas durer éternellement, et les besoins en fonds de roulement d’une entreprise en croissance augmentent aussi.

### Emplois du flux de trésorerie disponible

Les emplois doivent égaler les ressources : un contrôle de cohérence qui révèle aussi la politique de structure du capital.

* Emplois du FCFF = Δtrésorerie + Int(1 − t) + (remboursements − nouveaux emprunts) + dividendes + (rachats − émissions).
* Emplois du FCFE = Δtrésorerie + dividendes + (rachats − émissions).

**Exemple (Pitts).** FCFF 155 = Δtrésorerie 10 + 60 − 75 + dividendes 160 + 0 ; FCFE 170 = 10 + 160 + 0. Le CFO (495) a couvert les investissements (400) ; la nouvelle dette a donc en fait payé les dividendes → levier en hausse.

## Prévoir le FCFF et le FCFE

1. **Croissance constante** sur une base (normalisée). P. ex. Pitts à 15 % : FCFF 155 → 178,25 → 204,99 → 235,74.
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
FCFE={}&NI\\
&-(1-DR)(FCInv-Dep)\\
&-(1-DR)\,WCInv
\end{aligned}
$$

**Exemple (Pitts, à partir des ventes).** Ventes \$3,000m (en hausse de \$300m l’an dernier), marge d’EBIT 16,67 %, impôt 40 % ; taux d’investissement fixe incrémental = (400 − 300)/300 = **33,33 %** ; taux de fonds de roulement incrémental = 45/300 = **15 %**. L’an prochain, ventes +10 % :

| | FCFF | FCFE (marge nette 8 %, DR 50 %) |
| --- | --- | --- |
| Ventes | 3,300 | 3,300 |
| EBIT(1 − t) / RN | 330 | 264 |
| Capital fixe incrémental | (100) | (100) |
| Fonds de roulement incrémental | (45) | (45) |
| Emprunts nets | | 72.50 |
| **Résultat** | **185** | **191.50** |

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
* Valeur des capitaux propres = valeur de l’entreprise − dette − préférence.

**Exemple (Welch Corporation, \$m).** Obligations 400 à 8 %, préférence 100 à 8 %, ordinaires 500 à 12 % ; RN 110, intérêts 32, dividendes préférentiels 8, amortissement 40, FCInv 70, WCInv 20, emprunts nets 25, impôt 30 % ; croissance du FCFF 4 %, du FCFE 5,4 %.

* WACC = 0.4(8%)(0.7) + 0.1(8%) + 0.5(12%) = **9,04 %**.
* FCFF = 110 + 40 + 32(0.7) + 8 − 70 − 20 = **90,4** → valeur de l’entreprise = 90.4(1.04)/0.0504 = 1 865,40 → capitaux propres = 1 865,40 − 400 − 100 = **1 365,40**.
* FCFE = 110 + 40 − 70 − 20 + 25 = **85** → capitaux propres = 85(1.054)/(0.12 − 0.054) = **1 357,42**.

## Modèles à une phase : variantes et sensibilité

**Un modèle réel (corrigé de l’inflation)** est utile pour les actions internationales, et là où l’inflation est forte ou volatile :

$$
V_0=\frac{FCFE_0(1+g_{\text{real}})}{r_{\text{real}}-g_{\text{real}}}
$$

Le $r$ réel est le rendement réel du pays ajusté du secteur, de la taille et du levier ; le $g$ réel est calé sur la croissance réelle du pays.

**Exemple (Mukamba Ventures, RDC).** FCFE₀ CDF1,400 ; $r$ = 7,30 % + 0,80 % − 0,33 % − 0,12 % = **7,65 %** ; $g$ = 3,0 % − 0,5 % = 2,5 % → $V_0$ = 1,435/0.0515 = **CDF27,864**.

L’**analyse de sensibilité** fait varier une donnée à la fois pour voir laquelle compte le plus. La valeur varie proportionnellement au FCF de l’**année de base**.

**Exemple (Petrobras).** FCFE₀ BRL2.59, $g$ 7 %, $r$ = 8,9 % + 1,4(5,3 %) = 16,32 % → $V_0$ = 2.59(1.07)/0.0932 = **BRL29.73**.

| Donnée | Basse → valeur | Haute → valeur |
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

**Exemple (TechnoSchaft, croissance constante dans chaque phase).** Ventes par action €25, en hausse de 20 % pendant 3 ans puis de 6 % ; marge nette 10 % ; FCInv nette à 50 % et WCInv à 20 % de la hausse des ventes ; 40 % financés par dette ; $r$ = 7 % + 1,2(4,5 %) = 12,4 %.

| Année | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| Ventes/action | 30.000 | 36.000 | 43.200 | 45.792 |
| BPA | 3.000 | 3.600 | 4.320 | 4.579 |
| FCInv nette | 2.500 | 3.000 | 3.600 | 1.296 |
| WCInv | 1.000 | 1.200 | 1.440 | 0.518 |
| Financement par dette | 1.400 | 1.680 | 2.016 | 0.726 |
| **FCFE** | **0.900** | **1.080** | **1.296** | **3.491** (+169 %) |

$TV_3$ = 3.491/(0.124 − 0.06) = €54.55, d’une PV de 38,415 → **$V_0$ = 0.801 + 0.855 + 0.913 + 38.415 = €40.98** (la valeur terminale représente environ 94 %).

**Exemple (Sindhuh, croissance du BPA décroissante en phase 1).** BPA₀ \$2.40 ; croissance de 30, 18, 12, 9, 7 %, puis 7 % ; investissement net par action 3,00, 2,50, 2,00, 1,50, 1,00 (puis +7 %) ; WCInv = 50 % de l’investissement net ; 30 % financés par dette ; $r$ = 6 % + 1,1(4 %) = 10,4 %.

| | 2020 | 2021 | 2022 | 2023 | 2024 |
| --- | --- | --- | --- | --- | --- |
| BPA | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | −0.030 | 1.057 | 2.023 | 2.919 | 3.759 |

$V_{2023}$ = 3.759/(0.104 − 0.07) = \$110.56, d’une PV de 74,425 → **$V_0$ = \$78.73**. Le P/E historique est aujourd’hui de 78.73/2.40 = 32,8 et de 110.56/4.494 = 24,6 au début de 2024 : le P/E baisse à mesure que la croissance s’estompe.

**Exemple (Medina Werks, croissance des ventes et marge décroissantes).** Ventes C\$600m ; croissance 20, 16, 12, 10, 8, 7 % ; marge nette 14, 13, 12, 11, 10,5, 10 % ; investissement net 60 % et fonds de roulement 25 % de la hausse des ventes ; 40 % de dette ; $r$ = 6 % + 1,1(4,5 %) = 10,95 % ; 70m d’actions.

* FCFE des années 1–5 : 39,600, 49,824, 61,137, 65,480, 74,703 (PV ≈ 208,57) ; FCFE₆ = 79,235.
* $TV_5$ = 79.235/0.0395 = C\$2,005.95m, d’une PV de 1 193,12.
* Capitaux propres = **C\$1,401.69m → C\$20.02 par action**.

**Les modèles à trois phases** combinent une phase 1 constante, une phase 2 décroissante (ou constante) et une phase 3 stable : une bonne approximation quand les flux fluctuent en réalité.

**Exemple (Reliant Home Furnishings, FCFF à trois phases).** FCFF₀ \$745m ; 309,39m d’actions ; $r$ = 5,04 % + 0,9(5,5 %) = 9,99 % ; WACC = 0.2(7.1%)(0.66) + 0.8(9.99%) = **8,93 %** ; dette \$1.518bn ; croissance de 8,8 % (années 1–4), puis 7,4 %, 6,0 %, 4,6 %, puis 3,2 %.

* FCFF : 811, 882, 959, 1 044, 1 121, 1 188, 1 243 ; 1 283 en année 8.
* PV des années 1–7 = \$5,097m ; $TV_7$ = 1,283/(0.0893 − 0.032) = \$22,391m, d’une PV de \$12,304m.
* Valeur de l’entreprise \$17,401m → capitaux propres \$15,883m → **\$51.34 par action**.

**Choisir un modèle.** Une phase pour les entreprises stables et matures (croissance au plus égale à celle de l’économie) ; deux phases pour une période de forte croissance suivie d’une stabilité ; trois phases pour croissance → transition → maturité. Comparez la valeur au cours pour juger d’une sur- ou sous-évaluation.

## ESG et actifs hors exploitation

* Éléments ESG quantifiables (amendes, investissements supplémentaires) → ajuster les **flux de trésorerie** ; risques ESG difficiles à quantifier → ajouter une **prime au coût des capitaux propres**, fondée sur le jugement.

**Exemple (American Copper Mining Co., FCFF à trois phases avec ESG).** Phases : avant l’exploitation de la nouvelle mine, pendant son exploitation, après sa fermeture. Ajustements ESG : la licence est retardée de 3 à 5 ans, les investissements liés à l’eau ajoutent 10 % aux investissements, et le risque social ajoute **75 pb** au coût des capitaux propres. $r_d$ = 5%(0.75) = 3,75 % ; $r_e$ = 3 % + 1,2(5 %) + 0,75 % = 9,75 % ; WACC = 0.5(3.75%) + 0.5(9.75%) = **6,75 %**. PV totale du FCFF \$1,936m − dette \$968m = capitaux propres \$968m → **\$97 par action** pour un cours de \$110 → **vendre**.

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
> * American Copper : le texte dit que la mine fonctionne de 2025 à 2039 (phase 3 à partir de 2040), mais l’annexe la montre fermant vers 2036, avec une ligne intitulée « PV of FCFF Years 2016–2035 ». Ce sont les chiffres finaux (\$1,936m, \$97 par action) qui comptent.
> * L’exemple Pitts fondé sur les ventes dit qu’il « prévoit le FCFF de 2013 » ; il s’agit de 2021.
> * La solution Sindhuh dit que WCInv représente « 50 % de la hausse de l’investissement net », mais les chiffres utilisent 50 % de l’investissement net lui-même, comme dans l’énoncé.
