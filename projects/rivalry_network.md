---
prev: 
    text: 'TTS-chatbot'
    link: "/projects/TTS-chatbot"
next: 
    text: 'Resume'
    link: "/resume/resume"
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

.resume-fallback {
  display: none;
}
@media (max-width: 768px) {
  .resume-wrapper iframe {
    display: none;
  }
  .resume-fallback {
    display: block;
    text-align: center;
    margin-top: 1em;
  }
}
</style>

# Rivalry Network

## Overview

This project investigates the **Rivalry Network**, a generalized model for explaining the behavior of coupled neuronal populations using an extended **Wilson-Cowan model**. It focuses on two key biological phenomena:
- **Visual perception**, specifically **binocular rivalry**.
- **Quadrupedal gaits**, simulating the rhythmic outputs of central pattern generators (CPGs) in animal locomotion.

## Key Concepts

- **Wilson-Cowan Model:** A foundational 2-node model explaining excitatory and inhibitory interactions in neural networks, featuring behaviors like stable states and limit cycles analyzed via Hopf bifurcations.
- **Generalized Wilson Networks:** Extended versions to handle multi-node configurations for complex phenomena, including multi-stable perception in binocular rivalry.

## Wilson-Cowan Model Equation

$$ 
\frac{dx(t)}{dt} = -ax(t) + G(wx(t) - by(t) + I(t)) \\
\frac{dy(t)}{dt} = -dy(t) + G(cx(t) - ey(t) + J(t)) 
$$

$$ 
G(z) = \frac{z}{\sqrt{z^2 + 1}}
$$

## Hopf Bifurcation Condition

$$
\text{Jacobian} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix} \\
\text{Hopf bifurcation occurs when:} \quad T = 0,\ D > 0
$$

<div class="figure">
    <img src="/images/rivalry_network/wilson_network.png" alt="Wilson Network Example">
    <p class="caption">Figure: Wilson network model with excitatory and inhibitory nodes.</p>
</div>

## Application 1: Binocular Rivalry
- Explains alternating perceptions when two distinct images are presented to each eye.
- Extends from **1-location** (basic rivalry) to **4-location** models.
- Incorporates symmetry operations (e.g., Z2, Z4 groups) to predict perceptual patterns in experiments like the **"Monkey-Text"** and **"24-dot"** experiments.

<div class="figure">
    <img src="/images/rivalry_network/binocular.png" alt="Binocular Rivalry Experiment">
    <p class="caption">Figure: Classic binocular rivalry experiment setup.</p>
</div>

## Application 2: Quadrupedal Gaits
- An **8-cell rivalry network** simulates rhythmic patterns (walk, trot, pace, etc.) in quadrupedal locomotion.
- Uses symmetry-based analysis to model how coupling strength and bifurcations affect gait transitions.

<div class="figure">
    <img src="/images/rivalry_network/monkey_text1.png" alt="Monkey-Text Experiment">
    <p class="caption">Figure: The Monkey-Text experiment demonstrating multi-stable perception.</p>
</div>

## Experimental Validation
- Analysis is supported by an experiment (Golubitsky, 2019) testing perceptual alternation using custom stimuli in **4-location binocular rivalry**.
- Results confirmed some predictions of the extended Wilson-Cowan model but also revealed discrepancies, especially regarding the impact of image spacing.

## Conclusion
The study highlights the effectiveness of rivalry networks and symmetry analysis in explaining periodic biological phenomena. However, it also identifies limitations, such as gaps between theoretical predictions and experimental outcomes. Future research should focus on empirical validation and extending models to explain more complex visual illusions.

<div class="figure">
    <img src="/images/rivalry_network/3.4.2.png" alt="Quadrupedal Gaits Symmetry Model">
    <p class="caption">Figure: Symmetry analysis in quadrupedal gait patterns predicted by the rivalry network.</p>
</div>


## The original report
<div class="resume-wrapper">
  <iframe 
      src="/Rivalry_Network.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="resume-fallback">
    <p>PDF preview unavailable in this view. Please download instead:</p>
    <p><a href="/Rivalry_Network.pdf" target="_blank" download>📥 Download Report</a></p>
  </div>
</div>

[📥 Download Report](/Rivalry_Network.pdf){target="_blank" download}

