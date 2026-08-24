/* Shelf Number — the libraries page.
   Three views share this one <main>: the directory grid, one library's shelf,
   and one title's holding libraries. Which is showing is decided by nav.js. */

import { esc, enhanceSelect } from '../lib/dom.js';
import { typeIcon, bookCardHTML } from '../lib/cards.js';
import { buildGroups } from './filters.js';

/* great-circle distance in km */
function kmBetween(aLat, aLon, bLat, bLon) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (bLat - aLat) * rad, dLon = (bLon - aLon) * rad;
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

export function mount(store) {
  const { LIBS, BOOKS, bookLibs } = store;

  const libF = buildGroups(
    store,
    document.getElementById('lgrpType'),
    document.getElementById('lgrpCountry'),
    document.getElementById('lgrpCity')
  );

  const libDir = document.getElementById('libDirectory');
  const libDetail = document.getElementById('libDetail');
  const libBook = document.getElementById('libBook');
  const lq = document.getElementById('lq');

  let sortMode = 'az';
  let userPos = null;   // {lat,lon} once the visitor allows it; never leaves the browser

  function sortNote(msg) {
    const el = document.getElementById('libSortNote');
    if (!el) return;
    el.hidden = !msg;
    el.textContent = msg || '';
  }

  /* ---------- directory ---------- */
  function renderDirectory() {
    const term = (lq.value || '').trim().toLowerCase();
    const list = LIBS.map((L, li) => li)
      .filter(li => libF.match(li) && (!term || LIBS[li].name.toLowerCase().includes(term)));

    const byName = (a, b) => LIBS[a].name.localeCompare(LIBS[b].name);
    const byHeld = (a, b) => LIBS[a].books.length - LIBS[b].books.length;
    const dist = li => userPos ? kmBetween(userPos.lat, userPos.lon, LIBS[li].lat, LIBS[li].lon) : 0;

    if (sortMode === 'near' && userPos) {
      list.sort((a, b) => { const d = dist(a) - dist(b); return Math.abs(d) < 1e-9 ? byName(a, b) : d; });
    } else if (sortMode === 'za') list.sort((a, b) => byName(b, a));
    else if (sortMode === 'holdasc') list.sort((a, b) => byHeld(a, b) || byName(a, b));
    else if (sortMode === 'holddesc') list.sort((a, b) => byHeld(b, a) || byName(a, b));
    else list.sort(byName);

    document.getElementById('libSub').textContent =
      `${list.length} librar${list.length != 1 ? 'ies' : 'y'}${term || hasFilters() ? ' matching your filters' : ''}`;

    libDir.innerHTML = list.map(li => {
      const L = LIBS[li];
      return `<a class="libcard" data-nav="library" data-li="${li}" href="#library-${li}">
      <div class="lc-top">${esc(L.tcat)}</div>
      <div class="lc-iconwrap">${typeIcon(L.tcat)}</div>
      <h3 class="lc-name">${esc(L.name)}</h3>
      <div class="lc-loc">${esc(L.loc)}</div>
    </a>`;
    }).join('') || `<p class="libempty">No libraries match these filters.</p>`;
  }

  const hasFilters = () => !!document.querySelector('.libfilters .fopts input:checked');

  /* ---------- one library's shelf ---------- */
  function renderDetail(li) {
    const L = LIBS[li];
    if (!L) return false;
    libDetail.innerHTML =
      `<div class="bookcards">${L.books.map(bi => bookCardHTML(BOOKS[bi], bi)).join('')}</div>`;
    libDetail.scrollTop = 0;
    return true;
  }

  /* ---------- one title, and who holds it ---------- */
  function renderBook(bi) {
    const b = BOOKS[bi];
    if (!b) return false;
    const title = (b.te && b.to && b.te !== b.to)
      ? `${esc(b.te)} <span class="bh-orig">(${esc(b.to)})</span>`
      : esc(b.to || b.te || 'Untitled');
    const meta = [b.pub, b.yr, b.pl].filter(Boolean).join(', ');
    const url = b.lk ? b.lk
      : (b.slug ? `https://tamizdatproject.org/publications/${encodeURIComponent(b.slug)}/` : '');
    const learn = url ? `<a class="bh-learn" href="${url}" target="_blank" rel="noopener">Learn more</a>` : '';
    const first = esc((b.te || b.to || '?').slice(0, 1));
    const cover = b.cover
      ? `<img class="bh-cover" src="${esc(b.cover)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="bh-cover noimg" style="display:none">${first}</div>`
      : `<div class="bh-cover noimg">${first}</div>`;

    const lis = (bookLibs[bi] || []).slice().sort((a, c) => LIBS[a].name.localeCompare(LIBS[c].name));
    const n = lis.length;
    const libCards = lis.map(li => {
      const L = LIBS[li];
      return `<a class="bhl-card" data-nav="library" data-li="${li}" href="#library-${li}">
      <span class="bhl-icon">${typeIcon(L.tcat)}</span>
      <div class="bhl-mid">
        <div class="bhl-name">${esc(L.name)}</div>
        <div class="bhl-loc">${esc(L.loc)}</div>
        <div class="bhl-type">${esc(L.tcat)}</div>
      </div>
    </a>`;
    }).join('');

    libBook.innerHTML = `
    <div class="bookhero">
      <div class="bh-coverwrap">${cover}</div>
      <div class="bh-info">
        <h1 class="bh-title">${title}</h1>
        ${b.au ? `<div class="bh-au">${esc(b.au)}</div>` : ''}
        ${b.ed ? `<div class="bh-au">${esc(b.ed)} <span class="role">(${b.ed.includes(',') || b.ed.includes('|') ? 'Eds.' : 'Ed.'})</span></div>` : ''}
        ${b.tr ? `<div class="bh-au">${esc(b.tr)} <span class="role">(Trans.)</span></div>` : ''}
        ${meta ? `<div class="bh-meta">${esc(meta)}</div>` : ''}
        ${learn}
      </div>
    </div>
    <h3 class="bh-libhead">Held in ${n} librar${n != 1 ? 'ies' : 'y'}</h3>
    <div class="bhl-list">${libCards}</div>`;
    libBook.scrollTop = 0;
    return true;
  }

  /* ---------- controls ---------- */
  document.querySelector('.libfilters').addEventListener('change', e => {
    if (e.target.matches('input[type=checkbox]')) {
      if (e.target.closest('#lgrpCountry')) libF.popCities();
      renderDirectory();
    }
  });
  lq.addEventListener('input', renderDirectory);
  document.getElementById('lreset').onclick = () => {
    document.querySelectorAll('.libfilters .fopts input:checked').forEach(i => { i.checked = false; });
    libF.popCities();
    lq.value = '';
    renderDirectory();
  };

  const sel = document.getElementById('libSort');
  if (sel) {
    enhanceSelect(sel);
    sel.addEventListener('change', () => {
      if (sel.value === 'near' && !userPos) { requestLocation(); return; }
      sortMode = sel.value;
      sortNote('');
      renderDirectory();
    });
  }

  function requestLocation() {
    if (!navigator.geolocation) {
      sel.value = sortMode; if (sel._syncSortUI) sel._syncSortUI();
      sortNote('This browser can\u2019t share a location.');
      return;
    }
    sortNote('Finding your location\u2026');
    navigator.geolocation.getCurrentPosition(
      pos => {
        userPos = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        sortMode = 'near';
        sortNote('');
        renderDirectory();
      },
      err => {
        sel.value = sortMode; if (sel._syncSortUI) sel._syncSortUI();
        sortNote(err && err.code === 1
          ? 'Location permission denied, so the list is unchanged.'
          : 'Couldn\u2019t get your location, so the list is unchanged.');
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
    );
  }

  return { renderDirectory, renderDetail, renderBook, els: { libDir, libDetail, libBook } };
}
