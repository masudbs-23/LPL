export interface QA {
  q: string;
  /** English question text (shown when locale is en) */
  qEn?: string;
  a: string;
  /** English answer (shown when locale is en) */
  aEn?: string;
}
export interface Topic {
  slug: string;
  title: string;
  titleBn: string;
  description: string;
  color: string;
  icon: string;
  qas: QA[];
}
