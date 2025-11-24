import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thunderboltsfc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TFC - Thunderbolts Football Club | The Future of Football",
    template: "%s | Thunderbolts Football Club",
  },
  description:
    "Thunderbolts Football Club (TFC) - A premier football club based in Dhapakhel, Lalitpur, Nepal. Discover our players, matches, gallery, and join the TFC community.",
  keywords: [
    "Thunderbolts Football Club",
    "TFC",
    "Football Club Nepal",
    "Nepal Football",
    "Lalitpur Football",
    "Dhapakhel Football",
    "Football Team Nepal",
    "Nepal Sports",
    "Football Players Nepal",
    "TFC Players",
  ],
  authors: [{ name: "Thunderbolts Football Club" }],
  creator: "Thunderbolts Football Club",
  publisher: "Thunderbolts Football Club",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Thunderbolts Football Club",
    title: "TFC - Thunderbolts Football Club | The Future of Football",
    description:
      "Thunderbolts Football Club (TFC) - A premier football club based in Dhapakhel, Lalitpur, Nepal. Discover our players, matches, gallery, and join the TFC community.",
    images: [
      {
        url: `${siteUrl}/logo3.png`,
        width: 1200,
        height: 630,
        alt: "Thunderbolts Football Club Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TFC - Thunderbolts Football Club | The Future of Football",
    description:
      "Thunderbolts Football Club (TFC) - A premier football club based in Dhapakhel, Lalitpur, Nepal.",
    images: [`${siteUrl}/logo3.png`],
    creator: "@thunderboltsfc",
  },
  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Sports",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#12203B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: "Thunderbolts Football Club",
    alternateName: "TFC",
    url: siteUrl,
    logo: `${siteUrl}/logo3.png`,
    description:
      "Thunderbolts Football Club (TFC) - A premier football club based in Dhapakhel, Lalitpur, Nepal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhapakhel",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+977-980-197-3975",
      contactType: "Customer Service",
      email: "info@thunderbolts.com.np",
    },
    sameAs: [
      "https://www.facebook.com/thunderboltsfc",
      "https://www.instagram.com/thunderboltsfc",
      "https://www.youtube.com/@thunderboltsfc",
    ],
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} flex flex-col min-h-screen`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
