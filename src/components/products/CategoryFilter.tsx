// src/components/products/CategoryFilter.tsx
"use client";

import { categories } from "@/lib/constants/categories";
import { Product } from "@/types";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryFilter({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  // Calculate category counts from products
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count: products.filter((product) => product.categoryId === category.id)
      .length,
  }));

  // Initialize selected categories from URL
  useEffect(() => {
    const categoryParams = searchParams.get("categories");
    if (categoryParams) {
      setSelectedCategories(categoryParams.split(",").map(Number));
    }
  }, [searchParams]);

  // Handle category selection change
  const handleCategoryChange = (categoryId: number) => {
    let newCategories;
    if (selectedCategories.includes(categoryId)) {
      newCategories = selectedCategories.filter((id) => id !== categoryId);
    } else {
      newCategories = [...selectedCategories, categoryId];
    }

    setSelectedCategories(newCategories);
    updateUrlParams(newCategories);
  };

  // Update URL with new category filters
  const updateUrlParams = (categories: number[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categories.length > 0) {
      params.set("categories", categories.join(","));
      params.set("page", "1"); // Reset to first page when filters change
    } else {
      params.delete("categories");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  // Select all/none functionality
  const toggleAllCategories = (selectAll: boolean) => {
    const newCategories = selectAll
      ? categoriesWithCounts.map((c) => c.id)
      : [];
    setSelectedCategories(newCategories);
    updateUrlParams(newCategories);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Categories
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleAllCategories(true)}
            className="text-xs text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            All
          </button>
          <button
            onClick={() => toggleAllCategories(false)}
            className="text-xs text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            None
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {categoriesWithCounts.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              id={`category-${category.id}`}
              name="category[]"
              type="checkbox"
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
              disabled={category.count === 0}
            />
            <label
              htmlFor={`category-${category.id}`}
              className={`ml-3 text-sm ${
                category.count === 0
                  ? "text-gray-400 dark:text-gray-500"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {category.name} ({category.count})
            </label>
          </div>
        ))}
        <div className="flex justify-center pt-2">
          <Link
            href="/categories"
            className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}
