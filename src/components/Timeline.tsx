import type { TimelineItem } from '../types'

interface Props {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <p className="section-tag">Werdegang</p>
          <h2 className="section-title">Stationen</h2>
        </div>
        <div className="timeline">
          {items.map((item) => (
            <div className="tl-item" key={item.role}>
              <p className="tl-role">{item.role}</p>
              <p className="tl-meta">{item.meta}</p>
              <p className="tl-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
