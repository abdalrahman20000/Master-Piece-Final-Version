import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { MessageCircle, Book, Users, Target, Play, TrendingUp, Clock } from 'lucide-react';
import { fetchMentor } from "../../Redux/slice/mentorSlice";
import { stratSessions } from "../../Redux/slice/sessionSlice";
import { useDispatch, useSelector } from "react-redux";

const MentorDashboard = () => {
    const navigate = useNavigate();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        topic: '',
        topic_subject: '',
        session_picture: null
    });
    const dispatch = useDispatch();
    const { mentor } = useSelector((state) => (state.mentors));

    const toggleChat = () => setIsChatOpen(!isChatOpen);
    const toggleForm = () => setIsFormOpen(!isFormOpen);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchMentor());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    const instructions = [
        "Install the CodeShare plugin in Visual Studio Code for real-time collaboration.",
        "Prepare diverse programming questions and projects tailored to the mentee's skill level.",
        "Begin each session with a warm introduction and assess the mentee's current understanding.",
        "Guide the mentee through the CodeShare setup process to ensure smooth code sharing.",
        "Provide clear explanations and encourage the mentee to ask questions throughout the session.",
        "Offer constructive feedback and celebrate the mentee's progress, no matter how small.",
        "Conclude each session with a summary and suggest resources for further learning."
    ];

    const mentorTips = [
        "Practice active listening to understand your mentee's needs and concerns.",
        "Use analogies and real-world examples to explain complex concepts.",
        "Encourage problem-solving skills by guiding mentees to find solutions independently.",
        "Stay updated with the latest industry trends and share relevant insights.",
        "Foster a growth mindset by emphasizing effort and continuous learning.",
        "Adapt your teaching style to match each mentee's learning preferences.",
        "Share your own experiences, including challenges you've overcome in your career."
    ];

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'session_picture') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            await dispatch(stratSessions(formData));
            navigate("/call-sesstion-m");
        } catch (err) {
            console.log(err);
        }
        setFormData({ topic: '', topic_subject: '', session_picture: null });
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#C4DAD2] to-[#A7C4BB] text-[#16423C] relative">
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16423C] text-center mb-8 sm:mb-12"
                >
                    Mentor Dashboard
                </motion.h1>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Number of Sessions */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1"
                    >
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-[#16423C] font-bold mb-4 text-xl flex items-center">
                                <TrendingUp className="mr-2" /> Sessions Completed
                            </h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg shadow-inner">
                                    {mentor.sessions_counter}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Welcome */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1"
                    >
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-[#16423C] font-bold mb-4 text-xl flex items-center">
                                <Users className="mr-2" /> Welcome, Mentor
                            </h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg shadow-inner">
                                    {mentor.name}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Number of Hours */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1"
                    >
                        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-[#16423C] font-bold mb-4 text-xl flex items-center">
                                <Clock className="mr-2" /> Hours Mentored
                            </h2>
                            <div className="text-center">
                                <div className="flex justify-center items-center font-bold text-4xl text-[#16423C] bg-[#E9EFEC] h-24 rounded-lg shadow-inner">
                                    {mentor.hours_counter}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Start Session Button */}
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    onClick={toggleForm}
                    className="mb-8 bg-[#16423C] text-[#E9EFEC] px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 flex items-center justify-center mx-auto"
                >
                    <Play className="mr-2" /> Start Session
                </motion.button>

                {/* Session Form */}
                {isFormOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                            <h2 className="text-2xl font-bold mb-4 text-[#16423C]">Start New Session</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="topic" className="block text-[#16423C] mb-2">Topic</label>
                                    <input
                                        type="text"
                                        id="topic"
                                        name="topic"
                                        value={formData.topic}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="topic_subject" className="block text-[#16423C] mb-2">Topic Subject</label>
                                    <input
                                        type="text"
                                        id="topic_subject"
                                        name="topic_subject"
                                        value={formData.topic_subject}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="session_picture" className="block text-[#16423C] mb-2">Session Picture</label>
                                    <input
                                        type="text"
                                        id="session_picture"
                                        name="session_picture"
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        accept="image/*"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={toggleForm}
                                        className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#16423C] text-white rounded hover:bg-opacity-90"
                                    >
                                        Start
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}

                {/* Combined About Mentoring and Instructions Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-[#16423C] font-bold mb-6 text-2xl flex items-center">
                        <Book className="mr-2" /> Mentoring Essentials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* About Mentoring */}
                        <div>
                            <h3 className="text-[#16423C] font-semibold mb-4 text-xl">About Mentoring</h3>
                            <p className="text-[#16423C] mb-4">
                                Mentoring is a transformative journey that empowers both the mentor and the mentee. As a mentor, you have the unique opportunity to shape the future of aspiring developers, guiding them through the complexities of software development and nurturing their potential.
                            </p>
                            <p className="text-[#16423C] mb-4">
                                Your role extends beyond teaching code; you're a coach, a motivator, and a source of inspiration. By sharing your experiences, best practices, and industry insights, you help mentees navigate their career paths and develop not just technical skills, but also the problem-solving abilities and professional ethos crucial for success in the tech industry.
                            </p>
                            <p className="text-[#16423C]">
                                Remember, effective mentoring is built on patience, empathy, and adaptability. Embrace each mentee's unique learning style and pace, celebrating their progress and supporting them through challenges. Your guidance can be the catalyst that transforms a novice coder into a confident, skilled developer ready to make their mark in the world of technology.
                            </p>
                        </div>
                        {/* Instructions */}
                        <div>
                            <h3 className="text-[#16423C] font-semibold mb-4 text-xl">Session Instructions</h3>
                            <div className="space-y-4">
                                {instructions.map((instruction, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-[#16423C] text-[#E9EFEC] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <p className="text-[#16423C]">{instruction}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mentoring Tips Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h2 className="text-[#16423C] font-bold mb-6 text-2xl flex items-center">
                        <Target className="mr-2" /> Mentoring Best Practices
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentorTips.map((tip, index) => (
                            <div key={index} className="bg-[#E9EFEC] p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start mb-2">
                                    <div className="bg-[#16423C] text-[#E9EFEC] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <p className="text-[#16423C] font-semibold">{tip}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Chat button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    onClick={toggleChat}
                    className="fixed bottom-6 right-6 bg-[#16423C] text-[#E9EFEC] p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-50"
                >
                    <MessageCircle size={24} />
                </motion.button>
            </main>
        </div>
    );
};

export default MentorDashboard;