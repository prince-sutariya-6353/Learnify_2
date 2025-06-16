import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header"; // ⬅️ Import header

function App() {
  return (
    <Router>
      <Header /> {/* ⬅️ Add header above routes */}
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl">Welcome to Learnify</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
