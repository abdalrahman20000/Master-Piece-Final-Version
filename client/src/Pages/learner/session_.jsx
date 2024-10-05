import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { User, Star, Calendar, Clock, Book, ChevronLeft, ChevronRight, Coffee, Search, MessageCircle, MapPin } from 'lucide-react';
import { fetchSessions, updateReserveStatus } from "../../Redux/slice/sessionSlice";
import { fetchMentors } from "../../Redux/slice/mentorSlice";
import { useDispatch, useSelector } from "react-redux";

const SessionsAndMentorsPage = () => {
    const dispatch = useDispatch();
    const { sessions } = useSelector((state) => state.sessions);
    const { accepted_mentors } = useSelector((state) => (state.mentors));
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('All');
    const sessionsPerPage = 6;

    // console.log(sessions);

    const favoriteMentors = [
        { id: 1, name: "Jane Smith", expertise: "React, JavaScript", rating: 4.9, bio: "Passionate about front-end development and creating intuitive user interfaces.", image: "/api/placeholder/100/100" },
        { id: 2, name: "John Doe", expertise: "Python, Machine Learning", rating: 4.8, bio: "Data scientist with a knack for explaining complex concepts in simple terms.", image: "/api/placeholder/101/101" },
        { id: 3, name: "Emily Brown", expertise: "UI/UX Design, CSS", rating: 4.7, bio: "Creative designer focusing on user-centered approaches and accessibility.", image: "/api/placeholder/102/102" },
        { id: 4, name: "Michael Johnson", expertise: "Node.js, Express", rating: 4.9, bio: "Full-stack developer with years of experience in building scalable web applications.", image: "/api/placeholder/103/103" },
        { id: 5, name: "Sarah Lee", expertise: "Data Analysis, R", rating: 4.8, bio: "Experienced data analyst passionate about uncovering insights from complex datasets.", image: "/api/placeholder/104/104" },
        { id: 6, name: "David Wilson", expertise: "iOS Development, Swift", rating: 4.9, bio: "Mobile app developer specializing in creating intuitive and efficient iOS applications.", image: "/api/placeholder/105/105" },
    ];

    const filteredSessions = sessions.filter(session =>
        session.topic.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTopic === 'All' || session.topic === selectedTopic)
    );

    const indexOfLastSession = currentPage * sessionsPerPage;
    const indexOfFirstSession = indexOfLastSession - sessionsPerPage;
    const currentSessions = filteredSessions.slice(indexOfFirstSession, indexOfLastSession);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    async function confirmSessionHandle(session_id) {
        try {
            await dispatch(updateReserveStatus(session_id));
        } catch (err) {
            console.log(err);
        }
        navigate("/confirm-information");
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedTopic]);

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -50 }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchMentors());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen bg-[#E9EFEC] text-[#16423C] py-10 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-[#16423C] text-center mb-8"
                >
                    Your Coffee Learning Hub
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="relative mb-4 md:mb-0">
                        <input
                            type="text"
                            placeholder="Search sessions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border-2 border-[#6A9C89] rounded-full focus:outline-none focus:border-[#16423C] transition-colors duration-300"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6A9C89]" size={20} />
                    </div>
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="px-4 py-2 border-2 border-[#6A9C89] rounded-full focus:outline-none focus:border-[#16423C] transition-colors duration-300"
                    >
                        <option value="All">All Topics</option>
                        {Array.from(new Set(sessions.map(session => session.topic))).map(topic => (
                            <option key={topic} value={topic}>{topic}</option>
                        ))}
                    </select>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sessions Available Now */}
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#16423C] p-6 rounded-lg shadow-xl lg:w-2/3"
                    >
                        <h2 className="text-[#E9EFEC] font-bold mb-6 text-2xl text-center">Sessions Available Now</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnimatePresence>
                                {currentSessions.map((session, index) => (
                                    <motion.div
                                        key={session._id}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-[#E9EFEC] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <img src={session.session_picture} alt={session.topic} className="w-full h-40 object-cover rounded-lg mb-4" />
                                        <h3 className="text-lg text-[#16423C] font-semibold mb-2">{session.topic}</h3>
                                        <div className="flex items-center text-sm text-[#16423C] mb-2">
                                            <User size={16} className="mr-2" />
                                            <span>{session.mentor_id.name}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-[#16423C] mb-2">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{new Date(session.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-[#16423C] mb-2">
                                            <Clock size={16} className="mr-2" />
                                            <span>{new Date(session.createdAt).toLocaleTimeString()}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-[#16423C] mb-2">
                                            <Book size={16} className="mr-2" />
                                            <span>{session.topic_subject}</span>
                                        </div>
                                        <motion.button
                                            className={`w-full ${session.is_reserved ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6A9C89] hover:bg-opacity-90'} text-[#E9EFEC] py-2 px-4 rounded-full text-sm transition duration-300 flex items-center justify-center`}
                                            onClick={() => { confirmSessionHandle(session._id) }}
                                            whileHover={{ scale: session.is_reserved ? 1 : 1.05 }}
                                            whileTap={{ scale: session.is_reserved ? 1 : 0.95 }}
                                            disabled={session.is_reserved}
                                        >
                                            <Coffee size={16} className="mr-2" />
                                            {session.is_reserved ? 'Reserved' : 'Join Coffee Chat'}
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className="flex justify-center mt-6 space-x-2">
                            <motion.button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="bg-[#E9EFEC] text-[#16423C] px-3 py-1 rounded-full disabled:opacity-50 transition-colors duration-300 hover:bg-[#6A9C89] hover:text-[#E9EFEC]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft size={20} />
                            </motion.button>
                            {Array.from({ length: Math.ceil(filteredSessions.length / sessionsPerPage) }).map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`w-8 h-8 rounded-full transition-colors duration-300 ${currentPage === index + 1 ? 'bg-[#6A9C89] text-[#E9EFEC]' : 'bg-[#E9EFEC] text-[#16423C] hover:bg-[#6A9C89] hover:text-[#E9EFEC]'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {index + 1}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === Math.ceil(filteredSessions.length / sessionsPerPage)}
                                className="bg-[#E9EFEC] text-[#16423C] px-3 py-1 rounded-full disabled:opacity-50 transition-colors duration-300 hover:bg-[#6A9C89] hover:text-[#E9EFEC]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight size={20} />
                            </motion.button>
                        </div>
                    </motion.section>

                    {/* Chat with Mentors */}
                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#16423C] p-6 rounded-lg shadow-xl lg:w-1/3"
                    >
                        <h2 className="text-[#E9EFEC] font-bold mb-6 text-2xl text-center">Chat with Mentors</h2>
                        <div className="space-y-6">
                            {accepted_mentors.map((mentor, index) => (
                                <motion.div
                                    key={mentor._id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="bg-[#E9EFEC] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center mb-4">
                                        <img src={mentor.picture || "https://www.w3schools.com/howto/img_avatar.png"} alt={mentor.name} className="w-16 h-16 rounded-full mr-4" />
                                        <div>
                                            <h3 className="text-lg text-[#16423C] font-semibold">{mentor.name}</h3>
                                            <p className="text-sm text-[#16423C]">Experience: {mentor.experience} years</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#16423C] mb-4">{mentor.briefAbout}</p>
                                    <div className="flex items-center mb-4">
                                        <Clock size={16} className="mr-2 text-[#16423C]" />
                                        <span className="text-sm text-[#16423C]">{mentor.hours_counter} hours</span>
                                        <User size={16} className="ml-4 mr-2 text-[#16423C]" />
                                        <span className="text-sm text-[#16423C]">{mentor.sessions_counter} sessions</span>
                                    </div>
                                    <motion.button
                                        className="w-full bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded-full text-sm hover:bg-opacity-90 transition duration-300 flex items-center justify-center"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <MessageCircle size={16} className="mr-2" />
                                        Chat with {mentor.name}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                </div>
            </div>
        </motion.div>
    );
};

export default SessionsAndMentorsPage;