"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavigation = (item: { id: string, label: string }) => {
    if (pathname === "/") {
      // On home page, scroll to section
      scrollToSection(item.id)
    } else {
      // On other pages, navigate to home page with hash
      window.location.href = `/#${item.id}`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Only add scroll listener on home page
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-6">
      <div className="container px-4 md:px-6 flex justify-between md:justify-center items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-12">
          {[
            { id: "hero", label: "Home" },
            { id: "work", label: "Work" },
            { id: "about", label: "About" },
            { id: "blog", label: "Blog" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary px-2 py-1",
                  activeSection === item.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Empty div for flex alignment on mobile */}
        <div className="w-8 md:hidden"></div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t py-4 absolute w-full">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { id: "hero", label: "Home" },
              { id: "work", label: "Work" },
              { id: "about", label: "About" },
              { id: "blog", label: "Blog" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleNavigation(item)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary w-full py-3",
                    activeSection === item.id ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

