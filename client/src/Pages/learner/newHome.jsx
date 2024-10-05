import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, X, Star, MessageCircle, Award, Book, Send, ArrowLeft } from 'lucide-react';
import { fetchUser } from "../../Redux/slice/userSlice";
import { fetchSessions } from "../../Redux/slice/sessionSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import axios from 'axios';
import SIdebarChat from "../../Components/sidebarChat";

const SessionCard = ({ session, isActive }) => (
    <motion.div
        className={`bg-[#E9EFEC] p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform ${isActive ? 'scale-105' : 'scale-90'}`}
        initial={{ opacity: 0, scale: isActive ? 1 : 0.8 }}
        animate={{ opacity: 1, scale: isActive ? 1 : isActive - 1 === 0 || isActive + 1 === 0 ? 0.9 : 0.8 }}
        transition={{ duration: 0.3, delay: isActive * 0.1 }}
    >
        <div className="text-[#16423C] font-bold mb-4 text-xl">Session {session.id}</div>
        <img
            src={`/api/placeholder/80/80`}
            alt={`Mentor ${session.id}`}
            className="w-20 h-20 rounded-full mx-auto mb-3"
        />
        <div className="text-lg text-[#16423C] font-semibold mb-1">{session.topic}</div>
        <div className="text-sm text-[#16423C] mb-2">Mentor: {session.mentorName}</div>
        <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, j) => (
                <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: j * 0.1 }}
                    className={`text-[#16423C] ${j < session.rating ? 'fill-current' : 'text-gray-400'}`}
                >
                    <Star size={16} />
                </motion.div>
            ))}
        </div>
        <button className="bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded-full text-sm hover:bg-opacity-90 transition duration-300">
            Join Now
        </button>
    </motion.div>
);

const LearnerHome = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sessions } = useSelector((state) => state.sessions);
    const { user } = useSelector((state) => (state.users));
    console.log(sessions);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sessionCards, setSessionCards] = useState([
        {
            id: 1,
            mentorName: 'Jane Smith',
            topic: 'Advanced JavaScript',
            rating: 4,
        },
        {
            id: 2,
            mentorName: 'John Doe',
            topic: 'Introduction to React',
            rating: 5,
        },
        {
            id: 3,
            mentorName: 'Sarah Lee',
            topic: 'Data Structures and Algorithms',
            rating: 4,
        },
        {
            id: 4,
            mentorName: 'Michael Wang',
            topic: 'Web Development Fundamentals',
            rating: 5,
        },
    ]);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sessionCards.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [sessionCards.length]);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + sessionCards.length) % sessionCards.length);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sessionCards.length);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchUser());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchSessions());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);


    const viewSessionsHandle= ()=>{

        navigate('/sessions');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#C4DAD2] text-[#16423C] relative">
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16423C] text-center mb-8 sm:mb-12"
                >
                    Your Learning Journey
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1"
                    >
                        <div className="bg-[#16423C] p-6 rounded-lg shadow-lg">
                            <h2 className="text-[#E9EFEC] font-bold mb-4 text-xl">Number of Sessions</h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg">{user.sessions_counter}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1"
                    >
                        <div className="bg-[#16423C] p-6 rounded-lg shadow-lg">
                            <h2 className="text-[#E9EFEC] font-bold mb-4 text-xl">Welcome</h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg">{user.name}</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1"
                    >
                        <div className="bg-[#16423C] p-6 rounded-lg shadow-lg">
                            <h2 className="text-[#E9EFEC] font-bold mb-4 text-xl">Number of Hours</h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg">{user.hours_counter}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-[#E9EFEC] p-4 sm:p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 sm:my-20 text-[#16423C] mb-12"
                >
                    <div className="border-4 border-[#16423C] p-4 sm:p-6 rounded-lg relative">
                        <div className="absolute top-0 left-0 w-12 sm:w-24 h-12 sm:h-24 border-t-4 border-l-4 border-[#16423C] -mt-3 -ml-3"></div>
                        <div className="absolute top-0 right-0 w-12 sm:w-24 h-12 sm:h-24 border-t-4 border-r-4 border-[#16423C] -mt-3 -mr-3"></div>
                        <div className="absolute bottom-0 left-0 w-12 sm:w-24 h-12 sm:h-24 border-b-4 border-l-4 border-[#16423C] -mb-3 -ml-3"></div>
                        <div className="absolute bottom-0 right-0 w-12 sm:w-24 h-12 sm:h-24 border-b-4 border-r-4 border-[#16423C] -mb-3 -mr-3"></div>

                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">CERTIFICATE OF APPRECIATION</h2>
                            <p className="text-lg sm:text-xl mb-4 sm:mb-6">THIS CERTIFICATE IS PRESENTED TO</p>
                            <p className="text-2xl sm:text-4xl font-bold italic mb-6 sm:mb-8">{user.name}</p>
                            <p className="mb-6 sm:mb-8 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim eradipiscing elit. Fusce dignissim erat</p>
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="mb-4 sm:mb-0">
                                    <div className="w-32 sm:w-40 border-b border-[#16423C]"></div>
                                    <p className="mt-2 text-sm">SIGNED</p>
                                </div>
                                <Award className="text-[#16423C] mb-4 sm:mb-0" size={48} />
                                <div>
                                    <div className="w-32 sm:w-40 border-b border-[#16423C]"></div>
                                    <p className="mt-2 text-sm">ISSUED DATE: DD/MM/YYYY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="p-4 sm:p-6 rounded-lg w-full mb-12 relative"
                >
                    <h2 className="text-[#16423C] font-bold mb-6 text-xl sm:text-2xl text-center">Sessions Available Now</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sessions.slice(0, 4).map((session, i) => (
                            <motion.div
                                key={session._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="bg-[#6A9C89] p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <img
                                    src={session.mentor_id.picture || session.mentor_id.picture || `https://www.w3schools.com/howto/img_avatar.png`}
                                    alt={`Session ${session._id}`}
                                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover bg-gradient-to-r  from-[#377c9f] to-[#275D71]"
                                />
                                <div className="text-lg text-[#E9EFEC] font-semibold mb-1">{session.topic}</div>
                                <div className="text-sm text-[#E9EFEC] mb-2">Mentor: {session.mentor_id.name}</div>
                                <div className="text-xs text-[#E9EFEC] mb-2">Subject: {session.topic_subject}</div> 
                                <button
                                    className={`bg-[#C4DAD2] text-[#6A9C89] py-2 mt-4 px-4 rounded-full text-sm hover:bg-opacity-90 transition duration-300 `}
                                    onClick={viewSessionsHandle}
                                    >
                                    View Sessions
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div >

                {/* <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    onClick={toggleChat}
                    className="fixed bottom-6 right-6 bg-[#E9EFEC] text-[#16423C] p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-50"
                >
                    <MessageCircle size={24} />
                </motion.button> */}

                {/* <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} /> */}

                <div
                    className={`fixed inset-x-0 top-0 z-50 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="bg-[#16423C] h-full flex flex-col p-4">
                        <div className="flex justify-end">
                            <button onClick={toggleMobileMenu} className="transform hover:scale-110 transition-transform duration-300">
                                <X className="w-6 h-6 text-[#E9EFEC]" />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center space-y-4 mt-8">
                            <Link
                                to="/l"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/sessions"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                Sessions
                            </Link>
                            <Link
                                to="/subscription"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                Subscription
                            </Link>
                            <Link
                                to="/contact"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/library"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <Book className="inline-block mr-2" size={20} />
                                Library
                            </Link>
                            <Link
                                to="/settings"
                                className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300 text-lg uppercase tracking-wide transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <User className="inline-block mr-2" size={20} />
                                Profile
                            </Link>
                        </nav>
                    </div>
                </div>
            </main >

        </div >
    );
};

export default LearnerHome;