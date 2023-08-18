import React, { useState } from 'react';
import { FiHome, FiUsers, FiFilePlus, FiSettings } from 'react-icons/fi';
// import IssuePage from '../../pages/stuff/IssuesPage';
// import Stuff from '../../pages/stuff/Stuff';
import { NewIssueNotifications } from '../../components/Admin/NewIssueNotification'
import { ComplexNavbar } from './test/avatarMenu';
// import Register from '../../pages/Register'
import Login from '../../pages/Login'



const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SidebarMenuItem = ({ icon, label }) => {
    return (
      <div className="flex items-center py-2  hover:bg-black hover:text-white w-[200px]">
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
            <img  className ="w-[40px] h-[40px] rounded-full" src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'alt='Avatar' />
            <div>
              <p>NP Leon</p>
              <p className='text-xs'> Admin</p>
            </div>
        </div>
        <div className='pb-5'>
        <SidebarMenuItem icon={<FiUsers />} label="Users" />
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
            <div className='flex justify-end items-center  text-blue-500 pb-2'>
            <NewIssueNotifications />
            </div>
           
           <ComplexNavbar />
          </div>

        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-4">
            {/* <Stuff /> */}
            {/* <IssuePage /> */}
            <Login />
        </main>
      </div>
      
      
    </div>
  );
};

export default DashboardLayout;
