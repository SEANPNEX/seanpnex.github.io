---
layout: page
title: Sean Guo — 公开学习
description: Sean Guo 的项目、研究、笔记与学习计划。
---

<script setup>
import { data as notes } from '../.vitepress/theme/notes.data.js'

const cfaNotes = notes.cfa.flatMap((topic) => topic.notes)
const cfaOpened = cfaNotes.filter((note) => note.status !== 'planned').length

const projects = [
  {
    eyebrow: '城市分析',
    title: '社区变迁与社区繁荣',
    copy: '梳理飓风影响、地方脆弱性，以及韧性恢复所需的条件。',
    link: '/zh/projects/NCCP',
    mark: '01',
    image: '/images/NCCP/precipitation.png',
    meta: '研究 · 2024'
  },
  {
    eyebrow: '计算神经科学',
    title: 'Wilson–Cowan 方程',
    copy: '寻找相互作用的神经元群体开始振荡的条件。',
    link: '/zh/projects/wilson_cowan_equation',
    mark: '02',
    image: '/images/wilson_cowan/Nullclines.png',
    meta: '数学建模 · 2022'
  },
  {
    eyebrow: '机器学习',
    title: 'TTS 聊天机器人',
    copy: '一个多语言对话系统，并对比了现代神经语音合成方法。',
    link: '/zh/projects/TTS-chatbot',
    mark: '03',
    image: '/images/chatbot/mel_s.png',
    meta: '机器学习 · 2023'
  }
]

const learning = [
  { title: 'CFA 二级', detail: '分析、估值与案例', link: '/zh/blogs/CFA/plan', stat: `${cfaOpened}/${cfaNotes.length} 个模块`, ticks: cfaNotes },
  { title: 'JLPT N2', detail: '阅读、听力与流利度', link: '/zh/blogs/JLPT-N2/plan', stat: '24 周计划' },
  { title: '商务德语', detail: '职场沟通', link: '/zh/blogs/German/plan', stat: '24 周计划' }
]
</script>

<div class="home-shell">
  <section class="profile-hero">
    <div class="hero-copy">
      <p class="kicker"><span></span> Sean Guo · 分析师与构建者</p>
      <h1>我研究复杂系统——<em>再把它们讲清楚。</em></h1>
      <p class="hero-intro">我的研究、数据与软件工作横跨城市、市场与人类行为。这个网站既是已完成作品的集合，也是记录我接下来在学什么的笔记本。</p>
      <div class="hero-actions">
        <a class="primary-action" href="#selected-work">浏览精选作品 <span>↓</span></a>
        <a class="text-action" href="/zh/blogs/0-start">打开学习库 <span>→</span></a>
      </div>
    </div>
    <figure class="portrait-wrap">
      <img src="https://github.com/SEANPNEX.png" alt="Sean Guo 的头像" />
      <figcaption>上海 · 欢迎交流想法</figcaption>
    </figure>
  </section>

  <section class="learning-strip">
    <div class="section-heading compact">
      <div><p class="section-number">NOW / 2026</p><h2>正在学习</h2></div>
      <a href="/zh/blogs/0-start">打开笔记本 <span>→</span></a>
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
      <div><p class="section-number">SELECTED / WORK</p><h2>从问题出发的项目。</h2></div>
      <p>每个项目都始于一个难题，最终给出一种更清晰地看待系统的方式。</p>
    </div>
    <div class="project-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" class="project-card">
        <div class="project-image"><img :src="project.image" :alt="''" /></div>
        <div class="project-top"><span>{{ project.eyebrow }}</span><b>{{ project.mark }}</b></div>
        <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.copy }}</p></div>
        <div class="project-link"><span>{{ project.meta }}</span><span>查看案例 ↗</span></div>
      </a>
    </div>
  </section>

  <section class="home-footer-cta">
    <p>笔记、想法，以及值得记住的东西。</p>
    <a href="/zh/blogs/0-start">进入学习库 <span>→</span></a>
  </section>
</div>
