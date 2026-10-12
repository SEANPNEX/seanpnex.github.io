---
layout: page
title: Sean Guo — Apprendre en public
description: Projets, recherches, notes et plans d’apprentissage de Sean Guo.
---

<script setup>
import { data as notes } from '../.vitepress/theme/notes.data.js'

const cfaNotes = notes.cfa.flatMap((topic) => topic.notes)
const cfaOpened = cfaNotes.filter((note) => note.status !== 'planned').length

const projects = [
  {
    eyebrow: 'Analyse urbaine',
    title: 'Mutation des quartiers et prospérité locale',
    copy: 'Cartographier l’impact d’une tempête, la vulnérabilité locale et les conditions d’une reprise résiliente.',
    link: '/fr/projects/NCCP',
    mark: '01',
    image: '/images/NCCP/precipitation.png',
    meta: 'Recherche · 2024'
  },
  {
    eyebrow: 'Neurosciences computationnelles',
    title: 'Équations de Wilson–Cowan',
    copy: 'Trouver les conditions dans lesquelles des populations neuronales en interaction se mettent à osciller.',
    link: '/fr/projects/wilson_cowan_equation',
    mark: '02',
    image: '/images/wilson_cowan/Nullclines.png',
    meta: 'Modélisation mathématique · 2022'
  },
  {
    eyebrow: 'Apprentissage automatique',
    title: 'Chatbot TTS',
    copy: 'Un système conversationnel multilingue qui compare les méthodes modernes de synthèse vocale neuronale.',
    link: '/fr/projects/TTS-chatbot',
    mark: '03',
    image: '/images/chatbot/mel_s.png',
    meta: 'Apprentissage automatique · 2023'
  }
]

const learning = [
  { title: 'CFA niveau II', detail: 'Analyse, évaluation et cas', link: '/fr/blogs/CFA/plan', stat: `${cfaOpened}/${cfaNotes.length} modules`, ticks: cfaNotes },
  { title: 'JLPT N2', detail: 'Lecture, écoute et aisance', link: '/fr/blogs/JLPT-N2/plan', stat: 'Plan sur 24 semaines' },
  { title: 'Allemand des affaires', detail: 'Communication professionnelle', link: '/fr/blogs/German/plan', stat: 'Plan sur 24 semaines' }
]
</script>

<div class="home-shell">
  <section class="profile-hero">
    <div class="hero-copy">
      <p class="kicker"><span></span> Sean Guo · Analyste et bâtisseur</p>
      <h1>J’étudie les systèmes complexes —<em>puis je les rends lisibles.</em></h1>
      <p class="hero-intro">Recherche, données et logiciel, entre villes, marchés et comportements humains. Ce site est à la fois un portfolio de travaux achevés et un carnet de ce que j’apprends ensuite.</p>
      <div class="hero-actions">
        <a class="primary-action" href="#selected-work">Voir les travaux choisis <span>↓</span></a>
        <a class="text-action" href="/fr/blogs/0-start">Ouvrir la base d’apprentissage <span>→</span></a>
      </div>
    </div>
    <figure class="portrait-wrap">
      <img src="https://github.com/SEANPNEX.png" alt="Portrait de Sean Guo" />
      <figcaption>Shanghai · Ouvert aux idées</figcaption>
    </figure>
  </section>

  <section class="learning-strip">
    <div class="section-heading compact">
      <div><p class="section-number">NOW / 2026</p><h2>Ce que j’apprends en ce moment</h2></div>
      <a href="/fr/blogs/0-start">Ouvrir le carnet <span>→</span></a>
    </div>
    <div class="learning-grid">
      <a v-for="item in learning" :key="item.title" :href="item.link" class="learning-card">
        <div class="learning-card__top"><strong>{{ item.title }}</strong><span class="card-arrow">↗</span></div>
        <small>{{ item.detail }}</small>
        <span v-if="item.ticks" class="learning-card__ticks" aria-hidden="true">
          <i v-for="(note, i) in item.ticks" :key="note.link" class="tick" :class="note.status" :style="{ '--i': i }" />
        </span>
        <span class="learning-card__stat">{{ item.stat }}</span>
      </a>
    </div>
  </section>

  <section id="selected-work" class="selected-work">
    <div class="section-heading">
      <div><p class="section-number">SELECTED / WORK</p><h2>Des projets nés de questions.</h2></div>
      <p>Chaque projet part d’une question difficile et aboutit à une façon plus claire de voir le système.</p>
    </div>
    <div class="project-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" class="project-card">
        <div class="project-image"><img :src="project.image" :alt="''" /></div>
        <div class="project-top"><span>{{ project.eyebrow }}</span><b>{{ project.mark }}</b></div>
        <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.copy }}</p></div>
        <div class="project-link"><span>{{ project.meta }}</span><span>Voir l’étude de cas ↗</span></div>
      </a>
    </div>
  </section>

  <section class="home-footer-cta">
    <p>Notes, idées et choses à retenir.</p>
    <a href="/fr/blogs/0-start">Entrer dans la base <span>→</span></a>
  </section>
</div>
