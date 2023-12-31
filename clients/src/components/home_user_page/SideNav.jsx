import React from 'react';

import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { GiProgression} from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiTimesOutline } from "react-icons/ti";
import { BiMessageRoundedDots, BiBarChart } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const token = localStorage.getItem('Token')
  const navigate = useNavigate()
  const handleLogout = ()=>{
    console.log(token)
    localStorage.removeItem('Token');
    navigate('/login')
    console.log(token)
  }
  return (
    <div className="hidden xl:block w-[15%] bg-white fixed h-screen border-r-2 border-slate-200 ">
      <div className="flex items-center p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m6MLoHjjQ_HjGP5l_VoAsPJzFBgpRiHTsb8BZFevRib1jqQHUC8NPodHqnD7di9N5rk&usqp=CAU"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold text-lg">NP Leon</h2>
          <p className="text-sm">Student/Ict</p>
        </div>
      </div>
      <ul className="text-sm">
        <li className="py-4 px-6 text-sky-500 ">
          ISSUES
           <ol className='py-3'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoCreateOutline /></span>
                <NavLink to="new-issue">
                  <li>New</li>
                </NavLink>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><GiProgression /></span>
                <NavLink to="progress-issues" >
                  <li>Progess</li>
                </NavLink>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><AiOutlineCheckCircle /></span>
                <NavLink to="solved-issues">
                <li>Solved</li>
                </NavLink>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><TiTimesOutline /></span>
                <NavLink to="rejected-issues">
                <li>Rejected</li>               
                 </NavLink>
              </div>
             
           </ol>
        </li>
        <li className="py-2 px-6  text-sky-500 transition duration-300 cursor-pointer">
          COMMENTS
          <ol className='py-3 text-black'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><BiMessageRoundedDots /></span>
                <li>Messages</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><TbNotification /></span>
                <li>Notifications</li>
              </div>
           </ol>
        </li>
        <li className="py-2 px-6 text-sky-500 transition duration-300 cursor-pointer">
          OTHERS..
          <ol className='py-3 text-black'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><BsPeople /></span>
                <li>Staffs</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><CgProfile /></span>
                <li>Profile</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><BiBarChart /></span>
                <NavLink to="settings">
                   <li>Settings</li>
                </NavLink>
              </div>
              <div onClick={handleLogout} className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><BiBarChart /></span>
                
                   <li>Logout</li>
               
              </div>
           </ol>
        </li>
        {/* Add more menu items */}
      </ul>
    </div>
  );
};

export default Sidebar;
