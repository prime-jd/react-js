// src/components/Home.jsx
import React, { useEffect, useState } from 'react';


const Pro = () => {

  const [image, setImage] = useState();
  useEffect(async()=>{
    await fetch('https://api.github.com/users/prime-jd').then(res=>res.json()).then(data=>setImage(data.avatar_url))
  },[])
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex items-center justify-center">
        <div className="max-w-3xl mx-auto flex items-center space-x-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ravi Shankar Tripathi</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Student at Galgotia's College of Engineering And Technology (2021-25)</h3>
            <p className="text-lg text-gray-600 mb-6">
            I am exploring the field of software development with a keen interest in learning and mastering various programming languages and
technologies. I am eager to further develop my abilities and contribute to innovative software solutions.
I enjoy working in teams and focusing on practical, effective solutions.
            </p>
          </div>
          <div className="flex-shrink-0 w-33 h-33 rounded-full overflow-hidden">
            <img className="object-cover w-full h-full" src={image} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pro;
