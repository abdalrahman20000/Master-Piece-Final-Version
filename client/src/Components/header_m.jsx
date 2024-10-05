import React, { useState, useRef, useEffect } from 'react';
import { User, Book, Menu, X, Settings } from 'lucide-react';
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Header_m = () => {
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
    { to: "/m", text: "Home" },
    { to: "/mentor-subscrption", text: "Subscription" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="bg-dark-blue text-white p-4">
      <div className="w-full mx-2 flex justify-between items-center">
        <div className="flex items-center w-[25%] space-x-2  rounded-full ">
          <Link to="/m"><img src={logo} alt="Logo" className="w-10 h-10 bg-white p-[2px] rounded-full" /></Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="px-3 py-1 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition">
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex justify-end items-center w-[25%] ">
          <button className="px-3 py-1 mr-3 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition">
            <Link to="/library"><Book className="inline-block " size={16} /></Link>
            <Link to="/library" className="hidden sm:inline">Library</Link>
          </button>
          <div className="relative " ref={userMenuRef}>
            <button onClick={toggleUserMenu} className="hidden md:block">
              <User className="w-9 h-9 bg-dark-yellow hover:bg-dark-yellow-hover rounded-full p-1 mr-4" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/settings-m" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link to="/settings-m" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                <Link to="/mp-react/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</Link>
              </div>
            )}
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden">
            <Menu className="w-8 h-8 mr-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-x-0 top-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-3/4' : 'h-0'} overflow-hidden`}>
        <div className="bg-dark-blue h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2  rounded-full ">
            <Link to="/m"><img src={logo} alt="Logo" className="w-14 h-14 bg-white p-[2px] rounded-full" /></Link>
          </div>
          <nav className="flex flex-col items-center space-y-4 mt-8 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition w-3/4 text-center"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </Link>
            ))}
            <Link to="/library" className="px-3 py-1 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition w-3/4 text-center" onClick={toggleMobileMenu}>
              <Book className="inline-block mr-1" size={16} />
              Library
            </Link>
            <Link to="/settings-m" className="px-3 py-1 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition w-3/4 text-center" onClick={toggleMobileMenu}>
              <User className="inline-block mr-1" size={16} />
              Profile
            </Link>
            <Link to="/settings-m" className="px-3 py-1 bg-dark-yellow rounded hover:bg-dark-yellow-hover transition w-3/4 text-center" onClick={toggleMobileMenu}>
              <Settings className="inline-block mr-1" size={16} />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header_m;