"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Laptop, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ThemeToggle - lets the user switch between Light, Dark, and System themes.
 *
 * Exports:
 *   • default  – ThemeToggle
 *   • named    – ThemeToggle (same component)
 *
 * Usage:
 *   import ThemeToggle from '@/components/theme-toggle'
 *   // or
 *   import { ThemeToggle } from '@/components/theme-toggle'
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme, systemTheme } = useTheme()

  const current = theme === "system" ? systemTheme : theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" className={cn("transition-transform", className)}>
          {/* Icon swaps based on resolved theme */}
          {current === "dark" ? (
            <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
          ) : (
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// ✔️ provide default export too
export default ThemeToggle
