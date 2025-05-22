"use client";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumb from "@/components/ui-2/Breadcrumb";
import { products } from "@/lib/constants/products";

export default function DealsPage() {
  const dealProducts = products.filter(
    (product) => product.offerPrice < product.basePrice
  );

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "Deals", href: "/products/deals" },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Special Deals
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Limited-time offers and discounts
        </p>
      </motion.div>

      <ProductGrid>
        {dealProducts.map((product) => (
          <ProductCard key={product.id} product={product} highlightDeal />
        ))}
      </ProductGrid>
    </div>
  );
}
