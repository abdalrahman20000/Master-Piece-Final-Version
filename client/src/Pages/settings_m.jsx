import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, CreditCard, Bell, LogOut } from 'lucide-react';
import { fetchMentor  } from "../Redux/slice/mentorSlice";
import { useDispatch, useSelector } from 'react-redux';

const Settings_popups_m = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mentor } = useSelector((state) => (state.mentors));
  // console.log(mentor);

  const [activeTab, setActiveTab] = useState('Profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    id: mentor?._id || '',
    name: mentor?.name || '',
    email: mentor?.email || '',
  });

  useEffect(() => {
    setProfileData({
      id: mentor?._id || '',
      name: mentor?.name || '',
      email: mentor?.email || '',
    });
  }, [mentor]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMentor());
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  const tabs = [
    { name: 'Profile', icon: User },
    // { name: 'Cards', icon: CreditCard },
    // { name: 'Alerts', icon: Bell },
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
    if (isEditing) {
      try {
        await dispatch(updateUser(profileData));
        console.log('Updating profile with:', profileData);
      } catch (err) {
        console.log(err);
      }
    }
    setIsEditing(!isEditing);
  };

  function add_card_handle() {
    navigate("/payment");
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
                <img src={mentor.picture || "/api/placeholder/128/128"} alt="mentor" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <input
              name="name"
              className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
              placeholder="User name"
              value={profileData.name}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
            <input
              name="email"
              className="w-full p-3 bg-[#E9EFEC] text-[#16423C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9C89]"
              placeholder="Email"
              value={profileData.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
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
      case 'Cards':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="bg-[#6A9C89] p-4 rounded-lg text-white">
              <div className="flex justify-between items-center mb-2">
                <span>Card name</span>
                <div className="w-8 h-5 bg-red-500 rounded"></div>
              </div>
              <div className="mb-2">0000 0000 0000 0000</div>
              <div className="flex justify-between">
                <span>00/00</span>
                <span>000</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-[#6A9C89] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Update
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-dashed border-[#6A9C89] rounded-lg p-8 flex items-center justify-center cursor-pointer"
              onClick={add_card_handle}
            >
              <span className="text-4xl text-[#6A9C89]">+</span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 bg-[#6A9C89] text-white rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Add
            </motion.button>
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

export default Settings_popups_m;