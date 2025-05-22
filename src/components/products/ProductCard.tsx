import { motion } from "framer-motion";
import Link from "next/link";
import Rating from "@/components/ui-2/Rating";
import { Product } from "@/types";

export default function ProductCard({
  product,
  highlightDeal = false,
}: {
  product: Product;
  highlightDeal?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-cover w-full h-full"
          />
          {highlightDeal && (
            <div className="absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-md">
              {Math.round(
                ((product.offerPrice
                  ? product.basePrice - product.offerPrice
                  : product.basePrice - 0) /
                  product.basePrice) *
                  100
              )}
              % OFF
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center mt-1">
            <Rating value={product.rating} />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              Kes {product.offerPrice}
            </span>
            {product.offerPrice && product.offerPrice < product.basePrice && (
              <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">
                Kes {product.basePrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
