"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUpRight, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const projects = [
  {
    id: "aurelia-jewelry",
    title: "Aurelia Jewelry",
    category: "E-Commerce",
    description:
      "A luxury jewelry e-commerce landing page featuring elegant design, smooth animations, and a premium shopping experience. Built with modern web technologies for a high-end jewelry brand.",
    link: "https://jewellery-landing-one.vercel.app/",
    featured: true,
    thumbnail: "/images/jewhomepage.png",
    images: [
      {
        src: "/images/jewhomepage.png",
        alt: "Aurelia Jewelry Hero - Where Luxury Meets Artistry",
        span: "col-span-2 row-span-2",
      },
      {
        src: "/images/items.png",
        alt: "Aurelia Jewelry Collection Page",
        span: "col-span-2 row-span-1",
      },
      {
        src: "/images/itemsview.png",
        alt: "Product Detail Modal - Pearl Cascade Earrings",
        span: "col-span-1 row-span-1",
      },
      {
        src: "/images/cart.png",
        alt: "Shopping Cart Drawer",
        span: "col-span-1 row-span-1",
      },
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "E-Commerce"],
    year: "2024",
  },
]

// Project Card Component
function ProjectCard({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700",
        project.featured ? "col-span-1 md:col-span-2 row-span-1 md:row-span-2" : "col-span-1 row-span-1",
        "border border-border bg-card hover:border-foreground/20",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Main Image - Using thumbnail */}
      <div className="relative w-full h-full min-h-[400px] overflow-hidden">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-105" : "scale-100",
          )}
        />

        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-60",
          )}
        />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className={cn("transform transition-all duration-500", isHovered ? "translate-y-0" : "translate-y-4")}>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-background/20 backdrop-blur-sm rounded-full text-background">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-background/20 backdrop-blur-sm rounded-full text-background">
                {project.year}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-background/20 backdrop-blur-sm rounded-full text-background">
                {"Delivered"}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-background mb-2">{project.title}</h3>
            <p
              className={cn(
                "text-background/80 text-sm max-w-md transition-all duration-500 line-clamp-2",
                isHovered ? "opacity-100" : "opacity-0",
              )}
            >
              {project.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div
            className={cn(
              "absolute top-6 right-6 p-3 rounded-full bg-background/20 backdrop-blur-sm transition-all duration-500",
              isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0",
            )}
          >
            <ArrowUpRight className="w-5 h-5 text-background" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Project Modal Component
function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof projects)[0] | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-3xl overflow-hidden animate-in zoom-in-95 fade-in duration-300 border border-border">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Image Gallery - Bento Grid */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={cn("relative rounded-2xl overflow-hidden cursor-pointer group", image.span)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  {/* Image label on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-background text-xs font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-96 p-8 bg-secondary/30 border-t lg:border-t-0 lg:border-l border-border flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-sky-500 text-background rounded-full">
                {project.year}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-green-500 text-background rounded-full">
                {"Delivered"}
              </span>
            </div>

            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs bg-secondary rounded-full text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground bg-secondary rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Selected <span className="text-muted-foreground">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Explore our latest projects and see how we transform ideas into beautiful, functional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[400px]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => openProject(project)} />
            ))}

            {/* Coming Soon Cards */}
            {[1, 2, 3].map((i) => (
              <div
                key={`coming-${i}`}
                className="relative rounded-3xl overflow-hidden border border-dashed border-border/50 bg-secondary/20 flex items-center justify-center min-h-[300px] group hover:border-border transition-colors duration-300"
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-muted-foreground">+</span>
                  </div>
                  <p className="text-muted-foreground font-medium">More Coming Soon</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">New projects in development</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to link to home page #book section */}
      <section className="py-20 px-6 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's collaborate and create something amazing together. We'd love to hear about your next project.
          </p>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}
