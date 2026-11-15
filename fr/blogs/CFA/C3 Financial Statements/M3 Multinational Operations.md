---
title: Activités multinationales
---

# Activités multinationales

## Transactions en devises {#foreign-currency-transactions}

Une entreprise multinationale a souvent deux types d’activités en devises qui demandent un traitement comptable particulier :

* **Les transactions en devises** : l’entreprise réalise des ventes, des achats, des prêts ou des emprunts **libellés en devise étrangère**.
* **La conversion des états en devises** : l’entreprise investit dans des **filiales étrangères** qui tiennent leurs comptes dans une devise étrangère, et doit convertir leurs états pour les consolider (voir [Conversion des états en devises](#foreign-currency-translation)).

Une transaction en devises a lieu lorsqu’une entreprise réalise un achat à l’importation ou une vente à l’exportation **libellé(e) en devise étrangère**, ou emprunte ou prête des fonds en devise étrangère. L’entreprise enregistre la transaction dans sa propre monnaie, mais elle paiera ou recevra un montant fixe de devise étrangère.

Comme les taux de change fluctuent, la valeur des **dettes et créances** en devises, exprimée dans la monnaie de l’entreprise, fluctue elle aussi jusqu’à leur règlement. C’est le **risque de transaction** :

| Transaction | Poste en devise | Perte si la devise | Gain si la devise |
| --- | --- | --- | --- |
| **Importation** (achat à crédit) | Dette fournisseur | **S’apprécie** : il faut plus de monnaie nationale pour payer | Se déprécie |
| **Exportation** (vente à crédit) | Créance client | **Se déprécie** : l’encaissement vaut moins en monnaie nationale | S’apprécie |

La transaction est d’abord enregistrée au **cours au comptant de la date de transaction**. La suite dépend de son règlement avant ou après la date de clôture :

1. **Réglée avant la date de clôture.** L’écart entre le cours de la date de transaction et celui de la date de règlement donne un gain ou une perte de change **réalisé(e)**, inclus(e) dans le résultat net de la période.
2. **Encore en cours à la date de clôture.** La créance ou la dette en devise est **réévaluée au cours au comptant de la date de clôture**, et la variation depuis la date de transaction est un gain ou une perte **latent(e)** dans le résultat net de la période. Au règlement, à la période suivante, la variation entre la date de clôture et la date de règlement est un gain ou une perte **réalisé(e)** supplémentaire de cette période.

Dans les deux cas, le gain ou la perte **total(e)** sur la durée de la transaction est l’écart entre le cours de la date de transaction et celui de la date de règlement. Une date de clôture intermédiaire ne fait que le répartir sur deux périodes. Seul le poste **monétaire** (la créance ou la dette) est réévalué : la vente déjà comptabilisée en chiffre d’affaires, ou le stock acheté, reste au montant de la date de transaction.

**Exemple (réglée dans la même période).** Une entreprise américaine, qui publie en USD, vend des marchandises à un client européen pour EUR 100 000 le 1er mars, payables le 1er mai.

| Date | Cours | Écriture |
| --- | --- | --- |
| 1er mars | USD 1.10 per EUR | Chiffre d’affaires et créance : $100{,}000\times1.10=$ USD 110 000 |
| 1er mai | USD 1.08 per EUR | Trésorerie encaissée : $100{,}000\times1.08=$ USD 108 000 |

L’euro s’est **déprécié** pendant que l’entreprise détenait une créance en euros (une exportation) ; elle comptabilise donc une **perte de change réalisée** de $110{,}000-108{,}000=$ USD 2 000. Le chiffre d’affaires reste à USD 110 000.

**Exemple (une date de clôture intermédiaire).** La même entreprise importe des marchandises pour EUR 100 000 le 15 novembre A1, payables le 15 février A2. Son exercice se clôt le 31 décembre.

| Date | Cours | Dette en USD | Gain (perte) en RN |
| --- | --- | ---: | ---: |
| 15 nov. A1 (transaction) | USD 1.10 per EUR | 110 000 | — |
| 31 déc. A1 (date de clôture) | USD 1.13 per EUR | 113 000 | **(3 000)** latente, en A1 |
| 15 févr. A2 (règlement) | USD 1.12 per EUR | 112 000 payés | **1 000** réalisé, en A2 |

* **A1 :** l’euro s’est apprécié pendant que l’entreprise devait des euros (une importation) ; la dette monte donc à USD 113 000 et le résultat net de A1 comprend une **perte latente de 3 000**. Le stock reste à USD 110 000.
* **A2 :** l’euro recule légèrement avant le paiement ; l’entreprise paie donc USD 112 000 et comptabilise un **gain réalisé de 1 000**.
* **Total :** une perte nette de $112{,}000-110{,}000=$ USD 2 000, répartie en $-3{,}000$ en A1 et $+1{,}000$ en A2.

> [!Note]
>
> Ni les IFRS ni les US GAAP ne précisent **où** les gains et pertes de transaction sont présentés au compte de résultat : dans le résultat d’exploitation (p. ex. dans les autres produits d’exploitation) ou hors exploitation (p. ex. avec les charges financières). Deux entreprises aux expositions identiques peuvent donc publier un résultat d’exploitation et des **marges opérationnelles** différents. Consultez les notes, qui publient le gain ou la perte de change net(te) inclus(e) dans le résultat net, avant de les comparer.

## Conversion des états en devises {#foreign-currency-translation}

### Concepts

**Contexte.** Les entreprises qui ont des activités à l’étranger font en général tenir les comptes et établir les états de ces activités dans la monnaie locale. Pour les consolider, la société mère doit d’abord **convertir** leurs états dans sa propre monnaie de présentation.

Trois monnaies interviennent :

* **Monnaie de présentation** : la monnaie dans laquelle les états financiers (consolidés) de la mère sont présentés.
* **Monnaie fonctionnelle** : la monnaie de l’**environnement économique principal** dans lequel l’entité opère, normalement celle dans laquelle elle génère et dépense principalement sa trésorerie.
* **Monnaie locale** : la monnaie du pays où se trouve l’entité, dans laquelle elle tient généralement ses comptes.

**Déterminer la monnaie fonctionnelle.** La direction juge quelle monnaie, principalement :

* Influence les **prix de vente** de ses biens et services
* Influence les **coûts de main-d’œuvre, de matières et autres**
* Sert à **lever des fonds** (financement par dette et par capitaux propres)
* Sert à **conserver les encaissements** liés à l’exploitation

La monnaie fonctionnelle détermine ensuite la méthode :

| Cas | Filiale typique | Méthode | L’écart de conversion va en |
| --- | --- | --- | --- |
| **Fonctionnelle = locale ≠ présentation** | Autonome : fonctionne indépendamment de la mère | [Méthode du cours de clôture](#current-rate-method) (fonctionnelle → présentation) | **OCI**, comme écart de conversion cumulé (CTA) en capitaux propres |
| **Fonctionnelle = présentation ≠ locale** | Très intégrée à la mère : p. ex. vend les produits de la mère et lui reverse la trésorerie | [Méthode temporelle](#temporal-method) (locale → fonctionnelle) | **Résultat net**, comme gain ou perte de réévaluation |
| **Locale ≠ fonctionnelle ≠ présentation** | Tient ses comptes dans une monnaie qui n’est pas sa monnaie principale d’activité | Méthode temporelle (locale → fonctionnelle), **puis** méthode du cours de clôture (fonctionnelle → présentation) | Les deux : RN pour la première étape, OCI pour la seconde |

* **Méthode du cours de clôture** : fonctionnelle → présentation (*conversion*)
* **Méthode temporelle** : locale → fonctionnelle (*réévaluation*)

### Méthodes de conversion

#### Méthode du cours de clôture {#current-rate-method}

Trois cours de change sont utilisés :

* **Cours de clôture** : le cours au comptant à la date de clôture
* **Cours moyen** : la moyenne de la période, une approximation pratique des cours aux dates de comptabilisation des produits et des charges
* **Cours historique** : le cours au comptant lorsque le poste est apparu (p. ex. à l’émission des actions ou à la déclaration des dividendes)

| Poste | Cours |
| --- | --- |
| **Tous les actifs et passifs** | Cours de clôture |
| **Actions ordinaires et capital apporté** | Cours historique à l’émission |
| **Produits et charges** | Cours moyen (ou cours à la date de comptabilisation de chacun) |
| **Dividendes** | Cours historique à la déclaration |
| **Résultats non distribués** | Pas convertis directement : reconstitués à partir de leurs éléments (ci-dessous) |

Les **résultats non distribués** suivent la règle BASE (ouverture + ajouts − retraits = clôture), dans la monnaie de présentation :

$$\text{RE}_{\text{end}}=\text{RE}_{\text{beg}}+\text{NI (translated)}-\text{Dividends (translated)}$$

$\text{RE}_{\text{beg}}$ est le solde de clôture converti de l’an dernier ; il reflète donc les cours de toutes les années passées.

Les actifs et passifs au cours de clôture, et les capitaux propres à un mélange de cours historiques et moyens, ne s’équilibrent pas. La différence est l’**écart de conversion cumulé (CTA)**, une ligne distincte des capitaux propres, passée par les OCI :

$$\text{CTA}=\text{Assets}-\text{Liabilities}-\text{Common stock}-\text{RE}$$

**Ordre de travail :** convertir d’abord le **compte de résultat** (pour obtenir le RN), puis le tableau des **résultats non distribués**, puis les **actifs et passifs** du bilan ; le **CTA** est le solde qui équilibre le bilan.

* **L’exposition est l’actif net de la filiale.** Tous les actifs et passifs sont au cours de clôture ; si la devise **s’apprécie**, une filiale ayant un actif net donne un écart de conversion **positif** ; si elle **se déprécie**, un écart négatif.
* Le CTA **s’accumule** en capitaux propres et n’est recyclé en résultat net qu’à la **cession ou la liquidation** de la filiale étrangère.

**Exemple (méthode du cours de clôture, les trois états).** Le 1er janvier, une société mère américaine (monnaie de présentation USD) crée une filiale européenne dont la monnaie fonctionnelle est l’euro, avec un capital de EUR 1 000. L’euro **se déprécie** au cours de l’année :

| Cours | USD per EUR |
| --- | ---: |
| Historique, 1er janvier (émission des actions) | 1.20 |
| Moyen de l’année | 1.15 |
| À la déclaration des dividendes | 1.12 |
| Clôture, 31 décembre | 1.10 |

*Compte de résultat :*

| | EUR | Cours | USD |
| --- | ---: | ---: | ---: |
| Chiffre d’affaires | 1 000 | 1.15 | 1 150 |
| Charges | (800) | 1.15 | (920) |
| **Résultat net** | **200** | | **230** |

*Résultats non distribués :*

| | EUR | Cours | USD |
| --- | ---: | ---: | ---: |
| RE d’ouverture (première année) | 0 | | 0 |
| + Résultat net | 200 | du compte de résultat | 230 |
| − Dividendes | (50) | 1.12 | (56) |
| **RE de clôture** | **150** | | **174** |

*Bilan au 31 décembre :*

| | EUR | Cours | USD |
| --- | ---: | ---: | ---: |
| Trésorerie | 300 | 1.10 | 330 |
| Stocks | 400 | 1.10 | 440 |
| Immobilisations corporelles (nettes) | 900 | 1.10 | 990 |
| **Total actif** | **1 600** | | **1 760** |
| Passifs | 450 | 1.10 | 495 |
| Actions ordinaires | 1 000 | 1.20 | 1 200 |
| Résultats non distribués | 150 | du tableau des RE | 174 |
| **CTA** (solde) | — | | **(109)** |
| **Total passif et capitaux propres** | **1 600** | | **1 760** |

**Vérifier le CTA à partir de l’actif net.** Chaque variation de l’actif net est convertie à un cours, mais portée au cours de clôture de 1,10 :

* Actif net d’ouverture : $1{,}000\times(1.10-1.20)=-100$
* Résultat net : $200\times(1.10-1.15)=-10$
* Dividendes : $-50\times(1.10-1.12)=+1$
* Total : $-109$

La filiale a un **actif net** et l’euro s’est **déprécié** ; l’écart de conversion est donc **négatif**. Il réduit les capitaux propres via les OCI ; le résultat net n’est pas affecté.

#### Méthode temporelle {#temporal-method}

La méthode temporelle distingue les postes **monétaires** des postes **non monétaires** :

* Les **postes monétaires** sont la trésorerie, et les droits ou obligations de recevoir ou de payer un **nombre fixe d’unités monétaires**.
* Les **postes non monétaires** sont tout le reste. Ils sont comptabilisés soit au **coût historique**, soit à une **valeur actuelle**.

| | Monétaires | Non monétaires |
| --- | --- | --- |
| **Actifs** | Trésorerie, créances clients | À la valeur actuelle : titres négociables (FVPL). Au coût historique : stocks, immobilisations corporelles, incorporelles |
| **Passifs** | Dettes fournisseurs, charges à payer, dette à long terme, impôts différés passifs | Produits constatés d’avance (presque tous les autres passifs sont monétaires) |

Elle s’applique lorsque la **monnaie fonctionnelle est la même que la monnaie de présentation, mais différente de la monnaie locale** : la filiale est un prolongement de la mère, et ses états sont réévalués comme si la mère avait réalisé elle-même chaque transaction.

**Cours selon la méthode temporelle.**

1. **Actifs et passifs**
   1. Actifs et passifs **monétaires** : le cours de **clôture**.
   2. Postes **non monétaires** évalués au **coût historique** : le cours **historique** à l’acquisition.
   3. Postes **non monétaires** évalués à la **valeur actuelle** : le cours de la date à laquelle cette **valeur actuelle a été déterminée**.
2. **Capitaux propres** : le cours **historique**, **sauf les résultats non distribués**, reconstitués à partir du résultat net et des dividendes.
3. **Produits et charges**
   1. La plupart des produits et charges : le cours **moyen**.
   2. Les charges liées aux **actifs non monétaires**, comme le **coût des ventes, les amortissements et dépréciations** : le cours utilisé pour convertir l’**actif correspondant** (son cours historique).

**Le gain ou la perte de réévaluation va en résultat net**, pas en capitaux propres. Le bilan est réévalué d’abord et les résultats non distribués sont le solde. Le résultat net qu’il implique, diminué du résultat du compte de résultat réévalué, donne le gain ou la perte de réévaluation.

**L’exposition est la position monétaire nette.** Seuls les postes monétaires sont au cours de clôture ; une filiale ayant des **passifs monétaires nets** gagne quand la devise **se déprécie**, et une filiale ayant des **actifs monétaires nets** perd.

Les cours historiques utilisés pour les **stocks et le coût des ventes** dépendent de la méthode de valorisation des stocks :

* **FIFO** : le stock de clôture correspond aux achats les plus récents, donc aux cours **les plus récents** ; le coût des ventes aux cours **plus anciens**.
* **LIFO** : l’inverse. Le stock de clôture est aux cours **plus anciens**, le coût des ventes aux cours plus récents.
* **Coût moyen pondéré** : tous deux au cours moyen pondéré des achats.

**Exemple (méthode temporelle, même filiale).** Supposons maintenant que la monnaie fonctionnelle de la filiale soit l’**USD**. Ses états en EUR sont ceux ci-dessus, avec des charges de EUR 800 composées du coût des ventes 500, des amortissements 100 et d’autres charges 200. Les immobilisations ont été achetées le 1er janvier (cours 1,20), les marchandises vendues à un cours moyen de 1,18 et le stock de clôture à 1,12.

| Bilan | EUR | Cours | USD |
| --- | ---: | ---: | ---: |
| Trésorerie (monétaire) | 300 | 1.10 clôture | 330 |
| Stocks (coût historique) | 400 | 1.12 historique | 448 |
| Immobilisations (coût historique) | 900 | 1.20 historique | 1 080 |
| **Total actif** | **1 600** | | **1 858** |
| Passifs (monétaires) | 450 | 1.10 clôture | 495 |
| Actions ordinaires | 1 000 | 1.20 historique | 1 200 |
| **Résultats non distribués** (solde) | 150 | | **163** |

| Compte de résultat | EUR | Cours | USD |
| --- | ---: | ---: | ---: |
| Chiffre d’affaires | 1 000 | 1.15 moyen | 1 150 |
| Coût des ventes | (500) | 1.18 historique | (590) |
| Amortissements | (100) | 1.20 historique | (120) |
| Autres charges | (200) | 1.15 moyen | (230) |
| Résultat avant réévaluation | | | 210 |
| **Gain de réévaluation** | | | **9** |
| **Résultat net** | **200** | | **219** |

Le résultat net doit être $163+56=219$ (RE de clôture plus dividendes, puisque le RE d’ouverture est nul) ; le gain de réévaluation est donc $219-210=9$. La filiale a des **passifs monétaires nets** ($300-450=-150$ euros) et l’euro s’est **déprécié** ; la réévaluation est donc un **gain**, et elle va en **résultat net**.

| | Méthode du cours de clôture | Méthode temporelle |
| --- | ---: | ---: |
| Résultat net | 230 | 219 |
| Total actif | 1 760 | 1 858 |
| Écart de conversion | CTA $-109$, en OCI | Gain de réévaluation $+9$, en RN |
| Exposition | Actif net (EUR 1 150) | Passifs monétaires nets (EUR 150) |

La même filiale et les mêmes cours donnent une **perte en capitaux propres** selon la méthode du cours de clôture et un **gain en résultat net** selon la méthode temporelle. La monnaie fonctionnelle, qui relève du jugement de la direction, décide ce que la mère publie.

#### Exposition du bilan

Les postes convertis au cours de **clôture** sont réévalués à chaque période à mesure que le cours varie ; ils sont donc **exposés** aux écarts de conversion. Les postes convertis aux cours **historiques** ne le sont pas : leur montant converti ne change jamais. L’exposition de bilan (de conversion) est la différence entre les actifs exposés et les passifs exposés :

* **Exposition d’actif net** : les actifs exposés dépassent les passifs exposés.
* **Exposition de passif net** : les passifs exposés dépassent les actifs exposés.

C’est l’équivalent, pour la conversion, du [risque de transaction](#foreign-currency-transactions) sur une créance ou une dette isolée :

| Exposition de bilan | La devise (FC) se renforce | La devise (FC) s’affaiblit |
| --- | --- | --- |
| **Actif net** | Écart de conversion positif | Écart de conversion négatif |
| **Passif net** | Écart de conversion négatif | Écart de conversion positif |

**Les postes exposés dépendent de la méthode :**

| | Méthode du cours de clôture | Méthode temporelle |
| --- | --- | --- |
| **Postes exposés** | **Tous** les actifs et passifs | Seulement les actifs et passifs **monétaires** (et les postes non monétaires à la valeur actuelle) |
| **Exposition habituelle** | **Actif net** : actifs − passifs = capitaux propres, positifs pour toute filiale solvable | En général **passif net** : les passifs monétaires (dettes fournisseurs, dette financière) dépassent souvent les actifs monétaires (trésorerie, créances), car stocks et immobilisations sont aux cours historiques |
| **La devise se renforce** | Ajustement positif : le **CTA augmente** (OCI) | En général une **perte de réévaluation** (RN) |
| **La devise s’affaiblit** | Ajustement négatif : le CTA diminue | En général un **gain de réévaluation** (RN) |

Dans l’exemple en euros ci-dessus, l’euro s’est **affaibli** : selon la méthode du cours de clôture, l’exposition d’actif net de EUR 1 150 a donné un CTA de $-109$, tandis que selon la méthode temporelle, l’exposition de passif monétaire net de EUR 150 a donné un **gain** de réévaluation de $+9$.

> [!Note]
>
> La méthode peut **inverser le signe** de l’effet. Une mère peut réduire son exposition en adossant les actifs exposés de la filiale à des passifs exposés, p. ex. en la finançant par de la dette en devise étrangère : une **couverture de bilan**.

### Environnement hyperinflationniste

**Définition.** Les US GAAP définissent une économie **hyperinflationniste** comme une économie dont l’**inflation cumulée sur trois ans atteint environ 100 % ou plus** (environ 26 % par an). Les IFRS ne fixent pas de seuil strict : elles énumèrent des indicateurs, comme la préférence de la population pour détenir son patrimoine dans une devise étrangère stable, un taux cumulé sur trois ans proche ou supérieur à 100 % étant l’un d’eux.

**Le problème.** Dans une économie hyperinflationniste, la monnaie locale perd rapidement de sa valeur face aux devises stables. Si les actifs au coût historique de la filiale étaient simplement convertis au **cours de clôture**, ils fondraient chaque année dans la monnaie de la mère, alors que les actifs eux-mêmes n’ont pas changé : c’est le problème de l’**« usine qui disparaît »**. Pour cette raison, la monnaie fonctionnelle **ne détermine plus** la méthode, et la conversion directe par la méthode du cours de clôture **n’est pas permise**.

| | IFRS (IAS 29) | US GAAP |
| --- | --- | --- |
| **Étape 1** | **Retraiter** les états en monnaie locale de l’inflation locale, avec un indice général des prix | Pas de retraitement de l’inflation |
| **Étape 2** | **Convertir** tous les postes au cours de **clôture** | **Méthode temporelle**, comme si la monnaie de la mère était la monnaie fonctionnelle |
| **Gain ou perte** | **Gain ou perte net(te) de pouvoir d’achat**, en résultat net | Gain ou perte de réévaluation, en résultat net |

**Fonctionnement du retraitement IFRS.**

* Les **postes non monétaires** (stocks, immobilisations, capitaux propres) sont retraités de la variation de l’indice des prix entre la **date d’acquisition** (ou d’apport) et la **date de clôture**.
* Les **postes monétaires** (trésorerie, créances, dettes, dette financière) **ne sont pas retraités** : ils sont déjà exprimés en pouvoir d’achat courant.
* Les **postes du compte de résultat** sont retraités de la date de chaque transaction à la date de clôture.
* Détenir des **actifs** monétaires pendant l’inflation fait perdre du pouvoir d’achat ; devoir des **passifs** monétaires en fait gagner. Le montant net est le **gain ou la perte de pouvoir d’achat**, en résultat net.

C’est pourquoi le retraitement est **proche de la méthode temporelle** : dans les deux cas, les postes non monétaires conservent leur valeur et seule la position monétaire nette produit un gain ou une perte.

**Exemple (retraitement, illustratif).** Le 1er janvier, une mère américaine crée une filiale dans une économie hyperinflationniste avec un capital de LC 1 500, investi en terrain (LC 1 000) et en trésorerie (LC 500). Aucune transaction n’a lieu pendant l’année. L’indice général des prix double, de 100 à 200, et la monnaie locale perd la moitié de sa valeur, de USD 1,00 à USD 0,50 par LC.

Les IFRS retraitent les postes non monétaires par $200/100=2$ et convertissent tout au cours de clôture de 0,50. Les US GAAP utilisent la méthode temporelle : trésorerie au cours de clôture (0,50), terrain et capital au cours historique (1,00).

| 31 décembre | LC | IFRS : LC retraitées | IFRS : USD | US GAAP : USD |
| --- | ---: | ---: | ---: | ---: |
| Trésorerie (monétaire) | 500 | 500 | 250 | 250 |
| Terrain (non monétaire) | 1 000 | 2 000 | 1 000 | 1 000 |
| **Total actif** | **1 500** | **2 500** | **1 250** | **1 250** |
| Capital | 1 500 | 3 000 | 1 500 | 1 500 |
| **Perte en RN** | — | **(500)** | **(250)** | **(250)** |

* **Le terrain conserve sa valeur** : USD 1 000 selon les deux référentiels. Convertir les LC 1 000 non retraitées au cours de clôture n’aurait donné que USD 500 : l’usine qui disparaît.
* **La trésorerie perd de la valeur** : détenir LC 500 pendant que les prix doublent fait perdre LC 500 de pouvoir d’achat, soit USD 250 au cours de clôture. La méthode temporelle donne la même perte, car le cours de change a baissé au rythme de l’inflation.

### Questions d’analyse

La conversion modifie les **ratios** que l’analyste calcule à partir des états consolidés. L’effet dépend de la conversion du numérateur et du dénominateur au **même** cours ou non.

**Selon la méthode du cours de clôture**, tous les postes du bilan sont au cours de clôture et tous ceux du compte de résultat au cours moyen :

| Type de ratio | Ratio | Formule | Effet quand la LC se déprécie | Pourquoi |
| --- | --- | --- | --- | --- |
| Bilan pur | **Ratio de liquidité générale** | Actifs courants / passifs courants | Identique | Tous deux au cours de clôture |
| Bilan pur | **Levier financier** | Total actif / capitaux propres, ou dette / capitaux propres | Identique | Les capitaux propres sont le solde, donc égaux à l’actif net au cours de clôture |
| Compte de résultat pur | **Marge nette** | RN / chiffre d’affaires | Identique | Tous deux au cours moyen |
| Mixte | **Rotation de l’actif** | Chiffre d’affaires / total actif | **Plus élevé** | Poste de résultat au cours moyen sur un poste de bilan au cours de clôture plus bas |
| Mixte | **ROA** | RN / total actif | **Plus élevé** | Même raison |
| Mixte | **ROE** | RN / capitaux propres | **Plus élevé** | Même raison |

Un ratio mixte est le ratio en LC multiplié par $\frac{\text{Average rate}}{\text{Current rate}}$. Quand la LC **se déprécie** au cours de l’année, le cours de clôture est inférieur au cours moyen, si bien que les ratios mixtes augmentent ; quand elle **s’apprécie**, ils baissent. Dans l’[exemple en euros](#current-rate-method) (moyen 1,15, clôture 1,10), la rotation de l’actif passe de $1{,}000/1{,}600=0.625$ en EUR à $1{,}150/1{,}760=0.653$ en USD, tandis que la marge nette reste à $200/1{,}000=230/1{,}150=20\%$.

**Selon la méthode temporelle**, chaque poste utilise son propre cours ; l’effet sur chaque ratio doit donc être **analysé au cas par cas**. Comparaison des deux méthodes quand la **LC se déprécie** (cours historiques au-dessus du cours moyen, lui-même au-dessus du cours de clôture) :

| Ratio | Formule | Méthode qui donne le ratio le plus élevé | Pourquoi |
| --- | --- | --- | --- |
| **Ratio de liquidité générale** | Actifs courants / passifs courants | **Temporelle** | Les stocks sont au cours historique plus élevé selon la méthode temporelle ; tout le reste est au cours de clôture dans les deux |
| **Ratio de liquidité immédiate** | (Trésorerie + créances + titres négociables) / passifs courants | Identique | Tout est monétaire, donc au cours de clôture dans les deux |
| **Rotation des créances** | Chiffre d’affaires / créances | Identique | Chiffre d’affaires au cours moyen et créances au cours de clôture dans les deux |
| **Rotation des immobilisations** | Chiffre d’affaires / immobilisations | **Cours de clôture** | Les immobilisations sont au cours historique plus élevé selon la méthode temporelle ; le dénominateur est donc plus grand |
| **Marge brute** | (Chiffre d’affaires − coût des ventes) / chiffre d’affaires | Incertain | Le coût des ventes est aux cours historiques selon la méthode temporelle ; lesquels dépend de FIFO, LIFO ou du coût moyen |
| **Rotation des stocks** | Coût des ventes / stocks | Incertain | Tous deux aux cours historiques selon la méthode temporelle, mais de périodes différentes |
| **Couverture des intérêts** | EBIT / charges d’intérêts | Incertain | L’EBIT comprend le coût des ventes et les amortissements aux cours historiques selon la méthode temporelle |
| **Marge nette, ROA, ROE** | RN / chiffre d’affaires, actifs ou capitaux propres | Incertain | Le RN temporel comprend le gain ou la perte de réévaluation, qui peut aller dans les deux sens |

Dans l’exemple en euros, en considérant tous les passifs comme courants : le ratio de liquidité générale est de $770/495=1.56$ selon la méthode du cours de clôture et de $778/495=1.57$ selon la méthode temporelle ; la rotation des immobilisations est de $1{,}150/990=1.16$ contre $1{,}150/1{,}080=1.06$ ; et la marge brute de $50.0\%$ contre $48.7\%$ (coût des ventes de 575 au cours moyen contre 590 aux cours historiques).

> [!Note]
>
> Quand la LC **s’apprécie**, chaque « plus élevé » de la comparaison ci-dessus devient « plus bas ». Avant de comparer une multinationale à un pair national, vérifiez la méthode de chaque filiale et le sens dans lequel sa monnaie a évolué.

#### Taux d’imposition effectifs

Une multinationale paie des impôts dans plusieurs juridictions ; son **taux d’imposition effectif** (charge d’impôt / résultat avant impôt) est donc une moyenne pondérée des taux auxquels elle est soumise. Le **rapprochement des taux d’imposition** dans les notes explique l’écart entre le taux légal de la mère et le taux effectif, y compris l’effet des taux étrangers.

Les variations du taux effectif dues aux impôts étrangers peuvent provenir :

* De **changements des taux applicables** dans les juridictions où l’entreprise opère
* De **changements dans la répartition des bénéfices** entre juridictions : plus de bénéfices dans des pays à faible imposition abaissent le taux effectif même si aucun taux ne change

Pour prévoir le taux d’imposition, prévoyez **où** les bénéfices seront réalisés, et pas seulement combien. Une baisse du taux effectif due à un déplacement des bénéfices vers des juridictions à faible imposition peut ne pas durer, par exemple si les règles fiscales changent.

#### Informations sur la croissance des ventes

La croissance publiée des ventes d’une multinationale mêle deux choses : la variation des ventes en monnaies locales et la variation des cours de change utilisés pour les convertir. Les entreprises publient donc souvent la croissance **hors** effet de change, comme croissance **organique** ou **à taux de change constants** :

$$(1+\text{Reported growth})=(1+\text{Growth in local currency})\times(1+\text{Currency effect})$$

**Exemple.** Les ventes progressent de 5 % en monnaie locale, et les devises étrangères se renforcent de 3 % face à la monnaie de présentation : la croissance publiée est de $1.05\times1.03-1=8.15\%$. Sur ce total, seuls les 5 % reflètent la **performance réelle** (volume et prix) ; le reste échappe au contrôle de la direction et peut s’inverser l’an prochain.

Les analystes doivent fonder leurs prévisions et comparaisons sur la croissance **hors effets de change**, et traiter l’effet de change à part. Certaines entreprises publient aussi la croissance des ventes ventilée en **volume, prix et change** ; celles qui bénéficient d’un fort vent porteur de change peuvent préférer mettre en avant la croissance publiée.
