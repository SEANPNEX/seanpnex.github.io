---
pageClass: project-case-study
title: Musico
order: 5
---

<ProjectHero
  index="05"
  eyebrow="Génie logiciel · Audio natif"
  title="Musico : lecteur musical natif hors ligne"
  summary="Un lecteur audio local hors ligne, centré sur les dossiers et multi-files, développé nativement pour Apple, Android et Windows — sans aucun wrapper web, avec un moteur d’extensions JavaScript partagé."
  year="2025–2026"
  role="Architecture, interface native et ingénierie audio"
  methods="SwiftUI · Jetpack Compose · .NET 8 WPF · JavaScriptCore / QuickJS / Jint"
  chart="/charts/musico-architecture.html?lang=fr"
  image-alt="Schéma d’architecture interactif de Musico sur les clients natifs Apple, Android et Windows"
  docs="https://musico.seanpnex.win/?lang=fr"
  repo="https://github.com/SEANPNEX/Musico"
/>

## La question

La plupart des applications multiplateformes s’appuient sur Electron ou des WebViews embarquées, sacrifiant l’empreinte mémoire, les pipelines audio natifs et l’intégration système au profit d’une interface unique. Or, les auditeurs qui entretiennent de vastes bibliothèques locales privilégient deux usages souvent négligés par le streaming : préserver l’arborescence exacte de leurs dossiers et naviguer entre plusieurs files d’attente indépendantes sans perdre leur progression.

**Musico** explore l’approche inverse : concevoir un lecteur hors ligne chaleureux et centré sur les dossiers (inspiré par **Musicolet** et **YRRLYB/Aria**) **100 % natif** pour Apple, Android et Windows, tout en unifiant le modèle de bibliothèque, la lecture et les extensions multiplateformes.

## Trois clients natifs, zéro wrapper web

Chaque client s’appuie sur la pile graphique, le moteur audio et les contrôles multimédias natifs de son système, couplés à un moteur JavaScript léger embarqué pour les extensions :

| Client | Plateformes cibles | Pile technique | Design natif et intégration |
| --- | --- | --- | --- |
| `Musico/` | iOS 17+, iPadOS, macOS (Catalyst) | Swift, SwiftUI (`@Observable`), `AVAudioEngine` + `AVAudioUnitEQ`, `MPNowPlayingInfoCenter`, `JavaScriptCore` (`Compression` + `CryptoKit`) | Apple HIG — onglets et feuilles sur iOS ; barre latérale, inspecteur et raccourcis sur macOS/iPadOS |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin, Jetpack Compose, AndroidX Media3 (ExoPlayer + `MediaSessionService`), SAF `DocumentFile`, égaliseur `DynamicsProcessing`, `QuickJS` (`quickjs-kt`) | Material 3 / Material You — couleurs dynamiques, `NavigationBar` / `NavigationRail` adaptatifs, `ModalBottomSheet` |
| `MusicoWindows/` | Windows 10 (2004+) et Windows 11 | C# / .NET 8 WPF, NAudio (égaliseur `BiQuadFilter` à 10 bandes), TagLibSharp, Windows 10 SMTC, `Jint` | Windows 10 Fluent Design — `NavigationView` acrylique, géométrie nette, effet Reveal et suivi clair/sombre |

## Fonctionnalités clés

- **Bibliothèque centrée sur les dossiers et relocalisation sûre :** montez vos répertoires locaux (`Music`, `Documents` ou dossiers personnalisés) en conservant leur hiérarchie intacte. Si un disque est déplacé, **Relocate** reconnecte les pistes sans perdre vos listes ni vos statistiques. Lecture des formats lossless et lossy (FLAC, ALAC, WAV, AIFF, MP3, AAC/M4A, ainsi que OGG, Opus, WMA ou WebM selon la plateforme).
- **Dossiers cloud et synchronisation hors ligne :** montez directement dans **Dossiers** des sources **YouTube / YouTube Music** (listes de lecture, mix `RD`, albums, titres), **Bilibili** (vidéos `BV`/`av`, multi-parties, favoris, collections) et **Google Drive** (dossiers partagés avec découverte récursive et fichiers audio). Enregistrez les morceaux localement avec un manifeste `.musico-cloud.json` et synchronisez les ajouts via **Mettre à jour depuis le cloud**.
- **Files d’attente multiples et indépendantes :** créez autant de files que souhaité ; renommez, réorganisez par glisser-déposer, videz ou basculez à tout moment. Chaque file conserve sa piste active, sa position de lecture, son ordre aléatoire et son mode de répétition (`Off` / `All` / `One`).
- **Soins apportés à la lecture :**
  - **Égaliseur ISO 10 bandes** (`31 Hz`–`16 kHz`) avec préampli (`-12 dB` à `+12 dB`), 8 préréglages et mode `Custom`.
  - **Paroles synchronisées et texte :** priorité **Importées** → **Accompagnantes** `.lrc`/`.txt` → **Intégrées**, horodatages multiples, détection UTF-8 / UTF-16 BOM / GB18030 et recherche tactile par ligne.
  - **Minuterie de mise en veille, statistiques et éditeur de tags :** minuteries de `5` à `90` minutes ou fin de piste, statistiques (**Récents**, **Lectures**, **Pas écoutés récemment**, **Jamais**), édition des métadonnées et pochettes, contrôles système et changement de langue à chaud (`English` / `简体中文`).

## Extensions JavaScript multiplateformes

Plutôt que d’embarquer une WebView lourde, Musico exécute un unique script CommonJS (`.musico.js`) ou une archive ZIP (`.musicoext`) dans le moteur JS natif de chaque plateforme (**JavaScriptCore** sur Apple, **QuickJS** sur Android, **Jint** sur Windows) :

- **Revue explicite des permissions :** toute extension importée reste désactivée tant que l’utilisateur n’a pas vérifié les domaines autorisés (`permissions.hosts`) et les capacités déclarées (`"cookie"`, exploration progressive `"tree"`).
- **Exploitation fiable et outillage :** réglages dédiés par extension, journal des 200 dernières entrées, désactivation ou suppression sans altérer les pistes ni les caches existants, et outil de conformité Node.js (`docs/extensions/tools/mock-runner.mjs`).

## Distribution et ingénierie des versions

Les workflows GitHub Actions assurent l’intégration continue et la publication automatique des versions taguées : `macOS .dmg`, `iOS .ipa`, `Android .apk`, installateur Windows (`Setup.exe`) et archive portable autonome (`Portable .zip` stockant les données dans `.\Data\` avec `portable.txt`). Un système de mise à jour intégré vérifie `releases/latest` avec contrôle `SHA256SUMS.txt` et option **Ignorer cette version** sous Windows, Android et macOS.

## Dépôt et téléchargements

- **Documentation et portail plugins :** [musico.seanpnex.win/?lang=fr](https://musico.seanpnex.win/?lang=fr) (Guide utilisateur, plugins officiels et API v1)
- **Code source :** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico) (licence MIT)
- **Versions :** [Dernières builds bureau et mobile](https://github.com/SEANPNEX/Musico/releases/latest)
- **Guide développeur extensions :** [musico.seanpnex.win/developers/?lang=fr](https://musico.seanpnex.win/developers/?lang=fr) · [GitHub README](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
