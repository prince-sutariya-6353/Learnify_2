import React, { useState } from "react";
import axios from "axios";

const backendURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://test-lyart-gamma-43.vercel.app";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(""); // Clear previous message
    try {
      const res = await axios.post(`${backendURL}/api/signup`, form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-900">
      <div className="relative bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl max-w-md w-full border border-white/20">
        {/* Subtle background effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide animate-fade-in">
          Sign Up
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative group">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-2 transition-all duration-300 group-focus-within:text-purple-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out shadow-inner hover:shadow-lg hover:bg-white/30"
              required
            />
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2 transition-all duration-300 group-focus-within:text-purple-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out shadow-inner hover:shadow-lg hover:bg-white/30"
              required
            />
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2 transition-all duration-300 group-focus-within:text-purple-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out shadow-inner hover:shadow-lg hover:bg-white/30"
              required
            />
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-800 transition-all duration-300 ease-in-out transform hover:scale-105 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            } shadow-md hover:shadow-xl`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Registering...
              </span>
            ) : (
              "Register"
            )}
          </button>
        </form>
        {message && (
          <div
            className={`mt-6 p-4 rounded-lg text-center text-sm font-medium ${
              message.includes("failed")
                ? "bg-red-500/20 text-red-100 border border-red-500/40 shadow-lg"
                : "bg-green-500/20 text-green-100 border border-green-500/40 shadow-lg"
            } animate-slide-in`}
          >
            {message}
          </div>
        )}
        <p className="mt-6 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-300 hover:text-purple-200 font-medium transition-colors duration-200 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>

      {/* Custom Tailwind CSS for animations */}
      <style>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .shadow-inner {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default Signup;