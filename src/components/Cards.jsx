import React from "react";
import { DescriptionText } from "./Text";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Calendar } from "lucide-react";

export function EduCard({ duration, degree, description, insititute }) {
  return (
    <div>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-cyan-500/15 text-cyan-300 mb-4">
          {duration}
        </span>

        <h3 className="text-2xl font-semibold mb-3">{degree}</h3>
        <h5 className="text-ms font-medium text-gray-300 mb-3">{insititute}</h5>
        <DescriptionText description={description} />
      </div>
    </div>
  );
}

export function SocialCard({ icon: Icon, name, link, url }) {
  return (
    <div className="relative flex items-center gap-6">
      <div className="z-10 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
        {Icon && <Icon size={20} />}
      </div>

      <div>
        <p className="text-gray-400 text-sm">{name}</p>
        <a
          href={link}
          className="hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </div>
    </div>
  );
}

export function ProjectCard({ project }) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border border-slate-800
      bg-slate-900/60
      backdrop-blur-xl
      p-7
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
    "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition"></div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>

      {/* Duration */}
      {project.startDate && project.endDate && (

      <div className="flex items-center gap-2 text-slate-400 mt-3 text-sm">
        <Calendar size={16} className="text-cyan-400" />
        {project.startDate} — {project.endDate}
      </div>
      )}

      {/* Description */}
      <p className="text-slate-400 leading-7 mt-6">{project.description}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-500/30
              bg-cyan-500/10
              px-3
              py-1
              text-sm
              text-cyan-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2
            rounded-xl
            border border-slate-700
            bg-slate-800
            px-5 py-3
            text-white
            transition
            hover:bg-slate-700
          "
        >
          <FaGithub size={18} />
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              rounded-xl
              bg-cyan-500
              px-5 py-3
              font-semibold
              text-slate-900
              transition
              hover:bg-cyan-400
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
