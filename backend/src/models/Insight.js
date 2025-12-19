const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("./Product");

const Insight = sequelize.define("Insight", {
  summary: { type: DataTypes.TEXT, allowNull: false },
  metrics: DataTypes.JSON
});

// Associations
Insight.belongsTo(Product);
Product.hasMany(Insight);

module.exports = Insight;
