import React from "react";
import data from "../data/Projects.json";
import { Smartphone, Monitor, Briefcase } from "lucide-react";
import { ProjectCard } from "../components/Cards";
import { SectionHeading } from "../components/Text";

const sections = [
  {
    id: "realTimeProjects",
    title: "Real-Time Projects",
    description:
      "Professional applications developed for clients, collaborative teams, and production environments.",
    icon: Briefcase,
    projects: data.realTimeProjects,
  },
  {
    id: "reactProjects",
    title: "React Projects",
    description:
      "Responsive web applications built with React and modern frontend technologies.",
    icon: Monitor,
    projects: data.reactProjects,
  },
  {
    id: "mobileProjects",
    title: "Flutter Projects",
    description:
      "Cross-platform mobile applications built with Flutter and Firebase.",
    icon: Smartphone,
    projects: data.mobileProjects,
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-transparent text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-24">
          <SectionHeading FirstLine="Portfolio" SecondLine="My Projects"/>
        
          <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-8">
            Explore a collection of mobile and web applications I've designed
            and developed using Flutter, React, Firebase, NestJS, MySQL, and
            other modern technologies.
          </p>
        </div>

        {/* Project Categories */}
        <div className="space-y-28">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div key={section.id}>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                    <Icon size={28} className="text-cyan-400" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      {section.title}
                    </h2>

                    <p className="text-slate-400 mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.projects.map((project) => (
                    <ProjectCard
                      key={`${section.id}-${project.id}`}
                      project={project}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
