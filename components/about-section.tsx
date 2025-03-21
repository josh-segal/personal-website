import Image from "next/image"
import jsLogo from "../public/javascript.svg"
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
                  src={tsLogo}
                  alt="JavaScript"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>TypeScript</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={reactLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>React</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={nodeLogo}
                  alt="Node.js"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Node.js</span>
            </div>

          <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={pythonLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Python</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={javaLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Java</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={sqlLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>SQL</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={cLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>C</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={flaskLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Flask</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={streamlitLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Streamlit</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={gitLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Git</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={bashLogo}
                  alt="React"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>Bash</span>
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
                  src={vsCodeLogo}
                  alt="VS Code"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span>VS Code</span>
            </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={awsLogo}
                    alt="VS Code"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>AWS</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={gcpLogo}
                    alt="VS Code"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>GCP</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={dockerLogo}
                    alt="VS Code"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>Docker</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={pytorchLogo}
                    alt="VS Code"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>PyTorch</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <Image
                    src={tensorflowLogo}
                    alt="VS Code"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>TensorFlow</span>
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
                  src={northeasternLogo}
                  alt="University"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Northeastern University</h4>
                <p className="text-sm text-muted-foreground">Graduating May 2026</p>
                <p className="mt-1 text-sm">Computer Science & AI</p>
              </div>
            </div>
              </div>
              <div>
              </div>
            </div>
              </div>
              <div>
              </div>
            </div>
  )
}

