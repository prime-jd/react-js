import React from 'react'
import appwriteService from "../appWrite/config.js"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-centre mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
              </div>
          </div>
          <h2 className=''>{title}</h2>
      </Link>  
    )
}

export default PostCard
