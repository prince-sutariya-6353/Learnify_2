const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow your frontend Vercel domain
app.use(cors({
  origin: "https://test-avfw.vercel.app",  // your frontend Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"], // as needed
  credentials: true
}));

// Parse incoming JSON
app.use(express.json());

// Sample route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Deploy on Vercel: this export is needed
module.exports = app;

// For local testing only:
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
