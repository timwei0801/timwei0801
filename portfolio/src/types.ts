// Shapes of the structured copy in src/i18n (shared by both locales).

export interface IndexItem {
  slug?: string
  no: string
  title: string
  sub: string
  kind: string
  tech: string
  year: string
  img?: string
  href?: string
}

export interface CoverLine { k: string; b: string; t: string; to: string }

export interface CvRow { when: string; role: string; org: string; note: string }

export interface HomePost { k: string; title: string; p: string; url: string }

export interface Article { title: string; date: string; tag: string; url: string; platform?: 'medium' | 'ithome' | 'github' }

export interface Social { label: string; url: string }

export interface ExperienceItem { period: string; position: string; company: string; description: string; bullets: string[] }

export interface AwardItem { year: string; name: string; org: string; desc: string; tag: string; images: string[]; link?: string; linkLabel?: string }

export interface SkillGroup { title: string; items: string[] }

export interface Cert { name: string; org: string; cat: string }

export interface CaseLink { t: string; u: string }
export interface CaseMeta { k: string; v?: string; links?: CaseLink[] }

export type CaseBlock =
  | { type: 'p'; text: string; dropcap?: boolean }
  | { type: 'ul'; items: string[] }
  | { type: 'pull'; text: string }
  | { type: 'fig'; img?: string; viz?: string; cap: string; alt?: string; wide?: boolean; illustration?: boolean }
  | { type: 'table'; head: string[]; rows: string[][]; hi?: number[] }

export interface CaseSection { id: string; no: string; title: string; blocks: CaseBlock[] }

export interface CaseData {
  no: string
  kicker: string
  tech: string
  title: string
  sub: string
  meta: CaseMeta[]
  lead: { img: string; cap: string; alt?: string }
  sections: CaseSection[]
  prev: string | null
  next: string | null
}
