// import React, { useState } from 'react';
// import { ArrowRight, Plus, Minus, Check } from 'lucide-react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';
// import axios from "axios";

// // PayPal options
// const initialOptions = {
//     clientId: "ASOd1tNnXrE0uhq8oiUvibiaq-MrrsClY4tbR9rFQwFs8ioNNimxG_8t8HyBL8o3_26f8VqcNEHpkglO",
// };

// const styles = {
//     shape: "rect",
//     color: "white",
// };

// // Create order function
// async function createOrder(plan) {
//     console.log('Creating order with plan:', plan);

//     try {
//         const response = await axios.post("http://localhost:3000/mp/user/order", { plan });
//         console.log('Order response:', response.data);
//     } catch (error) {
//         console.error('Order error:', error);
//     }
// }

// // Handle PayPal approval
// const onApprove = async (data, actions, plan, onClose) => {
//     await actions.order.capture();
//     await createOrder(plan);
//     Swal.fire({
//         icon: "success",
//         title: "Your order was completed successfully!",
//         showConfirmButton: false,
//         timer: 1500
//     }).then(() => {
//         onClose();
//     });
//     console.log(`You have successfully subscribed to ${data.subscriptionID}`);
// }

// const PlanCard = ({ plan, onSubscribe, isActive }) => (
//     <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`bg-gradient-to-br from-[#034c52] to-[#023c42] text-[#ECDFCC] p-6 rounded-xl flex flex-col justify-between ${isActive ? 'border-2 border-[#ECDFCC]' : ''}`}
//     >
//         <div>
//             <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
//             <p className="text-3xl font-bold mb-4">${plan.price.toFixed(2)}<span className="text-sm font-normal">/month</span></p>
//             <ul className="space-y-2 mb-6">
//                 <li className="flex items-center">
//                     <Check className="w-5 h-5 mr-2 text-[#ECDFCC]" />
//                     <span>{plan.hours} hours total</span>
//                 </li>
//                 <li className="flex items-center">
//                     <Check className="w-5 h-5 mr-2 text-[#ECDFCC]" />
//                     <span>{plan.sessionType} hour session type</span>
//                 </li>
//                 <li className="flex items-center">
//                     <Check className="w-5 h-5 mr-2 text-[#ECDFCC]" />
//                     <span>Advanced analytics</span>
//                 </li>
//                 <li className="flex items-center">
//                     <Check className="w-5 h-5 mr-2 text-[#ECDFCC]" />
//                     <span>Priority support</span>
//                 </li>
//             </ul>
//         </div>
//         <button
//             onClick={() => onSubscribe(plan)}
//             className="w-full bg-[#ECDFCC] text-[#034c52] px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 font-bold flex items-center justify-center"
//         >
//             {isActive ? 'Current Plan' : 'Choose Plan'} <ArrowRight className="ml-2" />
//         </button>
//     </motion.div>
// );

// const CustomSubscription = ({ onSubscribe }) => {
//     const [hours, setHours] = useState(1);
//     const [sessionType, setSessionType] = useState(1);

//     const increment = (setter, max) => setter(prev => Math.min(prev + 1, max));
//     const decrement = (setter) => setter(prev => Math.max(1, prev - 1));

//     const calculatePrice = () => {
//         return hours * 10; // $10 per hour
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="bg-gradient-to-br from-[#034c52] to-[#023c42] text-[#ECDFCC] p-6 rounded-xl flex flex-col justify-between"
//         >
//             <div>
//                 <h3 className="text-xl font-bold mb-2">Custom Plan</h3>
//                 <p className="text-3xl font-bold mb-4">${calculatePrice().toFixed(2)}<span className="text-sm font-normal">/month</span></p>
//                 <div className="mb-4">
//                     <p className="mb-2">Total Hours:</p>
//                     <div className="flex items-center">
//                         <button onClick={() => decrement(setHours)} className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full"><Minus size={16} /></button>
//                         <span className="mx-4 text-xl font-bold">{hours}</span>
//                         <button onClick={() => increment(setHours, 100)} className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full"><Plus size={16} /></button>
//                     </div>
//                 </div>
//                 <div className="mb-6">
//                     <p className="mb-2">Session Type (hours):</p>
//                     <div className="flex items-center">
//                         <button onClick={() => decrement(setSessionType)} className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full"><Minus size={16} /></button>
//                         <span className="mx-4 text-xl font-bold">{sessionType}</span>
//                         <button onClick={() => increment(setSessionType, 3)} className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full"><Plus size={16} /></button>
//                     </div>
//                 </div>
//             </div>
//             <button
//                 onClick={() => onSubscribe({
//                     type: 'Custom',
//                     price: calculatePrice(),
//                     hours: hours,
//                     sessionType: sessionType
//                 })}
//                 className="w-full bg-[#ECDFCC] text-[#034c52] px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 font-bold"
//             >
//                 Choose Plan
//             </button>
//         </motion.div>
//     );
// };

// // CheckoutPopup component
// const CheckoutPopup = ({ plan, onClose }) => (
//     <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
//     >
//         <motion.div
//             initial={{ scale: 0.9, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.9, y: 50 }}
//             className="bg-[#034c52] text-[#ECDFCC] p-8 rounded-lg max-w-md w-full"
//         >
//             <h2 className="text-3xl font-bold mb-6 text-[#ECDFCC]">Checkout</h2>
//             <div className="mb-6 p-6 bg-[#023c42] rounded-lg">
//                 <p className="mb-2 text-xl">Selected Plan: <span className="font-bold">{plan.type}</span></p>
//                 <p className="text-3xl font-bold text-[#ECDFCC] mb-4">${plan.price.toFixed(2)}</p>
//                 <p className="text-lg">Total Hours: {plan.hours}</p>
//                 <p className="text-lg">Session Type: {plan.sessionType} hour(s)</p>
//             </div>
//             <PayPalScriptProvider options={initialOptions}>
//                 <PayPalButtons
//                     style={styles}
//                     // onClick={createOrder(plan)}
//                     createOrder={(data, actions) => {
//                         return actions.order.create({
//                             purchase_units: [{
//                                 amount: {
//                                     value: plan.price.toFixed(2) // Convert price to a string with 2 decimal places
//                                 }
//                             }]
//                         });
//                     }}
//                     onApprove={(data, actions) => onApprove(data, actions, plan, onClose)}
//                 />
//             </PayPalScriptProvider>
//             <button onClick={onClose} className="w-full bg-[#023c42] text-[#ECDFCC] px-6 py-4 rounded-full hover:bg-opacity-90 transition duration-300 font-bold mt-4 text-lg">
//                 Cancel
//             </button>
//         </motion.div>
//     </motion.div>
// );

// // Main Subscription component
// const Subscription = () => {
//     const [selectedPlan, setSelectedPlan] = useState(null);
//     const [billingCycle, setBillingCycle] = useState('monthly');

//     const plans = [
//         { type: 'ESSENTIAL', price: 70, hours: 7, sessionType: 1 },
//         { type: 'EXTRA', price: 140, hours: 14, sessionType: 2 },
//         { type: 'PREMIUM', price: 210, hours: 21, sessionType: 3 },
//     ];

//     const handleSubscribe = (plan) => {
//         setSelectedPlan(plan);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-[#e9dfd0] to-[#D4C5B0] py-20 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <motion.h1
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-5xl font-bold text-[#034c52] text-center mb-4"
//                 >
//                     Elevate Your Learning Journey
//                 </motion.h1>
//                 <motion.p
//                     initial={{ opacity: 0, y: -30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="text-xl text-[#034c52] text-center mb-12"
//                 >
//                     Choose your ideal plan and unlock your full potential. That's our promise.
//                 </motion.p>

//                 <div className="flex justify-center mb-8">
//                     <div className="bg-[#034c52] p-1 rounded-full">
//                         {/* <button
//                             className={`px-4 py-2 rounded-full ${billingCycle === 'monthly' ? 'bg-[#ECDFCC] text-[#034c52]' : 'text-[#ECDFCC]'}`}
//                             onClick={() => setBillingCycle('monthly')}
//                         >
//                             Monthly
//                         </button>
//                         <button
//                             className={`px-4 py-2 rounded-full ${billingCycle === 'annually' ? 'bg-[#ECDFCC] text-[#034c52]' : 'text-[#ECDFCC]'}`}
//                             onClick={() => setBillingCycle('annually')}
//                         >
//                             Annually
//                         </button> */}
//                         <div className='px-4 py-2 text-[#ECDFCC]'>
//                             Explore Our Subscription Options
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {plans.map((plan) => (
//                         <PlanCard
//                             key={plan.type}
//                             plan={plan}
//                             onSubscribe={handleSubscribe}
//                             isActive={plan.type === 'PREMIUM'}
//                         />
//                     ))}
//                     <CustomSubscription onSubscribe={handleSubscribe} />
//                 </div>
//             </div>

//             {selectedPlan && (
//                 <CheckoutPopup plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
//             )}
//         </div>
//     );
// };

// export default Subscription;


///----------------------------------------




import React, { useState } from 'react';
import { ArrowRight, Plus, Minus, Check, Coffee } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import axios from "axios";

// PayPal options remain unchanged
const initialOptions = {
    clientId: "ASOd1tNnXrE0uhq8oiUvibiaq-MrrsClY4tbR9rFQwFs8ioNNimxG_8t8HyBL8o3_26f8VqcNEHpkglO",
};

const styles = {
    shape: "rect",
    color: "white",
};

// Create order function remains unchanged
async function createOrder(plan) {
    console.log('Creating order with plan:', plan);
    try {
        const response = await axios.post("http://localhost:3000/mp/user/order", { plan });
        console.log('Order response:', response.data);
    } catch (error) {
        console.error('Order error:', error);
    }
}

// Handle PayPal approval remains unchanged
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
        className={`bg-[#E9EFEC] text-[#16423C] p-6 rounded-xl flex flex-col justify-between shadow-lg ${isActive ? 'border-2 border-[#6A9C89]' : ''}`}
    >
        <div>
            <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
            <p className="text-3xl font-bold mb-4">${plan.price.toFixed(2)}<span className="text-sm font-normal">/month</span></p>
            <ul className="space-y-2 mb-6">
                {[
                    `${plan.hours} hours total`,
                    `${plan.sessionType} hour session type`,
                    "Advanced analytics",
                    "Priority support"
                ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 text-[#6A9C89]" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        <button
            onClick={() => onSubscribe(plan)}
            className={`w-full ${isActive ? 'bg-[#6A9C89]' : 'bg-[#16423C]'} text-[#E9EFEC] px-6 py-3 rounded-full hover:opacity-90 transition duration-300 font-bold flex items-center justify-center`}
        >
            {isActive ? 'Current Plan' : 'Choose Plan'} <ArrowRight className="ml-2" />
        </button>
    </motion.div>
);

const CustomSubscription = ({ onSubscribe }) => {
    const [hours, setHours] = useState(1);
    const [sessionType, setSessionType] = useState(1);

    const increment = (setter, max) => setter(prev => Math.min(prev + 1, max));
    const decrement = (setter) => setter(prev => Math.max(1, prev - 1));

    const calculatePrice = () => {
        return hours * 10; // $10 per hour
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#E9EFEC] text-[#16423C] p-6 rounded-xl flex flex-col justify-between shadow-lg"
        >
            <div>
                <h3 className="text-xl font-bold mb-2">Custom Plan</h3>
                <p className="text-3xl font-bold mb-4">${calculatePrice().toFixed(2)}<span className="text-sm font-normal">/month</span></p>
                <div className="mb-4">
                    <p className="mb-2">Total Hours:</p>
                    <div className="flex items-center">
                        <button onClick={() => decrement(setHours)} className="bg-[#16423C] text-[#E9EFEC] p-2 rounded-full"><Minus size={16} /></button>
                        <span className="mx-4 text-xl font-bold">{hours}</span>
                        <button onClick={() => increment(setHours, 100)} className="bg-[#16423C] text-[#E9EFEC] p-2 rounded-full"><Plus size={16} /></button>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="mb-2">Session Type (hours):</p>
                    <div className="flex items-center">
                        <button onClick={() => decrement(setSessionType)} className="bg-[#16423C] text-[#E9EFEC] p-2 rounded-full"><Minus size={16} /></button>
                        <span className="mx-4 text-xl font-bold">{sessionType}</span>
                        <button onClick={() => increment(setSessionType, 3)} className="bg-[#16423C] text-[#E9EFEC] p-2 rounded-full"><Plus size={16} /></button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => onSubscribe({
                    type: 'Custom',
                    price: calculatePrice(),
                    hours: hours,
                    sessionType: sessionType
                })}
                className="w-full bg-[#16423C] text-[#E9EFEC] px-6 py-3 rounded-full hover:opacity-90 transition duration-300 font-bold"
            >
                Choose Plan
            </button>
        </motion.div>
    );
};

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
            className="bg-[#E9EFEC] text-[#16423C] p-8 rounded-lg max-w-md w-full"
        >
            <h2 className="text-3xl font-bold mb-6 text-[#16423C]">Checkout</h2>
            <div className="mb-6 p-6 bg-[#C4DAD2] rounded-lg">
                <p className="mb-2 text-xl">Selected Plan: <span className="font-bold">{plan.type}</span></p>
                <p className="text-3xl font-bold text-[#16423C] mb-4">${plan.price.toFixed(2)}</p>
                <p className="text-lg">Total Hours: {plan.hours}</p>
                <p className="text-lg">Session Type: {plan.sessionType} hour(s)</p>
            </div>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={styles}
                    className=' border-0'
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: plan.price.toFixed(2)
                                }
                            }]
                        });
                    }}
                    onApprove={(data, actions) => onApprove(data, actions, plan, onClose)}
                />
            </PayPalScriptProvider>
            <button onClick={onClose} className="w-full bg-[#16423C] text-[#E9EFEC] px-6 py-4 rounded-full hover:opacity-90 transition duration-300 font-bold mt-4 text-lg">
                Cancel
            </button>
        </motion.div>
    </motion.div>
);

const Subscription = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        { type: 'ESSENTIAL', price: 70, hours: 7, sessionType: 1 },
        { type: 'EXTRA', price: 140, hours: 14, sessionType: 2 },
        { type: 'PREMIUM', price: 210, hours: 21, sessionType: 3 },
    ];

    const handleSubscribe = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="min-h-screen bg-[#C4DAD2] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold text-[#16423C] text-center mb-4"
                >
                    Elevate Your Learning Journey
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-[#16423C] text-center mb-12"
                >
                    Choose your ideal plan and unlock your full potential. That's our promise.
                </motion.p>

                <div className="flex justify-center mb-8">
                    <div className="bg-[#16423C] p-1 rounded-full">
                        <div className='px-4 py-2 text-[#E9EFEC]'>
                            Explore Our Subscription Options
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <PlanCard
                            key={plan.type}
                            plan={plan}
                            onSubscribe={handleSubscribe}
                            isActive={plan.type === 'PREMIUM'}
                        />
                    ))}
                    <CustomSubscription onSubscribe={handleSubscribe} />
                </div>
            </div>

            {selectedPlan && (
                <CheckoutPopup plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
            )}
        </div>
    );
};

export default Subscription;
