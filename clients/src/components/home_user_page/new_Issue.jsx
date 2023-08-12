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
  import { useForm } from 'react-hook-form'
  import { object, string } from 'yup'
  import { yupResolver } from '@hookform/resolvers/yup'


function CreateNewIssue() {


  const validationSchema = object().shape({
    title: string()
      .required('Title is required')
      .min(3, 'Username must be at least 3 characters'),
    description: string().required('Textarea is required').min(10, 'Textarea must be at least 10 characters').max(200, 'Textarea cannot exceed 200 characters'),
                  
    email: string().required('Email is required').email('Invalid email address'),
    assignedTo: string().required('Please select an option').oneOf(['Admin', 'Io', 'Ci'], 'Invalid option selected'),
    password: string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  })


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })


  // Form submission handler
  const onSubmit = (data) => {
    // Do something with the form data
    console.log(data)
  }


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
                <label className='font-bold w-96'>Do you have an issue?</label>
                <p>If yes, fill this form</p>
            </div>
          


        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-5 flex flex-col space-y-2'>
            <label htmlFor="username">Title</label>
            <div className="w-96">
            <Input type="text" {...register('title')} />
            {errors.title && (
              <p className="text-xs italic text-red-500">{errors.title.message}</p>
            )}
            </div>
        </div>

        <div className='pb-5 flex flex-col space-y-2 w-96'>
                <label>Category</label>
                    <Select label="level of issue">
                        <Option>Academic</Option>
                        <Option> Welfare</Option>
                        <Option>Rogistics</Option>
                        <Option>Personal</Option>
                    </Select>
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
               <Textarea label="full issue details ..... " {...register('description')} />
               {errors.description && (
              <p className="text-xs italic text-red-500">{errors.description.message}</p>
            )}
            </div>

            <div className='flex flex-col pb-5 gap-3 w-96'>
                <label className=''>Assigned To</label>
                <div className='pb-5 flex flex-col space-y-2'>
                    <Select label="Who's leader ?" name="assignedTo">
                        <Option>Admin</Option>
                        <Option> Io</Option>
                        <Option>Ci</Option>
                    </Select>
                </div>
            </div>


        <div className="w-96">
                 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Attachment</label>
                  <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />
            </div>


        <div className='flex  gap-4 justify-start pt-5'>
               <div className="flex w-max gap-4">
                 <Button color="blue" type='submit'>Forward </Button>
               </div>
            </div>
      </form>



        </div>
    </div>
   
  )
}


export default CreateNewIssue