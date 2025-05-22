"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { bestSellers } from "@/lib/constants/bestSellers";

export default function BestSellersPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProductShowcase
          title="Best Sellers"
          subtitle="Customer favorites"
          products={bestSellers}
          fullWidth
        />
      </motion.div>
    </div>
  );
}
