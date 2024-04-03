import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appWrite/Auth'
import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import {Header,Footer} from './components'


function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{

    authService.getCurrentUser()
    .then((userData)=>{

      if(userData)
      dispatch(login({userData}))

      else dispatch(logout())
    })
    .finally(()=>setLoading(false))
  },[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header />
        header
        <main>
          {/* <Outlet /> */}
        </main>
        footer
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
