---
title: Croissance économique
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover {
    filter: none;
}
</style>

# Croissance économique

## Pourquoi la croissance économique compte

Ce qui distingue pays développés et pays en développement :

* L’épargne et l’investissement
* Les marchés financiers et les intermédiaires
* La stabilité politique, l’État de droit et les droits de propriété
* Les systèmes d’éducation et de santé
* La fiscalité et la réglementation
* Le libre-échange et la libre circulation des capitaux

La croissance potentielle compte pour les investisseurs en actions :
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$
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
On obtient le taux de croissance en prenant le logarithme des deux membres :
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
Pour le taux de croissance par habitant, la démarche est la même :
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
Pour maximiser la production par rapport au capital, on dérive pour obtenir la productivité marginale du capital (MPK) :
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
L’optimum est atteint lorsque la MPK est égale au prix de location du capital, noté $r$ :
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

>[!Note]
>
>La fonction de production présente deux caractéristiques importantes :
>
>* Des rendements d’échelle constants
>* Une productivité marginale décroissante : la production supplémentaire obtenue grâce à un intrant additionnel diminue
>* Par habitant, un $\alpha$ plus faible renforce l’effet de productivité marginale décroissante.
>* Une hausse de $A$ déplace la fonction vers le haut (et atténue l’effet de productivité marginale décroissante)

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

### Théorie classique de la croissance

L’hypothèse clé est que $L$ et $Y$ vont augmenter, et que la hausse de $Y$ augmentera encore $L$ : progrès technique $\to$ productivité du travail $\uparrow$ $\to$ croissance démographique plus forte $\to$ rendements marginaux décroissants du travail $\to$ retour du revenu par habitant.

Ainsi, pour $y$, le progrès technique produit à long terme une population plus nombreuse mais pas plus riche. La production par habitant ne croît pas.

### Théorie néoclassique de la croissance

À long terme, le taux de croissance de $y$ dépend :

* du taux d’épargne/d’investissement $s$
* du rythme du progrès technique $\theta$
* du taux de croissance démographique $n$

Si l’on suppose qu’à long terme $\frac{Y}{K}$ reste constant, alors $\frac{Y/L}{K/L}$ l’est aussi, donc $\frac{y}{k}$ également. D’où $\frac{dy}{y}=\frac{dk}{k}$.

D’après la formule de croissance précédente, $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$.

En combinant ces formules : $(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$, $\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$. On le note $g*=\frac{\theta}{1-\alpha}$.

Comme $Y=yl$, $G*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$.

Dans une économie fermée, l’investissement doit être financé par l’épargne nationale. Soit $s$ la fraction de $Y$ épargnée ; alors $I=sY$, et $dK = sY-\delta K$, où $\delta$ est le taux de dépréciation.

Comme $k=\frac{K}{L}$, $\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$. Avec $\frac{dk}{k}=\frac{\theta}{1-\alpha}$, on obtient :
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
ce qui redonne l’hypothèse de départ : à long terme, $\frac{Y}{K}$ est constant.

La MPK $= \alpha\frac{Y}{K}$ est alors elle aussi constante.

De plus, $\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$, d’où $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$.

Comme $sy=sAk^{\alpha}$, on trouve en résolvant l’équation le $k$ pour lequel $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ est constant.

> [!Note]
>
> Quand $s$ augmente, $k$ et $y$ deviennent plus grands, mais $\frac{\theta}{1-\alpha}$ reste inchangé.

> [!Important]
>
> Quelques conclusions de la théorie néoclassique :
>
> * À long terme, l’accumulation du capital influence le niveau de la production mais pas son taux de croissance
> * Quel que soit son ratio capital/travail initial ou son niveau initial de productivité, une économie en croissance converge vers un taux de croissance stable
> * À l’état stationnaire, le taux de croissance de la production vaut $G*=n+\frac{\theta}{1-\alpha}$
>
> Implications du modèle :
>
> * Au début de l’accumulation du capital (approfondissement), la croissance dépasse le taux d’équilibre, puis ralentit.
> * Le seul moyen de soutenir la croissance du PIB potentiel par habitant est le progrès technique, c’est-à-dire la hausse de la productivité globale des facteurs.
>
> Effet de l’épargne :
>
> * Une hausse du taux d’épargne accroît d’abord temporairement la croissance. Une fois l’état de croissance stable atteint, le taux de croissance ne dépend plus de la part du revenu épargnée ou investie.

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
