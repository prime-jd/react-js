// src/components/Skills.jsx
import React from 'react';

const skills = [
  {
    name: 'JavaScript',
    description: 'JavaScript is a versatile programming language used for web development, game development, and more.'
  },
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.'
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.'
  },
  {
    name: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
  },
  {
    name: 'MongoDB',
    description: 'MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.'
  },
  {
    name: 'MySQL',
    description: 'MySQL is an open-source relational database management system.'
  },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="relative group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
