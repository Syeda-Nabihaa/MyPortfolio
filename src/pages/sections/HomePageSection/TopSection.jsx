import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export default function TopSection() {
  return (
    <div>
        <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 ">
      
        {/* Content - positioned above everything */}
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium animate-fade-in">
            <Sparkles size={16} className="text-yellow-400" />
            <span>Available for freelance work</span>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl">
            {/* Animated Code Tag */}
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <span className="text-blue-400 font-mono text-sm">&lt;</span>
              <span className="text-emerald-400 font-mono text-sm">
                developer
              </span>
              <span className="text-blue-400 font-mono text-sm"> /&gt;</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>

            {/* Subtitle */}
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              <span className="inline-block">
                I build{" "}
                <span className="text-cyan-400 font-medium">exceptional</span>{" "}
                digital experiences
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Passionate about creating beautiful, responsive, and user-friendly
              web applications with modern technologies. Let's bring your ideas
              to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <Code2 size={20} />
                <span>View My Work</span>
              </Link>
              <Link
                to="/contacts"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <IoMail size={20} />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center justify-center gap-4">
                <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                <FaGithub size={20} />
                </a>
                <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                <FaLinkedin size={20} />
                </a>
                <a
                href="mailto:your@email.com"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                <IoMail size={20} />
                </a>
            </div> */}
          </div>

          {/* Scroll Indicator */}
        </div>
      </div>
    </div>
    </div>
  )
}
