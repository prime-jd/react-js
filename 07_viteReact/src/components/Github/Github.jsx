import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
     
    const data = useLoaderData()               // useLoaderData loads data of github to loader 

    // const [data, setData]= useState({})      // there is also another method of fetching it using Loader attribue from route
    //  useEffect(()=>
    //  {
    //     fetch('https://api.github.com/users/prime-jd')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         setData(data);
    //         console.log(data);
    //     })
    //  },[])
    return (
        <div className='bg-orange-600 text-center text-white  p-3 m-4 text-2xl'> 
        <div className='flex justify-center items-center'>
        <img src={data.avatar_url}  className=' rounded-full w-56'></img>
        </div> 
            <div >Github Name :{data["login"]}</div>
            <div >Github Followers :{data["followers"]}</div>
            
        </div>
    )
    }
export default Github;

export const  LoginInfo = async()=>{
     const response=  await fetch('https://api.github.com/users/prime-jd')
    return response.json();
}

