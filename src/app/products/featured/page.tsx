"use client";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumb from "@/components/ui-2/Breadcrumb";
import { products } from "@/lib/constants/products";

export default function FeaturedPage() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "Featured", href: "/products/featured" },
        ]}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Our hand-picked selection of premium products</p>
      </motion.div>

      <ProductGrid>
        {featuredProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  );
}
