"use client";

import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`min-h-screen flex flex-col dark:bg-gray-900 bg-gray-50`}>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
