"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";

const PaymentSupportPage = () => {
  const { theme } = useTheme();

  const paymentMethods = [
    {
      name: "Credit/Debit Cards",
      description: "Visa, Mastercard, American Express, Discover",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      name: "PayPal",
      description: "Secure payments with PayPal",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.15a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
        </svg>
      ),
    },
    {
      name: "Bank Transfer",
      description: "Direct transfer from your bank account",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      ),
    },
    {
      name: "Cryptocurrency",
      description: "Pay with Bitcoin, Ethereum, and other cryptocurrencies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption and never store your full payment details on our servers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and select cryptocurrencies.",
    },
    {
      question: "Can I change my payment method after ordering?",
      answer:
        "For existing orders, please contact our support team. For future orders, you can change your payment method at checkout.",
    },
    {
      question: "Why was my payment declined?",
      answer:
        "Payments can be declined for various reasons including insufficient funds, bank restrictions, or incorrect details. Please verify your information or contact your bank.",
    },
    {
      question: "Do you offer payment plans or installments?",
      answer:
        "Yes, we offer installment options through select payment providers at checkout.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Payment Support | Your E-commerce</title>
        <meta
          name="description"
          content="Get help with payments, billing, and payment methods for your orders"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Payment Support
            </h1>
            <p className="max-w-3xl mx-auto text-xl">
              Need help with payments? We&apos;ve got you covered. Find answers
              to common questions or contact our support team.
            </p>
          </motion.div>

          {/* Payment Methods */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Accepted Payment Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`rounded-lg p-6 flex flex-col items-center text-center ${
                    theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full mb-4 ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.name}</h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`rounded-lg overflow-hidden ${
                    theme === "dark" ? "bg-gray-800" : "bg-white shadow"
                  }`}
                >
                  <details className="group">
                    <summary className="list-none">
                      <div
                        className={`flex justify-between items-center p-4 cursor-pointer ${
                          theme === "dark"
                            ? "hover:bg-gray-700"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <h3 className="font-medium">{faq.question}</h3>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div
                      className={`p-4 ${
                        theme === "dark" ? "bg-gray-750" : "bg-gray-50"
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Support */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white shadow-xl"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
              <p className="text-xl mb-6">
                Our support team is available 24/7 to assist with any
                payment-related questions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className={`px-6 py-3 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Contact Support
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:254792156094"
                  className={`px-6 py-3 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Call Us Now
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default PaymentSupportPage;
