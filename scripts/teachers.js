// ─── TEACHERS PAGES ─────────────────────────────────────────

function renderTeachersList() {
  const grid = document.getElementById('teachersGrid');
  if (!grid) return;
  const t = NDC_LANG;

  // Featured teachers first
  const sorted = [...NDC.teachers].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  grid.innerHTML = sorted.map(teacher => {
    const initials  = getInitials(teacher.name);
    const styleTags = teacher.styles.map(s => `<span class="style-tag">${s}</span>`).join('');
    const photoSrc  = `images/teachers/${teacher.id}.jpg`;
    const photoEl   = `<img src="${photoSrc}" alt="${teacher.name}" onerror="this.parentElement.innerHTML='${initials}'">`;
    return `
      <a href="${withLang('teacher.html')}&id=${teacher.id}" class="teacher-card${teacher.featured ? ' featured' : ''}">
        <div class="teacher-card-photo" aria-hidden="true">${photoEl}</div>
        <span class="teacher-name">${teacher.name}</span>
        <span class="teacher-role">${teacher.role[t.current]}</span>
        <div class="teacher-styles">${styleTags}</div>
        <span class="teacher-link">${t.t('teacher_more')}</span>
      </a>`;
  }).join('');
}

function renderTeacherDetail() {
  const main = document.getElementById('teacherDetailMain');
  if (!main) return;

  const id      = getQueryParam('id');
  const teacher = NDC.teachers.find(tc => tc.id === id);
  const t       = NDC_LANG;

  if (!teacher) {
    window.location.href = withLang('team.html');
    return;
  }

  document.title = `${teacher.name} | NDC Basel`;

  const initials  = getInitials(teacher.name);
  const styleTags = teacher.styles.map(s => `<span class="style-tag">${s}</span>`).join('');
  const photoSrc  = `images/teachers/${teacher.id}.jpg`;
  const photoEl   = `<img src="${photoSrc}" alt="${teacher.name}" onerror="this.parentElement.innerHTML='${initials}'">`;

  main.innerHTML = `
    <div class="page-hero">
      <div class="container">
        <a href="${withLang('team.html')}" class="back-link" data-i18n="back_teachers">${t.t('back_teachers')}</a>
        <p class="eyebrow">${teacher.role[t.current]}</p>
        <h1>${teacher.name}</h1>
      </div>
    </div>

    <section class="section teacher-detail reveal">
      <div class="container">
        <div class="teacher-detail-grid">
          <div class="teacher-profile-card">
            <div class="teacher-avatar-xl" aria-hidden="true">${photoEl}${initials}</div>
            <span class="teacher-profile-name">${teacher.name}</span>
            <span class="teacher-profile-role">${teacher.role[t.current]}</span>
            <div class="teacher-styles" style="justify-content:center">${styleTags}</div>
          </div>
          <div class="teacher-detail-copy">
            <p class="teacher-bio">${teacher.bio[t.current]}</p>
            <div class="detail-meta-block">
              <span class="detail-meta-label" data-i18n="teacher_styles_label">${t.t('teacher_styles_label')}</span>
              <div class="teacher-styles" style="margin-top:0.5rem">${styleTags}</div>
            </div>
            <a href="index.html#contact" class="btn-primary" style="margin-top:2rem" data-i18n="studio_cta">${t.t('studio_cta')}</a>
          </div>
        </div>
      </div>
    </section>`;

  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

window.onLangChange = function() {
  renderTeachersList();
  renderTeacherDetail();
};

renderTeachersList();
renderTeacherDetail();
initPage();
