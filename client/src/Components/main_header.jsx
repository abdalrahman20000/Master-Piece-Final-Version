import React, { useEffect, useState } from 'react';
import Header_v from '../Components/header_v';  // Adjust import path if necessary
import Header_l from '../Components/header_';  // Adjust import path if necessary
import Header_m from '../Components/header_m';  // Adjust import path if necessary

const Main_header = () => {
    const [userType, setUserType] = useState('visitor'); // Default to 'visitor'

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType') || 'visitor';
        setUserType(storedUserType);
    }, []);

    // Render the appropriate header based on userType
    return (
        <>
            {userType === 'visitor' && <Header_v />}
            {userType === 'learner' && <Header_l />}
            {userType === 'mentor' && <Header_m />}
        </>
    );
};

export default Main_header;
