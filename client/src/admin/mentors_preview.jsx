import React, { useState, useEffect } from 'react';
import { UserCheck, Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMentors, update_accepte } from "../Redux/slice/mentorSlice";
import { useDispatch, useSelector } from "react-redux";

const MentorPreviewCard = ({ mentor, onViewDetails }) => (
    <motion.div
        className="bg-[#E9EFEC] rounded-lg shadow-md p-4 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div className={`absolute top-2 right-2 ${mentor.isAccepted ? 'text-green-500' : 'text-yellow-500'}`}>
            {mentor.isAccepted ? <CheckCircle size={20} /> : <Clock size={20} />}
        </div>
        <div className="flex justify-center mb-3">
            <img src={mentor.picture} alt={mentor.name} className="w-24 h-24 rounded-full object-cover bg-gradient-to-r  from-[#377c9f] to-[#275D71]" />
        </div>
        <h3 className="text-lg font-semibold text-center text-[#16423C]">{mentor.name}</h3>
        <p className="text-[#6A9C89] text-center text-sm mb-3">{mentor.expertise}</p>
        <div className="flex justify-between text-sm text-[#16423C] mb-3">
            <span><UserCheck size={16} className="inline mr-1" /> {mentor.experience} years</span>
            <span>{mentor.isAccepted ? 'Accepted' : 'Pending'}</span>
        </div>
        <button
            onClick={() => onViewDetails(mentor)}
            className="w-full bg-[#16423C] text-[#E9EFEC] py-2 px-3 rounded text-sm hover:bg-[#6A9C89] transition duration-200"
        >
            View Details
        </button>
    </motion.div>
);


const getEmbedUrl = (url) => {
    const fileId = url.match(/[-\w]{25,}/);
    if (fileId) {
        return `https://drive.google.com/file/d/${fileId[0]}/preview`;
    }
    return url; // Return original URL if not a Google Drive link
};

const MentorPreviewModal = ({ mentor, onClose, onAccept }) => (
    <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="bg-[#E9EFEC] rounded-lg shadow-lg max-w-2xl w-full"
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
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <img src={mentor.picture} alt={mentor.name} className="w-48 h-48 object-cover rounded-lg mb-4" />
                    <p className="text-[#16423C] text-sm mb-2"><strong>Email:</strong> {mentor.email}</p>
                    <p className="text-[#16423C] text-sm mb-2"><strong>Experience:</strong> {mentor.experience} years</p>
                    <p className="text-[#16423C] text-sm mb-2"><strong>Accepted:</strong> {mentor.isAccepted ? 'Yes' : 'No'}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#16423C]">Intro Video</h3>
                    <iframe
                        src={getEmbedUrl(mentor.introVideo)}
                        width="100%"
                        height="200"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="mb-4 h-44 rounded-lg"
                    ></iframe>
                    <h3 className="text-lg font-semibold mb-2 text-[#16423C]">CV</h3>
                    <a href={mentor.cv} target="_blank" rel="noopener noreferrer" className="text-[#6A9C89] hover:underline">View CV</a>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#16423C]">Brief</h3>
                    <p className="text-[#6A9C89] text-sm">{mentor.briefAbout}</p>
                </div>
            </div>
            <div className="flex justify-end space-x-3 p-4 border-t border-[#6A9C89]">
                {!mentor.isAccepted && (
                    <button
                        onClick={() => onAccept(mentor._id)}
                        className="bg-green-600 text-[#E9EFEC] py-2 px-4 rounded text-sm hover:bg-green-700 transition duration-200"
                    >
                        Accept
                    </button>
                )}
                <button
                    onClick={onClose}
                    className="bg-[#6A9C89] text-[#E9EFEC] py-2 px-4 rounded text-sm hover:bg-[#16423C] transition duration-200"
                >
                    Close
                </button>
            </div>
        </motion.div>
    </motion.div>
);


// const MentorsPreviewPage = ({ mentors, onAccept }) => {
const MentorsPreviewPage = ({ onAccept }) => {
    const [selectedMentor, setSelectedMentor] = useState(null);
    const dispatch = useDispatch();
    const { mentors } = useSelector((state) => (state.mentors));
    console.log(mentors);

    const handleViewDetails = (mentor) => {
        setSelectedMentor(mentor);
    };

    const handleCloseModal = () => {
        setSelectedMentor(null);
    };

    const handleAccept = async (mentor_id) => {
        try {
            await dispatch(update_accepte(mentor_id));
            setSelectedMentor(prev => prev && prev._id === mentor_id ? { ...prev, isAccepted: true } : prev);
            // Refresh the mentors list
            dispatch(fetchMentors());
        } catch (err) {
            console.log(err);
        }
        onAccept(mentor_id);
        setSelectedMentor(prev => prev ? { ...prev, isAccepted: 'accepted' } : null);
    };
    

    useEffect(() => {
        dispatch(fetchMentors());
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Mentors Preview</h2>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {mentors.map(mentor => (
                    <MentorPreviewCard key={mentor._id} mentor={mentor} onViewDetails={handleViewDetails} />
                ))}
            </motion.div>
            <AnimatePresence>
                {selectedMentor && (
                    <MentorPreviewModal
                        mentor={selectedMentor}
                        onClose={handleCloseModal}
                        onAccept={handleAccept}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MentorsPreviewPage;