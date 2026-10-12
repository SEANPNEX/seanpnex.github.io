---
layout: page
title: Sean Guo — 公開で学ぶ
description: Sean Guo のプロジェクト、研究、ノート、学習計画。
---

<script setup>
import { data as notes } from '../.vitepress/theme/notes.data.js'

const cfaNotes = notes.cfa.flatMap((topic) => topic.notes)
const cfaOpened = cfaNotes.filter((note) => note.status !== 'planned').length

const projects = [
  {
    eyebrow: '都市分析',
    title: '地域の変化とコミュニティの繁栄',
    copy: 'ハリケーンの被害、地域の脆弱性、そしてレジリエントな復興の条件を可視化する。',
    link: '/jp/projects/NCCP',
    mark: '01',
    image: '/images/NCCP/precipitation.png',
    meta: '研究 · 2024'
  },
  {
    eyebrow: '計算論的神経科学',
    title: 'Wilson–Cowan 方程式',
    copy: '相互作用するニューロン集団が振動を始める条件を探る。',
    link: '/jp/projects/wilson_cowan_equation',
    mark: '02',
    image: '/images/wilson_cowan/Nullclines.png',
    meta: '数理モデリング · 2022'
  },
  {
    eyebrow: '機械学習',
    title: 'TTS チャットボット',
    copy: '最新のニューラル音声合成手法を比較した多言語対話システム。',
    link: '/jp/projects/TTS-chatbot',
    mark: '03',
    image: '/images/chatbot/mel_s.png',
    meta: '機械学習 · 2023'
  }
]

const learning = [
  { title: 'CFA レベル II', detail: '分析・評価・ケース', link: '/jp/blogs/CFA/plan', stat: `${cfaOpened}/${cfaNotes.length} モジュール`, ticks: cfaNotes },
  { title: 'JLPT N2', detail: '読解・聴解・流暢さ', link: '/jp/blogs/JLPT-N2/plan', stat: '24 週間プラン' },
  { title: 'ビジネスドイツ語', detail: '職場でのコミュニケーション', link: '/jp/blogs/German/plan', stat: '24 週間プラン' }
]
</script>

<div class="home-shell">
  <section class="profile-hero">
    <div class="hero-copy">
      <p class="kicker"><span></span> Sean Guo · アナリスト兼ビルダー</p>
      <h1>複雑なシステムを研究し、<em>読み解ける形にする。</em></h1>
      <p class="hero-intro">都市、市場、人間の行動にまたがる研究・データ・ソフトウェアの仕事をしています。このサイトは完成した作品のポートフォリオであり、次に学ぶことを書き留めるノートでもあります。</p>
      <div class="hero-actions">
        <a class="primary-action" href="#selected-work">作品を見る <span>↓</span></a>
        <a class="text-action" href="/jp/blogs/0-start">学習ベースを開く <span>→</span></a>
      </div>
    </div>
    <figure class="portrait-wrap">
      <img src="https://github.com/SEANPNEX.png" alt="Sean Guo のポートレート" />
      <figcaption>上海 · アイデア歓迎</figcaption>
    </figure>
  </section>

  <section class="learning-strip">
    <div class="section-heading compact">
      <div><p class="section-number">NOW / 2026</p><h2>いま学んでいること</h2></div>
      <a href="/jp/blogs/0-start">ノートを開く <span>→</span></a>
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
      <div><p class="section-number">SELECTED / WORK</p><h2>問いから生まれたプロジェクト。</h2></div>
      <p>どのプロジェクトも難しい問いから始まり、システムをより明快に見る方法にたどり着きます。</p>
    </div>
    <div class="project-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" class="project-card">
        <div class="project-image"><img :src="project.image" :alt="''" /></div>
        <div class="project-top"><span>{{ project.eyebrow }}</span><b>{{ project.mark }}</b></div>
        <div class="project-body"><h3>{{ project.title }}</h3><p>{{ project.copy }}</p></div>
        <div class="project-link"><span>{{ project.meta }}</span><span>ケーススタディを見る ↗</span></div>
      </a>
    </div>
  </section>

  <section class="home-footer-cta">
    <p>ノート、アイデア、そして覚えておきたいこと。</p>
    <a href="/jp/blogs/0-start">学習ベースへ <span>→</span></a>
  </section>
</div>
