import React from 'react'
import { useState } from 'react'


function Login() {
    const [user, setUser] = useState('')
    const [password,setPassword] = useState('')

    const submit = (e)=>{
        e.preventDefault
        console.log("form Submitted")
    }
    return (
    <div className='m-48 border-2 p-4 border-black bg-gray-700 shadow-slate-900'>
        <form onSubmit={submit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="username" className="block text-white text-sm font-bold mb-2">Username:</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-white text-sm font-bold mb-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    </form>
    </div>
    );
}

export default Login
