import DefaultTheme from 'vitepress/theme'
import './style.css'
import ProjectHero from './components/ProjectHero.vue';
import NoteIndex from './components/NoteIndex.vue';
import { data as notes } from './notes.data.js';

// Learning notes are written in English first. When the language menu points
// at a translation that does not exist yet, open the English page instead of a 404.
const published = new Set(notes.pages);
const englishFallback = (href) => {
  const { pathname, hash } = new URL(href, 'https://example.com');
  const page = decodeURI(pathname).replace(/\.html$/, '');
  const english = page.match(/^\/(?:zh|jp|fr)(\/blogs\/.+)$/)?.[1];
  return english && !published.has(page) && published.has(english) ? english + hash : null;
};

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('ProjectHero', ProjectHero);
    app.component('NoteIndex', NoteIndex);

    router.onBeforeRouteChange = (href) => {
      const target = englishFallback(href);
      if (target) {
        router.go(target);
        return false;
      }
    };
  }
}
