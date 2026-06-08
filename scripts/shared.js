/* =============================================================
   NDC Basel — shared.js
   • Injects <header> and <footer> into #header-root / #footer-root
   • Language via URL param ?lang=de|en (works from file://)
   • Every page calls initShared() as its last script statement
   ============================================================= */

// ── I18N ─────────────────────────────────────────────────────
const NDC_I18N = {
  de: {
    // Nav
    nav_home:'Start', nav_kurse:'Kurse', nav_showgruppen:'Showgruppen',
    nav_team:'Team', nav_stundenplan:'Stundenplan', nav_preise:'Preise',
    nav_news:'News', nav_kontakt:'Kontakt',
    cta_probestunde:'Gratis Probestunde',
    // Common
    today_badge:'Heute', read_more:'Mehr erfahren →', back:'← Zurück',
    new_badge:'NEU', showgroup_badge:'Showgruppe',
    room_blau:'Raum Blau', room_gruen:'Raum Grün',
    level_A:'Anfänger', level_M:'Mittel', level_F:'Fortgeschritten',
    level_Alle:'Alle Level', level_AM:'Anfänger/Mittel', level_MF:'Mittel/Fortg.',
    day_montag:'Montag', day_dienstag:'Dienstag', day_mittwoch:'Mittwoch',
    day_donnerstag:'Donnerstag', day_freitag:'Freitag',
    day_samstag:'Samstag', day_sonntag:'Sonntag',
    loc_reinach:'Standort Reinach',
    footer_text:'© 2026 New Dance Center Basel',
    // Index hero
    hero_since:'Basel · Seit 2001',
    hero_tagline:'Hip Hop · Afro · House · Commercial · Show',
    hero_desc:'Dein Hub für Urban Dance Styles, Foundations und High Performance Crews im Herzen der Stadt. Von Kindern bis Erwachsenen, von Einsteigern bis Showgruppen. Unsere Coaches begleiten dich persönlich auf deinem Weg.',
    cta_trial:'Gratis Probestunde', cta_sched:'Stundenplan',
    // Stats
    stat_years:'Jahre Erfahrung', stat_students:'Schüler:innen',
    stat_teams:'Show-Teams', stat_flex:'Flexibel',
    // Age-tier cards (index)
    tiers_eyebrow:'Für wen?', tiers_heading:'Für jedes Alter. Für jedes Level.',
    tier_mini_label:'Mini-Kids', tier_mini_age:'5–7 Jahre',
    tier_mini_desc:'Spielerischer Einstieg in die Welt des Tanzes.',
    tier_kids_label:'Kids', tier_kids_age:'8–10 Jahre',
    tier_kids_desc:'Grundlagen und erste Choreografien.',
    tier_teenies_label:'Teenies', tier_teenies_age:'11–16 Jahre',
    tier_teenies_desc:'Technik, Style und echtes Teamgefühl.',
    tier_adults_label:'Erwachsene', tier_adults_age:'ab 17 Jahre',
    tier_adults_desc:'Hip Hop, Commercial und mehr – auch ü20 und ü35.',
    tier_cta:'Kurse ansehen →',
    // Showgruppen teaser (index)
    sg_teaser_eyebrow:'Showgruppen', sg_teaser_heading:'Unsere Teams kämpfen um Titel.',
    sg_teaser_link:'Alle Showgruppen →',
    // Heute (index)
    heute_eyebrow:'Heute im Studio', heute_heading:'Was heute läuft.',
    heute_raum_blau:'Raum Blau', heute_raum_gruen:'Raum Grün',
    heute_empty:'Heute kein Training.', heute_empty_sub:'Wir sehen uns unter der Woche!',
    // Testimonials (index)
    testimonials_eyebrow:'Community', testimonials_heading:'Was unsere Schüler:innen sagen.',
    // CTA band (index)
    cta_band_heading:'Bereit zum Tanzen?',
    cta_band_sub:'Kostenlose Probestunde. Einfach anmelden.',
    cta_band_btn:'Probestunde buchen',
    // Kurse page
    kurse_eyebrow:'Kursangebot', kurse_heading:'Kurse & Stile.',
    kurse_sub:'Nach Altersgruppe organisiert. Echte Zeiten, echte Coaches.',
    kurse_sched_link:'Im Stundenplan →', kurse_teacher:'Coach',
    kurse_times:'Zeiten', kurse_level:'Level',
    // Showgruppen page
    sg_eyebrow:'Show-Teams', sg_heading:'Unsere Showgruppen.',
    sg_sub:'Audition-basierte Teams für ambitionierte Tänzer:innen.',
    sg_coach:'Coach', sg_training:'Training', sg_more:'Mehr erfahren →',
    sg_audition:'Aufnahme per Audition / Casting',
    sg_achievements:'Erfolge', sg_back:'← Alle Showgruppen',
    // Team page
    team_eyebrow:'Das Team', team_heading:'Unsere Coaches.',
    team_sub:'Leidenschaftliche Tänzer:innen und Pädagog:innen.',
    team_styles:'Styles', team_more:'Profil ansehen →',
    team_back:'← Alle Coaches', team_classes:'Unterricht',
    // Kurse & Stundenplan combined page
    sp_eyebrow:'Kursangebot & Wochenplan', sp_heading:'Kurse & Stundenplan.',
    sp_plan_eyebrow:'Wochenplan', sp_plan_heading:'Alle Kurse auf einen Blick.',
    sp_note:'Alle Zeiten in MEZ · Änderungen vorbehalten',
    sp_pdf:'Als PDF herunterladen',
    sp_filter_day:'Tag', sp_filter_room:'Raum', sp_filter_age:'Alter',
    sp_filter_level:'Level', sp_filter_style:'Style', sp_filter_teacher:'Coach',
    sp_filter_all:'Alle', sp_no_results:'Keine Kurse für diese Auswahl.',
    sp_reset:'Filter zurücksetzen', sp_showgroups:'Showgruppen anzeigen',
    // Preise page
    preise_eyebrow:'Preise & Abos', preise_heading:'Einfach. Flexibel. Fair.',
    preise_chf:'CHF', preise_per_month:'/Monat',
    preise_1x:'1× pro Woche', preise_2x:'2× pro Woche', preise_3x:'ab 3× pro Woche',
    preise_policy_heading:'Alle Abos',
    preise_faq_heading:'Häufige Fragen',
    preise_book_heading:'Gratis Probestunde buchen',
    preise_book_sub:'Melde dich an – wir melden uns innerhalb von 24 Stunden.',
    faq_cancel_q:'Kann ich monatlich kündigen?',
    faq_cancel_a:'Ja. Alle Abos sind monatlich kündbar, keine Mindestlaufzeit, keine Jahresverträge.',
    faq_trial_q:'Wie funktioniert die Probestunde?',
    faq_trial_a:'Melde dich per Formular oder E-Mail an. Die erste Stunde ist kostenlos und unverbindlich.',
    faq_makeup_q:'Was wenn ich eine Stunde verpasse?',
    faq_makeup_a:'Verpasste Stunden können nach Absprache in einer anderen Gruppe nachgeholt werden.',
    faq_reinach_q:'Was ist der Standort Reinach?',
    faq_reinach_a:'Der Kids/Teenie Hip Hop-Kurs am Donnerstag 16:15 findet in Reinach statt – nicht an der Zwingerstrasse. Infos auf Anfrage.',
    faq_level_q:'Was bedeuten die Level A, M, F?',
    faq_level_a:'A = Anfänger, M = Mittel, F = Fortgeschritten. Beim Einstieg einfach melden – wir helfen dir, den richtigen Kurs zu finden.',
    faq_age_q:'Gibt es ein Mindestalter?',
    faq_age_a:'Unsere jüngsten Schüler:innen sind 5 Jahre alt (Mini-Kids). Nach oben gibt es keine Grenze – unsere ü35-Klasse beweist es.',
    // News page
    news_eyebrow:'News', news_heading:'Aktuell bei NDC.',
    artikel_back:'← Alle News',
    news_more:'Weiterlesen →',
    // Kontakt page
    kontakt_eyebrow:'Kontakt', kontakt_heading:'Komm zu uns.',
    kontakt_address:'Adresse', kontakt_phone:'Telefon', kontakt_email:'E-Mail',
    // Forms
    form_name:'Name', form_name_ph:'Dein Name',
    form_email:'E-Mail', form_email_ph:'name@beispiel.ch',
    form_message:'Nachricht', form_msg_ph:'Erzähl uns von dir oder deinem Kurswunsch',
    form_interest:'Ich interessiere mich für',
    form_interest_ph:'z.B. Teenie Hip Hop, Commercial, Probestunde …',
    form_submit:'Nachricht senden', form_submit_probe:'Probestunde anfragen',
    form_success:'Danke! Wir melden uns bald.',
    // Showgruppen / Crews
    crew_coach_label:'Coach',
    crew_schedule_label:'Training',
    crew_more:'Mehr erfahren →',
    crew_achievements_label:'Erfolge',
    back_crews:'← Alle Showgruppen',
    studio_cta:'Probestunde anfragen',
    // Team / Teachers
    back_teachers:'← Alle Coaches',
    teacher_more:'Profil ansehen →',
    teacher_styles_label:'Styles',
    // Stundenplan missing keys
    stundenplan_eyebrow:'Wochenplan', stundenplan_heading:'Stundenplan.',
    stundenplan_note:'Alle Zeiten in MEZ · Änderungen vorbehalten',
    stundenplan_pdf:'Als PDF herunterladen',
    stundenplan_raum_blau:'Raum Blau', stundenplan_raum_gruen:'Raum Grün',
    no_classes_today:'Kein Kurs.',
    events_eyebrow:'Events', events_heading:'Auftritte & Workshops.',
    event_type_auftritt:'Auftritt',
    event_type_competition:'Wettbewerb',
    event_type_workshop:'Workshop',
    event_type_popup:'Pop-up',
    // Index page static keys
    title_1:'MEHR ALS', title_2:'EIN', title_3:'STUDIO.',
    cta_schedule:'Stundenplan',
    studio_eyebrow:'Das Studio',
    studio_heading:'Hip Hop, Afro & Urban Dance – mitten in Basel.',
    studio_text:'NDC Basel ist die führende Urban Dance Schule in der Region. Seit über 25 Jahren bieten wir professionelle Tanzkurse in Hip Hop, Afro Dance, Jazz, Fusion und Commercial – für Kinder ab 5 Jahren, Teens und Erwachsene. Unsere erfahrenen Coaches unterrichten in kleinen Gruppen und begleiten dich persönlich von den ersten Schritten bis auf die Wettkampfbühne.',
    studio_text2:'Keine Jahresverträge. Monatlich kündbar. Verpasste Stunden nachholen. Kostenlose Probestunde.',
    styles_eyebrow:'Was wir tanzen',
    crews_eyebrow:'Showgruppen', crews_heading:'Unsere Teams kämpfen um Titel.',
    crews_cta:'Alle Showgruppen ansehen',
    crew_detail_link:'Details →',
    preise_note:'Keine Jahresverträge · Monatlich kündbar · Probestunde kostenlos',
    preise_cta:'Gratis Probestunde buchen',
    contact_eyebrow:'Kontakt', contact_heading:'Komm zu uns.',
    contact_address_label:'Adresse', contact_phone_label:'Telefon',
    contact_email_label:'E-Mail',
    // Kurse page
    kurse_eyebrow:'Kursangebot', kurse_heading:'Kurse & Stile.',
    kurse_sub:'Nach Altersgruppe organisiert. Echte Zeiten, echte Coaches.',
    kurse_sched_link:'Zum Stundenplan →',
    // Preise page
    preise_policy_heading_label:'Abo-Konditionen',
    preise_book_cta:'Gratis Probestunde buchen',
    // Footer
    footer_address:'Zwingerstrasse 12, 4053 Basel',
  },
  en: {
    nav_home:'Home', nav_kurse:'Classes', nav_showgruppen:'Show Groups',
    nav_team:'Team', nav_stundenplan:'Schedule', nav_preise:'Pricing',
    nav_news:'News', nav_kontakt:'Contact',
    cta_probestunde:'Free Trial Class',
    today_badge:'Today', read_more:'Learn more →', back:'← Back',
    new_badge:'NEW', showgroup_badge:'Show Group',
    room_blau:'Blue Room', room_gruen:'Green Room',
    level_A:'Beginner', level_M:'Intermediate', level_F:'Advanced',
    level_Alle:'All levels', level_AM:'Beginner/Int.', level_MF:'Int./Advanced',
    day_montag:'Monday', day_dienstag:'Tuesday', day_mittwoch:'Wednesday',
    day_donnerstag:'Thursday', day_freitag:'Friday',
    day_samstag:'Saturday', day_sonntag:'Sunday',
    loc_reinach:'Reinach location',
    footer_text:'© 2026 New Dance Center Basel',
    hero_since:'Basel · Since 2001',
    hero_tagline:'Hip Hop · Afro · House · Commercial · Show',
    hero_desc:'Your hub for Urban Dance Styles, Foundations and High Performance Crews in the heart of the city. From children to adults, from beginners to show groups. Our coaches guide you personally on your journey.',
    cta_trial:'Free Trial Class', cta_sched:'Schedule',
    stat_years:'Years experience', stat_students:'Students',
    stat_teams:'Show teams', stat_flex:'Flexible',
    tiers_eyebrow:'For whom?', tiers_heading:'For every age. For every level.',
    tier_mini_label:'Mini-Kids', tier_mini_age:'5–7 years',
    tier_mini_desc:'A playful introduction to the world of dance.',
    tier_kids_label:'Kids', tier_kids_age:'8–10 years',
    tier_kids_desc:'Foundations and first choreographies.',
    tier_teenies_label:'Teens', tier_teenies_age:'11–16 years',
    tier_teenies_desc:'Technique, style and real team spirit.',
    tier_adults_label:'Adults', tier_adults_age:'from 17',
    tier_adults_desc:'Hip hop, commercial and more – incl. 20+ and 35+ groups.',
    tier_cta:'View classes →',
    sg_teaser_eyebrow:'Show Groups', sg_teaser_heading:'Our teams compete for titles.',
    sg_teaser_link:'All show groups →',
    heute_eyebrow:"Today at the Studio", heute_heading:"What's on today.",
    heute_raum_blau:'Blue Room', heute_raum_gruen:'Green Room',
    heute_empty:'No classes today.', heute_empty_sub:'See you during the week!',
    testimonials_eyebrow:'Community', testimonials_heading:'What our students say.',
    cta_band_heading:'Ready to dance?',
    cta_band_sub:'Free trial class. Just sign up.',
    cta_band_btn:'Book trial class',
    kurse_eyebrow:'Classes', kurse_heading:'Courses & Styles.',
    kurse_sub:'Organised by age group. Real times, real coaches.',
    kurse_sched_link:'In schedule →', kurse_teacher:'Coach',
    kurse_times:'Times', kurse_level:'Level',
    sg_eyebrow:'Show Teams', sg_heading:'Our Show Groups.',
    sg_sub:'Audition-based teams for ambitious dancers.',
    sg_coach:'Coach', sg_training:'Training', sg_more:'Learn more →',
    sg_audition:'Entry by audition / casting',
    sg_achievements:'Achievements', sg_back:'← All Show Groups',
    team_eyebrow:'The Team', team_heading:'Our Coaches.',
    team_sub:'Passionate dancers and educators.',
    team_styles:'Styles', team_more:'View profile →',
    team_back:'← All Coaches', team_classes:'Classes',
    sp_eyebrow:'Courses & Schedule', sp_heading:'Courses & Schedule.',
    sp_plan_eyebrow:'Weekly Timetable', sp_plan_heading:'All classes at a glance.',
    sp_note:'All times CET · Subject to change',
    sp_pdf:'Download as PDF',
    sp_filter_day:'Day', sp_filter_room:'Room', sp_filter_age:'Age',
    sp_filter_level:'Level', sp_filter_style:'Style', sp_filter_teacher:'Coach',
    sp_filter_all:'All', sp_no_results:'No classes for this selection.',
    sp_reset:'Reset filters', sp_showgroups:'Show show groups',
    preise_eyebrow:'Pricing', preise_heading:'Simple. Flexible. Fair.',
    preise_chf:'CHF', preise_per_month:'/month',
    preise_1x:'1× per week', preise_2x:'2× per week', preise_3x:'3+ per week',
    preise_policy_heading:'All memberships',
    preise_faq_heading:'FAQ',
    preise_book_heading:'Book your free trial class',
    preise_book_sub:"Sign up – we'll get back to you within 24 hours.",
    faq_cancel_q:'Can I cancel monthly?',
    faq_cancel_a:'Yes. All memberships are cancelable monthly, no minimum term, no annual contracts.',
    faq_trial_q:'How does the trial class work?',
    faq_trial_a:'Register via form or email. The first class is free and non-binding.',
    faq_makeup_q:'What if I miss a class?',
    faq_makeup_a:'Missed classes can be made up in another group by arrangement.',
    faq_reinach_q:'What is the Reinach location?',
    faq_reinach_a:'The Kids/Teenie Hip Hop on Thursday 16:15 takes place in Reinach, not at Zwingerstrasse. Details on request.',
    faq_level_q:'What do levels A, M, F mean?',
    faq_level_a:"A = Beginner, M = Intermediate, F = Advanced. Just ask us – we'll help you find the right class.",
    faq_age_q:'Is there a minimum age?',
    faq_age_a:'Our youngest students are 5 (Mini-Kids). There is no upper age limit – our 35+ class proves it.',
    news_eyebrow:'News', news_heading:'Latest from NDC.',
    news_more:'Read more →',
    artikel_back:'← All News',
    kontakt_eyebrow:'Contact', kontakt_heading:'Come to us.',
    kontakt_address:'Address', kontakt_phone:'Phone', kontakt_email:'Email',
    form_name:'Name', form_name_ph:'Your name',
    form_email:'Email', form_email_ph:'name@example.com',
    form_message:'Message', form_msg_ph:'Tell us about yourself or your desired course',
    form_interest:"I'm interested in",
    form_interest_ph:'e.g. Teen Hip Hop, Commercial, Trial class …',
    form_submit:'Send message', form_submit_probe:'Request trial class',
    form_success:"Thanks! We'll be in touch soon.",
    // Showgruppen / Crews
    crew_coach_label:'Coach',
    crew_schedule_label:'Training',
    crew_more:'Learn more →',
    crew_achievements_label:'Achievements',
    back_crews:'← All Show Groups',
    studio_cta:'Request trial class',
    // Team / Teachers
    back_teachers:'← All Coaches',
    teacher_more:'View profile →',
    teacher_styles_label:'Styles',
    // Stundenplan missing keys
    stundenplan_eyebrow:'Weekly Schedule', stundenplan_heading:'Schedule.',
    stundenplan_note:'All times CET · Subject to change',
    stundenplan_pdf:'Download as PDF',
    stundenplan_raum_blau:'Blue Room', stundenplan_raum_gruen:'Green Room',
    no_classes_today:'No class.',
    events_eyebrow:'Events', events_heading:'Performances & Workshops.',
    event_type_auftritt:'Performance',
    event_type_competition:'Competition',
    event_type_workshop:'Workshop',
    event_type_popup:'Pop-up',
    // Index page static keys
    title_1:'MEHR ALS', title_2:'EIN', title_3:'STUDIO.',
    cta_schedule:'Schedule',
    studio_eyebrow:'The Studio',
    studio_heading:'Hip Hop, Afro & Urban Dance – in the heart of Basel.',
    studio_text:'NDC Basel is the leading urban dance school in the Basel region. For over 25 years we have offered professional dance classes in Hip Hop, Afro Dance, Jazz, Fusion and Commercial – for children from age 5, teens and adults. Our experienced coaches teach small groups and guide you personally from your first steps to the competition stage.',
    studio_text2:'No annual contracts. Cancel monthly. Make up missed classes. Free trial class.',
    styles_eyebrow:'What we dance',
    crews_eyebrow:'Show Groups', crews_heading:'Our teams compete for titles.',
    crews_cta:'View all show groups',
    crew_detail_link:'Details →',
    preise_note:'No annual contracts · Cancel monthly · Free trial class',
    preise_cta:'Book free trial class',
    contact_eyebrow:'Contact', contact_heading:'Come to us.',
    contact_address_label:'Address', contact_phone_label:'Phone',
    contact_email_label:'Email',
    // Kurse page
    kurse_eyebrow:'Classes', kurse_heading:'Courses & Styles.',
    kurse_sub:'Organised by age group. Real times, real coaches.',
    kurse_sched_link:'Go to schedule →',
    // Preise page
    preise_policy_heading_label:'Membership conditions',
    preise_book_cta:'Book free trial class',
    // Footer
    footer_address:'Zwingerstrasse 12, 4053 Basel',
  },
};

// ── LANG ──────────────────────────────────────────────────────
function getLang() {
  return new URLSearchParams(window.location.search).get('lang') || 'de';
}

function t(key) {
  const l = getLang();
  const v = NDC_I18N[l] && NDC_I18N[l][key];
  return v !== undefined ? v : (NDC_I18N.de[key] !== undefined ? NDC_I18N.de[key] : key);
}

// Convenience wrapper used by page scripts
const NDC_LANG = {
  get current() { return getLang(); },
  t(key) { return t(key); },
};

// Alias so page scripts can call initPage() instead of initShared()
function initPage() { initShared(); }

// Append ?lang=X to internal hrefs; skip anchors, mailto, tel, PDFs
function withLang(href) {
  if (!href) return href;
  if (href.startsWith('#') || href.startsWith('mailto:') ||
      href.startsWith('tel:')  || href.endsWith('.pdf')) return href;
  const lang = getLang();
  const hi   = href.indexOf('#');
  const hash = hi >= 0 ? href.slice(hi) : '';
  const base = hi >= 0 ? href.slice(0, hi) : href;
  const clean = base.replace(/([?&])lang=[^&#]*/g, '').replace(/[?&]$/, '');
  const sep   = clean.includes('?') ? '&' : '?';
  return clean + sep + 'lang=' + lang + hash;
}

function langUrl(newLang) {
  const p = new URLSearchParams(window.location.search);
  p.set('lang', newLang);
  return window.location.pathname + '?' + p.toString() + window.location.hash;
}

// ── HELPERS ───────────────────────────────────────────────────
function getInitials(name) {
  if (!name) return '?';
  return name.split(/[\s&]+/).filter(Boolean).map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString(
    getLang() === 'de' ? 'de-CH' : 'en-GB',
    { day:'numeric', month:'long', year:'numeric' }
  );
}

function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function getTeacherNames(ids) {
  if (!ids || !ids.length) return '';
  return ids.map(id => {
    const tc = TEACHERS.find(x => x.id === id);
    return tc ? tc.name : id;
  }).join(' & ');
}

function getLevelLabel(level) {
  const m = { A:'level_A', M:'level_M', F:'level_F',
              Alle:'level_Alle', 'A/M':'level_AM', 'M/F':'level_MF' };
  return m[level] ? t(m[level]) : (level || '');
}

// WEEKDAY_ORDER is defined per-page (stundenplan.js uses numeric, crews use string)

function getTodayKey() {
  return ['sonntag','montag','dienstag','mittwoch','donnerstag','freitag','samstag'][new Date().getDay()];
}

// ── SCHEDULE CARD (shared by index + stundenplan) ─────────────
function renderScheduleCard(entry) {
  const lang     = getLang();
  const name     = (lang === 'en' && entry.classNameEn) ? entry.classNameEn : entry.classNameDe;
  const teachers = getTeacherNames(entry.teacherIds);
  const level    = getLevelLabel(entry.level);
  const badges   = [
    entry.isNew        ? `<span class="heute-badge neue">${t('new_badge')}</span>` : '',
    entry.isShowgroup  ? `<span class="heute-badge show">${t('showgroup_badge')}</span>` : '',
    entry.location === 'reinach' ? `<span class="heute-badge reinach">📍 Reinach</span>` : '',
  ].filter(Boolean).join('');

  return `
    <div class="heute-card ${entry.room}${entry.isShowgroup ? ' is-showgroup' : ''}" role="article">
      <div class="card-badges">${badges}</div>
      <div class="card-body">
        <div class="teacher-avatar" aria-hidden="true">${(() => {
          const firstId = entry.teacherIds && entry.teacherIds[0];
          const initials = getInitials(teachers.split(' & ')[0]);
          if (!firstId) return initials;
          return `<img src="images/teachers/${firstId}.jpg" alt="" onerror="this.parentElement.innerHTML='${initials}'">`;
        })()}</div>
        <div class="card-info">
          <span class="card-time">${entry.start}–${entry.end}</span>
          <span class="card-name">${name}</span>
          <div class="card-meta">
            ${level    ? `<span class="level-chip">${level}</span>` : ''}
            ${teachers ? `<span class="card-teacher">${teachers}</span>` : ''}
          </div>
        </div>
      </div>
    </div>`;
}

// ── HEADER ────────────────────────────────────────────────────
function buildHeader() {
  const lang = getLang();
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    ['nav_home',        'index.html'],
    ['nav_showgruppen', 'showgruppen.html'],
    ['nav_team',        'team.html'],
    ['nav_stundenplan', 'stundenplan.html'],
    ['nav_preise',      'preise.html'],
    ['nav_news',        'news.html'],
    ['nav_kontakt',     'kontakt.html'],
  ];

  const navLinks = links.map(([key, href], i) => {
    const active = page === href || (page === '' && href === 'index.html');
    return `<a href="${withLang(href)}" style="--i:${i}"${active ? ' class="active" aria-current="page"' : ''}>${t(key)}</a>`;
  }).join('');

  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="${withLang('index.html')}" class="brand" aria-label="NDC Basel">
        <img src="logos/NDC_LOGO_ENDVERSION_WEISS.png" alt="NDC Basel" class="brand-logo">
      </a>
      <button class="burger" id="burgerBtn"
        aria-label="${lang === 'de' ? 'Menü öffnen' : 'Open menu'}"
        aria-expanded="false" aria-controls="menuOverlay">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="menu-overlay" id="menuOverlay" aria-hidden="true">
    <nav class="menu-nav" aria-label="Hauptnavigation">
      ${navLinks}
    </nav>
    <div class="menu-footer">
      <button class="lang-btn" id="langToggle" aria-label="Switch language">
        ${lang === 'de' ? 'EN' : 'DE'}
      </button>
    </div>
  </div>`;
}

// ── FOOTER ────────────────────────────────────────────────────
function buildFooter() {
  const fLinks = [
    ['nav_showgruppen','showgruppen.html'],
    ['nav_stundenplan','stundenplan.html'], ['nav_preise','preise.html'],
    ['nav_news','news.html'], ['nav_kontakt','kontakt.html'],
  ].map(([key, href]) => `<a href="${withLang(href)}">${t(key)}</a>`).join('');

  return `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="${withLang('index.html')}" class="brand" aria-label="NDC Basel">
          <img src="logos/NDC_LOGO_ENDVERSION_WEISS.png" alt="NDC Basel" class="brand-logo">
        </a>
        <p>${CONTACT.address}, ${CONTACT.city}</p>
        <p><a href="tel:${CONTACT.phone.replace(/\s/g,'')}">${CONTACT.phone}</a></p>
        <p><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>
      </div>
      <nav class="footer-nav" aria-label="Footer-Navigation">${fLinks}</nav>
      <p class="footer-copy">${t('footer_text')}</p>
    </div>
  </footer>`;
}

// ── TRANSLATIONS (static data-i18n elements) ──────────────────
function applyTranslations() {
  const s = NDC_I18N[getLang()] || NDC_I18N.de;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (s[el.dataset.i18n] !== undefined) el.textContent = s[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    if (s[el.dataset.i18nPlaceholder] !== undefined) el.placeholder = s[el.dataset.i18nPlaceholder];
  });
}

// ── CONTACT FORM ──────────────────────────────────────────────
function initContactForm(formId, statusId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById(statusId);
    if (status) status.textContent = t('form_success');
    form.reset();
  });
}

// ── WORD SPLIT REVEAL ─────────────────────────────────────────
function splitWords(el) {
  const words = el.textContent.trim().split(/\s+/).filter(Boolean);
  el.innerHTML = words
    .map((w, i) => `<span class="word-wrap"><span class="word" style="--w:${i}">${w}</span></span>`)
    .join(' ');
}

// ── NUMBER COUNTER ANIMATION ──────────────────────────────────
function animateCounter(el) {
  const raw    = el.textContent.trim();
  const match  = raw.match(/^(\d+)(.*)$/);
  if (!match) return; // e.g. "∞" — skip
  const target = parseInt(match[1], 10);
  const suffix = match[2] || '';
  const dur    = Math.min(1400, 600 + target * 6);
  const start  = performance.now();

  el.classList.add('counting');

  (function tick(now) {
    const p       = Math.min((now - start) / dur, 1);
    const eased   = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  })(start);
}

// ── INIT ──────────────────────────────────────────────────────
function initShared() {
  document.documentElement.lang = getLang();

  const hRoot = document.getElementById('header-root');
  const fRoot = document.getElementById('footer-root');
  if (hRoot) hRoot.innerHTML = buildHeader();
  if (fRoot) fRoot.innerHTML = buildFooter();

  applyTranslations();

  // Fullscreen burger menu
  const burger  = document.getElementById('burgerBtn');
  const overlay = document.getElementById('menuOverlay');

  function openMenu() {
    overlay.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (burger && overlay) {
    burger.addEventListener('click', () => {
      overlay.classList.contains('open') ? closeMenu() : openMenu();
    });

    overlay.querySelectorAll('.menu-nav a').forEach(a => {
      a.addEventListener('click', () => {
        closeMenu();
        const hash = (a.getAttribute('href') || '').split('#')[1];
        if (hash) setTimeout(() => document.getElementById(hash)?.classList.add('visible'), 50);
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeMenu();
        burger.focus();
      }
    });
  }

  // Lang toggle
  document.getElementById('langToggle')?.addEventListener('click', () =>
    window.location.href = langUrl(getLang() === 'de' ? 'en' : 'de')
  );

  // Word split — run on static (non-i18n) elements before observer setup
  document.querySelectorAll('[data-split="words"]').forEach(el => splitWords(el));

  // Stagger-reveal — assign --si index to each child
  document.querySelectorAll('.stagger-reveal').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => child.style.setProperty('--si', i));
  });

  // Scroll reveal — rootMargin so elements start animating before fully in view
  const ro = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }}),
    { threshold: 0, rootMargin: '0px 0px 120px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));


  // Counter animation on stat numbers
  const counterObs = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterObs.unobserve(e.target); }}),
    { threshold: 0.5 }
  );
  document.querySelectorAll('.stat-num').forEach(el => counterObs.observe(el));

  // Immediately reveal elements already in (or just below) the viewport on load
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight + 50) {
        el.classList.add('visible');
        ro.unobserve(el);
      }
    });
  });

  // Hash-target reveal on load
  if (window.location.hash) {
    document.querySelector(window.location.hash)?.classList.add('visible');
  }
}
