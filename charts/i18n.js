/*
 * Chart translations. Notes embed a chart as `chart.html?lang=zh|ja|fr`.
 * A chart loads this file and registers its own strings before its render
 * script runs:
 *
 *   chartI18n.use({ zh: { 'English text': '译文' }, ja: {…}, fr: {…} }, {
 *     patterns: { zh: [[/^Lag (\d+): (.+)$/, '滞后 $1：$2']] },  // templated text
 *     html: { zh: { 'Full text of an element with inline markup': '<b>…</b>…' } },
 *   });
 *
 * Text nodes, aria-labels and later re-renders are translated in place, so
 * render code stays unchanged; code that builds labels for a canvas library
 * can call chartI18n.t(text) directly. Without ?lang (English) nothing runs.
 */
(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  var text = {}, patterns = [], html = {};
  var has = function (map, key) { return Object.prototype.hasOwnProperty.call(map, key); };

  function t(value) {
    if (typeof value !== 'string') return value;
    var key = value.trim();
    if (!key) return value;
    if (has(text, key)) return value.replace(key, text[key]);
    for (var i = 0; i < patterns.length; i++) {
      var re = patterns[i][0], out = patterns[i][1];
      if (re.test(key)) {
        var next = typeof out === 'function'
          ? key.replace(re, function () { return out.apply(null, [t].concat([].slice.call(arguments, 1))); })
          : key.replace(re, out);
        return value.replace(key, next);
      }
    }
    return value;
  }

  function visit(node) {
    if (node.nodeType === 3) {
      var next = t(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== 1 || node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') return;
    var label = node.getAttribute('aria-label');
    if (label) {
      var nextLabel = t(label);
      if (nextLabel !== label) node.setAttribute('aria-label', nextLabel);
    }
    var whole = node.textContent.replace(/\s+/g, ' ').trim();
    if (whole && has(html, whole)) { node.innerHTML = html[whole]; return; }
    for (var child = node.firstChild; child; child = child.nextSibling) visit(child);
  }

  var CJK_FONTS = {
    zh: "'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Microsoft YaHei'",
    ja: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans CJK JP', 'Yu Gothic'",
  };

  window.chartI18n = {
    lang: lang,
    t: t,
    use: function (strings, options) {
      options = options || {};
      text = (strings && strings[lang]) || {};
      patterns = (options.patterns && options.patterns[lang]) || [];
      html = (options.html && options.html[lang]) || {};
      if (!strings || !strings[lang]) return;

      document.documentElement.lang = lang;
      document.title = t(document.title);
      if (CJK_FONTS[lang]) {
        var style = document.createElement('style');
        style.textContent = 'body, body * { font-family: Inter, ' + CJK_FONTS[lang] + ', sans-serif !important; }'
          + ' h1, h2 { letter-spacing: 0 !important; }';
        document.head.appendChild(style);
      }

      visit(document.body);
      new MutationObserver(function (records) {
        records.forEach(function (record) {
          if (record.type === 'characterData') visit(record.target);
          else if (record.type === 'attributes') visit(record.target);
          else record.addedNodes.forEach(visit);
        });
      }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['aria-label'] });
    },
  };
})();
