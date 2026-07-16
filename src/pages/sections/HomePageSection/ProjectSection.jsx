import React from "react";
import data from "../../../data/Projects.json";
import { SectionHeading } from "../../../components/Text";
import { ProjectCard } from "../../../components/Cards";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <SectionHeading
        FirstLine="Projects"
        SecondLine="Real-world applications I've built"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {data.realTimeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}