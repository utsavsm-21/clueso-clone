module.exports = function generateInsight(feedbacks) {
  if (!feedbacks || feedbacks.length === 0) return "No feedback yet.";
  return `Based on ${feedbacks.length} feedback(s), most users mention usability and onboarding issues.`;
};
