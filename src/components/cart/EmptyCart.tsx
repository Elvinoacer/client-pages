import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="py-12 text-center">
      <ShoppingBagIcon className="w-12 h-12 mx-auto text-gray-400" />
      <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
        Your cart is empty
      </h3>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Start shopping to add items to your cart
      </p>
      <div className="mt-6">
        <Link
          href="/products"
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
