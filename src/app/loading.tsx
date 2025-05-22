"use client";
import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.svg
          className="w-16 h-16 text-indigo-600 dark:text-indigo-400"
          viewBox="0 0 24 24"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray="80"
            strokeDashoffset="60"
          />
        </motion.svg>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium text-gray-600 dark:text-gray-300"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
