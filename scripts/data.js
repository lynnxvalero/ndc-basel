/* =============================================================
   NDC Basel — Single Source of Truth
   Edit ONLY this file to change classes, teachers, pricing, news.
   ============================================================= */

// ── AGE TIERS ─────────────────────────────────────────────────
const AGE_TIERS = [
  { id:'mini',        label_de:'Mini-Kids',   label_en:'Mini-Kids',  age:'5–7 Jahre'   },
  { id:'kids',        label_de:'Kids',         label_en:'Kids',       age:'8–10 Jahre'  },
  { id:'teenies',     label_de:'Teenies',      label_en:'Teens',      age:'11–16 Jahre' },
  { id:'erwachsene',  label_de:'Erwachsene',   label_en:'Adults',     age:'ab 17 Jahre' },
  { id:'u20',         label_de:'ü20',           label_en:'20+',        age:'ab 20 Jahre' },
  { id:'u35',         label_de:'ü35',           label_en:'35+',        age:'ab 35 Jahre' },
  { id:'alle',        label_de:'Alle',          label_en:'All ages',   age:'alle Alter'  },
];

// ── STYLES ────────────────────────────────────────────────────
// Do NOT reduce or merge styles. Each is a separate kurse.html section.
const STYLES = [
  {
    id:'hiphop',
    name_de:'Hip Hop', name_en:'Hip Hop',
    blurb_de:'Von Mini-Kids bis Erwachsene ü35 – Hip Hop ist das Herzstück des NDC Basel. Grooves, Cyphers und echte Street-Culture für alle Level.',
    blurb_en:'From mini-kids to adults 35+ – hip hop is the heart of NDC Basel. Grooves, cyphers and real street culture for all levels.',
    seo_de:'Hip Hop Kurse Basel – NDC New Dance Center',
  },
  {
    id:'commercial',
    name_de:'Commercial', name_en:'Commercial',
    blurb_de:'Choreografien für die grosse Bühne. Charts, Castings und Showproduktionen – Commercial Dance in Basel auf Mittel- und Fortgeschrittenen-Niveau.',
    blurb_en:'Choreography for the big stage. Charts, castings and show productions – commercial dance at intermediate and advanced level.',
    seo_de:'Commercial Dance Kurse Basel',
  },
  {
    id:'commercial-perf',
    name_de:'Commercial/Performance', name_en:'Commercial/Performance',
    blurb_de:'Neu bei NDC: Kombination aus Commercial Dance und Performance-Training für alle, die auftreten wollen.',
    blurb_en:'New at NDC: A blend of commercial dance and performance training for those who want to perform.',
    seo_de:'Commercial Performance Dance Basel',
  },
  {
    id:'hiphop-fusion',
    name_de:'Hip Hop Fusion', name_en:'Hip Hop Fusion',
    blurb_de:'Hip Hop trifft auf andere Stile – flüssige Bewegungen, kreative Kombinationen, einzigartiger Ausdruck für die Mittelstufe.',
    blurb_en:'Hip hop meets other styles – fluid movement, creative combinations, unique expression for intermediate dancers.',
    seo_de:'Hip Hop Fusion Kurs Basel',
  },
  {
    id:'lyrical-contempo',
    name_de:'Lyrical/Contempo', name_en:'Lyrical/Contemporary',
    blurb_de:'Lyrical und Contemporary Dance verbinden Technik und Emotionalität. Offen für alle Altersgruppen.',
    blurb_en:'Lyrical and contemporary dance combine technique and emotion. Open to all age groups.',
    seo_de:'Contemporary Dance Basel Lyrical Contempo',
  },
  {
    id:'breakdance',
    name_de:'Breakdance', name_en:'Breakdance',
    blurb_de:'B-Boy/B-Girl-Kultur, Footwork und Powermoves – Breakdance in Basel auf Anfänger- und Fortgeschrittenen-Niveau.',
    blurb_en:'B-boy/B-girl culture, footwork and power moves – breakdance in Basel for beginners and all levels.',
    seo_de:'Breakdance Kurs Basel',
  },
  {
    id:'zumba',
    name_de:'Zumba', name_en:'Zumba',
    blurb_de:'Lateinamerikanische Rhythmen, Fitnessfreude und Gruppenenergie – für alle, die sich bewegen und Spass haben wollen.',
    blurb_en:'Latin rhythms, fitness fun and group energy – for everyone who wants to move and have fun.',
    seo_de:'Zumba Basel',
  },
  {
    id:'strong-nation',
    name_de:'Strong Nation', name_en:'Strong Nation',
    blurb_de:'Hochintensives Tanzfitness-Training, das Muskeln aufbaut und die Ausdauer steigert. Für alle Fitnesslevels.',
    blurb_en:'High-intensity dance fitness training that builds muscle and endurance. For all fitness levels.',
    seo_de:'Strong Nation Basel Tanzfitness',
  },
  {
    id:'afro',
    name_de:'Afro Dance', name_en:'Afro Dance',
    blurb_de:'Energie, Rhythmus und kultureller Ausdruck aus Afrika – Afro Dance in Basel auf mittlerem Niveau.',
    blurb_en:'Energy, rhythm and cultural expression from Africa – Afro Dance in Basel at intermediate level.',
    seo_de:'Afro Dance Basel',
  },
  {
    id:'high-heels',
    name_de:'High Heels', name_en:'High Heels',
    blurb_de:'Attitude, Stilsicherheit und Stärke – High Heels Dance für Erwachsene auf mittlerem Niveau.',
    blurb_en:'Attitude, style confidence and strength – High Heels dance for adults at intermediate level.',
    seo_de:'High Heels Dance Klasse Basel',
  },
  {
    id:'kpop',
    name_de:'K-POP', name_en:'K-POP',
    blurb_de:'Koreanischer Pop-Dance für alle Levels – präzise Choreografien und die lebendige Energie des K-Pop.',
    blurb_en:'Korean pop dance for all levels – precise choreographies and the vibrant energy of K-pop.',
    seo_de:'K-POP Tanzkurs Basel',
  },
  {
    id:'hiphop-commercial',
    name_de:'Hip Hop/Commercial', name_en:'Hip Hop/Commercial',
    blurb_de:'Street-Culture trifft Showchoreografie – Hip Hop/Commercial für Mittel- bis Fortgeschrittene.',
    blurb_en:'Street culture meets show choreography – Hip Hop/Commercial for intermediate to advanced dancers.',
    seo_de:'Hip Hop Commercial Basel',
  },
  {
    id:'hiphop-choreo',
    name_de:'Hip Hop Choreography', name_en:'Hip Hop Choreography',
    blurb_de:'Gruppenarbeit, Formationen und Bühnenpräsenz – Hip Hop Choreography für Mittel- bis Fortgeschrittene.',
    blurb_en:'Group work, formations and stage presence – Hip Hop Choreography for intermediate to advanced dancers.',
    seo_de:'Hip Hop Choreografie Basel',
  },
  {
    id:'funky-jazz',
    name_de:'Funky Jazz', name_en:'Funky Jazz',
    blurb_de:'Groovy, energiegeladen und ausdrucksstark – Funky Jazz in Basel auf mittlerem Niveau für Erwachsene.',
    blurb_en:'Groovy, energetic and expressive – Funky Jazz in Basel at intermediate level for adults.',
    seo_de:'Funky Jazz Kurs Basel',
  },
  {
    id:'jazz',
    name_de:'Jazz', name_en:'Jazz',
    blurb_de:'Neu bei NDC: Jazzdance in Basel auf Anfänger-Niveau – technisch fundiert und ausdrucksstark.',
    blurb_en:'New at NDC: Jazz dance in Basel at beginner level – technically grounded and expressive.',
    seo_de:'Jazz Dance Kurs Basel',
  },
  {
    id:'masterclasses',
    name_de:'Masterclasses ü35', name_en:'Masterclasses 35+',
    blurb_de:'Neu bei NDC: Exklusive Masterclasses für Tänzer:innen ab 35 auf mittlerem Niveau.',
    blurb_en:'New at NDC: Exclusive masterclasses for dancers 35+ at intermediate level.',
    seo_de:'Tanzklasse ab 35 Basel Masterclass',
  },
  {
    id:'showgroup',
    name_de:'Showgruppe', name_en:'Show Group',
    blurb_de:'Audition-basierte Showgruppen für ambitionierte Tänzer:innen – Wettbewerbe, Shows, Produktionen.',
    blurb_en:'Audition-based show groups for ambitious dancers – competitions, shows, productions.',
    seo_de:'Showgruppe Tanzstudio Basel',
  },
];

// ── TEACHERS ──────────────────────────────────────────────────
const TEACHERS = [
  {
    id:'jasmin', name:'Jasmin Weder Wessels',
    role_de:'Gründerin & Head Coach', role_en:'Founder & Head Coach',
    styles:['hiphop','funky-jazz','showgroup'],
    bio_de:'Jasmin ist die Gründerin und das Herz des NDC Basel. Seit über 25 Jahren prägt sie die urbane Tanzszene und coacht mehrere Showgruppen sowie die ü35-Klasse.',
    bio_en:'Jasmin is the founder and heart of NDC Basel. For over 25 years she has shaped the urban dance scene, coaching multiple show groups and the 35+ class.',
    featured:true,
  },
  {
    id:'kingston', name:'Kingston',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Kingston unterrichtet Teenie Hip Hop und bringt authentisches Street-Feeling in jede Stunde.',
    bio_en:'Kingston teaches Teenie Hip Hop and brings authentic street feeling to every class.',
    featured:false,
  },
  {
    id:'sascha', name:'Sascha',
    role_de:'Coach', role_en:'Coach',
    styles:['commercial-perf'],
    bio_de:'Sascha unterrichtet den neuen Commercial/Performance-Kurs mit Fokus auf Bühnenwirkung und Ausdruck.',
    bio_en:'Sascha teaches the new Commercial/Performance course with a focus on stage impact and expression.',
    featured:false,
  },
  {
    id:'kevin-bannier', name:'Kevin Bannier',
    role_de:'Coach', role_en:'Coach',
    styles:['commercial'],
    bio_de:'Kevin unterrichtet Commercial auf Fortgeschrittenen-Niveau. Seine präzisen Choreografien machen ihn zu einem gefragten Coach.',
    bio_en:'Kevin teaches commercial at advanced level. His precise choreographies make him a sought-after coach.',
    featured:true,
  },
  {
    id:'robyn', name:'Robyn',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop-fusion'],
    bio_de:'Robyn verbindet Hip Hop mit anderen Stilen zu einem einzigartigen Fusion-Erlebnis für die Mittelstufe.',
    bio_en:'Robyn blends hip hop with other styles into a unique fusion experience at intermediate level.',
    featured:false,
  },
  {
    id:'jeannine', name:'Jeannine',
    role_de:'Coach & Showgruppen-Leiterin', role_en:'Coach & Show Group Director',
    styles:['lyrical-contempo','showgroup'],
    bio_de:'Jeannine vereint Contemporary, Lyrical und Show in ihrem Unterricht und leitet die Showgruppe Soulsplits.',
    bio_en:'Jeannine brings together contemporary, lyrical and show in her teaching, and directs show group Soulsplits.',
    featured:true,
  },
  {
    id:'alicia', name:'Alicia',
    role_de:'Kids Coach', role_en:'Kids Coach',
    styles:['hiphop'],
    bio_de:'Alicia bringt Mini-Kids und Kids mit viel Geduld und Spass an den Tanz heran.',
    bio_en:'Alicia introduces mini-kids and kids to dance with great patience and fun.',
    featured:false,
  },
  {
    id:'lina', name:'Lina',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Lina unterrichtet den neuen Hip Hop ü20-Kurs auf Anfänger-Niveau.',
    bio_en:'Lina teaches the new Hip Hop 20+ course at beginner level.',
    featured:false,
  },
  {
    id:'jana', name:'Jana',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Jana vermittelt Teenie Hip Hop mit Fokus auf Fundamentals und persönlichem Ausdruck.',
    bio_en:'Jana teaches Teenie Hip Hop with a focus on fundamentals and personal expression.',
    featured:false,
  },
  {
    id:'alessia', name:'Alessia',
    role_de:'Coach', role_en:'Coach',
    styles:['kpop'],
    bio_de:'Alessia bringt K-Pop-Choreografien zu NDC Basel und begeistert eine wachsende Community.',
    bio_en:'Alessia brings K-pop choreographies to NDC Basel, exciting a growing community.',
    featured:false,
  },
  {
    id:'luca', name:'Luca',
    role_de:'Coach & Showgruppen-Leiter', role_en:'Coach & Show Group Director',
    styles:['hiphop-commercial','showgroup'],
    bio_de:'Luca coacht Hip Hop und Commercial und leitet die Showgruppe Shaydee Babes.',
    bio_en:'Luca coaches hip hop and commercial, and leads show group Shaydee Babes.',
    featured:true,
  },
  {
    id:'kate', name:'Kate',
    role_de:'Kids Coach', role_en:'Kids Coach',
    styles:['hiphop'],
    bio_de:'Kate unterrichtet den neuen Kids Hip Hop-Kurs auf Anfänger-Niveau mit viel Energie.',
    bio_en:'Kate teaches the new Kids Hip Hop course at beginner level with lots of energy.',
    featured:false,
  },
  {
    id:'jessica', name:'Jessica',
    role_de:'Kids Coach', role_en:'Kids Coach',
    styles:['hiphop'],
    bio_de:'Jessica unterrichtet Kids Hip Hop im Duo mit Océane.',
    bio_en:'Jessica teaches Kids Hip Hop in a duo with Océane.',
    featured:false,
  },
  {
    id:'oceane', name:'Océane',
    role_de:'Kids Coach', role_en:'Kids Coach',
    styles:['hiphop'],
    bio_de:'Océane unterrichtet Kids Hip Hop gemeinsam mit Jessica.',
    bio_en:'Océane teaches Kids Hip Hop together with Jessica.',
    featured:false,
  },
  {
    id:'joel', name:'Joel',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Joel unterrichtet Teenie Hip Hop mit frischer Energie.',
    bio_en:'Joel teaches Teenie Hip Hop with fresh energy.',
    featured:false,
  },
  {
    id:'clarice', name:'Clarice',
    role_de:'Coach', role_en:'Coach',
    styles:['zumba'],
    bio_de:'Clarice macht Zumba zum energiegeladenen Highlight der Woche.',
    bio_en:'Clarice makes Zumba the energetic highlight of the week.',
    featured:false,
  },
  {
    id:'lorena', name:'Lorena',
    role_de:'Coach', role_en:'Coach',
    styles:['breakdance'],
    bio_de:'Lorena unterrichtet den neuen Breakdance-Kurs auf Anfänger-Niveau.',
    bio_en:'Lorena teaches the new Breakdance course at beginner level.',
    featured:false,
  },
  {
    id:'kevin-somlo', name:'Kevin Somlo',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Kevin unterrichtet Teenie Hip Hop und Hip Hop ü20 mit fundiertem Wissen und Energie.',
    bio_en:'Kevin teaches Teenie Hip Hop and Hip Hop 20+ with solid knowledge and energy.',
    featured:false,
  },
  {
    id:'enza', name:'Enza',
    role_de:'Coach', role_en:'Coach',
    styles:['strong-nation'],
    bio_de:'Enza leitet Strong Nation – ein intensives Tanzfitness-Training für alle.',
    bio_en:'Enza leads Strong Nation – an intensive dance fitness workout for everyone.',
    featured:false,
  },
  {
    id:'soumaya', name:'Soumaya',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop'],
    bio_de:'Soumaya coacht Teenies auf Anfänger- und Mittelstufe mit Leidenschaft.',
    bio_en:'Soumaya coaches teens at beginner and intermediate level with passion.',
    featured:false,
  },
  {
    id:'valentina', name:'Valentina',
    role_de:'Coach', role_en:'Coach',
    styles:['afro'],
    bio_de:'Valentinas Leidenschaft für Afro Dance ist ansteckend – Energie und Rhythmus pur.',
    bio_en:"Valentina's passion for Afro Dance is contagious – pure energy and rhythm.",
    featured:false,
  },
  {
    id:'clarissa', name:'Clarissa',
    role_de:'Coach', role_en:'Coach',
    styles:['high-heels'],
    bio_de:'Clarissa unterrichtet High Heels Dance mit Attitude und Stilsicherheit.',
    bio_en:'Clarissa teaches High Heels dance with attitude and style confidence.',
    featured:false,
  },
  {
    id:'arvin', name:'Arvin',
    role_de:'Coach', role_en:'Coach',
    styles:['hiphop-choreo'],
    bio_de:'Arvin spezialisiert sich auf Hip Hop Choreography mit Fokus auf Gruppenarbeit und Bühnenpräsenz.',
    bio_en:'Arvin specialises in hip hop choreography with a focus on group work and stage presence.',
    featured:false,
  },
  {
    id:'mentor', name:'Mentor',
    role_de:'Coach', role_en:'Coach',
    styles:['breakdance'],
    bio_de:'Mentor bringt jahrelange Breakdance-Erfahrung und echte Battle-Culture in den Unterricht.',
    bio_en:'Mentor brings years of breakdance experience and real battle culture to class.',
    featured:false,
  },
  {
    id:'moe', name:'Moé',
    role_de:'Kids Coach', role_en:'Kids Coach',
    styles:['hiphop'],
    bio_de:'Moé unterrichtet Kids Hip Hop gemeinsam mit Jasmin.',
    bio_en:'Moé teaches Kids Hip Hop together with Jasmin.',
    featured:false,
  },
  {
    id:'ana', name:'Ana',
    role_de:'Coach', role_en:'Coach',
    styles:['jazz'],
    bio_de:'Ana bringt frischen Jazz-Wind zu NDC Basel – technisch fundiert und ausdrucksstark.',
    bio_en:'Ana brings a fresh jazz wind to NDC Basel – technically grounded and expressive.',
    featured:false,
  },
];

// ── ROOMS ─────────────────────────────────────────────────────
const ROOMS = [
  { id:'blau',  label_de:'Raum Blau',  label_en:'Blue Room'  },
  { id:'gruen', label_de:'Raum Grün',  label_en:'Green Room' },
];

// ── SCHEDULE ──────────────────────────────────────────────────
// teacherIds: array — supports co-teachers (e.g. ['jessica','oceane'])
// ageTier:    null for showgroup slots (no age restriction)
// level:      null for showgroup slots
// showgroupId: set when isShowgroup:true — references SHOWGROUPS[].id
// location:   'basel' | 'reinach'
const SCHEDULE = [

  // ── MONTAG ────────────────────────────────────────────────
  { day:'montag', room:'blau',  start:'17:30', end:'18:30',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'M',
    teacherIds:['kingston'],   isNew:false, isShowgroup:false, location:'basel' },

  { day:'montag', room:'blau',  start:'18:30', end:'19:30',
    classNameDe:'Commercial/Performance',  classNameEn:'Commercial/Performance',
    styleId:'commercial-perf', ageTier:'erwachsene', level:'M',
    teacherIds:['sascha'],     isNew:true,  isShowgroup:false, location:'basel' },

  { day:'montag', room:'blau',  start:'19:30', end:'20:45',
    classNameDe:'Commercial',              classNameEn:'Commercial',
    styleId:'commercial',     ageTier:'erwachsene', level:'F',
    teacherIds:['kevin-bannier'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'montag', room:'blau',  start:'20:45', end:'22:00',
    classNameDe:'Showgruppe Tremendous',   classNameEn:'Show Group Tremendous',
    styleId:'showgroup',      ageTier:null,         level:null,
    teacherIds:['jasmin'],    isNew:false, isShowgroup:true,  showgroupId:'tremendous', location:'basel' },

  { day:'montag', room:'gruen', start:'12:15', end:'13:05',
    classNameDe:'Zumba',                   classNameEn:'Zumba',
    styleId:'zumba',          ageTier:'alle',       level:'Alle',
    teacherIds:['clarice'],   isNew:false, isShowgroup:false, location:'basel' },

  { day:'montag', room:'gruen', start:'18:45', end:'19:45',
    classNameDe:'Breakdance',              classNameEn:'Breakdance',
    styleId:'breakdance',     ageTier:'alle',       level:'A',
    teacherIds:['lorena'],    isNew:true,  isShowgroup:false, location:'basel' },

  { day:'montag', room:'gruen', start:'19:45', end:'20:45',
    classNameDe:'Hip Hop ü20',             classNameEn:'Hip Hop 20+',
    styleId:'hiphop',         ageTier:'u20',        level:'A/M',
    teacherIds:['kevin-somlo'], isNew:false, isShowgroup:false, location:'basel' },

  // ── DIENSTAG ──────────────────────────────────────────────
  { day:'dienstag', room:'blau',  start:'19:00', end:'20:00',
    classNameDe:'Hip Hop Fusion',          classNameEn:'Hip Hop Fusion',
    styleId:'hiphop-fusion',  ageTier:'erwachsene', level:'M',
    teacherIds:['robyn'],     isNew:false, isShowgroup:false, location:'basel' },

  { day:'dienstag', room:'blau',  start:'20:00', end:'21:15',
    classNameDe:'Lyrical/Contempo',        classNameEn:'Lyrical/Contemporary',
    styleId:'lyrical-contempo', ageTier:'alle',     level:'Alle',
    teacherIds:['jeannine'],  isNew:false, isShowgroup:false, location:'basel' },

  { day:'dienstag', room:'gruen', start:'18:15', end:'19:15',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'A/M',
    teacherIds:['kevin-somlo'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'dienstag', room:'gruen', start:'19:15', end:'20:15',
    classNameDe:'Strong Nation',           classNameEn:'Strong Nation',
    styleId:'strong-nation',  ageTier:'alle',       level:'Alle',
    teacherIds:['enza'],      isNew:false, isShowgroup:false, location:'basel' },

  { day:'dienstag', room:'gruen', start:'20:15', end:'21:15',
    classNameDe:'Hip Hop ü35',             classNameEn:'Hip Hop 35+',
    styleId:'hiphop',         ageTier:'u35',        level:'Alle',
    teacherIds:['jasmin'],    isNew:false, isShowgroup:false, location:'basel' },

  // ── MITTWOCH ──────────────────────────────────────────────
  { day:'mittwoch', room:'blau',  start:'16:00', end:'16:50',
    classNameDe:'Mini Kids Hip Hop',       classNameEn:'Mini Kids Hip Hop',
    styleId:'hiphop',         ageTier:'mini',       level:'Alle',
    teacherIds:['alicia'],    isNew:false, isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'blau',  start:'17:00', end:'18:00',
    classNameDe:'Kids Hip Hop',            classNameEn:'Kids Hip Hop',
    styleId:'hiphop',         ageTier:'kids',       level:'M',
    teacherIds:['alicia'],    isNew:false, isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'blau',  start:'18:00', end:'19:15',
    classNameDe:'Commercial',              classNameEn:'Commercial',
    styleId:'commercial',     ageTier:'erwachsene', level:'F',
    teacherIds:['kevin-bannier'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'blau',  start:'19:15', end:'20:15',
    classNameDe:'Hip Hop ü20',             classNameEn:'Hip Hop 20+',
    styleId:'hiphop',         ageTier:'u20',        level:'A',
    teacherIds:['lina'],      isNew:true,  isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'blau',  start:'20:15', end:'22:00',
    classNameDe:'Showgruppe Soulsplits',   classNameEn:'Show Group Soulsplits',
    styleId:'showgroup',      ageTier:null,         level:null,
    teacherIds:['jeannine'],  isNew:false, isShowgroup:true,  showgroupId:'soulsplits', location:'basel' },

  { day:'mittwoch', room:'gruen', start:'17:00', end:'18:00',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'A',
    teacherIds:['soumaya'],   isNew:true,  isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'gruen', start:'18:00', end:'19:00',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'M',
    teacherIds:['soumaya'],   isNew:false, isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'gruen', start:'19:15', end:'20:15',
    classNameDe:'Afro',                    classNameEn:'Afro Dance',
    styleId:'afro',           ageTier:'alle',       level:'M',
    teacherIds:['valentina'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'mittwoch', room:'gruen', start:'20:15', end:'21:15',
    classNameDe:'High Heels',              classNameEn:'High Heels',
    styleId:'high-heels',     ageTier:'erwachsene', level:'M',
    teacherIds:['clarissa'],  isNew:false, isShowgroup:false, location:'basel' },

  // ── DONNERSTAG ────────────────────────────────────────────
  { day:'donnerstag', room:'blau',  start:'17:30', end:'18:30',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'M',
    teacherIds:['jana'],      isNew:false, isShowgroup:false, location:'basel' },

  { day:'donnerstag', room:'blau',  start:'18:30', end:'19:30',
    classNameDe:'K-POP',                   classNameEn:'K-POP',
    styleId:'kpop',           ageTier:'alle',       level:'Alle',
    teacherIds:['alessia'],   isNew:false, isShowgroup:false, location:'basel' },

  { day:'donnerstag', room:'blau',  start:'19:30', end:'20:30',
    classNameDe:'Hip Hop/Commercial',      classNameEn:'Hip Hop/Commercial',
    styleId:'hiphop-commercial', ageTier:'erwachsene', level:'M/F',
    teacherIds:['luca'],      isNew:false, isShowgroup:false, location:'basel' },

  { day:'donnerstag', room:'blau',  start:'20:30', end:'22:00',
    classNameDe:'Showgruppe Shaydee Babes',classNameEn:'Show Group Shaydee Babes',
    styleId:'showgroup',      ageTier:null,         level:null,
    teacherIds:['luca'],      isNew:false, isShowgroup:true,  showgroupId:'shaydee-babes', location:'basel' },

  { day:'donnerstag', room:'gruen', start:'16:15', end:'17:15',
    classNameDe:'Kids/Teenie Hip Hop',     classNameEn:'Kids/Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'kids',       level:'M',
    teacherIds:['jasmin'],    isNew:false, isShowgroup:false, location:'reinach' },

  { day:'donnerstag', room:'gruen', start:'18:30', end:'19:30',
    classNameDe:'Hip Hop Choreography',    classNameEn:'Hip Hop Choreography',
    styleId:'hiphop-choreo',  ageTier:'erwachsene', level:'M/F',
    teacherIds:['arvin'],     isNew:false, isShowgroup:false, location:'basel' },

  { day:'donnerstag', room:'gruen', start:'19:30', end:'20:30',
    classNameDe:'Masterclasses ü35',       classNameEn:'Masterclasses 35+',
    styleId:'masterclasses',  ageTier:'u35',        level:'M',
    teacherIds:[],            isNew:true,  isShowgroup:false, location:'basel' },

  { day:'donnerstag', room:'gruen', start:'20:45', end:'22:00',
    classNameDe:'Breakdance',              classNameEn:'Breakdance',
    styleId:'breakdance',     ageTier:'alle',       level:'Alle',
    teacherIds:['mentor'],    isNew:false, isShowgroup:false, location:'basel' },

  // ── FREITAG ───────────────────────────────────────────────
  { day:'freitag', room:'blau',  start:'16:40', end:'17:40',
    classNameDe:'Kids Hip Hop',            classNameEn:'Kids Hip Hop',
    styleId:'hiphop',         ageTier:'kids',       level:'A',
    teacherIds:['kate'],      isNew:true,  isShowgroup:false, location:'basel' },

  { day:'freitag', room:'blau',  start:'17:40', end:'18:40',
    classNameDe:'Kids Hip Hop',            classNameEn:'Kids Hip Hop',
    styleId:'hiphop',         ageTier:'kids',       level:'M',
    teacherIds:['jessica','oceane'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'freitag', room:'blau',  start:'18:45', end:'19:45',
    classNameDe:'Teenie Hip Hop',          classNameEn:'Teenie Hip Hop',
    styleId:'hiphop',         ageTier:'teenies',    level:'M',
    teacherIds:['joel'],      isNew:false, isShowgroup:false, location:'basel' },

  { day:'freitag', room:'blau',  start:'20:15', end:'21:30',
    classNameDe:'Funky Jazz',              classNameEn:'Funky Jazz',
    styleId:'funky-jazz',     ageTier:'erwachsene', level:'M',
    teacherIds:['jasmin'],    isNew:false, isShowgroup:false, location:'basel' },

  { day:'freitag', room:'gruen', start:'17:00', end:'18:00',
    classNameDe:'Kids Hip Hop',            classNameEn:'Kids Hip Hop',
    styleId:'hiphop',         ageTier:'kids',       level:'M',
    teacherIds:['moe','jasmin'], isNew:false, isShowgroup:false, location:'basel' },

  { day:'freitag', room:'gruen', start:'18:00', end:'19:00',
    classNameDe:'Showgruppe Beastie Girlz',classNameEn:'Show Group Beastie Girlz',
    styleId:'showgroup',      ageTier:null,         level:null,
    teacherIds:['jasmin'],    isNew:false, isShowgroup:true,  showgroupId:'beastie-girlz', location:'basel' },

  { day:'freitag', room:'gruen', start:'19:00', end:'20:00',
    classNameDe:'Jazz',                    classNameEn:'Jazz',
    styleId:'jazz',           ageTier:'alle',       level:'A',
    teacherIds:['ana'],       isNew:true,  isShowgroup:false, location:'basel' },
];

// ── SHOWGROUPS ────────────────────────────────────────────────
// ⚠️  Project X and UrbanSteps appear in existing site copy but not in the
//     current Stundenplan. Marked status:'unconfirmed'. Set to 'active' (or
//     remove) once confirmed with studio.
const SHOWGROUPS = [
  {
    id:'tremendous', name:'Tremendous',
    teacherId:'jasmin',
    tag_de:'Competition', tag_en:'Competition',
    blurb_de:'Wettkampf-Showgruppe mit Fokus auf Präzision, Ausdruck und nationale Meistertitel.',
    blurb_en:'Competition show group focused on precision, expression and national championship titles.',
    status:'active',
  },
  {
    id:'soulsplits', name:'Soulsplits',
    teacherId:'jeannine',
    tag_de:'Showgruppe', tag_en:'Show Group',
    blurb_de:'Lyrical und Contemporary – Soulsplits erzählt Geschichten durch Bewegung und Ausdruck.',
    blurb_en:'Lyrical and contemporary – Soulsplits tells stories through movement and expression.',
    status:'active',
  },
  {
    id:'shaydee-babes', name:'Shaydee Babes',
    teacherId:'luca',
    tag_de:'Crew', tag_en:'Crew',
    blurb_de:'Hip Hop und Commercial mit eigenem unverwechselbarem Style – die Shaydee Babes machen Eindruck.',
    blurb_en:'Hip hop and commercial with their own distinctive style – the Shaydee Babes make an impression.',
    status:'active',
  },
  {
    id:'beastie-girlz', name:'Beastie Girlz',
    teacherId:'jasmin',
    tag_de:'Girls Crew', tag_en:'Girls Crew',
    blurb_de:'Power, Attitude und Teamgeist – fierce, furious und fabulous.',
    blurb_en:'Power, attitude and team spirit – fierce, furious and fabulous.',
    status:'active',
  },
  {
    id:'different', name:'Different',
    teacherId:null,
    tag_de:'Competition', tag_en:'Competition',
    blurb_de:'Wettkampf-Crew mit starkem Willen – Schweizer Meister 2025 (Adults 2).',
    blurb_en:'Competition crew with fierce drive – Swiss Champions 2025 (Adults 2).',
    status:'active',
  },
  {
    id:'serotonez', name:'Serotonez Entertainment',
    teacherId:null,
    tag_de:'Musical', tag_en:'Musical',
    blurb_de:'Musik, Tanz und Theater vereint – Serotonez bringt grosse Musicalproduktionen auf die Bühne.',
    blurb_en:'Music, dance and theatre combined – Serotonez brings big musical productions to the stage.',
    status:'active',
  },
  {
    id:'project-x', name:'Project X',
    teacherId:'jasmin',
    tag_de:'Formation Kids', tag_en:'Formation Kids',
    blurb_de:'Kids-Showgruppe für 7–12-Jährige – IDO Schweizer Meister 2025 und Weltmeisterschaft-Teilnehmer.',
    blurb_en:'Kids show group for ages 7–12 – IDO Swiss Champions 2025 and World Championship participants.',
    status:'active',
  },
  {
    id:'urbansteps', name:'UrbanSteps',
    teacherId:null,
    tag_de:'Formation Teens', tag_en:'Formation Teens',
    blurb_de:'Teenie-Showgruppe (12–15 Jahre) – Urban Dance, Hip Hop und moderne Showelemente.',
    blurb_en:'Teen show group (12–15 years) – urban dance, hip hop and modern show elements.',
    status:'active',
  },
  {
    id:'baby-fuego', name:'Baby Fuego',
    teacherId:null,
    tag_de:'Crew', tag_en:'Crew',
    blurb_de:'Junge Energie, grosses Feuer – Baby Fuego bringt Power und Stil auf die Bühne.',
    blurb_en:'Young energy, big fire – Baby Fuego brings power and style to the stage.',
    status:'active',
  },
  {
    id:'cayla-nova', name:'Cayla Nova',
    teacherId:null,
    tag_de:'Crew', tag_en:'Crew',
    blurb_de:'Cayla Nova steht für kreative Vielfalt und starken Ausdruck.',
    blurb_en:'Cayla Nova stands for creative diversity and strong expression.',
    status:'active',
  },
  {
    id:'ndc-allstars', name:'NDC Allstars',
    teacherId:null,
    tag_de:'Allstars', tag_en:'Allstars',
    blurb_de:'Das Beste aus NDC Basel – die Allstars vereinen Talente aus allen Gruppen.',
    blurb_en:'The best of NDC Basel – the Allstars bring together talent from all groups.',
    status:'active',
  },
];

// ── PRICING ───────────────────────────────────────────────────
// h1/h2/h3plus = CHF per month for 1h/2h/3h+ per week. null = not offered.
const PRICING = [
  { tier:'mini',       label_de:'Mini-Kids',  label_en:'Mini-Kids', age:'5–7 Jahre',   h1:50,   h2:null, h3plus:null },
  { tier:'kids',       label_de:'Kids',        label_en:'Kids',      age:'8–10 Jahre',  h1:50,   h2:80,   h3plus:null },
  { tier:'teenies',    label_de:'Teenies',     label_en:'Teens',     age:'11–16 Jahre', h1:60,   h2:100,  h3plus:null },
  { tier:'erwachsene', label_de:'Erwachsene',  label_en:'Adults',    age:'ab 17 Jahre', h1:70,   h2:100,  h3plus:null },
  { tier:'unlimited',  label_de:'Unlimitiert', label_en:'Unlimited', age:null,          h1:null, h2:null, h3plus:130  },
];

const PRICING_POLICY = {
  de:[
    'Monatlich kündbar – keine Jahresverträge.',
    'Kostenlose Probestunde nach Anmeldung.',
    'Verpasste Stunden können nach Absprache nachgeholt werden.',
    'Zweiter Kursort: Reinach (Do 16:15 Uhr, Kids/Teenie Hip Hop).',
  ],
  en:[
    'Cancel monthly – no annual contracts.',
    'Free trial class after registration.',
    'Missed classes can be made up by arrangement.',
    'Second class location: Reinach (Thu 16:15, Kids/Teenie Hip Hop).',
  ],
};

// ── EVENTS ────────────────────────────────────────────────────
const EVENTS = [];

// ── DAY NAMES ─────────────────────────────────────────────────
const DAY_NAMES = {
  de:['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  en:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
};


// ── CONTACT ───────────────────────────────────────────────────
const CONTACT = {
  studio:   'New Dance Center Basel',
  address:  'Zwingerstrasse 12',
  city:     '4053 Basel',
  phone:    '+41 79 320 76 88',
  email:    'jasminweder@magnet.ch',
  director: 'Jasmin Weder Wessels',
};

// ── STUDIO STATS (used on index hero) ─────────────────────────
const STUDIO_STATS = [
  { value:'25+',  label_de:'Jahre Erfahrung', label_en:'Years experience' },
  { value:'200+', label_de:'Schüler:innen',   label_en:'Students'         },
  { value:'4',    label_de:'Show-Teams',       label_en:'Show teams'       },
  { value:'∞',    label_de:'Flexibel',         label_en:'Flexible'         },
];

// ── NEWS ──────────────────────────────────────────────────────
const NEWS = [
  {
    id:'tremendous-meisterschaft-2026',
    image: 'https://picsum.photos/seed/ndc-tremendous/800/450',
    date:'2026-03-10',
    category_de:'Erfolg', category_en:'Achievement',
    title_de:'Tremendous glänzt bei nationaler Meisterschaft',
    title_en:'Tremendous shines at national championship',
    excerpt_de:'Grosser Jubel bei NDC Basel! Unser Team Tremendous hat bei der nationalen Meisterschaft eine starke Leistung abgeliefert.',
    excerpt_en:'Big celebrations at NDC Basel! Our team Tremendous delivered a strong performance at the national championship.',
    content_de:`Grosser Jubel bei NDC Basel! Unser Team Tremendous hat bei der nationalen Meisterschaft in Bern eine beeindruckende Leistung gezeigt und alle Erwartungen übertroffen. Monatelange harte Arbeit, späte Trainingsabende und unzählige Durchläufe haben sich ausgezahlt.

Die Gruppe trat in der Kategorie Hip Hop Show an und überzeugte die Jury mit einer kraftvollen, präzisen und emotionalen Choreografie. Besonders die Synchronität und die Bühnenpräsenz der Tänzerinnen und Tänzer wurden in der Jurybeurteilung hervorgehoben.

«Ich bin unglaublich stolz auf das Team», sagt Coach Jasmin Weder Wessels. «Wir haben diese Saison an so vielen kleinen Details gearbeitet – und genau das hat man auf der Bühne gesehen. Die Energie, die sie ausgestrahlt haben, war einfach fantastisch.»

Für viele Mitglieder war es die erste grosse Meisterschaft. Umso erstaunlicher, mit welcher Ruhe und Professionalität sie den Wettkampftag gemeistert haben. Tremendous zeigt einmal mehr, was möglich ist, wenn ein Team wirklich zusammenwächst.

Wir gratulieren allen Mitgliedern herzlich und freuen uns schon auf die nächste Saison!`,
    content_en:`Big celebrations at NDC Basel! Our team Tremendous delivered an impressive performance at the national championships in Bern, exceeding all expectations. Months of hard work, late training evenings and countless run-throughs paid off.

The group competed in the Hip Hop Show category and impressed the judges with a powerful, precise and emotional choreography. The jury's assessment especially highlighted the synchronicity and stage presence of the dancers.

"I'm incredibly proud of the team," says coach Jasmin Weder Wessels. "We worked on so many small details this season — and that showed on stage. The energy they radiated was simply fantastic."

For many members it was their first major championship. All the more remarkable how calmly and professionally they handled the competition day. Tremendous once again shows what's possible when a team truly grows together.

We congratulate all members warmly and look forward to the next season!`,
  },
  {
    id:'neue-kurse-juni-2026',
    image: 'https://picsum.photos/seed/ndc-kurse/800/450',
    date:'2026-04-15',
    category_de:'Kurse', category_en:'Classes',
    title_de:'Neue Kurse ab Juni 2026',
    title_en:'New classes from June 2026',
    excerpt_de:'Wir erweitern unser Angebot! Ab Juni: Jazz (Anfänger), Masterclasses ü35, Commercial/Performance und neues Breakdance-Angebot.',
    excerpt_en:"We're expanding! From June: Jazz (beginners), Masterclasses 35+, Commercial/Performance and a new Breakdance offering.",
    content_de:`NDC Basel wächst! Ab Juni 2026 erweitern wir unser Kursangebot um vier neue Formate – für alle Altersgruppen und Level.

Jazz Anfänger (ab 12 Jahren) startet jeden Donnerstag um 19:00 Uhr in Raum Blau. Jazz verbindet klassische Tanztechnik mit modernen Einflüssen und ist der perfekte Einstieg für alle, die mehr als Hip Hop entdecken wollen.

Masterclass ü35 ist unser neues Format für Erwachsene ab 35 Jahren, die Tanz ernsthaft und ohne Hemmungen angehen möchten. Jeden Dienstag, 20:15–21:30 Uhr. Kein Vorkenntnisse nötig – nur Lust auf Bewegung.

Commercial & Performance richtet sich an Jugendliche und junge Erwachsene, die ihren Style weiterentwickeln möchten. Videoclip-Ästhetik, Bühnenpräsenz, Storytelling durch Tanz – freitags ab 18:30 Uhr.

Breakdance (B-Boy/B-Girl Basics) ist unser erstes reines Breaking-Angebot. Mittwochs 17:00–18:00 Uhr für Kinder ab 10 Jahren und Teens.

Alle neuen Kurse beginnen in der Woche vom 2. Juni. Die Probestunde ist wie immer kostenlos. Meld dich per Mail oder direkt über das Kontaktformular an.`,
    content_en:`NDC Basel is growing! From June 2026 we're expanding our course offering with four new formats — for all age groups and levels.

Jazz Beginners (from age 12) starts every Thursday at 19:00 in the Blue Room. Jazz combines classical dance technique with modern influences and is the perfect introduction for anyone who wants to discover more than Hip Hop.

Masterclass 35+ is our new format for adults aged 35 and over who want to approach dance seriously and without inhibition. Every Tuesday, 20:15–21:30. No prior experience needed — just a desire to move.

Commercial & Performance is aimed at teenagers and young adults who want to develop their style further. Video clip aesthetics, stage presence, storytelling through dance — Fridays from 18:30.

Breakdance (B-Boy/B-Girl Basics) is our first dedicated Breaking offering. Wednesdays 17:00–18:00 for children from age 10 and teens.

All new courses begin in the week of June 2nd. The trial class is as always free of charge. Sign up by email or directly via the contact form.`,
  },
  {
    id:'summer-showcase-2026',
    image: 'https://picsum.photos/seed/ndc-showcase/800/450',
    date:'2026-05-20',
    category_de:'Event', category_en:'Event',
    title_de:'Anmeldung Summer Showcase 2026 jetzt offen',
    title_en:'Summer Showcase 2026 registration now open',
    excerpt_de:'Die Anmeldung für den NDC Summer Showcase 2026 ist geöffnet. Alle Gruppen und Kurse können sich bis 30. Juni anmelden.',
    excerpt_en:'Registration for NDC Summer Showcase 2026 is open. All groups and classes can register until June 30.',
    content_de:`Der NDC Summer Showcase ist zurück! Am 12. Juli 2026 öffnen wir die Bühne für alle unsere Kurse und Showgruppen. Es ist das grösste hauseigene Event des Jahres – und dieses Mal wird es besonders.

Der Showcase findet wieder in der Alte Turnhalle Gundeldingen statt, mit Platz für über 300 Gäste. Familien, Freunde und alle, die einfach guten Tanz sehen wollen, sind herzlich willkommen.

Wer mitmachen möchte: Alle aktiven Kurse und Showgruppen können sich bis zum 30. Juni anmelden. Jede Gruppe bereitet eine eigene Choreografie vor. Die Auftritte dauern zwischen 2 und 5 Minuten – ob Mini-Kids Hip Hop oder Tremendous – alle kommen auf die Bühne.

Für Zuschauer: Einlass ist um 18:30 Uhr, Beginn um 19:00 Uhr. Der Eintritt ist frei, Kollekte am Ausgang.

Für Teilnehmende: Nach der Anmeldung erhalten alle Gruppen einen Probeplan mit reservierten Bühnenzeiten für die letzten Wochen vor dem Event. Kostüme und Look können frei gewählt werden, sollten aber zum jeweiligen Stil passen.

Fragen? Einfach an jasminweder@magnet.ch schreiben. Wir freuen uns auf einen unvergesslichen Abend!`,
    content_en:`The NDC Summer Showcase is back! On July 12th, 2026 we're opening the stage to all our classes and show groups. It's the biggest in-house event of the year — and this time it's going to be something special.

The Showcase is again taking place at the Alte Turnhalle Gundeldingen, with room for over 300 guests. Families, friends and anyone who simply wants to see great dancing are warmly welcome.

Who can participate: all active classes and show groups can register until June 30th. Each group prepares their own choreography. Performances run between 2 and 5 minutes — from Mini-Kids Hip Hop to Tremendous — everyone gets on stage.

For audience members: doors open at 18:30, show starts at 19:00. Entry is free, collection at the exit.

For participants: after registering, all groups receive a rehearsal schedule with reserved stage times for the final weeks before the event. Costumes and look are free choice, but should match the respective style.

Questions? Just email jasminweder@magnet.ch. We look forward to an unforgettable evening!`,
  },
];

// ── NDC — COMPUTED DATA WRAPPER ───────────────────────────────
// Must come after ALL data declarations (SCHEDULE, SHOWGROUPS, TEACHERS, PRICING, NEWS, EVENTS)
(function() {
  const DAY_KEY_MAP = {
    sonntag:0, montag:1, dienstag:2, mittwoch:3, donnerstag:4, freitag:5, samstag:6,
  };

  function buildSchedule() {
    const s = {};
    for (let i = 0; i <= 6; i++) s[i] = { blau:[], gruen:[] };
    SCHEDULE.forEach(e => {
      const d = DAY_KEY_MAP[e.day];
      if (d !== undefined && s[d][e.room]) s[d][e.room].push(e);
    });
    for (let i = 0; i <= 6; i++) {
      s[i].blau.sort((a,b)  => a.start < b.start ? -1 : 1);
      s[i].gruen.sort((a,b) => a.start < b.start ? -1 : 1);
    }
    return s;
  }

  function buildCrews() {
    return SHOWGROUPS.filter(sg => sg.status === 'active').map(sg => {
      const tc      = TEACHERS.find(t => t.id === sg.teacherId);
      const entries = SCHEDULE.filter(e => e.showgroupId === sg.id);
      const times   = entries.map(e => `${e.start}–${e.end}`).join(', ');
      return {
        id:       sg.id,
        name:     sg.name,
        tag:      { de: sg.tag_de,    en: sg.tag_en    },
        coach:    tc ? tc.name : '',
        schedule: { de: times, en: times },
        shortDesc:{ de: sg.blurb_de,  en: sg.blurb_en  },
        fullDesc: { de: sg.blurb_de,  en: sg.blurb_en  },
        achievements: { de: [], en: [] },
      };
    });
  }

  function buildTeachers() {
    return TEACHERS.map(tc => ({
      id:       tc.id,
      name:     tc.name,
      role:     { de: tc.role_de, en: tc.role_en },
      styles:   tc.styles,
      bio:      { de: tc.bio_de,  en: tc.bio_en  },
      featured: !!tc.featured,
    }));
  }

  function buildPrices() {
    return PRICING.map(p => {
      const opts = [];
      if (p.h1    != null) opts.push({ freq:1, chf: p.h1    });
      if (p.h2    != null) opts.push({ freq:2, chf: p.h2    });
      if (p.h3plus!= null) opts.push({ freq:3, chf: p.h3plus });
      return {
        label:    { de: p.label_de, en: p.label_en },
        age:      p.age,
        options:  opts,
        unlimited: p.tier === 'unlimited',
      };
    });
  }

  function buildNews() {
    return NEWS.map(n => ({
      id:       n.id,
      date:     n.date,
      category: { de: n.category_de, en: n.category_en },
      title:    { de: n.title_de,    en: n.title_en    },
      excerpt:  { de: n.excerpt_de,  en: n.excerpt_en  },
      content:  { de: n.content_de,  en: n.content_en  },
      image:    n.image || null,
    }));
  }

  window.NDC = {
    schedule: buildSchedule(),
    crews:    buildCrews(),
    teachers: buildTeachers(),
    prices:   buildPrices(),
    news:     buildNews(),
    events:   EVENTS,
  };
})();
