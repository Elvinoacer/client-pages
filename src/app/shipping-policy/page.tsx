"use client";
import { motion } from "framer-motion";

export default function ShippingPolicyPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Shipping Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: May 15, 2023
        </p>

        <div className="mt-8">
          <h2>1. Processing Time</h2>
          <p>
            Orders are typically processed within 1-2 business days. Processing
            time may be longer during holidays and sale periods.
          </p>

          <h2>2. Shipping Options</h2>
          <p>
            We offer several shipping options at checkout. Delivery times vary
            depending on the shipping method you select.
          </p>

          <h2>3. Shipping Rates</h2>
          <p>
            Shipping rates are calculated based on the weight of your order and
            the destination. You can view the shipping cost at checkout before
            placing your order.
          </p>

          <h2>4. International Shipping</h2>
          <p>
            We ship to most countries worldwide. International orders may be
            subject to customs fees and import taxes which are the
            responsibility of the customer.
          </p>

          <h2>5. Order Tracking</h2>
          <p>
            Once your order has shipped, you will receive a confirmation email
            with a tracking number to monitor your package&apos;s progress.
          </p>

          <h2>6. Damaged or Lost Packages</h2>
          <p>
            If your package arrives damaged or is lost in transit, please
            contact us within 7 days of delivery for assistance.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
