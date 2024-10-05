import React from 'react';
import { motion } from 'framer-motion';
import { User, Check, Printer, BookOpen, Clock, Award, Star } from 'lucide-react';
import { fetchUser } from "../../Redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';


const DCV = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => (state.users));
    const topics = user.topics || ['Advanced JavaScript', 'React Hooks', 'Node.js', 'GraphQL', 'TypeScript', 'Next.js'];
    const mentors = user.mentors || ['Dr. Jane Smith', 'Prof. John Doe', 'Sarah Johnson, PhD', 'Michael Lee, MSc', 'Emily Chen', 'David Brown'];
    console.log(user.mentors);

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

    return (
        <div className="min-h-screen bg-[#C4DAD2] text-[#16423C] py-8 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-[#C4DAD2] rounded-lg  overflow-hidden text-[#E9EFEC]"
            >
                <div className="p-6 sm:p-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-32 h-32 rounded-full overflow-hidden"
                            >
                                <img src={user.picture || "/api/placeholder/128/128"} alt="User" className="w-full shadow-lg h-full object-cover" />
                            </motion.div>
                            <h1 className="text-3xl font-bold">D-CV</h1>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#6A9C89] text-[#E9EFEC] px-4 py-2 rounded-full flex items-center"
                        >
                            <Printer className="mr-2" size={20} />
                            Print
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#E9EFEC] p-4 rounded-lg shadow-lg mb-8"
                    >
                        <h2 className="text-xl font-bold text-[#16423C] mb-2">{user.name}</h2>
                        <div className="flex items-center space-x-4  text-[#16423C]">
                            <div className="flex items-center">
                                <BookOpen className="mr-1" size={16} />
                                <span>{user.sessions_counter} sessions completed</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-1" size={16} />
                                <span>{user.hours_counter} hours completed</span>
                            </div>
                            {/* <div className="flex items-center">
                                <Award className="mr-1" size={16} />
                                <span>10 certifications</span>
                            </div>
                            <div className="flex items-center">
                                <Star className="mr-1" size={16} />
                                <span>4.8 average rating</span>
                            </div> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#6A9C89] p-6 rounded-lg mb-8 shadow-lg"
                    >
                        <h2 className="text-xl font-bold mb-4">Learning Journey</h2>
                        <p className="text-lg">
                            {user.name} has demonstrated exceptional dedication and growth throughout their learning journey.
                            They have consistently shown a strong aptitude for complex programming concepts and
                            have applied their knowledge effectively in various projects. Their commitment to
                            continuous learning and ability to collaborate with peers make them a standout learner.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-xl font-bold mb-4 text-[#16423C]">Mastered Topics</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {topics.map((topic, index) => (
                                <motion.div
                                    key={topic}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="bg-[#C4DAD2] text-[#16423C] shadow-xl p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{topic}</span>
                                    <Check className="text-green-500" size={20} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h2 className="text-xl font-bold mb-4 text-[#16423C]">Mentors</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {mentors.map((mentor, index) => (
                                <motion.div
                                    key={mentor}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="bg-[#6A9C89] shadow-xl text-[#E9EFEC] p-3 rounded-lg flex justify-between items-center"
                                >
                                    <span>{mentor.name}</span>
                                    <Check className="text-white" size={20} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default DCV;