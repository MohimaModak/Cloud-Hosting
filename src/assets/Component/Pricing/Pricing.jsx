import React, { useEffect } from 'react';
import check from '../../../Gallery/check.png'
import "./Pricing.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {

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
    <section id='/Pricing' className="py-28 bg-slate-100 px-5 text-slate-900">
      <div data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Choose the Perfect Plan for Your Investment Goals
          </h2>
          <p className="mt-4 text-lg lg:text-xl my-10 font-medium">
            Select a plan that aligns with your financial aspirations.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className='flex justify-center items-center'>
          <div data-aos="fade-up" className="bg-slate-50 w-max p-8 rounded shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-blue-950 mb-3.5">Basic Plan</h3>
            <p className="text-slate-700 font-semibold">Unlimited SSD Disk Storage.</p>
            <div className="mt-4 text-3xl font-bold text-blue-950">$29 / month</div>
            <ul className="mt-6 text-left space-y-3 text-slate-700">
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:amber-800 transition">
              Get Started
            </button>
          </div>
          </div>

          <div className='flex justify-center items-center'>
          <div data-aos="fade-up" className="bg w-max p-8 rounded shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center text-white">
            <h3 className="text-3xl text-teal-300 font-semibold mb-3.5">Premium Plan</h3>
            <p className="text-white font-semibold">Unlimited SSD Disk Storage.</p>
            <div className="mt-4 text-3xl font-bold text-teal-300">$99 / month</div>
            <ul className="mt-6 text-left space-y-3">
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-teal-300 font-bold text-blue-950 rounded-lg shadow-2xl hover:amber-800 transition">
              Get Started
            </button>
          </div>
          </div>

          <div className='flex justify-center items-center'>
          <div data-aos="fade-up" className="bg-slate-50 w-max p-8 rounded shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-slate-800 mb-3.5">Elite Plan</h3>
            <p className="text-slate-700 font-semibold">Unlimited SSD Disk Storage.</p>
            <div className="mt-4 text-3xl font-bold text-blue-950">$199 / month</div>
            <ul className="mt-6 text-left space-y-3 text-slate-600">
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Basic Investment Strategies</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>Access to Standard Assets</span></li>
              <li className='flex items-center gap-3 font-medium'><span><img src={check} className='w-5' /></span> <span>24/7 Customer Support</span></li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:amber-800 transition">
              Get Started
            </button>
          </div>
        </div>
        </div>
        <div className="mt-12 text-center">
          <button href="/" className="mt-6 inline-block px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:amber-800 transition rounded">
            Find Your Ideal Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;