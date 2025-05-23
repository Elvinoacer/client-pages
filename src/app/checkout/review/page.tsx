"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import OrderSummary from "@/components/checkout/OrderSummary";
import { cartItems, shippingMethod, paymentMethod } from "@/lib/constants/cart";
import { addresses } from "@/lib/constants/account";
import CheckoutButtons from "@/components/checkout/action-button";

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
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Review Your Order</h2>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Shipping Information</h3>
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>{shippingAddress?.name}</p>
                <p>{shippingAddress?.address}</p>
                <p>
                  {shippingAddress?.city}, {shippingAddress?.state} {shippingAddress?.zip}
                </p>
                <p>{shippingAddress?.country}</p>
                <p className="mt-2">{shippingAddress?.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Shipping Method</h3>
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
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Payment Method</h3>
            <div className="mt-4 p-4 border rounded-lg dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {paymentMethod.type} ending in {paymentMethod.last4}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Billing address same as shipping</p>
            </div>
          </div>
        </div>
        <CheckoutButtons
          undoText="Back to payment"
          continueText="Place Order"
          hrefs={["/checkout/payment", "/checkout/success"]}
        />
      </div>

      <div className="mt-8 lg:col-span-5 lg:mt-0">
        <OrderSummary items={cartItems} showCheckoutButton={false} />
      </div>
    </motion.div>
  );
}
