

const StuffCard = ( {Users, onClick })=> {

  return (
    <div className='bg-gray-50 p-3'>
             <div className=' card flex rounded-xl bg-white mt-4 p-6 mx-auto  shadow-lg shadow-gray-500/50 cursor-pointer' onClick={() => onClick(Users)}>
                    <div className='rounded-full w-[50px] h-[50px]'>
                        <img className=' rounded-full w-[50px] h-[50px]' src={Users.profileImage} alt='avatr' />

                    </div>
                    <div className='flex flex-col gap-1 pr-5 pl-5'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold'>{Users.fullName}</p>
                                <p className='text-xs italic'>{Users.role}</p>
                            </div>
                            <div className='text-sm'>{Users.createdAt}</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm'>{Users.desc}</p>
                            <p className='text-xs text-blue-300 cursor-pointer'>More..</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default StuffCard