import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
      <div className='container py-2 flex justify-between items-center'>
        
        <div className='text-2xl font-bold'>
          <img src="https://media.tenor.com/jTaiAfejP2gAAAAM/h-life-logo-gif.gif" alt="" className='w-16 rounded-full' />
        </div>

        {/* Menu Button for Small Screens */}
        <button onClick={toggleSidebar} className='md:hidden text-white'>
          <i className="fas fa-bars"></i> {/* Font Awesome Icon for Menu */}
        </button>

        {/* Sidebar for Small Screens */}
        <div className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed top-0 left-0 bg-black text-white w-64 h-full p-4 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button onClick={toggleSidebar} className='text-white mb-4'>
              <i className="fas fa-times"></i> {/* Font Awesome Icon for Close */}
            </button>
            <div className='flex flex-col space-y-4'>
              <a href="#Home" className='hover:text-gray-400' onClick={handleLinkClick}>Home</a>
              <a href="#about" className='hover:text-gray-400' onClick={handleLinkClick}>About Me</a>
              <a href="#project" className='hover:text-gray-400' onClick={handleLinkClick}>Projects</a>
              <a href="#contact" className='hover:text-gray-400' onClick={handleLinkClick}>Contact</a>
            </div>
          </div>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className='hidden md:flex space-x-6'>
          <a href="#Home" className='hover:text-gray-400' onClick={handleLinkClick}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={handleLinkClick}>About Me</a>
          <a href="#project" className='hover:text-gray-400' onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={handleLinkClick}>Contact</a>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/VirugamaHelly" target="_blank" rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <i className="fab fa-github"></i> GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/helly-virugama-a4793a312?originalSubdomain=in" 
             target="_blank" rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <i className="fab fa-linkedin"></i> LinkedIn
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
