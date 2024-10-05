const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("./config/db_config");
const user_routers = require("./router/user_routers");
const mentor_routers = require("./router/mentor_routers");
const contact_routers = require("./router/contact_routers");
const session_routers = require("./router/session_router");

const port = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use("/mp/user", user_routers);
app.use("/mp/mentor", mentor_routers);
app.use("/mp/contact", contact_routers);
app.use("/mp/sessions", session_routers);



const User = require('./model/user');
const UserNext = require('./model/userNext');
const Mentor = require('./model/mentor');
const Subscription = require('./model/subscription');
const Chat = require('./model/chat');
const Session = require('./model/sessions');
const Product = require('./model/products_next');


const usersNext = [
  {
    email: "johndoe@example.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
  }
];

const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
    picture: "https://www.w3schools.com/howto/img_avatar.png",
    session_type: "b",
    available_hours: 10,
    hours_counter: 5,
    sessions_counter: 2,
    mentors: [],
    topics: ["JavaScript", "React"],
    chats: [],
    favorite_mentors: [],
    isActive: true
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
    picture: "https://www.w3schools.com/howto/img_avatar.png",
    session_type: "a",
    available_hours: 15,
    hours_counter: 10,
    sessions_counter: 3,
    mentors: [],
    topics: ["Python", "Machine Learning"],
    chats: [],
    favorite_mentors: [],
    isActive: false
  },
  {
    name: "Jalex",
    email: "alex@example.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
    picture: "https://www.w3schools.com/howto/img_avatar.png",
    session_type: "c",
    available_hours: 15,
    hours_counter: 10,
    sessions_counter: 3,
    mentors: [],
    topics: ["Python", "Machine Learning"],
    chats: [],
    favorite_mentors: [],
    isActive: false
  },
  {
    name: "abod",
    email: "abod@gmail.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
    picture: "https://www.w3schools.com/howto/img_avatar.png",
    session_type: "a",
    available_hours: 15,
    hours_counter: 10,
    sessions_counter: 3,
    mentors: ["66f719b04462304412ba8fcf", "66f719b04462304412ba8fd0"],
    topics: ["Python", "Machine Learning"],
    chats: [],
    favorite_mentors: ["66f719b04462304412ba8fcf"],
    isActive: false
  },
  {
    name: "forat",
    email: "forat@gmail.com",
    password: "$2a$10$tmrzZKT8bVbcrZo7N5fOUOtbEXx3H/yenweXqsd/OFAi0/AUxWs4i",
    picture: "https://www.w3schools.com/howto/img_avatar.png",
    session_type: "a",
    available_hours: 15,
    hours_counter: 10,
    sessions_counter: 3,
    mentors: [],
    topics: ["Python", "Machine Learning"],
    chats: [],
    favorite_mentors: ["66f719b04462304412ba8fcf"],
    isActive: false
  }
];

const mentors = [
  {
    name: "Alice Mentor",
    email: "alicementor@example.com",
    password: "hashedpassword3",
    picture: "https://example.com/images/alice.jpg",
    introVideo: "https://example.com/videos/intro-alice.mp4",
    cv: "https://example.com/cvs/alice.pdf",
    experience: 5,
    briefAbout: "Expert in Web Development with 5 years of experience.",
    isActive: true,
    isAccepted: true,
    sessions_counter: 10,
    hours_counter: 50,
    session_started: true,
    chats: []
  },
  {
    name: "Bob Mentor",
    email: "bobmentor@example.com",
    password: "hashedpassword4",
    picture: "https://example.com/images/bob.jpg",
    introVideo: "https://example.com/videos/intro-bob.mp4",
    cv: "https://example.com/cvs/bob.pdf",
    experience: 8,
    briefAbout: "Machine Learning expert with over 8 years of experience.",
    isActive: true,
    isAccepted: false,
    sessions_counter: 12,
    hours_counter: 60,
    session_started: false,
    chats: []
  }
];

const subscriptions = [
  {
    user_id: "60d21b4667d0d8992e610c89",
    sub_type: "premium",
    session_type: "one-on-one",
    price: "100",
    hours: 10
  },
  {
    user_id: "60d21b4667d0d8992e610c8a",
    sub_type: "basic",
    session_type: "group",
    price: "50",
    hours: 5
  }
];

const chats = [
  {
    learner: "60d21b4667d0d8992e610c89",
    mentor: "66f719b04462304412ba8fcf",
    messages: [
      {
        text: "Hey, I need help with JavaScript!",
        sender: "60d21b4667d0d8992e610c89",
        senderType: "User",
        time: "2024-09-01T10:00:00Z"
      },
      {
        text: "Sure, I can help. Let's schedule a session.",
        sender: "60d21b4667d0d8992e610c85",
        senderType: "Mentor",
        time: "2024-09-01T10:05:00Z"
      }
    ]
  },
  {
    learner: "60d21b4667d0d8992e610c8a",
    mentor: "66f719b04462304412ba8fd0",
    messages: [
      {
        text: "I need guidance on my Machine Learning project.",
        sender: "60d21b4667d0d8992e610c8a",
        senderType: "User",
        time: "2024-09-02T14:00:00Z"
      },
      {
        text: "Let's go through the steps in our next session.",
        sender: "60d21b4667d0d8992e610c86",
        senderType: "Mentor",
        time: "2024-09-02T14:10:00Z"
      }
    ]
  }
];

const sessions = [
  {
    mentor_id: "60d21b4667d0d8992e610c85",
    topic: "JavaScript Basics",
    topic_subject: "Understanding JS fundamentals",
    is_reserved: true,
    session_picture: "https://example.com/images/session1.jpg"
  },
  {
    mentor_id: "60d21b4667d0d8992e610c86",
    topic: "Introduction to Machine Learning",
    topic_subject: "ML concepts and algorithms",
    is_reserved: false,
    session_picture: "https://example.com/images/session2.jpg"
  }
];

const products = [
  { id: 1, name: 'Professional Soccer Ball', price: 59.99, image: 'https://www.soccerbible.com/media/125809/la-liga-2-min.jpg', description: 'FIFA-approved match ball with superior air retention and water-resistant properties.' },
  { id: 2, name: 'Premium Soccer Cleats', price: 129.99, image: 'https://th.bing.com/th/id/OIP.0hjK6KCLl46WfNyZgg1w1gAAAA?rs=1&pid=ImgDetMain', description: 'Lightweight cleats with superior traction and comfort for optimal performance on the field.' },
  { id: 3, name: 'Team Jersey', price: 89.99, image: 'https://th.bing.com/th/id/R.d813176016f15dc3ca40fd214cc8b792?rik=IoiRtYSIEk4o%2fQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0550%2f6161%2f0625%2ffiles%2f23RMA-HS-500x500.jpg%3fv%3d1684698246&ehk=AKJEMCrkwKZkPDYid4fJWnZZhknUQmhiYj%2fMb3w1UDc%3d&risl=&pid=ImgRaw&r=0', description: 'Official team jersey made with moisture-wicking fabric for comfort during intense matches.' },
  { id: 4, name: 'Training Cones Set', price: 24.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/9df78eab33525d08d6e5fb8d27136e95/m/a/main_167_4.jpg', description: 'Set of 20 durable plastic cones for agility training and drill setup.' },
  { id: 5, name: 'Goalkeeper Gloves', price: 49.99, image: 'https://nwscdn.com/media/catalog/product/g/o/goalkeepers-gloves-for-soccer_players-of-all-ages_10.jpg', description: 'Professional-grade goalkeeper gloves with extra padding and superior grip.' },
  { id: 6, name: 'Soccer Goal Net', price: 79.99, image: 'https://nwscdn.com/media/catalog/product/cache/all/image/1200x/9df78eab33525d08d6e5fb8d27136e95/t/a/target_goal_for_elite_football_clubs_3_1.jpg', description: 'Regulation-size soccer goal net made from high-quality, weather-resistant materials.' },
];

// Function to seed the data
async function seedDatabase() {
  try {
    // await User.deleteMany({});
    // await Mentor.deleteMany({});
    // await Subscription.deleteMany({});
    // await Chat.deleteMany({});
    // await Session.deleteMany({});

    // await User.insertMany(users);
    // await Mentor.insertMany(mentors);
    // await Subscription.insertMany(subscriptions);
    // await Chat.insertMany(chats);
    // await Session.insertMany(sessions);
    // await UserNext.insertMany(usersNext);

    // await Product.insertMany(products);

    console.log('Data successfully loaded');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  }
}

// Call the seed function
// seedDatabase();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});