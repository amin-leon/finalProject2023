import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Textarea,
  Input,
} from "@material-tailwind/react";
import { object, string } from 'yup';

function CreateNewIssue() {
  const validationSchema = object().shape({
    title: string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters'),
    description: string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(200, 'Description cannot exceed 200 characters'),
    email: string()
      .required('Email is required')
      .email('Invalid email address'),
    assignedTo: string()
      .required('Please select an option')
      .oneOf(['Admin', 'Io', 'Ci'], 'Invalid option selected'),
  });

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = async () => {
    try {
      await validationSchema.validate({
        title,
        description,
        email,
        assignedTo,
      });
      return true;
    } catch (error) {
      const fieldErrors = {};
      error.inner.forEach((err) => {
        fieldErrors[err.path] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (await validateFields()) {
      try {
        const url = "http://localhost:8080/api/issues/new-issue";
        const response = await axios.post(url, {
          title,
          description,
          email,
          assignedTo,
          category,
          priority,
        });
        const res = response.data;
        navigate("/user-home");
        console.log(res.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='grid-cols-1 grid xl:grid-cols-3 gap-5 mt-10'>
      {/* ... Rest of your UI code ... */}
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

      <form onSubmit={onSubmit}>
        {/* ... Other form fields ... */}
        <div className='pb-5 flex flex-col space-y-2'>
          <label htmlFor='username'>Title</label>
          <div className='w-96'>
            <Input
              type='text'
              id='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className='text-xs italic text-red-500'>{errors.title}</p>
            )}
          </div>
          



          <div className='pb-5 flex flex-col space-y-2 w-96'>
                <label>Category</label>

                    <select
                      value={category}
                      required
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Academic">Academic</option>
                      <option value="Welfare">Welfare</option>
                      <option value="Rogistics">Rogistics</option>
                      <option value="Personal">Personal</option>
                    </select>
            </div>

        <div className='pb-5 flex flex-col space-y-2 w-96'>
                <label>Priority</label>
                    <select  
                    value={priority}
                      required
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <option value="Urgency">Urgency</option>
                      <option value="High">High</option>
                      <option value="Urgency">Urgency</option>
                    </select>
            </div>


        <label>Description</label>
            <div className="w-96 pb-5">
               <Textarea 
               label="full issue details ..... "
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               />
               {errors.description && (
              <p className="text-xs italic text-red-500">{errors.description.message}</p>
            )}
            </div>

            <div className='flex flex-col pb-5 gap-3 w-96'>
                <label className=''>Assigned To</label>
                <div className='pb-5 flex flex-col space-y-2'>
                    <select label="Who's leader ?" name="assignedTo" onChange={(e) => setAssignedTo(e.target.value)} value={assignedTo}>
                    <option value="Admin">Admin</option>
                        <option value="Io"> Io</option >
                        <option value="Ci">Ci</option>
                    </select>
                </div>
            </div>



        </div>


        <div className="w-96">
                 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Attachment</label>
                  <input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />
            </div>


        <div className='flex  gap-4 justify-start pt-5'>
               <div className="flex w-max gap-4">
                 <button type='submit' className='text-blue-500'>Send </button>
               </div>
            </div>
      </form>

      {/* ... Rest of your UI code ... */}
    </div>
    </div>
  );
}

export default CreateNewIssue;
