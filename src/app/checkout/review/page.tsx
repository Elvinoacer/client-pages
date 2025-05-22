"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import { cartItems, shippingMethod, paymentMethod } from "@/lib/constants/cart";
import { addresses } from "@/lib/constants/account";

export default function ReviewPage() {
  const shippingAddress = addresses.find((a) => a.isDefault);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:grid lg:grid-cols-12 lg:gap-x-12"
    >
      <div className="lg:col-span-7">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Review Your Order
        </h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">
              Shipping Information
            </h3>
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>{shippingAddress?.name}</p>
                <p>{shippingAddress?.address}</p>
                <p>
                  {shippingAddress?.city}, {shippingAddress?.state}{" "}
                  {shippingAddress?.zip}
                </p>
                <p>{shippingAddress?.country}</p>
                <p className="mt-2">{shippingAddress?.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">
              Shipping Method
            </h3>
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {shippingMethod.name} • Kes {shippingMethod.price}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Estimated delivery: {shippingMethod.estimatedDelivery}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">
              Payment Method
            </h3>
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {paymentMethod.type} ending in {paymentMethod.last4}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Billing address same as shipping
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/checkout/payment"
            className="mr-4 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Back to payment
          </Link>
          <Link
            href="/checkout/success"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
          >
            Place Order
          </Link>
        </div>
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary items={cartItems} showCheckoutButton={false} />
      </div>
    </motion.div>
  );
}
