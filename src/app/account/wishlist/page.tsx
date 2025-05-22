"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui-2/SectionHeader";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/lib/constants/products";

export default function WishlistPage() {
  const wishlistItems = products.filter((p) => p.wishlisted);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader title="My Wishlist" description="Your saved items" />

      {wishlistItems.length > 0 ? (
        <div className="mt-8">
          <ProductGrid>
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      ) : (
        <div className="py-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Your wishlist is empty
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Save items you love by clicking the heart icon on products
          </p>
        </div>
      )}
    </motion.div>
  );
}
