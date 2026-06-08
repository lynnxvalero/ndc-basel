// ─── STUNDENPLAN PAGE ────────────────────────────────────────

const WEEKDAY_ORDER = [1, 2, 3, 4, 5]; // Mon–Fri

function renderStundenplan() {
  const container = document.getElementById('splanContainer');
  if (!container) return;

  const t       = NDC_LANG;
  const today   = new Date().getDay();
  const blauLbl = t.t('stundenplan_raum_blau');
  const gruenLbl= t.t('stundenplan_raum_gruen');

  container.innerHTML = WEEKDAY_ORDER.map(dayNum => {
    const dayName = DAY_NAMES[t.current][dayNum];
    const data    = NDC.schedule[dayNum];
    const isToday = dayNum === today;

    const todayPill = isToday ? `<span class="today-pill" data-i18n="today_badge">${t.t('today_badge')}</span>` : '';

    const blauCards  = data.blau.map(c => renderScheduleCard(c, 'blau')).join('') || `<p class="splan-empty" data-i18n="no_classes_today">${t.t('no_classes_today')}</p>`;
    const gruenCards = data.gruen.map(c => renderScheduleCard(c, 'gruen')).join('') || `<p class="splan-empty" data-i18n="no_classes_today">${t.t('no_classes_today')}</p>`;

    return `
      <div class="splan-day">
        <div class="splan-day-header">
          <h2 class="splan-day-name">${dayName}</h2>
          ${todayPill}
        </div>
        <div class="splan-grid">
          <div>
            <div class="splan-room-header blau">${blauLbl}</div>
            <div class="heute-cards">${blauCards}</div>
          </div>
          <div>
            <div class="splan-room-header gruen">${gruenLbl}</div>
            <div class="heute-cards">${gruenCards}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;

  const t = NDC_LANG;

  if (!NDC.events.length) {
    grid.innerHTML = `<p style="color:var(--muted);grid-column:1/-1">Keine geplanten Events.</p>`;
    return;
  }

  const eventTypeLabel = {
    auftritt:    t.t('event_type_auftritt'),
    competition: t.t('event_type_competition'),
    workshop:    t.t('event_type_workshop'),
    popup:       t.t('event_type_popup'),
  };

  grid.innerHTML = NDC.events.map(ev => {
    const d     = new Date(ev.date);
    const day   = d.getDate();
    const month = d.toLocaleDateString(t.current === 'de' ? 'de-CH' : 'en-GB', { month: 'short' }).toUpperCase();

    return `
      <div class="event-card">
        <div class="event-date-block">
          <div class="event-day">${day}</div>
          <div class="event-month">${month}</div>
        </div>
        <div class="event-body">
          <span class="event-type-badge ${ev.type}">${eventTypeLabel[ev.type] || ev.type}</span>
          <div class="event-title">${ev.title[t.current]}</div>
          <p class="event-desc">${ev.desc[t.current]}</p>
          <span class="event-location">📍 ${ev.location}</span>
        </div>
      </div>`;
  }).join('');
}

window.onLangChange = function() {
  renderStundenplan();
  renderEvents();
};

renderStundenplan();
renderEvents();
initPage();
