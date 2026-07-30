---
layout: page
title: Sean Guo — Learning in Public
description: Sean Guo's projects, research, notes, and learning plans.
---

<script setup>
const projects = [
  {
    eyebrow: 'Urban analytics',
    title: 'Neighborhood Change & Community Prosperity',
    copy: 'A data-led study of housing, mobility, infrastructure, and growth.',
    link: '/projects/NCCP',
    mark: '01'
  },
  {
    eyebrow: 'Computational neuroscience',
    title: 'Wilson–Cowan Equations',
    copy: 'Dynamics, stability, and simulation of interacting neural populations.',
    link: '/projects/wilson_cowan_equation',
    mark: '02'
  },
  {
    eyebrow: 'Machine learning',
    title: 'TTS Chatbot',
    copy: 'A tour through speech synthesis, dialogue systems, and generative models.',
    link: '/projects/TTS-chatbot',
    mark: '03'
  }
]

const learning = [
  { title: 'CFA Level II', detail: 'Analysis, valuation & cases', link: '/blogs/CFA/plan', tone: 'amber' },
  { title: 'JLPT N2', detail: 'Reading, listening & fluency', link: '/blogs/JLPT-N2/plan', tone: 'blue' },
  { title: 'Business German', detail: 'Workplace communication', link: '/blogs/German/plan', tone: 'green' }
]
</script>

<div class="home-shell">
  <section class="profile-hero">
    <div class="hero-copy">
      <p class="kicker"><span></span> Based in Shanghai · Learning everywhere</p>
      <h1>Turning curiosity<br><em>into useful work.</em></h1>
      <p class="hero-intro">I’m Sean — a developer and analyst exploring the space between data, finance, technology, and human behavior. This is where I keep the work and the lessons.</p>
      <div class="hero-actions">
        <a class="primary-action" href="/projects/NCCP">Explore my work <span>↗</span></a>
        <a class="text-action" href="/resume/resume">View résumé <span>→</span></a>
      </div>
    </div>
    <div class="portrait-wrap" aria-label="Portrait of Sean Guo">
      <div class="portrait-orbit orbit-one"></div>
      <div class="portrait-orbit orbit-two"></div>
      <img src="https://github.com/SEANPNEX.png" alt="Sean Guo" />
      <div class="availability"><span></span> Learning in public</div>
    </div>
  </section>

  <section class="learning-strip">
    <div class="section-heading compact">
      <div><p class="section-number">NOW / 2026</p><h2>Current learning tracks</h2></div>
      <a href="/blogs/0-start">Open notebook <span>→</span></a>
    </div>
    <div class="learning-grid">
      <a v-for="item in learning" :key="item.title" :href="item.link" class="learning-card" :class="item.tone">
        <span class="learning-dot"></span>
        <div><strong>{{ item.title }}</strong><small>{{ item.detail }}</small></div>
        <span class="card-arrow">↗</span>
      </a>
    </div>
  </section>

  <section class="selected-work">
    <div class="section-heading">
      <div><p class="section-number">SELECTED / WORK</p><h2>Projects built from questions.</h2></div>
      <p>Research and experiments across cities, minds, and machines.</p>
    </div>
    <div class="project-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" class="project-card">
        <div class="project-top"><span>{{ project.eyebrow }}</span><b>{{ project.mark }}</b></div>
        <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.copy }}</p></div>
        <div class="project-link">Read the case study <span>↗</span></div>
      </a>
    </div>
  </section>

  <section class="home-footer-cta">
    <p>Notes, ideas, and things worth remembering.</p>
    <a href="/blogs/0-start">Enter the learning base <span>→</span></a>
  </section>
</div>
