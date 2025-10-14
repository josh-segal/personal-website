import Image from "next/image"
import hmsLogo from "../public/hms.svg"
import houseflyLogo from "../public/housefly.svg"
import aibadgeLogo from "../public/aibadge.svg"
import hscLogo from "../public/hsc.svg"
import nextLogo from "../public/next.svg"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function WorkSection() {
  return (
    <div className="w-full bg-white">
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Professional Experience</h3>

              <div className="space-y-6">

              <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Image
                            src={nextLogo}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                    </div>
                    <div className="border-l-2 border-primary pl-4 py-1">
                      <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Software Engineer Co-op - Full-Stack</h4>
                      <p className="text-sm text-muted-foreground">NExT Consulting • July 2025 - Dec. 2025</p>
                      <p className="mt-2 text-sm">Building production warehouse management system for industrial manufacturing client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                <Link
                  href="https://www.houseflyai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={houseflyLogo}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Co-Founder</h4>
                          <p className="text-sm text-muted-foreground">HouseFly • Jan. 2025 - Present</p>
                          <p className="mt-2 text-sm">Building AI tools for real estate agents to automate tasks and improve efficiency</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  href="https://hms.harvard.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={hmsLogo}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Software Engineer Intern - Backend & ML</h4>
                          <p className="text-sm text-muted-foreground">Harvard Medical School • Sept. 2024 - Dec. 2024</p>
                          <p className="mt-2 text-sm">
                          Built ML-powered neuron segmentation tool for neuroscience researchers</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* <Link
                  href="https://hms.harvard.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={hmsLogo}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Machine Learning Engineer Intern</h4>
                          <p className="text-sm text-muted-foreground">Harvard Medical School • July 2024 - Sept. 2024</p>
                          <p className="mt-2 text-sm">
                            Developed custom CNN architecture for neuron instance segmentation by extending open-source YOLOv8 model with custom loss function and augmented input feature space weight map, 
                            improved average precision by 32%.
                            Built semi-supervised data labeling pipeline, saving 150+ hours and achieving 100% recall, 96% precision across 500+ images</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link> */}

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
                  href="https://github.com/MiloMargolis/cornerstone-AI-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Agentic Lead Qualifier</h4>
                        {/* <p className="text-sm text-muted-foreground">July 2025 - August 2025</p> */}
                        <p className="mt-2 text-sm">AI agent orchestration system that automatically qualifies real estate leads through multi-step conversations</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  href="https://github.com/MiloMargolis/text-me-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">SMS Assistant for Restaurant</h4>
                        {/* <p className="text-sm text-muted-foreground">June 2025 - July 2025</p> */}
                        <p className="mt-2 text-sm">RAG-based AI assistant that filters staff messages, auto-responds to FAQs using knowledge base, and escalates priority items to management</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  href="https://github.com/josh-segal/healthtech-sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Medical Claims Engine</h4>
                        {/* <p className="text-sm text-muted-foreground">May 2025 - June 2025</p> */}
                        <p className="mt-2 text-sm">High-performance Rust claims processing engine with real-time reporting and analytics</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link
                  href="https://github.com/josh-segal/public-interest"
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Stock-Legislation Predictor</h4>
                        {/* <p className="text-sm text-muted-foreground">May 2024 - June 2024</p> */}
                        <p className="mt-2 text-sm">ML Web app that tracks and predicts correlation between legislation, legislators, and stock price</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>


                <Link
                  href="https://github.com/josh-segal/NLP-Presentation-Similarity-Evaluation"
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">NLP Similarity Framework</h4>
                        {/* <p className="text-sm text-muted-foreground">March 2024 - May 2024</p> */}
                        <p className="mt-2 text-sm">AI tool and research on automated paper-presentation similarity</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                

                <Link
                  href="https://github.com/josh-segal/AI-task-assistant"
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">AI Calendar Assistant</h4>
                        {/* <p className="text-sm text-muted-foreground">Feb. 2024 - March 2024</p> */}
                        <p className="mt-2 text-sm">AI calendar assistant that automates task scheduling, management, and push notifications</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                
                <Link
                  href="https://github.com/josh-segal/Local-Tourist"
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="border-l-2 border-primary pl-4 py-1">
                        <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Local Tourist</h4>
                        <p className="text-sm text-muted-foreground">Dec. 2023 - Feb. 2024</p>
                        <p className="mt-2 text-sm">Web app for trip planning, ranking, and optimal route navigation</p>
                      </div>
                    </CardContent>
                  </Card>
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
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={hscLogo}
                            alt="Award"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Husky Startup Challenge</h4>
                          <p className="text-sm text-muted-foreground"> March 2025</p>
                          <p className="mt-2 text-sm">2nd Place • $2,500</p>
                          <p className="mt-2 text-sm">Social Media Award • $500</p>
                          <p className="mt-2 text-sm"></p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link
                  href="https://aiinaction.sites.northeastern.edu/"
                  target="_blank"  
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={aibadgeLogo}
                            alt="Award"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div className="border-l-2 border-primary pl-4 py-1">
                          <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">AI Literacy Certificate</h4>
                          <p className="text-sm text-muted-foreground">Institute for Experiential AI • 2024</p>
                          <p className="mt-2 text-sm"></p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

