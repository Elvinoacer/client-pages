import { products } from "./products";

export const newArrivals = [...products]
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  .slice(0, 8);
