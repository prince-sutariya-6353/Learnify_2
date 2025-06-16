import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";    // ✅ must match exact casing
import Signup from "./pages/Signup";  // ✅ same here
import Header from "./components/Header";

function App() {
  const [message, setMessage] = useState("");

  // ✅ Backend URL based on environment
  const backendURL =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api/hello"
      : "https://test-lyart-gamma-43.vercel.app/api/hello";

  useEffect(() => {
    axios
      .get(backendURL)
      .then((response) => setMessage(response.data.message))
      .catch((error) => {
        console.error(error);
        setMessage("Failed to fetch from server");
      });
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
