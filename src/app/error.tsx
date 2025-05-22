"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 text-center bg-gradient-to-br from-rose-50 to-rose-100 dark:from-gray-900 dark:to-rose-900/20">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative"
      >
        <div className="text-9xl font-bold text-rose-500">500</div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute -top-6 -right-6 text-6xl"
        >
          💥
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Something went wrong!</h1>
        <p className="text-gray-600 dark:text-gray-300">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <button
          onClick={() => reset()}
          className="px-6 py-3 text-lg font-medium text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-colors dark:bg-rose-500 dark:hover:bg-rose-600"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 text-lg font-medium text-rose-600 border-2 border-rose-600 rounded-full hover:bg-rose-50 transition-colors dark:text-rose-400 dark:border-rose-400 dark:hover:bg-rose-900/30"
        >
          Go Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-sm text-rose-800/70 dark:text-rose-200/70"
      >
        Error code: {error.digest || "UNKNOWN"}
      </motion.div>
    </div>
  );
}
