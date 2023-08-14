import React from 'react'

function StuffCard() {
  return (
    <div className='bg-gray-50 p-3'>
             <div className=' card flex rounded-xl bg-white mt-4 p-6 mx-auto shadow-lg shadow-gray-500/50'>
                    <div className='rounded-full w-[50px] h-[50px]'>
                        <img className=' rounded-full w-[50px] h-[50px]' src='https://i.pinimg.com/736x/e0/6a/57/e06a5707a7e215ff44a7b928d87d42e1.jpg' alt='avatr' />

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
                            <p className='text-xs text-blue-300 cursor-pointer'>More..</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StuffCard