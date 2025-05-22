// src/app/blog/page.tsx
"use client";
import { motion } from "framer-motion";
import BlogCard from "@/components/content/BlogCard";
import { blogPosts } from "@/lib/constants/blogPosts";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";
import { Pagination } from "./pagination";
import BlogSearchCombobox from "@/components/content/BlogSearchCombobox";

// Number of posts per page
const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  // Get posts for current page
  const paginatedPosts = blogPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Blog
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Latest news, tips, and insights
        </p>
        <BlogSearchCombobox posts={blogPosts} />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              maxVisiblePages={5}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

// <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Previous
//             </button>

//             {/* Page numbers */}
//             <div className="flex gap-1">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <button
//                     key={page}
//                     onClick={() => handlePageChange(page)}
//                     className={`px-4 py-2 rounded-md ${
//                       currentPage === page
//                         ? "bg-blue-600 text-white"
//                         : "border border-gray-300 dark:border-gray-600"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 )
//               )}
//             </div>

//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Next
//             </button>
