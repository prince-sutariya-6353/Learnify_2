import React, { useState } from "react";
import axios from "axios";

const backendURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://test-lyart-gamma-43.vercel.app";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/api/login`, form);
      setMessage(res.data.message);
      console.log("Logged in user:", res.data.user);
      // Optionally save token: localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-tight">
          Sign In
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:bg-gray-700"
              required
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out hover:bg-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        {message && (
          <p
            className={`mt-5 text-center text-sm font-medium ${
              message.includes("failed") ? "text-red-400" : "text-blue-400"
            } animate-fade-in`}
          >
            {message}
          </p>
        )}
        <p className="mt-6 text-center text-sm text-gray-400">
          Need an account?{" "}
          <a
            href="/signup"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;