import { useState } from "react";
import { getUserCriteria } from "../services/aiService";

export function useRecommendations() {
  const [input, setInput] = useState("");
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleRecommend() {
    if (!input.trim()) return; // ignore empty input

    setLoading(true);
    setRecommended([]); // clear old results

    try {
      const products = await getUserCriteria(input);

      // Always guarantee an array
      setRecommended(Array.isArray(products) ? products : []);
    } catch (err) {
      console.error("Recommendation Error:", err);
      setRecommended([]);
    } finally {
      setLoading(false);
    }
  }

  return {
    input,
    setInput,
    recommended,
    loading,
    handleRecommend
  };
}
