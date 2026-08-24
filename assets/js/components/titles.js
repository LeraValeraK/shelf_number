/* Shelf Number — the titles page.
   Every located title, filterable by language, publisher, place of publication
   and year of publication. The filter lists are built once, on first visit. */

import { nf, checkedVals, optRow, enhanceSelect } from '../lib/dom.js';
import { bookCardHTML } from '../lib/cards.js';
import { UNKNOWN_PLACE } from '../config.js';

export function mount({ BOOKS, S, bookLibs }) {
  const grid = document.getElementById('titleGrid');
  const sub = document.getElementById('tSub');
  const tgLang = document.getElementById('tgLang');
  const tgPub = document.getElementById('tgPub');
  const tgPlace = document.getElementById('tgPlace');
  const tyMin = document.getElementById('tyMin'), tyMax = document.getElementById('tyMax');
  const tyMinN = document.getElementById('tyMinN'), tyMaxN = document.getElementById('tyMaxN');
  const tyFill = document.getElementById('tyFill');

  const LANGS = [...new Set(BOOKS.flatMap(b => b.lang || []))].sort((a, b) => a.localeCompare(b));
  const PUBS = [...new Set(BOOKS.map(b => b.pub).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const PLACES = [...new Set(BOOKS.map(b => b.plc || UNKNOWN_PLACE))]
    .sort((a, b) => a === UNKNOWN_PLACE ? 1 : b === UNKNOWN_PLACE ? -1 : a.localeCompare(b));

  let YMIN = Infinity, YMAX = -Infinity;
  BOOKS.forEach(b => {
    const y = +b.yr;
    if (y) { if (y < YMIN) YMIN = y; if (y > YMAX) YMAX = y; }
  });
  if (!isFinite(YMIN)) { YMIN = 0; YMAX = 0; }

  let yLo = YMIN, yHi = YMAX, built = false, query = '', sortMode = 'az';

  function buildFilters() {
    tgLang.innerHTML = LANGS.map(v => optRow(v, v)).join('');
    tgPub.innerHTML = PUBS.map(v => optRow(v, v)).join('');
    tgPlace.innerHTML = PLACES.map(v => optRow(v, v === UNKNOWN_PLACE ? 'Unidentified' : v)).join('');
    [tyMin, tyMax, tyMinN, tyMaxN].forEach(el => { el.min = YMIN; el.max = YMAX; });
    tyMin.value = tyMinN.value = yLo;
    tyMax.value = tyMaxN.value = yHi;
    paintYear();
  }

  function paintYear() {
    const span = Math.max(1, YMAX - YMIN);
    const a = (yLo - YMIN) / span * 100, b = (yHi - YMIN) / span * 100;
    tyFill.style.left = a + '%';
    tyFill.style.width = (b - a) + '%';
  }

  function clampYears() {
    if (yLo > yHi) { const t = yLo; yLo = yHi; yHi = t; }
    yLo = Math.max(YMIN, Math.min(yLo, YMAX));
    yHi = Math.max(YMIN, Math.min(yHi, YMAX));
    tyMin.value = tyMinN.value = yLo;
    tyMax.value = tyMaxN.value = yHi;
    paintYear();
  }

  function matches(bi) {
    const b = BOOKS[bi];
    const L = checkedVals(tgLang), P = checkedVals(tgPub), PL = checkedVals(tgPlace);
    if (L.length && !(b.lang || []).some(x => L.includes(x))) return false;
    if (P.length && !P.includes(b.pub)) return false;
    if (PL.length && !PL.includes(b.plc || UNKNOWN_PLACE)) return false;
    const y = +b.yr;
    if (y && (y < yLo || y > yHi)) return false;
    if (query) {
      const hay = [b.te, b.to, b.au, b.tr, b.ed].filter(Boolean).join(' \u0001 ').toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  }

  function render() {
    const titleOf = i => BOOKS[i].te || BOOKS[i].to || '';
    const held = i => (bookLibs[i] || []).length;
    const byTitle = (a, b) => titleOf(a).localeCompare(titleOf(b));
    const idx = BOOKS.map((b, i) => i).filter(matches);

    if (sortMode === 'za') idx.sort((a, b) => byTitle(b, a));
    else if (sortMode === 'holdasc') idx.sort((a, b) => (held(a) - held(b)) || byTitle(a, b));
    else if (sortMode === 'holddesc') idx.sort((a, b) => (held(b) - held(a)) || byTitle(a, b));
    else idx.sort(byTitle);

    grid.innerHTML = idx.map(bi => bookCardHTML(BOOKS[bi], bi)).join('')
      || `<p class="tempty">No titles match these filters.</p>`;

    const n = idx.length;
    sub.textContent = `${nf(n)} title${n != 1 ? 's' : ''}` + (n < S.n_books ? ` of ${nf(S.n_books)}` : '');
  }

  /* ---------- controls ---------- */
  tyMin.addEventListener('input', () => { yLo = +tyMin.value; clampYears(); render(); });
  tyMax.addEventListener('input', () => { yHi = +tyMax.value; clampYears(); render(); });
  tyMinN.addEventListener('change', () => { yLo = +tyMinN.value || YMIN; clampYears(); render(); });
  tyMaxN.addEventListener('change', () => { yHi = +tyMaxN.value || YMAX; clampYears(); render(); });

  const sel = document.getElementById('titleSort');
  if (sel) {
    enhanceSelect(sel);
    sel.addEventListener('change', () => { sortMode = sel.value; render(); });
  }

  document.querySelector('.tfilters').addEventListener('change', e => {
    if (e.target.matches('input[type=checkbox]')) render();
  });

  const tq = document.getElementById('tq');
  let deb;
  tq.addEventListener('input', () => {
    clearTimeout(deb);
    deb = setTimeout(() => { query = tq.value.trim().toLowerCase(); render(); }, 160);
  });
  tq.addEventListener('keydown', e => {
    if (e.key === 'Escape') { tq.value = ''; query = ''; render(); }
  });

  /* Called by nav.js each time the page is shown. */
  function show() {
    if (!built) { buildFilters(); built = true; }
    render();
  }

  return { show, render };
}
