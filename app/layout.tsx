import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alok Sinha - Aspiring Software Developer",
  description:
    "Computer Engineering student passionate about DSA, Web Development, and Machine Learning. Explore my projects and skills.",
  keywords: [
    "Alok Sinha",
    "Software Developer",
    "Computer Engineering",
    "Machine Learning",
    "Web Development",
    "C++",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Alok Sinha", url: "https://github.com/AlokSinha26" }],
  creator: "Alok Sinha",
  openGraph: {
    title: "Alok Sinha - Aspiring Software Developer",
    description: "Computer Engineering student passionate about DSA, Web Development, and Machine Learning",
    type: "website",
    locale: "en_US",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <Navbar />
            <main className="pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
