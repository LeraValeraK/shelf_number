/* Shelf Number — TSV reader
   The source tables use no CSV quoting, so a plain tab split is exact.
   A leading BOM is stripped and headers are lower-cased, so files re-saved by
   Excel or Google Sheets (which add a BOM and sometimes change capitalisation)
   still parse. */

export function parseTSV(text) {
  const clean = text.replace(/^\uFEFF/, '').replace(/\r/g, '');
  const lines = clean.split('\n');
  const head = (lines[0] || '').split('\t').map(s => s.trim().toLowerCase());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || !line.trim()) continue;
    const cells = line.split('\t');
    const row = {};
    for (let j = 0; j < head.length; j++) row[head[j]] = (cells[j] || '').trim();
    rows.push(row);
  }
  return { head, rows };
}

/* Fetches a table and fails loudly with the path in the message — a missing
   file usually returns the host's 404 page, which would otherwise parse as one
   nonsense row. */
export async function fetchTSV(url) {
  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`${url} — HTTP ${res.status}`);
  const text = await res.text();
  if (/^\s*[<{]/.test(text)) {
    throw new Error(`${url} returned a web page, not a table. Check that the file is really there.`);
  }
  const parsed = parseTSV(text);
  parsed.url = url;
  return parsed;
}

export function requireColumns(parsed, columns) {
  const missing = columns.filter(c => parsed.head.indexOf(c) < 0);
  if (missing.length) {
    throw new Error(
      `${parsed.url} is missing column${missing.length > 1 ? 's' : ''} ` +
      `${missing.join(' and ')}. Columns found: ${parsed.head.join(', ') || '(none)'}.`
    );
  }
  return parsed;
}
