import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollTop from "@/components/ScrollTop";
// Window types are defined in types/window.d.ts

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
        {/* Viewport meta tag for mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        {/* Suppress source map errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable source map requests
              if (typeof window !== 'undefined') {
                const originalFetch = window.fetch;
                window.fetch = function(...args) {
                  if (args[0] && typeof args[0] === 'string' && args[0].endsWith('.map')) {
                    return Promise.reject(new Error('Source map disabled'));
                  }
                  return originalFetch.apply(this, args);
                };
              }
            `,
          }}
        />
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
        <ScrollTop />

        {/* All JS Plugins - optimized loading for mobile */}
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />

        {/* Load critical scripts first with proper dependencies */}
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* WOW.js - needed early for animations */}
        <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />

        {/* jQuery plugins - load after jQuery is ready, defer non-critical */}
        <Script
          src="/assets/js/viewport.jquery.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/jquery.waypoints.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/jquery.meanmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="lazyOnload"
        />

        {/* Other plugins - lazy load non-critical */}
        <Script src="/assets/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/splitType.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />

        {/* Suppress console errors for missing source maps and improve mobile loading */}
        <Script
          id="suppress-source-map-errors"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  // Suppress 404 errors for .map files in console
                  const originalError = console.error;
                  console.error = function(...args) {
                    const message = args[0];
                    if (typeof message === 'string' && (
                      message.includes('.map') || 
                      message.includes('source map') ||
                      message.includes('sourceMapURL')
                    )) {
                      return; // Suppress source map related errors
                    }
                    originalError.apply(console, args);
                  };
                  
                  // Suppress fetch errors for .map files
                  window.addEventListener('error', function(e) {
                    if (e.target && e.target.src && e.target.src.endsWith('.map')) {
                      e.preventDefault();
                      e.stopPropagation();
                      return false;
                    }
                  }, true);
                  
                  // Handle unhandled promise rejections for .map files
                  window.addEventListener('unhandledrejection', function(e) {
                    if (e.reason && typeof e.reason === 'string' && e.reason.includes('.map')) {
                      e.preventDefault();
                    }
                  });
                  
                  // Retry mechanism for failed script loads on mobile
                  function retryScriptLoad(scriptSrc, maxRetries = 2) {
                    return new Promise((resolve, reject) => {
                      let retries = 0;
                      function attemptLoad() {
                        const script = document.createElement('script');
                        script.src = scriptSrc;
                        script.async = true;
                        script.onload = () => resolve();
                        script.onerror = () => {
                          retries++;
                          if (retries < maxRetries) {
                            setTimeout(attemptLoad, 1000 * retries);
                          } else {
                            reject(new Error('Failed to load: ' + scriptSrc));
                          }
                        };
                        document.body.appendChild(script);
                      }
                      attemptLoad();
                    });
                  }
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
