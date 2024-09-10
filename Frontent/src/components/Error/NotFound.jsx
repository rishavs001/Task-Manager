import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-600 to-black-500 text-white">
      <h1 className="text-6xl font-bold mb-8">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-white text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-4 rounded-md shadow-lg transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
