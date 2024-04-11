import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'

function App() {
  const [userName, setUsername] = useState('')

  return (
    <>
     <div>Input Component</div>
     <Input label="name" type="text"  placeholder="name" ref={(e)=>setUsername(e.target.value)} />
     <div>{userName}</div>
    </>
  )
}

export default App
