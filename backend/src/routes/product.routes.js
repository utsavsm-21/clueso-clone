const express = require("express");
const router = express.Router();
const { addProduct, getProducts } = require("../controllers/product.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Protect routes with JWT
router.post("/add", authMiddleware, addProduct);
router.get("/", authMiddleware, getProducts);

module.exports = router;
