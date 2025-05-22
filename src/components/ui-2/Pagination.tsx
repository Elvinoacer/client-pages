"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination({
  totalItems,
  itemsPerPage = 10,
  currentPage = 1,
}: {
  totalItems: number;
  itemsPerPage?: number;
  currentPage?: number;
}) {
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-medium">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(currentPage * itemsPerPage, totalItems)}
          </span>{" "}
          of <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <Link
          href={createPageURL(currentPage - 1)}
          className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500"
              : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
          aria-disabled={currentPage === 1}
        >
          Previous
        </Link>
        <Link
          href={createPageURL(currentPage + 1)}
          className={`relative ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500"
              : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          Next
        </Link>
      </div>
    </nav>
  );
}
