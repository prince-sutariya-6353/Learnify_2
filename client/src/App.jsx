import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>React + Vite + Express</h1>
      <p>{msg}</p>
    </div>
  )
}

export default App
