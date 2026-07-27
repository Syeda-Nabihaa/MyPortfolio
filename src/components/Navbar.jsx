import React, { useState, useEffect } from 'react';
import { Briefcase, Home, FolderGit2, Mail, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', to: '/', icon: <Home size={18} /> },
    { name: 'Projects', to: '/projects', icon: <FolderGit2 size={18} /> },
    { name: 'Contacts', to: '/contacts', icon: <Mail size={18} /> },
    { name: 'Education', to: '/education', icon: <Award size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-transparent '
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link to="/" className="shrink-0 flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                <Briefcase size={20} />
              </div>
            </div>
            <span className="text-xl font-bold text-white drop-shadow-lg tracking-tight group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              Nabiha Farhan
            </span>
          </Link>

          {/* Desktop Navigation */}
<nav
  className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1 transition-all duration-500 ${
    scrolled
      ? "bg-white/5 backdrop-blur-xl border border-white/10"
      : "bg-transparent border-transparent"
  }`}
>            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 rounded-full group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:text-blue-400">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </span>
                {/* Glass background hover effect */}
                <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xl"></span>
                {/* Glowing dot indicator */}
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-blue-400/50"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Glassmorphism */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-2 mb-4 p-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/20">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={handleLinkClick}
              className="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10"
              style={{
                transitionDelay: `${isOpen ? index * 60 : 0}ms`,
                transform: isOpen ? 'translateX(0)' : 'translateX(-12px)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <span className="relative">
                <span className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></span>
                <span className="relative p-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/10">
                  {item.icon}
                </span>
              </span>
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="ml-auto text-blue-400/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
          {/* Decorative linear bar */}
          <div className="mt-3 h-0.5 w-full bg-linear-to-r from-transparent via-blue-400/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;