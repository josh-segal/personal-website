import Link from "next/link"
import Image from "next/image"
import mailLogo from "../public/mail.svg"
import linkedinLogo from "../public/linkedin.svg"
import githubLogo from "../public/github.svg"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {

  return (
    <div className="w-full bg-white">
      <section className="py-24">
        <div className="container px-4 md:px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">Contact Me</h2>

      <div className="flex flex-col items-center space-y-8 max-w-lg mx-auto">
        <Link
          href="mailto:segal.jo@northeastern.edu"
          className="block w-full"
        >
          <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 text-lg">
                <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={mailLogo}
                    alt="Email"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="group-hover:text-blue-600 transition-colors duration-300">segal.jo@northeastern.edu</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="https://www.linkedin.com/in/joshua-francis-segal/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 text-lg">
                <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={linkedinLogo}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="https://github.com/josh-segal"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 text-lg">
                <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={githubLogo}
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="group-hover:text-blue-600 transition-colors duration-300">GitHub</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
        </div>
      </section>
    </div>
  )
}

