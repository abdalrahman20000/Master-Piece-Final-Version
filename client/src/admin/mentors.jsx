import React, { useState, useEffect } from 'react';
import { UserCheck, Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMentors, updateMentorStatus } from "../Redux/slice/mentorSlice";
import { useDispatch, useSelector } from "react-redux";

const PersonCard = ({ person, onViewDetails, type }) => (
    <motion.div
        className="bg-[#E9EFEC] rounded-lg shadow-md p-4 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div className={`absolute top-2 right-2 ${person.isActive ? 'text-green-500' : 'text-red-500'}`}>
            {person.isActive ? <CheckCircle size={20} /> : <XCircle size={20} />}
        </div>
        <div className="flex justify-center mb-3">
            <img src={person.picture} alt={person.name} className="w-24 h-24 rounded-full object-cover bg-gradient-to-r  from-[#377c9f] to-[#275D71]" />
        </div>
        <h3 className="text-lg font-semibold text-center text-[#16423C]">{person.name}</h3>
        <p className="text-[#6A9C89] text-center text-sm mb-3">
            {type === 'mentor' ? person.expertise : person.email}
        </p>
        <div className="flex justify-between text-sm text-[#16423C] mb-3">
            <span><UserCheck size={16} className="inline mr-1" /> {person.sessions_counter} sessions</span>
            <span><Clock size={16} className="inline mr-1" /> {person.hours_counter} hours</span>
        </div>
        <button
            onClick={() => onViewDetails(person)}
            className="w-full bg-[#16423C] text-[#E9EFEC] py-2 px-3 rounded text-sm hover:bg-[#6A9C89] transition duration-200"
        >
            View Details
        </button>
    </motion.div>
);

const MentorDetailsModal = ({ mentor, onClose, onToggleStatus }) => (
    <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="bg-[#E9EFEC] rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
        >
            <div className="flex justify-between items-center p-4 border-b border-[#6A9C89]">
                <h2 className="text-xl font-semibold text-[#16423C]">{mentor.name}</h2>
                <button onClick={onClose} className="text-[#6A9C89] hover:text-[#16423C]">
                    <XCircle size={20} />
                </button>
            </div>
            <div className="p-4">
                <div className="flex mb-4">
                    <img src={mentor.picture} alt={mentor.name} className="w-24 h-24 rounded-full object-cover mr-4" />
                    <div>
                        <p className="text-[#16423C] text-sm mb-1"><strong>Email:</strong> {mentor.email}</p>
                        <p className="text-[#16423C] text-sm mb-1"><strong>Sessions:</strong> {mentor.sessions_counter}</p>
                        <p className="text-[#16423C] text-sm mb-1"><strong>Hours:</strong> {mentor.hours_counter}</p>
                        <p className="text-[#16423C] text-sm mb-1"><strong>Experience:</strong> {mentor.experience} years</p>
                        <p className="text-[#16423C] text-sm mb-1">
                            <strong>Status:</strong>
                            {mentor.isActive ? (
                                <span className="text-green-600 ml-1">Active</span>
                            ) : (
                                <span className="text-red-600 ml-1">Inactive</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-md font-semibold mb-1 text-[#16423C]">Bio</h3>
                    <p className="text-[#6A9C89] text-sm">{mentor.briefAbout}</p>
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={() => onToggleStatus(mentor._id)}
                        className={`py-2 px-4 rounded text-sm ${mentor.isActive
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-green-600 hover:bg-green-700'
                            } text-[#E9EFEC] transition duration-200`}
                    >
                        {mentor.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded text-sm hover:bg-[#16423C] transition duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </motion.div>
    </motion.div>
);




// const MentorsPage = ({ mentors, onToggleStatus }) => {
const MentorsPage = ({ onToggleStatus }) => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const dispatch = useDispatch();
    const { accepted_mentors } = useSelector((state) => (state.mentors));
    // console.log(mentors);

    const handleViewDetails = (mentor) => {
        setSelectedMentor(mentor);
    };

    const handleCloseModal = () => {
        setSelectedMentor(null);
    };

    const handleToggleStatus = async (mentor_id) => {
        try {
            await dispatch(updateMentorStatus(mentor_id));
        } catch (err) {
            console.log(err);
        }
        onToggleStatus(mentor_id);
        setSelectedMentor(prev => prev ? { ...prev, isActive: !prev.isActive } : null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchMentors());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Mentors</h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {accepted_mentors.map(mentor => (
                    <PersonCard key={mentor._id} person={mentor} onViewDetails={handleViewDetails} type="mentor" />
                ))}
            </motion.div>
            <AnimatePresence>
                {selectedMentor && (
                    <MentorDetailsModal
                        mentor={selectedMentor}
                        onClose={handleCloseModal}
                        onToggleStatus={handleToggleStatus}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MentorsPage;