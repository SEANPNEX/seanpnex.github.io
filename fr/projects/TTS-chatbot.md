---
pageClass: project-case-study
title: Chatbot TTS
order: 3
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
  index="03"
  eyebrow="Apprentissage automatique · Systèmes conversationnels"
  title="Un chatbot multilingue à synthèse vocale"
  summary="Un chatbot multiplateforme et une étude comparative de la synthèse vocale neuronale, pour rendre la conversation avec une machine plus naturelle."
  year="2023"
  role="Recherche, évaluation de modèles et développement"
  methods="VITS · Tacotron 2 · NoneBot · MOSNet · MCD"
  image="/images/chatbot/mel_s.png"
  image-alt="Spectrogramme mel produit par le système de synthèse vocale"
  report="/chatbot_report.pdf"
/>

## La question

Ce projet présente le développement d’un **chatbot multiplateforme doté de la synthèse vocale (Text-to-Speech, TTS)**, conçu et réalisé par Shun Guo dans le cadre du programme Signature Work de l’université Duke Kunshan. Le chatbot fonctionne sur plusieurs réseaux sociaux comme QQ et WeChat, avec pour but d’améliorer l’interaction humain-machine grâce à des réponses vocales naturelles.

## Points forts du projet

- **Objectif :** intégrer des algorithmes TTS modernes fondés sur l’apprentissage profond dans un chatbot déployé sur plusieurs plateformes sociales, afin d’améliorer l’expérience utilisateur par une interaction vocale naturelle.
  
- **Systèmes TTS étudiés :** le projet compare deux modèles TTS de référence :
  - **Tacotron 2** (Google)
  - **VITS** (autoencodeur variationnel conditionnel avec apprentissage antagoniste)
  
- **Métriques d’évaluation :** 
  - **MOSNet**, une métrique objective fondée sur l’apprentissage profond, pour estimer le score d’opinion moyen (MOS).
  - La **distance mel-cepstrale (MCD)**, pour mesurer la ressemblance entre la parole générée et des échantillons de voix humaine réelle.
  
  <div class="figure">
    <img src="/images/chatbot/statistical_synthesis.png" alt="Tableau 2.1 : aperçu de la synthèse paramétrique statistique">
    <p class="caption">Tableau 2.1 : algorithmes des tâches de synthèse vocale (TTS)</p>
  </div>

- **Résultats :**
  - **VITS** surpasse **Tacotron 2** à la fois sur les scores MOSNet et sur la MCD.
  - VITS obtient un score MOSNet de **2,63 ± 0,08**, contre **2,56 ± 0,035** pour Tacotron 2.
  - La MCD indique que la parole générée par VITS est plus proche des voix humaines réelles.
  
  <div class="figure">
    <img src="/images/chatbot/mel_s.png" alt="Figure 4.1 : spectrogramme mel des données d’échantillon">
    <p class="caption">Figure 4.1 : spectrogramme mel des données d’échantillon</p>
  </div>

  <div class="figure">
    <img src="/images/chatbot/mel_n.png" alt="Figure 4.2 : spectrogramme mel des données d’inférence">
    <p class="caption">Figure 4.2 : spectrogramme mel des données d’inférence</p>
  </div>

## Pile technique

- **Framework :** NoneBot 2 (framework de chatbot open source et multiplateforme)
- **Données d’entraînement :** jeux de données multilingues (anglais, chinois, japonais) issus de corpus publics (par ex. le corpus VCTK).
- **Déploiement :** serveur Ubuntu 20.04 via le service de calcul virtuel de DKU.
- **Intégration NLP :** réponses générées en combinant des enregistrements prédéfinis, des API de NLP (par ex. ChatGPT) et l’historique des conversations.

<div class="figure">
  <img src="/images/chatbot/Nonebot.jpg" alt="Figure 2.1 : architecture du framework NoneBot">
  <p class="caption">Figure 2.1 : architecture du framework NoneBot</p>
</div>

## Fonctionnalités clés

- Réponses vocales multilingues (anglais, chinois, japonais)
- Intégration aux plateformes sociales courantes (par ex. QQ)
- Interaction enrichie par une voix de synthèse naturelle
- Architecture modulaire, prête pour de nouvelles fonctions et de nouvelles langues

## Tableaux et équations

### Tableau 2.1 : algorithmes des tâches de synthèse vocale (TTS)

| Nom | Description | Publication |
|------------------------------|--------------------------------------------------------|--------------------------|
| Unit Selection | Sélection d’unités dans un corpus existant | Hunt et al., 1996 [8] |
| Statistical Parametric Synthesis | Modèle de Markov caché pour prédire la forme d’onde | Zen et al., 2009 [31] |
| Wavenet | PixelRNN autorégressif | Oord et al., 2016 [15] |
| Fast Wavenet | Réduit la complexité temporelle de Wavenet | Paine et al., 2016 [16] |
| Deep Voice | Encodeur-décodeur GRU multicouche + hybride CNN et RNN | Baidu, 2017 [2] |
| Deep Voice 2 | Comme Deep Voice, avec davantage de couches WaveNet | Baidu, 2017 [5] |
| Deep Voice 3 | Encodeur-décodeur entièrement convolutif | Google, 2017 [17] |
| Tacotron | Encodeur-décodeur CBHG et RNN | Google, 2017 [28] |
| Tacotron 2 | Encodeur-décodeur LSTM et RNN | Google, 2018 [20] |
| VITS | cVAE + GAN | Kim et al., 2021 [9] |

### Équation 3.1 : transformée de Fourier à court terme (STFT)

$$
STFT\{x[n]\}(m, \omega) = \sum_{n=-\infty}^{\infty} x[n] w[n-m] e^{-j\omega n}
$$

### Équation 4.2 : MCD

$$
MCD(m, n) = \sqrt{ \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(m)}}\right)^2 - \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(n)}}\right)^2 }
$$

## Conclusion

Le projet montre que les systèmes TTS fondés sur l’apprentissage profond peuvent nettement améliorer l’interaction entre un chatbot et ses utilisateurs en y ajoutant une parole naturelle. Si **VITS** s’est révélé le meilleur modèle, des limites comme la lenteur de génération des réponses et la précision de l’évaluation ont été relevées, ouvrant la voie à de futures améliorations.

<div class="figure">
  <img src="/images/chatbot/gan_diagram.jpg" alt="Figure 3.3 : structure d’un GAN">
  <p class="caption">Figure 3.3 : structure d’un GAN</p>
</div>

<div class="figure">
  <img src="/images/chatbot/GAN.png" alt="Figure 3.3 : structure d’un GAN">
  <p class="caption">Figure 3.3 : structure d’un GAN</p>
</div>

<div class="figure">
  <img src="/images/chatbot/vits_loss.jpg" alt="Équation 3.1 : formule de la STFT">
  <p class="caption">Équation 3.1 : formule de la STFT</p>
</div>


## Le rapport d’origine (en anglais)
<div class="pdf-embed">
  <iframe 
      src="/chatbot_report.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>Aperçu PDF indisponible dans cette vue. Téléchargez plutôt le fichier :</p>
    <p><a href="/chatbot_report.pdf" target="_blank" download>📥 Télécharger le rapport</a></p>
  </div>
</div>

[📥 Télécharger le rapport](/chatbot_report.pdf){target="_blank" download}
