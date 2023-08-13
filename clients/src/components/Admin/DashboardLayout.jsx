import React, { useState } from 'react';
import { FiHome, FiUsers, FiFilePlus, FiSettings, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import Stuff from '../../pages/stuff/Stuff';

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SidebarMenuItem = ({ icon, label }) => {
    return (
      <div className="flex items-center py-2">
        <div className="text-gray-400 w-6">
          {icon}
        </div>
        <span className="text-white ml-2">{label}</span>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Hamburger Menu (for small screens) */}
      <div className="w-16 bg-blue-500 p-4 text-white md:hidden">
        <button onClick={toggleMenu} className="text-white">
          ☰
        </button>
      </div>

      {/* Side Navigation */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block w-1/6  p-4 text-white bg-blue-400 md:flex md:flex-col  md:h-screen items-center`}
      >
        <div className='flex flex-row items-center gap-5 pb-10'>
            <img  className ="w-[40px] h-[40px] rounded-full" src='https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg'alt='Avatar' />
            <div>
              <p>NP Leon</p>
              <p className='text-xs'> Admin</p>
            </div>
        </div>
        <SidebarMenuItem icon={<FiHome />} label="Dashboard" />
        <SidebarMenuItem icon={<FiUsers />} label="Users" />
        <SidebarMenuItem icon={<FiFilePlus />} label="Add Issue" />
        <SidebarMenuItem icon={<FiSettings />} label="Settings" />
        <SidebarMenuItem icon={<FiMessageSquare />} label="Messages" />
        <SidebarMenuItem icon={<FiHelpCircle />} label="Help" />
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b p-4 shadow-md">
          <div className="flex items-center justify-end">
            {/* Avatar Image */}
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-4">
            <Stuff />
        </main>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
