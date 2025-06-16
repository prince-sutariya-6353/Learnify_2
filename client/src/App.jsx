import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
      .catch(() => setMessage("Failed to connect to backend"));
  }, [backendURL]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl">Welcome to Learnify<br/>{message}</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
