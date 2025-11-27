import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "N/R DSGN Studio | Premium Web Design Agency",
  description:
    "We design stunning websites, landing pages, and e-commerce experiences that convert. Premium web design services with unlimited revisions and fast turnaround.",
  keywords: ["web design", "landing pages", "e-commerce", "UI/UX", "design agency", "website redesign"],
  authors: [{ name: "N/R DSGN Studio" }],
  openGraph: {
    title: "N/R DSGN Studio | Premium Web Design Agency",
    description: "We design stunning websites that convert. Premium web design services.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
