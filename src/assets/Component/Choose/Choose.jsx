import React, { useEffect } from 'react'
import "./Choose.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Choose() {

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
        <div>
            <div className="text-center text-slate-100 bg py-24 px-10">
            <div data-aos="zoom-out">
                <h2 className="text-3xl lg:text-4xl font-bold">Create beautiful art with <span className='text-teal-300'>Artificial Intelligence</span> </h2>
                <p className="mt-4 text-lg lg:text-xl my-10">Discover the best AI-powered tools to enhance your creative ideas.</p>
                <div className="flex justify-center">
                    <input type="text" placeholder="Find your dream domain ..." className="p-3.5 lg:w-96 rounded-l-full text-blue-950" />
                    <button className="bg-teal-300 text-blue-950 font-bold px-6 rounded-r-full">Generate</button>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='lg:flex justify-center items-center gap-10'>
                        <div className='border border-slate-100 mb-5 lg:mb-0 px-3.5 py-2.5 rounded-md'><h1 className='text-lg'>.com - $10/year</h1></div>
                        <div className='border border-slate-100 mb-5 lg:mb-0 px-3.5 py-2.5 rounded-md'><h1 className='text-lg'>.id - $5/year</h1></div>
                        <div className='border border-slate-100 mb-5 lg:mb-0 px-3.5 py-2.5 rounded-md'><h1 className='text-lg'>.cloud - $15/year</h1></div>
                        <div className='border border-slate-100 mb-5 lg:mb-0 px-3.5 py-2.5 rounded-md'><h1 className='text-lg'>.online - $8/year</h1></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
