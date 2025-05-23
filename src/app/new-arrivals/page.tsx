"use client";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/marketing/ProductShowcase";
import { newArrivals } from "@/lib/constants/newArrivals";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "../blog/pagination";
const ITEMS_PER_PAGE = 8;
export default function NewArrivalsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Calculate total number of pages
  const totalPages = Math.ceil(newArrivals.length / ITEMS_PER_PAGE);

  // Get posts for current page
  const paginatedArrivals = newArrivals.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
          title="New Arrivals"
          subtitle="Our latest products just for you"
          products={paginatedArrivals}
          fullWidth
        />
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center mb-3">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              maxVisiblePages={5}
              onPageChange={handlePageChange}
              className="rounded-md shadow-sm"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
