import type { Metadata } from "next";\nimport Image from "next/image";
import Link from "next/link";

\nexport const metadata: Metadata = {\n  title: "Page Not Found | Neo Nova Innovations",\n};\n\nexport default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-card">
        <Image
          className="not-found-logo"
          src="/logo/logo.png"
          alt="Neo Nova Innovations"
          width={420}
          height={420}
          priority
        />
        <p className="eyebrow">404 · Off the mapped route</p>
        <h1>This path hasn&apos;t been explored.</h1>
        <p>
          The page may have moved, or the address may be incorrect. Return to
          Neo Nova Innovations and continue from familiar ground.
        </p>
        <Link className="button button-primary" href="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
