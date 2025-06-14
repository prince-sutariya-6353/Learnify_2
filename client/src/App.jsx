import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://your-backend.vercel.app/api/hello')
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  return <h1>Hello Vite + React</h1>;
}

export default App;
