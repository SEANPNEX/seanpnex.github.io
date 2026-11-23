---
pageClass: project-case-study
title: Musico
order: 5
---

<ProjectHero
  index="05"
  eyebrow="ソフトウェア工学 · ネイティブオーディオ"
  title="Musico：ネイティブ・オフライン音楽プレーヤー"
  summary="Apple、Android、Windows 向けにそれぞれ 100% ネイティブで構築された、フォルダ指向・マルチキュー対応のローカル音楽プレーヤー。Web ラッパーを使わず、共通の JavaScript 拡張ランタイムを備えています。"
  year="2025–2026"
  role="アーキテクチャ設計・ネイティブ UI・オーディオ実装"
  methods="SwiftUI · Jetpack Compose · .NET 8 WPF · JavaScriptCore / QuickJS / Jint"
  image="/images/musico/architecture.svg"
  image-alt="Apple・Android・Windows ネイティブクライアント間における Musico のアーキテクチャ図"
  image-fit="contain"
  repo="https://github.com/SEANPNEX/Musico"
/>

## 問い

現代のクロスプラットフォームアプリの多くは Electron や組み込み WebView を採用し、単一 UI 層の代わりにメモリ消費量やネイティブ音声パイプライン、OS との統合性を犠牲にしています。一方で、ローカル音源を大切に管理するリスナーにとって重要なのは、**フォルダ階層を崩さないこと**と、**複数の再生キューを独立して行き来できること**です。

**Musico** は **Musicolet** と **YRRLYB/Aria** に着想を得て、その逆のアプローチを取りました。Apple、Android、Windows それぞれに向けて **100% ネイティブ** なオフライン音楽プレーヤーを開発しつつ、ライブラリ構造、再生セマンティクス、カスタム音源拡張の仕組みを全プラットフォームで統一しています。

## Web ラッパーなしの 3 つのネイティブクライアント

各クライアントはプラットフォーム固有の UI ツールキット・オーディオエンジン・システムメディア連携を採用し、拡張機能向けに軽量な JavaScript エンジンを組み込んでいます：

| クライアント | 対象プラットフォーム | 技術スタック | ネイティブ UI と OS 連携 |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+、iPadOS、macOS (Catalyst) | Swift、SwiftUI（`@Observable`）、`AVAudioEngine` + `AVAudioUnitEQ`、`MPNowPlayingInfoCenter`、`JavaScriptCore`（`Compression` + `CryptoKit`） | Apple HIG — iOS のタブ／シート構成、macOS・iPadOS のサイドバー／インスペクタ・ショートカット |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin、Jetpack Compose、AndroidX Media3（ExoPlayer + `MediaSessionService`）、SAF `DocumentFile`、`DynamicsProcessing` EQ、`QuickJS`（`quickjs-kt`） | Material 3 / Material You — Dynamic Color、可変 `NavigationBar` / `NavigationRail`、`ModalBottomSheet` |
| `MusicoWindows/` | Windows 10 (2004+)・Windows 11 | C# / .NET 8 WPF、NAudio（`BiQuadFilter` 10 バンド EQ）、TagLibSharp、Windows 10 SMTC、`Jint` | Windows 10 Fluent Design — アクリル `NavigationView`、シャープな輪郭、Reveal ホバー、ライト／ダーク同期 |

## 主な機能

- **フォルダ指向ライブラリと安全な再配置：** `Music` や `Documents` などのローカルフォルダを階層そのままにマウント。ドライブの差し替えやフォルダ移動があっても **再配置（Relocate）** でプレイリストや再生履歴を失わずに再接続でき、FLAC / ALAC / WAV / AIFF / MP3 / AAC（プラットフォームにより OGG / Opus / WMA / WebM）の再生に対応します。
- **クラウドフォルダとオフライン同期：** **YouTube / YouTube Music**（プレイリスト、`RD` ミックス、アルバム、単曲）、**Bilibili**（`BV`/`av` 動画・マルチパート・お気に入り・コレクション）、**Google Drive**（共有フォルダの再帰探索と単一ファイル）を **フォルダ** 内に直接マウント可能。`.musico-cloud.json` マニフェストを用いてローカルへ保存し、**クラウドから更新** で差分同期できます。
- **複数の独立した再生キュー：** 気分や用途ごとに複数のキューを作成し、リネーム・切り替え・ドラッグ並び替え・クリアが可能。各キューが現在のトラック、再生位置、シャッフル順、リピート設定（`Off` / `All` / `One`）を個別に記憶します。
- **再生と管理の細部：**
  - **10 バンド ISO イコライザ**（`31 Hz`–`16 kHz`、プリアンプ `-12 dB`〜`+12 dB`、8 プリセット + `Custom`）。
  - **同期歌詞・プレーン歌詞**（**インポート** → **同階層** `.lrc`/`.txt` → **埋め込みタグ** の順で自動検出、複数タイムスタンプ、UTF-8 / UTF-16 BOM / GB18030 自動判別、タップシーク対応）。
  - **スリープタイマー・統計・タグ編集：** `5`〜`90` 分または **現在の曲の終了時** タイマー、再生統計（**Recent**、**Plays**、**Not Lately**、**Never**）、メタデータ／アートワーク編集、OS メディアコントロール、`English` / `简体中文` の即時切り替え。

## クロスプラットフォーム JavaScript 拡張

WebView を持ち込むことなく拡張機能を実現するため、1 本の CommonJS スクリプト（`.musico.js`）または ZIP バンドル（`.musicoext`）を各 OS の組み込み JS ランタイム（Apple：`JavaScriptCore`、Android：`QuickJS`、Windows：`Jint`）で直接実行します：

- **明示的な権限レビュー：** 新しくインポートした拡張は無効状態で保持され、宣言された `permissions.hosts` ドメイン許可リストや機能（`"cookie"` 認証、`"tree"` 段階的フォルダ探索など）を確認・承認した後に有効化できます。
- **安全な運用と開発ツール：** 拡張ごとの設定画面、直近 200 件のログビューア、既存ライブラリやキャッシュを壊さない無効化／アンインストール、およびローカル検証用の Node.js コンフォーマンスランナー（`docs/extensions/tools/mock-runner.mjs`）を備えています。

## 配布とリリースエンジニアリング

GitHub Actions の CI とタグ連動リリースにより、`macOS .dmg`、`iOS .ipa`、`Android .apk`、Windows インストーラ（`Setup.exe`）およびポータブル版（`Portable .zip`、`portable.txt` 配置時は `.\Data\` にデータ保存）を自動ビルド。Windows・Android・macOS には `SHA256SUMS.txt` を検証するアプリ内アップデータとバージョン・スキップ機能も組み込まれています。

## リポジトリとダウンロード

- **ソースコード：** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico)（MIT License）
- **リリース：** [最新のデスクトップ／モバイル版ビルド](https://github.com/SEANPNEX/Musico/releases/latest)
- **拡張ガイド：** [Extension Developer Guide](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
