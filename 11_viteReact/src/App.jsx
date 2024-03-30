import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContextProvider } from './Context/TodoContext'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodo] = useState([])

  useEffect(()=>{},[])

  const addTodo = (todo)=>{
    setTodo((prev)=>[{id : Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=> {
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id==id)? todo:prevTodo))
  }

  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter((prevTodo)=>(prevTodo.id !== id)))
  }

  const toggleTodo = (id)=>{
    setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id===id)? {...prev, completed :!prevTodo}: prevTodo))
  }
  

  return (
    <UserContextProvider value={{todos, addTodo,updateTodo,deleteTodo,toggleTodo}}>
      
    </UserContextProvider>
  )
}

export default App
