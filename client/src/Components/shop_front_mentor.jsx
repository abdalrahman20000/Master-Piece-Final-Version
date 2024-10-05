import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { User, Book, Menu, X, Coffee, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../images/logo.png";
import ChatSidebar from './sidebarChat';

const CoffeeShopLayoutMentor = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const userMenuRef = useRef(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const leftNavLinks = [
        { to: "/m", text: "Home" },
    ];

    const rightNavLinks = [
        { to: "/contact-m", text: "Contact" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#E9EFEC] text-[#16423C] relative">
            {/* Frame */}
            <div className="fixed inset-y-0 left-0 w-0 sm:w-1 md:w-8 bg-[#16423C] z-50"></div>
            <div className="fixed inset-y-0 right-0 w-0 sm:w-1 md:w-8 bg-[#16423C] z-50"></div>

            {/* Header (Trade Sign) */}
            <header className="bg-[#16423C] text-[#E9EFEC] p-4 sm:p-6 px-4 sm:px-10 shadow-md relative z-20">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Navigation (hidden on small screens) */}
                    <nav className="hidden md:flex space-x-6 flex-1 justify-end">
                        {leftNavLinks.map((link) => (
                            <Link key={link.to} to={link.to} className="hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">
                                {link.text}
                            </Link>
                        ))}
                    </nav>

                    {/* Center Logo */}
                    <Link to="/m" className="flex items-center justify-center mx-auto md:mx-8 transform hover:scale-110 transition-transform duration-300">
                        <Coffee size={32} className="text-[#E9EFEC] mr-2" />
                        <span className="text-2xl md:text-3xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-[#E9EFEC] to-[#6A9C89]">ACafe</span>
                    </Link>

                    {/* Right Navigation */}
                    <div className="flex justify-between max-sm:justify-end items-center space-x-4 flex-1">
                        <nav className="hidden md:flex space-x-6">
                            {rightNavLinks.map((link) => (
                                <Link key={link.to} to={link.to} className="hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">
                                    {link.text}
                                </Link>
                            ))}
                        </nav>
                        <div className="relative hidden md:flex" ref={userMenuRef}>
                            <button onClick={toggleUserMenu} className="flex items-center mx-1 hover:text-[#6A9C89] transition duration-300 transform hover:scale-105">
                                <User className="w-6 h-6" />
                            </button>
                            {isUserMenuOpen && (
                                <div className="absolute right-0 top-5 mt-2 w-48 bg-[#16423C] rounded-md shadow-lg py-1 z-30 animate-fadeIn">
                                    <Link to="/settings-m" className="block px-4 py-2 text-sm hover:bg-[#6A9C89] hover:text-[#E9EFEC]">Settings</Link>
                                    <Link to="/" className="block px-4 py-2 text-sm hover:bg-[#6A9C89] hover:text-[#E9EFEC]">Log out</Link>
                                </div>
                            )}
                        </div>
                        <button onClick={toggleMobileMenu} className="md:hidden transform hover:scale-110 transition-transform duration-300">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-x-0 top-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
                <div className="bg-[#16423C] h-full flex flex-col p-4">
                    <div className="flex justify-end">
                        <button onClick={toggleMobileMenu} className="transform hover:scale-110 transition-transform duration-300">
                            <X className="w-6 h-6 text-[#E9EFEC]" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-4 mt-8">
                        {[...leftNavLinks, ...rightNavLinks].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                {link.text}
                            </Link>
                        ))}
                        <Link to="/library" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>
                            <Book className="inline-block mr-2" size={20} />
                            Library
                        </Link>
                        <Link to="/settings" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>
                            <User className="inline-block mr-2" size={20} />
                            Profile
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 sm:px-8 py-4 sm:py-8 relative z-10">
                {children}

                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="fixed bottom-6 right-12 bg-[#E9EFEC] text-[#16423C] p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-40"
                >
                    <MessageCircle size={24} />
                </motion.button>

                <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

            </main>

            {/* Footer (Store Front) */}
            <footer className="bg-[#16423C] text-[#E9EFEC] py-4 sm:py-6 px-4 sm:px-14 relative z-10">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0 flex items-center transform hover:scale-105 transition-transform duration-300">
                        <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E9EFEC] p-1 rounded-full mr-3" />
                        <div className="hidden sm:block">
                            <h3 className="text-xl font-bold italic">ACafe</h3>
                            <p className="text-xs">Brewing knowledge since 2010</p>
                        </div>
                    </div>
                    <div className="text-center mb-4 sm:mb-0 hidden sm:block">
                        <p className="text-sm italic mb-2">"Brewing knowledge, one session at a time."</p>
                        <p className="text-xs">© 2024 ACafe | All rights reserved</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-end">
                        <div className="flex space-x-4 mb-2">
                            <a href="#" className="hover:text-[#6A9C89] transition duration-300 transform hover:scale-110">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-[#6A9C89] transition duration-300 transform hover:scale-110">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-[#6A9C89] transition duration-300 transform hover:scale-110">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <p className="text-xs sm:hidden">© 2024 ACafe | All rights reserved</p>
                        <p className="text-xs hidden sm:block">Contact: info@acafe.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CoffeeShopLayoutMentor;