import { computed } from 'vue'
import { useData } from 'vitepress'
import { TOPIC_LABELS } from '../topics.mjs'

// Component labels by page language (the locale's `lang` in config.mjs).
const TEXT = {
  en: {
    report: 'Read the full report', year: 'Year', role: 'Role', methods: 'Methods', view: 'Selected project view',
    progress: (opened, total) => `${opened} of ${total} modules have notes`,
    pending: (topics) => ` — ${topics} still to come`,
    legend: 'One mark = one curriculum module', written: 'full note', outline: 'outline', planned: 'not started',
    empty: 'Not started yet', source: 'CFA Level II · counted from the notes folder at build time',
    list: ', ',
  },
  zh: {
    report: '阅读完整报告', year: '年份', role: '角色', methods: '方法', view: '项目精选视图',
    progress: (opened, total) => `${total} 个模块中已有 ${opened} 个写了笔记`,
    pending: (topics) => `——${topics}尚未开始`,
    legend: '一道刻度 = 一个课程模块', written: '完整笔记', outline: '提纲', planned: '未开始',
    empty: '尚未开始', source: 'CFA 二级 · 构建时根据笔记文件夹统计',
    list: '、',
  },
  ja: {
    report: 'レポート全文を読む', year: '年', role: '担当', methods: '手法', view: 'プロジェクトの一場面',
    progress: (opened, total) => `${total} モジュール中 ${opened} 件にノートあり`,
    pending: (topics) => `——${topics}はこれから`,
    legend: '目盛り 1 本 = カリキュラムの 1 モジュール', written: '完成ノート', outline: 'アウトライン', planned: '未着手',
    empty: 'まだ始めていません', source: 'CFA レベル II · ビルド時にノートフォルダから集計',
    list: '、',
  },
  fr: {
    report: 'Lire le rapport complet', year: 'Année', role: 'Rôle', methods: 'Méthodes', view: 'Vue choisie du projet',
    progress: (opened, total) => `${opened} modules sur ${total} ont des notes`,
    pending: (topics) => ` — ${topics} restent à venir`,
    legend: 'Un trait = un module du programme', written: 'note complète', outline: 'plan', planned: 'pas commencé',
    empty: 'Pas encore commencé', source: 'CFA niveau II · compté à partir du dossier de notes lors du build',
    list: ', ',
  },
}

export function useText() {
  const { lang } = useData()
  const key = computed(() => (TEXT[lang.value] ? lang.value : 'en'))
  return {
    t: computed(() => TEXT[key.value]),
    topic: (name) => TOPIC_LABELS[key.value]?.[name] ?? name,
  }
}
