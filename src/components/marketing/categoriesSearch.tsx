"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  priority: number;
  image: string;
  parentId: string | null;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  metadata: {
    seasonal?: boolean;
    discountEligible?: boolean;
    trending?: boolean;
  };
}

export function CategoryCombobox({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const comboboxRef = useRef<HTMLDivElement>(null);

  // Filter categories based on search term across multiple fields
  const filteredCategories = categories.filter((category) => {
    if (!searchTerm) return false;

    const searchLower = searchTerm.toLowerCase();
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.slug.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      (category.metadata.seasonal && "seasonal".includes(searchLower)) ||
      (category.metadata.trending && "trending".includes(searchLower)) ||
      (category.metadata.discountEligible &&
        "sale discount".includes(searchLower)) ||
      `priority ${category.priority}`.includes(searchLower)
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
        Math.min(prev + 1, filteredCategories.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredCategories[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (category: Category) => {
    router.push(`/products/category/${category.slug}`);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-md" ref={comboboxRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="Search categories..."
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

      <AnimatePresence>
        {isOpen && searchTerm && filteredCategories.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 max-h-96 overflow-auto"
          >
            {filteredCategories.map((category, index) => (
              <motion.li
                key={category.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className={`w-full text-left p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-4 ${
                    selectedIndex === index ? "bg-gray-50 dark:bg-gray-600" : ""
                  }`}
                  onClick={() => handleSelect(category)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden dark:bg-gray-700">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate dark:text-white">
                        {category.name}
                      </h3>
                      {category.isFeatured && (
                        <span className="px-2 py-1 text-xs font-medium text-primary-800 bg-primary-100 rounded-full dark:bg-primary-900 dark:text-primary-200">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {category.metadata.seasonal && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Seasonal
                        </span>
                      )}
                      {category.metadata.trending && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Trending
                        </span>
                      )}
                      {category.metadata.discountEligible && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          On Sale
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

      {isOpen && searchTerm && filteredCategories.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 w-full p-4 mt-1 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          No categories found for &quot;{searchTerm}&quot;
        </motion.div>
      )}
    </div>
  );
}
