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
        src: '/images/my-themenprofile.jpg',
        alt: 'Themenprofil-Übersicht mit Nutzungsstatistiken pro Profil',
        caption: '// Themenprofile — Übersicht mit Gesamteinträgen & Aktivität',
      },
      {
        src: '/images/chat-wizard.jpg',
        alt: 'Mehrstufiger Chat-Assistent zur Konfiguration eines neuen Themenprofils',
        caption: '// Konfigurations-Assistent — Schritt 1 von 7',
      },
      {
        src: '/images/bookmarks.jpg',
        alt: 'Lesezeichen-Ansicht mit Kategorie-Filtern und Projektkarten',
        caption: '// Lesezeichen — Kategoriefilter & strukturierte Projektkarten',
      },
    ],
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
