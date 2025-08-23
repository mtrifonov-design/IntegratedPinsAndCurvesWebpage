import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "@mtrifonov-design/pinsandcurves-design/dist/PinsAndCurvesStylesheet.css";

import NavBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pins And Curves",
    operatingSystem: "Any (Web-based)",
    applicationCategory: "DesignApplication",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}

// function Tracking() {
//         //     <script>
//         //     window.op = window.op || function (...args) {(window.op.q = window.op.q || []).push(args); };
//         //     window.op('init', {
//         //       clientId: 'f0e7399f-8b7a-4145-a596-5e0f0bdc7243',
//         //     trackScreenViews: true,
//         //     trackOutgoingLinks: true,
//         //     trackAttributes: true,
//         // });
//         //   </script>
//         //   <script src="https://openpanel.dev/op1.js" defer async></script>


// }

function Tracking() {
  return (
    <>
      {/* 1) Queue stub ASAP so calls before load don't throw */}
      <Script
        id="op-stub"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.op = window.op || function(){ (window.op.q = window.op.q || []).push(arguments); };
          `,
        }}
      />

      {/* 2) Load the library */}
      <Script
        src="https://openpanel.dev/op1.js"
        strategy="afterInteractive"
      />

      {/* 3) Initialize after it's safe to run in the browser */}
      <Script
        id="op-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.op('init', {
              clientId: 'f0e7399f-8b7a-4145-a596-5e0f0bdc7243',
              trackScreenViews: true,
              trackOutgoingLinks: true,
              trackAttributes: true
            });
          `,
        }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Pins And Curves",
  description: "Tools for motion designers",
  verification: {
    google: "0qOXAqmrBG6ynZWuGf3P_us1vGolCyu_WG5Mvy5KRUg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      style={{
        height: "100%",
        overflow: "hidden",
        overscrollBehavior: "none",
      }}
    >
      <body style={{
        backgroundColor: "black",
        color: "var(--gray6)",
        height: "100dvh",
        overflow: "scroll",
      }}>
        <NavBar />
        {children}
        <Footer />
        <section>
          <StructuredData />
          <Tracking />

        </section>
      </body>

    </html>
  );
}
