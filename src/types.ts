export interface Metric {
  value: string
  label: string
}

export interface Screenshot {
  src: string
  alt: string
  caption: string
}

export interface CaseStudy {
  title: string
  meta: string
  stack: string[]
  paragraphs: string[]
  inlineStats?: { value: string; label: string }[]
  screenshots?: Screenshot[]
  placeholderNote?: string
  reverse?: boolean
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface TimelineItem {
  role: string
  meta: string
  desc: string
}
