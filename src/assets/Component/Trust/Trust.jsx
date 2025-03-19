import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Trust() {

  useEffect(() => {
    AOS.init({
        duration: 1500, 
        easing: 'ease-out', 
        once: true, 
        delay: 100, 
    });
    AOS.refresh(); 
}, []);

  return (
    <div data-aos="zoom-out" className='py-24 px-10 text-center bg-gray-100 text-slate-950'>
    <div data-aos="zoom-out">
      <div>
        <h1 className='text-3xl lg:text-4xl font-bold'>Trusted by Over 10,000 Clients Globally</h1>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-10'>
         <h1 className='font-semibold'>SwiftHost Networks</h1>
         <h1 className='font-semibold'>InnoTech Labs</h1>
         <h1 className='font-semibold'>TechNova Solutions</h1>
         <h1 className='font-semibold'>GlobalWeb Services</h1>
         <h1 className='font-semibold'>PrimeSoft Systems</h1>
         <h1 className='font-semibold'>PrimeSoft Systems</h1>
        </div>
      </div>
      </div>

    </div>
  )
}
