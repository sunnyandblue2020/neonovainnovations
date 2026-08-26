import Image from "next/image";

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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Neo Nova Innovations home">
          <Image
            className="header-logo"
            src="/logo/logo.png"
            alt="Neo Nova Innovations"
            width={420}
            height={220}
            priority
          />
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
          <Image
            className="about-logo"
            src="/logo/logo.png"
            alt=""
            width={640}
            height={640}
          />
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
        <div className="contact-intro">
          <p className="eyebrow">Let&apos;s build what&apos;s next</p>
          <h2>Have an idea worth exploring?</h2>
          <p>
            Tell us what you&apos;re working toward. We&apos;ll help you find a
            clear, practical path forward.
          </p>
          <a className="contact-email" href="mailto:support@neonovainnovations.com">
            support@neonovainnovations.com
          </a>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/support@neonovainnovations.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Neo Nova website inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://neonovainnovations.com/thank-you/"
          />
          <input
            className="form-honeypot"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>

          <label>
            What can we help with?
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Cybersecurity</option>
              <option>Technology Consulting</option>
              <option>3D Engineering</option>
              <option>Travel Experiences</option>
              <option>Something else</option>
            </select>
          </label>

          <label>
            Tell us about your idea
            <textarea name="message" rows={5} required />
          </label>

          <button className="form-submit" type="submit">
            Send inquiry <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">
            Your information is used only to respond to your inquiry.
          </p>
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <Image
            className="footer-logo"
            src="/logo/logo.png"
            alt="Neo Nova Innovations"
            width={420}
            height={220}
          />
        </a>
        <p>Secure · Innovate · Create</p>
        <p>© 2026 Neo Nova Innovations. All rights reserved.</p>
      </footer>
    </main>
  );
}
