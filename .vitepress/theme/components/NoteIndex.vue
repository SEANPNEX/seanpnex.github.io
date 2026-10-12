<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data } from '../notes.data.js'
import { useText } from '../i18n.js'

const { t, topic: topicName } = useText()
const { localeIndex } = useData()
// Show the current language's version of a note when it has one.
const localized = (note) => data.translated[localeIndex.value]?.[note.link] ?? note
const topics = data.cfa
const isOpen = (note) => note.status !== 'planned'
const total = topics.reduce((n, topic) => n + topic.notes.length, 0)
const opened = topics.reduce((n, topic) => n + topic.notes.filter(isOpen).length, 0)

// Conclusion-style title: how far along, and which topics have not started.
const notStarted = topics.filter((topic) => !topic.notes.some(isOpen)).map((topic) => topic.text)
const title = computed(() => t.value.progress(opened, total)
  + (notStarted.length ? t.value.pending(notStarted.map(topicName).join(t.value.list)) : ''))
</script>

<template>
  <section class="lf-card note-index">
    <h2>{{ title }}</h2>
    <p class="lf-sub">
      {{ t.legend }} ·
      <span class="mark-key"><i class="tick written" /> {{ t.written }}</span> ·
      <span class="mark-key"><i class="tick outline" /> {{ t.outline }}</span> ·
      <span class="mark-key"><i class="tick planned" /> {{ t.planned }}</span>
    </p>

    <ol class="note-index__rows">
      <li v-for="(topic, row) in topics" :key="topic.text" class="note-index__row">
        <span class="note-index__num">{{ String(row).padStart(2, '0') }}</span>
        <div class="note-index__body">
          <div class="note-index__head">
            <strong>{{ topicName(topic.text) }}</strong>
            <span class="note-index__ticks" aria-hidden="true">
              <i v-for="(note, i) in topic.notes" :key="note.link" class="tick" :class="note.status"
                 :style="{ '--i': row * 4 + i }" />
            </span>
            <span class="note-index__count">{{ topic.notes.filter(isOpen).length }}/{{ topic.notes.length }}</span>
          </div>
          <p v-if="topic.notes.some(isOpen)" class="note-index__links">
            <template v-for="note in topic.notes.filter(isOpen)" :key="note.link">
              <a :href="withBase(localized(note).link)">{{ localized(note).text }}</a>
            </template>
          </p>
          <p v-else class="note-index__empty">{{ t.empty }}</p>
        </div>
      </li>
    </ol>

    <p class="lf-src">{{ t.source }}</p>
  </section>
</template>
