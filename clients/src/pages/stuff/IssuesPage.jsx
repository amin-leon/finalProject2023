import React from 'react'

import IssuePageLeft from './IssuePage_1'
import IssuePageRight from './IssuePage_2'



export default function IssuePage() {

  return (
    <div className='wrapper'>
        <div className='container grid grid-cols-3 '>
            <div className=' p-5 left-part h-screen shadow-lg shadow-gray-500/50'>
            <IssuePageLeft />
            </div>
            <div className='grid col-span-2 '>
                <div className='container p-5'>
                <IssuePageRight />
                </div>
            </div>
        </div>
    </div>
  )
}
