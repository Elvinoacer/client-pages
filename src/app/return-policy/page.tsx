"use client";
import { motion } from "framer-motion";

export default function ReturnPolicyPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Return Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: May 15, 2023
        </p>

        <div className="mt-8">
          <h2>1. Returns</h2>
          <p>
            We accept returns within 30 days of purchase. To be eligible for a
            return, your item must be unused and in the same condition that you
            received it.
          </p>

          <h2>2. Refunds</h2>
          <p>
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund.
          </p>

          <h2>3. Late or Missing Refunds</h2>
          <p>
            If you haven&apos;t received a refund yet, first check your bank
            account again. Then contact your credit card company, it may take
            some time before your refund is officially posted.
          </p>

          <h2>4. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, send us an email at
            support@example.com.
          </p>

          <h2>5. Shipping Returns</h2>
          <p>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
