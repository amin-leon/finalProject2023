// import React, { useState } from 'react';
// import { BiNotification } from 'react-icons/bi';

// function POCComponent() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [notificationOpen, setNotificationOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     return (
//         <div>
//             <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            
//             <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>

//             </div>

//             <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
//                 <div className="flex items-center">
//                     <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
//                         {/* Sidebar toggle icon */}
//                         <p>=</p>
//                         <p>=</p>
//                     </button>

//                     <div className="relative mx-4 lg:mx-0">
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                             {/* Search icon */}
//                         </span>

//                         <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search" />
//                     </div>
//                 </div>

//                 <div className="flex items-center">
//                     <div className="relative">
//                         <button onClick={() => setNotificationOpen(!notificationOpen)} className="flex mx-4 text-gray-600 focus:outline-none">
//                             <BiNotification />
//                         </button>

//                         {notificationOpen && (
//                             <div onClick={() => setNotificationOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
//                         )}

//                         {notificationOpen && (
//                             <div className="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80">
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                             </div>
//                         )}
//                     </div>

//                     <div className="relative">
//                         <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
//                             <img src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=' alt='' />
//                         </button>

//                         {dropdownOpen && (
//                             <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
//                         )}

//                         {dropdownOpen && (
//                             <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                                 <li>Logout</li>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </header>

//             <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//                 <div className="container px-6 py-8 mx-auto">
//                     {/* Main content */}
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default POCComponent;

import React, { useState } from 'react';
import { BiNotification } from 'react-icons/bi';


function POCComponent() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div>
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                        {/* Sidebar toggle icon */}
                        <p>=</p>
                        <p>=</p>
                    </button>

                    <div className="relative mx-4 lg:mx-0">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* Search icon */}
                        </span>

                        <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="relative">
                        <button onClick={() => setNotificationOpen(!notificationOpen)} className="flex mx-4 text-gray-600 focus:outline-none">
                            <BiNotification />
                        </button>

                        {notificationOpen && (
                            <div onClick={() => setNotificationOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
                        )}

                        {notificationOpen && (
                            <div className="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80">
                                <li>Logout</li>
                                <li>Logout</li>
                                <li>Logout</li>
                                <li>Logout</li>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                            <img src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=' alt='' />
                        </button>

                        {dropdownOpen && (
                            <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 z-10 w-full h-full"></div>
                        )}

                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                                <li>Logout</li>
                                <li>Logout</li>
                                <li>Logout</li>
                                <li>Logout</li>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container px-6 py-8 mx-auto">
                    herrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                </div>
            </main>

            <div className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            
            <div className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
                <div className="p-8">
                    <p className="text-white">Sidebar Content</p>
                    <p className="text-white">Sidebar Content</p>
                    <p className="text-white">Sidebar Content</p>
                    <p className="text-white">Sidebar Content</p>
                </div>
            </div>
        </div>
    );
}

export default POCComponent;
