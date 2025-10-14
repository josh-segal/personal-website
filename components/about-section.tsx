import Image from "next/image"
import Link from "next/link"
import tsLogo from "../public/typescript.svg"
import reactLogo from "../public/react.svg"
import nodeLogo from "../public/nodejs.svg"
import pythonLogo from "../public/python.svg"
import javaLogo from "../public/java.svg"
import sqlLogo from "../public/sql.svg"
import cLogo from "../public/c.svg"
import flaskLogo from "../public/flask.svg"
import streamlitLogo from "../public/streamlit.svg"
import gitLogo from "../public/git.svg"
import bashLogo from "../public/bash.svg"
import vsCodeLogo from "../public/vscode.svg"
import awsLogo from "../public/aws.svg"
import gcpLogo from "../public/gcp.svg"
import dockerLogo from "../public/docker.svg"
import pytorchLogo from "../public/pytorch.svg"
import tensorflowLogo from "../public/tensorflow.svg"
import northeasternLogo from "../public/northeastern.svg"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <div className="w-full bg-white">
      <section className="py-24">
        <div className="container px-4 md:px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Skills Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={tsLogo}
                      alt="TypeScript"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">TypeScript</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={reactLogo}
                      alt="React"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">React</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={nodeLogo}
                      alt="Node.js"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Node.js</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={pythonLogo}
                      alt="Python"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Python</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={javaLogo}
                      alt="Java"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Java</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={sqlLogo}
                      alt="SQL"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">SQL</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={cLogo}
                      alt="C"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">C</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={flaskLogo}
                      alt="Flask"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Flask</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={streamlitLogo}
                      alt="Streamlit"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Streamlit</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={gitLogo}
                      alt="Git"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Git</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={bashLogo}
                      alt="Bash"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Bash</span>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>

        {/* Tools Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Tools</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={vsCodeLogo}
                      alt="VS Code"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">VS Code</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={awsLogo}
                      alt="AWS"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">AWS</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={gcpLogo}
                      alt="GCP"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">GCP</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={dockerLogo}
                      alt="Docker"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">Docker</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={pytorchLogo}
                      alt="PyTorch"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">PyTorch</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={tensorflowLogo}
                      alt="TensorFlow"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-lg group-hover:text-blue-600 transition-colors duration-300">TensorFlow</span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Education</h3>

          <Link
            href="https://northeastern.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="group overflow-hidden border-0 transition-all duration-500 ease-out hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={northeasternLogo}
                      alt="University"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Northeastern University</h4>
                    <p className="text-sm text-muted-foreground">Graduating May 2026</p>
                    <p className="mt-1 text-base">Computer Science & AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
        </div>
      </section>
    </div>
  )
}

