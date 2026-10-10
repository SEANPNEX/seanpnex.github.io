<script setup>
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
  report: String
})
</script>

<template>
  <header class="case-hero">
    <div class="case-hero__copy">
      <p class="case-hero__eyebrow"><span>{{ index }}</span>{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="case-hero__summary">{{ summary }}</p>
      <a v-if="report" class="case-hero__report" :href="report">Read the full report <span aria-hidden="true">↗</span></a>
    </div>
    <dl class="case-hero__meta">
      <div><dt>Year</dt><dd>{{ year }}</dd></div>
      <div><dt>Role</dt><dd>{{ role }}</dd></div>
      <div><dt>Methods</dt><dd>{{ methods }}</dd></div>
    </dl>
    <figure v-if="image" class="case-hero__visual">
      <img :src="image" :alt="imageAlt" />
      <figcaption>{{ eyebrow }} · Selected project view</figcaption>
    </figure>
  </header>
</template>
