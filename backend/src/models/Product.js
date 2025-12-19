const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  price: { type: DataTypes.FLOAT, allowNull: false }
});

// Associations
Product.belongsTo(User);    // Each product belongs to a user
User.hasMany(Product);

module.exports = Product;
