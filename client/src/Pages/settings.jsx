import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion';
import { User, Clock, Users, LogOut } from 'lucide-react';
import { fetchUser, updateUser } from "../Redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SettingsPopups = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);
    console.log(user);
    const [favoritesMentors, setFavoritesMentors] = useState(user.favorite_mentors || []);
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        id: user._id || '',
        name: user.name || '',
        email: user.email || '',
        // phone: user.phone || '',
        // status: user.isActive ? 'active' : 'inactive'
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchUser());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        setFavoritesMentors(user.favorite_mentors || []);
        setProfileData({
            id: user._id || '',
            name: user.name || '',
            email: user.email || '',
            // phone: user.phone || '',
            // status: user.isActive ? 'active' : 'inactive'
        });
    }, [user]);

    const tabs = [
        { name: 'Profile', icon: User },
        { name: 'Subscription', icon: Clock },
        { name: 'Favorite Mentors', icon: Users },
        { name: 'Log out', icon: LogOut },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateProfile = async () => {
        // console.log("-----------------");
        if (isEditing) {
            try {
                await dispatch(updateUser(profileData));
            } catch (err) {
                console.log(err);
            }
            // console.log('Updating profile with:', profileData);
        }
        setIsEditing(!isEditing);
    };

    const viewProfileHandle = async (mentor_id) => {
        // console.log("-----------------");
        // if (isEditing) {
        //     try {
        //         await dispatch(updateUser(profileData));
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        navigate(`/mentor-profile/${mentor_id}`);

    };

    function sub_handle() {
        navigate("/subscription");
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'Profile':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r  from-[#377c9f] to-[#275D71]"
                            >
                                <img src={user.picture || "/api/placeholder/128/128"} alt="User" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <input
                            name="name"
                            className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
                            value={profileData.name}
                            onChange={handleInputChange}
                            readOnly={!isEditing}
                        />
                        <input
                            name="email"
                            className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
                            value={profileData.email}
                            onChange={handleInputChange}
                            readOnly={!isEditing}
                        />
                        {/* <input 
                            name="phone"
                            className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]" 
                            value={profileData.phone}
                            onChange={handleInputChange}
                            readOnly={!isEditing}
                            placeholder="Phone number"
                        />
                        <select 
                            name="status"
                            className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
                            value={profileData.status}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select> */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full p-3 bg-[#6A9C89] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
                            onClick={handleUpdateProfile}
                        >
                            {isEditing ? 'Save Profile' : 'Edit Profile'}
                        </motion.button>
                    </motion.div>
                );
            case 'Subscription':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        <div className="bg-[#6A9C89] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-bold mb-4">Current Subscription</h3>
                            <div className="space-y-2">
                                <p>Available Hours: {user.available_hours || 0}</p>
                                <p>Session Type: {user.session_type || 'Standard'}</p>
                                <p>Session Counter: {user.sessions_counter || 0}</p>
                                <p>Hours Counter: {user.hours_counter || 0}</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={sub_handle}
                            className="w-full p-3 bg-[#16423C] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
                        >
                            Upgrade Subscription
                        </motion.button>
                    </motion.div>
                );
            case 'Favorite Mentors':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-4"
                    >
                        {favoritesMentors.map((mentor) => (
                            <motion.div
                                key={mentor._id}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-between bg-[#6A9C89] p-4 rounded-lg"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src={mentor.picture} alt={mentor.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{mentor.name}</div>
                                        <div className="text-sm text-[#E9EFEC]">{mentor.email}</div>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => { viewProfileHandle(mentor._id) }}
                                    className="bg-[#16423C] text-white px-4 py-2 rounded-full"
                                >
                                    View Profile
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'Log out':
                return (
                    <div>
                        {navigate("/")}
                    </div>
                );
            default:
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        Content for {activeTab}
                    </motion.div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-[#E9EFEC] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-[#16423C] text-white p-6">
                        <h2 className="text-2xl font-bold mb-6">Settings</h2>
                        <nav className="space-y-2">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full text-left p-3 rounded-lg flex items-center space-x-3 ${activeTab === tab.name ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89] hover:bg-opacity-50'
                                        }`}
                                    onClick={() => setActiveTab(tab.name)}
                                >
                                    <tab.icon size={20} />
                                    <span>{tab.name}</span>
                                </motion.button>
                            ))}
                        </nav>
                    </div>
                    <div className="md:w-2/3 p-6">
                        <h2 className="text-2xl font-bold text-[#16423C] mb-6">{activeTab}</h2>
                        <AnimatePresence mode="wait">
                            {renderContent()}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopups;