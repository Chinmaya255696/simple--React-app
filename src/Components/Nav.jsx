// Navbar.js
import React from 'react';
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* React Logo */}
      <div className="flex items-center">
        <FaReact className="text-white text-2xl mr-2" />
        <span className="text-white font-bold text-xl">React App</span>
      </div>

      {/* Navigation Options */}
      <div className="flex items-center">
        <a href="#" className="text-white mr-4 hover:underline">Home</a>
        <a href="#" className="text-white mr-4 hover:underline">About</a>
        <a href="#" className="text-white hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
