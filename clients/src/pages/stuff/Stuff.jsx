import React from 'react'
import StuffCard from './stuffCard'
import StuffCardDetails from './StuffCardDetails'

export default function Stuff() {
  return (
    <div className='wrapper'>
        <div className='container grid grid-cols-3 '>
            <div className=' pl-5 left-part h-screen shadow-lg shadow-gray-500/50'>
               <StuffCard />
              
            </div>
            <div className='grid col-span-2 '>
                <div className='container p-5'>
                <StuffCardDetails /> 
                </div>
            </div>
        </div>
    </div>
  )
}
