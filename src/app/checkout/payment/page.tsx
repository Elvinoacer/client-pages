"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import { cartItems } from "@/lib/constants/cart";

export default function PaymentPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:grid lg:grid-cols-12 lg:gap-x-12"
    >
      <div className="lg:col-span-7">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Payment Method
        </h2>

        <PaymentMethods />

        <div className="mt-8 flex justify-end">
          <Link
            href="/checkout/shipping"
            className="mr-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Back to shipping
          </Link>
          <Link
            href="/checkout/review"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Review order
          </Link>
        </div>
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary items={cartItems} />
      </div>
    </motion.div>
  );
}
