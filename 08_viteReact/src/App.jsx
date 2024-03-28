// import One from './components/One'

import './App.css'
import { useContext, useEffect } from "react";
import UserContextProvider from "./Context/UserContextProvider";
import One from "./Components/One";
import UserContext from "./Context/UserContext";
import Three from './Components/Three';

function App() {
const x = {name : "Ravi", work : "Fresher" } ; 
const { setUser} = useContext(UserContext)
useEffect(()=>setUser(x) ,[])
  return (
    <>
      <UserContextProvider>
      <div>Context APi</div>
      <One />
      <Three />
      </UserContextProvider>  
    </>
  )
}

export default App;
