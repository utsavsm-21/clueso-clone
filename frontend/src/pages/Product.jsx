import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import FeedbackForm from "../components/FeedbackForm";

export default function Product() {
  const { id } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  const [insight, setInsight] = useState("");

  useEffect(() => {
    api.get(`/feedback/${id}`).then(res => setFeedbacks(res.data));
    api.get(`/insight/${id}`).then(res => setInsight(res.data.summary));
  }, [id]);

  return (
    <div>
      <h1>Product Feedback</h1>
      <FeedbackForm productId={id} onFeedback={() => api.get(`/feedback/${id}`).then(res => setFeedbacks(res.data))} />
      <h2>AI Insight</h2>
      <p>{insight}</p>
      <h2>All Feedbacks</h2>
      {feedbacks.map(f => (
        <div key={f.id}>
          <p>{f.feedbackText}</p>
          <small>{f.userEmail} | {f.pageUrl}</small>
        </div>
      ))}
    </div>
  );
}
