import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10'>
<div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm'>
    {/* --left --- */}
    <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full text-gray-600 leading-6'>MediBooker is an intuitive platform designed for seamless appointment scheduling in the healthcare industry. MediBooker has been the trusted solution for managing doctor appointments ever since its launch, when it revolutionized the way patients and healthcare providers connect for medical consultations.</p>
    
    </div>
    {/* --center --- */}
    <div>
            <p className='text-xl mb-5 font-medium'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600  '>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Privacy policy</li>
            </ul>
    </div>
    {/* --rigt --- */}

    <div>
        <p className='text-xl mb-5 font-medium' >Get In Touch</p>
        <ul className='flex flex-col gap-2 text-gray-600 '>
            <li>+918597722752</li>
            <li>sarkarsubhodeep417@gmail.com</li>
        </ul>
    </div>
</div>
{/* ----copyright text */}
<hr />
<p className='py-5 text-sm '>Copyright © 2024 SubhodeepSarkar - All Right Reserved.</p>

    </div>
  )
}

export default Footer