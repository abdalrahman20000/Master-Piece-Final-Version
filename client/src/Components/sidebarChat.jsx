import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, X, Star, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import axios from 'axios';

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
      chat.mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChats(filtered);
  }, [searchTerm, chats]);

  const fetchChats = async () => {
    try {
      const response = await axios.get("http://localhost:3000/mp/user/chats");
      setChats(response.data);
      console.log(response.data);
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
          className="fixed inset-y-0 right-8 w-full sm:w-96 bg-[#16423C] text-[#E9EFEC] shadow-lg overflow-hidden z-50 flex flex-col"
        >
          <div className="bg-[#034c52] p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Chats</h2>
            <button onClick={onClose} className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300">
              <X size={24} />
            </button>
          </div>

          {selectedUser ? (
            <div className="flex flex-col h-full">
              <div className="bg-[#034c52] p-4 flex items-center space-x-3">
                <button onClick={handleBackToChats} className="text-[#E9EFEC] hover:text-[#6A9C89] transition duration-300">
                  <ArrowLeft size={24} />
                </button>
                <img src={selectedUser.mentor.picture} alt={selectedUser.mentor.name} className="w-10 h-10 rounded-full" />
                <h3 className="text-lg font-semibold">{selectedUser.mentor.name}</h3>
              </div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {selectedUser.messages.map((msg, index) => (
                  <div
                    key={msg._id || index}
                    className={`flex ${msg.senderType === 'User' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[70%] p-3 rounded-lg ${msg.senderType === 'User' ? 'bg-[#6A9C89]' : 'bg-[#045c62]'} break-words`}>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <p className="text-xs text-[#C4DAD2] mt-1">{new Date(msg.time).toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="bg-[#034c52] p-4 flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(message, selectedUser._id)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 rounded bg-[#E9EFEC] text-[#16423C] placeholder-[#6A9C89]"
                />
                <button
                  onClick={() => handleSendMessage(message, selectedUser._id)}
                  className="bg-[#6A9C89] text-[#E9EFEC] p-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
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
                    className="w-full p-2 pl-10 rounded bg-[#034c52] text-[#E9EFEC] placeholder-[#6A9C89] focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6A9C89]" size={18} />
                </div>
                <button
                  onClick={handleAdminChat}
                  className="w-full bg-[#6A9C89] text-[#E9EFEC] p-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Chat with Admin
                </button>
              </div>
              <ul className="space-y-2 p-4">
                {filteredChats.map(chat => (
                  <li
                    key={chat._id}
                    onClick={() => setSelectedUser(chat)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 bg-[#034c52] p-3 rounded-lg hover:bg-opacity-80 transition-colors duration-300">
                      <img src={chat.mentor.picture} alt={chat.mentor.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline">
                          <p className="font-semibold">{chat.mentor_name}</p>
                          <p className="text-xs text-[#C4DAD2]">{new Date(chat.messages[chat.messages.length - 1].time).toLocaleTimeString()}</p>
                        </div>
                        <p className="text-sm text-[#C4DAD2] truncate">{chat.messages[chat.messages.length - 1].text.slice(0, 25) + "..."}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatSidebar;