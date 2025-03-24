import React, { useEffect } from 'react';
import client1 from "../../../Gallery/client1.jpeg"
import client2 from "../../../Gallery/client2.webp"
import "./Testimonial.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonial() {

  useEffect(() => {
    AOS.init({
        duration: 1500, // Animation duration
        easing: 'ease-out', // Animation easing
        once: true, // Ensure animation runs only once
        delay: 100, // Delay before animation starts
    });
    AOS.refresh(); // Refresh AOS to detect new elements
}, []);

  return (
    <div id='/Testimonial' className="py-28 bg px-5 text-slate-800 relative">
     <div data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl font-bold text-slate-100">Our <span className='text-teal-300'>Testimonials</span></p>
        <h2 className="mt-4 text-lg lg:text-xl my-10 font-medium text-slate-100">What Our Clients Say</h2>
      </div>
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <div className="bg-slate-50 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">Amazing Support</h3>
          <p className="mt-2">
            "I had an incredible experience! The team was professional, and the results exceeded my expectations."
          </p>
          <div className="flex items-center mt-4">
            <img src={client1} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Sophia Carter</p>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-6 shadow-lg rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold">Highly Recommend</h3>
          <p className="mt-2">
            "Fantastic service! The quality of work and attention to detail truly set them apart.results exceeded."
          </p>
          <div className="flex items-center mt-4">
            <img src={client2} alt="User" className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="font-semibold">Liam Johnson</p>
              <p className="text-sm">UI/UX Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
