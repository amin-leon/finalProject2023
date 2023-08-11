import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Textarea,
    Select,
    Option ,
    Input,
    Button
 
  } from "@material-tailwind/react";

function CreateNewIssue() {
  return (
    <div className=' grid-cols-1 grid xl:grid-cols-3 gap-5 mt-10'>
    <div className="pb-4 xl:mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 rounded-none bg-blue-300">
               
            </TimelineIcon>
            <Typography variant="font" color="blue-gray">
              Send Issue
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more succe
              
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 rounded-none bg-blue-300">
              
            </TimelineIcon>
            <Typography variant="font" color="blue-gray">
              Track it very Offen
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-thin text-gray-600">
              The key to more 
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 rounded-none bg-blue-300">
              
            </TimelineIcon>
            <Typography variant="font-thin" color="blue-gray">
              Once it's solved, send feedback
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more 
              
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
        <div className='grid col-span-2 border-l border-gray-100 pl-[50px]'>
            <div className='pb-10 flex flex-col space-y-2'>
                <label className='font-bold w-96'>Complete this form</label>
                <p>Choose where you want to for your querry and make sure that choose issue catery very well</p>
            </div>
            <div className='pb-5 flex flex-col space-y-2'>
                <label>Title</label>
                <div className="w-96">
                  <Input label="issue" />
                </div>
            </div>
            <div className='pb-5 flex flex-col space-y-2 w-96'>
                <label>Priority</label>
                    <Select label="level of issue">
                        <Option>Low</Option>
                        <Option> High</Option>
                        <Option>Urgency</Option>
                    </Select>
            </div>
            <label>Description</label>
            <div className="w-96 pb-5">
               <Textarea label="full issue details ....." />
            </div>
            <div className='flex flex-col pb-5 gap-3 w-96'>
                <label className=''>Assigned To</label>
                <div className='pb-5 flex flex-col space-y-2'>
                    <Select label="Who's leader ?">
                        <Option>Admin</Option>
                        <Option> IO</Option>
                        <Option>CI</Option>
                    </Select>
            </div>
            </div>
            <div className="w-96 pb-5">
               <Textarea label="Additional Comments ....." />
            </div>
            <div className="w-96">
                 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Attachment</label>
                  <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />
            </div>
            <div className='flex  gap-4 justify-start pt-5'>
               <div className="flex w-max gap-4">
                 <Button color="blue">Forward </Button>
               </div>
            </div>
        </div>
    </div>
    
  )
}

export default CreateNewIssue