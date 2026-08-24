/* Shelf Number — "The Map".
   One stamp per library, sized by how many catalogued titles it holds, with a
   type filter, a free-text search across libraries and titles, and a side panel
   for the library you click. Leaflet is loaded globally as `L` by index.html. */

import { esc, prefersReducedMotion } from '../lib/dom.js';
import { buildGroups } from './filters.js';

export function mount(store) {
  const { LIBS, BOOKS, bookLibs, world } = store;

  const map = L.map('map', {
    minZoom: 2, maxZoom: 12, worldCopyJump: true,
    zoomControl: true, attributionControl: true
  }).setView([34, -30], 2.4);
  map.attributionControl.setPrefix('');

  L.geoJSON(world, {
    style: { fillColor: '#fbfaf7', fillOpacity: 1, color: '#cfd5d4', weight: .7, opacity: 1 },
    interactive: false,
    attribution: 'Holdings: Tamizdat Project · Outlines: Natural Earth'
  }).addTo(map);

  /* ---------- markers ---------- */
  const maxHold = Math.max(...LIBS.map(l => l.books.length));
  const stampSize = n => Math.round(10 + 14 * Math.sqrt(n / maxHold));   // 10–24px point

  const markers = [], markerByLib = new Array(LIBS.length);
  LIBS.forEach((lib, li) => {
    const sz = stampSize(lib.books.length);
    const icon = L.divIcon({
      className: '', iconSize: [sz, sz],
      html: `<div class="stamp" style="width:${sz}px;height:${sz}px"></div>`
    });
    const m = L.marker([lib.lat, lib.lon], { icon });
    m.bindTooltip(esc(lib.name), { className: 'tt', direction: 'top', offset: [0, -sz / 2] });
    m.on('click', () => openLib(li));
    m._libIndex = li; m._size = sz;
    markers.push(m); markerByLib[li] = m;
  });

  const cluster = L.layerGroup();
  map.addLayer(cluster);

  /* ---------- filter panel ---------- */
  const mapF = buildGroups(
    store,
    document.getElementById('grpType'),
    document.getElementById('grpCountry'),   // not present in the map panel
    document.getElementById('grpCity')       // not present in the map panel
  );

  let searchSet = null;
  function rebuildCluster() {
    cluster.clearLayers();
    markers
      .filter(m => mapF.match(m._libIndex) && (!searchSet || searchSet.has(m._libIndex)))
      .forEach(m => cluster.addLayer(m));
  }
  document.querySelector('.mapsec .filters').addEventListener('change', e => {
    if (e.target.matches('input[type=checkbox]')) {
      if (e.target.closest('#grpCountry')) mapF.popCities();
      rebuildCluster();
    }
  });
  rebuildCluster();

  /* ---------- library panel ---------- */
  const panel = document.getElementById('panel');
  let selLib = -1;

  function markStamp(li, on) {
    if (li < 0 || !markerByLib[li]) return;
    const el = markerByLib[li].getElement();
    if (el) el.querySelector('.stamp')?.classList.toggle('sel', on);
  }

  function openLib(li) {
    clearBook();
    markStamp(selLib, false);
    selLib = li;
    const lib = LIBS[li];
    document.getElementById('pname').textContent = lib.name;
    document.getElementById('pmeta').textContent = lib.loc;
    document.getElementById('ptype').textContent = lib.tcat;
    const n = lib.books.length;
    document.getElementById('pcount').innerHTML = `Holds <b>${n}</b> title${n != 1 ? 's' : ''}`;
    document.getElementById('pcoll').setAttribute('data-li', li);
    panel.classList.add('open');
    markStamp(li, true);
    flyTo(lib.lat, lib.lon, Math.max(map.getZoom(), 4));
  }

  function closePanel() {
    panel.classList.remove('open');
    markStamp(selLib, false);
    selLib = -1;
  }
  document.getElementById('pclose').onclick = closePanel;

  /* ---------- isolate one title's libraries ---------- */
  const hlLayer = L.layerGroup().addTo(map);
  const banner = document.getElementById('banner');

  function isolateBook(bi) {
    clearBook();
    const b = BOOKS[bi], lis = bookLibs[bi], pts = [];
    lis.forEach(li => {
      const lib = LIBS[li], sz = stampSize(lib.books.length) + 4;
      const dm = L.marker([lib.lat, lib.lon], {
        icon: L.divIcon({
          className: '', iconSize: [sz, sz],
          html: `<div class="stamp hl" style="width:${sz}px;height:${sz}px;font-size:11px">${lib.books.length}</div>`
        }),
        zIndexOffset: 1000
      });
      dm.bindTooltip(esc(lib.name), { className: 'tt', direction: 'top', offset: [0, -sz / 2] });
      dm.on('click', () => openLib(li));
      dm.addTo(hlLayer);
      pts.push([lib.lat, lib.lon]);
    });
    const countries = new Set(lis.map(li => LIBS[li].country));
    document.getElementById('bannerT').innerHTML = `<em>${esc(b.to || b.te)}</em>`;
    document.getElementById('bannerM').textContent =
      `held in ${lis.length} librar${lis.length != 1 ? 'ies' : 'y'} · ${countries.size} countr${countries.size != 1 ? 'ies' : 'y'}`;
    banner.classList.add('show');
    fitTo(pts, .25);
  }

  function clearBook() {
    hlLayer.clearLayers();
    banner.classList.remove('show');
  }

  /* ---------- search ---------- */
  const q = document.getElementById('q');

  function runSearch() {
    const raw = q.value.trim(), term = raw.toLowerCase();
    clearBook();
    if (term.length < 2) { searchSet = null; rebuildCluster(); return; }

    const set = new Set();
    let nTitles = 0;
    LIBS.forEach((lib, li) => { if (lib.name.toLowerCase().includes(term)) set.add(li); });
    BOOKS.forEach((b, bi) => {
      if (!bookLibs[bi].length) return;
      if ((b.to || '').toLowerCase().includes(term) || (b.te || '').toLowerCase().includes(term)
        || (b.au || '').toLowerCase().includes(term) || (b.pub || '').toLowerCase().includes(term)) {
        nTitles++;
        bookLibs[bi].forEach(li => set.add(li));
      }
    });
    searchSet = set;
    rebuildCluster();

    const visible = [...set].filter(li => mapF.match(li));
    const countries = new Set(visible.map(li => LIBS[li].country));
    document.getElementById('bannerT').innerHTML = `“${esc(raw)}”`;
    document.getElementById('bannerM').textContent = visible.length
      ? `${nTitles} title${nTitles != 1 ? 's' : ''} · ${visible.length} librar${visible.length != 1 ? 'ies' : 'y'} · ${countries.size} countr${countries.size != 1 ? 'ies' : 'y'}`
      : 'no matches';
    banner.classList.add('show');
    fitTo(visible.map(li => [LIBS[li].lat, LIBS[li].lon]), .2);
  }

  let qDeb;
  q.addEventListener('input', () => { clearTimeout(qDeb); qDeb = setTimeout(runSearch, 220); });
  q.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); clearTimeout(qDeb); runSearch(); }
    else if (e.key === 'Escape') { q.value = ''; clearTimeout(qDeb); runSearch(); }
  });
  document.getElementById('bannerX').onclick = () => {
    q.value = ''; searchSet = null; clearBook(); rebuildCluster();
  };

  /* ---------- camera ---------- */
  function flyTo(lat, lon, z) {
    prefersReducedMotion ? map.setView([lat, lon], z) : map.flyTo([lat, lon], z, { duration: .7 });
  }
  function fitTo(pts, pad) {
    if (!pts.length) return;
    const bounds = L.latLngBounds(pts).pad(pad);
    prefersReducedMotion
      ? map.fitBounds(bounds, { animate: false })
      : map.flyToBounds(bounds, { duration: .7, maxZoom: 6 });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePanel(); clearBook(); }
  });

  return {
    openLib,
    closePanel,
    isolateBook,                                  // available for linking a title to the map
    invalidateSize: () => map.invalidateSize()
  };
}
