"use client"

import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Joshua Segal"
  const typingSpeed = 150 // milliseconds per character
  const typingRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0

    typingRef.current = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        if (typingRef.current) clearInterval(typingRef.current)
      }
    }, typingSpeed)

    return () => {
      if (typingRef.current) clearInterval(typingRef.current)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-white">
      
      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center w-full">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-black/80">
          {displayText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto">Welcome to my personal website</p>
      </div>
    </div>
  )
}

