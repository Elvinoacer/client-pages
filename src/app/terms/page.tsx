"use client";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: May 15, 2023
        </p>

        <div className="mt-8">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our website. By accessing and using our website, you
            accept and agree to be bound by the terms and provisions of this
            agreement.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, compilation, and other
            matters related to our website are protected under applicable
            copyrights and other proprietary laws.
          </p>

          <h2>3. User Obligations</h2>
          <p>
            As a user of our website, you agree not to use the website for any
            unlawful purpose or any purpose prohibited under this clause.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            We will not be liable for any damages that may occur to you as a
            result of your use of our website.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of our website after such changes constitutes your
            acceptance of the new terms.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
