import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4 px-8 bg-opacity-80 backdrop-blur-lg">
        <div>
          <Link to="/" className="text-white text-xl font-bold">
            Task Manager
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="/signup"
            className="text-white px-4 py-2 rounded-md hover:bg-opacity-70 bg-opacity-60 transition-colors duration-300 mr-4"
          >
            Sign Up
          </Link>
          <Link to="/login" className="text-white px-4 py-2 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
