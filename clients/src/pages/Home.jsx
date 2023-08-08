import React from 'react'
import SideNav from '../components/home_user_page/SideNav'
import MainContent from '../components/home_user_page/MainContent'

function Home() {
  return (
    <div>
        <div className="flex">
          <SideNav name={"NP Leon"} />
          <MainContent />
        </div>
    </div>
  )
}

export default Home