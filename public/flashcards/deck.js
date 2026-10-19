/* Shared flashcard deck. A deck page defines its CARDS ({ id, topic, front, back, gap })
   and calls flashDeck({ key, source, gapLabel, cards }). Ratings are remembered per
   browser under "flash:<key>"; the page is told the deck's height after every change.

   Translations: a deck framed by a /zh/, /jp/ or /fr/ page (or opened with ?lang=zh|ja|fr)
   loads i18n/<deck file name>.js, which calls deckI18n({ source, gapLabel, cards }) with
   per-language text keyed by card id: cards: { id: { zh: { topic, front, back, gap }, … } }.
   Missing fields fall back to English. Marks are keyed by card id, so they are shared
   across languages. */
(function () {
  const LANG = (() => {
    const q = new URLSearchParams(location.search).get('lang');
    if (q) return q;
    try {
      const m = window.parent !== window && window.parent.location.pathname.match(/^\/(zh|jp|fr)\//);
      if (m) return m[1] === 'jp' ? 'ja' : m[1];
    } catch { /* cross-origin frame */ }
    return 'en';
  })();
  const UI = {
    zh: { q: '问', a: '答', show: '点击或按空格键查看答案', showTouch: '点按查看答案', keys: '1 再来一次，留在本卡 · 2 记住了，下一张', backTouch: '点按再看问题', ticks: '本组卡片', done: '本轮完成。', got: '记住了', again: '再来一次', reveal: '显示答案', restart: '重新开始', prev: '上一张', next: '下一张（最后一张之后是本轮小结）', review: (n) => `复习 ${n} 张再来一次的卡片`, card: (k) => `第 ${k} 张`, cards: (n) => `${n} 张卡片`, reviewing: '复习 · ', gotN: (n) => `${n} 张记住了`, againN: (n) => `${n} 张再来一次`, againBack: '标记为再来一次的卡片会在更短的一轮中再次出现。', allGot: '所有卡片都已标记为记住了。', unrated: (n) => `还有 ${n} 张未评分。`, stay: '你的标记保存在本浏览器中。', ansShow: '正在显示答案。按下可查看问题。', qShow: '正在显示问题。按下可查看答案。', gap: '薄弱点', flash: '闪卡' },
    ja: { q: '問', a: '答', show: 'クリックまたはスペースキーで答えを表示', showTouch: 'タップして答えを表示', keys: '1 もう一度（このカードのまま）· 2 覚えた（次のカードへ）', backTouch: 'タップして問題に戻る', ticks: 'このデッキのカード', done: 'ラウンド終了。', got: '覚えた', again: 'もう一度', reveal: '答えを表示', restart: '最初から', prev: '前のカード', next: '次のカード（最後のカードの後はラウンドのまとめ）', review: (n) => `「もう一度」の ${n} 枚を復習`, card: (k) => `カード ${k}`, cards: (n) => `${n} 枚`, reviewing: '復習 · ', gotN: (n) => `覚えた ${n}`, againN: (n) => `もう一度 ${n}`, againBack: '「もう一度」のカードは短いラウンドで再び出てきます。', allGot: 'すべてのカードが「覚えた」になりました。', unrated: (n) => `未評価が ${n} 枚あります。`, stay: '評価はこのブラウザに保存されます。', ansShow: '答えを表示中。押すと問題に戻ります。', qShow: '問題を表示中。押すと答えを表示します。', gap: '弱点', flash: 'フラッシュカード' },
    fr: { q: 'Q', a: 'R', show: 'Cliquez ou appuyez sur Espace pour voir la réponse', showTouch: 'Touchez pour voir la réponse', keys: '1 à revoir, rester sur cette carte · 2 acquis, carte suivante', backTouch: 'Touchez pour revoir la question', ticks: 'Cartes de ce paquet', done: 'Tour terminé.', got: 'acquis', again: 'à revoir', reveal: 'Voir la réponse', restart: 'Recommencer', prev: 'Carte précédente', next: 'Carte suivante (après la dernière, le bilan du tour)', review: (n) => `Revoir les ${n} cartes à revoir`, card: (k) => `Carte ${k}`, cards: (n) => `${n} cartes`, reviewing: 'Révision · ', gotN: (n) => `${n} acquises`, againN: (n) => `${n} à revoir`, againBack: 'Les cartes à revoir reviennent dans un tour plus court.', allGot: 'Toutes les cartes sont acquises.', unrated: (n) => `${n} pas encore notées.`, stay: 'Vos notes restent dans ce navigateur.', ansShow: 'Réponse affichée. Appuyez pour voir la question.', qShow: 'Question affichée. Appuyez pour voir la réponse.', gap: 'Lacune', flash: 'Fiches' },
  };
  const EN = { q: 'Q', a: 'A', show: 'Click or press Space to see the answer', showTouch: 'Tap to see the answer', keys: '1 again, stay on this card · 2 got it, next card', backTouch: 'Tap to see the question again', ticks: 'Cards in this deck', done: 'Round complete.', got: 'got it', again: 'again', reveal: 'Show answer', restart: 'Start over', prev: 'Previous card', next: 'Next card (after the last card, the round summary)', review: (n) => `Review ${n} again`, card: (k) => `Card ${k}`, cards: (n) => `${n} cards`, reviewing: 'Review · ', gotN: (n) => `${n} got it`, againN: (n) => `${n} again`, againBack: 'Cards marked again come back in a shorter round.', allGot: 'Every card is marked got it.', unrated: (n) => `${n} not rated yet.`, stay: 'Your marks stay in this browser.', ansShow: 'Answer showing. Press to see the question.', qShow: 'Question showing. Press to see the answer.', gap: 'Gap', flash: 'flash' };
  const L = UI[LANG] || EN;
  let I18N = null;
  window.deckI18n = (data) => { I18N = data; };
  if (UI[LANG]) {
    document.documentElement.lang = LANG;
    const file = location.pathname.split('/').pop().replace(/\.html$/, '');
    // Parser-blocking on purpose: the deck page calls flashDeck() right after, and needs the text.
    if (document.readyState === 'loading') document.write(`<script src="i18n/${file}.js"><\/script>`);
    if (LANG === 'zh' || LANG === 'ja') {
      const fonts = LANG === 'zh' ? "'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Microsoft YaHei'" : "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans CJK JP', 'Yu Gothic'";
      document.write(`<style>body, body * { font-family: Inter, ${fonts}, sans-serif; }</style>`);
    }
  }
  const ARROW = (d) => `<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const KATEX = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    throwOnError: false,
  };
  // Follow the site's light/dark switch (the .dark class on the embedding page);
  // a deck opened on its own follows the system setting.
  const host = (() => { try { return window.parent !== window && window.parent.document.documentElement; } catch { return null; } })();
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const syncTheme = () => document.documentElement.classList.toggle('dark', host ? host.classList.contains('dark') : system.matches);
  syncTheme();
  if (host) new MutationObserver(syncTheme).observe(host, { attributes: true, attributeFilter: ['class'] });
  else system.addEventListener('change', syncTheme);

  const typeset = (node) => window.renderMathInElement && renderMathInElement(node, KATEX);
  const load = (k) => { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

  const faces = (gapLabel) => `
    <section class="face front">
      <div class="kicker"><span class="side">${L.q}</span><span class="topic"></span></div>
      <div class="q"></div>
      <div class="hint"><span class="keys">${L.show}</span><span class="touch">${L.showTouch}</span></div>
    </section>
    <section class="face back">
      <div class="kicker"><span class="side">${L.a}</span><span class="topic"></span></div>
      <div class="a"></div>
      <div class="gap"><span class="gap-label">${gapLabel}</span><span class="gap-text"></span></div>
      <div class="hint"><span class="keys">${L.keys}</span><span class="touch">${L.backTouch}</span></div>
    </section>`;

  const fill = (root, c) => {
    root.querySelectorAll('.topic').forEach((t) => { t.textContent = c.topic; });
    root.querySelector('.q').innerHTML = c.front;
    root.querySelector('.a').innerHTML = c.back;
    root.querySelector('.gap-text').innerHTML = c.gap || '';
    root.querySelector('.gap').hidden = !c.gap;
    typeset(root);
  };

  window.flashDeck = function ({ key, source, gapLabel = 'Gap', cards }) {
    if (I18N) {
      const pick = (v) => (v && typeof v === 'object' ? v[LANG] : undefined);
      source = pick(I18N.source) || source;
      gapLabel = pick(I18N.gapLabel) || (gapLabel === 'Gap' ? L.gap : gapLabel);
      cards = cards.map((c) => ({ ...c, ...((I18N.cards && I18N.cards[c.id] && I18N.cards[c.id][LANG]) || {}) }));
    } else if (UI[LANG] && gapLabel === 'Gap') gapLabel = L.gap;
    const KEY = `flash:${key}`;
    const marks = load(KEY);
    const all = cards.map((_, k) => k);
    let queue = all, pos = Math.max(0, cards.findIndex((c) => marks[c.id] !== 'got'));
    let flipped = false;

    const deck = document.createElement('main');
    deck.className = 'deck';
    deck.innerHTML = `
      <div class="top">
        <ol class="ticks" aria-label="${L.ticks}"></ol>
        <span class="status" aria-live="polite"></span>
      </div>
      <div class="stage">
        <div class="card" role="button" tabindex="0">${faces(gapLabel)}</div>
        <section class="done" hidden>
          <h3>${L.done}</h3>
          <p></p>
          <div class="tally"><div class="got"><b></b><span>${L.got}</span></div><div class="again"><b></b><span>${L.again}</span></div></div>
        </section>
      </div>
      <div class="controls">
        <button type="button" class="nav prev" aria-label="${L.prev}">${ARROW('M10 3 5 8l5 5')}</button>
        <div class="mid">
          <button type="button" class="btn reveal">${L.reveal}</button>
          <button type="button" class="btn again" hidden>${L === EN ? 'Again' : L.again}<kbd>1</kbd></button>
          <button type="button" class="btn primary got" hidden>${L === EN ? 'Got it' : L.got}<kbd>2</kbd></button>
          <button type="button" class="btn primary review" hidden></button>
          <button type="button" class="btn restart" hidden>${L.restart}</button>
        </div>
        <button type="button" class="nav next" aria-label="${L.next}">${ARROW('M6 3l5 5-5 5')}</button>
      </div>
      <div class="src">Lieflat ${L.flash} · ${source}</div>`;
    document.body.prepend(deck);

    const $ = (s) => deck.querySelector(s);
    const card = $('.card'), stage = $('.stage'), done = $('.done');
    const front = $('.front'), back = $('.back'), status = $('.status');
    const btn = {
      prev: $('.prev'), next: $('.next'), reveal: $('.reveal'), again: $('.mid .again'), got: $('.mid .got'),
      review: $('.review'), restart: $('.restart'),
    };

    // One tick per card; a click jumps straight to that card.
    const ticks = cards.map((c, k) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'tick';
      b.addEventListener('click', () => { queue = all; show(k); });
      li.append(b);
      $('.ticks').append(li);
      return b;
    });

    // Every card gets the height of the tallest one, so the buttons never move under the cursor.
    const probe = document.createElement('div');
    probe.className = 'card';
    probe.setAttribute('aria-hidden', 'true');
    probe.style.cssText = 'position:absolute;left:0;right:0;top:0;visibility:hidden;pointer-events:none;min-height:0;transition:none';
    probe.innerHTML = faces(gapLabel);
    stage.append(probe);
    let lastWidth = 0;
    const measure = () => {
      if (stage.clientWidth === lastWidth) return;
      lastWidth = stage.clientWidth;
      probe.hidden = false;
      const tallest = Math.max(...cards.map((c) => { fill(probe, c); return probe.offsetHeight; }));
      probe.hidden = true;
      deck.style.setProperty('--h', `${tallest}px`);
    };

    const report = () => {
      if (parent !== window) parent.postMessage({ chartHeight: Math.ceil(document.body.getBoundingClientRect().height) }, location.origin);
    };

    const tally = () => cards.reduce((t, c) => { if (marks[c.id]) t[marks[c.id]]++; return t; }, { got: 0, again: 0 });

    const paint = () => {
      const current = done.hidden ? queue[pos] : -1;
      ticks.forEach((b, k) => {
        const m = marks[cards[k].id];
        b.className = `tick${m ? ` ${m}` : ''}${k === current ? ' on' : ''}`;
        b.setAttribute('aria-label', `${L.card(k + 1)}${m === 'got' ? `, ${L.got}` : m === 'again' ? `, ${L.again}` : ''}`);
        if (k === current) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      });
      const t = tally();
      const where = done.hidden ? `${queue === all ? '' : L.reviewing}<b>${pos + 1}</b> / ${queue.length}` : L.cards(cards.length);
      const marked = [t.got && L.gotN(t.got), t.again && L.againN(t.again)].filter(Boolean);
      status.innerHTML = [where, ...marked].join(' · ');
    };

    const setFlip = (on) => {
      flipped = on;
      card.classList.toggle('flipped', on);
      card.setAttribute('aria-label', on ? L.ansShow : L.qShow);
      front.setAttribute('aria-hidden', String(on));
      back.setAttribute('aria-hidden', String(!on));
      btn.reveal.hidden = on;
      btn.again.hidden = btn.got.hidden = !on;
      btn.review.hidden = btn.restart.hidden = true;
      report();
    };

    function show(p) {
      pos = p;
      done.hidden = true;
      card.hidden = false;
      fill(card, cards[queue[pos]]);
      // Turn back to the question without animating, so the next answer never shows mid-turn.
      card.classList.add('instant');
      setFlip(false);
      void card.offsetWidth;
      card.classList.remove('instant', 'enter');
      void card.offsetWidth;
      card.classList.add('enter');
      stage.dataset.left = Math.min(2, queue.length - pos - 1);
      btn.prev.disabled = pos === 0;
      btn.next.disabled = false;
      paint();
    }

    const finish = () => {
      const t = tally();
      card.hidden = true;
      done.hidden = false;
      stage.dataset.left = 0;
      // The round's next steps take the rating buttons' place, so nothing below moves.
      btn.reveal.hidden = btn.again.hidden = btn.got.hidden = true;
      btn.restart.hidden = false;
      btn.prev.disabled = false;
      btn.next.disabled = true;
      const unrated = cards.length - t.got - t.again;
      $('.done p').textContent = [
        t.again ? L.againBack : unrated ? '' : L.allGot,
        unrated ? L.unrated(unrated) : '',
        L.stay,
      ].filter(Boolean).join(' ');
      $('.tally .got b').textContent = t.got;
      $('.tally .again b').textContent = t.again;
      btn.review.hidden = !t.again;
      btn.review.textContent = L.review(t.again);
      btn.restart.classList.toggle('primary', !t.again);
      paint();
      report();
    };

    const rate = (m) => {
      if (!flipped || card.hidden) return;
      marks[cards[queue[pos]].id] = m;
      save(KEY, marks);
      // Again keeps you on this card, back on its question; only Got it moves on.
      if (m === 'again') show(pos);
      else if (pos < queue.length - 1) show(pos + 1);
      else finish();
    };
    const move = (d) => {
      if (card.hidden) { if (d < 0) show(queue.length - 1); return; }
      if (pos + d >= queue.length) finish();
      else if (pos + d >= 0) show(pos + d);
    };

    card.addEventListener('click', () => setFlip(!flipped));
    btn.reveal.addEventListener('click', () => setFlip(true));
    btn.again.addEventListener('click', () => rate('again'));
    btn.got.addEventListener('click', () => rate('got'));
    btn.prev.addEventListener('click', () => move(-1));
    btn.next.addEventListener('click', () => move(1));
    btn.review.addEventListener('click', () => { queue = all.filter((k) => marks[cards[k].id] === 'again'); show(0); });
    btn.restart.addEventListener('click', () => {
      cards.forEach((c) => delete marks[c.id]);
      save(KEY, marks);
      queue = all;
      show(0);
    });
    document.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const onButton = e.target.closest && e.target.closest('button');
      if ((e.key === ' ' || e.key === 'Enter') && !onButton && !card.hidden) { e.preventDefault(); setFlip(!flipped); }
      else if (e.key === 'ArrowLeft') move(-1);
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === '1') rate('again');
      else if (e.key === '2') rate('got');
    });

    const remeasure = () => { lastWidth = 0; measure(); report(); };
    new ResizeObserver(() => { measure(); report(); }).observe(deck);
    document.fonts && document.fonts.ready.then(remeasure);
    window.addEventListener('load', remeasure);
    measure();
    show(pos);
  };
})();
