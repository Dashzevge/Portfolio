import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center space-x-6">
        <a
          href="/Dash Bumchin.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-neutral-900 transition-colors"
        >
          Resume <FiDownload className="text-lg" />
        </a>
      </div>
      <div className="flex items-center space-x-6">
      <Link to="/" className="text-lg font-semibold hover:text-cyan-300">
          Home
        </Link>
        <Link to="/achivements" className="text-lg font-semibold hover:text-cyan-300">
          Achivements
        </Link>
        <Link to="/projects" className="text-lg font-semibold hover:text-cyan-300">
          Project
        </Link>
        <Link to="/skills" className="text-lg font-semibold hover:text-cyan-300">
          Skills
       </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
