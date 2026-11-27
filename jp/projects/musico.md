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
  chart="/charts/musico-architecture.html?lang=ja"
  image-alt="Apple・Android・Windows ネイティブクライアント間における Musico のインタラクティブ構成図"
  docs="https://musico.seanpnex.win/?lang=ja"
  repo="https://github.com/SEANPNEX/Musico"
/>

## 問い

現代のクロスプラットフォームのデスクトップ／モバイルアプリの多くは Electron や組み込み WebView を採用し、単一 UI 層の代わりにメモリ消費量やネイティブ音声パイプライン、OS との統合性を犠牲にしています。一方で、ローカル音源を大切に管理するリスナーにとって重要なのは、ストリーミングアプリが無視しがちな 2 つの点――**フォルダ階層を崩さないこと**と、**再生位置を失わずに複数の独立した再生キューを行き来できること**です。

**Musico** はその逆のトレードオフを追求しました。**Musicolet** と **YRRLYB/Aria** に着想を得て、Apple、Android、Windows それぞれに向けて心地よいフォルダ指向オフライン音楽プレーヤーを **100% ネイティブ** で構築しつつ、ライブラリモデル、再生セマンティクス、カスタム音源拡張の仕組みを全プラットフォームで統一しています。

## Web ラッパーなしの 3 つのネイティブクライアント

各プラットフォームのクライアントはそれぞれのエコシステム固有の UI ツールキット・オーディオエンジン・システムメディア連携を採用し、拡張機能向けに軽量な JavaScript エンジンを組み込んでいます：

| クライアント | 対象プラットフォーム | 技術スタック | ネイティブデザインと OS 連携 |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+、iPadOS、macOS (Catalyst) | Swift、SwiftUI（`@Observable`）、`AVAudioEngine` + `AVAudioUnitEQ`、`MPNowPlayingInfoCenter`、`JavaScriptCore`（`Compression` + `CryptoKit`） | Apple HIG — iOS のタブ／シート構成；macOS の `NSVisualEffectView` すりガラス半透明、独立したサイドバー色、`Cmd+K` コマンドパレット、フローティング・ミニプレーヤー、ドラッグ＆ドロップ対応 |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin、Jetpack Compose、AndroidX Media3（ExoPlayer + `MediaSessionService`）、SAF `DocumentFile`、`DynamicsProcessing` EQ、`QuickJS`（`quickjs-kt`） | Material 3 / Material You — Dynamic Color、可変 `NavigationBar` / `NavigationRail`、`ModalBottomSheet`、カスタム外観テーマ、端末／`Musico` フォルダ削除対応 |
| `MusicoWindows/` | Windows 10 (2004+)・Windows 11 | C# / .NET 8 WPF、NAudio（`BiQuadFilter` 10 バンド EQ）、TagLibSharp、Windows 10 SMTC、`Jint` | Fluent Design — Windows 11 DWM 角丸／背景＆Acrylic、独立したサイドバー色と不透明度、`Ctrl+K` コマンドパレット、フローティング・ミニプレーヤー、ドラッグ＆ドロップ対応 |

## 主な機能

- **フォルダ指向ライブラリ・ドラッグ＆ドロップ・安全な削除：** 元のディレクトリ階層を保ったままローカルフォルダ（`Music`、`Documents`、または任意のフォルダ）をマウントできるほか、macOS/Windows ではフォルダや音声ファイルをウィンドウへ直接ドラッグ＆ドロップできます（ドロップしたフォルダは **フォルダ** にマウントされ、曲は即座に再生し、ライブラリ外のファイルは既定の音楽フォルダへコピー）。ドライブを取り外したりフォルダを移動しても、**再配置（Relocate）** でプレイリストや再生履歴を失わずに再接続できます。削除操作は **ライブラリから削除** とディスク上の削除（macOS の **ゴミ箱に入れる**、Windows の **ごみ箱に移動**、iOS/Android の Android `Musico` フォルダを含む **端末から削除**）を明確に分離。FLAC、ALAC、WAV、AIFF、MP3、AAC/M4A（プラットフォームにより OGG、Opus、WMA、WebM）のロスレス／ロッシー再生に幅広く対応します。
- **クラウドフォルダ・任意の Drive OAuth 2.0・オフライン同期：** 公開または Cookie 認証ソースを **フォルダ** 内に直接マウント可能――**YouTube / YouTube Music**（プレイリスト、`RD` ミックス、アルバム、単曲）、**Bilibili**（`BV`/`av` マルチパート動画、`favlist`、コレクション）、**Google Drive**（再帰的フォルダ探索と単一ファイル）に対応します。公開／共有 Drive リンクはログイン不要で利用でき、非公開フォルダや大容量ファイルのダウンロード回避には、任意の **設定 → Google Drive アカウント** にユーザー自身の無料デスクトップアプリ用 OAuth 2.0 クライアント ID（`drive.readonly` + `userinfo.email`、テストモード、自動 `http://127.0.0.1:<port>/oauth2callback`、**Google Drive に再接続** 付き 7 日間テストトークン）を設定できます。トラックは `.musico-cloud.json` マニフェストとともにローカルへ保存し、**クラウドから更新** で差分取得できます。
- **複数の独立した再生キュー：** 気分や聴くシーンに合わせて並列キューを立ち上げ、いつでもリネーム・並び替え・クリア・切り替えが可能。各キューが現在のトラック、再生位置、シャッフル順、リピートモード（`Off` / `All` / `One`）を個別に保持します。
- **統合設定の外観カスタマイズ＆デスクトップ向け機能：** 統合された **設定**（`Cmd+,` / `Ctrl+,`）では、システム／ライト／ダークモード、厳選された背景＆アクセントプリセット、カスタム HEX/RGB/システムカラーピッカー、ライブの **再生中プレビュー**、ワンクリック **コントラスト自動修正（Auto-fix Contrast）** 付き内蔵 **WCAG 2.1 コントラストチェック**、および **画像の可視性**（不透明度）と **背景のぼかし** を調整できるカスタム背景画像を提供します。デスクトップ版ではさらにグローバルな **コマンドパレット／クイックジャンプ**（`Cmd+K` / `Ctrl+K`）、**フローティング・ミニプレーヤー** ウィンドウ（`Cmd+Shift+N` / `Ctrl+Shift+N`）、拡充されたキーボードショートカット（歌詞 `Cmd+Shift+L` / `Ctrl+Shift+L` / `L`、キュー `Cmd+Shift+Q` / `Ctrl+Shift+Q` / `Q`、シーク `±10秒`、音量 `±5%`、ミュート、シャッフル／リピート、再生中画面）を備えます。
- **再生体験とライブラリ管理の細部：**
  - **10 バンド ISO イコライザ**（`31 Hz`–`16 kHz`、プリアンプ `-12 dB`〜`+12 dB`、8 プリセット + `Custom`）。
  - **同期歌詞・プレーン歌詞**（**インポート** → **サイドカー** `.lrc`/`.txt` → **埋め込みタグ** の順で自動フォールバック、複数タイムスタンプ `.lrc` 解析、UTF-8 / UTF-16 BOM / GB18030 デコード、タップシーク、文字サイズ・配置のカスタマイズ、**現在の行に同期** 対応）。
  - **スリープタイマー・統計・タグ編集：** `5`〜`90` 分または曲終了時停止タイマー、再生統計（**最近**、**再生回数**、**最近聴いていない**、**未再生** に加え **トップアーティスト** と **トップアルバム**）、インラインのメタデータ／カバーアート編集、OS メディアコントロール、`English` / `简体中文` の即時切り替え。

## クロスプラットフォーム JavaScript 拡張

コミュニティや個人向けの音楽ソースに対応するために重い WebView を組み込むのではなく、1 本の CommonJS スクリプト（`.musico.js`）または ZIP バンドル（`.musicoext`）を各プラットフォームのネイティブ JS ランタイム（Apple：`JavaScriptCore`、Android：`QuickJS`、Windows：`Jint`）内で直接実行します：

- **明示的な権限レビューと隔離されたサインイン：** 新しくインポートした拡張は無効状態で保持され、宣言された `permissions.hosts` ドメイン許可リストや機能（`"cookie"`、`"qr_login"`、`"web_login"`、`"tree"`、`"proxy"` など）をユーザーが確認した後に有効化できます。`"web_login"` 機能と条件付きマニフェスト `webLogin`（`{ loginUrl, cookieDomains, requiredCookies?, userAgent? }`）を組み合わせると、プレーヤー UI を 100% ネイティブに保ったまま、サインインの Cookie 取得専用の隔離された一時 OS WebView（**WKWebView** / **Android WebView** / **WebView2**）が開きます。マスク表示付きの `cookies.txt` ファイルインポートにも対応しています。
- **公式プラグインエコシステム（`v2026.11.26`）：** 公式プラグインはすぐインポートできるバンドルとして提供され、**YouTube Search** `v1.2.0`（`web_login` + 音質ティア）、**Bilibili Search** `v1.2.0`（`qr_login` + Hi-Res/FLAC ティア）、**NetEase Cloud Music** `v1.2.0`（9 段階音質ティア + `qr_login`）、**Apple Music** `v1.0.1`（`searchLyrics` への Bearer トークン転送 + コーデック／アートワークフォールバック）を網羅しています。
- **安全な運用とデバッグ：** 拡張ごとの設定パネル、200 件のローリングログビューア、既存のライブラリ曲やキャッシュ済み音声を保持したままの非破壊的な無効化／アンインストール、そして拡張スクリプトをローカルで検証できる Node.js コンフォーマンスランナー（`docs/extensions/tools/mock-runner.mjs`）を備えています。

## 配布とリリースエンジニアリング

マルチプラットフォーム対応の GitHub Actions ワークフローにより、すべてのターゲット向けにタグ付きリリース（最新 `v1.3.2`）を自動ビルド・テスト・公開しており、macOS Catalyst `.dmg`、iOS 未署名 `.ipa`、Android リリース／デバッグ `.apk`、Windows NSIS インストーラ（`Setup.exe`）および自己完結型ポータブル `.zip`（`portable.txt` 配置時は `.\Data\` に状態を保持）を生成します。Windows・Android・macOS には `SHA256SUMS.txt` 検証と **バージョンをスキップ（Skip Version）** に対応したアプリ内アップデータも組み込まれています。

## リポジトリとダウンロード

- **ドキュメント＆プラグインハブ：** [musico.seanpnex.win/?lang=ja](https://musico.seanpnex.win/?lang=ja)（ユーザーガイド・公式プラグイン・拡張 API v1）
- **ソースコード：** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico)（MIT License）
- **リリース：** [最新のデスクトップ／モバイル版ビルド](https://github.com/SEANPNEX/Musico/releases/latest)
- **拡張開発ガイド：** [musico.seanpnex.win/developers/?lang=ja](https://musico.seanpnex.win/developers/?lang=ja) · [GitHub README](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
