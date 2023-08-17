// IssueButtons.js
import React from 'react';
import { AiOutlineFolderOpen , AiOutlineCheckCircle} from "react-icons/ai";
import { TbProgressDown } from "react-icons/tb";


function IssueButtons({ onSelect, selectedStatus }) {
  const statusOptions = ['all', 'open', 'in progress', 'closed'];

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      <li className="mr-2 cursor-pointer flex items-center">
        <AiOutlineFolderOpen className="text-xl" />
        <a
          href="l"
          onClick={(e) => {
            e.preventDefault();
            onSelect('all');
          }}
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          All
        </a>
      </li>
      <li className="mr-2 cursor-pointer flex items-center">
        <AiOutlineFolderOpen className="text-xl" />
        <a
          href="l"
          onClick={(e) => {
            e.preventDefault();
            onSelect('open');
          }}
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          New
        </a>
      </li>
      <li className="mr-2 cursor-pointer flex items-center">
        <TbProgressDown className="text-xl text-blue-600" />
        <a
          href="l"
          onClick={(e) => {
            e.preventDefault();
            onSelect('in progress');
          }}
          className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
          aria-current="page"
        >
          Progress
        </a>
      </li>
      <li className="mr-2 cursor-pointer flex items-center">
        <AiOutlineCheckCircle className="text-xl" />
        <a
          href="l"
          onClick={(e) => {
            e.preventDefault();
            onSelect('closed');
          }}
          className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          Solved
        </a>
      </li>
    </ul>
  </div>
  
  );
}

export default IssueButtons;
