"use client"

import { useState, useRef, useEffect } from "react"
import { RefreshCw, Zap, MessageCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const reasons = [
  {
    id: 1,
    title: "Unlimited Revisions",
    description:
      "We offer unlimited revisions within a set period, ensuring the best outcomes and complete client satisfaction.",
    icon: RefreshCw,
  },
  {
    id: 2,
    title: "Effortless Experience",
    description: "We value your time, keeping our process efficient and stress-free from start to finish.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Fast Turnaround Time",
    description: "We work quickly and deliver updates every 24-48 hours, with active and open communication flow.",
    icon: Zap,
  },
  {
    id: 4,
    title: "We Respond Every Day",
    description: "No more waiting. We're available daily to answer questions and provide support when you need it.",
    icon: MessageCircle,
  },
]

export function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            Why you will{" "}
            <span className="relative inline-block">
              love
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 12" fill="none">
                <path
                  d="M2 10C25 4 75 4 98 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-rose-500/50"
                />
              </svg>
            </span>{" "}
            us?
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={cn(
                "group relative rounded-3xl border border-border bg-card p-8 transition-all duration-500",
                "hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(reason.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div
                className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-500",
                  hoveredCard === reason.id && "opacity-100",
                )}
              />

              <div className="relative">
                {/* Icon with Animation */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center transition-all duration-500",
                      "group-hover:bg-foreground group-hover:text-background group-hover:scale-110 group-hover:rotate-3",
                    )}
                  >
                    <reason.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>

                {/* Decorative Element */}
                <div
                  className={cn(
                    "absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-all duration-500",
                    hoveredCard === reason.id && "opacity-100 scale-150",
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
