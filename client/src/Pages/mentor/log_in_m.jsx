import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Facebook, X, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LogInPage_m = () => {
    const navigate = useNavigate();
    const [mentorData, setMentorData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMentorData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/mp/mentor/log-in', mentorData);
            console.log('Login response:', response.data);

            localStorage.setItem('mToken', response.data.token);
            localStorage.setItem('userType', "mentor");
            Swal.fire({
                icon: "success",
                title: "Welcome back, Mentor!",
                text: "You've successfully logged in.",
                showConfirmButton: false,
                timer: 1500
            }).then(() => navigate('/m'));
            
        } catch (err) {
            console.error('Login error:', err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password. Please try again.",
                confirmButtonText: "OK",
                confirmButtonColor: "#6A9C89"
            });
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setTimeout(() => navigate('/'), 300);
    };

    return (
        <AnimatePresence>
            {isPopupOpen && (
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
                                <h2 className="text-3xl font-bold mb-4">Welcome Back, Mentor</h2>
                                <p className="mb-4">Your expertise brews success for learners.</p>
                            </div>
                            <div className="space-y-4">
                                <p className="italic">"The best way to learn is to teach."</p>
                                <div className="flex items-center space-x-2">
                                    <Coffee size={24} />
                                    <span className="text-xl font-bold">MentorCafe</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Login Form */}
                        <div className="w-full md:w-1/2 p-8">
                            <button onClick={closePopup} className="absolute top-4 right-4 text-[#16423C] hover:text-[#6A9C89] transition-colors">
                                <X size={24} />
                            </button>
                            <div className="mb-6 text-center">
                                <h2 className="text-3xl font-bold text-[#16423C] mb-2">Mentor Log In</h2>
                                <p className="text-[#6A9C89]">Share your expertise today!</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <Mail className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={mentorData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={mentorData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-10 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-3 right-3 text-[#6A9C89]"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#6A9C89] to-[#16423C] text-white py-2 rounded-md hover:opacity-90 transition-opacity"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Log In'}
                                </motion.button>
                            </form>
                            <div className="mt-6 text-center">
                                <p className="text-[#16423C] text-sm">
                                    Don't have a mentor account?{' '}
                                    <Link to="/sign-up-m" className="text-[#6A9C89] hover:underline">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#6A9C89]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-[#E9EFEC] text-[#16423C]">Or continue with</span>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full inline-flex justify-center py-2 px-4 border border-[#6A9C89] rounded-md shadow-sm bg-[#E9EFEC] text-sm font-medium text-[#16423C] hover:bg-[#C4DAD2]"
                                        >
                                            <Facebook className="w-5 h-5" />
                                            <span className="ml-2">Facebook</span>
                                        </motion.button>
                                    </div>
                                    <div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full inline-flex justify-center py-2 px-4 border border-[#6A9C89] rounded-md shadow-sm bg-[#E9EFEC] text-sm font-medium text-[#16423C] hover:bg-[#C4DAD2]"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                            </svg>
                                            <span className="ml-2">Google</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LogInPage_m;