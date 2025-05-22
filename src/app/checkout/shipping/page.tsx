"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingMethods from "@/components/checkout/ShippingMethods";
import { cartItems } from "@/lib/constants/cart";
import { addresses } from "@/lib/constants/account";
import { useRouter } from "next/navigation";

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
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Shipping Information
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                address.isDefault
                  ? "border-primary-500 bg-primary-50 dark:bg-gray-800"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            >
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {address.name}
                  {address.isDefault && (
                    <span className="ml-2 text-xs text-primary-600 dark:text-primary-400">
                      (Default)
                    </span>
                  )}
                </h3>
                <button
                  onClick={() =>
                    router.push(`/account/addresses/${address.id}/edit`)
                  }
                  className="text-sm cursor-pointer  text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Edit
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.state} {address.zip}
                </p>
                <p>{address.country}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
          + Add new address
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Shipping Method
          </h2>
          <ShippingMethods />
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/cart"
            className="mr-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Back to cart
          </Link>
          <Link
            href="/checkout/payment"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Continue to payment
          </Link>
        </div>
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary items={cartItems} />
      </div>
    </motion.div>
  );
}
