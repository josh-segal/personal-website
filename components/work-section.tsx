import Image from "next/image"

export function WorkSection() {
  return (
    <div className="container px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Professional Experience</h3>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Senior Developer</h4>
                <p className="text-sm text-muted-foreground">Company Name • 2020 - Present</p>
                <p className="mt-2">Led development of key projects and mentored junior developers.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Web Developer</h4>
                <p className="text-sm text-muted-foreground">Previous Company • 2017 - 2020</p>
                <p className="mt-2">Developed and maintained client websites and applications.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Projects</h3>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">E-commerce Platform</h4>
              <p className="mt-2">Built a full-stack e-commerce solution with Next.js and Stripe.</p>
            </div>

            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">Portfolio Website</h4>
              <p className="mt-2">Designed and developed a responsive portfolio website.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Awards</h3>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Award"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Best Web Design</h4>
                <p className="text-sm text-muted-foreground">Design Awards • 2022</p>
                <p className="mt-2">Recognized for excellence in web design and user experience.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Award"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Innovation Award</h4>
                <p className="text-sm text-muted-foreground">Tech Conference • 2021</p>
                <p className="mt-2">Awarded for innovative approach to solving complex problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

