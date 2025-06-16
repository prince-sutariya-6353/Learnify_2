// server/index.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth"); // Route file (login/signup)

const app = express();

// ✅ CORS Configuration
app.use(cors({
  origin: ["https://test-avfw.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ Parse JSON request bodies
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// ✅ API Routes
app.use("/api", authRoutes);

// ✅ Health Check Route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// ✅ Export for Vercel (do not run .listen on Vercel)
module.exports = app;

// ✅ Local development server
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}
