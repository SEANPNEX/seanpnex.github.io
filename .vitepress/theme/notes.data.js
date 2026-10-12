import { noteIndex, publishedNotes } from '../auto-sidebar.mjs'

const LOCALES = ['zh', 'jp', 'fr']

// Build-time snapshot of the CFA curriculum folders, shared by the home page
// and the Learning Base directory so neither drifts from the sidebar.
// `translated[locale]` maps an English note link to its translation, and
// `pages` lists every published learning page in any language.
export default {
  watch: ['../../blogs/**/*.md', '../../{zh,jp,fr}/blogs/**/*.md'],
  load() {
    const translated = Object.fromEntries(LOCALES.map((locale) => [
      locale,
      Object.fromEntries(publishedNotes(`/${locale}/blogs`)
        .map(({ text, link }) => [link.slice(locale.length + 1), { text, link }])),
    ]))
    const pages = [
      ...publishedNotes('/blogs').map((note) => note.link),
      ...Object.values(translated).flatMap((notes) => Object.values(notes).map((note) => note.link)),
    ]
    return { cfa: noteIndex('/blogs/CFA'), translated, pages }
  },
}
