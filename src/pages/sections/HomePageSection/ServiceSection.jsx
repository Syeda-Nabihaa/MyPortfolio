import React from "react";
import { MonitorSmartphone, Smartphone } from "lucide-react";
import { SectionHeading } from "../../../components/Text";

export default function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      icon: <MonitorSmartphone size={40} />,
      description:
        "Building fast, responsive, and visually appealing web applications with modern frontend technologies and best practices.",
      technologies: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={40} />,
      description:
        "Developing cross-platform mobile applications with clean architecture, seamless UI, and Firebase-powered backend services.",
      technologies: ["Flutter", "Firebase", "REST APIs"],
    },
  ];

  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          FirstLine="What I Do"
          SecondLine="Building Modern Web & Mobile Experiences"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-white transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-8">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}