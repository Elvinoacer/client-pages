"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { cartItems } from "@/lib/constants/cart";

export default function CartPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5 lg:mt-0">
              <CartSummary items={cartItems} />
              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="flex justify-center w-full px-4 py-3 text-base font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/products"
                  className="text-sm font-medium   text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </motion.div>
    </div>
  );
}
