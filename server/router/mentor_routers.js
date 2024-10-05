const express = require("express");
const router = express.Router();
const mentor_controller = require("../controller/mentor_controllers");

router.post("/sign-up",mentor_controller.sign_up_mentor);
router.post("/log-in",mentor_controller.log_in_mentor);
// router.post("/order",mentor_controller.create_order);
router.get("/chats",mentor_controller.get_chats);
router.post("/chats/message",mentor_controller.add_message);
router.get("/get-mentors",mentor_controller.get_mentors);
router.get("/get-mentor",mentor_controller.get_mentor);
router.patch("/mentor-status",mentor_controller.update_status);
router.patch("/mentor-accepted",mentor_controller.update_accepted);


module.exports = router;