"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";

const MobileMenu = ({
  isOpen,
  onClose,
  links,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: any[];
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 z-40 dark:bg-gray-900 bg-white pt-20 px-4`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full dark:text-white dark:hover:bg-gray-800 text-gray-900 hover:bg-gray-100`}
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col h-full">
            <nav className="flex-1 space-y-6 py-6">
              {links.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 text-xl font-medium dark:text-white dark:hover:text-gray-300 text-gray-900 hover:text-gray-700`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div
              className={`py-6 border-t dark:border-gray-800 border-gray-200`}
            >
              <div className="flex items-center justify-center space-x-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900`}
                >
                  <Search className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900`}
                >
                  <User className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900`}
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute top-2 right-2 h-5 w-5 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs rounded-full">
                    3
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
