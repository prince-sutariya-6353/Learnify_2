import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Learnify
        </Link>
        <nav className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
