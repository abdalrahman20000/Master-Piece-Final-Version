import React from 'react';
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from 'lucide-react';

import logo from "../images/logo.png"

const Footer = () => {

  return (
    <footer className="flex justify-around items-center max-sm:flex-col bg-dark-blue text-white p-4">
      <div className="flex  items-center w-[25%] mb-4 md:mb-0 max-sm:justify-center   rounded-full ">
        <Link to="/m"> <img src={logo} alt="Logo" className="w-10 h-10 bg-white p-[2px] rounded-full" /></Link>
      </div>
      <div className="w-full mx-2 flex flex-col justify-center items-center md:flex-row">

        <nav className="flex-col justify-center items-center space-x-4 mb-4 md:mb-0">
          <div className="flex justify-center items-center max-sm:flex-col">
            <Link to="/m" className="hover:text-dark-yellow-hover transition m-2">Home</Link>
            <Link to="/mentor-subscrption" className="hover:text-dark-yellow-hover transition m-2">subscription</Link>
            <Link to="/contact" className="hover:text-dark-yellow-hover transition m-2">contact</Link>
          </div>
          <div className="text-center mt-4 text-sm text-dark-yellow-hover max-sm:hidden">
            © 2024 | All rights reserved
          </div>
        </nav>
      </div>
      <div className="flex justify-end items-center max-sm:justify-center  w-[25%] pr-4">
        <a href="#" className="hover:text-white m-2 transition"><Facebook size={20} /></a>
        <a href="#" className="hover:text-white m-2 transition"><Twitter size={20} /></a>
        <a href="#" className="hover:text-white m-2 transition"><Instagram size={20} /></a>
      </div>
      <div className="hidden text-center mt-4 text-sm text-dark-yellow-hover max-sm:block">
            © 2024 | All rights reserved
          </div>

    </footer>
  );
};

export default Footer;