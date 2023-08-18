import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Radio, Button  } from "@material-tailwind/react";

import { useForm } from 'react-hook-form'
import { object, string,date } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


function NewUserRegistration() {

  const schema = object().shape({

      username: string()
                .required('Username is required')
                .min(3, 'Username must be at least 3 characters')
                .max(20, 'Username cannot exceed 20 characters')
                .matches(
                  /^[a-zA-Z0-9_-]+$/, // Only letters, digits, underscore, and hyphen are allowed
                  'Username can only contain letters, digits, underscore, and hyphen'
                ),
    about: string()
            .required('About you text is required')
            .min(5, 'About must be at least 3 characters')
            .max(20, 'About cannot exceed 20 characters'),

    fullName:  string()
                .required('Full name is required')
                .matches(
                  /^[a-zA-Z\s]*$/, // Only letters and spaces are allowed
                  'Full name can only contain letters and spaces'
                ),

    email: string().email('Invalid email').required('Email is required'),
    password: string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters')
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
                ),

    role: string().required('Role is required'),
    gender: string().required('Gender is required'),
    profileImage: string().required('Profile Image URL is required'),
    contactNumber: string()
                      .required('Contact number is required')
                      .matches(
                        /^(07)[0-9]{8}$/, // Starts with "07" followed by 8 digits
                        'Contact number must start with "07" and have 10 digits in total'
                      )
                      .min(10, 'Contact number must be at least 10 digits')
                      .max(10, 'Contact number cannot exceed 10 digits'),
    dateOfBirth: date()
                .typeError('Date of birth must be a valid date')
                .max(new Date(), 'Date of birth cannot be in the future')
                .notOneOf([new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000)], 'Date of birth cannot be today or tomorrow')
                .required('Date of birth is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

   // Form submission handler
   const onSubmit = (data) => {
    // Do something with the form data
    console.log(data)
  }


  return (
    <div className='container'>
        <div className='header_part bg-black text-white flex justify-between items-center p-7'>
            <p>User Account Creation</p>
            <div className='header_icons'>
                <span>icon1</span>
                <span>icon2</span>
                <span>icon3</span>
            </div>
        </div>
        <div className='main_part'>
        <div class="flex justify-center flex-col items-center h-full">
               
            <div class="w-full max-w-2xl p-6 rounded  shadow-md">
              {/* form Header */}
              <div className='flex justify-start items-center gap-2 pb-3'>
                <p>Profile</p> 
                <div>
                  <CgProfile />
                </div>
              </div>
              <hr />
              {/* cover page part */}
              <div className='max-w-xl h-[100px] bg-light-blue-600 mt-5  relative'>
                <div className='absolute bottom-[-1.5rem] left-4'>
                  <img className="w-[40px] h-[40px] rounded-full cursor-pointer" src='https://th.bing.com/th/id/R.7d8b434b5e2262854314fc342af917ee?rik=6RImsaodFQe0XA&pid=ImgRaw&r=0' alt='profile'/>
                </div>
              </div>
              {/* Form */}
              <div className='form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-3 pt-5 w-full '>
                    <label className='text-sm font-thin'>Username</label>
                    <input type='text' {...register('username')} placeholder='@example' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-sm h-8 rounded-sm'/>
                    {errors.username && (
                          <p className="text-xs italic text-red-500">{errors.username.message}</p>
                        )}
                </div>
                <div className='flex flex-col gap-3 pt-5'>
                    <label className='text-sm font-thin'>Password</label>
                    <input type='password' {...register('password') } placeholder='@password' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-sm h-8 rounded-sm'/>
                    {errors.password && (
                          <p className="text-xs italic text-red-500">{errors.password.message}</p>
                        )}
                </div>
                <div className='flex flex-col gap-3 pt-5'>
                    <label className='text-sm font-thin'>About</label>
                    <textarea  {...register('about')} placeholder='Let world know about you' className=' text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-auto rounded-sm'/>
                    {errors.about && (
                        <p className="text-xs italic text-red-500">{errors.about.message}</p>
                    )}
                </div>
                {/* Personal infomation ................... */}
                <div className='flex justify-start items-center gap-2 pt-10 pb-3'>
                <p>Personal information</p> 
                <div>
                  <CgProfile />
                </div>
              </div>
               <hr />
               {/* All fieldl like name, class, email, etc.. ........... */}
               {/* Rrow-1 of field...... */}
               <div className='row__1 flex gap-4  pt-10 max-w-full'>
                  <div className='flex flex-col justify-between basis-[50%]'>
                        <label className='text-sm font-thin'>Name</label>
                        <input type='text'  {...register('fullName')}  placeholder='Type in first name' className=' text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                        {errors.fullName && (
                          <p className="text-xs italic text-red-500">{errors.fullName.message}</p>
                        )}
                  </div>
                  <div className='flex flex-col gap-1 basis-[50%]'>
                        <label className='text-sm font-thin'>Surname</label>
                        <input type='text' {...register('fullName')} placeholder='Type in second name' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                        {errors.fullName && (
                          <p className="text-xs italic text-red-500">{errors.fullName.message}</p>
                        )}
                  </div>
               </div>
               {/* Row two */}
               <div className='row__1 flex gap-4  max-w-full pt-3 justify-between items-center'>
                  <div className='flex flex-col  basis-[50%]'>
                        <label>Email</label>
                        <input type='text' {...register('email')} placeholder='Example@gmail.com' className='text-xs focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                        {errors.email && (
                          <p className="text-xs italic text-red-500">{errors.email.message}</p>
                        )}
                  </div>
                  <div className='flex flex-col gap-1  basis-[50%]'>
                        <label className='text-sm font-thin'>Facult & Class</label>
                        <div class="w-full">
                          <select class="block w-full text-xs focus: outline-none focus:border-blue-200 border border-gray-500 pl-3 max-w-md h-8 rounded-sm">
                            <option>Select Faculty</option>
                            <option>Csc</option>
                            <option>Pps</option>
                            <option>Lang</option>
                          </select>
                        </div>

                  </div>
               </div>
               {/* Row Three */}
               <div className='row__1 flex gap-4 pt-3 max-w-full'>
                  <div className='flex flex-col basis-[50%]'>
                        <label className='text-sm font-thin'>Telephone</label>
                        <input type='text' {...register('contactNumber')} placeholder='07....' className='focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                            { errors.contactNumber &&(
                            <p className="text-xs italic text-red-500">{errors.contactNumber.message}</p>
                            )}
                  </div>
                  <div className='flex flex-col gap-1 basis-[50%] w-full'>
                        <label className='text-sm font-thin'>Date of birth</label>
                        <div className="flex w-full flex-col h-[40px] gap-6">
                        <input type='date' {...register('dateOfBirth')} className='focus: outline-none focus:border-blue-200 border border-gray-500 p-3 max-w-md h-8 rounded-sm'/>
                        { errors.dateOfBirth &&(
                            <p className="text-xs italic text-red-500">{errors.dateOfBirth.message}</p>
                            )}
                        </div>
                  </div>
               </div>
                {/* radio buttons */}
               <div className='row__1 flex gap-4 pt-3'>
                  <div className='flex flex-col gap-1'>
                        <label className='text-sm font-thin'>Gender</label>
                        <div className="flex w-max gap-4">
                            <Radio name="type" label="Male" />
                            <Radio name="type" label="Female" />
                        </div>  
                        { errors.gender &&(
                            <p className="text-xs italic text-red-500">{errors.gender.message}</p>
                            )}                
                   </div>
               </div>
               {/* buttons footer */}
               <div className='footerButtons flex justify-between pt-10 max-w-md'>
                <div><p>Back To Home</p></div>
                <div>
                  <Button type="submit" color="blue">Sign Up</Button>
                </div>
               </div>
              </form>
              </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default NewUserRegistration