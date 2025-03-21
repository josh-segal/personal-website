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

export function AboutSection() {
  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Skills Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={tsLogo}
                  alt="TypeScript"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">TypeScript</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={reactLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">React</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={nodeLogo}
                  alt="Node.js"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Node.js</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={pythonLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Python</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={javaLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Java</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={sqlLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">SQL</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={cLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">C</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={flaskLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Flask</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={streamlitLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Streamlit</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={gitLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Git</span>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={bashLogo}
                  alt="React"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Bash</span>
            </div>


          </div>
        </div>

        {/* Tools Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Tools</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={vsCodeLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">VS Code</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={awsLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">AWS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={gcpLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">GCP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={dockerLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">Docker</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={pytorchLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">PyTorch</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={tensorflowLogo}
                  alt="VS Code"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-lg">TensorFlow</span>
            </div>
          </div>

        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Education</h3>

          <Link
            href="https://northeastern.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 p-4 border rounded-lg hover:bg-muted transition-colors"
          >
            <div className="relative flex-shrink-0 w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center mt-1">
              <Image
                src={northeasternLogo}
                alt="University"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-medium">Northeastern University</h4>
              <p className="text-sm text-muted-foreground">Graduating May 2026</p>
              <p className="mt-1 text-base">Computer Science & AI</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

