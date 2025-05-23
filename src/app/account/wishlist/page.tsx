"use client";
import { motion } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SectionHeader from "@/components/ui-2/SectionHeader";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/lib/constants/products";
import Pagination from "./pagination";

const ITEMS_PER_PAGE = 4;

export default function WishlistPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") || "1", 10);

  const wishlistItems = products.filter((p) => p.wishlisted);
  const totalPages = Math.ceil(wishlistItems.length / ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get current page items
  const paginatedItems = wishlistItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Redirect if invalid page
  if (page < 1 || page > totalPages) {
    handlePageChange(1);
    return null;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <SectionHeader title="My Wishlist" description={`${wishlistItems.length} saved items`} />

      {wishlistItems.length > 0 ? (
        <div className="mt-8 space-y-8">
          <ProductGrid>
            {paginatedItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>

          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} className="mt-8" />
            </div>
          )}
        </div>
      ) : (
        <div className="py-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your wishlist is empty</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Save items you love by clicking the heart icon on products
          </p>
        </div>
      )}
    </motion.div>
  );
}
