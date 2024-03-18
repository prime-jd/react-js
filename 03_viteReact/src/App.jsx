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
      <p className="px-4  bg-green-600 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-50">React With Tailwind</p>
      <Card Name ="Ravi Shankar Tripathi" work="Software Engineer" />  
      <Card Name="Vishal Yadav"  work="Software Enginneer"/>
    </>
  )
}
// Here we insert directly objects variables directly 
export default App
