import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductShowcase({
  title,
  subtitle,
  products,
  ctaText,
  ctaLink,
  fullWidth = false,
}: {
  title: string;
  subtitle: string;
  products: any[];
  ctaText?: string;
  ctaLink?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">{subtitle}</p>
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
      <div className="mt-6">
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </div>
  );
}
