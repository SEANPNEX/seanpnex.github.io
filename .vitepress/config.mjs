// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { set_sidebar, unpublishedNotes } from "./auto-sidebar.mjs";
import { withMermaid } from "vitepress-plugin-mermaid";

// Each learning track gets its own sidebar so prev/next stays inside the track.
// The overview link comes first, so every track's first page links back to it.
const overview = { text: "Learning Base", link: "/blogs/0-start" };
const learningSidebar = {
  "/blogs/CFA/": set_sidebar("/blogs/CFA", { before: [overview] }),
  "/blogs/JLPT-N2/": set_sidebar("/blogs/JLPT-N2", { before: [overview] }),
  "/blogs/German/": set_sidebar("/blogs/German", { before: [overview] }),
  "/blogs/": [
    overview,
    {
      text: "Tracks",
      items: [
        { text: "CFA Level II", link: "/blogs/CFA/plan" },
        { text: "JLPT N2", link: "/blogs/JLPT-N2/plan" },
        { text: "Business German", link: "/blogs/German/plan" },
      ],
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base:"/",
    // Empty or `draft: true` notes stay in the vault but are not published.
    srcExclude: unpublishedNotes("/blogs"),
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["meta", { name: "theme-color", content: "#F0EFEB" }],
    ],
    title: "Sean's Homepage",
    description: "Projects, research, notes, and learning plans by Sean Guo.",
    markdown: {
      math: true,
      theme: { light: "min-light", dark: "min-dark" },
    },
    themeConfig: {
      outlineTitle: "Outline",
      outline: [2, 6],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/NCCP' },
        { text: 'Learning', activeMatch: '^/blogs/', items: [
          { text: 'Learning Base', link: '/blogs/0-start' },
          { text: 'CFA Level II', link: '/blogs/CFA/plan' },
          { text: 'JLPT N2', link: '/blogs/JLPT-N2/plan' },
          { text: 'Business German', link: '/blogs/German/plan' },
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
      zh: {
        label: '简体中文',
        lang: 'zh',
        themeConfig: {
          outlineTitle: "目录",
          nav: [
            { text: '首页', link: '/zh/' },
            { text: '项目', link: '/zh/projects/NCCP.md' },
            { text: '博客', link: '/zh/blogs/start.md' },
          ],
          sidebar: {
            "/zh/examples": set_sidebar("/zh/examples"),
            '/zh/blogs': set_sidebar('/zh/blogs'),
            '/zh/projects': set_sidebar('/zh/projects'),
          },
          search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索",
                  buttonAriaLabel: "搜索",
                },
                modal: {
                  noResultsText: "未找到结果",
                  resetButtonTitle: "清除搜索",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
        },
      },
      jp: {
        label: '日本語',
        lang: 'ja',
        themeConfig: {
          outlineTitle: "アウトライン",
          nav: [
            { text: 'ホーム', link: '/jp/' },
            { text: 'プロジェクト', link: '/jp/projects/NCCP.md' },
            { text: 'ブログ', link: '/jp/blogs/start.md' },
          ],
          sidebar: {
            "/jp/examples": set_sidebar("/jp/examples"),
            '/jp/blogs': set_sidebar('/jp/blogs'),
            '/jp/projects': set_sidebar('/jp/projects'),
          },
          search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "検索",
                  buttonAriaLabel: "検索",
                },
                modal: {
                  noResultsText: "結果が見つかりません",
                  resetButtonTitle: "検索をクリア",
                  footer: {
                    selectText: "選択",
                    navigateText: "切り替え",
                  },
                },
              },
            },
          },
        },
      },
      fr: {
        label: 'Français',
        lang: 'fr',
        themeConfig: {
          outlineTitle: "Plan",
          nav: [
            { text: 'Accueil', link: '/fr/' },
            { text: 'Projets', link: '/fr/projects/NCCP.md' },
            { text: 'Blog', link: '/fr/blogs/start.md' },
          ],
          sidebar: {
            "/fr/examples": set_sidebar("/fr/examples"),
            '/fr/blogs': set_sidebar('/fr/blogs'),
            '/fr/projects': set_sidebar('/fr/projects'),
          },
          search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "Rechercher",
                  buttonAriaLabel: "Rechercher",
                },
                modal: {
                  noResultsText: "Aucun résultat",
                  resetButtonTitle: "Effacer la recherche",
                  footer: {
                    selectText: "Choisir",
                    navigateText: "Changer",
                  },
                },
              },
            },
          },
        },
      },
    },

    mermaid: {
      theme: 'neutral',
    },
    mermaidPlugin: {
      class: 'mermaid my-class',
    },
  })
);
