import React, { useEffect } from "react";
import lock from "../../../Gallery/lock.png";
import backup from "../../../Gallery/backup.png";
import key from "../../../Gallery/key.png";
import "./Security.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Security() {

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
    <section id="/security" className="bg text-slate-100 py-24 px-10">
   <div data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Your Data, <span className="text-teal-300">Our Priority</span> </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10">
          Secure, reliable, and protected. We ensure your data stays safe with
          industry-leading security measures.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="rounded-lg text-center shadow-lg hover:scale-105 transition-transform bg-teal-100/10 backdrop-blur-3xl p-6">
          <div className="flex justify-center items-center mb-4"><img src={lock} className="w-10" /></div>
          <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
          <p className="text-gray-400 mt-2">Your data is encrypted from sender to receiver, ensuring privacy.</p>
        </div>
        
        <div className="rounded-lg text-center shadow-lg hover:scale-105 transition-transform bg-teal-100/10 backdrop-blur-3xl p-6">
        <div className="flex justify-center items-center mb-4"><img src={backup} className="w-10" /></div>
        <h3 className="text-xl font-semibold">Regular Backups</h3>
          <p className="text-gray-400 mt-2">Frequent backups to prevent data loss and ensure reliability.</p>
        </div>
        
        <div className="rounded-lg text-center shadow-lg hover:scale-105 transition-transform bg-teal-100/10 backdrop-blur-3xl p-6">
        <div className="flex justify-center items-center mb-4"><img src={key} className="w-10" /></div>
        <h3 className="text-xl font-semibold">Two-Factor Authentication</h3>
          <p className="text-gray-400 mt-2">Extra layer of security to protect your account.</p>
        </div>
      </div>
      </div>
    </section>
  );
}