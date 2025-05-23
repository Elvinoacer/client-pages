// components/products/EmptyState.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

interface EmptyStateProps {
  categoryName: string;
}

export function EmptyState({ categoryName }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 text-center"
    >
      <div className="max-w-md mx-auto">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500 mb-6"
        >
          <Search className="w-full h-full" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300"
        >
          No products found in {categoryName}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 dark:text-gray-300"
        >
          We couldn't find any products matching this category. Maybe try something else?
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
          <Link
            href="/products"
            className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg group hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <span className="absolute right-0 -mt-12 transition-all duration-300 transform translate-x-12 group-hover:translate-x-4 opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="relative w-full text-center transition-all duration-300 transform group-hover:translate-x-4">
              Browse All Products
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
