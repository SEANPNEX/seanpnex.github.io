---
title: Coût du capital
---

# Coût du capital

**Coût moyen pondéré du capital (CMPC/WACC)** :
$$
WACC=w_dr_d(1-t)+w_pr_p+w_er_e
$$
où $t$ est le taux d’imposition.

* $r_d=r_f+\text{spread}$
* $r_e=r_f+(ERP+IRP)$
  * ERP : prime de risque actions
  * IRP : prime de risque idiosyncratique

## Facteurs du coût du capital

| **Descendants, externes**                            | **Ascendants, propres à l’entreprise**                 |
| ------------------------------------------------- | ----------------------------------------------- |
| Disponibilité du capital                              | Volatilité du chiffre d’affaires, des bénéfices et des flux      |
| Conditions de marché                                 | Nature et liquidité des actifs                      |
| Cadre juridique et réglementaire, risque pays | Solidité financière, rentabilité et levier |
| Juridiction fiscale                                  | Caractéristiques des titres                               |

* Capital disponible : plus faible
* Conditions de marché
  * Inflation : plus élevé
  * Récession : plus élevé
  * Expansion : plus faible
  * Volatilité des taux ou du change plus faible : plus faible
* Cadre juridique et réglementaire : plus solide, plus faible
* Taux marginal d’imposition plus élevé : plus faible (voir la formule, effet de l’économie d’impôt plus fort)

* Volatilité du chiffre d’affaires, des bénéfices et des flux :

| Facteur                                  | **Coût du capital** |
| --------------------------------------- | ------------------- |
| Ventes plus stables               | Plus faible               |
| Chiffre d’affaires plus concentré            | Plus élevé              |
| Bénéfices plus prévisibles          | Plus faible               |
| Levier opérationnel et financier plus élevé | Plus élevé              |
| Risque ESG plus élevé                         | Plus élevé              |

* Nature et liquidité des actifs

| Facteur                                | **Coût du capital** |
| ------------------------------------- | ------------------- |
| Part plus élevée d’actifs corporels fongibles | Plus faible               |
| Part plus élevée d’actifs liquides             | Plus faible               |

* Solidité financière

| Facteur                              | **Coût du capital** |
| ----------------------------------- | ------------------- |
| Rentabilité plus élevée                | Plus faible               |
| Génération de trésorerie plus forte         | Plus faible               |
| Couverture des intérêts et liquidité plus élevées | Plus faible               |
| Ratios de levier plus élevés              | Plus élevé              |

* Caractéristiques des titres

|                     | **Caractéristique**                      | **Coût du capital** |
| ------------------- | -------------------------------- | ------------------- |
| **Dette**            | Remboursable par anticipation (call)                      | Plus élevé              |
|                     | Option de vente (put)                       | Plus faible               |
|                     | Convertible                   | Plus faible               |
| **Actions privilégiées** | Cumulatives                       | Plus faible               |
| **Actions ordinaires**    | Flux ou droits de vote subordonnés | Plus élevé              |

## Coût de la dette

* Dette cotée : rendement à l’échéance (YTM)
* Dette non cotée : rendement d’obligations de notation et d’échéance similaires. Sans notation : notation synthétique.

**Exemple de notation synthétique**

| **Classe de notation** | **Ratio de couverture des intérêts** | **D/E**          |
| ---------------- | --------------------------- | ---------------- |
| AAA              | IC > 10 fois               | D/E < 35%        |
| AA               | 8 < IC < 10                 | 35% < D/E < 40%  |
| A                | 5 < IC < 8                  | 40% < D/E < 42%  |
| BBB              | 3 < IC < 5                  | 42% < D/E < 44%  |
| BB               | 2 < IC < 3                  | 44% < D/E < 50%  |
| B                | 1.4 < IC < 2                | 50% < D/E < 60%  |
| CCC              | 1.0 < IC < 1.4              | 60% < D/E < 70%  |
| CC               | 0.6 < IC < 1.0              | 70% < D/E < 80%  |
| C                | 0.3 < IC < 0.6              | 80% < D/E < 100% |
| D                | IC < 0.3                    | D/E > 100%       |

* Prêts bancaires : le taux d’intérêt le plus récent.

> [!note]
>
> Les prêts amortissables ont en général un coût de la dette plus faible que les prêts in fine

* Contrats de location

  * Taux implicite du contrat de location (RIIL)

  Avec l’équation suivante (location-financement)
  $$
  \text{PV of lease payment}+\text{PV of residual value to lessor}=\text{Fair value of leasedn asset}+\text{Lessor's direct initial cost}
  $$
  

  * Taux d’emprunt marginal (IBR) : taux d’un prêt garanti de même durée

## Prime de risque actions (ERP)

### Approche historique

$$
ERP = r_m-r_f
$$

On peut calculer plusieurs moyennes sur données historiques pour estimer l’ERP future.

**Hypothèses clés** :

* Les rendements sont stationnaires
* Les marchés sont relativement efficients
* À long terme, le rendement moyen est un estimateur sans biais du rendement attendu

**Choix clés** :

* Choix de l’indice actions
  * En général des indices larges, pondérés par la capitalisation
* Choix de la période

| Période         | **Avantages**                                   | **Inconvénients**                                            |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| Période longue  | Les variations de volatilité pèsent moins           | *Pas* représentative du *marché actuel*                 |
| Période courte | Représentative de l’environnement de marché actuel | Augmente le risque d’un *bruit plus important* (ne couvre qu’une partie d’un cycle ou une période de crise) |

* Choix du type de moyenne

|                     | **Avantages**                                               | **Inconvénients**                                            |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Moyenne arithmétique** | • *Simple* à calculer  <br> • Prend en compte toutes les observations    | • Sensible aux valeurs *extrêmes*  <br> • Surestime la valeur terminale attendue de la richesse |
| **Moyenne géométrique**  | • Prend en compte toutes les observations  <br> • *Donne moins de poids aux valeurs aberrantes* <br> • Estime la valeur terminale attendue de la richesse |                                                              |

* Choix de l’indicateur du taux sans risque

|                      | **Avantages**                                  | **Inconvénients**                              |
| -------------------- | ----------------------------------------------- | ---------------------------------------------- |
| YTM des obligations d’État  | *Plus proche* de la duration infinie des actions | *Pas* un rendement totalement sans risque            |
| Taux des bons du Trésor | Estimation *exacte* du taux sans risque          | *Éloigné* de la duration infinie des actions |

**Limites** :

* L’ERP peut varier dans le temps
* Le biais du survivant tend à gonfler les estimations historiques de l’ERP

### Approche prospective

* Estimations fondées sur des enquêtes
* Modèles d’actualisation des dividendes
* Modélisation macroéconomique

#### Fondées sur des enquêtes

* Évaluer les anticipations en demandant aux gens ce qu’ils attendent
* Les estimations sont sensibles aux rendements récents du marché

#### Modèles d’actualisation des dividendes (DDM)

D’après le modèle de croissance de Gordon, en supposant un P/E constant, les bénéfices, les dividendes et le cours croissent au même rythme.
$$
ERP= E(\frac{D_1}{V_0})+E(g)-r_f
$$

#### Modèle macroéconomique

$$
ERP = [DY+\Delta(\frac{P}{E})+i+g-\Delta S]-E(r_f)
$$

> [!note]
>
> Semblable à la **fonction de croissance** vue en économie, où $\Delta S$ est la variation nette des rachats + dynamisme relatif. L’idée est identique ; seules les notations changent.

| **Facteurs**           |                       |                              | **Symbole**    |
| --------------------- | --------------------- | ---------------------------- | ------------- |
| Rendement du dividende        |                       |                              | $DY$          |
| Plus-value attendue | Revalorisation attendue    |                              | $\Delta(P/E)$ |
|                       | Croissance du bénéfice par action | Inflation anticipée           | $i$           |
|                       |                       | Croissance économique réelle         | $g$           |
|                       |                       | Variation du nombre d’actions | $\Delta S$    |

> [!note]
>
> L’inflation anticipée $i$ peut être estimée par $YTM_{treasury\ bond}-YTM_{TIPS}$

#### Limites

* Enquêtes
  * Biais d’échantillonnage et de réponse
  * Biais comportementaux
* DDM
  * Hypothèses trop strictes
* Modèles macroéconomiques
  * Erreurs de modélisation liées aux données macro
  * Biais comportementaux

## Coût des capitaux propres

Modèles

* DDM
* Rendement obligataire plus prime de risque (BYPRP)
* CAPM (MEDAF)
* Fama-French

### DDM

* Conditions : société cotée, dividende stable et prévisible
* Modèle de croissance de Gordon :
  * $r_e=\frac{D_1}{P_0}+g$
* Prévisions financières pluriannuelles :
  * $P_0 = (\sum_{t=1}^n \frac{D_1}{(1+r_e)})+\frac{P_n}{(1+r_e)^n}$, en calculant $r_e$ comme un TRI.

### BYPRP

$$
r_e =r_d+RP
$$

où $RP$ peut être estimée par l’écart moyen historique de rendement entre un indice actions et un indice d’obligations d’entreprises.

* L’estimation du coût de la dette fournit un point de départ pour le rendement exigé par les créanciers
* La détermination de $RP$ est relativement arbitraire
* Exige que l’entreprise ait une dette cotée
* Si l’entreprise a plusieurs dettes cotées aux caractéristiques différentes, le choix est difficile.

### CAPM

$$
r_e = r_f+\beta(ERP)
$$

### Modèles de Fama-French

$$
r_e = r_f +\beta_1ERP + \beta_2 SMB + \beta_3 HML + \beta_4 RMW + \beta_5 CMA
$$

* SMB : petites moins grandes, prime de taille
* HML : ratio valeur comptable/valeur de marché élevé moins faible, prime value
* RMW : robustes moins faibles, prime de rentabilité
* CMA : prudentes moins agressives, prime d’investissement

### CAPM étendu

$$
r_e = r_f +\beta_{\text{peer}}(ERP)+SP+SCRP
$$

* $\beta_{\text{peer}}$ : $\beta$ sectoriel, tiré d’un groupe de sociétés cotées comparables du même secteur
* SP : prime de taille
* SCRP : prime de risque propre à l’entreprise

### Méthode par cumul (build-up)

$$
r_e=r_f+ERP+SP+IP+SCRP
$$

>[!note]
>
>Lorsqu’on ne trouve pas de $\beta$ sectoriel, on suppose $\beta=1$.

* IP : prime de risque sectorielle

### Prime de risque pays (CRP)

La **CRP** est exigée par les investisseurs pour le risque supplémentaire d’un investissement dans un pays émergent
$$
CRP = \text{Sovereign yield spread}\times \frac{\sigma_{\text{equity}}}{\sigma_{\text{bond}}}
$$

* Spread souverain : rendement des obligations du pays émergent moins rendement des obligations d’État d’un pays développé.
* $\sigma_{\text{equity}}$ : volatilité du marché actions local
* $\sigma_{\text{bond}}$ : volatilité du marché obligataire local

### CAPM mondial

* Facteur unique : un indice de marché mondial comme $r_m$
* Suppose qu’il n’y a pas de différences de risque significatives entre pays

### CAPM international

$$
E(r_e)=r_f+\beta_G(E(r_{gm})-r_f)+\beta_c(E(r_c)-r_f)
$$

* $r_{gm}$ : indice mondial
* $r_c$ : indice de devises étrangères
