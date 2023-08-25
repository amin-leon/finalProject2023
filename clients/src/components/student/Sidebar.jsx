// Sidebar.js
import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaChartBar, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gray-800 text-white w-1/6 h-screen fixed top-0 left-0 p-4">
      <div className="flex items-center justify-between mb-4">
        {/* Admin avatar */}
        <img
          src="path_to_admin_avatar_image.jpg"
          alt="Admin Avatar"
          className="w-12 h-12 rounded-full"
        />

        {/* Hamburger icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars size={20} />
        </div>
      </div>
      
      {/* Full menu */}
      <div className={`${showMenu ? 'block' : 'hidden'} lg:block flex flex-col gap-4`}>
        {/* Sidebar icons */}
        <a href="#a" className="flex items-center gap-2 text-gray-300 hover:text-white">
          <FaHome size={20} />
          Dashboard
        </a>
        <a href="d#" className="flex items-center gap-2 text-gray-300 hover:text-white">
          <FaUserFriends size={20} />
          Users
        </a>
        <a href="d#" className="flex items-center gap-2 text-gray-300 hover:text-white">
          <FaChartBar size={20} />
          Analytics
        </a>
        {/* Add more sidebar menu items as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
