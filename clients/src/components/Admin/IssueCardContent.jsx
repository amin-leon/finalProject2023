import React from 'react'
import { MdDateRange } from "react-icons/md";
import { BiCheckboxChecked } from "react-icons/bi";

function IssueCardContent() {
  return (
    <div>
        <div className=' w-[150px] h-[150px] border-2 border-blue-300 rounded-md'>
                    <div className='flex justify-between p-2'>
                        <div className='flex gap-2'>
                            <MdDateRange />
                            <p className='text-xs'>07-10-2023</p>
                        </div>
                        <div>
                            <BiCheckboxChecked />
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-2 pt-5 justify-center'>
                    <p className='text-2xl font-bold'>25</p>
                    <p className='text-3xl'>Welfare</p>
                    </div>
                </div>
    </div>
  )
}

export default IssueCardContent