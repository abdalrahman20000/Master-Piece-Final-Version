import logo from "../images/logo.png"
import uicoon from "../images/uicoon.png"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

// const Header_v = () => (
//     <header className="bg-dark-blue p-4 flex justify-between items-center">
//         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//             <div className="flex items-center space-x-2  rounded-full ">
//                 <Link to="/"><img src={logo} alt="Logo" className="w-10 h-10 bg-white p-[2px] rounded-full" /></Link>
//             </div>
//         </div>
//         <div>
//             <Link to="s-register"><button className="bg-dark-yellow-hover text-dark-blue px-4 py-2 rounded mr-2 hover:bg-opacity-90">Sign In</button></Link>
//             <Link to="s-register"><button className="bg-white text-dark-blue px-4 py-2 rounded hover:bg-opacity-90">Sign Up</button></Link>
//         </div>
//     </header>
// );

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#034c52] bg-opacity-80 p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2 rounded-full">
                    <Link to="/"><img src={logo} alt="Logo" className="w-10 h-10 bg-[#ECDFCC] p-[2px] rounded-full" /></Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#subscriptions" className="text-[#ECDFCC] hover:text-white transition duration-300">Subscriptions</a>
                    <a href="#features" className="text-[#ECDFCC] hover:text-white transition duration-300">Features</a>
                    <a href="#testimonials" className="text-[#ECDFCC] hover:text-white transition duration-300">Testimonials</a>
                </nav>
                <div className="hidden md:block">
                    <Link to="s-register"><button className="bg-[#ECDFCC] text-[#034c52] px-4 py-2 rounded mr-2 hover:bg-opacity-90 transition duration-300">Sign In</button></Link>
                    <Link to="s-register"><button className="bg-white text-[#034c52] px-4 py-2 rounded hover:bg-opacity-90 transition duration-300">Sign Up</button></Link>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#ECDFCC]">
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#034c52] mt-2 p-4">
                    <nav className="flex flex-col space-y-2">
                        <a href="#subscriptions" className="text-[#ECDFCC] hover:text-white transition duration-300">Subscriptions</a>
                        <a href="#features" className="text-[#ECDFCC] hover:text-white transition duration-300">Features</a>
                        <a href="#testimonials" className="text-[#ECDFCC] hover:text-white transition duration-300">Testimonials</a>
                    </nav>
                    <div className="mt-4">
                        <Link to="s-register"><button className="bg-[#ECDFCC] text-[#034c52] px-4 py-2 rounded mr-2 hover:bg-opacity-90 transition duration-300">Sign In</button></Link>
                        <Link to="s-register"><button className="bg-white text-[#034c52] px-4 py-2 rounded hover:bg-opacity-90 transition duration-300">Sign Up</button></Link>
                    </div>
                </div>
            )}
        </header>
    );
};


export default Header;