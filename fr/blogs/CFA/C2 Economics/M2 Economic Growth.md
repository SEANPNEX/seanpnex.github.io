---
title: Croissance économique
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
    height: 440px;
    margin: 24px 0 30px;
    border: 0;
    border-radius: 24px;
    background: #F0EFEB;
}
/* Starting heights only: each chart reports its rendered height once loaded. */
.fx-concept-chart.dmp-chart { height: 420px; }
.fx-concept-chart.alpha-chart { height: 420px; }
.fx-concept-chart.tfp-chart { height: 480px; }
.fx-concept-chart.solow-chart { height: 500px; }
.fx-concept-chart.solow-s-chart { height: 500px; }
.fx-concept-chart.solow-n-chart { height: 500px; }
@media (max-width: 700px) {
    .fx-concept-chart { height: 500px; }
    .fx-concept-chart.tfp-chart { height: 520px; }
    .fx-concept-chart.solow-chart { height: 520px; }
    .fx-concept-chart.solow-s-chart { height: 520px; }
    .fx-concept-chart.solow-n-chart { height: 530px; }
}
/* The two-panel charts stack their panels on phones. */
@media (max-width: 587px) {
    .fx-concept-chart.dmp-chart { height: 760px; }
    .fx-concept-chart.alpha-chart { height: 770px; }
}
</style>

# Croissance économique

## Pourquoi la croissance économique compte

Pays développés et pays en développement

| Facteur | Développés | En développement |
|--------|-----------|------------|
| Épargne et investissement | Épargne élevée ; canaux d’investissement profonds | Épargne plus faible ; investissement limité |
| Marchés financiers et intermédiaires | Marchés développés et liquides | Marchés moins développés et peu profonds |
| Stabilité politique, État de droit et droits de propriété | Solides et appliqués | Plus fragiles, moins prévisibles |
| Systèmes d’éducation et de santé | Solides ; capital humain élevé | Plus faibles ; capital humain plus bas |
| Fiscalité et réglementation | Efficaces, favorables à la croissance | Inefficaces, souvent pesantes |
| Libre-échange et libre circulation des capitaux | Commerce ouvert et mobilité des capitaux | Commerce et flux de capitaux souvent restreints |

La croissance potentielle compte pour les investisseurs en actions :
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$

Comment lire ces lignes :

* Ligne 1 : le rendement attendu d’une action est la somme du revenu (dividende) et de la plus-value.
* Ligne 2 : cette plus-value se décompose en variation de valorisation (réévaluation du $P/E$) et en croissance des bénéfices.
* Lignes 3–4 : la croissance du BPA est liée à la trajectoire macroéconomique — inflation $i$ et croissance réelle $g$ — plus un terme nombre d’actions / composition des bénéfices $\Delta S$ (rachats d’actions et dynamisme relatif, c’est-à-dire si les bénéfices des entreprises croissent plus vite ou moins vite que l’économie dans son ensemble).

Une croissance réelle potentielle $g$ plus forte augmente donc la composante bénéfices de $E(Re)$, avant même toute variation des multiples.



La croissance potentielle compte aussi pour les investisseurs obligataires :

* Une croissance plus forte se traduit par des taux d’intérêt et des rendements attendus plus élevés
* Une meilleure qualité de crédit en général
* Un risque de crédit réduit
* Des effets sur la politique publique et l’équilibre budgétaire

## Fonction de production

La fonction de production est définie par
$$
\begin{align}
Y&=Af(K,L)\\
&=AK^{\alpha}L^{1-\alpha}
\end{align}
$$
où $K$ est le facteur capital et $L$ le facteur travail. $A$ est la productivité globale des facteurs, qui représente en général la technologie. $Y$ est la production totale. $\alpha$ est la part du PIB versée aux apporteurs de capital.

Pour le PIB par habitant,
$$
\begin{align}
y&=\frac{Y}{L}\\
&=AK^{\alpha}L^{-\alpha}\\
&=A(\frac{K}{L})^{\alpha}\\
&=Ak^{\alpha}
\end{align}
$$
> [!Note]
> $$
> Y = \frac{Y}{L}L = yL
> $$

On obtient le taux de croissance en prenant le logarithme des deux membres :
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
> [!Note]
>
> Cette étape n’est pas rigoureuse mathématiquement. Il suffit de la prendre comme une formulation économique.

Pour le taux de croissance par habitant, la démarche est la même :
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
> [!note]
>
> De même, la même étape appliquée à la troisième formule donne :
> $$
> =\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}
> $$

### Calcul de $\alpha$

Rappel : pour maximiser la production par rapport au capital, on dérive pour obtenir la productivité marginale du capital (MPK) :
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
L’optimum est atteint lorsque la MPK est égale au prix de location du capital (coût marginal), noté $r$ :
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

### Caractéristiques de la fonction de production

La fonction de production présente deux caractéristiques importantes :

* Des rendements d’échelle constants
* Une productivité marginale décroissante : la production supplémentaire obtenue grâce à un intrant additionnel diminue
* Par habitant, un $\alpha$ plus faible renforce l’effet de productivité marginale décroissante.
* Une hausse de $A$ déplace la fonction vers le haut (et atténue l’effet de productivité marginale décroissante)

#### Rendements d’échelle constants

Multiplier les deux intrants par le même facteur (ici, doubler $K$ et $L$) :
$$
K \to 2K,\quad L \to 2L
$$
Alors
$$
\begin{align}
A(2K)^{\alpha}(2L)^{1-\alpha}
&= 2^{\alpha}\,2^{1-\alpha}\,AK^{\alpha}L^{1-\alpha}\\
&= 2^{\alpha+(1-\alpha)}AK^{\alpha}L^{1-\alpha}\\
&= 2AK^{\alpha}L^{1-\alpha}\\
&= 2Y.
\end{align}
$$
Doubler les intrants double la production : la fonction de production a des rendements d’échelle constants.
#### Productivité marginale décroissante

<iframe
  class="fx-concept-chart dmp-chart"
  src="/charts/diminishing-marginal-productivity.html"
  loading="lazy"
  title="Productivité marginale décroissante"
></iframe>
À travail constant, chaque unité de capital supplémentaire augmente la production moins que la précédente : la courbe de production s’aplatit et $\mathrm{MPK}=\alpha A k^{\alpha-1}$ baisse quand $k$ augmente. La même logique vaut pour le travail : à capital constant, $\mathrm{MPL}=(1-\alpha)A(K/L)^{\alpha}$ diminue quand $L$ augmente, si bien que chaque travailleur supplémentaire ajoute moins de production que le précédent. C’est pourquoi l’approfondissement du capital seul ne peut pas soutenir la croissance de long terme de la production par habitant sans croissance de $A$.

#### Par habitant, un $\alpha$ plus faible renforce l’effet de productivité marginale décroissante.

Rappel : $y = Ak^{\alpha}$,

D’après la fonction de production par habitant ci-dessus,

$$
y = Ak^{\alpha}.
$$

En dérivant par rapport à l’intensité capitalistique, on obtient la productivité marginale du capital par travailleur (même idée que le graphique de la MPK sous Productivité marginale décroissante) :

$$
\frac{dy}{dk} = \alpha A k^{\alpha-1}.
$$

En passant aux logarithmes puis en dérivant, on retrouve la décomposition de la croissance déjà vue dans cette note :

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k}.
$$

L’élasticité de $y$ par rapport à $k$ vaut donc exactement $\alpha$ : une hausse de 1 % de $k$ augmente $y$ de $\alpha\%$. La pente $\alpha A k^{\alpha-1}$ a pour exposant $\alpha-1<0$ ; plus $\alpha$ est petit, plus $\alpha-1$ est négatif, et plus la pente baisse vite quand $k$ augmente.

Un $\alpha$ plus faible signifie donc une contribution plus faible de l’approfondissement du capital à la croissance ($\alpha\,dk/k$ est plus petit) et une courbe $y(k)$ plus concave dont la MPK s’estompe plus tôt — une productivité marginale décroissante plus forte de l’intensité capitalistique.

<iframe
  class="fx-concept-chart alpha-chart"
  src="/charts/alpha-diminishing-productivity.html"
  loading="lazy"
  title="Un α plus faible courbe plus tôt la fonction de production"
></iframe>
#### Une hausse de $A$ déplace la fonction vers le haut

À partir de la même fonction par habitant $y = Ak^{\alpha}$ et de la décomposition de la croissance

$$
\frac{dy}{y} = \frac{dA}{A} + \alpha\frac{dk}{k},
$$

la production par travailleur peut augmenter de deux façons distinctes, $\alpha$ restant fixe. Se déplacer le long d’une courbe donnée ($k$ plus élevé, même $A$), c’est l’approfondissement du capital — le terme $\alpha\,dk/k$. Un déplacement parallèle de toute la courbe vers le haut ($A$ plus élevé, même $k$), c’est une hausse de la PGF — le terme $dA/A$. Ce déplacement augmente $y$ à toute intensité capitalistique et atténue donc la vitesse à laquelle la productivité marginale décroissante bride la croissance tirée par le seul approfondissement du capital.

<iframe
  class="fx-concept-chart tfp-chart"
  src="/charts/tfp-shift-capital-deepening.html"
  loading="lazy"
  title="Approfondissement du capital et hausse de la PGF"
></iframe>

>[!Important]
>
>* Approfondissement du capital : augmenter $k=\frac{K}{L}$.
>* L’approfondissement du capital devient inutile lorsque $MPK=r$.

Prolonger la fonction de production :

* Ressources naturelles : renouvelables et non renouvelables. Posséder et produire des ressources naturelles n’est pas nécessaire pour qu’un pays atteigne un revenu élevé. **Syndrome hollandais** : l’appréciation de la monnaie due à une forte demande d’exportations de ressources rend les autres secteurs de l’économie non compétitifs.

* Offre de travail :

  * Croissance démographique (fécondité, mortalité, structure par âge)
  * Taux d’activité
  * Immigration nette
  * Durée moyenne du travail

* Capital humain :

  * Éducation, formation ou expérience de vie
  * L’éducation a des effets d’entraînement (externalités)
  * L’éducation favorise la croissance par l’innovation (hausse de $A$).

* Capital TIC et non TIC :

  * Les dépenses en équipements d’information, d’informatique et de télécommunications créent des externalités de réseau qui augmentent la productivité.
  * Non TIC : construction non résidentielle, matériel de transport et machines.
* Technologie : capital humain + capital TIC/non TIC
* Infrastructures publiques

## Théories de la croissance

Les théories de la croissance étudient $\frac{dy}{y}$, la vitesse de croissance du PIB par habitant.

Rappel des formules ci-dessus :
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha\frac{dk}{k},\qquad \frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
$$

> [!note]
>
> D’après la formule ci-dessus, le second sens de $\alpha$ est l’élasticité de la production par rapport au capital.

### Théorie classique de la croissance (Malthus)

L’hypothèse clé est que $L$ et $Y$ vont augmenter, et que la hausse de $Y$ augmentera encore $L$ : progrès technique $\to$ productivité du travail $\uparrow$ $\to$ croissance démographique plus forte $\to$ rendements marginaux décroissants du travail $\to$ retour du revenu par habitant.

Ainsi, pour $y$, le progrès technique produit à long terme une population plus nombreuse mais pas plus riche. La production par habitant ne croît pas.

### Théorie néoclassique de la croissance (Robert Solow)

Toutes les hypothèses ci-dessous portent sur l’état d’**équilibre de long terme** de l’économie. Le but du modèle est de trouver $(k,y)$ une fois cet état atteint.

À long terme, le taux de croissance de $y$ dépend :

* du taux d’épargne/d’investissement $s$
* du rythme du progrès technique $\theta=\frac{dA}{A}$
* du taux de croissance démographique $n=\frac{dL}{L}$

**Supposons qu’à long terme $\frac{Y}{K}$ reste constant** : alors $\frac{Y/L}{K/L}$ l’est aussi, donc $\frac{y}{k}$ également. D’où $\frac{dy}{y}=\frac{dk}{k}$.

D’après la formule de croissance précédente, $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$.

En combinant ces formules : $(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$, $\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$. On le note $g^*=\frac{\theta}{1-\alpha}$.

Comme $Y=yL$, $G^*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$.

**Supposons une économie fermée, où l’investissement doit être financé par l’épargne nationale**. Soit $s$ la fraction de $Y$ épargnée ; alors $I=sY$, où $I$ est l’investissement total. Soit $\delta$ le taux de dépréciation : $dK = sY-\delta K$.

Comme $k=\frac{K}{L}$, $\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$. Avec $\frac{dk}{k}=\frac{\theta}{1-\alpha}$, on obtient :
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
Si tous les paramètres $s, \theta, \alpha,\delta,n$ restent inchangés, $\varphi$ est une constante.

Ce qui redonne l’hypothèse de départ : **à long terme, $\frac{Y}{K}$ est constant.**

Rappelons ensuite que $MPK = \alpha\frac{Y}{K}$. $\frac{Y}{K}$ est supposé constant, tout comme $\alpha$ ; la $MPK$ est donc constante.

De plus, $\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$, d’où $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$. Comme $\frac{sY}{L}=\frac{I}{L}$, $sy$ est à peu près l’investissement brut par travailleur. D’après la formule, le nouvel investissement se répartit en trois parts :

* L’approfondissement du capital
* Le remplacement des immobilisations dépréciées
* L’équipement en capital des nouveaux travailleurs

Comme $sy=sAk^{\alpha}$ (vrai par définition, sans hypothèse), en le combinant avec $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$ (la formule obtenue à partir des hypothèses d’équilibre), on trouve en résolvant l’équation le $k$ et le $y$ correspondant pour lesquels $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ est constant.

<iframe
  class="fx-concept-chart solow-chart"
  src="/charts/solow-steady-state.html"
  loading="lazy"
  title="État stationnaire de Solow : épargne et investissement requis"
></iframe>

<iframe
  class="fx-concept-chart solow-s-chart"
  src="/charts/solow-saving-rate-shift.html"
  loading="lazy"
  title="Une hausse du taux d’épargne déplace l’état stationnaire"
></iframe>

Une hausse du taux d’épargne $s$ déplace la courbe d’épargne $sy = sAk^{\alpha}$ vers le haut, de $s_1 f(k)$ à $s_2 f(k)$ : son intersection avec la droite fixe d’investissement requis $[\delta + n + \theta/(1-\alpha)]k$ passe de l’état stationnaire A à B — $k^*$ et $y^*$ plus élevés — tandis que le taux de croissance de long terme $\theta/(1-\alpha)$ ne change pas. Comme $s \in [0,1]$, relever $s$ pour augmenter $y$ et $k$ d’équilibre a une limite : $s$ ne peut pas dépasser 1.

<iframe
  class="fx-concept-chart solow-n-chart"
  src="/charts/solow-labor-growth-shift.html"
  loading="lazy"
  title="Une croissance plus rapide de la population active abaisse l’état stationnaire"
></iframe>

Une hausse de la croissance de la population active $n$ fait pivoter vers le haut la droite d’investissement requis, de $[\delta + n_1 + \theta/(1-\alpha)]k$ à la droite plus pentue $[\delta + n_2 + \theta/(1-\alpha)]k$ : son intersection avec la courbe d’épargne fixe $sy = sAk^{\alpha}$ passe de A à B — $k^*$ et $y^*$ plus bas — tandis que la croissance de long terme par habitant $\theta/(1-\alpha)$ reste la même (la croissance globale $G^*=n+\theta/(1-\alpha)$ augmente avec $n$).

> [!Note]
>
> Quand $s$ augmente, $k$ et $y$ deviennent plus grands, mais $\frac{\theta}{1-\alpha}$ reste inchangé.

> [!Important]
>
> Quelques conclusions de la théorie néoclassique :
>
> * À long terme, l’accumulation du capital influence le niveau de la production mais pas son taux de croissance
> * Quel que soit son ratio capital/travail initial ou son niveau initial de productivité, une économie en croissance converge vers un taux de croissance stable
> * À l’état stationnaire, le taux de croissance de la production vaut $G^*=n+\frac{\theta}{1-\alpha}$
>
> Implications du modèle :
>
> * Au début de l’accumulation du capital (approfondissement), la croissance dépasse le taux d’équilibre, puis ralentit.
> * Le seul moyen de soutenir la croissance du PIB potentiel par habitant est le progrès technique, c’est-à-dire la hausse de la productivité globale des facteurs.
>
> Effet de l’épargne :
>
> * Une hausse du taux d’épargne accroît d’abord temporairement la croissance. Une fois l’état de croissance stable atteint, le taux de croissance ne dépend plus de la part du revenu épargnée ou investie.

#### Exemple

Calculer les taux de croissance d’état stationnaire du modèle néoclassique pour les pays A et B.

| Pays | Coût du travail dans le coût total des facteurs (%) | Croissance de la PGF (%) | Croissance de la population active (%) |
| ------- | ----------------------------------- | -------------- | ---------------------- |
| A | 56.1 | 2.9 | 1.2 |
| B | 53.8 | 0.2 | 0 |

Rappel : $G^*=\Delta Y/Y=\frac{\theta}{1-\alpha}+n$, avec coût du travail dans le coût total des facteurs $=1-\alpha$, croissance de la PGF $=\theta$ et croissance de la population active $=n$.

<span class="blur-hover" tabindex="0">

**Pays A :**

$$
G^*=\frac{2.9\%}{56.1\%}+1.2\%=6.37\%
$$

**Pays B :**

$$
G^*=\frac{0.2\%}{53.8\%}+0\%=0.37\%
$$

</span>

#### Exemple

La croissance du PIB potentiel est estimée à 8,5 % pour le pays A et à 0,5 % pour le pays B. D’après l’exemple précédent, $G^*=6.37\%$ pour A et $G^*=0.37\%$ pour B.

Comparer les taux de croissance d’état stationnaire aux taux de croissance du PIB potentiel et expliquer les résultats.

<span class="blur-hover" tabindex="0">

**Pays A :** croissance du PIB potentiel $8.5\% > G^*=6.37\%$ : l’économie est encore en phase de convergence. Le stock de capital physique est inférieur à l’état stationnaire ; l’approfondissement du capital est un moteur important de la croissance de la productivité et du PIB potentiel.

**Pays B :** croissance du PIB potentiel $0.5\%$ contre $G^*=0.37\%$ — pratiquement à l’état stationnaire. L’investissement en capital n’a pas d’effet notable sur le taux de croissance. Seules les variations de la croissance de la PGF, de la croissance de la population active et de la part du travail dans la production influencent la croissance du PIB potentiel.

</span>

### Théorie de la croissance endogène

Contrairement au modèle néoclassique, le modèle de croissance endogène suppose que les rendements marginaux du capital ne sont pas décroissants pour l’économie dans son ensemble.

* L’accumulation du capital est le principal facteur de la croissance de long terme
* Les dépenses de R&D ont d’importantes externalités positives ou effets d’entraînement

L’économie n’atteint donc pas de taux de croissance stable. Au contraire, l’épargne et l’investissement peuvent engendrer une croissance auto-entretenue à un taux durablement plus élevé.

### Le débat sur la convergence

**Convergence absolue** : les pays en développement finiront par rattraper les pays développés et atteindre le même niveau de production par habitant.

* Le modèle néoclassique suppose que tous les pays ont accès à la même technologie, ce qui implique une convergence des taux de croissance par habitant
* Le modèle néoclassique n’implique pas de convergence absolue.

**Convergence conditionnelle** : avec le même taux d’épargne, le même taux de croissance démographique et la même fonction de production, on obtient le même niveau de $y$ et le même taux de croissance $\frac{dy}{y}$.

**Convergence en club** : seuls les pays riches et à revenu intermédiaire membres du « club » convergent vers le niveau de revenu du pays le plus riche. Les pays pauvres peuvent rejoindre le club en réformant leurs institutions. Ceux qui ne mènent pas les réformes nécessaires tombent dans un piège de non-convergence.

La convergence peut passer par :

* le progrès technique
* l’approfondissement du capital

Le modèle de croissance endogène ne prédit pas de convergence, car l’approfondissement du capital est plus facile pour les pays développés.
