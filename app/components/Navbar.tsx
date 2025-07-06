"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Code, User, Briefcase, FileText, Mail, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Code },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Wrench },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block group-hover:text-blue-400 transition-colors">
              Alok Sinha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 group",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50",
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive ? "text-white" : "text-gray-400 group-hover:text-blue-400",
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gray-900 border-gray-800">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AS</span>
                      </div>
                      <span className="text-white font-bold text-lg">Alok Sinha</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2">
                      {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                              isActive
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-gray-800/50",
                            )}
                          >
                            <item.icon
                              className={cn(
                                "h-5 w-5 transition-colors",
                                isActive ? "text-white" : "text-gray-400 group-hover:text-blue-400",
                              )}
                            />
                            {item.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-6 border-t border-gray-800">
                    <p className="text-gray-400 text-sm text-center">Building things with code & curiosity</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
