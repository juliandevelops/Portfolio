import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.scss";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./header";
import Footer from "./footer";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-primary",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Julian Schumacher",
  description: "My personal Website",
  publisher: "Julian Schumacher",
  applicationName: "Next",
  generator: "Next.js",
  keywords: [
    "Personal Website",
    "Julian Schumacher",
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
  authors: { name: "Julian Schumacher", url: "https://julianschumacher.dev" },
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
    title: "Julian Schumacher",
    description: "My personal Website",
    creator: "@julian_develops",
    images: [],
  },
  openGraph: {
    title: "Julian Schumacher",
    description: "My Website",
    url: "https://juliandevelops.com",
    siteName: "Julian Schumacher",
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
        className={`${sourceSerif4.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      >
      <body>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
