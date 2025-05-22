"use client";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Last updated: May 15, 2023
        </p>

        <div className="mt-8">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on our website, place an order, or interact with
            our services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our
            services, process transactions, and communicate with you.
          </p>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access or
            disclosure.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience. You can choose
            to disable cookies through your browser settings.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may employ third-party companies to facilitate our services, and
            they may have access to your personal information only to perform
            specific tasks on our behalf.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information at any time by contacting us.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
