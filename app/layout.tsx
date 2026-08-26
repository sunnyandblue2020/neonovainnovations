import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Cybersecurity, technology consulting, 3D engineering, and travel experiences built with purpose.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neonovainnovations.com"),
  title: "Neo Nova Innovations | Secure. Innovate. Create.",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Neo Nova Innovations",
    title: "Neo Nova Innovations | Secure. Innovate. Create.",
    description: siteDescription,
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Neo Nova Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Nova Innovations | Secure. Innovate. Create.",
    description: siteDescription,
    images: ["/social-preview.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
