// src/components/content/BlogSearchCombobox.tsx
"use client";
import { BlogPost } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface BlogSearchComboboxProps {
  posts: BlogPost[];
}

export default function BlogSearchCombobox({ posts }: BlogSearchComboboxProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const comboboxRef = useRef<HTMLDivElement>(null);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.slug.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.author.toLowerCase().includes(searchLower)
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
      setSelectedIndex((prev) => Math.min(prev + 1, filteredPosts.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredPosts[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (post: BlogPost) => {
    router.push(`/blog/${post.slug}`);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-8" ref={comboboxRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search blog posts..."
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
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={() => {
              setSearchTerm("");
              setIsOpen(false);
            }}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && searchTerm && filteredPosts.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 max-h-96 overflow-auto"
          >
            {filteredPosts.map((post, index) => (
              <motion.li
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedIndex === index ? "bg-blue-50 dark:bg-gray-600" : ""
                  }`}
                  onClick={() => handleSelect(post)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="font-medium text-gray-900 dark:text-white">
                    {post.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-400 dark:text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.publishedAt}</span>
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {isOpen && searchTerm && filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 w-full p-4 mt-1 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        >
          No results found for &quot;{searchTerm}&quot;
        </motion.div>
      )}
    </div>
  );
}
