import React from 'react'
import { Button } from "@material-tailwind/react";


function UserAcountSettings() {
  return (
    <div className='max-w-7xl mx-auto pt-8 '>
      <p className='text-2xl'>Profile Settings</p>
      <div className='AllprofileParts grid grid-cols-6 pt-5'>
         <div className=''>
            <div className='flex gap-3 flex-col p-5'>
              <div className='hover:bg-blue-300 cursor-pointer'>General</div>
              <div  className='hover:bg-blue-300 cursor-pointer'>Account Preferences</div>
            </div>
         </div>
         <div className='crightPart col-span-5 '>
             <div className='part2 grid grid-cols-4'>
                  <div className='col-span-3' >
                  

                 
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                  </label>
                  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
                  <p class="text-red text-xs italic">Please fill out this field.</p>
                </div>
                <div class="md:w-1/2 px-3">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                  </label>
                  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                    Password
                  </label>
                  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
                  <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
              </div>
              <div class="-mx-3 md:flex mb-2">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                    City
                  </label>
                  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque" />
                </div>
                <div class="md:w-1/2 px-3">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                    State
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="md:w-1/2 px-3">
                  <label class="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                    Zip
                  </label>
                  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210" />
                </div>
              </div>
              <div className=' mt-5'>
                <Button variant="outlined" color="blue" className='mt-3'>Save</Button>
              </div>
            </div>


                  </div>
                  <div class="profileImage mx-auto pt-3">
                      <img className='rounded-full w-[100px] h-[100px]' src="https://images.statusfacebook.com/profile_pictures/arabic-girls/arabic-girls-dp-90.jpg" alt="profile" />
                      <Button variant="outlined"  className='mt-3'>Change</Button>
                  </div>
             </div>
         </div>
      </div>
    </div>
  )
}

export default UserAcountSettings