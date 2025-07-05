import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alok Sinha - Aspiring Software Developer",
  description:
    "Personal portfolio of Alok Sinha, showcasing expertise in Machine Learning, Web Development, C/C++, and Operating Systems. Passionate about building innovative solutions.",
  keywords: [
    "Alok Sinha",
    "Software Developer",
    "Machine Learning",
    "Web Development",
    "C++",
    "Operating Systems",
    "Portfolio",
    "React",
    "Python",
  ],
  authors: [{ name: "Alok Sinha", url: "https://github.com/AlokSinha26" }],
  creator: "Alok Sinha",
  openGraph: {
    title: "Alok Sinha - Aspiring Software Developer",
    description: "Personal portfolio showcasing projects in ML, Web Dev, C/C++, and OS",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alok Sinha - Aspiring Software Developer",
    description: "Personal portfolio showcasing projects in ML, Web Dev, C/C++, and OS",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
