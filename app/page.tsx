const services = [
  {
    number: "01",
    title: "Cybersecurity",
    description:
      "Practical security strategy, architecture, and risk guidance built for complex environments.",
  },
  {
    number: "02",
    title: "Technology Consulting",
    description:
      "Clear technical direction that turns business needs into resilient, maintainable solutions.",
  },
  {
    number: "03",
    title: "3D Engineering",
    description:
      "Purpose-built concepts and functional designs that move ideas from screen to reality.",
  },
  {
    number: "04",
    title: "Travel Experiences",
    description:
      "Thoughtfully planned journeys shaped by curiosity, landscape, and unforgettable moments.",
  },
];

function MountainMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 64 48"
      fill="none"
    >
      <path d="M3 43 23 12l9 14L40 14l21 29H3Z" stroke="currentColor" strokeWidth="2.3" />
      <path d="m16 43 16-17 8 9 6-7 12 15" stroke="currentColor" strokeWidth="1.4" opacity=".55" />
      <path d="M1 43h62" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Neo Nova Innovations home">
          <MountainMark />
          <span className="brand-name">
            NEO NOVA
            <small>INNOVATIONS</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="stars" />
        <div className="hero-content">
          <p className="eyebrow">Secure · Innovate · Create</p>
          <h1>
            Engineering tomorrow.
            <span>Securing today.</span>
          </h1>
          <p className="hero-copy">
            Strategy, technology, and creative exploration—designed to help
            bold ideas become lasting progress.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore our services <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mountain-scene" aria-hidden="true">
          <div className="peak peak-back" />
          <div className="peak peak-left" />
          <div className="peak peak-main" />
          <div className="peak peak-right" />
        </div>

        <a className="scroll-cue" href="#services">
          <span>Discover</span>
          <i />
        </a>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Ideas built with purpose.</h2>
          </div>
          <p>
            Neo Nova Innovations brings technical depth and an explorer&apos;s
            mindset to every challenge.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <MountainMark />
          <span>Beyond the expected</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">Who we are</p>
          <h2>Built at the intersection of security and imagination.</h2>
          <p>
            Neo Nova Innovations is a multidisciplinary company focused on
            solving real problems with thoughtful technology, disciplined
            security, functional design, and a genuine curiosity about the
            world.
          </p>
          <p>
            We believe progress happens when experience meets exploration.
            That idea guides every solution we shape and every partnership we
            build.
          </p>
          <div className="principles">
            <div><strong>Secure</strong><span>by design</span></div>
            <div><strong>Useful</strong><span>by intent</span></div>
            <div><strong>Original</strong><span>by nature</span></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Let&apos;s build what&apos;s next</p>
          <h2>Have an idea worth exploring?</h2>
          <p>
            Tell us what you&apos;re working toward. We&apos;ll help you find a
            clear, practical path forward.
          </p>
        </div>
        <a className="button button-light" href="mailto:hello@neonovainnovations.com">
          Request a consultation <span aria-hidden="true">→</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <MountainMark />
          <span className="brand-name">NEO NOVA<small>INNOVATIONS</small></span>
        </a>
        <p>Secure · Innovate · Create</p>
        <p>© 2026 Neo Nova Innovations. All rights reserved.</p>
      </footer>
    </main>
  );
}
