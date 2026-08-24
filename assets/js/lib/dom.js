/* Shelf Number — small DOM helpers shared by every component. */

export const esc = s => (s == null ? '' : String(s))
  .replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const nf = n => n.toLocaleString('en-US');

export const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion:reduce)').matches;

export const checkedVals = box =>
  [...box.querySelectorAll('input:checked')].map(i => i.value);

export const optRow = (v, label, count) =>
  `<label class="opt"><input type="checkbox" value="${esc(v)}"><span class="box"></span>` +
  `<span class="olab">${esc(label)}</span>` +
  (count == null ? '' : `<span class="ocount">${count}</span>`) + `</label>`;

/* Delegated collapse (+/−) and Hide/Show for every filter panel on the page. */
export function initFilterToggles() {
  document.addEventListener('click', e => {
    const gh = e.target.closest('.fgh');
    if (gh) {
      const box = document.getElementById(gh.getAttribute('aria-controls'));
      const open = box.classList.toggle('hidden') === false;
      gh.setAttribute('aria-expanded', String(open));
      gh.querySelector('.fpm').textContent = open ? '−' : '+';
      return;
    }
    const hb = e.target.closest('.fhide');
    if (hb) {
      const body = hb.closest('.filters').querySelector('.fbody');
      const hidden = body.classList.toggle('hidden');
      hb.textContent = hidden ? 'Show' : 'Hide';
      hb.setAttribute('aria-expanded', String(!hidden));
    }
  });
}

/* Replaces a native <select> with a styled dropdown. The <select> stays in the
   DOM as the source of truth and still emits 'change', so sorting logic is
   unchanged. */
export function enhanceSelect(sel) {
  if (!sel || sel.dataset.enhanced) return;
  sel.dataset.enhanced = '1';
  const box = document.createElement('div'); box.className = 'sortbox';
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'sortbtn';
  btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
  const lbl = document.createElement('span');
  btn.appendChild(lbl);
  btn.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>');
  const menu = document.createElement('ul');
  menu.className = 'sortmenu'; menu.setAttribute('role', 'listbox'); menu.hidden = true;
  [...sel.options].forEach(o => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option'); li.dataset.value = o.value; li.textContent = o.textContent;
    menu.appendChild(li);
  });
  box.appendChild(btn); box.appendChild(menu);
  sel.parentNode.insertBefore(box, sel.nextSibling);

  function sync() {
    lbl.textContent = sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : '';
    [...menu.children].forEach(li => li.setAttribute('aria-selected', String(li.dataset.value === sel.value)));
  }
  function open() { menu.hidden = false; box.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
  function close() {
    menu.hidden = true; box.classList.remove('open'); btn.setAttribute('aria-expanded', 'false');
    [...menu.children].forEach(li => li.classList.remove('cursor'));
  }
  function choose(v) {
    if (sel.value !== v) { sel.value = v; sync(); sel.dispatchEvent(new Event('change', { bubbles: true })); }
    close(); btn.focus();
  }
  btn.addEventListener('click', e => { e.stopPropagation(); menu.hidden ? open() : close(); });
  menu.addEventListener('click', e => { const li = e.target.closest('li'); if (li) choose(li.dataset.value); });
  document.addEventListener('click', e => { if (!box.contains(e.target)) close(); });
  box.addEventListener('keydown', e => {
    const items = [...menu.children];
    if (e.key === 'Escape') { close(); btn.focus(); return; }
    if (menu.hidden) { if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } return; }
    let i = items.findIndex(li => li.classList.contains('cursor'));
    if (i < 0) i = items.findIndex(li => li.dataset.value === sel.value);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      i = (i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(li => li.classList.remove('cursor')); items[i].classList.add('cursor');
    } else if (e.key === 'Enter') { e.preventDefault(); if (items[i]) choose(items[i].dataset.value); }
  });
  sel._syncSortUI = sync;      // let code that sets sel.value directly refresh the label
  sync();
}
