import type { CaseStudy } from '../types'

interface Props {
  study: CaseStudy
}

export default function CaseStudyCard({ study }: Props) {
  const bodyClass = study.reverse ? 'case-body reverse' : 'case-body'

  return (
    <div className="case">
      <div className="case-head">
        <div>
          <p className="case-title">{study.title}</p>
          <p className="case-meta">{study.meta}</p>
        </div>
        <div className="case-stack">
          {study.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className={bodyClass}>
        <div className="case-text">
          {study.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {study.inlineStats && (
            <div className="case-stats">
              {study.inlineStats.map((s) => (
                <div className="stat-inline" key={s.label}>
                  <b>{s.value}</b>
                  {s.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="case-shots">
          {study.screenshots?.map((shot) => (
            <div key={shot.src}>
              <div className="shot">
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </div>
              <p className="shot-cap">{shot.caption}</p>
            </div>
          ))}
          {study.placeholderNote && (
            <div className="placeholder-shot">{study.placeholderNote}</div>
          )}
        </div>
      </div>
    </div>
  )
}
