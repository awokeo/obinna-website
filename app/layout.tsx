import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obinnaawoke.com"),

  title: {
    default: "Obinna Awoke",
    template: "%s | Obinna Awoke",
  },

  description:
    "AI Security Researcher specializing in Cybersecurity, Explainable AI, Machine Learning, and Intelligent Network Systems.",

  keywords: [
    "Obinna Awoke",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Explainable AI",
    "XAI",
    "Network Security",
    "Deep Learning",
    "Research",
    "Academic Website",
  ],

  authors: [
    {
      name: "Obinna Awoke",
      url: "https://obinnaawoke.com",
    },
  ],

  creator: "Obinna Awoke",

  openGraph: {
    title: "Obinna Awoke",
    description:
      "AI Security Researcher specializing in Cybersecurity, Explainable AI, Machine Learning, and Intelligent Network Systems.",
    url: "https://obinnaawoke.com",
    siteName: "Obinna Awoke",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Obinna Awoke - AI Security Researcher",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Obinna Awoke",
    description:
      "AI Security Researcher specializing in Cybersecurity, Explainable AI, Machine Learning, and Intelligent Network Systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col"
      >
        <ThemeProvider>
          <main className="flex-grow">
            {children}
          </main>

          <Footer />

          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}