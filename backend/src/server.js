const express = require("express");
require("dotenv").config();
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const feedbackRoutes = require("./routes/feedback.routes");
const insightRoutes = require("./routes/insight.routes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/insights", insightRoutes);


const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
