import React from 'react'
import SideNav from '../components/home_user_page/SideNav'
import { Outlet } from 'react-router-dom'
import TopMainContent from '../components/home_user_page/TopMainContent'


function Home() {
  return (
    <div>
        <div className="flex relative ">
          <div className='basis-[15%]'>
          <SideNav />
          </div>
          <div className='relative basis-[85%]'>
           <TopMainContent />
          <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Home