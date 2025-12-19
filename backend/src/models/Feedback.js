const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Product = require("./Product");

const Feedback = sequelize.define("Feedback", {
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: DataTypes.TEXT
});

// Associations
Feedback.belongsTo(User);
User.hasMany(Feedback);

Feedback.belongsTo(Product);
Product.hasMany(Feedback);

module.exports = Feedback;
