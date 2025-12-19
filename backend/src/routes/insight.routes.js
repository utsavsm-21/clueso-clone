const express = require("express");
const router = express.Router();
const { addInsight, getInsights } = require("../controllers/insight.controller");

router.post("/add", addInsight);
router.get("/", getInsights);

module.exports = router;
