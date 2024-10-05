const express = require("express");
const router = express.Router();
const user_controller = require("../controller/user_controllers");

router.post("/sign-up",user_controller.sign_up_user);
router.post("/log-in",user_controller.log_in_user);
router.post("/order",user_controller.create_order);
router.get("/chats",user_controller.get_chats);
router.post("/chats/message",user_controller.add_message);
router.get("/get-users",user_controller.get_users);
router.get("/get-user",user_controller.get_user);
router.patch("/user-status",user_controller.update_status);
router.patch("/update-user",user_controller.update_user);
router.post("/get-mentor",user_controller.get_mentor);



module.exports = router;