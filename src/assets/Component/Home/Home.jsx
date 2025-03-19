import React, { useEffect } from 'react'
import HeroImage from "../../../Gallery/copy2.png";
import HeroImage2 from "../../../Gallery/CloudhostingHero2.png";
import './Home.css';
import Trust from '../Trust/Trust';
import Choose from '../Choose/Choose';
import VPS from '../VPS/VPS';
import Security from '../Security/Security';
import Pricing from '../Pricing/Pricing';
import FAQ from '../FAQ/FAQ';
import Testimonial from '../Testimonial/Testimonial';
import HowItWorks from '../HowItWorks/HowItWorks';
import Contact from '../Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

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
    <div className=''>
      <div id='/' className='bg h-full text-slate-100 py-14 px-16 md:pt-24'>
        <div data-aos="zoom-out"
          className='flex justify-center items-center  '>
          <div className='lg:flex justify-center items-center text-center lg:text-left'>
            <div className='max-w-md:w-2/3'>
              <h1 className='text-3xl max-w-md:text-5xl lg:text-5xl font-bold text-teal-300'>Secure Cloud Storage & Hosting Made Simple</h1>
              <p className='py-8 text-xl lg:text-2xl'>SStore, manage, and host with 99.9% uptime and top-tier security.</p>
              <div >
                <button className='px-3.5 py-2.5 md:text-xl border font-bold rounded text-center shadow-lg hover:scale-105 transition-transform'>Free Trial Now</button>
              </div>
            </div>
            <div className='flex justify-center items-center mt-10 lg:mt-0'>
              <img src={HeroImage} className='hidden lg:block' />
              <img src={HeroImage2} className='block lg:hidden' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Trust></Trust>
        <Choose></Choose>
        <VPS></VPS>
        <Security></Security>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
        <Contact></Contact>

      </div>
    </div>
  )
}













