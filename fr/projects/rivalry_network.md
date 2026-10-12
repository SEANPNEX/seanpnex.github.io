---
pageClass: project-case-study
title: Réseaux de rivalité
order: 4
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
  index="04"
  eyebrow="Neurosciences computationnelles · Dynamique des réseaux"
  title="Réseaux de rivalité : de la perception à la locomotion"
  summary="Un réseau de Wilson–Cowan généralisé pour étudier l’alternance de la perception visuelle et les rythmes de la marche quadrupède."
  year="2022"
  role="Modélisation, simulation et synthèse"
  methods="Oscillateurs couplés · Symétrie · Bifurcation de Hopf"
  image="/images/rivalry_network/wilson_network.png"
  image-alt="Schéma du réseau de rivalité de Wilson généralisé"
  report="/Rivalry_Network.pdf"
/>

## La question

Ce projet étudie le **réseau de rivalité**, un modèle généralisé qui explique le comportement de populations neuronales couplées à l’aide d’un **modèle de Wilson-Cowan** étendu. Il se concentre sur deux phénomènes biologiques :
- la **perception visuelle**, en particulier la **rivalité binoculaire** ;
- les **allures quadrupèdes**, en simulant les sorties rythmiques des générateurs centraux de rythme (CPG) dans la locomotion animale.

## Concepts clés

- **Modèle de Wilson-Cowan :** un modèle fondamental à deux nœuds qui explique les interactions excitatrices et inhibitrices dans les réseaux neuronaux ; ses comportements, comme les états stables et les cycles limites, s’analysent par les bifurcations de Hopf.
- **Réseaux de Wilson généralisés :** des versions étendues à plusieurs nœuds pour des phénomènes complexes, dont la perception multistable dans la rivalité binoculaire.

## Équation du modèle de Wilson-Cowan

$$ 
\frac{dx(t)}{dt} = -ax(t) + G(wx(t) - by(t) + I(t)) \\
\frac{dy(t)}{dt} = -dy(t) + G(cx(t) - ey(t) + J(t)) 
$$

$$ 
G(z) = \frac{z}{\sqrt{z^2 + 1}}
$$

## Condition de bifurcation de Hopf

$$
\text{Jacobian} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix} \\
\text{Hopf bifurcation occurs when:} \quad T = 0,\ D > 0
$$

<div class="figure">
    <img src="/images/rivalry_network/wilson_network.png" alt="Exemple de réseau de Wilson">
    <p class="caption">Figure : modèle de réseau de Wilson avec nœuds excitateurs et inhibiteurs.</p>
</div>

## Application 1 : la rivalité binoculaire
- Explique l’alternance des perceptions quand deux images différentes sont présentées à chaque œil.
- S’étend des modèles à **1 emplacement** (rivalité de base) aux modèles à **4 emplacements**.
- Intègre des opérations de symétrie (groupes Z2, Z4, etc.) pour prédire les schémas perceptifs dans des expériences comme **« singe-texte »** et **« 24 points »**.

<div class="figure">
    <img src="/images/rivalry_network/binocular.png" alt="Expérience de rivalité binoculaire">
    <p class="caption">Figure : dispositif classique d’expérience de rivalité binoculaire.</p>
</div>

## Application 2 : les allures quadrupèdes
- Un **réseau de rivalité à 8 cellules** simule les rythmes (pas, trot, amble, etc.) de la locomotion quadrupède.
- Une analyse fondée sur la symétrie modélise l’effet de la force de couplage et des bifurcations sur les changements d’allure.

<div class="figure">
    <img src="/images/rivalry_network/monkey_text1.png" alt="Expérience singe-texte">
    <p class="caption">Figure : l’expérience « singe-texte », qui met en évidence la perception multistable.</p>
</div>

## Validation expérimentale
- L’analyse s’appuie sur une expérience (Golubitsky, 2019) qui teste l’alternance perceptive avec des stimuli conçus pour la **rivalité binoculaire à 4 emplacements**.
- Les résultats confirment certaines prédictions du modèle de Wilson-Cowan étendu, mais révèlent aussi des écarts, notamment sur l’effet de l’espacement des images.

## Conclusion
L’étude souligne l’efficacité des réseaux de rivalité et de l’analyse de symétrie pour expliquer des phénomènes biologiques périodiques. Elle en montre aussi les limites, comme l’écart entre prédictions théoriques et résultats expérimentaux. Les travaux futurs devraient viser la validation empirique et l’extension des modèles à des illusions visuelles plus complexes.

<div class="figure">
    <img src="/images/rivalry_network/3.4.2.png" alt="Modèle de symétrie des allures quadrupèdes">
    <p class="caption">Figure : analyse de symétrie des allures quadrupèdes prédites par le réseau de rivalité.</p>
</div>


## Le rapport d’origine (en anglais)
<div class="pdf-embed">
  <iframe 
      src="/Rivalry_Network.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>Aperçu PDF indisponible dans cette vue. Téléchargez plutôt le fichier :</p>
    <p><a href="/Rivalry_Network.pdf" target="_blank" download>📥 Télécharger le rapport</a></p>
  </div>
</div>

[📥 Télécharger le rapport](/Rivalry_Network.pdf){target="_blank" download}
