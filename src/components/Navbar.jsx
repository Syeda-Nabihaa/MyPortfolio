import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Home,
  FolderGit2,
  Mail,
  Award,
  GraduationCap,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      to: "/",
      icon: <Home size={18} />,
    },
    {
      name: "Projects",
      to: "/projects",
      icon: <FolderGit2 size={18} />,
    },
    {
      name: "Contacts",
      to: "/contacts",
      icon: <Mail size={18} />,
    },
    {
      name: "Education",
      to: "/education",
      icon: <GraduationCap size={18} />,
    },
    {
      name: "Certificates",
      to: "/certificates",
      icon: <Award size={18} />,
    },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "py-2" : "py-3"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
            flex items-center justify-between
            min-h-14 sm:min-h-16 md:min-h-20
            px-3 sm:px-4 md:px-5
            rounded-2xl
            transition-all duration-500
            ${
              scrolled
                ? "bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/10"
                : "bg-transparent"
            }
          `}
        >
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="shrink-0 flex items-center gap-2 sm:gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="
                  relative
                  flex items-center justify-center
                  w-9 h-9
                  sm:w-10 sm:h-10
                  bg-linear-to-br from-blue-500 to-purple-500
                  rounded-xl
                  text-white
                  shadow-lg shadow-blue-500/25
                  group-hover:scale-105
                  transition-transform duration-300
                "
              >
                <Briefcase size={18} className="sm:w-5 sm:h-5" />
              </div>
            </div>

            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                font-bold
                text-white
                tracking-tight
                whitespace-nowrap
                group-hover:text-transparent
                group-hover:bg-linear-to-r
                group-hover:from-blue-400
                group-hover:to-purple-400
                group-hover:bg-clip-text
                transition-all duration-300
              "
            >
              Nabiha Farhan
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav
            className={`
              hidden md:flex
              items-center
              gap-0.5 lg:gap-1
              rounded-full
              px-1.5 lg:px-2
              py-1
              transition-all duration-500
              ${
                scrolled
                  ? "bg-white/5 backdrop-blur-xl border border-white/10"
                  : "bg-transparent"
              }
            `}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`
                    relative
                    px-2.5 lg:px-4
                    py-2
                    text-xs lg:text-sm
                    font-medium
                    rounded-full
                    transition-all duration-300
                    group
                    ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-1.5 lg:gap-2">
                    <span
                      className={`
                        transition-all duration-300
                        ${
                          isActive
                            ? "text-blue-400"
                            : "group-hover:text-blue-400"
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </span>

                  {/* Hover background */}
                  {!isActive && (
                    <span
                      className="
                        absolute inset-0
                        bg-white/10
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        transition-all duration-300
                        backdrop-blur-xl
                      "
                    />
                  )}

                  {/* Active / Hover dot */}
                  <span
                    className={`
                      absolute
                      -bottom-0.5
                      left-1/2
                      -translate-x-1/2
                      w-1 h-1
                      bg-blue-400
                      rounded-full
                      shadow-lg shadow-blue-400/50
                      transition-all duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              md:hidden
              relative
              flex
              items-center
              justify-center
              w-10 h-10
              rounded-xl
              text-white/80
              hover:text-white
              hover:bg-white/10
              border border-white/10
              backdrop-blur-sm
              transition-all duration-300
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`
                  absolute
                  h-0.5 w-6
                  bg-current
                  rounded-full
                  transition-all duration-300
                  ${isOpen ? "rotate-45" : "-translate-y-2"}
                `}
              />

              <span
                className={`
                  absolute
                  h-0.5 w-6
                  bg-current
                  rounded-full
                  transition-all duration-300
                  ${isOpen ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  absolute
                  h-0.5 w-6
                  bg-current
                  rounded-full
                  transition-all duration-300
                  ${isOpen ? "-rotate-45" : "translate-y-2"}
                `}
              />
            </div>
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              isOpen
                ? "max-h-[500px] opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >
          <div
            className="
              p-3 sm:p-4
              rounded-2xl
              bg-black/30
              backdrop-blur-2xl
              border border-white/10
              shadow-2xl shadow-black/30
            "
          >
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`
                    group
                    flex items-center
                    gap-3 sm:gap-4
                    px-3 sm:px-4
                    py-3 sm:py-3.5
                    rounded-xl
                    text-sm sm:text-base
                    font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }
                  `}
                  style={{
                    transitionDelay: isOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  {/* Icon */}
                  <span
                    className={`
                      flex items-center justify-center
                      w-9 h-9
                      rounded-lg
                      border
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-blue-500/20 border-blue-400/30 text-blue-400"
                          : "bg-white/5 border-white/10 text-white group-hover:scale-105"
                      }
                    `}
                  >
                    {item.icon}
                  </span>

                  {/* Text */}
                  <span>{item.name}</span>

                  {/* Arrow */}
                  <span
                    className="
                      ml-auto
                      text-blue-400
                      opacity-50
                      group-hover:opacity-100
                      group-hover:translate-x-1
                      transition-all duration-300
                    "
                  >
                    →
                  </span>
                </Link>
              );
            })}

            {/* Bottom decoration */}
            <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-blue-400/40 to-transparent" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;