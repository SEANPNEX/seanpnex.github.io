

# seanpnex.github.io

This is a VitePress-powered personal site built with simplicity, speed, and documentation-style content in mind.

## 🚀 Features

- Built with [VitePress](https://vitepress.dev)
- Clean personal homepage with a name card
- Supports Markdown-based documents
- Easy to customize and deploy

---

## 🛠️ Getting Started

### 1. Fork This Repo

Click the "Fork" button on the top-right of this page to make your own copy of the repo.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/seanpnex.github.io.git
cd seanpnex.github.io
```

## **3. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or later recommended).

```
npm install
```

## **4. Run Locally**

```
npm run docs:dev
```

Your site will be available at localhost 5173.

## **🧪 Customize**

​	•	Edit docs/index.md to update your homepage content

​	•	Modify docs/.vitepress/theme/components/TeamPage.vue to change your name card or add links

​	•	Organize additional pages inside the docs folder

​	•	Update docs/.vitepress/config.ts to configure sidebar, navbar, site metadata, and theme settings

## **🌐 Deploy to GitHub Pages**

### **1. Update vite.config.ts**

Make sure your base is set correctly:

```
export default defineConfig({
  base: '/seanpnex.github.io/', // or '/your-repo-name/' if deployed under a project page
});
```

### **2. Build the Site**

```
npm run build
```

### **3. Deploy**

You can use [vitepress-gh-pages](https://vitepress.dev/guide/deploy#github-pages) or follow the manual deploy method:

```
# Initialize a new git worktree for the `gh-pages` branch
git worktree add -B gh-pages docs/.vitepress/dist origin/gh-pages

# Commit and push
cd docs/.vitepress/dist
git add .
git commit -m "Deploy"
git push origin gh-pages
```

Or automate deployment via GitHub Actions. See [VitePress Deploy Guide](https://vitepress.dev/guide/deploy#github-pages) for details.

## **📄 License**

This project is licensed under the [GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0).

## **🙌 Credits**

Originally created by [@SEANPNEX](https://github.com/SEANPNEX).

Powered by [VitePress](https://vitepress.dev).

