// src/components/products/PriceFilter.tsx

"use client";

import { Product } from "@/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PriceFilter({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedRanges, setSelectedRanges] = useState<string[]>([]);

  const priceRanges = [
    { id: "0-500", name: "Under Kes 500", min: 0, max: 500 },
    { id: "500-1000", name: "Kes 500 to Kes 1000", min: 500, max: 1000 },
    { id: "1000-2000", name: "Kes 1000 to Kes 2000", min: 1000, max: 2000 },
    { id: "2000-15000", name: "Kes 2000 to Kes 15000", min: 2000, max: 15000 },
    { id: "50k+", name: "Kes 50K & Above", min: 50000, max: Infinity },
  ];

  // Calculate counts for each price range
  const rangesWithCounts = priceRanges.map((range) => {
    const count = products.filter((product) => {
      const price = product.offerPrice || product.basePrice;
      return price >= range.min && price <= range.max;
    }).length;
    return { ...range, count };
  });

  // Initialize selected ranges from URL
  useEffect(() => {
    const priceParams = searchParams.get("prices");
    if (priceParams) {
      setSelectedRanges(priceParams.split(","));
    }
  }, [searchParams]);

  // Handle price range selection change
  const handleRangeChange = (rangeId: string) => {
    let newRanges;
    if (selectedRanges.includes(rangeId)) {
      newRanges = selectedRanges.filter((id) => id !== rangeId);
    } else {
      newRanges = [...selectedRanges, rangeId];
    }

    setSelectedRanges(newRanges);
    updateUrlParams(newRanges);
  };

  // Update URL with new price filters
  const updateUrlParams = (ranges: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (ranges.length > 0) {
      params.set("prices", ranges.join(","));
      params.set("page", "1"); // Reset to first page when filters change
    } else {
      params.delete("prices");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  // Select all/none functionality
  const toggleAllRanges = (selectAll: boolean) => {
    const newRanges = selectAll ? rangesWithCounts.map((r) => r.id) : [];
    setSelectedRanges(newRanges);
    updateUrlParams(newRanges);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Price
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => toggleAllRanges(true)}
            className="text-xs text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            All
          </button>
          <button
            onClick={() => toggleAllRanges(false)}
            className="text-xs text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            None
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {rangesWithCounts.map((range) => (
          <div key={range.id} className="flex items-center">
            <input
              id={`price-${range.id}`}
              name="price[]"
              type="checkbox"
              checked={selectedRanges.includes(range.id)}
              onChange={() => handleRangeChange(range.id)}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
              disabled={range.count === 0}
            />
            <label
              htmlFor={`price-${range.id}`}
              className={`ml-3 text-sm ${
                range.count === 0
                  ? "text-gray-400 dark:text-gray-500"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {range.name} ({range.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
