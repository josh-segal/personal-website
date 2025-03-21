import Image from "next/image"

export function AboutSection() {
  return (
    <div className="container px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Skills Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Skills</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="JavaScript"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>JavaScript/TypeScript</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>React/Next.js</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Node.js"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Tools Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Tools</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="VS Code"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>VS Code</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Figma"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Figma</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Git"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Git/GitHub</span>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Education</h3>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="University"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Master of Computer Science</h4>
                <p className="text-sm text-muted-foreground">University Name • 2016 - 2018</p>
                <p className="mt-1 text-sm">Specialized in Web Technologies and Software Engineering</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="University"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-sm text-muted-foreground">University Name • 2012 - 2016</p>
                <p className="mt-1 text-sm">Focus on Programming and Software Development</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Certificate"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Full-Stack Web Development</h4>
                <p className="text-sm text-muted-foreground">Online Platform • 2020</p>
                <p className="mt-1 text-sm">Certification in modern web development technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

