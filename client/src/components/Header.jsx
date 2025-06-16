import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">Learnify</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Header;
