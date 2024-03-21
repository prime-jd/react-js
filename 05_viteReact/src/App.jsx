import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pass_gen from './pass_gen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pass_gen />
    </>
  )
}

export default App
