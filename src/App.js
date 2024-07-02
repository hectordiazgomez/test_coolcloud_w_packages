import React from 'react';
import logo from './logo.svg';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white">
      <header className="text-center">
        <img src={logo} className="h-32 w-32 animate-spin mb-8" alt="logo" />
        <h1 className="text-4xl font-bold mb-4">I am Hector and I am happy to being part of buildspace S5</h1>
        <p className="text-xl mb-8">This is my first webapp deployed with my own Netlify/Render/Heroku alternative that is up to 5 times cheaper</p>
        <div className="flex space-x-4 mb-8">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-300 transition-colors">
            <FaYoutube />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-300 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>
        <a
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
          href="https://coolcloud.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Go to CoolCloud
        </a>
      </header>
    </div>
  );
}

export default App;
