import React, { useState,useRef,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Award, Calendar, Book, Star, MessageCircle, X, Send } from 'lucide-react';



import axios from "axios";
import logo from "../../images/logo.png";

const name = "abood";
const date = Date.now;
const placeholderAvatar = 'https://via.placeholder.com/50';

const ChatSidebar = ({ isOpen, onClose }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdminChat, setIsAdminChat] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser?.messages]);

  useEffect(() => {
    const filtered = chats.filter(chat =>
      chat.mentor_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChats(filtered);
  }, [searchTerm, chats]);

  const fetchChats = async () => {
    try {
      const response = await axios.get("http://localhost:3000/mp/user/chats");
      console.log(response.data);
      setChats(response.data);
      setFilteredChats(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (msg, chat_id) => {
    if (!msg.trim()) return;

    try {
      const response = await axios.post("http://localhost:3000/mp/user/chats/message", { msg, chat_id });
      const newMessage = response.data;

      setChats(prevChats =>
        prevChats.map(chat =>
          chat._id === chat_id
            ? { ...chat, messages: [...chat.messages, newMessage] }
            : chat
        )
      );

      if (selectedUser && selectedUser._id === chat_id) {
        setSelectedUser(prevUser => ({
          ...prevUser,
          messages: [...prevUser.messages, newMessage]
        }));
      }

      setMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAdminChat = () => {
    setIsAdminChat(true);
    setSelectedUser({
      _id: 'admin',
      mentor_name: 'Admin',
      mentor_picture: '/api/placeholder/50/50',
      messages: []
    });
  };

  const handleBackToChats = () => {
    setIsAdminChat(false);
    setSelectedUser(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#034c52] text-[#ECDFCC] shadow-lg overflow-hidden z-50 flex flex-col"
        >
          <div className="bg-[#023c42] p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Chats</h2>
            <button onClick={onClose} className="text-[#ECDFCC] hover:text-white">
              <X size={24} />
            </button>
          </div>

          {selectedUser ? (
            <div className="flex flex-col h-full">
              <div className="bg-[#023c42] p-4 flex items-center space-x-3">
                <button onClick={handleBackToChats} className="text-[#ECDFCC] hover:text-white">
                  &larr;
                </button>
                <img src={selectedUser.mentor_picture} alt={selectedUser.mentor_name} className="w-10 h-10 rounded-full" />
                <h3 className="text-lg font-semibold">{selectedUser.mentor_name}</h3>
              </div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {selectedUser.messages.map((msg, index) => (
                  <motion.div
                    key={msg._id || index}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${msg.sender === 'learner' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[70%] p-3 rounded-lg ${msg.sender === 'learner' ? 'bg-[#023c42]' : 'bg-[#045c62]'} break-words`}>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{new Date(msg.time).toLocaleTimeString()}</p>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="bg-[#023c42] p-4 flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(message, selectedUser._id)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 rounded bg-[#ECDFCC] text-[#034c52]"
                />
                <button
                  onClick={() => handleSendMessage(message, selectedUser._id)}
                  className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-y-auto">
              <div className="p-4 space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search chats..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 pl-10 rounded bg-[#023c42] text-[#ECDFCC] placeholder-[#ECDFCC] focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ECDFCC]" size={18} />
                </div>
                <button
                  onClick={handleAdminChat}
                  className="w-full bg-[#ECDFCC] text-[#034c52] p-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Chat with Admin
                </button>
              </div>
              <ul className="space-y-2 p-4">
                {filteredChats.map(chat => (
                  <motion.li
                    key={chat._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedUser(chat)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 bg-[#023c42] p-3 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
                      <img src={chat.mentor_picture} alt={chat.mentor_name} className="w-12 h-12 rounded-full" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline">
                          <p className="font-semibold">{chat.mentor_name}</p>
                          <p className="text-xs text-gray-400">{new Date(chat.messages[chat.messages.length - 1].time).toLocaleTimeString()}</p>
                        </div>
                        <p className="text-sm text-gray-300 truncate">{chat.messages[chat.messages.length - 1].text.slice(0, 25) + "..."}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LearningDashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAE4DD] to-[#D4C5B0] py-10 px-4 relative">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#034c52] text-center mb-4"
        >
          Your Learning Journey
        </motion.h1>

        {/* Welcome and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="bg-gradient-to-r from-[#034c52] to-[#023c42] p-4 rounded-lg text-center text-[#ECDFCC] font-bold mb-4">
            Welcome back. Mentors are waiting for you
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[#034c52] to-[#023c42] rounded-lg p-2 flex items-center">
              <input
                type="text"
                placeholder="Search here ..."
                className="bg-[#ECDFCC] text-[#034c52] placeholder-[#034c52] rounded-l-lg p-2 flex-grow"
              />
              <button className="bg-[#ECDFCC] hover:bg-opacity-90 p-2 rounded-r-lg transition duration-300">
                <Search className="text-[#034c52]" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Progress and Schedule Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Certificate */}
            <div className="bg-[#ECDFCC] p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-[#3a6571]">
              <div className="border-4 border-[#3a6571] p-6 rounded-lg relative">
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#3a6571] -mt-3 -ml-3"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#3a6571] -mt-3 -mr-3"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#3a6571] -mb-3 -ml-3"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#3a6571] -mb-3 -mr-3"></div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">CERTIFICATE OF APPRECIATION</h2>
                  <p className="text-xl mb-6">THIS CERTIFICATE IS PRESENTED TO</p>
                  <p className="text-4xl font-bold italic mb-8">{name || "Name Surname"}</p>
                  <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim eradipiscing elit. Fusce dignissim erat</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="w-40 border-b border-[#3a6571]"></div>
                      <p className="mt-2">SIGNED</p>
                    </div>
                    <Award className="text-[#3a6571]" size={64} />
                    <div>
                      <div className="w-40 border-b border-[#3a6571]"></div>
                      <p className="mt-2">ISSUED DATE: {date || "DD/MM/YYYY"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile and Premium Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Profile */}
            <div className="bg-gradient-to-br from-[#034c52] to-[#023c42] p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <User size={48} className="text-[#ECDFCC]" />
                <div>
                  <input type="text" placeholder="User name" className="bg-[#ECDFCC] p-2 rounded text-[#034c52]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-md text-[#ECDFCC] mb-2">Number of sessions</div>
                  <div className="flex justify-center items-center font-bold text-4xl text-[#034c52] bg-[#ECDFCC] h-24 rounded-lg">99+</div>
                </div>
                <div className="space-y-2">
                  <div className="text-md text-[#ECDFCC] mb-2">Number of hours</div>
                  <div className="flex justify-center items-center font-bold text-4xl text-[#034c52] bg-[#ECDFCC] h-24 rounded-lg">99+</div>
                </div>
              </div>
            </div>
            {/* Premium */}
            <div className="bg-gradient-to-br from-[#034c52] to-[#023c42] p-6 rounded-lg">
              <h2 className="text-[#ECDFCC] font-bold mb-4 text-xl">Premium</h2>
              <div className="bg-[#ECDFCC] p-4 rounded-lg mb-4">
                <div className="flex justify-between text-[#034c52] font-semibold">
                  <span>Subscription</span>
                  <span>20/06/2024</span>
                </div>
              </div>
              <button className="w-full bg-[#ECDFCC] text-[#034c52] py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300">
                Upgrade now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-br from-[#034c52] to-[#023c42] p-6 rounded-lg w-full"
        >
          <h2 className="text-[#ECDFCC] font-bold mb-6 text-2xl text-center">Your Schedule</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-[#ECDFCC] p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Calendar size={32} className="mx-auto mb-2 text-[#034c52]" />
                <div className="text-lg text-[#034c52] font-semibold mb-1">Session {i + 1}</div>
                <div className="text-sm text-[#034c52]">9:00 AM - 10:00 AM</div>
                <div className="mt-2 text-xs text-[#034c52] font-medium">Topic: React Basics</div>
                <div className="mt-1 text-xs text-[#034c52]">Mentor: John Doe</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sessions available now */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-br from-[#034c52] to-[#023c42] p-6 rounded-lg w-full"
        >
          <h2 className="text-[#ECDFCC] font-bold mb-6 text-2xl text-center">Sessions Available Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-[#ECDFCC] p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img src={`/api/placeholder/80/80`} alt={`Mentor ${i + 1}`} className="w-20 h-20 rounded-full mx-auto mb-3" />
                <div className="text-lg text-[#034c52] font-semibold mb-1">Session {i + 1}</div>
                <div className="text-sm text-[#034c52] mb-2">Mentor: Jane Smith</div>
                <div className="text-xs text-[#034c52] mb-2">Topic: Advanced JavaScript</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-[#034c52]" fill={j < 4 ? "#034c52" : "none"} />
                  ))}
                </div>
                <button className="bg-[#034c52] text-[#ECDFCC] py-2 px-4 rounded-full text-sm hover:bg-opacity-90 transition duration-300">
                  Join Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Assignments */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-gradient-to-br from-[#034c52] to-[#023c42] p-6 rounded-lg"
        >
          <h2 className="text-[#ECDFCC] font-bold mb-6 text-2xl text-center">Your Assignments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-[#ECDFCC] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <input
                  type="text"
                  placeholder="Assignment name"
                  className="w-full bg-white mb-4 p-3 rounded text-[#034c52] font-semibold"
                />
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Progress"
                    className="flex-grow bg-white p-3 rounded-l text-[#034c52]"
                  />
                  <button className="bg-[#034c52] px-6 py-3 rounded-r text-[#ECDFCC] hover:bg-opacity-90 transition duration-300 font-semibold">
                    Update
                  </button>
                </div>
                <div className="text-[#034c52] text-sm">
                  <p><strong>Due Date:</strong> June 30, 2024</p>
                  <p><strong>Status:</strong> In Progress</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Chat Icon */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#034c52] text-[#ECDFCC] p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Sidebar */}
      <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default LearningDashboard;