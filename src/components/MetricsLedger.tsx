import type { Metric } from '../types'

interface Props {
  metrics: Metric[]
}

export default function MetricsLedger({ metrics }: Props) {
  return (
    <div className="ledger">
      <div className="wrap">
        {metrics.map((m) => (
          <div className="ledger-item" key={m.label}>
            <span className="ledger-num">{m.value}</span>
            <span className="ledger-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
