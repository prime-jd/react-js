// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="container mx-auto flex justify-center items-center">
        
        <ul className="flex justify-center space-x-4">
          <li><a href="#home" className="text-white hover:underline">Home</a></li>
          <li><a href="#skills" className="text-white hover:underline">Skills</a></li>
          <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
