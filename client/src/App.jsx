import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  // ✅ Dynamically set backend URL based on environment
  const backendURL = import.meta.env.MODE === 'development'
    ? 'http://localhost:3000/api/hello' // local Express backend
    : 'https://test-lyart-gamma-43.vercel.app/api/hello'; // Vercel deployed backend

  useEffect(() => {
    axios.get(backendURL)
      .then(response => setMessage(response.data.message))
      .catch(error => {
        console.error(error);
        setMessage('Failed to fetch from server');
      });
  }, [backendURL]);

  return (
    <div>
      <h1>React + Vite Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
