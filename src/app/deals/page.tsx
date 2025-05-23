"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { bestDeals } from "@/lib/constants/bestDeals";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@/app/blog/pagination";
const ITEMS_PER_PAGE = 6;
export default function DealsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Calculate total number of pages
  const totalPages = Math.ceil(bestDeals.length / ITEMS_PER_PAGE);

  // Get posts for current page
  const paginatedDeals = bestDeals.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
        <ProductShowcase
          highlightDeal
          title="Special Offers"
          subtitle="Limited-time deals and discounts"
          products={paginatedDeals}
          fullWidth
        />
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <Pagination currentPage={currentPage} totalPages={totalPages} maxVisiblePages={5} />
          </div>
        )}
      </motion.div>
    </div>
  );
}
