<script setup>
import { useText } from '../i18n.js'

const { t } = useText()

defineProps({
  index: String,
  eyebrow: String,
  title: String,
  summary: String,
  year: String,
  role: String,
  methods: String,
  image: String,
  imageAlt: String,
  imageFit: String,
  chart: String,
  docs: String,
  report: String,
  repo: String
})
</script>

<template>
  <header class="case-hero">
    <div class="case-hero__copy">
      <p class="case-hero__eyebrow"><span>{{ index }}</span>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="case-hero__summary">{{ summary }}</p>
      <div v-if="report || docs || repo" class="case-hero__links">
        <a v-if="report" class="case-hero__report" :href="report">{{ t.report }} <span aria-hidden="true">↗</span></a>
        <a v-if="docs" class="case-hero__report" :href="docs" target="_blank" rel="noopener noreferrer">{{ t.docs }} <span aria-hidden="true">↗</span></a>
        <a v-if="repo" class="case-hero__report" :href="repo" target="_blank" rel="noopener noreferrer">{{ t.repo }} <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <dl class="case-hero__meta">
      <div><dt>{{ t.year }}</dt><dd>{{ year }}</dd></div>
      <div><dt>{{ t.role }}</dt><dd>{{ role }}</dd></div>
      <div><dt>{{ t.methods }}</dt><dd>{{ methods }}</dd></div>
    </dl>
    <figure v-if="chart" class="case-hero__visual case-hero__visual--chart">
      <iframe class="case-hero__chart" :src="chart" :title="imageAlt || title" loading="lazy"></iframe>
      <figcaption>{{ eyebrow }} · {{ t.view }}</figcaption>
    </figure>
    <figure v-else-if="image" class="case-hero__visual" :class="imageFit">
      <img :src="image" :alt="imageAlt" />
      <figcaption>{{ eyebrow }} · {{ t.view }}</figcaption>
    </figure>
  </header>
</template>
