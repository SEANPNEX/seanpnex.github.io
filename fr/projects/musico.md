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
| `Musico/` | iOS 17+, iPadOS, macOS (Catalyst) | Swift, SwiftUI (`@Observable`), `AVAudioEngine` + `AVAudioUnitEQ`, `MPNowPlayingInfoCenter`, `JavaScriptCore` (`Compression` + `CryptoKit`) | Apple HIG — onglets, feuilles et gestes de balayage iOS (`allowsFullSwipe: false` pour éviter toute suppression accidentelle de dossier, plus **Annuler** au balayage dans Files/Playlists) ; translucidité givrée `NSVisualEffectView`, couleur de barre latérale indépendante, palette de commandes `Cmd+K`, mini-lecteur flottant et glisser-déposer sur macOS |
| `MusicoAndroid/` | Android 8.0+ (API 26+) | Kotlin, Jetpack Compose, AndroidX Media3 (ExoPlayer + `MediaSessionService`), SAF `DocumentFile`, égaliseur `DynamicsProcessing`, `QuickJS` (`quickjs-kt`) | Material 3 / Material You — Dynamic Color, `NavigationBar` / `NavigationRail` adaptatifs, `ModalBottomSheet`, gestes de balayage en 2 temps Outlook × Material You `MusicoSwipeActionRow` (rail arrière découpé proprement, cran haptique, verrouillage du balayage sur la poignée `DragReorder` pour que `≡` ne coince jamais), sélecteurs segmentés sur une ligne sans coche encombrante, barres `MusicoSnackbarHost` à thème sombre avec **Annuler** sur la file, thèmes d’apparence personnalisés et suppression sur l’appareil / dossier `Musico` |
| `MusicoWindows/` | Windows 10 (2004+) et Windows 11 | C# / .NET 8 WPF, NAudio (égaliseur `BiQuadFilter` à 10 bandes), TagLibSharp, Windows 10 SMTC, `Jint` | Fluent Design — coins arrondis / arrière-plan DWM et Acrylique de Windows 11, couleur et opacité indépendantes de la barre latérale, palette de commandes `Ctrl+K`, mini-lecteur flottant et glisser-déposer |

## Fonctionnalités clés

- **Bibliothèque centrée sur les dossiers, glisser-déposer et suppression sûre :** montez vos répertoires locaux (`Music`, `Documents` ou dossiers personnalisés) en conservant leur hiérarchie intacte, ou déposez directement des dossiers locaux et fichiers audio sur la fenêtre macOS/Windows (les dossiers déposés sont montés dans **Dossiers** et les pistes lues immédiatement, tandis que les fichiers hors bibliothèque sont copiés dans le dossier musical par défaut). Si un disque est débranché ou un dossier déplacé, **Relocate** reconnecte les pistes sans perdre vos playlists ni votre historique d’écoute. La suppression distingue clairement **Retirer de la bibliothèque** de la suppression sur disque (**Placer dans la corbeille** sur macOS, **Mettre dans la Corbeille** sur Windows, **Supprimer de l’appareil** sur iOS/Android, y compris le dossier `Musico` d’Android). Lecture étendue lossless et lossy : FLAC, ALAC, WAV, AIFF, MP3, AAC/M4A (ainsi que OGG, Opus, WMA et WebM selon la plateforme).
- **Dossiers cloud, OAuth 2.0 Drive optionnel et synchronisation hors ligne :** montez directement dans **Dossiers** des sources publiques ou authentifiées par cookie — **YouTube / YouTube Music** (playlists, mix `RD`, albums, titres isolés), **Bilibili** (vidéos `BV`/`av` multi-parties, `favlist`, collections) et **Google Drive** (découverte récursive de dossiers et fichiers individuels). Les liens Drive publics ou partagés restent utilisables sans connexion, tandis que l’option **Réglages → Compte Google Drive** accepte l’ID client OAuth 2.0 d’application de bureau gratuit de l’utilisateur (`drive.readonly` + `userinfo.email`, mode Test, `http://127.0.0.1:<port>/oauth2callback` automatique, jeton Test de 7 jours avec **Reconnecter Google Drive**) pour les dossiers privés et le contournement de téléchargement des gros fichiers. Les morceaux peuvent être enregistrés localement avec un manifeste `.musico-cloud.json` et actualisés de façon incrémentale via **Mettre à jour depuis le cloud**.
- **Files d’attente multiples et indépendantes, `Play Next` dédupliqué et balayage mobile :** créez autant de files parallèles que d’humeurs ou de sessions d’écoute ; renommez, réorganisez, videz ou changez de file à tout moment, chacune conservant sa piste active, sa position de lecture, son ordre aléatoire et son mode de répétition (`Off` / `All` / `One`). Le **`Play Next` dédupliqué** sur Apple, Android et Windows (`insertNext`) déplace proprement une occurrence existante non active dans la file au lieu de dupliquer le morceau, sans perturber la piste en cours de lecture. Des gestes de balayage mobile harmonisés proposent **Lire ensuite** vers la droite ; vers la gauche dans **Titres**, une boîte de confirmation **Retirer de la bibliothèque** / **Supprimer de l’appareil** s’ouvre (désactivée sur les aperçus cloud éphémères) ; vers la gauche dans **Files**, **Playlists** et **Favoris**, la suppression est immédiate avec **Annuler** restaurant la position exacte dans la file, l’index actif et l’horodatage de reprise ; enfin Android relève le seuil de suppression par balayage des dossiers (`~44%` / `min 140dp`) pour prévenir toute suppression accidentelle.
- **Apparence unifiée et fonctions bureau avancées :** les **Réglages** unifiés (`Cmd+,` / `Ctrl+,`) proposent les modes Système/Clair/Sombre, des préréglages d’arrière-plan et d’accentuation soignés, des sélecteurs de couleur hex/RVB/système, un **aperçu En cours de lecture** en direct, un **contrôle de contraste WCAG 2.1** intégré avec **Correction auto du contraste** en un clic, ainsi que des images d’arrière-plan personnalisées avec **Visibilité de l’image** (opacité) et **Flou d’arrière-plan**. Sur ordinateur s’ajoutent une **Palette de commandes / Accès rapide** globale (`Cmd+K` / `Ctrl+K`), une fenêtre **Mini-lecteur flottant** (`Cmd+Shift+N` / `Ctrl+Shift+N`) et des raccourcis clavier étendus (Paroles `Cmd+Shift+L` / `Ctrl+Shift+L` / `L`, File `Cmd+Shift+Q` / `Ctrl+Shift+Q` / `Q`, Avance/recul `±10s`, Volume `±5%`, Muet, Aléatoire/Répétition, En cours de lecture).
- **Soins apportés à la lecture et à la bibliothèque :**
  - **Égaliseur ISO 10 bandes** (`31 Hz`–`16 kHz`) avec préampli de `-12 dB` à `+12 dB`, 8 préréglages et mode `Custom`.
  - **Paroles synchronisées et texte :** priorité automatique **Importées** → **Accompagnantes** `.lrc`/`.txt` → **Intégrées**, horodatages multiples `.lrc`, décodage UTF-8 / UTF-16 BOM / GB18030, recherche tactile par ligne, taille de police et alignement personnalisables, et bouton **Synchroniser sur la ligne actuelle**.
  - **Minuterie de mise en veille, statistiques et éditeur de tags :** minuteries de `5` à `90` minutes ou arrêt en fin de piste, statistiques d’écoute (**Récents**, **Lectures**, **Pas écoutés récemment**, **Jamais**, plus **Top Artistes** et **Top Albums**), édition directe des métadonnées et pochettes, contrôles média système et changement de langue à chaud (`English` / `简体中文`).

## Extensions JavaScript multiplateformes

Plutôt que d’embarquer une WebView lourde pour prendre en charge les sources musicales personnelles ou communautaires, Musico exécute un unique script CommonJS (`.musico.js`) ou une archive ZIP (`.musicoext`) directement dans le moteur JS natif de chaque plateforme (**JavaScriptCore** sur Apple, **QuickJS** sur Android, **Jint** sur Windows) :

- **Revue explicite des permissions et connexion isolée :** toute extension importée reste désactivée tant que l’utilisateur n’a pas inspecté la liste blanche de domaines `permissions.hosts` et les capacités déclarées (`"cookie"`, `"qr_login"`, `"web_login"`, `"tree"` ou `"proxy"`). La capacité `"web_login"`, associée au champ conditionnel `webLogin` du manifeste (`{ loginUrl, cookieDomains, requiredCookies?, userAgent? }`), ouvre une WebView système éphémère et isolée (**WKWebView** / **Android WebView** / **WebView2**) strictement dédiée à la capture du cookie de session — l’interface du lecteur reste 100 % native — en complément de l’import masqué de fichiers `cookies.txt`.
- **Écosystème de plugins officiels (`v2026.11.26`) :** les plugins officiels sont livrés sous forme de paquets prêts à importer couvrant **YouTube Search** `v1.2.0` (`web_login` + paliers de qualité), **Bilibili Search** `v1.2.0` (`qr_login` + palier Hi-Res/FLAC), **NetEase Cloud Music** `v1.2.0` (9 paliers de qualité + `qr_login`) et **Apple Music** `v1.0.1` (transmission du jeton Bearer sur `searchLyrics` + repli codecs/pochettes).
- **Exploitation fiable et débogage :** inclut des panneaux de réglages par extension, un journal glissant des 200 dernières entrées, une désactivation/désinstallation non destructive qui préserve les pistes de la bibliothèque et l’audio mis en cache, ainsi qu’un outil de conformité Node.js (`docs/extensions/tools/mock-runner.mjs`) pour vérifier les scripts d’extension en local.

## Distribution et ingénierie des versions

Les workflows GitHub Actions multiplateformes compilent, testent et publient les versions taguées (dernière : `v1.3.4`) pour toutes les cibles — générant un `.dmg` macOS Catalyst, un `.ipa` iOS non signé, des `.apk` Android release/debug, ainsi qu’un installateur NSIS Windows (`Setup.exe`) et une archive portable autonome `.zip` (conservant les données dans `.\Data\` lorsque `portable.txt` est présent). Un système de mise à jour intégré vérifie `releases/latest` avec contrôle `SHA256SUMS.txt` et option **Ignorer cette version** sous Windows, Android et macOS.

## Dépôt et téléchargements

- **Documentation et portail plugins :** [musico.seanpnex.win/?lang=fr](https://musico.seanpnex.win/?lang=fr) (Guide utilisateur, plugins officiels et API v1)
- **Code source :** [github.com/SEANPNEX/Musico](https://github.com/SEANPNEX/Musico) (licence MIT)
- **Versions :** [Dernières builds bureau et mobile](https://github.com/SEANPNEX/Musico/releases/latest)
- **Guide développeur extensions :** [musico.seanpnex.win/developers/?lang=fr](https://musico.seanpnex.win/developers/?lang=fr) · [GitHub README](https://github.com/SEANPNEX/Musico/blob/main/docs/extensions/README.md)
