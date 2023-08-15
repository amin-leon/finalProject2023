import React from 'react'
import { Button } from "@material-tailwind/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function IssuePageLeft() {
  return (
    <div className='Wrapper p-16'>
        <div className='flex flex-col gap-12'>
            <div>
               <p className='text-3xl'>Welcome back to Your Dashboard Alex</p>
            </div>
            <div>
                <p>
                t is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. 
                </p>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col items-center gap-4'>
                 <div className='cases font-bold'>Percentage</div>
                    <div>
                        <div className='report_circle w-[120px] h-[120px] bg-blue-500 relative flex justify-center items-center rounded-full'>
                            <div className='w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center'>
                                <p className='text-2xl'>5%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                   <div className='cases font-bold'>Cases</div>
                   <div className='flex gap-3 pt-4 items-center text-sm'>
                        <div className='text-xl'>12</div>
                        <div className=''>Academic</div>
                   </div>
                   <div className='flex gap-3 pt-4 items-center text-sm'>
                        <div className='text-xl'>43</div>
                        <div className=''>Roistics</div>
                   </div>
                   <div className='flex gap-3 pt-4 items-center text-sm'>
                        <div className='text-xl'>20</div>
                        <div className=''>Welfare</div>
                   </div>
                </div>
            </div>
            <div className='container flex justify-center items-center'>
            <div className="flex justify-center items-center">
                    <Button color="white" className='text-black flex gap-2 items-center'>
                        <span>See all queries</span>
                        <span><HiOutlineArrowNarrowRight /></span>
                    </Button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default IssuePageLeft