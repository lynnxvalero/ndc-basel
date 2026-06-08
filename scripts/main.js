// ─── INDEX.HTML — PAGE LOGIC ─────────────────────────────────
// Requires: data.js, shared.js (loaded first)

// ── HEUTE IM STUDIO ─────────────────────────────────────────

function renderHeuteSection() {
  const container = document.getElementById('heuteContainer');
  if (!container) return;

  const t             = NDC_LANG;
  const today         = new Date().getDay();
  const dayName       = DAY_NAMES[t.current][today];
  const todaySchedule = NDC.schedule[today];

  let html = `
    <div class="heute-header">
      <p class="eyebrow">${t.t('heute_eyebrow')}</p>
      <h2>${t.t('heute_heading')}</h2>
      <p class="heute-day-name">${dayName}</p>
    </div>`;

  if (!todaySchedule) {
    html += `
      <div class="heute-empty">
        <p class="heute-empty-title">${t.t('heute_empty')}</p>
        <p class="heute-empty-sub">${t.t('heute_empty_sub')}</p>
      </div>`;
  } else {
    const blauCards  = todaySchedule.blau.map(c => renderScheduleCard(c, 'blau')).join('');
    const gruenCards = todaySchedule.gruen.map(c => renderScheduleCard(c, 'gruen')).join('');

    html += `
      <div class="heute-grid">
        <div class="heute-col">
          <div class="heute-col-header blau">${t.t('heute_raum_blau')}</div>
          <div class="heute-cards">${blauCards}</div>
        </div>
        <div class="heute-col">
          <div class="heute-col-header gruen">${t.t('heute_raum_gruen')}</div>
          <div class="heute-cards">${gruenCards}</div>
        </div>
      </div>`;
  }

  container.innerHTML = html;
}

// ── PREISE ───────────────────────────────────────────────────

function renderPreise() {
  const grid = document.getElementById('preiseGrid');
  if (!grid) return;

  const t = NDC_LANG;

  grid.innerHTML = NDC.prices.map(p => {
    const ageEl = p.age ? `<p class="preis-age">${p.age}</p>` : '';

    const optionsHtml = p.options.map(opt => {
      const freqLabel = opt.freq === 1 ? t.t('preise_1x') : opt.freq === 2 ? t.t('preise_2x') : t.t('preise_3x');
      return `
        <div class="preis-option">
          <div class="preis-chf">CHF ${opt.chf}<span>${t.t('preise_per_month')}</span></div>
          <div class="preis-freq">${freqLabel}</div>
        </div>`;
    }).join('');

    return `
      <div class="preis-card${p.unlimited ? ' is-unlimited' : ''}">
        <div class="preis-label">${p.label[t.current]}</div>
        ${ageEl}
        <div class="preis-options">${optionsHtml}</div>
      </div>`;
  }).join('');
}

// ── NEWS ─────────────────────────────────────────────────────

function renderNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const t = NDC_LANG;

  grid.innerHTML = NDC.news.map(post => {
    const date = formatDate(post.date, t.current);
    const img = post.image ? `<div class="news-card-img"><img src="${post.image}" alt="${post.title[t.current]}" loading="lazy"></div>` : '';
    return `
      <a href="${withLang('artikel.html')}&id=${post.id}" class="news-card">
        ${img}
        <div class="news-card-body">
          <div class="news-card-top">
            <span class="news-cat">${post.category[t.current]}</span>
            <span class="news-date">${date}</span>
          </div>
          <h3 class="news-title">${post.title[t.current]}</h3>
          <p class="news-excerpt">${post.excerpt[t.current]}</p>
          <span class="news-more">${t.t('news_more')}</span>
        </div>
      </a>`;
  }).join('');
}

// ── CONTACT FORM ─────────────────────────────────────────────

const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = NDC_LANG.t('form_success');
    contactForm.reset();
  });
}

// ── LANG CHANGE HOOK ─────────────────────────────────────────

window.onLangChange = function() {
  renderHeuteSection();
  renderPreise();
  renderNews();
};

// ── INIT ─────────────────────────────────────────────────────

renderHeuteSection();
renderPreise();
renderNews();
initPage();
