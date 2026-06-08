// ─── KURSE PAGE — organised by age tier ──────────────────────

const TIER_ORDER = ['mini','kids','teenies','erwachsene','u20','u35','alle'];

function renderKurse() {
  const container = document.getElementById('kurseContainer');
  if (!container) return;

  const lang = NDC_LANG.current;
  const t    = NDC_LANG;

  // Group non-showgroup schedule entries by ageTier
  const byTier = {};
  SCHEDULE.filter(e => !e.isShowgroup).forEach(e => {
    const tier = e.ageTier || 'alle';
    if (!byTier[tier]) byTier[tier] = [];
    byTier[tier].push(e);
  });

  // Sort entries within each tier by day then start time
  const DAY_ORDER = ['montag','dienstag','mittwoch','donnerstag','freitag'];
  Object.values(byTier).forEach(arr => {
    arr.sort((a, b) => {
      const da = DAY_ORDER.indexOf(a.day);
      const db = DAY_ORDER.indexOf(b.day);
      return da !== db ? da - db : a.start.localeCompare(b.start);
    });
  });

  const DAY_LABEL = {
    de: { montag:'Mo', dienstag:'Di', mittwoch:'Mi', donnerstag:'Do', freitag:'Fr' },
    en: { montag:'Mon', dienstag:'Tue', mittwoch:'Wed', donnerstag:'Thu', freitag:'Fri' },
  };

  const ROOM_LABEL = {
    de: { blau:'Raum Blau', gruen:'Raum Grün' },
    en: { blau:'Blue Room', gruen:'Green Room' },
  };

  function entryRow(e) {
    const name     = (lang === 'en' && e.classNameEn) ? e.classNameEn : e.classNameDe;
    const teachers = getTeacherNames(e.teacherIds);
    const level    = getLevelLabel(e.level);
    const day      = DAY_LABEL[lang][e.day] || e.day;
    const room     = ROOM_LABEL[lang][e.room] || e.room;
    const locBadge = e.location === 'reinach'
      ? `<span class="heute-badge reinach" style="background:rgba(251,191,36,0.1);color:#FCD34D;border:1px solid rgba(251,191,36,0.2)">📍 Reinach</span>`
      : '';
    const newBadge = e.isNew ? `<span class="heute-badge neue">${t.t('new_badge')}</span>` : '';

    return `
      <div class="heute-card ${e.room}" style="border-left-width:3px" role="article">
        <div class="card-badges">${newBadge}${locBadge}</div>
        <div class="card-body">
          <div class="card-info">
            <span class="card-time">${day} ${e.start}–${e.end} · ${room}</span>
            <span class="card-name">${name}</span>
            <div class="card-meta">
              ${level    ? `<span class="level-chip">${level}</span>` : ''}
              ${teachers ? `<span class="card-teacher">${teachers}</span>` : ''}
            </div>
          </div>
        </div>
      </div>`;
  }

  container.innerHTML = TIER_ORDER
    .filter(tierId => byTier[tierId] && byTier[tierId].length)
    .map(tierId => {
      const tierMeta = AGE_TIERS.find(x => x.id === tierId);
      const label = tierMeta
        ? (lang === 'en' ? tierMeta.label_en : tierMeta.label_de)
        : tierId;
      const age = tierMeta ? tierMeta.age : '';

      return `
        <div class="splan-day">
          <div class="splan-day-header">
            <h2 class="splan-day-name">${label}</h2>
            ${age ? `<span style="font-size:0.85rem;color:var(--muted);padding-left:0.5rem">${age}</span>` : ''}
          </div>
          <div class="heute-cards">
            ${byTier[tierId].map(entryRow).join('')}
          </div>
        </div>`;
    }).join('');
}

window.onLangChange = function() { renderKurse(); };

renderKurse();
// initPage() is called by stundenplan.js when loaded together on stundenplan.html
// Only call it here if this is the only script on the page (legacy kurse.html)
if (!document.getElementById('splanContainer')) initPage();
