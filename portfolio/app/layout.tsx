import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAEK Techvision — Fullstack Web Developeri",
  description: "Moderan portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.",
  keywords: ["web development", "fullstack developer", "UI/UX design", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "DAEK Techvision" }],
  creator: "DAEK Techvision",
  publisher: "DAEK Techvision",
  metadataBase: new URL('https://emir-portfolio-iota.vercel.app/'),
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "DAE Techvision — Fullstack Web Developeri",
    description: "Moderan portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.",
    url: "https://emir-portfolio-iota.vercel.app/",
    siteName: "DAEK Techvision Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DAE Techvision Portfolio",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAEK Techvision — Fullstack Web Developeri",
    description: "Moderan portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.",
    images: ["/og-image.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "DAEK Techvision",
      "jobTitle": "Fullstack Web Developer",
      "url": "https://emir-portfolio-iota.vercel.app/",
      "sameAs": [
        "https://linkedin.com/in/daektechvision",
        "https://github.com/daektechvision"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Novi Pazar",
        "addressCountry": "RS"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+381-69-2419692",
        "email": "daek@techvision.rs",
        "contactType": "customer service"
      }
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
