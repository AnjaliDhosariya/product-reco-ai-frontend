export async function getUserCriteria(prompt) {
  const response = await fetch(
    "https://product-reco-ai-backend-1.onrender.com/recommend",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    }
  );

  const data = await response.json();
  return data.products || [];
}
