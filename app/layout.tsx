import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { site } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/jsonld";

/** Display face. Deliberately not Inter (design skill 4.1). */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pest Eliminators | Pest Control in Orange County and Riverside, CA",
    template: `%s | ${site.name}`,
  },
  description:
    "Locally owned pest control, termite and rodent services for homes and businesses across Orange County, Riverside and the Inland Empire. Free inspections.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

/** Applies the stored theme before first paint so there is no flash. */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('pe-theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      {/* min-h-dvh, never h-screen, so the document itself scrolls and mobile
          browser chrome does not cause a layout jump. */}
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-accent focus:px-5 focus:py-3 focus:text-on-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  );
}
