const express = require("express");
const router = express.Router();
const session_controller = require("../controller/session_conrtoller");

router.get("/get-sessions", session_controller.get_sessions);
router.post("/update-reserve-status", session_controller.update_reserve_status);
router.post("/update-sessions-hours-counter", session_controller.update_sessions_hours_counter);
router.post("/update-sessions-hours-counter-mentor", session_controller.update_sessions_hours_counter_mentor);
router.post("/start-sessions", session_controller.strat_sessions);
router.post("/update-ready-status", session_controller.update_ready_status);

module.exports = router;