import React from 'react';
import { CiTwitter } from "react-icons/ci";
import { AiOutlineCamera, AiOutlineMenuUnfold, AiOutlineDownload, AiOutlineFolderAdd, AiOutlineFolderOpen} from "react-icons/ai";
import { IoMdPower } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoIssueClosed , GoIssueDraft} from "react-icons/go";

const MainContent = () => {
  return (
    <div className="w-[85%] p-4">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 w-[100%] p-6 ">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-10 py-1 border rounded-md "
          />
          <div className="flex space-x-2">
            <button>
              <p  className="w-6 h-6" ><CiSearch /></p>
            </button>
          </div>
        </div>
        {/* Other content for the top bar */}
        <div className="flex flex-row space-x-3 justify-end h-10 items-center">
                   <div>
                   <span className="text-2xl space-x-4 relative"> <IoNotificationsOutline /></span>

                   </div>
                    <span className="text-2xl pr-5"><IoMdPower/></span>
                </div>
      </div>
      {/* top 2 nav bar */}
      <p> DASHBOARD</p>
      <div className='flex justify-between items-center p-6 border-b border-slate-100'>
        
        <div>
          <ul className='flex flex-row space-x-4'>
            <li className='flex justify-center items-center space-x-2'><span><AiOutlineFolderOpen /></span><span>Open</span></li>
            <li className='flex justify-center items-center space-x-2'><span><GoIssueDraft /></span><span>Proress</span></li>
            <li className='flex justify-center items-center space-x-2'><span><GoIssueClosed /></span><span>Solved</span></li>
          </ul>
        </div>
        
        <div className='flex gap-4 pr-10'>
          <button className='bg-[#53B1E7] p-2 text-center rounded-sm text-white flex items-center justify-center gap-2'>
             <span className='text-xl'><AiOutlineFolderAdd /></span> 
             <span>Add New</span>
          </button>
          <button>
             <AiOutlineMenuUnfold />
          </button>
          <button>
             <AiOutlineDownload />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-slate-100">
        {/* Repeat the following card component for each card */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <img src="https://asia.olympus-imaging.com/content/000104285.jpg" alt="Card" className="w-[30%] h-40 object-cover" />
          <p className="mt-2 text-sm text-gray-600">
            Card description Lorem ipsum dolor sit amet...
          </p>
          <div className="mt-4 flex space-x-2">
            <button>
              <AiOutlineCamera  className="w-6 h-6" />
            </button>
            <button>
              <CiTwitter className="w-6 h-6" />
            </button>
            {/* Add more social media icons */}
          </div>
        </div>
        {/* Repeat for other cards */}
        
      </div>
    </div>
  );
};

export default MainContent;
