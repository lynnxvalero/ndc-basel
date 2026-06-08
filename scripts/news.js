// ─── NEWS PAGE ───────────────────────────────────────────────

function renderNewsPage() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const t = NDC_LANG;

  if (!NDC.news.length) {
    grid.innerHTML = `<p style="color:var(--muted)">Keine News vorhanden.</p>`;
    return;
  }

  grid.innerHTML = NDC.news.map(post => {
    const date = formatDate(post.date, t.current);
    const img = post.image
      ? `<div class="news-card-img"><img src="${post.image}" alt="${post.title[t.current]}" loading="lazy"></div>`
      : '';
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
          <span class="news-read-more">${t.t('read_more')}</span>
        </div>
      </a>`;
  }).join('');
}

window.onLangChange = function() { renderNewsPage(); };

renderNewsPage();
initPage();
