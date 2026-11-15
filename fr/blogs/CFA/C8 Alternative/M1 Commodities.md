---
title: "Matières premières"
---

# Matières premières

Les secteurs des matières premières et leurs cycles de vie ; en quoi leur évaluation diffère de celle des actions et des obligations ; qui négocie les futures sur matières premières ; la relation entre comptant et futures (contango et backwardation) ; trois théories du rendement des futures ; les composantes du rendement d’un futures entièrement collatéralisé ; les swaps sur matières premières ; et comment la construction d’un indice détermine son rendement. (Titre 2026 : *Introduction to Commodities and Commodity Derivatives*.)

| Terme | Signification |
| --- | --- |
| **Base** | Prix au comptant − prix du futures |
| **Spread calendaire** | Prix du futures proche − prix du futures éloigné (même matière première) |
| **Backwardation (déport)** | Comptant au-dessus des futures (ou proche au-dessus de l’éloigné) : base et spread calendaire positifs |
| **Contango (report)** | Comptant en dessous des futures (ou proche en dessous de l’éloigné) : base et spread calendaire négatifs |
| **Rendement d’opportunité** | L’avantage de détenir un stock physique comme tampon contre les ruptures d’approvisionnement ; **élevé quand les stocks sont rares** |
| **Rendement de roulement** | Le gain ou la perte lié à la clôture d’un contrat arrivant à échéance et à l’ouverture d’un contrat plus éloigné |
| **Rendement du collatéral** | Les intérêts perçus sur la trésorerie ou les bons du Trésor détenus en garantie d’une position futures |
| **Entièrement collatéralisé** | Collatéral = valeur notionnelle du futures : pas d’effet de levier |

## Notions de base

### Secteurs

Le Bloomberg Commodity Index répartit les matières premières en six secteurs :

* **Énergie** : pétrole brut, gaz naturel, charbon et produits raffinés (essence, fioul domestique).
* **Métaux industriels (de base)** : cuivre, aluminium, nickel, zinc, plomb, étain, fer.
* **Métaux précieux** : or, argent, platine (réserves de valeur avec un usage industriel).
* **Céréales** : maïs, soja, blé, riz (alimentation, aliments pour animaux et biocarburants comme l’éthanol).
* **Softs** (cultures de rente) : coton, cacao, sucre, café.
* **Bétail** : porcs, bovins, ovins, volailles.

L’analyse fondamentale décrit chaque secteur en termes de **stocks** (offre et demande potentielles : gisements, terres agricoles, taille des cheptels, capacité de fonderie) et de **flux** (comment ce stock est utilisé : météo, oléoducs, maladies, politiques, croissance du PIB), plus le calendrier (saisons, logistique, chocs) et les flux financiers (sentiment, taux d’intérêt, subventions).

| Principales influences | Énergie | Métaux de base | Métaux précieux | Céréales | Softs | Bétail |
| --- | --- | --- | --- | --- | --- | --- |
| Taille et croissance du PIB | ✓ | ✓ | ✓ | | ✓ | ✓ |
| Météo | ✓ | | | ✓ | ✓ | ✓ |
| Préférences des consommateurs | | | | ✓ | ✓ | ✓ |
| Revenu des consommateurs | | | | | ✓ | ✓ |
| Croissance démographique | | | | ✓ | | |
| Substitution par les biocarburants | | | | ✓ | ✓ | |
| Maladies | | | | ✓ | ✓ | ✓ |
| Politique monétaire, masse monétaire | | | ✓ | | | |
| Géopolitique | ✓ | | ✓ | | | |
| Politique industrielle et environnementale, infrastructures | ✓ | ✓ | | | | |

> [!IMPORTANT]
> Classiques de l’examen : l’activité industrielle détermine le **cuivre** (le gaz naturel dépend surtout de la météo, les softs surtout du revenu). Les métaux précieux sont les **moins** sensibles à la météo à court terme, car ils se stockent facilement.

### Cycles de vie

* Le cycle de production reflète, et **amplifie**, les variations du stockage, de la météo et des événements politiques ou économiques.
* Un cycle **court** permet de s’adapter assez vite aux événements extérieurs ; un cycle **long** limite la vitesse de réaction de l’offre ou de la demande.
* L’agriculture et l’élevage ont des saisons bien définies qui diffèrent selon les régions (hémisphère Nord ou Sud). L’énergie et les métaux sont extraits **toute l’année** ; leur saisonnalité vient surtout de la demande de produits (essence l’été, fioul l’hiver).

| Secteur | Points clés du cycle de vie |
| --- | --- |
| **Énergie** | Le gaz naturel est utilisable presque aussitôt extrait (le gaz d’été est souvent stocké pour l’hiver) ; le pétrole brut est inutilisable avant d’être **raffiné** (« craquage »). Raffineries et oléoducs sont très coûteux, et les oléoducs sont souvent coupés en cas de conflit |
| **Métaux** | Le cycle le plus **souple** : minerai et métal se stockent des mois ou des années sans se dégrader. Les énormes économies d’échelle de la fonderie rendent difficile la baisse de la production quand l’offre dépasse la demande ; les nouvelles capacités arrivent souvent juste quand la demande baisse |
| **Bétail** | La volaille arrive à maturité en quelques semaines, les porcs en 6 mois environ, les bovins en quelques années (broutards → bovins finis en parc d’engraissement). Le bétail américain a historiquement été le **moins tourné vers l’export**, car la viande se gâte après l’abattage (la congélation change cela) |
| **Céréales** | Semis → croissance → formation des gousses, épis ou panicules → récolte ; stockées toute l’année en silos, exposées aux moisissures et aux nuisibles |
| **Softs** | P. ex. le café est récolté quelque part toute l’année près de l’équateur ; le robusta se négocie à Londres et l’arabica à New York, en grains « verts » non torréfiés livrés en entrepôts sous douane |

### Évaluation : comparaison avec les actions et les obligations

| | Actions et obligations | Matières premières |
| --- | --- | --- |
| Nature | Actifs financiers : créances sur la production économique | Presque toujours des actifs **physiques** (exceptions : électricité, météo) |
| Flux | Dividendes, coupons | **Aucun** ; les détenir physiquement **coûte** stockage et transport |
| Évaluation | VA des flux attendus | Prévision des prix à partir de l’**offre et la demande** et de la volatilité attendue |
| Principal accès pour les investisseurs | Détenir le titre | Surtout des **dérivés** (futures, swaps) à durée de vie finie |

Les coûts de stockage et de transport façonnent la courbe à terme : coûts de stockage élevés → les prix des futures augmentent avec l’échéance ; une forte demande actuelle peut pousser le comptant au-dessus des futures. Lorsque certains participants ne peuvent ni livrer ni prendre livraison, l’arbitrage ne maintient l’écart comptant–futures que dans une **fourchette**, et non à un niveau fixe.

### Participants au marché

* Les **couvreurs** négocient pour couvrir leur exposition aux matières premières. Couvrir ne veut pas dire acheter, ni spéculer vendre : un fabricant de snacks se couvre en **achetant** du maïs ; une mine d’or en **vendant** de l’or ; une compagnie pétrolière intégrée peut spéculer à l’achat, et un CTA à la vente.
* **Négociateurs et investisseurs** :
  * Les **investisseurs informés** (couvreurs et spéculateurs, y compris investisseurs indiciels et institutionnels) pensent avoir un avantage informationnel.
  * Les **apporteurs de liquidité** interviennent quand producteurs et consommateurs ne sont pas présents en même temps ; ils **assurent en fait les couvreurs**, contre un gain attendu.
  * Les **arbitragistes** disposant de stockage (entrepôts, silos, parcs d’engraissement) exploitent les écarts de prix entre la matière physique (plus coûts de stockage et de financement) et le prix du futures.
* Les **bourses** (avec leurs chambres de compensation) fixent les règles et fournissent l’infrastructure : CME et ICE (États-Unis), B3 (Brésil), LME (métaux industriels, détenu par HKEX), Dalian, Shanghai, Tokyo.
* Les **analystes** ne prennent pas de positions (chercheurs, concepteurs de produits, décideurs publics, courtiers).
* **Régulateurs** : la CFTC aux États-Unis (qui délègue une grande part de la surveillance à la NFA) ; la plupart des autres pays ont un régulateur unique (p. ex. la China Securities Regulatory Commission) ; l’ESMA et MiFID II dans l’UE ; l’OICV (IOSCO) coordonne au niveau international.

> [!NOTE]
> Les marchés de futures sont **à somme nulle** (positions longues = positions courtes), contrairement aux marchés d’actions et d’obligations, où les investisseurs sont nets acheteurs. Vendre des futures est plus simple que vendre des actions à découvert : pas d’emprunt, pas de dividendes à rembourser, et la même marge qu’à l’achat.

## Prix au comptant et prix des futures

* Le **prix au comptant** est le prix actuel pour livrer ou recevoir une matière physique à un endroit précis : très **local**.
* Le **prix du futures** est convenu aujourd’hui pour livrer une quantité et une qualité standard à une date future : mondial ou régional, standardisé et public.
* **Base** = comptant − futures ; **spread calendaire** = futures proche − futures éloigné. La **backwardation** (comptant ou proche au-dessus des futures ou de l’éloigné) donne une base et un spread positifs ; le **contango** des valeurs négatives.
* P. ex. WTI à 65,50 USD pour juillet et 64,00 USD pour décembre → spread calendaire **+1,50 USD** (backwardation). Porcs maigres à 95 ¢ pour juillet et 96 ¢ pour août → spread **−1 ¢** (contango).
* Les courbes peuvent passer du contango à la backwardation, surtout en période de tension ou de changement structurel.

**Règlement.**

* Le **règlement en espèces** a attiré davantage de spéculateurs et d’arbitragistes, et permis aux couvreurs de transférer le risque de prix sans livraison.
* Le **règlement physique** fait converger les futures vers le comptant ; les marchés réglés en espèces peuvent ne pas converger complètement (à cause des coûts de transaction).
* Qualité et variété comptent : le robusta ne peut pas être livré contre un contrat d’arabica, et certains contrats appliquent primes ou décotes selon l’origine ou l’emplacement de l’entrepôt.

## Théories du rendement des futures

### Théorie de l’assurance

La **backwardation normale** de Keynes :

* Un producteur est naturellement long du bien physique ; il **vend des futures** pour verrouiller son revenu.
* Les ventes persistantes des producteurs poussent les futures **sous** le comptant ; la décote rémunère le spéculateur qui fournit l’assurance-prix.
* La courbe est donc en **backwardation**, et les spéculateurs acheteurs obtiennent un rendement excédentaire positif à mesure que le prix du futures monte vers le comptant. P. ex. acheter le coton d’octobre à 74,50 ¢ quand le premier mois est à 76,75 ¢ → +2,25 ¢ par livre, × 50 000 livres = 1 125 USD par contrat, si les prix du premier mois ne changent pas.
* Les preuves sont faibles : Kolb (1992) a constaté que « la backwardation normale n’est pas normale ». La backwardation ne donne pas de façon fiable des rendements positifs, ni le contango des rendements négatifs.

### Hypothèse de la pression de couverture

Producteurs (vendeurs de futures) et consommateurs (acheteurs de futures) se couvrent :

| Pression de couverture | Courbe |
| --- | --- |
| Producteurs = consommateurs | **Plate** : les besoins de couverture se compensent, aucune décote n’est nécessaire pour attirer les spéculateurs |
| Producteurs > consommateurs | **Backwardation** (comme chez Keynes) : les spéculateurs n’achètent qu’avec une décote |
| Consommateurs > producteurs | **Contango** : les acheteurs font monter les futures pour inciter les spéculateurs à vendre |

Limites : les producteurs ont en général une exposition au prix plus concentrée que des consommateurs dispersés ; les deux côtés spéculent parfois (p. ex. Metallgesellschaft, 1993) ; et la pression de couverture est très difficile à mesurer.

### Théorie du stockage

Kaldor (1939) : le niveau des stocks façonne la courbe.

$$
\begin{aligned}
\text{Futures price}={}&\text{Spot price}\\
&+\text{Storage costs}\\
&-\text{Convenience yield}
\end{aligned}
$$

* Une matière régulièrement stockée (l’offre domine) → les coûts de stockage dominent → **contango**.
* Juste à temps, peu de stocks (la demande domine) → le rendement d’opportunité domine → **backwardation**.
* Le rendement d’opportunité est **faible quand les stocks sont abondants** et **augmente quand ils diminuent**. P. ex. en Libye en 2011, le rendement d’opportunité du brut à échéance proche a bondi alors que les échéances lointaines ont à peine bougé → backwardation.

> [!IMPORTANT]
> La théorie de l’assurance ne prédit que la backwardation ; la pression de couverture prédit une courbe plate, une backwardation **ou** un contango ; la théorie du stockage dépend des coûts de stockage face au rendement d’opportunité. En pratique, coûts de stockage et rendements d’opportunité sont inobservables ou volatils ; les trois théories demandent donc du jugement.

## Composantes du rendement des futures

Le rendement total d’une position de futures sur matières premières **entièrement collatéralisée** :

$$
\begin{aligned}
\text{Total return}={}&\text{Price return}\\
&+\text{Roll return}\\
&+\text{Collateral return}
\end{aligned}
$$

plus un **rendement de rééquilibrage** pour un indice.

* **Rendement de prix** (rendement spot) : la variation du prix du futures, en général le premier mois :

$$
\text{Price return}=\frac{P_{\text{now}}-P_{\text{before}}}{P_{\text{before}}}
$$

* **Rendement de roulement** : clôture du contrat proche et ouverture d’un contrat plus éloigné. Il ne peut pas être capté seul ; c’est un calcul comptable :

$$
\text{Roll return}=\frac{F_{\text{near}}-F_{\text{far}}}{F_{\text{near}}}\times\%\text{ rolled}
$$

* **Rendement du collatéral** : les intérêts sur la trésorerie ou les obligations adossées à la position. Pour les indices, collatéral = notionnel (pas de levier), en général en bons du Trésor ; pour des prévisions à long terme, utiliser une obligation d’État de même durée.

**Exemples.**

* **Roulement du WTI** (le S&P GSCI roule sur cinq jours, 20 % par jour) : mars 52,64 USD, avril 53,00 USD → rendement de roulement brut (52.64 − 53.00)/52.64 = −0,68 % ; × 20 % = **−0,13 %** net (contango).
* **Rendement total** : rendement de prix 5 %, rendement de roulement 2,5 %, collatéral à 100 % rémunéré à 2 % → 5 % + 2,5 % + 2 % = **9,5 %**.
* **Rouler en gardant la même exposition** : position acheteuse de 10 000 USD, contrat proche à 4,00 USD, éloigné à 2,50 USD → vendre 10 000/4,00 = 2 500 contrats proches et acheter 10 000/2,50 = 4 000 contrats éloignés.
* **Backwardation** : proche 80,00 USD, éloigné 78,40 USD, roulé à 100 % ; rendement de prix +4 % sur l’année ; bons du Trésor à 3 % sur collatéral complet → rendement de roulement (80.00 − 78.40)/80.00 = **+2,0 %** ; rendement total 4 % + 2 % + 3 % = **9 %**.

| Courbe | Éloigné vs proche | Pour garder la même exposition | Rendement de roulement |
| --- | --- | --- | --- |
| **Backwardation** | L’éloigné est moins cher | Acheter **plus** de contrats éloignés (p. ex. 110 £ à 10 £ → 11 contrats ; à 9 £ → environ 12) | **Positif** |
| **Contango** | L’éloigné est plus cher | Acheter **moins** de contrats éloignés (p. ex. 108 £ à 9 £ → 12 contrats ; à 10 £ → environ 11) | **Négatif** |

**S&P GSCI, janvier 1970 – mars 2019 :**

| | Total | Spot | Roulement | Collatéral |
| --- | --- | --- | --- | --- |
| Rendement annuel | 6.8% | 3.0% | −1.3% | 5.0% |
| Risque (écart-type) | 19.8% | 19.8% | 4.2% | 1.1% |
| Corrélation avec le total | | 0.97 | −0.11 | −0.14 |

* La volatilité du rendement total vient presque entièrement du rendement de **prix**.
* Sur le long terme, le rendement du collatéral a le plus contribué ; le rendement de roulement a pesé. (Les composantes totalisent 6,7 %, pas 6,8 %, car le total est composé géométriquement.)

### Le rendement de roulement en pratique

* Contango, backwardation et rendements de roulement reflètent les anticipations d’offre et de demande ; aucun de ces états ne **dure** indéfiniment.
* Rendement de roulement et rendement de prix n’ont eu qu’une corrélation d’environ **3 %** : le rendement de roulement ne prédit pas de façon fiable le rendement de prix.
* Ilmanen (2011) soutenait que le rendement de roulement est en gros une prime de risque, mais environ 40 % des matières qu’il a étudiées avaient un rendement de roulement négatif **et** un rendement total positif.
* Les rendements de roulement annuels moyens ont été **négatifs** pour tous les secteurs de l’échantillon : total −1,3 %, énergie −1,5 %, métaux industriels −1,3 %, agriculture −4,5 %, bétail −1,1 %, métaux précieux −5,1 %, softs −5,5 %.
  * Les matières stockées (métaux, céréales, bétail, softs ; l’or est stocké indéfiniment) tendent vers le contango → roulement négatif.
  * Seule l’**énergie** (consommée en temps réel) avait une chance statistique d’un roulement moyen positif, et elle s’est estompée depuis 2010 (schiste américain, Chine premier importateur, OPEP+).
* Le rendement de roulement peut beaucoup compter sur **une seule période**, mais il est resté **modeste** dans le temps par rapport au rendement de prix. Il dépend fortement du **secteur** ; les pondérations sectorielles déterminent donc le rendement de roulement d’un portefeuille.

## Swaps sur matières premières

Un **swap sur matières premières** échange des paiements à plusieurs dates, fondés sur des prix de référence ou des indices de matières premières (souvent une série de futures). Il transfère le risque sans gérer de nombreux contrats futures, et peut être **sur mesure** (qualité ou mélange précis, quantités variables dans le temps, règlement en espèces avec souplesse de livraison). L’intermédiaire peut se couvrir avec des futures, compenser avec un autre intermédiaire, acheter la matière physique ou garder l’exposition.

| Swap | Paiement déterminé par | Utilisateur type |
| --- | --- | --- |
| **Swap de rendement excédentaire** | La variation du prix du futures sous-jacent (souvent par rapport à un niveau fixe) × notionnel | Couvreurs (p. ex. un raffineur) |
| **Swap de rendement total** | La variation du niveau d’un indice : variations des prix des futures **plus** intérêts sur le collatéral ; l’acheteur paie une commission | Institutions recherchant une exposition longue aux matières premières (diversification, couverture de l’inflation, gestion actif-passif) |
| **Swap de base** | L’écart entre deux prix liés mais imparfaitement corrélés (liquide contre peu liquide, p. ex. Brent contre brut lourd du Golfe) | Utilisateurs d’une qualité moins liquide |
| **Swap de variance** | Variance réalisée contre variance fixée ; l’acheteur reçoit si la réalisée dépasse la fixée (souvent plafonné) | Négociateurs de volatilité |
| **Swap de volatilité** | Volatilité réalisée contre volatilité attendue ; le vendeur gagne si la réalisée est inférieure à l’attendue | Négociateurs de volatilité |

**Exemples.**

* **Swap de rendement excédentaire** : un raffineur achète un swap qui lui verse le montant au-dessus de 70 USD le baril à chaque fin de mois, de janvier à septembre, pour une prime de 25 USD (en fait une série de calls). Prix mensuels 70, 75, 71, 66, 65, 63, 66, 72, 78 → gains 5 + 1 + 2 + 8 = 16 USD → net −9 USD (environ 1 USD par baril et par mois), mais le raffineur était protégé contre une flambée des prix et connaissait son coût à l’avance.
* **Swap de rendement total** : notionnel de 100 millions USD, refixation mensuelle. L’indice monte de 3 % → l’intermédiaire verse au gérant **3 millions USD** ; il baisse de 2 % → le gérant verse à l’intermédiaire **2 millions USD**. Les paiements sont périodiques, pas reportés à l’échéance.

## Indices de matières premières

Les indices servent de références, d’indicateurs macroéconomiques et de prévision, et de base aux produits d’investissement. Ils diffèrent par :

* L’**étendue** : le nombre de matières et de secteurs.
* Les **pondérations**, et la façon de les fixer.
* La **méthode de roulement** : elle détermine directement le rendement de roulement.
* La méthode et la fréquence de **rééquilibrage** : elles déterminent le rendement de rééquilibrage.
* La **gouvernance** : règles ou sélection par un comité ; indépendance du prix des actifs, du fournisseur de l’indice et du fournisseur du produit.

| En avril 2019 | S&P GSCI | BCOM | DBLCI | TR/CC CRB | RICI |
| --- | --- | --- | --- | --- | --- |
| Lancement | 1991 | 1998 | 2003 | 2005 (version actuelle) | 1998 |
| Matières premières | 24 | 23 | 14 | 19 | 38 |
| Pondération | *Production* | Production **et liquidité** | Fixe | Fixe | Fixe |
| Roulement | Contrat proche le plus liquide, mensuel | Premier mois vers le suivant ou le deuxième | **Optimisé pour le rendement de roulement** | Premier mois vers le suivant | Premier mois vers le suivant |
| Rééquilibrage | Annuel | Annuel | Annuel | **Mensuel** | **Mensuel** |
| Fonds pour particuliers | Oui | Oui | Oui | Dans certains pays, plus un ETF sur un indice apparenté | Oui |

* **S&P GSCI** : pondéré par la valeur de la production mondiale (comme une pondération par capitalisation) → concentré ; l’énergie a historiquement atteint environ 80 %.
* **BCOM** : sélection par un comité ; plafond sectoriel de 33 %, plancher par matière de 2 % → énergie environ 30 %, mais un poids du gaz naturel plus élevé (environ 9 %, contre environ 3 % dans le GSCI), et le gaz naturel a eu un lourd coût de roulement (environ 19 % par an).
* **DBLCI** : pas de bétail ; roule vers le contrat à moins de 12 mois qui **maximise la backwardation ou minimise le contango** (une décision de roulement active).
* **TR/CC CRB** : prolonge le premier indice investissable (CRB, 1978) ; un comité fixe des pondérations fixes par paliers.
* **RICI** : le plus large (38, dont bois, avoine et caoutchouc) ; certains contrats sont libellés dans d’autres devises que l’USD, ce qui ajoute une exposition de change.

**Rééquilibrage.** Un rééquilibrage fréquent (CRB, RICI) aide sur des marchés **à retour à la moyenne** (vendre les sommets, acheter les creux) mais pénalise sur des marchés **en tendance**. Les indices pondérés par la production (GSCI, BCOM) dérivent avec les prix ; ils se rééquilibrent donc moins et peuvent faire mieux, en tendance, que les indices à pondération fixe rééquilibrés fréquemment.

> [!IMPORTANT]
>
> * Un indice pondéré par la production est **plus** sensible à l’énergie qu’un indice équipondéré.
> * Les indices détenant des contrats habituellement en backwardation tendent à rapporter plus (roulement positif) ; ceux dominés par le contango sont à la traîne.
> * Investir sur de nombreuses bourses apporte peu de diversification : les marchés de matières premières sont très corrélés à l’échelle mondiale. Les grands indices ont été très corrélés entre eux (plus de 70 %), et corrélés à environ 0 % avec les actions et les obligations. Aucune méthode d’indice ne domine.
