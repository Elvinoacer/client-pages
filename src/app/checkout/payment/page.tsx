"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import { cartItems } from "@/lib/constants/cart";
import CheckoutButtons from "@/components/checkout/action-button";

export default function PaymentPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:grid lg:grid-cols-12 lg:gap-x-12"
    >
      <div className="lg:col-span-7">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payment Method</h2>

        <PaymentMethods />

        <CheckoutButtons
          undoText="Back to shipping"
          continueText="Review order"
          hrefs={["/checkout/shipping", "/checkout/review"]}
        />
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary showCheckoutButton={false} items={cartItems} />
      </div>
    </motion.div>
  );
}
