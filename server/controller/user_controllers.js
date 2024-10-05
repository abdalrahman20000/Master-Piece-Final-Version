const User = require("../model/user");
const Mentor = require("../model/mentor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Subscription = require("../model/subscription");
const Chats = require("../model/chat");


exports.sign_up_user = async (req, res) => {
    // console.log("Inside user sign-up controller :)");
    const { signupData } = req.body;

    if (!signupData || !signupData.email || !signupData.password || !signupData.username) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const user_email = signupData.email;
        const existingUser = await User.findOne({ email: user_email });

        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(signupData.password, 10);

        const newUser = new User({
            name: signupData.username,
            isActive: true,
            email: signupData.email,
            password: hashedPassword,
            picture: "https://www.w3schools.com/howto/img_avatar.png",
            available_hours: 1,
        });

        await newUser.save(); // Save the new user to the database

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.log_in_user = async (req, res) => {
    // console.log("Inside user log-in controller :)");
    const { email, password } = req.body;

    // console.log(email, password);

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with user details and token
        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email },
            token
        });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.create_order = async (req, res) => {
    const { plan } = req.body;

    // console.log(plan);

    try {
        // Find the user by ID
        const userId = "66f6f59ef605fc30f2bfff07";
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Determine new sessionType and hours
        // const newSessionType = user.sessionType ? user.sessionType : plan.sessionType;
        // const newSessionType = plan.sessionType;
        const newSessionType = plan.sessionType == 1 ? "c" : plan.sessionType == 2 ? "b" : plan.sessionType == 3 ? "a" : undefined;
        const newHours = user.available_hours ? (parseFloat(user.available_hours) + parseFloat(plan.hours)).toString() : plan.hours;

        // Update the user with the new values
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    session_type: newSessionType,
                    available_hours: newHours,
                }
            },
            { new: true, runValidators: true }
        );

        // Create and save a new order
        const newOrder = new Subscription({
            user_id: userId,
            sub_type: plan.type,
            session_type: newSessionType,
            price: plan.price,
            hours: plan.hours,
        });

        await newOrder.save();

        // console.log("Order created successfully :)");
        res.status(201).json({ message: "Order created successfully", order: newOrder });

    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.get_chats = async (req, res) => {

    // console.log("inside get user chats controller");

    try {

        // const chats = await Chats.find({ learner: '66deb70ec2ec1426a2620831' });

        // console.log(chats);

        // res.status(201).json({ message: "Chats fetched successfully", chats: chats });

        const userId = "66fa4681b7c5090828b79955";

        const user = await User.findById(userId).populate({
            path: 'chats',
            populate: {
                path: 'learner mentor', // Populate learner and mentor fields in the Chat
                select: 'name picture', // Select only name and email fields of learner and mentor
            }
        }).exec();


        if (!user) {
            console.log('User not found');
            return;
        }

        // Return or log the chats along with their messages
        // console.log('User Chats:', user.chats);

        res.status(201).json(user.chats);

    } catch (err) {
        console.log("Error fetching chats: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }




}

exports.add_message = async (req, res) => {
    // console.log("inside add message controller for user");
    const { msg, chat_id } = req.body;
    // console.log(msg,chat_id);

    try {

        const added_msg = await Chats.findByIdAndUpdate(
            chat_id,
            {
                $push: {
                    messages: {
                        text: msg,
                        sender: "learner",
                        time: Date.now(),
                    }
                }

            },
            { new: true, useFindAndModify: false }
        );

        // const chat = await Chats.findById(chat_id);
        // console.log(chat);

        res.status(201).json({ message: "Message added successfully" });

    } catch (err) {
        console.log("Error add message:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
}


exports.get_users = async (req, res) => {

    // console.log("inside get user data controller");

    try {

        const users = await User.find();
        // console.log(users);

        res.status(201).json(users);

    } catch (err) {
        console.log("Error fetching users: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}


exports.get_user = async (req, res) => {

    try {
        const userId = "66fa4681b7c5090828b79955";

        const users = await User.findById(userId).populate({
            path: 'mentors favorite_mentors', 
            select: 'name email picture' 
        }).exec();

        // console.log(users);

        res.status(201).json(users);

    } catch (err) {
        console.log("Error fetching users: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}


exports.update_status = async (req, res) => {
    // console.log("inside update status controller");

    const { user_id } = req.body;
    // console.log(user_id);

    try {
        const user = await User.findById(user_id);

        if (user.isActive == true) {
            const updatedUser = await User.findByIdAndUpdate(
                user_id,
                {
                    $set: {
                        isActive: "false",
                    }
                },
                { new: true, runValidators: true }
            );
        }
        else {
            const updatedUser = await User.findByIdAndUpdate(
                user_id,
                {
                    $set: {
                        isActive: "true",
                    }
                },
                { new: true, runValidators: true }
            );
        }

        // console.log("Status updated successfully :)");
        res.status(201).json({ message: "Status updated successfully" });

    } catch (error) {
        console.error("Error to update status:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.update_user = async (req, res) => {
    // console.log("inside update user controller");

    const { profileData } = req.body;
    // console.log( profileData);

    try {

        const updatedUser = await User.findByIdAndUpdate(
            profileData.id, 
            {
                $set: {
                    name: profileData.name,
                    email: profileData.email,
                }
            },
            { new: true, runValidators: true }
        );
        

        // console.log("User data updated successfully :)");
        res.status(201).json({ message: "Status updated successfully" });

    } catch (error) {
        console.error("Error to update status:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.get_mentor = async (req, res) => {

    // console.log("inside get mentor- data controller");
    const { id } = req.body;
    // console.log(id);

    try {

        const mentor = await Mentor.findById(id);
        // const is_favorite = await User.find({favorite_mentors:id});
        // console.log(mentor);
        // console.log("*********************");
        // console.log(is_favorite);

        res.status(201).json({mentor:mentor});

    } catch (err) {
        console.log("Error fetching mentors: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}

