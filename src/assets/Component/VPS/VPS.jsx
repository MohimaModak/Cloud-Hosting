import React, { useEffect } from 'react';
import './VPS.css'; 
import trust from "../../../Gallery/Trust7.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VPS = () => {

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
    <div  className="py-24 px-10 text-center bg-gray-100 text-slate-950">
     <div data-aos="zoom-out">
      <div className="">
        <h1 className='text-3xl lg:text-4xl font-bold'>Managed VPS Hosting Plans</h1>
        <p className="mt-4 text-lg lg:text-xl my-10 font-bold">Take your online presence to the next level with <br /> VPS hosting plans, crafted for faster page load times!</p>
      </div>

      <div className='flex justify-center items-center'>
      <div className='lg:flex justify-center items-center'>
        <div>
          <div className='flex justify-center items-center hidden lg:block'>
            <img src={trust} alt="" srcset="" />
          </div>
        </div>

        <div>

          <div className="flex justify-center  items-center ">
            <div>
              <h2 className='font-bold text-2xl'>Build Your Own Cloud–Managed VPS</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                <div className="px-3.5 py-2.5 bg-blue-950 text-white text-lg border-2 border-blue-950">Build–01</div>
                <div className="px-3.5 py-2.5 border-2 font-semibold border-blue-950 cursor-pointer hover:bg-blue-950 hover:text-white text-lg">Build–02</div>
                <div className="px-3.5 py-2.5 border-2 font-semibold border-blue-950 cursor-pointer hover:bg-blue-950 hover:text-white text-lg">Build–03</div>
                <div className="px-3.5 py-2.5 border-2 font-semibold border-blue-950 cursor-pointer hover:bg-blue-950 hover:text-white text-lg">Build–04</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-2 md:grid-cols-3 gap-5 text-center">
              <div className="flex justify-center items-center">
                <div className="w-max">
                  <h3 className='text-slate-950 font-bold p-2.5 text-xl'>CPU CORES</h3>
                  <ul>
                    <li className=' font-medium text-center lg:text-left'>1 Core</li>
                    <li className=' font-medium text-center lg:text-left'>4 Cores</li>
                    <li className=' font-medium text-center lg:text-left'>8 Cores</li>
                    <li className=' font-medium text-center lg:text-left'>10 Cores</li>

                  </ul>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-max">
                  <h3 className='text-slate-950 font-bold p-2.5 text-xl'>RAM</h3>
                  <ul>
                    <li className=' font-medium text-center lg:text-left'>0.5 GB</li>
                    <li className=' font-medium text-center lg:text-left'>4 GB</li>
                    <li className=' font-medium text-center lg:text-left'>8 GB</li>
                    <li className=' font-medium text-center lg:text-left'>16 GB</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-max ">
                  <h3 className='text-slate-950 font-bold p-2.5 text-xl'>SSD Space</h3>
                  <ul>
                    <li className=' font-medium text-center lg:text-left'>80 GB</li>
                    <li className=' font-medium text-center lg:text-left'>160 GB</li>
                    <li className=' font-medium text-center lg:text-left'>320 GB</li>
                    <li className=' font-medium text-center lg:text-left'>640 GB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
    </div>

    </div>
  );
};

export default VPS;