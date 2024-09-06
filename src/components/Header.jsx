import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-start items-center">
        {/* Logo or App Title */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition">
            User Management App
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
