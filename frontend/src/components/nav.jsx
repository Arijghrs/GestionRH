import React from 'react';
import { FaSearch } from 'react-icons/fa';
import profileImage from '../assets/profileImage.webp'; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-white border-b border-gray-200 px-8 fixed top-0 ">
      
      
      <div></div>

      <div className="mr-10  ">
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={profileImage}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
