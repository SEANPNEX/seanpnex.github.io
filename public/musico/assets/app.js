(function () {
  'use strict';

  var BASE = location.pathname.indexOf('/musico') === 0 ? '/musico/' : '/';
  var ASSET_V = '20261128a';
  var KAOMOJI_POOL = [
    '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
    '♪(´▽｀)',
    '(｡・ω・｡)ﾉ♡',
    '(・ω・)ﾉ',
    '(*^▽^*)',
    '(◕ᴗ◕✿)'
  ];

  window.MUSICO_I18N = window.MUSICO_I18N || {};

  var REDUCED_MOTION = function () {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  function animateSwap(el) {
    if (!el || REDUCED_MOTION() || typeof el.animate !== 'function') return;
    el.animate(
      [
        { opacity: 0, transform: 'translate3d(0, 6px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ],
      { duration: 180, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
    );
  }

  /* ── Frosted Moving Color Blocks + Crisp Zine Motifs ─────────────────── */
  function initFloatingBackground() {
    if (document.querySelector('.floating-bg')) return;
    var miniCassette =
      '<svg viewBox="0 0 36 26" width="34" height="24" aria-hidden="true">' +
      '<rect x="1.5" y="1.5" width="33" height="23" rx="4" fill="#FFF0B3" stroke="#1F1B24" stroke-width="2"/>' +
      '<rect x="7" y="6" width="22" height="9" rx="2.5" fill="#241F2E"/>' +
      '<circle cx="13" cy="10.5" r="2.6" fill="#FF8A7A"/>' +
      '<circle cx="23" cy="10.5" r="2.6" fill="#87DFC1"/>' +
      '<path d="M9 23.5 L12 19 H24 L27 23.5" fill="none" stroke="#1F1B24" stroke-width="1.8"/>' +
      '</svg>';
    var miniVinyl =
      '<svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">' +
      '<circle cx="16" cy="16" r="14" fill="#241F2E" stroke="#1F1B24" stroke-width="2"/>' +
      '<circle cx="16" cy="16" r="9.5" fill="none" stroke="#574B73" stroke-width="1.2" stroke-dasharray="6 3"/>' +
      '<circle cx="16" cy="16" r="5.5" fill="#FFAAD0" stroke="#1F1B24" stroke-width="1.5"/>' +
      '<circle cx="16" cy="16" r="1.8" fill="#FFFDF7"/>' +
      '</svg>';

    var layer = document.createElement('div');
    layer.className = 'floating-bg';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML =
      '<div class="bg-mesh">' +
      '<div class="color-block color-block--1"></div>' +
      '<div class="color-block color-block--2"></div>' +
      '<div class="color-block color-block--3"></div>' +
      '<div class="color-block color-block--4"></div>' +
      '<div class="color-block color-block--5"></div>' +
      '</div>' +
      '<div class="bg-motifs">' +
      '<span class="float-note float-note--1">♪</span>' +
      '<span class="float-note float-note--2 float-note--svg">' + miniCassette + '</span>' +
      '<span class="float-note float-note--3">♫</span>' +
      '<span class="float-note float-note--4 float-note--svg">' + miniVinyl + '</span>' +
      '<span class="float-note float-note--5">✦</span>' +
      '<span class="float-note float-note--6 float-note--svg">' + miniCassette + '</span>' +
      '<span class="float-note float-note--7">♫</span>' +
      '<span class="float-note float-note--8">♪</span>' +
      '</div>';
    document.body.insertBefore(layer, document.body.firstChild);
  }

  /* ── Mouse Click Note-Sparkle Pop (Desktop Fine Pointer) ─────────────── */
  function initClickSparkles() {
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    if (REDUCED_MOTION() || typeof Element.prototype.animate !== 'function') return;

    var layer = document.createElement('div');
    layer.className = 'click-sparkle-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    var GLYPHS = ['♪', '♫', '✦', '♡', '✧'];
    var COLORS = ['#FF715E', '#54C7A2', '#F5B800', '#FF7CB6', '#9D82F7'];
    var active = 0;
    var MAX_BURSTS = 12;

    document.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.pointerType === 'touch') return;
      if (REDUCED_MOTION() || active >= MAX_BURSTS) return;
      var el = e.target && e.target.nodeType === 1 ? e.target : (e.target && e.target.parentElement);
      if (!el || (el.closest && el.closest('pre, code, input, textarea, select, [contenteditable="true"]'))) return;

      active += 1;
      var x = e.clientX;
      var y = e.clientY;

      var glyph = document.createElement('span');
      glyph.className = 'click-glyph';
      glyph.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      glyph.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      var dx = Math.round((Math.random() - 0.5) * 28);
      var rot = Math.round((Math.random() - 0.5) * 28);
      layer.appendChild(glyph);

      var gAnim = glyph.animate(
        [
          { opacity: 1, transform: 'translate3d(' + (x - 8) + 'px, ' + (y - 12) + 'px, 0) scale(0.85) rotate(0deg)' },
          { opacity: 0, transform: 'translate3d(' + (x - 8 + dx) + 'px, ' + (y - 54) + 'px, 0) scale(1.12) rotate(' + rot + 'deg)' }
        ],
        { duration: 600, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
      );
      gAnim.onfinish = function () {
        glyph.remove();
        active = Math.max(0, active - 1);
      };

      for (var i = 0; i < 4; i++) {
        (function (idx) {
          var dot = document.createElement('span');
          dot.className = 'click-dot';
          dot.style.background = COLORS[(idx + Math.floor(Math.random() * COLORS.length)) % COLORS.length];
          var angle = (Math.PI * 2 * idx) / 4 + (Math.random() - 0.5) * 0.6;
          var dist = 20 + Math.random() * 14;
          var tx = Math.round(Math.cos(angle) * dist);
          var ty = Math.round(Math.sin(angle) * dist - 6);
          layer.appendChild(dot);

          var dAnim = dot.animate(
            [
              { opacity: 1, transform: 'translate3d(' + (x - 3) + 'px, ' + (y - 3) + 'px, 0) scale(1)' },
              { opacity: 0, transform: 'translate3d(' + (x - 3 + tx) + 'px, ' + (y - 3 + ty) + 'px, 0) scale(0.55)' }
            ],
            { duration: 420, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
          );
          dAnim.onfinish = function () { dot.remove(); };
        })(i);
      }
    }, { passive: true });
  }

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
        showToast(t('toast.mimi', 'Mimi says {k}').replace('{k}', pick));
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
        var notify = function () {
          showToast(
            next === 'dark'
              ? t('toast.nightOn', 'Night Shift on (-.-)Zzz')
              : t('toast.dayOn', 'Daylight zine mode (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
          );
        };
        if (typeof document.startViewTransition !== 'function' || REDUCED_MOTION()) {
          applyTheme(next);
          notify();
          return;
        }
        var rect = btn.getBoundingClientRect();
        var x = rect.left + rect.width / 2;
        var y = rect.top + rect.height / 2;
        var endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );
        document.documentElement.classList.add('theme-transitioning');
        var transition = document.startViewTransition(function () {
          applyTheme(next);
        });
        transition.ready.then(function () {
          document.documentElement.animate(
            {
              clipPath: [
                'circle(0px at ' + x + 'px ' + y + 'px)',
                'circle(' + endRadius + 'px at ' + x + 'px ' + y + 'px)'
              ]
            },
            {
              duration: 420,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              pseudoElement: '::view-transition-new(root)'
            }
          );
        }).catch(function () {});
        transition.finished.finally(function () {
          document.documentElement.classList.remove('theme-transitioning');
          notify();
        });
      });
    }
  }

  /* ── 4-Language i18n Loader ──────────────────────────────────────────── */
  var currentLang = 'en';
  var origTitle = '';
  var langChangeCallbacks = [];

  function t(key, fallback) {
    var pack = window.MUSICO_I18N && window.MUSICO_I18N[currentLang];
    if (pack && Object.prototype.hasOwnProperty.call(pack, key) && pack[key] != null) {
      return pack[key];
    }
    var enPack = window.MUSICO_I18N && window.MUSICO_I18N.en;
    if (enPack && Object.prototype.hasOwnProperty.call(enPack, key) && enPack[key] != null) {
      return enPack[key];
    }
    return fallback !== undefined ? fallback : key;
  }

  function onLangChange(fn) {
    if (typeof fn === 'function') langChangeCallbacks.push(fn);
  }

  function saveOriginals() {
    if (!origTitle) origTitle = document.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-en')) el.setAttribute('data-i18n-en', el.textContent);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-html-en')) el.setAttribute('data-i18n-html-en', el.innerHTML);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-ph-en')) el.setAttribute('data-i18n-ph-en', el.getAttribute('placeholder') || '');
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-aria-en')) el.setAttribute('data-i18n-aria-en', el.getAttribute('aria-label') || '');
    });
    document.querySelectorAll('[data-i18n-title-attr]').forEach(function (el) {
      if (!el.hasAttribute('data-i18n-title-en')) el.setAttribute('data-i18n-title-en', el.getAttribute('title') || '');
    });
  }

  function applyPack(lang, dict) {
    document.documentElement.lang = lang === 'ja' ? 'ja' : lang;
    var titleMeta = document.querySelector('meta[name="i18n-title"]');
    if (titleMeta) {
      var tKey = titleMeta.getAttribute('content');
      document.title = (dict && dict[tKey]) || origTitle;
    }
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
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var fallback = el.getAttribute('data-i18n-aria-en') || '';
      el.setAttribute('aria-label', (dict && dict[key]) || fallback);
    });
    document.querySelectorAll('[data-i18n-title-attr]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title-attr');
      var fallback = el.getAttribute('data-i18n-title-en') || '';
      el.setAttribute('title', (dict && dict[key]) || fallback);
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

    langChangeCallbacks.forEach(function (fn) {
      try { fn(lang); } catch (e) {}
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
    script.src = BASE + 'assets/i18n/' + lang + '.js?v=' + ASSET_V;
    script.onload = function () {
      if (currentLang === lang) {
        applyPack(lang, window.MUSICO_I18N[lang] || {});
      }
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
      showToast(t('toast.copied', 'Copied! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'));
      if (btn) {
        var prev = btn.textContent;
        var key = btn.getAttribute('data-i18n');
        btn.textContent = t('btn.copied', 'Copied! ♪');
        setTimeout(function () {
          btn.textContent = key ? t(key, prev) : prev;
        }, 1600);
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
        titleKey: 'cassette.t1.title',
        titleFallback: '01 · Rainy Folder Waltz (FLAC 24-bit)',
        duration: 184,
        lyrics: [
          { t: 0,   key: 'cassette.t1.l1', fallback: '[00:00] Mounted ~/Music/RainyAfternoon · hierarchy intact' },
          { t: 45,  key: 'cassette.t1.l2', fallback: '[00:45] Imported .lrc matched locally (zero web lookups!)' },
          { t: 92,  key: 'cassette.t1.l3', fallback: '[01:32] Multi-Queue #2 holds your midnight queue safely' },
          { t: 138, key: 'cassette.t1.l4', fallback: '[02:18] Native AVAudioEngine / Media3 / NAudio pipeline ♪' }
        ]
      },
      {
        titleKey: 'cassette.t2.title',
        titleFallback: "02 · Aria's Cozy Hangout (ALAC)",
        duration: 210,
        lyrics: [
          { t: 0,   key: 'cassette.t2.l1', fallback: '[00:00] Open Musico and pick up right where yesterday left off' },
          { t: 52,  key: 'cassette.t2.l2', fallback: '[00:52] YouTube, Bilibili & Google Drive inside Folders' },
          { t: 108, key: 'cassette.t2.l3', fallback: '[01:48] Save to Local Folder creates .musico-cloud.json' },
          { t: 160, key: 'cassette.t2.l4', fallback: '[02:40] Cozy tribute to Musicolet & YRRLYB/Aria (・ω・)ﾉ' }
        ]
      },
      {
        titleKey: 'cassette.t3.title',
        titleFallback: '03 · Extension Tape Mix (.musicoext)',
        duration: 162,
        lyrics: [
          { t: 0,   key: 'cassette.t3.l1', fallback: '[00:00] One CommonJS script on JavaScriptCore, QuickJS & Jint' },
          { t: 40,  key: 'cassette.t3.l2', fallback: '[00:40] Strict permissions.hosts allowlist checked per hop' },
          { t: 86,  key: 'cassette.t3.l3', fallback: '[01:26] Ephemeral Search (<Ext>) stays out of Library & Stats' },
          { t: 125, key: 'cassette.t3.l4', fallback: '[02:05] 10-Band ISO EQ tuned just right (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧' }
        ]
      }
    ];

    var PRESET_KEYS = {
      'Flat':         'eq.preset.flat',
      'Bass Boost':   'eq.preset.bass',
      'Treble Boost': 'eq.preset.treble',
      'Rock':         'eq.preset.rock',
      'Pop':          'eq.preset.pop',
      'Jazz':         'eq.preset.jazz',
      'Classical':    'eq.preset.classical',
      'Vocal':        'eq.preset.vocal',
      'Custom':       'eq.preset.custom'
    };

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
    var activePreset = 'Pop';

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
      activePreset = name;
      presetsBox.querySelectorAll('button').forEach(function (btn) {
        btn.setAttribute('aria-pressed', String(btn.dataset.preset === name));
      });
    }

    function renderPresets() {
      presetsBox.innerHTML = '';
      Object.keys(PRESETS).concat(['Custom']).forEach(function (name) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'eq-preset-btn';
        btn.dataset.preset = name;
        btn.textContent = t(PRESET_KEYS[name], name);
        btn.setAttribute('aria-pressed', String(name === activePreset));
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
    }
    renderPresets();

    if (preampInput && preampOut) {
      preampInput.addEventListener('input', function () {
        preamp = Number(preampInput.value);
        preampOut.textContent = (preamp > 0 ? '+' : '') + preamp + ' dB';
        paintBars();
      });
    }

    function renderTrack() {
      var tr = TRACKS[trackIdx];
      titleEl.textContent = t(tr.titleKey, tr.titleFallback);
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
        btn.textContent = t(line.key, line.fallback);
        btn.addEventListener('click', function () {
          elapsed = line.t;
          renderTrack();
        });
        lyricsBox.appendChild(btn);
      });

      root.querySelectorAll('.track-tab').forEach(function (tab, i) {
        tab.setAttribute('aria-pressed', String(i === trackIdx));
      });
    }

    root.querySelectorAll('.track-tab').forEach(function (tab, idx) {
      tab.addEventListener('click', function () {
        trackIdx = idx;
        elapsed = 0;
        renderTrack();
        animateSwap(lyricsBox);
      });
    });

    function setPlaying(next) {
      playing = next;
      shell.classList.toggle('playing', playing);
      document.body.classList.toggle('is-tape-playing', playing);
      playBtn.textContent = playing ? '❚❚' : '▶';
      playBtn.setAttribute('aria-label', playing ? t('cassette.pauseAria', 'Pause demo tape') : t('cassette.playAria', 'Play demo tape'));
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

    onLangChange(function () {
      renderPresets();
      renderTrack();
      playBtn.setAttribute('aria-label', playing ? t('cassette.pauseAria', 'Pause demo tape') : t('cassette.playAria', 'Play demo tape'));
    });
  }

  /* ── Native Platform UI Switcher (Home /) ────────────────────────────── */
  function initPlatformSwitcher() {
    var box = document.getElementById('platform-switcher');
    if (!box) return;

    var SIDEBAR_KEYS = ['Folders', 'Songs', 'Albums', 'Queues', 'Extensions'];

    function buildPlatformData() {
      return {
        apple: {
          windowTitle: t('platform.apple.windowTitle', 'Musico · Apple HIG (iOS 17+ / iPadOS / macOS)'),
          views: {
            Folders: [
              [t('platform.apple.folders.r1t', '~/Music/CityPop'), t('platform.apple.folders.r1s', 'FLAC · ALAC · 18 tracks')],
              [t('platform.apple.folders.r2t', 'Cloud · YouTube Mix'), t('platform.apple.folders.r2s', 'JavaScriptCore sandbox')],
              [t('platform.apple.folders.r3t', 'Safe Folder Swipes'), t('platform.apple.folders.r3s', 'allowsFullSwipe: false · DragReorder ≡')]
            ],
            Songs: [
              [t('platform.apple.songs.r1t', 'Plastic Love (24-bit)'), t('platform.apple.songs.r1s', 'FLAC · 4.8 MB/s · 07:53')],
              [t('platform.apple.songs.r2t', 'Midnight Pretenders'), t('platform.apple.songs.r2s', 'Swipe → Play Next · Swipe ← Delete')],
              [t('platform.apple.songs.r3t', 'Search (YouTube): City Pop'), t('platform.apple.songs.r3s', 'Ephemeral preview queue')]
            ],
            Albums: [
              [t('platform.apple.albums.r1t', 'Variety (1984)'), t('platform.apple.albums.r1s', 'Disc 1 · 11 tracks')],
              [t('platform.apple.albums.r2t', 'For You'), t('platform.apple.albums.r2s', 'Disc 1 · 8 tracks')],
              [t('platform.apple.albums.r3t', 'Timely!!'), t('platform.apple.albums.r3s', 'Disc 1 · 10 tracks')]
            ],
            Queues: [
              [t('platform.apple.queues.r1t', 'Queue #1 · Workday'), t('platform.apple.queues.r1s', '14 tracks · Deduplicated Play Next')],
              [t('platform.apple.queues.r2t', 'Queue #2 · Midnight'), t('platform.apple.queues.r2s', 'Swipe ← Remove + Undo toast')],
              [t('platform.apple.queues.r3t', 'Search (NetEase): OST'), t('platform.apple.queues.r3s', 'Ephemeral · Excluded from Stats')]
            ],
            Extensions: [
              [t('platform.apple.extensions.r1t', 'YouTube Search v1.2.0'), t('platform.apple.extensions.r1s', 'Enabled · web_login, search, playlist, stream')],
              [t('platform.apple.extensions.r2t', 'NetEase Cloud v1.2.0'), t('platform.apple.extensions.r2s', 'Enabled · qr_login, 9 quality tiers')],
              [t('platform.apple.extensions.r3t', 'Apple Music v1.0.1'), t('platform.apple.extensions.r3s', 'Enabled · lyrics Bearer auth, alac/atmos')]
            ]
          },
          specs: [
            t('platform.apple.spec1', 'UI Toolkit: Swift & SwiftUI (@Observable): NSVisualEffectView translucency, safe Folder swipes (allowsFullSwipe: false) & WCAG 2.1 Auto-fix'),
            t('platform.apple.spec2', 'Audio & Media: AVAudioEngine + AVAudioUnitEQ, deduplicated Play Next, Queue Undo & Floating Mini-Player'),
            t('platform.apple.spec3', 'JS Runtime: Embedded JavaScriptCore + ephemeral WKWebView for web_login capture only'),
            t('platform.apple.spec4', 'Formats: mp3, m4a, aac, flac, wav, aif, aiff, caf, alac (plus Drag-and-Drop import)'),
            t('platform.apple.spec5', 'Shortcuts: Cmd+K palette, Cmd+, settings, Cmd+Shift+N mini-player, Cmd+1–8 tabs')
          ]
        },
        android: {
          windowTitle: t('platform.android.windowTitle', 'MusicoAndroid · Material 3 / Material You (API 26+)'),
          views: {
            Folders: [
              [t('platform.android.folders.r1t', 'SAF Music Folder'), t('platform.android.folders.r1s', 'OPUS · FLAC · 24 tracks')],
              [t('platform.android.folders.r2t', 'Cloud · Bilibili Fav'), t('platform.android.folders.r2s', 'QuickJS isolated VM')],
              [t('platform.android.folders.r3t', 'Safe Folder Swipes'), t('platform.android.folders.r3s', '~44% / 140dp threshold · DragReorder ≡')]
            ],
            Songs: [
              [t('platform.android.songs.r1t', 'Rainy Waltz (Hi-Res)'), t('platform.android.songs.r1s', 'FLAC · 96 kHz · Imported .lrc')],
              [t('platform.android.songs.r2t', 'Aria Hangout Mix'), t('platform.android.songs.r2s', 'Swipe → Play Next · Swipe ← Delete')],
              [t('platform.android.songs.r3t', 'Night Drive BGM'), t('platform.android.songs.r3s', 'M4A · Embedded cover art')]
            ],
            Albums: [
              [t('platform.android.albums.r1t', 'Summer Cassette Tape'), t('platform.android.albums.r1s', '12 tracks · Track-ordered')],
              [t('platform.android.albums.r2t', 'Bilibili OST Favlist'), t('platform.android.albums.r2s', '19 tracks · .musico-cloud.json')],
              [t('platform.android.albums.r3t', 'Lo-Fi Study Beats'), t('platform.android.albums.r3s', '28 tracks · Local SAF')]
            ],
            Queues: [
              [t('platform.android.queues.r1t', 'Queue #1 · Commute'), t('platform.android.queues.r1s', '24 tracks · Deduplicated Play Next')],
              [t('platform.android.queues.r2t', 'Queue #2 · Sleep 30m'), t('platform.android.queues.r2s', '2-stage swipe ← Remove + Undo snackbar')],
              [t('platform.android.queues.r3t', 'Queue #3 · Workout'), t('platform.android.queues.r3s', '15 tracks · Shuffle On')]
            ],
            Extensions: [
              [t('platform.android.extensions.r1t', 'Bilibili Search v1.2.0'), t('platform.android.extensions.r1s', 'QuickJS · qr_login, Hi-Res/FLAC')],
              [t('platform.android.extensions.r2t', 'YouTube Search v1.2.0'), t('platform.android.extensions.r2s', 'web_login · 4 quality tiers')],
              [t('platform.android.extensions.r3t', 'Cookie & File Import'), t('platform.android.extensions.r3s', 'Masked cookies.txt + log redaction')]
            ]
          },
          specs: [
            t('platform.android.spec1', 'UI Toolkit: Kotlin & Jetpack Compose Material 3: Outlook × Material You 2-stage swipes, Queue Undo & WCAG 2.1 Auto-fix'),
            t('platform.android.spec2', 'Audio & Media: Media3 (ExoPlayer + MediaSessionService), DragReorder handle isolation & ~44% Folder swipe'),
            t('platform.android.spec3', 'JS Runtime: Embedded QuickJS (32 MB cap), ephemeral WebView web_login & cookies.txt import'),
            t('platform.android.spec4', 'Formats: mp3, m4a, aac, flac, wav, aif, aiff, caf, alac, ogg, opus, webm'),
            t('platform.android.spec5', 'Updates: Persistently signed release.apk with FileProvider installer & Drive OAuth 2.0')
          ]
        },
        windows: {
          windowTitle: t('platform.windows.windowTitle', 'MusicoWindows · Fluent Design (.NET 8 WPF)'),
          views: {
            Folders: [
              [t('platform.windows.folders.r1t', 'D:\\MyMusic\\OST'), t('platform.windows.folders.r1s', 'FLAC · WMA · 42 tracks')],
              [t('platform.windows.folders.r2t', 'Portable .\\Data\\'), t('platform.windows.folders.r2s', 'Jint + Windows HTTP Proxy')],
              [t('platform.windows.folders.r3t', 'Queue #3 · Focus'), t('platform.windows.folders.r3s', 'NAudio BiQuadFilter EQ')]
            ],
            Songs: [
              [t('platform.windows.songs.r1t', 'Soundtrack Disc 1 - 01'), t('platform.windows.songs.r1s', 'FLAC · 24-bit · Same-folder .lrc')],
              [t('platform.windows.songs.r2t', 'Studio Session Take 2'), t('platform.windows.songs.r2s', 'WAV · 1411 kbps')],
              [t('platform.windows.songs.r3t', 'Search (Bilibili): OST'), t('platform.windows.songs.r3s', 'Proxy 127.0.0.1:7890')]
            ],
            Albums: [
              [t('platform.windows.albums.r1t', 'Chrono Acoustics'), t('platform.windows.albums.r1s', '2 Discs · 34 tracks')],
              [t('platform.windows.albums.r2t', 'Google Drive Archive'), t('platform.windows.albums.r2s', 'Recursive folder · Synced')],
              [t('platform.windows.albums.r3t', 'Midnight Jazz Trio'), t('platform.windows.albums.r3s', '8 tracks · TagLib# edited')]
            ],
            Queues: [
              [t('platform.windows.queues.r1t', 'Queue #3 · Focus'), t('platform.windows.queues.r1s', '42 tracks · BiQuad Pop EQ')],
              [t('platform.windows.queues.r2t', 'Queue #4 · Late Night'), t('platform.windows.queues.r2s', '11 tracks · Stop after song')],
              [t('platform.windows.queues.r3t', 'Queue #5 · Saved Cloud'), t('platform.windows.queues.r3s', '18 tracks · .musico-cloud.json')]
            ],
            Extensions: [
              [t('platform.windows.extensions.r1t', 'Apple Music v1.0.1'), t('platform.windows.extensions.r1s', 'Jint · serverUrl + lyrics Bearer auth')],
              [t('platform.windows.extensions.r2t', 'YouTube Search v1.2.0'), t('platform.windows.extensions.r2s', 'WebView2 web_login + HTTP Proxy')],
              [t('platform.windows.extensions.r3t', 'Bilibili Search v1.2.0'), t('platform.windows.extensions.r3s', 'qr_login + Hi-Res/FLAC in .\\Data\\')]
            ]
          },
          specs: [
            t('platform.windows.spec1', 'UI Toolkit: C# / .NET 8 WPF: Win11 DWM Acrylic & rounded corners, independent sidebar, WCAG 2.1 Auto-fix'),
            t('platform.windows.spec2', 'Audio & Media: NAudio (BiQuadFilter 10-band EQ), TagLibSharp, SMTC & Floating Mini-Player'),
            t('platform.windows.spec3', 'JS Runtime: Embedded Jint + proxy-aware HttpClient, WebView2 web_login & cookie redaction'),
            t('platform.windows.spec4', 'Formats: mp3, m4a, aac, flac, wav, aif, aiff, wma, ogg, opus (plus Drag-and-Drop import)'),
            t('platform.windows.spec5', 'Shortcuts: Ctrl+K palette, Ctrl+, settings, Ctrl+Shift+N mini-player, Space play/pause')
          ]
        }
      };
    }

    var mockup = box.querySelector('.os-mockup');
    var titleEl = box.querySelector('[data-os-title]');
    var sideEl = box.querySelector('[data-os-sidebar]');
    var rowsEl = box.querySelector('[data-os-rows]');
    var specsEl = box.querySelector('[data-os-specs]');
    var currentOs = 'apple';
    var currentView = 'Folders';

    function renderRows(d, viewName) {
      var list = (d.views && d.views[viewName]) || d.views.Folders;
      rowsEl.innerHTML = list.map(function (row) {
        return '<div class="os-row"><strong>' + row[0] + '</strong><span>' + row[1] + '</span></div>';
      }).join('');
    }

    function render(key) {
      var DATA = buildPlatformData();
      var d = DATA[key];
      if (!d) return;
      currentOs = key;
      if (mockup) mockup.dataset.osTheme = key;
      document.querySelectorAll('[data-platform-tab]').forEach(function (tab) {
        tab.setAttribute('aria-selected', String(tab.getAttribute('data-platform-tab') === key));
      });
      titleEl.textContent = d.windowTitle;
      sideEl.innerHTML = '';
      SIDEBAR_KEYS.forEach(function (viewKey) {
        var b = document.createElement('button');
        b.type = 'button';
        b.dataset.viewKey = viewKey;
        b.textContent = t('platform.nav.' + viewKey.toLowerCase(), viewKey);
        b.className = viewKey === currentView ? 'active' : '';
        b.addEventListener('click', function () {
          currentView = viewKey;
          sideEl.querySelectorAll('button').forEach(function (x) {
            x.classList.toggle('active', x.dataset.viewKey === currentView);
          });
          renderRows(buildPlatformData()[currentOs], currentView);
          animateSwap(rowsEl);
        });
        sideEl.appendChild(b);
      });
      renderRows(d, currentView);
      specsEl.innerHTML = d.specs.map(function (s) {
        var idx = s.search(/[:：]/);
        if (idx > 0) return '<li><strong>' + s.slice(0, idx + 1) + '</strong>' + s.slice(idx + 1) + '</li>';
        return '<li>' + s + '</li>';
      }).join('');
      animateSwap(rowsEl);
      animateSwap(specsEl);
      if (window.__syncPills) window.__syncPills();
    }

    document.addEventListener('click', function (e) {
      var target = e.target && e.target.nodeType === 1 ? e.target : (e.target && e.target.parentElement);
      var btn = target && target.closest ? target.closest('[data-platform-tab]') : null;
      if (!btn) return;
      var key = btn.getAttribute('data-platform-tab');
      if (key) render(key);
    });

    render('apple');
    onLangChange(function () {
      render(currentOs);
    });
  }

  /* ── Latest GitHub Release Direct Downloads ──────────────────────────── */
  function initLatestDownloads() {
    var nodes = document.querySelectorAll('[data-dl-asset],[data-release-tag]');
    if (!nodes.length) return;

    function fmtMb(bytes) {
      if (!bytes || typeof bytes !== 'number') return '';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    function applyRelease(data) {
      if (!data || !data.tag_name) return;
      document.querySelectorAll('[data-release-tag]').forEach(function (el) {
        el.textContent = data.tag_name;
      });
      var assets = data.assets || [];
      document.querySelectorAll('[data-dl-asset]').forEach(function (link) {
        var suffix = link.getAttribute('data-dl-asset');
        var found = assets.find(function (a) {
          return a.name === suffix || (a.name && a.name.slice(-suffix.length) === suffix);
        });
        if (found && found.browser_download_url) {
          link.setAttribute('href', found.browser_download_url);
          var sizeEl = link.querySelector('[data-dl-size]');
          if (sizeEl && found.size) sizeEl.textContent = fmtMb(found.size);
        }
      });
    }

    var CACHE_KEY = 'musico-latest-release-v1';
    try {
      var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (cached && cached.ts && Date.now() - cached.ts < 15 * 60 * 1000 && cached.data) {
        applyRelease(cached.data);
        return;
      }
    } catch (e) {}

    if (typeof fetch !== 'function') return;
    fetch('https://api.github.com/repos/SEANPNEX/Musico/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !data.tag_name) return;
        applyRelease(data);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
        } catch (e) {}
      })
      .catch(function () {});
  }

  /* ── Install Platform Tabs (/guide/) ─────────────────────────────────── */
  function initInstallTabs() {
    var box = document.getElementById('install-switcher');
    if (!box) return;
    var tabs = box.querySelectorAll('[data-install-tab]');
    var panels = box.querySelectorAll('[data-install-panel]');
    function select(key) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t.dataset.installTab === key)); });
      panels.forEach(function (p) {
        var show = p.getAttribute('data-install-panel') === key;
        p.hidden = !show;
        if (show) animateSwap(p);
      });
      if (window.__syncPills) window.__syncPills();
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
      lines.push('// ' + t('gen.code.header', 'Musico Extension API v1 Starter ({name})').replace('{name}', name));
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
      if (has('web_login')) {
        lines.push('  webLogin: {');
        lines.push("    loginUrl: 'https://" + primaryHost + "/login',");
        lines.push("    cookieDomains: ['." + primaryHost + "'],");
        lines.push("    requiredCookies: ['SESSION_ID']");
        lines.push('  },');
      }
      lines.push('  permissions: {');
      lines.push('    hosts: ' + JSON.stringify(hosts));
      lines.push('  }');
      lines.push('};');
      lines.push('');
      lines.push('// ' + t('gen.code.errHelper', 'Standard error helper with err.code for localized host UX'));
      lines.push('function extError(code, message) {');
      lines.push('  var err = new Error(message);');
      lines.push('  err.code = code;');
      lines.push('  return err;');
      lines.push('}');

      var exportsList = ['manifest: manifest'];

      if (has('playlist') || has('tree')) {
        lines.push('');
        lines.push('// ' + t('gen.code.collectionHooks', 'URL matching & cloud collection fetcher'));
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
        if (has('cookie') || has('qr_login') || has('web_login')) {
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
        lines.push('// ' + t('gen.code.treeHook', 'Nested subfolder tree fetcher'));
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
        lines.push('// ' + t('gen.code.streamHook', 'Audio stream URL resolver'));
        lines.push('async function resolveStream(ctx, req) {');
        lines.push("  var headers = { Accept: 'application/json' };");
        if (has('cookie') || has('qr_login') || has('web_login')) {
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
        lines.push('// ' + t('gen.code.searchHook', 'Opt-in cloud search hook'));
        lines.push('async function search(ctx, req) {');
        lines.push("  var headers = { Accept: 'application/json' };");
        if (has('cookie') || has('qr_login') || has('web_login')) {
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
        lines.push('// ' + t('gen.code.lyricsHook', 'On-demand cloud lyrics search hook'));
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
        lines.push('// ' + t('gen.code.qrHooks', 'QR code login session start & polling hooks'));
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
      outCmd.textContent = '# ' + t('gen.cli.header', 'Run locally with mock-runner.mjs (Node 18+)') + '\n' + cmd;
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
      var fname = dlBtn.dataset.filename || 'extension.musico.js';
      a.download = fname;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast(t('toast.downloaded', 'Downloaded {file} ♪').replace('{file}', fname));
    });

    buildCode();
    onLangChange(buildCode);
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

  /* ── Sliding Active Pill for .segmented Controls ─────────────────────── */
  function initSlidingPills() {
    var groups = document.querySelectorAll('.segmented');
    if (!groups.length) return;

    var pills = [];
    groups.forEach(function (group) {
      var pill = document.createElement('span');
      pill.className = 'segmented-pill';
      pill.setAttribute('aria-hidden', 'true');
      group.insertBefore(pill, group.firstChild);
      group.classList.add('has-pill');
      pills.push({ group: group, pill: pill });
    });

    function syncAll() {
      pills.forEach(function (entry) {
        var active = entry.group.querySelector('button[aria-selected="true"]');
        if (!active) return;
        entry.pill.style.width = active.offsetWidth + 'px';
        entry.pill.style.height = active.offsetHeight + 'px';
        entry.pill.style.top = active.offsetTop + 'px';
        entry.pill.style.transform = 'translate3d(' + active.offsetLeft + 'px, 0, 0)';
      });
    }

    window.__syncPills = syncAll;
    window.addEventListener('resize', syncAll, { passive: true });
    if (typeof ResizeObserver === 'function') {
      var ro = new ResizeObserver(syncAll);
      pills.forEach(function (entry) { ro.observe(entry.group); });
    }
    onLangChange(function () {
      requestAnimationFrame(syncAll);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncAll);
    }
    requestAnimationFrame(syncAll);
  }

  /* ── Scroll-Triggered Staggered Reveals ──────────────────────────────── */
  function initScrollReveals() {
    if (REDUCED_MOTION() || !('IntersectionObserver' in window)) return;
    var groups = document.querySelectorAll('.zine-grid, .portal-grid, .download-grid, .plugin-cards, .guide-dl-grid');
    if (!groups.length) return;

    var targets = [];
    groups.forEach(function (g) {
      var children = Array.prototype.slice.call(g.children);
      children.forEach(function (el, idx) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) return;
        el.style.setProperty('--reveal-delay', (idx * 45) + 'ms');
        el.classList.add('reveal-ready');
        targets.push(el);
      });
    });

    if (!targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    targets.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initFloatingBackground();
    initClickSparkles();
    initTheme();
    initMascots();
    initChrome();
    initCopyButtons();
    initCassettePlayer();
    initPlatformSwitcher();
    initLatestDownloads();
    initInstallTabs();
    initStarterGenerator();
    initSlidingPills();
    initScrollReveals();
    initI18n();
  });
})();
