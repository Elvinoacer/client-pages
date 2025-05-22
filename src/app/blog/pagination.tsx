// src/components/ui/Pagination.tsx
"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  maxVisiblePages?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  className,
  onPageChange,
  maxVisiblePages = 5,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`${pathname}?${params.toString()}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate visible page range
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div
      className={`${
        className ? className : ""
      } flex justify-center items-center gap-2 mt-8`}
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-blue-600 text-white"
                : "border border-gray-300 dark:border-gray-600"
            }`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "border border-gray-300 dark:border-gray-600"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-blue-600 text-white"
                : "border border-gray-300 dark:border-gray-600"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
