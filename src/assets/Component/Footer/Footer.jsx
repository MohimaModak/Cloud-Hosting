import React from "react";
import { Link } from "react-scroll";
import fb from "../../../Gallery/fb.png";
import linkedin from "../../../Gallery/linkedin.png";
import twitter from "../../../Gallery/twitter.png";
import instagram from "../../../Gallery/instagram.png";
import phone from "../../../Gallery/mobile.png";
import gmail from "../../../Gallery/gmail.png";

export default function Footer() {
  return (
    <footer className="bg text-slate-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
         
          <div>
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-slate-100">
              {["Home", "How It Works", "Pricing", "Testimonials", "Security", "FAQ", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.replace(/\s+/g, '')}`}
                  smooth={true}
                  duration={1000}
                  className="text-lg hover:underline transition-all duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {[fb, linkedin, twitter, instagram].map((icon, index) => (
                <a key={index} href="#" className="w-10 h-10">
                  <img
                    src={icon}
                    alt="Social"
                    className="w-full transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img src={phone} alt="Phone" className="w-6" />
                <span className="text-lg">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img src={gmail} alt="Email" className="w-6" />
                <span className="text-lg">info@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <hr className="border-gray-700 mb-4" />
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
