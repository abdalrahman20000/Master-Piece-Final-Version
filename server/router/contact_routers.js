const express = require("express");
const router = express.Router();
const contact_controller = require("../controller/contact_controllers");

router.post("/sent-message",contact_controller.sent_message);
router.get("/get-messages",contact_controller.get_messages);


module.exports = router;