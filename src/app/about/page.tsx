import React from "react";
import Image from "next/image";
import htmlImage from "@/assets/html.png";
import cssImage from "@/assets/css-3.png";
import jsImage from "@/assets/js.png";
import nodeImage from "@/assets/node-js.png";
import tailwindImage from "@/assets/tailwind.png";
import reactImage from "@/assets/react.png";
import viteImage from "@/assets/vite.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>

      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* About Me Header */}
          <div className="text-3xl font-bold text-white pb-12">
            <h1 className="font-bold text-[32px]">About Me</h1>
            <div className="absolute bottom-2 top-0 mt-36 items-center w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Descriptions */}
          <div className="prose prose-lg max-w-3xl text-gray-300 space-y-4">
            <p>
              I am a Front-End Developer with a passion for creating responsive
              and user-friendly web applications. Currently, I am learning{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-600 transition-colors duration-200"
              >
                TypeScript
              </a>{" "}
              to enhance my skills and contribute to innovative projects.
            </p>
            <p>
              My journey in web development started with a keen interest in
              building interactive user interfaces. I enjoy working with modern
              technologies and frameworks to deliver high-quality web
              experiences. I&apos;m also expanding my skills into back-end
              development, exploring server-side technologies to become a Full
              Stack Developer.
            </p>
          </div>

          {/* Skills Header */}
          <div className="text-2xl font-bold text-white pt-8 mb-4">
            <h2 className="text-[20px]">Skills</h2>
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap justify-start max-w-3xl gap-3 mt-4">
            {/* Skill Card Template */}
            {[
              { src: htmlImage, alt: "HTML", label: "HTML" },
              { src: cssImage, alt: "CSS", label: "CSS" },
              { src: jsImage, alt: "JavaScript", label: "JAVASCRIPT" },
              { src: nodeImage, alt: "Node.js", label: "NODE.JS" },
              {
                src: tailwindImage,
                alt: "Tailwind CSS",
                label: "TAILWIND CSS",
              },
              { src: reactImage, alt: "React", label: "REACT" },
              { src: viteImage, alt: "Vite", label: "VITE" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 border border-gray-600 bg-gray-800/20 backdrop-blur-md py-2 px-4 w-fit rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-gray-800/30 cursor-pointer"
              >
                <Image src={skill.src} alt={skill.alt} className="w-4 h-4" />
                <span className="text-sm font-medium text-white">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
