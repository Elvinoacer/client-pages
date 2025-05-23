"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Sample products data - replace with your actual data source
  const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics" },
    { id: 2, name: "Running Shoes", category: "Footwear" },
    { id: 3, name: "Organic Cotton T-Shirt", category: "Clothing" },
    { id: 4, name: "Smart Watch", category: "Electronics" },
    { id: 5, name: "Leather Wallet", category: "Accessories" },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <span className={`text-xl font-bold  dark:text-white text-gray-900  `}>
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
                <motion.div key={link.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            <div className="flex items-center space-x-4 cursor-pointer">
              <motion.button
                onClick={() => setSearchOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full dark:text-gray-300 dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100`}
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <motion.button
                onClick={() => router.push("/account")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full dark:text-gray-300 dark:hover:bg-gray-800 text-gray-700 hover:bg-gray-100 `}
              >
                <User className="h-5 w-5" />
              </motion.button>

              <motion.div
                onClick={() => router.push("/cart")}
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
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={navLinks} />
      </motion.header>

      {/* Spacer to account for fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-2xl mx-auto mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for products, categories..."
                    className="w-full px-4 py-2 text-lg bg-transparent border-none focus:ring-0 dark:text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                {searchQuery ? (
                  filteredProducts.length > 0 ? (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Search Results</h3>
                      {filteredProducts.map((product) => (
                        <motion.div
                          key={product.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                          onClick={() => {
                            router.push(`/products/${product.id}`);
                            setSearchOpen(false);
                          }}
                        >
                          <div className="font-medium dark:text-white">{product.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{product.category}</div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <div className="text-gray-500 dark:text-gray-400">
                        <Search className="mx-auto h-12 w-12" />
                        <h3 className="mt-2 text-lg font-medium dark:text-white">No products found</h3>
                        <p className="mt-1">Try searching for something else or browse our collections</p>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="py-8 text-center">
                    <div className="text-gray-500 dark:text-gray-400">
                      <Search className="mx-auto h-12 w-12" />
                      <h3 className="mt-2 text-lg font-medium dark:text-white">What are you looking for?</h3>
                      <p className="mt-1">Search for products, categories, or brands</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSearchQuery("Electronics")}
                          className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          Electronics
                        </button>
                        <button
                          onClick={() => setSearchQuery("Clothing")}
                          className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          Clothing
                        </button>
                        <button
                          onClick={() => setSearchQuery("Accessories")}
                          className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          Accessories
                        </button>
                        <button
                          onClick={() => setSearchQuery("New Arrivals")}
                          className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          New Arrivals
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
