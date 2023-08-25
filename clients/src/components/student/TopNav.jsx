// TopNav.js
import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const SidebarWidth = "16.6666%"; // Assuming the sidebar width is 1/6 of the screen width

const TopNav = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const topNavStyles = {
    left: SidebarWidth,
  };

  return (
    <div className="bg-gray-200 h-16 fixed top-0 right-0 left-0 z-10 flex items-center justify-between px-4" style={topNavStyles}>
      <div className="flex items-center">
        {/* Search bar on the left */}
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border rounded-md"
        />
      </div>
      <div className="flex items-center">
        {/* Notification icon */}
        <FaBell size={20} className="mr-4 cursor-pointer" />

        {/* User avatar with dropdown */}
        <div className="relative">
          <img
            src="path_to_your_avatar_image.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
