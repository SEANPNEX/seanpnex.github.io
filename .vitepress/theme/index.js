import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MouseTracker from './components/MouseTracker.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(MouseTracker) // Inject at bottom of the layout
    })
  },
  enhanceApp({ app }) {
    app.component('MouseTracker', MouseTracker);
  }
}