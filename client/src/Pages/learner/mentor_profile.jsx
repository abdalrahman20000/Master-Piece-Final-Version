import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Heart, Play, Star, Clock, BookOpen, Users } from 'lucide-react';
import { fetchMentor } from "../../Redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const MentorProfile = () => {
    const [isLiked, setIsLiked] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { mentor } = useSelector((state) => (state.users));
    // console.log(mentor);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchMentor(id));
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();

        // if(){

        // }
        // else{

        // }

    }, [dispatch]);

    const getEmbedUrl = () => {
        if (!mentor.introVideo) {
            return ''; // Return empty string or a default video URL
        }

        const fileId = mentor.introVideo.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://drive.google.com/file/d/${fileId[0]}/preview`;
        }
        return mentor.introVideo; // Return original URL if not a Google Drive link
    };

    return (
        <div className="min-h-screen bg-[#E9EFEC] text-[#16423C] py-8 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            >
                <div className="bg-[#16423C] text-[#E9EFEC] p-6 sm:p-10">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r  from-[#377c9f] to-[#275D71]  "
                        >
                            <img src={mentor.picture || "/api/placeholder/128/128"} alt="User" className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="flex-grow">
                            <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                            <p className="text-xl mb-4">Expert in Advanced JavaScript and React</p>
                            <div className="flex items-center space-x-4">
                                {/* <div className="flex items-center">
                                    <Star className="text-yellow-400 mr-1" size={20} />
                                    <span>4.9 (120 reviews)</span>
                                </div> */}
                                <div className="flex items-center">
                                    <Clock className="mr-1" size={20} />
                                    <span>{mentor.hours_counter} hours taught</span>
                                </div>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsLiked(!isLiked)}
                            className="bg-[#6A9C89] text-white p-3 rounded-full"
                        >
                            <Heart className={isLiked ? "text-red-500 fill-current" : ""} size={24} />
                        </motion.button>
                    </div>
                </div>

                <div className="p-6 sm:p-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-lg mb-6">
                            {mentor.briefAbout}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold mb-4">Expertise</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="bg-[#C4DAD2] text-[#16423C] p-3 rounded-lg text-center font-semibold"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Brief</h2>
                        <div className="bg-[#16423C] text-[#E9EFEC] p-4 rounded-lg flex items-center space-x-6">
                            <div className='flex-col'>
                                <h3 className="text-xl font-bold mb-2">Intro Video</h3>
                                <iframe
                                    src={getEmbedUrl()}
                                    width="100%"
                                    height="200"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="mb-4 w-64 h-36 rounded-lg"
                                ></iframe>
                            </div>
                            <div>
                                <p className="mb-2">Learn to leverage the power of React Hooks in your applications</p>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <BookOpen className="mr-1" size={16} />
                                        <span>10 lessons</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="mr-1" size={16} />
                                        <span>1,200+ students</span>
                                    </div>
                                    <a href={mentor.cv} target="_blank" rel="noopener noreferrer" className=" underline">View CV</a>
                                </div>
                            </div>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Featured Course</h2>
                        <div className="bg-[#16423C] text-[#E9EFEC] p-6 rounded-lg flex items-center space-x-6">
                            <div className="flex-shrink-0">
                                <Play size={48} className="text-[#6A9C89]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Mastering React Hooks</h3>
                                <p className="mb-2">Learn to leverage the power of React Hooks in your applications</p>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <BookOpen className="mr-1" size={16} />
                                        <span>10 lessons</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="mr-1" size={16} />
                                        <span>1,200+ students</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default MentorProfile;