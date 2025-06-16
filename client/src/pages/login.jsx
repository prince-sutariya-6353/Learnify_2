import React, { useState } from "react";
import axios from "axios";

const backend =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://test-lyart-gamma-43.vercel.app";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backend}/api/login`, form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default Login;
