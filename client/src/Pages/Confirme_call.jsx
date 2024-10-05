import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { User, Camera, Mic, Phone, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ConfirmInformation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    mentorName: '',
    topic: '',
    date: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    navigate("/sessions");
  };

  const handleCall = () => {
    navigate("/call-sesstion", { state: formData });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col bg-gradient-to-br from-[#E9EFEC] to-[#C4DAD2] text-[#16423C] relative p-4"
    >
      <div className="flex-grow container mx-auto px-4 sm:px-8 py-12 relative z-10">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl md:text-5xl font-bold text-[#16423C] text-center mb-12"
        >
          Confirm Information
        </motion.h1>
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#C4DAD2] rounded-lg shadow-lg w-full max-w-4xl mx-auto overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 space-y-6">
              {[
                { label: 'User name', name: 'userName' },
                { label: 'Mentor name', name: 'mentorName' },
                { label: 'Topic', name: 'topic' },
                { label: 'Date', name: 'date', type: 'date' }
              ].map((field, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label className="text-sm font-semibold text-[#16423C]">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="w-full bg-[#E9EFEC] text-[#16423C] px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6A9C89] transition duration-300"
                  />
                </motion.div>
              ))}
              <motion.button 
                onClick={handleCall} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#16423C] text-[#E9EFEC] px-6 py-3 rounded-full hover:bg-[#6A9C89] transition duration-300"
              >
                Confirm
              </motion.button>
            </div>

            <div className="bg-[#6A9C89] p-8 flex flex-col justify-between">
              <motion.div 
                className="flex justify-center items-center h-48"
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <User size={80} className="text-[#E9EFEC]" />
              </motion.div>
              <div className="flex justify-center space-x-6 mt-auto">
                {[Camera, Mic, Phone, Share2].map((Icon, index) => (
                  <motion.button 
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#16423C] p-4 rounded-full hover:bg-[#E9EFEC] hover:text-[#16423C] transition duration-300"
                  >
                    <Icon size={24} />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConfirmInformation;