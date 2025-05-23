import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";
import SearchCombobox from "../products/SearchCombobox";

export default function ProductShowcase({
  title,
  subtitle,
  products,
  highlightDeal,
  ctaText,
  ctaLink,
  fullWidth = false,
  hidePagination,
}: {
  title: string;
  highlightDeal?: boolean;
  hidePagination?: boolean;
  subtitle: string;
  products: any[];
  ctaText?: string;
  ctaLink?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      <div className="flex items-end justify-between">
        <div className={`${!hidePagination ? "w-full flex items-center flex-col" : ""}`}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">{subtitle}</p>
          <div className="w-[50%]">{!hidePagination && <SearchCombobox products={products} />}</div>
        </div>
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {ctaText}
          </Link>
        )}
      </div>
      <div className="mt-6 flex items-center">
        <ProductGrid>
          {products.map((product) => (
            <ProductCard highlightDeal={highlightDeal} key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </div>
  );
}
