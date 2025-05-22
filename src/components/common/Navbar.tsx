"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Deals", href: "/deals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`fixed w-full z-50 ${
          scrolled ? "backdrop-blur-md bg-opacity-90" : ""
        } dark:bg-gray-900/90 dark:text-white bg-white/90 text-gray-900 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span
                  className={`text-xl font-bold  dark:text-white text-gray-900  `}
                >
                  Shop
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Ease
                  </span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`px-1 py-2 text-sm font-medium relative group dark:text-gray-300 dark:hover:text-white text-gray-700 hover:text-gray-900`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full dark:text-gray-300 dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100`}
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full dark:text-gray-300 dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100 `}
              >
                <User className="h-5 w-5" />
              </motion.button>

              <motion.div
                className="relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  className={`p-2 rounded-full cursor-pointer dark:text-gray-300 dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </button>
                <span className="absolute top-3 right-3 h-5 w-5 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs rounded-full">
                  3
                </span>
              </motion.div>

              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                <div className="w-6 flex flex-col items-end">
                  <span
                    className={`block h-0.5 w-6 rounded-full transition-all ${
                      mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    } dark:bg-white bg-gray-900`}
                  ></span>
                  <span
                    className={`block h-0.5 w-4 my-1 rounded-full transition-all ${
                      mobileMenuOpen ? "opacity-0" : ""
                    } dark:bg-white bg-gray-900`}
                  ></span>
                  <span
                    className={`block h-0.5 w-6 rounded-full transition-all ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    } dark:bg-white bg-gray-900`}
                  ></span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          links={navLinks}
        />
      </motion.header>
      {/* Spacer to account for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
