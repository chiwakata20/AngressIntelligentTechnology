import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header, SiteEnhancements } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angress-intelligent-technology.chiwakatakevin.chatgpt.site"),
  title: { default: "ANGRESS Intelligent Technology | Harare, Zimbabwe", template: "%s | ANGRESS Intelligent Technology" },
  description: "Zimbabwean software development and technology solutions company championing African excellence in technology.",
  applicationName: "ANGRESS Intelligent Technology",
  keywords: ["Zimbabwe technology company", "software development Harare", "web application development Zimbabwe", "IT consultancy Zimbabwe", "African technology solutions"],
  authors: [{ name: "ANGRESS Intelligent Technology" }],
  creator: "ANGRESS Intelligent Technology",
  publisher: "ANGRESS Intelligent Technology",
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    siteName: "ANGRESS Intelligent Technology",
    title: "ANGRESS Intelligent Technology",
    description: "Secure, scalable and locally relevant technology solutions for Zimbabwe and Africa.",
    url: "/",
  },
  twitter: { card: "summary", title: "ANGRESS Intelligent Technology", description: "Intelligent technology for organisations in Zimbabwe and across Africa." },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#06142e" };

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ANGRESS INTELLIGENT TECHNOLOGY",
  url: "https://angress-intelligent-technology.chiwakatakevin.chatgpt.site",
  foundingDate: "2023",
  slogan: "Championing African Excellence in Technology",
  description: "A Zimbabwean information and communication technology company building practical digital solutions for organisations across Zimbabwe and Southern Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  areaServed: ["Zimbabwe", "Southern Africa"],
  knowsAbout: ["Custom software development", "Web application development", "Mobile application development", "IT consultancy", "Cybersecurity", "Data analytics", "Digital marketing", "Technical support"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZW"suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header/>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer/>
        <SiteEnhancements/>
      </body>
    </html>
  );
}
