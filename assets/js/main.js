/* Shelf Number — entry point.
   Loads the three source tables, then mounts each component against the model
   they produce. Nothing renders before the data is in, so a failure here is
   reported once, in the page, rather than as five separate empty sections. */

import { DATA_FILES } from './config.js';
import { loadData } from './lib/data.js';
import { initFilterToggles } from './lib/dom.js';

import * as strip from './components/strip.js';
import * as mapView from './components/map.js';
import * as stats from './components/stats.js';
import * as network from './components/network.js';
import * as libraries from './components/libraries.js';
import * as titles from './components/titles.js';
import * as nav from './components/nav.js';

function reportFailure(err) {
  console.error('Shelf Number could not load its data:', err);
  const host = document.querySelector('#page-map .masthead .wrap');
  if (!host) return;
  const p = document.createElement('p');
  p.className = 'titlenote';
  p.setAttribute('role', 'status');
  p.textContent =
    'The data tables could not be loaded, so the map and the figures below are empty. ' +
    (err && err.message ? err.message + ' ' : '') +
    'Open the page over http(s) — browsers block local file reads when a page is opened straight from disk.';
  host.appendChild(p);
}

async function start() {
  const store = await loadData(DATA_FILES);

  initFilterToggles();
  strip.mount(store);

  const map = mapView.mount(store);
  stats.mount(store);
  network.mount(store);

  const libs = libraries.mount(store);
  const titlesView = titles.mount(store);

  nav.mount(store, { map, libraries: libs, titles: titlesView });

  /* handy in the console when checking a fresh export of the tables */
  window.SHELF = store;
}

start().catch(reportFailure);
