import React, { useEffect, useContext, useState } from 'react'; // Import useContext
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Import AppContext

const Doctors = () => {
  const { speciality } = useParams();

  // Access doctors from AppContext using useContext, not useEffect
  const { doctors } = useContext(AppContext);
   const [filterDoc,setFilterDoc]=useState([])

    const navigate=useNavigate()
  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
 useEffect(() => {
applyFilter()

  }, [doctors,speciality]);




  // // If you need to perform a side effect when speciality changes, use useEffect
  // Run this effect when 'speciality' changes

  return (
    <div>
      <p className='text-gray-600 '>Browse Through the doctors speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className=' flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality ==='General physician'? navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all pr-16   cursor-pointer   ${speciality==="General physician"?"bg-indigo-200 text-black": ""}  `}>General physician</p>
          <p onClick={()=> speciality ==='Gynecologist'? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-16    ${speciality==="Gynecologist"? "bg-indigo-200 text-black": ""}`}>Gynecologist</p>
          <p onClick={()=> speciality ==='Dermatologist'? navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-16   ${speciality==="Dermatologist"? "bg-indigo-200 text-black": ""}  `}>Dermatologist</p>
          <p onClick={()=> speciality ==='Pediatricians'? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-16   ${speciality==="Pediatricians"? "bg-indigo-200 text-black": ""}  `}>Pediatricians</p>
          <p onClick={()=> speciality ==='Neurologist'? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-1.5 py-3 border border-gray-300 rounded transition-all cursor-pointer  pr-16  ${speciality==="Neurologist"? "bg-indigo-200 text-black": ""} `}>Neurologist</p>
          <p onClick={()=> speciality ==='Gastroenterologist'? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all  pr-16   cursor-pointer   ${speciality==="Gastroenterologist"? "bg-indigo-200 text-black": ""} `}>Gastroenterologist</p>
        </div>
      
      <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
      {
filterDoc.map((item,index)=>(
  <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-12px]  transition-all duration-500' key={index}>
      <img className='bg-blue-50 ' src={item.image} alt="" />
      <div className='p-4 '>
          <div className='flex items-center gap-2 text-center text-green-500 '>
              <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
          </div>
          <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
          <p className='text-gray-600 text:sm '>{item.speciality}</p>
      </div>
  </div>
))
      }
      </div>
      </div>
    </div>
  );
};

export default Doctors;
