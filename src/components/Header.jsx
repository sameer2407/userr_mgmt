import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Title */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition">
            User Management App
          </Link>
        </h1>

        {/* GitHub Link */}
        <a
          href="https://github.com/sameer2407/userr_mgmt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-gray-200 transition"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
