export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>

      <p><strong>Category:</strong> {product.category}</p>

      {product.brand && (
        <p><strong>Brand:</strong> {product.brand}</p>
      )}

      <p><strong>Price:</strong> ${product.price}</p>

      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      )}
    </div>
  );
}
