"use client";
import CategoryFilter from "@/components/products/CategoryFilter";
import PriceFilter from "@/components/products/PriceFilter";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import SearchCombobox from "@/components/products/SearchCombobox";
import SortDropdown from "@/components/products/SortDropdown";
import Pagination from "@/components/ui-2/Pagination";

import { products } from "@/lib/constants/products";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const itemsPerPage = 8;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const page = +(searchParams.get("page") || 1);
  const categoriesParam = searchParams.get("categories");
  const pricesParam = searchParams.get("prices");

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Define price ranges here to match the PriceFilter component
  const priceRanges = [
    { id: "0-500", min: 0, max: 500 },
    { id: "500-1000", min: 500, max: 1000 },
    { id: "1000-2000", min: 1000, max: 2000 },
    { id: "2000-15000", min: 2000, max: 15000 },
    { id: "50k+", min: 50000, max: Infinity },
  ];

  // Apply filters whenever params change
  useEffect(() => {
    let result = [...products];

    // Apply category filter if specified
    if (categoriesParam) {
      const selectedCategories = categoriesParam.split(",").map(Number);
      result = result.filter((product) =>
        selectedCategories.includes(product.categoryId)
      );
    }

    // Apply price filter if specified
    if (pricesParam) {
      const selectedPriceRanges = pricesParam.split(",");
      result = result.filter((product) => {
        const price = product.offerPrice || product.basePrice;
        return selectedPriceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return range && price >= range.min && price <= range.max;
        });
      });
    }

    setFilteredProducts(result);
  }, [categoriesParam, pricesParam]);

  return (
    <div className="container px-4 py-8 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          All Products
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Browse our wide selection of products
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 md:col-span-1">
          <SearchCombobox products={products} />
          <CategoryFilter products={products} />
          <PriceFilter products={products} />
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {(page - 1) * itemsPerPage + 1}-
              {Math.min(page * itemsPerPage, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </p>
            <SortDropdown />
          </div>

          <ProductGrid>
            {filteredProducts
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </ProductGrid>

          <div className="mt-8">
            <Pagination
              totalItems={filteredProducts.length}
              currentPage={page}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
