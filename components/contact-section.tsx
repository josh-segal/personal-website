import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Github } from "lucide-react"
import mailLogo from "../public/mail.svg"
import linkedinLogo from "../public/linkedin.svg"
import githubLogo from "../public/github.svg"

export function ContactSection() {

  return (
    <div className="container px-4 md:px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Contact Me</h2>

      <div className="flex flex-col items-center space-y-8 max-w-lg mx-auto">
        <Link
          href="mailto:segal.jo@northeastern.edu"
          className="flex items-center space-x-4 w-full p-5 border rounded-lg hover:bg-muted transition-colors text-lg"
        >
            <div className="relative w-6 h-6">
              <Image
                src={mailLogo}
                alt="Email"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          <span>segal.jo@northeastern.edu</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/joshua-francis-segal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 w-full p-5 border rounded-lg hover:bg-muted transition-colors text-lg"
        >
            <div className="relative w-6 h-6">
              <Image
                src={linkedinLogo}
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          <span>LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/josh-segal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 w-full p-5 border rounded-lg hover:bg-muted transition-colors text-lg"
        >
            <div className="relative w-6 h-6">
              <Image
                src={githubLogo}
                alt="GitHub"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  )
}

