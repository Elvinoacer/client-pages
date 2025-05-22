"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { newArrivals } from "@/lib/constants/newArrivals";

export default function NewArrivalsPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProductShowcase
          title="New Arrivals"
          subtitle="Our latest products just for you"
          products={newArrivals}
          fullWidth
        />
      </motion.div>
    </div>
  );
}
