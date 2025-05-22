"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumb from "@/components/ui-2/Breadcrumb";
import { products } from "@/lib/constants/products";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "Search", href: `/products/search?q=${query}` },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Search Results
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {filteredProducts.length} results for &quot;{query}&quot;
        </p>
      </motion.div>

      {filteredProducts.length > 0 ? (
        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <div className="py-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            No products found
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter to find what you&apos;re looking
            for.
          </p>
        </div>
      )}
    </div>
  );
}
