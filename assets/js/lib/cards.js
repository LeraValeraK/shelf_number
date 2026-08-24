/* Shelf Number — card and icon markup shared by the libraries page, the titles
   page and the statistics section. */

import { esc } from './dom.js';

const TYPE_SVG = {
  academic: '<path d="M2 8.5 12 4l10 4.5L12 13 2 8.5Z"/><path d="M6 10.6V15c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.4"/><path d="M22 8.5v4"/>',
  flag:     '<path d="M6 3.5v17"/><path d="M6 4.5h10.5L13.5 8l3 3.5H6z"/>',
  globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/><path d="M12 3c-3.4 2.4-5.3 5.6-5.3 9s1.9 6.6 5.3 9"/><path d="M12 3c3.4 2.4 5.3 5.6 5.3 9s-1.9 6.6-5.3 9"/>',
  group:    '<circle cx="8.6" cy="8.5" r="2.7"/><path d="M3.4 18.2c0-2.9 2.3-4.8 5.2-4.8s5.2 1.9 5.2 4.8"/><circle cx="16.6" cy="9.2" r="2.1"/><path d="M15 13.6c2.6 0 4.9 1.8 4.9 4.6"/>',
  star:     '<polygon points="12 3 14.7 8.7 21 9.5 16.5 13.9 17.6 20.1 12 17.1 6.4 20.1 7.5 13.9 3 9.5 9.3 8.7"></polygon>',
  dots:     '<circle cx="12" cy="12" r="9"/><circle cx="7.6" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="16.4" cy="12" r="1.1" fill="currentColor" stroke="none"/>'
};

export function typeIcon(tcat) {
  const key = tcat === 'Academic' ? 'academic'
            : tcat === 'Public' ? 'group'
            : tcat === 'Consortium/Network' ? 'globe'
            : tcat === 'Regional or National' ? 'flag'
            : tcat === 'Special' ? 'star' : 'dots';
  return `<svg class="tico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TYPE_SVG[key]}</svg>`;
}

export function coverHTML(b) {
  return b.cover
    ? `<img class="bc-cover" src="${esc(b.cover)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="bc-cover noimg" style="display:none">${esc((b.to || '?').slice(0, 1))}</div>`
    : `<div class="bc-cover noimg">${esc((b.to || '?').slice(0, 1))}</div>`;
}

export function bookCardHTML(b, bi) {
  const meta = [b.pub, (b.plc && b.plc !== 'Unknown') ? b.plc : '', b.yr].filter(Boolean).join(', ');
  return `<a class="bookcard islink" data-nav="book" data-bi="${bi}" href="#book-${bi}">
      <div class="bc-coverwrap">${coverHTML(b)}</div>
      <h3 class="bc-title">${esc(b.te || b.to || 'Untitled')}</h3>
      ${b.au ? `<div class="bc-au">${esc(b.au)}</div>` : ''}
      ${b.ed ? `<div class="bc-au bc-role">${esc(b.ed)} <span class="role">(${b.ed.includes(',') || b.ed.includes('|') ? 'Eds.' : 'Ed.'})</span></div>` : ''}
      ${b.tr ? `<div class="bc-au bc-role">${esc(b.tr)} <span class="role">(Trans.)</span></div>` : ''}
      ${meta ? `<div class="bc-pub">${esc(meta)}</div>` : ''}
    </a>`;
}
