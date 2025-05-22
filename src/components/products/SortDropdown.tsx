"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const sortOptions = [
  { name: "Most Popular", value: "popular" },
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "Highest Rated", value: "rating" },
];

export default function SortDropdown() {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        onClick={() => setOpen(!open)}
      >
        {selectedOption.name}
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`block w-full px-4 py-2 text-sm text-left ${
                  selectedOption.value === option.value
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => {
                  setSelectedOption(option);
                  setOpen(false);
                }}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
