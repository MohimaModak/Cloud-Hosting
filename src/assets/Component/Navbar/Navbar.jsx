import React, { useState } from "react";
import NavbarIcon from "../../../Gallery/NavbarIcon.png"
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      {/* Mobile Navbar */}
      <div className="md:hidden sm:block text-sm ml-3" onClick={toggleButton}>
        <span className="cursor-pointer p-5">
          <div className="w-8 h-1  bg-teal-500"></div>
          <div className="w-8 h-1 mt-1.5 bg-teal-500"></div>
          <div className="w-8 h-1 mt-1.5 bg-teal-500"></div>
        </span>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-teal-300">
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

      {/* <div className="flex justify-center items-center bg">
        <div className="hidden md:block w-max py-4">
          <nav className="navbar flex justify-center items-center">
            <div className="navbar-links lg:flex justify-center items-center">
              <img src={NavbarIcon} className="w-20 mr-44" />
              <Link to="/" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                Home
              </Link>
              <Link to="/HowItWorks" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                How It Works
              </Link>
              <Link to="/Pricing" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                Pricing
              </Link>
              <Link to="/Testimonial" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                Testimonials
              </Link>
              <Link to="/security" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                Security
              </Link>
              <Link to="/Faq" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                FAQ
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl mr-5 hover:text-teal-200">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div> */}


      <div className="flex justify-between items-center bg">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <img src={NavbarIcon} className="w-16" />
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