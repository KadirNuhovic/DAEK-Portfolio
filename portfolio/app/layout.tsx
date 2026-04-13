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
  title: {
    default: "DAEK Techvision - UI/UX & Full-Stack Web Development Agency",
    template: "%s | DAEK Techvision"
  },
  description: "DAEK Techvision is a leading UI/UX and full-stack web development agency. We build modern, high-performance websites and web applications that drive conversions and business growth using Next.js, React, Node.js, and cutting-edge technologies.",
  keywords: [
    "web development",
    "UI/UX design", 
    "full-stack development",
    "Next.js",
    "React",
    "Node.js",
    "web agency",
    "SaaS development",
    "e-commerce",
    "responsive design",
    "performance optimization",
    "DAEK Techvision",
    "agency Novi Pazar"
  ],
  authors: [{ name: "DAEK Techvision" }],
  creator: "DAEK Techvision",
  publisher: "DAEK Techvision",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daektechvision.rs"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "sr-RS": "/sr"
    }
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daektechvision.rs",
    title: "DAEK Techvision - UI/UX & Full-Stack Web Development Agency",
    description: "Building modern, high-performance websites and web applications that drive conversions and business growth.",
    siteName: "DAEK Techvision",
    images: [
      {
        url: "/DAEK.png",
        width: 1200,
        height: 630,
        alt: "DAEK Techvision - Web Development Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DAEK Techvision - UI/UX & Full-Stack Web Development Agency",
    description: "Building modern, high-performance websites and web applications that drive conversions and business growth.",
    images: ["/DAEK.png"],
    creator: "@daektechvision"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DAEK Techvision",
      url: "https://daektechvision.rs",
      logo: "https://daektechvision.rs/DAEK.png",
      description: "UI/UX & Full-Stack Web Development Agency building modern digital experiences",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Novi Pazar",
        addressCountry: "Serbia"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+381692419692",
        contactType: "customer service",
        email: "deak@deaktechvision.com"
      },
      sameAs: [
        "https://linkedin.com/in/daektechvision",
        "https://github.com/daektechvision-maker"
      ],
      services: [
        "Web Development",
        "UI/UX Design",
        "SaaS Development",
        "E-commerce Solutions",
        "Performance Optimization"
      ]
    })
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
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
