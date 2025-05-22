import { products } from "./products";

export const bestDeals = products
  .filter((product) => product.offerPrice < product.basePrice)
  .sort((a, b) => {
    const discountA = ((a.basePrice - a.offerPrice) / a.basePrice) * 100;
    const discountB = ((b.basePrice - b.offerPrice) / b.basePrice) * 100;
    return discountB - discountA;
  })
  .slice(0, 8);
