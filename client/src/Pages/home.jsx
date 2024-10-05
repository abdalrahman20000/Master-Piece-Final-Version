import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { User, Book, Menu, X, Coffee, PlayCircle, Apple, Phone, Facebook, Twitter, Instagram, ArrowRight, Star } from 'lucide-react';
import logo from "../images/logo.png";
import bg from "../images/background-ppp.mp4"

const Header = ({ toggleMobileMenu }) => (
    <header className="bg-[#16423C] text-[#E9EFEC] p-4 sm:p-6 px-4 sm:px-10 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/l" className="flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Coffee size={32} className="text-[#E9EFEC] mr-2" />
                <span className="text-2xl md:text-3xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-[#E9EFEC] to-[#6A9C89]">ACafe</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
                <a href="#subscriptions" className="hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">Subscriptions</a>
                <a href="#features" className="hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">Features</a>
                <a href="#testimonials" className="hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">Testimonials</a>
            </nav>
            <div className="flex items-center space-x-4">
                <Link to="/s-register" className="hidden md:inline-block hover:text-[#6A9C89] transition duration-300 text-sm uppercase tracking-wide transform hover:scale-105">Sign In</Link>
                <Link to="/s-register" className="hidden md:inline-block bg-[#6A9C89] text-[#E9EFEC] px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Sign Up</Link>
                <button onClick={toggleMobileMenu} className="md:hidden transform hover:scale-110 transition-transform duration-300">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </div>
    </header>
);

// const Hero = () => (
//     <div className="bg-[#C4DAD2] text-[#16423C] py-20 px-4 min-h-screen flex flex-col justify-center items-center text-center"
//         style={{
//             backgroundImage: 'url("https://i.pinimg.com/564x/56/55/54/56555475dba1e5e9a91092a2beca668c.jpg")', // Replace with your image path
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//         }}
//     >
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">Master Programming with Expert Guidance</h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-2xl">Interactive classes, real-world projects, and personalized mentorship</p>
//         <Link to="/s-register">
//             <button className="bg-[#6A9C89] text-[#E9EFEC] px-8 py-4 rounded-full text-xl flex items-center mx-auto hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
//                 Start Your Journey <ArrowRight className="ml-2" />
//             </button>
//         </Link>
//     </div>
// );


const Hero = () => (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={bg} type="video/mp4" /> {/* Replace with your video path */}
            Your browser does not support the video tag.
        </video>
        <div className="bg-black bg-opacity-50 py-20 px-4 w-full h-full absolute top-0 left-0" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight relative text-white">Master Programming with Expert Guidance</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl relative text-white">Interactive classes, real-world projects, and personalized mentorship</p>
        <Link to="/s-register">
            <button className="bg-[#6A9C89] text-[#E9EFEC] px-8 py-4 rounded-full text-xl flex items-center mx-auto hover:bg-opacity-90 transition duration-300 transform hover:scale-105 relative">
                Start Your Journey <ArrowRight className="ml-2" />
            </button>
        </Link>
    </div>
);


const Subscriptions = () => {
    const plans = [
        { name: 'ESSENTIAL', price: '$29/month', features: ['Access to basic courses', 'Weekly group mentoring', 'Community forum access'] },
        { name: 'EXTRA', price: '$59/month', features: ['Access to all courses', 'Bi-weekly 1-on-1 mentoring', 'Priority community support', 'Certificate of completion'] },
        { name: 'PREMIUM', price: '$99/month', features: ['Everything in EXTRA', 'Weekly 1-on-1 mentoring', 'Job placement assistance', 'Exclusive industry workshops'] },
    ];

    return (
        <div id="subscriptions" className="bg-[#E9EFEC] py-20 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16423C] text-center mb-12">Choose Your Path to Success</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <div key={plan.name} className="bg-[#16423C] text-[#E9EFEC] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-6">{plan.price}</p>
                        <ul className="mb-6 space-y-2">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <Star className="mr-2 w-4 h-4" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <Link to="/s-register">
                            <button className="w-full bg-[#6A9C89] text-[#E9EFEC] px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300">
                                Choose Plan
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Features = () => {
    const features = [
        { name: 'Live Coding Sessions', icon: Coffee, description: 'Participate in real-time coding sessions with industry experts.' },
        { name: 'Expert Mentorship', icon: User, description: 'Get personalized guidance from experienced professionals.' },
        { name: 'Project-Based Learning', icon: Book, description: 'Build a portfolio of real-world projects as you learn.' },
    ];

    return (
        <div id="features" className="bg-[#C4DAD2] py-20 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16423C] text-center mb-12">Why Choose Our Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature) => (
                    <div key={feature.name} className="bg-[#16423C] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <feature.icon className="text-[#E9EFEC] w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-bold text-[#E9EFEC] mb-4">{feature.name}</h3>
                        <p className="text-[#E9EFEC]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        { name: 'Sarah Johnson', role: 'Software Developer', quote: "This program has been transformative for my career. The mentors are exceptional and the projects gave me real-world experience!" },
        { name: 'Mike Chen', role: 'Data Scientist', quote: "I landed my dream job thanks to the skills I gained here. The community support was invaluable throughout my learning journey." },
        { name: 'Emily Rodriguez', role: 'UX Designer', quote: "The flexibility of the program allowed me to balance learning with my full-time job. I'm now confidently switching careers!" },
    ];

    return (
        <div id="testimonials" className="bg-[#E9EFEC] py-20 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16423C] text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, i) => (
                    <div key={i} className="bg-[#16423C] p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <p className="text-[#E9EFEC] mb-6 italic">"{testimonial.quote}"</p>
                        <p className="font-bold text-[#6A9C89]">{testimonial.name}</p>
                        <p className="text-[#E9EFEC]">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MobileApp = () => (
    <div className="bg-[#C4DAD2] py-20 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                <h2 className="text-4xl font-bold text-[#034c52] mb-8">Learn On-the-Go with Our Mobile App</h2>
                <p className="text-xl text-[#034c52] mb-8">Access courses, connect with mentors, and track your progress from anywhere, anytime. Our mobile app puts the power of learning in your hands.</p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-[#034c52] text-[#ECDFCC] px-6 py-3 rounded-full flex items-center hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                        <Apple className="mr-2" /> App Store
                    </button>
                    <button className="bg-[#034c52] text-[#ECDFCC] px-6 py-3 rounded-full flex items-center hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
                        <PlayCircle className="mr-2" /> Google Play
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative">
                    <Phone className="text-[#034c52] w-64 h-64 animate-float" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#034c52] text-[#ECDFCC] p-4 rounded-lg shadow-lg">
                        <p className="font-bold">Coming Soon!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const Footer = () => (
    <footer className="bg-[#16423C] text-[#E9EFEC] py-8 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 flex items-center transform hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E9EFEC] p-1 rounded-full mr-3" />
                <div>
                    <h3 className="text-xl font-bold italic">ACafe</h3>
                    <p className="text-xs">Brewing knowledge since 2010</p>
                </div>
            </div>
            <div className="text-center mb-4 sm:mb-0">
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
                <p className="text-xs">Contact: info@acafe.com</p>
            </div>
        </div>
    </footer>
);

const HomePage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="min-h-screen bg-[#E9EFEC] text-[#16423C]">
            <Header toggleMobileMenu={toggleMobileMenu} />

            <div className={`fixed inset-x-0 top-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
                <div className="bg-[#16423C] h-full flex flex-col p-4">
                    <div className="flex justify-end">
                        <button onClick={toggleMobileMenu} className="transform hover:scale-110 transition-transform duration-300">
                            <X className="w-6 h-6 text-[#E9EFEC]" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-4 mt-8">
                        <a href="#subscriptions" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>Subscriptions</a>
                        <a href="#features" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>Features</a>
                        <a href="#testimonials" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>Testimonials</a>
                        <Link to="/s-register" className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105" onClick={toggleMobileMenu}>Sign In</Link>
                        <Link to="/s-register" className="bg-[#6A9C89] text-[#E9EFEC] px-4 py-2 rounded-full text-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105" onClick={toggleMobileMenu}>Sign Up</Link>
                    </nav>
                </div>
            </div>

            <main>
                <Hero />
                <Subscriptions />
                <Features />
                <Testimonials />
                <MobileApp />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;