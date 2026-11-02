import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.scss";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "@/components/CookieBanner";
import ConsentGate from "@/components/ConsentGate";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "juliandevelops — security · code · ai",
  description: "security · code · ai — privacy-first software, projects and writing by juliandevelops.",
  publisher: "Julian Schumacher",
  applicationName: "juliandevelops",
  generator: "Next.js",
  keywords: [
    "juliandevelops",
    "Personal Website",
    "App Development",
    "App Developer",
    "Web Development",
    "Web Developer",
    "Full-Stack Development",
    "Full-Stack Developer",
    "Developer",
    "Portfolio",
    "Projects",
    "Blog",
    "Tech Blog",
    "Software Engineer",
    "Software Development",
    "iOS Development",
    "Android Development",
  ],
  authors: { name: "Julian Schumacher", url: "https://juliandevelops.com" },
  creator: "Julian Schumacher",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://juliandevelops.com"),
  twitter: {
    card: "summary_large_image",
    title: "juliandevelops — security · code · ai",
    description: "security · code · ai — privacy-first software, projects and writing by juliandevelops.",
    creator: "@juliandevelops",
    images: [],
  },
  openGraph: {
    title: "juliandevelops — security · code · ai",
    description: "security · code · ai — privacy-first software, projects and writing by juliandevelops.",
    url: "https://juliandevelops.com",
    siteName: "juliandevelops",
    images: [],
    locale: "en_US",
    type: "website",
    countryName: "germany",
    emails: ["support@juliandevelops.com"],
  },
  category: "development",
  referrer: "no-referrer",
  verification: {
    // Google verification added via Domain Name TXT record
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
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
      >
      <body>
        <Header />
        {children}
        <ConsentGate>
          <SpeedInsights />
        </ConsentGate>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
