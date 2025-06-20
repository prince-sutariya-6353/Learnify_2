import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./pages/Signup";
import Login from "./pages/Login";           // ✅ Add Login page
import Header from "./components/Header";

function App() {
  const [message, setMessage] = useState("");

  const backendURL =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api/hello"
      : "https://test-lyart-gamma-43.vercel.app/api/hello";

  useEffect(() => { 
    axios
      .get(backendURL)
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("❌ Failed to connect to backend"));
  }, [backendURL]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center mt-10">
              <h1 className="text-3xl font-bold">Welcome to Learnify</h1>
              <p className="mt-4 text-lg text-gray-600">{message}</p>
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Add Login route */}
      </Routes>
    </Router>
  );
}

export default App;
