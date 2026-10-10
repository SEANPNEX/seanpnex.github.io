---
layout: page
title: Sean Guo — Learning in Public
description: Sean Guo's projects, research, notes, and learning plans.
---

<script setup>
import { data as notes } from './.vitepress/theme/notes.data.js'

const cfaNotes = notes.cfa.flatMap((topic) => topic.notes)
const cfaOpened = cfaNotes.filter((note) => note.status !== 'planned').length

const projects = [
  {
    eyebrow: 'Urban analytics',
    title: 'Neighborhood Change & Community Prosperity',
    copy: 'Mapping storm impact, local vulnerability, and the conditions for a resilient recovery.',
    link: '/projects/NCCP',
    mark: '01',
    image: '/images/NCCP/precipitation.png',
    meta: 'Research · 2024'
  },
  {
    eyebrow: 'Computational neuroscience',
    title: 'Wilson–Cowan Equations',
    copy: 'Finding the conditions under which interacting neural populations begin to oscillate.',
    link: '/projects/wilson_cowan_equation',
    mark: '02',
    image: '/images/wilson_cowan/Nullclines.png',
    meta: 'Mathematical modeling · 2022'
  },
  {
    eyebrow: 'Machine learning',
    title: 'TTS Chatbot',
    copy: 'A multilingual conversational system comparing modern neural speech synthesis methods.',
    link: '/projects/TTS-chatbot',
    mark: '03',
    image: '/images/chatbot/mel_s.png',
    meta: 'Machine learning · 2023'
  }
]

const learning = [
  { title: 'CFA Level II', detail: 'Analysis, valuation & cases', link: '/blogs/CFA/plan', stat: `${cfaOpened}/${cfaNotes.length} modules`, ticks: cfaNotes },
  { title: 'JLPT N2', detail: 'Reading, listening & fluency', link: '/blogs/JLPT-N2/plan', stat: '24-week plan' },
  { title: 'Business German', detail: 'Workplace communication', link: '/blogs/German/plan', stat: '24-week plan' }
]
</script>

<div class="home-shell">
  <section class="profile-hero">
    <div class="hero-copy">
      <p class="kicker"><span></span> Sean Guo · Analyst & builder</p>
      <h1>I study complex systems—<em>then make them legible.</em></h1>
      <p class="hero-intro">Research, data, and software across cities, markets, and human behavior. This site is both a portfolio of finished work and a notebook for what I’m learning next.</p>
      <div class="hero-actions">
        <a class="primary-action" href="#selected-work">Explore selected work <span>↓</span></a>
        <a class="text-action" href="/blogs/0-start">Open the learning base <span>→</span></a>
      </div>
    </div>
    <figure class="portrait-wrap">
      <img src="https://github.com/SEANPNEX.png" alt="Portrait of Sean Guo" />
      <figcaption>Shanghai · Open to ideas</figcaption>
    </figure>
  </section>

  <section class="learning-strip">
    <div class="section-heading compact">
      <div><p class="section-number">NOW / 2026</p><h2>Current learning tracks</h2></div>
      <a href="/blogs/0-start">Open notebook <span>→</span></a>
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
      <div><p class="section-number">SELECTED / WORK</p><h2>Projects built from questions.</h2></div>
      <p>Each project begins with a hard question and ends with a clearer way to see the system.</p>
    </div>
    <div class="project-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" class="project-card">
        <div class="project-image"><img :src="project.image" :alt="''" /></div>
        <div class="project-top"><span>{{ project.eyebrow }}</span><b>{{ project.mark }}</b></div>
        <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.copy }}</p></div>
        <div class="project-link"><span>{{ project.meta }}</span><span>View case study ↗</span></div>
      </a>
    </div>
  </section>

  <section class="home-footer-cta">
    <p>Notes, ideas, and things worth remembering.</p>
    <a href="/blogs/0-start">Enter the learning base <span>→</span></a>
  </section>
</div>
