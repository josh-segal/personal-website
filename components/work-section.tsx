import Image from "next/image"
import hmsLogo from "../public/hms.svg"
import houseflyLogo from "../public/housefly.svg"
import hillelLogo from "../public/hillel.svg"
import aibadgeLogo from "../public/aibadge.svg"
import hscLogo from "../public/hsc.svg"

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
                  src={houseflyLogo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Founding Engineer</h4>
                <p className="text-sm text-muted-foreground">HouseFly • Jan. 2025 - Present</p>
                <p className="mt-2"></p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hmsLogo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Software Engineer Intern</h4>
                <p className="text-sm text-muted-foreground">Harvard Medical School • Sept. 2024 - Dec. 2024</p>
                <p className="mt-2"></p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hmsLogo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Machine Learning Engineer Intern</h4>
                <p className="text-sm text-muted-foreground">Harvard Medical School • July 2024 - Sept. 2024</p>
                <p className="mt-2"></p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hillelLogo}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Data Analyst</h4>
                <p className="text-sm text-muted-foreground">Hillel International • Jan. 2024 - May 2024</p>
                <p className="mt-2"></p>
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Projects</h3>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">Roommate Matching App</h4>
              <p className="mt-2"></p>
            </div>

            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">Stock-Legislation Predictor</h4>
              <p className="mt-2"></p>
            </div>

            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">NLP Similarity Framework</h4>
              <p className="mt-2"></p>
            </div>

            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">AI Calender Assistant</h4>
              <p className="mt-2"></p>
            </div>

            <div className="border-l-2 border-primary pl-4 py-1">
              <h4 className="font-medium">Trip Planning & Ranking Website</h4>
              <p className="mt-2"></p>
            </div>

          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Awards & Certifications</h3>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hscLogo}
                  alt="Award"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Husky Startup Challenge</h4>
                <p className="text-sm text-muted-foreground">Top 8 Finalist • 2025</p>
                <p className="mt-2"></p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={aibadgeLogo}
                  alt="Award"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">AI Literacy</h4>
                <p className="text-sm text-muted-foreground">Institute for Experiential AI • 2024</p>
                <p className="mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

