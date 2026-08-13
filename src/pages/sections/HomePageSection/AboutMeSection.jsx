import React from "react";
import {
  Code2,
  Download,
  FolderOpen,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "../../../components/Text";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import data from "../../../data/Data.json";
import { SocialCard } from "../../../components/Cards";

export default function AboutMeSection() {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    gmail: IoMail,
    location: MdLocationOn,
  };
  return (
    <section id="about" className="py-24 text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Left Side */}
        <SectionHeading
          FirstLine="About Me"
          SecondLine="Turning Ideas into Interactive Experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="p-5">
            <p className="text-gray-400 mt-8 leading-8 text-lg">
              I'm{" "}
              <span className="text-white font-semibold">Nabiha Farhan</span>, a
              passionate Frontend & Mobile Developer with a strong interest in
              building responsive, accessible, and visually engaging
              applications. I enjoy crafting seamless user experiences using
              React.js, Flutter, Tailwind CSS, and modern web technologies.
            </p>

            <p className="text-gray-400 mt-5 leading-8 text-lg">
              My focus is on writing clean, maintainable code and developing
              solutions that are both functional and user-friendly. I'm
              constantly exploring new tools and best practices to enhance my
              skills and contribute to impactful software projects while growing
              as a developer.
            </p>

            <a
              href="../../../../public/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-10 px-7 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-xl font-semibold text-slate-900 items-center gap-2"
            >
              <Download size={18} />
              View Resume
            </a>
          </div>

          {/* Right Side - Connect Card */}
          <div className="relative ml-10 ">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-cyan-500"></div>

            <div className="space-y-16">
              {data.socials.map((item, index) => (
                <SocialCard
                  name={item.name}
                  link={item.link}
                  icon={iconMap[item.icon] || null}
                  url={item.url}
                />
              ))}

              {/* Location */}
              <div className="relative flex items-center gap-6">
                <div className="z-10 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,.7)]">
                  <MdLocationOn className="text-white text-xl" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
