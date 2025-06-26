import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ryanz23",
      icon: Github,
      description: "Check out my code and projects",
      color: "text-gray-300"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ariyan-andryan-aryja-927730332",
      icon: Linkedin,
      description: "Connect with me professionally",
      color: "text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/dryan.z",
      icon: Instagram,
      description: "Follow my journey and updates",
      color: "text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <main className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="relative text-4xl inline-block">
              <h1 className="text-[32px] font-extrabold text-white mb-4">
                Let&apos;s Connect
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed">
              I&apos;m always excited to collaborate on new projects and connect with fellow developers. 
              Feel free to reach out through any of these platforms!
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 max-w-md mx-auto">
              <div className="flex flex-col items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Email me directly</p>
                  <a 
                    href="mailto:ariyanandryan@gmail.com"
                    className="text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    ariyanandryan@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 active:scale-95"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <social.icon 
                      className={`w-12 h-12 ${social.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{social.name}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Response Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quick Response Guaranteed
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                I typically respond within 24 hours. Whether it&apos;s about a project collaboration, 
                job opportunity, or just a friendly chat about tech!
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                  Open to collaborations
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                  Available for freelance
                </span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full">
                  Always learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}