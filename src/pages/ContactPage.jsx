import { Mail, Phone, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ContactCard } from "../components/Cards";
import { SectionHeading } from "../components/Text";

export default function ContactPage() {
  const data = [
    {
      name: "Phone",
      detail: "0345-4011257",
      icon: <Phone />,
    },
    {
      name: "Email",
      detail: "nabiha.farhan1971@gmail.com",
      icon: <Mail />,
    },
    {
      name: "Location",
      detail: "Karachi , Pakistan",
      icon: <MapPin />,
    },
  ];
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      link: "https://github.com/Syeda-Nabihaa",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      link: "https://www.linkedin.com/in/nabiha-farhan-11870435b/",
    },
    // {
    //   name: "Twitter",
    //   icon: <FaTwitter size={22} />,
    //   link: "https://twitter.com/yourusername",
    // },
  ];

  return (
    <section className="min-h-screen bg-transparent text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 bg-amber-">
          <SectionHeading
            FirstLine="Let's Connect"
            SecondLine="Feel free to reach out for collaborations, projects, or
            opportunities."
          />
        </div>

        {/* Contact Card */}
        <div
          className="
          bg-gray-900
          border border-gray-800
          rounded-2xl
          p-8 md:p-10
        "
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {data.map((d, index) => (
                  <ContactCard
                    key={index}
                    title={d.name}
                    detail={d.detail}
                    icon={d.icon}
                  />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Social Accounts</h2>

              <div className="space-y-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="
                    flex items-center gap-4
                    p-4
                    rounded-xl
                    bg-gray-800
                    hover:bg-gray-700
                    transition
                    "
                  >
                    <div>{social.icon}</div>

                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
