// ─── PREISE PAGE ─────────────────────────────────────────────

function renderPreisePage() {
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

function renderPolicy() {
  const list = document.getElementById('policyList');
  if (!list) return;
  const lang = NDC_LANG.current;
  list.innerHTML = PRICING_POLICY[lang]
    .map(item => `<li>${item}</li>`)
    .join('');
}

function renderFaq() {
  const container = document.getElementById('faqList');
  if (!container) return;
  const t = NDC_LANG;

  const faqs = [
    [t.t('faq_cancel_q'),  t.t('faq_cancel_a')],
    [t.t('faq_trial_q'),   t.t('faq_trial_a')],
    [t.t('faq_makeup_q'),  t.t('faq_makeup_a')],
    [t.t('faq_reinach_q'), t.t('faq_reinach_a')],
    [t.t('faq_level_q'),   t.t('faq_level_a')],
    [t.t('faq_age_q'),     t.t('faq_age_a')],
  ];

  container.innerHTML = faqs.map(([q, a]) => `
    <div class="about-block" style="margin-bottom:1.25rem">
      <h4 style="font-family:var(--font-display);font-size:1rem;text-transform:uppercase;
                 letter-spacing:-0.01em;color:var(--text);margin-bottom:0.4rem">${q}</h4>
      <p style="font-size:0.875rem;color:var(--muted);line-height:1.7">${a}</p>
    </div>`).join('');
}

window.onLangChange = function() {
  renderPreisePage();
  renderPolicy();
  renderFaq();
};

renderPreisePage();
renderPolicy();
renderFaq();
initContactForm('probeForm', 'probeStatus');
initPage();
