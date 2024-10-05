import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Send, Coffee } from 'lucide-react';
import Swal from 'sweetalert2';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/mp/contact/sent-message', {formData});
      Swal.fire({
        icon: "success",
        title: "Message sent successful",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({
        icon: "error",
        title: "Somthing wrong !",
        text: "Please try again.",
        confirmButtonText: "OK"
      });
    }
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

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

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col bg-[#E9EFEC] text-[#16423C] relative"
    >
      <div className="flex-grow container mx-auto px-4 sm:px-8 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#16423C] text-center mb-8 md:mb-12"
        >
          Get in Touch
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#C4DAD2] rounded-lg shadow-lg w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8"
        >
          <p className="text-center text-base md:text-lg mb-6 md:mb-8">We'd love to hear from you! Drop us a message or reach out through your preferred channel.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16423C] hover:bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded-full flex items-center transition duration-300 text-sm md:text-base"
            >
              <Mail className="mr-2" size={16} />
              Email
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6A9C89] hover:bg-[#16423C] text-[#E9EFEC] py-2 px-4 rounded-full flex items-center transition duration-300 text-sm md:text-base"
            >
              <Phone className="mr-2" size={16} />
              Phone
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#16423C] hover:bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded-full flex items-center transition duration-300 text-sm md:text-base"
            >
              <Facebook className="mr-2" size={16} />
              Facebook
            </motion.button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 md:py-3 bg-[#E9EFEC] border border-[#6A9C89] rounded-full focus:outline-none focus:ring-2 focus:ring-[#16423C] text-sm md:text-base"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-2 md:py-3 bg-[#E9EFEC] border border-[#6A9C89] rounded-full focus:outline-none focus:ring-2 focus:ring-[#16423C] text-sm md:text-base"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 md:py-3 bg-[#E9EFEC] border border-[#6A9C89] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C] text-sm md:text-base"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-[#16423C] hover:bg-[#6A9C89] text-[#E9EFEC] font-bold py-2 md:py-3 px-4 rounded-full transition duration-300 text-sm md:text-base flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="mr-2" size={16} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default ContactForm;