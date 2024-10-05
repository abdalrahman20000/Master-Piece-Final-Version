// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AlertCircle } from 'lucide-react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const SignUpPage_m = () => {
//     const navigate = useNavigate();
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [showTooltip, setShowTooltip] = useState({ introVideo: false, cv: false });
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         introVideo: '',
//         cv: '', 
//         experience: '',
//         briefAbout: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value, type } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: type === 'file' ? e.target.files[0] : value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form data submitted:', formData);

//         try {
//             const response = await axios.post("http://localhost:3000/mp/mentor/sign-up", {formData});
//             console.log('Sign up response:', response.data);
//             localStorage.setItem('mToken', response.data.token);
//             Swal.fire({
//                 icon: "success",
//                 title: "Sign up successful!",
//                 showConfirmButton: false,
//                 timer: 1500
//             }).then(setShowConfirmation(true));
//             // alert('Sign up successful!');
//             // setShowConfirmation(true);
//         } catch (error) {
//             console.error('Sign up error:', error);
//             Swal.fire({
//                 icon: "error",
//                 title: "Sign up failed",
//                 text: "Please try again.",
//                 confirmButtonText: "OK"
//             });
//         }
//     };

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen relative">
//             {/* Left Side - Welcome Message */}
//             <motion.div 
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full md:w-1/2 bg-[#034c52] p-8 flex flex-col justify-center items-center text-[#ECDFCC]"
//             >
//                 <h1 className="text-5xl font-bold mb-6">Welcome.</h1>
//                 <p className="mb-8 text-center">Join our community of mentors and make a difference.</p>
//                 <div className="space-y-4 w-full max-w-xs">
//                     <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
//                     <p className="text-center">
//                         We believe in the power of mentorship to transform lives and careers. 
//                         Our platform connects experienced professionals with eager learners, 
//                         creating opportunities for growth and development.
//                     </p>
//                 </div>
//                 <motion.div 
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-8 flex justify-center items-center"
//                 >
//                     <p className="text-sm">Already have an account?</p>
//                     <Link to="/log-in-m">
//                         <button className="mx-2 text-[#ECDFCC] hover:underline">Log in</button>
//                     </Link>
//                 </motion.div>
//             </motion.div>

//             {/* Right Side - Sign Up Form */}
//             <motion.div 
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full md:w-1/2 bg-[#ECDFCC] p-8 flex flex-col justify-center"
//             >
//                 <h2 className="text-3xl font-bold mb-6 text-[#034c52]">Sign up as a Mentor</h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="username" className="block text-sm font-medium text-[#034c52]">User name</label>
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-[#034c52]">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-[#034c52]">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#034c52]">Confirm Password</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div className="relative">
//                         <div className="flex justify-between items-center">
//                             <label htmlFor="introVideo" className="block text-sm font-medium text-[#034c52]">Intro Video URL</label>
//                             <div className="relative">
//                                 <AlertCircle
//                                     className="h-5 w-5 text-[#034c52] cursor-pointer"
//                                     onMouseEnter={() => setShowTooltip(prev => ({ ...prev, introVideo: true }))} 
//                                     onMouseLeave={() => setShowTooltip(prev => ({ ...prev, introVideo: false }))}
//                                 />
//                                 {showTooltip.introVideo && (
//                                     <div className="absolute z-10 right-0 mt-2 w-64 p-2 bg-white rounded-md shadow-lg text-sm text-[#034c52]">
//                                         Google Drive URL or YouTube or any URL to your intro video
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         <input
//                             type="url"
//                             id="introVideo"
//                             name="introVideo"
//                             value={formData.introVideo}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div className="relative">
//                         <div className="flex justify-between items-center">
//                             <label htmlFor="cv" className="block text-sm font-medium text-[#034c52]">CV URL</label>
//                             <div className="relative">
//                                 <AlertCircle
//                                     className="h-5 w-5 text-[#034c52] cursor-pointer"
//                                     onMouseEnter={() => setShowTooltip(prev => ({ ...prev, cv: true }))} 
//                                     onMouseLeave={() => setShowTooltip(prev => ({ ...prev, cv: false }))}
//                                 />
//                                 {showTooltip.cv && (
//                                     <div className="absolute z-10 right-0 mt-2 w-64 p-2 bg-white rounded-md shadow-lg text-sm text-[#034c52]">
//                                         Please provide a URL to your CV (e.g., Google Drive link).
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         <input
//                             type="url"
//                             id="cv"
//                             name="cv"
//                             value={formData.cv}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="briefAbout" className="block text-sm font-medium text-[#034c52]">Brief About You</label>
//                         <textarea
//                             id="briefAbout"
//                             name="briefAbout"
//                             rows="3"
//                             value={formData.briefAbout}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         ></textarea>
//                     </div>
//                     <div>
//                         <label htmlFor="experience" className="block text-sm font-medium text-[#034c52]">Years of Experience</label>
//                         <input
//                             type="number"
//                             id="experience"
//                             name="experience"
//                             min="0"
//                             value={formData.experience}
//                             onChange={handleInputChange}
//                             className="mt-1 block w-full rounded-md border-[#034c52] shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-[#000080] p-1 text-[#034c52]"
//                         />
//                     </div>
//                     <motion.button 
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         type="submit" 
//                         className="w-full bg-[#034c52] mt-4 text-[#ECDFCC] py-2 px-4 rounded-md hover:bg-[#02383C] transition duration-300"
//                     >
//                         Sign up
//                     </motion.button>
//                 </form>
//             </motion.div>

//             {/* Confirmation Message */}
//             {showConfirmation && (
//                 <motion.div 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//                 >
//                     <motion.div 
//                         initial={{ scale: 0.8 }}
//                         animate={{ scale: 1 }}
//                         className="bg-white p-8 rounded-lg text-center"
//                     >
//                         <p className="text-[#034c52] text-xl mb-4">Your data has been uploaded and is being reviewed. Once completed, you will be contacted.</p>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => { setShowConfirmation(false); navigate("/"); }}
//                             className="bg-[#034c52] text-[#ECDFCC] py-2 px-4 rounded-md hover:bg-[#02383C] transition duration-300"
//                         >
//                             Done
//                         </motion.button>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export default SignUpPage_m;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, Coffee, X, Mail, Lock, User, FileText, Video, Clock } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

const SignUpPage_m = () => {
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showTooltip, setShowTooltip] = useState({ introVideo: false, cv: false });
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        introVideo: '',
        cv: '', 
        experience: '',
        briefAbout: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? e.target.files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        try {
            const response = await axios.post("http://localhost:3000/mp/mentor/sign-up", {formData});
            console.log('Sign up response:', response.data);
            localStorage.setItem('mToken', response.data.token);
            Swal.fire({
                icon: "success",
                title: "Sign up successful!",
                showConfirmButton: false,
                timer: 1500
            }).then(setShowConfirmation(true));
        } catch (error) {
            console.error('Sign up error:', error);
            Swal.fire({
                icon: "error",
                title: "Sign up failed",
                text: "Please try again.",
                confirmButtonText: "OK"
            });
        }
    };

    const closePopup = () => {
        setShowConfirmation(false);
        navigate('/');
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gradient-to-br from-[#E9EFEC] to-[#C4DAD2] text-[#16423C] border-[18px] border-[#16423C] flex items-center justify-center p-4 z-50"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    className="bg-[#E9EFEC] rounded-lg shadow-xl w-full max-w-4xl relative overflow-hidden flex"
                >
                    {/* Left side - Decorative */}
                    <div className="hidden md:block w-1/2 bg-[#16423C] p-8 text-[#E9EFEC] flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Join Our Mentor Community</h2>
                            <p className="mb-4">Share your expertise and make a difference in learners' lives.</p>
                        </div>
                        <div className="space-y-4">
                            <p className="italic">"The best way to learn is to teach."</p>
                            <div className="flex items-center space-x-2">
                                <Coffee size={24} />
                                <span className="text-xl font-bold">MentorCafe</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Sign Up Form */}
                    <div className="w-full md:w-1/2 p-8 overflow-y-auto max-h-[80vh]">
                        <button onClick={() => navigate('/')} className="absolute top-4 right-4 text-[#16423C] hover:text-[#6A9C89] transition-colors">
                            <X size={24} />
                        </button>
                        <h2 className="text-3xl font-bold mb-6 text-[#16423C]">Sign Up as a Mentor</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="relative">
                                <User className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    placeholder="Username"
                                    className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm Password"
                                    className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                            </div>
                            <div className="relative">
                                <Video className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="url"
                                    id="introVideo"
                                    name="introVideo"
                                    value={formData.introVideo}
                                    onChange={handleInputChange}
                                    placeholder="Intro Video URL"
                                    className="w-full pl-10 pr-10 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                                <AlertCircle
                                    className="absolute top-3 right-3 h-5 w-5 text-[#6A9C89] cursor-pointer"
                                    onMouseEnter={() => setShowTooltip(prev => ({ ...prev, introVideo: true }))} 
                                    onMouseLeave={() => setShowTooltip(prev => ({ ...prev, introVideo: false }))}
                                />
                                {showTooltip.introVideo && (
                                    <div className="absolute z-10 right-0 mt-2 w-64 p-2 bg-white rounded-md shadow-lg text-sm text-[#16423C]">
                                        Google Drive URL or YouTube or any URL to your intro video
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <FileText className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="url"
                                    id="cv"
                                    name="cv"
                                    value={formData.cv}
                                    onChange={handleInputChange}
                                    placeholder="CV URL"
                                    className="w-full pl-10 pr-10 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                                <AlertCircle
                                    className="absolute top-3 right-3 h-5 w-5 text-[#6A9C89] cursor-pointer"
                                    onMouseEnter={() => setShowTooltip(prev => ({ ...prev, cv: true }))} 
                                    onMouseLeave={() => setShowTooltip(prev => ({ ...prev, cv: false }))}
                                />
                                {showTooltip.cv && (
                                    <div className="absolute z-10 right-0 mt-2 w-64 p-2 bg-white rounded-md shadow-lg text-sm text-[#16423C]">
                                        Please provide a URL to your CV (e.g., Google Drive link).
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <textarea
                                    id="briefAbout"
                                    name="briefAbout"
                                    rows="3"
                                    value={formData.briefAbout}
                                    onChange={handleInputChange}
                                    placeholder="Brief About You"
                                    className="w-full pl-4 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                ></textarea>
                            </div>
                            <div className="relative">
                                <Clock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    min="0"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    placeholder="Years of Experience"
                                    className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                />
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit" 
                                className="w-full bg-gradient-to-r from-[#6A9C89] to-[#16423C] text-white py-2 rounded-md hover:opacity-90 transition-opacity"
                            >
                                Sign Up
                            </motion.button>
                        </form>
                        <div className="mt-6 text-center">
                            <p className="text-[#16423C] text-sm">
                                Already have an account?{' '}
                                <Link to="/log-in-m" className="text-[#6A9C89] hover:underline">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Confirmation Message */}
            {showConfirmation && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="bg-white p-8 rounded-lg text-center"
                    >
                        <p className="text-[#16423C] text-xl mb-4">Your data has been uploaded and is being reviewed. Once completed, you will be contacted.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={closePopup}
                            className="bg-gradient-to-r from-[#6A9C89] to-[#16423C] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                        >
                            Done
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SignUpPage_m;
