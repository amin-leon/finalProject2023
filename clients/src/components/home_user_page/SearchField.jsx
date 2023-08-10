import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchField = () => {
  return (
    <div className="flex items-center border rounded-md p-2">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="border-none focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchField;
