// ─── CREWS PAGES ────────────────────────────────────────────

function renderCrewsList() {
  const grid = document.getElementById('crewsGrid');
  if (!grid) return;
  const t = NDC_LANG;

  grid.innerHTML = NDC.crews.map(crew => `
    <a href="${withLang('crew.html')}&id=${crew.id}" class="crew-full-card">
      <span class="crew-tag">${crew.tag[t.current]}</span>
      <h3>${crew.name}</h3>
      <div class="crew-meta">
        <div class="crew-meta-row"><strong>${t.t('crew_coach_label')}:</strong>${crew.coach}</div>
        <div class="crew-meta-row"><strong>${t.t('crew_schedule_label')}:</strong>${crew.schedule[t.current]}</div>
      </div>
      <p>${crew.shortDesc[t.current]}</p>
      <span class="crew-link">${t.t('crew_more')}</span>
    </a>
  `).join('');
}

function renderCrewDetail() {
  const main = document.getElementById('crewDetailMain');
  if (!main) return;

  const id   = getQueryParam('id');
  const crew = NDC.crews.find(c => c.id === id);
  const t    = NDC_LANG;

  if (!crew) {
    window.location.href = withLang('showgruppen.html');
    return;
  }

  document.title = `${crew.name} | NDC Basel`;

  const achievements = crew.achievements[t.current]
    .map(a => `<li>${a}</li>`).join('');

  main.innerHTML = `
    <div class="page-hero">
      <div class="container">
        <a href="${withLang('showgruppen.html')}" class="back-link" data-i18n="back_crews">${t.t('back_crews')}</a>
        <p class="eyebrow">${crew.tag[t.current]}</p>
        <h1>${crew.name}</h1>
      </div>
    </div>

    <section class="section crew-detail reveal">
      <div class="container">
        <div class="crew-detail-grid">
          <div class="crew-detail-copy">
            <p>${crew.fullDesc[t.current]}</p>
            <a href="index.html#contact" class="btn-primary" data-i18n="studio_cta">${t.t('studio_cta')}</a>
          </div>
          <div>
            <div class="detail-meta-block">
              <span class="detail-meta-label" data-i18n="crew_coach_label">${t.t('crew_coach_label')}</span>
              <span class="detail-meta-value">${crew.coach}</span>
            </div>
            <div class="detail-meta-block">
              <span class="detail-meta-label" data-i18n="crew_schedule_label">${t.t('crew_schedule_label')}</span>
              <span class="detail-meta-value">${crew.schedule[t.current]}</span>
            </div>
            <div class="detail-meta-block">
              <span class="detail-meta-label" data-i18n="crew_achievements_label">${t.t('crew_achievements_label')}</span>
              <ul class="achievement-list">${achievements}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  // Re-run reveal observer on new elements
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

window.onLangChange = function() {
  renderCrewsList();
  renderCrewDetail();
};

renderCrewsList();
renderCrewDetail();
initPage();
