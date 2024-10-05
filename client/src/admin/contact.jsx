import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { fetchContactMessages } from "../Redux/slice/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const MessageModal = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-[#E9EFEC] rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b border-[#6A9C89]">
                <h2 className="text-xl font-semibold text-[#16423C]">{message.name}</h2>
                <button onClick={onClose} className="text-[#6A9C89] hover:text-[#16423C]">
                    <X size={20} />
                </button>
            </div>
            <div className="p-4">
                <p className="text-[#16423C] text-sm mb-2"><strong>Email:</strong> {message.email}</p>
                <p className="text-[#16423C] text-sm mb-2"><strong>Date:</strong> {message.createdAt.substring(0, 10)}</p>
                <p className="text-[#16423C] text-sm mb-4"><strong>Message:</strong></p>
                <p className="text-[#6A9C89] text-sm whitespace-pre-wrap">{message.message}</p>
            </div>
            <div className="flex justify-end p-4 border-t border-[#6A9C89]">
                <button
                    onClick={onClose}
                    className="bg-[#6A9C89] text-[#E9EFEC] py-1 px-3 rounded text-sm hover:bg-[#16423C] transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
);

// const ContactMessagesPage = ({ messages }) => {
const ContactMessagesPage = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => (state.contact));
    console.log(messages);

    const handleViewMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleCloseModal = () => {
        setSelectedMessage(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchContactMessages());
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
            <div className="grid gap-4">
                {messages.map(message => (
                    <div key={message.id} className="bg-[#E9EFEC] rounded-lg shadow-md p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-[#16423C]">{message.name}</h3>
                            <span className="text-sm text-[#6A9C89]">{message.createdAt.substring(0, 10)}</span>
                        </div>
                        <p className="text-[#16423C] text-sm mb-2">{message.email}</p>
                        <p className="text-[#6A9C89] text-sm mb-3">{message.message.substring(0, 100)}...</p>
                        <button
                            onClick={() => handleViewMessage(message)}
                            className="bg-[#16423C] text-[#E9EFEC] py-1 px-3 rounded text-sm hover:bg-[#6A9C89] transition duration-200"
                        >
                            View Full Message
                        </button>
                    </div>
                ))}
            </div>
            {selectedMessage && (
                <MessageModal
                    message={selectedMessage}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ContactMessagesPage;