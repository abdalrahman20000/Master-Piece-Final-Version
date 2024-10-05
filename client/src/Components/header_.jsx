import React, { useState, useRef, useEffect } from 'react';
import { User, Book, Menu, X, Settings } from 'lucide-react';
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Header_l = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: "/l", text: "Home" },
    { to: "/sessions", text: "Sessions" },
    { to: "/subscription", text: "Subscription" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="bg-[#034c52] text-[#ECDFCC] p-4">
      <div className="w-full mx-2 flex justify-between items-center">
        <div className="flex items-center w-[25%] space-x-2 rounded-full">
          <Link to="/l"><img src={logo} alt="Logo" className="w-10 h-10 bg-[#ECDFCC] p-[2px] rounded-full transition-transform duration-300 hover:scale-110" /></Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="px-3 py-1 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex justify-end items-center w-[25%]">
          <button className="px-3 py-1 mr-3 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300">
            <Link to="/library"><Book className="inline-block" size={16} /></Link>
            <Link to="/library" className="hidden sm:inline ml-1">Library</Link>
          </button>
          <div className="relative" ref={userMenuRef}>
            <button onClick={toggleUserMenu} className="hidden md:block">
              <User className="w-9 h-9 bg-[#ECDFCC] text-[#034c52] hover:bg-opacity-90 rounded-full p-1 mr-4 transition duration-300" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#ECDFCC] rounded-md shadow-lg py-1 z-10">
                <Link to="/settings" className="block px-4 py-2 text-sm text-[#034c52] hover:bg-[#034c52] hover:text-[#ECDFCC]">Profile</Link>
                <Link to="/dcv" className="block px-4 py-2 text-sm text-[#034c52] hover:bg-[#034c52] hover:text-[#ECDFCC]">DCV</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-[#034c52] hover:bg-[#034c52] hover:text-[#ECDFCC]">Settings</Link>
                <Link to="/mp-react/" className="block px-4 py-2 text-sm text-[#034c52] hover:bg-[#034c52] hover:text-[#ECDFCC]">Log out</Link>
              </div>
            )}
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden">
            <Menu className="w-8 h-8 text-[#ECDFCC]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-3/4' : 'h-0'} overflow-hidden`}>
        <div className="bg-[#034c52] h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              <X className="w-8 h-8 text-[#ECDFCC]" />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2 rounded-full">
            <Link to="/"><img src={logo} alt="Logo" className="w-14 h-14 bg-[#ECDFCC] p-[2px] rounded-full" /></Link>
          </div>
          <nav className="flex flex-col items-center space-y-4 mt-8 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300 w-3/4 text-center"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </Link>
            ))}
            <Link to="/library" className="px-3 py-1 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300 w-3/4 text-center" onClick={toggleMobileMenu}>
              <Book className="inline-block mr-1" size={16} />
              Library
            </Link>
            <Link to="/settings" className="px-3 py-1 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300 w-3/4 text-center" onClick={toggleMobileMenu}>
              <User className="inline-block mr-1" size={16} />
              Profile
            </Link>
            <Link to="/settings" className="px-3 py-1 bg-[#ECDFCC] text-[#034c52] rounded-full hover:bg-opacity-90 transition duration-300 w-3/4 text-center" onClick={toggleMobileMenu}>
              <Settings className="inline-block mr-1" size={16} />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header_l;