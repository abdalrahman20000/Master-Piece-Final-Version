import React from 'react';
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from 'lucide-react';

import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className="flex justify-around items-center max-sm:flex-col bg-[#034c52] text-[#ECDFCC] p-4">
      <div className="flex items-center w-[25%] mb-4 md:mb-0 max-sm:justify-center rounded-full">
        <Link to="/l">
          <img src={logo} alt="Logo" className="w-10 h-10 bg-[#ECDFCC] p-[2px] rounded-full transition-transform duration-300 hover:scale-110" />
        </Link>
      </div>
      <div className="w-full mx-2 flex flex-col justify-center items-center md:flex-row">
        <nav className="flex-col justify-center items-center space-x-4 mb-4 md:mb-0">
          <div className="flex justify-center items-center max-sm:flex-col">
            <Link to="/l" className="hover:text-white transition m-2 border-b-2 border-transparent hover:border-[#ECDFCC]">Home</Link>
            <Link to="/sessions" className="hover:text-white transition m-2 border-b-2 border-transparent hover:border-[#ECDFCC]">Sessions</Link>
            <Link to="/subscription" className="hover:text-white transition m-2 border-b-2 border-transparent hover:border-[#ECDFCC]">Subscription</Link>
            <Link to="/contact" className="hover:text-white transition m-2 border-b-2 border-transparent hover:border-[#ECDFCC]">Contact</Link>
          </div>
          <div className="text-center mt-4 text-sm text-[#ECDFCC] max-sm:hidden">
            © 2024 | All rights reserved
          </div>
        </nav>
      </div>
      <div className="flex justify-end items-center max-sm:justify-center w-[25%] pr-4">
        <a href="#" className="text-[#ECDFCC] hover:text-white m-2 transition-transform duration-300 hover:scale-110">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-[#ECDFCC] hover:text-white m-2 transition-transform duration-300 hover:scale-110">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-[#ECDFCC] hover:text-white m-2 transition-transform duration-300 hover:scale-110">
          <Instagram size={20} />
        </a>
      </div>
      <div className="hidden text-center mt-4 text-sm text-[#ECDFCC] max-sm:block">
        © 2024 | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;