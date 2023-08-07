import { FaCrosshairs } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineStar , AiOutlineHeart} from "react-icons/ai";

function Header() {
  return (
    <div  className="container  text-black  flex flex-row h-screen w-[100%]">
        {/* side bar naviation */}
        <div className=' h-[100vh] w-[20% border-2 '>
            <div className='container pt-4 ' >
                {/* profile info and profile picture */}
                <div className='flex items-center justify-center space-x-3 pb-10'>
                    <img className='h-[40px] w-[40px] rounded-full' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' alt='profile'/>
                    <p>Moreen Kendra</p>
                </div>
                {/* Sidebar menu */}
                <div className=' pt-5 px-[70px] '>
                    {/* First menu group */}
                    <div className="pb-7">
                        <p className="pb-3 text-sky-600 font-bold">DISCOVER</p>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><AiOutlineStar /></span>
                            <span>Featured</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1 hover:text-sky-600 cursor-pointer'>
                            <span><AiOutlineHeart /></span>
                            <span>Most popular</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Categories</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Shuffle</span>
                        </div>
                    </div>
                    {/* Second group */}
                    <div className="pb-7">
                        <p className="pb-3 text-sky-600 font-bold">TOOLS</p>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Featured</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Most popular</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Categories</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Shuffle</span>
                        </div>
                    </div>
                    {/* Third part */}
                    <div className="pb-7 " >
                        <p className="pb-3 text-sky-600 font-bold">SETTINGS</p>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center cursor-pointer pt-1'>
                            <span className="cursor-pointer"><FaCrosshairs /></span>
                            <span className="cursor-pointer">Featured</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Most popular</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Categories</span>
                        </div>
                        <div className='px-3 flex flex-row justify-start gap-4 items-center pt-1'>
                            <span><FaCrosshairs /></span>
                            <span>Shuffle</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" w-[80%]">
            <div className="w-full p-9  flex flex-row border-2 space-x-2 justify-between items-center">
            <span className="basis-[5%] text-2xl"><CiSearch /></span>
                <div className="basis-[85%]">
                    <input type="text" className="w-[100%] outline-none h-10 rounded-md hover:border-b-4"/>
                </div>
                {/* Right Icons */}
                <div className="basis-[10%] flex flex-row space-x-3 justify-end h-10 items-center">
                    <span className="text-2xl space-x-4"> <IoNotificationsOutline /></span>
                    <span className="text-2xl pr-5"><IoMdPower/></span>
                </div>
            </div>
            <div>Body Div</div>
        </div>
    </div>
  )
}

export default Header