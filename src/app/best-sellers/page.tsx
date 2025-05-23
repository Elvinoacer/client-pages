"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { bestSellers } from "@/lib/constants/bestSellers";
import { Pagination } from "@/app/blog/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchCombobox from "@/components/products/SearchCombobox";

const SELLERS_PER_PAGE = 6;

export default function BestSellersPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Calculate total number of pages
  const totalPages = Math.ceil(bestSellers.length / SELLERS_PER_PAGE);

  // Get posts for current page
  const paginatedSellers = bestSellers.slice((currentPage - 1) * SELLERS_PER_PAGE, currentPage * SELLERS_PER_PAGE);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If invalid page number, redirect to first page
  if (currentPage < 1 || currentPage > totalPages) {
    handlePageChange(1);
    return null;
  }
  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <ProductShowcase title="Best Sellers" subtitle="Customer favorites" products={paginatedSellers} fullWidth />

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <Pagination currentPage={currentPage} totalPages={totalPages} maxVisiblePages={5} />
          </div>
        )}
      </motion.div>
    </div>
  );
}
