export function filterProducts(products, criteria) {
  if (!criteria) return [];

  return products.filter(p => {
    const matchCategory = criteria.category
      ? p.category.toLowerCase() === criteria.category.toLowerCase()
      : true;

    const matchPrice = criteria.max_price
      ? p.price <= criteria.max_price
      : true;

    return matchCategory && matchPrice;
  });
}
