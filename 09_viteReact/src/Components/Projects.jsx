// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-2">Class Monitoring System</h3>
              <p className="text-lg">Class Monitoring System monitors the student attendance and classroom activities using OTP-based checks. It has three views -
Student (fetches real-time class schedule and authorizes record by entering OTP), Teacher (Generate OTP and view), and HOD
(monitors class records).</p>
<a href="https://github.com/prime-jd/cms" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl hover:text-gray-400">
            visit
          </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-2xl font-bold mb-2">Password Generator</h3>
              <p className="text-lg">A password generator is a tool or application that creates strong and random passwords based on specified criteria. These passwords are designed to be highly secure and difficult for attackers to guess or crack. </p>
              <a href="https://github.com/prime-jd/react-js/tree/master/05_viteReact" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-xl hover:text-gray-400">
            visit
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
