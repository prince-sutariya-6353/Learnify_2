const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Vercel frontend
app.use(cors({
  origin: 'https://your-frontend-name.vercel.app'
}));

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
