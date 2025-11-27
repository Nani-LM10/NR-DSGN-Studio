"use client"

import { ArrowUpRight, Mail, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/narasimha_lm10/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/razlm10" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/narasimha10/" },
]

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="py-16 sm:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Logo & Description */}
          <div>
            <a href="#" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight mb-4">
              <span className="text-foreground">N/R</span>
              <span className="text-muted-foreground font-light">DSGN Studio</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              We commit fully to every project, delivering top-quality design that reflects your vision.
            </p>
            <Button
              className="group magnetic-btn rounded-full px-6 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95"
              asChild
            >
              <a href="#book">
                Book a 10-min Call
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>

          {/* Right Side - Links & Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 underline-animation"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:narasimha9885780378@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 underline-animation inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Mail Us
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} N/R DSGN Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300 underline-animation">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300 underline-animation">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
