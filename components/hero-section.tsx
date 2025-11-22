"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import linkedinLogo from "../public/linkedin.svg"
import githubLogo from "../public/github.svg"
import { FileText } from "@deemlol/next-icons"

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

        <div className="flex justify-center items-center gap-6 mt-8">
          <Link
            href="https://github.com/josh-segal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={githubLogo}
              alt="GitHub"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshua-francis-segal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
          <Link
            href="https://github.com/josh-segal/resume/blob/main/Joshua_Segal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FileText size={32} color="#000" />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

