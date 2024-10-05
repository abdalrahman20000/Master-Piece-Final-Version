import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Camera, Mic, PhoneOff, Settings, User, Send, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { updateSessionsHoursCounter } from "../../Redux/slice/sessionSlice";
import { useDispatch, useSelector } from "react-redux";

const CallSession = () => {
    const dispatch = useDispatch();
    // const { sessions } = useSelector((state) => state.sessions);
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: 'Mentor', text: 'Hello! How can I help you today?' },
        { id: 2, sender: 'You', text: 'Hi! I have some questions about React hooks.' },
    ]);

    useEffect(() => {
        console.log(location.state);
    }, [location]);

    const handleCameraToggle = () => {
        console.log('Camera toggled');
        // Implement camera toggle logic here
    };

    const handleMicToggle = () => {
        console.log('Mic toggled');
        // Implement mic toggle logic here
    };

    const handleShare = () => {
        console.log('Share screen');
        // Implement screen sharing logic here
    };

    const handleSettings = () => {
        console.log('Open settings');
        // Implement settings opening logic here
    };

    const handleCancelCall = async () => {
        try {
            await dispatch(updateSessionsHoursCounter());
        } catch (err) {
            console.log(err);
        }
        navigate("/sessions");
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: 'You', text: message }]);
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#E9EFEC] to-[#C4DAD2] text-[#16423C] border-[18px] border-[#16423C]">
            <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12 relative z-10" style={{ width: '95vw', height: '95vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-[#C4DAD2] rounded-lg shadow-lg w-full h-full mx-auto overflow-hidden flex flex-col"
                >
                    <div className="flex-grow p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-4">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="bg-[#6A9C89] rounded-lg p-4 flex-grow flex items-center justify-center"
                            >
                                <User size={64} className="text-[#E9EFEC]" />
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="bg-[#6A9C89] rounded-lg p-4 flex-grow flex items-center justify-center"
                            >
                                <User size={64} className="text-[#E9EFEC]" />
                            </motion.div>
                        </div>

                        <div className="messages flex-1 flex flex-col">
                            <div className="bg-[#16423C] rounded-lg p-4 flex-grow overflow-y-auto mb-4">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`mb-2 p-2 rounded ${msg.sender === 'You' ? 'bg-[#6A9C89] ml-auto' : 'bg-[#E9EFEC]'} max-w-[80%]`}
                                    >
                                        <p className="font-bold">{msg.sender}</p>
                                        <p>{msg.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <form onSubmit={handleSendMessage} className="flex items-center bg-[#E9EFEC] rounded-full p-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="flex-grow bg-transparent focus:outline-none text-[#16423C] px-4 py-2"
                                    placeholder="Type a message..."
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    type="submit"
                                    className="bg-[#16423C] p-2 sm:p-3 rounded-full hover:bg-[#6A9C89] transition duration-300"
                                >
                                    <Send size={18} className="text-[#E9EFEC]" />
                                </motion.button>
                            </form>
                        </div>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 p-4 bg-[#16423C]"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleCameraToggle}
                            className="bg-[#6A9C89] p-3 sm:p-4 rounded-full hover:bg-[#E9EFEC] text-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                        >
                            <Camera size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleMicToggle}
                            className="bg-[#6A9C89] p-3 sm:p-4 rounded-full hover:bg-[#E9EFEC] text-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                        >
                            <Mic size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleShare}
                            className="bg-[#6A9C89] p-3 sm:p-4 rounded-full hover:bg-[#E9EFEC] text-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                        >
                            <Share2 size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleSettings}
                            className="bg-[#6A9C89] p-3 sm:p-4 rounded-full hover:bg-[#E9EFEC] text-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                        >
                            <Settings size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleCancelCall}
                            className="bg-[#6A9C89] p-3 sm:p-4 rounded-full hover:bg-[#E9EFEC] text-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                        >
                            <PhoneOff size={24} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default CallSession;