import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="thank-you">
      <div className="thank-you-card">
        <Image
          className="thank-you-logo"
          src="/logo/logo.png"
          alt="Neo Nova Innovations"
          width={420}
          height={420}
          priority
        />
        <p className="eyebrow">Message received</p>
        <h1>Thank you for reaching out.</h1>
        <p>
          Your inquiry is on its way to our team. We&apos;ll review it and
          respond at the email address you provided.
        </p>
        <Link className="button button-primary" href="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
