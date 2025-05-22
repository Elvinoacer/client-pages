"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import ProductDetails from "@/components/products/ProductDetails";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import Breadcrumb from "@/components/ui-2/Breadcrumb";
import { products } from "@/lib/constants/products";
import ProductCard from "@/components/products/ProductCard";
import React from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: product.title, href: `/products/${product.slug}` },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 mt-6 md:grid-cols-2"
      >
        <ProductImageGallery images={product.images} />
        <ProductDetails product={product} />
      </motion.div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px space-x-8">
            <button className="px-4 py-2 font-medium text-primary-600 border-b-2 border-primary-600 dark:text-primary-400 dark:border-primary-400">
              Description
            </button>
            <button className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">
              Specifications
            </button>
            <button className="px-4 py-2 font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300">
              Reviews
            </button>
          </nav>
        </div>

        <div className="py-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Product Details
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          You may also like
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4">
          {products
            .filter(
              (p) => p.categoryId === product.categoryId && p.id !== product.id
            )
            .slice(0, 4)
            .map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
}
