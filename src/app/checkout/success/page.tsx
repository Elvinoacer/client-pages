"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircleIcon } from "lucide-react";
import { order } from "@/lib/constants/cart";

export default function SuccessPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <CheckCircleIcon className="w-16 h-16 mx-auto text-green-500" />
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
        Order Confirmed!
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Your order #{order.id} has been placed successfully.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        We&apos;ve sent a confirmation email with all the details.
      </p>

      <div className="mt-8">
        <Link
          href="/account/orders"
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
        >
          View Order
        </Link>
      </div>

      <div className="mt-4">
        <Link
          href="/products"
          className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Continue Shopping →
        </Link>
      </div>
    </motion.div>
  );
}
