import { useState } from 'react'
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
