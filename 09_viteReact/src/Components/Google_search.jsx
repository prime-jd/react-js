import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Google_search() {
    const data = useLoaderData();

    return (
        <div className='flex justify-center items-center '>
            <div> data : {data.engine}</div>
        </div>
    )
}



export const GoogleInfo = async()=>{
    const response = await fetch('https://www.searchapi.io/api/v1/search')
    return response.json();
}

export default Google_search;