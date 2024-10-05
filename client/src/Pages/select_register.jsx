import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, User, Book } from 'lucide-react';

const RegisterSelection = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    };

    const roleCardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        },
        hover: { 
            scale: 1.05,
            boxShadow: "0px 0px 8px rgb(106, 156, 137, 0.3)",
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E9EFEC] p-4">
            <motion.div 
                className="bg-[#16423C] p-8 rounded-lg shadow-2xl max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-8">
                    <Coffee size={48} className="text-[#E9EFEC]" />
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-[#E9EFEC] mb-8">
                    Welcome to ACafe
                </motion.h1>
                <motion.p variants={itemVariants} className="text-center text-[#E9EFEC] mb-12">
                    Choose your role to get started on your learning journey
                </motion.p>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        variants={roleCardVariants}
                        whileHover="hover"
                        className={`bg-[#E9EFEC] p-6 rounded-lg cursor-pointer ${selectedRole === 'mentor' ? 'ring-4 ring-[#6A9C89]' : ''}`}
                        onClick={() => setSelectedRole('mentor')}
                    >
                        <User size={32} className="text-[#16423C] mb-4 mx-auto" />
                        <h2 className="text-2xl font-bold text-[#16423C] text-center mb-4">Mentor</h2>
                        <p className="text-[#16423C] text-center mb-4">Share your expertise and guide learners</p>
                        <Link to="/log-in-m">
                            <button className="w-full bg-[#6A9C89] text-[#E9EFEC] py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                                Join as Mentor
                            </button>
                        </Link>
                    </motion.div>
                    <motion.div
                        variants={roleCardVariants}
                        whileHover="hover"
                        className={`bg-[#E9EFEC] p-6 rounded-lg cursor-pointer ${selectedRole === 'learner' ? 'ring-4 ring-[#6A9C89]' : ''}`}
                        onClick={() => setSelectedRole('learner')}
                    >
                        <Book size={32} className="text-[#16423C] mb-4 mx-auto" />
                        <h2 className="text-2xl font-bold text-[#16423C] text-center mb-4">Learner</h2>
                        <p className="text-[#16423C] text-center mb-4">Embark on your learning adventure</p>
                        <Link to="/log-in-l">
                            <button className="w-full bg-[#6A9C89] text-[#E9EFEC] py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                                Join as Learner
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterSelection;