import { noteIndex } from '../auto-sidebar.mjs'

// Build-time snapshot of the CFA curriculum folders, shared by the home page
// and the Learning Base directory so neither drifts from the sidebar.
export default {
  watch: ['../../blogs/**/*.md'],
  load: () => ({ cfa: noteIndex('/blogs/CFA') }),
}
