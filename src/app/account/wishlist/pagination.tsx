"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export default function Pagination({ currentPage, totalPages, onPageChange, className = "" }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <nav className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          onClick={(e) => {
            if (onPageChange) {
              e.preventDefault();
              onPageChange(page);
            }
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full border ${
            currentPage === page
              ? "border-primary-500 bg-primary-500 text-white"
              : "border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          }`}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
