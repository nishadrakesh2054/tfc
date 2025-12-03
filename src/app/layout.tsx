import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Extend Window interface for WOW.js
declare global {
  interface Window {
    WOW?: {
      new (): {
        init: () => void;
      };
    };
  }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://thunderboltsfc.com"),
  title: {
    default: "Thunderbolts Football Club (TFC) - Excellence in Football",
    template: "%s | Thunderbolts FC",
  },
  description:
    "Thunderbolts Football Club (TFC) - A premier football club in Nepal dedicated to developing elite talent, achieving competitive excellence, and inspiring the next generation of footballers through world-class training and academy programs.",
  keywords: [
    "Thunderbolts FC",
    "TFC Nepal",
    "Football Club Nepal",
    "Nepal Football",
    "Football Academy Nepal",
    "Youth Football Nepal",
    "Thunderbolts Development Center",
    "TDC Football",
    "Nepal Super League",
    "NSFL",
    "Lalitpur Football",
    "Professional Football Nepal",
    "Football Training Nepal",
  ],
  authors: [
    { name: "Thunderbolts Football Club", url: "https://thunderboltsfc.com" },
  ],
  creator: "Thunderbolts Football Club",
  publisher: "Thunderbolts Football Club",
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
  icons: {
    icon: "/assets/img/favicon.svg",
    shortcut: "/assets/img/favicon.svg",
    apple: "/assets/img/logo3.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thunderboltsfc.com",
    siteName: "Thunderbolts Football Club",
    title: "Thunderbolts Football Club (TFC) - Excellence in Football",
    description:
      "Premier football club in Nepal dedicated to developing elite talent and achieving competitive excellence. Home of champions and future stars.",
    images: [
      {
        url: "/assets/img/homegrp2.png",
        width: 1200,
        height: 630,
        alt: "Thunderbolts Football Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thunderbolts Football Club (TFC) - Excellence in Football",
    description:
      "Premier football club in Nepal dedicated to developing elite talent and achieving competitive excellence.",
    images: ["/assets/img/homegrp2.png"],
    creator: "@thunderboltsfc",
    site: "@thunderboltsfc",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://thunderboltsfc.com",
  },
  category: "Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* External CSS Libraries - Required for third-party plugins */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/animate.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        {children}

        {/* All JS Plugins */}
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/viewport.jquery.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.waypoints.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/parallaxie.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitType.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
