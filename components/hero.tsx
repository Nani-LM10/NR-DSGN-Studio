"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Monitor, Smartphone, Layout } from "lucide-react"



export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 30,
        y: (e.clientY - rect.top - rect.height / 2) / 30,
      })
    }
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-transform duration-700"
        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted-foreground/5 rounded-full blur-3xl transition-transform duration-700"
        style={{ transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="block">
            We're{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Experts</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-foreground/20"
                />
              </svg>
            </span>{" "}
            in designing
          </span>
          <span className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <span className="inline-flex items-center gap-2">
              <span
                className="p-2 rounded-xl bg-secondary border border-border transition-transform duration-300 hover:scale-110 hover:rotate-3"
                style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              >
                <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span>Websites</span>
            </span>
            <span className="text-muted-foreground">,</span>
            <span className="inline-flex items-center gap-2">
              <span
                className="p-2 rounded-xl bg-secondary border border-border transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              >
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span>Apps</span>
            </span>
            <span className="text-muted-foreground">&</span>
            <span className="inline-flex items-center gap-2">
              <span
                className="p-2 rounded-xl bg-secondary border border-border transition-transform duration-300 hover:scale-110 hover:rotate-3"
                style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              >
                <Layout className="w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span>Dashboards</span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          That's how we've successfully delivered <span className="text-foreground font-medium">2+ projects</span> for
          clients worldwide
        </p>

        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 transition-all duration-700 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">Accepting new projects</span>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <Button
            size="lg"
            className="group magnetic-btn rounded-full px-8 h-14 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/20 hover:scale-105 active:scale-95"
            asChild
          >
            <a href="#book">
              Book a 10-min Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group magnetic-btn rounded-full px-8 h-14 text-base font-medium border-border/50 hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 bg-transparent"
            asChild
          >
            <a href="#services">
              {/* <LuAtom className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> */}
              View Services
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className={`flex items-center justify-center gap-8 mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold">2+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center hidden sm:block">
            <div className="text-3xl sm:text-4xl font-semibold">24h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
