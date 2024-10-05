const Contact = require("../model/contact");


exports.sent_message = async (req, res) => {
    const { formData } = req.body;

    try {

        const contact_message = new Contact({
            name: formData.name,
            email: formData.email,
            message: formData.message,
        });

        await contact_message.save(); 

        res.status(201).json({ message: "contact message sent successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


exports.get_messages = async (req, res) => {

    // console.log("inside contact controller");
    try {
        const contact_messages = await Contact.find();
        // console.log(contact_messages);


        res.status(201).json({ message: "contact message sent successfully", messages: contact_messages });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }

};