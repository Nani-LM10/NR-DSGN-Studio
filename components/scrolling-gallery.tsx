"use client"

import { useRef, useState } from "react"

const projectImages = [
  { image: "/modern-saas-dashboard-dark-theme-ui-design.jpg", title: "SaaS Dashboard" },
  { image: "/minimal-ecommerce-product.png", title: "E-commerce Site" },
  { image: "/mobile-app-ui-design-colorful-gradient.jpg", title: "Mobile App" },
  { image: "/landing-page-hero-section-modern-startup.jpg", title: "Landing Page" },
  { image: "/portfolio-website-creative-designer.jpg", title: "Portfolio" },
  { image: "/fintech-app-interface-clean-banking.jpg", title: "Fintech App" },
  { image: "/social-media-app-dark-mode-feed.jpg", title: "Social App" },
  { image: "/travel-booking-website-modern-vacation.jpg", title: "Travel Site" },
]

const projectImages2 = [
  { image: "/healthcare-app-ui-design-clean-medical.jpg", title: "Healthcare App" },
  { image: "/fitness-app-dashboard-modern-workout.jpg", title: "Fitness App" },
  { image: "/restaurant-website-elegant-food.jpg", title: "Restaurant Site" },
  { image: "/real-estate-website-modern-property.jpg", title: "Real Estate" },
  { image: "/music-streaming-app-dark-spotify.jpg", title: "Music App" },
  { image: "/education-platform-dashboard-learning.jpg", title: "EdTech Platform" },
  { image: "/crypto-trading-dashboard-dark-bitcoin.jpg", title: "Crypto Dashboard" },
  { image: "/food-delivery-app-colorful-order.jpg", title: "Delivery App" },
]

export function ScrollingGallery() {
  const [isHovered, setIsHovered] = useState(false)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest">Our Recent<a className="text-sky-600 font-medium cursor-pointer hover:text-sky-500 hover:text-xl transition-all duration-300" href="/work"> Work </a> </p>
      </div>

      {/* Row 1 - Scrolling Left */}
      <div className="relative mb-6" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={row1Ref}
          className={`flex gap-6 animate-scroll-left ${isHovered ? "[animation-play-state:paused]" : ""}`}
          style={{ width: "max-content" }}
        >
          {[...projectImages, ...projectImages].map((project, index) => (
            <div
              key={index}
              className="group relative w-80 h-52 rounded-2xl overflow-hidden flex-shrink-0 border border-border bg-card transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/5"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-background font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Right */}
      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={row2Ref}
          className={`flex gap-6 animate-scroll-right ${isHovered ? "[animation-play-state:paused]" : ""}`}
          style={{ width: "max-content" }}
        >
          {[...projectImages2, ...projectImages2].map((project, index) => (
            <div
              key={index}
              className="group relative w-80 h-52 rounded-2xl overflow-hidden flex-shrink-0 border border-border bg-card transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/5"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-background font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
