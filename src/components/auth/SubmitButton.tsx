import { motion } from "framer-motion";

export default function SubmitButton({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type="submit"
      disabled={disabled}
      className={`w-full px-4 py-2 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
        disabled
          ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
          : "bg-primary-600 hover:bg-primary-700 text-white"
      }`}
    >
      {children}
    </motion.button>
  );
}
