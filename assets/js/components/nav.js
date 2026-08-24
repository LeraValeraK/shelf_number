/* Shelf Number — navigation.
   Three <main> elements sit in the document at once; this switches between
   them. Every link that moves between views carries data-nav, so one delegated
   listener covers markup that components render later. */

import { esc, nf } from '../lib/dom.js';

export function mount(store, { map, libraries, titles }) {
  const { LIBS, BOOKS, S } = store;

  const pageMap = document.getElementById('page-map');
  const pageLibs = document.getElementById('page-libs');
  const pageTitles = document.getElementById('page-titles');
  const { libDir, libDetail, libBook } = libraries.els;

  document.getElementById('seelibsCount').textContent = nf(S.n_libs);
  document.getElementById('seetitlesCount').textContent = nf(S.n_books);

  function setCrumbs(el, items) {
    el.innerHTML = items.map((it, i) => {
      const sep = i > 0 ? '<span class="crsep">/</span>' : '';
      return it.nav
        ? `${sep}<a class="crumb" data-nav="${it.nav}" href="#">${esc(it.label)}</a>`
        : `${sep}<span class="crumb cur">${esc(it.label)}</span>`;
    }).join('');
  }

  function goMap() {
    pageLibs.hidden = true; pageTitles.hidden = true; pageMap.hidden = false;
    map.closePanel();
    setTimeout(() => map.invalidateSize(), 30);
    window.scrollTo(0, 0);
  }

  function goLibraries() {
    pageMap.hidden = true; pageTitles.hidden = true; pageLibs.hidden = false;
    pageLibs.classList.remove('detailmode', 'bookmode');
    libDetail.hidden = true; libBook.hidden = true; libDir.hidden = false;
    setCrumbs(document.getElementById('crumbs'), [{ label: 'Main', nav: 'map' }, { label: 'Libraries' }]);
    document.getElementById('libTitle').textContent = 'Libraries';
    document.getElementById('libSortWrap').hidden = false;
    libraries.renderDirectory();
    window.scrollTo(0, 0);
  }

  function goLibrary(li) {
    const L = LIBS[li];
    if (!L || !libraries.renderDetail(li)) { goLibraries(); return; }
    pageMap.hidden = true; pageTitles.hidden = true; pageLibs.hidden = false;
    pageLibs.classList.add('detailmode'); pageLibs.classList.remove('bookmode');
    libDir.hidden = true; libBook.hidden = true; libDetail.hidden = false;
    const n = L.books.length;
    setCrumbs(document.getElementById('crumbs'), [
      { label: 'Main', nav: 'map' }, { label: 'Libraries', nav: 'libraries' }, { label: L.name }
    ]);
    document.getElementById('libTitle').innerHTML =
      `${esc(L.name)} <span class="titlecount">${n} title${n != 1 ? 's' : ''} held</span>`;
    document.getElementById('libSub').textContent = `${L.loc} · ${L.type}`;
    document.getElementById('libSortWrap').hidden = true;
    window.scrollTo(0, 0);
  }

  function goBook(bi) {
    const b = BOOKS[bi];
    if (!b || !libraries.renderBook(bi)) { goLibraries(); return; }
    pageMap.hidden = true; pageTitles.hidden = true; pageLibs.hidden = false;
    pageLibs.classList.add('detailmode', 'bookmode');
    libDir.hidden = true; libDetail.hidden = true; libBook.hidden = false;
    setCrumbs(document.getElementById('crumbs'), [
      { label: 'Main', nav: 'map' }, { label: 'Titles', nav: 'titles' },
      { label: b.te || b.to || 'Untitled' }
    ]);
    document.getElementById('libTitle').textContent = '';
    document.getElementById('libSub').textContent = '';
    document.getElementById('libSortWrap').hidden = true;
    window.scrollTo(0, 0);
  }

  function goTitles() {
    pageMap.hidden = true; pageLibs.hidden = true; pageTitles.hidden = false;
    setCrumbs(document.getElementById('tcrumbs'), [{ label: 'Main', nav: 'map' }, { label: 'Titles' }]);
    titles.show();
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (!nav) return;
    e.preventDefault();
    const t = nav.getAttribute('data-nav');
    if (t === 'libraries') goLibraries();
    else if (t === 'map') goMap();
    else if (t === 'library') goLibrary(+nav.getAttribute('data-li'));
    else if (t === 'book') goBook(+nav.getAttribute('data-bi'));
    else if (t === 'titles') goTitles();
  });

  return { goMap, goLibraries, goLibrary, goBook, goTitles };
}
