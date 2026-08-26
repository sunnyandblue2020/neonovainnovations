import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | Neo Nova Innovations",
  description: "How Neo Nova Innovations handles information submitted through this website.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (\n    <div className="legal-page">\n      <a className="skip-link" href="#main-content">Skip to main content</a>
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
        <Link href="/">Return home</Link>
      </header>\n\n      <main id="main-content">\n      <article className="legal-content">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p className="legal-updated">Effective August 26, 2026</p>

        <p>
          Neo Nova Innovations respects your privacy. This notice explains what
          information this website collects, why it is collected, and the
          choices available to you.
        </p>

        <h2>Information you provide</h2>
        <p>
          When you use the contact form, you may provide your name, email
          address, selected service, and message. We use this information only
          to review and respond to your inquiry.
        </p>

        <h2>Form processing</h2>
        <p>
          Contact-form submissions are processed by FormSubmit and delivered
          to Neo Nova Innovations by email. Do not submit sensitive personal,
          financial, medical, classified, export-controlled, or authentication
          information through the form.
        </p>

        <h2>Hosting and technical information</h2>
        <p>
          The website is hosted through Cloudflare. Cloudflare may process
          routine technical information needed to deliver and secure the site,
          such as IP addresses, request details, and security events.
        </p>

        <h2>How information is used</h2>
        <ul>
          <li>Responding to questions and consultation requests</li>
          <li>Understanding which service may fit an inquiry</li>
          <li>Protecting the website and contact form from abuse</li>
        </ul>

        <h2>Sharing and retention</h2>
        <p>
          We do not sell personal information. Information may be handled by
          service providers used to host the website and deliver form
          submissions. We retain inquiries only as long as reasonably needed
          for communication, business records, security, and applicable legal
          obligations.
        </p>

        <h2>Your choices</h2>
        <p>
          You may request access, correction, or deletion of information you
          submitted by emailing{" "}
          <a href="mailto:support@neonovainnovations.com">
            support@neonovainnovations.com
          </a>. Some records may be retained when required for security,
          contractual, or legal reasons.
        </p>

        <h2>Updates</h2>
        <p>
          This notice may be updated when the website or its services change.
          The effective date above identifies the current version.
        </p>

        <div className="legal-actions">
          <Link className="button button-primary" href="/">
            Return home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>\n      </main>\n    </div>\n  );
}
