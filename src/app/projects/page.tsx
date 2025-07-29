import React from "react";
import cekviralImage from "@/assets/cekviral.png";
import storyImage from "@/assets/storyapp.png";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>

      {/* Decorative blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Projects Header */}
          <div className="text-3xl font-bold text-white pb-12">
            <h1 className="font-bold text-[32px]">Projects</h1>
            <div className="absolute bottom-2 top-0 mt-36 items-center w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="mb-4 prose prose-lg max-w-3xl text-gray-300 space-y-4">
            <p>
              Here are some of my recent projects showcasing my skills in
              front-end web development.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CekViral */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={cekviralImage}
                alt="Project Image"
                height={300}
                className="rounded-md mb-4 w-full object-cover"
              />
              <h2 className="text-xl font-semibold text-white mb-2">
                CekViral Built With React
              </h2>
              <p className="text-gray-400 pb-2">
                A web application for fact-checking of trending topics on Social
                Media.
              </p>
              <p className="text-gray-400 pb-4"><i>June 13, 2025</i></p>
              <a
                href="https://cek-viral-try.vercel.app"
                target="_blank"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-md px-4 py-2 font-medium text-[14px] transition-all duration-300 text-white hover:scale-105 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.2),0_0_20px_rgba(147,51,234,0.2)] active:scale-95"
              >
                View Project
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Story App */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={storyImage}
                alt="Project Image"
                height={300}
                className="rounded-md mb-4 w-full object-cover"
              />
              <h2 className="text-xl font-semibold text-white mb-2">
                Story App JavaScript
              </h2>
              <p className="text-gray-400 pb-2">
                A simple web application to share stories.
              </p>
              <p className="text-gray-400 pb-4"><i>June 9, 2025</i></p>
              <a
                href="https://story-web-app.netlify.app"
                target="_blank"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-md px-4 py-2 font-medium text-[14px] transition-all duration-300 text-white hover:scale-105 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.2),0_0_20px_rgba(147,51,234,0.2)] active:scale-95"
              >
                View Project
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
