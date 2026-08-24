/* Shelf Number — checkbox filter groups.
   Used twice: the map panel (library type only) and the libraries directory
   (type, country, city). Any of the three boxes may be absent; a missing box
   simply contributes no constraint. */

import { checkedVals, optRow } from '../lib/dom.js';

export function buildGroups(store, typeEl, countryEl, cityEl) {
  const { LIBS, S } = store;

  const cCount = {};
  LIBS.forEach(L => { cCount[L.country] = (cCount[L.country] || 0) + 1; });
  const countriesSorted = Object.keys(cCount)
    .sort((a, b) => cCount[b] - cCount[a] || a.localeCompare(b));

  if (typeEl) typeEl.innerHTML = S.by_type.map(t => optRow(t[0], t[0])).join('');
  if (countryEl) countryEl.innerHTML = countriesSorted.map(c => optRow(c, c, cCount[c])).join('');

  /* Cities are re-listed whenever the country selection changes, so the list
     only ever offers cities you can actually reach. */
  function popCities() {
    if (!cityEl) return;
    const sel = new Set(countryEl ? checkedVals(countryEl) : []);
    const keep = new Set(checkedVals(cityEl));
    const cities = {};
    LIBS.forEach(L => {
      if (!sel.size || sel.has(L.country)) cities[L.city] = (cities[L.city] || 0) + 1;
    });
    cityEl.innerHTML = Object.keys(cities).filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
      .map(ci => optRow(ci, ci, cities[ci])).join('');
    cityEl.querySelectorAll('input').forEach(i => { if (keep.has(i.value)) i.checked = true; });
  }
  popCities();

  function match(li) {
    const L = LIBS[li];
    const t = typeEl ? checkedVals(typeEl) : [];
    const c = countryEl ? checkedVals(countryEl) : [];
    const ci = cityEl ? checkedVals(cityEl) : [];
    if (t.length && !t.includes(L.tcat)) return false;
    if (c.length && !c.includes(L.country)) return false;
    if (ci.length && !ci.includes(L.city)) return false;
    return true;
  }

  return { popCities, match, countryEl };
}
