import React from "react";
import { DescriptionText } from "./Text";

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
