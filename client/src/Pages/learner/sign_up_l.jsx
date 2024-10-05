// import React, { useState } from 'react';
// import { Facebook } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const SignUpPage_l = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Password validation
//         if (password !== confirmPassword) {
//             setPasswordError("Passwords don't match!");
//             return;
//         }
        
//         if (password.length < 8) {
//             setPasswordError("Password must be at least 8 characters long!");
//             return;
//         }
        
//         // Clear any previous error
//         setPasswordError('');

//         // Prepare data for submission
//         const signupData = {
//             username,
//             email,
//             password
//         };

//         try {
//             const response = await axios.post("http://localhost:3000/mp/user/sign-up", {signupData});
//             console.log('Sign up response:', response.data);
//             localStorage.setItem('LToken', response.data.token);
//             Swal.fire({
//                 icon: "success",
//                 title: "Sign up successful!",
//                 showConfirmButton: false,
//                 timer: 1500
//             }).then(() => navigate('/log-in-l'));
//         } catch (error) {
//             console.error('Sign up error:', error);
//             Swal.fire({
//                 icon: "error",
//                 title: "Sign up failed",
//                 text: "Please try again.",
//                 confirmButtonText: "OK"
//             });
//         }


//         // try {
//         //     const response = await axios.post("http://localhost:3000/mp/user/sign-up", {signupData});
//         //     console.log('Sign up response:', response.data);
//         //     localStorage.setItem('LToken', response.data.token);
//         //     alert('Sign up successful!');
//         //     navigate('/log-in-l');
//         // } catch (error) {
//         //     console.error('Sign up error:', error);
//         //     alert('Sign up failed. Please try again.');
//         // }
//     };

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen">
//             {/* Left Side - Welcome Message */}
//             <div className="w-full md:w-1/2 bg-[#034c52] p-8 flex flex-col justify-center items-center text-[#ECDFCC]">
//                 <h1 className="text-5xl font-bold mb-6">Hello.</h1>
//                 <p className="mb-8 text-center">You are just a few steps away from increasing your practical experience.</p>
//                 <div className="space-y-4 w-full max-w-xs">
//                     <p className="text-sm text-center">Create account faster with...</p>
//                     <div className="flex justify-center space-x-4">
//                         <button className="bg-[#ECDFCC] text-[#034c52] py-2 px-4 rounded-md flex items-center justify-center hover:bg-[#D9D9D9] transition duration-300">
//                             Google
//                         </button>
//                         <button className="bg-[#ECDFCC] text-[#034c52] py-2 px-4 rounded-md flex items-center justify-center hover:bg-[#D9D9D9] transition duration-300">
//                             <Facebook className="mr-2" size={20} />
//                             Facebook
//                         </button>
//                     </div>
//                 </div>
//                 <div className="mt-8 flex justify-center items-center">
//                     <p className="text-sm">If you have already an account...</p>
//                     <Link to="/log-in-l">
//                         <button className="mx-2 text-[#ECDFCC] hover:underline">Log in</button>
//                     </Link>
//                 </div>
//             </div>

//             {/* Right Side - Sign Up Form */}
//             <div className="w-full md:w-1/2 bg-[#ECDFCC] p-8 flex flex-col justify-center">
//                 <h2 className="text-3xl font-bold mb-6 text-[#034c52]">Sign up</h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="username" className="block text-sm font-medium text-[#034c52]">User name</label>
//                         <input 
//                             type="text" 
//                             id="username" 
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034c52] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#034c52] p-1 text-[#034c52]" 
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-[#034c52]">Email</label>
//                         <input 
//                             type="email" 
//                             id="email" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034c52] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#034c52] p-1 text-[#034c52]" 
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-[#034c52]">Password</label>
//                         <input 
//                             type="password" 
//                             id="password" 
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034c52] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#034c52] p-1 text-[#034c52]" 
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#034c52]">Confirm Password</label>
//                         <input 
//                             type="password" 
//                             id="confirmPassword" 
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#034c52] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#034c52] p-1 text-[#034c52]" 
//                             required
//                         />
//                     </div>
//                     {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                    
//                     <button type="submit" className="w-full mt-4 bg-[#034c52] text-[#ECDFCC] py-2 px-4 rounded-md hover:bg-[#02383C] transition duration-300">Sign up</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUpPage_l;



//-------------------------------------------------------


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, Facebook, X, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CoffeeShopSignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setPasswordError("Passwords don't match!");
            return;
        }
        
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long!");
            return;
        }
        
        setPasswordError('');

        const signupData = { username, email, password };

        try {
            const response = await axios.post("http://localhost:3000/mp/user/sign-up", {signupData});
            console.log('Sign up response:', response.data);
            localStorage.setItem('LToken', response.data.token);
            Swal.fire({
                icon: "success",
                title: "Sign up successful!",
                showConfirmButton: false,
                timer: 1500
            }).then(() => navigate('/log-in-l'));
        } catch (error) {
            console.error('Sign up error:', error);
            Swal.fire({
                icon: "error",
                title: "Sign up failed",
                text: "Please try again.",
                confirmButtonText: "OK",
                confirmButtonColor: "#6A9C89"
            });
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
                                <h2 className="text-3xl font-bold mb-4">Join ACafe Community</h2>
                                <p className="mb-4">Where knowledge brews and ideas percolate.</p>
                            </div>
                            <div className="space-y-4">
                                <p className="italic">"The only thing better than a cup of coffee is the knowledge you gain with it."</p>
                                <div className="flex items-center space-x-2">
                                    <Coffee size={24} />
                                    <span className="text-xl font-bold">ACafe</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Sign Up Form */}
                        <div className="w-full md:w-1/2 p-8">
                            <button onClick={closePopup} className="absolute top-4 right-4 text-[#16423C] hover:text-[#6A9C89] transition-colors">
                                <X size={24} />
                            </button>
                            <div className="mb-6 text-center">
                                <h2 className="text-3xl font-bold text-[#16423C] mb-2">Sign Up</h2>
                                <p className="text-[#6A9C89]">Join our community of learners and mentors!</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <User className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Lock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                <div className="relative">
                                    <Lock className="absolute top-3 left-3 text-[#6A9C89]" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full pl-10 pr-10 py-2 border border-[#6A9C89] rounded-md focus:outline-none focus:ring-2 focus:ring-[#16423C] bg-[#E9EFEC] text-[#16423C]"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
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
                                    <Link to="/log-in-l" className="text-[#6A9C89] hover:underline">
                                        Log in
                                    </Link>
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-[#6A9C89]"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-[#E9EFEC] text-[#16423C]">Or sign up with</span>
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

export default CoffeeShopSignUp;