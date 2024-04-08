import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import App from './App.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import Github, { LoginInfo } from './Components/Github/Github.jsx'
import Login from './Components/Login.jsx'
import Google_search, { GoogleInfo } from './Components/Google_search.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element= {<Home />} />
      <Route path='todo' element= {<App />} />
      <Route path='contact' element= {<Contact/>}/>
      <Route path='github' loader={LoginInfo} element= {<Github />}/>
      <Route path='login'  element={<Login />} />
      <Route path='gpt' loader={GoogleInfo}  element={<Google_search />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
