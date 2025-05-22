import { products } from "./products";

export const bestSellers = [...products]
  .sort((a, b) => b.purchases - a.purchases)
  .slice(0, 8);
