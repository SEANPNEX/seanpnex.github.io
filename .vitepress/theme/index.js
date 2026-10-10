import DefaultTheme from 'vitepress/theme'
import './style.css'
import ProjectHero from './components/ProjectHero.vue';
import NoteIndex from './components/NoteIndex.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectHero', ProjectHero);
    app.component('NoteIndex', NoteIndex);
  }
}
