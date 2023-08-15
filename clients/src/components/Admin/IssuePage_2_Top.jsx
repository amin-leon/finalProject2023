import React from 'react'
import { AiOutlineFolderOpen , AiOutlineCheckCircle} from "react-icons/ai";
import { TbProgressDown } from "react-icons/tb";

function IssuePageTwoTop() {
  return (
    <div>
        
<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2 cursor-pointer flex items-center">
            <AiOutlineFolderOpen className='text-xl'/>
            <p class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Open</p>
        </li>
        <li class="mr-2 cursor-pointer flex items-center">
            <TbProgressDown className='text-xl text-blue-600'/>
            <p  class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Progress</p>
        </li>
        <li class="mr-2 cursor-pointer flex items-center">
            <AiOutlineCheckCircle className='text-xl'/>
            <p class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Solved</p>
        </li>
        
    </ul>
</div>

    </div>
  )
}

export default IssuePageTwoTop