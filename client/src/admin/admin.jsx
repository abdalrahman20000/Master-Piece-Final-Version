import React, { useState, useEffect } from 'react';
import { Users, UserCheck, BookOpen, Clock, Coffee, LayoutDashboard, UserPlus, Briefcase, MessageSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import MentorsPage from './mentors';
import MentorsPreviewPage from './/mentors_preview';
import ContactMessagesPage from './/contact';
import UsersPage from './users';

const StatCard = ({ title, value, icon: Icon }) => (
    <div className="bg-[#E9EFEC] rounded-lg shadow-md p-4 flex items-center">
        <div className="rounded-full bg-[#6A9C89] p-2 mr-3">
            <Icon className="text-[#16423C]" size={20} />
        </div>
        <div>
            <h3 className="text-sm font-semibold text-[#16423C]">{title}</h3>
            <p className="text-xl font-bold text-[#6A9C89]">{value}</p>
        </div>
    </div>
);

const Sidebar = ({ activePage, setActivePage }) => (
    <div className="bg-[#16423C] text-[#E9EFEC] w-64 min-h-screen p-4">
        <div className="flex items-center mb-6">
            <Coffee size={32} className="mr-2" />
            <h1 className="text-xl font-bold">ACafe Admin</h1>
        </div>
        <nav>
            <ul>
                <li className="mb-2">
                    <button
                        onClick={() => setActivePage('overview')}
                        className={`flex items-center w-full p-2 rounded ${activePage === 'overview' ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89]'}`}
                    >
                        <LayoutDashboard size={20} className="mr-2" />
                        Overview
                    </button>
                </li>
                <li className="mb-2">
                    <button
                        onClick={() => setActivePage('users')}
                        className={`flex items-center w-full p-2 rounded ${activePage === 'users' ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89]'}`}
                    >
                        <Users size={20} className="mr-2" />
                        Users
                    </button>
                </li>
                <li className="mb-2">
                    <button
                        onClick={() => setActivePage('mentors')}
                        className={`flex items-center w-full p-2 rounded ${activePage === 'mentors' ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89]'}`}
                    >
                        <Briefcase size={20} className="mr-2" />
                        Mentors
                    </button>
                </li>
                <li className="mb-2">
                    <button
                        onClick={() => setActivePage('mentorsPreview')}
                        className={`flex items-center w-full p-2 rounded ${activePage === 'mentorsPreview' ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89]'}`}
                    >
                        <UserPlus size={20} className="mr-2" />
                        Mentors Preview
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActivePage('messages')}
                        className={`flex items-center w-full p-2 rounded ${activePage === 'messages' ? 'bg-[#6A9C89]' : 'hover:bg-[#6A9C89]'}`}
                    >
                        <MessageSquare size={20} className="mr-2" />
                        Messages
                    </button>
                </li>
            </ul>
        </nav>
    </div>
);

const OverviewPage = ({ mentors, users }) => {
    const barChartData = [
        { name: 'Jan', mentors: 12, users: 65 },
        { name: 'Feb', mentors: 15, users: 80 },
        { name: 'Mar', mentors: 18, users: 100 },
        { name: 'Apr', mentors: 22, users: 120 },
        { name: 'May', mentors: 25, users: 140 },
        { name: 'Jun', mentors: 28, users: 160 },
    ];

    const pieChartData = [
        { name: 'JavaScript', value: 400 },
        { name: 'Python', value: 300 },
        { name: 'Java', value: 200 },
        { name: 'C++', value: 100 },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard title="Total Users" value={users.length} icon={Users} />
                <StatCard title="Total Mentors" value={mentors.length} icon={UserCheck} />
                <StatCard title="Active Sessions" value="23" icon={BookOpen} />
                <StatCard title="Total Hours" value="1,890" icon={Clock} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#E9EFEC] rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-semibold text-[#16423C] mb-4">Growth Over Time</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#6A9C89" />
                            <XAxis dataKey="name" stroke="#16423C" />
                            <YAxis stroke="#16423C" />
                            <Tooltip contentStyle={{ backgroundColor: '#E9EFEC', borderColor: '#6A9C89' }} />
                            <Legend />
                            <Bar dataKey="mentors" fill="#16423C" />
                            <Bar dataKey="users" fill="#6A9C89" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-[#E9EFEC] rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-semibold text-[#16423C] mb-4">Popular Programming Languages</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={['#16423C', '#6A9C89', '#C4DAD2', '#E9EFEC'][index % 4]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#E9EFEC', borderColor: '#6A9C89' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};


const AdminDashboard = () => {

    useEffect(() => {
        try {

        } catch {

        }
    }, []);

    const [mentors, setMentors] = useState([
        {
            id: 1,
            name: 'John Doe',
            expertise: 'JavaScript, React',
            experience: 5,
            rating: 4.8,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            bio: 'Experienced frontend developer with a passion for creating intuitive user interfaces.',
            video: 'https://example.com/john-doe-intro.mp4',
        },
        {
            id: 2,
            name: 'Jane Smith',
            expertise: 'Python, Machine Learning',
            experience: 7,
            rating: 4.9,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
            bio: 'Data scientist specializing in machine learning and AI applications.',
            video: 'https://example.com/jane-smith-intro.mp4',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            expertise: 'Java, Spring Framework',
            experience: 6,
            rating: 4.7,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            bio: 'Backend developer with expertise in building scalable enterprise applications.',
            video: 'https://example.com/mike-johnson-intro.mp4',
        },
        {
            id: 4,
            name: 'Emily Brown',
            expertise: 'UX/UI Design, Figma',
            experience: 4,
            rating: 4.6,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            bio: 'Creative designer focusing on user-centered design principles and prototyping.',
            video: 'https://example.com/emily-brown-intro.mp4',
        },
        {
            id: 5,
            name: 'David Lee',
            expertise: 'DevOps, AWS',
            experience: 8,
            rating: 4.9,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            bio: 'DevOps engineer specializing in cloud infrastructure and CI/CD pipelines.',
            video: 'https://example.com/david-lee-intro.mp4',
        },
    ]);

    const [mentorsPreview, setMentorsPreview] = useState([
        {
            id: 101,
            name: 'Alex Thompson',
            email: 'alex@example.com',
            expertise: 'React, Node.js',
            experience: 6,
            status: 'pending',
            image: 'https://randomuser.me/api/portraits/men/7.jpg',
            video: 'https://example.com/alex-intro.mp4',
            cv: 'https://example.com/alex-cv.pdf',
            brief: 'Passionate full-stack developer with a focus on React and Node.js. I love mentoring and helping others grow in their coding journey.'
        },
        {
            id: 102,
            name: 'Sophia Lee',
            email: 'sophia@example.com',
            expertise: 'Data Science, Python',
            experience: 8,
            status: 'pending',
            image: 'https://randomuser.me/api/portraits/women/8.jpg',
            video: 'https://example.com/sophia-intro.mp4',
            cv: 'https://example.com/sophia-cv.pdf',
            brief: `Experienced data scientist with a Ph.D. in Machine Learning. I'm excited to share my knowledge and help aspiring data scientists excel in their careers.`
        },
    ]);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Alice Johnson',
            email: 'alice@example.com',
            joinDate: '2023-01-15',
            sessionsAttended: 12,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            bio: 'Aspiring web developer looking to improve my skills.',
        },
        {
            id: 2,
            name: 'Bob Williams',
            email: 'bob@example.com',
            joinDate: '2023-02-20',
            sessionsAttended: 8,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
            bio: 'Software engineering student interested in mobile app development.',
        },
        {
            id: 3,
            name: 'Carol Martinez',
            email: 'carol@example.com',
            joinDate: '2023-03-05',
            sessionsAttended: 15,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/women/4.jpg',
            bio: 'Data analyst looking to expand my programming skills.',
        },
        {
            id: 4,
            name: 'Daniel Taylor',
            email: 'daniel@example.com',
            joinDate: '2023-03-18',
            sessionsAttended: 6,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/5.jpg',
            bio: 'Graphic designer interested in learning frontend development.',
        },
        {
            id: 5,
            name: 'Eva Garcia',
            email: 'eva@example.com',
            joinDate: '2023-04-02',
            sessionsAttended: 10,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/women/5.jpg',
            bio: 'Product manager looking to enhance my technical skills.',
        },
        {
            id: 6,
            name: 'Frank Robinson',
            email: 'frank@example.com',
            joinDate: '2023-04-15',
            sessionsAttended: 4,
            isActive: true,
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
            bio: 'Recent computer science graduate seeking mentorship in AI and machine learning.',
        },
    ]);

    const PersonPage = ({ persons, onViewDetails, onToggleStatus, type }) => {
        const [selectedPerson, setSelectedPerson] = useState(null);

        const handleViewDetails = (person) => {
            setSelectedPerson(person);
        };

        const handleCloseModal = () => {
            setSelectedPerson(null);
        };

        const handleToggleStatus = (personId) => {
            onToggleStatus(personId);
            setSelectedPerson(prev => prev ? { ...prev, isActive: !prev.isActive } : null);
        };

        return (
            <div>
                <h2 className="text-2xl font-bold mb-6">{type === 'mentor' ? 'Mentors' : 'Users'}</h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {persons.map(person => (
                        <PersonCard key={person.id} person={person} onViewDetails={handleViewDetails} type={type} />
                    ))}
                </motion.div>
                <AnimatePresence>
                    {selectedPerson && type === 'user' && (
                        <UserDetailsModal
                            user={selectedPerson}
                            onClose={handleCloseModal}
                            onToggleStatus={handleToggleStatus}
                        />
                    )}
                    {selectedPerson && type === 'mentor' && (
                        <MentorDetailsModal
                            mentor={selectedPerson}
                            onClose={handleCloseModal}
                            onToggleStatus={handleToggleStatus}
                        />
                    )}
                </AnimatePresence>
            </div>
        );
    };

    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [activePage, setActivePage] = useState('overview');

    const handleViewDetails = (person, type) => {
        setSelectedPerson(person);
        setSelectedType(type);
    };

    const handleCloseModal = () => {
        setSelectedPerson(null);
        setSelectedType(null);
    };

    const handleToggleStatus = (personId) => {
        if (activePage === 'mentors') {
            setMentors(mentors.map(mentor =>
                mentor.id === personId ? { ...mentor, isActive: !mentor.isActive } : mentor
            ));
        } else if (activePage === 'users') {
            setUsers(users.map(user =>
                user.id === personId ? { ...user, isActive: !user.isActive } : user
            ));
        }
    };

    const [messages, setMessages] = useState([
        {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            date: '2024-09-20',
            message: `Hello, I'm interested in becoming a mentor on your platform.Could you please provide more information about the application process and requirements?`
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'michael@example.com',
            date: '2024-09-21',
            message: `I've been using ACafe for a few months now and I absolutely love it! I was wondering if there are any plans to introduce group mentoring sessions in the future?`
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            email: 'emma@example.com',
            date: '2024-09-22',
            message: `I'm having trouble scheduling a session with my mentor.The calendar doesn't seem to be working correctly. Could someone from the support team assist me with this issue?`
        },
    ]);

    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleViewMessage = (message) => {
        setSelectedMessage(message);
    };

    const handleCloseMessageModal = () => {
        setSelectedMessage(null);
    };


    const handleAcceptMentor = (mentorId) => {
        setMentorsPreview(mentorsPreview.map(mentor =>
            mentor.id === mentorId ? { ...mentor, status: 'accepted' } : mentor
        ));
    };

    return (
        <div className="flex min-h-screen bg-[#C4DAD2] text-[#16423C]">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-grow p-6">
                {activePage === 'overview' && <OverviewPage mentors={mentors} users={users} />}
                {activePage === 'users' && (
                    <UsersPage
                        users={users}
                        onToggleStatus={handleToggleStatus}
                    />
                )}
                {activePage === 'mentors' && (
                    <MentorsPage
                        mentors={mentors}
                        onToggleStatus={handleToggleStatus}
                    />
                )}
                {activePage === 'mentorsPreview' && (
                    <MentorsPreviewPage
                        mentors={mentorsPreview}
                        onAccept={handleAcceptMentor}
                    />
                )}
                {activePage === 'messages' && (
                    <ContactMessagesPage
                        messages={messages}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;