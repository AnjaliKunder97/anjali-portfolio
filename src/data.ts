import type { Metric, CaseStudy, SkillGroup, TimelineItem } from './types'

export const metrics: Metric[] = [
  {
    value: '1.000',
    label: 'aktive Nutzer:innen auf der von mir mitentwickelten SaaS-Plattform',
  },
  {
    value: '+50%',
    label: 'Nutzerinteraktion durch neu entwickelte Chat-Oberfläche',
  },
  {
    value: '−30%',
    label: 'Fehlerquote durch Code Reviews & CI-Praktiken',
  },
  {
    value: '+20%',
    label: 'Teamproduktivität durch verbesserte Frontend-Workflows',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'thinkers.ai',
    meta: 'Frontend Developer · 01/2023 – heute · Leipzig',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    paragraphs: [
      'thinkers.ai ist eine KI-gestützte Markt- und Themenintelligenz-Plattform: Nutzer:innen konfigurieren „Themenprofile" (z. B. Bauprojekte, Ausschreibungen, Personalwechsel), das System durchsucht laufend externe Quellen und liefert strukturierte, filterbare Ergebnisse — von Projektkarten bis zu automatisch generierten Mindmaps.',
      'Ich leite die Entwicklung zentraler Frontend-Bereiche: die Themenprofil-Übersicht und -Konfiguration, das Lesezeichen- und Filtersystem, die Mindmap-Visualisierung sowie Account- und Abrechnungseinstellungen. Dabei arbeite ich eng mit einem 7- bis 10-köpfigen Team aus Design, Backend und Product zusammen.',
    ],
    inlineStats: [
      { value: '1.000', label: 'aktive Nutzer:innen' },
      { value: '+50%', label: 'Interaktion (Chat-UI)' },
      { value: '−30%', label: 'Fehlerquote' },
    ],
    screenshots: [
      {
        src: (import.meta.env.BASE_URL + 'images/my-themenprofile.jpg'),
        alt: 'Themenprofil-Übersicht mit Nutzungsstatistiken pro Profil',
        caption: '// Themenprofile — Übersicht mit Gesamteinträgen & Aktivität',
      },
      {
        src: (import.meta.env.BASE_URL + 'images/chat-wizard.jpg'),
        alt: 'Mehrstufiger Chat-Assistent zur Konfiguration eines neuen Themenprofils',
        caption: '// Konfigurations-Assistent — Schritt 1 von 7',
      },
      {
        src: (import.meta.env.BASE_URL + 'images/bookmarks.jpg'),
        alt: 'Lesezeichen-Ansicht mit Kategorie-Filtern und Projektkarten',
        caption: '// Lesezeichen — Kategoriefilter & strukturierte Projektkarten',
      },
    ],
  },
  {
    title: 'thinkers.ai (Legacy Vue/Nuxt-Version)',
    meta: 'Frontend Developer · Vorgänger-Plattform · Leipzig',
    stack: ['Vue.js', 'Nuxt.js', 'JavaScript'],
    paragraphs: [
      'Vor der Umstellung auf React lief thinkers.ai als Vue.js/Nuxt-Anwendung. Diese frühere Version bot bereits zentrale Funktionen wie Mehrfachauswahl von Themen, Keyword-Suche in Überschriften, Heatmap-Visualisierungen zu Trendthemen und KI-generierte Artikel-Zusammenfassungen.',
      'Ich habe die spätere Migration dieser Vue/Nuxt-Basis zu React architektonisch begleitet und die Qualitätssicherung eines KI-gestützten Migrationstools (Lovable) verantwortet — von der Architekturentscheidung bis zur Überprüfung des generierten Codes.',
    ],
    screenshots: [
      {
        src: (import.meta.env.BASE_URL + 'images/legacy-topic-selection.png'),
        alt: 'Mehrfachauswahl von Themen auf der Startseite der Vue/Nuxt-Version',
        caption: '// Themenauswahl — Mehrfachauswahl nach Sektor & Use Case',
      },
      {
        src: (import.meta.env.BASE_URL + 'images/legacy-heatmap.png'),
        alt: 'Heatmap der 12 meistdiskutierten Themen der letzten sieben Tage',
        caption: '// Heatmap — Trendthemen der letzten 7 Tage',
      },
      {
        src: (import.meta.env.BASE_URL + 'images/legacy-ai-summary.png'),
        alt: 'KI-generierte Zusammenfassung von Artikeln auf der Ergebnisseite',
        caption: '// KI-Zusammenfassung — automatisch generiert aus gefilterten Artikeln',
      },
    ],
    reverse: true,
  },
  {
    title: 'rooom AG',
    meta: 'Werkstudentin Softwareentwicklung · 01/2022 – 01/2023 · Jena',
    stack: ['Vue 3', 'Composition API', 'Pinia', 'TypeScript'],
    paragraphs: [
      'Bei rooom AG habe ich Frontend-Funktionen für eine Microservice-basierte 3D-Erlebnisplattform entwickelt — von interaktiven Produktkonfiguratoren bis zu Komponenten, die Figma-Prototypen in performante, wiederverwendbare UI-Bausteine übersetzen.',
      'Der Wechsel von React zu Vue 3 mit Composition API und Pinia für zustandsintensive 3D-Interfaces war ein Lernsprung, der sich direkt ausgezahlt hat: reaktive Zustandslogik, die auch bei komplexen, verschachtelten 3D-Szenen wartbar bleibt.',
    ],
    inlineStats: [{ value: '+20%', label: 'Teamproduktivität' }],
    placeholderNote: 'Screenshots vertraulich (Kundenprojekt) — Case-Study auf Anfrage verfügbar.',
    reverse: true,
  },
  {
    title: 'Ungeek',
    meta: 'Mobile App & Web Developer · 10/2019 – 03/2020 · Mumbai',
    stack: ['Flutter', 'Vue.js'],
    paragraphs: [
      'Meine ersten produktiven Schritte: eine plattformübergreifende mobile App mit Flutter sowie eine webbasierte Rechnungsplattform mit Vue.js für Kunden im Finanz- und Buchhaltungsbereich — schnellere, fehlerärmere Verarbeitung als Ziel.',
    ],
    placeholderNote: 'Screenshots nicht mehr verfügbar — Projekt von 2019/2020.',
  },
  {
    title: 'Studio Booking Platform',
    meta: 'Eigenes Projekt · Full-Stack',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT-Auth'],
    paragraphs: [
      'Ein Buchungssystem für Ressourcen wie Proberäume oder Equipment — bewusst als vollständiges Full-Stack-Projekt aufgesetzt, um eine Lücke zu schließen, die mir in Stellenausschreibungen wiederholt begegnet ist: echte Backend-Erfahrung neben meiner Frontend-Expertise, inklusive Authentifizierung, relationalem Datenmodell und einer API, die ich selbst entworfen und implementiert habe.',
      'Das Backend (FastAPI, PostgreSQL, SQLAlchemy) bietet echte JWT-basierte Authentifizierung mit gehashten Passwörtern sowie ein relationales Schema aus Nutzer:innen, Ressourcen und Buchungen. Der interessante Teil: Überschneidende Buchungen für dieselbe Ressource werden serverseitig zuverlässig abgelehnt — keine Simulation, sondern eine echte Prüfung auf Zeitraum-Konflikte.',
      'Bewusst schlank gehalten: keine Zahlungsabwicklung, keine Admin-Rollen-Trennung und die Konflikterkennung läuft aktuell auf Anwendungsebene statt über eine datenbankseitige Exclusion-Constraint — der nächste sinnvolle Schritt für eine produktionsreife Version.',
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/AnjaliKunder97/studio-booking-platform' },
      { label: 'Live Demo ↗', href: 'https://studio-booking-platform-1.onrender.com' },
    ],
  },
  {
    title: 'Product Catalog & Checkout',
    meta: 'Eigenes Projekt · Skill-Vertiefung',
    stack: ['Angular', 'TypeScript', 'Storybook'],
    paragraphs: [ 
      'Eine E-Commerce-Oberfläche mit Produktkatalog, Warenkorb und Checkout-Flow — gezielt gebaut, um eine konkrete Lücke aus meiner Jobsuche zu schließen: Erfahrung mit Checkout-Flows und State-Management in Angular, wie sie in Stellenausschreibungen wie bei ifm explizit gefordert war.',
      'Die Produktdaten stammen aus der Fake Store API: Nutzer:innen können Produkte durchsuchen, nach Kategorie filtern und nach Preis oder Bewertung sortieren, mit debounced Suche und eigener Detailseite pro Produkt (Routing, Route-Parameter). Den Warenkorb-Zustand verwaltet ein NgRx Signal Store — die schlankere, aktuellere Alternative zum klassischen NgRx-Setup, die dennoch dieselben Grundprinzipien von State-Management demonstriert.',
      "Das Mock-Checkout-Formular nutzt Angular Reactive Forms mit echter Validierung — der Teil, der direkt dem 'Checkout-Flows'-Anforderungsprofil entspricht. Ladezustände, leere Zustände und Fehlerzustände sind bewusst mitgedacht, nicht nur der 'Happy Path'."
    ],
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/anjalikunder97/...' },
      { label: 'Live Demo ↗', href: 'https://anjalikunder97.github.io/product-catalog/' } // if deployed
    ],
  },
  {
    title: 'Kanban Board (Echtzeit-Kollaboration)',
    meta: 'Eigenes Projekt · Vue 3 / Nuxt.js',
    stack: ['Vue 3', 'Nuxt.js', 'Pinia','WebSockets'],
    paragraphs: [ 
      'Ein Echtzeit-Kanban-Board im Stil von Trello — bewusst gebaut, um zwei konkrete Lücken zu schließen: tiefere Vue-3-Praxis (Composition API, Pinia, Nuxt.js) und praktische Erfahrung mit Echtzeit-Funktionen über WebSockets, ein Anforderungsprofil, das mir in Stellenausschreibungen wie bei Atolls explizit begegnet ist.',
      'Mehrere Nutzer:innen können gleichzeitig an einem Board arbeiten: Karten verschieben, Spalten anlegen und Änderungen live bei allen Beteiligten sehen — ohne Neuladen der Seite. Die Umsetzung musste optimistische UI-Updates und den Umgang mit gleichzeitigen Änderungen mehrerer Nutzer:innen berücksichtigen, technisch anspruchsvoller als ein klassisches CRUD-Interface.',
      'Der Fokus liegt bewusst auf dem Frontend: Ein schlanker Relay-Server (~40 Zeilen, ohne Datenbank, ohne Authentifizierung) leitet Board-Änderungen zwischen verbundenen Clients weiter — genug, um Echtzeit-Sync ehrlich zu demonstrieren, ohne das Projekt zu einem Backend-Vorhaben auszuweiten.'
     ],
     links: [
      { label: 'GitHub ↗', href: 'https://github.com/anjalikunder97/...' },
      { label: 'Live Demo ↗', href: 'https://kanban-board-fawn-six.vercel.app/' }
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frameworks',
    items: ['React', 'Vue 3 (Composition API, Pinia)', 'Nuxt.js (SSR/SSG)', 'Angular (Grundkenntnisse)', 'Flutter'],
  },
  {
    title: 'Sprachen',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    title: 'Styling',
    items: ['Tailwind CSS', 'SCSS/Sass', 'Figma (Design-Handoff)'],
  },
  {
    title: 'Testing & Qualität',
    items: ['Vitest', 'Cypress', 'Code Reviews'],
  },
  {
    title: 'Infrastruktur',
    items: ['Git', 'GitLab CI/CD', 'Docker', 'Linux (Grundkenntnisse)'],
  },
  {
    title: 'Arbeitsweise',
    items: ['Scrum / Agile', 'Jira · Confluence', 'REST APIs'],
  },
]

export const timeline: TimelineItem[] = [
  {
    role: 'Frontend-Entwicklerin · thinkers.ai',
    meta: '01/2023 – heute · Leipzig',
    desc: 'Leitung der Entwicklung skalierbarer Frontend-Lösungen für eine datengetriebene SaaS-Plattform mit React & TypeScript.',
  },
  {
    role: 'Werkstudentin Softwareentwicklung · rooom AG',
    meta: '01/2022 – 01/2023 · Jena',
    desc: 'Frontend-Funktionen für eine Microservice-basierte 3D-Plattform mit Vue 3 und TypeScript.',
  },
  {
    role: 'M.Sc. Human Computer Interaction · Bauhaus-Universität Weimar',
    meta: '2020 – 2022',
    desc: 'Nebenbei: Student Tutor (10/2021) — Betreuung neuer Studierender.',
  },
  {
    role: 'Mobile App & Web Developer · Ungeek',
    meta: '10/2019 – 03/2020 · Mumbai',
    desc: 'Flutter-Apps & Vue.js-Rechnungsplattform für Finanzkunden.',
  },
  {
    role: 'B.Eng. Computer Science · Shah & Anchor Engineering College',
    meta: '2015 – 2019 · Mumbai',
    desc: 'Praktikum bei ETMantra (04/2018–05/2019): Flutter-App für Selbstlernplattform.',
  },
]
