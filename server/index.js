const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow both local dev and Vercel frontend
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend.vercel.app']
}));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
