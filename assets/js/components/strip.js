/* Shelf Number — the four-figure strip under the masthead. */

import { nf } from '../lib/dom.js';

export function mount({ S }) {
  const el = document.getElementById('strip');
  if (!el) return;
  const cells = [
    [nf(S.n_books_total), 'in Tamizdat Project archive', false],
    [nf(S.n_books),       'titles located',              true],
    [nf(S.n_libs),        'libraries',                   false],
    [nf(S.n_countries),   'countries',                   false]
  ];
  el.innerHTML = cells.map(d =>
    `<div class="cell${d[2] ? ' accent' : ''}"><div class="k">${d[0]}</div><div class="l">${d[1]}</div></div>`
  ).join('');
}
