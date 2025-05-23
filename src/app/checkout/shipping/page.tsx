"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingMethods from "@/components/checkout/ShippingMethods";
import { cartItems } from "@/lib/constants/cart";
import { addresses } from "@/lib/constants/account";
import { useRouter } from "next/navigation";
import AddressSelection from "./address-selection";
import CheckoutButtons from "@/components/checkout/action-button";

export default function ShippingPage() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:grid lg:grid-cols-12 lg:gap-x-12"
    >
      <div className="lg:col-span-7">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shipping Information</h2>
        <AddressSelection addresses={addresses} />
        <button
          onClick={() => router.push("/account/addresses/new")}
          className="mt-4 cursor-pointer flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
        >
          <span aria-hidden="true">+</span>
          <span className="ml-1">Add new address</span>
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Shipping Method</h2>
          <ShippingMethods />
        </div>
        <CheckoutButtons
          hrefs={["/cart", "/checkout/payment"]}
          undoText="Back to cart"
          continueText="Continue to payment"
        />
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary showCheckoutButton={false} items={cartItems} />
      </div>
    </motion.div>
  );
}
