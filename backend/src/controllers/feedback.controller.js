const Feedback = require("../models/Feedback");

exports.addFeedback = async (req, res) => {
  try {
    const { rating, comment, userId, ProductId } = req.body;
    const feedback = await Feedback.create({ rating, comment, UserId: userId, ProductId });
    res.status(201).json({ message: "Feedback added", feedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
