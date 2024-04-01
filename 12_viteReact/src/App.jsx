

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import StudentAccess from './Components/StudentAccess'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element ={<StudentAccess />} />
      </Route>
      
    )
  )

  return (
    <RouterProvider router={router} />
      
   
  )
}

export default App
