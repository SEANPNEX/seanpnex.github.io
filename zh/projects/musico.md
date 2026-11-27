---
pageClass: project-case-study
title: Musico
order: 5
---

<ProjectHero
  index="05"
  eyebrow="软件工程 · 原生音频"
  title="Musico：原生跨平台离线音乐播放器"
  summary="一款面向 Apple、Android 与 Windows 的离线、文件夹优先、多队列本地音乐播放器——坚持零 Web 套壳，并内置统一的跨平台 JavaScript 扩展运行时。"
  year="2025–2026"
  role="架构设计、原生界面与音频工程"
  methods="SwiftUI · Jetpack Compose · .NET 8 WPF · JavaScriptCore / QuickJS / Jint"
  chart="/charts/musico-architecture.html?lang=zh"
  image-alt="Musico 在 Apple、Android 与 Windows 原生客户端之间的交互式架构图"
  docs="https://musico.seanpnex.win/?lang=zh"
  repo="https://github.com/SEANPNEX/Musico"
/>

## 问题

如今绝大多数跨平台桌面与移动应用都依赖 Electron 或内嵌 WebView，为了单一前端界面层，往往牺牲了内存占用、原生音频管线以及系统级媒体集成。而对于拥有大量本地曲库的听众而言，流媒体应用常常忽略两件最核心的事：保留原本的文件夹层级，以及在多个独立播放队列之间自由切换而不丢进度。

**Musico** 尝试了另一种工程路径：向 **Musicolet** 与 **YRRLYB/Aria** 致敬，为 Apple、Android 与 Windows 分别打造 **100% 原生** 的离线文件夹音乐播放器，同时在三端保持一致的曲库模型、播放语义与自定义音源扩展体系。

## 三端原生客户端，零 Web 套壳

每个平台都使用各自的原生 UI 框架、音频引擎与系统媒体控制接口，并各自内嵌轻量级 JavaScript 引擎来运行扩展：

| 客户端 | 目标平台 | 技术栈 | 原生设计与系统集成 |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+、iPadOS、macOS (Catalyst) | Swift、SwiftUI（`@Observable`）、`AVAudioEngine` + `AVAudioUnitEQ`、`MPNowPlayingInfoCenter`、`JavaScriptCore`（`Compression` + `CryptoKit`） | Apple HIG — iOS 采用标签页与弹窗；macOS 提供 `NSVisualEffectView` 毛玻璃半透明效果、独立侧边栏配色、`Cmd+K` 命令面板、悬浮迷你播放器与拖拽导入 |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin、Jetpack Compose、AndroidX Media3（ExoPlayer + `MediaSessionService`）、SAF `DocumentFile`、`DynamicsProcessing` EQ、`QuickJS`（`quickjs-kt`） | Material 3 / Material You — 动态取色、自适应 `NavigationBar` / `NavigationRail`、`ModalBottomSheet`、自定义外观主题，以及从设备/`Musico` 文件夹删除 |
| `MusicoWindows/` | Windows 10 (2004+) 与 Windows 11 | C# / .NET 8 WPF、NAudio（`BiQuadFilter` 十段均衡器）、TagLibSharp、Windows 10 SMTC、`Jint` | Fluent Design — Windows 11 DWM 圆角与窗口背景材质及亚克力（Acrylic）、独立侧边栏配色与不透明度、`Ctrl+K` 命令面板、悬浮迷你播放器与拖拽导入 |

## 核心功能

- **文件夹优先曲库、拖拽导入与安全删除：** 挂载本地目录（如 `Music`、`Documents` 或自定义文件夹）并保留原始目录层级，也可在 macOS/Windows 上直接将本地文件夹和音频文件拖拽到窗口中（拖入文件夹会挂载至 **文件夹**，拖入音轨可立即播放并将曲库外文件复制到默认音乐文件夹）。当硬盘拔出或文件夹移动时，**重新定位（Relocate）** 可无损恢复链接而不丢失歌单或听歌记录。删除操作清晰区分 **从音乐库移除（Remove from Library）** 与磁盘删除（macOS 上的 **移到废纸篓**、Windows 上的 **移至回收站**、iOS/Android 上的 **从设备删除**，包含 Android 的 `Musico` 文件夹）。广泛支持无损与有损格式，涵盖 FLAC、ALAC、WAV、AIFF、MP3、AAC/M4A（视平台还支持 OGG、Opus、WMA 与 WebM）。
- **云端文件夹、可选 Drive OAuth 2.0 与离线同步：** 可在 **文件夹（Folders）** 中直接挂载公开或带 Cookie 鉴权的来源——覆盖 **YouTube / YouTube Music**（歌单、`RD` 混音、专辑、单曲）、**Bilibili**（`BV`/`av` 多 P 视频、收藏夹 `favlist`、合集）以及 **Google Drive**（递归子目录扫描与单文件）。公开/分享 Drive 链接保持免登录即用；如需访问私人文件夹或绕过大文件下载确认页，可在 **设置 → Google Drive 账号** 可选接入用户自己的免费桌面应用 OAuth 2.0 客户端 ID（`drive.readonly` + `userinfo.email`，Testing 模式，自动监听 `http://127.0.0.1:<port>/oauth2callback`，7 天 Testing 令牌过期后可通过 **重新连接 Google Drive** 刷新）。曲目可通过 `.musico-cloud.json` 清单保存到本地，并通过 **从云端更新（Update from Cloud）** 增量刷新。
- **多独立播放队列：** 根据不同心情或听歌场景开启多个并行队列，随时重命名、排序、清空或切换队列；每个队列独立记录当前曲目、播放进度、随机顺序与循环模式（`关闭` / `全部` / `单曲`）。
- **统一外观设置与桌面端效率功能：** 统一 **设置**（`Cmd+,` / `Ctrl+,`）提供跟随系统/浅色/深色模式、精选背景与强调色预设、自定义十六进制/RGB/系统取色器、实时 **正在播放预览（Now Playing Preview）**、内置 **WCAG 2.1 对比度检测** 与一键 **自动修复对比度（Auto-fix Contrast）**，以及可调节 **图片可见度**（不透明度）与 **背景模糊** 的自定义背景图片。桌面端还提供全局 **命令面板 / 快速跳转**（`Cmd+K` / `Ctrl+K`）、**悬浮迷你播放器** 窗口（`Cmd+Shift+N` / `Ctrl+Shift+N`）以及丰富的键盘快捷键（歌词 `Cmd+Shift+L` / `Ctrl+Shift+L` / `L`、队列 `Cmd+Shift+Q` / `Ctrl+Shift+Q` / `Q`、快进退 `±10s`、音量 `±5%`、静音、随机/循环、正在播放）。
- **播放与曲库细节：**
  - **10 段 ISO 均衡器**（`31 Hz`–`16 kHz`），提供 `-12 dB` 至 `+12 dB` 前置增益、8 种预设及 `Custom` 自定义档。
  - **同步歌词与纯文本歌词：** 按 **手动导入** → **同目录同名** `.lrc`/`.txt` → **内嵌标签** 顺序自动回退读取，支持多时间戳 `.lrc` 解析、UTF-8 / UTF-16 BOM / GB18030 编码识别、点击歌词跳转、自定义字号与对齐方式，以及 **回到当前行（Sync to current line）**。
  - **定时睡眠、听歌统计与标签编辑：** 支持 `5`–`90` 分钟定时或 **当前歌曲播完后停止**，听歌统计（**最近播放**、**最多播放**、**久未播放**、**从未播放**，以及 **最常听艺人** 与 **最常听专辑**），行内元数据与封面编辑、系统媒体控制，以及 `English` / `简体中文` 实时切换。

## 跨平台 JavaScript 扩展机制

Musico 没有为了支持社区或个人音源而嵌入庞大的 WebView，而是让同一份 CommonJS 脚本（`.musico.js`）或 ZIP 压缩包（`.musicoext`）直接运行在三端各自内嵌的原生 JS 运行时中（Apple 使用 **JavaScriptCore**，Android 使用 **QuickJS**，Windows 使用 **Jint**）：

- **显式权限审查与隔离登录：** 新导入的扩展默认保持停用状态，直到用户审查其声明的 `permissions.hosts` 域名白名单与能力字段（如 `"cookie"`、`"qr_login"`、`"web_login"`、`"tree"` 或 `"proxy"`）。`"web_login"` 能力配合条件必填的清单字段 `webLogin`（`{ loginUrl, cookieDomains, requiredCookies?, userAgent? }`），会严格仅用于登录 Cookie 捕获时打开隔离的临时系统 WebView（**WKWebView** / **Android WebView** / **WebView2**）——让播放器界面保持 100% 原生——同时支持脱敏 `cookies.txt` 文件导入。
- **官方插件生态（`v2026.11.26`）：** 官方插件以开箱即用的扩展包形式发布，覆盖 **YouTube Search** `v1.2.0`（`web_login` + 音质分级）、**Bilibili Search** `v1.2.0`（`qr_login` + Hi-Res/FLAC 档）、**NetEase Cloud Music（网易云音乐）** `v1.2.0`（9 档音质 + `qr_login`）以及 **Apple Music** `v1.0.1`（`searchLyrics` 透传 Bearer Token + 编码格式/封面回退）。
- **可控操作与本地调试：** 包含每个扩展独立的设置面板、200 条滚动日志查看器、不破坏既有曲库与缓存音频的安全停用/卸载流程，以及用于在本地验证扩展脚本的 Node.js 一致性测试工具（`docs/extensions/tools/mock-runner.mjs`）。

## 发行构建与更新工程

多平台 GitHub Actions 工作流为所有目标平台自动构建、测试并发布带 Tag 的版本（最新 `v1.3.2`）——产出 macOS Catalyst `.dmg`、iOS 未签名 `.ipa`、Android release/debug `.apk`，以及 Windows NSIS 安装包（`Setup.exe`）与自包含绿色便携版 `.zip`（存在 `portable.txt` 时将数据保存在 `.\Data\`）。Windows、Android 与 macOS 均内置应用内更新器，支持检查 `releases/latest`、校验 `SHA256SUMS.txt` 与 **跳过此版本**。

## 仓库与下载

- **文档与扩展中心：** [musico.seanpnex.win/?lang=zh](https://musico.seanpnex.win/?lang=zh)（使用指南、官方插件与扩展 API v1 文档）
- **源码仓库：** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico)（MIT License）
- **版本下载：** [最新桌面与移动端发行版](https://github.com/SEANPNEX/Musico/releases/latest)
- **扩展开发文档：** [musico.seanpnex.win/developers/?lang=zh](https://musico.seanpnex.win/developers/?lang=zh) · [GitHub 中文扩展指南](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.zh-CN.md)
