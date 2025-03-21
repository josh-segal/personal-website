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
    <div className="container px-4 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
        {displayText}
        <span className="animate-blink">|</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Welcome to my personal website</p>
    </div>
  )
}

