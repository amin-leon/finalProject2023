import React, { useState } from 'react';
import { FiHome, FiUsers, FiFilePlus, FiSettings } from 'react-icons/fi';
import Stuff from '../../pages/stuff/Stuff';



const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SidebarMenuItem = ({ icon, label }) => {
    return (
      <div className="flex items-center py-2">
        <div className="text-gray-400 w-6 cursor-pointer">
          {icon}
        </div>
        <span  className="ml-2 cursor-pointer">{label}</span>
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      {/* Hamburger Menu (for small screens) */}
      <div className="w-16 bg-blue-500 p-4 text-white md:hidden">
        <button onClick={toggleMenu} className="">
          ☰
        </button>
        <div className='pt-5'>
           <FiHome />
        </div>
      </div>

      {/* Side Navigation */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        }  w-1/6  p-4 bg-transparent md:flex md:flex-col  md:h-screen items-center`}
      >
        <div className='flex flex-row items-center gap-5 pb-10'>
            <img  className ="w-[40px] h-[40px] rounded-full" src='https://th.bing.com/th/id/R.3832db45d6f86a7e4acf2e351816f535?rik=R1mf8OI%2fhsToWg&riu=http%3a%2f%2fwww.weirdlyodd.com%2fwp-content%2fuploads%2f2011%2f02%2fPakistan-Flag.jpg&ehk=PeUdQrfA0wNxEYnuzUwUq2pzqxLOnwoyOyDn9nOw%2fDk%3d&risl=&pid=ImgRaw&r=0'alt='Avatar' />
            <div>
              <p>NP Leon</p>
              <p className='text-xs'> Admin</p>
            </div>
        </div>
        <div className='pb-5'>
        <SidebarMenuItem icon={<FiUsers />} label="Users"/>
        <SidebarMenuItem icon={<FiFilePlus />} label="Pending" />
        <SidebarMenuItem icon={<FiSettings />} label="Querries" />

        </div>
        <div>
          <p>Others..</p>
        <div className='pb-3'>
        <SidebarMenuItem icon={<FiHome />} label="Groups" />
        <SidebarMenuItem icon={<FiUsers />} label="Stuffs" />
        <SidebarMenuItem icon={<FiUsers />} label="Report" />
        <SidebarMenuItem icon={<FiFilePlus />} label="Settings" />
        </div>
        </div>
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
