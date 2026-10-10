<script setup>
import { withBase } from 'vitepress'
import { data } from '../notes.data.js'

const topics = data.cfa
const isOpen = (note) => note.status !== 'planned'
const total = topics.reduce((n, t) => n + t.notes.length, 0)
const opened = topics.reduce((n, t) => n + t.notes.filter(isOpen).length, 0)

// Conclusion-style title: how far along, and which topics have not started.
const notStarted = topics.filter((t) => !t.notes.some(isOpen)).map((t) => t.text)
const title = `${opened} of ${total} modules have notes`
  + (notStarted.length ? ` — ${notStarted.join(', ')} still to come` : '')
</script>

<template>
  <section class="lf-card note-index">
    <h2>{{ title }}</h2>
    <p class="lf-sub">
      One mark = one curriculum module ·
      <span class="mark-key"><i class="tick written" /> full note</span> ·
      <span class="mark-key"><i class="tick outline" /> outline</span> ·
      <span class="mark-key"><i class="tick planned" /> not started</span>
    </p>

    <ol class="note-index__rows">
      <li v-for="(topic, t) in topics" :key="topic.text" class="note-index__row">
        <span class="note-index__num">{{ String(t).padStart(2, '0') }}</span>
        <div class="note-index__body">
          <div class="note-index__head">
            <strong>{{ topic.text }}</strong>
            <span class="note-index__ticks" aria-hidden="true">
              <i v-for="(note, i) in topic.notes" :key="note.link" class="tick" :class="note.status"
                 :style="{ '--i': t * 4 + i }" />
            </span>
            <span class="note-index__count">{{ topic.notes.filter(isOpen).length }}/{{ topic.notes.length }}</span>
          </div>
          <p v-if="topic.notes.some(isOpen)" class="note-index__links">
            <template v-for="note in topic.notes.filter(isOpen)" :key="note.link">
              <a :href="withBase(note.link)">{{ note.text }}</a>
            </template>
          </p>
          <p v-else class="note-index__empty">Not started yet</p>
        </div>
      </li>
    </ol>

    <p class="lf-src">CFA Level II · counted from the notes folder at build time</p>
  </section>
</template>
