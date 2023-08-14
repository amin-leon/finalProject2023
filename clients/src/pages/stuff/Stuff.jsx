import React ,{useState}from 'react'
import StuffCard from './stuffCard'
import StuffCardDetails from './StuffCardDetails'
import UserData from '../../components/Admin/Dummy_Data'



export default function Stuff() {

  const [selectedUser, setSelectedUser] = useState(null);

  const handleCardClick = (Users) => {
    setSelectedUser(Users);
  };

  return (
    <div className='wrapper'>
        <div className='container grid grid-cols-3 '>
            <div className=' p-5 left-part h-screen shadow-lg shadow-gray-500/50'>
            {
           UserData.map((Users)=>(
            <StuffCard key={Users._id} Users={ Users } onClick={ handleCardClick } />
           ))
          }
            </div>
            <div className='grid col-span-2 '>
                <div className='container p-5'>
                <StuffCardDetails Users={selectedUser}  /> 
                </div>
            </div>
        </div>
    </div>
  )
}
