import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <BackToTop />

      <section id="hero" className="min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <section id="work" className="min-h-screen flex items-center justify-center py-20">
        <WorkSection />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <AboutSection />
      </section>

      <section id="blog" className="min-h-screen flex items-center justify-center py-20">
        <BlogSection />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <ContactSection />
      </section>
    </main>
  )
}

