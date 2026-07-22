export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <h2>Lust auf ein Gespräch?</h2>
        <p style={{ maxWidth: 480, color: 'var(--text-on-dark-muted)' }}>
          Ich freue mich über Nachrichten zu offenen Frontend-Rollen, Projekten oder einfach einem
          Austausch über Vue, React und alles dazwischen.
        </p>
        <div className="footer-links">
          <a href="mailto:kunderanjali@gmail.com">kunderanjali@gmail.com</a>
          <a href="tel:+4917674550364">+49 176 74550364</a>
          <a
            href="https://www.linkedin.com/in/anjali-kunder-92649310b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="footer-bottom">
          <span>Anjali Kunder — Frontend Developer, Leipzig</span>
          <span>Zuletzt aktualisiert Juli 2026</span>
        </div>
      </div>
    </footer>
  )
}
