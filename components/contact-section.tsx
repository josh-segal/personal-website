import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  // Set to true to use custom images, false to use default icons
  const useCustomImages = {
    email: false,
    linkedin: false,
    github: false,
  }

  return (
    <div className="container px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Contact Me</h2>

      <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
        <Link
          href="mailto:your.email@example.com"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
          {useCustomImages.email ? (
            <div className="relative w-5 h-5">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Email"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ) : (
            <Mail className="h-5 w-5" />
          )}
          <span>your.email@example.com</span>
        </Link>

        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
          {useCustomImages.linkedin ? (
            <div className="relative w-5 h-5">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="LinkedIn"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ) : (
            <Linkedin className="h-5 w-5" />
          )}
          <span>LinkedIn Profile</span>
        </Link>

        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
          {useCustomImages.github ? (
            <div className="relative w-5 h-5">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="GitHub"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ) : (
            <Github className="h-5 w-5" />
          )}
          <span>GitHub Profile</span>
        </Link>
      </div>
    </div>
  )
}

