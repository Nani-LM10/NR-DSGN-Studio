"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/work" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isMobileMenuOpen
          ? "bg-background border-b border-border py-3"
          : scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Logo - Left */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-semibold tracking-tight justify-self-start"
        >
          <span className="relative">
            <span className="text-foreground group-hover:opacity-0 transition-opacity duration-300">N/R</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              N/R
            </span>
          </span>
          <span className="text-muted-foreground font-light">DSGN</span>
        </Link>

        {/* Center Links - Properly centered */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-1 bg-secondary/80 backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-border/50">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-background/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-secondary/80 border border-border/50 hover:bg-secondary  hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            <Sun
              className={cn(
                "h-4 w-4 transition-all duration-500",
                isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
            />
            <Moon
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 transition-all duration-500",
                isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
              )}
            />
          </button>

          <Button
            className="hidden sm:flex magnetic-btn rounded-full px-5 py-2 h-auto font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 hover:scale-105 active:scale-95"
            asChild
          >
            <a href="/#book">Book a 10-min Call</a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background border-t border-border md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full rounded-full" asChild>
                <a href="/#book" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a 10-min Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
