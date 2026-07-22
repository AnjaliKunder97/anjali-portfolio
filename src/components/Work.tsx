import type { CaseStudy } from '../types'
import CaseStudyCard from './CaseStudyCard'

interface Props {
  studies: CaseStudy[]
}

export default function Work({ studies }: Props) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <p className="section-tag">Ausgewählte Projekte</p>
          <h2 className="section-title">Von der Idee bis ins Produktiv-Interface</h2>
          <p className="section-desc">
            Drei Stationen, drei Frontend-Stacks — jede mit echten Nutzer:innen, echten
            Anforderungen und echten Zahlen.
          </p>
        </div>
        {studies.map((study) => (
          <CaseStudyCard study={study} key={study.title} />
        ))}
      </div>
    </section>
  )
}
