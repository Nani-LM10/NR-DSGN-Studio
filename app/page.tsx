import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ScrollingGallery } from "@/components/scrolling-gallery"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { FAQ } from "@/components/faq"
import { BookCall } from "@/components/book-call"
import { Footer } from "@/components/footer"
import CalInline from "@/components/calinline"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ScrollingGallery />
      <Services />
      <WhyUs />
      <FAQ />
      <BookCall />
      <div id="calendar-section">
        <CalInline />
      </div>
      <Footer />
    </main>
  )
}
