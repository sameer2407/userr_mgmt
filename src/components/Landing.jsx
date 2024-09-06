import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">User Management App</h1>
      <p className="text-xl mb-12">
        Create, Read, Update, and Delete Users with ease!
      </p>
      <Link to="/users">
        <button
          className="bg-white text-blue-700 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-gray-100 transition duration-300"
          // Navigate to the users listSSSS
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
