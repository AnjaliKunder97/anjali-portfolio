export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <p className="eyebrow">Frontend Developer · Leipzig</p>
        <h1 className="display">
          Ich baue Frontends, die sich an <em>messbarer</em> Wirkung messen lassen.
        </h1>
        <p className="hero-sub">
          React, TypeScript, Vue 3 &amp; Nuxt — vom Figma-Entwurf bis zur produktiven Plattform mit
          echten Nutzer:innen. Fünf Jahre Erfahrung, drei Projekte, ein Anspruch: Interfaces, die
          Zahlen bewegen.
        </p>
        <div className="hero-links">
          <a className="btn btn-primary" href="mailto:kunderanjali@gmail.com">
            E-Mail schreiben
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/anjali-kunder-92649310b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-ghost" href="#work">
            Projekte ansehen ↓
          </a>
        </div>
      </div>
    </header>
  )
}
