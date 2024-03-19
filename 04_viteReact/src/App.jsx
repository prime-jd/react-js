import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bg_chg from './bg_changer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Bg_chg />
    </>
  )
}

export default App
