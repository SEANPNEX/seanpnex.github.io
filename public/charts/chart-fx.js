/*
 * Shared motion and hover layer for every chart under /charts. Load it in
 * <head>, before the chart's own scripts:
 *
 *   <script src="chart-fx.js"></script>
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

  root.classList.add('fx-boot');
  var css = [
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
