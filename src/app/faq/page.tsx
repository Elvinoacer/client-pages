"use client";
import { motion } from "framer-motion";
import FaqItem from "@/components/content/FaqItem";
import { faqs } from "@/lib/constants/faqs";

export default function FaqPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Find answers to common questions about our products and services
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
