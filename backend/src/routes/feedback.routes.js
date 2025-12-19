const express = require("express");
const router = express.Router();
const { addFeedback, getFeedbacks } = require("../controllers/feedback.controller");

router.post("/add", addFeedback);
router.get("/", getFeedbacks);

module.exports = router;
