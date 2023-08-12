import React from 'react';
import { FaLock, FaFacebook, FaGoogle } from 'react-icons/fa';


import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const LoginPage = () => {
  const schema = object().shape({

    username: string()
              .required('Username is required')
              .min(3, 'Username must be at least 3 characters')
              .max(20, 'Username cannot exceed 20 characters')
              .matches(
                /^[a-zA-Z0-9_-]+$/, // Only letters, digits, underscore, and hyphen are allowed
                'Username can only contain letters, digits, underscore, and hyphen'
              ),
  password: string()
              .required('Password is required')
              .min(8, 'Password must be at least 8 characters')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
              ),
 
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
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-blue-gray-50" style={{ backgroundImage: "url('')" }}>
      <div className="overlay w-4/5 md:w-2/3 p-8 bg-white bg-opacity-70 rounded-lg shadow-lg flex">
        {/* Left Section - Login Form */}
        <div className="w-1/2 pr-8 flex flex-col justify-center items-center">
          <div className="text-center  mb-8">
            <img src='https://cdn-icons-png.flaticon.com/512/6681/6681204.png' alt='loginPicture' className='w-[100px]' />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
              <input type="text" {...register('username')} id="username" name="username" className="w-full focus: outline-none px-4 py-3 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none" />
              {errors.username && (
              <p className="text-xs italic text-red-500">{errors.username.message}</p>
            )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input type="password" {...register('password') } id="password" name="password" className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none" />
              {errors.password && (
              <p className="text-xs italic text-red-500">{errors.password.message}</p>
            )}
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2 focus:ring focus:ring-indigo-300" />
                <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
              </div>
              <a href="leon.com" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full px-6 py-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">Login</button>
          </form>
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-600">or log in with</span>
          </div>
          <div className="flex justify-center mt-4">
            <button className="p-2 bg-blue-500 text-white rounded-full">
              <FaFacebook />
            </button>
            <button className="ml-4 p-2 bg-red-500 text-white rounded-full">
              <FaGoogle />
            </button>
          </div>
        </div>
        {/* Right Section - SVG Illustration for Login */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg flex items-center justify-center">
          <img src='https://www.shutterstock.com/shutterstock/photos/1751135810/display_1500/stock-vector-working-at-home-vector-flat-style-illustration-online-career-coworking-space-illustration-young-1751135810.jpg' alt=''/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
