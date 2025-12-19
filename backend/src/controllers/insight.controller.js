const Insight = require("../models/Insight");

exports.addInsight = async (req, res) => {
  try {
    const { summary, metrics, ProductId } = req.body;
    const insight = await Insight.create({ summary, metrics, ProductId });
    res.status(201).json({ message: "Insight added", insight });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInsights = async (req, res) => {
  try {
    const insights = await Insight.findAll();
    res.json(insights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
