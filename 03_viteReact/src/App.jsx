import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4 rounded-lg hover:bg-blue-700 '>React With Tailwind</h1>
    </>
  )
}

export default App
