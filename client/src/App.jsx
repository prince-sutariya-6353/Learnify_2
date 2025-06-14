import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://test-lyart-gamma-43.vercel.app/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => {
        console.error(error);
        setMessage('Failed to fetch from server');
      });
  }, []);

  return (
    <div>
      <h1>React + Vite Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
