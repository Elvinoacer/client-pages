"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative"
      >
        <div className="text-9xl font-bold text-indigo-500">404</div>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-6 -right-6 text-6xl"
        >
          🔍
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Oops! The page you&apos;re looking for has vanished into the digital
          void.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/"
          className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full group dark:text-indigo-400 dark:border-indigo-400"
        >
          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mr-2"
          >
            ←
          </motion.span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-indigo-600 rounded-full group-hover:w-56 group-hover:h-56 opacity-10 dark:bg-indigo-400"></span>
          <span className="relative">Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
