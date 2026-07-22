import type { SkillGroup } from '../types'

interface Props {
  groups: SkillGroup[]
}

export default function Skills({ groups }: Props) {
  return (
    <section className="alt" id="skills">
      <div className="wrap">
        <div className="section-head">
          <p className="section-tag">Werkzeuge</p>
          <h2 className="section-title">Technischer Stack</h2>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
