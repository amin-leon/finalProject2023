import React from 'react'

function StuffCard() {
  return (
    <div className=''>
             <div className=' card flex rounded-md bg-white mt-4 p-3 mx-auto shadow-lg shadow-gray-500/50'>
                    <div className=''>
                        <img className=' rounded-full w-[50px] h-[40px]' src='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' alt='avatr' />

                    </div>
                    <div className='flex flex-col gap-1 pr-5 pl-5'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold'>Sum Miller</p>
                                <p className='text-xs italic'>Student</p>
                            </div>
                            <div className='text-sm'>Today 12:45 a.m</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>In publishing and graphic design,
                                 Lorem ipsum is 
                                a placeholder text commo
                            </p>
                            <p className='text-xs text-blue-300'>More..</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StuffCard