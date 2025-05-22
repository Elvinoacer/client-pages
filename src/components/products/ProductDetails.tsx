import Rating from "@/components/ui-2/Rating";
import { Product } from "@/types";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {product.title}
        </h1>
        <div className="flex items-center mt-2">
          <Rating value={product.rating} />
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Kes {product.offerPrice}
          </span>
          {product.offerPrice && product.offerPrice < product.basePrice && (
            <span className="ml-2 text-lg text-gray-500 line-through dark:text-gray-400">
              Kes {product.basePrice}
            </span>
          )}
          {product.offerPrice && product.offerPrice < product.basePrice && (
            <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-md">
              Save Kes {(product.basePrice - product.offerPrice).toFixed(2)}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400">
          {product.shortDescription}
        </p>

        {product.color && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              Color: <span className="font-normal">{product.color}</span>
            </h3>
          </div>
        )}

        {product.variantName && product.variantValues && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {product.variantName}
            </h3>
            <div className="flex mt-2 space-x-2">
              {product.variantValues.split(",").map((variant: string) => (
                <button
                  key={variant.trim()}
                  className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  {variant.trim()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <button className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
        <button className="p-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          <HeartIcon className="w-6 h-6 fill-red-700" />
          <span className="sr-only">Add to wishlist</span>
        </button>
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Highlights
        </h3>
        <div className="mt-4">
          <ul className="pl-4 space-y-2 text-sm list-disc text-gray-600 dark:text-gray-400">
            {product.description
              .split(".")
              .filter((s: string) => s.trim().length > 0)
              .slice(0, 3)
              .map((highlight: string, index: number) => (
                <li key={index}>{highlight.trim()}.</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
