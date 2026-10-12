---
title: Dividendes et rachats d’actions
---

# Dividendes

## Notion de dividende et politiques de dividende

Classification des dividendes :

* Dividende en numéraire : distribution de trésorerie aux actionnaires
  * Dividendes ordinaires
  * Dividendes spéciaux/exceptionnels : lorsque le cours est surévalué
  * Dividendes de liquidation : en cas de faillite
* Dividende en actions
* Division d’actions (par exemple 2 pour 1)
  * Regroupement d’actions (par exemple 1 pour 20)

Effets des dividendes sur la richesse des actionnaires

* Numéraire : le cours baisse du montant du dividende, mais la richesse de l’actionnaire ne change pas
* Actions : seul le nombre change, la richesse n’est pas affectée

Effets des dividendes sur les ratios financiers

* Numéraire :
  * Réduit l’actif et les capitaux propres au bilan
  * Réduit les ratios de liquidité puisque la trésorerie diminue
  * Augmente les ratios de levier financier (D/A, D/E)
* Actions :
  * Aucun effet sur l’actif et les capitaux propres, le nombre d’actions augmente
  * Le cours et le BPA baissent

|                           | Après un dividende en numéraire | Après un dividende en actions / une division |
| ------------------------- | -------------------- | ----------------------------- |
| Actif (trésorerie)             | Plus faible                | Inchangé                      |
| Capitaux propres                    | Plus faibles                | Inchangés                      |
| Cours                     | Plus faible                | Plus faible                         |
| BPA                       | Inchangé             | Plus faible                         |
| PER                       | Plus faible                | Inchangé                      |
| Ratios de liquidité          | Plus faibles                | Inchangés                      |
| Ratios de levier financier | Plus élevés               | Inchangés                      |

## Politique de dividende

La théorie de Modigliani-Miller (MM) affirme que le dividende n’a pas d’importance. L’argument de « l’oiseau dans la main », l’argument fiscal, le signal informationnel et la théorie des coûts d’agence soutiennent au contraire qu’il compte.

* Signal informationnel : le dividende transmet une information sur l’entreprise (positive ou négative)
* Coûts d’agence :
  * Le dividende réduit les flux de trésorerie disponibles que les dirigeants pourraient surinvestir sans contrôle
  * Le dividende accroît le risque de défaut sur la dette de l’entreprise

### Considérations fiscales

#### Système de double imposition

Les bénéfices avant impôt sont imposés au niveau de la société, puis de nouveau au niveau de l’actionnaire s’ils sont distribués sous forme de dividendes à des actionnaires imposables.
$$
Div = EBT\times \text{payout\%}(1-t_{corporate})(1-t_{individual\ div})
$$
Le taux d’imposition effectif vaut alors $t_{corporate}+(1-t_{corporate})t_{individual\ div}$.

#### Système d’imputation

Garantit que les bénéfices distribués en dividendes ne sont imposés qu’une fois, au taux de l’actionnaire.
$$
Div = EBT\times \text{payout\%}(1-t_{individual\ div})
$$
Le taux effectif est simplement $t_{indiviaul \ div}$.

#### Système à taux différenciés

Les bénéfices distribués en dividendes sont imposés au niveau de la société à un taux plus faible que les bénéfices mis en réserve.
$$
Div = EBT\times \text{payout\%}(1-t_{corporate})(1-t_{individual\ div})
$$
Le taux d’imposition effectif vaut alors $t_{corporate}+(1-t_{corporate})t_{individual\ div}$.

### Politique de distribution

#### Politique de dividende stable

$$
E(Div) = Div_{t-1}+(E(NI)\times r_{div}-Div_{t-1})\times \text{Adjustment Factor}
$$

où le facteur d’ajustement vaut $\frac{1}{N}$, $N$ étant le nombre d’années sur lesquelles l’ajustement du dividende doit s’étaler.

#### Politique de taux de distribution constant

Le dividende est toujours versé selon un taux de distribution constant
$$
Div = r_{div}\times NI
$$
Cette méthode est rarement utilisée, car le dividende fluctue avec les bénéfices.

## Rachats d’actions et leurs effets

**Rachat d’actions :** opération par laquelle une société rachète ses propres actions. Les actions rachetées sont appelées **actions autodétenues**. Elles n’ouvrent droit ni aux dividendes ni au vote et ne comptent pas dans le calcul du BPA.

Il existe 3 méthodes de rachat :

* Achat sur le marché : souplesse de calendrier et de montant
* Offre publique de rachat
  * À prix fixe : achat d’un nombre fixe d’actions à un prix fixe, en général avec une prime sur le marché
  * Enchère hollandaise : une enchère détermine le prix le plus bas
* Négociation directe : en général avec une prime sur le marché

Effet sur le BPA :

* Rachat financé par la trésorerie excédentaire
  * L’actif et les capitaux propres baissent, le levier (D/A, D/E) augmente
  * Le BPA augmente
* Rachat financé par emprunt
  * La dette augmente et les capitaux propres baissent, le levier augmente (davantage qu’avec un rachat en numéraire)
  * Si le rendement bénéficiaire (E/P) > coût de la dette après impôt, le BPA augmente ; sinon il baisse

Effet sur la valeur comptable par action :

>[!note]
>
>BVPS = valeur comptable des capitaux propres / nombre d’actions en circulation

* Baisse si le prix de rachat > BVPS initiale
* Inchangée si le prix de rachat = BVPS
* Hausse dans le cas contraire

> [!note]
>
> Quelques ratios
>
> * Taux de distribution = $\frac{div}{NI}$.
> * Couverture du dividende = $\frac{NI}{div}$
> * Couverture par le FCFE = $\frac{FCFE}{div+\text{shares repurchase}}$
> * Signaux d’alerte d’une baisse du dividende :
>   * Indicateurs boursiers externes défavorables
>   * Rendements du dividende extrêmement élevés.
