import React from 'react'
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { GrAttachment } from "react-icons/gr";
import { Button } from "@material-tailwind/react";
import { CommentBoxTextarea } from './PostComment';
import MessageDialog from '../../components/Admin/Dispatch'

function StuffCardDetails( {Users} ) {
    if (!Users) {
        return <p className='flex justify-center items-center my-auto '>Select a user to see details.................</p>;
      }
  return (
    <div>
        <div className='topIcons flex justify-between items-center border-b border-gray-300 pb-3'>
            <div className='flex gap-3 text-xl cursor-pointer'>
               
                <MessageDialog  />
            </div>
            <div className='flex justify-center items-center cursor-pointer gap-3'>
                <span>1/180</span>
                <span><LiaAngleLeftSolid /></span>
                <span><LiaAngleRightSolid /></span>
            </div>
        </div>
        {/* body part */}
        <div>
            <div className='flex gap-4 p-5' >
            <img className=' rounded-full w-[50px] h-[40px]' src={Users.profileImage} alt='avatr' />
            <div>
                <p>{Users.fullName}</p>
                <p className='text-xs'>{Users.role}</p>
                <p className='text-xs font-thin'>{Users.email}</p>
                <div className='pt-7 pb-5 text-sm'>{Users.createdAt}</div>
                <div>
                    <p className='font-bold italic'>"Class window has broken",</p>
                    <div className='mt-2'>
                        <p className='text-sm'>
                        {Users.desc}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-2 pt-5'>
                    <span><GrAttachment /></span>
                    <span>Attachments</span>
                </div>
                <div className='pt-5 flex gap-4'>
                    <img  className="w-[100px] h-[100px]" src='https://www.computerhope.com/jargon/d/doc.png' alt='attachment' />
                    <img  className="w-[100px] h-[100px]" src='https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=' alt='attachment' />

                </div>
                <div className='mt-6'>
                {/* <Button variant="Download">Download</Button> */}
                <Button className="flex items-center gap-3">
                    <img className=" w-[20px] h-[20px]" src="https://img.icons8.com/?size=512&id=39811&format=png" alt="Download" />
                    Download
                </Button>
                </div>
                <CommentBoxTextarea />
               
            </div>
            </div>
        </div>
    </div>
  )
}

export default StuffCardDetails