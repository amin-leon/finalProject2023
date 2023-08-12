/* eslint-disable no-unused-vars */
import React from 'react';
import {  AiOutlineMenuUnfold, AiOutlineDownload, AiOutlineFolderAdd, AiOutlineFolderOpen, AiOutlineMenu} from "react-icons/ai";
import { GoIssueClosed , GoIssueDraft} from "react-icons/go";
import { NoticationBage } from '../utils_material_tailwind/Notification';
import SearchField from './SearchField';
// import IssueCreationForm from './new_Issue';
import NewUserRegistration from './new_User';

const MainContent = () => {
  return (
    <div className="w-[100%] md:w-[100%] p-4">
      <div className="flex items-center justify-between xl:justify-between mb-4 border-b border-slate-100 w-[100%] p-6 ">
        <div className="flex items-center space-x-4">
          <SearchField />
        </div>
        {/* Other content for the top bar */}
        <div className="hidden xl:flex flex-row space-x-3 justify-end h-10 items-center">
                   <div>
                   <span className="text-2xl space-x-4 relative"> <NoticationBage /></span>
                   </div>
          </div>
          <div className=" flex flex-row space-x-3 justify-end h-10 items-center xl:hidden">
                   <div>
                   <button className="text-2xl space-x-4 relative"> <AiOutlineMenu /></button>
                   </div>
          </div>
      </div>
      {/* top 2 nav bar */}
      <p className='hidden xl:block'> DASHBOARD</p>
      <div className='flex justify-between items-center p-6 border-b border-slate-100'>
        
        <div className='hidden xl:block'>
          <ul className='flex flex-row space-x-4'>
            <li className='flex justify-center items-center space-x-2'><span><AiOutlineFolderOpen /></span><span>Open</span></li>
            <li className='flex justify-center items-center space-x-2'><span><GoIssueDraft /></span><span>Proress</span></li>
            <li className='flex justify-center items-center space-x-2'><span><GoIssueClosed /></span><span>Solved</span></li>
          </ul>
        </div>
        
        <div className='flex gap-4 pr-10'>
          <button className='bg-[#53B1E7] p-2 text-center rounded-md text-white flex items-center justify-center gap-2'>
             <span className='text-xl font-bold'><AiOutlineFolderAdd /></span> 
             <span className='font-thin'>add new</span>
          </button>
          <button>
             <AiOutlineMenuUnfold />
          </button>
          <button>
             <AiOutlineDownload />
          </button>
        </div>
      </div>
      <div className="">
        {/* issue registrtion form */}
        {/* <IssueCreationForm  /> */}
        {/* User registration */}
        <NewUserRegistration />
      </div>
    </div>
  );
};

export default MainContent;
