/*
 * Shared motion, hover and theme layer for every chart under /charts. Load it
 * in <head>, before the chart's own scripts:
 *
 *   <script src="chart-fx.js"></script>
 *
 * Theme: charts are written in the light ladder only (hex or rgb grays); on
 * the site's dark switch this layer inverts them in place and keeps doing so
 * as the chart redraws.
 *
 * Entrance: every CSS animation waits until its block of the card scrolls
 * into view, so nothing plays (and finishes) off screen.
 *
 * Hover, on any element of the chart:
 *   data-tip="Title\nmore"   tooltip (the first line is bold when there are several);
 *                            an SVG <title> child is turned into one automatically
 *   data-hl="a b"            lights every element sharing a token
 *   data-node="k"            a diagram node; lights its links and neighbours
 *   data-edge="a>b"          a link between two nodes; lights both ends
 *   data-path="x/y/z"        a tree position; lights its ancestors and descendants
 * Everything else marked this way in the same SVG (or [data-fx-scope], or the
 * card) dims. Small dots are found within a few pixels, so they need no hit
 * area, and touch taps pin the tooltip instead of replaying the chart.
 *
 * Charts can also hand the layer a readout: an element with `__fxProbe =
 * { move(event) → { text, x, y } | null, leave() }` (curve-kit's probe()).
 */
(function () {
  var INK = '#1C1C1A', PAPER = '#F0EFEB';
  var SEL = '[data-tip],[data-hl],[data-node],[data-edge],[data-path]';
  var root = document.documentElement;
  var T = function (s) { return window.chartI18n ? chartI18n.t(s) : s; };

  /* ── Theme ────────────────────────────────────────────────────────────── */

  // Charts are drawn on the light paper. On the site's dark switch (the .dark
  // class on the embedding page; the system setting when a chart is opened on
  // its own) every gray in the stylesheets, inline styles and SVG paint is
  // moved to its place on the inverted ladder: the most important mark, the
  // darkest on paper, becomes the lightest. Pairs are the site's tokens;
  // grays between them are placed by lightness.
  var LADDER = [
    ['#1C1C1A', '#F0EFEB'], ['#4A4944', '#C9C7BD'], ['#6A6963', '#B3B0A4'], ['#8F8E88', '#8F8E88'],
    ['#B0AFA9', '#6A6963'], ['#C6C5BF', '#4A4944'], ['#DEDDD6', '#2E2D29'], ['#E7E6E0', '#252421'],
    ['#F0EFEB', '#1C1C1A'], ['#FFFFFF', '#252421'], // lighter than paper = raised, as cards are on dark
  ].map(function (p) {
    var rgb = function (h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); }); };
    var a = rgb(p[0]);
    return { l: 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2], to: rgb(p[1]) };
  });
  function invert(r, g, b) {
    var l = 0.2126 * r + 0.7152 * g + 0.0722 * b, i = 1;
    while (i < LADDER.length - 1 && l > LADDER[i].l) i++;
    var a = LADDER[i - 1], z = LADDER[i], t = Math.max(0, Math.min(1, (l - a.l) / (z.l - a.l)));
    return a.to.map(function (v, k) { return Math.round(v + (z.to[k] - v) * t); });
  }
  var COLOR = /#([0-9a-f]{6}|[0-9a-f]{3})\b|rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*([,/][^)]*)?\)/gi;
  function recolor(s) {
    return s.replace(COLOR, function (m, hex, r, g, b, alpha, at, all) {
      if (all.slice(Math.max(0, at - 4), at) === 'url(') return m; // url(#id), not a color
      if (hex) {
        if (hex.length === 3) hex = hex.replace(/./g, '$&$&');
        var c = invert(parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16));
        return '#' + c.map(function (v) { return (v < 16 ? '0' : '') + v.toString(16).toUpperCase(); }).join('');
      }
      var d = invert(+r, +g, +b);
      return (alpha ? 'rgba(' : 'rgb(') + d.join(', ') + (alpha ? alpha.replace('/', ',') : '') + ')';
    });
  }

  var PAINT = ['fill', 'stroke', 'stop-color', 'flood-color', 'color', 'style'];
  var dark = false, sheetsDone = new WeakSet(), ruleUndo = [];

  // Stylesheets: rewrite each declaration that names a color, keeping the original.
  function eachRule(list, fn) {
    [].forEach.call(list, function (r) { if (r.style) fn(r.style); if (r.cssRules) eachRule(r.cssRules, fn); });
  }
  function recolorSheets() {
    [].forEach.call(document.styleSheets, function (sheet) {
      if (sheetsDone.has(sheet)) return;
      var rules;
      try { rules = sheet.cssRules; } catch (e) { sheetsDone.add(sheet); return; } // cross-origin (fonts)
      sheetsDone.add(sheet);
      eachRule(rules, function (st) {
        for (var i = st.length - 1; i >= 0; i--) {
          var p = st[i], v = st.getPropertyValue(p), w = recolor(v);
          if (w === v) continue;
          ruleUndo.push([st, p, v, st.getPropertyPriority(p)]);
          st.setProperty(p, w, st.getPropertyPriority(p));
        }
      });
    });
  }

  // Elements: paint attributes, and inline styles one property at a time
  // (a chart may later change just its position). Each keeps its light value
  // and the dark one written over it, in data-fx-light so that a copied node
  // (cloneNode, innerHTML) carries them too; a value equal to the dark one is
  // ours. `drawn` names attributes the chart has just set, so they are light.
  var KEEP = 'data-fx-light';
  function recolorEl(n, drawn) {
    var saved = n.getAttribute(KEEP), keep = saved ? JSON.parse(saved) : { a: {}, c: {} };
    PAINT.forEach(function (a) {
      if (a === 'style') return;
      var v = n.getAttribute(a), k = keep.a[a];
      if (v == null || (k && v === k[1] && !(drawn && drawn[a]))) return;
      var w = recolor(v);
      if (w === v) { delete keep.a[a]; return; }
      n.setAttribute(a, w);
      keep.a[a] = [v, w];
    });
    var st = n.style, before = n.getAttribute('style'), clean = !Object.keys(keep.c).length, wrote = false;
    for (var i = 0; st && i < st.length; i++) {
      var p = st[i], v = st.getPropertyValue(p), k = keep.c[p];
      if (k && v === k[1]) continue;
      var w = recolor(v);
      if (w === v) { delete keep.c[p]; continue; }
      st.setProperty(p, w, st.getPropertyPriority(p));
      keep.c[p] = [v, st.getPropertyValue(p)];
      wrote = true;
    }
    // While the whole attribute is still the chart's, it comes back as written.
    if (wrote) keep.t = clean ? [before, n.getAttribute('style')] : null;
    var out = Object.keys(keep.a).length || Object.keys(keep.c).length ? JSON.stringify(keep) : null;
    if (out !== saved) out ? n.setAttribute(KEEP, out) : n.removeAttribute(KEEP);
  }
  function restoreEl(n) {
    var saved = n.getAttribute(KEEP);
    if (!saved) return;
    var keep = JSON.parse(saved), st = n.style;
    for (var a in keep.a) if (n.getAttribute(a) === keep.a[a][1]) n.setAttribute(a, keep.a[a][0]);
    if (keep.t && n.getAttribute('style') === keep.t[1]) n.setAttribute('style', keep.t[0]);
    else for (var p in keep.c) if (st.getPropertyValue(p) === keep.c[p][1]) st.setProperty(p, keep.c[p][0], st.getPropertyPriority(p));
    n.removeAttribute(KEEP);
  }
  var tree = function (n, fn) { if (n.nodeType === 1) { fn(n); [].forEach.call(n.querySelectorAll('*'), function (m) { fn(m); }); } };

  var painter = new MutationObserver(function (records) {
    if (!dark) {
      // A copy of a node made while dark returns to its light colors.
      records.forEach(function (r) {
        [].forEach.call(r.addedNodes, function (n) {
          if (n.nodeType === 1 && (n.hasAttribute(KEEP) || n.querySelector('[' + KEEP + ']'))) tree(n, restoreEl);
        });
      });
      painter.takeRecords();
      return;
    }
    var drawn = new Map(), added = [], sheets = false;
    records.forEach(function (r) {
      if (r.type === 'attributes') {
        var set = drawn.get(r.target) || {};
        set[r.attributeName] = true;
        drawn.set(r.target, set);
      } else {
        added.push.apply(added, r.addedNodes);
        sheets = true;
      }
    });
    // Each element once per batch, so nothing is inverted twice.
    var seen = new Set(), visit = function (n) { if (!seen.has(n)) { seen.add(n); recolorEl(n, drawn.get(n)); } };
    added.forEach(function (n) { if (n.isConnected) tree(n, visit); });
    drawn.forEach(function (set, n) { visit(n); });
    if (sheets) recolorSheets();
    painter.takeRecords(); // our own writes
  });
  painter.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: PAINT });
  // A linked stylesheet (ledger.css) can be read only once it has loaded.
  document.addEventListener('load', function (e) { if (dark && e.target.tagName === 'LINK') recolorSheets(); }, true);

  function setDark(on) {
    if (on === dark) return;
    dark = on;
    root.classList.toggle('dark', on);
    if (on) {
      recolorSheets();
      tree(root, function (n) { recolorEl(n); });
    } else {
      ruleUndo.forEach(function (u) { u[0].setProperty(u[1], u[2], u[3]); });
      ruleUndo = [];
      sheetsDone = new WeakSet();
      tree(root, restoreEl);
    }
    painter.takeRecords();
  }

  var host = (function () { try { return parent !== window && parent.document.documentElement; } catch (e) { return null; } })();
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var syncTheme = function () { setDark(host ? host.classList.contains('dark') : system.matches); };
  syncTheme();
  if (host) new MutationObserver(syncTheme).observe(host, { attributes: true, attributeFilter: ['class'] });
  else system.addEventListener('change', syncTheme);

  root.classList.add('fx-boot');
  var css = [
    ':root.dark{color-scheme:dark}',
    // Held animations: everything until the blocks are known, then each block until it is seen.
    'html.fx-boot body *,.fx-wait,.fx-wait *{animation-play-state:paused!important}',
    '.fx-tip{position:fixed;left:0;top:0;z-index:99;max-width:min(260px,calc(100vw - 16px));padding:7px 10px 8px;border-radius:9px;',
    "background:" + INK + ";color:" + PAPER + ";font:500 11px/1.45 Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;",
    'letter-spacing:0;text-transform:none;pointer-events:none;opacity:0;transform:translateY(3px);',
    'transition:opacity .14s ease,transform .14s ease;font-variant-numeric:tabular-nums}',
    '.fx-tip.on{opacity:1;transform:none}',
    '.fx-tip b{display:block;margin-bottom:1px;font-weight:700}',
    '.fx-tip span{display:block;color:#CFCEC7}',
    ':where(' + SEL + '){transition:fill-opacity .18s ease,stroke-opacity .18s ease,filter .18s ease}',
    ':is(svg.fx-dim,.fx-dim svg) :is(' + SEL + '):not(.fx-lit){fill-opacity:.16;stroke-opacity:.16}',
    '.fx-dim :is(' + SEL + '):not(.fx-lit):not(svg *){filter:opacity(.32)}',
    '.fx-ring{fill:none;stroke:' + INK + ';stroke-width:1.3;pointer-events:none;animation:fx-in .16s ease-out both}',
    '.fx-hot:is(path,line,polyline):not([stroke=transparent]){stroke-width:2.4px}',
    '.fx-guide{pointer-events:none}',
    '@keyframes fx-in{from{opacity:0}}',
    '@media(prefers-reduced-motion:reduce){.fx-tip{transition:none}.fx-ring{animation:none}}',
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── Entrance ─────────────────────────────────────────────────────────── */

  // Blocks are the card's children; a tall block with several children is
  // split further, so the lower half of a long card waits for its own turn.
  function blocks() {
    var main = document.querySelector('main') || document.body, out = [];
    var split = function (el) {
      var kids = [].filter.call(el.children, function (k) { return !/^(SCRIPT|STYLE|TEMPLATE|LINK)$/.test(k.tagName); });
      var tall = el.getBoundingClientRect().height > 420;
      if (tall && kids.length > 1 && !(el instanceof SVGElement) && el.tagName !== 'CANVAS') kids.forEach(split);
      else out.push(el);
    };
    [].forEach.call(main.children, function (k) { if (!/^(SCRIPT|STYLE|TEMPLATE|LINK)$/.test(k.tagName)) split(k); });
    return out;
  }

  // Call `fn(el)` once `el` is well into the viewport. Two paths, whichever
  // comes first: an IntersectionObserver, and a measurement against the host
  // page's viewport (charts live in iframes) on every host scroll or resize.
  var pending = [], io = null, hooked = false;
  // The host page and our <iframe> in it, looked up when needed: during the
  // first parse of <head> the frame element may not be reachable yet.
  var frameOf = function () { try { return window.frameElement; } catch (e) { return null; } };
  var enough = function (r, top, vh) {
    var need = Math.min(120, r.height * 0.35);
    return top < vh - need && top + r.height > need;
  };
  function done(item) {
    pending = pending.filter(function (p) { return p !== item; });
    if (io) io.unobserve(item.el);
    item.fn(item.el);
  }
  function check() {
    if (!pending.length) return;
    var frame = frameOf(), off = frame ? frame.getBoundingClientRect().top : 0, vh = frame ? parent.innerHeight : innerHeight;
    pending.slice().forEach(function (p) {
      var r = p.el.getBoundingClientRect();
      if (r.height && enough(r, r.top + off, vh)) done(p);
    });
  }
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var item = pending.filter(function (p) { return p.el === e.target; })[0];
        if (item && e.isIntersecting && e.intersectionRect.height >= Math.min(120, e.boundingClientRect.height * 0.35)) done(item);
      });
    }, { threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1] });
  }
  function hook() {
    if (hooked) return;
    hooked = true;
    var host = frameOf() ? parent : window;
    host.addEventListener('scroll', check, { passive: true });
    host.addEventListener('resize', check);
    window.addEventListener('load', check);
  }
  function onView(el, fn) {
    hook();
    pending.push({ el: el, fn: fn });
    if (io) io.observe(el);
    setTimeout(check, 60);
  }

  function arm() {
    blocks().forEach(function (b) {
      b.classList.add('fx-wait');
      onView(b, function () { b.classList.remove('fx-wait'); });
    });
    root.classList.remove('fx-boot');
  }

  /* ── Tooltip ──────────────────────────────────────────────────────────── */

  var tip = null;
  function tipEl() {
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'fx-tip';
      tip.setAttribute('role', 'tooltip');
      document.body.appendChild(tip);
    }
    return tip;
  }
  function fill(text) {
    var lines = T(text).split('\n'), t = tipEl();
    t.textContent = '';
    lines.forEach(function (line, i) {
      var n = document.createElement(lines.length > 1 ? (i ? 'span' : 'b') : 'span');
      if (lines.length === 1) n.style.color = PAPER;
      n.textContent = line;
      t.appendChild(n);
    });
  }
  // Above the anchor point, or below it when there is no room; always inside the frame.
  function place(x, top, bottom) {
    var t = tipEl(), w = t.offsetWidth, h = t.offsetHeight, vw = root.clientWidth;
    var left = Math.max(6, Math.min(vw - w - 6, x - w / 2));
    var y = top - h - 9;
    if (y < 4) y = (bottom == null ? top : bottom) + 9;
    t.style.transform = '';
    t.style.left = left + 'px';
    t.style.top = y + 'px';
    t.classList.add('on');
  }
  function showAt(text, x, top, bottom) { fill(text); place(x, top, bottom); }
  function hideTip() { if (tip) tip.classList.remove('on'); }

  /* ── Highlight ────────────────────────────────────────────────────────── */

  var hot = null, ring = null, scope = null, lit = [], probe = null, pinned = false, lastType = 'mouse';
  var words = function (n, a) { return (n.getAttribute(a) || '').split(/\s+/).filter(Boolean); };

  function scopeOf(n) {
    return n.closest('[data-fx-scope]') || n.closest('svg') || document.querySelector('main') || document.body;
  }

  function related(n, sc) {
    var all = [].slice.call(sc.querySelectorAll(SEL)), on = [n];
    var add = function (m) { if (on.indexOf(m) < 0) on.push(m); };
    var hl = words(n, 'data-hl');
    if (hl.length) all.forEach(function (m) { if (words(m, 'data-hl').some(function (t) { return hl.indexOf(t) >= 0; })) add(m); });
    var node = n.getAttribute('data-node'), edge = n.getAttribute('data-edge'), path = n.getAttribute('data-path');
    if (node) {
      var ends = [node];
      all.forEach(function (m) {
        var e = m.getAttribute('data-edge');
        if (!e) return;
        var ab = e.split('>');
        if (ab[0] === node || ab[1] === node) { add(m); ends.push(ab[0], ab[1]); }
      });
      all.forEach(function (m) { if (ends.indexOf(m.getAttribute('data-node')) >= 0) add(m); });
    }
    if (edge) {
      var ab = edge.split('>');
      all.forEach(function (m) {
        var k = m.getAttribute('data-node');
        if (k === ab[0] || k === ab[1] || m.getAttribute('data-edge') === edge) add(m);
      });
    }
    if (path != null) {
      all.forEach(function (m) {
        var p = m.getAttribute('data-path');
        if (p != null && (p === path || path.indexOf(p + '/') === 0 || p.indexOf(path + '/') === 0)) add(m);
      });
    }
    // A lit group lights the marks inside it too.
    on.slice().forEach(function (m) { [].forEach.call(m.querySelectorAll(SEL), add); });
    return { all: all, on: on };
  }

  function addRing(n) {
    if (!(n instanceof SVGElement)) return;
    var shape = n.matches('circle,rect') ? n : n.querySelector(':scope > rect, :scope > circle');
    // Invisible hit areas get no outline.
    if (!shape || shape.getAttribute('fill') === 'transparent') return;
    var NS = 'http://www.w3.org/2000/svg', r = document.createElementNS(NS, shape.tagName), g = function (a) { return parseFloat(shape.getAttribute(a)) || 0; };
    if (shape.tagName === 'circle') {
      r.setAttribute('cx', g('cx')); r.setAttribute('cy', g('cy')); r.setAttribute('r', g('r') + 3.5);
    } else {
      r.setAttribute('x', g('x') - 2.5); r.setAttribute('y', g('y') - 2.5);
      r.setAttribute('width', g('width') + 5); r.setAttribute('height', g('height') + 5);
      r.setAttribute('rx', g('rx') + 2.5);
    }
    if (shape.getAttribute('transform')) r.setAttribute('transform', shape.getAttribute('transform'));
    r.setAttribute('class', 'fx-ring');
    shape.after(r);
    ring = r;
  }

  function clear() {
    if (hot) hot.classList.remove('fx-hot');
    if (ring) ring.remove();
    if (scope) scope.classList.remove('fx-dim');
    lit.forEach(function (m) { m.classList.remove('fx-lit'); });
    hot = ring = scope = null;
    lit = [];
  }

  function activate(n) {
    clear();
    hot = n;
    scope = scopeOf(n);
    var r = related(n, scope);
    lit = r.on;
    lit.forEach(function (m) { m.classList.add('fx-lit'); });
    if (r.on.length < r.all.length) scope.classList.add('fx-dim');
    n.classList.add('fx-hot');
    addRing(n);
  }

  function tipFor(n, e) {
    var text = n.getAttribute('data-tip');
    if (!text) { hideTip(); return; }
    var b = n.getBoundingClientRect();
    // Wide marks (bars, rows) follow the pointer; small ones keep the tip centred.
    var x = b.width > 140 && e && e.clientX != null ? Math.max(b.left, Math.min(b.right, e.clientX)) : b.left + b.width / 2;
    showAt(text, x, b.top, b.bottom);
  }

  // The marked element under the pointer, or the nearest small dot within reach.
  function find(e) {
    var t = e.target;
    if (!t || !t.closest) return null;
    var n = t.closest(SEL);
    if (n && n !== document.body && !n.matches('main,body')) return n;
    var svg = t.closest('svg');
    if (!svg) return null;
    var best = null, reach = e.pointerType === 'touch' ? 22 : 14;
    [].forEach.call(svg.querySelectorAll('circle[data-tip]'), function (c) {
      var b = c.getBoundingClientRect();
      if (!b.width) return;
      var d = Math.hypot(b.left + b.width / 2 - e.clientX, b.top + b.height / 2 - e.clientY) - b.width / 2;
      if (d < reach) { reach = d; best = c; }
    });
    return best;
  }

  function leaveProbe() { if (probe) { probe.__fxProbe.leave(); probe = null; } }

  function update(e) {
    var n = find(e);
    if (n) {
      leaveProbe();
      if (n !== hot) activate(n);
      tipFor(n, e);
      return n;
    }
    var p = e.target && e.target.closest && e.target.closest('[data-probe]');
    if (p && p.__fxProbe) {
      clear();
      if (probe && probe !== p) leaveProbe();
      probe = p;
      var r = p.__fxProbe.move(e);
      if (r) showAt(r.text, r.x, r.y, r.bottom); else hideTip();
      return p;
    }
    reset();
    return null;
  }
  function reset() { clear(); leaveProbe(); hideTip(); pinned = false; }

  var queued = null, frame = 0;
  document.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
    lastType = e.pointerType;
    queued = e;
    if (!frame) frame = requestAnimationFrame(function () { frame = 0; if (queued) update(queued); });
  }, { passive: true });
  root.addEventListener('mouseleave', function () { queued = null; reset(); });
  document.addEventListener('pointerdown', function (e) {
    lastType = e.pointerType;
    if (e.pointerType === 'mouse') return;
    // A tap reads the mark under the finger; tapping empty space clears it.
    pinned = !!update(e);
  }, { passive: true });
  // Taps and clicks on a marked element show it instead of replaying the chart.
  document.addEventListener('click', function (e) {
    var n = find(e);
    var p = e.target && e.target.closest && e.target.closest('[data-probe]');
    if (n || (p && lastType !== 'mouse')) e.stopPropagation();
  }, true);
  document.addEventListener('focusin', function (e) {
    var n = e.target.closest && e.target.closest(SEL);
    if (n) { activate(n); tipFor(n); }
  });
  document.addEventListener('focusout', function () { if (!pinned) reset(); });
  window.addEventListener('resize', reset);

  /* ── Native <title> tooltips become styled ones ──────────────────────── */

  function adopt(node) {
    if (node.nodeType !== 1) return;
    var titles = node.tagName === 'title' ? [node] : node.querySelectorAll ? node.querySelectorAll('svg title') : [];
    [].forEach.call(titles, function (t) {
      var p = t.parentNode;
      if (!p || p.tagName === 'svg' || !(p instanceof SVGElement)) return;
      if (!p.hasAttribute('data-tip')) p.setAttribute('data-tip', t.textContent);
      t.remove();
    });
  }
  function watch() {
    adopt(document.body);
    new MutationObserver(function (records) {
      records.forEach(function (r) { [].forEach.call(r.addedNodes, adopt); });
      // A redraw can remove the element being shown.
      if ((hot && !hot.isConnected) || (probe && !probe.isConnected)) reset();
    }).observe(document.body, { childList: true, subtree: true });
  }

  function start() { arm(); watch(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.chartFx = { show: showAt, hide: hideTip, reset: reset, onView: onView };
})();
