import Link from "next/link"
import Image from "next/image"
import githubLogo from "../public/github.svg"
import linkedinLogo from "../public/linkedin.svg"
import mailLogo from "../public/mail.svg"

export function ContactSection() {

  return (
    <div className="container px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">Contact Me</h2>

      <div className="flex flex-col items-center space-y-6 max-w-md mx-auto">
        <Link
          href="mailto:segal.jo@northeastern.edu"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
            <div className="relative w-5 h-5">
              <Image
                src={mailLogo}
                alt="Email"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          <span>segal.jo@northeastern.edu</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/joshua-francis-segal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
            <div className="relative w-5 h-5">
              <Image
                src={linkedinLogo}
                alt="LinkedIn"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          <span>LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/josh-segal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 w-full p-4 border rounded-lg hover:bg-muted transition-colors"
        >
            <div className="relative w-5 h-5">
              <Image
                src={githubLogo}
                alt="GitHub"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  )
}

