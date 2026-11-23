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
  image="/images/musico/architecture.svg"
  image-alt="Musico 在 Apple、Android 与 Windows 原生客户端之间的架构图"
  image-fit="contain"
  repo="https://github.com/SEANPNEX/Musico"
/>

## 问题

如今绝大多数跨平台桌面与移动应用都依赖 Electron 或内嵌 WebView，为了单一前端界面层，往往牺牲了内存占用、原生音频管线以及系统级媒体集成。而对于拥有大量本地曲库的听众而言，流媒体应用常常忽略两件最核心的事：保留原本的文件夹层级，以及在多个独立播放队列之间自由切换而不丢进度。

**Musico** 尝试了另一种工程路径：向 **Musicolet** 与 **YRRLYB/Aria** 致敬，为 Apple、Android 与 Windows 分别打造 **100% 原生** 的离线文件夹音乐播放器，同时在三端保持一致的曲库模型、播放语义与自定义音源扩展体系。

## 三端原生客户端，零 Web 套壳

每个平台都使用各自的原生 UI 框架、音频引擎与系统媒体控制接口，并各自内嵌轻量级 JavaScript 引擎来运行扩展：

| 客户端 | 目标平台 | 技术栈 | 原生设计与系统集成 |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+、iPadOS、macOS (Catalyst) | Swift、SwiftUI（`@Observable`）、`AVAudioEngine` + `AVAudioUnitEQ`、`MPNowPlayingInfoCenter`、`JavaScriptCore`（`Compression` + `CryptoKit`） | Apple HIG — iOS 采用舒适的标签与弹窗，macOS/iPadOS 提供侧边栏、检查器与键盘快捷键 |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin、Jetpack Compose、AndroidX Media3（ExoPlayer + `MediaSessionService`）、SAF `DocumentFile`、`DynamicsProcessing` EQ、`QuickJS`（`quickjs-kt`） | Material 3 / Material You — 动态取色、自适应 `NavigationBar` / `NavigationRail`、`ModalBottomSheet` |
| `MusicoWindows/` | Windows 10 (2004+) 与 Windows 11 | C# / .NET 8 WPF、NAudio（`BiQuadFilter` 十段均衡器）、TagLibSharp、Windows 10 SMTC、`Jint` | Windows 10 Fluent Design — 亚克力 `NavigationView`、锐利几何轮廓、Reveal 悬停与明暗跟随 |

## 核心功能

- **文件夹优先曲库与无损重定位：** 直接挂载本地目录（如 `Music`、`Documents` 或自定义文件夹），完整保留原始文件夹结构；移动目录或拔插硬盘后，可通过 **重新定位（Relocate）** 无损恢复链接而不丢失歌单与播放统计。三端支持 FLAC、ALAC、WAV、AIFF、MP3、AAC/M4A 等无损与有损格式（Android 与 Windows 还支持 OGG、Opus 等格式）。
- **云端目录挂载与离线同步：** 可在 **文件夹** 中直接挂载 **YouTube / YouTube Music**（歌单、`RD` 电台混音、专辑与单曲）、**Bilibili**（`BV`/`av` 视频与分 P、收藏夹、合集）以及 **Google Drive**（共享文件夹递归扫描音频与单文件）。支持通过 `.musico-cloud.json` 清单 **保存到本地文件夹**，并通过 **从云端更新** 增量同步新增曲目。
- **多独立播放队列：** 根据不同心情或场景建立多个互不干扰的播放队列，支持随时重命名、切换、拖动排序、清空或删除；每个队列独立记忆当前曲目、播放进度、随机顺序与循环模式（`关闭` / `全部` / `单曲`）。
- **播放与曲库细节：**
  - **10 段 ISO 均衡器**（`31 Hz`–`16 kHz`），提供 `-12 dB` 至 `+12 dB` 前置增益、8 种预设及 `Custom` 自定义档。
  - **同步歌词与纯文本歌词**，按 **手动导入** → **同目录** `.lrc`/`.txt` → **内嵌标签** 顺序自动读取，支持多时间戳 `.lrc`、UTF-8 / UTF-16 BOM / GB18030 编码自动识别与点击歌词跳转。
  - **定时睡眠、听歌统计与标签编辑：** 支持 `5`–`90` 分钟定时或 **当前歌曲播完后停止**，统计 **最近播放**、**最多播放**、**久未播放** 与 **从未播放**，内置元数据与封面编辑、系统锁屏/媒体键控制，以及 `English` / `简体中文` 实时切换。

## 跨平台 JavaScript 扩展机制

Musico 没有为了扩展生态而引入庞大的 WebView，而是让同一份 CommonJS 脚本（`.musico.js`）或 ZIP 压缩包（`.musicoext`）直接运行在三端各自内嵌的原生 JS 运行时中（Apple 使用 **JavaScriptCore**，Android 使用 **QuickJS**，Windows 使用 **Jint**）：

- **显式权限审查：** 新导入的扩展默认保持禁用状态，必须由用户审查其声明的 `permissions.hosts` 域名白名单与能力字段（如 `"cookie"` 会话支持或 `"tree"` 渐进式子目录抓取）并批准后才可启用。
- **可控配置与本地测试：** 内置扩展独立设置项、200 条滚动日志查看器、不破坏既有曲库与缓存音频的安全禁用/卸载流程，并提供基于 Node.js 的一致性测试工具（`docs/extensions/tools/mock-runner.mjs`）。

## 发行构建与更新工程

项目通过 GitHub Actions CI 与 tag 触发的 Release 工作流自动构建与发布多平台产物，包括 `macOS .dmg`、`iOS .ipa`、`Android .apk`，以及 Windows 安装版（`Setup.exe`）与绿色便携版（`Portable .zip`，附带 `portable.txt` 时将数据保存于 `.\Data\`）。Windows、Android 与 macOS 均内置应用内更新器，支持检查 `releases/latest`、校验 `SHA256SUMS.txt` 与 **跳过此版本**。

## 仓库与下载

- **源码仓库：** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico)（MIT License）
- **版本下载：** [最新桌面与移动端发行版](https://github.com/SEANPNEX/Musico/releases/latest)
- **扩展文档：** [中文扩展开发指南](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.zh-CN.md) / [Extension Developer Guide](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
