/* Shared flashcard deck. A deck page defines its CARDS ({ id, topic, front, back, gap })
   and calls flashDeck({ key, source, gapLabel, cards }). Ratings are remembered per
   browser under "flash:<key>"; the page is told the deck's height after every change. */
(function () {
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
      <div class="kicker"><span class="side">Q</span><span class="topic"></span></div>
      <div class="q"></div>
      <div class="hint"><span class="keys">Click or press Space to see the answer</span><span class="touch">Tap to see the answer</span></div>
    </section>
    <section class="face back">
      <div class="kicker"><span class="side">A</span><span class="topic"></span></div>
      <div class="a"></div>
      <div class="gap"><span class="gap-label">${gapLabel}</span><span class="gap-text"></span></div>
      <div class="hint"><span class="keys">1 again, stay on this card · 2 got it, next card</span><span class="touch">Tap to see the question again</span></div>
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
    const KEY = `flash:${key}`;
    const marks = load(KEY);
    const all = cards.map((_, k) => k);
    let queue = all, pos = Math.max(0, cards.findIndex((c) => marks[c.id] !== 'got'));
    let flipped = false;

    const deck = document.createElement('main');
    deck.className = 'deck';
    deck.innerHTML = `
      <div class="top">
        <ol class="ticks" aria-label="Cards in this deck"></ol>
        <span class="status" aria-live="polite"></span>
      </div>
      <div class="stage">
        <div class="card" role="button" tabindex="0">${faces(gapLabel)}</div>
        <section class="done" hidden>
          <h3>Round complete.</h3>
          <p></p>
          <div class="tally"><div class="got"><b></b><span>got it</span></div><div class="again"><b></b><span>again</span></div></div>
        </section>
      </div>
      <div class="controls">
        <button type="button" class="nav prev" aria-label="Previous card">${ARROW('M10 3 5 8l5 5')}</button>
        <div class="mid">
          <button type="button" class="btn reveal">Show answer</button>
          <button type="button" class="btn again" hidden>Again<kbd>1</kbd></button>
          <button type="button" class="btn primary got" hidden>Got it<kbd>2</kbd></button>
          <button type="button" class="btn primary review" hidden></button>
          <button type="button" class="btn restart" hidden>Start over</button>
        </div>
        <button type="button" class="nav next" aria-label="Next card (after the last card, the round summary)">${ARROW('M6 3l5 5-5 5')}</button>
      </div>
      <div class="src">Lieflat flash · ${source}</div>`;
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
        b.setAttribute('aria-label', `Card ${k + 1}${m === 'got' ? ', got it' : m === 'again' ? ', again' : ''}`);
        if (k === current) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      });
      const t = tally();
      const where = done.hidden ? `${queue === all ? '' : 'Review · '}<b>${pos + 1}</b> / ${queue.length}` : `${cards.length} cards`;
      const marked = [t.got && `${t.got} got it`, t.again && `${t.again} again`].filter(Boolean);
      status.innerHTML = [where, ...marked].join(' · ');
    };

    const setFlip = (on) => {
      flipped = on;
      card.classList.toggle('flipped', on);
      card.setAttribute('aria-label', on ? 'Answer showing. Press to see the question.' : 'Question showing. Press to see the answer.');
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
        t.again ? 'Cards marked again come back in a shorter round.' : unrated ? '' : 'Every card is marked got it.',
        unrated ? `${unrated} not rated yet.` : '',
        'Your marks stay in this browser.',
      ].filter(Boolean).join(' ');
      $('.tally .got b').textContent = t.got;
      $('.tally .again b').textContent = t.again;
      btn.review.hidden = !t.again;
      btn.review.textContent = `Review ${t.again} again`;
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
