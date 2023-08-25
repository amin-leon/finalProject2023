// RegistrationForm.js
import React from 'react';

const RegistrationForm = () => {
  return (
    <form className="grid grid-cols-2 gap-6">
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter first name"
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full px-4 py-2 border rounded-md "
          placeholder="Enter last name"
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter email"
        />
      </div>
      {/* Add other form fields */}
      <div className="col-span-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
