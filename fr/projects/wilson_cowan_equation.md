---
pageClass: project-case-study
title: Équations de Wilson–Cowan
order: 2
---

<style>
.figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
}
.figure img {
  max-width: 60%;
}
.caption {
  font-size: 0.9em;
  color: #555;
  margin-top: 0.5em;
  font-style: italic;
}

.pdf-embed-fallback {
  display: none;
}
@media (max-width: 768px) {
  .pdf-embed iframe {
    display: none;
  }
  .pdf-embed-fallback {
    display: block;
    text-align: center;
    margin-top: 1em;
  }
}
</style>

<ProjectHero
  index="02"
  eyebrow="Neurosciences computationnelles · Systèmes dynamiques"
  title="Quand les populations neuronales se mettent à osciller"
  summary="Une étude analytique et numérique des conditions qui produisent des cycles limites dans un modèle de Wilson–Cowan modifié."
  year="2022"
  role="Analyse mathématique et simulation"
  methods="Équations différentielles · Analyse de bifurcation · Python"
  image="/images/wilson_cowan/Nullclines.png"
  image-alt="Isoclines nulles d’un système dynamique de Wilson-Cowan"
  report="/Wilson_Cowan_Equation.pdf"
/>

## La question

Ce projet explore le comportement oscillatoire des populations neuronales à l’aide d’un **modèle de Wilson-Cowan modifié**. L’étude cherche dans quelles conditions apparaissent des cycles limites (qui représentent une activité neuronale oscillante), en s’appuyant à la fois sur l’analyse théorique et sur des simulations.

## Objectifs

- Comprendre comment les populations de neurones excitateurs et inhibiteurs interagissent pour produire des oscillations.
- Identifier les conditions qui mènent aux **bifurcations de Hopf** et aux cycles limites.
- Analyser des cas particuliers et le cas général par des **méthodes analytiques** et des **simulations numériques**.

## Concepts clés

- **Modèle de Wilson-Cowan :** décrit l’interaction entre populations de neurones excitateurs (E) et inhibiteurs (I) au moyen d’équations différentielles non linéaires et d’une fonction de réponse sigmoïde.
- **Cycles limites :** comportements oscillatoires représentés par des trajectoires fermées dans le plan de phase.
- **Bifurcation de Hopf :** condition critique où un équilibre stable devient instable et où un cycle limite apparaît.

## Équations du modèle de Wilson-Cowan

$$ 
\frac{dx(t)}{dt} = -ax(t) + (1 - r_x x(t)) S(wx(t) - by(t) + I(t)) 
$$

$$ 
\frac{dy(t)}{dt} = -dy(t) + (1 - r_y y(t)) S(cx(t) - ey(t) + J(t)) 
$$

où :
- \( x(t) \) et \( y(t) \) : fractions de cellules excitatrices et inhibitrices actives à l’instant \( t \)
- \( S(\theta') = \frac{\theta'}{\sqrt{\theta'^2 + 1}} \) : fonction de réponse sigmoïde

## Étude de cas : sans stimulus externe (I = 0, J = 0)
- On fait varier le facteur d’auto-excitation **w** pour étudier son effet.
- Résultats :
  - Un comportement oscillatoire (cycle limite) apparaît lorsque **w > d** et **γ > 1** (γ étant un rapport de paramètres).
  - Dans cette plage, la période d’oscillation augmente avec **w**.
  - Confirmé par des simulations sous **Mathematica** et **Python**.

## Équations des isoclines nulles

$$ 
y_f(x) = \frac{1}{b} \cdot \frac{wx + I - ax}{\sqrt{1 - (ax)^2}}
$$

$$ 
y_g(x) = \frac{1}{d} \cdot \frac{cx + J}{\sqrt{1 + (cx + J)^2}}
$$

<div class="figure">
    <img src="/images/wilson_cowan/Nullclines.png" alt="Isoclines nulles du système">
    <p class="caption">Figure : isoclines nulles pour a=0,1, b=1, c=1, d=0,1, w=1, I=6, J=4.</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/StabilitySketch00.png" alt="Plan T-D">
    <p class="caption">Figure : plan T-D et régions de stabilité.</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/GeneralCase01_0.png" alt="Cas de simulation 1">
    <p class="caption">Figure : résultats de simulation pour w = 0,1, 2,7 et 1 respectivement.</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/RminRmax.png" alt="Région annulaire">
    <p class="caption">Figure : région annulaire et cycle limite pour des paramètres donnés en exemple.</p>
</div>

## Autres résultats
- Lorsque **J = 0** et que **I** varie :
  - des cycles limites n’existent que dans une **plage de I** précise : **I ∈ [-2,98 ; 2,98]**.
- Lorsque **I = 0** et que **J** varie :
  - des cycles limites existent pour **J ∈ [-7,22 ; 7,22]**.
- **L’auto-excitation (w > 0)** est indispensable au comportement oscillatoire ; aucun cycle n’apparaît quand **w = 0**.

## Jacobienne et condition de bifurcation

La matrice jacobienne s’écrit :

$$
DF(x) =
\begin{bmatrix}
\frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\\\
\frac{\partial g}{\partial x} & \frac{\partial g}{\partial y}
\end{bmatrix}
$$

Pour une bifurcation de Hopf :
- Trace \( T = 0 \)
- Déterminant \( \Delta > 0 \)

<div class="figure">
    <img src="/images/wilson_cowan/PeriodExplanation.png" alt="Période en fonction de w">
    <p class="caption">Figure : période en fonction de w, d’après Monteiro et al. (2002).</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation00.png" alt="Exemple de portrait de phase">
    <p class="caption">Figure : dynamique du système pour w=0,6, montrant la formation d’un cycle limite.</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation01.png" alt="Séries temporelles de E et I">
    <p class="caption">Figure : comportement oscillatoire des cellules excitatrices et inhibitrices.</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/I-exp.png" alt="Période en fonction de I">
    <p class="caption">Figure : période en fonction de I, d’après Monteiro et al. (2002).</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/J-exp.png" alt="Période en fonction de J">
    <p class="caption">Figure : période en fonction de J, d’après Monteiro et al. (2002).</p>
</div>

## Conclusion
Le modèle de Wilson-Cowan modifié montre que les colonnes corticales peuvent présenter un comportement oscillatoire intrinsèque. Les oscillations et leur période sont sensibles à l’auto-excitation et aux stimuli externes. Cela éclaire, sur le plan des mécanismes, la façon dont des assemblées de neurones peuvent se synchroniser pour traiter les entrées sensorielles.


## Le rapport d’origine (en anglais)
<div class="pdf-embed">
  <iframe 
      src="/Wilson_Cowan_Equation.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>Aperçu PDF indisponible dans cette vue. Téléchargez plutôt le fichier :</p>
    <p><a href="/Wilson_Cowan_Equation.pdf" target="_blank" download>📥 Télécharger le rapport</a></p>
  </div>
</div>

[📥 Télécharger le rapport](/Wilson_Cowan_Equation.pdf){target="_blank" download}
