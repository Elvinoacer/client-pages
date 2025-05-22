// src/components/products/SearchCombobox.tsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/types";

export default function SearchCombobox({ products }: { products: Product[] }) {
  const router = useRouter();
  //   const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const comboboxRef = useRef<HTMLDivElement>(null);

  // Filter products based on search term
  const filteredProducts = products.filter((product) => {
    if (!searchTerm) return false;

    const searchLower = searchTerm.toLowerCase();
    return (
      product.slug.toLowerCase().includes(searchLower) ||
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.shortDescription.toLowerCase().includes(searchLower) ||
      product.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchLower)
      )
    );
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboboxRef.current &&
        !comboboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredProducts.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredProducts[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (product: Product) => {
    router.push(`/products/${product.slug}`);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      handleSelect(filteredProducts[0]);
    } else {
      router.push(`/products/search?q=${searchTerm}`);
    }
  };

  return (
    <div className="relative w-full" ref={comboboxRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
          />
          {searchTerm && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => {
                setSearchTerm("");
                setIsOpen(false);
              }}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      <AnimatePresence>
        {isOpen && searchTerm && filteredProducts.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 max-h-96 overflow-auto"
          >
            {filteredProducts.map((product, index) => (
              <motion.li
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className={`w-full text-left p-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-4 ${
                    selectedIndex === index ? "bg-gray-50 dark:bg-gray-600" : ""
                  }`}
                  onClick={() => handleSelect(product)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  {product.images && product.images.length > 0 && (
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden dark:bg-gray-700">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate dark:text-white">
                      {product.title}
                    </div>
                    <div className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.shortDescription}
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        ${product.offerPrice || product.basePrice}
                      </span>
                      {product.offerPrice && (
                        <span className="ml-2 text-xs text-gray-500 line-through dark:text-gray-400">
                          ${product.basePrice}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {isOpen && searchTerm && filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-20 w-full p-3 mt-1 text-sm text-gray-500 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          No products found for &quot;{searchTerm}&quot;
        </motion.div>
      )}
    </div>
  );
}
