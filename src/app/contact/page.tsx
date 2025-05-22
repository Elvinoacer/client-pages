"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/content/ContactForm";

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="prose dark:prose-invert">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p>
              Have questions or feedback? We&apos;d love to hear from you! Our
              team is available to help with any inquiries you may have.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  support@example.com
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Commerce Street
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
