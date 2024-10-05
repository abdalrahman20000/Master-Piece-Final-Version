const Mentor = require("../model/mentor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Chats = require("../model/chat");


exports.sign_up_mentor = async (req, res) => {
    // console.log("Inside mentor sign-up controller :)");
    const { formData } = req.body;

    if (!formData || !formData.email || !formData.password || !formData.username) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // console.log(formData);

    try {
        const mentorEmail = formData.email;
        const existingMentor = await Mentor.findOne({ email: mentorEmail });

        if (existingMentor) {
            console.log("Mentor already exists");
            return res.status(400).json({ message: "Mentor already exists" });
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(formData.password, 10);

        const newMentor = new Mentor({
            name: formData.username,
            email: formData.email,
            password: hashedPassword,
            picture: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
            introVideo: formData.introVideo,
            cv: formData.cv,
            briefAbout: formData.briefAbout,
            experience: formData.experience,
            isActive: false,
            sessions: null,
            hours: null,
        });

        await newMentor.save(); // Save the new mentor to the database

        const token = jwt.sign({ userId: newMentor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: "Mentor registered successfully", token });
    } catch (error) {
        console.error("Error registering mentor:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



exports.log_in_mentor = async (req, res) => {
    // console.log("Inside mentor log-in controller :)");
    const { email, password } = req.body;
    // console.log(email, password);

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const mentor = await Mentor.findOne({ email });
        if (!mentor) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        if (!mentor.isAccepted) {
            return res.status(403).json({ message: "Mentor account is not active" });
        }
        // console.log(mentor.isAccepted);

        const isMatch = await bcrypt.compare(password, mentor.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: mentor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: "Login successful",
            mentor: {
                id: mentor._id,
                username: mentor.username,
                email: mentor.email
            },
            token
        });

    } catch (error) {
        console.error("Error logging in mentor:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.get_chats = async (req, res) => {

    // console.log("inside get mentor chats controller");

    try {

        const chats = await Chats.find({ mentor: '66e4bb297ee5984074a457e0' });

        // console.log(chats);

        // res.status(201).json({ message: "Chats fetched successfully", chats: chats });
        res.status(201).json(chats);

    } catch (err) {
        console.log("Error fetching chats: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}


exports.add_message = async (req, res) => {
    // console.log("inside add message controller for mentor");
    const { msg, chat_id } = req.body;
    // console.log(msg,chat_id);

    try {

        const added_msg = await Chats.findByIdAndUpdate(
            chat_id,
            {
                $push: {
                    messages: {
                        text: msg,
                        sender: "mentor",
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

exports.get_mentors = async (req, res) => {

    // console.log("inside get mentors data controller");

    try {

        const mentors = await Mentor.find();
        const accepted_mentors = await Mentor.find({ isAccepted: true });
        // console.log(users);

        res.status(201).json({ mentors: mentors, accepted_mentors: accepted_mentors });

    } catch (err) {
        console.log("Error fetching mentors: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}

exports.get_mentor = async (req, res) => {

    // console.log("inside get mentor- data controller");
    const mentor_id = "66f719b04462304412ba8fcf";

    try {

        const mentor = await Mentor.findById(mentor_id);

        res.status(201).json(mentor);

    } catch (err) {
        console.log("Error fetching mentors: ", err);
        res.status(500).json({ message: "server error", error: err.message });
    }

}


exports.update_status = async (req, res) => {
    // console.log("inside update status mentor controller");

    const { mentor_id } = req.body;
    // console.log(mentor_id);

    try {
        const mentor = await Mentor.findById(mentor_id);

        if (mentor.isActive == true) {
            const updatedMentor = await Mentor.findByIdAndUpdate(
                mentor_id,
                {
                    $set: {
                        isActive: "false",
                    }
                },
                { new: true, runValidators: true }
            );
        }
        else {
            const updatedMentor = await Mentor.findByIdAndUpdate(
                mentor_id,
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

exports.update_accepted = async (req, res) => {
    // console.log("inside update accepted mentor controller");

    const { mentor_id } = req.body;
    // console.log(mentor_id);

    try {
        const mentor = await Mentor.findById(mentor_id);

        const updatedMentor = await Mentor.findByIdAndUpdate(
            mentor_id,
            {
                $set: {
                    isAccepted: "true",
                }
            },
            { new: true, runValidators: true }
        );

        // console.log("accepte updated successfully :)");
        res.status(201).json({ message: "Status updated successfully" });

    } catch (error) {
        console.error("Error to update status:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};