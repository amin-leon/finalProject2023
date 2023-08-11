import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Radio, Button } from "@material-tailwind/react";

function ChatGPT() {
  return (
    <div className='container mx-auto'>
      <div className='header_part bg-black text-white flex justify-between items-center p-4 md:p-7'>
        <p>User Account Creation</p>
        <div className='header_icons'>
          <span>icon1</span>
          <span>icon2</span>
          <span>icon3</span>
        </div>
      </div>
      <div className='main_part'>
        <div className="w-full max-w-2xl p-6 md:p-10 rounded shadow-md mx-auto">
          {/* ... (rest of the code) */}
            
          <div class="w-full max-w-2xl p-6 rounded  shadow-md">
              {/* form Header */}
              <div className='flex justify-start items-center gap-2 pb-3'>
                <p>Profile</p> 
                <div>
                  <CgProfile />
                </div>
              </div>
              <hr />
              {/* cover page part */}
              <div className='max-w-xl h-[100px] bg-light-blue-600 mt-5  relative'>
                <div className='absolute bottom-[-1.5rem] left-4'>
                  <img className="w-[40px] h-[40px] rounded-full cursor-pointer" src='https://th.bing.com/th/id/R.7d8b434b5e2262854314fc342af917ee?rik=6RImsaodFQe0XA&pid=ImgRaw&r=0' alt='profile'/>
                </div>
              </div>
              {/* Form */}
              <div className='form'>
                <div className='flex flex-col gap-3 pt-5 w-full '>
                    <label className='text-sm font-thin'>Username</label>
                    <input type='text' placeholder='@example' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-sm h-8 rounded-sm'/>
                </div>
                <div className='flex flex-col gap-3 pt-5'>
                    <label className='text-sm font-thin'>Password</label>
                    <input type='password' placeholder='@password' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-sm h-8 rounded-sm'/>
                </div>
                <div className='flex flex-col gap-3 pt-5'>
                    <label className='text-sm font-thin'>About</label>
                    <textarea  placeholder='Let world know about you' className=' text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-auto rounded-sm'/>
                </div>
                {/* Personal infomation ................... */}
                <div className='flex justify-start items-center gap-2 pt-10 pb-3'>
                <p>Personal information</p> 
                <div>
                  <CgProfile />
                </div>
              </div>
               <hr />
               {/* All fieldl like name, class, email, etc.. ........... */}
               {/* Rrow-1 of field...... */}
               <div className='row__1 flex gap-4  pt-10 max-w-full'>
                  <div className='flex flex-col justify-between basis-[50%]'>
                        <label className='text-sm font-thin'>Name</label>
                        <input type='text' placeholder='Type in first name' className=' text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                  </div>
                  <div className='flex flex-col gap-1 basis-[50%]'>
                        <label className='text-sm font-thin'>Surname</label>
                        <input type='text' placeholder='Type in second name' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                  </div>
               </div>
               {/* Row two */}
               <div className='row__1 flex gap-4  max-w-full pt-3 justify-between items-center'>
                  <div className='flex flex-col  basis-[50%]'>
                        <label>Email</label>
                        <input type='text' placeholder='Example@gmail.com' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                  </div>
                  <div className='flex flex-col gap-1  basis-[50%]'>
                        <label className='text-sm font-thin'>Facult & Class</label>
                        <div class="w-full">
                          <select class="block w-full text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm">
                            <option>Select Faculty</option>
                            <option>Csc</option>
                            <option>Pps</option>
                            <option>Lang</option>
                          </select>
                        </div>

                  </div>
               </div>
               {/* Row Three */}
               <div className='row__1 flex gap-4 pt-3 max-w-full'>
                  <div className='flex flex-col basis-[50%]'>
                        <label className='text-sm font-thin'>Telephone</label>
                        <input type='text' placeholder='example@gmail.com' className='focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                  </div>
                  <div className='flex flex-col gap-1 basis-[50%] w-full'>
                        <label className='text-sm font-thin'>Date of birth</label>
                        <div className="flex w-full flex-col h-[40px] gap-6">
                        <input type='date' className='focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                        </div>
                  </div>
               </div>
                {/* radio buttons */}
               <div className='row__1 flex gap-4 pt-3'>
                  <div className='flex flex-col gap-1'>
                        <label className='text-sm font-thin'>Gender</label>
                        <div className="flex w-max gap-4">
                            <Radio name="type" label="Male" />
                            <Radio name="type" label="Female" />
                        </div>                  
                   </div>
               </div>
               {/* buttons footer */}
               <div className='footerButtons flex justify-between pt-10 max-w-md'>
                <div><p>Back To Home</p></div>
                <div>
                  <Button color="blue">Sign Up</Button>
                </div>
               </div>
              
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatGPT;
