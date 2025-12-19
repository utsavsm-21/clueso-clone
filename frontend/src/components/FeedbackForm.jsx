import { useState } from "react";
import api from "../api/api";

export default function FeedbackForm({ productId, onFeedback }) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {
    await api.post("/feedback", { productId, feedbackText: text, userEmail: email, pageUrl: "/" });
    setText(""); setEmail("");
    onFeedback();
  };

  return (
    <div>
      <input placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <textarea placeholder="Your Feedback" value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={submit}>Submit Feedback</button>
    </div>
  );
}
