"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
]

function NavLinks({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  const pathname = usePathname()

  return (
    <ul className={cn(orientation === "horizontal" ? "hidden md:flex items-center gap-6" : "flex flex-col gap-4 mt-6")}>
      {links.map(({ href, label }) => {
        const active = pathname === href
        return (
          <li key={href}>
            <Link
              href={href}
              className={cn(
                "transition-colors hover:text-purple-600 dark:hover:text-purple-400",
                active ? "text-purple-600 dark:text-purple-400 font-semibold" : "text-zinc-700 dark:text-zinc-300",
              )}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="rounded bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-1 text-white">AS</span>
          <span className="sr-only">Alok Sinha</span>
        </Link>

        {/* Desktop links */}
        <NavLinks orientation="horizontal" />

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile menu button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <NavLinks orientation="vertical" />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

/* default export for backward-compat */
export default Navbar
