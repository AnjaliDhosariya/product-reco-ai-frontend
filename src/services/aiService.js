export async function getUserCriteria(prompt) {
  const response = await fetch("http://localhost:3001/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();

  // Always return at least an empty array, NEVER undefined
  return data.products || [];
}
