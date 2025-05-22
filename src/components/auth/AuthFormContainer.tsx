import { motion } from "framer-motion";

export default function AuthFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-6 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      {children}
    </motion.div>
  );
}
