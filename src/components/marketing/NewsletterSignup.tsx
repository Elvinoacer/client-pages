"use client";

import { useState } from "react";
import { MailCheck } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Join our newsletter
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Get the latest updates on new products and promotions
        </p>
        {submitted ? (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-md">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 sm:flex">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MailCheck className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 dark:bg-primary-700 dark:hover:bg-primary-600"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
