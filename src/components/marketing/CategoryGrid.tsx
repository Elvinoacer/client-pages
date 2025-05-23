"use client";
import Link from "next/link";
import Image from "next/image";
import categories from "@/lib/constants/categories.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@/app/blog/pagination";
import { CategoryCombobox } from "./categoriesSearch";

const CATEGORY_PER_PAGE = 8;

export default function CategoryGrid({ hidePagination }: { hidePagination?: boolean }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  // Calculate total number of pages
  const totalPages = Math.ceil(categories.length / CATEGORY_PER_PAGE);

  // Get posts for current page
  const paginatedCategories = categories.slice((currentPage - 1) * CATEGORY_PER_PAGE, currentPage * CATEGORY_PER_PAGE);

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
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shop by Category</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Browse our wide range of products</p>
        </div>

        {searchParams.get("page") && (
          <Link
            href="/categories"
            className="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            &larr; Start
          </Link>
        )}
        {hidePagination && (
          <Link
            href="/categories"
            className="text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            View all categories&rarr;
          </Link>
        )}
      </div>
      {!hidePagination && (
        <div className="container mx-auto p-4 flex justify-center">
          <CategoryCombobox categories={categories} />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {paginatedCategories.map((category) => (
          <Link
            key={category.id}
            href={`/products/category/${category.slug}`}
            className="group relative block overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
          >
            <div className="aspect-square relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-lg font-medium text-white">
                {category.name}
                {category.priority && (
                  <span className="text-sm font-normal opacity-80 ml-1">({category.priority})</span>
                )}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {!hidePagination && totalPages > 1 && (
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
    </div>
  );
}
