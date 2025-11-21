import ProductCard from "./ProductCard";

export default function ProductList({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p style={{ marginTop: "20px", opacity: 0.7 }}>No recommendations yet.</p>;
  }

  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id || p.title} product={p} />
      ))}
    </div>
  );
}
