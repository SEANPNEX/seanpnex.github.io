---
pageClass: project-case-study
title: Musico
order: 5
---

<ProjectHero
  index="05"
  eyebrow="Software engineering · Native audio"
  title="Musico: Native Offline Music Player"
  summary="An offline, folder-first, multi-queue local music player built natively for Apple, Android, and Windows—with zero web wrappers and a shared cross-platform JavaScript extension runtime."
  year="2025–2026"
  role="Architecture, native UI & audio engineering"
  methods="SwiftUI · Jetpack Compose · .NET 8 WPF · JavaScriptCore / QuickJS / Jint"
  chart="/charts/musico-architecture.html"
  image-alt="Interactive architecture diagram of Musico across Apple, Android, and Windows native clients"
  docs="https://musico.seanpnex.win"
  repo="https://github.com/SEANPNEX/Musico"
/>

## The question

Most cross-platform desktop and mobile apps converge on Electron or embedded WebViews, trading memory footprint, native audio pipelines, and OS integration for a single UI layer. Meanwhile, listeners with large local music archives often care about two things streaming apps ignore: keeping their folder tree intact and juggling independent playback queues without losing their place.

**Musico** explores the opposite trade-off: building a cozy, folder-first offline music player (inspired by **Musicolet** and **YRRLYB/Aria**) **100% natively** for Apple, Android, and Windows, while keeping the library model, playback semantics, and custom source extensions unified across platforms.

## Three native clients, zero web wrappers

Each platform client uses its ecosystem's native UI toolkit, audio engine, and system media integration, paired with an embedded lightweight JavaScript engine for extensions:

| Client | Target Platforms | Tech Stack | Native Design & Integration |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+, iPadOS, macOS (Catalyst) | Swift, SwiftUI (`@Observable`), `AVAudioEngine` + `AVAudioUnitEQ`, `MPNowPlayingInfoCenter`, `JavaScriptCore` (`Compression` + `CryptoKit`) | Apple HIG — tabs and sheets on iOS; `NSVisualEffectView` frosted translucency, independent sidebar color, `Cmd+K` Command Palette, Floating Mini-Player, and drag-and-drop on macOS |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin, Jetpack Compose, AndroidX Media3 (ExoPlayer + `MediaSessionService`), SAF `DocumentFile`, `DynamicsProcessing` EQ, `QuickJS` (`quickjs-kt`) | Material 3 / Material You — Dynamic Color, adaptive `NavigationBar` / `NavigationRail`, `ModalBottomSheet`, custom appearance themes, and device/`Musico`-folder delete |
| `MusicoWindows/` | Windows 10 (2004+) & Windows 11 | C# / .NET 8 WPF, NAudio (`BiQuadFilter` 10-band EQ), TagLibSharp, Windows 10 SMTC, `Jint` | Fluent Design — Windows 11 DWM rounded corners/backdrop & Acrylic, independent sidebar color & opacity, `Ctrl+K` Command Palette, Floating Mini-Player, and drag-and-drop |

## Core capabilities

- **Folder-first library, drag-and-drop & safe deletion:** Mount local directories (`Music`, `Documents`, or custom folders) while preserving the underlying directory hierarchy, or drop local folders and audio files directly onto the macOS/Windows window (mounting dropped folders in **Folders** and playing dropped tracks immediately while copying outside-library files into the default music folder). When a drive is unplugged or a folder moves, **Relocate** reconnects tracks without losing playlists or listening history. Deletion cleanly separates **Remove from Library** from disk deletion (**Move to Trash** on macOS, **Move to Recycle Bin** on Windows, **Delete from Device** on iOS/Android including Android's `Musico` folder). Broad lossless and lossy playback spans FLAC, ALAC, WAV, AIFF, MP3, AAC/M4A (plus OGG, Opus, WMA, and WebM depending on platform).
- **Cloud folders, optional Drive OAuth 2.0 & offline sync:** Mount public or cookie-authenticated sources directly inside **Folders**—covering **YouTube / YouTube Music** (playlists, `RD` mixes, albums, single tracks), **Bilibili** (`BV`/`av` multi-part videos, `favlist`, collections), and **Google Drive** (recursive folder discovery and single files). Public/shared Drive links remain zero-login, while optional **Settings → Google Drive Account** accepts a user's own free Desktop app OAuth 2.0 Client ID (`drive.readonly` + `userinfo.email`, Testing mode, automatic `http://127.0.0.1:<port>/oauth2callback`, 7-day Testing token with **Reconnect Google Drive**) for private folders and large-file download bypass. Tracks can be saved locally with a `.musico-cloud.json` manifest and refreshed incrementally via **Update from Cloud**.
- **Multiple independent queues:** Spin up parallel queues for different moods or listening sessions; rename, reorder, clear, or switch queues anytime, with each queue persisting its own track, playback position, shuffle order, and repeat mode (`Off` / `All` / `One`).
- **Unified Appearance & desktop power features:** Unified **Settings** (`Cmd+,` / `Ctrl+,`) offers System/Light/Dark modes, curated background & accent presets, custom hex/RGB/system color pickers, a live **Now Playing Preview**, built-in **WCAG 2.1 contrast check** with one-click **Auto-fix Contrast**, and custom background images with **Image Visibility** (opacity) and **Background Blur**. Desktop adds a global **Command Palette / Quick Jump** (`Cmd+K` / `Ctrl+K`), **Floating Mini-Player** window (`Cmd+Shift+N` / `Ctrl+Shift+N`), and expanded keyboard shortcuts (Lyrics `Cmd+Shift+L` / `Ctrl+Shift+L` / `L`, Queue `Cmd+Shift+Q` / `Ctrl+Shift+Q` / `Q`, Seek `±10s`, Volume `±5%`, Mute, Shuffle/Repeat, Now Playing).
- **Playback & library craft:**
  - **10-band ISO equalizer** (`31 Hz`–`16 kHz`) with `-12 dB` to `+12 dB` preamp and 8 presets plus `Custom`.
  - **Synced & plain lyrics** with automatic fallback (**Imported** → **Sidecar** `.lrc`/`.txt` → **Embedded** tags), multi-timestamp `.lrc` parsing, UTF-8 / UTF-16 BOM / GB18030 decoding, tap-to-seek, customizable font size and alignment, and **Sync to current line**.
  - **Sleep timer, stats & tag editor:** `5`–`90` minute timers or end-of-track stop, listening stats (**Recent**, **Plays**, **Not Lately**, **Never**, plus **Top Artists** and **Top Albums**), inline metadata/cover-art editing, OS media controls, and live `English` / `简体中文` switching.

## Cross-platform JavaScript extensions

Rather than embedding a heavy WebView to support community or personal music sources, Musico executes a single CommonJS script (`.musico.js`) or ZIP bundle (`.musicoext`) directly inside each platform's native JS runtime (**JavaScriptCore** on Apple, **QuickJS** on Android, **Jint** on Windows):

- **Explicit permission review & isolated sign-in:** Newly imported extensions stay disabled until the user inspects declared `permissions.hosts` domain allowlists and capabilities (such as `"cookie"`, `"qr_login"`, `"web_login"`, `"tree"`, or `"proxy"`). The `"web_login"` capability paired with conditional manifest `webLogin` (`{ loginUrl, cookieDomains, requiredCookies?, userAgent? }`) opens an isolated, ephemeral OS WebView (**WKWebView** / **Android WebView** / **WebView2**) strictly for sign-in cookie capture—keeping the player UI 100% native—alongside masked `cookies.txt` file import.
- **Official plugin ecosystem (`v2026.11.26`):** Official plugins ship as ready-to-import bundles covering **YouTube Search** `v1.2.0` (`web_login` + quality tiers), **Bilibili Search** `v1.2.0` (`qr_login` + Hi-Res/FLAC tier), **NetEase Cloud Music** `v1.2.0` (9 quality tiers + `qr_login`), and **Apple Music** `v1.0.1` (Bearer token forwarding on `searchLyrics` + codecs/artwork fallback).
- **Safe operations & debugging:** Includes per-extension settings panels, a 200-entry rolling log viewer, non-destructive disable/uninstall that preserves existing library tracks and cached audio, and a Node.js conformance runner (`docs/extensions/tools/mock-runner.mjs`) for verifying extension scripts locally.

## Distribution & release engineering

Multi-platform GitHub Actions workflows build, test, and publish tagged releases (latest `v1.3.2`) for all targets—producing a macOS Catalyst `.dmg`, iOS unsigned `.ipa`, Android release/debug `.apk`, and both a Windows NSIS installer (`Setup.exe`) and self-contained portable `.zip` (keeping state in `.\Data\` when `portable.txt` is present). An in-app updater checks `releases/latest` with `SHA256SUMS.txt` verification and **Skip Version** support on Windows, Android, and macOS.

## Repository & downloads

- **Documentation & plugin hub:** [musico.seanpnex.win](https://musico.seanpnex.win) (User Guide, Official Plugins & Extension API v1 Docs)
- **Source code:** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico) (MIT License)
- **Releases:** [Latest desktop & mobile builds](https://github.com/SEANPNEX/Musico/releases/latest)
- **Extension developer docs:** [musico.seanpnex.win/developers/](https://musico.seanpnex.win/developers/) · [GitHub README](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
