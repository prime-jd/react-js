import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
 let useName = "Ravi Shankar Tripathi"
  return (
    <>
      <p className='bg-green-600 p-4 rounded-lg hover:bg-blue-700 m-4 '>React With Tailwind</p>
      <Card Name ={useName} />
    </>
  )
}

export default App
