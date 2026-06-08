// ─── ARTIKEL DETAIL PAGE ─────────────────────────────────────

function renderArtikel() {
  const main = document.getElementById('artikelMain');
  if (!main) return;

  const id   = getQueryParam('id');
  const post = NDC.news.find(n => n.id === id);
  const t    = NDC_LANG;

  if (!post) {
    window.location.href = withLang('news.html');
    return;
  }

  document.title = `${post.title[t.current]} | NDC Basel`;

  const date = formatDate(post.date);

  // Split content on double newlines → paragraphs
  const body = post.content[t.current]
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  const coverImg = post.image
    ? `<div class="artikel-cover"><img src="${post.image}" alt="${post.title[t.current]}"></div>`
    : '';

  main.innerHTML = `
    <div class="page-hero artikel-hero">
      <div class="container">
        <a href="${withLang('news.html')}" class="back-link">${t.t('artikel_back')}</a>
        <div class="artikel-meta">
          <span class="news-cat">${post.category[t.current]}</span>
          <span class="artikel-date">${date}</span>
        </div>
        <h1>${post.title[t.current]}</h1>
        <p class="artikel-excerpt">${post.excerpt[t.current]}</p>
      </div>
    </div>
    ${coverImg}
    <section class="section reveal">
      <div class="container artikel-body">
        ${body}
      </div>
    </section>`;

  // Re-run reveals on newly injected elements
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px 0px 120px 0px' });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

window.onLangChange = function() { renderArtikel(); };

renderArtikel();
initPage();
