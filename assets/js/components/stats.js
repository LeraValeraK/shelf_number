/* Shelf Number — "Reading the records".
   Two donuts, two bar charts and the fifteen most widely dispersed titles.
   Everything is recomputed from BOOKS/LIBS, so the section always agrees with
   whatever the tables currently say. */

import { esc } from '../lib/dom.js';

const PIE = ['#3f6699', '#263337', '#8c9599', '#8aa6c6', '#274a72', '#cbd2d1', '#a9b1b4', '#7a8a8f'];

function donut(el, items) {
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  const R = 54, r = 32, cx = 62, cy = 62;
  let a0 = -Math.PI / 2;
  const paths = items.map(it => {
    const frac = it.value / total;
    let a1 = a0 + frac * 2 * Math.PI;
    if (frac >= 0.9999) a1 = a0 + 2 * Math.PI - 0.0001;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    const xi1 = cx + r * Math.cos(a1), yi1 = cy + r * Math.sin(a1);
    const xi0 = cx + r * Math.cos(a0), yi0 = cy + r * Math.sin(a0);
    const large = frac > 0.5 ? 1 : 0;
    a0 = a1;
    return `<path d="M${x0.toFixed(2)} ${y0.toFixed(2)} A${R} ${R} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} L${xi1.toFixed(2)} ${yi1.toFixed(2)} A${r} ${r} 0 ${large} 0 ${xi0.toFixed(2)} ${yi0.toFixed(2)} Z" fill="${it.color}"></path>`;
  }).join('');
  el.innerHTML = `<svg viewBox="0 0 124 124" width="128" height="128" role="img">${paths}</svg>`;
}

/* light steel -> deep navy, so the tallest bar is also the darkest */
function barColor(frac) {
  const a = [176, 199, 222], b = [30, 58, 92];
  const f = Math.max(0, Math.min(1, frac));
  const m = k => Math.round(a[k] + (b[k] - a[k]) * f);
  return `rgb(${m(0)},${m(1)},${m(2)})`;
}

function legend(el, items) {
  const total = items.reduce((s, i) => s + i.value, 0) || 1;
  el.innerHTML = items.map(it =>
    `<li><span class="sw" style="background:${it.color}"></span><span class="lg-l">${esc(it.label)}</span>` +
    `<span class="lg-v">${Math.round(it.value / total * 100)}%</span></li>`
  ).join('');
}

const REACH_BANDS = [
  ['1 library', 1, 1], ['2–5', 2, 5], ['6–10', 6, 10], ['11–20', 11, 20], ['21–30', 21, 30],
  ['31–50', 31, 50], ['51–75', 51, 75], ['76–100', 76, 100], ['101–200', 101, 200], ['200+', 201, 1e9]
];

export function mount({ BOOKS, LIBS, S, bookLibs }) {
  /* 1) libraries by kind */
  const typeItems = S.by_type.map((t, i) => ({ label: t[0], value: t[1], color: PIE[i % PIE.length] }));
  donut(document.getElementById('pieType'), typeItems);
  legend(document.getElementById('legType'), typeItems);

  /* 2) titles located vs still unlocated */
  const found = S.n_books, notFound = Math.max(0, S.n_books_total - S.n_books);
  const foundItems = [
    { label: 'Found in a library', value: found, color: '#3f6699' },
    { label: 'Not yet located', value: notFound, color: '#d9d5cd' }
  ];
  donut(document.getElementById('pieFound'), foundItems);
  legend(document.getElementById('legFound'), foundItems);

  /* how far each title travelled */
  const reachArr = BOOKS.map((b, bi) => ({
    bi,
    to: b.to || b.te || 'Untitled',
    au: b.au,
    n: bookLibs[bi].length,
    nc: new Set(bookLibs[bi].map(li => LIBS[li].country)).size
  }));

  /* 3) histogram of holding-library counts */
  const reachRows = REACH_BANDS.map(([label, lo, hi]) =>
    [label, reachArr.filter(x => x.n >= lo && x.n <= hi).length]);
  const rMax = Math.max(...reachRows.map(r => r[1]), 1), rN = reachRows.length;
  const rRank = [];
  reachRows.map((r, i) => i)
    .sort((a, b) => reachRows[b][1] - reachRows[a][1])
    .forEach((idx, rank) => { rRank[idx] = rank; });
  document.getElementById('reach').innerHTML = reachRows.map((r, i) =>
    `<li><span class="bl">${esc(r[0])}</span><span class="bt"><i style="width:${(r[1] / rMax * 100).toFixed(1)}%;background:${barColor(1 - rRank[i] / Math.max(1, rN - 1))}"></i></span><span class="bv">${r[1]}</span></li>`
  ).join('');

  /* 4) authors by reach — average libraries per title, authors with 3+ titles */
  const authAgg = {};
  BOOKS.forEach((b, bi) => {
    const reach = bookLibs[bi].length;
    if (!reach) return;
    (b.au || '').split(',').map(s => s.trim()).filter(Boolean).forEach(a => {
      (authAgg[a] = authAgg[a] || { n: 0, sum: 0 });
      authAgg[a].n++; authAgg[a].sum += reach;
    });
  });
  const authRows = Object.entries(authAgg).filter(([, v]) => v.n >= 3)
    .map(([a, v]) => [a, v.sum / v.n]).sort((x, y) => y[1] - x[1]).slice(0, 10);
  const aMax = Math.max(...authRows.map(r => r[1]), 1), aN = authRows.length;
  document.getElementById('authReach').innerHTML = authRows.map((r, i) =>
    `<li><span class="bl" title="${esc(r[0])}">${esc(r[0])}</span><span class="bt"><i style="width:${(r[1] / aMax * 100).toFixed(1)}%;background:${barColor(1 - i / Math.max(1, aN - 1))}"></i></span><span class="bv">${Math.round(r[1])}</span></li>`
  ).join('');

  /* 5) the fifteen most widely dispersed titles */
  const top15 = reachArr.slice().sort((a, b) => b.n - a.n).slice(0, 15);
  document.getElementById('topTitles').innerHTML = top15.map((t, i) => {
    const b = BOOKS[t.bi];
    const first = esc((b.te || b.to || '?').slice(0, 1));
    const cover = b.cover
      ? `<img class="dc-cover" src="${esc(b.cover)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="dc-cover noimg" style="display:none">${first}</div>`
      : `<div class="dc-cover noimg">${first}</div>`;
    return `<a class="disp-card" data-nav="book" data-bi="${t.bi}" href="#book-${t.bi}">
    <div class="dc-top"><span class="dc-rank">#${i + 1}</span><span class="dc-n">${t.n} librar${t.n != 1 ? 'ies' : 'y'}</span></div>
    <div class="dc-coverwrap">${cover}</div>
    <div class="dc-title">${esc(b.te || b.to || 'Untitled')}</div>
    ${b.au ? `<div class="dc-au">${esc(b.au)}</div>` : ''}
  </a>`;
  }).join('');
}
