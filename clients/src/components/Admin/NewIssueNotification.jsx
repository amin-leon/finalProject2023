import React from 'react';
import { FaBell } from 'react-icons/fa';

export function NewIssueNotifications() {
  return (
     <div className='pr-3'>
          <div className="relative cursor-pointer">
          <FaBell className="w-7 h-7 text-blue-500" />
          {5 > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
              10
            </span>
          )}
        </div>
     </div>

  );
}