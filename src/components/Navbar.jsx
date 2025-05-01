import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-10 border-b border-neutral-800 pb-4">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        {/* Resume Button */}
        <a
          href="/Dash Bumchin.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-3 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-neutral-900 transition-colors"
        >
          Resume <FiDownload className="text-lg" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-cyan-300">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-cyan-300">
            Home
          </Link>
          <Link to="/achivements" className="text-lg font-semibold hover:text-cyan-300">
            Achievements
          </Link>
          <Link to="/projects" className="text-lg font-semibold hover:text-cyan-300">
            Projects
          </Link>
          <Link to="/skills" className="text-lg font-semibold hover:text-cyan-300">
            Skills
          </Link>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <SocialLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-start space-y-4 px-4 pt-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-cyan-300">
            Home
          </Link>
          <Link to="/achivements" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-cyan-300">
            Achievements
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-cyan-300">
            Projects
          </Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-cyan-300">
            Skills
          </Link>
          <div className="mt-4 flex gap-4 text-2xl">
            <SocialLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
