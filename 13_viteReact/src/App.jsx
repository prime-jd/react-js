import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import TodoSlice from './Features/Todo/TodoSlice'

function App() {
 

  return (
    <Provider store={Store}>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
