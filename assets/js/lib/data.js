/* Shelf Number — data model
   Builds the in-memory model the components read, straight from the three
   source tables. Nothing here is hand-maintained: replace a .tsv in /data and
   the site follows.

     catalogue.tsv  one row per publication          -> BOOKS
     libraries.tsv  one row per library, geocoded    -> LIBS
     holdings.tsv   which library holds which uuid   -> LIBS[i].books

   A title only enters BOOKS if at least one geocoded library holds it, and a
   library only enters LIBS if it holds at least one catalogued title — the map,
   the charts and both directories all count the same population that way. */

import { fetchTSV, requireColumns } from './tsv.js';
import { EXCLUDE_LIBRARIES, DEFAULT_LIBRARY_TYPE, UNKNOWN_PLACE } from '../config.js';

/* Library names arrive spelled slightly differently in the two tables
   ("A | B" in one, "A; B" in the other), so joins go through a folded key:
   decomposed, lower-cased, everything but letters and digits collapsed to a
   single space. Unicode-aware — a good third of these names are not ASCII. */
export function nameKey(s) {
  return (s == null ? '' : String(s))
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

/* Splits a person/organisation column into its individual names. The source
   uses | and ; interchangeably as separators. */
function nameList(...fields) {
  const out = [];
  fields.forEach(f => {
    String(f || '').split(/[|;]/).forEach(part => {
      const v = part.trim();
      if (v) out.push(v);
    });
  });
  return out.join(', ');
}

/* `source` is authored in a rich-text field, so a few rows carry stray markup.
   The value is rendered as plain text, so the tags have to come out here. */
function stripHTML(s) {
  return String(s || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* `place` often carries a cataloguer's note in brackets —
   "Riga [Place of publication ... is fictitious]" — or is nothing but the note.
   The filters and cards want the bare city. */
function placeCity(s) {
  const bare = String(s || '')
    .replace(/\[[^\]]*\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[,;|]+|[,;|]+$/g, '')
    .trim();
  return bare || UNKNOWN_PLACE;
}

export async function loadData(paths) {
  const [catalogue, libraries, holdings, worldRes] = await Promise.all([
    fetchTSV(paths.catalogue),
    fetchTSV(paths.libraries),
    fetchTSV(paths.holdings),
    fetch(paths.world, { cache: 'no-cache' })
  ]);

  requireColumns(catalogue, ['uuid', 'slug', 'title_orig', 'title_eng']);
  requireColumns(libraries, ['library', 'latitude', 'longitude']);
  requireColumns(holdings, ['uuid', 'library']);
  if (!worldRes.ok) throw new Error(`${paths.world} — HTTP ${worldRes.status}`);
  const world = await worldRes.json();

  const excluded = new Set(EXCLUDE_LIBRARIES.map(nameKey));

  /* ---- libraries: one record per library, first row wins a duplicate name ---- */
  const libByKey = new Map();
  libraries.rows.forEach(r => {
    const name = r.library;
    if (!name || name === 'None') return;
    const key = nameKey(name);
    if (!key || excluded.has(key) || libByKey.has(key)) return;
    const lat = parseFloat(r.latitude), lon = parseFloat(r.longitude);
    if (!isFinite(lat) || !isFinite(lon)) return;   // unplaceable: cannot go on the map
    const type = r.type || DEFAULT_LIBRARY_TYPE;
    libByKey.set(key, {
      name,
      lat, lon,
      loc: r.location || '',
      city: String(r.location || '').split(',')[0].trim(),
      type,
      tcat: type,
      country: r.country || '',
      books: []
    });
  });

  /* ---- holdings: uuid -> the set of libraries that hold it ---- */
  const catByUuid = new Map();
  catalogue.rows.forEach(r => { if (r.uuid) catByUuid.set(r.uuid, r); });

  const heldBy = new Map();
  holdings.rows.forEach(r => {
    const key = nameKey(r.library), uuid = r.uuid;
    if (!key || !uuid || !libByKey.has(key) || !catByUuid.has(uuid)) return;
    let set = heldBy.get(uuid);
    if (!set) heldBy.set(uuid, set = new Set());
    set.add(key);
  });

  /* ---- books: catalogue order, located titles only ---- */
  const BOOKS = [];
  catalogue.rows.forEach(r => {
    const held = heldBy.get(r.uuid);
    if (!held || !held.size) return;
    const bi = BOOKS.length;
    const book = {
      to: r.title_orig,
      te: r.title_eng,
      au: [r.author_ind, r.author_org].filter(Boolean).join(' | '),
      yr: r.publication_date_year,
      pub: r.publisher_org || r.publisher_ind,
      pl: r.place,
      plc: placeCity(r.place),
      slug: r.slug,
      lk: r.publication_link,
      cover: r.cover,
      pubinfo: stripHTML(r.source),
      lang: String(r.language || '').split(/[|;]/).map(s => s.trim()).filter(Boolean),
      nlib: held.size
    };
    const ed = nameList(r.editor_ind, r.compiler_ind);
    const tr = nameList(r.translator_ind, r.translator_org);
    if (ed) book.ed = ed;
    if (tr) book.tr = tr;
    BOOKS.push(book);
    held.forEach(key => libByKey.get(key).books.push(bi));
  });

  /* ---- libraries that hold nothing catalogued never reach the map ---- */
  const LIBS = [...libByKey.values()].filter(l => l.books.length);
  LIBS.forEach(l => l.books.sort((a, b) => a - b));

  /* ---- book -> libraries index, and the handful of headline figures ---- */
  const bookLibs = BOOKS.map(() => []);
  LIBS.forEach((L, li) => L.books.forEach(bi => bookLibs[bi].push(li)));

  const typeCount = {};
  LIBS.forEach(L => { typeCount[L.tcat] = (typeCount[L.tcat] || 0) + 1; });

  const S = {
    n_books: BOOKS.length,
    n_books_total: catalogue.rows.length,
    n_libs: LIBS.length,
    n_countries: new Set(LIBS.map(L => L.country)).size,
    n_holdings: LIBS.reduce((sum, L) => sum + L.books.length, 0),
    by_type: Object.entries(typeCount)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  };

  return { BOOKS, LIBS, S, bookLibs, world, holdings: holdings.rows };
}
