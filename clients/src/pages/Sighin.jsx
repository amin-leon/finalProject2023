import React from 'react';
import { FaLock, FaFacebook, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')" }}>
      <div className="overlay w-4/5 md:w-2/3 p-8 bg-white bg-opacity-70 rounded-lg shadow-lg flex">
        {/* Left Section - Login Form */}
        <div className="w-1/2 pr-8 flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <span className="text-5xl text-gray-800">
              <FaLock />
            </span>
          </div>
          <form className="w-full">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input type="password" id="password" name="password" className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2 focus:ring focus:ring-indigo-300" />
                <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
              </div>
              <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
            <line x1="16" y1="12" x2="12" y2="12"></line>
            <line x1="8" y1="12" x2="8" y2="16"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
