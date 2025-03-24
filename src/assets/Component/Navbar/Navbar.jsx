import React, { useState } from "react";
import kal from "../../../Gallery/logo.png"
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      <div className="flex justify items-center">
        <div className="md:hidden  sm:block text-sm p-2" onClick={toggleButton}>
          <div className="cursor-pointer">
            <div>
              <div className="w-8 h-1  bg-teal-500"></div>
              <div className="w-8 h-1 mt-1 bg-teal-500"></div>
              <div className="w-8 h-1 mt-1 bg-teal-500"></div>
            </div>
          </div>

        </div>
      </div>


      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-teal-300">
          <div className="flex items-center justify-center"><img src={kal} className="w-10" />
          <h1 className="font-bold text-teal-300 text-3xl text-center p-4">Hosting</h1></div>
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/HowItWorks" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            How It Works
          </Link>
          <Link to="/Pricing" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Pricing
          </Link>
          <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Testimonials
          </Link>
          <Link to="/security" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Security
          </Link>
          <Link to="/Faq" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            FAQ
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Contact
          </Link>
        </div>
      </div>


      <div className="flex justify-between items-center bg">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <img src={kal} className="w-14" />
              <h1 className="font-bold text-teal-300 text-3xl">Hosting</h1>
            </div>
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              <Link to="/" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Home
              </Link>
              <Link to="/HowItWorks" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                How It Works
              </Link>
              <Link to="/Pricing" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Pricing
              </Link>
              <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Testimonials
              </Link>
              <Link to="/security" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Security
              </Link>
              <Link to="/Faq" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                FAQ
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl hover:text-teal-200 hover:underline">
                Contact
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-lg text-slate-700 font-bold rounded py-2 px-4 bg-teal-300">Buy Now</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}