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

export const metadata: Metadata = {
  title: "Jordan Dev — Fullstack Web Developer",
  description: "A modern, premium portfolio showcasing fullstack web development, UI/UX design, and product-focused engineering.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jordan Dev — Fullstack Web Developer",
    description:
      "A modern portfolio showcasing fullstack web development, UI/UX design, and product-focused engineering.",
    url: "https://example.com",
    siteName: "Jordan Dev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jordan Dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
