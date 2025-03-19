import React, { useEffect } from 'react';
import fb from "../../../Gallery/fb.png"
import linkdin from "../../../Gallery/linkedin.png"
import twitter from "../../../Gallery/twitter.png"
import instagram from "../../../Gallery/instagram.png"
import phone from "../../../Gallery/mobile.png"
import gmail from "../../../Gallery/gmail.png"
import "./Contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

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
    <div id='/Contact' className="h-full py-24 px-10 bg-slate-100">
      <div data-aos="zoom-out" className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            Get in Touch With Us
          </h2>
          <p className="mt-4 text-lg lg:text-xl my-10 font-medium">
            We are here to help with any questions or concerns you may have. Reach out to us, and we’ll respond promptly.
          </p>
        </div>

        <div className="text-center mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-indigo-600 text-3xl">
              </div>
              <img src={gmail} className='w-14' />
              <p className="text-slate-800 font-medium text-lg lg:text-xl">contact@yourdomain.com</p>
            </div>

            <div className="flex flex-col items-center space-y-4 my-5 lg:my-0">
              <div className="text-indigo-600 text-3xl">
                <i className="fab fa-twitter"></i>
              </div>
              <h4 className="text-lg lg:text-xl font-medium text-slate-800">Social Media</h4>
              <div className="space-x-4 flex justify-center items-center">
                <a href="" className="">
                  <img src={fb} className='w-10' />
                </a>
                <a href="" className="">
                  <img src={linkdin} className='w-10' />
                </a>
                <a href="" className="">
                  <img src={instagram} className='w-10' />
                </a>
                <a href="" className="">
                  <img src={twitter} className='w-10' />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="text-indigo-600 text-3xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <img src={phone} className='w-14' />
              <p className="text-slate-800 font-medium text-lg lg:text-xl">+1 234 567 890</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 text-gray-900 shadow-xl rounded-lg p-12 mx-auto max-w-4xl">
          <form action="#" method="POST" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  required
                  className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  required
                  className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="mt-2 block w-full px-6 py-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-900"
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 px-6 bg text-white font-semibold text-lg rounded-md shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
