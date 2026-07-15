import React from "react";
import { GraduationCap } from "lucide-react";
import {EduCard} from "../../../components/Cards";
import data from "../../../data/Data.json";
import { DescriptionText, SectionHeading } from "../../../components/Text";

export default function EducationSection() {
  return (
    <section id="education" className=" px-6  text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <SectionHeading FirstLine="Education" SecondLine="Academic Journey" />

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My educational background has built a strong foundation in
            programming, software development, and problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-500/40 ml-5">
          {data.education.map((item, index) => (
            <div key={index} className="relative mb-12 pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-4.5 top-1 w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <GraduationCap size={18} />
              </div>

              {/* Card */}
              <EduCard
                duration={item.duration}
                degree={item.degree}
                description={item.description}
                insititute={item.insititute}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
