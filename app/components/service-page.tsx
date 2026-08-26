import Image from "next/image";
import Link from "next/link";

type ServiceSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type ServicePageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  availability: string;
  sections: ServiceSection[];
  ctaTitle: string;
  ctaCopy: string;
};

export default function ServicePage({
  eyebrow,
  title,
  introduction,
  availability,
  sections,
  ctaTitle,
  ctaCopy,
}: ServicePageProps) {
  return (
    <div className="service-page">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="inner-header">
        <Link href="/" aria-label="Neo Nova Innovations home">
          <Image
            src="/logo/logo.png"
            alt="Neo Nova Innovations"
            width={420}
            height={220}
            priority
          />
        </Link>
        <Link href="/#services">All services</Link>
      </header>

      <main id="main-content">
        <section className="service-hero">
          <div className="service-hero-inner">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="service-hero-copy">{introduction}</p>
            <p className="service-availability">{availability}</p>
            <div>
              <Link className="button button-primary" href="/#contact">
                Start a conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="service-body">
          <div className="service-body-inner">
            {sections.map((section) => (
              <section className="service-section" key={section.title}>
                <h2>{section.title}</h2>
                <div>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul className="service-list">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="service-page-cta">
          <h2>{ctaTitle}</h2>
          <p>{ctaCopy}</p>
          <Link className="button" href="/#contact">
            Contact NeoNova <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
