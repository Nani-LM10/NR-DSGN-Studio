"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How do I get started with a project?",
    answer:
      "Simply book a 10-minute call with us through our booking system. During the call, we'll discuss your requirements, timeline, and budget. After understanding your needs, we'll provide a detailed proposal within 24 hours.",
  },
  {
    question: "What's included in the unlimited revisions?",
    answer:
      "Our unlimited revisions policy covers any design changes, content updates, or layout adjustments within the project scope. This applies during the active design phase (typically 2-4 weeks depending on the project size). Major scope changes may require additional discussion.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page typically takes 5-7 business days. Website redesigns take 2-3 weeks, and full e-commerce solutions take 3-4 weeks. We provide regular updates every 24-48 hours to keep you informed of progress.",
  },
  {
    question: "Do you offer ongoing support after the project?",
    answer:
      "Yes! We offer 30 days of free support after project completion for any bugs or minor adjustments. For ongoing maintenance, content updates, or new features, we offer flexible monthly retainer packages.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, PayPal, UPI, and bank transfers. For projects over $300/20,000 INR, we offer a 50% upfront and 50% upon completion payment structure. We also accept UPI and net banking for clients in India.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300",
                openIndex === index && "border-foreground/20 shadow-lg shadow-foreground/5",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-secondary/50"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <div
                  className={cn(
                    "w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 transition-all duration-300",
                    openIndex === index && "bg-foreground text-background rotate-180",
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
