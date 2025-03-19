import React, { useEffect } from 'react';
import Image from "../../../Gallery/Trust6.png";
import icon from "../../../Gallery/icon.png";
import icon1 from "../../../Gallery/icon1.png";
import "./HowItWorks.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in minutes.",
    icon: Image,
  },
  {
    title: "Upload & Host",
    description: "Store files or host your website.",
    icon: icon,
  },
  {
    title: "Manage & Scale",
    description: "Access your data anytime, anywhere.",
    icon: icon1,
  },
];

export default function HowItWorks() {

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
    <section id='/HowItWorks' className="bg-slate-100 py-24 px-10 text-center text-slate-800">
   <div data-aos="zoom-out">
    <h2 className="text-3xl lg:text-4xl font-bold mb-10">Get Started in 3 Easy Steps</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="bg-slate-50 border p-6 rounded-lg shadow-lg w-60 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-2xl">
            <div className="mb-4">
              {/* Render the image dynamically */}
              <img src={step.icon} alt={step.title} className="w-16 h-16 object-contain mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
            <p className="text-base text-slate-900 font-medium leading-snug">{step.description}</p>
          </div>
        ))}
      </div>
      </div> 
    </section>
  );
}
