import React from 'react'
import SideNav from '../components/home_user_page/SideNav'
import MainContent from '../components/home_user_page/MainContent'


function Home() {
  return (
    <div>
        <div className="flex relative ">
          <div className='basis-[15%]'>
          <SideNav />
          </div>
          <div className='relative basis-[85%]'>
          <MainContent />
          </div>
        </div>
    </div>
  )
}

export default Home