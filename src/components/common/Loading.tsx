"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-2"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Loading Magic
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Preparing something awesome for you...
        </p>
      </motion.div>

      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-3 h-3 bg-indigo-500 rounded-full"
          />
        ))}
      </motion.div>
    </div>
  );
}
