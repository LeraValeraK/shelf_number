/* Shelf Number — "Shared Collections".
   A bipartite graph: library -> title, one edge per holding. Two renderers ship
   here. Cosmos (WebGL2) draws the full holdings table; where WebGL2 or the
   engine is missing, a plain 2D canvas force layout draws the located subset
   instead. Whichever runs, the other's host element is removed so only one
   canvas occupies the frame. */

import { esc } from '../lib/dom.js';
import { EXCLUDE_LIBRARIES } from '../config.js';

const SPACE = 4096;
const COL_SRC = [0x56 / 255, 0x68 / 255, 0xB1 / 255, 0.9];   // source = library      #5668B1
const COL_TGT = [0xE8 / 255, 0x78 / 255, 0xC2 / 255, 0.9];   // target = publication  #E878C2
const COL_LIB = '#5668B1', COL_BOOK = '#E878C2';

export function mount(store) {
  const host = document.getElementById('netgl');
  const canvas = document.getElementById('net');
  const tip = document.getElementById('netTip');
  if (!host && !canvas) return;

  const Graph = (window.CosmosGL || {}).Graph;
  let webgl2 = false;
  try { webgl2 = !!document.createElement('canvas').getContext('webgl2'); } catch (e) { webgl2 = false; }

  if (host && Graph && webgl2) {
    if (canvas) canvas.remove();
    try {
      mountCosmos(host, tip, Graph, store.holdings);
      return;
    } catch (err) {
      console.error('Cosmos graph failed, falling back to canvas:', err);
      host.remove();
    }
  } else if (host) {
    host.remove();
  }

  if (canvas) mountCanvas(canvas, tip, store);
}

/* ============================ Cosmos (WebGL2) ============================ */

function mountCosmos(host, tip, Graph, holdings) {
  const skip = new Set(EXCLUDE_LIBRARIES);
  let meta = [], graph = null, pinned = null, mx = 0, my = 0, paused = false;
  let nbOf = [], lkOf = [];

  function note(msg) {
    let el = host.querySelector('.netnote');
    if (!msg) { if (el) el.remove(); return; }
    if (!el) { el = document.createElement('div'); el.className = 'netnote'; host.appendChild(el); }
    el.textContent = msg;
  }

  /* library = source, publication = target */
  function build(rows) {
    meta = [];
    const libIdx = new Map(), pubIdx = new Map(), lk = [], seen = new Set();
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i], lib = r.library, uu = r.uuid;
      if (!lib || lib === 'None' || skip.has(lib) || !uu) continue;
      let si = libIdx.get(lib);
      if (si === undefined) { si = meta.length; libIdx.set(lib, si); meta.push({ t: 0, label: lib, deg: 0 }); }
      let ti = pubIdx.get(uu);
      if (ti === undefined) { ti = meta.length; pubIdx.set(uu, ti); meta.push({ t: 1, label: r.publication || uu, deg: 0 }); }
      const key = si + '>' + ti;
      if (seen.has(key)) continue;
      seen.add(key);
      lk.push(si, ti); meta[si].deg++; meta[ti].deg++;
    }

    const n = meta.length, cx = SPACE / 2, cy = SPACE / 2, R = SPACE * 0.42;
    const pos = new Float32Array(n * 2), siz = new Float32Array(n), col = new Float32Array(n * 4);
    for (let i = 0; i < n; i++) {
      const a = i * 2.399963, rr = R * Math.sqrt((i + 1) / Math.max(1, n));
      pos[i * 2] = cx + Math.cos(a) * rr;
      pos[i * 2 + 1] = cy + Math.sin(a) * rr;
      siz[i] = meta[i].t === 1 ? 4.2 + Math.sqrt(meta[i].deg) * 1.85 : 3.5 + Math.sqrt(meta[i].deg) * 1.35;
      const c = meta[i].t === 1 ? COL_TGT : COL_SRC;
      col[i * 4] = c[0]; col[i * 4 + 1] = c[1]; col[i * 4 + 2] = c[2]; col[i * 4 + 3] = c[3];
    }

    /* adjacency: which links / neighbours touch each point (link j occupies lk[2j], lk[2j+1]) */
    nbOf = []; lkOf = [];
    for (let i = 0; i < n; i++) { nbOf.push([]); lkOf.push([]); }
    for (let j = 0; j < lk.length; j += 2) {
      const s = lk[j], t = lk[j + 1], li = j / 2;
      nbOf[s].push(t); nbOf[t].push(s); lkOf[s].push(li); lkOf[t].push(li);
    }
    return { pos, siz, col, links: new Float32Array(lk) };
  }

  function showTip(i) {
    const n = meta[i];
    if (!n || !tip) return;
    tip.hidden = false;
    tip.innerHTML = '<b>' + esc(n.label) + '</b>';
    let tx = mx + 14;
    const ty = my + 14;
    if (tx > host.clientWidth - 200) tx = Math.max(4, mx - 14 - tip.offsetWidth);
    tip.style.left = tx + 'px';
    tip.style.top = ty + 'px';
  }
  function hideTip() { if (tip) tip.hidden = true; }

  function clearPin() {
    pinned = null;
    graph.setConfigPartial({
      highlightedPointIndices: undefined,
      highlightedLinkIndices: undefined,
      focusedPointIndex: undefined
    });
  }
  function pinPoint(i) {
    pinned = i;
    const nb = nbOf[i] || [], ln = lkOf[i] || [];
    graph.setConfigPartial({
      highlightedPointIndices: [i].concat(nb),
      // an empty array would grey out ALL links, so only activate link highlighting when there are some
      highlightedLinkIndices: ln.length ? ln : undefined,
      focusedPointIndex: i
    });
  }

  host.addEventListener('mousemove', e => {
    const r = host.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
  });
  host.addEventListener('mouseleave', hideTip);

  const config = {
    spaceSize: SPACE,
    backgroundColor: '#2F3239',
    linkDefaultColor: '#7B5D97',                 // fallback when the gradient is off
    linkColorInterpolateFromEndpoints: true,     // gradient along each edge: library -> title
    renderLinks: true,
    linkDefaultWidth: 4,
    linkWidthScale: 1,
    renderHoveredPointRing: true,
    hoveredPointCursor: 'pointer',
    enableDrag: false,
    enableZoom: true,
    fitViewOnInit: true,
    fitViewPadding: 0.2,
    /* Cosmograph's default layout. Everything not listed here (gravity 0.25,
       decay 5000, collision off) falls through to the engine defaults. */
    simulationRepulsion: 0.5,
    simulationFriction: 0.5,
    simulationLinkSpring: 0.4,
    simulationLinkDistance: 20,
    onPointMouseOver: index => { if (index !== undefined && index !== null) showTip(index); },
    onPointMouseOut: () => hideTip(),
    onClick: index => {
      if (index === undefined || index === null) { clearPin(); return; }
      if (pinned === index) { clearPin(); return; }
      pinPoint(index);
    }
  };

  const d = build(holdings);
  if (!meta.length) {
    note(`Read ${holdings.length} row${holdings.length === 1 ? '' : 's'} of holdings, but none had both a library and a uuid.`);
    return;
  }
  note('');

  graph = new Graph(host, config);
  graph.setPointPositions(d.pos);
  graph.setPointSizes(d.siz);
  graph.setPointColors(d.col);
  graph.setLinks(d.links);
  graph.render(1);

  /* ---------- controls ---------- */
  const btns = document.getElementById('netBtns');
  const btnBoost = document.getElementById('netBoost');
  const btnPause = document.getElementById('netPause');
  const btnFit = document.getElementById('netFit');
  if (btns) btns.hidden = false;
  const syncPauseLabel = () => { if (btnPause) btnPause.textContent = paused ? 'Resume' : 'Pause'; };

  if (btnBoost) btnBoost.addEventListener('click', () => {
    try {
      if (paused) { graph.unpause(); paused = false; syncPauseLabel(); }
      graph.start(1);            // reheat: reset alpha so the layout re-spreads
    } catch (err) { console.warn('boost failed:', err); }
  });
  if (btnPause) btnPause.addEventListener('click', () => {
    try {
      if (paused) { graph.unpause(); paused = false; } else { graph.pause(); paused = true; }
      syncPauseLabel();
    } catch (err) { console.warn('pause/unpause failed:', err); }
  });
  if (btnFit) btnFit.addEventListener('click', () => { try { graph.fitView(400); } catch (err) { /* noop */ } });
}

/* ========================= 2D canvas fallback ========================= */

function mountCanvas(canvas, tip, { LIBS, BOOKS, bookLibs }) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let nodes = [], links = [], adj = [], W = 900, H = 560, scale = 1, ox = 0, oy = 0;
  let hi = null, hiNe = new Set(), iter = 0, raf = 0, userMoved = false;
  let pin = null, pinNe = new Set();
  const maxIter = 280;

  function build() {
    const idx = {};
    nodes = []; links = [];
    LIBS.forEach((L, li) => {
      const deg = L.books.length;
      if (deg < 1) return;
      idx['L' + li] = nodes.length;
      nodes.push({ type: 'lib', label: L.name, deg, x: W / 2, y: H / 2 });
    });
    BOOKS.forEach((b, bi) => {
      const libs = bookLibs[bi].filter(li => idx['L' + li] !== undefined);
      if (!libs.length) return;
      idx['B' + bi] = nodes.length;
      nodes.push({
        type: 'book', label: b.pubinfo || b.te || b.to || 'Untitled',
        deg: bookLibs[bi].length, x: W / 2, y: H / 2
      });
    });
    BOOKS.forEach((b, bi) => {
      const ai = idx['B' + bi];
      if (ai === undefined) return;
      bookLibs[bi].forEach(li => {
        const ln = idx['L' + li];
        if (ln !== undefined) links.push([ln, ai]);
      });
    });
    adj = nodes.map(() => []);
    links.forEach(([s, t]) => { adj[s].push(t); adj[t].push(s); });

    const R = Math.max(60, Math.min(W, H) * 0.45);
    nodes.forEach((n, i) => {
      const a = i * 2.399963, rr = R * Math.sqrt((i + 1) / nodes.length);
      n.x = W / 2 + Math.cos(a) * rr;
      n.y = H / 2 + Math.sin(a) * rr;
    });
    hi = null; hiNe = new Set(); pin = null; pinNe = new Set(); iter = 0; userMoved = false;
  }

  const radius = n => n.type === 'book' ? 2.8 + Math.sqrt(n.deg) * 1.35 : 2.4 + Math.sqrt(n.deg) * 1.0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth || 900;
    H = canvas.clientHeight || 560;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function step(temp) {
    const n = nodes.length;
    if (!n) return;
    const k = 0.9 * Math.sqrt((W * H) / n);
    const dx = new Float64Array(n), dy = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < n; j++) {
        const b = nodes[j];
        let ex = a.x - b.x, ey = a.y - b.y, dd = ex * ex + ey * ey;
        if (dd < 0.01) { ex = Math.random() - 0.5; ey = Math.random() - 0.5; dd = 0.01; }
        const dist = Math.sqrt(dd), f = k * k / dist, ux = ex / dist, uy = ey / dist;
        dx[i] += ux * f; dy[i] += uy * f; dx[j] -= ux * f; dy[j] -= uy * f;
      }
    }
    for (const [s, t] of links) {
      let ex = nodes[s].x - nodes[t].x, ey = nodes[s].y - nodes[t].y;
      const dist = Math.hypot(ex, ey) || 0.01;
      const f = dist * dist / k, ux = ex / dist, uy = ey / dist;
      dx[s] -= ux * f; dy[s] -= uy * f; dx[t] += ux * f; dy[t] += uy * f;
    }
    for (let i = 0; i < n; i++) {
      dx[i] += (W / 2 - nodes[i].x) * 0.09;
      dy[i] += (H / 2 - nodes[i].y) * 0.09;
      const dl = Math.hypot(dx[i], dy[i]) || 0.01, m = Math.min(dl, temp);
      nodes[i].x += dx[i] / dl * m;
      nodes[i].y += dy[i] / dl * m;
    }
  }

  function fit() {
    if (!nodes.length) return;
    let a = 1e9, b = 1e9, c = -1e9, d = -1e9;
    for (const n of nodes) {
      if (n.x < a) a = n.x; if (n.y < b) b = n.y;
      if (n.x > c) c = n.x; if (n.y > d) d = n.y;
    }
    const bw = Math.max(1, c - a), bh = Math.max(1, d - b), pad = 44;
    scale = Math.max(.12, Math.min((W - pad * 2) / bw, (H - pad * 2) / bh, 3));
    ox = (W - (a + c) * scale) / 2;
    oy = (H - (b + d) * scale) / 2;
  }

  const SX = n => n.x * scale + ox, SY = n => n.y * scale + oy;

  function render() {
    ctx.clearRect(0, 0, W, H);
    const sel = pin != null || hi != null;
    const activeNode = i => (pin != null && (i === pin || pinNe.has(i))) || (hi != null && (i === hi || hiNe.has(i)));
    const activeEdge = (s, t) => (pin != null && (s === pin || t === pin)) || (hi != null && (s === hi || t === hi));

    ctx.lineWidth = 1;
    ctx.strokeStyle = sel ? 'rgba(38,51,55,.05)' : 'rgba(38,51,55,.09)';
    ctx.beginPath();
    for (const [s, t] of links) { ctx.moveTo(SX(nodes[s]), SY(nodes[s])); ctx.lineTo(SX(nodes[t]), SY(nodes[t])); }
    ctx.stroke();

    if (sel) {
      ctx.lineWidth = 1.4;
      ctx.strokeStyle = 'rgba(63,102,153,.6)';
      ctx.beginPath();
      for (const [s, t] of links) {
        if (activeEdge(s, t)) { ctx.moveTo(SX(nodes[s]), SY(nodes[s])); ctx.lineTo(SX(nodes[t]), SY(nodes[t])); }
      }
      ctx.stroke();
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i], sx = SX(n), sy = SY(n), r = radius(n);
      const dim = sel && !activeNode(i);
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, 6.2832);
      ctx.fillStyle = n.type === 'book'
        ? (dim ? 'rgba(63,102,153,.16)' : COL_BOOK)
        : (dim ? 'rgba(38,51,55,.13)' : COL_LIB);
      ctx.fill();
      if (i === pin) {
        ctx.lineWidth = 2.4; ctx.strokeStyle = '#fff'; ctx.stroke();
        ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(63,102,153,.9)'; ctx.stroke();
      } else if (i === hi) {
        ctx.lineWidth = 2; ctx.strokeStyle = '#fff'; ctx.stroke();
      }
    }
  }

  function loop() {
    const per = 2;
    for (let s = 0; s < per && iter < maxIter; s++) {
      const temp = W * 0.08 * (1 - iter / maxIter) + 0.6;
      step(temp); iter++;
    }
    if (!userMoved) fit();
    render();
    if (iter < maxIter) raf = requestAnimationFrame(loop);
  }

  const nearest = (mx, my) => {
    let best = -1, bd = 1e9;
    for (let i = 0; i < nodes.length; i++) {
      const dd = Math.hypot(SX(nodes[i]) - mx, SY(nodes[i]) - my);
      if (dd < bd) { bd = dd; best = i; }
    }
    return (best >= 0 && bd <= Math.max(8, radius(nodes[best]) + 4)) ? best : -1;
  };

  let drag = false, lx = 0, ly = 0, downX = 0, downY = 0, dragged = false;

  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top;
    if (drag) {
      ox += mx - lx; oy += my - ly; lx = mx; ly = my;
      if (Math.hypot(mx - downX, my - downY) > 4) dragged = true;
      userMoved = true; render();
      return;
    }
    const best = nearest(mx, my);
    if (best >= 0) {
      hi = best; hiNe = new Set(adj[best]);
      tip.hidden = false;
      tip.innerHTML = `<b>${esc(nodes[best].label)}</b>`;
      let tx = mx + 14;
      if (tx > W - 180) tx = mx - 14 - tip.offsetWidth;
      tip.style.left = tx + 'px'; tip.style.top = (my + 14) + 'px';
      canvas.style.cursor = 'pointer';
      render();
    } else if (hi != null) {
      hi = null; hiNe = new Set(); tip.hidden = true;
      canvas.style.cursor = drag ? 'grabbing' : 'grab';
      render();
    }
  });

  canvas.addEventListener('mousedown', e => {
    const r = canvas.getBoundingClientRect();
    drag = true; dragged = false;
    lx = e.clientX - r.left; ly = e.clientY - r.top;
    downX = lx; downY = ly;
  });
  window.addEventListener('mouseup', () => { drag = false; });

  canvas.addEventListener('click', e => {
    if (dragged) return;                      // it was a pan, not a click
    const r = canvas.getBoundingClientRect();
    const best = nearest(e.clientX - r.left, e.clientY - r.top);
    if (best >= 0) {
      if (pin === best) { pin = null; pinNe = new Set(); }   // click again to release
      else { pin = best; pinNe = new Set(adj[best]); }
    } else { pin = null; pinNe = new Set(); }                // click empty space clears
    render();
  });

  canvas.addEventListener('mouseleave', () => {
    hi = null; hiNe = new Set();
    if (tip) tip.hidden = true;
    render();
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    userMoved = true;
    const r = canvas.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top, f = e.deltaY < 0 ? 1.12 : 0.89;
    ox = mx - (mx - ox) * f; oy = my - (my - oy) * f; scale *= f;
    render();
  }, { passive: false });

  window.addEventListener('resize', () => { resize(); if (!userMoved) fit(); render(); });

  if (raf) cancelAnimationFrame(raf);
  resize(); build();
  raf = requestAnimationFrame(loop);
}
