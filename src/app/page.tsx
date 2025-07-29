import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <main className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with enhanced typography */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Ariyan Andryan Aryja
              </h1>
              {/* Decorative line */}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-400 tracking-wide">
                Front-End Developer
              </h2>
            </div>
          </div>

          {/* Enhanced description */}
          <div className="mb-12 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Undergraduate{" "}
              <span className="text-blue-400 font-medium">
                Informatics Engineering
              </span>{" "}
              Student, Front-End & Back-End Developer Cohort at{" "}
              <span className="text-purple-400 font-medium">
                Coding Camp by DBS Foundation
              </span>
              , and Front-End Development Enthusiast.
            </p>
          </div>

          {/* Modern button group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="/projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transition-all duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <span>View Projects</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>

            <a
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 border border-gray-500 rounded-xl transition-all duration-300 group-hover:border-gray-400 group-hover:shadow-lg group-hover:shadow-white/10"></div>
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Stats or highlights section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h3 className="text-white font-semibold">Student</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Informatics Engineering at Politeknik Baja Tegal
              </p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <h3 className="text-white font-semibold">Developer</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Cohort at DBS Coding Camp 2025
              </p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-white font-semibold">Enthusiast</h3>
              </div>
              <p className="text-gray-400 text-sm">Front-End Development</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
