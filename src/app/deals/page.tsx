"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { bestDeals } from "@/lib/constants/bestDeals";

export default function DealsPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProductShowcase
          title="Special Offers"
          subtitle="Limited-time deals and discounts"
          products={bestDeals}
          fullWidth
        />
      </motion.div>
    </div>
  );
}
