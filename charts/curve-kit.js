/*
 * Shared card shell and drawing kit for the lieflat charts (production
 * function, Solow diagrams, the FSA ledgers and trees). Load it in <head>:
 *
 *   <script src="curve-kit.js"></script>
 *
 * Every SVG is drawn at its real pixel width (viewBox width = rendered width),
 * so a 11px label is 11px on a phone and on a desktop alike. Charts redraw
 * when their width changes and report the card height to the host page.
 */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  // The light ladder; chart-fx.js inverts it on the site's dark switch.
  var C = {
    INK: '#1C1C1A', PAPER: '#F0EFEB', MUTED: '#6A6963', SOFT: '#9A9992',
    FAINT: '#BEBDB6', GRID: '#D8D6CE', TICK: '#CFCEC7',
  };
  var CJK = /[぀-ヿ㐀-鿿]/;

  var css = [
    ':root{--paper:#F0EFEB;--ink:#1C1C1A;--muted:#6A6963;--grid:#D8D6CE}',
    '*{margin:0;padding:0;box-sizing:border-box}',
    // Phones must not enlarge chart text on their own; the layouts are sized for these exact pixels.
    "html{-webkit-text-size-adjust:100%;text-size-adjust:100%}",
    "body{background:var(--paper);color:var(--ink);font-family:'Inter',ui-sans-serif,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}",
    '.card{padding:28px 28px 18px;border-radius:24px;overflow:hidden}',
    'h2{max-width:820px;font-size:clamp(22px,3.6vw,34px);font-weight:700;line-height:1.1;letter-spacing:-.03em}',
    '.sub{margin:10px 0 16px;color:var(--muted);font-size:12px;line-height:1.55;max-width:720px}',
    '.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}',
    '.panel{border:1px solid var(--grid);border-radius:18px;padding:14px 12px 6px;min-width:0;transition:border-color .2s ease}',
    '.panel:hover{border-color:#BEBDB6}',
    '.panel h3{font-size:13px;font-weight:700;letter-spacing:-.01em}',
    '.panel .hint{margin:3px 0 6px;font-size:10.5px;color:var(--muted);line-height:1.45}',
    'svg{display:block;width:100%;height:auto;overflow:visible}',
    'svg text{font-family:inherit}',
    // Source lines are already written in capitals; leaving case alone keeps α, k*, y* intact.
    '.src{margin-top:14px;color:#8A8983;font-size:9px;font-weight:700;letter-spacing:.14em;line-height:1.6}',
    '.src .f{letter-spacing:.06em}',
    '.draw{stroke-dasharray:1;stroke-dashoffset:1;animation:draw 1.15s cubic-bezier(.4,0,.2,1) both}',
    '.pop{transform-box:fill-box;transform-origin:center;animation:pop .45s cubic-bezier(.2,.7,.3,1.3) both}',
    '.fade{animation:fade .7s ease both}',
    '@keyframes draw{to{stroke-dashoffset:0}}',
    '@keyframes pop{from{transform:scale(0)}to{transform:none}}',
    '@keyframes fade{from{opacity:0}}',
    // Redraws after a resize skip the entrance animation.
    '.still .draw{stroke-dashoffset:0;animation:none}.still .pop,.still .fade{animation:none}',
    '@media(max-width:539px){.card{padding:22px 14px 14px}.grid{grid-template-columns:1fr}h2{font-size:24px}}',
    '@media(prefers-reduced-motion:reduce){.draw{stroke-dashoffset:0;animation:none}.pop,.fade{animation:none}}',
  ].join('\n');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var T = function (s) { return window.chartI18n ? chartI18n.t(s) : s; };

  function el(parent, tag, attrs, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    parent.appendChild(n);
    return n;
  }
  var root = function (p) { return p.ownerSVGElement || p; };

  // "sAk^{α}" and "n_{2}" become raised or lowered small tspans.
  function rich(node, s, size) {
    var re = /([\^_])\{([^}]*)\}/g, last = 0, off = 0, m;
    var put = function (str, target, small) {
      if (!str) return;
      el(node, 'tspan', { dy: target - off || null, 'font-size': small ? size * 0.72 : null }, str);
      off = target;
    };
    while ((m = re.exec(s))) {
      put(s.slice(last, m.index), 0);
      put(m[2], m[1] === '^' ? -size * 0.4 : size * 0.22, true);
      last = re.lastIndex;
    }
    put(s.slice(last), 0);
  }
  var plain = function (s) { return s.replace(/[\^_]\{([^}]*)\}/g, '$1'); };

  // Break a label into lines no wider than maxWidth. Latin text breaks at
  // spaces; CJK text has none, so it breaks between characters.
  function wrap(p, s, maxWidth, size, weight) {
    if (!maxWidth) return [s];
    var probe = el(root(p), 'text', { 'font-size': size, 'font-weight': weight, visibility: 'hidden' });
    var width = function (t) { probe.textContent = plain(t); return probe.getComputedTextLength(); };
    var cjk = CJK.test(s) && !/\s/.test(s.trim());
    var tokens = cjk ? Array.from(s) : s.split(/\s+/), sep = cjk ? '' : ' ';
    var out = [], cur = '';
    tokens.forEach(function (tok) {
      var next = cur ? cur + sep + tok : tok;
      if (cur && width(next) > maxWidth) { out.push(cur); cur = tok; } else cur = next;
    });
    if (cur) out.push(cur);
    var widest = Math.max.apply(null, out.map(width));
    probe.remove();
    return { rows: out, widest: widest };
  }

  /*
   * Text with a paper halo. Options: size, weight, fill, anchor, delay,
   * maxWidth (wraps), up (y is the last line's baseline, lines grow upward),
   * middle (lines are centred on y). Labels are nudged back inside the SVG.
   * Returns { top, bottom } in SVG units.
   */
  function label(p, x, y, s, o) {
    o = o || {};
    var size = o.size || 11, weight = o.weight || 800;
    s = T(s); // translate before wrapping, so lines break on the translated text
    var w = wrap(p, s, o.maxWidth, size, weight);
    var rows = w.rows || w;
    // A single unbreakable word wider than the room shrinks rather than spills.
    if (o.maxWidth && w.widest > o.maxWidth) size = Math.max(o.minSize || 8.5, size * o.maxWidth / w.widest);
    var lh = size * 1.22;
    var first = o.up ? y - (rows.length - 1) * lh : o.middle ? y - ((rows.length - 1) * lh) / 2 : y;
    var g = el(p, 'g', { class: 'fade', style: 'animation-delay:' + (o.delay || 0) + 's' });
    var texts = rows.map(function (row, i) {
      var t = el(g, 'text', {
        x: x, y: first + i * lh, 'font-size': size, 'font-weight': weight,
        fill: o.fill || C.INK, 'text-anchor': o.anchor || 'start', 'letter-spacing': o.ls || null,
        style: 'paint-order:stroke;stroke:' + C.PAPER + ';stroke-width:' + (o.halo == null ? 3 : o.halo) + 'px;stroke-linejoin:round',
      });
      rich(t, row, size);
      return t;
    });
    var vb = root(p).viewBox.baseVal, b = g.getBBox(), dx = 0;
    if (b.x < 2) dx = 2 - b.x;
    else if (b.x + b.width > vb.width - 2) dx = vb.width - 2 - (b.x + b.width);
    if (dx) texts.forEach(function (t) { t.setAttribute('x', x + dx); });
    return { top: first - size * 0.8, bottom: first + (rows.length - 1) * lh + size * 0.25 };
  }

  // Label laid along a straight line (x1,y1)→(x2,y2), parallel to it and
  // `offset` pixels above it (or below, with o.below), anchored at fraction t.
  function along(p, x1, y1, x2, y2, t, s, o) {
    o = o || {};
    var size = o.size || 10.5, a = Math.atan2(y2 - y1, x2 - x1);
    var off = o.below ? -(o.offset || 6) - size * 0.75 : o.offset || 6;
    var x = x1 + (x2 - x1) * t + Math.sin(a) * off, y = y1 + (y2 - y1) * t - Math.cos(a) * off;
    var g = el(p, 'g', { class: 'fade', style: 'animation-delay:' + (o.delay || 0) + 's' });
    var text = el(g, 'text', {
      x: x, y: y, transform: 'rotate(' + ((a * 180) / Math.PI).toFixed(2) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')',
      'font-size': size, 'font-weight': o.weight || 700, fill: o.fill || C.INK, 'text-anchor': o.anchor || 'end',
      style: 'paint-order:stroke;stroke:' + C.PAPER + ';stroke-width:3px;stroke-linejoin:round',
    });
    rich(text, s, size);
    return text;
  }

  // Axes, floor ticks and value→pixel maps. Domains start at 0 unless
  // m.xMin / m.yMin say otherwise.
  function frame(p, W, H, m, xMax, yMax) {
    var X0 = m.l, X1 = W - m.r, TOP = m.t, BASE = H - m.b, xMin = m.xMin || 0, yMin = m.yMin || 0;
    var x = function (k) { return X0 + ((k - xMin) / (xMax - xMin)) * (X1 - X0); };
    var y = function (v) { return BASE - ((v - yMin) / (yMax - yMin)) * (BASE - TOP); };
    el(p, 'line', { x1: X0, y1: BASE, x2: X1, y2: BASE, stroke: C.GRID, 'stroke-width': 0.9, class: 'fade' });
    el(p, 'line', { x1: X0, y1: BASE, x2: X0, y2: TOP - 6, stroke: C.GRID, 'stroke-width': 0.9, class: 'fade' });
    for (var tx = X0 + 12, i = 0; !m.noTicks && tx < X1 - 2; tx += 12, i++) {
      el(p, 'line', { x1: tx, y1: BASE, x2: tx, y2: BASE - 4, stroke: C.TICK, 'stroke-width': 0.6, class: 'fade', style: 'animation-delay:' + i * 0.006 + 's' });
    }
    return { X0: X0, X1: X1, TOP: TOP, BASE: BASE, W: W, H: H, x: x, y: y, xMin: xMin, xMax: xMax, yMin: yMin, yMax: yMax };
  }

  // Axis names: y above the axis top, x under the right end of the axis.
  function axes(p, F, xName, yName) {
    label(p, F.X1, F.H - 6, xName, { size: 10, weight: 600, fill: C.MUTED, anchor: 'end', ls: '.02em' });
    label(p, F.X0 - 4, F.TOP - 13, yName, { size: 10, weight: 600, fill: C.MUTED });
  }

  // Sample f over [from, to], keeping only the part inside the plot.
  function points(F, f, from, to, n) {
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var k = from + ((to - from) * i) / n, v = f(k);
      if (v > F.yMax) { if (pts.length) break; continue; }
      pts.push([F.x(k), F.y(v)]);
    }
    return pts;
  }
  var d = function (pts) { return 'M' + pts.map(function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join(' L'); };

  function curve(p, F, f, from, to, o) {
    o = o || {};
    return el(p, 'path', {
      d: d(points(F, f, from, to, 160)), fill: 'none', stroke: o.stroke || C.INK, 'stroke-width': o.width || 1.5,
      'stroke-linejoin': 'round', 'stroke-linecap': 'round', pathLength: 1,
      class: 'draw', style: 'animation-duration:' + (o.dur || 1.15) + 's;animation-delay:' + (o.delay || 0) + 's',
    });
  }

  // Sparse beads along a curve, one every `gap` pixels of x.
  function beads(p, F, f, from, to, o) {
    o = o || {};
    var gap = o.gap || 26, i = 0;
    for (var px = F.x(from); px <= F.x(to) + 0.5; px += gap, i++) {
      var k = F.xMin + ((px - F.X0) / (F.X1 - F.X0)) * (F.xMax - F.xMin), v = f(k);
      if (v > F.yMax) continue;
      // Leave room around highlighted points so beads don't crowd them.
      if ((o.avoid || []).some(function (ak) { return Math.abs(F.x(ak) - px) < 9; })) continue;
      el(p, 'circle', { cx: px, cy: F.y(v), r: o.r || 1.6, fill: o.fill || C.INK, class: 'pop', style: 'animation-delay:' + (0.15 + i * 0.03) + 's' });
    }
  }

  function guide(p, x1, y1, x2, y2, delay) {
    el(p, 'line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: C.FAINT, 'stroke-width': 0.9, 'stroke-dasharray': '3 3', class: 'fade', style: 'animation-delay:' + (delay || 0) + 's' });
  }

  // A tip is shown by chart-fx.js on hover or tap.
  function dot(p, x, y, r, fill, delay, tip) {
    return el(p, 'circle', { cx: x, cy: y, r: r, fill: fill || C.INK, class: 'pop', style: 'animation-delay:' + (delay || 0) + 's', 'data-tip': tip });
  }

  /*
   * Hover readout for function curves: a guide at the pointer's x, a ring on
   * each series and their values in chart-fx's tooltip. Call it last, so its
   * hit area sits on top. series: [{ name, f, from, to, stroke }];
   * o: { xName, fmt }.
   */
  function probe(p, F, series, o) {
    o = o || {};
    var fmt = o.fmt || function (v) { return v.toFixed(2); };
    var g = el(p, 'g', { class: 'fx-guide', visibility: 'hidden' });
    var rule = el(g, 'line', { y1: F.TOP - 6, y2: F.BASE, stroke: C.INK, 'stroke-width': 0.8, 'stroke-dasharray': '2 3' });
    var rings = series.map(function (s) { return el(g, 'circle', { r: 3.6, fill: C.PAPER, stroke: s.stroke || C.INK, 'stroke-width': 1.7 }); });
    var hit = el(p, 'rect', { x: F.X0, y: F.TOP - 6, width: F.X1 - F.X0, height: F.BASE - F.TOP + 6, fill: 'transparent', 'data-probe': '' });
    hit.__fxProbe = {
      move: function (e) {
        var svg = root(p), box = svg.getBoundingClientRect(), scale = box.width / svg.viewBox.baseVal.width;
        var px = (e.clientX - box.left) / scale;
        if (px < F.X0 || px > F.X1) { this.leave(); return null; }
        var k = F.xMin + ((px - F.X0) / (F.X1 - F.X0)) * (F.xMax - F.xMin), top = F.BASE, rows = [];
        rule.setAttribute('x1', px); rule.setAttribute('x2', px);
        series.forEach(function (s, i) {
          var v = k >= (s.from == null ? F.xMin : s.from) && k <= (s.to == null ? F.xMax : s.to) ? s.f(k) : NaN;
          var shown = isFinite(v) && v <= F.yMax && v >= F.yMin;
          rings[i].setAttribute('visibility', shown ? 'visible' : 'hidden');
          if (!shown) return;
          rings[i].setAttribute('cx', px); rings[i].setAttribute('cy', F.y(v));
          top = Math.min(top, F.y(v));
          rows.push(T(s.name) + ' = ' + fmt(v));
        });
        g.setAttribute('visibility', 'visible');
        return { text: (o.xName || 'k') + ' = ' + fmt(k) + '\n' + rows.join('\n'), x: box.left + px * scale, y: box.top + (top - 8) * scale, bottom: box.top + (top + 8) * scale };
      },
      leave: function () { g.setAttribute('visibility', 'hidden'); },
    };
    return hit;
  }

  // Straight or polyline arrow; the head sits on the last point.
  function arrow(p, pts, o) {
    o = o || {};
    var stroke = o.stroke || C.INK, w = o.width || 1.3, head = o.head || 6;
    var g = el(p, 'g', { class: 'fade', style: 'animation-delay:' + (o.delay || 0) + 's' });
    el(g, 'path', { d: d(pts), fill: 'none', stroke: stroke, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    var a = pts[pts.length - 1], b = pts[pts.length - 2], ang = Math.atan2(a[1] - b[1], a[0] - b[0]);
    el(g, 'path', {
      d: 'M' + (a[0] - head * Math.cos(ang - 0.45)) + ' ' + (a[1] - head * Math.sin(ang - 0.45)) + ' L' + a[0] + ' ' + a[1] +
        ' L' + (a[0] - head * Math.cos(ang + 0.45)) + ' ' + (a[1] - head * Math.sin(ang + 0.45)),
      fill: 'none', stroke: stroke, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
    });
  }

  function fit() {
    var card = document.querySelector('.card');
    if (card && parent !== window) parent.postMessage({ chartHeight: card.scrollHeight }, location.origin);
  }

  /*
   * Draw `draw(svg, W, H)` into an SVG at its real width. The first draw
   * waits until the chart scrolls into view; a click replays it.
   */
  function mount(svg, draw, height) {
    var W = 0, shown = false;
    var size = function () {
      W = Math.round(svg.getBoundingClientRect().width) || 300;
      var H = Math.round(height(W));
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      return H;
    };
    var render = function (animate) {
      var H = size();
      svg.innerHTML = '';
      svg.classList.toggle('still', !animate);
      draw(svg, W, H);
      fit();
    };
    size();
    var first = function () { if (!shown) { shown = true; render(true); } };
    if (window.chartFx) chartFx.onView(svg, first);
    else {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); first(); } }, { threshold: 0.2 });
      io.observe(svg);
    }
    svg.style.cursor = 'pointer';
    svg.addEventListener('click', function () { shown = true; render(true); });
    window.addEventListener('resize', function () {
      if (Math.round(svg.getBoundingClientRect().width) === W) return;
      if (shown) render(false); else { size(); fit(); }
    });
    if (document.fonts) document.fonts.ready.then(function () { if (shown) render(false); fit(); });
  }

  // Fill an element with translated text, marking up formula fragments.
  function html(selector, key, swaps) {
    var node = document.querySelector(selector);
    var s = T(key).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    (swaps || []).forEach(function (sw) { s = s.split(sw[0]).join(sw[1]); });
    node.innerHTML = s;
  }

  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  if (document.fonts) document.fonts.ready.then(fit);

  window.curveKit = {
    C: C, T: T, el: el, label: label, along: along, frame: frame, axes: axes, curve: curve, beads: beads,
    guide: guide, dot: dot, arrow: arrow, points: points, probe: probe, mount: mount, html: html, fit: fit,
  };
})();
