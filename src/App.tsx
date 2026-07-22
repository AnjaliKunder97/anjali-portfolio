import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MetricsLedger from './components/MetricsLedger'
import Work from './components/Work'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import { metrics, caseStudies, skillGroups, timeline } from './data'

function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <MetricsLedger metrics={metrics} />
      <Work studies={caseStudies} />
      <Skills groups={skillGroups} />
      <Timeline items={timeline} />
      <Footer />
    </div>
  )
}

export default App
