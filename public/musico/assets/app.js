(function () {
  'use strict';

  var BASE = location.pathname.indexOf('/musico') === 0 ? '/musico/' : '/';
  var KAOMOJI_POOL = [
    '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
    '♪(´▽｀)',
    '(｡・ω・｡)ﾉ♡',
    '(・ω・)ﾉ',
    '(*^▽^*)',
    '(◕ᴗ◕✿)'
  ];

  window.MUSICO_I18N = window.MUSICO_I18N || {};

  /* ── Toast Helper ────────────────────────────────────────────────────── */
  var toastTimer = null;
  function showToast(msg) {
    var el = document.getElementById('musico-toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove('show');
    }, 2400);
  }

  /* ── Mascot SVG ("Mimi") ─────────────────────────────────────────────── */
  function mascotSvg(mood) {
    var eyes = '';
    var mouth = '';
    var extras = '';
    if (mood === 'sleepy') {
      eyes = '<path d="M35 53 Q40 57 45 53" fill="none" stroke="#1F1B24" stroke-width="2.6" stroke-linecap="round"/><path d="M55 53 Q60 57 65 53" fill="none" stroke="#1F1B24" stroke-width="2.6" stroke-linecap="round"/>';
      mouth = '<circle cx="50" cy="61" r="2.6" fill="#FF7866"/>';
      extras = '<text x="74" y="25" font-size="11" font-weight="800" fill="#BFA8FF" font-family="Fredoka,sans-serif">Zzz</text>';
    } else if (mood === 'lost') {
      eyes = '<circle cx="40" cy="52" r="3.4" fill="#1F1B24"/><circle cx="60" cy="52" r="3.4" fill="#1F1B24"/><path d="M35 46 L44 48 M65 46 L56 48" stroke="#1F1B24" stroke-width="2" stroke-linecap="round"/>';
      mouth = '<path d="M45 62 Q50 58 55 62" fill="none" stroke="#1F1B24" stroke-width="2.4" stroke-linecap="round"/>';
      extras = '<text x="77" y="26" font-size="13" font-weight="800" fill="#FF7866" font-family="Fredoka,sans-serif">?</text>';
    } else if (mood === 'jamming') {
      eyes = '<path d="M35 53 Q40 47 45 53" fill="none" stroke="#1F1B24" stroke-width="2.8" stroke-linecap="round"/><path d="M55 53 Q60 47 65 53" fill="none" stroke="#1F1B24" stroke-width="2.8" stroke-linecap="round"/>';
      mouth = '<path d="M44 59 Q50 66 56 59 Z" fill="#FF7866" stroke="#1F1B24" stroke-width="1.8"/>';
      extras = '<text x="76" y="22" font-size="13" font-weight="800" fill="#FF7866" font-family="Fredoka,sans-serif">♪</text><text x="15" y="24" font-size="11" font-weight="800" fill="#73E3BE" font-family="Fredoka,sans-serif">✦</text>';
    } else {
      eyes = '<circle cx="40" cy="52" r="3.6" fill="#1F1B24"/><circle cx="60" cy="52" r="3.6" fill="#1F1B24"/><circle cx="41.2" cy="50.7" r="1.2" fill="#FFF"/><circle cx="61.2" cy="50.7" r="1.2" fill="#FFF"/>';
      mouth = '<path d="M45 59 Q50 64 55 59" fill="none" stroke="#1F1B24" stroke-width="2.4" stroke-linecap="round"/>';
    }

    return (
      '<svg viewBox="0 0 100 100" width="96" height="96" aria-hidden="true">' +
      '<path d="M22 52 C22 25 78 25 78 52" fill="none" stroke="#1F1B24" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="14" y="44" width="12" height="22" rx="6" fill="#FF8A7A" stroke="#1F1B24" stroke-width="2.5"/>' +
      '<rect x="74" y="44" width="12" height="22" rx="6" fill="#87DFC1" stroke="#1F1B24" stroke-width="2.5"/>' +
      '<circle cx="50" cy="55" r="26" fill="#FFFDF7" stroke="#1F1B24" stroke-width="2.8"/>' +
      '<ellipse cx="34" cy="59" rx="4.2" ry="2.6" fill="#FFAAD0" opacity="0.85"/>' +
      '<ellipse cx="66" cy="59" rx="4.2" ry="2.6" fill="#FFAAD0" opacity="0.85"/>' +
      eyes + mouth +
      '<path d="M50 29 V17 L59 14" fill="none" stroke="#1F1B24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="17" r="3.5" fill="#FFE066" stroke="#1F1B24" stroke-width="2"/>' +
      extras +
      '</svg>'
    );
  }

  function updateMascots(moodOverride) {
    var dark = document.documentElement.dataset.theme === 'dark';
    var slots = document.querySelectorAll('[data-mascot]');
    slots.forEach(function (slot) {
      var baseMood = slot.getAttribute('data-mascot') || 'happy';
      var mood = moodOverride || (baseMood === 'lost' ? 'lost' : dark ? 'sleepy' : baseMood);
      slot.classList.toggle('is-jamming', mood === 'jamming');
      var bubble = slot.querySelector('.mascot-bubble');
      var bubbleHtml = bubble ? bubble.outerHTML : '';
      slot.innerHTML = mascotSvg(mood) + bubbleHtml;
    });
  }

  function initMascots() {
    updateMascots();
    document.querySelectorAll('[data-mascot]').forEach(function (slot) {
      slot.addEventListener('click', function () {
        var bubble = slot.querySelector('.mascot-bubble');
        var pick = KAOMOJI_POOL[Math.floor(Math.random() * KAOMOJI_POOL.length)];
        if (bubble) bubble.textContent = pick;
        showToast('Mimi says ' + pick);
      });
    });
  }

  /* ── Theme Toggle (Night Shift) ──────────────────────────────────────── */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('musico-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'dark'));
      var icon = btn.querySelector('.theme-icon');
      if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    var stage = document.querySelector('.cassette-shell.playing');
    updateMascots(stage ? 'jamming' : null);
  }

  function initTheme() {
    var saved = localStorage.getItem('musico-theme');
    var sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (sysDark ? 'dark' : 'light'));
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        showToast(next === 'dark' ? 'Night Shift on (-.-)Zzz' : 'Daylight zine mode (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
      });
    }
  }

  /* ── 4-Language i18n Loader ──────────────────────────────────────────── */
  var currentLang = 'en';

  function saveOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-en')) el.setAttribute('data-i18n-en', el.textContent);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-html-en')) el.setAttribute('data-i18n-html-en', el.innerHTML);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-ph-en')) el.setAttribute('data-i18n-ph-en', el.getAttribute('placeholder') || '');
    });
  }

  function applyPack(lang, dict) {
    document.documentElement.lang = lang === 'ja' ? 'ja' : lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var fallback = el.getAttribute('data-i18n-en') || el.textContent;
      el.textContent = (dict && dict[key]) || fallback;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var fallback = el.getAttribute('data-i18n-html-en') || el.innerHTML;
      el.innerHTML = (dict && dict[key]) || fallback;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var fallback = el.getAttribute('data-i18n-ph-en') || '';
      el.setAttribute('placeholder', (dict && dict[key]) || fallback);
    });

    // Update internal navigation links so ?lang= stays sticky across pages
    document.querySelectorAll('a[data-internal-link]').forEach(function (a) {
      var raw = a.getAttribute('data-href-base') || a.getAttribute('href');
      a.setAttribute('data-href-base', raw);
      var parts = raw.split('#');
      var path = parts[0];
      var hash = parts[1] ? '#' + parts[1] : '';
      a.setAttribute('href', lang === 'en' ? path + hash : path + '?lang=' + lang + hash);
    });
  }

  function setLanguage(lang) {
    if (['en', 'zh', 'ja', 'fr'].indexOf(lang) === -1) lang = 'en';
    currentLang = lang;
    localStorage.setItem('musico-lang', lang);
    var sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;

    if (lang === 'en') {
      applyPack('en', null);
      return;
    }
    if (window.MUSICO_I18N[lang]) {
      applyPack(lang, window.MUSICO_I18N[lang]);
      return;
    }
    var script = document.createElement('script');
    script.src = BASE + 'assets/i18n/' + lang + '.js';
    script.onload = function () {
      applyPack(lang, window.MUSICO_I18N[lang] || {});
    };
    document.head.appendChild(script);
  }

  function initI18n() {
    saveOriginals();
    var params = new URLSearchParams(location.search);
    var qLang = params.get('lang');
    if (qLang === 'jp') qLang = 'ja';
    var saved = localStorage.getItem('musico-lang');
    var initial = qLang || saved || 'en';
    var sel = document.getElementById('lang-select');
    if (sel) {
      sel.addEventListener('change', function () {
        setLanguage(sel.value);
        try {
          var u = new URL(location.href);
          if (sel.value === 'en') u.searchParams.delete('lang');
          else u.searchParams.set('lang', sel.value);
          history.replaceState(null, '', u.toString());
        } catch (e) {}
      });
    }
    setLanguage(initial);
  }

  /* ── Copy Buttons ────────────────────────────────────────────────────── */
  function copyText(text, btn) {
    if (!text) return;
    var done = function () {
      showToast('Copied! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
      if (btn) {
        var prev = btn.textContent;
        btn.textContent = 'Copied! ♪';
        setTimeout(function () { btn.textContent = prev; }, 1600);
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    ta.remove();
    cb();
  }

  function initCopyButtons() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-copy-target],[data-copy-text]');
      if (!btn) return;
      var text = btn.getAttribute('data-copy-text');
      if (!text) {
        var target = document.querySelector(btn.getAttribute('data-copy-target'));
        if (target) text = target.textContent;
      }
      copyText(text, btn);
    });
  }

  /* ── Cassette Mini-Player & 10-Band EQ Toy ───────────────────────────── */
  function initCassettePlayer() {
    var root = document.getElementById('cassette-player');
    if (!root) return;

    var TRACKS = [
      {
        title: '01 · Rainy Folder Waltz (FLAC 24-bit)',
        duration: 184,
        lyrics: [
          { t: 0, text: '[00:00] Mounted ~/Music/RainyAfternoon · hierarchy intact' },
          { t: 45, text: '[00:45] Imported .lrc matched locally (zero web lookups!)' },
          { t: 92, text: '[01:32] Multi-Queue #2 holds your midnight queue safely' },
          { t: 138, text: '[02:18] Native AVAudioEngine / Media3 / NAudio pipeline ♪' }
        ]
      },
      {
        title: '02 · Aria\'s Cozy Hangout (ALAC)',
        duration: 210,
        lyrics: [
          { t: 0, text: '[00:00] Open Musico and pick up right where yesterday left off' },
          { t: 52, text: '[00:52] YouTube, Bilibili & Google Drive inside Folders' },
          { t: 108, text: '[01:48] Save to Local Folder creates .musico-cloud.json' },
          { t: 160, text: '[02:40] Cozy tribute to Musicolet & YRRLYB/Aria (・ω・)ﾉ' }
        ]
      },
      {
        title: '03 · Extension Tape Mix (.musicoext)',
        duration: 162,
        lyrics: [
          { t: 0, text: '[00:00] One CommonJS script on JavaScriptCore, QuickJS & Jint' },
          { t: 40, text: '[00:40] Strict permissions.hosts allowlist checked per hop' },
          { t: 86, text: '[01:26] Ephemeral Search (<Ext>) stays out of Library & Stats' },
          { t: 125, text: '[02:05] 10-Band ISO EQ tuned just right (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧' }
        ]
      }
    ];

    var PRESETS = {
      'Flat':          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'Bass Boost':    [6, 5, 4, 2, 1, 0, 0, 0, 0, 0],
      'Treble Boost':  [0, 0, 0, 0, 0, 1, 2, 4, 5, 6],
      'Rock':          [5, 4, 2, -1, -2, -1, 2, 4, 5, 5],
      'Pop':           [-1, 2, 4, 4, 2, -1, -1, 1, 2, 3],
      'Jazz':          [3, 2, 1, 2, -1, -1, 0, 2, 3, 4],
      'Classical':     [4, 3, 2, 1, -1, -1, 0, 2, 3, 4],
      'Vocal':         [-2, -2, -1, 2, 4, 4, 3, 1, 0, -1]
    };

    var FREQS = ['31', '62', '125', '250', '500', '1k', '2k', '4k', '8k', '16k'];

    var shell = root.querySelector('.cassette-shell');
    var titleEl = root.querySelector('[data-player-title]');
    var kaoEl = root.querySelector('[data-player-kaomoji]');
    var playBtn = root.querySelector('[data-player-toggle]');
    var fillEl = root.querySelector('[data-player-fill]');
    var curEl = root.querySelector('[data-player-cur]');
    var durEl = root.querySelector('[data-player-dur]');
    var trackBar = root.querySelector('[data-player-progress]');
    var lyricsBox = root.querySelector('[data-player-lyrics]');
    var barsBox = root.querySelector('[data-player-bars]');
    var slidersBox = root.querySelector('[data-eq-sliders]');
    var presetsBox = root.querySelector('[data-eq-presets]');
    var preampInput = root.querySelector('[data-eq-preamp]');
    var preampOut = root.querySelector('[data-eq-preamp-val]');

    var trackIdx = 0;
    var playing = false;
    var elapsed = 48;
    var timer = null;
    var bands = PRESETS['Pop'].slice();
    var preamp = 2;

    function fmtTime(s) {
      var m = Math.floor(s / 60);
      var r = Math.floor(s % 60);
      return m + ':' + (r < 10 ? '0' : '') + r;
    }

    // Build 10 visual spectrum bars
    barsBox.innerHTML = '';
    for (var b = 0; b < 10; b++) {
      var bar = document.createElement('span');
      bar.className = 'tape-bar';
      barsBox.appendChild(bar);
    }

    function paintBars() {
      var nodes = barsBox.querySelectorAll('.tape-bar');
      nodes.forEach(function (bar, i) {
        var base = 12 + (bands[i] + 12) * 0.75 + preamp * 0.4;
        var jitter = playing ? (Math.sin(Date.now() / 160 + i * 0.9) + 1) * 7 : 0;
        var h = Math.max(6, Math.min(34, Math.round(base + jitter)));
        bar.style.height = h + 'px';
      });
    }

    // Build EQ sliders
    slidersBox.innerHTML = '';
    FREQS.forEach(function (freq, idx) {
      var wrap = document.createElement('div');
      wrap.className = 'eq-band';
      var db = document.createElement('span');
      db.className = 'eq-db';
      db.textContent = (bands[idx] > 0 ? '+' : '') + bands[idx];
      var input = document.createElement('input');
      input.type = 'range';
      input.min = '-12';
      input.max = '12';
      input.step = '1';
      input.value = String(bands[idx]);
      input.className = 'eq-range';
      input.setAttribute('aria-label', freq + ' Hz gain');
      input.addEventListener('input', function () {
        bands[idx] = Number(input.value);
        db.textContent = (bands[idx] > 0 ? '+' : '') + bands[idx];
        markPreset('Custom');
        paintBars();
      });
      var label = document.createElement('span');
      label.className = 'eq-freq';
      label.textContent = freq;
      wrap.appendChild(db);
      wrap.appendChild(input);
      wrap.appendChild(label);
      slidersBox.appendChild(wrap);
    });

    function syncSliders() {
      var inputs = slidersBox.querySelectorAll('.eq-range');
      var dbs = slidersBox.querySelectorAll('.eq-db');
      bands.forEach(function (val, idx) {
        if (inputs[idx]) inputs[idx].value = String(val);
        if (dbs[idx]) dbs[idx].textContent = (val > 0 ? '+' : '') + val;
      });
    }

    function markPreset(name) {
      presetsBox.querySelectorAll('button').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.dataset.preset === name));
      });
    }

    presetsBox.innerHTML = '';
    Object.keys(PRESETS).concat(['Custom']).forEach(function (name) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'eq-preset-btn';
      btn.dataset.preset = name;
      btn.textContent = name;
      btn.setAttribute('aria-pressed', String(name === 'Pop'));
      btn.addEventListener('click', function () {
        if (PRESETS[name]) {
          bands = PRESETS[name].slice();
          syncSliders();
          paintBars();
        }
        markPreset(name);
      });
      presetsBox.appendChild(btn);
    });

    if (preampInput && preampOut) {
      preampInput.addEventListener('input', function () {
        preamp = Number(preampInput.value);
        preampOut.textContent = (preamp > 0 ? '+' : '') + preamp + ' dB';
        paintBars();
      });
    }

    function renderTrack() {
      var tr = TRACKS[trackIdx];
      titleEl.textContent = tr.title;
      durEl.textContent = fmtTime(tr.duration);
      curEl.textContent = fmtTime(elapsed);
      fillEl.style.width = ((elapsed / tr.duration) * 100).toFixed(1) + '%';

      lyricsBox.innerHTML = '';
      var activeIdx = 0;
      tr.lyrics.forEach(function (line, i) {
        if (elapsed >= line.t) activeIdx = i;
      });
      tr.lyrics.forEach(function (line, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lyric-line' + (i === activeIdx ? ' active' : '');
        btn.textContent = line.text;
        btn.addEventListener('click', function () {
          elapsed = line.t;
          renderTrack();
        });
        lyricsBox.appendChild(btn);
      });

      root.querySelectorAll('.track-tab').forEach(function (t, i) {
        t.setAttribute('aria-pressed', String(i === trackIdx));
      });
    }

    root.querySelectorAll('.track-tab').forEach(function (tab, idx) {
      tab.addEventListener('click', function () {
        trackIdx = idx;
        elapsed = 0;
        renderTrack();
      });
    });

    function setPlaying(next) {
      playing = next;
      shell.classList.toggle('playing', playing);
      playBtn.textContent = playing ? '❚❚' : '▶';
      playBtn.setAttribute('aria-label', playing ? 'Pause demo tape' : 'Play demo tape');
      kaoEl.textContent = playing ? '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧' : '♪(´▽｀)';
      updateMascots(playing ? 'jamming' : null);
      clearInterval(timer);
      if (playing) {
        timer = setInterval(function () {
          var dur = TRACKS[trackIdx].duration;
          elapsed = elapsed + 1 >= dur ? 0 : elapsed + 1;
          renderTrack();
          paintBars();
        }, 450);
      }
    }

    playBtn.addEventListener('click', function () {
      setPlaying(!playing);
    });

    trackBar.addEventListener('click', function (e) {
      var rect = trackBar.getBoundingClientRect();
      var ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      elapsed = Math.round(ratio * TRACKS[trackIdx].duration);
      renderTrack();
    });

    renderTrack();
    paintBars();
  }

  /* ── Native Platform UI Switcher (Home /) ────────────────────────────── */
  function initPlatformSwitcher() {
    var box = document.getElementById('platform-switcher');
    if (!box) return;

    var DATA = {
      apple: {
        windowTitle: 'Musico · Apple HIG (iOS 17+ / iPadOS / macOS)',
        sidebar: ['Folders', 'Songs', 'Albums', 'Queues', 'Extensions'],
        rows: [
          ['~/Music/CityPop', 'FLAC · ALAC · 18 tracks'],
          ['Cloud · YouTube Mix', 'JavaScriptCore sandbox'],
          ['Queue #2 · Midnight', 'AVAudioEngine 10-band EQ']
        ],
        specs: [
          'UI Toolkit: Swift & SwiftUI (@Observable): Tabs & Sheets on iOS, Sidebar + Inspector on macOS/iPadOS',
          'Audio & Media: AVAudioEngine + AVAudioUnitEQ, MPNowPlayingInfoCenter lock-screen controls',
          'JS Runtime: Embedded JavaScriptCore with Compression + CryptoKit bridge',
          'Formats: mp3, m4a, aac, flac, wav, aif, aiff, caf, alac',
          'Shortcuts: Cmd+1–8 tabs, Cmd+F search, Cmd+R rescan, Cmd+P play/pause'
        ]
      },
      android: {
        windowTitle: 'MusicoAndroid · Material 3 / Material You (API 26+)',
        sidebar: ['Folders', 'Songs', 'Albums', 'Queues', 'Extensions'],
        rows: [
          ['SAF Music Folder', 'OPUS · FLAC · 24 tracks'],
          ['Cloud · Bilibili Fav', 'QuickJS isolated VM'],
          ['Queue #1 · Commute', 'DynamicsProcessing 10-band EQ']
        ],
        specs: [
          'UI Toolkit: Kotlin & Jetpack Compose Material 3 with Dynamic Color & ModalBottomSheet',
          'Audio & Media: AndroidX Media3 (ExoPlayer + MediaSessionService) & SAF DocumentFile',
          'JS Runtime: Embedded QuickJS (quickjs-kt) with 32 MB heap guardrail & cookie redaction',
          'Formats: mp3, m4a, aac, flac, wav, aif, aiff, caf, alac, ogg, opus, webm',
          'Updates: Persistently signed release.apk with in-app FileProvider installer'
        ]
      },
      windows: {
        windowTitle: 'MusicoWindows · Fluent Design (.NET 8 WPF)',
        sidebar: ['Folders', 'Songs', 'Albums', 'Queues', 'Extensions'],
        rows: [
          ['D:\\MyMusic\\OST', 'FLAC · WMA · 42 tracks'],
          ['Portable .\\Data\\', 'Jint + Windows HTTP Proxy'],
          ['Queue #3 · Focus', 'NAudio BiQuadFilter EQ']
        ],
        specs: [
          'UI Toolkit: C# / .NET 8 WPF Fluent Design: Acrylic NavigationView, Reveal hover & Light/Dark sync',
          'Audio & Media: NAudio (BiQuadFilter 10-band EQ), TagLibSharp & Windows 10 SMTC',
          'JS Runtime: Embedded Jint engine with proxy-aware HttpClient & automatic cookie redaction',
          'Formats: mp3, m4a, aac, flac, wav, aif, aiff, wma, ogg, opus',
          'Shortcuts: Space play/pause, Ctrl+Left/Right skip, Ctrl+F search, Esc close'
        ]
      }
    };

    var tabs = box.querySelectorAll('[data-platform-tab]');
    var titleEl = box.querySelector('[data-os-title]');
    var sideEl = box.querySelector('[data-os-sidebar]');
    var rowsEl = box.querySelector('[data-os-rows]');
    var specsEl = box.querySelector('[data-os-specs]');

    function render(key) {
      var d = DATA[key];
      if (!d) return;
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', String(t.dataset.platformTab === key));
      });
      titleEl.textContent = d.windowTitle;
      sideEl.innerHTML = d.sidebar.map(function (item, idx) {
        return '<span class="' + (idx === 0 ? 'active' : '') + '">' + item + '</span>';
      }).join('');
      rowsEl.innerHTML = d.rows.map(function (row) {
        return '<div class="os-row"><strong>' + row[0] + '</strong><span>' + row[1] + '</span></div>';
      }).join('');
      specsEl.innerHTML = d.specs.map(function (s) {
        var idx = s.indexOf(':');
        if (idx > 0) return '<li><strong>' + s.slice(0, idx + 1) + '</strong>' + s.slice(idx + 1) + '</li>';
        return '<li>' + s + '</li>';
      }).join('');
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () { render(t.dataset.platformTab); });
    });
    render('apple');
  }

  /* ── Install Platform Tabs (/guide/) ─────────────────────────────────── */
  function initInstallTabs() {
    var box = document.getElementById('install-switcher');
    if (!box) return;
    var tabs = box.querySelectorAll('[data-install-tab]');
    var panels = box.querySelectorAll('[data-install-panel]');
    function select(key) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t.dataset.installTab === key)); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-install-panel') !== key; });
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { select(t.dataset.installTab); });
    });
    select('apple');
  }

  /* ── Interactive .musico.js Starter Generator (/developers/) ─────────── */
  function initStarterGenerator() {
    var box = document.getElementById('starter-generator');
    if (!box) return;

    var idInput = document.getElementById('gen-id');
    var nameInput = document.getElementById('gen-name');
    var badgeInput = document.getElementById('gen-badge');
    var hostsInput = document.getElementById('gen-hosts');
    var outCode = document.getElementById('gen-code');
    var outCmd = document.getElementById('gen-cmd');
    var dlBtn = document.getElementById('gen-download');
    var capInputs = box.querySelectorAll('input[name="gen-cap"]');

    function selectedCaps() {
      var list = [];
      capInputs.forEach(function (cb) { if (cb.checked) list.push(cb.value); });
      if (list.length === 0) list.push('stream');
      return list;
    }

    function buildCode() {
      var id = (idInput.value || 'com.example.musico.starter').trim();
      var name = (nameInput.value || 'My Musico Source').trim();
      var badge = (badgeInput.value || 'MyExt').trim().slice(0, 16);
      var hosts = (hostsInput.value || 'api.music.example.com')
        .split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      if (hosts.length === 0) hosts = ['api.music.example.com'];
      var caps = selectedCaps();
      var has = function (c) { return caps.indexOf(c) !== -1; };
      var primaryHost = hosts[0].replace(/^\*\./, '');

      var lines = [];
      lines.push("'use strict';");
      lines.push('');
      lines.push('var manifest = {');
      lines.push('  apiVersion: 1,');
      lines.push("  id: '" + id.replace(/'/g, "\\'") + "',");
      lines.push("  name: '" + name.replace(/'/g, "\\'") + "',");
      lines.push("  version: '1.0.0',");
      lines.push("  badgeLabel: '" + badge.replace(/'/g, "\\'") + "',");
      lines.push('  capabilities: ' + JSON.stringify(caps) + ',');
      if (has('playlist') || has('tree')) {
        lines.push("  urlPatterns: ['^https?://(www\\\\.)?" + primaryHost.replace(/\./g, '\\\\.') + "/(playlist|folder)/[a-zA-Z0-9_-]+'],");
      } else {
        lines.push('  urlPatterns: [],');
      }
      if (has('search')) {
        lines.push("  searchKinds: ['track', 'playlist', 'album'],");
      }
      lines.push('  permissions: {');
      lines.push('    hosts: ' + JSON.stringify(hosts));
      lines.push('  }');
      lines.push('};');
      lines.push('');
      lines.push('function extError(code, message) {');
      lines.push('  var err = new Error(message);');
      lines.push('  err.code = code;');
      lines.push('  return err;');
      lines.push('}');

      var exportsList = ['manifest: manifest'];

      if (has('playlist') || has('tree')) {
        lines.push('');
        lines.push('function canHandle(input) {');
        lines.push("  var raw = String((input && (input.extractedUrl || input.rawText)) || '');");
        lines.push("  var m = raw.match(/\\/(playlist|folder)\\/([a-zA-Z0-9_-]+)/i);");
        lines.push('  if (!m) return { matched: false };');
        lines.push("  return { matched: true, remoteId: m[2], kind: m[1] === 'folder' ? 'folder' : 'playlist' };");
        lines.push('}');
        lines.push('');
        lines.push('async function fetchCollection(ctx, req) {');
        lines.push('  var match = canHandle({ rawText: req.url, extractedUrl: req.url });');
        lines.push("  if (!match.matched) throw extError('INVALID_URL', 'Unsupported URL.');");
        lines.push("  var headers = { Accept: 'application/json' };");
        if (has('cookie') || has('qr_login')) {
          lines.push('  if (req.cookie) headers.Cookie = req.cookie;');
        }
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: 'https://" + primaryHost + "/v1/collections/' + encodeURIComponent(match.remoteId), headers: headers });");
        lines.push("  if (res.status === 401 || res.status === 403) throw extError('AUTH_REQUIRED', 'Cookie required or expired.');");
        lines.push("  if (res.status >= 400) throw extError('NETWORK_ERROR', 'HTTP ' + String(res.status));");
        lines.push("  var data = JSON.parse(res.text || '{}');");
        lines.push('  return {');
        lines.push('    remoteId: match.remoteId,');
        lines.push("    title: String(data.title || match.remoteId),");
        lines.push('    tracks: (data.tracks || []).map(function (t, i) {');
        lines.push('      return {');
        lines.push('        remoteTrackId: String(t.id),');
        lines.push("        relativePath: String(i + 1).padStart(2, '0') + ' - ' + String(t.title || 'Untitled') + '.mp3',");
        lines.push("        title: String(t.title || 'Untitled'),");
        lines.push("        artist: t.artist || 'Unknown Artist',");
        lines.push('        durationSec: typeof t.durationSec === "number" ? t.durationSec : 0');
        lines.push('      };');
        lines.push('    }),');
        if (has('tree')) {
          lines.push('    subfolders: (data.folders || []).map(function (d) {');
          lines.push('      return { id: String(d.id), name: String(d.name), pathSegments: [String(d.name)] };');
          lines.push('    }),');
        }
        lines.push('    nextCursor: data.nextCursor || null');
        lines.push('  };');
        lines.push('}');
        exportsList.push('canHandle: canHandle', 'fetchCollection: fetchCollection');
      }

      if (has('tree')) {
        lines.push('');
        lines.push('async function fetchFolder(ctx, req) {');
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: 'https://" + primaryHost + "/v1/folders/' + encodeURIComponent(req.folderId) });");
        lines.push("  var data = JSON.parse(res.text || '{}');");
        lines.push("  var prefix = (req.pathSegments || []).join('/');");
        lines.push('  return {');
        lines.push('    folderId: req.folderId,');
        lines.push('    tracks: (data.files || []).map(function (f, i) {');
        lines.push("      return { remoteTrackId: String(f.id), relativePath: (prefix ? prefix + '/' : '') + String(f.name), title: String(f.title || f.name), trackNumber: i + 1 };");
        lines.push('    }),');
        lines.push('    subfolders: (data.folders || []).map(function (d) {');
        lines.push('      return { id: String(d.id), name: String(d.name), pathSegments: (req.pathSegments || []).concat([String(d.name)]) };');
        lines.push('    }),');
        lines.push('    nextCursor: data.nextCursor || null');
        lines.push('  };');
        lines.push('}');
        exportsList.push('fetchFolder: fetchFolder');
      }

      if (has('stream')) {
        lines.push('');
        lines.push('async function resolveStream(ctx, req) {');
        lines.push("  var headers = { Accept: 'application/json' };");
        if (has('cookie') || has('qr_login')) {
          lines.push('  if (req.cookie) headers.Cookie = req.cookie;');
        }
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: 'https://" + primaryHost + "/v1/tracks/' + encodeURIComponent(req.remoteTrackId) + '/stream', headers: headers });");
        lines.push("  if (res.status >= 400) throw extError('NO_PLAYABLE_STREAM', 'Upstream HTTP ' + String(res.status));");
        lines.push("  var stream = JSON.parse(res.text || '{}');");
        lines.push("  return { url: String(stream.url), fileExtension: stream.ext || 'mp3', mimeType: stream.mime || 'audio/mpeg' };");
        lines.push('}');
        exportsList.push('resolveStream: resolveStream');
      }

      if (has('search')) {
        lines.push('');
        lines.push('async function search(ctx, req) {');
        lines.push("  var headers = { Accept: 'application/json' };");
        if (has('cookie') || has('qr_login')) {
          lines.push('  if (req.cookie) headers.Cookie = req.cookie;');
        }
        lines.push("  var url = 'https://" + primaryHost + "/v1/search?q=' + encodeURIComponent(req.query) + '&kind=' + encodeURIComponent(req.kind || 'all') + '&limit=' + encodeURIComponent(String(req.limit || 20));");
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: url, headers: headers });");
        lines.push("  var data = JSON.parse(res.text || '{}');");
        lines.push('  return {');
        lines.push('    items: (data.items || []).map(function (it) {');
        lines.push("      return { kind: 'track', remoteTrackId: String(it.id), title: String(it.title || 'Untitled'), artist: it.artist || 'Unknown Artist', durationSec: it.durationSec || 0 };");
        lines.push('    }),');
        lines.push('    nextCursor: data.nextCursor || null');
        lines.push('  };');
        lines.push('}');
        exportsList.push('search: search');
      }

      if (has('lyrics')) {
        lines.push('');
        lines.push('async function searchLyrics(ctx, req) {');
        lines.push("  var q = encodeURIComponent((req.title || '') + ' ' + (req.artist || ''));");
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: 'https://" + primaryHost + "/v1/lyrics?q=' + q });");
        lines.push("  var rows = JSON.parse(res.text || '[]');");
        lines.push('  return rows.map(function (row) {');
        lines.push('    return { externalId: row.id ? String(row.id) : null, title: row.title || req.title, artist: row.artist || req.artist, syncedLyrics: row.lrc || null, plainLyrics: row.plain || null };');
        lines.push('  });');
        lines.push('}');
        exportsList.push('searchLyrics: searchLyrics');
      }

      if (has('qr_login')) {
        lines.push('');
        lines.push('async function startQrLogin(ctx) {');
        lines.push("  var res = await ctx.http.request({ method: 'POST', url: 'https://" + primaryHost + "/v1/auth/qr/start' });");
        lines.push("  var d = JSON.parse(res.text || '{}');");
        lines.push('  return { sessionId: String(d.sessionId), qrContent: String(d.qrUrl), pollIntervalMs: 2000 };');
        lines.push('}');
        lines.push('');
        lines.push('async function pollQrLogin(ctx, req) {');
        lines.push("  var res = await ctx.http.request({ method: 'GET', url: 'https://" + primaryHost + "/v1/auth/qr/poll?id=' + encodeURIComponent(req.sessionId) });");
        lines.push("  var d = JSON.parse(res.text || '{}');");
        lines.push('  return { status: d.status, cookie: d.cookie || null, accountName: d.accountName || null };');
        lines.push('}');
        exportsList.push('startQrLogin: startQrLogin', 'pollQrLogin: pollQrLogin');
      }

      lines.push('');
      lines.push('module.exports = {');
      lines.push('  ' + exportsList.join(',\n  '));
      lines.push('};');

      var slug = id.split('.').pop().replace(/[^a-z0-9_-]/gi, '') || 'custom-ext';
      var file = slug + '.musico.js';
      outCode.textContent = lines.join('\n');

      var cmd = 'node docs/extensions/tools/mock-runner.mjs ' + file + ' ';
      if (has('search')) cmd += 'search "Yoasobi" --kind track --limit 10';
      else if (has('lyrics')) cmd += 'search-lyrics "Idol" --artist "YOASOBI"';
      else if (has('playlist') || has('tree')) cmd += 'can-handle "https://' + primaryHost + '/playlist/demo_1"';
      else cmd += 'resolve-stream "track_1"';
      outCmd.textContent = cmd;
      dlBtn.dataset.filename = file;
    }

    [idInput, nameInput, badgeInput, hostsInput].forEach(function (inp) {
      inp.addEventListener('input', buildCode);
    });
    capInputs.forEach(function (cb) {
      cb.addEventListener('change', buildCode);
    });

    dlBtn.addEventListener('click', function () {
      var blob = new Blob([outCode.textContent], { type: 'application/javascript;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = dlBtn.dataset.filename || 'extension.musico.js';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast('Downloaded ' + (dlBtn.dataset.filename || 'extension.musico.js') + ' ♪');
    });

    buildCode();
  }

  /* ── Header Scroll & Mobile Drawer & Scroll Spy ──────────────────────── */
  function initChrome() {
    var header = document.querySelector('.site-header');
    if (header && !header.classList.contains('site-header--solid')) {
      var onScroll = function () {
        header.classList.toggle('scrolled', window.scrollY > 18);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    var menuBtn = document.getElementById('mobile-menu-btn');
    var drawer = document.getElementById('mobile-drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', function () {
        var open = !drawer.classList.contains('open');
        drawer.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
      });
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          drawer.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Sidebar scroll-spy on /guide/ and /developers/
    var links = Array.prototype.slice.call(document.querySelectorAll('.sidebar-nav a[href^="#"]'));
    if (links.length && 'IntersectionObserver' in window) {
      var map = new Map();
      links.forEach(function (a) {
        var sec = document.querySelector(a.getAttribute('href'));
        if (sec) map.set(sec, a);
      });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = map.get(entry.target);
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -65% 0px' });
      map.forEach(function (_, sec) { io.observe(sec); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMascots();
    initChrome();
    initCopyButtons();
    initCassettePlayer();
    initPlatformSwitcher();
    initInstallTabs();
    initStarterGenerator();
    initI18n();
  });
})();
