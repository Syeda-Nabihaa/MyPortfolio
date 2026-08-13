import React from "react";
import { SectionHeading } from "../components/Text";
import { FaFilePdf, FaEye, FaDownload } from "react-icons/fa";

const internships = [
  {
    title: "Code Alpha",
    description: "Certificate for completing internship at Code Alpha, demonstrating proficiency in front-end development.",
   
    file: "/certificates/Certificate_Nabiha Farhan.pdf",
  },
  
];

const recommendations = [
  {
    title: "Letter of Recommendation",
    description:
      "A letter of recommendation recognizing my skills, dedication, and performance.",
 
    file: "/certificates/LOR_Nabiha Farhan.pdf",
  },
];

function DocumentCard({ item }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
      
      {/* PDF Icon */}
      <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
        <FaFilePdf className="text-red-400 text-2xl" />
      </div>

      {/* Content */}
      <span className="text-sm text-primary">
        {item.type}
      </span>

      <h3 className="text-xl font-semibold text-white mt-2 mb-3">
        {item.title}
      </h3>

      <p className="text-gray-400 text-sm leading-6 mb-6">
        {item.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">

        <a
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm transition"
        >
          <FaEye />
          View PDF
        </a>

        <a
          href={item.file}
          download
          className="w-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white transition"
        >
          <FaDownload />
        </a>

      </div>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <section className="min-h-screen bg-transparent text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <SectionHeading
            FirstLine="Certificates"
            SecondLine="Achievements"
          />

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I have earned certificates that validate my skills and knowledge
            in various areas of programming and software development. These
            certifications demonstrate my commitment to continuous learning
            and professional growth.
          </p>

        </div>

        {/* Certificates */}
        <div className="mb-16">

          <h2 className="text-2xl font-semibold mb-6">
            Internships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <DocumentCard
                key={index}
                item={internship}
              />
            ))}
          </div>

        </div>

        {/* Recommendation Letters */}
        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Letters of Recommendation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((letter, index) => (
              <DocumentCard
                key={index}
                item={letter}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}