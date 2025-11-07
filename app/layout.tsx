import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "TESTX - QA Testing & Consulting | Software Quality Experts",
  description:
    "Quality software begins with thorough testing. TESTX s.r.o. offers specialized QA consulting, automated testing with Playwright, Cypress, K6, and professional training services in Slovakia.",
  keywords: [
    "QA testing",
    "software testing",
    "automated testing",
    "Playwright",
    "Cypress",
    "K6",
    "Selenium",
    "test automation",
    "QA consulting",
    "software quality",
    "testing services",
    "Slovakia",
    "Badín"
  ],
  authors: [{ name: "TESTX s.r.o." }],
  creator: "TESTX s.r.o.",
  publisher: "TESTX s.r.o.",
  openGraph: {
    title: "TESTX - QA Testing & Consulting | Software Quality Experts",
    description: "Quality software begins with thorough testing. TESTX offers specialized QA consulting, automated testing, and training services.",
    url: "https://testx.sk",
    siteName: "TESTX",
    type: "website",
    locale: "en_US",
    alternateLocale: "sk_SK",
  },
  twitter: {
    card: "summary_large_image",
    title: "TESTX - QA Testing & Consulting",
    description: "Quality software begins with thorough testing. Specialized QA consulting and automated testing services.",
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
  alternates: {
    canonical: "https://testx.sk",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
