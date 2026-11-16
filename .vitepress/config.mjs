// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { set_sidebar, unpublishedNotes } from "./auto-sidebar.mjs";
import { TOPIC_LABELS } from "./topics.mjs";
import { withMermaid } from "vitepress-plugin-mermaid";

// One learning sidebar for every page under /blogs/: Learning Base, then CFA and
// JLPT as top-level groups, so the full tree stays visible inside a track.
const overview = { text: "Learning Base", link: "/blogs/0-start" };
const learningSidebar = {
  "/blogs/": [
    overview,
    { text: "CFA Level II", collapsed: false, items: set_sidebar("/blogs/CFA") },
    { text: "JLPT N2", collapsed: true, items: set_sidebar("/blogs/JLPT-N2") },
  ],
};

// Interface strings for the translated locales. Pages live under /<key>/;
// the CFA module notes are English-only and are linked from each locale.
const LOCALE_TEXT = {
  zh: {
    title: "Sean 的主页",
    description: "Sean Guo 的项目、研究与笔记。",
    home: "首页", projects: "项目", learning: "学习", base: "学习库", tracks: "学习路线",
    cfa: "CFA 二级", jlpt: "JLPT N2",
    outline: "本页目录", prev: "上一页", next: "下一页",
    appearance: "外观", menu: "菜单", top: "返回顶部", language: "切换语言",
    light: "切换到浅色模式", dark: "切换到深色模式", skip: "跳到正文",
    footer: "© 2026 Sean Guo · 一座公开的学习库",
    search: { button: "搜索", noResults: "未找到结果", reset: "清除搜索", select: "选择", navigate: "切换", close: "关闭" },
  },
  jp: {
    title: "Sean のホームページ",
    description: "Sean Guo のプロジェクト、研究、ノート。",
    home: "ホーム", projects: "プロジェクト", learning: "学習", base: "学習ベース", tracks: "学習トラック",
    cfa: "CFA レベル II", jlpt: "JLPT N2",
    outline: "このページの内容", prev: "前のページ", next: "次のページ",
    appearance: "外観", menu: "メニュー", top: "トップへ戻る", language: "言語を切り替え",
    light: "ライトモードに切り替え", dark: "ダークモードに切り替え", skip: "本文へスキップ",
    footer: "© 2026 Sean Guo · 学びを公開するノート",
    search: { button: "検索", noResults: "結果が見つかりません", reset: "検索をクリア", select: "選択", navigate: "移動", close: "閉じる" },
  },
  fr: {
    title: "Le site de Sean",
    description: "Projets, recherches et notes de Sean Guo.",
    home: "Accueil", projects: "Projets", learning: "Apprentissage", base: "Base d’apprentissage", tracks: "Parcours",
    cfa: "CFA niveau II", jlpt: "JLPT N2",
    outline: "Sur cette page", prev: "Page précédente", next: "Page suivante",
    appearance: "Apparence", menu: "Menu", top: "Retour en haut", language: "Changer de langue",
    light: "Passer en mode clair", dark: "Passer en mode sombre", skip: "Aller au contenu",
    footer: "© 2026 Sean Guo · Une base d’apprentissage ouverte",
    search: { button: "Rechercher", noResults: "Aucun résultat", reset: "Effacer la recherche", select: "Choisir", navigate: "Naviguer", close: "Fermer" },
  },
};

function localeConfig(key, lang) {
  const t = LOCALE_TEXT[key];
  const base = `/${key}`;
  const overview = { text: t.base, link: `${base}/blogs/0-start` };
  const tracks = [
    { text: t.cfa, link: `${base}/blogs/0-start#cfa-level-ii-directory` },
    { text: t.jlpt, link: `${base}/blogs/JLPT-N2/grammars` },
  ];
  return {
    title: t.title,
    description: t.description,
    themeConfig: {
      outline: { level: [2, 6], label: t.outline },
      nav: [
        { text: t.home, link: `${base}/` },
        { text: t.projects, link: `${base}/projects/NCCP` },
        { text: t.learning, activeMatch: `^${base}/blogs/`, items: [overview, ...tracks] },
      ],
      sidebar: {
        [`${base}/projects/`]: set_sidebar(`${base}/projects`),
        [`${base}/blogs/`]: [overview,
          { text: t.cfa, collapsed: false, items: set_sidebar(`${base}/blogs/CFA`, { labels: TOPIC_LABELS[lang] }) },
          { text: t.jlpt, collapsed: true, items: set_sidebar(`${base}/blogs/JLPT-N2`, { labels: TOPIC_LABELS[lang] }) },
        ],
      },
      docFooter: { prev: t.prev, next: t.next },
      darkModeSwitchLabel: t.appearance,
      lightModeSwitchTitle: t.light,
      darkModeSwitchTitle: t.dark,
      sidebarMenuLabel: t.menu,
      returnToTopLabel: t.top,
      langMenuLabel: t.language,
      skipToContentLabel: t.skip,
      footer: { copyright: t.footer },
      search: {
        provider: "local",
        options: {
          translations: {
            button: { buttonText: t.search.button, buttonAriaLabel: t.search.button },
            modal: {
              noResultsText: t.search.noResults,
              resetButtonTitle: t.search.reset,
              backButtonTitle: t.search.close,
              footer: { selectText: t.search.select, navigateText: t.search.navigate, closeText: t.search.close },
            },
          },
        },
      },
    },
  };
}

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base:"/",
    // Empty or `draft: true` notes stay in the vault but are not published.
    srcExclude: ["/blogs", "/zh/blogs", "/jp/blogs", "/fr/blogs"].flatMap(unpublishedNotes),
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["meta", { name: "theme-color", content: "#F0EFEB" }],
    ],
    title: "Sean's Homepage",
    description: "Projects, research, and notes by Sean Guo.",
    // mermaid 11.17+ imports fastdom, a CommonJS module; pre-bundle it so the dev
    // server can serve it as ESM (otherwise the whole site renders blank in dev).
    vite: {
      optimizeDeps: {
        include: ["mermaid > fastdom", "mermaid > fastdom/extensions/fastdom-promised.js"],
      },
    },
    markdown: {
      math: true,
      theme: { light: "min-light", dark: "min-dark" },
    },
    themeConfig: {
      outline: { level: [2, 6], label: "Outline" },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/NCCP' },
        { text: 'Learning', activeMatch: '^/blogs/', items: [
          { text: 'Learning Base', link: '/blogs/0-start' },
          { text: 'CFA Level II', link: '/blogs/0-start#cfa-level-ii-directory' },
          { text: 'JLPT N2', link: '/blogs/JLPT-N2/grammars' },
        ]},
      ],
      sidebar: {
        "/examples/": set_sidebar("/examples"),
        ...learningSidebar,
        "/projects/": set_sidebar("/projects"),
      },
      aside: "left",
      socialLinks: [
        { icon: 'github', link: 'https://github.com/SEANPNEX/seanpnex.github.io' },
      ],
      footer: {
        copyright: "© 2026 Sean Guo · Built as a learning base",
      },
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search",
            },
            modal: {
              noResultsText: "No such result",
              resetButtonTitle: "Clear search",
              footer: {
                selectText: "Choose",
                navigateText: "Switch",
              },
            },
          },
        },
      },
    },

    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
      zh: { label: '简体中文', lang: 'zh', ...localeConfig('zh', 'zh') },
      jp: { label: '日本語', lang: 'ja', ...localeConfig('jp', 'ja') },
      fr: { label: 'Français', lang: 'fr', ...localeConfig('fr', 'fr') },
    },

    mermaid: {
      theme: 'neutral',
    },
    mermaidPlugin: {
      class: 'mermaid my-class',
    },
  })
);
