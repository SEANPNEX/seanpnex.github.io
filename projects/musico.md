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
  image="/images/musico/architecture.svg"
  image-alt="Architecture diagram of Musico across Apple, Android, and Windows native clients"
  image-fit="contain"
  repo="https://github.com/SEANPNEX/Musico"
/>

## The question

Most cross-platform desktop and mobile apps converge on Electron or embedded WebViews, trading memory footprint, native audio pipelines, and OS integration for a single UI layer. Meanwhile, listeners with large local music archives often care about two things streaming apps ignore: keeping their folder tree intact and juggling independent playback queues without losing their place.

**Musico** explores the opposite trade-off: building a cozy, folder-first offline music player (inspired by **Musicolet** and **YRRLYB/Aria**) **100% natively** for Apple, Android, and Windows, while keeping the library model, playback semantics, and custom source extensions unified across platforms.

## Three native clients, zero web wrappers

Each platform client uses its ecosystem's native UI toolkit, audio engine, and system media integration, paired with an embedded lightweight JavaScript engine for extensions:

| Client | Target Platforms | Tech Stack | Native Design & Integration |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+, iPadOS, macOS (Catalyst) | Swift, SwiftUI (`@Observable`), `AVAudioEngine` + `AVAudioUnitEQ`, `MPNowPlayingInfoCenter`, `JavaScriptCore` (`Compression` + `CryptoKit`) | Apple HIG — tabs and sheets on iOS; sidebar, inspector, and menu shortcuts on macOS/iPadOS |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin, Jetpack Compose, AndroidX Media3 (ExoPlayer + `MediaSessionService`), SAF `DocumentFile`, `DynamicsProcessing` EQ, `QuickJS` (`quickjs-kt`) | Material 3 / Material You — Dynamic Color, adaptive `NavigationBar` / `NavigationRail`, `ModalBottomSheet` |
| `MusicoWindows/` | Windows 10 (2004+) & Windows 11 | C# / .NET 8 WPF, NAudio (`BiQuadFilter` 10-band EQ), TagLibSharp, Windows 10 SMTC, `Jint` | Windows 10 Fluent Design — Acrylic `NavigationView`, sharp geometry, Reveal hover, Light/Dark sync |

## Core capabilities

- **Folder-first library & safe relocation:** Mount local directories (`Music`, `Documents`, or custom folders) while preserving the underlying directory hierarchy. When a drive is unplugged or a folder moves, **Relocate** reconnects tracks without losing playlists or listening history. Broad lossless and lossy playback spans FLAC, ALAC, WAV, AIFF, MP3, AAC/M4A (plus OGG, Opus, WMA, and WebM depending on platform).
- **Cloud folders & offline sync:** Mount public or cookie-authenticated sources directly inside **Folders**—covering **YouTube / YouTube Music** (playlists, `RD` mixes, albums, single tracks), **Bilibili** (`BV`/`av` multi-part videos, `favlist`, collections), and **Google Drive** (recursive folder discovery and single files). Tracks can be saved locally with a `.musico-cloud.json` manifest and refreshed incrementally via **Update from Cloud**.
- **Multiple independent queues:** Spin up parallel queues for different moods or listening sessions; rename, reorder, clear, or switch queues anytime, with each queue persisting its own track, playback position, shuffle order, and repeat mode (`Off` / `All` / `One`).
- **Playback & library craft:**
  - **10-band ISO equalizer** (`31 Hz`–`16 kHz`) with `-12 dB` to `+12 dB` preamp and 8 presets plus `Custom`.
  - **Synced & plain lyrics** with automatic fallback (**Imported** → **Sidecar** `.lrc`/`.txt` → **Embedded** tags), multi-timestamp `.lrc` parsing, UTF-8 / UTF-16 BOM / GB18030 decoding, and tap-to-seek.
  - **Sleep timer, stats & tag editor:** `5`–`90` minute timers or end-of-track stop, listening stats (**Recent**, **Plays**, **Not Lately**, **Never**), inline metadata/cover-art editing, OS media controls, and live `English` / `简体中文` switching.

## Cross-platform JavaScript extensions

Rather than embedding a heavy WebView to support community or personal music sources, Musico executes a single CommonJS script (`.musico.js`) or ZIP bundle (`.musicoext`) directly inside each platform's native JS runtime (**JavaScriptCore** on Apple, **QuickJS** on Android, **Jint** on Windows):

- **Explicit permission review:** Newly imported extensions stay disabled until the user inspects declared `permissions.hosts` domain allowlists and capabilities (such as `"cookie"` auth or `"tree"` lazy subfolder crawling).
- **Safe operations & debugging:** Includes per-extension settings panels, a 200-entry rolling log viewer, non-destructive disable/uninstall that preserves existing library tracks and cached audio, and a Node.js conformance runner (`docs/extensions/tools/mock-runner.mjs`) for verifying extension scripts locally.

## Distribution & release engineering

Multi-platform GitHub Actions workflows build, test, and publish tagged releases for all targets—producing `macOS .dmg`, `iOS .ipa`, `Android .apk`, and both a Windows NSIS installer (`Setup.exe`) and self-contained portable build (`Portable .zip` keeping state in `.\Data\` when `portable.txt` is present). An in-app updater checks `releases/latest` with `SHA256SUMS.txt` verification and **Skip Version** support on Windows, Android, and macOS.

## Repository & downloads

- **Source code:** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico) (MIT License)
- **Releases:** [Latest desktop & mobile builds](https://github.com/SEANPNEX/Musico/releases/latest)
- **Extension docs:** [Extension Developer Guide](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
