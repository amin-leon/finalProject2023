import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";


const Sidebar = (props) => {
  return (
    <div className="w-[15%] bg-white  h-screen border-r-2 border-slate-200 sticky">
      <div className="flex items-center p-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m6MLoHjjQ_HjGP5l_VoAsPJzFBgpRiHTsb8BZFevRib1jqQHUC8NPodHqnD7di9N5rk&usqp=CAU"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold text-lg">{props.name}</h2>
          <p className="text-sm">Student/Ict</p>
        </div>
      </div>
      <ul className="text-sm">
        <li className="py-4 px-6 text-sky-500 ">
          DESCOVER
           <ol className='py-3'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Featured</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Most popular</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Shuffle</li>
              </div>
             
           </ol>
        </li>
        <li className="py-2 px-6  text-sky-500 transition duration-300 cursor-pointer">
          TOOLS
          <ol className='py-3 text-black'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Featured</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Most popular</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Shuffle</li>
              </div>
             
           </ol>
        </li>
        <li className="py-2 px-6 text-sky-500 transition duration-300 cursor-pointer">
          REPORTS & VOTINGS
          <ol className='py-3 text-black'>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Featured</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Most popular</li>
              </div>
              <div className='p-2 flex flex-row items-center space-x-2 text-black  hover:text-[#53B1E7] transition duration-300 cursor-pointer'>
                <span><IoIosAddCircleOutline /></span>
                <li>Shuffle</li>
              </div>
             
           </ol>
        </li>
        {/* Add more menu items */}
      </ul>
    </div>
  );
};

export default Sidebar;
