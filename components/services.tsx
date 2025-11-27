"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Globe, RefreshCw, ShoppingCart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "Web Designing & Landing Pages",
    description: "Beautiful, conversion-focused landing pages and websites that make your brand stand out.",
    price: "$100",
    priceInr: "₹10,000",
    icon: Globe,
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading", "Unlimited Revisions"],
    popular: false,
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 2,
    title: "Website Re-Vamp",
    description: "Transform your existing website into a modern, high-performing digital experience.",
    price: "Custom",
    priceInr: "Custom",
    icon: RefreshCw,
    features: ["Full Site Audit", "Modern Redesign", "Performance Boost", "Content Migration", "Training Included"],
    popular: true,
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: 3,
    title: "Full Scale E-Commerce",
    description: "Complete e-commerce solutions with payment integration, inventory management, and more.",
    price: "$250",
    priceInr: "₹20,000",
    icon: ShoppingCart,
    features: ["Product Management", "Payment Gateway", "Order Tracking", "Customer Dashboard", "Analytics Setup"],
    popular: false,
    color: "from-emerald-500/10 to-green-500/10",
  },
]

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">What We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium web design services tailored to your needs, delivered with excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "group relative rounded-3xl border border-border bg-card p-8 transition-all duration-500",
                "hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-2",
                service.popular && "border-foreground/20 md:scale-105",
              )}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 transition-opacity duration-500",
                  service.color,
                  hoveredCard === service.id && "opacity-100",
                )}
              />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background">
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-muted-foreground">/ {service.priceInr}</span>
                </div>

                {/* CTA */}
                <Button
                  className={cn(
                    "w-full group/btn rounded-full h-12 font-medium transition-all duration-300",
                    service.popular
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "bg-secondary text-foreground hover:bg-foreground hover:text-background",
                  )}
                  asChild
                >
                  <a href="#book">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
