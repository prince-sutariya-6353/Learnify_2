import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const backendURL = import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://your-backend.vercel.app"; // change to your backend Vercel URL

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(`${backendURL}/api/login`, formData);
      setMessage(res.data.message);
      setToken(res.data.token);

      // Optional: Save token in localStorage
      localStorage.setItem("authToken", res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
      {token && <p className="text-xs mt-2 break-words">Token: {token}</p>}
    </div>
  );
};

export default Login;
