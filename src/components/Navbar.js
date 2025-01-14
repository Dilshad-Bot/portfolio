import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="fixed top-2/3 left-0 transform -translate-y-1/2 w-64 text-white p-4 hidden lg:block">
      <ul className="flex flex-col items-start font-ubuntu">
        <li className="mb-8"><a className='px-10 py-4 btn'href="#banner">Banner</a></li>
        <li className="mb-8"><a className='px-10 py-4 btn'href="#about-me">About Me</a></li>
        <li className="mb-8"><a className='px-10 py-4 btn'href="#portfolio">Portfolio</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
