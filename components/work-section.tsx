import Image from "next/image"
import hmsLogo from "../public/hms.svg"
import houseflyLogo from "../public/housefly.svg"
import hillelLogo from "../public/hillel.svg"
import aibadgeLogo from "../public/aibadge.svg"
import hscLogo from "../public/hsc.svg"
import Link from "next/link"

export function WorkSection() {
  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Professional Experience</h3>

          <div className="space-y-6">
            <Link
              href="https://www.houseflyai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={houseflyLogo}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Founding Engineer</h4>
                <p className="text-sm text-muted-foreground">HouseFly • Jan. 2025 - Present</p>
                <p className="mt-2 text-sm">Built roommate matching mobile app, achieving 300+ users and $3600+ revenue. Won $3,000 in funding pitching to VC panel.</p>
              </div>
            </Link>

            <Link
              href="https://hms.harvard.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hmsLogo}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Software Engineer Intern</h4>
                <p className="text-sm text-muted-foreground">Harvard Medical School • Sept. 2024 - Dec. 2024</p>
                <p className="mt-2 text-sm">
                  Led development of ML desktop application for neuron segmentation data analysis. 
                  Reduced data analysis time by 99.9% (20 minutes manual to 0.5 seconds automated), 
                  and reduced human error by maintaining 93% correlation to six neuroscientists. 
                  Developed data processing framework for improving data quality with STAPLE and Majority Voting algorithms, 
                  improved data precision by 22% across 500+ images.
                  </p>
              </div>
            </Link>

            <Link
              href="https://hms.harvard.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hmsLogo}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Machine Learning Engineer Intern</h4>
                <p className="text-sm text-muted-foreground">Harvard Medical School • July 2024 - Sept. 2024</p>
                <p className="mt-2 text-sm">
                  Developed custom CNN architecture for neuron instance segmentation by extending open-source YOLOv8 model with custom loss function and augmented input feature space weight map, 
                  improved average precision by 32%.
                  Built semi-supervised data labeling pipeline, saving 150+ hours and achieving 100% recall, 96% precision across 500+ images</p>
              </div>
            </Link>

            {/* <Link
              href="https://hillel.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hillelLogo}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Data Analyst</h4>
                <p className="text-sm text-muted-foreground">Hillel International • Jan. 2024 - May 2024</p>
                <p className="mt-2 text-sm"></p>
              </div>
            </Link> */}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Projects</h3>

          <div className="space-y-6">
            {/* <Link href="javascript:;" className="block p-4 border rounded-lg hover:bg-muted transition-colors">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Roommate Matching App</h4>
                <p className="text-sm text-muted-foreground">Jan. 2025 - Present</p>
                <p className="mt-2 text-sm">Mobile app for finding roommate matches</p>
              </div>
            </Link> */}

            <Link
              href="https://github.com/josh-segal/public-interest"
              target="_blank"  
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Stock-Legislation Predictor</h4>
                <p className="text-sm text-muted-foreground">May 2024 - June 2024</p>
                <p className="mt-2 text-sm">ML Web app that tracks and predicts correlation between legislation, legislators, and stock price</p>
              </div>
            </Link>


            <Link
              href="https://github.com/josh-segal/NLP-Presentation-Similarity-Evaluation"
              target="_blank"  
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">NLP Similarity Framework</h4>
                <p className="text-sm text-muted-foreground">March 2024 - May 2024</p>
                <p className="mt-2 text-sm">AI tool and research on automated paper-presentation similarity</p>
              </div>
            </Link>
            

            <Link
              href="https://github.com/josh-segal/AI-task-assistant"
              target="_blank"  
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">AI Calendar Assistant</h4>
                <p className="text-sm text-muted-foreground">Feb. 2024 - March 2024</p>
                <p className="mt-2 text-sm">AI calendar assistant that automates task scheduling, management, and push notifications</p>
              </div>
            </Link>

            
            <Link
              href="https://github.com/josh-segal/Local-Tourist"
              target="_blank"  
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Local Tourist</h4>
                <p className="text-sm text-muted-foreground">Dec. 2023 - Feb. 2024</p>
                <p className="mt-2 text-sm">Web app for trip planning, ranking, and optimal route navigation</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Awards & Certifications</h3>

          
          <div className="space-y-6">
          <Link
              href="https://entrepreneursclub.sites.northeastern.edu/husky-startup-challenge/"
              target="_blank"  
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={hscLogo}
                  alt="Award"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">Husky Startup Challenge</h4>
                <p className="text-sm text-muted-foreground"> March 2025</p>
                <p className="mt-2 text-sm">2nd Place • $2,500</p>
                <p className="mt-2 text-sm">Social Media Award • $500</p>
                <p className="mt-2 text-sm"></p>
              </div>
            </Link>
            
            <Link
              href="https://aiinaction.sites.northeastern.edu/"
              target="_blank"  
              rel="noopener noreferrer"
              className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
                <Image
                  src={aibadgeLogo}
                  alt="Award"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="text-lg font-medium">AI Literacy Certificate</h4>
                <p className="text-sm text-muted-foreground">Institute for Experiential AI • 2024</p>
                <p className="mt-2 text-sm"></p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

