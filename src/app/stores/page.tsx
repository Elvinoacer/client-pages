"use client";
import { motion } from "framer-motion";
import StoreCard from "@/components/content/StoreCard";
import { stores } from "@/lib/constants/stores";

export default function StoresPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Stores
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Visit us at one of our locations
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
