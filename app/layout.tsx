import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/app/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alok Sinha - Aspiring Software Developer",
  description:
    "Portfolio of Alok Sinha - Building things with code & curiosity. Passionate about Machine Learning, Web Development, and Software Engineering.",
  keywords: ["Alok Sinha", "Software Developer", "Machine Learning", "Web Development", "Portfolio"],
  authors: [{ name: "Alok Sinha" }],
  creator: "Alok Sinha",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
