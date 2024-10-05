import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const initialOptions = {
    clientId: "ASOd1tNnXrE0uhq8oiUvibiaq-MrrsClY4tbR9rFQwFs8ioNNimxG_8t8HyBL8o3_26f8VqcNEHpkglO",
};

const styles = {
    shape: "rect",
    color: "white",
};

async function createOrder(plan) {
    console.log('Creating order with plan:', plan);

    try {
        const response = await axios.post("http://localhost:3000/mp/mentor/order", { plan })
            .catch(err => { console.log(err) });
        console.log('Order response:', response.data);
    } catch (error) {
        console.error('Order error:', error);
    }
}

const onApprove = async (data, actions, plan, onClose) => {
    await actions.order.capture();
    await createOrder(plan);
    Swal.fire({
        icon: "success",
        title: "Your order was completed successfully!",
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        onClose();
    });
    console.log(`You have successfully subscribed to ${data.subscriptionID}`);
}

const PlanCard = ({ plan, onSubscribe, isActive }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-gradient-to-br from-[#034c52] to-[#023c42] text-[#ECDFCC] p-6 rounded-xl flex flex-col justify-between ${isActive ? 'border-2 border-[#ECDFCC]' : ''}`}
    >
        <div>
            <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
            <p className="text-3xl font-bold mb-4">${plan.price.toFixed(2)}<span className="text-sm font-normal">/month</span></p>
            <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-[#ECDFCC]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <button
            onClick={() => onSubscribe(plan)}
            className="w-full bg-[#ECDFCC] text-[#034c52] px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 font-bold flex items-center justify-center"
        >
            Subscribe Now <ArrowRight className="ml-2" />
        </button>
    </motion.div>
);

const CheckoutPopup = ({ plan, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
        <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="bg-[#034c52] text-[#ECDFCC] p-8 rounded-lg max-w-md w-full relative"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#ECDFCC] hover:text-white transition-colors"
            >
                <X size={24} />
            </button>
            <h2 className="text-3xl font-bold mb-6 text-[#ECDFCC]">Checkout</h2>
            <div className="mb-6 p-6 bg-[#023c42] rounded-lg">
                <p className="mb-2 text-xl">Selected Plan: <span className="font-bold">{plan.type}</span></p>
                <p className="text-3xl font-bold text-[#ECDFCC] mb-4">${plan.price.toFixed(2)}</p>
                <p className="text-lg">Total Hours: {plan.hours}</p>
                <p className="text-lg">Session Type: {plan.sessionType} hour(s)</p>
            </div>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={styles}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    // value: plan.price.toFixed(2)
                                    value: 0.01
                                }
                            }]
                        });
                    }}
                    onApprove={(data, actions) => onApprove(data, actions, plan, onClose)}
                />
            </PayPalScriptProvider>
            <button onClick={onClose} className="w-full bg-[#023c42] text-[#ECDFCC] px-6 py-4 rounded-full hover:bg-opacity-90 transition duration-300 font-bold mt-4 text-lg">
                Cancel
            </button>
        </motion.div>
    </motion.div>
);

const SubPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            type: 'STARTER',
            price: 49.99,
            features: [
                'Teach up to 20 hours/month',
                'Basic analytics',
                'Standard support',
                '1 subject specialization',
                'Access to teaching resources'
            ]
        },
        {
            type: 'PROFESSIONAL',
            price: 99.99,
            features: [
                'Teach up to 50 hours/month',
                'Advanced analytics',
                'Priority support',
                '3 subject specializations',
                'Access to premium teaching resources',
                'Promotional features for your profile'
            ]
        },
        {
            type: 'EXPERT',
            price: 199.99,
            features: [
                'Unlimited teaching hours',
                'Comprehensive analytics suite',
                '24/7 dedicated support',
                'Unlimited subject specializations',
                'Access to exclusive teaching resources',
                'Featured profile placement',
                'Ability to create and sell courses'
            ]
        },
    ];

    const handleSubscribe = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e9dfd0] to-[#D4C5B0] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold text-[#034c52] text-center mb-4"
                >
                    Empower Your Teaching Journey
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-[#034c52] text-center mb-12"
                >
                    Choose the perfect plan to showcase your expertise and inspire learners worldwide.
                </motion.p>

                <div className="flex justify-center mb-8">
                    <div className="bg-[#034c52] p-1 rounded-full">
                        <div className='px-4 py-2 text-[#ECDFCC]'>
                            Monthly Subscription Options for Teachers
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.type}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <PlanCard
                                plan={plan}
                                onSubscribe={handleSubscribe}
                                isActive={plan.type === 'PROFESSIONAL'}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedPlan && (
                    <CheckoutPopup plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default SubPage;