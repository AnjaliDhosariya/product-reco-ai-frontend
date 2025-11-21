import React from "react";
import PreferenceInput from "../components/PreferenceInput";
import ProductList from "../components/ProductList";
import { useRecommendations } from "../hooks/useRecommendations";
import "../App.css";

export default function Home() {
  const {
    input,
    setInput,
    recommended,
    loading,
    handleRecommend
  } = useRecommendations();

  return (
    <div className="app-container">
      <h1>AI Product Recommendation System</h1>

      <PreferenceInput
        input={input}
        setInput={setInput}
        onSubmit={handleRecommend}
      />

      {loading ? (
        <p style={{ marginTop: "20px" }}>Thinking...</p>
      ) : (
        <ProductList items={recommended} />
      )}
    </div>
  );
}
