const Session = require("../model/sessions");
const User = require("../model/user");
const Mentor = require("../model/mentor");


exports.get_sessions = async (req, res) => {

    // console.log("inside get sessions controller");

    try {

        const Sessions = await Session.find().populate({
            path: 'mentor_id',
            select: 'name email picture'
        }).exec();


        // console.log(Sessions);

        res.status(201).json({ message: "Sessions fetched successfully", sessions: Sessions });
    } catch (error) {
        console.error("Error fetch sessions:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.update_reserve_status = async (req, res) => {

    // console.log("inside update reserve status controller");

    try {

        const { session_id } = req.body;

        // console.log(session_id);

        const updatedReserveStatus = await Session.findByIdAndUpdate(
            session_id,
            {
                $set: {
                    is_reserved: "true",
                }
            },
            { new: true, runValidators: true }
        );
        res.status(201).json({ message: "Sessions updated successfully" });
    } catch (error) {
        console.error("Error update sessions:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.update_sessions_hours_counter = async (req, res) => {

    const userId = "66fa4681b7c5090828b79955";
    const hour_couter = 1;


    try {

        const user = await User.findById(userId);

        const updatedUserCounters = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    available_hours: user.available_hours - hour_couter,
                    hours_counter: user.hours_counter + hour_couter,
                    sessions_counter: user.sessions_counter + 1,
                }
            },
            { new: true, runValidators: true }
        );

        res.status(201).json({ message: "Sessions updated successfully" });
    } catch (error) {
        console.error("Error update hours and session counter:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.update_sessions_hours_counter_mentor = async (req, res) => {

    const mentorId = "66f719b04462304412ba8fcf";
    const hour_couter = 1;

    try {

        const mentor = await Mentor.findById(mentorId);


        const updatedMenotrCounters = await Mentor.findByIdAndUpdate(
            mentorId,
            {
                $set: {
                    hours_counter: mentor.hours_counter + hour_couter,
                    sessions_counter: mentor.sessions_counter + 1,
                }
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({ message: "Mentor ocunters updated successfully" });
    } catch (err) {
        console.log("Server error (update_sessions_hours_counter_mentor controller) : ", err);
        res.status(500).json({ message: "Server error (update_sessions_hours_counter_mentor controller)", error: err.message });
    }


};


exports.strat_sessions = async (req, res) => {

    const mentorId = "66f719b04462304412ba8fcf";

    const { formData } = req.body;

    // console.log(formData);

    try {

        const newSession = new Session({
            mentor_id: mentorId,
            topic: formData.topic,
            topic_subject: formData.topic_subject,
            session_picture: formData.session_picture,
        });

        const savedSession = await newSession.save();

        res.status(201).json({ message: "Sessions updated successfully" });
    } catch (error) {
        console.error("Error update hours and session counter:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.update_ready_status = async (req, res) => {

    const mentorId = "66f719b04462304412ba8fcf";

    const { isReady } = req.body;

    try {
        if (!isReady) {
            const updateReadyStatus = Mentor.findByIdAndUpdate(
                mentorId,
                {
                    $set: {
                        session_started: true,
                    }
                },
                { new: true, runValidators: true }
            );

            res.status(200).json({ message: "Ready status updated to true successfully" });
        }
        else {
            const updateReadyStatus = await Mentor.findByIdAndUpdate(
                mentorId,
                {
                    $set: {
                        session_started: false,
                    }
                },
                { new: true, runValidators: true }
            );

            res.status(200).json({ message: "Ready status updated to false successfully" });
        }
    } catch (err) {
        console.log("Server error (update_ready_status controoler) :", err);
        res.status(500).json({ message: "Server error (update_ready_status controoler)", error: err.message });
    }
};