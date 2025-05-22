"use client";
import { motion } from "framer-motion";
import TrackOrderForm from "@/components/support/TrackOrderForm";
import { shippingStatus } from "@/lib/constants/shippingStatus";

export default function TrackOrderPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Track Your Order
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter your order details to check the current status
        </p>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <TrackOrderForm />
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Shipping Status Information
          </h2>
          <div className="mt-4 space-y-4">
            {shippingStatus.map((status) => (
              <div
                key={status.id}
                className="p-4 border rounded-lg dark:border-gray-700"
              >
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      status.active
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  ></div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {status.name}
                  </h3>
                </div>
                <p className="mt-2 ml-6 text-sm text-gray-600 dark:text-gray-400">
                  {status.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
